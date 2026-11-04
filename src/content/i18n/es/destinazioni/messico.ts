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
          "testo": "Una isla a 20 minutos en ferry, con playas, snorkel y un pueblo tranquilo, cómoda para una excursión de un día.",
          "come": "Ferry desde Puerto Juárez o Playa Tortugas; en la isla se circula en golf cart alquilado.",
          "quando": "Mañana, para tener tiempo.",
          "tempo": "Día completo",
          "consiglio": "La alternativa es la jornada organizada en catamarán, más cara pero con paradas de snorkel incluidas."
        },
        {
          "nome": "Playa Marlin y Playa Gaviota",
          "testo": "Playas públicas gratuitas en el centro de la zona hotelera, sin camas de pago.",
          "come": "Bus local R1 desde el centro.",
          "quando": "Mañana.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Parque las Palapas y Mercado 28",
          "testo": "Plaza del centro con puestos de comida callejera y música por la noche, y el mercado con artesanía y pequeños restaurantes.",
          "come": "A pie desde el centro, al norte de la zona hotelera.",
          "quando": "Noche.",
          "tempo": "2-3 horas",
          "consiglio": "El primer bocado de México con comida callejera."
        },
        {
          "nome": "Coco Bongo",
          "testo": "El local con espectáculo más famoso de la ciudad.",
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
    tripSlugs: ['messico-beach-life'],
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
          "come": "Desde Valladolid unos 40 minutos en coche o taxi, o tour con guía.",
          "quando": "Mañana, a la apertura, antes de los autocares y del calor.",
          "tempo": "3-4 horas",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Para Chichén Itzá recomiendo un guía: Alejandro habla español e inglés, nació a 20 minutos del sitio y está muy preparado."
        },
        {
          "nome": "Ek Balam",
          "testo": "Sitio maya más pequeño y mucho menos concurrido, con una acrópolis a la que se puede subir y decoraciones en estuco.",
          "come": "Desde Valladolid unos 30 minutos en taxi.",
          "quando": "Mañana.",
          "tempo": "2 horas",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "A menudo infravalorado: combinarlo con el cenote Xcanché justo al lado."
        },
        {
          "nome": "Cenote Xcanché",
          "testo": "Un cenote a cielo abierto cerca de Ek Balam, con saltos y lianas.",
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
          "testo": "Cerdo marinado y cerdo a la parrilla con naranja agria, típicos de Valladolid."
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
    tripSlugs: ['messico-beach-life'],
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
          "testo": "El mercado cubierto con fruta, especias y artesanía, donde se compra lo yucateco.",
          "come": "A pie desde el centro, al este de la plaza.",
          "quando": "Mañana.",
          "tempo": "1-2 horas"
        },
        {
          "nome": "Playa Progreso y pig beach",
          "testo": "La playa de Progreso a media hora de Mérida, y la Playa de los Cerditos, poco transitada.",
          "come": "Bus o coche desde Mérida, unos 40 minutos.",
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
            "Día 2: Playa Progreso y pig beach"
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
          "testo": "Avenida de mansiones del siglo XX, más tranquila."
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
    tripSlugs: ['messico-beach-life'],
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
          "testo": "La plaza central del centro histórico, muy cuidada, con la catedral y los típicos limpiabotas.",
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
          "testo": "Campeche es una ciudad fortificada del siglo XVII, patrimonio UNESCO, con baluartes y fuertes construidos contra los piratas.",
          "come": "A pie por las murallas.",
          "quando": "Mañana.",
          "tempo": "2 horas",
          "url": "https://www.inah.gob.mx/"
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
          "testo": "Tortillas con cazón y frijoles, especialidad de Campeche."
        },
        {
          "nome": "Camarones al coco",
          "testo": "Camarones empanizados con coco."
        },
        {
          "nome": "Pescado a la campechana",
          "testo": "Pescado con salsa de tomate y aceitunas."
        },
        {
          "nome": "Cóctel de camarón",
          "testo": "Callejero, en el malecón."
        }
      ],
      "attenzioni": [
        "El traslado del día siguiente hacia Mahahual es muy largo y se cambia de huso horario: salir temprano.",
        "El centro de noche es tranquilo, pero evitar las calles vacías fuera de las murallas.",
        "Precios bajos: no pagar de más por tours improvisados."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
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
          "testo": "Salida en barca a pocos metros de la costa, donde viven tortugas verdes en el arrecife.",
          "come": "Tour desde el malecón con operador.",
          "quando": "Mañana.",
          "tempo": "2-3 horas"
        },
        {
          "nome": "Temazcal en la selva",
          "testo": "Rito de baño de vapor de tradición indígena, con guía, de noche, en un lugar de la selva.",
          "come": "Reserva con un alojamiento de la zona.",
          "quando": "Noche.",
          "tempo": "2-3 horas"
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
          "nome": "Ceviche y pescado frito",
          "testo": "Fresco, en el malecón."
        },
        {
          "nome": "Tacos de pescado",
          "testo": "Callejeros."
        },
        {
          "nome": "Mariscos",
          "testo": "Camarones y langosta, en restaurantes frente al mar."
        },
        {
          "nome": "Agua fresca",
          "testo": "De fruta, para el calor."
        }
      ],
      "attenzioni": [
        "El día de llegada tiene un ritmo apretado: si se falla en los horarios de las paradas anteriores (en particular Balam Ku) se cae el resto del día.",
        "Los días de cruceros el malecón está lleno y los precios suben.",
        "Sol fuerte: protector solar apto para arrecifes y agua."
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
          "testo": "La laguna de los siete colores, de unos 40 km de largo, con agua en tonos de azul y turquesa sobre fondo blanco.",
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
          "testo": "Un fuerte del siglo XVIII contra los piratas, hoy museo, a orillas de la laguna.",
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
    tripSlugs: ['messico-beach-life'],
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
          "testo": "Ciudad maya sobre un acantilado frente al Caribe, el único sitio maya de México que da al mar. El Castillo y el Templo del Dios del Viento son los puntos clave.",
          "come": "Desde el pueblo de Tulum en taxi o bici. Entrada INAH; la playa bajo el sitio es accesible.",
          "quando": "Mañana, antes del calor y de los autocares.",
          "tempo": "2 horas",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Un baño en la cala bajo el acantilado después de la visita."
        },
        {
          "nome": "Cenote Dos Ojos",
          "testo": "Dos cenotes conectados en una cueva con estalactitas, en el sistema Sac Actun: distinto de los cenotes a cielo abierto de Yucatán.",
          "come": "En coche o taxi desde Tulum, unos 20 minutos al norte.",
          "quando": "Mañana.",
          "tempo": "2 horas",
          "consiglio": "En Tulum desaconsejo los cenotes más turísticos y propongo Dos Ojos. Al lado hay otro precioso cuyo nombre he olvidado."
        },
        {
          "nome": "Caleta Tankah",
          "testo": "Una cala con agua turquesa y un cenote, entrada de pago (300 MXN por persona, sin tarjetas, sin reembolsos).",
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
          "testo": "Playa protegida con eclosión de tortugas de abril a octubre. Entrada 100 MXN, prohibidos comida, alcohol y altavoces, abierta de 10 a 16, cerrada los lunes.",
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
          "come": "Catamarán compartido unos 1.670 MXN por persona con ferry de ida y vuelta, almuerzo en Playa Mia, barra libre; barca privada unos 700 MXN más ferry unos 580 MXN ida y vuelta.",
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
          "quando": "Junio-septiembre, la ventana en la que los tiburones ballena están en aguas de Holbox.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Bioluminiscencia en Punta Mosquito",
          "testo": "El plancton luminiscente ilumina el agua de noche. Por cuenta propia con un «carrito» hasta el punto; en kayak con guía (500 MXN por persona con más de 8 personas, 400 con menos); o con un tour en barca.",
          "come": "Preguntar en el lugar el mismo día: depende de las fases lunares y del tiempo.",
          "quando": "Noche; se ve mejor de abril a noviembre.",
          "tempo": "2 horas",
          "consiglio": "Ir a pie no se aconseja: aproximadamente una hora de camino por dirección, casi toda a oscuras."
        },
        {
          "nome": "Tour de las 3 Islas",
          "testo": "Recorrido compartido en barca de unas 3 horas, con flamencos, delfines y aves: Isla Pájaros, cenote de Yalahau, Isla Pasión o Punta Mosquito.",
          "come": "750-900 MXN por persona según el operador; algunos incluyen el traslado desde el hotel (unos 1.100 MXN). El cenote Yalahau se paga aparte, unos 200 MXN.",
          "quando": "Mañana.",
          "tempo": "3 horas"
        },
        {
          "nome": "Cabo Catoche",
          "testo": "Excursión a la punta más al norte de Yucatán, donde se encuentran el Golfo de México y el Caribe. Snorkel en un arrecife poco profundo, pesca y ceviche fresco. En el viaje no la hicimos.",
          "come": "Tour compartido de la mañana a última hora de la tarde, unos 80-100 USD por persona; comparar varios operadores.",
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
          "nome": "Playa al noreste",
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
]
