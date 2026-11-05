import type { Destinazione } from '@/lib/types'

export const destinazioniMessico: Destinazione[] = [
  {
    slug: 'cancun',
    paeseSlug: 'messico',
    ordine: 1,
    nome: 'Cancún',
    tipologia: ['mare', 'nightlife', 'cultura'],
    giorniConsigliati: '1-2 días, mejor repartidos entre la ida y la vuelta',
    visitataPersonalmente: true,
    introduzione:
      "El punto de llegada y de salida de casi todo viaje a Yucatán: aeropuerto internacional, terminal ADO cómoda para los autobuses y playas urbanas a las que se llega sin coche.",
    percheAndarci:
      "Al principio sirve para quitarse el jet lag y organizar las primeras cosas (SIM, efectivo); al final, para una tarde de playa libre antes del regreso.",
    cosaVedere: ['Playa Marlin', 'Playa Gaviota', 'Parque las Palapas', 'Mercado 28'],
    cosaFare: [
      "Día de playa llegando a Playa Marlin o Playa Gaviota con el autobús local R1 (gratuitas, sin tumbonas de pago como en la zona Hotelera)",
      "Isla Mujeres por cuenta propia: ferri desde Puerto Juárez o Playa Tortugas (unos 540 MXN ida y vuelta), luego se recorre la isla con un golf cart de alquiler (1.300-1.500 MXN para 4 personas). Como alternativa, el día organizado en catamarán, más caro pero con paradas de snorkel incluidas",
      "Isla Contoy e Isla Mujeres en un tour organizado de un día entero: Contoy es una reserva natural con entradas limitadas a 200 personas al día; aproximadamente 80-100 € por persona",
      'Aperitivo y comida callejera nocturna en Parque las Palapas',
      "Playa libre frente al Coco Bongo y, en temporada alta, el Coco Bongo Beach Party por la tarde",
    ],
    doveDormire:
      "Dormí en el Hostel Selina Cancún Downtown, a unos 200 metros de la terminal ADO: limpio, con desayuno incluido junto a la piscina.",
    doveMangiare:
      "Para gastar poco: puestos y comida callejera en Parque las Palapas (mi punto fijo de las primeras noches), o El Socio Naiz o Taquería Coapenitos para una comida mexicana sencilla a precios bajos. Gama media: a la Parrilla, turístico pero agradable y con cuenta separada (ojo con el servicio añadido automáticamente, normalmente a partir de 10 personas en la mesa), o Señor Frog, más indicado para comer por sus juegos con alcohol. Para una cena más cuidada: Naviós Mexican Fusion Seafood, sobre el agua en la zona Hotelera con vistas a los cocodrilos (precio medio-alto), o Chambao, el más caro de la lista (60 €+ por persona) pero con un pescado muy bueno.",
    usciteSerali:
      "El gran clásico es el Coco Bongo, discoteca-espectáculo en la zona Hotelera: mejor comprar las entradas anticipadas, sobre todo los fines de semana de temporada alta. Las alternativas más baratas son Mandala (entrada orientativa de unos 20 €) y Monkey Business, que une cena y fiesta (a la entrada suelen pedir el distintivo del hotel o del tour).",
    comeArrivare: 'Aeropuerto internacional de Cancún, el principal hub de la zona; autobús ADO o Uber hasta el centro.',
    comeSpostarsi: 'Autobuses locales (línea R1 roja) para las playas, taxi/Uber para el resto de la ciudad.',
    periodoMigliore: "no lo anoté para esta etapa; vale la indicación general para la zona, es decir, la estación seca, de noviembre a abril.",
    costi: 'Ciudad cara: respecto al resto del itinerario los precios se acercan a los europeos.',
    erroriDaEvitare: [
      'No cambiar o sacar suficiente efectivo en los dos primeros días: después hay que parar continuamente',
      "Esperar el mar de postal de la Riviera Maya: las playas urbanas son buenas pero distintas de Tulum o Holbox",
    ],
    miaEsperienza:
      "Cancún fue para mí sobre todo una base práctica: el primer bocado de México con la comida callejera de Parque las Palapas y el último día libre en la playa antes del vuelo de regreso. No es la etapa que más recuerdo, pero al principio y al final del itinerario funciona bien.",
      "luoghi": [
        {
          "nome": "Isla Mujeres",
          "testo": "Una isla a un corto trayecto en ferry, con playas, snorkel y un pueblo tranquilo, cómoda para una excursión de un día.",
          "come": "Ferry desde Puerto Juárez o Playa Tortugas; en la isla se circula en golf cart alquilado.",
          "quando": "Mañana, para tener tiempo.",
          "tempo": "Día completo",
          "consiglio": "La alternativa es la jornada organizada en catamarán, más cara pero con paradas de snorkel incluidas."
        },
        {
          "nome": "Playa Marlin y Playa Gaviota",
          "testo": "Playas públicas gratuitas en el centro de la zona hotelera, sin camastros de pago. Son de los pocos accesos libres al mar en esta parte de la ciudad; el mar está más movido que en Isla Mujeres, así que antes de bañarse conviene mirar la bandera de los salvavidas.",
          "come": "Bus local desde el centro.",
          "quando": "Mañana.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Parque las Palapas y Mercado 28",
          "testo": "Plaza del centro con puestos de comida callejera y música por la noche, y el mercado con artesanía y pequeños restaurantes.",
          "come": "A pie, en el centro.",
          "quando": "Noche.",
          "tempo": "2-3 horas",
          "consiglio": "El primer bocado de México con comida callejera."
        },
        {
          "nome": "Coco Bongo",
          "testo": "Local con espectáculo muy conocido, en la zona hotelera: acróbatas, música en vivo y números inspirados en películas, hasta muy tarde. El precio cambia mucho según la ubicación (de pie, en la barra o en mesa), así que conviene saber qué incluye el boleto antes de comprarlo.",
          "come": "Entradas con revendedores.",
          "quando": "Noche.",
          "tempo": "Una velada",
          "consiglio": "Para las entradas probad a contactar con Martin de Mexico Grand Tours: tiene un poco de todo."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Isla Mujeres en ferry",
            "Tarde: golf cart y snorkel",
            "Noche: Parque las Palapas"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Isla Mujeres",
            "Día 2: Playa Marlin, Mercado 28 y, si se quiere, Coco Bongo"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro (Downtown)",
          "perChi": "presupuesto y vida local",
          "testo": "Hoteles baratos, mercados y restaurantes, pero lejos del mar."
        },
        {
          "nome": "Zona Hotelera",
          "perChi": "mar y resorts",
          "testo": "Playas y resorts, pero precios altos y tráfico turístico."
        }
      ],
      "sapori": [
        {
          "nome": "Tacos al pastor",
          "testo": "Cerdo marinado con piña, en las taquerías del centro."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Cerdo cocinado en pibil, especialidad de Yucatán."
        },
        {
          "nome": "Ceviche y aguachile",
          "testo": "Pescado crudo marinado en lima, junto al mar."
        },
        {
          "nome": "Marquesitas",
          "testo": "Barquillos rellenos de queso Edam y Nutella, callejeros."
        }
      ],
      "attenzioni": [
        "En la zona hotelera los precios de comida y bebida son muy altos: comer en el centro.",
        "Taxis sin taxímetro: acordar el precio antes de subir.",
        "Ofertas de tiempo compartido o de tours demasiado baratos: no seguir a quien te para en la calle."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
    imageAlt: 'Playa blanca y olas turquesa con los hoteles de la zona hotelera de Cancún al fondo',
    immagine: '/images/messico/cancun.jpg',
  },
  {
    slug: 'valladolid',
    paeseSlug: 'messico',
    ordine: 2,
    nome: 'Valladolid',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '1 noche, incluso solo de paso hacia Mérida',
    visitataPersonalmente: true,
    introduzione:
      "Ciudad colonial tranquila en el centro de Yucatán, base cómoda para Río Lagartos, Ek Balam y los primeros cenotes del viaje.",
    percheAndarci:
      "Rompe el ritmo entre costa e interior. El casco histórico es agradable de recorrer a pie por la noche y es el punto de partida de una de las mejores combinaciones del itinerario: Ek Balam más el cenote Xcanché.",
    cosaVedere: ['Casco histórico colonial', 'Sitio arqueológico de Ek Balam'],
    cosaFare: ['Paseo nocturno por el centro', 'Baño en el cenote Xcanché'],
    doveDormire: 'Dormí en el Hotel Waye, a pocos pasos de la plaza principal.',
    doveMangiare:
      "No apunté los nombres de los restaurantes. El casco histórico alrededor de la plaza principal está lleno de cantinas y loncherías yucatecas a precios bajos, todas a pie desde el hotel: se puede improvisar sin reservar.",
    comeArrivare: 'En furgoneta/coche desde Cancún (unas 2-2 h 30), a menudo con parada en Río Lagartos por el camino.',
    comeSpostarsi: 'El casco histórico es pequeño y se recorre bien a pie.',
    periodoMigliore: "no lo anoté para esta etapa; vale la estación seca aconsejada para todo Yucatán, de noviembre a abril.",
    costi: "No apunté los gastos de Valladolid; como el resto del interior, es una etapa barata.",
    erroriDaEvitare: [
      "Subestimar Ek Balam porque es menos famoso que Chichén Itzá: está mucho menos concurrido y, con el cenote Xcanché al lado, es una combinación ideal",
    ],
    miaEsperienza:
      "Valladolid fue una parada breve pero agradable: una ciudad muy tranquila, donde por la noche di un paseo después de una jornada completa entre Río Lagartos, Ek Balam y el cenote Xcanché.",
      "luoghi": [
        {
          "nome": "Chichén Itzá",
          "testo": "Una de las nuevas maravillas del mundo, sitio maya patrimonio UNESCO con El Castillo, el juego de pelota y el cenote sagrado.",
          "come": "Desde Valladolid en coche o taxi, o con tour guiado.",
          "quando": "Mañana, a la apertura, antes de los autocares y del calor.",
          "tempo": "3-4 horas",
          "costo": "697 MXN para extranjeros, con boleto único federal y estatal en una sola taquilla desde el 27 de marzo de 2026; los domingos es gratis solo para mexicanos y residentes.",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Para Chichén Itzá recomiendo un guía: Alejandro habla español e inglés, nació a 20 minutos del sitio y está muy preparado."
        },
        {
          "nome": "Ek Balam",
          "testo": "Sitio maya más pequeño y mucho menos concurrido, con una gran acrópolis y decoraciones de estuco muy bien conservadas, como la «boca del monstruo» en la entrada de la tumba. Si hoy se puede subir a la cima depende de las reglas del momento: preguntar en taquilla.",
          "come": "Desde Valladolid en taxi o coche.",
          "quando": "Mañana.",
          "tempo": "2 horas",
          "costo": "Unos 690 MXN para extranjeros entre cuota federal y estatal (2026).",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "A menudo infravalorado: combinarlo con el cenote Xcanché justo al lado."
        },
        {
          "nome": "Cenote Xcanché",
          "testo": "Cenote a cielo abierto cerca de Ek Balam. Se baja por una escalera en la roca hasta el agua, rodeada de raíces y plantas colgantes.",
          "come": "Taxi o bici desde Ek Balam.",
          "quando": "Mañana o primera hora de la tarde.",
          "tempo": "1-2 horas"
        },
        {
          "nome": "Río Lagartos y Las Coloradas",
          "testo": "Reserva con flamencos y lagunas rosas, al norte de Valladolid.",
          "come": "Tour o coche, por la carretera hacia la costa.",
          "quando": "Mañana.",
          "tempo": "Media jornada",
          "consiglio": "A menudo parada en el trayecto desde Cancún."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Ek Balam y cenote Xcanché",
            "Almuerzo en la plaza",
            "Tarde: centro histórico",
            "Noche: paseo"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Ek Balam, Xcanché, centro",
            "Día 2: Chichén Itzá a la apertura, luego Río Lagartos"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro histórico",
          "perChi": "a pie de todo",
          "testo": "Plaza principal, cantinas y loncherías cerca, hoteles a pocos pasos."
        },
        {
          "nome": "Fuera del centro",
          "perChi": "quien tiene coche",
          "testo": "Haciendas y cenotes, pero hace falta transporte."
        }
      ],
      "sapori": [
        {
          "nome": "Cochinita pibil y poc chuc",
          "testo": "Cerdo marinado y cocido a fuego lento, y cerdo a la parrilla con naranja agria: dos clásicos yucatecos, en toda la ciudad."
        },
        {
          "nome": "Longaniza de Valladolid",
          "testo": "Chorizo ahumado y especiado, especialidad local."
        },
        {
          "nome": "Sopa de lima",
          "testo": "Sopa de pollo y lima, plato yucateco."
        },
        {
          "nome": "Panuchos y salbutes",
          "testo": "Tortillas fritas rellenas de frijoles o pollo."
        }
      ],
      "attenzioni": [
        "Chichén Itzá: ir a la apertura y no seguir a los captadores de la entrada.",
        "No subir a las pirámides donde está prohibido: las multas son reales.",
        "Cenotes: seguir las reglas sobre protector solar y ducha antes del baño."
      ],
    esperienzeSlugs: ['rio-lagartos', 'ek-balam-cenote-xcanche'],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
    imageAlt: 'Soportales y fachada amarilla de estilo colonial en el centro de Valladolid, Yucatán',
    immagine: '/images/messico/valladolid.jpg',
  },
  {
    slug: 'merida',
    paeseSlug: 'messico',
    ordine: 3,
    nome: 'Mérida',
    tipologia: ['cultura', 'nightlife', 'natura'],
    giorniConsigliati: '2 días, cómoda también como pausa a mitad de viaje',
    visitataPersonalmente: true,
    introduzione:
      "La capital de Yucatán: casco histórico colonial, buena vida nocturna y, a media hora de carretera, una excursión entre mar y curiosidades (Playa Progreso y la «pig beach»).",
    percheAndarci:
      "Cultura, compras locales y un día lejos de los sitios arqueológicos del resto del viaje. Con la lavandería del hotel es también el sitio adecuado para reorganizar el equipaje.",
    cosaVedere: ['Casco histórico colonial', 'Mercado municipal', 'Playa Progreso y el museo del meteorito'],
    cosaFare: [
      'Día en Playa Progreso',
      "Baño con los cerditos en la «pig beach» (Playa de los Cerditos), poco trillada en comparación con el resto del programa",
      'Compras en el mercado municipal',
      'Noche entre La Negrita y la Mezcalería',
    ],
    doveDormire: 'Dormí en el Ontico Urban Design Hotel, en el casco histórico.',
    doveMangiare:
      "Cenamos en la Mezcalería, un local muy grande e informal donde no hace falta reservar. Para comer, el casco histórico y el mercado municipal tienen muchísimos sitios baratos de cocina yucateca (cochinita pibil, panuchos, sopa de lima).",
    usciteSerali:
      "Copas en la Negrita antes de cenar (cierra pronto, hacia las 22: para disfrutarla con calma, mejor reservar con tiempo). Además de la Negrita y la Mezcalería, la calle de los bares y locales nocturnos es el Paseo de Montejo.",
    comeArrivare: 'En furgoneta/coche desde Valladolid (unas 1 h 30-2 h), pasando por Chichén Itzá e Izamal.',
    comeSpostarsi: 'El casco histórico a pie; para Playa Progreso hace falta un traslado en coche o furgoneta (unos 30-40 minutos).',
    periodoMigliore: "no lo anoté para Mérida; vale la estación seca aconsejada para Yucatán, de noviembre a abril.",
    costi: 'No apunté los gastos de Mérida; como el resto del interior, cuesta poco.',
    erroriDaEvitare: [
      'La Negrita cierra pronto (hacia las 22): reservar con tiempo si se quiere vivirla antes de ir a otro sitio',
    ],
    miaEsperienza:
      "Mérida fue la pausa adecuada a mitad de viaje: un día sin traslados entre Playa Progreso y la pig beach y una verdadera noche de salida por el casco histórico.",
      "luoghi": [
        {
          "nome": "Plaza Grande y centro histórico",
          "testo": "La plaza central con la catedral del siglo XVI, el Palacio de Gobierno con murales y las casas coloniales de los alrededores.",
          "come": "A pie desde el centro.",
          "quando": "Mañana y noche, cuando hay música.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Mercado municipal",
          "testo": "El mercado cubierto con fruta, especias, artesanía y productos yucatecos.",
          "come": "A pie desde el centro.",
          "quando": "Mañana.",
          "tempo": "1-2 horas"
        },
        {
          "nome": "Playa Progreso",
          "testo": "La playa de Progreso, en el Golfo de México, el puerto de Mérida, con un largo muelle que entra en el mar y clubes de playa en la arena.",
          "come": "Bus o coche desde Mérida.",
          "quando": "De día.",
          "tempo": "Día completo",
          "consiglio": "Una pausa a mitad de viaje sin traslados largos."
        },
        {
          "nome": "Noche entre La Negrita y la Mezcalería",
          "testo": "Locales con música en vivo y mezcal en el centro histórico.",
          "come": "A pie desde el centro.",
          "quando": "Noche.",
          "tempo": "Una velada"
        },
        {
          "nome": "Izamal",
          "testo": "La ciudad amarilla, al este de Mérida: el gran convento franciscano está construido sobre una pirámide maya, y en el pueblo quedan otras, como la Kinich Kak Moo. Casi todas las fachadas están pintadas del mismo amarillo.",
          "come": "En coche desde Mérida o por la carretera desde Chichén Itzá; el Tren Maya tiene estación en Izamal.",
          "quando": "Mañana o última hora de la tarde.",
          "tempo": "2-3 horas",
          "consiglio": "El pueblo es caro: mejor no perder demasiado tiempo ni dinero entre los souvenirs."
        },
        {
          "nome": "Celestún",
          "testo": "Pueblo de pescadores en el Golfo, al borde de la Reserva de la Biosfera Ría Celestún: una laguna de manglares donde se sale en lancha a ver flamencos y aves acuáticas.",
          "come": "En coche o en tour desde Mérida, en el día; las lanchas salen del pueblo.",
          "quando": "Por la mañana, cuando hay menos gente.",
          "tempo": "Día completo",
          "consiglio": "El número de flamencos cambia mucho durante el año: pregunta en el muelle antes de pagar la lancha, y pide al lanchero que mantenga la distancia con las aves."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Plaza Grande y mercado",
            "Tarde: Paseo de Montejo",
            "Noche: La Negrita y Mezcalería"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: centro y mercado",
            "Día 2: Playa Progreso"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro histórico",
          "perChi": "a pie de todo",
          "testo": "Hoteles boutique en casas coloniales, cerca de restaurantes y de la plaza."
        },
        {
          "nome": "Paseo de Montejo",
          "perChi": "elegancia",
          "testo": "Avenida de mansiones históricas, más tranquila."
        }
      ],
      "sapori": [
        {
          "nome": "Sopa de lima",
          "testo": "Sopa de pollo y lima."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Cerdo marinado en pibil."
        },
        {
          "nome": "Papadzules",
          "testo": "Tortillas rellenas de huevo con salsa de pepita de calabaza."
        },
        {
          "nome": "Salbutes y panuchos",
          "testo": "Tortillas fritas rellenas."
        }
      ],
      "attenzioni": [
        "El calor y la humedad son fuertes: beber mucho y visitar por la mañana.",
        "Taxis no oficiales: usar Uber o taxis acordados.",
        "El centro de noche es seguro en las calles principales; fuera de allí pedir consejo."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
    imageAlt: 'Los soportales del Palacio Municipal en la plaza principal del casco histórico de Mérida, Yucatán',
    immagine: '/images/messico/merida.jpg',
  },
  {
    slug: 'campeche',
    paeseSlug: 'messico',
    ordine: 4,
    nome: 'Campeche',
    tipologia: ['cultura'],
    giorniConsigliati: '1 noche, cómoda etapa de paso',
    visitataPersonalmente: true,
    introduzione:
      "Ciudad colonial fortificada en el Golfo de México, Patrimonio de la Humanidad de la UNESCO, mucho menos turística que las otras etapas del itinerario.",
    percheAndarci:
      "Casco histórico bien cuidado y tranquilo, buena base antes del traslado más largo de todo el viaje hacia Mahahual.",
    cosaVedere: ['Plaza de la Catedral', 'Puerta del Mar y el paseo marítimo', 'Casco histórico fortificado'],
    cosaFare: ['Paseo a pie desde la Catedral hasta el paseo marítimo, atravesando la Puerta del Mar'],
    doveDormire: 'Dormí en el Hotel Francis Drake, en el casco histórico.',
    doveMangiare:
      "No apunté los restaurantes. En el casco histórico fortificado hay varios locales en las calles principales cerca de la Catedral, cómodos para una cena rápida antes del largo traslado del día siguiente hacia Mahahual.",
    comeArrivare: 'En furgoneta/coche desde Mérida, con paradas en Uxmal, Becal y Pomuch por el camino.',
    comeSpostarsi: 'El casco histórico es pequeño y se recorre a pie.',
    periodoMigliore: "no lo anoté para Campeche; vale la estación seca aconsejada para Yucatán, de noviembre a abril.",
    costi: 'No apunté los gastos de Campeche; el interior en general es muy barato.',
    erroriDaEvitare: [
      'Al día siguiente, hacia Mahahual, el traslado es muy largo y se cambia de huso horario: conviene salir lo antes posible por la mañana',
    ],
    miaEsperienza:
      "Una etapa breve pero agradable. La Plaza de la Catedral está muy cuidada, con los típicos limpiabotas, y el paseo hasta el paseo marítimo atravesando la Puerta del Mar fue una buena manera de estirar las piernas después de horas de furgoneta.",
      "luoghi": [
        {
          "nome": "Plaza de la Catedral",
          "testo": "La plaza principal del centro histórico, muy cuidada, con la catedral y los boleros típicos. Las fachadas color pastel de las casas alrededor son la Campeche de las fotos; de noche la plaza se llena de familias y vendedores de dulces.",
          "come": "A pie.",
          "quando": "Mañana y noche.",
          "tempo": "1 hora"
        },
        {
          "nome": "Puerta del Mar y malecón",
          "testo": "La puerta del mar de las antiguas murallas, que lleva al malecón. El paseo desde la catedral es una buena forma de estirar las piernas tras horas de van.",
          "come": "A pie desde la plaza.",
          "quando": "Tarde y noche.",
          "tempo": "1-2 horas"
        },
        {
          "nome": "Murallas y baluartes",
          "testo": "Campeche es una ciudad amurallada, patrimonio de la UNESCO desde 1999, con murallas y baluartes construidos entre los siglos XVII y XVIII contra los ataques de piratas. Algunos baluartes albergan pequeños museos y jardines; parte de la muralla se recorre a pie.",
          "come": "A pie por las murallas.",
          "quando": "Mañana.",
          "tempo": "2 horas",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Fuerte de San Miguel",
          "testo": "Fuerte en la colina al suroeste del centro, con foso y cañones hacia el Golfo. Dentro está el museo arqueológico con las máscaras de jade de Calakmul; desde las murallas se ve el atardecer sobre el mar.",
          "come": "Taxi desde el centro.",
          "quando": "De martes a domingo de 8 a 17, cerrado los lunes (ficha del INAH); al final de la tarde para el atardecer.",
          "costo": "145 MXN para extranjeros (ficha del INAH, 2026).",
          "tempo": "1-2 horas",
          "url": "https://lugares.inah.gob.mx/en/node/4261"
        },
        {
          "nome": "Edzná",
          "testo": "Sitio maya tierra adentro con el Edificio de los Cinco Pisos, una pirámide escalonada sobre una gran plaza. Recibe pocos visitantes comparado con los sitios de Yucatán.",
          "come": "Coche, taxi o tour desde Campeche.",
          "quando": "Abierto todos los días de 8 a 17, último acceso a las 16:30 (ficha del INAH). Temprano, antes del calor.",
          "tempo": "Medio día",
          "url": "https://lugares.inah.gob.mx/en/node/5755",
          "consiglio": "Llevar agua y sombrero: hay poca sombra.",
          "costo": "210 MXN para extranjeros (tarifas INAH 2026); el museo de sitio está incluido."
        }
      ],
      "programmi": [
        {
          "titolo": "Media jornada",
          "tappe": [
            "Plaza de la Catedral",
            "Puerta del Mar y malecón",
            "Cena en el centro histórico"
          ]
        },
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: murallas y baluartes",
            "Tarde: paseo y cena"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro histórico amurallado",
          "perChi": "a pie de todo",
          "testo": "Hoteles en casas coloniales, muy cerca de la catedral y del malecón."
        }
      ],
      "sapori": [
        {
          "nome": "Pan de cazón",
          "testo": "Tortillas en capas con cazón deshebrado, frijol negro y salsa de tomate. Es el plato emblema de la ciudad: se encuentra en los restaurantes del centro y en las loncherías."
        },
        {
          "nome": "Camarones al coco",
          "testo": "Camarones fritos en costra de coco rallado, a menudo con una salsa dulce de fruta. Se piden en los restaurantes de mariscos del malecón."
        },
        {
          "nome": "Coctel campechano",
          "testo": "Vaso frío de mariscos mixtos, como camarón, pulpo y ostión, con salsa de tomate, limón y aguacate. En México «campechano» quiere decir justamente «mixto»."
        },
        {
          "nome": "Panuchos y codzitos",
          "testo": "Tortillas fritas rellenas de frijol y taquitos enrollados con salsa de tomate: los antojitos de la península, en mercados y cenadurías."
        }
      ],
      "attenzioni": [
        "El traslado del día siguiente hacia Mahahual es muy largo y se cambia de huso horario: salir temprano.",
        "El centro de noche es tranquilo, pero evitar las calles vacías fuera de las murallas.",
        "Precios bajos: no pagar de más por tours improvisados.",
        "Muchos museos del INAH, incluidos los de los fuertes, cierran los lunes: revisar antes de organizar el día.",
        "De abril a octubre el calor húmedo es fuerte: salir temprano y al atardecer, y tomar mucha agua."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
    imageAlt: 'Una puerta de las antiguas murallas del casco histórico de Campeche con una casa colonial de colores al fondo',
    immagine: '/images/messico/campeche.jpg',
  },
  {
    slug: 'mahahual',
    paeseSlug: 'messico',
    ordine: 5,
    nome: 'Mahahual',
    tipologia: ['mare', 'natura'],
    giorniConsigliati: '1-2 noches',
    visitataPersonalmente: true,
    introduzione:
      "Pueblo del Mar Caribe, mucho más tranquilo que Tulum o Playa del Carmen. Es la base para el snorkel con tortugas y para el segundo Temazcal del viaje.",
    percheAndarci: 'Mar tranquilo y punto de apoyo cómodo para la excursión en barca a Bacalar.',
    cosaVedere: ['Paseo marítimo de Mahahual'],
    cosaFare: ['Snorkel con tortugas', 'Temazcal nocturno en la selva'],
    doveDormire: 'No apunté el nombre del alojamiento; en el paseo marítimo hay opciones en todas las gamas de precio.',
    doveMangiare: 'No anoté dónde comimos en Mahahual.',
    comeArrivare: 'Desde Campeche, con el traslado más largo de todo el itinerario y un cambio de huso horario.',
    comeSpostarsi: 'Sobre los desplazamientos en Mahahual no tengo apuntes.',
    periodoMigliore: "no lo anoté para Mahahual; vale la estación seca aconsejada para la zona, de noviembre a abril.",
    costi: 'No apunté los gastos de Mahahual.',
    erroriDaEvitare: [
      "El día de llegada tiene ritmos apretados: si se falla con los horarios de las etapas anteriores (en particular Balam Ku) se cae el resto de la jornada",
    ],
    miaEsperienza:
      "Llegué a Mahahual por la noche, después del traslado más largo del viaje. Al día siguiente fue de los más llenos del itinerario, entre Bacalar, el snorkel con tortugas y el Temazcal: el detalle está en la página del viaje.",
      "luoghi": [
        {
          "nome": "Malecón de Mahahual",
          "testo": "El malecón del pueblo en el Caribe, con restaurantes, beach clubs y el muelle de cruceros, al sur de la Riviera Maya.",
          "come": "Desde Campeche con el traslado más largo del itinerario y cambio de huso horario.",
          "quando": "Tarde y noche.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Snorkel con tortugas",
          "testo": "Salida en lancha al arrecife cerca de la costa, donde se pueden encontrar tortugas. Aquí el arrecife está cerca de la orilla y menos concurrido que en la Riviera Maya.",
          "come": "Tour desde el malecón con operador.",
          "quando": "Mañana.",
          "tempo": "2-3 horas"
        },
        {
          "nome": "Temazcal en la selva",
          "testo": "Rito de baño de vapor de tradición indígena, con un guía.",
          "come": "Reserva con un alojamiento de la zona.",
          "quando": "Noche.",
          "tempo": "2-3 horas"
        },
        {
          "nome": "Banco Chinchorro",
          "testo": "Reserva de la biosfera frente a Mahahual, un atolón coralino de unos 800 km² con al menos nueve naufragios. Es una excursión que depende mucho del tiempo: con viento fuerte se cancelan las salidas.",
          "come": "Solo con operadores autorizados desde Mahahual o Xcalak, en lancha rápida.",
          "quando": "Mañana, con mar en calma; mejor en los meses secos.",
          "tempo": "Día completo",
          "consiglio": "Preguntar cuántas horas de navegación hay y qué incluye el precio (cuota del parque, comida, equipo)."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: snorkel con tortugas",
            "Tarde: malecón",
            "Noche: temazcal"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: llegada desde Campeche, malecón",
            "Día 2: Bacalar en el día, snorkel y temazcal"
          ]
        }
      ],
      "zone": [
        {
          "nome": "En el malecón",
          "perChi": "a pie de todo",
          "testo": "Hoteles de todos los precios, ruidosos los días de cruceros."
        },
        {
          "nome": "Fuera del centro",
          "perChi": "calma",
          "testo": "Cabañas más aisladas, lejos de los barcos."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado frito entero y ceviche",
          "testo": "El pescado del día frito entero, con arroz, ensalada y tortillas, en los restaurantes del malecón. A mediodía se pide ceviche de pescado o de camarón."
        },
        {
          "nome": "Pez león",
          "testo": "El pez león es una especie invasora del Caribe y aquí se cocina con gusto: en ceviche, frito o en tacos. Pedirlo también ayuda al arrecife."
        },
        {
          "nome": "Tacos de pescado",
          "testo": "Pescado capeado o a la plancha en tortilla de maíz, con col, salsa y limón. En los puestos del pueblo cuestan mucho menos que frente al mar."
        },
        {
          "nome": "Agua fresca",
          "testo": "Aguas de fruta en vasos grandes: jamaica, horchata, limón con chaya. Van bien con el calor del Caribe, en lugar de los refrescos."
        }
      ],
      "attenzioni": [
        "El día de llegada tiene un ritmo apretado: si se falla en los horarios de las paradas anteriores (en particular Balam Ku) se cae el resto del día.",
        "Los días de cruceros el malecón está lleno y los precios suben.",
        "Sol fuerte: protector solar apto para arrecifes y agua.",
        "Pocos cajeros y a veces sin efectivo: llegar con suficientes pesos.",
        "Entre primavera y verano puede llegar el sargazo: preguntar en el lugar qué playas están limpias."
      ],
    esperienzeSlugs: ['snorkeling-tartarughe-mahahual', 'temazcal'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Playa de Mahahual con palmeras, mesitas y barcas en el Mar Caribe',
    immagine: '/images/messico/mahahual.jpg',
  },
  {
    slug: 'bacalar',
    paeseSlug: 'messico',
    ordine: 6,
    nome: 'Bacalar',
    tipologia: ['natura'],
    giorniConsigliati: 'media jornada si se va en tour desde Mahahual, 1-2 noches para disfrutarla con calma',
    visitataPersonalmente: true,
    introduzione:
      "La «laguna de los siete colores», una de las extensiones de agua más bonitas de Yucatán. Se visita en el día desde Mahahual o como etapa aparte, durmiendo allí.",
    percheAndarci: 'Por el agua que cambia de color según la profundidad, los tours en barca y el kayak.',
    cosaVedere: ['Laguna de Bacalar'],
    cosaFare: ['Tour en barca de 2 horas por la laguna', 'Kayak (en mi caso estaba incluido después del tour en barca)'],
    doveDormire: "No dormí en Bacalar (la vi en el día desde Mahahual), así que no tengo un alojamiento que recomendar; quien quiera quedarse una noche encuentra alojamientos en la laguna en todas las gamas de precio.",
    doveMangiare: 'En el día no apunté dónde comimos.',
    comeArrivare: 'En tour organizado desde Mahahual, o por cuenta propia en furgoneta o coche.',
    comeSpostarsi: 'Nosotros íbamos en tour organizado desde Mahahual; en la laguna uno se mueve en barca o en kayak.',
    periodoMigliore: "no lo anoté para Bacalar; vale la estación seca aconsejada para la zona, de noviembre a abril.",
    costi: 'No apunté el precio del tour.',
    erroriDaEvitare: [
      'En tour desde Mahahual hay poco tiempo: quien pueda, que se plantee una noche allí para disfrutarla con calma',
    ],
    miaEsperienza:
      "La vi solo en el día, con un tour en barca de 2 horas y una hora de kayak. Preciosa, pero se notó el poco tiempo: es una de las etapas que en una próxima vuelta haría con más calma.",
      "luoghi": [
        {
          "nome": "Laguna de Bacalar",
          "testo": "La laguna de los siete colores, de decenas de kilómetros de largo y estrecha, con agua en tonos azules y turquesa sobre fondo blanco. Alberga el sistema de estromatolitos de agua dulce más extenso del mundo: formaciones rocosas creadas por microorganismos, de miles de años.",
          "come": "Desde Mahahual en tour organizado o por cuenta propia en van o coche.",
          "quando": "Mañana, con luz plena.",
          "tempo": "Media jornada o más",
          "consiglio": "El tiempo en una excursión de un día es justo: quien pueda, que valore una noche allí para disfrutarla con calma."
        },
        {
          "nome": "Tour en barca y kayak",
          "testo": "Un recorrido de 2 horas en barca por la laguna y, en mi caso, una hora de kayak incluida después del tour.",
          "come": "Tour reservado desde el hotel o el malecón.",
          "quando": "Mañana.",
          "tempo": "3 horas"
        },
        {
          "nome": "Cenote Azul",
          "testo": "Un cenote profundo y redondo a orillas de la laguna.",
          "come": "En taxi desde el centro.",
          "quando": "Mañana.",
          "tempo": "1-2 horas"
        },
        {
          "nome": "Fuerte San Felipe",
          "testo": "Fuerte que construyeron los españoles para defender Bacalar de los piratas, a orillas de la laguna. Horarios y entrada en el sitio del INAH.",
          "come": "A pie desde el centro.",
          "quando": "Mañana.",
          "tempo": "1 hora",
          "url": "https://www.inah.gob.mx/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Tour en barca de 2 horas",
            "Kayak",
            "Almuerzo junto al lago",
            "Cenote Azul"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: tour en barca y Fuerte San Felipe",
            "Día 2: kayak y cenote, luego salida"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Costanera de Bacalar",
          "perChi": "vista a la laguna",
          "testo": "Hoteles y cabañas directamente sobre el agua, más caros."
        },
        {
          "nome": "Centro del pueblo",
          "perChi": "presupuesto",
          "testo": "Más barato, a pocos minutos de la laguna."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado fresco",
          "testo": "A la plancha en la costanera."
        },
        {
          "nome": "Tacos y quesadillas",
          "testo": "Callejeros, en el centro."
        },
        {
          "nome": "Ceviche",
          "testo": "Con lima y cilantro."
        },
        {
          "nome": "Agua de Jamaica",
          "testo": "Bebida de hibisco, típica de México."
        }
      ],
      "attenzioni": [
        "En tour el tiempo es poco: considerar una noche.",
        "Proteger la laguna: protector solar biodegradable obligatorio en muchos puntos.",
        "No caminar sobre los estromatolitos: son organismos frágiles."
      ],
    esperienzeSlugs: ['tour-barca-bacalar'],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
    imageAlt: 'Aguas turquesa y transparentes de la laguna de Bacalar con un embarcadero de madera entre la vegetación',
    immagine: '/images/messico/bacalar.jpg',
  },
  {
    slug: 'tulum',
    paeseSlug: 'messico',
    ordine: 7,
    nome: 'Tulum',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "Ruinas mayas sobre un acantilado a pico sobre el Caribe, algunas de las playas más bonitas de la Riviera Maya y una vida nocturna que se hace notar.",
    percheAndarci: 'Cultura (el sitio arqueológico), mar (Playa Paraíso) y noches en la misma etapa: en otros sitios es difícil encontrarlos juntos.',
    cosaVedere: ['Sitio arqueológico de Tulum, sobre el acantilado', 'Caleta Tankah', 'Playa Paraíso', 'Cenote cerca de Dos Ojos, en el sistema Sac Actun'],
    cosaFare: [
      "Sitio arqueológico de Tulum por la mañana, antes del calor más fuerte: es el único sitio maya de México asomado al mar",
      "Día en Caleta Tankah (300 MXN por persona, sin tarjetas; ningún reembolso, ni siquiera si se sale a los pocos minutos)",
      "Comida y tarde en Playa Paraíso, en uno de los beach clubs más recomendados de la zona (tumbonas de pago)",
      "Baño en un cenote de la zona de Dos Ojos/Sac Actun: es en cueva, con estalactitas, distinto de los cenotes a cielo abierto de Yucatán",
      "Para quien tenga más tiempo: Xcacel (100 MXN; prohibidos comida, alcohol y altavoces; abierta de 10 a 16, cerrada los lunes; de abril a octubre se puede ver la eclosión de las tortugas), o Gran Cenote o Cenote Calavera",
    ],
    doveDormire: 'No apunté el nombre del alojamiento de Tulum.',
    doveMangiare:
      "Sabor de Mar para el pescado, El Takazo Jr para tacos baratos, Bonita (Tulum Burger Bar) para cambiar de lo mexicano. Para una cena más refinada, TuTulum: cocina mexicana reinterpretada (unos 40 € por persona), con algún plato a base de insectos para los más curiosos.",
    usciteSerali:
      "El Straw Hat es el local más concurrido por la noche; en invierno por la zona puede haber algún festival. Para la música en directo también está Vagalume.",
    comeArrivare: 'En furgoneta o en coche desde Mahahual (unas 2-3 horas).',
    comeSpostarsi: 'Sobre cómo nos movimos en Tulum no tengo apuntes.',
    periodoMigliore: "no lo anoté para Tulum; vale la estación seca aconsejada para la zona, de noviembre a abril.",
    costi: 'No apunté los gastos de Tulum; es una de las etapas más caras, con precios casi europeos.',
    erroriDaEvitare: [
      "En Caleta Tankah no se reembolsa en ningún caso, ni siquiera a los pocos minutos: mejor pensárselo antes de pagar la entrada",
    ],
    miaEsperienza:
      "En Caleta Tankah al principio el mar no invitaba, luego salió el sol y el día cambió, cenote incluido. El sitio arqueológico sobre el acantilado y Playa Paraíso siguen entre los recuerdos más fuertes del viaje.",
      "luoghi": [
        {
          "nome": "Zona arqueológica de Tulum",
          "testo": "Ciudad maya sobre el acantilado frente al Caribe, uno de los pocos sitios mayas frente al mar. El Castillo y el Templo del Dios del Viento son los puntos clave; la muralla que cierra la ciudad por tres lados explica el nombre Tulum, «muro» en maya (antiguamente se llamaba Zamá, «amanecer»).",
          "come": "Desde Tulum pueblo en taxi o bici hasta el Parque del Jaguar, el área protegida donde está el sitio; cómo llegar a la entrada se pregunta en el lugar. La playita bajo el sitio a veces está cerrada (sargazo o anidación de tortugas).",
          "quando": "Mañana, antes del calor y de los autocares.",
          "tempo": "2 horas",
          "costo": "265 MXN para extranjeros (2026).",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Baño en la caleta bajo el acantilado después de la visita, si el acceso está abierto."
        },
        {
          "nome": "Cenote Dos Ojos",
          "testo": "Dos cenotes conectados en una cueva con estalactitas, en el sistema Sac Actun: distinto de los cenotes a cielo abierto de Yucatán.",
          "come": "En coche o taxi desde Tulum, hacia el norte.",
          "quando": "Mañana.",
          "tempo": "2 horas",
          "consiglio": "En Tulum desaconsejo los cenotes más turísticos y propongo Dos Ojos. Al lado hay otro precioso cuyo nombre he olvidado."
        },
        {
          "nome": "Caleta Tankah",
          "testo": "Una caleta de agua turquesa con un cenote, con entrada de pago: solo efectivo y sin reembolsos.",
          "come": "Taxi desde Tulum.",
          "quando": "De día.",
          "tempo": "Media jornada",
          "consiglio": "Al principio el mar no invitaba, luego salió el sol y el día cambió."
        },
        {
          "nome": "Playa Paraíso",
          "testo": "Una playa con beach clubs, entre las más recomendadas de la zona, con camas de pago.",
          "come": "Taxi desde Tulum.",
          "quando": "Tarde.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Xcacel",
          "testo": "Playa protegida, sin hoteles, donde las tortugas desovan entre primavera y verano. Las reglas son estrictas: nada de comida, alcohol ni bocinas; la entrada, el horario y los días de cierre hay que verificarlos en el lugar.",
          "come": "Taxi o coche desde Tulum.",
          "quando": "Mañana.",
          "tempo": "2-3 horas"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: zona arqueológica",
            "Almuerzo en Playa Paraíso",
            "Tarde: Dos Ojos o Gran Cenote"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: zona arqueológica y Playa Paraíso",
            "Día 2: Caleta Tankah, Dos Ojos y Xcacel"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Pueblo de Tulum",
          "perChi": "servicios y precios",
          "testo": "Hoteles en el centro, restaurantes, cerca de las paradas de bus."
        },
        {
          "nome": "Zona hotelera frente a la playa",
          "perChi": "mar",
          "testo": "Hoteles y beach clubs, más caros."
        }
      ],
      "sapori": [
        {
          "nome": "Cochinita pibil",
          "testo": "Cerdo marinado, especialidad yucateca."
        },
        {
          "nome": "Tacos al pastor",
          "testo": "Al pastor y de pescado, callejeros."
        },
        {
          "nome": "Ceviche",
          "testo": "Con lima y cilantro, en los beach clubs."
        },
        {
          "nome": "Agua de Jamaica",
          "testo": "Hibisco, para el calor."
        }
      ],
      "attenzioni": [
        "Zona arqueológica: llevar agua y protector, el calor es fuerte; prohibido subir a las estructuras.",
        "Cenotes: seguir las reglas sobre protector y ducha; los más turísticos están llenos.",
        "Caleta Tankah: sin tarjetas y sin reembolsos, ni siquiera si se sale a los pocos minutos."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Grupo con traje de neopreno y equipo de snorkel en un cenote en cueva cerca de Dos Ojos, Tulum',
    immagine: '/images/messico/cenote-dos-ojos-gruppo.jpg',
  },
  {
    slug: 'playa-del-carmen',
    paeseSlug: 'messico',
    ordine: 8,
    nome: 'Playa del Carmen',
    tipologia: ['nightlife', 'mare'],
    giorniConsigliati: '1 noche en mi itinerario, pero se puede quedar 1-2 días completos',
    visitataPersonalmente: true,
    introduzione: "La ciudad más mundana de la Riviera Maya y el punto de partida clásico para la excursión a Cozumel.",
    percheAndarci: 'Vida nocturna y, para quien tenga un día más, el segundo arrecife de coral más grande del mundo en Cozumel.',
    cosaVedere: ['5ta Avenida'],
    cosaFare: [
      "Excursión a Cozumel en catamarán compartido (unos 1.670 MXN por persona, con ferri de ida y vuelta, 4 horas de navegación con paradas de snorkel en Palancar/El Cielo/El Cielito, barra libre y comida buffet en Playa Mia) o en barca privada (unos 700 MXN por persona, más el ferri, unos 580 MXN ida y vuelta, con snacks y 2 cervezas por persona). En este viaje no la hicimos, pero con más tiempo la recomiendo.",
      'Día en las playas públicas: Mamitas Beach, Playacar Beach, Parque Fundadores',
      'Compras en la 5ta Avenida',
      'Noche en el Clandestino',
    ],
    doveDormire: "En este viaje en Playa del Carmen pasé solo una noche, sin dormir allí: no tengo un alojamiento que recomendar.",
    doveMangiare:
      "Las Camelias en la 5ta Avenida para una comida contundente, Zitla como alternativa. Para una ocasión especial Mezcla (unos 50 € por persona): caro pero muy bueno.",
    usciteSerali:
      "El Coco Bongo (la misma cadena que en Cancún) es la opción más conocida; en la 5ta Avenida también están muy concurridos Clandestino y Santino.",
    comeArrivare: 'En furgoneta o en coche desde Tulum (aproximadamente 1 hora).',
    comeSpostarsi: "Sobre cómo moverse por la ciudad no tengo apuntes: la vi solo una noche.",
    periodoMigliore: "no lo anoté; vale la estación seca aconsejada para la Riviera Maya, de noviembre a abril.",
    costi: 'Por una sola noche no apunté los gastos; como Tulum, tiene precios casi europeos.',
    erroriDaEvitare: [],
    miaEsperienza:
      "La vi solo de noche, con una parada en el Clandestino: muy poco para hacerme una idea de la ciudad, que merecería más tiempo (quizá con la excursión a Cozumel, que en mi viaje no hicimos).",
      "luoghi": [
        {
          "nome": "Quinta Avenida (5ta Avenida)",
          "testo": "La calle peatonal principal, paralela al mar, con tiendas, restaurantes y bares.",
          "come": "A pie desde el centro.",
          "quando": "Tarde y noche.",
          "tempo": "2 horas"
        },
        {
          "nome": "Mamitas Beach, Playacar y Parque Fundadores",
          "testo": "Las playas públicas del centro, con beach clubs y tramos gratuitos.",
          "come": "A pie desde el centro.",
          "quando": "Mañana.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Cozumel en catamarán o barca privada",
          "testo": "Excursión de un día a Cozumel con snorkel en los arrecifes de Palancar, El Cielo y El Cielito. En este viaje no la hicimos, pero con más tiempo la recomiendo.",
          "come": "Catamarán compartido con ferry, almuerzo y barra libre, o barca privada con el ferry aparte: compara precios de varios operadores.",
          "quando": "Mañana.",
          "tempo": "Día completo"
        },
        {
          "nome": "Clandestino",
          "testo": "Un local nocturno en el centro.",
          "come": "A pie desde la 5ta.",
          "quando": "Noche.",
          "tempo": "Una velada",
          "consiglio": "Solo la vi de noche, con una parada en el Clandestino."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: playa pública",
            "Almuerzo en la 5ta Avenida",
            "Tarde: compras",
            "Noche: Clandestino"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: playas y 5ta Avenida",
            "Día 2: Cozumel en catamarán"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro (5ta Avenida)",
          "perChi": "vida nocturna",
          "testo": "Todo a pie, pero ruidoso y caro."
        },
        {
          "nome": "Playacar",
          "perChi": "resorts",
          "testo": "Zona de resorts cerrada, más tranquila, cerca del ferry."
        }
      ],
      "sapori": [
        {
          "nome": "Tacos al pastor y de pescado",
          "testo": "Callejeros."
        },
        {
          "nome": "Ceviche",
          "testo": "Con lima, en restaurantes frente al mar."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Cerdo yucateco."
        },
        {
          "nome": "Aguachile",
          "testo": "Camarones crudos en salsa picante de lima."
        }
      ],
      "attenzioni": [
        "En la 5ta Avenida los precios son turísticos: alejarse una o dos calles para comer mejor.",
        "Captadores que venden tours: no detenerse.",
        "El ferry a Cozumel tiene horarios fijos: comprobar el último regreso."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'La playa y el paseo marítimo de Playa del Carmen vistos desde el mar, con barcas y palmeras',
    immagine: '/images/messico/playa-del-carmen.jpg',
  },
  {
    slug: 'holbox',
    paeseSlug: 'messico',
    ordine: 9,
    nome: 'Holbox',
    tipologia: ['mare', 'natura', 'nightlife'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "Isla sin coches en el Golfo de México, a la que solo se llega en ferri: tiburón ballena, bioluminiscencia y un ritmo mucho más lento que el resto del viaje.",
    percheAndarci: "Es el momento más alto del itinerario, por el tiburón ballena y por el ambiente de la isla.",
    cosaVedere: ['Punta Mosquito', 'El centro de la isla, sin coches'],
    cosaFare: [
      'Excursión con el tiburón ballena (mira la ficha de experiencia dedicada)',
      "Bioluminiscencia en Punta Mosquito: por cuenta propia con un «carrito» (taxi local/golf cart) hasta el punto; a pie (desaconsejado: aproximadamente una hora de camino por sentido, casi toda a oscuras); en kayak con guía (500 MXN por persona para grupos de más de 8 personas, 400 MXN por debajo de 8) o con un tour organizado en barca. Se ve mejor de abril a noviembre y depende de las fases lunares y del tiempo: conviene preguntar allí mismo el mismo día.",
      "Tour de las 3 Islas (Isla Pájaros, cenote de Yalahau, Isla Pasión o Punta Mosquito): paseo compartido en barca de unas 3 horas, 750-900 MXN por persona según el operador (algunos incluyen el traslado desde el hotel por unos 1.100 MXN); la entrada al cenote Yalahau se paga aparte, unos 200 MXN. Se ven flamencos, delfines y varias especies de aves.",
      "Cabo Catoche (en mi viaje no la hicimos, pero es de las excursiones más ofrecidas en la isla): la punta más al norte de Yucatán, donde se encuentran el Golfo de México y el Mar Caribe. Tour compartido en barca desde la mañana hasta última hora de la tarde, con snorkel en un arrecife de coral poco profundo (unos 2 metros: tortugas, pulpos, langostas y a veces tiburones nodriza, inofensivos), pesca y ceviche fresco preparado en el momento. Aproximadamente 80-100 $ por persona; conviene comparar varios operadores antes de reservar.",
      'Paseo a caballo por la playa: 850 MXN por persona por una hora y media',
      'Beach clubs con consumición mínima (normalmente descontada de la cuenta final): Carolinda, Zomay, Barbarossa, Amaite Beach Club',
      'Si llueve: curso de cocina en la Puerta Rosa (bastante caro, pero una buena alternativa) o clase de yoga',
    ],
    doveDormire: 'No apunté el nombre del alojamiento de Holbox.',
    doveMangiare:
      "Para gastar poco: Taco Queto para tacos baratos y buenos, El Crustaceo Kascarudo para pescado y marisco sin florituras. Gama media: Mandarina, Posada Mawimbi, Viva Zapata, Chiringuito Raíces. Para una ocasión: Casa Alebrije o Tacos de Humo (aquí a menudo la casa invita a un tequila de bienvenida).",
    usciteSerali:
      "Al atardecer el Café del Mar es el sitio adecuado para una copa con vistas. Por la noche: Hot Corner para pachangueo y música en directo, La Combi entre música en vivo y DJ set, Bikini Bottom para un DJ set en la playa, Tribe Hostel para música en vivo, Chobys si se quiere ver todavía el atardecer más tarde.",
    comeArrivare: 'Ferri desde Chiquilá (25-30 minutos), al que se llega en furgoneta/coche desde Cancún.',
    comeSpostarsi: 'Isla sin coches: a pie o con los "carritos" (taxis locales/golf cart).',
    periodoMigliore: 'La bioluminiscencia se ve mejor de abril a noviembre, y depende de las fases lunares y del tiempo.',
    costi: 'No apunté la cuenta total de Holbox; los precios de cada excursión están en las partidas de arriba y en las fichas de experiencia.',
    erroriDaEvitare: [
      'Salir a ver la bioluminiscencia nocturna sin mucho repelente: en Punta Mosquito los mosquitos no dan tregua',
      'Ir a pie a ver la bioluminiscencia: es casi una hora de camino a oscuras por sentido, mejor un carrito, un kayak o un tour en barca',
      'El tour de las 3 Islas es bonito pero un poco redundante si ya se han visto cosas parecidas en otro punto del viaje',
    ],
    miaEsperienza:
      "Holbox fue el cierre adecuado del viaje. Si tuviera que recomendar una sola actividad de todo el itinerario, sería la excursión con el tiburón ballena, que hice precisamente aquí.",
      "luoghi": [
        {
          "nome": "Tiburón ballena",
          "testo": "Excursión en barca para nadar con el tiburón ballena, permitida en grupos pequeños. Hay una ficha de experiencia dedicada. Si tuviera que recomendar una sola actividad de todo el itinerario, sería esta.",
          "come": "Tour desde el puerto de Holbox, con guía.",
          "quando": "La temporada va más o menos de mediados de mayo a mediados de septiembre, con los mejores meses en julio y agosto; las salidas se hacen con permisos de la CONANP.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Bioluminiscencia en Punta Mosquito",
          "testo": "El plancton luminiscente ilumina el agua de noche. Se puede ir por cuenta propia en «carrito» hasta el punto, en kayak con guía o con un tour en barca.",
          "come": "Preguntar en el lugar el mismo día: depende de las fases lunares y del tiempo.",
          "quando": "Noche, mejor sin luna.",
          "tempo": "2 horas",
          "consiglio": "Ir a pie no se aconseja: aproximadamente una hora de camino por dirección, casi toda a oscuras."
        },
        {
          "nome": "Tour de las 3 Islas",
          "testo": "Recorrido compartido en barca, con flamencos, delfines y aves: Isla Pájaros, cenote de Yalahau, Isla Pasión o Punta Mosquito.",
          "come": "Precios distintos según el operador, algunos con traslado desde el hotel. El cenote Yalahau se paga aparte.",
          "quando": "Mañana.",
          "tempo": "Medio día"
        },
        {
          "nome": "Cabo Catoche",
          "testo": "Excursión en barca hacia la punta nororiental de la península de Yucatán, entre el Golfo de México y el Caribe, normalmente con paradas de snorkel. En el viaje no la hicimos.",
          "come": "Tour compartido en barca; compara varios operadores y qué incluye el precio.",
          "quando": "Día completo.",
          "tempo": "Día completo"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: tour de las 3 Islas",
            "Tarde: playa",
            "Noche: bioluminiscencia"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: tiburón ballena (en temporada)",
            "Día 2: 3 Islas y Punta Mosquito"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Días 1-2 como arriba",
            "Día 3: Cabo Catoche o paseo a caballo"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro del pueblo",
          "perChi": "a pie de todo",
          "testo": "Restaurantes, tiendas y hoteles cerca de la plaza, calles de arena sin coches."
        },
        {
          "nome": "Playa fuera del pueblo",
          "perChi": "calma",
          "testo": "Hoteles frente al mar, más aislados."
        }
      ],
      "sapori": [
        {
          "nome": "Pizza de Holbox",
          "testo": "Con langosta, típica de la isla."
        },
        {
          "nome": "Ceviche",
          "testo": "Pescado fresco."
        },
        {
          "nome": "Tacos de pescado",
          "testo": "Callejeros."
        },
        {
          "nome": "Langosta y mariscos",
          "testo": "A la parrilla, en temporada."
        }
      ],
      "attenzioni": [
        "Tiburón ballena: estacional; no está garantizado y depende del operador.",
        "Bioluminiscencia: depende de las fases lunares y del tiempo, preguntar en el lugar el mismo día.",
        "En las playas de Holbox hay sargazo en ciertos meses: no es un defecto de la isla pero hay que tenerlo en cuenta."
      ],
    esperienzeSlugs: ['squalo-balena-holbox', 'bioluminescenza-holbox', 'tour-3-islas-holbox', 'cabo-catoche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Una lancha anclada en el agua baja y cristalina de Holbox, con la orilla blanca y las palmeras en el horizonte',
    immagine: '/images/messico/holbox-barca-acqua-bassa-riccardo.jpg',
  },
  {
    slug: 'uxmal-ruta-puuc',
    paeseSlug: 'messico',
    ordine: 30,
    nome: 'Uxmal y la Ruta Puuc',
    tipologia: ['archeologia', 'cultura'],
    giorniConsigliati: '1-2 días, durmiendo cerca de Uxmal o en Santa Elena',
    visitataPersonalmente: true,
    introduzione:
      'La gran ciudad maya del estilo puuc, al sur de Mérida, y la carretera rural que une los sitios menores del mismo estilo: Kabah, Sayil y Labná.',
    percheAndarci:
      'Para ver una arquitectura maya distinta de Chichén Itzá: fachadas lisas abajo y cubiertas arriba de mosaicos de piedra y máscaras de Chaac, el dios de la lluvia. Los sitios de la Ruta Puuc son tranquilos y a menudo están casi vacíos.',
    cosaVedere: [
      'La Pirámide del Adivino y el Cuadrángulo de las Monjas en Uxmal',
      'El Codz Poop de Kabah, con su fachada de máscaras',
      'El Gran Palacio de Sayil, sobre terrazas superpuestas',
      'El arco de Labná',
    ],
    cosaFare: [
      'Entrar en Uxmal a la apertura, a las 8',
      'Recorrer la Ruta Puuc en coche, parando en los sitios menores',
      'Comer carne cocinada bajo tierra, el pib',
    ],
    doveDormire:
      'Cerca de Uxmal hay pocos alojamientos; Santa Elena es el pueblo más cercano. Dormir aquí permite entrar en los sitios a la apertura sin la carretera desde Mérida.',
    doveMangiare:
      "Después de Uxmal comí en el Po' Pol Chac, carne cocinada bajo tierra.",
    comeArrivare: 'Desde Mérida por la Carretera Federal 261 hacia Santa Elena, en coche o en tour.',
    comeSpostarsi: 'Para la Ruta Puuc hace falta coche o tour: los sitios están a lo largo de una carretera rural.',
    periodoMigliore: 'de noviembre a abril, la temporada seca; desde abril el calor en los sitios sin sombra es fuerte.',
    costi: 'Uxmal 105 MXN de entrada INAH más 461 MXN de cuota estatal CULTUR para extranjeros; Kabah 155 MXN; Labná y Sayil 145 MXN cada uno (fichas INAH, noviembre de 2026).',
    erroriDaEvitare: [
      'Llegar a Uxmal por la tarde: cierra a las 16, con último acceso a las 15',
      'Llevar comida a la entrada de los sitios: no está permitido',
    ],
    miaEsperienza:
      "Uxmal lo visité con un guía, en la carretera entre Mérida y Campeche, y luego comí en el Po' Pol Chac, carne cocinada bajo tierra. La Ruta Puuc no la hice.",
      "luoghi": [
        {
          "nome": "Uxmal",
          "testo": "La ciudad más grande del estilo puuc, patrimonio de la UNESCO. La Pirámide del Adivino tiene una planta ovalada poco común; el Cuadrángulo de las Monjas es un patio cerrado por cuatro palacios con fachadas de mosaicos de piedra.",
          "come": "Desde Mérida por la Federal 261 hacia Santa Elena. Boleto INAH más cuota estatal CULTUR.",
          "quando": "Abierto todos los días de 8 a 16, último acceso a las 15 (ficha INAH).",
          "tempo": "2-3 horas",
          "costo": "105 MXN INAH más 461 MXN CULTUR para extranjeros; los residentes en Yucatán no pagan la cuota estatal (ficha INAH, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5797",
          "consiglio": "Con un guía se entienden mucho mejor los símbolos de las fachadas."
        },
        {
          "nome": "Kabah",
          "testo": "El Codz Poop tiene la fachada cubierta por cientos de máscaras de Chaac, uno de los mejores ejemplos del arte maya según el INAH. En el sitio hay también un arco aislado.",
          "come": "En coche, al sur de Uxmal por la Ruta Puuc.",
          "quando": "Abierto todos los días de 8 a 17, último acceso a las 16 (ficha INAH).",
          "tempo": "1 hora",
          "costo": "155 MXN para extranjeros (ficha INAH, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5504"
        },
        {
          "nome": "Sayil",
          "testo": "Un sitio de la región puuc con el Gran Palacio, o Palacio Norte, construido sobre dos terrazas que dan la impresión de tres pisos, con fachadas añadidas en fases sucesivas.",
          "come": "En coche por la Ruta Puuc, entre Kabah y Labná.",
          "quando": "Abierto todos los días de 8 a 17, último acceso a las 16 (ficha INAH).",
          "tempo": "45 minutos",
          "costo": "145 MXN para extranjeros (ficha INAH, noviembre de 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/4458"
        },
        {
          "nome": "Labná",
          "testo": "Famoso por su arco, muy decorado, que unía dos patios. Habitado desde el 200 a. C., tuvo su apogeo entre el 800 y el 1000 d. C. (ficha INAH). El sitio es tranquilo.",
          "come": "En coche, al final de la Ruta Puuc.",
          "quando": "Abierto todos los días de 8 a 17, último acceso a las 16 (ficha INAH).",
          "tempo": "1 hora",
          "costo": "145 MXN para extranjeros (ficha INAH, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/4427"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Uxmal a la apertura",
            "Comida con pib",
            "Tarde: Kabah"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Uxmal y noche en los alrededores",
            "Día 2: Kabah, Sayil y Labná, luego hacia Campeche"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Alrededores de Uxmal",
          "perChi": "quien quiere entrar a la apertura",
          "testo": "Pocos alojamientos cerca del sitio, conviene reservar."
        },
        {
          "nome": "Santa Elena",
          "perChi": "quien gasta menos",
          "testo": "El pueblo más cercano, con alojamientos sencillos."
        }
      ],
      "sapori": [
        {
          "nome": "Pib y cochinita",
          "testo": "Carne marinada en achiote y cocinada bajo tierra, el método maya del pib."
        },
        {
          "nome": "Sopa de lima",
          "testo": "Sopa de pollo y lima, el clásico yucateco."
        }
      ],
      "attenzioni": [
        "Uxmal cierra antes que los otros sitios: último acceso a las 15.",
        "Nada de comida en la entrada, nada de mascotas, cuota extra para cámaras de vídeo profesionales.",
        "En la Ruta Puuc hay pocos servicios: agua y gasolina antes de salir."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo', 'messico-beach-life'],
    imageAlt: "El trono del jaguar bicéfalo frente al Palacio del Gobernador de Uxmal",
    immagine: '/images/messico/uxmal-ruta-puuc-riccardo.webp',
  },
  {
    slug: 'palenque',
    paeseSlug: 'messico',
    ordine: 31,
    nome: 'Palenque',
    tipologia: ['archeologia', 'natura', 'cultura'],
    giorniConsigliati: '2 noches, con un día completo para el sitio',
    visitataPersonalmente: false,
    introduzione:
      'Una ciudad maya clásica en las primeras colinas de Chiapas, dentro de un parque nacional cubierto de selva, con el Templo de las Inscripciones y la tumba del rey Pakal.',
    percheAndarci:
      'Es uno de los sitios mayas más bonitos por la mezcla de arquitectura y naturaleza: templos entre los árboles, arroyos y monos aulladores. Tiene también estación del Tren Maya.',
    cosaVedere: [
      'El Templo de las Inscripciones y el Palacio con su torre',
      'El Grupo de las Cruces',
      'El museo de sitio',
    ],
    cosaFare: [
      'Entrar a la apertura, a las 8, cuando la selva aún está fresca',
      'Seguir los senderos hasta los grupos de templos más alejados',
      'Valorar las cascadas de Misol-Ha y Agua Azul solo si los avisos oficiales sobre la Federal 199 lo permiten',
    ],
    doveDormire:
      'El pueblo para gastar menos; la carretera que sube al sitio para dormir entre la vegetación, más cerca de la entrada.',
    doveMangiare:
      'Cocina sencilla en el pueblo. En el sitio no se entra con comida.',
    comeArrivare: 'Tren Maya (estación de Palenque) o autobús ADO; en coche por la Federal 186, desviándose en el km 114 hacia Palenque (ficha INAH).',
    comeSpostarsi: 'Del pueblo al sitio, a unos 7 km dentro del parque nacional, en taxi o colectivo.',
    periodoMigliore: 'de noviembre a abril, la temporada más seca; el resto del año llueve a menudo y hace mucho calor húmedo.',
    costi: '210 MXN de entrada INAH para extranjeros, más 215 MXN de cuota del parque nacional (CONANP) (ficha INAH, noviembre de 2026).',
    erroriDaEvitare: [
      'Ir a las cascadas en coche propio por la Federal 199 sin revisar los avisos: el Foreign Office británico desaconseja los viajes no esenciales en ese tramo',
      'Llegar a mediodía: calor fuerte y gente',
      'Buscar el museo de sitio un lunes: abre de martes a domingo (ficha INAH)',
    ],
      "luoghi": [
        {
          "nome": "Zona arqueológica de Palenque",
          "testo": "El Templo de las Inscripciones guardaba la tumba de Pakal, rey de Palenque en el siglo VII; el Palacio tiene una torre, rara en la arquitectura maya. Alrededor, el Grupo de las Cruces y templos menores en la selva.",
          "come": "Boletos en el centro de visitantes (CATVI) o en línea. Se paga la entrada INAH y la cuota del parque nacional.",
          "quando": "Abierto todos los días de 8 a 17, último acceso a las 16 (ficha INAH). Mejor a la apertura.",
          "tempo": "3-4 horas",
          "costo": "210 MXN INAH más 215 MXN CONANP para extranjeros (ficha INAH, noviembre de 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/4853",
          "consiglio": "Nada de comida en la entrada: se come antes o después."
        },
        {
          "nome": "Museo de sitio Alberto Ruz Lhuillier",
          "testo": "El museo del sitio, con los relieves y objetos hallados en las excavaciones, dedicado al arqueólogo que en 1952 descubrió la tumba de Pakal.",
          "come": "En la carretera del sitio. La entrada está incluida en el boleto de la zona arqueológica.",
          "quando": "De martes a domingo, de 8:30 a 17 (ficha INAH).",
          "tempo": "1 hora",
          "url": "https://lugares.inah.gob.mx/en/node/4293"
        },
        {
          "nome": "Misol-Ha y Agua Azul",
          "testo": "Dos cascadas famosas al sur de Palenque, en la carretera a Ocosingo, la Federal 199: Misol-Ha es un salto único en una amplia poza, Agua Azul una serie de pozas de agua azul, que en temporada de lluvias pierde el color, a unos 60 km más un desvío.",
          "come": "Solo con un tour organizado desde el pueblo, y solo si los avisos oficiales lo permiten en ese momento.",
          "consiglio": "El Foreign Office británico desaconseja los viajes no esenciales por la 199 entre Rancho Nuevo y el entronque de Chancalá, a las afueras de Palenque, por bloqueos ilegales, protestas y riesgo de secuestro. Las cuotas de entrada las gestionan las comunidades: no verificadas."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: el sitio a la apertura",
            "Tarde: el museo de sitio"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: sitio y museo",
            "Día 2: senderos en la selva o, si los avisos lo permiten, las cascadas con un tour"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Pueblo de Palenque",
          "perChi": "presupuesto y transporte",
          "testo": "Más barato, cerca de autobuses y servicios."
        },
        {
          "nome": "Carretera del sitio",
          "perChi": "quien quiere la selva",
          "testo": "Alojamientos entre la vegetación, más cerca de la entrada del parque."
        }
      ],
      "sapori": [
        {
          "nome": "Café y chocolate de Chiapas",
          "testo": "Chiapas es tierra de café y cacao."
        },
        {
          "nome": "Tamales chiapanecos",
          "testo": "Tamales envueltos en hoja de plátano, en los mercados."
        }
      ],
      "attenzioni": [
        "En Chiapas, Viaggiare Sicuri señala robos a extranjeros y recomienda no salir de las carreteras estatales.",
        "El Foreign Office desaconseja la franja de 40 km de la frontera con Guatemala: Yaxchilán y Bonampak están en esa zona.",
        "Repelente fuerte: en el parque hay muchos mosquitos."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo'],
    imageAlt: "El Templo de las Inscripciones de Palenque entre los árboles de la selva de Chiapas",
    immagine: '/images/messico/palenque.webp',
  },
  {
    slug: 'calakmul',
    paeseSlug: 'messico',
    ordine: 32,
    nome: 'Calakmul',
    tipologia: ['archeologia', 'natura'],
    giorniConsigliati: '2 noches en Xpujil o en la carretera de la reserva, con un día completo para el sitio',
    visitataPersonalmente: false,
    introduzione:
      'Una de las grandes capitales del mundo maya clásico, rival de Tikal, sepultada en la selva de la Reserva de la Biosfera de Calakmul, en el sur de Campeche. Es patrimonio de la UNESCO tanto cultural como natural.',
    percheAndarci:
      'Para ver una ciudad maya inmensa casi sin gente, y la selva desde lo alto de las pirámides. En los senderos se pueden encontrar monos y aves de la selva.',
    cosaVedere: [
      'Las grandes estructuras de la ciudad, con la vista sobre la selva',
      'Las estelas de la plaza central',
      'Los sitios de estilo Río Bec alrededor de Xpujil, como Becán y Xpuhil',
    ],
    cosaFare: [
      'Salir al amanecer de Xpujil para tener tiempo en el sitio',
      'Caminar por los senderos señalizados, atentos a la fauna',
      'Parar en Balam Ku por la Federal 186',
    ],
    doveDormire:
      'El pueblo de Xpujil, en la Federal 186, o los alojamientos ecológicos en la carretera de la reserva. Son pocos: conviene reservar.',
    doveMangiare:
      'Pocos sitios y sencillos en Xpujil. Para el día en la reserva, mejor llevar comida y agua.',
    comeArrivare: 'Por la Federal 186 (Escárcega-Chetumal): en el entronque del kilómetro 95 se toma la carretera de la reserva, y el sitio está en el kilómetro 60 (ficha INAH). El Tren Maya tiene estaciones en Xpujil y Calakmul, pero no consta transporte público hasta las ruinas.',
    comeSpostarsi: 'En coche o en tour desde Xpujil.',
    periodoMigliore: 'de noviembre a abril, la temporada seca; con las lluvias la selva está más húmeda y llena de mosquitos.',
    costi: '210 MXN de entrada INAH para extranjeros, más 215 MXN de cuota de la reserva (CONANP) (ficha INAH, noviembre de 2026). Llevar efectivo.',
    erroriDaEvitare: [
      'Salir tarde: el último acceso es a las 16 y la carretera de la reserva es larga y estrecha',
      'Salirse de los senderos señalizados',
      'Entrar en la reserva sin gasolina, agua y efectivo',
      'Conducir de noche por la Federal 186',
    ],
      "luoghi": [
        {
          "nome": "Zona arqueológica de Calakmul",
          "testo": "La capital de la dinastía Kaan, que disputó a Tikal el dominio de las tierras bajas mayas. Las estructuras más altas superan las copas de los árboles: desde arriba solo se ve selva hasta el horizonte.",
          "come": "Desde el entronque del km 95 de la Federal 186, 60 km de carretera dentro de la reserva. Se paga la entrada INAH y la cuota CONANP de la reserva.",
          "quando": "Abierto todos los días de 8 a 17, último acceso a las 16 (ficha INAH). Salir al amanecer.",
          "tempo": "Día completo",
          "costo": "210 MXN INAH más 215 MXN CONANP para extranjeros (ficha INAH, noviembre de 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5551",
          "consiglio": "Calzado cerrado, repelente, agua y comida para todo el día."
        },
        {
          "nome": "Becán y Xpuhil",
          "testo": "Dos sitios de estilo Río Bec cerca del pueblo de Xpujil, con torres decorativas y, en Becán, un foso alrededor de la ciudad.",
          "come": "En coche desde la Federal 186, a pocos minutos del pueblo.",
          "tempo": "1-2 horas",
          "consiglio": "Buenos para la tarde del día de llegada."
        },
        {
          "nome": "Balam Ku",
          "testo": "Un sitio pequeño en la Federal 186, en la carretera entre Escárcega y Xpujil.",
          "come": "En coche, como parada en el camino.",
          "tempo": "1 hora"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Amanecer: salida de Xpujil",
            "Mañana y primera hora de la tarde: Calakmul",
            "Regreso a Xpujil antes de que oscurezca"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Balam Ku en el camino, Becán o Xpuhil por la tarde",
            "Día 2: Calakmul"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Xpujil",
          "perChi": "servicios y transporte",
          "testo": "El pueblo en la Federal 186, con alojamientos sencillos y algunos sitios para comer."
        },
        {
          "nome": "Carretera de la reserva",
          "perChi": "quien quiere la selva",
          "testo": "Alojamientos ecológicos más cerca del sitio, pocos y con reserva."
        }
      ],
      "sapori": [
        {
          "nome": "Cocina campechana",
          "testo": "El pan de cazón y el pescado del Golfo se encuentran en Campeche; en la zona de Calakmul la cocina es sencilla, casera."
        }
      ],
      "attenzioni": [
        "Quedarse en los senderos señalizados.",
        "No se fuma en el sitio y hay cuota extra para cámaras de vídeo profesionales.",
        "Viaggiare Sicuri señala chikungunya en Campeche: repelente fuerte."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo'],
    imageAlt: "La Estructura I de Calakmul asomando sobre la selva de la reserva, vista desde la cima de la Estructura II",
    immagine: '/images/messico/calakmul.webp',
  },
]
