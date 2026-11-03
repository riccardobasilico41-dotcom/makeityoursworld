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
    comeArrivare:
      "Vuelo internacional a El Alto (LPB), uno de los aeropuertos más altos del mundo, a más de 4.000 metros: se pasa del nivel del mar a la altitud máxima en pocas horas, con efectos que se notan enseguida. Por tierra, autobús desde Copacabana (unas 4 horas) o desde Cusco pasando por el Titicaca.",
    comeSpostarsi: "Mi Teleférico para los desplazamientos largos, radiotaxi para el resto. Evitar los taxis no oficiales, sobre todo de noche.",
    periodoMigliore: "mayo-octubre, estación seca; las noches son frías todo el año",
    costi: "viaje en teleférico unos pocos céntimos de euro; la ciudad es una de las capitales más baratas del mundo",
    erroriDaEvitare: [
      "Aterrizar en El Alto y programar algo exigente el mismo día: del nivel del mar a 4.000 metros el cuerpo no se adapta en pocas horas",
      "Subestimar los bloqueos de carreteras: cuando los hay, pueden aislar la ciudad durante días y hacer saltar vuelos y traslados",
      "Andar con objetos de valor a la vista en los mercados concurridos",
    ],
    miaEsperienza:
      "Aterrizar en El Alto es un shock físico que casi nadie tiene en cuenta: bajamos del avión a más de cuatro mil metros y el cuerpo se dio cuenta antes incluso de salir de la terminal. La Paz es la ciudad más extraña del continente, construida dentro de una hondonada con los barrios pobres arriba y los ricos abajo. Es lo contrario de cualquier otra ciudad del mundo, y por una razón precisa: cuanto más se baja, más se respira. Los teleféricos urbanos se los recomiendo a cualquiera: cuestan unos pocos céntimos y dan la mejor vista de la hondonada. El problema de verdad de Bolivia son los bloqueos de carreteras, que hay que tener en cuenta en el itinerario como un riesgo concreto.",
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
    comeArrivare:
      "Vuelo de La Paz a Uyuni (alrededor de una hora, la solución más cómoda) o autobús nocturno desde La Paz, Sucre o Potosí. Muchos llegan también desde San Pedro de Atacama, en Chile, haciendo el tour en sentido inverso.",
    comeSpostarsi: "Solo en 4x4 con conductor, en el marco del tour organizado: no es una zona para recorrer por cuenta propia.",
    periodoMigliore:
      "Dos estaciones, dos experiencias distintas. De mayo a octubre el salar está seco y es transitable por completo, con cielos limpios y noches gélidas. De enero a marzo una lámina de agua lo transforma en el espejo gigante de las fotografías más famosas, pero algunas zonas, Isla Incahuasi incluida, pueden volverse inaccesibles.",
    costi: "tour de 3 días, más o menos 150-250 $ por persona según el operador, con la entrada al parque Eduardo Avaroa aparte",
    erroriDaEvitare: [
      "Elegir el operador solo por el precio: los vehículos y el mantenimiento marcan una diferencia real en pistas aisladas a 4.500 metros, donde una avería es un problema serio",
      "Ir de enero a marzo esperando verlo todo: con el agua el efecto espejo es espectacular pero varias paradas se pierden",
      "Subestimar el frío nocturno: en los alojamientos del Sur Lípez se duerme bajo cero, y el saco de dormir no siempre está incluido",
      "Llegar a Uyuni sin haberse aclimatado: el tour sube hasta casi 5.000 metros el segundo día",
    ],
    miaEsperienza:
      "Es el único sitio donde perdí por completo la noción de la distancia: sin referencias no se entiende si una montaña está a cinco kilómetros o a cincuenta, y por eso funcionan las fotos en perspectiva. Pero lo que me ha quedado es el segundo día, en el Sur Lípez, más que el primero sobre la sal: lagunas rojas llenas de flamencos por encima de los cuatro mil metros, géiseres que resoplan al amanecer con veinte grados bajo cero, alojamientos donde dormimos vestidos porque no había calefacción. Es un tour mucho más duro de lo que las fotografías dejan imaginar, y la única partida en la que no conviene ahorrar es el operador: allí en medio, un 4x4 que se avería es un problema serio.",
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
    comeArrivare: "Vuelo de La Paz a Sucre (alrededor de una hora) o autobús nocturno; entre Sucre y Potosí unas 3 horas de carretera.",
    comeSpostarsi: "Ambas ciudades se recorren a pie; autobuses frecuentes entre las dos.",
    periodoMigliore: "mayo-octubre; Sucre tiene el clima más suave del país gracias a su menor altitud",
    costi: "entre las ciudades más económicas del continente, cursos de idiomas incluidos",
    erroriDaEvitare: [
      "Pasar por Potosí sin tener en cuenta la altitud: a 4.000 metros incluso caminar por el centro cansa",
      "Tratar la visita a las minas como una atracción turística cualquiera: es un lugar de trabajo real, con condiciones durísimas",
    ],
    miaEsperienza:
      "Sucre es el sitio donde me entraron ganas de quedarme más tiempo: dos mil ochocientos metros en lugar de cuatro mil, clima suave, una ciudad blanca y ordenada donde por fin se respira y se duerme. Potosí es lo contrario, y no solo por la altitud. Entrar en las galerías del Cerro Rico fue la experiencia más pesada de todo el viaje, peligrosa en sí no, pero difícil de digerir: caminamos agachados por túneles calurosos y polvorientos junto a hombres que pasan allí diez horas al día con herramientas de otro siglo. Hay que tratarla con el respeto que se debe a un lugar de trabajo. Salimos callados, y quizá sea lo justo.",
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
    esperienzeSlugs: [],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Barcas amarradas en el río Beni en Rurrenabaque, a los pies de colinas cubiertas de selva, Bolivia',
    immagine: '/images/bolivia/rurrenabaque-madidi.jpg',
  },
]
