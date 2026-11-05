import type { Destinazione } from '@/lib/types'

export const destinazioniSriLanka: Destinazione[] = [
  {
    slug: 'negombo',
    paeseSlug: 'sri-lanka',
    ordine: 1,
    nome: 'Negombo',
    tipologia: ['mare', 'arrivo'],
    giorniConsigliati: '1 día, ida y vuelta',
    visitataPersonalmente: true,
    introduzione: 'La primera y la última parada del viaje, cerca del aeropuerto de Colombo, con su famoso mercado de pescado al amanecer.',
    percheAndarci: 'Es la base natural para quien llega o sale de Colombo, y el fish market de primera hora de la mañana es un espectáculo.',
    cosaVedere: ['El fish market de Negombo al amanecer'],
    cosaFare: [
      'Cena de bienvenida o de despedida entre Salt Restaurant, Tuk Tuk Wine & Dine y Jude Restaurant',
      'Copas después de cenar en el Rodeo o en el Sky Lounge',
      'Fish market a primera hora de la mañana',
    ],
    doveDormire:
      "A la ida dormimos en el Regal Réseau Hotel & Spa (4/5 en Tripadvisor, unas 400 reseñas): gusta por el rooftop con piscina infinita, aunque según algunos huéspedes la música del bar llega hasta las habitaciones. A la vuelta en el Goldi Sands Hotel (4/5, más de 1.700 reseñas): desayuno buffet mejor de lo previsto y ubicación cómoda, pero algunos reseñadores encuentran el mobiliario anticuado.\n\nEconómicos: Icebear Guesthouse, Ocean Beauty Guest House. Gama media: Jetwing Sea, Jetwing Lagoon. Lujo (contenido): Jetwing Blue, Sentido Heritance Negombo.",
    doveMangiare: 'Jude Restaurant (buen pescado pero servicio lento, unos 12 € por cabeza); SeaJoy para una comida económica.',
    usciteSerali: 'Rodeo, Sky Lounge, o una beach party, preguntando a guía y gente del lugar dónde hay.',
    comeArrivare: 'Traslado desde el aeropuerto de Colombo, unas 6.000 LKR por coche.',
    comeSpostarsi: 'Furgoneta privada con conductor.',
    periodoMigliore: 'noviembre',
    costi: 'Cena unos 12 € por cabeza; traslado desde el aeropuerto 5.000-6.000 LKR.',
    erroriDaEvitare: [],
    miaEsperienza:
      "El fish market de Negombo a primera hora de la mañana fue un espectáculo genuino, una buena manera de familiarizarse con el país nada más llegar.",
    luoghi: [
      {
        "nome": "Mercado de pescado de Negombo",
        "testo": "En la playa los barcos de pesca descargan al amanecer y el pescado se tiende a secar o se vende de inmediato. Un espectáculo genuino, una buena forma de tomar contacto con el país nada más llegar.",
        "come": "A pocos minutos del centro, en tuk-tuk o a pie desde los hoteles frente al mar.",
        "quando": "Al amanecer o a primera hora.",
        "tempo": "1 hora",
        "consiglio": "Ir pronto: a media mañana la actividad casi ha terminado."
      },
      {
        "nome": "Iglesia de Santa María",
        "testo": "A Negombo se la llama la «pequeña Roma» por sus iglesias católicas, herencia del periodo portugués. Santa María, terminada en 1922 tras casi cincuenta años de obras, tiene el techo pintado con escenas de la vida de Cristo, obra de un pintor local budista, N.S. Godamanne.",
        "come": "A pie o en tuk-tuk desde el centro.",
        "tempo": "30 minutos",
        "consiglio": "Hombros y rodillas cubiertos, como en todos los lugares de culto."
      },
      {
        "nome": "Cena frente al mar",
        "testo": "Negombo es la parada ideal para la cena de bienvenida o de despedida: Salt Restaurant, Tuk Tuk Wine & Dine y Jude Restaurant.",
        "tempo": "una noche",
        "costo": "Cena unos 12 € por persona (del viaje de 2023)",
        "consiglio": "Jude Restaurant: buen pescado pero servicio lento."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mercado de pescado al amanecer",
          "Iglesia de Santa María",
          "Almuerzo de pescado en SeaJoy",
          "Cena de bienvenida o de despedida junto al mar"
        ]
      }
    ],
    zone: [
      {
        "nome": "Paseo marítimo de Negombo",
        "perChi": "llegada y salida",
        "testo": "Hoteles frente al mar, cerca del aeropuerto de Colombo. Cómodo, pero poco auténtico más allá del mercado de pescado."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día en los restaurantes frente al mar, como Jude."
      },
      {
        "nome": "Rice and curry",
        "testo": "Arroz con varios curris de verduras, pescado o pollo: la comida básica de Sri Lanka."
      },
      {
        "nome": "Kottu",
        "testo": "Roti cortado en tiras y salteado con verduras y huevo o carne, en locales de calle."
      },
      {
        "nome": "Hoppers",
        "testo": "Pequeños cuencos de masa de arroz y coco, con un huevo en el centro: desayuno o cena."
      }
    ],
    attenzioni: [
      "El visado electrónico ETA es obligatorio: solicitarlo online en el sitio oficial eta.gov.lk. Es gratuito para pasaportes italianos desde el 25 de mayo de 2026 (30 días, doble entrada), pero las condiciones cambian: comprueba antes de salir.",
      "La SIM local (Dialog o SLT-Mobitel) se compra en los mostradores del aeropuerto: compara las ofertas antes de elegir.",
      "Acordar el precio del tuk-tuk o del traslado antes de subir.",
      "En los lugares de culto hay que cubrir hombros y rodillas: lleva un pareo o pantalones largos."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Barcas de pesca de colores en la playa de Negombo, Sri Lanka',
    immagine: '/images/sri-lanka/negombo-stock.jpg',
  },
  {
    slug: 'anuradhapura',
    paeseSlug: 'sri-lanka',
    ordine: 2,
    nome: 'Anuradhapura',
    tipologia: ['storia', 'religione'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: 'La primera de las "ciudades sagradas" del triángulo cultural cingalés: dagobas inmensas, árboles sagrados y ruinas con más de dos mil años de historia budista.',
    percheAndarci: "Para entender las raíces del budismo en Sri Lanka, ante el Sri Maha Bodhi, descendiente directo del árbol bajo el que Buda alcanzó la iluminación.",
    cosaVedere: ['Las dagobas del yacimiento arqueológico', 'El Sri Maha Bodhi, el árbol sagrado'],
    cosaFare: ['Visita guiada del yacimiento arqueológico (unas 3 h) en bicicleta, con Anil o con Lalith'],
    doveDormire:
      "Dormimos en el Miridiya Lake Resort: nota media 3/5 en Tripadvisor (unas 400 reseñas), pero con la nueva gestión parece haber mejorado bastante (entrada, comida, habitaciones). La vista sobre el lago Nuwara Wewa gusta mucho; alguien se queja de las duchas y de la humedad en los baños.\n\nEconómicos: Saubagya Inn, Why Not Palace. Gama media: Kings Town Hotel, Monaara Leisure. Lujo: Ulagalla by Uga Escapes, Divulgaha Gedara Boutique Hotel.",
    doveMangiare: 'Buffet en el hotel (unas 2.200 LKR más las bebidas).',
    comeArrivare: 'Unas 5 h en furgoneta desde Negombo.',
    comeSpostarsi: 'En bicicleta con el guía, dentro del yacimiento.',
    periodoMigliore: 'por la tarde, tras la llegada',
    costi: 'Guía unas 6.500 LKR (19 €) más la propina.',
    erroriDaEvitare: [],
    miaEsperienza:
      "Las dagobas inmensas de Anuradhapura dan enseguida la medida de la historia budista de la isla. Fue un buen primer contacto con el triángulo cultural, antes de las paradas más conocidas como Sigiriya.",
    luoghi: [
      {
        "nome": "Sri Maha Bodhi",
        "testo": "El árbol sagrado, descendiente directo del bajo el cual Buda alcanzó la iluminación, plantado en el siglo III a. C. Para los fieles es el lugar más venerado de la ciudad.",
        "come": "Dentro del sitio arqueológico, en bicicleta o a pie. Se entra descalzo y sin sombrero, con hombros y piernas cubiertos; los fieles visten de blanco.",
        "quando": "Por la mañana o al final de la tarde; en los días de luna llena (poya) está lleno de peregrinos.",
        "tempo": "1 hora"
      },
      {
        "nome": "Las dagobas del sitio arqueológico",
        "testo": "Las inmensas cúpulas blancas, como el Ruwanwelisaya que emerge del bosque, dan la medida de la historia budista de la isla.",
        "come": "Visita guiada en bicicleta, unas 3 horas.",
        "quando": "Taquilla abierta de 7 a 17 h. Por la tarde, tras la llegada; mejor evitar las horas centrales por el calor.",
        "tempo": "3 horas",
        "costo": "Entrada al sitio para extranjeros unos 30 USD (marzo de 2026), pagada en rupias; guía unos 6.500 LKR (19 €) más propina (del viaje de 2023)",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Con guía los lugares se entienden: sin ella son montones de piedra."
      },
      {
        "nome": "Lago Nuwara Wewa",
        "testo": "El gran lago artificial junto a la ciudad nueva, bonito al atardecer. Varios hoteles dan al lago, entre ellos el Miridiya Lake Resort.",
        "quando": "Atardecer.",
        "tempo": "1 hora"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Llegada desde Negombo (unas 5 horas en furgoneta)",
          "Tarde: Sri Maha Bodhi y las dagobas en bicicleta con guía",
          "Atardecer en el lago Nuwara Wewa",
          "Cena buffet en el hotel"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ciudad nueva y lago",
        "perChi": "quien quiera un hotel cómodo",
        "testo": "Hoteles y casas de huéspedes con vistas al lago, a pocos minutos de los sitios en tuk-tuk. La zona más práctica."
      },
      {
        "nome": "Fuera de la ciudad",
        "perChi": "quien busque lujo y calma",
        "testo": "Villas y resorts en el campo, más lejos de los sitios; hacen falta traslados."
      }
    ],
    sapori: [
      {
        "nome": "Buffet del hotel",
        "testo": "Curri de verduras, arroz y pescado, unos 2.200 LKR por persona más bebidas en el Miridiya (2023)."
      },
      {
        "nome": "Rice and curry",
        "testo": "La comida básica de la isla, en las tabernas de la ciudad."
      },
      {
        "nome": "String hoppers",
        "testo": "Nidos de fideos de arroz al vapor, servidos con curri y sambol de coco en el desayuno."
      },
      {
        "nome": "Cuajada y treacle",
        "testo": "Cuajada de leche de búfala con sirope de palma kitul: un postre típico."
      }
    ],
    attenzioni: [
      "En los lugares sagrados se entra descalzo, cubierto y con ropa clara: lleva calcetines o acepta la arena caliente a mediodía.",
      "Nunca posar para una foto delante de una estatua de Buda: se considera una falta de respeto, y faltar al respeto a las imágenes budistas es un delito.",
      "Los días de luna llena (poya) son festivos y normalmente no hay alcohol: el sitio está lleno.",
      "El calor de la tarde es fuerte: lleva agua y sombrero."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La cúpula blanca del Ruwanwelisaya que emerge del bosque bajo un cielo de lluvia, Anuradhapura',
    immagine: '/images/sri-lanka/anuradhapura-ruwanwelisaya-foresta-riccardo.jpg',
  },
  {
    slug: 'dambulla-sigiriya',
    paeseSlug: 'sri-lanka',
    ordine: 3,
    nome: 'Dambulla y Sigiriya',
    tipologia: ['storia', 'trekking', 'natura'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: "El corazón del triángulo cultural: Mihintale, el safari en Minneriya, el atardecer desde Pidurangala Rock, la Roca del León de Sigiriya y el Templo Dorado excavado en la roca.",
    percheAndarci: 'Aquí se concentran más momentos fuertes que en cualquier otra parada del viaje: historia, naturaleza y trekking en dos días intensos.',
    cosaVedere: [
      'Mihintale, donde según la tradición el budismo llegó por primera vez a Sri Lanka',
      'Sigiriya, la Roca del León, con los cimientos del palacio real del siglo V y los frescos de las doncellas celestiales',
      'El Templo Dorado de Dambulla, cinco cuevas excavadas en la roca',
      'El panorama sobre Sigiriya desde Pidurangala Rock',
    ],
    cosaFare: [
      'Safari en Minneriya entre los elefantes (hay una ficha de experiencia dedicada)',
      'Trekking al atardecer en Pidurangala Rock (30 minutos de subida)',
      'Trekking en Sigiriya (1 h 30-2 h de subida; hay una ficha de experiencia dedicada)',
      'Visita al Templo Dorado de Dambulla',
      'El Dambulla Wholesale Market: Dambulla es uno de los principales centros de distribución de verduras del país',
    ],
    doveDormire:
      "Dormimos en el Tropical Life Resort, sobre el papel el mejor de los nueve hoteles del viaje: n.º 1 entre los alojamientos specialty de Dambulla, 4/5 en Tripadvisor. Habitaciones limpias y bien equipadas, buffet abundante, todo inmerso en el verde. Alguna reseña señala que en la habitación falta WiFi.\n\nEconómicos: Relax Guesthouse, Lake Island Homestay. Gama media: Lake Lodge Boutique Hotel, Kalundewa Retreat. Lujo: Heritance Kandalama (el célebre hotel firmado por Geoffrey Bawa), Aliya Resort & Spa.",
    doveMangiare: "Mom's Kitchen y Golden Palace, entre Dambulla y Sigiriya.",
    comeArrivare: 'Unos 1 h 30 de traslado desde Anuradhapura, pasando por Mihintale y por el safari.',
    comeSpostarsi: 'Furgoneta privada; a pie para los trekkings.',
    periodoMigliore: 'a primera hora de la mañana para Sigiriya, para evitar el calor',
    costi: 'Mihintale 1.000 LKR (2026; en 2023 eran 500 LKR más 50 de sarong); safari en Minneriya unas 12.000 LKR por jeep más la entrada (2023); Sigiriya unos 35 USD (2026); Pidurangala 1.000 LKR.',
    erroriDaEvitare: ['Salir tarde hacia Sigiriya: conviene moverse pronto para evitar el peor calor durante la subida'],
    miaEsperienza:
      "El atardecer desde Pidurangala Rock, con la Roca de Sigiriya enfrente, es uno de los panoramas más bonitos de todo el viaje. Quizá me gustó más que la subida a Sigiriya, que todos hacen a la carrera sin pararse aquí.",
    luoghi: [
      {
        "nome": "Mihintale",
        "testo": "La colina donde, según la tradición, llegó por primera vez el budismo a Sri Lanka. Según la tradición, aquí el monje Mahinda se encontró con el rey Devanampiya Tissa. Una escalinata de 1.840 peldaños de granito lleva a los templos y a la gran estupa de la cima.",
        "come": "A unos 12 km al este de Anuradhapura, en furgoneta. Se sube a pie; en los templos se entra descalzo.",
        "quando": "Por la mañana, antes del calor.",
        "tempo": "1,5 horas",
        "costo": "Entrada 1.000 LKR para extranjeros (2026); en 2023 eran 500 LKR más 50 LKR de sarong"
      },
      {
        "nome": "Sigiriya, la Roca del León",
        "testo": "Una roca de unos 180 metros de altura con los cimientos del palacio del rey Kashyapa (477-495) en la cima, patrimonio de la UNESCO desde 1982. En la subida se pasa junto a los frescos de las doncellas celestiales, el muro espejo cubierto de grafitis poéticos de los siglos IX-X y las dos garras del león que enmarcan la última escalinata.",
        "come": "Desde la taquilla se sube a pie (1,5-2 horas de subida en el viaje de 2023); desde Dambulla en furgoneta.",
        "quando": "Taquilla abierta de 7 a 17 h: llega a la apertura para evitar el peor calor y las colas.",
        "tempo": "3-4 horas",
        "costo": "Unos 35 USD para extranjeros (marzo de 2026), pagados en rupias al cambio del día; incluye el museo. También se puede comprar en línea.",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Ve temprano: a media mañana la subida es dura y está llena de gente."
      },
      {
        "nome": "Pidurangala Rock",
        "testo": "El atardecer desde Pidurangala, con la Roca de Sigiriya enfrente, es una de las mejores vistas del viaje. Quizá me gustó más que la subida a Sigiriya, que todos hacen con prisa sin detenerse aquí.",
        "come": "Subida a pie, con un tramo final de roca (unos 30 minutos en el viaje de 2023).",
        "quando": "Atardecer.",
        "tempo": "2 horas",
        "costo": "Entrada 1.000 LKR (del viaje de 2023, sin cambios en 2026)",
        "consiglio": "Lleva una linterna para la bajada cuando ya se ha puesto el sol."
      },
      {
        "nome": "Templo de Oro de Dambulla",
        "testo": "Cinco cuevas excavadas en la roca con 153 estatuas de Buda y unos 2.100 metros cuadrados de pinturas en paredes y techos. Es patrimonio de la UNESCO desde 1991. La cueva más grande es la más impresionante: las estatuas se alinean bajo un techo totalmente pintado.",
        "come": "Desde Sigiriya en furgoneta; se sube por una escalinata y se entra descalzo, con hombros y rodillas cubiertos.",
        "quando": "Por la mañana o al final de la tarde.",
        "tempo": "1,5 horas",
        "costo": "Unos 3.000 LKR para extranjeros (2026)"
      },
      {
        "nome": "Safari en Minneriya",
        "testo": "El safari en jeep entre los elefantes del parque de Minneriya, que rodea el embalse construido por el rey Mahasen en el siglo III. En la estación seca, cuando el agua se retira, los elefantes bajan en manada a las orillas a comer la hierba nueva.",
        "come": "En jeep con conductor-guía desde la zona de Sigiriya.",
        "quando": "Por la tarde; el periodo con más elefantes juntos (el «gathering») suele ser de julio a octubre, con el pico en agosto y septiembre.",
        "tempo": "3-4 horas",
        "costo": "Unos 12.000 LKR por jeep más entrada (del viaje de 2023); entrada al parque unos 25 USD por adulto extranjero, más impuestos, servicio y vehículo (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Temprano por la mañana: Sigiriya",
          "Almuerzo y Templo de Oro de Dambulla",
          "Tarde: Pidurangala para el atardecer"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Mihintale, safari en Minneriya, atardecer en Pidurangala",
          "Día 2: Sigiriya a la apertura, y luego Templo de Oro y mercado de Dambulla"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dambulla",
        "perChi": "base cómoda",
        "testo": "Hoteles rodeados de verde, a media hora de los sitios. El Tropical Life Resort fue el mejor de los nueve hoteles del viaje."
      },
      {
        "nome": "Sigiriya",
        "perChi": "cerca de la roca",
        "testo": "Casas de huéspedes y hoteles cerca de la taquilla, cómodos para una subida al amanecer. Menos restaurantes."
      },
      {
        "nome": "Lago Kandalama",
        "perChi": "lujo y arquitectura",
        "testo": "El Heritance Kandalama, firmado por Geoffrey Bawa, es el más célebre y de los más caros."
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry",
        "testo": "Arroz con curris de verduras, dal y pescado, en Mom's Kitchen y Golden Palace."
      },
      {
        "nome": "Kottu",
        "testo": "Tiras de roti salteadas con verduras y huevo, en locales de calle."
      },
      {
        "nome": "Fruta de Dambulla",
        "testo": "Dambulla es uno de los principales centros de distribución de verduras del país: en el mercado mayorista se ven camiones cargados y montañas de productos locales."
      },
      {
        "nome": "Té y dulces",
        "testo": "Té con leche y dulces de coco y treacle en las cafeterías de la carretera."
      }
    ],
    attenzioni: [
      "Entrada de Sigiriya: pagar solo en la taquilla oficial. Quien detiene a los turistas por la calle ofreciendo «atajos» o entradas con descuento es un captador.",
      "Monos: no tener comida a la vista y no mirarlos a los ojos.",
      "Sigiriya: salir pronto para evitar el peor calor en la subida.",
      "Sarong y hombros cubiertos para Mihintale y el Templo de Oro."
    ],
    esperienzeSlugs: ['safari-minneriya', 'trekking-sigiriya'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La roca de Sigiriya que emerge azul de la jungla al crepúsculo, vista desde Pidurangala',
    immagine: '/images/sri-lanka/sigiriya-crepuscolo-riccardo.jpg',
  },
  {
    slug: 'polonnaruwa',
    paeseSlug: 'sri-lanka',
    ordine: 4,
    nome: 'Polonnaruwa',
    tipologia: ['storia'],
    giorniConsigliati: 'media jornada',
    visitataPersonalmente: true,
    introduzione: 'La segunda capital medieval de Sri Lanka, que recorrimos en bicicleta entre templos y estatuas de Buda.',
    percheAndarci: 'Es más ligera e inmediata que Sigiriya, con la misma historia.',
    cosaVedere: ['Los templos y las estatuas de Buda de la ciudad medieval'],
    cosaFare: ['Recorrido por los templos en bicicleta de alquiler (1.000 LKR)', 'Comida en el Priyamali gedara, con vista a los arrozales'],
    doveDormire: 'No dormí allí: fue una excursión de media jornada desde Dambulla.',
    doveMangiare: 'Priyamali gedara, restaurante de campo con vista a los arrozales: muy bueno.',
    comeArrivare: 'Unos 1 h 10 de traslado desde Sigiriya.',
    comeSpostarsi: 'En bicicleta de alquiler, dentro del yacimiento.',
    periodoMigliore: 'mañana o tarde',
    costi: 'Bicicleta 1.000 LKR (unos 2,5 €); guía (Indu) 6.000 LKR más la propina.',
    erroriDaEvitare: [],
    miaEsperienza:
      "Recorrer Polonnaruwa en bicicleta fue un buen cambio de ritmo después de la subida a Sigiriya del día anterior. La comida en el Priyamali gedara, con vista a los arrozales, fue una de las mejores del viaje.",
    luoghi: [
      {
        "nome": "Gal Vihara",
        "testo": "Cuatro imágenes de Buda talladas en una sola pared de granito en el siglo XII, entre ellas una figura de pie y un Buda reclinado de unos 14 metros de largo.",
        "come": "En el sitio arqueológico, en bicicleta; se dejan los zapatos en la entrada.",
        "quando": "Por la mañana o por la tarde, con luz rasante.",
        "tempo": "30 minutos"
      },
      {
        "nome": "Vatadage y el Cuadrángulo",
        "testo": "El Vatadage es un templo circular construido quizá para la reliquia del diente, quizá para el cuenco del Buda: los historiadores no se ponen de acuerdo. Tiene escalinatas y una piedra de luna tallada en la entrada norte. El Cuadrángulo reúne en un recinto los templos más bellos de la ciudad medieval.",
        "come": "Se circula en bicicleta entre las ruinas y se visitan a pie los templos del Cuadrángulo.",
        "tempo": "1 hora"
      },
      {
        "nome": "Paseo en bicicleta entre los templos",
        "testo": "Recorrer Polonnaruwa en bicicleta fue un buen cambio de ritmo tras la subida a Sigiriya del día anterior. El sitio es más ligero e inmediato que Sigiriya, con tanta historia como aquel.",
        "come": "Bicicleta de alquiler en la entrada del sitio, con o sin guía.",
        "quando": "Taquilla abierta de 7 a 17 h. Por la mañana o por la tarde; evitar las horas centrales.",
        "tempo": "medio día",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "costo": "Entrada al sitio para extranjeros unos 30 USD (marzo de 2026); bicicleta 1.000 LKR (unos 2,5 €); guía 6.000 LKR más propina (del viaje de 2023)",
        "consiglio": "Almuerzo en Priyamali gedara, restaurante rural con vistas a los arrozales: muy bueno."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "De Sigiriya a Polonnaruwa (aproximadamente 1 hora 10)",
          "Paseo en bicicleta: Cuadrángulo, Vatadage, Gal Vihara",
          "Almuerzo en Priyamali gedara",
          "Regreso a Dambulla"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dambulla o Sigiriya",
        "perChi": "excursión de un día",
        "testo": "Polonnaruwa se visita en medio día desde Dambulla o Sigiriya, sin pernoctar."
      },
      {
        "nome": "Polonnaruwa nueva",
        "perChi": "quien quiera dormir cerca",
        "testo": "Casas de huéspedes y pequeños hoteles cerca del lago y del sitio; poca vida nocturna."
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry rural",
        "testo": "El almuerzo del Priyamali gedara, con vistas a los arrozales."
      },
      {
        "nome": "Fruta y té",
        "testo": "Plátanos, papaya y té con leche a lo largo de las carreteras del sitio."
      },
      {
        "nome": "Kottu",
        "testo": "Roti salteado con verduras en los locales de Polonnaruwa nueva."
      }
    ],
    attenzioni: [
      "En los templos se entra descalzo, sin zapatos ni gorro: la piedra al sol quema, así que mejor ir por la mañana o al final del día.",
      "La entrada al sitio se compra solo en la taquilla oficial: desconfía de quien ofrezca guías o entradas en la calle.",
      "Cuidado con los monos: no ofrecer comida.",
      "El calor de las horas centrales es fuerte: lleva agua y sombrero."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'El perfil de un Buda de piedra marcado por grietas contra el cielo nublado de Polonnaruwa',
    immagine: '/images/sri-lanka/polonnaruwa-buddha-profilo-riccardo.jpg',
  },
  {
    slug: 'kandy',
    paeseSlug: 'sri-lanka',
    ordine: 5,
    nome: 'Kandy',
    tipologia: ['cultura', 'religione'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: 'El Templo del Diente con su ceremonia nocturna, el mercado de pescado donde encontramos los mejores recuerdos y el lago en la ciudad.',
    percheAndarci: 'Por la ceremonia nocturna en el Templo del Diente, uno de los momentos más espirituales y sentidos del viaje.',
    cosaVedere: ['El Templo del Diente (Temple of the Tooth)', 'La estatua de Buda de Bahiravokanda', 'El lago en la ciudad'],
    cosaFare: [
      'El Ranweli Spice Garden, con la visita a la plantación de especias',
      'El Kandy Fish Market, el mejor sitio del viaje para recuerdos (especias, tejidos)',
      'La ceremonia nocturna en el Templo del Diente (hay una ficha de experiencia dedicada)',
    ],
    doveDormire:
      "Dormimos en el Rivendell Hotel: 4/5 en Tripadvisor, pero con opiniones encontradas. A quien le gusta habla de una ubicación tranquila fuera del centro y de la vista sobre las colinas; otros lo encuentran caro para lo que ofrece, y a primera hora de la mañana se oye el ruido de un templo cercano.\n\nEconómicos: 256 Townhouse Rest, Sharon Inn Kandy. Gama media: Hotel Suisse, OZO Kandy. Lujo: Earl's Regency, The Grand Kandyan.",
    doveMangiare: "El Ranweli Spice Garden a la hora de comer; un restaurante del sur de la India encontrado en el sitio, económico y excelente (con un poco de lío con los pedidos).",
    comeArrivare: 'Unas 2 h de traslado desde Dambulla, con parada en el Ranweli Spice Garden.',
    comeSpostarsi: 'A pie por el centro.',
    periodoMigliore: 'última hora de la tarde o noche, para llegar a tiempo a la ceremonia del Templo del Diente',
    costi: 'Entrada al Templo del Diente 2.000 LKR en 2023, 3.000 LKR en 2026.',
    erroriDaEvitare: ['Llegar al Templo del Diente en el último momento: la cola se forma ya a última hora de la tarde, conviene presentarse con mucha antelación'],
    miaEsperienza:
      "La ceremonia nocturna en el Templo del Diente, con los tambores que empiezan poco antes de que baje la luz, fue uno de los momentos más intensos y espirituales de todo el viaje.",
    luoghi: [
      {
        "nome": "Templo del Diente",
        "testo": "Custodia la reliquia del diente de Buda y es uno de los lugares más sagrados del budismo, patrimonio de la UNESCO junto con la ciudad de Kandy. La ceremonia vespertina, con los tambores que empiezan poco antes de que caiga la luz, fue uno de los momentos más intensos y espirituales del viaje.",
        "come": "A pie desde el centro, junto al lago. Se entra descalzo con hombros y rodillas cubiertos; la reliquia está guardada en siete cofres de oro en la cámara llamada Handun Kunama. No se admiten pantalones cortos ni camisetas sin mangas; en la entrada hay ropa adecuada.",
        "quando": "Abierto todos los días de 5:30 a 20 h. Las ceremonias son a las 5:30, a las 9:30 y a las 18:30: para la de la tarde la fila se forma ya a última hora de la tarde.",
        "tempo": "2 horas",
        "costo": "3.000 LKR para extranjeros (2026, web oficial), con los museos del complejo; en 2023 eran 2.000 LKR. Solo valen las entradas de las máquinas del templo.",
        "url": "https://sridaladamaligawa.lk/",
        "consiglio": "Presentarse con mucha antelación: llegar en el último momento significa quedarse al final de la fila."
      },
      {
        "nome": "Mercado de pescado de Kandy",
        "testo": "El mejor lugar del viaje para recuerdos: especias, tejidos y productos locales, a precios más bajos que en las tiendas para turistas.",
        "come": "En el centro, a pie.",
        "quando": "Por la mañana o al final de la tarde.",
        "tempo": "1 hora"
      },
      {
        "nome": "Ranweli Spice Garden",
        "testo": "Una visita a la plantación de especias con almuerzo, en la carretera de Dambulla a Kandy.",
        "come": "Parada durante el traslado desde Dambulla, unas 2 horas en furgoneta.",
        "tempo": "1,5 horas"
      },
      {
        "nome": "Buda de Bahirawakanda y el lago",
        "testo": "Una gran estatua de Buda en una colina sobre la ciudad, con vistas sobre Kandy y el lago artificial en su centro.",
        "come": "En tuk-tuk desde el centro, pocos minutos.",
        "quando": "Atardecer.",
        "tempo": "1 hora"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Llegada desde Dambulla con parada en el Ranweli Spice Garden",
          "Tarde: mercado de pescado y lago",
          "Final de la tarde: Templo del Diente, llegando con antelación",
          "Ceremonia vespertina"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fuera del centro",
        "perChi": "tranquilidad",
        "testo": "Hoteles en las colinas como el Rivendell, con vistas, pero lejos del templo. Se duerme mejor, aunque a primera hora se oye un templo cercano."
      },
      {
        "nome": "Cerca del lago",
        "perChi": "visitas a pie",
        "testo": "Hoteles y casas de huéspedes a pocos minutos del templo y del mercado. Más tráfico y ruido."
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry del sur de la India",
        "testo": "En un restaurante del sur de la India encontrado allí mismo: barato y excelente, aunque con algo de confusión con los pedidos."
      },
      {
        "nome": "Especias",
        "testo": "Cardamomo, canela y pimienta del jardín de especias y del mercado."
      },
      {
        "nome": "Dosa e idli",
        "testo": "Crepes y tortitas de arroz fermentado, en los locales de cocina india."
      },
      {
        "nome": "Té de Kandy",
        "testo": "Té negro de montaña, en paquetes en las tiendas del centro."
      }
    ],
    attenzioni: [
      "En el Templo del Diente se entra descalzo, con hombros y rodillas cubiertos, sin dar la espalda a las estatuas para las fotos.",
      "El templo no es un museo: en los días de fiesta y de luna llena (poya) está lleno de peregrinos.",
      "Los «tours de especias» de pago venden productos a precios altos: compara con el mercado.",
      "Acuerda el precio del tuk-tuk antes de subir."
    ],
    esperienzeSlugs: ['tempio-del-dente'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Siluetas de fieles en silencio ante el relicario de oro del Templo del Diente de Kandy',
    immagine: '/images/sri-lanka/kandy-tempio-dente-reliquiario-riccardo.jpg',
  },
  {
    slug: 'nallathanniya',
    paeseSlug: 'sri-lanka',
    ordine: 6,
    nome: "Nallathanniya y Adam's Peak",
    tipologia: ['trekking', 'religione', 'avventura'],
    giorniConsigliati: '1 día y medio, incluido el rafting en Kitulgala',
    visitataPersonalmente: true,
    introduzione: "El rafting en el río Kelani en Kitulgala y el ascenso nocturno al Adam's Peak, la verdadera prueba física del viaje.",
    percheAndarci: 'Por la subida de noche hasta el amanecer en la cima, junto a cientos de peregrinos locales. Vale más por el camino que por la meta.',
    cosaVedere: ['El río Kelani, donde se rodó El puente sobre el río Kwai', "El amanecer desde la cima del Adam's Peak (2.243 m)"],
    cosaFare: [
      'Rafting en el río Kelani en Kitulgala (hay una ficha de experiencia dedicada)',
      "Ascenso nocturno al Adam's Peak (2 h 30-3 h de subida; hay una ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Nuestra base para el ascenso fue el Wathsala Inn, 3/5 en Tripadvisor: bonita vista sobre el valle y el Peak, personal amable, pero muchas reseñas señalan problemas de mantenimiento (duchas, sábanas, filtraciones). Hay que tomarlo por lo que es, un apoyo esencial para salir de noche, no un sitio de vacaciones.\n\nEconómicos: Slightly Chilled, Sun Mount Adam's Peak. Gama media: White House Adam's Peak, Adams Peak Grand. Alojamientos de lujo de verdad aquí no hay: es el pueblo desde el que parte el trekking.",
    doveMangiare: 'Cena en el hotel antes de la salida nocturna.',
    comeArrivare: 'Unas 2 h de traslado desde Kandy, pasando por Kitulgala.',
    comeSpostarsi: 'A pie durante todo el ascenso.',
    periodoMigliore: 'la temporada de la peregrinación, diciembre-mayo, por el recorrido iluminado (que, sin embargo, está también más concurrido)',
    costi: 'Cuánto costaban el rafting y las actividades extra en Kitulgala no lo apunté: se acuerdan con el operador.',
    erroriDaEvitare: ['Subir sin una sudadera: en la cima al amanecer hace frío y viento (3-6 °C en el viaje de 2023)'],
    miaEsperienza:
      "La noche en el Adam's Peak, en fila india con cientos de peregrinos locales por una escalinata toda iluminada, fue la verdadera prueba física del viaje. En la cima el frío corta, pero subir junto a quien lo hace por fe, y no por turismo, cuenta más que el propio amanecer.",
    luoghi: [
      {
        "nome": "Adam's Peak (Sri Pada)",
        "testo": "Una montaña de 2.243 metros sagrada para budistas, hindúes, musulmanes y cristianos. Se sube de noche por una escalinata totalmente iluminada, en fila india con cientos de peregrinos locales, para llegar a la cima al amanecer. Me pareció que cuenta más el camino que la meta.",
        "come": "Se sale a pie desde el pueblo de Nallathanniya en plena noche; la subida requiere varias horas (de 2,5 a 3 horas en el viaje de 2023).",
        "quando": "Temporada de peregrinación, de diciembre a mayo, con el camino iluminado; abril es el mes con más gente.",
        "tempo": "6-7 horas entre subida, amanecer y bajada",
        "consiglio": "En la cima al amanecer hace frío y viento (3-6 °C en el viaje de 2023): lleva una sudadera."
      },
      {
        "nome": "Rafting en Kitulgala",
        "testo": "Rafting en el río Kelani, el mismo donde se rodó El puente sobre el río Kwai.",
        "come": "Con un operador de Kitulgala, en la carretera de Kandy hacia Nallathanniya.",
        "tempo": "medio día",
        "costo": "No anoté cuánto costó: se acuerda con el operador."
      },
      {
        "nome": "Río Kelani",
        "testo": "El río que atraviesa Kitulgala, entre selva y rápidos, con la zona del set de la película.",
        "come": "Desde la carretera principal de Kitulgala.",
        "tempo": "1 hora"
      }
    ],
    programmi: [
      {
        "titolo": "1,5 días",
        "tappe": [
          "Mañana: rafting en Kitulgala de camino desde Kandy",
          "Tarde: llegada a Nallathanniya, descanso y cena temprano",
          "Noche: salida hacia el Adam's Peak",
          "Amanecer en la cima y bajada, y luego traslado"
        ]
      }
    ],
    zone: [
      {
        "nome": "Nallathanniya",
        "perChi": "quien sube de noche",
        "testo": "El pueblo desde donde parte el sendero: casas de huéspedes básicas como el Wathsala Inn, con vistas al valle. No es un sitio de vacaciones."
      },
      {
        "nome": "Hatton",
        "perChi": "más comodidad",
        "testo": "Ciudad cercana con más oferta de alojamiento y restaurantes, pero más lejos del inicio del sendero: la cumbre está a unos 32 km."
      }
    ],
    sapori: [
      {
        "nome": "Cena en el hotel",
        "testo": "Arroz y curri antes de la salida nocturna, en el hotel o la casa de huéspedes."
      },
      {
        "nome": "Té caliente en la subida",
        "testo": "A lo largo de la escalinata hay pequeños puestos de té y galletas para peregrinos."
      },
      {
        "nome": "Roti",
        "testo": "Torta plana rellena, para el desayuno a la vuelta."
      }
    ],
    attenzioni: [
      "Subir sin sudadera: en la cima al amanecer hace frío y viento.",
      "La escalinata está muy concurrida en temporada de peregrinación: sigue el ritmo del flujo y no te detengas en los escalones.",
      "Lleva una linterna frontal y calzado con buen agarre: la escalinata está iluminada, pero conviene llevarla igualmente.",
      "Con niebla o lluvia la subida resbala: valora las condiciones antes de salir."
    ],
    esperienzeSlugs: ['rafting-kitulgala', 'scalata-adams-peak'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "El santuario en la cima del Adam's Peak y la escalinata de los peregrinos en la loma verde, entre nubes bajas",
    immagine: '/images/sri-lanka/adams-peak-vetta-riccardo.jpg',
  },
  {
    slug: 'nuwara-eliya',
    paeseSlug: 'sri-lanka',
    ordine: 7,
    nome: 'Nuwara Eliya',
    tipologia: ['natura', 'relax'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: 'La "pequeña Inglaterra" de Sri Lanka, a 1.868 metros de altitud, entre plantaciones de té y la meseta de Horton Plains.',
    percheAndarci: 'Por el cambio de clima y de paisaje respecto al resto del viaje: té, aire fresco y, para quien quiera, uno de los mejores trekkings de la isla.',
    cosaVedere: ['La Pedro Tea Plantation y su fábrica de té', "World's End en Horton Plains, el borde de la meseta con un precipicio de 870 metros"],
    cosaFare: [
      'Visita a la plantación de té Pedro',
      "Relax: masaje, ceremonia del té en el Grand Hotel, Victoria Park, cascada de Lover's Leap",
      "Aventura: trekking a World's End, en Horton Plains (3 h)",
    ],
    doveDormire:
      "Dormimos en el Araliya RED, uno de los más reservados de la zona, 4/5 con casi 2.000 reseñas: la piscina climatizada gusta mucho, el personal es hospitalario y desde el rooftop se ve la ciudad. Alguien señala ruidos de las habitaciones contiguas y olor a gasóleo en la entrada.\n\nEconómicos: Galaxy Grand Hotel, Star Gate Private Villa. Gama media: Jetwing St. Andrew's, Clifton Inn. Lujo: Heritance Tea Factory, The Grand Hotel Nuwara Eliya.",
    doveMangiare: 'De Silva Food Center, Grand Indian, Grand Thai o Themparadu (el más local); copas después de cenar en el Lakeview Pub.',
    comeArrivare: 'Traslado desde Hatton/Nallathanniya, pasando por la Pedro Tea Plantation.',
    comeSpostarsi: 'Furgoneta privada para Horton Plains, a pie por la ciudad.',
    periodoMigliore: "un día de sol para el trekking a World's End",
    costi: 'Actividades en Nuwara Eliya (masaje, ceremonia del té) 5.000-8.000 LKR.',
    erroriDaEvitare: [],
    miaEsperienza:
      "El traslado a la Pedro Tea Plantation fue mucho más corto de lo previsto, y así me quedó más tiempo para la tarde libre entre los valles de té verdísimos alrededor de Nuwara Eliya.",
    luoghi: [
      {
        "nome": "Pedro Tea Plantation",
        "testo": "Una plantación con su fábrica de té, donde se sigue el proceso de la hoja a la taza. El traslado desde Nallathanniya fue mucho más corto de lo previsto, así que me quedó más tiempo para una tarde libre entre los valles de té.",
        "come": "A unos 3,5 km al este de Nuwara Eliya, en la carretera hacia Kandapola: en furgoneta o tuk-tuk. Cerca está la cascada de Lover's Leap.",
        "quando": "Por la mañana o a primera hora de la tarde.",
        "tempo": "1 hora"
      },
      {
        "nome": "World's End en Horton Plains",
        "testo": "El borde de la meseta de Horton Plains, a más de 2.000 metros, con un precipicio de 870 metros sobre la llanura. El trekking es un circuito de unos 9,5 km, 3 horas a paso tranquilo, entre praderas y bosque nuboso, con el desvío a las Baker's Falls. En el parque está prohibido llevar plástico: las bolsas abandonadas han matado a varios sambar, los ciervos del parque.",
        "come": "En furgoneta desde Nuwara Eliya, saliendo al amanecer; se camina por un sendero señalizado. La entrada abre a las 6.",
        "quando": "Temprano por la mañana: después llegan la niebla y las nubes y la vista desaparece. Hace falta un día de sol.",
        "tempo": "3 horas caminando más el traslado",
        "costo": "Entrada al parque unos 25 USD por adulto extranjero, más impuestos, servicio y vehículo (2026)",
        "consiglio": "Salir de Nuwara Eliya al amanecer, para llegar al borde antes de las nubes."
      },
      {
        "nome": "Victoria Park y el lago",
        "testo": "Un parque ordenado de estilo inglés, con parterres y aves, en el corazón de la «pequeña Inglaterra» de Sri Lanka.",
        "come": "A pie desde el centro.",
        "tempo": "1 hora"
      },
      {
        "nome": "Ceremonia del té y relax",
        "testo": "El té de la tarde en el Grand Hotel, un masaje o un paseo a la cascada de Lover's Leap, de unos 30 metros, entre las plantaciones.",
        "tempo": "medio día",
        "costo": "Actividades 5.000-8.000 LKR (del viaje de 2023)"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Temprano por la mañana: World's End en Horton Plains",
          "Almuerzo en Nuwara Eliya",
          "Tarde: Pedro Tea Plantation y té en el Grand Hotel"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro de Nuwara Eliya",
        "perChi": "quien quiera caminar",
        "testo": "Hoteles y restaurantes a pocos minutos del parque y el mercado. Más ruido y tráfico."
      },
      {
        "nome": "Colinas del té",
        "perChi": "vistas y calma",
        "testo": "Plantaciones y resorts con encanto como el Heritance Tea Factory, más lejos del centro."
      }
    ],
    sapori: [
      {
        "nome": "Té de Nuwara Eliya",
        "testo": "El té de las plantaciones de altura, claro y aromático, para probar en la fábrica o en el Grand Hotel."
      },
      {
        "nome": "Restaurantes locales",
        "testo": "De Silva Food Center, Grand Indian, Grand Thai o Themparadu, el más local."
      },
      {
        "nome": "Fresas",
        "testo": "El clima fresco las hace crecer en altura: se venden junto a las carreteras."
      },
      {
        "nome": "Verduras de altura",
        "testo": "Zanahorias, coles y patatas cultivadas en terrazas, en los curris locales."
      }
    ],
    attenzioni: [
      "El frío: a 1.868 metros de altitud las noches son frescas y en Horton Plains hace aún más frío. Lleva un forro polar.",
      "En World's End sin sol no hay panorama: comprueba las condiciones y sal temprano.",
      "No lleves plástico de un solo uso a Horton Plains, donde está prohibido.",
      "En los senderos permanece siempre en el camino señalizado: hay precipicios sin protección."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Los valles de té verdes alrededor de Nuwara Eliya, Sri Lanka',
    immagine: '/images/sri-lanka/nuwara-eliya-stock.jpg',
  },
  {
    slug: 'ella',
    paeseSlug: 'sri-lanka',
    ordine: 8,
    nome: 'Ella',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '1 día, más el tren panorámico para llegar',
    visitataPersonalmente: true,
    introduzione: 'El tren panorámico desde Nuwara Eliya, el Nine Arches Bridge y los miradores sobre las colinas de té más fotografiadas de Sri Lanka.',
    percheAndarci: 'Por el tren panorámico más famoso de la isla y por los muchos miradores a dos pasos del pueblo.',
    cosaVedere: ['El Nine Arches Bridge', "Lipton's Seat", 'Las cascadas de Ravana, a unos 6 km de Ella'],
    cosaFare: [
      'El tren panorámico Nuwara Eliya-Ella (hay una ficha de experiencia dedicada)',
      'La tirolina Flying Ravana (unos 20 €, a 15 minutos de Ella)',
      'Un masaje en el Spa Ceylon',
      'La clase de cocina con cena organizada por el DMC',
    ],
    doveDormire:
      "Dormimos en el 88th Hotel, 4/5 en Tripadvisor y uno de los sitios más recomendados de la zona: céntrico, cerca de Ella Rock y del Nine Arches Bridge, con una acogida calurosa. Mejor ir con las expectativas correctas: sin aire acondicionado, sin ascensor, cama rígida con solo las sábanas.\n\nEconómicos: Ella Alpine Resort, Rock Side Inn. Gama media: Arawe Retreat, Zion View Ella Green Retreat. Lujo: 98 Acres Resort & Spa, Nine Skies.",
    doveMangiare: 'Clase de cocina con cena del DMC; copas después de cenar en el One Love Ella (ojo con las bebidas que ofrecen en la mesa, que a menudo acaban en la cuenta).',
    comeArrivare: 'Con el tren panorámico desde Nuwara Eliya (estación de Nanu Oya): sobre el papel 3 horas, pero los horarios reales son imprevisibles.',
    comeSpostarsi: 'A pie para los miradores cercanos al pueblo.',
    periodoMigliore: 'no tengo indicaciones precisas sobre la mejor temporada para Ella: nosotros estuvimos en noviembre',
    costi: 'Tirolina Flying Ravana unos 20 €.',
    erroriDaEvitare: ['Esperar para reservar los billetes del tren panorámico: hay que sacarlos con mucha antelación, porque se agotan enseguida, sobre todo en temporada alta'],
    miaEsperienza:
      "El tren panorámico llegó con horas de retraso y sin nada de comer a bordo. Los valles de té a pérdida de vista desde la ventanilla, sin embargo, están entre las imágenes más bonitas de todo el viaje. Hay que subirse con el espíritu adecuado: los retrasos son lo normal.",
    luoghi: [
      {
        "nome": "Tren panorámico Nuwara Eliya-Ella",
        "testo": "El tramo más famoso del ferrocarril de la meseta, entre valles de té hasta donde alcanza la vista. El tren llegó con horas de retraso y sin nada de comer a bordo, pero las imágenes desde la ventanilla están entre las más bellas del viaje.",
        "come": "Se sube en la estación de Nanu Oya, para Nuwara Eliya; sobre el papel 3 horas, pero los horarios reales son imprevisibles.",
        "quando": "Por la mañana. Los asientos reservados se reservan en el portal oficial de Sri Lanka Railways y se recogen en la taquilla con el código y el pasaporte: hay que sacarlos con mucha antelación, porque se agotan enseguida, sobre todo en temporada alta.",
        "url": "https://seatreservation.railway.gov.lk/mtktwebslr/",
        "tempo": "3 horas sobre el papel (viaje de 2023), a menudo muchas más",
        "consiglio": "Subir con el espíritu adecuado: los retrasos son la norma. Lleva comida y agua."
      },
      {
        "nome": "Nine Arches Bridge",
        "testo": "Un viaducto ferroviario de nueve arcos en piedra, ladrillo y cemento, terminado en 1919: mide 91 metros de largo y 24 de alto, inmerso en la selva. El momento de mayor encanto es cuando pasa el tren.",
        "come": "En Demodara, entre las estaciones de Ella y Demodara: en tuk-tuk y luego a pie por un sendero.",
        "quando": "Cuando pasa un tren: pregunta los horarios en la casa de huéspedes.",
        "tempo": "1 hora",
        "consiglio": "No camines por las vías cuando llega un tren."
      },
      {
        "nome": "Lipton's Seat",
        "testo": "El mirador sobre las plantaciones de té de la finca de Dambatenne, que lleva el nombre de Thomas Lipton, el rey del té. No está en Ella sino encima de Haputale: merece la excursión si el cielo está despejado.",
        "come": "En furgoneta o tuk-tuk desde Ella hasta Haputale, y luego subiendo por la carretera de la finca de Dambatenne.",
        "quando": "Temprano por la mañana, antes de las nubes.",
        "tempo": "medio día desde Ella"
      },
      {
        "nome": "Tirolina Flying Ravana",
        "testo": "Una tirolina de dos cables de 550 metros sobre las colinas de Ella. Sale de Mini Adam's Peak y pasa por encima de las plantaciones de té.",
        "come": "En tuk-tuk desde Ella, pocos minutos (unos 15 en el viaje de 2023).",
        "url": "https://www.flyingravana.com/",
        "tempo": "1,5 horas",
        "costo": "Unos 20 € (del viaje de 2023)"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Tren panorámico desde Nanu Oya (posibles retrasos)",
          "Llegada a Ella y almuerzo",
          "Tarde: Nine Arches Bridge a la hora del tren",
          "Clase de cocina con cena"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: tren panorámico y Nine Arches Bridge",
          "Día 2: Lipton's Seat al amanecer (encima de Haputale), luego tirolina y masaje por la tarde"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro de Ella",
        "perChi": "comodidad y vida nocturna",
        "testo": "Casas de huéspedes como el 88th Hotel, cerca de Ella Rock y del Nine Arches Bridge. Ruidoso por la noche en la calle principal."
      },
      {
        "nome": "Colinas fuera del centro",
        "perChi": "quien busque vistas y calma",
        "testo": "Resorts y villas entre las plantaciones, con amplias vistas. Hace falta tuk-tuk para ir al pueblo."
      }
    ],
    sapori: [
      {
        "nome": "Clase de cocina",
        "testo": "Se aprende a hacer curri de coco, sambol y dal; la cena es parte de la clase."
      },
      {
        "nome": "Kottu",
        "testo": "Tiras de roti salteadas con verduras y huevo, en los locales de la calle principal."
      },
      {
        "nome": "Té de las colinas",
        "testo": "De las plantaciones alrededor de Ella, en cafeterías con vistas."
      },
      {
        "nome": "Rice and curry",
        "testo": "La comida básica, en cada casa de huéspedes."
      }
    ],
    attenzioni: [
      "Tren panorámico: las entradas se agotan enseguida y los retrasos de horas son la norma. Reserva con mucha antelación y no planees conexiones ajustadas.",
      "One Love Ella y locales similares: las bebidas que ofrecen en la mesa suelen acabar en la cuenta.",
      "Algunas habitaciones no tienen aire acondicionado, ascensor ni camas blandas: lee bien la descripción antes de reservar.",
      "En las vías del Nine Arches Bridge no te quedes quieto cuando llega un tren."
    ],
    esperienzeSlugs: ['treno-panoramico-ella'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'Una vieja locomotora con el faro encendido entre las vías cubiertas de hierba de las tierras altas de Sri Lanka',
    immagine: '/images/sri-lanka/treno-locomotiva-altipiani-riccardo.jpg',
  },
  {
    slug: 'hikkaduwa',
    paeseSlug: 'sri-lanka',
    ordine: 9,
    nome: 'Hikkaduwa',
    tipologia: ['mare', 'relax'],
    giorniConsigliati: '2-3 días, incluido el safari en Yala por el camino',
    visitataPersonalmente: true,
    introduzione: 'El safari en el Parque Nacional de Yala y las playas del sur: la parte relajada del viaje, después de días de templos y trekking.',
    percheAndarci: 'Para cerrar el viaje junto al mar, después de todos los templos, safaris y trekkings de los días anteriores.',
    cosaVedere: ['El Parque Nacional de Yala', 'El Tsunami Museum'],
    cosaFare: [
      'Safari en Yala, uno de los parques con mayor densidad de leopardos del mundo (hay una ficha de experiencia dedicada)',
      'Nadar con tortugas: el mejor punto es delante del Hikka Tranz by Cinnamon Hotel',
      'Tsunami Museum',
      'Big Buddha, surf, snorkel, buceo, safari en barca por el río Madu',
    ],
    doveDormire:
      "Dormimos en el Sapphire Seas Beachfront Hotel, con reseñas muy positivas: un hotel boutique justo en el mar, habitaciones espaciosas y una limpieza que mencionan muchos. Alguien lo describe como \"un oasis\" respecto a las zonas más transitadas de Hikkaduwa.\n\nEconómicos: Hilda Guest House, Amaroo Hikkaduwa. Gama media: Sea Star Boutique Hotel, Hikka Tranz by Cinnamon. Lujo: Crystal Sands, Aditya Resort.",
    doveMangiare: "Cena en la playa (tomamos el red snapper: servicio lento pero cena excelente); Steffi's Mandala (vegetariano) o Thambili Cafe a la hora de comer; Sea Salt Society o Canal View para cenar.",
    comeArrivare: 'Unas 2 h 15-2 h 40 de traslado desde Ella, pasando por el safari en Yala.',
    comeSpostarsi: 'A pie por la playa.',
    periodoMigliore: 'noviembre, cuando fuimos, aunque entre un monzón y otro en la costa pueden llegar lluvias y tormentas',
    costi: 'Safari en Yala 12.000-16.000 LKR por jeep, más la entrada (27-30 € por persona) y la propina.',
    erroriDaEvitare: ['Fiarse de los "pescadores sobre postes" a lo largo de la costa sur: ya son casi siempre una puesta en escena de pago para turistas'],
    miaEsperienza:
      "Después de días llenos de templos y trekking, las playas de Hikkaduwa fueron la manera adecuada de cerrar el viaje. El red snapper comido en la playa una noche, con el servicio lento y el mar a dos pasos, es uno de los recuerdos más verdaderos de todo Sri Lanka.",
    luoghi: [
      {
        "nome": "Parque Nacional de Yala",
        "testo": "Uno de los parques con mayor densidad de leopardos del mundo, donde en safari se ven también elefantes, cocodrilos y aves.",
        "come": "En jeep con guía, en la carretera de Ella a Hikkaduwa; el safari dura unas horas.",
        "quando": "A primera hora de la mañana o al final de la tarde, cuando los animales están activos.",
        "tempo": "4 horas",
        "costo": "Jeep 12.000-16.000 LKR, más la entrada (27-30 € por persona) y propina (del viaje de 2023); la entrada básica es de unos 25 USD por adulto extranjero, más impuestos, servicio y vehículo (2026)",
        "consiglio": "Los leopardos no están garantizados: pregunta al conductor dónde se han avistado."
      },
      {
        "nome": "Nadar con tortugas",
        "testo": "El mejor punto de Hikkaduwa está frente al Hikka Tranz by Cinnamon Hotel, donde las tortugas marinas vienen a pastar en las algas.",
        "come": "Desde la playa, con máscara y aletas.",
        "quando": "Por la mañana, con el mar en calma.",
        "tempo": "1-2 horas",
        "consiglio": "No toques ni persigas a las tortugas, y mantén la distancia."
      },
      {
        "nome": "Museo del Tsunami",
        "testo": "Un museo dedicado al tsunami de 2004, que mató a miles de personas en la costa sur. Un momento serio en medio de unas vacaciones de playa.",
        "come": "En tuk-tuk desde Hikkaduwa.",
        "tempo": "1 hora"
      },
      {
        "nome": "Río Madu, surf y Big Buddha",
        "testo": "Safari en barca por el río Madu entre manglares, la gran estatua de Buda en la costa y, para los amantes del mar, surf, snorkel y buceo.",
        "come": "Excursiones desde Hikkaduwa en tuk-tuk o barco.",
        "tempo": "medio día"
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: safari en Yala en el traslado desde Ella y cena en la playa",
          "Día 2: snorkel con tortugas por la mañana, Museo del Tsunami y tarde en la playa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Paseo marítimo de Hikkaduwa",
        "perChi": "vida nocturna y surf",
        "testo": "Locales, escuelas de surf y hoteles a lo largo de la calle principal. Ruidosa y con tráfico."
      },
      {
        "nome": "Hoteles frente al mar fuera del centro",
        "perChi": "calma",
        "testo": "Hoteles boutique como el Sapphire Seas, directamente en la playa, en zonas menos transitadas."
      }
    ],
    sapori: [
      {
        "nome": "Pargo rojo a la parrilla",
        "testo": "Cena en la playa: servicio lento pero pescado excelente. Uno de los recuerdos más verdaderos de Sri Lanka."
      },
      {
        "nome": "Cocina vegetariana",
        "testo": "Steffi's Mandala o Thambili Cafe a la hora del almuerzo."
      },
      {
        "nome": "Marisco",
        "testo": "Sea Salt Society o Canal View a la cena."
      },
      {
        "nome": "Coco fresco",
        "testo": "Thambili, el coco anaranjado, vendido a lo largo de la playa."
      }
    ],
    attenzioni: [
      "Los «pescadores sobre zancos» de la costa sur: hoy son casi siempre una puesta en escena de pago para turistas.",
      "En octubre y noviembre, entre los dos monzones, en la costa sur pueden llegar tormentas y mar agitado: pregunta en el hotel antes de bañarte.",
      "Safari en Yala: elige operadores que respeten las distancias a los animales y los límites de jeeps en los avistamientos.",
      "Corrientes y olas altas en el sur: nada donde haya otras personas y respeta las banderas."
    ],
    esperienzeSlugs: ['safari-yala'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: 'La playa de Hikkaduwa en la costa sur de Sri Lanka',
    immagine: '/images/sri-lanka/hikkaduwa-stock.jpg',
  },
]
