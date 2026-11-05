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
        testo: "El palacio principal de la dinastía Joseon, construido en 1395 y en gran parte reconstruido tras la ocupación japonesa. Durante el día se celebra el cambio de guardia con trajes de época.",
        come: "Metro línea 3 hasta Gyeongbokgung. Se visita por libre; quien lleva hanbok entra gratis.",
        quando: "Cerrado los martes (Changdeokgung y los demás palacios cierran los lunes); si el día de cierre es festivo, cierra el primer día laborable siguiente. Cambio de guardia a las 10 y a las 14.",
        tempo: "2 horas",
        costo: "3.000 wones adultos; gratis para quien lleva hanbok (2026)",
        url: "https://royal.khs.go.kr/",
        consiglio: "Visitarlo en hanbok, como hicimos nosotros, es la opción más económica y divertida.",
      },
      {
        nome: "Changdeokgung y el Jardín Secreto (Huwon)",
        testo: "Palacio Joseon de principios del siglo XV, Patrimonio de la UNESCO, construido siguiendo la forma de la colina en lugar de imponerse a ella. El jardín trasero, Huwon, con pabellones sobre estanques y árboles centenarios, era el lugar de recreo y estudio de los reyes, y se visita por turnos, con plazas limitadas y entrada aparte.",
        come: "Metro línea 3 hasta Anguk. Hacen falta dos entradas, la del palacio y la del Jardín Secreto, que se reservan en la web oficial de los palacios reales, desde 6 días antes a las 10:00 hasta el día anterior; una parte de las plazas se vende en taquilla el mismo día, desde las 9:00. Jardín Secreto 5.000 wones (2026).",
        quando: "Cerrado los lunes. En abril-mayo y octubre-noviembre las entradas del Jardín Secreto se agotan muy rápido.",
        tempo: "2-2,5 horas",
        url: "https://royal.khs.go.kr/",
        consiglio: "Sin reserva no se ve el Jardín Secreto: las plazas se agotan.",
      },
      {
        nome: "Bukchon Hanok Village",
        testo: "Barrio de casas tradicionales coreanas entre Gyeongbokgung y Changdeokgung, todavía habitadas. Callejones en cuesta con vistas a los tejados y a la ciudad moderna.",
        come: "A pie desde Anguk (línea 3).",
        quando: "En la zona central del barrio los turistas solo pueden entrar de 10:00 a 17:00, con multas de hasta 100.000 wones para quien no respeta el horario (desde marzo de 2025). Ir a las 10:00, en día laborable.",
        tempo: "1-1,5 horas",
        consiglio: "Es un barrio donde vive gente: hablar en voz baja.",
      },
      {
        nome: "Memorial de la Guerra de Corea",
        testo: "Gran museo sobre la guerra de 1950-1953, con reconstrucciones, vehículos y salas. Gratuito.",
        come: "Metro líneas 4 y 6 hasta Samgakji.",
        quando: "Cerrado los lunes; abierto de 9:30 a 17:40.",
        tempo: "2-3 horas",
        costo: "Entrada gratuita",
        consiglio: "Conviene verlo antes de la DMZ: sin él, la frontera se queda en una excursión para hacer fotos.",
      },
      {
        nome: "Mercado de Gwangjang",
        testo: "El mercado histórico de Seúl, con comida callejera: bindaetteok (tortitas de judía mungo) y mayak gimbap.",
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
        testo: "La sauna coreana, a menudo abierta también de noche, con baños, saunas y zonas comunes donde incluso se puede dormir.",
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
      { nome: "Banchan", testo: "Pequeñas guarniciones que llegan con la comida, incluidas en el precio y a menudo repuestas si se acaban." },
      { nome: "Barbacoa coreana", testo: "La carne se da la vuelta uno mismo en la parrilla encastrada en la mesa." },
      { nome: "Gomtang y samgyetang", testo: "Sopas de ternera y de pollo con ginseng." },
      { nome: "Naengmyeon", testo: "Fideos fríos, para probar en verano." },
    ],
    attenzioni: [
      "Ir a Changdeokgung sin haber reservado el Jardín Secreto: tiene cupo, por turnos, y se agota.",
      "Fiarse solo de Google Maps: en Corea las apps más usadas para rutas a pie y en coche son Naver Map y KakaoMap.",
      "Visitar los palacios el día de cierre: Gyeongbokgung cierra los martes, Changdeokgung y los demás los lunes.",
      "Entrar en Bukchon antes de las 10:00 o después de las 17:00: en la zona central del barrio está prohibido para los turistas.",
      "Olvidar la T-money, la tarjeta recargable para metro y autobús.",
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
        testo: "Parque de la memoria a pocos kilómetros de la línea de demarcación, justo fuera de la zona controlada. Están el Puente de la Libertad, que cruzaron los prisioneros de guerra liberados al final del conflicto, y la locomotora acribillada a balazos recuperada de la zona desmilitarizada, hoy bien patrimonial protegido. En la valla los coreanos atan cintas con mensajes para los familiares que quedaron en el Norte.",
        come: "En tour desde Seúl o en tren por la línea Gyeongui, con un breve tramo a pie desde la estación.",
        quando: "Abierto todo el día; los tours salen por la mañana.",
        tempo: "45 minutos",
        costo: "Acceso libre al parque",
        consiglio: "Es el punto de partida hacia el Tercer Túnel y Dora, que solo se visitan en tour: llevar el pasaporte.",
      },
      {
        nome: "Tercer Túnel de infiltración",
        testo: "Uno de los túneles excavados por Corea del Norte bajo la frontera, descubierto en 1978, después de que se detectara una explosión subterránea. Mide 1.635 metros y corre a 73 metros bajo tierra, con unos dos metros de alto y de ancho. Se baja a pie por una galería de servicio muy inclinada y se camina por el túnel original hasta el muro de hormigón que lo cierra.",
        come: "Solo con un tour desde Seúl o con el programa turístico que sale de Imjingak.",
        quando: "Comprobar los días de apertura con el operador del tour.",
        tempo: "1 hora",
        consiglio: "La subida de vuelta es empinada y se nota en las piernas. Dentro no se fotografía.",
      },
      {
        nome: "Observatorio de Dora y estación de Dorasan",
        testo: "Desde el observatorio de Dora, en una colina, se mira dentro de Corea del Norte: el pueblo de propaganda de Kijong-dong, los campos y, con cielo limpio, la ciudad de Kaesong. Cerca está la estación de Dorasan, la última del Sur en la línea hacia Pyongyang, construida para una conexión que nunca entró en servicio regular.",
        come: "Con el mismo tour del Tercer Túnel.",
        quando: "Por la mañana, con cielo despejado: con calima el Norte no se ve.",
        tempo: "1 hora",
        consiglio: "Llevar unos prismáticos pequeños: los catalejos de monedas siempre tienen cola.",
      },
      {
        nome: "JSA de Panmunjom",
        testo: "El Área de Seguridad Conjunta, con los barracones azules donde se celebraron las negociaciones y los soldados de las dos Coreas a pocos metros. Desde julio de 2023, cuando un soldado estadounidense cruzó la frontera durante una visita, los tours para el público están suspendidos; desde mayo de 2025 el Mando de la ONU organiza solo visitas especiales para delegaciones de alto nivel.",
        come: "Por ahora no se visita como turista. Antes de comprar un tour que la incluya, comprobar las novedades en el portal oficial de la DMZ.",
        quando: "Cerrada al público desde 2023 (situación comprobada en noviembre de 2026).",
        tempo: "Media jornada, si reabre",
        url: "https://www.dmz.go.kr/",
        consiglio: "Si reabre, las normas de acceso las anunciará el Mando de la ONU. Mientras tanto, el Tercer Túnel y Dora siguen siendo la visita posible.",
      },
    ],
    programmi: [
      { titolo: "1 día: DMZ", tappe: ["Excursión desde primera hora de Seúl","Imjingak","Tercer Túnel","Observatorio de Dora","Vuelta por la tarde"] },
    ],
    zone: [
      { nome: "No hace falta dormir allí", perChi: "Excursión de un día desde Seúl", testo: "Toda la visita se hace con excursión desde Seúl." },
    ],
    sapori: [
      { nome: "Tofu y doenjang de la zona de Jangdan", testo: "Las habas de soja de Jangdan, en la zona de Paju, se usan para el tofu y para el doenjang, la pasta de soja fermentada." },
    ],
    attenzioni: [
      "Olvidar el pasaporte original: sin él no se pasa el control.",
      "Reservar el tour a última hora: las plazas para el Tercer Túnel y Dora se agotan, sobre todo en fin de semana.",
      "Comprar un tour que promete la JSA: desde 2023 está cerrada a los turistas, salvo reaperturas anunciadas por el Mando de la ONU.",
      "Fotografiar soldados e instalaciones militares donde los carteles lo prohíben: los guías lo hacen cumplir.",
      "Salir sin haber comprobado con el operador los días de cierre de los sitios.",
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
        nome: "Parque nacional de Seoraksan",
        testo: "Uno de los parques nacionales más famosos de Corea, un macizo de granito con crestas, valles, cascadas y templos. En la entrada de Seorak-dong está el templo de Sinheungsa, con un gran Buda de bronce sentado al aire libre. De aquí salen el teleférico a Gwongeumseong y el sendero a Ulsanbawi.",
        come: "Autobús urbano desde Sokcho hasta la entrada de Seorak-dong, o taxi.",
        quando: "Primavera y otoño; a mediados de octubre el follaje atrae multitudes. En algunos periodos de primavera y otoño los senderos altos cierran para prevenir incendios.",
        tempo: "Jornada completa",
        costo: "Entrada al parque gratuita; desde el 4 de mayo de 2023 se abolió también la entrada del templo",
        url: "https://www.knps.or.kr/",
        consiglio: "Evitar los fines de semana de octubre: la carretera de acceso se colapsa y las colas del teleférico son muy largas.",
      },
      {
        nome: "Gwongeumseong",
        testo: "Las ruinas de una fortaleza en una cima rocosa, a la que se llega en pocos minutos con el teleférico de Seorak. Desde arriba se ve todo el valle y, en días claros, el mar de Sokcho.",
        come: "Teleférico cerca de la entrada de Seorak-dong, luego una breve subida por roca.",
        quando: "A primera hora: en días de afluencia la cola del teleférico es larga.",
        tempo: "1,5 horas",
        consiglio: "Es la opción de quien no quiere caminar mucho, pero el último tramo es roca desnuda: calzado con buena suela.",
      },
      {
        nome: "Ulsanbawi",
        testo: "Una cresta de granito de seis picos, de 873 metros, a la que se llega por una larga escalera metálica pegada a la pared. Arriba se ven el mar de Sokcho y las crestas del Seorak.",
        come: "A pie desde la entrada de Seorak-dong, ida y vuelta por el mismo sendero.",
        quando: "Por la mañana, con buen tiempo; con viento fuerte el último tramo puede cerrarse.",
        tempo: "Medio día",
        consiglio: "La bajada pesa más que la subida: rodillas, calzado adecuado y agua.",
      },
      {
        nome: "Pueblo de Abai",
        testo: "El barrio construido en una lengua de arena por refugiados del Norte, sobre todo de la provincia de Hamgyong, durante la guerra de Corea. Se llega en la gaetbae, una barcaza que cruza el canal tirada a lo largo de un cable. En los callejones se come el ojingeo sundae y los naengmyeon de tradición norteña.",
        come: "Desde el centro de Sokcho a pie o en autobús; la barcaza sale del lado del centro.",
        quando: "Todo el día.",
        tempo: "1-2 horas",
        consiglio: "La travesía es brevísima, pero vale más que muchas atracciones.",
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
      "Ir un fin de semana de octubre: tráfico, colas y senderos llenos.",
      "Subestimar la escalera de Ulsanbawi: es empinada y está expuesta al viento.",
      "Quedarse en el Seoraksan y saltarse Abai.",
      "Salir hacia los senderos altos sin comprobar los cierres estacionales por riesgo de incendio en la web de los parques nacionales.",
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
        nome: "Aldea de Hahoe",
        testo: "Aldea Patrimonio de la UNESCO desde 2010, habitada por el clan Ryu de Pungsan desde los siglos XIV-XV. Las casas de los nobles tienen tejados de teja, las de los criados tejados de paja. El río Nakdong la envuelve en un meandro en forma de S, de ahí el nombre: Hahoe significa 'agua que gira'.",
        come: "Autobús 246 desde Andong o taxi. Comprobar el horario del último autobús a Andong.",
        quando: "A primera hora y por la tarde-noche.",
        tempo: "3-4 horas",
        consiglio: "Dormir allí cambia la visita: la noche y el amanecer son otro lugar.",
      },
      {
        nome: "Museo de las máscaras de Hahoe",
        testo: "El museo reúne máscaras de toda Corea y de muchos países del mundo, empezando por las de madera de Hahoe. Explica el talchum, el teatro de máscaras con el que los campesinos se burlaban de nobles y monjes. Cerca de la entrada de la aldea, en días fijos, se representa la danza de las máscaras de Hahoe.",
        come: "Cerca de la taquilla de la aldea, a pocos minutos a pie.",
        quando: "Horarios del museo y calendario de funciones en la web oficial de turismo de Andong.",
        tempo: "1 hora",
        consiglio: "Ver el espectáculo antes de recorrer la aldea: se entiende quién vivía dónde.",
      },
      {
        nome: "Dosan Seowon",
        testo: "Academia confuciana nacida de la escuela que el filósofo Yi Hwang, llamado Toegye, la cara del billete de mil wones, abrió aquí en 1560; sus discípulos la convirtieron en seowon en 1574. Pabellones de madera asomados al lago de Andong, en medio del bosque. Desde 2019 es Patrimonio de la UNESCO junto con otras ocho seowon coreanas.",
        come: "Autobús desde Andong (pocas salidas al día) o taxi.",
        quando: "Por la mañana.",
        tempo: "1,5 horas",
        consiglio: "Silencio y naturaleza: es el sitio para entender la Corea confuciana, más que cualquier museo.",
      },
      {
        nome: "Buyongdae",
        testo: "El acantilado en la orilla opuesta del Nakdong, desde el que se ve desde arriba el meandro en S del río y toda la aldea, con sus tejados de teja y de paja.",
        come: "En coche o en taxi, rodeando por la orilla opuesta del río.",
        quando: "Por la tarde.",
        tempo: "1 hora",
        consiglio: "Desde arriba se lee el mapa de la aldea: subir después de haberla recorrido, no antes.",
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
      "Hacer Hahoe en un día desde Seúl: el viaje es largo y se ve todo con prisas.",
      "No comprobar la hora del último autobús desde Hahoe: las salidas de la tarde son pocas.",
      "Tratar la aldea como un museo: está habitada y muchas casas son privadas.",
      "Entrar en los patios sin el cartel que los abre a los visitantes.",
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
        testo: "El parque de los túmulos reales del reino de Silla: grandes colinas de hierba en plena ciudad, tumbas de reyes y reinas de hace más de mil años. Del túmulo de Cheonmachong, la tumba del Caballo Celeste, proceden la corona de oro y la pintura del caballo, hoy tesoros nacionales.",
        come: "A pie o en bicicleta desde el centro.",
        quando: "Todo el día; al atardecer los túmulos proyectan sombras largas.",
        tempo: "1 hora",
        consiglio: "Se rodean en bicicleta como si nada.",
      },
      {
        nome: "Bulguksa",
        testo: "Templo budista construido en su forma actual desde el 751 en las laderas del monte Toham, Patrimonio de la UNESCO desde 1995 junto con Seokguram. Se sube por escalinatas de piedra en forma de puente y en el patio están las dos pagodas de piedra Dabotap y Seokgatap, de las más célebres de Corea.",
        come: "Autobús 10 u 11 desde el centro o la terminal de autobuses, o taxi.",
        quando: "Abierto todos los días desde las 9:00; última entrada a las 17:00 de noviembre a enero, a las 17:30 en febrero y octubre y a las 18:00 de marzo a septiembre (2026). A primera hora.",
        tempo: "1,5 horas",
        costo: "Acceso libre desde mayo de 2023",
        url: "https://www.bulguksa.or.kr/",
        consiglio: "Precioso y muy concurrido: llegar a la apertura, antes de los autobuses escolares.",
      },
      {
        nome: "Seokguram",
        testo: "Gruta artificial de granito del siglo VIII, en lo alto del monte Toham, con un gran Buda sentado que mira hacia el mar del Este. Es una de las obras maestras del arte budista coreano; se contempla tras un cristal.",
        come: "Bus 12 desde Bulguksa (pocas salidas) o taxi, y luego unos 10 minutos a pie por el bosque.",
        quando: "A primera hora: en días claros, desde la explanada se ve el amanecer sobre el mar.",
        tempo: "1 hora",
        costo: "Acceso libre desde 2023",
        consiglio: "Comprobar el horario de autobuses antes de subir: las salidas son escasas y la carretera es de montaña.",
      },
      {
        nome: "Donggung y Wolji (Anapji)",
        testo: "El palacio secundario de los reyes de Silla, con el estanque artificial excavado en el 674. De noche los pabellones reconstruidos se iluminan y se reflejan en el agua: es la postal de Gyeongju.",
        come: "A pie o en bicicleta desde el centro y desde Daereungwon.",
        quando: "Después del atardecer, hasta tarde.",
        tempo: "1 hora",
        consiglio: "Iluminado es uno de los mejores momentos de la visita.",
      },
      {
        nome: "Templestay",
        testo: "El programa de los templos budistas coreanos para quien quiere dormir en un monasterio: levantarse antes del alba para la oración, comidas en silencio con los monjes, meditación y tareas del templo. Varios templos alrededor de Gyeongju lo ofrecen, algunos también en inglés.",
        come: "Reservar en la web oficial de Templestay con algunas semanas de antelación.",
        quando: "Una noche, mejor entre semana.",
        tempo: "1 noche",
        url: "https://eng.templestay.com/",
        consiglio: "Ver la ficha de experiencia.",
      },
    ],
    programmi: [
      { titolo: "2 días: Gyeongju", tappe: ["Día 1: túmulos en bicicleta, Anapji al atardecer","Día 2: Bulguksa y Seokguram"] },
    ],
    zone: [
      { nome: "Centro histórico", perChi: "Quien quiere moverse en bicicleta", testo: "Centro llano con los sitios cerca." },
    ],
    sapori: [
      { nome: "Ssambap", testo: "Muchos cuencos pequeños para envolver en hojas." },
      { nome: "Pan de Hwangnam", testo: "Dulce de judías rojas, vendido en cajas de regalo." },
    ],
    attenzioni: [
      "Hacerla en el día desde Busan: Gyeongju merece al menos una noche, también para ver Wolji iluminado.",
      "Programar Seokguram sin mirar los autobuses: las salidas son pocas.",
      "Esperar ver de cerca el Buda de Seokguram: se mira tras un cristal.",
      "Salir en bicicleta hacia Bulguksa: el centro es llano, los templos están en la montaña.",
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
        nome: "Aldea de Gamcheon",
        testo: "Barrio de casas de colores escalonadas en la colina, nacido en los años cincuenta como asentamiento de refugiados de la guerra de Corea. Desde 2009 un proyecto artístico ha llenado los callejones de murales e instalaciones, como el Principito sentado en un murete mirando al puerto.",
        come: "Metro línea 1 hasta Toseong, luego minibús de barrio 2 o 2-2 cuesta arriba.",
        quando: "A primera hora, antes de los grupos.",
        tempo: "2 horas",
        url: "https://www.gamcheon.or.kr/",
        consiglio: "Es un barrio habitado: respetar los carteles que piden silencio, no entrar en los patios y no fotografiar el interior de las ventanas.",
      },
      {
        nome: "Mercado de Jagalchi",
        testo: "El gran mercado de pescado de Busan, considerado el más grande de Corea del Sur, en el puerto de Nampo. Las vendedoras, las célebres ajumma de Jagalchi, ofrecen pescado, pulpos y marisco vivos; se elige, se paga y se puede hacer cocinar en los restaurantes del mercado.",
        come: "Metro línea 1 hasta Jagalchi.",
        quando: "Por la mañana, cuando el mercado está más vivo, o a mediodía.",
        tempo: "1,5 horas",
        consiglio: "Preguntar el precio por kilo antes de elegir y cuánto cuesta la preparación, que se paga aparte.",
      },
      {
        nome: "Haedong Yonggungsa",
        testo: "Templo budista construido sobre las rocas, a pico sobre el mar, en el este de la ciudad, fundado según la tradición en 1376. Se baja por una escalinata entre estatuas y farolillos hasta los pabellones junto al agua.",
        come: "Tren Donghae hasta OSIRIA, y luego a pie, o bus desde Haeundae.",
        quando: "Al amanecer o en días laborables; el fin de semana se camina en fila india.",
        tempo: "1,5 horas",
        consiglio: "Bajar hasta el pabellón más bajo, junto a las rocas: ahí se oye el mar. Al amanecer la luz llega desde detrás del agua.",
      },
      {
        nome: "Haeundae y Gwangalli",
        testo: "Las dos playas urbanas de Busan. Haeundae es la más famosa, con los rascacielos detrás; Gwangalli mira al puente de Gwangan, que se ilumina por la noche. Entre ambas, el parque costero de Igidae tiene un sendero por el acantilado con el skyline enfrente.",
        come: "Metro línea 2 hasta Haeundae o Gwangan.",
        quando: "Por la noche en Gwangalli; Igidae por la mañana.",
        tempo: "2-3 horas",
        consiglio: "El sendero costero de Igidae muestra el skyline.",
      },
      {
        nome: "Cementerio de la ONU",
        testo: "El único cementerio de las Naciones Unidas del mundo, con las tumbas de unos 2.300 soldados de once países caídos en la guerra de Corea. El jardín está cuidado y en silencio; el Muro del Recuerdo lleva los nombres de todos los caídos de las fuerzas de la ONU.",
        come: "Metro o autobús hasta la zona de Daeyeon, en el distrito de Nam-gu.",
        quando: "Por la mañana; horarios, días de apertura y entrada en la web oficial.",
        tempo: "1 hora",
        consiglio: "Da sentido al viaje después de la DMZ.",
      },
    ],
    programmi: [
      { titolo: "2 días: Busan", tappe: ["Día 1: Gamcheon, Jagalchi, Gwangalli","Día 2: Haedong Yonggungsa, Igidae, cementerio de la ONU"] },
    ],
    zone: [
      { nome: "Haeundae", perChi: "Quien quiere playa", testo: "Zona turística con hoteles." },
      { nome: "Seomyeon / Nampo", perChi: "Quien quiere metro y locales", testo: "Zonas céntricas, bien comunicadas por metro, con tiendas y locales." },
    ],
    sapori: [
      { nome: "Dwaeji gukbap", testo: "Sopa de cerdo servida con arroz, uno de los platos típicos de Busan." },
      { nome: "Milmyeon", testo: "Fideos fríos de harina." },
    ],
    attenzioni: [
      "Tratar Gamcheon como un decorado fotográfico: allí vive gente.",
      "Ir a Haedong Yonggungsa en fin de semana.",
      "Saltarse el cementerio de la ONU.",
      "Pedir en el mercado de Jagalchi sin preguntar antes el precio por kilo y el de la cocción.",
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
        nome: "Aldea de hanok",
        testo: "Uno de los mayores barrios de casas tradicionales coreanas todavía habitados, con más de ochocientos hanok de tejados de tejas curvas, crecido alrededor de las antiguas murallas de la ciudad. La calle principal está llena de tiendas, alquiler de hanbok y comida callejera.",
        come: "KTX desde Seúl hasta Jeonju, luego autobús o taxi.",
        quando: "Día laborable.",
        tempo: "3 horas",
        url: "https://tour.jeonju.go.kr/",
        consiglio: "Bastan dos calles transversales para encontrar patios silenciosos.",
      },
      {
        nome: "Gyeonggijeon",
        testo: "El santuario construido en 1410 para guardar el retrato de Taejo, fundador de la dinastía Joseon. En el conjunto están también el museo de retratos reales y un tranquilo bosquecillo de bambú.",
        come: "Frente a la aldea de hanok, a pie.",
        quando: "Por la mañana; horarios en la web oficial de turismo de Jeonju.",
        tempo: "45 minutos",
        consiglio: "Poca gente en comparación con la calle principal: el jardín es el sitio para una pausa a la sombra.",
      },
      {
        nome: "Catedral de Jeondong",
        testo: "Catedral de ladrillo rojo y granito, construida entre 1908 y 1914 en estilo románico-bizantino. Se levanta en el lugar donde en 1791 fueron ejecutados los primeros mártires católicos coreanos.",
        come: "A la entrada de la aldea de hanok, a pie.",
        quando: "Todo el día, fuera de las horas de misa.",
        tempo: "30 minutos",
        consiglio: "Al atardecer, con la luz sobre los ladrillos, es una de las mejores fotos del barrio.",
      },
      {
        nome: "Omokdae",
        testo: "El pabellón en la colina donde el general Yi Seong-gye, futuro rey Taejo, celebró la victoria de Hwangsan sobre los piratas japoneses. Desde la terraza se ven los tejados de teja de toda la aldea.",
        come: "A pie, breve subida desde el lado este de la aldea.",
        quando: "Atardecer.",
        tempo: "30 minutos",
        consiglio: "La vista es gratis y casi vacía: la multitud se queda abajo.",
      },
      {
        nome: "Mercado de Nambu",
        testo: "El mercado tradicional junto a la puerta Pungnammun, donde para desayunar se come el kongnamul gukbap, la sopa de brotes de soja típica de Jeonju. En el segundo piso está el Youth Mall, con pequeñas tiendas y locales abiertos por jóvenes del lugar, y el mercado organiza también un mercado nocturno.",
        come: "A pie desde la aldea de hanok.",
        quando: "Por la mañana, para la sopa del desayuno. Al amanecer, de las 4 a las 10 aproximadamente, junto al arroyo delante del mercado se monta el Dokkaebi, el mercado de los agricultores. Las tiendas del Youth Mall tienen horarios distintos.",
        tempo: "1 hora",
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
      { nome: "Makgeolli", testo: "Vino de arroz turbio y ligeramente espumoso, a menudo servido en jarras." },
      { nome: "Kongnamul gukbap", testo: "Sopa de brotes de soja." },
    ],
    attenzioni: [
      "Ir en fin de semana: la calle principal se convierte en un río de gente con hanbok.",
      "Quedarse en la calle principal: las transversales son la razón para venir.",
      "Esperar un pueblo antiguo intacto: las casas son en su mayoría del siglo XX y muchas son ahora casas de huéspedes.",
      "Reservar una hanok sin mirar el baño: en algunas casas es compartido.",
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
        testo: "El museo de la costa noreste cuenta la vida de las haenyeo, las mujeres que bucean en apnea para recoger mariscos y algas sin botellas. Su cultura es Patrimonio Inmaterial de la UNESCO desde 2016. Hay herramientas, barcas, fotografías y filmaciones de las inmersiones.",
        come: "En coche de alquiler o con los autobuses de la costa este.",
        quando: "Horarios y día de cierre en la web oficial.",
        tempo: "1,5 horas",
        consiglio: "Ir antes de buscar a las haenyeo en el agua: se entiende lo que se está mirando.",
      },
      {
        nome: "Seongsan Ilchulbong",
        testo: "Un cono volcánico nacido de una erupción submarina, de unos 180 metros, que se alza del mar en la punta este de la isla. Arriba hay un amplio cráter cubierto de hierba. Es Patrimonio de la UNESCO desde 2007 junto con el Hallasan y los tubos de lava.",
        come: "En coche o bus desde la ciudad de Jeju, y luego una subida por escalones hasta el cráter.",
        quando: "Al amanecer: el nombre significa 'pico del sol naciente'.",
        tempo: "2 horas",
        url: "https://www.visitjeju.net/",
        consiglio: "Subir pronto: con el sol alto la escalinata está expuesta y llena.",
      },
      {
        nome: "Hallasan",
        testo: "El volcán en el centro de la isla, 1.947 metros, la montaña más alta de Corea del Sur. Los senderos de Seongpanak y Gwaneumsa llegan hasta el lago del cráter, el Baengnokdam; el de Yeongsil, más corto, se queda antes de la cima pero es muy panorámico.",
        come: "En coche o autobús hasta el inicio del sendero. Para los dos senderos de cumbre, Seongpanak y Gwaneumsa, hace falta reserva online, con plazas limitadas al día. El martes es día de descanso de la montaña y los senderos también cierran en Seollal y Chuseok.",
        quando: "Jornada completa con buen tiempo. Hay horas límite para pasar los puntos intermedios: a quien llega tarde le hacen volver.",
        tempo: "6-9 horas",
        url: "https://visithalla.jeju.go.kr/",
        consiglio: "Salir al amanecer con agua y capas: en la cima hace mucho más frío que en la costa y las nubes llegan en minutos.",
      },
      {
        nome: "Manjanggul",
        testo: "Uno de los tubos de lava más largos del mundo, formado por un río de lava que se enfrió en la superficie y siguió corriendo por dentro. Se visita un tramo de un kilómetro aproximadamente, hasta una columna de lava de más de siete metros. Reabrió a finales de mayo de 2026, tras un largo cierre por desprendimientos.",
        come: "En coche de alquiler o con los autobuses de la costa noreste.",
        quando: "Cerrado el primer miércoles de cada mes; otros horarios en la web oficial.",
        tempo: "1 hora",
        costo: "4.000 wones adultos (2026)",
        consiglio: "Dentro hace fresco incluso en verano y el suelo está mojado: chaqueta y calzado cerrado.",
      },
      {
        nome: "Parque de la Paz 4·3",
        testo: "El memorial de las víctimas del 3 de abril de 1948 y de los años siguientes, cuando la represión tras una revuelta en la isla causó miles de muertos entre los civiles. El museo es sobrio y muy intenso; en el parque están las lápidas con los nombres.",
        come: "En coche, al este de Jeju ciudad.",
        quando: "Abierto de 9:00 a 18:00; cerrado el primer y el tercer lunes del mes.",
        tempo: "1,5 horas",
        costo: "Entrada gratuita",
        url: "https://jeju43peace.or.kr/",
        consiglio: "Para entender la historia de la isla.",
      },
    ],
    programmi: [
      { titolo: "3 días: Jeju", tappe: ["Día 1: haenyeo y Seongsan","Día 2: Hallasan","Día 3: Manjanggul y Parque de la Paz"] },
    ],
    zone: [
      { nome: "Ciudad de Jeju", perChi: "Quien quiere transporte", testo: "Cómoda para el aeropuerto y los buses de la isla." },
      { nome: "Seogwipo", perChi: "Quien quiere el sur", testo: "Más tranquila." },
    ],
    sapori: [
      { nome: "Cerdo negro", testo: "Cerdo negro de Jeju a la parrilla, uno de los platos más conocidos de la isla." },
      { nome: "Galchi", testo: "Pez sable a la parrilla o guisado." },
    ],
    attenzioni: [
      "Esperar a las haenyeo en el agua a demanda: las inmersiones dependen del mar y de la temporada.",
      "Fotografiarlas de cerca sin preguntar.",
      "Salir sin permiso internacional de conducir (modelo de Ginebra de 1949): hace falta junto con el carné nacional para conducir.",
      "Salir hacia la cima del Hallasan sin reserva en los senderos de Seongpanak y Gwaneumsa.",
    ],
    esperienzeSlugs: ['haenyeo-jeju', 'seongsan-ilchulbong', 'hallasan'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La costa de Yongmeori y el mar vistos desde el monte Sanbangsan, isla de Jeju',
    immagine: '/images/corea-del-sud/jeju.jpg',
  },
]
