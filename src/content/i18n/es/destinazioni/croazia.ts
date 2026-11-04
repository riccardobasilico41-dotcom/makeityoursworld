import type { Destinazione } from '@/lib/types'

export const destinazioniCroazia: Destinazione[] = [
  {
    slug: 'zagabria',
    paeseSlug: 'croazia',
    ordine: 1,
    nome: 'Zagreb',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital, dividida entre la Ciudad Alta medieval y la Ciudad Baja austrohúngara, con cafés, museos y el mercado de Dolac. Es el punto de partida natural para Plitvice.',
    percheAndarci: 'Para una Croacia continental y centroeuropea, distinta de la costa.',
    cosaVedere: [
      'La iglesia de San Marcos y la Ciudad Alta',
      'La torre Lotrščak y el cañón de mediodía',
      'El mercado de Dolac',
      'El Museo de las Relaciones Rotas',
    ],
    cosaFare: ['Una noche en las cafeterías de la calle Tkalčićeva', 'Štrukli en una taberna de la Ciudad Alta', 'El mercadillo navideño en diciembre'],
    doveDormire: 'Ciudad Baja o cerca de la plaza Jelačić: económico 50-80 €, medio 90-150 €, alto más de 200 €.',
    comeArrivare: 'Aeropuerto de Zagreb; en coche desde Trieste en unas dos horas y media.',
    comeSpostarsi: 'A pie, en tranvía y con el funicular a la Ciudad Alta.',
    periodoMigliore: 'abril-octubre; diciembre para el Adviento.',
    erroriDaEvitare: ['Saltársela del todo por correr al mar'],
    luoghi: [
      {
        nome: "Ciudad Alta (Gornji grad)",
        testo: "El núcleo medieval sobre una colina, con la iglesia de San Marcos de tejado de tejas de colores, la torre Lotrščak (donde un cañón dispara cada día al mediodía) y callejas de farolas de gas.",
        come: "A pie desde la Ciudad Baja o en funicular, uno de los más cortos del mundo (unos 60 metros).",
        quando: "Mañana o final de la tarde. El cañón dispara al mediodía.",
        tempo: "2 horas",
        consiglio: "Subir a pie por la calle Tkalčićeva y bajar en funicular."
      },
      {
        nome: "Mercado de Dolac",
        testo: "El mercado al aire libre de la ciudad, sobre la plaza Jelačić, con puestos de fruta y verdura bajo sombrillas rojas y quesos en el mercado cubierto de abajo.",
        come: "A pie desde el centro, a pocos minutos de la plaza Jelačić.",
        quando: "Por la mañana, hasta mediodía; el domingo está más tranquilo y muchos puestos cierran.",
        tempo: "1 hora",
        consiglio: "Probar el queso fresco con nata (sir i vrhnje) con pan caliente."
      },
      {
        nome: "Museo de las Relaciones Rotas",
        testo: "Un pequeño museo con objetos donados por personas de todo el mundo, cada uno con la historia de una relación terminada. Divertido y a ratos emotivo.",
        come: "A pie desde la Ciudad Alta, en la calle Ćirilometodska.",
        quando: "Mañana o tarde, evitando el fin de semana.",
        tempo: "1 hora",
        consiglio: "Los textos están en inglés: prever tiempo para leerlos."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mercado de Dolac por la mañana",
          "Catedral y Ciudad Alta",
          "Comida con štrukli",
          "Museo de las Relaciones Rotas",
          "Aperitivo en la calle Tkalčićeva"
        ]
      }
    ],
    zone: [
      {
        nome: "Ciudad Baja",
        perChi: "para estación y tranvías",
        testo: "Hoteles y apartamentos a pie de todo; el centro es animado y algo ruidoso por la noche."
      },
      {
        nome: "Cerca de la plaza Jelačić",
        perChi: "para estancias cortas",
        testo: "Todo a pie; los precios son algo más altos."
      }
    ],
    sapori: [
      {
        nome: "Štrukli",
        testo: "Pasta rellena de queso fresco, hervida o al horno, el plato más típico de la ciudad."
      },
      {
        nome: "Purica s mlincima",
        testo: "Pavo asado con pasta fina horneada, plato de cocina casera croata."
      },
      {
        nome: "Kremšnita",
        testo: "Crema y nata entre dos hojaldres, típico de Samobor, cerca de la ciudad."
      }
    ],
    attenzioni: [
      "En taxi, usar apps (Bolt, Uber) o coches con tarifa visible: en la estación los precios varían.",
      "En Navidad suben los precios de alojamiento: reservar con antelación.",
      "En los fines de semana del mercado de Adviento el centro se llena: mejor entre semana."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La iglesia de San Marcos con el tejado de tejas de colores en Zagreb',
    immagine: '/images/viaggi/croazia-itinerario/giorno-01-zagabria.jpg',
  },
  {
    slug: 'plitvice',
    paeseSlug: 'croazia',
    ordine: 2,
    nome: 'Lagos de Plitvice',
    tipologia: ['parco nazionale', 'laghi', 'cascate'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'Dieciséis lagos en terrazas conectados por cascadas y barreras de travertino, atravesados por pasarelas de madera, en el parque nacional más antiguo de Croacia, patrimonio UNESCO desde 1979.',
    percheAndarci: 'Por las cascadas y los colores de los lagos, para ver a la apertura.',
    cosaVedere: ['La Veliki slap, la cascada más alta (78 m)', 'Los lagos inferiores y el cañón', 'Los lagos superiores y el lago Kozjak'],
    cosaFare: ['Entrar a la apertura por la entrada 2 para los lagos superiores', 'Hacer los lagos inferiores a última hora de la tarde'],
    doveDormire: 'Pensiones y habitaciones en Mukinje, Rastovača y Grabovac (60-120 €); pocos hoteles dentro del parque.',
    comeArrivare: 'En coche desde Zagreb (unas 2 horas) o desde Zadar (unas 2 horas); autobús desde ambas ciudades.',
    comeSpostarsi: 'A pie por las pasarelas, barco eléctrico en el lago Kozjak y trenecitos panorámicos incluidos en la entrada.',
    periodoMigliore: 'mayo-junio y septiembre-octubre; julio-agosto muy concurridos.',
    costi: 'Entrada diaria unos 40 € en junio-septiembre, menos en primavera y otoño; se compra online con franja horaria.',
    erroriDaEvitare: [
      'Llegar a media mañana en temporada alta',
      'No reservar online la franja de entrada',
      'Pensar en bañarse: está prohibido',
    ],
    luoghi: [
      {
        nome: "Lagos superiores y Kozjak",
        testo: "Dieciséis lagos unidos por cascadas en terrazas de travertino, con pasarelas de madera sobre agua turquesa. Patrimonio UNESCO desde 1979.",
        come: "Entrada 2 para los lagos superiores. Senderos marcados con letras (A-K) y barco eléctrico en el Kozjak incluido en la entrada.",
        quando: "A la apertura o después de las 15, para evitar la hora de los autocares. El periodo más verde es mayo-junio; en otoño los colores son más intensos.",
        tempo: "4-6 horas para un recorrido completo",
        url: "https://np-plitvicka-jezera.hr/en/",
        consiglio: "En temporada alta la entrada es con horario y hay que reservar en la web oficial."
      },
      {
        nome: "Veliki slap",
        testo: "La cascada más alta del parque, unos 78 metros, al final de los lagos inferiores. Se ve desde la pasarela de abajo o desde el sendero de arriba.",
        come: "Entrada 1 para los lagos inferiores y la Veliki slap, a pie con escaleras.",
        quando: "A primera hora o al final de la tarde.",
        tempo: "1 hora",
        consiglio: "Una gran última parada: luego se sube en el trenecito panorámico."
      },
      {
        nome: "Lagos inferiores y cañón",
        testo: "Un tramo más salvaje y menos concurrido, con paredes de roca, cuevas y cascadas que salen de la caliza.",
        come: "A pie desde la entrada 1 por el sendero indicado.",
        quando: "Por la mañana.",
        tempo: "2 horas",
        consiglio: "Suela antideslizante: las pasarelas están mojadas."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Entrada 2 a la apertura",
          "Lagos superiores y Kozjak en barco",
          "Comida en el parque",
          "Lagos inferiores y Veliki slap por la tarde"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: lagos superiores y Kozjak",
          "Día 2: lagos inferiores, cañón y senderos más tranquilos"
        ]
      }
    ],
    zone: [
      {
        nome: "Mukinje y Rastovača",
        perChi: "para estar cerca",
        testo: "Pensiones y habitaciones junto a la entrada, cómodas para madrugar."
      },
      {
        nome: "Grabovac",
        perChi: "para precios más bajos",
        testo: "Más barato, a pocos minutos en coche de la entrada."
      }
    ],
    sapori: [
      {
        nome: "Cordero a la brasa",
        testo: "Se prepara en los restaurantes de la carretera del parque, con patatas."
      },
      {
        nome: "Trucha",
        testo: "De los ríos de la zona, a la parrilla o frita."
      },
      {
        nome: "Štrukli y crema de queso",
        testo: "Se encuentran en las tabernas cercanas a la entrada."
      }
    ],
    attenzioni: [
      "Bañarse en los lagos está prohibido y vigilado: no salir de los senderos.",
      "Sin reserva en verano se puede no entrar: reservar horario.",
      "Llevar comida y agua: dentro hay pocos servicios y caros."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Una pasarela de madera junto a una cascada y al agua turquesa de los lagos de Plitvice',
    immagine: '/images/viaggi/croazia-itinerario/giorno-03-plitvice.jpg',
  },
  {
    slug: 'zara-krka-sebenico',
    paeseSlug: 'croazia',
    ordine: 3,
    nome: 'Zadar, Krka y Šibenik',
    tipologia: ['città storiche', 'parco nazionale', 'mare'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'La Dalmacia septentrional: Zadar con el centro romano y veneciano y las instalaciones del paseo marítimo, las cascadas de travertino del Parque Nacional del Krka y Šibenik con la catedral de Santiago.',
    percheAndarci: 'Por el atardecer en el Órgano del mar, las cascadas del Krka y dos ciudades históricas menos concurridas que Split y Dubrovnik.',
    cosaVedere: [
      'El Órgano del mar y el Saludo al Sol en Zadar',
      'La iglesia de San Donato y el foro romano',
      'El Skradinski buk y el monasterio de Visovac en el Krka',
      'La Catedral de Santiago en Šibenik',
    ],
    cosaFare: ['El barco de Skradin a las cascadas', 'Un día en las Kornati o en Ugljan desde Zadar'],
    doveDormire: 'Apartamentos en los cascos antiguos (80-150 €); hoteles en Borik, cerca de Zadar.',
    comeArrivare: 'En coche desde Plitvice; aeropuerto de Zadar con vuelos de temporada.',
    periodoMigliore: 'mayo-junio y septiembre.',
    costi: 'Krka unos 40 € en verano, mucho menos en temporada baja.',
    erroriDaEvitare: ['Esperar poder bañarse bajo las cascadas del Krka: está prohibido desde 2021'],
    luoghi: [
      {
        nome: "Zadar: Órgano marino y Saludo al Sol",
        testo: "Dos instalaciones en el paseo marítimo del casco antiguo: el Órgano marino suena con las olas que entran en tubos bajo los escalones, y al lado un disco de vidrio capta la luz del atardecer. Obra del arquitecto Nikola Bašić.",
        come: "A pie desde el casco antiguo, por la Riva.",
        quando: "Al atardecer, cuando suena y brilla.",
        tempo: "1 hora",
        consiglio: "Sentarse en los escalones: el sonido cambia con el viento y las olas."
      },
      {
        nome: "Casco antiguo de Zadar",
        testo: "Una península con el Foro romano, la iglesia circular de San Donato (siglo IX) e iglesias románicas. Muy dañada en la Segunda Guerra Mundial y reconstruida.",
        come: "A pie desde los aparcamientos fuera de las murallas.",
        quando: "Mañana o noche.",
        tempo: "2 horas",
        consiglio: "El mercado de pescado y fruta junto a las murallas es un buen desayuno."
      },
      {
        nome: "Skradinski buk (Krka)",
        testo: "Una serie de cascadas y pozas en terrazas de travertino en el Parque Nacional de Krka. Se camina por pasarelas y se toma un barco desde Skradin.",
        come: "A unos 45 minutos de Šibenik. Se sale de la entrada de Skradin con barco incluido en la entrada.",
        quando: "A primera hora o al final del día. Mayo-junio y septiembre.",
        tempo: "3-4 horas",
        url: "https://np-krka.hr/en/",
        consiglio: "Ya no se permite el baño al pie de las cascadas."
      },
      {
        nome: "Catedral de Santiago, Šibenik",
        testo: "Catedral renacentista de piedra, patrimonio UNESCO, construida sin mortero con bloques encajados. En el friso exterior corren más de 70 rostros esculpidos.",
        come: "A pie desde el centro histórico.",
        quando: "Por la mañana.",
        tempo: "45 minutos",
        consiglio: "Mirar los rostros del ábside: son retratos de vecinos de la ciudad."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Zadar por la mañana",
          "Comida en la ciudad",
          "Atardecer en el Órgano marino"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Zadar y atardecer en la Riva",
          "Día 2: Krka por la mañana, Šibenik por la tarde"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo de Zadar",
        perChi: "para estar en el centro",
        testo: "Alojamientos de piedra a pocos pasos de todo; animado de noche en la zona de la Riva."
      },
      {
        nome: "Šibenik",
        perChi: "para llegar a Krka",
        testo: "Más tranquila que Split, cómoda para la autopista y el parque."
      }
    ],
    sapori: [
      {
        nome: "Maraschino",
        testo: "Licor de cereza marasca típico de Zadar."
      },
      {
        nome: "Paška janjetina",
        testo: "Cordero asado de la isla de Pag."
      },
      {
        nome: "Sir iz mišine",
        testo: "Queso curado de Pag."
      },
      {
        nome: "Pescado de Šibenik",
        testo: "Cocina sencilla de mar en las konobe del puerto."
      }
    ],
    attenzioni: [
      "En Krka ya no se puede nadar: preguntar en taquilla por las restricciones.",
      "En julio y agosto las cascadas se llenan: llegar a la apertura.",
      "El aparcamiento cerca del casco antiguo es de pago y con límite de tiempo."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'El Skradinski buk en el Parque Nacional del Krka',
    immagine: '/images/viaggi/croazia-itinerario/giorno-05-zara-krka-sebenico.jpg',
  },
  {
    slug: 'spalato',
    paeseSlug: 'croazia',
    ordine: 4,
    nome: 'Split y Trogir',
    tipologia: ['città romana', 'mare', 'porto'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'Split vive dentro el palacio que el emperador Diocleciano mandó construir hacia el año 300 d.C. A media hora está Trogir, islote medieval patrimonio UNESCO. El puerto es el nudo de los ferris a las islas.',
    percheAndarci: 'Por el palacio de Diocleciano, la Riva, el Marjan y las conexiones con Hvar, Brač y Vis.',
    cosaVedere: [
      'El Peristilo y la catedral de San Doimo',
      'Los subterráneos del palacio',
      'La colina del Marjan',
      'El centro de Trogir y el portal de Radovan',
    ],
    cosaFare: ['El picigin en Bačvice', 'Subir al campanario de San Doimo', 'La noche en la Riva'],
    doveDormire: 'Dentro o junto al palacio (habitaciones 100-180 €); hostales desde 30-40 € la cama.',
    comeArrivare: 'Aeropuerto de Split; coche, autobús o ferri desde Ancona.',
    comeSpostarsi: 'A pie por el centro; autobús a Trogir; catamaranes desde el puerto a las islas.',
    periodoMigliore: 'mayo-junio y septiembre-octubre.',
    costi: 'Subterráneos del palacio 10-15 €.',
    erroriDaEvitare: ['Andar en bañador por el casco antiguo: te ponen multa'],
    luoghi: [
      {
        nome: "Palacio de Diocleciano",
        testo: "El palacio-fortaleza del emperador romano Diocleciano, construido hacia el 305 d.C., dentro del cual vive hoy el casco antiguo. Peristilo, mausoleo convertido en catedral y sótanos son el corazón de la visita.",
        come: "A pie desde la Riva, por la Puerta de Plata o la de Bronce. Las calles son gratis; catedral, campanario y sótanos son de pago.",
        quando: "A primera hora o por la noche: entre las 11 y las 16 las calles están llenas.",
        tempo: "2-3 horas",
        consiglio: "Los sótanos: entrada de pago, casi vacíos y fotogénicos."
      },
      {
        nome: "Catedral de San Domnio y campanario",
        testo: "El mausoleo octogonal de Diocleciano, convertido en catedral en el siglo VII, es uno de los edificios más antiguos del mundo aún usado como iglesia. El campanario de 57 metros da vistas sobre los tejados.",
        come: "Dentro del Peristilo. Entrada para catedral y subida al campanario.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        consiglio: "Subir al campanario por la vista: los escalones son muchos y estrechos."
      },
      {
        nome: "Colina de Marjan",
        testo: "El parque arbolado sobre la ciudad, con senderos, ermitas y un mirador sobre el puerto y las islas.",
        come: "A pie desde el barrio Veli Varoš, unos 20 minutos de subida hasta el mirador.",
        quando: "Final de la tarde.",
        tempo: "2 horas",
        consiglio: "Llevar agua: en la subida no hay bares."
      },
      {
        nome: "Trogir",
        testo: "Una pequeña ciudad-isla medieval a 30 km de Split, con la catedral de San Lorenzo y su portal esculpido por Radovan. Patrimonio UNESCO.",
        come: "En coche o autobús 37 desde Split, cerca de 1 hora. Se visita a pie.",
        quando: "Por la mañana.",
        tempo: "3 horas",
        consiglio: "Por la tarde, parar a tomar un helado en la Riva."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Palacio de Diocleciano por la mañana",
          "Comida en el casco antiguo",
          "Subida a Marjan por la tarde",
          "Cena en la Riva"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: palacio, catedral y sótanos",
          "Día 2: Trogir por la mañana, Klis o Salona por la tarde"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo",
        perChi: "para estar en el centro",
        testo: "Habitaciones dentro del palacio, a pie de todo; ruidoso hasta tarde por la noche."
      },
      {
        nome: "Veli Varoš",
        perChi: "para un barrio tranquilo",
        testo: "Casas de pescadores a 10 minutos del centro, bajo Marjan."
      }
    ],
    sapori: [
      {
        nome: "Pašticada",
        testo: "Ternera guisada en salsa de vino y ciruelas, con ñoquis."
      },
      {
        nome: "Soparnik",
        testo: "Tarta salada de acelgas de Dalmacia, cocida bajo las brasas."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto negro con tinta de sepia."
      },
      {
        nome: "Rožata",
        testo: "Flan dálmata de caramelo con el sabor típico del licor de rosas."
      }
    ],
    attenzioni: [
      "Los taxis sin identificar en Split pueden cobrar mucho más que la tarifa: usar Bolt o Uber.",
      "Para los ferris en verano, reservar plaza para el coche con Jadrolinija.",
      "Ojo con los restaurantes de plaza con menús turísticos y precios altos: alejarse una calle reduce el coste."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Las columnas y los arcos del Peristilo del palacio de Diocleciano en Split',
    immagine: '/images/viaggi/croazia-itinerario/giorno-07-spalato.jpg',
  },
  {
    slug: 'hvar',
    paeseSlug: 'croazia',
    ordine: 5,
    nome: 'Hvar',
    tipologia: ['isola', 'mare', 'vita notturna'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'La isla más soleada del Adriático, con una ciudad veneciana en la bahía, las islas Pakleni frente al puerto, campos de lavanda en el interior y la llanura de Stari Grad, patrimonio UNESCO.',
    percheAndarci: 'Por las calas de las Pakleni, el atardecer desde la fortaleza y, para quien la busque, la vida nocturna.',
    cosaVedere: ['La fortaleza española', 'Plaza de San Esteban y el teatro de 1612', 'Las islas Pakleni', 'La llanura de Stari Grad'],
    cosaFare: ['Taxi-boat a Palmižana', 'Vuelta por el interior entre lavanda y pueblos abandonados'],
    doveDormire: 'Hvar ciudad para la vida nocturna (100-220 €, más en agosto), Stari Grad y Jelsa para la quietud.',
    comeArrivare: 'Catamarán desde Split (unas 1 hora); ferri para coches de Split a Stari Grad.',
    periodoMigliore: 'junio y septiembre; lavanda en flor entre junio y julio.',
    costi: 'Taxi-boat a las Pakleni 10-15 € ida y vuelta.',
    erroriDaEvitare: ['Beber en la calle o andar en bañador por la ciudad: multas severas', 'Llegar en agosto sin alojamiento reservado'],
    luoghi: [
      {
        nome: "Ciudad de Hvar y fortaleza Española",
        testo: "Un pueblo veneciano junto al mar con una plaza grande como un campo de fútbol, la catedral y, arriba, la fortaleza Fortica del siglo XVI con vistas a las islas Pakleni.",
        come: "A pie desde el puerto. Fortaleza a unos 15 minutos de subida.",
        quando: "Fortaleza por la mañana o al final de la tarde, por el calor.",
        tempo: "2-3 horas",
        consiglio: "Subir a la fortaleza al atardecer y cenar después en una callejuela fuera de la plaza."
      },
      {
        nome: "Islas Pakleni",
        testo: "Un archipiélago de islotes con calas y agua clara frente a la ciudad de Hvar. Se llega en taxi-barca en 10-15 minutos.",
        come: "Taxi-barca desde el puerto de Hvar, vuelta a horas acordadas.",
        quando: "Por la mañana; las calas están más tranquilas antes del mediodía.",
        tempo: "media jornada",
        consiglio: "Acordar la hora de vuelta con el barquero."
      },
      {
        nome: "Llanura de Stari Grad",
        testo: "Un paisaje agrícola de muros y campos divididos por colonos griegos en el siglo IV a.C., casi sin cambios; patrimonio UNESCO.",
        come: "Desde Stari Grad en bici o a pie por senderos entre olivos y viñas.",
        quando: "Primavera y otoño.",
        tempo: "2-3 horas",
        consiglio: "El ferry desde Split llega a Stari Grad, no a la ciudad de Hvar."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Ciudad de Hvar por la mañana",
          "Islas Pakleni, baño",
          "Fortaleza al atardecer"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: ciudad de Hvar y fortaleza",
          "Día 2: Stari Grad y su llanura, luego Jelsa o Vrboska"
        ]
      }
    ],
    zone: [
      {
        nome: "Ciudad de Hvar",
        perChi: "para vida y comodidad",
        testo: "Hoteles, locales y el puerto, pero más caro y ruidoso en verano."
      },
      {
        nome: "Stari Grad y Jelsa",
        perChi: "para la calma",
        testo: "Más tranquilas y baratas, con autobús a la ciudad de Hvar."
      }
    ],
    sapori: [
      {
        nome: "Gregada",
        testo: "Guiso de pescado con patatas y aceite, cocina de pescadores."
      },
      {
        nome: "Lavanda",
        testo: "Aceite esencial y miel, a la venta por toda la isla."
      },
      {
        nome: "Vinos Plavac y Bogdanuša",
        testo: "Tinto y blanco locales, de las bodegas de la isla."
      }
    ],
    attenzioni: [
      "El ferry desde Split va a Stari Grad; desde allí hace falta autobús o taxi a la ciudad de Hvar.",
      "En verano las habitaciones de fin de semana se acaban pronto: reservar con meses de antelación.",
      "Llevar escarpines en las rocas: hay erizos de mar."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La bahía de Hvar y las islas Pakleni desde la fortaleza española',
    immagine: '/images/viaggi/croazia-itinerario/giorno-08-hvar.jpg',
  },
  {
    slug: 'curzola',
    paeseSlug: 'croazia',
    ordine: 6,
    nome: 'Korčula',
    tipologia: ['isola', 'città storica', 'vino'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'Una ciudad vieja fortificada en una península, con las calles en espina de pescado, la catedral de San Marcos y la casa dedicada a Marco Polo; en la isla se produce el vino blanco grk.',
    percheAndarci: 'Por una ciudad histórica más tranquila que Hvar y Dubrovnik y por la danza de la moreška.',
    cosaVedere: ['La ciudad vieja y las murallas', 'La catedral de San Marcos', 'Lumbarda y sus viñedos'],
    cosaFare: ['Asistir a la moreška en las noches de verano', 'Degustar el grk en Lumbarda'],
    doveDormire: 'Ciudad vieja o Lumbarda, 90-160 €.',
    comeArrivare: 'Catamarán desde Split, Hvar o Dubrovnik; ferri desde Orebić en la península de Pelješac.',
    periodoMigliore: 'junio y septiembre.',
    erroriDaEvitare: ['Visitarla solo en el día desde los cruceros, perdiéndose la noche'],
    luoghi: [
      {
        nome: "Casco antiguo de Korčula",
        testo: "Una península fortificada con plano «en espina de pez», con calles pensadas para protegerse del viento. Murallas y torres venecianas, y la catedral de San Marcos con un altar de Tintoretto.",
        come: "A pie desde el puerto, por la Puerta de Tierra.",
        quando: "Mañana o noche.",
        tempo: "2 horas",
        consiglio: "Subir a la torre de la catedral para ver los tejados."
      },
      {
        nome: "Casa de Marco Polo",
        testo: "Según la tradición local Marco Polo nació en Korčula. Una casa-torre medieval alberga una pequeña exposición.",
        come: "En el centro histórico, con escalones empinados.",
        quando: "Por la mañana.",
        tempo: "30 minutos",
        consiglio: "El nacimiento en Korčula es una tradición, no un hecho documentado."
      },
      {
        nome: "Moreška",
        testo: "Una danza de espadas que escenifica la lucha entre moros y cristianos, representada en Korčula desde hace siglos. En verano se ve una vez por semana.",
        come: "Por la noche, al aire libre o en sala, con entrada.",
        quando: "Verano, por la noche.",
        tempo: "1 hora",
        consiglio: "Comprobar día y hora in situ: varían."
      },
      {
        nome: "Península de Pelješac",
        testo: "La larga península de enfrente, con pequeños productores de Plavac mali. Desde Orebić se llega a Korčula en ferry en unos 15 minutos.",
        come: "En coche, visitando las bodegas de Dingač y Potomje.",
        quando: "Primavera y otoño.",
        tempo: "media jornada",
        consiglio: "Reservar las catas, sobre todo en temporada alta."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Casco antiguo por la mañana",
          "Comida junto al mar",
          "Playa de Lumbarda o paseo en barca",
          "Moreška por la noche, si hay función"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo",
        perChi: "para el ambiente",
        testo: "Habitaciones en el centro histórico; música y paseo por la noche, pero se duerme bien."
      },
      {
        nome: "Lumbarda",
        perChi: "para playas",
        testo: "Pueblo con playas de arena y viñedos, a 6 km."
      }
    ],
    sapori: [
      {
        nome: "Grk",
        testo: "Vino blanco seco de la zona de Lumbarda."
      },
      {
        nome: "Pošip",
        testo: "Blanco aromático local, excelente con pescado."
      },
      {
        nome: "Plavac mali",
        testo: "Tinto potente de Pelješac."
      },
      {
        nome: "Zrnovski makaruli",
        testo: "Pasta fresca local, con salsa de carne."
      }
    ],
    attenzioni: [
      "El ferry desde Split y Dubrovnik hay que reservarlo en temporada alta.",
      "Con viento de bora las conexiones pueden cancelarse.",
      "En los restaurantes del muelle comprobar el precio del pescado al peso."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La ciudad vieja de Korčula en la península fortificada',
    immagine: '/images/viaggi/croazia-itinerario/giorno-10-curzola.jpg',
  },
  {
    slug: 'dubrovnik',
    paeseSlug: 'croazia',
    ordine: 7,
    nome: 'Dubrovnik y Ston',
    tipologia: ['città fortificata', 'mare', 'isole'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      'La antigua república de Ragusa, cerrada por dos kilómetros de murallas sobre el mar, con el Stradun, los palacios y los monasterios. Enfrente está la isla de Lokrum; al norte, Ston con sus murallas de más de cinco kilómetros y las ostras de Mali Ston.',
    percheAndarci: 'Por el recorrido de las murallas, la ciudad vieja, Lokrum y las excursiones a Ston, las Elafiti y la bahía de Kotor.',
    cosaVedere: [
      'Las murallas y la fortaleza de Lovrijenac',
      'El Stradun y el palacio del Rector',
      'La isla de Lokrum',
      'El panorama desde el monte Srđ',
      'Las murallas y las salinas de Ston',
    ],
    cosaFare: ['El recorrido de las murallas a última hora de la tarde', 'Un baño en el Buža, fuera de las murallas', 'Ostras en Mali Ston'],
    doveDormire: 'Dentro de las murallas (desde 150 €, a menudo más de 250 € en temporada alta) o en Lapad y Gruž para precios más bajos.',
    comeArrivare: 'Aeropuerto de Čilipi (unos 20 km); catamarán desde Split, Hvar y Korčula; coche por el puente de Pelješac.',
    comeSpostarsi: 'A pie por el centro; autobuses urbanos a Gruž y Lapad; barco a Lokrum.',
    periodoMigliore: 'mayo-junio y septiembre-octubre.',
    costi: 'Murallas unos 40 € con Lovrijenac; Lokrum con barco 25-30 €.',
    erroriDaEvitare: [
      'Subir a las murallas en las horas centrales, con calor y la multitud de los cruceros',
      'Reservar dentro de las murallas sin tener en cuenta las escaleras con el equipaje',
      'Llegar en coche y buscar aparcamiento cerca de la ciudad vieja',
    ],
    luoghi: [
      {
        nome: "Murallas de Dubrovnik",
        testo: "Un anillo de murallas medievales de casi dos kilómetros alrededor del casco antiguo, con torres y baluartes. El mejor recorrido para ver los tejados rojos y el mar.",
        come: "Se sube por la Puerta Pile o por el lado del puerto; el recorrido es de sentido único.",
        quando: "A la apertura o al final de la tarde: a mediodía hace calor y hay mucha gente.",
        tempo: "1 hora y media-2 horas",
        consiglio: "Llevar agua y gorra: hay poca sombra."
      },
      {
        nome: "Stradun y casco antiguo",
        testo: "La calle principal de piedra pulida, de unos 300 metros, con la fuente de Onofrio, el Palacio del Rector y la iglesia de San Blas. Tras el terremoto de 1667 se reconstruyó en formas barrocas.",
        come: "A pie desde la Puerta Pile. Los coches no entran.",
        quando: "A primera hora o por la noche.",
        tempo: "2-3 horas",
        consiglio: "Un paseo después de las 20, cuando se han ido los grupos, es muy distinto."
      },
      {
        nome: "Teleférico y monte Srđ",
        testo: "Desde la estación bajo las murallas el teleférico sube en pocos minutos al monte Srđ, con vistas a toda la ciudad y las islas.",
        come: "Desde la estación cerca de la Puerta Buža, a pie.",
        quando: "Final de la tarde para el atardecer.",
        tempo: "1-2 horas",
        consiglio: "Reservar horario de atardecer: las colas pueden ser largas."
      },
      {
        nome: "Ston y las ostras de Mali Ston",
        testo: "Las murallas de Ston, de unos 5,5 km, son de las más largas de Europa. Aquí se crían las ostras y mejillones de Mali Ston.",
        come: "En coche desde Dubrovnik, cerca de 1 hora, por el puente de Pelješac.",
        quando: "Por la mañana para las murallas y comida con ostras.",
        tempo: "media jornada",
        consiglio: "Las murallas son de pago y la caminata cansa."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Murallas a la apertura",
          "Stradun y Palacio del Rector",
          "Comida fuera de las murallas",
          "Teleférico al atardecer"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: murallas, Stradun y teleférico",
          "Día 2: Ston y ostras, o Lokrum en barca"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo",
        perChi: "para dormir dentro de las murallas",
        testo: "Habitaciones dentro de la ciudad, pero ruidoso, abarrotado de día y con pocos servicios para coches."
      },
      {
        nome: "Lapad y Babin Kuk",
        perChi: "para playas",
        testo: "Penínsulas a pocos km, con hoteles, playas y autobuses al centro."
      }
    ],
    sapori: [
      {
        nome: "Ostras de Mali Ston",
        testo: "Pequeñas y saladas, criadas en la bahía cercana."
      },
      {
        nome: "Rožata",
        testo: "El flan de caramelo de la ciudad."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto negro con tinta de sepia."
      },
      {
        nome: "Dingač",
        testo: "Tinto intenso de la península de Pelješac."
      }
    ],
    attenzioni: [
      "En temporada alta la ciudad está muy llena, con límites para los cruceros: evitar las horas centrales.",
      "Los restaurantes del Stradun cuestan más: ir a callejuelas laterales o fuera de las murallas.",
      "Los aparcamientos dentro y fuera de la ciudad cobran por horas y multan a quien se pasa.",
      "El puente de Pelješac evita cruzar Bosnia en Neum, así que no hay controles de frontera."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Las murallas y el puerto viejo de Dubrovnik sobre el mar',
    immagine: '/images/viaggi/croazia-itinerario/giorno-11-dubrovnik.jpg',
  },
]
