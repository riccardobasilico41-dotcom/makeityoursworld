import type { Destinazione } from '@/lib/types'

export const destinazioniBrasile: Destinazione[] = [
  {
    slug: 'rio-de-janeiro',
    paeseSlug: 'brasile',
    ordine: 1,
    nome: 'Río de Janeiro',
    tipologia: ['città', 'mare', 'panorami'],
    giorniConsigliati: "4 días",
    visitataPersonalmente: true,
    introduzione:
      "Una metrópolis encajada entre montañas de granito, selva atlántica y océano, con las playas de Copacabana e Ipanema, el Cristo Redentor en el Corcovado y el Pan de Azúcar a la entrada de la bahía de Guanabara.",
    percheAndarci: "Por las vistas desde las alturas, las playas en plena ciudad, el samba de Lapa y la cocina de los botecos.",
    cosaVedere: [
      "El Cristo Redentor en el Corcovado",
      "El Pan de Azúcar al atardecer",
      "Copacabana, Ipanema y la Pedra do Arpoador",
      "Santa Teresa y la Escadaria Selarón",
      "El centro histórico, el Real Gabinete Português de Leitura y el Museu do Amanhã",
    ],
    cosaFare: [
      "Subir al Cristo con el primer viaje de la mañana",
      "Aplaudir el atardecer desde el Arpoador",
      "Una noche de samba en Lapa, ida y vuelta con la app",
      "La feijoada del sábado",
    ],
    doveDormire: "Ipanema, Leblon o Copacabana: económico 200-350 R$, medio 450-800 R$, alto más de 1.200 R$ por noche.",
    doveMangiare: "Botecos, churrascarias de rodízio, restaurantes de buffet al peso, pastel y caldo de cana en los mercados.",
    comeArrivare: "Desde el aeropuerto internacional del Galeão (GIG), a unos 20 km de la Zona Sul, Copacabana e Ipanema están a 40-60 minutos, más en hora punta. El taxi de las cooperativas oficiales se paga en el mostrador de llegadas con tarifa fija municipal, unos 122-126 R$ hasta Copacabana, Ipanema y Leblon (145-150 R$ por la noche y en festivos); Uber y 99 cuestan unos 60-100 R$ desde la zona de recogida que indica la app. Nunca aceptar viajes de quien se acerca en llegadas. Los vuelos internos llegan también al Santos Dumont, en el centro.",
    comeSpostarsi: "Metro entre la zona sur y el centro, taxis oficiales y aplicaciones; a pie solo de día y en las zonas concurridas.",
    periodoMigliore: "mayo-octubre, invierno suave y seco; diciembre-marzo caluroso y lluvioso.",
    costi: "Presupuesto bajo unos 50-70 € al día por persona (pousada o albergue, locales por peso, metro); medio 120-180 € (hotel en Ipanema o Copacabana, restaurantes, Cristo y Pan de Azúcar, app para moverse); alto desde 300 € (hotel frente al mar, churrascarias y restaurantes de nivel, guía privado). Cristo Redentor 87 R$ con la van desde el centro de visitantes Paineiras (132 R$ desde Copacabana o Largo do Machado), 139 R$ con el tren de cremallera desde Cosme Velho; Pan de Azúcar 205 R$ la entrada completa; Jardín Botánico 80 R$ para extranjeros (2026).",
    erroriDaEvitare: [
      "Llevar el teléfono en la mano por la calle o dejarlo sobre la toalla en la playa",
      "Caminar de noche por zonas desiertas en lugar de usar una app",
      "Subir al Cristo a mediodía, cuando a menudo está entre las nubes y abarrotado",
    ],
    miaEsperienza:
      "Brasil lo empecé aquí: cuatro días en Río, entre el Cristo Redentor, Santa Teresa y la Escadaria Selarón, el Pan de Azúcar, Copacabana e Ipanema, el atardecer desde la Pedra do Arpoador y las noches de samba en Lapa. Al Cristo Redentor lo vi también desde arriba, sobrevolándolo en helicóptero. En Río mi contacto es Sylvain.",
    luoghi: [
      {
        "nome": "Cristo Redentor",
        "testo": "La estatua de 30 metros (38 con el pedestal) sobre el Corcovado, a unos 700 metros sobre la ciudad. Desde arriba se entiende la forma de Río: las playas, la laguna Rodrigo de Freitas y el Pan de Azúcar a la entrada de la bahía.",
        "come": "Con el tren de cremallera desde Cosme Velho o con las vans oficiales desde Paineiras. La entrada se compra en línea eligiendo día y hora.",
        "quando": "Primer viaje de la mañana, antes de las nubes y la multitud. A mediodía la estatua suele estar entre nubes.",
        "tempo": "3-4 horas entre subida, visita y bajada",
        "costo": "Tren desde Cosme Velho 139 R$, unos 24 €, para adultos de cualquier nacionalidad, 112 R$ para niños de 7-11 años; vans oficiales desde Paineiras unos 87 R$, unos 15 € (2026)",
        "lat": -22.95194,
        "lng": -43.21056,
        "url": "https://www.tremdocorcovado.rio/",
        "consiglio": "Ve por la mañana y lleva una chaqueta ligera: arriba hace viento."
      },
      {
        "nome": "Pão de Açúcar",
        "testo": "El monolito de granito a la entrada de la bahía de Guanabara. El teleférico sube en dos tramos, primero al Morro da Urca y luego a la cima, con vista de 360 grados.",
        "come": "Teleférico desde la estación de Praia Vermelha, en el barrio de Urca. Quien camina puede subir a pie hasta Urca por un sendero corto y tomar el teleférico solo para el segundo tramo.",
        "quando": "Última hora de la tarde, para el atardecer sobre la bahía y la ciudad que se enciende.",
        "tempo": "2-3 horas",
        "costo": "205 R$ la entrada completa, unos 35 €; la tarifa reducida es solo para brasileños (2026)",
        "orari": "De lunes a viernes 8:30-21:00, sábados y domingos 7:30-21:00; último embarque a las 19:30",
        "lat": -22.9494,
        "lng": -43.1567,
        "url": "https://www.bondinho.com.br/",
        "consiglio": "Llega una hora antes del atardecer para no hacer cola."
      },
      {
        "nome": "Copacabana, Ipanema y el Arpoador",
        "testo": "Las dos playas urbanas más famosas de Río, divididas en «postos», las torres de los salvavidas que marcan también la tribu de cada tramo. Entre ambas está la Pedra do Arpoador, donde la gente aplaude el atardecer.",
        "come": "En metro (Cardeal Arcoverde, Siqueira Campos y Cantagalo para Copacabana, General Osório para Ipanema) o a pie por el paseo marítimo.",
        "quando": "Mañana para la playa; atardecer en el Arpoador.",
        "tempo": "Medio día",
        "costo": "Gratis; sillas y sombrillas se alquilan en las barracas",
        "lat": -22.99056,
        "lng": -43.19167,
        "consiglio": "En la toalla lleva solo lo que estés dispuesto a perder: no dejes teléfono ni cartera sin vigilancia."
      },
      {
        "nome": "Santa Teresa y la Escadaria Selarón",
        "testo": "El barrio de la colina con villas históricas, talleres y el tranvía amarillo (bondinho). La Escadaria Selarón, escalinata cubierta de azulejos de colores, baja hacia Lapa.",
        "come": "En app o taxi hasta Santa Teresa, luego a pie; la escalinata se baja hacia Lapa.",
        "quando": "De día.",
        "tempo": "2-3 horas",
        "costo": "Escalinata gratis",
        "lat": -22.91541,
        "lng": -43.17941,
        "consiglio": "Se va de día y se regresa en app."
      },
      {
        "nome": "Centro histórico y Museu do Amanhã",
        "testo": "El centro tiene la Confeitaria Colombo, el Theatro Municipal, la catedral en forma de cono y la biblioteca del Real Gabinete Português de Leitura. En el puerto, la plaza Mauá con el Museu do Amanhã y el Boulevard Olímpico lleno de murales.",
        "come": "En metro desde Ipanema y Copacabana.",
        "quando": "En días laborables, de día: el fin de semana el centro se vacía.",
        "tempo": "Medio día",
        "orari": "Museu do Amanhã de jueves a martes 10:00-18:00, última entrada a las 17:00; cerrado los miércoles",
        "lat": -22.89413,
        "lng": -43.1794,
        "url": "https://museudoamanha.org.br/",
        "consiglio": "El centro se recorre de día: por la noche y el fin de semana se vacía."
      },
      {
        "nome": "Lapa y el samba",
        "testo": "El barrio bajo los arcos del acueducto, con locales de samba en vivo y calles llenas el viernes y el sábado.",
        "come": "En app, ida y vuelta, evitando caminar de noche.",
        "quando": "Viernes y sábado por la noche.",
        "tempo": "Una velada",
        "lat": -22.91259,
        "lng": -43.17985,
        "consiglio": "Con solo el teléfono y el efectivo para la noche. Cuidado con los tirones en la multitud a última hora."
      },
      {
        "nome": "Jardín Botánico",
        "testo": "El jardín botánico fundado en 1808 por el príncipe regente Juan de Portugal, a los pies del Corcovado. La avenida de palmeras imperiales, los invernaderos de orquídeas y bromelias y los monos y tucanes entre los árboles lo convierten en la mejor pausa verde de la ciudad.",
        "come": "En taxi o app desde Ipanema y Leblon, 10-15 minutos; entradas también online en jbrj.eleventickets.com.",
        "quando": "Temprano por la mañana, con el fresco y los animales más activos.",
        "tempo": "2-3 horas",
        "costo": "80 R$ para extranjeros, unos 14 € (2026)",
        "orari": "Arboreto de jueves a martes 8:00-17:00, los miércoles 11:00-17:00; cerrado el 25 de diciembre y el 1 de enero",
        "lat": -22.9675,
        "lng": -43.22389,
        "url": "https://www.gov.br/jbrj/pt-br/assuntos/visitacao/horarios-e-ingressos"
      },
      {
        "nome": "Parque Lage",
        "testo": "Una mansión de los años veinte con el patio y la piscina en el centro, dentro de un parque de bosque atlántico bajo el Corcovado. Hoy alberga una escuela de arte y un café, y desde el patio se ve el Cristo sobre la vegetación.",
        "come": "A pie desde el Jardín Botánico, 10 minutos por la Rua Jardim Botânico.",
        "quando": "Por la mañana, junto con el Jardín Botánico.",
        "tempo": "1 hora",
        "lat": -22.96055,
        "lng": -43.21204
      },
      {
        "nome": "Real Gabinete Português de Leitura",
        "testo": "La biblioteca de la comunidad portuguesa, terminada en 1887 en estilo neomanuelino: tres pisos de estanterías de madera bajo un lucernario, con más de 350.000 volúmenes. Es una de las salas de lectura más fotografiadas del mundo.",
        "come": "En el centro, a pie desde el Largo da Carioca o la estación de metro Carioca.",
        "quando": "Entre semana.",
        "tempo": "30 minutos",
        "orari": "De lunes a viernes 10:00-17:00",
        "lat": -22.90544,
        "lng": -43.18219,
        "url": "https://www.realgabinete.com.br/",
        "consiglio": "Se entra en silencio: es una biblioteca en uso, no solo un monumento."
      },
      {
        "nome": "Museu de Arte do Rio (MAR)",
        "testo": "El museo de arte de la Praça Mauá, junto al Museu do Amanhã, en dos edificios unidos por una cubierta ondulada. Las exposiciones cuentan Río y Brasil, y desde la terraza se ve la bahía.",
        "come": "A pie desde el Museu do Amanhã; metro hasta Uruguaiana y luego el VLT.",
        "quando": "Los martes, cuando la entrada es gratis.",
        "tempo": "1-2 horas",
        "costo": "20 R$, unos 3,5 €; gratis los martes (2026)",
        "orari": "Exposiciones 11:00-18:00, última entrada a las 17:00; cerrado los miércoles",
        "lat": -22.89657,
        "lng": -43.18199,
        "url": "https://museudeartedorio.org.br/"
      },
      {
        "nome": "Monasterio de São Bento",
        "testo": "El monasterio benedictino en una colina del centro, iniciado en el siglo XVII. La fachada es sencilla, el interior es todo madera tallada y dorada, uno de los grandes ejemplos del barroco brasileño.",
        "come": "A pie desde la Praça Mauá; se sube en ascensor desde la Rua Dom Gerardo.",
        "quando": "El domingo por la mañana para la misa con el canto gregoriano de los monjes, o entre semana.",
        "tempo": "30-45 minutos",
        "lat": -22.89703,
        "lng": -43.17805,
        "consiglio": "Hombros y piernas cubiertos: es una iglesia en uso."
      },
      {
        "nome": "Lagoa Rodrigo de Freitas",
        "testo": "La laguna detrás de Ipanema y Leblon, rodeada por un carril bici y peatonal de unos 7 km, con quioscos sobre el agua y el Corcovado encima. Es el paseo en bici más sencillo de la ciudad.",
        "come": "A pie desde Ipanema; alquiler de bicis en la orilla.",
        "quando": "Final de la tarde y atardecer.",
        "tempo": "1-2 horas",
        "costo": "Gratis",
        "lat": -22.97112,
        "lng": -43.21172
      },
      {
        "nome": "Vista Chinesa",
        "testo": "Un mirador con forma de pagoda en el Parque Nacional de la Tijuca, el bosque dentro de la ciudad. Desde aquí se ven la laguna, Ipanema, el Pan de Azúcar y el Cristo.",
        "come": "Solo en coche, taxi por app o tour; la carretera sube por el bosque desde el Jardín Botánico.",
        "quando": "Por la mañana, con el cielo despejado.",
        "tempo": "1 hora con la carretera",
        "costo": "Gratis",
        "lat": -22.97316,
        "lng": -43.24976,
        "consiglio": "No subir a pie por las carreteras del bosque: mejor un tour o un coche con conductor."
      },
      {
        "nome": "Maracanã",
        "testo": "El estadio inaugurado para el Mundial de 1950, el templo del fútbol brasileño. Se visita con un tour por los vestuarios y el campo, o se va a un partido del Flamengo o del Fluminense.",
        "come": "Metro hasta la estación Maracanã.",
        "quando": "Una noche de partido, o de día para el tour.",
        "tempo": "1-2 horas el tour, una noche el partido",
        "lat": -22.9122,
        "lng": -43.2303,
        "consiglio": "A los partidos se va y se vuelve en metro o por app, sin objetos de valor."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Cristo Redentor con la primera salida",
          "Comida en Santa Teresa o en el centro",
          "Tarde: Pan de Azúcar",
          "Noche: atardecer y cena en Ipanema"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: el plan de 1 día",
          "Día 2: mañana en la playa de Ipanema y Copacabana, tarde en el centro con el Real Gabinete y el Museu do Amanhã, noche en Lapa"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: Jardín Botánico y Parque Lage por la mañana, vuelta a la Lagoa en bici",
          "Tarde: Santa Teresa y la Escadaria Selarón",
          "Atardecer en el Arpoador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ipanema y Leblon",
        "perChi": "Quien quiere seguridad y restaurantes",
        "testo": "La zona más cuidada, con el mar y el metro cerca.",
        "fascia": "90-250 €"
      },
      {
        "nome": "Copacabana",
        "perChi": "Quien busca el ambiente clásico y precios más bajos",
        "testo": "El paseo marítimo siempre está vivo, pero algunas calles interiores son menos seguras de noche.",
        "fascia": "50-180 €"
      },
      {
        "nome": "Santa Teresa",
        "perChi": "Quien busca ambiente artístico",
        "testo": "Pousadas en villas históricas, pero en la colina y con calles empinadas. De noche mejor moverse en app.",
        "fascia": "60-150 €"
      }
    ],
    sapori: [
      {
        "nome": "Feijoada",
        "testo": "Guiso de frijoles negros con carnes de cerdo, servido con arroz, couve y farofa. Tradicional los sábados."
      },
      {
        "nome": "Churrascarias a rodízio",
        "testo": "Carne a la parrilla servida en la mesa a voluntad."
      },
      {
        "nome": "Pastel y caldo de cana",
        "testo": "Empanada frita y jugo de caña de azúcar, típicos de los mercados."
      },
      {
        "nome": "Locales por peso",
        "testo": "Buffet pagado por kilo, el almuerzo diario de los cariocas."
      },
      {
        "nome": "Caipirinha",
        "testo": "Cachaça, lima y azúcar, en todas partes."
      }
    ],
    attenzioni: [
      "Robos de teléfonos en la playa y en la calle, atracos en zonas desiertas por la noche: nada de joyas ni teléfono en la mano. No te quedes en las playas urbanas después del anochecer.",
      "Poco efectivo, pero una pequeña suma para entregar en caso de asalto, sin oponer resistencia.",
      "Con Uber y 99 usa la app oficial y comprueba matrícula y nombre del conductor: los avisos oficiales alertan de falsos conductores, también en el aeropuerto.",
      "Los avisos oficiales (por ejemplo los del gobierno británico) desaconsejan visitar las favelas, también con tours guiados.",
      "Dengue extendido en las ciudades: repelente y mangas largas al atardecer."
    ],
    gite: [
      {
        "nome": "Niterói y el MAC",
        "distanza": "20 minutos en barco",
        "come": "Barco desde la estación de Praça XV, en el centro, y luego a pie o por app hasta el museo.",
        "testo": "Al otro lado de la bahía está el Museo de Arte Contemporáneo de Oscar Niemeyer, el disco blanco suspendido sobre el acantilado, con la mejor vista de Río y el Pan de Azúcar."
      },
      {
        "nome": "Petrópolis",
        "distanza": "unos 70 km, 1,5 horas",
        "come": "Bus desde la rodoviária Novo Rio o coche con conductor.",
        "testo": "La ciudad imperial en las montañas, donde la corte pasaba el verano: el Museo Imperial en el palacio de Pedro II, la catedral y el fresco de la Serra dos Órgãos."
      },
      {
        "nome": "Ilha Grande",
        "distanza": "unos 150 km, 2,5-3 horas más el barco",
        "come": "Van y barco combinados desde la Zona Sul, o bus hasta Conceição de Jacareí y barco; mejor con una noche.",
        "testo": "Una isla sin coches cubierta de bosque atlántico, con senderos entre playas como Lopes Mendes. Forma parte del sitio UNESCO de la Costa Verde junto con Paraty."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Río de Janeiro?",
        "risposta": "Tres o cuatro días: uno para el Cristo y Santa Teresa, uno para el Pan de Azúcar y las playas, uno para el centro y Lapa, más un margen por el tiempo."
      },
      {
        "domanda": "¿Dónde dormir en Río?",
        "risposta": "Ipanema y Leblon son las zonas más cuidadas y seguras, Copacabana es más barata y su paseo marítimo siempre está vivo, Santa Teresa tiene más ambiente pero está en la colina. Conviene estar cerca de una parada de metro."
      },
      {
        "domanda": "Cristo Redentor: ¿tren o van?",
        "risposta": "El tren de cremallera desde Cosme Velho (139 R$) atraviesa el bosque de la Tijuca; las vans oficiales desde Paineiras cuestan menos (unos 87 R$). Los dos se reservan online con día y hora."
      },
      {
        "domanda": "¿A qué hora subir al Pan de Azúcar?",
        "risposta": "Una hora antes del atardecer, para ver la bahía con luz y la ciudad que se enciende. El último embarque es a las 19:30."
      },
      {
        "domanda": "¿Es Río seguro para los turistas?",
        "risposta": "El riesgo principal son los hurtos y tirones: móvil en el bolsillo, nada de joyas, poco efectivo y app en lugar de caminar de noche. Los avisos oficiales desaconsejan las favelas, también con tours."
      },
      {
        "domanda": "¿Cuál es la mejor época para Río?",
        "risposta": "De mayo a octubre, con el invierno suave y seco. De diciembre a marzo hace calor y llueve a menudo por la tarde; el Carnaval llena la ciudad y sube los precios."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: "El Cristo Redentor en el Corcovado sobre la bahía de Río de Janeiro, con el Pan de Azúcar",
    immagine: '/images/viaggi/brasile-itinerario/giorno-02-rio-de-janeiro.jpg',
  },
  {
    slug: 'costa-verde',
    paeseSlug: 'brasile',
    ordine: 2,
    nome: "Paraty e Ilha Grande",
    tipologia: ['mare', 'città coloniale', 'isole', 'foresta'],
    giorniConsigliati: "4 días",
    visitataPersonalmente: true,
    introduzione:
      "La Costa Verde entre Río y São Paulo incluye la ciudad colonial de Paraty, puerto del oro en el siglo XVIII, e Ilha Grande, una isla sin coches cubierta de selva atlántica. Desde 2019 son Patrimonio de la UNESCO junto con la Serra da Bocaina.",
    percheAndarci: "Por la bahía de Paraty en barca, las cascadas del interior y playas como Lopes Mendes.",
    cosaVedere: [
      "El centro histórico de Paraty",
      "Las islas de la bahía de Paraty",
      "Trindade y la piscina natural del Cachadaço",
      "Lopes Mendes, Lagoa Azul y Lagoa Verde en Ilha Grande",
    ],
    cosaFare: [
      "Un paseo en escuna por la bahía",
      "Las cascadas y los alambiques de cachaça de la carretera de Cunha",
      "Los senderos por la selva de Ilha Grande",
    ],
    doveDormire: "Pousadas en el centro de Paraty (300-700 R$) y en Vila do Abraão (250-600 R$).",
    comeArrivare: "De Río a Paraty, el bus desde la rodoviária Novo Rio tarda unas 4 horas y media; los fines de semana los billetes se compran unos días antes. En coche se hace el mismo camino por la BR-101, la Rio-Santos. Para Ilha Grande se toma una van hasta Angra dos Reis o Conceição de Jacareí y luego la barca a Vila do Abraão: desde Paraty unas 3 horas en total, desde Río 3-4 horas. El traslado combinado van más barca se reserva el día antes en el pueblo o en línea.",
    comeSpostarsi: "A pie y en barca; en Ilha Grande no hay coches.",
    periodoMigliore: "abril-noviembre para tener menos lluvia y menos gente; diciembre-febrero lleno y caro.",
    erroriDaEvitare: [
      "No llevar agua y comida a Lopes Mendes, donde no hay servicios",
      "Dejar el equipaje grande sin haber reservado el traslado al aeropuerto el día anterior",
    ],
    miaEsperienza:
      "Después de Río, cuatro días en la Costa Verde: dos en Paraty, con la vuelta a la bahía en barco y las cascadas de la carretera de Cunha, y dos en Ilha Grande, con base en Abraão y el día en Lopes Mendes.",
    luoghi: [
      {
        "nome": "Centro histórico de Paraty",
        "testo": "Ciudad colonial, antiguo puerto del oro de Minas Gerais, patrimonio de la UNESCO desde 2019. El centro está cerrado a los coches, con casas blancas de puertas de colores y calles de adoquines que con la marea alta a veces se inundan.",
        "come": "Buses directos desde la rodoviária Novo Rio.",
        "quando": "La noche es tranquila, con restaurantes y música en vivo.",
        "tempo": "Medio día o una noche",
        "lat": -23.21907,
        "lng": -44.71335,
        "consiglio": "Con la marea alta algunas calles se inundan: calzado adecuado."
      },
      {
        "nome": "La bahía de Paraty en escuna",
        "testo": "La bahía tiene decenas de islas y playas a las que solo se llega por mar. Las escunas hacen un paseo de unas horas con paradas para bañarse.",
        "come": "Embarque en el puerto de Paraty. Las lanchas privadas cuestan más pero eligen dónde parar.",
        "quando": "Mañana.",
        "tempo": "4-5 horas",
        "costo": "Escuna unos 100-150 R$ por persona por 4-5 horas con paradas (unos 17-25 €), almuerzo aparte",
        "lat": -23.21986,
        "lng": -44.71203,
        "consiglio": "Si quieres evitar la multitud, elige una lancha."
      },
      {
        "nome": "Vila do Abraão (Ilha Grande)",
        "testo": "El pueblo principal de la isla sin coches, con pousadas, restaurantes y vida nocturna. De aquí salen senderos hacia el Aqueduto y la Cachoeira da Feiticeira.",
        "come": "Desde Paraty en van y barco, por Angra dos Reis o Conceição de Jacareí.",
        "quando": "Tarde de llegada para un primer sendero corto.",
        "tempo": "Una o dos noches",
        "lat": -23.14026,
        "lng": -44.16841,
        "consiglio": "Reserva el día anterior el traslado al aeropuerto de Río."
      },
      {
        "nome": "Lopes Mendes, Lagoa Azul y Lagoa Verde",
        "testo": "Lopes Mendes es una larga franja de arena blanca, con mar abierto y selva detrás. La Lagoa Azul y la Lagoa Verde se visitan en barco para hacer snorkel.",
        "come": "Barca desde Abraão hasta Pouso, luego unos 20 minutos a pie; el sendero completo desde Abraão requiere unas tres horas.",
        "quando": "Mañana. El baño debe hacerse con prudencia por olas y corrientes.",
        "tempo": "Día completo",
        "lat": -23.16866,
        "lng": -44.13235,
        "consiglio": "Lleva agua y comida desde Vila do Abraão."
      },
      {
        "nome": "Trindade",
        "testo": "Pueblo con playas salvajes y la piscina natural del Cachadaço.",
        "come": "Unos 30 minutos al sur de Paraty, en buses locales o taxi.",
        "quando": "Día completo, si tienes un día extra.",
        "tempo": "Un día",
        "lat": -23.35073,
        "lng": -44.72569,
        "consiglio": "Añádela si tienes un día extra."
      },
      {
        "nome": "Praia do Sono",
        "testo": "Una bahía de arena clara con una comunidad de pescadores y sin carreteras, al sur de Trindade. Desde aquí otro sendero lleva a Antigos y Ponta Negra.",
        "come": "Bus o taxi hasta el condominio de Laranjeiras, luego cerca de una hora a pie por la selva, o en barca.",
        "quando": "Por la mañana, para tener tiempo de volver antes de que oscurezca.",
        "tempo": "Jornada completa",
        "lat": -23.33422,
        "lng": -44.63261,
        "consiglio": "Agua y efectivo: en la playa solo hay unos pocos quioscos."
      },
      {
        "nome": "Saco do Mamanguá",
        "testo": "Una ensenada larga y estrecha, parecida a un fiordo tropical, cerrada por colinas cubiertas de selva y con manglares al fondo. Las comunidades caiçaras viven solo del barco y de la pesca.",
        "come": "Barca desde Paraty o desde Paraty-Mirim; desde el fondo del saco sale el sendero al Pão de Açúcar del Mamanguá.",
        "quando": "Por la mañana, con el mar en calma.",
        "tempo": "Jornada completa",
        "lat": -23.26584,
        "lng": -44.62993,
        "consiglio": "La subida al Pão de Açúcar del Mamanguá dura cerca de una hora y ofrece la vista de toda la ensenada."
      },
      {
        "nome": "Cascadas de Cunha y alambiques",
        "testo": "En el camino de Cunha hay cascadas y alambiques de cachaça.",
        "come": "En taxi o con un tour desde el centro de Paraty.",
        "quando": "Tarde, después del paseo en barca.",
        "tempo": "Medio día",
        "lat": -23.21255,
        "lng": -44.79232,
        "consiglio": "Lleva calzado que pueda mojarse."
      },
      {
        "nome": "Cachoeira da Feiticeira",
        "testo": "Una cascada de unos 15 metros en la selva de la isla, con una poza donde bañarse. El sendero pasa cerca del acueducto del siglo XIX del antiguo lazareto.",
        "come": "Sendero fácil desde Vila do Abraão, cerca de una hora a pie.",
        "quando": "La tarde de llegada o por la mañana.",
        "tempo": "2-3 horas ida y vuelta",
        "lat": -23.12819,
        "lng": -44.18886,
        "consiglio": "Repelente: en la selva y por la noche en Abraão no faltan los mosquitos."
      },
      {
        "nome": "Pico do Papagaio (Ilha Grande)",
        "testo": "La cumbre con forma de pico de loro que domina Ilha Grande, a unos 980 metros. El sendero sube por la Mata Atlántica y llega a una roca desde la que se ven la bahía y el continente.",
        "come": "Sendero desde Vila do Abraão, empinado; mejor con un guía local.",
        "quando": "Salida muy temprano o de noche para el amanecer, solo con buen tiempo.",
        "tempo": "5-6 horas ida y vuelta",
        "lat": -23.15506,
        "lng": -44.19681,
        "consiglio": "Con nubes bajas desde la cumbre no se ve nada: decide esa misma mañana."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: llegada a Paraty, centro histórico y cena con música en directo",
          "Día 2: bahía en escuna por la mañana, cascadas y alambiques por la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Paraty, centro histórico",
          "Día 2: bahía en escuna o Saco do Mamanguá",
          "Día 3: Trindade y Cachadaço, o bien sendero a la Praia do Sono"
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Días 1-3 como en el programa de 3 días",
          "Día 4: van y barca a Ilha Grande, Cachoeira da Feiticeira por la tarde",
          "Día 5: Lopes Mendes, o bien Lagoa Azul y Lagoa Verde en barca; al día siguiente, regreso a Río"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro histórico de Paraty",
        "perChi": "Quien busca ambiente colonial",
        "testo": "Pousadas en casas coloniales. Calles empedradas, ruido nocturno de los locales.",
        "fascia": "60-200 €"
      },
      {
        "nome": "Vila do Abraão",
        "perChi": "Quien visita Ilha Grande",
        "testo": "Pousadas, vida nocturna y salidas de los barcos. Isla sin coches.",
        "fascia": "40-150 €"
      },
      {
        "nome": "Jabaquara y fuera del centro (Paraty)",
        "perChi": "Quien viaja en coche y quiere gastar menos",
        "testo": "Pousadas con aparcamiento y jardín a 10-20 minutos a pie del centro histórico, más silenciosas de noche.",
        "fascia": "40-110 €"
      },
      {
        "nome": "Trindade",
        "perChi": "Quien quiere mar y ambiente de pueblo",
        "testo": "Pousadas sencillas y campings cerca de las playas, con poca vida nocturna. Hace falta el bus para volver a Paraty.",
        "fascia": "35-100 €"
      }
    ],
    sapori: [
      {
        "nome": "Cachaça artesanal",
        "testo": "Producida en el lugar en Paraty y en los alambiques cercanos."
      },
      {
        "nome": "Pescado y mariscos",
        "testo": "A la parrilla o en moqueca en los restaurantes frente al mar."
      },
      {
        "nome": "Banana-da-terra",
        "testo": "Plátano frito, servido como guarnición en toda la costa."
      }
    ],
    attenzioni: [
      "Para Lopes Mendes, lleva agua y comida desde Vila do Abraão.",
      "Mar abierto con olas y corrientes: baño con prudencia.",
      "Reserva el traslado al aeropuerto el día anterior.",
      "Calles de adoquines con la marea alta: posibles inundaciones."
    ],
    costi: "Presupuesto bajo unos 40-60 € al día (pousada sencilla o albergue, locales por peso, bus); medio 90-140 € (pousada en el centro histórico de Paraty o en Abraão, escuna, traslados); alto desde 220 € (pousada con encanto, lancha privada). Escuna por la bahía de Paraty unos 100-150 R$ por persona por 4-5 horas, almuerzo aparte; lancha privada más cara, a negociar en el muelle. En la isla conviene llevar efectivo para barcas y almuerzos.",
    gite: [
      {
        "nome": "Paraty-Mirim",
        "distanza": "unos 30 minutos, 17 km desde Paraty",
        "come": "Bus local o taxi, último tramo por camino de tierra.",
        "testo": "Una pequeña playa con una iglesita colonial en la orilla y las barcas hacia el Saco do Mamanguá."
      },
      {
        "nome": "Cunha",
        "distanza": "cerca de 1 hora, 47 km",
        "come": "Coche por la carretera de la Serra, asfaltada.",
        "testo": "Un pueblo de montaña famoso por los talleres de cerámica en horno de leña y los campos de lavanda, con el clima fresco de la sierra."
      },
      {
        "nome": "Angra dos Reis y las islas",
        "distanza": "unas 1 h 30 desde Paraty, 100 km",
        "come": "Bus por la BR-101 o traslado.",
        "testo": "El puerto hacia Ilha Grande y hacia los paseos en barco entre las islas de la bahía de Angra, entre las más bonitas del litoral."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en la Costa Verde?",
        "risposta": "Al menos cinco: tres en Paraty con la bahía y Trindade, dos en Ilha Grande. Con menos días conviene elegir uno de los dos destinos."
      },
      {
        "domanda": "¿Paraty o Ilha Grande?",
        "risposta": "Paraty por el centro colonial, la bahía en barco y las cascadas; Ilha Grande por las playas y los senderos sin coches. Están a unas 3 horas una de otra entre van y barca."
      },
      {
        "domanda": "¿Cómo se llega a Ilha Grande desde Río?",
        "risposta": "Van hasta Angra dos Reis o Conceição de Jacareí y luego barca a Vila do Abraão, unas 3-4 horas en total. El traslado combinado se reserva el día antes."
      },
      {
        "domanda": "¿Cuánto cuesta el paseo en escuna en Paraty?",
        "risposta": "Unos 100-150 R$ por persona por 4-5 horas con paradas para bañarse, almuerzo aparte. Una lancha privada cuesta más, pero elige las playas."
      },
      {
        "domanda": "¿Hay coches en Ilha Grande?",
        "risposta": "No, en la isla uno se mueve solo a pie o en barca. A Lopes Mendes se va en barca hasta Pouso y luego a pie."
      },
      {
        "domanda": "¿Cuándo ir a la Costa Verde?",
        "risposta": "De marzo a mayo y de septiembre a noviembre el clima es bueno y hay menos gente. En verano, de diciembre a febrero, hace calor, llueve a menudo por la tarde y los precios suben."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: "Las casas coloniales blancas de puertas de colores en el centro histórico de Paraty",
    immagine: '/images/viaggi/brasile-itinerario/giorno-05-costa-verde.jpg',
  },
  {
    slug: 'foz-do-iguacu',
    paeseSlug: 'brasile',
    ordine: 3,
    nome: "Cataratas de Iguazú (Foz do Iguaçu)",
    tipologia: ['cascate', 'parco nazionale', 'natura'],
    giorniConsigliati: "2 días",
    visitataPersonalmente: true,
    introduzione:
      "Unos 275 saltos a lo largo de casi tres kilómetros en la frontera entre Brasil y Argentina, dentro de dos parques nacionales Patrimonio de la UNESCO. El lado brasileño ofrece la vista de conjunto, el argentino las pasarelas sobre la Garganta del Diablo.",
    percheAndarci: "Por uno de los sistemas de cataratas más grandes del mundo, para ver desde dos países.",
    cosaVedere: [
      "El sendero y la pasarela de la Garganta do Diabo en el lado brasileño",
      "Los circuitos Superior, Inferior y la Garganta del Diablo en el lado argentino",
      "El Parque das Aves",
    ],
    cosaFare: ["El paseo en lancha neumática bajo los saltos", "El tren de la selva en el lado argentino"],
    doveDormire: "Foz do Iguaçu, gama media 300-600 R$; el único hotel dentro del parque brasileño es de gama alta.",
    comeArrivare: "El aeropuerto de Foz do Iguaçu (IGU) recibe vuelos desde São Paulo, Río y las demás grandes ciudades, casi siempre con escala si se llega desde Río. Está en la carretera al parque: a la ciudad hay 20-30 minutos en taxi o aplicación, a la entrada de las cataratas unos 10 minutos; el bus urbano 120 une centro, aeropuerto y parque. En el lado argentino está el aeropuerto de Puerto Iguazú (IGR), con vuelos desde Buenos Aires. La frontera entre las dos ciudades se cruza en taxi, bus o traslado, con el pasaporte.",
    comeSpostarsi: "Autobuses urbanos y taxis hacia el parque brasileño; taxi o traslado para pasar la frontera.",
    periodoMigliore: "todo el año; más agua entre diciembre y marzo, menos calor entre abril y septiembre.",
    costi: "Presupuesto bajo unos 40-60 € al día (albergue o pousada, bus 120, locales por peso); medio 90-140 € (hotel en Foz, cataratas por los dos lados, Parque das Aves); alto desde 250 € (hotel dentro del parque, Macuco Safari, vuelos en helicóptero). Parque brasileño 134 R$ para extranjeros (desde el 19 de diciembre de 2025); parque argentino 60.000 pesos para extranjeros no residentes (unos 40 dólares, desde el 1 de junio de 2026); Parque das Aves 110 R$; Itaipu Panorâmica 63 R$; lancha neumática 450-550 R$.",
    erroriDaEvitare: [
      "Ver un solo lado",
      "Olvidar el pasaporte para la frontera argentina",
      "Llegar tarde a la Garganta del Diablo, que se llena a media mañana",
    ],
    miaEsperienza:
      "Llegué por la noche, en vuelo desde Río después de Ilha Grande, y a las cataratas les dediqué dos días: el primero en el lado brasileño con el Parque das Aves, el segundo en el lado argentino hasta la Garganta del Diablo.",
    luoghi: [
      {
        "nome": "Lado brasileño de las cataratas",
        "testo": "Da la vista de conjunto: un sendero a lo largo del cañón lleva a la pasarela que entra bajo la Garganta do Diabo, donde uno se moja por completo.",
        "come": "Buses urbanos o taxi desde Foz do Iguaçu; se entra por el centro de visitantes y se sube con el bus del parque.",
        "quando": "Abierto todos los días: 9-16 de lunes a viernes, 8.30-16 sábados y domingos. Llega a la hora de apertura.",
        "tempo": "2-3 horas",
        "costo": "134 R$ para extranjeros, 121 R$ para brasileños y residentes del Mercosur (tarifas vigentes desde el 19 de diciembre de 2025, actualizadas cada año). Solo en línea, con día y hora",
        "orari": "Todos los días: 9-16 de lunes a viernes, 8.30-16 sábados y domingos",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "lat": -25.69005,
        "lng": -54.43823,
        "consiglio": "Capa de lluvia o bolsa impermeable para teléfono y documentos."
      },
      {
        "nome": "Lado argentino de las cataratas",
        "testo": "Se camina dentro de las cataratas: tres circuitos de pasarelas (Superior, Inferior y la Garganta del Diablo, a la que se llega con un tren en el bosque) llegan sobre el salto más grande, envuelto en niebla de agua.",
        "come": "La frontera se pasa en taxi, en bus o con un traslado, mostrando el pasaporte y haciendo los sellos de salida y entrada.",
        "quando": "Llega a la apertura: la pasarela de la Garganta se llena rápido.",
        "tempo": "Día completo",
        "costo": "60.000 pesos para extranjeros no residentes (unos 40 dólares, desde el 1 de junio de 2026)",
        "url": "https://www.iguazuargentina.com/",
        "lat": -25.68382,
        "lng": -54.44878,
        "consiglio": "Lleva el pasaporte y pesos o tarjeta."
      },
      {
        "nome": "Macuco Safari",
        "testo": "El paseo en lancha neumática hasta debajo de los saltos.",
        "come": "Se puede reservar en el lugar o con antelación; sale del lado brasileño.",
        "quando": "Mañana o tarde.",
        "tempo": "1-2 horas",
        "costo": "Unos 450-550 R$ (unos 75-90 €), aparte de la entrada al parque",
        "lat": -25.65139,
        "lng": -54.43794,
        "consiglio": "Te mojas por completo: ropa de repuesto y funda para el teléfono."
      },
      {
        "nome": "Parque das Aves",
        "testo": "Un parque con tucanes, guacamayos y aves de la Mata Atlántica en grandes pajareras, frente a la entrada de las cataratas brasileñas.",
        "come": "Justo frente a la entrada del lado brasileño.",
        "quando": "Después de las cataratas, por la tarde.",
        "tempo": "1-2 horas",
        "costo": "110 R$ la entrada entera (unos 18 €), igual para brasileños y extranjeros, tarifa válida hasta el 30 de noviembre de 2026",
        "orari": "Todos los días 8.30-16.30",
        "url": "https://www.parquedasaves.com.br/",
        "lat": -25.61509,
        "lng": -54.48413,
        "consiglio": "Combina bien con la mañana en las cataratas."
      },
      {
        "nome": "Represa de Itaipú",
        "testo": "Una de las centrales hidroeléctricas más grandes del mundo, compartida entre Brasil y Paraguay sobre el río Paraná. La visita panorámica en bus pasa por la represa y por el vertedero; la especial entra también en la sala de máquinas.",
        "come": "Unos 20 minutos en taxi o aplicación desde el centro de Foz; buses urbanos desde el terminal.",
        "quando": "Por la mañana o a primera hora de la tarde; los viernes y sábados por la noche se ilumina la represa.",
        "tempo": "1h10 la panorámica, 2h30 la especial",
        "costo": "Itaipu Panorâmica 63 R$ (unos 10 €), Itaipu Especial 185 R$ (unos 30 €), Itaipu Iluminada 50 R$ (2026)",
        "orari": "Panorâmica todos los días 8.30-17; Iluminada viernes y sábados a las 19",
        "url": "https://www.turismoitaipu.com.br/",
        "lat": -25.42462,
        "lng": -54.56703,
        "consiglio": "La visita especial tiene plazas limitadas y una edad mínima: se reserva antes en línea."
      },
      {
        "nome": "Trilha do Poço Preto",
        "testo": "Un sendero de 9 km por la Mata Atlántica dentro del parque brasileño, a pie o en bici, que llega al río Iguazú por encima de las cataratas. Se ven mariposas, tucanes y, con suerte, coatíes.",
        "come": "Se reserva junto con la entrada al parque; el punto de partida está en la carretera interna del parque.",
        "quando": "A pie de 9 a 12, en bici de 9 a 15.",
        "tempo": "Medio día (19,2 km ida y vuelta)",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "lat": -25.63014,
        "lng": -54.46232,
        "consiglio": "Solo se combina con las cataratas el mismo día si se sale a la hora de apertura."
      },
      {
        "nome": "Marco das Três Fronteiras",
        "testo": "El punto donde el río Iguazú desemboca en el Paraná y se ven Brasil, Argentina y Paraguay. El espacio tiene un mirador, restaurantes y un espectáculo nocturno con música y luces.",
        "come": "Unos 10 minutos en taxi o aplicación desde el centro de Foz.",
        "quando": "Atardecer, sobre los ríos.",
        "tempo": "1-2 horas",
        "lat": -25.59015,
        "lng": -54.59025,
        "consiglio": "En el lado argentino está el Hito Tres Fronteras, gratuito, con la misma vista al revés."
      },
      {
        "nome": "Templo Budista Chen Tien",
        "testo": "Un templo budista construido por la comunidad china de Foz, con un jardín de más de cien estatuas y un gran Buda blanco mirando hacia Paraguay.",
        "come": "Unos 15 minutos en taxi o aplicación desde el centro.",
        "quando": "Por la tarde, con la luz sobre las estatuas.",
        "tempo": "45 minutos-1 hora",
        "lat": -25.47497,
        "lng": -54.59893,
        "consiglio": "Ropa que cubra hombros y rodillas."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: lado brasileño a la apertura, pasarela de la Garganta do Diabo",
          "Macuco Safari justo después, si se quiere la lancha",
          "Tarde: Parque das Aves, frente a la entrada",
          "Atardecer en el Marco das Três Fronteiras"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: programa de 1 día",
          "Día 2: lado argentino a la apertura, con la Garganta del Diablo primero, luego los circuitos Superior e Inferior"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: Itaipú por la mañana, Templo Budista por la tarde, o bien Trilha do Poço Preto en el parque"
        ]
      }
    ],
    zone: [
      {
        "nome": "Foz do Iguaçu",
        "perChi": "Quien tiene vuelos y quiere comodidad",
        "testo": "Amplia oferta de hoteles, conectada con el aeropuerto. Más cómoda para los vuelos.",
        "fascia": "40-130 €"
      },
      {
        "nome": "Puerto Iguazú (Argentina)",
        "perChi": "Quien quiere estar más cerca del lado argentino",
        "testo": "Ciudad más pequeña, con menos oferta y vuelos menos cómodos.",
        "fascia": "40-150 €"
      },
      {
        "nome": "Hotel dentro del parque brasileño",
        "perChi": "Quien busca la vista desde la habitación",
        "testo": "Hotel de gama alta dentro del parque.",
        "fascia": "350-800 €"
      },
      {
        "nome": "Avenida das Cataratas (Foz)",
        "perChi": "Quien quiere estar cerca del parque brasileño",
        "testo": "La carretera entre la ciudad y el parque, con resorts y hoteles con piscina rodeados de verde. Por la noche hace falta taxi o el bus 120.",
        "fascia": "70-200 €"
      }
    ],
    sapori: [
      {
        "nome": "Pescado de río",
        "testo": "Surubí y otros peces del Paraná, a la parrilla."
      },
      {
        "nome": "Chipa",
        "testo": "Panecillos de queso de tradición paraguaya y argentina, vendidos en la calle."
      },
      {
        "nome": "Churrasco",
        "testo": "Carne a la parrilla en los restaurantes de Foz."
      }
    ],
    attenzioni: [
      "Ver un solo lado: son experiencias distintas.",
      "Olvidar el pasaporte para la frontera argentina.",
      "Llegar tarde a la Garganta del Diablo, que se llena a media mañana.",
      "Fiebre amarilla: vacuna recomendada para quien visita las cataratas del Iguazú."
    ],
    gite: [
      {
        "nome": "Ciudad del Este (Paraguay)",
        "distanza": "unos 20-30 minutos, 10 km",
        "come": "Taxi o bus por el Puente de la Amistad, con el pasaporte.",
        "testo": "La ciudad del comercio a precios bajos, llena de centros comerciales. Útil solo para compras; el puente suele estar congestionado."
      },
      {
        "nome": "Itaipú",
        "distanza": "unos 20 minutos, 15 km",
        "come": "Taxi, aplicación o bus urbano.",
        "testo": "La represa sobre el Paraná, con la visita panorámica, la especial en la sala de máquinas y el espectáculo nocturno de luces los viernes y sábados."
      },
      {
        "nome": "Minas de Wanda (Argentina)",
        "distanza": "a cerca de 1 hora de Puerto Iguazú, 50 km",
        "come": "Coche o tour desde el lado argentino.",
        "testo": "Una mina a cielo abierto de amatistas, ágatas y cuarzos en la selva de Misiones, con una visita guiada breve. Se combina con el regreso desde el lado argentino."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Foz do Iguaçu?",
        "risposta": "Dos días completos: uno para el lado brasileño y el Parque das Aves, otro para el lado argentino. Con un tercero se añaden Itaipú y el Marco das Três Fronteiras."
      },
      {
        "domanda": "¿Mejor el lado brasileño o el argentino de las cataratas?",
        "risposta": "El brasileño da la vista de conjunto en 2-3 horas; el argentino, en una jornada, lleva dentro y por encima de los saltos. Quien puede ve los dos."
      },
      {
        "domanda": "¿Cuánto cuesta la entrada a las cataratas?",
        "risposta": "Lado brasileño 134 R$ para extranjeros (desde el 19 de diciembre de 2025), solo en línea con día y hora. Lado argentino 60.000 pesos para extranjeros no residentes, unos 40 dólares, desde el 1 de junio de 2026."
      },
      {
        "domanda": "¿Hace falta el pasaporte para el lado argentino?",
        "risposta": "Sí: en la frontera se sellan la salida de Brasil y la entrada en Argentina, aunque sea en el día. Los taxis y traslados esperan durante los trámites."
      },
      {
        "domanda": "¿Dormir en Foz do Iguaçu o en Puerto Iguazú?",
        "risposta": "Foz tiene más oferta y vuelos más cómodos; Puerto Iguazú es más pequeña pero está más cerca del lado argentino. Para dos días en los dos lados, cualquiera de las dos sirve."
      },
      {
        "domanda": "¿Cuándo ir a Iguazú?",
        "risposta": "Todo el año. De diciembre a febrero el caudal es mayor, pero hace calor y hay mucha gente; entre abril y junio el clima es más templado."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: "Las pasarelas del lado brasileño frente a las cataratas de Iguazú",
    immagine: '/images/viaggi/brasile-itinerario/giorno-10-foz-do-iguacu.jpg',
  },
  {
    slug: 'salvador-de-bahia',
    paeseSlug: 'brasile',
    ordine: 4,
    nome: "Salvador de Bahía",
    tipologia: ['città coloniale', 'cultura afro-brasiliana', 'mare'],
    giorniConsigliati: "3 días",
    visitataPersonalmente: true,
    introduzione:
      "Primera capital de Brasil (1549-1763) y principal puerto de llegada de los africanos reducidos a la esclavitud, Salvador tiene una cultura profundamente afrobrasileña: candomblé, capoeira, tambores, cocina con aceite de dendé. El centro histórico del Pelourinho es Patrimonio de la UNESCO.",
    percheAndarci: "Por el Pelourinho, la música, la capoeira y la cocina bahiana.",
    cosaVedere: [
      "El Pelourinho y la Igreja de São Francisco",
      "El Elevador Lacerda y el Mercado Modelo",
      "La Igreja do Senhor do Bonfim",
      "El Farol da Barra al atardecer",
    ],
    cosaFare: [
      "El martes por la noche en el Pelourinho",
      "Asistir a una roda de capoeira",
      "Comer acarajé de las baianas de Rio Vermelho",
    ],
    doveDormire: "Pelourinho y Santo Antônio Além do Carmo (pousadas 250-600 R$), Barra y Rio Vermelho para el mar.",
    doveMangiare: "Moqueca bahiana, acarajé, vatapá, bobó de camarão.",
    comeArrivare: "El aeropuerto internacional Deputado Luís Eduardo Magalhães (SSA) recibe vuelos de todas las grandes ciudades brasileñas y algunos vuelos directos desde Europa. De aquí a Barra hay unos 30-50 minutos en taxi o aplicación, más en hora punta; al Pelourinho, unos 40-60 minutos. El metro une el aeropuerto con el centro (estación Lapa), pero con equipaje el taxi o la aplicación son más cómodos. Desde Foz do Iguaçu el vuelo con escala dura 4-6 horas.",
    comeSpostarsi: "Apps y taxis; a pie por el Pelourinho de día.",
    periodoMigliore: "septiembre-marzo; lluvias más fuertes entre abril y junio.",
    erroriDaEvitare: [
      "Alejarse de las calles principales del Pelourinho por la noche",
      "Aceptar las cintas del Bonfim «regaladas» en la calle",
    ],
    miaEsperienza:
      "Tres días en Salvador durante el viaje por Brasil: el Pelourinho, la bajada con el Elevador Lacerda hasta el Mercado Modelo, la iglesia del Bonfim y Rio Vermelho por la noche. El primer atardecer lo vimos desde el Farol da Barra.",
    luoghi: [
      {
        "nome": "Pelourinho e Igreja de São Francisco",
        "testo": "El centro histórico, patrimonio UNESCO: plazas en cuesta con casas coloniales de colores pastel e iglesias barrocas. La Igreja de São Francisco está revestida de oro por dentro.",
        "come": "A pie desde tu alojamiento en el centro o en app desde los barrios de mar.",
        "quando": "De día. Por la noche en el Pelourinho suele haber conciertos y percusión: infórmate del programa de la semana.",
        "tempo": "Medio día",
        "orari": "La Igreja de São Francisco está cerrada por restauración desde febrero de 2025, tras el derrumbe de parte del techo, con reapertura prevista hacia 2029: compruébalo antes de ir",
        "lat": -12.96667,
        "lng": -38.5,
        "consiglio": "Por la noche las calles laterales se vacían pronto: quédate en las calles principales y regresa en app."
      },
      {
        "nome": "Terreiro de Jesus y Catedral Basílica",
        "testo": "La plaza grande del Pelourinho, con la catedral de los jesuitas del siglo XVII y otras dos iglesias asomadas a ella. Dentro de la catedral, altares dorados y techos de madera tallada.",
        "come": "A pie desde el Pelourinho o desde el Elevador Lacerda, en 5 minutos.",
        "quando": "Por la mañana, cuando las iglesias están abiertas.",
        "tempo": "1 hora",
        "lat": -12.9729,
        "lng": -38.51033,
        "consiglio": "Desde aquí se baja hacia el Largo do Pelourinho, la plaza en cuesta de las postales."
      },
      {
        "nome": "Elevador Lacerda y Mercado Modelo",
        "testo": "El ascensor público de 1873, de 72 metros de altura, une la ciudad alta con la ciudad baja. Abajo está el Mercado Modelo, mercado de artesanía.",
        "come": "El ascensor parte de la Praça Tomé de Souza.",
        "quando": "Mañana.",
        "tempo": "1-2 horas",
        "costo": "Elevador unos 1 R$ por trayecto (desde 2025)",
        "lat": -12.97417,
        "lng": -38.51333,
        "consiglio": "El mercado es turístico: regatea los precios."
      },
      {
        "nome": "Museu Afro-Brasileiro",
        "testo": "En el antiguo edificio de la Facultad de Medicina, en el Terreiro de Jesus, cuenta las culturas africanas que llegaron a Bahía y el candomblé, con los paneles de madera de Carybé dedicados a los orixás.",
        "come": "En el Terreiro de Jesus, a pie.",
        "quando": "De día, en días laborables.",
        "tempo": "1 hora",
        "lat": -12.97279,
        "lng": -38.50977,
        "consiglio": "Visítalo antes de una noche de música o de una roda de capoeira: ayuda a entender lo que se ve."
      },
      {
        "nome": "Fundação Casa de Jorge Amado",
        "testo": "La casa azul del Largo do Pelourinho dedicada al escritor que contó Salvador al mundo, con fotos, portadas de ediciones en decenas de idiomas y un café.",
        "come": "En el Largo do Pelourinho, a pie.",
        "quando": "De día.",
        "tempo": "45 minutos",
        "lat": -12.97168,
        "lng": -38.50853,
        "consiglio": "Una pausa a la fresca entre una iglesia y otra."
      },
      {
        "nome": "Santo Antônio Além do Carmo",
        "testo": "El barrio histórico más allá del Pelourinho, más tranquilo, con pousadas en casas coloniales, pequeños restaurantes y el mirador del Largo de Santo Antônio sobre la bahía.",
        "come": "A pie desde el Pelourinho subiendo por la Ladeira do Carmo, unos 10-15 minutos.",
        "quando": "Última hora de la tarde y noche.",
        "tempo": "1-2 horas",
        "lat": -12.9655,
        "lng": -38.50364,
        "consiglio": "El atardecer sobre la bahía desde el Largo de Santo Antônio está menos concurrido que el del Farol."
      },
      {
        "nome": "Igreja do Senhor do Bonfim",
        "testo": "La iglesia de las cintas de colores, atadas a la reja y a la muñeca como promesa.",
        "come": "En taxi o aplicación desde la ciudad alta, unos 20-30 minutos.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "lat": -12.92375,
        "lng": -38.50812,
        "consiglio": "Si alguien te ofrece una cinta en la calle y no la quieres, recházala con amabilidad."
      },
      {
        "nome": "Farol da Barra",
        "testo": "El faro en la punta de la ciudad, con el atardecer sobre la bahía.",
        "come": "En app o bus desde Barra.",
        "quando": "Atardecer.",
        "tempo": "1-2 horas",
        "lat": -13.01033,
        "lng": -38.53293,
        "consiglio": "El primer atardecer en Salvador se mira desde aquí."
      },
      {
        "nome": "Praia do Porto da Barra",
        "testo": "La playa urbana preferida de los baianos, en una pequeña bahía de agua tranquila entre el Forte de Santo Antônio y el Forte de Santa Maria. Al atardecer el sol cae en el mar.",
        "come": "A pie desde Barra; en aplicación o bus desde el centro.",
        "quando": "Por la mañana para el baño, por la tarde para el atardecer.",
        "tempo": "Medio día",
        "lat": -13.00327,
        "lng": -38.5333,
        "consiglio": "Deja en la pousada los documentos y los objetos de valor: en la playa se lleva lo mínimo."
      },
      {
        "nome": "Solar do Unhão y MAM Bahia",
        "testo": "Un conjunto colonial junto al mar, antiguo ingenio azucarero y almacén, hoy sede del Museo de Arte Moderno de Bahía, con esculturas al aire libre y la bahía delante.",
        "come": "En taxi o aplicación desde el centro, pocos minutos; a pie por la Avenida Contorno no se recomienda.",
        "quando": "Por la tarde, para el atardecer sobre la bahía.",
        "tempo": "1-2 horas",
        "orari": "Cerrado en general los lunes",
        "lat": -12.98263,
        "lng": -38.52027,
        "consiglio": "Los sábados por la tarde suele haber jazz en directo al atardecer: consulta el programa."
      },
      {
        "nome": "Rio Vermelho y el acarajé",
        "testo": "El barrio de la vida nocturna, donde las baianas fríen el acarajé en aceite de palma en la calle.",
        "come": "En app desde el centro o Barra.",
        "quando": "Noche.",
        "tempo": "Una velada",
        "lat": -13.01006,
        "lng": -38.48996,
        "consiglio": "Come el acarajé de las baianas, no en locales para turistas."
      },
      {
        "nome": "Feira de São Joaquim",
        "testo": "El gran mercado popular junto a la bahía: fruta, especias, cerámica, jaulas de animales y los puestos de objetos para el candomblé. Caótico y auténtico, sin turistas.",
        "come": "En taxi o aplicación desde el centro, unos 10 minutos.",
        "quando": "Muy temprano, de lunes a sábado.",
        "tempo": "1 hora",
        "lat": -12.95185,
        "lng": -38.5024,
        "consiglio": "Mejor con alguien del lugar o un guía: teléfono en el bolsillo y nada de joyas."
      },
      {
        "nome": "Lagoa do Abaeté",
        "testo": "Una laguna de agua oscura rodeada de dunas blancas en el barrio de Itapuã, cantada por la música bahiana. Hoy es un parque con pasarelas y quioscos.",
        "come": "Unos 40-50 minutos en aplicación o taxi desde Barra.",
        "quando": "Por la tarde, combinada con la playa de Itapuã.",
        "tempo": "1-2 horas",
        "lat": -12.94376,
        "lng": -38.35972,
        "consiglio": "No se recomienda bañarse en la laguna: se viene por el paisaje."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Terreiro de Jesus, Catedral Basílica y Museu Afro-Brasileiro",
          "Largo do Pelourinho y Casa de Jorge Amado",
          "Elevador Lacerda y Mercado Modelo",
          "Atardecer en el Farol da Barra"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: programa de 1 día",
          "Día 2: Igreja do Senhor do Bonfim por la mañana, Solar do Unhão por la tarde, noche en Rio Vermelho con el acarajé"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: Porto da Barra por la mañana, Santo Antônio Além do Carmo al atardecer, o bien paseo en barco por la Baía de Todos os Santos; roda de capoeira en una escuela del Pelourinho, preguntando antes"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pelourinho y Santo Antônio Além do Carmo",
        "perChi": "Quien quiere el centro histórico",
        "testo": "Pousadas en casas históricas. Vigilado de día, de noche se vacía.",
        "fascia": "40-150 €"
      },
      {
        "nome": "Barra y Rio Vermelho",
        "perChi": "Quien busca el mar y la vida nocturna",
        "testo": "Más seguros por la noche, cerca de las playas y los restaurantes.",
        "fascia": "40-140 €"
      },
      {
        "nome": "Ondina y el paseo marítimo",
        "perChi": "Quien quiere un gran hotel frente al mar",
        "testo": "Entre Barra y Rio Vermelho, con hoteles más grandes frente al océano. Cómodo para salir de noche por Rio Vermelho; para el centro histórico hace falta la aplicación.",
        "fascia": "60-160 €"
      }
    ],
    sapori: [
      {
        "nome": "Moqueca baiana",
        "testo": "Guiso de pescado con leche de coco y aceite de dendê."
      },
      {
        "nome": "Acarajé",
        "testo": "Buñuelo de frijol fradinho frito en aceite de palma, relleno de vatapá y camarones."
      },
      {
        "nome": "Vatapá",
        "testo": "Crema de pan, camarones, leche de coco y cacahuetes."
      },
      {
        "nome": "Bobó de camarão",
        "testo": "Crema de mandioca con camarones."
      }
    ],
    attenzioni: [
      "El Pelourinho de noche: alejarse de las calles principales es arriesgado.",
      "Vendedores insistentes alrededor de los lugares turísticos: rechaza con amabilidad lo que no quieras.",
      "Delincuencia menor: robos de teléfonos y tirones.",
      "Usa apps en lugar de caminar de noche."
    ],
    costi: "Presupuesto bajo unos 40-60 € al día (pousada o albergue, acarajé y locales por peso, metro y bus); medio 90-140 € (hotel en Barra o en el Pelourinho, restaurantes de cocina bahiana, aplicación para moverse); alto desde 220 € (hotel boutique en una casa histórica, paseo en barco privado por la bahía). Elevador Lacerda unos 1 R$ por trayecto (desde 2025); acarajé de las baianas, pocos reales.",
    gite: [
      {
        "nome": "Morro de São Paulo",
        "distanza": "unas 2 h 30 en catamarán",
        "come": "Catamarán desde el Terminal Marítimo cerca del Mercado Modelo; como alternativa, por la Ilha de Itaparica y carretera.",
        "testo": "Un pueblo sin coches en la isla de Tinharé, con playas numeradas y piscinas naturales con la marea baja. Mejor dormir allí al menos una noche: el mar en catamarán puede estar movido."
      },
      {
        "nome": "Baía de Todos os Santos (Ilha dos Frades e Itaparica)",
        "distanza": "jornada en barco",
        "come": "Excursión organizada en escuna desde el puerto de Salvador.",
        "testo": "La vuelta clásica por la bahía, con paradas para bañarse en Ilha dos Frades y almuerzo en Itaparica. Cómoda, pero concurrida los fines de semana."
      },
      {
        "nome": "Praia do Forte",
        "distanza": "unas 1 h 15, 80 km",
        "come": "Coche, traslado o bus desde la rodoviária.",
        "testo": "Un pueblo de pescadores convertido en destino de playa, con piscinas naturales, la base del Projeto Tamar para las tortugas marinas y las ruinas del Castelo Garcia d'Ávila."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Salvador?",
        "risposta": "Tres: uno para el Pelourinho y la ciudad baja, uno para Bonfim, el Solar do Unhão y Rio Vermelho, uno para el mar o la bahía. Con Morro de São Paulo se añaden dos."
      },
      {
        "domanda": "¿El Pelourinho es seguro?",
        "risposta": "De día, en las calles principales, está vigilado y concurrido. Por la noche las calles laterales se vacían pronto: se queda uno en las calles animadas y se vuelve en un coche de aplicación pedido delante del local."
      },
      {
        "domanda": "¿Dónde dormir en Salvador?",
        "risposta": "En el Pelourinho o en Santo Antônio por la historia; en Barra y Rio Vermelho por el mar y la vida nocturna, más tranquila para moverse de noche."
      },
      {
        "domanda": "¿La Igreja de São Francisco está abierta?",
        "risposta": "Está cerrada por restauración desde febrero de 2025, tras el derrumbe de parte del techo, con reapertura prevista hacia 2029. Conviene comprobarlo antes de ir."
      },
      {
        "domanda": "¿Cuándo ir a Salvador?",
        "risposta": "De septiembre a marzo llueve menos y el mar está en su mejor momento; abril-junio es el periodo más lluvioso. En Carnaval y a principios de febrero la ciudad se llena y los precios suben."
      },
      {
        "domanda": "¿Dónde se come el verdadero acarajé?",
        "risposta": "En los puestos callejeros de las baianas, sobre todo en Rio Vermelho y en Barra, frito al momento en aceite de palma. Cuesta pocos reales."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: "La plaza en cuesta del Pelourinho en Salvador con las casas coloniales y la iglesia del Rosário dos Pretos",
    immagine: '/images/viaggi/brasile-itinerario/giorno-13-salvador-de-bahia.jpg',
  },
  {
    slug: 'chapada-diamantina',
    paeseSlug: 'brasile',
    ordine: 5,
    nome: "Chapada Diamantina",
    tipologia: ['trekking', 'cascate', 'grotte', 'parco nazionale'],
    giorniConsigliati: "3-5 días",
    visitataPersonalmente: true,
    introduzione:
      "Un altiplano de mesetas, cañones, cuevas inundadas y cascadas en el interior de Bahía, con el pueblo de Lençóis, nacido con la fiebre de los diamantes del siglo XIX, como base.",
    percheAndarci: "Por los trekkings, las cascadas como la Fumaça y las cuevas de agua azul del Poço Azul y del Poço Encantado.",
    cosaVedere: [
      "El Morro do Pai Inácio al atardecer",
      "La Cachoeira da Fumaça",
      "El Poço Azul y el Poço Encantado",
      "Las cuevas de Lapa Doce y Pratinha",
    ],
    cosaFare: ["El trekking de varios días del Vale do Pati", "El baño en el Ribeirão do Meio"],
    doveDormire: "Lençóis (pousadas 200-500 R$) o el Vale do Capão.",
    comeArrivare: "Autobús desde Salvador (6-7 horas).",
    comeSpostarsi: "Tours con guía y coche; los senderos están poco señalizados.",
    periodoMigliore: "abril-septiembre, estación seca; el Poço Encantado se ilumina de abril a septiembre.",
    costi: "Tours de un día 150-300 R$ más guía y entradas.",
    erroriDaEvitare: ["Hacer los senderos largos sin guía", "Subestimar la subida inicial de la Fumaça"],
    miaEsperienza:
      "Tres días en la Chapada con base en Lençóis, llegando en bus desde Salvador. Hicimos el circuito clásico con guía y coche, entre las grutas, el Poço do Diabo y el atardecer en el Morro do Pai Inácio.",
    luoghi: [
      {
        "nome": "Morro do Pai Inácio",
        "testo": "La mesa que domina el valle. El atardecer desde aquí es el clásico de la Chapada.",
        "come": "Con tour o coche; desde el aparcamiento, una subida corta y empinada.",
        "quando": "Atardecer.",
        "tempo": "2 horas",
        "consiglio": "Lleva una linterna para la bajada."
      },
      {
        "nome": "Cachoeira da Fumaça",
        "testo": "Una cascada de unos 340 metros: el viento a menudo deshace el agua en niebla antes de que toque el suelo.",
        "come": "Desde el valle del Capão por un sendero de ida y vuelta de unas horas con una subida inicial empinada.",
        "quando": "En días despejados: con nubes bajas se ve poco desde arriba.",
        "tempo": "Medio día",
        "consiglio": "No subestimes la subida inicial."
      },
      {
        "nome": "Poço Azul y Poço Encantado",
        "testo": "Cuevas inundadas donde la luz del sol entra y enciende el agua de azul.",
        "come": "Con tour y guía, en coche.",
        "quando": "El rayo de sol solo entra en algunos meses y a ciertas horas: pregunta los horarios al guía.",
        "tempo": "Medio día",
        "costo": "Tours de un día con guía; las entradas se pagan aparte: pregunta qué incluye el precio",
        "consiglio": "Comprueba los horarios de la luz: fuera de temporada no se ve el azul."
      },
      {
        "nome": "Lapa Doce y Pratinha",
        "testo": "Cuevas con agua turquesa donde se hace snorkel. El Poço do Diabo es una cascada con una poza oscura.",
        "come": "Recorrido clásico con guía y coche.",
        "quando": "Día completo.",
        "tempo": "Un día",
        "consiglio": "Ve con guía: en las grutas ayuda a orientarse."
      },
      {
        "nome": "Vale do Pati",
        "testo": "Trekking de varios días por valles remotos durmiendo en casas de campesinos.",
        "come": "Con guía, a pie, desde Guiné o el Vale do Capão.",
        "quando": "Estación seca.",
        "tempo": "3-5 días",
        "consiglio": "Para quien tiene tiempo y piernas, es la alternativa a los tours de un día."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Ribeirão do Meio, Lapa Doce o Pratinha, atardecer en el Pai Inácio",
          "Día 2: Cachoeira da Fumaça o Poço Azul y Poço Encantado"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: una segunda actividad a elegir, o inicio del Vale do Pati"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lençóis",
        "perChi": "Quien quiere la base de los tours",
        "testo": "Pousadas para todos los bolsillos. Pueblo pequeño con agencias y restaurantes."
      },
      {
        "nome": "Vale do Capão",
        "perChi": "Quien quiere caminar",
        "testo": "Más tranquilo, cerca de la Fumaça y del Pati."
      }
    ],
    sapori: [
      {
        "nome": "Cocina bahiana del interior",
        "testo": "Carne de sol, feijão tropeiro, farofa."
      },
      {
        "nome": "Cachaça y licores locales",
        "testo": "Producidos en las fazendas de la región."
      }
    ],
    attenzioni: [
      "Senderos largos sin guía: los recorridos están poco señalizados.",
      "Subestimar la subida inicial de la Fumaça.",
      "Fuera de la estación seca muchas cascadas son más difíciles."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: "Las mesetas de la Chapada Diamantina vistas desde arriba",
    immagine: '/images/viaggi/brasile-itinerario/giorno-16-chapada-diamantina.jpg',
  },
  {
    slug: 'lencois-maranhenses',
    paeseSlug: 'brasile',
    ordine: 6,
    nome: "Lençóis Maranhenses",
    tipologia: ['dune', 'lagune', 'parco nazionale'],
    giorniConsigliati: "3-4 días",
    visitataPersonalmente: true,
    introduzione:
      "Un parque nacional de dunas blancas en la costa de Maranhão donde, tras las lluvias, se forman miles de lagunas de agua dulce transparente. Barreirinhas, en el Rio Preguiças, es la puerta de entrada; Atins, el pueblo en el extremo del parque.",
    percheAndarci: "Para bañarse en las lagunas entre las dunas, entre junio y septiembre.",
    cosaVedere: [
      "El circuito de la Lagoa Azul",
      "La Lagoa Bonita desde lo alto de la duna",
      "Vassouras, Mandacaru y Caburé a lo largo del Rio Preguiças",
      "El centro histórico de São Luís",
    ],
    cosaFare: ["Los circuitos en jardineira 4x4", "La barca por el Rio Preguiças hasta el mar", "El vuelo panorámico sobre el parque", "Kitesurf en Atins"],
    doveDormire: "Barreirinhas (pousadas 250-600 R$) o Atins para una base junto al mar.",
    comeArrivare: "Vuelo a São Luís, luego van a Barreirinhas (unas 4 horas).",
    comeSpostarsi: "Solo 4x4 con conductores autorizados dentro del parque; barcas por el río.",
    periodoMigliore: "junio-septiembre, con el máximo de agua en julio-agosto.",
    costi: "Jardineira 100-150 R$ por persona y circuito; la entrada al parque es gratuita: el ICMBio no vende entradas y el plan de concesión a privados se retiró a finales de 2023.",
    erroriDaEvitare: [
      "Ir fuera de temporada, cuando las lagunas están vacías",
      "Entrar en el parque en las horas centrales sin agua ni gorra",
    ],
    miaEsperienza:
      "Fueron los últimos días del viaje por Brasil: de São Luís en furgoneta hasta Barreirinhas, la primera salida en jardineira hacia las dunas y el último día en barco por el Rio Preguiças hasta el mar.",
    luoghi: [
      {
        "nome": "Circuito de la Lagoa Azul",
        "testo": "Las primeras lagunas: agua de lluvia transparente y tibia, recogida entre dunas de arena blanca de hasta 40 metros. Se camina descalzo y se hace baño.",
        "come": "En jardineira, el todoterreno con bancos en la caja que cruza el río en una balsa y toma el camino de arena.",
        "quando": "Al atardecer, cuando la arena cambia de color. Las lagunas se llenan con las lluvias, que caen más o menos de enero a junio, y se evaporan en los meses secos: infórmate del nivel del agua antes de ir.",
        "tempo": "Medio día",
        "costo": "Jardineira por persona y circuito, guía incluido: precio en las agencias de Barreirinhas. Entrada al parque gratuita (2026)",
        "consiglio": "Dentro del parque no hay nada: agua y gorra se llevan desde Barreirinhas."
      },
      {
        "nome": "Lagoa Bonita",
        "testo": "Se alcanza subiendo una duna empinada con una cuerda: desde arriba se ve el mar de dunas y lagunas hasta el horizonte.",
        "come": "Circuito en jardineira desde el lado de Barreirinhas.",
        "quando": "Al amanecer o al atardecer. A mediodía la arena abrasa.",
        "tempo": "Medio día",
        "consiglio": "Ve en las primeras horas o por la tarde."
      },
      {
        "nome": "Rio Preguiças: Vassouras, Mandacaru y Caburé",
        "testo": "Un día en barca por el río hasta el mar. En Vassouras los monos capuchinos se acercan a la orilla, en Mandacaru hay un faro desde el que se miran las dunas, Caburé es una lengua de arena entre el río y el océano.",
        "come": "Barca desde Barreirinhas.",
        "quando": "Día completo.",
        "tempo": "Un día",
        "consiglio": "Se puede dormir en Atins en lugar de regresar."
      },
      {
        "nome": "Atins",
        "testo": "El pueblo en el extremo del parque, base del kitesurf.",
        "come": "En barca o 4x4 desde Barreirinhas.",
        "quando": "Mejor para una noche.",
        "tempo": "Una noche",
        "consiglio": "El traslado de regreso a São Luís es más largo desde Atins: planifica con antelación."
      },
      {
        "nome": "Centro histórico de São Luís",
        "testo": "Única capital de un estado brasileño fundada por los franceses (1612), tiene un centro histórico patrimonio de la UNESCO desde 1997 con casas cubiertas de azulejos portugueses.",
        "come": "En app o a pie por la Praia Grande.",
        "quando": "Antes de salir hacia Barreirinhas o a la llegada.",
        "tempo": "Medio día",
        "consiglio": "Quien llega temprano puede dar un paseo por la Praia Grande."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: van de São Luís a Barreirinhas, circuito de la Lagoa Azul al atardecer",
          "Día 2: Lagoa Bonita al amanecer, luego Rio Preguiças"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: Atins y Caburé, regreso a São Luís"
        ]
      }
    ],
    zone: [
      {
        "nome": "Barreirinhas",
        "perChi": "Quien quiere la base de los circuitos",
        "testo": "Pousadas para todos los bolsillos. Puerta de entrada al parque."
      },
      {
        "nome": "Atins",
        "perChi": "Quien quiere mar y kitesurf",
        "testo": "Pueblo junto al mar, más aislado y con menos servicios."
      }
    ],
    sapori: [
      {
        "nome": "Arroz de cuxá",
        "testo": "Arroz con vinagreira y camarones secos, típico de Maranhão."
      },
      {
        "nome": "Torta de camarão",
        "testo": "Pastel de camarones, especialidad de São Luís."
      },
      {
        "nome": "Guaraná Jesus",
        "testo": "Refresco rosa local, símbolo del estado."
      }
    ],
    attenzioni: [
      "En los meses secos las lagunas se vacían.",
      "No entrar en las horas centrales sin agua y gorra.",
      "Al parque se entra con los 4x4 y los conductores de las agencias locales.",
      "Fiebre amarilla: vacunación recomendada para todo Maranhão."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: "Lagunas turquesa entre las dunas blancas de los Lençóis Maranhenses",
    immagine: '/images/viaggi/brasile-itinerario/giorno-19-lencois-maranhenses.jpg',
  },
  {
    slug: 'pantanal',
    paeseSlug: 'brasile',
    ordine: 7,
    nome: "Pantanal (Transpantaneira y Porto Jofre)",
    tipologia: ['fauna', 'safari', 'zona umida'],
    giorniConsigliati: "4-6 días",
    visitataPersonalmente: false,
    introduzione:
      "El humedal tropical más grande del mundo. En el Pantanal norte, a lo largo de la carretera de tierra de la Transpantaneira hasta Porto Jofre, en la estación seca los jaguares se ven en las orillas de los ríos con una regularidad sin comparación.",
    percheAndarci: "Por los jaguares, las nutrias gigantes, los caimanes y las aves del humedal.",
    cosaVedere: ["La Transpantaneira y sus puentes de madera", "Los ríos Cuiabá, Três Irmãos y Piquiri en torno a Porto Jofre"],
    cosaFare: ["Salidas en barca al amanecer y por la tarde para ver jaguares", "Safaris en coche, a caballo o a pie desde las pousadas"],
    doveDormire: "Pousadas sencillas a lo largo de la Transpantaneira (opción económica), lodges en el río u hotel flotante cerca de Porto Jofre (gama alta).",
    comeArrivare: "Vuelo a Cuiabá, luego unas 2 horas hasta Poconé y la Transpantaneira (147 km hasta Porto Jofre).",
    comeSpostarsi: "Coche alto o 4x4, o paquetes con traslado; barcas con piloteiro.",
    periodoMigliore: "julio-octubre, mejor agosto-septiembre.",
    costi: "Barca para el día en torno a 1.600 R$ para un máximo de 4 personas; paquetes completos 9.000-13.000 R$ por persona por 3-4 noches.",
    erroriDaEvitare: [
      "Ir en la estación de lluvias (noviembre-abril)",
      "Elegir operadores que rodean a los animales con demasiadas barcas",
      "Recorrer la Transpantaneira de noche",
    ],
    luoghi: [
      {
        "nome": "La Transpantaneira",
        "testo": "Carretera de tierra de 147 km con más de cien puentes de madera, de Poconé a Porto Jofre. Se recorre en un día entero, con paradas para ver animales.",
        "come": "Vuelo a Cuiabá y luego carretera hasta Poconé, donde empieza la Transpantaneira. Coche alto o 4x4, o paquetes con traslado.",
        "quando": "En la temporada seca. Las lluvias caen sobre todo de noviembre a marzo y pueden inundar la carretera.",
        "tempo": "Un día",
        "consiglio": "No lo recorras de noche."
      },
      {
        "nome": "Porto Jofre y los jaguares",
        "testo": "El Pantanal es una de las zonas donde se ven jaguares. En la temporada seca, en los ríos Cuiabá, Três Irmãos y Piquiri, se ven a menudo en las orillas.",
        "come": "Salidas en barca con piloteiro al amanecer y por la tarde.",
        "quando": "Temporada seca.",
        "tempo": "1-2 días de salidas",
        "costo": "Barco con piloteiro por día o medio día, a compartir en grupo: pregunta el precio a la pousada",
        "consiglio": "Evita los operadores que rodean a los animales con demasiadas barcas."
      },
      {
        "nome": "Safari desde las pousadas",
        "testo": "Safari en coche, a caballo o a pie desde las pousadas a lo largo de la Transpantaneira, para carpinchos, caimanes, tucanes y jabirús.",
        "come": "Con la pousada, que organiza las salidas.",
        "quando": "Mañana y última hora de la tarde.",
        "tempo": "1-2 días",
        "consiglio": "La opción económica: dos noches en una pousada sencilla y uno o dos días de barca desde Porto Jofre."
      },
      {
        "nome": "Cuiabá",
        "testo": "La capital de Mato Grosso, base logística para el Pantanal y para continuar hacia la Amazonía con un vuelo a Manaus.",
        "come": "Vuelo desde São Paulo o Brasília.",
        "quando": "Día de llegada y de salida.",
        "tempo": "Una noche",
        "consiglio": "Mato Grosso está en UTC-4, una hora menos que Río: revisa los horarios de los vuelos."
      }
    ],
    programmi: [
      {
        "titolo": "4 días",
        "tappe": [
          "Día 1: vuelo a Cuiabá y carretera hasta una pousada",
          "Día 2: safari y bajada a Porto Jofre",
          "Día 3: salidas en barca para los jaguares",
          "Día 4: regreso a Cuiabá"
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Día 1: vuelo y pousada en la Transpantaneira",
          "Día 2: safari y bajada a Porto Jofre",
          "Días 3-4: barca al amanecer y por la tarde",
          "Día 5: regreso a Cuiabá y vuelo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pousadas en la Transpantaneira",
        "perChi": "Quien tiene presupuesto limitado",
        "testo": "Sencillas y económicas, con salidas a pie y en coche."
      },
      {
        "nome": "Lodge junto al río u hotel flotante en Porto Jofre",
        "perChi": "Quien quiere ver jaguares",
        "testo": "Gama alta, con paquetes completos de varias noches."
      }
    ],
    sapori: [
      {
        "nome": "Pescado de río",
        "testo": "Pintado, pacu y piraña, a la parrilla o en sopa."
      },
      {
        "nome": "Carne seca",
        "testo": "Carne desecada de Mato Grosso con arroz y mandioca."
      }
    ],
    attenzioni: [
      "Temporada de lluvias (sobre todo noviembre-marzo): Transpantaneira inundada y barcos inciertos.",
      "Operadores que rodean a los animales: elige quien respeta la distancia.",
      "No conduzcas la Transpantaneira de noche.",
      "Fiebre amarilla: vacuna recomendada para Mato Grosso."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: "Un jaguar escondido entre la vegetación a la orilla del río en Porto Jofre, en el Pantanal norte",
    immagine: '/images/brasile/pantanal-stock.jpg',
  },
  {
    slug: 'amazzonia-manaus',
    paeseSlug: 'brasile',
    ordine: 8,
    nome: "Amazonia desde Manaos",
    tipologia: ['foresta', 'fiume', 'fauna'],
    giorniConsigliati: "4-5 días, hasta 10 si se continúa hacia Perú o Colombia",
    visitataPersonalmente: false,
    introduzione:
      "Manaos, ciudad de más de dos millones de habitantes a la que solo se llega en avión o en barco, es la puerta de la Amazonia brasileña, en la confluencia entre el Rio Negro y el Solimões. Desde aquí se remonta el río hasta la triple frontera con Colombia y Perú.",
    percheAndarci: "Por la selva inundada, los delfines rosados, el Encuentro de las Aguas y, si se quiere, para cruzar el continente por el río.",
    cosaVedere: [
      "El Teatro Amazonas y el Mercado Adolpho Lisboa",
      "El Encuentro de las Aguas",
      "El archipiélago de Anavilhanas en el Rio Negro",
    ],
    cosaFare: [
      "Dos o tres noches en un lodge en la selva",
      "Canoa por el igapó, caminata guiada, observación nocturna de caimanes",
      "La lancha rápida o el barco lento hasta Tabatinga, luego Leticia (Colombia) o Iquitos (Perú)",
    ],
    doveDormire: "Lodges con pensión completa en el Rio Negro (800-2.500 R$ por persona y noche); hoteles en el centro de Manaos.",
    comeArrivare: "Vuelo a Manaos desde São Paulo, Brasilia o Cuiabá.",
    comeSpostarsi: "Traslados de los lodges en barca; a Tabatinga vuelo (unas 1h30), lancha rápida (30-36 horas) o barco lento (6-7 días).",
    periodoMigliore: "todo el año: aguas altas abril-julio, aguas bajas septiembre-diciembre.",
    costi: "Lancha rápida Manaos-Tabatinga unos 1.000 R$; lancha rápida Santa Rosa-Iquitos orientativamente 150-200 soles.",
    erroriDaEvitare: [
      "Olvidar los sellos de salida en la Polícia Federal de Tabatinga",
      "Salir sin la vacuna de la fiebre amarilla",
      "Contar con horarios fijos de las barcas, que cambian a menudo",
    ],
    luoghi: [
      {
        "nome": "Teatro Amazonas y Mercado Adolpho Lisboa",
        "testo": "El teatro de la ópera del auge del caucho y el mercado del puerto, inaugurado en 1883 con una estructura de hierro inspirada en Les Halles de París. Son las dos paradas urbanas de Manaos.",
        "come": "A pie por el centro histórico.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "consiglio": "El mercado es un buen lugar para probar pescados amazónicos."
      },
      {
        "nome": "El Encuentro de las Aguas",
        "testo": "El punto donde el oscuro río Negro se une al Solimões, color café con leche, y las dos aguas corren juntas sin mezclarse durante unos 6 kilómetros.",
        "come": "En barca desde Manaus, a menudo incluido en los tours.",
        "quando": "Mañana.",
        "tempo": "2-3 horas",
        "consiglio": "Se ve mejor en un tour en barca que desde el puerto."
      },
      {
        "nome": "Archipiélago de Anavilhanas",
        "testo": "Un enorme archipiélago fluvial en el río Negro, parque nacional, con bosque inundado (igapó).",
        "come": "Con tour o lodge.",
        "quando": "Con aguas altas se navega dentro del bosque inundado: pregunta al lodge por el nivel del río.",
        "tempo": "1-2 días",
        "consiglio": "Comprueba si el tour incluye el bosque inundado."
      },
      {
        "nome": "Lodge en el bosque",
        "testo": "Dos o tres noches en un lodge con canoa en el igapó, caminatas guiadas y observación nocturna de caimanes. Delfines rosados en el río.",
        "come": "Traslado en barca del lodge desde Manaus.",
        "quando": "Todo el año; el paisaje cambia mucho entre aguas altas y bajas.",
        "tempo": "2-3 noches",
        "costo": "Pensión completa y excursiones incluidas: los precios varían mucho de un lodge a otro",
        "consiglio": "Para información sobre agencias, mira la página Amazonía del sitio."
      },
      {
        "nome": "Hacia Tabatinga y la triple frontera",
        "testo": "Desde Manaus se puede remontar el río Amazonas hasta Tabatinga, en la frontera con Colombia y Perú, y continuar a Leticia o Iquitos.",
        "come": "En avión, o en barco rápido o lento: el barco lento tarda varios días.",
        "quando": "Todo el año; los horarios de las barcas cambian a menudo.",
        "tempo": "De un día a varios días, según el medio",
        "costo": "Precios de los barcos en el puerto de Manaos o en las compañías",
        "consiglio": "Antes de pasar a Colombia o Perú, infórmate sobre los trámites de salida de Brasil."
      }
    ],
    programmi: [
      {
        "titolo": "4 días",
        "tappe": [
          "Día 1: Manaus (teatro y mercado)",
          "Día 2: Encuentro de las Aguas y traslado al lodge",
          "Día 3: canoa en el igapó y salida nocturna",
          "Día 4: regreso a Manaus"
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Día 1: Manaus",
          "Día 2: Encuentro de las Aguas y lodge",
          "Días 3-4: bosque y Anavilhanas",
          "Día 5: regreso a Manaus"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro de Manaus",
        "perChi": "Quien se queda pocos días",
        "testo": "Hoteles en el centro cerca del teatro y del puerto. Calor y tráfico."
      },
      {
        "nome": "Lodges en el Rio Negro",
        "perChi": "Quien busca el bosque",
        "testo": "Pensión completa, excursiones incluidas. Coste alto, pero todo incluido."
      }
    ],
    sapori: [
      {
        "nome": "Tambaqui a la parrilla",
        "testo": "Pescado amazónico, servido con farofa y mandioca."
      },
      {
        "nome": "Tacacá",
        "testo": "Sopa con tucupí, jambú y camarones, típica de la Amazonía."
      },
      {
        "nome": "Açaí",
        "testo": "Servido salado con pescado o dulce con guaraná."
      }
    ],
    attenzioni: [
      "Triple frontera: infórmate con antelación sobre los trámites de salida de Brasil antes de entrar en Colombia o Perú.",
      "Vacuna contra la fiebre amarilla: recomendada para toda la Amazonía.",
      "Horarios de barcas no fijos: deja margen.",
      "Efectivo en la moneda del país antes de embarcar."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: "Barcos fluviales amarrados en el Rio Negro en Manaos",
    immagine: '/images/brasile/manaus-stock.jpg',
  },
]
