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
    visitataPersonalmente: false,
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
      'Vuelos directos desde Italia a Heathrow, Gatwick, Stansted, Luton y London City. Desde Heathrow se llega al centro en metro o con la Elizabeth line.',
    comeSpostarsi:
      'Metro y autobús pagando con la tarjeta contactless o con la Oyster: se usa siempre la misma tarjeta, y el gasto tiene un tope diario. En el centro muchas distancias se hacen a pie. El coche no hace falta: en la zona central se paga la Congestion Charge, 18 libras al día (2026).',
    periodoMigliore: 'todo el año; de mayo a septiembre los días son más largos',
    costi: 'Dormir es caro. Los grandes museos nacionales son gratuitos; la Torre de Londres y las atracciones privadas son de pago.',
    erroriDaEvitare: [
      'Alquilar el coche en Londres: entre el tráfico, la Congestion Charge y los aparcamientos, conviene recogerlo solo para los Cotswolds',
      'Comprar billetes sencillos de metro: con la tarjeta contactless se paga menos',
      'Meter demasiadas cosas en un día: las distancias entre un barrio y otro son grandes',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Westminster',
        testo:
          'El Palacio de Westminster, sede del Parlamento, con la torre del reloj que todos llaman Big Ben, y enfrente la Abadía de Westminster, donde se corona a los soberanos. A pocos minutos están Downing Street, Whitehall y St James\'s Park, que lleva a Buckingham Palace.',
        come: 'Metro hasta Westminster. El puente de Westminster es el punto desde el que mejor se ve el Parlamento.',
        quando: 'Al atardecer, desde el puente o desde la orilla sur.',
        tempo: 'medio día',
      },
      {
        nome: 'British Museum',
        testo:
          'Uno de los museos más grandes del mundo, con la Piedra de Rosetta, los mármoles del Partenón y las colecciones egipcias. La Great Court, el patio cubierto por la bóveda de cristal, ya vale por sí sola la entrada, que es gratuita.',
        come: 'Metro hasta Tottenham Court Road o Holborn. Conviene elegir pocas salas en lugar de verlo todo.',
        quando: 'A la apertura, antes que los grupos.',
        tempo: '3 horas',
        url: 'https://www.britishmuseum.org',
      },
      {
        nome: 'La Torre de Londres y el Tower Bridge',
        testo:
          'La fortaleza sobre el Támesis, nacida con Guillermo el Conquistador, donde se guardan las joyas de la Corona. Al lado está el Tower Bridge, el puente de las dos torres, que se cruza a pie.',
        come: 'Metro hasta Tower Hill. La Torre es de pago: las entradas se compran en la web de Historic Royal Palaces.',
        quando: 'A primera hora de la mañana para las joyas de la Corona, que tienen la cola más larga.',
        tempo: 'medio día',
        url: 'https://www.hrp.org.uk/tower-of-london/',
      },
      {
        nome: 'South Bank y Tate Modern',
        testo:
          'La orilla sur del Támesis, peatonal de Westminster al Tower Bridge. Se pasa por el London Eye, por el Millennium Bridge con la vista de St Paul\'s y por la Tate Modern, el museo de arte moderno en una antigua central eléctrica. Un poco más allá está el Borough Market.',
        come: 'A pie junto al río.',
        quando: 'Por la tarde, hasta el atardecer.',
        tempo: 'medio día',
      },
      {
        nome: 'South Kensington',
        testo:
          'El barrio de los museos: el Natural History Museum, con las galerías gratuitas, el Victoria and Albert Museum y el Science Museum, uno al lado del otro. Desde aquí se entra en Hyde Park y en los Kensington Gardens.',
        come: 'Metro hasta South Kensington. En el Natural History Museum se puede reservar online la entrada gratuita, útil los fines de semana y en las vacaciones escolares.',
        quando: 'En un día de lluvia.',
        tempo: 'medio día',
        url: 'https://www.nhm.ac.uk/visit.html',
      },
      {
        nome: 'Notting Hill',
        testo: 'Las casas de color pastel, las mews, antiguas caballerizas convertidas en casas, y el mercado de Portobello Road, con antigüedades y comida callejera.',
        come: 'Metro hasta Notting Hill Gate.',
        quando: 'El sábado, cuando el mercado está completo.',
        tempo: '2-3 horas',
        consiglio: 'Muchas casas están habitadas: se fotografían desde la calle, sin subir a los escalones.',
      },
    ],
    programmi: [
      { titolo: '2 días', tappe: ['Día 1: Westminster, St James\'s Park y Buckingham Palace, luego el South Bank', 'Día 2: British Museum, Covent Garden, la Torre y el Tower Bridge'] },
      {
        titolo: '4 días',
        tappe: [
          'Día 1: Westminster y el río',
          'Día 2: British Museum, Covent Garden y el West End',
          'Día 3: la Torre, el Tower Bridge, el Borough Market y la Tate Modern',
          'Día 4: Notting Hill, Hyde Park y South Kensington',
        ],
      },
    ],
    zone: [
      { nome: 'South Bank y Southwark', perChi: 'quien quiere hacerlo todo a pie', testo: 'En la orilla sur, cerca del río, del Borough Market y de Westminster.' },
      { nome: 'Bloomsbury', perChi: 'quien quiere el centro con precios algo más bajos', testo: 'Cerca del British Museum y de las estaciones de King\'s Cross y Euston.' },
      { nome: 'Paddington', perChi: 'quien sigue hacia Oxford, los Cotswolds o Bath', testo: 'Los trenes hacia el oeste salen de aquí, y está la Elizabeth line para Heathrow.' },
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
    visitataPersonalmente: false,
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
      'En tren desde Londres Paddington por la línea que pasa por Oxford, Charlbury y Kingham hasta Moreton-in-Marsh, en hora y media aproximadamente hasta Moreton (tiempo orientativo). O en coche, recogiéndolo en Oxford.',
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
        nome: 'Bibury y Arlington Row',
        testo: 'Una hilera de cottages de piedra nacidos en 1380 como almacén de lana de un monasterio y convertidos a finales del siglo XVII en casas de tejedores. Es una de las imágenes más conocidas de los Cotswolds.',
        come: 'En coche, con aparcamiento limitado en el pueblo.',
        quando: 'Temprano por la mañana o al final de la tarde.',
        tempo: '1 hora',
      },
      {
        nome: 'Bourton-on-the-Water',
        testo: 'El pueblo con el río Windrush bajo y ancho, cruzado por pequeños puentes de piedra. Es el más concurrido de la zona.',
        come: 'En coche, con aparcamientos de pago en los bordes del centro.',
        quando: 'A primera hora de la mañana o en un día laborable.',
        tempo: '1-2 horas',
      },
      {
        nome: 'Lower Slaughter y Upper Slaughter',
        testo: 'Dos pueblos diminutos a lo largo de un arroyo, unidos por un sendero entre prados. Son lo contrario de Bourton: silenciosos.',
        come: 'A pie de un pueblo al otro, ida y vuelta.',
        quando: 'Por la mañana o a última hora de la tarde.',
        tempo: '1-2 horas con la caminata',
      },
      {
        nome: 'Stow-on-the-Wold',
        testo: 'Un pueblo de mercado en lo alto de una colina, con la plaza, las tiendas de antigüedades y la iglesia de St Edward, con la puerta entre dos tejos que muchos relacionan con el mundo de Tolkien.',
        come: 'En coche o a pie desde los Slaughter.',
        tempo: '1-2 horas',
      },
      {
        nome: 'Chipping Campden y Broadway',
        testo: 'Los Cotswolds del norte. Chipping Campden tiene una calle principal de casas de piedra, con el antiguo mercado cubierto. Broadway es más grande, con la torre en lo alto de la colina.',
        come: 'En coche, al norte de Stow.',
        tempo: 'medio día',
      },
      {
        nome: 'Castle Combe',
        testo: 'Un pueblo de Wiltshire, en el extremo sur de los Cotswolds, con las casas de piedra alrededor de la antigua cruz del mercado y el puente sobre el arroyo. Está de camino a Bath.',
        come: 'En coche, dejándolo en el aparcamiento de encima del pueblo y bajando a pie.',
        quando: 'Por la mañana.',
        tempo: '1 hora',
      },
    ],
    programmi: [
      { titolo: '1 día', tappe: ['Bibury a primera hora de la mañana', 'Bourton-on-the-Water', 'Caminata entre Lower y Upper Slaughter', 'Stow-on-the-Wold'] },
      { titolo: '2 días', tappe: ['Día 1: como arriba', 'Día 2: Chipping Campden y Broadway, o Castle Combe de camino a Bath'] },
    ],
    zone: [
      { nome: 'Stow-on-the-Wold y alrededores', perChi: 'quien se mueve en coche', testo: 'En el centro de la zona, a pocos minutos de Bourton, de los Slaughter y de Moreton-in-Marsh.' },
      { nome: 'Moreton-in-Marsh', perChi: 'quien llega en tren', testo: 'Tiene estación en la línea de Londres y algunos autobuses a los pueblos cercanos.' },
    ],
    sapori: [
      { nome: 'Cream tea', testo: 'Té con scones, nata y mermelada, en los salones de té de los pueblos.' },
      { nome: 'Pub de pueblo', testo: 'Comida con platos de temporada y cervezas locales, a menudo en edificios de piedra de varios siglos.' },
    ],
    attenzioni: [
      'Carreteras de campo estrechas, con setos altos y poca visibilidad: se conduce por la izquierda y despacio.',
      'En Arlington Row se fotografía desde la calle, sin entrar en los jardines.',
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
    visitataPersonalmente: false,
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
    visitataPersonalmente: false,
    introduzione:
      'Una ciudad de piedra dorada construida alrededor de los manantiales calientes, con las termas romanas, la abadía y los edificios georgianos del siglo XVIII. Es Patrimonio de la UNESCO.',
    percheAndarci: 'Por las termas romanas, los crescents georgianos y el final natural de un viaje por los Cotswolds, antes de volver a Londres en tren.',
    cosaVedere: ['Las Roman Baths', 'La Abadía de Bath', 'El Royal Crescent y el Circus', 'El Pulteney Bridge'],
    cosaFare: ['Visitar las termas romanas a primera hora de la mañana', 'Caminar del Circus al Royal Crescent', 'Un baño en las termas modernas de la ciudad'],
    comeArrivare: 'En tren desde Londres Paddington, o en coche desde los Cotswolds pasando por Castle Combe.',
    comeSpostarsi: 'A pie.',
    erroriDaEvitare: ['Llegar a las Roman Baths a mediodía sin entrada: conviene reservarla online en la web oficial'],
    esperienzeSlugs: [],
    tripSlugs: ['londra-cotswolds'],
    imageAlt: 'La terraza de las termas romanas de Bath con las estatuas de los emperadores y, detrás, la torre de la abadía',
    immagine: `${IMG}/giorno-08-bath.webp`,
  },
]
