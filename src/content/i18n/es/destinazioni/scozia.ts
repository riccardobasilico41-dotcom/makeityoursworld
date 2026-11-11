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
    comeArrivare:
      'Desde el aeropuerto de Glasgow (GLA) el autobús Glasgow Airport Express 500 va al centro, hasta Buchanan Bus Station, cada 10 minutos y las 24 horas, en unos 15-25 minutos. Desde Edimburgo los trenes de ScotRail a Glasgow Queen Street salen varias veces por hora y tardan menos de una hora; en coche se tarda una hora y cuarto aproximadamente. Desde Londres Euston hay trenes directos a Glasgow Central.',
    costi:
      'Los museos municipales (Kelvingrove, Riverside, Burrell, GoMA, Provand\'s Lordship) y el Hunterian son gratuitos; se pagan el Glasgow Science Centre (15,50 libras, unos 18 €) y el barco Glenlee (5,50 libras, unos 6 €), precios de 2026. Desde enero de 2027 hay una tasa turística del 5% sobre el precio del alojamiento. Presupuesto orientativo al día por persona, con la doble compartida: bajo 70-100 €, medio 140-200 €, alto más de 300 €.',
    comeSpostarsi: 'A pie en el centro, el metro para el West End.',
    erroriDaEvitare: ['Entrar en el centro en coche sin haber comprobado las normas de las zonas de bajas emisiones: conviene aparcar fuera y usar el metro'],
    miaEsperienza: 'Solo pasé de camino.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Catedral de Glasgow",
        "testo": "Una de las pocas iglesias medievales escocesas que llegaron intactas a después de la Reforma. La cripta, con la tumba de san Mungo, el fundador de la ciudad, es la parte más antigua.",
        "come": "Entrada libre con franja horaria elegida online; audioguía de pago. Es una iglesia en uso y puede cerrar por oficios.",
        "quando": "Por la mañana entre semana.",
        "tempo": "45 minutos-1 hora",
        "costo": "Gratis, se agradecen donativos",
        "orari": "Del 1 de abril al 30 de septiembre, lunes a sábado de 9:30 a 17, domingo de 13 a 17; del 1 de octubre al 31 de marzo, lunes a sábado de 10 a 16, domingo de 13 a 16. Última entrada 45 minutos antes. Cerrada el 25-26 de diciembre y el 1-2 de enero.",
        "lat": 55.863,
        "lng": -4.2346,
        "url": "https://www.historicenvironment.scot/visit-a-place/places/glasgow-cathedral/"
      },
      {
        "nome": "Necrópolis",
        "testo": "El cementerio victoriano en la colina junto a la catedral, con obeliscos, mausoleos y estatuas de los comerciantes de la ciudad. Desde arriba se ve todo Glasgow, con la catedral a los pies.",
        "come": "A pie desde la catedral, cruzando el puente. Los Amigos de la Necrópolis organizan visitas guiadas a pie algunos fines de semana, que se reservan en su web.",
        "quando": "Con la luz de la tarde.",
        "tempo": "1 hora",
        "costo": "Gratis",
        "lat": 55.86217,
        "lng": -4.2334,
        "url": "https://www.glasgownecropolis.org/"
      },
      {
        "nome": "Provand's Lordship",
        "testo": "La casa más antigua de Glasgow, del siglo XV, frente a la catedral, con las habitaciones amuebladas y un pequeño jardín. Al lado está el St Mungo Museum, dedicado a las religiones.",
        "come": "A pie, en la plaza de la catedral.",
        "tempo": "30 minutos",
        "costo": "Gratis",
        "orari": "Lunes a jueves y sábado de 10 a 17, viernes y domingo de 11 a 17.",
        "lat": 55.8624,
        "lng": -4.2369,
        "url": "https://www.glasgowlife.org.uk/museums/venues/provands-lordship"
      },
      {
        "nome": "Kelvingrove Art Gallery and Museum",
        "testo": "El museo más visitado de la ciudad, en un gran edificio de arenisca roja: arte europeo y escocés, armas y armaduras, historia natural. La sala más conocida tiene el Cristo de San Juan de la Cruz de Salvador Dalí.",
        "come": "Metro hasta Kelvinhall, o a pie desde el West End. Entrada libre, sin reserva. Durante las obras de restauración algunas zonas tienen andamios, pero el museo sigue abierto.",
        "quando": "Por la mañana entre semana.",
        "tempo": "2-3 horas",
        "costo": "Gratis, se agradecen donativos",
        "orari": "Lunes a jueves y sábado de 10 a 17, viernes y domingo de 11 a 17.",
        "lat": 55.86861,
        "lng": -4.29056,
        "url": "https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum"
      },
      {
        "nome": "Universidad de Glasgow y Hunterian",
        "testo": "El edificio principal de la universidad, neogótico, con los claustros y la torre sobre el Kelvingrove Park. Dentro está el Hunterian, el museo más antiguo de Escocia, y enfrente la galería de arte con la Mackintosh House, los interiores reconstruidos de la casa de Charles Rennie Mackintosh.",
        "come": "Metro hasta Hillhead y luego a pie, o a pie desde el Kelvingrove.",
        "quando": "De martes a domingo.",
        "tempo": "2 horas",
        "costo": "Museo y galería gratuitos; la Mackintosh House es de pago",
        "orari": "Martes a domingo de 10 a 17, cerrado los lunes.",
        "lat": 55.87194,
        "lng": -4.28861,
        "url": "https://www.gla.ac.uk/hunterian/"
      },
      {
        "nome": "Kelvingrove Park",
        "testo": "El parque victoriano junto al río Kelvin, entre el museo y la universidad, con fuentes, puentes y vistas de las torres del West End.",
        "come": "A pie, entre el Kelvingrove y la universidad.",
        "quando": "Con buen tiempo, a mediodía.",
        "tempo": "1 hora",
        "costo": "Gratis",
        "lat": 55.86833,
        "lng": -4.28639
      },
      {
        "nome": "Riverside Museum y el Glenlee",
        "testo": "El museo del transporte junto al río Clyde, en el edificio en zigzag de Zaha Hadid: tranvías, locomotoras, coches y una calle de Glasgow reconstruida. Fuera está amarrado el Glenlee, un velero de finales del siglo XIX.",
        "come": "En autobús desde el centro o a pie por el río desde el Kelvingrove, en media hora aproximadamente.",
        "tempo": "2 horas",
        "costo": "Museo gratuito; Glenlee 5,50 libras, unos 6 € (2026)",
        "orari": "Museo: lunes a jueves y sábado de 10 a 17, viernes y domingo de 11 a 17.",
        "lat": 55.8651,
        "lng": -4.30638,
        "url": "https://www.glasgowlife.org.uk/museums/venues/riverside-museum"
      },
      {
        "nome": "Botanic Gardens y Kibble Palace",
        "testo": "El jardín botánico al final de Great Western Road, con el Kibble Palace, un gran invernadero victoriano de hierro y cristal lleno de helechos arborescentes.",
        "come": "Metro hasta Hillhead y luego pocos minutos a pie.",
        "quando": "Los días de lluvia, en los invernaderos.",
        "tempo": "1 hora",
        "costo": "Gratis",
        "orari": "Jardines todos los días de 7 al anochecer; invernaderos de 10 a 18, en invierno hasta las 16:15.",
        "lat": 55.8793,
        "lng": -4.29066,
        "url": "https://glasgowbotanicgardens.com/"
      },
      {
        "nome": "Ashton Lane",
        "testo": "Un callejón empedrado del West End, detrás del metro de Hillhead, con pubs, restaurantes y un cine bajo guirnaldas de luces.",
        "come": "A pie desde el metro de Hillhead.",
        "quando": "Por la noche.",
        "tempo": "1-2 horas",
        "costo": "Gratis",
        "lat": 55.87476,
        "lng": -4.29286
      },
      {
        "nome": "Burrell Collection",
        "testo": "La colección de arte de un armador de Glasgow, más de nueve mil objetos entre tapices, vidrieras, cerámica china y cuadros, en un edificio acristalado del Pollok Country Park. Reabrió en 2022 tras una larga restauración.",
        "come": "En tren desde Glasgow Central hasta Pollokshaws West y luego a pie por el parque.",
        "tempo": "2-3 horas",
        "costo": "Gratis, se agradecen donativos",
        "orari": "Lunes a jueves y sábado de 10 a 17, viernes y domingo de 11 a 17.",
        "lat": 55.83083,
        "lng": -4.3075,
        "url": "https://www.glasgowlife.org.uk/museums/venues/the-burrell-collection"
      },
      {
        "nome": "Gallery of Modern Art (GoMA)",
        "testo": "La galería de arte contemporáneo en un edificio neoclásico de Royal Exchange Square. Delante está la estatua del duque de Wellington, casi siempre con un cono de tráfico en la cabeza.",
        "come": "A pie en el centro, entre Buchanan Street y George Square.",
        "tempo": "1 hora",
        "costo": "Gratis, se agradecen donativos",
        "orari": "Lunes a jueves y sábado de 10 a 17, viernes y domingo de 11 a 17.",
        "lat": 55.8602,
        "lng": -4.25249,
        "url": "https://www.glasgowlife.org.uk/museums/venues/gallery-of-modern-art-goma"
      },
      {
        "nome": "George Square y City Chambers",
        "testo": "La plaza principal de la ciudad, con sus estatuas y, en un lado, los City Chambers, el ayuntamiento victoriano con interiores de mármol.",
        "come": "A pie, junto a la estación de Queen Street.",
        "tempo": "30 minutos",
        "costo": "Gratis",
        "lat": 55.86111,
        "lng": -4.25028
      },
      {
        "nome": "Los murales del centro",
        "testo": "Un recorrido por los grandes murales pintados en las fachadas del centro, entre ellos el san Mungo moderno de High Street, de camino a la catedral.",
        "come": "A pie, con el mapa del City Centre Mural Trail.",
        "tempo": "1-2 horas",
        "costo": "Gratis"
      },
      {
        "nome": "Glasgow Science Centre",
        "testo": "El museo de la ciencia en la orilla sur del Clyde, con experimentos para tocar, un planetario y la torre giratoria al lado. Está pensado sobre todo para familias.",
        "come": "A pie desde el Riverside cruzando el río, o en autobús desde el centro.",
        "tempo": "2-3 horas",
        "costo": "Adultos 15,50 libras con el donativo voluntario, 14,09 sin él, unos 16-18 € (2026)",
        "orari": "Hasta el 25 de marzo de 2027: miércoles a viernes de 10 a 15, sábado y domingo de 10 a 17, cerrado lunes y martes. Desde el 26 de marzo de 2027 todos los días de 10 a 17.",
        "lat": 55.85854,
        "lng": -4.2938,
        "url": "https://www.glasgowsciencecentre.org/"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Catedral a la apertura",
          "Necrópolis",
          "Provand's Lordship",
          "George Square y GoMA",
          "Tarde en el West End: Kelvingrove, Kelvingrove Park y la universidad",
          "Ashton Lane por la noche"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba",
          "Día 2: Riverside Museum y el Glenlee, los murales del centro, Botanic Gardens por la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2: como arriba",
          "Día 3: Burrell Collection por la mañana, luego el Science Centre, o una excursión a Loch Lomond"
        ]
      }
    ],
    zone: [
      {
        "nome": "Merchant City y centro",
        "perChi": "quien quiere todo a pie",
        "testo": "Entre George Square, Buchanan Street y la catedral: restaurantes, bares y las dos estaciones a pocos minutos.",
        "fascia": "100-180 €"
      },
      {
        "nome": "West End",
        "perChi": "quien prefiere un barrio animado pero tranquilo",
        "testo": "Alrededor de la universidad, Byres Road y Ashton Lane, con casas victorianas, B&B y el metro al centro.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Finnieston",
        "perChi": "quien sale a cenar",
        "testo": "Entre el centro y el West End, en Argyle Street: los restaurantes más nuevos de la ciudad y el Kelvingrove al lado.",
        "fascia": "110-190 €"
      },
      {
        "nome": "Cerca de las estaciones",
        "perChi": "quien llega en tren y se va temprano",
        "testo": "Alrededor de Glasgow Central y Queen Street: hoteles de cadena, cómodos para las excursiones.",
        "fascia": "90-160 €"
      }
    ],
    gite: [
      {
        "nome": "Loch Lomond",
        "distanza": "45 minutos en coche hasta Luss",
        "come": "En coche por la A82, o en tren hasta Balloch.",
        "testo": "El lago más grande de Escocia, con el pueblo de Luss en la orilla oeste y colinas alrededor. Es la primera etapa hacia las Highlands."
      },
      {
        "nome": "Edimburgo",
        "distanza": "menos de una hora en tren",
        "come": "En tren de ScotRail desde Glasgow Queen Street hasta Edinburgh Waverley.",
        "testo": "El castillo, la Old Town y la New Town georgiana. Se puede ver en un día, pero merece una noche."
      },
      {
        "nome": "Stirling",
        "distanza": "unos 40 km",
        "come": "En tren desde Glasgow Queen Street, o en coche.",
        "testo": "El castillo de los Estuardo en lo alto de una roca y el Wallace Monument en la colina de enfrente."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Glasgow?",
        "risposta": "Un día para la catedral, la Necrópolis y el West End. Con dos se añaden el Riverside y el jardín botánico; con tres, la Burrell Collection o una excursión."
      },
      {
        "domanda": "¿Glasgow o Edimburgo como base?",
        "risposta": "Edimburgo para el castillo y la Old Town, Glasgow para los museos gratuitos, el West End y la salida hacia Loch Lomond. Están a menos de una hora en tren: se puede dormir en una y visitar la otra en el día."
      },
      {
        "domanda": "¿Los museos de Glasgow son gratuitos?",
        "risposta": "Sí, los municipales: Kelvingrove, Riverside, la Burrell Collection, GoMA y Provand's Lordship. El Hunterian de la universidad también es gratuito, pero cierra los lunes."
      },
      {
        "domanda": "¿Hay que reservar la catedral de Glasgow?",
        "risposta": "La entrada es libre, pero se elige una franja horaria online. Los horarios pueden cambiar por oficios y actos."
      },
      {
        "domanda": "¿Se puede entrar en coche al centro de Glasgow?",
        "risposta": "El centro es una zona de bajas emisiones y los vehículos que no cumplen se multan. Conviene comprobar el coche, aparcar fuera y usar el metro."
      },
      {
        "domanda": "¿Hay tasa turística en Glasgow?",
        "risposta": "Desde enero de 2027, sí: el 5% del precio del alojamiento, por cada noche."
      }
    ],
    // GUIDA-END
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
    comeArrivare: "En coche por la A82 desde Glasgow: unos 45 minutos hasta Luss, luego la carretera bordea toda la orilla oeste del Loch Lomond hasta Tarbet y Crianlarich, sube al Rannoch Moor y baja a Glencoe, en total unas dos horas y media sin paradas. De Oban a Glencoe hay una hora, de Glencoe a Fort William media hora. Sin coche, los trenes desde Glasgow llegan a Balloch, la West Highland Line para en Arrochar & Tarbet y en Crianlarich, y los autobuses Citylink entre Glasgow y Fort William paran a lo largo de la A82, también en Glencoe.",
    comeSpostarsi: 'En coche, parando en los aparcamientos señalizados y nunca en el arcén.',
    costi: "El valle, los senderos y las vistas son gratis; se pagan el aparcamiento en Luss, los cruceros por el lago (17-19 £) y el telesilla de Glencoe (20 £, 2026). Presupuesto orientativo por persona y día, con la habitación doble compartida y el coche aparte: bajo 80-110 €, medio 150-220 €, alto más de 300 €.",
    periodoMigliore: 'de mayo a septiembre; en invierno el valle es precioso, pero solo se camina con experiencia',
    erroriDaEvitare: [
      'Pararse a hacer fotos en el arcén de la A82: solo se usan los aparcamientos',
      'Salir por un sendero de montaña subestimando el tiempo: la niebla y la lluvia llegan rápido',
    ],
    attenzioni: ['Mosquitos diminutos (midges) en verano, sobre todo por la tarde y sin viento: hace falta repelente.'],
    miaEsperienza: 'Hice el Loch Lomond y Glencoe. Glencoe es preciosa.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Three Sisters",
        testo: "Las tres crestas oscuras que bajan del macizo del Bidean nam Bian en el lado sur del valle, la imagen más famosa de Glencoe. La carretera pasa justo debajo, y con las nubes bajas las paredes parecen aún más altas.",
        come: "En coche por la A82: se para en los aparcamientos panorámicos bajo las crestas, nunca en el arcén.",
        quando: "A primera hora, cuando los aparcamientos aún están libres; con la luz de la tarde las crestas quedan en sombra.",
        tempo: "20-30 minutos",
        costo: "gratis",
        consiglio: "Los aparcamientos son pequeños y a mediodía están llenos.",
      },
      {
        nome: "Buachaille Etive Mòr y Glen Etive",
        testo: "La pirámide de roca a la entrada oriental de Glencoe, la montaña más fotografiada de Escocia, con el río Coupall y la casita blanca de Lagangarbh a sus pies. Al lado se abre Glen Etive, un valle lateral con una carretera de un solo carril que baja hasta el lago.",
        come: "En coche por la A82: el punto clásico para las fotos está cerca del puente sobre el río, poco después del Kingshouse Hotel; Glen Etive se recorre en coche, usando los apartaderos.",
        quando: "Al amanecer o al atardecer, cuando la luz da en la pared.",
        tempo: "30 minutos; 1-2 horas con Glen Etive",
        costo: "gratis",
        lat: 56.6473,
        lng: -4.8978,
      },
      {
        nome: "Lost Valley (Coire Gabhail)",
        testo: "El valle escondido detrás de las Three Sisters, donde según la tradición los MacDonald escondían el ganado robado. Se entra por una garganta estrecha y se sale a una hondonada plana cerrada por las paredes.",
        come: "A pie desde el aparcamiento de la A82 bajo las Three Sisters: se baja al río, se cruza un puente y se sube por un sendero rocoso, con un vadeo.",
        quando: "Con tiempo seco; mejor evitarlo con lluvia fuerte, cuando el torrente crece.",
        tempo: "unas 3 horas ida y vuelta",
        costo: "gratis",
        lat: 56.65441,
        lng: -4.994,
        consiglio: "Hacen falta botas de montaña: en algunos tramos se usan las manos.",
      },
      {
        nome: "Glencoe Lochan",
        testo: "Un pequeño lago entre pinos sobre el pueblo de Glencoe, plantados en el siglo XIX por un lord que quería recordar a su mujer Canadá. La vuelta alrededor del agua, con las montañas reflejadas, es el paseo más fácil del valle.",
        come: "En coche o a pie desde el pueblo de Glencoe, siguiendo las indicaciones; aparcamiento cerca del lago y senderos bien cuidados.",
        quando: "A primera hora, con el agua quieta y los reflejos.",
        tempo: "menos de 1 hora",
        costo: "gratis",
        lat: 56.69069,
        lng: -5.09584,
      },
      {
        nome: "Rannoch Moor",
        testo: "Una meseta de turberas, lagunas y bloques de roca dejados por los glaciares, que la A82 cruza entre Bridge of Orchy y Glencoe. No hay pueblos ni árboles: es el tramo más salvaje de la carretera, y la forma más espectacular de entrar en el valle.",
        come: "En coche por la A82, con miradores como el del Lochan na h-Achlaise; el tren de la West Highland Line lo cruza más al este, hasta la estación aislada de Rannoch.",
        quando: "Con la luz baja de la mañana o de la tarde; con niebla impresiona, pero se ve poco.",
        tempo: "30-60 minutos de paradas",
        costo: "gratis",
        lat: 56.65411,
        lng: -4.59373,
      },
      {
        nome: "Glencoe Visitor Centre",
        testo: "El centro de visitantes del National Trust for Scotland, poco antes del pueblo, con una exposición sobre la geología del valle y sobre la masacre de 1692, cuando los soldados del gobierno mataron a los MacDonald que los hospedaban. Tiene mapas, la previsión del día y una cafetería.",
        come: "En coche por la A82, con aparcamiento; de aquí salen también senderos cortos por el bosque.",
        quando: "Antes de salir a caminar, para comprobar el tiempo.",
        tempo: "45 minutos",
        lat: 56.67117,
        lng: -5.08186,
        url: "https://www.nts.org.uk/visit/places/glencoe",
      },
      {
        nome: "Luss",
        testo: "Un pueblo de casitas de piedra en la orilla oeste del Loch Lomond, con una iglesia, una pequeña playa y un embarcadero en el lago. Es la parada más cómoda en la A82, para estirar las piernas y comer algo.",
        come: "En coche por la A82, unos 45 minutos desde Glasgow; aparcamiento de pago a la entrada del pueblo.",
        quando: "Por la mañana, antes de los autocares; los fines de semana de verano está lleno.",
        tempo: "1 hora",
        costo: "gratis, aparcamiento de pago",
        lat: 56.10149,
        lng: -4.64225,
      },
      {
        nome: "Crucero por el Loch Lomond",
        testo: "La mejor forma de ver el lago más grande de Gran Bretaña por superficie, con sus islas boscosas y el Ben Lomond en la orilla de enfrente. Las salidas son desde los embarcaderos de Tarbet y de Luss.",
        come: "Billetes online o en el embarcadero con Cruise Loch Lomond; vueltas circulares o travesías a Balmaha e Inchcailloch.",
        quando: "De primavera a finales de octubre, los días sin viento fuerte.",
        tempo: "1 hora desde Tarbet, 1 hora y media desde Luss",
        costo: "vuelta desde Tarbet 17 £ (unos 20 €), desde Luss 19 £ (unos 22 €), adultos 2026",
        lat: 56.204,
        lng: -4.7125,
        url: "https://www.cruiselochlomond.co.uk",
      },
      {
        nome: "Balmaha y Conic Hill",
        testo: "En la orilla este del lago, el pueblo de Balmaha es el punto de partida hacia Conic Hill, una colina en la frontera entre Lowlands y Highlands. Desde la cima se ven las islas del Loch Lomond alineadas sobre la falla que separa las dos Escocias.",
        come: "En coche desde Balloch o desde Drymen; desde el aparcamiento de Balmaha el sendero sube por la West Highland Way.",
        quando: "Con cielo despejado, a primera hora o al atardecer.",
        tempo: "2-3 horas ida y vuelta",
        costo: "gratis",
        lat: 56.097,
        lng: -4.5246,
      },
      {
        nome: "Glencoe Mountain, el telesilla",
        testo: "La estación de esquí en el Meall a' Bhùiridh, a la entrada del valle, con un telesilla que en verano sube a los visitantes a la montaña. Desde arriba se ve todo el Rannoch Moor y el Buachaille enfrente.",
        come: "En coche por la A82, por una breve carretera lateral pasado el Kingshouse; billetes en taquilla u online.",
        quando: "De mediados de mayo a finales de octubre, con cielo despejado y poco viento.",
        tempo: "1-2 horas",
        costo: "telesilla ida y vuelta 20 £ (unos 23 €, adultos, verano 2026)",
        orari: "Remontes desde las 9, última subida hacia las 16, si el tiempo lo permite; los cierres por mantenimiento se avisan en la web.",
        lat: 56.62025,
        lng: -4.83947,
        url: "https://www.glencoemountain.co.uk",
      },
      {
        nome: "Inchcailloch",
        testo: "Una isla boscosa frente a Balmaha, con senderos entre robles, una pequeña playa y las ruinas de una iglesia medieval con el cementerio del clan MacGregor. Se recorre entera a pie en pocas horas.",
        come: "En barca desde Balmaha, una travesía de pocos minutos, o con los cruceros desde Luss.",
        quando: "En primavera, con las campanillas en el bosque, o un día tranquilo de verano.",
        tempo: "2-3 horas",
        lat: 56.08111,
        lng: -4.55583,
      },
    ],
    programmi: [
      {
        titolo: "1 día, por la A82",
        tappe: [
          "Salida de Glasgow y parada en Luss, en el Loch Lomond",
          "Comida en Tarbet o en Crianlarich",
          "Rannoch Moor con los miradores",
          "Buachaille Etive Mòr, Three Sisters y la vuelta al Glencoe Lochan antes de la noche",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Luss, crucero desde Tarbet, Rannoch Moor y noche en Glencoe",
          "Día 2: Lost Valley por la mañana con tiempo seco, Glencoe Visitor Centre, y luego Glen Etive o el telesilla de Glencoe Mountain",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Balmaha, Conic Hill y la barca a Inchcailloch, noche en el Loch Lomond",
          "Día 2: Luss y la orilla oeste, Rannoch Moor, noche en Glencoe",
          "Día 3: Three Sisters y Lost Valley, Glencoe Lochan al atardecer",
        ],
      },
    ],
    zone: [
      {
        nome: "Luss y Tarbet",
        perChi: "quien quiere dormir a orillas del Loch Lomond",
        testo: "Pocos hoteles y posadas junto al lago, algunos con vistas y embarcadero; en verano son caros y se llenan pronto.",
        fascia: "130-260 €",
      },
      {
        nome: "Balloch",
        perChi: "quien llega en tren desde Glasgow o busca precios más bajos",
        testo: "El pueblo en el extremo sur del lago, con estación, supermercados y B&B; cómodo para la orilla este y Balmaha.",
        fascia: "100-180 €",
      },
      {
        nome: "Tyndrum y Crianlarich",
        perChi: "quien quiere una parada a mitad de camino",
        testo: "Dos pueblos en el cruce entre la carretera de Oban y la de Glencoe, con lodges, albergues y B&B sencillos, muy usados por quien camina la West Highland Way.",
        fascia: "90-170 €",
      },
      {
        nome: "Glencoe y Ballachulish",
        perChi: "quien quiere despertarse en el valle y caminar temprano",
        testo: "El pueblo de Glencoe y el cercano Ballachulish, en el Loch Leven, con hoteles, B&B y algunos pubs; el Kingshouse Hotel está solo a la entrada del valle.",
        fascia: "120-250 €",
      },
    ],
    gite: [
      {
        nome: "Inveraray",
        distanza: "unos 35 km desde Tarbet por la A83",
        come: "En coche pasando por el puerto del Rest and Be Thankful.",
        testo: "Un pueblo blanco del siglo XVIII junto al Loch Fyne, con el castillo de los duques de Argyll y las ostras del lago.",
      },
      {
        nome: "Oban",
        distanza: "aproximadamente 1 hora desde Glencoe",
        come: "En coche por el Loch Linnhe y el puente de Connel; desde el Loch Lomond se va por Crianlarich y la A85.",
        testo: "El pueblo portuario de la costa oeste, con la destilería, la McCaig's Tower, el pescado del North Pier y los ferris a Mull.",
      },
      {
        nome: "Fort William y Glenfinnan",
        distanza: "media hora de Glencoe a Fort William, otros 30 minutos hasta Glenfinnan",
        come: "En coche por la A82 y luego la A830.",
        testo: "El Ben Nevis, Glen Nevis con las Steall Falls y el viaducto del Jacobite.",
      },
    ],
    faq: [
      {
        domanda: "¿Merece la pena Glencoe?",
        risposta: "Sí, es el paisaje de montaña más espectacular que se ve desde la carretera en Escocia. Aunque no se camine, las paradas entre el Rannoch Moor, el Buachaille y las Three Sisters valen el día.",
      },
      {
        domanda: "¿Cuántos días para Loch Lomond y Glencoe?",
        risposta: "En un día se cruzan los dos por la A82 con paradas. Con dos se duerme en Glencoe y se hace un paseo como el Lost Valley; con tres se añaden Balmaha y Conic Hill.",
      },
      {
        domanda: "¿Dónde dormir para Glencoe?",
        risposta: "En el pueblo de Glencoe o en Ballachulish, para despertarse en el valle; en Fort William, a media hora, hay más hoteles y precios más variados.",
      },
      {
        domanda: "¿Dónde parar a hacer fotos en la A82?",
        risposta: "Solo en los aparcamientos y apartaderos señalizados, nunca en el arcén. Son pequeños y a mediodía se llenan: conviene pasar temprano.",
      },
      {
        domanda: "¿Qué paseos hacer en Glencoe?",
        risposta: "La vuelta al Glencoe Lochan, menos de una hora y fácil; el Lost Valley, unas tres horas por un sendero rocoso con un vadeo. Las cumbres de verdad requieren experiencia de montaña.",
      },
      {
        domanda: "¿Hay mosquitos?",
        risposta: "Sí, de junio a septiembre los midges molestan sobre todo por la tarde, sin viento y cerca del agua. Hace falta repelente; con brisa desaparecen.",
      },
    ],
    // GUIDA-END
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
    comeArrivare: "En coche desde Glasgow pasando por Loch Lomond: unos 45 minutos hasta Luss y luego una hora y tres cuartos sin paradas, dejando la A82 en Crianlarich para tomar la A85 junto al Loch Awe. Desde Glencoe se llega en una hora, desde Fort William en hora y media. En tren desde Glasgow Queen Street la línea de la West Highland tarda algo más de tres horas, y la estación está junto a la terminal de ferris de CalMac.",
    comeSpostarsi: 'A pie en el centro.',
    costi: "Destilería de Oban 24 £, Dunollie 13 £, Dunstaffnage 7,50 £ online (2026); la McCaig's Tower, Pulpit Hill y el War & Peace Museum son gratis. Presupuesto orientativo por persona y día, con la habitación doble compartida y el coche aparte: bajo 80-110 €, medio 150-210 €, alto más de 300 €.",
    erroriDaEvitare: ['Llegar en verano sin reservar la visita a la destilería, que se llena también por los cruceros', 'No reservar la cena: los restaurantes de pescado del puerto están llenos'],
    miaEsperienza: 'En Ee-Usk, en el puerto de Oban, comí un pescado buenísimo. Y desde Oban fui a las Hébridas.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Destilería de Oban",
        testo: "Una pequeña destilería en el centro del pueblo, a pocos pasos del puerto, encajada entre la carretera del paseo marítimo y la colina. El whisky es un single malt de la costa oeste, y el tour es de los más compactos de Escocia.",
        come: "Con reserva en malts.com. No se admiten menores de 8 años. Quien conduce puede pedir la muestra para llevar.",
        quando: "Por la mañana, antes de los grupos de los cruceros; en verano hay que reservar con antelación.",
        tempo: "1 hora para el tour clásico",
        costo: "tour clásico desde 24 £ (unos 28 €, 2026)",
        orari: "Todos los días: abril 10-18, de mayo a septiembre 10-19, octubre 10-18, de noviembre a marzo 10-17 (2026).",
        lat: 56.4147,
        lng: -5.4728,
        url: "https://www.malts.com/en-gb/distilleries/oban",
        consiglio: "El programa de tours está en revisión: conviene volver a comprobarlo antes de ir.",
      },
      {
        nome: "McCaig's Tower",
        testo: "Un anillo de arcos de granito en la colina sobre el puerto, mandado construir por el banquero John Stuart McCaig: empezado en 1897, quedó sin terminar a su muerte, en 1902. Dentro hay un jardín, y desde el borde se ve toda la bahía con Kerrera y Mull.",
        come: "A pie desde el centro en unos diez minutos, con una subida corta y empinada.",
        quando: "Al atardecer, cuando la luz cae sobre las islas.",
        tempo: "45 minutos",
        costo: "entrada libre",
        lat: 56.4156,
        lng: -5.4691,
      },
      {
        nome: "Ee-Usk",
        testo: "El restaurante de pescado en el North Pier, con cristaleras sobre el agua y los ferris pasando delante. En la carta, ostras, mejillones, cigalas y vieiras de la costa oeste.",
        come: "Reserva en eeusk.com o en el 01631 565 666; la veranda no se reserva.",
        quando: "En verano conviene reservar con unos días de antelación.",
        tempo: "1-2 horas",
        orari: "Comida desde las 12, cena desde las 17:30.",
        lat: 56.41455,
        lng: -5.47477,
        url: "https://www.eeusk.com",
      },
      {
        nome: "Castillo y museo de Dunollie",
        testo: "Las ruinas del castillo de los MacDougall en un espolón sobre la entrada de la bahía, al norte del centro. En la casa del siglo XVIII de al lado hay un pequeño museo con objetos de la familia, tejidos y herramientas, rodeado de bosque y jardines.",
        come: "A pie desde el centro por la Corran Esplanade, unos 20 minutos en llano, y luego una breve subida.",
        quando: "Por la mañana, con la luz sobre la bahía; se combina bien con Ganavan Sands.",
        tempo: "1-2 horas",
        costo: "13 £ (unos 15 €, adultos, 2026)",
        orari: "Del 17 de marzo a finales de octubre, de martes a domingo 10-16, última entrada recomendada a las 15:30; cerrado los lunes y en invierno.",
        lat: 56.42727,
        lng: -5.48302,
        url: "https://dunollie.org",
      },
      {
        nome: "Castillo de Dunstaffnage",
        testo: "Un castillo del siglo XIII sobre una roca a la entrada del Loch Etive, con murallas altas y una torre de guardia que mira al mar. En el bosque de al lado están las ruinas de la capilla medieval. Es uno de los castillos más antiguos de Escocia que siguen en pie.",
        come: "En coche, unos 5 km al norte de Oban hacia Dunbeg; aparcamiento en el lugar.",
        quando: "En verano, cuando abre todos los días.",
        tempo: "1 hora",
        costo: "7,50 £ online (unos 9 €), 8,50 £ en taquilla (adultos, 2026)",
        orari: "Del 1 de abril al 30 de septiembre todos los días 9:30-16:30; de octubre a marzo lunes, martes, miércoles, sábado y domingo 10-15:30, cerrado jueves y viernes. Última entrada media hora antes; cerrado del 24 de diciembre al 4 de enero.",
        lat: 56.45472,
        lng: -5.4375,
        url: "https://www.historicenvironment.scot/visit-a-place/places/dunstaffnage-castle-and-chapel/",
      },
      {
        nome: "Oban War & Peace Museum",
        testo: "Un pequeño museo en el paseo marítimo que cuenta la historia del pueblo: la pesca, los ferris y el papel del puerto en la Segunda Guerra Mundial. Se ve rápido y es un buen refugio los días de lluvia.",
        come: "A pie por la Corran Esplanade, cerca del North Pier.",
        quando: "Un día de lluvia o antes de cenar.",
        tempo: "45 minutos",
        costo: "entrada libre, con donativo",
        orari: "De marzo a noviembre todos los días 10-16, los viernes hasta las 14; cerrado en invierno desde el 15 de noviembre de 2026.",
        lat: 56.4158,
        lng: -5.47377,
        url: "https://www.obanmuseum.org.uk",
      },
      {
        nome: "Pulpit Hill",
        testo: "La colina al sur del puerto, con un mirador hacia Kerrera, el Sound of Mull y los ferris que salen. Menos famosa que la McCaig's Tower, tiene una vista más abierta hacia el oeste.",
        come: "A pie desde el centro, subiendo por las calles detrás de la terminal de ferris; unos 15 minutos.",
        quando: "Al atardecer, con el sol bajando detrás de Mull.",
        tempo: "30-45 minutos",
        costo: "entrada libre",
        lat: 56.40951,
        lng: -5.48171,
      },
      {
        nome: "Ganavan Sands",
        testo: "La playa de arena más cercana a Oban, en una pequeña bahía al norte del pueblo con vistas a Lismore y a las montañas de Morvern. Se llega por un camino peatonal y ciclista junto al mar.",
        come: "A pie o en bici desde el centro pasando por Dunollie, unos 45 minutos; en coche hay un aparcamiento en la playa.",
        quando: "Los días despejados, por la mañana o por la tarde.",
        tempo: "1-2 horas",
        costo: "gratis",
        lat: 56.43897,
        lng: -5.46952,
      },
      {
        nome: "Isla de Kerrera",
        testo: "La isla frente a Oban que cierra la bahía: sin coches, con ovejas, senderos y, en la punta sur, las ruinas del castillo de Gylen sobre el mar. Un paseo de media jornada, la forma más sencilla de ver una isla sin coger el ferri grande.",
        come: "Pequeño ferri de pasajeros desde Gallanach, unos 3 km al sur de Oban por la carretera de la costa, con aparcamiento; la travesía dura pocos minutos.",
        quando: "Con tiempo seco, una mañana sin viento.",
        tempo: "media jornada",
        lat: 56.39806,
        lng: -5.53861,
        consiglio: "Horarios y tarifas del ferri cambian entre verano e invierno: conviene comprobarlos el día antes.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Tour de la destilería de Oban por la mañana",
          "Paseo por la Corran Esplanade hasta Dunollie",
          "War & Peace Museum y subida a la McCaig's Tower",
          "Cena de pescado en Ee-Usk y atardecer desde Pulpit Hill",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: destilería, McCaig's Tower, cena en Ee-Usk",
          "Día 2: ferri de CalMac a Craignure y día en Tobermory, en la isla de Mull; vuelta con el último barco",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: Dunstaffnage por la mañana, Ganavan Sands, y luego el ferri desde Gallanach y la vuelta a pie de Kerrera hasta el castillo de Gylen",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro y paseo marítimo",
        perChi: "quien quiere todo a pie, puerto y restaurantes incluidos",
        testo: "Hoteles y guesthouses en George Street y en la Corran Esplanade, a pocos minutos de la terminal de ferris y de la estación. En verano se llenan pronto.",
        fascia: "110-220 €",
      },
      {
        nome: "Colinas sobre el puerto",
        perChi: "quien busca un B&B más tranquilo y precios más bajos",
        testo: "Casas victorianas convertidas en B&B entre Pulpit Hill y las calles detrás de la McCaig's Tower, con una cuesta para volver del centro pero a menudo con vistas a la bahía.",
        fascia: "90-160 €",
      },
      {
        nome: "Ganavan y Dunbeg",
        perChi: "quien tiene coche y quiere el mar al lado",
        testo: "Al norte del pueblo, hacia la playa y Dunstaffnage: algunos hoteles y apartamentos, más silencio por la noche, pero hace falta el coche o un paseo largo hasta el centro.",
        fascia: "100-190 €",
      },
    ],
    gite: [
      {
        nome: "Isla de Mull y Tobermory",
        distanza: "45 minutos de ferri hasta Craignure y luego 1 hora de carretera",
        come: "Ferry de CalMac desde Oban, que hay que reservar con coche; a pie casi siempre hay sitio, y en Craignure hay autobuses.",
        testo: "Tobermory es el pueblo de las casas de colores en el puerto, con una destilería. Por el camino se cruzan bosques y costas de carretera de un solo carril.",
      },
      {
        nome: "Iona",
        distanza: "un día entero pasando por Mull",
        come: "Ferry a Craignure, carretera hasta Fionnphort en la punta oeste de Mull y luego el pequeño ferri de CalMac a Iona; muchos la hacen con excursiones organizadas desde Oban.",
        testo: "La isla de la abadía fundada por san Columba en el siglo VI, con playas blancas y agua clara. Un día largo, pero de los más bonitos de la costa oeste.",
      },
      {
        nome: "Seil y el Puente sobre el Atlántico",
        distanza: "unos 20 km al sur",
        come: "En coche por la A816 y luego la B844.",
        testo: "El Clachan Bridge, un puente de lomo de asno del siglo XVIII sobre un brazo de mar, lleva a la isla de Seil; desde Ellenabeich una barca va a Easdale, la isla de las canteras de pizarra.",
      },
      {
        nome: "Kilchurn Castle y Loch Awe",
        distanza: "unos 35 km al este",
        come: "Por la A85 hacia Dalmally; aparcamiento junto a la carretera y un sendero de 10 minutos.",
        testo: "Las ruinas del castillo de los Campbell en la punta del Loch Awe, con las montañas detrás. También se ve desde la carretera llegando de Glasgow.",
      },
    ],
    sapori: [
      { nome: 'Marisco', testo: 'Vieiras, cigalas, mejillones y ostras de la costa oeste.' },
      { nome: 'Whisky de Oban', testo: 'El single malt de la destilería del centro.' },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Oban?",
        risposta: "Un día basta para la destilería, la McCaig's Tower y la cena en el puerto. Con dos noches se añade un día en Mull o en Kerrera.",
      },
      {
        domanda: "¿Hay que reservar la destilería de Oban?",
        risposta: "Sí, en malts.com: es pequeña y en verano los tours se llenan, también por los cruceros. El tour clásico cuesta 24 £ (2026).",
      },
      {
        domanda: "¿Hay que reservar el ferri a Mull?",
        risposta: "Con coche sí, en la web de CalMac, sobre todo en verano. A pie casi siempre hay sitio; la travesía dura 45 minutos.",
      },
      {
        domanda: "¿Se llega a Oban sin coche?",
        risposta: "Sí, en tren desde Glasgow Queen Street en algo más de tres horas; la estación está junto a los ferris y el centro se recorre a pie.",
      },
      {
        domanda: "¿Dónde comer pescado en Oban?",
        risposta: "En el puerto: Ee-Usk, en el North Pier, es el más conocido y hay que reservar. En el muelle de los ferris también hay puestos de marisco para una comida rápida.",
      },
      {
        domanda: "¿Oban o Fort William como base?",
        risposta: "Oban para el mar, las islas y el pescado; Fort William para Glencoe, el Ben Nevis y Glenfinnan. Están a hora y media una de otra, y mucha gente duerme en las dos.",
      },
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
    comeArrivare: "En coche por la A82: desde Glencoe media hora, desde Oban una hora y media pasando por Glencoe, desde Glasgow unas tres horas sin paradas por la orilla del Loch Lomond. Glenfinnan está en la A830 hacia Mallaig, a media hora de Fort William, y de Glenfinnan a Mallaig hay otros 45 minutos. En tren, la West Highland Line llega desde Glasgow Queen Street en unas 3 horas y 50 minutos y sigue hasta Mallaig, con parada en Glenfinnan.",
    comeSpostarsi: 'En coche. En Glenfinnan hay un aparcamiento de pago cerca del centro de visitantes.',
    costi: "Nevis Range 28,95 £ (2026); el viaducto, Glen Nevis, Neptune's Staircase y el Ben Nevis son gratis, y en Glenfinnan se paga el aparcamiento. El Jacobite hay que reservarlo en cuanto salen los precios. Presupuesto orientativo por persona y día, con la habitación doble compartida y el coche aparte: bajo 80-110 €, medio 150-210 €, alto más de 300 €.",
    erroriDaEvitare: ['Contar con una plaza en el Jacobite sin reserva: hay pocas plazas', 'Caminar por las vías para la foto: el tren se mira desde los senderos'],
    miaEsperienza: 'Fui al viaducto de Glenfinnan por el tren de Harry Potter, el Jacobite.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Viaducto de Glenfinnan",
        testo: "El viaducto curvo de 21 arcos de la West Highland Line, sobre el valle al fondo del Loch Shiel, terminado en 1901 y uno de los primeros grandes puentes de hormigón. Se hizo famoso con las películas de Harry Potter, y en verano pasa por encima el tren de vapor Jacobite.",
        come: "En coche hasta Glenfinnan, por la A830, y luego a pie desde el centro de visitantes: el sendero al mirador sube en unos diez minutos.",
        quando: "A la hora de paso del Jacobite: el tren de la mañana cruza el viaducto hacia las 11, y los horarios del día están expuestos en el centro de visitantes.",
        tempo: "1-2 horas",
        costo: "gratis; aparcamiento de pago",
        lat: 56.876285,
        lng: -5.431914,
        consiglio: "El aparcamiento se llena mucho antes del paso del tren: conviene llegar al menos una hora antes.",
      },
      {
        nome: "El Jacobite",
        testo: "El tren de vapor de temporada de Fort William a Mallaig y vuelta, 84 millas en total. Pasa por el viaducto de Glenfinnan, bordea los lagos y el mar de Morar y se detiene una hora y media en Mallaig antes de volver.",
        come: "Reserva en la web de West Coast Railways; solo se venden billetes de ida y vuelta. Pocas plazas a la venta el mismo día en Fort William, solo en efectivo y sin garantía. Cuando el riesgo de incendios es alto, o por una avería, puede ir con una locomotora diésel histórica.",
        quando: "En verano, con salida por la mañana desde Fort William. En noviembre de 2026 las fechas y precios de 2027 aún no han salido.",
        tempo: "un día entero",
        url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-details.cfm",
        consiglio: "Las ventas suelen abrir a principios de año y las plazas se agotan pronto: quien solo quiere verlo pasar va al viaducto.",
      },
      {
        nome: "Glenfinnan Monument",
        testo: "La torre con la estatua de un highlander a orillas del Loch Shiel, en el lugar donde en 1745 Carlos Eduardo Estuardo alzó el estandarte del último levantamiento jacobita. El National Trust for Scotland gestiona el centro de visitantes, con una pequeña exposición y la cafetería.",
        come: "Desde el aparcamiento del centro de visitantes, a pocos minutos a pie por la orilla del lago.",
        quando: "Junto con el viaducto, antes o después del paso del tren.",
        tempo: "30-45 minutos",
        lat: 56.86917,
        lng: -5.43694,
        url: "https://www.nts.org.uk/visit/places/glenfinnan-monument",
      },
      {
        nome: "Ben Nevis",
        testo: "Con 1.345 metros es la montaña más alta del Reino Unido, y domina Fort William. La vía normal, el Mountain Track, sale de Glen Nevis y es una subida larga por sendero de piedra, sin tramos de escalada pero con tiempo de alta montaña en la cima.",
        come: "A pie desde el centro de visitantes de Glen Nevis o desde el albergue, a pocos minutos en coche del centro de Fort William.",
        quando: "De junio a septiembre, saliendo temprano; en la cima la nieve puede durar hasta el inicio del verano y la niebla es frecuente.",
        tempo: "7-9 horas ida y vuelta",
        costo: "gratis",
        lat: 56.79685,
        lng: -5.003508,
        consiglio: "Hacen falta botas de montaña, capas de abrigo y un mapa: con niebla en la cima es fácil desorientarse.",
      },
      {
        nome: "Glen Nevis y Steall Falls",
        testo: "El valle que rodea el Ben Nevis, con bosques, arroyos y, al final de la carretera, una garganta estrecha que se abre a un prado con la cascada de Steall, de unos 120 metros. Uno de los paseos cortos más bonitos de las Highlands.",
        come: "En coche hasta el aparcamiento al final de la carretera de Glen Nevis, y luego a pie por la garganta en un sendero rocoso; el puente de cables frente a la cascada es opcional.",
        quando: "Después de unos días de lluvia, cuando la cascada va llena; por la mañana, antes de que se llene el aparcamiento.",
        tempo: "2 horas ida y vuelta",
        costo: "gratis",
        lat: 56.7698,
        lng: -4.9786,
      },
      {
        nome: "Nevis Range, el teleférico",
        testo: "La telecabina sube por la ladera del Aonach Mòr, la montaña junto al Ben Nevis, de 100 a 650 metros. Arriba hay un restaurante, miradores sobre el Loch Linnhe y senderos cortos; en invierno es una estación de esquí.",
        come: "En coche, unos 10 km al noreste de Fort William por la A82 hacia Spean Bridge; billetes online o en taquilla.",
        quando: "Con el cielo despejado; con viento fuerte la telecabina puede cerrar sin aviso.",
        tempo: "2 horas; la subida dura 12-15 minutos",
        costo: "billete de día adultos 28,95 £ (unos 33 €, temporada 2026)",
        orari: "Todos los días: primera subida a las 9:30, última subida a las 15:45, última bajada a las 16; los cierres por tiempo se comprueban en la web el mismo día.",
        lat: 56.85221,
        lng: -4.99877,
        url: "https://www.nevisrange.co.uk/mountain-gondola/",
      },
      {
        nome: "Neptune's Staircase",
        testo: "Una escalera de ocho esclusas del Caledonian Canal en Banavie, la más larga de Gran Bretaña, proyectada por Thomas Telford a principios del siglo XIX. Los barcos suben unos 20 metros, y desde el camino de sirga se ve el Ben Nevis.",
        come: "En coche o en bici desde Fort William, unos 4 km al norte por la A830; aparcamiento junto a las esclusas.",
        quando: "Cuando pasan los barcos, normalmente en las horas centrales del día en verano.",
        tempo: "30-60 minutos",
        costo: "gratis",
        lat: 56.84528,
        lng: -5.09543,
      },
      {
        nome: "West Highland Museum",
        testo: "El museo de Fort William, en una plaza junto a la High Street, con colecciones sobre los jacobitas, los clanes y la vida en las Highlands. Entre los objetos más curiosos está el retrato secreto de Carlos Eduardo Estuardo, que solo se ve reflejado en un cilindro.",
        come: "A pie en el centro, en Cameron Square.",
        quando: "Un día de lluvia.",
        tempo: "1 hora",
        orari: "De lunes a sábado 10-16, última entrada media hora antes; cerrado el domingo.",
        lat: 56.8177,
        lng: -5.1111,
        url: "https://www.westhighlandmuseum.org.uk",
      },
      {
        nome: "Old Inverlochy Castle",
        testo: "Las ruinas de un castillo del siglo XIII, cuadrado y con torres en las esquinas, a orillas del río Lochy a las puertas de Fort William. Aquí se libraron dos batallas, en 1431 y en 1645.",
        come: "En coche o a pie desde el norte de la ciudad, cerca de la destilería Ben Nevis; aparcamiento pequeño frente a las murallas.",
        quando: "Al atardecer, con el Ben Nevis detrás.",
        tempo: "30 minutos",
        lat: 56.83259,
        lng: -5.081,
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Glenfinnan temprano, aparcamiento y subida al mirador",
          "Paso del Jacobite por el viaducto hacia las 11 y luego el Glenfinnan Monument",
          "Tarde en Glen Nevis con el paseo a las Steall Falls",
          "Noche en Fort William, con Old Inverlochy al atardecer",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Glenfinnan y el tren, Neptune's Staircase a la vuelta, West Highland Museum",
          "Día 2: telecabina del Nevis Range con cielo despejado, y luego Glen Nevis y las Steall Falls",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: subida al Ben Nevis para quien está en forma, o el Jacobite hasta Mallaig y las playas de Morar",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro de Fort William",
        perChi: "quien llega en tren o quiere restaurantes y supermercados a pie",
        testo: "Hoteles y guesthouses alrededor de la High Street y en la carretera del lago, cerca de la estación. En verano hay que reservar con antelación.",
        fascia: "110-230 €",
      },
      {
        nome: "Glen Nevis",
        perChi: "quien camina y quiere salir temprano hacia el Ben Nevis",
        testo: "A lo largo de la carretera del valle están el camping, el albergue y algunos lodges, a pocos minutos en coche del centro y al pie de los senderos.",
        fascia: "80-180 €",
      },
      {
        nome: "Banavie y Corpach",
        perChi: "quien tiene coche y va hacia Glenfinnan",
        testo: "Junto al canal, al norte de la ciudad: B&B y pequeños hoteles con vistas al Ben Nevis, cómodos para la A830 y para Neptune's Staircase.",
        fascia: "100-190 €",
      },
    ],
    gite: [
      {
        nome: "Mallaig y las playas de Morar",
        distanza: "aproximadamente 1 hora y cuarto en coche, o con el Jacobite",
        come: "Por la A830 pasando por Glenfinnan y Arisaig; también con el tren regular de la West Highland Line.",
        testo: "Las playas de arena blanca de Morar y Camusdarach, con las islas de Eigg y Rùm en el horizonte, y el puerto pesquero de Mallaig, de donde sale el ferri a Skye.",
      },
      {
        nome: "Glencoe",
        distanza: "media hora en coche hacia el sur",
        come: "Por la A82 junto al Loch Linnhe.",
        testo: "El valle entre las Three Sisters y el Buachaille Etive Mòr, con los paseos al Glencoe Lochan y al Lost Valley.",
      },
      {
        nome: "Isla de Skye",
        distanza: "ferri de unos 30 minutos de Mallaig a Armadale",
        come: "Ferri de CalMac, que hay que reservar con coche; o en coche hasta el puente de Skye pasando por Invergarry y Eilean Donan.",
        testo: "Desde Fort William se entra en Skye por el sur de la isla. En el día es una carrera: mejor dormir en Portree.",
      },
    ],
    faq: [
      {
        domanda: "¿A qué hora pasa el Jacobite por el viaducto de Glenfinnan?",
        risposta: "El tren de la mañana suele pasar hacia las 11; los horarios previstos se exponen cada día en el centro de visitantes. Conviene llegar al menos una hora antes para aparcar.",
      },
      {
        domanda: "¿Hay que reservar el Jacobite?",
        risposta: "Sí: las plazas son pocas y se venden sobre todo online, en la web de West Coast Railways, en cuanto sale la temporada. El mismo día en Fort William quedan pocas, solo en efectivo.",
      },
      {
        domanda: "¿Se puede ver el viaducto sin coger el tren?",
        risposta: "Sí, es lo más sencillo: desde el centro de visitantes un sendero de diez minutos sube al mirador. Los trenes regulares de la West Highland Line pasan todo el año.",
      },
      {
        domanda: "¿Cuánto se tarda en subir al Ben Nevis?",
        risposta: "Por el Mountain Track desde Glen Nevis hacen falta 7-9 horas ida y vuelta. Es un día entero, con botas de montaña y la previsión del tiempo comprobada.",
      },
      {
        domanda: "¿Cuántos días hacen falta en Fort William?",
        risposta: "Uno para Glenfinnan y Glen Nevis, dos para añadir la telecabina del Nevis Range con calma. Con el Ben Nevis hace falta un tercero.",
      },
      {
        domanda: "¿Fort William o Glencoe como base?",
        risposta: "Fort William tiene más hoteles, supermercados y el tren; Glencoe es más pequeña y tranquila, a media hora. Para Glenfinnan y el Ben Nevis es más cómoda Fort William.",
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
    comeArrivare:
      'En coche por el puente de Skye, gratuito, desde Kyle of Lochalsh; o con el ferri de CalMac de Mallaig a Armadale, en unos 30 minutos, que hay que reservar con el coche en calmac.co.uk. De Inverness a Portree hay unas tres horas de coche; desde Glasgow, pasando por Loch Lomond y Glencoe, unas cinco sin paradas. Sin coche, el tren llega a Kyle of Lochalsh desde Inverness o a Mallaig desde Fort William, y los autocares de Citylink unen Glasgow e Inverness con Portree.',
    costi:
      'Los senderos y los miradores son gratuitos; se pagan los aparcamientos (Storr unas 5-6 libras), las destilerías y los castillos: Talisker desde 22 libras, Dunvegan 18, Eilean Donan 13 (2026). En verano dormir es caro y las plazas se agotan pronto. Presupuesto orientativo al día por persona, con la doble compartida y el coche aparte: bajo 80-110 €, medio 150-220 €, alto más de 300 €.',
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
        "nome": "Old Man of Storr",
        "testo": "La aguja de roca sobre la carretera al norte de Portree, el símbolo de la isla. El sendero sube entre las rocas hasta el pie del pináculo.",
        "come": "En coche hasta el aparcamiento de la A855, y luego a pie cuesta arriba.",
        "quando": "Al amanecer o por la tarde, cuando hay menos gente.",
        "tempo": "2 horas ida y vuelta",
        "costo": "Sendero libre; aparcamiento de pago, unas 5-6 libras (unos 6-7 €) por unas horas, gratis por la tarde-noche y de noche",
        "orari": "Siempre accesible",
        "lat": 57.50669,
        "lng": -6.18368,
        "consiglio": "Arriba el viento es fuerte incluso en verano: chaqueta y capas."
      },
      {
        "nome": "Quiraing",
        "testo": "Un enorme deslizamiento de tierra en la ladera de la cresta de Trotternish, con agujas, terrazas y paredes verdes cortadas a pico. Ya se ve desde la carretera, de un solo carril, que cruza la cresta.",
        "come": "En coche por la carretera entre Staffin y Uig, y luego a pie por el sendero.",
        "quando": "Con el cielo despejado: con niebla no se ve nada.",
        "tempo": "1-3 horas",
        "costo": "Sendero libre",
        "orari": "Siempre accesible",
        "lat": 57.64083,
        "lng": -6.27389,
        "consiglio": "En la carretera del Quiraing solo se para en los aparcamientos, nunca en los apartaderos. Basta el primer tramo del sendero para la vista."
      },
      {
        "nome": "Fairy Pools",
        "testo": "Una serie de pozas y pequeñas cascadas de agua transparente a lo largo de un torrente al pie de las montañas Cuillin.",
        "come": "En coche hasta el aparcamiento de Glen Brittle, y luego a pie.",
        "quando": "A primera hora de la mañana.",
        "tempo": "1-2 horas",
        "costo": "Sendero libre; aparcamiento de pago, gestionado por una entidad que lo usa para mantener los senderos",
        "orari": "Siempre accesible",
        "lat": 57.25,
        "lng": -6.2565,
        "consiglio": "Los vados son sobre piedras: con lluvia se mojan los pies."
      },
      {
        "nome": "Destilería Talisker",
        "testo": "Fundada en 1830, es según la propia destilería la más antigua en activo de la isla. Está en Carbost, a orillas del Loch Harport.",
        "come": "Con reserva en la web malts.com, recomendable sobre todo en verano. No se admiten niños menores de 8 años.",
        "quando": "De marzo a octubre 10-17, de noviembre a febrero 10-16:30 (2026). Mantenimiento anual del 11 de octubre al 1 de noviembre de 2026, con algunas experiencias suspendidas.",
        "tempo": "1 hora",
        "costo": "Visita con cata desde 22 libras (2026)",
        "url": "https://www.malts.com/en-gb/distilleries/talisker",
        "orari": "De marzo a octubre de 10 a 17, de noviembre a febrero de 10 a 16:30",
        "lat": 57.30278,
        "lng": -6.35611
      },
      {
        "nome": "Portree",
        "testo": "El pueblo principal de la isla, con el puerto y las casas de colores en el muelle. Tiene los restaurantes, las tiendas, las gasolineras y casi todo el alojamiento.",
        "come": "En coche; el centro se recorre a pie.",
        "quando": "Por la noche, para cenar.",
        "tempo": "1-2 horas",
        "costo": "Gratis",
        "lat": 57.412,
        "lng": -6.192
      },
      {
        "nome": "Kilt Rock y la cascada de Mealt",
        "testo": "Un acantilado de basalto en columnas que recuerda los pliegues de un kilt, y al lado la cascada de Mealt, que cae directa al mar. Se ven desde el mirador, a dos pasos del aparcamiento.",
        "come": "En coche por la A855, en la vuelta a Trotternish, entre el Storr y Staffin.",
        "tempo": "20 minutos",
        "costo": "Gratis",
        "lat": 57.60639,
        "lng": -6.17861
      },
      {
        "nome": "Fairy Glen",
        "testo": "Un pequeño valle sobre Uig con colinas cónicas, lagunas y una roca con forma de torre. Es una parada breve en la vuelta a Trotternish.",
        "come": "En coche desde Uig, por una carretera estrecha; luego a pie.",
        "quando": "Por la mañana o por la tarde.",
        "tempo": "45 minutos",
        "costo": "Gratis"
      },
      {
        "nome": "Neist Point",
        "testo": "El faro en la punta más occidental de la isla, al final de un promontorio de acantilados. Se va sobre todo por el atardecer, sobre el mar abierto hacia las Hébridas Exteriores.",
        "come": "En coche hasta el aparcamiento y luego a pie por un sendero empinado, duro a la vuelta.",
        "quando": "Al atardecer.",
        "tempo": "1-1,5 horas",
        "costo": "Gratis",
        "lat": 57.421,
        "lng": -6.787
      },
      {
        "nome": "Castillo de Dunvegan",
        "testo": "La sede del clan MacLeod, habitada por la misma familia desde hace siglos, con jardines junto al lago. Desde el embarcadero salen barcas para ver las focas.",
        "come": "En coche, en el noroeste de la isla. No hace falta reservar la entrada.",
        "quando": "En la temporada de apertura, por la mañana.",
        "tempo": "2 horas",
        "costo": "Castillo y jardines 18 libras, unos 21 €; excursión en barca a las focas 14,50 libras, unos 17 €, con la entrada del castillo o de los jardines",
        "orari": "Del 26 de marzo al 15 de octubre todos los días de 10 a 17:30, última entrada a las 17; barcas a las focas de lunes a viernes hasta el 30 de septiembre. Cerrado en invierno.",
        "lat": 57.448,
        "lng": -6.59,
        "url": "https://www.dunvegancastle.com/"
      },
      {
        "nome": "Castillo de Eilean Donan",
        "testo": "El castillo en el islote donde se juntan tres lagos, unido a la orilla por un puente de piedra. Está en tierra firme, de camino al puente de Skye.",
        "come": "En coche por la A87, en Dornie.",
        "quando": "Por la mañana, antes de los autocares.",
        "tempo": "1 hora",
        "costo": "Adultos 13 libras, unos 15 € (2026)",
        "orari": "2026: junio-agosto de 9 a 18, mayo y septiembre de 9:30 a 18, abril y hasta el 24 de octubre de 10 a 18; del 25 de octubre al 22 de diciembre y en febrero-marzo de 10 a 16. Última entrada una hora antes. Cerrado todo enero y algunos días de noviembre y diciembre.",
        "lat": 57.27403,
        "lng": -5.51611,
        "url": "https://www.eileandonancastle.com/"
      },
      {
        "nome": "Sligachan",
        "testo": "El viejo puente de piedra sobre el río Sligachan, con las cumbres negras de los Cuillin detrás. Está en el cruce de las carreteras principales de la isla.",
        "come": "En coche, entre Portree y Broadford.",
        "tempo": "20 minutos",
        "costo": "Gratis",
        "lat": 57.28933,
        "lng": -6.17555
      },
      {
        "nome": "Elgol",
        "testo": "Un pueblo de la costa sur con la vista más famosa de los Cuillin, al otro lado del Loch Scavaig. De aquí salen las barcas hacia Loch Coruisk.",
        "come": "En coche desde Broadford, por una carretera de un solo carril.",
        "quando": "Por la tarde, con la luz sobre las montañas.",
        "tempo": "media jornada con la barca",
        "lat": 57.152,
        "lng": -6.098
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Old Man of Storr al amanecer",
          "Kilt Rock y la cascada de Mealt",
          "Quiraing",
          "Fairy Glen",
          "Portree por la noche"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Old Man of Storr al amanecer, la vuelta a Trotternish con el Quiraing, Portree por la noche",
          "Día 2: Fairy Pools por la mañana, Talisker por la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Old Man of Storr al amanecer, Kilt Rock, Quiraing y Fairy Glen, Portree por la noche",
          "Día 2: Fairy Pools por la mañana, Talisker por la tarde, Neist Point al atardecer",
          "Día 3: Dunvegan, Sligachan y Elgol, luego el puente con parada en Eilean Donan"
        ]
      }
    ],
    zone: [
      {
        "nome": "Portree",
        "perChi": "quien quiere restaurantes y servicios",
        "testo": "El centro de la isla, cerca de Trotternish.",
        "fascia": "100-220 €"
      },
      {
        "nome": "Sur de la isla",
        "perChi": "quien llega en ferri desde Mallaig",
        "testo": "Más tranquilo, cerca de Armadale.",
        "fascia": "90-180 €"
      },
      {
        "nome": "Costa oeste: Carbost y Dunvegan",
        "perChi": "quien quiere Talisker, las Fairy Pools y Neist Point",
        "testo": "Más aislada, con B&B y casitas; hay pocos restaurantes y se cena temprano.",
        "fascia": "100-200 €"
      },
      {
        "nome": "Kyle of Lochalsh y Dornie",
        "perChi": "quien encuentra la isla llena o sigue hacia Inverness",
        "testo": "En tierra firme, junto al puente y a Eilean Donan, con estación de tren.",
        "fascia": "90-170 €"
      }
    ],
    attenzioni: [
      "Carreteras de un solo carril: uno se para en el apartadero de su izquierda, o espera delante del de la derecha.",
      "Ovejas y ciervos en la carretera, también de día.",
      "Tiempo que cambia en una hora: chaqueta impermeable siempre en el coche."
    ],
    gite: [
      {
        "nome": "Raasay",
        "distanza": "unos 30 km de Portree al puerto de Sconser",
        "come": "Ferri de CalMac desde Sconser, con o sin coche.",
        "testo": "La isla frente a Skye, casi sin turistas, con senderos por las colinas y la destilería de Raasay."
      },
      {
        "nome": "Applecross y el Bealach na Bà",
        "distanza": "unos 60 km desde el puente de Skye",
        "come": "En coche, hacia el norte por tierra firme; la carretera es estrecha y empinada.",
        "testo": "El puerto de montaña con curvas cerradas y vistas a Skye, y al final el pueblo de Applecross junto al mar. Es el tramo oeste de la North Coast 500."
      },
      {
        "nome": "Mallaig y la costa de Morar",
        "distanza": "30 minutos de ferri desde Armadale",
        "come": "Ferri de CalMac Armadale-Mallaig.",
        "testo": "El puerto donde termina la West Highland Line y, un poco al sur, las playas de arena blanca de Morar."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Skye?",
        "risposta": "Dos días para Trotternish, con el Storr y el Quiraing, y para las Fairy Pools con Talisker. Con tres se añaden Neist Point, Dunvegan y Elgol y queda margen para el mal tiempo."
      },
      {
        "domanda": "¿Mejor llegar por el puente o en ferri?",
        "risposta": "El puente desde Kyle of Lochalsh es gratuito y siempre está abierto. El ferri de Mallaig a Armadale tarda media hora y es cómodo viniendo de Glenfinnan, pero con coche hay que reservarlo."
      },
      {
        "domanda": "¿Se puede recorrer Skye sin coche?",
        "risposta": "Es difícil: hay pocos autobuses y no llegan a los senderos más famosos. Sin coche conviene dormir en Portree y hacer excursiones organizadas."
      },
      {
        "domanda": "¿Dónde conviene dormir en Skye?",
        "risposta": "En Portree, que tiene más alojamiento y restaurantes y está cerca de Trotternish. En verano se reserva con meses de antelación: en el último momento queda poco."
      },
      {
        "domanda": "¿Cuándo ir a Skye?",
        "risposta": "De mayo a septiembre, con los días largos. En julio y agosto los aparcamientos de los senderos se llenan pronto, y en las tardes sin viento están los midges, mosquitos diminutos que pican: hace falta repelente."
      },
      {
        "domanda": "¿Hay que reservar la destilería Talisker?",
        "risposta": "Conviene, en malts.com, sobre todo en verano. No se admiten niños menores de 8 años."
      }
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
    comeArrivare: "En coche por la A82 a lo largo de toda la orilla norte del Lago Ness desde Fort William, pasando por Fort Augustus y Urquhart; desde Skye se pasa por Eilean Donan y Glen Shiel, unas tres horas desde Portree sin paradas. De Inverness a Dufftown, en Speyside, hay una hora y cuarto. El aeropuerto de Inverness tiene vuelos desde Londres y otras ciudades británicas, y en tren se llega desde Edimburgo y Glasgow por la línea de las Highlands; la estación está en pleno centro.",
    comeSpostarsi: 'En coche.',
    costi: "Urquhart 14 £ online, Inverness Castle 20 £, Fort George 10 £, Loch Ness Centre 16 £ (2026); Clava Cairns, las Ness Islands, Dores y Chanonry Point son gratis. Presupuesto orientativo por persona y día, con la habitación doble compartida y el coche aparte: bajo 80-110 €, medio 140-200 €, alto más de 280 €.",
    erroriDaEvitare: ['Llegar a Urquhart sin entrada en temporada alta: se reserva online con fecha y hora'],
    miaEsperienza: 'Hice Inverness y el Lago Ness. El Lago Ness, sinceramente, es un poco meh: por sí solo no vale el viaje.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Castillo de Urquhart",
        testo: "Las ruinas de un castillo medieval en un promontorio del Lago Ness, cerca de Drumnadrochit. Sigue en pie la Grant Tower, desde la que se ve el lago en las dos direcciones; es el lugar más fotografiado de la orilla.",
        come: "En coche por la A82. Entradas online en la web de Historic Environment Scotland, con fecha y hora: cuando se agotan online, en taquilla no quedan. El aparcamiento es gratuito pero solo está garantizado con reserva.",
        quando: "A la apertura, antes de los autocares.",
        tempo: "1-2 horas",
        costo: "14 £ online (unos 16 €), 16 £ en taquilla (adultos, 2026)",
        orari: "1 de abril-31 de agosto 9:30-20:15; septiembre 9:30-18; octubre 9:30-17; noviembre-marzo 9:30-16:30. Última entrada una hora antes; cerrado el 25 y 26 de diciembre.",
        lat: 57.324,
        lng: -4.442,
        url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/",
      },
      {
        nome: "Inverness Castle Experience",
        testo: "El castillo de arenisca roja del siglo XIX sobre el río, durante años sede del tribunal, reabierto en febrero de 2026 como museo sobre las historias, los paisajes y la gente de las Highlands. Desde la terraza de la azotea se ve toda la ciudad a lo largo del Ness.",
        come: "A pie desde el centro, con una breve subida. Entradas con hora, más baratas online; los jardines, el bistró y la tienda son de acceso libre.",
        quando: "Por la mañana, o a última hora de la tarde en verano, cuando abre hasta la noche.",
        tempo: "1-2 horas",
        costo: "20 £ online (unos 23 €), 22 £ en taquilla (adultos de 16 a 65 años, 2026)",
        orari: "De abril a septiembre todos los días 10-19, última entrada a las 17; de octubre a marzo 10-18, última entrada a las 16. Cerrado el 25 y 26 de diciembre y el 1 de enero.",
        lat: 57.4764,
        lng: -4.2254,
        url: "https://invernesscastle.scot",
      },
      {
        nome: "Ness Islands",
        testo: "Un grupo de islotes arbolados en medio del río, unidos por pasarelas victorianas. Es el paseo clásico de Inverness, a diez minutos del centro y lejos del tráfico.",
        come: "A pie por la orilla del Ness, en un circuito que sale del castillo o de la catedral.",
        quando: "A primera hora de la mañana o al atardecer.",
        tempo: "1 hora",
        costo: "gratis",
        lat: 57.4632,
        lng: -4.2307,
      },
      {
        nome: "Catedral de St Andrew",
        testo: "La catedral episcopal de arenisca rosa en la orilla oeste del río, terminada en 1869, con dos torres y vidrieras de colores. Desde la orilla de enfrente, con el castillo delante, es una de las vistas más bonitas de la ciudad.",
        come: "A pie desde el centro cruzando el Ness Bridge o la pasarela de Greig Street.",
        quando: "De día, fuera del horario de los oficios.",
        tempo: "30 minutos",
        lat: 57.47444,
        lng: -4.22917,
      },
      {
        nome: "Victorian Market",
        testo: "El mercado cubierto del siglo XIX en el centro, con techo de hierro y cristal, pequeñas tiendas independientes y una zona de comida con puestos de cocinas distintas. Útil para una comida rápida un día de lluvia.",
        come: "A pie en el centro, con entradas desde Academy Street y Church Street.",
        quando: "A la hora de comer.",
        tempo: "30-60 minutos",
        lat: 57.4791,
        lng: -4.2251,
      },
      {
        nome: "Leakey's Bookshop",
        testo: "Una de las librerías de segunda mano más grandes de Escocia, dentro de una iglesia gaélica del siglo XVIII, con una estufa de leña en el centro y estanterías hasta el altillo. Merece la pena entrar aunque solo sea para verla.",
        come: "A pie en el centro, en Church Street, junto al cementerio de Greyfriars.",
        quando: "Un día de lluvia.",
        tempo: "30-60 minutos",
        lat: 57.48028,
        lng: -4.22867,
      },
      {
        nome: "Culloden",
        testo: "El páramo donde el 16 de abril de 1746 el ejército jacobita de Carlos Eduardo Estuardo fue derrotado por las tropas del gobierno: la última batalla campal librada en Gran Bretaña. Banderas rojas y azules marcan las líneas de los dos ejércitos, y el centro de visitantes del National Trust for Scotland cuenta la jornada.",
        come: "En coche, unos 9 km al este de Inverness por la B9006; el campo de batalla está abierto todo el año, el centro de visitantes tiene horario y entrada aparte, que conviene reservar.",
        quando: "Por la mañana, antes de los grupos; con la luz baja el páramo impresiona más.",
        tempo: "2 horas",
        lat: 57.47722,
        lng: -4.0925,
        url: "https://www.nts.org.uk/visit/places/culloden",
        consiglio: "Se combina bien con Clava Cairns, a pocos minutos en coche.",
      },
      {
        nome: "Clava Cairns",
        testo: "Un cementerio de la Edad del Bronce, de hace unos 4.000 años: tres grandes túmulos de piedra rodeados de círculos de menhires, en un bosque de hayas. Un lugar tranquilo, mucho menos concurrido que Culloden.",
        come: "En coche, con indicaciones desde la B9091, unos centenares de metros al este de Culloden; aparcamiento en el lugar.",
        quando: "A primera hora o al atardecer, con la luz entre los árboles.",
        tempo: "30-45 minutos",
        costo: "entrada libre",
        orari: "Abierto todo el año.",
        lat: 57.47367,
        lng: -4.07435,
        url: "https://www.historicenvironment.scot/visit-a-place/places/clava-cairns/",
      },
      {
        nome: "Fort George",
        testo: "Una fortaleza militar del siglo XVIII en una lengua de tierra del Moray Firth, construida después de Culloden y que sigue siendo cuartel. Se recorren los baluartes junto al mar, y desde las murallas a veces se ven delfines.",
        come: "En coche, unos 20 km al noreste de Inverness, pasado Ardersier.",
        quando: "Un día despejado, por la vista sobre el firth.",
        tempo: "2 horas",
        costo: "10 £ online (unos 12 €), 11 £ en taquilla (adultos, 2026)",
        orari: "1 de abril-30 de septiembre todos los días 9:30-17:30; 1 de octubre-31 de marzo 10-16. Última entrada una hora antes; cerrado el 25 y 26 de diciembre y el 1 y 2 de enero.",
        lat: 57.58389,
        lng: -4.07028,
        url: "https://www.historicenvironment.scot/visit-a-place/places/fort-george/",
      },
      {
        nome: "Chanonry Point",
        testo: "Una punta de grava en el Black Isle, frente a Fort George, donde los delfines mulares del Moray Firth cazan muy cerca de la orilla. Es uno de los mejores puntos del Reino Unido para verlos desde tierra.",
        come: "En coche desde Inverness cruzando el Kessock Bridge y pasando por Fortrose, unos 25 minutos; aparcamiento pequeño junto al faro, y luego se camina por la playa.",
        quando: "De mayo a septiembre, con la marea subiendo.",
        tempo: "1-2 horas",
        costo: "gratis",
        lat: 57.57421,
        lng: -4.09352,
        consiglio: "El aparcamiento se llena pronto: se puede dejar el coche en Rosemarkie y caminar por la playa.",
      },
      {
        nome: "Loch Ness Centre, Drumnadrochit",
        testo: "El centro de visitantes del lago, con un recorrido multimedia sobre la geología del Lago Ness, las búsquedas científicas y la leyenda de Nessie. Útil para entender el lago antes o después de Urquhart, a pocos minutos.",
        come: "En coche por la A82, en el pueblo de Drumnadrochit; entradas con hora, más baratas online.",
        quando: "Un día de lluvia o junto con Urquhart.",
        tempo: "1 hora",
        costo: "16 £ online (unos 18 €), 18 £ en taquilla (adultos, 2026)",
        orari: "El horario cambia según la temporada y se publica en el calendario de la web.",
        lat: 57.33737,
        lng: -4.47787,
        url: "https://lochness.com",
      },
      {
        nome: "Fort Augustus y las esclusas del Caledonian Canal",
        testo: "El pueblo en el extremo sur del Lago Ness, atravesado por una escalera de cinco esclusas del Caledonian Canal que baja hasta el lago. Se ven los barcos subir y bajar desde las mesas de los pubs junto al canal.",
        come: "En coche por la A82, unos 50 minutos desde Inverness; aparcamiento de pago en el pueblo.",
        quando: "En verano, cuando hay más tráfico de barcos.",
        tempo: "1 hora",
        costo: "gratis",
        lat: 57.14496,
        lng: -4.6837,
      },
      {
        nome: "Dores Beach",
        testo: "Una playa de guijarros en el extremo norte del Lago Ness, en la orilla sur, con la vista larga sobre el lago de punta a punta. Mucho más tranquila que la orilla norte, y el sitio para ver el Lago Ness sin autocares.",
        come: "En coche desde Inverness por la B862, unos 20 minutos; aparcamiento junto al pub del pueblo.",
        quando: "Al atardecer, con el agua en calma.",
        tempo: "30-60 minutos",
        costo: "gratis",
        lat: 57.38393,
        lng: -4.33634,
      },
      {
        nome: "Falls of Foyers",
        testo: "Una cascada de unos 50 metros en una garganta boscosa sobre la orilla sur del Lago Ness, cantada por Robert Burns. Un sendero con escalones baja hasta los miradores.",
        come: "En coche por la B852 por la orilla sur, unos 35 minutos desde Inverness; aparcamiento en el pueblo de Foyers.",
        quando: "Después de la lluvia, cuando lleva más agua.",
        tempo: "45 minutos",
        costo: "gratis",
        lat: 57.24862,
        lng: -4.49269,
        consiglio: "Se combina con Dores para recorrer la orilla sur, más tranquila que la A82.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Urquhart a la apertura, con la entrada online",
          "Loch Ness Centre en Drumnadrochit y comida",
          "Vuelta a Inverness: Inverness Castle Experience y la terraza de la azotea",
          "Paseo a las Ness Islands y cena en el centro",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Inverness, con el castillo, la catedral, el Victorian Market, Leakey's y las Ness Islands",
          "Día 2: Culloden y Clava Cairns por la mañana, Urquhart por la tarde, atardecer en Dores Beach",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: Fort George por la mañana y Chanonry Point con la marea subiendo para ver los delfines; o la vuelta por la orilla sur con Dores y las Falls of Foyers hasta Fort Augustus",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro y orillas del río",
        perChi: "quien llega en tren y quiere todo a pie",
        testo: "Hoteles y guesthouses alrededor de la estación y a lo largo de Ness Bank y Huntly Street, en las dos orillas del río, a pocos minutos del castillo y de los restaurantes.",
        fascia: "120-240 €",
      },
      {
        nome: "Crown y Old Edinburgh Road",
        perChi: "quien busca un B&B tranquilo a 10-15 minutos a pie del centro",
        testo: "Barrios residenciales victorianos en la colina sobre el castillo, con muchas casas convertidas en B&B y aparcamiento más fácil.",
        fascia: "90-170 €",
      },
      {
        nome: "Drumnadrochit, en el Lago Ness",
        perChi: "quien quiere dormir junto al lago y llegar a Urquhart antes que los autocares",
        testo: "Pueblo en la A82 a media hora de Inverness, con algunos hoteles, B&B y un par de pubs; por la noche hay poco que hacer.",
        fascia: "110-200 €",
      },
    ],
    gite: [
      {
        nome: "Speyside y las destilerías",
        distanza: "aproximadamente 1 hora y cuarto hasta Dufftown",
        come: "En coche: las destilerías están a pocos minutos unas de otras entre Dufftown, Craigellachie y Aberlour, todas con reserva.",
        testo: "El valle con más destilerías de Escocia: Glenfiddich, The Macallan, The Glenlivet, Cardhu. Con dos tours al día basta.",
      },
      {
        nome: "Cawdor Castle",
        distanza: "unos 25 km al este",
        come: "En coche pasando por Culloden; se combina con Fort George.",
        testo: "Un castillo habitado desde el siglo XIV, ligado al Macbeth de Shakespeare, con jardines cuidados y un bosque alrededor.",
      },
      {
        nome: "Black Isle y Glen Ord",
        distanza: "unos 25 minutos al noroeste",
        come: "En coche cruzando el Kessock Bridge; Glen Ord está en Muir of Ord, Chanonry Point del lado de Fortrose.",
        testo: "La península de los delfines y de la destilería del Singleton: tour clásico desde 24 £ (2026), con reserva. Glen Ord es también el punto de salida o de llegada de la North Coast 500.",
      },
    ],
    faq: [
      {
        domanda: "¿Merece la pena el Lago Ness?",
        risposta: "Merece la parada de camino, con Urquhart y una vista desde Dores o Fort Augustus, pero por sí solo no justifica el viaje. Mejor meterlo entre Skye, Fort William y Speyside.",
      },
      {
        domanda: "¿Hay que reservar el castillo de Urquhart?",
        risposta: "Sí, sobre todo en verano: se compra online con fecha y hora a 14 £ (16 en taquilla, 2026), y cuando se agotan online no quedan en el lugar. Con la reserva también se garantiza el aparcamiento.",
      },
      {
        domanda: "¿Cuántos días hacen falta en Inverness?",
        risposta: "Un día para la ciudad y Urquhart, dos para añadir Culloden y Clava Cairns, tres con Fort George y los delfines de Chanonry Point.",
      },
      {
        domanda: "¿Dónde se ven delfines cerca de Inverness?",
        risposta: "En Chanonry Point, en el Black Isle, de mayo a septiembre con la marea subiendo: nadan a pocos metros de la orilla. A veces también se ven desde las murallas de Fort George.",
      },
      {
        domanda: "¿Está abierto el castillo de Inverness?",
        risposta: "Sí, desde febrero de 2026 abre todo el año como Inverness Castle Experience: entrada de adulto 20 £ online, 22 en taquilla (2026).",
      },
      {
        domanda: "¿Se puede recorrer el Lago Ness sin coche?",
        risposta: "En parte: los autobuses Citylink entre Inverness y Fort William van por la A82 y paran en Drumnadrochit, Urquhart y Fort Augustus. Para la orilla sur, Dores y Foyers hace falta coche.",
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
