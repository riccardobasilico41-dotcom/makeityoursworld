import type { Destinazione } from '@/lib/types'

export const destinazioniFilippine: Destinazione[] = [
  {
    slug: 'el-nido',
    paeseSlug: 'filippine',
    ordine: 1,
    nome: 'El Nido',
    tipologia: ['mare', 'island hopping', 'lagune'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "El Nido fue la primera etapa de mi viaje a Filipinas: van desde Puerto Princesa y luego las lagunas del Tour A, el Tour C y la playa de Nacpan.",
    introduzione:
      'En el norte de Palawan, una bahía cerrada por acantilados de caliza negra y el archipiélago de Bacuit, con lagunas interiores, playas y cuevas a las que solo se llega en barca.',
    percheAndarci: 'Por las lagunas de Miniloc, las islas de Bacuit y playas como Nacpan, entre los paisajes marinos más famosos de Asia.',
    cosaVedere: [
      'La Big Lagoon en Miniloc (Tour A) y la Small Lagoon (Tour D)',
      'Hidden Beach, Secret Beach y Matinloc Shrine (Tour C)',
      'La playa de Nacpan',
      'El Taraw Cliff desde la Canopy Walk, la vía ferrata sobre el pueblo',
    ],
    cosaFare: [
      'Island hopping con los tours A, B, C y D',
      'Kayak dentro de las lagunas',
      'Expedición en barca de varios días hasta Coron',
    ],
    doveDormire:
      'El pueblo (El Nido town) por precios y restaurantes, Corong-Corong por los atardeceres y la calma, Nacpan y Lio para playas más tranquilas. Económico: albergues y guesthouses en el pueblo · gama media: hoteles en Corong-Corong · lujo: los resorts privados de El Nido en las islas.',
    doveMangiare: 'Pescado a la parrilla y kinilaw (pescado crudo marinado en vinagre) en el pueblo; adobo, sinigang y lechon en las carinderias.',
    comeArrivare:
      'Vuelos de Cebgo (antes AirSwift) al aeropuerto de Lio desde Clark, Cebú, Coron, Caticlan y Bohol: desde el 29 de marzo de 2026 ya no salen de Manila. Si no, vuelo a Puerto Princesa y furgoneta compartida de unas 5-5,5 horas (unos 720-790 PHP, 2026); fast craft desde Coron (unas 3,5 horas).',
    comeSpostarsi: 'Tricycles y scooters de alquiler; barcas de los tours desde el puerto y desde Corong-Corong.',
    periodoMigliore: 'de enero a abril; entre julio y octubre muchos tours se cancelan por el estado del mar',
    costi:
      'Tasa ambiental (ETDF) 400 PHP válida 10 días; tour de island hopping 1.200-1.800 PHP por persona con almuerzo, más las entradas de los sitios (Big Lagoon y Small Lagoon 200 PHP cada una, con aforo limitado); kayak doble 300-400 PHP aparte (precios orientativos, 2026). Presupuesto diario: bajo unos 40-55 € con guesthouse en el pueblo, un tour y carinderias; medio unos 90-140 € con hotel en Corong-Corong, tours, entradas y restaurantes; alto más de 450 € con resort en una isla privada.',
    erroriDaEvitare: [
      'Reservar el Tour A a última hora en temporada alta: las entradas a la Big Lagoon son por franjas horarias limitadas',
      'Llegar sin efectivo: las tarjetas no se aceptan en todas partes y los fines de semana los cajeros se quedan a menudo sin dinero',
    ],
    luoghi: [
      {
        "nome": "Tour A: Big Lagoon, Secret Lagoon y Shimizu",
        "testo": "El recorrido por las lagunas de la isla de Miniloc. La Big Lagoon se cruza en kayak entre paredes de caliza y a la Secret Lagoon se llega por una abertura estrecha en la roca. El almuerzo es en la playa de Shimizu o de 7 Commando. Desde 2018 la Small Lagoon forma parte del Tour D: las dos lagunas no se pueden visitar el mismo día.",
        "lat": 11.15474,
        "lng": 119.32087,
        "come": "En bangka desde el puerto o desde Corong-Corong con un operador autorizado. El tour es organizado: barco, guía, kayaks y almuerzo.",
        "quando": "Salida por la mañana. La Big Lagoon tiene franjas horarias de 7 a 16 h, con un máximo de 60 personas y 30 kayaks por franja, que reservan las agencias: en temporada alta conviene cerrar el tour con un día de antelación. De julio a octubre muchas salidas se cancelan por el mar.",
        "tempo": "un día",
        "costo": "Tour 1.200-1.500 PHP por persona con almuerzo (unos 17-21 €); entrada a la Big Lagoon 200 PHP (unos 3 €) y kayak doble 300-400 PHP (unos 4-6 €) aparte; tasa ETDF 400 PHP (unos 6 €) si no está pagada (indicativo, 2026)",
        "consiglio": "Lleva escarpines, máscara propia y bolsa estanca. Conviene ir a los kayaks pronto, antes que los demás barcos."
      },
      {
        "nome": "Tour C: Hidden Beach, Secret Beach y Matinloc",
        "testo": "El tour de las playas escondidas: a Hidden Beach y Secret Beach se llega nadando o caminando en agua poco profunda entre paredes de roca. Después, el santuario de Matinloc (entrada opcional, unos 200 PHP) y Helicopter Island. Es el recorrido más expuesto al mar abierto y el primero que se cancela cuando empeora el tiempo.",
        "lat": 11.18984,
        "lng": 119.28221,
        "come": "En bangka con operador autorizado; almuerzo a bordo o en una playa.",
        "quando": "Por la mañana. Con mar agitado el Tour C es el primero que se cancela: conviene dejar un día de margen.",
        "tempo": "un día",
        "costo": "Tour aproximadamente 1.400-1.800 PHP por persona con almuerzo, unos 20-25 € (indicativo, 2026)",
        "consiglio": "El Tour D lleva a la Small Lagoon y a Cadlao, el B a Pinagbuyutan y Snake Island: suelen estar menos llenos, así que elígelos si el A y el C están completos."
      },
      {
        "nome": "Playa de Nacpan",
        "testo": "Cuatro kilómetros de arena clara y palmeras, a unos 17 km al norte del pueblo, unida por un extremo a su playa gemela, Calitang, por una lengua de arena. Es más tranquila que las playas del pueblo y buena para el atardecer.",
        "lat": 11.32215,
        "lng": 119.42838,
        "come": "En tricycle o scooter desde El Nido, unos 45 minutos.",
        "quando": "Por la tarde hasta el atardecer.",
        "tempo": "medio día",
        "costo": "Playa gratuita; tricycle ida y vuelta con espera 700-1.500 PHP por vehículo (unos 10-21 €), hasta unas cuatro personas, a acordar antes (indicativo, 2026)",
        "consiglio": "Pide al tricycle que espere, porque a la vuelta es difícil encontrar uno libre."
      },
      {
        "nome": "Taraw Cliff y Canopy Walk",
        "testo": "La pared de caliza sobre el pueblo, con la vista más amplia de El Nido y la bahía de Bacuit. La subida libre a la cima ha tenido accidentes y la DENR, el organismo de medio ambiente, no ha autorizado guías ni operadores. La alternativa oficial es la Canopy Walk (El Nido Via Ferrata): pasarelas y puentes colgantes sobre las rocas, que se recorren con arnés, casco y guía incluidos en la entrada.",
        "lat": 11.17756,
        "lng": 119.39,
        "come": "A pie desde la entrada de la Canopy Walk en el pueblo; se sube en grupo con el arnés que te dan.",
        "quando": "Suele abrir todos los días de 8 a 17 h; mejor temprano o al final de la tarde, por el calor.",
        "tempo": "alrededor de 1 hora y media",
        "costo": "Canopy Walk unos 400-450 PHP, unos 6 € (indicativo, 2026)",
        "consiglio": "Calzado con buen agarre: la roca es afilada y resbala cuando está mojada. Mejor rechazar a quien ofrece la subida a la cima por su cuenta."
      },
      {
        "nome": "Tour B: Snake Island, Pinagbuyutan y las cuevas",
        "testo": "La ruta del sur de la bahía de Bacuit. Snake Island es una lengua de arena sinuosa que con la marea baja se alarga hacia la costa y se ve desde arriba desde un pequeño mirador. La ruta pasa también por la Cudugnon Cave, a la que se entra por un paso bajo en la roca, la Cathedral Cave vista desde el barco y la isla de Pinagbuyutan. Suele tener menos barcos que los tours A y C.",
        "lat": 11.09528,
        "lng": 119.34091,
        "come": "En bangka desde el puerto o desde Corong-Corong con un operador autorizado; barco, guía y almuerzo incluidos.",
        "quando": "Por la mañana, con marea baja para ver bien la lengua de arena de Snake Island.",
        "tempo": "un día",
        "costo": "Tour aproximadamente 1.200-1.800 PHP por persona con almuerzo (unos 17-25 €), más la tasa ETDF si no está pagada (indicativo, 2026)",
        "consiglio": "Para la Cudugnon Cave hacen falta escarpines: la entrada es baja y la roca resbaladiza."
      },
      {
        "nome": "Tour D: Small Lagoon y Cadlao",
        "testo": "Desde 2018 es la ruta de la Small Lagoon de Miniloc, a la que se entra nadando o en kayak por una abertura estrecha en la roca. Luego la laguna de la isla de Cadlao, la gran isla frente al pueblo, y playas resguardadas como Paradise Beach. Es una ruta corta y protegida, la opción adecuada cuando el mar abierto está agitado.",
        "lat": 11.15671,
        "lng": 119.32096,
        "come": "En bangka desde El Nido con un operador autorizado; kayaks de alquiler en la laguna.",
        "quando": "Por la mañana. La Small Lagoon también tiene franjas horarias y aforo limitado: en temporada alta conviene reservar el día antes.",
        "tempo": "un día",
        "costo": "Tour aproximadamente 1.200-1.800 PHP por persona con almuerzo (unos 17-25 €); entrada a la Small Lagoon 200 PHP (unos 3 €) y kayak aparte (indicativo, 2026)"
      },
      {
        "nome": "Las Cabanas",
        "testo": "La playa del atardecer, al sur de Corong-Corong, con bares en la arena y vistas a las islas de la bahía. Desde aquí sale una tirolina que llega al islote de Depeldet. Con la marea baja se camina mucho sobre la arena.",
        "lat": 11.14566,
        "lng": 119.39581,
        "come": "En tricycle desde El Nido pueblo, unos 15 minutos.",
        "quando": "Última hora de la tarde, para el atardecer.",
        "tempo": "2-3 horas",
        "consiglio": "A la vuelta, tras el atardecer, hay pocos tricycles: conviene acordar antes el regreso con el mismo conductor."
      },
      {
        "nome": "Corong-Corong",
        "testo": "El paseo marítimo al sur del pueblo, frente a la bahía de Bacuit, con hoteles, restaurantes y algunas salidas de los tours en barco. Al atardecer el sol se pone detrás de las islas de enfrente. Es también la zona más tranquila para dormir cerca del pueblo.",
        "lat": 11.16515,
        "lng": 119.39849,
        "come": "A pie o en tricycle desde el pueblo, 5-10 minutos.",
        "quando": "Al atardecer.",
        "tempo": "1-2 horas"
      },
      {
        "nome": "Playa de Lio",
        "testo": "Una playa larga y tranquila cerca del aeropuerto, al norte del pueblo, dentro de un barrio turístico reciente con hoteles, tiendas y restaurantes. El agua es poco profunda y tranquila, cómoda para el baño. Es menos espectacular que Nacpan, pero está mucho más cerca.",
        "lat": 11.212,
        "lng": 119.4173,
        "come": "En tricycle o scooter desde El Nido, unos 15-20 minutos.",
        "quando": "Mañana o tarde, los días sin salida en barco.",
        "tempo": "medio día"
      },
      {
        "nome": "Playa de Duli",
        "testo": "Una bahía amplia y poco frecuentada en la costa norte de El Nido, con arena clara, palmeras y muy pocas construcciones. Con las condiciones adecuadas se hace surf, algo raro por aquí. Es un destino para quien tiene scooter y quiere un día lejos de los tours.",
        "lat": 11.35306,
        "lng": 119.46504,
        "come": "En scooter o tricycle desde El Nido, alrededor de una hora de carretera, con el último tramo sin asfaltar.",
        "quando": "Con tiempo seco: después de las lluvias la pista se llena de barro.",
        "tempo": "medio día",
        "consiglio": "Lleva agua y efectivo: en la playa los servicios son mínimos."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Tour A o C por la mañana",
          "Almuerzo en el barco o en una playa",
          "Atardecer en Corong-Corong"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Tour A con las lagunas de Miniloc",
          "Día 2: Tour C y luego Nacpan en tricycle para el atardecer"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Tour A",
          "Día 2: Tour C y Nacpan",
          "Día 3: Tour D con la Small Lagoon, o día libre y Canopy Walk en el Taraw"
        ]
      }
    ],
    zone: [
      {
        "nome": "El Nido pueblo",
        "perChi": "precios y restaurantes",
        "testo": "El centro con hostales, casas de huéspedes y locales, con los tours saliendo a pie. Es ruidoso por la noche y la playa es pequeña.",
        "fascia": "20-40 €"
      },
      {
        "nome": "Corong-Corong",
        "perChi": "atardeceres y tranquilidad",
        "testo": "A pocos minutos en tricycle del pueblo, con hoteles de gama media frente al mar y atardeceres. Menos restaurantes.",
        "fascia": "60-110 €"
      },
      {
        "nome": "Nacpan y Lio",
        "perChi": "playas tranquilas",
        "testo": "Más lejos del pueblo, con playas amplias y poca vida nocturna. Hace falta tricycle o scooter para moverse."
      },
      {
        "nome": "Islas de Bacuit",
        "perChi": "quien quiera gastar",
        "testo": "Resorts en islas privadas del archipiélago, a las que solo se llega en barco. Tranquilidad total y lagunas cerca, pero todo es caro y las comidas se hacen en el resort.",
        "fascia": "más de 400 €"
      }
    ],
    sapori: [
      {
        "nome": "Kinilaw",
        "testo": "Pescado crudo marinado en vinagre con cebolla, jengibre y calamansi. Se come fresco en locales frente al mar y en las carinderias del pueblo."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "La pesca del día a la brasa, con arroz. En los restaurantes de la playa del pueblo, a la cena."
      },
      {
        "nome": "Adobo",
        "testo": "Pollo o cerdo estofado en vinagre, salsa de soja, ajo y laurel: el plato nacional. En las carinderias, los comedores locales."
      },
      {
        "nome": "Sinigang",
        "testo": "Sopa ácida de tamarindo con verduras y cerdo o gambas. En carinderias y restaurantes filipinos."
      },
      {
        "nome": "Lechon",
        "testo": "Cerdo asado entero con la piel crujiente. Se vende por trozos en carinderias y mercados."
      }
    ],
    attenzioni: [
      "Efectivo: fuera de los operadores más grandes casi no se aceptan tarjetas, y los fines de semana los cajeros del pueblo se quedan a menudo sin dinero. Llega con los pesos ya retirados.",
      "El precio del tour no siempre incluye la tasa ambiental (ETDF, 400 PHP, válida 10 días) ni las entradas: pregunta qué incluye antes de pagar.",
      "Mar agitado: de julio a octubre se suspenden las salidas en barco. Deja un día de margen antes del vuelo.",
      "Subir solo a barcos con chalecos salvavidas a bordo y renunciar cuando la guardia costera suspende las salidas."
    ],
    gite: [
      {
        "nome": "Ille Cave y el valle de Dewil",
        "distanza": "unos 30-40 minutos por carretera",
        "come": "En scooter o tricycle hacia New Ibajay, al sureste del pueblo.",
        "testo": "Un abrigo rocoso en la caliza donde los arqueólogos hallaron huellas de presencia humana muy antigua, en un valle de arrozales y rocas. Se visita con un guía local y es una alternativa al mar los días sin barco."
      },
      {
        "nome": "Taytay",
        "distanza": "unas 1,5-2 horas por carretera",
        "come": "En furgoneta o scooter por la carretera de Puerto Princesa.",
        "testo": "La antigua capital del norte de Palawan, con la fortaleza española de Santa Isabel asomada a la bahía. Una parada tranquila, lejos del circuito de los tours."
      },
      {
        "nome": "Port Barton",
        "distanza": "unas 3-4 horas por carretera",
        "come": "En furgoneta compartida desde El Nido; normalmente se duerme al menos una noche.",
        "testo": "Un pueblo junto al mar más tranquilo y barato que El Nido, con sus propias rutas de islas y arrecifes. Encaja bien como parada camino de Puerto Princesa."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en El Nido?",
        "risposta": "Tres días bastan para el Tour A, el Tour C y Nacpan. Con cuatro se añade el Tour B o el D y queda un día de reserva por si el mar bloquea los barcos."
      },
      {
        "domanda": "¿Qué tour elegir entre A, B, C y D?",
        "risposta": "El Tour A es el de las lagunas de Miniloc; el C, el de las playas escondidas, y es el más expuesto al mar. El B y el D tienen menos barcos; el D lleva a la Small Lagoon."
      },
      {
        "domanda": "¿Se pueden ver la Big Lagoon y la Small Lagoon el mismo día?",
        "risposta": "No: desde 2018 la Big Lagoon forma parte del Tour A y la Small Lagoon del Tour D. Las dos tienen franjas horarias y aforo limitado, y la entrada se reserva a través de la agencia."
      },
      {
        "domanda": "¿Cuánto cuesta la tasa ambiental de El Nido?",
        "risposta": "La ETDF cuesta 400 PHP (unos 6 €) por persona y vale 10 días. Se paga una sola vez: conviene llevar el recibo durante los tours."
      },
      {
        "domanda": "¿Cómo se va de El Nido a Coron?",
        "risposta": "En ferri rápido, 3,5-4 horas, aproximadamente 1.800-3.500 PHP (unos 25-50 €) según compañía y clase. Como alternativa, la expedición en barco de 3-5 días entre las islas o un vuelo de Cebgo."
      },
      {
        "domanda": "¿Cuándo es mejor ir a El Nido?",
        "risposta": "De enero a abril el mar está más tranquilo. Entre julio y octubre se cancelan muchas salidas: quien vaya en esos meses debe dejar al menos un día de margen."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Acantilados calizos y agua turquesa en el archipiélago de Bacuit, El Nido',
    immagine: '/images/viaggi/filippine-itinerario/giorno-03-el-nido.jpg',
  },
  {
    slug: 'coron',
    paeseSlug: 'filippine',
    ordine: 2,
    nome: 'Coron',
    tipologia: ['mare', 'relitti', 'laghi'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Llegué en ferry desde El Nido durante el viaje a Filipinas: el lago Kayangan, el Barracuda, las Twin Lagoon y un día entre pecios e islas de arena.",
    introduzione:
      'La isla de Coron y la de Busuanga, al norte de Palawan: lagos de agua dulce entre rocas calizas, islotes de arena blanca y una bahía llena de pecios japoneses de 1944.',
    percheAndarci: 'Por el lago Kayangan y el Barracuda, las Twin Lagoon y las inmersiones en los pecios de la Segunda Guerra Mundial.',
    cosaVedere: [
      'El lago Kayangan y su mirador',
      'El lago Barracuda, con el agua que cambia de temperatura en profundidad',
      'Las Twin Lagoon',
      'Las islas de Malcapuya, Banana y Bulog Dos',
      'El monte Tapyas al atardecer',
    ],
    cosaFare: [
      'Inmersiones en los pecios de Coron Bay (Okikawa Maru, Akitsushima, Irako)',
      'Snorkel en el pecio Skeleton Wreck',
      'Las aguas termales de Maquinit por la noche',
    ],
    doveDormire: 'Coron town por comodidad; resorts en islas privadas para quien quiera gastar.',
    comeArrivare:
      "Vuelos a Busuanga (aeropuerto Francisco B. Reyes, a 30-40 minutos de Coron town) desde Manila, Clark y Cebú, y vuelos de Cebgo desde El Nido; del aeropuerto salen furgonetas compartidas hasta la ciudad. Desde El Nido está el fast craft (3,5-4 horas, aproximadamente 1.800-3.500 PHP, unos 25-50 €, 2026), que sale por la mañana y se cancela con mar agitado.",
    comeSpostarsi: 'Tricycles en el pueblo, barcas de los tours desde el puerto.',
    periodoMigliore: 'de diciembre a mayo',
    costi:
      'Tour de island hopping aproximadamente 1.000-1.500 PHP por persona con almuerzo, más las entradas de cada sitio, solo en efectivo (Kayangan unos 300 PHP, Barracuda 200-250, Twin Lagoon 200); inmersiones en los pecios con los centros de buceo de Coron town (precios orientativos, 2026). Presupuesto diario: bajo unos 40-55 € con guesthouse en el pueblo, un tour y carinderias; medio unos 90-130 € con hotel con piscina, tours y entradas; alto más de 300 € con resort en isla privada o días de buceo.',
    erroriDaEvitare: [
      'Ir al Kayangan a media mañana, cuando llegan todas las barcas a la vez',
      'Bucear en los pecios interiores sin titulación y formación adecuadas',
    ],
    luoghi: [
      {
        "nome": "Lago Kayangan",
        "testo": "Un lago de agua dulce y salobre encerrado entre rocas calizas, considerado uno de los más limpios de Filipinas. Desde el mirador de la escalera de entrada se ve la bahía: es la imagen símbolo de Coron.",
        "lat": 11.95381,
        "lng": 120.22312,
        "come": "En barco en los tours de island hopping; desde el embarcadero una escalera empinada hasta el mirador. Para nadar en el lago el chaleco salvavidas es obligatorio.",
        "quando": "A la apertura o al final del día: a media mañana llegan todos los barcos a la vez.",
        "tempo": "1 hora",
        "costo": "Entrada unos 300 PHP (unos 4 €), en efectivo y aparte del tour (indicativo, 2026)",
        "consiglio": "Pide al operador que invierta el orden de las paradas para llegar a Kayangan antes de la multitud."
      },
      {
        "nome": "Lago Barracuda",
        "testo": "Una capa de agua dulce sobre una de agua salada: hacia los 14 metros de profundidad el agua pasa de golpe de unos 28 a unos 38 grados. Se nada entre paredes de roca negra.",
        "lat": 11.95637,
        "lng": 120.21684,
        "come": "En barco en los tours; desde el embarcadero se bajan unos escalones hasta el agua.",
        "quando": "Por la mañana, con menos barcos.",
        "tempo": "45 minutos",
        "costo": "Entrada unos 200-250 PHP (unos 3-4 €), aparte (indicativo, 2026)"
      },
      {
        "nome": "Twin Lagoon",
        "testo": "Dos lagunas separadas por una pared de roca. Se pasa de una a otra a nado: con marea baja por una abertura estrecha en la roca, con marea alta por debajo de la pared.",
        "lat": 11.94775,
        "lng": 120.20956,
        "come": "En barco en los tours de island hopping.",
        "quando": "Temprano, antes de que lleguen los barcos de los tours.",
        "tempo": "45 minutos",
        "costo": "Entrada unos 200 PHP (unos 3 €), aparte (indicativo, 2026)"
      },
      {
        "nome": "Pecios japoneses de la bahía de Coron",
        "testo": "Una decena de barcos japoneses hundidos por aviones de portaaviones estadounidenses el 24 de septiembre de 1944, hoy cubiertos de coral. Los más conocidos son el Okikawa Maru, el Akitsushima y el Irako. El Skeleton Wreck está a pocos metros de profundidad y también se ve haciendo snorkel.",
        "lat": 11.94129,
        "lng": 120.19193,
        "come": "Con los centros de buceo de Coron, que organizan salidas de dos inmersiones. Para los pecios profundos hace falta al menos el título Advanced; las penetraciones solo con la formación adecuada.",
        "tempo": "un día",
        "costo": "Dos inmersiones en los pecios aproximadamente 4.000-5.500 PHP con equipo, unos 56-77 € (indicativo, 2026)"
      },
      {
        "nome": "Monte Tapyas y aguas termales de Maquinit",
        "testo": "Más de 700 escalones sobre la ciudad para el mirador de la bahía al atardecer. Por la noche, las aguas termales de Maquinit, junto al mar: una de las pocas fuentes termales de agua salada del mundo.",
        "lat": 12.00511,
        "lng": 120.20466,
        "come": "Tapyas se sube a pie desde la ciudad; Maquinit en tricycle.",
        "quando": "Tapyas al atardecer, Maquinit después de cenar o al atardecer.",
        "tempo": "2-3 horas en total",
        "costo": "Tapyas gratis; Maquinit unos 300 PHP (unos 4 €); el tricycle se acuerda antes (indicativo, 2026)"
      },
      {
        "nome": "Isla de Malcapuya",
        "testo": "Una isla de arena blanca y palmeras en el municipio de Culion, al sur de Coron, con un arrecife para hacer snorkel frente a la playa. Es la parada principal del tour de las islas de arena, junto con Banana Island y Bulog Dos. La travesía es larga, pero el agua está entre las más claras de la zona.",
        "lat": 11.79065,
        "lng": 120.11484,
        "come": "En barco desde Coron town con el tour de las islas de arena; entrada a la isla aparte, en efectivo.",
        "quando": "Salida por la mañana, con el mar en calma.",
        "tempo": "un día con las otras islas",
        "costo": "Tour de las islas de arena aproximadamente 2.000-2.800 PHP por persona, unos 28-39 €; entradas de las islas aparte (indicativo, 2026)"
      },
      {
        "nome": "Banana Island",
        "testo": "Un islote con una playa de arena clara y un arrecife a pocos metros de la orilla, a menudo parada del almuerzo en el tour de las islas de arena. Hay cabañas con sombra y algunos servicios. Es ideal para hacer snorkel sin alejarse de la playa.",
        "lat": 11.77067,
        "lng": 120.12684,
        "come": "En barco en el tour de las islas de arena, con Malcapuya y Bulog Dos.",
        "quando": "A mediodía, como pausa del tour.",
        "tempo": "1-2 horas"
      },
      {
        "nome": "Bulog Dos",
        "testo": "Un islote con una lengua de arena que con la marea baja se adentra en el mar. Es la tercera parada del tour de las islas de arena. Casi no hay sombra.",
        "lat": 11.78197,
        "lng": 120.13463,
        "come": "En barco en el tour de las islas de arena.",
        "quando": "Con la marea baja, cuando la lengua de arena queda al descubierto.",
        "tempo": "1 hora",
        "consiglio": "Sombrero y protector solar: en la arena no hay refugio."
      },
      {
        "nome": "CYC Beach",
        "testo": "Un islote con una pequeña playa y manglares a pocos minutos en barco de Coron town. El agua es poco profunda, apta para quien nada poco, y a menudo es la primera o la última parada de los tours. Práctico también para medio día si hay poco tiempo.",
        "lat": 11.96364,
        "lng": 120.18066,
        "come": "En barco en los tours de island hopping o con un barquero desde el puerto.",
        "quando": "Al final del día, de vuelta del tour.",
        "tempo": "1 hora"
      },
      {
        "nome": "Siete Pecados",
        "testo": "Un parque marino de siete islotes a pocos minutos en barco del puerto, con corales y peces a poca profundidad. Es el snorkel más cercano a la ciudad y aparece en muchos tours. Con corriente fuerte conviene quedarse cerca del barco.",
        "lat": 11.98384,
        "lng": 120.22987,
        "come": "En barco desde el puerto de Coron town, por libre con un barquero o en un tour; entrada aparte, en efectivo.",
        "quando": "Por la mañana, con poca corriente.",
        "tempo": "1-2 horas"
      },
      {
        "nome": "Lusong Gunboat y Coral Garden",
        "testo": "Un cañonero japonés hundido en aguas poco profundas cerca de la isla de Lusong: con la marea baja la popa casi asoma y se ve bien haciendo snorkel. Al lado hay un jardín de coral poco profundo. Suele visitarse en la misma salida que el Skeleton Wreck.",
        "lat": 11.97925,
        "lng": 120.01961,
        "come": "En barco desde Coron town, en los tours de pecios o de snorkel.",
        "quando": "Con la marea baja, cuando el pecio está más cerca de la superficie.",
        "tempo": "1 hora"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Island hopping clásico: Kayangan, Barracuda, Twin Lagoon",
          "Atardecer desde el monte Tapyas"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Kayangan, Barracuda y Twin Lagoon",
          "Día 2: pecios en inmersión o snorkel en el Skeleton Wreck, y Maquinit por la noche"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: tour de los lagos",
          "Día 2: pecios",
          "Día 3: islas de arena (Malcapuya, Banana, Bulog Dos) y Tapyas al atardecer"
        ]
      }
    ],
    zone: [
      {
        "nome": "Coron pueblo",
        "perChi": "comodidad",
        "testo": "Hoteles y casas de huéspedes cerca del puerto, restaurantes y centros de buceo. Caótica y ruidosa, pero cómoda para los tours.",
        "fascia": "20-90 €"
      },
      {
        "nome": "Islas privadas",
        "perChi": "quien quiera gastar",
        "testo": "Resorts en islas cercanas, con traslado en barco. Aislados y tranquilos, pero todo cuesta más."
      },
      {
        "nome": "Busuanga, fuera de la ciudad",
        "perChi": "quien busca aislamiento",
        "testo": "Pocos resorts entre bahías y manglares en la costa de Busuanga, más cerca del aeropuerto y de la carretera a Calauit. Para cualquier desplazamiento hace falta coche o los traslados del resort."
      }
    ],
    sapori: [
      {
        "nome": "Kinilaw",
        "testo": "Pescado crudo en vinagre y calamansi, en los locales del paseo marítimo."
      },
      {
        "nome": "Tinola",
        "testo": "Caldo de pollo con jengibre, papaya verde y hojas de chile. En las carinderias."
      },
      {
        "nome": "Pescado y marisco a la parrilla",
        "testo": "Cangrejo, gambas y pescado del día a la brasa, en restaurantes frente al mar. Pregunta el precio por peso antes de pedir."
      },
      {
        "nome": "Almuerzo de los tours",
        "testo": "En los barcos del tour el almuerzo suele ser arroz con pescado o pollo a la parrilla y fruta, servido en la playa."
      }
    ],
    attenzioni: [
      "Kayangan está lleno a media mañana: llega pronto o al final del día.",
      "Bucear dentro de los pecios sin título y formación adecuados: peligroso.",
      "Las entradas a los sitios no siempre están incluidas en el precio del tour: pregunta antes y lleva billetes pequeños, porque se pagan solo en efectivo.",
      "Los ferris desde y hacia El Nido se cancelan con mar agitado: deja un día de margen."
    ],
    gite: [
      {
        "nome": "Calauit Safari Park",
        "distanza": "unas 3 horas por carretera o en barco",
        "come": "Con un tour organizado desde Coron town, normalmente de día completo.",
        "testo": "Una reserva en el norte de Busuanga creada en 1977, donde viven jirafas y cebras traídas de Kenia y animales de las Calamian como el ciervo de Calamian. El viaje es largo, adecuado para quien tiene un día de más."
      },
      {
        "nome": "Culion",
        "distanza": "unas 1,5-2 horas en barco",
        "come": "En barco desde Coron town, con un tour o alquilando una bangka.",
        "testo": "La isla que desde 1906 albergó la mayor leprosería de Asia, hoy un pueblo tranquilo con el museo que cuenta su historia y la iglesia en la colina asomada al mar."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Coron?",
        "risposta": "Tres días: uno para los lagos Kayangan y Barracuda y las Twin Lagoon, uno para los pecios y uno para las islas de arena. Con menos tiempo, elige el tour de los lagos."
      },
      {
        "domanda": "¿Las entradas están incluidas en el precio del tour?",
        "risposta": "A menudo no. Kayangan, Barracuda, las Twin Lagoon y las islas se pagan aparte, solo en efectivo: conviene preguntar antes y llevar billetes pequeños."
      },
      {
        "domanda": "¿Hace falta titulación para ver los pecios?",
        "risposta": "Para el Skeleton Wreck y el Lusong Gunboat basta el snorkel, porque están en aguas poco profundas. Para los pecios profundos hace falta al menos la titulación Advanced, y para entrar en los cascos una formación específica."
      },
      {
        "domanda": "¿Cómo se evita la multitud en el lago Kayangan?",
        "risposta": "Llegando a la apertura o al final del día. Se puede pedir al operador que invierta el orden de las paradas."
      },
      {
        "domanda": "¿Cómo se llega a Coron desde El Nido?",
        "risposta": "En ferri rápido, 3,5-4 horas, que sale por la mañana y se cancela con mar agitado, o en vuelo de Cebgo a Busuanga. Conviene dejar un día de margen."
      },
      {
        "domanda": "¿Dónde conviene dormir en Coron?",
        "risposta": "En Coron town, cerca del puerto del que salen los tours y de los centros de buceo. Los resorts en las islas son más tranquilos, pero más caros y lejos de todo."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Los acantilados calizos de la isla de Coron que descienden al agua turquesa',
    immagine: '/images/viaggi/filippine-itinerario/giorno-06-coron.jpg',
  },
  {
    slug: 'cebu-moalboal',
    paeseSlug: 'filippine',
    ordine: 3,
    nome: 'Cebú y Moalboal',
    tipologia: ['mare', 'immersioni', 'canyoning'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Estuve en Moalboal durante el viaje a Filipinas, con base en Panagsama Beach, entre las sardinas y las tortugas. Para el barranquismo de Kawasan salimos temprano por la mañana, para evitar la multitud.",
    introduzione:
      'La costa suroccidental de la isla de Cebú, con el arrecife de Panagsama Beach en Moalboal, las cascadas de Kawasan en Badian y la ciudad de Cebú como nudo de vuelos.',
    percheAndarci:
      'Para nadar en medio de un banco de millones de sardinas a pocos metros de la orilla, para las tortugas marinas y para el barranquismo en las gargantas de Kawasan.',
    cosaVedere: [
      'El banco de sardinas de Panagsama Beach',
      'Pescador Island, en barca',
      'Las cascadas de Kawasan',
      'White Beach en Moalboal',
    ],
    cosaFare: [
      'Snorkel desde la orilla con las sardinas y las tortugas',
      'Barranquismo en las gargantas de Kawasan',
      'Inmersiones en Pescador Island',
    ],
    doveDormire: 'Panagsama Beach en Moalboal, con guesthouses y resorts pequeños directamente sobre el arrecife.',
    comeArrivare:
      "Aeropuerto de Mactan-Cebú, luego unos 105 km hacia el sur. El autobús Ceres sale de la South Bus Terminal de Cebú y tarda unas 4 horas (menos de 250 PHP, unos 3,50 €); en coche privado son unas 3 horas, aproximadamente 3.000-4.000 PHP (unos 42-56 €), según el tráfico (2026). Desde Moalboal se sigue hacia Bohol en ferri desde Cebú.",
    comeSpostarsi: 'Tricycles y scooters; barcas a Pescador.',
    periodoMigliore: 'de diciembre a mayo',
    costi: 'Barranquismo en Kawasan unos 2.000 PHP por persona con guía, más unos 100 PHP de la lanzadera obligatoria; snorkel desde la orilla gratuito, solo se paga el alquiler del equipo (precios orientativos, 2026). Presupuesto diario: bajo unos 35-50 € con guesthouse en Panagsama, snorkel desde la orilla y carinderias; medio unos 70-110 € con resort sobre el arrecife, barranquismo o inmersiones; alto más de 150 € con resort con centro de buceo y coche privado.',
    erroriDaEvitare: [
      'Ir a Oslob a nadar con tiburones ballena: a los animales se les da de comer para mantenerlos en el lugar, y los biólogos marinos critican esta práctica',
      'Tocar a las tortugas o perseguirlas en el agua',
    ],
    luoghi: [
      {
        "nome": "Banco de sardinas de Panagsama Beach",
        "testo": "Millones de sardinas que se mueven como una sola nube a pocos metros de la orilla. Se nada entre ellas con máscara y aletas, sin barco. A lo largo del mismo arrecife se ven a menudo tortugas marinas.",
        "lat": 9.94663,
        "lng": 123.36615,
        "come": "Se entra desde la playa de Panagsama: el banco está a unas decenas de metros de la orilla. Máscara y aletas se alquilan en los centros de buceo.",
        "quando": "A primera hora, con la mejor luz y menos gente.",
        "tempo": "1-2 horas",
        "costo": "Gratis; solo se paga el alquiler de máscara y aletas",
        "consiglio": "No toques ni persigas a las tortugas, y no patalees: el banco se dispersa."
      },
      {
        "nome": "Pescador Island",
        "testo": "Un islote a unos 3 km de la costa, el punto de buceo más conocido de Moalboal, con un muro de coral que baja hasta unos 40 metros y una cueva submarina llamada la Catedral. A su alrededor se ven a menudo tortugas y quien hace snorkel se queda sobre el arrecife. Es la segunda salida clásica de Moalboal después de las sardinas.",
        "lat": 9.92303,
        "lng": 123.34346,
        "come": "En barco desde Panagsama Beach.",
        "quando": "Por la tarde o por la mañana, con mar en calma.",
        "tempo": "medio día",
        "costo": "Barco aproximadamente 1.500-2.500 PHP por barco, unos 21-35 € (indicativo, 2026)"
      },
      {
        "nome": "Barranquismo en las cascadas de Kawasan",
        "testo": "Se desciende la garganta del río Matutinao durante unas horas, con saltos desde las rocas (los altos son opcionales), toboganes naturales y tramos a nado, hasta las cascadas turquesa. En 2023 la Provincia de Cebú revocó los permisos a los operadores sin licencia: ve solo con guías autorizados.",
        "lat": 9.802,
        "lng": 123.37394,
        "come": "De Moalboal a Badian, unos 20 km, en 30-40 minutos. Se va con guía, con casco y chaleco.",
        "quando": "Salir pronto para evitar la multitud.",
        "tempo": "medio día o un poco más",
        "costo": "Unos 2.000 PHP por persona (unos 28 €) con guía, casco y chaleco, más unos 100 PHP de la lanzadera obligatoria; los paquetes con traslado cuestan más (indicativo, 2026)",
        "consiglio": "Zapatos cerrados de agua y nada de objetos de valor."
      },
      {
        "nome": "White Beach",
        "testo": "La playa de arena clara de Basdaku, al norte de Panagsama, más ancha y más cómoda para bañarse. Hay puestos y algunos restaurantes sobre la arena. Es el sitio para una tarde libre tras el barranquismo.",
        "lat": 9.98542,
        "lng": 123.36891,
        "come": "En tricycle o scooter desde Panagsama.",
        "tempo": "una tarde"
      },
      {
        "nome": "Basílica del Santo Niño",
        "testo": "La iglesia más importante de Cebú, construida donde en 1565 los españoles encontraron la imagen del Santo Niño, el Niño Jesús regalado por Magallanes en 1521. Es el corazón de la fiesta del Sinulog, en enero, y también los días normales está llena de fieles. Al lado hay un pequeño museo.",
        "lat": 10.29389,
        "lng": 123.90139,
        "come": "En el centro histórico de Cebú ciudad, a pie desde la Cruz de Magallanes y el Fort San Pedro.",
        "quando": "A primera hora, antes del calor; los domingos y en enero hay muchísima gente.",
        "tempo": "45 minutos",
        "consiglio": "Hombros y rodillas cubiertos. Durante las misas se visita en silencio."
      },
      {
        "nome": "Cruz de Magallanes",
        "testo": "El pabellón frente a la basílica que guarda la cruz plantada por los españoles a la llegada de Magallanes a Cebú, en 1521. Según la tradición, la cruz original está encerrada en la de madera que se ve hoy. El techo está pintado con la escena del primer bautismo.",
        "lat": 10.29354,
        "lng": 123.90195,
        "come": "A pie en el centro histórico, junto a la basílica.",
        "tempo": "15 minutos"
      },
      {
        "nome": "Fort San Pedro",
        "testo": "El fuerte triangular construido por los españoles a partir de 1565, considerado el más antiguo de Filipinas, cerca del puerto. Dentro hay un pequeño museo y un jardín, y desde las murallas se ve el paseo marítimo. Se recorre en poco tiempo.",
        "lat": 10.29222,
        "lng": 123.90583,
        "come": "A pie desde la basílica, unos 10 minutos, o en Grab.",
        "quando": "Por la mañana o a última hora de la tarde.",
        "tempo": "45 minutos"
      },
      {
        "nome": "Osmeña Peak",
        "testo": "El punto más alto de la isla de Cebú, poco más de 1.000 metros, sobre Dalaguete: una cresta de colinas puntiagudas y prados desde la que en días despejados se ven las dos costas. La subida desde el último pueblo es corta. Al amanecer suele haber un mar de nubes bajo la cima.",
        "lat": 9.82015,
        "lng": 123.44235,
        "come": "Desde Moalboal en coche o scooter hacia Dalaguete, cruzando las montañas; desde el último pueblo se sube a pie, normalmente con un guía local.",
        "quando": "Al amanecer, antes de las nubes y del calor.",
        "tempo": "medio día con el viaje",
        "consiglio": "Salir de noche requiere un guía o un conductor que conozca la carretera de montaña."
      },
      {
        "nome": "Playa de Lambug",
        "testo": "Una playa larga de arena clara en Badian, al sur de Moalboal, con agua tranquila y pocas construcciones. Es la playa más cómoda después del barranquismo de Kawasan.",
        "lat": 9.85717,
        "lng": 123.36814,
        "come": "En scooter o tricycle desde Moalboal, unos 30 minutos; se combina con Kawasan.",
        "quando": "Por la tarde.",
        "tempo": "2-3 horas"
      },
      {
        "nome": "Cascadas de Mantayupan",
        "testo": "Una de las cascadas más altas de la isla de Cebú, en Barili, al norte de Moalboal, en un desfiladero verde con pozas naturales en la base. Está mucho menos concurrida que Kawasan.",
        "lat": 10.10092,
        "lng": 123.53577,
        "come": "En scooter o coche desde Moalboal, alrededor de una hora; desde la entrada se baja a pie por un sendero con escalones.",
        "quando": "Por la mañana; después de unos días de lluvia el caudal es mayor.",
        "tempo": "2 horas"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Sardinas al amanecer desde la orilla",
          "Barco a Pescador",
          "Atardecer en Panagsama"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: sardinas, tortugas y Pescador",
          "Día 2: barranquismo en Kawasan y White Beach"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: sardinas y tortugas",
          "Día 2: Kawasan",
          "Día 3: inmersiones en Pescador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Panagsama Beach",
        "perChi": "quien quiera estar sobre el arrecife",
        "testo": "Casas de huéspedes y pequeños resorts con el arrecife bajo los restaurantes. La base más cómoda para sardinas e inmersiones; animada por la noche.",
        "fascia": "20-80 €"
      },
      {
        "nome": "Badian",
        "perChi": "quien quiera Kawasan cerca",
        "testo": "Más al sur, cerca de las cascadas. Menos servicios y menos vida nocturna."
      },
      {
        "nome": "White Beach (Basdaku)",
        "perChi": "playa para bañarse",
        "testo": "Al norte de Panagsama, con resorts sobre la arena y el mar más cómodo para nadar. Para las sardinas y los restaurantes hace falta tricycle."
      },
      {
        "nome": "Cebú ciudad",
        "perChi": "vuelos y noche de paso",
        "testo": "Hoteles cerca del aeropuerto de Mactan o en el centro para quien llega tarde o sale temprano. El tráfico hacia Moalboal exige margen."
      }
    ],
    sapori: [
      {
        "nome": "Lechón de Cebú",
        "testo": "Cerdo asado relleno de hierbas, con piel crujiente, la especialidad de la isla. Se vende por raciones en mercados y carinderias."
      },
      {
        "nome": "Puso",
        "testo": "Arroz cocido en una hoja de coco trenzada, en forma de rombo. Se vende junto a las parrillas callejeras."
      },
      {
        "nome": "Danggit",
        "testo": "Pescado seco frito y crujiente, servido en el desayuno con vinagre y arroz al ajo."
      },
      {
        "nome": "Mango seco",
        "testo": "Un recuerdo de Cebú, en paquetes en todas las tiendas."
      }
    ],
    attenzioni: [
      "Oslob y los tiburones ballena: se alimenta a los animales para mantenerlos cerca de la orilla, una práctica criticada por biólogos marinos. Mejor evitarla.",
      "No toques ni persigas a las tortugas en el agua.",
      "Scooter: la causa más común de accidentes entre turistas. Casco y nada de conducir de noche.",
      "Taxis del aeropuerto de Manila (NAIA): las quejas se refieren sobre todo a los taxis blancos que no encienden el taxímetro y piden un precio fijo. Usa Grab desde la zona de recogida señalizada, los taxis amarillos con taxímetro o los taxis de cupón del mostrador oficial, nunca a quien se acerca entre la multitud.",
      "eTravel: dentro de las 72 horas antes de llegar a Filipinas hay que rellenar el formulario gratuito en etravel.gov.ph, que genera el código QR que se pide al embarcar y a la llegada. Las webs que cobran por ello no son oficiales."
    ],
    gite: [
      {
        "nome": "Cascadas de Tumalog",
        "distanza": "unas 2 horas por carretera",
        "come": "En coche o scooter hacia Oslob, en la costa oriental; desde la entrada, lanzadera o bajada a pie.",
        "testo": "Una cascada en forma de velo que cae por una pared de musgo sobre una poza poco profunda. Está en Oslob, pero se puede visitar sin participar en el encuentro con los tiburones ballena alimentados."
      },
      {
        "nome": "Isla de Sumilon",
        "distanza": "unas 2 horas por carretera más 15 minutos en barco",
        "come": "En coche hasta Oslob, luego en barco.",
        "testo": "Una isla frente a Oslob con uno de los primeros santuarios marinos de Filipinas, una lengua de arena y un arrecife para hacer snorkel. Un día largo, para combinar con Tumalog."
      }
    ],
    faq: [
      {
        "domanda": "¿Las sardinas de Moalboal están todo el año?",
        "risposta": "Normalmente sí, a pocas decenas de metros de la orilla de Panagsama. Pero el banco se desplaza a lo largo del arrecife y algunos días es más pequeño o está más lejos."
      },
      {
        "domanda": "¿Hace falta barco para ver las sardinas?",
        "risposta": "No: se entra desde la playa con máscara y aletas. El barco solo hace falta para Pescador Island."
      },
      {
        "domanda": "¿Se puede hacer el barranquismo de Kawasan por libre?",
        "risposta": "No: desde 2023 la Provincia de Cebú solo permite el barranquismo con operadores y guías autorizados, con casco y chaleco. Cuesta unos 2.000 PHP (unos 28 €) por persona más la lanzadera."
      },
      {
        "domanda": "¿Merece la pena nadar con los tiburones ballena en Oslob?",
        "risposta": "No se recomienda: a los animales se les da de comer cada día para mantenerlos cerca de la orilla, una práctica criticada por los biólogos marinos. Tumalog y Sumilon, en la misma zona, se visitan sin eso."
      },
      {
        "domanda": "¿Cómo se va de Moalboal a Bohol?",
        "risposta": "Se vuelve a Cebú ciudad y se toma el ferri rápido OceanJet a Tagbilaran, unas 2 horas. Como alternativa, desde Oslob sale una bangka a Panglao, unos 1.000 PHP (unos 14 €), con una sola salida al día."
      },
      {
        "domanda": "¿Cuántos días hacen falta en Moalboal?",
        "risposta": "Dos días para las sardinas, Pescador y Kawasan; tres para añadir inmersiones u Osmeña Peak al amanecer."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'El islote de Pescador frente a Moalboal, rodeado por el arrecife',
    immagine: '/images/viaggi/filippine-itinerario/giorno-08-cebu-moalboal.jpg',
  },
  {
    slug: 'bohol',
    paeseSlug: 'filippine',
    ordine: 4,
    nome: 'Bohol y Panglao',
    tipologia: ['paesaggio', 'mare', 'natura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Estuve durante el viaje a Filipinas, con base en Panglao: las Chocolate Hills, los tarseros y el río Loboc, y luego Balicasag y Virgin Island en barco.",
    introduzione:
      'Una isla de las Visayas centrales con las colinas cónicas de las Chocolate Hills, los társidos en el bosque y la isla de Panglao, unida por un puente, con las playas y los arrecifes de Balicasag.',
    percheAndarci: 'Por las Chocolate Hills, el társero de Filipinas, el río Loboc y el snorkel en Balicasag.',
    cosaVedere: [
      'Las Chocolate Hills desde el mirador de Carmen',
      'El Philippine Tarsier Sanctuary de Corella',
      'El río Loboc',
      'Las iglesias coloniales de Baclayon y Loboc',
      'Balicasag y Virgin Island en barca desde Panglao',
    ],
    cosaFare: ['Vuelta a la isla en scooter o con conductor', 'Snorkel o inmersiones en Balicasag', 'Salida al amanecer para ver los delfines'],
    doveDormire: 'Panglao, en Alona Beach o en las bahías más tranquilas de Dumaluan y Doljo.',
    comeArrivare:
      "El ferri rápido OceanJet une Cebú y Tagbilaran en unas 2 horas, aproximadamente 880-1.000 PHP (unos 12-14 €) en clase turista en 2026, con tarifas que cambian por el recargo de combustible. Como alternativa se vuela al aeropuerto de Panglao. Desde Oslob sale una bangka a Panglao, unos 1.000 PHP, una vez al día.",
    comeSpostarsi: 'Scooter, tricycle o coche con conductor para el día.',
    periodoMigliore: 'de diciembre a mayo',
    costi:
      'Chocolate Hills: tarifa en la taquilla, porque la subida a 150 PHP para adultos está suspendida; entrada al santuario de los társeros; coche con conductor y barcos a Balicasag a acordar antes, con las tasas de los sitios marinos en efectivo (2026). Presupuesto diario: bajo unos 35-50 € con guesthouse en Alona y carinderias; medio unos 80-130 € con resort en Dumaluan, conductor para el interior y barco; alto más de 200 € con los grandes resorts de Panglao.',
    erroriDaEvitare: [
      'Visitar a los társeros en los falsos «santuarios» junto a la carretera: son animales nocturnos y las visitas los estresan; el centro de Corella es el gestionado por la fundación',
      'Usar flash con los társeros',
    ],
    luoghi: [
      {
        "nome": "Chocolate Hills",
        "testo": "Colinas cónicas de caliza cubiertas de hierba, 1.776 según el decreto que las protegió en 1997, repartidas entre Carmen, Batuan y Sagbayan. De marzo a mayo la hierba seca se vuelve marrón, de ahí el nombre; desde junio vuelve a estar verde. Se ven desde arriba, desde la terraza del complejo de Carmen.",
        "lat": 9.79877,
        "lng": 124.16734,
        "come": "En coche con conductor en el recorrido del interior, Carmen está a unos 55 km de Tagbilaran. Una escalera de 214 escalones lleva al mirador.",
        "quando": "Al final de la tarde, con la luz más suave; a media mañana la terraza está llena.",
        "tempo": "1 hora",
        "costo": "Entrada en efectivo, tarifa en la taquilla: la subida a 150 PHP para adultos fijada por una ordenanza de Carmen está suspendida desde septiembre de 2025, sin nueva fecha (2026)"
      },
      {
        "nome": "Philippine Tarsier Sanctuary de Corella",
        "testo": "Un santuario en el bosque gestionado por la Philippine Tarsier Foundation, donde se ve el tarsero filipino, uno de los primates más pequeños del mundo, un animal nocturno que de día duerme.",
        "lat": 9.69153,
        "lng": 123.95256,
        "come": "En coche con conductor en el mismo recorrido del interior; se camina en silencio por un sendero.",
        "quando": "Por la mañana, cuando los animales duermen.",
        "tempo": "45 minutos",
        "costo": "Entrada: tarifa en la taquilla",
        "consiglio": "Sin flash y en voz baja. Evita los falsos santuarios junto a la carretera con tarseros enjaulados."
      },
      {
        "nome": "Río Loboc e iglesias coloniales",
        "testo": "El río Loboc es famoso por sus cruceros con almuerzo, entre palmeras y agua verde: una parada muy turística, pero relajante después de las colinas. En la misma carretera hay dos iglesias coloniales de los jesuitas: la de Loboc, reconstruida en el siglo XVIII tras el incendio de 1638, y la de Baclayon, de piedra de coral, consagrada en 1727 en el asentamiento cristiano más antiguo de Bohol.",
        "lat": 9.63642,
        "lng": 124.03094,
        "come": "En el recorrido del interior con conductor.",
        "tempo": "1-2 horas"
      },
      {
        "nome": "Balicasag y Virgin Island",
        "testo": "Balicasag es un santuario marino: el arrecife poco profundo termina en paredes que bajan a más de 30 metros, con tortugas y bancos de peces, excelente para snorkel e inmersiones. Virgin Island es un banco de arena que emerge con la marea baja. Muchos tours salen al amanecer para ver delfines, aunque no están garantizados.",
        "lat": 9.51729,
        "lng": 123.68438,
        "come": "En barco desde Panglao, saliendo al amanecer para los delfines.",
        "quando": "Salida al amanecer; Virgin Island con marea baja.",
        "tempo": "medio día",
        "costo": "Barco aproximadamente 1.500-2.500 PHP por barco (unos 21-35 €); aparte, en efectivo, la tasa del santuario, la barquita obligatoria en Balicasag y el desembarco en Virgin Island (indicativo, 2026)"
      },
      {
        "nome": "Alona Beach",
        "testo": "La playa más animada de Panglao, con arena clara, restaurantes en la orilla y centros de buceo. De aquí salen al amanecer los barcos para los delfines, Balicasag y Virgin Island. Por la noche se cena pescado a la parrilla sobre la arena.",
        "lat": 9.54845,
        "lng": 123.77339,
        "come": "En tricycle o scooter desde cualquier punto de Panglao; desde Tagbilaran unos 30-40 minutos.",
        "quando": "A primera hora o al atardecer; a mediodía la playa está llena de barcos.",
        "tempo": "medio día"
      },
      {
        "nome": "Playa de Dumaluan",
        "testo": "Una playa larga y más tranquila que Alona, al este, con arena fina y agua poco profunda. Hay algunos resorts sobre la arena. Es la opción para una tarde de baño sin multitudes.",
        "lat": 9.55943,
        "lng": 123.80771,
        "come": "En tricycle o scooter desde Alona, unos 10 minutos.",
        "quando": "Por la tarde, con marea alta para nadar.",
        "tempo": "medio día"
      },
      {
        "nome": "Cueva de Hinagdanan",
        "testo": "Una cueva caliza en Dauis, en la isla de Panglao, con una poza de agua subterránea iluminada por los agujeros del techo. Se baja por una escalera, de ahí su nombre. Se puede uno bañar.",
        "lat": 9.62528,
        "lng": 123.80111,
        "come": "En tricycle o scooter desde Alona o Tagbilaran, unos 20-30 minutos.",
        "quando": "Por la mañana, antes de los grupos.",
        "tempo": "45 minutos"
      },
      {
        "nome": "Bosque de caobas de Bilar",
        "testo": "Unos dos kilómetros de carretera entre Loboc y Bilar que atraviesan un bosque de caobas plantado para reforestar la zona. Los árboles altos y densos dan sombra a la carretera y muchos paran para hacer alguna foto. Se cruza camino de las Chocolate Hills.",
        "lat": 9.68479,
        "lng": 124.08055,
        "come": "En coche con conductor o scooter, en la ruta del interior.",
        "quando": "De día, en la carretera entre Loboc y Carmen.",
        "tempo": "15-30 minutos",
        "consiglio": "Para solo en el arcén, fuera de la calzada: pasan camiones y autobuses."
      },
      {
        "nome": "Puente colgante de Sipatan",
        "testo": "Dos puentes colgantes de bambú y cuerda sobre el río Loboc, en el interior de la isla, que se cruzan a pie sobre tablas que se balancean. Es una parada breve de la ruta del interior, con puestos de fruta a la salida.",
        "lat": 9.67534,
        "lng": 124.04784,
        "come": "En coche con conductor en la ruta del interior, en la carretera entre Loboc y Bilar.",
        "tempo": "20-30 minutos"
      },
      {
        "nome": "Iglesia de Dauis",
        "testo": "La iglesia de la Asunción en Dauis, justo después del puente hacia Panglao, de piedra de coral y con el techo pintado. Dentro, junto al altar, hay un pozo de agua dulce ligado a una leyenda local. Se visita en poco tiempo yendo o volviendo de Tagbilaran.",
        "lat": 9.6258,
        "lng": 123.86498,
        "come": "En tricycle o scooter desde Alona o Tagbilaran, unos 20 minutos.",
        "tempo": "30 minutos",
        "consiglio": "Hombros y rodillas cubiertos; durante las misas se visita en silencio."
      },
      {
        "nome": "Blood Compact Shrine",
        "testo": "El monumento junto al mar en Bool, Tagbilaran, que recuerda el pacto de sangre de 1565 entre el español Miguel López de Legazpi y el jefe local Datu Sikatuna. Las estatuas de bronce representan la escena. Es una parada de pocos minutos en la carretera hacia Baclayon.",
        "lat": 9.62746,
        "lng": 123.8792,
        "come": "En coche o tricycle desde Tagbilaran, unos 10 minutos, por la carretera de la costa hacia Baclayon.",
        "tempo": "15 minutos"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Recorrido del interior con conductor: Chocolate Hills, tarseros, río Loboc",
          "Iglesia de Baclayon al volver"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: recorrido del interior",
          "Día 2: barco al amanecer para delfines, Balicasag y Virgin Island, tarde en la playa"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Blood Compact, Baclayon, tarseros, río Loboc, el bosque de caobas y las Chocolate Hills por la tarde",
          "Día 2: barco al amanecer para delfines, Balicasag y Virgin Island",
          "Día 3: cueva de Hinagdanan e iglesia de Dauis, luego Dumaluan o Alona"
        ]
      }
    ],
    zone: [
      {
        "nome": "Alona Beach",
        "perChi": "vida nocturna y servicios",
        "testo": "La playa más animada de Panglao, con locales, buceo y hoteles. Llena y ruidosa por la noche.",
        "fascia": "25-40 €"
      },
      {
        "nome": "Dumaluan y Doljo",
        "perChi": "tranquilidad",
        "testo": "Bahías más tranquilas con resorts y casas de huéspedes. Hace falta tricycle o scooter para cenar fuera.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Tagbilaran",
        "perChi": "puerto y noche de paso",
        "testo": "La capital, cerca del puerto de los ferris desde Cebú: hoteles sencillos y centros comerciales, pero sin playa. Solo práctica para una llegada tarde o una salida temprano."
      },
      {
        "nome": "Loboc y el interior",
        "perChi": "naturaleza y silencio",
        "testo": "Pocos alojamientos a lo largo del río Loboc, entre palmeras y bosque, cerca de los tarseros y de las Chocolate Hills. Por la noche hay poco que hacer y para ir al mar hace falta coche."
      }
    ],
    sapori: [
      {
        "nome": "Calamay",
        "testo": "Dulce de arroz glutinoso, leche de coco y azúcar moreno, que se vende en cáscaras de coco en Bohol."
      },
      {
        "nome": "Kinilaw",
        "testo": "Pescado crudo marinado en vinagre, en los locales de Panglao."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "La pesca del día en Alona Beach, por la noche."
      },
      {
        "nome": "Ube",
        "testo": "El ñame morado de los postres filipinos, en helados y tartas en las cafeterías de la isla."
      }
    ],
    attenzioni: [
      "Tarseros: evita los «santuarios» junto a la carretera con animales enjaulados. El centro de Corella lo gestiona una fundación.",
      "Nada de flash con los tarseros: son animales nocturnos y las visitas los estresan.",
      "Scooter: los turistas se lesionan sobre todo en moto. Casco y nada de conducir de noche.",
      "Ferri Cebú-Tagbilaran: en 2026 OceanJet cambió varias veces las tarifas por el recargo de combustible (clase turista entre 880 y 1.000 PHP; la travesía dura unas 2 horas con mar en calma) y en abril canceló algunas salidas. Comprueba precio y horarios antes."
    ],
    gite: [
      {
        "nome": "Isla de Pamilacan",
        "distanza": "alrededor de 1 hora en barco",
        "come": "En barco desde Alona o Baclayon, a menudo en la misma salida de los delfines.",
        "testo": "Una isla al sureste de Panglao, antes pueblo de cazadores de ballenas y mantas, hoy con un santuario marino y un arrecife para hacer snorkel. En las aguas de alrededor se ven a menudo delfines."
      },
      {
        "nome": "Anda",
        "distanza": "unas 2,5-3 horas por carretera",
        "come": "En coche con conductor o scooter por la costa oriental.",
        "testo": "La punta oriental de Bohol, con playas de arena blanca, pozas de agua dulce dentro de las cuevas y muy poca gente. Se va en el día o para una noche de calma."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Bohol?",
        "risposta": "Dos días bastan para la ruta del interior y el barco a Balicasag. Con tres se añaden Panglao, Hinagdanan y una tarde de playa."
      },
      {
        "domanda": "¿Las Chocolate Hills son siempre marrones?",
        "risposta": "No: la hierba se vuelve marrón con la estación seca, entre marzo y mayo. Desde junio las colinas vuelven a ser verdes."
      },
      {
        "domanda": "¿Dónde se ven los tarseros de forma respetuosa?",
        "risposta": "En el Philippine Tarsier Sanctuary de Corella, gestionado por la Philippine Tarsier Foundation. Hay que evitar los «santuarios» de carretera con animales enjaulados, y nunca se usa el flash."
      },
      {
        "domanda": "¿Los delfines de Panglao están garantizados?",
        "risposta": "No: dependen del mar y de la suerte. Los barcos salen de Alona antes de las seis y no deben perseguir ni rodear a los animales."
      },
      {
        "domanda": "¿Cómo se llega a Bohol desde Cebú?",
        "risposta": "En ferri rápido OceanJet hasta Tagbilaran, unas 2 horas, o en avión a Panglao. Precios y horarios de los ferris cambiaron a menudo en 2026: conviene comprobarlos antes."
      },
      {
        "domanda": "¿Conviene dormir en Panglao o en Tagbilaran?",
        "risposta": "En Panglao, en Alona o en las bahías de Dumaluan y Doljo, por las playas y los barcos. Tagbilaran sirve solo para una noche cerca del puerto."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'Las Chocolate Hills de Bohol, colinas cónicas cubiertas de hierba',
    immagine: '/images/viaggi/filippine-itinerario/giorno-11-bohol.jpg',
  },
  {
    slug: 'siargao',
    paeseSlug: 'filippine',
    ordine: 5,
    nome: 'Siargao',
    tipologia: ['surf', 'mare', 'isole'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Siargao fue la última etapa de mi viaje a Filipinas, en General Luna: el island hopping entre Naked, Daku y Guyam, la laguna de Sugba, Magpupungko y el surf.",
    introduzione:
      'Una isla con forma de lágrima asomada al océano Pacífico, frente al noreste de Mindanao: palmerales, lagunas, islotes de arena y la ola de Cloud 9.',
    percheAndarci: 'Por el surf, el island hopping entre Naked, Daku y Guyam, la laguna de Sugba y el ambiente relajado de isla de surfistas.',
    cosaVedere: [
      'La pasarela de Cloud 9 en General Luna',
      'Las islas de Naked, Daku y Guyam',
      'La laguna de Sugba en Del Carmen',
      'Las piscinas de roca de Magpupungko con la marea baja',
      'Los palmerales de cocos del interior, en scooter',
    ],
    cosaFare: ['Clases de surf para principiantes', 'Vuelta a la isla en scooter', 'Paddle board en la laguna de Sugba'],
    doveDormire: 'General Luna, a lo largo de la Tourism Road y hacia Cloud 9; Pacifico para quien busca un pueblo más tranquilo.',
    doveMangiare: 'Locales internacionales en General Luna, pescado a la parrilla y carinderias fuera del centro.',
    comeArrivare:
      "Vuelos directos a Sayak (en Del Carmen) desde Cebú, Clark y Davao; desde Manila ya no hay vuelos directos y se pasa por Clark o Cebú. Desde Cebú el vuelo dura alrededor de una hora. Del aeropuerto a General Luna hay unos 45 minutos en furgoneta compartida (unos 300 PHP, unos 4 €, 2026) o con traslado privado.",
    comeSpostarsi: 'Scooter de alquiler o habal-habal (moto-taxi); furgonetas compartidas para el aeropuerto.',
    periodoMigliore: 'de abril a agosto para las salidas en barco; surf de septiembre a noviembre; las lluvias más fuertes de noviembre a enero',
    costi:
      'Island hopping a Naked, Daku y Guyam unos 1.700-2.200 PHP por persona en tours compartidos; clase de surf básica unos 600 PHP la hora; scooter 350-500 PHP al día (precios orientativos, 2026). Presupuesto diario: bajo unos 35-50 € con albergue en General Luna, scooter y carinderias; medio unos 80-120 € con bungalow en la Tourism Road, tours y clases de surf; alto más de 250 € con resort hacia Cloud 9.',
    erroriDaEvitare: [
      'Conducir el scooter sin experiencia, o de noche: los accidentes son el primer problema de los turistas en la isla',
      'Ir a Magpupungko con la marea alta, cuando las piscinas no se ven',
    ],
    luoghi: [
      {
        "nome": "Cloud 9",
        "testo": "La ola que hizo famosa a Siargao, con una pasarela de madera y una torre sobre el arrecife de General Luna. Es el punto de referencia de los surfistas. Desde abril de 2026 la torre está en reconstrucción: comprueba si se puede acceder.",
        "lat": 9.81333,
        "lng": 126.1644,
        "come": "A pocos minutos de General Luna, en scooter o a pie por la Tourism Road.",
        "quando": "Surf: de septiembre a noviembre, olas grandes para expertos. Por la mañana para ver las olas.",
        "tempo": "1 hora",
        "costo": "Clase de surf básica unos 600 PHP la hora (unos 8 €); las clases privadas cuestan más (indicativo, 2026)"
      },
      {
        "nome": "Naked, Daku y Guyam",
        "testo": "Tres islas frente a General Luna: Naked Island, un banco de arena sin un árbol; Daku, donde se suele almorzar pescado a la parrilla; Guyam, un islote redondo con palmeras.",
        "lat": 9.73486,
        "lng": 126.12593,
        "come": "Tour de island hopping en barco desde General Luna.",
        "quando": "Por la mañana, con mar en calma; el mejor periodo para las salidas en barco es de abril a agosto.",
        "tempo": "medio día",
        "costo": "Tour compartido unos 1.700-2.200 PHP por persona (unos 24-31 €); pregunta antes si incluye almuerzo, tasas de las islas y traslados (indicativo, 2026)"
      },
      {
        "nome": "Laguna de Sugba",
        "testo": "Una laguna de agua verde azulada entre manglares y rocas de caliza, en Del Carmen. Solo se llega en barco, por los canales del manglar. Se hace paddle board, se nada o se salta al agua desde la plataforma de madera del centro.",
        "lat": 9.90631,
        "lng": 125.90029,
        "costo": "Barco aproximadamente 1.600-2.500 PHP por barco (unos 23-35 €), más la entrada (indicativo, 2026)",
        "come": "En barco desde Del Carmen; desde General Luna lleva casi todo el día. A veces el acceso cierra por mantenimiento: compruébalo antes.",
        "tempo": "medio día"
      },
      {
        "nome": "Piscinas de Magpupungko",
        "testo": "Pozas naturales de agua de mar entre las rocas de Pilar, en la costa este, que aparecen con la marea baja. Con marea alta las olas las cubren y casi no se ve nada.",
        "lat": 9.87573,
        "lng": 126.1202,
        "come": "En scooter o con conductor desde el pueblo, en la costa este.",
        "quando": "Con marea baja: con marea alta no se ven las piscinas.",
        "tempo": "2-3 horas"
      },
      {
        "nome": "Carreteras entre palmerales",
        "testo": "Las carreteras del interior cruzan palmerales de cocos hasta donde alcanza la vista, con miradores por el camino: es el paisaje más fotografiado de la isla. Conviene pasar a primera hora o hacia el atardecer, con menos calor. Para las fotos, apártate del todo de la calzada y nunca en una curva.",
        "lat": 9.81654,
        "lng": 126.05479,
        "come": "En scooter desde General Luna.",
        "tempo": "1 hora"
      },
      {
        "nome": "Playa de Pacifico",
        "testo": "Una playa larga en la costa nororiental, en San Isidro, con un pueblo tranquilo y olas de arrecife en el Pacífico. Con las condiciones adecuadas hay olas también para quien aprende. Es mucho más tranquila que General Luna.",
        "lat": 9.94375,
        "lng": 126.10332,
        "come": "En scooter o habal-habal desde General Luna, alrededor de una hora por el interior.",
        "quando": "Por la mañana, antes del viento.",
        "tempo": "medio día o una noche"
      },
      {
        "nome": "Río Maasin",
        "testo": "Un río verde entre palmeras en el pueblo de Maasin, en la carretera entre General Luna y Dapa. Desde una palmera inclinada sobre el agua uno se lanza con una cuerda. También se puede alquilar una barquita para remontar el río.",
        "lat": 9.81993,
        "lng": 126.05714,
        "come": "En scooter desde General Luna, unos 15-20 minutos.",
        "quando": "Por la mañana, antes de que lleguen los grupos.",
        "tempo": "1 hora"
      },
      {
        "nome": "Tayangban Cave Pool",
        "testo": "Una cueva atravesada por el agua en Pilar, en la costa oriental, que se recorre caminando y nadando con un guía local hasta una poza entre las rocas. Se está fresco incluso en las horas de calor. Se combina con Magpupungko, que está cerca.",
        "lat": 9.8613,
        "lng": 126.06305,
        "come": "En scooter o con conductor desde General Luna, unos 45 minutos; el guía se contrata en la entrada.",
        "quando": "A mediodía, mientras se espera la marea baja en Magpupungko.",
        "tempo": "1 hora"
      },
      {
        "nome": "Playa de Alegria",
        "testo": "Una playa larga de arena clara en Burgos, en el norte de la isla, casi siempre vacía. Hay muy pocos servicios y algunas palmeras para la sombra. Es la meta de la vuelta en scooter por el norte.",
        "lat": 10.05335,
        "lng": 126.07122,
        "come": "En scooter desde General Luna, alrededor de una hora y media.",
        "quando": "Con tiempo seco, saliendo temprano.",
        "tempo": "medio día",
        "consiglio": "Lleva agua y llena el depósito antes: en la carretera del norte hay pocas gasolineras."
      },
      {
        "nome": "Jacking Horse",
        "testo": "El spot para principiantes de General Luna, a poca distancia de Cloud 9, con olas más suaves sobre fondo de arrecife. Las escuelas de surf traen aquí a sus alumnos cuando las condiciones lo permiten.",
        "lat": 9.81469,
        "lng": 126.16336,
        "come": "A pie o en scooter desde General Luna, por la Tourism Road.",
        "quando": "Con la marea adecuada, que las escuelas comprueban cada día.",
        "tempo": "1-2 horas",
        "costo": "Clase con instructor y tabla aproximadamente 500-1.000 PHP la hora, unos 7-14 € (indicativo, 2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Island hopping a Naked, Daku y Guyam",
          "Atardecer en Cloud 9"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: island hopping",
          "Día 2: clase de surf por la mañana y luego los palmerales del interior en scooter"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: island hopping",
          "Día 2: laguna de Sugba",
          "Día 3: Magpupungko con marea baja y vuelta a la isla"
        ]
      }
    ],
    zone: [
      {
        "nome": "General Luna",
        "perChi": "surf y vida nocturna",
        "testo": "El centro de los surfistas, con locales, escuelas y hoteles a lo largo de la Tourism Road. Animado por la noche.",
        "fascia": "20-40 €"
      },
      {
        "nome": "Pacifico",
        "perChi": "pueblo tranquilo",
        "testo": "Más al norte, un pueblo más tranquilo, con olas y pocos servicios."
      },
      {
        "nome": "Tourism Road",
        "perChi": "jardín y tranquilidad",
        "testo": "La carretera que va de General Luna hacia Cloud 9, con bungalows entre la vegetación y resorts junto al mar. Los locales y las escuelas de surf quedan a pie, pero las noches son más tranquilas.",
        "fascia": "50-100 €"
      },
      {
        "nome": "Hacia Cloud 9",
        "perChi": "resorts junto al mar",
        "testo": "Los resorts más cuidados de la costa, cerca de la ola y de la pasarela. Precios altos y servicios completos."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "En el almuerzo de los tours de island hopping, en la playa de Daku."
      },
      {
        "nome": "Carinderia",
        "testo": "Comedores locales fuera del centro: arroz, adobo y pescado por pocos pesos."
      },
      {
        "nome": "Coco",
        "testo": "Agua de coco fresca junto a las carreteras, con palmeras por todas partes."
      },
      {
        "nome": "Locales de General Luna",
        "testo": "Cocina internacional y smoothie bowls a lo largo de la Tourism Road."
      }
    ],
    attenzioni: [
      "Scooter: la causa más común de accidentes entre turistas en Siargao. Casco, nada de conducir de noche, seguro que cubra la moto.",
      "Magpupungko con marea alta: no se ven las piscinas. Consulta las mareas.",
      "Temporada: las lluvias más fuertes caen de noviembre a enero; el mejor periodo para las salidas en barco es de abril a agosto.",
      "Efectivo: retira antes de los días en barco o de ir al norte y lleva billetes pequeños; con tarjeta extranjera la comisión local es de unos 250 PHP por retirada (BDO), más la de tu banco."
    ],
    gite: [
      {
        "nome": "Sohoton Cove y Bucas Grande",
        "distanza": "unas 1,5-2 horas en barco",
        "come": "Con un tour organizado desde General Luna, normalmente de día completo.",
        "testo": "Una bahía cerrada por paredes calizas en la isla de Bucas Grande, a la que se entra por una cueva con la marea baja, y con lagunas interiores. Un día largo, solo con el mar en calma."
      },
      {
        "nome": "Manglares de Del Carmen",
        "distanza": "unos 45 minutos por carretera",
        "come": "En scooter o furgoneta hasta el puerto de Del Carmen, luego en barco o kayak.",
        "testo": "Uno de los bosques de manglar más extensos de Mindanao, con canales que se recorren en barco o en kayak. Se atraviesa también camino de la laguna de Sugba."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuándo es la temporada de surf en Siargao?",
        "risposta": "Las olas más grandes de Cloud 9 llegan de septiembre a noviembre, solo para surfistas expertos. Quien aprende encuentra olas para principiantes casi todo el año en Jacking Horse y otros spots."
      },
      {
        "domanda": "¿Se puede aprender surf desde cero?",
        "risposta": "Sí: las escuelas de General Luna dan clases con instructor y tabla, aproximadamente 500-1.000 PHP la hora (unos 7-14 €). Cloud 9 y las olas de arrecife son, en cambio, para expertos."
      },
      {
        "domanda": "¿Hace falta scooter en Siargao?",
        "risposta": "Ayuda mucho, porque las distancias son largas. Quien no tiene experiencia usa los habal-habal o un conductor: los accidentes de moto son el primer problema de los turistas en la isla."
      },
      {
        "domanda": "¿Cuántos días hacen falta en Siargao?",
        "risposta": "Tres o cuatro días: island hopping, laguna de Sugba, Magpupungko con marea baja y una jornada de surf o de scooter."
      },
      {
        "domanda": "¿Cómo se llega a Siargao?",
        "risposta": "En avión a Sayak, en Del Carmen, desde Cebú, Clark o Davao; desde Manila se hace escala. Del aeropuerto a General Luna hay unos 45 minutos en furgoneta."
      },
      {
        "domanda": "¿Cuándo es mejor ir para las salidas en barco?",
        "risposta": "De abril a agosto el mar está más tranquilo. Las lluvias más fuertes caen de noviembre a enero."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'La pasarela y la torre de madera sobre el arrecife de Cloud 9, el spot de surf de Siargao',
    immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg',
  },
]
