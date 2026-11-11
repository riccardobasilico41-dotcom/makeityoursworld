import type { Destinazione } from '@/lib/types'

export const destinazioniGiordania: Destinazione[] = [
  {
    slug: 'amman',
    paeseSlug: 'giordania',
    ordine: 1,
    nome: 'Amán',
    tipologia: ['città', 'storia'],
    giorniConsigliati: '1-2 días, como llegada/regreso',
    visitataPersonalmente: true,
    introduzione: 'La capital, punto de llegada y de regreso del viaje, con la Ciudadela, el Teatro Romano y la vida nocturna de Rainbow Street.',
    percheAndarci: 'Es la puerta de entrada natural al país y, a la vuelta del desierto y del Mar Rojo, una última jornada de cultura y de ciudad antes del vuelo.',
    cosaVedere: ['La Ciudadela de Amán', 'El Teatro Romano', 'Rainbow Street'],
    cosaFare: [
      'Cena de bienvenida en Zajal (Prince Mohammed Street, unos 15 JOD)',
      'Visita a la Ciudadela y al Teatro Romano',
      'Comida en el Bazaar',
      'Cooking class y curso de caligrafía árabe',
      'Velada en Talet Al Jabal o C-Ling en Rainbow Street',
    ],
    doveDormire:
      'Dormí en un hotel cualquiera, y no apunté el nombre. Conviene alojarse en el centro, para moverse a pie entre la Ciudadela, el Teatro Romano y Rainbow Street.\n\nEconómicos: Farah Hotel & Hostel, Cliff Hostel, ambos a dos pasos del Teatro Romano · gama media: Toledo Hotel (cerca de Rainbow Street), Kaya Hotel Amman (barrio de Abdali, spa interior) · más lujosos: Fairmont Amman, W Amman.',
    doveMangiare: 'Zajal para la cena de bienvenida; comida en el Bazaar al regreso.',
    usciteSerali: 'Talet Al Jabal o C-Ling, en Rainbow Street.',
    comeArrivare: "Se aterriza en el Queen Alia (AMM), a unos 35 km al sur de la ciudad. El autobús Sariyah Airport Express cuesta unos 3,50 JOD (unos 4 €), con billete a bordo, y llega al 7th Circle y a la estación de Tabarbour en 45-60 minutos, cada 30 minutos de día y con servicios más espaciados de noche. El taxi amarillo oficial, de la fila frente a llegadas, cuesta unos 25-30 JOD hasta el centro; Uber y Careem unos 15-25 JOD. Hay que evitar a los conductores que abordan a los pasajeros dentro de la terminal. Para el vuelo de regreso conviene llegar tres horas antes: los controles de seguridad empiezan ya en la entrada de la terminal.",
    comeSpostarsi: 'Transfers organizados, a pie en el centro.',
    periodoMigliore: 'diciembre-enero',
    costi: "Presupuesto bajo unos 40-60 € al día por persona (hostal u hotel sencillo en Downtown, falafel y hummus, autobús y muchos trayectos a pie); medio 90-140 € (hotel en Jabal Amman, restaurantes, taxis y apps); alto desde 220 € (hoteles internacionales en Abdali, cenas en terraza, conductor). Cena en Zajal unos 15 JOD; Ciudadela 3 JOD y Teatro Romano 2 JOD, ambos incluidos en el Jordan Pass (70-80 JOD); Museo de Jordania 5 JOD; buggy en el desierto cerca de Amán 40 JOD (opción alternativa del Día 7). Un dinar vale unos 1,2 €.",
    erroriDaEvitare: [],
    miaEsperienza:
      'La Ciudadela, con la vista sobre toda la ciudad vieja, fue una parada bonita para cerrar el viaje antes del vuelo de regreso, aunque no es lo que más recuerdo de Jordania.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Ciudadela (Jabal al-Qala'a)",
        "testo": "La colina que domina la ciudad, con restos de poblamiento desde el neolítico. Arriba quedan las columnas del gran templo romano llamado «de Hércules» (siglo II), el palacio omeya construido hacia el año 735 y el museo arqueológico. Desde el borde se ve todo Amán, con el teatro romano a los pies.",
        "come": "Desde el centro se sube en taxi o a pie, con una cuesta empinada. Se visita por libre, los paneles están en inglés.",
        "quando": "Abierta de 8 a 17 (2026). La última hora de la tarde tiene la mejor luz sobre el templo; a mediodía en verano no hay sombra.",
        "tempo": "1-1,5 horas",
        "costo": "3 JOD, unos 3,5 €, para extranjeros, o incluida en el Jordan Pass (2026)",
        "orari": "8-17 (2026)",
        "lat": 31.9547,
        "lng": 35.9343,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Subir en taxi y bajar a pie hacia el teatro romano: es cuesta abajo y se llega al centro."
      },
      {
        "nome": "Teatro Romano",
        "testo": "Teatro del siglo II, de la época de Antonino Pío, excavado en la ladera, con unas 6.000 plazas. A los lados de la entrada hay dos pequeños museos, el del folclore y el de las tradiciones populares. Se sube por las gradas y se mira la plaza de abajo.",
        "come": "En pleno centro, a pie desde los zocos y Rainbow Street.",
        "quando": "Abierto de 8 a 17 (2026). Mañana o última hora de la tarde, cuando las gradas están a la sombra.",
        "tempo": "45 minutos",
        "costo": "2 JOD, unos 2,5 €, con los dos museos, o incluido en el Jordan Pass (2026)",
        "orari": "8-17 (2026)",
        "lat": 31.95169,
        "lng": 35.93931,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Museo de Tradiciones Populares",
        "testo": "Dos pequeños museos en las alas del Teatro Romano: el de tradiciones populares, con trajes tradicionales, joyas y objetos de casa, y el del folclore, dedicado a la vida beduina y de aldea. Se ven en media hora, en la misma visita al teatro.",
        "come": "A los lados de la entrada del Teatro Romano.",
        "quando": "Junto con el teatro.",
        "tempo": "30-45 minutos",
        "costo": "Incluido en la entrada del teatro y en el Jordan Pass (2026)",
        "orari": "8-17.15 (2026)",
        "lat": 31.95169,
        "lng": 35.93931,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Downtown y los zocos",
        "testo": "El centro viejo alrededor de la mezquita al-Husseini: tiendas de especias, cafés, dulces, ropa, oro. Es la parte más viva y auténtica de la capital, mucho más que los barrios nuevos.",
        "come": "A pie desde el teatro romano, en pocos minutos.",
        "quando": "De día y hasta la noche. El viernes por la mañana muchas tiendas abren tarde.",
        "tempo": "2 horas",
        "consiglio": "Parar para un kunafa caliente y para falafel y hummus en uno de los locales históricos del centro."
      },
      {
        "nome": "Mezquita al-Husseini",
        "testo": "La mezquita principal del centro antiguo y el punto de referencia de Downtown: a su alrededor se abren los zocos, el mercado de fruta y las calles de las joyerías.",
        "come": "A pocos minutos a pie del Teatro Romano. Quien no es musulmán la mira desde fuera o pregunta en la entrada si puede pasar, fuera de las horas de oración.",
        "quando": "Fuera de las horas de oración, evitando el mediodía del viernes.",
        "tempo": "15 minutos",
        "lat": 31.9497,
        "lng": 35.9347
      },
      {
        "nome": "Ninfeo romano",
        "testo": "La gran fuente pública de la antigua Filadelfia, del siglo II, a dos pasos del teatro y de la mezquita al-Husseini. Quedan los arcos y las hornacinas de la fachada, en medio del tráfico del centro.",
        "come": "A pie, entre el Teatro Romano y la mezquita al-Husseini.",
        "quando": "De día, pasando por Downtown.",
        "tempo": "15 minutos",
        "lat": 31.95033,
        "lng": 35.93617
      },
      {
        "nome": "Rainbow Street",
        "testo": "Calle peatonal del barrio de Jabal Amman, con cafés, restaurantes con terraza, librerías y tiendas de artesanía. Se viene por la noche, cuando se llena de jóvenes.",
        "come": "Taxi desde el centro o a pie desde el teatro romano, cuesta arriba.",
        "quando": "Después del atardecer, sobre todo el jueves y el viernes por la noche.",
        "tempo": "2-3 horas",
        "lat": 31.95062,
        "lng": 35.92311,
        "consiglio": "Elegir un local con terraza sobre la ladera: la vista de la ciudad iluminada es lo mejor."
      },
      {
        "nome": "Museo de Jordania",
        "testo": "El museo nacional, en el barrio de Ras al-Ain, con fragmentos de los Manuscritos del Mar Muerto y las estatuas de 'Ain Ghazal, entre las figuras humanas de gran tamaño más antiguas. El recorrido va de la prehistoria a la época moderna y es el lugar adecuado para entender el país antes o después del viaje.",
        "come": "Taxi o Uber desde el centro, pocos minutos.",
        "quando": "La mañana del día de salida, si el vuelo es por la tarde.",
        "tempo": "1,5-2 horas",
        "costo": "5 JOD, unos 6 €, para no jordanos (2026)",
        "lat": 31.94565,
        "lng": 35.92652,
        "url": "https://jordanmuseum.jo"
      },
      {
        "nome": "Mezquita del Rey Abdalá I",
        "testo": "La mezquita de la gran cúpula azul, construida a finales de los años ochenta y dedicada al fundador del reino. Es de las mezquitas de Amán más acostumbradas a los visitantes no musulmanes.",
        "come": "Taxi desde el centro, hacia Abdali. Se entra con brazos y piernas cubiertos; a las mujeres se les pide cubrirse el pelo.",
        "quando": "Fuera de las horas de oración; el viernes evitar el mediodía.",
        "tempo": "30-45 minutos",
        "lat": 31.9616,
        "lng": 35.9131
      },
      {
        "nome": "Jabal al-Weibdeh",
        "testo": "Uno de los barrios más antiguos de la ciudad, en la colina frente a la Ciudadela, con casas de piedra de la primera mitad del siglo XX, galerías y cafés frecuentados por artistas y estudiantes. Alrededor de Paris Circle se pasa una tarde sin plan.",
        "come": "A pie cuesta arriba desde Downtown, o en taxi.",
        "quando": "Tarde y noche.",
        "tempo": "1-2 horas",
        "lat": 31.95556,
        "lng": 35.92778
      },
      {
        "nome": "Darat al Funun",
        "testo": "Un centro de arte árabe contemporáneo en varias villas históricas de Jabal al-Weibdeh, con exposiciones, un jardín en terrazas y los restos de una iglesia bizantina. Es uno de los lugares más tranquilos de la ciudad, con vistas a Downtown.",
        "come": "A pie desde Jabal al-Weibdeh; la entrada principal está en Nadeem al Mallah Street.",
        "quando": "Por la tarde, con la luz sobre el jardín.",
        "tempo": "1 hora",
        "orari": "De sábado a jueves 10-19; cerrado los viernes, en agosto y los festivos; en Ramadán cierra a las 15",
        "url": "https://daratalfunun.org"
      },
      {
        "nome": "Abdali y el Boulevard",
        "testo": "El barrio nuevo de rascacielos y centros comerciales, con el Boulevard peatonal lleno de restaurantes y tiendas de cadena. No tiene el carácter del centro antiguo, pero muestra la otra cara de la capital.",
        "come": "Taxi o Uber desde el centro, unos diez minutos.",
        "quando": "Por la noche.",
        "tempo": "1-2 horas",
        "lat": 31.96444,
        "lng": 35.90639
      },
      {
        "nome": "Museo Real del Automóvil",
        "testo": "La colección de coches y motos de la familia real, desde vehículos de los años veinte hasta los del rey Hussein, gran aficionado al motor. Gusta incluso a quien no sigue los coches, porque cuenta la historia del país a través de sus reyes.",
        "come": "Taxi o Uber: está en el parque Rey Hussein, al oeste del centro.",
        "quando": "En las horas de calor, a cubierto.",
        "tempo": "1 hora",
        "costo": "5 JOD, unos 6 €; 7 JOD con audioguía (2026)",
        "lat": 31.9842,
        "lng": 35.8257
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Ciudadela y museo arqueológico",
          "Bajada a pie al Teatro Romano",
          "Almuerzo y paseo por Downtown y los zocos",
          "Atardecer y cena en Rainbow Street"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Ciudadela, Teatro Romano con sus dos museos, Ninfeo y zocos de Downtown",
          "Noche: cena y locales en Rainbow Street",
          "Día 2: Museo de Jordania por la mañana, luego la Mezquita del Rey Abdalá I",
          "Tarde: Jabal al-Weibdeh y Darat al Funun (cerrado los viernes)",
          "Noche: Abdali Boulevard, o de vuelta al centro para la kunafa"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: excursión a Jerash por la mañana y regreso por la tarde",
          "Como alternativa: Madaba y el Monte Nebo, o la tarde en el Mar Muerto con baño al atardecer"
        ]
      }
    ],
    zone: [
      {
        "nome": "Downtown / Al-Balad",
        "perChi": "quien quiere estar entre zocos y teatro",
        "testo": "Se va a pie a casi todo y se come muy bien por poco. De noche es ruidoso y menos cuidado, y los hoteles son sencillos.",
        "fascia": "25-70 €"
      },
      {
        "nome": "Jabal Amman / Rainbow Street",
        "perChi": "quien quiere locales y un barrio agradable",
        "testo": "Más tranquilo, con restaurantes y cafés cerca. Las calles son empinadas y los hoteles cuestan más.",
        "fascia": "70-140 €"
      },
      {
        "nome": "Abdali",
        "perChi": "quien viaja por trabajo o quiere hoteles modernos",
        "testo": "Zona nueva de rascacielos y cadenas internacionales. Cómodo y cuidado, pero sin carácter.",
        "fascia": "100-250 €"
      }
    ],
    sapori: [
      {
        "nome": "Mansaf",
        "testo": "El plato nacional: cordero cocido en jameed, un yogur seco y salado, servido sobre arroz con piñones. Se come en restaurantes tradicionales y en las casas."
      },
      {
        "nome": "Falafel y hummus",
        "testo": "Desayuno y almuerzo rápido en los locales históricos de Downtown. Se come sentado, con pan caliente, cebolla y menta."
      },
      {
        "nome": "Kunafa",
        "testo": "Dulce de queso fundido con pasta fina y almíbar, caliente, cortado al momento en las tiendas del centro."
      },
      {
        "nome": "Maqluba",
        "testo": "Arroz, pollo o cordero y verduras cocidos en una olla y volteados al servir."
      }
    ],
    attenzioni: [
      "Los taxis amarillos tienen taxímetro: hacer que lo enciendan o acordar el precio antes de subir. Uber y Careem funcionan y quitan el problema.",
      "Rainbow Street y el centro son seguros, pero a mediodía en verano el sol es fuerte y en la Ciudadela no hay sombra.",
      "En Jordania el viernes es el día de descanso: muchas tiendas abren tarde y los museos pueden tener horarios reducidos.",
      "El Jordan Pass (70, 75 u 80 JOD con 1, 2 o 3 días consecutivos en Petra, 2026) se compra online antes de llegar: cubre el visado turístico si se pasan al menos dos noches e incluye la entrada a más de 40 sitios.",
      "Tensiones en la región: el gobierno británico (octubre de 2026) avisa del riesgo de escaladas repentinas, posibles cancelaciones de vuelos y cierres del espacio aéreo, y desaconseja cualquier viaje a menos de 3 km de la frontera siria. Consultar las recomendaciones oficiales de viaje antes de salir."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Jerash",
        "distanza": "aproximadamente 1 hora en coche",
        "come": "Coche con conductor, taxi para el día o excursión organizada.",
        "testo": "Una de las ciudades romanas mejor conservadas fuera de Italia, con el foro oval, el cardo con columnas y los dos teatros. La entrada está incluida en el Jordan Pass; conviene llegar pronto, antes de los grupos."
      },
      {
        "nome": "Madaba y Monte Nebo",
        "distanza": "Madaba unos 45 minutos, el Monte Nebo media hora más",
        "come": "Coche o taxi para el día; combina bien con el Mar Muerto.",
        "testo": "Madaba es la ciudad de los mosaicos, con el mapa bizantino de Tierra Santa en la iglesia de San Jorge; el Monte Nebo tiene la basílica de los mosaicos y la vista sobre el valle del Jordán. Parque arqueológico de Madaba 3 JOD, Monte Nebo 3 JOD."
      },
      {
        "nome": "Mar Muerto",
        "distanza": "aproximadamente 1 hora en coche",
        "come": "Coche o taxi; muchos resorts venden la entrada de día a playa y piscinas.",
        "testo": "Se flota en el agua hipersalina, en el punto más bajo de la tierra, y se mira el atardecer sobre las colinas de Cisjordania. No mojarse la cara ni los ojos y no entrar en el agua con cortes o recién afeitado."
      },
      {
        "nome": "Castillos del desierto",
        "distanza": "al este de Amán, media jornada larga",
        "come": "En coche con conductor o de alquiler: es lo más cómodo.",
        "testo": "Qasr al-Kharrana, Qusayr Amra con sus frescos omeyas y el fuerte de Azraq, en el desierto oriental. Entradas 3 JOD o incluidas en el Jordan Pass; Kharrana abre de 8 a 17."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Amán?",
        "risposta": "Un día basta para la Ciudadela, el Teatro Romano, Downtown y Rainbow Street. Con dos se añaden el Museo de Jordania y Jabal al-Weibdeh; con tres se usa la ciudad como base para Jerash o el Mar Muerto."
      },
      {
        "domanda": "¿Merece la pena el Jordan Pass?",
        "risposta": "Casi siempre: cuesta 70, 75 u 80 JOD según los días en Petra (2026), cubre la tasa del visado para quien se queda al menos dos noches completas e incluye la entrada a más de 40 sitios, entre ellos la Ciudadela y el Teatro Romano. Se compra en línea antes de llegar."
      },
      {
        "domanda": "¿Cómo se va del aeropuerto al centro de Amán?",
        "risposta": "El autobús Sariyah Airport Express cuesta unos 3,50 JOD y llega al 7th Circle y a Tabarbour en 45-60 minutos; el taxi amarillo oficial cuesta unos 25-30 JOD, Uber y Careem unos 15-25 JOD."
      },
      {
        "domanda": "¿Dónde conviene alojarse en Amán?",
        "risposta": "Downtown para gastar poco y moverse a pie entre zocos y teatro; Jabal Amman, alrededor de Rainbow Street, para un barrio más tranquilo con restaurantes; Abdali para hoteles modernos y cadenas internacionales."
      },
      {
        "domanda": "¿Qué cambia el viernes en Amán?",
        "risposta": "El viernes es el día de descanso: muchas tiendas del centro abren solo después de la oración del mediodía, Darat al Funun está cerrado y conviene evitar las mezquitas a esa hora."
      },
      {
        "domanda": "¿Es Amán una buena base para excursiones de un día?",
        "risposta": "Sí: Jerash y el Mar Muerto están a aproximadamente una hora, Madaba y el Monte Nebo algo más, y se vuelve por la noche. Para Petra y Wadi Rum conviene trasladarse y dormir allí."
      }
    ],
    esperienzeSlugs: ['cittadella-amman'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'Un gato blanco y naranja avanza hacia la cámara en las colinas de Amán, con los edificios de la ciudad al fondo',
    immagine: '/images/giordania/amman-gatto-skyline-riccardo.jpg',
  },
  {
    slug: 'jerash',
    paeseSlug: 'giordania',
    ordine: 2,
    nome: 'Jerash',
    tipologia: ['storia', 'archeologia'],
    giorniConsigliati: 'media jornada',
    visitataPersonalmente: true,
    introduzione: 'Una de las ciudades romanas mejor conservadas del mundo fuera de Italia, con su foro oval, el cardo con columnas y los dos teatros.',
    percheAndarci: 'Está en la carretera entre Amán y el Mar Muerto y merece la parada por sí misma: es mucho más bonita de lo que se espera de una parada «de paso».',
    cosaVedere: ['El Foro Oval', 'El Cardo con columnas', 'Los dos teatros romanos'],
    cosaFare: ['Visita guiada al yacimiento arqueológico'],
    doveDormire: 'No pernocté aquí: parada de paso entre Amán y el Mar Muerto.',
    doveMangiare: 'No tengo direcciones que señalar: nos detuvimos sobre todo para la visita.',
    comeArrivare: "Aproximadamente 1h de transfer desde Amán, con parada para comprar alcohol por el camino. Jerash está a unos 50 km al norte de la capital: se llega en coche de alquiler, en taxi por día o con una excursión organizada. El aparcamiento y la taquilla están junto al Arco de Adriano, en la entrada sur del yacimiento.",
    comeSpostarsi: 'A pie dentro del yacimiento arqueológico.',
    periodoMigliore: 'mañana, antes del calor y de los grupos organizados',
    costi: "Entrada incluida en el Jordan Pass. Sin pase la entrada cuesta 10 JOD (unos 12 €), museo incluido (2026). Presupuesto bajo unos 40-60 € al día por persona (minibús o taxi compartido desde Amán, falafel y hummus); medio 80-120 € (taxi por día con Ajloun, almuerzo en restaurante); alto desde 180 € (conductor privado y guía).",
    erroriDaEvitare: [],
    miaEsperienza:
      'Jerash fue una bonita sorpresa: una de las ciudades romanas mejor conservadas que he visto nunca, con el cardo con columnas que se pierde de vista. Mucho más que una parada de paso.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Arco de Adriano e Hipódromo",
        "testo": "La entrada monumental del sur, construida para la visita del emperador Adriano en 129-130. Un poco más allá está el hipódromo, con capacidad para unos 15.000 espectadores en las carreras de carros.",
        "come": "El aparcamiento está junto al arco; la taquilla queda cerca.",
        "quando": "Abierto de 8 a 17 (2026). Mejor a primera hora, antes de los grupos.",
        "tempo": "30 minutos",
        "costo": "10 JOD (unos 12 €) para extranjeros, museo incluido; incluido en el Jordan Pass (2026)",
        "orari": "Todos los días de 8 a 17 h (2026).",
        "lat": 32.27222,
        "lng": 35.89111,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Foro Oval y Cardo Máximo",
        "testo": "La plaza oval rodeada de columnas jónicas y, desde allí, la larga calle columnada que cruza la ciudad antigua.",
        "come": "Se recorre a pie de sur a norte.",
        "quando": "A primera hora y al final de la tarde por la luz sobre las columnas.",
        "tempo": "1 hora",
        "costo": "Incluido en la entrada de Jerash",
        "orari": "Con el yacimiento, de 8 a 17 h.",
        "lat": 32.27748,
        "lng": 35.89072,
        "consiglio": "Mirar el empedrado del cardo: las piedras siguen siendo las originales y se ven los surcos que dejaron los carros."
      },
      {
        "nome": "Teatro Sur y Templo de Artemisa",
        "testo": "El teatro grande, con más de 3.000 asientos, donde la voz se oye en todas las gradas hablando desde el centro de la orquesta, y a menudo tocan gaitas y tambores; después el santuario de Artemisa en la parte más alta, con columnas que se ven de lejos.",
        "come": "Desde el foro se sube al teatro y luego al templo en la colina.",
        "quando": "Media mañana, cuando la luz es alta y el teatro resuena.",
        "tempo": "1 hora",
        "costo": "Incluido en la entrada de Jerash",
        "orari": "Con el yacimiento, de 8 a 17 h.",
        "lat": 32.27669,
        "lng": 35.88945
      },
      {
        "nome": "Hipódromo",
        "testo": "La pista de carreras de carros, de casi 250 metros, justo después del Arco de Adriano. Las gradas se han reconstruido en parte y se camina por la propia pista.",
        "come": "A pie desde el Arco de Adriano, a la izquierda antes de la taquilla.",
        "quando": "Al principio de la visita, por la mañana.",
        "tempo": "20 minutos",
        "costo": "Incluido en la entrada de Jerash",
        "orari": "Con el yacimiento, de 8 a 17 h.",
        "lat": 32.27297,
        "lng": 35.89109
      },
      {
        "nome": "Templo de Zeus",
        "testo": "El santuario en la colina sobre el Foro Oval, reconstruido en el siglo II sobre un lugar de culto más antiguo. Quedan el podio, algunas columnas y la vista desde arriba de la plaza y el cardo.",
        "come": "Desde el Foro Oval se sube a pie por una rampa corta, a la izquierda de la plaza.",
        "quando": "Por la mañana, antes del Teatro Sur que está al lado.",
        "tempo": "20 minutos",
        "costo": "Incluido en la entrada de Jerash",
        "orari": "Con el yacimiento, de 8 a 17 h.",
        "lat": 32.2768,
        "lng": 35.89033
      },
      {
        "nome": "Ninfeo",
        "testo": "La gran fuente monumental del cardo, dedicada a las ninfas y construida en el año 191, con dos órdenes de hornacinas y el estanque abajo. Estaba revestida de mármol y el agua salía por cabezas de león.",
        "come": "En el cardo, a medio camino entre el Foro Oval y el Teatro Norte.",
        "quando": "Por la tarde, con el sol en la fachada.",
        "tempo": "15 minutos",
        "costo": "Incluido en la entrada de Jerash",
        "orari": "Con el yacimiento, de 8 a 17 h.",
        "lat": 32.28057,
        "lng": 35.89221
      },
      {
        "nome": "Catedral e iglesias bizantinas",
        "testo": "Detrás del Ninfeo se sube a la catedral del siglo IV y, un poco más allá, a la iglesia de San Teodoro y al grupo de iglesias con suelos de mosaico. Muestran la ciudad cristiana que sustituyó a la romana.",
        "come": "Por la escalinata junto al Ninfeo, a pie.",
        "quando": "Media mañana o por la tarde.",
        "tempo": "30-45 minutos",
        "costo": "Incluido en la entrada de Jerash",
        "orari": "Con el yacimiento, de 8 a 17 h.",
        "lat": 32.28056,
        "lng": 35.89164
      },
      {
        "nome": "Teatro Norte",
        "testo": "El teatro pequeño, inaugurado en el año 165 y ampliado después, que servía también para las reuniones del consejo de la ciudad. En las filas más bajas aún se leen nombres griegos grabados en la piedra.",
        "come": "Al final del cardo, girando a la izquierda por el decumano norte.",
        "quando": "Al final de la visita, por la tarde, con menos gente.",
        "tempo": "20 minutos",
        "costo": "Incluido en la entrada de Jerash",
        "orari": "Con el yacimiento, de 8 a 17 h.",
        "lat": 32.2826,
        "lng": 35.89221
      }
    ],
    programmi: [
      {
        "titolo": "Medio día",
        "tappe": [
          "Arco de Adriano e Hipódromo",
          "Foro Oval",
          "Cardo Máximo",
          "Teatro Sur",
          "Templo de Artemisa"
        ]
      },
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Jerash a la hora de apertura, del Arco de Adriano al Teatro Norte",
          "Almuerzo en la ciudad moderna",
          "Tarde: Castillo de Ajloun",
          "Regreso a Amán para cenar"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Jerash y Castillo de Ajloun",
          "Noche en Amán o en Ajloun",
          "Día 2: Umm Qais, con la vista sobre el lago de Tiberíades",
          "Regreso a Amán"
        ]
      }
    ],
    zone: [
      {
        "nome": "Amán",
        "perChi": "quien la visita en el día",
        "testo": "Jerash está a unos 50 km de Amán, así que se va con conductor o en tour. Dormir en la capital es más cómodo.",
        "fascia": "25-140 €"
      },
      {
        "nome": "Ciudad de Jerash",
        "perChi": "quien quiere verla al amanecer",
        "testo": "Unos pocos hoteles sencillos cerca del sitio, útiles para entrar a la apertura antes de los grupos."
      },
      {
        "nome": "Ajloun",
        "perChi": "quien añade el castillo y el norte",
        "testo": "Pequeña ciudad en las colinas boscosas a unos 25 km de Jerash, con algunos hoteles y casas de huéspedes sencillos. Práctica para dormir entre Jerash y Umm Qais."
      }
    ],
    sapori: [
      {
        "nome": "Falafel y hummus",
        "testo": "Cerca del sitio hay bocadillos calientes y platos de garbanzos para un almuerzo rápido."
      },
      {
        "nome": "Mansaf",
        "testo": "El plato de cordero con arroz y yogur salado; en los restaurantes de la ciudad moderna lo sirven todo el año."
      },
      {
        "nome": "Té de salvia",
        "testo": "En muchos quioscos lo sirven con azúcar y hojas frescas."
      },
      {
        "nome": "Pan árabe caliente",
        "testo": "Recién hecho en los hornos de barrio, con zatar y aceite."
      }
    ],
    attenzioni: [
      "Algunos vendedores ofrecen guías improvisados en la entrada: acordar el precio antes, o prescindir y leer los paneles.",
      "En el sitio no hay sombra: llevar gorra, agua y zapatos cerrados, las piedras son irregulares.",
      "Los puestos de la salida venden recuerdos a precios inflados: regatear siempre."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Castillo de Ajloun",
        "distanza": "unos 25 km, 40 minutos en coche",
        "come": "En coche o taxi hacia el oeste; se combina con Jerash en el mismo día.",
        "testo": "La fortaleza ayubí de finales del siglo XII, en lo alto de una colina con vista al valle del Jordán. Entrada 3 JOD (unos 3,60 €), museo incluido, o con el Jordan Pass; abierto de 8 a 17 h."
      },
      {
        "nome": "Umm Qais (Gadara)",
        "distanza": "unos 80 km, 1 hora y media en coche",
        "come": "En coche hacia el norte pasando por Irbid; con Jerash ocupa un día entero.",
        "testo": "La ciudad grecorromana de Gadara, de basalto negro, en el extremo noroeste del país, con vista al lago de Tiberíades y a los Altos del Golán. Abierta de 8 a 17 h, incluida en el Jordan Pass."
      },
      {
        "nome": "Amán",
        "distanza": "unos 50 km, 1 hora en coche",
        "come": "Coche, taxi o excursión; muchos visitan Jerash en el día desde la capital.",
        "testo": "La Ciudadela, el Teatro Romano y Rainbow Street. Es la base más cómoda para dormir, con hoteles de todos los precios."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuánto tiempo hace falta para visitar Jerash?",
        "risposta": "Tres o cuatro horas bastan para el recorrido del Arco de Adriano al Teatro Norte. Con media jornada más se añade el Castillo de Ajloun."
      },
      {
        "domanda": "¿Cuánto cuesta la entrada a Jerash?",
        "risposta": "10 JOD (unos 12 €) para extranjeros, museo incluido (2026). Con el Jordan Pass la entrada ya está incluida."
      },
      {
        "domanda": "¿Se puede ir a Jerash en el día desde Amán?",
        "risposta": "Sí, son unos 50 km y una hora de carretera. Se va en coche, en taxi por día o en excursión, y se vuelve para cenar."
      },
      {
        "domanda": "¿Cuál es la mejor hora?",
        "risposta": "La apertura a las 8: hay menos gente y menos calor. En el yacimiento casi no hay sombra, así que en verano después de las 11 cuesta."
      },
      {
        "domanda": "¿Hace falta guía en Jerash?",
        "risposta": "No es obligatoria: los paneles explican los monumentos principales. Un guía ayuda a entender la ciudad, pero hay que acordar el precio antes."
      },
      {
        "domanda": "¿Qué se combina con Jerash en el mismo día?",
        "risposta": "El Castillo de Ajloun, a unos 40 minutos. Con un día más se puede llegar a Umm Qais, en el extremo norte."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'El cardo con columnas de Jerash entre prados verdes, con la ciudad moderna al fondo, Jordania',
    immagine: '/images/giordania/jerash-cardo-riccardo.jpg',
  },
  {
    slug: 'mar-morto',
    paeseSlug: 'giordania',
    ordine: 3,
    nome: 'Mar Muerto',
    tipologia: ['natura', 'relax'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: 'Se flota en las aguas hipersalinas más bajas de la Tierra, y al atardecer, con las colinas de Cisjordania al fondo, es todavía más bonito.',
    percheAndarci: 'Es una experiencia física que no se puede repetir en otro sitio, y una pausa relajada entre Jerash y la parte más intensa del viaje.',
    cosaVedere: ['El atardecer sobre las colinas de Cisjordania'],
    cosaFare: [
      'Baño en las aguas hipersalinas al atardecer',
      'Relax en el resort',
      'Cena en Madaba (Haret Jdoudna o Hikayet Sitti)',
      'Copa después de cenar en el Saint John Sky Bar o en el bar del Grand Hotel Madaba',
    ],
    doveDormire:
      'Dormí en el Holiday Inn Resort Dead Sea by IHG. Las reseñas online (Tripadvisor, unas 5.600, media 4/5) lo describen como un resort de gama media-alta con personal atento, tres piscinas, playa privada y buffet abundante; los defectos más citados son los precios altos de comida y bebida, algún problema de mantenimiento en las habitaciones y la prohibición de llevar comida de fuera.\n\nEconómicos: Ramada Resort by Wyndham Dead Sea, O Beach Hotel & Resort (acceso directo al mar a una fracción del precio) · gama media: Dead Sea Spa Hotel, Crowne Plaza Jordan Dead Sea Resort & Spa (la franja del Holiday Inn) · más lujosos: Hilton Dead Sea Resort & Spa, Kempinski Hotel Ishtar Dead Sea.',
    doveMangiare: 'Haret Jdoudna o Hikayet Sitti en Madaba; copa después de cenar en el bar del Grand Hotel Madaba o en el Saint John Sky Bar.',
    comeArrivare: "Aproximadamente 1h30 de transfer desde Jerash. Desde Amán la carretera baja durante una hora hasta los resorts de Sweimeh, en la orilla noreste, donde están casi todos los hoteles y las playas equipadas. No hay autobuses regulares cómodos: se va en coche de alquiler, en taxi o con el traslado del hotel. Madaba y el Monte Nebo están a 40 minutos de subida, el Lugar del Bautismo a un cuarto de hora.",
    comeSpostarsi: 'A pie en el resort, transfer organizado a Madaba para la cena.',
    periodoMigliore: 'atardecer',
    costi: "no apunté los precios del resort: conviene compararlos en el momento de reservar. Presupuesto bajo unos 50-80 € al día por persona (hotel en Madaba, playa pública, comida local); medio 120-180 € (resort de gama media junto al mar, cena de bufé); alto desde 250 € (resort de lujo con spa). Lugar del Bautismo 12 JOD (unos 14,50 €), Siq Trail del Mujib 21 JOD más impuestos (unos 29 €), parque arqueológico de Madaba 3 JOD o con el Jordan Pass (2026).",
    erroriDaEvitare: ['Salir hacia las zonas más conservadoras o el desierto sin haber comprado el alcohol en Madaba (Soho o Hangover)'],
    miaEsperienza:
      'Flotar a ras de agua viendo cómo el sol se pone tras las colinas de Cisjordania es una experiencia aparte. Al atardecer, creo, el Mar Muerto da más de lo que se espera.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Baño y barro del Mar Muerto",
        "testo": "El mar está a unos 440 metros bajo el nivel de los océanos (2025) y sigue bajando. Es tan salado que se flota sin esfuerzo. Se queda uno en la superficie, se unta el barro en la piel y se deja secar.",
        "come": "Se entra desde un resort con playa privada o desde una playa pública equipada. Entrar despacio, sin zambullirse.",
        "quando": "Atardecer, con la luz sobre las colinas de Cisjordania.",
        "tempo": "1-2 horas en el agua",
        "consiglio": "No afeitarse el día anterior, no mojar ojos y cara y lavarse enseguida con agua dulce."
      },
      {
        "nome": "Madaba y el mapa mosaico",
        "testo": "La ciudad de los mosaicos bizantinos. En la iglesia ortodoxa griega de San Jorge está el mapa del siglo VI, realizado entre 542 y 570, con Jerusalén en el centro: originalmente medía 21 por 7 metros y tenía más de dos millones de teselas.",
        "come": "Madaba está a una media hora de Amán y a una hora del mar Muerto; el centro se visita a pie.",
        "quando": "Mañana, cuando la iglesia está menos concurrida.",
        "tempo": "1-2 horas",
        "lat": 31.71765,
        "lng": 35.7942,
        "consiglio": "Combinarla con una cena en un restaurante del casco antiguo."
      },
      {
        "nome": "Lugar del Bautismo (Betania al otro lado del Jordán)",
        "testo": "El lugar del río Jordán donde la tradición sitúa el bautismo de Jesús, patrimonio de la UNESCO desde 2015, a unos 9 km al norte del mar Muerto. Se camina entre restos de iglesias bizantinas hasta el río, con Cisjordania a pocos metros.",
        "come": "En coche desde el mar Muerto. La entrada estándar incluye lanzadera y guía local.",
        "quando": "Entrada desde las 8; última entrada a las 16 de noviembre a marzo y a las 17 de abril a octubre (2026). Mejor por la mañana, antes del calor.",
        "tempo": "1,5-2 horas",
        "costo": "12 JOD (unos 14,50 €) para extranjeros (2026)",
        "orari": "Todos los días desde las 8; última entrada a las 16 de noviembre a marzo y a las 17 de abril a octubre (2026).",
        "lat": 31.83722,
        "lng": 35.55028,
        "url": "https://www.baptismsite.com/",
        "consiglio": "Llevar sombrero y agua: el recorrido va casi todo al sol."
      },
      {
        "nome": "Amman Beach",
        "testo": "La playa pública equipada más conocida, con duchas, sombrillas y piscinas, alternativa a los resorts para quien no duerme junto al mar. Los fines de semana se llena de familias jordanas.",
        "come": "En coche o taxi, entre los resorts de Sweimeh; se paga a la entrada.",
        "quando": "Entre semana, por la tarde hasta la puesta de sol.",
        "tempo": "2-3 horas",
        "lat": 31.69952,
        "lng": 35.581
      },
      {
        "nome": "Dead Sea Panorama",
        "testo": "Un complejo al borde del escarpe sobre el mar, con un pequeño museo sobre la geología, la historia y el medio ambiente del Mar Muerto y una terraza con vista a toda la costa. Al atardecer la luz cae sobre Cisjordania, enfrente.",
        "come": "En coche por la carretera que sube hacia Ma'in, unos 20 minutos desde los resorts.",
        "quando": "Última hora de la tarde, por la vista con luz baja.",
        "tempo": "1 hora",
        "orari": "Museo de 9 a 17 h (2026).",
        "lat": 31.62954,
        "lng": 35.58436
      },
      {
        "nome": "Wadi Mujib, el Siq Trail",
        "testo": "El sendero de agua más conocido de la Reserva de Mujib: se remonta el río entre paredes de arenisca, caminando y a ratos nadando, hasta una cascada. Uno se moja de la cabeza a los pies.",
        "come": "Desde el centro de visitantes en la carretera de la costa, al sur de los resorts. Calzado que se pueda mojar y nada que tema el agua.",
        "quando": "Solo en la temporada cálida: en invierno los senderos de agua cierran por las crecidas.",
        "tempo": "2-3 horas",
        "costo": "21 JOD más el 16% de impuestos, unos 29 € (2026)",
        "lat": 31.46712,
        "lng": 35.57314,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees",
        "consiglio": "No ir si ha llovido hace poco en la zona: el nivel del río sube muy rápido."
      },
      {
        "nome": "Hammamat Ma'in",
        "testo": "Las fuentes termales en una garganta sobre el Mar Muerto, con cascadas de agua caliente que bajan por las rocas. Una parte está reservada a un resort; la otra está abierta al público con entrada.",
        "come": "En coche desde Madaba o desde el Mar Muerto, por una carretera de curvas.",
        "quando": "En invierno, cuando el agua caliente se agradece; en verano hace mucho calor.",
        "tempo": "2-3 horas",
        "lat": 31.60947,
        "lng": 35.61046
      },
      {
        "nome": "Parque arqueológico de Madaba",
        "testo": "En el centro de Madaba, un recinto con un tramo de calzada romana, la iglesia de la Virgen y la Sala de Hipólito con sus mosaicos, además del museo. Completa bien la visita al mapa de San Jorge.",
        "come": "A pie desde la iglesia de San Jorge, pocos minutos.",
        "quando": "Por la mañana, junto con el mapa de mosaico.",
        "tempo": "1 hora",
        "costo": "3 JOD (unos 3,60 €), museo incluido; incluido en el Jordan Pass (2026)",
        "orari": "De 8 a 16 h (2026).",
        "lat": 31.71615,
        "lng": 35.7955,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Museo del punto más bajo de la Tierra y Cueva de Lot",
        "testo": "En Ghor es-Safi, en la orilla sur, un museo cuenta la historia de la zona más baja del planeta. Encima, en una ladera, están la cueva y los restos del monasterio bizantino que la tradición vincula a Lot.",
        "come": "En coche por la carretera del Mar Muerto hacia el sur, una hora y media desde los resorts; a la cueva se sube a pie por una escalinata.",
        "quando": "Por la mañana, antes de que apriete el calor del valle.",
        "tempo": "1,5 horas",
        "costo": "Museo 2 JOD (unos 2,40 €), incluido en el Jordan Pass (2026)",
        "orari": "Museo de 8 a 17.15 h (2026).",
        "lat": 31.05043,
        "lng": 35.5023,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Madaba y la iglesia de San Jorge",
          "Almuerzo en Madaba",
          "Tarde: traslado al Mar Muerto",
          "Baño y barro, luego atardecer sobre el mar"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Madaba, el mapa de mosaico y el parque arqueológico, luego baño en el Mar Muerto al atardecer",
          "Día 2 por la mañana: Lugar del Bautismo",
          "Día 2 por la tarde: Dead Sea Panorama y puesta de sol desde la terraza"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Madaba y baño al atardecer",
          "Día 2: Lugar del Bautismo y Hammamat Ma'in",
          "Día 3: Wadi Mujib (Siq Trail, en temporada cálida) y Museo del punto más bajo de la Tierra, luego hacia Karak"
        ]
      }
    ],
    zone: [
      {
        "nome": "Resorts junto al mar",
        "perChi": "quien quiere acceso directo a la playa",
        "testo": "Cómodos, con piscinas y spa. Los precios de comida y bebida son altos y a menudo no se puede entrar con comida de fuera.",
        "fascia": "90-150 €"
      },
      {
        "nome": "Madaba",
        "perChi": "quien quiere gastar menos",
        "testo": "Hoteles más sencillos y restaurantes locales, con una hora de traslado hasta el mar.",
        "fascia": "40-80 €"
      },
      {
        "nome": "Resorts de lujo en Sweimeh",
        "perChi": "quien busca spa y un servicio cuidado",
        "testo": "Los hoteles de cinco estrellas de la misma costa, con playas más amplias, más piscinas y spa. También comer sale caro.",
        "fascia": "170-350 €"
      }
    ],
    sapori: [
      {
        "nome": "Maqluba",
        "testo": "Arroz, carne y verduras volteados en la mesa, típico de Madaba y de las casas jordanas."
      },
      {
        "nome": "Dátiles del valle del Jordán",
        "testo": "Dulces y blandos, a la venta junto a la carretera y en las tiendas de Madaba."
      },
      {
        "nome": "Zarb",
        "testo": "Carne y verduras cocidas bajo tierra; se encuentra en restaurantes que lo preparan a pedido."
      },
      {
        "nome": "Cosméticos de barro",
        "testo": "Cremas y jabones con sales del Mar Muerto, en las tiendas de Madaba y de los resorts."
      }
    ],
    attenzioni: [
      "La sal quema en los ojos y en las heridas: nada de zambullidas ni salpicaduras, y lavarse enseguida si pasa.",
      "En las tiendas de cosméticos frente a los resorts los precios son más altos que en la ciudad: comparar antes.",
      "No quedarse demasiado tiempo en el agua de una vez, y beber mucho."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Monte Nebo",
        "distanza": "unos 30 km, 40 minutos en coche",
        "come": "En coche subiendo hacia Madaba; se combina con la visita a la ciudad.",
        "testo": "La cresta desde la que, según la tradición, Moisés vio la Tierra Prometida, con el memorial y los mosaicos bizantinos. Entrada 3 JOD (unos 3,60 €)."
      },
      {
        "nome": "Amán",
        "distanza": "una hora en coche",
        "come": "Coche, taxi o lanzadera hacia la capital.",
        "testo": "La Ciudadela, el Teatro Romano y el centro con sus zocos. Se va y se vuelve en el día, o se usa Amán como base."
      },
      {
        "nome": "Castillo de Karak",
        "distanza": "una hora y media en coche",
        "come": "En coche por la costa hacia el sur y luego subiendo a la meseta.",
        "testo": "La gran fortaleza cruzada sobre la ciudad de Karak. Entrada 2 JOD (unos 2,40 €), museo incluido, o con el Jordan Pass; abierto de 8 a 17 h."
      }
    ],
    faq: [
      {
        "domanda": "¿Se puede uno bañar en el Mar Muerto sin dormir en un resort?",
        "risposta": "Sí: Amman Beach y las otras playas públicas equipadas cobran entrada por día, y muchos resorts venden un pase para playa y piscinas."
      },
      {
        "domanda": "¿Cuánto tiempo se puede estar en el agua?",
        "risposta": "Mejor no más de 15-20 minutos seguidos, y luego ducha con agua dulce. La sal escuece en los ojos, en los cortes y en la piel recién afeitada."
      },
      {
        "domanda": "¿Cuál es la mejor época para el Mar Muerto?",
        "risposta": "De octubre a abril, con días templados. En verano, a esta cota, se superan fácilmente los 40 grados."
      },
      {
        "domanda": "¿Wadi Mujib está abierto todo el año?",
        "risposta": "No: los senderos de agua como el Siq Trail abren solo en la temporada cálida y cierran en invierno por riesgo de crecidas. La entrada del Siq cuesta 21 JOD más impuestos."
      },
      {
        "domanda": "¿El Mar Muerto está en el Jordan Pass?",
        "risposta": "El baño no, porque se paga la playa o el resort. Sí están incluidos el parque arqueológico de Madaba y el Museo del punto más bajo de la Tierra."
      },
      {
        "domanda": "¿Conviene dormir en el Mar Muerto o en Madaba?",
        "risposta": "Junto al mar para el baño al atardecer y el descanso; en Madaba para gastar menos y cenar en la ciudad, con una hora de carretera hasta la playa."
      }
    ],
    esperienzeSlugs: ['bagno-mar-morto'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'El sol velado que se refleja en el Mar Muerto al atardecer, pequeñas siluetas de bañistas en la orilla, Jordania',
    immagine: '/images/giordania/mar-morto-tramonto-riccardo.jpg',
  },
  {
    slug: 'karak-monte-nebo',
    paeseSlug: 'giordania',
    ordine: 4,
    nome: 'Karak y monte Nebo',
    tipologia: ['storia', 'religione'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: 'La fortaleza cruzada de Karak y el monte Nebo, el lugar desde el que la tradición dice que Moisés vio la Tierra Prometida, en el camino hacia Little Petra.',
    percheAndarci: 'Karak es una parada histórica que merece la pena, en la meseta al sur del Mar Muerto; el monte Nebo hay que contarlo más por su valor simbólico que por el panorama.',
    cosaVedere: ['La fortaleza cruzada de Karak Castle', 'El panorama desde el monte Nebo'],
    cosaFare: ['Visita a Karak Castle', 'Parada en el monte Nebo'],
    doveDormire: 'No pernocté aquí: parada de paso hacia Little Petra y Wadi Musa.',
    doveMangiare: 'Comida por el camino entre el monte Nebo y Little Petra.',
    comeArrivare: "Aproximadamente 1h30 de transfer desde Madaba hasta Karak; el Monte Nebo es una parada posterior en el camino hacia Little Petra. El Monte Nebo está a pocos kilómetros de Madaba, mientras que a Karak se llega desde el norte por la King's Highway, cruzando el cañón del Mujib, o desde el Mar Muerto subiendo a la meseta. Desde Karak la King's Highway sigue hacia el sur hasta Shobak y Wadi Musa. Lo más libre es el coche de alquiler o un conductor por día.",
    comeSpostarsi: 'A pie dentro de la fortaleza de Karak.',
    periodoMigliore: 'mañana',
    costi: "Entrada a Karak incluida en el Jordan Pass. Sin pase: Castillo de Karak 2 JOD (unos 2,40 €), Monte Nebo 3 JOD (unos 3,60 €), Castillo de Shobak 1 JOD, Reserva de Dana 10 JOD más impuestos (2026). Presupuesto bajo unos 40-60 € al día por persona (hotel sencillo en Karak o Madaba, casas de comidas); medio 90-140 € (coche de alquiler o conductor compartido, hotel de gama media); alto desde 200 € (conductor privado y guía).",
    erroriDaEvitare: [],
    miaEsperienza:
      'Karak Castle es una fortaleza imponente y merece la visita. El monte Nebo, para ser sincero, me dejó indiferente: cuenta más como símbolo (es el lugar desde el que, según la tradición, Moisés vio la Tierra Prometida) que como paisaje, y es la parada de la jornada que menos recuerdo.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Castillo de Karak",
        "testo": "Fortaleza cruzada iniciada en la década de 1140 sobre un espolón rocoso, rendida a las tropas de Saladino en 1188 y ampliada por los mamelucos. Se recorren pasillos oscuros, bóvedas y salas subterráneas, con la ciudad moderna alrededor.",
        "come": "Se llega desde Madaba por la King's Highway. Se visita por libre, pero algunos pasillos están oscuros: llevar linterna.",
        "quando": "Abierto de 8 a 17 (2026). Por la mañana hay menos viento y el sol aún está bajo.",
        "tempo": "1-1,5 horas",
        "costo": "2 JOD (unos 2,40 €), museo incluido; incluido en el Jordan Pass (2026)",
        "orari": "Todos los días de 8 a 17 h (2026).",
        "lat": 31.18056,
        "lng": 35.70139,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Monte Nebo",
        "testo": "La cresta, a unos 700 metros, desde la que según la Biblia Moisés vio la Tierra Prometida. Está el memorial con mosaicos bizantinos, reabierto en 2016, y la escultura en forma de serpiente de Gian Paolo Fantoni.",
        "come": "Está a las afueras de Madaba, en la carretera hacia el mar Muerto. Se llega en coche hasta el aparcamiento.",
        "quando": "Un día despejado, cuando se ven el valle del Jordán y Jericó, y con el cielo muy limpio Jerusalén.",
        "tempo": "45 minutos",
        "costo": "3 JOD (unos 3,60 €) para extranjeros (2026)",
        "lat": 31.76667,
        "lng": 35.725,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Castillo de Shobak",
        "testo": "El castillo cruzado de Montréal, construido en 1115 por Balduino I sobre una colina aislada. Del original queda poco y el interior está en ruinas, con inscripciones de las reparaciones mamelucas: es más salvaje que Karak. Los cruzados excavaron un túnel colina abajo hasta unas cisternas alimentadas por manantiales.",
        "come": "En la King's Highway entre Karak y Petra. Se visita por libre; para el túnel hace falta linterna.",
        "quando": "Abierto de 8 a 17 (2026). Buena parada camino de Petra.",
        "tempo": "1 hora",
        "costo": "1 JOD (unos 1,20 €) para extranjeros, o incluido en el Jordan Pass (2026)",
        "orari": "Todos los días de 8 a 17 h (2026).",
        "lat": 30.53139,
        "lng": 35.56083,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Museo de Karak",
        "testo": "El pequeño museo arqueológico en la parte baja del castillo, con piezas desde la Edad del Bronce hasta la época mameluca y paneles sobre la historia de la fortaleza. Ayuda a entender las fases del castillo antes de recorrerlo.",
        "come": "Dentro del castillo, en el patio inferior.",
        "quando": "Al principio de la visita al castillo.",
        "tempo": "30 minutos",
        "costo": "Incluido en la entrada del castillo",
        "orari": "De 8 a 17.15 h (2026).",
        "lat": 31.18216,
        "lng": 35.70172,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Umm ar-Rasas",
        "testo": "Sitio UNESCO desde 2004, en la estepa al sureste de Madaba, con los restos de una ciudad romana y bizantina. En la iglesia de San Esteban un gran mosaico del siglo VIII representa las ciudades de Tierra Santa; cerca se alza una torre de estilita.",
        "come": "En coche desde Madaba o desde Dhiban, desviándose de la King's Highway hacia el este.",
        "quando": "Por la mañana o a última hora de la tarde; el sitio está al aire libre y sin sombra.",
        "tempo": "1 hora",
        "costo": "Incluido en el Jordan Pass",
        "orari": "De 8 a 17 h (2026).",
        "lat": 31.50079,
        "lng": 35.92026,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Maqueronte (Mukawir)",
        "testo": "La fortaleza de Herodes el Grande en lo alto de una colina aislada sobre el Mar Muerto. Según Flavio Josefo, aquí fue encarcelado y ejecutado Juan el Bautista; quedan columnas, cisternas y una vista muy amplia sobre la costa.",
        "come": "En coche hasta el pueblo de Mukawir y luego una breve subida a pie.",
        "quando": "Al atardecer, con la luz sobre el Mar Muerto.",
        "tempo": "1 hora",
        "lat": 31.56722,
        "lng": 35.62417,
        "consiglio": "Calzado cerrado: el sendero es empinado y pedregoso."
      },
      {
        "nome": "Cañón del Wadi Mujib",
        "testo": "Por la King's Highway la carretera baja en curvas al gran cañón del Mujib y sube por el otro lado. Abajo está el lago de la presa; desde los miradores del borde se ve toda la garganta.",
        "come": "En coche por la King's Highway entre Dhiban y Karak, parando en los apartaderos.",
        "quando": "Por la mañana, con la luz rasante en las paredes.",
        "tempo": "30-45 minutos con las paradas",
        "lat": 31.44472,
        "lng": 35.81806
      },
      {
        "nome": "Reserva de Dana",
        "testo": "La mayor reserva natural de Jordania, con el pueblo de piedra de Dana al borde de un valle que baja hacia el Wadi Araba. Senderos de media jornada o de varios días entre montañas de arenisca y granito.",
        "come": "En coche por la King's Highway, al sur de Tafila; algunos senderos requieren guía de la reserva.",
        "quando": "Primavera y otoño, con temperaturas buenas para caminar.",
        "tempo": "Media jornada o una noche",
        "costo": "10 JOD más el 16% de impuestos, unos 14 € (2026)",
        "lat": 30.6751,
        "lng": 35.61053,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Salida de Madaba o del Mar Muerto",
          "Monte Nebo",
          "Almuerzo por la Carretera del Rey",
          "Castillo de Karak",
          "Llegada a Wadi Musa"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Monte Nebo, Umm ar-Rasas y cañón del Wadi Mujib",
          "Tarde: Castillo y Museo de Karak",
          "Noche en Karak o en Dana",
          "Día 2: paseo por la Reserva de Dana, luego Castillo de Shobak y llegada a Wadi Musa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Wadi Musa",
        "perChi": "quien sigue hacia Petra",
        "testo": "La continuación natural del recorrido por la King's Highway.",
        "fascia": "40-180 €"
      },
      {
        "nome": "Karak",
        "perChi": "quien quiere una noche tranquila",
        "testo": "Pocos alojamientos, sencillos y baratos; por la noche la ciudad se apaga pronto."
      },
      {
        "nome": "Madaba",
        "perChi": "quien sale del norte",
        "testo": "Base cómoda para el Monte Nebo, Umm ar-Rasas y Maqueronte, con restaurantes y hoteles sencillos en el centro.",
        "fascia": "40-80 €"
      },
      {
        "nome": "Pueblo de Dana",
        "perChi": "quien quiere caminar",
        "testo": "Unas pocas casas de huéspedes y el albergue de la reserva al borde del valle. Silencio, cielo estrellado y senderos que salen de la puerta."
      }
    ],
    sapori: [
      {
        "nome": "Mansaf",
        "testo": "Es el plato de la zona beduina de Karak: cordero, arroz y yogur salado."
      },
      {
        "nome": "Falafel y shawarma",
        "testo": "En las casas de comidas del centro de Karak, para un almuerzo barato."
      },
      {
        "nome": "Pan shrak",
        "testo": "Pan fino cocido sobre una piedra convexa, típico del campo."
      },
      {
        "nome": "Té beduino",
        "testo": "Con salvia o menta, servido en las paradas del camino."
      }
    ],
    attenzioni: [
      "La Carretera del Rey es panorámica pero sinuosa: calcular más tiempo del que dice el navegador.",
      "En los bares junto a la carretera los precios no están expuestos: preguntar antes.",
      "El Monte Nebo vale más por su significado que por la vista: si falta tiempo se puede quitar del programa.",
      "El 23 de octubre de 2026 hubo un tiroteo en una iglesia de la gobernación de Karak: seguir las indicaciones de las autoridades locales y las noticias (gov.uk)."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Petra",
        "distanza": "unas 2 horas y media en coche por la King's Highway",
        "come": "En coche, taxi o traslado hacia el sur, pasando por Shobak.",
        "testo": "La ciudad nabatea excavada en la roca rosa. Conviene llegar a Wadi Musa la tarde anterior y entrar a la apertura de las 6."
      },
      {
        "nome": "Madaba",
        "distanza": "una hora y media en coche",
        "come": "En coche hacia el norte por la King's Highway, cruzando el cañón del Mujib.",
        "testo": "La ciudad de los mosaicos, con el mapa bizantino de la iglesia de San Jorge y el parque arqueológico (3 JOD o con el Jordan Pass)."
      },
      {
        "nome": "Mar Muerto, orilla sur",
        "distanza": "una hora en coche",
        "come": "En coche bajando de la meseta hacia Ghor es-Safi o hacia los resorts más al norte.",
        "testo": "El Museo del punto más bajo de la Tierra y la Cueva de Lot, o un baño en los resorts de Sweimeh, más al norte."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuánto cuesta entrar al Castillo de Karak?",
        "risposta": "2 JOD (unos 2,40 €), museo incluido, o está incluido en el Jordan Pass (2026). Abre todos los días de 8 a 17 h."
      },
      {
        "domanda": "¿Cuánto tiempo hace falta para Karak?",
        "risposta": "Una hora y media para el castillo y el museo. Con una linterna se recorren también los pasillos oscuros y las salas subterráneas."
      },
      {
        "domanda": "¿El Monte Nebo está en el Jordan Pass?",
        "risposta": "El Monte Nebo lo gestionan los franciscanos y tiene entrada propia de 3 JOD (unos 3,60 €). Conviene llevar efectivo."
      },
      {
        "domanda": "¿Mejor la King's Highway o la Desert Highway?",
        "risposta": "La King's Highway es más lenta y con curvas, pero pasa por Madaba, el Monte Nebo, el cañón del Mujib, Karak y Shobak. La Desert Highway es más rápida y sin paradas interesantes."
      },
      {
        "domanda": "¿Se pueden ver el Monte Nebo y Karak el mismo día?",
        "risposta": "Sí, saliendo temprano de Madaba o del Mar Muerto: Monte Nebo por la mañana, Karak después de comer y llegada a Wadi Musa por la noche."
      },
      {
        "domanda": "¿Merece la pena dormir en Dana?",
        "risposta": "Sí para quien camina: el pueblo es tranquilo y los senderos salen de la reserva. La entrada cuesta 10 JOD más el 16% de impuestos."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'Los muros de piedra de la fortaleza cruzada de Karak Castle, Jordania',
    immagine: '/images/giordania/karak-stock.jpg',
  },
  {
    slug: 'petra',
    paeseSlug: 'giordania',
    ordine: 5,
    nome: 'Petra y Little Petra',
    tipologia: ['storia', 'trekking', 'unesco'],
    giorniConsigliati: '1 jornada entera para Petra, media jornada para Little Petra',
    visitataPersonalmente: true,
    introduzione: 'El corazón del viaje: el Siq, el Tesoro (Al-Khazneh), la subida al Monasterio (Ad-Deir) y, como anticipo, el pequeño cañón de Little Petra.',
    percheAndarci: 'Es una de las Siete Maravillas del Mundo Moderno, Patrimonio de la UNESCO, y la encontramos casi desierta por el descenso del turismo en la región: una ocasión rara, difícil de repetir.',
    cosaVedere: [
      'El Siq, la garganta natural de 1,2-1,5 km excavada en la roca de arenisca rosa',
      'El Tesoro (Al-Khazneh), 39-40 metros de fachada esculpida en la roca',
      'Las Tumbas Reales',
      'El Monasterio (Ad-Deir), 45 metros de altura por 50 de ancho',
      'Little Petra (Siq al-Barid), la antesala en miniatura de Petra',
    ],
    cosaFare: [
      'Caminata por el Siq hasta el Tesoro (30-40 minutos)',
      'Subida al Monasterio: más de 800 escalones, 40-45 minutos de camino empinado',
      'Té con menta en el quiosco frente al Monasterio',
      'Little Petra Trek el día anterior',
      'Hammam y baño turco en Al Yhakor (Al Yakhor Turkish Bath, Wadi Musa) al final de la jornada',
    ],
    doveDormire:
      'Dormí en un hotel cualquiera en Wadi Musa, y no apunté el nombre. Wadi Musa es cómoda porque está a pocos minutos a pie o en lanzadera de la entrada de Petra.\n\nEconómicos: Petra Cabin Hostel, Rocky Mountain Hotel (gestión familiar, terraza panorámica) · gama media: Petra Panorama Hotel, La Maison Hotel Petra · más lujosos: Petra Moon Luxury Hotel (boutique, muy cerca de la entrada), Petra Marriott Hotel.',
    doveMangiare: 'Cena típica organizada por el DMC el día de Little Petra.',
    comeArrivare: "El día antes de Petra llegamos a Little Petra y a Wadi Musa en transfer desde Karak y el monte Nebo. Desde Ammán hay unos 235 km, tres horas largas en coche por la Desert Highway (más lenta pero panorámica la King's Highway, con paradas en Madaba y Karak). Desde Áqaba se tarda unas dos horas, desde Wadi Rum hora y media. Cada mañana sale de Ammán un autobús JETT hacia Wadi Musa; si no, taxi, transfer reservado o coche de alquiler, que en Jordania es la opción más libre. El pueblo de Wadi Musa está pegado a la entrada del recinto.",
    comeSpostarsi: 'A pie por todo el yacimiento, incluido el Siq y la subida al Monasterio.',
    periodoMigliore: 'a primera hora de la mañana, para el Siq y el Tesoro con menos luz directa y menos gente',
    costi: "Presupuesto bajo 50-70 € al día (albergue o guesthouse, falafel y shawarma, entrada aparte); medio 100-150 € (hotel en Wadi Musa, cenas en restaurante, taxis); alto desde 250 € (hotel junto a la entrada, guía privado, transfers). Entrada: 50 JOD (unos 60 €) por un día para quien duerme en Jordania, 90 JOD (unos 109 €) sin pernoctar; el Jordan Pass, desde 70 JOD (unos 85 €), incluye Petra y la tasa del visado.",
    erroriDaEvitare: ['Ir sin botas de trekking: son indispensables, sobre todo para la subida al Monasterio (más de 800 escalones)'],
    miaEsperienza:
      'Ver el Tesoro asomar del Siq sin la multitud de siempre delante vale por sí solo el viaje. La subida al Monasterio compensa cada escalón con una vista todavía más imponente que el Tesoro. También Little Petra, el día anterior, fue preciosa: menos concurrida, nos dio la primera descarga de entusiasmo. Junto con Wadi Rum, es lo que no hay que perderse de todo el viaje.',
    // GUIDA-START
    luoghi: [
      {
        nome: "El Siq y el Tesoro (Al-Khazneh)",
        testo: "El desfiladero natural de unos 1,2 km entre paredes de arenisca de hasta 180 metros, de apenas 3 metros de ancho en algunos puntos, que se estrecha hasta mostrar de golpe la fachada del Tesoro, de unos 37 metros de alto y tallada en la roca.",
        come: "Del centro de visitantes al Tesoro se camina entre media hora y una hora, según el ritmo. Se puede ir a caballo en el primer tramo, antes del Siq.",
        quando: "El sitio abre a las 6 y cierra a las 17 (2026). Entrar a primerísima hora, cuando el Siq está vacío; el sol llega al Tesoro a media mañana.",
        tempo: "45 minutos",
        costo: "50 JOD (unos 60 €) por 1 día, 55 JOD (unos 67 €) por 2, 60 JOD (unos 73 €) por 3 para quien duerme al menos una noche en Jordania; 90 JOD (unos 109 €) en el día sin pernoctar (2026). Incluido en el Jordan Pass.",
        orari: "Todos los días desde las 6; cierre a las 17, en invierno a veces hacia las 16 (2026).",
        lat: 30.32208,
        lng: 35.45154,
        url: "https://international.visitjordan.com/page/17/Entrance-Fees",
        consiglio: "La encontramos casi desierta: ver el Tesoro asomar del Siq sin multitud vale por sí solo el viaje.",
      },
      {
        nome: "Calle de las Fachadas y Teatro",
        testo: "Después del Tesoro el valle se abre a las tumbas excavadas en la roca y al teatro nabateo tallado en la piedra, con capacidad para unas 8.500 personas.",
        come: "A pie desde el Tesoro, todo llano.",
        quando: "Mañana.",
        tempo: "1 hora",
        costo: "Incluido en el Jordan Pass",
        orari: "Como el recinto, de las 6 al cierre.",
        lat: 30.32398,
        lng: 35.44769,
      },
      {
        nome: "Tumbas Reales",
        testo: "Un grupo de tumbas monumentales excavadas en la montaña: la Tumba de la Urna, la Tumba de Seda, la Tumba Corintia y la Tumba del Palacio. En la Tumba de la Urna se entra en la gran sala.",
        come: "Pocos minutos a pie desde el teatro.",
        quando: "Tarde, cuando la luz roja enciende las paredes.",
        tempo: "45 minutos",
        costo: "Incluido en el Jordan Pass",
        orari: "Como el recinto, de las 6 al cierre.",
        lat: 30.32755,
        lng: 35.44926,
      },
      {
        nome: "Calle Columnada y Gran Templo",
        testo: "El cardo romano empedrado que recorre el fondo del valle, con columnas aún en pie a un lado y los restos de los mercados. Encima, a la izquierda, el Gran Templo: un complejo nabateo en terrazas con un pequeño teatro dentro, una de las mayores estructuras construidas (no excavadas) de la ciudad.",
        come: "A pie, justo después del teatro y de las Tumbas Reales, en llano. Al Gran Templo se sube por una escalinata.",
        quando: "A media mañana, de camino al Monasterio.",
        tempo: "45 minutos",
        costo: "incluido en la entrada de Petra",
        orari: "Como el recinto, de las 6 al cierre.",
        lat: 30.32912,
        lng: 35.44326,
      },
      {
        nome: "Qasr al-Bint",
        testo: "El templo principal de la ciudad nabatea, uno de los pocos edificios de mampostería que se conservan, todavía de más de 20 metros de alto. Marca el final de la calle columnada y el inicio de la subida al Monasterio; aquí están también los dos restaurantes del fondo del valle y los baños.",
        come: "A pie al final de la calle columnada, a unos 4 km de la entrada.",
        quando: "A la hora de comer, como pausa antes del Monasterio.",
        tempo: "20-30 minutos",
        costo: "incluido en la entrada de Petra",
        orari: "Como el recinto, de las 6 al cierre.",
        lat: 30.3295,
        lng: 35.4401,
      },
      {
        nome: "Monasterio (Ad-Deir)",
        testo: "Fachada de unos 45 metros de alto, más grande que el Tesoro y más sobria. Se llega por un sendero de casi 800 escalones en la roca.",
        come: "Se sale desde el fondo del valle, pasado el Qasr al-Bint: unos 40 minutos de subida. Por el camino hay puestos y un quiosco frente al monumento.",
        quando: "Después del mediodía, cuando el sol da sobre la fachada (por la mañana está a la sombra).",
        tempo: "2-2,5 horas ida y vuelta",
        costo: "Incluido en el Jordan Pass",
        orari: "Como el recinto; en invierno conviene empezar la subida antes de las 14 para no bajar de noche.",
        lat: 30.33821,
        lng: 35.43098,
        consiglio: "Zapatos de trekking y agua; el té de menta del quiosco compensa la subida.",
      },
      {
        nome: "Alto Lugar del Sacrificio (Al-Madbah)",
        testo: "Un área ceremonial en la cima del Jebel Madbah, con el altar y dos obeliscos tallados en la roca. El sendero sube en escalones desde la zona del teatro y ofrece una vista desde arriba del centro de Petra que desde el fondo del valle no se imagina.",
        come: "Se sube a pie desde la Calle de las Fachadas, unos 45 minutos de escalones. Se puede bajar por la otra vertiente por el Wadi Farasa, pasando por la Fuente del León y la Tumba del Soldado Romano, y salir cerca del Qasr al-Bint.",
        quando: "A primera hora o el segundo día de visita; en verano, evitar las horas centrales.",
        tempo: "2-3 horas con la bajada por el Wadi Farasa",
        costo: "incluido en la entrada de Petra",
        orari: "Como el recinto, de las 6 al cierre.",
        lat: 30.32148,
        lng: 35.44699,
        consiglio: "Es la mejor forma de aprovechar el segundo día de la entrada, cuando las piernas ya acusan el Monasterio.",
      },
      {
        nome: "Mirador de Al-Khubtha sobre el Tesoro",
        testo: "El sendero que sube al macizo del Jebel al-Khubtha, sobre las Tumbas Reales, hasta un mirador que ve el Tesoro desde arriba. Es la foto de Petra desde lo alto, y cuesta menos esfuerzo que el Monasterio.",
        come: "Se sale de las Tumbas Reales (lado de la Tumba de la Urna), alrededor de una hora de subida por escalones y roca. Arriba, una jaima beduina pide una pequeña cantidad para asomarse.",
        quando: "Por la mañana, cuando el sol ilumina la fachada del Tesoro.",
        tempo: "2-2,5 horas ida y vuelta",
        costo: "incluido en la entrada de Petra, más unos dinares en el mirador",
        orari: "Como el recinto, de las 6 al cierre.",
      },
      {
        nome: "Petra by Night",
        testo: "El Siq recorrido a oscuras, iluminado por cientos de velas, hasta el Tesoro, donde se escucha música beduina sentado en el suelo. Es una experiencia de ambiente más que de visita, pero el Tesoro a la luz de las velas se queda grabado.",
        come: "Se sale del centro de visitantes de Wadi Musa tras la puesta de sol y se camina en grupo hasta el Tesoro, unas 2 horas en total. Las noches en que se celebra cambian: hay que preguntar en el centro de visitantes o en el hotel.",
        quando: "Solo algunas noches por semana; mejor la noche antes o después del día completo en Petra.",
        tempo: "2 horas",
        costo: "30 JOD, unos 36 € (2026), no incluido en el Jordan Pass",
        lat: 30.32208,
        lng: 35.45154,
        url: "https://visitpetra.jo/en/Event/25",
        consiglio: "Llegar pronto al centro de visitantes para ir en cabeza del grupo: las primeras filas encuentran el Siq en silencio.",
      },
      {
        nome: "Museo de Petra",
        testo: "El museo abierto en 2019 junto al centro de visitantes, con estatuas, cerámica, joyas e inscripciones halladas en el yacimiento. En una hora explica quiénes eran los nabateos y cómo vivían, algo que entre las fachadas de roca no es evidente.",
        come: "En la entrada de Petra, en Wadi Musa, antes de los tornos.",
        quando: "La tarde de llegada o a la vuelta de la visita, cuando hace calor.",
        tempo: "1 hora",
        costo: "incluido en la entrada de Petra",
        lat: 30.32532,
        lng: 35.46784,
      },
      {
        nome: "Little Petra (Siq al-Barid)",
        testo: "Un pequeño cañón a unos 8 km al norte de Wadi Musa, con viviendas excavadas en la arenisca, salas de banquetes nabateas y una gran cisterna. En el Biclinio Pintado quedan frescos bien conservados. Menos famoso y más tranquilo que Petra.",
        come: "En taxi o traslado desde Wadi Musa. Se camina por el cañón.",
        quando: "Tarde, el día antes de Petra.",
        tempo: "1,5-2 horas",
        costo: "Entrada libre de día",
        lat: 30.37408,
        lng: 35.44803,
        consiglio: "Ideal para calentar antes de Petra, con poca gente.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Entrada a la apertura, a las 6: Siq y Tesoro con poca gente",
          "Calle de las Fachadas, teatro y Tumbas Reales",
          "Calle Columnada y Gran Templo",
          "Comida cerca del Qasr al-Bint",
          "Subida al Monasterio a primera hora de la tarde, con el sol en la fachada",
          "Vuelta por el Siq hacia la hora de cierre",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: como arriba",
          "Noche: Petra by Night, si coincide con una de las noches previstas",
          "Día 2 por la mañana: Alto Lugar del Sacrificio con bajada por el Wadi Farasa",
          "Día 2 por la tarde: Museo de Petra y Little Petra en taxi",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Little Petra la tarde de llegada y Museo de Petra",
          "Día 2: Siq, Tesoro, Tumbas Reales, calle columnada y Monasterio",
          "Día 3: mirador de Al-Khubtha sobre el Tesoro por la mañana, luego Alto Lugar del Sacrificio",
          "Noche del día 2 o 3: Petra by Night",
        ],
      },
    ],
    zone: [
      {
        nome: "Wadi Musa",
        perChi: "quien quiere entrar a la apertura",
        testo: "El pueblo bajo la entrada, con hoteles de todas las gamas y restaurantes. A pocos minutos del sitio a pie o en lanzadera.",
        fascia: "40-180 €",
      },
      {
        nome: "Little Petra / Beidha",
        perChi: "quien quiere silencio",
        testo: "Algunos campamentos y casas de huéspedes cerca del cañón, más aislados y con poca vida por la noche.",
        fascia: "50-150 €",
      },
      {
        nome: "Taybeh",
        perChi: "quien viaja en coche y busca vistas",
        testo: "El pueblo en la colina al sur de Wadi Musa, con algunos hoteles en lo alto del valle y atardeceres amplios. Hace falta coche o taxi para llegar a la entrada del recinto, un cuarto de hora.",
        fascia: "60-150 €",
      },
    ],
    sapori: [
      {
        "nome": "Zarb",
        "testo": "Carne y verduras cocidas en la arena, en algunos restaurantes de Wadi Musa a pedido."
      },
      {
        "nome": "Maqluba",
        "testo": "El plato volteado de arroz y carne, fácil de encontrar en los locales de la calle principal."
      },
      {
        "nome": "Hammam",
        "testo": "Al final del día un baño turco en Wadi Musa afloja las piernas tras los escalones."
      },
      {
        "nome": "Té de cardamomo y salvia",
        "testo": "Servido por los beduinos a lo largo de los senderos del sitio."
      }
    ],
    attenzioni: [
      "Para caballos, camellos y burros acordar siempre el precio antes de subir, incluso cuando dicen que está incluido.",
      "Por el bienestar de los animales, mejor subir al Monasterio a pie.",
      "Llevar agua y gorra: en el sitio hay pocas fuentes y en verano hace mucho calor.",
      "Petra by Night: de 20.30 a 22.30 aproximadamente, salida del centro de visitantes, 30 JOD por persona, gratis para menores de 10 años (2026). Hace falta también la entrada de día o el Jordan Pass, y no se reserva. Solo se celebra algunas noches y las fuentes oficiales no coinciden en los días (lunes, miércoles y jueves, o de domingo a jueves): consultar en el centro de visitantes."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Wadi Rum",
        distanza: "1 hora y media en coche, unos 110 km",
        come: "Transfer, taxi o coche de alquiler hacia el sur por la Desert Highway; dentro del desierto se va en los jeeps de los campamentos beduinos.",
        testo: "El valle de arena roja y torres de arenisca de Lawrence de Arabia. Mejor pasar una noche en jaima que ir y volver en el día.",
      },
      {
        nome: "Castillo de Shobak",
        distanza: "40 minutos en coche, unos 30 km",
        come: "En coche o taxi hacia el norte por la King's Highway; se combina fácilmente con la llegada desde Karak o Dana.",
        testo: "El castillo cruzado de Montréal, sobre un cerro aislado, con galerías y una escalera en la roca que baja a un manantial. A menudo casi vacío.",
      },
      {
        nome: "Reserva de Dana",
        distanza: "1 hora y media en coche, unos 70 km",
        come: "En coche por la King's Highway hasta el pueblo de Dana; los senderos se hacen a pie, algunos con guía de la reserva.",
        testo: "La mayor reserva natural de Jordania, con un pueblo de piedra al borde de un valle que baja hacia el Wadi Araba. Buena para un día de caminata después de los yacimientos.",
      },
      {
        nome: "Áqaba y el mar Rojo",
        distanza: "2 horas en coche, unos 125 km",
        come: "Transfer, taxi o coche por la Desert Highway; normalmente pasando por Wadi Rum.",
        testo: "Esnórquel en los arrecifes de coral y playa tras días de desierto. Más que una excursión, es la etapa final natural de una ruta desde Petra hacia el sur.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Petra?",
        risposta: "Un día completo basta para el Siq, el Tesoro, las Tumbas Reales y el Monasterio, entrando a la apertura. Con dos días se añaden el Alto Lugar del Sacrificio, el mirador de Al-Khubtha y Little Petra sin prisas.",
      },
      {
        domanda: "¿Compensa el Jordan Pass para Petra?",
        risposta: "Casi siempre, para quien se queda al menos tres noches: desde 70 JOD incluye la entrada a Petra (50 JOD por separado) y la tasa del visado, además de Jerash, Wadi Rum y decenas de sitios. Se compra en línea antes de llegar.",
      },
      {
        domanda: "¿Se puede visitar Petra en el día desde Ammán o Áqaba?",
        risposta: "Se puede, pero la entrada para quien no duerme en Jordania sube a 90 JOD y se llega cuando el Siq ya está lleno. Dormir en Wadi Musa permite entrar a las 6, que es la verdadera ventaja.",
      },
      {
        domanda: "¿Merece la pena Petra by Night?",
        risposta: "Sí como experiencia de ambiente, no como visita: solo se ven el Siq y el Tesoro iluminados con velas. Cuesta 30 JOD, no entra en el Jordan Pass y solo se celebra algunas noches por semana.",
      },
      {
        domanda: "¿Cuándo ir a Petra?",
        risposta: "De marzo a mayo y de octubre a noviembre las temperaturas son buenas para caminar. En verano hace mucho calor a partir de las 10; en invierno los días son cortos y el recinto cierra hacia las 16.",
      },
      {
        domanda: "¿Cuánto se camina en Petra?",
        risposta: "De la entrada al Qasr al-Bint hay unos 4 km, y el Monasterio suma más de 800 escalones: en un día completo se hacen 15-20 km. Hacen falta zapatillas de trekking, agua y sombrero.",
      },
    ],
    esperienzeSlugs: ['salita-monastero-petra', 'hammam-wadi-musa'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'La fachada entera del Tesoro de Petra, con el frontón y los dos órdenes de columnas esculpidos en la roca rosa, Jordania',
    immagine: '/images/meraviglie/petra-tesoro-facciata-riccardo.jpg',
  },
  {
    slug: 'wadi-rum',
    paeseSlug: 'giordania',
    ordine: 6,
    nome: 'Wadi Rum',
    tipologia: ['deserto', 'avventura'],
    giorniConsigliati: '1 día y una noche',
    visitataPersonalmente: true,
    introduzione: 'El «Valle de la Luna»: un desierto de arena roja y formaciones de arenisca que sirvió de plató a Lawrence de Arabia. Nosotros lo recorrimos en camello y en jeep, con una noche de Nochevieja bajo las estrellas.',
    percheAndarci: 'Después de Petra es el segundo gran protagonista del viaje, y junto con Petra lo que no hay que perderse en Jordania.',
    cosaVedere: [
      'El Manantial de Lawrence',
      'El cañón de Khazali con los grabados rupestres nabateos',
      'Las dunas rojas y los puentes de roca naturales como Umm Fruth',
      'La Casa de Lawrence',
      'El cielo estrellado de Nochevieja, lejos de toda contaminación lumínica',
    ],
    cosaFare: [
      'Paseo en camello de 45 minutos (20 JOD)',
      'Safari en jeep de 4-6 horas en las clásicas camionetas beduinas',
      'Sandboarding en las dunas',
      'Conducir el jeep por el desierto en primera persona (para quien se atreva)',
      'Partido de vóley playa improvisado sobre la arena',
      'Cena beduina típica (a menudo zarb, cocinado bajo la arena)',
      'Fiesta de Nochevieja en el desierto',
      'Amanecer en las dunas a la mañana siguiente',
    ],
    doveDormire:
      'Dormí en un campamento de tiendas en el desierto, del que no apunté el nombre: tienda beduina clásica, cena y desayuno incluidos, un cielo estrellado sin igual.\n\nCampamento básico, baño compartido: Wadi Rum Bedouin Camp, Bedouin Lifestyle Camp · tienda privada con baño: Wadi Rum Serenity Camp, Zeina Desert Lodge · luxury desert camp: Sun City Camp (famoso por los «martian domes»), Palmera Camp (tiendas y burbujas panorámicas con baño privado).',
    doveMangiare: 'Cena beduina típica en el campamento de tiendas; para la comida de picnic, parada en una panadería o pastelería local (10 JOD).',
    comeArrivare: "Wadi Rum está a unos 120 km de Wadi Musa (Petra), unas 2 horas por carretera, y a unos 70 km de Aqaba, una hora y cuarto. Se llega en coche de alquiler, en taxi o con el traslado organizado por el campamento hasta el centro de visitantes y el pueblo de Rum, donde los guías beduinos esperan con los jeeps. Desde el aeropuerto de Aqaba se tarda una hora y media.",
    comeSpostarsi: 'Jeep 4x4 con guía beduino, camello para el tramo inicial en el desierto.',
    periodoMigliore: 'la época de Nochevieja, para la fiesta en el desierto bajo las estrellas; el amanecer para la mejor luz sobre las dunas',
    costi: "Presupuesto bajo unos 50-70 € al día por persona (campamento tradicional con cena y desayuno, tour en jeep compartido, entrada con Jordan Pass); medio 90-150 € (tienda con baño privado, jeep privado de media jornada, camello a 20 JOD); alto desde 200 € (burbujas o campamento de lujo, tour de día completo, subida con guía). Entrada al área protegida 5 JOD sin Jordan Pass; comida para llevar unos 10 JOD; 1 JOD vale unos 1,2 €.",
    erroriDaEvitare: [],
    miaEsperienza:
      'El safari en jeep entre cañones y dunas rojas, el sandboarding, el atardecer en las dunas al llegar al campamento y luego la fiesta de Nochevieja bajo uno de los cielos estrellados más bonitos que he visto nunca: difícil imaginar una manera más absurda de despedir el año viejo. Junto con Petra, es lo que no hay que perderse del viaje por Jordania.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Safari en jeep entre cañones y dunas",
        "testo": "La forma normal de visitar el desierto, patrimonio de la UNESCO desde 2011: una pick-up beduina con guía, entre formaciones de arenisca roja, cañones y dunas. Las paradas clásicas son el Manantial de Lawrence, con inscripciones nabateas en la roca, el cañón de Khazali con grabados rupestres de personas y antílopes, y un puente de roca.",
        "come": "Se sale del pueblo de Rum con el guía del campamento o desde el centro de visitantes. El tour se paga según la duración y se acuerda de antemano.",
        "quando": "Un recorrido de 4-6 horas, con salida por la mañana o por la tarde para el atardecer.",
        "tempo": "4-6 horas",
        "costo": "Entrada al área protegida 5 JOD, unos 6 €, para extranjeros o incluida en el Jordan Pass (2026); el tour en jeep se paga aparte",
        "orari": "Área protegida y centro de visitantes todos los días 8-17 (Jordan Pass, 2026)",
        "lat": 29.5765,
        "lng": 35.41993,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Pedir que el recorrido incluya un atardecer en las dunas."
      },
      {
        "nome": "Camello en el desierto",
        "testo": "Un paseo de unos 45 minutos a lomos de camello, a la manera tradicional.",
        "come": "Se organiza desde el campamento.",
        "quando": "Amanecer o atardecer.",
        "tempo": "45 minutos",
        "costo": "20 JOD, unos 24 € (de mi viaje)"
      },
      {
        "nome": "Noche en campamento de tiendas",
        "testo": "El campamento beduino con cena cocida bajo la arena (zarb), música y un cielo sin luces. Las tiendas van de las más sencillas a burbujas transparentes.",
        "come": "El traslado en jeep sale del pueblo.",
        "quando": "Una noche, mejor dos si se quiere tiempo para caminar.",
        "tempo": "Una noche",
        "consiglio": "Llevar una sudadera: de noche la temperatura baja incluso en primavera."
      },
      {
        "nome": "Centro de visitantes y los Siete Pilares de la Sabiduría",
        "testo": "La entrada al área protegida, donde se enseña el Jordan Pass o se paga la entrada. Enfrente está la montaña de grandes pliegues verticales llamada Siete Pilares de la Sabiduría, por el libro de T. E. Lawrence.",
        "come": "En la carretera que baja de la Desert Highway al pueblo de Rum; aparcamiento en el centro.",
        "quando": "Al llegar, antes de subir al jeep.",
        "tempo": "20-30 minutos",
        "costo": "5 JOD, unos 6 €, o Jordan Pass (2026)",
        "orari": "Todos los días 8-17 (2026)",
        "lat": 29.63923,
        "lng": 35.43444,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Manantial de Lawrence",
        "testo": "Un pequeño manantial en la pared del Jebel Rum, ligado al relato de Lawrence de Arabia, con inscripciones nabateas en la roca. Se sube unos minutos para tener la vista sobre el valle.",
        "come": "Primera parada de casi todos los tours en jeep, a pocos minutos del pueblo.",
        "quando": "Por la mañana.",
        "tempo": "20-30 minutos",
        "lat": 29.55979,
        "lng": 35.41019
      },
      {
        "nome": "Siq de Khazali",
        "testo": "Una grieta estrecha en la montaña, fresca incluso en verano, con grabados rupestres tamúdicos y nabateos de figuras humanas, antílopes y huellas de pies. Se entra a pie unas decenas de metros.",
        "come": "Parada clásica del tour en jeep.",
        "quando": "En las horas de calor, por la sombra.",
        "tempo": "20-30 minutos",
        "lat": 29.51796,
        "lng": 35.42347
      },
      {
        "nome": "Dunas rojas",
        "testo": "Las grandes dunas de arena roja apoyadas en la roca, el sitio donde se hace sandboard y se sube para mirar el desierto desde arriba.",
        "come": "Con el tour en jeep; se sube a pie, descalzo si la arena no quema.",
        "quando": "Última hora de la tarde, hacia el atardecer.",
        "tempo": "30-45 minutos",
        "lat": 29.52898,
        "lng": 35.42167
      },
      {
        "nome": "Little Bridge",
        "testo": "Un pequeño arco de roca a pocos metros del suelo, fácil de subir para una foto sobre el puente. Es la alternativa sencilla a los puentes más altos.",
        "come": "En el tour en jeep de media jornada.",
        "quando": "Por la tarde.",
        "tempo": "20 minutos",
        "lat": 29.52041,
        "lng": 35.44302
      },
      {
        "nome": "Casa de Lawrence",
        "testo": "Los restos de un pequeño edificio nabateo de piedra que la tradición liga al paso de Lawrence. Más que las ruinas, cuenta la vista sobre la llanura roja.",
        "come": "Parada del tour en jeep.",
        "quando": "Por la tarde.",
        "tempo": "15-20 minutos",
        "lat": 29.52862,
        "lng": 35.45931
      },
      {
        "nome": "Roca del Hongo",
        "testo": "Una roca aislada en la arena con la base erosionada que la hace parecer un hongo, una de las formas más fotografiadas del desierto.",
        "come": "En los tours en jeep más largos.",
        "quando": "Con la luz de la tarde.",
        "tempo": "15 minutos",
        "lat": 29.51805,
        "lng": 35.4935
      },
      {
        "nome": "Puente de Umm Fruth",
        "testo": "Un arco natural de unos 15 metros de alto, que se sube en pocos minutos por una placa de roca fácil. Es el puente de roca más conocido de Wadi Rum.",
        "come": "En los tours en jeep de 4-6 horas; calzado con buena suela.",
        "quando": "Por la mañana o por la tarde, con menos gente a la hora de comer.",
        "tempo": "30 minutos",
        "lat": 29.46873,
        "lng": 35.44923,
        "consiglio": "Arriba caben pocos: esperar el turno y no subir con viento fuerte."
      },
      {
        "nome": "Puente de Burdah",
        "testo": "Un arco de roca fino a unos 35 metros de altura en la cresta del Jebel Burdah. Solo se llega con una subida exigente, con tramos de trepada fácil.",
        "come": "Con un guía local, saliendo en jeep; para senderistas con experiencia.",
        "quando": "A primera hora, antes del calor.",
        "tempo": "media jornada",
        "lat": 29.46845,
        "lng": 35.49665
      },
      {
        "nome": "Cañón de Barrah",
        "testo": "Un cañón largo y ancho entre paredes de arenisca, adecuado para una caminata o un tramo en camello. También es zona de escalada.",
        "come": "En jeep o a pie con un guía; a menudo en los tours de día completo.",
        "quando": "Por la mañana.",
        "tempo": "2-3 horas a pie",
        "lat": 29.558,
        "lng": 35.4909
      },
      {
        "nome": "Jebel Umm ad-Dami",
        "testo": "La cima más alta de Jordania, unos 1.850 metros, en la frontera con Arabia Saudí. La subida es corta pero empinada, y desde arriba se ve el desierto saudí.",
        "come": "Con guía, una hora y media de jeep desde el pueblo y luego a pie.",
        "quando": "Salida al amanecer; el atardecer en la cima solo con el guía.",
        "tempo": "un día",
        "lat": 29.30833,
        "lng": 35.42917
      }
    ],
    programmi: [
      {
        "titolo": "1 día y 1 noche",
        "tappe": [
          "Llegada desde Petra o Aqaba al centro de visitantes",
          "Jeep de 4-6 horas: Manantial de Lawrence, Siq de Khazali, dunas rojas, Little Bridge, Casa de Lawrence, Umm Fruth",
          "Atardecer en las dunas, cena beduina y cielo estrellado",
          "Amanecer en las dunas y salida"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1 como arriba",
          "Día 2: camello o caminata por el cañón de Barrah, Roca del Hongo",
          "Segunda noche en el campamento"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: subida al puente de Burdah con guía, o Jebel Umm ad-Dami"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campamento de tiendas tradicional",
        "perChi": "quien quiere la experiencia beduina",
        "testo": "Tiendas sencillas, baño compartido, cena y desayuno incluidos. Poca electricidad: cargar los teléfonos antes.",
        "fascia": "30-60 €"
      },
      {
        "nome": "Campamento con baño privado",
        "perChi": "quien quiere más comodidad",
        "testo": "Tiendas y burbujas con baño, a veces con aire acondicionado. Cuestan más.",
        "fascia": "50-120 €"
      },
      {
        "nome": "Pueblo de Rum",
        "perChi": "quien no quiere dormir en el desierto",
        "testo": "Casas de huéspedes sencillas a los pies del valle, de donde salen los recorridos."
      },
      {
        "nome": "Burbujas y campamentos de lujo",
        "perChi": "quien quiere el cielo estrellado desde la cama",
        "testo": "Cúpulas transparentes o tiendas de estilo «marciano» con baño privado, aire acondicionado y cena incluida. Precios muy variables según la fecha.",
        "fascia": "150-320 €"
      }
    ],
    sapori: [
      {
        "nome": "Zarb",
        "testo": "Cordero, pollo y verduras cocidos durante horas en un horno bajo la arena, servido por la noche en el campamento."
      },
      {
        "nome": "Té beduino",
        "testo": "Con salvia, azúcar y brasas; se bebe cada vez que se llega a una tienda."
      },
      {
        "nome": "Pan cocido sobre brasas",
        "testo": "Fino, hecho en el fuego por los anfitriones del campamento."
      },
      {
        "nome": "Mansaf",
        "testo": "Cordero con arroz y yogur salado, en algunos campamentos para las noches de fiesta."
      }
    ],
    attenzioni: [
      "El precio del tour en jeep varía mucho entre campamentos: acordarlo antes y comparar.",
      "De noche hace frío incluso en primavera y otoño: llevar ropa de abrigo.",
      "No alejarse solo del campamento por la noche, los caminos se pierden en la oscuridad.",
      "Las tormentas de arena pueden cancelar los recorridos: dejar margen en el programa."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Petra",
        "distanza": "unos 120 km, 2 horas",
        "come": "Traslado con el campamento, taxi o coche de alquiler por la Desert Highway.",
        "testo": "La ciudad nabatea excavada en la roca, el otro motivo del viaje a Jordania. Merece al menos un día completo y una noche en Wadi Musa."
      },
      {
        "nome": "Aqaba y el mar Rojo",
        "distanza": "unos 70 km, 1-1,5 horas",
        "come": "Taxi o traslado desde el pueblo de Rum; desde el aeropuerto de Aqaba también 1,5 horas.",
        "testo": "El mar después del desierto: arrecife de coral desde la orilla en la zona sur hacia la frontera saudí, salidas en barco y pescado fresco por la noche."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuánto tiempo hace falta en Wadi Rum?",
        "risposta": "Una noche con un tour en jeep de 4-6 horas basta para las paradas clásicas. Con dos noches se añaden una caminata o el camello sin prisa."
      },
      {
        "domanda": "¿El Jordan Pass cubre Wadi Rum?",
        "risposta": "Sí, la entrada al área protegida está incluida y se enseña en el centro de visitantes. Sin pase se pagan 5 JOD; jeep, campamento y camello siempre aparte."
      },
      {
        "domanda": "¿Se puede visitar Wadi Rum sin dormir en el desierto?",
        "risposta": "Sí, con una excursión de un día desde Petra o Aqaba. Pero el atardecer, la cena beduina y el cielo estrellado son lo mejor, y se pierden."
      },
      {
        "domanda": "¿Qué temperaturas hay por la noche?",
        "risposta": "En invierno por la noche se baja cerca de cero, y en primavera y otoño también hace frío. Hacen falta chaqueta y capas, incluso después de un día caluroso."
      },
      {
        "domanda": "¿Jeep, camello o a pie?",
        "risposta": "El jeep cubre en media jornada las paradas principales; el camello es lento y va bien para un tramo; a pie solo se va con un guía beduino."
      },
      {
        "domanda": "¿Hay baño y electricidad en los campamentos?",
        "risposta": "Los campamentos tradicionales tienen baños compartidos y poca electricidad; los de tiendas privadas o burbujas tienen baño en la habitación. Conviene llegar con el móvil cargado y una batería externa."
      }
    ],
    esperienzeSlugs: ['jeep-safari-wadi-rum', 'capodanno-deserto'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'Un joven beduino con la kufiya sobre el rostro ante las rocas rojas de Wadi Rum, Jordania',
    immagine: '/images/giordania/wadi-rum-beduino-riccardo.jpg',
  },
  {
    slug: 'aqaba',
    paeseSlug: 'giordania',
    ordine: 7,
    nome: 'Áqaba',
    tipologia: ['mare', 'relax'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: 'Del desierto al Mar Rojo en menos de una hora: beach club, deportes acuáticos, snorkel y buceo antes del regreso a Amán.',
    percheAndarci: 'Es uno de los contrastes más bonitos de Jordania: se cierra la parte más intensa del viaje con un día de mar.',
    cosaVedere: ['Los arrecifes de coral del Mar Rojo'],
    cosaFare: [
      'Beach club',
      'Deportes acuáticos (moto de agua, banana boat)',
      'Snorkel sobre los arrecifes de coral',
      'Buceo (organizado por cuenta propia)',
      'Boat tour con Deep Blue (incluido en el paquete)',
    ],
    doveDormire:
      'Dormí en un hotel cualquiera, del que no apunté el nombre, cómodo por la cercanía a la playa y al paseo marítimo.\n\nEconómicos: Days Inn Hotel & Suites Aqaba, Extra Traveller (hostel) · gama media: Golden Tulip Aqaba, Bratus Hotel Aqaba · más lujosos: Kempinski Hotel Aqaba, Mövenpick Resort & Spa Aqaba.',
    doveMangiare: 'Sheikh El Harah (especialidades de pescado), Suzana, Buffalo Wings & Ring (cocina americana), Khubza & Seneya (Al Nahda Street).',
    comeArrivare: "Aproximadamente 1h de transfer desde Wadi Rum. Áqaba tiene el aeropuerto internacional King Hussein (AQJ), a pocos kilómetros del centro, con vuelos desde Amán y conexiones directas de temporada desde Europa. Desde Amán son unos 330 km por la Desert Highway, cuatro horas y media en coche, o se puede tomar un autobús JETT. Desde Petra se tarda unas dos horas, desde Wadi Rum una hora y cuarto.",
    comeSpostarsi: 'Transfer a la playa (15 minutos desde el hotel).',
    periodoMigliore: 'día de sol, después del amanecer en el desierto',
    costi: "Boat tour con Deep Blue incluido en el paquete. Presupuesto bajo unos 45-70 € al día por persona (hotel sencillo en el centro, playa pública, falafel y pescado en locales); medio 100-150 € (hotel en el paseo marítimo, beach club, cena de pescado); alto desde 220 € (resort en la costa sur con inmersiones). Fuerte y museo 3 JOD (unos 3,60 €) o con el Jordan Pass (2026). Áqaba es zona económica especial: el alcohol y algunos productos cuestan menos.",
    erroriDaEvitare: [],
    miaEsperienza:
      'En Áqaba hicimos también buceo: agradable, pero nada especial comparado con otros puntos del Mar Rojo más famosos por las inmersiones (Egipto sobre todo). Sigue siendo una bonita jornada para desconectar después del desierto, entre snorkel y deportes de agua.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Snorkel e inmersiones",
        "testo": "El mar Rojo a pocas horas del desierto, con arrecifes de coral cerca de la orilla y aguas cálidas. También está el pecio del Cedar Pride, hundido a propósito para los buceadores el 16 de noviembre de 1985: es uno de los puntos de buceo más conocidos.",
        "come": "Se reserva un centro de buceo o un barco en la marina.",
        "quando": "Todo el año, pero primavera y otoño son los mejores meses.",
        "tempo": "Medio día",
        "lat": 29.42815,
        "lng": 34.97149,
        "consiglio": "Las inmersiones me parecieron agradables pero menos espectaculares que otros puntos del Mar Rojo."
      },
      {
        "nome": "Paseo marítimo y playas",
        "testo": "El centro tiene un paseo marítimo con cafés y la playa pública; más al sur, las playas equipadas de los resorts y del parque marino. En la ciudad se viste con sobriedad; el bañador está bien dentro de las instalaciones.",
        "come": "En taxi desde los principales hoteles.",
        "quando": "Todo el día, sobre todo por la tarde.",
        "tempo": "Medio día"
      },
      {
        "nome": "Fuerte de Aqaba y museo",
        "testo": "El fuerte mameluco construido a principios del siglo XVI por el sultán Qansuh al-Ghuri. En 1917 las fuerzas árabes, con Lawrence, tomaron Áqaba a los otomanos. El museo arqueológico de la ciudad está en el Jordan Pass.",
        "come": "En el centro, cerca del paseo marítimo.",
        "quando": "Castillo abierto de 8 a 17, museo de 8 a 17.15 (2026). Final de la tarde, antes del atardecer sobre el mar.",
        "tempo": "45 minutos",
        "costo": "3 JOD (unos 3,60 €), museo incluido; incluido en el Jordan Pass (2026)",
        "orari": "Castillo de 8 a 17 h, museo de 8 a 17.15 h (2026).",
        "lat": 29.52136,
        "lng": 35.00204,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Museo arqueológico de Áqaba",
        "testo": "Junto al fuerte, en la casa del jerife Hussein bin Ali, el museo reúne piezas de la ciudad islámica de Ayla, cerámica, monedas e inscripciones. Se visita con la misma entrada que el castillo.",
        "come": "En el centro, al lado del fuerte y de la Plaza de la Revuelta Árabe.",
        "quando": "Última hora de la tarde, junto con el fuerte.",
        "tempo": "30 minutos",
        "costo": "Incluido en la entrada del fuerte; incluido en el Jordan Pass",
        "orari": "De 8 a 17.15 h (2026).",
        "lat": 29.52167,
        "lng": 35.00139,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Ruinas de Ayla",
        "testo": "Los restos de la ciudad portuaria islámica fundada en el siglo VII, con tramos de muralla, las puertas y la gran calle que las unía. Están al aire libre junto al paseo marítimo, entre hoteles y palmeras.",
        "come": "A pie desde el centro, por el paseo marítimo al norte del fuerte.",
        "quando": "A primera hora o hacia el atardecer, con el sol bajo.",
        "tempo": "30 minutos",
        "lat": 29.53058,
        "lng": 35.0
      },
      {
        "nome": "Iglesia de Áqaba",
        "testo": "Los cimientos de adobe de una iglesia de finales del siglo III, descubiertos en 1998 y considerados entre los más antiguos de una iglesia construida como tal. Se ve poco, pero cuenta mucho para la historia del cristianismo.",
        "come": "En el centro, cerca del paseo marítimo, a pocos minutos a pie de las ruinas de Ayla.",
        "quando": "En cualquier momento, junto con Ayla.",
        "tempo": "15 minutos",
        "lat": 29.53389,
        "lng": 34.99917
      },
      {
        "nome": "Plaza de la Revuelta Árabe y mástil",
        "testo": "La gran plaza junto al mar con el mástil de unos 130 metros y la bandera de la Revuelta Árabe, visible desde Israel, Egipto y Arabia Saudí. Por la noche es el punto de encuentro de familias y paseantes.",
        "come": "En el centro, junto al fuerte.",
        "quando": "Al atardecer, con la luz sobre el golfo.",
        "tempo": "20 minutos",
        "lat": 29.5217,
        "lng": 35.0011
      },
      {
        "nome": "Museo militar submarino",
        "testo": "Desde julio de 2019 una veintena de vehículos militares retirados, entre ellos tanques, un helicóptero y una ambulancia, descansan en el fondo a 15-28 metros, colocados como en formación. Es una inmersión insólita, sobre arena, lejos del coral.",
        "come": "Solo con un centro de buceo, normalmente en barco.",
        "quando": "Todo el año, con mar en calma.",
        "tempo": "Media jornada con la inmersión"
      },
      {
        "nome": "Costa sur y beach clubs",
        "testo": "Hacia la frontera saudí la costa está salpicada de beach clubs y resorts con playa, piscinas y acceso directo al arrecife. Es la zona para pasar el día en bañador y hacer snorkel desde la orilla.",
        "come": "En taxi desde el centro, unos 15-20 minutos; se paga la entrada de día al beach club.",
        "quando": "Todo el día; en verano mejor por la mañana.",
        "tempo": "Media jornada o más",
        "lat": 29.43501,
        "lng": 34.97432
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: excursión en barco con snorkel",
          "Almuerzo de pescado en el centro",
          "Tarde en la playa",
          "Cena en el paseo marítimo"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba",
          "Día 2 por la mañana: inmersión en el Cedar Pride o en el Museo militar submarino",
          "Día 2 por la tarde: fuerte, museo, ruinas de Ayla e iglesia",
          "Atardecer en la Plaza de la Revuelta Árabe"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: playa y snorkel en la costa sur",
          "Día 2: inmersiones o barco con fondo de cristal, luego el centro histórico",
          "Día 3: excursión a Wadi Rum en jeep y regreso por la noche, o salida hacia Petra"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro y paseo marítimo",
        "perChi": "quien quiere ir a pie",
        "testo": "Hoteles de gama media y restaurantes cerca del mar.",
        "fascia": "45-75 €"
      },
      {
        "nome": "Resorts de la costa sur",
        "perChi": "quien quiere playa y buceo",
        "testo": "Resorts de lujo con playa privada y centro de buceo, lejos del centro.",
        "fascia": "120-200 €"
      },
      {
        "nome": "Ayla",
        "perChi": "quien busca un barrio nuevo y tranquilo",
        "testo": "El complejo residencial reciente al norte del centro, construido alrededor de una marina y de lagunas artificiales, con hoteles modernos y restaurantes junto al agua. Al centro histórico se llega con un taxi corto."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "En los restaurantes del paseo marítimo, a las brasas con guarnición de ensaladas."
      },
      {
        "nome": "Sayadieh",
        "testo": "Pescado con arroz especiado y cebolla caramelizada, plato típico de Áqaba."
      },
      {
        "nome": "Falafel",
        "testo": "En los locales del centro, para un almuerzo barato."
      },
      {
        "nome": "Zumos de fruta fresca",
        "testo": "Vendidos en los quioscos del paseo marítimo."
      }
    ],
    attenzioni: [
      "Fuera de las playas de los resorts el traje de baño no es apropiado: usar un pareo.",
      "El sol sobre el mar es fuerte todo el año: protección alta y agua."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Wadi Rum",
        "distanza": "unos 70 km, una hora y cuarto en coche",
        "come": "Taxi, coche de alquiler o traslado del campamento hasta el centro de visitantes; luego jeep con guía beduino.",
        "testo": "El desierto de arena roja y torres de arenisca. Se puede hacer en el día con una ruta en jeep, pero una noche en tienda vale mucho más."
      },
      {
        "nome": "Petra",
        "distanza": "unos 125 km, 2 horas en coche",
        "come": "Traslado, taxi o coche por la Desert Highway; también hay autobuses JETT.",
        "testo": "Se puede hacer en el día, pero la entrada sin pernoctar cuesta 90 JOD y se pierde la apertura de las 6: mejor dormir en Wadi Musa."
      }
    ],
    faq: [
      {
        "domanda": "¿Áqaba es buena para hacer snorkel?",
        "risposta": "Sí: en la costa sur el arrecife empieza a pocos metros de la orilla y gafas y aletas se alquilan en la playa. El agua se mantiene templada gran parte del año."
      },
      {
        "domanda": "¿Merece la pena bucear en Áqaba?",
        "risposta": "Es agradable y fácil, con el pecio del Cedar Pride y el Museo militar submarino como puntos fuertes. Quien busca el gran Mar Rojo encuentra más en la costa egipcia."
      },
      {
        "domanda": "¿Cómo hay que vestir en Áqaba?",
        "risposta": "El bañador está bien en resorts y beach clubs; en la ciudad y en la playa pública conviene ropa discreta, con hombros y rodillas cubiertos."
      },
      {
        "domanda": "¿Cuántos días hacen falta en Áqaba?",
        "risposta": "Un día basta para mar y snorkel después del desierto. Con dos o tres se añaden inmersiones, el centro histórico y una excursión a Wadi Rum."
      },
      {
        "domanda": "¿El fuerte de Áqaba está en el Jordan Pass?",
        "risposta": "Sí. Sin pase la entrada cuesta 3 JOD (unos 3,60 €) e incluye el museo arqueológico de al lado (2026)."
      },
      {
        "domanda": "¿En Áqaba el alcohol y las compras cuestan menos?",
        "risposta": "Sí, Áqaba es zona económica especial y algunos productos, alcohol incluido, cuestan menos que en el resto del país."
      }
    ],
    esperienzeSlugs: ['diving-aqaba'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'La costa de Áqaba en el Mar Rojo, Jordania',
    immagine: '/images/giordania/aqaba-stock.jpg',
  },
]
