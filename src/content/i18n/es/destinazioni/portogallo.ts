import type { Destinazione } from '@/lib/types'

export const destinazioniPortogallo: Destinazione[] = [
  {
    slug: 'lisbona',
    paeseSlug: 'portogallo',
    ordine: 1,
    nome: 'Lisboa',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: "3-4 días, incluida la excursión a Sintra",
    visitataPersonalmente: true,
    introduzione:
      "La capital de Portugal está sobre siete colinas asomadas al estuario del Tajo. En gran parte fue reconstruida tras el terremoto de 1755, que dio forma a la Baixa: el barrio bajo de trazado regular ilustrado que hoy separa del río los barrios más antiguos y de colinas, Alfama y Bairro Alto.",
    percheAndarci:
      "Es una ciudad para vivir en vertical, entre cuestas, miradouros (miradores) y medios históricos pensados para sus colinas. En un espacio compacto están el barrio más antiguo y estratificado (Alfama) y el centro comercial reconstruido tras el terremoto (Baixa-Chiado). A una hora en tren está Sintra, uno de los paisajes de cuento más fotografiados de Europa.",
    cosaVedere: [
      "La Alfama, el barrio más antiguo, casi intacto tras el terremoto de 1755 gracias a su estructura árabe de callejones estrechos. Aquí se escucha el fado, el canto tradicional portugués, en las casas de fado (casas de fado) repartidas por los callejones",
      "El tranvía 28, la línea histórica que atraviesa Alfama, Graça, Baixa y Estrela en vagones de madera de época: la forma más clásica (y más concurrida) de ver las colinas de la ciudad por dentro",
      "Belém, junto al río, de donde partieron las grandes expediciones portuguesas de la época de los descubrimientos. Aquí están el Mosteiro dos Jerónimos, obra maestra manuelina patrimonio de la UNESCO, y la Torre de Belém, la fortaleza símbolo de la ciudad sobre el agua, también UNESCO",
      "Baixa y Chiado, el centro reconstruido tras 1755 sobre una cuadrícula ilustrada, con la Praça do Comércio junto al Tajo y el Elevador de Santa Justa, el ascensor panorámico neogótico de hierro forjado",
      "Los miradouros, los miradores repartidos por las colinas: al atardecer el Miradouro da Senhora do Monte y el Miradouro da Graça están entre los más bonitos",
      "Sintra, patrimonio de la UNESCO desde 1995, con el Palácio Nacional da Pena y la Quinta da Regaleira (hay un destino dedicado)",
    ],
    cosaFare: [
      "Coger el tranvía 28 pronto por la mañana, antes de las 9, para evitar el gentío y los carteristas que lo han hecho tan famoso como sus panoramas",
      "Escuchar fado en directo, por la noche, en una casa de fado de la Alfama",
      "Comer un pastel de nata en la Pastéis de Belém, la pastelería original de 1837, donde nació la receta",
      "Subir a los miradouros al atardecer, con una copa de vino tomada en un quiosco al aire libre (esplanada)",
      "Dedicar un día entero a Sintra, saliendo lo antes posible (hay un destino y una experiencia dedicados)",
    ],
    doveDormire:
      "Baixa-Chiado es la zona más céntrica y práctica, bien conectada con el resto de la ciudad. La Alfama tiene más carácter y es más viva, pero las cuestas son más empinadas y las calles más estrechas. Desde ambas se llega a pie a gran parte de las atracciones del centro.",
    doveMangiare:
      "El pastel de nata, hojaldre con crema pastelera y canela, se encuentra en todas partes, pero nació en la Pastéis de Belém. El bacalhau (bacalao) se prepara en cientos de variantes. En el Bairro Alto y en la Alfama se comen los petiscos, platitos para compartir como las tapas españolas. En los minúsculos quioscos históricos de la Baixa se bebe la ginjinha, el licor de guinda servido en vasitos.",
    comeArrivare:
      "El Aeropuerto Humberto Delgado (LIS) está a unos 7 km del centro: con el metro (línea roja) se llega en unos 20-25 minutos, o hay autobuses, taxis y apps de transporte. Desde Italia no hay un tren directo cómodo, así que se llega casi siempre en avión.",
    comeSpostarsi: "Las cuestas son muchas, y por eso hay tranvías históricos, funiculares (elevadores) y el Elevador de Santa Justa. Metro, autobuses y trenes de cercanías se pagan con la tarjeta contactless Viva Viagem/Navegante. El centro se recorre bien también a pie, con un poco más de aliento para las colinas.",
    periodoMigliore: "abril-mayo y septiembre-octubre por el clima suave y la menor afluencia; junio-agosto es temporada alta, calurosa y muy concurrida, sobre todo en el tranvía 28 y en Sintra; de noviembre a marzo es suave pero lluvioso",
    costi: "ciudad todavía bastante barata para Europa occidental, aunque los precios suben: comida sencilla 10-12 €, cena normal 15-20 € por persona, billete de tranvía o autobús unos 2 €",
    erroriDaEvitare: [
      "Subir al tranvía 28 en las horas centrales esperando un asiento y algo de tranquilidad: es de los transportes públicos más concurridos de Europa y de los preferidos por los carteristas",
      "Organizar un paseo a pie como si Lisboa fuera llana",
      "Ir a Sintra sin salir pronto: las colas del Palácio da Pena se hacen larguísimas ya a media mañana",
      "Buscar el «auténtico» pastel de nata solo en la Pastéis de Belém: también los de las pastelerías de barrio son excelentes, y sin fila",
    ],
    confronti: [
      {
        titolo: "Cómo llegar a Sintra desde Lisboa",
        introduzione: "A Sintra se puede ir por cuenta propia en tren o con un tour organizado. La diferencia principal es cuánto tiempo se está dispuesto a pasar en cola entre un palacio y otro.",
        opzioni: [
          {
            nome: "Tren desde Rossio + entradas en línea",
            sintesi: "Tren regional desde la estación de Rossio (unos 40 minutos, salidas muy frecuentes), luego autobús local 434 o subida a pie hasta el Palácio da Pena, con las entradas compradas en línea con antelación y con hora",
            costo: "tren unos 5 € por trayecto, entradas 15-25 € por sitio",
            durata: "día entero, saliendo pronto",
            pro: ["Cuesta poco", "Horarios y ritmo se deciden por uno mismo", "No se depende de un grupo"],
            contro: ["El autobús local y las colas hay que organizarlos por cuenta propia", "No hay una guía histórica"],
            perChi: "quien prefiere moverse solo y ahorrar",
          },
          {
            nome: "Tour organizado desde Lisboa",
            sintesi: "Traslado en minivan desde Lisboa con guía, entradas «salta fila» incluidas y un itinerario que a menudo toca también Cascais o la Boca do Inferno",
            costo: "unos 70-100 € por persona",
            durata: "día entero",
            pro: ["Ninguna logística que organizar", "A menudo entrada prioritaria", "Un guía que cuenta la historia"],
            contro: ["Cuesta más", "El ritmo lo decide el grupo", "Queda menos tiempo para explorar por cuenta propia"],
            perChi: "quien no quiere ocuparse de transportes y colas, o tiene poco tiempo",
          },
        ],
        raccomandazione: "Con el día libre y un mínimo de organización, el tren con las entradas reservadas en línea es la opción más eficiente. En Sintra importa poco cómo se llega: importa salir pronto por la mañana.",
      },
    ],
    luoghi: [
      {
        "nome": "Alfama y Castillo de San Jorge",
        "testo": "El barrio más antiguo, que sobrevivió casi intacto al terremoto de 1755, con callejones, escaleras, ropa tendida y casas de fado. Arriba, el castillo medieval con sus murallas, jardines y vistas al Tajo y la Baixa. Abajo, la Sé, la catedral románica.",
        "come": "Se sube a pie desde la Baixa por la Rua da Madalena o en el tranvía 28. El castillo tiene la entrada por el Largo do Chão da Feira, con una cuesta empinada.",
        "quando": "A primera hora para el castillo, al atardecer para las terrazas. Por la noche las casas de fado se llenan después de las 20.",
        "tempo": "media jornada",
        "url": "https://www.castelodesaojorge.pt/",
        "consiglio": "Perderse por los callejones sin mapa y bajar a pie: la subida es lo duro, la bajada es fácil."
      },
      {
        "nome": "Belén: Monasterio de los Jerónimos",
        "testo": "Monasterio manuelino del siglo XVI, patrimonio de la UNESCO, con un claustro de dos plantas cubierto de decoración marinera y la tumba de Vasco da Gama en la iglesia. El portal sur es una de las obras más elaboradas de Portugal.",
        "come": "Desde el centro con el tranvía 15 o con el tren desde Cais do Sodré hasta Belém. La entrada es para el claustro; la iglesia tiene su propio horario.",
        "quando": "Claustro de martes a domingo de 9:30 a 17:30, última entrada a las 17. Cerrado los lunes, el 1 de enero, el domingo de Pascua, el 1 de mayo, el 13 de junio y el 25 de diciembre. Llegar a la apertura: a media mañana la cola crece.",
        "tempo": "1,5 horas",
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "costo": "Claustro 18 €, 2026 (web oficial)",
        "consiglio": "Comprar la entrada en la taquilla online oficial para no hacer cola en la caja. La iglesia tiene un acceso separado del claustro y merece la pena por sí sola, por la tumba de Vasco da Gama."
      },
      {
        "nome": "Torre de Belén",
        "testo": "Fortaleza manuelina sobre el Tajo, construida entre 1514 y 1519 y patrimonio UNESCO junto con los Jerónimos. El símbolo de la ciudad: baluartes, logia y terraza con vistas al río. Dentro las salas son pequeñas y la subida es estrecha.",
        "come": "A pie desde los Jerónimos junto al río. El tranvía 15 y el tren paran cerca.",
        "quando": "De martes a domingo de 9:30 a 17:30; cerrada los lunes y los mismos festivos que los Jerónimos. Puede cerrar cuando el tiempo hace la visita poco segura. El atardecer la ilumina bien desde fuera.",
        "tempo": "45 minutos dentro, más el paseo",
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "costo": "15 €, 2026 (web oficial)",
        "consiglio": "Para una foto desde la orilla, el paseo del río junto al Padrão dos Descobrimentos es mejor que el interior."
      },
      {
        "nome": "Pastéis de Belém",
        "testo": "La pastelería que desde 1837 hace los pastéis de Belém con una antigua receta del Monasterio de los Jerónimos. Dentro es un laberinto de salas de azulejos. Se comen calientes con canela y azúcar glas.",
        "come": "A pocos pasos de los Jerónimos. Paradas del tranvía 15 y del tren cerca.",
        "quando": "Abierta todos los días; horarios en la web oficial. La cola de fuera avanza rápido porque hay un mostrador para llevar.",
        "tempo": "media hora",
        "url": "https://pasteisdebelem.pt/",
        "consiglio": "Entrar en las salas interiores en lugar de esperar en el mostrador: a menudo hay sitio."
      },
      {
        "nome": "Baixa, Chiado y Praça do Comércio",
        "testo": "El centro reconstruido tras 1755 con calles en cuadrícula, la Praça do Comércio abierta al Tajo y el Arco da Rua Augusta. El Elevador de Santa Justa, de 1902, sube a un mirador sobre la ciudad. El Chiado tiene librerías históricas y cafés.",
        "come": "A pie desde el metro Baixa-Chiado o Terreiro do Paço. El ascensor lo gestiona Carris, con billete aparte.",
        "quando": "Por la mañana para la plaza sin multitudes. El mirador del ascensor se llena a mediodía.",
        "tempo": "media jornada",
        "url": "https://www.carris.pt/",
        "consiglio": "Para ver desde arriba, el mirador de Santa Luzia o la terraza del Arco evita la cola del ascensor."
      },
      {
        "nome": "Tranvía 28 y miradores",
        "testo": "La línea histórica amarilla que sube por Graça, Alfama, Baixa y Estrela. Para los miradores: Santa Luzia, Portas do Sol, Senhora do Monte, Graça. El tranvía va lleno; a los miradores también se llega a pie.",
        "come": "El tranvía sale de Martim Moniz o de Campo de Ourique. Se paga con la tarjeta recargable de transporte o con el billete a bordo, que cuesta más.",
        "quando": "Temprano por la mañana o al atardecer: en las horas centrales va lleno. Los miradouros al atardecer.",
        "tempo": "2 horas el recorrido",
        "url": "https://www.carris.pt/",
        "consiglio": "Subir en la cabecera para tener asiento."
      },
      {
        "nome": "LX Factory e Cais do Sodré",
        "testo": "LX Factory es un complejo industrial reconvertido bajo el puente 25 de Abril, con librerías, tiendas y restaurantes. Cerca, en Cais do Sodré, está el Time Out Market, en el mercado de la Ribeira, con puestos de comida de chefs.",
        "come": "LX Factory: tranvía 15 o autobús desde el centro. Time Out Market: metro Cais do Sodré, a pie desde la Baixa.",
        "quando": "LX Factory por la tarde y los domingos con el mercadillo. Time Out Market a mediodía, pero va lleno.",
        "tempo": "2 horas",
        "consiglio": "Para cenar, el barrio de Cais do Sodré con la Pink Street está más animado que el Time Out Market."
      },
      {
        "nome": "Oceanário e Parque das Nações",
        "testo": "Uno de los mayores acuarios cubiertos de Europa, abierto en 1998, con un gran tanque central y los hábitats de los cuatro océanos. El Parque das Nações, el recinto de la Expo 98, tiene un paseo junto al Tajo y un teleférico.",
        "come": "Metro rojo hasta Oriente y luego un corto paseo. Desde el aeropuerto está en la misma línea.",
        "quando": "Por la mañana, con menos grupos escolares. Útil en días de lluvia.",
        "tempo": "2-3 horas",
        "url": "https://www.oceanario.pt/",
        "consiglio": "Reservar online para saltarse la cola de la taquilla."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Alfama y el castillo",
          "Comida en la Baixa",
          "Tarde: Belén, Jerónimos y un pastel de nata",
          "Atardecer en un mirador"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Belén, Baixa y Chiado, fado por la noche",
          "Día 2: Alfama, tranvía 28 y miradores, LX Factory"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Alfama y Baixa",
          "Día 2: Belén y LX Factory",
          "Día 3: excursión a Sintra, vuelta para cenar"
        ]
      }
    ],
    zone: [
      {
        "nome": "Baixa y Chiado",
        "perChi": "quien quiere comodidad",
        "testo": "Céntrico, llano y cerca de metro y trenes. Ruidoso por la noche y caro. Pocos locales realmente locales."
      },
      {
        "nome": "Alfama y Graça",
        "perChi": "quien busca ambiente",
        "testo": "Callejones, fado, miradores. Cuestas y escaleras, difícil para taxis, música alta de noche."
      },
      {
        "nome": "Príncipe Real, Estrela y Campo de Ourique",
        "perChi": "quien busca barrios residenciales",
        "testo": "Más tranquilos, con jardines y buenas tiendas. Más lejos del río."
      }
    ],
    sapori: [
      {
        "nome": "Pastel de nata",
        "testo": "Hojaldre con crema pastelera, tibio y con canela."
      },
      {
        "nome": "Bacalhau à Brás",
        "testo": "Bacalao desmigado con huevo, patatas fritas y cebolla."
      },
      {
        "nome": "Bifana",
        "testo": "Bocadillo de cerdo marinado en vino blanco y ajo, de kioscos y bares."
      },
      {
        "nome": "Sardinas a la parrilla",
        "testo": "Especialidad de junio, para los Santos Populares."
      },
      {
        "nome": "Ginjinha",
        "testo": "Licor de guinda servido en un vasito, en los kioscos de la Baixa."
      }
    ],
    attenzioni: [
      "Carteristas en el tranvía 28, en el metro y en las zonas turísticas: llevar la mochila y el móvil delante.",
      "En la Baixa y el Bairro Alto puede ocurrir que desconocidos ofrezcan hachís u otras drogas por la calle: decir que no y seguir. En Portugal las drogas ilegales conllevan sanciones severas.",
      "En los restaurantes el «couvert» (pan, aceitunas, queso) que llevan a la mesa se cobra si se toca: rechazarlo si no se quiere.",
      "Tuk-tuks y taxis fuera de las zonas turísticas: acordar el precio antes, o usar apps.",
      "Tasa turística municipal por noche, que se paga en el hotel y puede cambiar (comprobar el importe vigente).",
      "Huelgas de metro, trenes y Carris, avisadas con antelación: mirar las noticias los días de desplazamiento."
    ],
    esperienzeSlugs: ['tram-28-alfama', 'pasteis-de-belem'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: "El tranvía 28 amarillo iluminado de noche en una calle estrecha de Lisboa, con la fachada blanca de una iglesia al fondo de la calle",
    immagine: '/images/portogallo/lisbona.jpg',
  },
  {
    slug: 'sintra',
    paeseSlug: 'portogallo',
    ordine: 2,
    nome: 'Sintra',
    tipologia: ['storia', 'natura', 'arte'],
    giorniConsigliati: "un día entero, como excursión desde Lisboa",
    visitataPersonalmente: true,
    introduzione:
      "Una pequeña ciudad entre colinas boscosas, unos 30 km al noroeste de Lisboa, patrimonio de la UNESCO desde 1995 como «Paisaje cultural de Sintra». Durante siglos pasaron aquí el verano la nobleza y la familia real portuguesa, que construyeron palacios y villas románticas en una concentración única en Europa, en un microclima más fresco y húmedo que el de Lisboa.",
    percheAndarci:
      "El Palácio Nacional da Pena, con las torres de colores de estilo romántico decimonónico en lo alto de una colina, es uno de los paisajes más fotografiados de Portugal. La Quinta da Regaleira, con el pozo iniciático en espiral y los jardines esotéricos, está entre las cosas más insólitas del país. Por las colas, sin embargo, es también una de las jornadas más exigentes de todo el itinerario.",
    cosaVedere: [
      "El Palácio Nacional da Pena, palacio real romántico del siglo XIX que mezcla elementos góticos, manuelinos, moriscos y renacentistas, amarillo y rojo vivo, en lo alto de una colina sobre la ciudad",
      "La Quinta da Regaleira, villa con jardín esotérico de principios del siglo XX, famosa por el «Poço Iniciático» (pozo iniciático): una escalera en espiral que desciende bajo tierra entre símbolos masónicos y templarios",
      "El Castelo dos Mouros, las ruinas del castillo morisco del siglo IX, con vistas a Sintra y, en los días despejados, hasta el océano",
      "El Palácio Nacional de Sintra, en el centro, con las dos enormes chimeneas cónicas blancas que se ven desde todo el valle",
      "El casco antiguo de Sintra, pequeño y peatonal, con pastelerías históricas conocidas por los travesseiros (dulces de hojaldre rellenos de crema de almendras) y las queijadas",
    ],
    cosaFare: [
      "Coger el primer tren posible desde Lisboa para estar entre los primeros en la cola del Palácio da Pena: es el consejo que repite cualquiera que ya haya hecho esta excursión",
      "Reservar en línea, antes de salir, las entradas por franja horaria para Pena y Regaleira, sin contar con comprarlas en el lugar",
      "Usar el autobús local 434 entre la estación, el centro y el Palácio da Pena, en lugar de hacer a pie la subida empinada en los días calurosos",
      "Bajar al pozo iniciático de la Quinta da Regaleira, uno de los puntos más fotografiados y concurridos: también aquí hay que contar con la espera",
    ],
    doveDormire: "Se visita en el día desde Lisboa, sin dormir en Sintra.",
    doveMangiare: "Travesseiros y queijadas, los dulces típicos, en una de las pastelerías históricas del centro. Por lo demás hay sobre todo locales turísticos en torno a la estación y en el centro peatonal.",
    comeArrivare:
      "Con el tren regional desde la estación de Rossio en Lisboa: unos 40 minutos, con salidas muy frecuentes durante el día. Es mucho más sencillo y económico que el coche de alquiler, también porque en el centro de Sintra, los fines de semana y en temporada alta, escasea el aparcamiento.",
    comeSpostarsi: "El autobús local 434 hace un recorrido circular entre la estación, el casco antiguo y el Palácio da Pena. El centro peatonal se recorre a pie, pero entre los sitios principales (Pena, Regaleira, Castelo dos Mouros) siempre se sube, y las distancias son más largas de lo que parece en el mapa.",
    periodoMigliore:
      "el clima va bien todo el año; el problema es la multitud. En fines de semana y en temporada alta (junio-agosto) las colas en los palacios principales se hacen larguísimas ya desde última hora de la mañana. En un día laborable, saliendo lo antes posible, la espera se reduce mucho en cualquier estación.",
    costi: "Palácio da Pena unos 20-25 €, Quinta da Regaleira unos 15 €, con descuentos en los billetes combinados; tren desde Lisboa unos 5 € por trayecto",
    erroriDaEvitare: [
      "Llegar a media mañana pensando en «hacerlo todo con calma»: las colas en el Palácio da Pena y en la Quinta da Regaleira se alargan rápido después de las 10-11",
      "No reservar en línea las entradas por franja horaria: en temporada alta los horarios de la mañana se agotan",
      "Subestimar distancias y desniveles entre un sitio y otro: no es un centro compacto como Lisboa",
      "Querer ver los cuatro sitios principales (Pena, Regaleira, Castelo dos Mouros, Palácio Nacional) en un día: con las colas de verdad, por lo general hay que sacrificar al menos uno",
    ],
    luoghi: [
      {
        "nome": "Palácio Nacional da Pena",
        "testo": "Palacio romántico construido entre 1842 y 1854 por deseo de Fernando II en lo alto de una colina, amarillo y rojo, con torres, almenas y decoración morisca y manuelina. Fue residencia de verano de la familia real y las salas conservan el mobiliario de sus colecciones. Alrededor hay un parque de más de 200 hectáreas.",
        "come": "Desde la estación de Sintra el autobús 434 de Scotturb sube hasta la Pena. A pie la subida es larga y empinada. Los coches particulares no pueden subir por las carreteras de acceso: desde la base del parque al palacio hay un lanzadera cada 15 minutos. Entrada con billete por franja horaria.",
        "quando": "Parque de 9 a 19 h, palacio de 9:30 a 18:30 h (último billete a las 17:30). El palacio solo se visita con fecha y franja horaria reservadas. A primera hora: después de las 10:30 la cola se alarga. Entradas online en Parques de Sintra.",
        "tempo": "2-3 horas con el parque",
        "url": "https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/",
        "costo": "Visita Essencial (parque y palacio) 20 €, solo parque 12 €, 2026 (web oficial)",
        "consiglio": "El parque se puede visitar solo, sin la cola del palacio, y tiene miradores: útil si las colas son demasiado largas."
      },
      {
        "nome": "Quinta da Regaleira",
        "testo": "Villa neogótica construida entre 1904 y 1910, con un jardín lleno de símbolos, grutas y galerías. El Poço Iniciático es un pozo de 27 metros de profundidad con una escalera en espiral, unido a túneles que salen a un pequeño lago.",
        "come": "A pie desde el centro de Sintra, en ligera subida. La entrada se compra en taquilla o en la taquilla online oficial, que evita la cola.",
        "quando": "A primera hora o a primera hora de la tarde: a media mañana el pozo se llena. Horarios en la web oficial.",
        "tempo": "2 horas",
        "url": "https://www.regaleira.pt/",
        "consiglio": "Bajar al pozo con calzado antideslizante y volver por los túneles: la salida es más bonita que el descenso."
      },
      {
        "nome": "Castelo dos Mouros",
        "testo": "Las ruinas de la fortaleza construida por los moros entre los siglos VIII y IX en la cresta sobre Sintra, con murallas y torres unidas por adarves. Desde arriba se ven la Pena, la ciudad y el océano.",
        "come": "Desde el centro a pie, cuesta arriba, o con el autobús 434 hasta la parada del castillo. Tramos de escaleras sobre piedra irregular.",
        "quando": "Por la mañana, con menos viento. Con niebla se pierde la vista.",
        "tempo": "1-1,5 horas",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Si solo hay tiempo para un castillo o palacio además de la Pena, aquí hay menos gente."
      },
      {
        "nome": "Palácio Nacional de Sintra",
        "testo": "El palacio real del centro, reconocible por las dos chimeneas cónicas blancas de las cocinas. Dentro están la Sala de los Cisnes, la Sala de las Urracas y una gran colección de azulejos desde el siglo XV.",
        "come": "A pie desde la estación. Está en la plaza principal de la ciudad.",
        "quando": "Antes de comer; por la noche la plaza está más tranquila.",
        "tempo": "1 hora",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Visitarlo si se está en el pueblo por la tarde: menos cola que la Pena."
      },
      {
        "nome": "Cabo da Roca",
        "testo": "El punto más occidental de la Europa continental, con un faro sobre acantilados cortados a pico sobre el Atlántico. El monumento recuerda el verso con que Camões describió el lugar «donde la tierra se acaba y el mar comienza».",
        "come": "Desde el centro de Sintra con el autobús de línea hacia Cascais (horarios en la app de Carris Metropolitana) o en coche.",
        "quando": "Al atardecer con viento fuerte; llevar chaqueta incluso en verano.",
        "tempo": "1 hora",
        "consiglio": "El certificado de visita se compra en la pequeña oficina de turismo: es un recuerdo, no obligatorio."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Tren desde Rossio, saliendo antes de las 8",
          "Palacio da Pena a la apertura",
          "Castillo de los Moros o Regaleira a última hora de la mañana",
          "Comida en el pueblo con un travesseiro",
          "Tren de vuelta por la tarde"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Pena, Castillo de los Moros, casco antiguo",
          "Día 2: Regaleira, Palacio Nacional, Cabo da Roca al atardecer"
        ]
      }
    ],
    zone: [
      {
        "nome": "Excursión desde Lisboa",
        "perChi": "la mayoría de los visitantes",
        "testo": "Tren desde Rossio en menos de una hora, vuelta por la tarde. Ritmo apretado con las colas, pero coste bajo."
      },
      {
        "nome": "Sintra, casco antiguo",
        "perChi": "quien quiere ver el pueblo sin multitudes",
        "testo": "Dormir en el pueblo permite ver la Pena a la apertura y el centro por la tarde. Pocos hoteles y precios altos."
      }
    ],
    sapori: [
      {
        "nome": "Travesseiro",
        "testo": "Hojaldre relleno de crema de almendras y huevo, dulce símbolo de Sintra, en la pastelería Piriquita."
      },
      {
        "nome": "Queijada",
        "testo": "Dulce pequeño de queso fresco, huevos y canela."
      },
      {
        "nome": "Vino de Colares",
        "testo": "Vino de una zona arenosa junto al mar, con viñas sin injertar."
      },
      {
        "nome": "Pastel de nata",
        "testo": "Está en todas las pastelerías."
      },
      {
        "nome": "Bacalhau",
        "testo": "Bacalao en varias versiones en los restaurantes del centro."
      }
    ],
    attenzioni: [
      "Las entradas de la Pena y Regaleira son con horario: comprar online antes de ir, en temporada alta se agotan las de la mañana.",
      "El autobús 434 va lleno en las horas centrales: subir en la estación, que es la cabecera, para tener sitio.",
      "Taxis y tuk-tuks piden tarifas altas: acordar el precio antes.",
      "Aparcar es casi imposible en el centro los fines de semana: mejor el tren.",
      "Las mochilas grandes no siempre caben en los palacios: dejar el equipaje en Lisboa.",
      "Niebla y humedad frecuentes: llevar una chaqueta impermeable."
    ],
    esperienzeSlugs: ['sintra-giornata-da-lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: "El Palácio Nacional da Pena de Sintra con las torres amarillas y rojas que emergen del bosque bajo un cielo azul",
    immagine: '/images/portogallo/sintra.jpg',
  },
]
