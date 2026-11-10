import type { Destinazione } from '@/lib/types'

export const destinazioniMalesia: Destinazione[] = [
  {
    slug: 'kuala-lumpur',
    paeseSlug: 'malesia',
    ordine: 1,
    nome: 'Kuala Lumpur',
    tipologia: ['città', 'gastronomia', 'architettura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "Una capital que pasó de ser un campamento de buscadores de estaño a una ciudad de rascacielos, donde una mezquita, un templo hindú y un templo chino pueden estar en la misma manzana y donde la institución cívica es la comida callejera.",
    percheAndarci:
      "Es la forma más rápida de entender cómo funciona Malasia: tres comunidades viven en la misma ciudad con lenguas, religiones y cocinas separadas, y se encuentran en los food courts. Y es un excelente hub aéreo, del que parte todo el resto del viaje.",
    cosaVedere: [
      'Las Torres Petronas, con el skybridge y la plataforma panorámica',
      'Las Cuevas Batu, con la estatua dorada de Murugan de casi 43 metros de altura y la larga escalinata de colores',
      'La mezquita Masjid Jamek, en la confluencia de los dos ríos de los que la ciudad toma su nombre',
      'El barrio de Chinatown alrededor de Petaling Street y el templo Sri Mahamariamman',
      'El Museo de Artes Islámicas, rico y normalmente tranquilo',
      'El mercado nocturno de Jalan Alor, donde se cena al aire libre entre puestos de cocinas distintas',
    ],
    cosaFare: [
      'Subir a las Cuevas Batu temprano por la mañana, antes del calor y de los grupos (hay una ficha de experiencia dedicada)',
      'Cenar en Jalan Alor, la forma correcta de pasar la primera noche',
      'Recorrer los barrios a pie: Chinatown, Little India en Brickfields, Kampung Baru',
      'Pasear por la pasarela de copas del parque forestal de Bukit Nanas, un retazo de selva pluvial en pleno centro de la ciudad',
    ],
    doveDormire:
      "Bukit Bintang por la comodidad y la vida nocturna, Chinatown por los precios bajos y el carácter, KLCC por la cercanía a las torres y a los centros comerciales. La ciudad es grande y caótica: conviene estar cerca de una estación de monorraíl o de metro.",
    doveMangiare:
      "Kuala Lumpur es una ciudad donde se come muy bien, y la forma de hacerlo es una sola: los food courts y los puestos callejeros, olvidándose de los restaurantes. Hay que probar el nasi lemak (arroz al coco con sambal, anchoas secas, cacahuetes y huevo: se considera el plato nacional y se come en el desayuno), el char kway teow, el roti canai indio por la mañana con dahl, el laksa y el satay a la brasa. Jalan Alor por la noche es la versión más escenográfica; los food courts de los centros comerciales, con aire acondicionado, son buenos y baratos.",
    comeArrivare: "Desde el KLIA (terminales 1 y 2) el tren KLIA Ekspres llega a KL Sentral en unos 30 minutos, con un tren cada 15-20 minutos desde las 5 hasta pasada la medianoche: 55 ringgit, unos 11 € (65 desde el 1 de enero de 2027), con un 10% de descuento en la app o pagando con tarjeta contactless en el torniquete. El autobús a KL Sentral cuesta unos 15 ringgit y tarda una hora o más; un Grab unos 70-100 ringgit, hasta una hora con tráfico. Taxis solo con el cupón prepagado del mostrador. Desde KL Sentral se sigue en metro, monorraíl o Grab. En inmigración pueden pedir la MDAC rellenada en línea.",
    comeSpostarsi:
      "Metro, monorraíl y LRT cubren bien el centro, con la Touch 'n Go o el billete sencillo. Grab es barato y resuelve todo lo demás. Caminar es posible pero cansado: aceras discontinuas, calor y humedad.",
    periodoMigliore:
      "todo el año, con chubascos por la tarde en cualquier estación.",
    costi: "Batu Caves, mezquitas, templos y parques gratuitos; Museo de Artes Islámicas 20 ringgit (unos 4 €), KL Forest Eco Park 40 ringgit para extranjeros (unos 8 €), skybridge de las Petronas unos 80 ringgit (unos 16 €). Metro y monorraíl cuestan pocos ringgit por trayecto. Presupuesto diario: unos 30-40 € con albergue y food courts, 70-110 € con un hotel de gama media en Bukit Bintang, más de 200 € en un hotel de lujo en KLCC.",
    erroriDaEvitare: [
      "Subir a las Cuevas Batu a mediodía: una larga escalinata bajo el sol ecuatorial, con los monos que roban todo lo que se lleva en la mano",
      "Vestirse demasiado destapado para visitar templos y mezquitas: en las Cuevas Batu y en la Masjid Negara hacen falta hombros y rodillas cubiertos, y los sarongs prestados a la entrada solo lo resuelven en parte",
      "Juzgar la ciudad por los centros comerciales de Bukit Bintang: lo que vale está en los barrios, a pie",
      "Contar con las tarjetas en los puestos callejeros: ahí hace falta efectivo",
    ],
    miaEsperienza:
      "Casi todos usan Kuala Lumpur como escala, y sin embargo aguanta dos días completos, a condición de recorrerla por barrios más que por monumentos. Las Petronas se miran desde abajo en la hora azul y está bien así: la subida al skybridge cuesta y devuelve menos de lo que promete. Las Cuevas Batu hay que hacerlas a las siete de la mañana, cuando los escalones de colores todavía están a la sombra y los fieles suben a rezar: dos horas después es una escalinata abrasadora con cientos de personas y los monos arrancando las botellas de las manos. El recuerdo que queda, sin embargo, es más sencillo: la noche en Jalan Alor, sentados en taburetes de plástico en medio de la calle, con una cocina china a la derecha, una malaya a la izquierda y un puesto indio enfrente. Es ahí donde se entiende de qué país se está hablando.",
    luoghi: [
      {
        nome: "Petronas Twin Towers",
        testo: "Las torres gemelas, de 452 metros y las más altas del mundo entre 1998 y 2004, son el símbolo de la ciudad. Se visita el skybridge del piso 41, que une las dos torres, y el mirador del piso 86; a sus pies está el parque KLCC con la fuente.",
        come: "LRT hasta KLCC, con salida directa al centro comercial. Las entradas para la subida son con horario y se reservan online en el sitio oficial.",
        quando: "De martes a domingo, 9-21; cerrado los lunes salvo festivos (2025). El atardecer es la hora más solicitada y las plazas se acaban. Desde abajo las torres se ven mejor a la hora azul.",
        tempo: "1 hora para la subida; el parque KLCC se recorre en media hora",
        costo: "unos 80 ringgit para extranjeros, unos 16 € (2026); entradas con hora en la web oficial (los revendedores no oficiales no reembolsan)",
        consiglio: "Quien no quiera gastar puede mirarlas desde abajo y ver la panorámica desde otra torre, la KL Tower.",
        orari: "martes-domingo 9-21, cerrado el lunes salvo festivos",
        url: "https://www.petronastwintowers.com.my/",
        lat: 3.15785,
        lng: 101.71165
      },
      {
        nome: "Batu Caves",
        testo: "Un santuario hindú en una cueva caliza, precedido por la estatua dorada de Murugan, de casi 43 metros, y por 272 escalones de colores. Dentro hay un gran salón con pequeños templos, la luz que entra por una abertura del techo y monos en las escaleras.",
        come: "Tren Komuter desde KL Sentral hasta la terminal de Batu Caves. La entrada a la cueva principal es libre. La Dark Cave, la cueva interior protegida, solo se visita con las salidas educativas de la Malaysian Nature Society, cuando están activas. Hombros y rodillas cubiertos.",
        quando: "Temprano por la mañana, con los fieles subiendo y los escalones a la sombra. Durante la fiesta del Thaipusam las multitudes son enormes.",
        tempo: "2 horas",
        costo: "entrada gratuita",
        consiglio: "No llevar en la mano botellas, gafas ni comida: los monos las arrebatan.",
        orari: "todos los días, desde primera hora de la mañana hasta la noche",
        lat: 3.2379,
        lng: 101.684
      },
      {
        nome: "Masjid Jamek",
        testo: "La mezquita, de 1909, está en la confluencia de los ríos Klang y Gombak, donde nació la ciudad. Un poco más allá está Merdeka Square, donde el 31 de agosto de 1957 se arrió la bandera británica y se izó por primera vez la malaya, con el Sultan Abdul Samad Building al lado.",
        come: "LRT hasta Masjid Jamek. La mezquita se visita fuera de las horas de oración, con una túnica prestada en la entrada.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        consiglio: "Seguir a pie hasta Chinatown, en la misma tarde.",
        costo: "entrada libre",
        orari: "visitas fuera de las horas de oración",
        lat: 3.14905,
        lng: 101.69575
      },
      {
        nome: "Chinatown, Petaling Street y Sri Mahamariamman",
        testo: "El barrio chino con el mercado callejero y un templo hindú histórico, a pocos pasos uno del otro.",
        come: "LRT hasta Pasar Seni. El mercado es al aire libre, el templo se visita descalzo.",
        quando: "Por la mañana el templo; por la noche la calle, cuando el mercado está más vivo.",
        tempo: "1 hora y media",
        consiglio: "No comprar las falsificaciones: los precios iniciales son muy altos.",
        costo: "entrada libre al templo",
        lat: 3.1445,
        lng: 101.6978
      },
      {
        nome: "Museo de Artes Islámicas",
        testo: "Un museo rico sobre el tema: tejidos, cerámicas, manuscritos y maquetas de mezquitas. Normalmente está tranquilo.",
        come: "En el parque de los Lake Gardens, cerca de la Mezquita Nacional. En taxi o Grab, o a pie desde KL Sentral con una caminata larga.",
        quando: "Abierto todos los días, 9:30-18 (última entrada 17:30). Ideal a primera hora de la tarde, en las horas de más calor.",
        tempo: "2 horas",
        url: "https://www.iamm.org.my/",
        consiglio: "La cafetería del museo, climatizada y silenciosa, es una pausa excelente.",
        costo: "20 ringgit, unos 4 € (web oficial, 2026)",
        orari: "todos los días 9:30-18, última entrada 17:30",
        lat: 3.1418,
        lng: 101.6899
      },
      {
        nome: "Jalan Alor",
        testo: "Una calle cerrada al tráfico por la noche, con mesas al aire libre y cocinas china, malaya e india una junto a otra. El sitio donde comer la primera noche.",
        come: "A pie desde Bukit Bintang o en monorraíl hasta Bukit Bintang.",
        quando: "Por la noche.",
        tempo: "1-2 horas",
        consiglio: "Preguntar el precio antes de pedir el pescado, que se paga al peso.",
        costo: "platos desde pocos ringgit hasta una decena, unos 1-3 €",
        orari: "desde media tarde hasta bien entrada la noche; efectivo en los puestos",
        lat: 3.1455,
        lng: 101.7087
      },
      {
        nome: "Plaza Merdeka y Sultan Abdul Samad Building",
        testo: "La gran explanada de césped donde a medianoche del 31 de agosto de 1957 se arrió la bandera británica y se izó la malaya, en un mástil de 95 metros. Enfrente está el Sultan Abdul Samad Building, de 1897, de estilo morisco con cúpulas de cobre y torre del reloj; al otro lado, el antiguo Royal Selangor Club, de estilo Tudor.",
        come: "LRT hasta Masjid Jamek y cinco minutos a pie. Se ve desde fuera, junto con la mezquita.",
        quando: "A primera hora de la mañana, o por la noche cuando los edificios están iluminados.",
        tempo: "45 minutos",
        costo: "gratuito",
        orari: "siempre accesible",
        consiglio: "Un poco más al sur está la Kuala Lumpur City Gallery, con la maqueta de la ciudad: útil para orientarse el primer día.",
        lat: 3.1478,
        lng: 101.6934
      },
      {
        nome: "Masjid Negara",
        testo: "La Mezquita Nacional, inaugurada en 1965 pocos años después de la independencia: un tejado en forma de paraguas con dieciocho puntas, por los trece estados de la federación y los cinco pilares del islam, y un minarete de 73 metros. Es arquitectura moderna, con estanques y jardines, muy distinta de las mezquitas coloniales.",
        come: "A pie desde el Museo de Artes Islámicas, cinco minutos, o en Grab. Los no musulmanes entran por un acceso propio; en la entrada prestan gratis una túnica larga y hay que quitarse los zapatos.",
        quando: "Por la mañana, fuera de las horas de oración.",
        tempo: "45 minutos",
        costo: "entrada libre",
        orari: "visitas para no musulmanes fuera de las horas de oración, con franjas más cortas el viernes",
        consiglio: "Se combina con el Museo de Artes Islámicas: primero la mezquita, luego el museo en las horas de calor.",
        lat: 3.142,
        lng: 101.6917
      },
      {
        nome: "Perdana Botanical Garden (Lake Gardens)",
        testo: "El gran parque colonial de la década de 1880, alrededor de un lago, en la colina detrás de la Mezquita Nacional. Dentro están el jardín de orquídeas y el de hibiscos, la flor nacional malaya, y es donde la ciudad sale a correr por la mañana.",
        come: "En Grab, o a pie desde la Masjid Negara subiendo por el parque.",
        quando: "Al amanecer o a última hora de la tarde; a mediodía hay poca sombra.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "Quien no quiera caminar mucho, que se quede con el jardín de orquídeas, el más cuidado.",
        lat: 3.1429,
        lng: 101.6848
      },
      {
        nome: "KL Forest Eco Park (Bukit Nanas)",
        testo: "Una de las reservas forestales más antiguas del país, protegida desde 1906: selva tropical de verdad en pleno centro, a los pies de la KL Tower. Una pasarela colgante entre los árboles permite caminar a la altura de las copas, con los rascacielos asomando entre las hojas.",
        come: "Monorraíl hasta Bukit Nanas y diez minutos de subida a pie; también se entra por el lado de la KL Tower. Se paga en la entrada, mejor en efectivo.",
        quando: "A primera hora, antes del calor. Con mal tiempo la pasarela cierra.",
        tempo: "1-1 hora y media",
        costo: "40 ringgit para extranjeros, unos 8 € (2026)",
        consiglio: "Repelente y agua: es selva de verdad, con mosquitos y humedad.",
        lat: 3.1516,
        lng: 101.7015
      },
      {
        nome: "KL Tower (Menara Kuala Lumpur)",
        testo: "La torre de telecomunicaciones de 421 metros, terminada en 1995. Está sobre la colina de Bukit Nanas, así que su mirador a 276 metros queda más alto que el skybridge de las Petronas, y en la Sky Deck al aire libre se está fuera, con el viento.",
        come: "Lanzadera gratuita desde la entrada de Jalan Puncak, o a pie atravesando el KL Forest Eco Park.",
        quando: "Al atardecer, con las Petronas encendiéndose enfrente.",
        tempo: "1 hora",
        orari: "todos los días 9-22; la Sky Deck al aire libre cierra con mal tiempo",
        url: "https://kltower.com.my/",
        consiglio: "Es la torre desde la que se ven las Petronas: si se sube solo a una, que sea esta.",
        lat: 3.1528,
        lng: 101.7038
      },
      {
        nome: "Templo Thean Hou",
        testo: "Un templo chino de seis niveles, terminado a finales de los años ochenta y dedicado a Mazu, la diosa del mar querida por los marineros. Tejados rojos y dorados, cientos de farolillos y una terraza con vistas a la ciudad.",
        come: "En Grab, unos 15 minutos desde el centro: no hay una parada cómoda cerca.",
        quando: "A última hora de la tarde, con la luz cálida sobre los tejados; en el Año Nuevo chino los farolillos son miles y hay mucha gente.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Se combina bien con Brickfields, a pocos minutos en Grab.",
        lat: 3.1218,
        lng: 101.6873
      },
      {
        nome: "Kampung Baru",
        testo: "Un pueblo malayo de 1900 que sobrevive entre los rascacielos, con casas de madera sobre pilotes, huertos y puestos de nasi lemak. El contraste con las Petronas, a un kilómetro, es la razón para venir.",
        come: "LRT hasta Kampung Baru. Desde el lado de KLCC se llega a pie por la pasarela Saloma Link, sobre el río Klang.",
        quando: "Al atardecer, y luego la cena en los puestos y el puente iluminado.",
        tempo: "1-2 horas",
        costo: "gratuito",
        consiglio: "Las casas están habitadas: se camina por las calles y no se entra en los patios.",
        lat: 3.1631,
        lng: 101.703
      },
      {
        nome: "Central Market (Pasar Seni) y Kwai Chai Hong",
        testo: "El mercado cubierto de 1888, con la fachada art déco azul de 1937, hoy lleno de artesanía: batik, madera tallada, peltre. A pocos pasos, Kwai Chai Hong es un callejón restaurado de Chinatown con murales sobre la vida del barrio en los años sesenta.",
        come: "LRT hasta Pasar Seni. El mercado tiene aire acondicionado.",
        quando: "El mercado en las horas de calor; Kwai Chai Hong por la noche, con las luces.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "En el piso de arriba del mercado hay un food court barato.",
        lat: 3.1456,
        lng: 101.6956
      },
      {
        nome: "Brickfields (Little India)",
        testo: "El barrio indio junto a KL Sentral: arcos de colores en Jalan Tun Sambanthan, puestos de guirnaldas de flores, tiendas de saris y música tamil por los altavoces. Es el sitio para el arroz servido sobre hoja de plátano.",
        come: "A pie desde KL Sentral o desde la parada de monorraíl KL Sentral, cinco minutos.",
        quando: "A la hora de comer, para el banana leaf rice.",
        tempo: "1-1 hora y media",
        costo: "gratuito",
        consiglio: "El banana leaf se come con la mano derecha; al final se dobla la hoja hacia uno mismo para decir que ha gustado.",
        lat: 3.1304,
        lng: 101.6856
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Primera hora: Batu Caves, con la subida a la sombra",
          "Regreso y desayuno en KL Sentral",
          "Primera hora de la tarde: Museo de Artes Islámicas, al fresco",
          "Media tarde: Masjid Jamek a pie, luego Chinatown",
          "Hora azul: las Petronas desde abajo",
          "Noche: cena en Jalan Alor"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Batu Caves al amanecer, Masjid Negara y Museo de Artes Islámicas en las horas de calor, Petronas y KLCC Park a la hora azul",
          "Día 2: Masjid Jamek y Plaza Merdeka por la mañana, Central Market y Chinatown",
          "Comida en Brickfields con banana leaf rice, luego el templo Thean Hou",
          "Noche: cena en Jalan Alor y Bukit Bintang"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1 y 2: como arriba",
          "Día 3: KL Forest Eco Park a la apertura y subida a la KL Tower",
          "Tarde: Perdana Botanical Garden, o la tarde libre en las horas de calor",
          "Atardecer en Kampung Baru y luego el puente Saloma Link hacia las Petronas iluminadas",
          "En lugar del tercer día en la ciudad: una excursión a Malaca o a Putrajaya"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Bintang",
        perChi: "quien quiere comida, tiendas y vida nocturna",
        testo: "El centro de las compras, con muchísimas opciones de alojamiento y restaurantes. Es ruidoso y algo turístico, pero bien conectado.",
        fascia: "40-110 €"
      },
      {
        nome: "KLCC",
        perChi: "quien busca vistas a las torres y hoteles de gama alta",
        testo: "Tranquilo, limpio, con restaurantes de calidad. Menos vida auténtica.",
        fascia: "90-220 €"
      },
      {
        nome: "Chinatown y Pasar Seni",
        perChi: "quien quiere ahorrar y estar cerca de mercados y estación",
        testo: "Hostales y hoteles baratos, cerca del tren al aeropuerto. Ruidoso por la noche.",
        fascia: "25-70 €"
      },
      {
        nome: "KL Sentral y Brickfields",
        perChi: "quien llega o se va en tren o en avión",
        testo: "Hoteles alrededor de la estación central, donde llega el KLIA Ekspres y paran el metro, el monorraíl y los trenes a las Batu Caves. Práctica más que bonita; por la noche se come en Brickfields.",
        fascia: "40-100 €"
      }
    ],
    sapori: [
      {
        nome: "Nasi lemak",
        testo: "Arroz con coco, anchoas fritas, huevo, pepino y sambal. El desayuno nacional; se encuentra en todas partes, desde los puestos callejeros."
      },
      {
        nome: "Char kway teow",
        testo: "Fideos de arroz salteados a fuego vivo con gambas, huevo y brotes de soja. Un plato callejero chino-malayo, excelente por la noche en Jalan Alor."
      },
      {
        nome: "Bak kut teh",
        testo: "Costillas de cerdo en caldo de especias y ajo, de origen chino. Se come en el desayuno o en el almuerzo en los locales de Klang y Chinatown."
      },
      {
        nome: "Roti canai",
        testo: "Pan indio plano, crujiente y grasiento, servido con curry de lentejas. Se come en los locales mamak abiertos toda la noche."
      }
    ],
    attenzioni: [
      "Robos con tirón desde moto: mantener el teléfono lejos del bordillo y el bolso en el lado opuesto a la calzada.",
      "En Batu Caves, monos agresivos con la comida y los bolsos abiertos. En el santuario, hombros y rodillas cubiertos.",
      "Taxis: usar Grab o taxis con taxímetro. Rechazar a quien proponga un «precio fijo» en la estación.",
      "El calor y los chubascos de la tarde son casi diarios: las visitas al aire libre, por la mañana."
    ],
    gite: [
      {
        nome: "Malaca",
        distanza: "unas 2 horas en autobús",
        come: "Autobús desde la terminal TBS hasta Melaka Sentral y luego unos minutos en Grab hasta el centro histórico.",
        testo: "El puerto portugués, holandés y británico sobre el estrecho, patrimonio de la UNESCO, con casas peranakan y el mercado nocturno de Jonker Street los fines de semana. Merece una noche; tiene su propia ficha en la web."
      },
      {
        nome: "Putrajaya",
        distanza: "unos 25 km, media hora en tren",
        come: "Tren KLIA Transit desde KL Sentral hasta la estación de Putrajaya y luego Grab entre los monumentos.",
        testo: "La capital administrativa construida desde cero en los años noventa alrededor de un lago artificial: la mezquita rosa de Putra, la de acero de Tuanku Mizan y los puentes monumentales. Basta medio día."
      },
      {
        nome: "Luciérnagas de Kuala Selangor",
        distanza: "unos 70 km, 1 hora y media en coche",
        come: "En coche o con un tour nocturno desde Kuala Lumpur; las barquitas salen después del atardecer desde Kampung Kuantan.",
        testo: "En los manglares del río Selangor miles de luciérnagas se encienden a la vez en los árboles. Solo se ve en noches sin luna y sin lluvia, en barca de remos y en silencio."
      }
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Kuala Lumpur?",
        risposta: "Dos días completos para las Batu Caves, las Petronas, los museos y los barrios. Con un tercero se añaden la KL Tower y el parque forestal, o una excursión a Malaca o Putrajaya."
      },
      {
        domanda: "¿Merece la pena subir a las Petronas Twin Towers?",
        risposta: "El skybridge cuesta unos 80 ringgit y las plazas al atardecer se agotan pronto. Las torres se ven mejor desde abajo a la hora azul, o desde la KL Tower, que está más alta y las tiene enfrente."
      },
      {
        domanda: "¿Cómo se llega a las Batu Caves y cuánto cuesta?",
        risposta: "Con el tren KTM Komuter desde KL Sentral hasta la terminal Batu Caves, unos 35-40 minutos por pocos ringgit. La entrada a la cueva principal es gratuita; conviene llegar al amanecer."
      },
      {
        domanda: "¿Dónde alojarse en Kuala Lumpur?",
        risposta: "Bukit Bintang por la comida y la comodidad, Chinatown para gastar poco, KLCC por las vistas a las torres. Lo importante es estar cerca de una parada de metro o de monorraíl."
      },
      {
        domanda: "¿Cómo ir del aeropuerto al centro de Kuala Lumpur?",
        risposta: "El KLIA Ekspres llega a KL Sentral en unos 30 minutos por 55 ringgit (65 desde 2027). El autobús cuesta unos 15 ringgit pero tarda más de una hora; un Grab unos 70-100 ringgit."
      },
      {
        domanda: "¿Cómo vestirse para mezquitas y templos en Kuala Lumpur?",
        risposta: "Hombros y rodillas cubiertos, y zapatos fuera antes de entrar. En la Masjid Negara y la Masjid Jamek prestan una túnica larga en la entrada; a las Batu Caves conviene llegar ya vestido de forma adecuada."
      }
    ],
    esperienzeSlugs: ['batu-caves'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'El skyline de Kuala Lumpur al anochecer con las Torres Petronas iluminadas',
    immagine: '/images/malesia/kuala-lumpur.jpg',
  },
  {
    slug: 'penang',
    paeseSlug: 'malesia',
    ordine: 2,
    nome: 'Penang y George Town',
    tipologia: ['gastronomia', 'cultura', 'città coloniali'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      "Una isla en el estrecho de Malaca con George Town en el centro, antiguo puerto franco británico y hoy Patrimonio de la Humanidad de la UNESCO: shophouses chinas, mezquitas, templos, casas-clan sobre el agua y una cocina callejera famosa en todo el país.",
    percheAndarci:
      "Por la comida, que aquí basta por sí sola para justificar el viaje, y porque George Town es la ciudad donde los estratos culturales de Malasia mejor se leen: comunidades distintas a pocas manzanas, cada una con su propia arquitectura religiosa, todas llegadas por mar.",
    cosaVedere: [
      'El casco histórico UNESCO de George Town, con las shophouses peranakan',
      'Los Clan Jetties, los poblados sobre pilotes de las familias chinas, cada uno de un clan distinto',
      'El templo Kek Lok Si, gran complejo budista en la colina de Air Itam',
      'La Blue Mansion de Cheong Fatt Tze y la Pinang Peranakan Mansion',
      'La Street of Harmony, donde mezquita, templo chino, templo hindú e iglesia anglicana están en la misma calle',
      'Los murales del centro, que han hecho famosa a George Town mucho más allá de su perímetro',
    ],
    cosaFare: [
      'Comer en los puestos callejeros, el motivo por el que se viene aquí (hay una ficha de experiencia dedicada)',
      'Recorrer el casco histórico a pie siguiendo los murales y las instalaciones de hierro forjado',
      'Subir a Penang Hill en funicular para ver la isla y respirar aire fresco',
      'Excursión al Penang National Park hasta Monkey Beach',
    ],
    doveDormire:
      "Dentro del perímetro UNESCO de George Town, a ser posible en una shophouse restaurada: se recorre todo a pie y es la única forma de ver la ciudad por la noche. Batu Ferringhi es la zona de las playas y los resorts, pero está al otro lado de la isla y deja fuera la mejor parte.",
    doveMangiare:
      "Es la razón del viaje. Para probar por orden: el assam laksa, la sopa ácida de pescado y tamarindo que es el plato símbolo de la isla; el char kway teow salteado en el wok a fuego vivo; el cendol, el postre helado con leche de coco y azúcar de palma; el nasi kandar indio-musulmán, con los currys vertidos unos sobre otros sobre el arroz; y el rojak, ensalada de frutas salada con salsa de gambas fermentadas. Se come en los coffee shops y en los food courts más que en los restaurantes, y los mejores puestos tienen horarios propios: algunos abren solo por la mañana, otros solo después de la puesta de sol.",
    comeArrivare: "El aeropuerto internacional de Penang (PEN) está en el sur de la isla, a unos 30-45 minutos en Grab o taxi de George Town; también está el autobús Rapid Penang, más lento. Desde Kuala Lumpur se vuela en menos de una hora, o se toma el tren ETS de KL Sentral a Butterworth, en tierra firme, en unas 4 horas, y desde allí el ferry que cruza el estrecho hasta la terminal de George Town en pocos minutos: la forma más bonita de llegar. Los autobuses desde Kuala Lumpur y las Cameron Highlands (unas 4-5 horas) llegan a la isla por el puente.",
    comeSpostarsi: 'George Town se recorre a pie; para el resto de la isla autobuses públicos económicos y Grab.',
    periodoMigliore:
      "la estación más seca, a principios de año. Durante los festivales de la ciudad, como el George Town Festival, la ciudad se llena.",
    costi: "Blue Mansion 25 RM con visita guiada, funicular de Penang Hill 40 RM ida y vuelta para extranjeros (precios oficiales 2026); el casco histórico y los murales son gratis, y los platos en los puestos cuestan de unos pocos ringgit a una decena. Económico: unos 30-40 € al día con guesthouse, puestos callejeros y autobús. Medio: 70-100 € con hotel en una shophouse restaurada, Grab y alguna entrada. Alto: más de 150 € con hoteles históricos como el Eastern & Oriental y cenas en restaurante.",
    erroriDaEvitare: [
      "Ir a Penang por las playas: Batu Ferringhi es mediocre y mantiene lejos de la parte que importa",
      "Comer en los restaurantes con menú ilustrado: los mejores puestos no tienen letreros en inglés y cierran cuando se acaban los ingredientes",
      "Recorrer el casco histórico a mediodía: entre las once y las tres el calor es serio y hay poca sombra",
      "Quedarse una sola noche: George Town necesita al menos dos noches, porque la mitad de los puestos trabaja solo después de la puesta de sol",
    ],
    confronti: [
      {
        titolo: '¿Penang o Malaca?',
        introduzione:
          "Son las dos ciudades del Estrecho inscritas juntas en la lista UNESCO, tienen la misma historia (puertos coloniales con comunidades china, india y malaya) y a menudo se ponen como alternativa cuando hay poco tiempo. Se parecen menos de lo que parece.",
        opzioni: [
          {
            nome: 'George Town (Penang)',
            sintesi: "Más grande y más viva, considerada la capital gastronómica del país, en una isla con también montaña, parque nacional y playas.",
            costo: 'la ciudad es casi toda gratuita; vuelo o autobús desde KL',
            durata: '2-3 días',
            pro: [
              'La comida callejera es de otro nivel, y es el motivo principal para venir a Malasia',
              'Casco histórico más grande y todavía habitado, además de restaurado para los visitantes',
              'Hay más cosas además de la ciudad: Penang Hill, el parque nacional, los Clan Jetties',
            ],
            contro: ['Más lejos de Kuala Lumpur', 'Más caótica y menos fotogénica en conjunto', 'Las playas decepcionan'],
            perChi: "Quien tiene al menos dos días y viene también a comer. Si se elige solo una, es esta.",
          },
          {
            nome: 'Malaca',
            sintesi: "Más pequeña y más antigua, con la estratificación portuguesa, holandesa y británica visible en pocas manzanas, no lejos de Kuala Lumpur.",
            costo: 'autobús desde KL, económico',
            durata: '1-2 días',
            pro: [
              'Cómoda: encaja entre Kuala Lumpur y Singapur sin desvíos',
              'Historia colonial más antigua y más legible, con tres dominaciones europeas superpuestas',
              'Jonker Street el fin de semana y el barrio peranakan son muy bonitos',
            ],
            contro: [
              'Mucho más turística en proporción, y el fin de semana invadida por los visitantes de un día',
              'El centro se agota en media jornada',
              'La cocina es buena pero no aguanta la comparación con Penang',
            ],
            perChi: "Quien tiene un solo día o viaja por tierra hacia Singapur.",
          },
        ],
        raccomandazione:
          "Con una semana a disposición se hacen las dos: Malaca es una parada de un día de camino a Singapur, Penang una etapa propia de dos o tres. Si hay que elegir una, Penang, a menos que el viaje termine en Singapur por tierra: en ese caso Malaca no cuesta casi tiempo.",
      },
    ],
    miaEsperienza:
      "A Penang se va a comer, y quien diga lo contrario no ha estado. El casco histórico de George Town es bonito (shophouses desconchadas, letreros chinos, los Clan Jetties sobre pilotes donde todavía vive gente), pero lo que lo hace distinto de cualquier otra ciudad malasia es que cada comunidad ha traído aquí su propia cocina y ninguna la ha aguado. El assam laksa, con ese caldo ácido de pescado y tamarindo que a la primera cucharada descoloca, es el plato por el que vale la desviación. Hay que saber cómo funciona: los mejores puestos no tienen letreros en inglés, abren a horarios propios y cierran cuando se acaba, y puede pasar que uno se presente y se encuentre la persiana bajada a las dos de la tarde. En cuanto a la parte artística, los murales son simpáticos y ya hay colas para fotografiarse delante de los más famosos, pero la ciudad es Patrimonio de la UNESCO por otra cosa.",
    luoghi: [
      {
        nome: "Centro histórico de George Town",
        testo: "Patrimonio de la UNESCO por su mosaico de culturas: shophouses peranakan, templos chinos, mezquitas, iglesias y antiguas casas británicas. Se recorre a pie por las calles estrechas con los murales.",
        come: "Desde la terminal de ferris o los hoteles, a pie. Muchas rutas a pie.",
        quando: "A primera hora de la mañana y después de las cuatro de la tarde. Entre las once y las tres el calor es serio.",
        tempo: "medio día",
        consiglio: "Buscar los murales pero también los talleres de artesanos, y parar a tomar un café blanco en una vieja cafetería.",
        costo: "Gratis: se camina y los murales no se pagan.",
        lat: 5.41444,
        lng: 100.32917,
      },
      {
        nome: "Clan Jetties",
        testo: "Poblados sobre pilotes donde viven desde hace generaciones familias chinas agrupadas por clan. El más conocido es el Chew Jetty, con casas de madera, altares y tiendas.",
        come: "A pie desde el paseo marítimo de George Town. Es un lugar donde se vive: caminar en silencio, preguntar antes de fotografiar.",
        quando: "Por la mañana o a última hora de la tarde.",
        tempo: "1 hora",
        consiglio: "Comprar algo en una de las tiendas del muelle: es la única forma correcta de apoyar a quien vive allí.",
        lat: 5.41314,
        lng: 100.34128,
      },
      {
        nome: "Kek Lok Si",
        testo: "El mayor templo budista de Malasia, al pie de la colina de Air Itam. La pagoda de los Diez Mil Budas, de siete pisos, tiene la base china, la parte central tailandesa y la cúpula birmana; más arriba hay una gran estatua de Guanyin de bronce.",
        come: "Autobús Rapid Penang desde George Town o taxi. Unos ascensores inclinados suben hasta la estatua.",
        quando: "Por la mañana; en el Año Nuevo chino está lleno de farolillos y fieles.",
        tempo: "1 hora y media",
        costo: "entrada al conjunto libre; los ascensores inclinados se pagan aparte",
        consiglio: "Subir hasta la estatua de Guanyin: la vista sobre Penang vale los escalones.",
        lat: 5.39952,
        lng: 100.27373,
      },
      {
        nome: "Cheong Fatt Tze Mansion (Blue Mansion)",
        testo: "La casa-palacio del mercader Cheong Fatt Tze, construida entre 1897 y 1904, con las paredes color índigo obtenidas de cal y tinte natural, los patios interiores y el mobiliario original. La restauración recibió un premio UNESCO de conservación del patrimonio.",
        come: "A pie desde el centro de George Town. Se visita con el tour guiado en inglés, a horas fijas; la casa es también un hotel.",
        quando: "Por la mañana, con el tour en inglés.",
        tempo: "1 hora",
        url: "https://www.cheongfatttzemansion.com/",
        consiglio: "Llegar a tiempo para el primer tour: los grupos son pequeños y el relato vale más que las salas.",
        costo: "Visita guiada 25 RM los adultos, unos 5 €; 12,50 RM menores de 12 años (web oficial, 2026).",
        orari: "Visitas guiadas todos los días a las 11:00 y a las 15:30, de 45 minutos; conviene reservar online.",
        lat: 5.42141,
        lng: 100.33495,
      },
      {
        nome: "Street of Harmony",
        testo: "Un tramo de Jalan Masjid Kapitan Keling y alrededores donde están juntos una mezquita, un templo chino, un templo hindú y una iglesia anglicana. Un ejemplo real de convivencia.",
        come: "A pie por el casco histórico.",
        quando: "Por la mañana. Las mezquitas están cerradas a los no musulmanes durante la oración.",
        tempo: "1 hora",
        costo: "gratuito",
        consiglio: "Visitar la Kapitan Keling Mosque fuera de las horas de oración, con ropa cubierta.",
        lat: 5.41667,
        lng: 100.33739,
      },
      {
        nome: "Penang Hill",
        testo: "Una colina que llega a 833 metros sobre la ciudad, a la que se sube en un funicular que tarda 5-10 minutos, con aire más fresco, un jardín botánico y vistas sobre George Town y el continente.",
        come: "En autobús desde Komtar o en taxi hasta la estación del funicular, luego la subida en funicular.",
        quando: "Abierta todos los días de 6:15 a 21:45. Por la mañana hay menos niebla y menos colas.",
        tempo: "3 horas",
        url: "https://www.penanghill.gov.my/",
        consiglio: "Subir pronto: por la tarde las colas del funicular son largas.",
        costo: "Funicular ida y vuelta, carril normal: 40 RM los adultos extranjeros, unos 8 €; 20 RM los niños de 4 a 12 años (web oficial, 2026).",
        orari: "Todos los días 6:15-21:45.",
        lat: 5.42444,
        lng: 100.26892,
      },
      {
        nome: "Khoo Kongsi",
        testo: "La casa-clan de la familia Khoo, la más suntuosa de George Town: un patio de granito cerrado por las casas de los miembros del clan y, al fondo, el templo Leong San Tong, reconstruido a principios del siglo XX tras un incendio. Tejados cargados de figuras de cerámica, columnas talladas y vigas doradas. Explica bien cómo los clanes hokkien organizaban la vida de la comunidad.",
        come: "A pie desde el casco histórico, entrando por el callejón de Cannon Square. Visita libre, con paneles y un pequeño museo en la planta baja.",
        quando: "Por la mañana, cuando la luz entra en el patio.",
        tempo: "1 hora",
        lat: 5.41503,
        lng: 100.33712,
        url: "https://www.khookongsi.com.my/",
      },
      {
        nome: "Pinang Peranakan Mansion",
        testo: "La mansión verde construida a finales del siglo XIX por Chung Keng Quee, jefe de la comunidad china y magnate del estaño, hoy museo de la cultura peranakan. Reúne más de mil objetos de época: porcelana nyonya, joyas, muebles taraceados, trajes de boda. Los interiores, con el patio central y las celosías doradas, justifican por sí solos la visita.",
        come: "A pie desde el casco histórico, en Church Street. Visita libre o con los guías del museo.",
        quando: "A media mañana o a primera hora de la tarde, para estar a cubierto en las horas de calor.",
        tempo: "1-1,5 horas",
        lat: 5.418,
        lng: 100.34119,
        url: "https://www.pinangperanakanmansion.com.my/",
        consiglio: "Se combina con la Blue Mansion: una cuenta la historia de los mercaderes chinos, la otra la de las familias peranakan.",
      },
      {
        nome: "St. George's Church",
        testo: "Construida en 1818 por la Compañía de las Indias Orientales, es la iglesia anglicana más antigua del sudeste asiático: columnas dóricas blancas, un césped y un pequeño pabellón en memoria de Francis Light, el fundador de la colonia. Está a pocos pasos de la Kapitan Keling Mosque y del templo de la diosa de la misericordia.",
        come: "A pie en Farquhar Street, en el casco histórico.",
        quando: "Por la mañana, junto con la Street of Harmony.",
        tempo: "20 minutos",
        lat: 5.41972,
        lng: 100.33911,
      },
      {
        nome: "Fort Cornwallis",
        testo: "El fuerte en estrella construido por los británicos donde desembarcó Francis Light en 1786, primero de madera y luego de ladrillo a principios del siglo XIX. Quedan las murallas bajas, los cañones apuntando al mar y una pequeña capilla. Interesa más por la historia que por lo que se ve.",
        come: "A pie en el paseo marítimo, cerca de la torre del reloj de la reina Victoria y de la Esplanade.",
        quando: "A última hora de la tarde, y luego paseo por la Esplanade al atardecer.",
        tempo: "45 minutos",
        lat: 5.4205,
        lng: 100.3439,
      },
      {
        nome: "Armenian Street y los murales",
        testo: "La calle donde en 2012 el artista lituano Ernest Zacharevic pintó a los niños en bicicleta, el mural que hizo famoso el arte callejero de George Town. Alrededor hay otras pinturas y las siluetas de hierro forjado que cuentan la historia de las calles. Hoy está llena de tiendas y cafés, y delante de los murales más conocidos se hace cola para la foto.",
        come: "A pie; los murales están repartidos entre Armenian Street, Lebuh Ah Quee y Cannon Street. En la oficina de turismo dan el mapa.",
        quando: "Antes de las nueve, cuando los murales están libres y aún hace fresco.",
        tempo: "1-2 horas",
        costo: "Gratis.",
        lat: 5.41474,
        lng: 100.33811,
      },
      {
        nome: "Little India y el Sri Mahamariamman",
        testo: "El barrio indio entre Queen Street y Market Street, con tiendas de saris, guirnaldas de flores, música tamil y puestos de dulces. En el centro está el Sri Mahamariamman, de 1833, el templo hindú más antiguo de la isla, con la torre de entrada cubierta de divinidades de colores.",
        come: "A pie, junto a la Street of Harmony. Al templo se entra descalzo y cubierto.",
        quando: "Al atardecer, cuando se encienden las luces; durante Deepavali está engalanado.",
        tempo: "1 hora",
        lat: 5.41774,
        lng: 100.33856,
        consiglio: "Pararse a tomar un teh tarik y un roti canai en uno de los locales con mesas en la acera.",
      },
      {
        nome: "Wat Chayamangkalaram y Dhammikarama",
        testo: "Dos templos budistas uno frente al otro en Burma Lane, en Pulau Tikus. El Wat Chayamangkalaram, tailandés, guarda un gran Buda reclinado de más de 30 metros; el Dhammikarama, birmano, fundado en 1803, tiene elefantes de piedra en la entrada y pagodas doradas. Dos estilos distintos a pocos metros.",
        come: "Unos 3 km al noroeste del centro: Grab en 10-15 minutos o autobús Rapid Penang. Se entra descalzo, con hombros y rodillas cubiertos.",
        quando: "Por la mañana, cuando están los fieles y hace menos calor.",
        tempo: "1 hora",
        lat: 5.4318,
        lng: 100.31341,
      },
      {
        nome: "Gurney Drive",
        testo: "El paseo marítimo al norte del centro, con el food court al aire libre más famoso de la isla: decenas de puestos de char kway teow, satay, tortilla de ostras, rojak y laksa bajo las luces de la noche. Más turístico que los puestos de George Town, pero cómodo para probar muchos platos en una sola cena.",
        come: "Grab desde el casco histórico en unos 10-15 minutos.",
        quando: "Por la noche, después del atardecer, cuando abren todos los puestos.",
        tempo: "1-2 horas",
        lat: 5.43656,
        lng: 100.31256,
        consiglio: "Dar una vuelta completa antes de pedir: el mismo plato cambia mucho de un puesto a otro.",
      },
      {
        nome: "Penang Botanic Gardens",
        testo: "El jardín botánico fundado por los británicos a finales del siglo XIX en un valle junto a una cascada, también llamado Waterfall Gardens. Praderas, árboles tropicales centenarios, helechos y macacos acostumbrados a la gente. De aquí sale también un sendero empinado que sube a pie hasta Penang Hill.",
        come: "Grab o autobús Rapid Penang desde el centro, unos 20 minutos.",
        quando: "A primera hora, cuando corren y caminan los vecinos y hace fresco.",
        tempo: "1-2 horas",
        lat: 5.43996,
        lng: 100.28833,
        consiglio: "No llevar comida a la vista: los monos la arrancan de las manos.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Murales de Armenian Street antes de las nueve",
          "Khoo Kongsi y Street of Harmony con la Kapitan Keling Mosque",
          "Comida en un coffee shop del centro",
          "Blue Mansion con la visita de las 15:30",
          "Clan Jetties al atardecer",
          "Cena en los puestos callejeros de George Town o en Gurney Drive",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: como arriba",
          "Día 2: Kek Lok Si por la mañana, luego assam laksa en Air Itam",
          "Penang Hill en funicular por la tarde",
          "Little India y cena con nasi kandar",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2: como arriba",
          "Día 3: Botanic Gardens temprano, luego Wat Chayamangkalaram y Dhammikarama",
          "Pinang Peranakan Mansion en las horas de calor",
          "Fort Cornwallis y la Esplanade al atardecer",
          "Como alternativa, un día en el Penang National Park",
        ],
      },
    ],
    zone: [
      {
        nome: "Casco histórico de George Town",
        perChi: "quien quiere hacerlo todo a pie",
        testo: "Shophouses restauradas convertidas en guesthouses y pequeños hoteles. Comodísimo, algo ruidoso por la noche.",
        fascia: "40-100 €",
      },
      {
        nome: "Batu Ferringhi",
        perChi: "quien busca mar y resorts",
        testo: "Una franja de playa con hoteles grandes. Mar mediocre, pero es la zona más cómoda para familias.",
        fascia: "70-200 €",
      },
      {
        nome: "Komtar y Jalan Burma",
        perChi: "quien quiere ahorrar",
        testo: "Hoteles de gama media, fuera del núcleo turístico pero a pocos minutos en autobús o taxi.",
        fascia: "30-70 €",
      },
      {
        nome: "Gurney Drive",
        perChi: "quien quiere hoteles modernos y centros comerciales",
        testo: "Grandes hoteles y apartamentos en el paseo marítimo, con el food court al lado. Al casco histórico se va en Grab.",
        fascia: "50-130 €",
      },
    ],
    sapori: [
      {
        nome: "Assam laksa",
        testo: "Fideos en caldo ácido de pescado y tamarindo con menta y piña. El plato por el que vale la pena el desvío; se come en Air Itam."
      },
      {
        nome: "Char kway teow",
        testo: "Fideos salteados a fuego alto con gambas, berberechos y huevo. En Penang la versión sabe a humo del fuego de carbón."
      },
      {
        nome: "Nasi kandar",
        testo: "Arroz con distintos currys por encima, de origen indio musulmán. Se pide en el mostrador y se señala qué va en el plato."
      },
      {
        nome: "Cendol",
        testo: "Hielo picado, leche de coco, almíbar de palma y gelatinas verdes. El postre de Penang."
      }
    ],
    attenzioni: [
      "Los mejores puestos no tienen carteles en inglés, abren a su hora y cierran cuando se les acaba: llegar pronto o no contar con sitio.",
      "Evitar el centro entre las once y las tres: el calor es fuerte y la sombra escasa.",
      "En templos y mezquitas, hombros y rodillas cubiertos, zapatos fuera.",
      "En los puestos turísticos junto a los murales la comida y los recuerdos cuestan más que en las calles laterales."
    ],
    gite: [
      {
        nome: "Penang National Park y Monkey Beach",
        distanza: "aproximadamente 1 hora en autobús",
        come: "Autobús 101 desde George Town hasta Teluk Bahang; en la entrada del parque hay que registrarse, luego sendero por la selva o barca de pago con el precio pactado antes.",
        testo: "El parque nacional más pequeño de Malasia, creado en 2003, con selva, playas y un lago meromíctico. A Monkey Beach se llega en una hora y media de sendero; Pantai Kerachut es un lugar de anidación de tortugas.",
      },
      {
        nome: "Batu Ferringhi",
        distanza: "unos 15 km, 30-45 minutos",
        come: "Autobús 101 desde George Town o Grab.",
        testo: "La playa de los resorts en la costa norte. El mar no es el mejor de Malasia, pero por la noche hay mercado a lo largo de la carretera principal y se cena pescado en la arena.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Penang?",
        risposta: "Dos o tres: uno para el casco histórico de George Town, otro para Kek Lok Si y Penang Hill, el tercero para comer con calma o para el parque nacional. Con una sola noche se pierde la mitad de los puestos, que solo abren por la noche.",
      },
      {
        domanda: "¿Penang o Malaca?",
        risposta: "Penang si también se viene por la comida y se tienen al menos dos días; Malaca si hay poco tiempo o se va por tierra hacia Singapur. Con una semana se pueden hacer las dos.",
      },
      {
        domanda: "¿Dónde dormir en George Town?",
        risposta: "Dentro del perímetro UNESCO, en una shophouse restaurada: se va a todas partes a pie y se vive la ciudad por la noche. Batu Ferringhi solo compensa a quien quiere un resort de playa.",
      },
      {
        domanda: "¿Cuánto cuesta el funicular de Penang Hill?",
        risposta: "40 RM ida y vuelta los adultos extranjeros en el carril normal y 20 RM los niños de 4 a 12 años (web oficial, 2026). Funciona todos los días de 6:15 a 21:45.",
      },
      {
        domanda: "¿Hay que reservar la Blue Mansion?",
        risposta: "Conviene: solo se entra con la visita guiada de las 11:00 o de las 15:30, que dura 45 minutos y cuesta 25 RM, y las plazas se agotan a menudo.",
      },
      {
        domanda: "¿Penang es un destino de playa?",
        risposta: "No mucho. Batu Ferringhi es mediocre y está lejos del centro; para el mar en Malasia son mejores Langkawi o las Perhentian.",
      },
    ],
    esperienzeSlugs: ['street-food-penang'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Los tejados de George Town, Weld Quay y los Clan Jetties vistos desde arriba, con el estrecho y Butterworth al fondo',
    immagine: '/images/malesia/penang.jpg',
  },
  {
    slug: 'malacca',
    paeseSlug: 'malesia',
    ordine: 3,
    nome: 'Malaca',
    tipologia: ['storia', 'città coloniali', 'gastronomia'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      "El puerto que durante siglos controló el estrecho más estratégico de Asia, conquistado por los portugueses, luego por los holandeses y por fin por los británicos: tres dominaciones europeas superpuestas en pocas manzanas, más la cultura peranakan nacida de los matrimonios entre comerciantes chinos y mujeres malayas.",
    percheAndarci:
      "Aquí la historia colonial del sudeste asiático se lee caminando (la iglesia portuguesa en ruinas, la plaza holandesa roja, el fuerte), y la ciudad está a medio camino entre Kuala Lumpur y Singapur.",
    cosaVedere: [
      'La Dutch Square con la Christ Church y el Stadthuys, el antiguo ayuntamiento holandés',
      'Las ruinas de la iglesia de St. Paul en lo alto de la colina, con vistas al estrecho',
      'La Porta de Santiago, lo que queda de la fortaleza portuguesa A Famosa',
      'Jonker Street, la calle principal de Chinatown, con el mercado nocturno del fin de semana',
      'El Baba & Nyonya Heritage Museum, una casa peranakan conservada con el mobiliario original',
      'El Cheng Hoon Teng, templo chino histórico',
    ],
    cosaFare: [
      'Caminar el casco histórico UNESCO, que se recorre entero a pie en media jornada',
      'Cenar peranakan, la cocina nacida del encuentro entre chinos y malayos, típica de Malaca y Penang',
      'Mercado nocturno de Jonker Street el fin de semana',
      'Paseo en barca por el río al atardecer, con los murales en las orillas',
    ],
    doveDormire:
      "Dentro del casco histórico, mejor por el lado de Chinatown: por la noche, cuando los autocares de los visitantes de un día se han ido, el barrio cambia por completo, y esa es la razón para quedarse a dormir.",
    doveMangiare:
      "La cocina que hay que buscar es la peranakan o nyonya: el ayam pongteh, el pollo estofado con salsa de soja fermentada, y el laksa nyonya, con leche de coco, que es distinto del de Penang. La especialidad popular es en cambio el chicken rice ball, el pollo con el arroz servido en bolas compactas, típico de la ciudad. Para probar también el cendol de Malaca, rico en azúcar de palma, y los satay celup, las brochetas que cuecen los propios clientes en una olla de salsa de cacahuete hirviendo en el centro de la mesa.",
    comeArrivare: "Malaca no tiene vuelos regulares útiles: se llega en autobús. Desde la terminal TBS de Kuala Lumpur salen autobuses continuamente y llegan a Melaka Sentral en unas 2 horas; desde el aeropuerto KLIA hay autobuses directos, en unas 2-2,5 horas. Melaka Sentral está fuera de la ciudad: desde allí al casco histórico se va en Grab en pocos minutos o en autobús local. Para Singapur hay autobuses directos que tardan unas 4-5 horas con la frontera, mejor reservarlos al menos el día antes.",
    comeSpostarsi: 'El casco histórico se recorre a pie. Para la estación de autobuses, que está fuera de la ciudad, hacen falta un autobús local o Grab.',
    periodoMigliore: 'todo el año, con los meses más secos a principios de año. El mercado nocturno de Jonker Street solo existe el fin de semana, lo que condiciona la elección de los días.',
    costi: "Museos estatales (Stadthuys, Museo Marítimo, Palacio del Sultanato) 20 RM cada uno para extranjeros, Baba & Nyonya unos 20-25 RM, Menara Taming Sari desde 20 RM (2026); St. Paul, la Porta de Santiago y los templos son gratis. Económico: unos 30-40 € al día con guesthouse en Chinatown, comida callejera y autobús. Medio: 60-90 € con un hotel en una casa histórica y alguna cena nyonya. Alto: más de 140 € con los hoteles de lujo junto al río.",
    erroriDaEvitare: [
      "Ir en fin de semana esperando tranquilidad: de viernes a domingo Malaca es un destino nacional muy concurrido",
      "Hacerla en el día desde Kuala Lumpur: se ve solo en las peores horas y se pierde la noche, que es el momento en que la ciudad funciona",
      "Subir a los trishaws decorados con luces y música a todo volumen esperando un paseo romántico: son una atracción kitsch, lo cual está muy bien si se sabe de antemano",
    ],
    miaEsperienza:
      "Malaca es una parada breve que rinde mucho más de lo que promete, con una condición: dormir allí. De día, sobre todo en fin de semana, el centro es un flujo continuo de visitantes de un día desde Kuala Lumpur y Singapur, con los trishaws decorados con luces LED que pasan a todo volumen: un nivel de kitsch que a la segunda vez resulta divertido. Por la noche, cuando los autocares se van, quedan las callejuelas de Chinatown, las casas peranakan con las puertas abiertas y el río iluminado. La colina de St. Paul, con la iglesia portuguesa sin techo y las lápidas holandesas apoyadas en las paredes, es el sitio donde los estratos de esta ciudad se entienden en dos minutos. Y la cocina nyonya, nacida del encuentro entre comerciantes chinos y mujeres malayas, es una de las cosas más interesantes que comí en todo el país.",
    luoghi: [
      {
        nome: "Dutch Square, Christ Church y Stadthuys",
        testo: "El centro holandés de la ciudad, con los edificios rojo ladrillo: la Christ Church, terminada en 1753, y el Stadthuys, la antigua sede del gobierno holandés, construida en 1650.",
        come: "A pie desde el centro histórico. El Stadthuys alberga un museo de historia y etnografía.",
        quando: "Por la mañana, antes de la multitud.",
        tempo: "1 hora",
        consiglio: "Empezar aquí y subir hacia St. Paul por las escaleras laterales.",
        costo: "20 RM los adultos extranjeros, unos 4 €; 10 RM los niños (Perbadanan Muzium Melaka, 2026).",
        orari: "De martes a domingo 9:00-17:30, última entrada 16:30; cerrado los lunes.",
        lat: 2.19406,
        lng: 102.24915,
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "St. Paul's Hill y Porta de Santiago",
        testo: "En la colina están las ruinas de la iglesia nacida como capilla portuguesa en 1521, con lápidas holandesas en los muros. Al pie está la Porta de Santiago, última parte de la fortaleza A Famosa.",
        come: "A pie, con una breve subida. Desde la cima se ve el estrecho.",
        quando: "Al atardecer, con la luz cayendo sobre el estrecho.",
        tempo: "1 hora",
        costo: "gratuito",
        consiglio: "Leer las lápidas: son un resumen de la historia de la ciudad.",
        lat: 2.1928,
        lng: 102.249,
      },
      {
        nome: "Jonker Street",
        testo: "La calle principal de Chinatown, con tiendas de antigüedades, cafés y, los fines de semana, un mercado nocturno abarrotado.",
        come: "A pie desde el centro. El mercado nocturno abre viernes, sábado y domingo por la noche.",
        quando: "Entre semana para caminar con calma; el fin de semana para el mercado.",
        tempo: "1-2 horas",
        consiglio: "Comer en Jonker no siempre es la mejor opción: probar las calles laterales.",
        lat: 2.19672,
        lng: 102.24653,
        costo: "Gratis.",
        orari: "Mercado nocturno viernes, sábado y domingo desde la tarde-noche.",
      },
      {
        nome: "Baba & Nyonya Heritage Museum",
        testo: "La casa de una familia peranakan, conservada con el mobiliario original: madera tallada, porcelanas y fotos de familia. Cuenta la comunidad chino-malaya nacida del encuentro de los mercaderes chinos con las mujeres locales.",
        come: "A pie desde Jonker Street.",
        quando: "Cerrado los martes. Los demás días laborables 10-16:15, el fin de semana 10-16:45 (2025).",
        tempo: "1 hora",
        url: "https://www.babanyonyamuseum.com/",
        consiglio: "Consultar horarios y modalidades de visita en la web antes de ir.",
        costo: "Unos 20-25 RM, unos 4-5 €.",
        orari: "Cerrado los martes; los demás días laborables 10:00-16:15, sábado y domingo 10:00-16:45 (web oficial).",
      },
      {
        nome: "Cheng Hoon Teng",
        testo: "Un templo chino histórico, todavía en uso; en las calles cercanas están también el templo hindú Sri Poyatha Moorthi y la Kampung Kling Mosque, fundada en 1748 y reconstruida en ladrillo en 1872, con una arquitectura que mezcla elementos sumatranos, chinos, hindúes y malayos: tres culturas a pocos pasos.",
        come: "A pie, en el casco histórico, en Jalan Tukang Emas, conocida como Harmony Street.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        costo: "gratuito",
        consiglio: "Visitar ambos en el mismo paseo, con la cabeza cubierta para la mezquita.",
        lat: 2.19747,
        lng: 102.24686,
        url: "https://www.chenghoonteng.org.my/",
      },
      {
        nome: "Museo Marítimo (Muzium Samudera)",
        testo: "Una gran réplica de la Flor de la Mar, la carraca portuguesa hundida frente a Malaca en 1511 cargada con el botín de la conquista. Dentro y en los edificios contiguos se cuenta el puerto: los mercaderes árabes, chinos e indios, las especias, los dominios europeos. Es el museo que más gusta a las familias.",
        come: "A pie junto al río, a pocos minutos de la Dutch Square. La misma entrada vale para las secciones vecinas del museo.",
        quando: "En las horas de calor, para estar a cubierto.",
        tempo: "1 hora",
        costo: "20 RM los adultos extranjeros, unos 4 €; 10 RM los niños (Perbadanan Muzium Melaka, 2026).",
        orari: "De martes a domingo 9:00-17:30, última entrada 16:30; cerrado los lunes.",
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "Palacio del Sultanato",
        testo: "La reconstrucción en madera oscura, sin clavos, del palacio del sultán Mansur Shah, que reinó en el siglo XV cuando Malaca era el puerto más rico del estrecho. Dentro está el museo de la cultura malaya: trajes, armas, escenas de la corte. Cuenta la Malaca anterior a los europeos.",
        come: "A pie al pie de la colina de St. Paul, en el lado opuesto a la Porta de Santiago. Se entra descalzo.",
        quando: "Por la mañana, antes de subir a St. Paul.",
        tempo: "45 minutos",
        costo: "20 RM los adultos extranjeros, unos 4 €; 10 RM los niños (Perbadanan Muzium Melaka, 2026).",
        orari: "De martes a domingo 9:00-17:30, última entrada 16:30; cerrado los lunes.",
        lat: 2.1929,
        lng: 102.2504,
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "Crucero por el río Malaca",
        testo: "El barco que remonta el río unos 9 km entre casas pintadas con murales, almacenes restaurados, puentes y el pueblo de Kampung Morten. Por la noche, con las luces en las orillas, es la forma más relajada de ver la ciudad.",
        come: "Desde el embarcadero junto al Museo Marítimo o desde los demás embarques a lo largo del río; billetes en taquilla o online.",
        quando: "Después del atardecer, con las orillas iluminadas.",
        tempo: "45 minutos",
        orari: "Todos los días 9:00-23:00.",
        url: "https://www.melakarivercruise.my/",
      },
      {
        nome: "Kampung Morten",
        testo: "Un pueblo malayo tradicional que ha quedado en medio de la ciudad, en una curva del río: casas de madera sobre pilotes con tejados inclinados, jardines y escaleras decoradas. Está habitado, y algunas familias abren su casa a los visitantes.",
        come: "A pie por el paseo del río, unos 15 minutos desde Jonker Street, o con el crucero.",
        quando: "A última hora de la tarde, y luego vuelta por el río al atardecer.",
        tempo: "45 minutos",
        lat: 2.20339,
        lng: 102.25103,
        consiglio: "Es un barrio residencial: nada de fotos dentro de los patios sin preguntar.",
      },
      {
        nome: "Kampung Hulu Mosque",
        testo: "De 1728, es una de las mezquitas más antiguas de Malasia todavía en uso. Tiene el tejado piramidal escalonado típico de las mezquitas de Java y un minarete que parece una pagoda: una arquitectura que mezcla influencias malayas, chinas e hindúes, como la cercana Kampung Kling.",
        come: "A pie en el norte de Chinatown. Los no musulmanes entran fuera de las horas de oración, con ropa que cubra.",
        quando: "Por la mañana, lejos de la oración del viernes.",
        tempo: "20 minutos",
        lat: 2.19925,
        lng: 102.24761,
      },
      {
        nome: "Menara Taming Sari",
        testo: "Una torre mirador giratoria de 80 metros: la cabina sube girando y en pocos minutos muestra el casco histórico, el río, el estrecho y las islas artificiales. No tiene nada de histórico, pero ayuda a entender la forma de la ciudad.",
        come: "A pie desde la Dutch Square, hacia el paseo marítimo.",
        quando: "Al atardecer, con la luz sobre el estrecho.",
        tempo: "30 minutos, con 7 minutos de subida",
        costo: "Desde 20 RM los adultos, unos 4 € (web oficial, 2026).",
        orari: "Laborables 9:00-22:00; fines de semana y festivos 9:00-23:00.",
        lat: 2.19083,
        lng: 102.24711,
        url: "https://www.menaratamingsari.com/",
      },
      {
        nome: "Bukit China",
        testo: "La colina que, según la tradición, el sultán regaló a la princesa china Hang Li Po y a su séquito en el siglo XV. Hoy es uno de los mayores cementerios chinos fuera de China, con miles de tumbas en forma de herradura entre los árboles. Al pie están el pozo del sultán y el templo Sam Po Kong.",
        come: "A pie o en Grab desde el centro, aproximadamente 1 km al este de Jonker Street. Los senderos entre las tumbas suben hasta la cima.",
        quando: "A primera hora, cuando la colina está llena de gente que camina y hace ejercicio.",
        tempo: "1 hora",
        lat: 2.2,
        lng: 102.2577,
        consiglio: "Respetar las tumbas: se camina por los senderos, no sobre las sepulturas.",
      },
      {
        nome: "Portuguese Settlement",
        testo: "El barrio junto al mar donde viven los descendientes de los portugueses llegados en 1511, que todavía hablan kristang, un criollo portugués. Casas bajas, cruces en las puertas, una plaza con restaurantes de pescado. A finales de junio se celebra la Festa de San Pedro, con barcas decoradas.",
        come: "Unos 3 km al sureste del centro, 10 minutos en Grab.",
        quando: "Por la noche, para cenar pescado a la parrilla en la plaza.",
        tempo: "1-2 horas",
        lat: 2.18583,
        lng: 102.26583,
        consiglio: "Probar el devil curry, el curry picante de la cocina kristang.",
      },
      {
        nome: "Masjid Selat (Mezquita del Estrecho)",
        testo: "Una mezquita moderna construida sobre pilotes en el agua, en la isla artificial de Pulau Melaka, inaugurada en 2006. Con la marea alta parece flotar; al atardecer la luz detrás del minarete atrae a muchos fotógrafos.",
        come: "Unos 3 km al sur del centro, en Grab. Los no musulmanes entran fuera de las horas de oración, con ropa que cubra; las mujeres con la cabeza cubierta.",
        quando: "Al atardecer, quedándose fuera durante la oración de la tarde.",
        tempo: "45 minutos",
        lat: 2.17889,
        lng: 102.24917,
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Dutch Square, Christ Church y museo del Stadthuys",
          "Palacio del Sultanato, luego subida a St. Paul's Hill y Porta de Santiago",
          "Comida nyonya",
          "Primera hora de la tarde: Baba & Nyonya Museum",
          "Cheng Hoon Teng, Kampung Kling y Kampung Hulu",
          "Noche: Jonker Street y crucero por el río iluminado",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: como arriba",
          "Día 2: Bukit China temprano, luego el Museo Marítimo en las horas de calor",
          "Kampung Morten junto al río por la tarde",
          "Atardecer en la Masjid Selat",
          "Cena en el Portuguese Settlement",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2: como arriba",
          "Día 3: excursión a Pulau Besar por la mañana",
          "Menara Taming Sari al atardecer",
          "Última cena de satay celup",
        ],
      },
    ],
    zone: [
      {
        nome: "Chinatown y Jonker Street",
        perChi: "quien quiere estar en el corazón de la ciudad",
        testo: "Guesthouses en casas históricas, muchas cerca de todo. Ruidoso el fin de semana.",
        fascia: "25-90 €",
      },
      {
        nome: "Junto al río",
        perChi: "quien busca vistas al río",
        testo: "Hoteles con vistas al río, más tranquilos. Algo más lejos de Jonker Street.",
        fascia: "50-150 €",
      },
      {
        nome: "Bandar Hilir",
        perChi: "quien quiere un hotel moderno a dos pasos del centro",
        testo: "Grandes hoteles y centros comerciales entre la Dutch Square y el mar, cerca de la Menara Taming Sari. Cómodos pero sin ambiente.",
        fascia: "40-100 €",
      },
    ],
    sapori: [
      {
        nome: "Chicken rice ball",
        testo: "Arroz moldeado en bolas y servido con pollo hervido. La versión local del chicken rice."
      },
      {
        nome: "Laksa nyonya",
        testo: "Fideos en caldo de coco y gambas, típicos de la cocina peranakan."
      },
      {
        nome: "Cendol",
        testo: "Hielo picado, leche de coco, almíbar de palma y gelatinas verdes. Un postre muy querido en Malaca."
      },
      {
        nome: "Satay celup",
        testo: "Brochetas que se cuecen en la mesa en una olla de salsa hirviendo. Una especialidad de Malaca."
      }
    ],
    attenzioni: [
      "De viernes a domingo la ciudad se llena de excursionistas: si se puede, venir entre semana.",
      "Los trishaw decorados con luces y música alta son una atracción: acordar el precio antes de subir.",
      "No hacerlo en una excursión de un día desde Kuala Lumpur: se pierde la noche, cuando se van los autocares.",
      "El calor es fuerte a mediodía: llevar agua y cubrirse la cabeza."
    ],
    gite: [
      {
        nome: "Pulau Besar",
        distanza: "unos 20 km, y luego 15 minutos de barco",
        come: "En Grab o taxi hasta el embarcadero de Anjung Batu, en Umbai, y luego ferry a la isla.",
        testo: "Una pequeña isla frente a la costa, con playas tranquilas, senderos y tumbas de santos musulmanes que atraen peregrinos. Media jornada de mar y silencio después del centro abarrotado.",
      },
      {
        nome: "Port Dickson",
        distanza: "unos 90 km, 1,5 horas en coche",
        come: "En coche o con conductor; los autobuses desde Melaka Sentral son más lentos.",
        testo: "El lugar de playa más cercano a Kuala Lumpur, con playas largas y el faro de Tanjung Tuan. El mar no es de postal, pero es un día de descanso camino del norte.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Malaca?",
        risposta: "Un día completo basta para el casco histórico; con dos se añaden museos, Kampung Morten y la noche en el río sin prisas. Conviene dormir al menos una noche.",
      },
      {
        domanda: "¿Se puede visitar Malaca en un día desde Kuala Lumpur?",
        risposta: "Se puede, con unas 2 horas de autobús por trayecto, pero se ve la ciudad en las horas de más calor y gente y se pierde la noche, que es el mejor momento.",
      },
      {
        domanda: "¿Cuándo es el mercado nocturno de Jonker Street?",
        risposta: "Viernes, sábado y domingo desde la tarde-noche. Los demás días la calle está más tranquila y se camina mejor.",
      },
      {
        domanda: "¿Malaca o Penang?",
        risposta: "Malaca si hay poco tiempo o se va por tierra hacia Singapur; Penang si se tienen dos o tres días y también se viene por la comida.",
      },
      {
        domanda: "¿Cuánto cuestan los museos de Malaca?",
        risposta: "Los museos estatales como el Stadthuys, el Museo Marítimo y el Palacio del Sultanato cuestan 20 RM cada uno los adultos extranjeros y cierran los lunes. El Baba & Nyonya Heritage Museum es privado y cierra los martes.",
      },
      {
        domanda: "¿Cómo se va de Malaca a Singapur?",
        risposta: "En autobús directo, unas 4-5 horas con la frontera. La SG Arrival Card se rellena online en los tres días anteriores a la llegada.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'El río de Malaca entre las casas de colores del casco histórico, con un barco turístico',
    immagine: '/images/malesia/malacca.jpg',
  },
  {
    slug: 'cameron-highlands',
    paeseSlug: 'malesia',
    ordine: 4,
    nome: 'Cameron Highlands',
    tipologia: ['natura', 'montagna', 'trekking'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      "La meseta donde los británicos se refugiaban del calor: plantaciones de té hasta donde alcanza la vista, invernaderos de fresas, selva de musgo y un clima fresco por la noche. Es uno de los pocos lugares de la península donde hace falta una sudadera.",
    percheAndarci:
      "Tras unos días de calor ecuatorial el alivio físico se nota, y las plantaciones de té que bajan en ondas por las colinas son un paisaje muy fotografiado. La mossy forest, el bosque de musgo de altura, es otra cosa completamente distinta.",
    cosaVedere: [
      'Las plantaciones de té, con las terrazas verdes que siguen las colinas',
      'La mossy forest en el Gunung Brinchang, un bosque de altura cubierto de musgo y helechos, que se recorre por una pasarela',
      'Las granjas de fresas y los invernaderos, la otra producción típica de la meseta',
      'El mercado de Brinchang, con los productos de la meseta',
    ],
    cosaFare: [
      'Visita a una plantación con degustación y vistas a las terrazas (hay una ficha de experiencia dedicada)',
      'Paseo por la mossy forest por la mañana, cuando la niebla todavía está entre los árboles',
      'Uno de los senderos numerados de la zona, del fácil al bastante exigente',
      'Buscar la rafflesia, una flor gigante, con un guía local: florece por períodos y no está garantizada',
    ],
    doveDormire:
      "Tanah Rata es el pueblo más cómodo y tiene la oferta más amplia; Brinchang está más cerca de las plantaciones pero es más anónimo. Las habitaciones raramente tienen calefacción: por la noche hace frío en serio y las mantas cuentan más que las estrellas.",
    doveMangiare:
      "La meseta tiene una identidad gastronómica propia ligada al clima: el steamboat, la olla de caldo hirviendo en el centro de la mesa en la que se cuecen verduras y carne, es lo que come todo el mundo por la noche porque hace frío, y es lo correcto. Por lo demás, té y scones en los salones de té de las plantaciones (una herencia colonial que aquí no es una pose) y las fresas en todas las formas posibles, incluidas las que sería mejor evitar.",
    comeArrivare:
      "Los autobuses desde Kuala Lumpur (terminal TBS) llegan a Tanah Rata en unas 4 horas, desde Ipoh en unas 2 y desde Penang en 4-5; los fines de semana conviene reservar. En tren ETS se llega a Ipoh o a Tapah Road, y luego taxi o autobús para la subida. El último tramo es una carretera de montaña con muchas curvas: quien se marea lo nota.",
    comeSpostarsi:
      "Las distancias entre los puntos de interés son incómodas a pie y el transporte público es escaso: casi todos se apuntan a un tour de media jornada o toman un taxi para el día. Grab funciona a trompicones.",
    periodoMigliore:
      "todo el año, con temperaturas frescas y estables. Las lluvias son frecuentes por la tarde en cualquier estación: las salidas hay que programarlas por la mañana.",
    costi:
      "Plantaciones BOH con entrada gratuita, Mossy Forest unos 30 RM para extranjeros, senderos gratis; los tours de medio día se comparan entre las agencias de Tanah Rata. Presupuesto diario por persona en doble: 25-40 € con guesthouse en Tanah Rata y comida local, 50-80 € con hotel en Brinchang y tours guiados, desde 120 € en los resorts coloniales.",
    erroriDaEvitare: [
      "Ir en fin de semana o durante las vacaciones escolares malasias: la meseta es un destino nacional muy querido y las carreteras de curvas se convierten en una cola",
      "No llevar nada de abrigo: aquí, único lugar del viaje, por la noche se hiela",
      "Reservar los tours más baratos para la mossy forest, que a menudo llevan solo a la pasarela abarrotada cerca de la torre en lugar de a la parte de verdad",
      "Esperar paisajes vírgenes: la meseta está muy cultivada y en algunas zonas los invernaderos de plástico se han comido la vista",
    ],
    miaEsperienza:
      "Las Cameron Highlands funcionan sobre todo por contraste: llegamos tras días de calor húmedo y por la noche dormimos bajo una manta, que a esas alturas parecía un lujo. Las plantaciones de té son bonitas, con las terrazas verdes que bajan en ondas, y el salón de té asomado a las colinas es una de esas cosas coloniales que aquí no desentonan. La mossy forest es la parte que más sorprende (un bosque enano a 2.000 metros todo cubierto de musgo, con la niebla entre las ramas) y a la vez aquella en la que conviene ser práctico: hay dos mossy forest, la de verdad y la pasarela turística junto al aparcamiento de la torre, y los tours más baratos llevan solo a la segunda. Está también el reverso de la medalla: la meseta es agrícola y en algunos tramos los invernaderos de plástico cubren laderas enteras. Es una zona cultivada con partes muy bonitas dentro, no un parque nacional.",
    luoghi: [
      {
        nome: "Plantaciones de té",
        testo: "Colinas cubiertas de terrazas de té hasta donde alcanza la vista, como la plantación BOH de Sungai Palas, de donde sale también el sendero hacia el bosque musgoso. Algunas plantaciones tienen un salón de té con vistas.",
        come: "En coche o con tour desde Tanah Rata o Brinchang. Carreteras de montaña estrechas.",
        quando: "Por la mañana, con menos niebla y menos gente.",
        tempo: "2 horas",
        costo: "entrada gratuita; té y dulces de pago",
        orari: "BOH Sungei Palas: 8.30-16.30, cerrado los lunes; abre algunos festivos (web oficial de BOH).",
        url: "https://bohtea.com/visit-our-tea-gardens/",
        lat: 4.51638,
        lng: 101.41625,
        consiglio: "Tomar el té en la terraza y mirar las colinas media hora: es la mejor parte.",
      },
      {
        nome: "Mossy Forest en el Gunung Brinchang",
        testo: "Un bosque de altura cerca de la cima del Gunung Brinchang, cubierto de musgo, helechos y orquídeas silvestres, con niebla entre las ramas. Se recorre por una pasarela de madera.",
        come: "En todoterreno o con un tour guiado desde Tanah Rata o Brinchang. Pedir que lleven a la parte auténtica, no solo a la pasarela junto al aparcamiento de la torre.",
        quando: "A primera hora de la mañana: la niebla sube hacia el mediodía.",
        tempo: "2-3 horas",
        costo: "unos 30 RM para adultos extranjeros hasta el final de la pasarela (unos 6 €, tarifa que indican los operadores)",
        orari: "Todos los días de 8 a 17 (Departamento Forestal de Pahang).",
        url: "https://www.forestry.gov.my/en/pahang/taman-eko-rimba-mossy",
        lat: 4.50064,
        lng: 101.38919,
        consiglio: "Preferir un tour guiado con una hora más: los tours más baratos solo llevan a la pasarela abarrotada.",
      },
      {
        nome: "Granjas de fresas e invernaderos",
        testo: "El cultivo de fresas y verduras es la otra actividad típica del altiplano. Se visitan los invernaderos, se comen fresas y se compra miel y té.",
        come: "En coche o con un tour, por la carretera principal de Brinchang.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        lat: 4.49618,
        lng: 101.38628,
        consiglio: "No esperar un paisaje virgen: muchas zonas están cubiertas por invernaderos de plástico.",
      },
      {
        nome: "Brinchang y el mercado",
        testo: "Uno de los pueblos principales de la meseta, con el mercado de productos locales, un mercado nocturno y los restaurantes donde se come steamboat.",
        come: "A pie en Brinchang o en autobús desde Tanah Rata.",
        quando: "A última hora de la tarde y por la noche.",
        tempo: "2 horas",
        costo: "gratis",
        lat: 4.491,
        lng: 101.3885,
        consiglio: "Llevar una sudadera: por la noche hace frío.",
      },
      {
        nome: "El mercado de Kea Farm",
        testo: "Una fila de puestos a lo largo de la carretera principal, bajo los invernaderos, con fresas, maíz dulce, boniatos, plantas, miel y recuerdos. Es el mercado de productos de la meseta más concurrido.",
        come: "En la carretera entre Brinchang y la plantación de Sungei Palas, en coche o con los tours.",
        quando: "Por la mañana, con los productos recién recogidos.",
        tempo: "45 minutos",
        costo: "gratis",
        lat: 4.50438,
        lng: 101.4067,
      },
      {
        nome: "El templo de Sam Poh",
        testo: "Un templo budista chino en una colina sobre Brinchang, con estatuas doradas, leones de piedra y vistas a los tejados del pueblo y a los invernaderos.",
        come: "A pie cuesta arriba desde Brinchang, 10-15 minutos.",
        quando: "Por la mañana o al atardecer.",
        tempo: "30 minutos",
        costo: "entrada libre",
        lat: 4.48885,
        lng: 101.39112,
      },
      {
        nome: "Time Tunnel",
        testo: "Un pequeño museo privado lleno de objetos de la vida cotidiana malasia del siglo XX, tiendas reconstruidas y fotos de la meseta colonial. Ingenuo pero divertido cuando llueve.",
        come: "En las afueras de Brinchang, hacia Kea Farm.",
        quando: "En las tardes de lluvia.",
        tempo: "1 hora",
        lat: 4.49729,
        lng: 101.39526,
      },
      {
        nome: "Robinson Falls y el sendero 9",
        testo: "Una cascada al final de un sendero corto por el bosque, a pocos minutos de Tanah Rata. Desde aquí el sendero 9A baja por la selva hasta la plantación BOH de Habu.",
        come: "A pie desde el final de Tanah Rata, por la carretera hacia la central hidroeléctrica.",
        quando: "Por la mañana, antes de las lluvias de la tarde.",
        tempo: "1-3 horas según el recorrido",
        costo: "gratis",
        lat: 4.4636,
        lng: 101.38775,
        consiglio: "Los senderos de la meseta se cierran y reabren por desprendimientos y mantenimiento: preguntar en el pueblo cuáles están abiertos.",
      },
      {
        nome: "Gunung Jasar y el sendero 10",
        testo: "El sendero más fácil de Tanah Rata sube en una hora aproximadamente a la cima del Gunung Jasar, a unos 1.700 metros, por el bosque, con algunas vistas sobre las colinas.",
        come: "Desde el inicio del sendero 10, por encima del pueblo.",
        quando: "Temprano por la mañana, cuando se levanta la niebla.",
        tempo: "2-3 horas ida y vuelta",
        costo: "gratis",
        lat: 4.47818,
        lng: 101.36096,
        consiglio: "Barro y raíces: calzado de trekking y algo para la lluvia.",
      },
      {
        nome: "Tanah Rata",
        testo: "El pueblo principal de la meseta, a unos 1.440 metros, con la estación de autobuses, guesthouses, restaurantes indios y chinos y el inicio de varios senderos. Es la base más cómoda para quien no conduce.",
        come: "Los autobuses de Kuala Lumpur, Ipoh y Penang llegan aquí.",
        quando: "Por la noche, para cenar.",
        tempo: "1 hora",
        costo: "gratis",
        lat: 4.47069,
        lng: 101.37769,
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mossy Forest con tour guiado al amanecer",
          "Plantación de Sungei Palas con té en la terraza",
          "Mercado de Kea Farm y una granja de fresas",
          "Tarde en Brinchang y en el templo de Sam Poh",
          "Noche: steamboat",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: el día anterior",
          "Día 2: sendero 10 al Gunung Jasar por la mañana",
          "Robinson Falls por la tarde",
          "Noche en Tanah Rata",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2: como arriba",
          "Día 3: plantaciones en la carretera de Ringlet",
          "Time Tunnel si llueve",
          "Salida hacia Ipoh por la tarde",
        ],
      },
    ],
    zone: [
      {
        nome: "Tanah Rata",
        perChi: "quien quiere estar cerca de los senderos y los autobuses",
        testo: "El centro con hostales y casas de huéspedes, cómodo para excursiones y restaurantes. Algo concurrido.",
        fascia: "20-70 €",
      },
      {
        nome: "Brinchang",
        perChi: "quien quiere estar cerca de la Mossy Forest y del mercado",
        testo: "Más tranquilo, con hoteles de gama media y más frío por la noche.",
        fascia: "40-120 €",
      },
      {
        nome: "Kea Farm y Tringkap",
        perChi: "quien viaja en coche y quiere resorts",
        testo: "Resorts y apartamentos con vistas a las colinas al norte de Brinchang, cerca de plantaciones e invernaderos. Fuera de los pueblos, hace falta coche.",
        fascia: "50-150 €",
      },
    ],
    sapori: [
      {
        nome: "Steamboat",
        testo: "Una olla de caldo hirviendo en el centro de la mesa donde se cuecen carne, pescado y verduras. Ideal para las noches frías del altiplano."
      },
      {
        nome: "Scones con fresas y nata",
        testo: "Una herencia británica, servida en las salas de té de las plantaciones."
      },
      {
        nome: "Té de plantación",
        testo: "Té negro local, servido en las salas de té de las plantaciones."
      },
      {
        nome: "Murtabak",
        testo: "Una torta rellena de carne y huevo, de origen indio musulmán. Se encuentra en los locales de Tanah Rata y Brinchang."
      }
    ],
    attenzioni: [
      "Los fines de semana y en vacaciones escolares malasias las carreteras de curvas se atascan: venir en día laborable.",
      "Por la noche refresca, y en altura hace frío: llevar algo de abrigo.",
      "Para quien se marea en el coche: la carretera de subida está llena de curvas.",
      "Elegir un tour de la Mossy Forest que llegue a la parte auténtica y no solo a la pasarela junto al aparcamiento."
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en las Cameron Highlands?",
        risposta: "Dos días: uno para la Mossy Forest, las plantaciones y los mercados, otro para un sendero y algo de descanso. Con un tercero se baja con calma hacia Ipoh.",
      },
      {
        domanda: "¿Mejor dormir en Tanah Rata o en Brinchang?",
        risposta: "Tanah Rata por los autobuses, los senderos y los restaurantes; Brinchang para estar más cerca de la Mossy Forest y del mercado nocturno.",
      },
      {
        domanda: "¿Cuánto cuesta la Mossy Forest?",
        risposta: "Los operadores indican unos 30 RM para adultos extranjeros hasta el final de la pasarela; la parte de más allá requiere un permiso forestal. Abre de 8 a 17.",
      },
      {
        domanda: "¿Cuándo abre la plantación BOH de Sungei Palas?",
        risposta: "De 8.30 a 16.30, cerrada los lunes salvo algunos festivos. La entrada es gratuita; se pagan el té y los dulces.",
      },
      {
        domanda: "¿Hace frío en las Cameron Highlands?",
        risposta: "De día es fresco, y por la noche a menudo baja de 15 grados. Hace falta una sudadera o una chaqueta ligera todo el año.",
      },
      {
        domanda: "¿Hace falta un tour o se puede ir por libre?",
        risposta: "El transporte público es escaso: se toma un tour de medio día, un taxi por días o se alquila coche. Los senderos cerca de Tanah Rata se hacen a pie.",
      },
    ],
    gite: [
      {
        nome: "Ipoh",
        distanza: "unos 90 km, 2 horas en coche o bus",
        come: "En bus desde Tanah Rata o en coche por la carretera de Simpang Pulai.",
        testo: "La ciudad de los templos en cuevas calizas, del casco antiguo con murales y del white coffee. Una buena parada al bajar de la meseta.",
      },
      {
        nome: "La cascada de Lata Iskandar",
        distanza: "unos 30 km, 40 minutos en coche",
        come: "En la antigua carretera hacia Tapah, en coche o como parada del bus.",
        testo: "Una cascada que cae sobre las rocas junto a la carretera de montaña, con puestos de fruta y productos de los orang asli.",
      },
      {
        nome: "Kellie's Castle",
        distanza: "unos 80 km, 1,5-2 horas en coche",
        come: "En coche hacia Batu Gajah, cerca de Ipoh.",
        testo: "La mansión inacabada de un plantador escocés de principios del siglo XX, abandonada a medias tras su muerte. Ruinas de ladrillo rojo entre las plantaciones.",
      },
    ],
    esperienzeSlugs: ['piantagioni-te-cameron'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Las colinas cubiertas de selva de las Cameron Highlands vistas desde un mirador',
    immagine: '/images/malesia/cameron-highlands.jpg',
  },
  {
    slug: 'taman-negara',
    paeseSlug: 'malesia',
    ordine: 5,
    nome: 'Taman Negara',
    tipologia: ['natura', 'giungla', 'trekking'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "Una selva pluvial antiquísima, en el corazón de la península malaya. Se llega en barca por el río, y eso ya dice mucho de qué esperar.",
    percheAndarci:
      "Es selva de verdad, accesible desde Kuala Lumpur, y la pasarela de copas suspendida entre los árboles es una de las pocas formas de ver una selva pluvial desde arriba en lugar de desde abajo, donde casi no se ve nada.",
    cosaVedere: [
      'La canopy walkway, suspendida entre las copas de los árboles',
      'El Bukit Teresek, la subida panorámica sobre la bóveda de la selva',
      'Los rápidos de Lata Berkoh, remontados en barca',
      'Un poblado orang asli, las comunidades indígenas de la península, con demostración de cerbatana',
      'Las cuevas de Gua Telinga, que se recorren arrastrándose, para quien no teme los espacios estrechos',
    ],
    cosaFare: [
      'Caminar por la canopy walkway a primera hora de la mañana (hay una ficha de experiencia dedicada)',
      'Night walk guiada en la selva, el momento en que los animales se ven de verdad',
      'Remontar el río en barca larga hasta los rápidos',
      'Trekking de varios días hacia los hides, los puestos de avistamiento donde se duerme esperando a la fauna',
    ],
    doveDormire:
      "Kuala Tahan, el pueblo en la orilla opuesta a la entrada del parque, tiene los alojamientos económicos y los restaurantes flotantes; dentro del parque está el resort oficial, más caro pero con la ventaja de estar ya en el lado correcto del río por la mañana.",
    doveMangiare:
      "En Kuala Tahan se come en los restaurantes flotantes amarrados en el río, que sirven cocina malaya sencilla a precios bajos con la corriente pasando bajo las mesas. Dentro del parque la oferta es limitada y cara. Para los treks largos se lleva todo de fuera: agua incluida, porque a lo largo de los senderos no hay nada.",
    comeArrivare:
      "Minibús desde Kuala Lumpur hasta Kuala Tembeling o a Jerantut, luego barca larga por el río Tembeling: la travesía es la parte más bonita del traslado. Muchos operadores ofrecen el paquete combinado desde la capital.",
    comeSpostarsi: 'A pie en el parque y en barca por el río: no hay carreteras. Para cruzar de Kuala Tahan a la entrada hay barquitas frecuentes y baratas.',
    periodoMigliore:
      "la ventana más seca es a mitad de año. A final de año las lluvias son fuertes y algunas actividades se suspenden; el nivel del río condiciona las remontadas en barca.",
    costi: "para entrar en el parque hace falta el permiso del Departamento de Fauna y Parques (a menudo incluido en los paquetes); la canopy walkway y las excursiones guiadas se pagan aparte, con precios que varían según la duración.",
    erroriDaEvitare: [
      "Esperar ver tigres, elefantes o tapires: existen, pero los avistamientos son rarísimos y quien llega con esa idea vuelve decepcionado. Aquí se oye más de lo que se ve",
      "Ir sin calcetines antisanguijuelas en la estación húmeda: las sanguijuelas terrestres son numerosas y llegan desde abajo",
      "Hacer la canopy walkway a mediodía, cuando hay cola en las pasarelas y se pasa de uno en uno",
      "Subestimar la night walk: es el momento en que la selva se anima, y casi todos se la saltan por cansancio",
    ],
    miaEsperienza:
      "Taman Negara hay que afrontarla con la expectativa correcta, porque es la parada que decepciona a quien llega pensando en un documental. La selva pluvial es densísima y de lado se ve a pocos metros: se oyen cigarras, gibones lejanos, pájaros, pero de animales grandes casi no se ve nada. Lo que la hace memorable son la travesía en barca larga para llegar, dos horas y media a contracorriente entre dos muros de verde, y la canopy walkway, la única forma de mirar la selva desde arriba y entender su estructura por estratos. Hay que hacerla a la apertura, porque más tarde se pasa de uno en uno con la cola detrás. La night walk es la parte que casi todos se saltan, y es la que vale: con la linterna se ven arañas, serpientes, ojos que reflejan en la oscuridad, y la selva de día silenciosa se vuelve ruidosísima. Una última cosa práctica: las sanguijuelas existen y suben por los pies, y los calcetines específicos no son un exceso de celo.",
    luoghi: [
      {
        nome: "Canopy walkway",
        testo: "Una pasarela colgante entre las copas de los árboles. Es la única manera de mirar la selva desde arriba y entender su estructura por capas.",
        come: "A pie desde el pueblo de Kuala Tahan, por un sendero en la selva. El permiso se compra en el centro de visitantes; se pasa de pocos en pocos.",
        quando: "A la apertura: más tarde se va con cola detrás.",
        tempo: "2-3 horas",
        consiglio: "Ir a la apertura para tener la pasarela casi libre."
      },
      {
        nome: "Bukit Teresek",
        testo: "Una subida empinada sobre el dosel de la selva, con escalones y raíces. Desde arriba se ve la extensión verde y el río.",
        come: "A pie desde Kuala Tahan, por el mismo sendero de la canopy walkway, con un tramo más.",
        quando: "A primera hora de la mañana, por el fresco.",
        tempo: "2 horas",
        consiglio: "Llevar agua y calcetines altos contra las sanguijuelas."
      },
      {
        nome: "Lata Berkoh",
        testo: "Rápidos río arriba del pueblo, a los que se llega remontando el río en barca larga. El trayecto en barca, contracorriente entre dos paredes de selva, ya forma parte de la visita.",
        come: "En barca larga desde el pueblo, a horas acordadas con los operadores. El nivel del río decide si se puede ir.",
        quando: "Por la mañana. En la temporada de lluvias las salidas se suspenden.",
        tempo: "medio día",
        consiglio: "Preguntar a varios operadores si la salida está confirmada antes de reservar."
      },
      {
        nome: "Night walk",
        testo: "Una caminata nocturna con guía y linterna por el bosque: arañas, insectos, serpientes y ranas, y con suerte algún mamífero. Es el momento en que el bosque cobra vida.",
        come: "Con un guía del parque o de un operador autorizado, desde el pueblo.",
        quando: "Después del atardecer, durante un par de horas.",
        tempo: "2 horas",
        consiglio: "Es la parte que casi todos se saltan por cansancio y la que merece la pena."
      },
      {
        nome: "Poblado Orang Asli y Gua Telinga",
        testo: "Las comunidades indígenas de la península siguen viviendo en la zona; una visita con demostración de cerbatana es la forma más habitual. Gua Telinga es una cueva que se recorre arrastrándose, con murciélagos.",
        come: "Con operadores autorizados, en barca. La visita a la cueva exige no tener problemas con los espacios estrechos.",
        quando: "Por la mañana.",
        tempo: "medio día",
        consiglio: "Elegir un operador que lleve dinero a la comunidad y no haga un espectáculo."
      }
    ],
    programmi: [
      {
        titolo: "2 días",
        tappe: [
          "Día 1: llegada en barca desde Kuala Tembeling (unas 2 horas y media por el río), instalación, night walk",
          "Día 2: canopy walkway a la apertura, Bukit Teresek, almuerzo en el pueblo, regreso por la tarde"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Como los 2 días, con el día adicional para Lata Berkoh o el poblado Orang Asli"
        ]
      }
    ],
    zone: [
      {
        nome: "Kuala Tahan (lado del pueblo)",
        perChi: "quien quiere una cama barata y restaurantes cerca",
        testo: "Casas de huéspedes y chalés en el río frente al parque, con restaurantes flotantes. Ruidoso y sencillo."
      },
      {
        nome: "Dentro del parque",
        perChi: "quien quiere alojarse dentro del parque",
        testo: "Resort con chalés, cerca de los senderos. Más caro, con poca oferta de comida."
      }
    ],
    sapori: [
      {
        nome: "Pescado de río a la parrilla",
        testo: "Pescado del Tembeling a la brasa, servido en los restaurantes flotantes de Kuala Tahan."
      },
      {
        nome: "Nasi campur",
        testo: "Arroz con muchos platitos a elegir, señalados en el mostrador. Una comida sencilla y barata."
      },
      {
        nome: "Teh tarik",
        testo: "Té con leche condensada «estirado» de un vaso a otro. Se pide en todas partes."
      },
      {
        nome: "Mee goreng",
        testo: "Fideos salteados con verduras y huevo. El plato que casi siempre hay."
      }
    ],
    attenzioni: [
      "Las sanguijuelas abundan en la estación húmeda: calcetines adecuados y revisar las piernas al final del día.",
      "No esperar ver tigres ni elefantes: los avistamientos son rarísimos.",
      "Casi no hay cajeros en el pueblo: llevar efectivo desde Kuala Lumpur o Jerantut.",
      "En la estación de lluvias, a final de año, los ríos crecen y algunas actividades se suspenden: preguntar en el lugar."
    ],
    esperienzeSlugs: ['canopy-walkway-taman-negara'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'La selva pluvial de Taman Negara vista desde la colina de Teresek, con las montañas en el horizonte',
    immagine: '/images/malesia/taman-negara.jpg',
  },
  {
    slug: 'langkawi',
    paeseSlug: 'malesia',
    ordine: 6,
    nome: 'Langkawi',
    tipologia: ['mare', 'isole', 'natura'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      "Un archipiélago de muchas islas en el norte del estrecho de Malaca, pegado a la frontera tailandesa: playas, manglares, un geoparque UNESCO de formaciones calizas y un teleférico empinadísimo que sube a una cresta con un puente colgante en curva.",
    percheAndarci:
      "Es una isla de la costa oeste accesible sin complicaciones, funciona también en la estación en que las Perhentian cierran, y el paseo en barca entre los manglares muestra una Malasia distinta de la de las playas.",
    cosaVedere: [
      'El Sky Bridge, el puente peatonal curvo suspendido sobre la selva, al que se llega con el teleférico de Machinchang',
      'El geoparque de los manglares de Kilim, con las formaciones calizas y las cuevas',
      'La playa equipada de Pantai Cenang y las más tranquilas del norte',
    ],
    cosaFare: [
      'Paseo en barca por los manglares de Kilim, con las águilas marinas y las cuevas calizas',
      'Teleférico y Sky Bridge, mejor por la mañana antes de que llegue la bruma',
      'Island hopping entre las islas cercanas',
    ],
    doveDormire:
      "Pantai Cenang por servicios, restaurantes y vida nocturna; la costa norte alrededor de Datai y Tanjung Rhu por los resorts y la verdadera tranquilidad; Kuah por los precios bajos y la cercanía al puerto, pero sin playa digna.",
    doveMangiare:
      "La isla vive del turismo y los precios lo reflejan, pero bastan pocos metros de la playa para volver a los estándares malasios: los puestos de los mercados nocturnos son la mejor opción y la más económica. El pescado a la parrilla y los currys de pescado son la cocina natural del lugar.",
    comeArrivare:
      "El aeropuerto de Langkawi (LGK) está a 10 minutos de Pantai Cenang, con vuelos desde Kuala Lumpur en una hora, desde Penang y desde Singapur. Los ferris llegan al muelle de Kuah desde Kuala Perlis (una hora y cuarto) y Kuala Kedah (una hora y 45 minutos), conectadas con trenes y autobuses de la costa oeste; otros ferris llegan desde Penang y, en la estación seca, desde Satun y Koh Lipe en Tailandia.",
    comeSpostarsi:
      "Coche o moto de alquiler son el medio adecuado: la isla es grande, el transporte público casi inexistente y los taxis caros respecto al resto del país. Conducir es sencillo y las carreteras son buenas.",
    periodoMigliore:
      "la estación seca de la costa oeste, en torno a principios de año, con el mar más en calma. En los meses centrales las lluvias son más frecuentes y puede llegar la bruma de incendios de Indonesia.",
    costi:
      "Teleférico y Sky Bridge unos 80-90 RM para no malasios, paseo en barco por los manglares a compartir, Underwater World unos 60 RM; Telaga Tujuh y las playas gratis; alquiler de moto barato. Presupuesto diario por persona en doble: 30-45 € con guesthouse en Cenang y mercados nocturnos, 70-110 € en resort con coche de alquiler, desde 250 € en los resorts de la costa norte.",
    erroriDaEvitare: [
      "Esperar aguas de postal tailandesa: el mar de Langkawi suele estar turbio porque estamos en la desembocadura de sistemas fluviales, y quien busca el turquesa se queda decepcionado",
      "Subir al teleférico a primera hora de la tarde, cuando la bruma tapa la vista y la cola es larga",
      "Alquilar la moto sin carné internacional y sin casco: los controles existen",
      "Tratar el paseo por los manglares como una excursión en barca: los guías que dan de comer a las águilas para atraerlas practican algo discutible, y hay que preguntar de antemano si el operador lo hace",
    ],
    miaEsperienza:
      "Langkawi es la isla cómoda de Malasia y hay que tomarla por lo que es: se llega en avión, se alquila una moto y se recorre libremente. Con el mar hay que bajar las expectativas. El agua suele ser verdosa y turbia, porque estamos en el estrecho y los ríos desembocan allí: quien busca el turquesa de las postales está mirando la costa equivocada de Malasia. Por sorpresa, lo que da sentido a la parada es la parte no playera: el paseo entre los manglares de Kilim, con las paredes calizas que se cierran sobre la barca, las cuevas de murciélagos y los cangrejos en el fango, es más interesante que cualquier playa de la isla. El Sky Bridge merece la subida a condición de hacerla pronto: hacia mediodía la bruma se lo come todo y queda la cola. Y está el detalle práctico que nadie anticipa: Langkawi es puerto franco, así que el alcohol cuesta un tercio que en el resto del país, y se nota enseguida cómo cambia el ambiente nocturno respecto al resto de Malasia.",
    luoghi: [
      {
        nome: "Langkawi Sky Bridge y teleférico",
        testo: "El teleférico sube hacia la cima del Gunung Mat Cincang. Desde allí se baja al puente peatonal curvo, suspendido en el vacío a 660 metros sobre el nivel del mar, con vistas al mar, las islas y la selva.",
        come: "Desde la estación base se toma el teleférico hasta la estación superior, luego el ascensor inclinado SkyGlide o un sendero llevan al puente.",
        quando: "Por la mañana, cuando la neblina es menor y las colas más cortas.",
        tempo: "3 horas",
        costo: "teleférico y Sky Bridge unos 80-90 RM para no malasios (unos 16-18 €, precios de revendedores 2026)",
        orari: "SkyCab normalmente de 9.30 a 18; algunos miércoles abre solo desde las 12 por mantenimiento. Cuando el teleférico está cerrado también lo están Sky Bridge y SkyGlide (calendario oficial, noviembre-diciembre de 2026).",
        url: "https://www.panoramalangkawi.com/",
        lat: 6.37136,
        lng: 99.6716,
        consiglio: "Subir a la apertura: hacia el mediodía la neblina cubre la vista.",
      },
      {
        nome: "Telaga Tujuh (Seven Wells)",
        testo: "Una serie de pozas naturales en la roca, en lo alto de una cascada de unos 90 metros, en la selva sobre Oriental Village. Agua fresca para un baño después de la subida.",
        come: "A unos 1,5 km al norte de Oriental Village, la base del teleférico: en scooter o coche hasta el aparcamiento, luego a pie.",
        quando: "A primera hora de la mañana.",
        tempo: "1 hora y media",
        costo: "gratis",
        lat: 6.38178,
        lng: 99.67288,
        consiglio: "Se combina con el teleférico la misma mañana. Calzado adecuado: las rocas mojadas resbalan.",
      },
      {
        nome: "Manglares de Kilim",
        testo: "Forman parte del geoparque UNESCO de Langkawi: paredes calizas, cuevas de murciélagos, monos y cangrejos en el fango. Se visita en barca.",
        come: "En barca con operadores, desde el embarcadero de Kilim. El recorrido dura unas horas.",
        quando: "Por la mañana.",
        tempo: "medio día",
        lat: 6.405,
        lng: 99.85843,
        consiglio: "Preguntar antes si el operador da de comer a las águilas: es una práctica discutible.",
      },
      {
        nome: "Pantai Cenang",
        testo: "Una playa equipada, con bares, restaurantes y tiendas. Mar a menudo turbio, pero con una bonita puesta de sol.",
        come: "En scooter o taxi desde el aeropuerto, que está cerca.",
        quando: "El atardecer.",
        tempo: "2 horas",
        costo: "gratis",
        lat: 6.29576,
        lng: 99.72239,
        consiglio: "Quien busque el mar turquesa debe ir a las Perhentian: aquí hay vida de playa.",
      },
      {
        nome: "Tanjung Rhu",
        testo: "La playa más bonita de la isla, en la costa norte: arena clara, casuarinas e islotes calizos delante, con el agua a menudo más limpia que en Cenang. Con marea baja se camina hasta un islote.",
        come: "En coche o moto, unos 40 minutos desde Cenang.",
        quando: "Al atardecer, o con marea baja para llegar al islote.",
        tempo: "medio día",
        costo: "gratis",
        lat: 6.45851,
        lng: 99.82543,
      },
      {
        nome: "Dataran Lang",
        testo: "La plaza del puerto de Kuah con el águila pardo-rojiza de 12 metros, símbolo de la isla: según la leyenda el nombre Langkawi viene de helang, águila, y kawi, el color pardo rojizo.",
        come: "A pie desde el muelle de ferris de Kuah.",
        quando: "Al atardecer, o al llegar en ferry.",
        tempo: "30 minutos",
        costo: "gratis",
        lat: 6.30846,
        lng: 99.85196,
      },
      {
        nome: "Underwater World",
        testo: "El gran acuario de Pantai Cenang, con un túnel bajo el tanque de los tiburones, pingüinos y una sección sobre manglares y selva. Útil con niños o en tardes de lluvia.",
        come: "A pie en la calle principal de Pantai Cenang.",
        quando: "En las horas de calor o con lluvia.",
        tempo: "2 horas",
        costo: "unos 60 RM para no malasios (unos 12 €, precios de revendedores 2026)",
        orari: "Suele abrir de 10 a 18, más tarde en festivos.",
        lat: 6.28772,
        lng: 99.72859,
      },
      {
        nome: "Pulau Dayang Bunting",
        testo: "La segunda isla del archipiélago, dentro del geoparque, con el lago de la Doncella Embarazada, un lago de agua dulce entre paredes calizas separado del mar por una cresta estrecha. Se puede nadar, entre peces y monos en la orilla.",
        come: "Con los paseos en barco por las islas desde Pantai Cenang o Kuah, que paran también en Pulau Beras Basah y en el punto de las águilas.",
        quando: "Por la mañana, con el mar en calma.",
        tempo: "medio día con la vuelta a las islas",
        lat: 6.23222,
        lng: 99.79972,
        consiglio: "Llevar bolsas y comida cerradas: los monos del muelle roban.",
      },
      {
        nome: "Gunung Raya",
        testo: "La montaña más alta de Langkawi, unos 880 metros, con una carretera que sube por la selva hasta una torre mirador. Desde la cima se ve todo el archipiélago y, con aire limpio, la costa tailandesa.",
        come: "En coche o moto, carretera asfaltada empinada hasta arriba.",
        quando: "Temprano por la mañana: en el camino se ven cálaos y monos.",
        tempo: "2 horas",
        lat: 6.36882,
        lng: 99.81831,
        consiglio: "Con nubes bajas no se ve nada: mejor un día despejado.",
      },
      {
        nome: "La tumba de Mahsuri",
        testo: "El mausoleo de Mahsuri, la mujer ejecutada injustamente en el siglo XVIII que, según la leyenda, maldijo la isla durante siete generaciones. Alrededor hay un pequeño pueblo tradicional malayo con casas de madera.",
        come: "A unos 12 km de Cenang, en coche o moto.",
        quando: "De día.",
        tempo: "1 hora",
        lat: 6.33874,
        lng: 99.78399,
      },
      {
        nome: "La cascada de Durian Perangin",
        testo: "Una cascada escalonada en la selva del norte de la isla, con pozas para bañarse, menos visitada que Telaga Tujuh. Se sube por una escalinata en el bosque.",
        come: "En coche o moto, unos 15 km al norte de Kuah.",
        quando: "Después de las lluvias, cuando lleva más agua; en la estación seca puede estar casi seca.",
        tempo: "1-2 horas",
        costo: "gratis",
        lat: 6.40171,
        lng: 99.82054,
      },
      {
        nome: "Laman Padi",
        testo: "Un pequeño museo del arroz con arrozales de demostración en Pantai Cenang, donde se ve cómo se cultiva el arroz en la llanura de Langkawi, con un restaurante que mira a los campos.",
        come: "En la calle principal de Pantai Cenang, a pie.",
        quando: "Al atardecer, con la luz sobre los arrozales.",
        tempo: "1 hora",
        lat: 6.29858,
        lng: 99.72239,
      },
      {
        nome: "Pantai Kok",
        testo: "Una bahía en la costa oeste bajo las montañas del teleférico, con el agua más verde y tranquila, resorts y el club náutico de Telaga. Es la playa para combinar con el teleférico y Telaga Tujuh.",
        come: "En coche o moto, unos 15 minutos desde Cenang.",
        quando: "Por la tarde, después del teleférico.",
        tempo: "2 horas",
        costo: "gratis",
        lat: 6.36639,
        lng: 99.67778,
      },
      {
        nome: "El mercado nocturno",
        testo: "Cada tarde se celebra un pasar malam en un pueblo distinto de la isla, con puestos de satay, pescado a la parrilla, murtabak y dulces malayos. El de Pantai Cenang es de los más cómodos para quien duerme en la playa.",
        come: "A pie o en moto; el día y el lugar cambian: preguntar en el hotel.",
        quando: "Desde última hora de la tarde hasta las 22 más o menos.",
        tempo: "1-2 horas",
        lat: 6.29914,
        lng: 99.72753,
        consiglio: "Es donde mejor se come gastando menos.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Teleférico y Sky Bridge a la apertura",
          "Telaga Tujuh y Pantai Kok",
          "Tarde en Laman Padi",
          "Atardecer en Pantai Cenang y mercado nocturno",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: el día anterior",
          "Día 2: manglares de Kilim por la mañana",
          "Tarde en Tanjung Rhu",
          "Cena en Kuah y Dataran Lang al atardecer",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2: como arriba",
          "Día 3: vuelta a las islas con Dayang Bunting por la mañana",
          "Tarde: Gunung Raya o Durian Perangin",
          "Tumba de Mahsuri a la vuelta",
        ],
      },
    ],
    zone: [
      {
        nome: "Pantai Cenang",
        perChi: "quien quiere playa, bares y cenar fuera",
        testo: "La zona más animada, con mucha oferta. Ruidosa y concurrida.",
        fascia: "40-150 €",
      },
      {
        nome: "Pantai Tengah",
        perChi: "quien busca algo de calma",
        testo: "Junto a Cenang, más tranquila, con resorts y casas de huéspedes.",
        fascia: "50-200 €",
      },
      {
        nome: "Kuah",
        perChi: "quien llega en ferri o quiere ahorrar",
        testo: "La capital, con el puerto y los precios más bajos, pero lejos de las playas.",
        fascia: "25-60 €",
      },
      {
        nome: "Tanjung Rhu y Datai",
        perChi: "quien busca resorts y tranquilidad",
        testo: "Los grandes resorts de la costa norte, entre selva y playas claras, lejos de todo: hace falta coche o taxi para cada salida.",
        fascia: "200-600 €",
      },
    ],
    sapori: [
      {
        nome: "Pescado a la parrilla",
        testo: "Pescado fresco a la brasa con sambal, en los restaurantes junto al mar."
      },
      {
        nome: "Laksa de Langkawi",
        testo: "Fideos en caldo de pescado especiado. Se encuentra en puestos callejeros."
      },
      {
        nome: "Productos libres de impuestos",
        testo: "Langkawi es una isla duty free: chocolate, alcohol y perfumes cuestan menos que en el continente."
      },
      {
        nome: "Nasi lemak",
        testo: "Arroz con coco, anchoas fritas, huevo y sambal. El desayuno nacional."
      }
    ],
    attenzioni: [
      "Mar a menudo turbio: quien busque agua turquesa se decepciona, mejor centrarse en los manglares y las excursiones.",
      "Scooter: carné internacional y casco, los controles existen.",
      "Águilas y monos en los manglares: no darles de comer y preguntar al operador si lo hace.",
      "En los meses secos puede llegar la bruma de los incendios de Indonesia: consultar las noticias."
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Langkawi?",
        risposta: "Tres días: uno para el teleférico y la costa oeste, otro para los manglares de Kilim y Tanjung Rhu, otro para la vuelta a las islas y algo de playa.",
      },
      {
        domanda: "¿Es bonito el mar de Langkawi?",
        risposta: "A menudo es verdoso y turbio, por los ríos que desembocan en el estrecho de Malaca. Las mejores playas son Tanjung Rhu y las del norte; para el turquesa hay que ir a las Perhentian o a Koh Lipe.",
      },
      {
        domanda: "¿Hace falta alquilar coche en Langkawi?",
        risposta: "Sí, o una moto: la isla es grande y el transporte público casi no existe. Las carreteras son buenas; hace falta el permiso internacional de conducir.",
      },
      {
        domanda: "¿A qué hora abre el teleférico?",
        risposta: "Normalmente a las 9.30, hasta las 18; algunos miércoles abre desde las 12 por mantenimiento. El calendario actualizado está en la web oficial de Panorama Langkawi.",
      },
      {
        domanda: "¿Cuándo ir a Langkawi?",
        risposta: "De noviembre a abril, con el mar más tranquilo y menos lluvia. De mayo a octubre llueve más a menudo y puede llegar la bruma de los incendios de Indonesia.",
      },
      {
        domanda: "¿Langkawi es de verdad duty free?",
        risposta: "Sí: alcohol, chocolate y tabaco cuestan menos que en tierra firme. Al salir de la isla hay límites a las cantidades que se pueden llevar.",
      },
    ],
    gite: [
      {
        nome: "La vuelta a las islas",
        distanza: "medio día en barco",
        come: "Con los operadores de Pantai Cenang o Kuah, en grupo o en barco privado.",
        testo: "Pulau Dayang Bunting con su lago, Pulau Beras Basah para el baño y el punto de las águilas. Conviene preguntar si el operador da de comer a las águilas y elegir uno que no lo haga.",
      },
      {
        nome: "Koh Lipe",
        distanza: "una hora y media de ferry",
        come: "Ferry rápido desde Pantai Cenang o Kuah, en la estación seca; se cruza la frontera tailandesa con el pasaporte.",
        testo: "La isla tailandesa con el mar transparente que a Langkawi le falta. Se va para al menos una noche, no en el día.",
      },
      {
        nome: "Penang",
        distanza: "unas 3 horas de ferry",
        come: "Ferry de Kuah a George Town, o vuelo de 30 minutos.",
        testo: "George Town, con el centro histórico UNESCO y la comida callejera: la siguiente etapa natural.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'El Sky Bridge de Langkawi suspendido entre las montañas cubiertas de selva',
    immagine: '/images/malesia/langkawi.jpg',
  },
  {
    slug: 'perhentian',
    paeseSlug: 'malesia',
    ordine: 7,
    nome: 'Islas Perhentian',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    introduzione:
      "Dos islas en la costa este, en el mar de China Meridional: arena blanca, agua turquesa de verdad, tortugas que se encuentran haciendo snorkeling desde la orilla y ninguna carretera, porque no hay vehículos. Cierran casi por completo cuando llega el monzón del noreste, entre finales y principios de año.",
    percheAndarci:
      "Son la respuesta a la pregunta de dónde está el mar bonito en Malasia (en la costa este, no en la oeste), y el desarrollo todavía es bajo: se duerme en chalets, se come en la playa y por la noche la electricidad en algunos sitios va con generador.",
    cosaVedere: [
      'Perhentian Besar, la más grande, más tranquila y con las mejores playas',
      'Perhentian Kecil, la pequeña, con Long Beach y la vida nocturna',
      'Los arrecifes accesibles haciendo snorkeling',
      'Las calas accesibles solo por mar',
    ],
    cosaFare: [
      'Snorkeling con las tortugas, que aquí se ven partiendo desde la playa sin barca ni guía',
      'Curso o inmersiones: las Perhentian son un sitio económico para sacarse una titulación',
      'Paseo en barca alrededor de las dos islas con paradas en los puntos de snorkeling',
      'Recorrer el sendero por la selva entre las playas, la única conexión por tierra',
    ],
    doveDormire:
      "Besar para las familias y quien busca calma, Kecil y Long Beach para el ritmo más social y los precios bajos. Los alojamientos son sencillos: chalets de madera, aire acondicionado no siempre, y en algunos establecimientos la electricidad funciona por franjas horarias.",
    doveMangiare:
      "Se come en los restaurantes de los chalets y en las barbacoas nocturnas en la playa, donde el pescado se expone sobre hielo y se asa al momento: es la cena típica y cuesta poco. La oferta es limitada y repetitiva (nasi goreng, mie goreng, pescado, curry) y hay que aceptarla como parte del paquete. Hay que saber que estamos en un estado conservador, el alcohol se encuentra poco y es caro, y algunos establecimientos no lo sirven en absoluto.",
    comeArrivare:
      "Vuelo a Kota Bharu o autobús nocturno desde Kuala Lumpur hasta Kuala Besut, luego speedboat. La travesía es rápida pero movida: quien se marea en el mar lo nota.",
    comeSpostarsi: 'Solo a pie y en water taxi: en las islas no hay carreteras ni vehículos. Los traslados entre playas se hacen en barca, por pocos ringgit.',
    periodoMigliore:
      "los meses fuera del monzón, en la parte central del año. **Entre finales y principios de año las islas cierran casi por completo** por el monzón del noreste: los establecimientos echan el cierre y los ferris se detienen. Es un cierre de verdad, más que una temporada baja.",
    costi:
      "chalets sencillos a precios bajos, lancha rápida de ida y vuelta desde Kuala Besut; inmersiones a precios bajos.",
    erroriDaEvitare: [
      "Programarlas durante el monzón del noreste: están cerradas, y es el error que echa a perder itinerarios enteros",
      "Contar con los pagos con tarjeta: en las islas se funciona casi solo con efectivo y los cajeros son poquísimos y a menudo están vacíos: se saca dinero en tierra firme",
      "Esperar resorts y servicios: aquí se duerme en chalets y la corriente puede ir por horarios",
      "Subestimar el código social de Terengganu: es un estado conservador, y fuera de las playas la ropa que cubre es la norma esperada",
    ],
    miaEsperienza:
      "Por las Perhentian vale la pena reorganizar un itinerario en Malasia: es la única costa donde el mar es el de las fotografías, turquesa y transparente, y basta entrar en el agua desde la playa para cruzarse con una tortuga que ramonea en el fondo sin darle importancia. Es también un lugar que se ha quedado atrás a propósito: chalets de madera, ventilador en lugar de aire acondicionado, electricidad por franjas, ningún cajero que funcione y cenas que a los tres días se repiten. Quien lo sabe de antemano lo disfruta, quien espera un resort no. Lo que hay que poner en la agenda antes que nada es el calendario: de noviembre a febrero el monzón del noreste cierra las islas, los ferris se detienen y los establecimientos echan el cierre. Más que temporada baja, está cerrado: es el error que hace saltar más itinerarios malasios que cualquier otro.",
    luoghi: [
      {
        nome: "Perhentian Besar",
        testo: "La isla grande, más tranquila, con las mejores playas y menos locales nocturnos. El sitio para quien quiere mar y silencio.",
        come: "En lancha rápida desde el muelle de Kuala Besut.",
        quando: "En los meses fuera del monzón. Con el monzón del noreste casi todos los resorts y ferris paran.",
        tempo: "al menos 2 noches",
        costo: "Tasa de conservación del parque marino: 30 RM para extranjeros (2022), se paga en la oficina del muelle de Kuala Besut.",
        consiglio: "Reservar chalé y barca con antelación en temporada alta."
      },
      {
        nome: "Perhentian Kecil y Long Beach",
        testo: "La isla pequeña, con la playa más animada (Long Beach), bares en la arena y vida nocturna. Al otro lado, Coral Bay, más tranquila.",
        come: "Lancha rápida desde Kuala Besut; entre playas con taxi acuático.",
        quando: "En los meses fuera del monzón.",
        tempo: "al menos 2 noches",
        consiglio: "Quien busque silencio debe ir a Coral Bay o a Besar."
      },
      {
        nome: "Snorkel en el arrecife",
        testo: "Puntos de snorkel donde se pueden encontrar tiburones de punta negra y tortugas. En algunos puntos se entra directamente desde la playa.",
        come: "En barca con los operadores de snorkel, medio día.",
        quando: "Por la mañana, con el agua más clara.",
        tempo: "medio día",
        consiglio: "No tocar ni perseguir a las tortugas: se miran sin acercarse."
      },
      {
        nome: "Calas solo por mar",
        testo: "Calas accesibles solo en barca o por senderos cortos, con agua transparente y poquísima gente.",
        come: "Con taxi acuático desde Kecil, o a pie por el bosque con sendero señalizado.",
        quando: "Por la mañana.",
        tempo: "medio día",
        consiglio: "Llevar efectivo para el taxi acuático: en las islas los cajeros son muy pocos."
      }
    ],
    programmi: [
      {
        titolo: "3 días",
        tappe: [
          "Día 1: llegada, chalé, playa y atardecer",
          "Día 2: salida de snorkel por el arrecife",
          "Día 3: calas solo por mar y regreso en barca"
        ]
      },
      {
        titolo: "4 días",
        tappe: [
          "Como los 3 días, con el cuarto para una inmersión o un día libre en la playa"
        ]
      }
    ],
    zone: [
      {
        nome: "Long Beach (Kecil)",
        perChi: "quien quiere vida nocturna y comodidad",
        testo: "Chalés sencillos, bares, restaurantes, centros de buceo. Más ruidosa."
      },
      {
        nome: "Coral Bay (Kecil)",
        perChi: "quien quiere atardeceres y algo de calma",
        testo: "En el lado oeste de Kecil, con bares en la playa y poca gente."
      },
      {
        nome: "Perhentian Besar",
        perChi: "quien quiere el mejor mar y silencio",
        testo: "Pocos resorts y chalés, algunos restaurantes. Electricidad a ciertas horas."
      }
    ],
    sapori: [
      {
        nome: "Pescado a la parrilla",
        testo: "Pesca del día a la brasa con arroz y verduras, en pequeños restaurantes en la playa."
      },
      {
        nome: "Nasi goreng",
        testo: "Arroz salteado con huevo y verduras. Casi siempre disponible."
      },
      {
        nome: "Roti canai",
        testo: "Pan plano servido con curry. Un desayuno básico."
      },
      {
        nome: "Fruta fresca y agua de coco",
        testo: "Coco y fruta tropical, vendidos en la playa."
      }
    ],
    attenzioni: [
      "Con el monzón del noreste, entre finales y principios de año, casi todos los resorts y ferris cierran: comprobar las fechas antes de reservar.",
      "Efectivo: pocos cajeros y a menudo vacíos, retirar en el continente.",
      "Terengganu es un estado conservador: lejos de las playas, vestir ropa cubierta.",
      "Electricidad a ciertas horas y sin aire acondicionado en muchos chalés."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Una playa de arena blanca y mar turquesa a los pies de la selva en Perhentian Kecil',
    immagine: '/images/malesia/perhentian.jpg',
  },
]
