import type { Destinazione } from '@/lib/types'

export const destinazioniFrancia: Destinazione[] = [
  {
    slug: 'costa-azzurra',
    paeseSlug: 'francia',
    ordine: 1,
    nome: "Costa Azul",
    tipologia: ['mare', 'città', 'arte'],
    giorniConsigliati: "7-10 días usando una sola base",
    visitataPersonalmente: true,
    introduzione:
      "Ciento veinte kilómetros de costa entre Cassis y Menton. Uno tras otro hay una ciudad de medio millón de habitantes que la UNESCO ha reconocido por haber inventado el veraneo, el puerto deportivo más importante del Mediterráneo, tres museos de Picasso, una fundación de arte moderno entre las más importantes de Europa y un parque nacional alpino a una hora y media de la playa. Es también el trozo de Francia que más sufre su propia fama: en julio y agosto la costa es un atasco continuo y los precios no guardan relación con nada.",
    percheAndarci:
      "Ninguna otra costa mediterránea tiene tantas cosas distintas a veinte minutos unas de otras, y es uno de los pocos lugares del mundo donde en febrero se puede esquiar por la mañana y estar al sol junto al mar por la tarde. La versión que merece la pena es la de mayo, la de octubre y, sorprendentemente, la de enero. La de agosto, mucho menos.",
    cosaVedere: [
      "**Antibes**: el casco antiguo dentro de las murallas, el **Marché Provençal** por la mañana en el Cours Masséna, el **Musée Picasso** en el Château Grimaldi, donde Picasso trabajó en el otoño de 1946, y **Port Vauban**, el puerto más grande del Mediterráneo por tonelaje, con el muelle de los yates enormes",
      "**El Cap d'Antibes** y el sendero del litoral que rodea su punta: gratuito, junto al mar, y casi nadie lo hace",
      "**Niza**: la Promenade des Anglais, el Vieux Nice, el mercado del **Cours Saleya**, la Colline du Château y los museos **Matisse** y **Chagall** en Cimiez. Desde 2021 la ciudad es patrimonio de la UNESCO como lugar en el que nació el veraneo de invierno",
      "**Villefranche-sur-Mer** con su rada profunda y la capilla decorada por **Cocteau**, y **Saint-Jean-Cap-Ferrat** con la **Villa Ephrussi de Rothschild** y sus nueve jardines temáticos",
      "**Èze**, pueblo encaramado con el jardín exótico en lo alto, y el **Sentier Nietzsche** que sube hasta él desde el mar",
      "**Cannes** con Le Suquet y el mercado Forville, y enfrente las **Islas de Lérins**: Sainte-Marguerite con el fuerte de la Máscara de Hierro y Saint-Honorat con la abadía donde los monjes cultivan la viña",
      "**Saint-Paul-de-Vence** y la **Fondation Maeght**, y en Vence la **Chapelle du Rosaire**, que Matisse proyectó hasta el último detalle (vidrieras, cerámicas, ornamentos litúrgicos) y consideraba su obra maestra",
      "**Menton**, el punto más cálido de la costa, con los jardines botánicos y la Fiesta del Limón de febrero",
      "**Grasse** por el perfume, **Biot** por el vidrio soplado, **Vallauris** por las cerámicas de Picasso",
      "**El Mercantour y el Valle de las Maravillas**, con miles de grabados rupestres de la Edad del Bronce bajo el Monte Bego, a una hora y media del mar",
    ],
    cosaFare: [
      "El **sendero del litoral del Cap d'Antibes**: es lo mejor de la costa y no cuesta nada (hay una ficha de experiencia dedicada)",
      "El **mercado de Antibes** o el **Cours Saleya** por la mañana, que es donde la costa vive su día normal",
      "Las **Islas de Lérins** en ferri desde Cannes, para entender qué había antes de los hoteles",
      "La **Grande Corniche** en coche de Niza a Menton, con las tres corniches a cotas distintas",
      "Esquiar en **Isola 2000, Auron o Valberg** y bajar al mar por la tarde: se puede hacer en serio",
      "El **Train des Pignes** de Niza hacia el interior, un ferrocarril de vía estrecha que deja la costa y sube",
    ],
    doveDormire:
      "Importa más la base que el alojamiento, y es el tema de la primera comparativa de aquí abajo. En general **el tren regional a lo largo de la costa es excelente**: se duerme en un sitio y uno se mueve por todas partes sin coche, lo que en verano es una ventaja enorme. Antibes y Villefranche son los mejores compromisos entre precio, ubicación y habitabilidad. Niza tiene la oferta más amplia y el aeropuerto. Cannes cuesta más y en la semana del festival es impracticable. Menton es la más económica y la más alejada de todo.",
    doveMangiare:
      "La cocina nizarda es mediterránea y humilde, y poco tiene que ver con la francesa clásica: **socca** (una torta de harina de garbanzos cocida en horno de leña y servida hirviendo, en trozos, en cucuruchos de papel), **pissaladière** (cebolla, anchoas, aceitunas), **pan bagnat**, **petits farcis**, **ratatouille**, y la **salade niçoise**, que en la versión local **no lleva ni patatas ni judías verdes cocidas**: es una ensalada cruda, y aquí el asunto se toma muy en serio. Luego la **daube** de ternera, la **bouillabaisse** más al oeste hacia Marsella, y los **vinos de Bellet**, la denominación minúscula que está dentro del término municipal de Niza. En general **el menú del mediodía** cuesta la mitad que el de la noche, y en los paseos marítimos se paga la ubicación.",
    comeArrivare:
      "El aeropuerto de **Niza** es el segundo de Francia, está en la costa y se conecta con el centro por tranvía. En tren, el alta velocidad llega desde París en unas seis horas; desde Italia la línea costera pasa por Ventimiglia. En coche está la autopista A8, de peaje, a lo largo de toda la costa.",
    comeSpostarsi:
      "**Casi siempre la respuesta correcta es el tren regional a lo largo de la costa**: conecta Cannes, Antibes, Niza, Mónaco y Menton con trenes frecuentes, cuesta poquísimo y se salta el tráfico, que en verano es lo que estropea los días. Los autobuses regionales del departamento tienen tarifas muy bajas y cubren también el interior; **las fórmulas tarifarias cambian a menudo, conviene comprobarlas antes**. El coche solo sirve para el interior y para el Mercantour, y en cualquier otro sitio es un lastre: **en todas las ciudades costeras el aparcamiento es caro, escaso y en verano una batalla**.",
    periodoMigliore:
      "**mayo-junio y de mediados de septiembre a octubre.** **Julio y agosto son el peor momento**: tráfico, playas llenas, precios al máximo, y una ciudad como Antibes triplica sus habitantes. **El invierno es el secreto mejor guardado de la costa**: de diciembre a marzo el clima es suave y los senderos junto al mar están vacíos; en febrero hay mimosa en flor, la Fiesta del Limón en Menton y el Carnaval de Niza, y las estaciones de esquí del Mercantour están a hora y media. Abril y octubre son los meses ideales para los senderos costeros.",
    costi:
      "En temporada alta es una de las zonas más caras de Francia; de octubre a marzo los precios vuelven a la normalidad. Los museos cuestan poco (el Picasso de Antibes y los museos municipales de Niza tienen precios contenidos), el transporte regional poquísimo, los alojamientos mucho. Las dos partidas que se descontrolan son **el aparcamiento** y **los balnearios privados**, donde en temporada alta una tumbona cuesta lo que una cena.",
    erroriDaEvitare: [
      "**Venir en julio o agosto en coche y sin haber reservado aparcamiento.** Es el error que arruina más estancias: te pasas el día en la cola de la carretera de la costa y dando vueltas buscando sitio",
      "Reservar en Cannes en la semana del festival sin saberlo: la ciudad se vuelve impracticable y los precios se multiplican",
      "No usar el tren costero, que es frecuente, económico y en horas punta más rápido que el coche",
      "Esperar playas de arena: **gran parte de la costa, Niza incluida, es de guijarros**. Los escarpines de goma cambian el día; las playas de arena de verdad están más al oeste, hacia Antibes-Juan y Cannes",
      "Quedarse en la franja costera. **El interior empieza a diez kilómetros del mar** y es allí donde la Costa Azul sigue siendo ella misma",
      "Pedir una salade niçoise esperando patatas, y discutirlo con un nizardo",
      "Dar por hecho que el Mercantour es siempre accesible: **la tormenta Alex de 2020 devastó los valles del Roya y del Vésubie** y la red viaria se ha reconstruido por tramos. Antes de subir conviene comprobar el estado de las carreteras",
    ],
    confronti: [
      {
        titolo: "Dónde instalar la base en la Costa Azul",
        introduzione:
          "En tren la costa se recorre de punta a punta en hora y media, así que la base no limita lo que se ve. Cambia cuánto se gasta, cuánta gente hay alrededor y qué tipo de noches se pasan. Es la decisión más importante del viaje, y casi siempre se toma al azar.",
        opzioni: [
          {
            nome: "Niza",
            sintesi: "La ciudad de verdad: medio millón de habitantes, aeropuerto, tranvía, museos, un casco antiguo que vive todo el año y la oferta de alojamientos más amplia de la costa.",
            costo: "media-alta, con la horquilla más amplia de la costa: se encuentra de todo",
            durata: "excelente también para estancias largas",
            pro: [
              "La única base que funciona del todo sin coche: aeropuerto, estación, tranvía y trenes costeros",
              "Museos de primer nivel (Matisse, Chagall, MAMAC) a precios contenidos",
              "El Vieux Nice y el Cours Saleya están vivos todo el año, también fuera de temporada",
              "La oferta de alojamientos más amplia, y la más fácil de encontrar fuera de temporada",
            ],
            contro: [
              "Es una ciudad, con los problemas de una ciudad: tráfico, ruido, carteristas en las zonas turísticas",
              "La playa es de guijarros gruesos, y para muchos es una decepción",
              "En temporada alta el paseo marítimo está saturado",
            ],
            perChi: "Quien viaja sin coche, quien quiere museos y vida urbana, quien llega en avión para pocos días.",
          },
          {
            nome: "Antibes y Juan-les-Pins",
            sintesi: "El mejor compromiso de la costa: un casco antiguo dentro de las murallas, un mercado auténtico, playas de arena, el Cap con sus senderos y el tren para todo lo demás.",
            costo: "media, bastante por debajo de Cannes y de Saint-Jean-Cap-Ferrat",
            durata: "la base ideal para 7-10 días",
            pro: [
              "El casco antiguo está habitado y el Marché Provençal es un mercado de barrio, no un decorado",
              "Playas de arena, que en esta costa no son lo habitual",
              "El Cap d'Antibes con el sendero del litoral a veinte minutos a pie del centro",
              "El Musée Picasso en el castillo donde trabajó Picasso, con vistas al mar desde la terraza",
              "Ubicación central: Cannes a un cuarto de hora en tren, Niza a veinte minutos",
            ],
            contro: [
              "En verano Juan-les-Pins es ruidosa hasta bien entrada la noche: quien busque silencio que se quede por el lado del Cap o del casco antiguo",
              "En agosto la población se multiplica y aparcar se vuelve imposible",
              "Menos museos que Niza",
            ],
            perChi: "Quien quiere una base para una semana o más, quien viaja en familia, quien busca el equilibrio entre precio, mar y ubicación. Es la opción que recomiendo.",
          },
          {
            nome: "Cannes",
            sintesi: "La Croisette, el Palais des Festivals, Le Suquet en la colina y el mercado Forville. Más ordenada y más cara que Antibes, con las Islas de Lérins enfrente.",
            costo: "alta, y fuera de escala en las semanas de eventos",
            durata: "3-5 días",
            pro: [
              "Playas de arena a lo largo de toda la Croisette",
              "Le Suquet, la colina del casco antiguo, con vistas al puerto",
              "Las Islas de Lérins a quince minutos en ferri, el mejor contraste con la ciudad",
              "El mercado Forville, uno de los mejores de la costa",
            ],
            contro: [
              "**En la semana del festival la ciudad es impracticable** y los precios se multiplican: antes de reservar conviene mirar el calendario",
              "Fuera de los eventos está menos viva que Niza y menos habitada que Antibes",
              "La relación calidad-precio de los alojamientos es la peor de la costa",
            ],
            perChi: "Quien quiere playas de arena y un entorno ordenado, y no coincide con las semanas equivocadas.",
          },
          {
            nome: "Villefranche, Beaulieu y Saint-Jean-Cap-Ferrat",
            sintesi: "El tramo más bonito y más recogido de la costa, entre Niza y Mónaco: una rada profundísima, un pueblo de casas ocres y la península de las villas.",
            costo: "de media (Villefranche) a muy alta (Saint-Jean-Cap-Ferrat)",
            durata: "3-5 días",
            pro: [
              "Villefranche es quizá el pueblo más bonito de la costa, con la rue Obscure medieval y la capilla de Cocteau",
              "La Villa Ephrussi de Rothschild y los senderos del litoral del Cap Ferrat",
              "Niza y Mónaco a pocos minutos en tren",
              "Mucho más tranquila que la costa del oeste",
            ],
            contro: [
              "Pocos alojamientos y caros, sobre todo en el Cap Ferrat",
              "Poca vida nocturna: quien busque movimiento tiene que desplazarse",
              "En temporada las playas son pequeñas y están abarrotadas",
            ],
            perChi: "Quien busca la costa más escénica y acepta pagarla, quien viaja en pareja, quien quiere tener Mónaco a mano.",
          },
          {
            nome: "El interior: Valbonne, Mougins, Vence, Tourrettes",
            sintesi: "Diez o quince kilómetros hacia dentro y cambia todo: pueblos de piedra, olivares, precios normales y el mar a veinte minutos en coche.",
            costo: "media-baja, la más económica de todas las opciones",
            durata: "excelente para estancias largas y para quien tiene coche",
            pro: [
              "A igualdad de alojamiento los precios son bastante más bajos",
              "El calor es más llevadero y las noches son frescas",
              "Se está cerca de Grasse, de las Gorges du Loup, de Saint-Paul-de-Vence y de la Fondation Maeght",
              "Es la Provenza de colinas, distinta de la costa y a menudo más bonita",
            ],
            contro: [
              "**Hace falta coche**, y en la costa el coche es un lastre: aparcamiento caro y tráfico",
              "Cada vez que se va al mar hay que contar con tráfico y aparcamiento",
              "Hay transporte público, pero es lento",
            ],
            perChi: "Quien tiene coche, quien se queda mucho tiempo, quien viene en verano y quiere escapar del caos de la costa, quien tiene que ajustarse a un presupuesto.",
          },
        ],
        raccomandazione:
          "Para la mayoría de la gente la respuesta correcta es **Antibes**: es la única base de la costa que está habitada, económica respecto a las vecinas, con playas de arena, en posición central sobre el ferrocarril y a pie de un sendero costero que merece el viaje. **Niza** solo la supera para quien no tiene coche y va por los museos, **el interior** solo para quien viene en agosto o se queda un mes.",
      },
      {
        titolo: "Cuánto adentrarse en el interior, y dónde",
        introduzione:
          "La Costa Azul mide diez kilómetros de ancho y cien de profundidad. Lo que hay detrás de la primera fila de colinas cuesta menos, está menos concurrido y a menudo es más interesante que la costa. Pero son lugares muy distintos entre sí, y el tiempo que piden cambia en un orden de magnitud.",
        opzioni: [
          {
            nome: "Los pueblos encaramados cercanos: Èze, Saint-Paul-de-Vence, Mougins",
            sintesi: "Pueblos de piedra a media hora del mar, con callejuelas estrechas, galerías de arte y panorámicas. Son los más bonitos y los más visitados.",
            costo: "bajos (los pueblos son gratis), de pago los jardines y las fundaciones",
            durata: "media jornada cada uno",
            pro: [
              "Èze tiene en lo alto del pueblo el jardín exótico, con la vista más elevada de la costa",
              "Saint-Paul-de-Vence alberga la **Fondation Maeght**, una de las colecciones de arte moderno más importantes de Europa, con el patio de Giacometti y el laberinto de Miró",
              "En Vence, un poco más arriba, está la **Chapelle du Rosaire** de Matisse, que la proyectó hasta el último detalle y la consideraba su obra maestra",
              "Se llega fácilmente también sin quedarse a dormir",
            ],
            contro: [
              "En las horas centrales están llenos de autocares: conviene ir pronto por la mañana o a última hora de la tarde",
              "Las calles principales son hileras de tiendas para turistas",
              "**La Chapelle du Rosaire abre pocos días y con horarios muy limitados**: conviene comprobarlos antes, porque quien se presenta sin más la encuentra cerrada",
            ],
            perChi: "Todo el mundo, siempre que se vaya fuera de las horas centrales.",
          },
          {
            nome: "Grasse y las colinas del perfume",
            sintesi: "La capital histórica de la perfumería, con el museo internacional y las casas históricas donde se prueba a componer una fragancia.",
            costo: "contenido para el museo, medio para los talleres de composición",
            durata: "media jornada o una jornada",
            pro: [
              "El **Musée International de la Parfumerie** cuenta una historia industrial y agrícola real, no es un escaparate",
              "Las colinas de alrededor están cultivadas de rosa centifolia y jazmín, con la cosecha en mayo y en agosto",
              "El casco antiguo es menos turístico de lo que uno espera",
            ],
            contro: [
              "La ciudad de Grasse es menos bonita que los pueblos cercanos y en parte está descuidada",
              "Los talleres «crea tu propio perfume» son un producto turístico: agradables, pero con poco que ver con la artesanía",
            ],
            perChi: "Quien quiere entender cómo un valle agrícola se convirtió en un distrito industrial global.",
          },
          {
            nome: "Las Gorges du Loup y Tourrettes-sur-Loup",
            sintesi: "Una garganta excavada en la roca con una carretera colgada sobre el vacío, cascadas y pozas naturales, y arriba un pueblo conocido por el cultivo de la violeta.",
            costo: "gratis, salvo los aparcamientos",
            durata: "una jornada",
            pro: [
              "La carretera de la garganta es una de las más bonitas del departamento y se hace en coche o en bici",
              "A lo largo del torrente hay pozas naturales y cascadas, que en verano son una auténtica alternativa al mar",
              "Tourrettes-sur-Loup es un pueblo habitado, con talleres artesanos y sin multitudes",
            ],
            contro: [
              "Hace falta coche, y la carretera es estrecha con pocos puntos de parada",
              "En agosto las pozas naturales están abarrotadas, y el agua está helada todo el año",
            ],
            perChi: "Quien quiere una jornada lejos del mar sin alejarse demasiado.",
          },
          {
            nome: "El Mercantour y el Valle de las Maravillas",
            sintesi: "Un parque nacional alpino con cumbres por encima de los tres mil metros a hora y media de la playa, y bajo el Monte Bego decenas de miles de grabados rupestres de la Edad del Bronce.",
            costo: "acceso al parque gratuito; visitas guiadas a la zona de los grabados de pago",
            durata: "2-3 días como mínimo",
            pro: [
              "Es lo que más sorprende a quien solo conoce la costa: alta montaña de verdad, marmotas, rebecos y lagos glaciares",
              "El **Valle de las Maravillas** tiene una de las mayores concentraciones de arte rupestre prehistórico de Europa",
              "El Train des Pignes y el tren a Tende remontan los valles sin necesidad de conducir",
            ],
            contro: [
              "**La zona de los grabados solo es accesible en verano** (aproximadamente de julio a septiembre), se llega con largas caminatas en altura y **las áreas principales solo se visitan con un guía autorizado**: las normas cambian, conviene comprobarlas cada temporada",
              "Hace falta una indumentaria completamente distinta: es alta montaña, no mar",
              "**La tormenta Alex de 2020 devastó los valles del Roya y del Vésubie**: carreteras y servicios se han reconstruido por tramos, y es mejor informarse de su estado antes de salir",
            ],
            perChi: "Quien se queda al menos una semana y quiere ver la otra cara de la Costa Azul.",
          },
        ],
        raccomandazione:
          "En una semana el mínimo es **media jornada en Saint-Paul-de-Vence con la Fondation Maeght y la Chapelle du Rosaire en Vence**: juntas cuentan el arte del siglo XX en esta costa mejor que cualquier museo. Quien tenga diez días que añada **dos días en el Mercantour**, el contraste más fuerte que ofrece la región.",
      },
    ],
    miaEsperienza:
      "En dos años en Antibes aprendí algo que las guías no escriben: la Costa Azul tiene dos estaciones, y es lo contrario de como uno se la imagina. De junio a septiembre es un lugar difícil. El tráfico de la carretera de la costa no se detiene nunca, encontrar aparcamiento es una batalla diaria, las playas están llenas y los precios suben en todas partes. De octubre a mayo es uno de los lugares más agradables de Europa: hay sol, los senderos junto al mar están desiertos, los mercados vuelven a ser mercados de barrio, y en febrero la mimosa está en flor mientras a hora y media en coche se esquía. Quien vive aquí, en agosto, se marcha o sube al interior. La segunda cosa es el tren. La línea costera pasa cada pocos minutos, cuesta pocos euros, conecta todo desde Cannes hasta Menton y no conoce los atascos, y sin embargo casi ningún turista lo usa: alquilan un coche y se pasan las vacaciones buscando sitio. La tercera es que la costa se agota enseguida, el interior no. Diez kilómetros más allá hay pueblos de piedra donde se come gastando la mitad, y a hora y media hay un parque nacional con rebecos. Y luego el Cap d'Antibes, que acabas repitiendo cien veces: un sendero público y gratuito que rodea la punta del cabo junto al mar, con las olas debajo y las villas escondidas tras los muros. En invierno no hay nadie.",
    luoghi: [
      {
        nome: "Niza: Vieux Nice y Cours Saleya",
        testo: "El casco antiguo ocre, con calles estrechas, iglesias barrocas y el mercado de flores y fruta del Cours Saleya. Desde aquí se sube a la Colline du Château para ver la Promenade des Anglais.",
        come: "A pie desde la parada de tranvía o el paseo marítimo. La subida a la colina es gratuita.",
        quando: "El mercado es por la mañana; los lunes el Cours Saleya acoge el mercado de antigüedades.",
        tempo: "media jornada",
        consiglio: "Para una comida barata: socca y pissaladière en las tiendas del Vieux Nice."
      },
      {
        nome: "Antibes y Cap d'Antibes",
        testo: "Casco antiguo dentro de los baluartes, con el Marché Provençal por la mañana y el Museo Picasso en el Château Grimaldi. En el Cap, un sendero costero gratuito rodea la punta, junto al mar.",
        come: "Antibes tiene estación de tren; el sendero sale de la playa de la Garoupe, en el cabo.",
        quando: "Mercado por la mañana, sendero con la luz de la tarde.",
        tempo: "media jornada cada uno",
        consiglio: "El sendero es gratuito y casi vacío fuera de temporada: zapatos cerrados, hay tramos rocosos."
      },
      {
        nome: "Èze y sendero Nietzsche",
        testo: "Un pueblo medieval encaramado a 427 metros, con un jardín botánico de cactus y plantas crasas en la cima. Desde el mar sube el sendero Nietzsche, empinado.",
        come: "Autobús desde Niza hasta Èze-Village, o tren hasta Èze-sur-Mer y luego el sendero.",
        quando: "Pronto por la mañana en verano.",
        tempo: "2-3 horas",
        consiglio: "Hacer el sendero de subida por la mañana y bajar en autobús."
      },
      {
        nome: "Villefranche y Cap Ferrat",
        testo: "La rada profunda de Villefranche, con la capilla de Saint-Pierre decorada por Cocteau, y en Saint-Jean-Cap-Ferrat la Villa Ephrussi de Rothschild, con nueve jardines temáticos asomados a la rada.",
        come: "Autobús desde Niza o tren hasta Villefranche-sur-Mer.",
        quando: "Por la mañana.",
        tempo: "media jornada",
        consiglio: "El sendero costero que rodea Cap Ferrat es la mejor forma de ver el cabo: calzado cómodo."
      },
      {
        nome: "Islas de Lérins",
        testo: "Frente a Cannes: Sainte-Marguerite con el Fort Royal y la celda de la «Máscara de Hierro», y Saint-Honorat, donde viven monjes cistercienses.",
        come: "Ferris desde el puerto de Cannes a Sainte-Marguerite; a Saint-Honorat van los barcos de los monjes.",
        quando: "Primavera y otoño; en verano los barcos van llenos.",
        tempo: "media jornada",
        consiglio: "Llevar comida: hay pocos sitios donde comer."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Vieux Nice y Cours Saleya por la mañana",
          "Colline du Château",
          "Comida con socca",
          "Atardecer en la Promenade des Anglais"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Niza, Cours Saleya, Colline du Château, museos Matisse o Chagall",
          "Día 2: Villefranche, Cap Ferrat y Èze"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Niza",
          "Día 2: Villefranche, Cap Ferrat, Èze",
          "Día 3: Antibes, Cap d'Antibes e islas de Lérins desde Cannes"
        ]
      }
    ],
    zone: [
      {
        nome: "Niza",
        perChi: "sin coche",
        testo: "Trenes y tranvías por toda la costa, restaurantes y museos. Más caro en verano; el centro es ruidoso de noche."
      },
      {
        nome: "Antibes",
        perChi: "para una ciudad costera más recogida",
        testo: "Murallas, puerto y playas, con tren directo a Niza y Cannes. Alojamiento caro en julio y agosto."
      },
      {
        nome: "Menton",
        perChi: "para precios más bajos y calma",
        testo: "Hacia la frontera con Italia, más tranquila y barata, con el tren de la costa a Niza."
      }
    ],
    sapori: [
      {
        nome: "Socca",
        testo: "Tortita de harina de garbanzo cocida en horno de leña, comida callejera de Niza."
      },
      {
        nome: "Pissaladière",
        testo: "Focaccia con cebolla caramelizada, anchoas y aceitunas."
      },
      {
        nome: "Salade niçoise",
        testo: "Tomate, huevo, atún, anchoas y aceitunas, sin patatas en la versión tradicional."
      },
      {
        nome: "Pan bagnat",
        testo: "Bocadillo redondo con los mismos ingredientes de la salade niçoise."
      }
    ],
    attenzioni: [
      "De junio a septiembre el tráfico de la costa es lento y los aparcamientos están llenos: mejor tren y autobús.",
      "Robos de bolsos y móviles en el paseo marítimo y en trenes locales: llevar todo delante.",
      "En el paseo marítimo de Niza dejar el coche sin objetos visibles: los robos son frecuentes.",
      "Las playas libres son pocas y pequeñas: en las privadas tumbona y sombrilla cuestan mucho."
    ],
    esperienzeSlugs: ['sentiero-cap-antibes', 'mercato-provenzale-antibes', 'museo-picasso-antibes', 'sentiero-nietzsche-eze', 'fondation-maeght', 'isole-lerino'],
    tripSlugs: ['costa-azzurra'],
    imageAlt: "El bastión de piedra del casco antiguo de Antibes asomado al mar bajo un cielo despejado, Costa Azul",
    immagine: '/images/francia/costa-azzurra.jpg',
  },
  {
    slug: 'parigi',
    paeseSlug: 'francia',
    ordine: 2,
    nome: "París",
    tipologia: ['città', 'arte', 'architettura'],
    giorniConsigliati: "5 días, con versiones de 3 y de 2",
    visitataPersonalmente: true,
    introduzione:
      "Veinte distritos dispuestos en espiral a partir del primero, dos islas en el Sena, el museo más visitado del mundo y una concentración de grandes colecciones que en Europa tiene pocos parangones. Es también la ciudad donde más a menudo se equivoca uno con el programa: en el mapa todo parece cerca y no lo está, y los museos cierran en días distintos.",
    percheAndarci:
      "En ninguna otra ciudad, en el mismo día, se pasa de una vidriera gótica del siglo XIII a una colección impresionista dentro de una estación de tren de 1900, y luego a un barrio sin nada monumental donde se come mejor que en el centro. Y el París que se queda en la cabeza es el de los barrios, más que el de los monumentos.",
    cosaVedere: [
      "El **Louvre**, el museo más grande del mundo, con la Victoria de Samotracia en lo alto de la escalera Daru, la Venus de Milo, La balsa de la Medusa y los apartamentos de Napoleón III. **La reserva con franja horaria es de hecho obligatoria; cerrado los martes**",
      "El **Musée d'Orsay** dentro de la antigua estación de tren de 1900, con los impresionistas en la última planta. **Cerrado los lunes**",
      "El **Orangerie**, con las dos salas ovales de los **Nenúfares** proyectadas por el propio Monet para ese espacio",
      "La **Sainte-Chapelle**, con quince vidrieras de quince metros de altura y más de mil paneles historiados, construida en unos siete años para custodiar la Corona de Espinas",
      "**Notre-Dame**, reabierta en diciembre de 2024 tras el incendio de 2019: la piedra limpiada ha devuelto un interior clarísimo. **Entrada gratuita, con reserva por franjas horarias: el sistema cambia, conviene comprobarlo antes**",
      "La **Torre Eiffel**, y sobre todo los puntos desde los que mirarla: Trocadéro, el Arc de Triomphe, Montparnasse, las terrazas de los grandes almacenes (gratuitas), el Parc de Belleville",
      "**Versalles**, con la Galería de los Espejos, el Trianon y el Hameau de la Reine. **Reserva obligatoria, cerrado los lunes**",
      "El **Marais** con Place des Vosges, la plaza planificada más antigua de París, y el **Musée Picasso** en el Hôtel Salé",
      "Las **Catacumbas**, kilómetro y medio de galerías con los restos de millones de personas, a catorce grados constantes. **Con reserva**",
      "El **Père-Lachaise**, gratuito, y los barrios que no salen en las postales: Canal Saint-Martin, Belleville, Buttes-Chaumont, la **Coulée verte René-Dumont**, el parque lineal sobre un viaducto ferroviario que se adelantó veinte años a la High Line de Nueva York",
    ],
    cosaFare: [
      "El **Louvre con una estrategia decidida de antemano**, en lugar de recorrerlo entero (hay una ficha de experiencia dedicada)",
      "La **Sainte-Chapelle en un día de sol**, la única condición en la que tiene sentido (hay una ficha de experiencia dedicada)",
      "Subir a **Montmartre al amanecer**, cuando el barrio es de quien vive en él (hay una ficha de experiencia dedicada)",
      "Caminar por los **passages couverts** del segundo distrito, galerías comerciales del siglo XIX con claraboyas de cristal",
      "Tomar el café **en la barra** en lugar de en la mesa: los dos precios son distintos, expuestos por ley, y en la barra se paga la mitad",
      "Comprar una **baguette de tradition** en una boulangerie de barrio: es una categoría regulada por ley, no un nombre comercial",
    ],
    doveDormire:
      "La regla es una sola: estar **dentro de los veinte distritos y cerca de una estación de metro**. Lo demás importa poco. El **Marais** (3.º y 4.º) y **Saint-Germain** (6.º) son los más bonitos y los más caros; el **Barrio Latino** (5.º) es céntrico y más económico; **Canal Saint-Martin y République** (10.º y 11.º) tienen la mejor relación entre precio, vida de barrio y conexiones; **Montmartre** (18.º) es bellísimo y en cuesta, y la parte baja hacia Pigalle es muy distinta de la alta. Para un primer viaje mejor evitar las zonas fuera del Périphérique: en el mapa parecen cercanas, pero cuestan cuarenta minutos por trayecto.",
    doveMangiare:
      "En París es facilísimo comer mal gastando mucho, y hay una sola defensa: **alejarse de los monumentos**. El **menú del mediodía** (fórmulas entrée-plat o plat-dessert) cuesta una fracción de la misma cocina por la noche. Los **bouillon**, restaurantes populares nacidos en el siglo XIX para dar de comer a los obreros, siguen existiendo y sirven cocina clásica a precios bajísimos. Para probar: **steak-frites**, **confit de canard**, **soupe à l'oignon gratinée**, las **ostras** desde septiembre, los quesos de una fromagerie de verdad y la **baguette de tradition** recién salida del horno. El **servicio está incluido por ley**: la propina es facultativa y simbólica.",
    comeArrivare:
      "Tres aeropuertos: **Charles-de-Gaulle** (conectado por el tren regional RER B), **Orly** (conectado por la prolongación de la **línea 14** del metro, inaugurada en 2024, hoy la forma más sencilla de llegar al centro) y **Beauvais**, lejano, que atiende los vuelos de bajo coste. En tren el alta velocidad conecta París con toda Europa; el directo desde Milán y Turín estuvo mucho tiempo interrumpido por un desprendimiento en Saboya, así que **antes de reservar conviene comprobar si ha vuelto a funcionar**.",
    comeSpostarsi:
      "El **metro** tiene dieciséis líneas y pasa continuamente: casi siempre es la respuesta correcta. **Los billetes de papel en carnet ya no existen**: se usa una tarjeta recargable o el móvil, y **desde 2025 hay una tarifa única simplificada para la red de París y de la Isla de Francia**, con un precio aparte para los aeropuertos. **Importes y condiciones cambian, conviene comprobarlos en la web oficial**. París se recorre muy bien también a pie, y en los últimos años los carriles bici han aumentado muchísimo, con un sistema de bicis públicas capilar.",
    periodoMigliore:
      "**abril-junio y septiembre-octubre.** El verano es caluroso y concurrido, y **en agosto muchos restaurantes y comercios de barrio cierran durante semanas**: la ciudad está más vacía, pero también es más difícil de vivir. El invierno es frío y húmedo, con días cortos, pero tiene las colas más cortas y los precios más bajos. Para quien viene sobre todo por los museos es una excelente elección.",
    costi:
      "Altos, y la partida que más pesa es el alojamiento. Los museos sueltos cuestan poco. El **Paris Museum Pass** de 2, 4 o 6 días compensa a partir de unos tres museos al día, pero **no se salta los controles de seguridad y no sustituye la reserva horaria donde se exige** (Louvre y Versalles sobre todo): es el malentendido más común. Varios museos municipales, como Carnavalet y Petit Palais, tienen la **colección permanente gratuita**.",
    erroriDaEvitare: [
      "**No reservar Louvre y Versalles.** El pase solo no basta: hace falta la franja horaria, y en épocas punta se agota",
      "No comprobar los días de cierre: **el Louvre cierra los martes, Orsay los lunes, Versalles los lunes**, y los martes la multitud se vuelca sobre Orsay y Versalles",
      "Programar el **Centre Pompidou** sin comprobarlo: ha entrado en un largo cierre por reforma y la reapertura está prevista a finales de la década",
      "Subir a la Torre Eiffel para ver París: desde allí arriba a la panorámica le falta justamente la torre",
      "Quedarse en Place du Tertre, la parte menos auténtica de Montmartre, a doscientos metros de calles en las que no hay nadie",
      "Sentarse a la mesa para un café rápido: en la barra cuesta la mitad, y los dos precios están expuestos por ley",
      "Subestimar las distancias: el plano del metro lo comprime todo, y París mide diez kilómetros de ancho",
    ],
    confronti: [
      {
        titolo: "Qué museos elegir",
        introduzione:
          "París tiene más grandes museos de los que se pueden ver en una semana, y entra la tentación de meter tres al día. Después del segundo se deja de mirar. La pregunta útil es cuáles aguantan el tiempo que tienes, más que cuáles son los más importantes.",
        opzioni: [
          {
            nome: "El Louvre",
            sintesi: "El museo más grande y más visitado del mundo, con decenas de miles de obras expuestas en kilómetros de salas.",
            costo: "entrada individual contenida respecto al tamaño; incluido en el Museum Pass, pero la reserva horaria hace falta igualmente",
            durata: "media jornada como mínimo, y nunca se termina",
            pro: [
              "Abarca cinco mil años, desde Egipto hasta el siglo XVIII francés: ningún otro museo tiene esta amplitud",
              "La Victoria de Samotracia en lo alto de la escalera Daru es quizá el montaje más logrado de cualquier museo del mundo",
              "Las antigüedades mesopotámicas y egipcias son de primer nivel y están casi vacías",
              "El propio edificio, con los cimientos del castillo medieval visitables en los sótanos",
            ],
            contro: [
              "La sala de la Gioconda es un embudo de gente en el que se mira de lejos un cuadro pequeño, y para muchos es una decepción anunciada",
              "Cansa: se caminan kilómetros",
              "Cerrado los martes, y sin franja horaria reservada se corre el riesgo de quedarse fuera",
            ],
            perChi: "Quien tiene al menos tres días en la ciudad y acepta elegir dos o tres alas en lugar de recorrerlo entero.",
          },
          {
            nome: "El Musée d'Orsay",
            sintesi: "Impresionismo y postimpresionismo dentro de una estación de tren de 1900 que se ha conservado intacta como contenedor.",
            costo: "contenido, incluido en el Museum Pass",
            durata: "media jornada",
            pro: [
              "La colección impresionista más importante del mundo, concentrada en la última planta",
              "El edificio: la nave de la estación con el gran reloj forma parte de la visita",
              "Tiene una dimensión humana: se termina, y respecto al Louvre eso lo cambia todo",
            ],
            contro: [
              "Muy concurrido, sobre todo los martes, cuando el Louvre está cerrado",
              "Cerrado los lunes",
            ],
            perChi: "Casi todo el mundo. Si en París se elige un solo gran museo, para muchos es este.",
          },
          {
            nome: "El Orangerie y el Musée Marmottan Monet",
            sintesi: "Dos museos pequeños y monográficos: los Nenúfares en las salas ovales que quiso Monet, y la mayor colección de Monet del mundo.",
            costo: "contenidos; el Orangerie está en el Museum Pass, el Marmottan normalmente no",
            durata: "una hora y media cada uno",
            pro: [
              "Las dos salas ovales del Orangerie son un espacio proyectado por el artista para sus obras, y se viven más que se visitan",
              "El Marmottan, fuera del circuito, conserva el cuadro del que el impresionismo toma el nombre y casi siempre está tranquilo",
              "Son cortos: caben en media jornada sin cansar",
            ],
            contro: [
              "El Orangerie, aun siendo pequeño, tiene colas largas en las horas centrales",
              "El Marmottan está descentrado y hay que ir expresamente",
            ],
            perChi: "Quien ya ha visto Orsay y quiere profundizar, o quien tiene poco tiempo y prefiere algo breve e intenso.",
          },
          {
            nome: "Los museos gratuitos e infravalorados",
            sintesi: "Carnavalet para la historia de París, Petit Palais para la pintura del siglo XIX, la Maison de Victor Hugo: colecciones permanentes de entrada gratuita.",
            costo: "gratuitos (colecciones permanentes; las exposiciones temporales se pagan)",
            durata: "una o dos horas cada uno",
            pro: [
              "El **Carnavalet** cuenta la historia de la ciudad de forma muy concreta, con rótulos, interiores reconstruidos y objetos de la Revolución",
              "El **Petit Palais** tiene un patio-jardín interior que casi nadie conoce",
              "Comparados con los grandes museos están vacíos, y se entra sin colas",
            ],
            contro: [
              "No tienen obras maestras famosas en todo el mundo: para algunos es lo bueno, para otros un límite",
            ],
            perChi: "Quien vuelve a París, quien tiene un presupuesto ajustado, quien quiere entender la ciudad además de atravesarla.",
          },
        ],
        raccomandazione:
          "En cinco días: **Orsay y Louvre en dos medias jornadas separadas**, nunca el mismo día, **el Orangerie** como tercera visita breve y al menos **un museo gratuito de barrio**. En tres días: **solo Orsay**, más la Sainte-Chapelle, que no es un museo y es el interior más bonito de la ciudad.",
      },
      {
        titolo: "¿Versalles, Fontainebleau o Chantilly?",
        introduzione:
          "Son tres palacios accesibles en el día desde París, muy distintos en multitud, tamaño y tipo de visita. Versalles es el más famoso y el más agotador; los otros dos están casi vacíos y casi nadie piensa en ellos.",
        opzioni: [
          {
            nome: "Versalles",
            sintesi: "El palacio que fijó el modelo de la corte europea, con la Galería de los Espejos, los jardines de Le Nôtre, el Trianon y el Hameau de la Reine.",
            costo: "entrada al castillo, suplemento en los días con las fuentes en funcionamiento; el parque es en gran parte gratuito",
            durata: "una jornada entera, y no basta",
            pro: [
              "La Galería de los Espejos y los apartamentos reales no tienen equivalente",
              "El **Domaine de Marie-Antoinette**, con el Petit Trianon y el **Hameau de la Reine** (una falsa aldea agrícola construida para la reina), es la parte que más sorprende y la menos visitada",
              "El parque es enorme y se recorre en bici, en barca por el Grand Canal o en el trenecito",
              "Los fines de semana, de primavera a otoño, **las fuentes funcionan con acompañamiento musical**: es el espectáculo para el que se proyectó el jardín",
            ],
            contro: [
              "**Multitud extrema**: en los apartamentos se avanza en fila india",
              "Reserva obligatoria con franja horaria, y **cerrado los lunes**",
              "El Trianon abre más tarde que el castillo: equivocarse en el orden cuesta horas",
              "Los martes, con el Louvre cerrado, es aún peor",
            ],
            perChi: "Quien está en París por primera vez y no quiere perdérselo, asumiendo la multitud y llegando a la apertura.",
          },
          {
            nome: "Fontainebleau",
            sintesi: "La residencia real habitada durante más tiempo en Francia, por ocho siglos de soberanos, con un bosque enorme alrededor.",
            costo: "contenido, bastante menos que Versalles",
            durata: "media jornada para el castillo, una jornada con el bosque",
            pro: [
              "Tiene una estratificación que Versalles no tiene: ocho siglos de reyes, y cada uno construyó su parte",
              "La Galería de Francisco I es una de las obras maestras del Renacimiento en Francia",
              "Hay mucha menos gente",
              "El **bosque de Fontainebleau** es famoso en todo el mundo por la escalada en bloques y es bellísimo para caminar",
            ],
            contro: [
              "Los jardines son menos espectaculares que los de Versalles",
              "Es menos conocido, y quien busca «lo que hay que ver» se queda indeciso",
            ],
            perChi: "Quien vuelve a París, quien odia las multitudes, quien quiere unir un castillo a una jornada en la naturaleza.",
          },
          {
            nome: "Chantilly",
            sintesi: "Un castillo sobre un espejo de agua, con una pinacoteca que por número de pinturas antiguas está entre las más importantes de Francia después del Louvre, y las grandes caballerizas del siglo XVIII.",
            costo: "contenido, con entradas combinadas castillo-parque-caballerizas",
            durata: "una jornada",
            pro: [
              "El **Musée Condé** tiene una colección de pintura extraordinaria, expuesta según el montaje decimonónico original por voluntad testamentaria del donante",
              "Las **Grandes Écuries**, caballerizas monumentales construidas para un príncipe convencido de que se reencarnaría en caballo: hoy son el museo del caballo, con espectáculos ecuestres",
              "El parque diseñado por Le Nôtre, con el jardín a la inglesa y la aldea rústica",
              "Casi ningún turista internacional",
            ],
            contro: [
              "Está peor conectado: se llega con el tren regional más una caminata o un autobús lanzadera",
              "A quien viene de fuera el nombre le dice poco, y por eso es el más descuidado de los tres",
            ],
            perChi: "Quien ama la pintura antigua, quien ya ha estado en Versalles, quien quiere una jornada fuera de la ciudad sin aglomeraciones.",
          },
        ],
        raccomandazione:
          "En la primera visita **Versalles**, pero bien hecha: reserva a la apertura, los apartamentos enseguida, y luego el resto de la jornada en el parque y en el Trianon, donde la multitud se dispersa. En la segunda visita a París, **Chantilly** sin dudarlo.",
      },
    ],
    miaEsperienza:
      "En París los dos primeros días los pasé en los sitios que ya conocía antes de llegar, y el viaje de verdad empezó el tercero. El momento en que la ciudad cambia es casi siempre el mismo: sales de un museo grande, estás cansado, tomas una dirección al azar en lugar de ir hacia el siguiente monumento y acabas en un barrio donde no hay nada que ver. Belleville, el Canal Saint-Martin, la parte alta del distrito diez: la gente sentada en el borde del agua, la cola delante de las boulangeries, nadie que fotografíe nada. A partir de ahí la ciudad funciona. La segunda cosa que aprendí es la gestión del tiempo. En el plano del metro todo parece cerca, porque comprime las distancias y engaña, y tres grandes museos en un día significan no ver ninguno. Dos cosas grandes al día, nunca tres. Luego están las reglas pequeñas que cambian la relación con la ciudad: se dice bonjour al entrar en cualquier sitio, el café se toma en la barra, donde cuesta la mitad, y la Torre Eiffel se mira desde lejos. Desde allí arriba a la panorámica le falta justamente la torre.",
    luoghi: [
      {
        nome: "Louvre",
        testo: "Uno de los museos más grandes del mundo, en un palacio real. El recorrido esencial pasa por la Victoria de Samotracia, la Venus de Milo y la Gioconda. Es imposible verlo todo: elegir dos o tres alas.",
        come: "Metro Palais Royal-Musée du Louvre. Conviene reservar online la hora de entrada, también quien entra gratis; se entra por la Pirámide o por la galería del Carrousel.",
        quando: "Cerrado los martes, el 1 de enero, el 1 de mayo y el 25 de diciembre. Los miércoles y viernes abre hasta las 21. Llegar a la apertura (9) o a última hora de la tarde.",
        tempo: "3-4 horas",
        costo: "32 € para visitantes de fuera del Espacio Económico Europeo, 22 € para ciudadanos y residentes UE/EEE (2026). Gratis para menores de 18.",
        url: "https://www.louvre.fr/",
        consiglio: "La Gioconda está en la sala más concurrida: ir directo a la apertura o al final del día."
      },
      {
        nome: "Musée d'Orsay",
        testo: "Una antigua estación de tren terminada para la Exposición Universal de 1900 y convertida en museo, con una de las mayores colecciones del mundo de obras maestras impresionistas y postimpresionistas: Monet, Renoir, Degas, Van Gogh.",
        come: "Metro Solférino o RER C Musée d'Orsay. Reservar horario se recomienda en temporada alta y es obligatorio el primer domingo del mes.",
        quando: "Cerrado los lunes. Abre de 9.30 a 18, los jueves hasta las 21.45: la noche es el momento más tranquilo.",
        tempo: "2-3 horas",
        costo: "16 € online, 14 € en taquilla; tarifa reducida el jueves por la noche (2026). Gratis el primer domingo de cada mes, solo reservando horario.",
        url: "https://www.musee-orsay.fr/",
        consiglio: "Desde el reloj gigante del último piso se ve el Sacré-Cœur."
      },
      {
        nome: "Sainte-Chapelle",
        testo: "Una capilla gótica del siglo XIII con quince grandes vidrieras de hasta más de 15 metros, construida para guardar las reliquias de la Pasión de Luis IX. Con el sol de la mañana el color es único.",
        come: "En la Île de la Cité, dentro del Palais de Justice; se pasa un control de seguridad.",
        quando: "Por la mañana, con el sol atravesando las vidrieras.",
        tempo: "45 minutos",
        costo: "22 € para visitantes de fuera del Espacio Económico Europeo, 16 € para UE/EEE (2026).",
        url: "https://www.sainte-chapelle.fr/",
        consiglio: "Reservar horario: las colas son largas."
      },
      {
        nome: "Notre-Dame",
        testo: "Reabierta en diciembre de 2024 tras el incendio de 2019. El interior, limpio, es claro y luminoso. La entrada es gratuita.",
        come: "En la Île de la Cité. Se puede reservar en línea para evitar la cola.",
        quando: "A primera hora.",
        tempo: "1 hora",
        costo: "Entrada gratuita a la catedral; torres 16 € (424 escalones), gratis para residentes en la UE menores de 26 años.",
        url: "https://www.notredamedeparis.fr/",
        consiglio: "Las torres y el tesoro tienen entradas aparte."
      },
      {
        nome: "Torre Eiffel",
        testo: "El monumento símbolo de París, 330 metros de hierro. El ascensor o las escaleras suben al segundo piso o a la cima.",
        come: "Metro Bir-Hakeim o RER C Champ de Mars. Entradas con hora en línea.",
        quando: "Atardecer por la luz; los mejores sitios para verla son el Trocadéro y el Arco del Triunfo.",
        tempo: "2-3 horas",
        costo: "36,70 € hasta la cima en ascensor, 14,80 € hasta el segundo piso a pie (tarifas desde el 12 de enero de 2026).",
        url: "https://www.toureiffel.paris/",
        consiglio: "Para ver sin cola se puede subir a la torre de Montparnasse."
      },
      {
        nome: "Palacio de Versalles",
        testo: "La residencia de los reyes de Francia hasta 1789, con la Galería de los Espejos, los apartamentos reales y los jardines. El parque es inmenso.",
        come: "RER C desde París hasta Versailles-Château Rive Gauche. La entrada al palacio es con horario y se reserva online.",
        quando: "Cerrado los lunes, el 25 de diciembre, el 1 de enero y el 1 de mayo. El palacio abre a las 9; Trianon desde mediodía. Los días de jardines musicales (en temporada) el parque es de pago.",
        tempo: "día completo",
        costo: "Pasaporte (palacio, Trianon y jardines) 35 € de abril a octubre y 25 € en temporada baja para visitantes de fuera del Espacio Económico Europeo; 32 € y 22 € para UE/EEE (2026).",
        url: "https://www.chateauversailles.fr/",
        consiglio: "Reservar entrada y llevar comida para el parque."
      },
      {
        nome: "Montmartre y Sacré-Cœur",
        testo: "La colina del norte, con la basílica blanca del Sacré-Cœur en lo alto y la vista de todo París desde la escalinata. Detrás, la Place du Tertre con sus pintores y calles en cuesta que conservan aire de pueblo. Más abajo está el Moulin Rouge.",
        come: "Metro Anvers o Abbesses, luego a pie o en el funicular, que se usa con un billete de metro.",
        quando: "Temprano por la mañana, antes de los grupos; al atardecer la escalinata está llena pero la luz es bonita.",
        tempo: "medio día",
        costo: "Basílica gratuita; la subida a la cúpula es de pago.",
        consiglio: "Cuidado con quien ofrece pulseras de hilo en la escalinata: es una treta para pedir dinero."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Notre-Dame y Sainte-Chapelle",
          "Comida en la Île Saint-Louis",
          "Louvre por la tarde",
          "Atardecer en la Torre Eiffel"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Île de la Cité, Louvre, Tuileries",
          "Día 2: Orsay, Montmartre y Sacré-Cœur"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Île de la Cité y Louvre",
          "Día 2: Orsay, Eiffel y Campos Elíseos",
          "Día 3: Versalles o Canal Saint-Martin y Belleville"
        ]
      }
    ],
    zone: [
      {
        nome: "Marais e Île Saint-Louis",
        perChi: "para un barrio animado y céntrico",
        testo: "A pie de muchos museos, con restaurantes y callejuelas. Más caro y concurrido los fines de semana."
      },
      {
        nome: "Barrio Latino y Saint-Germain",
        perChi: "para un ambiente clásico",
        testo: "Cafés, librerías y metro cerca. Los precios son altos y las noches ruidosas."
      },
      {
        nome: "Canal Saint-Martin",
        perChi: "para bares y menos turistas",
        testo: "Barrio joven con bares y tiendas, al noreste del centro, bien comunicado en metro."
      }
    ],
    sapori: [
      {
        nome: "Croissant y pain au chocolat",
        testo: "De las boulangeries del barrio, recién hechos."
      },
      {
        nome: "Croque-monsieur",
        testo: "Sándwich tostado de jamón y queso, en cafés y brasseries."
      },
      {
        nome: "Crêpes",
        testo: "Dulces o saladas, en las crêperies bretonas de Montparnasse."
      },
      {
        nome: "Soupe à l'oignon",
        testo: "Sopa de cebolla gratinada, típica de las brasseries."
      }
    ],
    attenzioni: [
      "Carteristas en metro, RER y ante los monumentos: mochila delante y móvil fuera de bolsillos traseros.",
      "La estafa de la pulsera a los pies del Sacré-Cœur: rechazar y seguir.",
      "Las «peticiones» de personas con una tablilla junto a la Torre Eiffel sirven para distraer y robar.",
      "Entradas de museos: comprarlas solo en sitios oficiales, no a revendedores que las encarecen."
    ],
    esperienzeSlugs: ['louvre-strategia', 'sainte-chapelle', 'montmartre-alba', 'catacombe-parigi', 'pere-lachaise'],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: "Los tejados de París vistos desde la colina de Montmartre junto a la cúpula del Sacré-Cœur, con la Torre Eiffel en el horizonte",
    immagine: '/images/francia/parigi.jpg',
  },
  {
    slug: 'normandia',
    paeseSlug: 'francia',
    ordine: 3,
    nome: "Normandía",
    tipologia: ['storia', 'costa', 'gastronomia'],
    giorniConsigliati: "5-7 días",
    visitataPersonalmente: true,
    introduzione:
      "La región lleva el nombre de un pueblo llegado del norte, que en 1066 conquistó Inglaterra, y en 1944 vio el desembarco más grande de la historia militar. Tiene una costa de acantilados de creta blanca, un interior de pastos y manzanos, y es el lugar donde nació el impresionismo: el nombre mismo viene de un cuadro pintado en el puerto de Le Havre.",
    percheAndarci:
      "Es una de las pocas regiones de Europa donde la historia es el motivo mismo del viaje, más que un complemento del paisaje: las playas del desembarco cambian a quien las recorre. Y el Mont-Saint-Michel, descontada la multitud, sigue siendo una de las cosas más extraordinarias jamás construidas en Europa.",
    cosaVedere: [
      "Las **playas del desembarco**: Utah, Omaha, Gold, Juno y Sword, con el cementerio americano de Colleville-sur-Mer, la **Pointe du Hoc** todavía acribillada de cráteres, las baterías de Longues-sur-Mer y los cajones del **puerto artificial de Arromanches** aún en el mar",
      "El **Mémorial de Caen**, el museo que enmarca toda la historia a partir del final de la Primera Guerra Mundial: hay que verlo antes de ir a las playas",
      "El **Tapiz de Bayeux**: setenta metros de bordado del siglo XI que cuentan la conquista normanda de Inglaterra, inscrito en el registro de la Memoria del Mundo de la UNESCO. **El museo de Bayeux está cerrado desde septiembre de 2025 y reabrirá, renovado, a finales de 2027; hasta el 11 de julio de 2027 el tapiz se expone en el Museo Británico de Londres**",
      "El **Mont-Saint-Michel**, con la abadía en lo alto de la roca y alrededor las mareas más amplias de la Europa continental",
      "Los **acantilados de Étretat**, con los arcos de creta, la aguja de roca y los senderos en lo alto",
      "**Honfleur**, con el Vieux Bassin y Sainte-Catherine, la iglesia de madera más grande de Francia, construida por los carpinteros de ribera de los astilleros",
      "**Ruan**, con la catedral que Monet pintó decenas de veces a distintas horas del día, el Gros-Horloge y el lugar de la hoguera de Juana de Arco",
      "**Giverny**, la casa y el jardín de Monet con el estanque de los nenúfares y el puente japonés",
    ],
    cosaFare: [
      "Recorrer las **playas del desembarco** en un solo día y en el orden correcto (hay una ficha de experiencia dedicada)",
      "Ver el **Mont-Saint-Michel con la marea**, la única forma de entenderlo (hay una ficha de experiencia dedicada)",
      "Caminar por encima del **acantilado de Étretat** en lugar de mirarlo desde la playa",
      "Visitar una **destilería de calvados** o una granja de sidra: aquí son una cadena agrícola de verdad",
      "Comer los quesos normandos donde nacen: son cuatro y están todos a menos de cincuenta kilómetros",
    ],
    doveDormire:
      "**Bayeux** es la mejor base para las playas del desembarco: pequeña, bonita, librada de los bombardeos de 1944 y a media hora de todo. **Caen** tiene más servicios y el Mémorial. En el Mont-Saint-Michel **se puede dormir en la isla**, en pocos alojamientos pequeños y caros: es la única forma de estar allí por la noche y al amanecer, cuando los autocares ya se han ido. Si no, se duerme en los pueblos de la bahía, mucho más económicos. **Honfleur** y la Côte Fleurie en temporada son caras.",
    doveMangiare:
      "Normandía es una región de **mantequilla, nata y manzanas**, y la cocina lo dice enseguida: aquí el aceite y el vino cuentan poco. **Camembert, livarot, pont-l'évêque y neufchâtel** son cuatro quesos con denominación nacidos todos aquí. La **sidra** se bebe en todas las comidas en cuenco, el **pommeau** es el aperitivo local y el **calvados** es el destilado de sidra, servido por tradición a mitad de comida como «trou normand» para reabrir el estómago. Luego **ostras y mejillones**, las **vieiras**, que tienen una temporada precisa (aproximadamente de octubre a mayo), el **cordero de pré-salé** criado en las praderas salobres de la bahía del Mont-Saint-Michel, y la **teurgoule**, un arroz con leche cocido en el horno durante horas.",
    comeArrivare:
      "En tren desde París se llega a Ruan, Caen y Bayeux en pocas horas. **Para las playas del desembarco y para el interior hace falta coche**: las distancias son cortas, pero los sitios están dispersos y el transporte público no los conecta. Al Mont-Saint-Michel se llega en tren más autobús lanzadera o en coche, con aparcamiento obligatorio en tierra firme.",
    comeSpostarsi:
      "**Coche**, sin verdaderas alternativas. Las carreteras son buenas y las distancias contenidas: toda la franja de las playas del desembarco cabe en unos cincuenta kilómetros. Desde Bayeux y Caen salen también tours guiados de un día, que en el frente del desembarco tienen una ventaja real: el relato es la mitad de la visita.",
    periodoMigliore:
      "**de mayo a septiembre**, y los mejores meses son junio y septiembre. **El tiempo sigue siendo una variable en todos los meses**: llueve en todas las estaciones y el tiempo cambia en el espacio de una hora. En torno al **6 de junio**, aniversario del desembarco, hay conmemoraciones importantes y la zona está abarrotada: es el momento más intenso y el más difícil de organizar. El invierno es gris y ventoso, y muchos establecimientos de la costa cierran.",
    costi:
      "En la media francesa, más bajos que en la Costa Azul y en París. En los lugares del desembarco se entra casi siempre **gratis**: cementerios, Pointe du Hoc y baterías no se pagan, mientras que los museos y el Mémorial tienen entradas contenidas. La partida que sorprende es el autobús lanzadera más el aparcamiento en el Mont-Saint-Michel.",
    erroriDaEvitare: [
      "Ir a las playas del desembarco sin contexto: **el Mémorial de Caen o un museo hay que verlos antes**, si no se miran unas playas cualquiera",
      "Intentar ver los cinco sectores del desembarco en un día: se ven bien dos o tres",
      "Llegar al Mont-Saint-Michel a mediodía en temporada alta, la peor hora",
      "**No consultar el calendario de mareas**: las grandes mareas se publican con años de antelación, y son los únicos días en que el Mont vuelve a ser una isla",
      "Cruzar la bahía a pie solo: **las arenas movedizas existen y la marea sube deprisa. La travesía se hace solo con guía**",
      "Esperar sol. En Normandía el chubasquero hace falta incluso en julio",
      "Ir a Bayeux por el Tapiz: el museo está cerrado hasta finales de 2027 y el tapiz está en Londres hasta julio de 2027",
    ],
    confronti: [
      {
        titolo: "Mont-Saint-Michel: cómo y cuándo visitarlo",
        introduzione:
          "Fuera de París es el monumento más visitado de Francia: millones de personas al año en una roca de pocos cientos de metros de ancho. Entre una visita que se recuerda y una cola en cuesta, la diferencia la marcan tres decisiones: el horario, dónde se duerme y la marea.",
        opzioni: [
          {
            nome: "En el día, en las horas centrales",
            sintesi: "Es como lo hacen casi todos: llegada entre las 10 y las 16, aparcamiento en tierra firme, lanzadera, visita a la abadía, regreso.",
            costo: "aparcamiento más entrada de la abadía",
            durata: "media jornada",
            pro: [
              "Sencillo, sin tener que reservar para dormir",
              "La abadía está abierta y todos los servicios funcionan",
            ],
            contro: [
              "Es la hora punta: la Grande Rue en cuesta se convierte en una fila compacta entre las tiendas de recuerdos",
              "La luz del mediodía es la peor para el Mont, que da lo mejor de sí al amanecer y al atardecer",
              "No se ve cambiar la bahía, que es la mitad del sentido del lugar",
            ],
            perChi: "Quien está de paso y no tiene alternativas.",
          },
          {
            nome: "Durmiendo en la isla",
            sintesi: "Pocos alojamientos pequeños dentro de las murallas, caros y que hay que reservar con mucha antelación, que permiten quedarse cuando los autocares ya se han ido.",
            costo: "alto: es una de las pernoctaciones más caras de Normandía",
            durata: "una noche",
            pro: [
              "Después de las 18 y antes de las 9 el Mont es otro lugar: callejuelas vacías, el ruido del viento, las luces sobre la bahía",
              "Se ve el cambio de marea sin tener que cuadrar horarios",
              "En ciertas épocas del año la abadía organiza **visitas nocturnas** con música e iluminación: **las fechas cambian cada temporada, conviene comprobarlas**",
            ],
            contro: [
              "Costoso, con poquísima disponibilidad",
              "Subir el equipaje por la Grande Rue no es trivial",
            ],
            perChi: "Quien va una vez en la vida y quiere verlo como hay que verlo.",
          },
          {
            nome: "Durmiendo en la bahía e yendo al amanecer o al anochecer",
            sintesi: "Base en uno de los pueblos a pocos kilómetros, con precios normales, y visita fuera de las horas centrales con la lanzadera o a pie por la pasarela.",
            costo: "medio-bajo",
            durata: "una o dos noches",
            pro: [
              "La mejor relación entre coste y calidad de la visita",
              "Se puede volver dos veces, por la noche y al amanecer, y ver dos Mont completamente distintos",
              "La caminata por la pasarela, con el Mont delante haciéndose cada vez más grande, es la parte más bonita de la llegada",
            ],
            contro: [
              "Hace falta coche",
              "Las lanzaderas tienen horarios: quien se queda hasta tarde tiene que comprobar el último servicio, o volver a pie",
            ],
            perChi: "La opción que recomiendo a casi todos.",
          },
          {
            nome: "Cruzando la bahía a pie con un guía",
            sintesi: "La travesía de la bahía sobre la arena, descalzos, con un guía autorizado, siguiendo los canales y rodeando las zonas inestables.",
            costo: "contenido por persona",
            durata: "2-4 horas según el recorrido",
            pro: [
              "Es la forma histórica de llegar, la de los peregrinos, y cambia por completo la percepción de la bahía",
              "Se entiende en vivo qué son las arenas movedizas y por qué aquí la marea es peligrosa",
              "Se ve el Mont crecer desde el horizonte durante horas",
            ],
            contro: [
              "**No hacerlo nunca solo**: las arenas movedizas existen y la marea sube mucho más deprisa de lo que uno imagina",
              "Depende de las mareas y del tiempo: se reserva, y a veces se cancela",
              "Se vuelve mojado y embarrado: hace falta una muda",
            ],
            perChi: "Quien tiene un día más y quiere vivirlo, además de fotografiarlo.",
          },
        ],
        raccomandazione:
          "Dormir **en la bahía**, ir **por la noche y volver al amanecer** y, si hay una **gran marea** cerca de las propias fechas, mover el viaje para estar allí: son los pocos días al año en que el Mont vuelve a ser una isla rodeada de agua, y el calendario sale con mucha antelación.",
      },
    ],
    miaEsperienza:
      "De las playas del desembarco me descolocó lo normales que son. Omaha Beach, en un día de viento, es una playa anchísima de arena clara, con algún bañista y algún perro. En el paisaje no hay nada dramático, y es justo eso lo que la hace difícil de soportar: miras esa extensión plana, piensas en lo que significaba cruzarla corriendo bajo el fuego de las posiciones del talud, y entiendes que no hay nada que ver porque el problema era la geografía. Luego se sube a la Pointe du Hoc, donde el terreno se ha quedado como estaba, con los cráteres de las bombas unos dentro de otros y los búnkeres partidos, y allí el efecto es el opuesto e inmediato. El orden correcto es este: primero un museo que explique, luego las playas. Al revés solo se mira el mar. El Mont-Saint-Michel es la otra cara de la región, y su problema son los horarios más que la multitud. A las once de la mañana la calle principal es una fila en cuesta entre las tiendas de recuerdos; a las siete de la tarde está vacía, con el viento y el ruido del agua. Quien pasa media jornada en las horas centrales vuelve diciendo que está sobrevalorado, pero ha visto otro lugar.",
    luoghi: [
      {
        nome: "Playas del desembarco y cementerio americano",
        testo: "Utah, Omaha, Gold, Juno y Sword fueron las cinco playas del desembarco del 6 de junio de 1944. Sobre Omaha, en Colleville-sur-Mer, está el cementerio americano, con casi 9.400 tumbas.",
        come: "En coche desde Bayeux. El cementerio es gratuito y se visita por libre. El centro de visitantes está al lado.",
        quando: "Por la mañana, con menos grupos.",
        tempo: "3-4 horas",
        consiglio: "En los días de más afluencia el cementerio ha tenido que rechazar visitantes: en 2026 está previsto un sistema de reserva, comprobarlo en la web de la ABMC."
      },
      {
        nome: "Pointe du Hoc",
        testo: "Un acantilado donde los Rangers estadounidenses escalaron las paredes el 6 de junio de 1944. El terreno aún está marcado por cráteres y búnkeres alemanes.",
        come: "En coche, poco al oeste de Omaha. Se camina por la hierba entre los cráteres.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        consiglio: "Respetar las vallas: los acantilados se desprenden."
      },
      {
        nome: "Mémorial de Caen",
        testo: "El museo que encuadra la guerra de 1918 a la Guerra Fría, en un edificio nuevo sobre los búnkeres alemanes de Caen. Conviene verlo antes de las playas, para entenderlas.",
        come: "En coche o autobús desde el centro de Caen.",
        quando: "De abril a septiembre todos los días de 9 a 19. Cierra unas tres semanas en enero por mantenimiento, el 25 de diciembre y el 1 de enero, y algunos miércoles de noviembre y diciembre.",
        tempo: "3 horas",
        costo: "20,80 € entrada general (2026); gratis para menores de 10 años.",
        consiglio: "Si hay poco tiempo, ver solo las secciones de la Segunda Guerra Mundial."
      },
      {
        nome: "Tapiz de Bayeux (ahora en Londres)",
        testo: "Setenta metros de bordado del siglo XI sobre la conquista normanda de Inglaterra en 1066, en el registro Memoria del Mundo de la UNESCO. Muestra a Guillermo, Harold y el cometa Halley.",
        come: "El museo de Bayeux está cerrado desde el 1 de septiembre de 2025 por las obras del nuevo museo. El tapiz se expone en el Museo Británico de Londres del 10 de septiembre de 2026 al 11 de julio de 2027.",
        quando: "En Bayeux no se puede ver hasta la reapertura, prevista para finales de 2027. En Londres las entradas se agotan pronto: reservar en la web del Museo Británico.",
        tempo: "1 hora",
        url: "https://www.bayeuxmuseum.com/",
        consiglio: "En Bayeux quedan la catedral normanda y el centro librado de los bombardeos: merecen la parada igualmente."
      },
      {
        nome: "Mont-Saint-Michel",
        testo: "Una isla con abadía benedictina en lo alto, rodeada de mareas con una amplitud de unos 14 metros. El pueblo de abajo es una sola calle de tiendas. Patrimonio UNESCO desde 1979.",
        come: "Aparcamiento en tierra firme, a unos 2,5 km, luego a pie o en lanzadera hasta la pasarela.",
        quando: "Amanecer o atardecer. Marea alta en luna nueva y llena: consultar las tablas.",
        tempo: "media jornada",
        costo: "Abadía 13 € (2026); gratis para menores de 18 y residentes UE menores de 26. El pueblo es libre.",
        url: "https://www.abbaye-mont-saint-michel.fr/",
        consiglio: "Subir a la abadía por las salas y terrazas, no por las tiendas."
      },
      {
        nome: "Étretat y Honfleur",
        testo: "Étretat: acantilados de tiza con tres arcos y una aguja de roca, con senderos arriba. Honfleur: un puerto viejo con casas altas y estrechas y la iglesia de Sainte-Catherine, toda de madera.",
        come: "En coche o autobús; conviene dedicar medio día a cada uno.",
        quando: "Étretat al atardecer; Honfleur por la mañana.",
        tempo: "media jornada cada uno",
        consiglio: "El sendero en lo alto de los acantilados de Étretat tiene viento fuerte: mantener distancia del borde."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Playas del desembarco y cementerio americano",
          "Pointe du Hoc",
          "Comida en Bayeux",
          "Catedral y centro de Bayeux"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Mémorial de Caen, playas del desembarco",
          "Día 2: Mont-Saint-Michel"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Mémorial y playas",
          "Día 2: Bayeux y Mont-Saint-Michel",
          "Día 3: Honfleur y Étretat"
        ]
      }
    ],
    zone: [
      {
        nome: "Bayeux",
        perChi: "para las playas",
        testo: "Pequeña ciudad intacta, cerca de las playas, con hoteles y restaurantes."
      },
      {
        nome: "Caen",
        perChi: "para ciudad y museos",
        testo: "Más grande, más cara y con más servicios."
      },
      {
        nome: "Cerca del Mont-Saint-Michel",
        perChi: "para ver el amanecer",
        testo: "Casas de campo y pequeños hoteles a pocos km, útiles para evitar las horas de autocares."
      }
    ],
    sapori: [
      {
        nome: "Camembert",
        testo: "Queso blando de leche de vaca, nacido en Camembert."
      },
      {
        nome: "Sidra y calvados",
        testo: "La sidra se bebe en las crêperies; el calvados es un destilado de manzana."
      },
      {
        nome: "Moules à la normande",
        testo: "Mejillones con nata y sidra."
      },
      {
        nome: "Tarte normande",
        testo: "Tarta de manzana con crema, en las pastelerías."
      }
    ],
    attenzioni: [
      "En fines de semana de verano el Mont-Saint-Michel está lleno: ir al amanecer o después de las 17.",
      "Las mareas de la bahía son rápidas: no caminar por las arenas sin guía.",
      "Los búnkeres y dunas de las playas son lugares de memoria: no subirse a los restos."
    ],
    esperienzeSlugs: ['spiagge-sbarco', 'mont-saint-michel', 'arazzo-bayeux', 'giverny'],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: "Los acantilados de creta blanca de Étretat con el arco de la Porte d'Aval y una barca naranja en la playa de guijarros, Normandía",
    immagine: '/images/francia/normandia.jpg',
  },
  {
    slug: 'bretagna',
    paeseSlug: 'francia',
    ordine: 4,
    nome: "Bretaña",
    tipologia: ['costa', 'trekking', 'archeologia'],
    giorniConsigliati: "7-10 días",
    visitataPersonalmente: true,
    introduzione:
      "Una península que se adentra en el Atlántico a lo largo de doscientos kilómetros, con dos mil setecientos kilómetros de costa, una lengua celta todavía viva, las mareas más amplias de Europa y alineamientos de megalitos más antiguos que las pirámides. Es la región francesa que menos se parece a Francia, y le gusta decirlo.",
    percheAndarci:
      "Por el **GR34**, el sendero de los aduaneros, que recorre toda la costa bretona y es el itinerario costero más largo de Francia. Nació para que los aduaneros pudieran vigilar a los contrabandistas, y hoy es uno de los caminos más bonitos de Europa. Y por Carnac, donde hay tres mil piedras levantadas hace seis mil años por razones que no conocemos.",
    cosaVedere: [
      "Los **alineamientos de Carnac**: miles de menhires dispuestos en filas paralelas a lo largo de kilómetros, erigidos en el Neolítico, **más antiguos que Stonehenge y que las pirámides de Guiza**",
      "**Saint-Malo**, la ciudad corsaria dentro de las murallas, destruida en 1944 y reconstruida piedra a piedra, con el paseo sobre los bastiones y los islotes a los que con la marea baja se llega a pie",
      "La **Côte de Granit Rose** en torno a Ploumanac'h, con bloques de granito rosa erosionados en formas imposibles, directamente sobre el mar",
      "La **Pointe du Raz**, promontorio sobre el Atlántico y uno de los puntos más occidentales de Francia, y **Cap Fréhel** con el Fort la Latte",
      "El **Golfo del Morbihan**, un mar interior con decenas de islas, y el cairn de **Gavrinis** con sus grabados neolíticos",
      "**Locronan**, **Dinan** y **Concarneau** con la Ville Close: pueblos amurallados que han conservado el trazado medieval",
      "La **península de Crozon**, con acantilados, playas y poquísima gente",
      "**Cancale** por las ostras y, un poco más al sur, **Guérande** por las salinas y la flor de sal",
    ],
    cosaFare: [
      "Caminar un tramo del **GR34**, por etapas o en el día desde casi cualquier pueblo de la costa (hay una ficha de experiencia dedicada)",
      "Ver los **alineamientos de Carnac** sabiendo lo que son (hay una ficha de experiencia dedicada)",
      "Dar la vuelta a los **bastiones de Saint-Malo** con la marea alta, cuando las olas saltan el muelle",
      "Tomar un ferri a una isla: **Belle-Île**, **Bréhat**, **Ouessant** o la **Île aux Moines**",
      "Comer **galettes de trigo sarraceno** con sidra en una crêperie de pueblo: es la verdadera comida bretona",
    ],
    doveDormire:
      "Bretaña se recorre cambiando de base, porque de este a oeste las distancias son largas. **Saint-Malo** para la costa nororiental y el Mont-Saint-Michel; **Perros-Guirec o Ploumanac'h** para la Côte de Granit Rose; **Quimper, Douarnenez o la península de Crozon** para el Finistère; **Carnac, Vannes o Auray** para el Morbihan y los megalitos. Los precios son mucho más bajos que en la costa mediterránea, salvo en Saint-Malo y Dinard en agosto.",
    doveMangiare:
      "Hay una distinción que los bretones se toman en serio: las **galettes** son saladas y se hacen con **harina de trigo sarraceno**, las **crêpes** son dulces y se hacen con harina de trigo. Quien pide una «crêpe de jamón» declara enseguida de dónde viene. Se acompañan con **sidra servida en cuenco** (bolée). Luego las **ostras de Cancale**, los **mejillones**, el **kouign-amann** (hojaldre, mantequilla y azúcar caramelizado: quizá el dulce más calórico de Francia), el **far breton**, el **caramelo de mantequilla salada** y la **mantequilla salada** en general, que aquí es la norma.",
    comeArrivare:
      "Desde París el alta velocidad llega a Rennes en aproximadamente una hora y media, y de allí se continúa hacia Saint-Malo, Brest, Quimper y Vannes. Los aeropuertos útiles son Rennes, Brest y Nantes. **Para la costa y para el interior hace falta coche**.",
    comeSpostarsi:
      "**Coche.** Los trenes conectan las ciudades principales pero no la costa, que es el motivo por el que se viene. Una cosa útil que saber: **en Bretaña las autopistas son gratuitas**, una herencia de los viejos planes de desarrollo regional. Es la única región francesa en la que esto vale para toda la red principal.",
    periodoMigliore:
      "**de mayo a septiembre**; los meses ideales son **junio y septiembre**. El tiempo bretón es proverbial, y aquí dicen que el buen tiempo ocurre varias veces al día: llueve, escampa y vuelve el sol en el espacio de una hora, todo el año. Julio y agosto tienen más sol y más gente. **Las grandes mareas**, con una amplitud entre las mayores de Europa, son un espectáculo, y el calendario sale con antelación.",
    costi:
      "En alojamientos y restaurantes es una de las regiones francesas más económicas, salvo las localidades de mar más conocidas en agosto. El GR34 es gratuito, los megalitos cuestan poco, los ferris a las islas tienen precios contenidos.",
    erroriDaEvitare: [
      "Subestimar las distancias: Bretaña es grande, y para ir de Saint-Malo a Quimper hace falta media jornada",
      "Contar con el tiempo. El chubasquero hace falta en todos los meses del año",
      "**Subestimar las mareas**: quedarse aislado en un islote o en una playa es facilísimo. Los horarios están expuestos por todas partes, y hay que leerlos",
      "**Subestimar las corrientes de resaca** en las playas atlánticas, la primera causa de accidentes en el mar en Francia",
      "Llamar «crêpe» a una galette salada",
      "Presentarse en los campos de menhires de Carnac esperando caminar entre ellos: **el acceso a los recintos está regulado para proteger el terreno, con visitas guiadas en temporada alta y más libertad fuera de temporada**. Las normas cambian: conviene informarse antes",
    ],
    confronti: [
      {
        titolo: "Normandía o Bretaña, si hay tiempo para una sola",
        introduzione:
          "Son limítrofes, se visitan a menudo juntas y son dos viajes completamente distintos. Quien las pone en el mismo itinerario sin saberlo acaba tratando la segunda como un apéndice de la primera.",
        opzioni: [
          {
            nome: "Normandía",
            sintesi: "Un viaje por la historia: el desembarco de 1944, la conquista normanda de Inglaterra, la abadía sobre la roca, el impresionismo donde nació.",
            costo: "media",
            durata: "5-7 días",
            pro: [
              "Las playas del desembarco cambian a quien las recorre, y no tienen equivalente",
              "El Mont-Saint-Michel",
              "Está más cerca de París: dos horas de tren, y encaja fácilmente",
              "Una gastronomía fuerte y reconocible: quesos, sidra, calvados",
            ],
            contro: [
              "Étretat aparte, la costa es menos espectacular que la bretona",
              "Mucho más visitada: Mont-Saint-Michel y las playas del desembarco están entre los lugares más concurridos de Francia",
              "Va peor para quien busca naturaleza y caminar",
            ],
            perChi: "Quien viaja por la historia, quien tiene pocos días, quien parte de París.",
          },
          {
            nome: "Bretaña",
            sintesi: "Un viaje de costa y de prehistoria: dos mil kilómetros de sendero junto al mar, megalitos neolíticos, islas, una lengua celta y un tiempo que cambia cada hora.",
            costo: "media-baja",
            durata: "7-10 días",
            pro: [
              "El GR34 es uno de los caminos costeros más bonitos de Europa y se puede hacer también en jornadas sueltas",
              "Carnac y el Morbihan están entre los conjuntos megalíticos más importantes del mundo",
              "Mucho menos concurrida, con precios bastante más bajos",
              "Tiene una identidad cultural propia (lengua, música, fiestas) que se nota",
            ],
            contro: [
              "Hace falta más tiempo: es grande y las distancias pesan",
              "El tiempo es una variable en todas las estaciones",
              "Tiene menos «cosas que ver» en sentido monumental: es una región para recorrer más que para ir tachando",
            ],
            perChi: "Quien camina, quien busca naturaleza y costa, quien tiene al menos una semana y no quiere multitudes.",
          },
        ],
        raccomandazione:
          "Con **cinco días**, Normandía: es más densa, más cercana y más fácil de organizar. Con **diez días o más** se hacen ambas, en este orden: primero Normandía, luego Bretaña, porque el ritmo debe ir de lo denso a lo lento y no al contrario. Quien tenga una semana y camine que elija Bretaña sin arrepentimientos.",
      },
    ],
    miaEsperienza:
      "Bretaña la entendí el primer día en el GR34, cuando me di cuenta de que el sendero no se acaba. Recorre toda la península, un promontorio tras otro, y desde cualquier pueblo de la costa que se parta uno puede ponerse a caminar y seguir durante semanas. Nació por un motivo práctico, vigilar a los contrabandistas, y se nota en el trazado: va lo más cerca posible del agua, en el borde de los acantilados, y nunca toma atajos. En un par de horas se pasa de una playa a un roquedal, de un bosque de pinos a un puertecito con las barcas varadas en el fango, porque la marea se ha ido. Y es la marea lo que más llama la atención. Aquí la amplitud es de las mayores de Europa, y dos veces al día el paisaje cambia por completo: una ensenada llena de agua se convierte en una extensión de arena donde la gente recoge almejas. La segunda cosa es Carnac, que hay que afrontar sabiendo lo que se está mirando: tres mil piedras levantadas en filas paralelas a lo largo de kilómetros, hace seis mil años, es decir, antes de las pirámides, por personas que no tenían metal. No sabemos por qué. Es uno de los pocos lugares de Europa donde la única reacción honesta es admitir que no se entiende.",
    luoghi: [
      {
        nome: "Alineamientos de Carnac",
        testo: "Más de 3.000 menhires en filas paralelas, erigidos en el Neolítico: la mayor colección de este tipo del mundo. Las tres zonas principales son Ménec, Kermario y Kerlescan.",
        come: "En coche desde Auray. Desde 1991 las filas principales están valladas para proteger la vegetación: el acceso entre las piedras cambia según la temporada.",
        quando: "A primera hora o al final de la tarde.",
        tempo: "2 horas",
        consiglio: "La Maison des Mégalithes explica las piedras y las normas de acceso."
      },
      {
        nome: "Saint-Malo",
        testo: "La ciudad corsaria dentro de las murallas, destruida en 1944 y reconstruida piedra a piedra. El paseo por los baluartes da vistas al mar y los islotes; con marea baja se llega a pie al Grand Bé.",
        come: "Tren directo desde París. Se visita a pie.",
        quando: "Por la mañana; consultar las mareas antes de caminar al Grand Bé.",
        tempo: "media jornada",
        consiglio: "Comprobar la hora de marea baja: al islote solo se llega entonces."
      },
      {
        nome: "Costa de Granito Rosa",
        testo: "Bloques de granito rosa erosionados en formas extrañas, entre Ploumanac'h y Perros-Guirec. El sendero de aduaneros (GR34) los atraviesa.",
        come: "En coche hasta Ploumanac'h; el sendero costero parte del pueblo.",
        quando: "Atardecer, cuando la luz resalta el color.",
        tempo: "2-3 horas",
        consiglio: "El tramo hasta el faro de Mean Ruz es fácil y apto para todos."
      },
      {
        nome: "Pointe du Raz",
        testo: "Un promontorio sobre un acantilado a pico sobre el Atlántico, uno de los puntos más occidentales de Francia. Senderos en la punta y un faro en el mar.",
        come: "En coche desde Quimper, hasta la punta del Cap Sizun.",
        quando: "Día despejado; con niebla no se ve nada.",
        tempo: "1-2 horas",
        consiglio: "Mantenerse en los senderos marcados: los acantilados son inestables."
      },
      {
        nome: "Golfo de Morbihan y Gavrinis",
        testo: "Un mar interior con unas cuarenta islas. La isla de Gavrinis alberga un túmulo neolítico con piedras grabadas extraordinarias.",
        come: "Barco desde Larmor-Baden; cómo visitar y reservar Gavrinis, en la web oficial.",
        quando: "Primavera y otoño; reservar antes.",
        tempo: "media jornada",
        consiglio: "Comprobar con antelación cómo se reserva la visita a Gavrinis."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Saint-Malo por la mañana",
          "Cancale para las ostras",
          "Pointe du Grouin",
          "Regreso por la costa"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Saint-Malo y Dinan",
          "Día 2: Costa de Granito Rosa"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Saint-Malo",
          "Día 2: Costa de Granito Rosa y GR34",
          "Día 3: Carnac y Golfo de Morbihan"
        ]
      }
    ],
    zone: [
      {
        nome: "Saint-Malo",
        perChi: "para una ciudad amurallada",
        testo: "Hoteles y apartamentos dentro de las murallas; abarrotada en verano."
      },
      {
        nome: "Perros-Guirec",
        perChi: "para el granito rosa",
        testo: "Pueblo marinero, sendero GR34 y playas, más tranquilo."
      },
      {
        nome: "Vannes o Auray",
        perChi: "para Carnac y Morbihan",
        testo: "Bases cómodas para los megalitos y el golfo."
      }
    ],
    sapori: [
      {
        nome: "Crêpes y galettes",
        testo: "Dulces de trigo y saladas de trigo sarraceno, con jamón, huevo y queso."
      },
      {
        nome: "Far breton",
        testo: "Pastel denso de flan con ciruelas pasas."
      },
      {
        nome: "Kouign-amann",
        testo: "Bollo mantecoso y caramelizado, especialidad de Douarnenez."
      },
      {
        nome: "Ostras de Cancale",
        testo: "Servidas en el mercado del puerto."
      }
    ],
    attenzioni: [
      "Las mareas son muy fuertes: consultar la tabla antes de caminar por islotes y playas.",
      "El tiempo cambia varias veces al día: llevar chaqueta impermeable incluso en verano.",
      "En julio y agosto Carnac y Saint-Malo están llenas: llegar pronto."
    ],
    esperienzeSlugs: ['gr34-sentiero-doganieri', 'carnac-megaliti', 'saint-malo-bastioni'],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: "El faro de Ploumanac'h en granito rosa entre los bloques pulidos de la Côte de Granit Rose, Bretaña",
    immagine: '/images/francia/bretagna.jpg',
  },
  {
    slug: 'castelli-loira',
    paeseSlug: 'francia',
    ordine: 5,
    nome: "Castillos del Loira",
    tipologia: ['castelli', 'giardini', 'bicicletta'],
    giorniConsigliati: "5-7 días",
    visitataPersonalmente: true,
    introduzione:
      "Doscientos ochenta kilómetros de valle fluvial patrimonio de la UNESCO, inscritos **como paisaje cultural** más que por los castillos sueltos: cuenta el modo en que río, cultivos y arquitectura se han construido unos a otros a lo largo de los siglos. Los castillos son unos trescientos, y una veintena merece la visita. Entre un buen viaje y una semana de salas vacías, la diferencia está toda en elegir cinco en lugar de ver quince.",
    percheAndarci:
      "Aquí el Renacimiento italiano fue importado en bloque a Francia, y salió algo distinto: castillos hechos para mostrar más que para defenderse, construidos en una toba blanda que se corta como mantequilla y los deja blancos. Y es uno de los pocos grandes destinos de Europa que se visitan mejor en bicicleta que en coche.",
    cosaVedere: [
      "**Chambord**, el más grande, querido por Francisco I: cuatrocientas cuarenta estancias, la **escalera de doble hélice** por la que dos personas suben sin encontrarse nunca (con la hipótesis, discutida, de una inspiración leonardesca) y la terraza del tejado, un bosque de chimeneas y lucernarios. Nunca se habitó en serio",
      "**Chenonceau**, el castillo de las damas, construido **sobre el río Cher** con la galería en forma de puente. Durante la Segunda Guerra Mundial **la galería atravesaba la línea de demarcación**: la entrada estaba en zona ocupada y la salida en zona libre, y había quien pasaba por allí para huir",
      "**Villandry**, por los jardines: la huerta renacentista de dibujos geométricos, el jardín ornamental del amor y el de agua, reconstruidos sobre modelos del siglo XVI",
      "**Amboise** y el **Clos Lucé**, donde **Leonardo da Vinci pasó los últimos tres años de su vida y murió en 1519**: la casa conserva los modelos de sus máquinas, y él está enterrado en la capilla del castillo",
      "**Azay-le-Rideau**, en una isla del Indre, que se refleja en el agua, y **Cheverny**, habitado durante siglos por la misma familia y modelo declarado del castillo de Moulinsart en las aventuras de Tintín",
      "**Chaumont-sur-Loire** con el **festival internacional de jardines**, que cada año de primavera a otoño expone decenas de jardines de autor",
      "**Fontevraud**, la mayor abadía-ciudad de Europa, con las **tumbas de los Plantagenet**: Leonor de Aquitania, Enrique II y Ricardo Corazón de León",
      "Las **bodegas trogloditas** excavadas en la toba: la piedra extraída para construir los castillos ha dejado kilómetros de galerías, que hoy sirven de bodegas y para cultivar setas",
    ],
    cosaFare: [
      "Recorrer un tramo del **Loira en bicicleta**: un itinerario ciclable señalizado de unos novecientos kilómetros a lo largo del río, llano, que conecta los castillos mejor que el coche",
      "Visitar **Chambord desde la terraza**, el punto para el que fue construido (hay una ficha de experiencia dedicada)",
      "Hacer una **cata en una bodega troglodita** de Vouvray, Chinon o Saumur, dentro de la roca",
      "Ver el **Clos Lucé** y las máquinas de Leonardo, la visita que gusta incluso a quien de los castillos no sabe qué hacer",
      "Subir por la **escalera de doble hélice** de Chambord y probar a cruzarse con alguien: no ocurre",
    ],
    doveDormire:
      "**Amboise, Tours o Blois** son las bases más prácticas: céntricas respecto a los castillos principales, con servicio de tren y precios razonables. **Saumur y Chinon** sirven a la parte occidental y a los vinos. También se puede dormir en un castillo, y fuera de temporada no siempre cuesta muchísimo. Quien pedalea hace mejor en desplazarse por el río por etapas, sin base fija.",
    doveMangiare:
      "Cocina de río y de huerta: **rillettes** y **rillons** de cerdo, el **beurre blanc** (una salsa de mantequilla, chalota y vino blanco nacida por estas tierras), pescado de agua dulce, **quesos de cabra** con denominación como Sainte-Maure-de-Touraine, Selles-sur-Cher y Crottin de Chavignol, y la **tarte Tatin**, nacida en el Loiret. Los vinos del valle están entre los más variados de Francia: **Sancerre y Pouilly-Fumé** de Sauvignon, **Vouvray y Montlouis** de Chenin, **Chinon, Bourgueil y Saumur-Champigny** de Cabernet Franc, y el **Muscadet** en la desembocadura.",
    comeArrivare:
      "En tren desde París se llega a Tours, Blois, Amboise y Orléans en una hora o poco más. **Las estaciones más útiles son Blois y Amboise.** El coche es cómodo, pero en temporada alta los aparcamientos de los castillos principales se llenan pronto.",
    comeSpostarsi:
      "**Casi todos usan el coche, pero la opción correcta es la bicicleta.** El valle es llano, a lo largo de todo el río hay un itinerario ciclable señalizado con alquileres de ida entre una ciudad y otra, y los castillos distan diez o veinte kilómetros unos de otros: este paisaje hay que atravesarlo pedaleando a lo largo del Loira. Hay también lanzaderas estacionales entre los castillos principales y las estaciones; **periodos y recorridos cambian, conviene comprobarlos antes**.",
    periodoMigliore:
      "**de abril a junio y en septiembre-octubre.** Los **jardines**, Villandry sobre todo y el festival de Chaumont, dan lo mejor de sí de mayo a septiembre. Julio y agosto están concurridos en los castillos principales, mientras que los menores siguen tranquilos. El invierno es frío y muchos castillos reducen los horarios o cierran: **mejor comprobarlo castillo por castillo**.",
    costi:
      "Cada castillo tiene su entrada y la suma pesa: cinco castillos son un gasto real. Existen **entradas combinadas y pases de zona** que compensan a partir de tres o cuatro visitas, pero cambian a menudo y es mejor comprobarlos antes. El alquiler de bici de ida tiene un suplemento, pero evita tener que devolver el vehículo.",
    erroriDaEvitare: [
      "**Ver demasiados.** Después del tercer castillo en dos días ya no se distinguen: cinco en una semana, con calma, valen el triple",
      "Hacer solo los grandes: Chambord y Chenonceau son los más visitados de todos, y en los menores hay una décima parte de la gente",
      "Llegar a Chambord o Chenonceau a media mañana en temporada alta, junto con los autocares",
      "Descuidar los jardines: en Villandry el castillo es el accesorio, el motivo para ir es el jardín",
      "Moverse solo en coche sin probar al menos una jornada en bici a lo largo del río",
      "Ir a Chaumont fuera del periodo del festival de jardines esperando encontrarlo",
    ],
    confronti: [
      {
        titolo: "Qué castillos del Loira elegir",
        introduzione:
          "Son unos trescientos, y visitar más de cinco o seis en una semana es contraproducente. Cada uno es una cosa en sí: uno es un palacio de representación nunca habitado, otro un puente sobre el río, otro un jardín, otro la casa donde murió Leonardo. Conviene elegir por tipo, no por fama.",
        opzioni: [
          {
            nome: "Chambord",
            sintesi: "El más grande y el más teatral: un palacio de caza de cuatrocientas cuarenta estancias en medio del parque cercado más extenso de Europa.",
            costo: "entrada entre las más caras del valle, más el aparcamiento",
            durata: "media jornada",
            pro: [
              "La escalera de doble hélice y la terraza-bosque de chimeneas no tienen equivalente",
              "El parque cercado es enorme y se recorre en bici, en barca o a pie, entre ciervos y jabalíes",
              "El edificio es tan desproporcionado respecto a cualquier función que cuenta por sí solo lo que era el poder en el siglo XVI",
            ],
            contro: [
              "Los interiores están en gran parte vacíos: nunca se habitó en serio y el mobiliario es escaso",
              "Con Chenonceau es el más concurrido",
              "Grande y dispersivo: se camina mucho",
            ],
            perChi: "Todo el mundo, al menos una vez. Es el castillo que se queda en la memoria.",
          },
          {
            nome: "Chenonceau",
            sintesi: "El castillo construido sobre el río, con la galería en forma de puente: el más bonito de los grandes, y el más rico en historias de mujeres y de guerra.",
            costo: "alto, en línea con Chambord",
            durata: "media jornada",
            pro: [
              "La imagen del castillo sobre el agua es la más fuerte del valle",
              "Los interiores están amueblados, y los jardines de Diana de Poitiers y de Catalina de Médici están uno frente al otro",
              "La **línea de demarcación que durante la ocupación pasaba por dentro de la galería** es uno de esos detalles que cambian la manera de mirar un lugar",
              "Las composiciones florales, rehechas continuamente con las flores del jardín, son una tradición de la casa",
            ],
            contro: [
              "Muy concurrido: la galería se convierte en una fila",
              "Hay que verlo a la apertura o en la última hora",
            ],
            perChi: "Todo el mundo. Si se ve uno solo, para muchos es este.",
          },
          {
            nome: "Villandry",
            sintesi: "El castillo que se visita por el jardín: huerta renacentista de dibujos geométricos, jardín del amor, jardín de agua y laberinto.",
            costo: "medio, con entrada reducida solo para los jardines",
            durata: "media jornada",
            pro: [
              "La huerta decorativa, con las verduras plantadas formando dibujos y renovadas dos veces al año, con esta forma no existe en ningún otro sitio",
              "Se puede coger la entrada solo para los jardines, que son la parte que cuenta",
              "Desde la terraza alta se ven los dibujos desde arriba, el punto de vista para el que fueron proyectados",
            ],
            contro: [
              "Fuera de temporada los jardines están pelados y la visita pierde gran parte de su sentido",
              "El castillo en sí es menos interesante que el parque",
            ],
            perChi: "Quien viene entre mayo y septiembre. En los demás meses se puede saltar.",
          },
          {
            nome: "Amboise y el Clos Lucé",
            sintesi: "El castillo real sobre el Loira y, a cuatrocientos metros, la casa en la que Leonardo pasó los últimos tres años y murió.",
            costo: "dos entradas distintas, ambas medias",
            durata: "una jornada para ambos",
            pro: [
              "El **Clos Lucé** expone los modelos funcionales de las máquinas de Leonardo, y es la visita que conquista incluso a quien está cansado de castillos",
              "Leonardo está enterrado en la capilla del castillo de Amboise",
              "Amboise es una ciudad viva donde tiene sentido dormir, además de parar por el monumento",
              "Desde la terraza del castillo sobre el río se tiene uno de los mejores puntos de vista del valle",
            ],
            contro: [
              "El Clos Lucé apuesta mucho por la divulgación y en temporada alta está lleno de familias",
              "El castillo de Amboise es mucho más pequeño que el original, en gran parte demolido tras la Revolución",
            ],
            perChi: "Quien viaja con niños, quien se interesa por la historia de la técnica, quien quiere una base además de una visita.",
          },
          {
            nome: "Los menores: Azay-le-Rideau, Cheverny, Chaumont, Fontevraud",
            sintesi: "Cuatro visitas más cortas y mucho menos concurridas, cada una con una razón precisa: el reflejo en el agua, la casa todavía habitada, el festival de jardines, las tumbas de los Plantagenet.",
            costo: "medios o bajos",
            durata: "dos o tres horas cada uno",
            pro: [
              "**Cheverny** está amueblado y habitado desde hace siglos por la misma familia: es el único que parece una casa más que un museo",
              "**Fontevraud** es una abadía enorme con las tumbas de Leonor de Aquitania y de Ricardo Corazón de León, y tiene una atmósfera que ningún castillo tiene",
              "**Chaumont** con el festival de jardines es una cosa aparte: decenas de jardines de autor renovados cada año",
              "Mucha menos gente",
            ],
            contro: [
              "Ninguno de estos es «el castillo del Loira» que se tenía en mente antes de partir",
              "Fontevraud queda lejos de los demás",
            ],
            perChi: "Quien tiene más de cuatro días, quien vuelve, quien no soporta las multitudes.",
          },
        ],
        raccomandazione:
          "En cinco días funciona esta combinación: **Chenonceau a la apertura**, **Chambord con el parque**, **Villandry si es la temporada de jardines**, **Amboise con el Clos Lucé** como jornada en la base, y **uno entre Cheverny y Fontevraud** para ver cómo se vivía o cómo se rezaba. Al menos una de estas jornadas hay que hacerla **en bicicleta a lo largo del río**: cambia el viaje.",
      },
    ],
    miaEsperienza:
      "En el Loira casi todos cometen el mismo error: lo tratan como una lista. Dos castillos el primer día, tres el segundo, y al cuarto se entra en una sala de representación del siglo XVI sin reaccionar ya. Son todos blancos, con ventanas de crucería, chimeneas enormes y cartelitos. El valle funciona de otra manera: un castillo al día, por la mañana, y el resto del tiempo a lo largo del río. Es allí donde se entiende por qué la UNESCO ha inscrito **el paisaje** y no los monumentos. El Loira es el último gran río europeo que queda en gran parte sin canalizar, con los bancos de arena que se desplazan y las islas que cambian, y los castillos están ahí por el río. Lo mejor que se puede hacer es alquilar una bici durante una jornada. El recorrido por el dique es llano, atraviesa pueblos que no tienen castillo y por tanto no tienen a nadie, y se llega al siguiente monumento tras dos horas de pedaleo en lugar de veinte minutos de coche y media hora buscando aparcamiento. El segundo descubrimiento son las bodegas en la toba. La piedra blanca de los castillos se extrajo de la colina de detrás, y esas galerías hoy son bodegas: se baja a doce grados constantes, con las botellas en los nichos, y quien sirve el vino explica que el agujero en el muro es tan viejo como la fachada del castillo de la otra orilla.",
    luoghi: [
      {
        nome: "Chambord",
        testo: "El castillo más grande del Loira, construido para Francisco I, con 440 habitaciones y la escalera de doble espiral que muchos estudiosos atribuyen al menos en parte a Leonardo. Lo rodea un parque de más de 5.000 hectáreas cerrado por un muro de 31 km.",
        come: "En coche desde Blois. Se visita por libre o con audioguía.",
        quando: "Por la mañana, para los jardines y las terrazas. Cerrado el 1 de enero y el 25 de diciembre.",
        tempo: "3 horas",
        costo: "31 € para visitantes de fuera del Espacio Económico Europeo, 21 € para UE/EEE (castillo y jardines, 2026).",
        url: "https://www.chambord.org/",
        consiglio: "Subir a las terrazas para ver de cerca las chimeneas y torrecillas."
      },
      {
        nome: "Chenonceau",
        testo: "El castillo sobre el río Cher, con su galería-puente. Lo gestionaron mujeres: Diana de Poitiers y Catalina de Médici.",
        come: "En coche desde Tours o Amboise.",
        quando: "Por la mañana; en otoño los jardines tienen colores más fuertes.",
        tempo: "2-3 horas",
        costo: "19 € con el folleto-guía, 24 € con la audioguía (web oficial, 2026).",
        url: "https://www.chenonceau.com/",
        consiglio: "Dedicar tiempo a los jardines y las cocinas, no solo a la galería."
      },
      {
        nome: "Villandry",
        testo: "El castillo es menos conocido que los jardines: el huerto renacentista de dibujos geométricos, el jardín del amor y el de agua, rehechos según el modelo del siglo XVI.",
        come: "En coche desde Tours, hacia el oeste junto al Loira.",
        quando: "Primavera y verano para la floración.",
        tempo: "2 horas",
        url: "https://www.chateauvillandry.fr/",
        consiglio: "Subir a la torre para ver los dibujos desde arriba."
      },
      {
        nome: "Amboise y Clos Lucé",
        testo: "Amboise tiene un castillo sobre el río. El Clos Lucé es la casa donde Leonardo da Vinci pasó sus tres últimos años y murió en 1519; guarda modelos de sus máquinas.",
        come: "Tren desde Tours. El castillo y el Clos Lucé están cerca, a pie.",
        quando: "Por la mañana.",
        tempo: "media jornada",
        costo: "Clos Lucé 20 € entrada general (2026).",
        url: "https://www.vinci-closluce.com/",
        consiglio: "La tumba de Leonardo está en la capilla de Saint-Hubert, en los terrenos del castillo."
      },
      {
        nome: "Azay-le-Rideau y Cheverny",
        testo: "Azay-le-Rideau es un castillo en una isla del Indre que se refleja en el agua. Cheverny lo habita desde hace siglos la misma familia y está amueblado.",
        come: "En coche desde Tours; Cheverny está al sur de Blois, no lejos de Chambord.",
        quando: "Por la mañana.",
        tempo: "2 horas cada uno",
        consiglio: "Cheverny tiene una perrera de perros de caza: la hora de la comida es una atracción."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Chambord por la mañana",
          "Comida en Blois",
          "Chenonceau por la tarde"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Chambord y Cheverny",
          "Día 2: Chenonceau y Amboise"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Chambord",
          "Día 2: Chenonceau y Villandry",
          "Día 3: Amboise, Clos Lucé y Azay-le-Rideau"
        ]
      }
    ],
    zone: [
      {
        nome: "Tours",
        perChi: "si se usan trenes",
        testo: "Ciudad grande y bien conectada, con hoteles y restaurantes."
      },
      {
        nome: "Amboise",
        perChi: "para un pueblo del Loira",
        testo: "Centro pequeño con el castillo y el Clos Lucé a pie."
      },
      {
        nome: "Blois",
        perChi: "para Chambord y Cheverny",
        testo: "Base cómoda para los castillos del este."
      }
    ],
    sapori: [
      {
        nome: "Rillettes de Tours",
        testo: "Cerdo hervido y desmenuzado, untado en pan."
      },
      {
        nome: "Vinos del Loira",
        testo: "Vouvray, Chinon y Sancerre, en bodegas y restaurantes."
      },
      {
        nome: "Tarte Tatin",
        testo: "Tarta de manzana invertida, nacida en Lamotte-Beuvron."
      },
      {
        nome: "Quesos de cabra",
        testo: "Sainte-Maure y Valençay, típicos de la zona."
      }
    ],
    attenzioni: [
      "No hacer más de un castillo por la mañana y uno por la tarde: después del tercero se deja de mirar.",
      "Muchos castillos cierran en invierno o a mediodía: comprobar los horarios.",
      "El alquiler de bicis es cómodo pero se notan las cuestas y el viento: valorar las distancias entre castillos."
    ],
    esperienzeSlugs: ['chambord', 'chenonceau', 'loira-in-bicicletta', 'cantina-troglodita-loira'],
    tripSlugs: ['castelli-loira'],
    imageAlt: "El castillo de Amboise sobre las casas de la ciudad, reflejado en las aguas del Loira",
    immagine: '/images/francia/castelli-loira.jpg',
  },
  {
    slug: 'bordeaux',
    paeseSlug: 'francia',
    ordine: 6,
    nome: "Burdeos y sus viñedos",
    tipologia: ['vino', 'città', 'costa'],
    giorniConsigliati: "6-8 días",
    visitataPersonalmente: true,
    introduzione:
      "La ciudad es un conjunto urbanístico del siglo XVIII que la UNESCO inscribió como «Puerto de la Luna», y durante años fue la mayor área urbana inscrita del mundo. Alrededor se extiende el viñedo con denominación más extenso de Francia, más de cien mil hectáreas, ordenado en una jerarquía de clasificaciones que se remonta a 1855 y que todavía hoy es la referencia del mercado mundial del vino.",
    percheAndarci:
      "Es el único lugar del mundo donde se ve en vivo cómo un vino se ha convertido en un bien financiero: la clasificación de 1855, los castillos-bodega, los mercados a plazo, los precios. Y a una hora de los viñedos está la Cuenca de Arcachon, con la duna de arena más alta de Europa.",
    cosaVedere: [
      "**Place de la Bourse** con delante el **Miroir d'eau**, una lámina de agua de pocos milímetros que refleja la fachada del siglo XVIII y a intervalos se transforma en niebla",
      "El centro del siglo XVIII: la **Grosse Cloche**, la catedral de Saint-André con la **Tour Pey-Berland**, que hay que subir por la panorámica, la basílica de Saint-Michel y la **rue Sainte-Catherine**, una de las calles peatonales más largas de Europa",
      "El barrio de los **Chartrons**, donde estaban los comerciantes de vino, con los almacenes reconvertidos",
      "La **Cité du Vin**, el museo del vino asomado al Garona",
      "**Saint-Émilion**, patrimonio de la UNESCO desde 1999 como **primer paisaje vitivinícola inscrito del mundo**, con la **iglesia monolítica excavada en la roca**, la mayor de Europa en su género, y las catacumbas bajo el pueblo",
      "El **Médoc** con los castillos-bodega en fila a lo largo de la ruta de los vinos, y al sur los **Graves y el Sauternes**",
      "La **Dune du Pilat**, la duna de arena más alta de Europa, que avanza unos metros al año hacia el interior tragándose el pinar",
      "La **Cuenca de Arcachon** con las ostras, el Cap Ferret y las cabañas sobre pilotes de la Île aux Oiseaux",
    ],
    cosaFare: [
      "Una **cata en Saint-Émilion** con la visita a la iglesia monolítica (hay una ficha de experiencia dedicada)",
      "Visitar un **château del Médoc con cita previa**, sabiendo que los grandes nombres se reservan con semanas de antelación",
      "Entender el **Sauternes**: el moho noble, las nieblas de la mañana y la vendimia por pasadas sucesivas (hay una ficha de experiencia dedicada)",
      "Subir a la **Dune du Pilat** al atardecer y comer **ostras de Arcachon** en las cabanes de los productores",
      "Recorrer en bici un tramo de los carriles bici de las Landas, entre los más extensos de Francia",
    ],
    doveDormire:
      "La base adecuada es la **ciudad de Burdeos**: bonita, viva, con un tranvía que funciona, y desde allí todas las zonas se alcanzan en menos de una hora. **Saint-Émilion** es bellísima y cara, y por la noche el pueblo se vacía del todo. **Arcachon o el Cap Ferret** para el mar, con precios muy altos en julio y agosto.",
    doveMangiare:
      "La cocina bordelesa gira en torno a la carne y el vino: la **entrecôte à la bordelaise** con salsa de vino tinto y tuétano, la **ternera de Bazas**, la **lamproie** (una especialidad de río que divide), las **ostras de Arcachon**, servidas por tradición con pequeñas salchichas calientes, y el **canelé**, el dulce de masa densa con la corteza caramelizada nacido aquí. También en Burdeos el **menú del mediodía** cuesta una fracción del de la noche.",
    comeArrivare:
      "Alta velocidad desde París en unas dos horas. El aeropuerto de **Burdeos-Mérignac** está conectado con el centro. Para los viñedos **hace falta coche**, con una advertencia seria, aquí debajo.",
    comeSpostarsi:
      "En la ciudad, tranvía y bici. Para los viñedos hace falta coche, y ahí está el problema de todo viaje del vino: **en Francia los controles de alcohol al volante son frecuentes y el límite es bajo**, para los conductores noveles más bajo que en Italia, con sanciones pesadas. Las soluciones son tres: **un conductor designado que no prueba**, las **excursiones guiadas de un día** que salen de Burdeos, o bien **escupir durante las catas**. Es la práctica normal y nadie se ofende: en las bodegas serias la escupidera siempre está, y se espera que se use.",
    periodoMigliore:
      "**de mayo a octubre**, y el mejor periodo es **septiembre-octubre**, por la vendimia. Desde mediados de septiembre las bodegas están en plena actividad y algunas reducen las visitas porque están trabajando: **conviene preguntar antes**. Julio y agosto son calurosos y la costa está llena. El invierno es tranquilo, y muchas propiedades suspenden las visitas.",
    costi:
      "La ciudad está en la media francesa; las catas van de lo gratuito a lo muy caro según el nivel de la propiedad. La verdadera diferencia está entre las **bodegas que reciben sin cita** en las denominaciones menores, donde se gasta poco, y los **grand cru classé**, donde la visita es un producto en sí, con precios importantes y reserva obligatoria.",
    erroriDaEvitare: [
      "**Presentarse en los grandes châteaux sin cita.** Los nombres conocidos se reservan con semanas de antelación, y muchos no reciben al público",
      "Conducir después de haber probado. Escupir es la norma; quien no quiera hacerlo que reserve una excursión guiada",
      "Hacer solo los grandes nombres: las denominaciones satélite alrededor de Saint-Émilion y las zonas menos clasificadas ofrecen visitas más auténticas y cuestan una fracción",
      "Ir a Saint-Émilion solo para la cata: **la iglesia monolítica y las catacumbas solo se visitan con una visita guiada reservada en la oficina de turismo**, y son el motivo por el que el pueblo es patrimonio de la UNESCO",
      "Subestimar la Dune du Pilat: se sube por arena empinada, y en verano la arena quema",
      "Bañarse en el océano sin informarse: **en la costa atlántica las corrientes de resaca son peligrosas**, y las playas vigiladas tienen un perímetro señalizado que hay que respetar",
    ],
    confronti: [
      {
        titolo: "Orilla izquierda u orilla derecha: qué Burdeos",
        introduzione:
          "El Garona y el Dordoña dividen el viñedo bordelés en dos mundos, con suelos, variedades y paisajes distintos, y maneras distintas de recibir a quien visita. Quien tiene pocos días debe elegir uno.",
        opzioni: [
          {
            nome: "Orilla izquierda: el Médoc",
            sintesi: "Suelos de grava, Cabernet Sauvignon dominante, los castillos-bodega de la clasificación de 1855 en fila a lo largo de una sola carretera.",
            costo: "de alto a altísimo para las visitas a los crus clasificados",
            durata: "1-2 días",
            pro: [
              "Es la historia del vino como sistema económico: la **clasificación de 1855**, redactada para la Exposición Universal según los precios de mercado, sigue hoy casi inalterada",
              "Los castillos son arquitecturas de representación, y verlos en fila a lo largo de la carretera es un espectáculo en sí",
              "Las bodegas están organizadas para recibir: visitas estructuradas, a menudo en varias lenguas",
            ],
            contro: [
              "El paisaje es plano y repetitivo: quien espera colinas se lleva una decepción",
              "Las visitas a los grandes nombres cuestan caras y hay que reservarlas con mucha antelación",
              "En los pueblos hay poca vida: se visita y se vuelve a Burdeos",
            ],
            perChi: "Quien se interesa por el vino como sistema, por los grandes tintos de guarda y por la historia de las clasificaciones.",
          },
          {
            nome: "Orilla derecha: Saint-Émilion y Pomerol",
            sintesi: "Arcilla y caliza, Merlot dominante, colinas de verdad, y un pueblo medieval patrimonio de la UNESCO construido sobre una red de galerías.",
            costo: "medio-alto, con muchas pequeñas propiedades accesibles",
            durata: "1-2 días",
            pro: [
              "**Saint-Émilion es un pueblo bellísimo**, y la visita va más allá del vino: la iglesia monolítica excavada en la roca no tiene igual en Europa por tamaño",
              "El paisaje es de colinas y mucho más fotogénico que el del Médoc",
              "Cientos de pequeñas propiedades reciben, a menudo con visitas más personales y menos caras",
              "Pomerol, minúscula, produce en pocas hectáreas algunos de los vinos más caros del mundo, y se atraviesa en coche",
            ],
            contro: [
              "En temporada alta Saint-Émilion está muy concurrida en las horas centrales",
              "En el pueblo los aparcamientos son pocos y de pago",
            ],
            perChi: "Quien tiene un solo día, quien quiere unir el vino a la visita de un lugar, quien prefiere los tintos más suaves. Es la opción que recomiendo para la primera vez.",
          },
          {
            nome: "Graves y Sauternes",
            sintesi: "Al sur de la ciudad: los tintos y los blancos secos de los Graves y, más abajo, el Sauternes con los vinos dulces de moho noble.",
            costo: "medio, con algunas excepciones muy altas",
            durata: "una jornada",
            pro: [
              "El **Sauternes** tiene la historia enológica más fascinante de la región: **las nieblas de la mañana, nacidas donde un afluente frío encuentra un río más cálido, crean las condiciones para la Botrytis cinerea**, el moho noble, que concentra los azúcares en las uvas. La vendimia se hace **a mano y por pasadas sucesivas**, uva a uva, recogiendo solo las que están en su punto",
              "Los rendimientos son bajísimos: se dice que de una cepa sale una copa",
              "Mucho menos visitado que el Médoc y Saint-Émilion",
              "En los Graves, a las puertas de la ciudad, está el único château clasificado en 1855 fuera del Médoc",
            ],
            contro: [
              "El vino dulce tiene un público más reducido, y quien no lo ama encuentra poco más",
              "Las propiedades están dispersas y hace falta coche",
            ],
            perChi: "Quien tiene al menos tres días para los viñedos, quien se interesa por la viticultura más que por las etiquetas.",
          },
          {
            nome: "La ciudad de Burdeos y la Cuenca de Arcachon",
            sintesi: "La versión sin viñedos: la ciudad del siglo XVIII, la Cité du Vin, y una hora de tren hasta el océano, las ostras y la duna.",
            costo: "medio",
            durata: "2-3 días",
            pro: [
              "Burdeos se recorre a pie y en tranvía, es una de las ciudades más bonitas de Francia y no hace falta coche",
              "La **Cité du Vin** explica el vino de todo el mundo, no solo el local, y resuelve el problema de quien no conduce",
              "La **Dune du Pilat** y la Cuenca de Arcachon se alcanzan en tren y son una jornada totalmente distinta",
              "Las **ostras en las cabanes de los productores**, sentados en el embarcadero, cuestan poco y son la mejor comida de la zona",
            ],
            contro: [
              "No es un viaje del vino: se ve el producto, no el territorio",
            ],
            perChi: "Quien no conduce, quien viaja con alguien que no bebe, quien tiene un fin de semana.",
          },
        ],
        raccomandazione:
          "En una semana: **dos noches en la ciudad de Burdeos**, **una jornada en Saint-Émilion** con la iglesia monolítica reservada, **una en el Médoc** con dos châteaux con cita, **una en el Sauternes** y **dos días en la Cuenca de Arcachon** para cerrar con el océano. Quien tenga tres días que haga la ciudad y Saint-Émilion, y deje el resto.",
      },
    ],
    miaEsperienza:
      "Burdeos reúne dos cosas que normalmente no se llevan bien: la ciudad se recorre a pie, el territorio sin coche no se ve. La primera sorpresa es justamente la ciudad. Tiene fama de lugar serio y aburrido, y en cambio es uno de los conjuntos urbanos más bonitos de Francia: kilómetros de fachadas del siglo XVIII de la misma piedra clara, mantenidas limpias, y una vida estudiantil que le impide convertirse en un museo. La segunda es lo poco que se parece el viñedo a la imagen que uno tiene de él. En el Médoc no hay colinas: es una llanura de grava con los castillos en fila a lo largo de una carretera, y el encanto está en entender qué hace esa grava. Drena, calienta, y hace que una cepa a doscientos metros de distancia dé un vino que vale diez veces más que el otro. La tercera cosa, la que me ha quedado, es el Sauternes. Llegamos a una propiedad en septiembre y nos enseñaron los racimos: horribles, uvas arrugadas y cubiertas de moho gris, que cualquier agricultor normal tiraría. Sin embargo es justo lo que esperaban todo el año, y la cuadrilla vuelve a pasar por la misma hilera cinco o seis veces, en semanas distintas, para recoger solo las uvas que han llegado a su punto. Es una de las cosas más contraintuitivas de la agricultura europea, y para creerla hay que verla en el sitio.",
    luoghi: [
      {
        nome: "Place de la Bourse y Miroir d'eau",
        testo: "La plaza dieciochesca sobre el Garona y, delante, el Miroir d'eau: losas de granito cubiertas por 2 centímetros de agua que reflejan la fachada y de vez en cuando se convierten en niebla. Funciona de abril a octubre.",
        come: "A pie desde el centro o tranvía hasta la parada Place de la Bourse.",
        quando: "Atardecer o noche, cuando la fachada está iluminada.",
        tempo: "45 minutos",
        consiglio: "Para fotos, caminar por el borde del agua cuando está llena."
      },
      {
        nome: "Centro histórico y torre Pey-Berland",
        testo: "Fachadas del siglo XVIII de piedra clara, la catedral de Saint-André y la torre exenta Pey-Berland, que se sube por la vista.",
        come: "A pie desde el tranvía, con la Grosse Cloche y la rue Sainte-Catherine.",
        quando: "Por la mañana.",
        tempo: "media jornada",
        consiglio: "La rue Sainte-Catherine está llena de tiendas; las callejuelas laterales tienen más carácter."
      },
      {
        nome: "La Cité du Vin",
        testo: "Museo del vino sobre el Garona en un edificio en forma de copa. El recorrido explica las regiones del mundo y termina con una copa en el mirador de la planta alta.",
        come: "Tranvía B hasta Cité du Vin.",
        quando: "Por la tarde.",
        tempo: "2-3 horas",
        consiglio: "La copa final se bebe en el mirador de la planta alta con vistas al río."
      },
      {
        nome: "Saint-Émilion",
        testo: "Un pueblo medieval entre viñedos, patrimonio UNESCO desde 1999 como paisaje vitivinícola. La iglesia monolítica está excavada en la roca.",
        come: "Tren directo desde Burdeos Saint-Jean. La iglesia monolítica se visita con guía: información en la oficina de turismo.",
        quando: "Por la mañana o al final de la tarde.",
        tempo: "media jornada",
        consiglio: "Caminar entre las viñas justo a las afueras del pueblo."
      },
      {
        nome: "Médoc y los castillos",
        testo: "La ruta del vino al norte, con castillos-bodega en fila (Margaux, Pauillac, Saint-Julien).",
        come: "En coche desde Burdeos hacia el norte. Las catas se reservan.",
        quando: "Primavera y otoño, vendimia en septiembre-octubre.",
        tempo: "día completo",
        consiglio: "Hace falta un conductor que no beba, o una excursión organizada."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Centro histórico por la mañana",
          "Miroir d'eau",
          "Cité du Vin por la tarde",
          "Cena en un bistró de Chartrons"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: ciudad y Cité du Vin",
          "Día 2: Saint-Émilion o Médoc"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro histórico",
        perChi: "para todo a pie",
        testo: "Alojamiento cerca del tranvía, animado también por la noche."
      },
      {
        nome: "Chartrons",
        perChi: "para un barrio menos turístico",
        testo: "Antiguos almacenes de vino, con bistrós y anticuarios."
      },
      {
        nome: "Saint-Émilion",
        perChi: "para dormir entre viñas",
        testo: "Pocas habitaciones, bonitas pero más caras."
      }
    ],
    sapori: [
      {
        nome: "Vino de Burdeos",
        testo: "Tintos de Médoc y Saint-Émilion; blancos dulces de Sauternes."
      },
      {
        nome: "Canelés",
        testo: "Pequeños pasteles de ron y vainilla con corteza caramelizada."
      },
      {
        nome: "Entrecôte a la bordelesa",
        testo: "Solomillo con salsa de vino tinto y tuétano."
      },
      {
        nome: "Ostras de Arcachon",
        testo: "Pequeñas, se comen con limón y pan con mantequilla."
      }
    ],
    attenzioni: [
      "Las catas en los castillos del Médoc se reservan: muchos no reciben sin cita.",
      "El Miroir d'eau se detiene en invierno o durante el mantenimiento: comprobar.",
      "El aparcamiento en el centro es caro y escaso: usar el tranvía y los aparcamientos de disuasión."
    ],
    esperienzeSlugs: ['saint-emilion', 'sauternes-muffa-nobile', 'dune-du-pilat', 'ostriche-arcachon'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: "La Place de la Bourse de Burdeos iluminada de noche y reflejada en el Miroir d'eau",
    immagine: '/images/francia/bordeaux.jpg',
  },
  {
    slug: 'vigneti-di-francia',
    paeseSlug: 'francia',
    ordine: 7,
    nome: "Las rutas del vino",
    tipologia: ['vino', 'paesaggi', 'gastronomia'],
    giorniConsigliati: "4-5 días por región, 12-14 para una ruta larga",
    visitataPersonalmente: true,
    introduzione:
      "Francia inventó el **terroir**, la idea de que un vino debe decir de qué trozo de tierra viene y de que ese trozo puede medir dos hectáreas, y sobre esa idea construyó un sistema de denominaciones que el resto del mundo ha copiado. Aquí las regiones se comparan para ayudar a elegir una: Champaña, Borgoña, Alsacia y el Ródano tienen paisajes, precios, accesibilidad y maneras de recibir completamente distintos.",
    percheAndarci:
      "En Borgoña un muro de piedra seca separa dos parcelas cuyos vinos cuestan uno diez veces más que el otro, y solo yendo a ver ese muro se cree en el terroir. En Champaña se baja a galerías excavadas por los romanos para extraer la creta y reutilizadas dos mil años después para madurar el vino.",
    cosaVedere: [
      "**Champaña**: Reims con la catedral de las coronaciones y las vidrieras de Chagall, la **Avenue de Champagne** en Épernay con kilómetros de galerías bajo la calle, las **crayères** (canteras de creta de época galorromana usadas como bodegas) y las colinas patrimonio de la UNESCO desde 2015",
      "**Borgoña**: la Côte de Nuits y la Côte de Beaune, con los **climats** inscritos en la UNESCO en 2015, más de mil doscientas parcelas delimitadas y con nombre, algunas de pocas hectáreas; el **Hôtel-Dieu de Beaune** con el tejado de tejas polícromas y la subasta de vinos de noviembre; el **Clos de Vougeot**",
      "**Alsacia**: la Route des Vins, unos ciento setenta kilómetros entre los Vosgos y la llanura, con **Colmar**, **Riquewihr**, **Eguisheim** y **Kaysersberg**, y en Colmar el **Museo Unterlinden** con el retablo de Isenheim",
      "**Valle del Ródano**: al norte las laderas aterrazadas de **Côte-Rôtie** y **Hermitage**, entre las más empinadas de Europa; al sur **Châteauneuf-du-Pape** con sus **galets roulés**, los guijarros redondos que de día acumulan calor y de noche lo devuelven",
      "**El Jura**, minúsculo y fuera de todo circuito, con el **vin jaune** que madura seis años y tres meses en barrica bajo un velo de levaduras, sin rellenado",
    ],
    cosaFare: [
      "Bajar a una **bodega de Champaña** excavada en la creta y ver el remuage (hay una ficha de experiencia dedicada)",
      "Recorrer la **Route des Vins d'Alsace** parando en los pueblos (hay una ficha de experiencia dedicada)",
      "Caminar entre los muros de piedra seca de los **climats de la Côte de Nuits**: es gratis y vale lo que una cata",
      "Ver las **terrazas de la Côte-Rôtie**, donde se vendimia en pendientes que requieren cabrestantes",
      "Ir a la **vendimia**, entre finales de agosto y octubre, cuando las bodegas están trabajando y se ve lo que ocurre",
    ],
    doveDormire:
      "Cada región tiene su lógica. En **Champaña**, Reims o Épernay; en **Borgoña** la base perfecta es **Beaune**, en el centro de la Côte; en **Alsacia**, Colmar o uno de los pueblos de la Route des Vins; en el **Ródano**, Aviñón o Valence según la vertiente. En todas partes hay **chambres d'hôtes en las propiedades vinícolas**, que cuestan menos que los hoteles y a menudo incluyen una cata.",
    doveMangiare:
      "Cada región tiene una cocina construida alrededor de sus vinos. En **Borgoña**: boeuf bourguignon, oeufs en meurette, jambon persillé, escargots, y los quesos Époisses y Cîteaux. En **Alsacia**: choucroute, baeckeoffe, **tarte flambée** (una masa finísima con nata agria, cebolla y panceta, cocida en horno de leña), kougelhopf, bretzel. En **Champaña**: el jambon de Reims y las galletas rosas para mojar en el vino. En el **Ródano**: la cocina lionesa al norte (quenelle, andouillette, bouchons) y la provenzal al sur.",
    comeArrivare:
      "Reims está a cuarenta y cinco minutos de París en alta velocidad, y es la ruta del vino más fácil de alcanzar sin coche. Dijon y Beaune están a una hora y media-dos horas, Estrasburgo y Colmar a dos horas. Para el Ródano se llega a Lyon, Valence o Aviñón. **Para moverse entre las bodegas hace falta coche de todos modos**, salvo en Champaña y en Alsacia, donde hay alternativas.",
    comeSpostarsi:
      "**Coche, con un conductor que no prueba**, o bien **excursiones guiadas de un día**, que existen en todas estas regiones y resuelven el problema. Dos alternativas que funcionan: en **Alsacia** la Route des Vins se hace estupendamente **en bicicleta**, porque los pueblos distan pocos kilómetros y hay una red ciclable; en **Borgoña** un carril bici a lo largo de la Côte conecta los pueblos del viñedo. **Escupir durante las catas es la norma profesional, y nadie se ofende.**",
    periodoMigliore:
      "**septiembre y octubre**, por la vendimia y los colores. Conviene saber que **durante la vendimia muchas propiedades suspenden o reducen las visitas** porque están trabajando, así que conviene preguntar antes. **Mayo y junio** son excelentes para el paisaje y más fáciles para las reservas. La **Alsacia en diciembre** es un caso aparte: los mercadillos de Navidad (el de Estrasburgo es el más antiguo de Francia) llenan los pueblos y hacen subir los precios.",
    costi:
      "Muy variables. En Champaña y en Borgoña las visitas a las grandes maisons y a los domaines más conocidos son caras y hay que reservarlas; en las denominaciones menores y con los pequeños productores se gasta poco o nada. **Borgoña es la región más difícil y más cara de todas**: muchos domaines no reciben al público, y los que lo hacen quieren ser contactados antes.",
    erroriDaEvitare: [
      "**Presentarse sin cita.** En Francia las bodegas no son tiendas: la visita se acuerda, y en Borgoña a menudo no se consigue",
      "Ir en vendimia sin preguntar antes: es el periodo más bonito, y es aquel en el que muchos productores no reciben",
      "Conducir después de las catas. Escupir es la práctica; como alternativa, conductor designado o excursión guiada",
      "Tratar Borgoña como Burdeos: aquí las propiedades son minúsculas, a menudo de gestión familiar, y la escala es totalmente distinta",
      "Comprar en bodega pensando en ahorrar: en los grandes nombres el precio en bodega casi nunca es más bajo",
      "Ignorar las denominaciones menores, donde se bebe mejor en relación con el precio y se es mejor acogido",
    ],
    confronti: [
      {
        titolo: "Qué región vinícola francesa elegir",
        introduzione:
          "Son viajes distintos. Cambian el paisaje, la accesibilidad de las bodegas, el coste, la dificultad de reservar e incluso la lengua que se oye en los pueblos. Para quien debe elegir una, así se dividen.",
        opzioni: [
          {
            nome: "Champaña",
            sintesi: "Colinas UNESCO a cuarenta y cinco minutos de París, con kilómetros de galerías excavadas en la creta bajo las ciudades y las grandes maisons organizadas para recibir.",
            costo: "medio-alto para las visitas a las grandes maisons, bajo con los pequeños viticultores",
            durata: "2-3 días",
            pro: [
              "La más fácil de todas de alcanzar y de organizar: se hace incluso en el día desde París",
              "Las **crayères**, canteras de creta galorromanas de decenas de metros de profundidad y reutilizadas como bodegas, merecen la visita incluso al margen del vino",
              "El proceso es fascinante de ver: segunda fermentación en botella, remuage, degüelle",
              "Las maisons están preparadas para el público, con visitas en varias lenguas y horarios seguros",
              "Reims tiene una catedral gótica de primer nivel, donde se coronaba a los reyes de Francia",
            ],
            contro: [
              "Es la región más «industrial» en su modo de recibir: la visita a las grandes casas es un producto bien empaquetado",
              "El paisaje es bonito, pero menos espectacular que Alsacia y Borgoña",
              "Precios altos, sin término medio entre la gran maison y el pequeño viticultor",
            ],
            perChi: "Quien tiene pocos días, quien parte de París, quien quiere entender un método de producción.",
          },
          {
            nome: "Borgoña",
            sintesi: "La región que inventó la idea de parcela: más de mil doscientos **climats** delimitados y con nombre, patrimonio de la UNESCO, en una franja de colinas de unos sesenta kilómetros de largo.",
            costo: "alto, y los vinos están entre los más caros del mundo",
            durata: "3-4 días",
            pro: [
              "Aquí el terroir se toca con la mano: **dos parcelas separadas por un muro de piedra seca producen vinos de precio incomparable**, y se puede caminar entre ellas gratis",
              "El **Hôtel-Dieu de Beaune**, hospital para pobres del siglo XV con el tejado de tejas esmaltadas, es uno de los monumentos más bonitos de Francia",
              "El carril bici a lo largo de la Côte permite atravesar los grandes crus en bicicleta",
              "La cocina borgoñona es una de las más sólidas del país",
            ],
            contro: [
              "**Es la más difícil de visitar**: casi todos los domaines son pequeñísimos, no tienen estructura para el público y no reciben sin un contacto previo",
              "Los precios de los vinos están fuera de escala, y las catas a menudo decepcionan a quien esperaba probar los nombres conocidos",
              "El paisaje es suave, pero monótono para quien busca escenografía",
            ],
            perChi: "Quien ya conoce el vino y viene a entenderlo, más que a probar al azar. No es la ruta del vino con la que empezar.",
          },
          {
            nome: "Alsacia",
            sintesi: "Ciento setenta kilómetros de ruta del vino entre los Vosgos y la llanura, con pueblos de casas con entramado de madera, geranios en las ventanas y una cultura a medio camino entre Francia y Alemania.",
            costo: "el más bajo entre las grandes regiones vinícolas",
            durata: "3-5 días",
            pro: [
              "**Es la más bonita de recorrer**: los pueblos son escenográficos casi en exceso, y son de verdad, no reconstruidos",
              "Las bodegas reciben con facilidad, a menudo sin cita, y las catas son gratuitas o casi",
              "Se hace **en bicicleta**: los pueblos distan pocos kilómetros y la red ciclable es excelente",
              "Los blancos (Riesling, Gewurztraminer, Pinot Gris, Muscat) están entre los más interesantes de Europa y cuestan poco",
              "Cultura, cocina y lengua propias: aquí todavía se habla alsaciano, y los carteles son bilingües",
            ],
            contro: [
              "Algunos pueblos, Riquewihr sobre todo, en las horas centrales están llenos de turistas",
              "En diciembre, con los mercadillos de Navidad, los precios suben y los pueblos están llenos",
              "Quien busque grandes tintos no encontrará nada: es tierra de blancos",
            ],
            perChi: "Quien va por primera vez a una región vinícola francesa, quien viaja en familia, quien tiene presupuesto ajustado. **Es la opción que recomiendo a quien no sabe por dónde empezar.**",
          },
          {
            nome: "Valle del Ródano",
            sintesi: "Dos regiones en una: al norte laderas aterrazadas vertiginosas de Syrah, al sur una meseta de guijarros con Châteauneuf-du-Pape y el mistral.",
            costo: "medio, con amplias franjas accesibles",
            durata: "3-4 días",
            pro: [
              "El **Ródano septentrional** tiene los viñedos más escenográficos de Francia: terrazas de piedra seca en pendientes tales que se vendimia con cabrestantes",
              "El **Ródano meridional** está a mano desde Aviñón y se une fácilmente a la Provenza",
              "Los **galets roulés** de Châteauneuf-du-Pape, un campo de guijarros redondos donde parece imposible que crezca algo, son una lección de viticultura a simple vista",
              "Mucho más accesible que Borgoña y menos caro que Burdeos",
            ],
            contro: [
              "El norte y el sur están lejos: para hacer ambos hay que desplazarse bastante",
              "El mistral puede soplar durante días y cambia el viaje",
            ],
            perChi: "Quien une el vino a la Provenza, quien ama los tintos estructurados, quien quiere paisajes vertiginosos.",
          },
          {
            nome: "Loira",
            sintesi: "La región vinícola más variada de Francia, extendida a lo largo de cientos de kilómetros junto al río, con las bodegas excavadas en la toba y los castillos al lado.",
            costo: "bajo",
            durata: "se une a los castillos",
            pro: [
              "Una variedad enorme: blancos secos, dulces, tintos ligeros y espumosos en el mismo valle",
              "Las **bodegas trogloditas**, excavadas en la misma roca con la que se construyeron los castillos",
              "Costes bajos y acogida sencilla",
              "Se une sin esfuerzo a los castillos: es el mismo viaje",
            ],
            contro: [
              "Está dispersa a lo largo de cientos de kilómetros: no hay una «ruta» compacta",
              "Ninguna denominación tiene el peso simbólico de Champaña o Borgoña",
            ],
            perChi: "Quien va al Loira por los castillos y quiere añadir el vino sin organizar un viaje aparte.",
          },
          {
            nome: "Burdeos",
            sintesi: "El viñedo con denominación más extenso de Francia, con la jerarquía de 1855 y los castillos-bodega. En el sitio hay un itinerario dedicado.",
            costo: "de medio a muy alto",
            durata: "4-6 días",
            pro: [
              "La historia del vino como sistema económico y financiero, que en otros sitios no se entiende",
              "La ciudad de Burdeos es una de las más bonitas de Francia y no hace falta coche",
              "Saint-Émilion une vino y patrimonio de la UNESCO",
            ],
            contro: [
              "Las grandes propiedades son caras y hay que reservarlas con mucha antelación",
              "El paisaje del Médoc es plano y repetitivo",
            ],
            perChi: "Quien se interesa por los grandes tintos de guarda y por el vino como mercado.",
          },
        ],
        raccomandazione:
          "La primera vez, **Alsacia**: es la más bonita, la más económica, la más fácil de visitar sin citas, y se hace en bicicleta. **Champaña** si se tienen dos días y se parte de París. **Borgoña** solo cuando ya se sabe lo que se busca, y tras haber escrito a los domaines con semanas de antelación. **Burdeos** si interesa el vino como sistema, además de como bebida.",
      },
    ],
    miaEsperienza:
      "Mi manera de mirar el vino francés cambió caminando, más que en una bodega. En Borgoña, a lo largo de la Côte de Nuits, un sendero pasa entre los viñedos y atraviesa los grandes crus uno tras otro, con los carteles de piedra en la esquina de cada parcela. En veinte minutos a pie se pasa de una denominación regional a un grand cru que vale cien veces más, y en medio hay un muro de piedra seca de un metro de alto. El terreno a los dos lados parece idéntico. No lo es: cambian la pendiente, el drenaje, la exposición al sol de la mañana. Pero la diferencia es tan sutil que resulta invisible, y solo el vino la registra. En Italia la idea existe, pero nadie la ha codificado nunca así, y verla dibujada sobre el terreno con los muretes es la lección más útil de todo el viaje. El otro descubrimiento es que las regiones tratan a quien llega de maneras opuestas. En Alsacia entras en la bodega, te acogen, pruebas seis vinos, pagas poco o nada y charlas. En Borgoña la misma petición, sin un contacto tomado semanas antes, recibe un no amable: el productor hace diez mil botellas al año, ya las ha vendido todas, y recibir visitantes no es su trabajo. Saberlo antes evita confundir con descortesía una cuestión de escala.",
    luoghi: [
      {
        nome: "Champaña: Reims y Épernay",
        testo: "La catedral de Reims, donde se coronaba a los reyes, con las vidrieras de Chagall. En Épernay la Avenue de Champagne tiene kilómetros de galerías excavadas en la tiza bajo las casas de las grandes maisons.",
        come: "Tren desde París Este a Reims; de Reims a Épernay en tren regional.",
        quando: "Primavera y otoño; vendimia a finales de agosto-septiembre.",
        tempo: "1-2 días",
        consiglio: "Las visitas a bodegas se reservan: muchas no reciben sin cita."
      },
      {
        nome: "Borgoña: Côte de Nuits y Côte de Beaune",
        testo: "Los climats de Borgoña, pequeñas parcelas de viña delimitadas con precisión, inscritos por la UNESCO en 2015. En Beaune, los Hospices con su tejado de tejas de colores.",
        come: "Tren de París a Dijon, luego coche o bici por la Route des Grands Crus.",
        quando: "Primavera y otoño.",
        tempo: "2 días",
        consiglio: "El carril bici de la Voie des Vignes sale de Beaune y recorre los viñedos hacia el sur."
      },
      {
        nome: "Alsacia: la Ruta del Vino",
        testo: "Unos 170 km de carretera entre los Vosgos y la llanura, con pueblos de entramado como Colmar, Riquewihr, Eguisheim y Kaysersberg.",
        come: "En coche desde Estrasburgo o Basilea. Trenes a Colmar.",
        quando: "Septiembre-octubre por los colores; diciembre por los mercados de Navidad.",
        tempo: "2 días",
        consiglio: "Eguisheim y Riquewihr son más tranquilos que Colmar."
      },
      {
        nome: "Valle del Ródano",
        testo: "Al norte las laderas en terrazas, muy empinadas, de Côte-Rôtie y Hermitage; al sur Châteauneuf-du-Pape, con los cantos rodados entre las hileras.",
        come: "Tren a Valence o Aviñón; luego coche o bici.",
        quando: "Primavera y otoño.",
        tempo: "1-2 días",
        consiglio: "Châteauneuf-du-Pape está cerca de Aviñón: se combina bien con una visita a la ciudad."
      },
      {
        nome: "Jura",
        testo: "Una región pequeña y fuera de los circuitos, famosa por el vin jaune, que entre vendimia y embotellado madura seis años y tres meses en barrica bajo un velo de levaduras, sin rellenar.",
        come: "En coche desde Besançon o Lons-le-Saunier.",
        quando: "Todo el año; la fiesta Percée du vin jaune entre finales de enero y principios de febrero.",
        tempo: "1 día",
        consiglio: "El vin jaune combina con el queso comté."
      }
    ],
    programmi: [
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Reims y la catedral, bodegas de Épernay",
          "Día 2: Avenue de Champagne y senderos entre viñas"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Beaune y los Hospices",
          "Día 2: Côte de Nuits en bici o coche",
          "Día 3: Dijon y regreso"
        ]
      }
    ],
    zone: [
      {
        nome: "Reims",
        perChi: "para Champaña",
        testo: "Ciudad con la catedral, restaurantes y bodegas en el centro."
      },
      {
        nome: "Beaune",
        perChi: "para Borgoña",
        testo: "Ciudad amurallada cerca de los viñedos y los mejores crus."
      },
      {
        nome: "Colmar",
        perChi: "para Alsacia",
        testo: "Centro de casas de entramado, base cómoda para la Ruta del Vino."
      }
    ],
    sapori: [
      {
        nome: "Champagne",
        testo: "Vino espumoso de las maisons de Reims y Épernay."
      },
      {
        nome: "Boeuf bourguignon",
        testo: "Ternera guisada en vino tinto con cebollas y setas."
      },
      {
        nome: "Choucroute alsaciana",
        testo: "Chucrut con salchichas y carne de cerdo."
      },
      {
        nome: "Vin jaune y comté",
        testo: "Un vino oxidativo del Jura con un queso curado."
      }
    ],
    attenzioni: [
      "No conducir después de las catas: llevar un conductor designado o usar bicis eléctricas.",
      "En la vendimia (septiembre-octubre) las bodegas están muy ocupadas: reservar con antelación.",
      "Muchas bodegas cierran a mediodía y los domingos: comprobar los horarios."
    ],
    esperienzeSlugs: ['cantina-champagne', 'route-des-vins-alsazia', 'climats-borgogna'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: "Las hileras de los viñedos grand cru de Verzenay en la Montagne de Reims, con la tierra clara de creta, Champaña",
    immagine: '/images/francia/vigneti-di-francia.jpg',
  },
  {
    slug: 'provenza',
    paeseSlug: 'francia',
    ordine: 8,
    nome: "Provenza",
    tipologia: ['paesaggi', 'borghi', 'archeologia'],
    giorniConsigliati: "6-8 días",
    visitataPersonalmente: true,
    introduzione:
      "En el imaginario la Provenza coincide con dos semanas de lavanda en flor. En realidad es un territorio enorme, con el cañón más profundo de Europa, la mayor concentración de monumentos romanos fuera de Italia, un parque nacional de acantilados calizos sobre el mar y una montaña pintada ochenta veces por el mismo pintor.",
    percheAndarci:
      "Aquí la luz cambió la historia de la pintura (Cézanne, Van Gogh, los fauves), y se entiende enseguida por qué: el mistral limpia el aire y los colores se saturan, casi de forma antinatural. Y a una hora una de otra hay un acueducto romano de casi cincuenta metros de altura y una garganta donde el agua es verde esmeralda entre paredes de setecientos metros.",
    cosaVedere: [
      "Las **Gargantas del Verdon**, el cañón más profundo de Europa, con el lago de Sainte-Croix a la salida y la carretera panorámica en el borde",
      "El **Luberon** con los pueblos encaramados: **Gordes**, **Roussillon** con las canteras de ocre y el sendero entre las tierras rojas, Ménerbes, Bonnieux, Lacoste",
      "La **meseta de Valensole** y la de **Sault**, los dos grandes paisajes de la lavanda, que florecen y se cortan en periodos distintos",
      "**Aviñón** con el **Palacio de los Papas**, el mayor palacio gótico del mundo, y el puente que quedó a medias",
      "**Arlés** con el **anfiteatro romano todavía en uso**, los Alyscamps y los lugares de Van Gogh, sabiendo sin embargo que **en la ciudad no hay ningún cuadro de Van Gogh**",
      "**Nîmes** con la **arena romana mejor conservada del mundo** y la **Maison Carrée**, inscrita en la UNESCO en 2023",
      "El **Pont du Gard**, patrimonio de la UNESCO: tres órdenes de arcos, casi cincuenta metros de altura, parte de un acueducto de unos cincuenta kilómetros con una **pendiente media de unos veinticinco centímetros por kilómetro**",
      "**Aix-en-Provence** con el Cours Mirabeau, el taller de **Cézanne** y la **Montagne Sainte-Victoire**, que él pintó decenas de veces",
      "**Marsella** con el Vieux-Port, el MuCEM, Le Panier y el **Parque Nacional de las Calanques**, acantilados calizos y ensenadas entre la ciudad y Cassis",
    ],
    cosaFare: [
      "Ver la **lavanda en el periodo y en el lugar adecuados**, una ventana mucho más estrecha de lo que se cree (hay una ficha de experiencia dedicada)",
      "Recorrer las **Gargantas del Verdon**, a pie por el fondo o en kayak desde el lago (hay una ficha de experiencia dedicada)",
      "Entrar en las **Calanques** desde Marsella o desde Cassis, por mar o a pie (hay una ficha de experiencia dedicada)",
      "Cruzar el **Pont du Gard** y bañarse en el río bajo los arcos",
      "Subir al **Mont Ventoux**, el «gigante de Provenza» y la subida más famosa del ciclismo francés, en bici o en coche",
      "Ir a un **mercado provenzal** el día adecuado: cada pueblo tiene el suyo, y es allí donde la región se muestra tal como es",
    ],
    doveDormire:
      "La Provenza es grande y conviene dividirla en dos bases. **Aviñón o Saint-Rémy** para la parte occidental: papas, romanos, Alpilles, Camarga. **Gordes, Bonnieux o Apt** para el Luberon; **Moustiers-Sainte-Marie** para el Verdon; **Cassis** para las Calanques. Marsella es una ciudad de verdad y una excelente base para quien no quiere conducir. En julio y agosto los precios suben mucho, sobre todo en el Luberon.",
    doveMangiare:
      "Cocina de verduras, aceite y hierbas: **ratatouille**, **tapenade**, **anchoïade**, **pissaladière**, **daube** de ternera al vino, **pieds et paquets** en Marsella, y la **bouillabaisse**. La auténtica es un plato de pescadores con pescados de roca y rascacio, servido en dos tiempos (primero el caldo con la rouille y las tostadas, luego el pescado), y cuesta cara por una razón: si cuesta poco, no es la auténtica. Los mercados están llenos de **melones de Cavaillon**, **aceitunas**, **quesos de cabra**, **miel de lavanda** y **hierbas provenzales**. Para beber, los rosados de la Provenza y los tintos del Ródano meridional.",
    comeArrivare:
      "El alta velocidad lleva de París a Aviñón en poco más de dos horas y a Marsella en unas tres. Hay aeropuertos en Marsella y Nîmes, además de Niza al este. **Para todo lo que no es una ciudad hace falta coche.**",
    comeSpostarsi:
      "**Coche**, con dos advertencias. La primera: **Marsella, Aix y otras ciudades tienen zonas de bajas emisiones donde hace falta la etiqueta Crit'Air**, que hay que pedir en línea semanas antes. La segunda: en temporada alta, en los pueblos del Luberon y en Moustiers, **los aparcamientos son pocos, de pago y están llenos a media mañana**.",
    periodoMigliore:
      "**mayo-junio y septiembre-octubre**, con una excepción importante. Quien viene **por la lavanda** tiene una ventana que va aproximadamente **de mediados de junio a principios de agosto**, distinta de una meseta a otra, y **el corte llega justo después de la floración**: con una semana de retraso se encuentran los campos ya cortados. Julio y agosto son calurosísimos, concurridos y caros, y en julio el **Festival de Aviñón** hace la ciudad impracticable para quien no va expresamente. El **mistral** puede soplar durante días seguidos en cualquier estación.",
    costi:
      "En la media francesa; el Luberon y las Calanques en temporada alta están por encima. Muchas de las mejores cosas son gratuitas o casi: los pueblos, los mercados, los senderos, los campos de lavanda. En el Pont du Gard se paga aparcamiento más museo; los monumentos romanos de Arlés y Nîmes tienen entradas combinadas convenientes.",
    erroriDaEvitare: [
      "**Venir por la lavanda en el periodo equivocado.** Es el error más frecuente: las ventanas de floración son breves y distintas entre Valensole y Sault, y después del corte no queda nada que ver",
      "Entrar en los campos de lavanda para hacer fotos: son **cultivos privados**, y en la abadía más fotografiada de la región los religiosos han pedido expresamente que no se haga",
      "**En verano, no comprobar si las Calanques están abiertas**: por el riesgo de incendios el parque **evalúa el riesgo día a día y decide los cierres el día anterior**, y algunas calanques son de **aforo limitado, con reserva gratuita obligatoria**",
      "Ir a Arlés esperando ver los cuadros de Van Gogh: en la ciudad no hay ninguno",
      "Llegar a Gordes o a Moustiers a mediodía en agosto y buscar aparcamiento",
      "Subestimar el calor: en julio el interior de la Provenza supera a menudo los treinta y cinco grados, y los senderos hay que hacerlos al amanecer",
      "Entrar en una zona de bajas emisiones sin la etiqueta Crit'Air",
    ],
    confronti: [
      {
        titolo: "La lavanda: dónde y cuándo",
        introduzione:
          "Para muchos es el motivo del viaje a la Provenza, y es también lo que sale mal más a menudo. La razón: con «lavanda» se indican dos plantas distintas, cultivadas a cotas distintas, que florecen en momentos distintos y se cortan pronto. Quien reserva en agosto pensando encontrar los campos morados llega casi siempre después de la siega.",
        opzioni: [
          {
            nome: "Meseta de Valensole: lavandín",
            sintesi: "Los campos amplísimos y regulares de las fotografías, a una cota bastante baja, cultivados con lavandín: un híbrido más productivo, de color más intenso y con las hileras más densas.",
            costo: "gratuito (son campos privados visibles desde la carretera)",
            durata: "floración aproximadamente de mediados de junio a mediados de julio, con corte justo después",
            pro: [
              "Es el paisaje que todos tienen en mente: hileras hasta el horizonte, color pleno",
              "Es fácil de alcanzar y está cerca del Verdon, así que se une al cañón sin esfuerzo",
              "Florece pronto: es la opción adecuada para quien viene en junio",
            ],
            contro: [
              "**Se corta pronto**, a menudo ya a mediados de julio: quien llega a finales de julio encuentra los rastrojos",
              "En las dos semanas de máximo está abarrotado, con filas de coches a lo largo de las carreteras",
              "El lavandín tiene un perfume menos fino que la lavanda verdadera",
            ],
            perChi: "Quien viene entre mediados de junio y los primeros días de julio y quiere la imagen clásica.",
          },
          {
            nome: "Meseta de Sault: lavanda verdadera",
            sintesi: "Por encima de los ochocientos metros, donde crece la lavanda fina, en campos más pequeños e irregulares a los pies del Mont Ventoux.",
            costo: "gratuito",
            durata: "floración más tardía, aproximadamente de mediados de julio a principios de agosto",
            pro: [
              "**Florece más tarde**: es la respuesta adecuada para quien solo puede venir a finales de julio",
              "La lavanda verdadera tiene el mejor perfume y es la que se usa en perfumería",
              "Mucho menos concurrido que Valensole",
              "El paisaje es más variado, con el Ventoux al fondo",
            ],
            contro: [
              "Los campos son más pequeños y en fotografía rinden menos",
              "Queda más apartado respecto al resto de la Provenza",
            ],
            perChi: "Quien viaja en la segunda mitad de julio, quien busca el perfume más que la fotografía.",
          },
          {
            nome: "La abadía cisterciense del Luberon",
            sintesi: "La imagen más reproducida de la Provenza: una abadía románica del siglo XII con un campo de lavanda delante.",
            costo: "gratuito desde el exterior; visita de la abadía de pago y con reserva",
            durata: "floración aproximadamente de finales de junio a mediados de julio",
            pro: [
              "El contraste entre la arquitectura románica desnuda y el campo morado es extraordinario",
              "La abadía alberga una comunidad monástica activa, y la visita merece ya por sí sola",
            ],
            contro: [
              "**Durante la floración es el punto más concurrido de toda la Provenza**, con aparcamientos llenos y colas",
              "**Los monjes han pedido expresamente que no se entre en el campo**, y respetar la petición es lo mínimo",
              "La visita interior es de aforo limitado y hay que reservarla",
            ],
            perChi: "Quien llega pronto por la mañana y acepta fotografiar desde el borde.",
          },
          {
            nome: "Renunciar a la lavanda",
            sintesi: "Venir a la Provenza en mayo, en septiembre o en octubre: sin lavanda, pero con todo lo demás y sin multitudes.",
            costo: "bastante más bajo",
            durata: "toda la temporada",
            pro: [
              "El Verdon, las Calanques, los romanos, los pueblos y los mercados están todo el año, y en septiembre están vacíos",
              "Las temperaturas son soportables, mientras que en julio los senderos solo se pueden hacer al amanecer",
              "Los alojamientos cuestan mucho menos",
              "En septiembre hay vendimia en el Ródano meridional",
            ],
            contro: [
              "Sin campos morados, que para muchos son la razón del viaje",
            ],
            perChi: "Quien vuelve, quien sufre el calor, quien quiere ver la Provenza más allá de la fotografía.",
          },
        ],
        raccomandazione:
          "Quien quiera la lavanda que apueste por **finales de junio-principios de julio en Valensole** o por **mediados-finales de julio en Sault**, y que **compruebe el estado de la floración pocos días antes de partir**, porque cambia cada año con la evolución de la temporada. Quien no tenga esta limitación que venga en **septiembre**, cuando la Provenza da lo mejor de sí.",
      },
    ],
    miaEsperienza:
      "En la Provenza las expectativas se ajustan en un día, a condición de hacer una cosa: salir del Luberon. Los pueblos encaramados son bellísimos, pero es allí donde se concentra todo. En agosto en Gordes se dan vueltas cuarenta minutos para aparcar y luego se camina en fila por una calle de tiendas. A una hora de distancia están las Gargantas del Verdon, el cañón más profundo de Europa, que casi nadie incluye en el programa. Se camina por el fondo entre paredes verticales de cientos de metros, con el agua verde esmeralda al lado y túneles excavados en la roca que se atraviesan con linterna. O están los romanos. La arena de Nîmes es el anfiteatro romano mejor conservado del mundo y todavía se hacen espectáculos; el Pont du Gard formaba parte de un acueducto que llevaba el agua durante cincuenta kilómetros con una pendiente media de veinticinco centímetros por kilómetro, un margen de error que hoy se consigue con el láser. Sobre la lavanda hay una sola cosa que saber: tiene un calendario, y el calendario no espera. Florece y se corta, y quien llega en agosto pensando en los campos morados encuentra los rastrojos y no se lo cree.",
    luoghi: [
      {
        nome: "Gargantas del Verdon",
        testo: "Un cañón de hasta 700 metros de profundidad, a menudo comparado con el Gran Cañón, con paredes verticales y agua verde. La carretera panorámica del borde tiene miradores.",
        come: "En coche desde Moustiers-Sainte-Marie o Castellane. Se puede caminar por el fondo por el Sentier de l'Imbut.",
        quando: "Primavera y verano; muy concurrido en julio y agosto.",
        tempo: "día completo",
        consiglio: "El paseo en patín o kayak por el lago de Sainte-Croix se hace por la mañana."
      },
      {
        nome: "Luberon: Gordes, Roussillon, Bonnieux",
        testo: "Pueblos encaramados de piedra clara. En Roussillon las canteras de ocre dan colores rojos y amarillos, que se ven en el Sentier des Ocres.",
        come: "En coche: en agosto el aparcamiento es difícil.",
        quando: "Primavera y otoño; multitudes en julio y agosto.",
        tempo: "2 días",
        consiglio: "Visitar los pueblos a primera hora, antes de los autocares."
      },
      {
        nome: "Meseta de Valensole y lavanda",
        testo: "El gran paisaje de lavanda: una meseta de hileras moradas alternadas con campos de trigo, con alguna casa de piedra en medio. Florece en verano y se corta enseguida, así que las fechas importan: comprobarlas cada año. Los campos son privados: se fotografía desde el borde, sin entrar en las hileras.",
        come: "En coche desde Riez o Valensole.",
        quando: "Amanecer o atardecer, durante la floración.",
        tempo: "media jornada",
        consiglio: "No entrar en los campos cultivados: los agricultores pierden la cosecha."
      },
      {
        nome: "Aviñón y el Palacio de los Papas",
        testo: "El gran palacio gótico que fue residencia de los papas en el siglo XIV. El puente Saint-Bénézet, cortado a mitad, es el símbolo de la ciudad.",
        come: "Tren desde Marsella o París. Se visita a pie.",
        quando: "Por la mañana.",
        tempo: "media jornada",
        url: "https://www.palais-des-papes.com/",
        consiglio: "Pasear por las murallas antes o después de la visita."
      },
      {
        nome: "Arlés",
        testo: "Un anfiteatro romano todavía en uso para espectáculos, los Alyscamps y los lugares pintados por Van Gogh, que vivió y trabajó en Arlés.",
        come: "Tren desde Aviñón.",
        quando: "Por la mañana; el mercado es el sábado.",
        tempo: "media jornada",
        consiglio: "Seguir el recorrido Van Gogh entre los lugares pintados."
      },
      {
        nome: "Nîmes",
        testo: "Una de las arenas romanas mejor conservadas del mundo, aún usada para conciertos y corridas, y la Maison Carrée, templo romano casi intacto inscrito en la UNESCO en 2023.",
        come: "Tren desde Aviñón.",
        quando: "Por la mañana.",
        tempo: "media jornada",
        url: "https://www.arenes-nimes.com/",
        consiglio: "La entrada combinada 3 Monumentos incluye la arena, la Maison Carrée y la Tour Magne."
      }
    ],
    programmi: [
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Aviñón y Palacio de los Papas, Arlés",
          "Día 2: Luberon y Roussillon"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Aviñón y Arlés",
          "Día 2: Luberon",
          "Día 3: Valensole y Gargantas del Verdon"
        ]
      }
    ],
    zone: [
      {
        nome: "Aviñón",
        perChi: "sin coche",
        testo: "Centro amurallado con trenes a Arlés y Nîmes."
      },
      {
        nome: "Luberon",
        perChi: "para los pueblos",
        testo: "Masías y pequeños hoteles; hace falta coche."
      },
      {
        nome: "Arlés",
        perChi: "para una ciudad a escala humana",
        testo: "Más barata que Aviñón, con arena y mercados."
      }
    ],
    sapori: [
      {
        nome: "Ratatouille",
        testo: "Verduras de temporada guisadas."
      },
      {
        nome: "Bouillabaisse",
        testo: "Sopa de pescado de Marsella."
      },
      {
        nome: "Tapenade",
        testo: "Pasta de aceitunas negras, alcaparras y anchoas."
      },
      {
        nome: "Rosado de Provenza",
        testo: "El vino rosado emblema de la región."
      }
    ],
    attenzioni: [
      "En el Luberon en agosto el tráfico y el aparcamiento son pesados: llegar pronto.",
      "El mistral puede soplar fuerte durante días: llevar chaqueta.",
      "No entrar en los campos de lavanda: son propiedad privada y están llenos de abejas."
    ],
    esperienzeSlugs: ['lavanda-provenza', 'gole-verdon', 'calanques-marsiglia', 'pont-du-gard'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: "El pueblo de Gordes encaramado en la colina con las casas de piedra clara y el castillo en lo alto, Provenza",
    immagine: '/images/francia/provenza.jpg',
  },
  {
    slug: 'camargue',
    paeseSlug: 'francia',
    ordine: 9,
    nome: "Camarga",
    tipologia: ['natura', 'fauna', 'tradizioni'],
    giorniConsigliati: "2-3 días",
    visitataPersonalmente: true,
    introduzione:
      "El delta del Ródano: casi mil kilómetros cuadrados de lagunas salobres, arrozales, salinas y praderas entre los dos brazos del río y el mar. Es el mayor delta fluvial de Europa occidental y no se parece a ningún otro lugar de Francia: plano hasta el horizonte, con el agua y la tierra que se confunden y una luz bajísima.",
    percheAndarci:
      "Es el único sitio de nidificación regular del flamenco rosa en Francia. Hay caballos blancos y toros negros criados en semilibertad por una comunidad de vaqueros que todavía existe. Y es uno de los pocos paisajes europeos donde se conduce veinte kilómetros sin ver un relieve.",
    cosaVedere: [
      "El **Étang de Vaccarès** y las lagunas interiores, el corazón de la reserva",
      "Los **flamencos rosas**, presentes todo el año y más numerosos en primavera y verano; el parque ornitológico de Pont de Gau permite verlos de cerca desde las pasarelas",
      "Los **caballos camargueses**, una raza antiquísima: **nacen oscuros y se vuelven blancos entre los cuatro y los siete años**",
      "Los **toros negros** criados en las *manades*, y los **gardians**, los vaqueros a caballo que los gobiernan",
      "**Saintes-Maries-de-la-Mer**, el pueblo de mar con la iglesia fortificada, meta a finales de mayo de la **peregrinación de los gitanos y sinti** a Sara la Negra",
      "**Aigues-Mortes**, la ciudad amurallada que hizo construir Luis IX como puerto de embarque para las cruzadas, con las murallas intactas y al lado las **salinas rosas**",
      "Los **arrozales**: la Camarga es la principal zona de cultivo de arroz de Francia",
    ],
    cosaFare: [
      "Un **paseo a caballo** con los caballos camargueses, la forma tradicional de entrar en las zonas adonde no llegan las carreteras (hay una ficha de experiencia dedicada)",
      "La **observación de aves** en Pont de Gau o a lo largo de la digue à la mer, con los flamencos y cientos de otras especies",
      "Recorrer la Camarga **en bicicleta**: es llana y tiene una red de pistas de tierra",
      "Ver una **course camarguaise**, que poco tiene que ver con la corrida: **el toro no muere**, y los *raseteurs* vestidos de blanco deben arrancarle las escarapelas de los cuernos",
      "Subir a las murallas de **Aigues-Mortes** al atardecer, con las salinas rosas debajo",
    ],
    doveDormire:
      "**Arlés** es la base más práctica y más bonita, a media hora del corazón de la Camarga y llena de historia romana. **Saintes-Maries-de-la-Mer** para estar dentro, con una oferta limitada y estacional. **Aigues-Mortes** para el lado occidental. Muchas **manades** ofrecen alojamiento en la explotación, y es la forma más coherente de dormir aquí.",
    doveMangiare:
      "La cocina camarguesa es particular y muy local: la **gardiane de taureau**, un guiso de toro al vino tinto cocinado durante horas y servido con el **arroz de la Camarga**; el **arroz rojo** integral de la zona; las **coquinas** recogidas en la orilla; las **anguilas**; y la **sal de la Camarga** con su flor de sal. Para beber los *vins de sable*, producidos en suelos arenosos donde la filoxera nunca llegó.",
    comeArrivare:
      "En tren hasta **Arlés** o **Nîmes**, luego en coche. Los aeropuertos más cercanos son Marsella y Nîmes.",
    comeSpostarsi:
      "**Coche o bicicleta.** Las carreteras son pocas y rectas, y muchas pistas son de tierra y están cerradas al tráfico. La bici va estupendamente porque no hay ni un metro de desnivel, pero **el viento cuenta bastante**: con el mistral, pedalear contra el viento en la digue es durísimo.",
    periodoMigliore:
      "**abril-mayo y septiembre-octubre.** En primavera están la migración, los flamencos en plena actividad y las flores en las praderas salobres; en otoño la luz es mejor y no hay nadie. **El verano tiene dos problemas serios: el calor húmedo y los mosquitos**, que en la Camarga deciden si una velada al aire libre se puede hacer o no. Repelente fuerte y manga larga al atardecer.",
    costi:
      "Bajos. Gran parte de la reserva es de **acceso libre**, los senderos y las carreteras panorámicas son gratuitos, el parque ornitológico y las murallas de Aigues-Mortes tienen entradas contenidas. El gasto principal son los paseos a caballo y las visitas a las manades.",
    erroriDaEvitare: [
      "**Venir en verano sin repelente.** Los mosquitos de la Camarga tienen la fama que se merecen, y al atardecer hacen impracticables las zonas húmedas",
      "Esperar paisajes espectaculares: la Camarga es llanísima y hay que mirarla de cerca (aves, luz, horizonte). Quien busca panorámicas se lleva una decepción",
      "Confundir la **course camarguaise** con la corrida española: en la primera el toro no muere. **En Arlés y Nîmes, sin embargo, durante las ferias se celebran también corridas de tipo español**, y conviene saber para qué se compra la entrada",
      "Salirse de los senderos en las zonas protegidas: gran parte de la reserva es de acceso regulado para proteger la nidificación",
      "Ir a Saintes-Maries a finales de mayo sin saber de la peregrinación: es un acontecimiento importante y el pueblo está lleno",
      "Conducir por las pistas de tierra con un coche bajo después de la lluvia",
    ],
    miaEsperienza:
      "La Camarga es el lugar que menos se parece al resto de Francia, y el que decepciona más fácilmente a quien llega con las expectativas equivocadas. No hay panorámicas. Es plana, el horizonte es una línea continua, y desde cualquier punto se ven agua, cañas y cielo. Hay que bajar la mirada, y entonces empiezan a aparecer las cosas: los flamencos que filtran el fango con el pico al revés, hacia abajo, una postura absurda de ver; los caballos blancos en grupo en el agua baja; las garzas; y al atardecer una cantidad de aves que se desplazan todas juntas. Luego está la gente. Los gardians no son una puesta en escena para turistas: son vaqueros que gobiernan a caballo, con un tridente, toros semisalvajes, y el oficio existe todavía porque existe todavía la ganadería. Una course camarguaise en una plaza de pueblo, donde el toro no muere y la multitud aplaude al animal más que al raseteur, es la forma más directa de entender que aquí la relación con esos animales es distinta de como uno se la imagina. Y una nota práctica que vale más que muchas otras: en verano, después del atardecer, los mosquitos son un problema serio, no una broma.",
    luoghi: [
      {
        nome: "Parque ornitológico de Pont de Gau",
        testo: "Un parque con estanques y senderos donde se ven de cerca flamencos rosas, garzas y cigüeñas. Un buen sitio para entender la zona antes de salir a los senderos.",
        come: "En coche desde Saintes-Maries-de-la-Mer, a pocos minutos.",
        quando: "A primera hora o a última de la tarde, con la mejor luz.",
        tempo: "2 horas",
        url: "https://www.parcornithologique.com/",
        consiglio: "Llevar prismáticos y repelente de mosquitos."
      },
      {
        nome: "Saintes-Maries-de-la-Mer",
        testo: "El pueblo marinero con iglesia fortificada, destino a finales de mayo de la peregrinación gitana a Sara la Negra. Las playas son largas y de arena.",
        come: "En coche desde Arlés, atravesando la Camarga.",
        quando: "Finales de mayo por la peregrinación; verano por las playas.",
        tempo: "media jornada",
        consiglio: "Evitar el fin de semana de la peregrinación si se busca calma."
      },
      {
        nome: "Aigues-Mortes",
        testo: "La ciudad amurallada que Luis IX mandó construir como puerto de las cruzadas, con murallas intactas y la Tour de Constance. Al lado están las salinas rosas.",
        come: "Tren y autobús desde Nîmes o Montpellier, o en coche.",
        quando: "Por la mañana.",
        tempo: "media jornada",
        consiglio: "Recorrer el adarve de las murallas al atardecer."
      },
      {
        nome: "Caballos y toros de las manades",
        testo: "Los caballos blancos de Camarga y los toros negros criados en libertad, con los gardians a caballo. Se visitan granjas con paseos a caballo.",
        come: "Reservar una visita a una manade de la zona.",
        quando: "Primavera, otoño.",
        tempo: "2 horas",
        consiglio: "Elegir granjas que respeten a los animales y no hagan espectáculos forzados."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Pont de Gau por la mañana",
          "Comida en Saintes-Maries-de-la-Mer",
          "Paseo a caballo por la tarde",
          "Aigues-Mortes al atardecer"
        ]
      }
    ],
    zone: [
      {
        nome: "Arlés",
        perChi: "para base urbana",
        testo: "Base para la Camarga y la Provenza."
      },
      {
        nome: "Saintes-Maries-de-la-Mer",
        perChi: "para el mar",
        testo: "Alojamiento en la playa; abarrotada el fin de semana de la peregrinación."
      },
      {
        nome: "Aigues-Mortes",
        perChi: "para la ciudad amurallada",
        testo: "Murallas y salinas; más tranquila por la noche."
      }
    ],
    sapori: [
      {
        nome: "Taureau de Camargue",
        testo: "Guiso de toro, con arroz rojo."
      },
      {
        nome: "Arroz de Camarga",
        testo: "Arroz local, también rojo."
      },
      {
        nome: "Fleur de sel",
        testo: "Sal de las salinas de Aigues-Mortes."
      }
    ],
    attenzioni: [
      "Hay muchos mosquitos de mayo a septiembre: repelente y manga larga por la noche.",
      "No acercarse a toros y caballos en el sendero: son animales semisalvajes.",
      "No salir de los senderos en las zonas de reserva natural."
    ],
    esperienzeSlugs: ['camargue-a-cavallo', 'fenicotteri-camargue', 'aigues-mortes'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: "Caballos blancos de la Camarga pastando entre las cañas del pantano, con una bandada de flamencos en vuelo",
    immagine: '/images/francia/camargue.jpg',
  },
  {
    slug: 'occitania',
    paeseSlug: 'francia',
    ordine: 10,
    nome: "Occitania y Languedoc",
    tipologia: ['storia', 'borghi', 'paesaggi'],
    giorniConsigliati: "5-7 días",
    visitataPersonalmente: true,
    introduzione:
      "El sur que casi ningún turista internacional recorre: la ciudad fortificada más grande de Europa, un canal del siglo XVII inscrito en la UNESCO, los castillos cátaros encaramados en espolones imposibles, la catedral de ladrillo más grande del mundo y un viaducto de autopista que es el puente más alto del planeta.",
    percheAndarci:
      "Es el contrapeso de la Provenza: los mismos paisajes mediterráneos, el mismo sol, un tercio de los precios y una décima parte de la gente. Y la historia cátara, una cruzada proclamada contra cristianos del mismo país, es una de las historias más duras de la Edad Media europea, y se visita caminando sobre rocas a mil metros.",
    cosaVedere: [
      "**Carcasona**, la cité fortificada: cincuenta y dos torres y doble recinto amurallado, restaurada en el siglo XIX por Viollet-le-Duc con criterios muy discutidos, y precisamente por eso un documento de lo que significaba «restaurar» en el siglo XIX",
      "El **Canal du Midi**, patrimonio de la UNESCO: más de doscientos kilómetros excavados en el siglo XVII para conectar el Atlántico con el Mediterráneo, con plátanos en las orillas y la **escalera de esclusas de Fonseranes**",
      "Los **castillos cátaros** (Quéribus, Peyrepertuse, Montségur), encaramados en crestas calizas a cientos de metros: fueron los últimos refugios de una comunidad religiosa exterminada por la cruzada albigense",
      "**Albi**, con la **catedral de Sainte-Cécile**, la mayor iglesia de ladrillo del mundo, que desde fuera parece una fortaleza, y el museo dedicado a **Toulouse-Lautrec**, que nació aquí",
      "**Toulouse**, la ville rose, con la basílica de Saint-Sernin, la mayor iglesia románica conservada de Europa",
      "**Colliure** en la costa catalana, el puerto donde **Matisse y Derain** inventaron el fauvismo en un verano",
      "El **viaducto de Millau**, el puente más alto del mundo por altura de los pilares, y debajo las **Gorges du Tarn**",
      "Las **Cevenas** y el **Causse**, mesetas calizas inscritas en la UNESCO como paisaje de la agropastoral mediterránea",
    ],
    cosaFare: [
      "Subir a un **castillo cátaro**: significa siempre media hora o una hora de sendero empinado (hay una ficha de experiencia dedicada)",
      "Navegar o pedalear a lo largo del **Canal du Midi**, que tiene un carril bici en el camino de sirga",
      "Ver **Carcasona de noche**, cuando los autocares ya se han ido y las murallas están iluminadas",
      "Cruzar el **viaducto de Millau** y luego mirarlo desde abajo, desde las gargantas",
      "Comer un **cassoulet** donde nació, y donde se discute desde hace siglos qué ciudad lo hace mejor",
    ],
    doveDormire:
      "**Carcasona**, mejor en la ciudad baja, mucho más económica, a veinte minutos a pie de la cité. **Narbona o Béziers** para el canal y la costa. **Albi** para el norte. **Millau** para las gargantas. Los precios están entre los más bajos del sur de Francia.",
    doveMangiare:
      "El plato símbolo es el **cassoulet**: alubias blancas, corteza de cerdo, salchicha y confit, cocinados lentamente en un recipiente de barro. Tres ciudades reivindican la receta correcta, y la polémica dura desde siempre. Luego el **confit de canard**, el **foie gras**, el **Roquefort**, que se afina en las cuevas del pueblo del mismo nombre y se puede visitar, y las **ostras de Bouzigues** de la laguna de Thau. Para beber, los vinos del **Languedoc**, la mayor área vinícola de Francia por superficie, y en la costa catalana el **Banyuls** dulce.",
    comeArrivare:
      "Alta velocidad y trenes a Toulouse, Carcasona, Narbona, Béziers y Montpellier. Aeropuertos en Toulouse, Montpellier, Carcasona y Perpiñán. **Para los castillos cátaros y para las gargantas hace falta coche**.",
    comeSpostarsi:
      "**Coche.** Los castillos cátaros están dispersos por carreteras de montaña lentas. El canal se recorre en bici o con una barca de alquiler, una fórmula muy extendida que no requiere titulación náutica.",
    periodoMigliore:
      "**mayo-junio y septiembre-octubre.** El verano en el interior es muy caluroso, y los castillos cátaros, sin sombra, se vuelven agotadores. En agosto la costa está concurrida, pero mucho menos que la provenzal. El invierno es suave en la costa y frío en los causses.",
    costi:
      "Entre los más bajos del sur de Francia: alojamientos, restaurantes y entradas cuestan bastante menos que en la Provenza y en la Costa Azul. Muchos castillos cátaros tienen entradas simbólicas o son gratuitos.",
    erroriDaEvitare: [
      "Ver Carcasona solo de día: **en las horas centrales la cité es un flujo continuo**, por la noche está vacía e iluminada",
      "Subestimar los castillos cátaros: se llega en coche a un aparcamiento y luego **se sube a pie**, a menudo con fuerte pendiente, con viento fuerte en la cima",
      "Ir en julio y agosto sin agua ni sombrero: son crestas calizas sin un árbol",
      "Tratar Occitania como una Provenza económica: tiene una historia propia y una lengua que da nombre a la región",
      "Ignorar el Canal du Midi porque «es un canal»: es una obra hidráulica del siglo XVII con una solución técnica para cada desnivel, y recorrerlo en bici es una de las mejores cosas del sur",
    ],
    miaEsperienza:
      "Occitania responde a una pregunta que casi nadie se hace: adónde ir en el sur de Francia cuando la Provenza está llena y cara. Los paisajes son los mismos (caliza, viñas, cipreses, luz), los precios un tercio y los turistas casi ausentes. Pero lo que me ha quedado es la historia cátara, más que el ahorro. Se sube a Peyrepertuse o a Quéribus, castillos construidos en crestas calizas estrechísimas a cientos de metros de altura, con un viento que no para nunca, y debajo hay un valle vacío. Allí arriba, en el siglo XIII, se refugió una comunidad religiosa contra la que el papado proclamó una cruzada: contra cristianos del mismo país, no contra musulmanes. La campaña duró veinte años y terminó con un exterminio. De aquella gente solo han quedado estas rocas y los nombres de los lugares. En Italia esta historia no se estudia; aquí está por todas partes, en los carteles, en los museos de pueblo, en los rótulos. Carcasona, en cambio, hay que tomarla por lo que es: una restauración decimonónica muy discutida, que inventó tejados puntiagudos que probablemente nunca habían existido. Impresiona de todos modos, y por la noche, cuando los autocares ya se han ido, se camina entre los dos recintos amurallados sin cruzarse con nadie.",
    luoghi: [
      {
        nome: "Carcasona",
        testo: "La cité fortificada: cincuenta y dos torres y doble cinturón de murallas, restaurada en el siglo XIX por Viollet-le-Duc con criterios muy discutidos. Dentro hay callejuelas, tiendas y el castillo.",
        come: "Tren directo desde Toulouse. Desde la estación, en la ciudad baja, se sube a pie a la cité cruzando el río.",
        quando: "Por la tarde-noche o a primera hora, cuando no hay grupos.",
        tempo: "media jornada",
        costo: "Castillo condal y paseo de las murallas: 19 € hasta el 30 de septiembre, 13 € de octubre a marzo (2026). La cité y sus calles son libres.",
        consiglio: "Caminar junto a la muralla exterior es gratis y da una buena idea de la estructura."
      },
      {
        nome: "Canal du Midi",
        testo: "Un canal del siglo XVII de 240 km que une el Garona, en Toulouse, con el Mediterráneo; junto al canal del Garona enlaza el Atlántico con el Mediterráneo. Patrimonio UNESCO, con plátanos en las orillas.",
        come: "A pie o en bici por el camino de sirga; barcas de alquiler desde Carcasona o Castelnaudary.",
        quando: "Primavera y otoño.",
        tempo: "media jornada",
        consiglio: "El camino de sirga es llano y apto para bici."
      },
      {
        nome: "Castillos cátaros",
        testo: "Quéribus, Peyrepertuse y Montségur están encaramados a crestas calizas a cientos de metros, últimos refugios de los cátaros en el siglo XIII.",
        come: "En coche desde la zona de Carcasona, luego una subida a pie empinada hasta las murallas.",
        quando: "Por la mañana; el viento es fuerte y no hay sombra.",
        tempo: "3 horas cada uno",
        consiglio: "Llevar agua, gorra y zapatos de senderismo."
      },
      {
        nome: "Albi",
        testo: "La catedral de Sainte-Cécile, considerada el mayor edificio de ladrillo del mundo, que desde fuera parece una fortaleza. En el palacio de la Berbie está el museo Toulouse-Lautrec.",
        come: "Tren desde Toulouse.",
        quando: "Por la mañana.",
        tempo: "media jornada",
        consiglio: "Dentro, mirar el Juicio Final al fresco."
      },
      {
        nome: "Toulouse",
        testo: "La «ville rose» de ladrillo, con la basílica de Saint-Sernin, una de las mayores iglesias románicas conservadas de Europa, y la plaza del Capitole.",
        come: "Aeropuerto y trenes de toda Francia.",
        quando: "Mañana o noche.",
        tempo: "1 día",
        consiglio: "El mercado Victor Hugo por la mañana es un buen desayuno."
      },
      {
        nome: "Collioure",
        testo: "El puerto catalán donde a principios del siglo XX pintaron los fauvistas, entre ellos Matisse y Derain, con su castillo junto al mar.",
        come: "Tren desde Perpiñán.",
        quando: "Primavera y otoño.",
        tempo: "media jornada",
        consiglio: "Seguir el recorrido de los pintores con reproducciones de los cuadros."
      }
    ],
    programmi: [
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Carcasona y Canal du Midi",
          "Día 2: castillos cátaros"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Toulouse",
          "Día 2: Albi y Carcasona",
          "Día 3: castillos cátaros y Collioure"
        ]
      }
    ],
    zone: [
      {
        nome: "Carcasona",
        perChi: "para el centro",
        testo: "Alojamiento en la Bastide o en la cité; la cité es tranquila por la noche."
      },
      {
        nome: "Toulouse",
        perChi: "si se usan trenes",
        testo: "Ciudad grande y vital, con aeropuerto."
      },
      {
        nome: "Collioure",
        perChi: "para el mar",
        testo: "Pequeño puerto mediterráneo, algo más caro."
      }
    ],
    sapori: [
      {
        nome: "Cassoulet",
        testo: "Alubias blancas con pato y salchicha, el plato de Castelnaudary."
      },
      {
        nome: "Foie gras",
        testo: "Hígado graso de oca o pato."
      },
      {
        nome: "Fougasse",
        testo: "Pan con chicharrones o queso."
      },
      {
        nome: "Vinos del Languedoc",
        testo: "Tintos y rosados baratos y buenos, de bodegas locales."
      }
    ],
    attenzioni: [
      "El viento (tramontana, cers) es fuerte en los castillos cátaros: llevar chaqueta.",
      "En pleno verano el calor es pesado: ir por la mañana.",
      "El aparcamiento en la cité de Carcasona es limitado: usar los aparcamientos exteriores."
    ],
    esperienzeSlugs: ['castelli-catari', 'canal-du-midi', 'carcassonne'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: "La ciudadela fortificada de Carcasona en la colina vista desde las orillas del Aude, con los arcos del Pont-Vieux",
    immagine: '/images/francia/occitania.jpg',
  },
  {
    slug: 'sciare-in-francia',
    paeseSlug: 'francia',
    ordine: 11,
    nome: "Esquiar en Francia",
    tipologia: ['sci', 'montagna', 'inverno'],
    giorniConsigliati: "6-7 días, la semana de sábado a sábado",
    visitataPersonalmente: true,
    introduzione:
      "Francia tiene los dominios esquiables conectados más grandes del mundo, y hay una razón histórica: desde los años sesenta el Estado planificó y construyó desde cero, en alta cota, estaciones que antes no existían, las *stations intégrées*, eligiendo los emplazamientos por la innivación y no por el paisaje. De ahí salió una oferta que en Europa no tiene igual por extensión y fiabilidad de la nieve, y que divide mucho a quien va.",
    percheAndarci:
      "En un dominio como Les 3 Vallées se esquía una semana sin repetir dos veces la misma pista, y las estaciones por encima de los dos mil metros tienen nieve incluso cuando los Alpes bajos no la tienen. Y en Chamonix, que es lo opuesto de todo esto, está el descenso fuera de pista más famoso del mundo.",
    cosaVedere: [
      "Las **Tres Valles** (Courchevel, Méribel, Val Thorens, Les Menuires, Saint-Martin), **el dominio conectado más extenso del mundo**, con Val Thorens, la estación más alta de Europa",
      "**Paradiski** (La Plagne, Les Arcs, Peisey-Vallandry), conectadas por el **Vanoise Express**, un teleférico de dos pisos que atraviesa el valle en pocos minutos",
      "**Tignes y Val d'Isère**, en alta cota, con el glaciar de la Grande Motte",
      "**Chamonix**, que es un valle con sectores separados más que un dominio conectado, y es la capital mundial del alpinismo: la **Aiguille du Midi a 3.842 metros** y la **Vallée Blanche**",
      "**Portes du Soleil** y el **Grand Massif**, a cotas más bajas pero enormes y más económicos",
      "**Alpe d'Huez** y **Les 2 Alpes**, en la vertiente del Isère, con pistas larguísimas",
      "Los **Alpes del Sur** (Isola 2000, Auron, Valberg) a hora y media del mar, y los **Pirineos**, mucho más económicos y menos fiables para la nieve",
    ],
    cosaFare: [
      "Esquiar un dominio conectado **pasando de valle en valle**, que es el motivo por el que existen estos dominios",
      "La **Vallée Blanche** en Chamonix con un guía: es un descenso sobre glaciar, no una pista (hay una ficha de experiencia dedicada)",
      "Subir a la **Aiguille du Midi** incluso sin esquiar, por el teleférico y la terraza (hay una ficha de experiencia dedicada)",
      "Probar el **esquí de travesía o las raquetas** en los valles laterales, lo contrario del dominio, y casi gratis",
      "Esquiar en los **Alpes Marítimos por la mañana y bajar al mar por la tarde**: desde la Costa Azul se puede hacer en serio",
    ],
    doveDormire:
      "Hay que elegir entre **estación integrada de alta cota** (apartamentos a pie de pista, se sale y se entra con los esquís, arquitectura funcional y a menudo fea) y **pueblo tradicional** a cota más baja, con el casco antiguo, la madera y las lanzaderas a los remontes. Es el tema de la segunda comparativa de aquí abajo, y es la elección que decide el tipo de semana. Nota práctica: en Francia la fórmula más extendida es **el apartamento en residence** con semana de sábado a sábado, más que la media pensión en hotel.",
    doveMangiare:
      "La cocina saboyana está hecha de queso y calorías: **raclette** (media rueda calentada y raspada sobre el plato), **fondue savoyarde**, **tartiflette** (patatas, panceta, cebollas y **Reblochon** fundido: un plato mucho más reciente de lo que parece, nacido en buena parte para promocionar el queso), **diots** (salchichas) al vino blanco, y los quesos Beaufort, Abondance y Tomme de Savoie. Para beber los blancos de Saboya (Apremont, Roussette) y el **génépi** como digestivo. En las pistas los **restaurantes de altura** son una institución, y una partida de gasto importante.",
    comeArrivare:
      "En tren hasta las estaciones de fondo de valle de la Tarentaise (Bourg-Saint-Maurice, Moûtiers), luego autobús o lanzadera; en invierno hay trenes nocturnos y conexiones directas estacionales desde varias ciudades europeas. Aeropuertos de Ginebra, Lyon, Grenoble y Chambéry. **En coche, en los municipios de montaña las cadenas o los neumáticos de invierno son obligatorios por ley en un periodo fijado cada año**: conviene comprobar las fechas antes de salir.",
    comeSpostarsi:
      "En la estación el coche no hace falta: las lanzaderas gratuitas conectan barrios y remontes. **El punto delicado es el día de llegada**: el sábado, en temporada alta, todas las semanas blancas francesas cambian a la vez, y en las carreteras de la Tarentaise y de la Maurienne las colas pueden durar horas. Salir el domingo, o muy pronto el sábado, cambia la jornada.",
    periodoMigliore:
      "**de mediados de enero a mediados de marzo** por la relación entre nieve y precios, y **marzo** es el mejor mes por nieve, luz y días largos. **En Francia la variable decisiva son las vacaciones escolares de invierno, escalonadas en tres zonas** a lo largo de cuatro o cinco semanas seguidas entre febrero y principios de marzo: en ese periodo, por turnos, las estaciones están llenas y los precios al máximo. **El calendario de las zonas sale con mucha antelación y hay que consultarlo antes de reservar.** Navidad y Fin de Año son carísimos, y en las cotas bajas la nieve no está garantizada.",
    costi:
      "Altos, y estructurados de forma distinta a Italia: **apartamento por la semana + forfait + alquiler + escuela**, con el forfait de los grandes dominios entre las partidas más caras de Europa. **Los forfaits de varios días comprados en línea con antelación cuestan bastante menos.** Hay que añadir el **seguro de rescate en pista**, vendido con el forfait: **en Francia el rescate en pista se paga**, y una intervención fuera de pista cuesta cifras muy altas.",
    erroriDaEvitare: [
      "**Reservar sin mirar el calendario de las vacaciones escolares francesas**: es la diferencia entre una semana normal y una con precios dobles y pistas llenas",
      "Llegar en sábado en temporada alta sin contar con las colas en el valle",
      "No comprar el seguro de rescate en pista, que cuesta pocos euros al día y cubre una partida que en Francia se paga",
      "Comprar el forfait en taquilla el primer día: en línea y con antelación cuesta menos",
      "Elegir un dominio enorme siendo principiante o si se esquía pocas horas al día: se paga un forfait grande para usar una décima parte",
      "Ir fuera de pista sin guía, sin ARVA, pala y sonda y sin saber leer el boletín de aludes. **La Vallée Blanche no es una pista**: es un itinerario sobre glaciar, con grietas",
      "Esperar pueblos alpinos de madera en una estación integrada de los años setenta: se construyeron para esquiar, no para ser contempladas",
    ],
    confronti: [
      {
        titolo: "Qué dominio esquiable elegir",
        introduzione:
          "Sobre el papel los grandes dominios franceses se parecen; sobre los esquís son muy distintos. Cuenta ante todo la **cota**, que decide lo fiable que es la nieve; luego el **carácter de la estación**; por último el precio, que en Francia varía mucho más de lo que se cree.",
        opzioni: [
          {
            nome: "Les 3 Vallées",
            sintesi: "El dominio conectado más extenso del mundo: cinco estaciones, cientos de kilómetros de pistas, y Val Thorens, la estación más alta de Europa.",
            costo: "el forfait más caro de Francia; alojamientos desde Courchevel (carísimo) hasta Les Menuires (accesible)",
            durata: "una semana, y no se acaba",
            pro: [
              "Una extensión sin parangón: se esquía seis días sin repetir",
              "**Val Thorens a 2.300 metros tiene la nieve más fiable de los Alpes franceses**",
              "Cinco estaciones muy distintas bajo el mismo forfait: se elige el carácter sin renunciar al dominio",
              "Remontes entre los más modernos y eficientes de Europa",
            ],
            contro: [
              "El forfait es caro, y solo compensa a quien esquía todo el día y se desplaza bastante",
              "Courchevel y Méribel tienen precios fuera de escala",
              "Val Thorens es una estación integrada de alta cota sin ningún carácter alpino tradicional",
            ],
            perChi: "Esquiadores buenos que esquían muchas horas al día y quieren el máximo de extensión.",
          },
          {
            nome: "Paradiski (La Plagne y Les Arcs)",
            sintesi: "Dos grandes estaciones unidas por un teleférico de dos pisos que atraviesa el valle, con un dominio enorme y cotas altas.",
            costo: "alto, pero por debajo de las Tres Valles",
            durata: "una semana",
            pro: [
              "Un dominio muy vasto y variado, con bosques y alta cota a la vez",
              "La conexión entre las dos vertientes es una atracción en sí",
              "Excelente para familias: muchas áreas protegidas y pistas azules largas",
              "Les Arcs tiene una de las pistas de kilómetro lanzado más famosas del mundo",
            ],
            contro: [
              "Las dos estaciones están divididas en muchos «pueblos» satélite: equivocándose de barrio se acaba lejos de los remontes adecuados",
              "La arquitectura de los años setenta divide",
            ],
            perChi: "Familias y grupos mixtos, quien quiere grandes dimensiones sin los precios de las Tres Valles.",
          },
          {
            nome: "Tignes y Val d'Isère",
            sintesi: "Alta cota pura, con el glaciar de la Grande Motte y una de las temporadas más largas de los Alpes.",
            costo: "alto",
            durata: "una semana",
            pro: [
              "**Innivación entre las más fiables de Europa**, gracias a la cota y al glaciar",
              "Terreno excepcional para esquiadores expertos y para el fuera de pista, con muchísimos itinerarios",
              "Val d'Isère tiene un centro con más carácter que las estaciones integradas puras",
              "Temporada larguísima, con aperturas tempranas y cierres tardíos",
            ],
            contro: [
              "La cota alta significa también viento y remontes cerrados en los días de temporal",
              "Poco adecuado para principiantes absolutos, y caro",
              "Tignes es la estación que más divide por su arquitectura",
            ],
            perChi: "Esquiadores expertos, aficionados al fuera de pista, quien quiere nieve segura a principio o final de temporada.",
          },
          {
            nome: "Chamonix",
            sintesi: "Un valle alpino histórico con sectores separados, a los pies del Mont Blanc, más que un dominio: la capital mundial del alpinismo.",
            costo: "medio para el alojamiento, alto para guías y remontes de alta cota",
            durata: "una semana, incluso sin esquiar todos los días",
            pro: [
              "**La Aiguille du Midi a 3.842 metros** y la **Vallée Blanche**, más de veinte kilómetros de descenso sobre glaciar con un guía: no tiene equivalente",
              "Es una ciudad de verdad, habitada todo el año, con tiendas, museos y restaurantes, muy distinta de una estación",
              "Terreno legendario para esquiadores expertos (Les Grands Montets sobre todo)",
              "Excelente también para quien no esquía: teleféricos panorámicos, raquetas, termas",
            ],
            contro: [
              "**Los sectores no están conectados entre sí**: se pasa de uno a otro en lanzadera, y quien busca un gran dominio continuo se lleva una decepción",
              "Poco adecuada para principiantes",
              "Los glaciares están cambiando, y algunos itinerarios clásicos son más difíciles o más cortos que antes",
            ],
            perChi: "Esquiadores expertos, alpinistas, quien quiere un valle con vida propia más que una instalación turística.",
          },
          {
            nome: "Portes du Soleil, Grand Massif, Alpe d'Huez",
            sintesi: "Grandes dominios a cotas intermedias, con más bosque, precios más bajos y pueblos con más carácter.",
            costo: "medio",
            durata: "una semana",
            pro: [
              "Excelente relación entre tamaño y precio",
              "Se esquía entre árboles, algo imposible en las estaciones de alta cota",
              "Las **Portes du Soleil** cruzan la frontera: se esquía en dos países con el mismo forfait",
              "**Alpe d'Huez** tiene una de las pistas negras más largas del mundo, con un desnivel enorme en un solo trazado",
            ],
            contro: [
              "**Innivación menos fiable** en las cotas bajas, sobre todo a principio y final de temporada",
              "Dominios fragmentados, con largos traslados sobre los esquís",
            ],
            perChi: "Quien tiene presupuesto ajustado, quien esquía en enero y febrero, quien prefiere el bosque a la alta cota.",
          },
          {
            nome: "Alpes del Sur y Pirineos",
            sintesi: "Isola 2000, Auron y Valberg a hora y media de la Costa Azul; y la cordillera de los Pirineos, mucho más económica.",
            costo: "el más bajo de todos",
            durata: "incluso pocos días, o jornadas sueltas",
            pro: [
              "Desde los Alpes Marítimos **se esquía por la mañana y se está en el mar por la tarde**, y no es una forma de hablar",
              "Precios mucho más bajos: forfait, escuela y alojamiento cuestan una fracción de los de la Tarentaise",
              "Mucha menos gente, incluso en febrero",
              "Los Pirineos tienen estaciones de carácter algo español y una cocina propia",
            ],
            contro: [
              "**Dominios mucho más pequeños** e innivación menos fiable, con temporadas cortas",
              "Menos remontes modernos",
              "Los Pirineos quedan lejos de todo el resto de este itinerario",
            ],
            perChi: "Quien tiene presupuesto ajustado, quien esquía pocos días, quien une nieve y mar, quien ya está en la Costa Azul.",
          },
        ],
        raccomandazione:
          "Para una semana clásica con nieve segura y gran extensión: las **Tres Valles** si el presupuesto lo permite, **Paradiski** como alternativa más equilibrada. Para esquiadores expertos: **Tignes-Val d'Isère** o **Chamonix**, dos mundos opuestos y ambos válidos. Con presupuesto ajustado o pocos días: **los Alpes del Sur**, sobre todo si ya se está en la costa. Y en cualquier caso **primero se mira el calendario de las vacaciones escolares, luego todo lo demás**.",
      },
      {
        titolo: "¿Estación integrada de alta cota o pueblo tradicional?",
        introduzione:
          "Es la elección más francesa de todas, y casi nadie la hace sabiendo qué elige. En los años sesenta y setenta el Estado construyó desde cero decenas de estaciones por encima de los mil ochocientos metros, en lugares deshabitados, proyectadas por urbanistas con un solo criterio: salir de casa con los esquís puestos. La alternativa son los pueblos alpinos que ya existían, más bajos y más bonitos.",
        opzioni: [
          {
            nome: "Estación integrada de alta cota",
            sintesi: "Val Thorens, Tignes, Les Arcs, La Plagne, Avoriaz, Flaine: residences a pie de pista, todo peatonal, todo en altura.",
            costo: "medio-alto, con apartamentos de varias categorías",
            durata: "la semana clásica",
            pro: [
              "**Ski-in ski-out de verdad**: se sale del portal con los esquís puestos y se vuelve del mismo modo",
              "La cota garantiza la nieve, y la temporada es larga",
              "Todo a distancia peatonal: sin coche, sin lanzaderas, sin tiempos muertos",
              "Ideal con niños y con equipo que llevar encima",
            ],
            contro: [
              "**Una arquitectura funcional que muchos encuentran fea**: cemento, grandes volúmenes, ningún casco antiguo",
              "Fuera de la temporada de esquí no hay nada, y también en temporada la «vida» es la de las residences",
              "Expuestas al viento y a los cierres de remontes en los días malos",
              "Para quien no esquía no hay alternativa",
            ],
            perChi: "Quien esquía todos los días y todo el día, familias con niños pequeños, quien no quiere desplazarse para nada.",
          },
          {
            nome: "Pueblo alpino tradicional",
            sintesi: "Chamonix, Megève, La Clusaz, Le Grand-Bornand, Samoëns, Serre Chevalier: pueblos que ya existían, más bajos, con un centro y una vida propia.",
            costo: "variable, de accesible a muy alto (Megève)",
            durata: "la semana clásica, con más sentido también para quien no esquía",
            pro: [
              "Son pueblos de verdad, con una iglesia, un mercado y gente que vive allí todo el año",
              "Mucho más bonitos, y más agradables cuando el tiempo es malo",
              "Para comer y para la noche la oferta es mucho mejor",
              "Van bien también para quien no esquía o esquía poco",
            ],
            contro: [
              "**Cotas más bajas e innivación menos fiable**, sobre todo en diciembre y a final de temporada",
              "Para llegar a los remontes hace falta la lanzadera o el coche, con tiempos muertos cada día",
              "Megève y similares tienen precios altos por razones que poco tienen que ver con el esquí",
            ],
            perChi: "Quien no esquía todos los días, quien viaja con personas que no esquían, quien quiere unas vacaciones en la montaña además de en las pistas.",
          },
        ],
        raccomandazione:
          "Si todo el grupo esquía todos los días, **gana la estación integrada, sin discusión**: el tiempo ahorrado cada día vale mucho más que la estética. Si incluso una sola persona no esquía, o si se piensa en alternar, **la única opción sensata es el pueblo tradicional**, porque en una estación integrada quien no esquía no tiene nada que hacer.",
      },
    ],
    miaEsperienza:
      "La primera vez que llegué a una estación integrada francesa me quedé perplejo. Se sube por el valle entre bosques, se pasa una curva y aparece un bloque de edificios de los años setenta a dos mil metros, sin campanario, sin plaza, con los esquís apoyados por todas partes. Luego a la mañana siguiente sales del portal con los esquís puestos, dos empujones y estás en la telesilla, y a las nueve y cuarto ya estás esquiando sobre una nieve que a esa cota siempre hay. Al tercer día la cuestión estética ha desaparecido. Se construyeron justo para esto, y para quien esquía en serio funcionan mejor que cualquier pueblo de postal. El reverso se ve en los días de mal tiempo, cuando los remontes altos cierran por el viento: en una estación integrada no hay nada más que hacer, y la jornada está perdida. Pero las dos cosas que más cambian la semana no tienen que ver con el esquí, son burocracia. La primera es el calendario de las vacaciones escolares, dividido en tres zonas: las mismas pistas, la misma nieve, la misma semana de febrero pueden costar el doble y tener el triple de gente, según qué zona esté de vacaciones. La segunda es el seguro de rescate: aquí el rescate en pista se paga, y la póliza vendida con el forfait cuesta pocos euros al día.",
    luoghi: [
      {
        nome: "Les Trois Vallées",
        testo: "Una gran zona esquiable conectada, con Courchevel, Méribel, Val Thorens, Les Menuires y Saint-Martin-de-Belleville. Val Thorens está entre las estaciones más altas de Europa.",
        come: "Tren hasta Moûtiers y lanzadera; aeropuerto de Lyon o Ginebra con traslado.",
        quando: "Diciembre-abril; Val Thorens conserva la nieve más tiempo.",
        tempo: "mínimo 4-5 días",
        consiglio: "Elegir la base según el nivel: Méribel en el centro, Val Thorens en altura."
      },
      {
        nome: "Paradiski",
        testo: "La Plagne y Les Arcs unidas por el Vanoise Express, el teleférico de dos pisos que cruza el valle a 380 metros de altura en unos 4 minutos.",
        come: "Tren hasta Bourg-Saint-Maurice y lanzadera.",
        quando: "Diciembre-abril.",
        tempo: "4-5 días",
        consiglio: "Les Arcs tiene varios pueblos en altura, cada uno con su carácter: elegir la base con calma."
      },
      {
        nome: "Tignes y Val d'Isère",
        testo: "Dos estaciones de gran altitud, unidas en el Espace Killy, con glaciares y temporada de nieve más larga. Val d'Isère tiene más ambiente, Tignes remontes modernos.",
        come: "Tren a Bourg-Saint-Maurice y lanzadera.",
        quando: "Diciembre-abril; glaciar incluso en verano.",
        tempo: "4-5 días",
        consiglio: "Tignes tiene nieve más segura al principio y final de temporada."
      },
      {
        nome: "Chamonix",
        testo: "Un valle, más que una zona conectada, a los pies del Mont Blanc, capital del alpinismo. Para esquiadores expertos, con la Vallée Blanche desde la Aiguille du Midi.",
        come: "Tren desde Ginebra o París; autobuses unen los sectores.",
        quando: "Enero-abril.",
        tempo: "4-5 días",
        consiglio: "La Vallée Blanche se hace con guía."
      }
    ],
    programmi: [
      {
        titolo: "5 días",
        tappe: [
          "Día 1: llegada y recogida del material",
          "Días 2-4: esquí por los valles conectados",
          "Día 5: descanso o fuera de pista con guía"
        ]
      }
    ],
    zone: [
      {
        nome: "Estaciones integradas",
        perChi: "para esquiar desde la puerta",
        testo: "Alojamiento pie de pista, feo pero cómodo, con todo cerca."
      },
      {
        nome: "Pueblos históricos",
        perChi: "para el ambiente",
        testo: "Chalets y restaurantes, pero hace falta lanzadera para las pistas."
      }
    ],
    sapori: [
      {
        nome: "Tartiflette",
        testo: "Patatas, panceta, cebolla y reblochon gratinados."
      },
      {
        nome: "Fondue saboyana",
        testo: "Beaufort, comté y emmental fundidos, con pan."
      },
      {
        nome: "Raclette",
        testo: "Queso fundido sobre patatas y embutidos."
      },
      {
        nome: "Vin chaud",
        testo: "Vino caliente especiado, en las pistas."
      }
    ],
    attenzioni: [
      "Comprar el forfait en línea antes: en taquilla cuesta más y hay cola.",
      "El rescate en pista puede ser de pago: tener seguro.",
      "Fuera de pista es peligroso sin guía y equipo: avalanchas."
    ],
    esperienzeSlugs: ['vallee-blanche', 'aiguille-du-midi', 'scialpinismo-francia'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: "Una pista nevada sobre Chamonix con las agujas del macizo del Mont Blanc al fondo",
    immagine: '/images/francia/sciare-in-francia.jpg',
  },
  {
    slug: 'montagne-francesi',
    paeseSlug: 'francia',
    ordine: 12,
    nome: "Caminar por la montaña",
    tipologia: ['trekking', 'montagna', 'natura'],
    giorniConsigliati: "7-11 días para un trekking por etapas",
    visitataPersonalmente: true,
    introduzione:
      "Francia tiene el macizo más alto de los Alpes, once parques nacionales, una red de senderos de largo recorrido (los **GR**) señalizada desde hace ochenta años con la misma banderita blanca y roja, y dos de los trekkings más famosos de Europa: la vuelta al Mont Blanc y la travesía de Córcega. Y tiene una cosa que Italia no tiene: **el rescate en montaña de los cuerpos públicos es en principio gratuito**.",
    percheAndarci:
      "El **Tour du Mont Blanc** rodea la montaña más alta de los Alpes atravesando tres países en unos diez días, con una noche en refugio cada noche, y es quizá el trekking por etapas más bonito de Europa. El **GR20** en Córcega está considerado el itinerario señalizado más duro del continente, y para cierto tipo de personas eso basta como motivo.",
    cosaVedere: [
      "El **Tour du Mont Blanc**: unos ciento setenta kilómetros alrededor del macizo, entre Francia, Italia y Suiza, con unos diez mil metros de desnivel acumulado",
      "El macizo del **Mont Blanc** desde Chamonix: el **Lac Blanc**, el **Grand Balcon** y la **Aiguille du Midi** a 3.842 metros, con el teleférico que sube casi tres mil metros en veinte minutos",
      "La **Mer de Glace**, el glaciar más grande de Francia, al que se llega con el tren de cremallera del Montenvers: **a lo largo de la escalera que baja a la gruta de hielo están marcados los años y el nivel del glaciar en esos años**, el testimonio más directo del retroceso glaciar que se puede ver en Europa",
      "El **Parque Nacional de la Vanoise**, el primer parque nacional francés, creado en 1963, donde en la vertiente alpina occidental se salvó de la extinción al íbice",
      "El **Parque Nacional de los Écrins**, alta montaña severa, con la **Barre des Écrins**, el cuatromil más meridional de los Alpes",
      "Los **Pirineos**: el **Cirque de Gavarnie**, patrimonio de la UNESCO, un anfiteatro glaciar con paredes de cientos de metros y una de las cascadas más altas de Europa, y la **Brèche de Roland**",
      "El **GR20** en Córcega, unos ciento ochenta kilómetros de norte a sur a lo largo de la cordillera de la isla",
    ],
    cosaFare: [
      "El **Tour du Mont Blanc** completo o en versión reducida (hay una ficha de experiencia dedicada)",
      "El **GR20**, para quien tiene experiencia de verdad (hay una ficha de experiencia dedicada)",
      "Las excursiones de un día desde Chamonix, que dan el noventa por ciento de la panorámica con el diez por ciento del esfuerzo",
      "Subir a la **Aiguille du Midi** y asomarse desde la terraza suspendida",
      "Una travesía corta por la **Vanoise** o los **Écrins**, menos conocidos y mucho menos concurridos",
    ],
    doveDormire:
      "**En refugio**: es el sentido de estos itinerarios. Las reglas son casi en todas partes las mismas: **media pensión**, cena a hora fija, literas compartidas, **saco sábana obligatorio**, silencio temprano y a menudo **solo efectivo**. **Los refugios del Tour du Mont Blanc para el verano se reservan desde enero-febrero**, y esta limitación decide todo el itinerario: el recorrido se construye sobre las disponibilidades, no al revés.",
    doveMangiare:
      "En refugio la cocina es repetitiva y sustanciosa (sopas, polenta, quesos, tartas), y al cabo de tres días se la ama. En el valle está la cocina saboyana: **raclette**, **fondue**, **tartiflette**, **Beaufort** y **Reblochon**, y los vinos blancos de Saboya. En Córcega es otra cosa totalmente distinta: **charcuterie** de cerdo criado en libertad, **brocciu** (un queso fresco de suero), **castañas** de todas las formas.",
    comeArrivare:
      "Para el Mont Blanc: tren o autobús hasta **Chamonix**, o bien Ginebra y lanzadera. Para la Vanoise y los Écrins: las estaciones de fondo de valle de Saboya y del Delfinado. Para los Pirineos: Lourdes, Pau, Tarbes. Para el GR20: avión o ferri a Córcega, luego tren o autobús hasta Calenzana o Conca.",
    comeSpostarsi:
      "En los trekkings por etapas uno se desplaza a pie: el problema, en todo caso, es volver al punto de partida, y para el Tour du Mont Blanc hay lanzaderas y traslados de equipaje en todo el recorrido. En el valle de Chamonix el transporte público es excelente y **normalmente está incluido en la tarjeta que dan los establecimientos donde se duerme**: conviene preguntarlo al hacer la reserva.",
    periodoMigliore:
      "**de mediados de junio a mediados de septiembre**, la ventana en la que los refugios están abiertos y los collados altos están libres de nieve. **Julio y agosto son los meses más concurridos**, y en el Tour du Mont Blanc la multitud se nota. **El mejor mes es septiembre**: aire limpio, menos gente, refugios todavía abiertos en la primera mitad del mes. En junio las neveras que quedan en los collados altos son un problema serio. **El GR20 se recorre aproximadamente de junio a septiembre**, con los meses centrales muy calurosos en los tramos bajos.",
    costi:
      "La partida principal es la media pensión en refugio, que en Francia está en la franja alta de los Alpes. Los remontes (Aiguille du Midi, Montenvers) son caros y hay que contarlos aparte. El rescate público es en principio gratuito, pero **un seguro que cubra repatriación y gastos médicos sigue siendo sensato**.",
    erroriDaEvitare: [
      "**Reservar en mayo los refugios del Tour du Mont Blanc para agosto.** Se agotan desde enero-febrero, y es la limitación sobre la que se construye todo el viaje",
      "Subestimar los desniveles: en el TMB las etapas suelen tener ochocientos o novecientos metros de subida y otros tantos de bajada",
      "Salir tarde: **en altura en verano las tormentas de la tarde son regulares y violentas**, y la regla es llegar al refugio antes de la tarde",
      "Subir sin efectivo: muchos refugios no tienen datáfono",
      "Afrontar el **GR20** como una excursión cualquiera: tiene tramos equipados, pasos en los que hacen falta las manos, roca y desniveles enormes, y cada año muchos abandonan tras tres etapas",
      "Olvidar el **saco sábana**, obligatorio en todos los refugios",
      "Fiarse del tiempo de la mañana: en alta montaña cambia en dos horas",
    ],
    confronti: [
      {
        titolo: "Qué trekking de montaña elegir",
        introduzione:
          "Son todos recorridos por etapas con refugios, y más que el paisaje cambian la dificultad técnica, la multitud y la posibilidad de abandonar a mitad. Elegir uno equivocado para la propia preparación es la forma más segura de arruinarse las vacaciones.",
        opzioni: [
          {
            nome: "Tour du Mont Blanc",
            sintesi: "La vuelta completa al macizo, unos ciento setenta kilómetros en diez días, a través de Francia, Italia y Suiza.",
            costo: "medio-alto: media pensión en refugio cada noche",
            durata: "7-11 días; existen versiones de 3-5 etapas",
            pro: [
              "Un paisaje de primer nivel de principio a fin, con el macizo siempre a la vista desde ángulos distintos",
              "**No es técnico**: hace falta entrenamiento, no alpinismo. No hay tramos equipados obligatorios",
              "Atraviesa tres países y tres culturas alpinas, y la cocina cambia en cada collado",
              "Logística excelente: traslado de equipaje, lanzaderas, etapas que se pueden saltar",
              "Se puede hacer en versión reducida, la opción adecuada para quien nunca ha hecho un trekking por etapas",
            ],
            contro: [
              "**En julio y agosto está muy concurrido**: es el trekking más famoso de Europa, y se nota",
              "Los refugios se reservan con meses de antelación y fijan el itinerario sin márgenes",
              "Las etapas son largas y los desniveles serios, aunque el terreno sea fácil",
            ],
            perChi: "Quien está entrenado, quien quiere un gran trekking sin dificultades técnicas, quien lo hace por primera vez.",
          },
          {
            nome: "GR20, Córcega",
            sintesi: "Unos ciento ochenta kilómetros a lo largo de la cordillera de la isla, en quince etapas: está considerado el itinerario señalizado más duro de Europa.",
            costo: "medio-bajo: los refugios son espartanos y se puede llevar la tienda",
            durata: "15 etapas, unos 12-16 días; se puede hacer también solo la mitad norte o la mitad sur",
            pro: [
              "Un paisaje único en el Mediterráneo: crestas de granito, lagos glaciares, bosques de pino laricio",
              "La **mitad norte** es la más espectacular y la más dura; la **mitad sur** es más accesible",
              "Fuera de temporada alta, mucho menos concurrido que el TMB",
              "Un objetivo de verdad: quien lo termina lo recuerda",
            ],
            contro: [
              "**Es duro en serio**: pasos en los que hacen falta las manos, tramos equipados con cadenas, roca inestable, desniveles enormes",
              "Los refugios son espartanos y hay poco de comer: muchos llevan tienda y comida",
              "En verano en los tramos bajos hace mucho calor, y el agua no siempre hay",
              "**Abandonar a mitad es complicado**: las vías de escape son pocas y largas",
            ],
            perChi: "Quien ya ha hecho trekkings exigentes, tiene el pie firme sobre la roca y sabe lo que significa caminar ocho horas por terreno técnico. No es un trekking con el que empezar.",
          },
          {
            nome: "Vanoise",
            sintesi: "El primer parque nacional francés, con una red densa de refugios y anillos de tres a seis días entre glaciares, lagos y pastos de altura.",
            costo: "medio",
            durata: "3-7 días",
            pro: [
              "Mucho menos concurrido que el Mont Blanc",
              "La fauna es extraordinaria: **es el parque donde se salvó de la extinción al íbice**, y hoy se ven con facilidad",
              "Anillos cortos, sin logística para el regreso",
              "Refugios bien distribuidos y más fáciles de reservar",
            ],
            contro: [
              "Menos espectacular que el macizo del Mont Blanc, que sigue siendo otro orden de magnitud",
              "Limita con grandes estaciones de esquí, y en los márgenes se ven los remontes",
            ],
            perChi: "Quien quiere un verdadero trekking alpino sin multitudes, quien tiene menos de una semana, quien va por la fauna.",
          },
          {
            nome: "Écrins",
            sintesi: "Alta montaña severa en el Delfinado, con el cuatromil más meridional de los Alpes y valles largos y salvajes.",
            costo: "medio",
            durata: "4-7 días",
            pro: [
              "El más alpinístico de los parques franceses, de carácter severo y poco domesticado",
              "Poquísima gente comparado con el Mont Blanc",
              "El **Glacier Blanc** es una excursión de un día que lleva al contacto con un glaciar de verdad",
              "Precios más bajos en el valle",
            ],
            contro: [
              "Más exigente que el TMB: los collados son altos y las etapas largas",
              "Menos servicios y menos logística para equipaje y traslados",
              "El tiempo es más variable: es una zona de frontera entre influencias atlánticas y mediterráneas",
            ],
            perChi: "Quien ya ha caminado en altura y quiere montaña seria sin multitudes.",
          },
          {
            nome: "Pirineos: GR10 y Cirque de Gavarnie",
            sintesi: "Una cordillera totalmente distinta de los Alpes, más verde, más salvaje y mucho menos frecuentada, atravesada por un sendero que va de un océano al otro.",
            costo: "bajo",
            durata: "de 3 días a mes y medio para el GR10 completo",
            pro: [
              "El **Cirque de Gavarnie** es uno de los paisajes glaciares más impresionantes de Europa, y se llega con una caminata fácil",
              "Mucho menos frecuentados y mucho más económicos que los Alpes",
              "Fauna excepcional, con los buitres leonados y los rebecos de los Pirineos",
              "La cultura local, vasca al oeste y catalana al este, es fuerte y reconocible",
            ],
            contro: [
              "Más lejos de todo: no se unen a ningún otro itinerario de esta sección",
              "El tiempo atlántico es muy variable, con nieblas frecuentes",
              "La red de refugios es menos densa que en los Alpes",
            ],
            perChi: "Quien busca montaña sin multitudes, quien ya ha hecho los Alpes, quien tiene presupuesto ajustado.",
          },
        ],
        raccomandazione:
          "En el primer trekking por etapas: el **Tour du Mont Blanc en versión reducida**, tres o cuatro etapas, para entender lo que significa caminar varios días seguidos durmiendo en refugio. Con experiencia y entrenamiento: **el TMB completo**, reservando los refugios en enero. Para quien quiere montaña de verdad sin multitudes: **Vanoise o Écrins**. El **GR20** solo sabiendo bien a lo que se va.",
      },
    ],
    miaEsperienza:
      "En la montaña, en Francia, hay una cosa que se nota enseguida y cambia la forma de estar en altura: **el rescate público es gratuito**. Parece una nota administrativa, pero tiene un efecto concreto: nadie duda en llamar, y la relación con el riesgo es más serena que en los países donde una intervención en helicóptero significa una factura de miles de euros. Luego está la red de los GR, que existe desde los años cuarenta y está señalizada con dos banderitas, una blanca y una roja, pintadas en rocas, árboles y muros a lo largo de miles de kilómetros: puedes salir de cualquier pueblo y caminar un mes siguiendo trazos de pintura. Del Tour du Mont Blanc me descolocó lo internacional que es. En el refugio duermes con personas de diez nacionalidades que hacen la misma vuelta en sentido opuesto, y te las vuelves a encontrar tres días después en un collado. Y luego lo mucho que cambia el paisaje al dar la vuelta a una sola montaña. La vertiente francesa es vertical y helada; la italiana se abre sobre prados amplísimos, con el macizo como una pared continua; la suiza es ordenada y verde. Tres maneras distintas de estar bajo la misma cima. Lo más duro de mirar es la Mer de Glace. Bajas la escalera hacia la gruta de hielo y a los lados hay carteles con los años y el nivel del glaciar en esos años: 1990 aquí, 2000 más abajo, 2010 todavía más abajo. Y sigues bajando.",
    luoghi: [
      {
        nome: "Tour du Mont Blanc",
        testo: "Unos 165-170 km alrededor del macizo, entre Francia, Italia y Suiza, con más de 10.000 metros de desnivel. Suele hacerse en 9-14 días, de refugio en refugio, en sentido antihorario.",
        come: "Salida desde Les Houches o Chamonix; autobuses y trenes para los regresos.",
        quando: "Julio a mediados de septiembre; los refugios solo abren en verano.",
        tempo: "9-14 días",
        consiglio: "Los refugios hay que reservarlos con meses de antelación."
      },
      {
        nome: "Lac Blanc y Grand Balcon",
        testo: "Excursión sobre Chamonix con vistas al macizo del Mont Blanc reflejado en el lago. El Grand Balcon Nord es un sendero panorámico a media ladera.",
        come: "Teleférico hasta La Flégère, luego a pie por el sendero hasta el lago.",
        quando: "Por la mañana; julio-septiembre.",
        tempo: "media jornada",
        consiglio: "Salir pronto para evitar multitudes en el lago."
      },
      {
        nome: "Mer de Glace y Montenvers",
        testo: "Uno de los mayores glaciares de Francia, al que se llega en el tren de cremallera del Montenvers. A lo largo de la escalera hacia el hielo, carteles muestran cuánto ha retrocedido.",
        come: "El tren cremallera del Montenvers, con salida desde Chamonix.",
        quando: "Por la mañana; verano y otoño.",
        tempo: "media jornada",
        consiglio: "El glaciar ha bajado decenas de metros: los carteles lo muestran."
      },
      {
        nome: "Parque de la Vanoise",
        testo: "El primer parque nacional francés, creado en 1963. En la vertiente alpina occidental es fácil ver el íbice.",
        come: "En coche desde Pralognan-la-Vanoise o Bonneval-sur-Arc.",
        quando: "Verano y principios de otoño.",
        tempo: "2-3 días",
        consiglio: "Llevar prismáticos para ver los íbices."
      },
      {
        nome: "Circo de Gavarnie (Pirineos)",
        testo: "Un anfiteatro glaciar con paredes de hasta 1.500 metros y la cascada de Gavarnie, de 422 metros, la segunda más alta de Europa. Patrimonio UNESCO desde 1997.",
        come: "En coche hasta Gavarnie, luego a pie por el sendero del valle hasta el circo.",
        quando: "Verano, a primera hora.",
        tempo: "media jornada",
        consiglio: "Subir pronto: el sendero está embarrado en primavera."
      }
    ],
    programmi: [
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Chamonix y Lac Blanc",
          "Día 2: Mer de Glace",
          "Día 3: una etapa del Tour du Mont Blanc"
        ]
      }
    ],
    zone: [
      {
        nome: "Chamonix",
        perChi: "para la montaña",
        testo: "Bien servida, con teleféricos y trenes."
      },
      {
        nome: "Les Houches",
        perChi: "para ahorrar",
        testo: "Más tranquilo, salida del tour."
      }
    ],
    sapori: [
      {
        nome: "Tartiflette",
        testo: "Patatas, panceta, cebolla y reblochon gratinados."
      },
      {
        nome: "Fondue saboyana",
        testo: "Quesos fundidos con pan."
      },
      {
        nome: "Diots",
        testo: "Salchichas de cerdo de Saboya."
      }
    ],
    attenzioni: [
      "Fuera de las zonas de esquí el rescate en montaña en Francia es gratuito: en una emergencia llamar al 112. Un seguro sigue siendo recomendable.",
      "El tiempo cambia rápido: salir temprano y consultar las previsiones de Météo-France.",
      "Avisar de la ruta al refugio o a un amigo."
    ],
    esperienzeSlugs: ['tour-du-mont-blanc', 'gr20-corsica', 'mer-de-glace'],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: "El Mont Pourri nevado y la Aiguille Rouge sobre los bosques y los pastos de Sainte-Foy-Tarentaise, en los Alpes franceses",
    immagine: '/images/francia/montagne-francesi.jpg',
  },
]
