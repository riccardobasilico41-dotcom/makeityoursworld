import type { Destinazione } from '@/lib/types'

export const destinazioniLituania: Destinazione[] = [
  {
    slug: 'vilnius',
    paeseSlug: 'lituania',
    ordine: 1,
    nome: 'Vilna',
    tipologia: ['città', 'storia', 'arte'],
    giorniConsigliati: '3 días, incluida la excursión a Trakai',
    visitataPersonalmente: true,
    introduzione:
      "Es la capital de Lituania y la más poblada de las tres capitales bálticas. El casco antiguo, Patrimonio de la Humanidad de la UNESCO desde 1994, es uno de los centros barrocos más extensos de Europa centro-oriental, entre iglesias barrocas, patios renacentistas y callejuelas medievales. En la otra orilla del río Vilnia, dentro del mismo casco antiguo, el barrio de Užupis se proclamó república independiente en 1997, con constitución, bandera y presidente honorarios.",
    percheAndarci:
      "En un área que se recorre a pie están la colina fortificada de Gediminas, que domina la ciudad, una gran riqueza de arquitectura barroca y un barrio bohemio que se burla de sus propias instituciones con la misma seriedad con que las respeta. Es también la base natural para la excursión más clásica del país, el castillo sobre la isla de Trakai.",
    cosaVedere: [
      "La Catedral de Vilna (Vilniaus katedra), neoclásica, en la plaza de la Catedral, con el campanario separado en forma de torre y las criptas reales del Gran Ducado de Lituania",
      "La colina de Gediminas, con los restos del Castillo Superior y la Torre de Gediminas (se sube a pie o en funicular): es el símbolo de la ciudad y un mirador sobre el casco antiguo",
      "El barrio de Užupis, con el Muro de la Constitución (los artículos de la «constitución» del barrio, traducidos a decenas de idiomas en otras tantas placas) y el Ángel de Užupis, la estatua símbolo del barrio",
      "La iglesia de Santa Ana, gótica de ladrillo rojo, y la cercana iglesia de San Francisco y San Bernardino: juntas son una de las estampas góticas más fotografiadas de la ciudad",
      "El Patio Universitario de la Universidad de Vilna, fundada en 1579 y entre las universidades más antiguas de Europa centro-oriental, con numerosos patios conectados y frescos astronómicos",
      "La Puerta del Alba (Aušros Vartai), la única puerta que queda de las antiguas murallas, con la capilla del icono de la Madre de la Misericordia, meta de peregrinación",
      "El Palacio de los Grandes Duques de Lituania, reconstruido sobre los restos arqueológicos del castillo real medieval, hoy museo sobre la historia del Gran Ducado",
    ],
    cosaFare: [
      "Subir en funicular (o a pie) a la Torre de Gediminas para ver el panorama sobre los tejados rojos del casco antiguo",
      "Recorrer galerías de arte, cafés y pequeños talleres artesanos de Užupis, buscando las placas del Muro de la Constitución",
      "Atravesar los patios de la Universidad de Vilna, con una parada en la Biblioteca de la Universidad y en la iglesia de San Juan",
      "Dar un paseo nocturno entre los bares del casco antiguo alrededor de la calle Pilies, la calle peatonal que va de la plaza de la Catedral a la Puerta del Alba",
    ],
    doveDormire:
      "En el casco antiguo (Senamiestis) se tiene todo a pie: la zona de la calle Pilies es la más céntrica, la que va hacia Užupis es más tranquila y tiene un aire bohemio propio. Fuera de las murallas, el barrio de Naujamiestis (ciudad nueva) es la alternativa más económica, a pocos minutos a pie del casco antiguo.",
    doveMangiare:
      "El plato nacional son los cepelinai, grandes ñoquis de patata rellenos de carne o queso. En verano el símbolo de la cocina lituana es la šaltibarščiai, sopa fría de remolacha de un rosa intenso, servida con patatas cocidas. El kibinas, el empanadillón relleno traído a Lituania por la comunidad caraíta de Trakai, se encuentra también en Vilna. Varios restaurantes del casco antiguo hacen cocina lituana contemporánea a precios todavía contenidos en comparación con Europa occidental.",
    comeArrivare:
      "El Aeropuerto Internacional de Vilna (VNO) está cerca del centro: tren o autobús público, o taxi o app de transporte. Desde algunos aeropuertos italianos hay vuelos directos low cost, de temporada o todo el año; si no, se hace escala en un hub europeo.",
    comeSpostarsi:
      "El casco antiguo se recorre entero a pie. Para el resto de la ciudad los autobuses y trolebuses públicos son económicos y frecuentes. Para Trakai hay tren regional o autobús desde la estación central.",
    periodoMigliore:
      "de mayo a septiembre, por el clima suave y los días largos. De junio a agosto es la temporada más cálida y concurrida, con el pico del solsticio a finales de junio. El invierno (noviembre-marzo) es frío, pero la ciudad aguanta bien y en diciembre hay mercados navideños.",
    costi: "ciudad económica para los estándares de Europa occidental: entradas, restaurantes y cerveza cuestan menos que en Europa occidental; precios actualizados en las webs oficiales.",
    erroriDaEvitare: [
      "Pensar que quien habla lituano entiende el letón (la lengua de la vecina Riga): son lenguas bálticas emparentadas de lejos, pero una no se entiende partiendo de la otra",
      "Atravesar Užupis con prisa: el sentido del lugar está en detenerse, leer el Muro de la Constitución y pasear sin rumbo entre las galerías",
      "Subir a la Torre de Gediminas en las horas centrales de la temporada alta, cuando la cola del funicular se alarga: mejor ir temprano por la mañana o hacia el atardecer",
      "Programar Trakai como una parada «rápida» de una hora: entre transportes y visita al castillo hace falta media jornada",
    ],
    confronti: [
      {
        titolo: 'Cómo llegar a Trakai desde Vilna',
        introduzione: "Dos formas igualmente prácticas de llegar al castillo sobre la isla, ambas desde la estación central de Vilna y con tiempos de viaje muy parecidos.",
        opzioni: [
          {
            nome: 'Tren regional',
            sintesi: "La conexión más directa y puntual; la estación de Trakai está a algunos kilómetros del castillo.",
            durata: 'menos de una hora',
            costo: 'pocos euros por trayecto',
            pro: ['Puntual y frecuente', 'Sin riesgo de tráfico'],
            contro: ['La estación de Trakai está más lejos del castillo que la parada del autobús', 'Menos servicios que el autobús'],
            perChi: "quien quiere horarios seguros y no tiene problema en caminar (o tomar un autobús local) de la estación al castillo",
          },
          {
            nome: 'Autobús de línea',
            sintesi: "Más frecuente que el tren, y la parada está más cerca del castillo.",
            durata: 'menos de una hora',
            costo: 'pocos euros por trayecto',
            pro: ['Servicios frecuentes', 'Parada un poco más cerca del castillo que la estación de tren'],
            contro: ['Sujeto al tráfico en la carretera nacional', 'Ligeramente más caro que el tren'],
            perChi: "quien quiere más libertad de horario, sobre todo el fin de semana",
          },
        ],
      },
    ],
    luoghi: [
      {
        nome: "Catedral de Vilna y Plaza de la Catedral",
        testo: "Catedral de aspecto neoclásico, fruto de la reconstrucción de Laurynas Gucevičius a finales del siglo XVIII, con el campanario exento, nacido de una torre del Castillo Inferior. En las criptas y el mausoleo real descansan grandes duques y reinas. La plaza es el lugar de encuentro de la ciudad, al pie de la colina de Gediminas.",
        come: "A pie desde el casco antiguo.",
        quando: "Mañana, por la luz y menos gente.",
        tempo: "45 minutos",
        costo: "entrada libre",
        consiglio: "Dentro, no perderse la capilla barroca de San Casimiro."
      },
      {
        nome: "Colina y Torre de Gediminas",
        testo: "El símbolo de la ciudad: la torre, reconstruida en 1933, es lo que queda del Castillo Superior y guarda hallazgos de la colina y maquetas de los castillos de Vilna. Se sube a pie o con el ascensor inclinado; desde la plataforma se ve el casco antiguo.",
        come: "A pie desde la Plaza de la Catedral, o con el ascensor de la colina.",
        quando: "Última hora de la tarde, por la luz sobre los tejados rojos del casco antiguo.",
        tempo: "1,5 horas",
        costo: "entradas de torre y ascensor en la web del Museo Nacional",
        url: "https://www.lnm.lt",
        consiglio: "Subir a pie y, si hace falta, bajar con el ascensor."
      },
      {
        nome: "Puerta del Amanecer",
        testo: "La única parte de las murallas que quedó intacta tras su derribo en 1799-1805, con la capilla que guarda el icono de la Madre de la Misericordia, considerado milagroso: uno de los principales lugares de peregrinación católica de Lituania.",
        come: "A pie desde la Plaza del Ayuntamiento.",
        quando: "Mañana.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Es un lugar de oración: entrar en la capilla en silencio."
      },
      {
        nome: "Užupis",
        testo: "El barrio bohemio al otro lado del arroyo, autoproclamado república el 1 de abril de 1997. En el muro de la calle Paupio están las placas con los 38 artículos y los 3 lemas de su «constitución», en más de veinte lenguas.",
        come: "A pie desde el casco antiguo, cruzando el puente.",
        quando: "De día; el 1 de abril es la fiesta de la independencia.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "Buscar el Ángel de Užupis, la estatuilla símbolo."
      },
      {
        nome: "Iglesias de Santa Ana y Bernardinos",
        testo: "La iglesia gótica de ladrillo rojo de Santa Ana, junto a la mayor Iglesia de San Francisco y San Bernardino. Juntas forman una de las vistas más fotografiadas.",
        come: "A pie desde la Catedral.",
        quando: "Mañana o tarde.",
        tempo: "30-45 minutos",
        costo: "entrada libre",
        consiglio: "El mejor lado para la foto es desde el patio de la iglesia de los Bernardinos."
      },
      {
        nome: "Universidad de Vilna",
        testo: "Fundada en 1579, tiene unos trece patios comunicados, la iglesia barroca de San Juan y una biblioteca histórica. Horarios y entradas en la web de la universidad.",
        come: "A pie, en Pilies gatvė.",
        quando: "Mañana entre semana.",
        tempo: "1 hora",
        url: "https://www.vu.lt",
        consiglio: "En el Gran Patio está el campanario de San Juan, que domina el centro."
      },
      {
        nome: "Palacio de los Grandes Duques y Museo de las Ocupaciones",
        testo: "El Palacio, reconstruido sobre las ruinas del castillo real, cuenta el Gran Ducado. A poca distancia, el Museo de las Ocupaciones y las Luchas por la Libertad, en la antigua sede del KGB, documenta el periodo soviético.",
        come: "A pie: el Palacio al pie de la colina, el Museo en el centro, a poca distancia.",
        quando: "Mañana; horarios y días de cierre en la web oficial.",
        tempo: "2 horas cada uno",
        url: "https://www.genocid.lt",
        consiglio: "Las celdas del sótano del KGB son duras de visitar, pero importantes."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Catedral y Colina de Gediminas",
          "Almuerzo con cepelinai",
          "Tarde: Puerta del Amanecer y Pilies gatvė",
          "Noche: Užupis"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Universidad y Santa Ana",
          "Palacio de los Grandes Duques",
          "Museo del KGB"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: excursión a Trakai (ver ficha)"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo",
        perChi: "Quien quiere ir a pie cerca de todo",
        testo: "Calles empedradas y vida nocturna; caro y ruidoso los fines de semana."
      },
      {
        nome: "Užupis",
        perChi: "Quien busca ambiente de artistas",
        testo: "Tranquilo, a pocos minutos a pie; pocos hoteles."
      },
      {
        nome: "Naujamiestis",
        perChi: "Quien quiere ahorrar",
        testo: "Barrio decimonónico justo fuera del centro, conectado a pie o en bus."
      }
    ],
    sapori: [
      {
        nome: "Cepelinai",
        testo: "Grandes albóndigas de patata rellenas de carne o queso, con nata y panceta."
      },
      {
        nome: "Šaltibarščiai",
        testo: "Sopa fría de remolacha y kéfir, rosa, típica del verano."
      },
      {
        nome: "Kibinai",
        testo: "Empanadillas rellenas de carne, especialidad caraíta (sobre todo en Trakai)."
      },
      {
        nome: "Kepta duona",
        testo: "Pan de centeno frito con ajo y queso, tentempié de cerveza."
      }
    ],
    attenzioni: [
      "Taxis: usar una app reconocida o un taxi registrado con el taxímetro encendido.",
      "Carteristas en lugares concurridos y en el transporte; en los bares no dejar la bebida sin vigilancia.",
      "En invierno las aceras están heladas: calzado adecuado."
    ],
    esperienzeSlugs: ['uzupis-repubblica-passeggiata'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'El casco antiguo de Vilna entre el verde, con las cúpulas y los tejados de las iglesias y las colinas boscosas al fondo',
    immagine: '/images/lituania/vilnius.jpg',
  },
  {
    slug: 'trakai',
    paeseSlug: 'lituania',
    ordine: 2,
    nome: 'Trakai',
    tipologia: ['castello', 'natura', 'storia'],
    giorniConsigliati: 'media jornada, como excursión desde Vilna',
    visitataPersonalmente: true,
    introduzione:
      "Antes que Vilna fue la capital del Gran Ducado de Lituania, y está al oeste de la capital actual. El castillo gótico de ladrillo rojo se alza sobre una isla del lago Galvė, unido a tierra firme por un puente peatonal de madera, en medio de lagos entre los más bellos del país. Aquí vive desde hace siglos la comunidad caraíta (Karaim), que el Gran Duque Vytautas trajo en el siglo XIV como guardia personal y que todavía tiene lengua, religión y cocina propias.",
    percheAndarci:
      "Es la escapada más fotografiada de Lituania, con buenas razones: un verdadero castillo medieval que parece flotar sobre una isla, al que se llega en media jornada desde Vilna sin coche.",
    cosaVedere: [
      "El Castillo de la Isla de Trakai (Trakų salos pilis), construido en los siglos XIV-XV por los grandes duques Kęstutis y Vytautas. Hoy alberga el Museo Histórico de Trakai, con las salas sobre la historia del Gran Ducado y la torre principal que mira al lago",
      "El puente peatonal de madera entre tierra firme y la isla del castillo, la foto más clásica de la localidad",
      "El barrio caraíta, con las tradicionales casas de madera de tres ventanas en la calle principal (según la tradición local una da a la calle, una al patio y una a Dios) y la Kenesa, el templo caraíta todavía activo",
      "El lago Galvė, alrededor del castillo, con orillas preparadas para pasear y alquilar barcas y canoas",
    ],
    cosaFare: [
      "Visitar el museo dentro del castillo y subir a la torre principal para ver el panorama sobre el lago Galvė",
      "Alquilar una barca de remos o un pedalo para ver el castillo desde el agua, el encuadre más fotografiado",
      "Probar los kibinai, los empanadillones rellenos típicos de la cocina caraíta, en uno de los locales históricos de la calle principal",
      "Pasear entre las casas de madera del barrio caraíta y, si está abierta, entrar en la Kenesa",
    ],
    doveDormire: 'En este itinerario Trakai se visita en media jornada desde Vilna, sin dormir allí.',
    doveMangiare:
      "Los kibinai caraítas, el plato de la localidad, se encuentran en varios locales históricos cerca del castillo. Para una comida completa están los restaurantes del paseo junto al lago, con vistas al castillo y cocina lituana y caraíta.",
    comeArrivare: 'Desde la estación central de Vilna en tren regional o en autobús de línea; estación y parada están a algunos kilómetros del castillo.',
    comeSpostarsi: 'De la estación o de la parada del autobús al centro de Trakai y al castillo hay un paseo tranquilo junto al lago; como alternativa hay un breve tramo de autobús local.',
    periodoMigliore: 'de mayo a septiembre, cuando el lago tiene sus colores y se puede alquilar una barca. El castillo está abierto todo el año y bajo la nieve tiene otro encanto.',
    costi: 'entradas y precios del Museo Histórico del Castillo en la web oficial.',
    erroriDaEvitare: [
      "Salir sin comprobar los horarios: los días y horarios de apertura del castillo cambian según la temporada",
      "Quedarse en el puente peatonal sin entrar en el museo: las salas interiores, también las de la historia del Gran Ducado, valen la entrada",
      "Pensar que se despacha en pocos minutos: entre ida, visita y vuelta hace falta una media jornada completa",
    ],
    luoghi: [
      {
        nome: "Castillo de la isla de Trakai",
        testo: "Castillo gótico de ladrillo rojo en la isla del lago Galvė, iniciado en el siglo XIV por el gran duque Kęstutis y terminado por su hijo Vytautas, que murió allí en 1430. Reconstruido en el siglo XX, alberga el Museo Histórico de Trakai.",
        come: "Desde el pueblo, puente de madera peatonal desde la orilla.",
        quando: "Mañana entre semana; de octubre a marzo menos gente. De mayo a septiembre abierto todos los días 10-19; marzo-abril y octubre-noviembre cerrado los lunes, diciembre-febrero cerrado lunes y martes (10-18).",
        tempo: "2-3 horas",
        costo: "14 € abril-septiembre, 12 € octubre-marzo; reducida 7/6 € (2026)",
        consiglio: "Entrar en las salas del museo: cuentan la historia del Gran Ducado."
      },
      {
        nome: "Barrio caraíta",
        testo: "El barrio de la minoría caraíta, con las típicas casas de madera de tres ventanas y la kenesa, el templo caraíta. Aquí se comen los kibinai.",
        come: "A pie desde el centro, por la calle.",
        quando: "Almuerzo.",
        tempo: "1 hora",
        consiglio: "Probar los kibinai de carne en uno de los restaurantes caraítas."
      },
      {
        nome: "Lago Galvė",
        testo: "El lago alrededor del castillo, salpicado de islas, con orillas acondicionadas para caminar y alquilar barcas y canoas. Desde el agua se ve el castillo en un marco clásico.",
        come: "A pie desde el pueblo; alquiler en el paseo del lago.",
        quando: "Verano, mañana o última hora de la tarde.",
        tempo: "1-2 horas",
        consiglio: "Alquilar una barca de remos es la forma más sencilla de ver el castillo desde el agua."
      }
    ],
    sapori: [
      {
        nome: "Kibinai",
        testo: "Empanadillas caraítas rellenas de cordero o ternera y cebolla."
      },
      {
        nome: "Cerveza y kvas",
        testo: "Bebidas locales en los restaurantes del lago."
      }
    ],
    attenzioni: [
      "Trakai, al oeste de Vilna, es una excursión de media jornada: trenes y buses salen de la estación.",
      "En verano los aparcamientos y los restaurantes del lago se llenan los fines de semana.",
      "Los restaurantes frente al castillo son más caros que los del barrio caraíta."
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'El Castillo de la Isla de Trakai de ladrillo rojo reflejado en las aguas tranquilas del lago Galvė, entre los árboles',
    immagine: '/images/lituania/trakai.jpg',
  },
]
