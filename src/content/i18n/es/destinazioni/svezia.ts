import type { Destinazione } from '@/lib/types'

export const destinazioniSvezia: Destinazione[] = [
  {
    slug: 'stoccolma',
    paeseSlug: 'svezia',
    ordine: 1,
    nome: 'Estocolmo',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      "una noche a la ida y una a la vuelta en el viaje a Laponia, solo de tránsito; 2-3 días completos en el itinerario «Capitales nórdicas», como segunda etapa después de Copenhague",
    visitataPersonalmente: true,
    introduzione:
      "En el viaje a Laponia es el tránsito obligado entre el vuelo internacional y el interior a Kiruna. Pero es también una capital que merece mucho más que una noche: está construida sobre catorce islas conectadas por más de cincuenta puentes, y tiene el núcleo medieval de Gamla Stan, el pecio seiscentista del Vasa y el ayuntamiento donde cada año se celebra el banquete del Nobel.",
    percheAndarci:
      "Para el vuelo interior a Kiruna hay que pasar por ella de todos modos, una noche por sentido. Y es la segunda etapa natural de un recorrido por las capitales nórdicas: desde Copenhague se llega en tren o en avión, y entre casco histórico, museos y archipiélago la ciudad llena bien 2-3 días.",
    cosaVedere: [
      "El centro de la ciudad, en una versión muy reducida si solo se está de tránsito una noche",
      "Gamla Stan, el casco histórico medieval en una isla propia: callejuelas estrechas, casas de colores, el Palacio Real (con el cambio de guardia) y la plaza de Stortorget",
      "El Vasamuseet (Museo Vasa), con un buque de guerra real de 1628 hundido en el puerto de Estocolmo durante el viaje inaugural y recuperado casi intacto en 1961: uno de los barcos antiguos mejor conservados del mundo",
      "Stadshuset, el Ayuntamiento de ladrillo rojo asomado al agua, sede del banquete del Premio Nobel en el Salón Azul y del Salón Dorado revestido con más de 18 millones de teselas doradas",
      "ABBA The Museum, en la isla de Djurgården, dedicado al grupo pop más famoso de Suecia, con recuerdos originales y salas interactivas",
      "El archipiélago de Estocolmo (Stockholms skärgård), más de 30.000 entre islas e islotes que se abren al este de la ciudad hacia el mar Báltico",
    ],
    cosaFare: [
      "Poco más que check-in/check-out si se está solo de tránsito una noche",
      "Un paseo por las callejuelas de Gamla Stan, con parada en Stortorget",
      "La visita al Vasamuseet (véase la ficha de experiencia dedicada)",
      "Una visita guiada de Stadshuset, con subida a la torre en los meses cálidos para ver la ciudad (el acceso es estacional: conviene comprobar los horarios antes)",
      "Media jornada o una jornada entera en barco por el archipiélago (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Dormí en el Radisson Blu Royal Viking tanto a la ida como a la vuelta, de tránsito hacia Laponia: una cadena internacional fiable, cómoda para quien llega o sale con vuelos de tarde-noche. Para una estancia completa, Gamla Stan y Norrmalm/ciudad vieja siguen siendo las zonas más céntricas y cómodas a pie; Södermalm, más joven y con sus propios bares y restaurantes, es una alternativa a menudo más económica a pocos minutos de metro del centro.",
    doveMangiare:
      "En las paradas de tránsito tenía pocas horas y no tengo locales que recomendar. Gran parte de la oferta de la ciudad está en Södermalm y en Östermalm, de los fast-casual a los restaurantes de gama alta.",
    comeArrivare:
      "Vuelo internacional a Estocolmo Arlanda. Para quien llega como segunda etapa del itinerario «Capitales nórdicas», desde Copenhague hay tren directo SJ (unas 5 horas) o vuelo (aproximadamente 1 hora).",
    comeSpostarsi: 'Para el simple tránsito aeropuerto-hotel no hace falta. Para una estancia completa hay metro (Tunnelbana), autobuses y ferris urbanos con billete integrado SL; el casco histórico se recorre bien también a pie.',
    periodoMigliore: 'mayo-septiembre por el clima y por las salidas al archipiélago, que funcionan mejor con los días largos',
    costi:
      "Billete sencillo SL 43 SEK, pase diario 180 SEK. Vasamuseet 195-240 SEK según la temporada. ABBA The Museum 269-349 SEK. Excursión por el archipiélago desde unos 375 SEK (unos 33 €) por una salida guiada de 2-2,5 horas.",
    erroriDaEvitare: [],
    miaEsperienza:
      "Para mí Estocolmo fue solo una parada logística, a la ida y a la vuelta: justo el tiempo de dormir entre un vuelo y otro.",
    esperienzeSlugs: ['vasamuseet-stoccolma', 'gamla-stan-passeggiata', 'abba-museum-stoccolma', 'arcipelago-stoccolma-in-barca'],
    tripSlugs: ['lapponia-svedese-abisko', 'capitali-nordiche'],
    imageAlt: 'Casas de colores del casco histórico de Estocolmo asomadas al agua en invierno',
    immagine: '/images/svezia/stoccolma-stock.jpg',
  },
  {
    slug: 'kiruna',
    paeseSlug: 'svezia',
    ordine: 2,
    nome: 'Kiruna',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 noches en total (ida y vuelta), base logística para Abisko',
    visitataPersonalmente: true,
    introduzione: "La ciudad más al norte de Suecia, base logística para Abisko. Es famosa por la mina de hierro LKAB, que está obligando a la ciudad a trasladarse, pieza por pieza, unos kilómetros más allá.",
    percheAndarci: "Es el paso obligado para Abisko, pero tiene identidad propia: la iglesia de madera roja, el centro en plena transformación urbanística y, no muy lejos, el ICEHOTEL.",
    cosaVedere: [
      "La iglesia de madera roja de Kiruna, uno de los edificios símbolo de la ciudad",
      "El centro de la ciudad, que en los próximos años será desmontado y reconstruido en otro lugar por la ampliación de la mina",
    ],
    cosaFare: [
      "Paseo a pie por el centro",
      "Relax en el spa del Elite Hotel Frost después de los días más intensos en Abisko",
      "Visita guiada a la mina LKAB (3 horas, hasta 540 m de profundidad; véase la ficha de experiencia dedicada)",
      "Excursión de media jornada al ICEHOTEL de Jukkasjärvi, a unos 20 minutos (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "A la ida dormí en el STF Malmfältens Folkhögskola, un alojamiento sencillo y esencial gestionado por la Svenska Turistföreningen (la asociación excursionista sueca, muy presente en toda la región). A la vuelta en el Elite Hotel Frost - Hotel & Spa: un buen salto de calidad, con un spa interior ideal para recuperarse después de los días más fríos en Abisko.",
    doveMangiare: "No tengo restaurantes que recomendar. El presupuesto orientativo que había previsto: desayunos 10-15 €/día, comidas y cenas 30-50 € por comida.",
    comeArrivare: 'Vuelo interior desde Estocolmo Arlanda; luego tren panorámico a Abisko.',
    comeSpostarsi: 'A pie por el centro; tren a Abisko.',
    periodoMigliore: "el mismo que Abisko: de finales de diciembre a marzo para la aurora, con febrero-marzo mucho más económicos",
    costi:
      "La iglesia y el centro se visitan gratis. La mina LKAB cuesta unos 590 SEK (52 €) por persona por la visita guiada de 3 horas. El ICEHOTEL cuesta 349 SEK (31 €) solo la entrada de día, desde 3.995 SEK (350 €) por noche para 2 personas para dormir allí. Habitación doble en hotel de gama media en la ciudad: aproximadamente 100-150 €/noche.",
    erroriDaEvitare: [],
    miaEsperienza:
      "Para mí Kiruna fue una base práctica más que un destino: a la ida la esencialidad del STF, a la vuelta el spa del Elite Hotel Frost, y de fondo la iglesia roja y el centro en transformación.",
    esperienzeSlugs: ['icehotel-jukkasjarvi', 'miniera-lkab-kiruna'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Iglesia de madera roja de Kiruna bajo un cielo invernal sueco',
    immagine: '/images/svezia/kiruna-stock.jpg',
  },
  {
    slug: 'abisko',
    paeseSlug: 'svezia',
    ordine: 3,
    nome: 'Abisko',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 noches, corazón del viaje',
    visitataPersonalmente: true,
    introduzione: "El motivo del viaje: un parque nacional con un microclima seco que lo convierte en uno de los mejores lugares del mundo para ver la aurora boreal, y la base para la moto de nieve, el trineo de huskies y la Aurora Sky Station.",
    percheAndarci: "Ante todo por la aurora boreal. Después por la naturaleza ártica del parque nacional y por las dos actividades más adrenalínicas del viaje.",
    cosaVedere: [
      "La vista desde la Aurora Sky Station, en lo alto del monte Nuolja",
      "El lago helado del parque nacional",
    ],
    cosaFare: [
      "Aurora Sky Station: telesilla y cena panorámica (véase la ficha de experiencia dedicada)",
      "Moto de nieve sobre el lago helado (véase la ficha de experiencia dedicada)",
      "Trineo de huskies con caza de la aurora (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Dormí en el STF Abisko Turiststation, la histórica estación de montaña dentro del parque nacional, desde donde se sale directamente al telesilla de la Aurora Sky Station. Es esencial, pero inmersa en el parque tiene una atmósfera que no he encontrado en otro sitio.",
    doveMangiare: "No tengo locales que recomendar: los desayunos suelen estar incluidos en las instalaciones STF, comidas y cenas en la media que había previsto (30-50 € por comida).",
    comeArrivare: 'Tren panorámico desde Kiruna: algo más de una hora en un paisaje cada vez más desnudo.',
    comeSpostarsi: 'A pie por el pueblo; excursiones organizadas en moto de nieve y con huskies.',
    periodoMigliore: 'de finales de diciembre a marzo; febrero-marzo cuesta mucho menos manteniendo altas probabilidades de aurora',
    costi:
      "Actividades, precio orientativo por persona: telesilla Aurora Sky Station 35-40 € (paquete con cena y pernoctación en altura unos 270-310 €, solo los viernes); moto de nieve guiada sobre el lago helado unos 100-110 € (self-drive 150-250 €); trineo de huskies nocturno con caza de la aurora 240 € (versiones diurnas más cortas desde 70 €). Costes de todo el viaje por persona: vuelos 600-645 €, alojamiento 400-600 €, transportes interiores 80 € (tren panorámico + traslado aeroportuario), excursiones 450-500 € por 3 tours con guía. Presupuesto total orientativo de 1.500 € (básico) a 1.800 € (nivel óptimo).",
    erroriDaEvitare: [
      "Ir en Nochevieja si el objetivo es ahorrar: es la época más cara del año para volar y dormir en la zona",
      "No dejar un margen extra en los transportes: con el frío extremo los trenes a veces se cancelan (no a menudo, pero ocurre), y en esos casos los taxis de la zona tienden a subir un poco los precios",
    ],
    miaEsperienza:
      "Abisko fue el corazón del viaje: la cena en altura en la Aurora Sky Station, la moto de nieve sobre el lago helado y el trineo de huskies bajo un cielo que en un momento dado se encendió de verdad. Son los recuerdos más fuertes de la semana.",
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Aurora boreal verde sobre las montañas nevadas del parque nacional de Abisko',
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
