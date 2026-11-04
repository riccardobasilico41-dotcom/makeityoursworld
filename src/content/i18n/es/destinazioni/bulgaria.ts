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
    introduzione: 'El dominio esquiable más famoso de Bulgaria: unos 70-75 km de pistas en los montes Pirin y un centro histórico de casas de piedra y madera.',
    percheAndarci: 'Para esquiar en un rincón de Europa que rara vez aparece en los planes de vacaciones blancas, a precios mucho más bajos que en los Alpes.',
    cosaVedere: ['El centro histórico de Bansko, entre las casas de la «escuela de Bansko» y la parte más moderna', 'La vista desde el Todorka Peak (2.560 metros)'],
    cosaFare: [
      'Esquí en las pistas de Bansko Ski Zone (hay una ficha de experiencia dedicada)',
      'La bajada iluminada de 7,5 km para el esquí nocturno (hay una ficha de experiencia dedicada)',
      'Après-ski en Sopranos o en el Happy End Bar, en la base de la góndola',
      'Cena en una mehana típica del centro histórico',
    ],
    doveDormire:
      'Elegí un hotel a pocos minutos a pie de la estación de la góndola: por la mañana llegaba rápido a las pistas y por la noche estaba a dos pasos del centro histórico. No era un establecimiento de marca ni especialmente refinado, solo una base práctica para la semana en la nieve.\n\nAlternativas cerca de la góndola. Económicas: Hotel Dumanov (unos 150 metros de la estación inferior), La Vien Guest House (5 minutos a pie, gestión familiar). Gama media: Hotel Ida (piscina interior y jacuzzi), MPM Hotel Sport (acceso casi directo a las pistas). Lujo: Kempinski Hotel Grand Arena Bansko (el único verdadero ski-in/ski-out del pueblo), Premier Luxury Mountain Resort.',
    doveMangiare: 'Comimos en las mehane del centro histórico: kapama, banitsa y shopska salata, siempre con rakia.',
    comeArrivare: 'Desde Sofía son unas 2-2 h 30 en coche (160 km). Como alternativa hay shuttles y transfers privados, el autobús público o el tren más minibús.',
    comeSpostarsi: 'Una góndola de 8 plazas lleva del centro a las pistas; de una pista a otra uno se mueve con los esquís.',
    periodoMigliore: '1 de diciembre - mediados de abril, con nieve artificial garantizada en más del 90 % de las pistas',
    costi: 'Forfait diario 35-40 € (en línea hasta un 25 % menos); cerveza en el refugio 1,50-2 €; cena en mehana 15-20 € por cabeza.',
    erroriDaEvitare: ['Comprar el forfait en taquilla: en línea, con unos días de antelación, cuesta menos', 'Esperar pistas de Alpes: a Bansko se va por la experiencia y por el precio, no por el nivel del dominio'],
    miaEsperienza:
      'No esperaba grandes cosas del esquí en Bulgaria, y es lo que encontré: pistas bonitas y bien cuidadas, nada exagerado comparado con los Alpes. Lo bueno está justo ahí. Se va por la experiencia exótica de esquiar en un rincón de Europa fuera de los circuitos habituales, más que por el esquí en sí.',
    luoghi: [
      {
        nome: "Zona de esquí de Bansko",
        testo: "A la zona se llega con una larga góndola desde el pueblo. Las pistas están bien cuidadas con nieve artificial garantizada en más del 90%, pero son más tranquilas que las alpinas. Se va por la experiencia exótica en un rincón de Europa fuera de los circuitos más conocidos.",
        come: "Estación de la góndola a pocos minutos a pie del centro; forfait diario en taquilla u online.",
        quando: "De diciembre a mediados de abril; por la mañana temprano la góndola tiene colas.",
        tempo: "jornada completa",
        costo: "forfait diario 35-40 euros, hasta un 25% menos online (dato del viaje, a revisar)",
        url: "https://banskoski.com",
        consiglio: "Reservar el forfait online para evitar la cola y ahorrar."
      },
      {
        nome: "Bajada nocturna iluminada",
        testo: "Una pista iluminada de 7,5 km para esquiar de noche, bajando hasta el pueblo. Es una de las atracciones más particulares de Bansko.",
        come: "Góndola hasta la estación intermedia y descenso; horarios en la web de la zona.",
        quando: "Noche, en los días de apertura nocturna.",
        tempo: "1-2 horas",
        url: "https://banskoski.com",
        consiglio: "Después de la bajada, après-ski en el Sopranos o en el Happy End Bar, en la base de la góndola."
      },
      {
        nome: "Todorka Peak",
        testo: "El mirador a 2.560 metros sobre la zona de esquí, con vista a los montes Pirin. Se llega con los remontes.",
        come: "Góndola y telesillas.",
        quando: "Día despejado, en invierno.",
        tempo: "1 hora",
        consiglio: "Tener en cuenta el viento y el frío en la cima."
      },
      {
        nome: "Casco antiguo de Bansko",
        testo: "Casas de piedra y madera de la «escuela de Bansko» (el renacimiento búlgaro del siglo XIX), la iglesia de la Santísima Trinidad y las mehanas típicas con kapama, banitsa y shopska salata. Es más animado por la noche.",
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
        testo: "Hojaldre de queso, el desayuno más común de Bulgaria."
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
      "Desde Sofía son unas 2-2h30 por carretera (160 km): usar traslados reservados, no taxis de la calle.",
      "La zona de esquí tiene colas en temporada alta: llegar pronto a la góndola.",
      "En coche en invierno hacen falta neumáticos de invierno y cadenas a bordo."
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
      'Los muros de piedra de 24 metros de altura que cierran el conjunto',
      'El Museo de Historia Eclesiástica, con la Cruz de Rafail tallada con más de 1.500 figuras bíblicas',
    ],
    cosaFare: ['Visita al conjunto monástico y a la iglesia (hay una ficha de experiencia dedicada)', 'Visita al Museo de Historia Eclesiástica'],
    doveDormire: 'No dormí allí: fue una parada de media jornada en el camino de regreso a Sofía.',
    doveMangiare: 'No tengo direcciones que recomendar: la parada fue toda para la visita.',
    comeArrivare: 'Con un desvío de la carretera principal entre Bansko y Sofía.',
    comeSpostarsi: 'A pie, dentro del conjunto monástico.',
    periodoMigliore: 'todo el año',
    costi: 'Entrada al conjunto y a la iglesia gratuita; Museo de Historia Eclesiástica unos 8 BGN (4 €).',
    erroriDaEvitare: ['Entrar en la iglesia con hombros y rodillas descubiertos', 'Hacer fotos o vídeos dentro de los edificios religiosos: no está permitido'],
    miaEsperienza:
      'Después de los días en la nieve, el monasterio fue el golpe de efecto del viaje. Los frescos coloridísimos de la Iglesia de la Natividad de la Virgen y el silencio de la montaña alrededor son el recuerdo más vivo de todo el recorrido.',
    luoghi: [
      {
        nome: "Complejo del Monasterio de Rila",
        testo: "El mayor monasterio búlgaro, Patrimonio de la UNESCO, fundado en el siglo X por San Juan de Rila y reconstruido en el siglo XIX. Las murallas de piedra de 24 metros encierran un patio de pórticos blancos y negros.",
        come: "En coche o bus desde Sofía (unas 2-2,5 horas) o como desvío en la carretera entre Bansko y Sofía.",
        quando: "Temprano por la mañana, antes de los autobuses turísticos.",
        tempo: "1,5-2 horas",
        costo: "entrada libre",
        consiglio: "Es un lugar de culto: ropa que cubra hombros y rodillas."
      },
      {
        nome: "Iglesia de la Natividad de la Virgen",
        testo: "La iglesia de cinco cúpulas con frescos de colores vivos en el pórtico y en el interior, obra de pintores búlgaros del siglo XIX (entre ellos Zahari Zograf). En el interior no se puede fotografiar.",
        come: "Dentro del patio del monasterio.",
        quando: "Mañana.",
        tempo: "30-45 minutos",
        costo: "entrada libre",
        consiglio: "El silencio de la montaña alrededor es lo mejor."
      },
      {
        nome: "Museo de Historia Eclesiástica y Cruz de Rafail",
        testo: "El museo del monasterio conserva reliquias y la Cruz de Rafail, tallada con más de 1.500 figuras bíblicas en miniatura. Es pequeño pero rico.",
        come: "En el complejo, entrada aparte.",
        quando: "De día.",
        tempo: "45 minutos",
        costo: "unos 8 BGN, 4 euros (dato del viaje, a revisar)",
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
      "No fotografiar dentro de la iglesia y no gritar.",
      "Carretera de montaña: en invierno hacen falta neumáticos de nieve."
    ],
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'La fachada con frescos de la Iglesia de la Natividad de la Virgen en el Monasterio de Rila, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
