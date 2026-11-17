import type { Destinazione } from '@/lib/types'

export const destinazioniPanama: Destinazione[] = [
  {
    slug: 'panama-city',
    paeseSlug: 'panama',
    ordine: 1,
    nome: 'Ciudad de Panamá',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      'Una capital con dos caras opuestas a pocos kilómetros de distancia: el skyline de rascacielos sobre la bahía y el Casco Viejo, el centro histórico colonial Patrimonio de la UNESCO, con sus plazas y sus rooftops.',
    percheAndarci:
      'Es el hub aéreo de toda Latinoamérica y la puerta de entrada obligada al país, y a diferencia de muchas capitales de la región merece un par de días.',
    cosaVedere: [
      'El Casco Viejo, con la Plaza de la Independencia y las iglesias coloniales',
      'Las esclusas de Miraflores en el Canal de Panamá, con el centro de visitantes y la terraza panorámica',
      'Las ruinas de Panamá Viejo, la ciudad original destruida por los piratas en 1671',
      'El Biomuseo firmado por Frank Gehry, en la Calzada de Amador',
      'El Parque Natural Metropolitano, selva tropical dentro de los límites de la ciudad',
    ],
    cosaFare: [
      'Visita a las esclusas del canal, mejor en los horarios de tránsito de los barcos (hay una ficha de experiencia dedicada)',
      'Aperitivo en uno de los rooftops del Casco Viejo al atardecer',
      'Excursión de un día a las islas Perlas o a Isla Taboga en ferri',
      'Excursión a Portobelo y a la costa caribeña, a unas 2 horas de la capital',
    ],
    doveDormire: 'Casco Viejo por el ambiente y la vida nocturna; zona de Marbella y Obarrio para hoteles más modernos y precios a menudo más bajos.',
    doveMangiare:
      'El sitio que no hay que saltarse es el Mercado de Mariscos en la bahía: en la planta de abajo se compra el pescado, en la de arriba lo cocinan, y un ceviche en vaso de plástico cuesta un par de dólares. El Casco Viejo tiene los rooftops y los restaurantes de autor, con precios de capital internacional; las fondas de barrio sirven el sancocho, la sopa de pollo con ñame que es el plato nacional, y la ropa vieja. Como comida callejera, para probar las carimañolas y las empanadas fritas en el desayuno.',
    comeArrivare: "Se aterriza en Tocumen (PTY), el hub de Copa Airlines y uno de los principales aeropuertos de las Américas. Desde el aeropuerto sale la línea 2 del metro, con un pasaje de unos 0,50 USD en la tarjeta recargable (unos 0,45 €); en taxi o Uber hasta el Casco Viejo hay 30-45 minutos, más con el tráfico de la tarde. Desde Belice hay vuelo directo de Copa desde Belize City, unas 2 horas y media, solo algunos días de la semana. Los vuelos internos a David y Bocas del Toro salen en cambio del aeropuerto de Albrook, en la ciudad: entre Albrook y Tocumen el taxi tarda 30-60 minutos.",
    comeSpostarsi: 'Metro (dos líneas, económico y funcional), Uber extendido y conveniente, taxis que hay que negociar siempre antes de subir.',
    periodoMigliore: 'mediados de diciembre-mediados de abril, estación seca; el resto del año llueve sobre todo por la tarde',
    costi: "Se paga en dólares estadounidenses (el balboa existe solo en monedas). Miraflores 17,22 USD para no residentes (unos 15 €), Biomuseo 20 USD (unos 17 €), Museo del Canal 15 USD (unos 13 €), Parque Natural Metropolitano 5 USD (unos 4 €). Económico: unos 45-60 € al día con albergue en el Casco Viejo, fondas y metro. Medio: 110-160 € con hotel en Bella Vista o El Cangrejo, Uber y algún museo. Alto: más de 250 € con hotel de diseño en el Casco y cenas en las azoteas.",
    erroriDaEvitare: [
      'Ir a las esclusas sin comprobar los horarios de tránsito: sin barcos en paso la visita pierde gran parte de su sentido',
      'Andar de noche fuera de las zonas turísticas del Casco Viejo, que linda con barrios que hay que evitar',
    ],
    miaEsperienza:
      'Del aeropuerto fuimos directos al Casco Viejo, y el primer impacto fue un skyline de rascacielos que no se parecía a nada de lo visto en las tres semanas anteriores. Al día siguiente, por la mañana, las esclusas de Miraflores: los horarios de tránsito de los barcos hay que comprobarlos antes, porque sin un barco maniobrando se mira una pileta de cemento vacía, mientras que un portacontenedores que entra con pocos centímetros de margen por cada lado vale por sí solo el desvío. Por la tarde las ruinas de Panamá Viejo y un paseo por el Casco Viejo, donde lo más interesante de mirar es el contraste entre edificios restaurados y fachadas todavía apuntaladas. Comimos en el Mercado de Mariscos con un ceviche en vaso de plástico de un par de dólares. Fuera de las zonas turísticas del Casco, después del atardecer, mejor no andar a pie.',
      "luoghi": [
        {
          "nome": "Esclusas de Miraflores",
          "testo": "Las esclusas del Canal de Panamá donde los barcos son elevados y descendidos entre los dos niveles, con centro de visitantes, museo y terraza panorámica.",
          "come": "Taxi por aplicación o traslado del hotel desde Ciudad de Panamá. Entrada al centro de visitantes.",
          "quando": "Mañana: conviene consultar antes los horarios de tránsito de los barcos, porque sin barco en maniobra se mira una cuenca vacía.",
          "tempo": "2-3 horas",
          "costo": "17,22 USD para no residentes desde 13 años, unos 15 €; 7,22 USD de 6 a 12 años (2026). Entradas también en línea.",
          "url": "https://visitcanaldepanama.com/",
          "consiglio": "Un portacontenedores entrando con pocos centímetros de margen a cada lado vale por sí solo el desvío.",
          "orari": "Todos los días 8-18; taquilla 8-17. Obras de modernización hasta finales de 2026, con posibles esperas.",
          "lat": 8.9957,
          "lng": -79.5905
        },
        {
          "nome": "Casco Viejo",
          "testo": "El centro histórico colonial, patrimonio UNESCO: Plaza de la Independencia, iglesias, palacios restaurados y fachadas aún apuntaladas, entre cafés y rooftops.",
          "come": "A pie una vez llegados; el barrio se recorre en un día.",
          "quando": "Mañana y atardecer; de noche quedarse en las calles turísticas.",
          "tempo": "Media jornada",
          "consiglio": "El contraste entre edificios restaurados y fachadas apuntaladas es lo más interesante de mirar. Fuera de las zonas turísticas, después del atardecer, mejor no caminar.",
          "costo": "Gratis.",
          "lat": 8.9525,
          "lng": -79.5347
        },
        {
          "nome": "Panamá Viejo",
          "testo": "Las ruinas de la ciudad original, fundada en 1519 y destruida en 1671 durante el asalto del corsario Henry Morgan, por un incendio cuyo autor sigue sin estar claro. Junto con el Casco Viejo es patrimonio UNESCO desde 1997.",
          "come": "Taxi por aplicación desde el centro.",
          "quando": "Martes a domingo, de 8:30 a 17:30 (taquilla hasta las 16:30); cerrado los lunes. En la mañana, antes del calor.",
          "tempo": "1-2 horas",
          "url": "https://www.patronatopanamaviejo.org/",
          "orari": "De martes a domingo 8:30-17:30, taquilla hasta las 16:30; cerrado los lunes.",
          "lat": 9.0072,
          "lng": -79.4884
        },
        {
          "nome": "Mercado de Mariscos",
          "testo": "El mercado de pescado cerca del Casco Viejo, con puestos de ceviche servido en vasos.",
          "come": "A pie desde el Casco Viejo.",
          "quando": "Almuerzo.",
          "tempo": "1 hora",
          "consiglio": "El ceviche se come en vaso de plástico, en el mostrador, por pocos dólares.",
          "lat": 8.9583,
          "lng": -79.539
        },
        {
          "nome": "Biomuseo",
          "testo": "El museo diseñado por Frank Gehry en la Calzada de Amador, sobre el surgimiento del istmo de Panamá y la biodiversidad. El edificio de techos de colores se ve desde lejos; dentro, las salas cuentan cómo el istmo, al unir dos continentes, cambió animales y corrientes.",
          "come": "Taxi o Uber.",
          "quando": "De martes a viernes de 9 a 15, sábados y domingos de 10 a 15; cerrado los lunes.",
          "tempo": "2 horas",
          "costo": "20 USD para adultos no residentes, unos 17 € (2026).",
          "url": "https://biomuseo.org/",
          "orari": "De martes a viernes 9-15, sábados y domingos 10-15; cerrado los lunes.",
          "lat": 8.9319,
          "lng": -79.5448
        },
        {
          "nome": "Museo del Canal Interoceánico",
          "testo": "El museo de la historia del canal, en un edificio del siglo XIX en la Plaza de la Independencia que fue sede de la compañía francesa del canal. Cuenta el intento fallido de los franceses, las obras estadounidenses, los miles de obreros muertos y el traspaso del canal a Panamá en 1999.",
          "come": "A pie en el Casco Viejo, en la plaza principal.",
          "quando": "Antes o después de Miraflores, para entender lo que se ve.",
          "tempo": "1-2 horas",
          "costo": "15 USD para adultos no residentes, unos 13 € (2026).",
          "orari": "De martes a domingo 9-18, taquilla hasta las 17:30; cerrado los lunes.",
          "lat": 8.9518,
          "lng": -79.5347,
          "url": "https://museodelcanal.com/"
        },
        {
          "nome": "Iglesia de San José y el altar de oro",
          "testo": "Una iglesia del Casco Viejo que guarda un altar barroco de madera dorada traído de Panamá Viejo. Según la tradición, lo pintaron de negro para esconderlo de los piratas de Henry Morgan en 1671.",
          "come": "A pie por la Avenida A, en el Casco Viejo.",
          "quando": "Por la mañana, fuera de los oficios.",
          "tempo": "20 minutos",
          "lat": 8.9514,
          "lng": -79.536,
          "consiglio": "Hombros y rodillas cubiertos: es una iglesia en uso."
        },
        {
          "nome": "Plaza de Francia y Las Bóvedas",
          "testo": "La plaza en la punta del Casco Viejo, con el obelisco dedicado a los franceses muertos en las obras del primer canal. Sobre las antiguas bóvedas de la muralla se camina por el Paseo Esteban Huertas, con vistas a la bahía y al skyline.",
          "come": "A pie, al fondo del Casco Viejo.",
          "quando": "Al final de la tarde y al atardecer.",
          "tempo": "30-45 minutos",
          "costo": "Gratis.",
          "lat": 8.9499,
          "lng": -79.5321
        },
        {
          "nome": "Cinta Costera",
          "testo": "El paseo marítimo construido sobre la bahía entre el Casco Viejo y Paitilla, con ciclovías, canchas deportivas y césped. Por la tarde se llena de gente que corre y pasea; desde aquí se tiene la mejor vista del skyline.",
          "come": "A pie desde el Mercado de Mariscos o el Casco Viejo; se alquilan bicicletas a lo largo del recorrido.",
          "quando": "Atardecer y primera hora de la noche, cuando baja el calor.",
          "tempo": "1-2 horas",
          "costo": "Gratis.",
          "lat": 8.959,
          "lng": -79.5379
        },
        {
          "nome": "Calzada de Amador",
          "testo": "La calzada, construida con las rocas excavadas para el canal, que une tierra firme con cuatro islotes en la entrada pacífica del canal. Se recorre a pie o en bicicleta viendo los barcos en espera y la ciudad desde el agua; al principio está el Biomuseo.",
          "come": "Taxi o Uber; bicicletas y carritos a pedales de alquiler al inicio de la calzada.",
          "quando": "Al final de la tarde y al atardecer.",
          "tempo": "2 horas",
          "costo": "Gratis.",
          "lat": 8.9178,
          "lng": -79.5339
        },
        {
          "nome": "Parque Natural Metropolitano",
          "testo": "Más de 200 hectáreas de bosque tropical seco dentro de la ciudad, con senderos y un mirador sobre la bahía y el canal. Se ven perezosos, tucanes, monos tití y ñeques a pocos minutos de los rascacielos.",
          "come": "Taxi o Uber hasta la entrada de la Avenida Juan Pablo II.",
          "quando": "A la apertura, cuando los animales están activos y hace menos calor.",
          "tempo": "2-3 horas",
          "costo": "5 USD para adultos extranjeros, unos 4 € (2026).",
          "orari": "Senderos abiertos todos los días 7-16:30, festivos incluidos.",
          "lat": 8.9854,
          "lng": -79.5467,
          "url": "https://www.parquemetropolitano.org/"
        },
        {
          "nome": "Cerro Ancón",
          "testo": "La colina más alta de la ciudad, con una gran bandera panameña en la cima. Estuvo dentro de la Zona del Canal administrada por Estados Unidos: hoy es un área verde que se sube a pie para ver el Casco Viejo, el puerto de Balboa y el Puente de las Américas.",
          "come": "Taxi hasta el inicio de la carretera de Quarry Heights y luego una media hora de subida a pie por asfalto.",
          "quando": "Temprano por la mañana, antes del calor.",
          "tempo": "1-2 horas",
          "costo": "Gratis.",
          "lat": 8.9576,
          "lng": -79.5492,
          "consiglio": "En la subida se ven a menudo perezosos y tucanes: subir despacio y mirar los árboles."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: esclusas de Miraflores con un barco en tránsito",
            "Almuerzo en el Mercado de Mariscos",
            "Tarde: Casco Viejo",
            "Atardecer en el mar desde la Cinta Costera"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Miraflores, Casco Viejo",
            "Día 2: Panamá Viejo, Biomuseo, Calzada de Amador"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Día 1: Miraflores por la mañana, Mercado de Mariscos, Casco Viejo y Museo del Canal",
            "Día 2: Parque Natural Metropolitano a la apertura, Panamá Viejo, atardecer en la Cinta Costera",
            "Día 3: Cerro Ancón por la mañana, Biomuseo y Calzada de Amador, o excursión a Isla Taboga"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Casco Viejo",
          "perChi": "ambiente y locales",
          "testo": "Hoteles y restaurantes en edificios restaurados, a pie. Más caros, ruidosos de noche los fines de semana."
        },
        {
          "nome": "Bella Vista y Obarrio",
          "perChi": "servicios y precios",
          "testo": "Un barrio de rascacielos, hoteles y restaurantes, bien conectado en taxi."
        },
        {
          "nome": "El Cangrejo",
          "perChi": "restaurantes y metro",
          "testo": "Barrio residencial en torno a la Vía Argentina, con cafés, restaurantes de todas las cocinas y parada de metro. Más tranquilo que el Casco por la noche."
        }
      ],
      "sapori": [
        {
          "nome": "Ceviche",
          "testo": "Pescado crudo marinado en lima, en el Mercado de Mariscos."
        },
        {
          "nome": "Sancocho",
          "testo": "Sopa de pollo con yuca y culantro, el plato nacional."
        },
        {
          "nome": "Arroz con pollo",
          "testo": "Arroz con pollo y verduras, en las fondas."
        },
        {
          "nome": "Patacones",
          "testo": "Plátano verde frito y aplastado, para acompañar los platos."
        }
      ],
      "attenzioni": [
        "El Foreign Office británico señala atracos también en el Casco Viejo, Panamá Viejo y la Avenida Central: al anochecer usar taxis por aplicación y no caminar solo por calles mal iluminadas.",
        "Antes de ir a Miraflores consultar los horarios de tránsito de los barcos.",
        "Los taxis suelen estar en mal estado y sin taxímetro: mejor las aplicaciones o el transporte del hotel."
      ],
      "gite": [
        {
          "nome": "Esclusas de Agua Clara",
          "distanza": "unos 80 km, en el lado caribeño cerca de Colón",
          "come": "En coche o tour de un día; entradas también en línea.",
          "testo": "El centro de visitantes de las esclusas nuevas, abiertas en 2016 para los barcos más grandes, con una terraza sobre el lago Gatún. Abierto todos los días 8-17, taquilla hasta las 15:30; 10 USD para adultos no residentes (unos 9 €)."
        },
        {
          "nome": "Portobelo",
          "distanza": "unas 2 horas por carretera, en la costa caribeña",
          "come": "En coche o tour de un día, a menudo combinado con una playa de la costa.",
          "testo": "El puerto español del que partían los convoyes con la plata del Perú, con los fuertes de la bahía patrimonio UNESCO y la iglesia del Cristo Negro. Es también un centro de la cultura congo, afropanameña."
        },
        {
          "nome": "Isla Taboga",
          "distanza": "unos 20 km en el golfo de Panamá",
          "come": "Ferry desde la Calzada de Amador; ida y vuelta en el día.",
          "testo": "La «isla de las flores», con un pueblo de casas de colores, una de las iglesias más antiguas de América y playas tranquilas frente a los barcos que esperan para el canal."
        }
      ],
      "faq": [
        {
          "domanda": "¿Cuántos días hacen falta en Panamá?",
          "risposta": "Dos días bastan para el canal, el Casco Viejo y Panamá Viejo; con un tercero se añaden el Parque Metropolitano, Amador o una excursión a Taboga."
        },
        {
          "domanda": "¿Cuándo pasan los barcos por Miraflores?",
          "risposta": "Los tránsitos siguen franjas horarias que cambian cada día: conviene consultarlas el mismo día y llegar al inicio de una franja. Las horas de más afluencia son las 8 y las 14."
        },
        {
          "domanda": "¿Es seguro el Casco Viejo?",
          "risposta": "Las calles turísticas están vigiladas y animadas hasta tarde, pero el barrio limita con zonas que conviene evitar y hay robos al descuido. Después del atardecer, mejor moverse en taxi de aplicación."
        },
        {
          "domanda": "¿Hace falta efectivo o dólares?",
          "risposta": "La moneda es el dólar estadounidense, con monedas de balboa para el cambio. En la ciudad las tarjetas funcionan casi en todas partes; el efectivo sirve para mercados, taxis y sobre todo para San Blas."
        },
        {
          "domanda": "¿Cómo moverse por la ciudad?",
          "risposta": "Metro para los trayectos de sus dos líneas y Uber para el resto. Los taxis de la calle a menudo no tienen taxímetro: el precio se acuerda antes de subir."
        },
        {
          "domanda": "¿Cuál es la mejor época?",
          "risposta": "De mediados de diciembre a mediados de abril, en la temporada seca. El resto del año llueve sobre todo por la tarde y las mañanas siguen siendo buenas para las visitas."
        }
      ],
    esperienzeSlugs: ['chiuse-miraflores'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'El skyline de rascacielos de Ciudad de Panamá visto desde una terraza del Casco Viejo',
    immagine: '/images/panama/panama-city.jpg',
  },
  {
    slug: 'san-blas',
    paeseSlug: 'panama',
    ordine: 2,
    nome: 'San Blas (Guna Yala)',
    tipologia: ['mare', 'isole', 'cultura'],
    giorniConsigliati: '2-4 días',
    visitataPersonalmente: true,
    introduzione:
      'Un archipiélago de más de 300 islas caribeñas administrado de forma autónoma por el pueblo guna: palmeras, arena blanca, agua poco profunda turquesa y alojamientos esenciales por elección, a menudo sin electricidad continua.',
    percheAndarci:
      'Es el mar más famoso de Panamá y uno de los pocos territorios indígenas autogobernados del continente: las reglas de acceso, los transportes y las instalaciones los gestiona la comunidad guna, sin cadenas turísticas.',
    cosaVedere: [
      'Las islas más conocidas para las excursiones de un día: Isla Perro (con un pecio para hacer snorkel), Isla Aguja, Cayos Holandeses',
      'Las piscinas naturales de agua poco profunda en medio del mar',
      'Los pueblos guna, donde se compran las molas, los tejidos tradicionales cosidos a mano',
    ],
    cosaFare: [
      'Noche en cabaña en una isla, con comidas incluidas y paseos en barca entre los islotes',
      'Snorkel en los pecios y en los bajíos coralinos',
      'Travesía a vela hacia Colombia (3-5 días), alternativa clásica al Tapón del Darién',
    ],
    doveDormire: 'Solo cabañas gestionadas por las familias guna, desde las muy espartanas hasta alguna opción con baño privado: se reserva en paquete, con transporte y comidas incluidos.',
    doveMangiare: 'Las comidas casi siempre están incluidas en el paquete: pescado, langosta en temporada, arroz y plátano.',
    comeArrivare: "Se sale de Panamá antes del amanecer en un 4x4 reservado con el paquete: unas 2h30-3h de carretera, los últimos tramos por una carretera de montaña con pendientes muy fuertes, hasta el puerto de Cartí. En el puesto de control se muestra el pasaporte y se paga la tasa comunitaria guna, unos 20 USD por persona (unos 17 €), más 2-5 USD en el puerto (unos 2-4 €), solo en efectivo. Desde el muelle una lancha lleva a las islas en 15-60 minutos según el destino. El regreso suele salir a media mañana y llega a la ciudad a primera hora de la tarde.",
    comeSpostarsi: 'Solo en barca, con los traslados organizados por el alojamiento.',
    periodoMigliore: 'estación seca (diciembre-abril) para un mar más tranquilo; la travesía en barca puede ser exigente con viento',
    costi: "Tasa comunitaria guna unos 20 USD por persona (unos 17 €) más 2-5 USD en el puerto, solo efectivo; traslado 4x4 más lancha 40-60 USD por trayecto (unos 34-52 €); paquetes con cabaña y comidas 60-150 USD por persona y noche (unos 52-130 €). Económico: unos 80-100 € al día con cabaña compartida y traslados. Medio: 130-170 € con cabaña privada y recorrido por las islas. Alto: más de 200 € con baño privado en una isla exterior y lancha reservada.",
    erroriDaEvitare: [
      'Llegar sin efectivo: en las islas no hay cajeros ni pagos con tarjeta',
      'Esperar comodidades de resort: electricidad limitada, agua dulce racionada y wifi casi inexistente forman parte de la experiencia',
      'Reservar con intermediarios no autorizados: los alojamientos y los transportes los gestiona la comunidad guna, que regula los accesos',
    ],
    miaEsperienza:
      'Llegar fue el traslado más exigente de la segunda parte: despertador hacia las cinco, casi tres horas de 4x4 por una carretera de montaña de pendientes empinadas hasta el puerto de Cartí, luego la barca hacia las islas. Conviene saber en qué se entra. Guna Yala es un territorio autogobernado: el turismo lo gestionan los guna y la tasa de entrada se les paga a ellos, solo en efectivo, porque en las islas no hay cajeros ni tarjetas. Nuestra cabaña era esencial por elección, gestionada por una familia guna: luz a ciertas horas, agua dulce racionada, wifi casi inexistente, comidas incluidas. El día completo lo pasamos en barca entre Isla Perro, con el pecio para hacer snorkel, Isla Aguja, los Cayos Holandeses y las piscinas naturales en medio del mar. Las reglas son de la comunidad: se pide permiso antes de fotografiar a personas y casas, de las islas no se saca nada y las inmersiones con botellas están prohibidas.',
      "luoghi": [
        {
          "nome": "Isla Perro y el naufragio",
          "testo": "Un islote con el naufragio de un barco para ver haciendo snorkel.",
          "come": "En barca desde las islas donde se duerme, en un recorrido de día.",
          "quando": "Mañana, con el mar calmo.",
          "tempo": "1-2 horas",
          "consiglio": "Solo snorkel, sin tanques: el buceo con tanque está prohibido en Guna Yala para proteger el arrecife.",
          "lat": 9.5582,
          "lng": -78.8761
        },
        {
          "nome": "Isla Aguja y Cayos Holandeses",
          "testo": "Islotes con palmeras y arena blanca, agua turquesa y fondos poco profundos.",
          "come": "Recorrido en barca entre las islas, incluido en el paquete.",
          "quando": "Mañana, con luz limpia.",
          "tempo": "Día"
        },
        {
          "nome": "Piscinas naturales en medio del mar",
          "testo": "Bancos de arena con agua poco profunda, rodeados de mar abierto.",
          "come": "En barca desde la cabaña.",
          "quando": "Mañana.",
          "tempo": "Parada breve"
        },
        {
          "nome": "Pueblos guna y molas",
          "testo": "Los pueblos guna, donde se compran las molas, los tejidos tradicionales cosidos a mano por las mujeres. Guna Yala es una comarca autónoma, gobernada por el Congreso General Guna y los sahilas de cada comunidad.",
          "come": "Visita desde una de las islas habitadas, con el permiso de los residentes.",
          "quando": "De día.",
          "tempo": "1-2 horas",
          "consiglio": "Pedir permiso antes de fotografiar personas y casas, y no llevarse nada de las islas."
        },
        {
          "nome": "Gardi Sugdub",
          "testo": "La isla-pueblo frente al puerto de Cartí, cubierta casi por completo de casas de caña y zinc. Con la subida del mar, en 2024 gran parte de sus habitantes se trasladó a un nuevo barrio en tierra firme: la isla sigue siendo el lugar para ver la vida cotidiana guna, lejos de las playas de postal.",
          "come": "En lancha desde Cartí en pocos minutos, con permiso de la comunidad; a menudo es una parada a la ida o a la vuelta.",
          "quando": "De día, a la llegada o a la salida.",
          "tempo": "1 hora",
          "lat": 9.4707,
          "lng": -78.961,
          "consiglio": "Preguntar siempre antes de fotografiar: algunas familias piden una pequeña contribución."
        },
        {
          "nome": "Chichime",
          "testo": "Dos islas con palmeras y arena blanca en el borde exterior del archipiélago occidental, con aguas poco profundas y cabañas gestionadas por familias gunas. Están entre las más frecuentadas para pasar la noche, también por los veleros de paso.",
          "come": "En lancha desde Cartí, con el paquete del alojamiento.",
          "quando": "Temporada seca, con el mar más tranquilo para la travesía.",
          "tempo": "1-2 noches",
          "lat": 9.5859,
          "lng": -78.8788
        },
        {
          "nome": "Cayos Limones",
          "testo": "Un grupo de islotes alrededor de una laguna interior resguardada, con arena clara y fondos bajos donde se hace snorkel desde la orilla. Son una de las paradas más habituales en los recorridos en lancha por las islas occidentales.",
          "come": "En lancha, en los recorridos entre islas o con una noche.",
          "quando": "Por la mañana, con luz limpia.",
          "tempo": "Medio día",
          "lat": 9.5667,
          "lng": -78.861
        },
        {
          "nome": "El Porvenir (Gaigirgordub)",
          "testo": "Una pequeña isla con la pista de aterrizaje y las oficinas de la comarca, en el extremo occidental del archipiélago. Es el centro administrativo de Guna Yala más que un destino de playa, pero desde aquí salen lanchas a las islas cercanas.",
          "come": "En lancha desde Cartí o desde las islas cercanas.",
          "quando": "De día.",
          "tempo": "Parada breve",
          "lat": 9.5503,
          "lng": -78.9552
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Salida antes del amanecer desde Ciudad de Panamá en 4x4 hacia Cartí",
            "Barca a las islas, snorkel en Isla Perro",
            "Regreso hacia la noche, a menudo demasiado justo para un solo día"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: 4x4 hasta Cartí, barca, noche en cabaña",
            "Día 2: recorrido entre Isla Perro, Isla Aguja, Cayos Holandeses, piscinas naturales, luego regreso"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Día 1: 4x4 hasta Cartí, parada en Gardi Sugdub, lancha a la isla y noche en cabaña",
            "Día 2: recorrido en lancha por Isla Perro, los Cayos Limones y las piscinas naturales",
            "Día 3: mañana libre en el agua, regreso a Cartí y en 4x4 a Panamá"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Cabaña en una isla guna",
          "perChi": "quien quiere dormir en una comunidad guna",
          "testo": "Esencial por elección: luz por horario, agua dulce racionada, wifi casi inexistente, comidas incluidas, gestionada por una familia guna."
        },
        {
          "nome": "Alojamiento en tierra firme en Cartí",
          "perChi": "quien quiere llegar al amanecer",
          "testo": "Menos sugestivo, pero evita la salida nocturna."
        },
        {
          "nome": "Islas exteriores (Chichime, Cayos Limones)",
          "perChi": "agua más clara",
          "testo": "Agua más transparente y menos lanchas de paso, a cambio de una travesía más larga y movida desde Cartí."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado y langosta a la parrilla",
          "testo": "La pesca de los guna, a menudo incluida en las comidas."
        },
        {
          "nome": "Arroz y frijoles",
          "testo": "Base de cada comida, con plátano frito."
        },
        {
          "nome": "Patacones",
          "testo": "Plátano frito, como acompañamiento."
        },
        {
          "nome": "Coco",
          "testo": "Agua de coco fresca y trozos de pulpa, recogidos en la isla."
        }
      ],
      "attenzioni": [
        "Para entrar en Guna Yala se paga una tasa a la comarca, además del puerto: lleva efectivo, en las islas no hay cajeros.",
        "El viaje desde Ciudad de Panamá empieza antes del amanecer, con horas de 4x4 por una carretera de montaña empinada: si te mareas, toma algo.",
        "Reglas de la comunidad: pedir permiso antes de fotografiar personas y casas, no llevarse nada de las islas, sin botellas de buceo."
      ],
      "gite": [
        {
          "nome": "Isla Pelícano",
          "distanza": "unos 17 km del puerto de Cartí",
          "come": "En lancha, como parada en los recorridos entre islas.",
          "testo": "Un islote de arena con unas pocas palmeras, tan pequeño que se rodea en un minuto: es la imagen de San Blas que acaba en las postales."
        },
        {
          "nome": "En velero hacia Colombia",
          "distanza": "3-5 días de navegación",
          "come": "Con los veleros que hacen la travesía entre San Blas y la costa colombiana, reservados en Panamá.",
          "testo": "Es la alternativa clásica al Tapón del Darién, donde no hay carreteras: unos días entre las islas gunas y luego mar abierto hasta Colombia."
        }
      ],
      "faq": [
        {
          "domanda": "¿Se puede ir a San Blas en el día?",
          "risposta": "Se puede, pero entre el 4x4 y la lancha se pasan 6 horas de viaje y poco tiempo en las islas. Con al menos una noche la visita tiene sentido."
        },
        {
          "domanda": "¿Cuánto efectivo llevar?",
          "risposta": "Lo suficiente para la tasa comunitaria, el puerto, posibles recargos por isla, bebidas y molas, en dólares estadounidenses. En las islas no hay cajeros ni pago con tarjeta."
        },
        {
          "domanda": "¿Cómo es una cabaña en San Blas?",
          "risposta": "Sencilla: paredes de caña, cama o hamaca, baño a menudo compartido, luz solo unas horas y agua dulce racionada. Las comidas de pescado, arroz y plátano casi siempre están incluidas."
        },
        {
          "domanda": "¿Se puede bucear en San Blas?",
          "risposta": "No, el buceo con botella está prohibido por decisión de las autoridades gunas. El snorkel en cambio es libre y los fondos bajos bastan."
        },
        {
          "domanda": "¿Cuál es la mejor época?",
          "risposta": "De diciembre a abril, en temporada seca, con más sol y el mar por lo general más tranquilo. Con viento fuerte la travesía en lancha desde Cartí puede ser movida."
        },
        {
          "domanda": "¿Cómo se reserva?",
          "risposta": "Con un paquete que incluye 4x4, lancha, cabaña y comidas, vendido por agencias de Panamá o directamente por las familias gunas. Las tasas comunitarias suelen pagarse aparte."
        }
      ],
    esperienzeSlugs: ['notte-isola-san-blas'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Islote de arena blanca con palmeras y cabañas en el archipiélago de San Blas, Panamá',
    immagine: '/images/panama/san-blas.jpg',
  },
  {
    slug: 'bocas-del-toro',
    paeseSlug: 'panama',
    ordine: 3,
    nome: 'Bocas del Toro',
    tipologia: ['mare', 'isole', 'nightlife'],
    giorniConsigliati: '3-5 días',
    visitataPersonalmente: true,
    introduzione:
      'Archipiélago caribeño en la frontera con Costa Rica, con casas sobre pilotes, surf, snorkel y la vida nocturna más animada del país.',
    percheAndarci:
      'Es el lugar donde Panamá se vuelve caribeña también en el ambiente: más animado y menos esencial que San Blas, con islas muy distintas entre sí a pocos minutos en barca.',
    cosaVedere: [
      'Isla Colón, con Bocas Town y sus edificios de madera de colores',
      'Starfish Beach, la playa de las estrellas de mar',
      'Isla Bastimentos y el parque nacional marino, con Red Frog Beach',
      'Cayo Zapatilla, a menudo la parada más bonita de los tours en barca',
      'Cayo Coral, para hacer snorkel en aguas poco profundas',
    ],
    cosaFare: [
      'Tour en barca de un día entre los islotes, con paradas de snorkel y avistamiento de delfines',
      'Clase de surf en Playa Bluff o Paunch',
      'Paseo en kayak entre los manglares',
      'Noche en Bocas Town, entre bares sobre el agua y fiestas en las islas',
    ],
    doveDormire: 'Bocas Town en Isla Colón por los servicios y la vida nocturna; Bastimentos o Carenero por la tranquilidad y los alojamientos sobre el agua.',
    doveMangiare:
      'Bocas es el lugar de Panamá donde se come caribeño: pescado y pollo en salsa de coco, rice and beans cocinados con leche de coco en lugar de con agua, patacones por todas partes. El patrimonio afrocaribeño del archipiélago se nota en la cocina más que en cualquier otro punto del país. En Bocas Town los restaurantes sobre el agua cuestan el doble que los chiringuitos a dos calles de distancia, donde se come el mismo pescado; el mercado de la mañana es la opción más económica. La cerveza local helada es casi la bebida oficial de la isla.',
    comeArrivare:
      'Vuelo interno de Ciudad de Panamá a Bocas del Toro (aproximadamente 1 hora) o autobús nocturno hasta Almirante y water taxi (unos 30 minutos). Desde Costa Rica se llega por tierra desde el Caribe: bus de Puerto Viejo o Cahuita hasta Sixaola, se sale de Costa Rica (impuesto de salida terrestre de 8 USD, unos 7 €, en línea en la web del Banco de Costa Rica o en los quioscos del BCR), se cruza a pie el puente binacional sobre el río Sixaola, abierto en 2021, y se entra en Panamá por Guabito. Luego bus o taxi colectivo hasta Changuinola y Almirante, y water taxi hasta Bocas Town (unos 30 minutos). También hay shuttles puerta a puerta desde Puerto Viejo.',
    comeSpostarsi: 'Water taxi entre las islas (pocos dólares por tramo), bicicletas y taxis en Isla Colón.',
    periodoMigliore:
      'tiene un microclima distinto al del resto del país: septiembre-octubre y febrero-marzo suelen ser los periodos más soleados, mientras que aquí la «estación seca» panameña no siempre coincide',
    costi: "Tour en lancha de un día unos 50-55 USD por persona (unos 43-47 €), almuerzo aparte; tasa del parque marino para Cayo Zapatilla unos 10 USD en efectivo (unos 9 €) si no está incluida; vuelo interno 100-150 USD por trayecto (unos 86-130 €). Económico: unos 40-55 € al día con albergue en Bocas Town, puestos de comida y water taxis. Medio: 90-140 € con hotel sobre el agua y un tour. Alto: más de 220 € con lodge en Bastimentos o Carenero y lancha privada.",
    erroriDaEvitare: [
      'Dar por hecha la estación seca nacional: aquí el tiempo sigue un ciclo distinto al del resto de Panamá',
      'Programar el tour en barca sin tener en cuenta el mar picado, que puede cancelar las salidas hacia los cayos más exteriores',
    ],
    miaEsperienza:
      'Desde Boquete llegamos a Bocas por tierra hasta Almirante y luego en water taxi, y fue lo opuesto a San Blas: casas sobre pilotes, un ambiente mucho más social y ruidoso, hostales y gente que casi siempre se queda más de lo previsto. Al día siguiente hicimos el paseo en barca entre los islotes: Cayo Zapatilla, a menudo el punto más bonito de todo el recorrido, y Starfish Beach, que cumple la promesa del nombre con estrellas de mar en agua de poco más de un metro, más una parada de snorkel en Cayo Coral. Las salidas hacia los cayos más exteriores se cancelan con el mar picado, y es una eventualidad que hay que tener en cuenta. Dos advertencias prácticas: aquí el tiempo sigue un microclima propio y no la estación seca del resto de Panamá, y las arenas están infestadas de chitras, mosquitos que pican sin que se note y dejan marcas durante días. Por la noche, en Bocas Town, música en directo y fiestas que a menudo se trasladan en barca a las islas cercanas.',
      "luoghi": [
        {
          "nome": "Isla Colón y Bocas Town",
          "testo": "La ciudad principal del archipiélago, con casas de madera de colores sobre pilotes, hostales y vida nocturna.",
          "come": "Llegada en water taxi desde Almirante o en avión desde la ciudad de Panamá.",
          "quando": "Noche, para música en vivo y fiestas.",
          "tempo": "Media jornada",
          "lat": 9.3386,
          "lng": -82.2404
        },
        {
          "nome": "Cayo Zapatilla",
          "testo": "Los islotes deshabitados de Cayos Zapatilla, dentro del Parque Nacional Marino Isla Bastimentos, creado en 1988, con arena blanca y bosque. A menudo la mejor parada de los tours en barca.",
          "come": "Con tour en barca desde Bocas Town; entrada al parque aparte.",
          "quando": "Mañana, con mar calmo.",
          "tempo": "Media jornada",
          "consiglio": "Las salidas a los cayos más externos se cancelan con mar picado: tenerlo en cuenta.",
          "costo": "Tasa del parque marino unos 10 USD en efectivo (unos 9 €), si no está incluida en el tour.",
          "lat": 9.2655,
          "lng": -82.0552
        },
        {
          "nome": "Starfish Beach",
          "testo": "La playa de las estrellas de mar: se ven en agua poco profunda cerca de la orilla, y el nombre cumple lo que promete.",
          "come": "Parada en los tours en barca o en taxi acuático.",
          "quando": "Mañana.",
          "tempo": "Parada breve",
          "consiglio": "No tocar ni sacar las estrellas de mar del agua.",
          "lat": 9.4048,
          "lng": -82.3255
        },
        {
          "nome": "Cayo Coral e Isla Bastimentos",
          "testo": "Snorkel en agua poco profunda en Cayo Coral. Isla Bastimentos tiene el parque nacional marino y Red Frog Beach, a la que se llega en water taxi.",
          "come": "Tour en barca desde Bocas Town.",
          "quando": "Mañana.",
          "tempo": "Media jornada",
          "lat": 9.2433,
          "lng": -82.1449
        },
        {
          "nome": "Red Frog Beach",
          "testo": "Una playa larga en el lado atlántico de Isla Bastimentos, con arena dorada y selva detrás. Debe su nombre a las pequeñas ranas rojas venenosas que viven en el sotobosque. El mar suele estar agitado, más para surfear que para bañarse.",
          "come": "Water taxi desde Bocas Town hasta el muelle y luego un breve sendero por la selva.",
          "quando": "Por la mañana, con el mar más tranquilo.",
          "tempo": "Medio día",
          "lat": 9.3447,
          "lng": -82.1695,
          "consiglio": "Corrientes fuertes: bañarse solo donde se bañan los demás, y nunca solo."
        },
        {
          "nome": "Playa Bluff",
          "testo": "La playa de las olas, en el lado atlántico de Isla Colón: kilómetros de arena casi desierta, rompientes potentes y tortugas que desovan en temporada. Es el lugar para surfear, no para un baño tranquilo.",
          "come": "En taxi o en bicicleta desde Bocas Town por la carretera de la costa.",
          "quando": "Por la mañana; baño solo con mar en calma.",
          "tempo": "Medio día",
          "lat": 9.3991,
          "lng": -82.2453,
          "consiglio": "Durante el desove de las tortugas, nada de luces en la playa de noche."
        },
        {
          "nome": "Boca del Drago",
          "testo": "La esquina noroeste de Isla Colón, con agua tranquila y transparente, palmeras y algunos restaurantes de pescado. Desde aquí se camina en pocos minutos hasta Playa Estrella.",
          "come": "Bus o taxi desde Bocas Town cruzando la isla, o en lancha con los tours.",
          "quando": "Por la mañana, antes de que lleguen las lanchas de los tours.",
          "tempo": "Medio día",
          "lat": 9.4144,
          "lng": -82.331
        },
        {
          "nome": "Isla Carenero",
          "testo": "La isla frente a Bocas Town, a un par de minutos en lancha: alojamientos sobre el agua, algunos restaurantes y un sendero que la rodea. Frente a la punta rompe una ola conocida por los surfistas.",
          "come": "Water taxi desde Bocas Town, a cualquier hora del día.",
          "quando": "Por la tarde y para cenar, con vista a las luces de Bocas Town.",
          "tempo": "2-3 horas",
          "lat": 9.3466,
          "lng": -82.2318
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: tour en barca a Cayo Zapatilla, Starfish Beach, Cayo Coral",
            "Tarde: descanso en Bocas Town",
            "Noche: música en vivo"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: recorrido por los cayos",
            "Día 2: Red Frog Beach en Bastimentos y noche en barca hacia las islas cercanas"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Día 1: llegada, paseo por Bocas Town, cena en Isla Carenero",
            "Día 2: tour de los cayos con Cayo Zapatilla, Cayo Coral y la Bahía de los Delfines",
            "Día 3: Boca del Drago y Playa Estrella por la mañana, Playa Bluff por la tarde"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Bocas Town",
          "perChi": "vida social",
          "testo": "Hostales, bares y restaurantes, ruidosa. Gente que casi siempre se queda más de lo previsto."
        },
        {
          "nome": "Bastimentos y Carenero",
          "perChi": "tranquilidad",
          "testo": "Pocos servicios, más naturaleza y silencio."
        },
        {
          "nome": "Isla Colón fuera del pueblo",
          "perChi": "surf y naturaleza",
          "testo": "Por la carretera a Playa Bluff o hacia Boca del Drago: casas entre la selva y el mar, noches tranquilas, pero hace falta bici o taxi para todo."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado al coco",
          "testo": "Plato caribeño con leche de coco y pescado."
        },
        {
          "nome": "Rondón",
          "testo": "Guiso de pescado, plátano y yuca en leche de coco."
        },
        {
          "nome": "Patacones",
          "testo": "Plátano frito con ceviche o queso."
        },
        {
          "nome": "Mariscos",
          "testo": "Cangrejos y langosta, en temporada y en restaurantes frente al mar."
        }
      ],
      "attenzioni": [
        "Bocas tiene su propio microclima y lluvias, no la estación seca del resto de Panamá.",
        "Las chitras, mosquitas que pican sin que lo notes y dejan marcas durante días, infestan las playas: repelente.",
        "Las salidas a los cayos más externos se cancelan con mar picado.",
        "Llegando por tierra desde Costa Rica, en Guabito pueden pedir el billete de salida de Panamá y la prueba de al menos 1.000 USD o una tarjeta de crédito. Panamá va una hora por delante de Costa Rica, y las oficinas de frontera cierran a última hora de la tarde: mejor cruzar por la mañana."
      ],
      "gite": [
        {
          "nome": "Bahía de los Delfines",
          "distanza": "unos 11 km al sur de Bocas Town",
          "come": "En lancha, normalmente como primera parada del tour de los cayos.",
          "testo": "Una bahía resguardada entre manglares donde vive un grupo de delfines mulares, que se observan desde la lancha. Las lanchas deberían mantener la distancia y el motor bajo."
        },
        {
          "nome": "Old Bank (Isla Bastimentos)",
          "distanza": "pocos minutos en water taxi desde Bocas Town",
          "come": "Water taxi desde el muelle de Bocas Town.",
          "testo": "El pueblo afrocaribeño de Bastimentos, con casas de madera sobre el agua y una comunidad que habla guari-guari, un criollo de base inglesa. Desde aquí un sendero cruza la isla hasta Wizard Beach."
        }
      ],
      "faq": [
        {
          "domanda": "¿Cuántos días hacen falta en Bocas del Toro?",
          "risposta": "Tres días para el tour de los cayos, Bastimentos y Boca del Drago; muchos se quedan cinco, también para tener un día de margen si el mar cancela las salidas."
        },
        {
          "domanda": "¿Bocas del Toro o San Blas?",
          "risposta": "Bocas es animada, con albergues, bares, surf y servicios; San Blas es aislada y sencilla, con las islas más bonitas y la comunidad guna. Son experiencias distintas y muchos hacen las dos."
        },
        {
          "domanda": "¿Cuál es la mejor época?",
          "risposta": "Bocas tiene un clima propio: septiembre-octubre y febrero-marzo suelen ser los meses más soleados, mientras que la temporada seca del resto de Panamá aquí no está garantizada."
        },
        {
          "domanda": "¿Cómo moverse entre las islas?",
          "risposta": "En water taxi, que salen de los muelles de Bocas Town por pocos dólares el trayecto. En Isla Colón también hay buses, taxis y bicicletas de alquiler."
        },
        {
          "domanda": "¿Qué son las chitras?",
          "risposta": "Jejenes minúsculos que viven en las playas y pican sin que se note, dejando marcas que pican durante días. Repelente y, al atardecer, ropa larga."
        },
        {
          "domanda": "¿Se llega desde Boquete sin pasar por Panamá?",
          "risposta": "Sí: shuttles directos desde Boquete con el water taxi incluido, o bus de David a Almirante y luego lancha a Bocas Town, una media hora. En total son algunas horas."
        }
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Casitas de colores sobre pilotes y muelle de madera sobre el agua en Bocas del Toro, Panamá',
    immagine: '/images/panama/bocas-del-toro.jpg',
  },
  {
    slug: 'boquete',
    paeseSlug: 'panama',
    ordine: 4,
    nome: 'Boquete y las tierras altas',
    tipologia: ['natura', 'trekking'],
    giorniConsigliati: '2-4 días',
    visitataPersonalmente: true,
    introduzione:
      'El Panamá de altura, en la provincia de Chiriquí: clima fresco, plantaciones de café entre las mejores del mundo, bosques nublados y el Volcán Barú, el punto más alto del país.',
    percheAndarci:
      'Es el único lugar del mundo desde el que, con el día adecuado, se ven juntos el océano Pacífico y el mar Caribe. Y es el contrapeso fresco a las islas caribeñas.',
    cosaVedere: [
      'El Volcán Barú (3.475 m), con la subida nocturna para el amanecer sobre los dos océanos',
      'El Sendero Los Quetzales, entre los mejores lugares del mundo para avistar el quetzal',
      'Las plantaciones de café de la zona, entre ellas las que producen el apreciado Geisha',
      'Las cascadas de Lost Waterfalls y las Caldera Hot Springs',
    ],
    cosaFare: [
      'Subida nocturna al Volcán Barú para el amanecer (hay una ficha de experiencia dedicada)',
      'Tour por una finca de café con cata',
      'Observación de aves en el Sendero Los Quetzales, mejor con guía local',
      'Rafting en el Río Chiriquí Viejo',
    ],
    doveDormire: 'El pueblo de Boquete por los servicios; los lodges de las colinas circundantes por el verde y las vistas al valle.',
    doveMangiare:
      'En Boquete se bebe el mejor café del viaje: la zona produce el Geisha, que en las subastas bate récords mundiales de precio, y en las cafeterías del pueblo se prueba a una fracción de lo que cuesta en otros sitios. Para ser un pueblo de montaña la oferta gastronómica es sorprendentemente internacional, por la comunidad de jubilados norteamericanos que vive allí; para comer panameño hacen falta las fondas locales, con el sancocho y la carne guisada. En el mercado de agricultores se encuentran fresas y verdura de altura, raras en el resto del país.',
    comeArrivare: "Desde Panamá el vuelo interno de Air Panama a David sale del aeropuerto de Albrook, en la ciudad, no de Tocumen, y tarda una hora; conviene reservarlo con antelación. De David a Boquete hay unos 40 minutos, en los buses frecuentes de la terminal central o en taxi, por una carretera que sube suave hacia las montañas. Otra opción es el bus nocturno desde la capital, 6-7 horas. Hacia Bocas del Toro hay shuttles directos con el water taxi incluido, o el bus de David a Almirante cruzando la Cordillera.",
    comeSpostarsi: 'Autobuses locales frecuentes entre David y Boquete; coche de alquiler cómodo para las fincas y los senderos fuera del pueblo.',
    periodoMigliore:
      'diciembre-abril para la subida al Barú con cielos despejados; el bajareque, la llovizna fina típica de la zona, puede aparecer en cualquier estación',
    costi: "Subida guiada al Barú 50-90 USD por persona (unos 43-77 €); tour de una finca de café unos 35-45 USD (unos 30-39 €). Económico: unos 40-55 € al día con albergue en el pueblo, fondas y bus. Medio: 90-140 € con hotel o lodge en la colina y un tour al día. Alto: más de 200 € con lodge entre cafetales y guías privados.",
    erroriDaEvitare: [
      'Subir al Barú sin ropa de invierno: a la cima se llega antes del amanecer, con viento y temperaturas cercanas a cero',
      'Esperar que la vista sobre los dos océanos esté garantizada: ocurre solo con cielo limpio, típicamente en los meses secos',
    ],
    miaEsperienza:
      'Llegamos desde San Blas pasando por Ciudad de Panamá y el vuelo a David, y tras el calor húmedo de las islas Boquete fue un alivio físico: se duerme con la ventana abierta y sin ventilador, algo que en el resto del viaje no pasa casi nunca. Hicimos el tour de una finca de café con cata, y es aquí donde se prueba el Geisha a una fracción de lo que cuesta en otros sitios. La noche siguiente salimos hacia medianoche para el Barú: trece kilómetros de pista de tierra por cada lado, a oscuras, con el frío en aumento, para llegar a la cima, a 3.475 metros, antes del amanecer. La vista sobre los dos océanos juntos solo se tiene con el cielo del todo limpio, es decir, en pocos días buenos incluso en estación seca; aun sin esa suerte, la subida nocturna con los valles iluminados abajo vale el esfuerzo. A última hora de la mañana estábamos de nuevo en Boquete.',
      "luoghi": [
        {
          "nome": "Volcán Barú",
          "testo": "El volcán de Chiriquí y la cima más alta de Panamá (3.475 m), desde donde con cielo despejado se ven el Pacífico y el Caribe a la vez, cosa que pasa pocas veces. Subida nocturna para el amanecer.",
          "come": "Salida hacia medianoche, a pie con guía por un sendero largo y empinado, o con tours en 4x4 hasta la cima.",
          "quando": "Amanecer, con cielo del todo despejado, es decir pocos días buenos incluso en estación seca.",
          "tempo": "Noche-mañana",
          "consiglio": "Sin la vista de los dos océanos, la subida nocturna con los valles iluminados debajo merece igualmente el esfuerzo. Llevar capas de abrigo.",
          "lat": 8.8089,
          "lng": -82.5424,
          "url": "https://miambiente.gob.pa/"
        },
        {
          "nome": "Sendero Los Quetzales",
          "testo": "Un sendero del parque del Barú, en el bosque nuboso entre Boquete y Cerro Punta, en la ladera del volcán. Es un buen lugar para buscar el quetzal.",
          "come": "Sendero de unas horas, con guía o por cuenta propia.",
          "quando": "Temprano por la mañana, cuando las aves están más activas. El sendero cierra a veces por mal tiempo o árboles caídos (reabierto en noviembre de 2025): consulta con MiAmbiente.",
          "tempo": "Unas 6 horas",
          "url": "https://miambiente.gob.pa/",
          "lat": 8.8465,
          "lng": -82.4897
        },
        {
          "nome": "Tour de una finca de café",
          "testo": "Visita a una plantación con degustación, incluido el Geisha, el café preciado de Boquete, a una fracción del precio de otros sitios.",
          "come": "Tour de media jornada reservable en el pueblo.",
          "quando": "Mañana.",
          "tempo": "2-3 horas",
          "consiglio": "El Geisha se prueba aquí a una fracción de lo que cuesta en otros lugares.",
          "costo": "Unos 35-45 USD por persona (unos 30-39 €), con cata."
        },
        {
          "nome": "Lost Waterfalls",
          "testo": "Un sendero en el bosque nuboso de Los Naranjos, cerca de Boquete, que une tres cascadas, cada una con un pequeño desvío.",
          "come": "En coche o taxi desde Boquete hasta la entrada; sendero de unos 3,2 km, de dificultad moderada.",
          "quando": "De día, mejor por la mañana.",
          "tempo": "Media jornada",
          "url": "https://www.tourismpanama.com/blog/post/trails-and-waterfalls-to-enjoy-in-boquete/",
          "lat": 8.8419,
          "lng": -82.4785
        },
        {
          "nome": "Bajo Boquete y el Parque Central",
          "testo": "El centro del pueblo, en el fondo del valle del río Caldera, con la plaza, el mercado, las cafeterías donde se prueba el café de la zona y las agencias de tours. Las montañas cubiertas de nubes enmarcan cada calle.",
          "come": "A pie; el pueblo es pequeño y llano.",
          "quando": "Por la mañana, antes de la lluvia de la tarde.",
          "tempo": "2 horas",
          "costo": "Gratis.",
          "lat": 8.7765,
          "lng": -82.4323
        },
        {
          "nome": "Sendero El Pianista",
          "testo": "Un sendero que remonta un valle estrecho junto a un arroyo, cruzándolo varias veces por puentecitos, dentro del bosque nuboso sobre Boquete. El tramo bajo es fácil; más arriba se vuelve empinado y embarrado.",
          "come": "Taxi desde Boquete hasta el inicio del sendero, en la zona de Palo Alto.",
          "quando": "Temprano por la mañana.",
          "tempo": "2-4 horas",
          "lat": 8.817,
          "lng": -82.4232,
          "consiglio": "Calzado de montaña y chaqueta impermeable: el bajareque llega sin avisar."
        },
        {
          "nome": "Mi Jardín es su Jardín",
          "testo": "El jardín de una villa privada a las afueras del pueblo, abierto a los visitantes: parterres de flores, esculturas de colores y césped cuidado, en el clima fresco que en Boquete hace florecer todo el año.",
          "come": "A pie o en taxi desde Bajo Boquete, subiendo hacia Volcancito.",
          "quando": "De día, con sol.",
          "tempo": "30-45 minutos",
          "lat": 8.7885,
          "lng": -82.4376
        },
        {
          "nome": "Cerro Punta",
          "testo": "Uno de los pueblos agrícolas más altos de Panamá, en la otra vertiente del Barú: campos de papas, fresas y flores en laderas empinadas, aire frío e invernaderos por todas partes. Es la llegada del Sendero Los Quetzales y la puerta del Parque Internacional La Amistad.",
          "come": "En coche rodeando el volcán por Volcán, o a pie por el Sendero Los Quetzales.",
          "quando": "Por la mañana, antes de que suban las nubes.",
          "tempo": "Medio día",
          "lat": 8.8526,
          "lng": -82.5736
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Tour de una finca de café con degustación",
            "Tarde: Lost Waterfalls o paseo por el pueblo"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: café y descanso (Boquete es fresca)",
            "Día 2: Sendero Los Quetzales por la mañana, noche para el Barú"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Día 1: café",
            "Día 2: Sendero Los Quetzales",
            "Día 3: Barú al amanecer, luego descanso"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Boquete",
          "perChi": "servicios y vida",
          "testo": "Restaurantes, tours, hoteles; más fresco que el resto de Panamá, se duerme con la ventana abierta."
        },
        {
          "nome": "Alrededores y fincas",
          "perChi": "naturaleza y silencio",
          "testo": "Lodges entre café y selva, lejos de los servicios."
        },
        {
          "nome": "David",
          "perChi": "quien está de paso",
          "testo": "La ciudad de llanura con el aeropuerto y la terminal de buses: calurosa y poco interesante, útil solo para una noche antes de un vuelo o de un bus al amanecer."
        }
      ],
      "sapori": [
        {
          "nome": "Café Geisha",
          "testo": "El café preciado de la zona, para probar en una finca o en un café de Boquete."
        },
        {
          "nome": "Sancocho",
          "testo": "Sopa de pollo con yuca y culantro."
        },
        {
          "nome": "Trucha",
          "testo": "Criada en ríos de altura, en restaurantes de la zona."
        },
        {
          "nome": "Fresas y verduras de altura",
          "testo": "Productos de los mercados de Boquete."
        }
      ],
      "attenzioni": [
        "El Barú se sube de noche: capas de abrigo, linterna y guía. Los senderos de montaña de Panamá están mal señalizados, el móvil a menudo no tiene cobertura y ha habido excursionistas desaparecidos: nunca solo.",
        "La vista de los dos océanos desde la cumbre solo se tiene con cielo del todo despejado, en pocos días buenos.",
        "Lluvia y niebla pueden cambiar los planes: dejar un día de margen."
      ],
      "gite": [
        {
          "nome": "Pozos termales de Caldera",
          "distanza": "unos 15 km al sur de Boquete",
          "come": "En coche o taxi hasta el pueblo de Caldera y luego el último tramo por camino de tierra y a pie.",
          "testo": "Pequeñas pozas de agua caliente volcánica junto al río, en medio del campo. Son rústicas, sin instalaciones, y se alternan con un baño en el agua fría del río."
        },
        {
          "nome": "Golfo de Chiriquí y Boca Chica",
          "distanza": "en la costa pacífica, más allá de David",
          "come": "En coche o con un tour de un día y luego lancha a las islas del parque marino.",
          "testo": "El parque nacional marino del Golfo de Chiriquí, con islas de selva y playas en el Pacífico, snorkel y, aproximadamente de julio a octubre, el paso de las ballenas jorobadas. Es el mar más cercano a las tierras altas."
        }
      ],
      "faq": [
        {
          "domanda": "¿Cuántos días hacen falta en Boquete?",
          "risposta": "Tres días: uno para el café y el pueblo, uno para el Sendero Los Quetzales o las Lost Waterfalls y uno para el Barú, que se sube de noche y deja cansado el resto del día."
        },
        {
          "domanda": "¿Es difícil la subida al Barú?",
          "risposta": "A pie sí: unos 13 km de pista pedregosa por trayecto, 10-12 horas ida y vuelta, sin agua en el recorrido y con temperaturas cercanas a cero en la cima. Con un 4x4 se acorta buena parte de la subida."
        },
        {
          "domanda": "¿Desde la cima del Barú se ven de verdad los dos océanos?",
          "risposta": "Sí, pero solo con el cielo totalmente despejado, algo que ocurre pocos días incluso en temporada seca. Conviene subir sin contar con ello."
        },
        {
          "domanda": "¿Qué es el café Geisha?",
          "risposta": "Una variedad de café muy aromática que encontró en las tierras altas de Boquete su lugar ideal y alcanza precios récord en las subastas. En las fincas y cafeterías del pueblo se prueba por una fracción de lo que cuesta en otros sitios."
        },
        {
          "domanda": "¿Qué tiempo hace en Boquete?",
          "risposta": "Fresco todo el año, con noches que piden chaqueta. Por la tarde llueve a menudo, y el bajareque, una llovizna fina, puede llegar en cualquier estación: las salidas al aire libre, por la mañana."
        }
      ],
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Arcoíris sobre las colinas verdes alrededor de Boquete, en las tierras altas de Chiriquí, Panamá',
    immagine: '/images/panama/boquete.jpg',
  },
]
