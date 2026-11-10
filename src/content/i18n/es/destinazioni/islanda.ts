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
        come: "En coche desde Keflavík; aparcamiento junto al puente.",
        quando: "A cualquier hora; está al aire libre y siempre accesible.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Se combina bien con el faro de Reykjanesviti y la zona geotérmica de Gunnuhver."
      },
      {
        nome: "Centro de Keflavík y paseo marítimo",
        testo: "Una ciudad portuaria tranquila, con paseo marítimo, costa rocosa y el museo del Rock'n'Roll de Islandia. Para quien llega de noche es el lugar donde cenar sin moverse.",
        come: "A pie por el centro; desde el aeropuerto en autobús o taxi.",
        quando: "Al atardecer, muy tarde en verano.",
        tempo: "1-2 horas",
        consiglio: "Comprobar la hora del último autobús antes de salir por la noche."
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
        testo: "Salchicha hecha en buena parte con cordero, con cebolla cruda y frita y salsas; se encuentra barata en gasolineras y quioscos."
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
      "Mi primera noche en tienda la pasé en el camping de Skógafoss, al pie de la cascada, a media hora de Vík. En Vík el camping (1.950 ISK + ducha 300 ISK) tiene electricidad, duchas, cocina común. Es de hecho la única gran instalación de la zona, cómoda y bien atendida, aunque en las reseñas más recientes hay quien se queja de la masificación en temporada alta.\n\nAlternativas en Vík. Económicas: The Barn (uno de los mejores hostels de Islandia), Farmhouse Lodge Guesthouse · gama media: Hotel Kría, diseño nórdico en la calle principal · más cuidadas: Hótel Vík í Mýrdal.",
    doveMangiare: "Comida de bocadillo o por los alrededores de las cascadas; cena en el camping.",
    comeArrivare: "Desde Keflavík, con paradas en el Golden Circle y en las cascadas del sur por el camino. Desde Reikiavik son unos 180 km por la Ruta 1, dos horas y media sin paradas, que con las cascadas se convierten fácilmente en un día entero; desde Keflavík hay que sumar otra hora. Sin coche está el autobús Strætó 51 entre Reikiavik y Höfn, que para en Vík con pocas salidas al día, o los tours de un día desde la capital.",
    comeSpostarsi: "Coche de alquiler (recogido por la mañana en Keflavík junto con la tienda).",
    periodoMigliore: "finales de julio, por la luz que a medianoche no se apaga del todo y hace posible la excursión nocturna al avión siniestrado",
    costi: "Camping 1.950 ISK + ducha 300 ISK; aparcamiento en Seljalandsfoss 700 ISK. Como referencia, por persona y día con coche compartido: 60-90 € en tienda con compra en el supermercado; 180-250 € con hotel en Vík y una cena en restaurante; más de 350 € con hotel cuidado y tour por el glaciar. Casi todos los aparcamientos de la costa sur son de pago, 750-1.000 ISK cada uno.",
    erroriDaEvitare: [
      "Después de una jornada ya llena, el avión siniestrado es una buena paliza: mejor valorar las fuerzas antes de salir a medianoche",
      "Llevar linterna o power bank para el móvil: cuatro kilómetros de arena negra llana y sin puntos de referencia",
    ],
    miaEsperienza:
      "A finales de julio a medianoche todavía había luz, así que después de cenar decidí a última hora no irme a dormir e ir a pie hasta el avión siniestrado. Después de una jornada ya llena fue una paliza, pero es probablemente el momento más absurdo del viaje, y el que mejor recuerdo.",
    luoghi: [
      {
        nome: "Seljalandsfoss y Gljúfrabúi",
        testo: "Seljalandsfoss cae 60 metros y se puede rodear por un sendero resbaladizo que pasa detrás de la cortina. Un poco más allá, escondida en una grieta, está Gljúfrabúi, que se ve entrando en el arroyo.",
        come: "Aparcamiento de pago (700 ISK cuando fui); recorrido corto por sendero embarrado.",
        quando: "Tarde de verano, con el sol dando a la caída desde el oeste.",
        tempo: "1 hora",
        costo: "aparcamiento unas 900-1.000 ISK por coche (2025)",
        lat: 63.61583,
        lng: -19.99278,
        consiglio: "Zapatos impermeables para entrar en la garganta de Gljúfrabúi.",
      },
      {
        nome: "Skógafoss",
        testo: "Cascada de 25 metros de ancho y 60 de alto, en el borde del antiguo acantilado de la costa. Una escalera lateral de 527 peldaños sube hasta arriba, donde empieza el sendero hacia el paso de Fimmvörðuháls.",
        come: "Aparcamiento a los pies de la cascada; el camping de al lado es cómodo para la noche, y es ahí donde montamos la tienda la primera noche del viaje.",
        quando: "Tarde, para el arcoíris cuando hay sol.",
        tempo: "45 minutos",
        costo: "entrada libre; aparcamiento 1.000 ISK por coche de hasta 5 plazas, unos 7 € (2026, se paga con la app o la web de Parka)",
        lat: 63.53211,
        lng: -19.51114,
        consiglio: "Subir por la escalera de madera para la vista desde arriba: desde la plataforma se ve también la costa.",
      },
      {
        nome: "Kvernufoss",
        testo: "Una cascada de unos treinta metros escondida en un barranco detrás del museo de Skógar, mucho menos concurrida que Skógafoss. Como en Seljalandsfoss, se puede pasar por detrás del chorro por un sendero mojado.",
        come: "Desde el aparcamiento del museo de Skógar se sigue el sendero junto al arroyo, unos 15-20 minutos a pie.",
        quando: "Última hora de la tarde, cuando los autobuses de Skógafoss ya se han ido.",
        tempo: "1 hora",
        costo: "aparcamiento 750 ISK por coche, unos 5 € (2026), con acceso a los baños del museo",
        lat: 63.52899,
        lng: -19.4803,
      },
      {
        nome: "Museo de Skógar (Skógasafn)",
        testo: "Museo etnográfico al aire libre, con casas de turba, una pequeña iglesia y miles de objetos de la vida rural del sur, además de una sección sobre transportes y comunicaciones. Es la parada adecuada para una hora de lluvia cerca de Skógafoss.",
        come: "En Skógar, a pocos minutos en coche de la cascada; aparcamiento de pago.",
        quando: "Cualquier momento, útil con mal tiempo.",
        tempo: "1,5-2 horas",
        costo: "3.000 ISK adultos, unos 21 € (2026); gratis para menores de 12",
        orari: "Junio-agosto de 9 a 18, septiembre-mayo de 10 a 17; cerrado el 24 y 25 de diciembre y el 1 de enero.",
        lat: 63.52592,
        lng: -19.49127,
        url: "https://www.skogasafn.is",
      },
      {
        nome: "Restos del DC-3 en Sólheimasandur",
        testo: "Un avión de la Marina estadounidense caído en noviembre de 1973 en una llanura de arena negra, sin víctimas. La zona es desnuda y azotada por el viento; desde 2016 los propietarios del terreno prohíben el acceso en coche.",
        come: "Aparcamiento en la Ring Road y una larga caminata por arena llana. No hace falta guía.",
        quando: "Tarde en verano, cuando el sol roza el horizonte; de noche hace falta una linterna.",
        tempo: "2-3 horas ida y vuelta",
        lat: 63.45908,
        lng: -19.36482,
        consiglio: "Fuimos a medianoche con la luz de finales de julio: llevar agua y una batería externa, el recorrido no tiene puntos de referencia.",
      },
      {
        nome: "Dyrhólaey",
        testo: "Promontorio con un gran arco de lava negra en el mar y un faro de 1927, con vistas a la costa sur y a los farallones de Reynisdrangar. En verano anidan frailecillos en los acantilados.",
        come: "En coche desde la Ruta 1 hacia el sur: aparcamiento bajo junto al arco y aparcamiento alto, junto al faro, por una pista de grava empinada.",
        quando: "De mayo a agosto para los frailecillos; al atardecer por la luz. En primavera parte del promontorio puede cerrar por la anidación.",
        tempo: "1 hora",
        costo: "aparcamiento 750 ISK por coche, unos 5 € (2026, Parka)",
        lat: 63.39972,
        lng: -19.12639,
        consiglio: "Quedarse en los senderos señalizados: los acantilados son altos y se desmoronan.",
      },
      {
        nome: "Reynisfjara",
        testo: "La playa de arena negra con las columnas de basalto de la cueva de Hálsanefshellir y los farallones de Reynisdrangar enfrente. Es una de las más fotografiadas de Islandia y también una de las más peligrosas, por las olas traicioneras que suben por la playa sin aviso.",
        come: "Carretera 215 desde la Ruta 1, luego un sendero corto desde el aparcamiento; en la entrada un semáforo indica el nivel de riesgo del día.",
        quando: "Primera hora de la mañana, antes de los autobuses; con mar gruesa, lejos de la orilla.",
        tempo: "1 hora",
        costo: "entrada libre; aparcamiento 1.000 ISK por coche hasta 4 horas, unos 7 € (2026, Parka)",
        lat: 63.4035,
        lng: -19.0474,
        consiglio: "No dar nunca la espalda al mar ni subirse a las rocas bajas: las olas se han cobrado vidas.",
      },
      {
        nome: "Vík y la iglesia de Víkurkirkja",
        testo: "El pueblo más al sur de Islandia, unos cientos de habitantes entre el acantilado y la playa negra. La pequeña iglesia de tejado rojo, de 1934, en la colina sobre las casas, es el punto desde el que se ven juntos el pueblo y los farallones de Reynisdrangar.",
        come: "A pie desde el centro del pueblo, subiendo la callejuela detrás de las casas; hay un pequeño aparcamiento bajo la iglesia.",
        quando: "Tarde-noche, con la luz rasante sobre el mar.",
        tempo: "1 hora",
        costo: "libre",
        lat: 63.42053,
        lng: -19.00293,
        consiglio: "En el pueblo hay supermercado y gasolinera: conviene abastecerse antes de seguir hacia el este, donde los servicios escasean.",
      },
      {
        nome: "Fjaðrárgljúfur",
        testo: "Un cañón sinuoso de unos cien metros de profundidad y unos dos kilómetros de largo, con paredes cubiertas de musgo y un río en el fondo. El sendero recorre el borde con miradores.",
        come: "Unos 70 km al este de Vík, justo después del desvío a la carretera 206; desde el aparcamiento, sendero bien cuidado en suave subida.",
        quando: "Verano, con el terreno seco; en primavera el sendero puede cerrar por el barro.",
        tempo: "1 hora",
        costo: "aparcamiento 1.000 ISK por coche, válido todo el día, unos 7 € (2026, Parka)",
        lat: 63.77125,
        lng: -18.17194,
        consiglio: "Quedarse en el sendero: en 2019 el cañón se cerró porque la afluencia excesiva dañaba la vegetación.",
      },
      {
        nome: "Þingvellir",
        testo: "Parque nacional y sitio UNESCO en la grieta entre dos placas tectónicas, donde en el año 930 se reunió el primer parlamento islandés. Se camina entre paredes de basalto y el lago, con la falla Almannagjá como paso.",
        come: "En coche desde Reikiavik o desde Keflavík. Senderos señalizados desde el centro de visitantes, sin guía necesaria.",
        quando: "Temprano por la mañana o al atardecer, para evitar los autocares; en verano abierto a todas horas.",
        tempo: "1-2 horas",
        costo: "senderos libres; aparcamiento de pago, unas 1.000 ISK por coche (2025)",
        lat: 64.25381,
        lng: -21.03725,
        url: "https://www.thingvellir.is",
        consiglio: "Aparcamiento y centro de visitantes son de pago: consultar las tarifas actuales en el sitio oficial.",
      },
      {
        nome: "Geysir y Strokkur",
        testo: "Zona geotérmica del Círculo Dorado. El Geysir histórico entra en erupción rara vez, mientras que el Strokkur, a unos cincuenta metros, lanza chorros de 15-20 metros cada 6-10 minutos.",
        come: "Parada desde la carretera, entrada libre al campo geotérmico; los senderos son cortos.",
        quando: "Con el viento que aleja el vapor del público; siempre abierto.",
        tempo: "45 minutos",
        costo: "entrada libre",
        lat: 64.31306,
        lng: -20.30056,
        consiglio: "Colocarse a barlovento y lejos de las pozas: el agua está casi a 100 grados.",
      },
      {
        nome: "Gullfoss",
        testo: "La «cascada dorada»: dos saltos (unos 11 y 21 metros) en una garganta estrecha del río Hvítá. Una pasarela lleva hasta el borde, entre el vapor.",
        come: "Aparcamiento cercano; dos niveles de senderos, el bajo que llega al borde suele cerrar en invierno por el hielo.",
        quando: "Temprano por la mañana o al atardecer, con luz rasante.",
        tempo: "45 minutos",
        costo: "entrada libre",
        lat: 64.32611,
        lng: -20.12111,
        consiglio: "Impermeable puesto: la salpicadura llega hasta los senderos.",
      },
    ],
    sapori: [
      {
        nome: "Kjötsúpa",
        testo: "Sopa de cordero con tubérculos, típica de los días de viento: se encuentra en los quioscos de las cascadas y en las cafeterías de las gasolineras."
      },
      {
        nome: "Pan de centeno (rúgbrauð)",
        testo: "Pan oscuro y dulce, cocido lentamente, a veces con calor geotérmico; se come con mantequilla o pescado ahumado."
      },
      {
        nome: "Comida de picnic",
        testo: "Los supermercados de descuento como Bónus y Krónan son la opción más económica: comprar y cocinar en el camping para ahorrar."
      }
    ],
    attenzioni: [
      "En Reynisfjara y otras playas negras las olas anómalas (sneaker waves) llegan sin avisar: no dar nunca la espalda al mar.",
      "Las carreteras F y los vados sin puente requieren un 4x4 y normalmente no están cubiertos por el seguro básico del alquiler.",
      "La acampada libre con tienda está muy limitada: usar los campings y respetar los carteles.",
      "Fuera de la zona de Reikiavik muchas gasolineras son automáticas: llevar tarjeta con PIN."
    ],
    programmi: [
      {
        titolo: "1 día desde Reikiavik",
        tappe: [
          "Salida temprano por la Ruta 1",
          "Seljalandsfoss y Gljúfrabúi",
          "Skógafoss y, si queda tiempo, Kvernufoss",
          "Restos del DC-3 en Sólheimasandur (2-3 horas a pie)",
          "Reynisfjara y cena en Vík",
        ],
      },
      {
        titolo: "2 días con noche en Vík",
        tappe: [
          "Día 1: Círculo Dorado o cascadas del sur, noche en Skógar o en Vík",
          "Día 2: Dyrhólaey y Reynisfjara por la mañana",
          "Vík y la iglesia de Víkurkirkja",
          "Fjaðrárgljúfur por la tarde, luego hacia Skaftafell",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: cueva de hielo bajo el Mýrdalsjökull con un tour desde Vík, o Þórsmörk",
          "Como alternativa, la laguna de Jökulsárlón para quien sigue por la Ring Road",
        ],
      },
    ],
    gite: [
      {
        nome: "Skaftafell y Jökulsárlón",
        distanza: "Skaftafell a unos 135 km, Jökulsárlón a unos 190 km",
        come: "En coche por la Ruta 1 hacia el este; trekking en el glaciar y kayak solo con guía.",
        testo: "El parque del Vatnajökull, la cascada de Svartifoss y la laguna de icebergs con la Diamond Beach. En el día desde Vík es una carrera: mejor dormir más al este.",
      },
      {
        nome: "Cueva de hielo de Katla",
        distanza: "unos 30-40 minutos desde Vík en todoterreno",
        come: "Solo con los tours en súper jeep que salen de Vík, con crampones y cascos incluidos.",
        testo: "Una cueva en el hielo negro de ceniza bajo el glaciar Mýrdalsjökull, visitable también en verano, cuando las cuevas del Vatnajökull están cerradas.",
      },
      {
        nome: "Þórsmörk",
        distanza: "unos 30 km de pista desde la Ruta 1, cerca de Seljalandsfoss",
        come: "Con el autobús 4x4 de verano o un tour: la pista vadea varios ríos y no es para un coche normal.",
        testo: "Un valle verde entre tres glaciares, con senderos de media jornada y la llegada del trekking que baja desde Skógar por el paso de Fimmvörðuháls.",
      },
      {
        nome: "Islas Vestmannaeyjar",
        distanza: "ferri desde Landeyjahöfn, a una hora en coche de Vík",
        come: "Ferri Herjólfur desde Landeyjahöfn; en invierno a veces sale de Þorlákshöfn, más lejos.",
        testo: "La isla de Heimaey, con el volcán Eldfell de la erupción de 1973 y una de las colonias de frailecillos más grandes del mundo.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántas noches hacen falta en Vík?",
        risposta: "Una noche basta para Reynisfjara, Dyrhólaey y el pueblo. Con dos se añaden la cueva de hielo o Fjaðrárgljúfur sin prisas.",
      },
      {
        domanda: "¿Mejor dormir en Vík o en Skógar?",
        risposta: "Skógar es más cómodo para las cascadas y los restos del avión, Vík para las playas y para seguir hacia el este. Vík tiene más servicios; en Skógar se duerme a los pies de Skógafoss.",
      },
      {
        domanda: "¿Se llega en coche al avión de Sólheimasandur?",
        risposta: "No, el acceso en coche está prohibido desde 2016. Desde el aparcamiento de la Ruta 1 hay unos 4 km a pie por arena llana en cada sentido.",
      },
      {
        domanda: "¿Reynisfjara es realmente peligrosa?",
        risposta: "Sí: las olas traicioneras suben por la playa de repente y han causado varias muertes. El semáforo de la entrada indica el riesgo del día y hay que respetarlo.",
      },
      {
        domanda: "¿Se puede hacer la costa sur en un día desde Reikiavik?",
        risposta: "Hasta Vík sí, pero son unas cinco horas de coche entre ida y vuelta más las paradas. Para ver también el avión y las playas conviene una noche allí.",
      },
      {
        domanda: "¿Cómo se pagan los aparcamientos?",
        risposta: "Casi siempre con la app o la web de Parka, en las 24 horas siguientes, por la matrícula. Si no se paga se añade un recargo de 1.960 ISK, cobrado a través de la empresa de alquiler.",
      },
    ],
    zone: [
      {
        nome: "Vík",
        perChi: "quien quiere cena, supermercado y playa a pocos minutos",
        testo: "Hoteles, guesthouses y el camping bajo el acantilado; en verano se llena pronto y los precios suben.",
        fascia: "150-280 €",
      },
      {
        nome: "Skógar",
        perChi: "quien quiere despertarse frente a la cascada",
        testo: "Dos o tres hoteles y el camping a los pies de Skógafoss, a medio camino entre Seljalandsfoss y Vík; poquísimos servicios por la noche.",
        fascia: "160-280 €",
      },
      {
        nome: "Hvolsvöllur y Hella",
        perChi: "quien llega tarde desde Reikiavik o busca precios más bajos",
        testo: "Pueblos con supermercados, gasolineras y algún restaurante, a una hora de Vík; cómodos también para Þórsmörk.",
        fascia: "130-220 €",
      },
      {
        nome: "Campings de la costa sur",
        perChi: "quien viaja en tienda o en autocaravana",
        testo: "Skógafoss y Vík son los campings más cómodos de la ruta: duchas, cocina común y, en Vík, electricidad. La acampada libre no está permitida.",
        fascia: "unos 30 € para dos con tienda propia (Vík 1.950 ISK por persona más 300 ISK de ducha)",
      },
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
        testo: "Promontorio con un arco de lava negra en el mar y un faro, con una bonita vista de la costa sur. En verano anidan frailecillos en los acantilados. El faro es de 1927.",
        come: "En coche, camino de grava para recorrer con cuidado hasta el aparcamiento alto.",
        quando: "Finales de primavera y verano para los frailecillos; al atardecer por la luz.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Quedarse en los senderos señalizados: los acantilados son altos y se desmoronan."
      },
      {
        nome: "Reynisfjara",
        testo: "Playa de arena negra con columnas de basalto y los farallones de Reynisdrangar en el mar. Es una de las más fotogénicas y peligrosas de Islandia por las olas repentinas.",
        come: "Aparcamiento y sendero corto; en la entrada hay carteles sobre el estado del mar.",
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
        consiglio: "Quedarse en el sendero: en 2019 el cañón se cerró porque la avalancha de visitantes tras un videoclip dañaba el entorno."
      },
      {
        nome: "Skaftafell y Svartifoss",
        testo: "En el parque nacional del Vatnajökull, senderos entre abedules y lenguas de hielo. El más frecuentado lleva a la cascada Svartifoss, rodeada de columnas de basalto.",
        come: "Desde el centro de visitantes de Skaftafell, sendero en subida.",
        quando: "Verano, con luz larga; el sendero está cerrado o helado en los meses fríos.",
        tempo: "2-3 horas",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "El aparcamiento es de pago; el centro de visitantes tiene cafetería e información meteorológica."
      },
      {
        nome: "Laguna glaciar de Jökulsárlón y Diamond Beach",
        testo: "Laguna con icebergs desprendidos del glaciar Breiðamerkurjökull, que salen al mar por un canal. En la playa de arena negra al otro lado de la carretera los bloques de hielo brillan como diamantes.",
        come: "Aparcamiento de pago junto a la laguna (unas 1.000 ISK, 2025). Los paseos en barco salen del quiosco de la orilla: barco anfibio de mayo a noviembre, zodiac de mayo a octubre; el kayak se reserva con antelación.",
        quando: "Temprano por la mañana o al atardecer; en verano la luz no baja.",
        tempo: "2-3 horas",
        costo: "laguna y playa libres; barco anfibio 7.100 ISK, zodiac 16.600 ISK por adulto (2026, icelagoon.is)",
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
        testo: "Una montaña empinada y oscura que se refleja en las dunas negras de la playa de Stokksnes. Es uno de los lugares más fotografiados de Islandia.",
        come: "Tras la carretera a Stokksnes hay una entrada de pago gestionada por el dueño privado del terreno; luego unos minutos a pie.",
        quando: "Amanecer o atardecer, con agua baja para los reflejos.",
        tempo: "1-2 horas",
        costo: "entrada de pago (tarifa a comprobar in situ)",
        consiglio: "El Viking Village está en el mismo camino: se visitan juntos."
      },
      {
        nome: "Viking Village",
        testo: "Un poblado vikingo construido como decorado de cine, a los pies de Vestrahorn. Las casas de madera y turba con la montaña detrás son un buen motivo fotográfico.",
        come: "Se llega por la misma carretera de Stokksnes.",
        quando: "Hora de luz baja, cuando se ve bien Vestrahorn al fondo.",
        tempo: "30 minutos",
        consiglio: "Si hay caballos sueltos, no darles comida ni acercarse demasiado."
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
        testo: "La carretera costera de la Route 1 entre Höfn y Egilsstaðir sigue cada fiordo, con montañas empinadas, cascadas y pueblos de pescadores. Hay que contar con una jornada larga con paradas.",
        come: "En coche; no hay atajos y el tiempo cambia rápido.",
        quando: "Verano, por la visibilidad; en invierno el paso de Öxi puede cerrar.",
        tempo: "una jornada",
        url: "https://safetravel.is",
        consiglio: "Prever pausas en pueblos como Djúpivogur y repostar antes."
      },
      {
        nome: "Seyðisfjörður",
        testo: "Pueblo de artistas en un fiordo profundo, con casas de madera de colores, la iglesia azul y la calle del arcoíris. Se llega bajando de un puerto de montaña (Fjarðarheiði) con bonitas cascadas.",
        come: "En coche desde Egilsstaðir (27 km), cruzando el puerto de Fjarðarheiði. Cada semana, de mediados de marzo a finales de noviembre, llega aquí el ferry Norröna de Smyril Line desde Hirtshals (Dinamarca) y Tórshavn (Feroe).",
        quando: "Verano; el paso puede estar cerrado por nieve de otoño a primavera.",
        tempo: "media jornada",
        consiglio: "Paseo a las cascadas a lo largo de la carretera, con varias paradas."
      },
      {
        nome: "Vök Baths",
        testo: "Piscinas termales flotantes en el lago Urriðavatn, a poca distancia de Egilsstaðir, con un bar sobre el agua. El primer baño caliente de verdad tras días de trekking y viento.",
        come: "En coche, a las afueras de Egilsstaðir. Los fines de semana conviene reservar online.",
        quando: "Tarde, por la luz y el vapor sobre el agua.",
        tempo: "2 horas",
        consiglio: "Comprobar los precios actuales en el sitio oficial antes de ir."
      },
      {
        nome: "Lagarfljót y bosque de Hallormsstaður",
        testo: "Uno de los bosques más extensos de Islandia, 740 hectáreas de árboles altos y un sendero junto al Lagarfljót. Una verdadera sorpresa en un país casi sin árboles.",
        come: "En coche, a unos 25 km de Egilsstaðir junto al lago, en el valle de Fljótsdalur.",
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
        testo: "Un cañón con columnas de basalto y agua turquesa que era casi desconocido hasta hace pocos años: la presa de Kárahnjúkar, río arriba, redujo el caudal y dejó a la vista las paredes. Hay dos accesos: la plataforma panorámica en la orilla oeste y, en la orilla este, un sendero más largo.",
        come: "Último tramo por camino de grava desde el asfalto; senderos cortos y bien cuidados.",
        quando: "Verano, con el río bajo y luz plena.",
        tempo: "1-2 horas",
        consiglio: "El sendero hasta el río es mejor que la plataforma pero requiere calzado adecuado."
      },
      {
        nome: "Dettifoss",
        testo: "Cascada de 100 metros de ancho y 44 de alto, considerada la más potente de Europa. El agua es turbia y gris, y el ruido se oye desde lejos.",
        come: "Desde la Route 862 (asfaltada) por el lado oeste, la mejor vista; del aparcamiento al mirador hay 1 km a pie por trayecto.",
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
        testo: "Las «rocas del eco» en Vesturdalur, parte de una fila de cráteres de unos 6 km que entró en erupción hace 8.000-9.000 años. Las crecidas del río Jökulsá se llevaron el material suelto y dejaron al descubierto el basalto formado por el magma solidificado en los conductos volcánicos.",
        come: "En Vesturdalur, a unos 15 km al sur de Ásbyrgi, por carretera asfaltada. Senderos señalizados desde el aparcamiento.",
        tempo: "de 30 minutos a 1,5 horas",
        costo: "entrada libre",
        url: "https://www.vatnajokulsthjodgardur.is/en/areas/jokulsargljufur/hljodaklettar",
        consiglio: "El sendero V2 (1,2 km, unos 30 minutos, fácil) basta para ver las rocas; el circuito V3 tiene 3 km, 1-1,5 horas, y es más exigente."
      },
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
        testo: "La bahía de Skjálfandi es uno de los lugares más conocidos de Islandia para ver ballenas: en verano se ven a menudo yubartas. Los tours salen del puerto de Húsavík y duran unas 3 horas.",
        come: "Se reserva online con el operador; barcos tradicionales o rápidos.",
        quando: "Salidas diarias de marzo a noviembre; junio-agosto es la mejor época. Temprano por la mañana para el mar en calma.",
        tempo: "3 horas",
        costo: "desde 12.990 ISK el tour clásico de 3 horas con North Sailing (2026)",
        consiglio: "Vestirse en capas: en el barco hace frío incluso en verano."
      },
      {
        nome: "Goðafoss",
        testo: "La «cascada de los dioses», de 30 metros de ancho y 12 de alto, donde, según una leyenda nacida probablemente en el siglo XIX, hacia el año 1000 el legislador Þorgeir habría arrojado las estatuas de los antiguos dioses tras la conversión al cristianismo.",
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
        testo: "Una pequeña cueva de lava con un manantial caliente, conocida por una escena de Juego de Tronos.",
        come: "Pequeño aparcamiento y pocos pasos.",
        quando: "A cualquier hora.",
        tempo: "20 minutos",
        costo: "entrada libre",
        consiglio: "Respetar los carteles del lugar: el agua puede estar muy caliente."
      },
      {
        nome: "Ciudad de Akureyri",
        testo: "La mayor localidad fuera de la región de la capital, al fondo de un largo fiordo y a unos 100 km del Círculo Polar Ártico, con la iglesia Akureyrarkirkja, el jardín botánico y una bonita vista de las montañas.",
        come: "A pie desde el centro, también el jardín botánico Lystigarðurinn.",
        quando: "De día; por la tarde para las cafeterías.",
        tempo: "2-3 horas",
        consiglio: "Hacer la compra aquí: los supermercados están mejor surtidos que en los pueblos del norte."
      }
    ],
    sapori: [
      {
        nome: "Barbacoa en el camping",
        testo: "Compra en Akureyri y cocina compartida o parrilla en el camping: la opción más sencilla para ahorrar."
      },
      {
        nome: "Helado de leche islandesa",
        testo: "En Islandia el helado se come todo el año, incluso con frío: probarlo en los bares y heladerías del centro."
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
        testo: "Considerada la montaña más fotografiada de Islandia, de 463 metros y forma de sombrero, con una cascada a sus pies. El aparcamiento está junto a la caída y no hace falta caminar.",
        come: "En coche por la Route 54; parada breve.",
        quando: "Atardecer, sobre todo en verano; en invierno de noche por la aurora.",
        tempo: "1 hora",
        costo: "entrada libre; aparcamiento de pago, unas 1.000 ISK (2025)",
        consiglio: "El camping a los pies de la montaña ofrece la mejor vista sin moverse."
      },
      {
        nome: "Arnarstapi y Hellnar",
        testo: "Dos antiguos pueblos pesqueros en la costa sur de Snæfellsnes, unidos por un sendero costero entre acantilados, arcos de basalto y nidos de aves marinas.",
        come: "Aparcamiento en los dos pueblos; el sendero se hace a pie.",
        quando: "Verano.",
        tempo: "1-2 horas",
        consiglio: "Llevar un cortavientos: es mar abierto."
      },
      {
        nome: "Djúpalónssandur",
        testo: "Playa de guijarros negros con los restos del pesquero británico Epine GY7, naufragado en 1948, y las cuatro piedras con las que se medía la fuerza de los pescadores, de Amlóði (23 kg) a Fullsterkur (154 kg). Se llega por un sendero corto entre la lava.",
        come: "Pequeño aparcamiento en la Route 574 y bajada corta a pie.",
        quando: "Mañana o tarde.",
        tempo: "1 hora",
        consiglio: "Las olas son fuertes: no acercarse demasiado al agua."
      },
      {
        nome: "Guðrúnarlaug",
        testo: "Una poza termal reconstruida en Laugar, en el valle de Sælingsdalur, en el lugar que describe la saga de Laxdæla: lleva el nombre de la protagonista Guðrún Ósvífursdóttir. Todavía es poco frecuentada.",
        come: "En coche, en el valle de Sælingsdalur.",
        quando: "Tarde.",
        tempo: "1 hora",
        consiglio: "Vestuario básico: llevar toalla y chancletas."
      }
    ],
    attenzioni: [
      "El tramo Akureyri-Snæfellsnes es uno de los días de conducción más largos del viaje: salir temprano.",
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
    comeArrivare: "Desde Grundarfjörður, unas 2h30 de coche (180 km por Borgarnes). Desde el aeropuerto de Keflavík (KEF), a unos 50 km, el Flybus llega a la terminal BSÍ en unos 45 minutos por unas 4.000 ISK, con salidas ligadas a las llegadas; Airport Direct lleva a su terminal o a los hoteles por unas 5.000 ISK. El autobús Strætó 55 cuesta unas 2.400 ISK pero es lento y tiene pocas salidas; el taxi cuesta 20.000-25.000 ISK y no hay Uber.",
    comeSpostarsi: "A pie por el centro.",
    periodoMigliore: "el de todo el recorrido: el verano, si se da la vuelta a la isla en tienda",
    costi: "los costes de la última etapa no los apunté. Como referencia, por persona y día: 90-120 € con hostal, compra en el supermercado y piscina municipal; 200-280 € con hotel en el centro, una cena en restaurante y un museo; más de 400 € con hotel de diseño, termas y salida en barco. Un plato principal en un restaurante cuesta a menudo 4.000-6.000 ISK.",
    erroriDaEvitare: [],
    miaEsperienza: "Después de seis noches en tienda, la última noche en una cama de verdad en Reikiavik fue casi surrealista: una buena manera de celebrar el final del viaje antes del vuelo de regreso desde Keflavík.",
    luoghi: [
      {
        nome: "Hallgrímskirkja",
        testo: "Iglesia luterana de hormigón inspirada en las columnas de basalto, iniciada en 1945 y terminada en 1986. La torre de 74,5 metros tiene un mirador sobre la ciudad, al que se sube en ascensor.",
        come: "En el centro, a pie. La entrada a la iglesia y a la torre es separada.",
        quando: "Iglesia todos los días de 10 a 17 en invierno y de 9 a 20 en verano; torre hasta las 16:45 en invierno y las 19:45 en verano. Por la mañana para la luz más suave.",
        tempo: "45 minutos",
        costo: "iglesia libre; torre 1.500 ISK adultos, unos 10 € (2026), entrada solo en la iglesia, sin reserva",
        orari: "Iglesia de 10 a 17 en invierno y de 9 a 20 en verano; torre hasta las 16:45 en invierno y las 19:45 en verano, todos los días salvo oficios y conciertos.",
        lat: 64.1417,
        lng: -21.9266,
        url: "https://hallgrimskirkja.is",
        consiglio: "Comprobar el horario de la torre en el sitio oficial: puede cambiar por conciertos y misas.",
      },
      {
        nome: "Harpa y el paseo marítimo",
        testo: "Sala de conciertos de cristal en el puerto, abierta en 2011, con fachada de celdas. El paseo marítimo lleva a la escultura Sólfar y a la bahía de Faxaflói.",
        come: "A pie desde el centro; la entrada al vestíbulo es libre.",
        quando: "Atardecer, cuando el cristal refleja el cielo.",
        tempo: "1 hora",
        costo: "entrada libre al vestíbulo",
        lat: 64.15028,
        lng: -21.9325,
        url: "https://www.harpa.is",
        consiglio: "Reservar con antelación las entradas de los conciertos.",
      },
      {
        nome: "Perlan y museo Wonders of Iceland",
        testo: "Un edificio con cúpula de cristal sobre los depósitos de agua caliente de la ciudad, con una cueva de hielo artificial, un planetario y una terraza panorámica.",
        come: "Fuera del centro, en bus o coche; cómodo en un día de lluvia.",
        quando: "Exposiciones abiertas todos los días de 9 a 21; ideal en días de mal tiempo.",
        tempo: "2-3 horas",
        orari: "Exposiciones todos los días de 9 a 21.",
        lat: 64.1292,
        lng: -21.9189,
        url: "https://perlan.is",
        consiglio: "Se reserva online para evitar colas.",
      },
      {
        nome: "Casco antiguo y arte urbano",
        testo: "Calles de colores alrededor de Skólavörðustígur, con tiendas de diseño, galerías y murales. El barrio de Þingholt tiene casas de chapa pintadas.",
        come: "A pie; el tramo en subida parte de la iglesia.",
        quando: "Mañana o tarde.",
        tempo: "2 horas",
        lat: 64.1458,
        lng: -21.9285,
        consiglio: "Sábados y domingos está el mercadillo Kolaportið.",
      },
      {
        nome: "Kolaportið",
        testo: "Mercadillo cubierto cerca del puerto, los sábados y domingos: segunda mano, libros, recuerdos y un puesto de pescado seco y otras comidas tradicionales.",
        come: "A pie desde el centro, junto al puerto viejo.",
        quando: "Sábado y domingo, todo el año; horarios en la web oficial.",
        tempo: "1 hora",
        orari: "Sábados y domingos, todo el año.",
        lat: 64.14889,
        lng: -21.93861,
        url: "https://kolaportid.is",
        consiglio: "Probar el harðfiskur (pescado seco) con mantequilla.",
      },
      {
        nome: "Piscinas termales públicas",
        testo: "Las piscinas geotérmicas forman parte de la vida social local: Sundhöllin en el centro, Laugardalslaug en el parque de Laugardalur, el mayor complejo de piscinas convencionales de Islandia, Vesturbæjarlaug cerca del mar.",
        come: "En bus o a pie; entrada de pago, ducha desnudo obligatoria antes de entrar.",
        quando: "Tarde, cuando se reúnen los locales.",
        tempo: "2 horas",
        costo: "piscinas municipales 1.500 ISK la entrada de adulto, unos 10 € (tarifa vigente desde el 5 de mayo de 2026)",
        lat: 64.14583,
        lng: -21.88028,
        url: "https://reykjavik.is/en/swimming-pools/fees",
        consiglio: "Ducharse sin bañador: es una regla de higiene que los islandeses se toman en serio.",
      },
      {
        nome: "Museo Nacional de Islandia",
        testo: "La exposición permanente cuenta la isla desde la llegada de los colonos vikingos hasta hoy, con la puerta tallada de Valþjófsstaður, cuernos para beber y trajes tradicionales. Es el sitio adecuado para entender el resto del viaje, y una buena opción los días de lluvia.",
        come: "A pie desde el centro, en Suðurgata, junto a la universidad.",
        quando: "Cualquier día, mejor por la mañana.",
        tempo: "2 horas",
        costo: "3.300 ISK adultos, unos 23 € (2026); gratis para menores de 18",
        orari: "Todos los días de 10 a 17.",
        lat: 64.14194,
        lng: -21.94806,
        url: "https://www.thjodminjasafn.is/english",
      },
      {
        nome: "Settlement Exhibition (Reykjavík 871±2)",
        testo: "Bajo la calle Aðalstræti se visitan los restos de una casa larga del siglo X, excavada donde nació la ciudad, con una sección más reciente que llega hasta hoy. Reconstrucciones digitales y hallazgos explican cómo vivían los primeros habitantes.",
        come: "En pleno centro, en la esquina de Aðalstræti 16; entrada del Museo de la Ciudad de Reikiavik.",
        quando: "Día de mal tiempo.",
        tempo: "1 hora",
        lat: 64.14751,
        lng: -21.94281,
        url: "https://borgarsogusafn.is/en/adalstraeti-en",
      },
      {
        nome: "Tjörnin y el ayuntamiento",
        testo: "El pequeño lago del centro, rodeado de casas de colores, con cisnes, patos y ocas todo el año. El ayuntamiento, asomado al agua, tiene en la planta baja una gran maqueta en relieve de Islandia, útil para repasar la ruta.",
        come: "A pie, a dos pasos de Austurvöllur y del Parlamento.",
        quando: "Mañana o al atardecer; en invierno a veces está helado.",
        tempo: "45 minutos",
        costo: "entrada libre",
        lat: 64.14444,
        lng: -21.9425,
      },
      {
        nome: "Sólfar (Sun Voyager)",
        testo: "La escultura de acero de Jón Gunnar Árnason, de 1990, con forma de esqueleto de barco vikingo mirando al mar y al monte Esja. Es el punto más fotografiado del paseo marítimo.",
        come: "A pie por Sæbraut, unos 10 minutos desde Harpa.",
        quando: "Atardecer o, en invierno, en las horas de luz baja.",
        tempo: "20 minutos",
        costo: "libre",
        lat: 64.1476,
        lng: -21.92231,
      },
      {
        nome: "Puerto viejo y Grandi",
        testo: "El puerto del que salen las excursiones de avistamiento de ballenas y frailecillos, con casetas de pescado, heladerías y el barrio de Grandi, antigua zona de almacenes con museos y un mercado gastronómico. Aquí está Whales of Iceland, con modelos de cetáceos a tamaño real.",
        come: "A pie desde el centro por Geirsgata.",
        quando: "Tarde, quizá antes o después de una salida en barco.",
        tempo: "2 horas",
        costo: "puerto libre; Whales of Iceland 4.000 ISK adultos, unos 28 € (2026)",
        orari: "Whales of Iceland todos los días de 10 a 17.",
        lat: 64.1556,
        lng: -21.9488,
        url: "https://whalesoficeland.is",
      },
      {
        nome: "Sky Lagoon",
        testo: "Laguna termal abierta en 2021 en Kársnes, con una piscina infinita frente al océano y un recorrido en siete pasos entre agua caliente, inmersión fría y sauna. Es el balneario más cercano al centro, la alternativa urbana a la Blue Lagoon.",
        come: "Unos 15 minutos en coche o taxi desde el centro, en Kópavogur; entrada con hora reservada en línea.",
        quando: "Noche, también en invierno con el cielo oscuro para las auroras.",
        tempo: "2-3 horas",
        lat: 64.11649,
        lng: -21.94887,
        url: "https://www.skylagoon.com",
      },
      {
        nome: "Faro de Grótta",
        testo: "El faro en el extremo de la península de Seltjarnarnes, al que se llega por una lengua de tierra que la marea alta cubre. Al lado hay una pequeña poza geotérmica para los pies, y en invierno es uno de los puntos más oscuros cerca de la ciudad para ver la aurora.",
        come: "En autobús o en bici desde el centro, unos 4 km; desde el coche se sigue a pie.",
        quando: "Atardecer; consultar la tabla de mareas antes de cruzar.",
        tempo: "1 hora",
        costo: "libre",
        lat: 64.1644,
        lng: -22.022,
        consiglio: "En primavera y a principios de verano el islote cierra por la anidación de las aves: quedarse en la orilla.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Hallgrímskirkja y subida a la torre",
          "Skólavörðustígur y Laugavegur a pie",
          "Comida en el centro, luego Tjörnin y el ayuntamiento",
          "Harpa, el paseo marítimo y Sólfar",
          "Noche en una piscina municipal",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Museo Nacional o Settlement Exhibition por la mañana",
          "Puerto viejo, Grandi y una salida de avistamiento de ballenas",
          "Atardecer en el faro de Grótta o noche en la Sky Lagoon",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: Círculo Dorado (Þingvellir, Geysir, Gullfoss) en coche o con un tour",
          "Cena en el centro; el sábado o el domingo, paso por Kolaportið",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro (101)",
        perChi: "Quien quiere moverse a pie",
        testo: "Cerca de Hallgrímskirkja, restaurantes y locales. Más ruidoso los fines de semana por la noche, habitaciones pequeñas.",
        fascia: "180-350 €",
      },
      {
        nome: "Laugardalur",
        perChi: "Quien busca tranquilidad y precios más bajos",
        testo: "Cerca de las piscinas y del parque; más lejos del centro, con autobuses.",
        fascia: "130-220 €",
      },
      {
        nome: "Cerca del puerto",
        perChi: "Quien llega con ferris o tours",
        testo: "Tiene hoteles modernos, cerca de Harpa.",
        fascia: "220-400 €",
      },
    ],
    sapori: [
      {
        nome: "Perrito caliente (pylsur)",
        testo: "La comida callejera más común: salchicha con cebolla cruda y frita y salsas, en los quioscos del centro. El más conocido es Bæjarins Beztu Pylsur, en marcha desde 1937, con el quiosco principal en Tryggvagata, frente al Harpa."
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
      "Los taxis son caros: mejor autobús o coche.",
      "En los locales del centro el sábado por la noche el alcohol es caro: revisar la cuenta."
    ],
    gite: [
      {
        nome: "Círculo Dorado",
        distanza: "unos 230 km en circuito, un día en coche",
        come: "En coche o con los tours en autobús que salen del centro; Þingvellir está a unos 45 minutos.",
        testo: "La ruta clásica de Þingvellir, el campo geotérmico de Geysir y la cascada de Gullfoss: los tres lugares más famosos cerca de la capital.",
      },
      {
        nome: "Península de Reykjanes y Blue Lagoon",
        distanza: "unos 50 km, 45 minutos en coche",
        come: "En coche o con los autobuses directos a la laguna; la Blue Lagoon se reserva en línea, desde 11.990 ISK (unos 83 €).",
        testo: "Campos de lava, acantilados y la zona volcánica de Grindavík, activa varias veces desde 2023. Antes de ir hay que comprobar en safetravel.is que la zona esté abierta.",
      },
      {
        nome: "Costa sur hasta Vík",
        distanza: "unos 180 km, 2 horas y media en coche por trayecto",
        come: "En coche o con un tour de día completo.",
        testo: "Seljalandsfoss, Skógafoss, Dyrhólaey y la playa negra de Reynisfjara. En el día se hace largo: quien pueda, duerme una noche en Vík.",
      },
      {
        nome: "Península de Snæfellsnes",
        distanza: "unos 180 km, 2 horas y media en coche",
        come: "En coche, por Borgarnes; los tours de un día salen de la capital.",
        testo: "El monte Kirkjufell, el volcán glaciar Snæfellsjökull y pueblos de pescadores: una Islandia en miniatura al oeste de la capital.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Reikiavik?",
        risposta: "Para el centro basta un día completo, dos si se añaden museos, puerto y termas. Con tres se hace también el Círculo Dorado.",
      },
      {
        domanda: "¿Conviene usar Reikiavik como base para excursiones?",
        risposta: "Sí para el Círculo Dorado, Reykjanes y Snæfellsnes. Para la costa sur más allá de Vík conviene dormir por el camino, para no pasar el día en el coche.",
      },
      {
        domanda: "¿Blue Lagoon o Sky Lagoon?",
        risposta: "La Blue Lagoon está cerca del aeropuerto y es cómoda a la llegada o a la salida; la Sky Lagoon está a un cuarto de hora del centro y mira al océano. Las dos se reservan en línea.",
      },
      {
        domanda: "¿Merecen la pena las piscinas municipales?",
        risposta: "Sí: cuestan 1.500 ISK y son la forma más islandesa de pasar la tarde. Antes de entrar hay que ducharse sin bañador, y es obligatorio.",
      },
      {
        domanda: "¿Se ve la aurora boreal desde Reikiavik?",
        risposta: "De septiembre a abril, con cielo despejado y actividad alta, a veces se ve incluso desde la ciudad. Se va a puntos más oscuros como el faro de Grótta o fuera de la ciudad.",
      },
      {
        domanda: "¿Hace falta coche en la ciudad?",
        risposta: "No, el centro se recorre a pie y para lo demás están los autobuses Strætó. El coche sirve para las excursiones.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Aguja de estilo Art Déco de la iglesia de Hallgrímskirkja en Reikiavik",
    immagine: '/images/islanda/reykjavik-stock.jpg',
  },
]
