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
    comeArrivare: 'Vuelo internacional a Amán.',
    comeSpostarsi: 'Transfers organizados, a pie en el centro.',
    periodoMigliore: 'diciembre-enero',
    costi: 'Cena en Zajal unos 15 JOD; buggy en el desierto cerca de Amán 40 JOD (opción alternativa del Día 7).',
    erroriDaEvitare: [],
    miaEsperienza:
      'La Ciudadela, con la vista sobre toda la ciudad vieja, fue una parada bonita para cerrar el viaje antes del vuelo de regreso, aunque no es lo que más recuerdo de Jordania.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Ciudadela (Jabal al-Qala'a)",
        "testo": "La colina que domina la ciudad, habitada desde hace milenios. En la cima quedan las columnas del templo de Hércules, el palacio omeya del siglo VIII y el museo arqueológico. Desde el borde se ve todo Amán, con el teatro romano a los pies.",
        "come": "Se sube en taxi o con una caminata empinada de unos 20 minutos desde el centro. Se visita por cuenta propia; los paneles están en inglés.",
        "quando": "Abierta de 8 a 17 (2026). La última hora de la tarde tiene la mejor luz sobre el templo; a mediodía en verano no hay sombra.",
        "tempo": "1-1,5 horas",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/",
        "consiglio": "Subir en taxi y bajar a pie hacia el teatro romano: es cuesta abajo y se llega al centro."
      },
      {
        "nome": "Teatro Romano",
        "testo": "Teatro del siglo II excavado en la ladera, con unas 6.000 plazas. A los lados de la entrada hay dos pequeños museos, uno de folclore y otro de tradiciones populares. Se suben las gradas y se mira la plaza de abajo.",
        "come": "En pleno centro, a pie desde los zocos y Rainbow Street.",
        "quando": "Abierto de 8 a 17 (2026). Mañana o última hora de la tarde, cuando las gradas están a la sombra.",
        "tempo": "45 minutos",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/"
      },
      {
        "nome": "Downtown y los zocos",
        "testo": "El centro viejo alrededor de la mezquita al-Husseini: tiendas de especias, cafés, dulces, ropa, oro. Es la parte más viva y auténtica de la capital, mucho más que los barrios nuevos.",
        "come": "A pie desde el teatro romano, en pocos minutos.",
        "quando": "De 10 a 20. Los viernes por la mañana muchas tiendas abren tarde.",
        "tempo": "2 horas",
        "consiglio": "Parar para un kunafa caliente y para falafel y hummus en uno de los locales históricos del centro."
      },
      {
        "nome": "Rainbow Street",
        "testo": "Calle peatonal del barrio de Jabal Amman, con cafés, restaurantes con terraza, librerías y tiendas de artesanía. Se viene por la noche, cuando se llena de jóvenes.",
        "come": "Taxi desde el centro o 20 minutos a pie desde el teatro romano.",
        "quando": "Después del atardecer, sobre todo el fin de semana (jueves y viernes por la noche).",
        "tempo": "2-3 horas",
        "consiglio": "Elegir un local con terraza sobre la ladera: la vista de la ciudad iluminada es lo mejor."
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
      }
    ],
    zone: [
      {
        "nome": "Downtown / Al-Balad",
        "perChi": "quien quiere estar entre zocos y teatro",
        "testo": "Se va a pie a casi todo y se come muy bien por poco. De noche es ruidoso y menos cuidado, y los hoteles son sencillos."
      },
      {
        "nome": "Jabal Amman / Rainbow Street",
        "perChi": "quien quiere locales y un barrio agradable",
        "testo": "Más tranquilo, con restaurantes y cafés cerca. Las calles son empinadas y los hoteles cuestan más."
      },
      {
        "nome": "Abdali",
        "perChi": "quien viaja por trabajo o quiere hoteles modernos",
        "testo": "Zona nueva de rascacielos y cadenas internacionales. Cómodo y cuidado, pero sin carácter."
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
      "El Jordan Pass (70, 75 u 80 JOD con 1, 2 o 3 días en Petra, 2026) se compra en línea antes de llegar: cubre el visado turístico si se pasan al menos dos noches y la entrada a más de 40 sitios."
    ],
    // GUIDA-END
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
    comeArrivare: 'Aproximadamente 1h de transfer desde Amán, con parada para comprar alcohol por el camino.',
    comeSpostarsi: 'A pie dentro del yacimiento arqueológico.',
    periodoMigliore: 'mañana, antes del calor y de los grupos organizados',
    costi: 'Entrada incluida en el Jordan Pass.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Jerash fue una bonita sorpresa: una de las ciudades romanas mejor conservadas que he visto nunca, con el cardo con columnas que se pierde de vista. Mucho más que una parada de paso.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Arco de Adriano e Hipódromo",
        "testo": "La entrada monumental al sur, construida para la visita del emperador Adriano en 129-130. Un poco más allá está el hipódromo, de los mejor conservados del imperio romano.",
        "come": "El aparcamiento está junto al arco; la taquilla queda cerca.",
        "quando": "Abierto de 8 a 17 (2026). Mejor a primera hora, antes de los grupos.",
        "tempo": "30 minutos",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/"
      },
      {
        "nome": "Foro Oval y Cardo Máximo",
        "testo": "La plaza ovalada con columnas jónicas y, desde allí, la larga calle porticada que cruza la ciudad antigua. En las losas aún se ven las huellas de los carros.",
        "come": "Se recorre a pie de sur a norte en unos 15 minutos, con paradas.",
        "quando": "A primera hora y al final de la tarde por la luz sobre las columnas.",
        "tempo": "1 hora",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/",
        "consiglio": "Mirar las piedras del cardo: las huellas de los carros y los desagües muestran cómo funcionaba la calle."
      },
      {
        "nome": "Teatro Sur y Templo de Artemisa",
        "testo": "El teatro grande, de unas 3.000 plazas, donde a menudo suenan gaitas y tambores; luego el templo de Artemisa en el nivel más alto, con columnas visibles de lejos.",
        "come": "Desde el foro se sube al teatro y luego al templo en la colina en unos 20 minutos.",
        "quando": "Media mañana, cuando la luz es alta y el teatro resuena.",
        "tempo": "1 hora",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/"
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
      }
    ],
    zone: [
      {
        "nome": "Amán",
        "perChi": "quien la visita en el día",
        "testo": "Jerash está a una hora de carretera, así que se va con conductor o en tour desde Amán. Dormir en la ciudad es más cómodo."
      },
      {
        "nome": "Ciudad de Jerash",
        "perChi": "quien quiere verla al amanecer",
        "testo": "Unos pocos hoteles sencillos cerca del sitio, útiles para entrar a la apertura antes de los grupos."
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
    comeArrivare: 'Aproximadamente 1h30 de transfer desde Jerash.',
    comeSpostarsi: 'A pie en el resort, transfer organizado a Madaba para la cena.',
    periodoMigliore: 'atardecer',
    costi: 'no apunté los precios del resort: conviene compararlos en el momento de reservar.',
    erroriDaEvitare: ['Salir hacia las zonas más conservadoras o el desierto sin haber comprado el alcohol en Madaba (Soho o Hangover)'],
    miaEsperienza:
      'Flotar a ras de agua viendo cómo el sol se pone tras las colinas de Cisjordania es una experiencia aparte. Al atardecer, creo, el Mar Muerto da más de lo que se espera.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Baño y barro del Mar Muerto",
        "testo": "El mar está a unos 430 metros bajo el nivel de los océanos y es tan salado que se flota sin esfuerzo. Se queda a flor de agua, se extiende el barro por la piel y se deja secar.",
        "come": "Se entra desde un resort con playa privada o desde una playa pública equipada. Entrar despacio, sin zambullirse.",
        "quando": "Atardecer, con la luz sobre las colinas de Cisjordania.",
        "tempo": "1-2 horas en el agua",
        "consiglio": "No afeitarse el día anterior, no mojar ojos y cara y lavarse enseguida con agua dulce."
      },
      {
        "nome": "Madaba y el mapa mosaico",
        "testo": "La ciudad de los mosaicos bizantinos. En la iglesia greco-ortodoxa de San Jorge está el mapa del siglo VI que muestra Jerusalén y Tierra Santa, hecho con unos dos millones de teselas.",
        "come": "Madaba está a 30 minutos de Amán y a una hora del Mar Muerto; se visita a pie en el centro.",
        "quando": "Mañana, cuando la iglesia está menos concurrida.",
        "tempo": "1-2 horas",
        "consiglio": "Combinarla con una cena en un restaurante de la ciudad vieja, como Haret Jdoudna."
      },
      {
        "nome": "Lugar del Bautismo (Betania al otro lado del Jordán)",
        "testo": "El lugar a orillas del Jordán donde la tradición sitúa el bautismo de Jesús, patrimonio de la UNESCO desde 2015. Se camina entre restos de iglesias bizantinas hasta el río, que aquí es un hilo de agua con Cisjordania a pocos metros.",
        "come": "En coche desde el mar Muerto, unos 15 minutos. Desde el centro de visitantes sale una lanzadera y la visita es acompañada.",
        "quando": "Por la mañana, antes del calor.",
        "tempo": "1,5-2 horas",
        "url": "https://www.baptismsite.com/",
        "consiglio": "Llevar sombrero y agua: el recorrido va casi todo al sol."
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
      }
    ],
    zone: [
      {
        "nome": "Resorts junto al mar",
        "perChi": "quien quiere acceso directo a la playa",
        "testo": "Cómodos, con piscinas y spa. Los precios de comida y bebida son altos y a menudo no se puede entrar con comida de fuera."
      },
      {
        "nome": "Madaba",
        "perChi": "quien quiere gastar menos",
        "testo": "Hoteles más sencillos y restaurantes locales, con una hora de traslado hasta el mar."
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
      "No estar en el agua más de 15-20 minutos seguidos, y beber mucho.",
      "El alcohol se compra en Madaba o en tiendas específicas, no por las carreteras hacia el desierto."
    ],
    // GUIDA-END
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
    comeArrivare: 'Aproximadamente 1h30 de transfer desde Madaba hasta Karak; el monte Nebo es una parada posterior en el recorrido hacia Little Petra.',
    comeSpostarsi: 'A pie dentro de la fortaleza de Karak.',
    periodoMigliore: 'mañana',
    costi: 'Entrada a Karak incluida en el Jordan Pass.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Karak Castle es una fortaleza imponente y merece la visita. El monte Nebo, para ser sincero, me dejó indiferente: cuenta más como símbolo (es el lugar desde el que, según la tradición, Moisés vio la Tierra Prometida) que como paisaje, y es la parada de la jornada que menos recuerdo.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Castillo de Karak",
        "testo": "Fortaleza cruzada del siglo XII sobre un espolón de roca, después en manos de Saladino y de los mamelucos. Se recorren pasillos oscuros, bóvedas, cisternas y salas subterráneas, con la ciudad moderna alrededor.",
        "come": "Se llega desde Madaba por la Carretera del Rey en unas 1,5 horas. Se visita por cuenta propia, pero algunos pasillos están oscuros: llevar linterna.",
        "quando": "Abierto de 8 a 17 (2026). Por la mañana hay menos viento y el sol aún está bajo.",
        "tempo": "1-1,5 horas",
        "costo": "Incluido en el Jordan Pass (dato de mi viaje)",
        "url": "https://www.jordanpass.jo/"
      },
      {
        "nome": "Monte Nebo",
        "testo": "La colina desde la que, según la tradición, Moisés vio la Tierra Prometida. Hay el memorial con mosaicos bizantinos y una escultura en forma de serpiente.",
        "come": "En la carretera entre Madaba y Karak, a unos 10 km de Madaba. Se llega en coche hasta el aparcamiento.",
        "quando": "Día despejado, cuando desde la terraza se ve el valle del Jordán y, a veces, el Mar Muerto.",
        "tempo": "45 minutos"
      },
      {
        "nome": "Castillo de Shobak",
        "testo": "El castillo cruzado de Montréal, construido en 1115 por Balduino I sobre una colina aislada. Está menos restaurado que Karak y es más salvaje: se baja también por un túnel excavado en la roca que lleva a un manantial.",
        "come": "En la King's Highway entre Karak y Petra, a una hora de Wadi Musa. Se visita por libre; para el túnel hace falta linterna.",
        "quando": "Abierto de 8 a 17 (2026). Buena parada camino de Petra.",
        "tempo": "1 hora",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/"
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
      }
    ],
    zone: [
      {
        "nome": "Wadi Musa",
        "perChi": "quien sigue hacia Petra",
        "testo": "La continuación natural del recorrido, a unas 2 horas y media de Karak."
      },
      {
        "nome": "Karak",
        "perChi": "quien quiere una noche tranquila",
        "testo": "Pocos alojamientos, sencillos y baratos; por la noche la ciudad se apaga pronto."
      }
    ],
    sapori: [
      {
        "nome": "Mansaf",
        "testo": "Es el plato de la zona beduina de Karak: cordero, arroz y yogur salado."
      },
      {
        "nome": "Falafel y shawarma",
        "testo": "En las tascas del centro de Karak, para un almuerzo de 2-3 JOD."
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
      "El Monte Nebo vale más por su significado que por la vista: si falta tiempo se puede quitar del programa."
    ],
    // GUIDA-END
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
    comeArrivare: 'El día antes de Petra llegamos a Little Petra y a Wadi Musa en transfer desde Karak y el monte Nebo.',
    comeSpostarsi: 'A pie por todo el yacimiento, incluido el Siq y la subida al Monasterio.',
    periodoMigliore: 'a primera hora de la mañana, para el Siq y el Tesoro con menos luz directa y menos gente',
    costi: 'Entrada incluida en el Jordan Pass.',
    erroriDaEvitare: ['Ir sin botas de trekking: son indispensables, sobre todo para la subida al Monasterio (más de 800 escalones)'],
    miaEsperienza:
      'Ver el Tesoro asomar del Siq sin la multitud de siempre delante vale por sí solo el viaje. La subida al Monasterio compensa cada escalón con una vista todavía más imponente que el Tesoro. También Little Petra, el día anterior, fue preciosa: menos concurrida, nos dio la primera descarga de entusiasmo. Junto con Wadi Rum, es lo que no hay que perderse de todo el viaje.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "El Siq y el Tesoro (Al-Khazneh)",
        "testo": "El desfiladero natural de unos 1,2 km entre paredes de arenisca rosa, que se estrecha hasta mostrar de repente la fachada del Tesoro, de unos 40 metros de alto y excavada en la roca.",
        "come": "De la entrada al Tesoro se camina unos 30-40 minutos. Se puede alquilar un caballo, pero solo cubre el tramo hasta el inicio del Siq.",
        "quando": "El recinto abre a las 6 (cierre indicado a las 17, 2026). Entrar a primerísima hora, con el Siq vacío; la luz llega al Tesoro hacia las 9-10.",
        "tempo": "45 minutos",
        "costo": "50 JOD 1 día, 55 dos, 60 tres para quien duerme al menos una noche en Jordania; 90 JOD en excursión de un día sin pernoctar. Incluido en el Jordan Pass.",
        "consiglio": "La encontramos casi desierta: ver el Tesoro asomar del Siq sin multitud vale por sí solo el viaje."
      },
      {
        "nome": "Calle de las Fachadas y Teatro",
        "testo": "Pasado el Tesoro el valle se abre a tumbas excavadas en la roca y a un teatro nabateo tallado en la piedra.",
        "come": "A pie desde el Tesoro, todo llano.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/"
      },
      {
        "nome": "Tumbas Reales",
        "testo": "Un grupo de tumbas monumentales excavadas en la montaña: la Tumba de la Urna, la Tumba de Seda y la Tumba del Palacio. Se puede entrar en las cámaras.",
        "come": "Pocos minutos a pie desde el teatro.",
        "quando": "Tarde, cuando la luz roja enciende las paredes.",
        "tempo": "45 minutos",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/"
      },
      {
        "nome": "Monasterio (Ad-Deir)",
        "testo": "Fachada de unos 45 metros, más grande que el Tesoro y más sobria. Se llega tras una subida de unos 800 escalones en la roca.",
        "come": "Se parte del centro de Petra: unos 40-45 minutos de subida. En el camino hay puestos y un quiosco frente al monumento.",
        "quando": "Después del mediodía, cuando el sol da sobre la fachada (por la mañana está a la sombra).",
        "tempo": "2-2,5 horas ida y vuelta",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/",
        "consiglio": "Zapatos de trekking y agua; el té de menta del quiosco compensa la subida."
      },
      {
        "nome": "Little Petra (Siq al-Barid)",
        "testo": "Un pequeño cañón a unos 8 km de Wadi Musa, con edificios y cisternas nabateos. Menos famoso y más tranquilo que Petra.",
        "come": "En taxi o con el traslado desde Wadi Musa en 15 minutos. Se camina por el cañón.",
        "quando": "Tarde, el día antes de Petra.",
        "tempo": "1,5-2 horas",
        "consiglio": "Ideal para calentar antes de Petra, con poca gente.",
        "costo": "Entrada libre"
      }
    ],
    programmi: [
      {
        "titolo": "1 día en Petra",
        "tappe": [
          "Entrada a la apertura, Siq y Tesoro",
          "Calle de las Fachadas y Teatro",
          "Tumbas Reales",
          "Almuerzo cerca del Qasr al-Bint",
          "Subida al Monasterio a primera hora de la tarde",
          "Regreso"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Little Petra y llegada a Wadi Musa",
          "Día 2: Petra como arriba, con medio día más para el Alto Lugar del Sacrificio o para Petra de noche en las noches en que está abierta"
        ]
      }
    ],
    zone: [
      {
        "nome": "Wadi Musa",
        "perChi": "quien quiere entrar a la apertura",
        "testo": "El pueblo bajo la entrada, con hoteles de todas las gamas y restaurantes. A pocos minutos del sitio a pie o en lanzadera."
      },
      {
        "nome": "Little Petra / Beidha",
        "perChi": "quien quiere silencio",
        "testo": "Algunos campamentos y casas de huéspedes cerca del cañón, más aislados y con poca vida por la noche."
      }
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
      "Quien ofrece paseos a caballo, camello o burro por el Siq suele decir que el precio está incluido: no lo está en la entrada, acordar antes.",
      "Los burros para subir al Monasterio no se recomiendan por el bienestar de los animales.",
      "Llevar agua y gorra: en el sitio hay pocas fuentes y en verano hace mucho calor.",
      "Evitar las noches de viento fuerte para Petra de noche: la visita puede cancelarse."
    ],
    // GUIDA-END
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
    comeArrivare: 'Aproximadamente 1h30 de transfer desde Wadi Musa/Petra.',
    comeSpostarsi: 'Jeep 4x4 con guía beduino, camello para el tramo inicial en el desierto.',
    periodoMigliore: 'la época de Nochevieja, para la fiesta en el desierto bajo las estrellas; el amanecer para la mejor luz sobre las dunas',
    costi: 'Paseo en camello 20 JOD; comida de picnic 10 JOD.',
    erroriDaEvitare: [],
    miaEsperienza:
      'El safari en jeep entre cañones y dunas rojas, el sandboarding, el atardecer en las dunas al llegar al campamento y luego la fiesta de Nochevieja bajo uno de los cielos estrellados más bonitos que he visto nunca: difícil imaginar una manera más absurda de despedir el año viejo. Junto con Petra, es lo que no hay que perderse del viaje por Jordania.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Safari en jeep entre cañones y dunas",
        "testo": "La forma normal de visitar el desierto: una camioneta beduina con guía, entre formaciones de arenisca roja, cañones y dunas. Las paradas clásicas son el Manantial de Lawrence, el cañón de Khazali con inscripciones nabateas y el puente de roca de Umm Fruth.",
        "come": "Se sale del pueblo de Rum con el guía del campamento o desde el centro de visitantes. El tour se paga según la duración y se acuerda de antemano.",
        "quando": "Un recorrido de 4-6 horas, con salida por la mañana o por la tarde para el atardecer.",
        "tempo": "4-6 horas",
        "costo": "Entrada incluida en el Jordan Pass",
        "url": "https://www.jordanpass.jo/",
        "consiglio": "Pedir que el recorrido incluya un atardecer en las dunas."
      },
      {
        "nome": "Camello en el desierto",
        "testo": "Un paseo de unos 45 minutos a lomos de camello, a la manera tradicional.",
        "come": "Se organiza desde el campamento.",
        "quando": "Amanecer o atardecer.",
        "tempo": "45 minutos",
        "costo": "20 JOD (de mi viaje)"
      },
      {
        "nome": "Noche en campamento de tiendas",
        "testo": "El campamento beduino con cena cocida bajo la arena (zarb), música y un cielo sin luces. Las tiendas van de las más sencillas a burbujas transparentes.",
        "come": "El traslado en jeep sale del pueblo.",
        "quando": "Una noche, mejor dos si se quiere tiempo para caminar.",
        "tempo": "Una noche",
        "consiglio": "Llevar una sudadera: de noche la temperatura baja incluso en primavera."
      }
    ],
    programmi: [
      {
        "titolo": "1 día y una noche",
        "tappe": [
          "Llegada desde Petra o Áqaba, jeep hasta el campamento",
          "Recorrido de 4-6 horas entre cañones y dunas",
          "Atardecer, cena beduina y cielo estrellado",
          "Amanecer en las dunas y regreso"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campamento de tiendas tradicional",
        "perChi": "quien quiere la experiencia beduina",
        "testo": "Tiendas sencillas, baño compartido, cena y desayuno incluidos. Poca electricidad: cargar los teléfonos antes."
      },
      {
        "nome": "Campamento con baño privado",
        "perChi": "quien quiere más comodidad",
        "testo": "Tiendas y burbujas con baño, a veces con aire acondicionado. Cuestan más."
      },
      {
        "nome": "Pueblo de Rum",
        "perChi": "quien no quiere dormir en el desierto",
        "testo": "Casas de huéspedes sencillas a los pies del valle, de donde salen los recorridos."
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
      "El recorrido en jeep tiene tarifas fijas en el centro de visitantes: compararlas con el precio del campamento.",
      "De noche hace frío incluso en primavera y otoño: llevar ropa de abrigo.",
      "No alejarse solo del campamento por la noche, los caminos se pierden en la oscuridad.",
      "Las tormentas de arena pueden cancelar los recorridos: dejar margen en el programa."
    ],
    // GUIDA-END
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
    comeArrivare: 'Aproximadamente 1h de transfer desde Wadi Rum.',
    comeSpostarsi: 'Transfer a la playa (15 minutos desde el hotel).',
    periodoMigliore: 'día de sol, después del amanecer en el desierto',
    costi: 'Boat tour con Deep Blue incluido en el paquete.',
    erroriDaEvitare: [],
    miaEsperienza:
      'En Áqaba hicimos también buceo: agradable, pero nada especial comparado con otros puntos del Mar Rojo más famosos por las inmersiones (Egipto sobre todo). Sigue siendo una bonita jornada para desconectar después del desierto, entre snorkel y deportes de agua.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Snorkel e inmersiones",
        "testo": "El Mar Rojo a pocas decenas de minutos del desierto, con arrecifes de coral cerca de la orilla y agua muy cálida. Está también el pecio del Cedar Pride, hundido en 1985 como atracción submarina.",
        "come": "Se reserva un centro de buceo o un barco en la marina.",
        "quando": "Todo el año, pero primavera y otoño son los mejores meses.",
        "tempo": "Medio día",
        "consiglio": "Las inmersiones me parecieron agradables pero menos espectaculares que otros puntos del Mar Rojo."
      },
      {
        "nome": "Paseo marítimo y playas",
        "testo": "El centro tiene un paseo marítimo con cafés y la playa pública; más al sur, las playas equipadas de los resorts y del parque marino. En la ciudad se viste con sobriedad; el bañador está bien dentro de las instalaciones.",
        "come": "Desde los hoteles principales en 15 minutos en taxi.",
        "quando": "Todo el día, sobre todo por la tarde.",
        "tempo": "Medio día"
      },
      {
        "nome": "Fuerte de Aqaba y museo",
        "testo": "El pequeño fuerte mameluco del siglo XVI en el paseo marítimo, con el escudo hachemí sobre la puerta: la revuelta árabe lo tomó en 1917. Al lado está el museo arqueológico de la ciudad.",
        "come": "A pie desde el paseo marítimo del centro, cerca del mástil de la bandera.",
        "quando": "Abierto de 8 a 17 (2026). Última hora de la tarde, antes de la puesta de sol sobre el mar.",
        "tempo": "45 minutos",
        "costo": "Incluido en el Jordan Pass",
        "url": "https://www.jordanpass.jo/"
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
      }
    ],
    zone: [
      {
        "nome": "Centro y paseo marítimo",
        "perChi": "quien quiere ir a pie",
        "testo": "Hoteles de gama media y restaurantes cerca del mar."
      },
      {
        "nome": "Resorts de la costa sur",
        "perChi": "quien quiere playa y buceo",
        "testo": "Resorts de lujo con playa privada y centro de buceo, lejos del centro."
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
      "El sol sobre el mar es fuerte todo el año: protección alta y agua.",
      "En Áqaba se puede comprar alcohol en tiendas específicas, pero en el resto de Jordania es difícil."
    ],
    // GUIDA-END
    esperienzeSlugs: ['diving-aqaba'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'La costa de Áqaba en el Mar Rojo, Jordania',
    immagine: '/images/giordania/aqaba-stock.jpg',
  },
]
