import type { Destinazione } from '@/lib/types'

export const destinazioniEmiratiArabiUniti: Destinazione[] = [
  {
    slug: 'dubai',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 1,
    nome: 'Dubái',
    tipologia: ['città', 'architettura', 'stopover'],
    giorniConsigliati: '24 horas para la escala esencial, 48 para verla bien',
    visitataPersonalmente: true,
    introduzione:
      "En 1960 era un puerto de pescadores de perlas en el creek; hoy tiene el edificio más alto del mundo. Es también el aeropuerto con más tráfico del planeta en pasajeros internacionales: muchísima gente pasa por él sin bajar, mientras que bajar, con los programas de las compañías, suele costar poco o nada.",
    percheAndarci:
      "Es la parada más fácil del mundo: visado gratuito a la llegada, metro desde el aeropuerto, y en dos días se ven la Dubái de las fotografías y la que casi nadie busca, con el creek, las barcas de madera, los zocos y los barrios de Deira donde vive la mayor parte de los residentes.",
    cosaVedere: [
      "El Burj Khalifa, 828 metros, con las plataformas panorámicas en las plantas 124-125 y 148",
      "El Dubai Creek, con las abras (las barcas de madera que cruzan por un dírham) y los zocos del oro y de las especias en Deira",
      "El barrio histórico de Al Fahidi, con las torres del viento y las casas de coral y yeso",
      "La Dubai Fountain y el Dubai Mall, que es una ciudad en sí mismo",
      "La Mezquita de Jumeirah, la única abierta a los no musulmanes, con visitas guiadas",
      "El Museo del Futuro, con la caligrafía árabe grabada en la fachada en forma de toro",
      "Alserkal Avenue, el barrio de galerías de arte surgido de los almacenes industriales",
    ],
    cosaFare: [
      "Cruzar el creek en abra y perderse sin rumbo por los zocos de Deira (hay una ficha de experiencia dedicada)",
      "Subir al Burj Khalifa al atardecer, con la entrada comprada online",
      "Safari por el desierto con cena y noche bajo las estrellas (hay una ficha de experiencia dedicada)",
      "Comer en los barrios indios y paquistaníes de Bur Dubai y Karama, donde se come mejor y se gasta menos",
    ],
    doveDormire:
      "Deira y Bur Dubai por los precios bajos, el metro y la ciudad de verdad; Downtown para estar bajo el Burj Khalifa; Jumeirah y Marina para la playa. Con un stopover de Emirates o Etihad el hotel lo asigna el programa y la elección no se plantea.",
    doveMangiare:
      "Fuera de la India, Dubái es uno de los sitios donde mejor se come la cocina del subcontinente, y cuesta poquísimo: en Karama, Bur Dubai y Deira se cena por menos de diez euros en restaurantes llenos de residentes. Para probar, el biryani, los currys paquistaníes, el pan afgano cocido en el tandoor y, para la cocina local, el machboos y el shawarma de los puestos callejeros. La verdadera cocina emiratí es rara: el país está habitado en su gran mayoría por extranjeros, y se nota ante todo en los menús.",
    comeArrivare:
      "En avión a Dubai International (DXB). Desde las terminales 1 y 3 el metro, línea roja, llega a Downtown en 20-30 minutos por unos 5-7,50 AED con la tarjeta Nol comprada en la estación, desde las 5 aproximadamente hasta medianoche; la terminal 2 no tiene metro. El taxi RTA con taxímetro cuesta unos 60-90 AED, incluida la bajada de bandera de 25 AED en el aeropuerto; también funcionan Uber y Careem. Al Maktoum (DWC) está mucho más lejos. Desde Abu Dabi hay autobuses frecuentes, unas 2 horas.",
    comeSpostarsi:
      "Metro con la Nol Card en el eje principal, taxis y Careem para el resto, abra en el creek a un dírham por trayecto. Solo se puede caminar en invierno y solo en algunas zonas: la ciudad está hecha para el coche.",
    periodoMigliore:
      "de noviembre a marzo. De junio a septiembre se superan los 45 grados con mucha humedad y se vive en espacios cerrados: un stopover veraniego se reduce a centros comerciales y hoteles.",
    costi:
      "Presupuesto diario orientativo por persona, hotel incluido: bajo 70-100 € (Deira, metro, cocina del subcontinente), medio 150-250 €, alto más de 400 €. Burj Khalifa desde unos 170 dírhams para los pisos 124-125, mucho más para el 148 y las franjas del atardecer; abra 1 dírham; metro pocos dírhams; safari por el desierto 200-400 dírhams según la fórmula. Con Dubai Connect o el stopover de Etihad el hotel sale de la cuenta.",
    erroriDaEvitare: [
      "Comprar la entrada del Burj Khalifa en el lugar: cuesta más, y las franjas del atardecer se acaban con días de antelación",
      "Quedarse en los centros comerciales y en la Marina: es la Dubái que todo el mundo se espera, y la menos interesante. El creek, los zocos y Al Fahidi están a veinte minutos en metro",
      "Planificar un stopover entre junio y septiembre, cuando estar al aire libre es imposible",
      "Olvidar que el alcohol solo se bebe en los locales autorizados y que la embriaguez en público es un delito",
      "Contar con WhatsApp para las llamadas: en las redes locales las VoIP están limitadas, los mensajes en cambio pasan",
    ],
    confronti: [
      {
        titolo: 'Los programas de stopover de las compañías del Golfo: cómo funcionan de verdad',
        introduzione:
          "Todas las grandes compañías del Golfo tienen un programa para convencerte de que te quedes en su hub en lugar de cambiar de avión en dos horas, pero funcionan de maneras muy distintas. La diferencia que cuenta es una: algunos son una compensación por una escala larga que te toca sufrir, otros son productos comerciales que eliges. Confundirlos es la forma más rápida de esperar un hotel gratis y no tenerlo.",
        opzioni: [
          {
            nome: 'Emirates — Dubai Connect',
            sintesi: "Hotel, comidas, traslados y visado de tránsito gratuitos cuando la escala en Dubái es larga e inevitable. Es una compensación, no un paquete turístico.",
            costo: 'gratuito, pero no se elige: se asigna',
            durata: 'escalas más o menos de entre 8 y 26 horas, con umbrales distintos según la clase de viaje',
            pro: [
              "Totalmente gratuito: habitación, comidas, traslado y visado de tránsito incluidos",
              "No alarga el viaje: vale para una escala que se tendría de todos modos",
              "Cubre también el visado, así que no hace falta ningún trámite antes",
            ],
            contro: [
              "Solo vale si la escala en Dubái es **la más corta disponible** en esa ruta: quien elige a propósito un vuelo posterior lo pierde",
              "Hace falta un billete único emitido con documento Emirates, con vuelos de llegada y salida de Emirates (o Qantas en código compartido)",
              "El hotel se asigna y puede estar lejos del centro: como base para visitar vale poco",
              "Entre traslados y trámites las horas libres de verdad se reducen bastante",
            ],
            perChi: "Quien ya tiene una escala larga y obligada en Dubái y prefiere una cama al aeropuerto. No es el programa sobre el que construir una visita.",
          },
          {
            nome: 'Emirates — Dubai Stopover (paquete)',
            sintesi: "El producto comercial aparte: hoteles con descuento y visado facilitado para quien decide quedarse uno o más días.",
            costo: 'de pago, con tarifas rebajadas respecto a la reserva libre',
            durata: 'una o más noches, a elegir',
            pro: ["El hotel y la duración se eligen", "Precios más bajos que reservando por separado", "Se puede unir al billete en una única reserva"],
            contro: ["No es gratuito, y a menudo se confunde con Dubai Connect", "Hay que compararlo con el precio de una reserva independiente, porque no siempre es el más bajo"],
            perChi: "Quien elige quedarse en Dubái y quiere la comodidad de una única reserva.",
          },
          {
            nome: 'Etihad — Abu Dhabi Stopover',
            sintesi: "Una o dos noches de hotel gratis en Abu Dabi para quien incluye a propósito una parada en el billete de ida y vuelta.",
            costo: 'hotel gratuito una o dos noches; vuelos, traslados y comidas corren por cuenta del viajero',
            durata: 'parada de al menos 24 horas, 1 o 2 noches',
            pro: [
              "Es gratuito y, a diferencia de Dubai Connect, **se elige**: se añade al reservar en el sitio de Etihad",
              "Abu Dabi en dos días se ve bien: Gran Mezquita, Louvre y el desierto de Liwa al alcance de la mano",
              "Se puede combinar con Dubái, a dos horas de autobús",
            ],
            contro: [
              "Requiere una reserva de ida y vuelta con la parada declarada: no vale para una escala cualquiera",
              "El hotel hay que reservarlo unos días antes del vuelo, no a última hora",
              "Hace falta el visado para los Emiratos o el derecho a recibirlo a la llegada; para los italianos no es un problema, porque en el aeropuerto es gratuito",
            ],
            perChi: "Quien vuela con Etihad y quiere añadir dos días de visita de verdad sin pagar el hotel. Es el programa con mejor equilibrio entre gratuidad y libertad.",
          },
          {
            nome: 'Qatar Airways — Stopover en Doha',
            sintesi: "Hoteles de cuatro y cinco estrellas a precios simbólicos para quien se queda en Doha entre un vuelo y otro, que se reservan en el portal Discover Qatar.",
            costo: 'cuatro estrellas desde unos 14 dólares por persona y noche, cinco estrellas desde 20-30: una fracción de los precios normales de Doha',
            durata: 'de 1 a 4 noches, con escala de entre 12 y 96 horas',
            pro: [
              "La mejor relación calidad-precio de todos los programas del Golfo",
              "Vale para billetes de Qatar Airways, códigos compartidos y oneworld, es decir, para muchísimos pasajeros",
              "El hotel y el número de noches se eligen, y Doha se visita muy bien en dos días",
              "Para los italianos el visado a la llegada es gratuito: ningún trámite antes",
            ],
            contro: [
              "No es gratuito, aunque se acerca",
              "Se reserva en un portal aparte con el código de reserva del vuelo: un paso más que mucha gente no conoce",
              "En temporada alta los mejores alojamientos se acaban",
            ],
            perChi: "Cualquiera que vuele con Qatar Airways y no tenga prisa. A estas cifras no parar es casi una decisión contra los propios intereses.",
          },
          {
            nome: 'Saudia y flynas — visado stopover para Arabia Saudí',
            sintesi: "No un hotel sino un visado: quien vuela con Saudia o flynas obtiene un visado stopover gratuito, válido también para turismo, con el que quedarse en el Reino hasta 4 días.",
            costo: 'el visado es gratuito, salvo los gastos administrativos y el seguro médico obligatorio',
            durata: 'visado válido tres meses, estancia de hasta 4 días',
            pro: [
              "Ahorra el visado turístico ordinario, que cuesta en torno a 130 euros",
              "Se pide online tras comprar el billete y llega por correo en poco tiempo",
              "Cuatro días bastan para Yeda más AlUla, el corazón del país",
              "Permite también la Umrah, para quien es musulmán",
            ],
            contro: [
              "No incluye el hotel: es una facilidad de entrada, no un paquete",
              "Ata a la compañía: solo vale volando con Saudia o flynas",
              "Cuatro días son pocos para un país tan grande, donde para moverse hacen falta vuelos internos",
            ],
            perChi: "Quien quiere ver Arabia Saudí sin comprometerse con un viaje largo, o probarla antes de volver con el visado anual.",
          },
        ],
        raccomandazione:
          "Para orientarse basta una regla: **Dubai Connect es una compensación, todos los demás son elecciones**. Si la escala larga en Dubái la tienes de todos modos, Dubai Connect es dinero encontrado y no hay que dejarlo ahí. Si en cambio estás decidiendo dónde parar, el mejor es Qatar Airways (a catorce dólares la noche en un cuatro estrellas no hay color), seguido de Etihad, que es gratuito pero exige una reserva de ida y vuelta. El visado stopover saudí es un caso aparte: no regala una cama, regala la entrada en un país cuyo visado de otro modo cuesta ciento treinta euros, y es la forma más económica de ver Hegra. En cualquier caso, las condiciones hay que volver a comprobarlas en los sitios oficiales antes de reservar, porque estos programas cambian a menudo y sin previo aviso.",
      },
    ],
    miaEsperienza:
      "Dubái es la ciudad más fácil del mundo de despachar, y tras dos días ese juicio me pareció perezoso. El skyline y los centros comerciales son como te los imaginas. El Burj Khalifa impresiona por las cifras y algo menos en persona: una cola, un ascensor, un ventanal. Pero a veinte minutos en metro hay otra ciudad que nadie busca. El creek sigue siendo un puerto comercial de verdad, con las barcas de madera cargadas hasta los topes de electrodomésticos con destino a Irán y a India; el abra que lo cruza cuesta un dírham, te sientas entre gente que va al trabajo y desembarcas al otro lado en el zoco de las especias. Al Fahidi, con las torres del viento y los callejones de yeso, enseña cómo era este sitio cuando las perlas eran la única economía. Y luego está el dato que explica la ciudad mejor que cualquier rascacielos: los emiratíes son poco más del diez por ciento de quienes viven aquí, y por la noche en los restaurantes paquistaníes de Karama se come buenísimo con ocho euros, entre obreros, conductores y familias. Eso, más que el Burj, es Dubái.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Dubai Creek, abra y zocos de Deira",
        "testo": "El viejo puerto comercial, aún activo, con barcos de madera cargados de mercancías. El abra, el ferri de madera, cruza el creek por 1 dírham, que se paga al barquero, y desembarca cerca del zoco de las especias y del oro.",
        "come": "Metro, línea verde, hasta Al Ras o Al Ghubaiba, luego a pie a los embarcaderos de las abra.",
        "quando": "Mañana o última hora de la tarde, menos calor.",
        "tempo": "2-3 horas",
        "costo": "1 AED por trayecto, unos 0,25 €, pagado al barquero (2026)",
        "lat": 25.26749,
        "lng": 55.29708,
        "consiglio": "Sentarse en el abra entre quienes van al trabajo: es la parte de Dubái que nadie busca."
      },
      {
        "nome": "Al Fahidi",
        "testo": "El barrio histórico construido desde finales del siglo XIX por mercaderes llegados de Persia, con torres de viento y callejones estrechos, hoy restaurado. Se entiende cómo era Dubái antes del petróleo. Hay pequeños museos, como el del café, y cafés en los patios.",
        "come": "Metro hasta Sharaf DG o Al Ghubaiba, luego a pie.",
        "quando": "Mañana, antes del calor.",
        "tempo": "1-2 horas",
        "costo": "Entrada libre al barrio",
        "lat": 25.26423,
        "lng": 55.30017,
        "consiglio": "Combina bien con el recorrido del creek en la misma mañana."
      },
      {
        "nome": "Burj Khalifa",
        "testo": "El rascacielos más alto del mundo, 828 metros. Las terrazas At the Top en las plantas 124-125 y At the Top Sky en la 148 dan vistas a la ciudad y al desierto.",
        "come": "Metro, línea roja, hasta Burj Khalifa/Dubai Mall. Entrada con franja horaria, mejor online.",
        "quando": "Atardecer, la franja más solicitada: reservarla con antelación.",
        "tempo": "1-1,5 horas",
        "costo": "Pisos 124-125 desde unos 170 AED, unos 40 €; el piso 148 y las franjas del atardecer cuestan más (2026)",
        "lat": 25.19703,
        "lng": 55.27413,
        "url": "https://www.burjkhalifa.ae/",
        "consiglio": "Reservar online antes de ir: las franjas del atardecer se agotan primero."
      },
      {
        "nome": "Dubai Mall y Dubai Fountain",
        "testo": "El centro comercial a los pies del Burj Khalifa es una ciudad climatizada, con un acuario, una pista de patinaje y cientos de tiendas. En el lago artificial de enfrente, por la noche, la fuente baila con la música con chorros altos como un edificio. Es el Dubái de las fotografías, y hay que verlo una vez.",
        "come": "Metro, línea roja, hasta Burj Khalifa/Dubai Mall, y luego la pasarela cubierta.",
        "quando": "Por la noche, cuando los espectáculos de la fuente se suceden.",
        "tempo": "1,5-2 horas",
        "costo": "Entrada y espectáculo de la fuente gratuitos",
        "lat": 25.19512,
        "lng": 55.27517,
        "consiglio": "Se combina con el Burj Khalifa al atardecer: al bajar de la torre, se mira la fuente desde la orilla."
      },
      {
        "nome": "Al Shindagha Museum",
        "testo": "El museo histórico de Dubái, repartido en una serie de casas tradicionales restauradas en la desembocadura del creek, donde vivía la familia reinante. Cuenta cómo una aldea de pescadores de perlas se convirtió en un puerto y luego en una metrópoli, y tiene una sección dedicada a los perfumes y al incienso.",
        "come": "Metro, línea verde, hasta Al Ghubaiba, y luego a pie junto al creek.",
        "quando": "Las horas de calor: es cubierto y se enlaza bien con Al Fahidi.",
        "tempo": "1,5-2 horas",
        "costo": "50 AED, unos 12 € (tarifa oficial de 2024)",
        "lat": 25.26643,
        "lng": 55.28945,
        "url": "https://dubaiculture.gov.ae/"
      },
      {
        "nome": "Mezquita de Jumeirah",
        "testo": "Una de las pocas mezquitas de Dubái abiertas a los no musulmanes, de piedra blanca y estilo fatimí. Las visitas las organiza el Sheikh Mohammed Centre for Cultural Understanding, con café árabe y preguntas libres sobre el islam y la vida en los Emiratos.",
        "come": "Taxi o Careem hasta Jumeirah Road; uno se registra en el majlis frente a la mezquita. Ropa que cubra, pañuelo para las mujeres.",
        "quando": "Por la mañana, con la visita guiada reservada en la web del centro.",
        "tempo": "1-1,5 horas",
        "lat": 25.23406,
        "lng": 55.26548,
        "url": "https://www.cultures.ae/",
        "consiglio": "Es el lugar adecuado para hacer las preguntas que en otro sitio parecerían indiscretas."
      },
      {
        "nome": "Dubai Frame",
        "testo": "Un marco de unos 150 metros de alto en el parque Zabeel, con un puente arriba de suelo en parte de cristal: al norte se mira el Dubái viejo de Deira y Karama, al sur los rascacielos de Sheikh Zayed Road. Una sección cuenta la historia de la ciudad.",
        "come": "Taxi hasta la entrada del parque Zabeel.",
        "quando": "Última hora de la tarde, para ver la ciudad con luz de día y luego iluminada.",
        "tempo": "1 hora",
        "costo": "50 AED, unos 12 €; niños de 3 a 12 años 20 AED (2026)",
        "orari": "Todos los días 9-21; horario reducido en Ramadán y festivos (2026).",
        "lat": 25.23546,
        "lng": 55.30037,
        "url": "https://www.dubaiframe.ae/",
        "consiglio": "La vista sobre Deira, que desde el Burj no se ve bien, es el motivo para subir."
      },
      {
        "nome": "Museo del Futuro",
        "testo": "El edificio en forma de anillo en Sheikh Zayed Road, revestido de 1.024 paneles de acero que forman una caligrafía árabe. Dentro, cinco plantas de exposiciones planteadas como un viaje a 2071: una estación espacial, una planta sobre la naturaleza, otra sobre el bienestar. Vale sobre todo por la arquitectura, que se fotografía desde fuera sin entrar.",
        "come": "Metro, línea roja, hasta Emirates Towers.",
        "quando": "En noviembre de 2026 el museo está cerrado temporalmente por un nuevo montaje: consultar la web oficial antes de ir. Por la noche la caligrafía iluminada queda mejor en las fotos.",
        "tempo": "1,5-2 horas",
        "orari": "Cerrado temporalmente en noviembre de 2026 por un nuevo montaje (web oficial).",
        "lat": 25.21915,
        "lng": 55.28187,
        "url": "https://museumofthefuture.ae/",
        "consiglio": "Si sigue cerrado, el edificio solo ya merece una parada desde fuera."
      },
      {
        "nome": "Alserkal Avenue",
        "testo": "El barrio de galerías de arte creado en los almacenes industriales de Al Quoz, con exposiciones contemporáneas, cafés y tiendas de diseño. Es lo contrario de la imagen que se tiene de Dubái, y muestra la escena artística del Golfo y de Oriente Medio.",
        "come": "En taxi: el metro queda lejos.",
        "quando": "Por la mañana o a primera hora de la tarde; no todas las galerías abren a diario, conviene mirar la web.",
        "tempo": "2 horas",
        "costo": "Entrada libre",
        "lat": 25.14187,
        "lng": 55.22558,
        "url": "https://alserkal.online/"
      },
      {
        "nome": "Etihad Museum",
        "testo": "El museo construido junto a la Union House, donde el 2 de diciembre de 1971 los gobernantes firmaron el nacimiento de los Emiratos Árabes Unidos. El edificio tiene forma de manuscrito abierto y cuenta, con documentos y películas, cómo siete emiratos se convirtieron en un Estado.",
        "come": "Taxi por Jumeirah Road; se combina con la Mezquita de Jumeirah, a pocos minutos.",
        "quando": "Las horas de calor.",
        "tempo": "1,5 horas",
        "costo": "25 AED, unos 6 € (tarifa oficial de 2024)",
        "lat": 25.23921,
        "lng": 55.26933,
        "url": "https://dubaiculture.gov.ae/"
      },
      {
        "nome": "Kite Beach y Burj Al Arab",
        "testo": "Una playa pública larga y equipada en Umm Suqeim, con pista para correr, quioscos y kitesurf, y el Burj Al Arab, el hotel con forma de vela, al fondo. Es el baño más sencillo de Dubái sin pagar un beach club.",
        "come": "Taxi por Jumeirah Road.",
        "quando": "Última hora de la tarde, con el sol poniéndose detrás del Burj Al Arab; el baño, de octubre a abril.",
        "tempo": "2 horas",
        "costo": "Playa libre",
        "lat": 25.163,
        "lng": 55.20672
      },
      {
        "nome": "Palm Jumeirah y The View",
        "testo": "La isla artificial con forma de palmera, con villas en las ramas y el Atlantis al fondo. La forma solo se entiende desde arriba: la terraza The View, en el piso 52 de The Palm Tower, la muestra entera.",
        "come": "Taxi, o el monorraíl de la Palm desde la estación Palm Gateway.",
        "quando": "Por la tarde, con luz rasante.",
        "tempo": "1,5 horas",
        "costo": "The View: entrada estándar 80-115 AED, unos 19-27 €, según la franja (2026)",
        "orari": "The View: todos los días 9-19 (2026).",
        "lat": 25.11806,
        "lng": 55.13333,
        "url": "https://www.theviewpalm.ae/"
      },
      {
        "nome": "Dubai Marina y JBR",
        "testo": "Un canal artificial rodeado de rascacielos, con un paseo peatonal de restaurantes y barcos, que desemboca en la playa de Jumeirah Beach Residence. Es el Dubái moderno y turístico, agradable por la noche.",
        "come": "Metro, línea roja, hasta las paradas de la Marina, o el tranvía de Dubái que la recorre.",
        "quando": "Por la noche, cuando se iluminan las torres.",
        "tempo": "2 horas",
        "costo": "Paseo y playa gratuitos",
        "lat": 25.08135,
        "lng": 55.14408
      },
      {
        "nome": "Safari por el desierto",
        "testo": "Una tarde en 4x4 por las dunas, con atardecer, cena en un campamento y noche bajo las estrellas. Es una de las experiencias de «desierto» más vendidas alrededor de Dubái.",
        "come": "Operadores con recogida en el hotel. Las dunas de los safaris de tarde están a poca distancia de la ciudad.",
        "quando": "Tarde y noche, en los meses frescos.",
        "tempo": "5-6 horas",
        "costo": "200-400 AED, unos 47-95 €, según la fórmula (2026)",
        "consiglio": "Para el desierto de verdad hacen falta Liwa y el Rub' al-Jali."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Al Fahidi y Al Shindagha Museum, luego la abra por el creek",
          "Mediodía: zocos de las especias y del oro en Deira, comida en Bur Dubai o Karama",
          "Tarde: Dubai Frame por la vista de Deira",
          "Atardecer: Burj Khalifa, y luego la fuente frente al Dubai Mall"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como el programa de un día",
          "Día 2, mañana: Mezquita de Jumeirah con la visita guiada y Etihad Museum",
          "Día 2, mediodía: Alserkal Avenue",
          "Día 2, tarde y noche: safari por el desierto, o Kite Beach al atardecer y cena en la Marina"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2: como arriba",
          "Día 3: excursión a Abu Dabi para la Gran Mezquita y el Louvre, o a Sharjah por sus museos y el centro antiguo",
          "Noche: Palm Jumeirah y The View, y luego Dubai Marina"
        ]
      }
    ],
    zone: [
      {
        "nome": "Deira / Bur Dubai",
        "perChi": "quien quiere el Dubái viejo y gastar menos",
        "testo": "Hoteles de gama media cerca del creek y los zocos. Ruidosos, pero con restaurantes baratos.",
        "fascia": "50-140 €"
      },
      {
        "nome": "Downtown",
        "perChi": "quien quiere estar bajo el Burj Khalifa",
        "testo": "Hoteles de lujo y centros comerciales. Caro y anónimo.",
        "fascia": "180-450 €"
      },
      {
        "nome": "Marina / JBR",
        "perChi": "quien quiere playa y rascacielos",
        "testo": "Moderno y turístico, lejos del Dubái histórico.",
        "fascia": "130-350 €"
      },
      {
        "nome": "Jumeirah / Umm Suqeim",
        "perChi": "quien quiere el mar sin los rascacielos",
        "testo": "Villas bajas, playas públicas y resorts de lujo en torno al Burj Al Arab. Hace falta taxi para todo.",
        "fascia": "150-500 €"
      }
    ],
    sapori: [
      {
        "nome": "Biryani y currys paquistaníes",
        "testo": "En Karama, Bur Dubai y Deira se cena gastando poco en locales llenos de residentes."
      },
      {
        "nome": "Machboos",
        "testo": "Arroz especiado con carne o pescado, cocina emiratí."
      },
      {
        "nome": "Shawarma",
        "testo": "En puestos callejeros, todo el día."
      },
      {
        "nome": "Pan afgano",
        "testo": "Cocido en el tandoor, caliente."
      }
    ],
    attenzioni: [
      "Dejar el Burj Khalifa para el último momento: las franjas del atardecer se agotan con días de antelación.",
      "Quedarse en los centros comerciales y la Marina: lo más interesante son el creek, los zocos y Al Fahidi, a los que se llega en metro.",
      "Escala en verano: de junio a septiembre hace muchísimo calor y se vive a cubierto.",
      "Normas de vestimenta, alcohol y comportamiento en público: comprobar los canales oficiales.",
      "Tensiones en la región: los gobiernos europeos avisan de posibles cancelaciones de vuelos y cierres del espacio aéreo con poco aviso (gov.uk, octubre de 2026). Consultar las recomendaciones oficiales de viaje antes de salir."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Abu Dabi",
        "distanza": "unas 2 horas en autobús, 140 km",
        "come": "Autobuses frecuentes desde Dubái, o taxi o coche con conductor para el día.",
        "testo": "La Gran Mezquita Sheikh Zayed a última hora de la tarde y el Louvre Abu Dabi bastan para justificar el día. Mejor aún, dormir allí una noche (hay una ficha dedicada)."
      },
      {
        "nome": "Sharjah",
        "distanza": "30-60 minutos en taxi según el tráfico",
        "come": "Taxi o Careem desde Deira; en hora punta el tráfico entre las dos ciudades es denso.",
        "testo": "El emirato vecino, más conservador y menos turístico, con el centro antiguo restaurado, el Sharjah Art Museum y los museos de la civilización islámica. Sin alcohol y con ropa que cubra."
      },
      {
        "nome": "Liwa y Al Ain",
        "distanza": "Al Ain unas 1h45 en coche, Liwa unas 4 horas",
        "come": "Coche de alquiler o conductor; para las dunas hace falta un 4x4 con guía.",
        "testo": "El oasis UNESCO de Al Ain y el borde del Rub' al-Khali en Liwa: el desierto de verdad, en lugar del safari de tarde. Liwa pide una noche (hay una ficha dedicada)."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Dubái?",
        "risposta": "En 24 horas se ven el creek, los zocos, Al Fahidi y el Burj Khalifa al atardecer. Con 48 se añaden la Mezquita de Jumeirah, Alserkal y el desierto; el tercer día conviene ir a Abu Dabi."
      },
      {
        "domanda": "¿Merece la pena salir del aeropuerto en una escala en Dubái?",
        "risposta": "Por encima de doce horas, sí: el metro llega al centro en veinte minutos y el visado a la llegada es gratuito para los ciudadanos de la UE. Por debajo de diez horas, entre controles y volver con tres horas de antelación, queda demasiado poco."
      },
      {
        "domanda": "¿Hay que reservar el Burj Khalifa?",
        "risposta": "Sí, en línea y con unos días de antelación: la entrada es por franja horaria y las del atardecer, las más caras, se agotan primero. En taquilla cuesta más."
      },
      {
        "domanda": "¿Dónde alojarse en Dubái la primera vez?",
        "risposta": "Deira o Bur Dubai para gastar poco y tener el metro y la ciudad vieja a mano; Downtown para estar bajo el Burj Khalifa; Marina o Jumeirah para el mar."
      },
      {
        "domanda": "¿Cuándo es mejor ir a Dubái?",
        "risposta": "De noviembre a marzo. De junio a septiembre se superan los 45 grados con mucha humedad y se vive a cubierto."
      },
      {
        "domanda": "¿Dubái o Abu Dabi como base?",
        "risposta": "Dubái tiene metro y más que hacer por la noche; Abu Dabi es más tranquila y con el stopover de Etihad el hotel es gratis. Están a dos horas en autobús: conviene dormir una noche en cada una en lugar de ir y volver."
      }
    ],
    esperienzeSlugs: ['creek-souq-dubai', 'deserto-emirati'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "El skyline de Dubái con el Burj Khalifa al atardecer, visto de lejos al otro lado del agua",
    immagine: '/images/emirati-arabi-uniti/dubai.jpg',
  },
  {
    slug: 'abu-dhabi',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 2,
    nome: 'Abu Dabi',
    tipologia: ['città', 'architettura', 'musei'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      "La capital de los Emiratos es más baja, más verde y mucho menos frenética que Dubái. Dos edificios bastan para justificar el desvío: la Gran Mezquita Sheikh Zayed, con las columnas incrustadas de nácar y la alfombra anudada a mano más grande del mundo, y el Louvre de Jean Nouvel, bajo una cúpula calada que filtra la luz como un palmeral.",
    percheAndarci:
      "Es el destino del stopover gratuito de Etihad, y en dos días muestra de los Emiratos una versión más comedida y más interesante que Dubái. Además, el desierto de Liwa está a un par de horas.",
    cosaVedere: [
      "La Gran Mezquita Sheikh Zayed, abierta a los no musulmanes con normas de vestimenta precisas",
      "El Louvre Abu Dabi, en la isla de Saadiyat, con la cúpula de 7.850 estrellas metálicas superpuestas",
      "Qasr Al Watan, el palacio presidencial abierto al público, y Qasr Al Hosn, el fuerte más antiguo de la ciudad",
      "La Corniche y el barrio de Al Mina, con el mercado de pescado",
      "El Museo Nacional Zayed y el distrito cultural de Saadiyat, que sigue creciendo",
      "Yas Island, con el circuito de Fórmula 1 y los parques temáticos",
    ],
    cosaFare: [
      "Visitar la Gran Mezquita a última hora de la tarde, cuando el blanco vira al rosa y luego al azul (hay una ficha de experiencia dedicada)",
      "El Louvre Abu Dabi, mejor de noche, cuando la luz bajo la cúpula cambia",
      "Una excursión a las dunas de Liwa, las más altas del país",
      "El mercado de pescado de Al Mina, donde se compra en el puesto y se cocina al lado",
    ],
    doveDormire:
      "La Corniche y el centro son cómodos y están bien conectados; Saadiyat es la zona de los museos y las playas; Yas la de los parques y el circuito. Con el stopover de Etihad el hotel está incluido y se elige entre los alojamientos concertados.",
    doveMangiare:
      "Como en Dubái, la mejor cocina y la más económica es la del subcontinente indio, en los barrios alrededor del centro. Para el pescado se va al mercado de Al Mina: se elige en el puesto y se lleva a los restaurantes de al lado, que lo cocinan por unos pocos dírhams. La verdadera cocina emiratí se encuentra en pocos locales dedicados: para probar, el machboos, el luqaimat como postre y el karak chai, el té con leche especiado que aquí se bebe a todas horas.",
    comeArrivare:
      "En avión a Abu Dhabi Zayed International (AUH), el hub de Etihad. Al centro va el autobús A1, unos 4 AED con la tarjeta Hafilat, las 24 horas, en 45-60 minutos; el taxi cuesta unos 100-150 AED. Desde Dubái hay autobuses frecuentes, unas 2 horas, o el taxi. La Gran Mezquita está entre el aeropuerto y el centro.",
    comeSpostarsi:
      "No hay metro: se usan taxis y Careem, que cuestan poco, o los autobuses urbanos. Entre el centro, Saadiyat y Yas las distancias son grandes, y durante buena parte del año caminar no es una opción.",
    periodoMigliore: "de noviembre a marzo, como en todo el Golfo. En otoño el Gran Premio de Fórmula 1 llena la ciudad.",
    costi:
      "Presupuesto diario orientativo por persona, hotel incluido: bajo 60-90 €, medio 130-220 €, alto más de 350 €. Gran Mezquita con pase en línea (unos 10 AED para turistas desde septiembre de 2026); Louvre Abu Dabi 70 AED; Qasr Al Watan desde unos 65 AED; taxis baratos. En conjunto un día en Abu Dabi cuesta menos que uno en Dubái, y con el stopover de Etihad el hotel no se paga.",
    erroriDaEvitare: [
      "Presentarse en la Gran Mezquita vestido de forma incorrecta: brazos y piernas cubiertos para todos, cabeza cubierta para las mujeres. Las abayas se pueden pedir prestadas, pero con colas largas, y a ciertas horas la entrada está limitada",
      "Visitar la mezquita a mediodía: el mármol blanco reverbera y hace daño a los ojos, y es también la peor hora para las fotos",
      "Visitar el Louvre con prisa: la cúpula y la luz que se filtra debajo son la mitad de la obra, y hay que mirarlas con calma",
      "Dar por hecho un metro como el de Dubái: aquí no lo hay, y las distancias son grandes",
    ],
    miaEsperienza:
      "Abu Dabi es la sorpresa de los Emiratos, sobre todo si se llega después de Dubái: más baja, más lenta, con espacio entre un edificio y otro. En la Gran Mezquita los récords (la alfombra anudada a mano más grande del mundo, las lámparas de cristales Swarovski, ochenta y dos cúpulas) hacen temer el exceso, y sin embargo funciona. Las columnas blancas incrustadas con motivos florales de nácar tienen una delicadeza que las cifras no dejan imaginar. El momento justo es a última hora de la tarde, cuando el mármol pasa del blanco al rosa y luego, con la iluminación nocturna, al azul. La otra gran pieza es el Louvre, donde el edificio vale tanto como la colección: bajo la cúpula calada por casi ocho mil estrellas metálicas superpuestas cae una luz que se desplaza y se descompone durante todo el día, la que Nouvel llama lluvia de luz. Uno se sienta debajo y se queda ahí. Dos días bastan, y con el stopover de Etihad el hotel no se paga.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Gran Mezquita Sheikh Zayed",
        "testo": "Ochenta y dos cúpulas, columnas de mármol con incrustaciones de nácar, una alfombra anudada a mano de más de 5.600 metros cuadrados y lámparas con millones de cristales Swarovski. Está abierta a los visitantes no musulmanes.",
        "come": "Taxi o Uber. Visita gratuita con pase online obligatorio reservado en la web oficial; normas de vestimenta en la web.",
        "quando": "A última hora de la tarde, cuando el mármol pasa del blanco al rosa y luego al azul; a mediodía el blanco deslumbra.",
        "tempo": "1-1,5 horas",
        "costo": "Pase en línea obligatorio; para los turistas, desde septiembre de 2026, unos 10 AED (unos 2,50 €): comprobar en la web",
        "orari": "De sábado a jueves 9-20.30; viernes 9-11.30 y 14.30-20.30 (2026).",
        "lat": 24.412,
        "lng": 54.474,
        "url": "https://www.szgmc.gov.ae/en/home",
        "consiglio": "Los horarios para no musulmanes varían, sobre todo el viernes: comprobar en el sitio."
      },
      {
        "nome": "Louvre Abu Dabi",
        "testo": "El museo de Jean Nouvel en la isla de Saadiyat, abierto en 2017, bajo una cúpula hecha de 7.850 estrellas de aluminio superpuestas que hace llover luz. El edificio vale tanto como la colección.",
        "come": "Taxi o Uber desde Abu Dabi.",
        "quando": "A última hora de la tarde, cuando cambia la luz bajo la cúpula.",
        "tempo": "2-3 horas",
        "costo": "70 AED, unos 16 €; gratis para menores de 18 años (2026)",
        "orari": "De martes a domingo desde las 10, cierre a las 18.30 o a las 20.30 según el día; cerrado los lunes (2026).",
        "lat": 24.533,
        "lng": 54.4,
        "url": "https://www.louvreabudhabi.ae/",
        "consiglio": "Sentarse bajo la cúpula y quedarse un rato."
      },
      {
        "nome": "Qasr Al Watan",
        "testo": "El palacio presidencial, abierto al público desde 2019. Se visitan el Gran Salón bajo la cúpula central, de 37 metros de diámetro, con una lámpara de 350.000 cristales, la sala donde se reúne el gobierno y la House of Knowledge con los regalos recibidos de jefes de Estado.",
        "come": "Taxi o Uber.",
        "quando": "Mañana. Horarios y entradas en la web oficial.",
        "tempo": "1,5-2 horas",
        "costo": "Desde unos 65 AED, unos 15 € (2026)",
        "lat": 24.46225,
        "lng": 54.30551,
        "url": "https://www.qasralwatan.ae/"
      },
      {
        "nome": "Zayed National Museum",
        "testo": "El museo nacional de los Emiratos, en el distrito cultural de Saadiyat junto al Louvre, proyectado por Foster + Partners con torres inspiradas en las plumas de un halcón. Cuenta la historia del país desde la prehistoria hasta el jeque Zayed, fundador de la federación.",
        "come": "Taxi hasta Saadiyat; se combina con el Louvre el mismo día. Hombros y rodillas cubiertos.",
        "quando": "Por la mañana, antes del Louvre por la tarde.",
        "tempo": "2-3 horas",
        "orari": "De lunes a jueves 10-18.30, de viernes a domingo 10-20.30; última entrada una hora antes (2026, dato de revendedores: comprobar).",
        "lat": 24.53456,
        "lng": 54.4188,
        "url": "https://www.zayednationalmuseum.ae/"
      },
      {
        "nome": "Qasr Al Hosn",
        "testo": "El fuerte blanco en el centro de la ciudad, el edificio de piedra más antiguo de Abu Dabi, nacido como torre de vigía sobre el pozo de agua y luego residencia de la familia reinante. Restaurado y convertido en museo, cuenta cómo la ciudad creció en torno a estos muros.",
        "come": "Taxi hasta el centro, en Sheikh Zayed the First Street; al lado está la Cultural Foundation.",
        "quando": "Por la mañana.",
        "tempo": "1-1,5 horas",
        "lat": 24.48239,
        "lng": 54.35482
      },
      {
        "nome": "Abrahamic Family House",
        "testo": "Tres edificios de culto juntos en Saadiyat, una mezquita, una iglesia y una sinagoga, proyectados por David Adjaye como tres volúmenes parecidos de piedra clara. Se visitan los tres, con un recorrido que explica lo que comparten las tres religiones.",
        "come": "Taxi hasta el distrito cultural de Saadiyat; ropa que cubra.",
        "quando": "Por la mañana o por la tarde, fuera de las horas de oración. Horarios y reservas en la web oficial.",
        "tempo": "1 hora",
        "lat": 24.53093,
        "lng": 54.4061,
        "url": "https://www.abrahamicfamilyhouse.ae/"
      },
      {
        "nome": "Corniche y Heritage Village",
        "testo": "Un largo paseo marítimo con playa pública, carriles para bicis y peatones y vistas a los rascacielos. En el rompeolas, a pocos pasos del Marina Mall, el Heritage Village recrea la vida antes del petróleo: un viejo zoco, una mezquita, un campamento, artesanos que tejen el sadu y soplan vidrio, y un pequeño museo sobre los pescadores de perlas.",
        "come": "Taxi hasta la Corniche, luego a pie o en bici.",
        "quando": "De última hora de la tarde al atardecer, cuando se ilumina el skyline.",
        "tempo": "2 horas",
        "costo": "Heritage Village con entrada gratuita (2026)",
        "lat": 24.47324,
        "lng": 54.34087
      },
      {
        "nome": "Wahat Al Karama",
        "testo": "El memorial a los caídos de los Emiratos, justo frente a la Gran Mezquita: grandes losas inclinadas de aluminio y un estanque que refleja las cúpulas. Pocos lo visitan, y es la mejor vista de la mezquita iluminada.",
        "come": "A pie o en un taxi corto desde la Gran Mezquita.",
        "quando": "Después del atardecer, al salir de la mezquita.",
        "tempo": "30-45 minutos",
        "lat": 24.41346,
        "lng": 54.47878
      },
      {
        "nome": "Mercado de pescado de Mina Zayed",
        "testo": "El mercado de pescado del puerto de Mina Zayed, todavía abierto y uno de los rincones más auténticos de la ciudad, junto a los otros mercados históricos de la zona. Se ve el pescado fresco del Golfo recién desembarcado.",
        "come": "Taxi desde el centro.",
        "quando": "A primera hora de la mañana o a última hora de la tarde.",
        "tempo": "1 hora",
        "lat": 24.5253,
        "lng": 54.37693
      },
      {
        "nome": "Playa de Saadiyat",
        "testo": "Una larga playa de arena blanca en el lado norte de la isla de Saadiyat, con dunas bajas protegidas donde anidan las tortugas. Hay un tramo público equipado, además de los resorts.",
        "come": "Taxi desde Abu Dabi, unos 20 minutos desde la Corniche.",
        "quando": "Por la mañana, antes del Louvre; el baño, de octubre a abril.",
        "tempo": "2-3 horas",
        "lat": 24.53167,
        "lng": 54.44306
      },
      {
        "nome": "Jubail Mangrove Park",
        "testo": "Una pasarela de madera que entra en el bosque de manglares de la isla de Jubail, entre el centro y Yas. Se camina sobre el agua poco profunda entre cangrejos, garzas y raíces aéreas: una hora de naturaleza a media hora del centro.",
        "come": "Taxi desde el centro o desde Yas.",
        "quando": "A primera hora de la mañana o a última de la tarde, con menos calor.",
        "tempo": "1 hora"
      },
      {
        "nome": "Yas Island",
        "testo": "La isla de los parques temáticos y del deporte: Ferrari World con sus montañas rusas, Warner Bros. World, el parque acuático y el circuito de Yas Marina, donde a principios de diciembre se corre el Gran Premio de Fórmula 1.",
        "come": "Taxi, unos 30 minutos desde el centro; cerca del aeropuerto.",
        "quando": "Un día entero si se entra en los parques; la noche para la marina.",
        "tempo": "Medio día o un día",
        "lat": 24.4838,
        "lng": 54.607,
        "url": "https://www.yasisland.com/"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Qasr Al Hosn y el centro",
          "Mediodía y tarde: Louvre Abu Dabi en la isla de Saadiyat",
          "Última hora de la tarde: Gran Mezquita Sheikh Zayed hasta que se encienden las luces",
          "Noche: Wahat Al Karama por la vista de la mezquita, cena en la Corniche"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como el programa de un día",
          "Día 2, mañana: Qasr Al Watan",
          "Día 2, tarde: Zayed National Museum y Abrahamic Family House en Saadiyat, y luego la playa",
          "Día 2, noche: Heritage Village y mercado de pescado de Mina Zayed"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2: como arriba",
          "Día 3: excursión a Al Ain, el oasis UNESCO, o hacia Liwa con una noche en el desierto",
          "Como alternativa, con niños o por la Fórmula 1: Yas Island"
        ]
      }
    ],
    zone: [
      {
        "nome": "Corniche / centro",
        "perChi": "quien quiere estar en la ciudad",
        "testo": "Hoteles con vistas al mar y restaurantes cerca.",
        "fascia": "80-200 €"
      },
      {
        "nome": "Saadiyat",
        "perChi": "quien quiere museos y playa",
        "testo": "Resorts y el Louvre, más aislado y caro.",
        "fascia": "200-500 €"
      },
      {
        "nome": "Yas Island",
        "perChi": "quien viene por los parques o por la Fórmula 1",
        "testo": "Hoteles modernos cerca del aeropuerto y los parques, lejos del centro. Durante el Gran Premio los precios suben mucho.",
        "fascia": "100-250 €"
      }
    ],
    sapori: [
      {
        "nome": "Cocina india y paquistaní",
        "testo": "Buena y económica, en los barrios alrededor del centro."
      },
      {
        "nome": "Machboos",
        "testo": "Arroz especiado con carne o pescado, cocina emiratí."
      },
      {
        "nome": "Luqaimat",
        "testo": "Buñuelitos dulces fritos con almíbar de dátiles."
      }
    ],
    attenzioni: [
      "Ropa inadecuada en la Gran Mezquita: leer las normas de vestimenta en la web oficial antes de ir.",
      "Visitar la mezquita a mediodía: el mármol deslumbra y se asa uno.",
      "Reservar el Louvre con antelación los fines de semana.",
      "Principios de diciembre: el Gran Premio de Fórmula 1 de Abu Dabi llena la ciudad y sube los precios de los hoteles.",
      "Tensiones en la región: los gobiernos europeos avisan de posibles cancelaciones de vuelos y cierres del espacio aéreo con poco aviso (gov.uk, octubre de 2026). Consultar las recomendaciones oficiales de viaje antes de salir."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Dubái",
        "distanza": "unas 2 horas en autobús, 140 km",
        "come": "Autobuses frecuentes, taxi o coche con conductor.",
        "testo": "El creek en abra, los zocos de Deira, Al Fahidi y el Burj Khalifa al atardecer caben en un día (hay una ficha dedicada)."
      },
      {
        "nome": "Al Ain",
        "distanza": "unas 1h30 en coche",
        "come": "Coche de alquiler o conductor para el día.",
        "testo": "El oasis patrimonio de la UNESCO con más de 147.000 palmeras regadas por los falaj, el fuerte Al Jahili y la carretera del Jebel Hafeet para el atardecer."
      },
      {
        "nome": "Liwa y las dunas de Moreeb",
        "distanza": "unas 2 horas en coche",
        "come": "Coche o traslado; en las dunas solo en 4x4 con conductor experto.",
        "testo": "El borde del Rub' al-Khali, con algunas de las dunas más altas del mundo. Mejor con una noche en el desierto que en el día."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Abu Dabi?",
        "risposta": "Un día completo para la Gran Mezquita y el Louvre, dos para añadir Qasr Al Watan, el Zayed National Museum y la Corniche. El tercero sirve para Al Ain o Liwa."
      },
      {
        "domanda": "¿Hace falta reservar la Gran Mezquita?",
        "risposta": "Sí: los visitantes deben reservar un pase en línea en la web oficial, con franja horaria. El viernes por la mañana y a mediodía el horario para no musulmanes se reduce."
      },
      {
        "domanda": "¿Cómo vestirse para la Gran Mezquita?",
        "risposta": "Brazos y piernas cubiertos para todos, ropa holgada y no transparente, cabeza cubierta para las mujeres. Conviene llegar ya vestido correctamente para evitar la cola de las abayas prestadas."
      },
      {
        "domanda": "¿Se puede visitar Abu Dabi en el día desde Dubái?",
        "risposta": "Sí, con dos horas de autobús por trayecto, pero solo se ve lo esencial. Dormir una noche permite ver la mezquita al atardecer con calma y el Louvre a la mañana siguiente."
      },
      {
        "domanda": "¿El Louvre Abu Dabi abre todos los días?",
        "risposta": "No, cierra los lunes. Los demás días abre a las 10 y cierra a las 18.30 o a las 20.30 según el día; la entrada se compra en línea."
      },
      {
        "domanda": "¿Cómo funciona el stopover gratuito de Etihad?",
        "risposta": "Se añade al reservar en la web de Etihad un billete de ida y vuelta con una parada de al menos 24 horas, y da una o dos noches de hotel; el hotel se reserva unos días antes del vuelo. Las condiciones cambian: comprobarlas antes."
      }
    ],
    esperienzeSlugs: ['moschea-sheikh-zayed', 'louvre-abu-dhabi'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "Los rascacielos del paseo marítimo de Abu Dabi vistos desde el mar, con un velero",
    immagine: '/images/emirati-arabi-uniti/abu-dhabi.jpg',
  },
  {
    slug: 'liwa-al-ain',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 3,
    nome: 'Liwa y Al Ain',
    tipologia: ['deserto', 'natura', 'oasi'],
    giorniConsigliati: '1-2 días, como ampliación desde Abu Dabi',
    visitataPersonalmente: false,
    introduzione:
      "El interior. Al sur está el oasis de Liwa, en el borde del Rub' al-Khali, el Cuarto Vacío, el mayor desierto de arena continuo del mundo, con dunas que superan los 250 metros. Al este está Al Ain, la «ciudad jardín» patrimonio de la UNESCO, con los oasis de palmeras regados por los falaj, canales subterráneos de hace dos mil años.",
    percheAndarci:
      "Es la única forma de ver el desierto de verdad, y no su versión de safari nocturno a las puertas de Dubái. Al Ain, además, enseña cómo se vivía aquí antes del petróleo: un oasis agrícola con un sistema de riego que todavía funciona.",
    cosaVedere: [
      "Las dunas de Moreeb, entre las más altas del mundo, en la zona de Liwa",
      "El borde del Rub' al-Khali, el mayor desierto de arena continuo del planeta",
      "El oasis de Al Ain, patrimonio de la UNESCO, con 147.000 palmeras y los canales falaj todavía en uso",
      "El fuerte de Al Jahili y los yacimientos arqueológicos de Hili, con tumbas de la Edad del Bronce",
      "Jebel Hafeet, la montaña con la carretera panorámica y la vista del oasis",
    ],
    cosaFare: [
      "Una noche en el desierto en Liwa, mucho más auténtica que los safaris nocturnos de los alrededores de Dubái",
      "El amanecer sobre las dunas de Moreeb",
      "Caminar por el oasis de Al Ain a lo largo de los canales de riego, a la sombra de las palmeras",
      "Subir en coche al Jebel Hafeet, entre curvas, hasta el mirador de la cima",
    ],
    doveDormire:
      "En Liwa hay pocos resorts en el desierto, caros y que hay que reservar con antelación; Al Ain tiene la oferta normal de una ciudad. Casi todos llegan desde Abu Dabi en el día, y es la elección que hace perder la mejor parte: la noche.",
    doveMangiare:
      "Fuera de los resorts están los restaurantes de barrio, casi todos indios o paquistaníes, buenos y económicos. En Al Ain vale la pena buscar los dátiles locales, el producto agrícola del oasis, que se venden en los mercados especializados.",
    comeArrivare:
      "Desde Abu Dabi son unas 2 horas de carretera hasta Liwa y 1 h 30 hasta Al Ain. Hace falta un coche de alquiler o un traslado: hay transporte público, pero es poco práctico, y para las dunas hace falta de todos modos un 4x4 con guía.",
    comeSpostarsi: "Con coche propio por las carreteras asfaltadas; por las dunas solo en 4x4 con un conductor experto. Quien conduce sobre la arena sin experiencia suele quedarse atascado.",
    periodoMigliore:
      "de noviembre a marzo, y aun entonces en el desierto las noches son frías. En verano en el interior se superan a menudo los 50 grados.",
    costi: "oasis de Al Ain y fuertes gratuitos o casi; la partida cara son los resorts en el desierto.",
    erroriDaEvitare: [
      "Confundir un safari nocturno de los alrededores de Dubái con el desierto: esos se hacen en dunas pequeñas a media hora de la ciudad, aquí se está en el borde del Rub' al-Khali",
      "Conducir sobre la arena sin experiencia y sin un segundo vehículo: es la forma más común de meterse en problemas",
      "Venir en el día y saltarse la noche, que es el motivo por el que se llega hasta aquí",
      "Subestimar el frío de las noches de invierno en el desierto",
    ],
    miaEsperienza:
      "Es una posible extensión del viaje que hice: aquí la ficha se queda en los hechos verificables. Está en la lista por un motivo preciso. Lo que en Dubái y en Abu Dabi venden como «safari por el desierto» se hace en dunas modestas a media hora de la ciudad, con quads, la cena en un campamento de tiendas y la vuelta por la noche. El Rub' al-Khali es otra cosa, el mayor desierto de arena continuo del mundo, con dunas de más de doscientos metros en Moreeb, y está a dos horas de Abu Dabi: basta una ampliación de dos días. La otra mitad del desvío es Al Ain, que es lo contrario: un oasis patrimonio de la UNESCO con ciento cuarenta y siete mil palmeras regadas por canales excavados hace dos mil años y todavía en funcionamiento, donde se camina a la sombra y se oye correr el agua. Juntos cuentan cómo era este país antes del petróleo, y es lo que falta por completo en un stopover hecho solo de ciudades.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Dunas de Moreeb y Liwa",
        "testo": "El borde del Rub al-Jali, el desierto de arena del sur de la península arábiga, con dunas muy altas; Moreeb, unos 25 km al sur del oasis de Liwa y de unos 300 metros de altura, es la más alta de los Emiratos. Aquí no hay safaris de tarde: hace falta una noche en el desierto.",
        "come": "En coche o con excursión desde Abu Dabi; fuera de pista hace falta un 4x4 y experiencia.",
        "quando": "Amanecer y atardecer.",
        "tempo": "1-2 días",
        "consiglio": "No conducir por la arena sin experiencia y sin un segundo vehículo."
      },
      {
        "nome": "Oasis de Al Ain",
        "testo": "Parte del patrimonio UNESCO de los Sitios culturales de Al Ain desde 2011: más de 147.000 palmeras datileras en más de 1.200 hectáreas, regadas por los canales falaj, un sistema de miles de años. Se camina a la sombra oyendo correr el agua.",
        "come": "En coche desde Abu Dabi. El oasis se recorre a pie.",
        "quando": "Mañana.",
        "tempo": "2 horas"
      },
      {
        "nome": "Fuerte Al Jahili y sitios de Hili",
        "testo": "El fuerte Al Jahili, construido hacia 1891, con sus torres de vigilancia, y el parque arqueológico de Hili, uno de los principales yacimientos de la Edad del Bronce de los Emiratos, con tumbas del III milenio a. C., parte del patrimonio de la UNESCO.",
        "come": "En coche desde Al Ain.",
        "quando": "Mañana.",
        "tempo": "2 horas"
      },
      {
        "nome": "Jebel Hafeet",
        "testo": "La montaña sobre Al Ain, con una carretera panorámica de 11,7 km y 60 curvas hasta el aparcamiento de la cima, desde donde se ve la ciudad.",
        "come": "En coche desde Al Ain.",
        "quando": "Atardecer.",
        "tempo": "1-2 horas"
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Abu Dabi hacia Liwa, noche en el desierto",
          "Día 2: amanecer en las dunas de Moreeb, luego Al Ain, oasis y fuerte"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campamentos y resorts en Liwa",
        "perChi": "quien quiere el desierto de verdad",
        "testo": "Pocos resorts, algunos de lujo, en medio de las dunas."
      },
      {
        "nome": "Al Ain",
        "perChi": "quien quiere el oasis",
        "testo": "Hoteles de ciudad y restaurantes indios y paquistaníes baratos."
      }
    ],
    sapori: [
      {
        "nome": "Dátiles de Al Ain",
        "testo": "El producto del oasis, en mercados especializados."
      },
      {
        "nome": "Cocina india y paquistaní",
        "testo": "En restaurantes de barrio, buena y barata."
      },
      {
        "nome": "Machboos",
        "testo": "Cocina emiratí."
      },
      {
        "nome": "Café árabe",
        "testo": "Con cardamomo."
      }
    ],
    attenzioni: [
      "Confundir un safari de tarde con el desierto: se hacen en dunas pequeñas cerca de Dubái.",
      "Conducir por la arena sin experiencia y sin un segundo vehículo.",
      "Ir en el día y saltarse la noche, que es la razón de ir a Liwa.",
      "En verano el interior es extremadamente caluroso: venir entre noviembre y marzo."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: "La llanura desértica alrededor de Al Ain vista desde las laderas del Jebel Hafeet, entre la bruma",
    immagine: '/images/emirati-arabi-uniti/liwa-al-ain.jpg',
  },
]
