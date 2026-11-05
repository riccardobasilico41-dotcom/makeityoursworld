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
    introduzione:
      'En el norte de Palawan, una bahía cerrada por acantilados de caliza negra y el archipiélago de Bacuit, con lagunas interiores, playas y cuevas a las que solo se llega en barca.',
    percheAndarci: 'Por las lagunas de Miniloc, las islas de Bacuit y playas como Nacpan, entre los paisajes marinos más famosos de Asia.',
    cosaVedere: [
      'La Big Lagoon en Miniloc (Tour A) y la Small Lagoon (Tour D)',
      'Hidden Beach, Secret Beach y Matinloc Shrine (Tour C)',
      'La playa de Nacpan y Twin Beach',
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
      'Vuelos de Cebgo (antes AirSwift) al aeropuerto de Lio desde Clark, Cebú, Coron, Caticlan y Bohol: desde el 29 de marzo de 2026 ya no salen de Manila. Si no, vuelo a Puerto Princesa y furgoneta compartida de 5-6 horas (unos 720-790 PHP, 2026); fast craft desde Coron (3,5-4 horas).',
    comeSpostarsi: 'Tricycles y scooters de alquiler; barcas de los tours desde el puerto y desde Corong-Corong.',
    periodoMigliore: 'de enero a abril; entre julio y octubre muchos tours se cancelan por el estado del mar',
    costi:
      'Tasa ambiental (ETDF) 400 PHP válida 10 días; tour de island hopping 1.200-1.800 PHP por persona con almuerzo, más las entradas de los sitios (Big Lagoon y Small Lagoon 200 PHP cada una, con aforo limitado); kayak doble 300-400 PHP aparte (precios orientativos, 2026).',
    erroriDaEvitare: [
      'Reservar el Tour A a última hora en temporada alta: las entradas a la Big Lagoon son por franjas horarias limitadas',
      'Llegar sin efectivo: hay pocos cajeros y a menudo están vacíos',
    ],
    luoghi: [
      {
        "nome": "Tour A: Big Lagoon, Secret Lagoon y Shimizu",
        "testo": "El recorrido por las lagunas de la isla de Miniloc. La Big Lagoon se cruza en kayak entre paredes de caliza y a la Secret Lagoon se llega por una abertura estrecha en la roca. El almuerzo es en la playa de Shimizu o de 7 Commando. Desde 2018 la Small Lagoon forma parte del Tour D: las dos lagunas no se pueden visitar el mismo día.",
        "come": "En bangka desde el puerto o desde Corong-Corong con un operador autorizado. El tour es organizado: barco, guía, kayaks y almuerzo.",
        "quando": "Salida por la mañana. La Big Lagoon tiene franjas horarias de 7 a 16 h, con un máximo de 60 personas y 30 kayaks por franja, que reservan las agencias: en temporada alta conviene cerrar el tour con un día de antelación. De julio a octubre muchas salidas se cancelan por el mar.",
        "tempo": "un día",
        "costo": "Tour 1.200-1.500 PHP por persona con almuerzo; entrada a la Big Lagoon 200 PHP y kayak doble 300-400 PHP aparte; tasa ETDF 400 PHP si no está pagada (indicativo, 2026)",
        "consiglio": "Lleva escarpines, máscara propia y bolsa estanca. Conviene ir a los kayaks pronto, antes que los demás barcos."
      },
      {
        "nome": "Tour C: Hidden Beach, Secret Beach y Matinloc",
        "testo": "El tour de las playas escondidas: a Hidden Beach y Secret Beach se llega nadando o caminando en agua poco profunda entre paredes de roca. Después, el santuario de Matinloc y snorkel en los arrecifes alrededor de Helicopter Island.",
        "come": "En bangka con operador autorizado; almuerzo a bordo o en una playa.",
        "quando": "Por la mañana. Con marea baja la entrada a Secret Beach es más fácil.",
        "tempo": "un día",
        "costo": "Tour aproximadamente 1.400-1.800 PHP por persona con almuerzo (indicativo, 2026)",
        "consiglio": "El Tour D lleva a la Small Lagoon y a Cadlao, el B a Pinagbuyutan y Snake Island: suelen estar menos llenos, así que elígelos si el A y el C están completos."
      },
      {
        "nome": "Playa de Nacpan",
        "testo": "Cuatro kilómetros de arena clara y palmeras en la costa oeste, unida a Twin Beach por un sendero. Es más tranquila que las playas del pueblo y buena para el atardecer.",
        "come": "En tricycle o scooter desde El Nido, unos 40 minutos por una carretera en parte sin asfaltar.",
        "quando": "Por la tarde hasta el atardecer.",
        "tempo": "medio día",
        "costo": "Playa gratuita; tricycle ida y vuelta con espera 700-1.500 PHP por vehículo, hasta unas cuatro personas, a acordar antes (indicativo, 2026)",
        "consiglio": "Pide al tricycle que espere, porque a la vuelta es difícil encontrar uno libre."
      },
      {
        "nome": "Taraw Cliff y Canopy Walk",
        "testo": "La pared de caliza sobre el pueblo, con la vista más amplia de El Nido y la bahía de Bacuit. La subida libre a la cima ha tenido accidentes y la DENR, el organismo de medio ambiente, no ha autorizado guías ni operadores. La alternativa oficial es la Canopy Walk (El Nido Via Ferrata): pasarelas y puentes colgantes sobre las rocas, con arnés y guía.",
        "come": "A pie desde la entrada de la Canopy Walk en el pueblo; se sube en grupo con el arnés que te dan.",
        "quando": "A primera hora o al final de la tarde, por el calor.",
        "tempo": "1-2 horas",
        "costo": "Canopy Walk unos 400-450 PHP (indicativo, 2026)",
        "consiglio": "Calzado con buen agarre: la roca es afilada y resbala cuando está mojada. Mejor rechazar a quien ofrece la subida a la cima por su cuenta."
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
        "testo": "El centro con hostales, casas de huéspedes y locales, con los tours saliendo a pie. Es ruidoso por la noche y la playa es pequeña."
      },
      {
        "nome": "Corong-Corong",
        "perChi": "atardeceres y tranquilidad",
        "testo": "A pocos minutos en tricycle del pueblo, con hoteles de gama media frente al mar y atardeceres. Menos restaurantes."
      },
      {
        "nome": "Nacpan y Lio",
        "perChi": "playas tranquilas",
        "testo": "Más lejos del pueblo, con playas amplias y poca vida nocturna. Hace falta tricycle o scooter para moverse."
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
      "Efectivo: los cajeros de El Nido son pocos y a menudo están vacíos. Retira en Manila o Cebú antes de salir.",
      "El precio del tour no siempre incluye la tasa ambiental (ETDF, 400 PHP, válida 10 días) ni las entradas: pregunta qué incluye antes de pagar.",
      "Mar agitado: de julio a octubre se suspenden las salidas en barco. Deja un día de margen antes del vuelo.",
      "Subir solo a barcos con chalecos salvavidas a bordo y renunciar cuando la guardia costera suspende las salidas."
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
    comeArrivare: 'Vuelos a Busuanga (aeropuerto Francisco B. Reyes, a 30-40 minutos de Coron town) desde Manila, Clark y Cebú, y vuelos de Cebgo desde El Nido; fast craft desde El Nido (3,5-4 horas).',
    comeSpostarsi: 'Tricycles en el pueblo, barcas de los tours desde el puerto.',
    periodoMigliore: 'de diciembre a mayo',
    costi:
      'Tour de island hopping aproximadamente 1.500-2.500 PHP por persona con almuerzo, más las entradas de cada sitio, solo en efectivo (Kayangan unos 300 PHP, Barracuda 200-250, Twin Lagoon 200); dos inmersiones en los pecios aproximadamente 4.000-5.500 PHP (precios orientativos, 2026).',
    erroriDaEvitare: [
      'Ir al Kayangan a media mañana, cuando llegan todas las barcas a la vez',
      'Bucear en los pecios interiores sin titulación y formación adecuadas',
    ],
    luoghi: [
      {
        "nome": "Lago Kayangan",
        "testo": "Un lago de agua dulce y salobre encerrado entre rocas calizas, de los más limpios de Filipinas. Desde el mirador de la escalera de entrada se ve la bahía: es la imagen símbolo de Coron.",
        "come": "En barco en los tours de island hopping; desde el embarcadero una subida de más de 150 escalones empinados hasta el mirador. En algunas zonas se nada con chaleco, por reglamento.",
        "quando": "A la apertura o al final del día: a media mañana llegan todos los barcos a la vez.",
        "tempo": "1 hora",
        "costo": "Entrada unos 300 PHP, en efectivo y aparte del tour (indicativo, 2026)",
        "consiglio": "Pide al operador que invierta el orden de las paradas para llegar a Kayangan antes de la multitud."
      },
      {
        "nome": "Lago Barracuda",
        "testo": "Una capa de agua dulce sobre una de agua salada: hacia los 14 metros de profundidad el agua pasa de golpe de unos 28 a unos 38 grados. Se nada entre paredes de roca negra.",
        "come": "En barco en los tours; desde el embarcadero se bajan unos escalones hasta el agua.",
        "quando": "Por la mañana, con menos barcos.",
        "tempo": "45 minutos",
        "costo": "Entrada unos 200-250 PHP, aparte (indicativo, 2026)"
      },
      {
        "nome": "Twin Lagoon",
        "testo": "Dos lagunas separadas por una pared de roca. Se pasa de una a otra nadando bajo la roca, o a pie con marea baja; el agua es más fría arriba y más cálida abajo.",
        "come": "En barco en los tours de island hopping.",
        "quando": "Con marea baja el paso es más sencillo.",
        "tempo": "45 minutos",
        "costo": "Entrada unos 200 PHP, aparte (indicativo, 2026)"
      },
      {
        "nome": "Pecios japoneses de la bahía de Coron",
        "testo": "Una decena de barcos japoneses hundidos por aviones de portaaviones estadounidenses el 24 de septiembre de 1944, hoy cubiertos de coral. Los más conocidos son el Okikawa Maru, el Akitsushima y el Irako. El Skeleton Wreck está a pocos metros de profundidad y también se ve haciendo snorkel.",
        "come": "Con los centros de buceo de Coron, que organizan salidas de dos inmersiones. Para los pecios profundos hace falta al menos el título Advanced; las penetraciones solo con la formación adecuada.",
        "tempo": "un día",
        "costo": "Dos inmersiones aproximadamente 4.000-5.500 PHP con equipo (indicativo, 2026)"
      },
      {
        "nome": "Monte Tapyas y aguas termales de Maquinit",
        "testo": "Más de 700 escalones sobre la ciudad para el mirador de la bahía al atardecer. Por la noche, las aguas termales de Maquinit, en una poza de roca junto al mar.",
        "come": "Tapyas se sube a pie desde la ciudad; Maquinit en tricycle.",
        "quando": "Tapyas al atardecer, Maquinit después de cenar o al atardecer.",
        "tempo": "2-3 horas en total",
        "costo": "Tapyas gratis; Maquinit unos 150-200 PHP, más el tricycle de ida y vuelta 250-300 PHP (indicativo, 2026)"
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
        "testo": "Hoteles y casas de huéspedes cerca del puerto, restaurantes y centros de buceo. Caótica y ruidosa, pero cómoda para los tours."
      },
      {
        "nome": "Islas privadas",
        "perChi": "quien quiera gastar",
        "testo": "Resorts en islas cercanas, con traslado en barco. Aislados y tranquilos, pero todo cuesta más."
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
      'Inmersiones en el muro de Pescador',
    ],
    doveDormire: 'Panagsama Beach en Moalboal, con guesthouses y resorts pequeños directamente sobre el arrecife.',
    comeArrivare: 'Aeropuerto de Mactan-Cebú, luego 3 horas en coche privado o 4 en autobús Ceres desde la South Bus Terminal.',
    comeSpostarsi: 'Tricycles y scooters; barcas a Pescador.',
    periodoMigliore: 'de diciembre a mayo',
    costi: 'Barranquismo en Kawasan aproximadamente 2.000-3.000 PHP con guía; snorkel desde la orilla gratuito o con una pequeña tasa; inmersión 1.500-2.000 PHP (precios orientativos, 2026).',
    erroriDaEvitare: [
      'Ir a Oslob a nadar con tiburones ballena: a los animales se les da de comer para mantenerlos en el lugar, y los biólogos marinos critican esta práctica',
      'Tocar a las tortugas o perseguirlas en el agua',
    ],
    luoghi: [
      {
        "nome": "Banco de sardinas de Panagsama Beach",
        "testo": "Millones de sardinas que se mueven como una sola nube a pocos metros de la orilla. Se nada entre ellas con máscara y aletas, sin barco. A lo largo del mismo arrecife se ven a menudo tortugas marinas.",
        "come": "Se entra desde la orilla o desde las escaleras de los restaurantes de Panagsama Beach.",
        "quando": "A primera hora, con la mejor luz y menos gente.",
        "tempo": "1-2 horas",
        "costo": "Gratis desde la orilla o con una pequeña tasa del local (indicativo, 2026)",
        "consiglio": "No toques ni persigas a las tortugas, y no patalees: el banco se dispersa."
      },
      {
        "nome": "Pescador Island",
        "testo": "Un islote frente a Panagsama con una pared de coral que cae al azul. Quien hace snorkel se queda sobre la parte alta del arrecife, mientras los buceadores siguen la pared. Con el mar en calma el agua es muy clara: es la segunda salida clásica de Moalboal después de las sardinas.",
        "come": "En barco desde Panagsama Beach.",
        "quando": "Por la tarde o por la mañana, con mar en calma.",
        "tempo": "medio día",
        "costo": "Barco aproximadamente 1.500-2.500 PHP (indicativo, 2026)"
      },
      {
        "nome": "Barranquismo en las cascadas de Kawasan",
        "testo": "Se desciende el río Matutinao durante unas horas, con saltos desde rocas de 3 a 10 metros (los altos son opcionales), toboganes naturales y tramos a nado, hasta las cascadas turquesa.",
        "come": "De Moalboal a Badian en unos 45 minutos. Se va con guía, con casco y chaleco.",
        "quando": "Salir pronto para evitar la multitud.",
        "tempo": "medio día o un poco más",
        "costo": "Barranquismo con guía, casco y chaleco aproximadamente 2.000-3.000 PHP; algunos paquetes no incluyen entradas ni transporte (indicativo, 2026)",
        "consiglio": "Zapatos cerrados de agua y nada de objetos de valor."
      },
      {
        "nome": "White Beach",
        "testo": "La playa de arena clara de Basdaku, al norte de Panagsama, más ancha y más cómoda para bañarse. Hay puestos y algunos restaurantes sobre la arena. Es el sitio para una tarde libre tras el barranquismo.",
        "come": "En tricycle o scooter desde Panagsama.",
        "tempo": "una tarde"
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
          "Día 3: inmersiones en la pared de Pescador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Panagsama Beach",
        "perChi": "quien quiera estar sobre el arrecife",
        "testo": "Casas de huéspedes y pequeños resorts con el arrecife bajo los restaurantes. La base más cómoda para sardinas e inmersiones; animada por la noche."
      },
      {
        "nome": "Badian",
        "perChi": "quien quiera Kawasan cerca",
        "testo": "Más al sur, cerca de las cascadas. Menos servicios y menos vida nocturna."
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
    comeArrivare: 'Ferri rápido OceanJet de Cebú a Tagbilaran (2 horas), o vuelo al aeropuerto de Panglao.',
    comeSpostarsi: 'Scooter, tricycle o coche con conductor para el día.',
    periodoMigliore: 'de diciembre a mayo',
    costi:
      'Chocolate Hills 100-150 PHP y santuario de los társeros alrededor de 80-150 PHP; coche con conductor para la vuelta a la isla 2.500-3.500 PHP; salida a Balicasag 1.500-2.500 PHP por barca (precios orientativos, 2026).',
    erroriDaEvitare: [
      'Visitar a los társeros en los falsos «santuarios» junto a la carretera: son animales nocturnos y las visitas los estresan; el centro de Corella es el gestionado por la fundación',
      'Usar flash con los társeros',
    ],
    luoghi: [
      {
        "nome": "Chocolate Hills",
        "testo": "Colinas cónicas de caliza cubiertas de hierba, 1.776 según el decreto que las protegió en 1997, repartidas entre Carmen, Batuan y Sagbayan. En la estación seca la hierba se vuelve marrón, de ahí el nombre. Se ven desde arriba, desde la terraza del complejo de Carmen.",
        "come": "En coche con conductor en el recorrido del interior, a unas 1,5 horas de Panglao; Carmen está a unos 55 km de Tagbilaran. Una escalera de 214 escalones lleva al mirador.",
        "quando": "Al final de la tarde, con la luz más suave; a media mañana la terraza está llena.",
        "tempo": "1 hora",
        "costo": "Entrada 100-150 PHP en efectivo: la subida a 150 PHP prevista por el municipio de Carmen para octubre de 2025 está suspendida (indicativo, 2026)"
      },
      {
        "nome": "Philippine Tarsier Sanctuary de Corella",
        "testo": "Un santuario en el bosque gestionado por una fundación, donde se ve el tarsero filipino, uno de los primates más pequeños del mundo, un animal nocturno que de día duerme.",
        "come": "En coche con conductor en el mismo recorrido del interior; se camina en silencio por un sendero.",
        "quando": "Por la mañana, cuando los animales duermen.",
        "tempo": "45 minutos",
        "costo": "Entrada modesta, 80-150 PHP según la fuente: compruébalo allí (indicativo, 2026)",
        "consiglio": "Sin flash y en voz baja. Evita los falsos santuarios junto a la carretera con tarseros enjaulados."
      },
      {
        "nome": "Río Loboc e iglesias coloniales",
        "testo": "El río Loboc se remonta en plataformas flotantes con almuerzo buffet, entre palmeras y agua verde. Es una parada muy turística, pero relajante después de las colinas. En la misma carretera están las iglesias coloniales de piedra de Loboc y Baclayon, de las más antiguas de la isla.",
        "come": "En el recorrido del interior con conductor.",
        "tempo": "1-2 horas"
      },
      {
        "nome": "Balicasag y Virgin Island",
        "testo": "Balicasag es un pequeño santuario marino con una pared de coral y muchas tortugas, excelente para snorkel e inmersiones. Virgin Island es un banco de arena que emerge en medio del mar con la marea baja. En el canal al amanecer se ven a menudo delfines.",
        "come": "En barco desde Panglao, saliendo al amanecer para los delfines.",
        "quando": "Salida al amanecer; Virgin Island con marea baja.",
        "tempo": "medio día",
        "costo": "Barco aproximadamente 1.500-2.500 PHP, más tasas de los sitios; dos inmersiones en Balicasag 3.000-4.000 PHP (indicativo, 2026)"
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
      }
    ],
    zone: [
      {
        "nome": "Alona Beach",
        "perChi": "vida nocturna y servicios",
        "testo": "La playa más animada de Panglao, con locales, buceo y hoteles. Llena y ruidosa por la noche."
      },
      {
        "nome": "Dumaluan y Doljo",
        "perChi": "tranquilidad",
        "testo": "Bahías más tranquilas con resorts y casas de huéspedes. Hace falta tricycle o scooter para cenar fuera."
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
      "Ferri Cebú-Tagbilaran: en 2026 OceanJet cambió varias veces las tarifas por el recargo de combustible (clase turista entre 880 y 1.000 PHP) y en abril canceló algunas salidas. Comprueba precio y horarios antes."
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
    introduzione:
      'Una isla con forma de lágrima asomada al océano Pacífico, frente al noreste de Mindanao: palmerales, lagunas, islotes de arena y la ola de Cloud 9.',
    percheAndarci: 'Por el surf, el island hopping entre Naked, Daku y Guyam, la laguna de Sugba y el ambiente relajado de isla de surfistas.',
    cosaVedere: [
      'La pasarela de Cloud 9 en General Luna',
      'Las islas de Naked, Daku y Guyam',
      'La laguna de Sugba en Del Carmen',
      'Las piscinas de roca de Magpupungko con la marea baja',
      'La carretera entre palmerales de Coconut Road',
    ],
    cosaFare: ['Clases de surf para principiantes', 'Vuelta a la isla en scooter', 'Paddle board en la laguna de Sugba'],
    doveDormire: 'General Luna, a lo largo de la Tourism Road y hacia Cloud 9; Pacifico para quien busca un pueblo más tranquilo.',
    doveMangiare: 'Locales internacionales en General Luna, pescado a la parrilla y carinderias fuera del centro.',
    comeArrivare: 'Vuelos directos a Sayak (en Del Carmen) desde Cebú, Clark y Davao; desde Manila ya no hay vuelos directos y se pasa por Clark o Cebú. Luego unos 45 minutos hasta General Luna (furgoneta compartida unos 300 PHP, 2026).',
    comeSpostarsi: 'Scooter de alquiler o habal-habal (moto-taxi); furgonetas compartidas para el aeropuerto.',
    periodoMigliore: 'de marzo a octubre por el mar en calma; surf con olas grandes de septiembre a noviembre; de diciembre a febrero viento y lluvia',
    costi:
      'Island hopping aproximadamente 1.000-2.000 PHP por persona en tours compartidos; clase de surf 500-1.000 PHP con instructor y tabla; scooter 350-500 PHP al día (precios orientativos, 2026).',
    erroriDaEvitare: [
      'Conducir el scooter sin experiencia, o de noche: los accidentes son el primer problema de los turistas en la isla',
      'Ir a Magpupungko con la marea alta, cuando las piscinas no se ven',
    ],
    luoghi: [
      {
        "nome": "Cloud 9",
        "testo": "La ola que hizo famosa a Siargao, con una pasarela de madera y una torre sobre el arrecife de General Luna. Es el punto de referencia de los surfistas.",
        "come": "A pocos minutos de General Luna, en scooter o a pie por la Tourism Road.",
        "quando": "Surf: de septiembre a noviembre, olas grandes para expertos. Por la mañana para ver las olas.",
        "tempo": "1 hora",
        "costo": "Clase de surf para principiantes 500-1.000 PHP con instructor y tabla (indicativo, 2026)"
      },
      {
        "nome": "Naked, Daku y Guyam",
        "testo": "Tres islas a media hora de General Luna: Naked Island, un banco de arena sin un árbol; Daku, la más grande, con el pueblo de pescadores y el almuerzo de pescado a la parrilla; Guyam, un islote redondo con palmeras.",
        "come": "Tour de island hopping en barco desde General Luna.",
        "quando": "Por la mañana, con mar en calma, en la temporada de marzo a octubre.",
        "tempo": "medio día",
        "costo": "Tour compartido 1.000-2.000 PHP por persona; barco privado 3.000-4.000 PHP, más pequeñas tasas en las islas (indicativo, 2025-2026)"
      },
      {
        "nome": "Laguna de Sugba",
        "testo": "Una laguna de agua verde azulada entre manglares y rocas de caliza, en Del Carmen. Solo se llega en barco, por los canales del manglar. Se hace paddle board, se nada o se salta al agua desde la plataforma de madera del centro.",
        "come": "En el norte de la isla, en barco desde Del Carmen; excursión de un día desde General Luna.",
        "tempo": "medio día"
      },
      {
        "nome": "Piscinas de Magpupungko",
        "testo": "Pozas naturales de agua de mar entre las rocas de Pilar, en la costa este, que aparecen con la marea baja. El agua es clara, hay peces y se salta desde las rocas. Con marea alta las olas las cubren y casi no se ve nada.",
        "come": "En scooter o con conductor desde el pueblo, en la costa este.",
        "quando": "Con marea baja: con marea alta no se ven las piscinas.",
        "tempo": "2-3 horas"
      },
      {
        "nome": "Coconut Road",
        "testo": "Una carretera recta entre palmerales de cocos, para recorrer en scooter: la imagen más fotografiada del interior de la isla. Desde el mirador la carretera se abre a un mar de palmeras hasta el horizonte. Conviene pasar a primera hora o hacia el atardecer, con menos calor y mejor luz.",
        "come": "En scooter desde General Luna.",
        "tempo": "1 hora"
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
          "Día 2: clase de surf por la mañana y luego Coconut Road en scooter"
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
        "testo": "El centro de los surfistas, con locales, escuelas y hoteles a lo largo de la Tourism Road. Animado por la noche."
      },
      {
        "nome": "Pacifico",
        "perChi": "pueblo tranquilo",
        "testo": "Más al norte, un pueblo más tranquilo, con olas y pocos servicios."
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
      "Temporada: de diciembre a febrero hay viento y lluvia; el mejor periodo para el mar en calma es de marzo a octubre.",
      "Efectivo y cajeros: pocos y a veces vacíos los fines de semana; con tarjeta extranjera la comisión local es de unos 250 PHP por retirada (BDO), más la de tu banco. Retira con antelación."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: 'La pasarela y la torre de madera sobre el arrecife de Cloud 9, el spot de surf de Siargao',
    immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg',
  },
]
