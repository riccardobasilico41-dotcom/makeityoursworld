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
    comeArrivare: "Aeropuerto internacional del Galeão (GIG); vuelos internos también desde el Santos Dumont, en el centro.",
    comeSpostarsi: "Metro entre la zona sur y el centro, taxis oficiales y aplicaciones; a pie solo de día y en las zonas concurridas.",
    periodoMigliore: "mayo-octubre, invierno suave y seco; diciembre-marzo caluroso y lluvioso.",
    costi: "Cristo Redentor 87 R$ con la van desde el centro de visitantes Paineiras (132 R$ desde Copacabana o Largo do Machado, 134 R$ con el tren de cremallera), precio único todo el año; Pan de Azúcar 205 R$ la entrada completa (2026).",
    erroriDaEvitare: [
      "Llevar el teléfono en la mano por la calle o dejarlo sobre la toalla en la playa",
      "Caminar de noche por zonas desiertas en lugar de usar una app",
      "Subir al Cristo a mediodía, cuando a menudo está entre las nubes y abarrotado",
    ],
    luoghi: [
      {
        "nome": "Cristo Redentor",
        "testo": "La estatua de 30 metros (38 con el pedestal) sobre el Corcovado, a unos 700 metros sobre la ciudad. Desde arriba se entiende la forma de Río: las playas, la laguna Rodrigo de Freitas y el Pan de Azúcar a la entrada de la bahía.",
        "come": "Con el tren de cremallera desde Cosme Velho o con las vans oficiales desde Paineiras. La entrada se compra en línea eligiendo día y hora.",
        "quando": "Primer viaje de la mañana, antes de las nubes y la multitud. A mediodía la estatua suele estar entre nubes.",
        "tempo": "3-4 horas entre subida, visita y bajada",
        "costo": "Tren de cremallera desde Cosme Velho 139 R$ adultos, 112 R$ niños de 7 a 11 años (web del tren, 2026); tarifas de las vans en la web oficial",
        "url": "https://paineirascorcovado.com.br/",
        "consiglio": "Ve por la mañana y lleva una chaqueta ligera: arriba hace viento."
      },
      {
        "nome": "Pão de Açúcar",
        "testo": "El monolito de granito a la entrada de la bahía de Guanabara. El teleférico sube en dos tramos, primero al Morro da Urca y luego a la cima, con vista de 360 grados.",
        "come": "Teleférico desde la estación de Praia Vermelha, en el barrio de Urca. Quien camina puede subir a pie hasta Urca por un sendero corto y tomar el teleférico solo para el segundo tramo.",
        "quando": "Última hora de la tarde, para el atardecer sobre la bahía y la ciudad que se enciende.",
        "tempo": "2-3 horas",
        "costo": "Billete del teleférico: precios actualizados en la web oficial",
        "url": "https://www.bondinho.com.br/",
        "consiglio": "Llega una hora antes del atardecer para no hacer cola."
      },
      {
        "nome": "Copacabana, Ipanema y el Arpoador",
        "testo": "Las dos playas urbanas más famosas de Río, divididas en «postos», las torres de los salvavidas que marcan también la tribu de cada tramo. Entre ambas está la Pedra do Arpoador, donde la gente aplaude el atardecer.",
        "come": "En metro (Cardeal Arcoverde, Siqueira Campos y Cantagalo para Copacabana, General Osório para Ipanema) o a pie por el paseo marítimo.",
        "quando": "Mañana para la playa; atardecer en el Arpoador.",
        "tempo": "Medio día",
        "consiglio": "En la toalla lleva solo lo que estés dispuesto a perder: no dejes teléfono ni cartera sin vigilancia."
      },
      {
        "nome": "Santa Teresa y la Escadaria Selarón",
        "testo": "El barrio de la colina con villas históricas, talleres y el tranvía amarillo (bondinho). La Escadaria Selarón, escalinata cubierta de azulejos de colores, baja hacia Lapa.",
        "come": "En app o taxi hasta Santa Teresa, luego a pie; la escalinata se baja hacia Lapa.",
        "quando": "De día.",
        "tempo": "2-3 horas",
        "consiglio": "Se va de día y se regresa en app."
      },
      {
        "nome": "Centro histórico y Museu do Amanhã",
        "testo": "El centro tiene la Confeitaria Colombo, el Theatro Municipal, la catedral en forma de cono y la biblioteca del Real Gabinete Português de Leitura. En el puerto, la plaza Mauá con el Museu do Amanhã y el Boulevard Olímpico lleno de murales.",
        "come": "En metro desde Ipanema y Copacabana.",
        "quando": "En días laborables, de día: el fin de semana el centro se vacía.",
        "tempo": "Medio día",
        "consiglio": "El centro se recorre de día: por la noche y el fin de semana se vacía."
      },
      {
        "nome": "Lapa y el samba",
        "testo": "El barrio bajo los arcos del acueducto, con locales de samba en vivo y calles llenas el viernes y el sábado.",
        "come": "En app, ida y vuelta, evitando caminar de noche.",
        "quando": "Viernes y sábado por la noche.",
        "tempo": "Una velada",
        "consiglio": "Con solo el teléfono y el efectivo para la noche. Cuidado con los tirones en la multitud a última hora."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Cristo Redentor en el primer viaje",
          "Almuerzo en Santa Teresa o en el centro",
          "Tarde: Pão de Açúcar",
          "Noche: atardecer y cena en Ipanema"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: programa de 1 día",
          "Día 2: mañana en la playa de Ipanema y Copacabana, tarde en el centro y Museu do Amanhã, noche en Lapa"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: Santa Teresa y la Escadaria Selarón, atardecer en el Arpoador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ipanema y Leblon",
        "perChi": "Quien quiere seguridad y restaurantes",
        "testo": "La zona más cuidada, con el mar y el metro cerca."
      },
      {
        "nome": "Copacabana",
        "perChi": "Quien busca el ambiente clásico y precios más bajos",
        "testo": "El paseo marítimo siempre está vivo, pero algunas calles interiores son menos seguras de noche."
      },
      {
        "nome": "Santa Teresa",
        "perChi": "Quien busca ambiente artístico",
        "testo": "Pousadas en villas históricas, pero en la colina y con calles empinadas. De noche mejor moverse en app."
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
    comeArrivare: "Autobús de Río a Paraty (unas 4 horas y media); van y barco desde Paraty o Río a Ilha Grande.",
    comeSpostarsi: "A pie y en barca; en Ilha Grande no hay coches.",
    periodoMigliore: "abril-noviembre para tener menos lluvia y menos gente; diciembre-febrero lleno y caro.",
    erroriDaEvitare: [
      "No llevar agua y comida a Lopes Mendes, donde no hay servicios",
      "Dejar el equipaje grande sin haber reservado el traslado al aeropuerto el día anterior",
    ],
    luoghi: [
      {
        "nome": "Centro histórico de Paraty",
        "testo": "Ciudad colonial, antiguo puerto del oro de Minas Gerais, patrimonio de la UNESCO desde 2019. El centro está cerrado a los coches, con casas blancas de puertas de colores y calles de adoquines que con la marea alta a veces se inundan.",
        "come": "Buses directos desde la rodoviária Novo Rio.",
        "quando": "La noche es tranquila, con restaurantes y música en vivo.",
        "tempo": "Medio día o una noche",
        "consiglio": "Con la marea alta algunas calles se inundan: calzado adecuado."
      },
      {
        "nome": "La bahía de Paraty en escuna",
        "testo": "La bahía tiene decenas de islas y playas a las que solo se llega por mar. Las escunas hacen un paseo de unas horas con paradas para bañarse.",
        "come": "Embarque en el puerto de Paraty. Las lanchas privadas cuestan más pero eligen dónde parar.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "consiglio": "Si quieres evitar la multitud, elige una lancha."
      },
      {
        "nome": "Cascadas de Cunha y alambiques",
        "testo": "En el camino de Cunha hay cascadas y alambiques de cachaça.",
        "come": "En taxi o con un tour desde el centro de Paraty.",
        "quando": "Tarde, después del paseo en barca.",
        "tempo": "Medio día",
        "consiglio": "Lleva calzado que pueda mojarse."
      },
      {
        "nome": "Trindade",
        "testo": "Pueblo con playas salvajes y la piscina natural del Cachadaço.",
        "come": "Al sur de Paraty, en bus o taxi.",
        "quando": "Día completo, si tienes un día extra.",
        "tempo": "Un día",
        "consiglio": "Añádela si tienes un día extra."
      },
      {
        "nome": "Vila do Abraão (Ilha Grande)",
        "testo": "El pueblo principal de la isla sin coches, con pousadas, restaurantes y vida nocturna. De aquí salen senderos hacia el Aqueduto y la Cachoeira da Feiticeira.",
        "come": "Desde Paraty en van y barco, por Angra dos Reis o Conceição de Jacareí.",
        "quando": "Tarde de llegada para un primer sendero corto.",
        "tempo": "Una o dos noches",
        "consiglio": "Reserva el día anterior el traslado al aeropuerto de Río."
      },
      {
        "nome": "Lopes Mendes, Lagoa Azul y Lagoa Verde",
        "testo": "Lopes Mendes es una larga franja de arena blanca, con mar abierto y selva detrás. La Lagoa Azul y la Lagoa Verde se visitan en barco para hacer snorkel.",
        "come": "En barco y luego un tramo a pie, o por un sendero en la selva.",
        "quando": "Mañana. El baño debe hacerse con prudencia por olas y corrientes.",
        "tempo": "Día completo",
        "consiglio": "Lleva agua y comida desde Vila do Abraão."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Paraty (centro histórico, bahía en escuna)",
          "Día 2: cascadas de Cunha o Trindade, luego noche en Paraty"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Paraty y la bahía",
          "Día 2: traslado a Ilha Grande, Vila do Abraão",
          "Día 3: Lopes Mendes"
        ]
      },
      {
        "titolo": "4 días",
        "tappe": [
          "Días 1-3 como arriba",
          "Día 4: Lagoa Azul y Lagoa Verde en barca, luego regreso a Río"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro histórico de Paraty",
        "perChi": "Quien busca ambiente colonial",
        "testo": "Pousadas en casas coloniales. Calles empedradas, ruido nocturno de los locales."
      },
      {
        "nome": "Vila do Abraão",
        "perChi": "Quien visita Ilha Grande",
        "testo": "Pousadas, vida nocturna y salidas de los barcos. Isla sin coches."
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
    comeArrivare: "Vuelo a Foz do Iguaçu (IGU), a menudo vía São Paulo; aeropuerto argentino en Puerto Iguazú.",
    comeSpostarsi: "Autobuses urbanos y taxis hacia el parque brasileño; taxi o traslado para pasar la frontera.",
    periodoMigliore: "todo el año; más agua entre diciembre y marzo, menos calor entre abril y septiembre.",
    costi: "Parque brasileño 134 R$ para extranjeros (desde el 19 de diciembre de 2025); parque argentino 60.000 pesos para extranjeros no residentes (unos 40 dólares, desde el 1 de junio de 2026); lancha 450-550 R$.",
    erroriDaEvitare: [
      "Ver un solo lado",
      "Olvidar el pasaporte para la frontera argentina",
      "Llegar tarde a la Garganta del Diablo, que se llena a media mañana",
    ],
    luoghi: [
      {
        "nome": "Lado brasileño de las cataratas",
        "testo": "Da la vista de conjunto: un sendero a lo largo del cañón lleva a la pasarela que entra bajo la Garganta do Diabo, donde uno se moja por completo.",
        "come": "Buses urbanos o taxi desde Foz do Iguaçu; se entra por el centro de visitantes y se sube con el bus del parque.",
        "quando": "Abierto todos los días: 9-16 de lunes a viernes, 8.30-16 sábados y domingos. Llega a la hora de apertura.",
        "tempo": "2-3 horas",
        "costo": "134 R$ para extranjeros, 121 R$ para brasileños y residentes del Mercosur (tarifas vigentes desde el 19 de diciembre de 2025, actualizadas cada año). Solo en línea, con día y hora",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "consiglio": "Capa de lluvia o bolsa impermeable para teléfono y documentos."
      },
      {
        "nome": "Lado argentino de las cataratas",
        "testo": "Se camina dentro de las cataratas: tres circuitos de pasarelas (Superior, Inferior y la Garganta del Diablo, a la que se llega con un tren en el bosque) llegan sobre el salto más grande, envuelto en niebla de agua.",
        "come": "La frontera se pasa en taxi, en bus o con un traslado, mostrando el pasaporte y haciendo los sellos de salida y entrada.",
        "quando": "Llega a la apertura: la pasarela de la Garganta se llena rápido.",
        "tempo": "Día completo",
        "costo": "Entrada en pesos argentinos, con tarifa distinta para extranjeros no residentes: precio actualizado en la web oficial",
        "url": "https://www.iguazuargentina.com/",
        "consiglio": "Lleva el pasaporte y pesos o tarjeta."
      },
      {
        "nome": "Parque das Aves",
        "testo": "Un parque con tucanes, guacamayos y aves de la Mata Atlántica en grandes pajareras, frente a la entrada de las cataratas brasileñas.",
        "come": "Justo frente a la entrada del lado brasileño.",
        "quando": "Después de las cataratas, por la tarde.",
        "tempo": "1-2 horas",
        "consiglio": "Combina bien con la mañana en las cataratas."
      },
      {
        "nome": "Macuco Safari",
        "testo": "El paseo en lancha neumática hasta debajo de los saltos.",
        "come": "Se puede reservar en el lugar o con antelación; sale del lado brasileño.",
        "quando": "Mañana o tarde.",
        "tempo": "1-2 horas",
        "costo": "Aparte de la entrada al parque: precios actualizados con el operador",
        "consiglio": "Te mojas por completo: ropa de repuesto y funda para el teléfono."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: lado brasileño de las cataratas",
          "Tarde: Parque das Aves"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: lado brasileño y Parque das Aves, Macuco Safari opcional",
          "Día 2: lado argentino, empezando a la apertura, con la Garganta del Diablo primero"
        ]
      }
    ],
    zone: [
      {
        "nome": "Foz do Iguaçu",
        "perChi": "Quien tiene vuelos y quiere comodidad",
        "testo": "Amplia oferta de hoteles, conectada con el aeropuerto. Más cómoda para los vuelos."
      },
      {
        "nome": "Puerto Iguazú (Argentina)",
        "perChi": "Quien quiere estar más cerca del lado argentino",
        "testo": "Ciudad más pequeña, con menos oferta y vuelos menos cómodos."
      },
      {
        "nome": "Hotel dentro del parque brasileño",
        "perChi": "Quien busca la vista desde la habitación",
        "testo": "Hotel de gama alta dentro del parque."
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
    comeArrivare: "Aeropuerto internacional de Salvador, conectado con todas las grandes ciudades brasileñas.",
    comeSpostarsi: "Apps y taxis; a pie por el Pelourinho de día.",
    periodoMigliore: "septiembre-marzo; lluvias más fuertes entre abril y junio.",
    erroriDaEvitare: [
      "Alejarse de las calles principales del Pelourinho por la noche",
      "Aceptar las cintas del Bonfim «regaladas» en la calle",
    ],
    luoghi: [
      {
        "nome": "Pelourinho e Igreja de São Francisco",
        "testo": "El centro histórico, patrimonio UNESCO: plazas en cuesta con casas coloniales de colores pastel e iglesias barrocas. La Igreja de São Francisco está revestida de oro por dentro.",
        "come": "A pie desde tu alojamiento en el centro o en app desde los barrios de mar.",
        "quando": "De día. Por la noche en el Pelourinho suele haber conciertos y percusión: infórmate del programa de la semana.",
        "tempo": "Medio día",
        "consiglio": "Por la noche las calles laterales se vacían pronto: quédate en las calles principales y regresa en app."
      },
      {
        "nome": "Elevador Lacerda y Mercado Modelo",
        "testo": "El ascensor público de 1873, de 72 metros de altura, une la ciudad alta con la ciudad baja. Abajo está el Mercado Modelo, mercado de artesanía.",
        "come": "El ascensor parte de la Praça Tomé de Souza.",
        "quando": "Mañana.",
        "tempo": "1-2 horas",
        "consiglio": "El mercado es turístico: regatea los precios."
      },
      {
        "nome": "Igreja do Senhor do Bonfim",
        "testo": "La iglesia de las cintas de colores, atadas a la reja y a la muñeca como promesa.",
        "come": "En app o taxi desde el centro.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "consiglio": "Si alguien te ofrece una cinta en la calle y no la quieres, recházala con amabilidad."
      },
      {
        "nome": "Rio Vermelho y el acarajé",
        "testo": "El barrio de la vida nocturna, donde las baianas fríen el acarajé en aceite de palma en la calle.",
        "come": "En app desde el centro o Barra.",
        "quando": "Noche.",
        "tempo": "Una velada",
        "consiglio": "Come el acarajé de las baianas, no en locales para turistas."
      },
      {
        "nome": "Farol da Barra",
        "testo": "El faro en la punta de la ciudad, con el atardecer sobre la bahía.",
        "come": "En app o bus desde Barra.",
        "quando": "Atardecer.",
        "tempo": "1-2 horas",
        "consiglio": "El primer atardecer en Salvador se mira desde aquí."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Pelourinho e Igreja de São Francisco",
          "Elevador Lacerda y Mercado Modelo",
          "Atardecer en el Farol da Barra"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: programa de 1 día",
          "Día 2: Igreja do Senhor do Bonfim, Solar do Unhão, noche en Rio Vermelho"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: roda de capoeira en una escuela del Pelourinho (preguntando antes) o paseo en barca por la Baía de Todos os Santos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pelourinho y Santo Antônio Além do Carmo",
        "perChi": "Quien quiere el centro histórico",
        "testo": "Pousadas en casas históricas. Vigilado de día, de noche se vacía."
      },
      {
        "nome": "Barra y Rio Vermelho",
        "perChi": "Quien busca el mar y la vida nocturna",
        "testo": "Más seguros por la noche, cerca de las playas y los restaurantes."
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
