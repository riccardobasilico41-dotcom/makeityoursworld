import type { Destinazione } from '@/lib/types'

export const destinazioniIndia: Destinazione[] = [
  {
    slug: 'delhi',
    paeseSlug: 'india',
    ordine: 1,
    nome: 'Delhi',
    tipologia: ['città', 'storia moghul', 'arrivo'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital son dos ciudades en una: la Vieja Delhi mogol de Shah Jahan, con la Jama Masjid, el Fuerte Rojo y los callejones de Chandni Chowk, y la Nueva Delhi británica de las grandes avenidas, los jardines y los mausoleos.',
    percheAndarci:
      'Casi todos los vuelos desde Italia llegan aquí, y dos días bastan para ver los monumentos que explican el resto del viaje: la Tumba de Humayún, modelo del Taj Mahal, y el Qutb Minar, uno de los primeros monumentos islámicos de la India.',
    cosaVedere: [
      'La Jama Masjid, una de las mezquitas más grandes de la India, y el Fuerte Rojo',
      'Los mercados de Chandni Chowk y el de especias de Khari Baoli',
      'La Tumba de Humayún y el barrio sufí de Nizamuddin',
      'El Qutb Minar y la columna de hierro',
      'El Gurudwara Bangla Sahib, el templo sij con el comedor gratuito abierto a todos',
      'India Gate, Kartavya Path y los Lodhi Gardens',
    ],
    cosaFare: [
      'Un paseo en ciclo-rickshaw por los callejones de la Vieja Delhi',
      'Comer en el langar del Gurudwara Bangla Sahib',
      'Escuchar qawwali en Nizamuddin por la noche, sobre todo el jueves',
      'Moverse en metro, el medio más sencillo y limpio de la ciudad',
    ],
    doveDormire:
      'Karol Bagh y Connaught Place en gama media, South Delhi (Hauz Khas, Defence Colony) para la tranquilidad. Paharganj es barata y está cerca de la estación de Nueva Delhi, pero es caótica.',
    doveMangiare:
      'Parathe en Paranthe Wali Gali, kebab alrededor de la Jama Masjid, chaat en Chandni Chowk, cocina punjabí por toda la ciudad.',
    comeArrivare:
      'Aeropuerto internacional Indira Gandhi, conectado con el centro por el metro Airport Express (unos 20 minutos hasta Nueva Delhi) o con taxi de prepago y Uber.',
    comeSpostarsi: 'Metro (con vagón reservado a las mujeres), Uber, Ola y tuk-tuk a precio acordado.',
    periodoMigliore:
      'octubre-noviembre y febrero-marzo. Entre noviembre y enero la contaminación del aire suele ser muy alta; de abril a junio el calor supera los 40 °C.',
    costi: 'Monumentos ASI unas 550-600 rupias para los extranjeros; metro unas pocas decenas de rupias por viaje.',
    erroriDaEvitare: [
      'Subir a taxis no oficiales en el aeropuerto o creer a quien dice que el hotel está cerrado',
      'Entrar en las falsas oficinas de turismo cerca de la estación de Nueva Delhi y de Connaught Place',
      'Visitar la Vieja Delhi en las horas más calurosas o en viernes a la hora de la oración',
    ],
    luoghi: [
      {
        nome: "Tumba de Humayún",
        testo: "El primer gran jardín-mausoleo de la India, terminado en 1572 para el emperador Humayún: arenisca roja, mármol blanco y un jardín dividido en cuatro por canales. Es el modelo directo del Taj Mahal y es patrimonio de la UNESCO. En el recinto hay otras tumbas, entre ellas la de Isa Khan, más antigua.",
        come: "Metro hasta JLN Stadium o Hazrat Nizamuddin y luego un tramo corto en tuk-tuk. Se visita por libre: los paneles lo explican bien y no hace falta guía.",
        quando: "Horarios en la web del ASI. Última hora de la tarde, con la mejor luz sobre la arenisca.",
        tempo: "1 hora y media-2 horas",
        costo: "unas 600 rupias para los extranjeros, 550 online (tarifa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Verla antes del Taj Mahal: se reconocen la planta, la cúpula doble y el jardín que en Agra serán perfectos."
      },
      {
        nome: "Qutb Minar y la columna de hierro",
        testo: "Una torre de arenisca de unos 73 metros, empezada en 1199 por Qutb ud-Din Aibak, el primer sultán de Delhi, con franjas de inscripciones coránicas talladas. Al lado están las ruinas de la mezquita Quwwat-ul-Islam, la más antigua que se conserva de los sultanes de Delhi, y una columna de hierro con una inscripción del siglo IV que no se oxida.",
        come: "Metro amarillo hasta Qutub Minar y luego un trayecto corto en tuk-tuk. A la torre no se sube: está cerrada al público desde 1981.",
        quando: "Horarios en la web del ASI. Mejor a primera hora, antes de los grupos y del calor.",
        tempo: "1 hora y media",
        costo: "unas 600 rupias para los extranjeros, 550 online (tarifa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Combina bien con el barrio de Mehrauli, a pie, con las tumbas y los pozos repartidos por el parque arqueológico."
      },
      {
        nome: "Fuerte Rojo",
        testo: "La ciudadela de Shah Jahan, construida entre 1638 y 1648, cuando la capital mogol pasó de Agra a Delhi. Dentro están las salas de audiencias, los pabellones de mármol y algunos museos. Desde aquí, cada 15 de agosto, el primer ministro habla a la nación.",
        come: "Metro morado hasta Lal Quila. Entrada por la Lahori Gate tras los controles de seguridad.",
        quando: "Desde febrero de 2026 abre todos los días, lunes incluido, del amanecer a las 21. A primera hora, para evitar la multitud del domingo.",
        tempo: "2 horas",
        costo: "600 rupias para los extranjeros, 550 online (tarifa del ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Si vais justos de tiempo, mejor la Tumba de Humayún: el fuerte es grande, pero más desnudo de lo que uno espera."
      },
      {
        nome: "Jama Masjid",
        testo: "Una de las mezquitas más grandes de la India, mandada construir por Shah Jahan y terminada en 1656. El patio acoge a unos 25.000 fieles y desde los minaretes se ve toda la Vieja Delhi.",
        come: "Metro morado hasta Jama Masjid. Los zapatos se quitan en la entrada; a quien lleva piernas u hombros descubiertos le prestan una túnica.",
        quando: "Cerrada a los visitantes durante las oraciones, y el viernes a mediodía está abarrotada. Por la mañana o a media tarde.",
        tempo: "45 minutos",
        costo: "entrada libre; se paga por el móvil o la cámara y por subir al minarete",
        consiglio: "Fijar las tarifas en la puerta y no dar dinero a quien se ofrece a «vigilar» los zapatos dentro del patio."
      },
      {
        nome: "Chandni Chowk y el mercado de especias de Khari Baoli",
        testo: "La calle de los mercaderes de la Delhi mogol, hoy una maraña de callejones especializados: plata, telas de novia, papel, dulces fritos. Al fondo está Khari Baoli, el mercado mayorista de especias, donde la guindilla y el cardamomo se venden por sacos.",
        come: "Metro amarillo hasta Chandni Chowk. Lo mejor es recorrerlo en ciclo-rickshaw a precio acordado antes y luego a pie.",
        quando: "Desde media mañana, cuando las tiendas están abiertas.",
        tempo: "medio día",
        consiglio: "Entrar en el Gadodia Market, el edificio de los años veinte donde trabajan los mayoristas de especias: es el corazón del mercado."
      },
      {
        nome: "Gurudwara Bangla Sahib",
        testo: "El templo sij más conocido de Delhi, con la cúpula dorada y un estanque sagrado. El langar, el comedor comunitario, sirve comida gratis a cualquiera, preparada por voluntarios.",
        come: "En Baba Kharak Singh Marg, cerca de Connaught Place, a pie o en tuk-tuk. Zapatos y calcetines en la consigna, cabeza cubierta: los pañuelos se cogen en la entrada.",
        quando: "Abierto todos los días. Por la noche, con las luces y los cantos, impresiona más.",
        tempo: "1 hora",
        costo: "gratis",
        consiglio: "Sentarse en el suelo del langar con todos los demás y, si apetece, echar una mano en la cocina."
      },
      {
        nome: "Dargah de Nizamuddin y los qawwali",
        testo: "El santuario del santo sufí Nizamuddin Auliya, en un barrio de callejones cerca de la Tumba de Humayún. Cada noche, después de la oración del atardecer, los cantores de qawwali tocan delante de la tumba, entre los fieles.",
        come: "A pie desde la Tumba de Humayún o desde la estación de Hazrat Nizamuddin. Sin zapatos, con la cabeza cubierta y ropa larga.",
        quando: "Cada noche después de la oración del atardecer; el jueves es la noche más intensa y concurrida.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Las ofrendas son voluntarias: dejad solo lo que queráis, aunque alguien insista."
      },
      {
        nome: "India Gate, Kartavya Path y los Lodhi Gardens",
        testo: "La Delhi británica de las grandes avenidas: el arco a los caídos de India Gate y la avenida ceremonial hacia los palacios del gobierno. Un poco más al sur, los Lodhi Gardens son un parque público con las tumbas de los sultanes del siglo XV.",
        come: "Metro hasta Khan Market para los Lodhi Gardens; a India Gate en tuk-tuk o a pie desde Central Secretariat.",
        quando: "Los Lodhi Gardens al amanecer, cuando Delhi sale a correr y hace yoga. India Gate al atardecer, cuando se ilumina.",
        tempo: "2 horas",
        costo: "gratis",
        consiglio: "Terminar en los Lodhi Gardens con un café en Khan Market: es el rincón más tranquilo de la ciudad."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Jama Masjid a la hora de apertura",
          "Chandni Chowk en ciclo-rickshaw y Khari Baoli",
          "Comida con parathe en Paranthe Wali Gali",
          "Tumba de Humayún por la tarde",
          "Qawwali en Nizamuddin, si es jueves"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Vieja Delhi, Fuerte Rojo y Jama Masjid, luego la Tumba de Humayún y Nizamuddin",
          "Día 2: Qutb Minar a la hora de apertura y Mehrauli",
          "Lodhi Gardens y Gurudwara Bangla Sahib",
          "India Gate al atardecer, o por la noche el tren nocturno a Benarés, como hicimos nosotros"
        ]
      }
    ],
    zone: [
      {
        nome: "Connaught Place y Karol Bagh",
        perChi: "quien quiere comodidad y metro",
        testo: "En el centro de la red de metro, cerca de la estación de Nueva Delhi. Hoteles de gama media y restaurantes por todas partes; Karol Bagh es más ruidosa y tiene más tráfico."
      },
      {
        nome: "South Delhi (Hauz Khas, Defence Colony)",
        perChi: "quien busca calma",
        testo: "Barrios residenciales y verdes, con guesthouses cuidadas y locales. Quedan más lejos de la Vieja Delhi, y con tráfico el trayecto en coche es largo."
      },
      {
        nome: "Paharganj",
        perChi: "presupuesto ajustado",
        testo: "Frente a la estación de Nueva Delhi, comodísima para los trenes. Barata pero caótica, sucia y llena de gancheros: sirve para una noche antes de un tren."
      },
      {
        nome: "Aerocity",
        perChi: "vuelos al amanecer o de madrugada",
        testo: "Hoteles de cadena junto al aeropuerto, conectados por el metro Airport Express. Cómoda para llegar y salir, poco interesante para visitar la ciudad."
      }
    ],
    sapori: [
      {
        nome: "Parathe de Paranthe Wali Gali",
        testo: "Pan frito relleno de patata, coliflor o paneer, servido con chutney y curry de calabaza. Se come en el callejón del mismo nombre, en Chandni Chowk, en locales abiertos desde hace generaciones."
      },
      {
        nome: "Kebab y curry de la Jama Masjid",
        testo: "Alrededor de la mezquita, hacia Matia Mahal, están las cocinas mughlai: kebab, nihari de ternera guisada y korma. Karim's es la más conocida, abierta desde 1913."
      },
      {
        nome: "Chaat",
        testo: "Tentempiés callejeros agridulces: aloo tikki, papdi chaat, golgappa rellenos de agua especiada. En Chandni Chowk y en los mercados de barrio."
      },
      {
        nome: "Chole bhature",
        testo: "Garbanzos picantes con un pan frito que se hincha como un balón, el desayuno contundente de Delhi. En todos los locales punjabíes."
      },
      {
        nome: "Butter chicken",
        testo: "Pollo tandoori en salsa de tomate y mantequilla, hecho famoso después de 1947 por el restaurante Moti Mahal, abierto en Delhi por refugiados punjabíes. Lo tienen los restaurantes punjabíes de toda la ciudad."
      }
    ],
    attenzioni: [
      "Quien os para cerca de la estación de Nueva Delhi diciendo que la oficina de billetes para extranjeros está cerrada o se ha trasladado: el International Tourist Bureau está dentro de la estación, en la planta de arriba, y no cierra «por obras».",
      "Las «oficinas de turismo» privadas alrededor de Connaught Place venden paquetes caros haciéndose pasar por organismos públicos.",
      "En el aeropuerto y por la noche: solo taxis de prepago, Uber u Ola, o el traslado del hotel. No creáis a quien dice que el hotel está cerrado o lleno.",
      "No aceptéis comida ni bebida de desconocidos: el Foreign Office británico informa de robos tras bebidas drogadas.",
      "Entre noviembre y enero el aire suele ser pésimo: mirad el índice de calidad del aire y llevad una mascarilla FFP2."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi', 'india-sud-taj-mahal'],
    imageAlt: 'La Tumba de Humayún en Delhi, de arenisca roja y mármol blanco, en el centro de los jardines mogoles',
    immagine: '/images/india/delhi.jpg',
  },
  {
    slug: 'agra',
    paeseSlug: 'india',
    ordine: 2,
    nome: 'Agra y el Taj Mahal',
    tipologia: ['storia moghul', 'patrimonio UNESCO'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La ciudad del Taj Mahal, el mausoleo de mármol blanco que Shah Jahan hizo construir para su esposa Mumtaz Mahal, y del Fuerte de Agra, la ciudadela mogol de arenisca roja junto al río Yamuna.',
    percheAndarci:
      'Para ver el Taj Mahal al amanecer, cuando el mármol cambia de color y los jardines están casi vacíos. Agra en sí es una ciudad caótica: una noche basta, dos si se quiere verlo también al atardecer desde Mehtab Bagh.',
    cosaVedere: [
      'El Taj Mahal a la apertura de las puertas, con el interior del mausoleo',
      'El Fuerte de Agra, desde donde Shah Jahan prisionero miraba el Taj',
      'El Itimad-ud-Daulah, el «pequeño Taj» incrustado de piedras duras',
      'El jardín de Mehtab Bagh, en la orilla opuesta del río, para el atardecer',
      'Fatehpur Sikri, la capital abandonada de Akbar, a una hora en coche',
    ],
    cosaFare: [
      'Entrar por la puerta este al amanecer con la entrada comprada en línea',
      'Mirar el Taj al atardecer desde Mehtab Bagh o desde una terraza de Taj Ganj',
    ],
    doveDormire: 'Taj Ganj y Fatehabad Road, a distancia de paseo de la puerta este del Taj.',
    doveMangiare: 'Cocina mughlai (biryani, korma, kebab) y el petha, el dulce de calabaza confitada de la ciudad.',
    comeArrivare:
      'Desde Delhi en tren, con el Gatimaan Express en unas 2 horas (no circula los viernes; horarios en IRCTC), o en coche por la autopista Yamuna Expressway (3-4 horas).',
    comeSpostarsi: 'Tuk-tuk eléctricos cerca del Taj (los coches de gasolina no pueden acercarse), coche con conductor para Fatehpur Sikri.',
    periodoMigliore: 'octubre-marzo; entre diciembre y enero la niebla puede cubrir el Taj al amanecer durante un par de horas.',
    costi:
      'Taj Mahal unas 1.100 rupias para los extranjeros, más 200 por el interior del mausoleo; Fuerte de Agra unas 650; Fatehpur Sikri unas 600 (orientativo, octubre de 2026). Entrada gratuita por debajo de los 15 años.',
    erroriDaEvitare: [
      'Llegar en viernes: el Taj Mahal está cerrado',
      'Llevar comida, trípodes o drones, que no entran, y bolsos grandes, que alargan los controles',
      'Fiarse de los guías que se ofrecen en las puertas sin credencial',
    ],
    luoghi: [
      {
        nome: "Taj Mahal",
        testo: "El mausoleo de mármol blanco que Shah Jahan mandó construir para su esposa Mumtaz Mahal, muerta en 1631. La simetría es total: jardín, estanques, mezquita y casa de huéspedes se reflejan a los lados. De cerca, el mármol lleva incrustaciones de piedras duras.",
        come: "Se llega en tuk-tuk eléctrico o en carrito de golf desde los aparcamientos, porque los coches no pueden acercarse. Dos entradas principales, este y oeste; entrada online en el portal oficial y controles de seguridad en el acceso. Los guías autorizados llevan acreditación.",
        quando: "Desde media hora antes del amanecer hasta media hora antes del atardecer. Cerrado los viernes. Algunas noches en torno a la luna llena hay visita nocturna, en grupos pequeños y con reserva: fechas y normas en la web oficial.",
        tempo: "2-3 horas",
        costo: "1.100 rupias para los extranjeros, más 200 para el interior del mausoleo; gratis para menores de 15 años (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Nosotros lo vimos dos veces, al atardecer y al amanecer del día siguiente, y cada entrada necesita su billete. En los controles hay colas: llevad lo mínimo imprescindible y, si podéis, nada de mochilas, para que todo vaya más rápido."
      },
      {
        nome: "Fuerte de Agra",
        testo: "La ciudadela de arenisca roja de Akbar, ampliada después con los pabellones de mármol de Shah Jahan, que pasó allí sus últimos años prisionero de su hijo. Desde el Musamman Burj se ve el Taj a lo largo del río. Es patrimonio de la UNESCO.",
        come: "Entrada por la Amar Singh Gate, a 2,5 kilómetros del Taj, en tuk-tuk. Un guía autorizado ayuda a entender quién construyó qué.",
        quando: "Todos los días del amanecer al atardecer. Bien por la mañana o a primera hora de la tarde, antes del Taj.",
        tempo: "2 horas",
        costo: "650 rupias para los extranjeros, 600 el viernes (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "El viernes, con el Taj cerrado, es el día ideal para el fuerte: cuesta un poco menos."
      },
      {
        nome: "Itimad-ud-Daulah",
        testo: "La tumba que Nur Jahan mandó construir para su padre entre 1622 y 1628, en la orilla opuesta del Yamuna. En mármol blanco con incrustaciones de piedras duras, marca el paso de las tumbas mogolas de arenisca roja al mármol del Taj: por eso la llaman el «pequeño Taj».",
        come: "En tuk-tuk desde el Fuerte cruzando el puente, unos 20 minutos. Se visita por libre.",
        quando: "Abierto también el viernes, con tarifa reducida; horarios en la web oficial. Poca gente a cualquier hora.",
        tempo: "45 minutos",
        costo: "310 rupias para los extranjeros, 300 el viernes (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Mirar de cerca las incrustaciones: es el taller donde se ensayaron las decoraciones del Taj."
      },
      {
        nome: "Mehtab Bagh",
        testo: "El jardín mogol de la orilla norte del Yamuna, alineado exactamente con el Taj. Desde aquí se ve el mausoleo de frente, al otro lado del río, sin multitudes.",
        come: "En tuk-tuk desde Itimad-ud-Daulah, 15 minutos. El mirador sobre el río está al fondo del jardín.",
        quando: "Al atardecer, y también el viernes, cuando el Taj está cerrado.",
        tempo: "1 hora",
        costo: "300 rupias para los extranjeros (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Si vuestro día en Agra cae en viernes, el Taj se mira desde aquí."
      },
      {
        nome: "Fatehpur Sikri",
        testo: "La capital que Akbar construyó entre 1571 y 1585 y abandonó poco después. Palacios, patios y la gran mezquita con la Buland Darwaza se han conservado casi intactos.",
        come: "A unos 37 kilómetros, una hora en coche, en la carretera hacia Jaipur o Ranthambore. El complejo real tiene entrada de pago; en la mezquita se entra sin zapatos.",
        quando: "Abierto también el viernes, con tarifa reducida; horarios en la web oficial. Por la mañana, antes de que el patio de arenisca se caliente.",
        tempo: "2 horas",
        costo: "610 rupias para los extranjeros, 600 el viernes (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "En el patio de la mezquita se acercan vendedores y falsos guías: decid que no enseguida y seguid adelante."
      },
      {
        nome: "Tumba de Akbar en Sikandra",
        testo: "El mausoleo del emperador Akbar, construido por Jahangir entre 1605 y 1613 a unos 8 kilómetros del centro, con una puerta monumental con incrustaciones de mármol y pizarra y un gran jardín alrededor.",
        come: "En coche o tuk-tuk hacia el norte, en la carretera a Delhi. Se visita por libre.",
        quando: "Abierta también el viernes, con tarifa reducida; horarios en la web oficial.",
        tempo: "1 hora",
        costo: "310 rupias para los extranjeros, 300 el viernes (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Una parada cómoda si llegáis de Delhi en coche, antes de entrar en la ciudad."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Fuerte de Agra por la mañana",
          "Itimad-ud-Daulah",
          "Comida y descanso en el hotel en Taj Ganj",
          "Taj Mahal a última hora de la tarde, hasta el cierre"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Fuerte de Agra, Itimad-ud-Daulah y Taj Mahal al atardecer",
          "Día 2: Taj Mahal al amanecer, como hicimos nosotros",
          "Desayuno y salida con parada en Fatehpur Sikri",
          "Si uno de los dos días es viernes: Mehtab Bagh en lugar del Taj"
        ]
      }
    ],
    zone: [
      {
        nome: "Taj Ganj",
        perChi: "quien quiere ir al Taj a pie",
        testo: "Los callejones al sur del Taj, a 5-10 minutos de las puertas: guesthouses baratas y terrazas con vistas a la cúpula. Ruidoso, estrecho y lleno de gancheros."
      },
      {
        nome: "Fatehabad Road",
        perChi: "gama media y alta",
        testo: "La avenida de los hoteles de cadena y de lujo, a 1-2 kilómetros de la entrada este. Más tranquila y ordenada, pero hace falta un tuk-tuk para todo."
      }
    ],
    sapori: [
      {
        nome: "Petha",
        testo: "El dulce de Agra: dados de calabaza confitada, al natural, con azafrán o con coco. Se compra en las pastelerías históricas, como Panchhi Petha."
      },
      {
        nome: "Bedai y jalebi",
        testo: "El desayuno de Agra: pan frito relleno de lentejas con curry de patata y, después, las espirales fritas en almíbar. En los locales de la ciudad vieja, por la mañana."
      },
      {
        nome: "Cocina mughlai",
        testo: "Biryani, korma, kebab y pan naan del horno tandoor, la cocina de la corte mogol. En los restaurantes de Fatehabad Road y Taj Ganj."
      },
      {
        nome: "Dalmoth",
        testo: "Una mezcla salada y crujiente de lentejas fritas y especias, para picar con el chai. Se vende a granel junto al petha."
      }
    ],
    attenzioni: [
      "El Taj Mahal cierra los viernes: mirad el calendario antes de reservar trenes y hoteles.",
      "Quien se ofrece como guía en las puertas sin acreditación oficial, o vende entradas fuera de las taquillas.",
      "Las tiendas de mármol con incrustaciones a las que os lleva el conductor o el tuk-tuk le pagan comisión: los precios suben en consecuencia.",
      "La comida, los drones y los trípodes sin permiso no entran en el Taj; los bolsos grandes y los libros alargan los controles.",
      "Entre diciembre y enero la niebla puede tapar el Taj al amanecer durante un par de horas."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi', 'india-sud-taj-mahal'],
    imageAlt: 'El Taj Mahal simétrico al amanecer, con el estanque de agua y los cipreses del jardín, Agra',
    immagine: '/images/india/agra-taj-mahal-alba-riccardo.jpg',
  },
  {
    slug: 'jaipur',
    paeseSlug: 'india',
    ordine: 3,
    nome: 'Jaipur',
    tipologia: ['città', 'forti e palazzi', 'bazar'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital de Rajastán, la «ciudad rosa» fundada en el siglo XVIII por el marajá Jai Singh II con un plano en cuadrícula, murallas color terracota, bazares y algunos de los palacios más fotografiados de la India.',
    percheAndarci:
      'Concentra en dos días el Fuerte de Amber, el Hawa Mahal, el City Palace y el observatorio del Jantar Mantar, además de los mejores mercados de Rajastán para tejidos estampados a mano con bloques, joyas y zapatos bordados.',
    cosaVedere: [
      'El Fuerte de Amber, con la Sala de los espejos, a primera hora de la mañana',
      'El Hawa Mahal, el Palacio de los vientos',
      'El City Palace y el Jantar Mantar',
      'El Jal Mahal en el lago Man Sagar y el pozo escalonado de Panna Meena',
      'El Fuerte de Nahargarh al atardecer',
    ],
    cosaFare: [
      'Subir a Amber a pie por la rampa',
      'Recorrer Johari Bazar y Bapu Bazar',
      'Un taller de estampado de tejidos con bloques',
      'Un thali rajastaní y un lassi en vasito de barro',
    ],
    doveDormire: 'Haveli y hoteles heritage en la ciudad vieja o en Bani Park.',
    doveMangiare: 'Baati churma, laal maas, ker sangri, kachori por la mañana y lassi.',
    comeArrivare: 'Desde Agra en coche en 5-6 horas con Fatehpur Sikri; desde Delhi en tren (unas 4-5 horas) o en avión.',
    comeSpostarsi: 'Tuk-tuk, Uber y Ola, conductor para Amber y Nahargarh.',
    periodoMigliore: 'octubre-marzo.',
    costi:
      'Desde el 1 de enero de 2026 (revisión de las tarifas estatales) los extranjeros pagan 1.000 rupias en Amber y 600 en Hawa Mahal, Jantar Mantar, Nahargarh y Albert Hall; la entrada combinada vale 10 días para todos los monumentos y museos estatales del Rajastán (5.500 rupias según la prensa local). El City Palace, privado, tiene tarifas propias en su web oficial.',
    erroriDaEvitare: [
      'Creer la propuesta de comprar gemas para revender en Italia',
      'Subir a Amber a lomos de elefante',
      'Visitar Amber a mediodía, con el calor y los grupos',
    ],
    luoghi: [
      {
        nome: "Fuerte de Amber",
        testo: "El palacio-fortaleza de los Kachwaha, en las colinas a 11 kilómetros de la ciudad, con las murallas que bajan hasta el lago Maota. Dentro hay patios y salas, entre ellas el Sheesh Mahal, la sala de los espejos. Es patrimonio de la UNESCO dentro de los fuertes de colina del Rajastán.",
        come: "Con el conductor o en Uber hasta el pie del fuerte y luego la rampa a pie, o en jeep. Un guía autorizado o la audioguía ayudan a orientarse entre los patios.",
        quando: "A la hora de apertura, antes de los autocares y del calor.",
        tempo: "2-3 horas",
        costo: "1.000 rupias para los extranjeros según la revisión estatal vigente desde el 1 de enero de 2026",
        consiglio: "Dentro del fuerte está el restaurante 1135 AD: nosotros volvimos para cenar, muy bueno y en un sitio con muchísimo encanto. Al final nos invitaron a ver la sala privada de los maharajás, en el último piso, donde todavía cenan y reciben a la gente importante."
      },
      {
        nome: "Hawa Mahal",
        testo: "El Palacio de los vientos, construido en 1799: una fachada rosa de cinco pisos con 953 ventanitas de celosía, desde las que las damas de la corte miraban la calle sin ser vistas. Detrás, la fachada es una pantalla muy fina.",
        come: "En la ciudad vieja, cerca de Badi Chaupar. La entrada está del lado del City Palace; la fachada se mira desde la calle o desde las terrazas de los cafés de enfrente.",
        quando: "A primera hora: la fachada mira al este y recibe el primer sol.",
        tempo: "45 minutos",
        costo: "600 rupias para los extranjeros (tarifa estatal desde el 1 de enero de 2026)",
        consiglio: "La mejor foto se hace desde una terraza al otro lado de la calle, con un chai, antes de las 9."
      },
      {
        nome: "City Palace",
        testo: "La residencia de la familia real de Jaipur, todavía habitada en parte: patios, puertas pintadas con pavos reales, armerías y colecciones de tejidos. El Chandra Mahal, donde vive la familia, solo se visita con el Royal Tour.",
        come: "En pleno centro de la ciudad vieja, al lado del Jantar Mantar. El Royal Tour, con guía y refresco, solo se compra en taquilla.",
        quando: "Todos los días de 9.30 a 18.30; cierra solo el segundo día de Holi. La galería de tejidos del Mubarak Mahal está cerrada por restauración desde marzo de 2026.",
        tempo: "1 hora y media-2 horas",
        costo: "Royal Tour 4.000 rupias por persona; las tarifas del museo en la web oficial (citypalace.org, 2026)",
        url: "https://citypalace.org/visit",
        consiglio: "Combinarlo con el Jantar Mantar, que está a dos pasos: los dos caben en la misma tarde."
      },
      {
        nome: "Jantar Mantar",
        testo: "El observatorio astronómico que Jai Singh II construyó en el siglo XVIII, con instrumentos de piedra gigantes. El reloj de sol del Samrat Yantra mide unos 27 metros y, según se dice, marca la hora con una precisión de unos dos segundos. Es patrimonio de la UNESCO.",
        come: "Al lado del City Palace. Sin explicaciones los instrumentos parecen esculturas: mejor con guía o audioguía.",
        quando: "De día y con sol, que hace falta para ver cómo funcionan los relojes solares.",
        tempo: "1 hora",
        costo: "600 rupias para los extranjeros (tarifa estatal desde el 1 de enero de 2026)",
        consiglio: "Ir a mediodía: es el único sitio de Jaipur donde el sol alto ayuda."
      },
      {
        nome: "Jal Mahal y Panna Meena ka Kund",
        testo: "El Jal Mahal es un palacio que parece flotar en el lago Man Sagar, en la carretera de Amber; no se visita, se mira desde el paseo. Cerca del fuerte está Panna Meena ka Kund, un pozo escalonado del siglo XVI con escaleras cruzadas.",
        come: "Paradas en la carretera de Amber, con el conductor. El pozo está a 10 minutos a pie del aparcamiento del fuerte.",
        quando: "El pozo por la mañana, con la luz rasante sobre las escaleras. El Jal Mahal también al atardecer.",
        tempo: "1 hora en total",
        costo: "gratis",
        consiglio: "Ya no se puede bajar por los escalones del pozo: las fotos se hacen desde el borde."
      },
      {
        nome: "Fuerte de Nahargarh",
        testo: "El fuerte en la cresta sobre la ciudad, construido en 1734. Desde las murallas se ve todo Jaipur, rosa y polvoriento, que se enciende al atardecer.",
        come: "En coche con el conductor por la carretera de la cresta. Dentro está el palacio Madhavendra, con los aposentos de las reinas.",
        quando: "Última hora de la tarde, hasta el atardecer.",
        tempo: "1 hora y media",
        costo: "600 rupias para los extranjeros (tarifa estatal desde el 1 de enero de 2026)",
        consiglio: "No bajar a pie de noche: se vuelve en coche."
      },
      {
        nome: "Albert Hall Museum",
        testo: "El museo más antiguo del Rajastán, en un edificio indo-sarraceno de 1887 en el centro de los jardines Ram Niwas. Reúne armas, alfombras, miniaturas y una momia egipcia.",
        come: "Justo fuera de la ciudad vieja, en tuk-tuk. El recorrido es corto y está bien señalizado.",
        quando: "De día para el museo; por la noche el edificio está iluminado.",
        tempo: "1 hora",
        consiglio: "Entrada 600 rupias para los extranjeros. La entrada combinada estatal vale 10 días en todo el Rajastán: solo compensa si se visitan muchos monumentos estatales, también fuera de Jaipur."
      },
      {
        nome: "Los bazares de la ciudad vieja",
        testo: "Jaipur es la mejor ciudad del Rajastán para comprar: Johari Bazar para joyas y telas, Bapu Bazar para los zapatos bordados (jutti) y las telas estampadas con bloques, Tripolia para las pulseras de laca.",
        come: "A pie bajo los soportales de la ciudad vieja. Para ver el estampado con bloques hay que ir a los talleres de Sanganer o Bagru, fuera de la ciudad.",
        quando: "A media mañana, cuando abren las tiendas y antes del calor.",
        tempo: "medio día",
        consiglio: "Regatear con calma y no comprar nunca piedras «para revender en Europa»."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Fuerte de Amber a la hora de apertura",
          "Panna Meena ka Kund y Jal Mahal",
          "City Palace y Jantar Mantar por la tarde",
          "Hawa Mahal",
          "Atardecer desde Nahargarh"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Hawa Mahal al amanecer, Amber, Panna Meena y Jal Mahal, cena en el 1135 AD dentro del fuerte",
          "Día 2: City Palace y Jantar Mantar",
          "Bazares de la ciudad vieja y un taller de estampado con bloques",
          "Albert Hall y atardecer desde Nahargarh, cena en el Jamavar"
        ]
      }
    ],
    zone: [
      {
        nome: "Ciudad vieja (Pink City)",
        perChi: "quien quiere los monumentos a pie",
        testo: "Havelis convertidas en hoteles dentro de las murallas, a pocos minutos del Hawa Mahal y del City Palace. Ambiente único, pero tráfico, bocinas y calles llenas hasta la noche."
      },
      {
        nome: "Bani Park y Civil Lines",
        perChi: "calma y hoteles heritage",
        testo: "Barrios residenciales justo al oeste de las murallas, con muchos hoteles heritage y jardines. A la ciudad vieja se llega en 10-15 minutos de tuk-tuk."
      },
      {
        nome: "C-Scheme y MI Road",
        perChi: "restaurantes y comodidad",
        testo: "El centro moderno, con cafés, restaurantes y hoteles de cadena. Cómodo y limpio, con menos carácter."
      }
    ],
    sapori: [
      {
        nome: "Las cenas de maharajá",
        testo: "Nosotros en Jaipur hicimos cenas de maharajá. En el Jamavar, el restaurante indio del The Leela Palace: caro y con reserva con depósito, pero lo vale todo. Y en el 1135 AD, dentro del Fuerte de Amber: muy bueno y en un sitio con muchísimo encanto."
      },
      {
        nome: "La comida callejera",
        testo: "Durante el día siempre comimos en la calle y nunca tuvimos problemas de estómago, qué suerte. La regla es comida cocinada delante de vosotros y servida hirviendo, en puestos llenos de gente del lugar."
      },
      {
        nome: "Pyaaz kachori",
        testo: "Buñuelo relleno de cebolla especiada, el desayuno de Jaipur. Los locales históricos, como Rawat Mishthan Bhandar, lo fríen desde primera hora."
      },
      {
        nome: "Dal baati churma",
        testo: "El plato del Rajastán: bolitas de pan cocidas en las brasas y bañadas en ghee, con lentejas y una migaja dulce de trigo. En los restaurantes de cocina rajastaní y en los thali."
      },
      {
        nome: "Laal maas",
        testo: "Curry de cordero rojo y picante, hecho con las guindillas de Mathania. En los restaurantes de cocina rajput."
      },
      {
        nome: "Lassi en vasito de barro",
        testo: "Yogur dulce y espeso servido en el kulhad, el vaso de barro que se tira después. El más famoso es el de los Lassiwala de MI Road."
      }
    ],
    attenzioni: [
      "La estafa de las gemas: un comerciante amable os propone llevar piedras a Europa para revenderlas con una gran ganancia. Las piedras valen poco y el dinero no vuelve.",
      "Los tuk-tuk y los conductores llevan a las tiendas donde cobran comisión: decid claramente adónde queréis ir.",
      "No subáis a Amber a lomos de elefante: las asociaciones de bienestar animal lo desaconsejan.",
      "Elegid bien al conductor para el Rajastán: el nuestro era un desastre y no lo recomiendo. Suelen parar en restaurantes «para turistas» donde ellos comen gratis: se puede pedir un dhaba normal.",
      "Los precios de los monumentos estatales cambiaron el 1 de enero de 2026: comprobad las tarifas en el portal oficial antes de salir."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: 'La fachada rosa del Hawa Mahal de Jaipur, con las ventanas enrejadas y las contraventanas verdes',
    immagine: '/images/india/jaipur-hawa-mahal-facciata-riccardo.jpg',
  },
  {
    slug: 'ranthambore',
    paeseSlug: 'india',
    ordine: 4,
    nome: "Ranthambore",
    tipologia: ["parque nacional", "safari", "tigres"],
    giorniConsigliati: "2 noches, al menos dos safaris",
    visitataPersonalmente: true,
    introduzione:
      "Uno de los parques de tigres más famosos de la India, entre Agra y Jaipur: bosque seco, lagos y ruinas, con un fuerte medieval sobre un peñasco dentro del parque. Solo se visita con los safaris oficiales, en jeep o en camión descubierto.",
    percheAndarci:
      "Para ver tigres en libertad a pocas horas de Jaipur. Además de tigres hay leopardos, osos bezudos, cocodrilos en los lagos y muchos ciervos. El Fuerte de Ranthambore es patrimonio de la UNESCO junto con los demás fuertes de colina de Rajastán.",
    cosaVedere: [
      "El parque en los safaris de la mañana y de la tarde",
      "El Fuerte de Ranthambore y el templo de Ganesh en lo alto del peñasco",
    ],
    cosaFare: [
      "Al menos dos safaris, porque las zonas se asignan al azar",
      "Reservar la gypsy, el jeep de 6 plazas, en lugar del canter de unas veinte",
    ],
    doveDormire: "Lodges y hoteles en la carretera del parque en Sawai Madhopur, muchos con recogida para los safaris.",
    comeArrivare: "Unas 5-6 horas en coche desde Agra, 3,5-4 desde Jaipur. La estación es Sawai Madhopur, en la línea Delhi-Bombay.",
    comeSpostarsi: "En los vehículos del safari (gypsy o canter), que te recogen en el hotel.",
    periodoMigliore:
      "octubre-junio; las zonas centrales (1-5) cierran con el monzón, de julio a septiembre, mientras algunas zonas exteriores siguen abiertas. De marzo a junio hace calor, pero los animales se ven más alrededor del agua.",
    erroriDaEvitare: [
      "Reservar tarde: las gypsy se agotan primero",
      "Hacer un solo safari: la zona asignada puede no ser la buena",
      "Ropa de colores vivos y voces altas durante el safari",
    ],
    luoghi: [
      {
        nome: "El parque en safari",
        testo: "Bosque seco, lagos y ruinas donde viven tigres, leopardos, osos bezudos, cocodrilos y muchos ciervos sambar. El parque está dividido en zonas y cada safari recorre solo una, asignada por el Forest Department.",
        come: "Solo con los safaris oficiales, en gypsy (jeep de 6 plazas) o canter (camión descubierto de unas veinte), que recogen en el hotel. Se reserva con el pasaporte en el portal del Forest Department o a través del hotel.",
        quando: "Dos turnos al día, a primera hora de la mañana y por la tarde, con horarios que cambian según la temporada. Las zonas 1-5 cierran de julio a septiembre. De marzo a junio hace calor, pero los animales se ven cerca del agua.",
        tempo: "unas horas por safari, según la temporada; al menos dos safaris",
        consiglio: "Nosotros nos movimos tarde e hicimos el canter, pero tuvimos suerte igualmente: 3 tigres en un solo safari de mañana, y también dos osos pequeños que corrían. Si queréis la gypsy, reservad con mucha antelación, y haced siempre al menos dos safaris: la zona no se elige, se asigna al azar."
      },
      {
        nome: "Fuerte de Ranthambore",
        testo: "Un fuerte medieval, fundado quizá hacia el siglo X, sobre un peñasco dentro del parque, con murallas, cisternas y el templo de Trinetra Ganesh, lugar de peregrinación. Es patrimonio de la UNESCO dentro de los fuertes de colina del Rajastán.",
        come: "Se sube desde la puerta del parque en coche o tuk-tuk y luego a pie por las escalinatas, como los peregrinos que van al templo de Ganesh.",
        quando: "Por la mañana, entre un safari y otro. El miércoles el templo de Ganesh atrae a miles de fieles.",
        tempo: "2 horas",
        consiglio: "A lo largo de las murallas se ven a menudo langures y a veces animales del parque bajo el peñasco."
      },
      {
        nome: "Los lagos de Padam Talao y Rajbagh",
        testo: "En las zonas centrales del parque están los lagos más fotografiados, con el pabellón de caza de Jogi Mahal y las ruinas de Rajbagh sobre el agua. Cocodrilos, aves acuáticas y ciervos bebiendo.",
        come: "Solo se ven si a vuestro safari le toca una de las zonas centrales.",
        quando: "En la estación seca, cuando los animales se concentran alrededor del agua.",
        tempo: "dentro de un safari",
        consiglio: "Preguntar en el hotel qué zonas están dando buenos avistamientos: no se elige, pero ayuda a saber qué esperar."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Safari de mañana",
          "Fuerte de Ranthambore y el templo de Ganesh",
          "Safari de tarde"
        ]
      },
      {
        titolo: "2 noches",
        tappe: [
          "Día 1: llegada, safari de tarde",
          "Día 2: safari de mañana, fuerte, safari de tarde",
          "Día 3: un último safari al amanecer y salida hacia Jaipur"
        ]
      }
    ],
    zone: [
      {
        nome: "Ranthambore Road",
        perChi: "quien viene por los safaris",
        testo: "La carretera entre Sawai Madhopur y la puerta del parque, con lodges y resorts de todas las gamas. Muchos organizan la recogida para los safaris; se duerme tranquilo, pero alrededor no hay nada."
      },
      {
        nome: "Sawai Madhopur",
        perChi: "quien llega en tren con poco presupuesto",
        testo: "El pueblo junto a la estación, con hoteles sencillos. Cómodo para los trenes, menos para los safaris: los vehículos pasan igualmente, pero antes."
      }
    ],
    attenzioni: [
      "Muchas webs con nombres parecidos al oficial revenden los safaris más caros: reservad en el portal del Forest Department o a través de un hotel serio.",
      "Los tigres no están garantizados: dos o tres safaris aumentan mucho las probabilidades.",
      "Entre diciembre y febrero las mañanas en los vehículos descubiertos son frías: hacen falta capas, gorro y guantes.",
      "Los colores llamativos, la voz alta y la comida en los vehículos están prohibidos o mal vistos por los guardas."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: "Parque nacional de Ranthambore",
  },
  {
    slug: 'pushkar',
    paeseSlug: 'india',
    ordine: 4,
    nome: 'Pushkar',
    tipologia: ['città santa', 'lago', 'atmosfera'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione:
      'Una pequeña ciudad santa alrededor de un lago con unos cincuenta ghats, donde se encuentra uno de los poquísimos templos dedicados a Brahma en la India. Vegetariana por tradición: nada de carne, nada de huevos y nada de alcohol.',
    percheAndarci:
      'Para ir más despacio entre Jaipur y Jodhpur: los ghats al atardecer, los cantos de la noche, los callejones de los bazares. Hacia la luna llena de Kartik (octubre-noviembre) acoge la feria de camellos.',
    cosaVedere: ['Los ghats del lago al atardecer', 'El templo de Brahma', 'El templo de Savitri en la colina, al que se llega a pie o en teleférico'],
    cosaFare: ['Subir al templo de Savitri para el amanecer', 'Asistir al aarti de la noche en los ghats', 'Visitar la feria de camellos, si las fechas coinciden'],
    doveDormire: 'Guesthouses y pequeños hoteles con terraza sobre el lago; durante la feria los precios se multiplican.',
    doveMangiare: 'Thali vegetarianos, malpua (buñuelos dulces) y café en las terrazas.',
    comeArrivare: 'Desde Jaipur unas 3 horas en coche, o tren hasta Ajmer y 30 minutos de carretera.',
    comeSpostarsi: 'A pie.',
    periodoMigliore: 'octubre-marzo; feria de camellos hacia la luna llena de Kartik.',
    erroriDaEvitare: [
      'Aceptar la flor «de regalo» para la puja en los ghats: a continuación piden una donación',
      'Fotografiar a los bañistas en los ghats sin pedir permiso',
    ],
    luoghi: [
      {
        nome: "El lago sagrado y los ghats",
        testo: "Un pequeño lago rodeado de unos 52 ghats y de casas blancas, donde según la leyenda cayó una flor de loto de Brahma. Al atardecer, campanas y cantos llenan el agua.",
        come: "A pie desde el bazar. Sin zapatos en los ghats; fotografiar a quien se baña sin preguntar está mal visto.",
        quando: "Al amanecer y al atardecer, con el aarti de la noche en los ghats principales, como Varaha y Gau Ghat.",
        tempo: "2 horas",
        costo: "gratis",
        consiglio: "Sentarse en una terraza sobre el lago al atardecer en lugar de en los escalones: se ve la ceremonia sin que nadie se acerque."
      },
      {
        nome: "Templo de Brahma",
        testo: "Uno de los poquísimos templos de la India dedicados a Brahma, el dios creador. El edificio actual es del siglo XIV, con la aguja roja y el suelo de monedas de plata dejadas por los fieles.",
        come: "En el bazar, a pie. Sin zapatos para entrar.",
        quando: "A primera hora o a última de la tarde: a mediodía cierra, normalmente de 13.30 a 15.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Quien os ofrece acompañaros «para la bendición» os pedirá una ofrenda: se entra perfectamente por libre."
      },
      {
        nome: "Templo de Savitri",
        testo: "El templo de la esposa de Brahma, en lo alto de la colina de Ratnagiri, detrás del templo de Brahma. Desde arriba se ven Pushkar, el lago y el desierto.",
        come: "A pie por una larga escalinata, o en teleférico (horarios y precios en el lugar).",
        quando: "Al amanecer, saliendo de noche con una linterna, o al atardecer.",
        tempo: "2 horas con la subida",
        consiglio: "Llevar agua: en la escalinata no hay nada."
      },
      {
        nome: "La feria de los camellos",
        testo: "Una de las ferias de camellos, caballos y ganado más grandes de la India: miles de camellos, comerciantes, competiciones y peregrinos. Se celebra los días anteriores a la luna llena de Kartik y termina ese día: el 24 de noviembre en 2026.",
        come: "En el recinto ferial, a pie desde el centro. Las fechas exactas las publica el gobierno del Rajastán.",
        quando: "Los primeros días, cuando se comercia con los camellos; los cinco últimos, alrededor de la luna llena, son los de más peregrinos.",
        tempo: "medio día",
        consiglio: "Reservar el alojamiento con meses de antelación: esos días los precios se multiplican."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Llegada desde Jaipur y atardecer en los ghats",
          "Aarti de la noche",
          "Amanecer en el templo de Savitri",
          "Templo de Brahma y bazar, luego salida hacia Jodhpur"
        ]
      }
    ],
    zone: [
      {
        nome: "Alrededor del lago",
        perChi: "quien quiere los ghats a pie",
        testo: "Guesthouses y pequeños hoteles con terraza sobre el agua, en el centro peatonal. Campanas y altavoces de los templos desde el amanecer."
      },
      {
        nome: "Fuera del pueblo",
        perChi: "calma y piscina",
        testo: "Resorts y campamentos de tiendas entre los campos, a 2-5 kilómetros. Silenciosos, hace falta un tuk-tuk para ir al lago."
      }
    ],
    sapori: [
      {
        nome: "Malpua",
        testo: "Tortitas dulces fritas en ghee y pasadas por almíbar, la especialidad de los locales del bazar."
      },
      {
        nome: "Thali vegetariano",
        testo: "Pushkar es vegetariana por tradición: nada de carne, huevos ni alcohol. El thali con dal, verduras, chapati y arroz es la comida de todos."
      },
      {
        nome: "Gulkand y productos de rosa",
        testo: "Alrededor de Pushkar se cultivan rosas: en las tiendas del bazar hay mermelada de pétalos (gulkand), sirope y agua de rosas."
      },
      {
        nome: "Falafel y cocina de viajeros",
        testo: "Décadas de viajeros israelíes han dejado falafel y hummus en muchos cafés del bazar, junto a la cocina india."
      }
    ],
    attenzioni: [
      "La flor «de regalo» en los ghats: después viene una puja y la petición de un donativo para la familia, a menudo muy alto.",
      "No fotografiéis a quien se baña ni las ceremonias sin preguntar.",
      "El bhang lassi, con cannabis, se encuentra con facilidad, pero tiene efectos fuertes e impredecibles.",
      "Durante la feria de los camellos, cuidado con los carteristas entre la multitud."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: 'Los ghats y las casas blancas asomados al lago sagrado de Pushkar, reflejados en el agua con la luz de la tarde',
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-10-pushkar.jpg',
  },
  {
    slug: 'jodhpur',
    paeseSlug: 'india',
    ordine: 5,
    nome: 'Jodhpur',
    tipologia: ['città', 'forti e palazzi'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'La ciudad azul, en el borde del desierto del Thar, dominada por el Fuerte de Mehrangarh sobre un espolón de roca que se alza unos 120 metros sobre la llanura.',
    percheAndarci:
      'Mehrangarh es el fuerte más impresionante de Rajastán y la ciudad vieja, con las casas pintadas de azul, es más tranquila y vertical que Jaipur.',
    cosaVedere: [
      'El Fuerte de Mehrangarh y su museo',
      'El cenotafio de Jaswant Thada',
      'Los callejones azules de Navchokiya y Brahmpuri',
      'El pozo escalonado de Toorji ka Jhalra',
      'El Ghanta Ghar y el mercado de Sardar',
    ],
    cosaFare: ['La visita del fuerte con la audioguía incluida', 'El atardecer desde una terraza de la ciudad vieja', 'La tirolina sobre las murallas del fuerte'],
    doveDormire: 'Haveli con terraza bajo el fuerte, en la zona del Ghanta Ghar y de Navchokiya.',
    doveMangiare: 'Mirchi bada, pyaaz kachori y makhaniya lassi con azafrán.',
    comeArrivare: 'Desde Jaipur en tren o en coche: hay que contar medio día de viaje.',
    comeSpostarsi: 'A pie y en tuk-tuk; los coches no entran en los callejones.',
    periodoMigliore: 'octubre-marzo; noches frías en enero.',
    costi: 'Museo de Mehrangarh 800 rupias para los extranjeros, audioguía incluida; Jaswant Thada 100 rupias; Rao Jodha Park 100 rupias (web oficial, 2026).',
    erroriDaEvitare: ['Llegar con maletas pesadas a los callejones de escaleras', 'Visitar el fuerte en las horas centrales'],
    luoghi: [
      {
        nome: "Fuerte de Mehrangarh",
        testo: "El fuerte de los Rathore sobre un espolón de roca que domina la ciudad azul, empezado en 1459. Dentro está uno de los museos mejor cuidados de la India, con las galerías de palanquines, armas, howdahs y pinturas. Lo gestiona una fundación de la familia real.",
        come: "En tuk-tuk o a pie desde la ciudad vieja, por una cuesta empinada. En la entrada hay un ascensor para la parte alta (50 rupias por trayecto, 2026). El recorrido del museo está señalizado.",
        quando: "El museo abre todos los días de 9 a 17. A la hora de apertura, antes del calor y de los grupos.",
        tempo: "2-3 horas",
        url: "https://www.mehrangarh.org/visit/",
        costo: "800 rupias para los extranjeros, audioguía incluida (web oficial, 2026)",
        consiglio: "Coger la audioguía, incluida en la entrada de los extranjeros: cuenta el fuerte sala por sala y se recorre con calma sin guía."
      },
      {
        nome: "Jaswant Thada",
        testo: "El cenotafio de mármol blanco del maharajá Jaswant Singh II, encargado por su hijo Sardar Singh en 1899 y terminado en 1906, en una colina entre el fuerte y la ciudad. Las láminas de mármol son tan finas que al sol se encienden con una luz cálida.",
        come: "A poca distancia del fuerte, a pie o en tuk-tuk. Tiene entrada propia: 100 rupias para los extranjeros (web oficial, 2026).",
        quando: "Todos los días de 9 a 17. A última hora de la tarde, con la vista del fuerte.",
        tempo: "45 minutos",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "Combina con el Rao Jodha Desert Rock Park, que está al lado."
      },
      {
        nome: "Rao Jodha Desert Rock Park",
        testo: "Setenta hectáreas de terreno rocoso alrededor del fuerte, donde desde 2006 la fundación de Mehrangarh ha recuperado las plantas del desierto. Senderos cortos con vistas a las murallas.",
        come: "Entrada cerca del fuerte. Se camina solo o con un guía naturalista (200 rupias, web oficial 2026). Entrada 100 rupias.",
        quando: "De octubre a marzo de 8 a 17.30, de abril a septiembre de 7 a 18.30. A primera hora, por la luz y los pájaros.",
        tempo: "1-2 horas",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "Es el sitio más tranquilo de Jodhpur: perfecto para desconectar después del fuerte."
      },
      {
        nome: "La ciudad azul: Brahmpuri y Navchokiya",
        testo: "Los callejones bajo el fuerte, con las casas pintadas de añil. Sobre el porqué del azul circulan varias explicaciones, ninguna documentada. Escaleras, placitas, pequeños templos y niños jugando al críquet.",
        come: "A pie, perdiéndose. Los coches no entran; un tuk-tuk os deja al principio de los callejones.",
        quando: "A primera hora o a última de la tarde, con la luz suave sobre el azul.",
        tempo: "1-2 horas",
        costo: "gratis",
        consiglio: "Preguntar siempre antes de fotografiar a la gente en la puerta de su casa."
      },
      {
        nome: "Toorji ka Jhalra y el Ghanta Ghar",
        testo: "Un pozo escalonado de arenisca tallada, fechado normalmente hacia 1740 y restaurado varias veces, en la ciudad vieja bajo el fuerte. Alrededor del Ghanta Ghar está el mercado de Sardar, con especias, telas y menaje.",
        come: "A pie por la ciudad vieja.",
        quando: "El pozo por la mañana; el mercado desde media mañana hasta la noche.",
        tempo: "1-2 horas",
        costo: "gratis",
        consiglio: "Por la noche, con el pozo iluminado y el mercado abierto, es el mejor momento."
      },
      {
        nome: "Umaid Bhawan Palace",
        testo: "El palacio art déco terminado en 1943, hoy en parte hotel de lujo y en parte residencia de la familia real. Un ala es un pequeño museo sobre la historia de la familia en el siglo XX; delante, en el jardín, están los coches antiguos de los maharajás.",
        come: "Fuera de la ciudad vieja, en tuk-tuk. El museo tiene una entrada separada del hotel.",
        quando: "De día; encaja bien por la tarde.",
        tempo: "1 hora",
        consiglio: "Si vais justos de tiempo, se puede saltar: Mehrangarh y los callejones valen más."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mehrangarh a la hora de apertura",
          "Jaswant Thada y Rao Jodha Park",
          "Comida con mirchi bada en el Ghanta Ghar",
          "Callejones azules por la tarde",
          "Toorji ka Jhalra por la noche"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Mehrangarh, Jaswant Thada, Rao Jodha Park",
          "Día 2: callejones de Brahmpuri y Navchokiya por la mañana",
          "Umaid Bhawan por la tarde",
          "Mercado de Sardar y atardecer desde una terraza bajo el fuerte"
        ]
      }
    ],
    zone: [
      {
        nome: "Bajo el fuerte (Navchokiya, Brahmpuri)",
        perChi: "quien quiere terrazas con vistas",
        testo: "Havelis y guesthouses en los callejones azules, con terrazas frente al fuerte. Un ambiente precioso, pero escaleras empinadas y sin coche hasta la puerta."
      },
      {
        nome: "Ghanta Ghar",
        perChi: "quien quiere tenerlo todo a pie",
        testo: "Alrededor de la torre del reloj: mercado, restaurantes y tuk-tuk en la puerta. Ruidoso hasta tarde."
      },
      {
        nome: "Ratanada y la ciudad nueva",
        perChi: "hoteles heritage con jardín",
        testo: "Antiguas residencias nobles y hoteles con piscina fuera de la ciudad vieja. Tranquilos, siempre hace falta un tuk-tuk."
      }
    ],
    sapori: [
      {
        nome: "Mirchi bada",
        testo: "Una guindilla grande rellena de patata especiada, rebozada en harina de garbanzo y frita. Se come caliente en los puestos alrededor del Ghanta Ghar."
      },
      {
        nome: "Makhaniya lassi",
        testo: "Un lassi espesísimo con azafrán y cardamomo, casi para comer con cuchara. El más conocido es el de los locales históricos cerca de la torre del reloj."
      },
      {
        nome: "Pyaaz kachori",
        testo: "El buñuelo relleno de cebolla, aquí todavía más especiado que en Jaipur, con chutney de tamarindo."
      },
      {
        nome: "Mawa kachori",
        testo: "La versión dulce: rellena de leche reducida y frutos secos, pasada por almíbar. Un dulce de Jodhpur."
      }
    ],
    attenzioni: [
      "Los locales famosos tienen copias con el mismo nombre a pocos metros, como la omelette shop del Ghanta Ghar y las tiendas de especias: comprobad la dirección y el letrero.",
      "Los tuk-tuk que ofrecen el viaje gratis o casi regalado os llevan a tiendas con comisión.",
      "Los callejones de la ciudad vieja tienen escalones: las maletas de ruedas pesadas se convierten en un problema.",
      "Los monos alrededor de Jaswant Thada y de los templos cogen la comida de las manos."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: 'El Fuerte de Mehrangarh sobre su peña por encima de la ciudad vieja de Jodhpur',
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-11-jodhpur.jpg',
  },
  {
    slug: 'jaisalmer',
    paeseSlug: 'india',
    ordine: 6,
    nome: 'Jaisalmer y el desierto del Thar',
    tipologia: ['deserto', 'forti e palazzi'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      'La ciudad dorada, construida en arenisca amarilla en el desierto del Thar, no lejos de la frontera con Pakistán, con uno de los pocos fuertes todavía habitados del mundo.',
    percheAndarci:
      'Por el fuerte habitado, las haveli talladas como encajes y una noche entre las dunas, que es la experiencia de desierto más sencilla de organizar en la India.',
    cosaVedere: ['El Fuerte de Jaisalmer y sus templos jainistas', 'Las haveli de Patwon y Nathmal', 'El lago de Gadisar al amanecer', 'Las dunas de Sam o de Khuri'],
    cosaFare: ['Una noche en campamento en el desierto con paseo en camello al atardecer', 'El atardecer desde los baluartes del fuerte'],
    doveDormire: 'Hoteles en las haveli de la ciudad bajo el fuerte; campamentos en el desierto para una noche.',
    doveMangiare: 'Ker sangri, dal baati y los dulces de Jaisalmer.',
    comeArrivare: 'Desde Jodhpur en coche o en tren, medio día de viaje; el aeropuerto tiene vuelos desde Delhi, Mumbai y otras ciudades, algunos solo en ciertas temporadas.',
    comeSpostarsi: 'A pie en la ciudad, jeep para las dunas.',
    periodoMigliore: 'noviembre-febrero; desde abril el calor es extremo.',
    erroriDaEvitare: [
      'Elegir el campamento en el desierto más barato: los estándares de higiene y el trato a los camellos varían mucho',
      'Acercarse a las zonas fronterizas, sujetas a restricciones',
    ],
    luoghi: [
      {
        nome: "El Fuerte de Jaisalmer",
        testo: "El fuerte de arenisca amarilla de 1156, uno de los pocos del mundo que siguen habitados: dentro de las murallas viven unas 4.000 personas entre casas, tiendas, templos y hoteles. Es patrimonio de la UNESCO dentro de los fuertes de colina del Rajastán.",
        come: "Se entra a pie por la puerta principal y se pasea libremente por los callejones. De pago son el palacio del maharawal (Raj Mahal) y los templos jainistas.",
        quando: "Por la mañana para los templos jainistas, que normalmente reciben visitantes solo hasta mediodía. El atardecer desde los bastiones.",
        tempo: "medio día",
        consiglio: "Dormir fuera de las murallas y visitarlo de día: según el Archaeological Survey of India, el agua que gastan hoteles y restaurantes dentro de las murallas se filtra en los cimientos y los debilita."
      },
      {
        nome: "Las havelis de Patwon y de Nathmal",
        testo: "Palacios de mercaderes del siglo XIX con las fachadas talladas como encaje de piedra. La Patwon ki Haveli es en realidad un grupo de cinco casas, empezado en 1805 por el mercader Guman Chand Patwa para sus hijos; una parte es museo.",
        come: "En la ciudad bajo el fuerte, a pie. Entrada de pago para la parte visitable.",
        quando: "Por la mañana, antes de que se llenen los callejones.",
        tempo: "1 hora",
        consiglio: "Las fachadas se ven bien gratis desde la calle; se entra sobre todo por las terrazas."
      },
      {
        nome: "El lago de Gadisar",
        testo: "El embalse que antes daba agua a toda la ciudad, excavado en 1156 y reconstruido hacia 1367 por Rawal Gadsi, con pabellones y templos sobre el agua.",
        come: "A un kilómetro y medio del fuerte, a pie o en tuk-tuk. Hay barcas de remos y de pedales.",
        quando: "Al amanecer, cuando el agua está quieta y solo hay pájaros.",
        tempo: "1 hora",
        costo: "acceso gratis; barcas de pago",
        consiglio: "Llegar antes del sol y quedarse hasta que ilumina el fuerte a lo lejos."
      },
      {
        nome: "Las dunas de Sam y de Khuri",
        testo: "Las dunas del Thar a unas decenas de kilómetros de la ciudad, adonde se llega en camello al atardecer y se duerme en campamentos de tiendas. Sam es más grande y concurrida; Khuri es más pequeña y tranquila.",
        come: "En jeep con el campamento, que suele organizar traslado, camello, cena y música. El equipaje grande se queda en el hotel de Jaisalmer.",
        quando: "De noviembre a febrero, con noches frías. A partir de abril el calor es extremo.",
        tempo: "una noche",
        consiglio: "Elegir un campamento con opiniones recientes sobre higiene y cuidado de los camellos, aunque cueste más."
      },
      {
        nome: "Bada Bagh",
        testo: "Un jardín de cenotafios de los soberanos de Jaisalmer, con decenas de pabellones de arenisca en una colina, unos 6 kilómetros al norte de la ciudad, construidos entre el siglo XVIII y principios del XX.",
        come: "En coche o tuk-tuk, también de camino a las dunas.",
        quando: "Al atardecer o al amanecer, cuando la arenisca se vuelve naranja.",
        tempo: "45 minutos",
        consiglio: "Combina bien con el pueblo abandonado de Kuldhara, unos 18 kilómetros al suroeste de la ciudad."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Fuerte y templos jainistas por la mañana",
          "Haveli de Patwon",
          "Tarde hacia las dunas, camello al atardecer y noche en el campamento"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: llegada desde Jodhpur, tarde en las dunas y noche en el campamento",
          "Día 2: regreso, fuerte y templos jainistas",
          "Havelis de Patwon y Nathmal",
          "Atardecer desde los bastiones o en Gadisar"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Los dos días de arriba",
          "Día 3: amanecer en Gadisar",
          "Bada Bagh y Kuldhara",
          "Última noche en una terraza frente al fuerte iluminado"
        ]
      }
    ],
    zone: [
      {
        nome: "Bajo el fuerte",
        perChi: "quien quiere ir al fuerte a pie",
        testo: "Hoteles en las havelis de los callejones alrededor del fuerte, con terrazas con vistas a las murallas. Cómodos y menos dañinos para el monumento que los alojamientos dentro de las murallas."
      },
      {
        nome: "Dentro del fuerte",
        perChi: "quien busca el ambiente",
        testo: "Guesthouses dentro de las murallas: ambiente único, pero callejones estrechos, poca agua y problemas de conservación del fuerte."
      },
      {
        nome: "Campamentos en el desierto",
        perChi: "una noche",
        testo: "Campamentos de tiendas en Sam o Khuri, desde los más espartanos hasta las tiendas de lujo con baño. Se va una noche, no como base."
      }
    ],
    sapori: [
      {
        nome: "Ker sangri",
        testo: "Bayas y judías del desierto secas y cocinadas con especias, el plato más típico del Thar. En los thali de los restaurantes de la ciudad."
      },
      {
        nome: "Dal baati churma",
        testo: "Bolitas de pan cocidas en las brasas con lentejas y migaja dulce: a menudo es la cena de los campamentos en el desierto."
      },
      {
        nome: "Ghotua y panchdhari laddoo",
        testo: "Los dulces de Jaisalmer, bolitas de harina, azúcar y ghee. En las pastelerías cerca de la puerta del fuerte."
      },
      {
        nome: "Chai en el desierto",
        testo: "El té con leche y especias hecho al fuego en el campamento, al atardecer o al amanecer entre las dunas."
      }
    ],
    attenzioni: [
      "En la estación y en la parada de autobuses ofrecen llevaros gratis al hotel: a menudo acabáis en otro hotel que paga comisión.",
      "Los campamentos más baratos tienen niveles de higiene y de trato a los camellos muy variables.",
      "Jaisalmer está cerca de Pakistán: el Foreign Office británico desaconseja todo viaje a menos de 10 kilómetros de la frontera, que en el Rajastán no está señalizada en algunos tramos. Conviene consultar las recomendaciones de viaje del Ministerio de Asuntos Exteriores antes de salir.",
      "En mayo y junio las máximas medias superan los 40 °C: hay que llevar agua siempre."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: 'Las murallas y los baluartes de arenisca dorada del Fuerte de Jaisalmer',
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-13-jaisalmer.jpg',
  },
  {
    slug: 'udaipur',
    paeseSlug: 'india',
    ordine: 7,
    nome: 'Udaipur',
    tipologia: ['città', 'laghi', 'palazzi'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La ciudad de los lagos, en las colinas de los Aravalli, con el City Palace a orillas del lago Pichola y los palacios blancos en las islas.',
    percheAndarci:
      'Es la parada más relajante de Rajastán: terrazas sobre el lago, paseos en barca, ghats y callejones más tranquilos que en otros sitios. De camino desde Jodhpur está el templo de Ranakpur.',
    cosaVedere: [
      'El City Palace',
      'El templo de Jagdish',
      'El lago Pichola con el Jag Mandir',
      'El Palacio de los monzones de Sajjangarh al atardecer',
      'El templo jainista de Ranakpur y el fuerte de Kumbhalgarh, de camino desde Jodhpur',
    ],
    cosaFare: ['Un paseo en barca por el Pichola', 'Una cena en una terraza de Ambrai Ghat', 'Un espectáculo de danzas tradicionales en la Bagore ki Haveli'],
    doveDormire: 'Lal Ghat y Gangaur Ghat en gama económica y media; Ambrai y Hanuman Ghat por la vista al palacio.',
    doveMangiare: 'Terrazas sobre el lago por la vista, thali houses de la ciudad vieja para comer bien y gastar poco.',
    comeArrivare: 'Desde Jodhpur en coche, un día largo con la parada en Ranakpur; aeropuerto con vuelos a Delhi, Mumbai y Jaipur.',
    comeSpostarsi: 'A pie y en tuk-tuk; barcas en el lago.',
    periodoMigliore: 'octubre-marzo; después del monzón los lagos están llenos.',
    costi: 'City Palace 400 rupias, tarifa única para indios y extranjeros (web oficial, 2023); barca al Jag Mandir 600 rupias, 800 al atardecer (tarifas oficiales abril 2025-marzo 2026); en Ranakpur los no jainistas entran normalmente desde mediodía.',
    erroriDaEvitare: ['Llegar a Ranakpur a primera hora de la mañana: los no jainistas entran solo desde mediodía', 'Llevar cuero en Ranakpur'],
    luoghi: [
      {
        nome: "City Palace",
        testo: "El palacio de los maharanas de Mewar, que fue creciendo durante cuatro siglos en la orilla del lago Pichola. Patios de los pavos reales, salas de espejos, balcones sobre el lago; una parte es museo y otra sigue siendo de la familia real.",
        come: "Entrada por la Badi Pol o por la puerta de Shitla Mata, a pie desde la ciudad vieja. Entradas en las dos puertas u online en la web del museo; guía o audioguía (en inglés, francés, alemán y español) útiles.",
        quando: "Abre todos los días de 9 a 21, taquilla hasta las 20. A la hora de apertura, antes de los grupos.",
        tempo: "2-3 horas",
        costo: "400 rupias, la misma tarifa para indios y extranjeros (web oficial, 2023)",
        url: "https://www.citypalacemuseum.org/planyourvisit",
        consiglio: "Ver el palacio por la mañana y hacer la barca por el Pichola por la tarde, desde el mismo embarcadero."
      },
      {
        nome: "El lago Pichola en barca",
        testo: "El lago artificial creado en 1362, con el Lake Palace (hoy hotel) y el Jag Mandir en las islas. Desde el agua se ve toda la fachada del City Palace.",
        come: "Las barcas oficiales salen de Rameshwar Ghat, junto al City Palace, y llevan al Jag Mandir; otras barcas salen de algunos ghats.",
        quando: "Vueltas de día desde las 10; la del atardecer cuesta más. Horarios que cambian entre verano e invierno.",
        tempo: "1 hora",
        costo: "vuelta con parada en el Jag Mandir 600 rupias, al atardecer 800 (tarifas oficiales abril 2025-marzo 2026)",
        consiglio: "Preguntar si la vuelta incluye la parada en el Jag Mandir: no todas la hacen."
      },
      {
        nome: "Templo de Jagdish",
        testo: "El templo de 1651 dedicado a Jagannath, forma de Vishnu, a pocos pasos del palacio, en lo alto de 32 escalones de mármol, con las paredes cubiertas de esculturas. Es un templo vivo, con cantos y ofrendas todo el día.",
        come: "A pie desde la Badi Pol. Zapatos en la entrada.",
        quando: "A primera hora y por la noche, durante las ceremonias.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Sentarse un momento en los escalones durante el aarti de la noche."
      },
      {
        nome: "Bagore ki Haveli",
        testo: "Una casa noble del siglo XVIII en Gangaur Ghat, hoy museo. Por la noche acoge el espectáculo Dharohar de danzas y músicas del Rajastán.",
        come: "A pie desde Lal Ghat. Entradas para el espectáculo en taquilla; conviene llegar pronto.",
        quando: "Por la noche: el espectáculo empieza a las 19 y dura una hora.",
        tempo: "1-2 horas",
        consiglio: "Llegar media hora antes para coger sitio en primera fila."
      },
      {
        nome: "Sajjangarh, el Palacio de los monzones",
        testo: "Un palacio blanco empezado en 1884 en una colina a unos 5 kilómetros al oeste de la ciudad, dentro de un pequeño santuario natural. Desde arriba se ven los lagos y las colinas de los Aravalli.",
        come: "En coche o tuk-tuk, por una carretera que sube a través del santuario. Se visita hasta el atardecer.",
        quando: "Al atardecer.",
        tempo: "1 hora y media",
        consiglio: "Se disfruta más la vista que el palacio: se va por el atardecer."
      },
      {
        nome: "Ranakpur y Kumbhalgarh",
        testo: "En la carretera desde Jodhpur. Ranakpur es un templo jainista del siglo XV en mármol blanco con 1.444 columnas, todas distintas. Kumbhalgarh es un fuerte de 1448 con 36 kilómetros de murallas sobre las colinas, patrimonio de la UNESCO desde 2013.",
        come: "Con el conductor, como parada en el día de viaje entre Jodhpur y Udaipur. En Ranakpur hay audioguía.",
        quando: "Ranakpur recibe a los no jainistas solo después de los rezos de la mañana, normalmente desde mediodía; la hora de cierre cambia según las fuentes.",
        tempo: "1 hora y media en Ranakpur, 2 horas en Kumbhalgarh",
        consiglio: "Nada de piel en Ranakpur: cinturones, bolsos y carteras se quedan en el coche."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "City Palace a la hora de apertura",
          "Templo de Jagdish",
          "Paseo en barca por el Pichola por la tarde",
          "Espectáculo en la Bagore ki Haveli"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: City Palace, Jagdish, ghats de Gangaur y Ambrai",
          "Barca por el Pichola y Bagore ki Haveli",
          "Día 2: mañana libre por los callejones y los talleres de miniaturas",
          "Atardecer desde Sajjangarh y cena en una terraza de Ambrai Ghat"
        ]
      }
    ],
    zone: [
      {
        nome: "Lal Ghat y Gangaur Ghat",
        perChi: "presupuesto bajo y gama media",
        testo: "Guesthouses con terraza en los callejones detrás del City Palace, a pie de todo. Calles estrechas y motos, pero es el corazón de la ciudad vieja."
      },
      {
        nome: "Hanuman Ghat y Ambrai",
        perChi: "quien quiere vistas al palacio",
        testo: "En la orilla opuesta del Pichola: desde las terrazas se ve el City Palace de frente. Más tranquila, se cruza el puente a pie."
      },
      {
        nome: "Lago Fateh Sagar",
        perChi: "hoteles con jardín y piscina",
        testo: "Más al norte, junto a un lago con paseo. Más espacio y calma, hace falta un tuk-tuk para la ciudad vieja."
      }
    ],
    sapori: [
      {
        nome: "Thali rajastaní",
        testo: "La comida completa con dal, verduras, kadhi y chapati, que rellenan todas las veces que queráis. Las thali houses de la ciudad vieja son las más baratas y buenas."
      },
      {
        nome: "Gatte ki sabzi",
        testo: "Ñoquis de harina de garbanzo en un curry de yogur, un clásico de la cocina vegetariana de Mewar."
      },
      {
        nome: "Dal baati",
        testo: "El plato del Rajastán, aquí servido a menudo en los restaurantes de las terrazas."
      },
      {
        nome: "Kachori y jalebi por la mañana",
        testo: "Buñuelos salados y espirales dulces en los locales alrededor del Jagdish, el desayuno local."
      }
    ],
    attenzioni: [
      "Las «escuelas de arte» de miniaturas donde los «estudiantes» venden los cuadros: a menudo son tiendas, y los precios de salida son muy altos.",
      "La vuelta en barca al atardecer cuesta más que de día: comprobad la tarifa en taquilla.",
      "En Ranakpur los no jainistas solo entran desde mediodía: no lleguéis a primera hora.",
      "En las terrazas sobre el lago pueden aparecer monos: no dejéis comida a la vista."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: 'El City Palace de Udaipur a orillas del lago Pichola',
    immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-10-udaipur.jpg',
  },
  {
    slug: 'varanasi',
    paeseSlug: 'india',
    ordine: 8,
    nome: 'Benarés y Sarnath',
    tipologia: ['città santa', 'fiume', 'spiritualità'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      'La ciudad santa del hinduismo en la orilla occidental del Ganges, con 84 ghats, las escalinatas donde se reza, uno se baña y se incineran los muertos. A media hora está Sarnath, donde Buda pronunció el primer sermón.',
    percheAndarci:
      'Para ver la vida religiosa de la India sin filtros: el baño ritual al amanecer, las piras de Manikarnika, el Ganga Aarti de la noche. Es la parada más intensa de cualquier viaje por el norte.',
    cosaVedere: [
      'Los ghats al amanecer desde la barca, de Assi Ghat hacia el norte',
      'El Ganga Aarti nocturno en Dashashwamedh Ghat',
      'Manikarnika Ghat, el ghat de las cremaciones, a distancia y sin fotos',
      'El Kashi Vishwanath, el templo dorado de Shiva, con el nuevo corredor hacia el río',
      'Los callejones de la ciudad vieja y los talleres de los tejedores de seda',
      'Sarnath: el estupa de Dhamek, las ruinas del monasterio y el museo con el capitel de Ashoka',
    ],
    cosaFare: [
      'Una barca de remos al amanecer',
      'El Subah-e-Banaras en Assi Ghat, la ceremonia de la mañana',
      'Un lassi espeso en una tienda de la ciudad vieja',
      'Una caminata por todos los ghats por la tarde',
    ],
    doveDormire:
      'En los ghats o en los callejones justo detrás, entre Assi y Dashashwamedh: guesthouses económicas, haveli sobre el río en gama media y alta. La ciudad nueva es cómoda pero está lejos del río.',
    doveMangiare: 'Lassi, kachori sabzi, tamatar chaat, malaiyo en invierno, paan de Benarés. Muchos locales vegetarianos.',
    comeArrivare:
      'Desde Delhi en tren nocturno (unas 10 horas en litera, como el Shiv Ganga Express) o en el Vande Bharat diurno (unas 8 horas), o en avión (aproximadamente 1 hora y media; el aeropuerto está a unos 26 km de la ciudad).',
    comeSpostarsi: 'A pie por los ghats y los callejones, barcas en el río, e-rickshaw y tuk-tuk hacia la ciudad nueva y Sarnath.',
    periodoMigliore:
      'octubre-marzo; noviembre para Dev Deepawali (el 24 de noviembre en 2026). Diciembre-enero con niebla espesa al amanecer. Con el monzón (julio-septiembre) los ghats bajos acaban bajo el agua.',
    costi: 'Barca privada a un precio que se pacta antes de subir; Sarnath con entradas separadas para el yacimiento y el museo, tarifas ASI en taquilla; museo cerrado los viernes.',
    erroriDaEvitare: [
      'Seguir al «guía» espontáneo en Manikarnika que luego pide dinero por la leña',
      'Fotografiar las cremaciones o a las familias de luto',
      'Subir a una barca sin haber fijado precio y duración',
      'Bañarse en el Ganges o beber el agua del río',
      'Llevar teléfono y bolsos al Kashi Vishwanath: no entran, van a las taquillas',
    ],
    luoghi: [
      {
        nome: "Los ghats al amanecer en barca",
        testo: "Ochenta y cuatro escalinatas sobre el Ganges, una tras otra, donde al amanecer los peregrinos se dan el baño ritual, los sacerdotes rezan y los lavanderos golpean la ropa. Desde el agua se ve todo el frente de la ciudad.",
        come: "Barca de remos desde Assi o desde Dashashwamedh, hacia el norte hasta Manikarnika. Precio y duración se fijan antes de subir.",
        quando: "Media hora antes de que salga el sol. Entre diciembre y enero la niebla puede parar las barcas; con el monzón el río crece.",
        tempo: "1-2 horas",
        costo: "barca privada a precio pactado: las cifras cambian mucho según temporada, duración y barquero",
        consiglio: "Benarés hay que hacerla sí o sí con Shiva. Pocas veces he encontrado a una persona tan amable y dispuesta, que conoce tan bien el lugar y te lo explica mientras paseas: es como dar una vuelta por las calles de tu pueblo con un amigo."
      },
      {
        nome: "El Ganga Aarti en Dashashwamedh",
        testo: "La ceremonia nocturna para el río: un grupo de sacerdotes hace girar grandes lámparas de fuego al ritmo de campanas y cantos, delante de miles de personas en las escaleras y en las barcas.",
        come: "Desde el ghat principal, en los escalones, o desde una barca parada delante. Se llega a pie desde Godowlia, porque los coches se quedan antes.",
        quando: "Todas las noches al atardecer; el horario cambia según la estación. Llegar al menos una hora antes para coger sitio en los escalones.",
        tempo: "1 hora y media",
        costo: "gratis desde los escalones",
        consiglio: "Llevar bolsos y móviles por delante: entre el gentío trabajan los carteristas."
      },
      {
        nome: "Subah-e-Banaras en Assi Ghat",
        testo: "La ceremonia de la mañana en el ghat más al sur: cantos, música clásica, un pequeño aarti y yoga en los escalones. Más recogida y menos concurrida que la de la noche.",
        come: "En Assi Ghat, a pie si dormís en la zona.",
        quando: "Antes del amanecer, todos los días.",
        tempo: "1 hora",
        costo: "gratis",
        consiglio: "Se combina bien con la barca: al acabar la ceremonia se sube y se sale hacia el norte."
      },
      {
        nome: "Manikarnika Ghat",
        testo: "Uno de los dos ghats de las cremaciones, donde el fuego de las piras nunca se apaga. Para los hindúes, ser incinerado aquí lleva al moksha, la liberación del ciclo de las reencarnaciones.",
        come: "Se mira desde la barca o a distancia desde los escalones de arriba. Ni fotos ni vídeos.",
        quando: "De día; por la noche se ve bien desde la barca.",
        tempo: "30 minutos",
        consiglio: "Ignorad a quien se presenta como guía o «voluntario del hospicio»: al final pide dinero para la leña de los pobres."
      },
      {
        nome: "Kashi Vishwanath",
        testo: "El templo dorado de Shiva, uno de los más sagrados de la India. El corredor del Kashi Vishwanath Dham, inaugurado el 13 de diciembre de 2021, lo une directamente con el río.",
        come: "Móviles, bolsos y aparatos electrónicos no entran: hay taquillas gratuitas en las entradas. Colas largas; existe una entrada de pago más rápida (Sugam Darshan), que se reserva en la web oficial y se suspende durante los aarti y los días de fiesta.",
        quando: "A primera hora. Los lunes, día de Shiva, y los festivos está abarrotado.",
        tempo: "1-3 horas según la cola",
        costo: "entrada libre",
        url: "https://shrikashivishwanath.org/",
        consiglio: "Ropa larga y nada en los bolsillos: en los controles se pasa más rápido."
      },
      {
        nome: "Los callejones de la ciudad vieja",
        testo: "El laberinto de callejones detrás de los ghats, con pequeños templos, vacas, tiendas de dulces, vendedores de flores y los telares de la seda de Banaras.",
        come: "A pie, mejor con guía la primera vez: aquí Google Maps se pierde.",
        quando: "Por la mañana y por la tarde. Después del atardecer mejor no recorrerlos solos, sobre todo las mujeres.",
        tempo: "medio día",
        consiglio: "La seda hay que comprarla en tiendas recomendadas: la que se vende como «hecha a mano» puede ser de telar mecánico."
      },
      {
        nome: "Sarnath",
        testo: "El lugar donde Buda pronunció su primer sermón, unos 8 kilómetros al noreste de Benarés. Están el estupa de Dhamek, las ruinas de los monasterios y un museo con el capitel de los leones de Ashoka, símbolo de la India.",
        come: "En tuk-tuk o en coche. El yacimiento arqueológico y el museo tienen entradas separadas.",
        quando: "Por la mañana. El museo abre de 10 a 17 y cierra los viernes (Incredible India).",
        tempo: "medio día",
        costo: "entradas ASI para el yacimiento y el museo, tarifas en taquilla",
        url: "https://asi.nic.in/",
        consiglio: "No ir un viernes: sin el museo falta lo más bonito."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Barca al amanecer desde Assi Ghat",
          "Kashi Vishwanath por la mañana",
          "Callejones de la ciudad vieja y un lassi",
          "Paseo por los ghats por la tarde",
          "Ganga Aarti en Dashashwamedh"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: llegada, paseo por los ghats, Ganga Aarti",
          "Día 2: Subah-e-Banaras y barca al amanecer",
          "Manikarnika desde la barca, Kashi Vishwanath",
          "Callejones y tiendas de seda"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Los dos días de arriba, como los hicimos nosotros, llegando en el tren nocturno desde Delhi",
          "Día 3: Sarnath por la mañana (no en viernes)",
          "Tarde tranquila en los ghats del sur",
          "Por la noche, el tren a Agra"
        ]
      }
    ],
    zone: [
      {
        nome: "Assi Ghat",
        perChi: "quien quiere el río con algo de calma",
        testo: "El ghat más al sur, con cafés, guesthouses y la ceremonia de la mañana. Un poco más tranquilo; a Dashashwamedh se va en barca o con un largo paseo por los ghats."
      },
      {
        nome: "Dashashwamedh y Godowlia",
        perChi: "quien quiere estar en el centro",
        testo: "Guesthouses y havelis junto al río entre los ghats centrales, a dos pasos del aarti y del Kashi Vishwanath. Abarrotado y ruidoso a todas horas."
      },
      {
        nome: "Cantonment, la ciudad nueva",
        perChi: "quien busca un hotel de cadena",
        testo: "Cómoda para la estación y el aeropuerto, pero lejos del río, y el tráfico alarga los tiempos. Y el río al amanecer es el motivo para venir."
      }
    ],
    sapori: [
      {
        nome: "Lassi",
        testo: "Yogur espeso, a veces con fruta o malai, servido en vasitos de barro en los locales de los callejones hacia Manikarnika."
      },
      {
        nome: "Kachori sabzi y jalebi",
        testo: "El desayuno de Benarés: buñuelos rellenos con curry de patata y luego jalebi calientes. En los locales de los callejones desde el amanecer."
      },
      {
        nome: "Tamatar chaat",
        testo: "Un chaat caliente de tomate, patata y especias, servido en cuencos de hoja. En los puestos de chaat de Godowlia."
      },
      {
        nome: "Malaiyo",
        testo: "Espuma de leche con azafrán batida al aire libre en las noches de invierno y vendida al amanecer. Solo en los meses fríos."
      },
      {
        nome: "Paan de Banaras",
        testo: "Hoja de betel rellena de nuez de areca, especias y dulces, para masticar después de cenar. Para probarlo, pedid la versión dulce, sin tabaco."
      }
    ],
    attenzioni: [
      "Los monos de las terrazas de los hoteles son agresivos con la comida. En Benarés a mi novia la mordió un mono en la terraza del hotel que daba al Ganges: Shiva nos acompañó al hospital para la consulta y las vacunas. Si os pasa, id enseguida a por la profilaxis antirrábica.",
      "El «guía» espontáneo de Manikarnika que luego pide dinero para la leña de las cremaciones.",
      "Fijad precio y duración de la barca antes de subir.",
      "No os bañéis en el Ganges ni bebáis agua del río, aunque esté «bendecida».",
      "En los callejones y entre la multitud del aarti puede haber acoso y carteristas: mejor ir acompañados después del atardecer."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: 'Una barca de remos roja se desliza por el Ganges delante de los ghats y los palacios de Benarés',
    immagine: '/images/india/varanasi-barca-rossa-gange-riccardo.jpg',
  },
  {
    slug: 'chennai',
    paeseSlug: 'india',
    ordine: 9,
    nome: 'Chennai',
    tipologia: ['città', 'arrivo'],
    giorniConsigliati: 'de paso',
    visitataPersonalmente: false,
    introduzione:
      'La capital de Tamil Nadu, antigua Madrás, puerta de entrada aérea al sureste de la India. Una ciudad grande y calurosa, con el paseo marítimo de Marina Beach y el barrio de Mylapore alrededor del templo de Kapaleeshwarar.',
    percheAndarci: "Sobre todo como punto de llegada: Mamallapuram está a unos 60 kilómetros por carretera. Con medio día se ven Mylapore y el Government Museum con sus bronces del sur.",
    cosaVedere: [
      "El templo de Kapaleeshwarar en Mylapore",
      "Marina Beach al atardecer",
      "Los bronces del Government Museum",
    ],
    cosaFare: ['Una comida sobre hoja de banano en un restaurante vegetariano histórico', 'Un café filtrado en taza de metal'],
    comeArrivare: 'Aeropuerto internacional de Chennai, con vuelos desde Italia vía el Golfo.',
    comeSpostarsi: 'Uber, Ola, metro y tuk-tuk.',
    periodoMigliore: 'diciembre-marzo; octubre-diciembre es la estación del monzón del noreste.',
    erroriDaEvitare: [
      "Bañarse en Marina Beach: está prohibido por ley, las corrientes son peligrosas y no hay socorristas",
      "Programar la visita entre octubre y diciembre sin tener en cuenta el monzón y los ciclones",
    ],
    luoghi: [
      {
        nome: "Templo de Kapaleeshwarar",
        testo: "El templo de Shiva del barrio de Mylapore, con el gopuram de unos 37 metros cubierto de figuras de estuco y el gran estanque sagrado, que tiene agua todo el año. Alrededor está uno de los barrios tamiles más tradicionales de la ciudad, con tiendas de flores, latón y dulces.",
        come: "En metro o Uber hasta Mylapore. Zapatos en la consigna. Desde septiembre de 2026 en los grandes templos de Tamil Nadu están prohibidas las fotos y los vídeos, y las normas sobre los teléfonos han cambiado varias veces: seguir las indicaciones de la entrada.",
        quando: "Temprano por la mañana o por la tarde-noche, durante las ceremonias. Horarios expuestos en la entrada del templo.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Recorrer a pie las calles alrededor del estanque, entre tiendas y puestos."
      },
      {
        nome: "Government Museum de Egmore",
        testo: "Fundado en 1851, es el segundo museo más antiguo de la India después del Indian Museum de Calcuta. La galería de bronces reúne estatuas de divinidades del sur de la India, entre ellas el Nataraja (Shiva danzante) de Tiruvalangadu, del siglo XI.",
        come: "En metro o Uber hasta Egmore. Se visita por libre; el complejo es grande, mejor ir directos a la galería de bronces.",
        quando: "De 10.30 a 18.30, cerrado los viernes y en algunas fiestas (Deepavali, Pongal, 26 de enero, 15 de agosto, 2 de octubre). Fuente: web oficial, 2026.",
        tempo: "1 hora y media",
        url: "https://www.govtmuseumchennai.org/",
        consiglio: "Si después vais a Thanjavur y Madurai, aquí se entiende lo que se verá en los templos."
      },
      {
        nome: "Marina Beach",
        testo: "La playa urbana natural más larga de la India, con un paseo de unos 6 kilómetros. Al atardecer se llena de familias, vendedores de tentempiés y atracciones.",
        come: "En Uber o tuk-tuk. El paseo recorre toda la playa.",
        quando: "A última hora de la tarde y al atardecer, cuando baja el calor.",
        tempo: "1 hora",
        costo: "gratis",
        consiglio: "Se pasea y se come, pero aquí el baño está prohibido por ley: las corrientes son peligrosas y no hay socorristas."
      },
      {
        nome: "Fort St. George",
        testo: "La primera fortaleza inglesa en la India, fundada en 1639 y terminada en 1644, hoy sede de la asamblea legislativa de Tamil Nadu. Dentro están la iglesia de St. Mary, de 1680, la iglesia anglicana más antigua de la India, y el Fort Museum sobre el periodo británico.",
        come: "En Uber o tuk-tuk, cerca del puerto.",
        quando: "Por la mañana; horarios del Fort Museum en la web del ASI.",
        tempo: "1 hora",
        consiglio: "Una visita para quien sea aficionado a la historia colonial; si no, mejor Mylapore."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Kapaleeshwarar y Mylapore por la mañana",
          "Desayuno tamil con café de filtro",
          "Government Museum y los bronces chola",
          "Atardecer en Marina Beach",
          "Por la noche, o a la mañana siguiente, salida hacia Mamallapuram"
        ]
      }
    ],
    zone: [
      {
        nome: "Mylapore y Alwarpet",
        perChi: "quien quiere la Chennai tradicional",
        testo: "Barrio de templos y de restaurantes vegetarianos históricos, cerca de Marina Beach. Tráfico intenso, pero todo a mano con Uber."
      },
      {
        nome: "Egmore",
        perChi: "quien llega o sale en tren",
        testo: "Cerca de la estación y del museo, con hoteles de gama media. Cómodo, con poco encanto."
      },
      {
        nome: "Cerca del aeropuerto o en la East Coast Road",
        perChi: "quien va directo a Mamallapuram",
        testo: "Hoteles y resorts al sur, en la carretera hacia la costa. Se evita el centro y se sale enseguida."
      }
    ],
    sapori: [
      {
        nome: "Café de filtro",
        testo: "Café con achicoria y leche, que se pasa de un vaso de metal a otro para hacer espuma. En cualquier restaurante vegetariano tradicional."
      },
      {
        nome: "Comida en hoja de banano",
        testo: "Arroz, sambar, rasam, verduras, yogur y pickle servidos sobre una hoja de banano, que rellenan todas las veces que queráis. En los restaurantes vegetarianos de Mylapore."
      },
      {
        nome: "Idli, dosa y vada",
        testo: "Pastelitos de arroz al vapor, crepes crujientes de arroz y lentejas y rosquillas fritas, con chutney de coco. El desayuno del sur."
      },
      {
        nome: "Pollo de Chettinad",
        testo: "El curry más especiado de Tamil Nadu, con pimienta negra, anís estrellado y coco tostado. En los restaurantes de cocina chettinad."
      }
    ],
    attenzioni: [
      "No os bañéis en Marina Beach: está prohibido por ley, las corrientes son fuertes y no hay socorristas.",
      "Entre octubre y diciembre el monzón del noreste trae lluvias fuertes y a veces ciclones.",
      "Los tuk-tuks rara vez usan el taxímetro: mejor Uber, Ola o un precio fijado antes.",
      "Desde septiembre de 2026 en los grandes templos de Tamil Nadu están prohibidas las fotos y los vídeos; las normas sobre los teléfonos (consigna o teléfono apagado) han cambiado varias veces: seguid las indicaciones de la entrada.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Las olas sobre la arena de Marina Beach al anochecer, Chennai',
    immagine: '/images/india/chennai.jpg',
  },
  {
    slug: 'mamallapuram',
    paeseSlug: 'india',
    ordine: 10,
    nome: 'Mamallapuram',
    tipologia: ['patrimonio UNESCO', 'mare', 'templi'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: false,
    introduzione: "El antiguo puerto de los reyes Pallava en la costa de Coromandel, donde entre los siglos VII y VIII se tallaron algunos de los primeros templos de piedra del sur: templos excavados en la roca, bajorrelieves y el templo junto al mar.",
    percheAndarci:
      'Para ver en un pueblo pequeño y tranquilo el comienzo de todo lo que se verá en Thanjavur y Madurai, y para recuperarse del vuelo antes de salir hacia el sur.',
    cosaVedere: [
      'El Shore Temple en la playa',
      'Los Cinco Ratha, templos monolíticos con forma de carro',
      'La Penitencia de Arjuna, el gran bajorrelieve en la roca',
      'La «bola de mantequilla de Krishna» y los templos rupestres de la colina',
    ],
    cosaFare: ['Visitar los talleres de los canteros', 'El atardecer sobre el Shore Temple', 'Una excursión a Kanchipuram, la ciudad de los templos y de la seda'],
    doveDormire: 'Guesthouses cerca de la playa de los pescadores; resorts en la East Coast Road.',
    doveMangiare: 'Pescado y marisco en los restaurantes de la playa, desayunos tamiles en el pueblo.',
    comeArrivare: "Unos 60 kilómetros al sur de Chennai, en coche o taxi desde el aeropuerto por la East Coast Road.",
    comeSpostarsi: 'A pie y en bici; tuk-tuk para los Cinco Ratha.',
    periodoMigliore: 'diciembre-marzo.',
    costi: "Shore Temple y Cinco Rathas son de pago con entrada ASI: tarifas para extranjeros en la taquilla o en el portal del ASI. La Penitencia de Arjuna es de acceso libre.",
    erroriDaEvitare: [
      "Bañarse sin informarse: el mar frente al pueblo tiene corrientes fuertes",
      "Visitar los sitios a mediodía, sobre el granito al sol",
    ],
    luoghi: [
      {
        nome: "Shore Temple",
        testo: "El templo de granito en la playa, construido por los reyes Pallava a comienzos del siglo VIII, bajo Narasimhavarman II. Es uno de los templos de piedra construidos (y no excavados en la roca) más antiguos del sur de la India; el viento salado ha desgastado en parte sus decoraciones. Es patrimonio de la UNESCO desde 1984 con los demás monumentos de Mamallapuram.",
        come: "A pie desde el pueblo. Entrada en la taquilla del ASI o en línea.",
        quando: "Horarios en la taquilla o en la web del ASI. El amanecer y la última hora de la tarde dan la mejor luz sobre el granito.",
        tempo: "1 hora",
        costo: "entrada ASI para extranjeros, tarifa en la taquilla",
        url: "https://asi.nic.in/",
        consiglio: "Rodear el templo por el lado del mar: se ve bien cuánto ha desgastado el viento las esculturas."
      },
      {
        nome: "Los Cinco Rathas",
        testo: "Cinco templos en forma de carro, cada uno tallado en un único bloque de granito rosa en el siglo VII. Al lado hay un elefante y un toro Nandi de piedra exentos, y en el Bhima Ratha las columnas se apoyan sobre leones.",
        come: "Un poco fuera del centro, en bici o tuk-tuk. Entrada ASI.",
        quando: "A primera hora, antes de que el sol ponga el granito ardiendo.",
        tempo: "45 minutos",
        costo: "entrada ASI; preguntar en la taquilla si vale también para el Shore Temple",
        url: "https://asi.nic.in/",
        consiglio: "Dar la vuelta a cada ratha: cada uno tiene un tipo de tejado distinto."
      },
      {
        nome: "La Penitencia de Arjuna",
        testo: "Un bajorrelieve al aire libre de unos 29 por 13 metros, tallado en dos rocas: dioses, animales, sabios y el descenso del Ganges desde el cielo, con elefantes casi a tamaño natural.",
        come: "En el centro del pueblo, a pie. Acceso libre.",
        quando: "A primera hora o a última de la tarde, con la luz rasante que resalta las figuras.",
        tempo: "30 minutos",
        costo: "gratis",
        consiglio: "Buscar el gato de pie sobre una pata, que imita la penitencia de los sabios."
      },
      {
        nome: "La bola de mantequilla de Krishna y la colina",
        testo: "Una roca de granito en equilibrio sobre una ladera y, alrededor, templos rupestres excavados en la roca como el de Varaha y el de Mahishasuramardini, con bajorrelieves preciosos. En lo alto está el viejo faro.",
        come: "A pie desde la Penitencia de Arjuna, por senderos en la colina.",
        quando: "A última hora de la tarde, hasta el atardecer.",
        tempo: "1-2 horas",
        consiglio: "Calzado cómodo: la roca es lisa y resbaladiza."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Cinco Rathas a la hora de apertura",
          "Penitencia de Arjuna",
          "Comida de pescado en la playa",
          "Colina con los templos rupestres y la bola de Krishna",
          "Shore Temple al atardecer"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "El día de arriba",
          "Día 2: excursión a Kanchipuram, la antigua capital de los Pallava, ciudad de templos y seda",
          "Regreso y tarde en el pueblo con los talleres de los canteros",
        ]
      }
    ],
    zone: [
      {
        nome: "El pueblo, cerca de la playa de los pescadores",
        perChi: "quien quiere tenerlo todo a pie",
        testo: "Guesthouses y pequeños hoteles entre la playa y los monumentos, con restaurantes de pescado. Sencillo y tranquilo por la noche."
      },
      {
        nome: "East Coast Road",
        perChi: "resorts con piscina",
        testo: "Resorts en la playa al norte y al sur del pueblo. Cómodos para descansar después del vuelo; hace falta transporte para los sitios."
      }
    ],
    sapori: [
      {
        nome: "Pescado y marisco",
        testo: "Gambas, calamares y pescado del día a la parrilla o al curry, en los restaurantes de la playa de los pescadores."
      },
      {
        nome: "Desayuno tamil",
        testo: "Idli, dosa y pongal con café de filtro, en las casas de comidas vegetarianas del pueblo."
      },
      {
        nome: "Meen kuzhambu",
        testo: "Curry de pescado al tamarindo de la costa de Coromandel, ácido y picante, con arroz."
      },
      {
        nome: "Coco fresco",
        testo: "Cocos abiertos al momento por los vendedores de la playa, la mejor bebida con el calor."
      }
    ],
    attenzioni: [
      "Antes de bañaros informaos en el lugar: el mar frente al pueblo tiene corrientes fuertes.",
      "Las entradas se compran en las taquillas del ASI o en línea, no a quien las ofrece en la calle.",
      "En los talleres de esculturas los precios para extranjeros empiezan altos: regatear.",
      "A mediodía el granito al sol quema: los sitios, al amanecer y al atardecer.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'El Shore Temple de Mamallapuram en la playa, de granito erosionado por el viento',
    immagine: '/images/india/mamallapuram.jpg',
  },
  {
    slug: 'madurai',
    paeseSlug: 'india',
    ordine: 11,
    nome: 'Madurai',
    tipologia: ['città', 'templi'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: false,
    introduzione:
      'Una de las ciudades habitadas más antiguas del sur, crecida en círculos concéntricos alrededor del templo de Meenakshi Amman, con sus catorce torres cubiertas de divinidades pintadas.',
    percheAndarci:
      'El Meenakshi es el templo más vivo de la India del sur: fieles, músicos, elefantes y ceremonias a todas horas, y la procesión de la noche.',
    cosaVedere: [
      'El templo de Meenakshi Amman, el estanque del loto de oro y el corredor de las mil columnas',
      'El palacio Thirumalai Nayak',
      'El mercado de flores de Mattuthavani al amanecer',
    ],
    cosaFare: ['Asistir a la ceremonia de la noche en el templo', 'Beber un jigarthanda', 'Hacerse coser un vestido en el día en los sastres cerca del templo'],
    doveDormire: 'Hoteles de ciudad cerca del templo; hoteles heritage en las colinas de los alrededores.',
    doveMangiare: 'Parotta con curry de cordero, cocina del Chettinad, idli y dosa por la mañana, jigarthanda.',
    comeArrivare: "Desde Thanjavur en coche o en tren; el aeropuerto de Madurai tiene vuelos nacionales.",
    comeSpostarsi: 'A pie alrededor del templo, tuk-tuk para el resto.',
    periodoMigliore: 'diciembre-febrero; desde marzo hace mucho calor.',
    costi: "Meenakshi entrada libre (los santuarios principales están reservados a los hindúes); consigna de teléfonos con una pequeña tarifa.",
    erroriDaEvitare: [
      "Ignorar las normas sobre los teléfonos: en el Meenakshi están prohibidas las fotos y los vídeos y el teléfono se deja en la consigna o se lleva apagado, según las indicaciones del momento",
      "Ir al templo sin mirar los horarios: suele cerrar unas horas a mediodía",
    ],
    luoghi: [
      {
        nome: "Templo de Meenakshi Amman",
        testo: "Un templo-ciudad con catorce gopurams cubiertos de miles de estatuas pintadas, dedicado a la diosa Meenakshi y a Shiva (Sundareswarar). Dentro están el estanque del loto de oro y la sala de las mil columnas, que en realidad tiene 985 talladas, y ceremonias durante todo el día.",
        come: "Cuatro entradas, una por lado. Zapatos en la consigna; teléfono en la consigna o apagado según las normas del momento, fotos prohibidas. Ropa que cubra hombros y piernas. Los santuarios principales están reservados a los hindúes.",
        quando: "Normalmente abierto desde primera hora hasta mediodía y desde la tarde hasta la noche; los horarios cambian en las fiestas. Cada noche una procesión lleva en palanquín las huellas de Shiva a la cámara de Meenakshi.",
        tempo: "2-3 horas",
        costo: "entrada libre; pequeña tarifa por la consigna de teléfonos",
        consiglio: "Volver dos veces: por la mañana para la arquitectura y por la noche para las ceremonias."
      },
      {
        nome: "Palacio de Thirumalai Nayak",
        testo: "El palacio del rey Thirumalai Nayak, terminado hacia 1636, con un patio rodeado de enormes columnas blancas de unos 25 metros y grandes arcos. Hoy queda más o menos una cuarta parte, pero basta para dar la medida.",
        come: "A unos 2 kilómetros al sureste del templo, a pie o en tuk-tuk.",
        quando: "Mañana o última hora de la tarde. Por la noche hay un espectáculo de luz y sonido, en tamil y en inglés, sobre la historia del Silappathikaram.",
        tempo: "1 hora",
        consiglio: "Encaja bien por la mañana, antes de volver al templo por la noche."
      },
      {
        nome: "El mercado de flores de Mattuthavani",
        testo: "El mercado mayorista de flores: montañas de jazmín, caléndulas y rosas vendidas al peso para los templos, las bodas y las trenzas de las mujeres.",
        come: "Cerca de la estación de autobuses de Mattuthavani, en tuk-tuk.",
        quando: "Al amanecer, cuando llegan los cargamentos.",
        tempo: "1 hora",
        costo: "gratis",
        consiglio: "Ir temprano: a media mañana lo mejor ya ha pasado."
      },
      {
        nome: "Gandhi Memorial Museum",
        testo: "Un museo sobre la lucha por la independencia en el antiguo palacio de la reina Rani Mangammal, con la tela manchada de sangre que Gandhi llevaba el día en que lo mataron (según algunos, una réplica).",
        come: "En tuk-tuk, cerca de la Collector Office.",
        quando: "De día; horarios en la web del museo (gandhimmm.org).",
        tempo: "1 hora",
        consiglio: "Una pausa tranquila entre las dos visitas al templo."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mercado de flores al amanecer",
          "Templo de Meenakshi por la mañana",
          "Palacio de Thirumalai Nayak",
          "Jigarthanda por la tarde",
          "Vuelta al templo para la ceremonia de la noche"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "El día de arriba",
          "Día 2: Gandhi Memorial Museum",
          "Talleres de sastres y mercados alrededor del templo",
          "Salida hacia Munnar por la tarde"
        ]
      }
    ],
    zone: [
      {
        nome: "Alrededor del templo",
        perChi: "quien quiere ir al Meenakshi a pie",
        testo: "Hoteles sencillos y de gama media en las calles alrededor del templo, algunos con terraza frente a las torres. Ruidoso, pero comodísimo para las visitas al amanecer y por la noche."
      },
      {
        nome: "Colinas alrededor de la ciudad",
        perChi: "calma y piscina",
        testo: "Hoteles heritage y resorts en las alturas a 5-10 kilómetros, con vistas a la ciudad. Hace falta coche para cada desplazamiento."
      }
    ],
    sapori: [
      {
        nome: "Jigarthanda",
        testo: "La bebida fría de Madurai: leche, goma de almendra, sirope y helado. En los puestos históricos alrededor del templo."
      },
      {
        nome: "Parotta con salna",
        testo: "Pan hojaldrado y frito en la plancha, servido con un curry ligero de cordero o pollo. En los restaurantes que abren hasta tarde."
      },
      {
        nome: "Kari dosa",
        testo: "Una dosa gruesa con carne picada de cordero y huevo por encima, la especialidad nocturna de Madurai."
      },
      {
        nome: "Idli",
        testo: "Pastelitos de arroz al vapor, muy tiernos, con varios chutneys: en Madurai se comen en el desayuno y en la cena."
      }
    ],
    attenzioni: [
      "En el Meenakshi están prohibidas las fotos y los vídeos y el teléfono va a la consigna o se queda apagado: desde septiembre de 2026 las normas en los grandes templos de Tamil Nadu han cambiado varias veces.",
      "Quien os invita a subir a una terraza «para ver el templo desde arriba» a menudo os lleva a una tienda de tejidos.",
      "A mediodía el templo suele cerrar unas horas: programad las visitas por la mañana y por la tarde-noche.",
      "Desde marzo el calor es muy fuerte: agua y sombrero.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Una de las torres pintadas del templo de Meenakshi en Madurai, cubierta de estatuas de colores',
    immagine: '/images/viaggi/india-sud-taj-mahal/giorno-05-madurai.jpg',
  },
  {
    slug: 'munnar',
    paeseSlug: 'india',
    ordine: 12,
    nome: 'Munnar',
    tipologia: ['montagna', 'piantagioni di tè', 'natura'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: false,
    introduzione:
      'Una estación de montaña a unos 1.600 metros en los Ghats Occidentales de Kerala, rodeada de plantaciones de té que cubren las colinas hasta donde alcanza la vista.',
    percheAndarci:
      'Por el fresco después de las llanuras, los paseos entre el té, el tahr de los Nilgiri en Eravikulam y los amaneceres sobre las nubes en Kolukkumalai.',
    cosaVedere: [
      'El Parque nacional de Eravikulam y el tahr de los Nilgiri',
      'El museo del té de Tata (KDHP)',
      'Las plantaciones de Kolukkumalai al amanecer',
      'Los miradores de Top Station y las presas de Mattupetty',
    ],
    cosaFare: ['Un trekking guiado entre las plantaciones', 'El amanecer en Kolukkumalai en jeep', 'Comprar té directamente en las fábricas'],
    doveDormire: 'Homestays y resorts fuera del pueblo, entre las plantaciones.',
    doveMangiare: 'Cocina de Kerala en los homestays, a menudo la mejor de la zona.',
    comeArrivare: "Desde Kochi unos 130 kilómetros de carretera de montaña; desde Madurai se cruzan los Ghats: en ambos casos, media jornada en coche.",
    comeSpostarsi: 'Coche con conductor y jeeps locales.',
    periodoMigliore: "septiembre-mayo; junio y julio son los meses más lluviosos, y con el monzón hay desprendimientos y carreteras cortadas.",
    costi: "Eravikulam 500 rupias para los extranjeros más 50 por la cámara (web oficial, 2026); jeep a Kolukkumalai a acordar.",
    erroriDaEvitare: ['Llegar en febrero-marzo contando con Eravikulam, cerrado por los nacimientos', 'Dormir en el pueblo, con tráfico y ruidoso'],
    luoghi: [
      {
        nome: "Parque nacional de Eravikulam",
        testo: "Praderas de altura y bosque en torno a los 2.000 metros, donde vive la mayor población de tahr del Nilgiri, una cabra de montaña que solo existe en los Nilgiri y en la parte sur de los Ghats Occidentales. En el parque está también el Anamudi, 2.695 metros, la cumbre más alta del sur de la India.",
        come: "A 13 kilómetros de Munnar. Dentro del parque se camina por carreteras y senderos de la zona turística de Rajamala. Entradas en línea en la web oficial o en la ventanilla del centro de información de Munnar.",
        quando: "Entradas de 8 a 14 (web oficial, 2026). Cerrado cada año por los partos de los tahr, entre febrero y marzo, a veces hasta primeros de abril: la propia web da fechas distintas, así que conviene comprobarlo antes de salir. Mejor a la apertura, antes de las nubes y de la cola.",
        tempo: "medio día",
        costo: "500 rupias para los extranjeros, más 50 por la cámara de fotos (2026)",
        url: "https://www.eravikulamnationalpark.in/",
        consiglio: "Reservar online los fines de semana y en los festivos indios: las plazas se agotan."
      },
      {
        nome: "Museo del té de KDHP",
        testo: "El museo del té de Tata en la finca de Nallathanni, con máquinas históricas y una pequeña demostración del procesado de las hojas.",
        come: "A 2 kilómetros del pueblo, en tuk-tuk.",
        quando: "De día. Varias fuentes indican que cierra los lunes: comprobarlo antes de ir.",
        tempo: "1 hora",
        consiglio: "Probar los tés al final y comprarlos aquí, a precio de fábrica."
      },
      {
        nome: "Kolukkumalai",
        testo: "Una plantación de té a unos 2.170 metros, entre las más altas del mundo, del lado de Tamil Nadu pero accesible solo desde Munnar. Al amanecer las colinas salen de las nubes.",
        come: "En jeep 4x4 desde Suryanelli, por una pista de tierra empinada. Los jeeps se reservan con el hotel.",
        quando: "Salida antes del amanecer, de noche.",
        tempo: "medio día",
        consiglio: "Dejar muy claro qué incluye el precio del jeep: espera, entrada a la finca y vuelta."
      },
      {
        nome: "Top Station y la presa de Mattupetty",
        testo: "Un mirador en el borde de los Ghats, cerca de la frontera con Tamil Nadu, que mira las llanuras desde arriba. Por el camino están la presa de Mattupetty, el Echo Point y plantaciones hasta donde alcanza la vista.",
        come: "En coche desde Munnar, con paradas por el camino.",
        quando: "Por la mañana, antes de que suba la bruma.",
        tempo: "medio día",
        consiglio: "Los fines de semana los miradores están llenos: mejor un día laborable."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Eravikulam a la hora de apertura",
          "Museo del té de KDHP",
          "Paseo entre las plantaciones por la tarde"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: amanecer en Kolukkumalai en jeep, vuelta y descanso",
          "Tarde en el museo del té",
          "Día 2: Eravikulam por la mañana",
          "Mattupetty y Top Station por la tarde"
        ]
      }
    ],
    zone: [
      {
        nome: "Entre las plantaciones (Chithirapuram, Pallivasal)",
        perChi: "quien busca silencio",
        testo: "Homestays y resorts en las colinas fuera del pueblo, con vistas a las plantaciones. Silencio total, pero hace falta coche y se cena donde se duerme."
      },
      {
        nome: "Munnar pueblo",
        perChi: "quien se mueve en transporte público",
        testo: "Hoteles baratos y restaurantes en el centro, con jeeps y tuk-tuk a mano. Con tráfico y ruidoso."
      },
      {
        nome: "Chinnakanal y Suryanelli",
        perChi: "quien va a Kolukkumalai",
        testo: "Más lejos, hacia el este, cerca del lago de Anayirangal. Cómodo para el amanecer en jeep, aislado para todo lo demás."
      }
    ],
    sapori: [
      {
        nome: "Cocina de los homestays",
        testo: "Curry de verduras y de pollo, arroz y pan casero: muchas veces es la mejor comida de la zona."
      },
      {
        nome: "Puttu y kadala",
        testo: "Cilindros de arroz y coco cocidos al vapor, con curry de garbanzos negros. El desayuno de Kerala."
      },
      {
        nome: "Appam",
        testo: "Crepe de arroz fermentado, crujiente por los bordes y esponjosa en el centro, con guiso de verduras o de pollo."
      },
      {
        nome: "Té y cardamomo",
        testo: "Té negro de las colinas y cardamomo de las plantaciones cercanas, para comprar directamente en las fábricas y en las cooperativas."
      }
    ],
    attenzioni: [
      "Eravikulam cierra cada año entre febrero y marzo, a veces hasta primeros de abril, por los partos de los tahr.",
      "Con el monzón, sobre todo en junio y julio, lluvias fuertes, desprendimientos y carreteras cortadas; en las estaciones húmedas hay sanguijuelas en los senderos.",
      "Los jeeps a Kolukkumalai tienen precios muy variables: que os lo detallen todo antes de salir.",
      "Los fines de semana y en los festivos indios llegan muchos turistas de Kerala y Tamil Nadu: tráfico y colas.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Las colinas de Munnar cubiertas de plantaciones de té, con filas ordenadas de arbustos verdes',
    immagine: '/images/india/munnar.jpg',
  },
  {
    slug: 'backwaters-alleppey',
    paeseSlug: 'india',
    ordine: 13,
    nome: 'Backwaters de Alleppey',
    tipologia: ['lagune', 'natura', 'houseboat'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: false,
    introduzione:
      'La red de canales, lagunas y lagos de Kerala que corre paralela al mar entre Alappuzha (Alleppey), Kumarakom y Kollam, con arrozales bajo el nivel del agua y pueblos sobre franjas de tierra.',
    percheAndarci:
      'Para una noche en una houseboat de madera y bambú, mirando la vida de los pueblos desde el agua, o para un paseo en canoa por los canales más estrechos.',
    cosaVedere: ['Los canales y arrozales de Kuttanad', 'El lago Vembanad', 'Los pueblos de Kainakary en los canales pequeños'],
    cosaFare: ['Una noche en houseboat (kettuvallam)', 'Un paseo en canoa al amanecer por los canales estrechos', 'Las regatas de las barcas-serpiente, si se viaja en agosto'],
    doveDormire: 'Houseboat, o bien homestays en los canales de Kainakary o Kumarakom.',
    doveMangiare: 'El karimeen (pearl spot) a la parrilla, el curry de pescado y el arroz rojo de Kerala, preparados por el cocinero de a bordo.',
    comeArrivare: "Desde Kochi 1-2 horas en coche según el tráfico; desde Munnar media jornada de carretera.",
    comeSpostarsi: 'En barca.',
    periodoMigliore: 'octubre-marzo.',
    costi: "Houseboat: el precio cambia mucho según el tipo de barco, el número de camarotes y la temporada, normalmente con las comidas incluidas. El mostrador de prepago del DTPC en Alappuzha aplica tarifas controladas.",
    erroriDaEvitare: [
      'Reservar con los captadores de los muelles sin ver la barca',
      'Esperar aire acondicionado de día: a menudo funciona solo de noche',
      'Quedarse solo en los canales principales, llenos de barcas',
    ],
    luoghi: [
      {
        nome: "Una noche en houseboat",
        testo: "El kettuvallam era el barco de carga que llevaba arroz y especias de Kuttanad al puerto de Kochi; cuando llegaron los camiones se convirtió en casa flotante, con camarotes, cocinero y tripulación. Se navega por el lago Vembanad y los canales de Kuttanad, mirando pueblos, arrozales e iglesias desde el agua.",
        come: "Se sale de los muelles de Alappuzha. Mejor barcos registrados en el turismo de Kerala, reservados en el mostrador de prepago del DTPC o con operadores serios, vistos en fotos recientes.",
        quando: "De octubre a marzo. Embarque a mediodía, desembarque a la mañana siguiente; por la noche el barco amarra.",
        tempo: "una noche",
        costo: "muy variable según el barco y la temporada, comidas normalmente incluidas: pedir el presupuesto por escrito",
        url: "https://www.keralatourism.org/houseboat/",
        consiglio: "Pedir un itinerario que deje los canales principales, donde los barcos van en fila."
      },
      {
        nome: "En canoa por los canales estrechos",
        testo: "Las canoas de remo entran en los canales por donde los houseboats no pasan: se ven de cerca las casas, las mujeres lavando, los niños que van al colegio en barca.",
        come: "Con homestays y pequeños operadores de Kainakary y Alappuzha, con un remero.",
        quando: "Al amanecer, cuando los canales están en calma y llenos de pájaros.",
        tempo: "2-3 horas",
        consiglio: "Si solo tenéis un día, la canoa al amanecer da más que el houseboat."
      },
      {
        nome: "Las regatas de barcas serpiente",
        testo: "Barcas de más de 30 metros con decenas de remeros que cantan en coro. La más famosa es la Nehru Trophy, en el lago Punnamada, en un recorrido de unos 1,4 kilómetros.",
        come: "Tribunas de pago en el lago Punnamada, en Alappuzha; información en la web oficial de la regata.",
        quando: "La Nehru Trophy se corre normalmente en agosto, durante el monzón (por tradición el segundo sábado del mes, pero la fecha cambia: en 2024 se aplazó a septiembre).",
        tempo: "una jornada",
        consiglio: "Para quien viaja en agosto, ya justifica el viaje por sí sola."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Canoa al amanecer por los canales de Kainakary",
          "Comida con karimeen y arroz rojo",
          "Tarde en barca por el lago Vembanad"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: embarque en el houseboat a mediodía, navegación y noche a bordo",
          "Día 2: desembarque por la mañana",
          "Canoa por los canales pequeños",
          "Tarde en la playa de Marari o salida hacia Kochi"
        ]
      }
    ],
    zone: [
      {
        nome: "Houseboat",
        perChi: "una noche",
        testo: "La noche a bordo es el motivo del viaje. Camarotes pequeños y aire acondicionado muchas veces solo de noche."
      },
      {
        nome: "Kainakary y Kuttanad",
        perChi: "quien quiere los pueblos",
        testo: "Homestays en los canales, a los que se llega en barca. Silencio, cocina casera y canoa al amanecer, pero lejos de todo."
      },
      {
        nome: "Kumarakom",
        perChi: "resorts con piscina",
        testo: "En la orilla este del lago Vembanad, con resorts de gama alta. Cómodo y cuidado, con menos vida de pueblo."
      },
      {
        nome: "Playa de Marari",
        perChi: "mar y backwaters",
        testo: "Al norte de Alappuzha, homestays y resorts en la playa. Buena para alternar canales y mar."
      }
    ],
    sapori: [
      {
        nome: "Karimeen pollichathu",
        testo: "El pearl spot, pez de las lagunas, marinado en especias y cocinado en una hoja de banano. A bordo y en las casas de comidas de los canales."
      },
      {
        nome: "Curry de pescado con arroz rojo",
        testo: "Pescado en salsa roja con tamarindo kudampuli y el arroz rojo de Kuttanad, cultivado por debajo del nivel del agua."
      },
      {
        nome: "Comida de las toddy shops",
        testo: "Las tabernas del vino de palma (kallu shappu) sirven pescado picante, tapioca y pato. Ambiente muy local."
      },
      {
        nome: "Curry de pato",
        testo: "Los patos criados en los arrozales acaban en un guiso de coco y pimienta, un plato de las backwaters."
      }
    ],
    attenzioni: [
      "Los captadores en los muelles: reservad viendo el barco o fotos recientes, mejor en el mostrador de prepago del DTPC en Alappuzha o con barcos registrados en el turismo de Kerala.",
      "El aire acondicionado del camarote a menudo funciona solo de noche: preguntadlo antes.",
      "Los canales principales están llenos de houseboats en fila: pedid rutas secundarias.",
      "Mosquitos por la noche: repelente y manga larga.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Una houseboat de madera y bambú en un canal de los backwaters de Kerala entre cocoteros',
    immagine: '/images/viaggi/india-sud-taj-mahal/giorno-09-backwaters-alleppey.jpg',
  },
  {
    slug: 'fort-kochi',
    paeseSlug: 'india',
    ordine: 14,
    nome: 'Fort Kochi',
    tipologia: ['città coloniale', 'cultura', 'mare'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: false,
    introduzione:
      'El barrio histórico de Kochi, puerto de las especias durante siglos, marcado por portugueses, holandeses e ingleses, con las redes de pesca chinas en el paseo marítimo y el barrio judío de Mattancherry.',
    percheAndarci:
      'Por la ciudad más cosmopolita de Kerala, para recorrer a pie entre iglesias, sinagogas, almacenes de especias y galerías de arte, con el kathakali por la noche.',
    cosaVedere: [
      'Las redes de pesca chinas',
      'La iglesia de San Francisco',
      'El Palacio holandés de Mattancherry con los frescos del Ramayana',
      'La sinagoga Paradesi y Jew Town',
      'Los almacenes de especias',
    ],
    cosaFare: ['Un espectáculo de kathakali', 'Un curso de cocina de Kerala', 'Comprar el pescado en el mercado junto a las redes y pedir que lo cocinen'],
    doveDormire: 'Homestays de gestión familiar y hoteles heritage en los bungalows coloniales.',
    doveMangiare: 'Appam con estofado, fish moilee, karimeen a la parrilla, café en las galerías.',
    comeArrivare: "Desde el aeropuerto internacional de Kochi una hora o más en coche, según el tráfico; desde Alleppey 1-2 horas.",
    comeSpostarsi: 'A pie y en bici, ferri a Ernakulam.',
    periodoMigliore: "octubre-marzo; la Bienal de Kochi, más o menos cada dos años, abre en diciembre y dura unos tres meses (la última: 12 de diciembre de 2025-31 de marzo de 2026).",
    costi: "Kathakali, palacio y sinagoga tienen entradas modestas; tarifas en las taquillas.",
    erroriDaEvitare: [
      "Llegar a Mattancherry en viernes: la sinagoga está cerrada y también el palacio, según la mayoría de las fuentes",
      "Comprar especias y «antigüedades» sin regatear",
    ],
    luoghi: [
      {
        nome: "Las redes de pesca chinas",
        testo: "Grandes redes de balancín de al menos 10 metros de alto, manejadas por equipos de hasta seis pescadores con contrapesos de piedra colgados de cuerdas. Son el símbolo de Fort Kochi, en el paseo marítimo.",
        come: "A pie por el paseo marítimo de Vasco da Gama Square.",
        quando: "A última hora de la tarde y al atardecer, cuando las redes trabajan a contraluz.",
        tempo: "45 minutos",
        costo: "gratis",
        consiglio: "En el mercado de pescado de al lado se compra la captura y la cocinan los restaurantes de detrás."
      },
      {
        nome: "Iglesia de San Francisco",
        testo: "Una de las iglesias europeas más antiguas de la India: nació en 1503 como iglesia portuguesa de madera y se reconstruyó en mampostería en las primeras décadas del siglo XVI. Aquí fue enterrado Vasco da Gama, muerto en Kochi en 1524; catorce años después sus restos volvieron a Lisboa.",
        come: "En el centro de Fort Kochi, a pie. Se entra en silencio y con ropa que cubra.",
        quando: "De día, fuera del horario de misas.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Buscar en el suelo el lugar del primer entierro de Vasco da Gama."
      },
      {
        nome: "Palacio de Mattancherry",
        testo: "El palacio que los portugueses regalaron al rey de Kochi hacia 1545, llamado también «Palacio holandés» porque desde 1663 Mattancherry pasó a los holandeses. Dentro están las pinturas murales del Ramayana, entre las obras maestras de la pintura mural de Kerala.",
        come: "En Mattancherry, a pocos kilómetros del centro de Fort Kochi, en tuk-tuk o bici.",
        quando: "Casi todas las fuentes indican que cierra los viernes, algunas también los sábados; horario con pausa a mediodía. Comprobarlo en la web del ASI antes de ir.",
        tempo: "1 hora",
        consiglio: "Las salas de los frescos están oscuras: dad tiempo a los ojos para acostumbrarse."
      },
      {
        nome: "La sinagoga Paradesi y Jew Town",
        testo: "La sinagoga de 1568, todavía en uso, con el suelo de cientos de azulejos chinos de porcelana del siglo XVIII, pintados a mano y todos distintos, y lámparas de vidrio belga. Alrededor, Jew Town es una calle de anticuarios y tiendas de especias.",
        come: "Junto al palacio de Mattancherry, a pie. Se entra descalzo; los hombres con camisa y pantalón largo, las mujeres con falda por debajo de la rodilla.",
        quando: "Abierta por la mañana y a última hora de la tarde, con una larga pausa; cerrada los viernes, los sábados y en las fiestas judías (según algunas fuentes también los domingos). Comprobar los horarios antes de ir.",
        tempo: "30 minutos",
        consiglio: "Palacio y sinagoga se ven juntos en una mañana, nunca en viernes ni en sábado."
      },
      {
        nome: "Los almacenes de especias",
        testo: "A lo largo de Bazaar Road y Jew Town están los viejos almacenes de pimienta y jengibre, algunos todavía en activo y otros convertidos en galerías y cafés.",
        come: "A pie o en bici desde Mattancherry hacia Fort Kochi.",
        quando: "Por la mañana, cuando se trabaja.",
        tempo: "1 hora",
        consiglio: "Para comprar especias, comparar precios en varias tiendas: la diferencia es grande."
      },
      {
        nome: "Un espectáculo de kathakali",
        testo: "El teatro danzado de Kerala, con maquillajes elaborados, faldas amplias e historias de los poemas épicos contadas con gestos y miradas. En los teatros de Fort Kochi también se puede ver el maquillaje antes del espectáculo.",
        come: "En los centros culturales de Fort Kochi, con entrada reservada el mismo día o el anterior.",
        quando: "Por la tarde-noche; en muchos teatros el maquillaje de los actores empieza antes del espectáculo y se puede mirar. Horarios en el teatro.",
        tempo: "unas 2 horas con el maquillaje",
        consiglio: "Llegar para el maquillaje: es la mitad del espectáculo."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mattancherry: palacio y sinagoga (ni en viernes ni en sábado)",
          "Jew Town y los almacenes de especias",
          "Iglesia de San Francisco",
          "Redes de pesca chinas al atardecer",
          "Kathakali por la noche",
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "El día de arriba",
          "Día 2: un curso de cocina de Kerala por la mañana",
          "Galerías y cafés de Fort Kochi",
          "Ferri a Ernakulam y vuelta al atardecer"
        ]
      }
    ],
    zone: [
      {
        nome: "Fort Kochi",
        perChi: "quien quiere el barrio histórico",
        testo: "Homestays y hoteles heritage en bungalows coloniales, todo a pie. Tranquilo por la noche, a una hora o más del aeropuerto."
      },
      {
        nome: "Mattancherry",
        perChi: "quien quiere el barrio judío",
        testo: "Pocas guesthouses cerca del palacio y de la sinagoga. Animado de día, se vacía por la noche."
      },
      {
        nome: "Ernakulam",
        perChi: "quien llega o sale en tren",
        testo: "La ciudad moderna en tierra firme, con estación y hoteles de cadena. Cómoda para el transporte; a Fort Kochi se va en ferri."
      }
    ],
    sapori: [
      {
        nome: "Appam con guiso",
        testo: "Crepe de arroz fermentado con un guiso de verduras, pollo o cordero con leche de coco. El desayuno de los cristianos de Kerala."
      },
      {
        nome: "Fish moilee",
        testo: "Pescado en una salsa ligera de coco, cúrcuma y hojas de curry, de origen portugués. En muchos restaurantes de Fort Kochi."
      },
      {
        nome: "Kerala parotta y beef fry",
        testo: "Pan hojaldrado con ternera salteada con coco y especias, un plato popular en Kerala, donde sí se come ternera."
      },
      {
        nome: "Chips de plátano",
        testo: "Láminas de plátano verde fritas en aceite de coco, saladas o dulces, recién hechas en las tiendas del bazar."
      }
    ],
    attenzioni: [
      "La sinagoga Paradesi cierra los viernes, los sábados y en las fiestas judías; el palacio de Mattancherry normalmente los viernes.",
      "Los tuk-tuks que ofrecen una vuelta por casi nada os llevan a tiendas de especias y tejidos con comisión.",
      "Especias y «antigüedades» de Jew Town: regatear, y desconfiar de las antigüedades certificadas.",
      "Mosquitos y casos de dengue en la estación de lluvias: repelente.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Las redes de pesca chinas en el paseo marítimo de Fort Kochi al atardecer',
    immagine: '/images/india/fort-kochi.jpg',
  },
  {
    slug: 'hampi',
    paeseSlug: 'india',
    ordine: 15,
    nome: 'Hampi',
    tipologia: ['patrimonio UNESCO', 'rovine', 'paesaggio'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: false,
    introduzione:
      'Las ruinas de Vijayanagara, capital de uno de los mayores imperios de la India, destruida en 1565, en un paisaje de bloques de granito, arrozales y bananales a lo largo del río Tungabhadra.',
    percheAndarci: "Por más de 1.600 restos de monumentos en un paisaje que no se parece a ningún otro, con un pueblo tranquilo y los atardeceres desde las colinas de roca.",
    cosaVedere: [
      'El templo de Virupaksha, todavía activo',
      'El templo de Vittala y el carro de piedra',
      'El Centro real, el recinto de las reinas con el Lotus Mahal y las cuadras de los elefantes',
      'El bazar de Hampi y la colina de Hemakuta',
      'La colina de Matanga al atardecer',
    ],
    cosaFare: ['Recorrer en moto o en bici entre los grupos de monumentos', 'Un paseo en coracle por el Tungabhadra', 'Escalada sobre los bloques con guías locales'],
    doveDormire: 'Guesthouses sencillas en el bazar; resorts al otro lado del río en Virupapur Gaddi y Hanumanahalli, o cerca de Kamalapura.',
    doveMangiare: "Thalis y café en las terrazas; en el bazar la cocina es sobre todo vegetariana.",
    comeArrivare: "Tren nocturno de Bangalore a Hosapete y luego 13 kilómetros en tuk-tuk; también está el aeropuerto de Vidyanagar (Jindal), con pocos vuelos nacionales.",
    comeSpostarsi: 'Moto, bicicleta o tuk-tuk por jornada.',
    periodoMigliore: 'octubre-febrero; desde marzo el calor sobre el granito se vuelve pesado.',
    costi: "Vittala y recinto de las reinas con entrada ASI para extranjeros: tarifas en la taquilla, porque las fuentes de 2026 no coinciden. El resto del sitio es en gran parte de acceso libre. Coracle a precio a acordar.",
    erroriDaEvitare: ['Visitar los sitios a mediodía', 'Contar con la barca para Virupapur Gaddi en época de crecida'],
    luoghi: [
      {
        nome: "Templo de Virupaksha",
        testo: "El templo de Shiva todavía activo en el bazar de Hampi, con el gopuram de nueve pisos y 50 metros de alto que se ve desde todo el valle. El culto aquí sigue sin interrupción desde el siglo VII aproximadamente, antes del imperio de Vijayanagara.",
        come: "Al final del bazar, a pie. Zapatos en la consigna.",
        quando: "A primera hora, cuando los fieles llevan las ofrendas.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Ir temprano por la mañana y luego subir a Hemakuta, justo encima, para ver el gopuram desde arriba."
      },
      {
        nome: "Templo de Vittala y el carro de piedra",
        testo: "El templo más refinado de Hampi, del siglo XVI, con el carro de piedra y las columnas que suenan al golpearlas (hoy no se pueden tocar). Es uno de los símbolos del sitio UNESCO.",
        come: "Desde el aparcamiento no pasan los coches: se llega en los vehículos eléctricos o a pie. Entrada ASI en la taquilla.",
        quando: "A la apertura, antes del sol fuerte y de los grupos. Las fuentes dan horarios distintos: comprobarlos en la taquilla.",
        tempo: "1 hora y media",
        costo: "entrada ASI para extranjeros; tarifa y validez para el recinto de las reinas en la taquilla",
        url: "https://asi.nic.in/",
        consiglio: "Ir a pie desde el bazar por la orilla del río: un par de kilómetros entre ruinas y rocas."
      },
      {
        nome: "El Centro real",
        testo: "El corazón político de la capital: la plataforma de tres niveles de Mahanavami Dibba, el gran estanque escalonado de granito y el templo de Hazara Rama, con los frisos que narran el Ramayana.",
        come: "A unos kilómetros del bazar, hacia Kamalapura, en bici, moto o tuk-tuk.",
        quando: "Por la mañana o a última hora de la tarde.",
        tempo: "2 horas",
        consiglio: "Dejar tiempo para el Hazara Rama: los frisos son el libro ilustrado de la ciudad."
      },
      {
        nome: "El recinto de las reinas y los establos de los elefantes",
        testo: "El Lotus Mahal, un pabellón de dos pisos con torres piramidales y una cúpula en forma de capullo de loto, y al lado los establos de los elefantes reales: once cámaras en fila, casi todas cubiertas por cúpulas. Cerca hay una torre de vigilancia.",
        come: "Junto al Centro real. Entrada ASI: preguntar en la taquilla si vale también para el Vittala el mismo día.",
        quando: "Por la tarde, después del Vittala por la mañana.",
        tempo: "1 hora",
        costo: "entrada ASI para extranjeros, tarifa en la taquilla",
        url: "https://asi.nic.in/",
        consiglio: "Llevar la entrada en el bolsillo: la controlan."
      },
      {
        nome: "Las colinas de Hemakuta y Matanga",
        testo: "Hemakuta es una colina de roca sobre el bazar con más de treinta pequeños templos. Matanga es la colina más panorámica del sitio: en la cima está el templo de Virabhadra, y se ven el río, los arrozales y las ruinas entre las rocas.",
        come: "A pie desde el bazar. Hemakuta es fácil; Matanga es una subida empinada por escalones y roca.",
        quando: "Hemakuta al atardecer; Matanga al amanecer, saliendo de noche con una linterna.",
        tempo: "1-2 horas",
        costo: "gratis",
        consiglio: "No subir a Matanga solos de noche: id en grupo o con un guía local."
      },
      {
        nome: "El coracle en el Tungabhadra",
        testo: "Las barcas redondas de bambú trenzado, que se usan desde hace siglos para cruzar el río. La vuelta pasa entre rocas y templos en las orillas.",
        come: "En los embarcaderos a lo largo del río. Precio a acordar antes.",
        quando: "Cuando el río está en calma; con la crecida del monzón se paran.",
        tempo: "30-45 minutos",
        costo: "a acordar con el barquero",
        consiglio: "Pedir siempre el chaleco salvavidas."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Vittala a la hora de apertura, llegando a pie por la orilla del río",
          "Coracle en el Tungabhadra",
          "Tarde en el Centro real y en el recinto de las reinas",
          "Atardecer desde Hemakuta"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Virupaksha al amanecer, Vittala y el río, atardecer desde Hemakuta",
          "Día 2: amanecer desde Matanga",
          "Centro real, Hazara Rama, Lotus Mahal y establos de los elefantes",
          "Tarde en moto hacia los templos menores"
        ]
      }
    ],
    zone: [
      {
        nome: "Hampi Bazaar",
        perChi: "quien quiere tenerlo todo a pie",
        testo: "Guesthouses sencillas en el pueblo bajo el Virupaksha, a pie de muchos monumentos. Tranquilo, cocina sobre todo vegetariana."
      },
      {
        nome: "Virupapur Gaddi y Hanumanahalli",
        perChi: "quien busca relax",
        testo: "Al otro lado del río, entre arrozales y rocas, con resorts y cafés. El ferri depende del nivel del agua: con la crecida hay que dar un largo rodeo por carretera."
      },
      {
        nome: "Kamalapura y Hosapete",
        perChi: "hoteles con piscina y comodidades",
        testo: "Hoteles más grandes cerca del Centro real o en Hosapete, a 13 kilómetros. Cómodos; hace falta transporte para todo."
      }
    ],
    sapori: [
      {
        nome: "Thali en hoja de banano",
        testo: "Arroz, sambar, rasam, verduras y chapati servidos sobre una hoja, que rellenan todas las veces que queráis. En las casas de comidas del bazar y en los cafés de la orilla."
      },
      {
        nome: "Desayuno de Karnataka",
        testo: "Idli, vada y dosa con chutney de coco, o upma, en los locales del bazar desde el amanecer."
      },
      {
        nome: "Bisi bele bath",
        testo: "Arroz con lentejas, verduras y especias, cocido hasta quedar cremoso: un plato único de Karnataka."
      },
      {
        nome: "Plátano y caña de azúcar",
        testo: "Alrededor de Hampi se cultivan plátanos y caña de azúcar: zumo de caña recién exprimido y plátanos pequeños dulcísimos en los puestos."
      }
    ],
    attenzioni: [
      "No os bañéis en el Tungabhadra: las corrientes y las rocas son peligrosas.",
      "Para conducir una moto hace falta un permiso válido para motocicletas, con el permiso internacional, y casco.",
      "El ferry a Virupapur Gaddi no funciona cuando el río va crecido.",
      "Visitad los sitios por la mañana y a última hora de la tarde: a mediodía el granito al sol quema.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'El carro de piedra del templo de Vittala en Hampi, entre columnas esculpidas y bloques de granito',
    immagine: '/images/india/hampi.jpg',
  },
]
