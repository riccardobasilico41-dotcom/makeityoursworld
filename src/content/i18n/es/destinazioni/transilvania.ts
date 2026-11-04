import type { Destinazione } from '@/lib/types'

export const destinazioniTransilvania: Destinazione[] = [
  {
    slug: 'bucarest',
    paeseSlug: 'transilvania',
    ordine: 1,
    nome: 'Bucarest',
    tipologia: ['città', 'storia'],
    giorniConsigliati: "1 día a la llegada, 1-2 al regreso",
    visitataPersonalmente: true,
    introduzione: "El punto de llegada y de regreso del viaje: el Palacio del Parlamento, el barrio histórico de Lipscani y, el último día, las Termas.",
    percheAndarci: "Por el Palacio del Parlamento, el segundo edificio más grande del mundo después del Pentágono, y la atmósfera del casco antiguo de Lipscani.",
    cosaVedere: ["El Palacio del Parlamento", "El Romanian Athenaeum", "El barrio histórico de Lipscani"],
    cosaFare: [
      "Visita guiada al Palacio del Parlamento (hay una ficha de experiencia dedicada)",
      "Walking tour nocturno con guía local",
      "Cena típica en Caru' cu Bere, con espectáculos folk",
      "Termas de Bucarest el último día (hay una ficha de experiencia dedicada)",
    ],
    doveDormire:
      "A la llegada dormimos en el Hotel Duke Romana (zona Piața Romană), un 3 estrellas con opiniones mixtas pero en conjunto positivas: buen desayuno, camas cómodas y buena relación calidad-precio, con alguna queja sobre las habitaciones abuhardilladas. Al regreso, en el Hotel Continental Forum (zona Palacio del Parlamento), un 4 estrellas renovado en 2021, con opiniones muy positivas sobre desayuno, personal y habitaciones.\n\nAlternativas llegada: económicas: Hello Hotels Bucharest, Trianon Hotel · gama media: Casa Mendeleev · lujo (contenido): Epoque Hotel, Grand Hotel Continental.\n\nAlternativas regreso: económicas: Hotel Parliament, Volo Hotel Bucharest · gama media: Filitti Boutique Hotel · lujo (contenido): Radisson Blu Hotel Bucharest, JW Marriott Bucharest Grand Hotel.",
    doveMangiare: "Caru' cu Bere para la cena de bienvenida; Hanu' lui Manuc o Excalibur para la cena de despedida.",
    usciteSerali: "El barrio de Lipscani, lleno de bares y locales con música hasta tarde; Freddo, St. Patrick, el jardín de Grădina Dorobanți.",
    comeArrivare: "Vuelo internacional a Bucarest, luego taxi desde el aeropuerto (con Cobălcescu o Cris Taxi la tarifa no supera los 60 LEI).",
    comeSpostarsi: "A pie por el centro, Uber, Bolt o taxi para el resto.",
    periodoMigliore: "puente de Halloween o principios de noviembre",
    costi: "Palacio del Parlamento unos 12,5 €/pax; Romanian Athenaeum 2 €/pax; Termas 35 € por el día entero.",
    erroriDaEvitare: ["Quedarse sin efectivo: conviene sacar dinero nada más aterrizar, porque muchos restaurantes típicos solo aceptan lei en efectivo"],
    miaEsperienza:
      "El Palacio del Parlamento, con sus dimensiones desproporcionadas, cuenta la megalomanía del régimen de Ceaușescu antes incluso de entrar. Fue una de las visitas guiadas más impresionantes del viaje.",
    luoghi: [
      {
        nome: "Palacio del Parlamento",
        testo: "El edificio administrativo más pesado del mundo, querido por Ceaușescu y construido en los años ochenta con una cuarta parte del casco histórico demolida. Se visita solo con tour guiado, entre salas de mármol, lámparas y alfombras gigantes.",
        come: "Metro hasta Izvor; entrada por el lado del Izvor. Llevar pasaporte y reservar con antelación.",
        quando: "Mañana entre semana; las salas de representación pueden estar cerradas por eventos.",
        tempo: "1-1,5 horas",
        costo: "unos 12,5 euros por persona (dato del viaje, a revisar)",
        consiglio: "Las dimensiones desmesuradas cuentan la megalomanía del régimen ya antes de entrar."
      },
      {
        nome: "Ateneo Rumano",
        testo: "La sala de conciertos neoclásica de 1888, con la cúpula y el fresco circular que cuenta la historia de Rumanía. Sede de la Filarmónica George Enescu.",
        come: "A pie, en Piața Revoluției.",
        quando: "Mañana o noche de concierto.",
        tempo: "30-45 minutos",
        costo: "unos 2 euros por persona (dato del viaje, a revisar)",
        consiglio: "Si es posible, asistir a un concierto: la acústica es excelente."
      },
      {
        nome: "Casco antiguo (Lipscani)",
        testo: "El barrio histórico de callejones, locales y antiguas posadas, hoy el corazón de los restaurantes y la vida nocturna. De día es tranquilo, de noche estalla de música.",
        come: "A pie, cerca de Piața Unirii.",
        quando: "Noche.",
        tempo: "2 horas",
        consiglio: "Comprobar los precios de los menús: algunos locales están pensados para turistas."
      },
      {
        nome: "Caru' cu Bere",
        testo: "La cervecería de 1879 con interiores neogóticos y techos pintados, famosa por la cocina rumana tradicional y los espectáculos de música folk.",
        come: "En pleno centro, Strada Stavropoleos.",
        quando: "Cena; reservar.",
        tempo: "1,5-2 horas",
        url: "https://www.carucubere.ro",
        consiglio: "Probar los sarmale y los papanași."
      },
      {
        nome: "Museo de la Aldea",
        testo: "Un museo al aire libre en el lago Herăstrău, con casas campesinas de todas las regiones de Rumanía, reconstruidas en el parque. Se entiende bien la arquitectura rural.",
        come: "Metro hasta Aviatorilor, 10 minutos a pie.",
        quando: "Mañana; el parque es agradable.",
        tempo: "1,5-2 horas",
        url: "https://www.muzeul-satului.ro",
        consiglio: "Combinar con un paseo por el parque Herăstrău."
      },
      {
        nome: "Termas de Bucarest (Therme)",
        testo: "El gran parque termal y acuático a las puertas de la ciudad, con piscinas, saunas y toboganes. Cómodo para descansar el último día.",
        come: "En taxi o lanzadera desde Bucarest (unos 20 minutos).",
        quando: "Jornada completa, sobre todo el último día.",
        tempo: "jornada completa",
        costo: "unos 35 euros por todo el día (dato del viaje, a revisar)",
        url: "https://therme.ro",
        consiglio: "Reservar online para saltarse la cola."
      }
    ],
    sapori: [
      {
        nome: "Sarmale",
        testo: "Rollitos de col rellenos de carne y arroz, servidos con nata agria."
      },
      {
        nome: "Mici",
        testo: "Salchichas especiadas a la parrilla, que se comen con mostaza."
      },
      {
        nome: "Papanași",
        testo: "Buñuelos fritos con nata agria y mermelada de frutos del bosque."
      },
      {
        nome: "Ciorbă",
        testo: "Sopa ácida tradicional, en versión de callos o de verduras."
      }
    ],
    attenzioni: [
      "Taxis: usar Bolt o Uber o los taxis oficiales; desde el aeropuerto con Cobălcescu o Cris Taxi la tarifa no supera los 60 LEI.",
      "Para conducir en Rumanía hace falta la viñeta de carretera (rovinieta), que se compra online en el sitio oficial.",
      "Carteristas en Gara de Nord y en el metro.",
      "El Palacio del Parlamento exige pasaporte: llevarlo."
    ],
    esperienzeSlugs: ['palazzo-parlamento', 'terme-bucarest'],
    tripSlugs: ['transilvania-express'],
    imageAlt: "El Palacio del Parlamento de Bucarest, Rumanía",
    immagine: '/images/transilvania/bucarest-stock.jpg',
  },
  {
    slug: 'peles-bran',
    paeseSlug: 'transilvania',
    ordine: 2,
    nome: "Castillo de Peleș y Castillo de Bran",
    tipologia: ['storia', 'castelli'],
    giorniConsigliati: "1 día",
    visitataPersonalmente: true,
    introduzione: "El Castillo de Peleș, quizá el más bonito del viaje por su arquitectura, y el Castillo de Bran, el famoso «Castillo de Drácula».",
    percheAndarci: "Para ver en la misma jornada dos de los castillos más famosos de Rumanía: el esplendor neorrenacentista de Peleș y el aire gótico de Bran.",
    cosaVedere: [
      "El Castillo de Peleș, residencia de verano de Carlos I con más de 160 estancias",
      "El Monasterio de Sinaia",
      "El Castillo de Bran, la fortaleza medieval del siglo XIII",
      "El Castillo de Cantacuzino (parada fotográfica opcional)",
    ],
    cosaFare: [
      "Visita al Castillo de Peleș, primer y segundo piso (hay una ficha de experiencia dedicada)",
      "Visita al Castillo de Bran (hay una ficha de experiencia dedicada)",
    ],
    doveDormire: "Aquí no dormimos: era una etapa de paso entre Bucarest y Brașov.",
    doveMangiare: "Restaurant Bucegi (con terraza) en Sinaia, o almuerzo de bolsa o comida callejera para ganar tiempo.",
    comeArrivare: "Unas 2 h en coche de Bucarest a Sinaia, luego unas 1 h de Sinaia a Bran.",
    comeSpostarsi: "Coche de alquiler.",
    periodoMigliore: "por la mañana, para evitar el gentío en los castillos",
    costi: "Peleș unos 20 € por persona (primer y segundo piso); en Bran las entradas se compran online y el guía oficial de 30-40 minutos se paga en efectivo en el lugar.",
    erroriDaEvitare: ["Fiarse de los precios de los puestos y de los restaurantes alrededor del Castillo de Bran: son trampas para turistas"],
    miaEsperienza:
      "Por arquitectura Peleș es quizá el castillo más bonito del viaje, con interiores cuidados hasta en los detalles como Bran, por fascinante que sea, no tiene. El vínculo de Bran con Drácula es más una invención turística que un hecho histórico, pero el castillo merece la visita incluso por sí solo.",
    luoghi: [
      {
        nome: "Castillo de Peleș",
        testo: "La residencia de verano de Carol I, rey de Rumanía, construida entre 1873 y 1914 en estilo neorrenacentista alemán, con más de 160 salas. Por arquitectura es quizá el castillo más bello del viaje, con interiores cuidados en los menores detalles.",
        come: "Tren o coche desde Bucarest a Sinaia (unas 2 horas); desde el centro de Sinaia 15 minutos a pie.",
        quando: "Temprano por la mañana, para evitar el gentío; comprobar los días de cierre en la web.",
        tempo: "1,5 horas",
        costo: "unos 20 euros por persona por primera y segunda planta (dato del viaje, a revisar)",
        url: "https://peles.ro",
        consiglio: "Visitar primera y segunda planta: la diferencia de precio compensa."
      },
      {
        nome: "Monasterio de Sinaia",
        testo: "El monasterio fundado en 1695 que da nombre a la ciudad, con la iglesia vieja y la nueva. Una parada breve antes de Peleș.",
        come: "A pie desde el centro de Sinaia.",
        quando: "Mañana.",
        tempo: "45 minutos",
        costo: "entrada libre",
        consiglio: "Silencio en el interior."
      },
      {
        nome: "Castillo de Bran",
        testo: "La fortaleza medieval del siglo XIV sobre la roca, famosa por su vínculo con Drácula. En realidad el vínculo es más una invención turística que un hecho histórico, pero el castillo merece la visita por sí solo.",
        come: "Desde el centro de Brașov, media hora en coche. Las entradas se compran online.",
        quando: "Temprano por la mañana; el lunes abre más tarde.",
        tempo: "1-1,5 horas",
        url: "https://www.bran-castle.com",
        consiglio: "La guía oficial de 30-40 minutos se paga en efectivo en el lugar."
      },
      {
        nome: "Castillo Cantacuzino en Bușteni",
        testo: "Un castillo de estilo neobrâncovenesc de 1911 a los pies de los Bucegi. Parada fotográfica opcional en el camino.",
        come: "En coche o tren, unos 10 minutos desde Sinaia.",
        quando: "De día.",
        tempo: "30 minutos",
        consiglio: "Solo para quien tiene tiempo."
      }
    ],
    sapori: [
      {
        nome: "Almuerzo en Sinaia",
        testo: "Restaurante Bucegi con terraza, o picnic para ganar tiempo."
      }
    ],
    attenzioni: [
      "Temprano por la mañana: los castillos se llenan de grupos después de las 10.",
      "Las entradas de Bran se compran online y la guía se paga en efectivo en el lugar.",
      "Comprobar los días de cierre: Peleș cierra al menos un día a la semana."
    ],
    esperienzeSlugs: ['castello-peles', 'castello-bran'],
    tripSlugs: ['transilvania-express'],
    imageAlt: "El Castillo de Bran, el «Castillo de Drácula», en Transilvania, Rumanía",
    immagine: '/images/copertine/transilvania-express.jpg',
  },
  {
    slug: 'brasov',
    paeseSlug: 'transilvania',
    ordine: 3,
    nome: 'Brașov',
    tipologia: ['storia', 'natura'],
    giorniConsigliati: "1 día y una noche",
    visitataPersonalmente: true,
    introduzione: "La Fortaleza de Râșnov en lo alto de una roca, el letrero de la ciudad al estilo hollywoodiense y el casco antiguo con Piața Sfatului y la Iglesia Negra.",
    percheAndarci: "Por la Fortaleza de Râșnov, mucho menos concurrida que el Castillo de Bran y tan bonita como él, con una atmósfera más épica que vampiresca.",
    cosaVedere: [
      "La Fortaleza de Râșnov",
      "El letrero «RASNOV» al estilo hollywoodiense",
      "Piața Sfatului y la Torre del Reloj",
      "La Iglesia Negra (Biserica Neagră), la iglesia gótica más grande de Rumanía",
    ],
    cosaFare: ["Fortaleza de Râșnov, a pie o en telecabina (hay una ficha de experiencia dedicada)", "Paseo por el casco antiguo"],
    doveDormire:
      "Curtea Brașoveana, a unos diez minutos a pie del casco antiguo, entre los establecimientos más apreciados de la ciudad (9,4 en Booking con casi 600 opiniones): personal muy atento, habitaciones limpias, bonito jardín.\n\nAlternativas: económicas: Drachenhaus, Pensiunea Casa Cranta · gama media: Vila Katharina · lujo (contenido): Casa Wagner, Radisson Blu Aurum Hotel Brașov.",
    doveMangiare: "Sergiana (sopas humeantes en hogazas vaciadas, estofados con pimentón) o Casa Românească; después de la cena en el Deane's Irish Pub & Grill o en el Musik Cafe.",
    comeArrivare: "Unos treinta minutos en coche desde Bran.",
    comeSpostarsi: "A pie o en telecabina para la Fortaleza de Râșnov.",
    periodoMigliore: "última hora de la tarde, para la luz sobre la roca",
    costi: "Los precios de Sergiana no los apunté; el vino y la palinka, sin embargo, cuestan más que la media.",
    erroriDaEvitare: ["No reservar con tiempo los restaurantes típicos más pequeños"],
    miaEsperienza:
      "La Fortaleza de Râșnov, con el letrero «RASNOV» al estilo hollywoodiense que se ve desde la roca, tiene una atmósfera más de El Señor de los Anillos que de Drácula. Fue una de las joyas menos turísticas de todo el viaje.",
    luoghi: [
      {
        nome: "Piața Sfatului",
        testo: "La plaza central, con la Casa del Consejo y la Torre del Reloj, rodeada de coloridas casas barrocas y cafés. Aquí en la Edad Media se decidía el destino de la ciudad.",
        come: "A pie, desde el centro.",
        quando: "Mañana y noche, cuando se ilumina.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Almuerzo con sopa en hogaza en Sergiana."
      },
      {
        nome: "Iglesia Negra (Biserica Neagră)",
        testo: "La mayor iglesia gótica de Rumanía, construida entre 1383 y 1477, ennegrecida por el incendio de 1689. Tiene un gran órgano y una colección de alfombras de Anatolia.",
        come: "A pie desde Piața Sfatului.",
        quando: "Mañana.",
        tempo: "45 minutos",
        consiglio: "Los conciertos de órgano de verano son una gran ocasión para verla."
      },
      {
        nome: "Monte Tâmpa y el cartel BRAȘOV",
        testo: "La colina sobre el centro con el cartel al estilo hollywoodiense y un teleférico. Desde arriba se ve toda la ciudad.",
        come: "Teleférico o sendero a pie de unos 30 minutos.",
        quando: "Última hora de la tarde.",
        tempo: "1,5-2 horas",
        consiglio: "La subida a pie es fácil pero empinada en algunos puntos."
      },
      {
        nome: "Calle de la Cuerda (Strada Sforii)",
        testo: "Un callejón de poco más de un metro de ancho, considerado de los más estrechos de Europa, que une dos calles. Una curiosidad rápida en el centro.",
        come: "A pie, detrás de Strada Mureșenilor.",
        quando: "De día.",
        tempo: "10 minutos",
        costo: "entrada libre",
        consiglio: "Para combinar con un paseo por el centro."
      },
      {
        nome: "Fortaleza de Râșnov",
        testo: "Una ciudadela campesina fortificada, con el cartel «RASNOV» al estilo hollywoodiense visible desde la fortaleza. El ambiente es más de El Señor de los Anillos que de Drácula, y es de las joyas menos turísticas del viaje.",
        come: "A unos 15 km de Brașov; se sube en telecabina o a pie.",
        quando: "Última hora de la tarde, por la luz sobre la fortaleza.",
        tempo: "1,5-2 horas",
        consiglio: "Subir en telecabina y bajar a pie, o al revés."
      }
    ],
    sapori: [
      {
        nome: "Sopa en hogaza",
        testo: "Ciorbă servida dentro de un pan vaciado, especialidad de Sergiana."
      },
      {
        nome: "Guisos con pimentón",
        testo: "Platos de carne tradicionales, como en la posada Casa Românească."
      },
      {
        nome: "Vino y palinka",
        testo: "Cuestan más que la media local."
      }
    ],
    attenzioni: [
      "Precios: el vino y la palinka en los locales del centro están por encima de la media.",
      "La Fortaleza de Râșnov y Brașov están cerca: organizarlo en una jornada.",
      "En invierno hay hielo en el sendero de Tâmpa."
    ],
    esperienzeSlugs: ['fortezza-rasnov'],
    tripSlugs: ['transilvania-express'],
    imageAlt: "La Fortaleza de Râșnov sobre una roca cerca de Brașov, Rumanía",
    immagine: '/images/transilvania/brasov-stock.jpg',
  },
  {
    slug: 'sighisoara-salina-turda',
    paeseSlug: 'transilvania',
    ordine: 4,
    nome: "Sighișoara y Salina Turda",
    tipologia: ['storia', 'unesco'],
    giorniConsigliati: "1 día, el más largo al volante (5 horas en total)",
    visitataPersonalmente: true,
    introduzione: "El pueblo medieval UNESCO de Sighișoara, casa natal del Conde Drácula, y las salinas subterráneas de Salina Turda.",
    percheAndarci: "Por Salina Turda, una de las cosas más sorprendentes de todo el viaje, y por las calles empedradas de Sighișoara.",
    cosaVedere: [
      "La Torre del Reloj de Sighișoara",
      "La casa natal del Conde Drácula",
      "The Covered Stairway, la escalinata cubierta de madera",
      "El lago subterráneo de Salina Turda",
      "El pueblo sajón de Viscri, con su Iglesia Fortificada UNESCO (etapa opcional)",
    ],
    cosaFare: [
      "Subida a la Torre del Reloj y a la casa natal de Drácula",
      "Subida a la parte alta de la ciudad por The Covered Stairway",
      "Visita a Salina Turda, con futbolín, ping pong y barquitas en el lago (hay una ficha de experiencia dedicada)",
      "Parada opcional en Viscri y su Iglesia Fortificada",
    ],
    doveDormire: "Aquí no dormimos: era una jornada de paso hacia Sibiu.",
    doveMangiare: "Gasthaus Altepost o Vlad Dracul Restaurant en Sighișoara.",
    comeArrivare: "Unas 1 h 20 de Brașov a Viscri, luego hacia Sighișoara; unas 2 h en coche de Sighișoara a Salina Turda.",
    comeSpostarsi: "Coche de alquiler; a pie en los cascos antiguos.",
    periodoMigliore: "salida temprano: es la jornada más larga al volante del viaje",
    costi: "Viscri 12 LEI por persona; casa natal de Drácula 5 LEI; Salina Turda 10 € entre semana, 12 € el fin de semana; guía en Salina Turda 100 LEI en efectivo.",
    erroriDaEvitare: ["Pasarse con los tiempos: es la jornada más larga al volante de todo el viaje (5 horas en total)"],
    miaEsperienza:
      "Salina Turda fue una de las mejores sorpresas del viaje. De una mina de sal no esperaba bajar y encontrar un lago navegable, e incluso un futbolín.",
    luoghi: [
      {
        nome: "Ciudadela de Sighișoara y Torre del Reloj",
        testo: "Una de las últimas ciudadelas medievales habitadas de Europa, Patrimonio de la UNESCO desde 1999. La Torre del Reloj de 64 metros alberga un museo de historia, con vista de la ciudad.",
        come: "A pie desde el aparcamiento de abajo; callejones empinados.",
        quando: "Temprano por la mañana, cuando está tranquila.",
        tempo: "2 horas",
        consiglio: "Subir a la torre para la vista: las casas de colores desde arriba."
      },
      {
        nome: "Casa natal de Drácula y Escalera Cubierta",
        testo: "La casa donde habría nacido Vlad Țepeș (hoy restaurante) y la larga escalera de madera de 1642 que sube a la iglesia de la colina. Una parada breve entre las casas de colores.",
        come: "A pie en la ciudadela.",
        quando: "Mañana.",
        tempo: "1 hora",
        costo: "casa natal 5 LEI (dato del viaje, a revisar)",
        consiglio: "El restaurante Vlad Dracul sirve cocina local."
      },
      {
        nome: "Viscri y la Iglesia Fortificada",
        testo: "Un pueblo sajón con una iglesia fortificada, Patrimonio de la UNESCO, entre las mejor conservadas de Transilvania. Visita opcional en el recorrido.",
        come: "Unas 1h20 en coche desde Brașov.",
        quando: "Mañana.",
        tempo: "1-1,5 horas",
        costo: "12 LEI por persona (dato del viaje, a revisar)",
        consiglio: "Parada opcional pero muy auténtica."
      },
      {
        nome: "Salina Turda",
        testo: "Una mina de sal que hoy es un parque subterráneo, con lago navegable, futbolín, ping pong y una noria. Fue una de las mejores sorpresas del viaje.",
        come: "En coche, unas 2 horas desde Sighișoara. Entrada con billete; la guía se paga en efectivo.",
        quando: "Mañana; grupos numerosos los fines de semana.",
        tempo: "2 horas",
        costo: "10 euros entre semana, 12 en fin de semana; guía 100 LEI en efectivo (datos del viaje, a revisar)",
        url: "https://salinaturda.eu",
        consiglio: "Vestirse en capas: dentro la temperatura es baja todo el año."
      }
    ],
    sapori: [
      {
        nome: "Gasthaus Altepost",
        testo: "Cocina local en Sighișoara, citada para el almuerzo."
      },
      {
        nome: "Mămăligă",
        testo: "Polenta con queso y nata agria, servida en los restaurantes locales."
      }
    ],
    attenzioni: [
      "Es la jornada más larga al volante: salir temprano.",
      "Las entradas de Salina Turda se compran en la entrada; la guía se paga en efectivo.",
      "Aparcar fuera de la ciudadela de Sighișoara."
    ],
    esperienzeSlugs: ['salina-turda'],
    tripSlugs: ['transilvania-express'],
    imageAlt: "Las casas de colores y las calles empedradas del casco antiguo de Sighișoara, Rumanía",
    immagine: '/images/transilvania/sighisoara-stock.jpg',
  },
  {
    slug: 'sibiu-transfagarasan',
    paeseSlug: 'transilvania',
    ordine: 5,
    nome: "Sibiu y Transfăgărășan",
    tipologia: ['storia', 'natura', 'strada panoramica'],
    giorniConsigliati: "1 día, con un largo tramo de conducción (hasta 3 h 45 sin paradas)",
    visitataPersonalmente: true,
    introduzione: "El casco antiguo UNESCO de Sibiu y la Transfăgărășan, una de las carreteras panorámicas más famosas del mundo, con curvas hasta los 2.000 metros de altitud.",
    percheAndarci: "Por la Transfăgărășan, con el Lago Bâlea y la posibilidad (rara) de avistar osos junto a la carretera.",
    cosaVedere: [
      "Piața Mare y el Museo Brukenthal en Sibiu",
      "El Puente de las Mentiras (Podul Minciunilor)",
      "Las curvas de la Transfăgărășan hasta el Lago Bâlea",
      "La Presa de Vidraru",
    ],
    cosaFare: [
      "City tour de Sibiu con guía local (2 h)",
      "Recorrer la Transfăgărășan (hay una ficha de experiencia dedicada)",
      "Parada en el Balea Lac Restaurant en el Lago Bâlea",
    ],
    doveDormire:
      "MyContinental Sibiu, establecimiento moderno cerca del casco antiguo (8,5 en Booking). Lo más citado son las habitaciones de los pisos altos con vistas a la ciudad y el desayuno abundante; alguno se queja del wifi lento y de los ascensores.\n\nAlternativas: económicas: Casa Timpuri Vechi, Pensiunea Central Sibiu · gama media: Casa Luxemburg · lujo (contenido): Noblesse Boutique Hotel, Mina Luxury Boutique Hotel.",
    doveMangiare: "Crama Sibiul Vechi (bodega rústica, pocas mesas, reserva obligatoria), La Dobrun o Crama Ileana; después de la cena Oldie's Pub o Geea Caffe.",
    comeArrivare: "Unas 1 h 30 en coche de Salina Turda a Sibiu.",
    comeSpostarsi: "Coche de alquiler para la Transfăgărășan, a pie por el centro de Sibiu.",
    periodoMigliore: "20 de junio - 31 de octubre, cuando la Transfăgărășan es transitable en coche",
    costi: "No apunté los precios.",
    erroriDaEvitare: ["Salir sin haber comprobado en el sitio oficial que la Transfăgărășan esté abierta", "Dar de comer a los osos o bajar del coche si se avista uno"],
    miaEsperienza:
      "La Transfăgărășan está a la altura de su fama: las curvas que suben hasta el Lago Bâlea están entre las carreteras más bonitas que he conducido nunca. El largo regreso a Bucarest el mismo día, sin embargo, se nota.",
    luoghi: [
      {
        nome: "Piața Mare y Museo Brukenthal",
        testo: "La gran plaza de Sibiu, entre las más bonitas de Rumanía, con el Museo Brukenthal, el museo más antiguo del país, abierto en 1817.",
        come: "A pie desde el centro.",
        quando: "Mañana.",
        tempo: "2 horas",
        url: "https://www.brukenthalmuseum.ro",
        consiglio: "Un tour de la ciudad de dos horas con guía local ayuda a entender la historia."
      },
      {
        nome: "Puente de las Mentiras (Podul Minciunilor)",
        testo: "El primer puente de hierro de Rumanía, de 1859. Según la tradición, cruje si alguien dice una mentira.",
        come: "A pie en el casco antiguo.",
        quando: "Tarde.",
        tempo: "15 minutos",
        costo: "entrada libre",
        consiglio: "Hacer la foto desde abajo, en el callejón de debajo."
      },
      {
        nome: "Carretera Transfăgărășan",
        testo: "La carretera de montaña construida en los años setenta por Ceaușescu: curvas cerradas que suben hasta el lago Bâlea, entre las mejores carreteras que he conducido. Cerrada en invierno.",
        come: "En coche, desde Sibiu o Curtea de Argeș. Abierta aproximadamente del 20 de junio al 31 de octubre.",
        quando: "Verano y principios de otoño; volver a Bucarest el mismo día es larguísimo.",
        tempo: "jornada completa",
        consiglio: "Salir temprano: el largo regreso a Bucarest el mismo día se nota."
      },
      {
        nome: "Lago Bâlea",
        testo: "El lago glaciar a 2.034 metros en la Transfăgărășan, con restaurante y refugio. Se llega por carretera o en teleférico en algunas temporadas.",
        come: "En coche por la carretera.",
        quando: "Verano, con cielo despejado.",
        tempo: "1 hora",
        consiglio: "En el Balea Lac Restaurant se come con vista al lago."
      },
      {
        nome: "Presa de Vidraru",
        testo: "Una presa de arco de 166 metros sobre el río Argeș, con un gran lago artificial. Una parada panorámica en el lado sur de la Transfăgărășan.",
        come: "En coche por la carretera.",
        quando: "De día.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Se ve también desde la carretera."
      }
    ],
    sapori: [
      {
        nome: "Crama Sibiul Vechi",
        testo: "Bodega rústica con pocas mesas, reserva obligatoria."
      },
      {
        nome: "Cocina sajona",
        testo: "La ciudad conserva platos tradicionales y cervezas artesanales."
      }
    ],
    attenzioni: [
      "La Transfăgărășan está cerrada de noviembre a junio por la nieve: comprobar el estado antes de salir.",
      "Reservar mesa en la Crama, tiene pocas mesas.",
      "Conducir con prudencia: curvas cerradas y tráfico de camiones y motos."
    ],
    esperienzeSlugs: ['transfagarasan'],
    tripSlugs: ['transilvania-express'],
    imageAlt: "Las curvas de la Transfăgărășan entre las montañas de Rumanía",
    immagine: '/images/transilvania/transfagarasan-stock.jpg',
  },
]
