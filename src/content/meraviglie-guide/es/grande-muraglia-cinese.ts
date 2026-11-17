import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'cina/pechino',
  prezzi:
    'Entrada a la Muralla (2026): Badaling 40 yuanes de abril a octubre y 35 de noviembre a marzo (unos 5 €); Mutianyu 45 yuanes (unos 5,5 €), con lanzadera, teleférico, telesilla y tobogán aparte; Juyongguan 40 y 35 yuanes; Huanghuacheng 60 yuanes (unos 7 €); Jinshanling 65 yuanes de abril a octubre y 55 de noviembre a marzo (unos 7-8 €), teleférico 40 yuanes solo ida; Simatai 40 yuanes de día y 200 yuanes (unos 24 €) para la visita nocturna, más 140 yuanes (unos 17 €) para Gubei Water Town. En Badaling, Juyongguan y Mutianyu los menores de 18 años con pasaporte tienen descuento o entrada gratuita; los remontes se pagan a precio completo por encima de 1,2 metros de altura.',
  luoghi: [
    {
      nome: 'Mutianyu',
      testo:
        'El tramo restaurado más bonito cerca de Pekín: una cresta cubierta de bosque, con 20 torres de vigilancia abiertas a la visita y la muralla que continúa hacia Jiankou. Tiene menos gente que Badaling y ofrece tres formas de subir: a pie, en teleférico o en telesilla, con el tobogán para bajar al valle.',
      come:
        'Desde el centro de servicios sale una lanzadera que en unos 3 km lleva al pie de la muralla. Desde allí se sube a pie por dos senderos de unos 1.100 escalones (40 minutos), o con la telecabina hasta la torre 14 o con la telesilla, que va emparejada con el tobogán. Teleférico y tobogán son de dos empresas distintas y los billetes no sirven de una a otra.',
      quando: 'A la hora de apertura en un día laborable. En otoño el bosque se vuelve rojo y amarillo; en algunas épocas también abre por la noche en las torres 10-15.',
      tempo: 'Media jornada, 3-4 horas en el lugar',
      costo:
        'Entrada 45 yuanes, unos 5,5 €; reducida 25 yuanes para menores extranjeros de 6 a 18 años; lanzadera, teleférico, telesilla y tobogán aparte (2026)',
      orari:
        'Del 16 de marzo al 15 de noviembre 7:30-18:00 de lunes a viernes, 7:30-18:30 sábados y domingos; del 16 de noviembre al 15 de marzo 8:00-17:30. Taquilla hasta una hora antes del cierre, entrada hasta media hora antes',
      url: 'https://www.mutianyugreatwall.com/',
      lat: 40.43802,
      lng: 116.5619,
      consiglio:
        'Billetes nominativos en línea hasta 30 días antes, uno por pasaporte y día: en la entrada basta con el pasaporte original, sin recoger nada.',
    },
    {
      nome: 'Badaling',
      testo:
        'El tramo más famoso y el primero abierto a los visitantes, a 60 km al noroeste de Pekín, en el distrito de Yanqing. Está restaurado casi por completo, con pasarelas anchas y barandillas, y dividido en un ramal norte y uno sur. Los fines de semana y en las fiestas chinas se convierte en el más concurrido del país.',
      come:
        'En tren de alta velocidad por la línea Pekín-Zhangjiakou hasta la estación Badaling Great Wall, o en coche. Para subir hay un teleférico en el ramal norte y un funicular en el ramal sur.',
      quando: 'A primera hora de un día laborable; en invierno, con nieve, está casi vacía.',
      tempo: '2-3 horas en el lugar',
      costo:
        '40 yuanes de abril a octubre, 35 de noviembre a marzo, unos 5 €; gratis para menores de 18 años y mayores de 60 con documento (2026)',
      orari: 'Del 1 de abril al 31 de octubre 6:30-16:30; del 1 de noviembre al 31 de marzo 7:30-16:00',
      url: 'https://www.badaling.cn/',
      lat: 40.35417,
      lng: 116.00694,
      consiglio: 'Billete nominativo con el número de pasaporte: conviene reservarlo en línea antes de ir.',
    },
    {
      nome: 'Juyongguan',
      testo:
        'Un paso fortificado al fondo de un valle estrecho, en la carretera entre Pekín y Badaling, cerrado por un anillo de murallas de 4.142 metros que sube por las dos laderas. Tiene puertas, torres y una puerta de agua sobre el arroyo, y la subida por ambos lados es empinada.',
      come: 'En coche o taxi desde Pekín; a menudo se combina con Badaling o con las Tumbas Ming, que están en la misma dirección.',
      quando: 'Por la mañana, en días laborables.',
      tempo: '2 horas',
      costo: '40 yuanes en temporada alta, 35 en temporada baja, unos 4-5 €; gratis para menores de 18 años y mayores de 60 con documento (2026)',
      orari: 'Temporada baja 8:30-16:30, temporada alta 8:30-17:30',
      url: 'https://english.beijing.gov.cn/specials/ticketing/attractions/202407/t20240717_3751596.html',
      lat: 40.2882,
      lng: 116.0686,
    },
    {
      nome: 'Huanghuacheng',
      testo:
        'El único tramo de Muralla en los alrededores de Pekín que se encuentra con el agua: tres trozos acaban sumergidos en un embalse, y una parte se ve desde la barca. El resto sube empinado por las colinas del distrito de Huairou, a unos 70 km del centro.',
      come: 'En coche con conductor o taxi desde Pekín; las barcas salen dentro del área paisajística.',
      quando: 'Primavera y otoño; en verano para el paseo en barca.',
      tempo: '3 horas',
      costo: 'Entrada 60 yuanes, unos 7 € (2026)',
      orari:
        'En verano 8:30-17:00 de lunes a viernes, 8:00-18:00 los sábados y durante la Golden Week, 8:00-17:00 los domingos; en invierno 8:30-16:30',
      url: 'https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260324_4564623.html',
      lat: 40.40868,
      lng: 116.34488,
    },
    {
      nome: 'Jinshanling',
      testo:
        'Diez kilómetros y medio de muralla Ming entre el paso de Gubeikou y la torre de Wangjing, con 67 torres de vigilancia, en el condado de Luanping (Hebei). Solo está restaurada en parte: tras los primeros tramos los escalones se vuelven irregulares, la hierba crece entre las piedras y las torres están medio derrumbadas.',
      come:
        'A unos 130 km de Pekín: coche con conductor o tour de un día, o lanzaderas compartidas a primera hora. Se sube a pie o en teleférico y luego se camina por la cresta de torre en torre.',
      quando: 'Primavera y otoño, saliendo temprano; en verano no hay sombra en la cresta.',
      tempo: 'Jornada completa: unas 2 horas y media de carretera por trayecto y 3-4 horas de caminata',
      costo: '65 yuanes de abril a octubre, 55 de noviembre a marzo, unos 7-8 €; teleférico 40 yuanes solo ida, unos 5 € (2026)',
      orari: 'Del 1 de abril al 31 de octubre 6:30-18:30; del 1 de noviembre al 31 de marzo 8:30-16:30',
      lat: 40.67639,
      lng: 117.24444,
      consiglio: 'En el recorrido no hay dónde comprar comida ni bebida: agua, gorra y calzado con buena suela.',
    },
    {
      nome: 'Simatai',
      testo:
        'Un tramo empinado y poco reconstruido, sobre el embalse de Yuanyang y el pueblo de Gubei Water Town, en el distrito de Miyun. Las torres siguen una cresta fina y rocosa; es además el único tramo de la zona que se visita después del atardecer, con las torres iluminadas.',
      come:
        'Se llega a través de Gubei Water Town, a unas 2 horas en coche de Pekín, y se sube a pie o en telecabina. La visita nocturna tiene billete aparte.',
      quando: 'Última hora de la tarde y noche, de mayo a octubre, para la visita nocturna.',
      tempo: '2-3 horas',
      costo: 'De día 40 yuanes, unos 5 €; visita nocturna 200 yuanes, unos 24 €, reducida 80 yuanes (2026)',
      orari:
        'De día, entrada 9:00-15:00; de noche, de mayo a octubre, entrada 18:00-21:40 y salida de la muralla antes de las 22:40',
      url: 'https://www.wtown.com/',
      lat: 40.65873,
      lng: 117.28438,
    },
    {
      nome: 'Gubei Water Town',
      testo:
        'Un pueblo reconstruido al pie de Simatai, con canales, puentes de piedra, casas con patio, tiendas y hoteles. No es una aldea antigua sino un complejo turístico, y la forma más cómoda de dormir bajo la Muralla y verla iluminada.',
      come: 'En coche desde Pekín o en autobuses turísticos; dentro del pueblo se camina o se pasea en barca por los canales.',
      quando: 'De la tarde a la noche, con una noche en el lugar.',
      tempo: 'Media jornada, mejor con una noche',
      costo: 'Entrada al pueblo 140 yuanes, unos 17 € (2026)',
      orari:
        'Abierto 9:00-22:30 de domingo a jueves, 9:00-23:00 viernes y sábados; control de billetes 9:00-21:00 de noviembre a abril, 9:00-22:00 de mayo a octubre',
      url: 'https://www.wtown.com/',
      lat: 40.64891,
      lng: 117.267,
    },
    {
      nome: 'Tumbas Ming',
      testo:
        'El valle al pie de los montes Tianshou donde están enterrados trece emperadores Ming, patrimonio de la UNESCO como la Muralla. Se visitan el Camino Sagrado, flanqueado por animales y funcionarios de piedra, Changling, la tumba más grande, y Dingling, la única con el palacio subterráneo abierto.',
      come: 'Metro línea Changping hasta la estación Ming Tombs, luego autobús o taxi; en coche suelen combinarse con Badaling, Juyongguan o Mutianyu.',
      quando: 'Por la mañana, antes o después de la Muralla.',
      tempo: '2-3 horas',
      costo:
        'Dingling 60 yuanes en temporada alta; Changling 45 yuanes en temporada alta y 30 en baja; Camino Sagrado 20 y 15 yuanes; unos 2-7 € por sitio; gratis para mayores de 60 (2026)',
      orari: 'Temporada baja 8:30-16:30, temporada alta 8:30-17:30',
      url: 'https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260320_4562417.html',
      lat: 40.29446,
      lng: 116.21696,
    },
  ],
  programmi: [
    {
      titolo: 'Media jornada: Mutianyu',
      tappe: [
        'Salida de Pekín a las 7, entrada a la hora de apertura',
        'Telecabina hasta la torre 14 y paseo hacia las torres más altas, donde la gente se dispersa',
        'Bajada en tobogán y comida en el pueblo antes de volver',
      ],
    },
    {
      titolo: '1 día: Jinshanling',
      tappe: [
        'Coche con conductor al amanecer, unas 2 horas y media de carretera',
        'Subida a pie o en teleférico y 3-4 horas por la cresta entre las torres',
        'Regreso a Pekín a última hora de la tarde',
      ],
    },
    {
      titolo: '2 días: Jinshanling y Simatai de noche',
      tappe: [
        'Día 1: Jinshanling por la mañana, luego traslado a Gubei Water Town',
        'Noche: Simatai iluminada, noche en el pueblo',
        'Día 2: canales de Gubei a primera hora, regreso a Pekín',
      ],
    },
    {
      titolo: '1 día con las Tumbas Ming',
      tappe: [
        'Mañana: Camino Sagrado y Dingling',
        'Tarde: Juyongguan o Mutianyu',
        'Regreso a Pekín para la cena',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Badaling, entrada',
      prezzo: '40 yuanes de abril a octubre, 35 de noviembre a marzo (unos 5 €)',
      include: 'Entrada al tramo; reducida 20 y 17,5 yuanes; gratis para menores de 18 años y mayores de 60 con documento',
      dove: 'Canales oficiales de Badaling o taquilla, con el pasaporte',
    },
    {
      tipo: 'Mutianyu, entrada',
      prezzo: '45 yuanes (unos 5,5 €)',
      include: 'Solo la muralla; reducida 25 yuanes para menores extranjeros de 6 a 18 años',
      dove: 'mutianyugreatwall.com hasta 30 días antes, billete nominativo',
    },
    {
      tipo: 'Mutianyu, lanzadera',
      prezzo: 'unos 15 yuanes ida y vuelta (unos 2 €)',
      include: 'Autobús de unos 3 km entre el centro de servicios y el pie de la muralla; gratis por debajo de 1,2 metros',
      dove: 'Web oficial o centro de servicios',
    },
    {
      tipo: 'Mutianyu, telecabina',
      prezzo: 'unos 100 yuanes solo ida, 140 ida y vuelta (unos 12-17 €)',
      include: 'Subida a la torre 14; gratis por debajo de 1,2 metros',
      dove: 'Web oficial o taquilla',
    },
    {
      tipo: 'Mutianyu, telesilla y tobogán',
      prezzo: 'unos 100 yuanes solo ida, 140 ida y vuelta (unos 12-17 €)',
      include: 'Telesilla de subida y tobogán de bajada; empresa distinta de la telecabina, billetes no intercambiables',
      dove: 'Web oficial o taquilla del tobogán',
    },
    {
      tipo: 'Juyongguan, entrada',
      prezzo: '40 yuanes en temporada alta, 35 en baja (unos 4-5 €)',
      include: 'Entrada al paso y a las murallas; gratis para menores de 18 años y mayores de 60',
      dove: 'Taquilla',
    },
    {
      tipo: 'Huanghuacheng, entrada',
      prezzo: '60 yuanes (unos 7 €)',
      include: 'Entrada a la zona del lago y de la muralla; reducida para estudiantes y menores',
      dove: 'Taquilla',
    },
    {
      tipo: 'Jinshanling, entrada',
      prezzo: '65 yuanes de abril a octubre, 55 de noviembre a marzo (unos 7-8 €)',
      include: 'Entrada al tramo abierto',
      dove: 'Taquilla',
    },
    {
      tipo: 'Jinshanling, teleférico',
      prezzo: '40 yuanes solo ida (unos 5 €)',
      dove: 'Taquilla',
    },
    {
      tipo: 'Gubei Water Town',
      prezzo: '140 yuanes (unos 17 €)',
      include: 'Entrada al pueblo',
      dove: 'wtown.com o taquilla',
    },
    {
      tipo: 'Simatai, de día',
      prezzo: '40 yuanes (unos 5 €)',
      include: 'Entrada a la muralla, control 9:00-15:00',
      dove: 'wtown.com o taquilla del pueblo',
    },
    {
      tipo: 'Simatai, de noche',
      prezzo: '200 yuanes (unos 24 €); reducida 80 yuanes',
      include: 'Muralla iluminada, entrada 18:00-21:40 de mayo a octubre; reducida para niños de entre 1,2 y 1,5 metros, estudiantes y mayores de 60',
      dove: 'wtown.com o taquilla del pueblo, con antelación',
    },
    {
      tipo: 'Tumbas Ming, Dingling',
      prezzo: '60 yuanes en temporada alta (unos 7 €)',
      include: 'Tumba con palacio subterráneo; mitad de precio para estudiantes, gratis para mayores de 60 y niños de menos de 1,2 metros',
      dove: 'Taquilla',
    },
  ],
  mesi: [
    { voto: 2, folla: 'bassa', nota: 'Frío seco y cielos despejados; con nieve los tramos están casi vacíos.' },
    { voto: 2, folla: 'media', nota: 'El Año Nuevo chino trae una semana de multitudes; el resto del mes es gélido y tranquilo.' },
    { voto: 3, folla: 'bassa', nota: 'Todavía frío, con viento y posibles tormentas de arena; poca gente.' },
    { voto: 4, folla: 'media', nota: 'Clima suave y árboles en flor; el viento puede ser fuerte en la cresta.' },
    { voto: 4, folla: 'media', nota: 'Temperaturas ideales, pero hay que evitar los primeros días del mes, con la fiesta del trabajo.' },
    { voto: 3, folla: 'media', nota: 'Calor en aumento y días largos; mejor salir temprano.' },
    { voto: 2, folla: 'alta', nota: 'Calor húmedo, tormentas y vacaciones escolares chinas.' },
    { voto: 2, folla: 'alta', nota: 'Bochorno y lluvia, con el turismo interno al máximo.' },
    { voto: 5, folla: 'media', nota: 'Aire más seco, cielos limpios y temperaturas suaves: el mejor mes.' },
    { voto: 4, folla: 'alta', nota: 'Hay que evitar la Golden Week, del 1 al 7; después, los bosques en otoño están en su mejor momento.' },
    { voto: 4, folla: 'bassa', nota: 'Fresco y despejado, poca gente; desde el 16 Mutianyu pasa al horario de invierno.' },
    { voto: 2, folla: 'bassa', nota: 'Frío intenso y viento en las torres; tramos vacíos.' },
  ],
  zone: [
    {
      nome: 'Dongcheng y Wangfujing',
      perChi: 'Quien visita la Muralla en el día y Pekín a pie',
      testo: 'El centro de la ciudad, cómodo para el metro y para las salidas al amanecer hacia Mutianyu y Jinshanling.',
      fascia: '60-130 €',
    },
    {
      nome: 'Shichahai y Gulou',
      perChi: 'Quien quiere dormir en los hutong',
      testo: 'Hoteles en casas con patio entre callejones y lagos; los taxis a menudo no llegan a la puerta, y para salir temprano conviene quedar con el coche en una calle principal.',
      fascia: '60-150 €',
    },
    {
      nome: 'Pueblo de Mutianyu',
      perChi: 'Quien quiere la Muralla a la hora de apertura sin la carretera de la mañana',
      testo: 'Casas de huéspedes y un hotel al pie del tramo: por la noche y a primera hora el lugar está tranquilo.',
    },
    {
      nome: 'Gubei Water Town',
      perChi: 'Quien quiere Simatai de noche',
      testo: 'Hoteles y posadas dentro del pueblo, a pocos pasos de la subida a la muralla iluminada; al día siguiente es fácil llegar a Jinshanling.',
    },
  ],
  gite: [
    {
      nome: 'Pekín imperial',
      distanza: '1-2 horas de carretera desde los tramos más cercanos',
      come: 'En coche o en transporte público desde el centro.',
      testo: 'La Ciudad Prohibida, el Templo del Cielo y el Palacio de Verano: la base natural para cualquier excursión a la Muralla.',
      link: '/destinazioni/cina/pechino',
    },
    {
      nome: 'Tianjin',
      distanza: '30 minutos en tren desde Pekín',
      come: 'Tren de alta velocidad desde la estación Beijing South.',
      testo: 'Ciudad portuaria con un paseo fluvial de edificios europeos de las antiguas concesiones y una noria construida sobre un puente.',
    },
    {
      nome: 'Xi\'an y los Guerreros de terracota',
      distanza: 'unas 4 horas y media en tren de alta velocidad desde Pekín',
      come: 'Tren desde la estación Beijing West, o vuelo interno.',
      testo: 'La antigua capital, con murallas urbanas que se recorren en bici y los guerreros de terracota del primer emperador, el que unió los primeros tramos de muralla.',
      link: '/destinazioni/cina/xian',
    },
  ],
  faq: [
    {
      domanda: '¿Qué tramo de la Gran Muralla elegir desde Pekín?',
      risposta:
        'Con media jornada o con niños, Mutianyu: restaurado, verde, con teleférico y tobogán. Para caminar mucho por un tramo en parte original, Jinshanling. Para verla de noche, Simatai. Badaling es el más cómodo pero también el más concurrido.',
    },
    {
      domanda: '¿Se puede ir a la Muralla en transporte público?',
      risposta:
        'Sí a Badaling, en tren de alta velocidad, y a las Tumbas Ming en metro. A Mutianyu se llega con lanzaderas directas o autobús más taxi; para Jinshanling y Simatai casi siempre hace falta un coche con conductor o un tour.',
    },
    {
      domanda: '¿Hay que reservar y llevar el pasaporte?',
      risposta:
        'Sí: los billetes son nominativos y en Mutianyu se compran en línea hasta 30 días antes, uno por pasaporte y día. En la entrada se muestra el pasaporte original.',
    },
    {
      domanda: '¿Es dura la caminata?',
      risposta:
        'Más de lo que parece: la Muralla sigue la cresta con escalones altos e irregulares y sin sombra. En Mutianyu el teleférico ahorra la subida; en Jinshanling y Simatai se camina durante horas por tramos empinados.',
    },
    {
      domanda: '¿Se puede visitar la Muralla de noche?',
      risposta:
        'Sí, en Simatai de mayo a octubre, con entrada entre las 18:00 y las 21:40 y billete de 200 yuanes; Mutianyu abre de noche solo en algunas épocas, en las torres 10-15.',
    },
    {
      domanda: '¿Cuál es la mejor época?',
      risposta:
        'Septiembre y la segunda mitad de octubre, luego abril y mayo. Hay que evitar la Golden Week de principios de octubre, los primeros días de mayo, el Año Nuevo chino y el bochorno de julio y agosto.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/grande-muraglia-cinese/jinshanling.jpg',
      alt: 'La Gran Muralla en Jinshanling bajando hacia una torre de vigilancia y volviendo a subir por la cresta verde, entre colinas con bruma',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/mutianyu-toboga.jpg',
      alt: 'La pista metálica del tobogán de Mutianyu bajando por el bosque, con una barandilla amarilla y la muralla en la colina',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/badaling-neve.jpg',
      alt: 'El tramo sur de Badaling cubierto de nieve, con la muralla y las torres subiendo entre árboles blancos',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/gubei-da-simatai.jpg',
      alt: 'El valle de Gubei visto desde lo alto de la muralla de Simatai, con el pueblo, el embalse y montañas en el horizonte',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/huanghuacheng.jpg',
      alt: 'La muralla de Huanghuacheng recorriendo colinas boscosas bajo un cielo azul, con crestas rocosas al fondo',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/simatai.jpg',
      alt: 'La muralla de Simatai subiendo por una cresta pelada hacia las montañas, con una torre de vigilancia en primer plano',
    },
  ],
}
