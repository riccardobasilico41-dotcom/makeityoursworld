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
      "Es la capital de Lituania y la más poblada de las tres capitales bálticas. El casco antiguo, Patrimonio de la Humanidad de la UNESCO desde 1994, es uno de los centros barrocos más extensos de Europa centro-oriental: más de 1.500 edificios históricos entre iglesias barrocas, patios renacentistas y callejuelas medievales. En la otra orilla del río Vilnia, dentro del mismo casco antiguo, el barrio de Užupis se proclamó república independiente en 1997, con constitución, bandera y presidente honorarios.",
    percheAndarci:
      "En un área que se recorre a pie están la colina fortificada de Gediminas, que domina la ciudad, la mayor concentración de arquitectura barroca del Báltico y un barrio bohemio que se burla de sus propias instituciones con la misma seriedad con que las respeta. Es también la base natural para la excursión más clásica del país, el castillo sobre la isla de Trakai.",
    cosaVedere: [
      "La Catedral de Vilna (Vilniaus katedra), neoclásica, en la plaza de la Catedral, con el campanario separado en forma de torre y las criptas reales del Gran Ducado de Lituania",
      "La colina de Gediminas, con los restos del Castillo Superior y la Torre de Gediminas (se sube a pie o en funicular): es el símbolo de la ciudad y el mirador más alto sobre el casco antiguo",
      "El barrio de Užupis, con el Muro de la Constitución (los 41 artículos de la «constitución» del barrio, traducidos a decenas de idiomas en otras tantas placas) y el Ángel de Užupis, la estatua símbolo del barrio",
      "La iglesia de Santa Ana, gótica de ladrillo rojo, y la cercana iglesia de San Francisco y San Bernardino: juntas son una de las estampas góticas más fotografiadas de la ciudad",
      "El Patio Universitario de la Universidad de Vilna, fundada en 1579 y entre las universidades más antiguas de Europa centro-oriental, con trece patios conectados y frescos astronómicos",
      "La Puerta del Alba (Aušros Vartai), la única puerta que queda de las antiguas murallas, con la capilla del icono de la Virgen Negra, meta de peregrinación",
      "El Palacio de los Grandes Duques de Lituania, reconstruido sobre los restos arqueológicos del castillo real medieval, hoy museo sobre la historia del Gran Ducado",
    ],
    cosaFare: [
      "Subir en funicular (o a pie) a la Torre de Gediminas para ver el panorama sobre los tejados rojos del casco antiguo",
      "Recorrer galerías de arte, cafés y pequeños talleres artesanos de Užupis, buscando las placas del Muro de la Constitución",
      "Atravesar los trece patios de la Universidad de Vilna, con una parada en la Biblioteca de la Universidad y en la iglesia de San Juan",
      "Dar un paseo nocturno entre los bares del casco antiguo alrededor de la calle Pilies, la calle peatonal que va de la plaza de la Catedral a la Puerta del Alba",
    ],
    doveDormire:
      "En el casco antiguo (Senamiestis) se tiene todo a pie: la zona de la calle Pilies es la más céntrica, la que va hacia Užupis es más tranquila y tiene un aire bohemio propio. Fuera de las murallas, el barrio de Naujamiestis (ciudad nueva) es la alternativa más económica, a pocos minutos a pie del casco antiguo.",
    doveMangiare:
      "El plato nacional son los cepelinai, grandes ñoquis de patata rellenos de carne o queso. En verano el símbolo de la cocina lituana es la šaltibarščiai, sopa fría de remolacha de un rosa intenso, servida con patatas cocidas. El kibinas, el empanadillón relleno traído a Lituania por la comunidad caraíta de Trakai, se encuentra también en Vilna. Varios restaurantes del casco antiguo hacen cocina lituana contemporánea a precios todavía contenidos en comparación con Europa occidental.",
    comeArrivare:
      "El Aeropuerto Internacional de Vilna (VNO) está a unos 7 km del centro: tren o autobús público en 10-20 minutos, o taxi o Bolt en pocos minutos. Desde algunos aeropuertos italianos hay vuelos directos low cost, de temporada o todo el año; si no, se hace escala en un hub europeo.",
    comeSpostarsi:
      "El casco antiguo se recorre entero a pie. Para el resto de la ciudad los autobuses y trolebuses públicos son económicos y frecuentes. Para Trakai hay tren regional (unos 34 minutos) o autobús (unos 35 minutos) desde la estación central.",
    periodoMigliore:
      "de mayo a septiembre, por el clima suave y los días largos. De junio a agosto es la temporada más cálida y concurrida, con el pico del solsticio a finales de junio. El invierno (noviembre-marzo) es frío, pero la ciudad aguanta bien y en diciembre hay mercados navideños.",
    costi: "ciudad económica para los estándares de Europa occidental: entrada a la Torre de Gediminas 8 € más 2-3 € de funicular, cena normal 10-15 € por persona, cerveza local 3-5 €.",
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
            sintesi: "La conexión más directa y puntual; la estación de Trakai está a unos 3 km del castillo.",
            durata: 'unos 34 minutos',
            costo: 'pocos euros por trayecto',
            pro: ['Puntual y frecuente', 'Sin riesgo de tráfico'],
            contro: ['La estación de Trakai está más lejos del castillo que la parada del autobús', 'Menos servicios que el autobús'],
            perChi: "quien quiere horarios seguros y no tiene problema en caminar (o tomar un autobús local) de la estación al castillo",
          },
          {
            nome: 'Autobús de línea',
            sintesi: "Más frecuente que el tren, y la parada está más cerca del castillo.",
            durata: 'unos 35 minutos',
            costo: 'unos 5-6 € por trayecto',
            pro: ['Servicios más frecuentes, hasta 50 al día entre semana', 'Parada a unos 2,3 km del castillo, un poco más cerca que la estación de tren'],
            contro: ['Sujeto al tráfico en la carretera nacional', 'Ligeramente más caro que el tren'],
            perChi: "quien quiere más libertad de horario, sobre todo el fin de semana",
          },
        ],
      },
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
      "Antes que Vilna fue la capital del Gran Ducado de Lituania, y está a unos 28 km al oeste de la capital actual. El castillo gótico de ladrillo rojo se alza sobre una isla del lago Galvė, unido a tierra firme por un puente peatonal de madera, en medio de lagos entre los más bellos del país: en los alrededores de Trakai hay más de doscientos. Aquí vive desde hace siglos la comunidad caraíta (Karaim), que el Gran Duque Vytautas trajo en el siglo XIV como guardia personal y que todavía tiene lengua, religión y cocina propias.",
    percheAndarci:
      "Es la escapada más fotografiada de Lituania, con buenas razones: un verdadero castillo medieval que parece flotar sobre una isla, al que se llega en media jornada desde Vilna sin coche.",
    cosaVedere: [
      "El Castillo de la Isla de Trakai (Trakų salos pilis), construido en los siglos XIV-XV por los grandes duques Kęstutis y Vytautas. Hoy alberga el Museo Histórico de Trakai, con las salas sobre la historia del Gran Ducado y la torre principal que mira al lago",
      "El puente peatonal de madera entre tierra firme y la isla del castillo, la foto más clásica de la localidad",
      "El barrio caraíta, con las tradicionales casas de madera de tres ventanas en la calle Karaimų (según la tradición local una da a la calle, una al patio y una a Dios) y la Kenesa, el templo caraíta todavía activo",
      "El lago Galvė, el mayor de los lagos alrededor de Trakai, con orillas preparadas para pasear y alquilar barcas y canoas",
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
    comeArrivare: 'Desde la estación central de Vilna en tren regional (unos 34 minutos; la estación está a unos 3 km del castillo) o en autobús de línea (unos 35 minutos; la parada está a unos 2,3 km del castillo).',
    comeSpostarsi: 'De la estación o de la parada del autobús al centro de Trakai y al castillo son 30-40 minutos de paseo tranquilo junto al lago; como alternativa hay un breve tramo de autobús local.',
    periodoMigliore: 'de mayo a septiembre, cuando el lago tiene sus colores y se puede alquilar una barca. El castillo está abierto todo el año y bajo la nieve tiene otro encanto.',
    costi: 'entrada al Museo Histórico del Castillo 12 € en temporada baja (octubre-marzo) y 14 € en temporada alta (abril-septiembre); gratis el último domingo del mes.',
    erroriDaEvitare: [
      "Salir sin comprobar los horarios: el castillo cierra un día a la semana y en temporada baja tiene horarios más cortos",
      "Quedarse en el puente peatonal sin entrar en el museo: las salas interiores, también las de la historia del Gran Ducado, valen la entrada",
      "Pensar que se despacha en pocos minutos: entre ida, visita y vuelta hace falta una media jornada completa",
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'El Castillo de la Isla de Trakai de ladrillo rojo reflejado en las aguas tranquilas del lago Galvė, entre los árboles',
    immagine: '/images/lituania/trakai.jpg',
  },
]
