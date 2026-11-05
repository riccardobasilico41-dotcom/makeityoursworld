import type { Destinazione } from '@/lib/types'

export const destinazioniBulgaria: Destinazione[] = [
  {
    slug: 'bansko',
    paeseSlug: 'bulgaria',
    ordine: 1,
    nome: 'Bansko',
    tipologia: ['sci', 'montagna'],
    giorniConsigliati: '4 días, tres completos en las pistas',
    visitataPersonalmente: true,
    introduzione: 'Uno de los dominios esquiables más conocidos de Bulgaria, en los montes Pirin, con un centro histórico de casas de piedra y madera.',
    percheAndarci: 'Para esquiar en un rincón de Europa que rara vez aparece en los planes de vacaciones blancas, a precios mucho más bajos que en los Alpes.',
    cosaVedere: ['El centro histórico de Bansko, entre las casas de la «escuela de Bansko» y la parte más moderna', 'La vista desde el Todorka Peak'],
    cosaFare: [
      'Esquí en las pistas de Bansko Ski Zone (hay una ficha de experiencia dedicada)',
      'La bajada iluminada para el esquí nocturno (hay una ficha de experiencia dedicada)',
      'Après-ski en los locales de la base de la góndola',
      'Cena en una mehana típica del centro histórico',
    ],
    doveDormire:
      'Elegí un hotel a pocos minutos a pie de la estación de la góndola: por la mañana llegaba rápido a las pistas y por la noche estaba a dos pasos del centro histórico. No era un establecimiento de marca ni especialmente refinado, solo una base práctica para la semana en la nieve.\n\nAlternativas cerca de la góndola. Económicas: Hotel Dumanov (cerca de la estación inferior), La Vien Guest House (5 minutos a pie, gestión familiar). Gama media: Hotel Ida (piscina interior y jacuzzi), MPM Hotel Sport (acceso casi directo a las pistas). Lujo: Kempinski Hotel Grand Arena Bansko (junto a la góndola), Premier Luxury Mountain Resort.',
    doveMangiare: 'Comimos en las mehane del centro histórico: kapama, banitsa y shopska salata, siempre con rakia.',
    comeArrivare: 'Desde Sofía se llega en coche en pocas horas. Como alternativa hay shuttles y transfers privados, el autobús público o el tren más minibús.',
    comeSpostarsi: 'Una góndola lleva del centro a las pistas; de una pista a otra uno se mueve con los esquís.',
    periodoMigliore: 'de diciembre a la primavera, con nieve artificial; fechas de la temporada en la web oficial',
    costi: 'Precios del forfait en la web oficial, donde suelen ser más bajos que en taquilla; cerveza y cenas en las mehanas más baratas que en los Alpes.',
    erroriDaEvitare: ['Comprar el forfait en taquilla: en línea, con unos días de antelación, cuesta menos', 'Esperar pistas de Alpes: a Bansko se va por la experiencia y por el precio, no por el nivel del dominio'],
    miaEsperienza:
      'No esperaba grandes cosas del esquí en Bulgaria, y es lo que encontré: pistas bonitas y bien cuidadas, nada exagerado comparado con los Alpes. Lo bueno está justo ahí. Se va por la experiencia exótica de esquiar en un rincón de Europa fuera de los circuitos habituales, más que por el esquí en sí.',
    luoghi: [
      {
        nome: "Zona de esquí de Bansko",
        testo: "A la zona se llega con una larga góndola, en servicio desde 2003, desde el pueblo hasta la base de Banderishka Polyana; los remontes llegan a 2.600 metros y hay unos 75 km de pistas. Las pistas son más tranquilas que las alpinas. Se va por la experiencia exótica en un rincón de Europa fuera de los circuitos más conocidos.",
        come: "Estación de la góndola a pocos minutos a pie del centro; forfait en taquilla u online.",
        quando: "Invierno, fechas de la temporada en la web oficial; góndola 8:30-17, telesillas 8:45-16:15. Por la mañana temprano la góndola tiene colas.",
        tempo: "jornada completa",
        costo: "precios de los forfaits en la web oficial",
        url: "https://banskoski.com",
        consiglio: "Comprar el forfait online para evitar la cola de la taquilla."
      },
      {
        nome: "Bajada nocturna iluminada",
        testo: "La pista de vuelta al pueblo, se ilumina para esquiar de noche, pero no todos los días. Es una de las atracciones más particulares de Bansko.",
        come: "Góndola hasta la estación intermedia y descenso; horarios en la web de la zona.",
        quando: "Noche, en los días de apertura nocturna.",
        tempo: "1-2 horas",
        url: "https://banskoski.com",
        consiglio: "Después de la bajada, après-ski en los locales de la base de la góndola."
      },
      {
        nome: "Todorka Peak",
        testo: "La estación superior de Todorka, con vista a los montes Pirin. Se llega con los remontes.",
        come: "Góndola y telesillas.",
        quando: "Día despejado, en invierno.",
        tempo: "1 hora",
        consiglio: "Tener en cuenta el viento y el frío en la cima."
      },
      {
        nome: "Casco antiguo de Bansko",
        testo: "Casas de piedra y madera de la «escuela de Bansko» (el renacimiento búlgaro del siglo XIX), la iglesia de la Santísima Trinidad, construida por los vecinos en el siglo XIX, y las mehanas típicas con kapama, banitsa y shopska salata. Es más animado por la noche.",
        come: "A pie desde la estación de la góndola.",
        quando: "Noche.",
        tempo: "2 horas",
        consiglio: "Comer en las mehanas del casco antiguo, no en la calle principal."
      }
    ],
    sapori: [
      {
        nome: "Kapama",
        testo: "Estofado de cerdo y salchichas con col, cocido lentamente en una cazuela de barro."
      },
      {
        nome: "Banitsa",
        testo: "Hojaldre de queso, un desayuno típico de Bulgaria."
      },
      {
        nome: "Shopska salata",
        testo: "Ensalada de tomate, pepino y feta rallado."
      },
      {
        nome: "Rakia",
        testo: "Aguardiente de fruta, que se bebe antes de las comidas."
      }
    ],
    attenzioni: [
      "Bulgaria usa el euro desde el 1 de enero de 2026: comparar con los precios en lev de datos antiguos.",
      "Desde Sofía hay unos 160 km: usar traslados reservados, no taxis de la calle.",
      "La zona de esquí tiene colas en temporada alta: llegar pronto a la góndola.",
      "En coche en invierno hace falta equipo de invierno (neumáticos de nieve, cadenas si se exigen)."
    ],
    esperienzeSlugs: ['sci-bansko', 'discesa-notturna-bansko'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'Las pistas nevadas del dominio esquiable de Bansko, Bulgaria',
    immagine: '/images/bulgaria/bansko-stock.jpg',
  },
  {
    slug: 'monastero-rila',
    paeseSlug: 'bulgaria',
    ordine: 2,
    nome: 'Monasterio de Rila',
    tipologia: ['religione', 'storia', 'unesco'],
    giorniConsigliati: 'media jornada, en el camino de regreso',
    visitataPersonalmente: true,
    introduzione: 'El mayor y más importante monasterio ortodoxo de Bulgaria, fundado en el siglo X por el ermitaño Iván de Rila y Patrimonio de la Humanidad de la UNESCO desde 1983.',
    percheAndarci: 'Fue el golpe de efecto del viaje. Después de los días en la nieve el contraste es total, y es probablemente el recuerdo más fuerte de todo el recorrido.',
    cosaVedere: [
      'La Iglesia de la Natividad de la Virgen, de cinco cúpulas, cubierta de frescos coloridísimos',
      'Las altas murallas de piedra que cierran el conjunto y le dan aspecto de fortaleza',
      'El Museo de Historia Eclesiástica, con la Cruz de Rafail, tallada con 104 escenas religiosas y 650 figuras en miniatura',
    ],
    cosaFare: ['Visita al conjunto monástico y a la iglesia (hay una ficha de experiencia dedicada)', 'Visita al Museo de Historia Eclesiástica'],
    doveDormire: 'No dormí allí: fue una parada de media jornada en el camino de regreso a Sofía.',
    doveMangiare: 'No tengo direcciones que recomendar: la parada fue toda para la visita.',
    comeArrivare: 'Con un desvío de la carretera principal entre Bansko y Sofía.',
    comeSpostarsi: 'A pie, dentro del conjunto monástico.',
    periodoMigliore: 'todo el año',
    costi: 'Entrada al conjunto y a la iglesia gratuita; Museo de Historia Eclesiástica unos 4 € (Bulgaria usa el euro desde 2026).',
    erroriDaEvitare: ['Entrar en la iglesia con hombros y rodillas descubiertos', 'Hacer fotos o vídeos dentro de los edificios religiosos sin seguir las normas del monasterio'],
    miaEsperienza:
      'Después de los días en la nieve, el monasterio fue el golpe de efecto del viaje. Los frescos coloridísimos de la Iglesia de la Natividad de la Virgen y el silencio de la montaña alrededor son el recuerdo más vivo de todo el recorrido.',
    luoghi: [
      {
        nome: "Complejo del Monasterio de Rila",
        testo: "El mayor y más famoso monasterio ortodoxo de Bulgaria, Patrimonio de la UNESCO, fundado en el siglo X, según la tradición, por San Juan de Rila y reconstruido entre 1834 y 1862 tras un incendio. Las altas murallas de piedra, casi de fortaleza, encierran un patio de pórticos con franjas blancas y negras.",
        come: "En coche o bus desde Sofía, al sur de la capital, o como desvío en la carretera entre Bansko y Sofía.",
        quando: "Temprano por la mañana, antes de los autobuses turísticos.",
        tempo: "1,5-2 horas",
        costo: "entrada libre",
        consiglio: "Es un lugar de culto: ropa que cubra hombros y rodillas."
      },
      {
        nome: "Iglesia de la Natividad de la Virgen",
        testo: "La iglesia de cinco cúpulas con frescos de colores vivos en el pórtico y en el interior, obra de varios pintores del siglo XIX, entre ellos los hermanos Zahari y Dimitar Zograf. Para las fotos en el interior, seguir las normas del monasterio.",
        come: "Dentro del patio del monasterio.",
        quando: "Mañana.",
        tempo: "30-45 minutos",
        costo: "entrada libre",
        consiglio: "El silencio de la montaña alrededor es lo mejor."
      },
      {
        nome: "Museo de Historia Eclesiástica y Cruz de Rafail",
        testo: "El museo del monasterio conserva reliquias y la Cruz de Rafail, una sola pieza de madera de 81 x 43 cm en la que el monje Rafail talló 104 escenas religiosas y 650 figuras en miniatura. Es pequeño pero rico.",
        come: "En el complejo, entrada aparte.",
        quando: "De día.",
        tempo: "45 minutos",
        costo: "entrada aparte, en euros desde 2026: precio expuesto en el lugar",
        consiglio: "El billete es fácil de perder: guardarlo en el bolsillo."
      }
    ],
    sapori: [
      {
        nome: "Comida de picnic",
        testo: "En el monasterio no hay restaurantes obligatorios: almorzar antes o después."
      }
    ],
    attenzioni: [
      "Ropa modesta: hombros y rodillas cubiertos, sin sombrero dentro de la iglesia.",
      "Dentro de la iglesia respetar las normas sobre fotos y hablar en voz baja.",
      "Carretera de montaña: en invierno hacen falta neumáticos de nieve."
    ],
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'La fachada con frescos de la Iglesia de la Natividad de la Virgen en el Monasterio de Rila, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
