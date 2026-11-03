import type { Destinazione } from '@/lib/types'

export const destinazioniBorneo: Destinazione[] = [
  {
    slug: 'kota-kinabalu',
    paeseSlug: 'borneo',
    ordine: 1,
    nome: "Kota Kinabalu y el Monte Kinabalu",
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: "1 día en la ciudad, más 2-3 para la subida al Kinabalu",
    visitataPersonalmente: true,
    introduzione:
      "La puerta de entrada de Sabah: una ciudad portuaria sin grandes pretensiones, con los mejores atardeceres de Borneo y cinco islas a veinte minutos en barca. Detrás está el Monte Kinabalu, 4.095 metros, la cima más alta del sudeste asiático entre el Himalaya y Nueva Guinea.",
    percheAndarci:
      "En Sabah todo parte de aquí. Y el Kinabalu es una de las pocas cumbres del mundo por encima de los 4.000 metros que se suben sin experiencia alpinista, siempre que se tenga el permiso, que tiene cupo y hay que reservar con meses de antelación.",
    cosaVedere: [
      "El Monte Kinabalu, con los senderos que parten de la Timpohon Gate y el refugio de Laban Rata",
      "El Parque Kinabalu, Patrimonio de la UNESCO, que se visita también sin subir a la cima",
      "Las aguas termales de Poring y la pasarela en el dosel del parque",
      "El parque marino de Tunku Abdul Rahman, cinco islas a veinte minutos en barca de la ciudad",
      "El mercado de pescado y el Filipino Market en el paseo marítimo, con los puestos de la noche",
      "La mezquita de la ciudad en Likas, que parece flotar sobre el agua",
    ],
    cosaFare: [
      "Subir el Kinabalu en dos días con la noche en Laban Rata (hay una ficha de experiencia dedicada)",
      "La vía ferrata desde la cresta en la cima, la más alta del mundo, para quien ya tiene el permiso de subida",
      "Un día de snorkel en las islas del parque marino",
      "El atardecer en el paseo marítimo, que en Kota Kinabalu es un rito colectivo",
    ],
    doveDormire:
      "En la ciudad la zona más cómoda es el paseo marítimo. Para la subida al Kinabalu se duerme en Kundasang o dentro del parque, porque se sale al amanecer y desde Kota Kinabalu son dos horas de carretera: hacerlo en el día significa levantarse a las tres.",
    doveMangiare:
      "En Kota Kinabalu se come junto al mar. En el Filipino Market se elige el pescado en el puesto y se hace a la parrilla al momento: es la cena más típica de la ciudad, a precios bajos. Hay que probar el hinava, el pescado crudo marinado en lima de los kadazan-dusun, y el tuaran mee, los fideos hechos a mano de la zona. En las ciudades de Sabah la cocina china es excelente y está por todas partes.",
    comeArrivare:
      "En avión a Kota Kinabalu (BKI) desde Kuala Lumpur, unas 2h30, con decenas de vuelos al día. A la llegada se pasa el control de pasaportes de Sabah, que tiene una inmigración propia incluso para quien llega desde la península.",
    comeSpostarsi:
      "En la ciudad a pie y con Grab. Para el parque del Kinabalu y para Sandakan hacen falta minibuses interurbanos o traslados privados: las carreteras son lentas y en el mapa las distancias engañan.",
    periodoMigliore:
      "de marzo a septiembre para la subida, cuando en la cima llueve menos. Con mal tiempo la montaña cierra, y en el pasado ha ocurrido también tras terremotos: mejor fijar la fecha con un poco de margen.",
    costi:
      "la subida al Kinabalu es cara y no hay forma de ahorrar: permiso, guía obligatorio, noche en Laban Rata y traslados se pagan en paquete, y es una de las partidas más altas de todo el viaje. Las islas del parque marino, en cambio, cuestan muy poco.",
    erroriDaEvitare: [
      "Pensar en reservar la subida al Kinabalu sobre el terreno: los permisos diarios son poco más de ciento sesenta y se agotan con meses de antelación",
      "Subestimar la altura: se parte de 1.866 metros y se llega a 4.095 en poco más de 24 horas, sin aclimatación, y el mal de altura afecta también a quien está entrenado",
      "Dormir en Kota Kinabalu la noche antes de la subida",
      "Usar la ciudad solo como escala: el atardecer en el paseo marítimo y las islas a veinte minutos valen un día",
    ],
    miaEsperienza:
      "Kota Kinabalu en sí es una ciudad más funcional que bonita, reconstruida tras los bombardeos de la Segunda Guerra Mundial, y en media jornada se la ha entendido. El motivo para venir está detrás. El Kinabalu se sube en dos días. El primero es una escalera sin fin en la selva tropical, seis kilómetros de escalones irregulares con la humedad encima, hasta el refugio de Laban Rata a 3.270 metros, adonde llegamos a primera hora de la tarde. El segundo empieza a las dos de la madrugada, a oscuras, sobre el granito desnudo, agarrado a una cuerda fija. La altura se nota: se parte de menos de dos mil metros y en poco más de un día se está por encima de los cuatro mil, sin aclimatación, y el dolor de cabeza es la regla más que la excepción. Luego el sol sale sobre la plataforma de granito, y debajo está todo Borneo, con las nubes bajo los pies. El consejo práctico que cuenta más que ninguno: los permisos son poco más de ciento sesenta al día y hay que reservarlos con meses de antelación, no semanas.",
    esperienzeSlugs: ['monte-kinabalu'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: "La cúpula y los minaretes de la mezquita de la ciudad de Kota Kinabalu bajo un cielo tormentoso",
    immagine: '/images/borneo/kota-kinabalu.jpg',
  },
  {
    slug: 'sepilok-sandakan',
    immagine: '/images/viaggi/borneo-itinerario/giorno-5-sepilok-orangutan.jpg',
    paeseSlug: 'borneo',
    ordine: 2,
    nome: "Sepilok y Sandakan",
    tipologia: ['fauna selvatica', 'natura', 'storia'],
    giorniConsigliati: "2 días",
    visitataPersonalmente: true,
    introduzione:
      "Aquí está el centro de rehabilitación de orangutanes más conocido del mundo, donde los animales huérfanos o confiscados son devueltos poco a poco a la selva, y al lado el centro de los osos malayos, los osos más pequeños del planeta. A media hora, la ciudad de Sandakan conserva la memoria de uno de los capítulos más duros de la guerra del Pacífico.",
    percheAndarci:
      "Es el lugar donde es más probable ver orangutanes de cerca, y la base natural para el Kinabatangan. El Sandakan Memorial Park, además, cuenta las marchas de la muerte de 1945: de 2.400 prisioneros aliados sobrevivieron seis.",
    cosaVedere: [
      "El Sepilok Orangutan Rehabilitation Centre, con las plataformas donde se deja la comida",
      "El Bornean Sun Bear Conservation Centre, al lado, a menudo omitido y igual de interesante",
      "El Rainforest Discovery Centre, con una pasarela en el dosel excelente para la observación de aves al amanecer",
      "El Sandakan Memorial Park, en el lugar del campo de prisioneros japonés",
      "La Agnes Keith House y la vista sobre la bahía de Sandakan",
    ],
    cosaFare: [
      "Asistir a las sesiones de alimentación en el centro de Sepilok (hay una ficha de experiencia dedicada)",
      "La pasarela en el dosel del Rainforest Discovery Centre al amanecer, cuando pasan los cálaos",
      "El centro de los osos malayos, a doscientos metros, que casi nadie incluye en el programa",
      "Una excursión a las islas de las tortugas de Selingan, para ver de noche la puesta de huevos",
    ],
    doveDormire:
      "En Sepilok, en los lodges inmersos en la selva a pocos minutos de los centros. Es la mejor opción, porque permite estar en la primera sesión de alimentación y en la pasarela del dosel al amanecer. La ciudad de Sandakan sirve solo para las conexiones.",
    doveMangiare:
      "En Sandakan se come pescado y cocina china, ambos de buen nivel: la ciudad tiene una comunidad china histórica, y el sitio adecuado son los restaurantes de marisco del paseo marítimo. En Sepilok solo están los restaurantes de los lodges, sencillos y con menús fijos.",
    comeArrivare:
      "Vuelo de Kota Kinabalu a Sandakan (unos 45 minutos) o 6 horas de carretera. De Sandakan a Sepilok son 25 kilómetros.",
    comeSpostarsi: "Taxi o traslados organizados por los lodges. Hay transporte público, pero pasa raramente y con equipaje es incómodo.",
    periodoMigliore:
      "todo el año para los centros, con una precisión importante: en la temporada de frutos de la selva (más o menos entre diciembre y febrero, pero con variaciones) los orangutanes encuentran comida por sí solos y a las sesiones de alimentación llegan muchos menos. De abril a octubre las probabilidades son más altas.",
    costi: "Sepilok unos 30 ringgit, más el permiso para la cámara; centro de los osos malayos en torno a 30; Rainforest Discovery Centre unos 15.",
    erroriDaEvitare: [
      "Ir a una sola sesión de alimentación: son dos al día, y en una temporada desfavorable dos intentos duplican las probabilidades",
      "Llevar mochilas abiertas, botellas o comida en la mano: los macacos los arrebatan, y ocurre a menudo",
      "Quedarse en Sepilok y saltarse el Kinabatangan convencidos de haber visto la fauna de Borneo: aquí los orangutanes son semisalvajes y están habituados a las personas",
      "Saltarse el Sandakan Memorial Park porque «es solo un parque»: es uno de los lugares de memoria más fuertes del sudeste asiático",
    ],
    confronti: [
      {
        titolo: "Dónde ver orangutanes: Borneo o Sumatra",
        introduzione:
          "Los orangutanes salvajes viven solo en dos islas del mundo, Borneo y Sumatra, y son dos especies distintas; tres, contando el tapanuli, descubierto en 2017 y reducido a unos pocos cientos de individuos. Es la elección que cambia el viaje más que ninguna otra, porque en los lugares principales probabilidad de avistamiento, costes y autenticidad son completamente diferentes. En general, cuanto más salvaje es el encuentro, menos garantizado está y más cuesta llegar.",
        opzioni: [
          {
            nome: "Sepilok (Sabah)",
            sintesi: "Centro de rehabilitación para huérfanos y animales confiscados, con dos sesiones de alimentación al día en plataformas accesibles por pasarelas.",
            costo: "unos 30 ringgit de entrada",
            durata: "media jornada; se duerme al lado",
            pro: [
              "La probabilidad más alta de ver orangutanes de cerca, en cualquier época",
              "Fácil de alcanzar y de combinar con el Kinabatangan",
              "El trabajo de rehabilitación es serio y documentado: no es un zoo",
              "Al lado están el centro de los osos malayos y una excelente pasarela en el dosel",
            ],
            contro: [
              "Los animales son semisalvajes y están habituados a las personas: no es un encuentro en la naturaleza",
              "En la temporada de frutos de la selva llegan muchos menos, porque comen por sí solos",
              "Abarrotado a las horas de las sesiones de alimentación",
            ],
            perChi: "Cualquiera que quiera una certeza razonable de verlos, y quien tiene poco tiempo. Es el punto de partida, no la meta.",
          },
          {
            nome: "Río Kinabatangan (Sabah)",
            sintesi: "Salidas en barca al amanecer y al atardecer a lo largo del río, donde los animales se concentran en la franja de selva que queda en las orillas.",
            costo: "paquetes en lodge desde unos 100€ por noche, con comidas y salidas incluidas",
            durata: "2-3 noches",
            pro: [
              "Orangutanes completamente salvajes, junto con monos narigudos, elefantes pigmeos, cocodrilos y cálaos",
              "La mejor relación entre probabilidad de avistamiento y coste de todo Borneo",
              "Con dos o tres noches las probabilidades suben bastante",
            ],
            contro: [
              "Ninguna garantía: se ven desde la barca, a menudo lejos y a contraluz",
              "La franja de selva es estrecha precisamente porque alrededor está la palma aceitera; es también el motivo por el que los animales se concentran allí, y da que pensar",
              "Mosquitos y calor pesados en las salidas de la tarde",
            ],
            perChi: "Cualquiera que tenga al menos dos noches: es la opción con el mejor equilibrio entre autenticidad y éxito.",
          },
          {
            nome: "Danum Valley (Sabah)",
            sintesi: "Selva primaria nunca talada, con un centro de investigación y un lodge de alta gama, senderos y una pasarela en el dosel a 26 metros.",
            costo: "la etapa más cara de Borneo, con paquetes de varias noches",
            durata: "al menos 3 noches, para que tenga sentido",
            pro: [
              "Selva primaria de verdad, lo más parecido al Borneo de antes de la deforestación",
              "Fauna completa: orangutanes, gibones, leopardos nublados, ciervos, muchísimas aves",
              "Poquísima gente y guías naturalistas de nivel",
            ],
            contro: [
              "Carísima, y los orangutanes se ven o no se ven sin regla: aquí se viene por la selva, no por una especie",
              "Difícil de alcanzar: traslados largos por pistas forestales",
              "Sanguijuelas, humedad y trekkings exigentes",
            ],
            perChi: "Quien tiene presupuesto y al menos tres noches, y viene por la selva en sí más que por una lista de animales.",
          },
          {
            nome: "Bukit Lawang (Sumatra, Indonesia)",
            sintesi: "La otra isla: trekking en la jungla del Gunung Leuser, con los orangutanes de Sumatra, una especie distinta de la de Borneo y en peligro crítico.",
            costo: "con diferencia el más económico: trekkings guiados de 1-3 días por unas pocas decenas de euros",
            durata: "1-3 días de trekking",
            pro: [
              "Se camina dentro de la selva y se los busca a pie, en lugar de mirarlos desde una plataforma o una barca",
              "Las probabilidades de verlos son altas, porque en la zona viven animales antes rehabilitados y ya salvajes",
              "Costes bajísimos respecto a cualquier opción de Borneo: alojamientos, guías y trekkings cuestan una fracción",
              "La jungla del Leuser es el último lugar del mundo donde orangutanes, tigres, rinocerontes y elefantes viven en el mismo ecosistema",
            ],
            contro: [
              "El problema ético existe y hay que conocerlo antes: algunos guías atraen a los animales con comida para garantizar el avistamiento, una práctica que hay que rechazar de forma explícita al reservar",
              "Es mucho más físico: se sube por el barro agarrándose a las raíces, con calor y humedad altos",
              "Las normas son menos estrictas que en Malasia, y la calidad depende mucho del guía que te toque",
              "Sumatra está lejos de Borneo: son dos viajes distintos, no dos etapas del mismo",
            ],
            perChi: "Quien quiere buscarlos a pie en lugar de mirarlos, tiene un presupuesto contenido y elige el operador con atención.",
          },
          {
            nome: "Semenggoh (Sarawak)",
            sintesi: "Reserva cerca de Kuching donde viven orangutanes rehabilitados ya libres, que vuelven a las plataformas solo cuando la selva ofrece poco.",
            costo: "pocos ringgit",
            durata: "2-3 horas, en el día desde Kuching",
            pro: [
              "Comodísima: a media hora de Kuching, se hace en media mañana",
              "Los animales son libres y semisalvajes, no están en recintos",
              "En la temporada adecuada pueden llegar bastantes a la vez",
            ],
            contro: [
              "En la temporada de frutos (más o menos noviembre-marzo) puede no llegar nadie, y la reserva lo dice abiertamente",
              "Muy concurrida, y la parada dura poco",
              "Está en Sarawak: solo tiene sentido si el viaje pasa por Kuching",
            ],
            perChi: "Quien ya está en Kuching. Por sí sola no es una razón para cruzar Borneo.",
          },
        ],
        raccomandazione:
          "Dentro de Borneo funciona la combinación Sepilok más Kinabatangan: el primero garantiza el encuentro de cerca, el segundo lo vuelve salvaje, y juntos cuestan menos que tres noches en Danum Valley. Danum se añade si hay presupuesto y días, Semenggoh solo si el itinerario toca Sarawak. Entre las dos islas, en cambio, la diferencia afecta a la experiencia antes incluso que a la fauna: en Sumatra se camina por la jungla y se los busca, en Borneo se está en una plataforma o en una barca y se espera. Sumatra cuesta una fracción y es más físico y más directo; Borneo es más organizado, más regulado y además ofrece cosas que en Bukit Lawang no hay: los monos narigudos, los elefantes pigmeos, la selva primaria de Danum y Sipadan a pocas horas. Quien ya ha hecho Bukit Lawang que no venga a Borneo por los orangutanes: que venga por todo lo demás, y los volverá a ver de todos modos.",
      },
    ],
    miaEsperienza:
      "En Sepilok los orangutanes se ven con más seguridad que en otros sitios, y conviene decir enseguida lo que significa. Son animales huérfanos o confiscados del comercio ilegal, en rehabilitación y habituados a las personas, y las plataformas sirven para complementar la comida que todavía no saben encontrar por sí solos. No es naturaleza, y el centro no finge que lo sea. Dicho esto, ver a un orangután cruzar una cuerda tendida sobre la cabeza, a tres metros, con ese modo de moverse lentísimo y aparentemente meditado, basta para justificar un viaje. El consejo más útil es ir a las dos sesiones de alimentación, porque en ciertas épocas la selva da suficiente fruta y casi no llega nadie. Luego está lo que casi todos se saltan: el centro de los osos malayos a doscientos metros, con los osos más pequeños del mundo rescatados del comercio de mascotas, y el Sandakan Memorial Park, donde pasamos una mañana, en el lugar del campo de prisioneros del que partieron las marchas de la muerte de 1945. De dos mil cuatrocientos prisioneros aliados sobrevivieron seis.",
    esperienzeSlugs: ['sepilok-oranghi'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: "Dos orangutanes en el Sepilok Orangutan Rehabilitation Centre, fotografiados de cerca mientras comen",
  },
  {
    slug: 'kinabatangan',
    immagine: '/images/borneo/kinabatangan.jpg',
    paeseSlug: 'borneo',
    ordine: 3,
    nome: "Río Kinabatangan",
    tipologia: ['fauna selvatica', 'natura', 'fiume'],
    giorniConsigliati: "2-3 noches",
    visitataPersonalmente: true,
    introduzione:
      "El río más largo de Sabah, con una franja de selva que queda a lo largo de las orillas y plantaciones de palma aceitera por todo alrededor. Esta compresión es una tragedia ecológica, y es también el motivo por el que aquí se ve más fauna salvaje que en cualquier otro lugar del sudeste asiático: los animales no tienen otro sitio adonde ir.",
    percheAndarci:
      "En dos días de salidas al amanecer y al atardecer se ven orangutanes salvajes, monos narigudos, elefantes pigmeos de Borneo, cocodrilos, macacos, cálaos y martines pescadores, con la mejor relación entre probabilidad de avistamiento y coste de toda la isla.",
    cosaVedere: [
      "Los orangutanes salvajes en los árboles de las orillas, que al atardecer se construyen el nido para la noche",
      "Los monos narigudos, los monos de nariz enorme que solo existen en Borneo",
      "Los elefantes pigmeos de Borneo, los más pequeños del mundo, que se desplazan en manada a lo largo del río",
      "Los cocodrilos de estuario, que se ven mejor en las salidas nocturnas",
      "Los ocho tipos de cálao de Borneo, incluido el cálao rinoceronte de casco naranja",
      "Las Cuevas de Gomantong, con millones de murciélagos y los nidos de vencejo recogidos para la sopa",
    ],
    cosaFare: [
      "Las salidas en barca al amanecer y al atardecer, el corazón de la experiencia (hay una ficha de experiencia dedicada)",
      "Una salida nocturna en barca con linternas, para cocodrilos, búhos y lechuzas",
      "Un trekking guiado por la selva detrás del lodge, con los calcetines antisanguijuelas",
      "Las Cuevas de Gomantong, con la salida vespertina de los murciélagos",
    ],
    doveDormire:
      "En los lodges a lo largo del río, casi todos en torno a Sukau y Bilit, que se reservan en paquete con comidas y salidas en barca incluidas: es la única forma sensata de organizarse. Los hay desde muy básicos hasta confortables, y la diferencia de precio está más en la habitación que en los guías.",
    doveMangiare:
      "No hay elección, y es normal: se come en el lodge, en buffet, tres veces al día. Cocina malaya sencilla: arroz, pollo, pescado de río, verduras salteadas, fruta. Buena y repetitiva. Tiendas no hay: el agua, los snacks y sobre todo el efectivo hay que comprarlos en Sandakan antes de salir.",
    comeArrivare:
      "Unas 2 horas de carretera desde Sandakan hasta Sukau o Bilit, luego la barca hasta el lodge. Casi todos los paquetes incluyen el traslado desde Sandakan o directamente desde el aeropuerto.",
    comeSpostarsi: "Solo en barca, con las salidas organizadas por el lodge: a lo largo del río no hay carreteras.",
    periodoMigliore:
      "de marzo a octubre. En la estación de lluvias el río sube y los animales se dispersan por la selva inundada en lugar de concentrarse en las orillas: las probabilidades de verlos bajan bastante.",
    costi: "paquetes desde unos 100€ por noche por persona, con pensión completa, salidas en barca y traslados incluidos; las diferencias de precio tienen que ver sobre todo con el nivel de la habitación.",
    erroriDaEvitare: [
      "Quedarse una sola noche: con dos salidas se depende de la suerte, con cuatro o seis las probabilidades cambian por completo",
      "Llegar sin efectivo: a lo largo del río no hay cajeros, y muchos lodges y servicios extra se pagan solo en ringgit",
      "Esperar a los animales cerca: se ven desde la barca, a menudo a veinte o treinta metros y a contraluz. Unos prismáticos cambian el día más que cualquier objetivo fotográfico",
      "Subestimar los mosquitos en las salidas de la tarde: aquí el repelente de alta concentración sirve de verdad",
    ],
    miaEsperienza:
      "En el Kinabatangan Borneo cumple todas sus promesas, y al mismo tiempo se entiende lo que le ha pasado a esta isla. Llegamos por la tarde, y la primera salida al atardecer la hicimos esa misma noche. Se sale en barca al amanecer, se remonta el río con el motor al ralentí y en dos horas se ven monos narigudos que saltan entre los árboles, cálaos que pasan en pareja, macacos y, con un poco de suerte, un orangután salvaje que se mueve lentísimo en una rama. Luego la barca gira hacia un afluente, la franja de selva se adelgaza y detrás aparecen las hileras ordenadas de las palmas aceiteras, a pérdida de vista. Ahí se entiende por qué los animales están todos concentrados en una franja de unos pocos cientos de metros de ancho. No es una reserva bien lograda, es lo que ha quedado. Dos cosas prácticas cuentan más que las demás. Quedarse al menos dos noches, porque cada salida es una lotería y cuatro boletos valen más que dos. Y llevar unos prismáticos: se mira casi siempre a veinte metros, y sin ellos se pierde la mitad de lo que señala el guía.",
    esperienzeSlugs: ['crociera-kinabatangan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: "Barcas de madera de colores amarradas en la orilla fangosa del río Kinabatangan, con la selva tropical en la otra orilla",
  },
  {
    slug: 'danum-valley',
    paeseSlug: 'borneo',
    ordine: 4,
    nome: "Danum Valley",
    tipologia: ['natura', 'foresta primaria', 'trekking'],
    giorniConsigliati: "3 noches como mínimo",
    visitataPersonalmente: false,
    introduzione:
      "Cuarenta y tres mil hectáreas de selva tropical primaria nunca talada, una de las pocas que quedan en el sudeste asiático: árboles de ochenta metros, una pasarela en el dosel suspendida a veintiséis metros y un silencio que por la mañana temprano solo rompen los gibones. No hay pueblos ni carreteras públicas.",
    percheAndarci:
      "Es lo más parecido al Borneo de antes de la deforestación. La diferencia entre selva primaria y secundaria, que sobre el papel parece un detalle técnico, aquí se ve a simple vista: árboles de tamaños que en otros sitios ya no existen y una estructura en estratos completa.",
    cosaVedere: [
      "La pasarela en el dosel suspendida a 26 metros entre las copas",
      "Los árboles emergentes, que superan los 80 metros",
      "La fauna de la selva primaria: gibones, orangutanes salvajes, ciervos, osos malayos y, para poquísimos afortunados, leopardos nublados",
      "El mirador de Bukit Fatimah, con la vista sobre la selva sin interrupciones",
      "Las sepulturas en la pared de roca, dejadas hace siglos por las poblaciones locales",
    ],
    cosaFare: [
      "Trekkings guiados de día y de noche con naturalistas que viven allí",
      "El night drive por la pista forestal, el mejor momento para los mamíferos",
      "El amanecer desde la pasarela en el dosel, cuando los gibones empiezan a llamarse",
      "El baño en el río Danum, con el que se cierra cada jornada",
    ],
    doveDormire:
      "Solo hay dos posibilidades, ambas dentro del valle: el centro de investigación, básico y más económico, y el lodge de alta gama. Alternativas no hay y no se puede venir en el día: es la etapa más cara de cualquier viaje a Borneo.",
    doveMangiare: "Pensión completa incluida en el paquete, sin alternativas: en decenas de kilómetros a la redonda no hay nada más.",
    comeArrivare:
      "Vuelo a Lahad Datu, luego unas 2-3 horas de pista forestal con el traslado organizado por el alojamiento. No se llega por cuenta propia y no hay transporte público.",
    comeSpostarsi: "A pie por los senderos, siempre con guía, y en todoterreno para los night drives.",
    periodoMigliore:
      "de marzo a octubre, el periodo más seco. Llueve de todos modos: es selva tropical ecuatorial, y la lluvia forma parte del paquete.",
    costi: "la partida más cara del viaje, con paquetes de varias noches que incluyen traslados, pensión completa y actividades guiadas.",
    erroriDaEvitare: [
      "Ir por los orangutanes: están, pero verlos es imprevisible, y quien viene por una sola especie se queda decepcionado. Aquí se viene por la selva",
      "Quedarse una noche: descontados los traslados quedarían pocas horas, y el coste por hora sería absurdo",
      "Subestimar las sanguijuelas: en la estación húmeda son muchas, y los calcetines específicos son la única defensa que funciona",
      "Dar por sentada la conexión: aquí no hay, y forma parte del encanto",
    ],
    miaEsperienza:
      "Todavía no he estado, y por honestidad la ficha se detiene en la información verificable en lugar de contar una jornada inventada. Está en la lista por dos motivos precisos. El primero es que la selva primaria no es un detalle de naturalistas: árboles emergentes de más de ochenta metros y una estructura en estratos completa en el sudeste asiático casi ya no existen, y Danum es uno de los poquísimos lugares donde todavía se ven. El segundo es que es justo lo contrario del Kinabatangan: allí los animales se ven con facilidad porque están aplastados en una franja de verde entre las palmas aceiteras, aquí se ven poco precisamente porque todavía tienen cuarenta y tres mil hectáreas donde estar. Cuesta bastante y hay que contar al menos tres noches: quien va por una pasa el tiempo casi solo en traslados.",
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: "Un río que fluye por la selva tropical de tierras bajas de Danum Valley, Sabah",
    immagine: '/images/borneo/danum-valley.jpg',
  },
  {
    slug: 'semporna-sipadan',
    immagine: '/images/borneo/diving-sipadan.jpg',
    paeseSlug: 'borneo',
    ordine: 5,
    nome: "Semporna y Sipadan",
    tipologia: ['diving', 'mare', 'isole'],
    giorniConsigliati: "4-5 días, para tener una posibilidad real de conseguir el permiso",
    visitataPersonalmente: true,
    introduzione:
      "La costa sudoriental de Sabah, con la isla de Sipadan mar adentro: un pináculo coralino que se eleva desde 600 metros de profundidad y que muchos consideran el mejor sitio de buceo del mundo. El acceso tiene cupo, en la isla no se duerme y el permiso solo se consigue a través de un operador.",
    percheAndarci:
      "Por Sipadan, y no es una exageración de folleto: bancos de barracudas en espiral, cientos de tortugas, tiburones de arrecife y paredes que bajan al azul. Y por Mabul y Kapalai, que son lo contrario: fondos bajos y arenosos donde se buscan los animales más pequeños y extraños del océano.",
    cosaVedere: [
      "Sipadan, con los puntos Barracuda Point, Drop Off y Turtle Tomb",
      "Mabul, capital mundial del muck diving: caballitos de mar pigmeos, pulpos mimético, nudibranquios, peces rana",
      "Kapalai, con las palafitas sobre el banco de arena",
      "Las comunidades bajau laut, los «nómadas del mar», que viven en barcas y palafitas, a menudo sin nacionalidad",
      "Bohey Dulang, el cráter volcánico de la isla, con el sendero panorámico sobre la laguna",
    ],
    cosaFare: [
      "Inmersiones en Sipadan, con el permiso conseguido a través del operador (hay una ficha de experiencia dedicada)",
      "Muck diving en Mabul y Kapalai, que vale el viaje incluso sin Sipadan",
      "La subida a Bohey Dulang, para ver la laguna desde lo alto del cráter",
      "Snorkel para quien no tiene el título, sabiendo que en Sipadan los permisos van sobre todo a los buceadores",
    ],
    doveDormire:
      "Nosotros dormimos en la isla de Mabul, para estar ya en el mar; allí hay resorts y alojamientos más económicos. La ciudad de Semporna cuesta menos y es más cómoda para las conexiones, pero quita esta ventaja. **En la isla de Sipadan no se puede dormir**: las instalaciones se retiraron en 2004 precisamente para protegerla.",
    doveMangiare:
      "En los resorts se come con pensión completa, incluida en el paquete. En la ciudad de Semporna hay restaurantes de pescado en el paseo marítimo, excelentes y económicos, donde la captura del día se elige en el puesto.",
    comeArrivare:
      "Vuelo a Tawau, luego aproximadamente una hora y media de carretera hasta Semporna y la barca a Mabul (unos 45 minutos). Casi todos los resorts organizan el traslado completo.",
    comeSpostarsi: "Solo en barca, con las salidas organizadas por el centro de buceo.",
    periodoMigliore:
      "de abril a septiembre, con el mar más en calma y la mejor visibilidad. De noviembre a febrero el mar está más agitado y algunas salidas se cancelan.",
    costi:
      "paquetes de buceo de varias noches con pensión completa; el permiso de Sipadan se paga aparte y es la partida que lo decide todo. Hoy cada permiso da derecho a tres inmersiones en la isla el mismo día.",
    erroriDaEvitare: [
      "Presentarse esperando bucear en Sipadan sin haber reservado meses antes: los permisos diarios son poco más de doscientos cincuenta, Sabah Parks los asigna a los operadores y estos los reparten entre los huéspedes, casi siempre de forma rotativa y premiando las estancias más largas",
      "Reservar solo dos noches y contar con Sipadan: la rotación favorece a quien se queda 4-5 noches, y por eso el itinerario hay que construirlo así",
      "Intentar comprar un permiso por cuenta propia: no se dan a particulares, solo a los operadores autorizados",
      "Ignorar los avisos de seguridad sobre la costa oriental de Sabah: la zona está vigilada y el turismo funciona con normalidad, pero la situación hay que comprobarla antes de reservar",
    ],
    miaEsperienza:
      "Sipadan hace honor a su fama, algo raro para un lugar tan celebrado. Se baja por una pared que continúa en el azul sin un fondo visible, y a los pocos minutos pasa un banco de barracudas que se enrosca en una espiral ancha como una casa; las tortugas son tantas que después de la quinta uno deja de fotografiarlas. Antes de reservar, sin embargo, hay que entender que el permiso lo decide todo. Son poco más de doscientos cincuenta al día, no se compran como particular: los asigna Sabah Parks a los operadores, que luego los reparten entre los huéspedes de forma rotativa, y la rotación premia a quien se queda más tiempo. Reservar dos noches y esperar es la manera más segura de no bucear en absoluto. La sorpresa, de todos modos, fue otra: Mabul, que todos tratan como una base de apoyo, es uno de los mejores lugares del mundo para el muck diving, y buscar en una gorgonia un caballito de mar pigmeo del tamaño de una uña es tan divertido como un banco de barracudas. Una última cosa, que de turística no tiene nada: alrededor de las palafitas viven los bajau laut, a menudo sin la nacionalidad de ningún Estado, y el contraste con los resorts a cincuenta metros merece que uno se detenga a pensar.",
    esperienzeSlugs: ['diving-sipadan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: "Un banco de peces y el arrecife de coral en las aguas de Sipadan, iluminados por los rayos del sol",
  },
  {
    slug: 'kuching-bako',
    paeseSlug: 'borneo',
    ordine: 6,
    nome: "Kuching y Sarawak",
    tipologia: ['città', 'natura', 'cultura'],
    giorniConsigliati: "3-4 días",
    visitataPersonalmente: true,
    introduzione:
      "La capital de Sarawak está a orillas del río, con un paseo fluvial ordenado y una historia particular: durante un siglo fue el reino privado de los «rajás blancos», la dinastía inglesa de los Brooke. Alrededor están el parque nacional de Bako con los monos narigudos, los poblados de casas largas iban y las cuevas prehistóricas de Niah.",
    percheAndarci:
      "Es probablemente la ciudad más agradable de Malasia. Y Sarawak tiene una historia y una composición étnica del todo distintas a las de Sabah: aquí domina la cultura iban, con las casas largas, viviendas comunales de cientos de metros de largo donde viven decenas de familias.",
    cosaVedere: [
      "El paseo fluvial de Kuching y las antiguas shophouses del centro",
      "El Sarawak Museum y el Borneo Cultures Museum, entre los mejores museos etnográficos de la región",
      "El parque nacional de Bako, con los monos narigudos, los macacos y las formaciones de arenisca junto al mar",
      "El Sarawak Cultural Village, con las casas tradicionales de los distintos grupos étnicos",
      "La Semenggoh Nature Reserve, con orangutanes rehabilitados y ya libres",
      "Las cuevas de Niah, con huellas de presencia humana de hace cuarenta mil años",
    ],
    cosaFare: [
      "Un día en Bako, accesible solo en barca, con senderos entre la selva y los acantilados",
      "Semenggoh en la sesión de alimentación de la mañana, sabiendo que en la temporada de frutos puede no llegar nadie",
      "Una noche en una casa larga iban a lo largo del Batang Ai o del Lemanak",
      "El laksa de Sarawak en el desayuno, un plato distinto de todos los demás laksas malayos",
    ],
    doveDormire:
      "En el paseo fluvial o en el casco histórico de Kuching, que se recorre entero a pie. Para Bako conviene una noche en los chalets del parque: permite el paseo nocturno y los senderos al amanecer sin depender de los horarios de las barcas, ligados a la marea.",
    doveMangiare:
      "En Kuching se come muy bien, y de forma distinta al resto de Malasia. El plato que hay que probar es el Sarawak laksa, en el desayuno, con un caldo de gambas y especias que no se parece ni al de Penang ni al nyonya. Luego el kolo mee, los fideos secos, y el midin, un helecho de selva salteado con ajo que solo se encuentra aquí. Los sitios adecuados son el mercado nocturno de Chinatown y los food courts del río.",
    comeArrivare:
      "Vuelo a Kuching (KCH) desde Kuala Lumpur (unas 1h45) o desde Kota Kinabalu. También aquí hay un control de pasaportes propio: Sarawak tiene una inmigración separada incluso respecto a Sabah.",
    comeSpostarsi:
      "Kuching se recorre a pie y con Grab. Para Bako hacen falta un autobús y luego una barca, con horarios ligados a la marea; para Semenggoh, autobús o Grab en media hora.",
    periodoMigliore:
      "de marzo a octubre. En Semenggoh la temporada cuenta bastante: de abril a octubre las probabilidades de ver orangutanes son mucho más altas, mientras que en la temporada de frutos de la selva pueden no dejarse ver en absoluto.",
    costi: "Bako en torno a 20 ringgit más la barca; Semenggoh pocos ringgit; museos gratuitos o casi. Kuching es económica incluso para los estándares malayos.",
    erroriDaEvitare: [
      "Ir a Semenggoh entre noviembre y marzo contando con verlos: en la temporada de frutos los orangutanes comen en la selva, y la reserva lo dice abiertamente",
      "Hacer Bako en el día sin mirar las mareas: las barcas van y vuelven según el agua, y es fácil quedarse bloqueado",
      "Esperar que Sarawak sea como Sabah: son dos estados con historia, poblaciones e inmigración separadas, y pasar de uno a otro significa un nuevo sello en el pasaporte",
      "Reservar una casa larga «turística» sin informarse: las experiencias cambian muchísimo, de la visita montada a la estancia real en una comunidad",
    ],
    miaEsperienza:
      "Kuching es la sorpresa de Borneo: una ciudad de río tranquila, con el paseo fluvial peatonal, las casas chinas bajas y una habitabilidad que ninguna otra ciudad malaya de este tamaño tiene. El Sarawak laksa en el desayuno, en una de esas salas con ventiladores en el techo, es una de las mejores cosas de toda Malasia. Bako es el parque que más compensa. Se llega solo en barca, con los horarios decididos por la marea, y en una hora de sendero se encuentran los monos narigudos, los monos de nariz enorme que solo existen en esta isla: se los mira desde pocos metros mientras comen hojas, sin hacer caso de quien pasa. Sobre Semenggoh, en cambio, mejor ser claros: los orangutanes son libres y vuelven a las plataformas solo cuando la selva ofrece poco, así que entre noviembre y marzo puede no llegar nadie, y la reserva lo escribe a la entrada. Quien ya ha visto Sepilok que no venga a Sarawak por esto: que venga por Bako, por las casas largas y por la ciudad.",
    esperienzeSlugs: ['bako-nasiche'],
    tripSlugs: [],
    imageAlt: "El monte Santubong entre la bruma al otro lado del río Sarawak, cerca de Kuching",
    immagine: '/images/borneo/kuching-bako.jpg',
  },
  {
    slug: 'gunung-mulu',
    paeseSlug: 'borneo',
    ordine: 7,
    nome: "Gunung Mulu",
    tipologia: ['natura', 'grotte', 'trekking'],
    giorniConsigliati: "3 días",
    visitataPersonalmente: false,
    imageAlt: "La salida vespertina de los murciélagos de la Deer Cave en el parque nacional de Gunung Mulu, Sarawak",
    introduzione:
      "Un parque nacional Patrimonio de la UNESCO en el interior de Sarawak, accesible solo en avión, con algunos de los sistemas de cuevas más grandes del planeta. La Sarawak Chamber es la cámara subterránea más grande conocida del mundo, y cada tarde de la Deer Cave salen millones de murciélagos en formaciones en espiral.",
    percheAndarci:
      "Por las cuevas, que por dimensiones no tienen comparación en el mundo, y por los Pináculos, hojas de caliza de cincuenta metros de altura en la ladera de la montaña, accesibles con uno de los trekkings más duros del sudeste asiático.",
    cosaVedere: [
      "La Deer Cave, con la salida vespertina de millones de murciélagos",
      "La Lang Cave, la más rica en concreciones",
      "La Clearwater Cave y la Wind Cave, accesibles en barca por el río",
      "Los Pináculos del Gunung Api, las hojas de caliza en la ladera de la montaña",
      "La pasarela en el dosel del parque, entre las más largas del mundo",
    ],
    cosaFare: [
      "Ver al atardecer la salida de los murciélagos de la Deer Cave, desde el observatorio específico",
      "El trekking de tres días a los Pináculos, con noche en el campamento base y una subida durísima por roca y escaleras",
      "El adventure caving, para quien quiere entrar en las partes no equipadas",
      "La pasarela en el dosel y los senderos por la selva en torno al cuartel general del parque",
    ],
    doveDormire:
      "Dentro del parque, en los alojamientos que gestiona el propio parque, o en el único resort externo. Las posibilidades son pocas y hay que reservarlas con antelación, porque las camas limitan de hecho el número de visitantes.",
    doveMangiare: "El restaurante del parque y el del resort, sin alternativas. Como en las demás etapas en la selva, lo que haga falta hay que traerlo de fuera.",
    comeArrivare:
      "Solo en avión, con vuelos desde Miri, Kuching o Kota Kinabalu: ninguna carretera llega al parque. Es el motivo principal por el que esta etapa hay que organizarla antes que todo lo demás.",
    comeSpostarsi: "A pie por las pasarelas del parque y en barca por el río para las cuevas más lejanas.",
    periodoMigliore:
      "todo el año, pero la salida de los murciélagos no está garantizada: si al atardecer llueve, se quedan dentro. El trekking a los Pináculos es más seguro en la estación más seca.",
    costi: "la entrada al parque cuesta poco, pero cada cueva y cada excursión guiada se paga aparte; la partida principal es el vuelo.",
    erroriDaEvitare: [
      "Reservar el vuelo antes que el alojamiento: las plazas dentro del parque son limitadas, y sin alojamiento no se va a ninguna parte",
      "Programar una sola noche: entre vuelos y distancias internas quedaría poco tiempo",
      "Apuntarse al trekking de los Pináculos subestimándolo: es una subida por roca y escaleras de mano entre las más exigentes de la región, con límites de tiempo fijados por los guías",
      "Contar con la salida de los murciélagos: si llueve no salen, y ocurre a menudo",
    ],
    miaEsperienza:
      "Todavía no he estado, y la ficha se detiene en los hechos en lugar de contar una jornada que no ha existido. Está en la lista, sin embargo, por un motivo preciso: las dimensiones. La Sarawak Chamber es la cámara subterránea más grande conocida (en las comparaciones que circulan cabrían dentro varios aviones de línea en fila), y la Deer Cave tiene una boca tan amplia que la salida vespertina de los murciélagos parece una columna de humo oscuro que se enrosca sobre la selva. Antes de soñar con ello hay que saber una cosa de logística: a Mulu se llega solo en avión, las camas del parque son pocas y limitan a los visitantes, y por tanto se reserva al revés de lo habitual: primero la cama, luego el vuelo.",
    esperienzeSlugs: [],
    tripSlugs: [],
  },
]
