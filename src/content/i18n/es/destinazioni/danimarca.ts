import type { Destinazione } from '@/lib/types'

export const destinazioniDanimarca: Destinazione[] = [
  {
    slug: 'copenaghen',
    paeseSlug: 'danimarca',
    ordine: 1,
    nome: 'Copenhague',
    tipologia: ['città', 'design', 'gastronomia'],
    giorniConsigliati: '3 días, la primera parada del itinerario "Capitales nórdicas"',
    visitataPersonalmente: true,
    introduzione:
      'La capital danesa, a menudo citada como la ciudad más pensada para la bicicleta del mundo: más de la mitad de los habitantes se desplaza cada día en bici por más de 450 km de carriles. En un centro recogido están los canales de colores de Nyhavn, los jardines históricos de Tivoli, el paseo marítimo de la Sirenita y Christiania, la comunidad autogestionada que desde 1971 vive con reglas propias en el corazón de la ciudad.',
    percheAndarci:
      'En un área que se recorre a pie o en bici hay algunas de las imágenes más reconocibles del norte de Europa: las casas de entramado de Nyhavn, los tejados de cobre verde del casco antiguo, el diseño escandinavo dentro y fuera de los museos. Y es la puerta de entrada más cómoda para un recorrido por las capitales nórdicas: desde aquí Estocolmo está a pocas horas de tren o de avión.',
    cosaVedere: [
      'Nyhavn, el canal del siglo XVII con las fachadas de colores de las casas de los mercaderes, hoy una fila continua de cafés y restaurantes en el muelle: el punto más fotografiado de la ciudad, y con razón',
      'Tivoli Gardens, abierto en 1843, uno de los parques de atracciones más antiguos del mundo todavía en funcionamiento: jardines cuidados, históricas montañas rusas de madera y luces nocturnas que valen la visita incluso sin subirse a ninguna atracción. Está abierto solo en algunas temporadas (primavera-verano, Halloween, mercadillos navideños) y cierra durante algunos meses de invierno',
      'La Sirenita (Den Lille Havfrue), la escultura de bronce de 1913 inspirada en el cuento de Hans Christian Andersen, en el paseo marítimo de Langelinie. Es pequeña y a menudo está rodeada de multitud y grupos, uno de los casos más citados de atracción que vale más por su fama que por lo que se ve; el paseo marítimo de alrededor merece la pena de todos modos',
      'Christiania, la «ciudad libre» nacida en 1971 en un antiguo área militar de Christianshavn: casas autoconstruidas, murales y un ambiente distinto del resto de la ciudad. La histórica Pusher Street, donde durante décadas se ha vendido hachís a plena luz del día, fue cerrada por las autoridades danesas en 2024 tras un episodio de violencia; la venta de estupefacientes es de todos modos ilegal en toda Dinamarca',
      'El casco antiguo en torno a Strøget, una de las calles peatonales comerciales más largas de Europa, que une Rådhuspladsen (la plaza del ayuntamiento) con la vieja plaza del mercado de Kongens Nytorv',
      'El barrio de Christianshavn, con los canales menores, las casas flotantes y la iglesia de Vor Frelsers Kirke, famosa por la escalera exterior en espiral que sube en torno a la aguja dorada',
    ],
    cosaFare: [
      'Un paseo en bici de alquiler por el paseo marítimo y los canales, como se mueven cada día los habitantes (hay una ficha de experiencia dedicada)',
      'Un paseo en barco por los canales, desde Nyhavn o desde Christianshavn, para ver el casco antiguo desde el agua (hay una ficha de experiencia dedicada)',
      'Una noche en Tivoli, entre atracciones históricas y jardines iluminados, cuando está en temporada',
      'Una visita a Christiania teniendo presentes las reglas de la comunidad: nada de fotos en la antigua Pusher Street y respeto por los residentes (hay una ficha de experiencia dedicada)',
      'Un tour o una parada para el smørrebrød, el bocadillo abierto danés, en Torvehallerne (el mercado cubierto) o en una de las rosticerías históricas del centro (hay una ficha de experiencia dedicada)',
    ],
    doveDormire:
      'El casco antiguo (Indre By) es el más cómodo para quien quiere todo a pie, pero es también la zona más cara. Vesterbro, antiguo barrio rojo y hoy entre los más animados por bares y restaurantes, es un buen compromiso entre precio y ubicación, a pocos minutos a pie o en metro del centro. Nørrebro, multicultural y menos turístico, es la opción más económica, con una vida de barrio de verdad, pero está algo más lejos de las atracciones principales.',
    doveMangiare:
      'Torvehallerne, el mercado cubierto cerca de Nørreport, para smørrebrød, pescado y productos locales en versión street food de calidad. Nyhavn es escenográfico, pero los precios son los de la vista: mejor elegir con atención o parar para un café mirando el canal. Para algo más informal e internacional está Reffen, la zona de street food en el paseo marítimo (abierta de primavera a otoño).',
    comeArrivare:
      "Aeropuerto de Copenhague-Kastrup (CPH), de los mejor conectados del norte de Europa, a unos 20 minutos del centro en metro. Hay vuelos directos desde las principales ciudades italianas. En tren desde Italia no hay una conexión directa cómoda: quien prefiere no volar pasa por Alemania con varios transbordos. Desde el aeropuerto el metro M2, que funciona las 24 horas, llega a Kongens Nytorv en unos 15 minutos y el tren a la estación central en 13; el billete de 3 zonas cuesta unos 30 DKK (unos 4 €), en las máquinas o en la app DOT Billetter. Desde Estocolmo el tren directo SJ tarda 5-5h30; desde Oslo está el ferry nocturno DFDS, de unas 17 horas.",
    comeSpostarsi:
      'La bici de alquiler, la opción más acorde con la ciudad, luego metro, S-tog (trenes de cercanías) y autobús con billete integrado por zonas. El casco antiguo se recorre bien también a pie.',
    periodoMigliore:
      'mayo-septiembre por el clima y los días largos; junio-agosto es temporada alta, con Tivoli en horario de verano. Diciembre para los mercadillos navideños, con un ambiente muy distinto e igualmente bonito.',
    costi:
      "Tivoli: entrada a los jardines desde unos 20€, entrada combinada jardines más atracciones ilimitadas hasta unos 66€. Paseo en barco por los canales: unos 15-20€ por persona por una hora. Comida económica 7-20€, comida en cafetería 17-27€, cena de gama media 40-75€ para dos. Presupuesto diario por persona, sin alojamiento: bajo 50-70 € (bici, Torvehallerne o supermercado, atracciones gratuitas), medio 100-140 € (barco por los canales, un museo, cena media), alto más de 200 €.",
    erroriDaEvitare: [
      'Caminar o pararse en un carril bici sin mirar: tienen tanto tráfico como las calles y los ciclistas no reducen por los turistas distraídos',
      'Fotografiar en Christiania en las zonas señalizadas (la antigua Pusher Street en particular) o a los residentes sin permiso: las reglas están a la vista y se hacen respetar',
      'Dar por hecho que Tivoli está abierto todo el año: fuera del periodo navideño cierra durante algunos meses de invierno, así que conviene comprobar el calendario antes de planificar la noche',
      'Subestimar la posible decepción de la Sirenita: es una estatua pequeña, a menudo rodeada de multitud, para ver durante un paseo por el paseo marítimo más que como destino en sí',
      'Dar por hecho que se paga en euros: Dinamarca no está en la eurozona, se paga en coronas danesas (DKK)',
    ],
    miaEsperienza:
      "Copenhague fue la primera etapa de nuestro viaje por las capitales nórdicas con amigos: tres días entre Nyhavn, el paseo en barco por los canales, Tivoli, la Sirenita, Christianshavn y Christiania, y luego el tren a Estocolmo.",
    luoghi: [
      {
        nome: "Nyhavn",
        testo: "El canal excavado entre 1670 y 1675 para Cristián V, con antiguas casas de colores, hoy una hilera de cafés y restaurantes en el muelle. Es uno de los lugares más fotografiados de la ciudad, y de aquí salen los barcos por los canales.",
        come: "Metro M1, M2, M3 o M4 hasta Kongens Nytorv y luego unos pasos a pie.",
        quando: "Temprano por la mañana para las fotos; por la noche para las mesas en el muelle, más caras.",
        tempo: "1 hora",
        costo: "entrada libre",
        orari: "Muelle siempre accesible",
        lat: 55.67991,
        lng: 12.59029,
        consiglio: "Los locales del lado soleado son muy caros: a menudo conviene cenar una calle más allá."
      },
      {
        nome: "Tivoli Gardens",
        testo: "Abierto en 1843, es uno de los parques de atracciones más antiguos del mundo, en pleno centro. Jardines cuidados, la histórica montaña rusa de madera Rutschebanen y luces al atardecer.",
        come: "A pie desde la estación central. Abre por temporadas: verano, Halloween y Navidad.",
        quando: "Noche, cuando se encienden las luces.",
        tempo: "3-4 horas",
        costo: "Entrada a los jardines en torno a 180-200 DKK, unos 24-27 €; atracciones aparte o con pulsera ilimitada",
        orari: "Solo en temporada: primavera-verano, Halloween y Navidad; calendario en tivoli.dk",
        lat: 55.67361,
        lng: 12.56833,
        url: "https://www.tivoli.dk",
        consiglio: "La entrada es aparte de la de las atracciones: consultar las fórmulas en la web."
      },
      {
        nome: "Paseo en barco por los canales",
        testo: "Una hora por los canales del centro y de Christianshavn, pasando bajo puentes bajísimos y frente a la Ópera, la Sirenita y Christiansborg. Es la forma más rápida de orientarse el primer día.",
        come: "Salidas frecuentes desde Nyhavn y Gammel Strand; fuera de temporada alta no hace falta reservar.",
        quando: "La primera tarde de sol; en invierno hay menos salidas.",
        tempo: "1 hora",
        costo: "Unos 15-20 € por persona",
        lat: 55.6775,
        lng: 12.57861,
        consiglio: "Los barcos son descubiertos y en el agua sopla viento incluso en verano: hace falta una chaqueta."
      },
      {
        nome: "Castillo de Rosenborg",
        testo: "Castillo renacentista construido por Cristián IV entre 1606 y 1624 como residencia de verano. En el tesoro están las joyas y las insignias de la corona danesa; alrededor está el Kongens Have, el jardín real histórico.",
        come: "En metro hasta Nørreport o a pie desde el centro.",
        quando: "Mañana entre semana; el parque está abierto a todos, gratuito.",
        tempo: "1,5 horas",
        orari: "En temporada baja mar-dom de 10 a 16, cerrado el lunes (noviembre de 2026); jardín siempre abierto",
        lat: 55.68567,
        lng: 12.57728,
        url: "https://www.kongernessamling.dk/en/rosenborg/",
        consiglio: "Kongens Have es un buen sitio para un picnic gratis."
      },
      {
        nome: "Amalienborg",
        testo: "Cuatro palacios iguales, con interiores rococó, alrededor de una plaza octogonal: es la residencia de la familia real. Cada día hay cambio de guardia, que llega desfilando desde Rosenborg.",
        come: "A pie desde Nyhavn, por el paseo marítimo.",
        quando: "A mediodía, para el cambio de guardia; el desfile sale del cuartel de Gothersgade 100, junto a Rosenborg.",
        tempo: "1 hora",
        costo: "cambio de guardia gratuito",
        lat: 55.68417,
        lng: 12.59306,
        url: "https://www.kongernessamling.dk/en/amalienborg/",
        consiglio: "La cúpula de la cercana Marmorkirken se puede visitar: horarios en la web de la iglesia."
      },
      {
        nome: "La Sirenita y Kastellet",
        testo: "La estatua de bronce de 1913 inspirada en el cuento de Andersen es pequeña y casi siempre está rodeada de grupos, pero el paseo hasta ella merece la pena. Justo detrás está Kastellet, una fortaleza en estrella del siglo XVII con baluartes de hierba y cuarteles rojos.",
        come: "A pie desde Nyhavn por el paseo de Langelinie, una media hora, o en bici.",
        quando: "A primera hora, antes de los autocares.",
        tempo: "1-1,5 horas",
        costo: "Gratis",
        orari: "Estatua siempre accesible",
        lat: 55.69278,
        lng: 12.59917
      },
      {
        nome: "Christiansborg",
        testo: "En el islote de Slotsholmen, el palacio que reúne el Parlamento, el Tribunal Supremo y los salones de representación de la casa real, con las ruinas de los castillos medievales en los sótanos. La torre, la más alta de la ciudad, tiene una terraza panorámica sobre la ciudad.",
        come: "A pie desde Strøget o Gammel Strand; metro hasta Gammel Strand.",
        quando: "Por la mañana para los salones reales; la torre hasta la tarde.",
        tempo: "2 horas",
        lat: 55.67583,
        lng: 12.57889,
        url: "https://kongeligeslotte.dk/en/palaces-and-gardens/christiansborg-palace.html"
      },
      {
        nome: "Rundetårn (Torre Redonda)",
        testo: "La torre redonda de 1642, construida por Cristián IV como observatorio astronómico, se sube por una rampa en espiral sin escalones. Desde arriba se ve el centro, con sus tejados de cobre y campanarios.",
        come: "A pie desde Strøget, en Købmagergade.",
        quando: "A última hora de la tarde, con la luz sobre los tejados.",
        tempo: "45 minutos",
        costo: "60 DKK adultos (2026), unos 8 €; gratis para menores de 18",
        orari: "Abierta 362 días al año",
        lat: 55.68139,
        lng: 12.57583,
        url: "https://www.rundetaarn.dk/en/"
      },
      {
        nome: "Christianshavn y Vor Frelsers Kirke",
        testo: "Barrio de canales pequeños, casas flotantes y la iglesia del Salvador, famosa por su aguja negra y dorada con escalera de caracol: primero se sube dentro de la torre, por escalones estrechos y empinados, y luego al aire libre por la espiral, con vistas a todo Copenhague.",
        come: "Metro M1 o M2 hasta Christianshavn o a pie desde el centro.",
        quando: "Un día despejado. Torre abierta todos los días de 9 a 20, última entrada 30 minutos antes, cerrada en enero; cierra un rato con lluvia, nieve o viento fuerte, porque los escalones de cobre resbalan. En total son 400 escalones, los últimos 150 al aire libre.",
        tempo: "1-2 horas",
        costo: "torre 70 DKK adultos, 20 DKK niños (2026)",
        lat: 55.67292,
        lng: 12.59403,
        url: "https://www.vorfrelserskirke.dk",
        consiglio: "Reservar online: las plazas son limitadas. El último tramo es expuesto, desaconsejado para quien sufre de vértigo."
      },
      {
        nome: "Christiania",
        testo: "Una «ciudad libre» nacida en 1971 en un antiguo recinto militar: casas autoconstruidas, murales, talleres y locales. Tiene sus propias reglas, escritas en los carteles de las entradas. Pusher Street, la calle del trapicheo, fue desmantelada en 2024.",
        come: "A pie desde Christianshavn.",
        quando: "De día; de noche es menos aconsejable para visitantes ocasionales.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        lat: 55.67361,
        lng: 12.59972,
        url: "https://www.christiania.org",
        consiglio: "Leer los carteles de la entrada y preguntar antes de fotografiar a las personas."
      },
      {
        nome: "Ny Carlsberg Glyptotek",
        testo: "El museo fundado por el cervecero Carl Jacobsen, con escultura griega, romana y etrusca, una gran colección de Rodin y cuadros impresionistas. En el centro hay un jardín de invierno con palmeras bajo una cúpula de cristal.",
        come: "A pie desde la estación central, frente al Tivoli.",
        quando: "Con lluvia o en invierno; el café del jardín es un buen sitio para una pausa.",
        tempo: "2 horas",
        costo: "150 DKK adultos, 135 DKK online (2026), unos 18-20 €",
        lat: 55.67278,
        lng: 12.57222,
        url: "https://glyptoteket.com"
      },
      {
        nome: "Torvehallerne",
        testo: "Dos pabellones de cristal junto a Nørreport con unos sesenta puestos de pescado, quesos, pan, café y smørrebrød, el pan de centeno cubierto que es la comida danesa por excelencia. Es el sitio más sencillo para comer bien sin sentarse en un restaurante.",
        come: "Metro y trenes hasta Nørreport, luego dos minutos a pie.",
        quando: "A mediodía; el sábado es el día más animado.",
        tempo: "1 hora",
        costo: "Entrada libre; smørrebrød orientativo 8-15 € la pieza",
        lat: 55.68387,
        lng: 12.56955
      },
      {
        nome: "Louisiana Museum of Modern Art",
        testo: "En Humlebæk, al norte de Copenhague, un gran museo de arte moderno y contemporáneo: pabellones sobre el Øresund con obras de Giacometti, Picasso, Warhol y Hockney, y un jardín de esculturas (Moore, Calder) que baja hacia el mar.",
        come: "Tren de la costa desde Copenhagen H hasta Humlebæk (unos 40 minutos) y luego 10-15 minutos a pie.",
        quando: "Todo el día, con almuerzo en la cafetería con vista al mar. Abre mar-vie de 11 a 22, sáb-dom de 11 a 18, cerrado los lunes.",
        tempo: "media jornada",
        costo: "145 DKK adultos (2026)",
        orari: "Mar-vie de 11 a 22, sáb-dom de 11 a 18, cerrado el lunes",
        lat: 55.96944,
        lng: 12.54306,
        url: "https://www.louisiana.dk",
        consiglio: "Entradas y horarios en la web oficial."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Nyhavn por la mañana y paseo en barco por los canales",
          "Amalienborg a mediodía para el cambio de guardia",
          "Paseo hasta la Sirenita y Kastellet",
          "Rosenborg y Kongens Have por la tarde",
          "Noche en el Tivoli, si es temporada"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Christiansborg y su torre",
          "Rundetårn y Strøget",
          "Comida en Torvehallerne",
          "Tarde en Christianshavn (Vor Frelsers Kirke) y Christiania",
          "Noche en Vesterbro"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: tren de la costa al Louisiana Museum en Humlebæk",
          "Seguir hasta Kronborg en Helsingør, una parada más al norte",
          "Como alternativa, con lluvia: Ny Carlsberg Glyptotek"
        ]
      }
    ],
    zone: [
      {
        nome: "Indre By (centro)",
        testo: "Cerca de Nyhavn y Strøget; habitaciones pequeñas y precios altos, ruido nocturno en las calles peatonales.",
        perChi: "Quien tiene poco tiempo",
        fascia: "160-300 €"
      },
      {
        nome: "Vesterbro",
        testo: "Cerca de la estación central, con comida y locales. La zona de la estación es más animada.",
        perChi: "Quien quiere vida nocturna y restaurantes",
        fascia: "120-220 €"
      },
      {
        nome: "Nørrebro",
        testo: "Multicultural, con cafés y tiendas; cerca del centro en bicicleta.",
        perChi: "Quien prefiere un barrio de verdad y precios medios",
        fascia: "100-180 €"
      },
      {
        nome: "Christianshavn",
        testo: "Tranquilo y pintoresco, cerca de Christiania; menos restaurantes baratos.",
        perChi: "Quien busca ambiente de canal",
        fascia: "140-250 €"
      }
    ],
    sapori: [
      {
        nome: "Smørrebrød",
        testo: "Pan de centeno con pescado, carne o huevo, la comida tradicional danesa; se encuentra en cafés y restaurantes tradicionales."
      },
      {
        nome: "Wienerbrød",
        testo: "El hojaldre danés, en versión de canela (kanelsnegl) o con crema."
      },
      {
        nome: "Røde pølser",
        testo: "La salchicha roja de los quioscos (pølsevogn), con mostaza y cebolla frita."
      },
      {
        nome: "Frikadeller",
        testo: "Albóndigas de cerdo hechas en sartén, con patatas y col lombarda."
      }
    ],
    attenzioni: [
      "Bicicletas: mantenerse fuera de los carriles bici y mirar antes de bajar de la acera.",
      "Carteristas en Strøget, en la estación central, en Nørreport, en Nyhavn, en Kongens Nytorv y en Christiania.",
      "Christiania y Nørrebro: más cuidado de noche tarde, ha habido episodios de violencia entre bandas. No comprar nada a vendedores ilegales: el trapicheo es ilegal.",
      "Locales de Nyhavn muy caros: revisar el menú antes de sentarse."
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta para Copenhague?",
        risposta: "Dos días bastan para el centro, Christianshavn y Christiania; con el tercero se hace la excursión por la costa al Louisiana y a Kronborg."
      },
      {
        domanda: "¿Cómo se va del aeropuerto de Kastrup al centro?",
        risposta: "El metro M2, que funciona las 24 horas, llega a Kongens Nytorv en unos 15 minutos; el tren lleva a la estación central en 13. El billete de 3 zonas cuesta unos 30 DKK, en las máquinas o en la app DOT Billetter."
      },
      {
        domanda: "¿El Tivoli abre todo el año?",
        risposta: "No: abre en primavera-verano, por Halloween y en Navidad, y cierra algunos meses de invierno. Conviene mirar el calendario en tivoli.dk antes de planear la noche."
      },
      {
        domanda: "¿Conviene recorrer Copenhague en bici?",
        risposta: "Sí, la ciudad es llana y hay carriles bici por todas partes; se alquila con las apps de bicicleta compartida. Los carriles tienen tanto tráfico como las calles: a pie no hay que pararse en ellos."
      },
      {
        domanda: "¿Se puede hacer fotos en Christiania?",
        risposta: "No en las zonas señalizadas, sobre todo en la antigua Pusher Street, ni a los residentes sin permiso. La venta de drogas es ilegal como en el resto de Dinamarca."
      },
      {
        domanda: "¿Cuánto cuesta Copenhague al día?",
        risposta: "Está entre las ciudades más caras de Europa: una comida económica cuesta 7-20 €, una cena media para dos 40-75 €, una cerveza en un bar 7-11 €. Mucho se ve gratis a pie o en bici."
      }
    ],
    gite: [
      {
        nome: "Helsingør y el castillo de Kronborg",
        distanza: "unos 45 minutos en tren",
        come: "Tren de la costa (Kystbanen) desde Copenhagen H; el castillo está a 15 minutos a pie de la estación.",
        testo: "El castillo renacentista sobre el estrecho de Øresund donde Shakespeare ambientó Hamlet, patrimonio de la UNESCO. Se combina bien con el Louisiana, en la misma línea. Entrada 150 DKK; en temporada baja mar-dom de 10 a 16, cerrado el lunes (2026)."
      },
      {
        nome: "Roskilde",
        distanza: "unos 25 minutos en tren",
        come: "Trenes frecuentes desde Copenhagen H.",
        testo: "Tiene la catedral donde están enterrados los reyes de Dinamarca, patrimonio de la UNESCO, y el Museo de Barcos Vikingos junto al fiordo, con cinco barcos del siglo XI recuperados del fondo."
      },
      {
        nome: "Malmö",
        distanza: "unos 40 minutos en tren",
        come: "Tren Øresundståg desde Copenhagen H o desde el aeropuerto, por el puente de Øresund.",
        testo: "La tercera ciudad sueca, al otro lado del puente: casco antiguo con plazas del siglo XVI, el rascacielos retorcido Turning Torso y largas playas. Hace falta documento para el control fronterizo."
      },
      {
        nome: "Castillo de Frederiksborg",
        distanza: "unos 40 minutos en tren",
        come: "S-tog línea A hasta Hillerød, luego 15 minutos a pie.",
        testo: "Un castillo renacentista de ladrillo rojo construido sobre tres islotes de un lago, hoy Museo de Historia Nacional, con un jardín barroco."
      }
    ],
    esperienzeSlugs: ['nyhavn-giro-in-barca', 'copenaghen-tour-in-bicicletta', 'christiania-visita', 'smorrebrod-tour-torvehallerne'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'El centro de Copenhague iluminado de noche visto desde arriba, con la plaza del Ayuntamiento y las calles llenas de luces',
    immagine: '/images/danimarca/copenaghen.jpg',
  },
]
