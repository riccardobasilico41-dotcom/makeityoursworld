import type { Destinazione } from '@/lib/types'

export const destinazioniArabiaSaudita: Destinazione[] = [
  {
    slug: 'jeddah',
    paeseSlug: 'arabia-saudita',
    ordine: 1,
    nome: 'Yeda',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      "El puerto del Mar Rojo por el que durante siglos han pasado los peregrinos camino de La Meca, y la ciudad más abierta y relajada del Reino. En el casco antiguo, Al-Balad, quedan las casas-torre de piedra coralina con los mashrabiyas de madera en las ventanas. Es patrimonio de la UNESCO y el único lugar de Arabia Saudí donde se camina por una verdadera ciudad vieja.",
    percheAndarci:
      "Es la puerta de entrada natural del país, y Al-Balad al atardecer es lo más bonito del oeste saudí. Además, Yeda tiene con el mundo exterior una relación que el resto del Reino no tiene: aquí se llega desde hace siglos desde todos los rincones del mundo musulmán, y se nota.",
    cosaVedere: [
      "Al-Balad, el casco antiguo de la UNESCO, con las casas-torre de piedra coralina y los rawashin, las fachadas de madera tallada",
      "La Casa Nassif, la más conocida de las casas-torre, con la rampa interior construida para que subieran los camellos",
      "El zoco Al-Alawi, dentro de Al-Balad, todavía en actividad",
      "La Corniche y la Fuente del Rey Fahd, el chorro de agua más alto del mundo",
      "La mezquita flotante de Al-Rahma, en la Corniche",
      "Los arrecifes del Mar Rojo mar adentro, entre los mejor conservados del planeta",
    ],
    cosaFare: [
      "Pasear por Al-Balad al atardecer, cuando las fachadas de madera cogen la luz (hay una ficha de experiencia dedicada)",
      "Cenar pescado en la Corniche, como hacen los saudíes el jueves por la noche",
      "Snorkel o inmersiones en los arrecifes del Mar Rojo, mucho menos concurridos que los egipcios",
      "Recorrer los barrios de arte contemporáneo, lo más inesperado del país en Yeda",
    ],
    doveDormire:
      "Cerca de Al-Balad para estar en la parte histórica, o en la Corniche por el mar y los restaurantes. Yeda es grande y dispersa: la ubicación cuenta más que en otros sitios.",
    doveMangiare:
      "Yeda es la ciudad donde mejor se come en Arabia Saudí, porque siglos de peregrinación han traído aquí cocinas de todo el mundo musulmán. Hay que probar el kabsa, el plato nacional de arroz especiado con carne, el mandi yemení cocinado en horno enterrado, el foul en el desayuno y el pescado del Mar Rojo a la parrilla en la Corniche. Luego el café árabe con dátiles, que aquí es un ritual de hospitalidad más que una consumición. **En el país no hay alcohol**, ni siquiera en los hoteles.",
    comeArrivare:
      "Vuelo internacional al King Abdulaziz (JED), el principal aeropuerto del oeste saudí. Es también el aeropuerto donde aterriza quien usa el visado de escala de Saudia o flynas.",
    comeSpostarsi:
      "Uber y Careem funcionan muy bien y cuestan poco: son el medio normal. Al-Balad se recorre a pie, el resto de la ciudad no, porque las distancias son de metrópolis americana.",
    periodoMigliore:
      "de noviembre a marzo. Por el Mar Rojo, Yeda es cálida y húmeda casi todo el año, y en verano el calor y la humedad juntos pesan incluso para los estándares de la región.",
    costi: "Pasear por Al-Balad no cuesta nada; las casas-museo tienen entradas contenidas. Los hoteles tienen precios de capital.",
    erroriDaEvitare: [
      "Intentar ir a La Meca: está **vetada a los no musulmanes**, en la autopista los carteles indican los desvíos obligatorios y hay controles. No es una formalidad que se pueda eludir",
      "Visitar Al-Balad a mediodía: el barrio se anima a última hora de la tarde, y solo entonces la luz llega a las fachadas de madera",
      "Fotografiar a personas, sobre todo a mujeres, sin un permiso explícito: aquí es un problema más serio que en otros lugares de la región",
      "Esperar encontrar alcohol: no hay en todo el país, ni siquiera en los hoteles internacionales",
    ],
    confronti: [
      {
        titolo: 'Yeda o Riad como puerta de entrada',
        introduzione:
          "Arabia Saudí tiene dos aeropuertos principales a casi mil kilómetros uno de otro, y elegir por cuál entrar cambia la forma de todo el itinerario.",
        opzioni: [
          {
            nome: 'Entrar por Yeda',
            sintesi: 'La puerta del oeste: Al-Balad en la ciudad, AlUla a un vuelo corto o a siete horas de carretera, el Mar Rojo delante.',
            costo: 'vuelos directos frecuentes desde Europa',
            durata: 'base ideal para un itinerario por el oeste de 7-9 días',
            pro: [
              'Es la ciudad más agradable y abierta del país, con el casco antiguo de la UNESCO',
              'AlUla está mucho más cerca que desde Riad',
              'El Mar Rojo está al alcance de la mano, con arrecifes casi intactos',
              'Es el aeropuerto donde aterriza quien usa el visado de escala de Saudia o flynas',
            ],
            contro: ['Calor y humedad pesados casi todo el año', 'Más lejos del Asir y del este del país', 'Ciudad dispersa, donde uno solo se mueve en coche'],
            perChi: 'Cualquiera que venga por primera vez o tenga pocos días. Con un visado de escala de cuatro días es en la práctica la única opción sensata.',
          },
          {
            nome: 'Entrar por Riad',
            sintesi: 'La capital del interior, con Diriyah, patrimonio de la UNESCO, a las puertas y el Edge of the World a una hora y media de pista.',
            costo: 'vuelos directos desde Europa, a menudo algo más caros',
            durata: 'base para un itinerario por el centro y el este',
            pro: [
              'Diriyah, la capital original de los Saud, es patrimonio de la UNESCO y está a veinte minutos del centro',
              'El Edge of the World, el escarpe del Tuwaiq, es una de las cosas más espectaculares del país',
              'El clima es seco: a igual temperatura se soporta mucho mejor que en Yeda',
              'Es más cómoda para continuar hacia el este y hacia el Rub al-Khali',
            ],
            contro: [
              'Ciudad moderna y vertical, sin un casco antiguo que recorrer a pie',
              'En la vida cotidiana es más conservadora y menos relajada que Yeda',
              'AlUla queda lejos: el vuelo interno es casi obligatorio',
            ],
            perChi: 'Quien tiene al menos diez días, o quien entra y sale por dos aeropuertos distintos.',
          },
        ],
        raccomandazione:
          "Con menos de una semana, Yeda sin dudas: se aterriza, se ve Al-Balad, se vuela a AlUla y se vuelve. Con diez días o más conviene entrar por un lado y salir por el otro (Yeda, AlUla, luego vuelo a Riad con Diriyah y el Edge of the World), para no repetir mil kilómetros hacia atrás.",
      },
    ],
    miaEsperienza:
      "Yeda descoloca a quien llega convencido de que Arabia Saudí es toda igual. Es una ciudad de mar, en sus maneras más mediterránea de lo que uno espera, y la diferencia con Riad se nota en media jornada. Al-Balad es la razón principal para venir, y hay que verlo a la hora adecuada. De día es un barrio polvoriento en restauración; a última hora de la tarde la luz baja se posa sobre los rawashin, las fachadas de madera tallada, algunas de cuatro plantas, hechas para dejar circular el aire y para que las mujeres pudieran mirar fuera sin ser vistas, y el barrio cambia. Muchas casas están apuntaladas y varias se han derrumbado: la restauración avanza a retazos, y quien ve Al-Balad hoy lo ve a medio camino. La otra cosa que queda es más social que monumental: la Corniche el jueves por la noche, con las familias que extienden las alfombras en el césped, las barbacoas encendidas y los niños jugando hasta medianoche. Es allí, más que en cualquier museo, donde mejor se entiende qué país es este.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Al-Balad",
        "testo": "El casco antiguo, patrimonio de la UNESCO desde 2014 como «Yeda histórica, puerta de La Meca», con las casas-torre de piedra coralina y las roshan, las grandes ventanas de madera tallada. La restauración avanza a trozos: algunas casas se han convertido en hoteles, otras siguen apuntaladas.",
        "come": "Se recorre a pie por las callejuelas; taxi o Uber hasta el borde del barrio. Con un guía se entiende mejor lo que se ve.",
        "quando": "Última hora de la tarde, cuando la luz baja toca la madera y el barrio se anima. A mediodía está polvoriento y vacío.",
        "tempo": "2-3 horas",
        "consiglio": "Terminar la visita en los callejones del zoco con un café árabe con cardamomo."
      },
      {
        "nome": "Casa Nassif",
        "testo": "Una de las casas-torre más conocidas de Al-Balad.",
        "come": "Dentro de Al-Balad, a pie.",
        "quando": "Mañana o final de la tarde. Horario de los interiores, a comprobar en el lugar.",
        "tempo": "45 minutos"
      },
      {
        "nome": "Corniche, Fuente del Rey Fahd y mezquita Al-Rahma",
        "testo": "El paseo marítimo de la ciudad, con la Fuente del Rey Fahd, el chorro de agua más alto del mundo según el Guinness (312 metros), y la mezquita Al-Rahma, llamada «flotante» porque está construida en la orilla y con la marea alta parece apoyada sobre el agua. Por la noche las familias pasean y hacen pícnic.",
        "come": "Taxi o Uber desde el centro. Se pasea por el paseo marítimo.",
        "quando": "Atardecer y noche, sobre todo el fin de semana.",
        "tempo": "2 horas",
        "consiglio": "Cenar pescado en alguno de los restaurantes de la zona."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Tarde: Al-Balad y Casa Nassif",
          "Zoco Al-Alawi al atardecer",
          "Noche: Corniche, fuente y cena de pescado"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba",
          "Día 2: mañana en el Mar Rojo con snorkel o buceo, luego barrios de arte contemporáneo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Al-Balad",
        "perChi": "quien quiere dormir en el centro histórico",
        "testo": "Pocos alojamientos, restaurados en casas antiguas. Cerca de todo pero lejos del mar."
      },
      {
        "nome": "Corniche",
        "perChi": "quien quiere mar y comodidad",
        "testo": "Hoteles y resorts en el paseo marítimo, con restaurantes cerca."
      },
      {
        "nome": "Barrios nuevos",
        "perChi": "quien prefiere hoteles internacionales",
        "testo": "Torres de cristal y cadenas globales, cómodos pero anónimos."
      }
    ],
    sapori: [
      {
        "nome": "Kabsa",
        "testo": "El plato nacional: arroz especiado con carne o pollo."
      },
      {
        "nome": "Mandi",
        "testo": "Carne yemení cocida en horno subterráneo, con arroz ahumado."
      },
      {
        "nome": "Foul",
        "testo": "Habas guisadas para el desayuno, con pan caliente."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "Del Mar Rojo, en la Corniche."
      }
    ],
    attenzioni: [
      "Seguridad: en noviembre de 2026 el gobierno británico desaconseja los viajes no esenciales a toda Arabia Saudí y cualquier viaje a menos de 10 km de la frontera con Yemen, por los ataques con misiles y drones (también contra el aeropuerto de Riad). Consultar las recomendaciones oficiales de viaje y el seguro antes de salir.",
      "La Meca está prohibida a los no musulmanes: en la autopista los carteles indican los desvíos obligatorios. No es una norma que se pueda esquivar.",
      "Al-Balad a mediodía: el barrio se anima a última hora de la tarde, cuando la luz llega a la madera.",
      "Fotos a las personas, sobre todo a las mujeres: pedir siempre permiso.",
      "Normas de vestimenta y comportamiento en público: comprobar los canales oficiales antes de partir."
    ],
    // GUIDA-END
    esperienzeSlugs: ['al-balad-jeddah'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'La puerta de piedra con dos torres a la entrada del barrio histórico de Al-Balad, Yeda',
    immagine: '/images/arabia-saudita/jeddah.jpg',
  },
  {
    slug: 'alula',
    immagine: '/images/arabia-saudita/alula.jpg',
    paeseSlug: 'arabia-saudita',
    ordine: 2,
    nome: 'AlUla y Hegra',
    tipologia: ['archeologia', 'deserto', 'paesaggi'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      "Un oasis en un desierto de arenisca roja, con ciento once tumbas monumentales excavadas en la roca por los nabateos, los mismos de Petra, y con una suerte que Petra no tiene: casi nadie delante. Hegra fue el primer sitio saudí inscrito en el patrimonio de la UNESCO, en 2008.",
    percheAndarci:
      "Es la razón principal para venir a Arabia Saudí. Hegra era la segunda ciudad del reino nabateo después de Petra: las tumbas son igual de elaboradas y están mucho mejor conservadas, porque aquí la arenisca es más resistente, y se visitan con un número de personas que en Petra sería impensable.",
    cosaVedere: [
      "Hegra (Mada'in Salih), con las 111 tumbas monumentales y la Qasr al-Farid, la «tumba solitaria» que quedó inacabada",
      "Jabal Ikmah, la «biblioteca al aire libre» con cientos de inscripciones en dadanítico, lihyánico, nabateo y árabe antiguo",
      "Dadan, capital de los reinos de Dadan y Lihyan, más antigua que Hegra",
      "La ciudad vieja de AlUla, un laberinto de casas de adobe a los pies de la ciudadela",
      "Elephant Rock (Jabal AlFil), el monolito de arenisca erosionado con forma de elefante",
      "El oasis de AlUla, con cientos de miles de palmeras datileras y los senderos a la sombra entre los campos",
    ],
    cosaFare: [
      "La visita guiada a Hegra, obligatoria y con aforo limitado (hay una ficha de experiencia dedicada)",
      "Jabal Ikmah a primera hora de la mañana, cuando la luz rasante hace resaltar los grabados",
      "El atardecer en Elephant Rock, el punto de encuentro nocturno de la gente del lugar",
      "Caminar o pedalear por el oasis, por los senderos entre las palmeras",
      "En temporada, una noche en el desierto o un vuelo en globo sobre las formaciones de arenisca",
    ],
    doveDormire:
      "AlUla tiene pocos alojamientos para la demanda y precios altos, desde los resorts en el desierto, carísimos, hasta los alojamientos más sencillos de la ciudad nueva. **Hay que reservar con mucha antelación**, sobre todo entre diciembre y febrero, en plena temporada, con festivales y eventos.",
    doveMangiare:
      "La oferta ha crecido deprisa, pero sigue siendo limitada y cara comparada con el resto del país. En la ciudad vieja restaurada hay restaurantes y cafés; en la ciudad nueva se come en los locales de barrio a precios normales. Hay que buscar los dátiles del oasis, el producto local, para comprar directamente a los productores.",
    comeArrivare:
      "Normalmente con un vuelo interno a AlUla (ULH) desde Riad o Yeda. Como alternativa hay unas 7 horas de carretera desde Yeda y 3-4 desde Medina: las carreteras son excelentes y la gasolina cuesta poquísimo, así que el coche de alquiler es una opción posible.",
    comeSpostarsi:
      "En AlUla hay un servicio de lanzaderas entre los sitios principales; para lo demás hace falta coche. **En Hegra no se entra con vehículo propio**: solo se accede con los autobuses y los guías del sitio.",
    periodoMigliore:
      "de octubre a marzo; los mejores meses son diciembre y febrero, con temperaturas entre 12 y 25 grados. En verano se supera con mucho los 40 y la visita se vuelve imposible. Las noches en el desierto son frías incluso en invierno.",
    costi:
      "la entrada a Hegra con visita guiada tiene un billete con aforo limitado que hay que reservar online; los demás sitios tienen entradas separadas o combinadas. El alojamiento es la partida más cara de todo el viaje por Arabia Saudí.",
    erroriDaEvitare: [
      "Presentarse en Hegra sin reserva: los accesos son limitados, solo se entra con guía y en los meses de más afluencia las plazas se agotan",
      "Reservar el alojamiento en el último momento: AlUla tiene pocos alojamientos y en temporada alta se llena",
      "Programarla en verano",
      "Quedarse en Hegra y saltarse Jabal Ikmah y Dadan: están en la misma zona y cuentan los mil años anteriores a los nabateos",
      "Esperar solo «la Petra sin turistas»: el paisaje es distinto y en cierto modo más bonito, pero las tumbas son menos numerosas y no hay un Siq",
    ],
    miaEsperienza:
      "Hegra es la razón por la que se coge el avión a Arabia Saudí, y cumple lo que promete, siempre que se ajusten las expectativas. Quien llega pensando en «Petra sin multitudes» se encuentra otra cosa: las tumbas son ciento once frente a los cientos de Petra, no hay un Siq que prepare la sorpresa y no hay un Tesoro. En cambio, hay lo que en otros sitios ya no hay. Uno se queda delante de una fachada nabatea esculpida hace dos mil años, de diez metros de alto, con las inscripciones todavía legibles en el dintel, y alrededor no hay nadie: ni vendedores, ni camellos, ni grupos. La Qasr al-Farid, la tumba solitaria que quedó inacabada, está sola en medio del desierto y muestra cómo trabajaban: esculpían de arriba hacia abajo, y ella se ve a medias. El resto de la zona vale tanto como Hegra. Jabal Ikmah es una pared de roca cubierta de inscripciones en cuatro alfabetos, dejadas por quienes pasaban por aquí hace dos mil quinientos años: una especie de registro público esculpido en la piedra. En lo práctico cuenta una cosa: solo se entra con guía y con reserva, y en AlUla los alojamientos son pocos y caros.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hegra (Mada'in Salih)",
        "testo": "El primer sitio saudí patrimonio de la UNESCO: más de 110 tumbas monumentales nabateas talladas en la arenisca hace unos dos mil años, muchas con inscripciones sobre el difunto. Qasr al-Farid, la tumba solitaria, quedó inacabada: se ve cómo tallaban de arriba abajo.",
        "come": "Solo con visita guiada. Los tours son limitados cada día: mejor reservar online, en taquilla solo hay plaza si queda alguna. Punto de encuentro en la puerta sur de Hegra, con aparcamiento gratuito, o autobús desde el Winter Park de AlUla.",
        "quando": "Mañana o última hora de la tarde, con menos calor.",
        "tempo": "2-3 horas",
        "url": "https://www.experiencealula.com/en/places-to-go/hegra",
        "consiglio": "Reservar con semanas de antelación en los meses punta. No es «Petra sin multitud»: es más pequeña y más silenciosa.",
        "costo": "Hegra Day Tour con guía 95 SAR por persona (2026)"
      },
      {
        "nome": "Jabal Ikmah",
        "testo": "Un cañón con cientos de inscripciones grabadas en la arenisca, sobre todo en dadanítico y otras antiguas lenguas norarábigas, casi todas de la segunda mitad del I milenio a. C.",
        "come": "Con el tour Dadan y Jabal Ikmah: se aparca gratis en el Winter Park de AlUla y un autobús lleva al centro de visitantes de Dadan, luego a Jabal Ikmah y vuelta.",
        "quando": "Por la mañana, cuando la luz rasante resalta los grabados.",
        "tempo": "1-1,5 horas",
        "url": "https://www.experiencealula.com/en/places-to-go/jabal-ikmah",
        "costo": "Tour Dadan y Jabal Ikmah desde 60 SAR por persona, unas 2 horas (2026)"
      },
      {
        "nome": "Dadan",
        "testo": "La capital de los reinos de Dadan y Lihyan hace más de dos mil años, en la Ruta del Incienso, con tumbas excavadas en la pared roja: algunas tienen leones sentados tallados en la roca y se cree que eran de la élite.",
        "come": "Con el mismo tour de Jabal Ikmah, que sale del Winter Park; no se puede ir por libre en coche. Tours limitados, mejor reservar online.",
        "quando": "Mañana.",
        "tempo": "1,5 horas",
        "url": "https://www.experiencealula.com/en/places-to-go/dadan",
        "consiglio": "Suele combinarse con Jabal Ikmah.",
        "costo": "Incluido en el tour Dadan y Jabal Ikmah (desde 60 SAR, 2026)"
      },
      {
        "nome": "Ciudad vieja de AlUla y Elephant Rock",
        "testo": "El pueblo de callejones y casas de adobe, habitado desde el siglo XII en la ruta de peregrinos entre Damasco y La Meca, hoy restaurado con tiendas y restaurantes; y la roca con forma de elefante, donde la gente se reúne al atardecer.",
        "come": "La ciudad vieja se recorre a pie; Elephant Rock está a poca distancia en coche, con aparcamiento gratuito y una pasarela de madera.",
        "quando": "Ciudad vieja de la tarde a la noche; Elephant Rock abierta todos los días de 16 a medianoche (2026), mejor al atardecer.",
        "tempo": "2 horas",
        "consiglio": "No se puede subir a la roca; por la noche en el desierto hace frío y hay braseros.",
        "costo": "Ciudad vieja de acceso libre, visita guiada 70 SAR (2026)",
        "url": "https://www.experiencealula.com/en/places-to-go/alula-old-town"
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Hegra con visita guiada, atardecer en Elephant Rock",
          "Día 2: Jabal Ikmah y Dadan por la mañana, ciudad vieja por la tarde"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ciudad nueva de AlUla",
        "perChi": "quien quiere precios normales",
        "testo": "Hoteles de barrio y locales a precios más bajos, algo lejos de los sitios."
      },
      {
        "nome": "Resorts en el desierto",
        "perChi": "quien quiere lujo",
        "testo": "Pocos alojamientos de alto nivel, muy caros y a veces lejos de todo."
      },
      {
        "nome": "Ciudad vieja",
        "perChi": "quien quiere el ambiente histórico",
        "testo": "Restaurantes y cafés en la parte restaurada, con alojamiento limitado."
      }
    ],
    sapori: [
      {
        "nome": "Dátiles de AlUla",
        "testo": "El producto del oasis, para comprar a los productores."
      },
      {
        "nome": "Kabsa",
        "testo": "Arroz especiado con carne, en los locales de barrio."
      },
      {
        "nome": "Café árabe",
        "testo": "Con cardamomo, servido con dátiles."
      },
      {
        "nome": "Pan de horno",
        "testo": "Cocido en los hornos de barrio."
      }
    ],
    attenzioni: [
      "Seguridad: en noviembre de 2026 el gobierno británico desaconseja los viajes no esenciales a toda Arabia Saudí y cualquier viaje a menos de 10 km de la frontera con Yemen, por los ataques con misiles y drones (también contra el aeropuerto de Riad). Consultar las recomendaciones oficiales de viaje y el seguro antes de salir.",
      "Presentarse en Hegra sin reserva: los tours son limitados y en los meses punta se agotan.",
      "Reservar el alojamiento a última hora: en AlUla hay pocos y en temporada alta se llenan.",
      "En verano el calor es extremo: venir entre octubre y marzo.",
      "Quedarse en Hegra y saltarse Jabal Ikmah y Dadan: son igual de interesantes."
    ],
    // GUIDA-END
    esperienzeSlugs: ['hegra-alula'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Un dromedario en primer plano sobre la arena de AlUla, con un pináculo de arenisca y las rocas del desierto al fondo',
  },
  {
    slug: 'riyadh-diriyah',
    paeseSlug: 'arabia-saudita',
    ordine: 3,
    nome: 'Riad y Diriyah',
    tipologia: ['città', 'storia', 'deserto'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "La capital, en el corazón de la meseta del Néyed: una ciudad vertical y recientísima, que en dos generaciones pasó de aldea fortificada a metrópolis de siete millones de habitantes. A las puertas está Diriyah, la primera capital de la dinastía Saud, construida en adobe y hoy patrimonio de la UNESCO. A una hora y media de pista está el escarpe del Tuwaiq, que todos llaman Edge of the World.",
    percheAndarci:
      "Aquí se entiende lo deprisa que se ha transformado este país. Y Diriyah y el Edge of the World, a media hora y a hora y media del centro, son dos de las mejores cosas del Reino.",
    cosaVedere: [
      "Diriyah y el barrio de At-Turaif, patrimonio de la UNESCO, construido todo en adobe",
      "El Museo Nacional Saudí, el mejor del país para entender la historia de la península",
      "El Kingdom Centre, con el skybridge suspendido entre las dos torres",
      "Masmak Fort, la fortaleza de adobe desde la que en 1902 comenzó la reconquista de Ibn Saud",
      "El zoco Al-Zal y el barrio de Deira, el Riad de antes de los rascacielos",
      "El Edge of the World (Jebel Fihrayn), el escarpe del Tuwaiq asomado a la nada",
    ],
    cosaFare: [
      "Diriyah al atardecer, cuando los muros de adobe se vuelven naranjas (hay una ficha de experiencia dedicada)",
      "La excursión al Edge of the World, que requiere un 4x4 y media jornada (hay una ficha de experiencia dedicada)",
      "Subir al skybridge del Kingdom Centre para ver la ciudad",
      "Una velada en los barrios nuevos, donde desde 2019 han abierto cafés, restaurantes y locales que hace cinco años no existían",
    ],
    doveDormire:
      "La zona más cómoda para transporte y restaurantes es el centro moderno (Olaya, King Fahd Road). Diriyah tiene alojamientos de gama alta en el distrito restaurado. Riad es enorme y dispersa: sin coche o Uber no se llega a ninguna parte.",
    doveMangiare:
      "La cocina del Néyed es distinta de la de Yeda, más seca: el kabsa como plato principal, la jareesh (trigo partido cocido largo rato) y el mutabbaq. En los barrios viejos hay restaurantes populares excelentes que cuestan poquísimo; en los nuevos, una escena de cafés y restaurantes que ha estallado en los últimos años, con precios de capital. Hay que probar el café árabe saudí, claro y especiado con cardamomo, servido con dátiles.",
    comeArrivare: "En avión al King Khalid International (RUH), con vuelos directos desde Europa. Desde Yeda, vuelo interno de unas 2 horas.",
    comeSpostarsi:
      "Con Uber y Careem, el medio normal, que cuestan poco. El metro de Riad se ha inaugurado hace poco y cubre los ejes principales. Para el Edge of the World hace falta un 4x4 con conductor: el último tramo es por pista y es fácil perderse.",
    periodoMigliore:
      "de noviembre a marzo. En el interior el clima es seco, y 30 grados se soportan mucho mejor que la humedad de Yeda; pero en verano se superan los 45-50 y las noches de invierno bajan cerca de cero.",
    costi: "Diriyah tiene una entrada para At-Turaif; el Museo Nacional cuesta poco; la excursión al Edge of the World 300-600 riales según la fórmula.",
    erroriDaEvitare: [
      "Ir al Edge of the World por cuenta propia con un coche normal: el último tramo es pista, no hay señalización y el móvil tiene cobertura a ratos",
      "Visitar Diriyah a mediodía: el adobe reverbera, y lo bonito está todo en la última hora de luz",
      "Esperar una ciudad histórica: Riad se construyó casi toda después de los años setenta, y la parte vieja se reduce a Masmak y a unas pocas manzanas",
      "Subestimar las distancias: Riad se extiende decenas de kilómetros y cada desplazamiento requiere media hora",
    ],
    miaEsperienza:
      "Riad explica el país mejor que ninguna otra ciudad, pero por la velocidad con que ha cambiado más que por lo que muestra. El Masmak Fort, la fortaleza de adobe desde la que en 1902 partió la reconquista de Ibn Saud, está encajado entre los rascacielos, y de por medio hay poco más de cien años. Lo que me ha quedado, sin embargo, es Diriyah, a media hora de la ciudad: la primera capital de los Saud, construida toda en adobe, destruida por los otomanos en 1818 y restaurada en los últimos años. Al atardecer los muros pasan del ocre al naranja, y el barrio de At-Turaif, con los palacios de varias plantas y los motivos triangulares en las fachadas, parece hacer todo uno con la tierra de la que está hecho. La otra parada es el Edge of the World, y por una vez el nombre no exagera. Tras una hora y media de pista se llega al borde de un escarpe que desciende trescientos metros sobre una llanura que se pierde en el horizonte, sin vallas, sin entrada y con poquísima gente alrededor. Hacen falta un 4x4 y un guía, porque no hay señalización y el móvil no tiene cobertura.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "At-Turaif en Diriyah",
        "testo": "El barrio de la capital del primer Estado saudí (1727-1818), patrimonio de la UNESCO desde 2010, construido en adobe, destruido en 1818 por el ejército otomano-egipcio de Ibrahim Pachá y restaurado. Al atardecer los muros pasan del ocre al naranja.",
        "come": "En las afueras noroeste de Riad, en taxi o Uber. Entrada con billete reservado; se recorre a pie.",
        "quando": "La última hora de luz.",
        "tempo": "2 horas",
        "consiglio": "Cenar en Bujairi Terrace para ver el sitio iluminado; Bujairi también requiere entrada reservada."
      },
      {
        "nome": "Museo Nacional Saudí",
        "testo": "Un museo completo para entender la historia de la península: ocho salas, de la geología y la prehistoria a los reinos preislámicos, el islam, los dos Estados saudíes y la unificación del reino.",
        "come": "Taxi o Uber, en el barrio de Al-Murabba, dentro del Centro histórico Rey Abdulaziz.",
        "quando": "Mañana. Horarios en el lugar o en los canales oficiales.",
        "tempo": "2 horas"
      },
      {
        "nome": "Fuerte Masmak",
        "testo": "La fortaleza de barro y adobe en el centro viejo, desde donde en enero de 1902 empezó la reconquista de Riad por Ibn Saud. Desde 1995 es un museo, con fotos, mapas y armas.",
        "come": "Taxi o Uber, en el centro.",
        "quando": "Tarde.",
        "tempo": "45 minutos"
      },
      {
        "nome": "Edge of the World",
        "testo": "Un largo escarpe de la cordillera de Tuwaiq sobre la llanura desértica, a unos 100 km de Riad, con vistas muy amplias.",
        "come": "Con una excursión organizada o un guía local. Quien vaya por su cuenta necesita un 4x4, porque las carreteras son malas, y todo lo necesario: la zona es salvaje y no tiene servicios.",
        "quando": "Mañana o última hora de la tarde.",
        "tempo": "Medio día",
        "consiglio": "Ir con una excursión y mantenerse lejos del borde."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Museo Nacional y Fuerte Masmak, noche en los barrios nuevos",
          "Día 2: mañana Edge of the World, tarde Diriyah al atardecer"
        ]
      }
    ],
    zone: [
      {
        "nome": "Olaya / centro",
        "perChi": "quien quiere estar cerca de los servicios",
        "testo": "Hoteles modernos y centros comerciales."
      },
      {
        "nome": "Diriyah",
        "perChi": "quien quiere dormir cerca del sitio histórico",
        "testo": "Pocos hoteles nuevos, tranquilos y cuidados."
      }
    ],
    sapori: [
      {
        "nome": "Kabsa",
        "testo": "Arroz especiado con carne, el plato principal del Néyed."
      },
      {
        "nome": "Jareesh",
        "testo": "Trigo partido cocido largo con carne, más seco que la cocina de Yeda."
      },
      {
        "nome": "Mutabbaq",
        "testo": "Masa rellena de carne o queso."
      },
      {
        "nome": "Café árabe",
        "testo": "Con cardamomo, en todas partes."
      }
    ],
    attenzioni: [
      "Seguridad: en noviembre de 2026 el gobierno británico desaconseja los viajes no esenciales a toda Arabia Saudí y cualquier viaje a menos de 10 km de la frontera con Yemen, por los ataques con misiles y drones (también contra el aeropuerto de Riad). Consultar las recomendaciones oficiales de viaje y el seguro antes de salir.",
      "Edge of the World: mejor ir con una excursión organizada que por libre.",
      "Visitar Diriyah a mediodía: el barro refleja el calor, lo bello está en la última hora de luz.",
      "Esperar una ciudad histórica: Riad es en gran parte moderna.",
      "En verano el calor es extremo: venir entre noviembre y marzo."
    ],
    // GUIDA-END
    esperienzeSlugs: ['diriyah', 'edge-of-the-world'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Los muros de adobe y la torre de esquina de la fortaleza de Masmak, Riad',
    immagine: '/images/arabia-saudita/riyadh-diriyah.jpg',
  },
  {
    slug: 'abha-asir',
    paeseSlug: 'arabia-saudita',
    ordine: 4,
    nome: 'Abha y las montañas del Asir',
    tipologia: ['montagna', 'natura', 'cultura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "El suroeste del país, por encima de los 2.000 metros: montañas verdes, nieblas, terrazas cultivadas y pueblos de piedra agarrados a las paredes. Es la parte de Arabia Saudí que desmiente cualquier expectativa, y la única donde en verano se está fresco mientras el resto del Reino supera los 45 grados.",
    percheAndarci:
      "Nadie espera que Arabia Saudí tenga una región de montaña, lluviosa y cultivada en terrazas. Y la arquitectura del Asir, con las casas pintadas, los pueblos verticales como Rijal Almaa y los «pueblos de piedra» en los escarpes, no se parece a nada más de la península.",
    cosaVedere: [
      "Rijal Almaa, el pueblo de piedra y cuarzo de varias plantas, candidato a patrimonio de la UNESCO",
      "El parque nacional del Asir y el Jebel Sawda, el punto más alto del país",
      "Habala, el pueblo del escarpe al que antaño solo se llegaba con escaleras de cuerda",
      "Las casas pintadas de Abha, con los motivos geométricos de colores pintados por las mujeres (el qatt asiri, patrimonio inmaterial de la UNESCO)",
      "Los mercados de montaña, donde los vendedores llevan todavía guirnaldas de flores en la cabeza",
    ],
    cosaFare: [
      "Una jornada en Rijal Almaa, con el museo en las casas restauradas",
      "El teleférico del Asir y los senderos del Jebel Sawda",
      "La ruta en coche por los pueblos de montaña, entre terrazas y niebla",
      "El mercado de ganado y de flores, que aquí sigue siendo el acontecimiento social de la semana",
    ],
    doveDormire:
      "Abha tiene la oferta normal de una ciudad, a precios contenidos; en los pueblos de montaña empiezan a aparecer pequeños alojamientos, pero todavía son pocos.",
    doveMangiare:
      "Por la agricultura de montaña, la cocina del Asir usa más cereales y verduras que el resto del país. Hay que probar el areeka, el pan con miel y mantequilla clarificada, y la miel del Asir, la más apreciada de la península, que en los mercados se vende a precios importantes.",
    comeArrivare:
      "Normalmente con un vuelo interno a Abha (AHB) desde Riad o Yeda: por tierra desde Yeda son más de 600 kilómetros de carreteras de montaña.",
    comeSpostarsi: "El coche de alquiler es indispensable: los pueblos están dispersos entre las montañas y no hay transporte público útil.",
    periodoMigliore:
      "aquí el calendario va al revés que en el resto del país. La buena estación es el verano, fresco y verde; el invierno puede ser frío y brumoso. De junio a agosto el Asir se llena de saudíes que huyen del calor, y es también el periodo más animado.",
    costi: "contenidos: quitado el vuelo interno, es una de las zonas más baratas del Reino.",
    erroriDaEvitare: [
      "Programarla en invierno esperando el clima del resto del país: a 2.200 metros hace frío y hay niebla",
      "Ir sin coche: los pueblos están dispersos en decenas de kilómetros de montaña",
      "Visitarla con prisas: es la región donde Arabia Saudí se ralentiza, y en un día solo se ve la carretera",
      "Acercarse a la zona de frontera con Yemen, desaconsejada por los avisos oficiales",
    ],
    miaEsperienza:
      "Llegamos con el vuelo interno a Abha, y allá arriba todo cambió: montañas verdes, nieblas, terrazas cultivadas. La primera tarde la pasamos en Abha, entre las casas pintadas y el mercado. El qatt asiri, los motivos geométricos de colores que las mujeres pintan en el interior de las casas, es patrimonio inmaterial de la UNESCO y no tiene nada que ver con la austeridad del Néyed. Al día siguiente lo dediqué a Rijal Almaa, el pueblo de piedra y cuarzo de varias plantas con las fachadas que brillan al sol, y por la tarde hicimos la ruta en coche por los pueblos de montaña, entre terrazas y niebla, hasta Habala, en el escarpe. El último día fue el más lento: el teleférico, los senderos del Jebel Sawda y el mercado de ganado y de flores, donde los vendedores llevan las guirnaldas en la cabeza. Hay que saber que aquí la buena estación es el verano, cuando el resto del Reino es invivible y los saudíes suben en masa a buscar el fresco.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Rijal Almaa",
        "testo": "La aldea de unas sesenta casas-torre de piedra, arcilla y madera en las montañas de Asir, algunas de hasta ocho plantas, con un museo del patrimonio de más de dos mil objetos y documentos.",
        "come": "En coche desde Abha, unos 50 km al oeste, por carretera de montaña.",
        "quando": "Mañana.",
        "tempo": "Medio día"
      },
      {
        "nome": "Jebel Sawda y teleférico del Asir",
        "testo": "Considerada la cima más alta del país, aunque las mediciones de su altitud no coinciden. Se llega en coche o en teleférico.",
        "come": "En coche desde Abha.",
        "quando": "A primera hora, cuando las nubes están bajas.",
        "tempo": "Medio día"
      },
      {
        "nome": "Habala",
        "testo": "El pueblo en un valle bajo el escarpe, al que antes solo se llegaba con escalas de cuerda: el nombre viene de la palabra árabe para «cuerda». Hoy se baja en teleférico.",
        "come": "En coche desde Abha y luego teleférico.",
        "quando": "Por la tarde; los horarios del teleférico se comprueban allí.",
        "tempo": "1,5 horas"
      },
      {
        "nome": "Abha y las casas pintadas",
        "testo": "El qatt asiri, los motivos geométricos de colores que las mujeres pintan en las paredes interiores de las casas, patrimonio inmaterial de la UNESCO desde 2017.",
        "come": "A pie o en taxi en el centro.",
        "quando": "Mañana.",
        "tempo": "2 horas"
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Abha y casas pintadas",
          "Día 2: Rijal Almaa",
          "Día 3: Habala en teleférico y Jebel Sawda"
        ]
      }
    ],
    zone: [
      {
        "nome": "Abha",
        "perChi": "quien quiere una base con servicios",
        "testo": "Hoteles y restaurantes, base para las excursiones por la montaña."
      },
      {
        "nome": "Pueblos de montaña",
        "perChi": "quien quiere calma",
        "testo": "Pocas casas de huéspedes, hace falta coche."
      }
    ],
    sapori: [
      {
        "nome": "Areeka",
        "testo": "Pan con miel y mantequilla clarificada."
      },
      {
        "nome": "Miel del Asir",
        "testo": "Miel de montaña, en los mercados."
      },
      {
        "nome": "Cereales y verduras",
        "testo": "La cocina de montaña los usa más que en el resto del país."
      },
      {
        "nome": "Café árabe",
        "testo": "Con cardamomo."
      }
    ],
    attenzioni: [
      "Seguridad: en noviembre de 2026 el gobierno británico desaconseja los viajes no esenciales a toda Arabia Saudí y cualquier viaje a menos de 10 km de la frontera con Yemen, por los ataques con misiles y drones (también contra el aeropuerto de Riad). Consultar las recomendaciones oficiales de viaje y el seguro antes de salir.",
      "Aquí la buena estación es el verano, fresco y verde; el invierno es frío y brumoso.",
      "Sin coche no se llega: los pueblos están repartidos en decenas de kilómetros.",
      "Visitarla con prisa: en un día solo se ve la carretera.",
      "Zona fronteriza: el gobierno británico desaconseja cualquier viaje a menos de 10 km de la frontera con Yemen."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Las casas de Abha entre el verde, vistas desde arriba en la bruma de las montañas del Asir',
    immagine: '/images/arabia-saudita/abha-asir.jpg',
  },
  {
    slug: 'umluj-mar-rosso',
    immagine: '/images/arabia-saudita/umluj-mar-rosso.jpg',
    paeseSlug: 'arabia-saudita',
    ordine: 5,
    nome: 'Umluj y el Mar Rojo',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '2 días, como extensión entre Yeda y AlUla',
    visitataPersonalmente: false,
    introduzione:
      "La costa septentrional del Mar Rojo saudí, con un archipiélago de un centenar de islas de arena blanca y arrecifes de coral entre los menos dañados del planeta, porque hasta hace pocos años ningún turista podía llegar. Con una exageración perdonable lo llaman «las Maldivas saudíes».",
    percheAndarci:
      "Son arrecifes que no han sufrido décadas de presión turística. Y es la parte del país que cambia más deprisa: aquí están surgiendo los grandes proyectos costeros, y quien va ahora la ve antes.",
    cosaVedere: [
      "El archipiélago frente a Umluj, con las islas de arena blanca y los bancos de coral",
      "Los arrecifes del Mar Rojo septentrional, con una visibilidad altísima",
      "La costa hacia Al Wajh y la zona de los grandes proyectos turísticos en construcción",
      "Los pueblos de pescadores a lo largo de la costa, la parte que desaparece más deprisa",
    ],
    cosaFare: [
      "Una jornada en barca entre las islas, con snorkel en los arrecifes",
      "Inmersiones, en una escena de buceo todavía incipiente y con poquísimos operadores",
      "Avistamientos de delfines y, en temporada, de tiburones ballena",
    ],
    doveDormire:
      "En Umluj la oferta sigue siendo escasa y sobre todo sencilla; los grandes resorts costeros en construcción cambiarán por completo el cuadro. Muchos hacen base en Yanbu, mejor equipada.",
    doveMangiare: "Pescado, en los restaurantes de los puertos y de los pueblos costeros, a precios bajos. Es una zona todavía no turística: pocas opciones y ningún menú en inglés.",
    comeArrivare:
      "Con un vuelo interno a Yanbu o Al Wajh, o bien en coche desde Yeda: unas 5-6 horas de carretera costera, que encajan bien en el trayecto hacia AlUla.",
    comeSpostarsi: "El coche propio es obligatorio; las salidas en barca se organizan en el puerto con los operadores locales.",
    periodoMigliore:
      "de octubre a abril. En verano el calor y la humedad de la costa hacen cansada una jornada en barca, aunque el agua sigue siendo excelente.",
    costi: "salidas en barca a precios contenidos comparados con el Mar Rojo egipcio; alojamiento económico hasta que los grandes proyectos estén abiertos.",
    erroriDaEvitare: [
      "Esperar infraestructuras turísticas: aquí todavía no las hay, y es la virtud y a la vez el límite de la zona",
      "Contar con operadores de nivel internacional para las inmersiones: la escena es incipiente y hay que valorarla caso por caso",
      "Dar por hecha la ropa de playa: fuera de los resorts cerrados valen las normas del país, y en las playas públicas se entra en el agua vestido",
      "Programarla sin coche",
    ],
    miaEsperienza:
      "Es una posible extensión del viaje que hice: aquí la ficha se queda en los hechos verificables. Está en la lista por una razón que tiene fecha de caducidad. Estos arrecifes están entre los menos dañados del Mar Rojo porque hasta 2019 casi ningún turista podía llegar, y ahora en esta costa están naciendo algunos de los mayores proyectos turísticos jamás iniciados en el mundo. El periodo en que Umluj sigue siendo un puerto de pescadores con un centenar de islas blancas delante y ninguna infraestructura será, con toda probabilidad, breve. También hay que decir con honestidad lo que implica: ningún servicio, pocos operadores, ningún estándar garantizado, y las normas del país valen también en la playa, donde en las playas públicas se entra en el agua vestido. No es un destino de playa como lo entendemos nosotros: es una costa que se está abriendo ahora.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Archipiélago de Umluj",
        "testo": "Islas de arena y bancos de coral frente a Umluj, pequeña ciudad de la costa. El turismo aquí está aún poco desarrollado.",
        "come": "En barco desde Umluj, con operadores locales.",
        "quando": "En los meses más frescos.",
        "tempo": "Un día entero"
      },
      {
        "nome": "Arrecifes del norte del Mar Rojo",
        "testo": "Arrecifes poco frecuentados, porque el país solo concede visados turísticos desde septiembre de 2019. Snorkel y buceo con operadores locales.",
        "come": "Operadores locales, todavía pocos.",
        "quando": "En los meses más frescos.",
        "tempo": "Medio día"
      }
    ],
    zone: [
      {
        "nome": "Umluj",
        "perChi": "quien quiere una base sencilla",
        "testo": "Alojamiento barato en el puerto, sin instalaciones turísticas."
      }
    ],
    sapori: [
      {
        "nome": "Pescado",
        "testo": "En restaurantes de puertos y pueblos, a precios bajos."
      },
      {
        "nome": "Arroz y carne",
        "testo": "Platos sencillos en locales de la costa."
      },
      {
        "nome": "Café árabe",
        "testo": "Con cardamomo."
      },
      {
        "nome": "Dátiles",
        "testo": "De los oasis del interior."
      }
    ],
    attenzioni: [
      "Seguridad: en noviembre de 2026 el gobierno británico desaconseja los viajes no esenciales a toda Arabia Saudí y cualquier viaje a menos de 10 km de la frontera con Yemen, por los ataques con misiles y drones (también contra el aeropuerto de Riad). Consultar las recomendaciones oficiales de viaje y el seguro antes de salir.",
      "Aquí todavía no hay instalaciones turísticas: es la virtud y el límite de la zona.",
      "Operadores de buceo de nivel internacional: la escena está empezando, hay que valorarlos caso por caso.",
      "Fuera de los resorts las normas del país valen también en la playa: ropa discreta, informarse en el lugar."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Las casas bajas y blancas de Umluj vistas desde arriba, con el Mar Rojo azul en el horizonte',
  },
]
