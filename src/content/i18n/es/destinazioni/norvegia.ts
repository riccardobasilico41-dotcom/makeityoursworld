import type { Destinazione } from '@/lib/types'

export const destinazioniNorvegia: Destinazione[] = [
  {
    slug: 'oslo',
    paeseSlug: 'norvegia',
    ordine: 1,
    nome: 'Oslo',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      "1 día, tanto a la ida como a la vuelta, en el viaje a las Lofoten; 2-3 días completos en el itinerario «Capitales nórdicas», como parada final después de Copenhague y Estocolmo",
    visitataPersonalmente: true,
    introduzione:
      "La capital noruega: jardines reales, paseo marítimo de Aker Brygge, museos de arte contemporáneo y la Ópera asomada al fiordo. En el viaje a las Lofoten es punto de entrada y de salida, un día por sentido; en el itinerario «Capitales nórdicas» se convierte en una parada completa, con el parque de esculturas de Vigeland, los museos de la península de Bygdøy y una salida por el fiordo.",
    percheAndarci:
      "Un día de cultura y paseos a pie que funciona bien tanto para abrir como para cerrar el viaje a las Lofoten, antes o después del vuelo interno hacia Bodø. Como parada final de un recorrido por capitales nórdicas, aguanta bien 2-3 días completos entre el centro, Bygdøy y el fiordo.",
    cosaVedere: [
      'Jardines del Palacio Real',
      'Paseo marítimo de Aker Brygge',
      'Museo Astrup Fearnley (edificio de Renzo Piano)',
      'Oslo Opera House, con subida al tejado para la vista sobre la ciudad y el mar',
      "El Vigeland Park (Frognerparken), el mayor parque de esculturas del mundo obra de un solo artista: más de 200 estatuas de bronce, granito y hierro de Gustav Vigeland, entrada libre y siempre abierto. Es la atracción más visitada de toda Noruega",
      "La península de Bygdøy, con el Fram Museum (dedicado al barco polar usado por Nansen y Amundsen) y el Kon-Tiki Museum (la balsa de Thor Heyerdahl): el Viking Ship Museum de la misma península, en cambio, está cerrado por una reforma que debería durar hasta 2027, con los barcos vikingos en traslado hacia el nuevo Museum of the Viking Age: antes de programar la visita conviene comprobar la fecha de reapertura",
    ],
    cosaFare: [
      'Paseo a pie desde el Palacio Real hasta Aker Brygge y la Ópera',
      'Subida al tejado de la Ópera para la vista, con una parada para tomar un té caliente en el bar interior',
      'Un paseo entre las esculturas del Vigeland Park (véase la ficha de experiencia dedicada)',
      'Una mañana en los museos de Bygdøy (Fram Museum y Kon-Tiki Museum), véase la ficha de experiencia dedicada',
      'Un crucero de dos horas por el Oslofjord, entre las islas y las bahías al sur de la ciudad (véase la ficha de experiencia dedicada)',
    ],
    doveDormire:
      "Dormí en el Citybox Hotel, a 5 minutos a pie de Oslo S: design-hotel económico, check-in automático, habitaciones esenciales pero limpias, camas cómodas, cafetera en la habitación. Las reseñas (Tripadvisor, más de 2.400 opiniones, puntuación 4/5) confirman mi impresión: excelente relación calidad-precio para los estándares de Oslo y ubicación comodísima, frente a un estilo minimalista por elección (sin recepción física) y alguna queja sobre habitaciones ruidosas si dan al tranvía. Aconsejo pedir una habitación del lado interior.\n\nAlternativas en Oslo. Económicas: Saga Poshtel (a pocos pasos de Oslo S), Comfort Hotel Xpress Central Station (dos minutos de Jernbanetorget) · gama media (aquí entra también el Citybox elegido): Comfort Hotel Karl Johan (250 m de Oslo S) · gama alta sin exagerar: Amerikalinjen (hotel histórico y boutique cerca de la estación), The Thief (design hotel en el paseo marítimo de Tjuvholmen, con spa interior).",
    doveMangiare:
      "Cena en Rorbua (Aker Brygge): cocina noruega tradicional, raciones generosas, precios en la media, ambiente cálido de madera. Si se vuelve a Oslo al final del viaje, Café Sara va bien para la última cena: local sencillo pero abierto hasta tarde, cómodo después de un vuelo nocturno (en fin de semana conviene reservar).",
    comeArrivare:
      "Vuelo internacional a Oslo Gardermoen; desde el aeropuerto el tren Flytoget lleva al centro en 19 minutos (unas 210 NOK, salidas cada 10 minutos). Desde Estocolmo, para quien llega como parada final de «Capitales nórdicas»: tren directo SJ (unas 5 h 45) o vuelo interno (aproximadamente 1 h).",
    comeSpostarsi: 'A pie por el centro; Flytoget desde/hacia el aeropuerto; para Bygdøy, autobús urbano o ferri de temporada desde el ayuntamiento.',
    periodoMigliore: "para la sola parada de tránsito vale el verano del viaje a las Lofoten; mayo-septiembre para una estancia completa, con el crucero por el fiordo y el Vigeland Park en su mejor momento con los días largos",
    costi:
      "Flytoget unas 210 NOK por tramo; cenas en la media para los estándares noruegos (de todos modos caras en comparación con Italia). Vigeland Park: entrada libre. Fram Museum: unas 180 NOK (unos 16 €). Crucero por el Oslofjord de 1,5-2 horas: aproximadamente 45-70 € por persona.",
    erroriDaEvitare: [
      'Si se va a Café Sara en fin de semana, reservar: por la noche es un local muy concurrido',
      'Programar la visita al Viking Ship Museum de Bygdøy sin informarse antes: está cerrado por reforma, con reapertura prevista no antes de 2027',
    ],
    miaEsperienza:
      "Oslo para mí fue una parada breve pero agradable en ambos extremos del viaje: una tarde de paseo tranquilo el primer día, y una última cena relajada en Café Sara al regreso, después de una semana de trekking.",
    luoghi: [
      {
        nome: "Parque Vigeland (Frognerparken)",
        testo: "El mayor parque de esculturas de un solo artista: 212 esculturas de bronce y granito de Gustav Vigeland, incluido el Monolito de 14 metros con 121 cuerpos entrelazados. El Frognerparken es la atracción turística más visitada de Noruega.",
        come: "Metro o tranvía hasta Majorstuen/Vigelandsparken, luego 10 minutos a pie. Se camina por un eje de unos 850 metros desde la puerta al monolito.",
        quando: "Siempre abierto, entrada libre. Temprano por la mañana o tarde de verano para ver las esculturas sin multitudes.",
        tempo: "1,5-2 horas",
        costo: "entrada libre",
        url: "https://www.vigeland.museum.no",
        consiglio: "El museo Vigeland, junto al parque, tiene los estudios del artista: útil una hora si llueve."
      },
      {
        nome: "Ópera de Oslo",
        testo: "Teatro de ópera y ballet junto al fiordo, abierto en 2008 y diseñado por Snøhetta, con un tejado de mármol inclinado por el que se camina. La vista de la ciudad y el mar compensa la subida.",
        come: "A pie desde la estación central (unos 5 minutos). El tejado está siempre abierto, incluso sin entrada para los espectáculos.",
        quando: "Al atardecer, o con cielo despejado por la vista del Oslofjord.",
        tempo: "45 minutos-1 hora",
        costo: "tejado: entrada libre",
        url: "https://www.operaen.no",
        consiglio: "Tras la subida, un té caliente en el bar interior: la mejor manera de entrar en calor."
      },
      {
        nome: "Fortaleza de Akershus",
        testo: "Fortaleza medieval de 1300 sobre el puerto, luego castillo renacentista. El parque es gratuito y las murallas ofrecen una bonita vista del puerto de Oslo; dentro están el museo militar y el de la Resistencia.",
        come: "A pie desde el centro en 10-15 minutos; entrada libre al parque.",
        quando: "De día; la fortaleza la vigila la Guardia Real. Dentro están también el Museo de las Fuerzas Armadas y el de la Resistencia.",
        tempo: "1,5 horas",
        costo: "parque libre; museos y castillo con entrada aparte",
        consiglio: "Subir a las murallas al atardecer: la luz sobre el fiordo es la mejor."
      },
      {
        nome: "Península de Bygdøy: Fram y Kon-Tiki",
        testo: "El Museo Fram guarda el barco polar de Nansen y Amundsen, intacto y visitable a bordo. Al lado el Museo Kon-Tiki expone la balsa con la que Thor Heyerdahl cruzó el Pacífico en 1947. El museo de los barcos vikingos está cerrado por reforma hasta 2027: comprobar la reapertura.",
        come: "En verano el ferri a Bygdøy sale de Rådhusbryggen; alternativamente el bus 30. Los museos están a pocos minutos uno del otro.",
        quando: "Mañana, para tener las salas con menos grupos.",
        tempo: "3-4 horas",
        costo: "Museo Fram 180 NOK adultos (2026); Kon-Tiki con entrada aparte",
        url: "https://www.frammuseum.no",
        consiglio: "Los dos museos caben bien en media jornada; evitar los lunes festivos, cuando está concurrido."
      },
      {
        nome: "Munch y Nasjonalmuseet",
        testo: "El museo Munch, en Bjørvika, reúne gran parte de la obra de Edvard Munch; el Nasjonalmuseet, la mayor colección de arte, arquitectura y diseño de Noruega, tiene otra versión de El grito (1893). Dos edificios cerca del fiordo, en el barrio más nuevo.",
        come: "Munch a 10 minutos a pie de la estación; el Nasjonalmuseet a 15 minutos del centro.",
        quando: "Mañana entre semana; reservar online para las entradas con hora.",
        tempo: "2-3 horas cada uno",
        costo: "Munch 220 NOK adultos (2026)",
        url: "https://www.munch.no",
        consiglio: "Comparar las versiones de El grito: las diferencias se ven en persona."
      },
      {
        nome: "Holmenkollen",
        testo: "El trampolín de salto de esquí de Oslo, con museo del esquí y simulador, sobre la ciudad. La vista del fiordo y del bosque es la razón para subir.",
        come: "Metro línea 1 hasta Holmenkollen. El camino hasta el trampolín es a pie.",
        quando: "De día, con cielo despejado; en invierno suele haber nieve.",
        tempo: "2 horas",
        url: "https://www.holmenkollen.com",
        consiglio: "Subir con el metro de la tarde y bajar a pie por el bosque."
      },
      {
        nome: "Aker Brygge y Astrup Fearnley",
        testo: "La antigua zona de astilleros, hoy paseo marítimo con restaurantes, y el museo de arte contemporáneo Astrup Fearnley, edificio de Renzo Piano. Tjuvholmen, cerca, tiene esculturas al aire libre.",
        come: "A pie desde el Palacio Real por el paseo marítimo, unos 20 minutos.",
        quando: "Tarde de verano, por las mesas al aire libre sobre el fiordo.",
        tempo: "2 horas",
        url: "https://www.afmuseet.no",
        consiglio: "Caminar hasta Tjuvholmen: la playa urbana es gratuita."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Parque Vigeland",
          "Almuerzo en el centro",
          "Ópera (tejado)",
          "Paseo por Aker Brygge",
          "Cena en Aker Brygge"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Bygdøy (Fram y Kon-Tiki)",
          "Tarde en el Munch o el Nasjonalmuseet",
          "Akershus al atardecer"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: Holmenkollen por la mañana",
          "Crucero de dos horas por el Oslofjord",
          "Última cena en el centro"
        ]
      }
    ],
    zone: [
      {
        nome: "Sentrum y Oslo S",
        perChi: "Quien llega en tren o tiene poco tiempo",
        testo: "Cerca de la estación, la Ópera y los buses al aeropuerto. El Citybox donde dormí está a 5 minutos de la estación. Ruidoso de noche cerca de la estación."
      },
      {
        nome: "Grünerløkka",
        perChi: "Quien busca bares, cafés y vida nocturna",
        testo: "El barrio más joven, a 15 minutos a pie del centro. Muchos locales, más ruido los fines de semana."
      },
      {
        nome: "Frogner y Majorstuen",
        perChi: "Quien quiere tranquilidad y el parque",
        testo: "Barrio residencial cerca del Vigeland; alojamiento algo más caro, buenas conexiones."
      }
    ],
    sapori: [
      {
        nome: "Brunost",
        testo: "Queso pardo y dulce de suero de leche, en lonchas sobre pan o gofres."
      },
      {
        nome: "Fårikål",
        testo: "El plato nacional: cordero y col hervida con pimienta en grano, típico del otoño."
      },
      {
        nome: "Gambas del puerto (reker)",
        testo: "Se compran frescas en los barcos de Aker Brygge, con pan y mayonesa."
      },
      {
        nome: "Kanelboller",
        testo: "Rollos de canela y cardamomo, para probar en las panaderías del centro."
      }
    ],
    attenzioni: [
      "El alcohol fuerte se vende solo en Vinmonopolet; en los supermercados la cerveza se vende hasta las 20 entre semana y hasta las 18 los sábados.",
      "Carteristas en torno a la estación y Karl Johans gate: llevar bolso y móvil por delante.",
      "Los patinetes eléctricos y las bicis corren por los carriles bici: mirar antes de cruzar.",
      "El metro se usa con billetes de la app Ruter: comprar antes de subir, los controles existen."
    ],
    esperienzeSlugs: ['vigeland-park-oslo', 'bygdoy-musei-fram-kontiki', 'oslofjord-crociera'],
    tripSlugs: ['lofoten-estate-2025', 'capitali-nordiche'],
    imageAlt: 'Fachada de cristal y mármol de la Oslo Opera House, con personas en el tejado inclinado',
    immagine: '/images/norvegia/oslo-stock.jpg',
  },
  {
    slug: 'bodo',
    paeseSlug: 'norvegia',
    ordine: 2,
    nome: 'Bodø',
    tipologia: ['natura'],
    giorniConsigliati: 'pocas horas, parada de paso dos veces (ida y vuelta)',
    visitataPersonalmente: true,
    introduzione: 'El punto de tránsito obligado entre Oslo y las Lofoten: aquí se llega en avión, se recoge el coche de alquiler y se cogen los ferris hacia el archipiélago.',
    percheAndarci: 'De todos modos hay que atravesarla, y tiene lo suficiente para ocupar bien unas horas entre un vuelo y un ferri.',
    cosaVedere: ['Nyholms Fort, mirador a 10 minutos a pie del puerto', 'Playa de Mjelle'],
    cosaFare: [
      'Paseo por el centro y el muelle a pie',
      'Ferri hacia Misten/Kjerringøy (unos 10 minutos, uno se queda en el coche, llegar 30 minutos antes): a mí no me entusiasmó, pero es una manera honesta de ocupar unas horas. Si el Bodø/Glimt juega en casa, puede valer la pena ir al partido',
    ],
    doveDormire: 'No pernocté en Bodø, solo pasé por allí: no tengo una dirección que recomendar para quien quiera quedarse una noche.',
    doveMangiare:
      'Bryggerikaia (abre a media mañana): excelentes bocadillos «megarrellenos» para llevar, para comer en el mirador de la ciudad. Melkebaren para desayunar: bueno, pero el servicio es lento, algo que hay que tener en cuenta si se va justo de tiempo.',
    comeArrivare: 'Vuelo interno desde Oslo Gardermoen.',
    comeSpostarsi: 'A pie por el centro; coche de alquiler para el resto de los desplazamientos.',
    periodoMigliore: 'pasé por allí en verano, a la ida y a la vuelta de las Lofoten; para los demás meses no tengo una referencia directa',
    costi: 'no anoté los costes de esta parada',
    erroriDaEvitare: ['Tener en cuenta el servicio lento de Melkebaren si hay poco tiempo entre un ferri y otro'],
    miaEsperienza:
      'Para nosotros fue una parada logística tanto a la ida como a la vuelta, pero con lo bastante que hacer (playa de Mjelle, el mirador de Nyholms Fort) como para no parecer tiempo perdido.',
    luoghi: [
      {
        nome: "Nyholms Fort",
        testo: "Un viejo fuerte en la punta del puerto de Bodø, hoy con vista del puerto y las islas. Se llega en 10 minutos a pie desde el puerto.",
        come: "A pie desde el puerto.",
        quando: "Última hora de la tarde, con luz sobre las islas.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "El punto más cómodo para una foto panorámica antes de embarcar."
      },
      {
        nome: "Playa de Mjelle",
        testo: "Una larga playa de arena al norte del centro, entre dunas y mar. En verano se camina también de noche con la luz larga.",
        come: "En coche o bus local desde Bodø.",
        quando: "Verano, tarde.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "Llevar cortavientos: el viento del norte es fuerte."
      },
      {
        nome: "Saltstraumen",
        testo: "Una de las corrientes de marea más fuertes del mundo, al sureste de Bodø: en cada ciclo de marea pasan hasta 400 millones de metros cúbicos de agua, formando remolinos. No lo visité, pero es la excursión clásica desde Bodø.",
        come: "En coche o bus desde Bodø.",
        quando: "Consultar las tablas de mareas: la corriente es más fuerte a media marea, aproximadamente cada seis horas.",
        tempo: "2-3 horas",
        consiglio: "Para mirar desde el puente; no se baña uno."
      }
    ],
    sapori: [
      {
        nome: "Bocadillos para llevar",
        testo: "En Bryggerikaia se comen bocadillos rellenos para llevar al mirador."
      },
      {
        nome: "Desayuno",
        testo: "En Melkebaren, aunque el servicio es lento."
      }
    ],
    attenzioni: [
      "Si se va a las Lofoten en ferri, llegar 30-40 minutos antes: en verano las colas son largas.",
      "En verano los alojamientos de Bodø se llenan pronto: reservar con antelación."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Vista desde arriba del puerto de Bodø, con casitas rojas en el muelle y la carretera costera',
    immagine: '/images/norvegia/bodo-stock.jpg',
  },
  {
    slug: 'svolvaer',
    paeseSlug: 'norvegia',
    ordine: 3,
    nome: 'Svolvær',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 noches, primera base del viaje',
    visitataPersonalmente: true,
    introduzione: 'El puerto principal de las Lofoten y la primera base logística del viaje: desde aquí se sale para la excursión en zódiac al Trollfjord y para la excursión a Henningsvær.',
    percheAndarci: 'Ubicación central para los primeros días en el archipiélago, con el mejor restaurante de todo el viaje.',
    cosaVedere: ['El puerto de Svolvær'],
    cosaFare: ['Excursión en RIB al Trollfjord (véase la ficha de experiencia dedicada)', 'Desayuno en Kringla, panadería muy buena cerca de los apartamentos'],
    doveDormire:
      'Dormí en un apartamento con vistas al puerto en el Nordis Apartment: ventanales, terraza panorámica, cocina americana. En Booking.com tiene una puntuación de 8,7/10 (417 reseñas) y 9,7/10 por la ubicación — números que confirman mi impresión: espacios amplios y limpios, una vista que por sí sola vale la estancia, cómodo para quien quiere cocinar por la noche en lugar de salir siempre.\n\nAlternativas en Svolvær. Económicas: Lofoten Feriesenter (camping y cabañas, desde unas 200 NOK por persona), Lofoten Sommerhotell og Vandrerhjem (albergue en Kabelvåg, sauna y desayuno incluido) · gama media (aquí entra el Nordis Apartment elegido): Thon Hotel Lofoten (céntrico, vistas al puerto) · gama alta sin exagerar: Thon Hotel Svolvær (gran hotel en el paseo marítimo, prismáticos en cada habitación), Svinøya Rorbuer (rorbu históricos con cocina propia, el mejor valorado de Svolvær en Tripadvisor).',
    doveMangiare:
      'Bacalo para una cena en la media. Paleo Arctic fue el mejor restaurante de todo el viaje: precios algo por encima de la media, pero calidad mucho más alta. Hay que reservar con tiempo.',
    comeArrivare: 'Desde Bodø: unas 3 h 15 de conducción hasta Bognes, ferri Bognes-Lødingen (llegar con 40 minutos de antelación), luego otra 1 h 40 en coche hasta Svolvær.',
    comeSpostarsi: 'Coche de alquiler.',
    periodoMigliore: 'estuve en verano; para los demás meses no tengo una referencia directa',
    costi: 'no anoté los costes de esta parada',
    erroriDaEvitare: ['Reservar con tiempo tanto el Trollfjord como una cena en Paleo Arctic: son las dos experiencias más solicitadas de la zona'],
    miaEsperienza:
      'Svolvær fue la base adecuada para los primeros días: cómoda para el Trollfjord y para Henningsvær, y allí hicimos la mejor cena de todo el viaje, en el Paleo Arctic.',
    luoghi: [
      {
        nome: "Puerto de Svolvær",
        testo: "El puerto de la capital de las Lofoten, con antiguos cobertizos de pesca (rorbuer) y barcos. De aquí salen los RIB para el Trollfjord y los barcos a las islas.",
        come: "A pie desde el centro.",
        quando: "Tarde, por la luz y el pescado en el muelle.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Un apartamento con vista al puerto: opción práctica para cocinar y descansar."
      },
      {
        nome: "Trollfjord",
        testo: "Un fiordo estrecho de unos 2 km, con paredes empinadas y una boca de apenas un centenar de metros. En verano el paseo en RIB (lancha rápida) es la forma más habitual de entrar.",
        come: "Excursión reservada con operador desde Svolvær, 2-3 horas.",
        quando: "Verano, con cielo despejado.",
        tempo: "2-3 horas",
        consiglio: "Reservar con antelación: los RIB se llenan."
      },
      {
        nome: "Svolværgeita",
        testo: "Una roca de dos cuernos, Storhorn y Lillehorn, sobre el pueblo: los escaladores saltan el vacío de metro y medio entre ambos, con el cementerio 300 metros más abajo. A la base se llega por un sendero empinado.",
        come: "Sendero desde el pueblo, bien señalizado pero empinado.",
        quando: "Un día sin nubes.",
        tempo: "3-4 horas",
        consiglio: "No es para quien sufre de vértigo."
      },
      {
        nome: "Kabelvåg y Lofotr",
        testo: "A las afueras de Svolvær, el Lofotmuseet en el antiguo puerto de Kabelvåg cuenta la pesca; en Borg el Lofotr Viking Museum tiene una reconstrucción de una casa de jefe vikingo, abierta del 1 de mayo al 15 de septiembre.",
        come: "En coche, unos 10 minutos a Kabelvåg y 55 a Borg.",
        quando: "Jornada completa.",
        tempo: "2-3 horas",
        url: "https://lofotr.no",
        consiglio: "El Lofotr Viking Museum se visita por libre; en verano hay actividades en vivo."
      }
    ],
    sapori: [
      {
        nome: "Bacalao seco (tørrfisk)",
        testo: "Bacalao secado al aire en los tradicionales soportes de madera; se come en sopa o con patatas."
      },
      {
        nome: "Skrei",
        testo: "Bacalao ártico de la temporada invernal, de enero a abril, en los restaurantes locales."
      },
      {
        nome: "Paleo Arctic",
        testo: "El restaurante donde mejor cené en todo el viaje: reservar con tiempo."
      }
    ],
    attenzioni: [
      "Las carreteras de las Lofoten son estrechas y con muchos puentes: cuidado con autobuses y autocaravanas.",
      "Reservar el Trollfjord y las cenas con antelación en verano.",
      "Rige el derecho de libre acceso a la naturaleza, pero sin acampar cerca de casas ni dormir en los aparcamientos de los pueblos."
    ],
    esperienzeSlugs: ['trollfjord-rib'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'La iglesia de Svolvær con las casas rojas del puerto sobre un cielo tormentoso, Lofoten',
    immagine: '/images/norvegia/svolvaer-stock.jpg',
  },
  {
    slug: 'henningsvaer',
    paeseSlug: 'norvegia',
    ordine: 4,
    nome: 'Henningsvær',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: 'media jornada, de excursión desde Svolvær (unos 30 minutos en coche)',
    visitataPersonalmente: true,
    introduzione: 'La «pequeña Venecia» de las Lofoten: un pueblo de pescadores con el campo de fútbol más fotografiado de Noruega y un ambiente bohemio entre panaderías, artesanía y boutiques vintage.',
    percheAndarci: 'Uno de los pueblos más fotogénicos del archipiélago, con una excelente comida junto al canal y el punto de partida para el Festvågtind trail.',
    cosaVedere: ['El célebre campo de fútbol, ideal para fotos/dron', 'El canal del pueblo', 'Boutiques vintage y artesanía local'],
    cosaFare: [
      'Comida en Fiskekrogen, junto al canal del pueblo: el efecto «pequeña Venecia» existe, mejor reservar y pedir una mesa junto a la ventana',
      'Paseo por el pueblo, pequeño pero animado',
      'Festvågtind trail por la tarde (véase la ficha de experiencia dedicada)',
    ],
    doveDormire: 'No pernocté en Henningsvær: se duerme en Svolvær, a unos 30 minutos en coche.',
    doveMangiare: 'Fiskekrogen, junto al canal: comida excelente, pero mejor reservar con antelación, sobre todo para una mesa junto a la ventana.',
    comeArrivare: '30 minutos en coche desde Svolvær.',
    comeSpostarsi: 'A pie, el pueblo es pequeño.',
    periodoMigliore: 'estuve en verano; para los demás meses no tengo una referencia directa',
    costi: 'no anoté los costes de esta parada',
    erroriDaEvitare: ['No reservar Fiskekrogen: en las horas punta el restaurante se llena enseguida'],
    miaEsperienza:
      'Henningsvær fue una de las sorpresas del viaje: la comida junto al canal, el campo de fútbol y, por la tarde, el Festvågtind, un trekking más salvaje y menos concurrido que el Reinebringen.',
    luoghi: [
      {
        nome: "Campo de fútbol de Henningsvær",
        testo: "Un campo de césped artificial construido en una pequeña isla de roca, rodeado por el mar. Desde arriba con dron o desde el puente de acceso es una de las fotos más conocidas de las Lofoten.",
        come: "Se llega en coche desde Svolvær (unos 30 minutos) y se aparca en el pueblo.",
        quando: "Temprano por la mañana o al atardecer, con luz suave.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "No entrar al campo durante los partidos o entrenamientos."
      },
      {
        nome: "Canal y puerto",
        testo: "El pueblo se extiende sobre pequeñas islas unidas por puentes, con casas de madera de colores y viejos almacenes de pescado. El aire de pequeña Venecia existe de verdad junto al canal.",
        come: "A pie desde el aparcamiento.",
        quando: "Mañana, antes de los grupos.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "Almuerzo en Fiskekrogen junto al canal: reservar y pedir una mesa junto a la ventana."
      },
      {
        nome: "Festvågtind",
        testo: "Una cima de unos 540 metros sobre el pueblo, con vistas al mar abierto y las islas. El sendero es más salvaje y menos concurrido que el del Reinebringen.",
        come: "El punto de partida está cerca del pueblo; sendero con tramos empinados.",
        quando: "Tarde con cielo despejado.",
        tempo: "3-4 horas",
        costo: "entrada libre",
        consiglio: "Fue una de las sorpresas del viaje: menos turistas, más silencio."
      }
    ],
    sapori: [
      {
        nome: "Fiskekrogen",
        testo: "Restaurante junto al canal con pescado fresco de la zona: excelente, hay que reservar."
      },
      {
        nome: "Bacalao al horno",
        testo: "Plato sencillo con patatas y mantequilla, cocina tradicional."
      }
    ],
    attenzioni: [
      "El aparcamiento del pueblo es pequeño y de pago: llegar pronto.",
      "Para el sendero Festvågtind hacen falta botas de trekking: tras la lluvia resbala."
    ],
    esperienzeSlugs: ['festvagtind-trail'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Henningsvær desde el dron: el campo de fútbol sobre la roca, los secaderos de bacalao y el archipiélago de islotes verdes',
    immagine: '/images/norvegia/henningsvaer-stadio-riccardo.jpg',
  },
  {
    slug: 'reine',
    paeseSlug: 'norvegia',
    ordine: 5,
    nome: 'Reine',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '1-2 días, base para el Reinebringen y la excursión a la playa de Bunes',
    visitataPersonalmente: true,
    introduzione: 'El pueblo emblema de las Lofoten, base para el trekking más icónico del archipiélago y punto de partida del ferri hacia una de las playas más bonitas de la zona.',
    percheAndarci: 'El Reinebringen es el trekking que todo el mundo asocia a las Lofoten, y desde aquí se sale también a la playa de Bunes: para mí fueron dos de las experiencias más fuertes de todo el viaje.',
    cosaVedere: ['El pueblo de Reine', 'El Reinebringen desde arriba'],
    cosaFare: [
      'Trekking al Reinebringen (véase la ficha de experiencia dedicada)',
      'Ferri y excursión a la playa de Bunes (véase la ficha de experiencia dedicada)',
      'Parada en el Viking Museum de Borg en el trayecto desde Svolvær (véase la ficha de experiencia dedicada)',
    ],
    doveDormire: 'No pernocté en Reine: se duerme en Nesland/Flakstad, a pocos minutos en coche.',
    doveMangiare: 'En Reine no anoté restaurantes: el Coop Prix del pueblo es cómodo para organizar un picnic antes de las excursiones.',
    comeArrivare: 'Desde Svolvær vía Leknes (con parada en el Viking Museum de Borg), unos 55 minutos en coche desde Svolvær hasta Borg, luego otros 20-30 minutos hasta Reine.',
    comeSpostarsi: 'Aparcamiento de pago en el pueblo (200 NOK/3 h).',
    periodoMigliore: 'El Reinebringen solo vale la pena con el cielo despejado: consultar las previsiones antes de programar el día.',
    costi: 'Aparcamiento 200 NOK/3 h.',
    erroriDaEvitare: [
      'El Reinebringen requiere un mínimo de entrenamiento por el desnivel; si el cielo está cubierto, mejor aplazarlo, porque la vista lo es todo',
      'Para el ferri hacia Vindstad/Bunes, llegar con al menos 30 minutos de antelación incluso con plazas reservadas',
    ],
    miaEsperienza:
      'Reine fue el punto más intenso del viaje: el Reinebringen (1 h 50 mi tiempo total, entre subida, parada y bajada) y al día siguiente la playa de Bunes, a la que solo se llega en ferri. De todas las paradas, son los dos recuerdos que me traje a casa.',
    luoghi: [
      {
        nome: "Reinebringen",
        testo: "La subida más famosa de las Lofoten: una cima de 448 metros a la que sube una escalera de piedra construida entre 2016 y 2019. Desde la cima se ve Reine con los fiordos y las montañas alrededor.",
        come: "Aparcamiento en el pueblo, sendero bien señalizado; subida empinada pero corta.",
        quando: "Con cielo despejado y sin lluvia, para evitar escalones resbaladizos. Temprano por la mañana o por la tarde.",
        tempo: "unas 1h50 entre subida, descanso y bajada",
        costo: "aparcamiento de pago en el pueblo",
        consiglio: "Comprobar la previsión antes: con nubes no se ve nada desde la cima."
      },
      {
        nome: "Reine y Hamnøy",
        testo: "Pueblo de pescadores con rorbuer rojos sobre rocas que caen al mar, entre las vistas más fotografiadas de Noruega. A pocos minutos de carretera está Hamnøy, con las mismas casas y el puente.",
        come: "A pie en el pueblo; Hamnøy en coche, 5 minutos.",
        quando: "Mañana, con luz suave.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "El supermercado Coop Prix de Reine es cómodo para preparar un picnic."
      },
      {
        nome: "Playa de Bunes",
        testo: "Una playa de arena blanca a la que solo se llega en ferri desde Reine, con una caminata a pie desde el embarcadero. Es uno de los lugares más bellos y menos accesibles del archipiélago.",
        come: "Ferri de temporada desde Reine, luego sendero a pie.",
        quando: "Verano, comprobando antes el horario del ferri.",
        tempo: "media jornada",
        consiglio: "Junto con el Reinebringen, es el recuerdo que me llevé a casa."
      },
      {
        nome: "Lofotr Viking Museum en Borg",
        testo: "El mayor edificio vikingo hallado en Noruega, de 83 metros de largo, reconstruido a tamaño real con barcos, fragua y recreaciones. Abierto del 1 de mayo al 15 de septiembre. Está en la carretera entre Svolvær y Reine.",
        come: "En coche, unos 55 minutos desde Svolvær; parada ideal en el trayecto.",
        quando: "Jornada completa.",
        tempo: "2 horas",
        url: "https://lofotr.no",
        consiglio: "Una parada útil si llueve."
      }
    ],
    sapori: [
      {
        nome: "Tørrfisk",
        testo: "Bacalao seco, símbolo de las Lofoten: se puede comprar envasado en las tiendas."
      },
      {
        nome: "Picnic",
        testo: "El Coop Prix de Reine es la solución más práctica antes de las excursiones."
      }
    ],
    attenzioni: [
      "Reinebringen: hay muchos escalones y el sendero está concurrido; no bajar con prisa, sobre todo con lluvia.",
      "El ferri a Bunes tiene horarios reducidos y puede cancelarse: comprobar el día antes.",
      "Aparcamiento y tráfico en el pueblo son limitados: no dejar el coche en la carretera."
    ],
    esperienzeSlugs: ['reinebringen', 'spiaggia-di-bunes', 'viking-museum-borg'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Vista aérea desde el Reinebringen sobre el pueblo de Reine y los fiordos circundantes',
    immagine: '/images/norvegia/reinebringen-stock.jpg',
  },
  {
    slug: 'nesland-flakstad',
    paeseSlug: 'norvegia',
    ordine: 6,
    nome: 'Nesland / Flakstad',
    tipologia: ['natura'],
    giorniConsigliati: '2-3 noches, segunda base del viaje',
    visitataPersonalmente: true,
    introduzione: 'La base más aislada y silenciosa del viaje: un rorbu asomado directamente al fiordo, punto de partida para el paseo panorámico hacia Nusfjord.',
    percheAndarci: 'Para desconectar del ritmo de los trekkings más famosos con una base tranquila, y para el paseo hacia Nusfjord, menos transitado pero igual de bonito.',
    cosaVedere: ['El fiordo frente al rorbu', 'El pueblo de Nusfjord, al final del paseo panorámico'],
    cosaFare: [
      'Paseo panorámico Nesland-Nusfjord (véase la ficha de experiencia dedicada)',
      'Barbacoa nocturna en el rorbu con la compra hecha en Ramberg',
    ],
    doveDormire:
      'Dormí en un rorbu privado asomado al fiordo, Casa Flakstad, el alojamiento más aislado y silencioso del viaje. Es un establecimiento pequeño, con demasiado pocas reseñas online para citarlas: un rorbu sencillo y esencial, pocas luces, mucho silencio, el fiordo a pocos pasos.\n\nAlternativas en Nesland/Flakstad. Económicas: Ramberg Gjestegård (cabañas sencillas, 850-1050 NOK la noche, descuento en temporada baja), Lofoten Beach Camp (camping de gestión familiar en Ramberg, sauna y zona de picnic) · gama media (aquí entra el rorbu elegido): Lofoten Nesland Guesthouse (puntuación muy alta en las reseñas, ubicación tranquila con vistas al océano) · gama alta sin exagerar: Nusfjord Village & Resort (rorbu históricos reformados en el pueblo de Nusfjord, sauna y jacuzzis incluidos; caro, pero con reseñas entusiastas).',
    doveMangiare:
      'Cena en el Ramberg Resort, buena ubicación a dos pasos de la playa de Ramberg para un paseo digestivo. El supermercado de Ramberg está mejor surtido y es más barato que el Coop de Reine y es el punto de referencia para organizar una barbacoa nocturna (salmón, verduras, guarniciones). Ojo: vende solo cerveza, nada de vino ni licores.',
    comeArrivare: 'Pocos minutos en coche desde Reine.',
    comeSpostarsi: 'Coche de alquiler.',
    periodoMigliore: 'estuve en verano; para los demás meses no tengo una referencia directa',
    costi: 'Cabañas desde 850-1050 NOK/noche para las opciones económicas de la zona.',
    erroriDaEvitare: ['El supermercado de Ramberg no vende vino/licores, solo cerveza: planificar la compra en consecuencia'],
    miaEsperienza:
      'El rorbu de Nesland fue el lugar más silencioso de todo el viaje: ninguna luz artificial, el fiordo a pocos pasos, y una noche de barbacoa de las más relajadas de la semana.',
    luoghi: [
      {
        nome: "Paseo Nesland-Nusfjord",
        testo: "Un sendero panorámico que sigue la costa del fiordo de Nesland hasta el pueblo de Nusfjord, con vistas al mar y a las montañas de Flakstadøya.",
        come: "A pie desde el rorbu, aproximadamente una hora por tramo.",
        quando: "Tarde de verano, con la luz larga.",
        tempo: "2-3 horas ida y vuelta",
        consiglio: "El silencio y las pocas luces del lugar son lo mejor."
      },
      {
        nome: "Nusfjord",
        testo: "Un pueblo de pescadores bien conservado en la costa sur de Flakstadøya, con rorbuer rojos y un pequeño puerto.",
        come: "En coche desde Nesland, 10 minutos; la entrada al pueblo puede ser de pago.",
        quando: "Mañana o tarde, evitando los grupos.",
        tempo: "1 hora",
        consiglio: "Paseo corto, pero mejor con tiempo en calma."
      },
      {
        nome: "Ramberg y las playas de Flakstadøya",
        testo: "Ramberg tiene una larga playa de arena clara, un poco más adelante está Skagsanden y, en la isla vecina de Vestvågøy, Haukland: entre las playas más bellas de las Lofoten. El agua es fría pero el color es caribeño.",
        come: "En coche desde Nesland; Haukland está más lejos, hacia Leknes.",
        quando: "Verano, con sol.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "El supermercado de Ramberg vende solo cerveza, ni vino ni licores."
      }
    ],
    sapori: [
      {
        nome: "Barbacoa en el rorbu",
        testo: "Compra en el supermercado de Ramberg: salmón, verduras y guarniciones son la cena más sencilla."
      }
    ],
    attenzioni: [
      "Ramberg: el supermercado vende solo cerveza; para el vino hay que ir al Vinmonopolet de Leknes.",
      "El rorbu está aislado: llevar compra suficiente y una linterna."
    ],
    esperienzeSlugs: ['nesland-nusfjord'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Rorbu rojos tradicionales con una montaña envuelta en niebla al fondo, Lofoten',
    immagine: '/images/norvegia/nesland-stock.jpg',
  },
  {
    slug: 'a',
    paeseSlug: 'norvegia',
    ordine: 7,
    nome: 'Å',
    tipologia: ['cultura'],
    giorniConsigliati: 'media jornada, de excursión desde Nesland/Flakstad (unos 50 minutos en coche)',
    visitataPersonalmente: true,
    introduzione: 'El pueblo con el nombre más corto del mundo, y quizá el más «histórico» de toda la zona: panadería tradicional y Museo de los Pescadores.',
    percheAndarci: 'Para entender el estilo de vida de las comunidades de pescadores de las Lofoten, con una parada golosa en la panadería del pueblo.',
    cosaVedere: ['El pueblo histórico', 'La panadería tradicional'],
    cosaFare: ['Visita guiada al Museo de los Pescadores (véase la ficha de experiencia dedicada)', "Comida por el camino en Sakrisøy, en Anita's Seafood"],
    doveDormire: 'No pernocté en Å: se duerme en Nesland/Flakstad.',
    doveMangiare:
      "La panadería histórica del pueblo (pocas mesas, pero dulces excelentes). Por el camino, en Sakrisøy, Anita's Seafood: bocadillos rellenos, sopas, sushi, vistas al fiordo. Se pide en la barra, sin servicio en la mesa.",
    comeArrivare: 'Unos 50 minutos en coche desde Nesland/Flakstad.',
    comeSpostarsi: 'A pie, el pueblo es pequeño.',
    periodoMigliore: 'estuve en verano, bajo la lluvia; para los demás meses no tengo una referencia directa',
    costi: 'no anoté los costes de esta parada',
    erroriDaEvitare: [],
    miaEsperienza:
      'Å me impresionó incluso bajo la lluvia: el Museo de los Pescadores, con la visita guiada en inglés, cuenta bien una parte de la historia local que en otros puntos del viaje solo se ve de pasada.',
    luoghi: [
      {
        nome: "Museo de los Pescadores (Norsk Fiskeværsmuseum)",
        testo: "El museo del pueblo de Å, con casas, almacenes y un horno histórico, cuenta la vida de los pescadores de las Lofoten. La visita guiada en inglés explica bien la historia local.",
        come: "Unos 50 minutos en coche desde Nesland; el museo se visita con guía o por libre.",
        quando: "Mañana, con visita guiada.",
        tempo: "1,5-2 horas",
        url: "https://www.museumnord.no",
        consiglio: "Con lluvia, como cuando fui, sigue siendo una buena visita bajo techo."
      },
      {
        nome: "Panadería histórica de Å",
        testo: "Una panadería histórica, con canela y dulces hechos en el lugar; pocos asientos pero excelente.",
        come: "A pie en el pueblo.",
        quando: "Mañana.",
        tempo: "30 minutos",
        consiglio: "Tomar un rollo de canela: es lo típico."
      },
      {
        nome: "Sakrisøy y Anita's Seafood",
        testo: "En el camino a Å está Sakrisøy, pueblo de casitas amarillas, y Anita's Seafood, donde se comen sopas, bocadillos y sushi. Se pide en el mostrador, sin servicio en mesa.",
        come: "En coche, por la carretera a Å.",
        quando: "Almuerzo.",
        tempo: "1 hora",
        consiglio: "Vista del fiordo desde la mesa exterior."
      }
    ],
    sapori: [
      {
        nome: "Rollos de canela de la panadería",
        testo: "Rollos frescos de la panadería histórica."
      },
      {
        nome: "Sopa de pescado en Anita's",
        testo: "Sopa y bocadillos con vista al fiordo."
      }
    ],
    attenzioni: [
      "Å es el final de la carretera E10: no hay nada más allá, aparcar con calma.",
      "El tiempo cambia rápido: llevar impermeable."
    ],
    esperienzeSlugs: ['museo-dei-pescatori'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Estructuras tradicionales para secar el bacalao al atardecer, con montañas nevadas al fondo, Lofoten',
    immagine: '/images/norvegia/a-stock.jpg',
  },
  {
    slug: 'tromso',
    paeseSlug: 'norvegia',
    ordine: 8,
    nome: 'Tromsø',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '5 días, viaje aparte respecto a las Lofoten',
    visitataPersonalmente: true,
    introduzione:
      'La «capital ártica» de Noruega, bastante más al norte que las Lofoten: base para la caza de la aurora boreal, husky sledding y cultura sami, con la Catedral del Ártico como símbolo de la ciudad.',
    percheAndarci: 'Por la aurora boreal y por un paquete de actividades árticas muy concentrado en pocos días, con la propia ciudad como base cómoda a pie.',
    cosaVedere: [
      'Catedral del Ártico (Ishavskatedralen), en forma de iceberg, con una de las vidrieras de mosaico más grandes de Europa',
      'Fjellheisen, el teleférico que sube al monte Storsteinen (465 m) con vistas a la ciudad y los fiordos: una cabina cada 30 minutos, 4-5 minutos de subida, abierto hasta medianoche en invierno',
      'Polaria, el centro ártico con cine panorámico, estanque de focas y acuarios de especies del mar del Norte',
      'Polar Museum, dedicado a la historia de las expediciones polares noruegas (caza de focas, expediciones árticas, Amundsen)',
    ],
    cosaFare: [
      'Aurora chase en minibús (véase la ficha de experiencia dedicada)',
      'Husky sledding en Tromsø Villmarkssenter (véase la ficha de experiencia dedicada)',
      'Experiencia sami con renos (véase la ficha de experiencia dedicada)',
      'Avistamiento invernal de ballenas hacia Skjervøy (en este viaje no lo hice), véase la ficha de experiencia dedicada',
      'Noche en iglú de cristal en el Lyngenfjord (en este viaje no la hice), véase la ficha de experiencia dedicada',
    ],
    doveDormire: 'No recuerdo con precisión dónde dormí. La zona más cómoda es la del puerto/Storgata, a pocos pasos de tiendas, bares y del punto de encuentro de buena parte de las excursiones; una doble en hotel céntrico en temporada alta cuesta aproximadamente 140-170 €/noche.',
    doveMangiare: 'Tengo recuerdos genéricos más que locales concretos: la cocina local gira mucho en torno al cangrejo real (kongekrabbe) y al bacalao seco (tørrfisk/lutefisk), extendidos en los restaurantes de la zona de Storgata.',
    comeArrivare: 'Vuelo directo o con escala a Tromsø.',
    comeSpostarsi: 'A pie por el centro; minibús/autocar organizados para las excursiones fuera de la ciudad.',
    periodoMigliore: 'de finales de septiembre a finales de marzo para la aurora, con noche polar (poca luz diurna) entre diciembre y enero',
    costi:
      'Fjellheisen: 645 NOK (unos 55 €) ida y vuelta adultos, 310 NOK (unos 27 €) niños de 3 a 15 años (2026). Polaria: unas 400-450 NOK (35-39 €). Polar Museum: 130 NOK (unos 11 €). Aurora chase en minibús: 100-160 € por persona. Husky sledding: 170-320 € por persona. Experiencia sami con renos: desde 145 € por persona. Avistamiento de ballenas: 130-260 € por persona. Doble en hotel céntrico en temporada alta: 140-170 €/noche.',
    erroriDaEvitare: [
      'Reservar las excursiones nocturnas con un mínimo de antelación, sobre todo en los meses de máxima afluencia (noviembre-marzo)',
      'Subestimar el viento en el paseo marítimo: se nota más de lo previsto',
      'Intentar hacerlo todo: entre aurora, huskies, sami y avistamiento de ballenas la cuenta sube deprisa. Mejor elegir 2-3 actividades y vivirlas bien',
    ],
    miaEsperienza:
      'De este viaje me quedaron flashes más que un diario detallado: el frío punzante nada más bajar del avión, la oscuridad de la noche polar, y la aurora vista moverse en el cielo por primera vez durante la aurora chase en minibús. Las actividades que hicimos, en cambio, las recuerdo bien, y aquí abajo encuentras todo lo necesario para organizarlas igual, o mejor.',
    luoghi: [
      {
        nome: "Catedral Ártica (Ishavskatedralen)",
        testo: "Iglesia de 1965 de silueta triangular, al otro lado del puente respecto al centro. En el lado este está el gran mosaico de vidrio «El regreso de Cristo», añadido en 1972.",
        come: "A pie cruzando el puente o en bus desde el centro.",
        quando: "Mañana o tarde; horarios de visita y conciertos en la web.",
        tempo: "45 minutos",
        url: "https://ishavskatedralen.no",
        consiglio: "Si hay un concierto de medianoche en verano, mejor reservar."
      },
      {
        nome: "Fjellheisen y Storsteinen",
        testo: "El teleférico que sube en pocos minutos sobre la ciudad; arriba hay un mirador sobre los fiordos y las islas. En invierno es un sitio para ver la aurora sin desplazarse.",
        come: "Desde el centro con el bus 28 o con un paseo de 15 minutos; la cabina sale aproximadamente cada 30 minutos.",
        quando: "Tarde en invierno por las luces de la ciudad, de día en verano.",
        tempo: "1-2 horas",
        costo: "645 NOK ida y vuelta adultos, 310 NOK niños de 3 a 15 años (2026)",
        url: "https://www.fjellheisen.no",
        consiglio: "Subida rápida, pero abrigarse arriba."
      },
      {
        nome: "Polaria",
        testo: "El centro ártico con acuarios de fauna marina local y de Svalbard, la piscina de las focas barbudas con un túnel bajo el agua y un cine panorámico de cinco pantallas.",
        come: "A pie desde el centro, junto al puerto.",
        quando: "De día, sobre todo si llueve.",
        tempo: "1,5 horas",
        url: "https://polaria.no",
        consiglio: "Los horarios de alimentación de las focas están en la web."
      },
      {
        nome: "Museo Polar",
        testo: "Museo en un edificio histórico del puerto, sobre la historia de las expediciones polares noruegas de Amundsen y los cazadores de focas árticos.",
        come: "A pie desde el centro.",
        quando: "De día.",
        tempo: "1 hora",
        url: "https://uit.no/tmu/polarmuseet",
        consiglio: "Más interesante de lo que parece, para quien ama la historia de las exploraciones."
      },
      {
        nome: "Mack's Ølhallen",
        testo: "El pub histórico de la cervecera Mack, fundada en 1877 y durante décadas una de las más septentrionales del mundo, con cerveza de grifo. Un lugar de locales, sin pretensiones.",
        come: "A pie desde el centro, en Storgata.",
        quando: "Noche.",
        tempo: "1 hora",
        consiglio: "Probar una cerveza local: se pide en la barra."
      },
      {
        nome: "Caza de auroras en minibús",
        testo: "Una salida nocturna con guía fuera de la ciudad, lejos de las luces, para buscar la aurora con cielo despejado. Los tours suelen durar varias horas.",
        come: "Reservado con operador, salida en minibús desde el centro.",
        quando: "De finales de septiembre a finales de marzo, noche con pocas nubes.",
        tempo: "5-6 horas",
        consiglio: "Fue la primera vez que vi la aurora moverse en el cielo."
      },
      {
        nome: "Huskies y renos sami",
        testo: "En Tromsø Villmarkssenter se puede conducir un trineo de huskies; otras empresas organizan visitas a un campamento sami con renos y relatos de la cultura local.",
        come: "Reserva con operador; traslado en minibús.",
        quando: "Invierno, con nieve.",
        tempo: "media jornada",
        consiglio: "Vestirse en capas: se hacen muchas paradas."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Catedral Ártica",
          "Fjellheisen",
          "Polaria o Museo Polar",
          "Cena en el centro"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: trineo de huskies o renos",
          "Tarde: caza de auroras en minibús"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: avistamiento de ballenas en Skjervøy (no hecho) o descanso en el centro",
          "Última tarde: Mack's Ølhallen"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro (Storgata y puerto)",
        perChi: "Quien no tiene coche",
        testo: "A pocos pasos de tiendas, bares y del punto de encuentro de la mayoría de las excursiones. En temporada alta los precios son altos: reservar pronto."
      },
      {
        nome: "Tromsdalen",
        perChi: "Quien quiere algo de tranquilidad",
        testo: "Al otro lado del puente, cerca de la Catedral Ártica y el teleférico; bus al centro."
      }
    ],
    sapori: [
      {
        nome: "Cangrejo real (kongekrabbe)",
        testo: "Por la zona de Storgata se comen patas de cangrejo real, rico y dulce."
      },
      {
        nome: "Bacalao seco (tørrfisk)",
        testo: "Bacalao secado, cocina típica del norte."
      },
      {
        nome: "Reno",
        testo: "Servido en estofado o a la sartén, típico de la cocina sami."
      }
    ],
    attenzioni: [
      "La aurora no está garantizada: hace falta cielo despejado y actividad solar; prever varias noches.",
      "El frío intenso y los días de noche polar requieren capas térmicas de verdad.",
      "Precios altos: comparar los tours antes de reservar."
    ],
    esperienzeSlugs: ['aurora-chase-minibus-tromso', 'husky-sledding-tromso', 'sami-renne-lavvu-tromso', 'whale-watching-tromso', 'glass-igloo-lyngen'],
    tripSlugs: ['tromso'],
    imageAlt: 'Catedral del Ártico de Tromsø iluminada de noche con aurora boreal al fondo',
    immagine: '/images/norvegia/tromso-stock.jpg',
  },
]
