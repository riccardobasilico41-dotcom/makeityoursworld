import type { Destinazione } from '@/lib/types'

export const destinazioniBolivia: Destinazione[] = [
  {
    slug: 'la-paz',
    paeseSlug: 'bolivia',
    ordine: 1,
    nome: 'La Paz',
    tipologia: ['città', 'avventura'],
    giorniConsigliati: '3-4 días, incluida la jornada en la Carretera de la Muerte',
    visitataPersonalmente: true,
    introduzione:
      "La sede de gobierno más alta del mundo, encajada en un cañón a 3.600 metros con El Alto dominándola a más de 4.000. Uno se mueve con una red de teleféricos urbanos que es a la vez transporte público y el mejor mirador de la ciudad.",
    percheAndarci:
      "Porque es la base para la Carretera de la Muerte y para el Titicaca, y porque la propia ciudad, con los mercados callejeros, los barrios verticales y el contraste entre el centro y El Alto, es una de las más peculiares del continente.",
    cosaVedere: [
      "Mi Teleférico, la red de teleféricos urbanos: la línea roja y la amarilla dan la mejor vista de la hondonada",
      "El Mercado de las Brujas, con los remedios tradicionales aimaras",
      "El Valle de la Luna, formaciones de arcilla erosionada a pocos kilómetros del centro",
      "El mercado de El Alto (jueves y domingo), uno de los más grandes de Sudamérica",
      "El Nevado Illimani que cierra el horizonte a 6.438 metros",
    ],
    cosaFare: [
      "Bajar la Carretera de la Muerte en bicicleta de montaña (véase la ficha de experiencia dedicada)",
      "Subir en teleférico a la hora del atardecer, cuando la hondonada se ilumina",
      "Asistir a un combate de cholitas luchadoras, el wrestling de las mujeres aimaras en El Alto",
      "Excursión al Chacaltaya, la antigua estación de esquí más alta del mundo, hoy sin glaciar",
    ],
    doveDormire: "Sopocachi por los restaurantes y la vida nocturna, la zona de San Pedro y el centro por los precios bajos y la comodidad respecto a las agencias.",
    doveMangiare:
      "En La Paz se come en la calle mejor que en el restaurante: salteñas a media mañana (es una costumbre local: en el desayuno no se comen), api con pastel, y las sopas de los mercados cubiertos. En la zona de Sopocachi está la oferta más cuidada de la ciudad.",
    comeArrivare: "Los vuelos internacionales y nacionales aterrizan en El Alto (LPB), a más de 4.000 metros: se pasa del nivel del mar a la altura máxima en pocas horas, con efectos que se notan enseguida. Del aeropuerto al centro hay unos 30-45 minutos en taxi oficial o pedido desde el hotel, más con tráfico o bloqueos; en el aeropuerto conviene cambiar poco efectivo y el resto en la ciudad. Por tierra llegan los buses desde Copacabana (unas 3,5-4 horas) y desde Puno o Cusco pasando por el Titicaca; desde Uyuni el bus nocturno tarda unas 10 horas.",
    comeSpostarsi: "Mi Teleférico para los desplazamientos largos, radiotaxi para el resto. Evitar los taxis no oficiales, sobre todo de noche.",
    periodoMigliore: "mayo-octubre, estación seca; las noches son frías todo el año",
    costi: "Presupuesto bajo unos 20-35 € al día (albergue, almuerzo en los mercados, teleférico y minibuses); medio 50-90 € (hotel en Sopocachi o en el centro, restaurantes, radiotaxi); alto desde 150 € (hotel de diseño en San Jorge o Calacoto, guía privado, cenas cuidadas). Teleférico 3 bolivianos por trayecto, menos de medio euro, con billete aparte en cada cambio de línea; Valle de la Luna unos 15 bolivianos; Tiwanaku unos 100 bolivianos para extranjeros; Carretera de la Muerte con peaje de las comunidades de unos 50 bolivianos, a menudo no incluido en el precio.",
    erroriDaEvitare: [
      "Aterrizar en El Alto y programar algo exigente el mismo día: del nivel del mar a 4.000 metros el cuerpo no se adapta en pocas horas",
      "Subestimar los bloqueos de carreteras: cuando los hay, pueden aislar la ciudad durante días y hacer saltar vuelos y traslados",
      "Andar con objetos de valor a la vista en los mercados concurridos",
    ],
    miaEsperienza:
      "Aterrizar en El Alto es un shock físico que casi nadie tiene en cuenta: bajamos del avión a más de cuatro mil metros y el cuerpo se dio cuenta antes incluso de salir de la terminal. La Paz es la ciudad más extraña del continente, construida dentro de una hondonada con los barrios pobres arriba y los ricos abajo. Es lo contrario de cualquier otra ciudad del mundo, y por una razón precisa: cuanto más se baja, más se respira. Los teleféricos urbanos se los recomiendo a cualquiera: cuestan unos pocos céntimos y dan la mejor vista de la hondonada. El problema de verdad de Bolivia son los bloqueos de carreteras, que hay que tener en cuenta en el itinerario como un riesgo concreto.",
    luoghi: [
      {
        "nome": "Mi Teleférico",
        "testo": "La red de teleféricos urbanos que une La Paz y El Alto. Es transporte público y a la vez un gran mirador sobre la hoya, sobre todo desde las líneas roja y amarilla.",
        "come": "Las estaciones están por toda la ciudad; el billete se compra en la estación.",
        "quando": "Al atardecer, cuando la hoya se ilumina.",
        "tempo": "1-2 horas",
        "costo": "3 bolivianos por trayecto (menos de 0,50 €), con un nuevo billete en cada cambio de línea",
        "url": "https://www.miteleferico.bo/",
        "lat": -16.49148,
        "lng": -68.14482,
        "consiglio": "Rick las recomienda a todos: cuestan muy poco y dan la mejor vista de la hoya."
      },
      {
        "nome": "Plaza Murillo",
        "testo": "La plaza del poder, con el Palacio de Gobierno, el Parlamento y la catedral. Es el punto del que salen las calles coloniales del centro, siempre animada por palomas, vendedores y manifestaciones.",
        "come": "A pie desde el centro, cuesta arriba desde la calle Comercio.",
        "quando": "Por la mañana, cuando la plaza está llena de gente local.",
        "tempo": "30-45 minutos",
        "lat": -16.49571,
        "lng": -68.13356,
        "consiglio": "Si hay una manifestación, la policía cierra los accesos: se pasa más tarde."
      },
      {
        "nome": "Basílica de San Francisco",
        "testo": "La iglesia barroca andina del siglo XVIII, con la fachada de piedra tallada con plantas y figuras indígenas. El convento contiguo tiene un museo y se puede subir a los tejados para ver la hoyada.",
        "come": "En el centro, en la Plaza San Francisco, al comienzo de la calle Sagárnaga.",
        "quando": "Por la mañana o a primera hora de la tarde.",
        "tempo": "1 hora con el museo y los tejados",
        "lat": -16.49648,
        "lng": -68.13736,
        "consiglio": "El Mercado de las Brujas está a pocos minutos a pie cuesta arriba: se visitan juntos."
      },
      {
        "nome": "Mercado de las Brujas",
        "testo": "El mercado de las brujas, con remedios tradicionales aymaras, hierbas, amuletos y los fetos de llama usados como ofrenda a la Pachamama.",
        "come": "A pie desde el centro, en la zona de la calle Linares.",
        "quando": "De día.",
        "tempo": "1 hora",
        "lat": -16.49624,
        "lng": -68.13915,
        "consiglio": "Pregunta siempre antes de fotografiar a las personas."
      },
      {
        "nome": "Calle Jaén",
        "testo": "La calle colonial mejor conservada de la ciudad, empedrada y con casas de balcones de colores, que alberga algunos pequeños museos municipales.",
        "come": "A pie desde el centro, al norte de la Plaza Murillo.",
        "quando": "De día.",
        "tempo": "1 hora",
        "lat": -16.49223,
        "lng": -68.13587,
        "consiglio": "Los museos de Jaén suelen tener una entrada única: pregunta en el primero que visites."
      },
      {
        "nome": "Museo Nacional de Etnografía y Folklore (MUSEF)",
        "testo": "En un palacio colonial del centro, reúne tejidos, máscaras de las fiestas y objetos de las culturas andinas y amazónicas. Las salas de las máscaras ayudan a entender carnavales y procesiones.",
        "come": "A pie, a dos pasos de la Plaza Murillo.",
        "quando": "Mañana o tarde en días laborables.",
        "tempo": "1-1,5 horas",
        "lat": -16.49438,
        "lng": -68.13514,
        "consiglio": "Ideal para una tarde de descanso, cuando la altura se hace sentir."
      },
      {
        "nome": "Mirador Killi Killi",
        "testo": "El mirador más clásico sobre la hoyada, en una colina encima del centro: se ven los barrios que suben hasta El Alto y, en los días despejados, el Illimani.",
        "come": "En taxi desde el centro, pocos minutos; a pie, cuesta arriba, es cansado.",
        "quando": "Atardecer, luego regreso en taxi.",
        "tempo": "30-45 minutos",
        "lat": -16.49514,
        "lng": -68.12753,
        "consiglio": "De noche no subas ni bajes a pie: radiotaxi a la ida y a la vuelta."
      },
      {
        "nome": "Valle de la Luna",
        "testo": "Formaciones de arcilla erosionada a pocos kilómetros del centro, con senderos cortos entre agujas y cañones.",
        "come": "Bus o taxi hacia la zona sur de La Paz.",
        "quando": "Mañana, con mejor luz.",
        "tempo": "1-2 horas",
        "costo": "Unos 15 bolivianos (unos 2 €)",
        "lat": -16.56762,
        "lng": -68.09379,
        "consiglio": "A esta altura hasta un paseo corto cansa: ve despacio."
      },
      {
        "nome": "El Alto y las cholitas luchadoras",
        "testo": "La feria 16 de Julio de El Alto (jueves y domingo) es un enorme mercado popular. En El Alto también se puede ver la lucha libre de las cholitas, las mujeres aymaras con pollera.",
        "come": "En teleférico hasta El Alto.",
        "quando": "La feria los jueves y domingos; las cholitas luchadoras suelen ser el domingo por la tarde en el Multifuncional de El Alto, con horarios que hay que comprobar",
        "tempo": "Medio día",
        "lat": -16.49783,
        "lng": -68.17063,
        "consiglio": "Lleva bolsos y teléfono por delante: el mercado está abarrotado."
      },
      {
        "nome": "Mercado Rodríguez",
        "testo": "El mercado de alimentos más animado de la ciudad, que llena varias calles con puestos de papas, fruta tropical de los Yungas, quesos y carnes. Es el lugar donde se ve cómo comen de verdad los paceños.",
        "come": "A pie desde el centro, en la zona de San Pedro.",
        "quando": "Sábado y domingo por la mañana está en su mejor momento.",
        "tempo": "1 hora",
        "lat": -16.50013,
        "lng": -68.13891,
        "consiglio": "Bolso por delante y teléfono en el bolsillo: entre los puestos se va apretado."
      },
      {
        "nome": "Carretera de la Muerte",
        "testo": "La vieja carretera a Coroico, con unos 3.500 metros de desnivel en bajada, hoy recorrida en bicicleta de montaña. Una experiencia de un día entre niebla, selva y gargantas.",
        "come": "Con un operador, en bicicleta de montaña, saliendo de La Paz temprano y regresando a última hora de la tarde.",
        "quando": "En la temporada seca, y solo después de aclimatarse.",
        "tempo": "Día completo",
        "costo": "Tour con bici y guía a precio variable según el operador; peaje de las comunidades unos 50 bolivianos, a menudo no incluido: pregunta antes",
        "lat": -16.29204,
        "lng": -67.80457,
        "consiglio": "Elige un operador con bicis y frenos en buen estado: aquí importa más que el precio."
      },
      {
        "nome": "Chacaltaya",
        "testo": "Era la estación de esquí más alta del mundo; la cima está a unos 5.400 metros. El glaciar desapareció por completo en 2009; la zona está cerca del Huayna Potosí.",
        "come": "Tour de medio día desde La Paz.",
        "quando": "Temprano por la mañana.",
        "tempo": "Medio día",
        "lat": -16.34953,
        "lng": -68.12701,
        "consiglio": "Sube solo tras al menos dos días en La Paz: la altura es muy elevada."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Plaza Murillo, calle Jaén y MUSEF",
          "Basílica de San Francisco y Mercado de las Brujas",
          "Salteñas a media mañana y almuerzo en el mercado",
          "Teleférico rojo y amarillo al atardecer"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: programa de 1 día, con calma absoluta",
          "Día 2: Valle de la Luna por la mañana, luego teleférico hasta El Alto para la feria (jueves o domingo) y cholitas luchadoras el domingo por la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: Carretera de la Muerte en bici, solo después de aclimatarse, o bien Tiwanaku en el día"
        ]
      }
    ],
    zone: [
      {
        "nome": "Sopocachi",
        "perChi": "Quien busca restaurantes y vida nocturna",
        "testo": "Barrio más cuidado, a menor altura y con bares. A pocos pasos del centro.",
        "fascia": "35-100 €"
      },
      {
        "nome": "San Pedro y centro",
        "perChi": "Quien quiere ahorrar",
        "testo": "Precios bajos y comodidad para las agencias, pero más caótico y ruidoso.",
        "fascia": "15-50 €"
      },
      {
        "nome": "Zona Sur (San Miguel, Calacoto)",
        "perChi": "Quien busca hoteles modernos y menos altura",
        "testo": "Los barrios acomodados al fondo de la hoyada, en torno a los 3.300 metros: se respira mejor y hay hoteles y restaurantes modernos. Para ir al centro hace falta teleférico o taxi.",
        "fascia": "50-150 €"
      }
    ],
    sapori: [
      {
        "nome": "Salteñas",
        "testo": "Empanadas al horno rellenas de carne o pollo con jugo. Se comen a media mañana: no son para el desayuno."
      },
      {
        "nome": "Api con pastel",
        "testo": "Bebida caliente de maíz morado con un pastelito frito de queso, desayuno callejero."
      },
      {
        "nome": "Sopas de los mercados cubiertos",
        "testo": "Contundentes, adecuadas a la altura."
      },
      {
        "nome": "Cocina cuidada de Sopocachi",
        "testo": "El barrio con la oferta más elaborada de la ciudad."
      }
    ],
    attenzioni: [
      "Aterrizar en El Alto, a más de 4.000 metros, y planear algo exigente el mismo día.",
      "Bloqueos de carreteras: pueden aislar la ciudad durante días y cancelar vuelos y traslados.",
      "Taxis no oficiales, sobre todo de noche: usa radiotaxis o apps.",
      "Carteristas en mercados abarrotados: sin objetos de valor a la vista.",
      "Vuelve a comprobar la situación política y social en Viaggiare Sicuri antes de salir."
    ],
    gite: [
      {
        "nome": "Tiwanaku",
        "distanza": "unas 1 h 30 de carretera, 70 km",
        "come": "Tour de un día o minibús desde el cementerio general de La Paz.",
        "testo": "El centro de la cultura que dominó el altiplano antes de los incas, con la Puerta del Sol y la pirámide de Akapana. Entrada única de unos 100 bolivianos con sitios y museos."
      },
      {
        "nome": "Copacabana e Isla del Sol",
        "distanza": "unas 3,5-4 horas de bus",
        "come": "Bus turístico o minibús, con el cruce del estrecho de Tiquina en una barca pequeña, luego barca a la isla.",
        "testo": "El santuario de Copacabana y los senderos incas de la Isla del Sol en el lado boliviano del Titicaca. Mejor con al menos una noche en la isla."
      },
      {
        "nome": "Coroico y los Yungas",
        "distanza": "unas 3 horas de carretera, 95 km",
        "come": "Minibús desde la zona de Villa Fátima, o al final de la bajada por la Carretera de la Muerte.",
        "testo": "Un pueblo a unos 1.700 metros entre colinas de coca, café y cascadas, con un clima cálido que después de La Paz parece otro país. Bueno para una noche de descanso."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en La Paz?",
        "risposta": "Tres o cuatro: uno solo para aclimatarse, uno para el centro y los teleféricos, uno para el Valle de la Luna y El Alto, uno para la Carretera de la Muerte o Tiwanaku."
      },
      {
        "domanda": "¿Cómo se lleva la altitud en La Paz?",
        "risposta": "El primer día se camina poco, se bebe mucho y se evita el alcohol. El dolor de cabeza y la falta de aliento son normales; si los síntomas empeoran, hace falta un médico."
      },
      {
        "domanda": "¿Cuánto cuesta el teleférico de La Paz?",
        "risposta": "3 bolivianos por trayecto, menos de medio euro. En cada cambio de línea se paga un nuevo billete."
      },
      {
        "domanda": "¿La Paz es segura?",
        "risposta": "Con las precauciones normales, sí: radiotaxi o aplicación en lugar de taxis de la calle, nada de objetos de valor a la vista en los mercados, y El Alto de noche no a pie y solo. Antes de salir conviene consultar Viaggiare Sicuri por bloqueos y protestas."
      },
      {
        "domanda": "¿La Carretera de la Muerte es peligrosa?",
        "risposta": "Hoy los coches usan la carretera nueva, pero la bajada en bici sigue siendo exigente. La diferencia la marcan el operador y el estado de las bicis y de los frenos, más que el precio."
      },
      {
        "domanda": "¿Cuándo hay cholitas luchadoras?",
        "risposta": "Normalmente el domingo por la tarde en el Multifuncional de El Alto, con horarios que hay que comprobar. Muchos van con un tour que incluye el transporte."
      }
    ],
    esperienzeSlugs: ['carretera-de-la-muerte'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'El Nevado Illimani nevado que domina la hondonada de La Paz al atardecer, Bolivia',
    immagine: '/images/bolivia/la-paz.jpg',
  },
  {
    slug: 'salar-de-uyuni',
    paeseSlug: 'bolivia',
    ordine: 2,
    nome: 'Salar de Uyuni y Sur Lípez',
    tipologia: ['natura', 'avventura', 'deserto'],
    giorniConsigliati: '3-4 días, el formato del tour clásico en 4x4',
    visitataPersonalmente: true,
    introduzione:
      "La mayor extensión de sal del mundo, más de 10.000 km cuadrados a 3.650 metros de altitud, y su prolongación natural hacia el sur: las lagunas de colores, los géiseres y los desiertos de gran altitud del Sur Lípez, hasta la frontera chilena.",
    percheAndarci:
      "Porque no se parece a nada más, y porque el tour de tres días en 4x4 atraviesa en sucesión salar, lagunas rojas y verdes, géiseres a 5.000 metros y termas al aire libre: es difícil encontrar tantos paisajes distintos en tan poco espacio.",
    cosaVedere: [
      "El salar propiamente dicho, con los polígonos de sal hasta donde alcanza la vista",
      "Isla Incahuasi, la isla de roca cubierta de cactus gigantes en medio de la extensión blanca",
      "El cementerio de trenes, en las afueras de Uyuni",
      "La Laguna Colorada, roja por las algas, con miles de flamencos",
      "Los géiseres Sol de Mañana, a casi 5.000 metros, y las termas de Polques",
      "La Laguna Verde a los pies del volcán Licancabur",
    ],
    cosaFare: [
      "Tour clásico de 3 días y 2 noches en 4x4, con regreso a Uyuni o continuación hacia San Pedro de Atacama en Chile",
      "Las fotos en perspectiva sobre el salar, donde la falta de referencias anula la percepción de la distancia",
      "Noche en un hotel de sal, con paredes y mobiliario hechos con los bloques del salar",
      "Amanecer en el salar, el momento en que la luz marca la verdadera diferencia",
    ],
    doveDormire:
      "Uyuni como base de salida; durante el tour se duerme en alojamientos muy básicos en el Sur Lípez, a menudo sin calefacción a más de 4.000 metros.",
    doveMangiare: "Comidas incluidas en el tour, preparadas por el conductor-cocinero.",
    comeArrivare: "El vuelo de La Paz a Uyuni dura alrededor de una hora y es la opción más cómoda. El bus nocturno desde La Paz suele salir entre las 20 y las 21 y llega al amanecer tras unas 10 horas; los billetes de las compañías turísticas se reservan uno o dos días antes, y de noche hace frío a bordo. Desde Potosí hay unas 4 horas de bus, con varias salidas al día. Muchos llegan desde San Pedro de Atacama, en Chile, haciendo el tour en sentido inverso.",
    comeSpostarsi: "Solo en 4x4 con conductor, en el marco del tour organizado: no es una zona para recorrer por cuenta propia.",
    periodoMigliore:
      "Dos estaciones, dos experiencias distintas. De mayo a octubre el salar está seco y es transitable por completo, con cielos limpios y noches gélidas. De enero a marzo una lámina de agua lo transforma en el espejo gigante de las fotografías más famosas, pero algunas zonas, Isla Incahuasi incluida, pueden volverse inaccesibles.",
    costi: "Tour compartido de 3 días unos 200-350 dólares por persona según la agencia y la categoría, con alojamiento y comidas. Aparte, en efectivo: reserva Eduardo Avaroa unos 150 bolivianos (unos 20 €), Isla Incahuasi unos 30 bolivianos (unos 4 €), termas de Polques pocos bolivianos, baños de pago a lo largo del camino. En Uyuni un día cuesta poco: presupuesto bajo unos 20-30 € (albergue y comidas sencillas), medio 50-80 € (hotel de sal o en el pueblo).",
    erroriDaEvitare: [
      "Elegir el operador solo por el precio: los vehículos y el mantenimiento marcan una diferencia real en pistas aisladas a 4.500 metros, donde una avería es un problema serio",
      "Ir de enero a marzo esperando verlo todo: con el agua el efecto espejo es espectacular pero varias paradas se pierden",
      "Subestimar el frío nocturno: en los alojamientos del Sur Lípez se duerme bajo cero, y el saco de dormir no siempre está incluido",
      "Llegar a Uyuni sin haberse aclimatado: el tour sube hasta casi 5.000 metros el segundo día",
    ],
    miaEsperienza:
      "Es el único sitio donde perdí por completo la noción de la distancia: sin referencias no se entiende si una montaña está a cinco kilómetros o a cincuenta, y por eso funcionan las fotos en perspectiva. Pero lo que me ha quedado es el segundo día, en el Sur Lípez, más que el primero sobre la sal: lagunas rojas llenas de flamencos por encima de los cuatro mil metros, géiseres que resoplan al amanecer con veinte grados bajo cero, alojamientos donde dormimos vestidos porque no había calefacción. Es un tour mucho más duro de lo que las fotografías dejan imaginar, y la única partida en la que no conviene ahorrar es el operador: allí en medio, un 4x4 que se avería es un problema serio.",
    luoghi: [
      {
        "nome": "El salar de Uyuni",
        "testo": "La mayor extensión de sal del mundo, más de 10.000 km² a unos 3.650 metros. Sin referencias no se sabe si una montaña está a cinco o a cincuenta kilómetros, y por eso funcionan las fotos en perspectiva.",
        "come": "Solo en 4x4 con conductor, dentro del tour organizado, con salida desde Uyuni.",
        "quando": "En la temporada seca el salar está seco y se recorre entero. En la temporada de lluvias (más o menos de diciembre a abril) se convierte en un espejo de agua, pero algunas paradas se pierden.",
        "tempo": "Medio día o un día",
        "costo": "El tour se paga a la agencia y el precio varía mucho entre operadores. Aparte, en efectivo: la entrada a la reserva Eduardo Avaroa y a la Isla Incahuasi; pide al operador los importes actualizados",
        "lat": -20.13377,
        "lng": -67.48913,
        "consiglio": "Para las fotos en perspectiva lleva objetos pequeños y aprovecha la luz del amanecer."
      },
      {
        "nome": "Isla Incahuasi",
        "testo": "La isla de roca cubierta de cactus gigantes en medio de la extensión blanca.",
        "come": "Parada del tour en 4x4 desde el salar, con un breve sendero de subida.",
        "quando": "Temporada seca; en la temporada de lluvias puede ser difícil de alcanzar.",
        "tempo": "1-2 horas",
        "costo": "Unos 30 bolivianos (unos 4 €), en efectivo",
        "lat": -20.24278,
        "lng": -67.62528,
        "consiglio": "El sendero da la mejor vista del salar desde un punto elevado."
      },
      {
        "nome": "Colchani",
        "testo": "El pueblo a la entrada del salar donde se extrae y se trabaja la sal: pequeñas cooperativas la secan, la yodan y la envasan a mano. También hay puestos de objetos de sal y lana.",
        "come": "Primera parada del tour en 4x4, a unos 20 km de Uyuni.",
        "quando": "Por la mañana, el primer día del tour.",
        "tempo": "30-45 minutos",
        "lat": -20.30061,
        "lng": -66.93782,
        "consiglio": "Aquí se compran los últimos snacks y agua antes del salar."
      },
      {
        "nome": "Cementerio de trenes",
        "testo": "Locomotoras y vagones abandonados en las afueras de Uyuni, recuerdo de la red ferroviaria minera.",
        "come": "En taxi desde el pueblo o al inicio del tour.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "costo": "Gratis",
        "lat": -20.48079,
        "lng": -66.83688,
        "consiglio": "Cuidado con las partes metálicas oxidadas."
      },
      {
        "nome": "Laguna Hedionda",
        "testo": "Una de las lagunas de altura del Sud Lípez, con el olor a azufre que le da nombre, y flamencos andinos y de James que se alimentan cerca de la orilla.",
        "come": "Parada del segundo día del tour en 4x4.",
        "quando": "Mediodía, durante la parada para almorzar.",
        "tempo": "30-45 minutos",
        "lat": -21.5667,
        "lng": -68.05,
        "consiglio": "Acércate a los flamencos despacio y sin salir del borde: se alejan enseguida."
      },
      {
        "nome": "Árbol de Piedra",
        "testo": "Una roca volcánica modelada por el viento con forma de árbol, en el desierto de Siloli, a unos 4.500 metros, entre otros bloques erosionados en formas extrañas.",
        "come": "Parada del segundo día del tour, antes de la Laguna Colorada.",
        "quando": "Por la tarde, cuando sube el viento.",
        "tempo": "20-30 minutos",
        "lat": -22.05167,
        "lng": -67.88333,
        "consiglio": "No se sube a la roca: está prohibido y es frágil."
      },
      {
        "nome": "Laguna Colorada",
        "testo": "Laguna roja por los sedimentos y las algas, con muchos flamencos, en el Sud Lípez.",
        "come": "Parada del segundo día del tour en 4x4.",
        "quando": "Temprano por la mañana.",
        "tempo": "1-2 horas",
        "costo": "En la reserva Eduardo Avaroa: unos 150 bolivianos en efectivo en la entrada del parque",
        "lat": -22.19861,
        "lng": -67.78111,
        "consiglio": "El segundo día en el Sud Lípez es el que más se le quedó a Rick, más que la sal: lagunas rojas llenas de flamencos por encima de los cuatro mil metros."
      },
      {
        "nome": "Géiseres Sol de Mañana y termas de Polques",
        "testo": "Géiseres a unos 4.900 metros que humean al amanecer y, en el mismo recorrido, las termas al aire libre de Polques, a unos 4.400 metros, con agua a unos 29 °C.",
        "come": "Paradas del tour en 4x4.",
        "quando": "Al amanecer, con temperaturas bajo cero.",
        "tempo": "1-2 horas",
        "costo": "Géiseres en la reserva Eduardo Avaroa; termas de Polques con entrada aparte de pocos bolivianos",
        "lat": -22.42639,
        "lng": -67.75972,
        "consiglio": "Vístete por capas: el amanecer en los géiseres es de las horas más frías del viaje."
      },
      {
        "nome": "Desierto de Dalí",
        "testo": "Un desierto de arena color ocre con rocas dispersas que parecen colocadas al azar, como en los cuadros de Salvador Dalí, en el camino a la Laguna Verde.",
        "come": "Parada del tercer día del tour en la reserva Eduardo Avaroa.",
        "quando": "Muy temprano, el tercer día.",
        "tempo": "15-20 minutos",
        "lat": -22.615,
        "lng": -67.66361,
        "consiglio": "Se mira desde el vehículo o a pocos pasos de la pista: fuera de la pista, las huellas de los 4x4 duran años."
      },
      {
        "nome": "Laguna Verde",
        "testo": "Laguna del extremo suroeste, al pie del volcán Licancabur, cerca de la frontera con Chile.",
        "come": "Última parada del tour en 4x4 antes de San Pedro de Atacama.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "costo": "En la reserva Eduardo Avaroa (unos 150 bolivianos)",
        "lat": -22.795,
        "lng": -67.825,
        "consiglio": "Quien sigue a Chile cruza la frontera desde aquí."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: cementerio de trenes y Colchani",
          "Mediodía: salar e Isla Incahuasi",
          "Atardecer en el salar y regreso a Uyuni"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: cementerio de trenes, Colchani, salar e Isla Incahuasi, noche en un hotel de sal",
          "Día 2: amanecer en el salar y regreso a Uyuni, o bien bus a Potosí"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: cementerio de trenes, Colchani, salar, Isla Incahuasi, noche en un hotel de sal",
          "Día 2: lagunas del Sud Lípez con la Laguna Hedionda, Árbol de Piedra, Laguna Colorada",
          "Día 3: géiseres Sol de Mañana al amanecer, termas de Polques, Desierto de Dalí, Laguna Verde, regreso a Uyuni o continuación a San Pedro de Atacama"
        ]
      }
    ],
    zone: [
      {
        "nome": "Uyuni",
        "perChi": "Quien sale al tour",
        "testo": "Base de partida, pueblo sencillo con agencias.",
        "fascia": "25-80 €"
      },
      {
        "nome": "Alojamientos del Sud Lípez",
        "perChi": "Quien hace el tour de 3 días",
        "testo": "Muy básicos, a menudo sin calefacción a gran altura. Se duerme bajo cero.",
        "fascia": "Incluido en el tour"
      },
      {
        "nome": "Hotel de sal",
        "perChi": "Quien busca una experiencia especial",
        "testo": "Paredes y mobiliario hechos con bloques del salar.",
        "fascia": "60-200 €"
      }
    ],
    sapori: [
      {
        "nome": "Comidas del tour",
        "testo": "Preparadas por el conductor-cocinero: sopas, arroz, carne."
      },
      {
        "nome": "Quinua",
        "testo": "Cultivada en la zona, en sopas y platos locales."
      },
      {
        "nome": "Carne de llama",
        "testo": "A menudo en los platos de los restaurantes de Uyuni."
      }
    ],
    attenzioni: [
      "Elegir al operador solo por el precio: los vehículos y su mantenimiento marcan una diferencia real en pistas de gran altura.",
      "Frío nocturno bajo cero: el saco de dormir no siempre está incluido.",
      "Llegar a Uyuni sin aclimatarse: el segundo día se sube casi a 5.000 metros.",
      "Temporada de lluvias (más o menos de diciembre a abril): efecto espejo, pero varias paradas se pierden."
    ],
    gite: [
      {
        "nome": "San Pedro de Atacama (Chile)",
        "distanza": "final del tour de 3 días, a cerca de 1 hora de la Laguna Verde",
        "come": "Traslado desde la frontera de Hito Cajón, organizado por la agencia del tour.",
        "testo": "El tour puede terminar en Chile en lugar de volver a Uyuni: se sigue hacia el desierto de Atacama sin rehacer el camino. Hay que decírselo a la agencia al reservar."
      },
      {
        "nome": "Potosí",
        "distanza": "unas 4 horas de bus",
        "come": "Bus desde Uyuni, con varias salidas al día.",
        "testo": "La ciudad de la plata del Cerro Rico, a más de 4.000 metros, con la Casa de la Moneda y las minas de las cooperativas. Camino natural hacia Sucre."
      },
      {
        "nome": "Pulacayo",
        "distanza": "unos 30 minutos, 20 km",
        "come": "Taxi o tour desde Uyuni.",
        "testo": "Un pueblo minero casi abandonado con viejas locomotoras y el tren que, según la tradición, fue asaltado por Butch Cassidy. Menos concurrido que el cementerio de trenes."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta para el Salar de Uyuni?",
        "risposta": "El salar se ve en un día, pero el tour de 3 días por el Sud Lípez es el que vale el viaje: lagunas, géiseres y desiertos de altura."
      },
      {
        "domanda": "¿Cuándo se ve el efecto espejo?",
        "risposta": "De enero a marzo, cuando una lámina de agua cubre la sal. En esos meses algunas zonas, Isla Incahuasi incluida, pueden quedar inaccesibles."
      },
      {
        "domanda": "¿Cuánto cuesta el tour de 3 días?",
        "risposta": "Unos 200-350 dólares por persona según la agencia y la categoría. Aparte, en efectivo, la reserva Eduardo Avaroa (unos 150 bolivianos) e Isla Incahuasi (unos 30)."
      },
      {
        "domanda": "¿Cómo se elige la agencia en Uyuni?",
        "risposta": "Primero se mira el estado del 4x4: cinturones, neumáticos y rueda de repuesto. Luego, reseñas recientes, saco de dormir incluido y oxígeno a bordo."
      },
      {
        "domanda": "¿Hace frío durante el tour?",
        "risposta": "Sí, mucho: en los alojamientos del Sud Lípez por la noche se baja de cero y no hay calefacción. Al amanecer, en los géiseres, se llega a veinte grados bajo cero."
      },
      {
        "domanda": "¿Se puede terminar el tour en Chile?",
        "risposta": "Sí, el último día la agencia lleva a la frontera de Hito Cajón y un traslado sigue hasta San Pedro de Atacama. Hay que pedirlo al reservar."
      }
    ],
    esperienzeSlugs: ['tour-uyuni-sud-lipez'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Todoterreno sobre la extensión blanca del Salar de Uyuni bajo un cielo azul, Bolivia',
    immagine: '/images/bolivia/salar-de-uyuni.jpg',
  },
  {
    slug: 'titicaca-boliviano',
    paeseSlug: 'bolivia',
    ordine: 3,
    nome: 'Copacabana e Isla del Sol',
    tipologia: ['natura', 'cultura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "El lado boliviano del Titicaca: Copacabana, pueblo de peregrinación asomado al lago, y la Isla del Sol, donde según la tradición inca nacieron el sol y el primer Inca. Es también la vía natural para entrar en Bolivia desde Perú.",
    percheAndarci:
      "Porque la Isla del Sol es más bonita y está menos construida que las islas peruanas, con senderos panorámicos entre ruinas incas y terrazas de cultivo, y porque el paso de frontera desde Puno es de los más sencillos del continente.",
    cosaVedere: [
      "La Basílica de Copacabana, meta de peregrinación con la Virgen de la Candelaria",
      "El Cerro Calvario, la colina sobre el pueblo, para el atardecer sobre el lago",
      "Las ruinas de Chincana y la Roca Sagrada, en el extremo norte de la Isla del Sol",
      "El sendero que recorre la dorsal de la isla de norte a sur",
      "Las ruinas de Tiwanaku, en el camino hacia La Paz, capital de una civilización anterior a los incas",
    ],
    cosaFare: [
      "Dormir una noche en la Isla del Sol, en lugar de visitarla en el día: al atardecer y al amanecer queda casi desierta",
      "Caminar por la dorsal de la isla, entre terrazas de cultivo y ruinas",
      "Cruzar la frontera desde Puno por Kasani/Yunguyo, con los sellos de salida y entrada que hay que hacer a pie",
    ],
    doveDormire: "Copacabana por la comodidad de las conexiones; la Isla del Sol para la noche más sugerente, en alojamientos sencillos y sin calefacción.",
    doveMangiare: "Trucha (trucha del lago) casi en todas partes, en el paseo del lago de Copacabana.",
    comeArrivare:
      "Autobús desde Puno (Perú) con paso por la frontera de Kasani, unas 3-4 horas en total; desde La Paz unas 4 horas, con la travesía del estrecho de Tiquina en balsa.",
    comeSpostarsi: "Barcas colectivas desde Copacabana a la Isla del Sol; en la isla no hay vehículos: se camina, siempre cuesta arriba.",
    periodoMigliore: "mayo-octubre por el sol; a 3.800 metros las noches son frías todo el año",
    costi: "muy económico: barca a la isla pocos dólares, más pequeñas tasas de entrada que cobran las comunidades locales",
    erroriDaEvitare: [
      "Programar la Isla del Sol en el día desde Copacabana: los horarios de las barcas dejan pocas horas útiles y se pierde la mejor parte",
      "Dar por hecho el acceso a toda la isla: las tensiones entre comunidades han limitado a ratos el paso hacia la parte norte, así que conviene preguntar en el lugar",
      "Subestimar la altitud: se camina cuesta arriba a casi 4.000 metros",
    ],
    miaEsperienza:
      "El lado boliviano del lago es bastante más bonito que el peruano. Copacabana es un pueblo de peregrinación algo desvencijado pero con alma, y la Isla del Sol para mí supera a las islas de Puno: terrazas de cultivo, senderos de piedra, ningún coche y ninguna organización turística pesada. Dormir allí una noche lo cambia todo, porque las barcas del día llegan y se van todas juntas, y en cuanto se marchan la isla vuelve a quedar en silencio. Solo hay que tener en cuenta que se camina siempre cuesta arriba a casi cuatro mil metros, con la mochila, y cuesta.",
    luoghi: [
      {
        "nome": "Basílica de Copacabana",
        "testo": "Destino de peregrinación dedicado a la Virgen de Copacabana, en un pueblo algo destartalado pero con alma.",
        "come": "A pie desde el malecón.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "consiglio": "Copacabana es la entrada natural desde Perú."
      },
      {
        "nome": "Cerro Calvario",
        "testo": "La colina sobre el pueblo, para el atardecer sobre el lago.",
        "come": "A pie desde el centro, con una subida corta pero empinada.",
        "quando": "Atardecer.",
        "tempo": "1-2 horas",
        "consiglio": "A unos 3.800 metros la subida cansa: ve despacio."
      },
      {
        "nome": "Isla del Sol: Chincana y Roca Sagrada",
        "testo": "Las ruinas de Chincana y la Roca Sagrada, en el extremo norte de la isla donde según la tradición nacieron el sol y el primer Inca.",
        "come": "Lancha colectiva desde Copacabana. En la isla no hay vehículos a motor ni carreteras asfaltadas.",
        "quando": "Mañana y atardecer.",
        "tempo": "Medio día",
        "costo": "Lancha y pequeñas tasas de entrada cobradas por las comunidades: lleva efectivo",
        "consiglio": "Pregunta en el lugar si el paso hacia la parte norte está abierto: tensiones entre comunidades lo han limitado a ratos."
      },
      {
        "nome": "El sendero del lomo de la Isla del Sol",
        "testo": "El sendero que recorre el lomo de la isla de norte a sur entre terrazas y ruinas.",
        "come": "A pie, siempre cuesta arriba y a gran altura.",
        "quando": "Mañana y atardecer.",
        "tempo": "3-4 horas",
        "consiglio": "Dormir una noche en la isla lo cambia todo: las barcas del día llegan y se van todas juntas, y luego la isla vuelve al silencio."
      },
      {
        "nome": "Tiwanaku",
        "testo": "Las ruinas de una civilización anterior a los Incas, en el camino a La Paz.",
        "come": "Con tour o taxi desde el camino a La Paz.",
        "quando": "Mañana.",
        "tempo": "2-3 horas",
        "consiglio": "Se combina con el regreso a La Paz."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Copacabana, Cerro Calvario al atardecer",
          "Día 2: barca a la Isla del Sol, sendero del lomo"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Copacabana",
          "Día 2: Isla del Sol, noche en la isla",
          "Día 3: amanecer en la isla y regreso a Copacabana, luego La Paz"
        ]
      }
    ],
    zone: [
      {
        "nome": "Copacabana",
        "perChi": "Quien busca conexiones y comodidad",
        "testo": "Más cómoda para el transporte. Noches frías en la altura."
      },
      {
        "nome": "Isla del Sol",
        "perChi": "Quien busca la noche más sugerente",
        "testo": "Alojamientos sencillos y sin calefacción. Todo cuesta arriba."
      }
    ],
    sapori: [
      {
        "nome": "Trucha del lago",
        "testo": "Trucha casi en todas partes, en el malecón de Copacabana."
      },
      {
        "nome": "Pejerrey",
        "testo": "Pescado del lago, frito."
      },
      {
        "nome": "Quinua y chuño",
        "testo": "Cocina andina sencilla en pequeños locales."
      }
    ],
    attenzioni: [
      "Planear la Isla del Sol en el día: se pierde la mejor parte.",
      "El acceso a toda la isla no está garantizado: pregunta en el lugar.",
      "Subestimar la altura: se camina cuesta arriba a gran altura.",
      "Frontera de Kasani/Yunguyo: horarios y trámites cambian, vuelve a comprobarlos antes de salir."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Terrazas de cultivo y senderos de la Isla del Sol con ovejas pastando junto al lago Titicaca, Bolivia',
    immagine: '/images/bolivia/titicaca-boliviano.jpg',
  },
  {
    slug: 'sucre-potosi',
    paeseSlug: 'bolivia',
    ordine: 4,
    nome: 'Sucre y Potosí',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '3-4 días para ambas',
    visitataPersonalmente: true,
    introduzione:
      "Sucre es la capital constitucional, ciudad colonial blanca Patrimonio de la UNESCO a 2.800 metros, la altitud más amable de Bolivia. Potosí, a 4.000 metros, es la ciudad que con la plata de su Cerro Rico financió durante siglos el imperio español, al precio de un número enorme de vidas.",
    percheAndarci:
      "Por el contraste: Sucre es la Bolivia más dulce, con el mejor clima y las mejores escuelas de español del país; Potosí es su historia más dura, todavía visible cada día en las galerías en activo.",
    cosaVedere: [
      "El centro colonial de Sucre, con la Casa de la Libertad donde se firmó la independencia",
      "El Parque Cretácico de Sucre, una pared vertical con miles de huellas de dinosaurio",
      "La Casa Nacional de la Moneda en Potosí, la antigua ceca colonial",
      "El Cerro Rico, la montaña de plata que domina Potosí",
      "Las lagunas y los pueblos textiles de los alrededores de Sucre, como Tarabuco con su mercado dominical",
    ],
    cosaFare: [
      "Curso de español en Sucre, entre los más económicos y apreciados de Sudamérica",
      "Visita a las minas cooperativas del Cerro Rico, una experiencia fuerte y discutida (véase la ficha de experiencia dedicada)",
      "Mercado de Tarabuco el domingo, por los tejidos yampara",
    ],
    doveDormire: "Centro histórico de Sucre, la ciudad más agradable de toda Bolivia para quedarse unos días.",
    doveMangiare:
      "Sucre tiene la mejor calidad de vida del país y en los mercados cubiertos se come bien gastando poquísimo, donde el puesto de zumos de fruta es una institución. En Potosí la oferta es más básica: sopas contundentes, adecuadas para los cuatro mil metros.",
    comeArrivare: "El vuelo La Paz-Sucre dura alrededor de una hora; el aeropuerto Alcantarí está a unos 30 km del centro, 40 minutos en taxi o lanzadera. El bus nocturno desde La Paz tarda unas 12-14 horas. Entre Potosí y Sucre hay unas 3 horas de carretera en bus o en taxi compartido desde el terminal; Uyuni-Potosí unas 4 horas de bus. A Potosí se llega a más de 4.000 metros: a quien viene de Sucre le conviene pasar allí al menos una noche sin esfuerzos.",
    comeSpostarsi: "Ambas ciudades se recorren a pie; autobuses frecuentes entre las dos.",
    periodoMigliore: "mayo-octubre; Sucre tiene el clima más suave del país gracias a su menor altitud",
    costi: "Entre las zonas más económicas del continente: presupuesto bajo unos 20-30 € al día (albergue, almuerzo en el Mercado Central por pocos bolivianos); medio 45-80 € (hotel en el centro colonial, restaurantes, visitas guiadas); alto desde 120 € (hotel en casona histórica, guías privados). Parque Cretácico unos 30 bolivianos con guía; Casa de la Moneda unos 40 bolivianos, solo con guía; visita a las minas unos 100-150 bolivianos con guía en español, 150-250 con guía en inglés.",
    erroriDaEvitare: [
      "Pasar por Potosí sin tener en cuenta la altitud: a 4.000 metros incluso caminar por el centro cansa",
      "Tratar la visita a las minas como una atracción turística cualquiera: es un lugar de trabajo real, con condiciones durísimas",
    ],
    miaEsperienza:
      "Sucre es el sitio donde me entraron ganas de quedarme más tiempo: dos mil ochocientos metros en lugar de cuatro mil, clima suave, una ciudad blanca y ordenada donde por fin se respira y se duerme. Potosí es lo contrario, y no solo por la altitud. Entrar en las galerías del Cerro Rico fue la experiencia más pesada de todo el viaje, peligrosa en sí no, pero difícil de digerir: caminamos agachados por túneles calurosos y polvorientos junto a hombres que pasan allí diez horas al día con herramientas de otro siglo. Hay que tratarla con el respeto que se debe a un lugar de trabajo. Salimos callados, y quizá sea lo justo.",
    luoghi: [
      {
        "nome": "Centro colonial de Sucre y Casa de la Libertad",
        "testo": "La capital constitucional, ciudad colonial blanca patrimonio de la UNESCO, a unos 2.800 metros, más baja que La Paz. En la Casa de la Libertad se fundó la república.",
        "come": "A pie desde el centro.",
        "quando": "De día.",
        "tempo": "Medio día",
        "orari": "Visita guiada por turnos: horarios que hay que comprobar en el lugar",
        "lat": -19.04745,
        "lng": -65.26019,
        "consiglio": "Sucre es el lugar donde a Rick le dieron ganas de quedarse más: altura más suave, clima amable."
      },
      {
        "nome": "Plaza 25 de Mayo y catedral de Sucre",
        "testo": "La plaza principal, con palmeras, bancos y los edificios blancos del gobierno regional alrededor. La catedral metropolitana guarda la Virgen de Guadalupe, patrona de la ciudad, cubierta de joyas.",
        "come": "A pie desde el centro histórico.",
        "quando": "Por la noche, cuando la plaza se llena de familias.",
        "tempo": "1 hora",
        "lat": -19.04788,
        "lng": -65.25951,
        "consiglio": "La Casa de la Libertad está en la misma plaza: se visitan juntas."
      },
      {
        "nome": "Mirador de la Recoleta",
        "testo": "Una plaza porticada en lo alto de una colina sobre el centro, frente al convento franciscano de la Recoleta, con toda la ciudad blanca a los pies.",
        "come": "Unos 20 minutos a pie cuesta arriba desde la plaza principal.",
        "quando": "Atardecer.",
        "tempo": "1 hora",
        "lat": -19.05528,
        "lng": -65.25363,
        "consiglio": "El café bajo los soportales es el lugar ideal para esperar la luz del atardecer."
      },
      {
        "nome": "Parque Cretácico",
        "testo": "Una pared casi vertical con miles de huellas de dinosaurio (más de 12.000 registradas), en una cantera a las afueras de Sucre.",
        "come": "Unos 25 minutos desde el centro en bus turístico o taxi.",
        "quando": "Mañana.",
        "tempo": "2 horas",
        "costo": "Unos 30 bolivianos (unos 4 €) con el guía",
        "lat": -19.00046,
        "lng": -65.23743,
        "consiglio": "Lleva calzado cómodo y un sombrero: la visita es al aire libre."
      },
      {
        "nome": "Mercado Central de Sucre",
        "testo": "El mercado cubierto a dos cuadras de la plaza: puestos de fruta, jugos licuados al momento y, en el piso de arriba, cocinas donde se almuerza como los sucrenses.",
        "come": "A pie desde el centro.",
        "quando": "Por la mañana para los jugos, a mediodía para el almuerzo.",
        "tempo": "1 hora",
        "costo": "Almuerzo completo por pocos bolivianos",
        "lat": -19.04508,
        "lng": -65.25913,
        "consiglio": "Prueba el jugo mixto en los puestos de la planta baja: te lo rellenan dos veces."
      },
      {
        "nome": "Museo de Arte Indígena ASUR",
        "testo": "El museo de los tejidos jalq'a y tarabuco, con una sección donde las tejedoras trabajan delante de los visitantes. Explica los símbolos que luego se encuentran en el mercado de Tarabuco.",
        "come": "A pie desde el centro, cerca de la Recoleta.",
        "quando": "Antes de ir a Tarabuco.",
        "tempo": "1 hora",
        "lat": -19.05385,
        "lng": -65.25379,
        "consiglio": "La tienda del museo vende tejidos de las comunidades a precios justos, con una parte para las tejedoras."
      },
      {
        "nome": "Mercado de Tarabuco",
        "testo": "Pueblo textil cerca de Sucre, con el mercado dominical y los tejidos yampara.",
        "come": "En colectivo o tour desde Sucre.",
        "quando": "Solo el domingo por la mañana",
        "tempo": "Medio día",
        "lat": -19.1824,
        "lng": -64.91499,
        "consiglio": "Regatea los precios."
      },
      {
        "nome": "Convento de San Felipe Neri",
        "testo": "Un convento del siglo XVIII con un claustro blanco y tejados de tejas transitables, desde los que se ven el centro y la Recoleta.",
        "come": "A pie desde el centro; la entrada es por el colegio que ocupa el edificio.",
        "quando": "Por la tarde.",
        "tempo": "45 minutos",
        "lat": -19.05005,
        "lng": -65.26132,
        "consiglio": "Los horarios siguen los del colegio: mejor preguntar en el lugar."
      },
      {
        "nome": "Castillo de la Glorieta",
        "testo": "Un palacio ecléctico de finales del siglo XIX, con torres y estilos mezclados, construido para una pareja de aristócratas sucrenses en la periferia sur de la ciudad.",
        "come": "Unos 15-20 minutos en taxi o micro desde el centro.",
        "quando": "Por la mañana.",
        "tempo": "1-1,5 horas",
        "lat": -19.08603,
        "lng": -65.26781,
        "consiglio": "Se combina con el Parque Cretácico en la misma mañana, en taxi."
      },
      {
        "nome": "Curso de español en Sucre",
        "testo": "En el centro de Sucre hay varias escuelas de español, cómodas para quien se queda unas semanas.",
        "come": "Escuelas en el centro de Sucre; reserva antes.",
        "quando": "Todo el año.",
        "tempo": "De pocos días a semanas",
        "consiglio": "Precios y modalidades cambian de una escuela a otra: compara antes de reservar."
      },
      {
        "nome": "Minas del Cerro Rico",
        "testo": "La montaña de plata que domina Potosí: entre los siglos XVI y XVIII salió de ella gran parte de la plata del mundo, y Potosí se convirtió en una de las ciudades más grandes del Nuevo Mundo. Se entra en las galerías de las cooperativas mineras aún activas con casco y lámpara.",
        "come": "Con una agencia de Potosí, mejor si la gestionan exmineros.",
        "quando": "En días laborables, cuando las cooperativas están en actividad.",
        "tempo": "Medio día",
        "costo": "Unos 100-150 bolivianos con guía en español, 150-250 con guía en inglés, con equipo y transporte",
        "lat": -19.61944,
        "lng": -65.74978,
        "consiglio": "Para Rick fue la experiencia más pesada del viaje: túneles calurosos y polvorientos junto a hombres que pasan allí diez horas al día. No recomendada a quien sufre claustrofobia."
      },
      {
        "nome": "Casa Nacional de la Moneda (Potosí)",
        "testo": "La antigua ceca colonial, donde se acuñaba la plata del Cerro Rico.",
        "come": "A pie desde el centro de Potosí.",
        "quando": "Mañana.",
        "tempo": "1-2 horas",
        "costo": "Unos 40 bolivianos (unos 5 €), solo con guía",
        "orari": "Visitas por turnos guiados; desde 2026 el edificio está en obras de restauración: comprueba los turnos antes",
        "lat": -19.58824,
        "lng": -65.75415,
        "consiglio": "A más de 4.000 metros hasta caminar por el centro cansa."
      },
      {
        "nome": "Convento de Santa Teresa (Potosí)",
        "testo": "Un convento de carmelitas del siglo XVII, hoy museo, con pinturas coloniales, objetos de la vida de clausura y la historia de las muchachas ricas que entraban aquí a los quince años.",
        "come": "A pie desde el centro de Potosí.",
        "quando": "Por la tarde, después de la mina.",
        "tempo": "1-1,5 horas, visita guiada",
        "lat": -19.58891,
        "lng": -65.75716,
        "consiglio": "La visita es guiada por turnos: pregunta el horario por la mañana."
      },
      {
        "nome": "Torre de la Compañía de Jesús (Potosí)",
        "testo": "El campanario barroco de la antigua iglesia de los jesuitas, tallado en piedra con figuras andinas, hoy sede de la oficina de turismo. Desde arriba se ven los tejados de Potosí y el Cerro Rico.",
        "come": "En el centro, a pocos pasos de la plaza.",
        "quando": "Mañana despejada.",
        "tempo": "30 minutos",
        "lat": -19.58891,
        "lng": -65.7548,
        "consiglio": "Escaleras estrechas y altura por encima de los 4.000 metros: sube despacio."
      }
    ],
    programmi: [
      {
        "titolo": "1 día en Sucre",
        "tappe": [
          "Mañana: Plaza 25 de Mayo, catedral y Casa de la Libertad",
          "Almuerzo en el Mercado Central",
          "Tarde: Parque Cretácico",
          "Atardecer en el Mirador de la Recoleta"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Sucre como en el programa de 1 día",
          "Día 2: Potosí, Casa de la Moneda y Torre de la Compañía, noche en la ciudad"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Sucre, centro y Recoleta",
          "Día 2: Tarabuco si es domingo, o bien Museo ASUR, San Felipe Neri y Castillo de la Glorieta",
          "Día 3: bus a Potosí, Casa de la Moneda y Santa Teresa; al día siguiente, las minas del Cerro Rico"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro histórico de Sucre",
        "perChi": "Quien se queda unos días",
        "testo": "Una ciudad agradable donde quedarse unos días.",
        "fascia": "25-90 €"
      },
      {
        "nome": "Centro de Potosí",
        "perChi": "Quien visita las minas",
        "testo": "Alojamientos básicos a gran altura. Noches frías.",
        "fascia": "20-60 €"
      },
      {
        "nome": "Recoleta y alrededores (Sucre)",
        "perChi": "Quien busca calma y vistas",
        "testo": "Calles en cuesta sobre el centro, más silenciosas, con algún albergue y hostal con terraza. Se baja a la plaza en 15-20 minutos.",
        "fascia": "20-60 €"
      }
    ],
    sapori: [
      {
        "nome": "Mercados cubiertos de Sucre",
        "testo": "Se come bien gastando muy poco; el puesto de jugos es una institución."
      },
      {
        "nome": "Chorizos chuquisaqueños",
        "testo": "Embutidos especiados típicos de Sucre."
      },
      {
        "nome": "Sopas de Potosí",
        "testo": "Contundentes, adecuadas a la altura."
      }
    ],
    attenzioni: [
      "En Potosí la altura (más de 4.000 metros) pesa: hasta caminar por el centro cansa.",
      "Las minas son un lugar de trabajo, no una atracción cualquiera: condiciones durísimas.",
      "Lleva un pequeño regalo para los mineros (hojas de coca, bebidas) comprado en el mercado de los mineros.",
      "Bloqueos de carreteras: pueden cortar las conexiones durante días."
    ],
    gite: [
      {
        "nome": "Tarabuco",
        "distanza": "unas 1 h 30, 65 km desde Sucre",
        "come": "Colectivo o tour desde el centro de Sucre, el domingo por la mañana.",
        "testo": "El mercado dominical de los tejidos yampara, con las comunidades que bajan al pueblo con sus trajes tradicionales."
      },
      {
        "nome": "Cráter de Maragua",
        "distanza": "unas 2-3 horas de carretera desde Sucre",
        "come": "Trek de 2-3 días con guía o tour en el día.",
        "testo": "Una hondonada de rocas rojas y moradas plegadas en ondas, con pueblos jalq'a, huellas de dinosaurio y senderos lejos de todo."
      },
      {
        "nome": "Ojo del Inca (Potosí)",
        "distanza": "unos 30 minutos desde Potosí",
        "come": "Taxi o micro desde Potosí hacia Tarapaya.",
        "testo": "Una piscina termal natural y circular en un cráter, con el agua en torno a los 30 °C. Un baño caliente después de las minas."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta entre Sucre y Potosí?",
        "risposta": "Al menos tres: dos en Sucre y uno en Potosí con las minas. Quien quiere descansar de la altura se queda en Sucre incluso una semana."
      },
      {
        "domanda": "¿Mejor dormir en Sucre o en Potosí?",
        "risposta": "Sucre, a unos 2.800 metros, es más cómoda y agradable; Potosí, a más de 4.000, merece una noche para la Casa de la Moneda y las minas sin correr."
      },
      {
        "domanda": "¿La visita a las minas del Cerro Rico es ética?",
        "risposta": "Depende de la agencia: mejor las gestionadas por exmineros, que respetan el trabajo en las galerías. Las demostraciones con dinamita son ilegales y peligrosas, y hay que rechazarlas."
      },
      {
        "domanda": "¿Cuánto cuesta entrar en las minas?",
        "risposta": "Unos 100-150 bolivianos con guía en español y 150-250 con guía en inglés, con equipo y transporte. Se recomienda una mascarilla para el polvo."
      },
      {
        "domanda": "¿Cuándo hay mercado en Tarabuco?",
        "risposta": "Solo el domingo por la mañana. Los colectivos y los tours salen temprano del centro de Sucre."
      },
      {
        "domanda": "¿Sucre es adecuada para un curso de español?",
        "risposta": "Sí, es una de las ciudades más elegidas del continente: escuelas en el centro, costes bajos y clima templado. Precios y fórmulas cambian de una escuela a otra."
      }
    ],
    esperienzeSlugs: ['miniere-cerro-rico'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'El Cerro Rico dominando los tejados de tejas rojas de Potosí, Bolivia',
    immagine: '/images/bolivia/sucre-potosi.jpg',
  },
  {
    slug: 'rurrenabaque-madidi',
    paeseSlug: 'bolivia',
    ordine: 5,
    nome: 'Rurrenabaque y el Madidi',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '4-5 días, para hacer tanto pampas como selva',
    visitataPersonalmente: true,
    introduzione:
      "La Amazonia boliviana, mucho menos transitada y bastante más barata que la peruana o la brasileña. Desde Rurrenabaque se sale en dos direcciones opuestas: las pampas del Yacuma, praderas inundadas donde la fauna se ve con facilidad, o la selva primaria del Parque Nacional Madidi.",
    percheAndarci:
      "Porque es quizá la forma más económica del mundo de entrar en la Amazonia, y porque el Madidi es una de las áreas protegidas con mayor biodiversidad del planeta.",
    cosaVedere: [
      "Los caimanes, los capibaras y los monos a lo largo del Río Yacuma, en las pampas",
      "Los delfines rosados de río, que en las pampas se acercan a las barcas",
      "La selva primaria del Madidi, con árboles enormes y fauna más difícil de avistar pero más auténtica",
      "Los atardeceres sobre las praderas inundadas, el mejor momento del día",
    ],
    cosaFare: [
      "Tour de 3 días por las pampas: navegación, avistamiento de fauna, pesca de pirañas y búsqueda nocturna de caimanes",
      "Tour por la selva del Madidi, con caminatas guiadas y noches en lodge en la selva",
      "Nadar con los delfines rosados donde los guías lo permiten",
    ],
    confronti: [
      {
        titolo: '¿Pampas o selva? Las dos Amazonias de Rurrenabaque',
        introduzione:
          "Desde Rurrenabaque se elige entre dos entornos del todo distintos, y quien tiene tiempo solo para uno suele equivocarse. La calidad tiene poco que ver: cuenta lo que uno quiere ver.",
        opzioni: [
          {
            nome: 'Pampas del Yacuma',
            sintesi: 'Praderas inundadas recorridas en barca por el río, con la fauna concentrada en las orillas y bien visible.',
            costo: 'unos 100-200 $ por 3 días, todo incluido',
            durata: '3 días, 2 noches',
            pro: [
              'Avistamientos garantizados y de cerca: caimanes, capibaras, monos, delfines rosados, cientos de aves',
              'Menos cansado: se está casi siempre en barca',
              'El más económico de los dos',
            ],
            contro: [
              'No es la selva amazónica «del imaginario»: es sabana inundada',
              'Mosquitos en cantidad notable',
              'Algunas prácticas de los operadores más baratos con caimanes y anacondas son discutibles en el plano ético',
            ],
            perChi: 'Quien quiere ver animales, y verlos con seguridad.',
          },
          {
            nome: 'Selva del Madidi',
            sintesi: 'Selva primaria dentro del parque nacional, con caminatas guiadas y noches en lodge o en campamento de tiendas.',
            costo: 'unos 150-300 $ por 3-4 días',
            durata: '3-4 días',
            pro: [
              'Es la Amazonia de verdad, con árboles enormes y una biodiversidad altísima',
              'Fuerte componente cultural si se elige un lodge gestionado por las comunidades indígenas, como Chalalán o San Miguel del Bala',
              'Mucho menos transitada que las pampas',
            ],
            contro: [
              'La fauna es mucho más difícil de avistar: en la selva densa se oye más de lo que se ve',
              'Más cansado, con caminatas bajo el calor húmedo',
              'Cuesta más',
            ],
            perChi: 'Quien quiere entender cómo es de verdad la selva, aceptando ver menos animales.',
          },
        ],
        raccomandazione:
          "Con cuatro o cinco días se hacen ambas, y es la mejor solución: pampas para la fauna, Madidi para la selva. Si hay que elegir, quien viene a la Amazonia por los animales que tome las pampas, quien viene por el entorno que elija el Madidi. En ambos casos conviene comprobar que el operador no manipule la fauna para entretener a los clientes.",
      },
    ],
    doveDormire: 'Rurrenabaque como base; durante los tours se duerme en lodges junto al río, básicos pero con mosquiteras.',
    doveMangiare: 'Comidas incluidas en los tours.',
    comeArrivare:
      "Vuelo de La Paz a Rurrenabaque (unos 45 minutos, en avionetas, a menudo canceladas por el tiempo) o autobús de 18-20 horas por una carretera de montaña exigente.",
    comeSpostarsi: 'Solo en barca y a pie, en el marco de los tours organizados.',
    periodoMigliore: "mayo-octubre, estación seca: menos mosquitos, carreteras y pistas transitables y fauna concentrada junto a los ríos",
    costi: 'entre las experiencias amazónicas más económicas del mundo',
    erroriDaEvitare: [
      "Contar con el vuelo de regreso sin margen: los vuelos a Rurrenabaque se cancelan a menudo por el tiempo, y la alternativa es un autobús de casi veinte horas",
      "Elegir el operador más barato sin informarse: en las pampas algunas prácticas con caimanes y anacondas son dañinas para los animales",
      "Ir sin un repelente serio y sin vacuna contra la fiebre amarilla",
    ],
    miaEsperienza:
      "En las pampas vi más animales con menos esfuerzo que en cualquier otro sitio: se está en la barca y desfilan caimanes, capibaras, monos y cientos de aves, con los delfines rosados que de vez en cuando emergen junto al casco. Allí se ven también las prácticas más discutibles: algunos guías sacan a los caimanes del agua o van a buscar anacondas para que los clientes las toquen. No hay que seguirles la corriente: basta con decir que no y pedir quedarse mirando. Y los mosquitos son de otro nivel, más que un repelente haría falta una coraza.",
    luoghi: [
      {
        "nome": "Pampas del Yacuma",
        "testo": "Praderas inundadas recorridas en barca por el río Yacuma: caimanes, capibaras, monos, delfines rosados y muchísimas aves, con avistamientos de cerca.",
        "come": "Tour organizado de 3 días desde Rurrenabaque, con navegación y noches en lodge.",
        "quando": "En la temporada seca.",
        "tempo": "3 días, 2 noches",
        "costo": "Tour todo incluido: el precio cambia entre agencias, compara varias en Rurrenabaque",
        "consiglio": "Rick vio más animales con menos esfuerzo que en cualquier otro sitio. Si el guía saca caimanes del agua o busca anacondas para que las toquen, di que no."
      },
      {
        "nome": "Selva del Madidi",
        "testo": "Bosque primario dentro del parque nacional, con árboles enormes y biodiversidad altísima. La fauna es más difícil de ver.",
        "come": "Tour de 3-4 días con caminatas guiadas y noches en lodge o campamento.",
        "quando": "En la temporada seca.",
        "tempo": "3-4 días",
        "costo": "Depende del lodge y de la duración: pregunta el precio directamente al lodge o a la agencia",
        "consiglio": "Elige un lodge gestionado por comunidades indígenas."
      },
      {
        "nome": "Delfines rosados y atardeceres en las pampas",
        "testo": "Los delfines rosados se acercan a las barcas, y el atardecer sobre las praderas inundadas es el mejor momento del día.",
        "come": "Parte del tour de las pampas.",
        "quando": "Atardecer.",
        "tempo": "1-2 horas",
        "consiglio": "Nadar con delfines solo se permite donde los guías lo autorizan."
      },
      {
        "nome": "Vuelo La Paz-Rurrenabaque",
        "testo": "Un vuelo de unos 45 minutos a una hora en aviones pequeños, que puede cancelarse por el clima y lleva del altiplano al nivel de la selva.",
        "come": "Reserva con margen; la alternativa es un bus de unas 18 horas.",
        "quando": "Todo el año.",
        "tempo": "45 minutos a 1 hora",
        "consiglio": "No cuentes con el vuelo de regreso sin margen."
      }
    ],
    programmi: [
      {
        "titolo": "3 días (pampas)",
        "tappe": [
          "Día 1: barca y avistamientos por el río Yacuma",
          "Día 2: pesca de pirañas, delfines rosados, búsqueda nocturna de caimanes",
          "Día 3: amanecer en las pampas y regreso"
        ]
      },
      {
        "titolo": "4-5 días (pampas y selva)",
        "tappe": [
          "Días 1-3: pampas",
          "Días 4-5: Madidi con lodge en el bosque"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rurrenabaque",
        "perChi": "Quien sale a los tours",
        "testo": "Pueblo base con agencias. Calor húmedo."
      },
      {
        "nome": "Lodges junto al río",
        "perChi": "Quien hace los tours",
        "testo": "Básicos pero con mosquiteros."
      }
    ],
    sapori: [
      {
        "nome": "Pescado de río",
        "testo": "Surubí y pacú, a la parrilla."
      },
      {
        "nome": "Comidas de los tours",
        "testo": "Incluidas en los tours."
      }
    ],
    attenzioni: [
      "Los vuelos a Rurrenabaque pueden cancelarse por el clima: la alternativa es un bus de unas 18 horas.",
      "Algunas prácticas con caimanes y anacondas dañan a los animales: infórmate sobre el operador.",
      "Repelente serio. Para la zona de Rurrenabaque se recomienda la vacuna contra la fiebre amarilla: consulta a tu médico antes de salir.",
      "Mosquitos en cantidad notable."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Barcas amarradas en el río Beni en Rurrenabaque, a los pies de colinas cubiertas de selva, Bolivia',
    immagine: '/images/bolivia/rurrenabaque-madidi.jpg',
  },
]
