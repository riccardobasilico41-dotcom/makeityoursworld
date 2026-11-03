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
    esperienzeSlugs: [],
    tripSlugs: ['cina-classica'],
    imageAlt: 'La fachada de las ruinas de San Pablo en el centro histórico de Macao',
    immagine: '/images/cina/macao.jpg',
  },
]
