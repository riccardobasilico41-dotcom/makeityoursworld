import type { Destinazione } from '@/lib/types'

export const destinazioniIslanda: Destinazione[] = [
  {
    slug: 'keflavik',
    paeseSlug: 'islanda',
    ordine: 1,
    nome: 'Keflavík',
    tipologia: ['cultura'],
    giorniConsigliati: "1 noche, a la llegada",
    visitataPersonalmente: true,
    introduzione: "El primer nudo del viaje: aquí aterrizamos, dormimos la primera noche en hotel (la única junto con Reikiavik) y al día siguiente recogimos coche y tienda.",
    percheAndarci: "Es el punto de partida obligado, a pocos minutos de la península de Reykjanes, una zona volcánica activa.",
    cosaVedere: ['El centro de Keflavík', 'La península de Reykjanes'],
    cosaFare: [
      "Cena en Kaffi Duus y paseo nocturno por el centro",
      "Excursión al volcán en erupción en la península de Reykjanes (véase la ficha de experiencia dedicada; fui por mi cuenta, sin tour, y el día exacto no lo anoté)",
    ],
    doveDormire:
      "Dormí en el Konvin Hotel, uno de los hoteles más grandes de la zona del aeropuerto: cómodo por la lanzadera, con un desayuno abundante. Las reseñas online (cerca de 3/5 en casi 940 reseñas de Tripadvisor) lo sitúan en la media para una escala de una noche: quien lo elige por la cercanía al aeropuerto lo encuentra práctico y el personal amable, otros señalan habitaciones frías o baños no impecables. Nada especial, pero para la primera noche funciona.\n\nAlternativas en Keflavík/Reykjanesbær. Económicas: guesthouses y pequeños B&B de la zona · gama media (aquí entra el Konvin Hotel): otros hoteles cerca del aeropuerto con lanzadera incluida · más cuidadas: hoteles boutique en el centro de Reikiavik (~45 min en coche), para quien en la primera o en la última noche renuncia de buen grado a la comodidad del aeropuerto.",
    doveMangiare: "Kaffi Duus (autobús 55 + pocos minutos a pie): pescado variado, unos 30 € por persona.",
    comeArrivare: "Vuelo a Keflavík; autobús 55 (unos 20 minutos, parada Kellir, 4 € por persona) hasta el centro.",
    comeSpostarsi: "Autobús 55 el primer día; coche de alquiler desde el día siguiente (recogida en Sixt Rent a Car en el aeropuerto).",
    periodoMigliore: "el de todo el recorrido: el verano, si se da la vuelta a la isla en tienda",
    costi: "Autobús 55: 4 € por persona y trayecto.",
    erroriDaEvitare: ["El último autobús 55 sale poco después de las 23 h: no hay que perderlo para volver al hotel"],
    miaEsperienza:
      "Keflavík fue una parada breve, pero está ligada a uno de los recuerdos más fuertes de Islandia: durante el viaje, en la península de Reykjanes, a pocos minutos de aquí, vi de cerca un volcán en erupción, yendo por mi cuenta, sin tour. El día exacto no lo anoté.",
    luoghi: [
      {
        nome: "Península de Reykjanes y zona volcánica",
        testo: "La punta suroeste de la isla, a pocos minutos del aeropuerto: campos de lava, cráteres y fumarolas sobre una dorsal entre dos placas tectónicas. Desde 2021 la zona ha tenido una serie de erupciones, y los senderos y áreas accesibles cambian cada tanto.",
        come: "En coche desde Keflavík. Antes de salir, consultar el estado de los senderos y los cierres en los sitios oficiales; con una erupción en curso solo se va donde lo permiten las autoridades.",
        quando: "Con cielo despejado y viento en calma; en verano la luz larga permite ir también por la tarde.",
        tempo: "media jornada",
        url: "https://safetravel.is",
        consiglio: "Fui por mi cuenta, sin tour: antes de salir siempre revisar gases, viento y cierres."
      },
      {
        nome: "Puente entre continentes (Midlina)",
        testo: "Un pequeño puente peatonal sobre la falla entre la placa norteamericana y la euroasiática, en Sandvík. Es un cruce simbólico, cómodo para una parada de media hora entre el aeropuerto y Reykjanes.",
        come: "En coche, unos 15 minutos desde Keflavík; aparcamiento gratuito junto al puente.",
        quando: "A cualquier hora; está al aire libre y siempre accesible.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Se combina bien con el faro de Reykjanesviti y la zona geotérmica de Gunnuhver."
      },
      {
        nome: "Centro de Keflavík y paseo marítimo",
        testo: "Una ciudad portuaria tranquila, con paseo marítimo, costa rocosa y el museo del Rock'n'Roll de Islandia. Para quien llega de noche es el lugar donde cenar sin moverse.",
        come: "A pie desde el centro o con el bus 55 desde el aeropuerto (unos 20 minutos).",
        quando: "Al atardecer, muy tarde en verano.",
        tempo: "1-2 horas",
        consiglio: "El último bus 55 sale poco después de las 23: tenerlo en cuenta para volver."
      }
    ],
    sapori: [
      {
        nome: "Pescado variado",
        testo: "Bacalao, eglefino y salvelino a la plancha o en sopa son la base de los locales del puerto; en Kaffi Duus es lo que comimos."
      },
      {
        nome: "Skyr",
        testo: "Lácteo denso parecido al yogur, en venta en todos los supermercados: desayuno barato y proteico."
      },
      {
        nome: "Hot dog islandés (pylsur)",
        testo: "Salchicha de cordero con cebolla cruda y frita y salsas; se encuentra en gasolineras y quioscos, a buen precio."
      }
    ],
    attenzioni: [
      "Volcán y gases: durante las erupciones seguir solo las indicaciones oficiales (safetravel.is, vedur.is) y no acercarse a las coladas.",
      "Con el coche de alquiler comprobar las coberturas por arena, ceniza y grava, a menudo excluidas del seguro básico.",
      "Llenar el depósito antes de dejar la zona de Reikiavik: en el Este y el Norte los surtidores son escasos y a menudo sin personal."
    ],
    esperienzeSlugs: ['vulcano-reykjanes'],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Colada de lava incandescente durante una erupción nocturna en la península de Reykjanes, cerca de Keflavík",
    immagine: '/images/islanda/keflavik-stock.jpg',
  },
  {
    slug: 'vik',
    paeseSlug: 'islanda',
    ordine: 2,
    nome: 'Vík',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: "1 noche, después de una jornada llena de cascadas",
    visitataPersonalmente: true,
    introduzione: "La primera noche en tienda del viaje, después de una jornada entre el Golden Circle y las cascadas más fotografiadas del sur de Islandia.",
    percheAndarci: "Es la base de una de las noches que mejor recuerdo del viaje: el avión siniestrado de Sólheimasandur, al que se llega a pie a medianoche, con la luz de finales de julio, que a medianoche no se apaga del todo.",
    cosaVedere: ['Geysir y Gullfoss (Golden Circle)', 'Seljalandsfoss y Gljúfrabúi', 'Skógafoss', 'Avión DC-3 siniestrado en Sólheimasandur'],
    cosaFare: [
      "Golden Circle: Geysir (erupciones cada 6-7 minutos) y Gullfoss, la «cascada dorada» de dos saltos",
      "Seljalandsfoss, pasando por detrás de la cascada, y la cercana Gljúfrabúi pasando por dentro del río",
      "Skógafoss y la subida de los unos 470 escalones del sendero panorámico",
      "Excursión nocturna al avión siniestrado: unos 20 minutos en coche desde Vík hasta el aparcamiento de la Ring Road, luego 4 km (40-60 minutos) a pie sobre arena negra llana y expuesta al viento, ida y vuelta",
    ],
    doveDormire:
      "Dormí en el camping de Vík (1.950 ISK + ducha 300 ISK): electricidad, duchas, cocina común. Es de hecho la única gran instalación de la zona, cómoda y bien atendida, aunque en las reseñas más recientes hay quien se queja de la masificación en temporada alta.\n\nAlternativas en Vík. Económicas: The Barn (uno de los mejores hostels de Islandia), Farmhouse Lodge Guesthouse · gama media: Hotel Kría, diseño nórdico en la calle principal · más cuidadas: Hótel Vík í Mýrdal.",
    doveMangiare: "Comida de bocadillo o por los alrededores de las cascadas; cena en el camping.",
    comeArrivare: "Desde Keflavík, con paradas en el Golden Circle y en las cascadas del sur por el camino.",
    comeSpostarsi: "Coche de alquiler (recogido por la mañana en Keflavík junto con la tienda).",
    periodoMigliore: "finales de julio, por la luz que a medianoche no se apaga del todo y hace posible la excursión nocturna al avión siniestrado",
    costi: "Camping 1.950 ISK + ducha 300 ISK; aparcamiento en Seljalandsfoss 700 ISK.",
    erroriDaEvitare: [
      "Después de una jornada ya llena, el avión siniestrado es una buena paliza: mejor valorar las fuerzas antes de salir a medianoche",
      "Llevar linterna o power bank para el móvil: cuatro kilómetros de arena negra llana y sin puntos de referencia",
    ],
    miaEsperienza:
      "A finales de julio a medianoche todavía había luz, así que después de cenar decidí a última hora no irme a dormir e ir a pie hasta el avión siniestrado. Después de una jornada ya llena fue una paliza, pero es probablemente el momento más absurdo del viaje, y el que mejor recuerdo.",
    luoghi: [
      {
        nome: "Þingvellir",
        testo: "Parque nacional y sitio UNESCO en la grieta entre dos placas tectónicas, donde en el año 930 se reunió el primer parlamento islandés. Se camina entre paredes de basalto y el lago, con la falla Almannagjá como paso.",
        come: "En coche desde Reikiavik (unos 45-50 minutos) o desde Keflavík. Senderos señalizados desde el centro de visitantes, sin guía necesaria.",
        quando: "Temprano por la mañana o al atardecer, para evitar los autocares; en verano abierto a todas horas.",
        tempo: "1-2 horas",
        url: "https://www.thingvellir.is",
        consiglio: "Aparcamiento y centro de visitantes son de pago: consultar las tarifas actuales en el sitio oficial."
      },
      {
        nome: "Geysir y Strokkur",
        testo: "Zona geotérmica del Círculo Dorado. El Geysir histórico está casi inactivo, pero el Strokkur lanza chorros de 15-20 metros cada pocos minutos.",
        come: "Parada desde la carretera, entrada libre al campo geotérmico; los senderos son cortos.",
        quando: "Con el viento que aleja el vapor del público; siempre abierto.",
        tempo: "45 minutos",
        costo: "entrada libre",
        consiglio: "Colocarse a barlovento y lejos de las pozas: el agua está casi a 100 grados."
      },
      {
        nome: "Gullfoss",
        testo: "La «cascada dorada»: dos saltos (unos 11 y 21 metros) en una garganta estrecha del río Hvítá. Una pasarela lleva hasta el borde, entre el vapor.",
        come: "Aparcamiento cercano; dos niveles de senderos, el bajo que llega al borde suele cerrar en invierno por el hielo.",
        quando: "Temprano por la mañana o al atardecer, con luz rasante.",
        tempo: "45 minutos",
        costo: "entrada libre",
        consiglio: "Impermeable puesto: la salpicadura llega hasta los senderos."
      },
      {
        nome: "Seljalandsfoss y Gljúfrabúi",
        testo: "Seljalandsfoss cae 60 metros y se puede rodear por un sendero resbaladizo que pasa detrás de la cortina. A 500 metros, escondida en una grieta, está Gljúfrabúi, que se ve entrando en el arroyo.",
        come: "Aparcamiento de pago (700 ISK cuando fui); recorrido corto por sendero embarrado.",
        quando: "Tarde de verano, con el sol dando a la caída desde el oeste.",
        tempo: "1 hora",
        costo: "aparcamiento 700 ISK (dato personal, a revisar)",
        consiglio: "Zapatos impermeables para entrar en la garganta de Gljúfrabúi."
      },
      {
        nome: "Skógafoss",
        testo: "Cascada de 25 metros de ancho y 60 de alto, en el borde del antiguo acantilado marino. Una escalera lateral sube a lo alto y continúa hacia el sendero de Fimmvörðuháls.",
        come: "Aparcamiento a los pies; el camping de al lado es cómodo para la noche.",
        quando: "Tarde, para el arcoíris cuando hay sol.",
        tempo: "45 minutos",
        costo: "entrada libre",
        consiglio: "Subir por la escalera de madera para la vista desde arriba: desde la plataforma se ve también la costa."
      },
      {
        nome: "Restos del DC-3 en Sólheimasandur",
        testo: "Un avión militar estadounidense caído en 1973 en una llanura de arena negra. La zona es desnuda y azotada por el viento; desde hace unos años ya no se llega en coche.",
        come: "Aparcamiento en la Ring Road y 4 km a pie por tramo (40-60 minutos) sobre arena plana. No hace falta guía.",
        quando: "Tarde en verano, cuando el sol roza el horizonte; de noche hace falta una linterna.",
        tempo: "2-3 horas ida y vuelta",
        consiglio: "Fuimos a medianoche con la luz de finales de julio: llevar agua y una batería externa, el recorrido no tiene puntos de referencia."
      }
    ],
    sapori: [
      {
        nome: "Kjötsúpa",
        testo: "Sopa de cordero con tubérculos, típica de los días de viento: se encuentra en los quioscos de las cascadas y en las cafeterías de las gasolineras."
      },
      {
        nome: "Pan de centeno (rúgbrauð)",
        testo: "Pan oscuro y dulce cocido bajo tierra con el calor geotérmico, servido con mantequilla y trucha ahumada en Laugarvatn."
      },
      {
        nome: "Comida de picnic",
        testo: "Los supermercados Bónus y Krónan son los más baratos de Islandia: comprar y cocinar en el camping para reducir a la mitad los costes."
      }
    ],
    attenzioni: [
      "En Reynisfjara y otras playas negras las olas anómalas (sneaker waves) llegan sin avisar: no dar nunca la espalda al mar.",
      "Las carreteras F y los vados sin puente requieren un 4x4 y normalmente no están cubiertos por el seguro básico del alquiler.",
      "El camping libre con tienda está muy limitado: usar los campings (costes bajos, servicios limpios) y respetar las señales.",
      "Fuera de la zona de Reikiavik muchas gasolineras son automáticas: llevar tarjeta con PIN."
    ],
    esperienzeSlugs: ['relitto-aereo-solheimasandur', 'golden-circle'],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Avión DC-3 siniestrado abandonado sobre la arena negra de Sólheimasandur, Islandia",
    immagine: '/images/islanda/vik-stock.jpg',
  },
  {
    slug: 'skaftafell-jokulsarlon',
    paeseSlug: 'islanda',
    ordine: 3,
    nome: 'Skaftafell y Jökulsárlón',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: "una jornada completa, sin pernoctación",
    visitataPersonalmente: true,
    introduzione: "El corazón helado del Parque Nacional del Vatnajökull, el más grande de Europa. En la misma jornada: trekking sobre el glaciar, kayak entre los icebergs y Diamond Beach.",
    percheAndarci: "Probablemente es la jornada más llena del viaje: el glaciar a pie, el kayak entre los icebergs y, antes aún, dos playas negras y un cañón.",
    cosaVedere: [
      "Dyrhólaey (faro y arco de lava negra) y Reynisfjara (playa de columnas de basalto)",
      "Fjaðrárgljúfur, cañón de unos 100 metros de profundidad",
      "Svartifoss, la cascada negra de Skaftafell",
      "Laguna de Jökulsárlón y Diamond Beach",
    ],
    cosaFare: [
      "Trekking guiado sobre el glaciar Vatnajökull, con crampones y piolet (véase la ficha de experiencia dedicada)",
      "Kayak entre los icebergs de la laguna de Jökulsárlón (véase la ficha de experiencia dedicada)",
      "Paseo por Reynisfjara (cuidado con las olas, imprevisibles y peligrosas) y Dyrhólaey",
      "Paseo fotográfico por Fjaðrárgljúfur, mucho menos concurrido que otros sitios de la zona",
    ],
    doveDormire: "No pernocté aquí: se duerme en Höfn, a una hora más adelante por la Ring Road.",
    doveMangiare: "Comida rápida en Reynisfjara (chiringuito de perritos calientes/sopa, 2-3.000 ISK).",
    comeArrivare: "Desde Vík, por la Ring Road, con paradas en Dyrhólaey, Reynisfjara y Fjaðrárgljúfur.",
    comeSpostarsi: "Coche de alquiler; la zona de Skaftafell se explora solo a pie.",
    periodoMigliore: "verano, por las mejores condiciones de acceso al glaciar",
    costi: "los precios del trekking sobre el glaciar y del kayak no los anoté: conviene consultarlos en las webs de los operadores al reservar",
    erroriDaEvitare: ["En Reynisfjara seguir siempre las indicaciones de seguridad: las olas son imprevisibles"],
    miaEsperienza:
      "El trekking sobre el glaciar y el kayak entre los icebergs fueron dos de las experiencias más intensas del viaje. El trekking lo hice con Troll Expeditions; el operador del kayak, las duraciones y los precios exactos no los anoté.",
    luoghi: [
      {
        nome: "Dyrhólaey",
        testo: "Promontorio con un arco de lava negra en el mar y un faro, muy bonito por la vista de la costa sur. En primavera parte de la zona cierra por la nidificación de aves, y entre mayo y agosto se ven frailecillos.",
        come: "En coche, camino de grava para recorrer con cuidado hasta el aparcamiento alto.",
        quando: "Finales de primavera y verano para los frailecillos; al atardecer por la luz.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Comprobar los cierres estacionales antes de subir."
      },
      {
        nome: "Reynisfjara",
        testo: "Playa de arena negra con columnas de basalto y los farallones de Reynisdrangar en el mar. Es una de las más fotogénicas y peligrosas de Islandia por las olas repentinas.",
        come: "Aparcamiento y sendero corto; hay carteles con un sistema de semáforo para las condiciones del mar.",
        quando: "Temprano por la mañana, cuando hay menos autocares.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Respetar las indicaciones de seguridad: las olas llegan mucho más alto de lo que parece."
      },
      {
        nome: "Fjaðrárgljúfur",
        testo: "Un cañón sinuoso de casi 100 metros de profundidad y unos 2 km de longitud, con paredes cubiertas de musgo. El sendero sube por el borde con vistas continuas.",
        come: "Aparcamiento cerca de la carretera; sendero bien cuidado para recorrer a pie.",
        quando: "Verano, con el río bajo; en primavera puede estar cerrado por el barro.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Quedarse en el sendero: la protección del musgo fue una de las razones de los cierres pasados."
      },
      {
        nome: "Skaftafell y Svartifoss",
        testo: "En el parque nacional del Vatnajökull, senderos entre abedules y lenguas de hielo. El más frecuentado lleva a la cascada Svartifoss, rodeada de columnas de basalto.",
        come: "Desde el centro de visitantes de Skaftafell, unos 1,5 km en subida, 45 minutos por tramo.",
        quando: "Verano, con luz larga; el sendero está cerrado o helado en los meses fríos.",
        tempo: "2-3 horas",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "El aparcamiento es de pago; el centro de visitantes tiene cafetería e información meteorológica."
      },
      {
        nome: "Laguna glaciar de Jökulsárlón y Diamond Beach",
        testo: "Laguna con icebergs desprendidos del glaciar Breiðamerkurjökull, que salen al mar por un canal. En la playa de arena negra al otro lado de la carretera los bloques de hielo brillan como diamantes.",
        come: "Aparcamiento gratuito cerca de la laguna. Se puede hacer un paseo en barco anfibio o zodiac con operadores de la zona; el kayak se reserva con antelación.",
        quando: "Temprano por la mañana o al atardecer; en verano la luz no baja.",
        tempo: "2-3 horas",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "El kayak entre icebergs es de mis recuerdos más fuertes: no anoté operador y precio, comprobar las ofertas actuales."
      }
    ],
    programmi: [
      {
        titolo: "1 día de Vík a Höfn",
        tappe: [
          "Salida temprano de Vík hacia el este",
          "Dyrhólaey y Reynisfjara",
          "Fjaðrárgljúfur",
          "Skaftafell (Svartifoss) o trekking en el glaciar",
          "Jökulsárlón y Diamond Beach",
          "Llegada a Höfn para dormir"
        ]
      }
    ],
    attenzioni: [
      "Reynisfjara: olas anómalas, mantenerse lejos del agua.",
      "En el glaciar ir solo con guías autorizados: crampones y piolet hacen falta de verdad.",
      "Comprobar el viento antes de salir: las ráfagas fuertes pueden dañar las puertas del coche, un daño no cubierto por el seguro básico."
    ],
    esperienzeSlugs: ['trekking-ghiacciaio-vatnajokull', 'kayak-jokulsarlon'],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Un gran iceberg azul flota en la laguna glaciar de Jökulsárlón, con las montañas del Vatnajökull al fondo',
    immagine: '/images/islanda/jokulsarlon-iceberg-riccardo.jpg',
  },
  {
    slug: 'hofn',
    paeseSlug: 'islanda',
    ordine: 4,
    nome: 'Höfn',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: "1 noche",
    visitataPersonalmente: true,
    introduzione: "La «capital de la langosta islandesa», con el decorado cinematográfico vikingo de Vestrahorn justo al lado del camping.",
    percheAndarci: "Una buena base después de la jornada más llena del viaje, con una parada curiosa en el Viking Village antes de reanudar la marcha.",
    cosaVedere: ['Viking Village (decorado construido en 2010)', 'Montaña Vestrahorn', 'Playa negra de Stokksnes'],
    cosaFare: ["Vuelta por el Viking Village: caballos pastando, reconstrucción de un poblado vikingo"],
    doveDormire:
      "En Höfn los campings son dos, el Vestrahorn y el municipal, y en cuál dormimos no lo anoté. El Vestrahorn (~2.800 ISK por persona/noche) incluye la entrada al Viking Village y la vista sobre Stokksnes, pero algunas reseñas señalan solo dos duchas, disponibles en horarios limitados; el camping municipal de Hafnarbraut (~1.800 ISK) es más céntrico, cerca de la piscina del pueblo.\n\nAlternativas en Höfn. Económicas: Höfn HI Hostel, Guesthouse Dyngja · gama media: Hotel Höfn, The Old Airline Guesthouse · más cuidadas: Fosshotel Vatnajökull, Brunnhóll Country Guesthouse.",
    doveMangiare: "Sopa de pescado en uno de los restaurantes de Höfn, la «capital de la langosta islandesa», o cena en el camping.",
    comeArrivare: "Desde Skaftafell/Jökulsárlón, aproximadamente una hora de conducción.",
    comeSpostarsi: "Coche de alquiler.",
    periodoMigliore: "el de todo el recorrido: el verano, si se da la vuelta a la isla en tienda",
    costi: "Camping Vestrahorn ~2.800 ISK/noche, camping municipal ~1.800 ISK/noche.",
    erroriDaEvitare: [],
    miaEsperienza: "Después de la jornada más intensa del viaje, Höfn fue una parada tranquila, cómoda para descansar antes del largo tramo hacia los fiordos del Este del día siguiente.",
    luoghi: [
      {
        nome: "Vestrahorn y Stokksnes",
        testo: "Una montaña de gabro de 454 metros que se refleja en las dunas negras de la playa de Stokksnes. Es uno de los lugares más fotografiados de Islandia.",
        come: "Tras la carretera a Stokksnes hay una entrada de pago gestionada por el dueño privado del terreno; luego unos minutos a pie.",
        quando: "Amanecer o atardecer, con agua baja para los reflejos.",
        tempo: "1-2 horas",
        costo: "entrada de pago (tarifa a comprobar in situ)",
        consiglio: "La entrada incluye el Viking Village: las dos cosas se hacen juntas."
      },
      {
        nome: "Viking Village",
        testo: "Un pueblo vikingo construido en 2010 como decorado de una película que nunca se rodó, hoy dejado al pasto de los caballos. Al lado está el camping a los pies de Vestrahorn.",
        come: "Se llega por la misma carretera de Stokksnes.",
        quando: "Hora de luz baja, cuando se ve bien Vestrahorn al fondo.",
        tempo: "30 minutos",
        consiglio: "Los caballos están sueltos: no darles comida ni acercarse demasiado."
      },
      {
        nome: "Puerto de Höfn y langostino",
        testo: "Pueblo de pescadores conocido por la langosta (en realidad cigala islandesa), con un pequeño puerto y bonitas vistas del glaciar Vatnajökull desde el paseo marítimo.",
        come: "A pie desde el camping municipal.",
        quando: "Cena: los restaurantes se llenan pronto en verano.",
        tempo: "1-2 horas",
        consiglio: "Reservar la cena en Höfn en verano."
      }
    ],
    sapori: [
      {
        nome: "Cigala islandesa (humar)",
        testo: "Cigalas pequeñas y dulces, servidas en sopa, a la parrilla o con mantequilla de ajo: típica de Höfn."
      },
      {
        nome: "Sopa de pescado",
        testo: "Sopa con nata y pescado del día, a veces con pan de centeno."
      }
    ],
    attenzioni: [
      "En temporada alta Höfn está llena: reservar camping y cena con antelación.",
      "El tramo oriental de la Ring Road tiene pocos surtidores: llenar el depósito en Höfn."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Montaña Vestrahorn y playa de arena negra cerca de Höfn, Islandia",
    immagine: '/images/islanda/hofn-stock.jpg',
  },
  {
    slug: 'egilsstadir',
    paeseSlug: 'islanda',
    ordine: 5,
    nome: 'Egilsstaðir',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: "1 noche",
    visitataPersonalmente: true,
    introduzione: "La capital del este islandés, alcanzada a través de los fiordos menos turísticos y más salvajes de la isla.",
    percheAndarci: "La carretera por los fiordos del Este es de las más escénicas del viaje, y los Vök Baths son el primer baño caliente después de días de trekking y viento.",
    cosaVedere: ['Fiordos del Este por la Route 1', 'Posible desvío a Seyðisfjörður, localidad artística entre las montañas'],
    cosaFare: [
      "Conducción panorámica por los fiordos del Este (unos 250 km, 3-4 horas efectivas que con las paradas se convierten fácilmente en 5-6: la carretera sigue cada fiordo)",
      "Vök Baths, piscina termal flotante sobre el lago Urriðavatn (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Dormí en el Camp Egilsstaðir, bien valorado (4/5 en Tripadvisor): baños limpios, lavadoras y secadoras, cocinas cubiertas, electricidad, por unos 2.000 ISK por persona.\n\nAlternativas en Egilsstaðir. Económicas: Hafaldan HI Hostel (edificio Harbour) · gama media: Við Lónið Guesthouse · más cuidadas: Gistihúsið Lake Hotel Egilsstaðir, Hotel Valaskjálf.",
    doveMangiare: "Cena en el camping o en uno de los locales de Egilsstaðir.",
    comeArrivare: "Desde Höfn, por los fiordos del Este (Route 1).",
    comeSpostarsi: "Coche de alquiler.",
    periodoMigliore: "el de todo el recorrido: el verano, si se da la vuelta a la isla en tienda",
    costi: "Camping unos 2.000 ISK por persona.",
    erroriDaEvitare: [],
    miaEsperienza: "Los Vök Baths llegaron en el momento justo: después de dos días entre trekking y viento, fue el primer baño caliente de verdad del viaje.",
    luoghi: [
      {
        nome: "Fiordos del Este",
        testo: "La carretera costera de la Route 1 entre Höfn y Egilsstaðir sigue cada fiordo, con montañas empinadas, cascadas y pueblos de pescadores. Unos 250 km: 4-5 horas con paradas.",
        come: "En coche; no hay atajos y el tiempo cambia rápido.",
        quando: "Verano, por la visibilidad; en invierno el paso de Öxi puede cerrar.",
        tempo: "una jornada",
        url: "https://safetravel.is",
        consiglio: "Prever pausas en pueblos como Djúpivogur y repostar antes."
      },
      {
        nome: "Seyðisfjörður",
        testo: "Pueblo de artistas en un fiordo profundo, con casas de madera de colores, la iglesia azul y la calle del arcoíris. Se llega bajando de un puerto de montaña (Fjarðarheiði) con bonitas cascadas.",
        come: "Unos 30 minutos en coche desde Egilsstaðir; es también el puerto del ferri desde las Islas Feroe y Dinamarca.",
        quando: "Verano; el paso puede estar cerrado por nieve de otoño a primavera.",
        tempo: "media jornada",
        consiglio: "Paseo a las cascadas a lo largo de la carretera, con varias paradas."
      },
      {
        nome: "Vök Baths",
        testo: "Piscinas termales flotantes en el lago Urriðavatn, a poca distancia de Egilsstaðir, con un bar sobre el agua. El primer baño caliente de verdad tras días de trekking y viento.",
        come: "En coche, unos 10 minutos desde Egilsstaðir. Mejor reservar online los fines de semana.",
        quando: "Tarde, por la luz y el vapor sobre el agua.",
        tempo: "2 horas",
        consiglio: "Comprobar los precios actuales en el sitio oficial antes de ir."
      },
      {
        nome: "Lagarfljót y bosque de Hallormsstaður",
        testo: "El bosque más grande de Islandia, con árboles altos y senderos junto al lago largo y estrecho Lagarfljót. Una verdadera sorpresa en un país casi sin árboles.",
        come: "Unos 30 minutos en coche desde Egilsstaðir.",
        quando: "Verano y principios de otoño por los colores.",
        tempo: "2 horas",
        consiglio: "Pequeño y tranquilo, ideal como pausa de la conducción."
      }
    ],
    sapori: [
      {
        nome: "Reno (hreindýr)",
        testo: "En el Este la carne de reno está en el menú de los restaurantes locales: a la plancha o en estofado."
      },
      {
        nome: "Pan y dulces de panadería",
        testo: "En los pueblos pequeños los hornos son excelentes: kleina (masa frita) y vínarbrauð (hojaldre con crema)."
      }
    ],
    attenzioni: [
      "Las carreteras de montaña como Fjarðarheiði y Öxi pueden cerrar por nieve o niebla: consultar road.is.",
      "Las gasolineras de los fiordos están lejos unas de otras: repostar cuando se pueda."
    ],
    esperienzeSlugs: ['terme-naturali-islanda'],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Pueblo de Seyðisfjörður entre las montañas nevadas de un fiordo del Este islandés",
    immagine: '/images/islanda/egilsstadir-stock.jpg',
  },
  {
    slug: 'asbyrgi',
    paeseSlug: 'islanda',
    ordine: 6,
    nome: 'Ásbyrgi',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: "1 noche",
    visitataPersonalmente: true,
    introduzione: "El cañón en forma de herradura en el corazón del parque nacional, con Stuðlagil y la cascada más potente de Europa por el camino.",
    percheAndarci: "En cuanto a paisajes, es una de las jornadas más intensas del viaje: en pocas horas las columnas de basalto, la cascada más potente de Europa y el cañón de Ásbyrgi.",
    cosaVedere: [
      "Cañón de Stuðlagil: columnas de basalto de 30 metros de altura y río de aguas turquesa, famoso solo desde 2017",
      "Dettifoss: la cascada más potente de Europa (44 m de salto, caudal de hasta 500 m³/s en verano)",
      "Cañón de Ásbyrgi, con paseo hasta el estanque Botnstjörn",
    ],
    cosaFare: [
      "Paseo por el cañón de Stuðlagil (aproximadamente 1 h de conducción, último tramo por pista de tierra)",
      "Vista de Dettifoss desde el lado oeste (Route 862, asfaltada, la mejor vista)",
      "Paseo entre las paredes verdes del cañón de Ásbyrgi",
    ],
    doveDormire:
      "Dormí en el camping del parque nacional de Ásbyrgi (hasta 350 parcelas, abierto de mediados de mayo a finales de octubre), que según las reseñas tiene buenos servicios (baños limpios, duchas, lavandería). En temporada alta conviene reservar.\n\nLa zona es muy remota y las alternativas cercanas son pocas: en Kópasker (unos 35-40 minutos) hay Kópasker Guesthouse, MELAR Guesthouse y Kópasker HI Hostel (gama económica/media). De lujo en los alrededores no hay nada: se elige entre el propio camping, que tiene también pequeños estudios, y las guesthouses de Kópasker.",
    doveMangiare: "Cena en el camping.",
    comeArrivare: "Desde Egilsstaðir, con paradas en el cañón de Stuðlagil y en Dettifoss.",
    comeSpostarsi: "Coche de alquiler; último tramo hacia Stuðlagil por pista de tierra.",
    periodoMigliore: "camping abierto de mediados de mayo a finales de octubre",
    costi: "el precio del camping no lo anoté: conviene consultarlo al reservar",
    erroriDaEvitare: ["No dejar la reserva del camping para última hora en temporada alta: la zona es muy remota y las alternativas son pocas"],
    miaEsperienza: "Dettifoss se oye antes de verla: el estruendo y la fuerza del agua fangosa están entre los recuerdos más físicos del viaje.",
    luoghi: [
      {
        nome: "Stuðlagil",
        testo: "Un cañón con columnas de basalto de hasta 30 metros de altura y agua turquesa, conocido solo desde 2017, cuando una presa bajó el nivel del río. Hay dos accesos, uno con plataforma panorámica y otro con sendero hasta el cauce.",
        come: "Último tramo por camino de grava desde el asfalto; senderos cortos y bien cuidados.",
        quando: "Verano, con el río bajo y luz plena.",
        tempo: "1-2 horas",
        consiglio: "El sendero hasta el río es mejor que la plataforma pero requiere calzado adecuado."
      },
      {
        nome: "Dettifoss",
        testo: "Cascada de 100 metros de ancho y 44 de alto, considerada la más potente de Europa por caudal. El agua es turbia y gris, y el ruido se oye desde lejos.",
        come: "Por la Route 862 (asfaltada) del lado oeste, la mejor vista; sendero de unos 1 km desde el aparcamiento.",
        quando: "Verano; en primavera el caudal está al máximo.",
        tempo: "1 hora",
        costo: "entrada libre",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "Se oye antes de verla: quedarse detrás de las cadenas, el borde resbala."
      },
      {
        nome: "Cañón de Ásbyrgi",
        testo: "Una garganta en forma de herradura de 3,5 km de largo y 1 de ancho, con paredes de hasta 100 metros y un bosque de abedules en el fondo. Según la leyenda es la huella del casco del caballo de Odín.",
        come: "Desde el aparcamiento un sendero llano lleva hasta el estanque Botnstjörn.",
        quando: "Tarde o mañana, con luz rasante sobre las paredes.",
        tempo: "2 horas",
        costo: "entrada libre",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "El camping del parque nacional está en el fondo del cañón, con excelentes servicios."
      },
      {
        nome: "Hljóðaklettar",
        testo: "Columnas de basalto crecidas en círculo, que desde arriba parecen una flor de piedra, cerca de Ásbyrgi. Un paseo corto, el más bonito de la zona para quien ama la geología.",
        come: "A pocos kilómetros de Ásbyrgi; sendero bien señalizado.",
        quando: "Verano.",
        tempo: "1 hora",
        consiglio: "Fácil de combinar con Ásbyrgi por la mañana."
      }
    ],
    attenzioni: [
      "La zona es remota: repostar y hacer la compra en Húsavík o Akureyri.",
      "Los caminos de grava cerca de Dettifoss este requieren un 4x4; la Route 862 oeste está asfaltada."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Vista aérea del cañón de Ásbyrgi en forma de herradura, Islandia",
    immagine: '/images/islanda/asbyrgi-stock.jpg',
  },
  {
    slug: 'akureyri',
    paeseSlug: 'islanda',
    ordine: 7,
    nome: 'Akureyri y el lago Mývatn',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: "1 noche",
    visitataPersonalmente: true,
    introduzione: "Base para el avistamiento de ballenas en Húsavík y para la zona geotérmica del lago Mývatn, antes del último gran traslado hacia Snæfellsnes.",
    percheAndarci: "Un tour en barco en busca de yubartas y rorcuales, y luego una de las zonas con más fenómenos geotérmicos de toda Islandia.",
    cosaVedere: [
      "Bahía de Skjálfandi, para el avistamiento de ballenas desde Húsavík",
      "Grjótagjá (cueva de lava con manantial termal, localización de Juego de Tronos; hoy no apta para el baño)",
      "Hverfjall (cráter volcánico anular), Hverir (fumarolas y pozas de barro), Dimmuborgir (laberinto de formaciones de lava)",
      "Goðafoss, la «cascada de los dioses»",
    ],
    cosaFare: [
      "Avistamiento de ballenas desde Húsavík (véase la ficha de experiencia dedicada)",
      "Vuelta por la zona geotérmica de Mývatn (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Dormí en el camping Hamrar, entre los mejor valorados de Islandia (4/5 en Tripadvisor), en el límite del bosque de Kjarnaskógur, con duchas casi nuevas y excelentes servicios. El precio orientativo es de unos 1.500 ISK por persona más una tarifa por la tienda.\n\nAlternativas en Akureyri. Económicas: Akureyri Backpackers, Guesthouse Bægisá · gama media: Centrum Hotel · más cuidadas: Hotel Kea, Bryggjan Boutique Hotel.",
    doveMangiare: "Comida rápida en Húsavík; barbacoa en el camping por la noche con la compra hecha en Akureyri.",
    comeArrivare: "Desde Ásbyrgi, con parada en Húsavík y en la zona de Mývatn.",
    comeSpostarsi: "Coche de alquiler.",
    periodoMigliore: "verano, por las mejores condiciones del tour de avistamiento de ballenas",
    costi: "Camping Hamrar ~1.500 ISK/persona + tarifa por la tienda.",
    erroriDaEvitare: [],
    miaEsperienza: "Avistamiento de ballenas por la mañana y zona geotérmica por la tarde: fue una de las jornadas más variadas del viaje, del mar abierto al azufre en pocas horas.",
    luoghi: [
      {
        nome: "Avistamiento de ballenas desde Húsavík",
        testo: "La bahía de Skjálfandi es de los mejores lugares de Europa para ver yubartas y ballenas azules en verano. Los tours salen del puerto de Húsavík y duran unas 3 horas.",
        come: "Se reserva online con el operador; barcos tradicionales o rápidos.",
        quando: "De junio a agosto; temprano por la mañana por el mar en calma.",
        tempo: "3 horas",
        consiglio: "Vestirse en capas: en el barco hace frío incluso en verano."
      },
      {
        nome: "Goðafoss",
        testo: "La «cascada de los dioses», de 30 metros de ancho y 12 de alto, donde en el año 1000 un jefe islandés habría arrojado las estatuas de los antiguos dioses tras convertirse al cristianismo.",
        come: "Parada a lo largo de la Ring Road, con dos lados y senderos cortos.",
        quando: "Tarde de verano o temprano por la mañana.",
        tempo: "30-45 minutos",
        costo: "entrada libre",
        consiglio: "El lado oeste tiene menos gente y mejor vista."
      },
      {
        nome: "Zona geotérmica de Mývatn",
        testo: "El lago está rodeado de fenómenos volcánicos: los cráteres de Hverfjall, las fumarolas de Hverir con olor a azufre y el laberinto de lava de Dimmuborgir. En pocos kilómetros se ven tres escenarios distintos.",
        come: "En coche alrededor del lago; senderos cortos y bien señalizados.",
        quando: "Mañana, antes de los grupos; en verano los mosquitos molestan.",
        tempo: "media jornada",
        consiglio: "Llevar una redecilla antimosquitos: el nombre del lago significa «lago de los mosquitos»."
      },
      {
        nome: "Grjótagjá",
        testo: "Una cueva de lava con una fuente caliente, conocida por una escena de Juego de Tronos. Hoy no se puede nadar porque la temperatura es demasiado variable.",
        come: "Pequeño aparcamiento y pocos pasos.",
        quando: "A cualquier hora.",
        tempo: "20 minutos",
        costo: "entrada libre",
        consiglio: "Se puede mirar, no bañarse."
      },
      {
        nome: "Ciudad de Akureyri",
        testo: "La segunda ciudad de Islandia, al pie de un largo fiordo, con iglesia moderna, jardín botánico cerca del círculo polar y una bonita vista de las montañas.",
        come: "A pie desde el centro; el jardín botánico Lystigarðurinn es gratuito.",
        quando: "De día; por la tarde para las cafeterías.",
        tempo: "2-3 horas",
        consiglio: "Hacer aquí la compra: los supermercados están mejor surtidos y son más baratos que en el resto del Norte."
      }
    ],
    sapori: [
      {
        nome: "Barbacoa en el camping",
        testo: "Compra en Akureyri y cocina compartida o parrilla en el camping: la opción más sencilla para ahorrar."
      },
      {
        nome: "Helado de leche islandesa",
        testo: "En Islandia los helados se hacen con leche y se comen todo el año, incluso con frío: probar el de la granja Efstidalur o el de los cafés del centro."
      }
    ],
    attenzioni: [
      "El tour de ballenas puede cancelarse por el tiempo: dejar un día de margen.",
      "Alrededor de Mývatn hay muchos mosquitos en verano: llevar un sombrero con red."
    ],
    esperienzeSlugs: ['whale-watching-husavik', 'zona-geotermale-myvatn'],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Poza termal humeante en el terreno coloreado de azufre de la zona geotérmica cerca del lago Mývatn",
    immagine: '/images/islanda/akureyri-stock.jpg',
  },
  {
    slug: 'grundarfjordur',
    paeseSlug: 'islanda',
    ordine: 8,
    nome: 'Grundarfjörður',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: "1 noche",
    visitataPersonalmente: true,
    introduzione: "La península de Snæfellsnes y el Kirkjufell, la montaña más fotografiada de Islandia, después de la jornada de traslado más larga del viaje.",
    percheAndarci: "Es una jornada casi toda de conducción, pero al final está el atardecer en el Kirkjufell, con la última cena de verdad en tienda del viaje.",
    cosaVedere: ['Casas de turba tradicionales por la Route 1', 'Kirkjufell (463 m) y la cascada Kirkjufellsfoss'],
    cosaFare: [
      "Parada en una piscina termal natural poco transitada del West Iceland, por ejemplo Guðrúnarlaug (vestuario básico, entrada gratuita)",
      "Fotos al Kirkjufell al atardecer: el aparcamiento está justo al lado de la cascada, no hace falta caminar",
    ],
    doveDormire:
      "Dormí en el camping a los pies del Kirkjufell, sencillo y panorámico, con vista directa al fiordo y a la montaña.\n\nEn el pueblo las opciones son pocas: el Kirkjufell Guesthouse and Apartments (desde unos 180 $/noche) es de hecho la elección principal de gama media, y de alternativas económicas o de lujo hay pocas. Para tener más donde elegir conviene mirar hacia Stykkishólmur, a unos 25 minutos en coche.",
    doveMangiare: "Compra en las tiendas del pueblo (a 10 minutos a pie del camping) y cena en el camping: la última cena de verdad en tienda del viaje.",
    comeArrivare: "Desde Akureyri, unos 390 km y 5 horas de conducción efectivas por la Route 1 y Borgarnes (6-7 horas con paradas).",
    comeSpostarsi: "Coche de alquiler.",
    periodoMigliore: "verano, por la luz hasta tarde sobre el Kirkjufell al atardecer",
    costi: "el precio del camping no lo anoté: conviene consultarlo antes de salir",
    erroriDaEvitare: ["Contar con 6-7 horas de conducción con las paradas: es el traslado más largo de todo el viaje"],
    miaEsperienza: "La última cena en tienda, con vista al Kirkjufell y al fiordo, fue una bonita manera de cerrar la parte «on the road» del viaje, antes de las dos noches finales en hotel.",
    luoghi: [
      {
        nome: "Kirkjufell y Kirkjufellsfoss",
        testo: "La montaña más fotografiada de Islandia, de 463 metros y forma de sombrero, con una cascada a sus pies. El aparcamiento está junto a la caída y no hace falta caminar.",
        come: "En coche por la Route 54; parada breve.",
        quando: "Atardecer, sobre todo en verano; en invierno de noche por la aurora.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "El camping a los pies de la montaña ofrece la mejor vista sin moverse."
      },
      {
        nome: "Arnarstapi y Hellnar",
        testo: "Dos antiguos pueblos de pescadores en la costa sur de Snæfellsnes, unidos por un sendero de 2,5 km entre acantilados, arcos de basalto y nidos de aves marinas.",
        come: "Aparcamiento en los dos pueblos; el sendero se hace a pie.",
        quando: "Verano.",
        tempo: "1-2 horas",
        consiglio: "Llevar un cortavientos: es mar abierto."
      },
      {
        nome: "Djúpalónssandur",
        testo: "Playa de guijarros negros con restos de un naufragio y piedras de prueba de los pescadores. El sendero baja entre la lava.",
        come: "Pequeño aparcamiento en la Route 574; bajada corta.",
        quando: "Mañana o tarde.",
        tempo: "1 hora",
        consiglio: "No tocar los hierros oxidados del naufragio: siguen siendo peligrosos."
      },
      {
        nome: "Guðrúnarlaug",
        testo: "Una poza termal natural en Laugar, en el valle de Sælingsdalur, reconstruida sobre una antigua fuente. Todavía es poco frecuentada y gratuita.",
        come: "Poco después de la Route 60.",
        quando: "Tarde.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Vestuario básico: llevar toalla y chancletas."
      }
    ],
    attenzioni: [
      "El tramo Akureyri-Snæfellsnes es la jornada más larga de conducción: 6-7 horas con paradas.",
      "Las pozas termales naturales suelen estar sin vestuarios: respetar las normas y dejar todo limpio."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Montaña Kirkjufell y la cascada Kirkjufellsfoss, Islandia",
    immagine: '/images/islanda/grundarfjordur-stock.jpg',
  },
  {
    slug: 'reykjavik',
    paeseSlug: 'islanda',
    ordine: 9,
    nome: 'Reikiavik',
    tipologia: ['cultura'],
    giorniConsigliati: "1-2 noches, para cerrar el viaje",
    visitataPersonalmente: true,
    introduzione: "La capital, última etapa después de seis noches en tienda: una cama de verdad, el centro de la ciudad y la última cena del viaje.",
    percheAndarci: "Es una buena manera de cerrar el viaje, entre las calles de colores del centro y una parada termal en el camino de vuelta.",
    cosaVedere: ['Iglesia de Hallgrímskirkja', 'Calles de colores del centro', 'Mercadillo de segunda mano de Kolaportið (sábado/domingo)'],
    cosaFare: [
      "Posible parada en una piscina termal natural del West Iceland en el camino de vuelta (por ejemplo en la zona de Deildartunguhver/Krauma, el manantial caliente más potente de Europa)",
      "Vuelta a pie por el centro de la ciudad, con posible parada en el mercadillo de Kolaportið",
    ],
    doveDormire: "El nombre del hotel de la última noche no lo anoté: conviene en todo caso dormir en el centro, para recorrerlo todo a pie.\n\nAlternativas en Reikiavik. Económicas: KEX Hostel, Loft HI Eco Hostel · gama media: hoteles en la zona de Þingholt, Hlemmur Square · más cuidadas: The Reykjavik EDITION, Canopy by Hilton Reykjavík.",
    doveMangiare: "Última cena en uno de los restaurantes del centro; el nombre del local no lo anoté.",
    comeArrivare: "Desde Grundarfjörður, unas 2h30 de conducción (180 km por Borgarnes).",
    comeSpostarsi: "A pie por el centro.",
    periodoMigliore: "el de todo el recorrido: el verano, si se da la vuelta a la isla en tienda",
    costi: "los costes de la última etapa no los anoté",
    erroriDaEvitare: [],
    miaEsperienza: "Después de seis noches en tienda, la última noche en una cama de verdad en Reikiavik fue casi surrealista: una buena manera de celebrar el final del viaje antes del vuelo de regreso desde Keflavík.",
    luoghi: [
      {
        nome: "Hallgrímskirkja",
        testo: "Iglesia luterana de hormigón inspirada en las columnas de basalto, iniciada en 1945 y terminada en 1986. La torre de 74 metros tiene un mirador sobre la ciudad.",
        come: "En el centro, a pie. La entrada a la iglesia y a la torre es separada.",
        quando: "Mañana, cuando la luz es más suave; la torre cierra por la tarde.",
        tempo: "45 minutos",
        url: "https://hallgrimskirkja.is",
        consiglio: "Comprobar el horario de la torre en el sitio oficial: puede cambiar por conciertos y misas."
      },
      {
        nome: "Harpa y el paseo marítimo",
        testo: "Sala de conciertos de cristal en el puerto, abierta en 2011, con fachada de celdas. El paseo marítimo lleva a la escultura Sólfar y a la bahía de Faxaflói.",
        come: "A pie desde el centro; la entrada al vestíbulo es libre.",
        quando: "Atardecer, cuando el cristal refleja el cielo.",
        tempo: "1 hora",
        costo: "entrada libre al vestíbulo",
        url: "https://www.harpa.is",
        consiglio: "Reservar con antelación las entradas de los conciertos."
      },
      {
        nome: "Perlan y museo Wonders of Iceland",
        testo: "Un edificio con cúpula de cristal sobre seis depósitos de agua caliente, con una cueva de hielo artificial, un planetario y una terraza panorámica.",
        come: "Fuera del centro, en bus o coche; cómodo en un día de lluvia.",
        quando: "De día, cuando hace mal tiempo.",
        tempo: "2-3 horas",
        url: "https://perlan.is",
        consiglio: "Se reserva online para evitar colas."
      },
      {
        nome: "Casco antiguo y arte urbano",
        testo: "Calles de colores alrededor de Skólavörðustígur, con tiendas de diseño, galerías y murales. El barrio de Þingholt tiene casas de chapa pintadas.",
        come: "A pie; el tramo en subida parte de la iglesia.",
        quando: "Mañana o tarde.",
        tempo: "2 horas",
        consiglio: "Sábados y domingos está el mercadillo Kolaportið."
      },
      {
        nome: "Kolaportið",
        testo: "Mercado cubierto de pulgas cerca del puerto, sábados y domingos: segunda mano, libros, souvenirs y un puesto de pescado seco, la comida islandesa más auténtica.",
        come: "A pie desde el centro, junto al puerto viejo.",
        quando: "Fines de semana, 11-17.",
        tempo: "1 hora",
        consiglio: "Probar el harðfiskur (pescado seco) con mantequilla."
      },
      {
        nome: "Piscinas termales públicas",
        testo: "Las piscinas geotérmicas forman parte de la vida social local: Sundhöllin en el centro, Laugardalslaug la más grande, Vesturbæjarlaug a pocos pasos del mar.",
        come: "En bus o a pie; entrada de pago, ducha desnudo obligatoria antes de entrar.",
        quando: "Tarde, cuando se reúnen los locales.",
        tempo: "2 horas",
        consiglio: "Ducharse sin bañador: es una regla de higiene que los islandeses se toman en serio."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Hallgrímskirkja y paseo por Skólavörðustígur",
          "Almuerzo en el centro",
          "Harpa y paseo marítimo",
          "Tarde en una piscina geotérmica"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Círculo Dorado (Þingvellir, Geysir, Gullfoss) en coche o tour",
          "Cena en el centro"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro (101)",
        perChi: "Quien quiere moverse a pie",
        testo: "Cerca de Hallgrímskirkja, restaurantes y locales. Más ruidoso los fines de semana por la noche, habitaciones pequeñas."
      },
      {
        nome: "Laugardalur",
        perChi: "Quien busca tranquilidad y precios más bajos",
        testo: "Cerca de las piscinas y del albergue HI; a 20 minutos a pie del centro, con el bus."
      },
      {
        nome: "Cerca del puerto",
        perChi: "Quien llega con ferris o tours",
        testo: "Tiene hoteles modernos, cerca de Harpa."
      }
    ],
    sapori: [
      {
        nome: "Bæjarins Beztu Pylsur",
        testo: "El quiosco de hot dogs más famoso de la ciudad, cerca del puerto, abierto desde hace décadas."
      },
      {
        nome: "Skyr y pasteles",
        testo: "En las panaderías del centro: kleina, snúður (rollo de canela)."
      },
      {
        nome: "Pescado fresco en el puerto",
        testo: "Las sopas de pescado y el bacalao al horno en los restaurantes del puerto viejo."
      },
      {
        nome: "Plokkfiskur",
        testo: "Puré de bacalao y patatas, plato casero que se encuentra en los restaurantes tradicionales."
      }
    ],
    attenzioni: [
      "Precios altos: comer sopa o un hot dog al mediodía y cenar en bares con plato del día para ahorrar.",
      "Los taxistas son honestos, pero los taxis son caros: mejor bus o coche.",
      "En los locales del centro el sábado por la noche el alcohol es caro: revisar la cuenta."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Aguja de estilo Art Déco de la iglesia de Hallgrímskirkja en Reikiavik",
    immagine: '/images/islanda/reykjavik-stock.jpg',
  },
]
