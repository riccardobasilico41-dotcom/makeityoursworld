import type { Destinazione } from '@/lib/types'

export const destinazioniUngheria: Destinazione[] = [
  {
    slug: 'budapest',
    paeseSlug: 'ungheria',
    ordine: 1,
    nome: 'Budapest',
    tipologia: ['città', 'terme', 'storia'],
    giorniConsigliati: '3-4 días, con una jornada dedicada a las termas',
    visitataPersonalmente: true,
    introduzione:
      'La capital húngara, nacida en 1873 de la fusión de tres ciudades distintas: Buda y Óbuda en la orilla montañosa al oeste del Danubio, Pest en la llana al este. El casco antiguo de Buda, Patrimonio de la UNESCO desde 1987, conserva el castillo real y el barrio medieval alrededor de la Iglesia de Matías; Pest concentra el Parlamento, las grandes avenidas decimonónicas y el barrio judío con sus ruin bars. Bajo la ciudad hay más de un centenar de manantiales termales, y Budapest es oficialmente conocida como «la ciudad de las termas».',
    percheAndarci:
      'Porque en un área compacta y recorrible están el Danubio con el Parlamento y el Castillo de Buda asomados el uno al otro, un patrimonio histórico estratificado en dos orillas distintas y una actividad que ninguna otra capital europea ofrece con la misma calidad: bañarse en agua termal al aire libre, en un edificio histórico, en el corazón de la ciudad.',
    cosaVedere: [
      'El Castillo de Buda y la colina del mismo nombre, con el Palacio Real (hoy sede de museos) y la vista sobre el Danubio y sobre Pest',
      'El Bastión de los Pescadores (Halászbástya), la terraza de estilo neorrománico construida en 1902 como mirador (nunca fue una fortificación), con siete torrecillas que representan las siete tribus magiares fundadoras',
      'La Iglesia de Matías (Mátyás-templom), junto al Bastión, con el tejado de tejas esmaltadas polícromas y la historia de coronaciones reales y de transformación en mezquita durante la ocupación otomana',
      'El Parlamento húngaro (Országház), en la orilla de Pest, terminado en 1904 y entre los edificios parlamentarios más grandes del mundo, visitable con tour guiado que incluye la Sagrada Corona de San Esteban',
      'El Puente de las Cadenas (Széchenyi lánchíd), el primer puente permanente entre Buda y Pest, abierto en 1849, iluminado por la noche',
      'La Gran Sinagoga de la calle Dohány (Dohány utcai zsinagóga), la más grande de Europa y la segunda del mundo después de la de Nueva York, de estilo morisco, con el jardín memorial y la escultura del Árbol de la Vida de Imre Varga dedicada a las víctimas de la Shoah',
      'El barrio judío (Erzsébetváros, distrito VII), hoy centro de los ruin bars (romkocsma), los locales nacidos en edificios ruinosos y patios abandonados a partir de los primeros años dos mil',
      'La Isla Margarita (Margitsziget), parque sin tráfico en medio del Danubio, con fuente musical y sus propias termas',
    ],
    cosaFare: [
      'Baño en las Termas de Széchenyi o de Gellért (ver las fichas de experiencia dedicadas)',
      'Un crucero o un paseo nocturno por el Danubio, para ver el Parlamento y el Castillo iluminados desde el agua',
      'Subir a la Cúpula de la Basílica de San Esteban para ver el panorama sobre los tejados de Pest',
      'Una ruta por los ruin bars del barrio judío, empezando por el más conocido, el Szimpla Kert',
      'Cruzar a pie el Puente de las Cadenas entre Buda y Pest al atardecer',
    ],
    doveDormire:
      'El lado Pest, entre el Parlamento, la Basílica de San Esteban y el barrio judío, es la zona más cómoda y más viva por la noche, a pocos minutos a pie de los principales puntos de interés. El lado Buda es más tranquilo y panorámico, pero menos céntrico para los desplazamientos nocturnos.',
    doveMangiare:
      'El gulash (gulyás), aquí más sopa que estofado, en la versión original húngara; el lángos, un disco de masa frita con nata agria y queso, la comida callejera más extendida; el paprikás csirke (pollo al pimentón); los dulces como el rétes (strudel) y la tarta Dobos. El Mercado Central (Nagycsarnok), inaugurado en 1897, es el mejor sitio para probar productos locales, pimentón incluido, a precios contenidos en comparación con los restaurantes turísticos del centro.',
    comeArrivare:
      'Aeropuerto Ferenc Liszt (BUD), a unos 16 km del centro: autobús lanzadera 100E directo al centro en unos 35-40 minutos, o autobús de línea 200E más metro. No existe una conexión ferroviaria directa cómoda desde Italia: normalmente se llega en avión. Desde Viena, tren en unas 2h30.',
    comeSpostarsi: 'Red BKK de metro, tranvía y autobús, capilar y económica. El centro de Pest y la colina de Buda se recorren bien también a pie. No hace falta coche.',
    periodoMigliore: 'abril-mayo y septiembre-octubre por el clima suave y menos gente; junio-agosto es temporada alta, calurosa y abarrotada; noviembre-marzo es frío pero las termas se convierten en una experiencia especial, con los mercadillos de Navidad en diciembre',
    costi: 'ciudad de gama medio-baja para los estándares de Europa occidental: cena normal 12-20 € por persona, transporte público pocos HUF por viaje, la entrada a las termas es el gasto más caro de una jornada tipo',
    erroriDaEvitare: [
      'Seguir a quien aborda en la calle proponiendo «un local fantástico» en el barrio judío o alrededor de las plazas turísticas: es el esquema clásico que lleva a cuentas infladas hasta el extremo',
      'Confundir los ceros del florín: una cuenta de «8.000» no son 8 euros, y es fácil equivocarse los primeros días',
      'Subestimar las termas como un paréntesis relajante de una hora: entre entrada, vestuario y colas para las taquillas, menos de dos horas y media-tres no bastan para disfrutarlas',
      'Planificar el fin de semana sin reservar con antelación el tour del Parlamento, que tiene entradas limitadas y a menudo se agota con días de antelación en temporada alta',
    ],
    esperienzeSlugs: ['terme-szechenyi', 'terme-gellert', 'crociera-danubio', 'ruin-bar-tour'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'Las torres blancas cónicas del Bastión de los Pescadores en la colina de Buda, bajo un cielo azul',
    immagine: '/images/ungheria/budapest.jpg',
  },
]
