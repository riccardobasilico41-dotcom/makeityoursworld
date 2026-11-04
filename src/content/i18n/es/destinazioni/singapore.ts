import type { Destinazione } from '@/lib/types'

export const destinazioniSingapore: Destinazione[] = [
  {
    slug: 'marina-bay',
    paeseSlug: 'singapore',
    ordine: 1,
    nome: 'Marina Bay y los Gardens',
    tipologia: ['architettura', 'città', 'panorami'],
    giorniConsigliati: '1 día, con la noche dedicada a los Gardens',
    visitataPersonalmente: true,
    introduzione:
      "La bahía construida sobre tierra ganada al mar, donde está todo lo que hace reconocible a Singapur: el hotel con el barco en el tejado, los Supertree de cincuenta metros de altura, los invernaderos climatizados y el museo con forma de flor de loto. Es la ciudad como quiere ser vista, y funciona.",
    percheAndarci:
      "Porque es uno de los experimentos urbanísticos más logrados de los últimos treinta años: una bahía entera proyectada desde cero que corría el riesgo de convertirse en un centro comercial al aire libre. En cambio aguanta, sobre todo después del atardecer.",
    cosaVedere: [
      "Los Supertree Grove de Gardens by the Bay, con el espectáculo de luces nocturno gratuito",
      "Los invernaderos Flower Dome y Cloud Forest, con la cascada cubierta más alta del mundo",
      "El Marina Bay Sands y su plataforma panorámica en el tejado",
      "El puente Helix y el Merlion, la estatua símbolo de la ciudad",
      "El ArtScience Museum, con forma de loto, en la punta de la bahía",
      "El paseo marítimo iluminado, que se recorre a pie por todo el contorno",
    ],
    cosaFare: [
      "Espectáculo de luces en los Supertree después del atardecer (véase la ficha de experiencia dedicada)",
      "Caminata completa alrededor de la bahía, unos 3,5 km, mejor en la hora azul",
      "Subida a un rooftop bar en vez de a la plataforma panorámica: se paga un cóctel y se tiene la misma vista",
      "Veladas en el Marina Barrage, el dique con el césped en el tejado donde los singapurenses hacen volar las cometas",
    ],
    doveDormire:
      "La zona es la más cara de la ciudad. Quien duerme aquí lo hace por la vista; quien quiere gastar menos se queda en Chinatown, Bugis o Geylang y llega aquí en metro en diez minutos, que es la opción razonable.",
    doveMangiare:
      "Es la parte de la ciudad donde se come peor en relación con el precio: los restaurantes de alrededor de la bahía están pensados para quien no se mueve. El consejo es comer en otro sitio y venir aquí después de cenar, o bien parar en el Satay by the Bay, el centro de hawkers dentro de los Gardens, que es la única opción a precios normales de la zona.",
    comeArrivare: "Metro: las paradas Bayfront, Marina Bay y Promenade sirven toda la zona. Desde el aeropuerto son unos 30 minutos en MRT.",
    comeSpostarsi:
      "Todo a pie, pero con una advertencia: el calor es serio y la sombra escasa. Los pasos subterráneos climatizados que conectan los centros comerciales son la verdadera red peatonal de la ciudad y merece la pena usarlos.",
    periodoMigliore:
      "todo el año, mejor de noche: hay luces, y de día la humedad en la bahía es pesada y el asfalto devuelve el calor.",
    costi:
      "la bahía, los Supertree y el espectáculo de luces son gratuitos; los invernaderos cuestan en torno a 30-50 SGD, la plataforma del Marina Bay Sands unos 30. Casi todo lo demás se ve sin pagar nada.",
    erroriDaEvitare: [
      "Pagar la plataforma panorámica del Marina Bay Sands: cuesta lo que un cóctel en el bar del mismo edificio, que tiene la misma vista y donde uno se sienta",
      "Ir a los Gardens a mitad del día, cuando hace muchísimo calor y no hay luces",
      "Saltarse los invernaderos pensando que son un jardín botánico cualquiera: el Cloud Forest, con la cascada cubierta de treinta metros, es lo más sorprendente de la zona",
      "Cenar alrededor de la bahía: se paga el doble por comer peor que en cualquier centro de hawkers",
    ],
    miaEsperienza:
      "Esperaba un lugar artificial, y en cambio Marina Bay funciona. Merece la pena entender por qué: la bahía está cerrada por un dique que ha transformado el agua de mar en una cuenca de agua dulce y ha resuelto la mitad del problema hídrico del país. Sabiéndolo, los Supertree dejan de ser árboles falsos y pasan a ser lo que son: torres de recogida de agua de lluvia y de ventilación para los invernaderos, con los paneles solares en lo alto. El espectáculo de luces nocturno es gratuito y dura unos quince minutos. Nos tumbamos en el césped bajo las torres junto a cientos de personas: es lo más bonito de la ciudad y no cuesta nada. El Cloud Forest, con la cascada de treinta metros dentro de una cúpula de cristal climatizada, es la otra sorpresa. La regla de toda la zona: no pagar por la vista desde arriba y pedir un cóctel en el bar del mismo rascacielos.",
    luoghi: [
      {
        nome: "Supertree Grove de Gardens by the Bay",
        testo: "Dieciocho estructuras con forma de árbol de hasta cincuenta metros, cubiertas de plantas y con paneles solares. Realmente sirven para ventilar los invernaderos y recoger el agua de lluvia. Por la noche se iluminan con un espectáculo de luces gratuito.",
        come: "MRT hasta Bayfront y luego un pasaje cubierto que lleva a los jardines. El bosque de Supertrees se recorre por libre y sin entrada; la pasarela elevada (OCBC Skyway) se paga aparte.",
        quando: "Después del atardecer para el espectáculo de luces, que dura unos quince minutos y se repite dos veces cada noche. Los horarios exactos están en la web oficial.",
        tempo: "1 hora y media",
        costo: "entrada a los jardines y al espectáculo gratuitas",
        url: "https://www.gardensbythebay.com.sg/",
        consiglio: "Tumbarse en el césped bajo las torres, como hacen los singapurenses, y ver el espectáculo desde el suelo."
      },
      {
        nome: "Cloud Forest y Flower Dome",
        testo: "Dos invernaderos climatizados. En el Cloud Forest una montaña cubierta de helechos y orquídeas tiene una cascada de treinta metros en el centro; el Flower Dome recrea un clima mediterráneo con olivos y baobabs.",
        come: "Dentro de Gardens by the Bay, a pocos minutos a pie de los Supertrees. Entrada separada para cada invernadero y recorrido de sentido único.",
        quando: "Por la mañana, cuando hay menos gente y fuera hace menos calor. Con lluvia son el refugio ideal.",
        tempo: "1 hora por invernadero",
        consiglio: "Si se elige uno solo, el Cloud Forest: es lo más sorprendente de la zona."
      },
      {
        nome: "Marina Bay Sands y el bar de la azotea",
        testo: "El hotel con un barco de 340 metros sobre tres torres es el símbolo de la ciudad. La plataforma panorámica de la azotea ofrece una vista de 360 grados sobre la bahía y el puerto.",
        come: "MRT hasta Bayfront; el centro comercial conecta directamente con las torres. Para subir se puede pagar la plataforma o ir al bar de la azotea, donde se consume una bebida.",
        quando: "Al atardecer, con la ciudad encendiéndose.",
        tempo: "1 hora",
        consiglio: "Mejor un cóctel en el bar de la azotea del mismo edificio que la entrada a la plataforma: la vista es la misma y te sientas."
      },
      {
        nome: "Helix Bridge, Merlion y paseo marítimo",
        testo: "El puente peatonal de doble hélice, inspirado en el ADN, es la mejor forma de cruzar la bahía. El Merlion, mitad león y mitad pez, es la estatua símbolo de la ciudad; es pequeña, pero el fondo es el adecuado.",
        come: "A pie desde el Marina Bay Sands o Esplanade. El recorrido completo de la bahía mide unos 3,5 kilómetros.",
        quando: "A la hora azul, cuando se encienden las luces pero queda algo de cielo.",
        tempo: "1 hora y media para el recorrido completo",
        costo: "gratuito",
        consiglio: "Hacer el recorrido en sentido horario empezando por el Merlion, para llegar a los Gardens con las luces ya encendidas."
      },
      {
        nome: "ArtScience Museum",
        testo: "El museo con forma de flor de loto en la punta de la bahía acoge exposiciones temporales de arte, ciencia y tecnología, a menudo inmersivas. El programa cambia, así que conviene ver qué hay.",
        come: "A pie desde el Marina Bay Sands, frente a la bahía.",
        quando: "En las horas de más calor, porque es interior y está climatizado.",
        tempo: "1 hora y media",
        consiglio: "Mirar el programa antes de decidir: se paga por las exposiciones, no por el edificio."
      },
      {
        nome: "Marina Barrage",
        testo: "La presa que cerró la bahía y convirtió el agua de mar en un embalse de agua dulce. En la azotea hay un césped donde los singapurenses vuelan cometas.",
        come: "MRT hasta Marina Bay y luego unos minutos en autobús o taxi. Una parada tranquila, lejos de las multitudes.",
        quando: "Al atardecer, con el skyline enfrente.",
        tempo: "1 hora",
        costo: "gratuito",
        consiglio: "Llevar una cometa, o simplemente una manta y algo de beber."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Primera hora de la mañana: Helix Bridge, Merlion y paseo por la bahía",
          "Media mañana: Cloud Forest y Flower Dome, con fresco",
          "Almuerzo en el Satay by the Bay o en un centro hawker fuera de la zona",
          "Tarde: ArtScience Museum o descanso en el hotel durante las horas de calor",
          "Atardecer: cóctel en el bar de la azotea del Marina Bay Sands",
          "Noche: espectáculo de luces de los Supertrees, tumbados en el césped"
        ]
      },
      {
        titolo: "Medio día",
        tappe: [
          "Última hora de la tarde: paseo marítimo y Helix Bridge",
          "Atardecer en el Marina Barrage",
          "Noche: espectáculo de luces en los Supertrees"
        ]
      }
    ],
    zone: [
      {
        nome: "Marina Bay",
        perChi: "quien quiere la vista y no mira el precio",
        testo: "Hoteles de gama alta alrededor de la bahía. La vista es excepcional, pero los precios son los más altos de la ciudad y los restaurantes están pensados para quien no se mueve."
      },
      {
        nome: "Chinatown y Tanjong Pagar",
        perChi: "quien quiere ahorrar sin salir del centro",
        testo: "A diez minutos de la bahía en metro. Muy cerca de centros hawker, bares y restaurantes, y bastante más barato."
      },
      {
        nome: "Bugis y Kampong Glam",
        perChi: "quien busca vida nocturna y buena relación calidad-precio",
        testo: "Barrio animado, con mucha oferta de alojamiento y conexión directa con la bahía. Algo ruidoso los fines de semana."
      }
    ],
    sapori: [
      {
        nome: "Satay",
        testo: "Brochetas de carne marinada a la brasa con salsa de cacahuete. En el Satay by the Bay, dentro de los Gardens, se comen a precios normales."
      },
      {
        nome: "Chilli crab",
        testo: "Cangrejo en una salsa espesa de chile y huevo, que se come con las manos y con pan frito para mojar. Es el plato símbolo de la ciudad y se encuentra en restaurantes de marisco, no en los centros hawker más baratos."
      },
      {
        nome: "Kaya toast con huevos y café",
        testo: "El desayuno tradicional: pan tostado con mermelada de coco y huevos poco hechos que se mezclan con salsa de soja. Se toma en las cafeterías de siempre, incluso cerca de la bahía."
      },
      {
        nome: "Chicken rice",
        testo: "Pollo hervido con arroz cocido en el caldo y salsa de jengibre. El plato nacional no oficial; mejor en los centros hawker que en los locales de alrededor de la bahía."
      }
    ],
    attenzioni: [
      "El calor es serio entre las once y las tres. Conviene moverse por la mañana y por la noche y usar los pasajes cubiertos y climatizados entre centros comerciales.",
      "Las normas son estrictas y se aplican: multas por tirar basura, fumar fuera de las zonas permitidas o cruzar fuera de los pasos. Los cigarrillos electrónicos están prohibidos.",
      "El Merlion y los puntos más fotografiados están llenos de gente: llevar la cartera en un bolsillo delantero, aunque los robos son raros.",
      "Cenar alrededor de la bahía cuesta mucho más por un plato mediocre: en diez minutos de metro se come mejor por un tercio del precio."
    ],
    esperienzeSlugs: ['gardens-by-the-bay'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "Las tres torres del Marina Bay Sands asomadas al agua de la bahía, Singapur",
    immagine: '/images/singapore/marina-bay.jpg',
  },
  {
    slug: 'quartieri-etnici',
    paeseSlug: 'singapore',
    ordine: 2,
    nome: 'Chinatown, Little India y Kampong Glam',
    tipologia: ['cultura', 'gastronomia', 'città'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      "Los tres barrios históricos de las comunidades que han hecho Singapur, cada uno con su propio templo o mezquita, su propia cocina y su propio ritmo. Aquí la ciudad deja de parecer un proyecto.",
    percheAndarci:
      "Porque son lo que queda cuando se quita el skyline: shophouses de dos plantas, tiendas, templos en funcionamiento, y los centros de hawkers donde se come por tres euros una cocina que en otros sitios sería de restaurante.",
    cosaVedere: [
      "El Buddha Tooth Relic Temple y el Sri Mariamman, el templo hindú más antiguo de la ciudad, ambos en Chinatown",
      "El Maxwell Food Centre y el Chinatown Complex, los dos centros de hawkers históricos",
      "El templo Sri Veeramakaliamman y las calles de tejidos y especias de Little India",
      "El Tekka Centre, el mercado cubierto de Little India",
      "La mezquita Sultan en Kampong Glam y las casas de colores de Haji Lane",
      "El barrio de Tiong Bahru, con la arquitectura racionalista de los años treinta y su mercado",
    ],
    cosaFare: [
      "Comida o cena en un centro de hawkers, la manera correcta de comer en esta ciudad (véase la ficha de experiencia dedicada)",
      "Caminar los tres barrios en secuencia, que están a pocas paradas de metro uno de otro",
      "Desayuno con kaya toast y huevo pasado por agua, que es el rito matutino local",
      "Una noche en Haji Lane, entre murales y locales pequeños, que es la zona menos institucional de la ciudad",
    ],
    doveDormire:
      "Chinatown y Bugis son las mejores zonas en relación calidad-precio: céntricas, servidas por el metro y mucho más económicas que Marina Bay. Little India tiene los precios más bajos con diferencia.",
    doveMangiare:
      "Aquí se come, y se come en un centro de hawkers. El pollo de Hainan con el arroz cocido en el caldo es el plato nacional; luego el laksa de Katong con leche de coco, el char kway teow, el chilli crab (que cuesta mucho más y se come en otro sitio, junto al mar), el roti prata y el teh tarik en Little India, el nasi padang en Kampong Glam. La regla: la cola más larga indica el mejor puesto, y uno se pone en la fila.",
    comeArrivare: "Metro: Chinatown, Little India y Bugis tienen todas su parada, a pocas estaciones de distancia.",
    comeSpostarsi: "A pie dentro de cada barrio, en MRT entre uno y otro. Están todos en un radio de tres kilómetros.",
    periodoMigliore:
      "todo el año. Los momentos especiales son el Año Nuevo chino en Chinatown, el Deepavali en Little India y el Hari Raya en Kampong Glam, cuando los respectivos barrios se iluminan. En el Año Nuevo chino, sin embargo, muchos puestos de hawkers de gestión familiar cierran durante días.",
    costi:
      "casi nulos: los barrios se caminan, los templos son gratuitos o casi, y una comida completa en un centro de hawkers está entre 3 y 6 euros. Es el Singapur que se puede hacer con poco dinero.",
    erroriDaEvitare: [
      "Comer en los restaurantes con aire acondicionado y menú ilustrado cuando a cincuenta metros hay un centro de hawkers: se paga el triple por un plato peor",
      "Ir a Chinatown solo por la calle de los souvenirs, que es la parte menos interesante del barrio",
      "Olvidar las reglas en los templos: hombros y rodillas cubiertos, zapatos fuera donde se indique",
      "Salir a mediodía: entre las once y las tres el calor es pesado, y es también la hora punta en los centros de hawkers",
    ],
    miaEsperienza:
      "Este es el Singapur que hace cambiar de idea a quien lo cree solo una ciudad de rascacielos y reglas. Los centros de hawkers son la invención cívica más lograda del país: en los años setenta el gobierno sacó a los vendedores ambulantes de la calle por razones de higiene. En vez de eliminarlos, los puso a todos bajo cobertizos con agua corriente y licencias, y hoy se come una cocina extraordinaria por tres euros, sentado en mesas compartidas, en un lugar que cualquiera se puede permitir. Para orientarse el sistema es trivial y funciona: siempre mirábamos qué puesto tenía cola y nos poníamos en la fila. Caminando entre Chinatown, Little India y Kampong Glam en la misma tarde, me llamó la atención lo poco que se parecen: cambian los olores, la música, la lengua que se oye por la calle, y están a dos paradas de metro de distancia. El detalle local que hay que conocer: en las mesas se encuentran paquetes de pañuelos apoyados solos. Es el «chope», la manera de reservar el sitio, y no se mueve.",
    luoghi: [
      {
        nome: "Buddha Tooth Relic Temple",
        testo: "Templo budista de estilo Tang en Chinatown, construido en 2007 para conservar una reliquia atribuida a Buda. Por dentro es suntuoso, con dorados y una gran estupa de oro. El barrio de alrededor ha sido reconstruido en parte.",
        come: "MRT hasta Chinatown. La entrada es gratuita, con hombros y rodillas cubiertos. Algunas salas están reservadas.",
        quando: "Por la mañana, cuando el templo está más tranquilo.",
        tempo: "45 minutos",
        costo: "entrada gratuita",
        consiglio: "Subir a la azotea, donde hay un jardín con una gran rueda de oración."
      },
      {
        nome: "Sri Mariamman Temple",
        testo: "El templo hindú más antiguo de la ciudad, fundado en 1827 y dedicado a la diosa Mariamman. La torre de entrada está cubierta de figuras esculpidas y pintadas.",
        come: "A pocos pasos de la parada de Chinatown. Zapatos fuera donde se indique.",
        quando: "Por la mañana, o durante las fiestas hindúes cuando el templo está lleno de fieles.",
        tempo: "30 minutos",
        costo: "entrada gratuita",
        consiglio: "Comprobar antes si hay una ceremonia: el templo cambia por completo."
      },
      {
        nome: "Maxwell Food Centre y Chinatown Complex",
        testo: "Dos de los centros hawker más concurridos del barrio, con decenas de puestos bajo un mismo techo. Es la forma más rápida de entender cómo se come en Singapur.",
        come: "A pie desde Chinatown o la parada de Maxwell. Se elige el puesto, se pide, se busca una mesa compartida y luego se recoge el plato.",
        quando: "Almuerzo y cena son las horas punta, con colas. A media mañana o a última hora de la tarde se come con más calma.",
        tempo: "1 hora",
        consiglio: "Ponerse en la cola más larga: es el método más fiable."
      },
      {
        nome: "Sri Veeramakaliamman Temple y las calles de Little India",
        testo: "El templo dedicado a la diosa Kali, en una calle de tiendas de saris, guirnaldas de flores, especias y oro. Little India es el barrio con más colores y aromas de la ciudad.",
        come: "MRT hasta Little India. A pie entre Serangoon Road, Campbell Lane y las calles laterales. Zapatos fuera en el templo.",
        quando: "Última hora de la tarde y noche, cuando las tiendas están abiertas y el barrio está más vivo. Durante el Deepavali se ilumina para la fiesta.",
        tempo: "2 horas",
        consiglio: "Buscar el Tekka Centre, el mercado cubierto con el centro hawker en la planta alta, para una comida india barata."
      },
      {
        nome: "Sultan Mosque y Haji Lane",
        testo: "La gran mezquita de cúpula dorada es el centro de Kampong Glam, el barrio malayo-árabe. Las calles de alrededor, Arab Street y Haji Lane, tienen telas, perfumes, cafés y murales.",
        come: "MRT hasta Bugis y luego unos minutos a pie. La mezquita se visita fuera de las horas de oración, con ropa larga y la cabeza cubierta para las mujeres; prestan prendas.",
        quando: "Por la mañana la mezquita; última hora de la tarde las calles.",
        tempo: "1 hora y media",
        consiglio: "Comprobar los horarios de oración antes de subir, porque la visita se interrumpe durante la oración."
      },
      {
        nome: "Tiong Bahru",
        testo: "El barrio residencial más antiguo de la ciudad, con edificios racionalistas curvos de los años treinta, cafés independientes y el mercado con su centro hawker.",
        come: "MRT hasta Tiong Bahru y a pie. El barrio es pequeño y se recorre en una hora.",
        quando: "Por la mañana, para el mercado y el desayuno.",
        tempo: "1 hora",
        consiglio: "Comer en el centro hawker de la planta alta del mercado, donde los puestos son muy frecuentados por los vecinos."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Buddha Tooth Relic Temple y Sri Mariamman en Chinatown",
          "Almuerzo en el Maxwell Food Centre",
          "Primera hora de la tarde: pausa climatizada o Tiong Bahru",
          "Última hora de la tarde: Little India, con el templo y las calles de las flores",
          "Noche: cena india en el Tekka Centre o las calles de alrededor"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Chinatown, Maxwell Food Centre, Tiong Bahru y Little India por la noche",
          "Día 2: mañana en la Sultan Mosque, Arab Street y Haji Lane; almuerzo en Bugis; tarde libre",
          "Noche: cena en otro centro hawker a elegir"
        ]
      }
    ],
    zone: [
      {
        nome: "Chinatown y Tanjong Pagar",
        perChi: "quien quiere estar cerca de los centros hawker y del centro",
        testo: "Hostales y hoteles de gama media, muchos bares y restaurantes. Algo de vida nocturna, pero las noches siguen siendo llevaderas."
      },
      {
        nome: "Little India y Farrer Park",
        perChi: "quien quiere ahorrar y comer comida india",
        testo: "Alojamiento de los más baratos de la ciudad, con muy buena comida cerca. Las calles son animadas y el ruido no falta."
      },
      {
        nome: "Kampong Glam y Bugis",
        perChi: "quien quiere locales y comodidad",
        testo: "Mucha oferta de hoteles y hostales, conexión directa con la bahía. Los fines de semana la zona está llena de gente."
      }
    ],
    sapori: [
      {
        nome: "Chicken rice",
        testo: "Pollo hervido con arroz en caldo de pollo y salsa de jengibre y chile. Se come en cualquier centro hawker; el Maxwell Food Centre es famoso por esto."
      },
      {
        nome: "Laksa",
        testo: "Fideos de arroz en caldo de coco especiado con gambas y berberechos. Se encuentra en los puestos de cocina peranakan y malaya, también en Kampong Glam."
      },
      {
        nome: "Roti prata",
        testo: "Torta india plana, crujiente por fuera y suave por dentro, que se moja en curry. Se encuentra en Little India y en restaurantes de cocina del sur de la India."
      },
      {
        nome: "Biryani y banana leaf",
        testo: "En Little India, la comida tradicional sobre una hoja de plátano, con arroz, currys vegetales y carne. Se come con la mano derecha."
      }
    ],
    attenzioni: [
      "Hombros y rodillas cubiertos en templos y mezquita, zapatos fuera donde se indique. Algunas salas están vetadas a los no fieles.",
      "Los puestos más famosos tienen colas muy largas a la hora de comer: ir pronto o fuera de horas. Muchos cierran cuando se les acaban los ingredientes.",
      "No tirar basura en la calle ni fumar fuera de las zonas permitidas: las multas existen y son altas.",
      "Durante el Año Nuevo chino muchos puestos familiares cierran durante días: si se viaja entonces, comprobarlo antes."
    ],
    esperienzeSlugs: ['hawker-centre'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "Trengganu Street en Chinatown, con las shophouses y los farolillos rojos, Singapur",
    immagine: '/images/singapore/quartieri-etnici.jpg',
  },
  {
    slug: 'natura-singapore',
    paeseSlug: 'singapore',
    ordine: 3,
    nome: 'El Singapur verde',
    tipologia: ['natura', 'parchi', 'fauna selvatica'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione:
      "La parte que casi nadie incluye en el programa: un jardín botánico patrimonio de la UNESCO, una reserva de selva primaria en medio de la isla, senderos elevados entre las copas y una isla sin coches donde se pedalea entre las casas de madera.",
    percheAndarci:
      "Porque desmonta la idea de que Singapur es solo cemento: casi la mitad del territorio está cubierta de verde, el plan urbanístico se llama precisamente «ciudad en un jardín», y a veinte minutos de metro del centro financiero hay monos y varanos.",
    cosaVedere: [
      "Los Singapore Botanic Gardens, patrimonio de la UNESCO, con el National Orchid Garden",
      "La Bukit Timah Nature Reserve, selva pluvial primaria alrededor de la colina más alta de la isla",
      "El MacRitchie Reservoir con el TreeTop Walk, la pasarela suspendida sobre la selva",
      "La isla de Pulau Ubin, diez minutos en barca, sin coches, con las últimas casas de madera del kampong",
      "El Southern Ridges, el recorrido de puentes peatonales entre las colinas del sur, con el Henderson Waves",
    ],
    cosaFare: [
      "Caminar el sendero de MacRitchie hasta el TreeTop Walk, unos 10 km en circuito",
      "Día en bicicleta en Pulau Ubin, con la laguna de Chek Jawa",
      "Botanic Gardens a la apertura, cuando está lleno de gente del lugar que corre y hace tai chi",
      "Southern Ridges al atardecer, caminando por el Henderson Waves",
    ],
    doveDormire: "Ninguna de estas zonas es una base sensata: se duerme en el centro y se llega en metro o con un trayecto corto.",
    doveMangiare:
      "No hay oferta dentro de las reservas, salvo algún quiosco: se lleva agua en abundancia, porque el calor húmedo en los senderos es serio. En Pulau Ubin hay un par de restaurantes de pescado en el pueblo del muelle, sencillos y correctos así.",
    comeArrivare:
      "Botanic Gardens y MacRitchie tienen paradas de metro o se alcanzan en pocos minutos de trayecto; para Pulau Ubin se va a Changi Point y se coge un bumboat, que sale cuando tiene doce pasajeros a bordo.",
    comeSpostarsi: "A pie en las reservas, en bicicleta en Pulau Ubin (se alquila en el muelle).",
    periodoMigliore:
      "todo el año, a primera hora de la mañana. Pasadas las diez el calor y la humedad hacen los senderos mucho más pesados de lo que la distancia hace pensar.",
    costi: "todo gratuito, incluidos Botanic Gardens, MacRitchie y Pulau Ubin; solo el National Orchid Garden tiene una entrada de pocos dólares.",
    erroriDaEvitare: [
      "Subestimar el clima: diez kilómetros en MacRitchie con esta humedad valen el doble, y a lo largo del recorrido no se compra agua",
      "Acercarse a los macacos o comer delante de ellos: en MacRitchie y Bukit Timah están acostumbrados a los humanos y arrebatan los bolsos",
      "Llegar al TreeTop Walk demasiado tarde: la pasarela tiene horario de cierre y se recorre en una sola dirección",
      "Considerar Pulau Ubin una excursión opcional: es el lugar donde se ve cómo era Singapur antes de 1965, y ya no existe en ningún otro sitio",
    ],
    miaEsperienza:
      "Es la parte de Singapur que da la vuelta a la idea que uno se hace antes de llegar. A veinte minutos de metro de la bahía de los rascacielos hay una selva pluvial de verdad, con los macacos en los senderos y los varanos que cruzan delante, y el TreeTop Walk de MacRitchie es una pasarela suspendida sobre las copas que nadie asocia con esta ciudad. Los Botanic Gardens a primera hora de la mañana son la escena más bonita y menos turística de todas: gente del lugar que corre, grupos de ancianos que hacen tai chi bajo los árboles, familias en los prados. Un parque usado, más que visitado. El lugar que vale más que todos, sin embargo, es Pulau Ubin: diez minutos en una barca de madera que sale solo cuando tiene doce pasajeros, y se desembarca en una isla sin coches, con las casas de madera sobre pilotes, los senderos de tierra y las bicicletas de alquiler. Es como era Singapur antes de 1965, y solo ha quedado allí. Vale como contrapeso a todo lo demás, y cuesta lo que el transbordador.",
    luoghi: [
      {
        nome: "Singapore Botanic Gardens",
        testo: "Jardín botánico de época colonial, Patrimonio de la Humanidad de la UNESCO desde 2015. Prados, lagos, selva tropical residual y el National Orchid Garden, con miles de orquídeas, en su mayoría de pago.",
        come: "MRT hasta Botanic Gardens (línea Downtown), con entrada directa desde la estación. Se visita por libre.",
        quando: "Al amanecer o a primera hora de la mañana, cuando los vecinos corren y hacen tai chi bajo los árboles.",
        tempo: "2 horas",
        costo: "entrada gratuita a los jardines; el National Orchid Garden tiene una entrada aparte",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Llegar antes de las ocho: después el calor pesa y el jardín pierde lo mejor."
      },
      {
        nome: "MacRitchie Reservoir y TreeTop Walk",
        testo: "Un embalse rodeado de selva tropical con senderos y una pasarela colgante a 25 metros que cruza las copas. Macacos, varanos y ardillas por los caminos.",
        come: "Autobús desde la MRT de Caldecott o Marymount hasta la entrada. La pasarela solo se alcanza a pie, con un recorrido de unos 11 kilómetros ida y vuelta desde la orilla principal.",
        quando: "A primera hora de la mañana, por el fresco y para llegar a tiempo: el TreeTop Walk tiene horario de apertura y se recorre en un solo sentido.",
        tempo: "3-4 horas",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Llevar mucha agua: no hay tiendas en el recorrido."
      },
      {
        nome: "Bukit Timah Nature Reserve",
        testo: "Selva tropical primaria alrededor de la colina más alta de la isla, 163 metros. Una de las pocas áreas de bosque primario que quedan en Singapur, con macacos y aves.",
        come: "Autobús desde la MRT de Beauty World. Senderos señalizados de varias longitudes, con escaleras y pendientes.",
        quando: "A primera hora de la mañana.",
        tempo: "2-3 horas",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Mantener las bolsas cerradas y la comida fuera de la vista: los macacos arrebatan todo."
      },
      {
        nome: "Pulau Ubin",
        testo: "Isla a diez minutos en barca, donde aún viven unas pocas familias en las casas de madera del antiguo kampong. No hay coches: se alquila una bici y se anda entre manglares, antiguas canteras y senderos.",
        come: "Bumboat desde el terminal de Changi Point Ferry. La barca sale cuando tiene doce pasajeros. Bicis de alquiler en la isla.",
        quando: "Por la mañana. La última barca de vuelta es por la tarde: comprobar el horario al llegar.",
        tempo: "medio día",
        consiglio: "Alquilar una bici e ir hacia Chek Jawa, la zona húmeda con la pasarela sobre el mar."
      },
      {
        nome: "Southern Ridges y Henderson Waves",
        testo: "Un recorrido de diez kilómetros entre parques unidos por pasarelas elevadas. Henderson Waves es el puente peatonal más alto de Singapur, con forma ondulada de madera.",
        come: "MRT hasta Labrador Park o Harbourfront. El recorrido se hace por tramos y se puede interrumpir en varios puntos.",
        quando: "Por la mañana o al atardecer. A mediodía no hay sombra.",
        tempo: "2-3 horas",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Hacer el tramo Henderson Waves - Forest Walk, el más sugerente, y terminar en el Mount Faber."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Amanecer: Botanic Gardens, con desayuno en una de las cafeterías del parque",
          "Media mañana: MRT y autobús a MacRitchie, TreeTop Walk",
          "Almuerzo en un centro hawker de Toa Payoh o Bishan",
          "Tarde: descanso al fresco",
          "Atardecer: Henderson Waves y Southern Ridges"
        ]
      },
      {
        titolo: "Día alternativo: Pulau Ubin",
        tappe: [
          "Primera hora de la mañana: bumboat desde Changi Point",
          "Paseo en bici hasta Chek Jawa",
          "Almuerzo en la única cafetería de la isla",
          "Regreso por la tarde, antes del calor máximo"
        ]
      }
    ],
    zone: [
      {
        nome: "Orchard y Newton",
        perChi: "quien quiere estar cerca de los Botanic Gardens",
        testo: "Hoteles y centros comerciales, a pocos minutos de los jardines en MRT. Cómodo y caro."
      },
      {
        nome: "Alrededores de Bishan o Toa Payoh",
        perChi: "quien quiere vivir como los residentes",
        testo: "Barrios residenciales con excelentes centros hawker y precios bajos; pocos hoteles, pero hay apartamentos."
      }
    ],
    sapori: [
      {
        nome: "Nasi lemak",
        testo: "Arroz con coco, anchoas fritas, huevo, pepino y sambal. Un desayuno en los centros hawker."
      },
      {
        nome: "Carrot cake",
        testo: "No es el dulce: es una tortilla salada de daikon y arroz, salteada en la versión blanca o negra. Se come en los centros hawker."
      },
      {
        nome: "Kopi y teh",
        testo: "Café y té con leche condensada, que se piden con un código propio (kopi-o, kopi-c, teh-peng). Se pide en el mostrador."
      },
      {
        nome: "Ice kachang",
        testo: "Hielo picado con judías dulces, gelatinas, maíz y sirope de colores. El postre de los días calurosos."
      }
    ],
    attenzioni: [
      "El clima es el obstáculo principal: después de las diez el calor y la humedad hacen los senderos mucho más duros de lo que sugiere la distancia. Agua y salida al amanecer.",
      "Los macacos de MacRitchie y Bukit Timah arrebatan bolsas y comida. No enseñar comida, no mirarlos a los ojos, no darles nada.",
      "No salir de los senderos señalizados ni llevarse nada de la reserva: hay multas para quien lo hace.",
      "Llevar efectivo para Pulau Ubin: en la isla las tarjetas no siempre funcionan."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "Un sendero entre plantas tropicales y palmeras en los Singapore Botanic Gardens",
    immagine: '/images/singapore/natura-singapore.jpg',
  },
  {
    slug: 'sentosa',
    paeseSlug: 'singapore',
    ordine: 4,
    nome: 'Sentosa y el sur',
    tipologia: ['mare', 'famiglia', 'parchi'],
    giorniConsigliati: 'media jornada o un día entero con los parques',
    visitataPersonalmente: true,
    introduzione:
      "La isla del sur, conectada por un puente, un monorraíl y un teleférico: playas artificiales, parques temáticos, acuario y el punto más meridional de Asia continental, una pasarela peatonal sobre un islote, con su cartel y todo.",
    percheAndarci:
      "Por los parques, si se viaja con niños, y por el teleférico sobre el puerto, que es la mejor manera de ver lo grande que es el tráfico marítimo que pasa por aquí: Singapur es uno de los puertos más transitados del planeta y desde allí arriba se cuentan por decenas los barcos fondeados.",
    cosaVedere: [
      "Universal Studios Singapore y el S.E.A. Aquarium en Resorts World",
      "Las playas de Siloso, Palawan y Tanjong, artificiales pero equipadas",
      "El teleférico Mount Faber-Sentosa, sobre el puerto",
      "El Fort Siloso, la única fortificación costera británica conservada, con la historia de la caída de Singapur en 1942",
      "El punto más meridional de Asia continental, en el islote conectado por un puente colgante en Palawan Beach",
    ],
    cosaFare: [
      "Teleférico desde Mount Faber, que es la manera correcta de llegar",
      "Día en los parques, si hay niños o si llueve",
      "Caminar el Southern Ridges hasta Mount Faber y luego bajar a Sentosa en teleférico",
      "Fort Siloso, que es gratuito y cuenta la parte de historia que la isla suele no mostrar",
    ],
    doveDormire: "Los hoteles de Sentosa son caros y están aislados del resto de la ciudad: solo tiene sentido para quien pasa varios días en los parques con niños.",
    doveMangiare:
      "La oferta de la isla es toda a precios de parque temático. El consejo es comer antes o después, en VivoCity, el centro comercial de donde sale el monorraíl, que tiene un food court normal en la planta alta.",
    comeArrivare:
      "Monorraíl desde VivoCity (parada MRT HarbourFront), teleférico desde Mount Faber o a pie por el puente peatonal, que es gratuito y dura diez minutos.",
    comeSpostarsi: "Lanzaderas internas gratuitas, monorraíl y muchas caminatas: la isla es larga y los puntos de interés están distantes entre sí.",
    periodoMigliore: "todo el año. En fin de semana y en las vacaciones escolares la isla está muy llena de residentes.",
    costi:
      "el acceso a la isla a pie es gratuito, el monorraíl cuesta pocos dólares; el gasto de verdad son los parques: Universal Studios y el acuario tienen precios de parque internacional.",
    erroriDaEvitare: [
      "Esperar playas: son artificiales, con arena importada, y enfrente está la rada de los petroleros. Hay que tomarlas por lo que son",
      "Pagar el monorraíl a la ida: el puente peatonal es gratuito, cubierto y se tardan diez minutos",
      "Programar un día entero si no se va a ir a los parques: media jornada basta y sobra",
      "Ir en fin de semana, cuando la mitad de Singapur está allí",
    ],
    miaEsperienza:
      "Sentosa es la parada en la que merece la pena ser honesto: es una isla de entretenimiento, con playas artificiales de arena importada que miran a una rada llena de petroleros en espera. Quien va buscando el mar vuelve perplejo. Con niños, o en un día de lluvia, los parques y el acuario son excelentes y lo justifican todo. Para todos los demás, las dos cosas que hacen el viaje son otras: el teleférico desde Mount Faber, que pasa sobre el puerto y permite ver cuántos barcos hay fondeados (Singapur es uno de los puertos más transitados del mundo y desde arriba se entiende lo que significa), y el Fort Siloso, gratuito, con los cañones apuntando al mar y la historia de cómo la ciudad cayó en manos japonesas en 1942, por tierra, mientras la artillería miraba hacia el lado equivocado. Por esas dos cosas la media jornada merece la pena.",
    luoghi: [
      {
        nome: "Fort Siloso",
        testo: "La única fortificación costera británica conservada en Singapur, con túneles, cañones y figuras de cera. Cuenta la caída de la ciudad en 1942, cuando los cañones apuntaban al mar y los japoneses llegaron por tierra.",
        come: "Dentro de Sentosa, en el extremo occidental. Se llega con el autobús interno o a pie desde Siloso Beach. Recorrido a pie con escaleras y túneles.",
        quando: "Por la mañana, antes del calor.",
        tempo: "1 hora y media",
        costo: "gratuito",
        url: "https://www.sentosa.com.sg/",
        consiglio: "Subir a las plataformas de los cañones: la vista sobre la rada y los petroleros explica el tráfico del puerto."
      },
      {
        nome: "Teleférico Mount Faber - Sentosa",
        testo: "Cabinas suspendidas que cruzan el puerto desde Mount Faber hasta la isla, con vistas a los barcos fondeados. Singapur es uno de los puertos más transitados del mundo y desde aquí se ve.",
        come: "MRT hasta HarbourFront y luego subir al Mount Faber o tomar el teleférico directamente desde VivoCity. Billete de pago.",
        quando: "Al atardecer.",
        tempo: "1 hora",
        consiglio: "Cogerlo en un solo sentido y volver a pie o en monorraíl."
      },
      {
        nome: "Siloso, Palawan y Tanjong Beach",
        testo: "Playas creadas con arena importada, con bares, juegos y una vista a la rada donde esperan los petroleros. Palawan es la más adecuada para niños; Tanjong, la más tranquila.",
        come: "Con el autobús o el monorraíl interno desde Sentosa Station.",
        quando: "Por la mañana y entre semana. Los fines de semana están llenas de residentes.",
        tempo: "2 horas",
        consiglio: "No esperar el mar: venir por la relajación de un día de lluvia o con niños."
      },
      {
        nome: "Universal Studios y S.E.A. Aquarium",
        testo: "El parque temático y uno de los acuarios más grandes del mundo, en Resorts World Sentosa. Precios de parque internacional.",
        come: "Se llega en monorraíl desde VivoCity, parada Resorts World. Entradas online.",
        quando: "Entre semana; los fines de semana están muy llenos.",
        tempo: "día completo para el parque, 2 horas para el acuario",
        url: "https://www.sentosa.com.sg/",
        consiglio: "Reservar online para saltarse la cola de taquilla."
      },
      {
        nome: "Punto más meridional de Asia continental",
        testo: "Un islote frente a Palawan Beach, unido por un puente colgante, presentado como el punto más meridional de Asia continental. Un tramo simbólico con vista al mar.",
        come: "A pie desde Palawan Beach, por un puente de pocos minutos.",
        quando: "Al atardecer.",
        tempo: "20 minutos",
        costo: "gratuito",
        consiglio: "Antes de convertirlo en una parada, recordar que es un hito turístico más que un lugar natural."
      }
    ],
    programmi: [
      {
        titolo: "Medio día",
        tappe: [
          "Mañana: puente peatonal desde VivoCity, Fort Siloso",
          "Siloso Beach para una pausa",
          "Regreso en teleférico de Sentosa al Mount Faber, al atardecer"
        ]
      },
      {
        titolo: "1 día con los parques",
        tappe: [
          "Apertura: Universal Studios, primero las atracciones más pedidas",
          "Almuerzo en Resorts World o en el centro hawker de VivoCity",
          "Tarde: S.E.A. Aquarium",
          "Atardecer: playa de Palawan y el punto más al sur"
        ]
      }
    ],
    zone: [
      {
        nome: "Dentro de Sentosa",
        perChi: "familias que quieren quedarse junto a los parques",
        testo: "Resorts de gama alta, cómodos para los parques pero lejos de la vida urbana y de los centros hawker."
      },
      {
        nome: "HarbourFront y VivoCity",
        perChi: "quien quiere estar cerca sin pagar los precios de la isla",
        testo: "Hoteles de gama media frente al centro comercial, con conexión directa a Sentosa a pie o en monorraíl."
      }
    ],
    sapori: [
      {
        nome: "Centro hawker de VivoCity",
        testo: "El sitio más cómodo para comer antes o después de la isla, con especialidades locales a precios muy inferiores a los de Sentosa."
      },
      {
        nome: "Pescado a la parrilla (BBQ stingray)",
        testo: "Raya cocinada a la brasa con sambal, un plato de centro hawker. No está en Sentosa: se encuentra en los centros del continente."
      },
      {
        nome: "Cendol",
        testo: "Postre de hielo picado, leche de coco, almíbar de palma y gelatinas verdes. Se encuentra en los centros hawker."
      },
      {
        nome: "Satay",
        testo: "Brochetas a la brasa con salsa de cacahuete, también en los quioscos de la isla pero a precios más altos."
      }
    ],
    attenzioni: [
      "El puente peatonal desde VivoCity es gratuito y cubierto, y se tarda diez minutos: el monorraíl a la ida no hace falta.",
      "Pagar en taquilla la entrada de un parque sin mirar las ofertas online cuesta bastante más que la misma entrada comprada con antelación.",
      "Los fines de semana y en vacaciones escolares la isla se llena de residentes: si es posible, venir entre semana.",
      "En la playa, el agua frente a la rada no es el motivo para venir: los bares valen más que el mar."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "Una cabina del teleférico de Sentosa sobre la selva de la isla, con el puerto al fondo",
    immagine: '/images/singapore/sentosa.jpg',
  },
]
