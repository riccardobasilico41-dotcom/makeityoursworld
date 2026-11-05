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
    percheAndarci: "Por el Palacio del Parlamento, uno de los edificios administrativos más grandes del mundo, y la atmósfera del casco antiguo de Lipscani.",
    cosaVedere: ["El Palacio del Parlamento", "El Romanian Athenaeum", "El barrio histórico de Lipscani"],
    cosaFare: [
      "Visita guiada al Palacio del Parlamento (hay una ficha de experiencia dedicada)",
      "Walking tour nocturno con guía local",
      "Cena típica en Caru' cu Bere, con espectáculos folk",
      "Termas de Bucarest el último día (hay una ficha de experiencia dedicada)",
    ],
    doveDormire:
      "A la llegada dormimos en el Hotel Duke Romana (zona Piața Romană), un 3 estrellas con opiniones mixtas pero en conjunto positivas: buen desayuno, camas cómodas y buena relación calidad-precio, con alguna queja sobre las habitaciones abuhardilladas. Al regreso, en el Hotel Continental Forum (zona Palacio del Parlamento), un 4 estrellas, con opiniones muy positivas sobre desayuno, personal y habitaciones.\n\nAlternativas llegada: económicas: Hello Hotels Bucharest, Trianon Hotel · gama media: Casa Mendeleev · lujo (contenido): Epoque Hotel, Grand Hotel Continental.\n\nAlternativas regreso: económicas: Hotel Parliament, Volo Hotel Bucharest · gama media: Filitti Boutique Hotel · lujo (contenido): Radisson Blu Hotel Bucharest, JW Marriott Bucharest Grand Hotel.",
    doveMangiare: "Caru' cu Bere para la cena de bienvenida; Hanu' lui Manuc o Excalibur para la cena de despedida.",
    usciteSerali: "El barrio de Lipscani, lleno de bares y locales con música hasta tarde; Freddo, St. Patrick, el jardín de Grădina Dorobanți.",
    comeArrivare: "Vuelo internacional a Bucarest, luego taxi desde el aeropuerto (mejor taxis oficiales o app de transporte).",
    comeSpostarsi: "A pie por el centro, Uber, Bolt o taxi para el resto.",
    periodoMigliore: "puente de Halloween o principios de noviembre",
    costi: "Entradas del Palacio del Parlamento, el Ateneo Rumano y las Termas en las webs oficiales.",
    erroriDaEvitare: ["Quedarse sin efectivo: conviene sacar dinero nada más aterrizar, porque algunos locales típicos prefieren el efectivo en lei"],
    miaEsperienza:
      "El Palacio del Parlamento, con sus dimensiones desproporcionadas, cuenta la megalomanía del régimen de Ceaușescu antes incluso de entrar. Fue una de las visitas guiadas más impresionantes del viaje.",
    luoghi: [
      {
        nome: "Palacio del Parlamento",
        testo: "Un edificio enorme, querido por Ceaușescu y construido entre 1984 y 1997 tras demoler una gran parte del viejo centro: 365.000 m², considerado el edificio más pesado del mundo. Se visita solo con tour guiado, entre salas de mármol, lámparas y alfombras gigantes.",
        come: "Entrada de visitantes indicada en la web oficial. Llevar pasaporte y reservar con antelación.",
        quando: "Mañana entre semana; las salas de representación pueden estar cerradas por eventos.",
        tempo: "1-1,5 horas",
        costo: "tarifas de los tours en la web oficial",
        consiglio: "Las dimensiones desmesuradas cuentan la megalomanía del régimen ya antes de entrar."
      },
      {
        nome: "Ateneo Rumano",
        testo: "La sala de conciertos neoclásica de 1888, con la cúpula y el fresco circular que cuenta la historia de Rumanía. Sede de la Filarmónica George Enescu.",
        come: "A pie, en Piața Revoluției.",
        quando: "Mañana o noche de concierto.",
        tempo: "30-45 minutos",
        costo: "entradas y conciertos en la web oficial",
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
        testo: "Nacida como cervecería en 1879, desde 1899 está en un edificio neogótico con interiores Art Nouveau y techos pintados; es monumento histórico y sirve cocina rumana tradicional.",
        come: "En pleno centro, Strada Stavropoleos.",
        quando: "Cena; reservar.",
        tempo: "1,5-2 horas",
        url: "https://www.carucubere.ro",
        consiglio: "Probar los sarmale y los papanași."
      },
      {
        nome: "Museo de la Aldea",
        testo: "Un museo al aire libre abierto en 1936, con muchos edificios campesinos de los siglos XVII al XX traídos de todas las regiones de Rumanía. Se entiende bien la arquitectura rural.",
        come: "En el parque Rey Miguel I (antes Herăstrău), al norte del centro, en metro o bus.",
        quando: "Mañana; el parque es agradable.",
        tempo: "1,5-2 horas",
        url: "https://www.muzeul-satului.ro",
        consiglio: "Combinar con un paseo por el parque Herăstrău."
      },
      {
        nome: "Termas de Bucarest (Therme)",
        testo: "El gran parque termal y acuático a las puertas de la ciudad, con piscinas, saunas y toboganes. Cómodo para descansar el último día.",
        come: "En taxi o lanzadera desde Bucarest: cómo llegar en la web oficial.",
        quando: "Jornada completa, sobre todo el último día.",
        tempo: "jornada completa",
        costo: "tarifas en la web oficial",
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
      "Taxis: usar Bolt, Uber o los taxis oficiales con tarifa a la vista.",
      "Para conducir en Rumanía hace falta la viñeta de carretera (rovinieta), que hay que tener antes de salir a la carretera.",
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
      "El Castillo de Peleș, residencia de verano de Carlos I",
      "El Monasterio de Sinaia",
      "El Castillo de Bran, la fortaleza medieval sobre la roca",
      "El Castillo de Cantacuzino (parada fotográfica opcional)",
    ],
    cosaFare: [
      "Visita al Castillo de Peleș, primer y segundo piso (hay una ficha de experiencia dedicada)",
      "Visita al Castillo de Bran (hay una ficha de experiencia dedicada)",
    ],
    doveDormire: "Aquí no dormimos: era una etapa de paso entre Bucarest y Brașov.",
    doveMangiare: "Restaurant Bucegi (con terraza) en Sinaia, o almuerzo de bolsa o comida callejera para ganar tiempo.",
    comeArrivare: "En coche de Bucarest a Sinaia, luego de Sinaia a Bran.",
    comeSpostarsi: "Coche de alquiler.",
    periodoMigliore: "por la mañana, para evitar el gentío en los castillos",
    costi: "Entradas y tarifas de Peleș y Bran en las webs oficiales.",
    erroriDaEvitare: ["Fiarse de los precios de los puestos y de los restaurantes alrededor del Castillo de Bran: son trampas para turistas"],
    miaEsperienza:
      "Por arquitectura Peleș es quizá el castillo más bonito del viaje, con interiores cuidados hasta en los detalles como Bran, por fascinante que sea, no tiene. El vínculo de Bran con Drácula es más una invención turística que un hecho histórico, pero el castillo merece la visita incluso por sí solo.",
    luoghi: [
      {
        nome: "Castillo de Peleș",
        testo: "La residencia de verano de Carol I, rey de Rumanía, construida entre 1873 y 1914 en estilo neorrenacentista alemán. Por arquitectura es quizá el castillo más bello del viaje, con interiores cuidados en los menores detalles.",
        come: "Desde Bucarest a Sinaia; desde el centro de Sinaia se sube a pie.",
        quando: "Temprano por la mañana, para evitar el gentío. Cerrado del 2 de noviembre al 1 de diciembre de 2026 por limpieza y conservación. Cerrado lunes y martes; miércoles 10-17, jueves-domingo 9:15-17, última entrada a las 16.",
        tempo: "1,5 horas",
        costo: "100 lei adultos, planta baja y primera planta (2026)",
        url: "https://peles.ro",
        consiglio: "Las entradas, en bilete.peles.ro, tienen franja horaria y no se pueden cambiar."
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
        testo: "La fortaleza sobre la roca, documentada desde 1377, famosa por su vínculo con Drácula. En realidad el vínculo es más una invención turística que un hecho histórico, pero el castillo merece la visita por sí solo.",
        come: "Al suroeste de Brașov, en coche. Entradas en la web oficial.",
        quando: "Temprano por la mañana; los lunes abre a las 12, los demás días a las 9. Cierra a las 19 de abril a octubre, a las 18 de noviembre a marzo.",
        tempo: "1-1,5 horas",
        costo: "100 lei adultos, visita estándar (noviembre-diciembre 2026); a menudo agotado: mejor online",
        url: "https://www.bran-castle.com",
        consiglio: "Vlad el Empalador nunca vivió aquí: el vínculo con Drácula nació para el turismo."
      },
      {
        nome: "Castillo Cantacuzino en Bușteni",
        testo: "Un castillo de estilo neobrâncovenesc de 1911 a los pies de los Bucegi. Parada fotográfica opcional en el camino.",
        come: "En coche o tren, en Bușteni, justo después de Sinaia.",
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
      "Temprano por la mañana: los castillos se llenan de grupos a media mañana.",
      "Peleș cierra los lunes y martes; Bran los lunes abre solo a las 12. Entradas en las webs oficiales."
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
      "La Iglesia Negra (Biserica Neagră), la gran iglesia gótica de la ciudad",
    ],
    cosaFare: ["Fortaleza de Râșnov (hay una ficha de experiencia dedicada)", "Paseo por el casco antiguo"],
    doveDormire:
      "Curtea Brașoveana, a pie del casco antiguo, con muy buenas opiniones: personal muy atento, habitaciones limpias, bonito jardín.\n\nAlternativas: económicas: Drachenhaus, Pensiunea Casa Cranta · gama media: Vila Katharina · lujo (contenido): Casa Wagner, Radisson Blu Aurum Hotel Brașov.",
    doveMangiare: "Sergiana (sopas humeantes en hogazas vaciadas, estofados con pimentón) o Casa Românească; después de la cena en el Deane's Irish Pub & Grill o en el Musik Cafe.",
    comeArrivare: "A poca distancia de Bran, en coche.",
    comeSpostarsi: "A pie en el centro; en coche hasta Râșnov.",
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
        testo: "La principal iglesia gótica de Rumanía, iniciada en 1383 y terminada en el siglo XV. Tiene un órgano Buchholz de 1839 con unos 4.000 tubos y la mayor colección de «alfombras transilvanas», alfombras anatolias donadas por los mercaderes sajones entre los siglos XV y XVII.",
        come: "A pie desde Piața Sfatului.",
        quando: "Mañana.",
        tempo: "45 minutos",
        consiglio: "Los conciertos de órgano de verano son una gran ocasión para verla."
      },
      {
        nome: "Monte Tâmpa y el cartel BRAȘOV",
        testo: "La colina sobre el centro con el cartel al estilo hollywoodiense y un teleférico. Desde arriba se ve toda la ciudad.",
        come: "Teleférico o sendero a pie.",
        quando: "Última hora de la tarde.",
        tempo: "1,5-2 horas",
        consiglio: "La subida a pie es fácil pero empinada en algunos puntos."
      },
      {
        nome: "Calle de la Cuerda (Strada Sforii)",
        testo: "Un callejón de poco más de un metro de ancho, considerado de los más estrechos de Europa, que une dos calles. Una curiosidad rápida en el centro.",
        come: "A pie, cerca de la Puerta Șchei.",
        quando: "De día.",
        tempo: "10 minutos",
        costo: "entrada libre",
        consiglio: "Para combinar con un paseo por el centro."
      },
      {
        nome: "Fortaleza de Râșnov",
        testo: "Una ciudadela campesina fortificada, con el cartel «RASNOV» al estilo hollywoodiense visible desde la fortaleza. El ambiente es más de El Señor de los Anillos que de Drácula, y es de las joyas menos turísticas del viaje.",
        come: "A las afueras de Brașov, en la localidad de Râșnov; se sube a pie o con los medios que funcionen allí.",
        quando: "Última hora de la tarde, por la luz sobre la fortaleza.",
        tempo: "1,5-2 horas",
        consiglio: "Una ciudadela campesina: servía de refugio a los habitantes en tiempo de guerra."
      }
    ],
    sapori: [
      {
        nome: "Sopa en hogaza",
        testo: "Ciorbă servida dentro de un pan vaciado, especialidad de los restaurantes tradicionales de Brașov."
      },
      {
        nome: "Guisos con pimentón",
        testo: "Platos de carne tradicionales de las posadas locales."
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
    giorniConsigliati: "1 día, el más largo al volante",
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
    comeArrivare: "En coche de Brașov a Viscri, luego hacia Sighișoara y de allí a Salina Turda.",
    comeSpostarsi: "Coche de alquiler; a pie en los cascos antiguos.",
    periodoMigliore: "salida temprano: es la jornada más larga al volante del viaje",
    costi: "Entradas de Viscri, la casa natal y Salina Turda en el lugar o en las webs oficiales; el guía de Salina Turda se paga aparte.",
    erroriDaEvitare: ["Pasarse con los tiempos: es la jornada más larga al volante de todo el viaje"],
    miaEsperienza:
      "Salina Turda fue una de las mejores sorpresas del viaje. De una mina de sal no esperaba bajar y encontrar un lago navegable, e incluso un futbolín.",
    luoghi: [
      {
        nome: "Ciudadela de Sighișoara y Torre del Reloj",
        testo: "Una de las últimas ciudadelas medievales habitadas de Europa, Patrimonio de la UNESCO desde 1999. La Torre del Reloj, de 64 metros, alberga desde 1898 el Museo de historia, con vista de la ciudad.",
        come: "A pie desde el aparcamiento de abajo; callejones empinados.",
        quando: "Temprano por la mañana, cuando está tranquila.",
        tempo: "2 horas",
        consiglio: "Subir a la torre para la vista: las casas de colores desde arriba."
      },
      {
        nome: "Casa natal de Drácula y Escalera Cubierta",
        testo: "La casa donde habría nacido Vlad Țepeș y la larga escalera cubierta de madera que sube a la iglesia de la colina. Una parada breve entre las casas de colores.",
        come: "A pie en la ciudadela.",
        quando: "Mañana.",
        tempo: "1 hora",
        costo: "entrada en el lugar",
        consiglio: "Combinarla con la subida por la Escalera Cubierta."
      },
      {
        nome: "Viscri y la Iglesia Fortificada",
        testo: "Un pueblo sajón con una iglesia fortificada, Patrimonio de la UNESCO, bien conservada. Visita opcional en el recorrido.",
        come: "En coche desde Brașov, hacia Sighișoara.",
        quando: "Mañana.",
        tempo: "1-1,5 horas",
        costo: "entrada en el lugar",
        consiglio: "Parada opcional pero muy auténtica."
      },
      {
        nome: "Salina Turda",
        testo: "Una mina de sal que hoy es un parque subterráneo, con un lago subterráneo, un ascensor panorámico, la sala del eco y un antiguo torno todavía en su sitio. Fue una de las mejores sorpresas del viaje.",
        come: "En coche desde Sighișoara. Entradas en la entrada u online.",
        quando: "Todos los días 9-17, última entrada 16:20; grupos numerosos los fines de semana.",
        tempo: "2 horas",
        costo: "75 lei de lunes a viernes, 90 los fines de semana y festivos (2026); guía a petición 205 lei",
        url: "https://salinaturda.eu",
        consiglio: "Vestirse en capas: dentro la temperatura es baja todo el año."
      }
    ],
    sapori: [
      {
        nome: "Cocina de la ciudadela",
        testo: "Platos locales en los restaurantes de Sighișoara, prácticos para el almuerzo."
      },
      {
        nome: "Mămăligă",
        testo: "Polenta con queso y nata agria, servida en los restaurantes locales."
      }
    ],
    attenzioni: [
      "Es la jornada más larga al volante: salir temprano.",
      "Las entradas de Salina Turda se compran en la entrada u online.",
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
    giorniConsigliati: "1 día, con un largo tramo de conducción",
    visitataPersonalmente: true,
    introduzione: "El casco antiguo UNESCO de Sibiu y la Transfăgărășan, una célebre carretera panorámica, con curvas que suben a gran altitud.",
    percheAndarci: "Por la Transfăgărășan, con el Lago Bâlea y la posibilidad (rara) de avistar osos junto a la carretera.",
    cosaVedere: [
      "Piața Mare y el Museo Brukenthal en Sibiu",
      "El Puente de las Mentiras (Podul Minciunilor)",
      "Las curvas de la Transfăgărășan hasta el Lago Bâlea",
      "La Presa de Vidraru",
    ],
    cosaFare: [
      "City tour de Sibiu con guía local",
      "Recorrer la Transfăgărășan (hay una ficha de experiencia dedicada)",
      "Parada en el Balea Lac Restaurant en el Lago Bâlea",
    ],
    doveDormire:
      "MyContinental Sibiu, establecimiento moderno cerca del casco antiguo. Lo más citado son las habitaciones de los pisos altos con vistas a la ciudad y el desayuno abundante; alguno se queja del wifi lento y de los ascensores.\n\nAlternativas: económicas: Casa Timpuri Vechi, Pensiunea Central Sibiu · gama media: Casa Luxemburg · lujo (contenido): Noblesse Boutique Hotel, Mina Luxury Boutique Hotel.",
    doveMangiare: "Crama Sibiul Vechi (bodega rústica, pocas mesas, reserva obligatoria), La Dobrun o Crama Ileana; después de la cena Oldie's Pub o Geea Caffe.",
    comeArrivare: "En coche de Salina Turda a Sibiu.",
    comeSpostarsi: "Coche de alquiler para la Transfăgărășan, a pie por el centro de Sibiu.",
    periodoMigliore: "verano y principios de otoño, cuando la Transfăgărășan está abierta a los coches (fechas según la nieve)",
    costi: "No apunté los precios.",
    erroriDaEvitare: ["Salir sin haber comprobado en el sitio oficial que la Transfăgărășan esté abierta", "Dar de comer a los osos o bajar del coche si se avista uno"],
    miaEsperienza:
      "La Transfăgărășan está a la altura de su fama: las curvas que suben hasta el Lago Bâlea están entre las carreteras más bonitas que he conducido nunca. El largo regreso a Bucarest el mismo día, sin embargo, se nota.",
    luoghi: [
      {
        nome: "Piața Mare y Museo Brukenthal",
        testo: "La gran plaza de Sibiu, entre las más bonitas de Rumanía, con el Museo Brukenthal, entre los museos más antiguos del país, abierto en 1817.",
        come: "A pie desde el centro.",
        quando: "Mañana.",
        tempo: "2 horas",
        url: "https://www.brukenthalmuseum.ro",
        consiglio: "Un tour de la ciudad con guía local ayuda a entender la historia."
      },
      {
        nome: "Puente de las Mentiras (Podul Minciunilor)",
        testo: "Un puente de hierro de 1859. Según la tradición, cruje si alguien dice una mentira.",
        come: "A pie en el casco antiguo.",
        quando: "Tarde.",
        tempo: "15 minutos",
        costo: "entrada libre",
        consiglio: "Hacer la foto desde abajo, en el callejón de debajo."
      },
      {
        nome: "Carretera Transfăgărășan",
        testo: "La carretera de montaña construida entre 1970 y 1974 bajo Ceaușescu: curvas cerradas que suben hasta el lago Bâlea, entre las mejores carreteras que he conducido. Cerrada en invierno.",
        come: "En coche, desde Sibiu o Curtea de Argeș. Suele estar abierta de finales de junio a finales de octubre, según la nieve: el estado se indica en los carteles de Curtea de Argeș y Cârțișoara.",
        quando: "Verano y principios de otoño; volver a Bucarest el mismo día es larguísimo.",
        tempo: "jornada completa",
        consiglio: "Salir temprano: el largo regreso a Bucarest el mismo día se nota."
      },
      {
        nome: "Lago Bâlea",
        testo: "El lago glaciar a 2.034 metros en la Transfăgărășan, con refugios. En verano se llega en coche, el resto del año en teleférico desde Bâlea Cascadă.",
        come: "En coche por la carretera.",
        quando: "Verano, con cielo despejado.",
        tempo: "1 hora",
        consiglio: "En el Balea Lac Restaurant se come con vista al lago."
      },
      {
        nome: "Presa de Vidraru",
        testo: "Una presa de arco de 166 metros, terminada en 1966, sobre el río Argeș, con un gran lago artificial. Una parada panorámica en el lado sur de la Transfăgărășan.",
        come: "En coche por la carretera.",
        quando: "De día.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Se ve también desde la carretera."
      }
    ],
    sapori: [
      {
        nome: "Cocina rumana de bodega",
        testo: "Platos tradicionales en las bodegas rústicas del centro, a menudo con pocas mesas: mejor reservar."
      },
      {
        nome: "Cocina sajona",
        testo: "La ciudad conserva platos tradicionales y cervezas artesanales."
      }
    ],
    attenzioni: [
      "La Transfăgărășan suele estar cerrada de finales de octubre a finales de junio por la nieve: comprobar el estado antes de salir.",
      "Reservar en los restaurantes pequeños del centro, que tienen pocas mesas.",
      "Conducir con prudencia: curvas cerradas y tráfico de camiones y motos."
    ],
    esperienzeSlugs: ['transfagarasan'],
    tripSlugs: ['transilvania-express'],
    imageAlt: "Las curvas de la Transfăgărășan entre las montañas de Rumanía",
    immagine: '/images/transilvania/transfagarasan-stock.jpg',
  },
]
