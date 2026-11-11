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
    comeArrivare: "Se llega en avión al aeropuerto de Kiruna (KRN), con vuelos interiores desde Estocolmo Arlanda: el autobús que coincide con las llegadas lleva al centro en unos 20 minutos por 100-110 SEK (unos 10 €), el taxi cuesta 300-400 SEK. Como alternativa está el tren SJ de Estocolmo hacia Narvik, que para en Kiruna. De Kiruna a Abisko se sigue en tren, aproximadamente una hora y cuarto, o en coche por la E10 (unos 96 km).",
    comeSpostarsi: 'A pie por el centro; tren a Abisko.',
    periodoMigliore: "el mismo que Abisko: de finales de diciembre a marzo para la aurora, con febrero-marzo mucho más económicos",
    costi: "El centro se visita gratis; la iglesia está cerrada hasta su reapertura prevista en 2027. La mina LKAB cuesta 590 SEK (unos 52 €) por persona por la visita guiada de 3 horas. El ICEHOTEL cuesta 325 SEK (unos 29 €) solo la visita de día hasta diciembre de 2026, desde 3.995 SEK (unos 350 €) por noche para 2 personas para dormir en una habitación de hielo. Habitación doble en hotel de gama media en la ciudad: aproximadamente 100-150 €/noche. Presupuesto diario orientativo por persona: 80-110 € con albergue STF y compra en el supermercado; 160-230 € con hotel en el centro y dos comidas fuera (30-50 € por comida); más de 400 € con una noche en el ICEHOTEL y una visita guiada.",
    erroriDaEvitare: [],
    miaEsperienza:
      "Para mí Kiruna fue una base práctica más que un destino: a la ida la esencialidad del STF, a la vuelta el spa del Elite Hotel Frost, y de fondo la iglesia roja y el centro en transformación.",
    luoghi: [
      {
        nome: "Iglesia de Kiruna",
        testo: "Iglesia de madera roja de 1912 de Gustaf Wickman, considerada una de las mayores construcciones de madera de Suecia. El 19 y 20 de agosto de 2025 fue transportada entera unos 5 km, sobre remolques teledirigidos, hasta el nuevo centro, entre el cementerio y la nueva plaza, por la expansión de la mina. En el interior siguen las obras: la reapertura está prevista para 2027.",
        come: "En el nuevo centro de Kiruna, a pie; por ahora solo se ve por fuera.",
        quando: "De día, ya que la luz invernal es corta.",
        tempo: "30 minutos-1 hora",
        costo: "cerrada al público hasta la reapertura prevista en 2027",
        orari: "interior cerrado por obras hasta 2027; el exterior se ve a cualquier hora",
        lat: 67.84959,
        lng: 20.28885,
        url: "https://www.svenskakyrkan.se/kiruna",
        consiglio: "El nuevo centro está en construcción: una ocasión para ver una ciudad que se mueve.",
      },
      {
        nome: "Mina de hierro de LKAB",
        testo: "La mina de hierro subterránea más grande y moderna del mundo; la visita guiada, de unas 3 horas, baja al centro de visitantes de LKAB a 540 metros de profundidad y explica por qué Kiruna se está trasladando.",
        come: "Visita guiada de Kiruna Lapland con autobús desde el Kiruna Tourist Center (Malmvägen 9B); los días y los idiomas cambian según la temporada.",
        quando: "Todo el año; en invierno las plazas se agotan pronto.",
        tempo: "3 horas",
        costo: "590 SEK adultos, unos 52 € (2026), con traslado, guía y café",
        orari: "días, horarios e idiomas varían según la temporada; presentarse 15 minutos antes de la salida, reserva online",
        url: "https://kirunalapland.se/en/mine-tour/",
        consiglio: "Llevar ropa de abrigo: bajo tierra la temperatura es baja.",
      },
      {
        nome: "ICEHOTEL en Jukkasjärvi",
        testo: "El hotel de hielo reconstruido cada invierno con esculturas y suites temáticas a mediados de diciembre, y que en abril se deja derretir en el río Torne. Se visita también sin dormir; el ICEHOTEL 365, con el ICEBAR y las suites de arte, abre todo el año.",
        come: "En Jukkasjärvi, a unos 20 km de Kiruna: en coche o con el autobús 501 de Länstrafiken Norrbotten (se paga con tarjeta a bordo, pocas salidas el fin de semana).",
        quando: "De diciembre a abril para el hotel de hielo propiamente dicho.",
        tempo: "1-2 horas",
        costo: "visita de día 325 SEK adultos, unos 29 € (abril-diciembre de 2026); niños de 4 a 12 años 39 SEK",
        orari: "exposición ICEHOTEL 365 todos los días 11-18 hasta el 11 de diciembre de 2026, luego 10-18 hasta el 10 de abril de 2027; ICEBAR 11-20 de diciembre de 2026 a marzo de 2027",
        lat: 67.85021,
        lng: 20.59642,
        url: "https://www.icehotel.com/tickets-opening-hours",
        consiglio: "Solo se paga con tarjeta: en todo el complejo no se acepta efectivo.",
      },
      {
        nome: "Iglesia de Jukkasjärvi",
        testo: "Pequeña iglesia de madera roja con el campanario separado: el edificio actual es de 1726, pero conserva partes de 1607. Dentro, el retablo pintado por Bror Hjorth es el motivo para entrar.",
        come: "En Jukkasjärvi, a pocos minutos a pie del ICEHOTEL: encaja en la misma media jornada.",
        quando: "De día, antes o después de la visita al ICEHOTEL.",
        tempo: "30 minutos",
        orari: "todos los días 10-15, todo el año",
        lat: 67.84663,
        lng: 20.62125,
        url: "https://kirunalapland.se/en/destinations/jukkasjarvi/",
      },
      {
        nome: "Nutti Sámi Siida y museo Márkanbáiki",
        testo: "Museo al aire libre sobre la cultura sami en Jukkasjärvi: vida nómada, historia del pastoreo de renos y renos a los que se da de comer a mano. Hay una cabaña-café con almuerzo sami y una tienda de artesanía.",
        come: "En Jukkasjärvi, junto a la iglesia; lo gestiona Nutti Sámi Siida, que organiza también excursiones en trineo tirado por renos.",
        quando: "Invierno: en verano casi toda la manada está en la montaña y en el museo quedan pocos renos.",
        tempo: "1-2 horas",
        orari: "museo todos los días 10-16; el 24 de diciembre 10-14",
        lat: 67.84698,
        lng: 20.62,
        url: "https://nutti.se",
      },
      {
        nome: "Ayuntamiento Kristallen y nuevo centro",
        testo: "El ayuntamiento Kristallen, inaugurado en 2018, fue el primer edificio del nuevo centro, unos tres kilómetros al este de la vieja Kiruna. A su alrededor están surgiendo manzanas, un centro cultural, unos baños y escuelas: aquí se entiende el traslado de la ciudad.",
        come: "A pie desde la iglesia o el Elite Hotel Frost, todos en el mismo barrio.",
        quando: "De día; en invierno en la ventana de luz de mediodía.",
        tempo: "1 hora",
        lat: 67.849,
        lng: 20.30277,
        url: "https://kirunalapland.se/en/city-transformation/",
      },
      {
        nome: "Luossavaara",
        testo: "La colina al norte de la ciudad, con las pistas de esquí de Luossabacken y senderos. Desde arriba se ven el centro viejo y el nuevo y, enfrente, la montaña de la mina.",
        come: "En coche o taxi hasta la base de las pistas; en invierno con el telesquí o con raquetas.",
        quando: "Al atardecer o en noches despejadas, lejos de las luces del centro.",
        tempo: "1-2 horas",
        lat: 67.87273,
        lng: 20.21002,
      },
      {
        nome: "Elite Hotel Frost y spa",
        testo: "El spa de nuestro hotel de Kiruna, ideal para recuperarse tras los días en el frío de Abisko.",
        come: "En el nuevo centro de Kiruna.",
        quando: "Tarde, tras volver de Abisko.",
        tempo: "2 horas",
        lat: 67.84956,
        lng: 20.30609,
        consiglio: "Una de las experiencias que merecen la pena tras la fase más fría.",
      },
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
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana en el nuevo centro: iglesia de Kiruna (por fuera) y ayuntamiento Kristallen",
          "Comida en el centro",
          "Tarde en Jukkasjärvi con el autobús 501: ICEHOTEL, iglesia de Jukkasjärvi y museo Márkanbáiki",
          "Noche en el spa del Elite Hotel Frost o a la caza de la aurora fuera de la ciudad",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: visita a la mina LKAB (3 horas, con reserva)",
          "Tarde en la colina de Luossavaara para ver la ciudad desde arriba",
          "Noche con una salida guiada para la aurora",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: tren a Abisko, aproximadamente una hora y cuarto",
          "Cañón del Abiskojåkka con luz de día y noche en la Aurora Sky Station",
        ],
      },
    ],
    zone: [
      {
        nome: "Nuevo centro de Kiruna",
        perChi: "quien quiere restaurantes, tiendas y el autobús al aeropuerto a mano",
        testo: "Aquí están el Elite Hotel Frost y los demás hoteles de la ciudad, cerca de la iglesia y del ayuntamiento. Cómodo para la mina y para moverse en autobús.",
        fascia: "110-180 €",
      },
      {
        nome: "Jukkasjärvi",
        perChi: "quien quiere dormir en el ICEHOTEL o junto al río Torne",
        testo: "El pueblo del ICEHOTEL, a unos 20 km: habitaciones cálidas todo el año y habitaciones de hielo de diciembre a abril. Por la noche hay pocas alternativas para cenar fuera del hotel.",
        fascia: "150-350 € (habitación de hielo desde 3.995 SEK para 2)",
      },
      {
        nome: "Kurravaara y campamentos para la aurora",
        perChi: "quien busca oscuridad de verdad y cabañas con vistas",
        testo: "Pequeños campamentos y cabañas fuera de la ciudad, lejos de las luces, pensados para mirar el cielo desde la puerta. Hace falta coche o el traslado del alojamiento.",
        fascia: "200-250 €",
      },
    ],
    gite: [
      {
        nome: "Abisko",
        distanza: "aproximadamente 1 hora y cuarto en tren, 96 km",
        come: "Tren de la línea de Narvik hasta la parada Abisko Turiststation; en coche por la E10.",
        testo: "El parque nacional con su microclima seco, la Aurora Sky Station en el monte Nuolja y el lago Torneträsk: es el motivo del viaje y merece al menos dos noches.",
      },
      {
        nome: "Jukkasjärvi",
        distanza: "unos 20 km, 20 minutos",
        come: "Autobús 501 de Länstrafiken Norrbotten o coche.",
        testo: "ICEHOTEL, iglesia del siglo XVIII y museo sami en la misma media jornada.",
      },
      {
        nome: "Nikkaluokta y Kebnekaise",
        distanza: "unos 70 km en coche",
        come: "En coche o en el autobús de verano hasta Nikkaluokta; desde allí, sendero hacia la estación de montaña de Kebnekaise.",
        testo: "La puerta de acceso a la montaña más alta de Suecia. Es una excursión de verano: en invierno la zona solo se alcanza en moto de nieve y con guías.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Kiruna?",
        risposta: "Un día basta para el centro y Jukkasjärvi; con dos se añade la mina LKAB, que solo se visita algunos días. Quien va a Abisko suele dormir en Kiruna a la ida y a la vuelta.",
      },
      {
        domanda: "¿Kiruna o Abisko como base para la aurora?",
        risposta: "Abisko, por el microclima seco y la oscuridad del parque. Kiruna es más cómoda para vuelos y servicios: se puede hacer una noche aquí y dos o tres en Abisko.",
      },
      {
        domanda: "¿Hay que reservar la visita a la mina LKAB?",
        risposta: "Sí, las visitas se reservan online en la web de Kiruna Lapland y salen del Kiruna Tourist Center. Los días y los idiomas cambian según la temporada y en invierno las plazas se agotan pronto.",
      },
      {
        domanda: "¿Se puede visitar el ICEHOTEL sin dormir allí?",
        risposta: "Sí, con la entrada de día: 325 SEK para adultos hasta diciembre de 2026. Solo se paga con tarjeta.",
      },
      {
        domanda: "¿Cómo se va de Kiruna al ICEHOTEL?",
        risposta: "Con el autobús 501 de Länstrafiken Norrbotten, en coche o en taxi: son unos 20 km. El fin de semana hay pocas salidas, conviene mirar el horario en ltnbd.se.",
      },
      {
        domanda: "¿La iglesia de Kiruna está abierta?",
        risposta: "No: fue trasladada al nuevo centro en agosto de 2025 y el interior sigue cerrado hasta la reapertura prevista en 2027. Por fuera se ve siempre.",
      },
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
    comeArrivare: "Desde Kiruna se llega en tren por la línea de Narvik, aproximadamente una hora y cuarto en un paisaje cada vez más desnudo: en Abisko hay dos paradas, Abisko Östra para el pueblo y Abisko Turiststation, la correcta para la estación STF, el naturum y el telesilla. También hay trenes SJ directos desde Estocolmo. En coche son unos 96 km desde Kiruna por la E10; desde el aeropuerto de Kiruna conviene el tren o un traslado.",
    comeSpostarsi: 'A pie por el pueblo; excursiones organizadas en moto de nieve y con huskies.',
    periodoMigliore: 'de finales de diciembre a marzo; febrero-marzo cuesta mucho menos manteniendo altas probabilidades de aurora',
    costi: "Actividades, precio orientativo por persona: Aurora Sky Station con visita nocturna guiada desde 1.295 SEK (unos 120 €) y cena en la cima desde 2.395 SEK (unos 215 €), tarifas STF de la temporada 2026-27; solo telesilla desde 260 SEK (unos 23 €); moto de nieve guiada en el lago helado unos 100-110 € (self-drive 150-250 €); trineo de huskies nocturno con búsqueda de la aurora 240 € (versiones diurnas más cortas desde 70 €). Costes del viaje completo por persona: vuelos 600-645 €, alojamiento 400-600 €, transporte interior 80 € (tren panorámico + traslado al aeropuerto), excursiones 450-500 € por 3 tours guiados. Presupuesto total orientativo de 1.500 € (básico) a 1.800 € (nivel óptimo). Al día, por persona: unos 80-120 € con habitación sencilla en la STF y comidas sencillas; 200-300 € con una o dos actividades guiadas; más de 400 € con la cena en la cima y la moto de nieve self-drive.",
    erroriDaEvitare: [
      "Ir en Nochevieja si el objetivo es ahorrar: es la época más cara del año para volar y dormir en la zona",
      "No dejar un margen extra en los transportes: con el frío extremo los trenes a veces se cancelan (no a menudo, pero ocurre), y en esos casos los taxis de la zona tienden a subir un poco los precios",
    ],
    miaEsperienza:
      "Abisko fue el corazón del viaje: la cena en altura en la Aurora Sky Station, la moto de nieve sobre el lago helado y el trineo de huskies bajo un cielo que en un momento dado se encendió de verdad. Son los recuerdos más fuertes de la semana.",
    luoghi: [
      {
        nome: "Aurora Sky Station",
        testo: "Una estación en la cima del monte Nuolja, a 900 metros, a la que se llega en 20 minutos de telesilla, desde la que se observa la aurora en uno de los lugares más despejados de Suecia. Hay también una cena panorámica.",
        come: "Telesilla desde la STF Abisko Turiststation. Dos fórmulas que se reservan con antelación, con plazas limitadas: Night Visit (guía, telesilla de ida y vuelta, mono y botas térmicas) y Northern Lights Dinner.",
        quando: "Temporada 2026-27 del 19 de octubre al 27 de marzo; con viento fuerte el telesilla se detiene.",
        tempo: "3-4 horas",
        costo: "Night Visit desde 1.295 SEK, cena desde 2.395 SEK por persona (temporada 2026-27, tarifas STF); solo telesilla desde 260 SEK",
        orari: "invierno 2026-27 de 20:30 a 1:00; verano 2026 de día 9:30-16 (12 de junio-20 de septiembre) y de noche 20-1:30 (12 de junio-19 de julio)",
        lat: 68.36169,
        lng: 18.72341,
        url: "https://www.auroraskystation.se",
        consiglio: "Cené allí arriba: es de los recuerdos más fuertes de la semana.",
      },
      {
        nome: "Lago helado Torneträsk y moto de nieve",
        testo: "El gran lago de Abisko, de 70 km de largo, suele estar helado de diciembre a junio y se recorre en moto de nieve con un guía, también de noche bajo la aurora.",
        come: "Excursión con un operador local, salida desde Abisko: en trineo arrastrado por la moto del guía, o en self-drive con carné de conducir.",
        quando: "Invierno, cuando el lago está helado: fechas con el operador.",
        tempo: "2-3 horas",
        costo: "guiada unos 100-110 € (2 horas); self-drive 150-250 € (media jornada)",
        lat: 68.367,
        lng: 19.1,
        consiglio: "Hace falta ropa de abrigo; los requisitos para conducir, en la web del operador. Se para a menudo para mirar el cielo.",
      },
      {
        nome: "Trineo de huskies",
        testo: "Conducir un trineo de perros husky en los alrededores de Abisko, con una parada para el té y la búsqueda de la aurora.",
        come: "Reserva con un operador local; recogida en la STF Abisko Turiststation, donde conviene estar 45 minutos antes.",
        quando: "Invierno, con nieve.",
        tempo: "media jornada",
        costo: "salida nocturna con búsqueda de la aurora 240 €; versiones de día más cortas desde 70 €",
        consiglio: "Bajo la aurora es una emoción que se queda.",
      },
      {
        nome: "Parque nacional de Abisko y Lapporten",
        testo: "El parque a los pies de las montañas, con el valle en U de Lapporten, la «puerta de Laponia», al fondo. Las precipitaciones son de solo 300 milímetros al año, y por eso el cielo está tan a menudo despejado.",
        come: "Tren desde Kiruna hasta la estación de Abisko Turiststation; el naturum y la estación STF están a unos 800 metros.",
        quando: "Verano para el trekking, invierno para la aurora.",
        tempo: "día completo",
        costo: "entrada al parque libre",
        lat: 68.26622,
        lng: 18.98619,
        url: "https://www.sverigesnationalparker.se/en/parks/abisko-national-park/",
        consiglio: "Los senderos están siempre abiertos, pero en invierno hacen falta crampones ligeros o raquetas.",
      },
      {
        nome: "Cañón del Abiskojåkka",
        testo: "El río que baja del lago Abiskojaure al Torneträsk excava una garganta estrecha a pocos minutos de la estación STF. Es el paseo más fácil del parque, con un tramo de sendero accesible y una zona de descanso.",
        come: "A pie desde el naturum o la STF Abisko Turiststation; en invierno los crampones ligeros ayudan sobre el hielo.",
        quando: "Con luz de día; en invierno la ventana de mediodía.",
        tempo: "1 hora",
        costo: "libre",
        lat: 68.36389,
        lng: 18.7875,
      },
      {
        nome: "Naturum Abisko",
        testo: "El centro de visitantes del parque: una exposición sobre geología, flora y fauna y sobre los efectos del cambio climático en la montaña, con guías naturalistas, una pequeña biblioteca y una tienda. En el piso de arriba hay exposiciones temporales y proyecciones.",
        come: "Junto a la STF Abisko Turiststation, a unos 800 metros de la parada del tren; fuera hay un punto de información siempre abierto.",
        quando: "Antes de salir a los senderos.",
        tempo: "1 hora",
        orari: "2026-27: 1-26 de septiembre de martes a sábado 9-17; 1 de diciembre-13 de febrero martes, jueves y sábado 14-17; desde el 15 de febrero los mismos días 13-17",
        lat: 68.35812,
        lng: 18.78489,
        url: "https://www.lansstyrelsen.se/norrbotten/besoksmal/naturum-i-norrbottens-lan/naturum-abisko.html",
      },
      {
        nome: "Kungsleden",
        testo: "El «sendero del rey», de 425 km, empieza justo en la STF Abisko Turiststation y sube a lo largo del río Abiskojåkka. Aunque no se haga el trekking entero, los primeros kilómetros son un bonito paseo entre abedules.",
        come: "Salida a pie desde la estación STF; en la tienda se alquila el equipo.",
        quando: "De finales de junio a septiembre para caminar; en invierno el primer tramo se hace con raquetas o esquís.",
        tempo: "de 2 horas a varios días",
        costo: "libre",
        lat: 68.35738,
        lng: 18.78247,
        url: "https://www.swedishtouristassociation.com/facilities/stf-abisko-mountain-station/",
      },
      {
        nome: "Monte Nuolja y el sol de medianoche",
        testo: "En verano el Nuolja se convierte en el lugar para ver el sol de medianoche: desde principios de junio en Abisko hay día polar. Se sube en telesilla o a pie y se baja caminando.",
        come: "Telesilla desde la estación del valle junto a la STF, o sendero desde la estación.",
        quando: "De mediados de junio a mediados de julio, con el telesilla nocturno abierto.",
        tempo: "3-4 horas",
        costo: "telesilla desde 260 SEK, unos 23 €",
        orari: "telesilla nocturno 20-1:30 del 12 de junio al 19 de julio (verano de 2026)",
        lat: 68.37256,
        lng: 18.69877,
        url: "https://auroraskystation.se/sommar/linbana-sommar/",
      },
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
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Llegada en tren a la parada Abisko Turiststation",
          "Naturum y cañón del Abiskojåkka con luz de día",
          "Cena en la STF y noche en la Aurora Sky Station (Night Visit o cena en la cima)",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: moto de nieve sobre el Torneträsk helado",
          "Noche: trineo de huskies con búsqueda de la aurora",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: primer tramo del Kungsleden con raquetas, o excursión a Björkliden",
          "Noche libre para otra búsqueda de la aurora, si el cielo está despejado",
          "En verano: Lapporten y el sol de medianoche desde el Nuolja",
        ],
      },
    ],
    zone: [
      {
        nome: "STF Abisko Turiststation",
        perChi: "quien quiere el telesilla y los senderos en la puerta",
        testo: "La estación histórica dentro del parque, con habitaciones, albergue, restaurante y tienda con alquiler. Aquí empieza el Kungsleden y se coge el telesilla.",
        fascia: "90-160 €",
      },
      {
        nome: "Abisko Östra",
        perChi: "quien prefiere un lodge o una cabaña con cocina",
        testo: "El pueblo propiamente dicho, unos 4 km al este de la estación STF, con lodges, cabañas y algún restaurante; tiene su propia parada de tren.",
        fascia: "desde unos 180 €",
      },
      {
        nome: "Björkliden",
        perChi: "quien quiere un resort de montaña con pistas de esquí",
        testo: "A unos 9 km de Abisko por la E10, con hoteles, cabañas y pistas; tiene también el campo de golf más septentrional de Suecia.",
      },
    ],
    gite: [
      {
        nome: "Björkliden",
        distanza: "unos 9 km, 10 minutos en coche",
        come: "En coche por la E10 o en tren, con su propia parada.",
        testo: "El pueblo de esquí más cercano, con pistas y senderos sobre el Torneträsk.",
      },
      {
        nome: "Riksgränsen",
        distanza: "unos 36 km, media hora en coche",
        come: "En coche por la E10 o en tren por la línea de Narvik.",
        testo: "El último pueblo sueco antes de la frontera con Noruega, entre montañas y lagos, famoso por el esquí a final de temporada.",
      },
      {
        nome: "Narvik",
        distanza: "unos 77 km, poco más de una hora en coche",
        come: "Tren por la línea del hierro o coche por la E10 cruzando la frontera.",
        testo: "El puerto noruego donde termina la línea que lleva el mineral desde Kiruna: en un día se pasa del lago helado a los fiordos.",
      },
      {
        nome: "Kiruna y Jukkasjärvi",
        distanza: "aproximadamente 1 hora y cuarto en tren hasta Kiruna",
        come: "Tren hasta Kiruna, luego autobús 501 a Jukkasjärvi.",
        testo: "El ICEHOTEL, el museo sami y la ciudad que se traslada por la mina, para combinar con la vuelta.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántas noches hacen falta en Abisko para ver la aurora?",
        risposta: "Al menos dos, mejor tres: la aurora no está garantizada y el tiempo cambia de una noche a otra. Con más noches se pone la actividad más cara en la del cielo mejor.",
      },
      {
        domanda: "¿Cuándo se ve la aurora en Abisko?",
        risposta: "Con oscuridad, es decir, de septiembre a marzo; la Aurora Sky Station abre por la noche del 19 de octubre al 27 de marzo en la temporada 2026-27. Desde principios de junio hay día polar y la aurora no se ve.",
      },
      {
        domanda: "¿Hay que reservar la Aurora Sky Station?",
        risposta: "Sí, el Night Visit y la cena tienen plazas limitadas y se reservan online con STF. Con viento fuerte el telesilla se detiene.",
      },
      {
        domanda: "¿En qué parada del tren hay que bajar?",
        risposta: "Abisko Turiststation para la estación STF, el naturum y el telesilla; Abisko Östra para el pueblo. Están a unos 4 km una de otra.",
      },
      {
        domanda: "¿Merece la pena Abisko en verano?",
        risposta: "Sí, por el sol de medianoche desde el Nuolja, el Kungsleden y los senderos del parque. En verano el telesilla abre de día y, de mediados de junio a mediados de julio, también de noche.",
      },
      {
        domanda: "¿Qué temperaturas hay en invierno?",
        risposta: "A menudo entre -20 y -30 °C en las semanas más frías, pero es un frío seco. Hacen falta capas técnicas, pasamontañas y guantes dobles, sobre todo en la cima y en la moto de nieve.",
      },
    ],
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Aurora boreal verde sobre las montañas nevadas del parque nacional de Abisko',
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
