import type { Destinazione } from '@/lib/types'

export const destinazioniSvizzera: Destinazione[] = [
  {
    slug: 'interlaken',
    paeseSlug: 'svizzera',
    ordine: 1,
    nome: "Interlaken y los lagos de Thun y Brienz",
    tipologia: ['laghi', 'base logistica', 'montagna'],
    giorniConsigliati: "1-2 días como base, todo el resto del recorrido gira en torno a ella",
    visitataPersonalmente: true,
    introduzione:
      "Interlaken significa «entre los lagos»: está sobre una lengua de tierra entre el Lago de Thun al oeste y el Lago de Brienz al este, ambos de un turquesa lechoso por los sedimentos glaciares en suspensión. Es el nudo logístico de la región, con varios campings en pocos kilómetros.",
    percheAndarci:
      "Es la base más práctica para una furgoneta en toda la Jungfrau Region: está la estación principal, hay supermercados y alquileres de equipo outdoor, y cualquier otra zona de esta guía se alcanza en el día sin cambiar de alojamiento cada noche.",
    cosaVedere: [
      "El Lago de Thun y el Lago de Brienz, turquesa y lechosos por los sedimentos glaciares",
      "El centro de Interlaken, con el Höheweg, la larga avenida con vista al Jungfrau al fondo",
      "El castillo de Oberhofen, en el Lago de Thun, con el parque botánico asomado al agua",
      "El pueblo de Iseltwald, en el Lago de Brienz, con el embarcadero que se hizo famoso gracias a algunas producciones internacionales",
    ],
    cosaFare: [
      "Un paseo en barco histórico por uno de los dos lagos, con embarcaciones de vapor todavía en servicio",
      "Paseo por el Höheweg al atardecer, cuando el Jungfrau se enciende de rosa",
      "Hacer la compra grande en Coop o Migros en el centro antes de subir a los valles, donde los precios aumentan",
    ],
    doveDormire:
      "En las orillas de los dos lagos, a pocos minutos del centro, hay varios campings preparados para furgonetas: es la zona de la guía con más lugares legales para dormir.",
    doveMangiare:
      "Rösti, fondue y raclette con los quesos de alpe locales son la base de la cocina de la región. Una comida sencilla en un restaurante de gama media rara vez cuesta menos de 25-30 CHF por persona.",
    comeArrivare: "Salida de autopista directa desde Berna (aproximadamente una hora) o desde el Valais por Grimsel-Furka.",
    comeSpostarsi: "A pie en el centro; la furgoneta sirve para llegar a las demás zonas, todas a 20-30 minutos de conducción.",
    periodoMigliore: "de junio a septiembre, con julio-agosto más cálido y concurrido.",
    costi: "Campings 35-50 CHF/noche; paseo en barco desde unos 20-30 CHF por tramo sencillo.",
    erroriDaEvitare: [
      "Llegar sin haber reservado, o al menos localizado, un camping para la primera noche",
      "Hacer la compra en los minimercados de los valles, mucho más caros, en lugar de en los supermercados de Interlaken",
      "Subestimar cuánto tiempo llevan las otras zonas: Interlaken es la base, no el destino principal del viaje",
    ],
    luoghi: [
      {
        nome: "Harder Kulm",
        testo: "El mirador sobre Interlaken, a 1.322 metros, con vistas a los dos lagos y, en día claro, al Eiger, Mönch y Jungfrau. Arriba hay una plataforma panorámica y un restaurante en un edificio con aire de castillo.",
        come: "Funicular desde la estación Harder Bahn, cerca de Interlaken Ost.",
        quando: "Final de la tarde por la luz sobre los lagos. Solo funciona en temporada: fechas en la web oficial.",
        tempo: "2 horas",
        consiglio: "Mirar las webcams antes de subir: con nubes bajas la vista desaparece."
      },
      {
        nome: "Lago de Brienz y cascadas de Giessbach",
        testo: "El lago más verde y menos turístico, con las cascadas de Giessbach que caen en 14 saltos junto a un hotel histórico. Se llega en barco.",
        come: "Barco desde Interlaken Ost o Brienz hasta el muelle, luego el funicular histórico de Giessbach.",
        quando: "Por la mañana, en primavera cuando las cascadas van llenas.",
        tempo: "media jornada",
        consiglio: "El corto paseo por el bosque del muelle a las cascadas es agradable."
      },
      {
        nome: "Lago de Thun",
        testo: "El lago al oeste de Interlaken, con el castillo de Thun, pueblos en la orilla y el vapor histórico. Spiez tiene un castillo sobre el lago.",
        come: "Barco o tren desde Interlaken West; el barco es mucho más lento que el tren.",
        quando: "Verano.",
        tempo: "media jornada",
        consiglio: "Tomar el barco hasta Thun y volver en tren, para ver el lago y ahorrar tiempo."
      },
      {
        nome: "Iseltwald",
        testo: "Un pequeño pueblo en el lago de Brienz, en un promontorio con un antiguo castillo, hoy centro de rehabilitación. Famoso por el embarcadero donde se rodó una escena de la serie coreana «Crash Landing on You».",
        come: "En coche o autobús desde Interlaken Ost.",
        quando: "A primera hora, antes de los grupos.",
        tempo: "1-2 horas",
        costo: "Embarcadero de pago, 5 CHF, con torniquete (desde 2023).",
        consiglio: "El muelle se ve mejor al amanecer."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Harder Kulm por la mañana",
          "Barco por el lago de Brienz",
          "Giessbach por la tarde",
          "Cena en Interlaken"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Harder Kulm y lago de Thun",
          "Día 2: lago de Brienz, Giessbach e Iseltwald"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        perChi: "para una base cómoda",
        testo: "Trenes a todos los valles. Precios altos y centro muy turístico, pero cómodo sin coche."
      },
      {
        nome: "Brienz e Iseltwald",
        perChi: "para el silencio",
        testo: "En el lago de Brienz, con menos gente; los destinos de los valles requieren coche o tren."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patata rallada y frita, a menudo con huevo o queso, base de la cocina suizo-alemana."
      },
      {
        nome: "Fondue de queso",
        testo: "Gruyère y Emmental fundidos, que se comen con pan de una olla común."
      },
      {
        nome: "Chocolate suizo",
        testo: "De las tiendas de la ciudad y de los supermercados Coop y Migros, lo más barato."
      }
    ],
    attenzioni: [
      "Los precios son muy altos: comer en los supermercados Coop y Migros reduce el gasto.",
      "Los billetes de barco están incluidos en el Swiss Travel Pass: comprobarlo antes de pagar.",
      "Para conducir hace falta la viñeta de autopista, que se compra en la frontera o en línea."
    ],
    esperienzeSlugs: ['giro-battello-laghi-thun-brienz'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "Interlaken vista desde arriba, con el río Aare de color esmeralda atravesando la ciudad entre las montañas, en la llanura entre los lagos de Thun y Brienz",
    immagine: '/images/svizzera/interlaken.jpg',
  },
  {
    slug: 'lauterbrunnen',
    paeseSlug: 'svizzera',
    ordine: 2,
    nome: "Lauterbrunnen y el valle de las cascadas",
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: "1 día completo",
    visitataPersonalmente: true,
    introduzione:
      "Una garganta glaciar de paredes verticales, con setenta y dos cascadas censadas en sus doce kilómetros. La más famosa es la Staubbach, 300 metros de salto casi en el centro del pueblo: inspiró a Goethe y, según la tradición local, el valle de Rivendel de «El Señor de los Anillos».",
    percheAndarci:
      "Es el valle más espectacular de la región y el punto de partida para Mürren, Wengen y Gimmelwald, pueblos sin coches a los que solo se llega en teleférico o cremallera. Y están las Trümmelbachfälle, un fenómeno geológico que no tiene igual en ningún otro sitio.",
    cosaVedere: [
      "La cascada Staubbach, que cae 300 metros casi en el centro del pueblo",
      "Las Trümmelbachfälle, diez cascadas glaciales que se ven desde galerías y ascensores excavados en la montaña (véase la ficha de experiencia dedicada)",
      "Los pueblos sin coches de Wengen y Gimmelwald, a los que solo se llega en teleférico o cremallera",
    ],
    cosaFare: [
      "Recorrer el fondo del valle a pie o en bici entre las cascadas, por un trazado casi llano",
      "Subir en teleférico o cremallera hacia Mürren o Wengen para la vista desde arriba sobre la garganta",
      "Visitar las Trümmelbachfälle, abiertas de principios de abril a principios de noviembre",
    ],
    doveDormire:
      "Campings equipados en el fondo del valle. **En este valle la acampada libre está prohibida**, con multas de hasta 200 CHF, y la prohibición se hace respetar.",
    doveMangiare: "Restaurantes del fondo del valle con cocina suizo-alemana de montaña; precios en la media alta de la región.",
    comeArrivare: "Desde Interlaken, 20 minutos en coche o en tren.",
    comeSpostarsi: "El fondo del valle a pie o en bici; para Mürren, Wengen y Gimmelwald hacen falta teleférico o cremallera, porque el coche no llega.",
    periodoMigliore: "de junio a septiembre, con las cascadas más caudalosas a principios de verano por el deshielo.",
    costi: "Trümmelbachfälle 18 CHF entrada adultos, 8 CHF niños de 6 a 15 años.",
    erroriDaEvitare: [
      "Montar mesa y sillas fuera de la furgoneta en un aparcamiento no autorizado: la policía local controla precisamente eso, incluso donde dormir dentro del vehículo se tolera",
      "Llegar a las Trümmelbachfälle sin saber que están cerradas de principios de noviembre a principios de abril",
      "No prever calzado de lluvia: las galerías de las cascadas son húmedas y resbaladizas",
    ],
    luoghi: [
      {
        nome: "Cascada de Staubbach",
        testo: "Una cascada de unos 297 metros que cae de una pared vertical sobre el pueblo, a menudo convertida en niebla por el viento.",
        come: "A pie desde la estación de Lauterbrunnen, pocos minutos; se contempla desde el pueblo.",
        quando: "Por la mañana, cuando el sol entra en el valle. Primavera para el caudal máximo.",
        tempo: "45 minutos",
        consiglio: "Llevar chaqueta impermeable: el viento trae las salpicaduras."
      },
      {
        nome: "Cascadas de Trümmelbach",
        testo: "Diez cascadas glaciares que corren dentro de la montaña, vistas desde pasarelas y túneles con un ascensor en túnel. Abiertas de primavera a otoño; prohibidas a menores de 4 años y a perros.",
        come: "En autobús postal desde Lauterbrunnen hacia Stechelberg, o a pie por el valle.",
        quando: "Abiertas más o menos de principios de abril a principios de noviembre, de 9 a 17 (julio y agosto 8.30-18).",
        tempo: "1-1 hora y media",
        url: "https://www.truemmelbachfaelle.ch/",
        consiglio: "Llevar zapatos con suela adherente: las pasarelas están mojadas."
      },
      {
        nome: "Wengen",
        testo: "Un pueblo sin coches en una terraza alta, al que se llega en tren de cremallera. Da acceso a Kleine Scheidegg y a la línea del Jungfraujoch.",
        come: "Tren de cremallera desde Lauterbrunnen.",
        quando: "Todo el año.",
        tempo: "2 horas",
        consiglio: "Salir de aquí para la caminata a Männlichen, con vistas al grupo del Eiger."
      },
      {
        nome: "El valle a pie hasta Stechelberg",
        testo: "El sendero llano del fondo del valle que sigue el torrente de Lauterbrunnen hacia Stechelberg, entre prados y paredes de roca por las que bajan decenas de cascadas. Pasa cerca del Trümmelbach y de la salida del teleférico a Mürren. Es la caminata más fácil de la región y muestra por qué el valle es famoso.",
        come: "Se sale a pie del pueblo; para volver está el autobús postal por la carretera del valle.",
        quando: "De mayo a octubre; tras días de lluvia las cascadas llevan más agua.",
        tempo: "2-3 horas a pie",
        costo: "Gratis.",
        consiglio: "Ir a pie y volver en autobús: el sendero sube suavemente hacia Stechelberg."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Staubbach a la apertura",
          "Cascadas de Trümmelbach",
          "Tren de cremallera a Wengen",
          "Caminata panorámica y regreso"
        ]
      }
    ],
    zone: [
      {
        nome: "Lauterbrunnen",
        perChi: "para estar en el valle",
        testo: "Campings y alojamientos en el fondo del valle, casi sin coches de noche; más frío y poca vida nocturna."
      },
      {
        nome: "Wengen y Mürren",
        perChi: "para pueblos de la meseta",
        testo: "Sin coches, con vistas desde arriba, pero hay que llegar en cremallera o teleférico con el equipaje."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patatas fritas, con queso o salchicha."
      },
      {
        nome: "Älplermagronen",
        testo: "Pasta, patatas, queso y cebolla frita, plato de refugio alpino."
      },
      {
        nome: "Quesos de alpe",
        testo: "Se compran en pequeñas tiendas y a los productores."
      }
    ],
    attenzioni: [
      "Las vacas pastan en los senderos: no acercarse a las madres con terneros.",
      "El tiempo cambia rápido: niebla y lluvia pueden ocultar las cascadas altas."
    ],
    esperienzeSlugs: ['trummelbachfalle'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "La cascada Staubbach cayendo de la pared de roca sobre los chalés de Lauterbrunnen, entre nubes bajas, en tonos casi monocromos",
    immagine: '/images/svizzera/lauterbrunnen.jpg',
  },
  {
    slug: 'grindelwald',
    paeseSlug: 'svizzera',
    ordine: 3,
    nome: "Grindelwald y el First",
    tipologia: ['montagna', 'panorama', 'famiglia'],
    giorniConsigliati: "1 día",
    visitataPersonalmente: true,
    introduzione:
      "A los pies de la cara norte del Eiger, Grindelwald es el pueblo más «de postal» de la región. Desde aquí sale el teleférico al First, donde el Cliff Walk regala uno de los panoramas más fotografiados de los Alpes Berneses sin ninguna caminata exigente.",
    percheAndarci:
      "Es la forma más sencilla de acercarse al Eiger sin un desnivel serio, y el First sirve tanto para quien camina hasta el Bachalpsee como para quien solo quiere el panorama desde el teleférico.",
    cosaVedere: [
      "La cara norte del Eiger, visible desde todo el pueblo",
      "El First Cliff Walk, una pasarela metálica en voladizo sobre la pared rocosa",
      "El Bachalpsee, un pequeño lago alpino que refleja el Eiger, el Mönch y el Jungfrau en los días sin viento",
    ],
    cosaFare: [
      "Subir en teleférico al First y recorrer el Cliff Walk, incluido en el billete y repetible cuantas veces se quiera",
      "Caminar hasta el Bachalpsee, 2-3 horas ida y vuelta con desnivel moderado",
      "Probar la tirolina First Flyer, actividad extra de pago en el lugar",
    ],
    doveDormire: "Campings en la zona, más económicos que los de Interlaken pero con menos oferta.",
    doveMangiare: "Restaurantes de montaña con vista al Eiger, precios alineados con el resto de la región.",
    comeArrivare: "Desde Interlaken, 20 minutos en coche o en tren.",
    comeSpostarsi: "El pueblo se recorre a pie; para el First y el Bachalpsee hace falta el teleférico.",
    periodoMigliore: "de junio a septiembre; el Bachalpsee suele seguir helado hasta bien entrado junio.",
    costi: "Teleférico First 72-76 CHF i/v según la temporada; Cliff Walk incluido.",
    erroriDaEvitare: [
      "Subir al First creyendo que el Bachalpsee está «a la vuelta de la esquina»: la caminata requiere 2-3 horas ida y vuelta",
      "Subestimar el viento en la cima, que en el Cliff Walk puede ser fuerte incluso con el cielo despejado en el valle",
    ],
    luoghi: [
      {
        nome: "First y el Cliff Walk",
        testo: "Desde Grindelwald el teleférico sube a First, a 2.166 metros, con vistas al Eiger, Mönch y Jungfrau. El Cliff Walk es una pasarela metálica de 45 metros colgada sobre el vacío, a lo largo de la pared.",
        come: "Teleférico desde Grindelwald, con varios tramos. El Cliff Walk está incluido en la entrada.",
        quando: "Por la mañana, con el cielo más despejado. Cierres y horarios varían según la temporada.",
        tempo: "2-3 horas",
        costo: "Precios en la web oficial; descuentos con Swiss Travel Pass o Half Fare Card.",
        consiglio: "La primera cabina de la mañana tiene menos cola; los glaciares se ven mejor antes del mediodía."
      },
      {
        nome: "Bachalpsee",
        testo: "Un lago de altura que refleja el Wetterhorn y el Schreckhorn. Desde First el sendero es fácil, de subida suave.",
        come: "A pie desde la estación de First por el sendero señalizado.",
        quando: "Por la mañana, cuando el agua está quieta y refleja las montañas.",
        tempo: "2 horas ida y vuelta",
        consiglio: "Llevar una capa de abrigo: sopla viento incluso en julio."
      },
      {
        nome: "Glaciar inferior (Unterer Gletscher)",
        testo: "El glaciar que baja al valle sobre Grindelwald, con una profunda garganta excavada por el río. Se llega a pie desde el pueblo.",
        come: "A pie desde el pueblo o con el teleférico de Pfingstegg.",
        quando: "Verano.",
        tempo: "2-3 horas",
        consiglio: "No pisar el hielo sin guía: hay grietas ocultas."
      },
      {
        nome: "Männlichen y el sendero panorámico",
        testo: "La cresta entre Grindelwald y Wengen, a la que se sube en telecabina desde Grindelwald Terminal. Desde la estación se sube en pocos minutos al mirador en forma de corona del Royal Walk, y luego sale el sendero panorámico hacia la Kleine Scheidegg, casi todo en bajada y frente al Eiger, el Mönch y la Jungfrau.",
        come: "Telecabina Männlichen desde Grindelwald Terminal; desde la Kleine Scheidegg se vuelve en tren a Grindelwald o a Wengen.",
        quando: "Verano, por la mañana; horarios y cierres de temporada de la telecabina en la web oficial.",
        tempo: "medio día",
        consiglio: "Hacer el sendero en dirección a la Kleine Scheidegg: se camina siempre con las tres cumbres delante."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Teleférico a First por la mañana",
          "Cliff Walk",
          "Caminata al Bachalpsee",
          "Bajada a pie o en teleférico"
        ]
      }
    ],
    zone: [
      {
        nome: "Grindelwald",
        perChi: "para hacer excursiones",
        testo: "El pueblo está al pie de la cara norte del Eiger, con servicios y acceso directo a los teleféricos."
      },
      {
        nome: "Interlaken",
        perChi: "para ahorrar",
        testo: "Tren directo desde Interlaken Ost, con más oferta de alojamiento."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patatas fritas, con huevo o queso, en restaurantes de alpe."
      },
      {
        nome: "Fondue",
        testo: "Queso fundido en olla, en refugios y restaurantes del pueblo."
      },
      {
        nome: "Merengue con nata",
        testo: "Un postre de merengues y nata de montaña."
      }
    ],
    attenzioni: [
      "Con nubes bajas la vista desde First desaparece: mirar las webcams antes de comprar la entrada.",
      "Las pasarelas del Cliff Walk no son aptas para quien tiene vértigo.",
      "Los senderos se cubren de nieve desde octubre; comprobar su estado."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "La cara norte del Eiger nevada dominando el pueblo de Grindelwald, con chalés y prados verdes a sus pies",
    immagine: '/images/svizzera/grindelwald.jpg',
  },
  {
    slug: 'jungfraujoch',
    paeseSlug: 'svizzera',
    ordine: 4,
    nome: "Jungfraujoch, el Top of Europe",
    tipologia: ['ghiacciaio', 'panorama', 'esperienza unica'],
    giorniConsigliati: "1 día entero",
    visitataPersonalmente: true,
    introduzione:
      "La estación ferroviaria más alta de Europa, a 3.454 metros. Llega hasta ella un tren de cremallera excavado casi por completo en la roca del Eiger y del Mönch entre 1896 y 1912. En la cima está el glaciar del Aletsch, el más largo de los Alpes.",
    percheAndarci:
      "Es el único punto de esta guía donde se está por encima de los 3.400 metros sin una excursión exigente, frente al glaciar más largo de los Alpes. Es también el billete más caro del viaje: hay que tratarlo como la jornada principal.",
    cosaVedere: [
      "El glaciar del Aletsch, el más extenso de los Alpes, patrimonio de la UNESCO",
      "El palacio de hielo excavado en el permafrost",
      "Las terrazas panorámicas, desde las que en los días despejados se ve hasta la Selva Negra",
    ],
    cosaFare: [
      "Subir con el tren de cremallera desde Interlaken Ost, saliendo temprano para tener más probabilidades de cielo despejado",
      "Caminar por el primer tramo del glaciar del Aletsch, donde está señalizado y es seguro",
      "Visitar el palacio de hielo, incluido en el billete",
    ],
    doveDormire: "No se pernocta en altura: es una excursión de un día desde Interlaken o desde los valles cercanos.",
    doveMangiare: "Restaurantes de autoservicio en la estación, precios de zona de alta montaña aislada.",
    comeArrivare: "Tren de cremallera desde Interlaken Ost, con cambios en Grindelwald o Lauterbrunnen y en Kleine Scheidegg, unas 2 h 20 en total.",
    comeSpostarsi: "A pie entre las terrazas y las galerías panorámicas en altura.",
    periodoMigliore: "todo el año, con horarios y frecuencias distintos entre temporada alta y baja; normalmente las mañanas son más despejadas que las tardes.",
    costi: "Billete i/v desde Interlaken Ost unos 224-261 CHF según la temporada; Good Morning Ticket con descuento para quien sale antes de las 8.",
    erroriDaEvitare: [
      "Salir a primera hora de la tarde: normalmente las nubes se forman después del mediodía y tapan la vista",
      "No reservar online: en taquilla los billetes suelen costar más",
      "Subestimar el frío en altura incluso en pleno verano: hacen falta cortavientos y capas incluso en julio",
    ],
    luoghi: [
      {
        nome: "Terraza de la Esfinge",
        testo: "El observatorio y la terraza a 3.571 metros, a los que se llega en ascensor desde la estación. Desde aquí se ven el Aletsch, el Mönch y, en días claros, la Selva Negra y los Vosgos.",
        come: "Ascensor rápido desde la estación (Top of Europe) a la plataforma.",
        quando: "Por la mañana, con menos nubes. Cerrada con viento fuerte o tormenta.",
        tempo: "45 minutos",
        costo: "Billete caro, con precios que cambian según la fecha y la temporada; descuentos con Swiss Travel Pass o Half Fare Card. Precios y ofertas en la web oficial.",
        url: "https://www.jungfrau.ch/",
        consiglio: "Mirar la webcam antes de salir: en días cubiertos no se ve nada."
      },
      {
        nome: "Palacio de hielo",
        testo: "Un túnel excavado en el glaciar, con esculturas de hielo, a unos 3.450 metros. Suelo resbaladizo y temperatura bajo cero todo el año.",
        come: "Incluido en la entrada, junto a la estación.",
        quando: "Todo el año.",
        tempo: "30 minutos",
        consiglio: "Llevar zapatos antideslizantes y guantes."
      },
      {
        nome: "Glaciar Aletsch y paseo por la Meseta",
        testo: "El glaciar más largo de los Alpes, más de 20 kilómetros, y el sendero de nieve pisada hacia el refugio Mönchsjoch. La caminata es fácil pero a gran altitud.",
        come: "Se sale de la estación y se sigue el sendero señalizado por la meseta.",
        quando: "Por la mañana; la nieve está más firme y el tiempo es mejor.",
        tempo: "1 hora",
        consiglio: "El aire es fino: caminar despacio y beber agua."
      },
      {
        nome: "Parada Eismeer",
        testo: "En la subida el tren va en túnel por dentro del Eiger y del Mönch y para en la estación Eismeer, a unos 3.160 metros. Desde ventanales excavados en la roca se mira el glaciar de abajo. Dura pocos minutos, pero es cuando se entiende la hazaña del ferrocarril, terminado en 1912.",
        come: "Parada breve incluida en el viaje, solo en la subida.",
        quando: "Todo el año.",
        tempo: "pocos minutos",
        consiglio: "Sentarse de modo que se pueda bajar enseguida: los ventanales son pocos y se llenan."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Salida de Interlaken Ost antes de las 8",
          "Cambio en Kleine Scheidegg",
          "Terraza de la Esfinge y palacio de hielo",
          "Paseo por la meseta",
          "Regreso a primera hora de la tarde"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        perChi: "para salir temprano",
        testo: "Base cómoda para el primer tren; alojamiento para todos los presupuestos."
      },
      {
        nome: "Grindelwald",
        perChi: "para el tren directo",
        testo: "Desde Grindelwald, el tren de cremallera hasta Kleine Scheidegg implica menos cambios."
      }
    ],
    sapori: [
      {
        nome: "Chocolate Lindt",
        testo: "Hay una tienda arriba, cara y turística, pero es un souvenir típico."
      },
      {
        nome: "Rösti de montaña",
        testo: "En el autoservicio de la estación."
      },
      {
        nome: "Té caliente y sopa",
        testo: "Para entrar en calor entre las dos salidas al hielo."
      }
    ],
    attenzioni: [
      "El mal de altura puede afectar incluso a 3.400 metros: subir con calma, beber y parar si hay dolor de cabeza.",
      "El billete es de los más caros del país: comparar las tarifas del Good Morning Ticket.",
      "No guardar documentos en bolsillos exteriores: con viento y guantes es incómodo buscarlos."
    ],
    esperienzeSlugs: ['jungfraujoch-top-of-europe'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "El glaciar del Aletsch y el Jungfraufirn vistos desde la terraza panorámica de la Sphinx en el Jungfraujoch",
    immagine: '/images/svizzera/jungfraujoch.jpg',
  },
  {
    slug: 'muerren-schilthorn',
    paeseSlug: 'svizzera',
    ordine: 5,
    nome: "Mürren y el Schilthorn",
    tipologia: ['montagna', 'panorama', 'trekking'],
    giorniConsigliati: "1 día, más media jornada para quien hace la vía ferrata",
    visitataPersonalmente: true,
    introduzione:
      "Mürren es uno de los pueblos sin coches del valle de Lauterbrunnen, con una de las vistas más abiertas de la región sobre el Eiger, el Mönch y el Jungfrau. Sobre el pueblo, el teleférico sube al Schilthorn, donde el restaurante giratorio Piz Gloria, hecho famoso por una película de James Bond, mira a 360 grados sobre más de doscientas cumbres.",
    percheAndarci:
      "Tiene el mismo panorama que Grindelwald sobre la cadena Eiger-Mönch-Jungfrau, pero desde el lado opuesto del valle y en un pueblo sin coches. Y de aquí parte la vía ferrata más conocida de la región.",
    cosaVedere: [
      "El panorama sobre la cadena Eiger-Mönch-Jungfrau desde el pueblo de Mürren, sin paredes que bloqueen la vista",
      "El restaurante giratorio Piz Gloria en la cima del Schilthorn, escenario de la película «007 al servicio secreto de Su Majestad»",
      "El pueblo de Gimmelwald, todavía más pequeño y menos turístico, al que se llega a pie por la vía ferrata o en teleférico",
    ],
    cosaFare: [
      "Subir en teleférico al Schilthorn para el panorama de 360 grados",
      "Recorrer la vía ferrata Mürren-Gimmelwald, unos 2,2 km con un puente colgante de 90 metros (véase la ficha de experiencia dedicada)",
      "Caminar de Mürren a Gimmelwald por el sendero normal, alternativa sin equipo de ferrata",
    ],
    doveDormire: "No hay ningún camping dentro de Mürren (pueblo sin coches): se duerme en los campings del fondo del valle en Lauterbrunnen o Stechelberg.",
    doveMangiare: "Restaurantes de pueblo con cocina de montaña; el Piz Gloria en la cima del Schilthorn tiene un menú turístico con precios de terraza panorámica.",
    comeArrivare: "Desde Lauterbrunnen, teleférico desde Stechelberg o cremallera vía Grütschalp.",
    comeSpostarsi: "Mürren se recorre a pie; para el Schilthorn y para Gimmelwald hacen falta teleférico o vía ferrata.",
    periodoMigliore: "de junio a octubre; la vía ferrata está abierta solo en esta ventana.",
    costi: "Teleférico Schilthorn unos 115 CHF i/v desde Stechelberg, 91 CHF desde Mürren.",
    erroriDaEvitare: [
      "Afrontar la vía ferrata sin kit homologado o sin haber hecho antes un recorrido más sencillo",
      "Dejar la furgoneta en Lauterbrunnen pensando en conducir hasta Mürren: al pueblo no se llega en coche",
    ],
    confronti: [
      {
        titolo: "Subir al Schilthorn desde Stechelberg o desde Mürren",
        introduzione:
          "El teleférico al Schilthorn tiene dos puntos de partida, con una diferencia de precio y de tiempo que conviene conocer antes de elegir.",
        opzioni: [
          {
            nome: "Desde Stechelberg (fondo del valle)",
            sintesi: "El recorrido completo, desde el fondo del valle de Lauterbrunnen hasta la cima, con un solo billete en varios tramos.",
            costo: "unos 115 CHF i/v",
            durata: "32 minutos solo de ida",
            pro: ["Un único billete para todo el desnivel", "No requiere coger antes la cremallera a Mürren"],
            contro: ["Más caro que el tramo desde Mürren", "La furgoneta tiene que llegar hasta Stechelberg, último tramo del valle"],
            perChi: "Quien llega en furgoneta hasta el interior del valle y no quiere cambiar de medio varias veces.",
          },
          {
            nome: "Desde Mürren",
            sintesi: "Primero se llega a Mürren en cremallera desde Lauterbrunnen vía Grütschalp, luego se coge el teleférico más corto al Schilthorn.",
            costo: "unos 91 CHF i/v desde Mürren",
            durata: "tramo más corto que desde Stechelberg",
            pro: ["Tramo final más económico", "En cualquier caso se pasa por Mürren, útil para quien quiere ver también el pueblo"],
            contro: ["Hace falta también el billete de la cremallera hasta Mürren, así que se ahorra menos de lo que parece"],
            perChi: "Quien quiere en cualquier caso parar en Mürren antes o después de la subida al Schilthorn.",
          },
        ],
        raccomandazione:
          "Para quien tiene furgoneta y quiere ver también el pueblo de Mürren, el tramo desde Stechelberg con parada intermedia sigue siendo el más sencillo de organizar en una sola jornada.",
      },
    ],
    luoghi: [
      {
        nome: "Schilthorn y Piz Gloria",
        testo: "La cima a 2.970 metros con el restaurante giratorio que aparece en una película de James Bond de 1969. Desde la terraza se ven Eiger, Mönch y Jungfrau.",
        come: "Teleférico desde Stechelberg (valle) o desde Mürren, en varios tramos.",
        quando: "Por la mañana, con la mejor luz. Cerrado con viento fuerte.",
        tempo: "2-3 horas",
        costo: "Precios en la web oficial, según la estación de salida; grandes descuentos con el Swiss Travel Pass.",
        url: "https://www.schilthorn.ch/",
        consiglio: "Desde el valle la subida es más larga pero da vistas de las paredes."
      },
      {
        nome: "Mürren",
        testo: "Un pueblo sin coches en la meseta, frente a la cara norte del Eiger. Un lugar para la vista, no para monumentos.",
        come: "Teleférico desde Stechelberg o tren desde Grütschalp.",
        quando: "Todo el año.",
        tempo: "2 horas",
        consiglio: "Caminar hasta Allmendhubel para ver las montañas."
      },
      {
        nome: "Gimmelwald",
        testo: "Un diminuto pueblo agrícola a media pared, sin coches, al que se llega en teleférico o a pie desde Mürren. Pajares de madera y vacas pastando. Es el rincón más tranquilo del valle, con la misma vista que Mürren y muy pocas camas.",
        come: "Sendero en bajada desde Mürren, o el teleférico de Stechelberg, que para aquí.",
        quando: "Verano y otoño.",
        tempo: "1 hora y media",
        consiglio: "Es un pueblo vivo: respetar las propiedades y no entrar en los establos."
      },
      {
        nome: "Birg y el Thrill Walk",
        testo: "La estación intermedia del teleférico del Schilthorn, colgada sobre el valle. De aquí sale el Thrill Walk, un sendero equipado que baja por las paredes verticales de la roca. Se ve de cerca la cara norte del Eiger, con el vacío bajo los pies.",
        come: "Se baja en Birg con el mismo billete del teleférico del Schilthorn.",
        quando: "Cuando el teleférico funciona; con hielo la pasarela puede cerrar.",
        tempo: "30-45 minutos",
        costo: "Incluido en el billete del teleférico.",
        consiglio: "Quien tenga vértigo puede quedarse en la terraza de la estación, que tiene la misma vista."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Teleférico al Schilthorn por la mañana",
          "Desayuno en Piz Gloria",
          "Bajada a Mürren",
          "Caminata a Gimmelwald",
          "Regreso a Stechelberg"
        ]
      }
    ],
    zone: [
      {
        nome: "Mürren",
        perChi: "para vistas y silencio",
        testo: "En la meseta, sin coches; pocos servicios y precios altos."
      },
      {
        nome: "Lauterbrunnen",
        perChi: "para ahorrar",
        testo: "Fondo del valle, más servicios y más barato, con teleférico a Mürren."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patatas fritas con huevo o queso, en los restaurantes de Mürren."
      },
      {
        nome: "Berner Platte",
        testo: "Plato bernés de carnes variadas y chucrut, en las tabernas."
      },
      {
        nome: "Fondue",
        testo: "Queso fundido, en los restaurantes del pueblo."
      }
    ],
    attenzioni: [
      "Con nubes bajas el Schilthorn no se ve: mirar las webcams.",
      "Por la tarde el teleférico para pronto: anotar la última salida.",
      "Gimmelwald es un pueblo residencial: no hacer ruido por la noche."
    ],
    esperienzeSlugs: ['via-ferrata-muerren-gimmelwald'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "Una cabina del teleférico del Schilthorn suspendida entre Mürren y Birg, sobre las paredes rocosas del valle de Lauterbrunnen",
    immagine: '/images/svizzera/muerren-schilthorn.jpg',
  },
  {
    slug: 'grimsel-furka',
    paeseSlug: 'svizzera',
    ordine: 6,
    nome: "Puerto de Grimsel y puerto de Furka",
    tipologia: ['roadtrip', 'panorama', 'passi alpini'],
    giorniConsigliati: "1 día de traslado",
    visitataPersonalmente: true,
    introduzione:
      "La carretera que lleva de los Alpes Berneses al Valais a través de dos de los puertos más espectaculares de Suiza: el puerto de Grimsel (2.164 m), entre embalses de color esmeralda, y el puerto de Furka (2.429 m), famoso por la persecución en Aston Martin de «Goldfinger» y asomado a la lengua terminal del glaciar del Ródano.",
    percheAndarci:
      "Es la jornada de conducción pura de esta guía: aquí la furgoneta sirve para atravesar los Alpes, además de para visitarlos. Y conecta la Jungfrau Region con Zermatt sin volver atrás hacia la llanura.",
    cosaVedere: [
      "Los embalses del Grimsel, verde esmeralda entre la roca gris",
      "El glaciar del Ródano, visible desde el puerto de Furka: está en fuerte retroceso y en verano está en parte cubierto con lonas reflectantes para frenar su deshielo",
      "El Hotel Belvédère, abandonado en el puerto de Furka, donde se rodó la persecución en coche de «Goldfinger»",
    ],
    cosaFare: [
      "Recorrer la carretera con paradas fotográficas en los miradores señalizados",
      "Una breve caminata hasta la lengua del glaciar del Ródano, donde se permite el acceso",
    ],
    doveDormire: "No hay parada prevista: es una jornada de traslado entre la Jungfrau Region y el Valais.",
    doveMangiare: "Pocos refugios y puntos de restauración en los puertos, con precios de alta montaña aislada: conviene llevar provisiones en la furgoneta.",
    comeArrivare: "Desde Interlaken o desde la zona de Lauterbrunnen-Mürren, unas 2-3 horas de conducción con paradas.",
    comeSpostarsi: "Solo en coche o furgoneta; no existe un enlace público directo a lo largo de todo el trazado.",
    periodoMigliore: "de junio a octubre; las fechas de apertura cambian cada año según la nieve que quede.",
    costi: "Sin peaje en la carretera.",
    erroriDaEvitare: [
      "Programar el traslado sin comprobar antes que los dos puertos estén abiertos, sobre todo a principios de junio o a finales de octubre",
      "No saber que el Furka tiene una alternativa en tren lanzadera (Furka Autoverlad) cuando el puerto está cerrado a la circulación ordinaria",
    ],
    luoghi: [
      {
        nome: "Puerto del Grimsel",
        testo: "Un puerto a 2.164 metros entre el cantón de Berna y el Valais, en un paisaje de embalses, presas y granito pulido por el hielo. La carretera tiene curvas y miradores.",
        come: "En coche desde Meiringen hacia Gletsch. Normalmente abierta de junio a octubre.",
        quando: "Por la mañana: menos tráfico y mejor luz. Comprobar la apertura en primavera y otoño.",
        tempo: "2 horas con paradas",
        consiglio: "Parar en la presa de Räterichsboden y el lago del Grimsel."
      },
      {
        nome: "Glaciar del Ródano",
        testo: "El nacimiento del Ródano, que baja del glaciar frente al hotel Belvédère. En verano se puede visitar una gruta de hielo excavada en el glaciar.",
        come: "Desde el aparcamiento de Gletsch, a pocos minutos a pie del Belvédère.",
        quando: "Verano.",
        tempo: "1 hora",
        consiglio: "El glaciar ha retrocedido mucho: los carteles muestran su posición en distintos años."
      },
      {
        nome: "Puerto de la Furka",
        testo: "Un puerto a 2.429 metros, con curvas empinadas y vistas al Ródano. El puerto fue escenario de una película de James Bond (Goldfinger, 1964).",
        come: "En coche desde Gletsch, subiendo por las curvas.",
        quando: "Verano.",
        tempo: "1 hora",
        consiglio: "La carretera tiene tramos estrechos: ceder el paso a quien sube."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Meiringen",
          "Puerto del Grimsel",
          "Gletsch y glaciar del Ródano",
          "Puerto de la Furka",
          "Andermatt o regreso por el Susten"
        ]
      }
    ],
    zone: [
      {
        nome: "Meiringen",
        perChi: "para quien llega desde Berna",
        testo: "Ciudad al pie del Grimsel, con hoteles para todos los presupuestos."
      },
      {
        nome: "Andermatt",
        perChi: "para seguir hacia el Tesino",
        testo: "Pueblo alpino en la Furka, cómodo para seguir hacia el Gotardo."
      }
    ],
    sapori: [
      {
        nome: "Älplermagronen",
        testo: "Pasta, patatas y queso, en los refugios."
      },
      {
        nome: "Merengue de Meiringen",
        testo: "El postre que, según la tradición, nació en el pueblo, con nata."
      },
      {
        nome: "Bergkäse",
        testo: "Queso de alpe."
      }
    ],
    attenzioni: [
      "Los puertos cierran de octubre-noviembre a junio: comprobar la apertura en sitios oficiales.",
      "El mal tiempo y el hielo pueden cerrar el puerto durante el día.",
      "Combustible: las gasolineras son escasas en altura, repostar en el valle."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "El valle del puerto de Grimsel con los embalses entre las rocas graníticas y las cumbres todavía nevadas",
    immagine: '/images/svizzera/grimsel-furka.jpg',
  },
  {
    slug: 'zermatt',
    paeseSlug: 'svizzera',
    ordine: 7,
    nome: "Zermatt y el Cervino",
    tipologia: ['montagna', 'panorama', 'iconico'],
    giorniConsigliati: "1-2 días",
    visitataPersonalmente: true,
    introduzione:
      "El punto más al sur de esta guía, y el único donde la furgoneta no entra: Zermatt está cerrada al tráfico privado desde 1961. A cambio está el Cervino (Matterhorn), 4.478 metros de pirámide de roca casi perfecta, visible desde el centro del pueblo.",
    percheAndarci:
      "El Cervino es una de las montañas más reconocibles del mundo. Zermatt es la zona más cara y más lejana de esta guía, pero tiene miradores (el Gornergrat antes que ninguno) que en el resto del recorrido no tienen equivalente.",
    cosaVedere: [
      "El Cervino (Matterhorn), visible desde el centro del pueblo en cada día despejado",
      "El Gornergrat, al que se llega por el ferrocarril de cremallera al aire libre más alto de Europa",
      "El casco antiguo de Zermatt, sin tráfico de automóviles, con los tradicionales graneros de madera sobre pilares de piedra",
    ],
    cosaFare: [
      "Subir al Gornergrat en tren para la vista frontal del Cervino",
      "Pasear por el centro de Zermatt, libre de coches",
      "Para quien tiene tiempo, uno de los muchos teleféricos panorámicos menores de los alrededores del pueblo",
    ],
    doveDormire: "Dentro de Zermatt no se duerme en furgoneta, porque la ciudad está cerrada al tráfico privado: se duerme en la furgoneta en Täsch o se vuelve hacia las otras zonas.",
    doveMangiare: "Restaurantes de pueblo turístico, entre los más caros de la guía; conviene alternarlos con comidas preparadas en la furgoneta en Täsch.",
    comeArrivare: "La furgoneta se deja en el aparcamiento cubierto de Täsch, 5 km antes de Zermatt; desde allí sale un tren lanzadera cada 20 minutos.",
    comeSpostarsi: "A pie por el pueblo; para el Gornergrat y las demás cotas hacen falta el ferrocarril de cremallera o los teleféricos.",
    periodoMigliore: "de junio a septiembre; el Cervino sigue siendo en cualquier caso visible (cuando el cielo está despejado) todo el año.",
    costi: "Aparcamiento de Täsch desde 17 CHF/día; Gornergrat aparte, no incluido en el aparcamiento.",
    erroriDaEvitare: [
      "Intentar entrar en Zermatt en furgoneta o en coche: la prohibición existe y se controla",
      "No tener en cuenta el tiempo de conducción para llegar: más de dos horas desde Interlaken incluso pasando por Grimsel-Furka",
      "Dar por hecho que el Cervino esté libre de nubes: se forma las suyas propias incluso cuando alrededor el cielo está limpio",
    ],
    luoghi: [
      {
        nome: "Gornergrat",
        testo: "El tren de cremallera sube hasta 3.089 metros. Desde la terraza se ven el Cervino, el Monte Rosa y el glaciar del Gorner.",
        come: "Tren cremallera desde la estación de la Gornergrat Bahn en Zermatt; en verano las salidas son frecuentes.",
        quando: "Por la mañana, con el cielo más despejado.",
        tempo: "Media jornada",
        costo: "Ida y vuelta 132 CHF de mayo a octubre de 2026 y 102 CHF de noviembre de 2026 a abril de 2027; mitad de precio con Swiss Travel Pass o Half Fare Card.",
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Bajar en Rotenboden o Riffelberg para caminar un tramo."
      },
      {
        nome: "Matterhorn Glacier Paradise",
        testo: "La estación a 3.820 metros, bajo la cumbre del Pequeño Cervino (3.883 m): uno de los puntos más altos de Europa a los que se llega en teleférico. En el glaciar hay excavada una gruta de hielo.",
        come: "Teleférico desde Zermatt con cambio en Furi y Trockener Steg.",
        quando: "A primera hora para tener el cielo más limpio.",
        tempo: "Media jornada",
        costo: "Ida y vuelta desde 104 CHF en la temporada noviembre 2026-abril 2027, con tarifas de temporada; precios actualizados en la web oficial.",
        url: "https://www.matterhornparadise.ch/",
        consiglio: "Llevar gafas de sol y una capa de abrigo: a 3.800 metros hace frío."
      },
      {
        nome: "Sendero de los cinco lagos",
        testo: "Una caminata de Blauherd hacia Sunnegga junto a cinco lagos alpinos (Stellisee, Grindjisee, Grünsee, Moosjisee y Leisee) que reflejan el Cervino. Una de las fotos clásicas.",
        come: "Funicular a Sunnegga y telecabina a Blauherd, luego a pie, más de bajada que de subida.",
        quando: "Verano; los lagos reflejan mejor por la mañana.",
        tempo: "3-4 horas",
        consiglio: "El Stellisee está muy concurrido: llegar temprano."
      },
      {
        nome: "Pueblo de Zermatt",
        testo: "El centro sin coches, con casas de madera oscura, tiendas y hoteles. El pequeño cementerio junto a la iglesia recuerda a los alpinistas muertos en el Cervino.",
        come: "A pie desde la estación.",
        quando: "Todo el año.",
        tempo: "1-2 horas",
        consiglio: "El museo del Cervino cuenta la historia de la primera ascensión en 1865."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Gornergrat por la mañana",
          "Comida en Riffelberg",
          "Caminata hacia Zermatt",
          "Cena en el pueblo"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Gornergrat y pueblo",
          "Día 2: Matterhorn Glacier Paradise o sendero de los cinco lagos"
        ]
      }
    ],
    zone: [
      {
        nome: "Zermatt",
        perChi: "para estar en el centro",
        testo: "Sin coches; alojamiento a todos los precios, pero caro."
      },
      {
        nome: "Täsch y Randa",
        perChi: "para ahorrar",
        testo: "Precios más bajos, con el tren lanzadera frecuente a Zermatt."
      }
    ],
    sapori: [
      {
        nome: "Raclette",
        testo: "Queso fundido raspado sobre patatas, típico del Valais."
      },
      {
        nome: "Fondue de queso",
        testo: "Con vino blanco del Valais."
      },
      {
        nome: "Cervino de chocolate",
        testo: "Un souvenir dulce, en muchas tiendas."
      }
    ],
    attenzioni: [
      "Los coches se quedan en Täsch: dejarlos en el aparcamiento y tomar el tren.",
      "Precios altos: comprar bocadillos en supermercados antes de subir.",
      "En días de viento o nubes los teleféricos pueden cerrar: dejar margen en el plan."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "El Cervino al atardecer reflejado en un pequeño lago alpino sobre Zermatt, con un excursionista de espaldas en primer plano",
    immagine: '/images/svizzera/zermatt.jpg',
  },
]
