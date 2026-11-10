import type { Destinazione } from '@/lib/types'

export const destinazioniSvezia: Destinazione[] = [
  {
    slug: 'stoccolma',
    paeseSlug: 'svezia',
    ordine: 1,
    nome: 'Estocolmo',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      "una noche a la ida y una a la vuelta en el viaje a Laponia, solo de tránsito; 2-3 días completos en el itinerario «Capitales nórdicas», como segunda etapa después de Copenhague",
    visitataPersonalmente: true,
    introduzione:
      "En el viaje a Laponia es el tránsito obligado entre el vuelo internacional y el interior a Kiruna. Pero es también una capital que merece mucho más que una noche: está construida sobre catorce islas conectadas por más de cincuenta puentes, y tiene el núcleo medieval de Gamla Stan, el pecio seiscentista del Vasa y el ayuntamiento donde cada año se celebra el banquete del Nobel.",
    percheAndarci:
      "Para el vuelo interior a Kiruna hay que pasar por ella de todos modos, una noche por sentido. Y es la segunda etapa natural de un recorrido por las capitales nórdicas: desde Copenhague se llega en tren o en avión, y entre casco histórico, museos y archipiélago la ciudad llena bien 2-3 días.",
    cosaVedere: [
      "El centro de la ciudad, en una versión muy reducida si solo se está de tránsito una noche",
      "Gamla Stan, el casco histórico medieval en una isla propia: callejuelas estrechas, casas de colores, el Palacio Real (con el cambio de guardia) y la plaza de Stortorget",
      "El Vasamuseet (Museo Vasa), con un buque de guerra real de 1628 hundido en el puerto de Estocolmo durante el viaje inaugural y recuperado casi intacto en 1961: uno de los barcos antiguos mejor conservados del mundo",
      "Stadshuset, el Ayuntamiento de ladrillo rojo asomado al agua, sede del banquete del Premio Nobel en el Salón Azul y del Salón Dorado revestido con más de 18 millones de teselas doradas",
      "ABBA The Museum, en la isla de Djurgården, dedicado al grupo pop más famoso de Suecia, con recuerdos originales y salas interactivas",
      "El archipiélago de Estocolmo (Stockholms skärgård), más de 30.000 entre islas e islotes que se abren al este de la ciudad hacia el mar Báltico",
    ],
    cosaFare: [
      "Poco más que check-in/check-out si se está solo de tránsito una noche",
      "Un paseo por las callejuelas de Gamla Stan, con parada en Stortorget",
      "La visita al Vasamuseet (véase la ficha de experiencia dedicada)",
      "Una visita guiada de Stadshuset, con subida a la torre en los meses cálidos para ver la ciudad (el acceso es estacional: conviene comprobar los horarios antes)",
      "Media jornada o una jornada entera en barco por el archipiélago (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Dormí en el Radisson Blu Royal Viking tanto a la ida como a la vuelta, de tránsito hacia Laponia: una cadena internacional fiable, cómoda para quien llega o sale con vuelos de tarde-noche. Para una estancia completa, Gamla Stan y Norrmalm/ciudad vieja siguen siendo las zonas más céntricas y cómodas a pie; Södermalm, más joven y con sus propios bares y restaurantes, es una alternativa a menudo más económica a pocos minutos de metro del centro.",
    doveMangiare:
      "En las paradas de tránsito tenía pocas horas y no tengo locales que recomendar. Gran parte de la oferta de la ciudad está en Södermalm y en Östermalm, de los fast-casual a los restaurantes de gama alta.",
    comeArrivare:
      "Vuelo internacional a Estocolmo Arlanda. Para quien llega como segunda etapa del itinerario «Capitales nórdicas», desde Copenhague hay tren directo SJ (unas 5 horas) o vuelo (aproximadamente 1 hora). Desde Arlanda el Arlanda Express llega a la estación central en unos 20 minutos (unos 349 SEK, más caro si se compra a bordo); el tren de cercanías SL con suplemento de aeropuerto y los autobuses Flygbussarna son más lentos y baratos. Los taxis conviene tomarlos solo de las compañías grandes, con tarifa fija.",
    comeSpostarsi: 'Para el simple tránsito aeropuerto-hotel no hace falta. Para una estancia completa hay metro (Tunnelbana), autobuses y ferris urbanos con billete integrado SL; el casco histórico se recorre bien también a pie.',
    periodoMigliore: 'mayo-septiembre por el clima y por las salidas al archipiélago, que funcionan mejor con los días largos',
    costi:
      "Billete sencillo SL 43 SEK, pase diario 180 SEK. Vasamuseet 195-240 SEK según la temporada. ABBA The Museum 269-349 SEK. Excursión por el archipiélago desde unos 375 SEK (unos 33 €) por una salida guiada de 2-2,5 horas. Presupuesto diario por persona, sin alojamiento: bajo 50-70 € (supermercado, pase de transporte, un museo), medio 90-130 € (comida fuera, cena media, dos entradas), alto más de 180 €.",
    erroriDaEvitare: [],
    miaEsperienza:
      "Para mí Estocolmo fue solo una parada logística, a la ida y a la vuelta: justo el tiempo de dormir entre un vuelo y otro.",
    luoghi: [
      {
        nome: "Gamla Stan y Palacio Real",
        testo: "El casco antiguo medieval en una isla, con callejones estrechos, casas de colores y la plaza de Stortorget. El Palacio Real, residencia oficial del rey con más de 1.400 salas, acoge el cambio de guardia en el patio exterior.",
        come: "A pie desde la estación central o en metro hasta Gamla stan.",
        quando: "Temprano por la mañana, antes de los grupos; el cambio de guardia es a mediodía los días indicados en el sitio real.",
        tempo: "2-3 horas",
        costo: "Callejuelas gratis; Palacio Real 220 SEK adultos, 240 SEK de mayo a septiembre (2026), unos 20 €",
        orari: "Palacio Real abierto todos los días de 10 a 16 en temporada baja (noviembre de 2026); en verano horario más amplio, en la web",
        lat: 59.325,
        lng: 18.07056,
        url: "https://www.kungligaslotten.se",
        consiglio: "Mårten Trotzigs gränd y Västerlånggatan son los callejones más fotografiados: ir al amanecer."
      },
      {
        nome: "Museo Vasa",
        testo: "Un buque de guerra de 1628 que se hundió en el puerto el 10 de agosto de 1628, tras unos 1.300 metros de viaje inaugural, y fue rescatado casi intacto en 1961. Es el barco del siglo XVII mejor conservado del mundo y se expone en una gran sala con pasarelas en varios niveles, desde la quilla hasta la altura de la cubierta.",
        come: "Tranvía 7 o autobús 67 hasta la parada Nordiska museet/Vasamuseet, o ferry 80 desde Nybroplan u 82 desde Slussen hasta Allmänna gränd, a 8 minutos a pie. Visita libre.",
        quando: "Mañana entre semana, cuando hay menos gente.",
        tempo: "2 horas",
        costo: "195 SEK adultos en temporada baja (2026), más en verano",
        orari: "Todos los días: en verano de 8:30 a 18, el resto del año de 10 a 17, los miércoles hasta las 20",
        lat: 59.32807,
        lng: 18.09139,
        url: "https://www.vasamuseet.se",
        consiglio: "Reservar online la entrada en temporada alta."
      },
      {
        nome: "Stadshuset (Ayuntamiento)",
        testo: "El Ayuntamiento de ladrillo rojo de 1923 junto al agua, sede del banquete de los Premios Nobel en la Sala Azul y con la Sala Dorada cubierta por más de 18 millones de teselas de mosaico dorado. La torre mide 106 metros, con una escalera de 365 peldaños y un ascensor: desde lo alto se ve toda la ciudad.",
        come: "A pie desde la estación; el interior solo se visita con guía.",
        quando: "Mañana; horarios de tours y de la torre en la web oficial, donde se compran las entradas.",
        tempo: "1 hora",
        costo: "Visita guiada de unos 45 minutos, algo más de 10 €; torre (mayo-septiembre) con entrada aparte",
        lat: 59.3275,
        lng: 18.055,
        url: "https://stadshuset.stockholm",
        consiglio: "Consultar horarios y disponibilidad de los tours en la web antes de ir."
      },
      {
        nome: "Skansen y Djurgården",
        testo: "El museo al aire libre más antiguo de Suecia, abierto en 1891, con casas históricas de toda Suecia, animales nórdicos y artesanos con trajes. En la isla están también ABBA The Museum y el parque Gröna Lund.",
        come: "Tranvía 7 o ferry desde el centro. La entrada cubre el parque, no las atracciones aparte.",
        quando: "Primavera y verano; en invierno hay mercadillos de Navidad.",
        tempo: "3-4 horas",
        orari: "De junio a finales de agosto de 10 a 18; en invierno laborables de 10 a 15 y fines de semana de 10 a 16 (calendario 2026-27)",
        lat: 59.32418,
        lng: 18.102,
        url: "https://www.skansen.se",
        consiglio: "Subir a la colina para ver la ciudad; en diciembre hay mercadillo de Navidad."
      },
      {
        nome: "ABBA The Museum",
        testo: "El museo del grupo pop sueco más famoso del mundo, con trajes, discos de oro y salas interactivas donde se canta y se baila con sus canciones. Funciona aunque no se sea fan: es alegre, está bien hecho y se ve rápido.",
        come: "En Djurgården, a pocos minutos a pie del Museo Vasa; tranvía 7 desde el centro.",
        quando: "A la apertura o después de las 15: entre las 10 y las 15 hay más gente.",
        tempo: "1,5-2 horas",
        costo: "269-349 SEK según el día, unos 24-31 €",
        orari: "Todos los días de 10 a 18, entrada por franja de 30 minutos",
        lat: 59.325,
        lng: 18.09639,
        url: "https://abbathemuseum.com",
        consiglio: "Comprar online: es más barato y se elige la hora."
      },
      {
        nome: "Museo del Premio Nobel",
        testo: "En la antigua Bolsa que cierra un lado de Stortorget, cuenta la historia de los premiados y sus descubrimientos con objetos, vídeos e historias breves. Es pequeño y se combina fácilmente con el paseo por Gamla Stan.",
        come: "En la plaza Stortorget, en Gamla Stan; metro hasta Gamla stan.",
        quando: "El viernes por la tarde, abierto hasta las 21, o un día de lluvia.",
        tempo: "1 hora",
        costo: "160 SEK adultos (2026), unos 14 €; gratis para menores de 18",
        orari: "Mar-dom de 11 a 17, viernes hasta las 21; lunes cerrado en temporada baja (noviembre de 2026)",
        lat: 59.32522,
        lng: 18.07083,
        url: "https://nobelprizemuseum.se/en/"
      },
      {
        nome: "Södermalm y Monteliusvägen",
        testo: "La isla al sur del centro, con cafés, tiendas vintage y los barrios más jóvenes de la ciudad. El sendero de Monteliusvägen recorre los acantilados y ofrece la mejor vista de Gamla Stan, Riddarholmen y el Ayuntamiento.",
        come: "Metro hasta Slussen o Mariatorget, luego 10 minutos a pie cuesta arriba.",
        quando: "Al atardecer, con la luz sobre el agua.",
        tempo: "2-3 horas",
        costo: "Gratis",
        orari: "Sendero siempre accesible",
        lat: 59.32072,
        lng: 18.06031
      },
      {
        nome: "Fotografiska",
        testo: "Museo de fotografía contemporánea en un antiguo edificio de aduanas en el paseo marítimo de Södermalm, con tres o cuatro exposiciones que cambian durante el año. El café de la última planta tiene una de las mejores vistas sobre el agua y Djurgården.",
        come: "A 10 minutos a pie desde Slussen por Stadsgårdshamnen.",
        quando: "Por la tarde-noche: abre hasta tarde.",
        tempo: "1,5-2 horas",
        orari: "Abierto hasta las 23 (2026)",
        lat: 59.31779,
        lng: 18.08472,
        url: "https://www.fotografiska.com/sto/en/"
      },
      {
        nome: "Moderna Museet (Skeppsholmen)",
        testo: "El museo de arte moderno en la isla de Skeppsholmen, con una colección que va de Picasso y Dalí a Rauschenberg y Warhol. Fuera, en el jardín, están las esculturas de colores de Niki de Saint Phalle.",
        come: "A pie desde el centro cruzando el puente de Skeppsholmsbron, o autobús 65.",
        quando: "El viernes de 18 a 20, con entrada gratuita.",
        tempo: "2 horas",
        costo: "170 SEK (2026), unos 15 €; gratis hasta los 18 años",
        orari: "De 10 a 18, martes y viernes hasta las 20 (2026)",
        lat: 59.32639,
        lng: 18.08361,
        url: "https://www.modernamuseet.se/stockholm/en/"
      },
      {
        nome: "Palacio de Drottningholm",
        testo: "Desde 1981 el rey y la reina viven en el ala sur; el resto está abierto al público. Patrimonio de la UNESCO desde 1991, tiene jardines barrocos y un teatro del siglo XVIII todavía en uso, con un festival de ópera en verano.",
        come: "En la isla de Lovön, fuera de la ciudad; cómo llegar en transporte público en la web oficial.",
        quando: "Primavera y verano, por los jardines.",
        tempo: "media jornada",
        costo: "170 SEK adultos (2026), unos 15 €",
        orari: "Fuera de temporada solo sábados y domingos de 10 a 16 (noviembre de 2026); calendario de verano en la web",
        lat: 59.32167,
        lng: 17.88694,
        url: "https://www.kungligaslotten.se",
        consiglio: "Dejar tiempo para los jardines: son la parte más agradable de la visita."
      },
      {
        nome: "Archipiélago de Estocolmo",
        testo: "Decenas de miles de islas e islotes que se abren al este de la ciudad hacia el Báltico. El barco de línea lleva a Vaxholm, Grinda o Sandhamn, con senderos, playas de roca y pequeños cafés.",
        come: "Barcos de línea desde el centro; billetes y horarios en la web de Waxholmsbolaget.",
        quando: "De mayo a septiembre, con los días largos.",
        tempo: "jornada completa",
        costo: "Salida guiada de 2-2,5 horas desde unos 375 SEK, unos 33 €",
        lat: 59.38778,
        lng: 18.73581,
        url: "https://www.waxholmsbolaget.se",
        consiglio: "Para quien tiene poco tiempo, las islas Fjäderholmarna están cerca del centro."
      },
      {
        nome: "Östermalms Saluhall",
        testo: "El mercado cubierto histórico de 1888, restaurado hace poco, con puestos de pescado, quesos, carne de reno y pequeños restaurantes. Es el sitio para comer arenque y gambas sin reservar.",
        come: "Metro hasta Östermalmstorg.",
        quando: "A mediodía en días laborables.",
        tempo: "1 hora",
        costo: "Entrada libre; comida orientativa 15-30 €",
        orari: "Lun-vie de 9:30 a 19, sábado de 9:30 a 17; algunos restaurantes abren por la noche",
        lat: 59.33597,
        lng: 18.07809,
        url: "https://ostermalmshallen.se/en/"
      },
      {
        nome: "Las estaciones de arte del metro",
        testo: "Más de noventa estaciones de metro están decoradas por artistas, hasta el punto de que la red se llama la galería de arte más larga del mundo. T-Centralen, con sus enredaderas azules sobre la roca, Kungsträdgården y Solna centrum son las más conocidas.",
        come: "Con un billete SL normal; la línea azul tiene las estaciones más espectaculares.",
        quando: "Fuera de la hora punta, para hacer fotos sin gente.",
        tempo: "1-2 horas",
        costo: "Billete sencillo SL 43 SEK, unos 4 €; pase diario 180 SEK",
        lat: 59.33167,
        lng: 18.06083
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Gamla Stan, Stortorget y el Palacio Real",
          "Museo del Premio Nobel o fika en un café de Gamla Stan",
          "Tarde: Museo Vasa en Djurgården",
          "Atardecer desde Monteliusvägen y cena en Södermalm"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: visita guiada al Stadshuset",
          "Comida en Östermalms Saluhall",
          "Tarde: Skansen o ABBA The Museum",
          "Noche: Fotografiska, abierto hasta tarde"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3 en verano: barco por el archipiélago (Vaxholm o Fjäderholmarna)",
          "Día 3 en invierno: Drottningholm (el fin de semana) y Moderna Museet",
          "Vuelta con un recorrido por las estaciones de arte del metro"
        ]
      }
    ],
    zone: [
      {
        nome: "Gamla Stan",
        testo: "Callejones empedrados y locales, pero habitaciones pequeñas y caro. Ruido por la noche en las calles principales.",
        perChi: "Quien quiere el encanto del casco antiguo",
        fascia: "150-280 €"
      },
      {
        nome: "Norrmalm (cerca de la estación)",
        testo: "Cómodo para los trenes y el aeropuerto. Poco ambiente, muchas oficinas.",
        perChi: "Quien tiene poco tiempo o sale temprano",
        fascia: "120-220 €"
      },
      {
        nome: "Södermalm",
        testo: "Una isla con restaurantes, pubs antiguos y la vista desde Fjällgatan; a pocos minutos en metro del centro.",
        perChi: "Quien busca bares y barrios jóvenes",
        fascia: "100-200 €"
      },
      {
        nome: "Östermalm",
        testo: "Avenidas amplias, el mercado cubierto y buenos restaurantes; a pie de Djurgården y del centro. Es la zona más cara.",
        perChi: "Quien quiere un barrio elegante y tranquilo",
        fascia: "160-300 €"
      }
    ],
    sapori: [
      {
        nome: "Köttbullar",
        testo: "Albóndigas suecas con salsa de nata, puré y arándanos rojos: el plato más famoso."
      },
      {
        nome: "Fika y kanelbullar",
        testo: "La pausa del café con rollos de canela o cardamomo, en cada cafetería."
      },
      {
        nome: "Semla",
        testo: "Bollo de cardamomo con almendra y nata, típico del invierno, en torno al martes de Carnaval."
      },
      {
        nome: "Gravlax",
        testo: "Salmón marinado con eneldo y mostaza dulce, para probar en los restaurantes tradicionales."
      }
    ],
    attenzioni: [
      "Casi todo se paga con tarjeta: muchos locales no aceptan efectivo.",
      "Las bebidas de más del 3,5% de alcohol solo se compran en Systembolaget, cerrado los domingos y festivos.",
      "Desde el aeropuerto de Arlanda el Arlanda Express llega al centro en 18 minutos, con salidas cada 12-15 minutos; hay también otros trenes y autobuses: los taxis sin precio pactado pueden salir muy caros.",
      "Carteristas en la estación central y en el metro en hora punta."
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta para Estocolmo?",
        risposta: "Dos días bastan para Gamla Stan, el Museo Vasa, el Stadshuset y Skansen. Con tres se añade el archipiélago en verano o Drottningholm."
      },
      {
        domanda: "¿Cómo se va del aeropuerto de Arlanda al centro?",
        risposta: "El Arlanda Express llega a la estación central en unos 20 minutos y cuesta unos 349 SEK. El tren de cercanías SL y los autobuses Flygbussarna son más lentos pero más baratos."
      },
      {
        domanda: "¿Estocolmo es cara?",
        risposta: "Menos que Oslo y Copenhague, pero más que España o Italia: una comida sencilla cuesta 12-20 €, una cena media 35-45 € por persona, una cerveza 6-9 €."
      },
      {
        domanda: "¿Hay que reservar el Museo Vasa?",
        risposta: "No es obligatorio, pero en verano y los fines de semana conviene comprar online para evitar la cola. ABBA The Museum funciona solo con franjas horarias."
      },
      {
        domanda: "¿Hace falta efectivo en Suecia?",
        risposta: "Casi nunca: se paga con tarjeta en todas partes, metro y puestos incluidos. Algunos locales no aceptan efectivo."
      },
      {
        domanda: "¿Cuándo ir a Estocolmo?",
        risposta: "De mayo a septiembre, con días larguísimos y barcos al archipiélago. Diciembre tiene mercadillos de Navidad en Skansen y Gamla Stan, pero oscurece pronto."
      }
    ],
    gite: [
      {
        nome: "Uppsala",
        distanza: "40 minutos en tren",
        come: "Trenes SJ y regionales frecuentes desde la estación central.",
        testo: "La ciudad universitaria más antigua de Escandinavia, con la mayor catedral gótica del norte, el castillo y los túmulos vikingos de Gamla Uppsala a pocos kilómetros."
      },
      {
        nome: "Vaxholm",
        distanza: "1 hora en barco",
        come: "Barcos de Waxholmsbolaget desde Strömkajen, o autobús 670 desde Tekniska högskolan.",
        testo: "El pueblo del archipiélago más cercano y cómodo, con casas de madera, una fortaleza en el islote frente al puerto y cafés junto al agua."
      },
      {
        nome: "Sigtuna",
        distanza: "50 km",
        come: "Tren de cercanías hasta Märsta, luego autobús 570 o 575.",
        testo: "La ciudad más antigua de Suecia, fundada hacia el año 980, con una calle principal de casas bajas, ruinas de iglesias medievales y piedras rúnicas junto a los caminos."
      }
    ],
    esperienzeSlugs: ['vasamuseet-stoccolma', 'gamla-stan-passeggiata', 'abba-museum-stoccolma', 'arcipelago-stoccolma-in-barca'],
    tripSlugs: ['lapponia-svedese-abisko', 'capitali-nordiche'],
    imageAlt: 'Casas de colores del casco histórico de Estocolmo asomadas al agua en invierno',
    immagine: '/images/svezia/stoccolma-stock.jpg',
  },
  {
    slug: 'kiruna',
    paeseSlug: 'svezia',
    ordine: 2,
    nome: 'Kiruna',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 noches en total (ida y vuelta), base logística para Abisko',
    visitataPersonalmente: true,
    introduzione: "La ciudad más al norte de Suecia, base logística para Abisko. Es famosa por la mina de hierro LKAB, que está obligando a la ciudad a trasladarse, pieza por pieza, unos kilómetros más allá.",
    percheAndarci: "Es el paso obligado para Abisko, pero tiene identidad propia: la iglesia de madera roja, el centro en plena transformación urbanística y, no muy lejos, el ICEHOTEL.",
    cosaVedere: [
      "La iglesia de madera roja de Kiruna, uno de los edificios símbolo de la ciudad",
      "El centro de la ciudad, que en los próximos años será desmontado y reconstruido en otro lugar por la ampliación de la mina",
    ],
    cosaFare: [
      "Paseo a pie por el centro",
      "Relax en el spa del Elite Hotel Frost después de los días más intensos en Abisko",
      "Visita guiada a la mina LKAB (3 horas, hasta 540 m de profundidad; véase la ficha de experiencia dedicada)",
      "Excursión de media jornada al ICEHOTEL de Jukkasjärvi, a unos 20 minutos (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "A la ida dormí en el STF Malmfältens Folkhögskola, un alojamiento sencillo y esencial gestionado por la Svenska Turistföreningen (la asociación excursionista sueca, muy presente en toda la región). A la vuelta en el Elite Hotel Frost - Hotel & Spa: un buen salto de calidad, con un spa interior ideal para recuperarse después de los días más fríos en Abisko.",
    doveMangiare: "No tengo restaurantes que recomendar. El presupuesto orientativo que había previsto: desayunos 10-15 €/día, comidas y cenas 30-50 € por comida.",
    comeArrivare: 'Vuelo interior desde Estocolmo Arlanda; luego tren panorámico a Abisko.',
    comeSpostarsi: 'A pie por el centro; tren a Abisko.',
    periodoMigliore: "el mismo que Abisko: de finales de diciembre a marzo para la aurora, con febrero-marzo mucho más económicos",
    costi:
      "El centro se visita gratis; la iglesia está cerrada hasta su reapertura prevista en 2027. La mina LKAB cuesta unos 590 SEK (52 €) por persona por la visita guiada de 3 horas. El ICEHOTEL cuesta 349 SEK (31 €) solo la entrada de día, desde 3.995 SEK (350 €) por noche para 2 personas para dormir allí. Habitación doble en hotel de gama media en la ciudad: aproximadamente 100-150 €/noche.",
    erroriDaEvitare: [],
    miaEsperienza:
      "Para mí Kiruna fue una base práctica más que un destino: a la ida la esencialidad del STF, a la vuelta el spa del Elite Hotel Frost, y de fondo la iglesia roja y el centro en transformación.",
    luoghi: [
      {
        nome: "Iglesia de Kiruna",
        testo: "Iglesia de madera roja de 1912 de Gustaf Wickman, considerada una de las mayores construcciones de madera de Suecia. El 19 y 20 de agosto de 2025 fue transportada entera unos 5 km, sobre remolques teledirigidos, hasta el nuevo centro, entre el cementerio y la nueva plaza, por la expansión de la mina. En el interior siguen las obras: la reapertura está prevista para 2027.",
        come: "En el nuevo centro de Kiruna, a pie; por ahora solo se ve por fuera.",
        costo: "cerrada al público hasta la reapertura prevista en 2027",
        url: "https://www.svenskakyrkan.se/kiruna",
        quando: "De día, ya que la luz invernal es corta.",
        tempo: "30 minutos-1 hora",
        consiglio: "El nuevo centro está en construcción: una ocasión para ver una ciudad que se mueve."
      },
      {
        nome: "Mina de hierro de LKAB",
        testo: "La mina de hierro subterránea más grande y moderna del mundo; la visita guiada, de unas 3 horas, baja al centro de visitantes de LKAB a 540 metros de profundidad y explica por qué Kiruna se está trasladando.",
        come: "Visita guiada de Kiruna Lapland con autobús desde el Kiruna Tourist Center (Malmvägen 9B); los días y los idiomas cambian según la temporada.",
        quando: "Todo el año; en invierno las plazas se agotan pronto.",
        tempo: "3 horas",
        costo: "590 SEK adultos (2026), con traslado, guía y café",
        url: "https://kirunalapland.se/en/mine-tour/",
        consiglio: "Llevar ropa de abrigo: bajo tierra la temperatura es baja."
      },
      {
        nome: "ICEHOTEL en Jukkasjärvi",
        testo: "El hotel de hielo reconstruido cada invierno con esculturas y suites temáticas. Se visita también sin dormir y está el ICEBAR; las habitaciones de hielo existen de diciembre a abril, mientras que la Art Suite 365 abre todo el año.",
        come: "En Jukkasjärvi, a las afueras de Kiruna, en coche o bus.",
        quando: "De diciembre a abril.",
        tempo: "1-2 horas",
        url: "https://www.icehotel.com",
        consiglio: "Aunque no se duerma allí, se pueden visitar las salas y el bar."
      },
      {
        nome: "Elite Hotel Frost y spa",
        testo: "El spa de nuestro hotel de Kiruna, ideal para recuperarse tras los días en el frío de Abisko.",
        come: "En el centro de Kiruna.",
        quando: "Tarde, tras volver de Abisko.",
        tempo: "2 horas",
        consiglio: "Una de las experiencias que merecen la pena tras la fase más fría."
      }
    ],
    sapori: [
      {
        nome: "Reno",
        testo: "Renskav (finas lonchas de reno con puré y arándanos rojos), el plato típico del Norte."
      },
      {
        nome: "Mora de los pantanos (hjortron)",
        testo: "Frutos naranjas típicos de Laponia, en mermelada o con helado."
      },
      {
        nome: "Salvelino alpino",
        testo: "Pescado de agua dulce servido ahumado o a la plancha."
      }
    ],
    attenzioni: [
      "En invierno la temperatura puede bajar de -30 grados: ropa técnica por capas, no algodón.",
      "La mina y el ICEHOTEL se reservan con antelación en los meses de temporada alta.",
      "La aurora no está garantizada: prever varias noches en la zona."
    ],
    esperienzeSlugs: ['icehotel-jukkasjarvi', 'miniera-lkab-kiruna'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Iglesia de madera roja de Kiruna bajo un cielo invernal sueco',
    immagine: '/images/svezia/kiruna-stock.jpg',
  },
  {
    slug: 'abisko',
    paeseSlug: 'svezia',
    ordine: 3,
    nome: 'Abisko',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 noches, corazón del viaje',
    visitataPersonalmente: true,
    introduzione: "El motivo del viaje: un parque nacional con un microclima seco que lo convierte en uno de los mejores lugares del mundo para ver la aurora boreal, y la base para la moto de nieve, el trineo de huskies y la Aurora Sky Station.",
    percheAndarci: "Ante todo por la aurora boreal. Después por la naturaleza ártica del parque nacional y por las dos actividades más adrenalínicas del viaje.",
    cosaVedere: [
      "La vista desde la Aurora Sky Station, en lo alto del monte Nuolja",
      "El lago helado del parque nacional",
    ],
    cosaFare: [
      "Aurora Sky Station: telesilla y cena panorámica (véase la ficha de experiencia dedicada)",
      "Moto de nieve sobre el lago helado (véase la ficha de experiencia dedicada)",
      "Trineo de huskies con caza de la aurora (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Dormí en el STF Abisko Turiststation, la histórica estación de montaña dentro del parque nacional, desde donde se sale directamente al telesilla de la Aurora Sky Station. Es esencial, pero inmersa en el parque tiene una atmósfera que no he encontrado en otro sitio.",
    doveMangiare: "No tengo locales que recomendar: los desayunos suelen estar incluidos en las instalaciones STF, comidas y cenas en la media que había previsto (30-50 € por comida).",
    comeArrivare: 'Tren panorámico desde Kiruna: algo más de una hora en un paisaje cada vez más desnudo.',
    comeSpostarsi: 'A pie por el pueblo; excursiones organizadas en moto de nieve y con huskies.',
    periodoMigliore: 'de finales de diciembre a marzo; febrero-marzo cuesta mucho menos manteniendo altas probabilidades de aurora',
    costi:
      "Actividades, precio orientativo por persona: Aurora Sky Station con visita nocturna guiada desde 1.295 SEK (unos 120 €) y cena en la cima desde 2.395 SEK (unos 215 €), tarifas STF de la temporada 2026-27; moto de nieve guiada sobre el lago helado unos 100-110 € (self-drive 150-250 €); trineo de huskies nocturno con caza de la aurora 240 € (versiones diurnas más cortas desde 70 €). Costes de todo el viaje por persona: vuelos 600-645 €, alojamiento 400-600 €, transportes interiores 80 € (tren panorámico + traslado aeroportuario), excursiones 450-500 € por 3 tours con guía. Presupuesto total orientativo de 1.500 € (básico) a 1.800 € (nivel óptimo).",
    erroriDaEvitare: [
      "Ir en Nochevieja si el objetivo es ahorrar: es la época más cara del año para volar y dormir en la zona",
      "No dejar un margen extra en los transportes: con el frío extremo los trenes a veces se cancelan (no a menudo, pero ocurre), y en esos casos los taxis de la zona tienden a subir un poco los precios",
    ],
    miaEsperienza:
      "Abisko fue el corazón del viaje: la cena en altura en la Aurora Sky Station, la moto de nieve sobre el lago helado y el trineo de huskies bajo un cielo que en un momento dado se encendió de verdad. Son los recuerdos más fuertes de la semana.",
    luoghi: [
      {
        nome: "Aurora Sky Station",
        testo: "Una estación en la cima del monte Nuolja, a la que se llega en telesilla, desde la que se observa la aurora en uno de los lugares más despejados de Suecia. Hay también una cena panorámica.",
        come: "Telesilla desde la STF Abisko Turiststation. Dos fórmulas que se reservan con antelación, con plazas limitadas: Night Visit (guía, telesilla ida y vuelta, mono y botas térmicas) y Northern Lights Dinner.",
        quando: "Temporada 2026-27 del 19 de octubre al 27 de marzo, de 20:30 a 1:00; con viento fuerte la telesilla se para.",
        tempo: "3-4 horas",
        costo: "Night Visit desde 1.295 SEK, cena desde 2.395 SEK por persona (temporada 2026-27, tarifas STF)",
        url: "https://www.auroraskystation.se",
        consiglio: "Cené allí arriba: es de los recuerdos más fuertes de la semana."
      },
      {
        nome: "Lago helado Torneträsk y moto de nieve",
        testo: "El gran lago de Abisko se hiela en invierno y se recorre en moto de nieve con un guía, también de noche bajo la aurora.",
        come: "Excursión con operador local, salida desde Abisko.",
        quando: "Invierno, cuando el lago está helado: fechas con el operador.",
        tempo: "2-3 horas",
        consiglio: "Hace falta ropa de abrigo; los requisitos para conducir, en la web del operador. Se para a menudo para mirar el cielo."
      },
      {
        nome: "Trineo de huskies",
        testo: "Conducir un trineo de perros husky en los alrededores de Abisko, con una parada para el té y la búsqueda de la aurora.",
        come: "Reserva con operador local; traslado en minibús.",
        quando: "Invierno, con nieve.",
        tempo: "media jornada",
        consiglio: "Bajo la aurora es una emoción que se queda."
      },
      {
        nome: "Parque nacional de Abisko y Lapporten",
        testo: "El parque a los pies de las montañas, con el valle en U de Lapporten, la «puerta de Laponia», al fondo. La estación turística STF es la base para los senderos.",
        come: "Tren desde Kiruna hasta la estación de Abisko Turiststation.",
        quando: "Verano para el trekking, invierno para la aurora.",
        tempo: "jornada completa",
        costo: "entrada al parque libre",
        consiglio: "Los senderos están siempre abiertos, pero en invierno hacen falta crampones ligeros o raquetas."
      }
    ],
    sapori: [
      {
        nome: "Cena en la Aurora Sky Station",
        testo: "Menú fijo con ingredientes locales, en lo alto de la montaña."
      },
      {
        nome: "Desayuno STF",
        testo: "Las instalaciones STF suelen incluir desayuno: bufé sencillo y abundante."
      }
    ],
    attenzioni: [
      "La Aurora Sky Station y el telesilla pueden cerrar con viento fuerte o tormenta.",
      "Quien conduce una moto de nieve responde de los daños: comprobar franquicia y seguro.",
      "En Abisko hay pocos servicios: llevar lo esencial."
    ],
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Aurora boreal verde sobre las montañas nevadas del parque nacional de Abisko',
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
