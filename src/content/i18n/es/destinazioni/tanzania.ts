import type { Destinazione } from '@/lib/types'

export const destinazioniTanzania: Destinazione[] = [
  {
    slug: 'serengeti',
    paeseSlug: 'tanzania',
    ordine: 1,
    nome: 'Serengeti',
    tipologia: ['safari', 'parco nazionale', 'fauna'],
    giorniConsigliati: '2-3 días, mejor con al menos dos noches dentro del parque',
    visitataPersonalmente: true,
    introduzione:
      'La gran llanura del norte de Tanzania, patrimonio de la UNESCO: sabana abierta, kopjes de granito, grandes felinos y, según la estación, las manadas de la Gran Migración.',
    percheAndarci:
      'Es el parque del que nace la idea misma de safari: espacios enormes, leones, guepardos y leopardos, y millones de ñus y cebras que se desplazan siguiendo las lluvias.',
    cosaVedere: [
      'El valle de Seronera, en el centro del parque, la zona más fácil para los grandes felinos',
      'Los kopjes, los afloramientos de granito donde descansan los leones',
      'Las llanuras del sur hacia Ndutu en la época de los nacimientos de ñus',
      'El río Mara, en el norte, en los cruces de la migración',
    ],
    cosaFare: [
      'Game drives al amanecer y a última hora de la tarde, cuando los animales están más activos',
      'Dormir en tienda dentro del parque (ver la ficha de experiencia)',
      'Seguir la Gran Migración en la zona adecuada para el mes (ver la ficha de experiencia)',
      'Safari en globo al amanecer, para quien quiera ver la llanura desde arriba',
    ],
    doveDormire:
      'Dentro del parque hay de todo: campings públicos con tiendas de campaña, campamentos fijos de tiendas con camas de verdad y baño, lodges y campamentos de lujo. Dormir dentro del Serengeti, y no fuera, ahorra horas de carretera y permite estar en las pistas ya al amanecer. Suricata Safaris organiza el circuito en las tres fórmulas (acampada, gama media y lujo).',
    comeArrivare:
      'Desde Arusha en todoterreno, normalmente pasando por Tarangire o el Ngorongoro: es una larga jornada de carretera. Como alternativa, vuelo interno desde Arusha a una de las pistas del parque.',
    comeSpostarsi: 'En todoterreno con conductor-guía: dentro del parque no se camina solo.',
    periodoMigliore: 'de junio a octubre (estación seca, migración en el norte desde julio); de diciembre a marzo en el sur, para los nacimientos',
    costi:
      'Entrada de unos 83 $ por persona cada 24 horas en temporada alta y 71 $ en baja, IVA incluido, más la tasa de pernoctación en campamentos y lodges (unos 59-71 $ por noche); en el camping público unos 35 $ (orientativos, a comprobar con el operador).',
    erroriDaEvitare: [
      'Ir a la zona equivocada para el mes: la migración se mueve, y en verano en el sur del parque no hay ñus',
      'Planificar un solo día: entre ida y vuelta se pasa más tiempo en el coche que viendo animales',
      'Olvidar ropa de abrigo para los game drives del amanecer, que en el todoterreno abierto son fríos',
    ],
    miaEsperienza:
      'Hice el safari con Suricata Safaris: son top, tienen alojamiento para todos los gustos y también las experiencias en tienda, que recomiendo. Me gusta viajar incómodo y en contacto con la naturaleza, aunque de vez en cuando algún 5 estrellas viene bien.',
    esperienzeSlugs: ['safari-in-tenda', 'grande-migrazione'],
    tripSlugs: [],
    imageAlt: 'Una acacia solitaria en la sabana del Serengeti al atardecer, con colinas en el horizonte',
    immagine: '/images/tanzania/serengeti-savana.jpg',
  },
  {
    slug: 'ngorongoro',
    paeseSlug: 'tanzania',
    ordine: 2,
    nome: 'Cráter del Ngorongoro',
    tipologia: ['safari', 'fauna', 'unesco'],
    giorniConsigliati: '1 día en el cráter, con la noche en el borde',
    visitataPersonalmente: true,
    introduzione:
      'Una caldera volcánica intacta con el fondo plano lleno de animales: herbívoros, leones, hipopótamos y los escasos rinocerontes negros. Es el corazón del Área de Conservación del Ngorongoro, patrimonio de la UNESCO, donde los masái siguen viviendo con sus rebaños.',
    percheAndarci:
      'En pocas horas y en un espacio cerrado se ven muchísimos animales, rinoceronte negro incluido, con las paredes del cráter alrededor.',
    cosaVedere: [
      'El fondo del cráter, con el lago salado y los pantanos',
      'Los rinocerontes negros, que aquí se avistan más fácilmente que en otras zonas del norte',
      'La vista desde el borde del cráter',
      'La garganta de Olduvai, yacimiento paleontológico dentro del área protegida, de camino al Serengeti',
    ],
    cosaFare: [
      'Game drive en el fondo del cráter (ver la ficha de experiencia)',
      'Visita a una aldea masái (boma cultural)',
    ],
    doveDormire:
      'Lodges y campings en el borde del cráter, a unos 2.300 metros: de noche hace frío de verdad. Es más barato dormir en Karatu, fuera del área protegida, y subir temprano por la mañana.',
    comeArrivare: 'Desde Arusha en todoterreno, pasando por Karatu; es también la parada de paso entre Arusha y el Serengeti.',
    comeSpostarsi: 'En todoterreno con conductor-guía, con bajada y subida por pistas específicas.',
    periodoMigliore: 'todo el año; en la estación seca la hierba está baja y los animales se ven mejor',
    costi:
      'Tarifas oficiales de la NCAA para visitantes no residentes de fuera de África oriental: entrada 70,80 $ por persona cada 24 horas (23,60 $ para niños de 5 a 15 años), más 295 $ por vehículo por cada bajada al cráter y el permiso del todoterreno.',
    erroriDaEvitare: [
      'Bajar a media mañana: los primeros vehículos entran al amanecer y encuentran el cráter más vacío',
      'Subestimar el frío en el borde, por la noche y a primera hora',
      'Calcular el safari sin la tasa del cráter, que se paga por vehículo y por eso pesa más en los grupos pequeños',
    ],
    esperienzeSlugs: ['cratere-ngorongoro'],
    tripSlugs: [],
    imageAlt: 'El fondo del cráter del Ngorongoro visto desde el borde, con el lago y las paredes de la caldera',
    immagine: '/images/tanzania/ngorongoro-cratere.jpg',
  },
  {
    slug: 'tarangire-manyara',
    paeseSlug: 'tanzania',
    ordine: 3,
    nome: 'Tarangire y el lago Manyara',
    tipologia: ['safari', 'parco nazionale', 'natura'],
    giorniConsigliati: '1 día cada uno, a menudo al principio o al final del circuito',
    visitataPersonalmente: true,
    introduzione:
      'Dos parques cerca de Arusha y muy distintos entre sí: Tarangire, con los baobabs gigantes y las manadas de elefantes junto al río, y el lago Manyara, encajado entre el escarpe del Valle del Rift y el lago, con bosque, flamencos y babuinos.',
    percheAndarci:
      'Son las paradas más cómodas para empezar un safari y, en la estación seca, Tarangire tiene una de las concentraciones de elefantes más altas de Tanzania.',
    cosaVedere: [
      'Los baobabs y los elefantes junto al río Tarangire',
      'El bosque y la orilla del lago Manyara, con flamencos cuando el nivel del agua lo permite',
      'El escarpe del Valle del Rift sobre Manyara',
    ],
    cosaFare: [
      'Game drive en Tarangire, mejor en la estación seca',
      'Recorrido por el parque del lago Manyara, que se hace bien en media jornada',
      'Visita al pueblo de Mto wa Mbu, a la entrada de Manyara',
    ],
    doveDormire:
      'Campamentos y lodges justo fuera o dentro de Tarangire; para Manyara se duerme en Mto wa Mbu o en Karatu, que es también la base para el Ngorongoro.',
    comeArrivare: 'Desde Arusha en todoterreno: son los dos parques del circuito norte más cercanos a la ciudad.',
    comeSpostarsi: 'En todoterreno con conductor-guía.',
    periodoMigliore: 'de junio a octubre, cuando los animales se concentran alrededor del agua',
    costi: 'Entrada orientativa de unos 50-60 $ por persona cada 24 horas para cada parque (tarifas de TANAPA según los operadores, a comprobar).',
    erroriDaEvitare: [
      'Saltarse Tarangire para correr al Serengeti: en la estación seca vale el viaje por sí solo',
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Una manada de elefantes cruza el río Tarangire, con baobabs en la orilla',
    immagine: '/images/tanzania/tarangire-elefanti.jpg',
  },
  {
    slug: 'zanzibar',
    paeseSlug: 'tanzania',
    ordine: 4,
    nome: 'Zanzíbar',
    tipologia: ['mare', 'spiagge', 'città storica'],
    giorniConsigliati: '4-5 días, después del safari',
    visitataPersonalmente: true,
    introduzione:
      'La isla principal del archipiélago (Unguja) es el mar clásico después del safari: Stone Town, la ciudad vieja patrimonio de la UNESCO, y las playas blancas del océano Índico, desde Nungwi y Kendwa en el norte hasta Paje y Jambiani en la costa este.',
    percheAndarci:
      'Para cerrar el viaje con días de playa, y por una ciudad histórica que mezcla cultura suajili, árabe, india y europea.',
    cosaVedere: [
      'Stone Town, con las puertas talladas, las callejuelas y el paseo marítimo (ver la ficha de experiencia)',
      'Las playas del norte, Nungwi y Kendwa, donde la marea se nota menos',
      'La costa este, Paje y Jambiani, con la marea baja que deja al descubierto la laguna',
      'El bosque de Jozani, con los colobos rojos de Zanzíbar',
    ],
    cosaFare: [
      'Snorkel alrededor del atolón de Mnemba',
      'Kitesurf en Paje',
      'Cena en el mercado nocturno de los Forodhani Gardens en Stone Town',
    ],
    doveDormire:
      'Una o dos noches en Stone Town para la ciudad, luego la playa: el norte para bañarse a cualquier hora, la costa este para el kitesurf y los pueblos más tranquilos.',
    comeArrivare:
      'Vuelo interno desde Arusha o el Kilimanjaro al aeropuerto de Zanzíbar (ZNZ), o vuelos internacionales directos; desde Dar es Salaam también el ferry rápido. A la entrada hace falta el seguro obligatorio de Zanzíbar (44 $).',
    comeSpostarsi: 'Taxis o traslados acordados entre Stone Town y las playas; por Stone Town se va a pie.',
    periodoMigliore: 'de junio a octubre y de diciembre a febrero, fuera de las estaciones de lluvias',
    costi: 'Seguro obligatorio 44 $ por persona para estancias de hasta 92 días.',
    erroriDaEvitare: [
      'Elegir la costa este sin saber lo de la marea: con la marea baja el mar se retira cientos de metros',
      'Pasear por Stone Town en bañador o camiseta de tirantes: fuera de las playas se cubren hombros y rodillas',
      'Llegar sin el seguro de Zanzíbar ya comprado online y hacer cola en el aeropuerto',
    ],
    esperienzeSlugs: ['stone-town'],
    tripSlugs: [],
    imageAlt: 'La playa blanca de Nungwi, en el norte de Zanzíbar, con el mar turquesa y las casas en la orilla',
    immagine: '/images/tanzania/zanzibar-nungwi.jpg',
  },
  {
    slug: 'arusha-kilimanjaro',
    paeseSlug: 'tanzania',
    ordine: 5,
    nome: 'Arusha y el Kilimanjaro',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 noche antes y después del safari; 6-8 días para subir el Kilimanjaro',
    visitataPersonalmente: false,
    introduzione:
      'Arusha es la ciudad de la que salen casi todos los safaris del norte, a los pies del monte Meru; un poco más al este está el Kilimanjaro, la montaña más alta de África, con Moshi como base para quien lo sube.',
    percheAndarci:
      'Es la base logística del viaje: aquí se llega, se conoce al operador y se sale hacia los parques. Quien tenga más tiempo puede añadir el trekking en el Kilimanjaro o en el Meru.',
    cosaVedere: [
      'El Kilimanjaro, que en los días despejados se ve incluso desde la carretera',
      'El parque nacional de Arusha, a los pies del monte Meru, para una jornada a pie o en coche',
    ],
    cosaFare: [
      'Subida al Kilimanjaro por una de las rutas clásicas (Machame, Lemosho, Marangu, Rongai)',
      'Trekking de 3-4 días en el monte Meru',
      'Excursión a las cascadas de Materuni y a una plantación de café cerca de Moshi',
    ],
    doveDormire: 'En Arusha hay lodges y hoteles de todos los precios; para el Kilimanjaro la base es Moshi.',
    comeArrivare: 'Kilimanjaro International Airport (JRO), entre Arusha y Moshi; el aeropuerto de Arusha (ARK) sirve los vuelos internos.',
    comeSpostarsi: 'Traslado organizado por el operador o taxi; mucho tráfico en la ciudad en hora punta.',
    periodoMigliore: 'de junio a octubre y de enero a febrero para el Kilimanjaro, fuera de las lluvias',
    erroriDaEvitare: [
      'Reservar el primer día de safari el mismo día del vuelo intercontinental: mejor una noche en Arusha',
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'El Kilimanjaro sobre las nubes, con acacias en primer plano',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
