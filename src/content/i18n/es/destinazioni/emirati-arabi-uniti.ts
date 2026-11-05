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
      "En avión a Dubai International (DXB), a veinte minutos en metro del centro, o a Al Maktoum (DWC), mucho más lejos. Desde Abu Dabi hay autobuses frecuentes, unas 2 horas.",
    comeSpostarsi:
      "Metro con la Nol Card en el eje principal, taxis y Careem para el resto, abra en el creek a un dírham por trayecto. Solo se puede caminar en invierno y solo en algunas zonas: la ciudad está hecha para el coche.",
    periodoMigliore:
      "de noviembre a marzo. De junio a septiembre se superan los 45 grados con mucha humedad y se vive en espacios cerrados: un stopover veraniego se reduce a centros comerciales y hoteles.",
    costi:
      "Burj Khalifa desde unos 170 dírhams para las plantas 124-125, mucho más para la 148 y para las franjas del atardecer; abra 1 dírham; metro unos pocos dírhams; safari por el desierto 200-400 dírhams según la fórmula. Con Dubai Connect o el stopover de Etihad el hotel sale de la cuenta.",
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
        "testo": "El viejo puerto comercial, aún activo, con barcos de madera cargados de mercancías para Irán y la India. El abra, el ferri de madera, cruza el creek por un dírham y desembarca en el zoco de las especias y en el del oro.",
        "come": "Metro hasta Al Ras o Al Ghubaiba, luego a pie hasta las paradas de abra.",
        "quando": "Mañana o última hora de la tarde, menos calor.",
        "tempo": "2-3 horas",
        "costo": "Abra 1 dírham",
        "consiglio": "Sentarse en el abra entre quienes van al trabajo: es la parte de Dubái que nadie busca."
      },
      {
        "nome": "Al Fahidi",
        "testo": "El barrio histórico con torres de viento, casas de coral y yeso y callejones estrechos, donde se entiende cómo era el lugar cuando las perlas eran la economía. Hay museos y cafés.",
        "come": "Metro hasta Al Fahidi, a 20 minutos del centro nuevo.",
        "quando": "Mañana, antes del calor.",
        "tempo": "1-2 horas",
        "consiglio": "Combina bien con el recorrido del creek en la misma mañana."
      },
      {
        "nome": "Burj Khalifa",
        "testo": "El rascacielos más alto del mundo, 828 metros. Las terrazas de los pisos 124-125 y 148 dan vistas a la ciudad y al desierto.",
        "come": "Metro hasta Burj Khalifa/Dubai Mall. Entrada que se compra en línea.",
        "quando": "Atardecer, con franjas que se reservan con días de antelación.",
        "tempo": "1-1,5 horas",
        "url": "https://www.burjkhalifa.ae/",
        "consiglio": "Comprar en línea: en el lugar cuesta más y las franjas del atardecer se agotan."
      },
      {
        "nome": "Safari por el desierto",
        "testo": "Una tarde en 4x4 por las dunas, con atardecer, cena en campamento de tiendas y noche bajo las estrellas. Es la experiencia de «desierto» más vendida alrededor de Dubái.",
        "come": "Operadores con recogida en el hotel. Dunas modestas a media hora de la ciudad.",
        "quando": "Tarde y noche, de octubre a abril.",
        "tempo": "5-6 horas",
        "consiglio": "Para el desierto de verdad hacen falta Liwa y el Rub' al-Jali."
      },
      {
        "nome": "Museo del Futuro",
        "testo": "El edificio en forma de anillo ovalado cubierto de caligrafía árabe de acero, en Sheikh Zayed Road. Dentro, cinco plantas de instalaciones inmersivas sobre el espacio, la naturaleza y el cuerpo humano en 2071. Vale sobre todo por la arquitectura, que se fotografía desde fuera sin entrar.",
        "come": "Metro hasta Emirates Towers y pasarela cubierta. Entrada con franja horaria, en línea.",
        "quando": "Horarios y entradas en la web oficial. De noche la caligrafía iluminada luce más en las fotos.",
        "tempo": "1,5-2 horas",
        "url": "https://museumofthefuture.ae/",
        "consiglio": "Reservar con unos días de antelación: las franjas del fin de semana se agotan pronto."
      },
      {
        "nome": "Dubai Frame",
        "testo": "Un marco de unos 150 metros en el parque de Zabeel, con un puente de cristal arriba: a un lado se mira el Dubái antiguo de Deira y Karama, al otro los rascacielos de Downtown. Una galería en la planta baja cuenta la ciudad antes del petróleo.",
        "come": "Metro hasta Max o ADCB y taxi corto, o taxi directo a la entrada del parque de Zabeel.",
        "quando": "Última hora de la tarde, para ver la ciudad con luz y luego iluminada. Horarios en la web oficial.",
        "tempo": "1 hora",
        "url": "https://www.dubaiframe.ae/",
        "consiglio": "Cuesta menos que el Burj Khalifa y la vista sobre Deira, que desde el Burj no se ve bien, es la razón para subir."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: creek, abra y zocos de Deira",
          "Almuerzo en Karama o Bur Dubai",
          "Tarde: Al Fahidi",
          "Atardecer: Burj Khalifa, luego fuente de Dubai Mall"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba",
          "Día 2: safari por el desierto o un día en Abu Dabi"
        ]
      }
    ],
    zone: [
      {
        "nome": "Deira / Bur Dubai",
        "perChi": "quien quiere el Dubái viejo y gastar menos",
        "testo": "Hoteles de gama media cerca del creek y los zocos. Ruidosos, pero con restaurantes baratos."
      },
      {
        "nome": "Downtown",
        "perChi": "quien quiere estar bajo el Burj Khalifa",
        "testo": "Hoteles de lujo y centros comerciales. Caro y anónimo."
      },
      {
        "nome": "Marina / JBR",
        "perChi": "quien quiere playa y rascacielos",
        "testo": "Moderno y turístico, lejos del Dubái histórico."
      }
    ],
    sapori: [
      {
        "nome": "Biryani y currys paquistaníes",
        "testo": "En Karama, Bur Dubai y Deira se cena por menos de diez euros en locales llenos de residentes."
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
      "Comprar la entrada del Burj Khalifa en el lugar: cuesta más y las franjas del atardecer se agotan con días de antelación.",
      "Quedarse en los centros comerciales y la Marina: lo más interesante son el creek, los zocos y Al Fahidi, a veinte minutos en metro.",
      "Escala en verano: de junio a septiembre se superan los 45 grados y se vive en interiores.",
      "Normas de vestimenta, alcohol y comportamiento en público: comprobar los canales oficiales."
    ],
    // GUIDA-END
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
      "En avión a Abu Dhabi Zayed International (AUH), el hub de Etihad. Desde Dubái hay autobuses frecuentes, unas 2 horas, o taxi.",
    comeSpostarsi:
      "No hay metro: se usan taxis y Careem, que cuestan poco, o los autobuses urbanos. Entre el centro, Saadiyat y Yas las distancias son grandes, y durante buena parte del año caminar no es una opción.",
    periodoMigliore: "de noviembre a marzo, como en todo el Golfo. En otoño el Gran Premio de Fórmula 1 llena la ciudad.",
    costi:
      "Gran Mezquita gratuita; Louvre Abu Dabi en torno a 65 dírhams; Qasr Al Watan unos 65. En conjunto, un día en Abu Dabi cuesta mucho menos que uno en Dubái.",
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
        "testo": "Ochenta y dos cúpulas, columnas blancas con incrustaciones de nácar, la alfombra anudada a mano más grande del mundo y lámparas Swarovski. Está abierta a los no musulmanes.",
        "come": "Taxi o Uber. Entrada gratuita, reservando la visita en la web oficial, y normas de vestimenta: brazos y piernas cubiertos, cabeza cubierta para las mujeres.",
        "quando": "De sábado a jueves 9-20.30; viernes 9-11.30 y 14.30-20.30 (2026). Mejor a última hora de la tarde, cuando el mármol pasa del blanco al rosa y luego al azul; a mediodía el blanco deslumbra.",
        "tempo": "1-1,5 horas",
        "costo": "Entrada gratuita",
        "url": "https://www.szgmc.gov.ae/",
        "consiglio": "Los horarios para no musulmanes varían, sobre todo el viernes: comprobar en el sitio."
      },
      {
        "nome": "Louvre Abu Dabi",
        "testo": "El museo de Jean Nouvel en la isla de Saadiyat, bajo una cúpula perforada por 7.850 estrellas metálicas superpuestas que hace llover luz. El edificio vale tanto como la colección.",
        "come": "Taxi o Uber desde Abu Dabi.",
        "quando": "Noche, cuando la luz bajo la cúpula cambia.",
        "tempo": "2-3 horas",
        "url": "https://www.louvreabudhabi.ae/",
        "consiglio": "Sentarse bajo la cúpula y quedarse un rato."
      },
      {
        "nome": "Qasr Al Watan",
        "testo": "El palacio presidencial abierto al público, con salas decoradas, la sala del Consejo y una exposición sobre el poder en los Emiratos.",
        "come": "Taxi o Uber.",
        "quando": "Mañana.",
        "tempo": "1,5-2 horas",
        "url": "https://www.qasralwatan.ae/"
      },
      {
        "nome": "Mercado de pescado de Al Mina",
        "testo": "El mercado del puerto: se elige el pescado en el mostrador y se lleva a los restaurantes de al lado, que lo cocinan por pocos dírhams.",
        "come": "Taxi desde el centro.",
        "quando": "A primera hora o última de la tarde.",
        "tempo": "1 hora"
      },
      {
        "nome": "Corniche y Heritage Village",
        "testo": "Ocho kilómetros de paseo marítimo con playas públicas, carriles bici y vista a los rascacielos. Al final, en el rompeolas, el Heritage Village recrea un pueblo de antes del petróleo: tiendas de pelo de cabra, una mezquita de barro, talleres de artesanos y una vista de la ciudad que justifica el paseo.",
        "come": "Taxi hasta la Corniche, luego a pie o en bici de alquiler. El Heritage Village está en el rompeolas frente al Marina Mall.",
        "quando": "De última hora de la tarde al atardecer, cuando se ilumina el skyline.",
        "tempo": "2 horas",
        "costo": "Corniche y Heritage Village gratis"
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Gran Mezquita al final de la tarde, cena en la Corniche",
          "Día 2: Qasr Al Watan por la mañana, Louvre Abu Dabi por la noche"
        ]
      }
    ],
    zone: [
      {
        "nome": "Corniche / centro",
        "perChi": "quien quiere estar en la ciudad",
        "testo": "Hoteles con vistas al mar y restaurantes cerca."
      },
      {
        "nome": "Saadiyat",
        "perChi": "quien quiere museos y playa",
        "testo": "Resorts y el Louvre, más aislado y caro."
      }
    ],
    sapori: [
      {
        "nome": "Cocina india y paquistaní",
        "testo": "La mejor y más barata, en los barrios alrededor del centro."
      },
      {
        "nome": "Pescado de Al Mina",
        "testo": "Se elige en el mostrador y se cocina al lado."
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
      "En la Gran Mezquita vestido de forma incorrecta: brazos y piernas cubiertos para todos, cabeza cubierta para las mujeres; las abayas prestadas tienen largas colas.",
      "Visitar la mezquita a mediodía: el mármol deslumbra y se asa uno.",
      "Reservar el Louvre con antelación los fines de semana.",
      "Otoño: el Gran Premio de Fórmula 1 llena la ciudad."
    ],
    // GUIDA-END
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
      "Todavía no he estado, así que esta ficha se queda en los hechos y no cuenta un día que no ha existido. Está en la lista por un motivo preciso. Lo que en Dubái y en Abu Dabi venden como «safari por el desierto» se hace en dunas modestas a media hora de la ciudad, con quads, la cena en un campamento de tiendas y la vuelta por la noche. El Rub' al-Khali es otra cosa, el mayor desierto de arena continuo del mundo, con dunas de más de doscientos metros en Moreeb, y está a dos horas de Abu Dabi: basta una ampliación de dos días. La otra mitad del desvío es Al Ain, que es lo contrario: un oasis patrimonio de la UNESCO con ciento cuarenta y siete mil palmeras regadas por canales excavados hace dos mil años y todavía en funcionamiento, donde se camina a la sombra y se oye correr el agua. Juntos cuentan cómo era este país antes del petróleo, y es lo que falta por completo en un stopover hecho solo de ciudades.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Dunas de Moreeb y Liwa",
        "testo": "El borde del Rub' al-Jali, el mayor desierto de arena continuo del mundo, con dunas de más de doscientos metros en Moreeb. Aquí no hay safaris nocturnos: hace falta una noche en el desierto.",
        "come": "En coche o en tour desde Abu Dabi, unas dos horas; fuera de pista hace falta un 4x4 con experiencia.",
        "quando": "Amanecer y atardecer.",
        "tempo": "1-2 días",
        "consiglio": "No conducir por la arena sin experiencia y sin un segundo vehículo."
      },
      {
        "nome": "Oasis de Al Ain",
        "testo": "Patrimonio de la UNESCO, con 147.000 palmeras regadas por canales falaj excavados hace dos mil años y aún en uso. Se camina a la sombra oyendo correr el agua.",
        "come": "Al Ain está a 1,5 horas de Abu Dabi. El oasis se recorre a pie.",
        "quando": "Mañana.",
        "tempo": "2 horas"
      },
      {
        "nome": "Fuerte Al Jahili y sitios de Hili",
        "testo": "El fuerte de ladrillos de barro y las tumbas de la Edad del Bronce de Hili, patrimonio de la UNESCO.",
        "come": "En coche desde Al Ain.",
        "quando": "Mañana.",
        "tempo": "2 horas"
      },
      {
        "nome": "Jebel Hafeet",
        "testo": "Una montaña con una carretera de curvas hasta el mirador de la cima, a más de mil metros.",
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
      "Confundir un safari nocturno con el desierto: esos se hacen en dunas pequeñas a media hora de Dubái.",
      "Conducir por la arena sin experiencia y sin un segundo vehículo.",
      "Ir en el día y saltarse la noche, que es la razón de ir a Liwa.",
      "En verano en el interior se superan a menudo los 50 grados."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: "La llanura desértica alrededor de Al Ain vista desde las laderas del Jebel Hafeet, entre la bruma",
    immagine: '/images/emirati-arabi-uniti/liwa-al-ain.jpg',
  },
]
