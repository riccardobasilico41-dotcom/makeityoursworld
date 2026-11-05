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
    luoghi: [
      {
        nome: "Castillo de Buda y Palacio Real",
        testo: "La colina de Buda sobre el Danubio, con el Palacio Real, hoy sede de museos (Galería Nacional Húngara, Museo de Historia de Budapest, Biblioteca Nacional Széchényi). Se sube con el funicular Sikló o a pie.",
        come: "Funicular Sikló desde Clark Ádám tér, junto al Puente de las Cadenas, o a pie.",
        quando: "Mañana, para evitar los grupos.",
        tempo: "2-3 horas",
        consiglio: "Desde el lado sur de la colina se tiene la mejor vista del Danubio."
      },
      {
        nome: "Bastión de los Pescadores e Iglesia de Matías",
        testo: "El Bastión es una terraza neorrománica construida entre 1895 y 1902 (nunca fue un bastión de verdad), con siete torretas por las siete tribus magiares que se asentaron en la cuenca de los Cárpatos. Al lado, la iglesia de Matías tiene el tejado de tejas de colores.",
        come: "A pie desde el Castillo (5 minutos).",
        quando: "Amanecer o atardecer, para fotos sin multitudes; mucha gente a mediodía.",
        tempo: "1-1,5 horas",
        url: "https://www.fishermansbastion.com",
        consiglio: "Parte de las terrazas es de pago: precios y horarios en la web oficial."
      },
      {
        nome: "Parlamento húngaro",
        testo: "Terminado en 1904, es el edificio más grande de Hungría (268 metros de largo), neogótico sobre el Danubio. Solo se visita con tour guiado, que pasa por la sala central donde desde el año 2000 se expone la Sagrada Corona.",
        come: "Tranvía 2 o metro M2 hasta Kossuth Lajos tér. Las entradas se reservan online para una hora.",
        quando: "Mañana; hay control de seguridad en la entrada.",
        tempo: "1 hora",
        url: "https://www.parlament.hu",
        consiglio: "Reservar con días de antelación, sobre todo en temporada alta."
      },
      {
        nome: "Puente de las Cadenas y paseo del río",
        testo: "El primer puente permanente entre Buda y Pest, abierto en 1849, iluminado de noche. En la orilla de Pest están los Zapatos en el Danubio, memorial de las víctimas judías de 1944-45.",
        come: "A pie desde el centro; tranvía 2 a lo largo de la orilla.",
        quando: "Tarde, cuando el puente y el Parlamento están iluminados.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Caminar junto al Danubio desde Pest al atardecer."
      },
      {
        nome: "Termas Széchenyi",
        testo: "Uno de los mayores complejos termales de Europa, abierto en 1913: 15 piscinas interiores y 3 exteriores, las de fuera entre 27 y 38 grados, en un edificio amarillo neobarroco en Városliget. Se mezclan locales y turistas.",
        come: "Metro M1 hasta Széchenyi fürdő.",
        quando: "Mañana entre semana; las noches de verano tienen fiestas.",
        tempo: "3-4 horas",
        url: "https://www.szechenyibath.hu",
        consiglio: "Llevar chancletas y toalla. Horarios y precios cambian: consultarlos en la web oficial, donde también se compran las entradas."
      },
      {
        nome: "Gran Mercado Central",
        testo: "Un mercado cubierto abierto en 1897, al final de Váci utca, con pimentón, salchichones y strudel; en el piso superior hay puestos de comida y recuerdos. Cerrado el domingo.",
        come: "Tranvía 47/49 hasta Fővám tér.",
        quando: "Mañana entre semana; cerrado el domingo.",
        tempo: "1-1,5 horas",
        consiglio: "Pagar en forintos, las casas de cambio aquí son caras."
      },
      {
        nome: "Gran Sinagoga de la calle Dohány",
        testo: "La mayor sinagoga de Europa, unas 3.000 plazas, de estilo neomorisco. En el patio está el parque memorial Raoul Wallenberg con el Árbol de la vida de Imre Varga, un sauce de metal con los nombres de las víctimas en las hojas.",
        come: "Metro M2 hasta Astoria o tranvía 47/49.",
        quando: "Mañana entre semana; días de cierre en la web oficial.",
        tempo: "1,5 horas",
        consiglio: "En el complejo también está el Museo Judío Húngaro."
      },
      {
        nome: "Barrio judío y ruin bars",
        testo: "El distrito VII es el corazón de la vida nocturna, con bares nacidos en edificios abandonados, como el Szimpla Kert. De día es un barrio tranquilo con cafés.",
        come: "A pie desde el centro.",
        quando: "Noche.",
        tempo: "2-3 horas",
        consiglio: "De día el Szimpla Kert está más tranquilo y se visita mejor."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Castillo de Buda",
          "Bastión de los Pescadores",
          "Almuerzo con lángos",
          "Tarde: Puente de las Cadenas",
          "Noche: Parlamento iluminado"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Széchenyi por la mañana",
          "Gran Mercado Central",
          "Sinagoga y barrio judío, ruin bars"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: Isla Margarita, Colina Gellért, House of Terror"
        ]
      }
    ],
    zone: [
      {
        nome: "Pest (distritos V y VI)",
        perChi: "Quien quiere estar a un paso de todo",
        testo: "Cerca de Váci utca y la Basílica; precios más altos y ruido nocturno."
      },
      {
        nome: "Barrio judío (VII)",
        perChi: "Quien busca vida nocturna",
        testo: "Lleno de bares, ruidoso los fines de semana."
      },
      {
        nome: "Buda (distritos I y II)",
        perChi: "Quien prefiere la tranquilidad",
        testo: "Cerca del Castillo, calles silenciosas; menos restaurantes baratos."
      }
    ],
    sapori: [
      {
        nome: "Gulyás",
        testo: "La sopa de ternera y pimentón, en los restaurantes tradicionales."
      },
      {
        nome: "Lángos",
        testo: "Pan frito con nata agria y queso, típico del Mercado."
      },
      {
        nome: "Kürtőskalács",
        testo: "Dulce en espiral cocido sobre brasas, con azúcar y canela."
      },
      {
        nome: "Dobos torta",
        testo: "Tarta de capas con crema de chocolate y caramelo."
      }
    ],
    attenzioni: [
      "Taxis: usar compañías conocidas; desconfiar de los taxistas que recomiendan un bar o local, algunos están de acuerdo con quien infla la cuenta.",
      "Bares y restaurantes que inflan la cuenta, a veces acompañando a los turistas al cajero: pedir siempre la carta con precios antes de pedir.",
      "Cambio: usar cajeros bancarios y rechazar que se cobre en euros.",
      "Transporte público: billetes a validar o con la app BudapestGO; los revisores multan a los turistas.",
      "El servicio a veces ya está incluido: revisar la cuenta."
    ],
    esperienzeSlugs: ['terme-szechenyi', 'terme-gellert', 'crociera-danubio', 'ruin-bar-tour'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'Las torres blancas cónicas del Bastión de los Pescadores en la colina de Buda, bajo un cielo azul',
    immagine: '/images/ungheria/budapest.jpg',
  },
]
