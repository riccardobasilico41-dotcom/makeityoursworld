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
    introduzione:
      'La ciudad universitaria más antigua del mundo anglófono, con los colleges de piedra clara, las bibliotecas y los patios. Está entre Londres y los Cotswolds, y para en la misma línea de tren.',
    percheAndarci: 'Por los colleges, la Radcliffe Camera y la Bodleian, en una jornada a pie. Es también el sitio más cómodo para recoger el coche para los Cotswolds.',
    cosaVedere: ['Radcliffe Square y la Radcliffe Camera', 'La Bodleian Library', 'El Christ Church College', 'El Bridge of Sighs', 'El Ashmolean Museum'],
    cosaFare: ['Una vuelta por los colleges abiertos al público', 'Subir a un campanario para ver los tejados', 'Un paseo junto al río'],
    comeArrivare: 'En tren desde Londres Paddington.',
    comeSpostarsi: 'A pie: el centro es pequeño.',
    erroriDaEvitare: ['Llegar sin comprobar los horarios de los colleges: muchos abren solo a ciertas horas o cierran por exámenes y eventos'],
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
]
