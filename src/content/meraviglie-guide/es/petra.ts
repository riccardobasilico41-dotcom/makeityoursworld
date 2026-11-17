import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  prezzi:
    'Jordan Pass: 70 JOD (Jordan Wanderer, 1 día en Petra), 75 JOD (Jordan Explorer, 2 días consecutivos), 80 JOD (Jordan Expert, 3 días consecutivos). Sin pase, la entrada a Petra para extranjeros cuesta 50 JOD por 1 día, 55 JOD por 2 días y 60 JOD por 3 días; 90 JOD para quien visita Petra en el día sin pernoctar en Jordania. Petra by Night cuesta 30 JOD por persona, gratis para menores de 10 años, y no está incluido en ninguna versión del Jordan Pass.',
  luoghi: [
    {
      nome: 'El Siq y el Tesoro (Al-Khazneh)',
      testo:
        'El Siq es el desfiladero natural de unos 1,2 km que lleva a la ciudad, entre paredes de arenisca de hasta 180 metros de altura y, en algunos puntos, de apenas 3 metros de ancho. Al final se estrecha y muestra de golpe la fachada del Tesoro, de unos 37 metros de altura y tallada en la roca. Es el momento que todos esperan, y funciona aunque se sepa de antemano.',
      come: 'Del centro de visitantes al Tesoro se camina entre media hora y una hora, según el ritmo. El primer tramo, antes del Siq, se puede hacer a caballo.',
      quando: 'A primerísima hora, cuando el Siq está vacío; el sol llega a la fachada del Tesoro a media mañana.',
      tempo: '45 minutos',
      costo:
        '50 JOD (unos 60 €) por 1 día, 55 JOD (unos 67 €) por 2 y 60 JOD (unos 73 €) por 3 para quien duerme al menos una noche en Jordania; 90 JOD (unos 109 €) en el día sin pernoctar (2026). Incluido en el Jordan Pass.',
      orari: 'Todos los días desde las 6; cierre a las 17, en invierno incluso hacia las 16 (2026).',
      lat: 30.32208,
      lng: 35.45154,
      url: 'https://international.visitjordan.com/page/17/Entrance-Fees',
    },
    {
      nome: 'Calle de las Fachadas y Teatro',
      testo:
        'Pasado el Tesoro, el valle se abre a hileras de tumbas excavadas en la pared, con las fachadas escalonadas típicas de los nabateos. Un poco más adelante está el teatro, tallado directamente en la roca, con capacidad para unas 8.500 personas.',
      come: 'A pie desde el Tesoro, todo en llano.',
      quando: 'Por la mañana, siguiendo desde el Tesoro.',
      tempo: '1 hora',
      costo: 'Incluido en la entrada de Petra y en el Jordan Pass',
      orari: 'Con el recinto, de las 6 al cierre.',
      lat: 30.32398,
      lng: 35.44769,
    },
    {
      nome: 'Tumbas Reales',
      testo:
        'Un grupo de tumbas monumentales excavadas en la montaña de Al-Khubtha: la Tumba de la Urna, la Tumba de la Seda, la Tumba Corintia y la Tumba del Palacio. En la Tumba de la Urna se sube y se entra en la gran sala, donde las vetas de la roca parecen pintadas.',
      come: 'A pocos minutos a pie del teatro, con algunos escalones para subir a las fachadas.',
      quando: 'Por la tarde, cuando la luz baja enciende de rojo las paredes.',
      tempo: '45 minutos',
      costo: 'Incluido en la entrada de Petra y en el Jordan Pass',
      orari: 'Con el recinto, de las 6 al cierre.',
      lat: 30.32755,
      lng: 35.44926,
    },
    {
      nome: 'Calle columnada y Gran Templo',
      testo:
        'El cardo romano enlosado que cruza el fondo del valle, con las columnas aún en pie a un lado y los restos de los mercados. Encima, a la izquierda, el Gran Templo: un complejo nabateo en terrazas con un pequeño teatro interior, una de las mayores estructuras construidas, y no excavadas, de la ciudad.',
      come: 'A pie después del teatro y las Tumbas Reales, en llano. Al Gran Templo se sube por una escalinata.',
      quando: 'A media mañana, de camino al Monasterio.',
      tempo: '45 minutos',
      costo: 'Incluido en la entrada de Petra y en el Jordan Pass',
      orari: 'Con el recinto, de las 6 al cierre.',
      lat: 30.32912,
      lng: 35.44326,
    },
    {
      nome: 'Qasr al-Bint',
      testo:
        'El templo principal de la ciudad nabatea, uno de los pocos edificios de mampostería que se conservan, todavía con más de 20 metros de altura. Cierra la calle columnada y marca el inicio de la subida al Monasterio; aquí están también los dos restaurantes del valle y los baños.',
      come: 'A pie al final de la calle columnada, a unos 4 km de la entrada.',
      quando: 'A la hora de comer, como pausa antes del Monasterio.',
      tempo: '20-30 minutos',
      costo: 'Incluido en la entrada de Petra y en el Jordan Pass',
      orari: 'Con el recinto, de las 6 al cierre.',
      lat: 30.3295,
      lng: 35.4401,
    },
    {
      nome: 'El Monasterio (Ad-Deir)',
      testo:
        'La fachada más grande de Petra, de unos 45 metros de alto y 50 de ancho, más maciza y sobria que el Tesoro. Se llega por un sendero de más de 800 escalones tallados en la roca, y enfrente hay un quiosco para tomar un té a la menta mirando el monumento.',
      come: 'Se sale del fondo del valle, pasado el Qasr al-Bint: 40-45 minutos de subida empinada. Por el camino hay puestos y algún rincón de sombra.',
      quando: 'Después del mediodía, cuando el sol da en la fachada; por la mañana está en sombra.',
      tempo: '2-2,5 horas ida y vuelta',
      costo: 'Incluido en la entrada de Petra y en el Jordan Pass',
      orari: 'Con el recinto; en invierno conviene empezar la subida antes de las 14 para no bajar de noche.',
      lat: 30.33821,
      lng: 35.43098,
      consiglio: 'Calzado de trekking y agua. Los burros que ofrecen para la subida suelen estar en malas condiciones: mejor subir a pie.',
    },
    {
      nome: 'Alto Lugar del Sacrificio (Al-Madbah)',
      testo:
        'Un área ceremonial en la cima del Jebel Madbah, con el altar y dos obeliscos tallados en la roca. El sendero sube en escalones desde la zona del teatro y regala una vista desde arriba del centro de Petra que desde el fondo del valle no se imagina.',
      come: 'Se sube a pie desde la Calle de las Fachadas, unos 45 minutos de escalones. Se puede bajar por la otra vertiente, por el Wadi Farasa, pasando por la Fuente del León y la Tumba del Soldado Romano, y salir cerca del Qasr al-Bint.',
      quando: 'A primera hora o el segundo día de visita; en verano nunca en las horas centrales.',
      tempo: '2-3 horas con la bajada por el Wadi Farasa',
      costo: 'Incluido en la entrada de Petra y en el Jordan Pass',
      orari: 'Con el recinto, de las 6 al cierre.',
      lat: 30.32148,
      lng: 35.44699,
    },
    {
      nome: 'Mirador de Al-Khubtha sobre el Tesoro',
      testo:
        'El sendero que sube al macizo del Jebel al-Khubtha, sobre las Tumbas Reales, hasta un mirador que contempla el Tesoro desde arriba. Es la clásica vista de Petra desde lo alto, y cuesta menos esfuerzo que el Monasterio.',
      come: 'Se sale de las Tumbas Reales, por el lado de la Tumba de la Urna: alrededor de una hora de subida por escalones y roca. Arriba, una tienda beduina cobra unos pocos dinares por asomarse.',
      quando: 'Por la mañana, cuando el sol ilumina la fachada del Tesoro.',
      tempo: '2-2,5 horas ida y vuelta',
      costo: 'Incluido en la entrada de Petra, más unos pocos dinares en el mirador',
      orari: 'Con el recinto, de las 6 al cierre.',
    },
    {
      nome: 'Petra by Night',
      testo:
        'El Siq recorrido a oscuras, iluminado por cientos de velas, hasta el Tesoro, donde se escucha música beduina sentados en el suelo. Es una experiencia de ambiente más que una visita, pero el Tesoro a la luz de las velas es una imagen que se queda.',
      come: 'Salida desde el centro de visitantes de Wadi Musa y caminata en grupo hasta el Tesoro. Hace falta también la entrada de día o el Jordan Pass; no se reserva.',
      quando: 'Solo algunas noches por semana, a confirmar en el centro de visitantes o en el hotel; mejor la noche anterior o posterior al día completo.',
      tempo: '2 horas',
      costo: '30 JOD (unos 36 €), gratis para menores de 10 años (2026); no incluido en el Jordan Pass',
      orari: 'De 20.30 a 22.30 aproximadamente, las noches en que se celebra.',
      lat: 30.32208,
      lng: 35.45154,
      url: 'https://visitpetra.jo/en/Event/25',
      consiglio: 'Llegar pronto al centro de visitantes para ir a la cabeza del grupo: las primeras filas encuentran el Siq en silencio.',
    },
    {
      nome: 'Museo de Petra',
      testo:
        'El museo abierto en 2019 junto al centro de visitantes, con estatuas, cerámicas, joyas e inscripciones halladas en el recinto. En una hora explica quiénes eran los nabateos y cómo vivían, algo que entre las fachadas de roca no resulta evidente.',
      come: 'En la entrada de Petra, en Wadi Musa, antes de los tornos.',
      quando: 'La tarde de llegada, o al volver de la visita en las horas de calor.',
      tempo: '1 hora',
      costo: 'Incluido en la entrada de Petra',
      lat: 30.32532,
      lng: 35.46784,
    },
    {
      nome: 'Pequeña Petra (Siq al-Barid)',
      testo:
        'Un pequeño cañón a unos 8 km al norte de Wadi Musa, con viviendas excavadas en la arenisca, salas de banquete nabateas y una gran cisterna. En el Biclinio Pintado se conservan frescos en buen estado, raros en todo el mundo nabateo. Es más tranquila que Petra y sirve de anticipo en miniatura.',
      come: 'En taxi o en coche desde Wadi Musa, alrededor de un cuarto de hora. El cañón se recorre a pie.',
      quando: 'Por la tarde, cuando la luz baja calienta la arenisca; perfecta el día antes de Petra.',
      tempo: '1,5-2 horas',
      costo: 'Entrada libre',
      orari: 'De día.',
      lat: 30.37408,
      lng: 35.44803,
    },
  ],
  programmi: [
    {
      titolo: 'Medio día',
      tappe: [
        'Entrada a la apertura, a las 6',
        'El Siq y el Tesoro con poca gente',
        'Calle de las Fachadas y teatro',
        'Tumbas Reales y vuelta por el Siq',
      ],
    },
    {
      titolo: '1 día',
      tappe: [
        'Entrada a la apertura: el Siq y el Tesoro',
        'Calle de las Fachadas, teatro y Tumbas Reales',
        'Calle columnada y Gran Templo',
        'Comida cerca del Qasr al-Bint',
        'Subida al Monasterio a primera hora de la tarde, con el sol en la fachada',
        'Vuelta por el Siq hacia la hora de cierre',
      ],
    },
    {
      titolo: '2-3 días',
      tappe: [
        'Día 1: Pequeña Petra por la tarde y Museo de Petra; por la noche Petra by Night, si es una de las noches previstas',
        'Día 2: el Siq, el Tesoro, las Tumbas Reales, la calle columnada y el Monasterio',
        'Día 3: mirador de Al-Khubtha sobre el Tesoro por la mañana y después el Alto Lugar del Sacrificio con bajada por el Wadi Farasa',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Petra, 1 día',
      prezzo: '50 JOD (unos 60 €)',
      include: 'Entrada al recinto y al Museo de Petra, para quien duerme al menos una noche en Jordania',
      dove: 'Taquilla del centro de visitantes de Wadi Musa',
    },
    {
      tipo: 'Petra, 2 días consecutivos',
      prezzo: '55 JOD (unos 67 €)',
      include: 'Entrada dos días seguidos',
      dove: 'Taquilla del centro de visitantes',
    },
    {
      tipo: 'Petra, 3 días consecutivos',
      prezzo: '60 JOD (unos 73 €)',
      include: 'Entrada tres días seguidos',
      dove: 'Taquilla del centro de visitantes',
    },
    {
      tipo: 'Petra en el día sin pernoctar',
      prezzo: '90 JOD (unos 109 €)',
      include: 'Entrada de un día para quien no duerme en Jordania, por ejemplo llegando desde Eilat o en crucero',
      dove: 'Taquilla del centro de visitantes',
    },
    {
      tipo: 'Jordan Pass',
      prezzo: '70, 75 u 80 JOD (unos 85, 91 o 97 €)',
      include: 'Petra durante 1, 2 o 3 días según la versión, más de 40 lugares del país y la tasa del visado para estancias de al menos 3 noches',
      dove: 'Online en jordanpass.jo, antes de llegar',
    },
    {
      tipo: 'Petra by Night',
      prezzo: '30 JOD (unos 36 €)',
      include: 'El Siq y el Tesoro iluminados con velas, con música; gratis para menores de 10 años. No incluido en el Jordan Pass',
      dove: 'Centro de visitantes, la misma noche',
    },
  ],
  mesi: [
    { voto: 3, folla: 'bassa', nota: 'Mañanas frías, días cortos y cierre hacia las 16; poca gente en el Siq.' },
    { voto: 3, folla: 'bassa', nota: 'Fresco, con posibles lluvias. En 2027 el Ramadán empieza en febrero: en Wadi Musa algunos locales abren solo tras la puesta de sol.' },
    { voto: 4, folla: 'media', nota: 'El Ramadán termina en los primeros días del mes; buenas temperaturas para caminar.' },
    { voto: 5, folla: 'alta', nota: 'Clima ideal y días largos: el mes más solicitado, conviene entrar a las 6.' },
    { voto: 4, folla: 'media', nota: 'Hace calor a partir de las 10; la subida al Monasterio, temprano o a última hora de la tarde.' },
    { voto: 2, folla: 'bassa', nota: 'Calor fuerte y poca sombra en todo el recorrido.' },
    { voto: 2, folla: 'bassa', nota: 'El mes más caluroso: visita solo al amanecer y al atardecer.' },
    { voto: 2, folla: 'media', nota: 'Todavía mucho calor; vuelven los grupos de las vacaciones de verano.' },
    { voto: 3, folla: 'media', nota: 'Las temperaturas bajan en la segunda mitad del mes.' },
    { voto: 5, folla: 'alta', nota: 'El mejor equilibrio entre clima y luz, con muchos grupos organizados.' },
    { voto: 5, folla: 'media', nota: 'Días frescos y despejados, menos gente.' },
    { voto: 3, folla: 'media', nota: 'Frío por la noche y alguna lluvia; más gente entre Navidad y Año Nuevo.' },
  ],
  zone: [
    {
      nome: 'Wadi Musa',
      perChi: 'quien quiere entrar a la apertura',
      testo: 'El pueblo bajo la entrada, con hoteles de todas las categorías y restaurantes. A pocos minutos del recinto a pie o en lanzadera.',
      fascia: '40-180 €',
    },
    {
      nome: 'Pequeña Petra / Beidha',
      perChi: 'quien busca silencio',
      testo: 'Campamentos y casas de huéspedes cerca del cañón de la Pequeña Petra, más aislados y con poco ambiente por la noche. Hace falta coche o taxi para llegar a la entrada de Petra.',
      fascia: '50-150 €',
    },
    {
      nome: 'Taybeh',
      perChi: 'quien viaja en coche y busca vistas',
      testo: 'El pueblo en la colina al sur de Wadi Musa, con algunos hoteles en lo alto del valle y atardeceres amplios. A un cuarto de hora en coche de la entrada del recinto.',
      fascia: '60-150 €',
    },
  ],
  gite: [
    {
      nome: 'Wadi Rum',
      distanza: '1 hora y media en coche, unos 110 km',
      come: 'Traslado, taxi o coche de alquiler hacia el sur por la Desert Highway; dentro del desierto se entra con los jeeps de los campamentos beduinos.',
      testo: 'El valle de arena roja y torres de arenisca de Lawrence de Arabia. Mejor quedarse una noche en tienda que hacer ida y vuelta en el día.',
      link: '/destinazioni/giordania/wadi-rum',
    },
    {
      nome: 'Castillo de Karak',
      distanza: '2-2,5 horas en coche por la King\'s Highway',
      come: "En coche o traslado hacia el norte por la King's Highway; se combina con la llegada desde Amán o el mar Muerto.",
      testo: 'La gran fortaleza cruzada en la meseta, con pasillos abovedados, salas subterráneas y adarves sobre las murallas. Incluida en el Jordan Pass.',
      link: '/destinazioni/giordania/karak-monte-nebo',
    },
    {
      nome: 'Reserva de Dana',
      distanza: '1 hora y media en coche, unos 70 km',
      come: "En coche por la King's Highway hasta el pueblo de Dana; los senderos se hacen a pie, algunos con guía de la reserva.",
      testo: 'La mayor reserva natural de Jordania, con un pueblo de piedra al borde de un valle que baja hacia el Wadi Araba. Buena para un día de caminata después de los yacimientos.',
    },
    {
      nome: 'Áqaba y el mar Rojo',
      distanza: '2 horas en coche, unos 125 km',
      come: 'Traslado, taxi o coche por la Desert Highway; normalmente se pasa por Wadi Rum.',
      testo: 'Esnórquel en los arrecifes de coral y playa después de días de desierto: la última etapa natural de un recorrido desde Petra hacia el sur.',
      link: '/destinazioni/giordania/aqaba',
    },
  ],
  faq: [
    {
      domanda: '¿Cuántos días hacen falta en Petra?',
      risposta: 'Un día completo basta para el Siq, el Tesoro, las Tumbas Reales y el Monasterio, entrando a la apertura. Con dos días se añaden el Alto Lugar del Sacrificio, el mirador de Al-Khubtha y la Pequeña Petra sin prisas.',
    },
    {
      domanda: '¿Compensa el Jordan Pass para Petra?',
      risposta: 'Casi siempre sí para estancias de al menos tres noches: desde 70 JOD incluye Petra (50 JOD sola) y la tasa del visado, además de Jerash, Wadi Rum y decenas de lugares más. Hay que comprarlo online antes de llegar.',
    },
    {
      domanda: '¿Se puede visitar Petra en el día desde Amán o Áqaba?',
      risposta: 'Se puede, con más de tres horas de carretera desde Amán y unas dos desde Áqaba, pero se llega cuando el Siq ya está lleno. Dormir en Wadi Musa permite entrar a las 6, que es la verdadera ventaja.',
    },
    {
      domanda: '¿Merece la pena Petra by Night?',
      risposta: 'Sí, como experiencia de ambiente: solo se ven el Siq y el Tesoro iluminados con velas. Cuesta 30 JOD, no está en el Jordan Pass y solo se celebra algunas noches por semana.',
    },
    {
      domanda: '¿Cuánto se camina en Petra?',
      risposta: 'De la entrada al Qasr al-Bint hay unos 4 km, y el Monasterio añade más de 800 escalones: en un día completo se hacen 15-20 km. Hacen falta calzado de trekking, agua y sombrero, también en invierno.',
    },
    {
      domanda: '¿Conviene subir al Monasterio en burro?',
      risposta: 'Mejor no: los animales suelen trabajar en malas condiciones y el precio tiende a subir al final del trayecto. A pie, la subida lleva 40-45 minutos con alguna parada.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/petra-tesoro-facciata-riccardo.jpg',
      alt: 'La fachada completa del Tesoro de Petra, con el frontón y los dos órdenes de columnas tallados en la roca rosa',
    },
    {
      src: '/images/giordania/petra-siq-riccardo.jpg',
      alt: 'Dos pequeñas figuras caminan por el Siq de Petra entre paredes de roca altísimas',
    },
    {
      src: '/images/giordania/petra-tesoro-cammello-riccardo.jpg',
      alt: 'Primer plano de un camello enjaezado delante de las columnas del Tesoro de Petra',
    },
    {
      src: '/images/giordania/petra-tesoro-colonne-riccardo.jpg',
      alt: 'Las columnas corintias y el portal oscuro del Tesoro de Petra con la luz rosada de la mañana',
    },
    {
      src: '/images/giordania/little-petra-facciata-riccardo.jpg',
      alt: 'Una fachada nabatea con columnas tallada en la arenisca de la Pequeña Petra, entre rocas erosionadas',
    },
  ],
  destinazione: 'giordania/petra',
}
