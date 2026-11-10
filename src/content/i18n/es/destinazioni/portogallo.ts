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
    miaEsperienza:
      "Estuve con amigos cuatro días, tres noches, a pie y en transporte público: Alfama y el tranvía 28, Belém, Baixa y Chiado, más un día entero en Sintra.",
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
      'El Aeropuerto Humberto Delgado (LIS) está a unos 7 km del centro: con el metro (línea roja) se llega en unos 20-25 minutos, o hay autobuses, taxis y apps de transporte. Desde Italia no hay un tren directo cómodo, así que se llega casi siempre en avión. El trayecto en metro cuesta unos 1,90 € más 0,50 € de la tarjeta Navegante ocasional, que se compra en las máquinas de la estación; el taxi con taxímetro cuesta unos 12-20 € con maletas, Uber y Bolt unos 10-15 €.',
    comeSpostarsi: "Las cuestas son muchas, y por eso hay tranvías históricos, funiculares (elevadores) y el Elevador de Santa Justa. Metro, autobuses y trenes de cercanías se pagan con la tarjeta contactless Viva Viagem/Navegante. El centro se recorre bien también a pie, con un poco más de aliento para las colinas.",
    periodoMigliore: "abril-mayo y septiembre-octubre por el clima suave y la menor afluencia; junio-agosto es temporada alta, calurosa y muy concurrida, sobre todo en el tranvía 28 y en Sintra; de noviembre a marzo es suave pero lluvioso",
    costi:
      'ciudad todavía bastante barata para Europa occidental, aunque los precios suben: comida sencilla 10-12 €, cena normal 15-20 € por persona, billete de tranvía o autobús unos 2 €. Presupuesto orientativo por día y persona, compartiendo doble: bajo 60-80 €, medio 110-150 €, alto más de 220 €.',
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
        "costo": "castillo unos 17 € (2026); Alfama gratis",
        "orari": "Castillo todos los días desde las 9; cierra a las 21 de marzo a octubre y a las 18 en invierno.",
        "lat": 38.7139,
        "lng": -9.1335,
        "url": "https://www.castelodesaojorge.pt/",
        "consiglio": "Perderse por los callejones sin mapa y bajar a pie: la subida es lo duro, la bajada es fácil."
      },
      {
        "nome": "Belén: Monasterio de los Jerónimos",
        "testo": "Monasterio manuelino del siglo XVI, patrimonio de la UNESCO, con un claustro de dos plantas cubierto de decoración marinera y la tumba de Vasco da Gama en la iglesia. El portal sur es una de las obras más elaboradas de Portugal.",
        "come": "Desde el centro con el tranvía 15 o con el tren desde Cais do Sodré hasta Belém. La entrada es para el claustro; la iglesia tiene su propio horario.",
        "quando": "Claustro de martes a domingo de 9:30 a 17:30, última entrada a las 17. Cerrado los lunes, el 1 de enero, el domingo de Pascua, el 1 de mayo, el 13 de junio y el 25 de diciembre. Llegar a la apertura: a media mañana la cola crece.",
        "tempo": "1,5 horas",
        "costo": "Claustro 18 €, 2026 (web oficial)",
        "orari": "Martes a domingo 9:30-17:30. Cerrado el lunes.",
        "lat": 38.6979,
        "lng": -9.2068,
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "consiglio": "Comprar la entrada en la taquilla online oficial para no hacer cola en la caja. La iglesia tiene un acceso separado del claustro y merece la pena por sí sola, por la tumba de Vasco da Gama."
      },
      {
        "nome": "Torre de Belén",
        "testo": "Fortaleza manuelina sobre el Tajo, construida entre 1514 y 1519 y patrimonio UNESCO junto con los Jerónimos. El símbolo de la ciudad: baluartes, logia y terraza con vistas al río. Dentro las salas son pequeñas y la subida es estrecha.",
        "come": "A pie desde los Jerónimos junto al río. El tranvía 15 y el tren paran cerca.",
        "quando": "De martes a domingo de 9:30 a 17:30; cerrada los lunes y los mismos festivos que los Jerónimos. Puede cerrar cuando el tiempo hace la visita poco segura. El atardecer la ilumina bien desde fuera.",
        "tempo": "45 minutos dentro, más el paseo",
        "costo": "15 €, 2026 (web oficial)",
        "orari": "Martes a domingo 9:30-17:30. Cerrada el lunes.",
        "lat": 38.6916,
        "lng": -9.216,
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "consiglio": "Para una foto desde la orilla, el paseo del río junto al Padrão dos Descobrimentos es mejor que el interior."
      },
      {
        "nome": "Pastéis de Belém",
        "testo": "La pastelería que desde 1837 hace los pastéis de Belém con una antigua receta del Monasterio de los Jerónimos. Dentro es un laberinto de salas de azulejos. Se comen calientes con canela y azúcar glas.",
        "come": "A pocos pasos de los Jerónimos. Paradas del tranvía 15 y del tren cerca.",
        "quando": "Abierta todos los días; horarios en la web oficial. La cola de fuera avanza rápido porque hay un mostrador para llevar.",
        "tempo": "media hora",
        "costo": "unos 1,50 € por pastel (2026)",
        "lat": 38.6975,
        "lng": -9.2032,
        "url": "https://pasteisdebelem.pt/",
        "consiglio": "Entrar en las salas interiores en lugar de esperar en el mostrador: a menudo hay sitio."
      },
      {
        "nome": "Baixa, Chiado y Praça do Comércio",
        "testo": "El centro reconstruido tras 1755 con calles en cuadrícula, la Praça do Comércio abierta al Tajo y el Arco da Rua Augusta. El Elevador de Santa Justa, de 1902, sube a un mirador sobre la ciudad. El Chiado tiene librerías históricas y cafés.",
        "come": "A pie desde el metro Baixa-Chiado o Terreiro do Paço. El ascensor lo gestiona Carris, con billete aparte.",
        "quando": "Por la mañana para la plaza sin multitudes. El mirador del ascensor se llena a mediodía.",
        "tempo": "media jornada",
        "costo": "gratuito; Arco da Rua Augusta de pago",
        "lat": 38.7075,
        "lng": -9.1364,
        "url": "https://www.carris.pt/",
        "consiglio": "Para ver desde arriba, el mirador de Santa Luzia o la terraza del Arco evita la cola del ascensor."
      },
      {
        "nome": "Tranvía 28 y miradores",
        "testo": "La línea histórica amarilla que sube por Graça, Alfama, Baixa y Estrela. Para los miradores: Santa Luzia, Portas do Sol, Senhora do Monte, Graça. El tranvía va lleno; a los miradores también se llega a pie.",
        "come": "El tranvía sale de Martim Moniz o de Campo de Ourique. Se paga con la tarjeta recargable de transporte o con el billete a bordo, que cuesta más.",
        "quando": "Temprano por la mañana o al atardecer: en las horas centrales va lleno. Los miradouros al atardecer.",
        "tempo": "2 horas el recorrido",
        "costo": "unos 3 € el trayecto a bordo, menos con la tarjeta Navegante; miradores gratis",
        "lat": 38.7118,
        "lng": -9.1301,
        "url": "https://www.carris.pt/",
        "consiglio": "Subir en la cabecera para tener asiento."
      },
      {
        "nome": "LX Factory e Cais do Sodré",
        "testo": "LX Factory es un complejo industrial reconvertido bajo el puente 25 de Abril, con librerías, tiendas y restaurantes. Cerca, en Cais do Sodré, está el Time Out Market, en el mercado de la Ribeira, con puestos de comida de chefs.",
        "come": "LX Factory: tranvía 15 o autobús desde el centro. Time Out Market: metro Cais do Sodré, a pie desde la Baixa.",
        "quando": "LX Factory por la tarde y los domingos con el mercadillo. Time Out Market a mediodía, pero va lleno.",
        "tempo": "2 horas",
        "costo": "entrada libre",
        "lat": 38.7034,
        "lng": -9.1786,
        "consiglio": "Para cenar, el barrio de Cais do Sodré con la Pink Street está más animado que el Time Out Market."
      },
      {
        "nome": "Oceanário e Parque das Nações",
        "testo": "Uno de los mayores acuarios cubiertos de Europa, abierto en 1998, con un gran tanque central y los hábitats de los cuatro océanos. El Parque das Nações, el recinto de la Expo 98, tiene un paseo junto al Tajo y un teleférico.",
        "come": "Metro rojo hasta Oriente y luego un corto paseo. Desde el aeropuerto está en la misma línea.",
        "quando": "Por la mañana, con menos grupos escolares. Útil en días de lluvia.",
        "tempo": "2-3 horas",
        "lat": 38.7636,
        "lng": -9.0938,
        "url": "https://www.oceanario.pt/",
        "consiglio": "Reservar online para saltarse la cola de la taquilla."
      },
      {
        "nome": "Catedral de Lisboa (Sé)",
        "testo": "La catedral románica del siglo XII, con aspecto de fortaleza, que sobrevivió al terremoto de 1755. En el claustro las excavaciones muestran capas romanas, árabes y medievales.",
        "come": "A media subida entre la Baixa y Alfama; los tranvías 28 y 12 pasan por delante.",
        "quando": "Subiendo al castillo por la mañana.",
        "tempo": "30-45 minutos",
        "costo": "de pago para turistas, claustro y tesoro incluidos",
        "orari": "Cerrada a las visitas turísticas el domingo.",
        "lat": 38.7099,
        "lng": -9.1335
      },
      {
        "nome": "Elevador de Santa Justa",
        "testo": "El ascensor de hierro neogótico de 1902 que une la Baixa con el Largo do Carmo. Desde la plataforma superior se ven el castillo, la Baixa y el río.",
        "come": "Desde la Rua do Ouro, en la Baixa. También se puede subir a pie por el Chiado y acceder a la terraza desde arriba, sin hacer la cola del ascensor.",
        "quando": "A la apertura o por la noche; en las horas centrales la cola es larga.",
        "tempo": "30 minutos más la cola",
        "costo": "unos 6 € (6,20 € a bordo, hasta dos viajes con acceso al mirador, 2026), incluido en la Lisboa Card",
        "lat": 38.7121,
        "lng": -9.1394,
        "url": "https://www.carris.pt/"
      },
      {
        "nome": "Bairro Alto y Príncipe Real",
        "testo": "El Bairro Alto es una cuadrícula de callejones con bares diminutos y casas de fado, que por la noche se llena de gente en la calle. Más arriba, Príncipe Real tiene jardines, palacetes del siglo XIX y el mirador de São Pedro de Alcântara.",
        "come": "A pie desde el Chiado o con el Elevador da Glória desde Restauradores.",
        "quando": "La tarde para Príncipe Real, la noche después de las 22 para el Bairro Alto.",
        "tempo": "2-3 horas",
        "costo": "gratuito",
        "lat": 38.7166,
        "lng": -9.1489
      },
      {
        "nome": "Museo Nacional del Azulejo",
        "testo": "Cinco siglos de azulejos portugueses en el convento de Madre de Deus, con una iglesia barroca toda dorada y un panorama de Lisboa en azulejos de 23 metros, anterior al terremoto.",
        "come": "Al este de Alfama, fuera de los recorridos: autobús 759 o 794 desde Praça do Comércio, o taxi.",
        "quando": "Una mañana entre semana, con poca gente.",
        "tempo": "1h30",
        "orari": "Cerrado el lunes.",
        "lat": 38.7247,
        "lng": -9.1135,
        "url": "https://www.museudoazulejo.gov.pt/"
      },
      {
        "nome": "Museo Calouste Gulbenkian",
        "testo": "La colección de un magnate del petróleo, del antiguo Egipto a las alfombras persas, de Rembrandt a las joyas de Lalique, en un edificio modernista dentro de un jardín. Al lado está el Centro de Arte Moderna.",
        "come": "Metro São Sebastião o Praça de Espanha.",
        "quando": "En un día de lluvia, o el domingo por la tarde.",
        "tempo": "2 horas",
        "costo": "unos 16 € el museo, 18 € con el CAM y las exposiciones (2026)",
        "orari": "10-18, sábado hasta las 21. Cerrado el martes.",
        "lat": 38.7375,
        "lng": -9.1545,
        "url": "https://gulbenkian.pt/museu/"
      },
      {
        "nome": "Padrão dos Descobrimentos y MAAT",
        "testo": "El monumento a los descubrimientos junto al Tajo, con Enrique el Navegante en la proa y la rosa de los vientos en la plaza, y algo más al este el MAAT, el museo de arte y arquitectura con el tejado transitable sobre el río.",
        "come": "En Belém, a pie desde los Jerónimos por el paso subterráneo; tranvía 15 o tren desde Cais do Sodré.",
        "quando": "Al atardecer, con la luz sobre el río y el puente 25 de Abril.",
        "tempo": "1 hora",
        "costo": "plaza y tejado del MAAT gratis; mirador del Padrão y exposiciones de pago",
        "lat": 38.6936,
        "lng": -9.2058
      },
      {
        "nome": "Feira da Ladra y Panteón Nacional",
        "testo": "El rastro del Campo de Santa Clara, con objetos viejos, azulejos y cachivaches, bajo la cúpula blanca del Panteón Nacional, donde está enterrada Amália Rodrigues. Desde la terraza del Panteón se ve el Tajo.",
        "come": "Tranvía 28 hasta Voz do Operário y luego a pie.",
        "quando": "El martes o el sábado por la mañana, los días de mercado.",
        "tempo": "1-2 horas",
        "costo": "mercado gratis; Panteón de pago",
        "orari": "Mercado martes y sábados, de la mañana a primera hora de la tarde; Panteón cerrado el lunes.",
        "lat": 38.715,
        "lng": -9.125
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Alfama, la Sé y el Castelo de São Jorge a la apertura",
          "Mirador de Santa Luzia y bajada a la Baixa para comer",
          "Tarde: Belém, Jerónimos, Torre de Belém y pastel de nata",
          "Atardecer en el Padrão dos Descobrimentos o en un mirador, noche en el Bairro Alto"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Alfama, castillo, tranvía 28, Baixa y Chiado, fado por la noche",
          "Día 2: Belém con Jerónimos, Torre y MAAT, luego LX Factory y Cais do Sodré; atardecer en São Pedro de Alcântara"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Alfama, castillo, Sé y Feira da Ladra (martes o sábado), Baixa",
          "Día 2: Belém y LX Factory, noche en el Bairro Alto",
          "Día 3: excursión a Sintra, vuelta para cenar; como alternativa Gulbenkian, Museo del Azulejo y Parque das Nações"
        ]
      }
    ],
    zone: [
      {
        "nome": "Baixa y Chiado",
        "perChi": "quien quiere comodidad",
        "testo": "Céntrico, llano y cerca de metro y trenes. Ruidoso por la noche y caro. Pocos locales realmente locales.",
        "fascia": "130-250 €"
      },
      {
        "nome": "Alfama y Graça",
        "perChi": "quien busca ambiente",
        "testo": "Callejones, fado, miradores. Cuestas y escaleras, difícil para taxis, música alta de noche.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Príncipe Real, Estrela y Campo de Ourique",
        "perChi": "quien busca barrios residenciales",
        "testo": "Más tranquilos, con jardines y buenas tiendas. Más lejos del río.",
        "fascia": "120-220 €"
      }
    ],
    gite: [
      {
        "nome": "Sintra",
        "distanza": "40 minutos en tren",
        "come": "Tren desde la estación del Rossio con la tarjeta Navegante y autobús 434 a Pena y el Castelo dos Mouros.",
        "testo": "El Palácio da Pena, la Quinta da Regaleira y el Castelo dos Mouros entre los bosques de la sierra. Pena y Regaleira se reservan online con franja horaria."
      },
      {
        "nome": "Cascais y la costa de Estoril",
        "distanza": "40 minutos en tren",
        "come": "Tren desde Cais do Sodré junto al mar, cada 20 minutos aprox.",
        "testo": "El pueblo de pescadores convertido en lugar de veraneo, con playas, el casco antiguo y la Boca do Inferno. En bici se llega a la playa de Guincho."
      },
      {
        "nome": "Setúbal y la Arrábida",
        "distanza": "50 km, 45 minutos en coche",
        "come": "En coche o autobús desde Sete Rios; para las playas de la sierra el coche es casi imprescindible.",
        "testo": "El parque natural de la Arrábida, con calas de agua turquesa bajo la sierra, y Setúbal para el choco frito. De aquí salen barcos para ver los delfines del Sado."
      },
      {
        "nome": "Óbidos",
        "distanza": "85 km, 1 hora en autobús",
        "come": "Autobuses directos desde Campo Grande.",
        "testo": "Un pueblo blanco y amarillo dentro de murallas medievales que se recorren a pie, con la ginjinha servida en vasitos de chocolate."
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
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Lisboa?",
        "risposta": "Tres días: uno para Alfama y la Baixa, uno para Belém, uno para Sintra. Con cuatro o cinco se añaden Cascais, los museos y una noche de fado sin prisa."
      },
      {
        "domanda": "¿Compensa la Lisboa Card?",
        "risposta": "Compensa si en pocos días se concentran Jerónimos, Torre de Belém, Santa Justa y mucho transporte, incluido el tren a Sintra. Si se camina mucho y se ven pocos museos basta la tarjeta Navegante recargable."
      },
      {
        "domanda": "¿Cómo evitar la cola del tranvía 28?",
        "risposta": "Subir temprano o al anochecer, o tomarlo en una parada intermedia en vez de en la cabecera de Martim Moniz. Es también el transporte preferido de los carteristas."
      },
      {
        "domanda": "¿Se puede ver Sintra en un día desde Lisboa?",
        "risposta": "Sí, en tren desde el Rossio en 40 minutos, saliendo temprano: dos palacios con calma, tres con prisa. Pena y Regaleira se reservan online."
      },
      {
        "domanda": "¿Dónde dormir en Lisboa?",
        "risposta": "Baixa y Chiado por comodidad, Alfama y Graça por ambiente, Príncipe Real y Estrela por tranquilidad. Una doble cuesta unos 100-250 €; las cuestas y el empedrado hacen útil estar cerca del metro."
      },
      {
        "domanda": "¿Cómo se va del aeropuerto al centro de Lisboa?",
        "risposta": "En metro, línea roja, en 20-25 minutos por unos 1,90 € más 0,50 € de la tarjeta. Taxi unos 12-20 € con taxímetro, Uber y Bolt unos 10-15 €."
      }
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
    miaEsperienza:
      "Estuve en una excursión de un día durante los cuatro días en Lisboa con amigos: un día entero solo para Sintra.",
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
      "Desde la estación de Rossio, en pleno centro de Lisboa, el tren de CP de la línea de Sintra llega a la última parada en unos 40 minutos, con trenes frecuentes de la mañana a la noche. Ida y vuelta Lisboa-Sintra cuesta 5,10 € (tarifas CP 2026) y se carga en la tarjeta Navegante ocasional de 0,50 €; el billete Train&Bus de 14 € vale un día en el tren y en los autobuses Scotturb 434 (Pena) y 435 (Monserrate). Desde el aeropuerto se toma el metro rojo y se cambia en Alameda a la línea verde hasta Rossio. En coche, el aparcamiento en el centro escasea.",
    comeSpostarsi: "El autobús local 434 hace un recorrido circular entre la estación, el casco antiguo y el Palácio da Pena. El centro peatonal se recorre a pie, pero entre los sitios principales (Pena, Regaleira, Castelo dos Mouros) siempre se sube, y las distancias son más largas de lo que parece en el mapa.",
    periodoMigliore:
      "el clima va bien todo el año; el problema es la multitud. En fines de semana y en temporada alta (junio-agosto) las colas en los palacios principales se hacen larguísimas ya desde última hora de la mañana. En un día laborable, saliendo lo antes posible, la espera se reduce mucho en cualquier estación.",
    costi: "Palácio da Pena 20 € (parque y palacio), solo parque 12 €; Quinta da Regaleira 20 €; Castelo dos Mouros y Monserrate 12 €; Palacio Nacional 13 €; Convento de los Capuchos 11 €; tren desde Lisboa 5,10 € ida y vuelta. Presupuesto orientativo por persona y día en excursión desde Lisboa, entradas incluidas: bajo 40-60 €, medio 70-100 €, alto más de 150 €.",
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
        "consiglio": "El parque se puede visitar solo, sin la cola del palacio, y tiene miradores: útil si las colas son demasiado largas.",
        "orari": "Parque de 9 a 19 (último acceso a las 18), palacio de 9:30 a 18:30 (último acceso a las 17:30).",
        "lat": 38.78778,
        "lng": -9.39056
      },
      {
        "nome": "Quinta da Regaleira",
        "testo": "Villa neogótica construida entre 1904 y 1910, con un jardín lleno de símbolos, grutas y galerías. El Poço Iniciático es un pozo de 27 metros de profundidad con una escalera en espiral, unido a túneles que salen a un pequeño lago.",
        "come": "A pie desde el centro de Sintra, en ligera subida. La entrada se compra en taquilla o en la taquilla online oficial, que evita la cola.",
        "quando": "A primera hora o a primera hora de la tarde: a media mañana el pozo se llena. Horarios en la web oficial.",
        "tempo": "2 horas",
        "url": "https://www.regaleira.pt/",
        "consiglio": "Bajar al pozo con calzado antideslizante y volver por los túneles: la salida es más bonita que el descenso.",
        "costo": "20 euros desde enero de 2026 (web oficial)",
        "orari": "Enero-marzo y octubre-diciembre de 10 a 18:30; abril-septiembre de 9 a 19:30. Último acceso siempre a las 17:30; el palacio y la capilla cierran 30 minutos antes que el jardín.",
        "lat": 38.79511,
        "lng": -9.3962
      },
      {
        "nome": "Castelo dos Mouros",
        "testo": "Las ruinas de la fortaleza construida por los moros entre los siglos VIII y IX en la cresta sobre Sintra, con murallas y torres unidas por adarves. Desde arriba se ven la Pena, la ciudad y el océano.",
        "come": "Desde el centro a pie, cuesta arriba, o con el autobús 434 hasta la parada del castillo. Tramos de escaleras sobre piedra irregular.",
        "quando": "Por la mañana, con menos viento. Con niebla se pierde la vista.",
        "tempo": "1-1,5 horas",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Si solo hay tiempo para un castillo o palacio además de la Pena, aquí hay menos gente.",
        "costo": "12 euros (Parques de Sintra)",
        "orari": "De 9:30 a 18, último acceso a las 17:30.",
        "lat": 38.79241,
        "lng": -9.38867
      },
      {
        "nome": "Palácio Nacional de Sintra",
        "testo": "El palacio real del centro, reconocible por las dos chimeneas cónicas blancas de las cocinas. Dentro están la Sala de los Cisnes, la Sala de las Urracas y una gran colección de azulejos desde el siglo XV.",
        "come": "A pie desde la estación. Está en la plaza principal de la ciudad.",
        "quando": "Antes de comer; por la noche la plaza está más tranquila.",
        "tempo": "1 hora",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Visitarlo si se está en el pueblo por la tarde: menos cola que la Pena.",
        "costo": "visita esencial 13 euros (Parques de Sintra)",
        "orari": "Palacio y jardines de 9:30 a 18:30; último acceso al palacio a las 17:30.",
        "lat": 38.79778,
        "lng": -9.39083
      },
      {
        "nome": "Cabo da Roca",
        "testo": "El punto más occidental de la Europa continental, con un faro sobre acantilados cortados a pico sobre el Atlántico, a unos 140 metros sobre el mar. El monumento recuerda el verso con que Camões describió el lugar «donde la tierra se acaba y el mar comienza».",
        "come": "Desde el centro de Sintra con el autobús de línea hacia Cascais (horarios en la app de Carris Metropolitana) o en coche.",
        "quando": "Al atardecer con viento fuerte; llevar chaqueta incluso en verano.",
        "tempo": "1 hora",
        "consiglio": "El certificado de visita se compra en la pequeña oficina de turismo: es un recuerdo, no obligatorio.",
        "costo": "gratuito",
        "lat": 38.78083,
        "lng": -9.50056
      },
      {
        "nome": "Parque y Palacio de Monserrate",
        "testo": "Un palacio del siglo XIX con cúpulas y decoración inspirada en el arte morisco e indio, levantado para el coleccionista inglés Francis Cook. Alrededor hay un parque botánico en pendiente, con helechos arborescentes, praderas y plantas de todos los continentes. Tiene mucha menos gente que la Pena.",
        "come": "Al oeste del centro, con el autobús 435 de Scotturb desde la estación o en coche. La carretera pasa por delante de la Quinta da Regaleira y de Seteais.",
        "quando": "Por la tarde, después de la Pena; con el sol bajo el palacio se vuelve rosado.",
        "tempo": "2 horas",
        "costo": "12 euros (Parques de Sintra)",
        "orari": "Parque de 9 a 19 (último acceso a las 18), palacio de 9:30 a 18.",
        "lat": 38.79423,
        "lng": -9.42065,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Convento de los Capuchos",
        "testo": "Un pequeño convento franciscano del siglo XVI escondido en el bosque de la sierra, con celdas diminutas y puertas bajas forradas de corcho. Es lo contrario de los palacios reales: pobre, silencioso, casi excavado en la roca.",
        "come": "Está aislado en el bosque de la sierra, lejos del centro: se llega en coche o en taxi.",
        "quando": "Los días de niebla, cuando el bosque de alrededor luce más.",
        "tempo": "1 hora",
        "costo": "11 euros (Parques de Sintra)",
        "orari": "De 9 a 17:30, último acceso a las 17.",
        "lat": 38.7844,
        "lng": -9.43817,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Chalet de la Condesa de Edla",
        "testo": "Un chalet de estilo alpino que mandaron construir Fernando II y su segunda esposa, la cantante Elise Hensler, en la parte oeste del parque de la Pena. Por fuera está decorado con falsa madera y corcho, por dentro con azulejos y estucos.",
        "come": "Dentro del parque de la Pena: se llega a pie desde el palacio por los senderos del parque.",
        "quando": "Después de la Pena, cuando la gente se concentra en el palacio.",
        "tempo": "45 minutos",
        "costo": "incluido en la entrada del parque de la Pena, 12 euros (Parques de Sintra)",
        "orari": "Chalet de 9 a 17:30, último acceso a las 17; parque de 9 a 19.",
        "lat": 38.7851,
        "lng": -9.39911,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Palácio de Seteais",
        "testo": "Un palacio neoclásico de finales del siglo XVIII, hoy hotel, con un gran arco entre sus dos alas. Desde el césped de delante se ven la Pena y el Castelo dos Mouros en la cresta.",
        "come": "A pie desde el centro, 10-15 minutos por la carretera de Monserrate, poco después de la Quinta da Regaleira.",
        "quando": "A última hora de la tarde, de vuelta de Monserrate.",
        "tempo": "20-30 minutos",
        "lat": 38.7968,
        "lng": -9.39957
      },
      {
        "nome": "Azenhas do Mar",
        "testo": "Un pueblo de casas blancas colgado de un acantilado sobre el Atlántico, encima de una piscina natural excavada entre las rocas. Es la postal de la costa de Sintra, a unos veinte minutos de la sierra.",
        "come": "En coche desde el centro de Sintra hacia Colares y la costa. El mirador está en la carretera, por encima del pueblo.",
        "quando": "Al atardecer; la piscina natural se usa con marea baja y mar en calma.",
        "tempo": "1 hora",
        "lat": 38.84096,
        "lng": -9.46191
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Tren desde Rossio, saliendo antes de las 8",
          "Palácio da Pena a la hora de apertura",
          "Castelo dos Mouros o Regaleira a media mañana",
          "Comida en el centro con un travesseiro",
          "Tren de vuelta por la tarde"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Pena, Chalet de la Condesa de Edla, Castelo dos Mouros, casco antiguo",
          "Día 2: Regaleira a la apertura, Seteais y Monserrate, Palacio Nacional a última hora de la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1 y 2: como arriba",
          "Día 3: Convento de los Capuchos por la mañana, Azenhas do Mar, Cabo da Roca al atardecer y vuelta por Cascais"
        ]
      }
    ],
    zone: [
      {
        "nome": "Excursión desde Lisboa",
        "perChi": "la mayoría de los visitantes",
        "testo": "Tren desde Rossio en menos de una hora, vuelta por la tarde. Ritmo apretado con las colas, pero coste bajo.",
        "fascia": "100-250 € en Lisboa"
      },
      {
        "nome": "Sintra, casco antiguo",
        "perChi": "quien quiere ver el pueblo sin multitudes",
        "testo": "Dormir en el pueblo permite ver la Pena a la apertura y el centro por la tarde. Pocos hoteles y precios altos.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Colares y la costa",
        "perChi": "quien va en coche y quiere el mar cerca",
        "testo": "Quintas y casas de alquiler entre los viñedos de Colares, a pocos minutos de Azenhas do Mar y de las playas. Noches silenciosas, pero para los palacios hace falta coche.",
        "fascia": "90-180 €"
      }
    ],
    gite: [
      {
        "nome": "Cascais y Boca do Inferno",
        "distanza": "unos 30-40 minutos en autobús o en coche",
        "come": "Autobús de línea desde Sintra pasando por Cabo da Roca, o en coche; desde Cascais se vuelve a Lisboa en tren hasta Cais do Sodré en unos 40 minutos.",
        "testo": "La villa junto al mar que fue residencia de verano de la corte, con el puerto, la playa en el centro y los acantilados de la Boca do Inferno a pocos minutos a pie."
      },
      {
        "nome": "Palacio Nacional de Queluz",
        "distanza": "unos 20 minutos en tren",
        "come": "Tren de la línea de Sintra hasta Queluz-Belas, y después a pie hasta el palacio.",
        "testo": "El palacio rococó de los Braganza, con salones dorados, jardines a la francesa y un canal revestido de azulejos. Está en la línea Lisboa-Sintra, así que se añade sin desvíos. Palacio y jardines 13 euros, solo jardines 6 euros; de 9 a 18, jardines hasta las 18:30 (Parques de Sintra)."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Sintra?",
        "risposta": "Un día entero basta para la Pena y uno o dos sitios más. Con dos días se añaden Monserrate, Seteais y el Palacio Nacional sin prisas, con un tercero también los Capuchos y la costa."
      },
      {
        "domanda": "¿Hay que reservar la Pena y la Regaleira?",
        "risposta": "El palacio de la Pena solo se visita con fecha y franja horaria, así que se reserva en la web de Parques de Sintra. En la Regaleira la entrada en línea evita la cola de la taquilla."
      },
      {
        "domanda": "¿Cómo se llega a Sintra desde Lisboa?",
        "risposta": "En el tren de CP desde Rossio, unos 40 minutos; ida y vuelta cuesta 5,10 euros. El billete Train&Bus de 14 euros incluye también los autobuses 434 y 435."
      },
      {
        "domanda": "Si solo hay tiempo para un sitio, ¿Pena o Regaleira?",
        "risposta": "La Pena por las vistas y los interiores reales, la Regaleira por el pozo y los jardines simbólicos. Con colas de verdad, quien llega tarde encuentra la Regaleira más llevadera."
      },
      {
        "domanda": "¿Conviene ir a Sintra en coche?",
        "risposta": "Normalmente no: los coches particulares no suben a la Pena y en el centro el aparcamiento escasea los fines de semana. El coche solo sirve para los Capuchos y la costa."
      },
      {
        "domanda": "¿Merece la pena dormir en Sintra?",
        "risposta": "Sí, para ver la Pena a la apertura y el centro por la noche sin grupos. Hay pocos hoteles y cuestan más que en Lisboa, así que se reserva pronto."
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
