import type { Destinazione } from '@/lib/types'

export const destinazioniMarocco: Destinazione[] = [
  {
    slug: 'marrakech',
    paeseSlug: 'marocco',
    ordine: 1,
    nome: 'Marrakech',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '3 días, entre el principio y el final del viaje',
    visitataPersonalmente: true,
    introduzione: "La medina, los zocos, Jemaa El-Fna de noche y el Jardin Majorelle: el punto de partida y de llegada del viaje, donde pasamos tres noches en momentos distintos.",
    percheAndarci: "Es la puerta de entrada más cómoda a Marruecos, con monumentos y ambiente que merecen más de una visita.",
    cosaVedere: [
      'Plaza Jemaa El-Fna, el corazón de la medina',
      'Madraza Ali Ben Youssef',
      'Palacio de la Bahía',
      'Tumbas Saadíes',
      'Mezquita Koutoubia (solo el exterior)',
      'Jardin Majorelle',
    ],
    cosaFare: [
      'Visita guiada de Marrakech (mira la ficha de experiencia dedicada)',
      'Visita al Jardin Majorelle (mira la ficha de experiencia dedicada)',
      'Compras en los zocos',
      'Cena con espectáculo en Narwama',
    ],
    doveDormire:
      "Dormimos en Villa Zahra, una villa espaciosa y tranquila, cómoda y menos agobiante que un hotel en el corazón de la medina. Según las reseñas tiene piscina y personal atento. El único inconveniente es la ubicación, un poco alejada del centro, algo que hay que tener presente para los desplazamientos nocturnos.\n\nEconómicas: Central House Marrakech Medina, Equity Point Marrakech · gama media: Riad Nelia, Riad Yasmine · lujo (sin excesos): IZZA, Riad Kaiss.",
    doveMangiare: 'Kui Zin (cena de bienvenida), Narwama (espectáculo durante la cena), Safran by Koya.',
    usciteSerali: 'Churchill Bar o La Pergola.',
    comeArrivare: "El aeropuerto de Marrakech Menara (RAK) está a unos 6 km de la medina, 15-20 minutos en coche. El autobús L19 lleva a Jemaa el-Fna y a Guéliz en unos 30 minutos (unos 30 MAD, en efectivo a bordo, uno cada media hora aproximadamente de 6 a 23:30). Los taxis oficiales de la parada de llegadas piden unos 100-150 MAD de día y más después de las 20: el precio se fija antes de subir, o se pide el traslado al riad. Desde Casablanca, el tren ONCF tarda unas 3 horas.",
    comeSpostarsi: 'Furgoneta privada con guía, a pie por la medina, taxi para el Jardin Majorelle (50 MAD por trayecto).',
    periodoMigliore: 'principios de mayo',
    costi: "Presupuesto bajo unos 40-60 € al día por persona (riad sencillo o albergue en la medina, comida callejera y puestos de Jemaa el-Fna, dos monumentos); medio 100-150 € (riad con encanto, guía media jornada, cenas en restaurante, hammam); alto desde 250 € (riad de lujo u hotel con piscina, restaurantes de nivel, conductor privado). Monumentos 50-80 MAD, Jardin Majorelle 150 MAD, taxi en la ciudad unos 50 MAD por trayecto.",
    erroriDaEvitare: ['No reservar el Jardin Majorelle con antelación: las entradas tienen aforo limitado y en las horas centrales se llena enseguida'],
    miaEsperienza:
      "La visita guiada fue una forma excelente de orientarme en la medina, pero el recuerdo más fuerte de Marrakech sigue siendo Jemaa El-Fna, vista de nuevo de noche después del tour, entre encantadores de serpientes, músicos y puestos de todo tipo.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Plaza Jemaa el-Fna",
        testo: "El corazón de la medina: de día zumos de naranja, aguadores y encantadores de serpientes, de noche cuentacuentos, músicos y decenas de cocinas al aire libre. La UNESCO la proclamó patrimonio inmaterial en 2001 y la inscribió en la Lista en 2008.",
        come: "Se llega a pie desde la medina; los taxis paran en los bordes. Se camina entre los puestos.",
        quando: "Al atardecer y por la noche, cuando abren las cocinas.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        orari: "Siempre abierta; los puestos de comida al aire libre se montan hacia el atardecer",
        lat: 31.62583,
        lng: -7.98944,
        consiglio: "Comer en los puestos numerados con precios expuestos y elegir los llenos de gente local.",
      },
      {
        nome: "Madrasa Ben Youssef",
        testo: "La escuela coránica nacida en época meriní en el siglo XIV y reconstruida por el sultán saadí Abdallah al-Ghalib, terminada en 1564-65: entonces era la mayor del Magreb y alojaba hasta 800 estudiantes. El patio tiene una gran alberca en el centro y paredes de zellige, estuco y cedro tallado. Alrededor, en dos plantas, hay unas 130 celdas de estudiantes.",
        come: "A pie en la medina norte, desde Jemaa el-Fna.",
        quando: "Mañana a la apertura, para tener los patios vacíos.",
        tempo: "45 minutos",
        costo: "50 MAD, unos 5 € (de mi viaje)",
        lat: 31.63194,
        lng: -7.98619,
      },
      {
        nome: "Palacio de la Bahía",
        testo: "El palacio iniciado en la década de 1860 por el gran visir Si Musa y ampliado por su hijo Ba Ahmed hasta 1900: unas 150 estancias, patios, jardines y techos de cedro pintado.",
        come: "A pie desde el Mellah o Jemaa el-Fna.",
        quando: "Mañana.",
        tempo: "1 hora",
        costo: "70 MAD, unos 6,5 € (de mi viaje)",
        lat: 31.62159,
        lng: -7.98223,
      },
      {
        nome: "Tumbas Saadíes",
        testo: "La necrópolis real saadí, ampliada sobre todo por Ahmad al-Mansur (1578-1603), con columnas de mármol de Carrara, muqarnas y zellige. La Sala de las Doce Columnas es la tumba de al-Mansur.",
        come: "Detrás de la mezquita de la Kasba, a pie desde Jemaa el-Fna.",
        quando: "A primera hora: por la tarde se forma cola.",
        tempo: "30-45 minutos",
        costo: "70 MAD, unos 6,5 € (de mi viaje)",
        lat: 31.6173,
        lng: -7.9887,
      },
      {
        nome: "Jardín Majorelle",
        testo: "El jardín botánico de una hectárea creado por el pintor Jacques Majorelle desde 1923, con el azul cobalto que lleva su nombre; en los años ochenta lo compraron y restauraron Yves Saint Laurent y Pierre Bergé. En la villa está el museo bereber Pierre Bergé.",
        come: "Taxi desde la medina, en el barrio de Guéliz. Entradas solo online, en la web oficial tickets.jardinmajorelle.com.",
        quando: "Jardín abierto todos los días de 8 a 17.30, última entrada a las 17; museo bereber de 8.30 a 17 (2026). Mejor a la apertura.",
        tempo: "1-1,5 horas",
        costo: "150 MAD, unos 14 € (de mi viaje)",
        orari: "Jardín todos los días 8-17:30, última entrada a las 17; museo bereber 8:30-17 (2026)",
        lat: 31.64278,
        lng: -8.00306,
        url: "https://www.jardinmajorelle.com/",
        consiglio: "Comprar la entrada solo en la web oficial: las compradas en otros sitios no dan acceso.",
      },
      {
        nome: "Museo Yves Saint Laurent",
        testo: "Abierto en 2017 a pocos pasos del Jardin Majorelle, muestra por rotación ropa, bocetos y fotografías del diseñador, que tenía casa en Marrakech. También hay una sala de exposiciones temporales.",
        come: "A pie desde el Jardin Majorelle. Entradas en la web oficial tickets.jardinmajorelle.com.",
        quando: "Abierto todos los días salvo el miércoles, de 10 a 18, última entrada 17.30 (2026).",
        tempo: "1 hora",
        lat: 31.64254,
        lng: -8.00342,
        url: "https://www.museeyslmarrakech.com/",
        consiglio: "Combinarlo con el Majorelle la misma mañana, reservando los dos con antelación.",
      },
      {
        nome: "Mezquita Kutubía",
        testo: "La mezquita almohade construida entre 1158 y 1195, con un alminar de unos 77 metros que es la referencia de la ciudad y probablemente inspiró la Giralda de Sevilla. Está cerrada a los no musulmanes; en la explanada se ven los restos de la primera mezquita, iniciada en 1147.",
        come: "A pie desde Jemaa el-Fna, hacia el oeste.",
        quando: "Atardecer, cuando el alminar se colorea y empieza la llamada a la oración de la tarde.",
        tempo: "30 minutos",
        costo: "Exterior y jardines libres",
        orari: "Exterior y jardines siempre accesibles; mezquita cerrada a los no musulmanes",
        lat: 31.62412,
        lng: -7.99354,
      },
      {
        nome: "Zocos de la medina",
        testo: "El laberinto de mercados cubiertos al norte de Jemaa el-Fna, dividido por oficios: faroles y metales, cuero, babuchas, alfombras, especias, tintoreros. El Zoco Semmarine es el eje principal; cuanto más lejos de la plaza, más talleres de artesanos trabajando.",
        come: "A pie desde Jemaa el-Fna, entrando por el Zoco Semmarine. Un mapa sin conexión evita depender de quien se ofrece a indicar el camino.",
        quando: "Por la mañana, cuando abren las tiendas y hay menos gente; el viernes a mediodía muchas cierran por la oración.",
        tempo: "2-3 horas",
        costo: "entrada libre",
        lat: 31.62792,
        lng: -7.98809,
        consiglio: "Se regatea siempre, empezando muy por debajo de la mitad del precio pedido, y sin prisas.",
      },
      {
        nome: "Palacio El Badi",
        testo: "Las ruinas del gran palacio que el sultán saadí Ahmad al-Mansur empezó en 1578, revestido de oro, ónice y mármol italiano, y que el sultán alauí Mulay Ismail despojó un siglo después. Quedan el inmenso patio con estanques y naranjos, las murallas con cigüeñas y, en un pabellón, el minbar de la Kutubía.",
        come: "A pie desde la Place des Ferblantiers, al sur de la medina.",
        quando: "Última hora de la tarde, cuando la luz calienta los muros y se puede subir a las murallas.",
        tempo: "1 hora",
        lat: 31.6183,
        lng: -7.9858,
        consiglio: "Subir a las terrazas para ver los tejados y el Atlas.",
      },
      {
        nome: "Le Jardin Secret",
        testo: "Un riad del siglo XVI en pleno corazón de la medina restaurado con dos jardines, uno islámico en cuatro partes y otro exótico, regados por el antiguo sistema de khettaras. Un lugar tranquilo a dos pasos de los zocos, con una torre desde la que se ven los tejados de la medina y el Atlas.",
        come: "A pie desde los zocos, en la rue Mouassine.",
        quando: "En las horas de calor, como pausa de los zocos.",
        tempo: "45 minutos-1 hora",
        lat: 31.63087,
        lng: -7.99005,
        url: "https://lejardinsecretmarrakech.com/en/",
      },
      {
        nome: "Maison de la Photographie",
        testo: "Una colección de fotografías de Marruecos entre 1870 y 1960, expuesta en una vieja casa de la medina: retratos, paisajes del Atlas y del desierto, la vida de las ciudades antes del turismo. Desde la terraza con café se ve toda la medina.",
        come: "A 3 minutos a pie de la Medersa Ben Youssef, en la rue Souk Ahal Fassi.",
        quando: "Junto con la Medersa Ben Youssef, por la mañana; la terraza también es bonita por la tarde.",
        tempo: "1 hora",
        costo: "80 MAD adultos, unos 7,5 €; gratis para menores de 15 años (2026)",
        orari: "Todos los días 9:30-19 (2026)",
        lat: 31.63199,
        lng: -7.98437,
        url: "https://www.maisondelaphotographie.ma/",
      },
      {
        nome: "Mellah",
        testo: "El antiguo barrio judío, creado en el siglo XVI junto al palacio real, con la sinagoga Lazama aún visitable, el gran cementerio judío y el mercado de especias del barrio. Hoy viven aquí muy pocos judíos, pero las casas con balcones a la calle lo distinguen del resto de la medina.",
        come: "A pie desde la Place des Ferblantiers, cerca de los palacios de la Bahía y El Badi.",
        quando: "Por la mañana, antes o después de la Bahía; la sinagoga y el cementerio cierran los sábados.",
        tempo: "1-1,5 horas",
        lat: 31.61981,
        lng: -7.98487,
      },
      {
        nome: "Jardines de la Menara",
        testo: "Un gran olivar con un estanque del siglo XII y un pabellón del XIX, con el Atlas al fondo en los días despejados. Más que por el jardín en sí, se viene por la vista y por un paseo fuera de la medina.",
        come: "En taxi desde la medina, 10-15 minutos; precio a fijar antes de subir.",
        quando: "Última hora de la tarde, en invierno y primavera, cuando el Atlas está nevado.",
        tempo: "1 hora",
        costo: "jardines de entrada libre",
        lat: 31.61333,
        lng: -8.02167,
      },
      {
        nome: "Dar Si Said",
        testo: "El palacio del siglo XIX del hermano del visir Ba Ahmed, a pocos pasos de la Bahía, que alberga el museo nacional del tejido y la alfombra: alfombras bereberes y árabes, trajes, joyas, puertas de madera pintada. Más recogido y menos concurrido que la Bahía.",
        come: "A 5 minutos a pie del Palacio de la Bahía.",
        quando: "Por la mañana, en la misma salida que la Bahía.",
        tempo: "45 minutos-1 hora",
        lat: 31.62333,
        lng: -7.98381,
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Medersa Ben Youssef y Maison de la Photographie",
          "Zocos de la medina y Le Jardin Secret",
          "Almuerzo en la medina",
          "Tarde: Palacio de la Bahía y Tumbas Saadíes",
          "Noche: Kutubía al atardecer y cena en Jemaa el-Fna",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Jardin Majorelle a la apertura y Museo Yves Saint Laurent",
          "Almuerzo en Guéliz",
          "Tarde: Mellah y Palacio El Badi",
          "Hammam y cena",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: excursión al Atlas, al valle del Ourika o a Imlil",
          "Vuelta a la ciudad a última hora de la tarde, Jardines de la Menara o Dar Si Said",
          "Última noche en Jemaa el-Fna",
        ],
      },
    ],
    zone: [
      {
        nome: "Medina",
        perChi: "quien quiere la atmósfera de Marrakech",
        testo: "Riads dentro de las murallas, a pocos minutos de Jemaa el-Fna. Callejones estrechos, ruido, difícil orientarse con equipaje: pedir al riad que envíe a alguien a la puerta.",
        fascia: "50-150 €",
      },
      {
        nome: "Guéliz",
        perChi: "quien quiere una ciudad moderna",
        testo: "Barrio europeo con restaurantes y tiendas, cerca del Jardín Majorelle. Más tranquilo, pero se pierde la atmósfera.",
        fascia: "50-120 €",
      },
      {
        nome: "Hivernage",
        perChi: "quien quiere hoteles con piscina",
        testo: "Grandes hoteles con jardín, cerca tanto de la medina como de Guéliz.",
        fascia: "120-300 €",
      },
    ],
    sapori: [
      {
        "nome": "Tajín",
        "testo": "Carne o pollo con limón, aceitunas y verduras, cocidos en el recipiente de barro."
      },
      {
        "nome": "Cuscús del viernes",
        "testo": "El plato de la semana en las casas; se encuentra en los restaurantes el viernes."
      },
      {
        "nome": "Pastela",
        "testo": "Hojaldre crujiente con pichón o pollo, almendras y canela."
      },
      {
        "nome": "Té de menta",
        "testo": "Siempre servido, para beber caliente y muy dulce."
      }
    ],
    attenzioni: [
      "Los guías no autorizados que se ofrecen en la medina piden luego una propina alta: acordar antes o usar un guía oficial.",
      "Si un chico dice «la calle está cerrada», intenta llevarlo a una tienda: comprobar en el mapa.",
      "En los zocos regatear empezando muy por debajo del primer precio.",
      "Fotos a los encantadores y músicos de Jemaa el-Fna: se paga, acordar antes.",
      "El Jardin Majorelle vende entradas solo online: no llegar sin ella."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Valle del Ourika",
        distanza: "unos 60 km, 1 hora",
        come: "Gran taxi compartido o excursión con conductor desde la ciudad.",
        testo: "Un valle verde al pie del Atlas, con pueblos bereberes, restaurantes junto al río y, en Setti Fatma, una caminata hasta las cascadas. La excursión más fácil para escapar del calor de Marrakech.",
      },
      {
        nome: "Imlil y el Alto Atlas",
        distanza: "unos 65 km, 1,5 horas",
        come: "Coche con conductor o gran taxi por Asni; desde Imlil se camina con un guía local.",
        testo: "El pueblo desde el que salen los senderos hacia el Toubkal, la cima más alta del norte de África. En el día se hacen caminatas de unas horas entre pueblos de adobe y nogales, con almuerzo en una casa bereber.",
      },
      {
        nome: "Cascadas de Ouzoud",
        distanza: "unos 150 km, 2,5-3 horas",
        come: "Excursión organizada o coche con conductor; día completo.",
        testo: "Saltos de agua de unos 110 metros en una garganta roja, con senderos, barquitas bajo las cascadas y macacos de Berbería entre los olivos.",
      },
      {
        nome: "Esauira",
        distanza: "unos 190 km, 2,5-3 horas",
        come: "Autobús Supratours o CTM desde la ciudad, o en coche; mejor con una noche allí.",
        testo: "La ciudad amurallada sobre el Atlántico, con la medina blanca y azul, el puerto pesquero y el viento constante. Las compras cuestan menos que en Marrakech.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Marrakech?",
        risposta: "Dos días completos bastan para la medina, los monumentos y el Jardin Majorelle; con un tercer día se añade una excursión al Atlas o al Ourika.",
      },
      {
        domanda: "¿Mejor un riad en la medina o un hotel en Guéliz?",
        risposta: "El riad en la medina da el ambiente y permite ir a pie a casi todo, pero los callejones son ruidosos y difíciles con equipaje. Guéliz y Hivernage son más tranquilos y modernos, a un taxi de la plaza.",
      },
      {
        domanda: "¿Hay que reservar el Jardin Majorelle?",
        risposta: "Sí: las entradas, con hora, se compran solo en la web oficial y las compradas en otros sitios no dan acceso. La misma web vende el Museo Yves Saint Laurent.",
      },
      {
        domanda: "¿Se puede entrar en la Kutubía?",
        risposta: "No: como casi todas las mezquitas de Marruecos, está cerrada a los no musulmanes. Se ven el minarete, la explanada y los jardines de alrededor.",
      },
      {
        domanda: "¿Cómo se regatea en los zocos?",
        risposta: "Se empieza muy por debajo de la mitad del precio pedido y se sube despacio, con calma y sin compromiso; si el precio no convence, se saluda y se sigue. Quien se ofrece a acompañar a una tienda suele cobrar comisión.",
      },
      {
        domanda: "¿Cuál es la mejor época?",
        risposta: "Primavera y otoño, con días cálidos y noches frescas. En julio y agosto se superan a menudo los 40 °C; en invierno los días son suaves pero las noches frías, y los riads no siempre están bien caldeados.",
      },
    ],
    esperienzeSlugs: ['tour-marrakech', 'jardin-majorelle'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La plaza Jemaa El-Fna animada de noche en Marrakech, Marruecos',
    immagine: '/images/marocco/jemaa-el-fna-sera.jpg',
  },
  {
    slug: 'ait-benhaddou',
    paeseSlug: 'marocco',
    ordine: 2,
    nome: 'Kasbah de Telouet y Aït Benhaddou',
    tipologia: ['storia', 'kasbah'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: "La antigua residencia de la familia Glaoui en Telouet y el ksar de Aït Benhaddou, Patrimonio de la Humanidad de la UNESCO y escenario de muchísimas películas, de «Gladiator» a «Juego de tronos».",
    percheAndarci: "Por uno de los pueblos fortificados de barro mejor conservados de Marruecos, que parece detenido en otra época.",
    cosaVedere: ['La Kasbah de Telouet, con sus interiores muy decorados', 'El ksar de Aït Benhaddou'],
    cosaFare: ['Visita a la Kasbah de Telouet', 'Visita al ksar de Aït Benhaddou'],
    doveDormire:
      "Dormimos en el Ksar El Janoub, el alojamiento con mejores reseñas de la zona: habitaciones limpias y cuidadas, piscina con vistas y un servicio descrito como atento y cordial (varias reseñas mencionan al propietario, Khalid, por su hospitalidad).\n\nEconómicas: Riad Caravane, Dar Mouna · gama media: Kasbah Tebi, Kasbah El Hajja · lujo (sin excesos): Kasbah Rayane, Caravane Hotel (Ounila Valley).",
    doveMangiare: 'Tawesna, para comer después de la visita al ksar.',
    comeArrivare: 'Unas 2 h 30 desde Marrakech hasta Telouet, luego aproximadamente 1 h hasta Aït Benhaddou. Desde Marrakech son unos 170 km por la carretera nacional de Uarzazat, que cruza el Alto Atlas por el puerto del Tizi n\'Tichka: sin el desvío a Telouet hacen falta entre 3 y 3 horas y media. Uarzazat está a unos 30 km, 40 minutos; su aeropuerto tiene vuelos sobre todo desde Casablanca. Los autobuses CTM y Supratours unen Marrakech y Uarzazat, y desde allí se sigue en grand taxi. Desde el aparcamiento del pueblo nuevo se cruza el río a pie.',
    comeSpostarsi: 'A pie por el ksar.',
    periodoMigliore: 'por la mañana, para tener la mejor luz sobre la fachada de tierra apisonada',
    costi: 'No apunté los precios de las entradas a Telouet y Aït Benhaddou. En Telouet se paga una pequeña entrada, unos 20-50 MAD (2-5 €); en el ksar se entra libremente. Presupuesto diario por persona, orientativo: bajo 30-50 € (casa de huéspedes sencilla, comida en una casa de comidas del pueblo, entradas mínimas); medio 80-120 € (kasba-hotel con piscina y cena, guía en el ksar, Atlas Studios); alto desde 180 € (kasba con encanto y conductor privado desde Marrakech).',
    erroriDaEvitare: ['Olvidarse de recargar los power banks antes de la noche en el desierto: en los campamentos de jaimas no hay enchufes'],
    miaEsperienza:
      "Me sorprendió el contraste entre el exterior de tierra apisonada de la Kasbah de Telouet, ya en parte derrumbado, y los interiores llenos de decoración. El ksar de Aït Benhaddou en persona es todavía más bonito que en las películas que lo hicieron famoso.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Puerto del Tizi n'Tichka",
        "testo": "El puerto más alto de la carretera entre Marrakech y Uarzazat, a unos 2.260 metros en el Alto Atlas. Arriba hay puestos de fósiles y minerales y un mirador sobre las montañas; la carretera sube con muchas curvas cerradas.",
        "come": "En coche por la carretera nacional desde Marrakech; el desvío hacia Telouet está justo después del puerto.",
        "quando": "Por la mañana. En invierno, comprobar antes si hay nieve o hielo.",
        "tempo": "Parada de 15-20 minutos",
        "costo": "Gratis",
        "orari": "Carretera abierta todo el año, salvo cierres por nieve",
        "lat": 31.2861,
        "lng": -7.3811
      },
      {
        "nome": "Kasbah de Telouet",
        "testo": "La residencia del clan Glaoui, iniciada en 1860 en la vieja ruta de caravanas del Atlas. Gran parte del palacio está en ruinas y el terremoto de 2023 dañó también la parte restaurada; los salones tienen zellige, estuco y techos de cedro pintado.",
        "come": "Desde Marrakech por el puerto del Tizi n'Tichka; se visita con un guía local. Preguntar antes qué salas están abiertas.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "costo": "Unos 20-50 MAD, 2-5 €, en efectivo (de mi viaje)",
        "lat": 31.287,
        "lng": -7.235,
        "consiglio": "El contraste entre el barro exterior y los interiores decorados es la sorpresa de la visita."
      },
      {
        "nome": "Valle del Ounila y kasba de Tamdaght",
        "testo": "La carretera que baja de Telouet hacia Aït Benhaddou sigue el río Ounila entre cañones rojos, pueblos de adobe y huertos en terrazas. En Tamdaght, a pocos kilómetros por encima del ksar, hay otra kasba de los Glaoui, en parte derrumbada.",
        "come": "En coche por la carretera asfaltada entre Telouet y Aït Benhaddou, cerca de una hora sin paradas.",
        "quando": "A media mañana, de camino al ksar.",
        "tempo": "1 hora con paradas",
        "costo": "El valle es de acceso libre",
        "lat": 31.0855,
        "lng": -7.146
      },
      {
        "nome": "Ksar de Aït Benhaddou",
        "testo": "El pueblo fortificado de adobe junto al río Ounila, patrimonio de la UNESCO desde 1987, escenario de películas desde «Lawrence de Arabia» hasta «Gladiator». Se sube a la cima por la vista del valle.",
        "come": "En coche desde Telouet; desde el pueblo moderno se cruza el río por la pasarela peatonal y se sube entre las casas.",
        "quando": "Mañana, por la mejor luz en la fachada y sin calor.",
        "tempo": "1-1,5 horas",
        "costo": "Entrada libre; algunas casas piden unos dírhams por subir a sus terrazas (de mi viaje)",
        "orari": "Siempre abierto",
        "url": "https://whc.unesco.org/en/list/444",
        "lat": 31.0469,
        "lng": -7.1296
      },
      {
        "nome": "El ksar desde la orilla opuesta",
        "testo": "El ksar se ve entero desde la orilla del pueblo nuevo, al otro lado del Ounila. Desde aquí, al atardecer, la fachada de tierra apisonada se enciende de rojo y los graneros de lo alto se recortan contra el cielo.",
        "come": "A pie desde el pueblo nuevo, junto al río, sin cruzar el puente.",
        "quando": "Atardecer.",
        "tempo": "30 minutos",
        "costo": "Gratis",
        "orari": "Siempre accesible",
        "lat": 31.0452,
        "lng": -7.131
      },
      {
        "nome": "Kasbah de Taourirt en Uarzazat",
        "testo": "La kasba ampliada por los Glaoui en el siglo XIX en el centro de Ouarzazate, donde se juntan los valles del Draa y del Dadès. Una parte está restaurada y abierta, con salas decoradas y techos de caña; otras partes siguen habitadas. Sufrió daños en el terremoto de 2023.",
        "come": "En el centro de Ouarzazate. Se visita por libre o con un guía en la entrada.",
        "quando": "Última hora de la tarde, de camino a los valles. Horarios en el lugar.",
        "tempo": "45 minutos",
        "lat": 30.9201,
        "lng": -6.8994,
        "consiglio": "Los estudios de cine de la ciudad solo valen para los cinéfilos: la kasba es más interesante."
      },
      {
        "nome": "Atlas Studios",
        "testo": "Los estudios de cine a las puertas de Uarzazat, donde siguen en pie los decorados de muchas películas de época: templos egipcios, palacios y fortalezas de yeso y madera. La visita se hace en grupo con un guía, que cuenta qué películas se rodaron en cada decorado.",
        "come": "En la carretera de Marrakech, a unos 5 km del centro de Uarzazat; en coche o en petit taxi.",
        "quando": "Por la mañana o a última hora de la tarde. Durante los rodajes algunas zonas pueden estar cerradas.",
        "tempo": "1 hora",
        "lat": 30.9418,
        "lng": -6.9669,
        "consiglio": "Merece la pena sobre todo a quien le gusta el cine; con poco tiempo, mejor la Kasba de Taourirt."
      },
      {
        "nome": "Kasba de Tifoultoute",
        "testo": "Una kasba de los Glaoui sobre una loma junto al río, a pocos kilómetros al oeste de Uarzazat, con vistas al valle, a los palmerales y a las montañas del Atlas. Recibe menos visitas que la Kasba de Taourirt.",
        "come": "En coche o en taxi desde Uarzazat, unos 10 minutos.",
        "quando": "A última hora de la tarde, por la luz sobre el valle.",
        "tempo": "30 minutos",
        "lat": 30.9266,
        "lng": -6.9904
      },
      {
        "nome": "Oasis de Fint",
        "testo": "Un pequeño oasis de palmeras al sur de Uarzazat, escondido entre colinas de roca oscura, con un pueblo de adobe junto al río. Se recorre a pie entre palmeras y huertos, lejos de los grupos.",
        "come": "En 4x4 o con un guía desde Uarzazat: el último tramo es de pista.",
        "quando": "Por la mañana o a última hora de la tarde, fuera de las horas de más calor.",
        "tempo": "2 horas",
        "costo": "El oasis es de acceso libre",
        "lat": 30.8265,
        "lng": -6.9511
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Salida de Marrakech, puerto del Tizi n'Tichka",
          "Kasba de Telouet",
          "Almuerzo por el camino",
          "Ksar de Aït Benhaddou"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Marrakech, puerto del Tizi n'Tichka, Kasba de Telouet, bajada por el valle del Ounila con parada en Tamdaght, atardecer sobre el ksar desde la orilla opuesta",
          "Día 2: el ksar de Aït Benhaddou temprano, antes de los grupos; Atlas Studios, kasbas de Taourirt y Tifoultoute en Uarzazat, y luego hacia Skoura o los valles"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aït Benhaddou",
        "perChi": "quien quiere dormir en el valle",
        "testo": "Kasbas-hotel a pocos pasos del ksar, sencillas y tranquilas. Se ve el atardecer y el ksar a primera hora, antes de que lleguen los autocares desde Marrakech.",
        "fascia": "35-90 €"
      },
      {
        "nome": "Uarzazate",
        "perChi": "quien quiere más servicios",
        "testo": "La ciudad cercana, a unos 30 km, con hoteles de todas las categorías, restaurantes, cajeros y el aeropuerto. Cómoda para los estudios de cine y la Kasba de Taourirt.",
        "fascia": "45-130 €"
      },
      {
        "nome": "Valle del Ounila",
        "perChi": "quien busca silencio y paisaje",
        "testo": "Casas de huéspedes en kasbas restauradas en los pueblos por encima del ksar, hacia Tamdaght. Pocos servicios alrededor: la cena casi siempre se toma donde se duerme."
      }
    ],
    sapori: [
      {
        "nome": "Tajín con almendras",
        "testo": "Cordero con ciruelas y almendras, en los restaurantes alrededor del ksar."
      },
      {
        "nome": "Pan bereber",
        "testo": "Cocido en los hornos de leña de los pueblos."
      },
      {
        "nome": "Dátiles del valle del Draa",
        "testo": "Dulces y blandos, a la venta junto a la carretera."
      },
      {
        "nome": "Té de menta",
        "testo": "Servido en todas partes como bienvenida."
      }
    ],
    attenzioni: [
      "El puerto de Tizi n'Tichka es sinuoso y en invierno puede haber nieve o hielo.",
      "Los guías de Aït Benhaddou piden tarifas por persona: acordar antes.",
      "Olvidar cargar los power banks antes de la noche en el desierto: en los campamentos no hay enchufes."
    ],
    gite: [
      {
        "nome": "Skoura y la Kasba Amridil",
        "distanza": "unos 70 km, 1 hora y 20",
        "come": "En coche por la carretera de los valles, pasado Uarzazat.",
        "testo": "Un gran palmeral salpicado de kasbas de adobe, entre ellas la Kasba Amridil, una de las mejor conservadas del sur, que se visita por dentro con sus habitaciones, terrazas y aperos de antaño."
      },
      {
        "nome": "Gargantas del Dadès",
        "distanza": "unos 130 km desde Uarzazat, 2 horas y media",
        "come": "En coche hacia el este, por Skoura y Kelaat M'Gouna; es la carretera hacia Merzouga.",
        "testo": "Un valle de pueblos bereberes y rocas rojas modeladas por el viento, que se cierra en una garganta recorrida por una carretera de curvas. En Kelaat M'Gouna, por el camino, en mayo se celebra la fiesta de las rosas."
      }
    ],
    faq: [
      {
        "domanda": "¿Se paga por entrar en el ksar de Aït Benhaddou?",
        "risposta": "No, la entrada es libre. Algunas familias que todavía viven en el ksar piden unos dírhams por subir a sus terrazas, y los guías tienen tarifas que conviene pactar antes."
      },
      {
        "domanda": "¿Cuánto tiempo hace falta para visitar Aït Benhaddou?",
        "risposta": "Entre una hora y una hora y media para subir entre las casas hasta el granero de arriba. Con Telouet y el puerto del Tizi n'Tichka, saliendo de Marrakech, hace falta un día entero."
      },
      {
        "domanda": "¿Se puede hacer en el día desde Marrakech?",
        "risposta": "Sí, pero son 3-4 horas de curvas por trayecto por el puerto del Tizi n'Tichka. Si el viaje sigue hacia el desierto, conviene dormir aquí o en Uarzazat."
      },
      {
        "domanda": "¿Es mejor dormir en Aït Benhaddou o en Uarzazat?",
        "risposta": "En Aït Benhaddou se ve el ksar al atardecer y a primera hora sin grupos. Uarzazat tiene más hoteles, restaurantes y el aeropuerto, y es el punto de partida hacia los valles."
      },
      {
        "domanda": "¿Qué películas se rodaron en Aït Benhaddou?",
        "risposta": "Entre las más conocidas, «Lawrence de Arabia», «Gladiator» y algunas escenas de «Juego de Tronos». Muchos otros decorados están en los Atlas Studios de Uarzazat."
      },
      {
        "domanda": "¿El terremoto de 2023 dañó los monumentos?",
        "risposta": "Sí, sobre todo las kasbas de Telouet y de Taourirt, donde algunas salas pueden estar cerradas. Conviene preguntar allí qué partes se visitan."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'El ksar fortificado de Aït Benhaddou, Patrimonio de la Humanidad de la UNESCO, Marruecos',
    immagine: '/images/marocco/ksar-ait-benhaddou.jpg',
  },
  {
    slug: 'merzouga',
    paeseSlug: 'marocco',
    ordine: 3,
    nome: 'Gargantas del Todra y Merzouga',
    tipologia: ['deserto', 'natura'],
    giorniConsigliati: '2 días, 1 noche en el desierto',
    visitataPersonalmente: true,
    introduzione: "Las Gargantas del Todra por el camino, y después una noche en Erg Chebbi con camello, quad y un cielo estrellado sin comparación.",
    percheAndarci: "Es la entrada al Sáhara y uno de los momentos más bonitos del viaje: el cielo estrellado del desierto, lejos de cualquier luz artificial.",
    cosaVedere: ['Las Gargantas del Todra', 'Las dunas de Erg Chebbi'],
    cosaFare: [
      'Visita a las Gargantas del Todra (30 minutos)',
      'Noche en el desierto en Erg Chebbi (mira la ficha de experiencia dedicada)',
      'Paseo en camello al atardecer y al amanecer',
      'Quad por el desierto (mira la ficha de experiencia dedicada)',
    ],
    doveDormire:
      "Dormimos en el Camp La Source, un campamento de jaimas a los pies de las dunas de Erg Chebbi: jaimas amplias y cuidadas, una gestión familiar descrita como muy acogedora y el cielo estrellado lejos de cualquier luz artificial.\n\nEconómicas: Hostel La Liberte Merzouga, Merzouga Camp and Hostel · gama media: Auberge La Khaima, Nomad Palace Camp · lujo (sin excesos): Merzouga Luxury Desert Camp, Sahara Desert Luxury Camp.",
    doveMangiare: 'Cena en el campamento de jaimas; las alergias e intolerancias se pueden avisar con antelación.',
    comeArrivare: 'Unas 3 h desde Aït Benhaddou hasta las Gargantas del Todra, luego unas 3 h hasta Erg Chebbi. Desde Fez son unos 460 km, 8 horas de carretera por el Atlas Medio y el valle del Ziz; desde Errachidia, donde está el aeropuerto más cercano, unos 125 km y 2 horas. Los autobuses Supratours unen Merzouga con Fez y Marrakech, con salidas por la tarde-noche. La carretera está asfaltada hasta el pueblo; el último tramo hasta los campamentos se hace en 4x4 o en camello, y el coche se deja en el albergue.',
    comeSpostarsi: 'Camello y quad por el desierto.',
    periodoMigliore: 'principios de mayo, noches todavía frescas',
    costi: 'Quad 350 MAD por persona. Presupuesto diario por persona, orientativo: bajo 40-60 € (albergue en Hassilabied o campamento sencillo con camello y cena); medio 90-140 € (campamento de gama media con cena y desayuno, quad, ruta en 4x4); alto desde 200 € (campamento de lujo con baño en la jaima y traslados privados).',
    erroriDaEvitare: ['Entrar en el desierto sin turbante o pashmina: conviene comprarlos antes en el mercado local, sirven contra la arena y contra el frío de la noche', 'Llegar a Merzouga sin existencias de alcohol y snacks: en el desierto se encuentran pocos'],
    miaEsperienza:
      "El cielo estrellado de noche, lejos de cualquier luz artificial, fue uno de los momentos más bonitos del viaje. El paseo en camello al amanecer, con las dunas cambiando de color a la luz del sol, cerró muy bien aquella noche.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Gargantas del Todra",
        "testo": "Un cañón en el Alto Atlas: en los últimos 600 metros las paredes lisas suben hasta unos 160 metros y el fondo se estrecha hasta una decena de metros. Se camina por el fondo junto al arroyo.",
        "come": "En coche por la carretera hacia Merzouga; se para en una explanada y se camina.",
        "quando": "Mañana, antes de los grupos.",
        "tempo": "30 minutos",
        "costo": "Entrada libre (de mi viaje)",
        "orari": "Siempre abierto",
        "lat": 31.5876,
        "lng": -5.5919
      },
      {
        "nome": "Palmeral de Tinghir",
        "testo": "El largo oasis de palmeras, olivos y huertos a lo largo del río Todgha, justo antes de las gargantas. Desde el mirador de la carretera se ven los pueblos de adobe y el viejo ksar de Tinghir sobre los campos.",
        "come": "Mirador junto a la carretera de las gargantas; para caminar entre los campos conviene un guía local.",
        "quando": "Por la mañana, antes de las gargantas.",
        "tempo": "20 minutos en el mirador, 1-2 horas a pie",
        "costo": "Gratis",
        "lat": 31.5454,
        "lng": -5.5718
      },
      {
        "nome": "Erg Chebbi y la noche en el desierto",
        "testo": "Dunas de hasta unos 150 metros de alto, a lo largo de una treintena de kilómetros, cerca de Merzouga. Se sube en camello al campamento, se cena, se duerme bajo un cielo sin luces y se vuelve al amanecer.",
        "come": "El camello sale del pueblo hacia el campamento.",
        "quando": "Atardecer y amanecer; la mejor temporada va de octubre a abril.",
        "tempo": "Una noche",
        "lat": 31.1382,
        "lng": -3.9708,
        "consiglio": "Llevar un turbante o pashmina contra la arena y el frío nocturno, y cargar el teléfono antes."
      },
      {
        "nome": "La gran duna",
        "testo": "La duna más alta del Erg Chebbi, unos 150 metros, al sur de Merzouga. La subida a pie por la arena cansa, pero desde la cresta se ve todo el erg y el límite neto con la hamada, el desierto de piedra.",
        "come": "A pie desde el campamento o el pueblo, o en camello hasta la base.",
        "quando": "Al amanecer o al atardecer; en verano evitar las horas centrales.",
        "tempo": "1-2 horas ida y vuelta",
        "costo": "Gratis",
        "lat": 31.0777,
        "lng": -3.9924,
        "consiglio": "Se sube descalzo o con calzado cerrado: las sandalias se llenan de arena y a mediodía la arena quema."
      },
      {
        "nome": "Quad en el desierto",
        "testo": "Un paseo en quad entre las dunas y los pueblos cerca de Merzouga, en grupo con un guía.",
        "come": "Reservar en el hotel o en el campamento.",
        "quando": "Mañana o última hora de la tarde.",
        "tempo": "1-2 horas",
        "costo": "350 MAD por persona, unos 32 € (de mi viaje)",
        "lat": 31.0999,
        "lng": -4.0141
      },
      {
        "nome": "Hassilabied",
        "testo": "El pueblo en el borde norte del Erg Chebbi, con albergues construidos pegados a las dunas. Es más tranquilo que Merzouga y cómodo para salir en camello hacia los campamentos.",
        "come": "Por carretera asfaltada, a pocos kilómetros al norte de Merzouga.",
        "quando": "Por la tarde, antes de salir hacia el campamento.",
        "tempo": "Media hora, o una noche en un albergue",
        "lat": 31.1383,
        "lng": -4.0259
      },
      {
        "nome": "Khamlia y la música gnawa",
        "testo": "Un pueblo al borde del Erg Chebbi ligado a la música gnawa: en las casas de música tocan tambores y qraqeb, las castañuelas de hierro, y sirven té. En verano acoge un festival gnawa de tres noches.",
        "come": "En coche o 4x4 desde Merzouga. Suele ser una parada de los tours en jeep alrededor del Erg Chebbi.",
        "quando": "Por la tarde, antes de salir hacia el campamento en el desierto.",
        "tempo": "1 hora",
        "costo": "Donativo para los músicos",
        "lat": 31.0351,
        "lng": -4.0073,
        "consiglio": "Dejar un donativo o comprar un CD: es de lo que vive el grupo."
      },
      {
        "nome": "Lago Dayet Srji",
        "testo": "Un lago estacional al oeste de Merzouga que se llena después de los inviernos lluviosos y atrae flamencos y otras aves migratorias. En los años secos queda como una llanura de arcilla.",
        "come": "En 4x4 o en quad desde Merzouga, a menudo dentro de la vuelta al Erg Chebbi.",
        "quando": "Final del invierno y primavera, después de las lluvias.",
        "tempo": "30 minutos",
        "costo": "Gratis",
        "lat": 31.0958,
        "lng": -4.054
      },
      {
        "nome": "Zoco de Rissani",
        "testo": "Rissani es el pueblo a la entrada del Tafilalet, cuna de la dinastía alauí que todavía reina en Marruecos. Su zoco es uno de los mercados más animados del sur: especias, dátiles, telas y, los días de mercado, el corral de los burros y el mercado de ganado.",
        "come": "En coche desde Merzouga, unos 40 minutos. Al mercado de animales hay que ir temprano.",
        "quando": "Martes, jueves o domingo por la mañana.",
        "tempo": "1-2 horas",
        "costo": "Gratis",
        "orari": "Días de mercado martes, jueves y domingo, de la mañana a primera hora de la tarde; los demás días solo abre una parte de las tiendas",
        "lat": 31.281,
        "lng": -4.2662
      },
      {
        "nome": "Mausoleo de Moulay Ali Cherif y Siyilmasa",
        "testo": "El mausoleo del antepasado de la dinastía alauí, a las puertas de Rissani: el santuario está reservado a los musulmanes, pero desde fuera se ven los patios y las puertas decoradas. Cerca están las ruinas de Siyilmasa, la ciudad caravanera fundada en el siglo VIII y durante siglos puerta del comercio del oro a través del Sáhara.",
        "come": "A pocos minutos en coche del centro de Rissani. De las murallas de Siyilmasa quedan montículos de tierra: para entenderlas hace falta un guía.",
        "quando": "Por la mañana, junto con el zoco.",
        "tempo": "1 hora",
        "lat": 31.2796,
        "lng": -4.253
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Gargantas del Todra, luego traslado a Merzouga, camello al atardecer, noche en el campamento",
          "Día 2: amanecer sobre las dunas, regreso"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: palmeral de Tinghir y Gargantas del Todra, llegada a Merzouga o Hassilabied, noche en un albergue",
          "Día 2: zoco de Rissani (martes, jueves o domingo) y mausoleo de Moulay Ali Cherif, tarde en Khamlia, camello al atardecer y noche en el campamento",
          "Día 3: amanecer en la gran duna, quad o ruta en 4x4 con el lago Dayet Srji, salida"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campamento de tiendas en Erg Chebbi",
        "perChi": "quien quiere la noche en el desierto",
        "testo": "Tiendas sencillas o más cómodas, con cena y desayuno. Poca electricidad.",
        "fascia": "80-160 €"
      },
      {
        "nome": "Hotel en Merzouga",
        "perChi": "quien prefiere una habitación",
        "testo": "Hoteles y kasbahs con piscina, a pocos minutos de las dunas."
      },
      {
        "nome": "Hassilabied",
        "perChi": "quien quiere las dunas delante de la ventana",
        "testo": "Albergues de adobe pegados al erg, más tranquilos que el pueblo de Merzouga; muchos organizan el camello y el campamento para la noche."
      },
      {
        "nome": "Rissani y Erfoud",
        "perChi": "quien llega tarde o busca precios más bajos",
        "testo": "Pueblos con hoteles, bancos y mercados, a 40-50 minutos de las dunas. Cómodos como parada, pero el desierto solo se ve yendo hasta allí."
      }
    ],
    sapori: [
      {
        "nome": "Pan del desierto (madfouna)",
        "testo": "Un pan relleno de carne y cebolla cocido bajo la arena."
      },
      {
        "nome": "Tajín de camello",
        "testo": "En algunos campamentos se sirve a pedido."
      },
      {
        "nome": "Té bereber",
        "testo": "Con menta y especias, en los campamentos."
      },
      {
        "nome": "Dátiles",
        "testo": "Dulces y secos, del valle del Ziz."
      }
    ],
    attenzioni: [
      "Entrar en el desierto sin turbante ni pashmina: conviene comprarlos antes en el mercado, sirven contra la arena y el frío.",
      "Llegar a Merzouga sin provisión de alcohol y snacks: en el desierto se encuentra poco.",
      "Las noches son frías incluso en primavera: llevar capas de abrigo.",
      "Comprobar cuánto cuestan camello y quad antes de firmar: los precios varían."
    ],
    gite: [
      {
        "nome": "Erfoud",
        "distanza": "unos 50 km, 50 minutos",
        "come": "En coche o grand taxi hacia el norte.",
        "testo": "El pueblo de los fósiles: en los talleres se cortan y pulen losas de piedra llenas de amonites y ortoceras, que se convierten en mesas, lavabos y recuerdos. En otoño acoge la fiesta de los dátiles."
      },
      {
        "nome": "Gargantas del Dadès",
        "distanza": "unos 70 km desde Tinghir, 1 hora y media",
        "come": "En coche hacia el oeste desde Tinghir, por la carretera de Uarzazat.",
        "testo": "Un valle más ancho y verde que el del Todra, con pueblos bereberes, rocas rojas modeladas por el viento y una carretera de curvas que sube por la garganta. Combina bien con el Todra para quien llega desde Uarzazat."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuánto dura el paseo en camello hasta el campamento?",
        "risposta": "Normalmente una hora o algo más a la ida, al atardecer, y lo mismo a la vuelta al amanecer. El camello suele estar incluido en la noche en el campamento."
      },
      {
        "domanda": "¿Hace frío por la noche en el desierto?",
        "risposta": "Sí, también en primavera. De noviembre a febrero las noches pueden acercarse a cero grados: hacen falta forro polar, chaqueta y un turbante o una pashmina."
      },
      {
        "domanda": "¿Cuál es la mejor época para Merzouga?",
        "risposta": "De octubre a abril, con días templados. En julio y agosto de día se superan a menudo los 40 grados; a principios de mayo las noches todavía son frescas."
      },
      {
        "domanda": "¿Los campamentos tienen baño y electricidad?",
        "risposta": "Depende de la categoría: los de gama alta tienen baño en la jaima, los sencillos baños compartidos. Los enchufes son pocos o ninguno, así que conviene llegar con las baterías externas cargadas."
      },
      {
        "domanda": "¿Mejor quad o camello?",
        "risposta": "El camello es la forma clásica de llegar al campamento; el quad, 350 MAD por persona, es un extra de una o dos horas entre las dunas. Quien tiene carné puede pedir una moto, que hay que reservar unos días antes."
      },
      {
        "domanda": "¿Se puede llegar a Merzouga sin un tour organizado?",
        "risposta": "Sí: la carretera está asfaltada hasta el pueblo y hay autobuses Supratours. Casi todos los albergues y campamentos organizan el camello y el traslado a las dunas."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['notte-deserto-erg-chebbi', 'gole-todra', 'quad-deserto-merzouga'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Un guía con turbante conduce a un dromedario sobre la arena naranja de las dunas de Merzouga',
    immagine: '/images/marocco/merzouga-guida-dromedario-riccardo.jpg',
  },
  {
    slug: 'agdz',
    paeseSlug: 'marocco',
    ordine: 4,
    nome: 'Agdz y el valle del Draa',
    tipologia: ['kasbah', 'natura'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: "El valle del Draa y la Kasbah de Tamnougalt, una de las mejor conservadas de la zona.",
    percheAndarci: "Una etapa más tranquila entre el desierto y la costa, con una de las kasbahs mejor conservadas de Marruecos.",
    cosaVedere: ['La Kasbah de Tamnougalt'],
    cosaFare: ['Visita a la Kasbah de Tamnougalt', 'Tiempo libre en la piscina'],
    doveDormire:
      "Pasamos una noche en la Kasbah Trane, a lo largo del valle del Draa: zona tranquila y buen punto de apoyo para la cercana Kasbah de Tamnougalt. No encontré reseñas con este nombre exacto.\n\nEconómicas: Kasbah Maktob Tamnougalt, Guest House Jardin de Tamnougalt · gama media: Maison d'Hôtes Kasbah Azul, Dar Jnane - La Maison Du Jardin · lujo (sin excesos): Hotel and Restaurant Kasbah Draa, Kasbah Kissane.",
    doveMangiare: 'Cena en el hotel.',
    comeArrivare: "Unas 4 h desde Merzouga: son unos 300 km, con el último tramo entre los palmerales del valle del Draa. Agdz está a unos 65 km al sur de Uarzazat y a unos 92 km al norte de Zagora, en la carretera que baja hacia el desierto. Para seguir hacia la costa, Taliouine está a unos 173 km, dos horas y media de conducción. Conviene viajar de día, con coche con conductor o de alquiler.",
    comeSpostarsi: 'A pie por la kasbah.',
    periodoMigliore: 'por la tarde-noche, para la visita a la Kasbah de Tamnougalt',
    costi: "Kasbah de Tamnougalt 20 MAD por persona + 200 MAD de propina para el guía local. Presupuesto diario por persona, orientativo: bajo 35-50 € (casa de huéspedes sencilla, comidas en el pueblo); medio 70-110 € (kasbah-hotel con piscina y cena incluida, guía local); alto 150 € o más (kasbah de gama alta, coche con conductor).",
    erroriDaEvitare: [],
    miaEsperienza:
      "Después del desierto, Agdz llegó en el momento justo para tomar aliento, y la Kasbah de Tamnougalt me recordó lo mucho que merece la pena salirse de los itinerarios más trillados.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kasbah de Tamnougalt",
        "testo": "Una kasbah fortificada en el valle del Draa, habitada por familias bereberes. Se visita con un guía local que explica las salas y la vida del pueblo.",
        "come": "En coche por el valle del Draa.",
        "quando": "Tarde, por la luz sobre los muros de barro.",
        "tempo": "1 hora",
        "costo": "20 MAD por persona más unos 200 MAD de propina para el guía (de mi viaje)",
        "lat": 30.67515,
        "lng": -6.38808
      },
      {
        "nome": "Valle del Draa",
        "testo": "El largo valle de palmerales a lo largo del río, con kasbahs y pueblos de barro.",
        "come": "En coche por la carretera principal.",
        "quando": "Tarde.",
        "tempo": "Medio día",
        "consiglio": "Tamnougalt es un buen motivo para salirse de las rutas más trilladas."
      },
      {
        "nome": "Zagora y el cartel «Tombuctú 52 días»",
        "testo": "La capital del valle del Draa. A la salida está el mural que sustituyó al viejo cartel «Tombouctou 52 jours», el tiempo que tardaban las caravanas en llegar a Tombuctú. Un poco más al sur está Tamegroute, con la biblioteca de la zawiya y la cerámica esmaltada.",
        "come": "Desde Agdz hacia el sur por el valle. Tamegroute está un poco más adelante.",
        "quando": "Por la mañana para Tamegroute y los talleres de alfareros.",
        "tempo": "Media jornada",
        "consiglio": "En la biblioteca de Tamegroute los libros solo se pueden ver allí; los hornos de los alfareros valen más que las pequeñas dunas de la zona.",
        "lat": 30.33056,
        "lng": -5.83806
      },
      {
        "nome": "Jebel Kissane",
        "testo": "La montaña que cierra el valle al este de Agdz, de unos 1.500 metros. Su nombre en árabe significa «vasos», porque sus cimas recuerdan a los vasos de té junto a la tetera. Se ve desde todo el pueblo y cambia de color al atardecer.",
        "come": "Se contempla desde la carretera y desde las terrazas de las kasbahs; la subida solo se hace con un guía local.",
        "quando": "Al atardecer, desde la terraza del hotel.",
        "tempo": "Unos minutos para verla, un día entero para subirla",
        "lat": 30.7028,
        "lng": -6.32806
      },
      {
        "nome": "Kasbah del Caíd Ali",
        "testo": "La kasbah de adobe en el borde del palmeral de Agdz, antigua residencia del caíd que gobernaba esta parte del Draa. Dentro hay un laberinto de salas, patios y escaleras hasta la terraza sobre el palmeral.",
        "come": "A pocos minutos en coche del centro de Agdz. Normalmente la enseña un guarda o alguien de la familia: preguntar el precio antes de entrar.",
        "quando": "Por la tarde, cuando el sol no pega en las terrazas.",
        "tempo": "45 minutos",
        "lat": 30.71286,
        "lng": -6.44502
      },
      {
        "nome": "Palmeral de Agdz y zoco del jueves",
        "testo": "El palmeral a lo largo del Draa, cruzado por las seguias, los canales de riego que llevan el agua a los huertos bajo las palmeras. Los jueves hay zoco semanal en el pueblo, un mercado para la gente del valle más que para los turistas: el propio nombre de Agdz significa «mercado» en tamazight.",
        "come": "A pie desde el centro, mejor con un guía local para no perderse entre los senderos.",
        "quando": "A primera hora de la mañana, el jueves para el zoco.",
        "tempo": "1-2 horas",
        "lat": 30.69778,
        "lng": -6.44972
      },
      {
        "nome": "Tamegroute",
        "testo": "El pueblo a unos 20 km al sur de Zagora, en la antigua ruta de las caravanas hacia Tombuctú. La zawiya Naciria guarda una biblioteca de unos 4.000 manuscritos de matemáticas, astronomía y medicina, los más antiguos del siglo XI, en pergamino de piel de gacela. En los talleres de los alfareros se ve cocer la cerámica esmaltada en verde en hornos alimentados con hojas de palmera.",
        "come": "En coche desde Zagora, una media hora hacia el sur. La biblioteca se visita con el guarda; los talleres están en el pueblo.",
        "quando": "Por la mañana.",
        "tempo": "1,5 horas",
        "consiglio": "Las mujeres entran en la biblioteca con los hombros cubiertos; no se fotografían los manuscritos sin preguntar.",
        "lat": 30.26191,
        "lng": -5.67951
      },
      {
        "nome": "Ksar Tissergate",
        "testo": "Un pueblo fortificado de adobe a las puertas de Zagora, todavía habitado por algunas familias. Dentro está el Museo de Artes y Tradiciones del valle del Draa, en tres plantas, con ropa, joyas, utensilios domésticos y aperos de labranza.",
        "come": "En coche, a pocos kilómetros al norte de Zagora en la carretera desde Agdz.",
        "quando": "De camino a Zagora, a media mañana.",
        "tempo": "1 hora",
        "lat": 30.39633,
        "lng": -5.85869
      },
      {
        "nome": "Dunas de Tinfou",
        "testo": "Un pequeño grupo de dunas doradas más allá de Tamegroute, las más cercanas a Zagora. Son pocas y pequeñas comparadas con Erg Chebbi o Erg Chigaga: merecen una parada para quien no va al desierto de verdad.",
        "come": "En coche, a pocos kilómetros después de Tamegroute.",
        "quando": "Al final de la tarde.",
        "tempo": "30-45 minutos",
        "consiglio": "Después de Merzouga se pueden saltar sin remordimientos.",
        "lat": 30.24093,
        "lng": -5.60114
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Salida de Merzouga",
          "Almuerzo en la carretera",
          "Kasbah de Tamnougalt",
          "Tiempo libre en la piscina"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: llegada a Agdz, piscina y Kasbah de Tamnougalt al atardecer",
          "Día 2: palmeral y Kasbah del Caíd Ali por la mañana, luego hacia el sur: Ksar Tissergate, Zagora y Tamegroute"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agdz",
        "perChi": "quien quiere una pausa tras el desierto",
        "testo": "Pequeña ciudad con kasbah-hoteles y piscina, tranquila y sin turistas."
      },
      {
        "nome": "Tamnougalt",
        "perChi": "quien quiere dormir dentro de una kasbah",
        "testo": "Casas de huéspedes y kasbahs restauradas a pocos minutos de Agdz, frente al palmeral y al Jebel Kissane. Se duerme en habitaciones de adobe, frescas incluso en verano."
      },
      {
        "nome": "Zagora",
        "perChi": "quien quiere más servicios",
        "testo": "Ciudad más grande al sur, con hoteles y salidas al desierto."
      }
    ],
    sapori: [
      {
        "nome": "Dátiles del Draa",
        "testo": "El producto de los palmerales del valle."
      },
      {
        "nome": "Tajín de verduras",
        "testo": "Con calabacín, zanahoria y azafrán, en hoteles y restaurantes."
      },
      {
        "nome": "Pan bereber",
        "testo": "Cocido en horno comunal."
      },
      {
        "nome": "Té de menta",
        "testo": "Con hospitalidad."
      }
    ],
    attenzioni: [
      "Comprobar cuánto pide el guía local antes de la visita: la propina se acuerda.",
      "El calor es fuerte en verano.",
      "La zona está muy aislada: llevar efectivo."
    ],
    gite: [
      {
        "nome": "Zagora y Tamegroute",
        "distanza": "unos 92 km hasta Zagora, luego otros 20 km",
        "come": "En coche hacia el sur por el valle del Draa",
        "testo": "El valle se abre entre palmerales y ksares hasta Zagora, luego la biblioteca de manuscritos y los alfareros de Tamegroute. Se vuelve a Agdz por la noche."
      },
      {
        "nome": "Uarzazat",
        "distanza": "unos 65 km",
        "come": "En coche hacia el norte, pasado el puerto",
        "testo": "La ciudad de los estudios de cine y de la Kasbah de Taourirt, útil también como parada de paso hacia Aït Benhaddou y Marrakech."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Agdz?",
        "risposta": "Una noche basta para la piscina y la Kasbah de Tamnougalt. Con dos días se añaden el palmeral y la bajada hacia Zagora y Tamegroute."
      },
      {
        "domanda": "¿Cuánto cuesta visitar la Kasbah de Tamnougalt?",
        "risposta": "20 MAD por persona la entrada, más la propina al guía local: nosotros dimos 200 MAD. Conviene acordarla antes."
      },
      {
        "domanda": "¿Es Agdz una buena parada entre Merzouga y la costa?",
        "risposta": "Sí: corta las unas cuatro horas desde Merzouga y al día siguiente se sale hacia Taliouine y Agadir. En una tarde se ve lo esencial."
      },
      {
        "domanda": "¿Cuándo hace demasiado calor en el valle del Draa?",
        "risposta": "De junio a agosto los días son muy calurosos. La primavera y el otoño son las épocas más cómodas, y las visitas conviene hacerlas por la mañana o al atardecer."
      },
      {
        "domanda": "¿Hace falta efectivo?",
        "risposta": "Sí: la zona está aislada y las tarjetas casi no se aceptan fuera de los hoteles. Entradas, propinas y zoco se pagan en dírhams."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La Kasbah de Tamnougalt en el valle del Draa, Marruecos',
    immagine: '/images/marocco/kasbah-tamnougalt.jpg',
  },
  {
    slug: 'agadir',
    paeseSlug: 'marocco',
    ordine: 5,
    nome: 'Agadir y Taghazout',
    tipologia: ['mare', 'surf'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: "Taliouine, la capital marroquí del azafrán, y una clase de surf en Taghazout, uno de los pueblos más conocidos del surf en Marruecos.",
    percheAndarci: "La costa después de días de desierto y kasbahs, con una parada golosa en Taliouine por el camino.",
    cosaVedere: ['La ciudad vieja de Taliouine', 'El casco histórico de Taroudant'],
    cosaFare: [
      'Compra de azafrán en Taliouine',
      'Yoga al atardecer con Khalid',
      'Clase de surf en Taghazout (mira la ficha de experiencia dedicada)',
    ],
    doveDormire:
      "Pasamos una noche en el Hotel Oasis, cómodo por estar cerca del mar y de los restaurantes. Las reseñas en internet son dispares: buenas la ubicación y el desayuno buffet, menos el mantenimiento de las habitaciones, que varios huéspedes describen como anticuadas.\n\nEconómicas: Hotel Sindibad Agadir, Résidence IGOUDAR · gama media: Riad Dar Maktoub, Hôtel Riad Salam Agadir · lujo (sin excesos): Sofitel Agadir Thalassa Sea & Spa, Hotel Riu Palace Tikida Agadir.",
    doveMangiare: 'Les Blancs (terraza con vistas al mar, cocina española y mediterránea); comida en Taghazout después del surf.',
    usciteSerali: 'LOFT, cachimbas y cervezas, ambiente de discoteca árabe.',
    comeArrivare: "Unas 2 h 30 desde Agdz hasta Taliouine, luego unas 3 h hasta Agadir: en total unos 360 km, con parada para comer en Taroudant. De Agadir a Taghazout hay media hora por la costa, y de Taghazout a Esauira unas dos horas y media para 152 km. El aeropuerto de Agadir Al Massira tiene vuelos directos desde Europa, y los autobuses unen la ciudad con Marrakech y Esauira.",
    comeSpostarsi: 'Furgoneta privada, a pie en Taghazout.',
    periodoMigliore: 'principios de mayo, buenas condiciones para empezar a hacer surf',
    costi: "Clase de surf 250 MAD por persona (duchas 10 MAD). Presupuesto diario por persona, orientativo: bajo 40-60 € (casa de huéspedes o hostal de surf en Taghazout, pescado en el puerto); medio 80-130 € (hotel en el paseo marítimo, restaurantes, una clase de surf); alto 200 € o más (resort de Taghazout Bay, cenas en terraza, coche con conductor).",
    erroriDaEvitare: ['Comprar el azafrán en las tiendas de la carretera pensadas para los turistas de paso: en Taliouine conviene ir solo a los sitios que recomiende el guía'],
    miaEsperienza:
      "Una mañana distinta del resto del viaje: después de días de desierto y kasbahs, el surf en Taghazout fue un chapuzón, también en sentido literal, en un mundo completamente distinto.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Taliouine y el azafrán",
        "testo": "El pueblo famoso por el azafrán, entre los principales exportadores del mundo. En otoño, normalmente en noviembre, celebra el festival internacional del azafrán.",
        "come": "En coche desde Agdz, por la carretera hacia Taroudant.",
        "quando": "Otoño, en la temporada de floración.",
        "tempo": "1 hora",
        "consiglio": "Comprar el azafrán en cooperativas y sitios recomendados, no en tiendas para turistas de paso.",
        "lat": 30.53278,
        "lng": -7.92556
      },
      {
        "nome": "Taghazout y el surf",
        "testo": "El pueblo de pescadores a unos 19 km al norte de Agadir convertido en uno de los destinos de surf de Marruecos, con escuelas para principiantes; un poco al norte está Anchor Point, con sus largas olas de derecha.",
        "come": "Desde Agadir en taxi o autobús; escuelas y alquiler en el lugar.",
        "quando": "Las mejores condiciones van de septiembre a abril; para principiantes cuentan la escuela y el día.",
        "tempo": "Medio día",
        "costo": "Clase 250 MAD por persona, duchas 10 MAD (de mi viaje)",
        "consiglio": "Parar a almorzar en Taghazout tras la clase.",
        "lat": 30.54472,
        "lng": -9.70913
      },
      {
        "nome": "Taroudant",
        "testo": "Una pequeña ciudad dentro de murallas de tierra de entre 6 y 8 km, con bastiones y nueve puertas aún en uso. Tiene dos zocos junto a las plazas principales, mucho menos turísticos que los de Marrakech, y se recorre bien en calesa junto a la muralla.",
        "come": "En coche desde Taliouine, hacia Agadir.",
        "quando": "Tarde.",
        "tempo": "1-2 horas",
        "lat": 30.471,
        "lng": -8.8806
      },
      {
        "nome": "Kasbah de Agadir Oufella",
        "testo": "Las murallas de la vieja kasba en la colina sobre el puerto, destruida por el terremoto de 1960 junto con la ciudad vieja que encerraba. Desde arriba se ve toda la bahía.",
        "come": "En taxi o con el teleférico en servicio desde 2022, que sube unos 1,7 km desde el puente de Tildi.",
        "quando": "Atardecer, con la luz sobre la bahía.",
        "tempo": "1 hora",
        "consiglio": "Subir en teleférico y bajar en taxi o a pie, mirando el puerto pesquero.",
        "lat": 30.42944,
        "lng": -9.62417
      },
      {
        "nome": "Zoco El Had",
        "testo": "El gran mercado cubierto de Agadir, dentro de murallas con muchas puertas: fruta, especias, aceite de argán, cerámica y ropa, con muchos más marroquíes que turistas. Es el sitio para comprar argán y amlou a precios normales.",
        "come": "En taxi desde el paseo marítimo.",
        "quando": "Por la mañana. Cerrado los lunes; suele abrir de 9 a 18 (2026), pero cada puesto tiene su propio horario.",
        "tempo": "1,5-2 horas",
        "consiglio": "Los puestos de fruta y verdura son la parte más animada.",
        "orari": "Normalmente 9-18, cerrado los lunes; cada puesto tiene su propio horario",
        "lat": 30.41251,
        "lng": -9.57975
      },
      {
        "nome": "Playa y Corniche de Agadir",
        "testo": "La bahía de arena de Agadir se extiende más de 10 km, con un paseo marítimo de unos 9 km entre el puerto deportivo y la zona hotelera. Es una playa ancha y resguardada, buena para pasear y bañarse, mucho más tranquila que las playas de surf del norte.",
        "come": "A pie desde los hoteles del paseo; petit taxi desde el centro.",
        "quando": "Al atardecer, cuando la Corniche se llena de familias.",
        "tempo": "1-2 horas",
        "costo": "Gratis",
        "lat": 30.39761,
        "lng": -9.60014
      },
      {
        "nome": "Puerto deportivo de Agadir",
        "testo": "La marina al pie de la colina de la kasba, con yates, cafés, restaurantes y tiendas. Es la parte más cuidada del paseo y el sitio más cómodo para cenar mirando los barcos.",
        "come": "A pie por la Corniche, en el extremo norte de la playa.",
        "quando": "Por la noche.",
        "tempo": "1 hora",
        "costo": "Gratis",
        "lat": 30.42505,
        "lng": -9.61707
      },
      {
        "nome": "Puerto pesquero",
        "testo": "Agadir es uno de los grandes puertos pesqueros de Marruecos. A la entrada del puerto hay puestos donde se elige el pescado recién desembarcado y se hace a la parrilla allí mismo, en mesas compartidas.",
        "come": "Petit taxi hasta la entrada del puerto pesquero, al norte de la marina.",
        "quando": "Almuerzo.",
        "tempo": "1-1,5 horas",
        "consiglio": "Preguntar el precio por kilo antes de pedir y comprobar el peso.",
        "lat": 30.42283,
        "lng": -9.64192
      },
      {
        "nome": "Médina d'Agadir (Coco Polizzi)",
        "testo": "Una medina reconstruida desde cero a partir de 1992 por el artista italomarroquí Coco Polizzi, en Ben Sergao, a unos 4,5 km al sur del centro. En unas cinco hectáreas hay talleres de artesanos, un pequeño museo y un jardín, construidos con las técnicas tradicionales bereberes del Sus.",
        "come": "En taxi desde el centro, hacia Inezgane.",
        "quando": "Por la mañana o al final de la tarde.",
        "tempo": "1-1,5 horas",
        "lat": 30.37849,
        "lng": -9.57245
      },
      {
        "nome": "Crocoparc",
        "testo": "Un parque con más de 300 cocodrilos del Nilo, jardines botánicos, cactus, tortugas gigantes y una cueva de serpientes. Es la salida más sencilla con niños, a un cuarto de hora en coche del centro.",
        "come": "En coche o taxi por la RN8 hacia Drarga, unos 13 km; el parque vende también un paquete con lanzadera desde Agadir y Taghazout.",
        "quando": "Por la mañana, antes del calor.",
        "tempo": "2 horas",
        "costo": "100 MAD adultos, 70 MAD niños de 3 a 12 años (unos 9 € y 6,50 €, 2026)",
        "orari": "10-17.30 todos los días, la taquilla cierra media hora antes; durante el Ramadán 10-17; cerrado el primer día del Aid el-Kebir",
        "url": "https://www.crocoparc.com/",
        "lat": 30.38938,
        "lng": -9.48403
      },
      {
        "nome": "Paradise Valley",
        "testo": "Un tramo del valle del río Tamraght en el Alto Atlas, con palmeras, olivos e higueras, pequeñas cascadas y pozas entre las rocas para bañarse. Se llega por un sendero corto desde la carretera de Imouzzer.",
        "come": "En coche unos 34 km, tres cuartos de hora desde Agadir; luego un breve tramo a pie.",
        "quando": "En primavera, cuando hay más agua; evitar los fines de semana de verano, muy concurridos.",
        "tempo": "Media jornada",
        "consiglio": "Calzado que se pueda mojar; no saltar sin comprobar la profundidad.",
        "lat": 30.58761,
        "lng": -9.53104
      },
      {
        "nome": "Anchor Point",
        "testo": "El lugar más famoso del surf marroquí, justo al norte de Taghazout: una larga ola de derecha que rompe sobre el arrecife y funciona con los temporales de invierno. Es para surfistas expertos; para los demás es bonito mirar desde el acantilado.",
        "come": "A pie desde Taghazout, 10-15 minutos hacia el norte.",
        "quando": "De octubre a marzo, con el mar de fondo.",
        "tempo": "30 minutos para mirar",
        "lat": 30.54528,
        "lng": -9.72679
      },
      {
        "nome": "Tamraght y Banana Beach",
        "testo": "El pueblo entre Agadir y Taghazout, con casas de huéspedes y escuelas de surf, y debajo la playa de Banana Beach, ancha y con olas suaves para quien empieza.",
        "come": "En taxi o autobús por la carretera de la costa, unos 20 minutos desde Agadir.",
        "quando": "Por la mañana, para las clases con poco viento.",
        "tempo": "Media jornada",
        "lat": 30.50198,
        "lng": -9.68001
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: surf en Taghazout o Banana Beach",
          "Almuerzo: pescado en el puerto pesquero",
          "Tarde: Zoco El Had",
          "Atardecer: Kasbah de Agadir Oufella en teleférico, cena en la marina"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Taliouine, azafrán, luego Taroudant y llegada a Agadir, yoga al atardecer",
          "Día 2: surf en Taghazout, almuerzo, cena en Les Blancs"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Taliouine y Taroudant de camino, llegada a Agadir",
          "Día 2: Zoco El Had, puerto pesquero, Agadir Oufella al atardecer",
          "Día 3: surf en Taghazout y Paradise Valley por la tarde"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agadir",
        "perChi": "quien quiere playa y servicios",
        "testo": "Ciudad moderna reconstruida tras el terremoto de 1960, con paseo marítimo y hoteles."
      },
      {
        "nome": "Taghazout",
        "perChi": "quien quiere surf y ambiente",
        "testo": "Pueblo con escuelas de surf y casas de huéspedes, relajado."
      },
      {
        "nome": "Tamraght y Aourir",
        "perChi": "quien empieza con el surf",
        "testo": "Pueblos más tranquilos entre Agadir y Taghazout, con surf camps y casas de huéspedes cerca de Banana Beach."
      },
      {
        "nome": "Taghazout Bay",
        "perChi": "quien quiere un resort",
        "testo": "La zona de grandes hoteles con piscinas y campo de golf justo al sur del pueblo de Taghazout, cómoda pero lejos de la vida del pueblo."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "En los restaurantes del puerto de Agadir."
      },
      {
        "nome": "Aceite de argán y amlou",
        "testo": "Pasta de almendras, aceite de argán y miel, para untar en el pan."
      },
      {
        "nome": "Tajín de pescado",
        "testo": "En la costa, con verduras y especias."
      },
      {
        "nome": "Azafrán",
        "testo": "En tés y platos, comprado en Taliouine."
      }
    ],
    attenzioni: [
      "El azafrán de las tiendas para turistas suele estar adulterado, comprar solo en sitios recomendados.",
      "La corriente en Taghazout puede ser fuerte: seguir las indicaciones del instructor.",
      "El sol en la costa quema incluso con el cielo cubierto."
    ],
    gite: [
      {
        "nome": "Imsouane",
        "distanza": "unos 93 km, 1 h 45",
        "come": "En coche hacia el norte por la costa",
        "testo": "Un pueblo de pescadores en una bahía resguardada entre acantilados, con una ola larga y lenta, La Baie, perfecta para principiantes y longboard. Merece la pena aunque solo sea por el pescado y la puesta de sol."
      },
      {
        "nome": "Parque nacional de Sus-Masa",
        "distanza": "unos 65 km, algo más de una hora",
        "come": "En coche hacia el sur, hasta la desembocadura del uadi Masa",
        "testo": "Parque costero creado en 1991, con dunas, lagunas y una de las últimas colonias salvajes del mundo de ibis eremita. Se camina por la desembocadura del río con prismáticos."
      },
      {
        "nome": "Tiznit",
        "distanza": "unos 91 km, 1 h 30",
        "come": "En coche hacia el sur",
        "testo": "Una pequeña ciudad dentro de murallas de tierra roja, famosa por los plateros bereberes de su zoco."
      }
    ],
    faq: [
      {
        "domanda": "¿Mejor dormir en Agadir o en Taghazout?",
        "risposta": "En Agadir por la playa larga, los restaurantes y los servicios; en Taghazout o Tamraght si el objetivo es el surf. Están a media hora por carretera."
      },
      {
        "domanda": "¿Se puede aprender a surfear desde cero en Taghazout?",
        "risposta": "Sí: las escuelas llevan a los principiantes a playas con olas más suaves, como Banana Beach. Una clase de dos horas cuesta unos 250 MAD por persona."
      },
      {
        "domanda": "¿Cuándo ir a Agadir?",
        "risposta": "El clima es suave todo el año. Para el surf las mejores condiciones van de septiembre a abril; en verano el mar está más tranquilo y la ciudad más llena."
      },
      {
        "domanda": "¿Dónde comprar aceite de argán y azafrán sin que te engañen?",
        "risposta": "El argán y el amlou en el Zoco El Had o en las cooperativas; el azafrán en Taliouine, en los sitios recomendados, evitando las tiendas de carretera."
      },
      {
        "domanda": "¿Es seguro bañarse en el mar de Agadir?",
        "risposta": "La bahía de Agadir está resguardada y es apta para el baño; más al norte las corrientes son fuertes. Conviene nadar donde hay socorrista y seguir las banderas."
      },
      {
        "domanda": "¿Cuántos días hacen falta?",
        "risposta": "Dos días bastan para Taliouine, Taroudant y el surf; con tres se añaden el puerto, la kasba y Paradise Valley."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['surf-taghazout'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Clase de surf en las olas de Taghazout, Marruecos',
    immagine: '/images/marocco/taghazout-surf.jpg',
  },
  {
    slug: 'essaouira',
    paeseSlug: 'marocco',
    ordine: 6,
    nome: 'Essaouira',
    tipologia: ['città', 'mare', 'relax'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: "La ciudad portuaria fortificada del Atlántico, con una medina blanca y azul de las más bonitas de Marruecos.",
    percheAndarci: "Por un ambiente distinto del resto del viaje, con las compras más baratas que en Marrakech y un poco de relax.",
    cosaVedere: ['La medina blanca y azul de Essaouira', 'El puerto fortificado', 'El Ranch de Diabat'],
    cosaFare: [
      'Visita guiada de Essaouira (1 h 30)',
      'Hammam de Kenza (mira la ficha de experiencia dedicada)',
      'Aventura en quad en el Ranch de Diabat, con posible paseo a caballo',
    ],
    doveDormire:
      "Pasamos una noche en la Maison De Sud, en pleno casco histórico, a pocos pasos de los zocos y del puerto: una casa con carácter, con decoración artesanal y, según las reseñas, un personal muy atento. Habitaciones pequeñas, y por la noche se oyen las llamadas a la oración, algo normal en el corazón de la medina.\n\nEconómicas: La Smala, Riad Al Madina · gama media: Lyon Mogador, Riad Chakir Mogador · lujo (sin excesos): Heure Bleue Palais, Riad Dar Maya.",
    doveMangiare: 'Triskala, La Table by Madada o Des Rêves.',
    comeArrivare: 'Unas 2 h 30 desde Agadir pasando por Taghazout. Desde Marrakech son unos 185 km, casi 3 horas de carretera por la llanura de los arganes; desde Agadir unos 175 km por la costa. Los autobuses Supratours y CTM unen Marrakech y Esauira varias veces al día y llegan justo fuera de la medina. El aeropuerto de Esauira-Mogador, a unos 15 km al sur, tiene pocos vuelos directos. Los coches no entran en la medina: se aparca fuera de las murallas y se sigue a pie.',
    comeSpostarsi: 'A pie por la medina.',
    periodoMigliore: 'última hora de la tarde, para la visita guiada con mejor luz',
    costi: 'Hammam 250 MAD por persona; compras en general más baratas que en Marrakech. Presupuesto diario por persona, orientativo: bajo 30-50 € (riad sencillo en la medina, pescado en los puestos del puerto, todo a pie); medio 80-130 € (riad con encanto, hammam, cenas en restaurante, quad o caballo en Diabat); alto desde 200 € (riad de lujo u hotel frente al mar, clases privadas de kitesurf, conductor).',
    erroriDaEvitare: [],
    miaEsperienza:
      "Después de días de furgoneta, desierto y visitas, la hora en el hammam de Kenza fue uno de los pocos momentos de relax de verdad del viaje, y la medina blanca y azul de Essaouira sigue siendo uno de los ambientes más bonitos de Marruecos.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Medina de Esauira",
        "testo": "La ciudad blanca y azul construida desde 1760 por orden del sultán Mohammed III, con murallas y bastiones sobre el mar, patrimonio de la UNESCO desde 2001. Callejones peatonales y talleres de talla de madera de tuya.",
        "come": "A pie: se entra por las puertas principales o desde el puerto.",
        "quando": "Última hora de la tarde, con mejor luz.",
        "tempo": "2-3 horas",
        "costo": "Entrada libre; el tour guiado se paga con una propina de 150-200 MAD en total, unos 14-19 € (de mi viaje)",
        "orari": "Siempre abierta",
        "url": "https://whc.unesco.org/en/list/753",
        "lat": 31.5133,
        "lng": -9.7688,
        "consiglio": "Un tour guiado a pie da una buena orientación."
      },
      {
        "nome": "Puerto y Skala",
        "testo": "El puerto con las barcas azules de los pescadores y la Sqala, los bastiones con cañones usados también como escenario de «Juego de tronos», con gaviotas y puestos de pescado.",
        "come": "A pie desde la medina.",
        "quando": "Mañana, cuando llegan los pesqueros, y al atardecer.",
        "tempo": "1 hora",
        "lat": 31.51,
        "lng": -9.7736
      },
      {
        "nome": "Skala de la Ville",
        "testo": "El bastión del siglo XVIII en el lado norte de la medina, con la fila de cañones de bronce apuntando al océano y las olas rompiendo bajo las murallas. Aquí Orson Welles rodó escenas de su «Otelo». En las bóvedas bajo los bastiones trabajan los tallistas de madera de tuya.",
        "come": "A pie desde la medina, subiendo por la calle de la Skala, cerca del museo.",
        "quando": "Al atardecer, cuando el sol se pone sobre el océano.",
        "tempo": "30 minutos",
        "costo": "Gratis",
        "lat": 31.5142,
        "lng": -9.7724
      },
      {
        "nome": "Place Moulay Hassan",
        "testo": "La plaza entre la medina y el puerto, con cafés al aire libre y restaurantes de pescado. Es el punto de encuentro de la ciudad y, en junio, el escenario principal del Festival Gnaoua.",
        "come": "A pie desde la medina o el puerto.",
        "quando": "Por la mañana para un café, por la noche por el ambiente.",
        "tempo": "30 minutos",
        "costo": "Gratis",
        "orari": "Siempre abierta",
        "lat": 31.5117,
        "lng": -9.772
      },
      {
        "nome": "Museo Sidi Mohammed Ben Abdallah",
        "testo": "El museo etnográfico de la ciudad, en una casa del siglo XIX de la medina: instrumentos musicales, joyas bereberes, alfombras, armas y objetos de madera de tuya, con una parte dedicada a la música gnawa. En 2026 empezó un proyecto para restaurarlo y relanzarlo.",
        "come": "A pie, en la rue Laalouj, a pocos pasos de la Skala de la Ville.",
        "quando": "En las horas de calor o cuando el viento hace incómoda la playa.",
        "tempo": "45 minutos",
        "lat": 31.5139,
        "lng": -9.7714,
        "consiglio": "Por las obras, conviene preguntar en el riad si está abierto antes de ir."
      },
      {
        "nome": "Dar Souiri",
        "testo": "El espacio cultural de la ciudad, en una casa tradicional de la avenue du Caire: acoge exposiciones, conciertos y encuentros, sobre todo durante los festivales. Merece un vistazo al patio al pasar.",
        "come": "A pie por la medina, cerca de la Place Moulay Hassan.",
        "quando": "Por la noche, cuando hay un concierto o una exposición.",
        "tempo": "20 minutos",
        "lat": 31.5116,
        "lng": -9.7701
      },
      {
        "nome": "Mellah y Bayt Dakira",
        "testo": "El antiguo barrio judío en el rincón noreste de la medina: en el siglo XIX una parte importante de los habitantes de Esauira era judía. En la casa de la sinagoga Simon Attias está Bayt Dakira, la «casa de la memoria» inaugurada en 2020, con fotografías, ropa y objetos de la comunidad.",
        "come": "A pie desde Bab Doukkala o desde la calle principal de la medina.",
        "quando": "Por la mañana.",
        "tempo": "1 hora",
        "lat": 31.5157,
        "lng": -9.7671
      },
      {
        "nome": "Bab Doukkala",
        "testo": "La puerta noreste de la medina, de donde sale la calle principal que cruza la ciudad hasta el puerto. Alrededor hay puestos de fruta y especias y, justo fuera de las murallas, los viejos cementerios.",
        "come": "En taxi hasta la puerta, luego a pie hacia el interior de la medina.",
        "quando": "Por la mañana, con el mercado más animado.",
        "tempo": "20 minutos",
        "costo": "Gratis",
        "orari": "Siempre abierta",
        "lat": 31.5161,
        "lng": -9.7658
      },
      {
        "nome": "Hammam",
        "testo": "Un baño de vapor con exfoliación y masaje en la tradición marroquí.",
        "come": "Reservar con antelación en un establecimiento de la medina.",
        "quando": "Tarde.",
        "tempo": "1-1,5 horas",
        "costo": "250 MAD por persona por una hora en Kenza, unos 23 € (de mi viaje)",
        "consiglio": "Perfecto tras días de furgoneta y visitas."
      },
      {
        "nome": "Ranch de Diabat",
        "testo": "Excursiones a caballo y en quad por la costa de arena hacia Diabat, a unos 5 km al sur, cerca de las ruinas de Bordj El Berod.",
        "come": "En taxi desde la medina.",
        "quando": "Última hora de la tarde.",
        "tempo": "1-2 horas",
        "lat": 31.4818,
        "lng": -9.7649
      },
      {
        "nome": "Playa y kitesurf",
        "testo": "La larga bahía de arena al sur de la medina, barrida por fuertes alisios: por eso la frecuentan mucho los aficionados al kitesurf y al windsurf. Poca gente se baña, el agua está fría; se camina hasta Diabat con la isla de Mogador delante.",
        "come": "A pie desde la medina hacia el sur. Escuelas de kite y alquiler en la playa.",
        "quando": "Por la tarde, cuando el viento es más regular.",
        "tempo": "Media jornada",
        "costo": "Playa libre",
        "orari": "Siempre abierta",
        "lat": 31.4993,
        "lng": -9.7642,
        "consiglio": "Para una clase de kite elegir una escuela con licencia e instructores certificados, y preguntar qué cubre el seguro."
      },
      {
        "nome": "Isla de Mogador",
        "testo": "La isla frente a la bahía, donde en la Antigüedad se producía la púrpura y hoy hay una reserva natural para el halcón de Eleonora, que anida aquí en verano. No se desembarca sin permiso: se mira desde la playa o desde los bastiones.",
        "come": "Se ve desde la playa hacia Diabat y desde la Skala del puerto.",
        "quando": "A última hora de la tarde, con la luz rasante.",
        "tempo": "Una parada durante el paseo",
        "lat": 31.4967,
        "lng": -9.7867
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: puerto y subasta del pescado, la Skala del puerto",
          "Comida de pescado a la brasa en los puestos del puerto",
          "Tarde: medina, Mellah y Skala de la Ville",
          "Atardecer en los bastiones y cena en la medina"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: llegada, medina y puerto, cena de pescado",
          "Día 2: mañana en el mercado, hammam, tarde en Diabat"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: puerto, Place Moulay Hassan, tour guiado por la medina, atardecer en la Skala de la Ville",
          "Día 2: Mellah y Bayt Dakira, museo, tarde en el hammam y cena en la medina",
          "Día 3: quad o caballo en el Ranch de Diabat, paseo por la playa hasta Diabat con la vista de la isla de Mogador, o media jornada en Sidi Kaouki"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "quien quiere estar dentro de la ciudad",
        "testo": "Riads y pensiones en los callejones blancos, muy cerca de todo. Habitaciones pequeñas, pero la atmósfera es única.",
        "fascia": "40-120 €"
      },
      {
        "nome": "Paseo marítimo",
        "perChi": "quien quiere playa y viento",
        "testo": "Hoteles modernos frente al mar, más grandes y con aparcamiento.",
        "fascia": "20-50 €"
      },
      {
        "nome": "Paseo marítimo",
        "perChi": "quien quiere playa y viento",
        "testo": "Hoteles modernos frente al mar, más grandes y con aparcamiento."
      },
      {
        "nome": "Sidi Kaouki",
        "perChi": "quien viene por el surf y la tranquilidad",
        "testo": "Un pueblo de la costa a unos 25 km al sur, con casas de huéspedes y escuelas de surf frente a una playa abierta. Pocos restaurantes: para ir a la medina hace falta coche."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla en el puerto",
        "testo": "Se elige en el mostrador y lo cocinan los restaurantes cercanos."
      },
      {
        "nome": "Tajín de pescado",
        "testo": "Con verduras y especias."
      },
      {
        "nome": "Aceite de argán",
        "testo": "Hecho en cooperativas de mujeres, para cocina y cosmética."
      },
      {
        "nome": "Dulces de almendra",
        "testo": "De los pasteleros de la medina."
      }
    ],
    attenzioni: [
      "El viento fuerte (alisios) hace a menudo frío el paseo marítimo: llevar una chaqueta incluso en verano.",
      "Las compras en Esauira suelen costar menos que en Marrakech, pero el precio se negocia igualmente.",
      "Evitar los guías no oficiales en la calle."
    ],
    gite: [
      {
        "nome": "Sidi Kaouki",
        "distanza": "unos 25 km, 25 minutos",
        "come": "En coche o grand taxi hacia el sur, por la costa.",
        "testo": "Una larga playa batida por el viento, frecuentada por surfistas y kitesurfistas, con el pequeño morabito blanco del santo que da nombre al pueblo. Se hacen paseos a caballo y en dromedario por la arena."
      },
      {
        "nome": "Moulay Bouzerktoun",
        "distanza": "unos 30 km, 30 minutos",
        "come": "En coche o grand taxi hacia el norte, por la carretera de la costa hacia Safi.",
        "testo": "Un pueblo de pescadores en una bahía ventosa, uno de los spots más conocidos de Marruecos para windsurf y kitesurf con olas. Aun sin tabla merecen la pena la carretera de la costa y una comida de pescado."
      },
      {
        "nome": "Arganales y cooperativas de argán",
        "distanza": "a partir de 20 km por la carretera de Marrakech",
        "come": "Por la carretera de Marrakech, en coche o como parada a la vuelta.",
        "testo": "La llanura de los arganes, el árbol que crece casi solo en esta parte de Marruecos. En las cooperativas de mujeres se ve cómo se parten las semillas y se prensa el aceite; en los árboles junto a la carretera a menudo hay cabras puestas para las fotos, a cambio de unos dírhams."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Esauira?",
        "risposta": "Dos días: uno para la medina, el puerto y los bastiones, otro para el hammam, la playa y Diabat. Con un tercer día se añaden Sidi Kaouki o las cooperativas de argán."
      },
      {
        "domanda": "¿Se puede uno bañar en Esauira?",
        "risposta": "Sí, pero aquí el Atlántico está frío y los alisios soplan fuerte gran parte del año. La bahía es más adecuada para kitesurf, windsurf y paseos que para un día bajo la sombrilla."
      },
      {
        "domanda": "¿Cuándo es el Festival Gnaoua?",
        "risposta": "Cada año en junio, durante unos días, con conciertos en la Place Moulay Hassan y en la playa. En esas fechas los alojamientos de la medina se reservan con meses de antelación."
      },
      {
        "domanda": "¿Se puede ver Esauira en el día desde Marrakech?",
        "risposta": "Se puede, pero son casi 3 horas de carretera por trayecto. Con al menos una noche se ven la medina al atardecer y el puerto por la mañana, cuando llegan los pesqueros."
      },
      {
        "domanda": "¿Hace falta guía en la medina de Esauira?",
        "risposta": "No, la medina es pequeña y de calles rectas, es difícil perderse. Un tour de hora y media ayuda a entender su historia; conviene evitar a quien se ofrece como guía por la calle."
      },
      {
        "domanda": "¿Dónde se come pescado en Esauira?",
        "risposta": "En los puestos del puerto se elige el pescado y lo hacen a la brasa en el momento: el precio por kilo se pacta antes. Para cenar en la medina están Triskala, La Table by Madada y Des Rêves."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['hammam-essaouira'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La medina blanca y azul de la ciudad portuaria de Essaouira, Marruecos',
    immagine: '/images/marocco/essaouira-medina.jpg',
  },
  {
    slug: 'chefchaouen',
    paeseSlug: 'marocco',
    ordine: 7,
    nome: 'Chefchaouen',
    tipologia: ['città', 'montagna'],
    giorniConsigliati: '2 noches',
    visitataPersonalmente: true,
    introduzione:
      'La ciudad azul en las montañas del Rif, fundada en 1471 como fortaleza contra los portugueses. Una medina pequeña, con las casas pintadas de azul, la kasbah en la plaza y montañas alrededor.',
    percheAndarci:
      'Para caminar por la medina azul al amanecer, cuando todavía está vacía, y ver el atardecer desde la Mezquita española. Es también una pausa más tranquila entre Tánger y Fez.',
    cosaVedere: [
      'La medina azul',
      'La plaza Outa el-Hammam y la Gran Mezquita',
      'La kasbah, hoy museo',
      'El manantial de Ras el-Ma',
      'La Mezquita española y la vista sobre la ciudad',
    ],
    cosaFare: ['Fotografiar las callejuelas al amanecer', 'Subir a la Mezquita española al atardecer', 'Un día en Akchour, entre gargantas y cascadas'],
    comeArrivare:
      "Por carretera: unos 110 km desde Tánger (unas 2 horas de conducción) y unos 190 km desde Fez (casi 4 horas sin paradas), con coche y conductor o autobuses CTM (servicios y horarios en ctm.ma). No hay tren. Tetuán, a unos 60 km, es el nudo más cercano de autobuses y grand taxis hacia Tánger y la costa. En la medina no entran los coches: se deja el coche en un aparcamiento vigilado fuera de las murallas, pocos dírhams por noche, y se llega al riad a pie, a menudo con un mozo (propina a acordar).",
    comeSpostarsi: 'A pie: la medina es pequeña y toda cuesta arriba.',
    periodoMigliore: 'primavera y otoño',
    costi:
      "Presupuesto bajo unos 30-50 € al día por persona (riad sencillo en la medina, comidas en los locales de la plaza); medio 70-110 € (riad con terraza, cenas en restaurante, conductor a Akchour entre dos); alto desde 180 € (los riads más cuidados, coche con conductor toda la estancia). Casi todo lo que se ve en la ciudad es gratis; la kasbah tiene una entrada barata.",
    erroriDaEvitare: [
      'Aceptar el cannabis que alguien ofrece por la calle: Marruecos tiene tolerancia cero con las drogas, con cárcel y multas elevadas',
      'Llegar solo para una tarde: la medina luce a primera hora y por la noche, cuando los grupos de excursión ya se han ido',
    ],
    miaEsperienza:
      "Estuve en mi ruta de once días por el norte de Marruecos, todo por carretera: llegando desde Tánger, dos días entre la medina, Ras el-Ma y la Mezquita española, y luego hacia Fez.",
    // GUIDA-START
    luoghi: [
      {
        nome: "La medina azul",
        testo: "Callejuelas en cuesta y casas pintadas en muchos tonos de azul. Sobre el porqué hay varias versiones: para alejar a los mosquitos, para recordar el cielo o para atraer a los turistas, como cuentan algunos vecinos. Ninguna es segura. La ciudad creció con los andalusíes, los moriscos y los judíos llegados de la península ibérica.",
        come: "A pie, sin rumbo. Para el equipaje conviene preguntar al riad si manda a alguien.",
        quando: "Al amanecer, antes de que lleguen los grupos de excursión.",
        tempo: "medio día",
        costo: "entrada libre",
        orari: "Siempre accesible",
        lat: 35.17139,
        lng: -5.26972,
        consiglio: "Muchas puertas y escalinatas son casas privadas: se fotografía sin entrar y sin poner a posar a los niños.",
      },
      {
        nome: "La plaza Outa el-Hammam y la Gran Mezquita",
        testo: "La plaza central de la medina, con los cafés bajo los árboles, la Gran Mezquita con su alminar octogonal y, en el lado opuesto, las murallas de la kasbah. Por la noche es el punto de encuentro de la ciudad.",
        come: "En el centro de la medina. En la Gran Mezquita los no musulmanes no entran.",
        quando: "Por la noche, cuando la plaza se llena.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        orari: "Plaza siempre accesible; mezquita cerrada a los no musulmanes",
        lat: 35.16843,
        lng: -5.26233,
      },
      {
        nome: "La kasbah",
        testo: "La antigua fortaleza de la plaza, hoy museo. Dentro hay un jardín andalusí y algunas salas con objetos y fotografías de la ciudad, y desde la torre se ven los tejados y la plaza desde arriba.",
        come: "Se entra desde la plaza Outa el-Hammam, con una entrada barata (de mi viaje).",
        quando: "Por la mañana, antes del calor y de los grupos.",
        tempo: "45 minutos",
        lat: 35.16867,
        lng: -5.26151,
        consiglio: "Subir a la torre: es la mejor vista de la plaza sin hacer la subida a la Mezquita española.",
      },
      {
        nome: "Bab el-Ain",
        testo: "La puerta principal de la medina, en el lado oeste, donde paran los taxis y empiezan las callejuelas en cuesta. Desde aquí las calles pintadas suben hasta la plaza en diez minutos.",
        come: "A pie desde los aparcamientos y la ciudad nueva; es el punto más cómodo para llegar con el equipaje.",
        quando: "A primera hora, para fotografiar las primeras calles azules todavía vacías.",
        tempo: "15 minutos",
        costo: "entrada libre",
        orari: "Siempre accesible",
        lat: 35.1682,
        lng: -5.26499,
      },
      {
        nome: "Ras el-Ma",
        testo: "El manantial al pie de la montaña, justo fuera de la medina, desde donde el agua baja hacia la ciudad. A lo largo del arroyo hay canales y lavaderos que todavía se usan.",
        come: "A pie desde la plaza, está justo fuera de la medina, por el lado este.",
        quando: "Por la mañana o a última hora de la tarde, antes de subir a la Mezquita española.",
        tempo: "30 minutos",
        costo: "entrada libre",
        orari: "Siempre accesible",
        lat: 35.17149,
        lng: -5.25609,
      },
      {
        nome: "Mezquita española",
        testo: "La mezquita construida por los españoles en los años veinte en la colina frente a la ciudad. Hoy está en desuso y es sobre todo un mirador sobre todo Chefchaouen.",
        come: "A pie desde Ras el-Ma, por un sendero en subida: una media hora, con poca sombra.",
        quando: "Al atardecer.",
        tempo: "1 hora con la subida",
        costo: "entrada libre",
        lat: 35.16553,
        lng: -5.25563,
        consiglio: "La linterna del móvil preparada para bajar a oscuras.",
      },
      {
        nome: "Cascadas de Akchour",
        testo: "Un valle a unos 30 km de Chefchaouen (40 minutos por carretera), en el Parque Nacional de Talassemtane, con las gargantas y las cascadas del río y senderos entre las rocas. Es la excursión del día para quien quiere naturaleza después de la medina.",
        come: "Coche con conductor o taxi desde Chefchaouen, con el precio fijado la noche anterior. Desde el aparcamiento se remonta el río a pie.",
        quando: "En primavera y en otoño; en verano, los fines de semana hay mucha gente.",
        tempo: "un día",
        lat: 35.24264,
        lng: -5.18186,
        consiglio: "Calzado de senderismo: los caminos pasan por rocas y por el agua.",
      },
      {
        nome: "Puente de Dios (Pont de Dieu)",
        testo: "Un arco natural de roca sobre el río, en el otro sendero que sale de Akchour. El camino pasa por encima del arco y luego baja al río, desde donde se ve por debajo.",
        come: "Desde el mismo aparcamiento de Akchour, por un sendero distinto al de las cascadas; se combina con ellas en el mismo día.",
        quando: "Por la mañana, antes del calor.",
        tempo: "medio día",
        lat: 35.22836,
        lng: -5.17563,
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: la medina al amanecer, de Bab el-Ain hacia la plaza",
          "Kasbah y plaza Outa el-Hammam",
          "Tarde: Ras el-Ma",
          "Atardecer desde la Mezquita española",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: como arriba",
          "Día 2: Akchour en el día con conductor, cascadas por la mañana y Puente de Dios por la tarde",
          "Noche otra vez en la plaza",
        ],
      },
      {
        titolo: "3 días",
        tappe: ["Días 1-2: como arriba", "Día 3: Tetuán y su medina blanca, o el mar en Oued Laou"],
      },
    ],
    zone: [
      {
        nome: "Medina",
        perChi: "quien quiere la ciudad azul en la puerta",
        testo: "Riads y hoteles pequeños entre las callejuelas. Muchas escaleras y cuestas con el equipaje.",
        fascia: "30-90 €",
      },
      {
        nome: "Fuera de las murallas",
        perChi: "quien llega en coche",
        testo: "Hoteles más grandes, más cómodos para aparcar, a pocos minutos a pie de la medina.",
      },
    ],
    sapori: [
      { nome: "Queso de cabra del Rif", testo: "El queso fresco de las montañas de alrededor, en los restaurantes de la medina." },
      { nome: "Tajín", testo: "Carne o pollo cocinados en el recipiente de barro, como en el resto de Marruecos." },
      { nome: "Té con hierbabuena", testo: "Se sirve en todas partes, caliente y muy dulce, en los cafés de la plaza." },
    ],
    attenzioni: [
      "Quien ofrece cannabis por la calle: Marruecos tiene tolerancia cero con las drogas, también para los turistas, con cárcel y multas elevadas.",
      "Falsos guías que se ofrecen para llevarte a la Mezquita española: el sendero es fácil y se hace solo.",
      "Fotos a las personas: hay que pedir permiso antes.",
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Akchour y el Puente de Dios",
        distanza: "unos 30 km, 40 minutos",
        come: "Coche con conductor o taxi desde Chefchaouen, con el precio fijado la noche anterior.",
        testo: "Dos senderos desde el mismo aparcamiento: uno remonta el río hasta las cascadas, el otro llega al arco de roca del Puente de Dios. En un día se hacen los dos.",
      },
      {
        nome: "Tetuán",
        distanza: "unos 60 km, 1 hora y cuarto",
        come: "Autobús CTM, grand taxi o coche; también está de camino a Tánger.",
        testo: "La medina blanca de influencia andalusí, Patrimonio de la UNESCO desde 1997, con los zocos de los artesanos y la plaza Hassan II frente al Palacio Real. Menos turística que Chefchaouen.",
      },
      {
        nome: "Oued Laou",
        distanza: "unos 55 km, 1 hora y 10",
        come: "Coche o grand taxi, por una carretera de montaña que baja al mar.",
        testo: "Un pueblo de pescadores en el Mediterráneo, con una playa larga, frecuentado en verano sobre todo por familias marroquíes.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Chefchaouen?",
        risposta: "Dos noches: un día para la medina, la kasbah, Ras el-Ma y el atardecer desde la Mezquita española, otro para Akchour. En el día desde Tánger o Fez se ve poco y en las peores horas.",
      },
      {
        domanda: "¿Por qué Chefchaouen es azul?",
        risposta: "No hay una respuesta segura. Se cuenta que el azul aleja a los mosquitos, que recuerda el cielo o que está ligado a los judíos llegados de España; hoy las casas se repintan también para los visitantes.",
      },
      {
        domanda: "¿Cómo se llega a Chefchaouen?",
        risposta: "Solo por carretera: unas 2 horas desde Tánger y casi 4 desde Fez, con coche y conductor o con los autobuses CTM. No hay tren.",
      },
      {
        domanda: "¿Akchour se puede hacer por libre?",
        risposta: "Sí: los senderos están señalizados y concurridos, y a las cascadas y al Puente de Dios se llega sin guía. Hace falta coche o taxi para el traslado y calzado que se pueda mojar.",
      },
      {
        domanda: "¿Chefchaouen es segura?",
        risposta: "Es una ciudad tranquila. La molestia más común es quien ofrece cannabis por la calle: basta un no firme, recordando que en Marruecos la droga se castiga con cárcel también para los turistas.",
      },
      {
        domanda: "¿Cuál es la mejor época?",
        risposta: "Primavera y otoño, con días templados y el valle de Akchour verde. En invierno en las montañas del Rif hace frío y llueve a menudo; en verano la medina se llena de visitantes.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "Los callejones pintados de azul de la medina de Chefchaouen, en las montañas del Rif, Marruecos",
    immagine: '/images/marocco/chefchaouen.webp',
  },
  {
    slug: 'fes',
    paeseSlug: 'marocco',
    ordine: 8,
    nome: 'Fez',
    tipologia: ['città', 'cultura', 'città imperiale'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      'Fundada en 789 por Idrís I, capital hasta 1912. La ciudad vieja, Fez el-Bali, es Patrimonio de la UNESCO desde 1981 y es una de las zonas peatonales urbanas más grandes y antiguas del mundo.',
    percheAndarci:
      'Por una de las medinas más grandes y antiguas del mundo, con las madrasas meriníes, la Qarawiyyin y las curtidurías. Es el punto donde este itinerario se separa del del desierto.',
    cosaVedere: [
      'Bab Bou Jeloud',
      'Medersa Bou Inania',
      'Medersa al-Attarine',
      'La Qarawiyyin (solo desde fuera)',
      'Las curtidurías Chouara',
      'Fez Jdid, el Mellah y el Palacio Real (por fuera)',
      'Los jardines de Jnan Sbil',
    ],
    cosaFare: ['Una mañana con un guía oficial por Fez el-Bali', 'Mirar las curtidurías desde las terrazas', 'El atardecer sobre la medina desde las Tumbas meriníes'],
    comeArrivare:
      "Por carretera desde Chefchaouen (unos 190 km, casi 4 horas sin paradas) y desde Mequinez (unos 70 km, una hora de conducción), con coche y conductor o autobús CTM; el tren ONCF es una alternativa desde Mequinez, Rabat, Casablanca y Tánger, con horarios en oncf-voyages.ma. La estación está en la Ville Nouvelle: desde allí un petit taxi rojo, con taxímetro, lleva a la puerta de la medina más cercana al riad, normalmente Bab Bou Jeloud o Bab Guissa. El aeropuerto de Fès-Saïss está a unos 15 km de la medina: grand taxi con el precio fijado antes de subir, o el traslado del riad.",
    comeSpostarsi: 'A pie en la medina, en petit taxi entre la medina, Fez Jdid y la estación.',
    periodoMigliore: 'primavera y otoño; en verano hace mucho calor',
    costi:
      "Presupuesto bajo unos 35-55 € al día por persona (riad sencillo en la medina, comida callejera en la Talaa Kebira, madrasas a unos 20 MAD); medio 90-140 € (riad con encanto, guía oficial media jornada, cenas en las terrazas, hammam); alto desde 220 € (riad de lujo con piscina, conductor para Volubilis y Mequinez). Los petit taxis de la ciudad usan taxímetro, pocos euros por trayecto.",
    erroriDaEvitare: [
      'Recorrer la medina el primer día solo y sin mapa sin conexión: es un laberinto',
      'Seguir a quien se ofrece como guía por la calle: los guías oficiales llevan acreditación',
      'Reservar un riad sin preguntar dónde deja el taxi: en la medina no entran los coches',
    ],
    miaEsperienza:
      "Estuve en la ruta de once días por el norte de Marruecos, llegando desde Chefchaouen: tres días, primero Fez el-Bali con las madrasas, las curtidurías y los zocos, y luego Fez Jdid, el Mellah y la medina desde arriba.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Bab Bou Jeloud y la Talaa Kebira",
        testo: "La puerta decorada con azulejos azules por la que se entra en Fez el-Bali. Desde aquí baja la Talaa Kebira, la calle principal de la medina, entre talleres, puestos de comida y mulas cargadas.",
        come: "Petit taxi hasta Bab Bou Jeloud, luego a pie cuesta abajo.",
        quando: "Por la mañana, cuando abren las tiendas.",
        tempo: "media hora, y luego se sigue por la medina",
        costo: "entrada libre",
        orari: "Puerta y calle siempre accesibles",
        lat: 34.06167,
        lng: -4.98389,
      },
      {
        nome: "Medersa Bou Inania",
        testo: "Mandada construir por el sultán meriní Abu Inan entre 1350 y 1355. Es la única madrasa de Marruecos que hacía también de mezquita del viernes, con su propio alminar. Enfrente está el antiguo reloj de agua, terminado en 1357, cuyo mecanismo hoy ya no se comprende.",
        come: "En la Talaa Kebira, a pocos minutos de Bab Bou Jeloud. La sala de oración no está abierta a los no musulmanes, pero se ve desde el patio.",
        quando: "A primera hora. Fuera de las horas de oración.",
        tempo: "30-45 minutos",
        costo: "unos 20 MAD, unos 2 € (de mi viaje)",
        lat: 34.06194,
        lng: -4.98278,
        consiglio: "Dírhams en efectivo: en la taquilla no se paga con tarjeta.",
      },
      {
        nome: "Medersa al-Attarine",
        testo: "Pequeña madrasa construida entre 1323 y 1325 para el sultán meriní Abu Said Uthman II, con el patio cubierto de zellige, yeserías y madera de cedro tallada. Está abierta como sitio histórico.",
        come: "En el corazón de la medina, junto a la Qarawiyyin.",
        quando: "Por la mañana.",
        tempo: "30 minutos",
        costo: "entrada parecida a la de la Bou Inania, unos 20 MAD (de mi viaje)",
        lat: 34.06508,
        lng: -4.97369,
      },
      {
        nome: "La Qarawiyyin",
        testo: "La mezquita fundada en 857-859, según la tradición por Fátima al-Fihri, que luego se convirtió en un centro de estudios que la UNESCO cita como la institución de enseñanza superior en activo más antigua del mundo. Es el centro de la medina.",
        come: "Los no musulmanes no entran: por las puertas abiertas se ven una parte del patio y del interior.",
        tempo: "15 minutos",
        costo: "solo desde fuera, gratis",
        orari: "Cerrada a los no musulmanes",
        lat: 34.06444,
        lng: -4.97333,
        consiglio: "No quedarse mucho rato delante de las puertas durante la oración.",
      },
      {
        nome: "Curtidurías Chouara",
        testo: "La curtiduría más grande de la ciudad, con las tinas de piedra llenas de tintes donde se trabajan las pieles como desde hace siglos. Es de las más antiguas de la ciudad, restaurada en el siglo XXI y mantenida en su sitio. El olor es fuerte.",
        come: "Se mira desde arriba, desde las terrazas de las tiendas de piel de alrededor, que piden pasar por la tienda.",
        quando: "De día, cuando las tinas están en uso.",
        tempo: "30 minutos",
        costo: "sin entrada: se pasa por las tiendas y se deja una propina (de mi viaje)",
        lat: 34.06609,
        lng: -4.97098,
        consiglio: "No hay obligación de comprar. Una pequeña propina a quien acompaña a la terraza es lo normal.",
      },
      {
        nome: "Fondouk el-Nejjarine",
        testo: "Un caravasar del siglo XVIII, donde antes dormían los mercaderes y se guardaban las mercancías, restaurado y hoy museo de las artes y oficios de la madera. El patio de tres pisos es uno de los más bonitos de la medina, y delante está la fuente de zellige de la plaza Nejjarine.",
        come: "A pocos pasos de la Qarawiyyin, en la plaza del mismo nombre, donde todavía trabajan los carpinteros.",
        quando: "Por la mañana o a primera hora de la tarde, como pausa entre madrasas y zocos.",
        tempo: "45 minutos",
        lat: 34.06483,
        lng: -4.97596,
        consiglio: "Subir a la terraza: hay un café con vistas a los tejados.",
      },
      {
        nome: "Plaza Seffarine",
        testo: "La plazuela de los caldereros, donde los artesanos martillean el cobre y el latón bajo un gran árbol. A ella dan la madrasa Seffarine, la madrasa meriní más antigua de la ciudad, y la biblioteca de la Qarawiyyin.",
        come: "A pie desde la Qarawiyyin, bajando hacia el río y las curtidurías.",
        quando: "De día, cuando trabajan los talleres.",
        tempo: "15-20 minutos",
        costo: "entrada libre",
        lat: 34.0642,
        lng: -4.9728,
      },
      {
        nome: "Zauía de Moulay Idriss II",
        testo: "El santuario donde está enterrado Idrís II, que en el siglo IX hizo de Fez su capital y es considerado el patrón de la ciudad. El conjunto se reconstruyó en el siglo XVIII; las calles de alrededor están llenas de puestos de velas, incienso y dulces para los peregrinos.",
        come: "En el centro de la medina, cerca de la Qarawiyyin. Los no musulmanes no entran: se mira desde la puerta.",
        quando: "De día; el viernes hay más movimiento de fieles.",
        tempo: "15 minutos",
        costo: "solo desde fuera",
        orari: "Cerrada a los no musulmanes",
        lat: 34.06485,
        lng: -4.97475,
      },
      {
        nome: "Dar Batha",
        testo: "Un palacio de finales del siglo XIX con un gran jardín andalusí, justo fuera de Bab Bou Jeloud. Tras una restauración iniciada en 2019 reabrió en 2025 como Museo de las Artes Islámicas, con cerámica azul de Fez, maderas, alfombras e instrumentos científicos.",
        come: "A pie desde Bab Bou Jeloud, a pocos minutos hacia Fez Jdid.",
        quando: "A primera hora de la tarde, cuando la medina está más calurosa y llena.",
        tempo: "1 hora",
        lat: 34.06058,
        lng: -4.98272,
      },
      {
        nome: "Fez Jdid y el Mellah",
        testo: "La ciudad nueva fundada por los benimerines en 1276, con las grandes puertas del Palacio Real y el Mellah, el antiguo barrio judío.",
        come: "Petit taxi, o a pie desde Bab Bou Jeloud pasando por Jnan Sbil. El Palacio Real solo se ve por fuera.",
        quando: "Por la tarde.",
        tempo: "2 horas",
        costo: "Palacio Real solo por fuera, gratis",
        orari: "Palacio Real cerrado al público; las puertas se ven siempre",
        lat: 34.0553,
        lng: -4.99393,
      },
      {
        nome: "Sinagoga Ibn Danan y cementerio judío",
        testo: "En el Mellah, la sinagoga del siglo XVII restaurada y el cementerio judío, con las tumbas blancas en filas en la colina. Las casas de alrededor tienen balcones de madera sobre la calle, distintos de los de la medina.",
        come: "A pie por el Mellah, después de las puertas del Palacio Real.",
        quando: "Por la tarde, en la misma salida que Fez Jdid.",
        tempo: "1 hora",
        costo: "donativo o entrada modesta (de mi viaje)",
        lat: 34.0523,
        lng: -4.9922,
      },
      {
        nome: "Jnan Sbil",
        testo: "Los jardines históricos entre Fez el-Bali y Fez Jdid, trazados en el siglo XIX bajo Moulay Hassan I: la pausa a la sombra del día.",
        come: "A pie desde Bab Bou Jeloud.",
        tempo: "30-45 minutos",
        lat: 34.05828,
        lng: -4.98681,
      },
      {
        nome: "Las Tumbas meriníes",
        testo: "Las ruinas en las colinas al norte de la medina. El motivo para subir es la vista: todo Fez el-Bali debajo, con los tejados y los alminares.",
        come: "En petit taxi, acordando también la vuelta.",
        quando: "Antes del atardecer.",
        tempo: "1 hora",
        costo: "entrada libre",
        lat: 34.06977,
        lng: -4.97924,
        consiglio: "Bajar en taxi antes de que oscurezca, sin volver a pie por los senderos.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana con guía oficial: Bab Bou Jeloud, Medersa Bou Inania, Talaa Kebira",
          "Medersa al-Attarine, la Qarawiyyin desde las puertas y la Zauía de Moulay Idriss II",
          "Fondouk el-Nejjarine y comida en la medina",
          "Tarde: plaza Seffarine y curtidurías Chouara",
          "Atardecer desde las Tumbas meriníes",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: como arriba",
          "Día 2: Dar Batha y Jnan Sbil",
          "Fez Jdid, las puertas del Palacio Real y el Mellah, con la sinagoga Ibn Danan y el cementerio judío",
          "Tarde libre en los zocos o en un hammam",
        ],
      },
      {
        titolo: "3 días",
        tappe: ["Días 1-2: como arriba", "Día 3: Volubilis, Moulay Idriss y Mequinez en el día con coche y conductor"],
      },
    ],
    zone: [
      {
        nome: "Fez el-Bali",
        perChi: "quien quiere dormir dentro de la medina",
        testo: "Riads en las callejuelas, silenciosos por dentro y caóticos por fuera. Elegir un riad cerca de una puerta a la que lleguen los taxis, como Bab Bou Jeloud.",
        fascia: "40-120 €",
      },
      {
        nome: "Batha y Bab Bou Jeloud",
        perChi: "quien quiere un riad con encanto fácil de alcanzar",
        testo: "El borde oeste de la medina, cerca de Dar Batha y de la puerta azul: los taxis llegan a pocos pasos y se entra enseguida en la Talaa Kebira. Aquí hay muchos riads restaurados con terraza y alguno con piscina.",
        fascia: "80-200 €",
      },
      {
        nome: "Ville Nouvelle",
        perChi: "quien llega en coche o busca comodidad",
        testo: "La ciudad moderna, con hoteles de cadena y restaurantes, más fácil de alcanzar en coche. Para la medina hace falta taxi.",
      },
    ],
    sapori: [
      { nome: "Pastela", testo: "Hojaldre crujiente con pichón o pollo, almendras y canela, una de las especialidades de Fez." },
      { nome: "Harira", testo: "La sopa de legumbres y tomate, que se encuentra en todas partes y por la noche, en Ramadán, rompe el ayuno." },
      { nome: "Comida callejera en la Talaa Kebira", testo: "Pan, buñuelos y dulces en los puestos de la calle principal." },
      { nome: "Té con hierbabuena", testo: "Lo ofrecen en cada tienda y cada riad." },
    ],
    attenzioni: [
      "Falsos guías que se ofrecen por la calle: pedir la acreditación oficial antes de irse con nadie.",
      "Quien dice que una calle está cerrada quiere llevarte a una tienda: comprobar en el mapa.",
      "Carteristas entre la gente de los zocos: mochila delante y nada de efectivo a la vista.",
      "En las curtidurías las terrazas son de las tiendas: se mira, se da las gracias, no hay obligación de comprar.",
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Volubilis y Moulay Idriss",
        distanza: "unos 70 km, 1 hora y media",
        come: "Coche con conductor o excursión de un día; los dos lugares están a pocos kilómetros uno de otro.",
        testo: "Las ruinas de la ciudad romana, Patrimonio de la UNESCO desde 1997, con el Arco de Caracalla y los mosaicos que quedan en las casas, y luego la ciudad santa de Moulay Idriss, blanca sobre la colina, para comer. Volubilis cuesta unos 70 MAD (de mi viaje) y tiene poca sombra.",
      },
      {
        nome: "Mequinez",
        distanza: "unos 70 km, 1 hora",
        come: "Tren ONCF, grand taxi o coche; se combina fácilmente con Volubilis.",
        testo: "La ciudad de Moulay Ismail, Patrimonio de la UNESCO desde 1996, con Bab Mansour, la plaza el-Hedim y el enorme granero del Heri es-Souani. Es más tranquila que Fez y se recorre bien por libre.",
      },
      {
        nome: "Ifrane y el Atlas Medio",
        distanza: "unos 70 km, 1 hora y cuarto",
        come: "Coche o grand taxi; mejor con conductor para parar en los bosques.",
        testo: "Un pueblo de montaña con casas de tejados inclinados, construido en época colonial, rodeado de los bosques de cedros del Atlas Medio, donde viven los macacos de Berbería. En verano se va a buscar el fresco; en invierno a veces nieva.",
      },
      {
        nome: "Sefrou",
        distanza: "unos 35 km, 40 minutos",
        come: "Grand taxi desde Fez o coche.",
        testo: "Una pequeña medina al pie del Atlas, con un antiguo mellah y una cascada justo fuera del centro. Es la excursión más corta para ver una ciudad marroquí sin turistas.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Fez?",
        risposta: "Dos días completos: uno para Fez el-Bali con las madrasas y las curtidurías, otro para Fez Jdid, el Mellah y Dar Batha. Con un tercer día se añaden Volubilis, Moulay Idriss y Mequinez.",
      },
      {
        domanda: "¿Hace falta guía en la medina de Fez?",
        risposta: "Para la primera mañana conviene un guía oficial, reservado a través del riad y con acreditación: la medina es un laberinto. Después se recorre bien por libre con un mapa sin conexión.",
      },
      {
        domanda: "¿Se puede entrar en la Qarawiyyin?",
        risposta: "No, está cerrada a los no musulmanes, como la Zauía de Moulay Idriss II. Por las puertas abiertas se ven una parte del patio y del interior; las madrasas Bou Inania y al-Attarine, en cambio, se visitan.",
      },
      {
        domanda: "¿Las curtidurías Chouara se pagan?",
        risposta: "No hay entrada: se sube a las terrazas de las tiendas de piel de alrededor. Se espera que se mire la mercancía o se deje una pequeña propina, pero no hay obligación de comprar.",
      },
      {
        domanda: "¿Mejor Fez o Marrakech?",
        risposta: "Fez tiene la medina más antigua y más vivida, con menos turistas y más artesanos trabajando; Marrakech tiene más monumentos visitables, jardines y vida nocturna. Con tiempo se ven las dos, en dos itinerarios distintos.",
      },
      {
        domanda: "¿Cómo se llega al riad en la medina?",
        risposta: "Los coches no entran: el taxi deja en una puerta, normalmente Bab Bou Jeloud o Bab Guissa, y el riad manda a alguien para el equipaje. Conviene preguntar antes cuál es la puerta más cercana.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "Los tejados de la medina de Fez el-Bali vistos desde las Tumbas meriníes, con los minaretes, Marruecos",
    immagine: '/images/marocco/fes.webp',
  },
  {
    slug: 'meknes-volubilis',
    paeseSlug: 'marocco',
    ordine: 9,
    nome: 'Mequinez y Volubilis',
    tipologia: ['città', 'storia', 'città imperiale', 'archeologia'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'Mequinez es la ciudad de Moulay Ismail, que la hizo capital y reinó de 1672 a 1727: Patrimonio de la UNESCO desde 1996. A unos 30 km están las ruinas romanas de Volubilis, Patrimonio de la UNESCO desde 1997, y la ciudad santa de Moulay Idriss.',
    percheAndarci:
      'Por las puertas y los graneros de Moulay Ismail, en una ciudad más tranquila que Fez, y por los mosaicos de una ciudad romana en los confines del imperio.',
    cosaVedere: [
      'Bab Mansour y la plaza el-Hedim',
      'El mausoleo de Moulay Ismail',
      'El Heri es-Souani y el estanque del Agdal',
      'La Medersa Bou Inania de Mequinez',
      'Volubilis',
      'Moulay Idriss Zerhoun',
    ],
    cosaFare: ['Volubilis a primera hora', 'Un paseo por libre por la medina de Mequinez'],
    comeArrivare: "En coche desde Fez (unos 70 km, una hora de conducción) o desde Rabat (unos 140 km, casi 2 horas). El tren ONCF es una alternativa: Mequinez tiene dos estaciones. Volubilis está a unos 30 km al norte de Mequinez, media hora por carretera, y Moulay Idriss a pocos kilómetros de las ruinas: se hacen juntos en taxi o con coche con conductor, acordando antes la espera y la vuelta.",
    comeSpostarsi: 'A pie en la medina, petit taxi en la ciudad, taxi o coche con conductor para Volubilis y Moulay Idriss.',
    periodoMigliore: 'primavera y otoño; en Volubilis el sol de verano aprieta',
    costi: "Volubilis unos 70 MAD; Dar Jamai 30 MAD. Presupuesto diario por persona, orientativo: bajo 35-55 € (casa de huéspedes en la medina, comidas alrededor de el-Hedim, tren); medio 70-120 € (riad, restaurantes, taxi a Volubilis); alto 180 € o más (riad de gama alta, coche con conductor y guía oficial).",
    erroriDaEvitare: [
      'Ir a Volubilis en las horas centrales del verano: el yacimiento casi no tiene sombra',
      'Llamar caballerizas al Heri es-Souani: era un granero, como explican las fuentes históricas',
    ],
    miaEsperienza:
      "Pasé por allí en la ruta por carretera del norte de Marruecos: Volubilis y Moulay Idriss por el camino desde Fez, una noche en Mequinez y a la mañana siguiente la ciudad de Mulay Ismail, antes de seguir en coche hacia Rabat.",
    // GUIDA-START
    luoghi: [
      {
        nome: 'Volubilis',
        testo:
          'Habitada ya en el siglo III a. C., quizá capital del reino de Mauritania, pasó a ser romana cuando Roma anexionó Mauritania en el 44 d. C. A finales del siglo II tenía unos 20.000 habitantes y vivía del aceite de oliva. Hacia el 285 cayó en manos de las tribus locales y Roma ya no la recuperó. Quedan el Decumano Máximo, la basílica, el Capitolio, el Arco de Caracalla del 217 y los mosaicos de las casas, como los Trabajos de Hércules y Orfeo.',
        come: 'Unos 30 km al norte de Mequinez (media hora por carretera) y unos 70 km desde Fez (una hora y media), en coche con conductor o taxi. Se visita a pie siguiendo el recorrido del yacimiento.',
        quando: 'A primera hora: el yacimiento está al aire libre y casi sin sombra.',
        tempo: '2 horas',
        consiglio: 'Sombrero, agua y calzado cerrado. Un guía ayuda a leer las ruinas.',
        "costo": "Unos 70 MAD por persona (unos 6,50 €); guías oficiales en la entrada, de pago",
        "lat": 34.03996,
        "lng": -5.56269
      },
      {
        nome: 'Moulay Idriss Zerhoun',
        testo:
          'La ciudad santa construida alrededor del mausoleo de Idrís I, que en Volubilis fundó en 787-788 la dinastía idrisí y allí murió asesinado en 791. El mausoleo actual lo reconstruyó Moulay Ismail a principios del siglo XVIII. Está a pocos kilómetros de las ruinas, en las colinas.',
        come: 'Con el mismo taxi de Volubilis. El mausoleo es un lugar de peregrinación y no está abierto a los no musulmanes.',
        quando: 'Después de Volubilis, a media mañana.',
        tempo: '1 hora',
        consiglio: 'Subir a la colina más alta del pueblo, desde donde se ve todo el conjunto religioso.',
        "lat": 34.05594,
        "lng": -5.51832
      },
      {
        nome: 'Bab Mansour y la plaza el-Hedim',
        testo:
          'La puerta monumental que empezó Moulay Ismail y terminó en 1732 su hijo Moulay Abdallah, y que toma el nombre de Mansour al-Alj, un antiguo esclavo cristiano convertido al islam. Delante está la plaza el-Hedim, cuyo nombre significa "escombros": viene de las demoliciones hechas para abrirla.',
        come: 'A pie, en la entrada de la medina.',
        quando: 'A última hora de la tarde, cuando la plaza se anima.',
        tempo: '30 minutos',
        "lat": 33.89261,
        "lng": -5.56464
      },
      {
        nome: 'Mausoleo de Moulay Ismail',
        testo: 'La tumba del sultán. Sigue siendo un lugar religioso, abierto también a los turistas.',
        come: 'A pie desde Bab Mansour, en la ciudad imperial. Ropa que cubra y silencio.',
        tempo: '30 minutos',
        "consiglio": "El mausoleo estuvo cerrado mucho tiempo por restauración: conviene preguntar en el hotel si se puede visitar antes de ir.",
        "lat": 33.89082,
        "lng": -5.56332
      },
      {
        nome: 'Heri es-Souani',
        testo:
          'El enorme granero y almacén de Moulay Ismail, con 22 filas de arcos que sostenían una bóveda hoy derrumbada. A menudo se le llama caballeriza, pero era un granero. Está junto al estanque del Agdal, parte del sistema hidráulico del palacio.',
        come: 'Petit taxi desde Bab Mansour: a pie queda lejos.',
        tempo: '45 minutos',
        "lat": 33.88054,
        "lng": -5.55749
      },
      {
        nome: 'Medersa Bou Inania de Mequinez',
        testo: 'La madrasa meriní fundada en 1335-36 por el sultán Abu al-Hasan y que hoy lleva el nombre de su hijo Abu Inan.',
        come: 'En la medina, a pie desde el-Hedim.',
        tempo: '30 minutos',
        "lat": 33.89519,
        "lng": -5.56528
      },
      {
        nome: 'Museo Dar Jamai',
        testo: 'Un palacio de 1882, construido por un gran visir del sultán Moulay Hassan, que hoy acoge un museo asomado a la plaza el-Hedim.',
        come: 'En la plaza el-Hedim.',
        tempo: '45 minutos',
        "costo": "30 MAD adultos, 20 MAD niños mayores de 10 años (unos 3 € y 2 €, 2026)",
        "orari": "10-18, cerrado los martes",
        "url": "https://fnm.ma/museums/37",
        "consiglio": "Desde 2022 es el Museo Nacional de la Música: más de cien instrumentos, de la música andalusí a la de las cofradías gnawa y aissawa.",
        "lat": 33.89366,
        "lng": -5.56658
      },
      {
        "nome": "Plaza Lalla Aouda",
        "testo": "La gran plaza que se abre tras Bab Mansour, el mechuar del palacio donde se celebraban ceremonias, recepciones y desfiles militares. En el lado este está la mezquita de Lalla Aouda, la mezquita real de la kasba, renovada hacia 1677.",
        "come": "A pie, cruzando Bab Mansour desde el-Hedim.",
        "quando": "Al final de la tarde, de camino entre Bab Mansour y el mausoleo.",
        "tempo": "20 minutos",
        "costo": "Gratis",
        "lat": 33.89305,
        "lng": -5.5628
      },
      {
        "nome": "Koubba el-Khayatine y Habs Qara",
        "testo": "El pabellón donde Moulay Ismail recibía a los embajadores extranjeros, convertido después en taller de uniformes militares. Bajo la plaza de enfrente se abren las grandes salas abovedadas de Habs Qara, que la tradición llama prisión de los esclavos cristianos: para la mayoría de los estudiosos eran almacenes o silos.",
        "come": "A pie desde la plaza Lalla Aouda, hacia el mausoleo.",
        "quando": "Junto con el mausoleo, por la tarde.",
        "tempo": "30-45 minutos",
        "lat": 33.89113,
        "lng": -5.56462
      },
      {
        "nome": "Estanque del Agdal",
        "testo": "El gran estanque rectangular, de unos 149 por 319 metros, que guardaba la reserva de agua del palacio y se alimentaba de la Casa de las diez norias. Al lado está el Heri es-Souani; alrededor del agua la gente de Mequinez viene a pasear por la tarde.",
        "come": "Petit taxi desde la medina, junto con el Heri es-Souani.",
        "quando": "Al atardecer.",
        "tempo": "20-30 minutos",
        "costo": "Gratis",
        "lat": 33.88159,
        "lng": -5.56013
      },
      {
        "nome": "Bab Berdaine",
        "testo": "La puerta norte de la medina, construida o reconstruida bajo Moulay Ismail, junto al barrio y la mezquita del mismo nombre. De aquí salen los zocos de los artesanos, mucho menos turísticos que los de Fez.",
        "come": "A pie desde la Medersa Bou Inania, por los zocos, 15 minutos hacia el norte.",
        "quando": "Por la mañana, cuando los talleres están abiertos.",
        "tempo": "1 hora con los zocos",
        "lat": 33.90107,
        "lng": -5.56831
      },
      {
        "nome": "Mellah y Bab el-Khemis",
        "testo": "El barrio judío que Moulay Ismail trasladó al oeste de la kasba, con el viejo cementerio israelita y el mercado. Cerca está Bab el-Khemis, una de las puertas que el sultán abrió en sus obras en la medina.",
        "come": "A pie desde el-Hedim, hacia el oeste.",
        "quando": "Por la mañana.",
        "tempo": "45 minutos",
        "lat": 33.89235,
        "lng": -5.57174
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Volubilis",
          "Media mañana: Moulay Idriss",
          "Tarde: Bab Mansour, el-Hedim y el mausoleo de Moulay Ismail"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Volubilis y Moulay Idriss",
          "Día 2: Mequinez, con el Heri es-Souani, la madrasa y Dar Jamai"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Volubilis a primera hora y Moulay Idriss, cena en el-Hedim",
          "Día 2: Bab Mansour, plaza Lalla Aouda, Koubba el-Khayatine, el mausoleo, luego el Heri es-Souani y el estanque del Agdal al atardecer",
          "Día 3: la madrasa, Dar Jamai, los zocos hasta Bab Berdaine y el Mellah"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "quien quiere dormir cerca de el-Hedim",
        "testo": "Riads y casas de huéspedes a pocos pasos de Bab Mansour."
      },
      {
        "nome": "Ville Nouvelle",
        "perChi": "quien llega en coche",
        "testo": "Hoteles más fáciles de alcanzar en coche; para la medina hace falta taxi."
      },
      {
        "nome": "Cerca de Volubilis",
        "perChi": "quien quiere el yacimiento a la hora de apertura",
        "testo": "Algunos hoteles y casas de huéspedes entre los olivos alrededor de las ruinas: hace falta coche, pero se entra en Volubilis antes del calor y de los grupos."
      }
    ],
    sapori: [
      { nome: 'Aceitunas y aceite de la llanura', testo: 'La zona de Volubilis y Mequinez es tierra de olivos desde la época romana.' },
      { nome: 'Tajín', testo: 'En los restaurantes alrededor de el-Hedim.' },
      { nome: 'Harira', testo: 'La sopa de legumbres que se encuentra en todas partes.' },
    ],
    attenzioni: [
      'En Volubilis hay guías que se ofrecen: acordar precio y duración antes de empezar, y pedir la acreditación oficial.',
      'El taxi a Volubilis y Moulay Idriss hay que acordarlo antes, con la espera y la vuelta incluidas.',
      'Ropa que cubra en Moulay Idriss, que es una ciudad santa.',
    ],
    gite: [
      {
        "nome": "Fez",
        "distanza": "unos 70 km, una hora",
        "come": "En coche por autopista o en tren ONCF",
        "testo": "La medina más grande de Marruecos, con las curtidurías y la Medersa Bou Inania. En un día se ve poco: mejor dormir allí al menos dos noches."
      },
      {
        "nome": "Ifrane y el Atlas Medio",
        "distanza": "unos 66 km, 1 h 30",
        "come": "En coche hacia el sureste",
        "testo": "El pueblo de montaña de tejados a dos aguas y parques, a más de 1.600 metros, y más adelante los bosques de cedros en torno a Azrou, donde viven los macacos de Berbería."
      }
    ],
    faq: [
      {
        "domanda": "¿Mejor dormir en Mequinez o hacer Volubilis en el día desde Fez?",
        "risposta": "Desde Fez se hace en el día, pero durmiendo en Mequinez se llega pronto a Volubilis y a la mañana siguiente se recorre con calma la ciudad de Moulay Ismail."
      },
      {
        "domanda": "¿Cuánto cuesta la entrada a Volubilis?",
        "risposta": "Unos 70 MAD por persona. En la entrada hay guías oficiales de pago: precio y duración se acuerdan antes."
      },
      {
        "domanda": "¿Pueden los no musulmanes entrar en los monumentos religiosos?",
        "risposta": "En el mausoleo de Moulay Ismail sí, con ropa que cubra. El mausoleo de Moulay Idriss y las mezquitas en uso no están abiertos a los no musulmanes."
      },
      {
        "domanda": "¿Cuánto tiempo hace falta en Volubilis?",
        "risposta": "Un par de horas para el recorrido del yacimiento con los mosaicos. En verano conviene entrar a la hora de apertura, porque casi no hay sombra."
      },
      {
        "domanda": "¿Mequinez se recorre a pie?",
        "risposta": "La medina y la ciudad imperial alrededor de Bab Mansour, sí. Para el Heri es-Souani y el estanque del Agdal hace falta un petit taxi."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "El Arco de Caracalla entre las ruinas romanas de Volubilis, cerca de Mequinez, Marruecos",
    immagine: '/images/marocco/meknes-volubilis.webp',
  },
  {
    slug: 'rabat',
    paeseSlug: 'marocco',
    ordine: 10,
    nome: 'Rabat (y la Mezquita Hassan II de Casablanca)',
    tipologia: ['città', 'cultura', 'città imperiale', 'mare'],
    giorniConsigliati: '1-2 días, más medio día en Casablanca',
    visitataPersonalmente: true,
    introduzione:
      'La capital de Marruecos desde 1912, y lo siguió siendo tras la independencia de 1956, en la desembocadura del Bu Regreg, frente a Salé. Patrimonio de la UNESCO desde 2012, con la ciudad vieja y la moderna. A unos 95 km por carretera está Casablanca, con la Mezquita Hassan II.',
    percheAndarci:
      'Por la Kasbah de los Udayas sobre el mar, la Torre Hassan y el Chellah, en una ciudad ordenada donde se pasea sin presiones. Luego Casablanca por su mezquita.',
    cosaVedere: [
      'La Kasbah de los Udayas',
      'Los Jardines andalusíes',
      'La Torre Hassan',
      'El Mausoleo de Mohammed V',
      'El Chellah',
      'La Mezquita Hassan II en Casablanca',
    ],
    cosaFare: ['El mirador de la kasbah sobre el río y el Atlántico', 'El tour guiado de la Mezquita Hassan II'],
    comeArrivare:
      "En coche desde Mequinez (unos 140 km, casi 2 horas) y desde Casablanca (unos 95 km, algo más de una hora). El tren ONCF es una alternativa, con las estaciones de Rabat Ville y Rabat Agdal: por Rabat Agdal pasa también la alta velocidad Al Boraq hacia Tánger y Casablanca. También está el aeropuerto de Rabat-Salé, a pocos kilómetros del centro. En la ciudad se va a pie y en tranvía, que llega hasta Salé.",
    comeSpostarsi: 'A pie y en tranvía, que une Rabat y Salé desde 2011.',
    periodoMigliore: 'todo el año, con la primavera y el otoño más agradables',
    costi: "Mezquita Hassan II 140 MAD; museos de la Fundación Nacional de Museos de 20 a 60 MAD. Presupuesto diario por persona, orientativo: bajo 40-60 € (riad sencillo en la medina, comidas en locales, tranvía); medio 80-130 € (riad u hotel en el centro, restaurantes, un par de museos); alto 200 € o más (hotel de gama alta, cenas cuidadas, coche con conductor a Casablanca).",
    erroriDaEvitare: [
      'Presentarse en la Mezquita Hassan II con pantalón corto o sin mangas: no se entra',
      'Ir a la Mezquita Hassan II sin mirar los turnos: el viernes hay menos',
    ],
    miaEsperienza:
      "Fue la última etapa de mi ruta por el norte de Marruecos: un día entre la Kasba de los Udayas, la Torre Hassan y el Chellah, y luego hacia Casablanca para la Mezquita Hassan II y el vuelo de vuelta.",
    // GUIDA-START
    luoghi: [
      {
        nome: 'Kasbah de los Udayas',
        testo:
          'La ciudadela construida por los almohades hacia 1150 en la desembocadura del Bu Regreg. Se entra por la puerta de Bab Oudaya, levantada entre 1195 y 1199, y se camina entre las casas blancas y azules hasta el mirador sobre Salé y el Atlántico. En el pabellón de Moulay Ismail está el Museo Nacional de la Joyería, reabierto en 2023.',
        come: 'A pie desde la medina. Entrada libre a la kasbah.',
        quando: 'Por la mañana o a última hora de la tarde.',
        tempo: '1-1,5 horas',
        "lat": 34.03056,
        "lng": -6.83556
      },
      {
        nome: 'Jardines andalusíes',
        testo: 'El jardín creado entre 1915 y 1918, durante el protectorado francés, según el modelo de los jardines moriscos de al-Ándalus, dentro de la kasbah.',
        come: 'Dentro de la Kasbah de los Udayas.',
        tempo: '30 minutos',
        "lat": 34.03005,
        "lng": -6.83538
      },
      {
        nome: 'Torre Hassan y Mausoleo de Mohammed V',
        testo:
          'La Torre Hassan es el alminar nunca terminado de la gran mezquita que mandó construir el sultán almohade Yaqub al-Mansur, empezada en 1191 y dejada sin terminar a su muerte, en 1199. Al lado está el Mausoleo de Mohammed V, terminado en 1971, donde también están enterrados sus hijos, el rey Hassan II y el príncipe Abdallah, con la guardia de honor en la entrada.',
        come: 'A pie o en tranvía. La explanada está abierta.',
        quando: 'Por la mañana o a última hora de la tarde.',
        tempo: '1 hora',
        consiglio: 'Ropa que cubra, y nada de fotos a los guardias sin preguntar.',
        "lat": 34.0241,
        "lng": -6.82272
      },
      {
        nome: 'Chellah',
        testo:
          'El lugar donde se superponen las ruinas de la ciudad romana de Sala y la necrópolis de los benimerines, iniciada en 1284-85. La puerta principal es de 1339. En los árboles y en el viejo alminar anidan las cigüeñas. Las ruinas han acogido durante años el festival Jazz au Chellah.',
        come: 'Petit taxi, o a pie desde la Torre Hassan.',
        quando: 'Por la tarde, cuando la luz es más suave.',
        tempo: '1 hora',
        "lat": 34.00667,
        "lng": -6.82028
      },
      {
        nome: 'Mezquita Hassan II (Casablanca)',
        testo:
          'La gran mezquita sobre el mar de Casablanca, una de las pocas de Marruecos que pueden visitar los no musulmanes, solo con el tour guiado. El tour pasa por la sala de oración, la sala del alminar y las salas de abluciones.',
        come: 'En coche desde Rabat, unos 95 km por la costa.',
        quando:
          'Turnos guiados varias veces al día, por la mañana y a primera hora de la tarde; el viernes hay menos. Los horarios actualizados están en fmh2.ma, donde se indican en hora GMT.',
        tempo: '1 hora',
        costo: '140 MAD para adultos extranjeros (fmh2.ma, noviembre de 2026)',
        url: 'https://fmh2.ma/',
        consiglio: 'Hombros, torso y piernas cubiertos hasta debajo de las rodillas: nada de pantalón corto ni camisetas de tirantes. Los zapatos se quitan en la entrada, con las bolsas que dan en la puerta.',
        "orari": "Turnos guiados varias veces al día, por la mañana y a primera hora de la tarde; los viernes hay menos",
        "lat": 33.60734,
        "lng": -7.63256
      },
      {
        "nome": "Museo Nacional del Adorno",
        "testo": "El museo dentro de la Kasbah de los Udayas, en un edificio terminado bajo Moulay Ismail entre 1672 y 1694. Está dedicado a las joyas y adornos de Marruecos, con la colección de joyas amazigh cedida por el rey Mohammed VI, en cinco secciones.",
        "come": "A pie dentro de la kasbah, en el extremo oeste, cerca de los Jardines andalusíes.",
        "quando": "Por la mañana, antes del mirador.",
        "tempo": "45 minutos",
        "costo": "60 MAD para extranjeros (unos 5,50 €, 2026)",
        "orari": "10-18, cerrado los martes",
        "url": "https://fnm.ma/museums/39",
        "lat": 34.03049,
        "lng": -6.8357
      },
      {
        "nome": "Medina y rue des Consuls",
        "testo": "La medina de Rabat está entre la Kasbah de los Udayas y la Muralla andalusí: pequeña, llana y ordenada, se recorre sin la presión de Fez o Marrakech. La rue des Consuls, donde vivían los cónsules europeos, es hoy la calle de las alfombras, el cuero y la artesanía.",
        "come": "A pie desde la kasbah, bajando hacia el centro.",
        "quando": "Al final de la tarde, cuando la medina se llena.",
        "tempo": "1-1,5 horas",
        "costo": "Gratis",
        "lat": 34.028,
        "lng": -6.83403
      },
      {
        "nome": "Bab er-Rouah",
        "testo": "La puerta más bella de las murallas almohades, construida bajo Yaqub al-Mansur a finales del siglo XII, con el arco de piedra decorado con bandas talladas. Su nombre significa «puerta de los vientos».",
        "come": "A pie o en tranvía desde el centro moderno, junto a la muralla.",
        "quando": "Al final de la tarde, con la luz rasante sobre la piedra.",
        "tempo": "15-20 minutos",
        "costo": "Gratis",
        "lat": 34.01283,
        "lng": -6.83764
      },
      {
        "nome": "Museo Mohammed VI de Arte Moderno y Contemporáneo",
        "testo": "El primer gran museo de arte moderno de Marruecos, inaugurado en 2014. Guarda más de 500 pinturas de los maestros marroquíes, de Gharbaoui a Belkahia y Melehi, y acoge exposiciones temporales internacionales.",
        "come": "A pie o en tranvía, en la avenida Moulay Hassan, en el centro moderno.",
        "quando": "Por la tarde.",
        "tempo": "1-1,5 horas",
        "costo": "60 MAD para extranjeros (unos 5,50 €, 2026)",
        "orari": "10-18, cerrado los martes",
        "url": "https://fnm.ma/museums/31",
        "lat": 34.01528,
        "lng": -6.83278
      },
      {
        "nome": "Museo de Historia y de las Civilizaciones",
        "testo": "El antiguo museo arqueológico nacional, con piezas desde la prehistoria hasta las dinastías islámicas. La sala de los bronces romanos hallados en Volubilis, con la cabeza de Juba II y el efebo, es el principal motivo para entrar.",
        "come": "A pie, en la rue El Brihi, cerca de la mezquita As-Sunna.",
        "quando": "Por la mañana o a primera hora de la tarde.",
        "tempo": "1 hora",
        "costo": "20 MAD adultos (unos 2 €, 2026)",
        "orari": "10-18, cerrado los martes",
        "url": "https://fnm.ma/museums/27",
        "consiglio": "Útil antes o después de Volubilis, para ver las mejores piezas del yacimiento.",
        "lat": 34.01361,
        "lng": -6.83139
      },
      {
        "nome": "Catedral de San Pedro",
        "testo": "La catedral católica de Rabat, inaugurada en 1921 en el barrio construido durante el protectorado francés. Da a la plaza del Golán, en el corazón de la ciudad nueva.",
        "come": "A pie desde el Museo Mohammed VI, pocos minutos.",
        "quando": "De paso, por el centro moderno.",
        "tempo": "15 minutos",
        "lat": 34.0179,
        "lng": -6.83125
      },
      {
        "nome": "Museo Nacional de la Fotografía (Fuerte Rottembourg)",
        "testo": "Un fuerte construido entre 1873 y 1894, el primer edificio de hormigón armado de Marruecos, restaurado y abierto en 2020 como museo de la fotografía. Está en el acantilado al oeste de la medina, sobre el Atlántico.",
        "come": "En taxi desde la medina, por la costa hacia el oeste.",
        "quando": "Por la tarde, con la vista del océano.",
        "tempo": "1 hora",
        "costo": "20 MAD adultos (unos 2 €, 2026)",
        "orari": "10-18, cerrado los martes",
        "url": "https://fnm.ma/museums/36",
        "lat": 34.025,
        "lng": -6.8509
      },
      {
        "nome": "Salé y la medersa meriní",
        "testo": "La ciudad en la otra orilla del Bou Regreg, más popular y menos visitada que Rabat, con una medina de monumentos meriníes. Cerca de la Gran Mezquita está la madrasa de Abu al-Hasan, del siglo XIV, con maderas y yeserías talladas.",
        "come": "En tranvía desde Rabat, cruzando el puente sobre el Bou Regreg, luego a pie.",
        "quando": "Por la mañana.",
        "tempo": "1,5-2 horas",
        "lat": 34.03996,
        "lng": -6.82725
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Kasbah de los Udayas y Jardines andalusíes",
          "Tarde: Torre Hassan y Mausoleo de Mohammed V",
          "Última hora de la tarde: Chellah"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba",
          "Día 2: en coche a Casablanca y tour de la Mezquita Hassan II"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Kasbah de los Udayas, Museo del Adorno, medina y rue des Consuls",
          "Día 2: Torre Hassan, Mausoleo de Mohammed V, Museo Mohammed VI, Bab er-Rouah y Chellah",
          "Día 3: en coche a Casablanca y tour de la Mezquita Hassan II"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina de Rabat",
        "perChi": "quien quiere dormir cerca de la kasbah",
        "testo": "Riads a pocos minutos de la Kasbah de los Udayas. Más tranquila que la medina de Fez."
      },
      {
        "nome": "Centro moderno y Agdal",
        "perChi": "quien llega en coche o busca comodidad",
        "testo": "Hoteles en la ciudad moderna, con el tranvía para la medina."
      },
      {
        "nome": "Hassan y la ribera",
        "perChi": "quien quiere estar entre la medina y la Torre Hassan",
        "testo": "La zona entre las murallas de la medina y la Torre Hassan, con hoteles y el tranvía en la puerta: se va a pie tanto a la kasbah como al mausoleo."
      }
    ],
    sapori: [
      { nome: 'Pescado del Atlántico', testo: 'Pescado a la brasa en los restaurantes hacia el puerto y la desembocadura del río.' },
      { nome: 'Té con hierbabuena', testo: 'En los cafés de la kasbah y de la medina.' },
    ],
    attenzioni: [
      'En la Mezquita Hassan II solo se entra con el tour guiado y con ropa que cubra: el precio oficial es el del sitio fmh2.ma.',
      'Carteristas en las zonas con mucha gente y en las playas.',
      'Taxis: pedir el taxímetro o acordar el precio antes.',
    ],
    gite: [
      {
        "nome": "Casablanca",
        "distanza": "unos 95 km, algo más de una hora",
        "come": "En coche por autopista o en tren ONCF",
        "testo": "Por la Mezquita Hassan II sobre el mar, con el tour guiado, el barrio Habous y los edificios art déco del centro."
      },
      {
        "nome": "Lago de Sidi Boughaba y Mehdia",
        "distanza": "unos 36 km, tres cuartos de hora",
        "come": "En coche hacia el norte, cerca de Kenitra",
        "testo": "Una reserva natural con un lago de agua dulce tras las dunas, buena para las aves acuáticas, y un poco más allá la playa de Mehdia, frecuentada por los surfistas de Rabat."
      },
      {
        "nome": "Mequinez y Volubilis",
        "distanza": "unos 140 km, casi 2 horas",
        "come": "En coche por autopista o en tren ONCF",
        "testo": "La ciudad de Moulay Ismail y las ruinas romanas de Volubilis: en un día se hace una de las dos; mejor dormir en Mequinez."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Rabat?",
        "risposta": "Un día basta para la Kasbah de los Udayas, la Torre Hassan y el Chellah. Con dos o tres se añaden los museos, Salé y Casablanca."
      },
      {
        "domanda": "¿Se puede visitar la Mezquita Hassan II?",
        "risposta": "Sí, solo con el tour guiado, a 140 MAD para adultos extranjeros. Los horarios de los turnos están en fmh2.ma y hace falta ropa que cubra hasta debajo de las rodillas."
      },
      {
        "domanda": "¿Rabat es segura y tranquila para recorrer?",
        "risposta": "Es una de las ciudades más ordenadas de Marruecos y se recorre sin presiones. Quedan los carteristas en las zonas concurridas, como en cualquier capital."
      },
      {
        "domanda": "¿Se visita el Mausoleo de Mohammed V?",
        "risposta": "Sí, la entrada es gratuita y abierta también a los no musulmanes, con ropa adecuada. A los guardias de honor solo se les fotografía preguntando."
      },
      {
        "domanda": "¿Cómo moverse entre Rabat y Salé?",
        "risposta": "En tranvía, que desde 2011 une las dos ciudades por el puente sobre el Bou Regreg. Si no, petit taxis, con taxímetro."
      },
      {
        "domanda": "¿Qué museos de Rabat cierran los martes?",
        "risposta": "Los de la Fundación Nacional de Museos: Museo Mohammed VI, Museo de Historia y de las Civilizaciones, Museo del Adorno y Museo de la Fotografía, abiertos de 10 a 18 los demás días."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "La puerta almohade de Bab Oudaya y las murallas de la Kasbah de los Udayas en Rabat, Marruecos",
    immagine: '/images/marocco/rabat.webp',
  },
]
