import type { Destinazione } from '@/lib/types'

const IMG = '/images/viaggi/londra-cotswolds'

export const destinazioniInghilterra: Destinazione[] = [
  {
    slug: 'londra',
    paeseSlug: 'inghilterra',
    ordine: 1,
    nome: 'Londres',
    tipologia: ['città', 'musei', 'cultura'],
    giorniConsigliati: '4 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital del Reino Unido, a orillas del Támesis. Westminster y Buckingham Palace, la Torre y el Tower Bridge, los museos nacionales gratuitos, los parques reales y barrios muy distintos entre sí, de Covent Garden a Notting Hill.',
    percheAndarci:
      'Por los museos, de los más ricos del mundo y en gran parte gratuitos, y por una ciudad que se recorre bien a pie a lo largo del río. Es también la puerta natural al campo inglés.',
    cosaVedere: [
      'Westminster, el Big Ben y la Abadía',
      'El British Museum',
      'La Torre de Londres y el Tower Bridge',
      'El South Bank y la Tate Modern',
      'Los museos de South Kensington',
      'Notting Hill y Portobello Road',
      'Hyde Park y Kensington Gardens',
    ],
    cosaFare: [
      'Caminar junto al Támesis desde Westminster hasta el Tower Bridge',
      'Una mañana en el British Museum',
      'El mercado de Portobello Road el sábado',
      'Una noche de teatro en el West End',
    ],
    comeArrivare:
      'Vuelos directos desde Italia a Heathrow, Gatwick, Stansted, Luton y London City. Desde Heathrow se llega al centro en metro o con la Elizabeth line. Desde Heathrow la Piccadilly line cuesta unos 5,90 £ con tarjeta contactless y tarda 50-60 minutos, la Elizabeth line unos 15,50 £ en 30-40 minutos, el Heathrow Express unos 25 £ en 15-20 minutos hasta Paddington; un taxi negro cuesta unos 70-110 £. Desde Gatwick, Stansted y Luton hay trenes directos al centro. Para entrar en el Reino Unido hace falta la autorización UK ETA, 20 £ (2026).',
    comeSpostarsi:
      'Metro y autobús pagando con la tarjeta contactless o con la Oyster: se usa siempre la misma tarjeta, y el gasto tiene un tope diario. En el centro muchas distancias se hacen a pie. El coche no hace falta: en la zona central se paga la Congestion Charge, 18 libras al día (2026).',
    periodoMigliore: 'todo el año; de mayo a septiembre los días son más largos',
    costi:
      'Dormir es caro. Los grandes museos nacionales son gratuitos; la Torre de Londres y las atracciones privadas son de pago. Presupuesto orientativo por día y persona, compartiendo doble: bajo 100-130 €, medio 200-280 €, alto más de 400 €.',
    erroriDaEvitare: [
      'Alquilar el coche en Londres: entre el tráfico, la Congestion Charge y los aparcamientos, conviene recogerlo solo para los Cotswolds',
      'Comprar billetes sencillos de metro: con la tarjeta contactless se paga menos',
      'Meter demasiadas cosas en un día: las distancias entre un barrio y otro son grandes',
    ],
    miaEsperienza:
      "Londres también es mi casa: hice la universidad en Surrey y viví allí un año, trabajando en el centro.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Westminster",
        "testo": "El Palacio de Westminster, sede del Parlamento, con la torre del reloj que todos llaman Big Ben, y enfrente la Abadía de Westminster, donde se corona a los soberanos. A pocos minutos están Downing Street, Whitehall y St James's Park, que lleva a Buckingham Palace.",
        "come": "Metro hasta Westminster. El puente de Westminster es el punto desde el que mejor se ve el Parlamento.",
        "quando": "Al atardecer, desde el puente o desde la orilla sur.",
        "tempo": "medio día",
        "costo": "Abadía unos 32 £ (unos 37 €, 2026); exteriores gratis",
        "orari": "Abadía abierta a visitas de lunes a sábado; el domingo solo para los oficios.",
        "lat": 51.4995,
        "lng": -0.1248,
        "url": "https://www.westminster-abbey.org/"
      },
      {
        "nome": "British Museum",
        "testo": "Uno de los museos más grandes del mundo, con la Piedra de Rosetta, los mármoles del Partenón y las colecciones egipcias. La Great Court, el patio cubierto por la bóveda de cristal, ya vale por sí sola la entrada, que es gratuita.",
        "come": "Metro hasta Tottenham Court Road o Holborn. Conviene elegir pocas salas en lugar de verlo todo.",
        "quando": "A la apertura, antes que los grupos.",
        "tempo": "3 horas",
        "costo": "gratuito; exposiciones temporales de pago",
        "orari": "Todos los días 10-17, el viernes hasta las 20:30.",
        "lat": 51.5194,
        "lng": -0.127,
        "url": "https://www.britishmuseum.org"
      },
      {
        "nome": "La Torre de Londres y el Tower Bridge",
        "testo": "La fortaleza sobre el Támesis, nacida con Guillermo el Conquistador, donde se guardan las joyas de la Corona. Al lado está el Tower Bridge, el puente de las dos torres, que se cruza a pie.",
        "come": "Metro hasta Tower Hill. La Torre es de pago: las entradas se compran en la web de Historic Royal Palaces.",
        "quando": "A primera hora de la mañana para las joyas de la Corona, que tienen la cola más larga.",
        "tempo": "medio día",
        "costo": "Torre unos 38 £ (unos 44 €, 2026); cruzar el Tower Bridge a pie es gratis",
        "orari": "Desde las 9, domingos y lunes desde las 10; cierra a media tarde, antes en invierno.",
        "lat": 51.5081,
        "lng": -0.0759,
        "url": "https://www.hrp.org.uk/tower-of-london/"
      },
      {
        "nome": "South Bank y Tate Modern",
        "testo": "La orilla sur del Támesis, peatonal de Westminster al Tower Bridge. Se pasa por el London Eye, por el Millennium Bridge con la vista de St Paul's y por la Tate Modern, el museo de arte moderno en una antigua central eléctrica. Un poco más allá está el Borough Market.",
        "come": "A pie junto al río.",
        "quando": "Por la tarde, hasta el atardecer.",
        "tempo": "medio día",
        "costo": "Tate Modern gratuita (colección); London Eye desde unos 29 £ online",
        "orari": "Tate Modern todos los días 10-18.",
        "lat": 51.5076,
        "lng": -0.0994,
        "url": "https://www.tate.org.uk/visit/tate-modern"
      },
      {
        "nome": "South Kensington",
        "testo": "El barrio de los museos: el Natural History Museum, con las galerías gratuitas, el Victoria and Albert Museum y el Science Museum, uno al lado del otro. Desde aquí se entra en Hyde Park y en los Kensington Gardens.",
        "come": "Metro hasta South Kensington. En el Natural History Museum se puede reservar online la entrada gratuita, útil los fines de semana y en las vacaciones escolares.",
        "quando": "En un día de lluvia.",
        "tempo": "medio día",
        "costo": "gratuitos; exposiciones de pago",
        "orari": "Natural History Museum todos los días 10-17:50.",
        "lat": 51.4967,
        "lng": -0.1764,
        "url": "https://www.nhm.ac.uk/visit.html"
      },
      {
        "nome": "Notting Hill",
        "testo": "Las casas de color pastel, las mews, antiguas caballerizas convertidas en casas, y el mercado de Portobello Road, con antigüedades y comida callejera.",
        "come": "Metro hasta Notting Hill Gate.",
        "quando": "El sábado, cuando el mercado está completo.",
        "tempo": "2-3 horas",
        "costo": "gratuito",
        "orari": "Portobello Road al completo el sábado, con las antigüedades; el resto de días solo fruta, verdura y algún puesto.",
        "lat": 51.5155,
        "lng": -0.205,
        "consiglio": "Muchas casas están habitadas: se fotografían desde la calle, sin subir a los escalones."
      },
      {
        "nome": "National Gallery y Trafalgar Square",
        "testo": "Una de las grandes pinacotecas de Europa, gratuita, con los Girasoles de Van Gogh, la Venus del espejo de Velázquez, Leonardo, Turner y Constable. Delante está Trafalgar Square con la columna de Nelson y los leones.",
        "come": "Metro Charing Cross o Leicester Square. Entrada libre, reserva gratuita recomendada los fines de semana.",
        "quando": "El viernes por la noche, cuando abre hasta tarde.",
        "tempo": "2 horas",
        "costo": "gratuito",
        "orari": "Todos los días 10-18, el viernes hasta las 21.",
        "lat": 51.5089,
        "lng": -0.1283,
        "url": "https://www.nationalgallery.org.uk/"
      },
      {
        "nome": "Catedral de San Pablo",
        "testo": "La catedral barroca de Christopher Wren, reconstruida tras el Gran Incendio de 1666, con una de las cúpulas más grandes del mundo. Se sube a la Galería de los Susurros y a las galerías exteriores, con vistas a la City.",
        "come": "Metro St Paul's; desde la Tate Modern se llega a pie por el Millennium Bridge. Entrada más barata online.",
        "quando": "A la apertura para subir con menos gente; en el Evensong de las 17 se entra gratis a la función cantada.",
        "tempo": "1h30-2 horas",
        "costo": "unos 27 £ (unos 31 €, 2026); gratis para los oficios",
        "orari": "Visitas de lunes a sábado, de la mañana a media tarde; el domingo solo oficios.",
        "lat": 51.5138,
        "lng": -0.0984,
        "url": "https://www.stpauls.co.uk/"
      },
      {
        "nome": "Buckingham Palace y St James's Park",
        "testo": "La residencia oficial del soberano, con el cambio de guardia ante sus verjas. Se llega por el Mall o por St James's Park, el parque real más bonito, con pelícanos en el lago.",
        "come": "Metro Green Park o St James's Park. Las State Rooms abren solo en verano, con entrada de pago.",
        "quando": "El cambio de guardia es a las 11 algunos días de la semana, casi a diario en verano: consultar el calendario y llegar media hora antes.",
        "tempo": "1-2 horas",
        "costo": "exterior y parque gratis; State Rooms de pago en verano",
        "lat": 51.5014,
        "lng": -0.1419,
        "url": "https://www.rct.uk/visit/buckingham-palace"
      },
      {
        "nome": "Covent Garden y Soho",
        "testo": "El antiguo mercado de frutas y verduras con artistas callejeros bajo los soportales, y al lado Soho, con locales, Chinatown y los teatros del West End. Es el corazón de la noche londinense.",
        "come": "Metro Covent Garden, Leicester Square o Tottenham Court Road; todo a pie.",
        "quando": "Desde media tarde, antes de un espectáculo.",
        "tempo": "2-3 horas",
        "costo": "gratuito; entradas de última hora para musicales en la taquilla TKTS de Leicester Square",
        "lat": 51.5117,
        "lng": -0.124
      },
      {
        "nome": "Borough Market",
        "testo": "El mercado de alimentación más antiguo de Londres, bajo las vías cerca de London Bridge, con quesos británicos, pan, ostras y comida callejera de medio mundo.",
        "come": "Metro London Bridge; por el South Bank se llega a pie desde la Tate Modern en 10 minutos.",
        "quando": "Un día laborable hacia las 11, antes de la aglomeración del mediodía.",
        "tempo": "1 hora",
        "costo": "entrada libre",
        "orari": "Abierto todos los días, con menos puestos el lunes.",
        "lat": 51.5055,
        "lng": -0.091,
        "url": "https://boroughmarket.org.uk/"
      },
      {
        "nome": "Sky Garden",
        "testo": "Un jardín colgante en la planta 35 del rascacielos «Walkie-Talkie», en la City, con terraza abierta sobre el Támesis y la Torre. El mirador gratuito más alto de Londres.",
        "come": "Metro Monument; entrada gratuita solo con reserva online, con documento.",
        "quando": "Las franjas del atardecer, que se agotan primero.",
        "tempo": "1 hora",
        "costo": "gratuito con reserva",
        "lat": 51.5112,
        "lng": -0.0835,
        "url": "https://skygarden.london/",
        "consiglio": "Las reservas se abren por bloques unas semanas antes: si se han agotado, se puede probar a primera hora sin reserva cuando hay sitio."
      },
      {
        "nome": "Greenwich",
        "testo": "El barrio real sobre el Támesis con el velero Cutty Sark, el Royal Naval College de Wren, el National Maritime Museum y, en lo alto del parque, el Observatorio con el meridiano cero. Desde la colina se ve toda la City y Canary Wharf.",
        "come": "Barco Uber Boat by Thames Clippers desde Westminster o London Bridge, o DLR hasta Cutty Sark.",
        "quando": "Un día despejado; el mercado cubierto tiene más vida el fin de semana.",
        "tempo": "medio día",
        "costo": "parque, Naval College y Maritime Museum gratis; Observatorio y Cutty Sark de pago",
        "lat": 51.4769,
        "lng": -0.0005,
        "url": "https://www.rmg.co.uk/"
      },
      {
        "nome": "Camden Market",
        "testo": "Los mercados a lo largo del Regent's Canal, entre antiguos establos y almacenes, con vintage, artesanía y comida callejera. Desde el canal se puede caminar hasta Little Venice o King's Cross.",
        "come": "Metro Camden Town o Chalk Farm.",
        "quando": "Entre semana; el fin de semana está abarrotado.",
        "tempo": "2 horas",
        "costo": "entrada libre",
        "orari": "Todos los días de las 10 a la noche.",
        "lat": 51.5413,
        "lng": -0.146,
        "url": "https://www.camdenmarket.com/"
      },
      {
        "nome": "Hyde Park y Kensington Gardens",
        "testo": "El gran parque real con el lago Serpentine, el Speakers' Corner y, al oeste, los Kensington Gardens con el palacio de Kensington y la estatua de Peter Pan. Es donde los londinenses pasan el tiempo al aire libre.",
        "come": "Metro Marble Arch, Hyde Park Corner, Knightsbridge o Lancaster Gate; se enlaza a pie con South Kensington y Notting Hill.",
        "quando": "Una mañana de sol; en diciembre está el Winter Wonderland.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "orari": "Hyde Park todos los días de 5 a medianoche.",
        "lat": 51.5073,
        "lng": -0.1657,
        "url": "https://www.royalparks.org.uk/visit/parks/hyde-park"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Westminster, la Abadía y el Big Ben, luego St James's Park hasta Buckingham Palace.",
          "Trafalgar Square y National Gallery; comida en Covent Garden.",
          "Tarde: el South Bank a pie hasta la Tate Modern y el Borough Market.",
          "Atardecer desde el Tower Bridge o desde el Sky Garden con reserva."
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Westminster, St James's Park y Buckingham Palace, National Gallery, Covent Garden y Soho por la noche.",
          "Día 2: Torre de Londres a la apertura, Tower Bridge, Borough Market, Tate Modern y San Pablo por el Millennium Bridge."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Westminster, Buckingham Palace, National Gallery, West End.",
          "Día 2: Torre, Tower Bridge, Borough Market, Tate Modern, San Pablo.",
          "Día 3: British Museum por la mañana; tarde en South Kensington y Hyde Park, o en Greenwich en barco."
        ]
      },
      {
        "titolo": "4 días",
        "tappe": [
          "Día 1: Westminster y el río",
          "Día 2: British Museum, Covent Garden y el West End",
          "Día 3: la Torre, Tower Bridge, Borough Market y la Tate Modern",
          "Día 4: Notting Hill, Hyde Park y South Kensington"
        ]
      }
    ],
    zone: [
      {
        "nome": "South Bank y Southwark",
        "perChi": "quien quiere hacerlo todo a pie",
        "testo": "En la orilla sur, cerca del río, del Borough Market y de Westminster.",
        "fascia": "200-350 €"
      },
      {
        "nome": "Bloomsbury",
        "perChi": "quien quiere el centro con precios algo más bajos",
        "testo": "Cerca del British Museum y de las estaciones de King's Cross y Euston.",
        "fascia": "160-280 €"
      },
      {
        "nome": "Paddington",
        "perChi": "quien sigue hacia Oxford, los Cotswolds o Bath",
        "testo": "Los trenes hacia el oeste salen de aquí, y está la Elizabeth line para Heathrow.",
        "fascia": "140-250 €"
      },
      {
        "nome": "Covent Garden y el West End",
        "perChi": "quien quiere teatros y locales en la puerta",
        "testo": "El centro exacto, con todo a pie y metro por todas partes. Es la zona más cara y la más ruidosa por la noche.",
        "fascia": "250-450 €"
      }
    ],
    gite: [
      {
        "nome": "Windsor",
        "distanza": "35-55 minutos en tren",
        "come": "Trenes desde Waterloo a Windsor & Eton Riverside, o desde Paddington con cambio en Slough.",
        "testo": "El castillo habitado más antiguo del mundo, con la capilla de San Jorge y los apartamentos de Estado. Cierra algunos días por actos reales."
      },
      {
        "nome": "Oxford",
        "distanza": "1 hora en tren",
        "come": "Trenes rápidos desde Paddington; el centro está a diez minutos a pie de la estación.",
        "testo": "Los colleges, la Bodleian Library y la Radcliffe Camera. Christ Church cuesta unos 20-25 £ según el día y a veces cierra por actos."
      },
      {
        "nome": "Cambridge",
        "distanza": "50 minutos en tren",
        "come": "Trenes directos desde King's Cross o Liverpool Street; autobús o 20 minutos a pie al centro.",
        "testo": "La capilla del King's College, los Backs junto al río y el punting en barca plana por el Cam. Es más recogida que Oxford."
      },
      {
        "nome": "Brighton",
        "distanza": "1 hora en tren",
        "come": "Trenes frecuentes desde Victoria o London Bridge.",
        "testo": "La ciudad de mar de los londinenses, con el Palace Pier, el Royal Pavilion de estilo indio y los callejones de las Lanes. Los acantilados de las Seven Sisters están cerca."
      }
    ],
    sapori: [
      { nome: 'Sunday roast', testo: 'El asado del domingo en los pubs, con patatas, verduras y Yorkshire pudding.' },
      { nome: 'Fish and chips', testo: 'Pescado rebozado y frito con patatas fritas, el plato para llevar más clásico.' },
      { nome: 'Afternoon tea', testo: 'Té con scones, nata y mermelada y pequeños sándwiches, por la tarde.' },
    ],
    attenzioni: [
      'En las escaleras mecánicas del metro uno se queda a la derecha: la izquierda es para quien camina.',
      'Carteristas en las zonas más concurridas, de Oxford Street a los mercados.',
      'Al cruzar la calle se mira primero a la derecha: el tráfico llega del lado contrario que en Italia.',
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Londres?",
        "risposta": "Tres días para Westminster, la Torre, el South Bank y un gran museo; cuatro o cinco para añadir South Kensington, Notting Hill, Greenwich y una excursión a Windsor u Oxford."
      },
      {
        "domanda": "¿Hace falta la ETA para ir a Londres?",
        "risposta": "Sí, los ciudadanos de la UE necesitan la autorización electrónica UK ETA, que se pide en la web del gobierno o con la app oficial. Cuesta 20 £ (2026) y vale dos años; las webs que la venden más cara no son oficiales."
      },
      {
        "domanda": "¿Qué museos son gratis en Londres?",
        "risposta": "Los museos nacionales: British Museum, National Gallery, Tate Modern, Natural History Museum, V&A y Science Museum, salvo exposiciones temporales. De pago son la Torre, San Pablo, la Abadía y las atracciones privadas."
      },
      {
        "domanda": "¿Mejor Oyster o tarjeta contactless?",
        "risposta": "La tarjeta contactless o el móvil funcionan como la Oyster, con el mismo tope diario y sin depósito. Lo importante es usar siempre la misma tarjeta o el mismo dispositivo."
      },
      {
        "domanda": "¿Cómo se va de Heathrow al centro de Londres?",
        "risposta": "La Piccadilly line cuesta unos 5,90 £ y tarda 50-60 minutos; la Elizabeth line unos 15,50 £ en 30-40 minutos; el Heathrow Express llega a Paddington en 15-20 minutos por unos 25 £."
      },
      {
        "domanda": "¿Dónde dormir en Londres?",
        "risposta": "South Bank o Bloomsbury para tener mucho a pie, Paddington por los trenes al oeste y a Heathrow. Una doble en zona 1 empieza en unos 150 € y supera con facilidad los 300 € en el West End."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'El Big Ben y el Palacio de Westminster al anochecer, con las estelas de luz del tráfico sobre el puente, Londres',
    immagine: `${IMG}/giorno-01-westminster.webp`,
  },
  {
    slug: 'cotswolds',
    paeseSlug: 'inghilterra',
    ordine: 2,
    nome: 'Cotswolds',
    tipologia: ['campagna', 'borghi', 'natura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      'Una zona de colinas y pueblos de piedra caliza color miel, casi 800 millas cuadradas a caballo entre cinco condados: Gloucestershire, Oxfordshire, Warwickshire, Wiltshire y Worcestershire. Es un área protegida, el Cotswolds National Landscape.',
    percheAndarci:
      'Por el campo inglés de postal: muros de piedra seca, cottages con tejado de piedra, pubs de pueblo y senderos entre los campos, a menos de dos horas de Londres.',
    cosaVedere: [
      'Bibury y Arlington Row',
      'Bourton-on-the-Water',
      'Lower Slaughter y Upper Slaughter',
      'Stow-on-the-Wold',
      'Chipping Campden',
      'Broadway',
      'Castle Combe',
    ],
    cosaFare: ['Una vuelta por los pueblos en coche', 'Una caminata entre Lower y Upper Slaughter', 'Una comida en un pub de campo'],
    comeArrivare:
      'En tren desde Londres Paddington por la línea de Oxford, Charlbury y Kingham hasta Moreton-in-Marsh, en una hora y media aproximadamente (tiempo orientativo); horarios y precios en nationalrail.co.uk, más baratos comprando con antelación. Desde Heathrow se llega a Paddington con la Elizabeth line, en unos 30-40 minutos, o con el Heathrow Express, en 15-20 minutos. Quien vaya en coche conviene que lo recoja en Oxford, a una hora de tren de Londres: desde allí Stow-on-the-Wold está a unos 45 minutos.',
    costi:
      'Los pueblos y los senderos son gratuitos; se pagan los aparcamientos y las casas históricas, como Blenheim Palace (41 libras online, unos 47 €, 2026). Dormir es caro: los pubs con habitaciones y los B&B empiezan en unos 100-120 € la doble. Presupuesto orientativo al día por persona, con la doble compartida y el coche de alquiler aparte: bajo 90-120 €, medio 160-230 €, alto más de 350 €.',
    comeSpostarsi:
      'En coche todo es más sencillo: los pueblos están cerca, pero hay pocos autobuses. Las carreteras de campo son estrechas, con setos altos, y se conduce por la izquierda.',
    periodoMigliore: 'de mayo a septiembre; en primavera y en otoño hay menos grupos',
    erroriDaEvitare: [
      'Llegar a Bibury y a Bourton-on-the-Water a mediodía, cuando llegan los autocares',
      'Querer todos los pueblos en un día: dos o tres por jornada, con una caminata, rinden más',
    ],
    miaEsperienza:
      "Estuve con el coche recogido en Oxford: dos días entre Bibury, Bourton-on-the-Water, los Slaughter, Chipping Campden y Castle Combe. Conducir por la izquierda para mí está bien, pero hay que acostumbrarse, digamos, y en el campo de vez en cuando las carreteras pueden ser estrechas.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Bibury y Arlington Row",
        "testo": "Una hilera de cottages de piedra nacidos en 1380 como almacén de lana de un monasterio y convertidos a finales del siglo XVII en casas de tejedores. Es una de las imágenes más conocidas de los Cotswolds.",
        "come": "En coche, con aparcamiento limitado en el pueblo.",
        "quando": "Temprano por la mañana o al final de la tarde.",
        "tempo": "1 hora",
        "costo": "Gratis; aparcamiento de pago en el pueblo, con pocas plazas",
        "orari": "Siempre accesible; las casas están habitadas",
        "lat": 51.7584,
        "lng": -1.8348
      },
      {
        "nome": "Bourton-on-the-Water",
        "testo": "El pueblo con el río Windrush bajo y ancho, cruzado por pequeños puentes de piedra. Es el más concurrido de la zona.",
        "come": "En coche, con aparcamientos de pago en los bordes del centro.",
        "quando": "A primera hora de la mañana o en un día laborable.",
        "tempo": "1-2 horas",
        "costo": "Gratis; aparcamientos de pago en las afueras del centro",
        "orari": "Siempre accesible",
        "lat": 51.886,
        "lng": -1.759
      },
      {
        "nome": "Lower Slaughter y Upper Slaughter",
        "testo": "Dos pueblos diminutos a lo largo de un arroyo, unidos por un sendero entre prados. Son lo contrario de Bourton: silenciosos.",
        "come": "A pie de un pueblo al otro, ida y vuelta.",
        "quando": "Por la mañana o a última hora de la tarde.",
        "tempo": "1-2 horas con la caminata",
        "costo": "Gratis",
        "orari": "Siempre accesible",
        "lat": 51.906,
        "lng": -1.777,
        "consiglio": "En Lower Slaughter casi no hay sitio para aparcar: conviene dejar el coche en Upper Slaughter o en Bourton y caminar. El sendero cruza campos con ovejas, y las cancelas hay que cerrarlas al pasar."
      },
      {
        "nome": "Stow-on-the-Wold",
        "testo": "Un pueblo de mercado en lo alto de una colina, con la plaza, las tiendas de antigüedades y la iglesia de St Edward, con la puerta entre dos tejos que muchos relacionan con el mundo de Tolkien.",
        "come": "En coche o a pie desde los Slaughter.",
        "tempo": "1-2 horas",
        "quando": "A última hora de la tarde, al final de la ruta, o temprano por la mañana si se duerme aquí.",
        "costo": "Gratis",
        "lat": 51.93,
        "lng": -1.7225
      },
      {
        "nome": "Chipping Campden y Broadway",
        "testo": "Los Cotswolds del norte. Chipping Campden tiene una calle principal de casas de piedra, con el antiguo mercado cubierto. Broadway es más grande, con la torre en lo alto de la colina.",
        "come": "En coche, al norte de Stow.",
        "tempo": "medio día",
        "quando": "Por la mañana, antes de los autocares.",
        "costo": "Gratis",
        "lat": 52.052,
        "lng": -1.779
      },
      {
        "nome": "Castle Combe",
        "testo": "Un pueblo de Wiltshire, en el extremo sur de los Cotswolds, con las casas de piedra alrededor de la antigua cruz del mercado y el puente sobre el arroyo. Está de camino a Bath.",
        "come": "En coche, dejándolo en el aparcamiento de encima del pueblo y bajando a pie.",
        "quando": "Por la mañana.",
        "tempo": "1 hora",
        "costo": "Gratis",
        "orari": "Siempre accesible",
        "lat": 51.493,
        "lng": -2.229
      },
      {
        "nome": "Broadway Tower",
        "testo": "Una torre del siglo XVIII en lo alto de la colina sobre Broadway, uno de los puntos más altos de los Cotswolds. Desde arriba la vista abarca varios condados.",
        "come": "En coche desde Broadway en unos diez minutos, o a pie por el Cotswold Way, cuesta arriba desde el pueblo.",
        "quando": "Con el cielo despejado o hacia el atardecer.",
        "tempo": "1 hora",
        "lat": 52.02417,
        "lng": -1.83583,
        "url": "https://www.broadwaytower.co.uk/"
      },
      {
        "nome": "Blenheim Palace",
        "testo": "El gran palacio barroco de los duques de Marlborough, patrimonio de la UNESCO, donde nació Winston Churchill. El parque diseñado por Capability Brown, con el lago y el puente, merece la visita por sí solo.",
        "come": "En Woodstock, en el borde oriental de los Cotswolds, en la carretera entre Oxford y Burford. Entradas online, 3 libras más baratas que en taquilla.",
        "quando": "Por la mañana, a la apertura. Del 13 de noviembre al 3 de enero hay programa de Navidad y no se venden entradas solo para el parque.",
        "tempo": "media jornada",
        "costo": "Palacio, parque y jardines 41 libras online y 44 en taquilla, unos 47-51 €; solo parque y jardines 31 libras online, unos 36 € (2026)",
        "orari": "Parque abierto todos los días de 9 a 18; el palacio tiene horario propio y cierres de temporada, en la web oficial.",
        "lat": 51.84136,
        "lng": -1.36095,
        "url": "https://www.blenheimpalace.com/"
      },
      {
        "nome": "Hidcote Manor Garden",
        "testo": "Uno de los jardines más conocidos de Inglaterra, creado a principios del siglo XX y dividido en «habitaciones» por setos y muros, cada una con su color. Es del National Trust.",
        "come": "En coche, a pocos kilómetros al norte de Chipping Campden.",
        "quando": "De mayo a septiembre, con las floraciones.",
        "tempo": "2 horas",
        "lat": 52.08456,
        "lng": -1.74609,
        "url": "https://www.nationaltrust.org.uk/"
      },
      {
        "nome": "Sudeley Castle",
        "testo": "Un castillo con jardines en Winchcombe, todavía habitado. En la capilla está enterrada Catalina Parr, la última esposa de Enrique VIII.",
        "come": "En coche, en los Cotswolds occidentales, a media hora de Broadway.",
        "quando": "Solo en la temporada de apertura: reabre en marzo de 2027.",
        "tempo": "2-3 horas",
        "costo": "Adultos 24 libras, unos 28 € (2026)",
        "orari": "En temporada, castillo y jardines desde las 10, última entrada a las 15; el castillo cierra a las 16 y el recinto a las 17. Cerrado en invierno.",
        "url": "https://sudeleycastle.co.uk/"
      },
      {
        "nome": "Burford",
        "testo": "Un pueblo junto al río Windrush, con la calle principal en bajada entre casas de piedra, tiendas y posadas. Llegando desde Oxford, es la puerta de los Cotswolds.",
        "come": "En coche por la A40, entre Oxford y Cheltenham.",
        "quando": "Por la mañana o a la hora de comer.",
        "tempo": "1 hora",
        "costo": "Gratis",
        "lat": 51.808,
        "lng": -1.637
      },
      {
        "nome": "Cirencester y el Corinium Museum",
        "testo": "Cirencester era Corinium, una de las ciudades más importantes de la Britania romana. El museo tiene mosaicos y objetos romanos hallados en la zona; la iglesia de la plaza del mercado es de las más grandes de los Cotswolds.",
        "come": "En coche, en el sur de los Cotswolds, de camino entre Bibury y Castle Combe.",
        "tempo": "2 horas",
        "lat": 51.7138,
        "lng": -1.9763,
        "url": "https://coriniummuseum.org/"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Bibury a primera hora de la mañana",
          "Bourton-on-the-Water",
          "Caminata entre Lower y Upper Slaughter",
          "Stow-on-the-Wold"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba",
          "Día 2: Chipping Campden y Broadway, o Castle Combe de camino a Bath"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Bibury a primera hora, Bourton-on-the-Water, el paseo entre Lower y Upper Slaughter, Stow-on-the-Wold",
          "Día 2: Chipping Campden, Broadway y la Broadway Tower, Hidcote por la tarde",
          "Día 3: Burford y Blenheim Palace, o Cirencester y Castle Combe de camino a Bath"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stow-on-the-Wold y alrededores",
        "perChi": "quien se mueve en coche",
        "testo": "En el centro de la zona, a pocos minutos de Bourton, de los Slaughter y de Moreton-in-Marsh.",
        "fascia": "120-230 €"
      },
      {
        "nome": "Moreton-in-Marsh",
        "perChi": "quien llega en tren",
        "testo": "Tiene estación en la línea de Londres y algunos autobuses a los pueblos cercanos.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Chipping Campden y Broadway",
        "perChi": "quien quiere los Cotswolds del norte",
        "testo": "Pueblos más grandes, con posadas históricas y algún hotel de lujo. Cómodos para Hidcote y para una excursión a Stratford-upon-Avon.",
        "fascia": "140-280 €"
      },
      {
        "nome": "Burford y Bibury",
        "perChi": "quien llega en coche desde Oxford",
        "testo": "El lado sureste de la zona, más cerca de Oxford y de Blenheim. Por la noche, cuando se van los autocares, Bibury es silencioso.",
        "fascia": "130-260 €"
      }
    ],
    sapori: [
      {
        "nome": "Cream tea",
        "testo": "Té con scones, nata y mermelada, en los salones de té de los pueblos."
      },
      {
        "nome": "Pub de pueblo",
        "testo": "Comida con platos de temporada y cervezas locales, a menudo en edificios de piedra de varios siglos."
      }
    ],
    attenzioni: [
      "Carreteras de campo estrechas, con setos altos y poca visibilidad: se conduce por la izquierda y despacio.",
      "En Arlington Row se fotografía desde la calle, sin entrar en los jardines."
    ],
    gite: [
      {
        "nome": "Oxford",
        "distanza": "45 minutos en coche desde Stow-on-the-Wold",
        "come": "En coche, o en tren desde Moreton-in-Marsh o Kingham.",
        "testo": "Los colleges, la Radcliffe Camera y la Bodleian en un día a pie. Es también el sitio más cómodo para recoger o devolver el coche."
      },
      {
        "nome": "Stratford-upon-Avon",
        "distanza": "unos 20 km desde Chipping Campden",
        "come": "En coche, hacia el norte.",
        "testo": "La ciudad natal de Shakespeare, con la casa donde nació, las casas de entramado de madera y el teatro de la Royal Shakespeare Company junto al río Avon."
      },
      {
        "nome": "Bath",
        "distanza": "media hora en coche desde Castle Combe",
        "come": "En coche, hacia el sur; desde Bath Spa el tren vuelve a Londres Paddington en una hora y media aproximadamente.",
        "testo": "Las termas romanas, la abadía y los crescents georgianos. Es el final natural de una ruta por los Cotswolds."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta para los Cotswolds?",
        "risposta": "Dos días para los pueblos principales, tres para añadir la Broadway Tower, Hidcote y Blenheim Palace sin prisas. Dos o tres pueblos al día, con un paseo, cunden más que una lista larga."
      },
      {
        "domanda": "¿Se pueden visitar los Cotswolds sin coche?",
        "risposta": "Sí, con limitaciones. El tren llega a Moreton-in-Marsh y hay pocos autobuses entre los pueblos: lo más práctico es dormir allí y hacer una excursión organizada por los pueblos."
      },
      {
        "domanda": "¿Dónde conviene dormir en los Cotswolds?",
        "risposta": "En Stow-on-the-Wold si se va en coche, porque está en el centro de la zona; en Moreton-in-Marsh si se llega en tren. Se duerme en pubs con habitaciones y B&B, que hay que reservar pronto."
      },
      {
        "domanda": "¿Cuáles son los pueblos más bonitos de los Cotswolds?",
        "risposta": "Los más famosos son Bibury, Bourton-on-the-Water y Castle Combe, también los más concurridos. Lower y Upper Slaughter y Chipping Campden son más tranquilos."
      },
      {
        "domanda": "¿Cuándo ir a los Cotswolds?",
        "risposta": "De mayo a septiembre; en primavera y otoño hay menos grupos. En cualquier época conviene llegar a Bibury y Bourton antes de las 9, antes que los autocares."
      },
      {
        "domanda": "¿Hace falta el permiso internacional para conducir?",
        "risposta": "No con un carné de la UE, que vale sin permiso internacional. Se conduce por la izquierda, por carreteras estrechas entre setos."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'Los cottages de piedra color miel de Bibury, en los Cotswolds',
    immagine: `${IMG}/giorno-06-bibury.webp`,
  },
  {
    slug: 'oxford',
    paeseSlug: 'inghilterra',
    ordine: 3,
    nome: 'Oxford',
    tipologia: ['città', 'cultura', 'università'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    miaEsperienza:
      "Llegué en tren desde Paddington, después de los días en Londres: una vuelta por la ciudad de los colleges, y luego recogí el coche y entré en los Cotswolds.",
    introduzione:
      'La ciudad universitaria más antigua del mundo anglófono, con los colleges de piedra clara, las bibliotecas y los patios. Está entre Londres y los Cotswolds, y para en la misma línea de tren.',
    percheAndarci: 'Por los colleges, la Radcliffe Camera y la Bodleian, en una jornada a pie. Es también el sitio más cómodo para recoger el coche para los Cotswolds.',
    cosaVedere: ['Radcliffe Square y la Radcliffe Camera', 'La Bodleian Library', 'El Christ Church College', 'El Bridge of Sighs', 'El Ashmolean Museum'],
    cosaFare: ['Una vuelta por los colleges abiertos al público', 'Subir a un campanario para ver los tejados', 'Un paseo junto al río'],
    comeArrivare:
      "Desde Londres Paddington hay trenes directos frecuentes, en una hora aproximadamente; desde Marylebone salen también trenes hacia Oxford Parkway. En autobús, el Oxford Tube une Londres y Oxford de día y de noche, y desde los aeropuertos de Heathrow y Gatwick hay un autocar directo. La estación está a 10 minutos a pie del centro.",
    comeSpostarsi:
      "A pie: el centro es pequeño y en gran parte cerrado al tráfico. Quien llega en coche lo deja en los aparcamientos Park & Ride en las afueras y coge el autobús.",
    erroriDaEvitare: ['Llegar sin comprobar los horarios de los colleges: muchos abren solo a ciertas horas o cierran por exámenes y eventos'],
    luoghi: [
      {
        nome: "Radcliffe Square y la Radcliffe Camera",
        testo: "La plaza más fotografiada de Oxford, cerrada entre la Bodleian, la iglesia universitaria y los colleges. En el centro está la Radcliffe Camera, la biblioteca redonda con cúpula construida entre 1737 y 1749 según un proyecto de James Gibbs.",
        come: "A pie, en el centro. La plaza es libre; dentro de la Camera solo se entra con una visita guiada de la Bodleian.",
        quando: "A primera hora de la mañana, antes de los grupos, o al atardecer, cuando la piedra se calienta de color.",
        tempo: "20 minutos desde fuera",
        costo: "plaza gratis; visita de la Radcliffe Camera con tour de la ciudad desde 30 libras (unos 35 €)",
        url: "https://visit.bodleian.ox.ac.uk/",
        lat: 51.7534,
        lng: -1.2539,
      },
      {
        nome: "Bodleian Library y la Divinity School",
        testo: "La biblioteca de la universidad, una de las más antiguas de Europa. La Divinity School, de 1488, tiene una bóveda de piedra que parece un encaje y está abierta a los visitantes; la sala de Duke Humfrey, la parte más antigua, solo se ve con las visitas guiadas.",
        come: "Entrada por el patio de la Old Schools Quadrangle. Billetes online o en la taquilla de la Weston Library.",
        quando: "Por la mañana: los tours se agotan pronto los fines de semana y en verano.",
        tempo: "15 minutos para la Divinity School, 30-60 minutos con un tour",
        costo: "Divinity School 3 libras (unos 3,5 €); tour de 30 minutos desde 12,50 libras (unos 14 €), de 60 minutos desde 17,50 (unos 20 €)",
        url: "https://visit.bodleian.ox.ac.uk/",
        lat: 51.7539,
        lng: -1.2544,
        consiglio: "El tour de 30 minutos basta para ver la Divinity School y la sala de Duke Humfrey.",
      },
      {
        nome: "Weston Library",
        testo: "El edificio de la Bodleian en Broad Street abierto al público, con exposiciones gratuitas de manuscritos, mapas y libros raros, un café y la tienda. De aquí salen los tours de la biblioteca.",
        come: "En Broad Street, enfrente del Clarendon Building. Entrada libre a la planta baja.",
        quando: "A cualquier hora, también cuando llueve.",
        tempo: "30-45 minutos",
        costo: "gratis",
        orari: "Lunes-viernes 9-17, sábado y domingo 10-17; cerrada del 24 al 26 de diciembre y el 1 de enero",
        url: "https://visit.bodleian.ox.ac.uk/",
        lat: 51.755,
        lng: -1.2551,
      },
      {
        nome: "Christ Church",
        testo: "El college más grande de Oxford, fundado en el siglo XVI, con el Tom Quad, el Great Hall con los retratos de antiguos alumnos y la escalinata que inspiró las películas de Harry Potter, y la catedral de la ciudad dentro del college.",
        come: "Entrada de visitantes por el lado de Christ Church Meadow. Visita por libre con audioguía multimedia; los billetes salen cada viernes y cuestan 2 libras menos reservados con antelación.",
        quando: "A primera hora. En periodo lectivo el Great Hall cierra a mediodía (12-14 de lunes a viernes) y el domingo solo abre desde las 14; hay cierres por ceremonias, conviene mirar la web.",
        tempo: "1,5 horas",
        costo: "del 4 de octubre al 12 de diciembre de 2026, 22,95 libras entre semana y 24,95 el fin de semana (unos 26-29 €); del 13 al 31 de diciembre, 24,95-26,95 libras",
        orari: "Lunes-sábado desde las 10, domingo desde las 14, salida antes de las 17; cerrado el 25 de diciembre",
        url: "https://www.chch.ox.ac.uk/visit",
        lat: 51.7503,
        lng: -1.2558,
      },
      {
        nome: "Christ Church Meadow",
        testo: "El gran prado entre Christ Church y los ríos Cherwell y Támesis, con vacas pastando y paseos arbolados. Desde aquí se ven las torres de los colleges sobre los campos.",
        come: "A pie desde St Aldate's o desde Merton Street. Entrada libre.",
        quando: "A primera hora de la mañana o al final de la tarde.",
        tempo: "45 minutos de paseo",
        costo: "gratis",
        orari: "Abierto todo el año salvo el 25 de diciembre",
        lat: 51.7475,
        lng: -1.2525,
      },
      {
        nome: "Ashmolean Museum",
        testo: "El museo de arte y arqueología de la universidad, fundado en 1683 y considerado el primer museo público británico. De las antigüedades egipcias y griegas a los dibujos de Rafael y Miguel Ángel y la pintura inglesa.",
        come: "En Beaumont Street, a pie desde el centro. Las exposiciones temporales se reservan aparte.",
        quando: "En los días de lluvia o a primera hora de la tarde.",
        tempo: "1,5-2 horas",
        costo: "gratis; exposiciones temporales de pago",
        orari: "Todos los días 10-17, última entrada 16.45",
        url: "https://www.ashmolean.org/",
        lat: 51.7554,
        lng: -1.26,
        consiglio: "El restaurante de la azotea es un buen sitio para un té con vistas a los tejados.",
      },
      {
        nome: "Museo de Historia Natural",
        testo: "Un edificio neogótico victoriano con una gran sala de hierro y cristal llena de esqueletos de dinosaurios. Aquí están los restos del dodo que inspiró a Lewis Carroll para «Alicia en el país de las maravillas».",
        come: "En Parks Road, a 10 minutos a pie del centro. Entrada libre.",
        quando: "Junto con el Pitt Rivers, que está justo detrás.",
        tempo: "1 hora",
        costo: "gratis, donativo sugerido de 5 libras",
        orari: "Todos los días 10-17, última entrada 16.45",
        url: "https://www.oumnh.ox.ac.uk/",
        lat: 51.7586,
        lng: -1.2557,
      },
      {
        nome: "Pitt Rivers Museum",
        testo: "Un museo de antropología montado todavía a la antigua: vitrinas repletas de objetos de todo el mundo, ordenados por tipo y no por lugar, entre máscaras, herramientas, armas y tótems. Uno de los museos más raros y fascinantes de Inglaterra.",
        come: "Se entra pasando por dentro del Museo de Historia Natural, en Parks Road.",
        quando: "Por la tarde; el lunes solo abre a mediodía.",
        tempo: "1 hora",
        costo: "gratis",
        orari: "Martes-domingo 10-17; lunes 12-17 (10-17 los lunes festivos)",
        url: "https://www.prm.ox.ac.uk/",
        lat: 51.7586,
        lng: -1.255,
      },
      {
        nome: "Bridge of Sighs",
        testo: "El puente cubierto que une las dos partes del Hertford College sobre New College Lane, terminado en 1914. Lo llaman como el puente veneciano, aunque se parece más al Rialto.",
        come: "A pie desde Radcliffe Square o desde Broad Street. Se ve desde la calle.",
        quando: "En cualquier momento; a primera hora la calle está vacía.",
        tempo: "10 minutos",
        costo: "gratis",
        lat: 51.7545,
        lng: -1.2539,
        consiglio: "Seguir por New College Lane hasta el Turf Tavern, un viejo pub escondido en un callejón.",
      },
      {
        nome: "Sheldonian Theatre",
        testo: "El teatro de las ceremonias de la universidad, proyectado por Christopher Wren e inaugurado en 1669, con el techo pintado y la cúpula desde la que se ve todo el centro. Se sigue usando para graduaciones y conciertos.",
        come: "En Broad Street. Billetes en la puerta solo con tarjeta, u online; a la cúpula se sube por 114 escalones.",
        quando: "Los horarios cambian cada mes por los eventos: los días de ceremonia solo abre la cúpula.",
        tempo: "45 minutos",
        costo: "Sheldonian Experience 8,25 libras (unos 9,5 €); solo cúpula 5,25 (unos 6 €)",
        url: "https://www.sheldonian.ox.ac.uk/",
        lat: 51.7543,
        lng: -1.255,
      },
      {
        nome: "Torre de la University Church of St Mary the Virgin",
        testo: "La iglesia de la universidad en Radcliffe Square, con una torre medieval desde la que se tiene la mejor vista sobre la Radcliffe Camera y los tejados de los colleges.",
        come: "Billetes en la tienda junto a la entrada de Radcliffe Square. 127 escalones por una escalera de caracol estrecha y gastada; edad mínima 8 años.",
        quando: "Por la mañana o al final de la tarde, cuando hay menos cola.",
        tempo: "30-45 minutos",
        costo: "torre 7 libras (unos 8 €); iglesia gratis",
        orari: "Lunes-sábado 9.30-18, domingo 12-18; última entrada a la torre 16.30",
        url: "https://www.universitychurch.ox.ac.uk/",
        lat: 51.7528,
        lng: -1.2537,
      },
      {
        nome: "Carfax Tower",
        testo: "El campanario superviviente de una iglesia medieval en el cruce central de la ciudad. Desde arriba se ven las agujas de Oxford desde otro lado respecto a St Mary's.",
        come: "En el cruce de High Street, Cornmarket y St Aldate's. 99 escalones estrechos, sin ascensor.",
        quando: "En los días despejados; en invierno cierra pronto.",
        tempo: "30 minutos",
        costo: "4 libras (unos 4,5 €)",
        orari: "Desde las 10; cierra a las 15 de noviembre a febrero, a las 16 en marzo y octubre, a las 17 en abril-mayo y septiembre, a las 18 de junio a agosto. Última entrada 15 minutos antes",
        url: "https://www.citysightseeingoxford.com/carfax-tower",
        lat: 51.752,
        lng: -1.2577,
      },
      {
        nome: "Magdalen College",
        testo: "Uno de los colleges más bonitos, junto al río Cherwell, con el claustro, el campanario y un parque con ciervos. Desde el college sale el Addison's Walk, un sendero junto al río entre prados.",
        come: "Entrada por High Street, cerca del Magdalen Bridge. Billetes online o allí mismo, solo con tarjeta.",
        quando: "Por la tarde, terminando con el paseo junto al río.",
        tempo: "1-1,5 horas",
        costo: "10 libras (unos 11,5 €)",
        orari: "Todos los días desde las 10 hasta el anochecer o las 17 (de julio a septiembre hasta las 18.30); cerrado del 22 al 31 de diciembre de 2026",
        url: "https://www.magd.ox.ac.uk/visiting-magdalen/",
        lat: 51.7524,
        lng: -1.2471,
      },
      {
        nome: "Jardín botánico",
        testo: "El jardín botánico más antiguo de Gran Bretaña, fundado en 1621 frente al Magdalen College, con invernaderos, jardines amurallados y el río al lado.",
        come: "Entrada por Rose Lane, cerca del Magdalen Bridge. Billetes en la web de la universidad.",
        quando: "En primavera y verano; en invierno se ven sobre todo los invernaderos.",
        tempo: "1 hora",
        orari: "Todos los días 10-16 de noviembre a febrero, 10-17 en marzo-abril y septiembre-octubre, 10-18 de mayo a agosto; última entrada una hora antes",
        url: "https://obga.ox.ac.uk/visit-garden",
        lat: 51.7506,
        lng: -1.2483,
      },
      {
        nome: "Covered Market",
        testo: "El mercado cubierto del centro, abierto en el siglo XVIII, con carnicerías, panaderías, cafés, tiendecitas y puestos de comida. El sitio más práctico para una comida rápida entre un college y otro.",
        come: "Entre High Street y Market Street, a pie.",
        quando: "A la hora de comer, o por la noche de jueves a sábado.",
        tempo: "30-60 minutos",
        costo: "gratis",
        orari: "Lunes-miércoles 8-17.30, jueves-sábado 8-22, domingos y festivos 10-17; cada tienda tiene su horario",
        url: "https://oxford-coveredmarket.co.uk/",
        lat: 51.7527,
        lng: -1.2567,
      },
      {
        nome: "Punting en el Cherwell",
        testo: "El paseo en punt, la barca plana que se empuja con una pértiga, por el río Cherwell entre prados y jardines: el pasatiempo de verano de Oxford. En el Cherwell Boathouse, al norte del centro, se alquila para llevarla uno mismo.",
        come: "A pie o en autobús hasta Bardwell Road. El punt lleva hasta 6 personas; como fianza se deja la tarjeta de crédito.",
        quando: "De abril a mediados de octubre, en los días sin viento.",
        tempo: "1-2 horas",
        costo: "25 libras la hora entre semana y 27 el fin de semana (unos 29-31 €) por barca",
        orari: "Temporada hasta mediados de octubre; alquiler desde las 10 hasta una hora antes del cierre, que cambia según la temporada",
        url: "https://cherwellboathouse.co.uk/punting",
        lat: 51.7697,
        lng: -1.2538,
        consiglio: "Quien no quiera manejar la pértiga puede coger un punt con barquero en el centro, en el Magdalen Bridge.",
      },
    ],
    zone: [
      {
        nome: "El centro histórico",
        perChi: "quien tiene una sola noche y quiere todo a pie",
        testo: "Hoteles y pubs con habitaciones entre los colleges, cerca de Broad Street y High Street. Pocos y caros, pero se sale a primera hora directamente a Radcliffe Square.",
        fascia: "100-300 €",
      },
      {
        nome: "Jericho",
        perChi: "quien quiere un barrio tranquilo con restaurantes",
        testo: "El barrio victoriano detrás del Ashmolean, junto al canal, con casas adosadas, cafés y restaurantes. A 10 minutos a pie del centro y de la estación.",
      },
      {
        nome: "Cowley Road y East Oxford",
        perChi: "quien viaja con poco presupuesto",
        testo: "Pasado el Magdalen Bridge, con guesthouses y B&B más baratos y una calle llena de restaurantes de todo el mundo. Al centro se llega a pie o en autobús.",
        fascia: "60-120 €",
      },
    ],
    periodoMigliore:
      "de abril a octubre, con los días largos y la temporada del punting; en invierno los colleges abren con horarios más cortos y cierran antes de que oscurezca.",
    costi:
      "Muchos museos son gratis (Ashmolean, Pitt Rivers, Historia Natural, Weston Library); Christ Church 22,95-26,95 libras, Magdalen 10, torre de St Mary 7, tours de la Bodleian desde 12,50 (2026). Presupuesto diario por persona, orientativo: bajo 90-130 € (B&B en East Oxford, museos gratis, comida en el Covered Market); medio 180-260 € (hotel en el centro, dos colleges, cena en el pub); alto 400 € o más (hotel histórico en el centro y restaurantes).",
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Christ Church a la hora de apertura",
          "Radcliffe Square, la Radcliffe Camera y la torre de St Mary",
          "Comida en el Covered Market",
          "Bodleian Library y Divinity School, luego el Bridge of Sighs",
          "Ashmolean Museum y cena en Jericho",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Museo de Historia Natural y Pitt Rivers por la mañana, Sheldonian Theatre, Magdalen College y Addison's Walk, jardín botánico, punting en verano",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Los dos días de arriba",
          "Día 3: Blenheim Palace en Woodstock, o en coche hacia los Cotswolds",
        ],
      },
    ],
    gite: [
      {
        nome: "Blenheim Palace",
        testo: "El palacio barroco de los duques de Marlborough, patrimonio de la UNESCO y lugar de nacimiento de Winston Churchill, con un inmenso parque paisajístico. Requiere casi un día entero.",
        come: "En autobús desde Oxford hasta Woodstock o en coche.",
        distanza: "unos 17 km, 30 minutos",
      },
      {
        nome: "Los Cotswolds",
        testo: "Colinas y pueblos de piedra color miel como Burford, Bibury y Bourton-on-the-Water. Se puede probar en un día, pero merecen algunas noches.",
        come: "En coche, recogido en Oxford: el transporte público entre los pueblos es escaso.",
        distanza: "Burford a unos 35 km, 40 minutos",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Oxford?",
        risposta: "Un día basta para Christ Church, Radcliffe Square, la Bodleian y un museo. Con dos días se añaden Magdalen, los museos de Parks Road y un paseo junto al río.",
      },
      {
        domanda: "¿Se pueden visitar los colleges?",
        risposta: "Muchos sí, con billete y en horarios limitados: Christ Church y Magdalen son los más abiertos. Cierran a menudo por exámenes, ceremonias y eventos, así que conviene mirar la web de cada uno el día antes.",
      },
      {
        domanda: "¿Se puede entrar en la Radcliffe Camera?",
        risposta: "Solo con una visita guiada de la Bodleian que la incluya; desde fuera y desde Radcliffe Square se ve libremente.",
      },
      {
        domanda: "¿Dónde están los lugares de Harry Potter?",
        risposta: "La escalinata del Great Hall de Christ Church y la Divinity School de la Bodleian, usada como enfermería de Hogwarts. Las dos se visitan con billete.",
      },
      {
        domanda: "¿Qué museos son gratis?",
        risposta: "El Ashmolean, el Museo de Historia Natural, el Pitt Rivers y las exposiciones de la Weston Library son gratis; solo se pagan las exposiciones temporales.",
      },
      {
        domanda: "¿Cuándo se hace punting?",
        risposta: "De abril a mediados de octubre. Fuera de temporada los alquileres están cerrados o solo abren los días buenos.",
      },
    ],
    attenzioni: [
      "Los colleges cierran sin previo aviso por exámenes, graduaciones y eventos: mirad la web la misma mañana.",
      "Los billetes de Christ Church salen cada viernes y cuestan 2 libras menos comprados con antelación.",
      "En muchos colleges y en el Sheldonian solo se paga con tarjeta.",
      "En el centro no se aparca: quien tiene coche usa los Park & Ride.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'La Radcliffe Camera, la biblioteca circular con cúpula, en Radcliffe Square, Oxford',
    immagine: `${IMG}/giorno-05-oxford.webp`,
  },
  {
    slug: 'bath',
    paeseSlug: 'inghilterra',
    ordine: 4,
    nome: 'Bath',
    tipologia: ['città', 'storia', 'terme'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione:
      'Una ciudad de piedra dorada construida alrededor de los manantiales calientes, con las termas romanas, la abadía y los edificios georgianos del siglo XVIII. Es Patrimonio de la UNESCO.',
    percheAndarci: 'Por las termas romanas, los crescents georgianos y el final natural de un viaje por los Cotswolds, antes de volver a Londres en tren.',
    cosaVedere: ['Las Roman Baths', 'La Abadía de Bath', 'El Royal Crescent y el Circus', 'El Pulteney Bridge'],
    cosaFare: ['Visitar las termas romanas a primera hora de la mañana', 'Caminar del Circus al Royal Crescent', 'Un baño en las termas modernas de la ciudad'],
    comeArrivare:
      'En tren desde Londres Paddington hasta Bath Spa en una hora y media aproximadamente; horarios y precios en nationalrail.co.uk. Desde Heathrow se llega a Paddington con la Elizabeth line o el Heathrow Express y allí se cambia. El aeropuerto más cercano es Bristol, unido a Bath por el autobús A4 en una hora aproximadamente, según el tráfico. En coche desde los Cotswolds se baja pasando por Castle Combe, a media hora; en el centro se circula despacio y aparcar es caro, así que mejor devolver antes el coche.',
    costi:
      'Roman Baths desde 23,50 libras online (unos 27 €), Thermae Bath Spa desde 44 libras (unos 51 €), No. 1 Royal Crescent 16 libras (unos 18 €), precios de 2026. El centro se recorre a pie. Presupuesto orientativo al día por persona, con la doble compartida: bajo 90-120 €, medio 170-240 €, alto más de 350 €.',
    comeSpostarsi: 'A pie.',
    erroriDaEvitare: ['Llegar a las Roman Baths a mediodía sin entrada: conviene reservarla online en la web oficial'],
    miaEsperienza:
      "Fue la última etapa de la ruta después de los Cotswolds: llegué desde Castle Combe, vi la ciudad con las termas romanas y luego tomé el tren de vuelta a Londres.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Roman Baths",
        "testo": "Las termas romanas construidas alrededor del manantial caliente: el gran baño de agua verde, las salas subterráneas y los restos del templo de Sulis Minerva. El museo cuenta la ciudad romana a través de los objetos arrojados al manantial.",
        "come": "Entrada con fecha y hora en la web oficial; la audioguía está incluida. El agua no se toca: el baño se hace en Thermae.",
        "quando": "A la apertura o en la última hora, cuando hay menos grupos.",
        "tempo": "2 horas",
        "costo": "Desde 23,50 libras online entre semana en noviembre y diciembre de 2026 (26,50 el fin de semana), unos 27-31 €; en los meses punta hasta unas 33 libras. En taquilla 2 libras más.",
        "orari": "Todos los días; en otoño e invierno de 9 a 18, última entrada a las 17. El 24 de diciembre última entrada a las 16:15; cerrado el 25 y 26 de diciembre.",
        "lat": 51.3809,
        "lng": -2.3595,
        "url": "https://www.romanbaths.co.uk/",
        "consiglio": "Quien las visita en noviembre o diciembre puede volver en enero o febrero con una entrada de 1 libra."
      },
      {
        "nome": "Abadía de Bath",
        "testo": "La gran iglesia gótica junto a las termas, con las escaleras de Jacob talladas en la fachada, ángeles que suben al cielo, y la bóveda de abanico en el interior. La entrada incluye el pequeño museo subterráneo.",
        "come": "Entrada en la puerta; audioguía aparte.",
        "quando": "Por la mañana entre semana; el domingo solo abre a primera hora de la tarde.",
        "tempo": "45 minutos",
        "costo": "Adultos 9 libras, unos 10 €; audioguía 3,50 libras (2026)",
        "orari": "Lunes a viernes de 10 a 17:30, sábado de 10 a 18, domingo de 13 a 15:30. Última entrada media hora antes del cierre.",
        "lat": 51.38139,
        "lng": -2.35889,
        "url": "https://www.bathabbey.org/"
      },
      {
        "nome": "La torre de la abadía",
        "testo": "Una visita guiada a la torre: 212 escalones, la sala de las campanas, el paso detrás de la esfera del reloj y, arriba, la vista sobre los tejados y las termas.",
        "come": "Solo con la visita guiada, que se reserva en la web de la abadía. No es accesible para personas con movilidad reducida.",
        "quando": "Con el cielo despejado.",
        "tempo": "1 hora",
        "orari": "De lunes a sábado, en varios turnos a lo largo del día, según disponibilidad.",
        "lat": 51.38139,
        "lng": -2.35889,
        "url": "https://www.bathabbey.org/visiting/tours/"
      },
      {
        "nome": "Royal Crescent y No. 1 Royal Crescent",
        "testo": "Un semicírculo de treinta casas georgianas frente a un gran césped, el símbolo del Bath del siglo XVIII. En el número 1 hay un museo con los interiores amueblados como en la época, de las cocinas a los salones.",
        "come": "A pie desde el Circus, por Brock Street.",
        "quando": "El crescent con la luz de la tarde; el museo a cualquier hora.",
        "tempo": "1 hora y media con el museo",
        "costo": "El crescent es libre; No. 1 Royal Crescent 16 libras, unos 18 € (2026)",
        "orari": "No. 1: martes a domingo de 10 a 17:30, última entrada 16:30; cerrado los lunes salvo vacaciones escolares y festivos. Cerrado del 16 al 28 de noviembre y el 25-26 de diciembre de 2026.",
        "lat": 51.38694,
        "lng": -2.36833,
        "url": "https://no1royalcrescent.org.uk/"
      },
      {
        "nome": "The Circus",
        "testo": "Un círculo de casas georgianas dividido en tres partes, con árboles en el centro y fachadas decoradas con columnas y frisos. Está a pocos pasos del Royal Crescent.",
        "come": "A pie desde el centro, subiendo por Gay Street.",
        "tempo": "15 minutos",
        "costo": "Gratis",
        "lat": 51.386,
        "lng": -2.364
      },
      {
        "nome": "Pulteney Bridge",
        "testo": "Un puente del siglo XVIII con tiendas construidas encima, como el Ponte Vecchio, y debajo la presa escalonada del Avon. Es una de las imágenes más conocidas de la ciudad.",
        "come": "A pie; la mejor vista es desde la orilla o desde los Parade Gardens.",
        "quando": "Al atardecer.",
        "tempo": "20 minutos",
        "costo": "Gratis",
        "lat": 51.38306,
        "lng": -2.35778
      },
      {
        "nome": "Thermae Bath Spa",
        "testo": "Las termas modernas de la ciudad, con el agua caliente natural de los mismos manantiales. La piscina de la azotea mira a la abadía y a las colinas.",
        "come": "Se entra a partir de 16 años, con documento. La sesión básica dura 2 horas, con toalla y albornoz.",
        "quando": "Por la noche, con la piscina de la azotea iluminada; de lunes a viernes es más barato.",
        "tempo": "2 horas",
        "costo": "Sesión de 2 horas 44 libras de lunes a viernes, 49 el fin de semana, unos 51-56 € (2026)",
        "orari": "Todos los días de 9 a 21:30, piscinas hasta las 21. Cerrado el 25-26 de diciembre y el 1 de enero.",
        "lat": 51.38037,
        "lng": -2.36157,
        "url": "https://www.thermaebathspa.com/"
      },
      {
        "nome": "Jane Austen Centre",
        "testo": "Una exposición sobre la escritora y el Bath de sus novelas, en una casa georgiana de Gay Street. En el piso de arriba está el salón de té de estilo Regencia.",
        "come": "Entrada online.",
        "tempo": "1 hora",
        "costo": "18 libras online, unos 21 € (2026)",
        "orari": "Desde noviembre: domingo a viernes de 10 a 16:30, sábado de 10 a 17:30. Del 1 de julio al 21 de septiembre todos los días de 9:45 a 18. Última entrada una hora antes.",
        "lat": 51.38404,
        "lng": -2.36316,
        "url": "https://janeausten.co.uk/pages/jane-austen-centre-in-bath"
      },
      {
        "nome": "Holburne Museum",
        "testo": "Un museo de arte en una mansión georgiana al final de Great Pulteney Street, a la entrada de los Sydney Gardens. Retratos, porcelanas y platería, con exposiciones temporales.",
        "come": "A pie desde el Pulteney Bridge, por Great Pulteney Street.",
        "tempo": "1-2 horas",
        "costo": "Entrada 16,50 libras, unos 19 € (2026); las colecciones son gratuitas los miércoles desde las 15",
        "orari": "Todos los días de 10 a 17, domingos y festivos de 11 a 17; última entrada 16:30. Cerrado del 24 al 26 de diciembre y el 1 de enero.",
        "lat": 51.38566,
        "lng": -2.3511,
        "url": "https://www.holburne.org/"
      },
      {
        "nome": "Prior Park Landscape Garden",
        "testo": "Un jardín paisajista del siglo XVIII en la colina al sur del centro, con el puente palladiano sobre el lago y la vista de la ciudad. Es del National Trust.",
        "come": "Cuesta arriba desde el centro, a pie o en autobús.",
        "quando": "Con buen tiempo; en invierno el césped está embarrado.",
        "tempo": "1-2 horas",
        "lat": 51.36721,
        "lng": -2.34374,
        "url": "https://www.nationaltrust.org.uk/"
      },
      {
        "nome": "Assembly Rooms",
        "testo": "Los salones de baile y de té del siglo XVIII donde la sociedad georgiana se reunía por la noche; aparecen en las novelas de Jane Austen. Son del National Trust.",
        "come": "A pie, detrás del Circus.",
        "tempo": "45 minutos",
        "lat": 51.38611,
        "lng": -2.36222
      },
      {
        "nome": "Victoria Art Gallery",
        "testo": "La galería de arte municipal, en un edificio victoriano junto al Pulteney Bridge, con pintura británica del siglo XVII a hoy.",
        "come": "A pie, a la entrada del puente.",
        "tempo": "1 hora",
        "lat": 51.38265,
        "lng": -2.3586,
        "url": "https://www.victoriagal.org.uk/"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Roman Baths a la apertura",
          "La abadía, y si se quiere la torre",
          "Pulteney Bridge y comida",
          "The Circus y el Royal Crescent, con el museo del número 1",
          "Thermae Bath Spa por la noche"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba",
          "Día 2: Great Pulteney Street y el Holburne Museum, Jane Austen Centre, Assembly Rooms, Prior Park por la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2: como arriba",
          "Día 3: excursión a Castle Combe y Lacock, o a Stonehenge, o en tren a Bristol"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro, alrededor de la abadía",
        "perChi": "quien quiere todo a pie",
        "testo": "Entre las termas, Milsom Street y el Pulteney Bridge. Cómodo y animado, pero caro y con poco aparcamiento.",
        "fascia": "150-280 €"
      },
      {
        "nome": "Royal Crescent y Lansdown",
        "perChi": "quien busca las casas georgianas",
        "testo": "La parte alta de la ciudad georgiana, tranquila por la noche; desde el centro se sube a pie en diez-quince minutos.",
        "fascia": "170-350 €"
      },
      {
        "nome": "Cerca de Bath Spa",
        "perChi": "quien llega y se va en tren",
        "testo": "Alrededor de la estación y hacia Widcombe: hoteles de cadena y B&B, a pocos minutos de las termas.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Bathwick y Great Pulteney Street",
        "perChi": "quien quiere calma sin renunciar a ir a pie",
        "testo": "Al otro lado del puente, con la avenida georgiana, el Holburne y los Sydney Gardens.",
        "fascia": "130-250 €"
      }
    ],
    gite: [
      {
        "nome": "Castle Combe y Lacock",
        "distanza": "media hora en coche aproximadamente",
        "come": "En coche, hacia el noreste; hay pocos autobuses.",
        "testo": "Dos pueblos de piedra fuera del tiempo: Castle Combe con el puente sobre el arroyo y la cruz del mercado, Lacock con la abadía del National Trust."
      },
      {
        "nome": "Stonehenge",
        "distanza": "una hora en coche aproximadamente",
        "come": "En coche, o con una excursión en autocar desde Bath.",
        "testo": "El círculo de piedras prehistórico, patrimonio de la UNESCO, en la llanura de Salisbury. Se visita con entrada a hora fija."
      },
      {
        "nome": "Bristol",
        "distanza": "unos 15 minutos en tren",
        "come": "En tren desde Bath Spa hasta Bristol Temple Meads.",
        "testo": "El puerto sobre el río Avon, el puente colgante de Clifton y los murales de Stokes Croft. Una ciudad joven, muy distinta del Bath georgiano."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Bath?",
        "risposta": "Un día basta para las termas romanas, la abadía y los crescents. Con dos se añaden Thermae, los museos y Prior Park con calma."
      },
      {
        "domanda": "¿Hay que reservar las Roman Baths?",
        "risposta": "Conviene: online la entrada cuesta 2 libras menos y se elige la hora. A la apertura o en la última hora hay menos gente."
      },
      {
        "domanda": "¿Se puede bañar uno en las termas romanas?",
        "risposta": "No, el agua de las Roman Baths no se toca. El baño en agua termal se hace en Thermae Bath Spa, a partir de 16 años."
      },
      {
        "domanda": "¿Se puede visitar Bath en un día desde Londres?",
        "risposta": "Sí, el tren desde Paddington tarda una hora y media aproximadamente. Con una noche, en cambio, se ven las termas a la apertura y la ciudad de noche, sin multitudes."
      },
      {
        "domanda": "¿Conviene llegar a Bath en coche?",
        "risposta": "Solo si se viene de los Cotswolds. En el centro se circula despacio y aparcar es caro: mejor devolver el coche e ir a pie."
      },
      {
        "domanda": "¿Cuánto cuesta visitar Bath?",
        "risposta": "Las Roman Baths empiezan en 23,50 libras online, Thermae en 44, la abadía 9 (2026). Los crescents, el Circus y el Pulteney Bridge son gratuitos."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'La terraza de las termas romanas de Bath con las estatuas de los emperadores y, detrás, la torre de la abadía',
    immagine: `${IMG}/giorno-08-bath.webp`,
  },
  {
    slug: 'manchester',
    paeseSlug: 'inghilterra',
    ordine: 5,
    nome: 'Manchester',
    tipologia: ['città', 'calcio', 'musei', 'vita notturna'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Mi hermano vivió cuatro años en el norte de Inglaterra, así que fui muchísimas veces a visitar esta zona. A mí Manchester me gusta porque todavía se respira un aire de Inglaterra más auténtica que en Londres, que ya es una ciudad cosmopolita a todos los efectos.",
    introduzione:
      'La ciudad de la revolución industrial, con las hilaturas y los almacenes de ladrillo rojo convertidos en barrios llenos de vida, el Northern Quarter y Ancoats. Tiene dos equipos de la Premier League, el Manchester United en Old Trafford y el Manchester City en el Etihad, y muchos museos gratuitos.',
    percheAndarci:
      'Por el fútbol, por los barrios de ladrillo rojo y por una Inglaterra menos turística que Londres. Es también la puerta del norte: Liverpool está a una hora en tren, el Peak District a tres cuartos de hora.',
    cosaVedere: [
      'El Northern Quarter y Ancoats',
      'La John Rylands Library',
      'El National Football Museum',
      'Castlefield y el Science and Industry Museum',
      'Old Trafford y el Etihad Stadium',
      'Salford Quays',
    ],
    cosaFare: [
      'Un partido de la Premier League, o la visita a un estadio',
      'Una noche entre los bares del Northern Quarter',
      'Un paseo por los canales de Castlefield',
    ],
    comeArrivare:
      'El aeropuerto de Manchester tiene vuelos directos desde Italia. El tren a Manchester Piccadilly, con Northern y TransPennine Express, sale cada 10 minutos aproximadamente y tarda unos veinte minutos; de noche queda uno por hora. El tranvía Metrolink va al centro y a Victoria cada 12 minutos, con el billete sencillo a 4,60 libras, pero es más lento. Los taxis negros tienen su parada delante de cada terminal. Para entrar en el Reino Unido hacen falta el pasaporte y la ETA, 20 libras (2026).',
    comeSpostarsi:
      'El centro se recorre a pie. Para los estadios y Salford Quays está el tranvía Metrolink, que se paga con la tarjeta contactless: el tope diario en todas las zonas es de 7,10 libras, 4,90 fuera de la hora punta de la mañana. Los autobuses de la red Bee Network cuestan como máximo 2 libras por trayecto, con las tarifas congeladas durante todo 2026.',
    periodoMigliore: 'de mayo a septiembre por el tiempo; de agosto a mayo por la Premier League',
    costi:
      'Muchos museos son gratuitos; se pagan el National Football Museum y las visitas a los estadios. Presupuesto orientativo al día por persona, con la doble compartida: bajo 90-120 €, medio 170-230 €, alto más de 330 €.',
    erroriDaEvitare: [
      'Comprar entradas para el partido en webs de reventa no autorizadas: en el Reino Unido es delito, y no se entra en el estadio',
      'Reservar la visita al estadio el día de un partido en casa: las visitas normales no se hacen',
      'Pagar el tranvía con tarjetas distintas: el tope diario solo vale en una tarjeta',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Northern Quarter",
        "testo": "El barrio de los antiguos almacenes textiles, entre Piccadilly y Ancoats, con murales, tiendas de discos y de ropa vintage y bares. Las fachadas de ladrillo y las escaleras de incendios de hierro fundido lo han convertido en un plató para películas ambientadas en Nueva York.",
        "come": "A pie desde Piccadilly en cinco minutos. Las calles principales son Oldham Street, Thomas Street y Tib Street.",
        "quando": "Por la tarde para las tiendas, por la noche para los bares.",
        "tempo": "2-3 horas",
        "costo": "gratuito",
        "lat": 53.4835,
        "lng": -2.2351
      },
      {
        "nome": "Ancoats",
        "testo": "El primer barrio industrial del mundo, con las grandes hilaturas de algodón de ladrillo rojo junto al Rochdale Canal. Las fábricas se han convertido en viviendas, restaurantes y panaderías, y el barrio es uno de los más animados de la ciudad.",
        "come": "A pie desde el Northern Quarter, cruzando Great Ancoats Street.",
        "quando": "Por la tarde y por la noche, para cenar.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "lat": 53.485,
        "lng": -2.2276
      },
      {
        "nome": "John Rylands Library",
        "testo": "Una biblioteca neogótica de finales del siglo XIX en Deansgate, con la gran sala de lectura de bóvedas de piedra roja. Guarda manuscritos y libros antiguos, entre ellos uno de los fragmentos más antiguos del Nuevo Testamento.",
        "come": "Entrada libre en Deansgate. Se visita por libre, en silencio en la sala de lectura.",
        "quando": "Por la mañana, a la apertura.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "orari": "De miércoles a sábado de 10 a 17, última entrada a las 16:40; cerrada de domingo a martes.",
        "lat": 53.4804,
        "lng": -2.2491,
        "url": "https://www.library.manchester.ac.uk/rylands/visit/"
      },
      {
        "nome": "National Football Museum",
        "testo": "El museo nacional del fútbol inglés, en el edificio de cristal del Urbis, en el barrio de la catedral. Cuenta la historia del juego, de los equipos y de la afición, con camisetas, trofeos y juegos interactivos.",
        "come": "A pie desde Victoria o desde el Northern Quarter. Entrada online o en taquilla, válida 12 meses.",
        "quando": "Antes de ir al estadio.",
        "tempo": "2 horas",
        "costo": "de pago",
        "orari": "Todos los días de 10 a 17, última entrada a las 16.",
        "lat": 53.4858,
        "lng": -2.2421,
        "url": "https://www.nationalfootballmuseum.com/"
      },
      {
        "nome": "Science and Industry Museum",
        "testo": "El museo de la ciencia y la industria en la antigua estación de Liverpool Road, la primera estación de pasajeros del mundo. Se ven las máquinas textiles, los motores de vapor de la Power Hall y la historia del Manchester industrial.",
        "come": "A pie desde Deansgate o desde el tranvía en Deansgate-Castlefield. Entrada libre.",
        "quando": "Un día de lluvia.",
        "tempo": "2 horas",
        "costo": "gratuito",
        "orari": "Todos los días de 10 a 17; cerrado del 24 al 26 de diciembre y el 1 de enero. Algunas partes cerradas por obras de restauración.",
        "lat": 53.4773,
        "lng": -2.2547,
        "url": "https://www.scienceandindustrymuseum.org.uk/visit"
      },
      {
        "nome": "Castlefield",
        "testo": "La zona de los canales, donde el Bridgewater Canal llega a la ciudad, con los viaductos de hierro del ferrocarril, los antiguos almacenes y los restos reconstruidos del fuerte romano de Mamucium, del que nació Manchester.",
        "come": "Tranvía hasta Deansgate-Castlefield, luego a pie por los caminos de sirga.",
        "quando": "A última hora de la tarde, con una cerveza en los pubs junto al agua.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 53.4758,
        "lng": -2.2557
      },
      {
        "nome": "Old Trafford",
        "testo": "El estadio del Manchester United, el «Teatro de los sueños», con el museo del club y la estatua de la Holy Trinity, Best, Law y Charlton, delante de la entrada. La visita lleva a los vestuarios, al túnel y a pie de campo.",
        "come": "Tranvía hasta Old Trafford o Wharfside, luego pocos minutos a pie. Visitas y entradas para los partidos solo en los canales oficiales del club.",
        "quando": "Los días sin partido en casa, para la visita.",
        "tempo": "2 horas con el museo",
        "costo": "visita y museo desde 28 £ online (unos 33 €, 2026)",
        "orari": "Visitas de domingo a jueves de 9:30 a 16, viernes y sábado de 9:30 a 17; cerrado los días de partido en casa.",
        "lat": 53.4631,
        "lng": -2.2914,
        "url": "https://www.manutd.com/en/club/visit-old-trafford/museum-stadium-tours"
      },
      {
        "nome": "Etihad Stadium",
        "testo": "El estadio del Manchester City, en el este de la ciudad, dentro del complejo deportivo del Etihad Campus. La visita dura unos 75 minutos y sale de la South Stand.",
        "come": "Tranvía hasta Etihad Campus. Entradas para las visitas y los partidos en la web del club.",
        "quando": "Los días sin partido.",
        "tempo": "1 hora y media",
        "costo": "visita de pago",
        "lat": 53.4831,
        "lng": -2.2004,
        "url": "https://www.mancity.com/"
      },
      {
        "nome": "People's History Museum",
        "testo": "El museo nacional de la democracia, a orillas del río Irwell: la historia de los derechos de los trabajadores, del voto de las mujeres y de las luchas políticas en Gran Bretaña, con la mayor colección de estandartes sindicales del mundo.",
        "come": "A pie desde Spinningfields. Entrada libre, con un donativo sugerido.",
        "quando": "Cualquier día menos el martes.",
        "tempo": "1-2 horas",
        "costo": "gratuito (donativo sugerido 10 £)",
        "orari": "De 10 a 17 todos los días menos el martes.",
        "lat": 53.4814,
        "lng": -2.2534,
        "url": "https://phm.org.uk/visit/"
      },
      {
        "nome": "Manchester Museum",
        "testo": "El museo de la universidad, con las colecciones de historia natural, el antiguo Egipto y un esqueleto de T. rex. Está en el barrio universitario, en Oxford Road.",
        "come": "Autobús desde Piccadilly por Oxford Road, o 20 minutos a pie desde el centro.",
        "quando": "El miércoles abre hasta la noche.",
        "tempo": "2 horas",
        "costo": "gratuito",
        "orari": "Martes, jueves, viernes y domingo de 10 a 17, miércoles de 10 a 21, sábado de 8 a 17; cerrado el lunes. Vivarium cerrado hasta mayo de 2027.",
        "lat": 53.466,
        "lng": -2.2337,
        "url": "https://www.museum.manchester.ac.uk/visit/"
      },
      {
        "nome": "Catedral de Manchester",
        "testo": "La catedral gótica del siglo XV, en el barrio medieval cerca de Victoria, con la sillería del coro tallada en madera. Al lado está la Chetham's Library, la biblioteca pública más antigua del mundo anglófono, que solo se visita con visitas guiadas reservadas.",
        "come": "A pie desde Victoria o desde el National Football Museum.",
        "quando": "Entre semana, fuera de los oficios.",
        "tempo": "45 minutos",
        "costo": "gratuito (donativo sugerido 5 £)",
        "orari": "De lunes a sábado de 9:30 a 16, domingo de 12 a 16.",
        "lat": 53.4852,
        "lng": -2.2444,
        "url": "https://manchestercathedral.org/plan-your-visit"
      },
      {
        "nome": "Central Library y St Peter's Square",
        "testo": "La biblioteca central redonda de los años treinta, con la sala de lectura bajo la cúpula. Al lado está el ayuntamiento victoriano, cerrado por restauración hasta la primavera de 2027.",
        "come": "Tranvía hasta St Peter's Square.",
        "quando": "Una parada entre Deansgate y Piccadilly.",
        "tempo": "30 minutos",
        "costo": "gratuito",
        "orari": "De lunes a jueves de 9 a 20, viernes y sábado de 9 a 17; cerrada el domingo.",
        "lat": 53.4781,
        "lng": -2.2447
      },
      {
        "nome": "Salford Quays",
        "testo": "Los antiguos muelles del canal navegable de Manchester, hoy con The Lowry, el centro de arte con las salas dedicadas al pintor L. S. Lowry, el IWM North, el museo de la guerra en el edificio de Daniel Libeskind, y los estudios de MediaCityUK.",
        "come": "Tranvía hasta MediaCityUK o Harbour City. Está a un paso de Old Trafford: se combina con la visita al estadio.",
        "quando": "El mismo día que Old Trafford.",
        "tempo": "media jornada",
        "costo": "salas de The Lowry e IWM North gratuitas",
        "orari": "Salas de The Lowry de martes a viernes de 11 a 17, sábado y domingo de 10 a 17, cerradas el lunes; IWM North de 10 a 17.",
        "lat": 53.4708,
        "lng": -2.2961,
        "url": "https://thelowry.com/"
      },
      {
        "nome": "Aviva Studios",
        "testo": "El nuevo centro cultural de Factory International, junto al río cerca de Castlefield, con conciertos, exposiciones y espectáculos. Al edificio se entra libremente; los eventos son de pago.",
        "come": "A pie desde Deansgate o desde Castlefield.",
        "quando": "Por la noche, si hay espectáculo.",
        "tempo": "1 hora",
        "costo": "entrada al edificio gratuita",
        "lat": 53.4782,
        "lng": -2.2577,
        "url": "https://factoryinternational.org/aviva-studios"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Por la mañana la John Rylands Library y la catedral",
          "El National Football Museum",
          "Por la tarde la visita a Old Trafford o al Etihad",
          "La noche en el Northern Quarter"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Primer día: Northern Quarter, Ancoats, John Rylands Library y catedral",
          "Segundo día: Castlefield y el Science and Industry Museum, luego el estadio y Salford Quays",
          "Si hay partido en casa, se llega al estadio con mucha antelación"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Los dos días en la ciudad como arriba",
          "El tercero en tren al Peak District: Edale, Mam Tor y Castleton",
          "O en tren a Liverpool, a una hora de viaje"
        ]
      }
    ],
    zone: [
      {
        "nome": "Northern Quarter",
        "perChi": "quien quiere bares y vida nocturna",
        "testo": "A dos pasos de Piccadilly, con todos los locales a la puerta de casa. El viernes y el sábado es ruidoso."
      },
      {
        "nome": "Piccadilly",
        "perChi": "quien llega y se va en tren",
        "testo": "Cerca de la estación de los trenes al aeropuerto, a Liverpool, al Peak District y al Lake District."
      },
      {
        "nome": "Deansgate y Spinningfields",
        "perChi": "quien quiere el centro más elegante",
        "testo": "Entre la John Rylands Library, Castlefield y los restaurantes de Spinningfields, con el tranvía a Old Trafford cerca."
      },
      {
        "nome": "Salford Quays",
        "perChi": "quien va a Old Trafford",
        "testo": "Junto al agua, moderna y tranquila, cerca del estadio del Manchester United. Por la noche queda lejos de la vida del centro."
      }
    ],
    gite: [
      {
        "nome": "Liverpool",
        "distanza": "1 hora aproximadamente en tren",
        "come": "Trenes Northern cada media hora aproximadamente desde Piccadilly, y TransPennine Express, hasta Liverpool Lime Street.",
        "testo": "Los muelles sobre el Mersey, los Beatles, las dos catedrales y Anfield. Merece al menos una noche."
      },
      {
        "nome": "Peak District",
        "distanza": "unos 45 minutos en tren",
        "come": "Tren Northern de la Hope Valley desde Piccadilly hasta Edale, uno por hora.",
        "testo": "Las colinas más cercanas a la ciudad: la caminata de Edale a Castleton pasando por Mam Tor, con las cuevas al final."
      },
      {
        "nome": "Lake District",
        "distanza": "algo más de 2 horas en tren",
        "come": "Trenes Northern directos desde Piccadilly y desde el aeropuerto hasta Windermere.",
        "testo": "Los lagos y las montañas del noroeste, con los barcos en Windermere y los pueblos de Ambleside y Grasmere. Mejor con una o dos noches."
      }
    ],
    sapori: [
      { nome: 'Pie and peas', testo: 'El pastel de carne con guisantes, la comida de estadio y de pub del norte.' },
      { nome: 'Manchester tart', testo: 'Tarta con mermelada, crema y coco, el postre de los comedores escolares de antes.' },
      { nome: 'Curry Mile', testo: 'Wilmslow Road, en Rusholme, con los restaurantes del sur de Asia uno detrás de otro.' },
    ],
    attenzioni: [
      'Los días de partido el tranvía a los estadios va llenísimo: conviene salir pronto.',
      'Se cruza mirando primero a la derecha: el tráfico llega del lado contrario que en Italia.',
      'La lluvia es frecuente en todas las estaciones: chaqueta impermeable siempre.',
    ],
    faq: [
      {
        "domanda": "¿Cómo se compran las entradas para un partido en Manchester?",
        "risposta": "En los canales oficiales de los clubes. En el United hace falta una membership, desde 37,50 libras, y en el City la Matchday Membership desde 38 libras (2026-27); para los partidos más solicitados hay sorteo. Como alternativa están la ticket exchange oficial y la hospitality."
      },
      {
        "domanda": "¿Se puede visitar Old Trafford el día del partido?",
        "risposta": "No, los días de partido en casa no se hace la visita normal. Los demás días empieza a las 9:30 y cuesta desde 28 libras online."
      },
      {
        "domanda": "¿Cómo se va del aeropuerto de Manchester al centro?",
        "risposta": "En tren hasta Piccadilly, en unos veinte minutos, con salidas cada 10 minutos aproximadamente. El tranvía Metrolink cuesta 4,60 libras pero es más lento."
      },
      {
        "domanda": "¿Cuántos días hacen falta en Manchester?",
        "risposta": "Dos días para los barrios, los museos y un estadio. Con tres se añade una excursión al Peak District o a Liverpool."
      },
      {
        "domanda": "¿Manchester o Liverpool?",
        "risposta": "Están a una hora en tren: conviene ver las dos. Manchester tiene más vida nocturna y museos; Liverpool, el río, los Beatles y los muelles."
      },
      {
        "domanda": "¿Qué museos son gratuitos en Manchester?",
        "risposta": "La John Rylands Library, el Science and Industry Museum, el Manchester Museum, el People's History Museum, las salas de The Lowry y el IWM North. El National Football Museum es de pago."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'Murales de colores y gente sentada a la puerta de un local en el Northern Quarter de Manchester',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-01-northern-quarter.jpg',
  },
  {
    slug: 'liverpool',
    paeseSlug: 'inghilterra',
    ordine: 6,
    nome: 'Liverpool',
    tipologia: ['città', 'calcio', 'musica', 'musei'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Fui muchas veces, cuando mi hermano vivía en el norte de Inglaterra. En Liverpool hay todavía más aire «obrero» que en Manchester, en el buen sentido, con los edificios de ladrillo rojo.",
    introduzione:
      'La ciudad portuaria sobre el río Mersey, con los muelles del siglo XIX, las «Three Graces» del Pier Head y dos catedrales una frente a otra. Es la ciudad de los Beatles y de dos equipos de la Premier League, el Liverpool en Anfield y el Everton en el nuevo estadio junto al río.',
    percheAndarci:
      'Por un frente marítimo que es patrimonio de la historia marítima inglesa, por los Beatles, por el fútbol y por una ciudad orgullosa, todavía obrera en el alma. Muchos museos son gratuitos.',
    cosaVedere: [
      'El Royal Albert Dock',
      'El Pier Head y el Royal Liver Building',
      'Las dos catedrales de Hope Street',
      'Mathew Street y el Cavern Club',
      'Anfield y el Hill Dickinson Stadium',
      'Another Place en Crosby',
    ],
    cosaFare: [
      'El crucero por el Mersey desde el Pier Head',
      'Un concierto en el Cavern Club',
      'La visita a Anfield, o un partido',
      'Una noche entre Bold Street y el Baltic Triangle',
    ],
    comeArrivare:
      'Desde el aeropuerto John Lennon el autobús 500 de Arriva sale hasta cada 15 minutos, de 4 a medianoche, y llega a la estación de autobuses de Liverpool ONE y a Great Charlotte Street, cerca de Lime Street; cuesta como máximo 2 libras. Los autobuses 80A y 86A pasan por la estación de Liverpool South Parkway. Desde Manchester el tren tarda una hora aproximadamente; desde Londres Euston hay trenes directos de Avanti West Coast.',
    comeSpostarsi:
      'El centro, los muelles y las catedrales se recorren a pie. Para Anfield y para Crosby hacen falta el autobús o los trenes Merseyrail. Cada trayecto en autobús cuesta como máximo 2 libras; el billete diario Solo para todos los autobuses del Merseyside cuesta 5,90 libras (2026).',
    periodoMigliore: 'de mayo a septiembre por el tiempo; de agosto a mayo por la Premier League',
    costi:
      'Los museos nacionales son gratuitos; se pagan el Beatles Story, el Cavern Club y las visitas a los estadios. Presupuesto orientativo al día por persona, con la doble compartida: bajo 85-110 €, medio 160-220 €, alto más de 300 €. Los fines de semana de partido los hoteles cuestan más.',
    erroriDaEvitare: [
      'Buscar el tren en el aeropuerto: no hay estación, hace falta el autobús',
      'Comprar entradas para el partido a revendedores no autorizados',
      'Ir al Merseyside Maritime Museum: está cerrado por obras',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Royal Albert Dock",
        "testo": "La gran dársena del siglo XIX, rodeada de almacenes de ladrillo rojo y columnas de hierro fundido, el mayor conjunto de edificios protegidos del Reino Unido. Hoy hay museos, restaurantes y bares junto al agua.",
        "come": "A pie desde el centro y desde Liverpool ONE en diez minutos.",
        "quando": "Por la noche, con las luces reflejadas en la dársena.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "lat": 53.4003,
        "lng": -2.9927,
        "url": "https://albertdock.com"
      },
      {
        "nome": "The Beatles Story",
        "testo": "El museo de los Beatles en el Albert Dock, que cuenta su historia desde los comienzos en Hamburgo y en el Cavern hasta la separación, con audioguía y reconstrucciones de los lugares.",
        "come": "Entrada online o en taquilla, en el Albert Dock.",
        "quando": "Por la mañana, antes que los grupos.",
        "tempo": "2 horas",
        "costo": "20 £ (unos 23 €, 2026)",
        "orari": "De domingo a viernes de 9 a 17:30, el sábado de 9 a 18:30.",
        "lat": 53.3993,
        "lng": -2.992,
        "url": "https://www.beatlesstory.com/plan-your-visit/"
      },
      {
        "nome": "Museum of Liverpool",
        "testo": "El museo de la ciudad, en el edificio blanco del Pier Head: la historia del puerto, de la emigración, de la música y del fútbol, con las voces de sus habitantes.",
        "come": "A pie desde el Albert Dock. Entrada libre.",
        "quando": "Cualquier día menos el lunes.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "orari": "En invierno de martes a domingo de 10 a 16; cerrado el lunes, salvo en vacaciones escolares.",
        "lat": 53.403,
        "lng": -2.9956,
        "url": "https://www.liverpoolmuseums.org.uk/museum-of-liverpool"
      },
      {
        "nome": "Pier Head y Royal Liver Building",
        "testo": "El paseo junto al río con las «Three Graces», los tres edificios del puerto de principios del siglo XX: el Royal Liver Building, con los dos pájaros de cobre en las torres, el Cunard Building y el Port of Liverpool Building. Aquí están las estatuas de los Beatles.",
        "come": "A pie desde el centro, por el frente marítimo.",
        "quando": "Al atardecer, o desde el ferry en el río.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 53.4058,
        "lng": -2.9958
      },
      {
        "nome": "Crucero por el Mersey",
        "testo": "El viejo ferry del Mersey, hoy Liverpool Sightseeing River Cruise: una hora por el río con comentarios, y la vista del frente marítimo desde el agua.",
        "come": "Desde la terminal del Pier Head, entrada online o en taquilla.",
        "quando": "Con el cielo despejado.",
        "tempo": "1 hora",
        "costo": "14 £ (unos 16 €, 2026)",
        "orari": "Salidas cada hora desde el Pier Head, entre semana de 10 a 16; los fines de semana de invierno la última salida es a las 15.",
        "lat": 53.405,
        "lng": -2.995,
        "url": "https://www.merseyferries.co.uk/"
      },
      {
        "nome": "Tate Liverpool",
        "testo": "La sede del norte de la Tate, con arte moderno y contemporáneo. Hasta su vuelta al Albert Dock, prevista para 2027, está en el edificio RIBA North, en Mann Island.",
        "come": "A pie desde el Pier Head. Entrada libre.",
        "quando": "Junto con el Museum of Liverpool.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "orari": "Todos los días de 10 a 17:50; cerrada del 24 al 26 de diciembre.",
        "lat": 53.4035,
        "lng": -2.9937,
        "url": "https://www.tate.org.uk/visit/tate-liverpool"
      },
      {
        "nome": "Catedral anglicana",
        "testo": "La catedral más grande del Reino Unido, de arenisca roja, construida en el siglo XX en estilo neogótico sobre una colina encima del centro. Desde la torre se ve toda la ciudad hasta el mar.",
        "come": "A pie desde Hope Street. A la torre se sube con dos ascensores y 108 escalones.",
        "quando": "Por la mañana; el domingo las zonas de visita abren a mediodía.",
        "tempo": "1 hora",
        "costo": "entrada gratuita; torre de pago",
        "orari": "Todos los días de 10 a 18, el domingo visitas desde las 12; torre hasta las 16:30.",
        "lat": 53.3975,
        "lng": -2.9731,
        "url": "https://www.liverpoolcathedral.org.uk/"
      },
      {
        "nome": "Catedral metropolitana",
        "testo": "La catedral católica, redonda, de los años sesenta, con la torre en forma de corona y la linterna de vidrieras de colores que ilumina el altar en el centro. Hope Street la une a la catedral anglicana.",
        "come": "A pie desde la catedral anglicana, por Hope Street.",
        "quando": "Con sol, por los colores de la linterna.",
        "tempo": "45 minutos",
        "costo": "gratuito",
        "orari": "Todos los días de 7:30 a 18; cripta de lunes a sábado de 10 a 16.",
        "lat": 53.4047,
        "lng": -2.9688,
        "url": "https://www.liverpoolmetrocathedral.org.uk/visit-us/"
      },
      {
        "nome": "Cavern Club y Mathew Street",
        "testo": "El local donde tocaban los Beatles al principio, reconstruido junto al original, con música en directo todos los días. Mathew Street está llena de pubs y de recuerdos del grupo.",
        "come": "A pie desde el centro. Se paga en la entrada, solo con tarjeta.",
        "quando": "Por la tarde para verlo con calma, por la noche para los conciertos.",
        "tempo": "1-2 horas",
        "costo": "6 £, pase de día 8,50 £ (2026)",
        "orari": "De domingo a miércoles de 11 a 24, jueves hasta la 1, viernes y sábado hasta las 2.",
        "lat": 53.4063,
        "lng": -2.9879,
        "url": "https://www.cavernclub.com/"
      },
      {
        "nome": "St George's Hall",
        "testo": "El gran palacio neoclásico frente a la estación de Lime Street, con la sala de suelo de baldosas Minton y las antiguas salas del tribunal. Alrededor están la Walker Art Gallery y el World Museum, gratuitos.",
        "come": "Frente a la salida de Lime Street. Las visitas guiadas solo se hacen en algunas fechas.",
        "quando": "Nada más llegar en tren.",
        "tempo": "1 hora",
        "costo": "centro de visitantes gratuito",
        "orari": "Centro de visitantes de lunes a sábado de 9:30 a 17.",
        "lat": 53.4086,
        "lng": -2.9801,
        "url": "https://liverpoolcityhalls.co.uk/plan-your-visit/"
      },
      {
        "nome": "Walker Art Gallery y World Museum",
        "testo": "Dos museos nacionales uno al lado del otro en William Brown Street: la pinacoteca con los prerrafaelitas y el arte inglés, y el museo de historia natural, arqueología y antiguo Egipto, con el planetario.",
        "come": "A pie desde Lime Street. Entrada libre.",
        "quando": "Un día de lluvia.",
        "tempo": "1-2 horas cada uno",
        "costo": "gratuitos",
        "orari": "En invierno de martes a domingo de 10 a 16; cerrados el lunes, salvo en vacaciones escolares.",
        "lat": 53.41,
        "lng": -2.9797,
        "url": "https://www.liverpoolmuseums.org.uk/visit"
      },
      {
        "nome": "Anfield",
        "testo": "El estadio del Liverpool, con la Kop, la grada más famosa de Inglaterra, el museo del club y la verja de los Shankly Gates. La visita pasa por los vestuarios, por el túnel con el cartel «This is Anfield» y por el banquillo.",
        "come": "Autobús 26 desde Liverpool ONE o 17 desde Queen Square; los días de partido también el 917 y las lanzaderas. Los días de partido no se puede aparcar.",
        "quando": "Los días sin partido, para la visita normal.",
        "tempo": "2 horas con el museo",
        "costo": "visita 26 £ (unos 30 €), solo museo 14 £ (2026)",
        "orari": "Visitas todos los días de 10 a 15; museo de 9 a 17.",
        "lat": 53.4308,
        "lng": -2.9608,
        "url": "https://www.liverpoolfc.com/"
      },
      {
        "nome": "Hill Dickinson Stadium",
        "testo": "El nuevo estadio del Everton, junto al Mersey en Bramley-Moore Dock, abierto para la temporada 2025-26. La visita pasa por el vestuario, el túnel, el borde del campo y la sala de prensa. El viejo Goodison Park, donde ahora juega el Everton femenino, vuelve a tener sus visitas.",
        "come": "A pie junto al río desde el Pier Head, hacia el norte. Visitas solo con reserva online.",
        "quando": "Los días sin partido.",
        "tempo": "1 hora y media",
        "costo": "visita de pago",
        "lat": 53.425,
        "lng": -3.0027,
        "url": "https://www.hilldickinsonstadium.com/tours"
      },
      {
        "nome": "Another Place, Crosby",
        "testo": "Cien estatuas de hierro de Antony Gormley repartidas a lo largo de tres kilómetros de playa, mirando al mar. Con la marea alta desaparecen bajo el agua.",
        "come": "Tren Merseyrail hasta Blundellsands & Crosby, Hall Road o Waterloo, luego a pie hasta la playa.",
        "quando": "Al atardecer, con la marea baja.",
        "tempo": "media jornada",
        "costo": "gratuito",
        "lat": 53.47,
        "lng": -3.046,
        "url": "https://www.sefton.gov.uk/around-sefton/another-place-by-antony-gormley/plan-your-visit",
        "consiglio": "Hay que quedarse a menos de 50 metros del paseo marítimo y consultar las mareas: la arena y el barro pueden ser peligrosos."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Por la mañana el Royal Albert Dock y el Beatles Story",
          "El Pier Head, el Museum of Liverpool y el crucero por el Mersey",
          "Por la tarde Mathew Street y el Cavern Club",
          "La noche en Bold Street"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Primer día: St George's Hall, el Albert Dock, el Pier Head y el crucero",
          "Segundo día: las dos catedrales de Hope Street, el Cavern Club, luego Anfield o el Hill Dickinson Stadium",
          "La noche en el Baltic Triangle"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Los dos días como arriba",
          "El tercero: la Walker Art Gallery y el World Museum por la mañana",
          "Por la tarde en tren a Crosby, para Another Place al atardecer"
        ]
      }
    ],
    zone: [
      {
        "nome": "Liverpool ONE y centro",
        "perChi": "quien quiere todo a pie",
        "testo": "Entre la estación de Lime Street, las tiendas y los muelles. Aquí está la estación de los autobuses del aeropuerto."
      },
      {
        "nome": "Frente marítimo y Albert Dock",
        "perChi": "quien quiere vistas al río",
        "testo": "Cerca de los museos, del Pier Head y del nuevo estadio del Everton, con el paseo junto al Mersey."
      },
      {
        "nome": "Ropewalks y Baltic Triangle",
        "perChi": "quien quiere locales y vida nocturna",
        "testo": "Bold Street, los restaurantes y los antiguos almacenes con bares. El fin de semana es ruidosa."
      },
      {
        "nome": "Georgian Quarter",
        "perChi": "quien busca calma",
        "testo": "Las casas georgianas alrededor de Hope Street, entre las dos catedrales, a diez minutos a pie del centro."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "1 hora aproximadamente en tren",
        "come": "Trenes desde Lime Street hasta Manchester Piccadilly y Oxford Road.",
        "testo": "El Northern Quarter, Ancoats, los museos gratuitos y los dos estadios de Manchester."
      },
      {
        "nome": "Crosby y Another Place",
        "distanza": "unos 20 minutos en tren",
        "come": "Tren Merseyrail hasta Blundellsands & Crosby o Hall Road.",
        "testo": "Las estatuas de Antony Gormley en la playa, el lugar más fotografiado fuera de la ciudad."
      },
      {
        "nome": "Lake District",
        "distanza": "2-3 horas en tren",
        "come": "Tren con un transbordo, en Preston o pasando por Manchester, hasta Windermere.",
        "testo": "Los lagos y las montañas del noroeste. Mejor con una o dos noches."
      }
    ],
    sapori: [
      { nome: 'Scouse', testo: 'El guiso de carne y patatas que da nombre a los habitantes de Liverpool, los «scousers».' },
      { nome: 'Pie at the match', testo: 'El pastel caliente de estadio, en el puesto junto a las puertas antes del partido.' },
      { nome: 'Bold Street', testo: 'La calle de las cocinas del mundo, de Oriente Medio a Asia, a precios honrados.' },
    ],
    attenzioni: [
      'El Merseyside Maritime Museum y el International Slavery Museum están cerrados por obras de reforma.',
      'Los días de partido los autobuses a Anfield van llenos y alrededor del estadio no se puede aparcar.',
      'En Crosby, cuidado con las mareas y con el barro más allá de la playa.',
    ],
    faq: [
      {
        "domanda": "¿Cómo se compran las entradas para Anfield?",
        "risposta": "Solo en el club, con la membership All Red, Full a 42,99 libras o Light a 18,99 (2026-27): sin ella no se compran entradas. Las plazas devueltas se revenden a precio nominal a los socios en la Ticket Exchange; la hospitality se compra aparte."
      },
      {
        "domanda": "¿Cuánto cuesta la visita a Anfield?",
        "risposta": "26 libras por adulto, con el museo; solo el museo, 14 libras (2026). Las visitas salen todos los días de 10 a 15."
      },
      {
        "domanda": "¿Cómo se va del aeropuerto de Liverpool al centro?",
        "risposta": "Con el autobús 500, hasta cada 15 minutos, que llega a Liverpool ONE: cuesta como máximo 2 libras. El aeropuerto no tiene estación de tren."
      },
      {
        "domanda": "¿Está abierto el Maritime Museum?",
        "risposta": "No, el Merseyside Maritime Museum y el International Slavery Museum están cerrados por obras. La Tate Liverpool está abierta en el edificio RIBA North, en Mann Island."
      },
      {
        "domanda": "¿Cuántos días hacen falta en Liverpool?",
        "risposta": "Un día para los muelles, el Pier Head y los Beatles; dos para añadir las catedrales y un estadio con calma."
      },
      {
        "domanda": "¿Se puede visitar el nuevo estadio del Everton?",
        "risposta": "Sí, el Hill Dickinson Stadium tiene visitas, que solo se reservan online. También han vuelto las visitas a Goodison Park, donde ahora juega el Everton femenino."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'Los almacenes de ladrillo rojo del Royal Albert Dock de Liverpool, reflejados en la dársena',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-03-albert-dock.jpg',
  },
  {
    slug: 'peak-district',
    paeseSlug: 'inghilterra',
    ordine: 7,
    nome: 'Peak District',
    tipologia: ['natura', 'trekking', 'parco nazionale', 'grotte'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Estuve en los muchos viajes al norte, cuando mi hermano vivía por aquí: es la posible ampliación para los amantes de la naturaleza, junto con el Lake District.",
    introduzione:
      'El primer parque nacional del Reino Unido, entre Manchester y Sheffield: las colinas de brezal del Dark Peak, con Kinder Scout y Mam Tor, y los valles verdes y los pueblos de piedra del White Peak, con Bakewell y grandes mansiones como Chatsworth.',
    percheAndarci:
      'Para caminar por las colinas a menos de una hora en tren de Manchester, por las cuevas de Castleton y por los pueblos con pubs de campo.',
    cosaVedere: [
      'Mam Tor y la cresta de la Great Ridge',
      'Castleton y sus cuevas',
      'Edale y Kinder Scout',
      'Chatsworth House',
      'Bakewell',
      'Dovedale',
    ],
    cosaFare: [
      'La caminata de Edale a Castleton pasando por Mam Tor',
      'La barca por la mina inundada de la Speedwell Cavern',
      'Una Bakewell pudding en Bakewell',
    ],
    comeArrivare:
      'Desde Manchester Piccadilly el tren Northern de la Hope Valley para en Edale, Hope y Hathersage, uno por hora: Edale está a unos 45 minutos. Para Buxton hay otra línea Northern, unos 55 minutos. Desde Sheffield los autobuses 271 y 272 van a Hathersage, Hope y Castleton. En coche se llega en una hora aproximadamente desde Manchester.',
    comeSpostarsi:
      'Para la Hope Valley bastan el tren y las piernas. Para Chatsworth, Bakewell y Dovedale el coche es mucho más cómodo. En las carreteras alrededor de Mam Tor y del Winnats Pass, desde 2026, está prohibido parar: solo se aparca en los aparcamientos.',
    periodoMigliore: 'de mayo a septiembre; en invierno niebla, barro y días cortos',
    costi:
      'La entrada al parque es libre; se pagan los aparcamientos, las cuevas y las mansiones. Presupuesto orientativo al día por persona, con la doble compartida: bajo 80-100 €, medio 140-190 €, alto más de 260 €.',
    erroriDaEvitare: [
      'Parar con el coche en las carreteras de Mam Tor y del Winnats Pass: desde 2026 está prohibido',
      'Subir a Mam Tor con zapatos de ciudad: el sendero está empedrado, pero resbala',
      'Contar con el castillo de Peveril: está cerrado hasta marzo de 2027',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Mam Tor y la Great Ridge",
        "testo": "La «colina que tiembla», llamada así por los desprendimientos de su ladera este. Desde la cima, a 517 metros, la cresta de la Great Ridge corre hasta Lose Hill, con el valle de Edale a un lado y la Hope Valley al otro.",
        "come": "A pie desde Edale o desde Castleton, o desde el pequeño aparcamiento del National Trust de Mam Nick, a pocos minutos de la cima.",
        "quando": "Con el cielo despejado; al amanecer y al atardecer hay menos gente.",
        "tempo": "media jornada para la cresta",
        "costo": "gratuito; aparcamiento de Mam Nick 4,50 £ hasta 4 horas (2026)",
        "lat": 53.3491,
        "lng": -1.8107,
        "url": "https://www.nationaltrust.org.uk/visit/peak-district-derbyshire/kinder-edale-and-the-high-peak"
      },
      {
        "nome": "Castleton",
        "testo": "El pueblo de las cuevas, al pie de Mam Tor, con las casas de piedra, los pubs y las tiendas que venden el Blue John, una fluorita violeta y amarilla que solo se encuentra aquí. Encima del pueblo están las ruinas del castillo de Peveril.",
        "come": "Tren hasta Hope y 30 minutos a pie, o autobús 272 desde Sheffield y Hathersage.",
        "quando": "Por la tarde, al final de la caminata.",
        "tempo": "media jornada con una cueva",
        "costo": "el pueblo es gratuito",
        "lat": 53.344,
        "lng": -1.775,
        "consiglio": "El castillo de Peveril, de English Heritage, está cerrado hasta marzo de 2027."
      },
      {
        "nome": "Peak Cavern",
        "testo": "La cueva con la entrada más grande del Reino Unido, donde hasta el siglo XX vivían los cordeleros, con sus casas dentro de la caverna. La visita guiada baja a las salas más interiores.",
        "come": "A pie desde el centro de Castleton. Visitas guiadas a horas fijas.",
        "quando": "Un día de lluvia.",
        "tempo": "1 hora y cuarto",
        "costo": "22,25 £ online, 24 £ en taquilla (unos 26 €, 2026)",
        "orari": "En verano de 10 a 17, visitas cada hora.",
        "lat": 53.3403,
        "lng": -1.7785,
        "url": "https://peakcavern.co.uk/"
      },
      {
        "nome": "Speedwell Cavern",
        "testo": "Una antigua mina de plomo inundada, que se visita en barca por un túnel excavado a mano hasta una gran caverna natural.",
        "come": "Al pie del Winnats Pass, a 15 minutos a pie de Castleton.",
        "quando": "Todo el año, salvo cierres por crecida.",
        "tempo": "1 hora",
        "costo": "23,50 £ online, 25 £ en taquilla (unos 27 €, 2026)",
        "orari": "Cerrada el 25 y 26 de diciembre y el 1 de enero; puede cerrar por inundaciones.",
        "lat": 53.3414,
        "lng": -1.7921,
        "url": "https://www.speedwellcavern.co.uk/"
      },
      {
        "nome": "Edale y Kinder Scout",
        "testo": "Edale es el pueblo al fondo del valle donde empieza la Pennine Way, el sendero que sube hacia Escocia. Encima está Kinder Scout, la meseta de brezal más alta del parque, famosa por la protesta de 1932 que abrió las colinas a los excursionistas.",
        "come": "Tren hasta Edale. La subida a Kinder Scout por Grindsbrook Clough es exigente.",
        "quando": "En verano, con buena visibilidad.",
        "tempo": "una jornada para Kinder Scout",
        "costo": "gratuito",
        "lat": 53.366,
        "lng": -1.816,
        "consiglio": "En la meseta de Kinder Scout con niebla uno se pierde: hacen falta un mapa y el track en el móvil."
      },
      {
        "nome": "Chatsworth House",
        "testo": "La gran mansión de los duques de Devonshire, con salas llenas de obras de arte, el parque junto al río Derwent y los jardines con la cascada escalonada. En invierno hay aperturas de Navidad.",
        "come": "En coche, a unos 20 minutos de Bakewell. Entradas online.",
        "quando": "De mediados de marzo a principios de enero.",
        "tempo": "media jornada",
        "costo": "desde 10 £; Christmas at Chatsworth 40 £ con el aparcamiento (2026)",
        "orari": "Temporada de mediados de marzo a principios de enero; aperturas de Navidad del 7 de noviembre de 2026 al 3 de enero de 2027.",
        "lat": 53.2278,
        "lng": -1.61,
        "url": "https://www.chatsworth.org/"
      },
      {
        "nome": "Haddon Hall",
        "testo": "Un castillo-mansión medieval y Tudor que se ha conservado casi intacto, con la capilla con frescos, la larga galería y los jardines en terrazas sobre el río Wye.",
        "come": "En coche, a pocos minutos de Bakewell.",
        "quando": "En primavera y en verano; en invierno solo para el mercado de Navidad.",
        "tempo": "2 horas",
        "costo": "29,50 £ (unos 34 €, 2026)",
        "orari": "En temporada de 10:30 a 16, última entrada a las 15.",
        "lat": 53.1939,
        "lng": -1.6498,
        "url": "https://www.haddonhall.co.uk/visit/"
      },
      {
        "nome": "Bakewell",
        "testo": "El pueblo de piedra junto al río Wye, con el puente medieval y el mercado de los lunes. Es la cuna de la Bakewell pudding, una tarta de hojaldre con mermelada y un relleno de almendras.",
        "come": "En coche o con el autobús Transpeak entre Buxton y Matlock.",
        "quando": "El lunes, día de mercado.",
        "tempo": "2 horas",
        "costo": "gratuito",
        "lat": 53.214,
        "lng": -1.676
      },
      {
        "nome": "Dovedale",
        "testo": "El valle estrecho del río Dove, en el sur del parque, con las piedras para cruzar el río y las agujas de caliza. Es uno de los paseos más fáciles y más famosos del Peak District.",
        "come": "En coche hasta el aparcamiento del National Trust; las piedras están a unos 800 metros.",
        "quando": "Entre semana: el fin de semana está lleno.",
        "tempo": "2-3 horas",
        "costo": "gratuito; aparcamiento 5 £ hasta 4 horas, 7 £ si es más (2026)",
        "lat": 53.06,
        "lng": -1.777,
        "url": "https://www.nationaltrust.org.uk/dovedale"
      },
      {
        "nome": "Stanage Edge",
        "testo": "Una larga pared de gritstone sobre Hathersage, la escuela de escalada más famosa de Inglaterra, con un sendero por arriba y vistas sobre la Hope Valley.",
        "come": "Desde el aparcamiento de Hollin Bank, de pago, o a pie desde Hathersage.",
        "quando": "Al atardecer.",
        "tempo": "2 horas",
        "costo": "gratuito; aparcamiento de pago",
        "lat": 53.3473,
        "lng": -1.6333
      },
      {
        "nome": "Ladybower Reservoir",
        "testo": "Los embalses del valle del Derwent, con los bosques alrededor y la presa donde se entrenaban los aviones de la escuadrilla de los «Dambusters» en la Segunda Guerra Mundial.",
        "come": "En coche, con el aparcamiento de Fairholmes, o en bici por los caminos.",
        "quando": "En otoño, por los colores de los bosques.",
        "tempo": "2 horas",
        "costo": "gratuito; aparcamiento de pago",
        "lat": 53.3833,
        "lng": -1.7167
      },
      {
        "nome": "Buxton y Poole's Cavern",
        "testo": "La pequeña ciudad termal georgiana, con el Crescent, la Opera House y los jardines del Pavilion. En las afueras está Poole's Cavern, una cueva de caliza con estalactitas, en el bosque de Grin Low.",
        "come": "Tren Northern desde Manchester Piccadilly, unos 55 minutos.",
        "quando": "Un día de lluvia.",
        "tempo": "media jornada",
        "costo": "cueva de pago",
        "orari": "Poole's Cavern de abril a septiembre todos los días de 9:45 a 17; de octubre a marzo hasta las 16 entre semana y las 16:30 el fin de semana; cerrada el 25 y 26 de diciembre.",
        "lat": 53.2498,
        "lng": -1.9259
      }
    ],
    programmi: [
      {
        "titolo": "1 día en tren",
        "tappe": [
          "Tren de Manchester Piccadilly a Edale",
          "Subida a Mam Tor y la cresta",
          "Bajada a Castleton y una cueva",
          "A pie hasta la estación de Hope y tren a Manchester"
        ]
      },
      {
        "titolo": "2 días en coche",
        "tappe": [
          "Primer día: Edale, Mam Tor, Castleton y las cuevas, noche en la Hope Valley",
          "Segundo día: Chatsworth por la mañana, Bakewell a mediodía, Dovedale por la tarde"
        ]
      }
    ],
    zone: [
      {
        "nome": "Castleton y Hope Valley",
        "perChi": "quien camina",
        "testo": "Pubs con habitaciones y B&B al pie de Mam Tor, con el tren en Hope y Edale."
      },
      {
        "nome": "Bakewell",
        "perChi": "quien se mueve en coche",
        "testo": "En el centro del White Peak, cómodo para Chatsworth, Haddon Hall y Dovedale."
      },
      {
        "nome": "Buxton",
        "perChi": "quien quiere una pequeña ciudad con tren",
        "testo": "Más servicios y restaurantes, con el tren directo a Manchester."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "unos 45 minutos en tren",
        "come": "Tren Northern desde Edale o Hope hasta Manchester Piccadilly.",
        "testo": "La ciudad más cercana, para dormir y para la noche."
      },
      {
        "nome": "Sheffield",
        "distanza": "unos 30 minutos en tren",
        "come": "La misma línea de la Hope Valley, hacia el este.",
        "testo": "La ciudad del acero, con los jardines botánicos y la galería del Millennium."
      }
    ],
    faq: [
      {
        "domanda": "¿Se puede visitar el Peak District sin coche?",
        "risposta": "Sí, la Hope Valley: el tren desde Manchester para en Edale y Hope, y desde allí se camina a Mam Tor y Castleton. Para Chatsworth, Bakewell y Dovedale el coche es mucho más cómodo."
      },
      {
        "domanda": "¿Hay que pagar para entrar en el parque nacional?",
        "risposta": "No, la entrada es libre. Se pagan los aparcamientos, las cuevas y las mansiones."
      },
      {
        "domanda": "¿Cuál es la caminata más bonita para un día?",
        "risposta": "De Edale a Castleton pasando por Mam Tor y por la cresta de la Great Ridge, con el tren a la ida y a la vuelta."
      },
      {
        "domanda": "¿Qué cueva elegir en Castleton?",
        "risposta": "La Peak Cavern por la entrada enorme y la historia de los cordeleros, la Speedwell Cavern por la barca en la mina inundada. Cuestan 22,25 y 23,50 libras online (2026)."
      },
      {
        "domanda": "¿Está abierto el castillo de Peveril?",
        "risposta": "No, está cerrado hasta marzo de 2027. Se ve desde fuera, sobre Castleton."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'La cresta de Mam Tor en el Peak District, con el sendero empedrado y los valles verdes a los lados',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-05-mam-tor.jpg',
  },
  {
    slug: 'lake-district',
    paeseSlug: 'inghilterra',
    ordine: 8,
    nome: 'Lake District',
    tipologia: ['natura', 'trekking', 'laghi', 'parco nazionale'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Estuve en los muchos viajes al norte, cuando mi hermano vivía por aquí: es la posible ampliación para los amantes de la naturaleza, junto con el Peak District.",
    introduzione:
      'El parque nacional de los lagos y las montañas en el noroeste de Inglaterra, Patrimonio de la UNESCO: Windermere, Derwentwater y Ullswater, las colinas llamadas «fells», los pueblos de pizarra y la tierra de los poetas románticos y de Beatrix Potter.',
    percheAndarci:
      'Por los paisajes más bonitos de Inglaterra, para ver desde los barcos en los lagos y desde las cumbres. Se camina mucho, también con subidas cortas, y por la noche se vuelve a un pub de pueblo.',
    cosaVedere: [
      'Windermere, Bowness y Ambleside',
      'Grasmere y la Dove Cottage',
      'Keswick y Derwentwater',
      'Catbells',
      'El Castlerigg Stone Circle',
      'Ullswater y Aira Force',
    ],
    cosaFare: [
      'El barco por Windermere de Bowness a Ambleside',
      'La subida a Catbells',
      'La vuelta a Ullswater con los barcos',
    ],
    comeArrivare:
      'Desde Manchester Piccadilly y desde el aeropuerto de Manchester hay trenes Northern directos hasta Windermere, en algo más de dos horas. Los trenes TransPennine Express a Escocia paran en Oxenholme Lake District, desde donde una línea corta lleva a Windermere. Desde Londres Euston se llega a Oxenholme con Avanti West Coast. En coche desde Manchester se tarda unas dos horas.',
    comeSpostarsi:
      'Sin coche se usan los autobuses Stagecoach: el 599 entre Windermere, Bowness, Ambleside y Grasmere, el 555 de Kendal a Keswick pasando por Ambleside y Grasmere, el 508 a Glenridding y Ullswater. En los lagos hay barcos. El coche hace falta para Hill Top, Tarn Hows y los puertos de montaña, como Honister.',
    periodoMigliore: 'de mayo a septiembre; en julio y agosto hay mucha gente y el alojamiento cuesta más',
    costi:
      'La entrada al parque es libre; se pagan barcos, casas museo y aparcamientos. Presupuesto orientativo al día por persona, con la doble compartida: bajo 90-120 €, medio 160-220 €, alto más de 300 €.',
    erroriDaEvitare: [
      'Ir a Hill Top sin entrada reservada: solo se entra con hora',
      'Subir a los fells sin chaqueta y sin consultar el tiempo: las nubes bajan deprisa',
      'Llegar a los aparcamientos más famosos a media mañana un fin de semana de verano: están llenos',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Windermere y Bowness",
        "testo": "El lago más largo de Inglaterra, con Bowness en la orilla, el pequeño puerto y los barcos. Windermere Lake Cruises une Bowness, Ambleside, Brockhole y Lakeside todo el año.",
        "come": "De la estación de Windermere a Bowness a pie en 20 minutos o con el autobús 599. Billetes de barco online o en el muelle.",
        "quando": "Por la mañana, antes de las excursiones organizadas.",
        "tempo": "media jornada",
        "costo": "barco Bowness-Ambleside desde 19,20 £, Freedom of the Lake 24 horas desde 26,50 £ (2026)",
        "orari": "Salidas todos los días desde Bowness, Ambleside, Brockhole y Lakeside.",
        "lat": 54.3583,
        "lng": -2.9361,
        "url": "https://www.windermere-lakecruises.co.uk/"
      },
      {
        "nome": "Ambleside",
        "testo": "El pueblo de piedra oscura en la cabecera del lago Windermere, con tiendas de montaña, pubs y la Bridge House, la casita construida sobre un puente. Es el punto de partida de muchas caminatas.",
        "come": "Con el barco desde Bowness o con los autobuses 599 y 555.",
        "quando": "Por la noche, para cenar.",
        "tempo": "2 horas",
        "costo": "gratuito",
        "lat": 54.43,
        "lng": -2.963
      },
      {
        "nome": "Grasmere y la Dove Cottage",
        "testo": "El pueblo del poeta William Wordsworth, junto al lago del mismo nombre. La Dove Cottage es la casa donde vivió con su hermana Dorothy, con el museo al lado; Wordsworth está enterrado en el cementerio de la iglesia de St Oswald.",
        "come": "Autobús 599 o 555 desde Ambleside. Entrada válida 12 meses.",
        "quando": "De martes a sábado, los únicos días de apertura.",
        "tempo": "2 horas",
        "costo": "16 £ (unos 18 €, 2026)",
        "orari": "De martes a sábado de 10 a 16, última entrada a la casa a las 15:20; cerrada domingo y lunes.",
        "lat": 54.4544,
        "lng": -3.0164,
        "url": "https://wordsworth.org.uk/visit/"
      },
      {
        "nome": "Hill Top",
        "testo": "La granja de Beatrix Potter en Near Sawrey, con los interiores y el huerto que aparecen en sus libros de Peter Rabbit. Es del National Trust, como gran parte de las tierras que ella dejó al parque.",
        "come": "En coche, o con el ferry para coches y peatones desde Bowness y luego a pie. Solo con entrada a hora fija reservada, también para los socios.",
        "quando": "Entre semana, fuera de las vacaciones escolares.",
        "tempo": "1 hora",
        "costo": "17 £ (unos 20 €, 2026)",
        "orari": "De 10 a 17 en temporada; cerrada en invierno.",
        "lat": 54.3517,
        "lng": -2.9706,
        "url": "https://www.nationaltrust.org.uk/visit/lake-district/hill-top"
      },
      {
        "nome": "Keswick y Derwentwater",
        "testo": "La pequeña ciudad de mercado del norte del parque, junto al lago Derwentwater, con las islas boscosas y las montañas alrededor. La Keswick Launch da la vuelta al lago con siete paradas, y es la forma más cómoda de llegar al inicio de los senderos.",
        "come": "Autobús 555 desde Ambleside y Grasmere. Barcos desde el muelle de Keswick, a diez minutos a pie del centro.",
        "quando": "El sábado, día de mercado.",
        "tempo": "media jornada",
        "costo": "barco de pago",
        "lat": 54.5943,
        "lng": -3.1449,
        "url": "https://www.keswick-launch.co.uk/"
      },
      {
        "nome": "Catbells",
        "testo": "La colina más querida del Lake District, sobre la orilla oeste de Derwentwater: una subida corta pero empinada, con un tramo final por las rocas y una vista amplísima sobre el lago y las montañas.",
        "come": "Con la Keswick Launch hasta el muelle de Hawes End, luego a pie.",
        "quando": "A primera hora de la mañana o entre semana: tiene mucha gente.",
        "tempo": "2-3 horas ida y vuelta",
        "costo": "gratuito",
        "lat": 54.5686,
        "lng": -3.1708,
        "consiglio": "Con viento fuerte el tramo de rocas de la cima es incómodo: mejor dejarlo para otro día."
      },
      {
        "nome": "Castlerigg Stone Circle",
        "testo": "Un círculo de piedras prehistórico de hace unos 5.000 años, en un prado rodeado de montañas. Es uno de los más antiguos de Gran Bretaña y uno de los más escenográficos.",
        "come": "A pie desde Keswick en media hora, o en coche con pocas plazas junto a la carretera.",
        "quando": "Al atardecer.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "orari": "Abierto a cualquier hora razonable con luz de día.",
        "lat": 54.6028,
        "lng": -3.0984,
        "url": "https://www.english-heritage.org.uk/visit/places/castlerigg-stone-circle/"
      },
      {
        "nome": "Tarn Hows",
        "testo": "Un pequeño lago entre los bosques sobre Coniston, con un sendero circular fácil de una hora aproximadamente. Es el sitio para un paseo corto con un paisaje de postal.",
        "come": "En coche, aparcamiento del National Trust.",
        "quando": "En otoño, por los colores.",
        "tempo": "1-2 horas",
        "costo": "gratuito; aparcamiento 7 £ hasta 2 horas, 10 £ todo el día",
        "lat": 54.3917,
        "lng": -3.0319,
        "url": "https://www.nationaltrust.org.uk/tarn-hows-and-coniston"
      },
      {
        "nome": "Ullswater Steamers",
        "testo": "Los barcos históricos del lago Ullswater, entre Glenridding y Pooley Bridge, con las montañas que caen directamente al agua. Se combinan con la caminata por la orilla.",
        "come": "Autobús 508 desde Windermere a Glenridding, o en coche.",
        "quando": "Con el cielo despejado; con niebla los horarios pueden cambiar.",
        "tempo": "media jornada",
        "costo": "vuelta al lago 26 £, Glenridding-Pooley Bridge solo ida 17,50 £ (2026)",
        "lat": 54.5437,
        "lng": -2.944,
        "url": "https://www.ullswater-steamers.co.uk/"
      },
      {
        "nome": "Aira Force",
        "testo": "La cascada más famosa del parque, de una veintena de metros, en un bosque sobre Ullswater, con puentecillos de piedra por encima y por debajo del salto.",
        "come": "En coche, con el aparcamiento del National Trust, o a pie desde Glenridding. El muelle de los barcos de Aira Force está cerrado.",
        "quando": "Después de la lluvia, cuando baja mucha agua.",
        "tempo": "1 hora",
        "costo": "gratuito; aparcamiento 6 £ por 2 horas, 9,50 £ todo el día",
        "lat": 54.5763,
        "lng": -2.9309,
        "url": "https://www.nationaltrust.org.uk/visit/lake-district/aira-force-and-ullswater"
      },
      {
        "nome": "Honister Pass y la mina de pizarra",
        "testo": "El puerto de montaña más espectacular del parque, entre Borrowdale y Buttermere, con la antigua mina de pizarra en lo alto. Se visitan las galerías y hay una vía ferrata en la montaña.",
        "come": "En coche, por una carretera estrecha y empinada.",
        "quando": "Con tiempo seco.",
        "tempo": "media jornada",
        "costo": "visita a la mina desde 25 £, vía ferrata desde 55 £ (2026)",
        "lat": 54.5167,
        "lng": -3.2167,
        "url": "https://www.honister.com/"
      },
      {
        "nome": "Brantwood",
        "testo": "La casa del crítico de arte John Ruskin a orillas del lago Coniston, con los jardines en la colina y la vista sobre el Old Man of Coniston.",
        "come": "En coche, o con el barco desde el muelle de Coniston.",
        "quando": "Por la tarde, después de Tarn Hows.",
        "tempo": "2 horas",
        "costo": "16,50 £ casa y jardines (unos 19 €, 2026)",
        "orari": "De 10:30 a 16; desde mediados de noviembre de miércoles a domingo de 10:30 a 15; cerrada el 25 y 26 de diciembre.",
        "lat": 54.3535,
        "lng": -3.0592,
        "url": "https://www.brantwood.org.uk/visit/"
      }
    ],
    programmi: [
      {
        "titolo": "1 día sin coche",
        "tappe": [
          "Tren hasta Windermere y a pie a Bowness",
          "Barco hasta Ambleside",
          "Autobús hasta Grasmere y la Dove Cottage"
        ]
      },
      {
        "titolo": "2 días sin coche",
        "tappe": [
          "Primer día: Windermere, Ambleside y Grasmere",
          "Segundo día: Keswick, el barco por Derwentwater, Catbells y el Castlerigg Stone Circle"
        ]
      },
      {
        "titolo": "3 días en coche",
        "tappe": [
          "Los dos días como arriba",
          "El tercero: Hill Top, Tarn Hows y Brantwood, o Ullswater y Aira Force"
        ]
      }
    ],
    zone: [
      {
        "nome": "Windermere y Bowness",
        "perChi": "quien llega en tren",
        "testo": "La estación, los barcos y muchos hoteles. Es la zona más turística."
      },
      {
        "nome": "Ambleside",
        "perChi": "quien quiere caminar",
        "testo": "En la cabecera del lago, con pubs y tiendas de montaña, bien comunicada por autobús."
      },
      {
        "nome": "Grasmere",
        "perChi": "quien busca un pueblo tranquilo",
        "testo": "Pequeño y silencioso, a medio camino entre Ambleside y Keswick."
      },
      {
        "nome": "Keswick",
        "perChi": "quien quiere el norte del parque",
        "testo": "Una pequeña ciudad de verdad, con el mercado, y Derwentwater y Catbells cerca."
      }
    ],
    gite: [
      {
        "nome": "Manchester",
        "distanza": "algo más de 2 horas en tren",
        "come": "Trenes Northern directos desde Windermere hasta Manchester Piccadilly y el aeropuerto.",
        "testo": "Para el vuelo, o para añadir la ciudad y el estadio."
      },
      {
        "nome": "Hadrian's Wall",
        "distanza": "una hora y media aproximadamente en coche desde Keswick",
        "come": "En coche hacia el este, o en tren desde Carlisle.",
        "testo": "La muralla romana que cruzaba el norte de Inglaterra, con los fuertes y los tramos de muro por las colinas."
      }
    ],
    sapori: [
      { nome: 'Cumberland sausage', testo: 'La salchicha larga en espiral de Cumbria, con puré y salsa gravy.' },
      { nome: 'Grasmere gingerbread', testo: 'El pan de jengibre de Grasmere, a medio camino entre una galleta y un pastel, que se vende en una tienda junto a la iglesia.' },
      { nome: 'Kendal mint cake', testo: 'La tableta de azúcar y menta de los excursionistas, para llevar en la mochila.' },
    ],
    attenzioni: [
      'En los fells el tiempo cambia deprisa: chaqueta impermeable, capas y mapa también para las subidas cortas.',
      'Las carreteras de montaña son estrechas y empinadas; se conduce por la izquierda, con ovejas en la calzada.',
      'Los fines de semana de verano los aparcamientos más famosos se llenan a media mañana.',
    ],
    faq: [
      {
        "domanda": "¿Se puede visitar el Lake District sin coche?",
        "risposta": "Sí, la parte central: tren hasta Windermere, luego barcos y los autobuses 599 y 555 hasta Grasmere y Keswick. Para Hill Top, Tarn Hows y los puertos de montaña el coche es mucho más cómodo."
      },
      {
        "domanda": "¿Cuánto se tarda de Manchester al Lake District?",
        "risposta": "Algo más de dos horas en tren, con los Northern directos desde Manchester Piccadilly y desde el aeropuerto hasta Windermere. En coche, unas dos horas."
      },
      {
        "domanda": "¿Hay que reservar Hill Top?",
        "risposta": "Sí, solo se entra con la entrada a hora fija reservada, también los socios del National Trust. Cuesta 17 libras (2026)."
      },
      {
        "domanda": "¿Cuál es la caminata más fácil con buenas vistas?",
        "risposta": "Tarn Hows, un circuito de una hora aproximadamente alrededor del pequeño lago. Catbells es más empinada pero corta, con la mejor vista sobre Derwentwater."
      },
      {
        "domanda": "¿Dónde dormir en el Lake District?",
        "risposta": "Windermere o Bowness por el tren y los barcos, Ambleside y Grasmere para caminar, Keswick para el norte del parque. En verano los B&B se llenan pronto."
      },
      {
        "domanda": "¿Cuántos días hacen falta?",
        "risposta": "Dos días para Windermere, Grasmere y Keswick con Catbells; tres para añadir Ullswater o Hill Top y Tarn Hows."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['manchester-liverpool-premier-league'],
    imageAlt: 'El lago Windermere con las barcas amarradas y las colinas del Lake District',
    immagine: '/images/viaggi/manchester-liverpool-premier-league/giorno-06-windermere.jpg',
  },
  {
    slug: 'brighton',
    paeseSlug: 'inghilterra',
    ordine: 9,
    nome: 'Brighton',
    tipologia: ['mare', 'città', 'vita notturna'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Brighton es muy bonita, pero el fin de semana se convierte en una especie de stag party al aire libre, con mucho booze y bar hopping, así que la gente lo da todo. Aun así es muy bonita, y se hace en un día o en un fin de semana desde Londres.",
    introduzione:
      'La ciudad de playa de los londinenses, en el canal de la Mancha, a una hora en tren de Londres: el Palace Pier con sus atracciones, el Royal Pavilion de estilo indio de Jorge IV, los callejones de las Lanes, las tiendas de North Laine y una playa de guijarros de kilómetros, hasta Hove.',
    percheAndarci:
      'Para un día de playa cerca de Londres, por el Royal Pavilion y por el aire libre y un poco excéntrico de la ciudad. Es también la base para los acantilados de las Seven Sisters.',
    cosaVedere: [
      'El Royal Pavilion',
      'El Brighton Palace Pier',
      'Las Lanes y North Laine',
      'El West Pier y el Brighton i360',
      'Kemp Town',
      'Hove y las casetas del paseo marítimo',
    ],
    cosaFare: [
      'Fish and chips sobre los guijarros',
      'Subir al Brighton i360',
      'El trenecito eléctrico Volk\'s por la playa, en verano',
      'Un paseo por el Devil\'s Dyke, en las colinas de los South Downs',
    ],
    comeArrivare:
      'Desde Londres los trenes Southern salen de Victoria y los Thameslink de London Bridge, Blackfriars y St Pancras: una hora de viaje aproximadamente, sin reservar asiento. Desde Gatwick, Thameslink y Southern llegan a Brighton en una media hora, sin pasar por Londres. Con los billetes Off-Peak se ahorra hasta un tercio.',
    comeSpostarsi:
      'A pie: de la estación al mar hay 15 minutos cuesta abajo, y el centro está todo cerca. Para el Devil\'s Dyke y para las Seven Sisters están los autobuses de Brighton & Hove.',
    periodoMigliore: 'de mayo a septiembre; el viernes y el sábado por la noche la ciudad está llena de fiestas',
    costi:
      'El paseo marítimo y el Palace Pier son gratuitos; se pagan el Royal Pavilion y el Brighton i360. Presupuesto orientativo al día por persona, con la doble compartida: bajo 90-120 €, medio 170-230 €, alto más de 320 €.',
    erroriDaEvitare: [
      'Buscar una noche tranquila en el centro el sábado: mejor Kemp Town o Hove',
      'Pasar por Londres al llegar a Gatwick: Brighton está más cerca',
      'Pagar en efectivo en el Royal Pavilion: solo acepta tarjetas',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Royal Pavilion",
        "testo": "El palacio de recreo del rey Jorge IV, con las cúpulas y los minaretes de estilo indio por fuera y los interiores de estilo chino, con dragones, lámparas enormes y la gran cocina. Es el símbolo de Brighton.",
        "come": "A pie desde la estación en diez minutos. Entrada online con un 5% de descuento, solo tarjetas; visita guiada oficial el sábado a las 14.",
        "quando": "Por la mañana, a la apertura.",
        "tempo": "1 hora y media",
        "costo": "21,50 £ (unos 25 €, 2026); dos por uno con un billete de tren fechado",
        "orari": "De abril a septiembre de 9:30 a 17:45, de octubre a marzo de 10 a 17:15; última entrada 45 minutos antes.",
        "lat": 50.8231,
        "lng": -0.1375,
        "url": "https://brightonmuseums.org.uk/visit/royal-pavilion-garden/plan-your-visit/"
      },
      {
        "nome": "Brighton Palace Pier",
        "testo": "El muelle victoriano de más de quinientos metros, con las atracciones al fondo, los salones recreativos y los quioscos de fish and chips y rosquillas.",
        "come": "Desde el paseo marítimo, frente al centro. Las atracciones se pagan aparte o con la pulsera.",
        "quando": "Al atardecer.",
        "tempo": "1 hora",
        "costo": "gratuito; 1 £ en los momentos punta de marzo a octubre",
        "orari": "Horarios variables según la temporada, en el calendario de la web.",
        "lat": 50.815,
        "lng": -0.1369,
        "url": "https://www.brightonpier.co.uk/"
      },
      {
        "nome": "Las Lanes",
        "testo": "El núcleo del antiguo pueblo de pescadores, con callejones estrechos, joyerías, tiendas de antigüedades y pubs. Uno se pierde a gusto.",
        "come": "A pie entre el Royal Pavilion y el mar.",
        "quando": "Por la mañana, antes de la multitud.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 50.8206,
        "lng": -0.1403
      },
      {
        "nome": "North Laine",
        "testo": "El barrio bohemio entre la estación y el centro, con las casas bajas y de colores, las tiendas independientes y vintage, los cafés y los restaurantes vegetarianos.",
        "come": "Se cruza bajando de la estación hacia el mar.",
        "quando": "El sábado, cuando todas las tiendas están abiertas.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "lat": 50.8264,
        "lng": -0.1392
      },
      {
        "nome": "Brighton i360",
        "testo": "La torre panorámica del paseo marítimo, con la cabina de cristal que sube despacio hasta 138 metros. Los días despejados se ven los South Downs y la costa hasta las Seven Sisters.",
        "come": "A pie desde el centro, junto a los restos del West Pier. Entradas a hora fija online.",
        "quando": "Los días despejados, o al atardecer.",
        "tempo": "45 minutos",
        "costo": "desde unas 18,50 £ online (unos 21 €, 2026)",
        "orari": "En noviembre de 11 a 16, sábado y domingo de 10:30 a 16; en verano, más horas.",
        "lat": 50.8214,
        "lng": -0.1507,
        "url": "https://www.brightoni360.co.uk/plan-your-visit"
      },
      {
        "nome": "West Pier",
        "testo": "El esqueleto de hierro del antiguo muelle, cerrado en 1975 y destruido por incendios y temporales, que asoma del mar frente a la playa. Al atardecer, con las bandadas de estorninos en invierno, es una de las vistas más famosas de la ciudad.",
        "come": "Desde el paseo marítimo, cerca del Brighton i360.",
        "quando": "Al atardecer.",
        "tempo": "30 minutos",
        "costo": "gratuito",
        "lat": 50.8208,
        "lng": -0.1511
      },
      {
        "nome": "Brighton Museum & Art Gallery",
        "testo": "El museo en los jardines del Royal Pavilion, con artes decorativas, moda y colecciones sobre la historia de la ciudad.",
        "come": "Junto al Royal Pavilion.",
        "quando": "Un día de lluvia.",
        "tempo": "1 hora",
        "costo": "10,50 £ (unos 12 €, 2026)",
        "orari": "De martes a domingo de 10 a 17; cerrado el lunes, salvo festivos.",
        "lat": 50.8234,
        "lng": -0.1379,
        "url": "https://brightonmuseums.org.uk/brighton-museum-art-gallery/plan-your-visit/"
      },
      {
        "nome": "Volk's Electric Railway",
        "testo": "El ferrocarril eléctrico más antiguo del mundo todavía en servicio, de 1883: un trenecito de madera que recorre la playa del Aquarium a Black Rock en una docena de minutos.",
        "come": "Desde la parada cerca del Palace Pier. Solo tarjetas.",
        "quando": "En verano, de Semana Santa a finales de septiembre.",
        "tempo": "30 minutos",
        "costo": "5,40 £ solo ida, 7 £ ida y vuelta (2026)",
        "orari": "De Semana Santa al 30 de septiembre todos los días, cada 15 minutos; cerrado en invierno.",
        "lat": 50.8182,
        "lng": -0.1291,
        "url": "https://volksrailway.org.uk/"
      },
      {
        "nome": "Kemp Town",
        "testo": "El barrio al este del Palace Pier, con las grandes plazas georgianas asomadas al mar, St James's Street y el corazón de la escena LGBTQ+ de Brighton.",
        "come": "A pie desde el Palace Pier, hacia el este.",
        "quando": "Por la noche, para cenar.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "lat": 50.8189,
        "lng": -0.1225
      },
      {
        "nome": "Hove",
        "testo": "La ciudad gemela al oeste, más residencial, con el paseo marítimo ancho, los prados y las hileras de casetas de colores en la playa.",
        "come": "A pie junto al mar desde el West Pier, o en autobús.",
        "quando": "El domingo por la mañana.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "lat": 50.8235,
        "lng": -0.1644
      },
      {
        "nome": "Preston Manor",
        "testo": "Una casa de campo eduardiana en el norte de la ciudad, con los interiores de la época, las cocinas en la planta de abajo y el jardín amurallado.",
        "come": "En autobús hacia Preston Park.",
        "quando": "De viernes a lunes, los únicos días de apertura.",
        "tempo": "1 hora",
        "costo": "14 £ (unos 16 €, 2026)",
        "orari": "De mediados de marzo al 30 de noviembre, de viernes a lunes de 10 a 17; solo tarjetas.",
        "lat": 50.8425,
        "lng": -0.1501,
        "url": "https://brightonmuseums.org.uk/preston-manor-gardens/plan-your-visit/"
      },
      {
        "nome": "Devil's Dyke",
        "testo": "El valle más profundo de los South Downs, al norte de Brighton, con los prados en lo alto de la colina y la vista sobre el campo de Sussex. Es el sitio para una caminata corta fuera de la ciudad.",
        "come": "Autobús 77 desde el Palace Pier, con más servicios en verano, o en coche.",
        "quando": "Un día despejado.",
        "tempo": "media jornada",
        "costo": "gratuito",
        "lat": 50.885,
        "lng": -0.205
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Por la mañana North Laine bajando desde la estación",
          "El Royal Pavilion a la apertura",
          "Las Lanes y la comida",
          "El Palace Pier, el West Pier y el Brighton i360 al atardecer"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Primer día como arriba",
          "Segundo día en las Seven Sisters: autobús 12 o 12X a Exceat, acantilados hasta Birling Gap"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Los dos días como arriba",
          "El tercero: Hove por la mañana, el Devil's Dyke por la tarde, Kemp Town por la noche"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro y Lanes",
        "perChi": "quien quiere todo a pie",
        "testo": "Cerca del mar y del Royal Pavilion. El viernes y el sábado por la noche es la zona más ruidosa."
      },
      {
        "nome": "Kemp Town",
        "perChi": "quien busca locales y algo de calma",
        "testo": "Al este del Pier, con las plazas georgianas y la vida LGBTQ+ de St James's Street."
      },
      {
        "nome": "Hove",
        "perChi": "quien quiere dormir tranquilo",
        "testo": "Residencial, con el paseo marítimo tranquilo, a 20-30 minutos a pie del centro."
      },
      {
        "nome": "North Laine y estación",
        "perChi": "quien llega tarde o se va temprano",
        "testo": "Entre las tiendas independientes, a pocos minutos de los trenes a Londres y Gatwick."
      }
    ],
    gite: [
      {
        "nome": "Seven Sisters",
        "distanza": "1 hora aproximadamente en autobús",
        "come": "Autobús 12 o 12X hasta Seven Sisters Country Park, en Exceat.",
        "testo": "Los acantilados de creta blanca sobre el canal de la Mancha, para recorrer a pie hasta Birling Gap."
      },
      {
        "nome": "Lewes",
        "distanza": "unos 15 minutos en tren",
        "come": "Trenes Southern desde Brighton.",
        "testo": "Una pequeña ciudad histórica con el castillo normando y las casas con entramado de madera, al pie de los South Downs."
      },
      {
        "nome": "Londres",
        "distanza": "1 hora aproximadamente en tren",
        "come": "Southern a Victoria, Thameslink a London Bridge y St Pancras.",
        "testo": "Para quien hace la ruta al revés, con la base en Brighton."
      }
    ],
    sapori: [
      { nome: 'Fish and chips', testo: 'Pescado rebozado frito con patatas fritas, para comer en la playa.' },
      { nome: 'Cocina vegetariana', testo: 'Brighton es una de las ciudades más vegetarianas del Reino Unido, con muchos locales en North Laine.' },
      { nome: 'Doughnuts del Pier', testo: 'Las rosquillas calientes con azúcar que se venden en el Palace Pier.' },
    ],
    attenzioni: [
      'El viernes y el sábado por la noche el centro está lleno de despedidas de soltero y de soltera.',
      'La playa es de guijarros: para bañarse hacen falta escarpines.',
      'El Booth Museum de historia natural está cerrado por obras desde abril de 2025.',
    ],
    faq: [
      {
        "domanda": "¿Se puede hacer Brighton en un día desde Londres?",
        "risposta": "Sí, el tren tarda una hora aproximadamente desde Victoria o desde London Bridge. En un día se ven el Royal Pavilion, las Lanes y el Pier."
      },
      {
        "domanda": "¿Cómo es Brighton el fin de semana?",
        "risposta": "El viernes y el sábado por la noche el centro se llena de fiestas y de despedidas de soltero y de soltera. Quien quiera calma duerme en Hove o en Kemp Town, o elige un domingo."
      },
      {
        "domanda": "¿Cuánto cuesta el Royal Pavilion?",
        "risposta": "21,50 libras por adulto, con un 5% de descuento online (2026). Con un billete de tren fechado hay oferta de dos por uno."
      },
      {
        "domanda": "¿Está abierto el Brighton i360?",
        "risposta": "Sí, la torre panorámica abre todo el año, con horario reducido en invierno. El vuelo dura unos 25 minutos y sube hasta 138 metros."
      },
      {
        "domanda": "¿Cómo se va de Brighton a las Seven Sisters?",
        "risposta": "Con el autobús 12 o 12X hasta Seven Sisters Country Park, en Exceat, en una hora aproximadamente. Los domingos y festivos el 13X pasa también por Birling Gap."
      },
      {
        "domanda": "¿Cómo se llega a Brighton desde Gatwick?",
        "risposta": "En tren, con Thameslink o Southern, en una media hora y sin pasar por Londres."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'La India Gate y las cúpulas del Royal Pavilion de Brighton',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-02-royal-pavilion.jpg',
  },
  {
    slug: 'seven-sisters',
    paeseSlug: 'inghilterra',
    ordine: 10,
    nome: 'Seven Sisters',
    tipologia: ['natura', 'scogliere', 'trekking', 'parco nazionale'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    miaEsperienza:
      "Las Seven Sisters son naturaleza: si pillas un día bueno son increíbles, mientras que si llueve o hace viento puede que no sean tan agradables. Se hacen en un día o en un fin de semana desde Londres.",
    introduzione:
      'Los siete acantilados de creta blanca entre Seaford y Eastbourne, sobre el canal de la Mancha, dentro del parque nacional de los South Downs. Se recorren a pie por el prado que corona las paredes, subiendo y bajando entre las «hermanas», desde la desembocadura del Cuckmere hasta Birling Gap y Beachy Head.',
    percheAndarci:
      'Por uno de los paisajes de costa más famosos de Inglaterra, a menos de dos horas de Londres, con una caminata que se adapta a todas las piernas.',
    cosaVedere: [
      'Cuckmere Haven',
      'La vista desde Seaford Head',
      'Los acantilados de Exceat a Birling Gap',
      'El faro de Belle Tout',
      'Beachy Head',
    ],
    cosaFare: [
      'La caminata de Seven Sisters Country Park a Birling Gap',
      'Bajar a la playa de Birling Gap',
      'Una comida en el pub en Alfriston o en East Dean',
    ],
    comeArrivare:
      'Desde Brighton los autobuses 12 y 12X de Brighton & Hove paran delante del centro de visitantes de Seven Sisters Country Park, en Exceat; el 12X pasa hasta cada 12 minutos. En tren desde Londres se llega a Seaford, desde donde se camina hasta el parque en una hora aproximadamente, o a Eastbourne, al otro lado. En coche están los aparcamientos de pago de Exceat y de Birling Gap.',
    comeSpostarsi:
      'A pie por la costa. Los domingos y festivos el autobús 13X pasa por Birling Gap y Beachy Head cada 15 minutos; los demás días el autobús se coge en East Dean, a un par de kilómetros de Birling Gap.',
    periodoMigliore: 'de mayo a septiembre, un día sin lluvia y con poco viento',
    costi:
      'El sendero es gratuito; solo se pagan los aparcamientos y el autobús. Quien duerme en Brighton tiene el mismo presupuesto que en la ciudad.',
    erroriDaEvitare: [
      'Acercarse al borde de los acantilados: la creta se derrumba sin previo aviso',
      'Salir con lluvia o viento fuerte: el sendero está expuesto y resbala',
      'No llevar agua ni comida: entre Exceat y Birling Gap no hay nada',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Seven Sisters Country Park",
        "testo": "El parque en la desembocadura del río Cuckmere, en Exceat, con el centro de visitantes, el bar, los aseos y el alquiler de bicis. Es el punto de partida más cómodo para los acantilados.",
        "come": "Autobús 12 o 12X desde Brighton o desde Eastbourne, con la parada delante del centro de visitantes.",
        "quando": "A primera hora de la mañana, para tener el sendero casi libre.",
        "tempo": "media hora de parada",
        "costo": "gratuito; aparcamiento 3,50 £ hasta 2 horas, 5 £ hasta 4, 7 £ si es más (2026)",
        "orari": "Centro de visitantes de 10 a 16 en invierno; aseos de 7 a 18; aparcamientos cerrados de noche.",
        "lat": 50.7752,
        "lng": 0.1533,
        "url": "https://www.sevensisters.org.uk/"
      },
      {
        "nome": "Cuckmere Haven",
        "testo": "La desembocadura del río Cuckmere, con los meandros en el valle verde y la playa de guijarros. Desde la playa se ve el primero de los siete acantilados.",
        "come": "A pie desde el centro de visitantes, por un sendero llano de unos tres kilómetros junto al río.",
        "quando": "Con la marea baja.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 50.764,
        "lng": 0.147
      },
      {
        "nome": "Seaford Head y Hope Gap",
        "testo": "El promontorio en la orilla oeste del Cuckmere, con las casitas de los guardacostas delante de las Seven Sisters: es la vista más famosa, la de las postales. Un poco más al oeste está la playa rocosa de Hope Gap.",
        "come": "A pie desde Seaford por el acantilado, o desde la orilla oeste del río.",
        "quando": "Por la tarde, con el sol sobre los acantilados.",
        "tempo": "2 horas",
        "costo": "gratuito",
        "lat": 50.7561,
        "lng": 0.139
      },
      {
        "nome": "Los acantilados de Exceat a Birling Gap",
        "testo": "La caminata clásica, unos 6 kilómetros por el prado que corona las siete «hermanas», con las subidas y bajadas entre una cima y otra y el mar debajo.",
        "come": "A pie desde el centro de visitantes, primero hacia el mar y luego hacia el este.",
        "quando": "Un día despejado y con poco viento.",
        "tempo": "2-3 horas",
        "costo": "gratuito",
        "lat": 50.76,
        "lng": 0.16,
        "consiglio": "Hay que caminar siempre lejos del borde: los acantilados retroceden hasta un metro al año y pueden derrumbarse sin previo aviso."
      },
      {
        "nome": "Birling Gap",
        "testo": "Una pequeña bahía del National Trust al final de las Seven Sisters, con las casitas de los guardacostas al borde del acantilado, el bar, la tienda y una escalera de 50 escalones que baja a la playa.",
        "come": "A pie desde los acantilados, en coche o en autobús: directo los domingos y festivos con el 13X, los demás días desde East Dean.",
        "quando": "Por la tarde, al final de la caminata.",
        "tempo": "1 hora",
        "costo": "gratuito; aparcamiento 2 £ por 1 hora, 4 £ por 2, 8 £ si es más (2026)",
        "orari": "Bar, tienda y aseos de 10 a 16; acantilados abiertos del amanecer al atardecer.",
        "lat": 50.7433,
        "lng": 0.2029,
        "url": "https://www.nationaltrust.org.uk/visit/sussex/birling-gap-and-the-seven-sisters",
        "consiglio": "El acceso a la playa puede cerrarse con poco aviso por los desprendimientos."
      },
      {
        "nome": "Belle Tout",
        "testo": "El antiguo faro sobre el acantilado entre Birling Gap y Beachy Head, desplazado hacia atrás en 1999 porque el borde se estaba acercando. Hoy es un B&B privado y se ve desde fuera.",
        "come": "A pie desde Birling Gap, por un circuito corto.",
        "quando": "Al atardecer.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 50.7384,
        "lng": 0.2146
      },
      {
        "nome": "Beachy Head",
        "testo": "El acantilado de creta más alto de Gran Bretaña, sobre Eastbourne, con el faro de rayas blancas y rojas abajo en el mar, al pie de la pared.",
        "come": "A pie desde Birling Gap o desde Eastbourne por el South Downs Way, o con el autobús 13X los domingos y festivos.",
        "quando": "Con el cielo despejado.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "lat": 50.7375,
        "lng": 0.2475
      },
      {
        "nome": "Alfriston",
        "testo": "Un pueblo del valle del Cuckmere, con casas de entramado de madera, pubs antiguos y la Clergy House, la primera propiedad que compró el National Trust, en 1896.",
        "come": "En coche, o en verano los fines de semana con el autobús 47 desde Seven Sisters Country Park.",
        "quando": "A la hora de comer.",
        "tempo": "2 horas",
        "costo": "el pueblo es gratuito",
        "lat": 50.808,
        "lng": 0.155
      },
      {
        "nome": "Friston Forest",
        "testo": "El hayedo sobre Exceat, con senderos para caminar y montar en bici y el pueblo de Westdean escondido entre los árboles. Es el refugio adecuado los días de viento.",
        "come": "A pie desde Seven Sisters Country Park, cruzando la carretera.",
        "quando": "Con viento fuerte en la costa.",
        "tempo": "1-2 horas",
        "costo": "gratuito",
        "lat": 50.7814,
        "lng": 0.1531
      }
    ],
    programmi: [
      {
        "titolo": "Media jornada",
        "tappe": [
          "Autobús hasta Seven Sisters Country Park",
          "A pie hasta Cuckmere Haven y vuelta"
        ]
      },
      {
        "titolo": "1 día",
        "tappe": [
          "Autobús hasta Seven Sisters Country Park y sendero junto al río hasta el mar",
          "Los acantilados hasta Birling Gap y la escalera a la playa",
          "Belle Tout, luego autobús desde Birling Gap o desde East Dean"
        ]
      },
      {
        "titolo": "1 día, recorrido completo",
        "tappe": [
          "Tren hasta Seaford y Seaford Head",
          "Cuckmere Haven, las Seven Sisters, Birling Gap",
          "Belle Tout, Beachy Head y Eastbourne: unos 22 kilómetros, solo para quien está entrenado"
        ]
      }
    ],
    zone: [
      {
        "nome": "Brighton",
        "perChi": "quien quiere ciudad por la noche",
        "testo": "A una hora en autobús del parque, con todos los servicios y los trenes a Londres."
      },
      {
        "nome": "Seaford",
        "perChi": "quien quiere salir a pie temprano",
        "testo": "Un pueblo tranquilo con estación, al principio del recorrido."
      },
      {
        "nome": "Eastbourne",
        "perChi": "quien termina en Beachy Head",
        "testo": "La ciudad costera al otro extremo de los acantilados, con los trenes a Londres Victoria."
      }
    ],
    gite: [
      {
        "nome": "Brighton",
        "distanza": "1 hora aproximadamente en autobús",
        "come": "Autobús 12 o 12X desde Seven Sisters Country Park.",
        "testo": "El Royal Pavilion, las Lanes y el Palace Pier."
      },
      {
        "nome": "Lewes",
        "distanza": "unos 30 minutos en coche",
        "come": "En coche, o en tren pasando por Seaford o por Brighton.",
        "testo": "La pequeña ciudad con el castillo normando y las cervecerías, al pie de los South Downs."
      }
    ],
    faq: [
      {
        "domanda": "¿Se pueden ver las Seven Sisters en un día desde Londres?",
        "risposta": "Sí: tren hasta Seaford o Brighton, luego a pie o en autobús hasta Seven Sisters Country Park, los acantilados hasta Birling Gap y el autobús a Eastbourne, desde donde salen los trenes a Londres."
      },
      {
        "domanda": "¿Cuál es la mejor vista de las Seven Sisters?",
        "risposta": "Desde Seaford Head, en la orilla oeste del Cuckmere, con las casitas de los guardacostas en primer plano. Desde Birling Gap se ven los acantilados desde abajo, desde la playa."
      },
      {
        "domanda": "¿Qué longitud tiene la caminata?",
        "risposta": "De Seven Sisters Country Park a Birling Gap hay unos 6 kilómetros con muchas subidas. El recorrido completo de Seaford a Eastbourne tiene unos 22 kilómetros."
      },
      {
        "domanda": "¿Es peligroso?",
        "risposta": "El sendero es fácil, pero los acantilados se desprenden: hay que caminar lejos del borde y no pararse debajo de las paredes en la playa."
      },
      {
        "domanda": "¿Cuánto cuesta aparcar?",
        "risposta": "En Seven Sisters Country Park de 3,50 libras por dos horas a 7 libras a partir de cuatro; en Birling Gap de 2 a 8 libras, gratis para los socios del National Trust (2026)."
      },
      {
        "domanda": "¿Merece la pena ir si llueve?",
        "risposta": "Mejor no: con lluvia y viento el sendero resbala y está expuesto, y los acantilados pierden la luz. Conviene elegir el día mirando el tiempo."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'Los acantilados blancos de las Seven Sisters vistos desde la playa de guijarros de Cuckmere Haven',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-03-seven-sisters.jpg',
  },
  {
    slug: 'kingston-richmond-park',
    paeseSlug: 'inghilterra',
    ordine: 11,
    nome: 'Kingston upon Thames y Richmond Park',
    tipologia: ['parchi', 'fiume', 'natura', 'cittadina'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    miaEsperienza:
      "Kingston upon Thames es donde estudié yo, y tiene un parque precioso. Y luego está Richmond Park.",
    introduzione:
      'El Támesis al suroeste de Londres, a media hora en tren de Waterloo: Kingston upon Thames, la antigua ciudad de mercado donde se coronaba a los reyes anglosajones, y Richmond Park, el mayor de los parques reales, con ciervos en libertad, bosques y la vista protegida desde Richmond Hill.',
    percheAndarci:
      'Para un día de verde y de río sin salir de Londres: se camina entre los ciervos, se mira St Paul\'s desde lejos y se termina en un pub junto al Támesis.',
    cosaVedere: [
      'La orilla del río en Kingston y el Kingston Bridge',
      'La Coronation Stone',
      'Richmond Park y los ciervos',
      'King Henry\'s Mound y la vista de St Paul\'s',
      'La Isabella Plantation',
      'La vista desde Richmond Hill',
    ],
    cosaFare: [
      'Cruzar Richmond Park a pie de Kingston a Richmond',
      'Una tarde en bici por el Tamsin Trail',
      'El paseo junto al Támesis de Richmond a Kingston',
    ],
    comeArrivare:
      'Desde Londres Waterloo los trenes de South Western Railway llegan a Richmond en menos de 20 minutos y a Kingston en una media hora. Richmond es también la terminal de la District line y del London Overground. Richmond está en la zona 4 y Kingston en la zona 6: se paga con la tarjeta contactless o la Oyster, como en el resto de Londres.',
    comeSpostarsi:
      'Entre Kingston y Richmond pasan los autobuses 65 y 371; el 371 para también en la Richmond Gate del parque. Dentro de Richmond Park se va a pie o en bici, con el alquiler Parkcycle en el aparcamiento de Roehampton Gate. Junto al Támesis, el sendero Thames Path une los dos pueblos en unos 9 kilómetros.',
    periodoMigliore: 'de abril a octubre; a finales de abril y principios de mayo florecen las azaleas de la Isabella Plantation, en otoño es la época de celo de los ciervos',
    costi:
      'Los parques son gratuitos; solo se pagan los transportes, los cafés y las mansiones como Hampton Court y Ham House. Quien duerme en Londres tiene el mismo presupuesto que en la ciudad.',
    erroriDaEvitare: [
      'Acercarse a los ciervos o darles de comer: hay que quedarse al menos a 50 metros',
      'Contar con las puertas abiertas de noche en noviembre y en febrero: con los sacrificios selectivos las puertas peatonales cierran de 20 a 7:30',
      'Llevar el perro suelto entre mayo y julio, cuando nacen las crías de los ciervos: tiene que ir con correa',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Richmond Park",
        "testo": "El mayor de los parques reales de Londres, unas 1.000 hectáreas, reserva natural nacional. Viven en él unos 630 ciervos rojos y gamos, en libertad desde 1637, cuando Carlos I lo cercó como coto de caza.",
        "come": "Por la Richmond Gate, en lo alto de Richmond Hill, o por la Kingston Gate. Se cruza a pie o en bici por las carreteras principales y por el Tamsin Trail.",
        "quando": "A primera hora de la mañana, cuando es más fácil ver los ciervos.",
        "tempo": "media jornada",
        "costo": "gratuito",
        "orari": "Puertas peatonales normalmente abiertas día y noche; durante los sacrificios selectivos, en noviembre y en febrero, abiertas de 7:30 a 20. Puertas para coches desde las 7:30 (las 7 con el horario de verano) hasta el atardecer.",
        "lat": 51.4433,
        "lng": -0.275,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park",
        "consiglio": "De los ciervos hay que quedarse al menos a 50 metros, sin tocarlos ni darles de comer. Entre septiembre y noviembre los machos están en celo y pueden embestir."
      },
      {
        "nome": "King Henry's Mound",
        "testo": "Un túmulo de la Edad del Bronce en los jardines de Pembroke Lodge, el punto más alto del parque. Desde aquí una ventana entre los árboles enmarca la cúpula de St Paul's, a más de quince kilómetros: es una vista protegida, y ningún edificio puede taparla.",
        "come": "A pie desde la Richmond Gate, en los jardines de Pembroke Lodge. Hay un catalejo fijo.",
        "quando": "Los días despejados.",
        "tempo": "15 minutos",
        "costo": "gratuito",
        "lat": 51.4449,
        "lng": -0.2948,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park/king-henrys-mound"
      },
      {
        "nome": "Pembroke Lodge",
        "testo": "Una villa georgiana en la loma del parque, cerca de la Richmond Gate, con el café, los salones de té y los jardines asomados al valle del Támesis.",
        "come": "A pie desde la Richmond Gate en pocos minutos.",
        "quando": "Para una pausa a mitad de recorrido.",
        "tempo": "1 hora",
        "costo": "entrada gratuita a los jardines",
        "orari": "Salones de té desde las 9 hasta poco antes del atardecer.",
        "lat": 51.4425,
        "lng": -0.2944
      },
      {
        "nome": "Isabella Plantation",
        "testo": "Un jardín en el bosque de unas 16 hectáreas, con arroyos, estanques y la colección nacional de azaleas Kurume. Abierto al público desde 1953, es el rincón más colorido del parque en primavera.",
        "come": "A pie desde la Kingston Gate o desde Pembroke Lodge. Los perros solo entran con correa.",
        "quando": "Entre finales de abril y principios de mayo, por las azaleas; en otoño por los colores.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "orari": "Abierto todo el año.",
        "lat": 51.4332,
        "lng": -0.2774,
        "url": "https://www.royalparks.org.uk/visit/parks/richmond-park/isabella-plantation"
      },
      {
        "nome": "Pen Ponds",
        "testo": "Los dos estanques en el centro del parque, excavados en el siglo XVIII, con aves acuáticas y un quiosco cerca. Alrededor se ven a menudo los ciervos.",
        "come": "A pie desde el centro del parque, por los senderos entre la hierba alta.",
        "quando": "Por la tarde.",
        "tempo": "30 minutos",
        "costo": "gratuito",
        "lat": 51.4396,
        "lng": -0.2686,
        "consiglio": "Alrededor de los estanques los perros tienen que ir con correa."
      },
      {
        "nome": "Richmond Hill y Terrace Gardens",
        "testo": "La colina sobre Richmond, con la vista de la curva del Támesis entre prados y bosques. Está protegida por una ley del Parlamento de 1902, y a menudo se dice que es la única vista protegida de esta manera. Los Terrace Gardens bajan desde la colina hasta el río.",
        "come": "A pie desde la Richmond Gate del parque, o cuesta arriba desde el centro de Richmond.",
        "quando": "Al atardecer.",
        "tempo": "45 minutos",
        "costo": "gratuito",
        "lat": 51.4541,
        "lng": -0.301,
        "url": "https://www.richmond.gov.uk/preserving_the_view_from_richmond_hill"
      },
      {
        "nome": "Richmond Bridge y la orilla del río",
        "testo": "El puente de piedra de cinco arcos sobre el Támesis, con los prados y los pubs de la orilla de Richmond. En verano hay barcas de alquiler y gente sentada en la hierba.",
        "come": "A pie desde la estación de Richmond en diez minutos.",
        "quando": "Por la noche, para tomar algo junto al río.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 51.4573,
        "lng": -0.3073
      },
      {
        "nome": "Ham House",
        "testo": "Una mansión del siglo XVII junto al Támesis, entre Richmond y Kingston, del National Trust, con los interiores de la época y los jardines formales.",
        "come": "A pie por el Thames Path desde Richmond, o con los autobuses 65 y 371 hasta Petersham.",
        "quando": "El fin de semana, cuando se recorre sin visita guiada.",
        "tempo": "2 horas",
        "costo": "de pago",
        "orari": "Casa de 11:30 a 15:30, jardín de 10 a 17; en noviembre, entre semana, solo con visita guiada.",
        "lat": 51.4442,
        "lng": -0.3142,
        "url": "https://www.nationaltrust.org.uk/visit/london/ham-house-and-garden"
      },
      {
        "nome": "La orilla del río en Kingston y el Kingston Bridge",
        "testo": "La orilla del Támesis alrededor del puente de Kingston, con pubs, barcas y el paseo hacia los Canbury Gardens al norte. Es el corazón del pueblo, a pocos minutos de la estación.",
        "come": "A pie desde la estación de Kingston.",
        "quando": "Por la tarde y por la noche.",
        "tempo": "1 hora",
        "costo": "gratuito",
        "lat": 51.4111,
        "lng": -0.3089
      },
      {
        "nome": "Coronation Stone",
        "testo": "Una piedra de sarsen delante del Guildhall de Kingston: según la tradición aquí fueron coronados siete reyes anglosajones, en el siglo X, entre ellos Athelstan. De aquí viene el nombre de Kingston, «ciudad del rey».",
        "come": "A pie desde el centro, junto al Guildhall.",
        "quando": "Al pasar por el centro.",
        "tempo": "15 minutos",
        "costo": "gratuito",
        "lat": 51.4084,
        "lng": -0.3068
      },
      {
        "nome": "Out of Order",
        "testo": "La escultura de David Mach de 1989: doce cabinas telefónicas rojas caídas una sobre otra como fichas de dominó, en Old London Road. Se ha convertido en uno de los símbolos de Kingston.",
        "come": "A pie desde el centro, hacia Norbiton.",
        "quando": "Al pasar por el centro.",
        "tempo": "10 minutos",
        "costo": "gratuito",
        "lat": 51.4108,
        "lng": -0.3005
      },
      {
        "nome": "Bushy Park y Hampton Court Palace",
        "testo": "Al otro lado del puente de Kingston está Bushy Park, el segundo parque real por tamaño, con unos 320 ciervos y la Diana Fountain en el centro de un estanque redondo. Al fondo está Hampton Court Palace, el palacio de Enrique VIII, con las cocinas Tudor y el laberinto.",
        "come": "A pie cruzando el Kingston Bridge y Bushy Park, o con los autobuses 111 y 216 desde Kingston hasta Hampton Court.",
        "quando": "Un día entero, si se añade el palacio.",
        "tempo": "media jornada",
        "costo": "Bushy Park gratuito; Hampton Court de pago",
        "lat": 51.4128,
        "lng": -0.3381,
        "url": "https://www.royalparks.org.uk/visit/parks/bushy-park"
      }
    ],
    programmi: [
      {
        "titolo": "Media jornada",
        "tappe": [
          "Tren de Waterloo a Richmond",
          "Subida a Richmond Hill y entrada por la Richmond Gate",
          "Pembroke Lodge y King Henry's Mound, luego vuelta a Richmond por el río"
        ]
      },
      {
        "titolo": "1 día",
        "tappe": [
          "Tren de Waterloo a Kingston: el río, la Coronation Stone y Out of Order",
          "Richmond Park desde la Kingston Gate, la Isabella Plantation, Pen Ponds y Pembroke Lodge",
          "Salida por la Richmond Gate, Richmond Hill, los Terrace Gardens y el Richmond Bridge",
          "Tren de Richmond a Waterloo"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Primer día como arriba",
          "Segundo día: Hampton Court Palace y Bushy Park, o Ham House y los jardines de Kew"
        ]
      }
    ],
    zone: [
      {
        "nome": "Richmond",
        "perChi": "quien quiere el río y el parque a la puerta de casa",
        "testo": "Elegante, con pubs junto al Támesis y trenes a Waterloo y la District line."
      },
      {
        "nome": "Kingston upon Thames",
        "perChi": "quien quiere un pueblo con vida",
        "testo": "Tiendas, restaurantes y la orilla del río, con Hampton Court y Bushy Park cerca."
      },
      {
        "nome": "Centro de Londres",
        "perChi": "quien hace la excursión en el día",
        "testo": "Desde Waterloo los trenes a Richmond y Kingston salen a menudo, y por la noche se vuelve a la ciudad."
      }
    ],
    gite: [
      {
        "nome": "Hampton Court Palace",
        "distanza": "pocos minutos en autobús desde Kingston",
        "come": "Autobús 111 o 216 desde Kingston, o a pie a través de Bushy Park.",
        "testo": "El palacio de Enrique VIII junto al Támesis, con las cocinas Tudor, los jardines y el laberinto de setos."
      },
      {
        "nome": "Kew Gardens",
        "distanza": "una parada después de Richmond",
        "come": "District line o London Overground hasta Kew Gardens.",
        "testo": "El jardín botánico Patrimonio de la UNESCO, con los grandes invernaderos victorianos."
      },
      {
        "nome": "Brighton",
        "distanza": "1 hora aproximadamente en tren desde Londres",
        "come": "Trenes Southern desde Victoria o Thameslink desde London Bridge.",
        "testo": "La ciudad costera, con el Royal Pavilion y el Palace Pier, y cerca los acantilados de las Seven Sisters."
      }
    ],
    faq: [
      {
        "domanda": "¿Cómo se llega a Richmond Park desde Londres?",
        "risposta": "En tren desde Waterloo, o con la District line y el London Overground, hasta Richmond; luego a pie o con el autobús 371 hasta la Richmond Gate. Desde Kingston se entra por la Kingston Gate."
      },
      {
        "domanda": "¿Hay que pagar para entrar en Richmond Park?",
        "risposta": "No, es gratuito. Solo se pagan los cafés y el alquiler de bicis."
      },
      {
        "domanda": "¿Dónde se ven los ciervos?",
        "risposta": "En todo el parque, sobre todo en los prados alrededor de Pen Ponds y hacia el centro, a primera hora de la mañana. Hay que quedarse al menos a 50 metros y no darles de comer."
      },
      {
        "domanda": "¿Qué es la vista desde King Henry's Mound?",
        "risposta": "Una ventana entre los árboles, en los jardines de Pembroke Lodge, que enmarca la cúpula de St Paul's a más de quince kilómetros. Está protegida: ningún edificio puede taparla."
      },
      {
        "domanda": "¿Richmond Park abre por la noche?",
        "risposta": "Las puertas peatonales suelen quedarse abiertas día y noche, pero en noviembre y en febrero, con los sacrificios selectivos de ciervos, cierran de 20 a 7:30. Los coches entran desde las 7:30 hasta el atardecer."
      },
      {
        "domanda": "¿Cuánto se tarda de Waterloo a Kingston?",
        "risposta": "Una media hora en tren de South Western Railway. A Richmond, menos de 20 minutos."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['brighton-seven-sisters'],
    imageAlt: 'Un ciervo rojo entre la hierba alta de Richmond Park, al suroeste de Londres',
    immagine: '/images/viaggi/brighton-seven-sisters/giorno-01-richmond-park.jpg',
  },
]
