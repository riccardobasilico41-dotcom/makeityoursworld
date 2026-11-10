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
    comeArrivare: "A poca distancia de Bran, en coche. Desde Bucarest se llega en coche por el valle de Prahova: unas 2 horas hasta Sinaia, luego una hora hasta Bran y media hora hasta Brașov, o alrededor de 3 horas sin paradas. También hay trenes directos desde la estación Gara de Nord de Bucarest, y el aeropuerto de Bucarest Otopeni está unido a la Gara de Nord en tren en 20-25 minutos. El centro se recorre a pie; el coche hace falta para Râșnov, Bran y Prejmer.",
    comeSpostarsi: "A pie en el centro; en coche hasta Râșnov.",
    periodoMigliore: "última hora de la tarde, para la luz sobre la roca",
    costi: "Los precios de Sergiana no los apunté; el vino y la palinka, sin embargo, cuestan más que la media. Presupuesto diario por persona, orientativo: bajo 40-60 € (pensión y tabernas), medio 70-110 € (hotel en el centro, restaurantes típicos, un par de entradas), alto desde 150 €. Precios comprobados para 2026: Iglesia Negra 30 lei (unos 6 €), teleférico del Tâmpa 45 lei ida y vuelta (unos 9 €).",
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
        orari: "Siempre accesible.",
        lat: 45.6422,
        lng: 25.58922,
        consiglio: "Almuerzo con sopa en hogaza en Sergiana."
      },
      {
        nome: "Iglesia Negra (Biserica Neagră)",
        testo: "La principal iglesia gótica de Rumanía, iniciada en 1383 y terminada en el siglo XV. Tiene un órgano Buchholz de 1839 con unos 4.000 tubos y la mayor colección de «alfombras transilvanas», alfombras anatolias donadas por los mercaderes sajones entre los siglos XV y XVII.",
        come: "A pie desde Piața Sfatului.",
        quando: "Mañana.",
        tempo: "45 minutos",
        costo: "30 lei, unos 6 € (2026)",
        orari: "Del 16 de octubre a abril: martes-sábado 10-18, domingo y lunes 12-18. Del 1 de abril al 15 de octubre cierra a las 19.",
        lat: 45.641,
        lng: 25.58807,
        url: "https://bisericaneagra.ro/program/",
        consiglio: "Los conciertos de órgano de verano son una gran ocasión para verla."
      },
      {
        nome: "Monte Tâmpa y el cartel BRAȘOV",
        testo: "La colina sobre el centro con el cartel al estilo hollywoodiense y un teleférico. Desde arriba se ve toda la ciudad.",
        come: "Teleférico o sendero a pie.",
        quando: "Última hora de la tarde.",
        tempo: "1,5-2 horas",
        costo: "Teleférico ida y vuelta 45 lei, unos 9 € (2026); a pie, gratis",
        lat: 45.63463,
        lng: 25.59346,
        url: "https://www.telecabina-tampa.ro/ro/bilete",
        consiglio: "La subida a pie es fácil pero empinada en algunos puntos."
      },
      {
        nome: "Casa Sfatului y Museo de Historia",
        testo: "El antiguo ayuntamiento en el centro de Piața Sfatului, con la Torre de los Trompeteros desde la que se vigilaban incendios y enemigos. Dentro está el Museo de Historia del condado, con salas sobre el Brașov medieval y los gremios sajones.",
        come: "A pie, en medio de la plaza.",
        quando: "Por la mañana, junto con la plaza.",
        tempo: "45 minutos-1 hora",
        lat: 45.64234,
        lng: 25.58896
      },
      {
        nome: "Strada Republicii",
        testo: "La calle peatonal que sale de Piața Sfatului hacia el norte, con fachadas del siglo XIX, cafés y tiendas. Es el paseo vespertino de la ciudad y la forma más sencilla de orientarse en el centro.",
        come: "A pie desde Piața Sfatului.",
        quando: "Por la tarde-noche, cuando se llena.",
        tempo: "30 minutos",
        costo: "gratis",
        orari: "Siempre accesible.",
        lat: 45.64249,
        lng: 25.59077
      },
      {
        nome: "Puerta de Catalina y Puerta de Șchei",
        testo: "La Puerta de Catalina, de 1559, con sus cuatro torrecillas en las esquinas, es la única puerta medieval de la ciudad que sigue intacta; a pocos metros está la neoclásica Puerta de Șchei, de 1828. Separaban la ciudadela sajona del barrio rumano de Șchei.",
        come: "A pie, en el extremo suroeste del centro, cerca de Strada Sforii.",
        quando: "De día.",
        tempo: "20 minutos",
        costo: "gratis (exteriores)",
        orari: "Siempre visibles desde fuera.",
        lat: 45.63952,
        lng: 25.5861
      },
      {
        nome: "Calle de la Cuerda (Strada Sforii)",
        testo: "Un callejón de poco más de un metro de ancho, considerado de los más estrechos de Europa, que une dos calles. Una curiosidad rápida en el centro.",
        come: "A pie, cerca de la Puerta Șchei.",
        quando: "De día.",
        tempo: "10 minutos",
        costo: "entrada libre",
        orari: "Siempre accesible.",
        lat: 45.63954,
        lng: 25.58859,
        consiglio: "Para combinar con un paseo por el centro."
      },
      {
        nome: "Torre Negra y Torre Blanca",
        testo: "Dos torres de vigilancia en las murallas occidentales, en la ladera de la colina. Se sube por senderos y escaleras cortas, y la vista de los tejados y de la Iglesia Negra es de las mejores de la ciudad sin coger el teleférico.",
        come: "A pie desde el lado oeste de las murallas, por el paseo bajo la colina (Aleea după Ziduri).",
        quando: "A última hora de la tarde, con la luz sobre los tejados.",
        tempo: "1 hora para las dos",
        costo: "Mirador gratis",
        lat: 45.64128,
        lng: 25.58564
      },
      {
        nome: "Bastión de los Tejedores",
        testo: "El bastión mejor conservado de las murallas, construido por el gremio de tejedores, con tres pisos de galerías de madera. Dentro hay una sección del Museo de Historia con una maqueta del Brașov del siglo XVII.",
        come: "A pie, junto a las murallas del sureste al pie del Tâmpa, cerca de la estación del teleférico.",
        quando: "Antes o después de subir al Tâmpa.",
        tempo: "45 minutos",
        lat: 45.63693,
        lng: 25.58899
      },
      {
        nome: "Șchei: iglesia de San Nicolás y Primera Escuela Rumana",
        testo: "En el barrio donde vivían los rumanos, fuera de las murallas sajonas, está la iglesia ortodoxa de San Nicolás, con su esbelto campanario. Al lado, la Primera Escuela Rumana es un museo que recuerda la primera escuela en lengua rumana y guarda libros antiguos y una vieja imprenta.",
        come: "A pie desde la Puerta de Șchei, unos 10 minutos cuesta arriba por Strada Prundului y Piața Unirii.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        lat: 45.63587,
        lng: 25.58121
      },
      {
        nome: "Fortaleza de Râșnov",
        testo: "Una ciudadela campesina fortificada, con el cartel «RASNOV» al estilo hollywoodiense visible desde la fortaleza. El ambiente es más de El Señor de los Anillos que de Drácula, y es de las joyas menos turísticas del viaje.",
        come: "A las afueras de Brașov, en la localidad de Râșnov; se sube a pie o con los medios que funcionen allí.",
        quando: "Última hora de la tarde, por la luz sobre la fortaleza.",
        tempo: "1,5-2 horas",
        orari: "Fortaleza en restauración (2026): se visita el jardín de la ciudadela, con entrada en taquilla. Verano 9-19, invierno 9-17.",
        lat: 45.59059,
        lng: 25.46938,
        url: "https://www.cetatea-rasnov.ro",
        consiglio: "Una ciudadela campesina: servía de refugio a los habitantes en tiempo de guerra."
      },
      {
        nome: "Iglesia fortificada de Prejmer",
        testo: "La mayor iglesia fortificada de Transilvania, patrimonio de la UNESCO: una iglesia gótica rodeada por un anillo de murallas de unos 12 metros, con más de 270 pequeñas habitaciones en varios pisos donde se refugiaban las familias durante los asedios. Es el mejor ejemplo de cómo se defendían los pueblos sajones.",
        come: "En coche, a unos 20 km al noreste de Brașov.",
        quando: "Por la mañana o a primera hora de la tarde.",
        tempo: "1 hora",
        lat: 45.722,
        lng: 25.77374
      },
      {
        nome: "Santuario de osos LiBEARty, Zărnești",
        testo: "Una reserva en el bosque con osos pardos rescatados de jaulas, circos y restaurantes. Solo se visita con tour guiado por pasarelas junto a recintos muy amplios; es una forma de ver osos sin molestar a los salvajes.",
        come: "En coche, a unos 30 km al suroeste de Brașov, cerca de Zărnești. Entradas solo online, hasta 14 días antes.",
        quando: "Por la mañana, cuando los osos están activos: conviene que sea lo primero del día.",
        tempo: "2 horas con el trayecto desde el aparcamiento",
        lat: 45.5951,
        lng: 25.37777,
        consiglio: "Con la Transfăgărășan abierta se puede saltar: a menudo se ven osos a lo largo de la carretera."
      },
      {
        nome: "Poiana Brașov",
        testo: "La estación de montaña de Brașov, a unos 1.000 metros, con pistas de esquí en invierno y senderos en el bosque en verano. También es una base tranquila para quien viaja en coche.",
        come: "En coche o en autobús urbano desde Brașov, unos 12 km de carretera de montaña.",
        quando: "Invierno para esquiar, verano para caminar.",
        tempo: "medio día",
        costo: "Acceso gratis; remontes de pago",
        lat: 45.59671,
        lng: 25.55619
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
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Brașov?",
        risposta: "Para el centro histórico y el Tâmpa basta un día completo. Con dos días se añade Râșnov; con tres, también Bran, el santuario de osos y Prejmer."
      },
      {
        domanda: "¿Se pueden ver Bran y Râșnov en el día desde Brașov?",
        risposta: "Sí: Râșnov está a unos 20 minutos en coche y Bran a media hora. En coche caben sin problema en la misma media jornada."
      },
      {
        domanda: "¿Cómo se sube al Tâmpa y al letrero BRAȘOV?",
        risposta: "En el teleférico junto al Bastión de los Tejedores (45 lei ida y vuelta en 2026) o a pie por el sendero en zigzag, alrededor de una hora de subida."
      },
      {
        domanda: "¿Brașov o Sibiu como base?",
        risposta: "Brașov es más cómoda para los castillos (Bran, Peleș, Râșnov); Sibiu, para la Transfăgărășan. En un viaje en coche conviene dormir en las dos."
      },
      {
        domanda: "¿Hace falta coche en Brașov?",
        risposta: "Para el centro no, se recorre a pie. Para Râșnov, Prejmer, Bran y el santuario de osos el coche es lo más práctico."
      },
      {
        domanda: "¿Se puede visitar la Fortaleza de Râșnov?",
        risposta: "En 2026 la ciudadela está en restauración y se visita el jardín de la fortaleza, con entrada en taquilla. Conviene revisar la web oficial antes de ir."
      }
    ],
    gite: [
      {
        nome: "Castillo de Bran",
        distanza: "unos 30 km, media hora en coche",
        come: "En coche por Râșnov; entrada online, guía aparte.",
        testo: "El castillo asociado a Drácula, sobre un espolón de roca encima del pueblo. Se combina fácilmente con Râșnov en la misma media jornada."
      },
      {
        nome: "Sinaia y Castillo de Peleș",
        distanza: "alrededor de 1 hora en coche",
        come: "En coche por el valle de Prahova; entradas por franjas horarias.",
        testo: "La residencia de verano de Carlos I, uno de los castillos más ricos de Europa. Hay que revisar el calendario: cierra periódicamente por mantenimiento, por ejemplo en noviembre."
      },
      {
        nome: "Viscri",
        distanza: "alrededor de 1 hora y 20 en coche",
        come: "En coche, con el último tramo por carretera secundaria.",
        testo: "Pueblo sajón con la iglesia fortificada del siglo XII, patrimonio de la UNESCO. Entrada 12 lei."
      },
      {
        nome: "Sighișoara",
        distanza: "alrededor de 2 horas en coche",
        come: "En coche o en tren.",
        testo: "El pueblo medieval UNESCO con la Torre del Reloj y la escalera cubierta. Puede ser una parada camino de Sibiu."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Piața Sfatului y Casa Sfatului por la mañana",
          "Iglesia Negra",
          "Puerta de Catalina, Puerta de Șchei y Strada Sforii",
          "Comida con sopa en pan",
          "Bastión de los Tejedores y teleférico del Tâmpa por la tarde",
          "Noche en Strada Republicii"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: centro histórico como en el plan de un día",
          "Día 2: Fortaleza de Râșnov por la mañana, luego Torre Negra y Torre Blanca al atardecer y el barrio de Șchei"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: centro histórico y Tâmpa",
          "Día 2: santuario LiBEARty a primera hora, luego Râșnov y el Castillo de Bran",
          "Día 3: iglesia fortificada de Prejmer, regreso y tarde en Șchei o Poiana Brașov"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro histórico (Cetate)",
        testo: "Pensiones y hoteles dentro o junto a las murallas, a pocos minutos de Piața Sfatului. Más caro y, los fines de semana, más ruidoso.",
        perChi: "quien viaja sin coche y quiere salir de noche a pie",
        fascia: "70-140 €"
      },
      {
        nome: "Șchei",
        testo: "El antiguo barrio rumano justo fuera de las murallas: calles en cuesta, casas bajas y silencio, a 10-15 minutos a pie de la plaza.",
        perChi: "quien busca pensiones familiares más baratas",
        fascia: "45-90 €"
      },
      {
        nome: "Poiana Brașov",
        testo: "Hoteles de montaña entre bosques, a 20 minutos en coche del centro. Cómodo para la naturaleza, menos para salir de noche en la ciudad.",
        perChi: "quien viaja en coche o viene a esquiar",
        fascia: "70-150 €"
      },
      {
        nome: "Râșnov y Bran",
        testo: "Pensiones de pueblo al pie de la fortaleza y hacia Bran, a 20-30 minutos en coche de Brașov. Precios más bajos, hace falta coche.",
        perChi: "quien quiere dormir cerca de los castillos",
        fascia: "40-80 €"
      }
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
    comeArrivare: "En coche de Salina Turda a Sibiu. Desde Salina Turda hay alrededor de 1 hora y 30 en coche, desde Brașov unas 2 horas y 30 por la DN1 pasando por Făgăraș. El aeropuerto de Sibiu tiene vuelos sobre todo vía Múnich y Viena; desde Bucarest también se llega en tren o en coche. Del centro a la Transfăgărășan (Bâlea Cascadă) se tarda alrededor de hora y media, y al Museo ASTRA va el autobús 13 desde la estación.",
    comeSpostarsi: "Coche de alquiler para la Transfăgărășan, a pie por el centro de Sibiu.",
    periodoMigliore: "verano y principios de otoño, cuando la Transfăgărășan está abierta a los coches (fechas según la nieve)",
    costi: "No apunté los precios. Presupuesto diario por persona, orientativo: bajo 40-60 € (pensión y tabernas), medio 70-110 € (hotel en el centro, bodegas típicas, museos), alto desde 150 €, más el combustible para la Transfăgărășan. Precios comprobados para 2026: Palacio Brukenthal 50 lei (unos 10 €), Museo ASTRA 50 lei (unos 10 €), teleférico de Bâlea 80 lei por trayecto (unos 16 €).",
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
        costo: "Plaza gratis; Palacio Brukenthal 50 lei, unos 10 € (2026); entrada única para todas las sedes 120 lei, válida 48 horas",
        orari: "Palacio Brukenthal cerrado lunes y martes. Horario de invierno desde el 28 de octubre de 2026: miércoles-domingo 9-17, taquilla hasta las 16:15; en verano 10-18.",
        lat: 45.79678,
        lng: 24.15183,
        url: "https://www.brukenthalmuseum.ro/mnb/preturi",
        consiglio: "Un tour de la ciudad con guía local ayuda a entender la historia."
      },
      {
        nome: "Piața Mică",
        testo: "La Plaza Pequeña, más recogida que la Piața Mare, con las casas de los antiguos gremios y soportales. Desde aquí se baja a la ciudad baja pasando bajo el Puente de las Mentiras.",
        come: "A pie, atravesando la Torre del Consejo desde la Piața Mare.",
        quando: "Por la noche, con los cafés abiertos.",
        tempo: "30 minutos",
        costo: "gratis",
        orari: "Siempre accesible.",
        lat: 45.79772,
        lng: 24.15163
      },
      {
        nome: "Puente de las Mentiras (Podul Minciunilor)",
        testo: "Un puente de hierro de 1859. Según la tradición, cruje si alguien dice una mentira.",
        come: "A pie en el casco antiguo.",
        quando: "Tarde.",
        tempo: "15 minutos",
        costo: "entrada libre",
        orari: "Siempre accesible.",
        lat: 45.79832,
        lng: 24.1508,
        consiglio: "Hacer la foto desde abajo, en el callejón de debajo."
      },
      {
        nome: "Torre del Consejo (Turnul Sfatului)",
        testo: "La torre que une la Piața Mare con la Piața Mică, con un paso abovedado en la base. Arriba hay un mirador sobre los tejados y sus «ojos», las buhardillas en forma de párpado típicas de Sibiu.",
        come: "A pie; se sube por escaleras interiores.",
        quando: "A última hora de la tarde, con la luz rasante sobre los tejados.",
        tempo: "30 minutos",
        lat: 45.79761,
        lng: 24.15213
      },
      {
        nome: "Catedral evangélica de Santa María",
        testo: "La gran iglesia gótica luterana de la Piața Huet, símbolo de la comunidad sajona, con una torre de más de 70 metros que domina el centro. Dentro hay lápidas funerarias y un gran órgano; se puede subir a la torre.",
        come: "A pie, en la Piața Huet junto a la Piața Mare.",
        quando: "Por la mañana.",
        tempo: "45 minutos",
        lat: 45.79777,
        lng: 24.15008
      },
      {
        nome: "Murallas y torres de Strada Cetății",
        testo: "El tramo mejor conservado de las murallas medievales, a lo largo de un paseo arbolado con tres torres en fila: la de los Carpinteros, la de los Alfareros y la de los Alabarderos. Un paseo tranquilo justo fuera del circuito de plazas.",
        come: "A pie, a 10 minutos al sureste de la Piața Mare.",
        quando: "Por la mañana o a última hora de la tarde.",
        tempo: "45 minutos",
        costo: "gratis",
        orari: "Siempre accesible.",
        lat: 45.79424,
        lng: 24.15321
      },
      {
        nome: "Pasaje de las Escaleras (Pasajul Scărilor)",
        testo: "Una escalinata medieval que baja de la ciudad alta, junto a la catedral evangélica, a la ciudad baja, entre muros de contención y arcos. Es la conexión más sugerente entre los dos niveles de Sibiu.",
        come: "A pie desde la Piața Huet.",
        quando: "De día.",
        tempo: "15 minutos",
        costo: "gratis",
        orari: "Siempre accesible.",
        lat: 45.79748,
        lng: 24.14927
      },
      {
        nome: "Catedral ortodoxa de la Santísima Trinidad",
        testo: "La catedral metropolitana ortodoxa, de principios del siglo XX, inspirada en Santa Sofía de Estambul, con el interior totalmente pintado y dorado. Hace de contrapunto a las iglesias góticas sajonas del centro.",
        come: "A pie, en Strada Mitropoliei, a 5 minutos de la Piața Mare.",
        quando: "Por la mañana, fuera de los oficios.",
        tempo: "20-30 minutos",
        costo: "entrada libre",
        lat: 45.79459,
        lng: 24.14815
      },
      {
        nome: "Museo ASTRA al aire libre",
        testo: "Uno de los mayores museos al aire libre de Europa: 96 hectáreas de bosque en la Dumbrava Sibiului con casas campesinas, molinos de viento, iglesias de madera y talleres artesanos traídos de toda Rumanía, a lo largo de 10 km de caminos. Cuenta la vida rural mejor que cualquier sala.",
        come: "A unos 6 km del centro, en la carretera de Rășinari y Păltiniș: en coche, en bici por el carril bici o con el autobús 13 desde la estación.",
        quando: "Un día seco, de primavera a otoño.",
        tempo: "3 horas",
        costo: "50 lei, unos 10 € (2026)",
        orari: "Todos los días; de septiembre a abril 8-17, última entrada a las 16:45 en el acceso principal.",
        lat: 45.75379,
        lng: 24.11274,
        url: "https://muzeulastra.ro/program-de-vizitare/",
        consiglio: "Se camina mucho por tierra: hace falta calzado cómodo."
      },
      {
        nome: "Carretera Transfăgărășan",
        testo: "La carretera de montaña construida entre 1970 y 1974 bajo Ceaușescu: curvas cerradas que suben hasta el lago Bâlea, entre las mejores carreteras que he conducido. Cerrada en invierno.",
        come: "En coche, desde Sibiu o Curtea de Argeș. Suele estar abierta de finales de junio a finales de octubre, según la nieve: el estado se indica en los carteles de Curtea de Argeș y Cârțișoara.",
        quando: "Verano y principios de otoño; volver a Bucarest el mismo día es larguísimo.",
        tempo: "jornada completa",
        costo: "Carretera sin peaje",
        orari: "Tramo alto abierto normalmente del 20 de junio al 31 de octubre, según la nieve.",
        lat: 45.60248,
        lng: 24.61401,
        consiglio: "Salir temprano: el largo regreso a Bucarest el mismo día se nota."
      },
      {
        nome: "Bâlea Cascadă y el teleférico",
        testo: "En la vertiente norte, a unos 1.200 metros, están la cascada de Bâlea y la estación inferior del teleférico que sube al lago. Cuando la carretera alta está cerrada, es la única forma de llegar al Lago Bâlea.",
        come: "En coche desde Cârțișoara por la Transfăgărășan; el teleférico sube 3,7 km hasta 2.034 metros en unos 15 minutos.",
        quando: "Todo el año; en invierno es el acceso al lago y al Ice Hotel.",
        tempo: "1-2 horas con el teleférico",
        costo: "Teleférico 80 lei por trayecto, unos 16 € (2026)",
        orari: "Teleférico 9-17 en invierno, 9-18 en verano; sale con un mínimo de 10 personas.",
        lat: 45.63657,
        lng: 24.60725,
        url: "https://www.balealac.ro"
      },
      {
        nome: "Lago Bâlea",
        testo: "El lago glaciar a 2.034 metros en la Transfăgărășan, con refugios. En verano se llega en coche, el resto del año en teleférico desde Bâlea Cascadă.",
        come: "En coche por la carretera.",
        quando: "Verano, con cielo despejado.",
        tempo: "1 hora",
        costo: "Gratis en coche; en teleférico 80 lei por trayecto (2026)",
        lat: 45.60331,
        lng: 24.61705,
        url: "https://www.balealac.ro",
        consiglio: "En el Balea Lac Restaurant se come con vista al lago."
      },
      {
        nome: "Ciudadela de Poenari",
        testo: "Los restos de la fortaleza ligada a Vlad el Empalador, sobre una cresta encima del valle del Argeș, en la vertiente sur de la Transfăgărășan. Para llegar se suben unos 1.480 escalones por el bosque: la vista sobre el valle compensa el esfuerzo.",
        come: "En coche, poco al norte de Arefu, antes de la presa de Vidraru subiendo desde el sur.",
        quando: "Una mañana o tarde seca; puede cerrar por presencia de osos.",
        tempo: "1,5-2 horas con la subida",
        lat: 45.3539,
        lng: 24.63526,
        consiglio: "Es la verdadera fortaleza de Drácula, mucho más que el castillo de Bran: merece el esfuerzo para quien ama la historia."
      },
      {
        nome: "Presa de Vidraru",
        testo: "Una presa de arco de 166 metros, terminada en 1966, sobre el río Argeș, con un gran lago artificial. Una parada panorámica en el lado sur de la Transfăgărășan.",
        come: "En coche por la carretera.",
        quando: "De día.",
        tempo: "30 minutos",
        costo: "entrada libre",
        orari: "Siempre visible desde la carretera.",
        lat: 45.36631,
        lng: 24.63147,
        consiglio: "Se ve también desde la carretera."
      },
      {
        nome: "Ciudadela de Făgăraș",
        testo: "Una fortaleza de llanura rodeada por un foso con agua, de las mejor conservadas de Rumanía, en la ciudad de Făgăraș, en la carretera entre Brașov y Sibiu. Dentro está el museo de la Țara Făgărașului.",
        come: "En coche por la DN1, alrededor de 1 hora desde Sibiu y 1 hora desde Brașov.",
        quando: "Como parada de paso en la carretera Brașov-Sibiu.",
        tempo: "1 hora",
        lat: 45.84517,
        lng: 24.97375
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
    faq: [
      {
        domanda: "¿Cuándo está abierta la Transfăgărășan?",
        risposta: "El tramo alto suele estar abierto del 20 de junio al 31 de octubre, pero las fechas cambian con la nieve: hay que comprobarlas antes de salir. El resto del año al Lago Bâlea solo se sube en teleférico desde Bâlea Cascadă."
      },
      {
        domanda: "¿Cuánto tiempo se tarda en recorrer la Transfăgărășan?",
        risposta: "De Sibiu al Lago Bâlea se tarda alrededor de hora y media; con paradas en Vidraru y Poenari hace falta un día entero. Del lago a Bucarest quedan unas 3 horas y 45 de coche."
      },
      {
        domanda: "¿Se ven osos en la Transfăgărășan?",
        risposta: "Pasa a menudo, sobre todo en la vertiente sur. No se baja del coche ni se les da de comer: está prohibido y es peligroso; se fotografía desde la ventanilla."
      },
      {
        domanda: "¿Cuántos días hacen falta en Sibiu?",
        risposta: "Un día basta para el centro histórico; con dos se añade la Transfăgărășan, con tres también el Museo ASTRA y una iglesia fortificada."
      },
      {
        domanda: "¿El Museo Brukenthal abre los lunes?",
        risposta: "No: el Palacio Brukenthal cierra lunes y martes. Los demás días, en invierno, abre de 9 a 17."
      },
      {
        domanda: "¿Hay que reservar restaurante en Sibiu?",
        risposta: "En las bodegas pequeñas del centro, sí: Crama Sibiul Vechi, por ejemplo, tiene muy pocas mesas y la reserva es obligatoria."
      }
    ],
    gite: [
      {
        nome: "Cisnădioara",
        distanza: "unos 12 km, 20 minutos en coche",
        come: "En coche por Cisnădie; el último tramo, a pie cuesta arriba hasta la iglesia.",
        testo: "Una pequeña basílica románica fortificada sobre una colina encima del pueblo sajón, con vistas a los montes Cibin."
      },
      {
        nome: "Biertan",
        distanza: "unos 80 km, 1 hora y 30 en coche",
        come: "En coche hacia Mediaș, luego carretera secundaria.",
        testo: "Una de las mayores iglesias fortificadas sajonas, patrimonio de la UNESCO, con tres recintos de murallas sobre el pueblo."
      },
      {
        nome: "Salina Turda",
        distanza: "alrededor de 1 hora y 30 en coche",
        come: "En coche por la autopista A1 y luego hacia Turda; entrada online.",
        testo: "Las salinas subterráneas con su lago y barcas: dentro hace fresco todo el año, hace falta una sudadera."
      },
      {
        nome: "Sighișoara",
        distanza: "alrededor de 1 hora y 45-2 horas en coche",
        come: "En coche o en tren.",
        testo: "El pueblo medieval UNESCO con la Torre del Reloj, combinable con Viscri o Biertan."
      }
    ],
    programmi: [
      {
        titolo: "1 día en Sibiu",
        tappe: [
          "Piața Mare y Museo Brukenthal por la mañana",
          "Torre del Consejo y Piața Mică",
          "Puente de las Mentiras y Pasaje de las Escaleras hacia la ciudad baja",
          "Catedral evangélica y Piața Huet",
          "Murallas de Strada Cetății por la tarde",
          "Cena en una bodega del centro, con reserva"
        ]
      },
      {
        titolo: "2 días: Sibiu y Transfăgărășan",
        tappe: [
          "Día 1: Sibiu como en el plan de un día",
          "Día 2: salida temprano, 1 hora y 30 hasta Bâlea Cascadă, curvas hasta el Lago Bâlea, bajada por la vertiente sur con Vidraru y Poenari"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: centro histórico de Sibiu",
          "Día 2: Museo ASTRA por la mañana, tarde en Cisnădioara o en la iglesia fortificada de Biertan",
          "Día 3: Transfăgărășan de norte a sur, con el Lago Bâlea, la presa de Vidraru y Poenari, luego Curtea de Argeș o regreso a Bucarest (unas 3 horas y 45 desde el lago)"
        ]
      }
    ],
    zone: [
      {
        nome: "Ciudad alta (centro histórico)",
        testo: "Hoteles y pensiones alrededor de la Piața Mare y la Piața Mică. La zona más cara, sobre todo durante el mercado navideño.",
        perChi: "quien quiere todo a pie",
        fascia: "60-130 €"
      },
      {
        nome: "Ciudad baja (Orașul de Jos)",
        testo: "Las calles bajo las murallas, con casas bajas y pensiones familiares, a 5-10 minutos a pie cuesta arriba de las plazas.",
        perChi: "quien busca precios más bajos cerca del centro",
        fascia: "45-90 €"
      },
      {
        nome: "Cârțișoara y la vertiente norte de la Transfăgărășan",
        testo: "Pensiones de pueblo en la entrada norte de la carretera, a alrededor de una hora de Sibiu. Cómodas para llegar a las curvas antes del tráfico.",
        perChi: "quien quiere salir al amanecer a la carretera",
        fascia: "40-80 €"
      }
    ],
    esperienzeSlugs: ['transfagarasan'],
    tripSlugs: ['transilvania-express'],
    imageAlt: "Las curvas de la Transfăgărășan entre las montañas de Rumanía",
    immagine: '/images/transilvania/transfagarasan-stock.jpg',
  },
]
