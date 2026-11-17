import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'brasile/rio-de-janeiro',
  prezzi:
    'Trem do Corcovado (2026): adultos 139 R$ (unos 24 €) para cualquier nacionalidad, niños de 7 a 11 años 112 R$ (unos 19 €), hasta 6 años gratis en brazos de un adulto; el billete incluye tren de ida y vuelta y acceso al monumento. Furgonetas oficiales Paineiras Corcovado desde unos 87 R$ (unos 15 €) desde el centro de visitantes Paineiras, más caras desde Copacabana y Largo do Machado. Los descuentos para mayores de 60 y estudiantes valen solo para ciudadanos brasileños y residentes.',
  luoghi: [
    {
      nome: 'Cristo Redentor y la terraza del Corcovado',
      testo:
        'La estatua art déco de 30 metros, 38 con el pedestal, en la cima del Corcovado, a unos 700 metros sobre la ciudad. Desde la terraza a sus pies se ve toda la forma de Río: el Pan de Azúcar a la entrada de la bahía, Copacabana, Ipanema y la laguna Rodrigo de Freitas. En la base hay una pequeña capilla.',
      come:
        'Con el tren de cremallera desde Cosme Velho o con las furgonetas oficiales; desde la llegada se sube con ascensores y escaleras mecánicas o a pie el último tramo.',
      quando: 'Con la primera salida de la mañana, antes de las nubes y de la multitud; al mediodía la estatua suele estar cubierta.',
      tempo: '3-4 horas entre subida, visita y bajada',
      costo: 'Incluido en el billete del tren (139 R$, unos 24 €) o de la furgoneta (desde 87 R$, unos 15 €) (2026)',
      orari:
        'Tren y furgonetas todos los días de 8 a 19 (última bajada), en verano hasta las 20; en temporada alta el horario puede ampliarse',
      url: 'https://www.tremdocorcovado.rio/',
      lat: -22.95194,
      lng: -43.21056,
      consiglio: 'Arriba hace viento: una chaqueta ligera viene bien incluso en verano.',
    },
    {
      nome: 'Trem do Corcovado (Cosme Velho)',
      testo:
        'El ferrocarril de cremallera de 1884, el ferrocarril turístico más antiguo de Brasil, que sube desde el barrio de Cosme Velho a través de la mata atlántica del Parque Nacional de la Tijuca. Los trenes eléctricos actuales hacen la subida entre árboles, lianas y vistas de la ciudad.',
      come:
        'Estación en Rua Cosme Velho 513, en taxi o aplicación desde Copacabana e Ipanema. El billete se compra en línea con día y hora; el check-in en taquilla hay que hacerlo al menos 40 minutos antes de la salida.',
      quando: 'El primer tren del día, o a última hora de la tarde con la luz cálida.',
      tempo: 'Unas 3 horas con la visita arriba',
      costo: 'Adultos 139 R$, unos 24 €; niños de 7 a 11 años 112 R$, unos 19 €; hasta 6 años gratis en brazos (2026)',
      orari: 'Salidas todos los días de 8 a 18, cada veinte minutos, con viajes extra según disponibilidad',
      url: 'https://www.tremdocorcovado.rio/',
      lat: -22.94061,
      lng: -43.19853,
    },
    {
      nome: 'Furgonetas oficiales y Centro de Visitantes Paineiras',
      testo:
        'La otra forma oficial de subir: furgonetas de la concesionaria Paineiras Corcovado que salen de Copacabana, de Largo do Machado o del centro de visitantes Paineiras, en el bosque a unos 15 minutos de la estatua. El billete incluye la furgoneta de ida y vuelta desde el mismo punto y el acceso al monumento.',
      come:
        'En Copacabana se sube en Praça do Lido; en Largo do Machado, delante de la iglesia de Nossa Senhora da Glória, cerca del metro. Al centro de visitantes, en Estrada das Paineiras, se llega en taxi o aplicación: no hay aparcamiento.',
      quando: 'La primera franja, a las 8; hay que llegar 15 minutos antes de la hora elegida (la tolerancia es de 15 minutos).',
      tempo: 'Al menos hora y media arriba, más el trayecto',
      costo: 'Desde Paineiras unos 87 R$, unos 15 €; desde Copacabana y Largo do Machado cuesta más (2026)',
      orari:
        'Todos los días: Copacabana 7:30-16:00, Largo do Machado 7:00-16:00, Paineiras 7:30-18:00 con última entrada a las 17:00',
      url: 'https://www.paineirascorcovado.com.br/',
      lat: -22.94774,
      lng: -43.21751,
    },
    {
      nome: 'Parque Lage',
      testo:
        'Una mansión de los años veinte dentro de un parque de mata atlántica, al pie del Corcovado: desde el jardín se ve el Cristo sobre la pared de roca. El palacio con el patio y la piscina está cerrado por restauración, con reapertura prevista en 2027; el parque, los senderos y los jardines siguen abiertos. De aquí sale el sendero que sube hasta el Corcovado.',
      come: 'En taxi o aplicación, o a pie desde el Jardim Botânico en unos diez minutos por Rua Jardim Botânico.',
      quando: 'Por la mañana, junto con el Jardim Botânico.',
      tempo: '1 hora; media jornada con el sendero',
      costo: 'Entrada libre',
      orari:
        'Entrada 8:00-18:00, con una hora para salir tras el cierre de la puerta; acceso al sendero del Corcovado hasta las 15:00',
      url: 'https://parquenacionaldatijuca.rio/',
      lat: -22.9606,
      lng: -43.212,
      consiglio: 'El sendero del Corcovado es empinado, con un tramo equipado con cadenas: mejor hacerlo en grupo o con guía.',
    },
    {
      nome: 'Floresta da Tijuca',
      testo:
        'El sector más grande del Parque Nacional de la Tijuca, un bosque replantado en el siglo XIX dentro de la ciudad, con senderos, cascadas y miradores. La Cascatinha Taunay, cerca de la entrada, es la cascada más fácil de alcanzar; los senderos más largos suben hasta el Pico da Tijuca.',
      come:
        'La entrada principal está en Praça Afonso Viseu, en Alto da Boa Vista, en taxi o aplicación. Dentro se recorre en coche por la carretera del parque o a pie por los senderos.',
      quando: 'A primera hora, con el fresco; mejor en días laborables.',
      tempo: 'Media jornada',
      orari:
        'Coches 8:00-17:00, a pie y en bici 6:00-17:00, salida antes de las 18:00; centro de visitantes 8:00-17:00; senderos desde Bom Retiro 7:00-15:00',
      url: 'https://parquenacionaldatijuca.rio/',
      lat: -22.96131,
      lng: -43.27347,
      consiglio: 'Con viento fuerte o tormentas el parque puede cerrar en el mismo día.',
    },
    {
      nome: 'Vista Chinesa',
      testo:
        'Un mirador con forma de pagoda en el Parque Nacional de la Tijuca. Desde aquí se ven la laguna, Ipanema, el Pan de Azúcar y el Cristo, con el bosque alrededor.',
      come: 'Solo en coche, taxi de aplicación o tour; la carretera sube por el bosque desde el Jardim Botânico.',
      quando: 'Por la mañana con el cielo despejado.',
      tempo: '1 hora con la carretera',
      costo: 'Libre',
      lat: -22.97316,
      lng: -43.24976,
      consiglio: 'No subas a pie por las carreteras del bosque: mejor un tour o un coche con conductor.',
    },
    {
      nome: 'Jardim Botânico',
      testo:
        'El jardín botánico fundado en 1808 al pie del Corcovado, con la avenida de palmeras imperiales, los invernaderos de orquídeas y bromelias y los monos y tucanes entre los árboles. Desde muchos puntos se ve el Cristo en lo alto.',
      come: 'En taxi o aplicación desde Ipanema y Leblon, 10-15 minutos; billetes también en línea.',
      quando: 'A primera hora, con el fresco y los animales más activos.',
      tempo: '2-3 horas',
      costo: '80 R$ para extranjeros, unos 14 € (2026)',
      orari: 'Arboreto de jueves a martes 8-17, los miércoles 11-17; cerrado el 25 de diciembre y el 1 de enero',
      url: 'https://www.gov.br/jbrj/pt-br/assuntos/visitacao/horarios-e-ingressos',
      lat: -22.9675,
      lng: -43.22389,
    },
    {
      nome: 'Santa Teresa y el bonde',
      testo:
        'El barrio de la colina con villas históricas, talleres y el tranvía amarillo, el bonde, que sale del centro y cruza los arcos de Lapa. Desde el barrio se baja a pie por la Escadaria Selarón, la escalinata cubierta de azulejos de colores.',
      come: 'El bonde sale de la estación Carioca, en el centro, cerca del metro Carioca; si no, taxi o aplicación hasta Largo dos Guimarães.',
      quando: 'De día, en días laborables, cuando el tranvía va menos lleno.',
      tempo: '2-3 horas',
      costo: 'Bonde 20 R$ ida y vuelta, unos 3,5 €; escalinata libre (2026)',
      orari: 'Bonde todos los días 8-17 en la línea principal',
      url: 'https://riotur.rio/',
      lat: -22.9217,
      lng: -43.18605,
      consiglio: 'Se va de día y se vuelve en aplicación.',
    },
    {
      nome: 'Pan de Azúcar',
      testo:
        'El monolito de granito a la entrada de la bahía de Guanabara, la otra gran vista de Río, con el Cristo al otro lado de la ciudad. El teleférico sube en dos tramos, primero al Morro da Urca y luego a la cima.',
      come: 'Teleférico desde la estación de Praia Vermelha, en el barrio de Urca.',
      quando: 'Última hora de la tarde, para el atardecer sobre la bahía y la ciudad que se enciende.',
      tempo: '2-3 horas',
      costo: '205 R$ el billete completo, unos 35 €; la tarifa reducida vale solo para brasileños (2026)',
      orari: 'De lunes a viernes 8:30-21, sábados y domingos 7:30-21; último embarque a las 19:30',
      url: 'https://www.bondinho.com.br/',
      lat: -22.94949,
      lng: -43.15616,
      consiglio: 'Llegar una hora antes del atardecer para evitar la cola.',
    },
  ],
  programmi: [
    {
      titolo: 'Media jornada: el Cristo',
      tappe: [
        'Tren de las 8 desde Cosme Velho (check-in 40 minutos antes)',
        'Hora y media en la terraza y en la capilla',
        'Bajada y comida en Laranjeiras o en la Zona Sul',
      ],
    },
    {
      titolo: '1 día: el Cristo y las dos vistas',
      tappe: [
        'Mañana: Cristo Redentor con la primera salida',
        'Comida y tarde en el Jardim Botânico y el Parque Lage',
        'Atardecer desde el Pan de Azúcar',
      ],
    },
    {
      titolo: '2 días: el Cristo y el bosque',
      tappe: [
        'Día 1: programa de 1 día',
        'Día 2: Floresta da Tijuca y Cascatinha por la mañana, Vista Chinesa',
        'Tarde: bonde y Santa Teresa, bajada por la Escadaria Selarón',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Trem do Corcovado, adultos',
      prezzo: '139 R$ (unos 24 €)',
      include: 'Tren de ida y vuelta desde Cosme Velho y acceso al monumento; válido para cualquier nacionalidad',
      dove: 'tremdocorcovado.rio, app, call center o WhatsApp oficiales',
    },
    {
      tipo: 'Trem do Corcovado, niños de 7 a 11 años',
      prezzo: '112 R$ (unos 19 €)',
      include: 'Igual que el de adulto; hace falta un documento con la edad. Hasta 6 años gratis en brazos de un adulto',
      dove: 'tremdocorcovado.rio',
    },
    {
      tipo: 'Trem do Corcovado, mayores de 60 y estudiantes',
      prezzo: '74 R$ mayores de 60, 112 R$ estudiantes (unos 13-19 €)',
      include: 'Solo para ciudadanos brasileños y residentes con documento',
      dove: 'tremdocorcovado.rio',
    },
    {
      tipo: 'Furgoneta oficial desde Paineiras',
      prezzo: 'unos 87 R$ (unos 15 €)',
      include: 'Furgoneta de ida y vuelta desde el centro de visitantes y acceso al monumento',
      dove: 'paineirascorcovado.com.br',
    },
    {
      tipo: 'Furgoneta oficial desde Copacabana o Largo do Machado',
      prezzo: 'más que la furgoneta desde Paineiras, según la fecha',
      include: 'Furgoneta de ida y vuelta desde el mismo punto y acceso al monumento',
      dove: 'paineirascorcovado.com.br',
    },
    {
      tipo: 'Pan de Azúcar, teleférico',
      prezzo: '205 R$ (unos 35 €)',
      include: 'Los dos tramos de ida y vuelta; reducida solo para brasileños',
      dove: 'bondinho.com.br o taquilla',
    },
    {
      tipo: 'Jardim Botânico',
      prezzo: '80 R$ para extranjeros (unos 14 €)',
      include: 'Entrada al arboreto',
      dove: 'En línea o taquilla',
    },
  ],
  mesi: [
    { voto: 3, folla: 'alta', nota: 'Pleno verano y vacaciones brasileñas: calor, tormentas por la tarde y nubes frecuentes en la cima.' },
    { voto: 2, folla: 'alta', nota: 'El Carnaval llena la ciudad y sube los precios; calor y lluvias.' },
    { voto: 3, folla: 'media', nota: 'Todavía calor y lluvias, pero tras el Carnaval baja la gente.' },
    { voto: 4, folla: 'media', nota: 'Temperaturas en descenso y menos lluvia; Semana Santa y Tiradentes, el 21, atraen visitantes.' },
    { voto: 5, folla: 'bassa', nota: 'Empieza la estación seca: aire más limpio y poca gente.' },
    { voto: 4, folla: 'bassa', nota: 'Invierno suave y seco, con las festas juninas en los barrios.' },
    { voto: 4, folla: 'media', nota: 'Seco y fresco, pero con las vacaciones escolares brasileñas.' },
    { voto: 5, folla: 'bassa', nota: 'Uno de los meses más secos, con buena visibilidad.' },
    { voto: 4, folla: 'media', nota: 'Todavía seco, temperaturas en subida; fiesta nacional el 7.' },
    { voto: 4, folla: 'media', nota: 'Primavera, con las primeras lluvias; fiesta nacional el 12.' },
    { voto: 3, folla: 'media', nota: 'Más calor y humedad, festivos el 15 y el 20.' },
    { voto: 2, folla: 'alta', nota: 'Navidad y Año Nuevo: afluencia desbordada, calor y lluvias.' },
  ],
  zone: [
    {
      nome: 'Copacabana',
      perChi: 'Quien busca el paseo marítimo y los precios más bajos',
      testo: 'De aquí salen también las furgonetas oficiales al Cristo, en Praça do Lido. El paseo marítimo siempre está animado, pero algunas calles interiores son menos seguras de noche.',
      fascia: '50-180 €',
    },
    {
      nome: 'Ipanema y Leblon',
      perChi: 'Quien quiere la zona más cuidada',
      testo: 'Mar, restaurantes y metro cerca; Jardim Botânico, Parque Lage y Cosme Velho están a pocos minutos en taxi.',
      fascia: '90-250 €',
    },
    {
      nome: 'Santa Teresa',
      perChi: 'Quien busca ambiente y pousadas en villas históricas',
      testo: 'En la colina, cerca de Cosme Velho y del centro; calles empinadas, y por la noche es mejor moverse en aplicación.',
      fascia: '60-150 €',
    },
  ],
  gite: [
    {
      nome: 'Copacabana, Ipanema y el Arpoador',
      distanza: '15-20 minutos desde el Corcovado',
      come: 'En taxi o aplicación, o en metro desde Largo do Machado.',
      testo: 'Las playas que se ven desde la terraza del Cristo, con el atardecer aplaudido desde la Pedra do Arpoador.',
      link: '/destinazioni/brasile/rio-de-janeiro',
    },
    {
      nome: 'Niterói y el MAC',
      distanza: '20 minutos en ferri',
      come: 'Barco desde la estación de Praça XV, en el centro, luego a pie o en aplicación hasta el museo.',
      testo: 'El Museo de Arte Contemporáneo de Oscar Niemeyer sobre el acantilado, con la mejor vista de Río, el Pan de Azúcar y el Corcovado.',
    },
    {
      nome: 'Petrópolis',
      distanza: 'unos 70 km, 1,5 horas',
      come: 'Autobús desde la rodoviária Novo Rio o coche con conductor.',
      testo: 'La ciudad imperial en las montañas, con el Museo Imperial en el palacio de Pedro II y el fresco de la Serra dos Órgãos.',
    },
    {
      nome: 'Ilha Grande y Paraty',
      distanza: 'unos 150 km, 2,5-3 horas más el barco',
      come: 'Furgoneta y barco combinados desde la Zona Sul; mejor con al menos una noche.',
      testo: 'La Costa Verde: una isla sin coches cubierta de mata atlántica y un pueblo colonial junto al mar, juntos en el sitio de la UNESCO.',
      link: '/destinazioni/brasile/costa-verde',
    },
  ],
  faq: [
    {
      domanda: '¿Es mejor el tren o la furgoneta para subir al Cristo Redentor?',
      risposta:
        'El tren desde Cosme Velho (139 R$) es el más bonito, porque atraviesa el bosque de la Tijuca; las furgonetas oficiales salen también de Copacabana y Largo do Machado, y desde Paineiras cuestan menos, unos 87 R$. Ambos incluyen el acceso al monumento.',
    },
    {
      domanda: '¿A qué hora conviene ir?',
      risposta:
        'Con la primera salida de las 8: hay menos gente y la estatua está más a menudo libre de nubes, que tienden a subir hacia el mediodía.',
    },
    {
      domanda: '¿Hay que reservar?',
      risposta:
        'Sí, conviene comprar en línea el billete con día y hora, sobre todo los fines de semana y en diciembre y enero. Para el tren, el check-in en taquilla hay que hacerlo al menos 40 minutos antes.',
    },
    {
      domanda: '¿Se puede subir a pie al Corcovado?',
      risposta:
        'Sí, por el sendero que sale del Parque Lage: es empinado, tiene un tramo con cadenas y el acceso cierra a las 15. Arriba, el acceso al monumento se paga aparte, a la venta de 8 a 17.',
    },
    {
      domanda: '¿Qué pasa si el Cristo está entre las nubes?',
      risposta:
        'Ocurre en todas las estaciones, también en la seca: conviene mirar las webcams y el tiempo esa misma mañana y dejar un día de margen en el programa.',
    },
    {
      domanda: '¿Hay descuentos para turistas extranjeros?',
      risposta:
        'Solo para los niños: 112 R$ de 7 a 11 años y gratis hasta los 6 en brazos. Las tarifas reducidas para mayores de 60 y estudiantes valen solo para brasileños y residentes.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/cristo-redentore/vista-pan-di-zucchero.jpg',
      alt: 'Visitantes en la terraza del Corcovado frente a la bahía de Guanabara, con el Pan de Azúcar y las islas en el horizonte',
    },
    {
      src: '/images/meraviglie/cristo-redentore/statua-dettaglio.jpg',
      alt: 'El rostro del Cristo Redentor visto desde abajo, contra el cielo azul con nubes blancas',
    },
    {
      src: '/images/meraviglie/cristo-redentore/trem-cosme-velho.jpg',
      alt: 'Un tren rojo del Trem do Corcovado en la estación de Cosme Velho, entre los edificios y el verde de la colina',
    },
    {
      src: '/images/meraviglie/cristo-redentore/parque-lage.jpg',
      alt: 'La mansión del Parque Lage con la fuente y las palmeras, bajo la pared de roca del Corcovado con el Cristo en lo alto',
    },
    {
      src: '/images/meraviglie/cristo-redentore/cascatinha-tijuca.jpg',
      alt: 'La Cascatinha Taunay cayendo entre rocas y vegetación en la Floresta da Tijuca',
    },
    {
      src: '/images/meraviglie/cristo-redentore/bonde-santa-teresa.jpg',
      alt: 'El tranvía amarillo de Santa Teresa sobre las vías, con los rascacielos del centro de Río al fondo',
    },
  ],
}
