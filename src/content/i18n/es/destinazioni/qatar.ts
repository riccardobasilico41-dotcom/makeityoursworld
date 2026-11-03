import type { Destinazione } from '@/lib/types'

export const destinazioniQatar: Destinazione[] = [
  {
    slug: 'doha',
    paeseSlug: 'qatar',
    ordine: 1,
    nome: 'Doha',
    tipologia: ['città', 'musei', 'stopover'],
    giorniConsigliati: '12-24 horas para la escala esencial, 2 días para hacerla bien',
    visitataPersonalmente: true,
    introduzione:
      "Hace quince años esta capital casi no tenía nada que enseñar. Hoy tiene el Museo de Arte Islámico de I. M. Pei en una isla artificial, el Museo Nacional de Jean Nouvel con forma de rosa del desierto y un zoco restaurado que, a diferencia de muchos de la región, ha seguido siendo un mercado de verdad y no se ha convertido en un decorado.",
    percheAndarci:
      "El programa de escala de Qatar Airways hace que la parada sea casi gratis, y Doha es la ciudad del Golfo que mejor se visita en poco tiempo: el metro conecta aeropuerto, zoco y museos, y en un día completo se ve todo lo que importa.",
    cosaVedere: [
      "El Museo de Arte Islámico, proyectado por I. M. Pei a los noventa años, en una isla artificial frente a la Corniche",
      "El Museo Nacional de Catar de Jean Nouvel, con los discos entrecruzados inspirados en la rosa del desierto",
      "El Souq Waqif, restaurado pero todavía en funcionamiento, con el mercado de los halcones y su hospital",
      "La Corniche, siete kilómetros de paseo marítimo con el skyline de West Bay enfrente",
      "Msheireb Downtown, el barrio reconstruido con sus museos sobre la esclavitud y la historia del petróleo",
      "El Katara Cultural Village y las instalaciones de Richard Serra en el desierto",
    ],
    cosaFare: [
      "Souq Waqif por la noche, cuando abre el mercado de los halcones (véase la ficha de experiencia dedicada)",
      "Museo de Arte Islámico al atardecer, con la vista del skyline desde la escalinata",
      "Paseo en dhow por la bahía, los barcos de madera tradicionales, por pocos riyales",
      "Excursión al inland sea de Khor Al Adaid, donde el mar entra en el desierto (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Con el programa de escala de Qatar Airways se elige entre los establecimientos concertados a precios simbólicos, y casi siempre es la elección acertada. Fuera del programa, la zona de West Bay es cómoda por el metro, la que rodea el Souq Waqif por el ambiente.",
    doveMangiare:
      "El Souq Waqif es la zona de la ciudad con más restaurantes, de cocina levantina, iraní y catarí, para todos los bolsillos. Hay que probar el machboos, la carne especiada con arroz, y el karak chai en los quioscos: el té con leche especiado que aquí se bebe a todas horas y cuesta pocos céntimos. Para gastar poco, en los barrios donde viven los trabajadores del subcontinente indio hay restaurantes excelentes y baratos.",
    comeArrivare:
      "Vuelo al Hamad International (DOH), hub de Qatar Airways y uno de los mejores aeropuertos del mundo, conectado con el centro por el metro en unos veinte minutos.",
    comeSpostarsi:
      "Metro reciente, económico y climatizado, que cubre todo lo necesario; para lo demás Karwa Taxi y Uber. Caminar por la Corniche es agradable solo de noviembre a marzo.",
    periodoMigliore:
      "de noviembre a marzo. Entre junio y septiembre se superan los 45 grados con una humedad altísima, y una escala en verano se reduce a museos y centros comerciales.",
    costi:
      "El Museo de Arte Islámico y el Museo Nacional tienen entradas contenidas; el Souq Waqif es gratis; el metro cuesta pocos riyales. Con el programa de escala el hotel parte de cifras simbólicas.",
    erroriDaEvitare: [
      "No reservar la escala en el portal dedicado: se reserva por separado del vuelo, con el código de reserva, y mucha gente no sabe que existe",
      "Programarla en verano, cuando estar al aire libre es impracticable",
      "Quedarse solo en West Bay y en los centros comerciales: son el zoco y los museos los que justifican bajar del avión",
      "Subestimar las normas de vestimenta: aquí son más conservadoras que en Dubái, con hombros y rodillas cubiertos esperados en público para todos",
    ],
    confronti: [
      {
        titolo: 'Cuánto tiempo quedarse en Doha',
        introduzione:
          "Doha es una de las pocas ciudades del mundo que funcionan tanto en doce horas como en tres días: por eso conviene elegir la duración de la parada en vez de sufrir la escala. Las tres fórmulas dan resultados muy distintos.",
        opzioni: [
          {
            nome: 'Escala corta, 6-10 horas sin salir',
            sintesi: "Quedarse dentro del Hamad International, que está regularmente entre los mejores aeropuertos del mundo.",
            costo: 'nada',
            durata: '6-10 horas',
            pro: ["Ningún riesgo de perder el vuelo", "El aeropuerto tiene jardines interiores, una piscina, zonas de descanso y restaurantes serios", "Ningún trámite"],
            contro: ["No se ve el país", "Diez horas en el aeropuerto siguen siendo diez horas en el aeropuerto"],
            perChi: "Quien tiene equipaje que recoger, conexiones ajustadas o no quiere complicaciones.",
          },
          {
            nome: 'Escala de 12-24 horas, una noche',
            sintesi: "Salir, dormir una noche en la ciudad con el programa de Qatar Airways y ver lo esencial: zoco, Corniche, un museo.",
            costo: 'desde unos 14 dólares por persona y noche en cuatro estrellas con el programa',
            durata: 'una noche',
            pro: [
              "La mejor relación entre coste y resultado: a estas cifras no quedarse es casi una decisión contra los propios intereses",
              "Visado gratuito a la llegada para los italianos, ningún trámite previo",
              "El Souq Waqif por la noche y un museo a la mañana siguiente cubren lo esencial",
              "Metro desde el aeropuerto: se está en la ciudad en veinte minutos",
            ],
            contro: ["Se duerme poco, entre la llegada nocturna y la salida", "No se sale de la ciudad", "Hay que reservarlo en el portal dedicado, por separado del vuelo"],
            perChi: "Casi cualquiera que vuele con Qatar Airways y tenga una escala de más de doce horas.",
          },
          {
            nome: 'Parada de 2-3 días',
            sintesi: "Doha con calma más el inland sea de Khor Al Adaid y el norte del país, con las instalaciones de Richard Serra en el desierto.",
            costo: 'hasta 4 noches con el programa de escala, a tarifas igualmente bajas',
            durata: '2-3 días',
            pro: [
              "Se sale de la ciudad, que es la parte que casi nadie hace",
              "Khor Al Adaid, donde el mar entra en el desierto, es uno de los pocos lugares del mundo hechos así",
              "En tres días se ve todo Catar: es más pequeño que los Abruzos",
            ],
            contro: ["Pasados los cuatro días el país se acaba", "Para el desierto y el norte hace falta un 4x4 o una excursión organizada", "A los costes del hotel se suman los de los traslados fuera de la ciudad"],
            perChi: "Quien quiere hacer de la escala una parada de verdad, y quien ya ha visto la ciudad de Doha.",
          },
        ],
        raccomandazione:
          "Con una escala de más de doce horas la noche en la ciudad es la elección obvia: cuesta lo que una comida y te da una capital entera. Con dos días se añade Khor Al Adaid, lo más insólito del país. Pasados los cuatro días conviene usar Catar como trampolín hacia otra parada del Golfo, porque aquí las cosas que ver se acaban.",
      },
    ],
    miaEsperienza:
      "Doha es la ciudad del Golfo que más rinde en relación con el tiempo que le dedicas, por un motivo casi banal: es pequeña, el metro funciona y las dos cosas que merece la pena ver están cerca. La mejor es el Museo de Arte Islámico. Pei lo proyectó a los noventa años, después de recorrer el mundo musulmán para entender qué era la arquitectura islámica: es un edificio de piedra caliza en una isla artificial, donde la luz entra desde arriba por una cúpula oculta. Desde la escalinata exterior, al atardecer, se mira el skyline de West Bay al otro lado del agua, y es la postal de la ciudad. La otra sorpresa es el Souq Waqif, una reconstrucción que sin embargo funciona: todavía se compran tejidos, especias y halcones de caza, e incluso hay un hospital para halcones que se puede visitar, donde las aves esperan su turno posadas con la caperuza en la cabeza. Es el lugar más extraño y más catarí de la ciudad. Con el programa de escala, todo esto cuesta lo que una pizza.",
    esperienzeSlugs: ['souq-waqif', 'khor-al-adaid'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "Los rascacielos de West Bay vistos desde el agua bajo un cielo despejado, Doha",
    immagine: '/images/qatar/doha.jpg',
  },
  {
    slug: 'qatar-deserto-nord',
    immagine: '/images/qatar/qatar-deserto-nord.jpg',
    paeseSlug: 'qatar',
    ordine: 2,
    nome: 'El desierto y el norte de Catar',
    tipologia: ['deserto', 'natura', 'archeologia'],
    giorniConsigliati: '1-2 días, como ampliación desde Doha',
    visitataPersonalmente: true,
    introduzione:
      "Fuera de la capital Catar está casi vacío. Al sur está Khor Al Adaid, el «inland sea» donde el Golfo entra en el desierto entre dunas que bajan derechas al agua. Al norte están el fuerte de Al Zubarah, patrimonio de la UNESCO, los pueblos de pescadores abandonados y las cuatro planchas de acero de Richard Serra plantadas en medio de la nada.",
    percheAndarci:
      "Khor Al Adaid es un caso raro en el mundo, un brazo de mar que entra en un desierto de dunas vivas. Y el norte muestra el Catar de antes del gas: pueblos de pescadores de perlas abandonados en los años setenta y dejados tal como estaban.",
    cosaVedere: [
      "Khor Al Adaid, el inland sea, reserva natural declarada por la UNESCO, accesible solo en 4x4",
      "El fuerte de Al Zubarah, patrimonio de la UNESCO, y los restos de la ciudad portuaria del siglo XVIII",
      "East-West/West-East de Richard Serra, cuatro planchas de acero de 14 metros de altura en el desierto de Brouq",
      "El pueblo abandonado de Al Jumail, en la costa norte",
      "Las dunas de Sealine y el desierto meridional",
    ],
    cosaFare: [
      "Excursión en 4x4 al inland sea, con el dune bashing y la parada en la orilla (véase la ficha de experiencia dedicada)",
      "Jornada en el norte entre Al Zubarah, Al Jumail y las instalaciones de Serra",
      "Noche en campamento de tiendas en el desierto meridional",
      "Caminar entre las planchas de Serra al atardecer, cuando el acero cambia de color",
    ],
    doveDormire:
      "En el desierto meridional hay campamentos de tiendas de varios niveles, del sencillo al lujoso; el norte casi no tiene alojamientos y se hace en el día desde Doha, a menos de hora y media.",
    doveMangiare:
      "Fuera de Doha hay poquísimo: en los campamentos de tiendas las comidas están incluidas, en el norte casi no hay nada. La comida y el agua se llevan desde Doha, como hacen también los cataríes en sus días fuera de la ciudad.",
    comeArrivare:
      "Khor Al Adaid está a una hora y media de Doha, pero **solo se llega en 4x4 con un conductor experto**: los últimos kilómetros son sobre la arena. Al norte se llega con un coche normal por carretera asfaltada, en poco más de una hora.",
    comeSpostarsi: "Coche de alquiler para el norte; 4x4 con guía para el sur y para el desierto. Fuera de la capital no hay transporte público útil.",
    periodoMigliore:
      "de noviembre a marzo. En verano el desierto catarí es impracticable, y también las excursiones organizadas se hacen solo en los meses frescos.",
    costi: "excursión en 4x4 al inland sea unos 250-500 riyales según la fórmula y la duración; Al Zubarah gratis o casi.",
    erroriDaEvitare: [
      "Intentar llegar a Khor Al Adaid con un coche normal: uno se queda atascado, y es un clásico",
      "Hacer el dune bashing justo después de comer: es más movido de lo que parece",
      "Ir al norte sin agua y sin comida: no hay nada, durante decenas de kilómetros",
      "Programar el desierto entre junio y septiembre",
    ],
    miaEsperienza:
      "Fuera de Doha Catar está casi vacío, y es precisamente por eso por lo que conviene salir de la capital. Khor Al Adaid es lo que me ha quedado. Llegamos en 4x4 tras media hora de arena, con el conductor que desinfló las ruedas al principio de la pista; se corona una última duna y debajo está el mar, un brazo del Golfo que entra en el desierto, con las dunas que bajan derechas al agua y Arabia Saudí en la otra orilla. Pocos lugares en el mundo están hechos así, y que esté a una hora y media de un aeropuerto internacional es casi absurdo. El norte es otra historia, y es la parte que casi nadie hace. Las cuatro planchas de acero de Richard Serra, de catorce metros de altura y alineadas a lo largo de un kilómetro en medio de la nada, se alcanzan por una pista y no hay nadie: ni aparcamiento, ni entrada, ni carteles. Llegas, caminas entre una plancha y otra sin oír más que el viento, y vuelves atrás. Es lo contrario de todo lo demás del Golfo.",
    esperienzeSlugs: [],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "El fuerte de Al Zubarah, con las torres almenadas y la bandera de Catar, sobre la llanura pedregosa del norte",
  },
]
