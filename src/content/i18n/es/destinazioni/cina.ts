import type { Destinazione } from '@/lib/types'

export const destinazioniCina: Destinazione[] = [
  {
    slug: 'pechino',
    paeseSlug: 'cina',
    ordine: 1,
    nome: 'Pekín',
    tipologia: ['città', 'cultura', 'storia'],
    giorniConsigliati: '4-5 días, uno de ellos entero dedicado a la Muralla',
    visitataPersonalmente: true,
    introduzione:
      "La capital política y simbólica del país: dos palacios imperiales, el templo donde el emperador rezaba por la cosecha, los últimos hutongs que sobrevivieron a las excavadoras y, a una hora y media de carretera, el tramo de la Gran Muralla que sale en todas las fotografías.",
    percheAndarci:
      "Porque es el único lugar donde la China imperial, la maoísta y la de hoy se tocan en el espacio de pocos kilómetros: sales de la Ciudad Prohibida, atraviesas Tiananmen y te encuentras delante del mausoleo de Mao, con el skyline financiero al fondo.",
    cosaVedere: [
      'La Ciudad Prohibida, el complejo de palacios de madera más grande del mundo, con casi mil edificios',
      'La plaza de Tiananmen y, al otro lado, la colina de Jingshan, desde donde se ve desde arriba el tejado dorado de la Ciudad Prohibida',
      'El Templo del Cielo, con la sala circular de tres tejados azules y el parque donde cada mañana cientos de jubilados bailan, cantan y juegan a las cartas',
      'El Palacio de Verano, con el lago Kunming y el largo corredor pintado',
      'Los hutongs alrededor de la Torre del Tambor y del lago Houhai, el entramado de callejuelas y patios de la ciudad vieja',
      'La Gran Muralla: Mutianyu, Jinshanling o Simatai según lo dispuesto que se esté a caminar',
    ],
    cosaFare: [
      'Caminar un tramo de Muralla sin restaurar en Jinshanling (hay una ficha de experiencia dedicada)',
      'Visitar la Ciudad Prohibida a la apertura, con la reserva hecha días antes',
      'Pato laqueado en un restaurante especializado: en Pekín es un plato que se pide entero, cortado en la mesa',
      'Paseo en bicicleta o en rickshaw por los hutongs al atardecer',
      'Subir a Jingshan en la última hora de luz, la mejor vista sobre la ciudad vieja',
    ],
    doveDormire:
      "Las zonas de Dongcheng alrededor de Wangfujing y de los hutongs del lago Houhai son las más cómodas para moverse a pie y en metro; Sanlitun es la elección para quien quiere la parte moderna, los restaurantes y la vida nocturna. Conviene elegir según la línea de metro más que según el barrio: la ciudad es enorme y en superficie el tráfico es pesado.",
    doveMangiare:
      "El pato laqueado es la razón gastronómica para quedarse en Pekín, y hay que comerlo en un local que lo prepare de oficio, no donde es solo una línea de la carta. El resto de la ciudad se come en la calle y en los restaurantes de barrio: jianbing (el crepe salado de la mañana) en los carritos, jiaozi y baozi al vapor, fideos estirados a mano de Shanxi, y el pincho de cordero al comino que es la herencia musulmana del norte. Un detalle práctico: casi todos los locales tienen la carta solo en chino, y con el traductor con cámara el problema se vuelve un juego.",
    comeArrivare:
      "Vuelo internacional a Pekín Capital (PEK) o al más nuevo Daxing (PKX), que sin embargo está lejísimos del centro: conviene comprobar cuál de los dos antes de reservar el traslado. Ambos están conectados en metro y con trenes exprés.",
    comeSpostarsi:
      "El metro es la mejor forma: capilar, económico, con carteles también en caracteres latinos. Los taxis se cogen solo con la aplicación (DiDi, disponible en inglés y vinculable a una tarjeta extranjera) porque parar uno en la calle sin hablar chino es complicado. Las distancias en el centro engañan: lo que en el mapa parece una manzana suele ser un kilómetro.",
    periodoMigliore:
      "septiembre-octubre es la mejor temporada, con cielos despejados y temperaturas suaves; abril-mayo la segunda opción. El verano es bochornoso y está lleno de turismo interno, el invierno seco y gélido pero con la Muralla nevada y nadie por ahí.",
    costi:
      "Ciudad Prohibida unos 60 yuanes en temporada alta (menos en invierno), Templo del Cielo y Palacio de Verano unos 30-60 yuanes con la entrada combinada, entrada a la Muralla 40-45 yuanes más teleférico donde lo hay. El metro cuesta pocos yuanes por viaje.",
    erroriDaEvitare: [
      'Presentarse en la Ciudad Prohibida sin reserva: la entrada es de aforo limitado, nominal y vinculada al pasaporte, y las entradas se agotan con días de antelación. La taquilla física ya no existe',
      'Elegir Badaling porque es el tramo de Muralla más cercano: es también el más restaurado y el más concurrido del país',
      'Seguir a quien te para por la calle proponiéndote una ceremonia del té o una exposición de arte: es la estafa histórica de Pekín y sigue funcionando',
      'Subestimar las distancias y programar Ciudad Prohibida, Templo del Cielo y Palacio de Verano en el mismo día',
    ],
    confronti: [
      {
        titolo: 'Qué tramo de la Gran Muralla elegir desde Pekín',
        introduzione:
          "De esta elección depende que sea una excursión en cola o el mejor día del viaje. Los tramos alcanzables en el día desde la capital son cuatro y no se parecen: cambian el tiempo de viaje, el esfuerzo y sobre todo cuánta gente hay en el camino de ronda.",
        opzioni: [
          {
            nome: 'Badaling',
            sintesi: 'El tramo más cercano y más famoso, totalmente restaurado, con tren directo desde la estación de Pekín Norte.',
            costo: 'entrada unos 40 yuanes, tren de alta velocidad pocos yuanes',
            durata: 'media jornada',
            pro: ['El más fácil de alcanzar, también por cuenta propia y sin tour', 'Camino de ronda ancho y seguro, apto para cualquiera', 'Teleférico y tobogán para evitar la subida'],
            contro: ['Es el tramo más concurrido de China: en los días festivos se avanza en fila india', 'Restaurado hasta el punto de parecer una reconstrucción moderna', 'Cero sensación de aislamiento'],
            perChi: 'Quien tiene pocas horas, viaja con niños pequeños o con personas con movilidad reducida.',
          },
          {
            nome: 'Mutianyu',
            sintesi: 'El compromiso más equilibrado: restaurado pero inmerso en el verde, con telesilla para subir y tobogán sobre raíles para bajar.',
            costo: 'entrada unos 45 yuanes más 100-140 yuanes por teleférico y tobogán',
            durata: 'jornada entera con el traslado',
            pro: ['Mucho menos concurrido que Badaling', 'Paisaje de bosques que en otoño se vuelve espectacular', 'El descenso en tobogán es una de las cosas más divertidas del viaje'],
            contro: ['Hace falta un coche o un traslado organizado, el transporte público es incómodo', 'Sigue siendo un tramo reconstruido', 'Los costes extra de las subidas duplican el precio de la entrada'],
            perChi: 'Quien quiere la Muralla bonita y cómoda en un solo día, sin tratarla como una excursión exigente.',
          },
          {
            nome: 'Jinshanling',
            sintesi: 'A dos horas y media de Pekín, restaurado solo en parte, con torres medio derruidas, hierba entre las piedras y largos tramos sin nadie a la vista.',
            costo: 'entrada unos 65 yuanes, teleférico aparte',
            durata: 'jornada entera, con 3-4 horas de caminata',
            pro: ['Es la Muralla que uno imagina antes de salir: arruinada, vertical, desierta', 'El tramo fotográficamente más bonito cerca de Pekín', 'Se camina durante horas cruzándose con poquísima gente'],
            contro: ['Traslado largo, que hay que organizar', 'Exigente: subidas y bajadas continuas por escalones de altura irregular, sin sombra', 'Servicios casi inexistentes a lo largo del recorrido'],
            perChi: 'Quien tiene un día entero y piernas entrenadas, y viene a China también por esto.',
          },
          {
            nome: 'Gubei Water Town y Simatai',
            sintesi: 'Un pueblo de agua reconstruido a los pies de la Muralla, con el único tramo visitable de noche, iluminado.',
            costo: 'entrada al pueblo más entrada a la Muralla, indicativamente 150-200 yuanes en total',
            durata: 'una noche en el lugar',
            pro: ['La Muralla iluminada tras el atardecer no se ve en ningún otro sitio', 'Se duerme a los pies del sitio, evitando la carrera del regreso nocturno', 'Bonito también solo como pueblo, con los canales'],
            contro: ['El pueblo es una reconstrucción reciente y se nota: es un producto turístico, no un pueblo histórico', 'El más caro de los cuatro', 'Hay que reservarlo con antelación, entrada nocturna de aforo limitado'],
            perChi: 'Quien tiene una noche que gastar fuera de la ciudad y quiere la Muralla en una versión que ningún otro tour enseña.',
          },
        ],
        raccomandazione:
          'Con un solo día y las piernas en orden, Jinshanling: es lo que se te queda grabado. Con media jornada o compañía mixta, Mutianyu sin dudar. Badaling solo si no hay alternativas, y nunca en un día de fiesta nacional.',
      },
    ],
    miaEsperienza:
      "Pekín es la ciudad que pide más preparación de todo el viaje, y compensa enseguida a quien la ha hecho. La Ciudad Prohibida es más grande que cualquier expectativa, y ese es su mérito y su límite: se atraviesa patio tras patio en una sola dirección, junto a miles de personas, y después de la tercera sala del trono me di cuenta de que miraba sin ver. El truco es salirse de la vía central y meterse en los palacios laterales del este: casi nadie va y las salas son pequeñas, a medida de persona. El Templo del Cielo a primera hora de la mañana, en cambio, nunca decepciona, y no por el templo. En el parque de alrededor cientos de jubilados bailan, cantan en coro, juegan a las cartas y hacen ejercicios con la espada: es la escena más bonita y menos turística de la ciudad. Sobre los hutongs hay que decir la verdad. Los de alrededor de Houhai ya son bares y tiendas; la vida de verdad está en las callejuelas dos manzanas más allá.",
    luoghi: [
      {
        nome: "Ciudad Prohibida",
        testo: "El mayor conjunto de palacios imperiales de madera del mundo, con casi mil edificios, residencia de veinticuatro emperadores Ming y Qing entre 1420 y 1912. Se recorre patio tras patio por el eje central, desde la Puerta del Meridiano hasta la salida norte, frente a la colina de Jingshan.",
        come: "Metro línea 1 hasta Tiananmen East, entrada por la Puerta del Meridiano. Entradas solo online, en la web oficial de reservas, con el número de pasaporte: el mismo día no se venden entradas. Llevar el pasaporte usado para reservar.",
        quando: "Cerrada los lunes, salvo los lunes festivos. De abril a octubre 8:30-17:00, última entrada a las 16:00; de noviembre a marzo 8:30-16:30, última entrada a las 15:30. El aforo diario es limitado: reservar cuanto antes.",
        tempo: "3-4 horas",
        costo: "60 yuanes de abril a octubre, 40 yuanes de noviembre a marzo; Galería del Tesoro y Galería de los Relojes 10 yuanes cada una (2025)",
        url: "https://www.dpm.org.cn/",
        consiglio: "Salir de la vía central y meterse en los palacios laterales del este: casi nadie va y las salas tienen una escala a medida de las personas.",
      },
      {
        nome: "Plaza de Tiananmen y colina de Jingshan",
        testo: "Una plaza enorme, de 765 por 282 metros, cerrada al norte por la Puerta de la Paz Celestial, al oeste por el Gran Palacio del Pueblo y al este por el Museo Nacional; en el centro están el Monumento a los Héroes del Pueblo y el mausoleo de Mao. Desde 2021 hace falta reserva para entrar. Desde la colina de Jingshan, justo al norte de la Ciudad Prohibida, se ve desde arriba el mar de tejados dorados.",
        come: "Metro línea 1 hasta Tiananmen East; Jingshan a pie desde la salida norte de la Ciudad Prohibida. Llevar siempre el pasaporte original; las normas de acceso a la plaza cambian, conviene preguntar en el hotel el día antes.",
        quando: "Por la mañana o al atardecer para Jingshan.",
        tempo: "1 hora en Tiananmen, 1 hora en Jingshan",
        consiglio: "Jingshan al atardecer, por la luz sobre los tejados.",
      },
      {
        nome: "Templo del Cielo",
        testo: "El conjunto donde los emperadores Ming y Qing rezaban por la buena cosecha, construido en 1420 junto con la Ciudad Prohibida y Patrimonio de la UNESCO. La Sala de la Oración es circular, con tres tejados azules, toda de madera; más al sur están el Muro del Eco y el Altar Circular de mármol. El parque que lo rodea es el punto de encuentro matinal de los jubilados del barrio.",
        come: "Metro línea 5 hasta Tiantandongmen.",
        quando: "A primera hora de la mañana: en el parque cientos de jubilados bailan, cantan y juegan a las cartas.",
        tempo: "2-3 horas",
        consiglio: "El parque a primera hora vale tanto como el templo.",
      },
      {
        nome: "Palacio de Verano",
        testo: "El gran jardín imperial de los Qing junto al lago Kunming, destruido en 1860 y reconstruido por la emperatriz Cixi a finales del siglo XIX, Patrimonio de la UNESCO. El Corredor Largo, cubierto y pintado con escenas de mitos, novelas y paisajes, recorre más de 700 metros de orilla; encima está la colina de la Longevidad y sobre el lago el Puente de los 17 arcos.",
        come: "Metro línea 4 hasta Beigongmen.",
        quando: "Mañana de un día laborable.",
        tempo: "3-4 horas",
        consiglio: "Es grande: dedicarle media jornada, entrar por la puerta norte, cruzar la colina de la Longevidad y bajar hacia el lago, quizá atravesándolo en barco.",
      },
      {
        nome: "Gran Muralla en Jinshanling",
        testo: "Tramo de muralla Ming del siglo XVI, en Hebei, restaurado solo en parte: torres medio derruidas, hierba entre las piedras, subidas y bajadas continuas por escalones irregulares. El recorrido clásico va de torre en torre durante unas horas, cruzándose con muy poca gente.",
        come: "Coche con conductor o tour desde Pekín: está a unos 125 kilómetros al noreste de la ciudad. Se sube a pie o en teleférico y luego se camina por el adarve.",
        quando: "A primera hora de la mañana y con buen tiempo.",
        tempo: "4-5 horas",
        costo: "65 yuanes de abril a octubre, 55 yuanes de noviembre a marzo; teleférico 40 yuanes solo ida (2025)",
        consiglio: "Es más bonito y está menos masificado que Badaling: véase la ficha de experiencia.",
      },
      {
        nome: "Hutong y pato laqueado",
        testo: "La red de callejones y casas con patio alrededor de los lagos de Shichahai y la Torre del Tambor, para recorrer en bici o en rickshaw. Las calles junto al lago Houhai ya son bares y tiendas; dos manzanas más allá quedan patios habitados, bicicletas y aseos públicos de barrio. El pato laqueado, para cenar, hay que comerlo en un local que lo prepare de oficio.",
        come: "Metro línea 8 hasta Shichahai.",
        quando: "Por la noche.",
        tempo: "2-3 horas",
        consiglio: "Evitar los locales donde el pato es solo un plato más del menú.",
      },
    ],
    programmi: [
      { titolo: "2 días: Pekín imperial", tappe: ["Día 1: Ciudad Prohibida, Jingshan, hutong y pato","Día 2: Templo del Cielo por la mañana, Palacio de Verano"] },
      { titolo: "3 días: añadir la Gran Muralla", tappe: ["Días 1-2: como arriba","Día 3: Gran Muralla en Jinshanling"] },
    ],
    zone: [
      { nome: "Dongcheng / Wangfujing", perChi: "Quien quiera moverse a pie", testo: "Cómoda por el metro y por los callejones de Houhai." },
      { nome: "Sanlitun", perChi: "Quien quiera la parte moderna", testo: "Restaurantes y vida nocturna." },
    ],
    sapori: [
      { nome: "Pato laqueado", testo: "Se pide entero y se corta en la mesa." },
      { nome: "Jianbing", testo: "Crepe salada del desayuno." },
      { nome: "Jiaozi y baozi", testo: "Empanadillas al vapor." },
      { nome: "Fideos de Shanxi", testo: "Estirados a mano." },
    ],
    attenzioni: [
      "Presentarse en la Ciudad Prohibida sin reserva: el mismo día no se venden entradas y el aforo es limitado.",
      "Ir a la Ciudad Prohibida en lunes: está cerrada, salvo los lunes festivos.",
      "Elegir Badaling: es el tramo de Muralla más restaurado y abarrotado.",
      "Seguir a desconocidos amables que invitan a una cata de té o a un bar: es la estafa clásica de las zonas turísticas y termina con una cuenta altísima.",
      "Subir a taxis sin distintivos o sin taxímetro: usar taxis oficiales o una app como DiDi.",
    ],
    esperienzeSlugs: ['muraglia-jinshanling', 'citta-proibita'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Los tejados circulares azules y dorados de la Sala de Oración por las Buenas Cosechas, en el Templo del Cielo de Pekín',
    immagine: '/images/cina/pechino-tempio-del-cielo-riccardo.jpg',
  },
  {
    slug: 'xian',
    paeseSlug: 'cina',
    ordine: 2,
    nome: "Xi'an",
    tipologia: ['cultura', 'storia', 'città'],
    giorniConsigliati: '2 días completos, llegando la tarde anterior',
    visitataPersonalmente: true,
    introduzione:
      "El final oriental de la Ruta de la Seda y capital de trece dinastías. Hoy es una ciudad de trece millones de habitantes con una muralla Ming totalmente conservada, un barrio musulmán que huele a comino y, a una hora del centro, el ejército de terracota.",
    percheAndarci:
      "Por el Ejército de Terracota, que por sí solo justifica el desvío. Y porque aquí se entiende que China no es solo han: el barrio hui, musulmán desde hace más de mil años, con la mezquita construida como un templo chino, no se ve en ningún otro sitio.",
    cosaVedere: [
      'El Ejército de Terracota, con las tres fosas y el museo de los carros de bronce',
      'Las murallas Ming, catorce kilómetros de muralla que se pueden recorrer en bicicleta por encima del camino de ronda',
      'El Barrio Musulmán y la Gran Mezquita, escondida al fondo de un callejón de puestos',
      'La Gran Pagoda de la Oca Salvaje, con la plaza de las fuentes musicales',
      'La Torre de la Campana y la Torre del Tambor, en el punto exacto donde se cruzan los ejes de la ciudad',
      'El Museo de Historia de Shaanxi, uno de los más importantes del país',
    ],
    cosaFare: [
      'Visita al Ejército de Terracota con entrada reservada (hay una ficha de experiencia dedicada)',
      'Vuelta completa a las murallas en bicicleta, alrededor de una hora y media de pedaleo',
      'Cena por etapas entre los puestos del Barrio Musulmán',
      'Probar el roujiamo, el bocadillo de cerdo estofado que aquí reivindican como la primera hamburguesa de la historia',
    ],
    doveDormire:
      "Dentro de las murallas, en el cuadrante alrededor de la Torre de la Campana: todo se recorre a pie, el Barrio Musulmán está a diez minutos y los autobuses al Ejército de Terracota salen de la estación de tren, a la que se llega en metro.",
    doveMangiare:
      "Xi'an es una de las ciudades donde mejor se come en China y el mérito es casi todo de la cocina hui. En el Barrio Musulmán se cena caminando: pinchos de cordero al comino hechos a la brasa, el roujiamo, los fideos biang biang (una sola tira ancha como un cinturón), el liangpi frío y picante, y el yangrou paomo, la sopa de cordero en la que se desmenuza el pan con las manos antes de entregarlo en la cocina. El consejo es comer poco en cada puesto y seguir adelante en lugar de sentarse en un restaurante.",
    comeArrivare:
      "Tren de alta velocidad desde Pekín en unas 4h30 y desde Shanghái en 6 horas, y es la forma adecuada de llegar. Como alternativa, vuelo a Xi'an Xianyang (XIY). La estación de Xi'an Norte está fuera de la ciudad pero conectada en metro.",
    comeSpostarsi:
      "Metro para los desplazamientos largos y casco histórico a pie. Para el Ejército de Terracota, el autobús público 5 (306) desde la estación de tren es económico y directo; los «autobuses turísticos» que interceptan a los pasajeros en la explanada de la estación llevan, en cambio, a sitios menores que hacen pasar por el museo, y es una estafa común.",
    periodoMigliore: 'abril-mayo y septiembre-octubre; el verano en Xi\'an es tórrido y las fosas no tienen aire acondicionado',
    costi:
      "Ejército de Terracota unos 120 yuanes en temporada alta, con reserva obligatoria en línea; murallas de la ciudad 54 yuanes más el alquiler de la bicicleta; Museo de Historia de Shaanxi gratuito pero con reserva de aforo limitado, que se agota en pocos minutos.",
    erroriDaEvitare: [
      'Llegar al museo del Ejército de Terracota sin reserva: las taquillas físicas se han cerrado, solo se entra con reserva nominal vinculada al pasaporte y la ventana de venta abre apenas 7 días antes',
      'Subir a los autobuses no oficiales delante de la estación: llevan a mausoleos menores haciéndolos pasar por el sitio principal',
      'Visitar las fosas empezando por la número uno: es la más espectacular y después de ella las otras dos parecen poca cosa; muchas guías aconsejan el orden inverso',
      'Dar por descontado el Museo de Historia de Shaanxi: es gratuito pero las plazas diarias se agotan en cuestión de minutos desde que se abren las reservas',
    ],
    confronti: [
      {
        titolo: '¿Tren de alta velocidad o vuelo interior?',
        introduzione:
          "En el eje clásico Pekín-Xi'an-Shanghái la pregunta se repite en cada trayecto, y la respuesta no es siempre la misma. Cuenta la duración de puerta a puerta, no la del medio de transporte: las estaciones de alta velocidad están en la ciudad o casi, los aeropuertos no.",
        opzioni: [
          {
            nome: 'Tren de alta velocidad (hasta 5-6 horas)',
            sintesi: "El medio adecuado para Pekín-Xi'an, Xi'an-Shanghái, Shanghái-Suzhou y en general para todo el este del país.",
            costo: 'indicativamente 40-90 € en segunda clase según la distancia',
            durata: "Pekín-Xi'an 4h30, Pekín-Shanghái 4h30, Shanghái-Suzhou 25 minutos",
            pro: ['Estaciones en la ciudad: se ahorra más tiempo del que parece', 'Trenes puntuales y salidas cada media hora en los trayectos más demandados', 'El equipaje va contigo, sin bodega ni límites de peso', 'Desde la ventanilla se ve pasar el país'],
            contro: ['Billetes a la venta solo 15 días antes, a una hora que varía de una estación a otra, y en los trayectos fuertes se agotan en pocas horas', 'Hace falta una cuenta 12306 verificada con el pasaporte, que hay que preparar antes de salir', 'En la estación hacen falta 30-40 minutos de margen para los controles, y las puertas cierran antes de la salida'],
            perChi: 'Cualquiera que se mueva por el este y el centro del país: en estas distancias el tren gana casi siempre.',
          },
          {
            nome: 'Vuelo interior',
            sintesi: 'La opción sensata en los trayectos que en tren superan las ocho horas: Shanghái-Lijiang, Pekín-Chengdu, Guilin-Zhangjiajie.',
            costo: 'a menudo 60-120 € reservando con algunas semanas de antelación',
            durata: '2-3 horas de vuelo, más los traslados desde y hacia los aeropuertos',
            pro: ['En distancias enormes ahorra una jornada entera de viaje', 'Red interior capilar, también hacia ciudades medianas', 'Precios bajos respecto a los estándares europeos'],
            contro: ['Los retrasos en los vuelos interiores chinos son frecuentes y a veces larguísimos', 'Aeropuertos lejos del centro en ambos lados', 'Controles de seguridad más lentos que en Europa'],
            perChi: 'Quien cruza el país de este a oeste, o tiene que llegar a Yunnan, Sichuan y Hunan desde lejos.',
          },
        ],
        raccomandazione:
          'La regla práctica: por debajo de las seis horas el tren gana al avión de puerta a puerta, por encima de las ocho gana el vuelo. Y sea cual sea la elección, la reserva se hace antes de salir de Italia, no en el lugar.',
      },
    ],
    miaEsperienza:
      "Del Ejército de Terracota las fotografías ya lo han enseñado todo, y verlo en directo añade una sola cosa, pero decisiva: la escala. Desde el parapeto de la fosa número uno miré una nave de doscientos metros llena de filas de soldados, y solo allí entendí que estaban hechos para ser enterrados, no para ser mirados. La verdadera sorpresa es otra: ninguna estatua tiene la misma cara, y al acercarse a las primeras filas se ven rostros, peinados y bigotes todos distintos. La experiencia, sin embargo, está muy controlada: pasarelas obligatorias, multitud continua, y después de la primera las fosas dos y tres parecen obras. El resto de Xi'an compensa. Pedalear por las murallas al atardecer, con la ciudad moderna a un lado y los tejados viejos al otro, es lo que más se me ha quedado grabado, y por la noche el Barrio Musulmán es el sitio donde mejor se come de toda la China clásica.",
    luoghi: [
      {
        nome: "Ejército de Terracota",
        testo: "Miles de guerreros de terracota a tamaño natural, cada uno con un rostro distinto, enterrados para custodiar la tumba de Qin Shi Huang, el primer emperador, muerto en el 210 a. C. Los descubrieron en 1974 unos campesinos que cavaban un pozo. Se visitan tres fosas; la fosa 1, la más grande, es la de las filas de soldados. La misma entrada vale para el mausoleo de Qin Shi Huang, donde está el museo de los carros de bronce.",
        come: "Una hora en el autobús turístico oficial, que sale de varias paradas del centro, o unos 40 minutos en taxi o DiDi. La entrada se reserva online con antelación, en la web o la cuenta oficial de WeChat; el pasaporte hace falta en los controles de seguridad.",
        quando: "Del 16 de marzo al 15 de noviembre 8:30-18:30, última entrada a las 17:00; el resto del año 8:30-18:00, última entrada a las 16:30. Evitar las fiestas nacionales y el Año Nuevo chino.",
        tempo: "3-4 horas",
        costo: "120 yuanes, mausoleo incluido (2025)",
        consiglio: "Empezar por la fosa 1. Para el autobús turístico, buscar al personal oficial con chaleco rojo y desconfiar de quien ofrece lanzaderas a otro 'museo'.",
      },
      {
        nome: "Murallas Ming",
        testo: "Una de las murallas antiguas mejor conservadas de China: casi 14 kilómetros de murallas iniciadas en 1370, tan anchas que se puede pedalear encima. La vuelta completa en bici lleva unas dos horas, entre torres de esquina, puertas monumentales y vistas sobre los tejados de la ciudad vieja.",
        come: "Se sube por una de las puertas principales, por ejemplo la Puerta Sur, con entrada en el acceso; las bicicletas se alquilan sobre la muralla, con fianza.",
        quando: "A última hora de la tarde, para terminar la vuelta al atardecer. El alquiler de bicis cierra antes que la muralla.",
        tempo: "2-3 horas en bici",
        consiglio: "Llevar agua: sobre la muralla hay poca sombra y los puntos de avituallamiento son pocos y lejanos.",
      },
      {
        nome: "Barrio Musulmán y Gran Mezquita",
        testo: "El barrio de los hui, musulmanes chinos presentes en Xi'an desde hace siglos, en el extremo oriental de la Ruta de la Seda. La calle Beiyuanmen y travesías como Xiyangshi son un único mercado de brochetas de cordero, pan, dulces de arroz y fideos. Al fondo de un callejón lateral está la Gran Mezquita, construida como un templo chino, con pabellones y patios en lugar de cúpulas.",
        come: "A pie desde la Torre del Tambor, en pleno centro.",
        quando: "Por la noche, cuando todos los puestos están abiertos; la mezquita de día, fuera de las horas de oración.",
        tempo: "2-3 horas",
        consiglio: "Cenar por etapas, un plato en cada puesto. La calle principal es la más cara: los mejores sitios están en los callejones laterales.",
      },
      {
        nome: "Gran Pagoda de la Oca Salvaje",
        testo: "Pagoda budista construida en el 652 para guardar los textos que el monje Xuanzang había traído de la India. Está en el templo Da Ci'en; al norte hay una gran plaza con fuentes musicales y al sur la larga avenida de Datang Everbright City, que por la noche se llena de luces y espectáculos de época.",
        come: "Metro líneas 3 o 4 hasta Dayanta.",
        quando: "La pagoda de día; fuentes y avenida iluminada después del atardecer.",
        tempo: "1,5-2 horas",
        consiglio: "Quedarse hasta la noche y pasear por Datang Everbright City: es la avenida más escenográfica de la ciudad.",
      },
      {
        nome: "Museo de Historia de Shaanxi",
        testo: "Uno de los museos más importantes de China, con oro, bronces, cerámicas y frescos desde los Zhou hasta los Tang. Las salas de los Tang cuentan Xi'an como capital del imperio y punto de partida de la Ruta de la Seda. Hay también una sede separada, el Pabellón Qin-Han, a unos 40 kilómetros, en la nueva área de Xixian: comprobar cuál se está reservando.",
        come: "Metro líneas 2 o 3 hasta Xiaozhai, luego 10 minutos a pie. Entrada gratuita pero con billete nominativo que se reserva en el miniprograma oficial de WeChat; llevar el pasaporte usado para reservar.",
        quando: "Sede principal 8:30-19:00 (2026). Última entrada a las 18:00. Las reservas abren 5 días antes, a las 17:00 hora china (2026).",
        tempo: "2-3 horas",
        costo: "Entrada gratuita con reserva; la sala de los frescos de las tumbas Tang tiene entrada aparte",
        url: "https://en.sxhm.com/",
        consiglio: "Reservar en cuanto se abre la ventana: las entradas gratuitas se acaban en minutos.",
      },
    ],
    programmi: [
      { titolo: "2 días: Xi'an", tappe: ["Día 1: Ejército de Terracota","Noche: Barrio Musulmán","Día 2: murallas en bici, Pagoda, museo"] },
    ],
    zone: [
      { nome: "Dentro de las murallas", perChi: "Quien quiera estar cerca de todo", testo: "Cómoda para el Barrio Musulmán." },
    ],
    sapori: [
      { nome: "Roujiamo", testo: "Bocadillo de cerdo estofado." },
      { nome: "Fideos biang biang", testo: "Tallarín ancho como un cinturón." },
      { nome: "Yangrou paomo", testo: "Sopa de cordero con pan." },
      { nome: "Liangpi", testo: "Frío y picante." },
    ],
    attenzioni: [
      "Presentarse en el Ejército de Terracota sin entrada nominativa: se reserva online con antelación y en festivos se agota.",
      "Subir a microbuses no oficiales 'para los Guerreros': usar el autobús turístico con el personal de chaleco rojo, el metro o un taxi.",
      "Pedir en el Barrio Musulmán en puestos sin precios a la vista: preguntar antes, sobre todo por las brochetas y la carne vendida al peso.",
      "Confundir la sede principal del Museo de Historia de Shaanxi con el Pabellón Qin-Han, que está fuera de la ciudad.",
    ],
    esperienzeSlugs: ['esercito-terracotta', 'mura-xian-bicicletta'],
    tripSlugs: ['cina-classica'],
    imageAlt: "Las murallas Ming de Xi'an con las torres de vigilancia y el parque arbolado a los pies de la muralla",
    immagine: '/images/cina/xian.jpg',
  },
  {
    slug: 'shanghai',
    paeseSlug: 'cina',
    ordine: 3,
    nome: 'Shanghái, Suzhou y los pueblos de agua',
    tipologia: ['città', 'cultura', 'architettura'],
    giorniConsigliati: '4-5 días, uno de ellos en Suzhou y media jornada en un pueblo de agua',
    visitataPersonalmente: true,
    introduzione:
      "La ciudad más occidental de China, y la más espectacular: de un lado el Bund, el paseo fluvial de los bancos coloniales de los años veinte, del otro los rascacielos de Pudong, crecidos sobre lo que hace treinta años era campo. Alrededor, a media hora de tren, los jardines clásicos de Suzhou y los pueblos construidos sobre canales.",
    percheAndarci:
      "Aquí China se muestra como quiere ser vista, y en el radio de una hora de tren está lo contrario: Suzhou y los pueblos de agua son la China de los letrados, de los jardines y de los puentes de lomo de asno.",
    cosaVedere: [
      'El Bund al atardecer y luego otra vez de noche, cuando Pudong se enciende al otro lado del río',
      'El barrio de las antiguas Concesiones Francesas, con los plátanos y las casas de ladrillo',
      'El Jardín Yuyuan y el bazar de alrededor, en la ciudad vieja',
      'La Shanghai Tower, tercer rascacielos más alto del mundo, con ascensores entre los más rápidos del planeta',
      'Los jardines clásicos de Suzhou: el Jardín del Administrador Humilde, el Jardín del Maestro de las Redes, el Pabellón de las Olas Azules',
      'Un pueblo de agua: Zhujiajiao, Wuzhen, Tongli o Nanxun, todos accesibles en el día',
    ],
    cosaFare: [
      'Paseo por el Bund a la hora azul, cuando se encienden los letreros de neón de Pudong',
      'Jornada en Suzhou en tren de alta velocidad, 25 minutos de viaje (hay una ficha de experiencia dedicada)',
      'Paseo en barca de remos por los canales de un pueblo de agua',
      'Velada en los locales de la antigua Concesión Francesa, el barrio más agradable de la ciudad',
      'Subida a un rooftop de Pudong al atardecer, la única forma de entender las dimensiones de la ciudad',
    ],
    doveDormire:
      "La antigua Concesión Francesa es la zona más agradable para dormir, verde y pensada para pasear; el Bund y Nanjing Road son más céntricos pero caóticos; Pudong solo conviene por comodidad de traslado. Shanghái es cara en comparación con el resto del país, pero el metro permite dormir lejos del centro sin penalizarse.",
    doveMangiare:
      "El plato emblemático son los xiaolongbao, las empanadillas al vapor rellenas de caldo, que se comen con una técnica precisa: se muerde una esquina, se bebe el caldo, luego se come el resto. Quien lo muerde entero se quema. Para probar también los shengjianbao, la versión dorada en la plancha, y los fideos en caldo de la mañana. Shanghái tiene también la escena internacional más desarrollada de China: es el sitio adecuado para una pausa de la cocina china, si después de dos semanas hace falta. En los pueblos de agua se come pescado de río y cerdo braseado, que en Wuzhen y Tongli es la especialidad.",
    comeArrivare:
      "Vuelo internacional a Pudong (PVG), conectado con el centro por el Maglev, el tren de levitación magnética que alcanza los 300 km/h en ocho minutos. Desde Pekín y Xi'an, tren de alta velocidad.",
    comeSpostarsi:
      "El metro de Shanghái es uno de los más extensos del mundo y cubre todo, incluidos los aeropuertos y la salida a Zhujiajiao. Para Suzhou y los pueblos de agua más lejanos, alta velocidad o autobús desde las estaciones de autobuses. DiDi para los taxis.",
    periodoMigliore:
      "octubre-noviembre es el mejor periodo, con marzo-abril justo detrás. El verano es húmedo y agobiante, con tifones entre julio y septiembre; el invierno es frío y húmedo, sin calefacción adecuada en muchos edificios.",
    costi:
      "Jardines de Suzhou 30-80 yuanes cada uno según la temporada; pueblos de agua 50-120 yuanes de entrada al pueblo, a menudo con entrada combinada para las casas-museo; Shanghai Tower unos 180 yuanes. La ciudad en sí es la más cara de la China continental.",
    erroriDaEvitare: [
      'Quedarse en Shanghái sin salir de la ciudad: Suzhou está a 25 minutos de tren y es otra época',
      'Visitar los jardines de Suzhou en fin de semana o en un día festivo: son pequeños y la multitud les quita el sentido',
      'Elegir el pueblo de agua más cómodo sin saber que son muy distintos entre sí (véase la comparación de abajo)',
      'Caer en la estafa del té en Nanjing Road: aquí está aún más extendida que en Pekín',
    ],
    confronti: [
      {
        titolo: 'Qué pueblo de agua elegir',
        introduzione:
          "Alrededor de Shanghái y Suzhou hay al menos seis, todos vendidos como «la Venecia de Oriente» y todos distintos en distancia, precio y nivel de reconstrucción. La diferencia que cuenta es cuánto se está dispuesto a viajar para encontrar uno todavía habitado.",
        opzioni: [
          {
            nome: 'Zhujiajiao',
            sintesi: 'El más cercano: se llega en metro desde Shanghái en aproximadamente una hora.',
            costo: 'entrada libre al pueblo, entradas combinadas para las casas-museo de alrededor de 60-80 yuanes',
            durata: 'media jornada',
            pro: ['Comodísimo, sin necesidad de organizar nada', 'Se puede hacer en una tarde sin perder una jornada', 'El puente Fangsheng y los canales principales son bonitos'],
            contro: ['Muy turístico y muy concurrido, sobre todo en fin de semana', 'Calle principal ya toda de tiendas de souvenirs', 'Queda poca vida local'],
            perChi: 'Quien tiene poco tiempo y quiere ver de todos modos un pueblo sobre el agua.',
          },
          {
            nome: 'Tongli',
            sintesi: 'A pocos kilómetros de Suzhou, con canales, puentes y el Jardín del Retiro y la Reflexión, patrimonio de la UNESCO.',
            costo: 'entrada al pueblo de unos 100 yuanes, jardín incluido',
            durata: 'media jornada o una jornada combinada con Suzhou',
            pro: ['Menos turístico que Zhujiajiao y más grande', 'El jardín UNESCO es de un nivel igual al de los de Suzhou', 'Se combina bien con una jornada en Suzhou'],
            contro: ['Hace falta un traslado en autobús o taxi desde Suzhou', 'El centro sigue siendo muy comercial', 'Entrada obligatoria'],
            perChi: 'Quien ya está en Suzhou y quiere añadir el pueblo sin volver a Shanghái.',
          },
          {
            nome: 'Wuzhen',
            sintesi: 'El más cuidado y el más reconstruido: dos sectores separados, de los cuales el oriental se visita en el día y el occidental está pensado para la noche, con una iluminación espectacular.',
            costo: 'entrada 110-150 yuanes por sector, combinada más cara',
            durata: 'una noche en el lugar para ver el sector oeste iluminado',
            pro: ['La sección oeste de noche, con los reflejos en los canales, es la más fotogénica de todas', 'Muy bien gestionado, con servicios ordenados', 'Se duerme dentro del pueblo'],
            contro: ['Es un pueblo-museo: los residentes han sido trasladados, lo que se ve es un decorado muy cuidado', 'El más caro del grupo', 'A dos horas de Shanghái'],
            perChi: 'Quien pone la estética por delante de la autenticidad y tiene una noche que dedicarle.',
          },
          {
            nome: 'Nanxun',
            sintesi: 'El menos transitado de los cuatro, con las villas de los mercaderes de la seda y un tejido todavía en parte habitado.',
            costo: 'entrada de unos 100 yuanes',
            durata: 'una jornada, con traslado más largo',
            pro: ['Todavía habitado: se ve ropa tendida, bicis, gente cocinando en la puerta', 'Las residencias de los mercaderes de la seda, con muebles y decoraciones originales, no tienen igual en los otros pueblos', 'Mucho menos concurrido'],
            contro: ['El más incómodo de alcanzar', 'Servicios turísticos mínimos', 'Menos «de postal» que los demás'],
            perChi: 'Quien ya ha visto un pueblo de agua y quiere el de verdad.',
          },
        ],
        raccomandazione:
          'Con media jornada, Zhujiajiao y sin arrepentimientos. Con una noche libre, Wuzhen oeste tras el atardecer es lo más bonito. Quien busque un lugar todavía vivo que coja Nanxun y acepte el viaje más largo.',
      },
    ],
    miaEsperienza:
      "Shanghái funciona mejor de como la cuentan, y el motivo es que se camina. En la antigua Concesión Francesa, entre los plátanos y las casas bajas de ladrillo, me olvidé de estar en la ciudad más poblada del país: esa es la Shanghái que vale. El Bund de noche hay que verlo, sabiendo que lo piensa todo el mundo: por la noche en el paseo se está hombro con hombro. El salto de verdad es Suzhou. Veinticinco minutos de tren y se pasa de una ciudad vertical a jardines construidos en el siglo XVI con una regla precisa: ninguna ventana debe enmarcar lo mismo dos veces. Parece un detalle de guía, pero caminando por dentro se entiende enseguida. El consejo más importante es ir un día laborable: esos jardines son pequeños, y con la multitud pierden aquello para lo que existen.",
    luoghi: [
      {
        nome: "El Bund",
        testo: "Unos 1,6 kilómetros de paseo fluvial con los edificios de bancos, aduanas y hoteles construidos entre finales del siglo XIX y los años treinta, cuando Shanghái era la ciudad del comercio extranjero. Al otro lado del Huangpu está el skyline de Pudong. El paseo es libre.",
        come: "Metro líneas 2 o 10 hasta East Nanjing Road, luego 10 minutos a pie.",
        quando: "Al atardecer y por la noche, cuando se encienden las luces en las dos orillas; temprano por la mañana hay gente haciendo taichí.",
        tempo: "1-2 horas",
        costo: "Acceso libre",
        consiglio: "En festivos por la noche está vallado y lleno. Para verlo con calma se coge el ferry público a Pudong, que cuesta pocos yuanes y cruza el río en pocos minutos.",
      },
      {
        nome: "Antigua Concesión Francesa",
        testo: "El barrio de plátanos, villas y casas adosadas de ladrillo (shikumen) construido cuando esta zona era la concesión francesa. Wukang Road y Anfu Road son las calles más bonitas, con cafés, librerías y tiendas pequeñas. Es la parte de Shanghái donde mejor se camina.",
        come: "Metro línea 10 hasta Shanghai Library o líneas 1, 10 y 12 hasta South Shaanxi Road, luego a pie.",
        quando: "Mañana o última hora de la tarde, a la sombra de los plátanos.",
        tempo: "Media jornada",
        consiglio: "Moverse sin rumbo entre Wukang Road, Anfu Road y Fuxing Road: lo mejor del barrio está en las calles transversales.",
      },
      {
        nome: "Jardín Yuyuan",
        testo: "Jardín privado de época Ming, comenzado en 1559, con rocas talladas por el agua, pabellones, estanques de carpas y un muro rematado en lomo de dragón. Alrededor está el bazar de Yuyuan, con la casa de té sobre el puente en zigzag.",
        come: "Metro líneas 10 o 14 hasta Yuyuan Garden.",
        quando: "A la apertura, antes de los grupos; el bazar es más bonito de noche, iluminado.",
        tempo: "2 horas",
        consiglio: "El jardín vale más que el bazar, que es muy turístico. Para los xiaolongbao, las colas más largas no son necesariamente las mejores.",
      },
      {
        nome: "Shanghai Tower",
        testo: "Con 632 metros es el rascacielos más alto de China. El mirador principal está en la planta 118, a 546 metros, y se llega con ascensores de los más rápidos del mundo. Al lado están el Shanghai World Financial Center y la Jin Mao Tower, los tres gigantes de Lujiazui.",
        come: "Metro línea 2 hasta Lujiazui, luego 10 minutos a pie.",
        quando: "Con el cielo despejado, a menudo después de un día de viento o lluvia. Con contaminación o nubes bajas se ve poco.",
        tempo: "1-1,5 horas",
        costo: "180 yuanes adultos (2025)",
        url: "https://www.shanghaitower.com/",
        consiglio: "Subir una hora antes del atardecer y quedarse hasta que oscurezca: se ve la ciudad de día y con las luces.",
      },
      {
        nome: "Suzhou",
        testo: "Ciudad de canales y jardines clásicos, Patrimonio de la UNESCO: el Jardín del Administrador Humilde es el más grande y el del Maestro de las Redes el más refinado. A pocos minutos está Pingjiang Road, una calle junto al canal con casas blancas, puentes de piedra y casas de té.",
        come: "Tren de alta velocidad desde Shanghai Hongqiao o la estación de Shanghái: unos 30 minutos.",
        quando: "Un día laborable, a la apertura de los jardines; los fines de semana y festivos están llenos.",
        tempo: "Jornada completa",
        consiglio: "Elegir dos jardines, no cuatro: después del segundo se confunden. Reservar online las entradas de los más famosos, que en temporada alta se agotan.",
      },
      {
        nome: "Pueblos de agua",
        testo: "Pueblos de canales, puentes de piedra y casas blancas alrededor de Shanghái. Zhujiajiao es el más cercano y se llega en metro; Zhouzhuang y Tongli están cerca de Suzhou; Wuzhen, más lejos, es el más cuidado. Se recorren a pie o en barca de remos.",
        come: "Zhujiajiao con la línea 17 del metro; los demás en autobús o con un tour desde Shanghái o Suzhou.",
        quando: "A primera hora, o durmiendo allí: a partir de media mañana llegan los grupos.",
        tempo: "Media jornada",
        consiglio: "Son muy distintos: Zhujiajiao sigue habitado, Wuzhen es casi un museo al aire libre. Quien pueda, que duerma en Wuzhen: por la noche, cuando se van los visitantes de un día, es otro lugar.",
      },
    ],
    programmi: [
      { titolo: "1 día: Shanghái", tappe: ["Antigua Concesión Francesa","Yuyuan","Bund al atardecer"] },
      { titolo: "2 días: añadir Suzhou", tappe: ["Día 1: como arriba","Día 2: Suzhou"] },
    ],
    zone: [
      { nome: "Antigua Concesión Francesa", perChi: "Quien busque ambiente", testo: "Agradable para pasear." },
      { nome: "Zona del Bund", perChi: "Quien quiera vistas", testo: "Más cara." },
    ],
    sapori: [
      { nome: "Xiaolongbao", testo: "Empanadillas con caldo." },
      { nome: "Shengjianbao", testo: "Dorados en la plancha." },
    ],
    attenzioni: [
      "Aceptar la invitación de desconocidos amables a un té o a un bar: es la estafa clásica de las zonas turísticas y termina con una cuenta altísima.",
      "Visitar los jardines de Suzhou en fin de semana: colas desde la entrada.",
      "Subir a la Shanghai Tower con contaminación o nubes bajas: mirar el cielo antes de comprar la entrada.",
      "Coger taxis sin distintivos o sin taxímetro fuera de las estaciones: usar DiDi o el metro.",
    ],
    esperienzeSlugs: ['giardini-suzhou', 'bund-pudong'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Una barca en el canal principal de Zhujiajiao, pueblo de agua en el distrito de Qingpu, Shanghái',
    immagine: '/images/cina/shanghai.jpg',
  },
  {
    slug: 'zhangjiajie',
    paeseSlug: 'cina',
    ordine: 4,
    nome: 'Zhangjiajie',
    tipologia: ['natura', 'trekking', 'panorami'],
    giorniConsigliati: '3-4 días: dos en el parque nacional, uno en Tianmen Shan',
    visitataPersonalmente: true,
    introduzione:
      "Las montañas de Hunan: tres mil pilares de cuarcita de hasta trescientos metros de altura que sobresalen de un mar de niebla, y que inspiraron las montañas flotantes de Avatar. El parque nacional es enorme y hay que afrontarlo con un plan, porque sin él se acaban haciendo cuatro horas de cola en los teleféricos.",
    percheAndarci:
      "Un paisaje parecido no existe en ningún otro sitio. Y aquí se ve que la China más bonita está también en los parques que casi ningún viajero extranjero incluye en su itinerario, además de en los monumentos imperiales.",
    cosaVedere: [
      'Yuanjiajie, con el Pilar de la Aleluya (la columna que inspiró Avatar) y el Primer Puente bajo el Cielo',
      'El ascensor de Bailong, 326 metros de recorrido vertical pegados a la pared de roca, el ascensor panorámico exterior más alto del mundo',
      'Tianzi Shan, el mirador más amplio sobre todo el macizo',
      'El sendero a lo largo del arroyo del Látigo de Oro (Jinbian Xi), la única forma de ver los pilares desde abajo en lugar de desde arriba',
      'Tianmen Shan, la montaña de la «puerta del cielo», con la escalinata de 999 escalones y uno de los teleféricos más largos del mundo',
      'El sendero con el suelo de cristal suspendido sobre la pared de Tianmen',
    ],
    cosaFare: [
      'Subir a Yuanjiajie con el ascensor de Bailong y bajar a pie (hay una ficha de experiencia dedicada)',
      'Jornada completa en Tianmen Shan, con teleférico, carretera de las 99 curvas y escalinata final',
      'Caminar el sendero del Látigo de Oro (Jinbian Xi) en el fondo del valle, adonde no llegan los autocares',
      'Gran Cañón de Zhangjiajie con el puente de cristal, que cuando abrió en 2016 era el más largo y alto del mundo de su categoría',
    ],
    doveDormire:
      "Dos opciones con lógicas opuestas. El pueblo de Wulingyuan, justo fuera de la entrada principal del parque, es la base adecuada para dos días dentro del parque: se entra a la apertura evitando las peores colas. La ciudad de Zhangjiajie sirve, en cambio, para Tianmen Shan, cuyo teleférico sale del centro de la ciudad. Con una sola base se pierden horas en traslados.",
    doveMangiare:
      "La cocina de Hunan es de las más picantes de China, más que la de Sichuan aunque de otra manera: no adormece la boca, quema y punto. Los platos para probar son el cerdo salteado con guindilla, los pescados de río estofados con pimientos fermentados y el tofu apestoso frito, una especialidad local a pesar del nombre. Dentro del parque se come mal y caro, así que conviene hacer acopio de agua y algo de comer antes de entrar.",
    comeArrivare:
      "Vuelo a Zhangjiajie Hehua (DYG), o tren de alta velocidad por la línea Chongqing-Changsha hasta Zhangjiajie Oeste. Desde la estación o el aeropuerto, autobús o taxi hasta Wulingyuan en unos 40 minutos.",
    comeSpostarsi:
      "Dentro del parque solo se circula con los autobuses ecológicos, incluidos en la entrada, que conectan las entradas con los puntos de salida de teleféricos y senderos. El sistema es eficiente pero las distancias internas son enormes: el mapa hay que estudiarlo antes, no en la entrada.",
    periodoMigliore:
      "abril-mayo y septiembre-octubre. Sobre la niebla conviene darle la vuelta al razonamiento: es lo que hace que los pilares parezcan suspendidos en el vacío, así que un día de bruma no está perdido. Perdido está el de lluvia torrencial, cuando cierran los teleféricos.",
    costi:
      "Entrada al parque nacional de unos 236 yuanes, válida cuatro días e incluyendo los autobuses internos; el ascensor de Bailong y los teleféricos se pagan aparte, indicativamente 65-100 yuanes por trayecto; Tianmen Shan es una entrada aparte, de unos 250-280 yuanes con teleférico incluido. El total sube rápido por encima de los 60-70 € por persona.",
    erroriDaEvitare: [
      'Programar un solo día: el parque es enorme y las colas en teleféricos y ascensor pueden superar la hora por trayecto',
      'Ir durante las semanas de fiesta nacional (1-7 de octubre, principios de mayo): los tiempos de espera pasan a ser de tres o cuatro horas',
      'Dormir en la ciudad pensando en hacer el parque en el día: se pierden dos horas de traslado al día',
      'No comprar con antelación la entrada del teleférico de Tianmen, con franja horaria: se corre el riesgo de quedarse fuera en los días llenos',
    ],
    confronti: [
      {
        titolo: 'Parque nacional o Tianmen Shan: cuál elegir si solo se tiene un día',
        introduzione:
          "Zhangjiajie es en realidad dos destinos distintos a una hora de distancia, con entradas separadas y paisajes que no se parecen. Quien tiene poco tiempo debe elegir, y conviene hacerlo sabiendo qué se deja.",
        opzioni: [
          {
            nome: 'Zhangjiajie National Forest Park (Wulingyuan)',
            sintesi: 'Los pilares de cuarcita, Yuanjiajie, el ascensor de Bailong: las montañas de Avatar.',
            costo: 'unos 236 yuanes por cuatro días, más teleféricos y ascensor',
            durata: 'mínimo dos días para hacerlo bien',
            pro: ['Es el paisaje por el que se viene hasta aquí, y no tiene igual', 'La entrada vale cuatro días: se entra y se sale sin volver a comprar', 'Muchos senderos, también en el fondo del valle, donde la multitud se aclara'],
            contro: ['Enorme: sin un plan se pasan horas en autobús y en cola', 'Colas larguísimas en ascensor y teleféricos en los periodos punta', 'Hay que combinarlo con un alojamiento en Wulingyuan, no en la ciudad'],
            perChi: 'Cualquiera que venga a Zhangjiajie por primera vez: si se elige solo uno, es este.',
          },
          {
            nome: 'Tianmen Shan',
            sintesi: 'La montaña sobre la ciudad, con la cueva natural en la cima, los 999 escalones, la carretera de las 99 curvas y los senderos con suelo de cristal.',
            costo: 'unos 250-280 yuanes, teleférico incluido',
            durata: 'una jornada',
            pro: ['El teleférico sale del centro de la ciudad: cero traslados', 'La combinación cueva, escalinata y pasarelas de cristal es única', 'Se hace cómodamente en un día'],
            contro: ['Paisaje menos extraordinario que el del parque nacional', 'Franjas horarias de aforo limitado que hay que reservar con antelación', 'Las pasarelas de cristal son un problema serio para quien sufre de vértigo'],
            perChi: 'Quien tiene un solo día y parte desde la ciudad, o quien ya ha hecho el parque y quiere algo distinto.',
          },
        ],
        raccomandazione:
          'Con tres días se hacen los dos: dos dentro del parque durmiendo en Wulingyuan, uno en Tianmen Shan saliendo de la ciudad, quizá el día de la llegada o de la salida. Con un solo día, el parque nacional sin discusión.',
      },
    ],
    miaEsperienza:
      "Zhangjiajie es el sitio de China que más que ningún otro hay que organizar, y el motivo es banal: es enorme y va todo el mundo. Las colas en el ascensor de Bailong en plena jornada son lo peor del viaje. Para evitarlas hay que estar en la entrada a la apertura y subir enseguida, dejando los miradores famosos para el final de la tarde, cuando los grupos se han ido. El paisaje aguanta cualquier expectativa. Impresiona el número: miles de pilares, uno detrás de otro hasta el horizonte, que entran y salen de la niebla mientras los miras. Esperar un día despejado es un error: con el cielo limpio parecen montañas normales, con la bruma parecen suspendidas. El consejo menos obvio es bajar al fondo del valle al menos media jornada, a lo largo del arroyo del Látigo de Oro (Jinbian Xi). Mirar esos pilares desde abajo, con el cuello hacia arriba, impresiona más que verlos desde arriba.",
    luoghi: [
      {
        nome: "Yuanjiajie y Montaña Aleluya",
        testo: "La zona más famosa del parque de Wulingyuan, Patrimonio de la UNESCO: torres de arenisca de cientos de metros que surgen del bosque, a menudo entre nubes. La Montaña Aleluya, antes llamada Columna del Cielo del Sur, es la que inspiró las montañas flotantes de Avatar. En el recorrido está el Primer Puente bajo el Cielo, un arco natural de roca suspendido sobre el vacío.",
        come: "Dentro del parque nacional, con los autobuses internos incluidos en la entrada o subiendo con el ascensor de Bailong.",
        quando: "A primera hora, antes de los grupos. Los días de niebla ligera son los más escenográficos.",
        tempo: "Media jornada",
        costo: "Entrada al parque con autobuses internos y seguro unos 236-239 yuanes, válida 4 días (2025); ascensores y teleféricos aparte",
        consiglio: "Seguir todo el circuito de miradores sin quedarse en el primero: más adelante la gente se dispersa.",
      },
      {
        nome: "Ascensor de Bailong",
        testo: "Un ascensor panorámico construido en la pared de roca, que sube 326 metros en un minuto y medio. Une el fondo del valle de Shuirao Simen con la meseta de Yuanjiajie y ahorra horas de escalones. Es polémico, por ser una obra enorme dentro de un sitio de la UNESCO, pero es la forma más rápida de subir.",
        come: "Dentro del parque, desde la zona de Shuirao Simen, con billete aparte.",
        quando: "A la apertura o a primera hora de la tarde: en horas punta la cola dura hasta una hora.",
        tempo: "1 hora con la cola",
        costo: "65 yuanes por trayecto (2025)",
        consiglio: "Subir en ascensor y bajar a pie: el descenso entre los pilares es uno de los tramos más bonitos.",
      },
      {
        nome: "Tianzi Shan",
        testo: "El Monte del Hijo del Cielo, una meseta con los miradores más amplios del parque: desde aquí los pilares parecen un bosque de piedra que llega al horizonte. Es menos vertical que Yuanjiajie y más abierto.",
        come: "Teleférico de Tianzi Shan desde el fondo del valle o autobuses internos desde Yuanjiajie.",
        quando: "Por la tarde, cuando los grupos ya han pasado; al atardecer, con cielo limpio, la luz es rasante.",
        tempo: "2 horas",
        consiglio: "Combinarlo con Yuanjiajie el mismo día usando los autobuses internos del parque.",
      },
      {
        nome: "Tianmen Shan",
        testo: "Una montaña separada del parque, sobre la ciudad de Zhangjiajie, con la Puerta del Cielo, un enorme arco natural en la roca al que se llega por una escalinata de 999 escalones. Se sube con un teleférico larguísimo que sale del centro, o en autobús por la carretera de las 99 curvas. Arriba hay pasarelas voladas sobre la pared, algunas con suelo de cristal.",
        come: "Entrada aparte del parque nacional; el teleférico sale cerca de la estación de Zhangjiajie.",
        quando: "Jornada completa con cielo despejado: con niebla el arco no se ve.",
        tempo: "Jornada completa",
        consiglio: "Es un día en sí mismo: no intentar meterlo el mismo día que el parque.",
      },
      {
        nome: "Jinbian Xi",
        testo: "El Arroyo del Látigo de Oro: un sendero casi llano de unos 7 kilómetros por el fondo del valle, junto a un arroyo limpio y bajo paredes de piedra. Es la parte del parque donde se camina entre verde, lejos de los miradores abarrotados. Por el camino aparecen los macacos.",
        come: "Desde la entrada de Zhangjiajie Forest Park, a pie hasta Shuirao Simen.",
        quando: "Por la mañana, cuando el sendero está a la sombra.",
        tempo: "2-3 horas",
        consiglio: "Mochila cerrada y comida escondida: los monos arrancan bolsas y botellas.",
      },
    ],
    programmi: [
      { titolo: "2 días: Zhangjiajie", tappe: ["Día 1: Yuanjiajie, Tianzi Shan","Día 2: Tianmen Shan"] },
    ],
    zone: [
      { nome: "Wulingyuan", perChi: "Quien quiera estar cerca del parque", testo: "Ahorra dos horas de desplazamiento." },
    ],
    sapori: [
      { nome: "Cerdo con guindilla", testo: "Cocina de Hunan." },
      { nome: "Tofu apestoso", testo: "Frito." },
    ],
    attenzioni: [
      "Programar un solo día: el parque es enorme y la entrada vale cuatro días por algo.",
      "Llegar sin reserva: desde 2025 cada día de visita al parque se reserva con antelación, con el pasaporte.",
      "Ir en la Semana Dorada de octubre o a principios de mayo: horas de cola en ascensores y teleféricos.",
      "Dormir en la ciudad de Zhangjiajie: Wulingyuan, a la entrada del parque, ahorra horas de carretera.",
      "Dar de comer a los monos o llevar comida a la vista.",
    ],
    esperienzeSlugs: ['avatar-yuanjiajie', 'tianmen-shan'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Los pináculos de arenisca cubiertos de vegetación en el parque nacional de Zhangjiajie, Hunan',
    immagine: '/images/cina/zhangjiajie.jpg',
  },
  {
    slug: 'furong-zhen',
    immagine: '/images/viaggi/cina-paesaggi/giorno-3-furong-zhen.jpg',
    paeseSlug: 'cina',
    ordine: 5,
    nome: 'Furong Zhen',
    tipologia: ['borghi', 'cultura', 'natura'],
    giorniConsigliati: '1 noche, como parada entre Zhangjiajie y Fenghuang o Chongqing',
    visitataPersonalmente: true,
    introduzione:
      "El pueblo construido sobre una cascada: un pueblo tujia de casas de madera sobre pilotes apoyado en la roca, con un salto de agua que pasa por debajo y a través de él. Se llamaba Wangcun y tomó el nombre actual de la película que se rodó aquí en los años ochenta.",
    percheAndarci:
      "Porque es la parada que rompe el traslado entre Zhangjiajie y el resto de Hunan, y porque de noche, con la cascada iluminada y las callejuelas de piedra casi vacías, es uno de los lugares más bonitos del país, y uno de los pocos donde no te cruzas con extranjeros.",
    cosaVedere: [
      'La cascada que atraviesa el pueblo, con el pasadizo que pasa por detrás del velo de agua',
      'Las casas tujia sobre pilotes aferradas a la ladera sobre el río You',
      'La calle principal empedrada, con los escalones que bajan hasta el río',
      'El pueblo iluminado tras el atardecer, el momento por el que vale la pena dormir aquí',
    ],
    cosaFare: [
      'Pasar por detrás de la cascada por el pasadizo excavado en la roca',
      'Dormir en una guesthouse asomada al río y ver cómo el pueblo se vacía por la noche',
      'Desayuno con tofu picante y fideos de arroz en el puesto de la mañana',
    ],
    doveDormire:
      "Las guesthouses dentro del pueblo, las que dan al río o a la cascada, son la única razón para quedarse a dormir: quien llega en el día ve el lugar en las peores horas, las de los autocares. Los estándares son sencillos, las habitaciones pequeñas y el inglés casi inexistente.",
    doveMangiare:
      "Cocina tujia, es decir, Hunan en su versión de montaña: pescado de río estofado, cerdo ahumado colgado sobre el fuego (la conservación tradicional de la zona), tofu picante y verduras en vinagre. Se come en las casas que dan a la calle principal, casi todas con la misma carta y sin menú en inglés.",
    comeArrivare:
      "Unas 2 horas en coche o autobús desde Zhangjiajie, 1 hora y media desde Fenghuang. La estación de alta velocidad de Furong Zhen ha hecho la parada mucho más sencilla que antes: desde Chongqing hacen falta unas 3 horas y media-4 horas y media, con un transbordo en Zhangjiajie Oeste (el último tramo dura unos veinte minutos). Los horarios actualizados están en la aplicación 12306.",
    comeSpostarsi: 'Todo a pie, por escalones: el pueblo está construido en una ladera y no existe un recorrido llano.',
    periodoMigliore:
      "Después de las lluvias, entre abril y octubre, cuando la cascada tiene el caudal lleno: en la estación seca se reduce bastante y el pueblo pierde su elemento principal.",
    costi: 'Entrada al pueblo de unos 100 yuanes, que se paga también durmiendo aquí; guesthouses muy económicas.',
    erroriDaEvitare: [
      'Visitarlo en el día: entre las diez y las dieciséis está lleno de grupos, por la tarde-noche y a primera hora de la mañana es otro sitio',
      'Ir en la estación seca esperando la cascada de las fotografías',
      'Contar con pagos en efectivo o con personal que hable inglés: aquí Alipay o WeChat Pay y el traductor son indispensables',
    ],
    miaEsperienza:
      "Es la parada que nadie incluye en el itinerario, y sin embargo se queda. De día Furong Zhen es lo que uno espera: autocares, puestos, la misma mercancía de cualquier pueblo chino reconstruido. Hacia las seis de la tarde, sin embargo, los grupos se van todos a la vez, se encienden las luces sobre la cascada y el pueblo vuelve a ser cuatro calles de piedra mojada, con alguna familia cenando en la puerta. El recuerdo más fuerte es el pasadizo detrás del salto de agua: se camina por un corredor excavado en la roca, con el ruido del agua a un metro, y se sale empapado de salpicaduras. Como pueblo histórico está en gran parte rehecho, así que quien busque arquitectura auténtica saldrá decepcionado. Aquí cuentan la posición, que es única, y la hora del día en que se mira.",
    luoghi: [
      {
        nome: "Cascada y pasarela",
        testo: "El pueblo está construido al borde de una gran cascada que cae al río. Una pasarela de piedra pasa por detrás de la cortina de agua: se camina entre la roca y la cascada, con un ruido que lo tapa todo. Por la noche la cascada se ilumina.",
        come: "Tren rápido desde Zhangjiajie Oeste hasta la estación de Furongzhen (una media hora), luego autobús o taxi, unos 10 minutos; en el pueblo se baja a pie por las escalinatas.",
        quando: "De día para la pasarela; por la noche desde la orilla opuesta, con las luces encendidas.",
        tempo: "1 hora",
        consiglio: "Se sale mojado: chaqueta ligera impermeable y funda para el móvil.",
      },
      {
        nome: "Casas tujia",
        testo: "Casas de madera sobre pilotes, aferradas al borde del barranco sobre el río, donde vive la minoría tujia. Las calles de piedra del pueblo bajan en escalones hacia el agua, entre tiendas de tofu, dulces de arroz y plata. Es la parte del pueblo para ver con calma, cuando los grupos de un día ya se han ido.",
        come: "A pie por el pueblo.",
        quando: "Por la noche y a primera hora.",
        tempo: "2-3 horas",
        consiglio: "Dormir en una casa de huéspedes con vista a la cascada: por la noche, con las luces encendidas, es la razón para venir.",
      },
    ],
    programmi: [
      { titolo: "1 noche: Furong Zhen", tappe: ["Llegada por la tarde","Cascada","Noche en el pueblo iluminado","Primera hora de la mañana"] },
    ],
    zone: [
      { nome: "Casa de huéspedes junto al río", perChi: "Quien quiera ver el pueblo vacío", testo: "Muy económicas." },
    ],
    sapori: [
      { nome: "Pescado de río", testo: "Guisado." },
      { nome: "Cerdo ahumado", testo: "Colgado sobre el fuego." },
    ],
    attenzioni: [
      "Visitarlo en el día: lo mejor son la noche y el amanecer.",
      "Subestimar las escalinatas: son empinadas y con las salpicaduras resbalan, hace falta calzado que agarre.",
      "Ir en semanas de fiesta nacional: la pasarela de la cascada se recorre en fila.",
      "Fiarse solo de la tarjeta extranjera: en las tiendas se paga con Alipay o WeChat Pay, que hay que configurar antes de salir.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'El pueblo de Furong Zhen sobre el risco encima del río, con las casas tradicionales y la cascada',
  },
  {
    slug: 'chengdu',
    paeseSlug: 'cina',
    ordine: 6,
    nome: 'Chengdu',
    tipologia: ['città', 'cultura', 'gastronomia'],
    giorniConsigliati: '3 días, con una excursión fuera de la ciudad',
    visitataPersonalmente: true,
    introduzione:
      "La capital de Sichuan, la ciudad de los pandas y del hot pot, y de fama la más relajada de China: se toma té en los parques durante tardes enteras, se juega al mahjong en la calle, y el ritmo es declaradamente más lento que el de Pekín y Shanghái.",
    percheAndarci:
      "Por los pandas, que aquí se ven en un centro de investigación serio y no en un zoo. Y por la comida: Sichuan tiene la cocina más reconocible del país, y el hot pot de Chengdu es más que una comida.",
    cosaVedere: [
      'La Base de investigación de cría del panda gigante, al norte de la ciudad',
      'El Monasterio de Wenshu, el templo más bonito de la ciudad, con la sala de té en el patio',
      'El barrio de Kuanzhai Xiangzi, los callejones anchos y estrechos restaurados',
      'El parque del Pueblo, con la casa de té Heming donde se hace la limpieza de oídos en medio de la gente',
      'El sistema de riego de Dujiangyan, en funcionamiento ininterrumpido desde el siglo III a. C., patrimonio de la UNESCO',
      'El Gran Buda de Leshan, 71 metros esculpidos en la roca, a aproximadamente una hora de alta velocidad',
    ],
    cosaFare: [
      'Base de los pandas a la apertura, cuando los animales están activos (hay una ficha de experiencia dedicada)',
      'Hot pot de Sichuan en un local de barrio, con el caldo dividido en dos',
      'Espectáculo de la Ópera de Sichuan con el número del cambio de máscara',
      'Tarde en una casa de té, que en Chengdu es la actividad ciudadana por excelencia',
      'Excursión en el día a Leshan para ver el Gran Buda, o a Dujiangyan',
    ],
    doveDormire:
      "La zona alrededor del Monasterio de Wenshu y la de Kuanzhai Xiangzi son las más cómodas y agradables; el barrio de Chunxi Road es más comercial pero céntrico para el metro. La base de los pandas está al norte y se llega en metro más autobús lanzadera.",
    doveMangiare:
      "Chengdu es quizá la ciudad donde mejor se come en China. Hay que saber que el picante de Sichuan es de un tipo particular: la pimienta de Sichuan no quema, adormece la lengua, y la sensación (el famoso «málà») descoloca al primer bocado. Los platos obligatorios son el mapo tofu, el pollo gongbao (que no tiene nada que ver con la versión que se sirve en Europa), los fideos dan dan y el conejo, que aquí es cocina cotidiana. El hot pot hay que hacerlo al menos una vez con el caldo dividido, mitad picante y mitad claro, así cada uno elige. La comida callejera de los callejones es excelente y cuesta poquísimo.",
    comeArrivare:
      "Vuelo a Chengdu Tianfu (TFU) o Shuangliu (CTU), o alta velocidad: desde Chongqing es poco más de una hora, desde Xi'an unas 4 horas.",
    comeSpostarsi: 'Metro extenso y económico, más DiDi para los trayectos no cubiertos. El centro se camina bien.',
    periodoMigliore:
      "marzo-junio y septiembre-noviembre. Sichuan vive bajo una capa de gris durante gran parte del año (el chiste local es que los perros ladran cuando ven el sol), y el verano es caluroso y húmedo.",
    costi:
      "Base de los pandas 55 yuanes, con reserva nominal obligatoria; Leshan unos 80 yuanes; hot pot 60-120 yuanes por persona. Ciudad económica en comparación con la costa.",
    erroriDaEvitare: [
      'Llegar a la base de los pandas a media mañana: después de las diez los animales han comido y duermen, y se ven bolas de pelo inmóviles',
      'Presentarse sin reserva: la entrada es nominal, vinculada al pasaporte, y las taquillas físicas están cerradas',
      'Pedir el hot pot entero picante en la primera experiencia: el caldo dividido existe para eso',
      'Hacer Leshan y Dujiangyan en el mismo día: están en direcciones opuestas',
    ],
    miaEsperienza:
      "En Chengdu me entraron ganas de quedarme más tiempo del que preveía el programa. Hay poco que ver: es por cómo se está. En el parque del Pueblo, una tarde cualquiera, cientos de personas toman té solas o juegan a las cartas, y nadie tiene prisa. Es la única ciudad china en la que el tiempo parece abundante. Sobre los pandas conviene rebajar las expectativas. A las siete y media de la mañana están despiertos, comen bambú y trepan, y durante una hora son lo que se esperaba; dos horas después duermen y la visita pierde todo. Lo que más descoloca es el hot pot. La pimienta de Sichuan no es picante como la entendemos nosotros, adormece la boca: la primera vez la sensación es casi alarmante, luego crea adicción. El consejo es pedir el caldo dividido y no hacerse el héroe.",
    luoghi: [
      {
        nome: "Base de los pandas gigantes",
        testo: "El centro de investigación y cría al norte de la ciudad, con pandas gigantes y pandas rojos en recintos grandes y arbolados. Los pandas están activos a primera hora, a la hora de comer; en las horas de calor duermen casi todos. En la época de nacimientos se pueden ver las crías.",
        come: "Metro línea 3 hasta Panda Avenue, o taxi o DiDi. Reserva nominativa online hasta 14 días antes, con franja de mañana o tarde; en la entrada se muestra el pasaporte usado para reservar.",
        quando: "De marzo a octubre se entra desde las 7:30, de noviembre a febrero desde las 8:00 (2026). Llegar a la apertura.",
        tempo: "3-4 horas",
        costo: "55 yuanes adultos (2026)",
        url: "https://www.panda.org.cn/",
        consiglio: "Ir directamente a los recintos de los adultos: a partir de las diez casi todos duermen.",
      },
      {
        nome: "Monasterio de Wenshu",
        testo: "Monasterio budista fundado en época Sui y reconstruido a finales del siglo XVII, bajo los Qing, todavía frecuentado por fieles y monjes, entre incienso y oraciones. En el patio hay una casa de té al aire libre.",
        come: "Metro línea 1 hasta Wenshu Monastery.",
        quando: "Por la mañana, durante las oraciones.",
        tempo: "1,5 horas",
        consiglio: "Pararse a tomar un té en el patio: cuesta poco y es lo más chengdunés que se puede hacer.",
      },
      {
        nome: "Kuanzhai Xiangzi",
        testo: "Tres callejones paralelos, el Ancho, el Estrecho y el del Pozo, de casas con patio de época Qing restauradas y convertidas en calle de tiendas, casas de té y pequeños espectáculos. Está reconstruido y es turístico, pero da una idea del viejo Chengdu.",
        come: "Metro línea 4 hasta Kuanzhai Alley.",
        quando: "Por la noche, cuando se encienden los farolillos.",
        tempo: "1,5 horas",
        consiglio: "Vale un paseo, no una cena: se come mejor y más barato en las calles de alrededor.",
      },
      {
        nome: "Parque del Pueblo",
        testo: "El parque donde la ciudad se encuentra: jubilados que bailan, coros improvisados y el rincón del 'mercado matrimonial', donde los padres exponen los perfiles de sus hijos solteros. La casa de té Heming, bajo los árboles, es la más famosa de Chengdu: se elige el té, se llama al limpiador de orejas y se deja pasar la tarde.",
        come: "Metro línea 2 hasta People's Park.",
        quando: "Por la tarde, mejor entre semana.",
        tempo: "2 horas",
        consiglio: "Pedir un té y quedarse: el vaso se rellena de agua caliente todas las veces que se quiera.",
      },
      {
        nome: "Buda de Leshan",
        testo: "El Gran Buda tallado en la pared de roca donde confluyen tres ríos, de 71 metros, comenzado en el 713 y terminado unos noventa años después. Es Patrimonio de la UNESCO junto con el monte Emei. Una escalera estrecha baja por el costado de la estatua hasta los pies.",
        come: "Tren de alta velocidad de Chengdu a Leshan (una hora aprox.), luego autobús o taxi hasta el parque. Como alternativa el barco, que lo muestra de frente desde el río pero no entra en el parque.",
        quando: "A primera hora, en día laborable: la escalera se hace en cola.",
        tempo: "Jornada completa",
        costo: "80 yuanes la entrada al parque (2025); barco aparte",
        consiglio: "Entrar a la apertura y hacer enseguida la escalera: a media mañana la espera puede superar la hora.",
      },
    ],
    programmi: [
      { titolo: "2 días: Chengdu", tappe: ["Día 1: pandas, Wenshu","Día 2: Parque del Pueblo, hot pot"] },
    ],
    zone: [
      { nome: "Centro", perChi: "Quien quiera comodidad", testo: "Cerca de las líneas de metro." },
    ],
    sapori: [
      { nome: "Hot pot", testo: "Caldo dividido en dos." },
      { nome: "Mapo tofu", testo: "Un clásico." },
      { nome: "Gongbao", testo: "Pollo." },
    ],
    attenzioni: [
      "Llegar a los pandas a media mañana: duermen y solo se ven espaldas.",
      "Presentarse en la base sin reserva: se reserva online, con el pasaporte, hasta 14 días antes.",
      "Pedir hot pot todo picante sin costumbre: pedir el caldo dividido (yuanyang), mitad picante y mitad no.",
      "Comprar a última hora los billetes de tren a Leshan en fin de semana: se agotan.",
    ],
    esperienzeSlugs: ['panda-chengdu', 'hot-pot-sichuan'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'La Gran Sala del monasterio de Wenshu entre los árboles del patio, Chengdu',
    immagine: '/images/cina/chengdu.jpg',
  },
  {
    slug: 'chongqing',
    paeseSlug: 'cina',
    ordine: 7,
    nome: 'Chongqing',
    tipologia: ['città', 'architettura', 'panorami'],
    giorniConsigliati: '2 días, uno más si se añade Wulong',
    visitataPersonalmente: true,
    introduzione:
      "La megalópolis vertical construida sobre las colinas en la confluencia entre el Yangtsé y el Jialing: treinta y dos millones de habitantes en el municipio, rascacielos que salen de la niebla, y una geografía tan empinada que el metro atraviesa un edificio y la misma calle puede estar a la vez en la planta baja y en el piso quince.",
    percheAndarci:
      "Es la ciudad más fotogénica y más extraña de China, que se ha vuelto viral en los últimos años por buenas razones: no tiene monumentos, tiene una forma. Y es el punto de partida de los cruceros por el Yangtsé y la base para el karst de Wulong.",
    cosaVedere: [
      'Hongya Dong, el complejo de casas sobre pilotes de varios pisos iluminado de noche sobre el río',
      'La estación de Liziba, donde el monorraíl entra y sale del sexto piso de un edificio residencial',
      'El barrio de Ciqikou, el pueblo antiguo conservado dentro de la ciudad',
      'El mirador de Nanshan y el teleférico sobre el Yangtsé',
      'El karst de Wulong, con los tres puentes naturales y la sima de Tiankeng, a tres horas de la ciudad',
    ],
    cosaFare: [
      'Cruzar el río en teleférico al atardecer',
      'Ver Hongya Dong desde la orilla opuesta después de que oscurezca, que es el único punto desde donde se entiende',
      'Hot pot de Chongqing, aún más aceitoso y picante que el de Chengdu: aquí nació',
      'Excursión en el día o con pernoctación al parque kárstico de Wulong',
      'Embarcar en el crucero por las Tres Gargantas del Yangtsé, que sale de aquí',
    ],
    doveDormire:
      "La península de Yuzhong, el centro histórico-financiero, es la base más cómoda: Hongya Dong, Liziba y los muelles se alcanzan a pie o con pocas paradas de metro. Vale la pena gastar algo más en una habitación con vistas al río: aquí la vista es la ciudad.",
    doveMangiare:
      "El hot pot de Chongqing es el original y no hace concesiones: caldo rojo de grasa de buey y guindilla, sin la versión suavizada. Los locales históricos todavía tienen las mesas con la olla de compartimentos compartida. Aparte del hot pot, la especialidad son los xiaomian, los fideos picantes de la mañana, que aquí se comen en el desayuno sentados en taburetes de plástico en la calle. Para probar también el laziji, el pollo frito enterrado bajo una montaña de guindillas secas entre las que hay que pescarlo.",
    comeArrivare:
      "Vuelo a Chongqing Jiangbei (CKG) o alta velocidad: Chengdu está a poco más de una hora, Zhangjiajie a 2-2 horas y media de alta velocidad, a Furong Zhen se llega con un transbordo en Zhangjiajie Oeste.",
    comeSpostarsi:
      "Metro y monorraíl, que aquí ya son un espectáculo. Los taxis tienen un problema estructural: la navegación por satélite se vuelve loca en una ciudad de varios niveles, y ocurre que el conductor llega a la coordenada correcta pero en el piso equivocado. Caminar es cansado, se sube y se baja continuamente.",
    periodoMigliore:
      "marzo-mayo y septiembre-noviembre. El verano en Chongqing es famoso: es una de las «ciudades horno» de China, con semanas por encima de los 40 grados y humedad altísima.",
    costi:
      "Wulong unos 135 yuanes más los autobuses lanzadera; teleférico sobre el Yangtsé pocos yuanes; Hongya Dong gratuito. Ciudad muy económica en comida y transporte.",
    erroriDaEvitare: [
      'Ir a Hongya Dong y mirarlo desde dentro: desde el interior es un centro comercial, hay que mirarlo desde la orilla opuesta, después del atardecer',
      'Fiarse de los mapas para estimar los tiempos a pie: dos puntos a trescientos metros de distancia pueden estar separados por cien metros de desnivel',
      'Visitarla en julio o agosto, cuando el calor vuelve impracticable cualquier programa diurno',
      'Considerarla solo una parada de paso hacia el crucero por el Yangtsé: merece dos días por sí misma',
    ],
    miaEsperienza:
      "Chongqing es la ciudad más absurda que he visto en China, y hay que tomarla por lo que es: ningún monumento que tachar, una geografía enloquecida que atravesar. La entendí cuando salí de un centro comercial por el primer piso y me encontré en una calle con tráfico, con otros dos niveles de ciudad bajo los pies. Hongya Dong de noche impresiona más que en fotografía, con una condición: mirarlo desde la orilla opuesta, porque por dentro es un normal centro comercial temático. El metro que entra por el sexto piso de un edificio habitado es como en los vídeos, y el mejor detalle es que para quien vive allí es algo cotidiano. Sobre el clima, ninguna indulgencia: en verano aquí no se está, y un viaje programado en julio está mal programado.",
    luoghi: [
      {
        nome: "Hongya Dong",
        testo: "Un complejo de once plantas de casas sobre pilotes, reconstruidas en estilo tradicional y aferradas al barranco sobre el río Jialing. De noche se ilumina de oro y recuerda escenas de «El viaje de Chihiro» de Miyazaki: se ha convertido en el símbolo de la ciudad en redes. Dentro hay tiendas y restaurantes en varios niveles.",
        come: "Metro líneas 1 o 6 hasta Xiaoshizi, luego a pie.",
        quando: "Cuando oscurece y se encienden las luces.",
        tempo: "1 hora",
        consiglio: "Mirarlo desde la orilla opuesta o desde el puente de Qiansimen: desde dentro parece solo un centro comercial.",
      },
      {
        nome: "Estación de Liziba",
        testo: "En la línea 2 del monorraíl el tren entra en un edificio de viviendas de diecinueve plantas y lo atraviesa a la altura de la sexta a la octava, donde está la estación. Desde la calle se ve el tren desaparecer en el edificio.",
        come: "Metro línea 2 hasta Liziba.",
        quando: "De día: pasa un tren cada pocos minutos.",
        tempo: "30 minutos",
        consiglio: "Para quien vive allí es normal. Merece la pena verlo desde la calle y desde el andén, dentro del edificio.",
      },
      {
        nome: "Ciqikou",
        testo: "Antiguo pueblo portuario a orillas del Jialing, con calles empedradas, casas de madera y tiendas de mahua, las trenzas fritas, y de cacahuetes con sal y pimienta. Hoy es muy turístico, pero en los callejones laterales quedan casas de té y patios.",
        come: "Metro línea 1 hasta Ciqikou.",
        quando: "Por la mañana, antes de la multitud.",
        tempo: "2 horas",
        consiglio: "Dejar la calle principal y subir por los callejones: ahí el pueblo es más auténtico.",
      },
      {
        nome: "Teleférico del Yangtsé",
        testo: "Inaugurado en 1987 para cruzar el Yangtsé, hoy es una atracción: en unos cuatro minutos se sobrevuela el río con rascacielos en las dos orillas.",
        come: "Estación de Xinhua Road, cerca de Jiefangbei, hasta la orilla sur.",
        quando: "Al atardecer o de noche.",
        tempo: "30 minutos, más la cola",
        consiglio: "La cola puede pasar de una hora: ir en día laborable o tarde por la noche.",
      },
      {
        nome: "Wulong",
        testo: "El parque kárstico de Wulong, Patrimonio de la UNESCO dentro del Karst del sur de China. Los Tres Puentes Naturales son arcos de roca gigantescos sobre un desfiladero, que se visitan desde abajo, bajando en ascensor y caminando junto al torrente.",
        come: "Tren de Chongqing a Wulong y luego lanzadera, o tour de un día: contar 2-3 horas de viaje por trayecto.",
        quando: "Jornada completa, fuera de las semanas de fiesta.",
        tempo: "Jornada completa",
        consiglio: "Salir temprano: entre viaje y visita el día se llena, y el sendero del desfiladero pide calzado cómodo.",
      },
    ],
    programmi: [
      { titolo: "1-2 días: Chongqing", tappe: ["Liziba","Teleférico","Hongya Dong de noche","Hot pot"] },
    ],
    zone: [
      { nome: "Jiefangbei", perChi: "Quien quiera el centro", testo: "Cómodo." },
    ],
    sapori: [
      { nome: "Hot pot de Chongqing", testo: "Caldo rojo picante." },
      { nome: "Xiaomian", testo: "Fideos picantes." },
    ],
    attenzioni: [
      "Ver Hongya Dong solo desde dentro: el espectáculo se ve desde la otra orilla.",
      "Fiarse de los tiempos a pie de los mapas: la ciudad está en capas y dos puntos cercanos pueden tener decenas de metros de desnivel.",
      "Ir en julio y agosto: el calor es asfixiante.",
      "Pedir hot pot sin decir 'poco picante' (wei la): el de Chongqing es el más fuerte del país.",
    ],
    esperienzeSlugs: ['hongya-dong-notte'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'El skyline de Chongqing iluminado de noche con el puente de Qiansimen y Hongya Dong en la orilla',
    immagine: '/images/cina/chongqing.jpg',
  },
  {
    slug: 'lijiang',
    paeseSlug: 'cina',
    ordine: 8,
    nome: 'Lijiang',
    tipologia: ['borghi', 'cultura', 'montagna'],
    giorniConsigliati: '2-3 días, como base para el Yulong Xueshan',
    visitataPersonalmente: true,
    introduzione:
      "La ciudad vieja de los naxi en el norte de Yunnan, a 2.400 metros: un laberinto de callejuelas empedradas, canales y tejados de tejas grises, patrimonio de la UNESCO, con el macizo del Dragón de Jade cerrando el horizonte al norte.",
    percheAndarci:
      "Es la base logística de todo el norte de Yunnan (Yulong Xueshan, Garganta del Salto del Tigre, Shangri-La). Y la cultura naxi, con su escritura pictográfica todavía en uso, es una de las más particulares del país.",
    cosaVedere: [
      'La ciudad vieja (Dayan), con la plaza Sifang y los canales que la atraviesan',
      'La colina del León y la Pagoda Wangu, para la vista sobre los tejados grises desde arriba',
      'El pueblo de Baisha, al norte, mucho menos turístico y con los frescos Ming',
      'Shuhe, la ciudad vieja menor, más tranquila que Dayan',
      'El Lago del Dragón Negro, con la postal clásica del Yulong Xueshan reflejado en el agua',
    ],
    cosaFare: [
      'Perderse por las callejuelas de Dayan a primera hora de la mañana, antes de que abran las tiendas',
      'Subir a la colina del León al atardecer',
      'Jornada en Baisha en bicicleta, donde la vida naxi se ha quedado como era',
      'Usar Lijiang como base para el Yulong Xueshan y para la Garganta del Salto del Tigre',
    ],
    doveDormire:
      "Las guesthouses de patio dentro de la ciudad vieja son la experiencia adecuada, con la advertencia de que en Dayan no entran los coches: se llega al borde y se sigue a pie con el equipaje por los adoquines. Por comodidad y silencio conviene Shuhe, diez minutos de taxi más al norte.",
    doveMangiare:
      "La cocina de Yunnan es la más distinta del resto de China: menos picante que la de Sichuan, con muchas setas, flores, hierbas y quesos (rarísimos en el resto del país). Los platos que buscar son los fideos «que cruzan el puente» (servidos en un caldo hirviendo con los ingredientes para añadir en el momento), el queso de cabra a la parrilla de los bai, las setas salteadas en temporada y el cerdo ahumado de los naxi. Dentro de la ciudad vieja los precios son de turista: basta salir dos callejuelas para reducirlos a la mitad.",
    comeArrivare:
      "Vuelo a Lijiang Sanyi (LJG), que es la forma normal de llegar, con conexiones desde Kunming, Chengdu, Shanghái y Pekín. Como alternativa, tren desde Kunming (unas 3 horas en alta velocidad) o desde Dali.",
    comeSpostarsi: 'La ciudad vieja se recorre solo a pie. Para el Yulong Xueshan, Baisha y la Garganta del Salto del Tigre hacen falta autobuses turísticos, taxis o un conductor por días.',
    periodoMigliore:
      "marzo-mayo y septiembre-noviembre, con cielos despejados y el macizo visible. Las lluvias se concentran entre junio y agosto; el invierno es frío pero despejado, con nieve en el Dragón de Jade.",
    costi:
      "La tasa de mantenimiento de la ciudad vieja (unos 50 yuanes) se pide a la entrada de algunos sitios; guesthouses muy económicas. La altitud ya se nota: 2.400 metros no son pocos, y quien llega desde el nivel del mar los siente.",
    erroriDaEvitare: [
      'Juzgar Lijiang por la calle principal de Dayan a las seis de la tarde, cuando es un corredor de tiendas y karaokes: la ciudad vieja hay que verla al amanecer',
      'Ignorar la altitud: desde aquí se sube a 4.500 metros en el Yulong Xueshan, y llegar en avión desde el nivel del mar la tarde anterior es la elección equivocada',
      'Saltarse Baisha y Shuhe pensando que son lo mismo que Dayan',
    ],
    miaEsperienza:
      "Lijiang divide, y con razón. La ciudad vieja es patrimonio de la UNESCO, y a las siete de la tarde es un mercado continuo de souvenirs con la música a todo volumen en los bares de la plaza: quien llega a esa hora y se queda ahí vuelve a casa convencido de que es una trampa. Luego se sale a las seis de la mañana y se encuentra otro sitio: callejuelas mojadas, canales que fluyen, viejas naxi barriendo delante de casa, ninguna tienda abierta. Por eso tiene sentido dormir aquí en lugar de pasar. El consejo más útil es dedicar media jornada a Baisha, diez kilómetros al norte. Es el pueblo naxi original, casi nadie va, y allí todavía está lo que en Dayan se busca sin encontrarlo. Recordad por último que estamos a 2.400 metros y que el motivo para venir aquí está más al norte: Lijiang es la base, no la meta.",
    luoghi: [
      {
        nome: "Ciudad vieja de Dayan",
        testo: "La ciudad vieja de Lijiang, Patrimonio de la UNESCO desde 1997: callejones empedrados, casas de madera de la minoría naxi y canales de agua corriente. En el centro está la plaza Sifang. De día y de noche es una calle comercial llena de gente; al amanecer vuelve a ser un pueblo.",
        come: "A pie; los coches no entran.",
        quando: "Al amanecer, antes de las ocho.",
        tempo: "Mañana",
        consiglio: "A las seis es otro lugar. El Estanque del Dragón Negro, justo al norte, refleja por la mañana la Montaña de Jade si el cielo está limpio.",
      },
      {
        nome: "Colina del León",
        testo: "La colina dentro de la ciudad vieja con el Pabellón Wangu, una torre de madera de varias plantas desde la que se ven los tejados de Dayan y, con cielo limpio, la Montaña Nevada del Dragón de Jade.",
        come: "A pie desde la ciudad vieja, cuesta arriba.",
        quando: "Atardecer.",
        tempo: "1 hora",
        consiglio: "Subir una hora antes del atardecer: la luz baja sobre los tejados es la razón para subir.",
      },
      {
        nome: "Baisha",
        testo: "Pueblo naxi a 8-10 kilómetros al norte, centro de la región antes de Lijiang. Conserva frescos de época Ming en sus templos y un ritmo de pueblo de verdad, con campos alrededor y la montaña al fondo.",
        come: "Bicicleta o taxi desde Lijiang.",
        quando: "Por la mañana.",
        tempo: "Media jornada",
        consiglio: "Casi nadie va: es el sitio para entender cómo era Lijiang antes del turismo.",
      },
      {
        nome: "Shuhe",
        testo: "Antigua parada en la Ruta del Té y los Caballos, al norte de Lijiang. Es más pequeña y tranquila que Dayan, con canales y pequeñas casas de huéspedes.",
        come: "Bicicleta, o taxi en unos 20 minutos.",
        quando: "Por la mañana.",
        tempo: "1,5 horas",
        consiglio: "Ir en bici y seguir después hacia Baisha: están en la misma carretera.",
      },
    ],
    programmi: [
      { titolo: "2 días: Lijiang", tappe: ["Día 1: Dayan, Colina del León","Día 2: Baisha"] },
    ],
    zone: [
      { nome: "Ciudad vieja", perChi: "Quien quiera dormir entre los canales", testo: "Mejor que limitarse a pasar por ella." },
    ],
    sapori: [
      { nome: "Fideos «cruzando el puente»", testo: "Caldo hirviendo." },
      { nome: "Queso de cabra", testo: "De los bai." },
    ],
    attenzioni: [
      "Juzgar Dayan a las seis de la tarde: es su peor hora.",
      "Ignorar la altitud: Lijiang está en altura, los primeros días se camina más despacio.",
      "Saltarse Baisha y Shuhe.",
      "Comprar plata, té pu'er o jade en las tiendas de la ciudad vieja sin regatear.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Los tejados grises de la ciudad vieja de Lijiang vistos desde arriba, con las montañas al fondo',
    immagine: '/images/cina/lijiang.jpg',
  },
  {
    slug: 'yulong-shangri-la',
    paeseSlug: 'cina',
    ordine: 9,
    nome: 'Yulong Xueshan, el Salto del Tigre y Shangri-La',
    tipologia: ['montagna', 'natura', 'trekking'],
    giorniConsigliati: '3-4 días saliendo desde Lijiang',
    visitataPersonalmente: true,
    introduzione:
      "Las montañas del norte de Yunnan: el macizo del Dragón de Jade (Yulong Xueshan), que roza los 5.600 metros y fue escalado una sola vez, en 1987, el anfiteatro a 3.100 metros donde se representa el espectáculo dirigido por Zhang Yimou, una de las gargantas más profundas del mundo y, al final de la carretera, la meseta tibetana de Shangri-La.",
    percheAndarci:
      "En tres días se pasa de un teatro al aire libre bajo un glaciar a un trek a lo largo de una garganta excavada a lo largo de 3.000 metros, hasta un monasterio tibetano a 3.200 metros de altitud. Es la secuencia de paisajes más potente de toda China.",
    cosaVedere: [
      'El macizo del Yulong Xueshan, con el teleférico que sube al glaciar a 4.506 metros',
      'El espectáculo Impression Lijiang, en el anfiteatro al aire libre a 3.100 metros a los pies de la montaña',
      'El Valle de la Luna Azul y el Prado de los Yaks, a los pies del macizo',
      'La Garganta del Salto del Tigre, donde el Yangtsé corre encajonado entre paredes de 3.000 metros',
      'El monasterio de Songzanlin en Shangri-La, el mayor complejo budista tibetano de Yunnan',
      'La ciudad vieja de Dukezong en Shangri-La, con el gran cilindro de oración giratorio',
    ],
    cosaFare: [
      'Asistir a Impression Lijiang con la montaña de telón de fondo (hay una ficha de experiencia dedicada)',
      'Trek de dos días por el sendero alto de la Garganta del Salto del Tigre (hay una ficha de experiencia dedicada)',
      'Subir en teleférico al glaciar a 4.506 metros y caminar por las pasarelas en altura',
      'Jornada en Shangri-La entre monasterio, ciudad vieja y meseta',
    ],
    doveDormire:
      "Lijiang como base para el Yulong Xueshan y para el espectáculo. Para la Garganta del Salto del Tigre se duerme en las guesthouses a lo largo del sendero alto, en Walnut Garden o en la Tea Horse Guesthouse, que son el motivo por el que el trek se hace en dos días en lugar de en uno. En Shangri-La, la ciudad vieja de Dukezong.",
    doveMangiare:
      "En la meseta la cocina cambia y se vuelve tibetana: té con mantequilla de yak (que descoloca al primer sorbo), carne de yak seca, momo al vapor y sopas espesas. A lo largo de la Garganta del Salto del Tigre se come en las guesthouses, con menús fijos sencillos y más buenos de lo que uno espera. Alrededor del Yulong Xueshan la oferta es mínima y cara: conviene llevarse comida y agua desde Lijiang.",
    comeArrivare:
      "Todo parte de Lijiang: una hora en coche hasta la entrada del Yulong Xueshan, dos horas hasta Qiaotou, donde empieza el sendero alto de la garganta, cuatro horas hasta Shangri-La (que tiene también su propio aeropuerto y, desde 2023, la conexión ferroviaria desde Lijiang en algo más de una hora).",
    comeSpostarsi:
      "Autobuses turísticos y conductor por días desde Lijiang; para el trek de la garganta se camina, dejando el equipaje grande en consigna en Lijiang o transportado hasta la guesthouse de llegada.",
    periodoMigliore:
      "marzo-mayo y septiembre-noviembre. La garganta es peligrosa en la estación de lluvias (junio-agosto) por los desprendimientos; el glaciar es visible todo el año pero en los días nublados el teleférico sube dentro de la niebla y no se ve nada.",
    costi:
      "Yulong Xueshan: unos 100 yuanes de entrada al parque más 20 de autobús lanzadera más el teleférico al glaciar, que es la partida más cara (indicativamente 120 yuanes) y hay que reservarla. Impression Lijiang cuesta unos 190-280 yuanes según el sector. Garganta del Salto del Tigre unos 65 yuanes. Monasterio de Songzanlin unos 100 yuanes.",
    erroriDaEvitare: [
      'Subir al glaciar a 4.506 metros el día después de llegar en avión desde el nivel del mar: la altitud se nota, la bombona de oxígeno que venden en la entrada no es un souvenir',
      'No reservar con antelación el teleférico grande: las cuotas diarias son limitadas y se agotan pronto en temporada alta',
      'Hacer la Garganta del Salto del Tigre por la carretera asfaltada del fondo del valle pensando que ya se ha visto: el recorrido de verdad es el sendero alto, mucho más en altura',
      'Programar el trek en la estación de lluvias, cuando los desprendimientos cierran tramos del sendero',
      'Subestimar Shangri-La: a 3.200 metros las noches son frías en cualquier estación y falta el aliento incluso subiendo un tramo de escaleras',
    ],
    confronti: [
      {
        titolo: 'Los tres teleféricos del Yulong Xueshan',
        introduzione:
          "El macizo tiene tres subidas distintas, con precios, altitudes y colas muy diferentes entre sí. La mayoría de los visitantes coge la primera sin saber que existen las otras, y en temporada alta es la elección que cuesta más horas de espera.",
        opzioni: [
          {
            nome: 'Teleférico del glaciar (Glacier Park)',
            sintesi: 'El gran teleférico que sube a 4.506 metros, con las pasarelas sobre el glaciar y el punto más alto alcanzable.',
            costo: 'indicativamente 120 yuanes, además de entrada y autobús lanzadera',
            durata: 'media jornada contando las esperas',
            pro: ['Es el punto más alto y más espectacular del macizo', 'La altitud se nota, y vale el viaje', 'Las pasarelas permiten caminar en altura sin ninguna dificultad técnica'],
            contro: ['Cuota diaria limitada: sin reserva se corre el riesgo de quedarse fuera', 'Colas larguísimas en temporada alta', 'A 4.500 metros quien no está aclimatado se encuentra mal de verdad', 'Con nubes no se ve nada y la entrada se gasta igualmente'],
            perChi: 'Quien ha reservado con antelación, tiene un día despejado y ha pasado al menos una noche en Lijiang.',
          },
          {
            nome: 'Teleférico del Prado de los Abetos (Spruce Meadow)',
            sintesi: 'Sube a unos 3.200 metros, a un claro de prados y abetos a los pies de las paredes.',
            costo: 'indicativamente 55 yuanes',
            durata: '1-2 horas',
            pro: ['Mucha menos cola que el teleférico grande', 'Altitud accesible para todos', 'Vista frontal de las paredes del macizo, entre las más bonitas'],
            contro: ['No se llega al glaciar', 'Menos «hazaña» y menos que contar', 'Concurrido igualmente los fines de semana'],
            perChi: 'Quien tiene problemas con la altitud, viaja con niños o personas mayores, o ha encontrado agotado el teleférico grande.',
          },
          {
            nome: 'Teleférico del Prado de los Yaks (Yak Meadow)',
            sintesi: 'El menos frecuentado de los tres, a unos 3.700 metros, sobre pastos de altura con un pequeño templo.',
            costo: 'indicativamente 45 yuanes',
            durata: '2 horas',
            pro: ['Casi desierto incluso en temporada alta', 'Paisaje de pastos y yaks, el más tranquilo del macizo', 'El más económico'],
            contro: ['El menos espectacular desde el punto de vista panorámico', 'Pocos servicios', 'Requiere igualmente un autobús lanzadera dedicado'],
            perChi: 'Quien quiere caminar en paz y no soporta las colas.',
          },
        ],
        raccomandazione:
          'Con un día despejado y la reserva en la mano, el teleférico del glaciar: es el que se recuerda. Si el cielo está cubierto no vale el precio: mejor recurrir al Prado de los Abetos y guardar el dinero para el espectáculo.',
      },
    ],
    miaEsperienza:
      "Es la parte de China que mejor recuerdo, por la secuencia más que por un solo sitio. Impression Lijiang sobre el papel parece la típica cosa para turistas, con quinientos figurantes, caballos y trajes. En directo funciona por una razón que no tiene que ver con la dirección: el anfiteatro está al aire libre a 3.100 metros y el telón de fondo es la montaña de verdad, con el glaciar sobre la cabeza. Ningún teatro puede competir. Al día siguiente, el teleférico a 4.506 metros. Se sube en pocos minutos y el cuerpo no tiene tiempo de adaptarse: en las pasarelas se camina a veinte pasos y una parada, y las bombonas de oxígeno que venden en la entrada, que parecían improbables, se vuelven razonables. Lo mejor sigue siendo el sendero alto de la Garganta del Salto del Tigre: dos días de caminata por una ladera casi desierta, con el Yangtsé tres mil metros más abajo que se oye antes de verse, y guesthouses donde se cena todos en la misma mesa. Shangri-La, al final de la carretera, es ya el Tíbet en todo menos en el nombre.",
    luoghi: [
      {
        nome: "Yulong Xueshan",
        testo: "El macizo de la Montaña Nevada del Dragón de Jade, que domina Lijiang. Un teleférico sube al Parque del Glaciar hasta 4.506 metros, donde una pasarela de madera lleva entre rocas y hielo. Más abajo está el Valle de la Luna Azul, con lagos turquesa en terrazas.",
        come: "Tour o coche desde Lijiang, una hora aprox. Las entradas del teleférico del glaciar tienen cupo y se reservan con antelación.",
        quando: "A primera hora: por la tarde suben las nubes y el viento.",
        tempo: "Jornada completa",
        consiglio: "Aclimatarse un par de días en Lijiang antes de subir y, arriba, moverse despacio.",
      },
      {
        nome: "Impression Lijiang",
        testo: "Espectáculo al aire libre ideado por Zhang Yimou, con cientos de intérpretes de las minorías locales y caballos, en un teatro a unos 3.100 metros con la montaña nevada como telón de fondo.",
        come: "Al pie de la Montaña de Jade, en la misma carretera de los tours; taxi desde Lijiang.",
        quando: "Funciones de día, a horas fijas que hay que comprobar al reservar.",
        tempo: "1,5 horas",
        consiglio: "La montaña es el decorado: con cielo limpio vale la entrada, con nubes mucho menos.",
      },
      {
        nome: "Garganta del Salto del Tigre",
        testo: "Uno de los desfiladeros más profundos del mundo, excavado por el Yangtsé entre la Montaña de Jade y el monte Haba. El sendero alto se recorre en dos días, durmiendo en casas de huéspedes por el camino, con el río rugiendo cientos de metros más abajo.",
        come: "Autobús o coche desde Lijiang hasta Qiaotou, donde empieza el sendero alto; entrada a la garganta.",
        quando: "Primavera y otoño, con tiempo seco.",
        tempo: "2 días",
        consiglio: "Hacer el sendero alto, no la carretera asfaltada de abajo. El tramo de las 28 curvas es el más duro: afrontarlo por la mañana.",
      },
      {
        nome: "Shangri-La",
        testo: "La ciudad de Zhongdian, rebautizada Shangri-La, en la meseta tibetana a unos 3.200 metros. El monasterio de Songzanlin, del siglo XVII, es el mayor de Yunnan; la ciudad vieja de Dukezong se reconstruyó en gran parte tras el incendio de 2014.",
        come: "Tren o autobús desde Lijiang; el tren tarda menos de dos horas.",
        quando: "De mayo a octubre; en invierno hace mucho frío.",
        tempo: "1-2 días",
        consiglio: "El monasterio a la apertura, cuando los monjes están trabajando. Subir con calma: la altitud se nota.",
      },
    ],
    programmi: [
      { titolo: "3 días: más allá de Lijiang", tappe: ["Día 1: Impression Lijiang","Día 2: Yulong Xueshan","Día 3: Garganta del Salto del Tigre"] },
    ],
    zone: [
      { nome: "Casa de huéspedes a lo largo de la garganta", perChi: "Quien hace el trek", testo: "Menú fijo sencillo." },
    ],
    sapori: [
      { nome: "Té con mantequilla de yak", testo: "El primer sorbo desconcierta." },
      { nome: "Momo", testo: "Al vapor." },
    ],
    attenzioni: [
      "Subir a 4.506 metros nada más bajar del avión: mejor un par de días en Lijiang antes.",
      "Presentarse en el teleférico del glaciar sin reserva: las plazas tienen cupo.",
      "Salir hacia la garganta con lluvia fuerte: el sendero tiene tramos expuestos a desprendimientos.",
      "Subestimar el frío de Shangri-La: incluso en verano, por la noche la temperatura baja mucho.",
    ],
    esperienzeSlugs: ['impression-lijiang', 'gola-salto-tigre'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Las cumbres nevadas del Yulong Xueshan, la Montaña del Dragón de Jade, cerca de Lijiang',
    immagine: '/images/cina/yulong-shangri-la.jpg',
  },
  {
    slug: 'yangshuo',
    paeseSlug: 'cina',
    ordine: 10,
    nome: 'Yangshuo y el río Li',
    tipologia: ['natura', 'bicicletta', 'panorami'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      "El karst de Guangxi: miles de torres calizas que sobresalen de los arrozales a lo largo del río Li, el paisaje reproducido en el billete de 20 yuanes y pintado durante siglos por los artistas chinos. Yangshuo es el pueblo a los pies de las torres, antes aldea y hoy base de todo lo que se hace en la zona.",
    percheAndarci:
      "Es el paisaje chino por excelencia, el de los rollos pintados. Y es la única parada del país donde la forma adecuada de viajar es lenta: bicicleta entre los arrozales, balsa en el río, ningún museo que tachar.",
    cosaVedere: [
      'El tramo del río Li entre Guilin y Yangshuo, el más fotografiado de China',
      'La colina de Xianggong al amanecer, el mirador sobre el meandro del río',
      'Las terrazas de arroz de Longji, a dos horas y media hacia el norte',
      'El pueblo de Xingping, con la vista del billete de 20 yuanes',
      'El Yulong River, con sus puentes de piedra y los arrozales, mucho más tranquilo que el río Li',
      'El espectáculo Impression Liu Sanjie, en el río, con las torres kársticas como escenografía',
    ],
    cosaFare: [
      'Descenso del río Li en balsa o en barco (hay una ficha de experiencia dedicada)',
      'Jornada en bicicleta o scooter eléctrico por el Yulong River entre arrozales y pueblos',
      'Amanecer en la colina de Xianggong, el mejor momento del día',
      'Escalada deportiva: Yangshuo es una de las capitales mundiales de la escalada en caliza',
      'Espectáculo nocturno en el río con las torres iluminadas',
    ],
    doveDormire:
      "El pueblo de Yangshuo es cómodo pero ruidoso, sobre todo alrededor de la West Street; las guesthouses en el campo, a lo largo del Yulong River o hacia Xingping, son la mejor opción y cuestan menos. Xingping es la alternativa para quien quiere un pueblo más pequeño y el mirador a dos pasos.",
    doveMangiare:
      "El plato local es el pescado a la cerveza, cocinado en sartén con cerveza, pimientos y tomate, y hay que comerlo junto al río. Para probar también los caracoles de río rellenos y los fideos de arroz de Guilin, que aquí se comen en el desayuno con encurtidos y cacahuetes por un par de euros. La West Street es la calle de los restaurantes para extranjeros, con precios y cocina domesticados: basta salir de ella para comer mejor y gastar la mitad.",
    comeArrivare:
      "Alta velocidad hasta Guilin o directamente a la estación de Yangshuo (que está, sin embargo, a 30 minutos del centro): desde Cantón son unas 2-3 horas, desde Shanghái 8-9. Vuelo a Guilin Liangjiang (KWL), luego una hora de autobús.",
    comeSpostarsi:
      "Bicicleta y scooter eléctrico son el medio adecuado y se alquilan en todas partes por pocos yuanes. Para el río Li se usan barco o balsa de bambú; para Longji hace falta un autobús o un coche.",
    periodoMigliore:
      "abril-octubre, con una precisión: los arrozales son verdes en verano y dorados a finales de septiembre-octubre, inundados y reflectantes en mayo-junio. El verano trae calor y bochorno, pero también el caudal de agua justo en el río.",
    costi:
      "Crucero en barco Guilin-Yangshuo de unos 215-450 yuanes según la clase; balsa de bambú en el tramo corto desde Xingping 100-150 yuanes; terrazas de Longji unos 80 yuanes; bici de alquiler pocos yuanes al día.",
    erroriDaEvitare: [
      'Reservar el crucero largo desde Guilin pensando que es la única opción: el tramo más bonito es el de alrededor de Xingping, y se puede hacer en balsa en una hora',
      'Quedarse en la West Street pensando que se ha visto Yangshuo: el sentido del lugar está fuera del pueblo, en las carreteras de campo',
      'Ir en agosto sin contar con calor y humedad pesados',
      'Dar por descontado el caudal del río: en la estación seca algunos tramos en balsa se suspenden',
    ],
    miaEsperienza:
      "En Yangshuo por fin se afloja el ritmo, y en un viaje por China vale más de lo que parece. El crucero largo desde Guilin, el que reservan todos, es bonito pero es un barco lleno con bufé. El tramo que cuenta es el de alrededor de Xingping: se hace en una hora en una balsa de bambú, dos personas a bordo y las torres desfilando a ras del agua. La mejor jornada, sin embargo, es la que no tiene programa: una bici eléctrica, la carretera a lo largo del Yulong River y cinco horas parando donde toque entre arrozales, búfalos y puentes de piedra. Por la noche la West Street es lo contrario, con letreros, música alta y restaurantes con la carta en cinco idiomas; el remedio es dormir en el campo en lugar de en el pueblo. Sobre el amanecer en Xianggong mejor ser claros: despertador antes de las cinco, subida empinada a oscuras, y luego la niebla que se levanta desde el meandro del río. Es la fotografía que tenía en la cabeza al salir.",
    luoghi: [
      {
        nome: "Río Li",
        testo: "El río entre Guilin y Yangshuo, con colinas kársticas en forma de pan de azúcar en las dos orillas. El tramo más bonito es el de Xingping, donde está el paisaje impreso en el billete de 20 yuanes. Se recorre en balsas a motor que imitan las de bambú.",
        come: "Desde Yangshuo en autobús hasta Xingping y luego balsa con billete oficial; o crucero desde Guilin.",
        quando: "A primera hora, cuando se levanta la niebla.",
        tempo: "1-2 horas en balsa",
        consiglio: "El tramo de Xingping vale más que el crucero largo desde Guilin, que cuesta más y pasa horas entre colinas parecidas.",
      },
      {
        nome: "Río Yulong",
        testo: "Afluente del Li, más pequeño y tranquilo, entre arrozales, búfalos y puentes de piedra; el Puente del Dragón de Jade es uno de los más famosos. Se baja en balsas de bambú empujadas a mano con pértiga.",
        come: "En bici o bici eléctrica desde Yangshuo, por caminos rurales.",
        quando: "Jornada, en primavera u otoño.",
        tempo: "5 horas",
        consiglio: "Alquilar una bici e ir sin plan: siempre aparece un puente, un pueblo o un puesto de fruta.",
      },
      {
        nome: "Colina de Xianggong",
        testo: "Colina en la orilla oeste del Li, frente a Xingping, con un mirador sobre el meandro del río Li, rodeada de decenas de picos kársticos. Al amanecer la niebla llena los valles y las cimas asoman una a una.",
        come: "Taxi o coche desde Yangshuo o Xingping, luego una breve subida por escalones.",
        quando: "Amanecer.",
        tempo: "2 horas",
        consiglio: "Llegar antes del amanecer: las mejores terrazas se llenan pronto de fotógrafos con trípode.",
      },
      {
        nome: "Terrazas de Longji",
        testo: "Los arrozales en terrazas del Espinazo del Dragón, excavados en las montañas por los pueblos zhuang y yao. Se camina entre Ping'an y Dazhai, con miradores sobre arrozales que bajan en escalones hasta el fondo del valle.",
        come: "Tour o coche: unas 2 horas desde Guilin, más desde Yangshuo.",
        quando: "Mayo-junio con agua en los arrozales, septiembre-octubre con el arroz dorado.",
        tempo: "Jornada, mejor con una noche",
        consiglio: "Dormir en un pueblo de las terrazas: a primera hora se camina a solas.",
      },
    ],
    programmi: [
      { titolo: "2 días: Yangshuo", tappe: ["Día 1: Xingping en balsa, Yulong en bici","Día 2: amanecer en Xianggong, Longji"] },
    ],
    zone: [
      { nome: "Campo", perChi: "Quien quiera silencio", testo: "Mejor que West Street." },
    ],
    sapori: [
      { nome: "Pescado a la cerveza", testo: "Con cerveza y pimientos." },
      { nome: "Fideos de Guilin", testo: "En el desayuno." },
    ],
    attenzioni: [
      "Coger el crucero largo desde Guilin pensando que es la mejor opción.",
      "Quedarse solo en West Street: de noche es una calle de bares y karaokes a todo volumen.",
      "Ir en agosto: calor húmedo y lluvias frecuentes.",
      "Comprar el paseo en balsa a intermediarios en la calle, sin billete oficial.",
    ],
    esperienzeSlugs: ['fiume-li-zattera'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'El río Li con las balsas de bambú y los picos kársticos del condado de Yangshuo',
    immagine: '/images/cina/yangshuo.jpg',
  },
  {
    slug: 'hong-kong',
    paeseSlug: 'cina',
    ordine: 11,
    nome: 'Hong Kong',
    tipologia: ['città', 'panorami', 'gastronomia'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    introduzione:
      "Región administrativa especial con frontera, moneda, lengua vehicular y sistema legal propios: se entra y se sale con control de pasaportes como en otro país. Uno de los skylines más famosos del mundo, apoyado en una isla montañosa y en una península, con siete millones y medio de personas apretadas entre el mar y la roca.",
    percheAndarci:
      "La densidad vertical de Hong Kong no existe en ningún otro sitio, y a veinte minutos de los rascacielos hay senderos de montaña, playas y pueblos de pescadores. Ninguna otra ciudad del mundo pasa tan rápido de un extremo al otro.",
    cosaVedere: [
      'Victoria Peak, con el Peak Tram, el funicular que sube casi en vertical',
      'El puerto de Victoria desde el paseo marítimo de Tsim Sha Tsui, con el espectáculo de luces Symphony of Lights por la noche',
      'El Star Ferry, el ferri histórico que cruza el puerto por pocos céntimos',
      'El barrio de Sheung Wan y, a su lado, las escaleras mecánicas al aire libre de Central-Mid-Levels, las más largas del mundo',
      'El Gran Buda de Ngong Ping en la isla de Lantau, con el teleférico panorámico',
      'El pueblo de pescadores de Tai O, con las casas sobre pilotes',
      'Los mercados de Mong Kok, entre el de los pájaros, el de las flores y el nocturno de Temple Street',
    ],
    cosaFare: [
      'Subir a Victoria Peak con el tranvía histórico y bajar a pie por el sendero',
      'Cruzar el puerto en el Star Ferry al atardecer: en la ciudad es lo más económico, y lo más bonito',
      'Dim sum a la hora de comer en un local tradicional, con los carritos que pasan entre las mesas',
      "Dragon's Back, el sendero panorámico sobre la costa sur, a media hora del centro",
      'Jornada en Lantau entre teleférico, Gran Buda y Tai O',
    ],
    doveDormire:
      "Causeway Bay y Wan Chai en el lado de la isla, Tsim Sha Tsui en el lado de Kowloon: el metro conecta todo en pocos minutos y la vista sobre el puerto merece el gasto. Hong Kong tiene las habitaciones más pequeñas y más caras de todo el viaje: mejor saberlo desde la salida.",
    doveMangiare:
      "Es una de las capitales gastronómicas de Asia, y se puede recorrer en tres niveles. El dim sum a mediodía, que aquí es una institución y no una moda. Los cha chaan teng, las cafeterías locales de cocina híbrida anglocantonesa (tostadas francesas, té con leche, macarrones en caldo), donde se gastan pocos dólares. Y la restauración con estrellas, de las más densas del mundo. Para probar al menos una vez el ganso asado, el roast goose cantonés: está entre lo mejor que he comido en toda China.",
    comeArrivare:
      "Vuelo internacional a Hong Kong (HKG), uno de los principales hubs asiáticos, con el Airport Express que lleva al centro en 24 minutos. Desde la China continental: alta velocidad hasta West Kowloon (desde Cantón menos de una hora, desde Shanghái unas 8), ferri, o autobús por el puente Hong Kong-Zhuhai-Macao.",
    comeSpostarsi:
      "El MTR es de los mejores metros del mundo, con señalización bilingüe; la tarjeta Octopus sirve también para autobuses, ferris y tiendas. El tranvía de dos pisos de la isla, el «ding ding», cuesta pocos céntimos y es la forma más lenta y más agradable de cruzar la ciudad.",
    periodoMigliore:
      "octubre-diciembre es la mejor ventana, con aire seco y cielos despejados. El verano es caluroso, humedísimo y atravesado por tifones entre julio y septiembre; la primavera trae la bruma que borra la vista desde el Peak.",
    costi:
      "La ciudad más cara de todo el viaje, sobre todo por los alojamientos. Transportes y comida callejera siguen siendo económicos: el Star Ferry cuesta menos de medio euro y una comida en un cha chaan teng no llega a 10.",
    erroriDaEvitare: [
      'Olvidar que Hong Kong es una frontera en sí misma: al entrar desde la China continental se sale oficialmente del país, y volver significa una nueva entrada (sin visado para los italianos, pero el cómputo de los 30 días vuelve a empezar)',
      'Subir al Peak en un día de bruma: allí arriba solo cuenta la vista, y sin visibilidad la entrada está tirada',
      'Esperar que el Alipay o el WeChat Pay chinos funcionen en todas partes: aquí se usan otras aplicaciones, se paga con Octopus, tarjetas internacionales o efectivo en dólares de Hong Kong',
      'Considerarla una ciudad solo de rascacielos y saltarse Lantau, las islas y los senderos: es la mitad de su identidad',
    ],
    miaEsperienza:
      "Hong Kong descoloca a quien llega después de diez días de China continental, porque todo vuelve a funcionar como uno espera: carteles en inglés, Google que se abre sin VPN, colas ordenadas. El skyline es bellísimo y visto mil veces. Lo que me ha quedado es otra cosa: a media hora de metro y autobús del centro financiero se camina por una cresta con el mar debajo y ningún edificio a la vista. El Dragon's Back es un paseo fácil que nadie mete en el programa y vale tanto como el Peak. Sobre la subida a Victoria Peak conviene ser prácticos. Se va solo con el cielo limpio, y a última hora de la tarde la cola del tranvía puede superar la hora, mientras que el autobús que sube por el mismo lado no tiene cola. Lo más bonito cuesta menos de medio euro: cruzar el puerto en el Star Ferry a la hora azul, en la cubierta inferior, con los edificios que se encienden a ambos lados.",
    luoghi: [
      {
        nome: "Victoria Peak",
        testo: "La colina sobre Central, a unos 550 metros, con vistas al puerto, a Kowloon y al bosque de rascacielos. Se sube con el Peak Tram, el funicular inaugurado en 1888, por pendientes tan fuertes que los edificios parecen inclinados.",
        come: "Peak Tram desde la estación de Garden Road, en Central.",
        quando: "Con cielo limpio, a última hora de la tarde para ver la ciudad de día y de noche.",
        tempo: "2-3 horas",
        costo: "Peak Tram ida y vuelta 116 HK$; entrada combinada con la terraza Sky Terrace 428: 182 HK$ (tarifas desde el 29 de diciembre de 2025)",
        url: "https://www.thepeak.com.hk/",
        consiglio: "Dar la vuelta por Lugard Road, un sendero llano alrededor de la cima: la vista es la de la terraza, y es gratis.",
      },
      {
        nome: "Star Ferry",
        testo: "El ferry verde y blanco que desde 1888 cruza el puerto entre Tsim Sha Tsui y Central. La travesía es corta y es la forma más bonita y barata de ver el skyline desde el agua.",
        come: "Muelles de Tsim Sha Tsui y de Central; se paga con la tarjeta Octopus, en efectivo o en las máquinas. Trayecto 5 HK$ en la cubierta superior los laborables, 6,5 HK$ el fin de semana (2026).",
        quando: "Al atardecer o de noche.",
        tempo: "30 minutos",
        url: "https://www.starferry.com.hk/",
        consiglio: "Sentarse en la cubierta superior, del lado que mira a la isla.",
      },
      {
        nome: "Symphony of Lights",
        testo: "El espectáculo de luces y láser sobre los rascacielos de la isla de Hong Kong, con música, cada noche a las 20:00 durante unos diez minutos. Se ve desde el paseo marítimo de Tsim Sha Tsui, junto a la Avenue of Stars.",
        come: "Metro hasta Tsim Sha Tsui o East Tsim Sha Tsui, luego a pie por el paseo.",
        quando: "Cada noche a las 20:00; puede suspenderse con mal tiempo.",
        tempo: "1 hora",
        costo: "Gratuito",
        consiglio: "El espectáculo es breve: lo bonito es el paseo iluminado antes y después.",
      },
      {
        nome: "Dragon's Back",
        testo: "Un sendero por la cresta de la península de Shek O, en el sureste de la isla, con vistas al mar de China Meridional y a las playas. Es de dificultad media, unos 8,5 kilómetros, descubierto en la cresta, y termina bajando a la playa de Big Wave Bay.",
        come: "Metro hasta Shau Kei Wan, luego autobús 9 hasta la parada de To Tei Wan.",
        quando: "Por la mañana, en días no demasiado calurosos.",
        tempo: "unas 4 horas",
        consiglio: "Muestra otro Hong Kong, de verde y mar. Terminar con un baño en Big Wave Bay y llevar agua: en la cresta no hay sombra.",
      },
      {
        nome: "Sheung Wan y escaleras mecánicas",
        testo: "El sistema de escaleras mecánicas cubiertas Central-Mid-Levels, de unos 800 metros, sube de la ciudad baja a la colina atravesando Soho. Alrededor, en Sheung Wan, están las tiendas de hierbas medicinales y marisco seco y el templo de Man Mo.",
        come: "Metro hasta Central o Sheung Wan, luego a pie.",
        quando: "De día: las escaleras bajan a primera hora y suben desde media mañana hasta la noche.",
        tempo: "2 horas",
        consiglio: "Subir con las escaleras y bajar a pie por Hollywood Road, parando en el templo de Man Mo.",
      },
      {
        nome: "Dim sum",
        testo: "El almuerzo cantonés de pequeños platos al vapor y fritos, acompañados de té (yum cha). En los salones tradicionales los platos pasan en carritos y se elige mirando; en los locales más modernos se marca una hoja.",
        come: "En un salón tradicional: los más antiguos están en Central y Sheung Wan.",
        quando: "Desde primera hora hasta primera hora de la tarde.",
        tempo: "1 hora",
        consiglio: "Dejar la tapa de la tetera levantada o de lado: es la señal para pedir más agua caliente.",
      },
    ],
    programmi: [
      { titolo: "2 días: Hong Kong", tappe: ["Día 1: Star Ferry, Tsim Sha Tsui, Symphony of Lights","Día 2: Peak, Sheung Wan, Dragon's Back"] },
    ],
    zone: [
      { nome: "Tsim Sha Tsui", perChi: "Quien quiera vistas", testo: "Cara." },
      { nome: "Sheung Wan", perChi: "Quien quiera vida local", testo: "Céntrica." },
    ],
    sapori: [
      { nome: "Dim sum", testo: "Carritos." },
      { nome: "Cha chaan teng", testo: "Cafetería anglo-cantonesa." },
    ],
    attenzioni: [
      "Olvidar que entre Hong Kong y la China continental hay una frontera real, con control de pasaportes: comprobar las normas de entrada en China antes de volver.",
      "Subir al Peak con calima: solo se ve blanco.",
      "Esperar precios de China continental: dormir y comer cuesta como en una gran capital europea.",
      "Llevar pasaporte, tarjetas y dinero a la vista entre la multitud: los delitos violentos son raros, pero los carteristas existen.",
    ],
    esperienzeSlugs: ['star-ferry-victoria-peak'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'El skyline de la isla de Hong Kong al atardecer visto desde Victoria Harbour',
    immagine: '/images/cina/hong-kong.jpg',
  },
  {
    slug: 'macao',
    paeseSlug: 'cina',
    ordine: 12,
    nome: 'Macao',
    tipologia: ['città', 'cultura', 'gastronomia'],
    giorniConsigliati: '1-2 días, a menudo en el día desde Hong Kong',
    visitataPersonalmente: true,
    introduzione:
      "Cuatro siglos y medio de Portugal encajados en treinta kilómetros cuadrados en la desembocadura del río de las Perlas: iglesias barrocas, plazas con la calçada portuguesa en ondas, cocina macaense, y a doscientos metros los casinos más rentables del mundo, que facturan más que Las Vegas.",
    percheAndarci:
      "El centro histórico es patrimonio de la UNESCO y no se parece a nada más en Asia. Y el contraste entre las callejuelas coloniales y la franja de casinos del Cotai es una de las cosas más absurdas del viaje.",
    cosaVedere: [
      'Las ruinas de San Pablo, la fachada de la iglesia jesuita que quedó en pie sola tras el incendio de 1835',
      'El Largo do Senado, con el pavimento portugués en ondas y las fachadas pastel',
      'La Fortaleza do Monte y el Museo de Macao',
      'El barrio de Taipa Village, con las casas-museo de color pastel a lo largo de la Rua do Cunha',
      'El templo de A-Ma, el más antiguo de la ciudad, del que deriva el nombre Macao',
      'La franja del Cotai, con los casinos que reproducen Venecia, París y Londres a escala real',
    ],
    cosaFare: [
      'Caminar por el centro histórico UNESCO, que se hace todo a pie en media jornada',
      'Comer macaense, la cocina de fusión más antigua del mundo',
      'Velada en la franja del Cotai, aunque solo sea para ver la escala de la cosa',
      'Puenting desde la Macau Tower, 233 metros: el salto desde torre más alto del mundo',
    ],
    doveDormire:
      "La mayoría de los visitantes llega en el día desde Hong Kong, y es una elección sensata. Quien se queda encuentra los hoteles de los casinos en el Cotai a precios a menudo más bajos de lo que parece, porque el ingreso está en otra parte, y establecimientos más sencillos en la península histórica.",
    doveMangiare:
      "La cocina macaense es el motivo gastronómico para venir aquí: es la fusión entre portugués, cantonés y las rutas coloniales de África y de la India, y solo existe aquí. Para probar el galinha à africana, el minchi (carne picada con patatas y huevo), el bacalhau en sus versiones locales y los pastéis de nata, que en Macao llegaron desde Portugal y desde aquí se han difundido por toda Asia. La Rua do Cunha en Taipa es la calle adecuada para probar caminando.",
    comeArrivare:
      "Ferri rápido desde Hong Kong (aproximadamente una hora desde las terminales de Sheung Wan o Kowloon) o autobús por el puente Hong Kong-Zhuhai-Macao, el puente marítimo más largo del mundo, unos 40 minutos. Desde la China continental se entra por tierra por el paso de Gongbei, en Zhuhai. Macao tiene también su propio aeropuerto internacional.",
    comeSpostarsi:
      "A pie en el centro histórico. Los autobuses lanzadera gratuitos de los casinos conectan ferris, aeropuerto y Cotai, y son el medio que usan todos, también quien no juega. Taxis disponibles pero con colas largas los fines de semana.",
    periodoMigliore: 'octubre-diciembre, como Hong Kong. El verano es húmedo y azotado por los tifones.',
    costi:
      "Entradas casi todas gratuitas o simbólicas en el centro histórico; el coste real es el transporte desde Hong Kong (ferri de unos 160-200 dólares de Hong Kong por trayecto). Se paga en pataca, pero los dólares de Hong Kong se aceptan en todas partes a la par.",
    erroriDaEvitare: [
      'Ir solo por los casinos y saltarse el centro histórico, que es la parte que vale',
      'Olvidar que es una frontera: se sale de Hong Kong o de la China continental y se vuelve a entrar, con nuevo control de pasaportes en ambas direcciones',
      'Programarla en fin de semana, cuando llegan los autocares de la China continental y las colas en los pasos se vuelven larguísimas',
      'Dar por descontado que valga la pena pernoctar: para muchos es la excursión en el día perfecta desde Hong Kong',
    ],
    miaEsperienza:
      "Macao funciona por un solo motivo: el salto. Por la mañana se pasa por un centro histórico que podría ser una ciudad portuguesa del Alentejo, con el pavimento en ondas, las iglesias amarillas y las panaderías con los pastéis recién salidos del horno. Por la tarde un autobús gratuito te deja en veinte minutos delante de una reproducción a tamaño natural del Gran Canal, con los gondoleros cantando bajo un cielo pintado. Son dos sitios distintos a cuatro kilómetros uno de otro, y el sentido de la jornada es verlos el mismo día. El centro histórico se agota en media jornada: quien espera una ciudad que explorar se sorprenderá por las dimensiones. Más que las ruinas de San Pablo, siempre llenas de gente, merece Taipa Village, con su calle de casas pastel y los puestos de comida. Y merece la cocina macaense, que no se encuentra en ningún otro lugar del mundo.",
    luoghi: [
      {
        nome: "Ruinas de San Pablo",
        testo: "La fachada de piedra de la iglesia jesuita de Madre de Deus, construida a principios del siglo XVII y destruida por un incendio en 1835. Solo queda en pie el frente, en lo alto de una escalinata, con esculturas que mezclan símbolos cristianos y chinos. Es el símbolo del Centro Histórico de Macao, Patrimonio de la UNESCO desde 2005.",
        come: "A pie desde el Largo do Senado, en 10 minutos.",
        quando: "A primera hora, antes de los grupos.",
        tempo: "45 minutos",
        costo: "Acceso libre",
        url: "https://www.wh.mo/",
        consiglio: "Detrás de la fachada hay una pequeña cripta con el museo de arte sacro, que casi nadie visita.",
      },
      {
        nome: "Largo do Senado",
        testo: "La plaza principal de Macao, con el empedrado portugués en ondas blancas y negras y los edificios coloniales de color pastel. Alrededor están la iglesia de Santo Domingo, el Leal Senado y la Santa Casa da Misericórdia.",
        come: "A pie; autobús hasta Avenida de Almeida Ribeiro.",
        quando: "De día, y por la noche con las luces.",
        tempo: "30 minutos",
        consiglio: "Es el punto de partida: desde aquí se sube a pie hacia San Pablo y la fortaleza del Monte.",
      },
      {
        nome: "Fortaleza do Monte y Museo de Macao",
        testo: "La fortaleza jesuita del siglo XVII en la colina junto a San Pablo, con los cañones apuntando a la ciudad. Dentro está el Museo de Macao, que cuenta el encuentro entre China y Portugal, el comercio y la vida diaria de la ciudad.",
        come: "A pie desde San Pablo, con escaleras mecánicas y escalinata.",
        quando: "Museo abierto de 10:00 a 18:00, cerrado los lunes; gratis los martes y el día 15 de cada mes (2026).",
        tempo: "1,5 horas",
        url: "https://www.macaumuseum.gov.mo/",
        consiglio: "Subir a los baluartes aunque no se entre al museo: la vista sobre el centro histórico y los casinos es libre.",
      },
      {
        nome: "Taipa Village",
        testo: "El viejo pueblo de la isla de Taipa, con casas portuguesas de color pastel, iglesias y la Rua do Cunha llena de dulces y galletas. Las Casas-Museu da Taipa son cinco villas coloniales verdes asomadas al antiguo paseo marítimo.",
        come: "Autobús desde el centro de Macao o a pie desde los hoteles de Cotai.",
        quando: "Un día laborable.",
        tempo: "2 horas",
        consiglio: "Los pastéis de nata aquí son excelentes: comerlos calientes, recién salidos del horno.",
      },
      {
        nome: "Cotai",
        testo: "La franja de resorts-casino construida en terrenos ganados al mar entre Taipa y Coloane, con copias de Venecia, París y Londres. Es enorme y algo surrealista, pero vale una noche para entender la escala.",
        come: "Lanzaderas de los hoteles desde las terminales de ferry y la frontera.",
        quando: "Por la noche.",
        tempo: "2 horas",
        consiglio: "Se pasa de un resort a otro con las lanzaderas de los hoteles, casi sin salir al aire libre.",
      },
      {
        nome: "Templo de A-Ma",
        testo: "Uno de los templos más antiguos de Macao, de 1488, dedicado a la diosa de los marineros, de la que según la tradición viene el nombre de la ciudad. Pabellones y altares suben en terrazas por la colina, entre rocas talladas y espirales de incienso.",
        come: "Autobús hasta Barra, en la punta sur de la península.",
        quando: "Por la mañana, con el incienso encendido.",
        tempo: "45 minutos",
        costo: "Acceso libre",
        consiglio: "Combinarlo con un paseo por el cercano Largo do Lilau, uno de los rincones más antiguos de la ciudad portuguesa.",
      },
    ],
    programmi: [
      { titolo: "1 día: Macao", tappe: ["Centro histórico","Almuerzo macaense","Taipa","Cotai"] },
    ],
    zone: [
      { nome: "No hace falta dormir allí", perChi: "Excursión desde Hong Kong", testo: "Media jornada." },
    ],
    sapori: [
      { nome: "Galinha à africana", testo: "Pollo." },
      { nome: "Minchi", testo: "Carne con patatas y huevo." },
      { nome: "Pastéis de nata", testo: "Dulces." },
    ],
    attenzioni: [
      "Ver solo los casinos: el centro histórico es la razón para venir.",
      "Olvidar la frontera: entre Macao, Hong Kong y la China continental hay control de pasaportes.",
      "Ir en fin de semana o en fiestas chinas: el centro histórico se llena de visitantes de un día.",
      "Pagar sin mirar la moneda: la local es la pataca; el dólar de Hong Kong se acepta casi en todas partes, pero el cambio suele darse en patacas.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['cina-classica'],
    imageAlt: 'La fachada de las ruinas de San Pablo en el centro histórico de Macao',
    immagine: '/images/cina/macao.jpg',
  },
]
