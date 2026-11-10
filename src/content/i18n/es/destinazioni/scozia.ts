import type { Destinazione } from '@/lib/types'

const IMG = '/images/viaggi/scozia-highlands-distillerie'

export const destinazioniScozia: Destinazione[] = [
  {
    slug: 'edimburgo',
    paeseSlug: 'scozia',
    ordine: 1,
    nome: 'Edimburgo',
    tipologia: ['città', 'storia', 'cultura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital de Escocia, construida sobre colinas volcánicas. La Old Town medieval baja desde el castillo por la Royal Mile hasta el palacio de Holyrood; debajo, la New Town georgiana. Juntas son Patrimonio de la UNESCO.',
    percheAndarci:
      'Por el castillo sobre la roca, los callejones de la Old Town y las vistas desde Calton Hill y desde Arthur\'s Seat. Es también el punto de partida más cómodo para la ruta en coche.',
    cosaVedere: ['El Castillo de Edimburgo', 'La Royal Mile', 'Holyrood y Arthur\'s Seat', 'Calton Hill', 'La New Town y los Princes Street Gardens', 'El Museo Nacional de Escocia'],
    cosaFare: ['Subir a Arthur\'s Seat', 'El atardecer desde Calton Hill', 'Perderse por los closes, los callejones que bajan de la Royal Mile'],
    comeArrivare:
      'Vuelos directos desde Italia al aeropuerto de Edimburgo; desde el Reino Unido también en tren, hasta la estación de Waverley, en el centro. Desde el aeropuerto el tranvía llega a Princes Street en 30-35 minutos por unos 7,90 £, con billete en la máquina antes de subir; el Airlink 100 va a Waverley en media hora por unos 6 £; el taxi cuesta unos 25-30 £. Desde Londres King\'s Cross los trenes directos tardan unas cuatro horas y media. Hace falta la autorización UK ETA, 20 £ (2026).',
    comeSpostarsi: 'A pie, en autobús y en tranvía. El coche conviene recogerlo el día en que se sale hacia las Highlands.',
    periodoMigliore: 'de mayo a septiembre; en agosto están los festivales y los precios suben mucho',
    costi:
      'Castillo: 23,50 libras online, 26 en taquilla (adultos, 2026). Desde el 24 de julio de 2026 hay una tasa turística del 5 % sobre el precio del alojamiento, para las 5 primeras noches. Presupuesto orientativo por día y persona, compartiendo doble: bajo 90-120 €, medio 170-240 €, alto más de 350 € (en agosto mucho más).',
    erroriDaEvitare: [
      'Ir al castillo sin entrada: las entradas se agotan a menudo con mucha antelación',
      'Reservar en agosto en el último momento, cuando está el Fringe',
      'Tener el coche en la ciudad: no hace falta y aparcar cuesta',
    ],
    miaEsperienza: 'Estuve en julio, en mi viaje por Escocia.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Castillo de Edimburgo",
        "testo": "La fortaleza en lo alto de la Castle Rock, sobre la ciudad. Dentro están los Honores de Escocia, las joyas de la Corona escocesa, y la capilla de St Margaret, del siglo XII, considerada el edificio más antiguo de Edimburgo.",
        "come": "A pie desde la parte alta de la Royal Mile. La entrada online cuesta menos y conviene comprarla antes: cuando se agotan las entradas online, en el castillo no se venden.",
        "quando": "A la apertura, desde las 9:30.",
        "tempo": "2-3 horas",
        "costo": "23,50 £ online (unos 27 €), 26 £ en taquilla (adultos, 2026)",
        "orari": "Todos los días desde las 9:30; cierra a las 18 de abril a septiembre y a las 17 de octubre a marzo, última entrada una hora antes.",
        "lat": 55.9486,
        "lng": -3.1999,
        "url": "https://www.edinburghcastle.scot"
      },
      {
        "nome": "Royal Mile",
        "testo": "La calle de la Old Town que baja del castillo al palacio de Holyrood, con la catedral de St Giles a mitad de camino. A los lados se abren los closes, callejones estrechos y empinados.",
        "come": "A pie, de arriba abajo.",
        "quando": "A primera hora de la mañana o por la noche, cuando hay menos gente.",
        "tempo": "medio día",
        "costo": "gratuito",
        "lat": 55.95,
        "lng": -3.188
      },
      {
        "nome": "Arthur's Seat",
        "testo": "La colina de un antiguo volcán dentro del Holyrood Park, a dos pasos de la Old Town. Desde la cima se ven la ciudad y el mar.",
        "come": "A pie desde Holyrood, por senderos de subida. Con el viento, arriba hace frío incluso en verano.",
        "quando": "Con el cielo despejado, mejor por la mañana o al atardecer.",
        "tempo": "2 horas ida y vuelta",
        "costo": "gratuito",
        "lat": 55.9441,
        "lng": -3.1618
      },
      {
        "nome": "Calton Hill",
        "testo": "La colina sobre el final de Princes Street, con los monumentos neoclásicos y la vista de la Old Town, del castillo y de Arthur's Seat.",
        "come": "A pie, con una subida corta.",
        "quando": "Al atardecer.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 55.9553,
        "lng": -3.1826
      },
      {
        "nome": "Palacio de Holyroodhouse",
        "testo": "La residencia oficial del soberano en Escocia, al final de la Royal Mile, con los aposentos de María Estuardo y las ruinas de la abadía de Holyrood en el parque. Enfrente está el Parlamento escocés, un edificio contemporáneo muy discutido.",
        "come": "A pie bajando la Royal Mile; entrada con audioguía, mejor online.",
        "quando": "Por la mañana, antes de subir a Arthur's Seat, que empieza aquí.",
        "tempo": "1h30",
        "costo": "de pago, con audioguía",
        "orari": "Cerrado cuando el soberano está en residencia, normalmente entre finales de junio y principios de julio, y algunos días de invierno: consultar el calendario.",
        "lat": 55.9527,
        "lng": -3.1722,
        "url": "https://www.rct.uk/visit/palace-of-holyroodhouse"
      },
      {
        "nome": "National Museum of Scotland",
        "testo": "El museo nacional, gratuito, con la historia de Escocia desde los pictos hasta la oveja Dolly, el ajedrez de Lewis y una gran galería de ciencia y naturaleza. Desde la terraza de la azotea se ve el castillo.",
        "come": "En Chambers Street, a cinco minutos de la Royal Mile por George IV Bridge.",
        "quando": "Una tarde de lluvia.",
        "tempo": "2 horas",
        "costo": "gratuito",
        "orari": "Todos los días 10-17.",
        "lat": 55.9469,
        "lng": -3.1897,
        "url": "https://www.nms.ac.uk/"
      },
      {
        "nome": "Scottish National Gallery y Princes Street Gardens",
        "testo": "La pinacoteca nacional, gratuita, con Rafael, Tiziano, Vermeer, Velázquez y pintores escoceses como Raeburn. Está al pie de la colina, en los jardines que separan la Old Town de la New Town, bajo el castillo.",
        "come": "En el Mound, a dos minutos de Waverley y de Princes Street.",
        "quando": "Por la mañana; los jardines por la tarde con el sol sobre el castillo.",
        "tempo": "1h30",
        "costo": "gratuito",
        "orari": "Todos los días 10-17.",
        "lat": 55.9509,
        "lng": -3.1959,
        "url": "https://www.nationalgalleries.org/"
      },
      {
        "nome": "Catedral de St Giles",
        "testo": "La iglesia principal de Edimburgo, a mitad de la Royal Mile, con la corona de piedra en el campanario y la Thistle Chapel, tallada en madera y dedicada a la orden del Cardo. Aquí predicó John Knox.",
        "come": "En la Royal Mile, en Parliament Square. Entrada libre con donativo sugerido; visita al tejado de pago en algunas épocas.",
        "quando": "A media mañana, bajando del castillo.",
        "tempo": "30-45 minutos",
        "costo": "entrada libre, donativo sugerido",
        "lat": 55.9495,
        "lng": -3.1909,
        "url": "https://www.stgilescathedral.org.uk/"
      },
      {
        "nome": "Victoria Street y Grassmarket",
        "testo": "La calle curva de fachadas de colores que baja del George IV Bridge a la plaza del Grassmarket, antiguo mercado de ganado y lugar de ahorcamientos, hoy llena de pubs. Desde aquí se ve el castillo desde abajo.",
        "come": "A pie desde la Royal Mile; desde el Grassmarket la escalera del Vennel lleva a una de las mejores vistas del castillo.",
        "quando": "A primera hora para las fotos; por la noche para los pubs.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 55.9478,
        "lng": -3.1945
      },
      {
        "nome": "Greyfriars Kirkyard",
        "testo": "El cementerio del siglo XVII con las tumbas dominadas por el castillo y la estatua del perro Bobby, que según la historia veló durante años la tumba de su amo. Algunas lápidas dieron nombre a personajes de Harry Potter.",
        "come": "Entrada por Candlemaker Row, junto a la estatua de Bobby, a dos pasos del National Museum.",
        "quando": "De día; por la noche hay tours de fantasmas.",
        "tempo": "30 minutos",
        "costo": "gratuito",
        "lat": 55.9469,
        "lng": -3.1925
      },
      {
        "nome": "The Real Mary King's Close",
        "testo": "Callejones y casas del siglo XVII que quedaron enterrados bajo el edificio de las City Chambers, visitables solo con guía. Se cuenta la vida de la Old Town, la peste y las historias del close.",
        "come": "Entrada en la Royal Mile frente a St Giles. Visitas guiadas con hora, que se reservan online.",
        "quando": "Un día de lluvia; en verano se agotan las franjas.",
        "tempo": "1 hora",
        "costo": "unos 28,50 £ (unos 33 €, 2026), solo con visita guiada",
        "lat": 55.95,
        "lng": -3.1905,
        "url": "https://www.realmarykingsclose.com/"
      },
      {
        "nome": "Dean Village y Water of Leith",
        "testo": "Un antiguo pueblo de molinos junto al río, a diez minutos del West End, con casas de piedra y el puente de Telford. El sendero del Water of Leith sigue hasta la Scottish National Gallery of Modern Art y Stockbridge.",
        "come": "A pie desde el final de Princes Street por Queensferry Street, bajando por Bell's Brae.",
        "quando": "El domingo por la mañana, con el mercado de Stockbridge.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "lat": 55.952,
        "lng": -3.217,
        "consiglio": "Es un barrio habitado: nada de drones y voz baja entre las casas."
      },
      {
        "nome": "Camera Obscura and World of Illusions",
        "testo": "Una cámara oscura victoriana en lo alto de una torre junto al castillo, que proyecta la ciudad en directo sobre una mesa, más cinco plantas de ilusiones ópticas. Ideal sobre todo con niños.",
        "come": "En Castlehill, en lo alto de la Royal Mile; entrada más barata online.",
        "quando": "Con cielo despejado, para la proyección.",
        "tempo": "1h30",
        "costo": "unos 25 £ en taquilla, unos 21 £ online (unos 29 € y 24 €, 2026)",
        "lat": 55.949,
        "lng": -3.1957,
        "url": "https://www.camera-obscura.co.uk/"
      },
      {
        "nome": "Leith y el Royal Yacht Britannia",
        "testo": "El puerto de Edimburgo, con restaurantes de pescado en el Shore y el yate de la familia real amarrado en el Ocean Terminal. A bordo se ven los aposentos de la reina Isabel y la sala de máquinas.",
        "come": "Tranvía desde Princes Street hasta Ocean Terminal o Newhaven, unos 20 minutos.",
        "quando": "Por la tarde, quedándose en Leith a cenar.",
        "tempo": "medio día",
        "costo": "Britannia 23 £ online, 25 £ en taquilla (unos 27-29 €, desde octubre de 2026); el barrio se recorre gratis",
        "lat": 55.9822,
        "lng": -3.1772,
        "url": "https://www.royalyachtbritannia.co.uk/"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Castillo a la apertura, con entrada online",
          "Bajada por la Royal Mile, con St Giles y The Real Mary King's Close",
          "Comida y Victoria Street, Grassmarket y Greyfriars",
          "Holyrood y atardecer desde Calton Hill"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: castillo, Royal Mile, St Giles, Victoria Street y Grassmarket, Calton Hill al atardecer",
          "Día 2: Holyrood y Arthur's Seat por la mañana; National Museum of Scotland; New Town, Princes Street Gardens y Scottish National Gallery"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: castillo, Royal Mile, Mary King's Close, Grassmarket",
          "Día 2: Holyrood, Arthur's Seat, National Museum, Calton Hill al atardecer",
          "Día 3: Dean Village y Stockbridge por la mañana, luego Leith y el Britannia, con cena en el Shore; o excursión a Stirling"
        ]
      }
    ],
    zone: [
      {
        "nome": "Old Town",
        "perChi": "quien quiere hacerlo todo a pie",
        "testo": "A lo largo y alrededor de la Royal Mile. Cómodo, pero ruidoso por la noche y caro en verano.",
        "fascia": "160-300 €"
      },
      {
        "nome": "New Town",
        "perChi": "quien quiere más calma",
        "testo": "Las calles georgianas bajo el castillo, a pocos minutos de la estación de Waverley.",
        "fascia": "170-320 €"
      },
      {
        "nome": "Leith",
        "perChi": "quien busca precios más bajos y buenos restaurantes",
        "testo": "El puerto, unido al centro por el tranvía.",
        "fascia": "110-200 €"
      }
    ],
    gite: [
      {
        "nome": "Stirling",
        "distanza": "50 minutos en tren",
        "come": "Trenes frecuentes desde Waverley; desde la estación se sube a pie al castillo en 15-20 minutos.",
        "testo": "El castillo de los reyes Estuardo sobre la llanura de las batallas por la independencia, y el Wallace Monument en la colina de enfrente."
      },
      {
        "nome": "South Queensferry y los puentes del Forth",
        "distanza": "15 km, 20 minutos en tren",
        "come": "Tren desde Waverley a Dalmeny y 15 minutos a pie cuesta abajo hasta el pueblo.",
        "testo": "El pueblo bajo el Forth Bridge, el puente ferroviario rojo del siglo XIX patrimonio UNESCO, junto a dos puentes modernos. En temporada hay barcos a la isla de Inchcolm."
      },
      {
        "nome": "Capilla de Rosslyn",
        "distanza": "12 km, 45 minutos en autobús",
        "come": "Autobús Lothian 37 desde el centro hasta Roslin; entrada con hora, que se reserva.",
        "testo": "Una capilla del siglo XV cubierta de esculturas en piedra, famosa por El código Da Vinci. Alrededor hay un valle boscoso con los restos del castillo."
      },
      {
        "nome": "North Berwick",
        "distanza": "35 minutos en tren",
        "come": "Tren directo desde Waverley; el pueblo está junto a la estación.",
        "testo": "Un pueblo de mar con playas, el Seabird Centre y salidas en barco al Bass Rock, la mayor colonia de alcatraces del mundo."
      }
    ],
    sapori: [
      { nome: 'Haggis', testo: 'El plato nacional, de asaduras de cordero, avena y especias, servido con neeps and tatties, nabo y patatas.' },
      { nome: 'Cullen skink', testo: 'Una sopa espesa de eglefino ahumado, patatas y cebolla.' },
    ],
    attenzioni: ['En agosto la ciudad está llena por los festivales: alojamiento que hay que reservar con meses de antelación.', 'El viento en Arthur\'s Seat y Calton Hill: hace falta una chaqueta incluso en verano.'],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Edimburgo?",
        "risposta": "Dos días para castillo, Old Town, Holyrood y New Town; tres para añadir Arthur's Seat con calma, Leith o una excursión a Stirling."
      },
      {
        "domanda": "¿Hay que reservar el castillo de Edimburgo?",
        "risposta": "Sí: online cuesta 23,50 £ frente a 26 en taquilla (2026), y en verano, cuando se agotan las online, no quedan en el sitio."
      },
      {
        "domanda": "¿Conviene ir a Edimburgo en agosto?",
        "risposta": "Solo por los festivales, empezando por el Fringe: la ciudad se llena, el alojamiento cuesta el doble y hay que reservarlo con meses. Mayo, junio y septiembre tienen días largos y menos gente."
      },
      {
        "domanda": "¿Hay tasa turística en Edimburgo?",
        "risposta": "Sí, desde el 24 de julio de 2026: el 5% del precio del alojamiento, durante las cinco primeras noches."
      },
      {
        "domanda": "¿Cómo se va del aeropuerto al centro de Edimburgo?",
        "risposta": "El tranvía llega a Princes Street en 30-35 minutos por unos 7,90 £, con billete comprado antes de subir. El Airlink 100 va a Waverley en media hora por unos 6 £."
      },
      {
        "domanda": "¿Dónde dormir en Edimburgo?",
        "risposta": "Old Town para tenerlo todo a pie, New Town para más calma cerca de Waverley, Leith para gastar menos y comer bien. Fuera de agosto una doble cuesta unos 110-300 €."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'El Castillo de Edimburgo sobre la roca, encima del verde de los Princes Street Gardens',
    immagine: `${IMG}/giorno-02-castello.webp`,
  },
  {
    slug: 'glasgow',
    paeseSlug: 'scozia',
    ordine: 2,
    nome: 'Glasgow',
    tipologia: ['città', 'musei', 'architettura'],
    giorniConsigliati: 'medio día o 1 día',
    visitataPersonalmente: true,
    introduzione: 'La ciudad más grande de Escocia, a una hora de Edimburgo. Victoriana, industrial y llena de museos, con la catedral medieval y la Necrópolis en la colina de al lado.',
    percheAndarci: 'Para una parada de camino a Loch Lomond: la catedral, la Necrópolis y el Kelvingrove, el museo de arte más famoso de la ciudad.',
    cosaVedere: ['La catedral de Glasgow', 'La Necrópolis', 'El Kelvingrove Art Gallery and Museum', 'El centro victoriano alrededor de George Square'],
    cosaFare: ['Subir a la Necrópolis para ver la catedral desde arriba', 'Un paseo por el West End y el Kelvingrove Park'],
    comeArrivare: 'En tren o en coche desde Edimburgo, en una hora aproximadamente.',
    comeSpostarsi: 'A pie en el centro, el metro para el West End.',
    erroriDaEvitare: ['Entrar en el centro en coche sin haber comprobado las normas de las zonas de bajas emisiones: conviene aparcar fuera y usar el metro'],
    miaEsperienza: 'Solo pasé de camino.',
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'La catedral de Glasgow vista desde la Necrópolis, entre las lápidas victorianas',
    immagine: `${IMG}/glasgow-cattedrale.webp`,
  },
  {
    slug: 'loch-lomond-glencoe',
    paeseSlug: 'scozia',
    ordine: 3,
    nome: 'Loch Lomond y Glencoe',
    tipologia: ['natura', 'lago', 'montagna', 'on the road'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La primera muestra de las Highlands. Loch Lomond es el gran lago al norte de Glasgow, en el parque nacional de Loch Lomond y los Trossachs. Más al norte la carretera cruza el páramo de Rannoch Moor y baja al valle de Glencoe, entre las montañas más famosas de Escocia.',
    percheAndarci: 'Por la carretera entre Rannoch Moor y Glencoe, una de las más espectaculares del país, y por las caminatas cortas a orillas del lago.',
    cosaVedere: ['Luss, en el Loch Lomond', 'Rannoch Moor', 'El Buachaille Etive Mòr', 'Las Three Sisters de Glencoe', 'El pueblo de Glencoe'],
    cosaFare: ['Parar en los miradores a lo largo de la A82', 'Una caminata corta por el valle de Glencoe', 'Pasear por Luss, junto al lago'],
    comeArrivare: 'En coche por la A82, desde Glasgow hacia Fort William.',
    comeSpostarsi: 'En coche, parando en los aparcamientos señalizados y nunca en el arcén.',
    periodoMigliore: 'de mayo a septiembre; en invierno el valle es precioso, pero solo se camina con experiencia',
    erroriDaEvitare: [
      'Pararse a hacer fotos en el arcén de la A82: solo se usan los aparcamientos',
      'Salir por un sendero de montaña subestimando el tiempo: la niebla y la lluvia llegan rápido',
    ],
    attenzioni: ['Mosquitos diminutos (midges) en verano, sobre todo por la tarde y sin viento: hace falta repelente.'],
    miaEsperienza: 'Hice el Loch Lomond y Glencoe. Glencoe es preciosa.',
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'El valle de Glencoe bajo las Three Sisters, con las nubes bajas sobre las cumbres',
    immagine: `${IMG}/glencoe-three-sisters.webp`,
  },
  {
    slug: 'oban',
    paeseSlug: 'scozia',
    ordine: 4,
    nome: 'Oban',
    tipologia: ['mare', 'cibo', 'distilleria'],
    giorniConsigliati: '1-2 noches',
    visitataPersonalmente: true,
    introduzione:
      'Un pueblo junto al mar en la costa oeste, con el puerto del que salen los ferris a Mull y a las otras islas. Sobre el puerto está la McCaig\'s Tower, el coliseo de piedra que se ve desde toda la bahía. En el centro está la destilería de Oban.',
    percheAndarci: 'Por el pescado y el marisco, la destilería en el centro y los ferris a las islas.',
    cosaVedere: ['La McCaig\'s Tower', 'El puerto y el North Pier', 'La destilería de Oban'],
    cosaFare: ['Cena de pescado en el puerto', 'La visita a la destilería de Oban', 'Una excursión de un día a Mull con el ferri de CalMac'],
    doveMangiare:
      'Ee-Usk, en el North Pier: restaurante de pescado sobre el agua, con ostras, mejillones, cigalas y vieiras. Comidas desde las 12, cenas desde las 17:30. Se reserva en la web eeusk.com o en el número 01631 565 666; la terraza acristalada no se reserva.',
    comeArrivare: 'En coche desde Glasgow, pasando por Loch Lomond. En tren desde Glasgow Queen Street.',
    comeSpostarsi: 'A pie en el centro.',
    erroriDaEvitare: ['Llegar en verano sin reservar la visita a la destilería, que se llena también por los cruceros', 'No reservar la cena: los restaurantes de pescado del puerto están llenos'],
    miaEsperienza: 'En Ee-Usk, en el puerto de Oban, comí un pescado buenísimo. Y desde Oban fui a las Hébridas.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Destilería de Oban',
        testo: 'Una pequeña destilería en el centro del pueblo, a pocos pasos del puerto. El whisky es un single malt de la costa oeste.',
        come: 'Con reserva en la web malts.com. No se admiten niños menores de 8 años. Quien conduce pregunta si hay cata para llevar.',
        quando: 'Abierta todos los días: abril 10-18, de mayo a septiembre 10-19, octubre 10-18, de noviembre a marzo 10-17 (2026).',
        tempo: '1 hora para la visita clásica',
        costo: 'Visita clásica desde 24 libras (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/oban',
        consiglio: 'En verano hay que reservarla con antelación. El programa de visitas está en revisión: hay que volver a comprobarlo antes de salir.',
      },
      {
        nome: 'McCaig\'s Tower',
        testo: 'Un anillo de arcos de granito en la colina sobre el puerto, que mandó construir el banquero John Stuart McCaig: empezada en 1897, quedó sin terminar a su muerte, en 1902. Dentro hay un jardín, y desde el borde se ve toda la bahía con las islas.',
        come: 'A pie desde el centro, con una subida corta y empinada.',
        quando: 'Al atardecer.',
        tempo: '45 minutos',
      },
      {
        nome: 'Ee-Usk',
        testo: 'El restaurante de pescado del North Pier, con las cristaleras sobre el agua y los ferris que pasan delante. Pescado y marisco de la costa oeste.',
        come: 'Reserva en la web o por teléfono.',
        quando: 'Comidas desde las 12, cenas desde las 17:30.',
        tempo: '1-2 horas',
        url: 'https://www.eeusk.com',
      },
    ],
    sapori: [
      { nome: 'Marisco', testo: 'Vieiras, cigalas, mejillones y ostras de la costa oeste.' },
      { nome: 'Whisky de Oban', testo: 'El single malt de la destilería del centro.' },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'El puerto de Oban con las casas de colores del paseo marítimo y la McCaig\'s Tower en la colina',
    immagine: `${IMG}/giorno-04-oban.webp`,
  },
  {
    slug: 'fort-william-glenfinnan',
    paeseSlug: 'scozia',
    ordine: 5,
    nome: 'Fort William y Glenfinnan',
    tipologia: ['montagna', 'treno', 'on the road'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione:
      'Fort William está al pie del Ben Nevis, la montaña más alta del Reino Unido. Al oeste, en la carretera hacia Mallaig, está Glenfinnan, con el viaducto ferroviario de arcos que se hizo famoso con las películas de Harry Potter y el monumento junto al Loch Shiel.',
    percheAndarci: 'Para ver el tren de vapor sobre el viaducto de Glenfinnan, o subirse a él, y por la carretera hacia el mar y Skye.',
    cosaVedere: ['El viaducto de Glenfinnan', 'El Glenfinnan Monument junto al Loch Shiel', 'El Ben Nevis desde Fort William'],
    cosaFare: ['Esperar el paso del Jacobite por el viaducto', 'Subir al Jacobite de Fort William a Mallaig'],
    comeArrivare: 'En coche por la A82 desde Glencoe; Glenfinnan está en la A830, hacia Mallaig.',
    comeSpostarsi: 'En coche. En Glenfinnan hay un aparcamiento de pago cerca del centro de visitantes.',
    erroriDaEvitare: ['Contar con una plaza en el Jacobite sin reserva: hay pocas plazas', 'Caminar por las vías para la foto: el tren se mira desde los senderos'],
    miaEsperienza: 'Fui al viaducto de Glenfinnan por el tren de Harry Potter, el Jacobite.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'El Jacobite',
        testo: 'El tren de vapor de temporada de Fort William a Mallaig y vuelta, 84 millas en total. Pasa por el viaducto de Glenfinnan y se para una hora y media aproximadamente en Mallaig antes de volver.',
        come: 'Reserva en la web de West Coast Railways. Pocas plazas a la venta el mismo día en Fort William, solo en efectivo y sin garantía. Cuando el riesgo de incendios es alto, o por una avería, puede ir arrastrado por una locomotora diésel histórica.',
        quando: 'En verano. En noviembre de 2026 las fechas y los precios de 2027 todavía no han salido.',
        tempo: 'un día',
        url: 'https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-details.cfm',
      },
      {
        nome: 'Viaducto de Glenfinnan',
        testo: 'El viaducto curvo de arcos de la West Highland Line, sobre el valle al fondo del Loch Shiel. Desde los senderos encima del centro de visitantes se ve pasar el tren.',
        come: 'En coche hasta Glenfinnan, y luego a pie por el sendero del mirador.',
        quando: 'A la hora de paso del Jacobite, que hay que comprobar en el horario de la temporada.',
        tempo: '1-2 horas',
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'El tren de vapor Jacobite sobre el viaducto de Glenfinnan, con el humo blanco y los bosques de otoño',
    immagine: `${IMG}/giorno-06-glenfinnan.webp`,
  },
  {
    slug: 'isola-di-skye',
    paeseSlug: 'scozia',
    ordine: 6,
    nome: 'Isla de Skye',
    tipologia: ['isola', 'natura', 'trekking', 'distilleria'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      'La mayor de las Hébridas Interiores, unida a tierra firme por un puente. Agujas de roca, acantilados, torrentes y montañas, con Portree como centro y la destilería Talisker en la costa oeste.',
    percheAndarci: 'Por los paisajes de la península de Trotternish, con el Old Man of Storr y el Quiraing, por las Fairy Pools y por Talisker.',
    cosaVedere: ['El Old Man of Storr', 'El Quiraing', 'Las Fairy Pools', 'Portree', 'El castillo de Eilean Donan, de camino a Skye', 'La destilería Talisker en Carbost'],
    cosaFare: ['El sendero del Old Man of Storr a primera hora de la mañana', 'La vuelta a la península de Trotternish en coche', 'La visita a Talisker'],
    comeArrivare: 'En coche por el puente de Skye, desde Kyle of Lochalsh; o con el ferri de CalMac de Mallaig a Armadale, que hay que reservar si se va con coche.',
    comeSpostarsi: 'En coche, por carreteras a menudo de un solo carril con apartaderos para cruzarse.',
    periodoMigliore: 'de mayo a septiembre; en julio y agosto los aparcamientos de los senderos famosos se llenan pronto',
    erroriDaEvitare: [
      'Llegar en verano sin alojamiento reservado: en la isla se encuentra poco en el último momento',
      'Aparcar en los apartaderos: sirven para que pasen los coches',
      'Salir a los senderos con zapatos de ciudad: el terreno suele estar embarrado',
    ],
    miaEsperienza: 'También hice la Isla de Skye.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Old Man of Storr',
        testo: 'La aguja de roca sobre la carretera al norte de Portree, el símbolo de la isla. El sendero sube entre las rocas hasta el pie del pináculo.',
        come: 'En coche hasta el aparcamiento de la A855, y luego a pie cuesta arriba.',
        quando: 'Al amanecer o por la tarde, cuando hay menos gente.',
        tempo: '2 horas ida y vuelta',
      },
      {
        nome: 'Quiraing',
        testo: 'Un enorme deslizamiento de tierra en la ladera de la cresta de Trotternish, con agujas, terrazas y paredes verdes cortadas a pico. Ya se ve desde la carretera, de un solo carril, que cruza la cresta.',
        come: 'En coche por la carretera entre Staffin y Uig, y luego a pie por el sendero.',
        quando: 'Con el cielo despejado: con niebla no se ve nada.',
        tempo: '1-3 horas',
      },
      {
        nome: 'Fairy Pools',
        testo: 'Una serie de pozas y pequeñas cascadas de agua transparente a lo largo de un torrente al pie de las montañas Cuillin.',
        come: 'En coche hasta el aparcamiento de Glen Brittle, y luego a pie.',
        quando: 'A primera hora de la mañana.',
        tempo: '1-2 horas',
      },
      {
        nome: 'Destilería Talisker',
        testo: 'Fundada en 1830, es según la propia destilería la más antigua en activo de la isla. Está en Carbost, a orillas del Loch Harport.',
        come: 'Con reserva en la web malts.com, recomendable sobre todo en verano. No se admiten niños menores de 8 años.',
        quando: 'De marzo a octubre 10-17, de noviembre a febrero 10-16:30 (2026). Mantenimiento anual del 11 de octubre al 1 de noviembre de 2026, con algunas experiencias suspendidas.',
        tempo: '1 hora',
        costo: 'Visita con cata desde 22 libras (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/talisker',
      },
    ],
    programmi: [
      { titolo: '2 días', tappe: ['Día 1: Old Man of Storr al amanecer, la vuelta a Trotternish con el Quiraing, Portree por la noche', 'Día 2: Fairy Pools por la mañana, Talisker por la tarde'] },
    ],
    zone: [
      { nome: 'Portree', perChi: 'quien quiere restaurantes y servicios', testo: 'El centro de la isla, cerca de Trotternish.' },
      { nome: 'Sur de la isla', perChi: 'quien llega en ferri desde Mallaig', testo: 'Más tranquilo, cerca de Armadale.' },
    ],
    attenzioni: [
      'Carreteras de un solo carril: uno se para en el apartadero de su izquierda, o espera delante del de la derecha.',
      'Ovejas y ciervos en la carretera, también de día.',
      'Tiempo que cambia en una hora: chaqueta impermeable siempre en el coche.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Las paredes y las agujas verdes del Quiraing, en la Isla de Skye',
    immagine: `${IMG}/giorno-07-quiraing.webp`,
  },
  {
    slug: 'inverness-loch-ness',
    paeseSlug: 'scozia',
    ordine: 7,
    nome: 'Inverness y el Lago Ness',
    tipologia: ['lago', 'castelli', 'città'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione:
      'Inverness es la capital de las Highlands, a orillas del río Ness. Al suroeste empieza el Lago Ness, el lago largo y profundo del monstruo, con las ruinas del castillo de Urquhart en la orilla.',
    percheAndarci: 'Por Urquhart junto al lago y como base para el Speyside y para la North Coast 500, que empieza y termina aquí.',
    cosaVedere: ['El castillo de Urquhart', 'El Lago Ness', 'La orilla del río en Inverness'],
    cosaFare: ['Visitar Urquhart por la mañana', 'Un paseo junto al Ness en Inverness'],
    comeArrivare: 'En coche por la A82 a lo largo del Lago Ness desde Fort William, o desde Skye pasando por Eilean Donan.',
    comeSpostarsi: 'En coche.',
    erroriDaEvitare: ['Llegar a Urquhart sin entrada en temporada alta: se reserva online con fecha y hora'],
    miaEsperienza: 'Hice Inverness y el Lago Ness. El Lago Ness, sinceramente, es un poco meh: por sí solo no vale el viaje.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Castillo de Urquhart',
        testo: 'Las ruinas de un castillo medieval en un promontorio del Lago Ness, cerca de Drumnadrochit.',
        come: 'En coche por la A82. Entradas online en la web de Historic Environment Scotland, con fecha y hora.',
        quando: 'A la apertura, antes que los autocares.',
        tempo: '1-2 horas',
        url: 'https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/',
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Las ruinas del castillo de Urquhart a orillas del Lago Ness',
    immagine: `${IMG}/giorno-09-urquhart.webp`,
  },
  {
    slug: 'speyside',
    paeseSlug: 'scozia',
    ordine: 8,
    nome: 'Speyside',
    tipologia: ['distillerie', 'campagna', 'cibo e bevande'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'El valle del río Spey, entre Inverness y Aberdeen, es la zona de Escocia con más destilerías. Aquí están nombres famosos como Glenfiddich en Dufftown, The Macallan cerca de Craigellachie, The Glenlivet y Cardhu.',
    percheAndarci: 'Por la ruta de las destilerías, entre colinas, ríos y pueblos, a menos de dos horas de Inverness.',
    cosaVedere: ['Glenfiddich, en Dufftown', 'The Macallan', 'The Glenlivet', 'Cardhu, en Knockando', 'El pueblo de Aberlour'],
    cosaFare: ['Dos visitas a destilerías al día, no más', 'Un paseo junto al Spey'],
    comeArrivare: 'En coche desde Inverness o desde Aviemore.',
    comeSpostarsi:
      'En coche, con un conductor que no bebe. Como alternativa, un tour organizado o un taxi: algunas destilerías, como Cardhu, no tienen transporte público.',
    erroriDaEvitare: [
      'Conducir después de las catas: en Escocia el límite es más bajo que en Inglaterra, y el consejo es no beber nada',
      'Llegar sin reserva: las visitas tienen plazas limitadas',
      'Meter demasiadas destilerías en un día',
    ],
    miaEsperienza: 'También hice la ruta de las destilerías.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Glenfiddich',
        testo: 'La destilería de Dufftown, uno de los nombres más conocidos del single malt de Speyside.',
        come: 'Visitas con reserva en la web oficial glenfiddich.com, donde hay que comprobar precios y horarios.',
        tempo: '1-2 horas',
        url: 'https://www.glenfiddich.com',
      },
      {
        nome: 'The Macallan',
        testo: 'La finca de la destilería cerca de Craigellachie, con el edificio moderno de tejado ondulado cubierto de hierba.',
        come: 'Visitas con reserva en la web oficial themacallan.com, donde hay que comprobar precios y horarios.',
        tempo: '2 horas',
        url: 'https://www.themacallan.com',
      },
      {
        nome: 'The Glenlivet',
        testo: 'La destilería del valle del Livet, un afluente del Spey, en una de las zonas más aisladas del Speyside.',
        come: 'Visitas con reserva en la web oficial theglenlivet.com, donde hay que comprobar precios y horarios.',
        tempo: '1-2 horas',
        url: 'https://www.theglenlivet.com',
      },
      {
        nome: 'Cardhu',
        testo: 'La destilería de Knockando, ligada a Johnnie Walker, con muchas fórmulas de visita y cata.',
        come: 'Con reserva en la web malts.com. No se llega en transporte público. No se admiten niños menores de 8 años.',
        quando: 'Enero y febrero de jueves a lunes 10-16; marzo y abril 10-17; de mayo a septiembre 10-18; de octubre a diciembre 10-17 (2026).',
        tempo: '1-1,5 horas',
        costo: 'Desde 18 libras para «A Nip Round» (1 hora) y 23 para el «Flavour Journey» (1 hora y media) (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/cardhu',
      },
    ],
    attenzioni: [
      'Quien conduce no bebe: muchas destilerías dan el «driver\'s dram», la cata en una mini botella sellada para llevar. No todas: hay que preguntarlo al reservar.',
      'Niños menores de 8 años no admitidos en las visitas de muchas destilerías.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'El whisky servido en las copas de cata en la destilería Glenfiddich de Dufftown',
    immagine: `${IMG}/giorno-10-glenfiddich.webp`,
  },
  {
    slug: 'cairngorms',
    paeseSlug: 'scozia',
    ordine: 9,
    nome: 'Cairngorms',
    tipologia: ['natura', 'montagna', 'parco nazionale'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione:
      'El parque nacional más grande del Reino Unido, entre el Speyside y la carretera A9 hacia Perth. Montañas redondeadas, bosques de pinos, lagos como Loch Morlich, y Aviemore como base.',
    percheAndarci: 'Para un día de naturaleza en el camino de vuelta a Edimburgo, con una parada en la destilería de Dalwhinnie.',
    cosaVedere: ['Loch Morlich', 'El bosque de Rothiemurchus', 'Aviemore', 'La destilería de Dalwhinnie'],
    cosaFare: ['Una caminata alrededor de Loch Morlich', 'La parada en Dalwhinnie, en la A9'],
    comeArrivare: 'En coche por la A9, o en tren hasta Aviemore.',
    comeSpostarsi: 'En coche o en bici por la zona de Aviemore.',
    erroriDaEvitare: ['Subir a las cumbres sin equipo: en lo alto de los Cairngorms el tiempo es de alta montaña incluso en verano'],
    miaEsperienza: 'También hice los Cairngorms.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Destilería de Dalwhinnie',
        testo: 'Fundada en 1897, es una de las destilerías más altas de Escocia, a 355 metros, dentro del parque nacional de los Cairngorms. Es una parada fácil en la A9 entre Inverness y Perth.',
        come: 'Con reserva en la web malts.com.',
        quando: 'Todos los días 10-16 (2026).',
        tempo: '45 minutos para la visita clásica',
        costo: 'Visita con cata desde 21 libras; cata guiada desde 14 (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/dalwhinnie',
      },
      {
        nome: 'Loch Morlich',
        testo: 'Un lago entre pinos al pie de los Cairngorms, con una playa y un sendero circular.',
        come: 'En coche desde Aviemore.',
        tempo: '1-2 horas',
      },
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'Loch Morlich con los pinos y las montañas de los Cairngorms al fondo',
    immagine: `${IMG}/giorno-11-cairngorms.webp`,
  },
  {
    slug: 'north-coast-500',
    paeseSlug: 'scozia',
    ordine: 10,
    nome: 'North Coast 500',
    tipologia: ['on the road', 'costa', 'natura'],
    giorniConsigliati: '4-7 días',
    visitataPersonalmente: true,
    introduzione:
      'Un anillo de 516 millas, unos 830 km, que empieza y termina en Inverness y da la vuelta al extremo norte de Escocia. Pasa por Black Isle, Easter Ross, Caithness, Sutherland y Wester Ross: montañas, playas blancas, acantilados y carreteras de un solo carril.',
    percheAndarci: 'Por la carretera más bonita del norte: el puerto de Bealach na Bà, las montañas de Torridon y Assynt, las playas de Sutherland y los acantilados de Duncansby.',
    cosaVedere: [
      'El Bealach na Bà y Applecross',
      'Torridon',
      'Ullapool',
      'El castillo de Ardvreck junto al Loch Assynt',
      'El puente de Kylesku',
      'La Smoo Cave en Durness',
      'John o\' Groats y los Duncansby Stacks',
      'La destilería de Glen Ord, en Black Isle',
    ],
    cosaFare: ['Conducir el Bealach na Bà con el cielo despejado', 'Un día con pocas horas al volante y muchas paradas', 'La vuelta en barca por la Smoo Cave en verano'],
    comeArrivare: 'Desde Inverness, en un sentido o en el otro. Desde Skye se entra por el lado oeste, hacia Applecross.',
    comeSpostarsi:
      'En coche. La vuelta entera sin parar exige 11-13 horas de conducción, pero la mayoría de quienes la hacen tarda 5-7 días. Hay tramos largos de un solo carril con apartaderos para cruzarse: conviene elegir un coche no demasiado grande.',
    periodoMigliore: 'de mayo a septiembre',
    erroriDaEvitare: [
      'Hacerla en tres días: se pasa el día al volante y no se para nunca',
      'Conducir el Bealach na Bà con una autocaravana grande o con niebla',
      'Salir con el depósito a medias en los tramos más aislados',
      'Dormir en autocaravana fuera de las áreas permitidas',
    ],
    miaEsperienza: 'La hice en julio, y es impresionante. Y el tiempo, como en toda Escocia, es imprevisible. El otoño, con el follaje, también es precioso.',
    // GUIDA-START
    luoghi: [
      {
        nome: 'Bealach na Bà',
        testo: 'El puerto de montaña hacia Applecross, con curvas cerradas y pendientes fuertes en una carretera de un solo carril. Con el cielo despejado, desde la cima se ve la Isla de Skye.',
        come: 'En coche, despacio, cediendo el paso en los apartaderos. No es una carretera para autocaravanas grandes ni para quien conduce con ansiedad.',
        quando: 'Con el cielo despejado y nunca con hielo.',
        tempo: '1 hora con las paradas',
      },
      {
        nome: 'Assynt y Kylesku',
        testo: 'Montañas aisladas que se alzan del páramo, el castillo de Ardvreck en ruinas junto al Loch Assynt y el puente curvo de Kylesku sobre el estrecho.',
        come: 'En coche, por la carretera de Ullapool hacia el norte.',
        tempo: 'medio día',
      },
      {
        nome: 'Smoo Cave',
        testo: 'Una enorme cueva marina en Durness, con una cascada en su interior.',
        come: 'A pie desde el aparcamiento de encima de la cueva.',
        tempo: '1 hora',
      },
      {
        nome: 'Duncansby Stacks',
        testo: 'Los farallones puntiagudos frente a los acantilados de Duncansby Head, un poco más allá de John o\' Groats, sobre el Pentland Firth.',
        come: 'A pie desde el faro de Duncansby Head, por el prado en lo alto de los acantilados.',
        tempo: '1 hora',
      },
      {
        nome: 'Glen Ord',
        testo: 'La destilería del Singleton, en el borde de Black Isle, cerca de Muir of Ord.',
        come: 'Con reserva en la web malts.com; las fechas salen unos 90 días antes. No se admiten niños menores de 8 años.',
        quando: 'Todos los días: de mayo a agosto 10-18, de septiembre a abril 10-17 (2026).',
        tempo: '1 hora y cuarto para la visita clásica',
        costo: 'Visita clásica desde 24 libras (2026)',
        url: 'https://www.malts.com/en-gb/distilleries/the-singleton-of-glen-ord',
      },
    ],
    programmi: [
      {
        titolo: '4 días de Skye a Inverness',
        tappe: [
          'Día 1: de Skye a Applecross por el Bealach na Bà, luego Torridon',
          'Día 2: de Torridon a Ullapool, luego Assynt y Ardvreck',
          'Día 3: Kylesku y la costa de Sutherland hasta Durness y la Smoo Cave',
          'Día 4: de Durness a John o\' Groats y Duncansby, luego la costa este hasta Inverness con Glen Ord',
        ],
      },
    ],
    attenzioni: [
      'Carreteras de un solo carril: apartadero a la izquierda, o se espera delante del de la derecha; nunca aparcar en los apartaderos.',
      'Ovejas, vacas y ciervos en la carretera.',
      'Gasolineras y tiendas escasas en los tramos más aislados: hay que llenar el depósito cuando se puede.',
      'Tramos sin cobertura: mapas offline descargados antes.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['scozia-highlands-distillerie'],
    imageAlt: 'La carretera de un solo carril del Bealach na Bà que baja entre las montañas hacia el mar',
    immagine: `${IMG}/nc500-bealach-na-ba.webp`,
  },
]
