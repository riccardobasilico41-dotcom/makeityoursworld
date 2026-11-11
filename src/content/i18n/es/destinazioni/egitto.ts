import type { Destinazione } from '@/lib/types'

export const destinazioniEgitto: Destinazione[] = [
  {
    slug: 'cairo',
    paeseSlug: 'egitto',
    ordine: 1,
    nome: 'El Cairo',
    tipologia: ['città', 'musei', 'cultura islamica'],
    giorniConsigliati: '2-3 días, sin contar las pirámides',
    visitataPersonalmente: true,
    introduzione:
      "Veinte millones de habitantes, tráfico continuo y mil años de arquitectura islámica: El Cairo es la puerta de entrada al país y la ciudad donde están los dos grandes museos egipcios.",
    percheAndarci:
      "Por el Grand Egyptian Museum con el tesoro completo de Tutankamón, por el Cairo islámico entre mezquitas y madrasas mamelucas, por el Cairo copto y por la noche en el Khan el-Khalili.",
    cosaVedere: [
      "El Grand Egyptian Museum (GEM) en Guiza, con la escalinata monumental y las galerías de Tutankamón",
      "El Museo Egipcio de la plaza Tahrir, todavía lleno de piezas extraordinarias",
      "La Ciudadela de Saladino y la mezquita de Muhammad Ali",
      "El Cairo islámico: la mezquita de Ibn Tulun, el complejo del sultán Hassan, la calle al-Muizz",
      "El Cairo copto: la Iglesia Colgante y la sinagoga Ben Ezra",
      "El Museo Nacional de la Civilización Egipcia (NMEC), con la sala de las momias reales",
    ],
    cosaFare: [
      "Pasear por la noche por el bazar del Khan el-Khalili y tomar un té en el café El Fishawy",
      "Un atardecer en falúa por el Nilo desde la Corniche",
      "El espectáculo de danza sufí Tannoura en el Wekalet El Ghouri (conviene comprobar antes los días)",
    ],
    doveDormire:
      "Para quien tiene poco tiempo conviene dormir en Guiza, cerca de las pirámides y del GEM. Para quien se queda más, Zamalek (isla en el Nilo, tranquila y llena de locales) o Downtown. Económico: guesthouses con vistas a las pirámides en Nazlet el-Semman · gama media: hoteles de Zamalek y Garden City · lujo: Marriott Mena House en Guiza, los grandes hoteles del Nilo.",
    doveMangiare:
      "Koshari en Abou Tarek, en Downtown, ful y taameya en los puestos de la mañana, cocina egipcia tradicional en Zooba o Abou El Sid, pescado y mezze en los restaurantes de Zamalek.",
    comeArrivare: "Aeropuerto internacional de El Cairo (CAI); desde la primavera de 2025 también el Sphinx International Airport, cerca de Guiza, con algunos vuelos. El metro no llega a las terminales del CAI: se usan Uber o Careem desde el aparcamiento de salidas, 30-60 minutos (hasta 90 en hora punta) y unos 200-400 EGP al centro, 300-500 EGP a Guiza. Los taxis de los mostradores oficiales cuestan más pero tienen precio fijado de antemano; hay que ignorar a quien ofrece traslados dentro de la terminal. Desde Luxor y Asuán se llega en avión en una hora o en tren nocturno.",
    comeSpostarsi:
      "Uber y Careem, económicos y sin regateos. El metro es útil para Downtown y el Cairo copto (parada Mar Girgis). Evitar conducir.",
    periodoMigliore: "de octubre a abril",
    costi:
      "Presupuesto bajo 30-45 € al día (guesthouse, koshari y comida callejera, metro); medio 70-120 € (hotel en Zamalek o Guiza, Uber, restaurantes); alto desde 200 € (grandes hoteles en el Nilo, guía privado). Entradas 2026: GEM 1.830 EGP (unos 35 $) desde el 1 de noviembre de 2026, con franja horaria que hay que reservar online; Museo Egipcio de Tahrir 550 EGP; Ciudadela 550 EGP; NMEC unos 500 EGP. A 60 EGP por euro, 600 EGP son unos 10 €.",
    erroriDaEvitare: [
      "Llegar al GEM sin entrada reservada: las entradas son por franja horaria y los días de más afluencia se agotan",
      "Aceptar el «guía gratuito» que se ofrece en la calle o la «tienda de papiros de mi hermano»",
      "Tomar un taxi sin taxímetro sin acordar el precio: mejor Uber o Careem",
    ],
    miaEsperienza:
      "Estuve con amigos al principio de nuestra ruta de tres semanas por Egipto: después de los días de las pirámides, un día entre el Cairo islámico, el Cairo copto y el Museo Egipcio, y luego la carretera hacia Alejandría y Siwa.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Gran Museo Egipcio (GEM)",
        testo: "El museo nuevo junto a las pirámides, con la escalinata monumental y las galerías dedicadas a Tutankamón. Es el museo que hay que ver primero.",
        come: "Está en Guiza, se llega desde el centro en Uber o taxi. La entrada tiene fecha y hora de acceso; la única web oficial de venta online es tickets.gem.eg, pero también hay taquillas en el lugar.",
        quando: "Galerías abiertas de 9 a 18; miércoles y sábado hasta las 21; última entrada una hora antes del cierre de las galerías (2026). Mejor a la apertura.",
        tempo: "3-4 horas",
        costo: "1.830 EGP, unos 30 € (35 $), desde el 1 de noviembre de 2026 (antes 1.570 EGP); solo con reserva por franja horaria.",
        orari: "Galerías abiertas todos los días de 9 a 18, miércoles y sábados hasta las 21; última entrada una hora antes (2026).",
        lat: 29.995,
        lng: 31.1193,
        url: "https://tickets.gem.eg/",
        consiglio: "Reservar la hora de entrada antes de salir, solo en la web oficial, y combinarlo con las pirámides, a pocos kilómetros.",
      },
      {
        nome: "Museo Egipcio de la plaza Tahrir",
        testo: "El museo histórico inaugurado en 1902, con miles de piezas en salas llenas y algo anticuadas. Sigue lleno de objetos extraordinarios incluso después del traslado de las piezas de Tutankamón.",
        come: "Metro hasta Sadat, y a pie desde la plaza. Audioguía o guía en el lugar.",
        quando: "Abierto todos los días de 9 a 17, taquilla hasta las 16; en Ramadán de 9 a 16 (2026). Mejor a primera hora, antes de los grupos.",
        tempo: "2 horas",
        costo: "550 EGP (unos 9 €) para adultos extranjeros, 275 para estudiantes; audioguía 75 EGP (2026)",
        orari: "Todos los días de 9 a 17, taquilla hasta las 16; durante el Ramadán de 9 a 16 (2026).",
        lat: 30.04778,
        lng: 31.23333,
        url: "https://egymonuments.gov.eg/en/museums/egyptian-museum/",
        consiglio: "Elegir pocas salas y verlas bien, en vez de correr por todo el museo.",
      },
      {
        nome: "Ciudadela de Saladino y mezquita de Muhammad Ali",
        testo: "La fortaleza que Saladino mandó empezar en 1176, en la colina que domina la ciudad, con la mezquita otomana de Muhammad Ali. Desde el borde, en los días despejados, la vista llega hasta las pirámides.",
        come: "Taxi o Uber hasta la entrada. Se camina dentro de la ciudadela, con calzado cómodo.",
        quando: "Abierta todos los días de 8 a 17 (2026). Por la tarde hay mejor luz.",
        tempo: "2 horas",
        costo: "550 EGP (unos 9 €) para adultos extranjeros, 275 para estudiantes (2026)",
        orari: "Todos los días de 8 a 17 (2026).",
        lat: 30.02944,
        lng: 31.26139,
        url: "https://egymonuments.gov.eg/en/archaeological-sites/cairo-citadel/",
      },
      {
        nome: "El Cairo islámico y la calle al-Muizz",
        testo: "La calle peatonal con monumentos desde la época fatimí hasta la otomana: mezquitas, madrazas, puertas y mausoleos. Un museo al aire libre, animado por la noche cuando las fachadas se iluminan.",
        come: "Se llega desde la zona de Khan el-Khalili. Se recorre de norte a sur.",
        quando: "Desde última hora de la tarde hasta la noche.",
        tempo: "2-3 horas",
        costo: "la calle es de acceso libre; algunos monumentos tienen entrada propia",
        lat: 30.04667,
        lng: 31.26,
        consiglio: "Subir a un minarete, donde se permite, da la mejor vista de la ciudad vieja.",
      },
      {
        nome: "Khan el-Khalili",
        testo: "El gran bazar de El Cairo, con callejones de plata, lámparas, especias, telas. Es turístico, pero de noche se llena también de cairotas.",
        come: "Taxi hasta la entrada, luego a pie. El café El Fishawy es la parada clásica.",
        quando: "Por la noche.",
        tempo: "2 horas",
        costo: "entrada libre",
        lat: 30.0475,
        lng: 31.26222,
        consiglio: "Regatear siempre, empezando muy por debajo del precio que te dicen.",
      },
      {
        nome: "Museo Nacional de la Civilización Egipcia (NMEC)",
        testo: "El museo de Fustat que cuenta Egipto desde la prehistoria hasta hoy. Lo mejor es la Sala de las Momias Reales, con una veintena de faraones y reinas trasladados aquí desde el Museo Egipcio en 2021, entre ellos Ramsés II y Hatshepsut, en una sala oscura y silenciosa.",
        come: "En Uber o taxi hasta la zona de Fustat, cerca del Cairo copto. La sala de las momias está en la planta inferior.",
        quando: "Por la mañana o a primera hora de la tarde; combina bien con el Cairo copto, a pocos minutos.",
        tempo: "2 horas",
        costo: "unos 500 EGP, unos 8 € (2026)",
        lat: 30.00761,
        lng: 31.24836,
        consiglio: "Visto el GEM, el NMEC vale sobre todo por las momias reales: quien tenga poco tiempo puede limitarse a esa sala y a la galería principal.",
      },
      {
        nome: "El Cairo copto: Iglesia Colgante, sinagoga Ben Ezra y Museo Copto",
        testo: "El núcleo más antiguo de la ciudad, dentro de las murallas de la fortaleza romana de Babilonia. La Iglesia Colgante está construida sobre una puerta de la fortaleza; cerca, la sinagoga Ben Ezra, donde se encontró la Guenizá de El Cairo, y el Museo Copto, con la mayor colección de arte cristiano de Egipto.",
        come: "Metro línea 1 hasta Mar Girgis, que sale delante del barrio. Se recorre a pie por callejones estrechos; para las iglesias, hombros y rodillas cubiertos.",
        quando: "Por la mañana, mejor no en domingo, cuando las iglesias están llenas por la misa.",
        tempo: "2-3 horas",
        costo: "Museo Copto 280 EGP, unos 5 € (2026)",
        orari: "Museo Copto todos los días de 9 a 17 (2026).",
        lat: 30.0054,
        lng: 31.2301,
        url: "https://egymonuments.gov.eg/en/museums/the-coptic-museum/",
      },
      {
        nome: "Mezquita-madrasa del sultán Hasan y mezquita al-Rifai",
        testo: "Dos mezquitas monumentales una frente a otra, a los pies de la Ciudadela. La del sultán Hasan, de 1356-1363, es una de las obras maestras de la arquitectura mameluca, con el patio cerrado por cuatro grandes iwanes; la al-Rifai, terminada en 1912, alberga las tumbas de la familia real egipcia y del último sah de Persia.",
        come: "A pie desde la Ciudadela, bajando hacia la plaza Salah al-Din, o en Uber. Se entra descalzo o con cubrezapatos, las mujeres con pañuelo.",
        quando: "Fuera de las horas de oración, mejor no el viernes a mediodía.",
        tempo: "1 hora",
        lat: 30.0319,
        lng: 31.2567,
      },
      {
        nome: "Mezquita de Ibn Tulun y Museo Gayer-Anderson",
        testo: "La mezquita más antigua de El Cairo que conserva casi intacta su forma original, del siglo IX, con un patio enorme y un minarete de escalera exterior en espiral desde el que se ve media ciudad. Al lado, el Museo Gayer-Anderson ocupa dos casas otomanas amuebladas por un oficial británico: celosías mashrabiya, salones y azoteas.",
        come: "En Uber o taxi; desde la mezquita del sultán Hasan son unos 15 minutos a pie. Al museo se entra por un lateral de la mezquita.",
        quando: "A última hora de la tarde, cuando la luz entra rasante en el patio.",
        tempo: "1,5 horas",
        costo: "Museo Gayer-Anderson 100 EGP, unos 2 € (2026)",
        orari: "Museo Gayer-Anderson todos los días de 9 a 17 (2026).",
        lat: 30.02889,
        lng: 31.24944,
        url: "https://egymonuments.gov.eg/en/museums/gayer-anderson-museum/",
      },
      {
        nome: "Mezquita de al-Azhar",
        testo: "Fundada en 970, es una de las universidades más antiguas del mundo aún en activo y el centro del islam suní. El patio de mármol blanco, rodeado de pórticos y minaretes de distintas épocas, es uno de los rincones más tranquilos del casco antiguo.",
        come: "A pie desde Khan el-Khalili, cruzando la calle al-Azhar por el paso subterráneo. Zapatos fuera en la entrada, mujeres con pañuelo.",
        quando: "Fuera de las horas de oración, por la tarde antes de Khan el-Khalili.",
        tempo: "45 minutos",
        lat: 30.04571,
        lng: 31.26268,
      },
      {
        nome: "Bab Zuweila",
        testo: "La puerta sur de la ciudad fatimí, de 1092, coronada por los dos minaretes de la mezquita de al-Muayyad. Se sube hasta lo alto de los minaretes, y desde allí El Cairo islámico parece un mar de cúpulas y tejados.",
        come: "Al final de la calle al-Muizz, en el lado sur; se sube a pie por escaleras estrechas.",
        quando: "A última hora de la tarde, por la luz sobre la ciudad vieja.",
        tempo: "45 minutos",
        costo: "100 EGP, unos 2 € (2026)",
        orari: "Todos los días de 9 a 17 (2026).",
        lat: 30.04283,
        lng: 31.2578,
        url: "https://egymonuments.gov.eg/en/monuments/bab-zuwayla/",
      },
      {
        nome: "Museo de Arte Islámico",
        testo: "Una de las colecciones de arte islámico más importantes del mundo: lámparas de mezquita de vidrio esmaltado, maderas talladas, cerámica, alfombras y manuscritos de Egipto, Persia y Turquía. Restaurado tras el atentado de 2014, está bien ordenado y poco concurrido.",
        come: "En Uber o taxi hasta Bab al-Khalq, a medio camino entre Downtown y El Cairo islámico.",
        quando: "Por la mañana, antes de pasar al Cairo islámico.",
        tempo: "1,5 horas",
        costo: "340 EGP, unos 6 € (2026)",
        orari: "De 9 a 17 (2026).",
        lat: 30.04472,
        lng: 31.25278,
        url: "https://egymonuments.gov.eg/en/museums/islamic-art-museum/",
      },
      {
        nome: "Parque al-Azhar",
        testo: "Un gran parque construido sobre un antiguo vertedero, al borde del Cairo islámico, con jardines, fuentes y un tramo de murallas ayubíes sacado a la luz. Desde sus terrazas se ve la Ciudadela y toda la ciudad vieja, y es uno de los pocos espacios verdes tranquilos de El Cairo.",
        come: "En Uber o taxi hasta la entrada principal en Salah Salem.",
        quando: "Al atardecer, con la llamada a la oración subiendo desde cientos de minaretes.",
        tempo: "1,5 horas",
        lat: 30.0401,
        lng: 31.26408,
        consiglio: "Los restaurantes del parque tienen las mejores terrazas para cenar con vistas a la ciudad vieja.",
      },
      {
        nome: "Zamalek y la Torre de El Cairo",
        testo: "La isla del Nilo de palacetes de principios del siglo XX, embajadas, galerías y cafés: El Cairo más tranquilo. En su extremo sur está la Torre de El Cairo, 187 metros de 1961, con una terraza desde la que se ven el río, el centro y, en días claros, las pirámides.",
        come: "En Uber, o en metro línea 3 hasta Safaa Hegazy, en Zamalek. A la torre se llega a pie desde el puente de Qasr al-Nil.",
        quando: "Por la tarde y por la noche, cuando baja el calor y se llenan los cafés.",
        tempo: "2-3 horas",
        lat: 30.04583,
        lng: 31.22444,
      },
      {
        nome: "Palacio de Manial",
        testo: "La residencia del príncipe Muhammad Ali Tawfik, construida entre 1900 y 1929 en la isla de Roda, que mezcla estilo otomano, persa y morisco. Salones de azulejos, una sala del trono, un museo de caza y un jardín de banianos y palmeras.",
        come: "En Uber o taxi hasta la isla de Roda, un poco al sur de Garden City.",
        quando: "Por la mañana, antes del calor; casi siempre está poco concurrido.",
        tempo: "1,5 horas",
        costo: "220 EGP, unos 4 € (2026)",
        orari: "Todos los días desde las 9 (2026).",
        lat: 30.0274,
        lng: 31.2298,
        url: "https://egymonuments.gov.eg/en/museums/manial-palace-museum/",
      },
      {
        nome: "Faluca por el Nilo",
        testo: "El velero tradicional, alquilado por una hora en el río. Lejos del tráfico, El Cairo se vuelve silencioso y se entiende hasta qué punto la ciudad vive alrededor del Nilo.",
        come: "Se toma en los embarcaderos de la Corniche, en Garden City o cerca del puente de Qasr al-Nil. El precio es por barca, no por persona.",
        quando: "Al atardecer.",
        tempo: "1 hora",
        costo: "precio por barca, a acordar antes de subir",
        consiglio: "Fijar duración y precio total antes de salir, en libras egipcias.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Gran Museo Egipcio a la apertura",
          "Comida en Zamalek o en Downtown",
          "Tarde: Ciudadela, luego mezquitas del sultán Hasan y al-Rifai",
          "Noche: calle al-Muizz y Khan el-Khalili",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: como arriba",
          "Día 2 por la mañana: Cairo copto en metro, luego el NMEC y la sala de las momias reales",
          "Día 2 por la tarde: Ibn Tulun y Museo Gayer-Anderson",
          "Día 2 por la noche: faluca por el Nilo y cena en Zamalek",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3 por la mañana: Museo Egipcio de Tahrir",
          "Día 3 por la tarde: Museo de Arte Islámico, Bab Zuweila y mezquita de al-Azhar",
          "Día 3 al atardecer: parque al-Azhar",
        ],
      },
    ],
    zone: [
      {
        nome: "Zamalek",
        perChi: "quien quiere un barrio tranquilo y cuidado",
        testo: "Isla en el Nilo con cafés, restaurantes y galerías. Más cara y algo lejos de las visitas, pero cómoda en Uber.",
        fascia: "70-180 €",
      },
      {
        nome: "Downtown",
        perChi: "quien quiere estar cerca del Museo Egipcio",
        testo: "Edificios del siglo XIX, locales y ruido constante. Los hoteles son viejos y de gama media.",
        fascia: "35-90 €",
      },
      {
        nome: "Guiza",
        perChi: "quien quiere las pirámides y el GEM",
        testo: "Zona cercana a los sitios, con hoteles con vistas a las pirámides. El centro queda lejos y el tráfico es pesado.",
        fascia: "30-150 €",
      },
      {
        nome: "Garden City y la Corniche del Nilo",
        perChi: "quien quiere un gran hotel con vistas al río",
        testo: "La orilla este del Nilo entre Downtown y Garden City, con los grandes hoteles internacionales asomados al agua. Cómoda para el Museo Egipcio y las falucas; el tráfico en la Corniche no para.",
        fascia: "120-350 €",
      },
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Arroz, lentejas, pasta, garbanzos y salsa picante de tomate: el plato callejero nacional, en los locales especializados de toda la ciudad."
      },
      {
        "nome": "Ful y taameya",
        "testo": "Habas guisadas y falafel de habas para el desayuno, en los quioscos de la mañana."
      },
      {
        "nome": "Molokhia",
        "testo": "Sopa verde de yute con pollo o conejo y arroz."
      },
      {
        "nome": "Om Ali",
        "testo": "Postre caliente de hojaldre, leche, frutos secos y pasas."
      }
    ],
    attenzioni: [
      "El guía gratuito que se ofrece en la calle, o la tienda de papiros o perfumes de un hermano, es un gancho para llevarlo a un comercio: rechazar con calma.",
      "Taxis sin taxímetro: acordar el precio o usar Uber y Careem.",
      "En los bazares el primer precio es alto: regatear y no comprar nada bajo presión.",
      "El tráfico es pesado: calcular mucho más tiempo del previsto entre una parada y otra.",
      "Tensiones en la región: el gobierno británico (octubre de 2026) avisa del riesgo de escalada, posibles cancelaciones de vuelos y cierres repentinos del paso de Taba; desaconseja viajar al Sinaí del Norte y a la frontera libia. Consultar las recomendaciones oficiales de viaje antes de salir."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Pirámides de Guiza y Esfinge",
        distanza: "45-75 minutos en Uber desde el centro, unos 20 km",
        come: "Uber o conductor hasta la entrada principal; dentro de la meseta el autobús eléctrico une pirámides, mirador y Esfinge.",
        testo: "Las tres pirámides y la Esfinge, a pocos kilómetros del GEM. Se entra a la apertura, a las 7, antes de los autocares. Meseta 700 EGP, interior de la Gran Pirámide unos 1.500 EGP aparte (2026).",
      },
      {
        nome: "Saqqara, Dahshur y Menfis",
        distanza: "1 hora en coche, unos 30-40 km",
        come: "Con conductor para el día (unos 30-50 $ el coche): no hay transporte público cómodo.",
        testo: "La pirámide escalonada de Zoser y las mastabas pintadas de Saqqara, la Romboidal y la pirámide Roja de Dahshur, el coloso de Ramsés II en Menfis. Mucha menos gente que en Guiza. Saqqara 600 EGP, Dahshur 200, Menfis 200 (2026).",
      },
      {
        nome: "Alejandría",
        distanza: "unas 3 horas en tren, 220 km",
        come: "Tren desde la estación Ramsés de El Cairo, o coche con conductor para el día.",
        testo: "La ciudad de Alejandro en el Mediterráneo: la nueva Biblioteca, las catacumbas de Kom el-Shoqafa, la ciudadela de Qaitbay donde estaba el Faro y la Corniche. Larga pero factible en el día.",
      },
      {
        nome: "El Fayum y Wadi al-Hitan",
        distanza: "2-3 horas en coche, unos 150 km",
        come: "Solo con conductor o tour organizado; el último tramo por el desierto requiere un todoterreno.",
        testo: "El oasis con el lago Qarun y el valle de las ballenas fósiles de Wadi al-Hitan, patrimonio de la UNESCO: esqueletos de hace 40 millones de años en la arena. Un día de desierto cerca de la capital.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en El Cairo?",
        risposta: "Dos días completos para el GEM, la Ciudadela y El Cairo islámico y copto, más uno para las pirámides de Guiza y otro para Saqqara y Dahshur. Con menos de tres días conviene elegir entre el Museo Egipcio y el NMEC.",
      },
      {
        domanda: "¿Gran Museo Egipcio o Museo Egipcio de Tahrir?",
        risposta: "Primero el GEM: tiene a Tutankamón y las galerías nuevas. El de Tahrir sigue lleno de piezas extraordinarias y es más barato, pero es una segunda visita para quien tenga tiempo.",
      },
      {
        domanda: "¿Hay que reservar el Gran Museo Egipcio?",
        risposta: "Sí: la entrada es por franja horaria y se reserva solo en la web oficial tickets.gem.eg. Desde el 1 de noviembre de 2026 la entrada para extranjeros cuesta 1.830 EGP.",
      },
      {
        domanda: "¿Mejor dormir en Guiza o en el centro?",
        risposta: "Para una estancia corta, Guiza ahorra dos trayectos en el tráfico hacia las pirámides y el GEM. Para más días, Zamalek o Downtown son más cómodos para El Cairo islámico, los museos del centro y la noche.",
      },
      {
        domanda: "¿Cómo moverse por El Cairo?",
        risposta: "Uber y Careem son la opción más sencilla y con precio claro. El metro es barato y útil para Downtown, Zamalek y El Cairo copto (parada Mar Girgis), pero no llega al aeropuerto ni a Guiza.",
      },
      {
        domanda: "¿Cómo vestirse para visitar las mezquitas de El Cairo?",
        risposta: "Hombros y rodillas cubiertos para todos, pañuelo para las mujeres, zapatos fuera en la entrada. Mejor evitar el viernes a mediodía y las horas de oración.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "La mezquita-madrasa del sultán Hassan y la mezquita de al-Rifa'i con sus minaretes, en el Cairo islámico",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg',
  },
  {
    slug: 'piramidi',
    paeseSlug: 'egitto',
    ordine: 2,
    nome: 'Pirámides: Guiza, Saqqara y Dahshur',
    tipologia: ['archeologia', 'deserto'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      "Las tres necrópolis reales del Imperio Antiguo al suroeste de El Cairo: Guiza con Keops, Kefrén, Micerinos y la Esfinge; Saqqara con la pirámide escalonada de Djoser; Dahshur con la pirámide Romboidal y la pirámide Roja.",
    percheAndarci:
      "Para ver en día y medio toda la evolución de la pirámide, desde la primera escalonada hasta la forma perfecta de Guiza, y para entrar en las cámaras interiores de Saqqara y Dahshur, mucho menos concurridas que las de Keops.",
    cosaVedere: [
      "La Gran Pirámide de Keops, también por dentro con entrada aparte",
      "La Esfinge y el templo del valle de Kefrén",
      "El mirador de las nueve pirámides, en el desierto detrás de Micerinos",
      "La pirámide escalonada de Djoser y las mastabas pintadas de Saqqara (Ti, Mereruka)",
      "El Serapeum de Saqqara, con los sarcófagos de los toros Apis",
      "La pirámide Roja de Dahshur, en la que se baja sin colas",
    ],
    cosaFare: [
      "Entrar a las 7, a la apertura, para tener una hora de buena luz y menos grupos",
      "Moverse por la meseta con el autobús eléctrico interno en lugar de con caballos y camellos",
    ],
    comeArrivare: "Guiza está a 15-20 km del centro de El Cairo, de 20 minutos a una hora según el tráfico, en Uber o Careem. Desde el aeropuerto de El Cairo (CAI) se tarda 45-75 minutos hasta Guiza, unos 300-500 EGP en Uber; algunos vuelos usan el Sphinx International Airport, más cercano. Saqqara y Dahshur están a 45-60 minutos de Guiza: se va con conductor para el día, unos 30-50 $ por vehículo, o con una excursión.",
    comeSpostarsi:
      "En Guiza el autobús eléctrico interno conecta la entrada, las pirámides y la Esfinge; para Saqqara y Dahshur hace falta un coche con conductor para el día (aproximadamente 30-50 $).",
    periodoMigliore: "de octubre a abril, siempre a primera hora de la mañana",
    costi: "Presupuesto bajo unos 30-45 € al día por persona (guesthouse en Nazlet el-Semman, koshari y comida callejera, solo la meseta); medio 70-110 € (hotel cerca del GEM, GEM y Guiza, conductor para Saqqara y Dahshur); alto desde 180 € (hotel de lujo bajo las pirámides, guía egiptóloga, interior de Keops). Entradas 2026: meseta 700 EGP, GEM 1.830 EGP, Saqqara 600, Dahshur 200, Menfis 200 EGP; un euro vale unos 60 EGP.",
    erroriDaEvitare: [
      "Creer a quien dice que «la entrada está cerrada» o que «hay que pasar por aquí»: es el primer gancho para el paseo de pago en camello",
      "Subirse a un camello sin haber acordado el precio total, la duración y qué incluye: la cifra se duplica para bajar",
      "Comprar la entrada para el interior de Keops pensando que se van a ver decoraciones: las cámaras están desnudas, el interés está en el corredor y en la Gran Galería",
    ],
    miaEsperienza:
      "Estuve con amigos en los primeros días de nuestra ruta de tres semanas por Egipto, con base en Guiza: las pirámides de Guiza y el Gran Museo Egipcio, y luego un día en coche con conductor entre Saqqara, Dahshur y Menfis.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Pirámides y Esfinge de Guiza",
        "testo": "La Gran Pirámide de Keops, las de Kefrén y Micerino y la Esfinge: el conjunto más famoso de Egipto, en la meseta al suroeste de El Cairo. El interior de las pirámides requiere entradas aparte.",
        "come": "Desde Guiza o El Cairo en Uber o con conductor; se recorre a pie, en lanzadera o a caballo.",
        "quando": "A la apertura: la luz es mejor y hay menos grupos.",
        "tempo": "3-4 horas",
        "costo": "700 EGP, unos 11,5 €, para adultos extranjeros, 350 para estudiantes (2026). Gran Pirámide, pirámides de Kefrén y Micerino, tumba de Meresankh III y cementerio de los obreros aparte.",
        "orari": "Todos los días desde las 7, última entrada a las 16 (taquilla oficial egymonuments.com, 2026)",
        "lat": 29.97611,
        "lng": 31.13278,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/giza-plateau/",
        "consiglio": "El mirador detrás de Micerino muestra las tres pirámides juntas, sin multitud."
      },
      {
        "nome": "Saqqara",
        "testo": "La pirámide escalonada de Zoser, considerada la primera gran construcción de piedra tallada, y las tumbas de los nobles, como las mastabas de Mereruka y de Ti, alto funcionario de la V dinastía, con relieves muy bellos de agricultura, pesca, caza en los pantanos y construcción de barcos. La mastaba de Ti no aparece en las entradas oficiales: preguntar en taquilla si está abierta.",
        "come": "En coche con conductor desde Guiza o El Cairo.",
        "quando": "Por la mañana.",
        "tempo": "2-3 horas",
        "costo": "600 EGP, unos 10 €, el área con el Museo Imhotep; tumbas de los nobles y del Imperio Nuevo 400 EGP, Mereruka 200, interior de Djoser 280 (adultos extranjeros, 2026)",
        "orari": "Todos los días 8-16 (2026)",
        "lat": 29.87111,
        "lng": 31.21639,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/saqqara/",
        "consiglio": "Las tumbas pintadas valen tanto como la pirámide y suelen tener menos gente."
      },
      {
        "nome": "Dahshur y la pirámide Roja",
        "testo": "La pirámide Roja y la pirámide Romboidal, de Snefru: los intentos que llevaron a la verdadera pirámide lisa. Suele haber poca gente.",
        "come": "En coche con conductor, cerca de Saqqara.",
        "quando": "Por la mañana, con menos calor.",
        "tempo": "1-2 horas",
        "costo": "200 EGP, unos 3,5 €, para adultos extranjeros, 100 para estudiantes (2026); se baja a la pirámide Roja sin suplemento",
        "orari": "Todos los días 8-17 (2026)",
        "lat": 29.80833,
        "lng": 31.20583,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/dahshur/",
        "consiglio": "Un excelente complemento de Saqqara para quien tiene un día entero con conductor."
      },
      {
        "nome": "Interior de la Gran Pirámide",
        "testo": "Se sube encorvado por un pasillo estrecho hasta la Gran Galería, de más de ocho metros de alto, y la Cámara del Rey, con el sarcófago de granito. Las cámaras están vacías: el interés está en la construcción.",
        "come": "Entrada aparte además de la del área; accesos limitados.",
        "quando": "Justo a la apertura, antes de que se forme cola.",
        "tempo": "30-45 minutos",
        "costo": "1.000 EGP, unos 16,5 €, para adultos extranjeros según la web del Ministerio, además del área (2026)",
        "orari": "Todos los días 7-17 (2026)",
        "lat": 29.97917,
        "lng": 31.13417,
        "url": "https://egymonuments.gov.eg/en/monuments/the-great-pyramid/",
        "consiglio": "Quien sufra claustrofobia o de la espalda, que lo piense: el paso es bajo y caluroso."
      },
      {
        "nome": "Esfinge y templo del valle de Kefrén",
        "testo": "La Esfinge, tallada en la roca de la meseta, mide unos 73 metros de largo. Al lado está el templo del valle de Kefrén, con pilares de granito rosa, desde el que se llega a la terraza frente a la estatua.",
        "come": "Desde la entrada de la Esfinge, abajo, o a pie desde la pirámide de Kefrén por la calzada.",
        "quando": "A primera hora, o por la noche con el espectáculo de luz y sonido.",
        "tempo": "45 minutos",
        "costo": "Incluida en la entrada de la meseta (2026)",
        "lat": 29.97526,
        "lng": 31.13758
      },
      {
        "nome": "Pirámide de Kefrén",
        "testo": "La segunda pirámide de Guiza, que parece la más alta porque está en un punto más elevado y conserva en la cima un tramo del revestimiento original de caliza.",
        "come": "A pie o con el autobús eléctrico interno; el interior tiene entrada aparte, precio en taquilla.",
        "quando": "Por la mañana.",
        "tempo": "30 minutos por fuera",
        "lat": 29.97611,
        "lng": 31.13083
      },
      {
        "nome": "Pirámide de Micerino",
        "testo": "La más pequeña de las tres grandes, con las tres pirámides de las reinas al lado y parte del revestimiento de granito todavía en la base.",
        "come": "A pie o con el autobús eléctrico, hacia el mirador.",
        "quando": "Por la mañana.",
        "tempo": "20-30 minutos",
        "lat": 29.9725,
        "lng": 31.12833
      },
      {
        "nome": "Mirador panorámico",
        "testo": "La explanada en el desierto detrás de Micerino desde la que se ven todas las pirámides de Guiza en fila. Es la foto clásica, y suele haber menos gente que bajo Keops.",
        "come": "Con el autobús eléctrico interno o a pie, unos 20 minutos desde Micerino.",
        "quando": "Por la mañana o en la última hora antes del cierre.",
        "tempo": "30 minutos",
        "costo": "Incluido en la entrada de la meseta (2026)",
        "lat": 29.973,
        "lng": 31.11963,
        "consiglio": "Aquí se concentran camelleros y vendedores: ningún paseo sin precio total acordado."
      },
      {
        "nome": "Gran Museo Egipcio",
        "testo": "El nuevo museo nacional a dos kilómetros de las pirámides: la gran escalinata con estatuas de faraones, las galerías principales, el museo de las barcas de Keops y las salas de Tutankamón, con el ajuar expuesto completo.",
        "come": "Uber o taxi desde la meseta, unos 10 minutos. Entrada por franja horaria, a reservar en línea.",
        "quando": "Media jornada después de las pirámides; los miércoles y sábados abre hasta la noche.",
        "tempo": "3-4 horas",
        "costo": "1.830 EGP, unos 30 €, desde el 1 de noviembre de 2026 (del viaje de esta web)",
        "orari": "Domingo, lunes, martes, jueves y viernes: complejo 8:30-19, galerías 9-18; miércoles y sábado: complejo 8:30-22, galerías 9-21; última entrada una hora antes del cierre de las galerías (2026)",
        "lat": 29.995,
        "lng": 31.1193,
        "url": "https://visit-gem.com/en/home"
      },
      {
        "nome": "Pirámide escalonada de Djoser",
        "testo": "La primera gran construcción en piedra tallada, encargada por Djoser y atribuida al arquitecto Imhotep, hacia el 2650 a. C. Tras la restauración también se baja al interior, hasta el pozo y los pasillos con azulejos azules.",
        "come": "Dentro del área de Saqqara, a pie desde la entrada del complejo funerario.",
        "quando": "Por la mañana.",
        "tempo": "1 hora con el interior",
        "costo": "280 EGP, unos 4,5 €, por el interior, además del área (adultos extranjeros, 2026)",
        "orari": "Todos los días 8-16 (2026)",
        "lat": 29.8711,
        "lng": 31.2167,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/saqqara/"
      },
      {
        "nome": "Serapeum",
        "testo": "Las galerías subterráneas donde se enterraban los toros sagrados Apis, con una veintena de sarcófagos de granito de decenas de toneladas cada uno. Impresiona por las dimensiones.",
        "come": "En el área de Saqqara, en coche desde la entrada principal.",
        "quando": "A mediodía, cuando fuera hace más calor: bajo tierra está fresco.",
        "tempo": "30-45 minutos",
        "costo": "180 EGP, unos 3 €, para adultos extranjeros según la web del Ministerio (2026)",
        "orari": "Todos los días 8-17 (2026)",
        "lat": 29.87472,
        "lng": 31.21242,
        "url": "https://egymonuments.gov.eg/en/monuments/serapeum/"
      },
      {
        "nome": "Mastaba de Mereruka",
        "testo": "La tumba del visir del faraón Teti, con más de treinta salas decoradas: escenas de caza, pesca, artesanos y danzas, con los colores en parte todavía visibles.",
        "come": "En el área de Saqqara, a pocos pasos de la pirámide de Teti.",
        "quando": "Por la mañana.",
        "tempo": "30 minutos",
        "costo": "200 EGP, unos 3,5 €, para adultos extranjeros, además del área (2026)",
        "orari": "Todos los días 8-16 (2026)",
        "lat": 29.8759,
        "lng": 31.2212
      },
      {
        "nome": "Museo Imhotep",
        "testo": "El museo a la entrada de Saqqara, con hallazgos de la necrópolis y la reconstrucción de la biblioteca del egiptólogo Jean-Philippe Lauer, que pasó su vida restaurando el complejo de Djoser.",
        "come": "A la entrada del área de Saqqara.",
        "quando": "Al llegar, para entender el sitio antes de recorrerlo.",
        "tempo": "30-45 minutos",
        "costo": "Incluido en la entrada de Saqqara, 600 EGP (2026)",
        "orari": "Todos los días 8-17, taquilla hasta las 16 (2026)",
        "lat": 29.86944,
        "lng": 31.22472,
        "url": "https://egymonuments.gov.eg/en/museums/imhotep-museum/"
      },
      {
        "nome": "Pirámide Acodada",
        "testo": "La pirámide de Snefru que cambia de pendiente a media altura, quizá porque la estructura daba señales de ceder. Conserva gran parte del revestimiento liso exterior.",
        "come": "En Dahshur, a pocos minutos en coche de la pirámide Roja.",
        "quando": "Por la mañana.",
        "tempo": "30 minutos",
        "costo": "Incluida en la entrada de Dahshur, 200 EGP (2026)",
        "orari": "Todos los días 8-17 (2026)",
        "lat": 29.79028,
        "lng": 31.20917,
        "url": "https://egymonuments.gov.eg/en/monuments/the-bent-pyramid/"
      },
      {
        "nome": "Menfis (Mit Rahina)",
        "testo": "Lo que queda de la primera capital de Egipto es un museo al aire libre entre palmerales: el coloso tumbado de Ramsés II, una esfinge de alabastro y estatuas dispersas. Una parada rápida en la carretera entre Saqqara y Guiza.",
        "come": "En coche, entre Saqqara y El Cairo.",
        "quando": "El mismo día que Saqqara y Dahshur.",
        "tempo": "30-45 minutos",
        "costo": "200 EGP, unos 3,5 €, para adultos extranjeros, 100 para estudiantes (2026)",
        "orari": "Todos los días desde las 8, última entrada a las 16 (2026)",
        "lat": 29.84944,
        "lng": 31.255,
        "url": "https://egymonuments.com/details/Memphis"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Guiza a la apertura: Keops, el interior si se quiere, Kefrén y Micerino",
          "Mirador en autobús eléctrico, luego la Esfinge y el templo del valle",
          "Comida cerca de la meseta",
          "Tarde: Gran Museo Egipcio"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1 como arriba",
          "Día 2 con conductor: Saqqara (Museo Imhotep, Djoser, Mereruka, Serapeum)",
          "Comida por el camino, luego Dahshur: pirámides Roja y Acodada",
          "Vuelta pasando por Menfis"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: segunda visita al GEM con calma, o Meidum y el oasis de El Fayum en el día"
        ]
      }
    ],
    zone: [
      {
        "nome": "Guiza, Nazlet el-Semman",
        "perChi": "quien quiere las pirámides desde la ventana",
        "testo": "Guesthouses y pequeños hoteles con terraza sobre la meseta, junto a la entrada de la Esfinge. Zona ruidosa y poco cuidada.",
        "fascia": "30-50 €"
      },
      {
        "nome": "El Cairo",
        "perChi": "quien quiere otros barrios al alcance",
        "testo": "Se hace el día en Uber o con conductor: más oferta de locales, pero mucho trayecto con tráfico."
      },
      {
        "nome": "Guiza, zona del GEM",
        "perChi": "quien quiere un hotel moderno cerca de pirámides y museo",
        "testo": "Hoteles boutique y de cadena en la carretera del Gran Museo Egipcio, a pocos minutos en coche de la meseta.",
        "fascia": "70-120 €"
      }
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Plato de arroz, lentejas, pasta y salsa picante, para un almuerzo barato."
      },
      {
        "nome": "Pichón relleno (hamam mahshi)",
        "testo": "Un clásico egipcio, relleno de arroz o freekeh."
      },
      {
        "nome": "Té de menta",
        "testo": "Servido en cada parada, muy dulce."
      },
      {
        "nome": "Pan baladi",
        "testo": "Pan plano egipcio, cocido en los hornos de barrio."
      }
    ],
    attenzioni: [
      "Quien dice que la entrada está cerrada o que hay que pasar por otro lado intenta llevarlo al paseo de pago en camello: ignorar.",
      "Camello y caballo: acordar precio total, duración y qué incluye, y preguntar qué pasa al bajar.",
      "El interior de la Gran Pirámide tiene cámaras desnudas: el interés está en el corredor y la Gran Galería. Si hay claustrofobia, pensarlo.",
      "No comprar papiros ni recuerdos en la entrada a los vendedores que se acercan."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "El Cairo",
        "distanza": "unos 15 km, 20-60 minutos",
        "come": "Uber o Careem, según el tráfico.",
        "testo": "El Cairo islámico con la Ciudadela y el Jan el-Jalili, el barrio copto y el Museo Egipcio de la plaza Tahrir: la otra mitad de una visita a las pirámides."
      },
      {
        "nome": "Meidum",
        "distanza": "unos 80 km, 1-1,5 horas",
        "come": "Coche con conductor para el día.",
        "testo": "La pirámide derrumbada de Snefru, un intento anterior a Dahshur, en medio del campo y casi siempre desierta. Se entra en la cámara interior."
      },
      {
        "nome": "Oasis de El Fayum y Wadi el-Rayan",
        "distanza": "unos 100-140 km, 1,5-3 horas",
        "come": "Coche con conductor o excursión organizada, día completo.",
        "testo": "Lagos en el desierto, cascadas bajas en Wadi el-Rayan y, más lejos, Wadi al-Hitan, el Valle de las Ballenas patrimonio de la UNESCO, con fósiles de cetáceos en la arena (último tramo en todoterreno)."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuánto tiempo hace falta para las pirámides de Guiza?",
        "risposta": "Tres o cuatro horas para la meseta con el mirador y la Esfinge, y media jornada más para el Gran Museo Egipcio. Saqqara y Dahshur piden un segundo día."
      },
      {
        "domanda": "¿Merece la pena entrar en la Gran Pirámide?",
        "risposta": "Sí para quien tiene curiosidad por cómo se construyó: la Gran Galería impresiona. No para quien espera pinturas, porque las cámaras están vacías, ni para quien lleva mal los espacios estrechos."
      },
      {
        "domanda": "¿Merecen la pena Saqqara y Dahshur?",
        "risposta": "Sí: muestran la historia de la pirámide desde la primera escalonada hasta la lisa, con mucha menos gente que Guiza, y a la pirámide Roja se baja sin suplemento."
      },
      {
        "domanda": "¿Mejor dormir en Guiza o en El Cairo?",
        "risposta": "Guiza para tener las pirámides al amanecer y el GEM cerca; El Cairo para restaurantes y barrios históricos. Entre los dos hay de 20 minutos a una hora de tráfico."
      },
      {
        "domanda": "¿Camello o autobús eléctrico en la meseta?",
        "risposta": "El autobús eléctrico interno une entrada, pirámides y mirador sin regateos. Quien quiera camello acuerda antes precio total, duración y recorrido."
      },
      {
        "domanda": "¿Hay que reservar el GEM?",
        "risposta": "Sí: la entrada es por franja horaria y se compra en línea. La entrada incluye también las salas de Tutankamón y el museo de las barcas de Keops."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Las pirámides de Guiza recortándose sobre el desierto en un día despejado",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg',
  },
  {
    slug: 'luxor',
    paeseSlug: 'egitto',
    ordine: 3,
    nome: 'Luxor',
    tipologia: ['archeologia', 'Nilo'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "La antigua Tebas, dividida en dos por el Nilo: en la orilla este los templos de los vivos, Karnak y Luxor; en la orilla oeste la ciudad de los muertos, con el Valle de los Reyes, el Valle de las Reinas y el templo de Hatshepsut.",
    percheAndarci:
      "Por la mayor concentración de monumentos del Egipto faraónico en un solo lugar, y por las tumbas pintadas que todavía conservan los colores originales.",
    cosaVedere: [
      "El complejo de Karnak y la sala hipóstila con 134 columnas",
      "El templo de Luxor, para ver al atardecer y con la iluminación nocturna",
      "El Valle de los Reyes: la entrada básica incluye tres tumbas, las de Tutankamón y Seti I se pagan aparte",
      "El templo funerario de Hatshepsut en Deir el-Bahari",
      "Medinet Habu, el templo de Ramsés III, con relieves todavía coloreados y pocos visitantes",
      "Los Colosos de Memnón y el poblado de los artesanos de Deir el-Medina",
    ],
    cosaFare: [
      "El vuelo en globo al amanecer sobre la orilla oeste",
      "Cruzar el Nilo en el ferri público o en falúa",
      "Una excursión de un día al templo de Dendera o de Abidos",
    ],
    doveDormire:
      "Orilla este por comodidad (restaurantes, templos a pie), orilla oeste por la calma y la cercanía a las tumbas. Económico: guesthouses en la orilla oeste · gama media: hoteles sobre el Nilo en la orilla este · lujo: Sofitel Winter Palace, Al Moudira en la orilla oeste.",
    doveMangiare:
      "Cocina egipcia casera en los restaurantes de la orilla oeste, pichón relleno y tajín; en la orilla este los locales con terraza frente al templo de Luxor.",
    comeArrivare: "Desde El Cairo lo más rápido es el vuelo de EgyptAir de una hora, unos 60-120 € si se reserva con tiempo; desde el aeropuerto de Luxor se llega al centro en taxi o con el traslado del hotel. Como alternativa está el tren nocturno con camas de Abela Trains desde las estaciones de El Cairo o Guiza, unas 10-11 horas. Desde el mar Rojo se llega en coche con conductor: unas 4 horas desde Hurghada (70-120 $ por vehículo) y 4-4,5 horas desde Marsa Alam (100-150 $); a Hurghada también hay autobuses Go Bus.",
    comeSpostarsi:
      "En la orilla oeste hace falta un coche con conductor o un taxi para el día (aproximadamente 25-40 $); en la orilla este se anda a pie o en Uber. Calesas solo acordando el precio antes.",
    periodoMigliore: "de octubre a abril; en verano solo visitas entre el amanecer y las 11",
    costi: "Presupuesto bajo unos 35-50 € al día por persona (guesthouse en la orilla oeste, comida en puestos, ferry público, uno o dos sitios); medio 80-130 € (hotel junto al Nilo, conductor para la orilla oeste a 25-40 $, tres o cuatro sitios al día); alto desde 200 € (hotel de lujo, guía privado, globo, Seti I y Nefertari). Entradas 2026: Valle de los Reyes 750 EGP, Karnak 600, templo de Luxor 500, Hatshepsut 440, Tutankamón 700, Medinet Habu y Rameseo 220 EGP; un euro vale unos 60 EGP.",
    erroriDaEvitare: [
      "Ir al Valle de los Reyes a mediodía: entre las paredes de roca se superan los 40 °C ya en mayo",
      "Hacer fotos en las tumbas sin el permiso fotográfico si se exige: los guardianes cobran la «multa» en efectivo",
      "Elegir el globo solo por el precio más bajo: cuenta la compañía, y los vuelos se cancelan con viento",
    ],
    miaEsperienza:
      "Llegué con amigos en el crucero por el Nilo desde Asuán, durante nuestra ruta de tres semanas por Egipto: Karnak y el templo de Luxor, el Valle de los Reyes y Hatshepsut en la orilla oeste, y el globo al amanecer.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Templo de Karnak",
        "testo": "Uno de los mayores complejos religiosos del antiguo Egipto, construido durante casi dos mil años por una treintena de faraones. La sala hipóstila tiene 134 columnas: las doce centrales miden 21 metros.",
        "come": "Desde la ciudad en taxi o calesa. Se camina por el sitio, y por la avenida de las esfinges desde el templo de Luxor si se quiere el recorrido completo.",
        "quando": "Abierto todos los días de 6 a 17 (2026). Llegar a la apertura: en verano es el único momento soportable.",
        "tempo": "2-3 horas",
        "costo": "600 EGP, unos 10 €, con el museo al aire libre; templo de Mut 200 EGP (adultos extranjeros, 2026)",
        "orari": "Todos los días 6-17 (2026)",
        "lat": 25.7183,
        "lng": 32.6583,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/karnak/",
        "consiglio": "Volver por la noche para el espectáculo de luz y sonido, si está programado."
      },
      {
        "nome": "Templo de Luxor",
        "testo": "Un templo más pequeño, en medio de la ciudad, con las estatuas colosales de Ramsés II y uno de los dos obeliscos de la entrada: el otro está en París, en la place de la Concorde, desde 1836. De noche, iluminado, es precioso.",
        "come": "A pie desde el paseo del río en la orilla este.",
        "quando": "Abierto todos los días de 6 a 20 (2026). Atardecer y noche.",
        "tempo": "1 hora",
        "costo": "500 EGP, unos 8 €, para adultos extranjeros; estudiantes 250 EGP (2026)",
        "orari": "Todos los días 6-20 (2026)",
        "lat": 25.7,
        "lng": 32.63917,
        "url": "https://egymonuments.gov.eg/en/monuments/luxor-temple/"
      },
      {
        "nome": "Valle de los Reyes",
        "testo": "Más de sesenta tumbas excavadas en la roca, casi todas de faraones del Imperio Nuevo, con paredes pintadas aún coloridas. La entrada básica cubre un número limitado de tumbas; Tutankamón y otras se pagan aparte.",
        "come": "En la orilla oeste, en taxi o en tour. Se visita a pie, tumba por tumba.",
        "quando": "Abierto todos los días de 6 a 17 (2026). Llegar a la apertura: a mediodía hace mucho calor, ya en primavera.",
        "tempo": "2-3 horas",
        "costo": "750 EGP, unos 12,5 €, con tres tumbas a elegir; estudiantes 375 EGP; Tutankamón y Seti I aparte (2026)",
        "orari": "Todos los días 6-17 (2026)",
        "lat": 25.74025,
        "lng": 32.60236,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/valley-of-the-kings/",
        "consiglio": "Preguntar en taquilla qué tumbas están abiertas ese día y elegir las de decoración mejor conservada, no solo la más famosa."
      },
      {
        "nome": "Templo de Hatshepsut",
        "testo": "El templo funerario de la reina-faraón en Deir el-Bahari, en terrazas bajo la pared de roca, con una arquitectura que parece moderna.",
        "come": "En la orilla oeste, cerca del Valle de los Reyes.",
        "quando": "Abierto todos los días de 6 a 17 (2026). A primera hora.",
        "tempo": "1 hora",
        "costo": "440 EGP, unos 7 €, para adultos extranjeros; estudiantes 220 EGP (2026)",
        "orari": "Todos los días 6-17 (2026)",
        "lat": 25.73806,
        "lng": 32.60694,
        "url": "https://egymonuments.gov.eg/en/monuments/hatshepsut-temple/"
      },
      {
        "nome": "Medinet Habu y Colosos de Memnón",
        "testo": "El templo de Ramsés III, con relieves aún coloreados y menos visitantes que los grandes templos, cerca de los dos colosos de Amenhotep III que vigilan la llanura.",
        "come": "En la orilla oeste, en taxi con las otras paradas.",
        "quando": "Media mañana o última hora de la tarde.",
        "tempo": "1-1,5 horas",
        "costo": "Medinet Habu 220 EGP, unos 3,5 €, estudiantes 110 EGP (2026); los Colosos se ven gratis desde la carretera",
        "orari": "Medinet Habu todos los días desde las 6, última entrada a las 17 en verano y a las 16 en invierno (2026)",
        "lat": 25.71972,
        "lng": 32.60083,
        "url": "https://egymonuments.com/details/MedinetHabu",
        "consiglio": "Medinet Habu suele pasarse por alto, pero merece la parada."
      },
      {
        "nome": "Tumba de Tutankamón (KV62)",
        "testo": "La tumba que encontró Howard Carter en 1922, pequeña y decorada solo en la cámara funeraria. El motivo para entrar es la momia del rey, que sigue aquí en una vitrina, mientras el ajuar está en el Gran Museo Egipcio.",
        "come": "Dentro del Valle de los Reyes, con una entrada aparte que se compra en el acceso al valle.",
        "quando": "Nada más abrir el valle, antes que los grupos.",
        "tempo": "15-20 minutos",
        "costo": "700 EGP, unos 11,5 €, para adultos extranjeros; estudiantes 350 EGP (2026)",
        "orari": "Todos los días 6-17, como el valle (2026)",
        "lat": 25.74039,
        "lng": 32.60142,
        "url": "https://egymonuments.gov.eg/en/monuments/tomb-of-tutankhamun/"
      },
      {
        "nome": "Tumba de Seti I (KV17)",
        "testo": "La tumba más larga del valle y una de las más decoradas, descubierta por Giovanni Battista Belzoni en 1817. Pasillos y salas están pintados desde la entrada hasta la cámara funeraria, con su techo astronómico.",
        "come": "Dentro del Valle de los Reyes, entrada aparte vendida en el acceso al valle.",
        "quando": "Por la mañana, en la misma visita al valle.",
        "tempo": "30-40 minutos",
        "costo": "unos 2.000 EGP, unos 33 € (2026, del viaje de esta web)",
        "lat": 25.73981,
        "lng": 32.60189,
        "consiglio": "Si se paga una sola tumba extra, esta vale más que la de Tutankamón por las pinturas."
      },
      {
        "nome": "Valle de las Reinas",
        "testo": "La necrópolis de reinas y príncipes de las dinastías XIX y XX. La tumba más famosa es la de Nefertari (QV66), esposa de Ramsés II, con algunas de las pinturas mejor conservadas de Egipto y una entrada aparte, mucho más cara.",
        "come": "En la orilla oeste, en taxi con las otras paradas; se visita a pie.",
        "quando": "A primera hora.",
        "tempo": "1 hora, más con Nefertari",
        "costo": "220 EGP, unos 3,5 €, para adultos extranjeros; estudiantes 110 EGP; Nefertari aparte (2026)",
        "orari": "Todos los días desde las 6, última entrada a las 17 en verano y a las 16 en invierno (2026)",
        "lat": 25.7275,
        "lng": 32.59306,
        "url": "https://egymonuments.com/details/ValleyOfTheQueens"
      },
      {
        "nome": "Deir el-Medina",
        "testo": "El poblado de los artesanos que excavaban y pintaban las tumbas reales, con los cimientos de las casas, un pequeño templo ptolemaico de Hathor y sus propias tumbas, pequeñas pero llenas de color. Cuenta la vida de quienes trabajaban para los faraones.",
        "come": "En la orilla oeste, entre el Valle de las Reinas y las Tumbas de los Nobles.",
        "quando": "Media mañana.",
        "tempo": "1 hora",
        "orari": "Todos los días desde las 6, última entrada a las 17 (2026)",
        "lat": 25.7283,
        "lng": 32.6014,
        "url": "https://egymonuments.com/details/DeirElMadinaTemple"
      },
      {
        "nome": "Tumbas de los Nobles",
        "testo": "Las tumbas de los funcionarios tebanos en la colina de Sheikh Abd el-Qurna, como las de Rekhmire, Sennefer, Nakht, Menna y Ramose. Las escenas son de la vida diaria: campos, banquetes, artesanos, y suele haber muy poca gente.",
        "come": "En la orilla oeste; las entradas se venden por grupos de tumbas.",
        "quando": "Media mañana o primera hora de la tarde.",
        "tempo": "1-2 horas",
        "orari": "Todos los días desde las 6, última entrada a las 17 en verano y a las 16 en invierno (2026)",
        "lat": 25.7317,
        "lng": 32.6092,
        "url": "https://egymonuments.com/details/TombsOfTheNobles",
        "consiglio": "Nakht y Menna están cerca y tienen los colores más vivos."
      },
      {
        "nome": "Rameseo",
        "testo": "El templo funerario de Ramsés II, en parte derrumbado. En el suelo yace el coloso roto del faraón que habría inspirado el poema «Ozymandias» de Shelley.",
        "come": "En la orilla oeste, en la carretera entre los Colosos y el Valle de los Reyes.",
        "quando": "Última hora de la tarde, con la luz baja.",
        "tempo": "45 minutos",
        "costo": "220 EGP, unos 3,5 €, para adultos extranjeros; estudiantes 110 EGP (2026)",
        "orari": "Todos los días desde las 6, última entrada a las 17 en verano y a las 16 en invierno (2026)",
        "lat": 25.72778,
        "lng": 32.61056,
        "url": "https://egymonuments.com/details/Ramesseum"
      },
      {
        "nome": "Casa de Howard Carter",
        "testo": "La casa donde vivió Carter durante las excavaciones, al comienzo de la carretera al Valle de los Reyes, con su estudio, el cuarto oscuro y muebles de época. Una parada corta que ayuda a entender cómo fue el descubrimiento de 1922.",
        "come": "En la orilla oeste, en taxi por la carretera del valle.",
        "quando": "Después del Valle de los Reyes.",
        "tempo": "30 minutos",
        "costo": "220 EGP, unos 3,5 €, para adultos extranjeros; estudiantes 110 EGP (2026)",
        "orari": "Todos los días desde las 6, última entrada a las 17 en verano y a las 16 en invierno (2026)",
        "lat": 25.73888,
        "lng": 32.62817,
        "url": "https://egymonuments.com/details/CarterHouse"
      },
      {
        "nome": "Museo de Luxor",
        "testo": "Un museo pequeño y muy cuidado junto al Nilo, con estatuas escogidas, las piezas del escondite hallado en 1989 bajo el templo de Luxor y dos momias reales. Se ve bien en una hora, y abre también por la tarde-noche.",
        "come": "A pie o en calesa por la Corniche de la orilla este, entre Karnak y el templo de Luxor.",
        "quando": "En la apertura de la tarde, cuando refresca.",
        "tempo": "1-1,5 horas",
        "costo": "400 EGP, unos 6,5 €, para adultos extranjeros; estudiantes 200 EGP (2026)",
        "orari": "Todos los días desde las 9 (última entrada a las 13 en invierno, a las 12 en verano) y desde las 17 (última entrada a las 20 en invierno, a las 19 en verano) (2026)",
        "lat": 25.7075,
        "lng": 32.64472,
        "url": "https://egymonuments.com/details/LuxorMuseum"
      },
      {
        "nome": "Museo de la Momificación",
        "testo": "Una sala bajo la Corniche dedicada al embalsamamiento: instrumentos, vasos canopos, animales momificados y la momia de un sacerdote. Breve, pero explica bien lo que luego se ve en las tumbas.",
        "come": "En la Corniche, a pocos minutos a pie del templo de Luxor.",
        "quando": "Por la tarde-noche, antes o después del templo de Luxor.",
        "tempo": "30-45 minutos",
        "costo": "220 EGP, unos 3,5 €, para adultos extranjeros; estudiantes 110 EGP (2026)",
        "orari": "Todos los días desde las 9 (última entrada a las 13 en invierno, a las 12 en verano) y desde las 17 (última entrada a las 19) (2026)",
        "lat": 25.70222,
        "lng": 32.63972,
        "url": "https://egymonuments.com/details/MummificationMuseumLuxor"
      },
      {
        "nome": "Avenida de las Esfinges",
        "testo": "La vía procesional de unos 2,7 km que unía Karnak con el templo de Luxor, flanqueada por cientos de esfinges. Reabierta en 2021 tras décadas de excavaciones, hoy se ve desde la calle y desde el templo de Luxor, donde empieza.",
        "come": "A pie a lo largo del recorrido entre los dos templos, o desde dentro del templo de Luxor.",
        "quando": "Al atardecer, junto con el templo de Luxor.",
        "tempo": "30 minutos para el tramo cercano al templo",
        "lat": 25.708,
        "lng": 32.648
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Al amanecer: Valle de los Reyes con tres tumbas y Tutankamón",
          "Templo de Hatshepsut",
          "Medinet Habu y Colosos de Memnón",
          "Tarde: Karnak",
          "Atardecer y noche: templo de Luxor y Avenida de las Esfinges"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Valle de los Reyes con Seti I o Tutankamón, Hatshepsut, Deir el-Medina, Medinet Habu y Colosos",
          "Día 2: globo al amanecer, Karnak por la mañana",
          "Tarde en el hotel o en faluca por el Nilo",
          "Noche: Museo de Luxor y templo de Luxor iluminado"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: Valle de las Reinas, Tumbas de los Nobles, Rameseo y Casa de Carter",
          "Como alternativa: excursión a Dendera, vuelta para el Museo de la Momificación"
        ]
      }
    ],
    zone: [
      {
        "nome": "Orilla este",
        "perChi": "quien quiere restaurantes y vida nocturna",
        "testo": "Cerca de Karnak y del templo de Luxor, con hoteles de todas las gamas y el paseo del río. Más turística y con más vendedores.",
        "fascia": "60-110 €"
      },
      {
        "nome": "Orilla oeste",
        "perChi": "quien quiere calma",
        "testo": "Campo, casas y pequeñas casas de huéspedes cerca de las tumbas y los cultivos, con poco ruido.",
        "fascia": "25-40 €"
      },
      {
        "nome": "Hoteles históricos y de lujo",
        "perChi": "quien quiere el Nilo desde la terraza",
        "testo": "Los grandes hoteles de la Corniche y las residencias con encanto de la orilla oeste, con jardín y piscina. El Sofitel Winter Palace figura cerrado por obras desde mayo de 2026: comprobarlo antes de reservar.",
        "fascia": "desde unos 170 €"
      }
    ],
    sapori: [
      {
        "nome": "Pichón relleno",
        "testo": "Plato típico egipcio, que se sirve también en los restaurantes de la orilla oeste."
      },
      {
        "nome": "Tajín de carne",
        "testo": "Cocina egipcia casera, con verduras y salsa de tomate."
      },
      {
        "nome": "Ful y taameya",
        "testo": "Desayuno barato en los quioscos del mercado."
      },
      {
        "nome": "Karkadé",
        "testo": "Infusión fría o caliente de hibisco, en cada café."
      }
    ],
    attenzioni: [
      "Las normas sobre fotos en las tumbas cambian a menudo: preguntar en taquilla, nunca flash. Los guardias que abren un rincón cerrado o te hacen posar luego piden propina.",
      "Globos: elegir la compañía y no el precio más bajo, y dejar margen porque los vuelos se cancelan con viento.",
      "Calesas y vendedores del paseo del río parten de cifras altas: regatear y decidir antes.",
      "En verano las visitas se hacen del amanecer a media mañana: después el calor es extremo."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Templo de Dendera",
        "distanza": "unos 75 km, 1 hora",
        "come": "Coche con conductor para media jornada, o crucero de un día donde lo haya.",
        "testo": "El templo de Hathor, de los mejor conservados de Egipto, con el techo astronómico todavía en color y las criptas. Se sube al tejado para ver la llanura."
      },
      {
        "nome": "Abydos",
        "distanza": "unos 170 km, 2-2,5 horas",
        "come": "Coche con conductor para el día, a menudo junto con Dendera.",
        "testo": "El templo de Seti I, con algunos de los relieves más finos del arte egipcio y la lista de reyes, y detrás el Osireion, medio inundado por el nivel freático."
      },
      {
        "nome": "Edfu y Esna",
        "distanza": "Esna unos 60 km, Edfu unos 110 km, 1,5 horas",
        "come": "Coche con conductor, o en crucero hacia Asuán.",
        "testo": "El templo de Horus en Edfu es el más completo del país; en Esna el templo de Jnum, limpiado hace poco, ha recuperado los colores originales de los techos."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Luxor?",
        "risposta": "Dos días completos para la orilla oeste y la este sin prisas; con un tercero se añaden el Valle de las Reinas, las Tumbas de los Nobles o una excursión a Dendera."
      },
      {
        "domanda": "¿Mejor dormir en la orilla este o en la oeste?",
        "risposta": "La orilla este tiene restaurantes, el templo de Luxor a pie y más hoteles; la oeste es más tranquila y está cerca de las tumbas. El ferry público une las dos orillas en pocos minutos."
      },
      {
        "domanda": "¿Qué tumbas ver en el Valle de los Reyes?",
        "risposta": "La entrada básica incluye tres tumbas entre las abiertas ese día; Tutankamón y Seti I se pagan aparte. Si se paga un solo extra, conviene Seti I, la más decorada."
      },
      {
        "domanda": "¿Se pueden hacer fotos en las tumbas?",
        "risposta": "Las fotos con el móvil son gratuitas según la taquilla oficial; el flash está prohibido. Las normas cambian, así que conviene preguntar en la entrada."
      },
      {
        "domanda": "¿Merece la pena el globo?",
        "risposta": "Para muchos es el mejor recuerdo de Luxor: una hora sobre templos y campos al amanecer, unos 50-100 $ por persona. Se elige la compañía, no el precio, y se deja un día de margen por el viento."
      },
      {
        "domanda": "¿Cuándo hace demasiado calor para visitar?",
        "risposta": "De mayo a septiembre se superan a menudo los 40 °C: se visita del amanecer a las 11 y se vuelve a salir por la tarde-noche. De octubre a abril se puede visitar todo el día."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Las columnas papiriformes de la gran sala hipóstila del templo de Karnak, vistas desde abajo",
    immagine: '/images/viaggi/egitto-completo/giorno-14-luxor.jpg',
  },
  {
    slug: 'assuan-abu-simbel',
    paeseSlug: 'egitto',
    ordine: 4,
    nome: 'Asuán y Abu Simbel',
    tipologia: ['archeologia', 'Nilo', 'cultura nubiana'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "La ciudad más meridional del circuito, donde el Nilo se estrecha entre islas de granito y dunas, con los coloridos pueblos nubios de la orilla oeste. Desde aquí se sale hacia los templos de Ramsés II y Nefertari en Abu Simbel.",
    percheAndarci:
      "Por el ritmo más lento de Egipto, el templo de Philae en una isla del lago, la falúa al atardecer y Abu Simbel, el monumento trasladado pieza a pieza en los años sesenta para salvarlo del lago Nasser.",
    cosaVedere: [
      "Los dos templos de Abu Simbel, a 280 km al sur",
      "El templo de Philae, en barca desde el embarcadero de Shellal",
      "El obelisco inacabado en las canteras de granito",
      "El Museo Nubio",
      "El pueblo nubio de Gharb Soheil",
    ],
    cosaFare: [
      "Una falúa al atardecer alrededor de la isla Elefantina",
      "El espectáculo de luz y sonido en Abu Simbel, para quien duerme allí",
      "El 22 de febrero y el 22 de octubre el sol entra hasta el santuario del templo grande",
    ],
    doveDormire:
      "Económico: guesthouses nubias en la isla Elefantina o en Gharb Soheil · gama media: hoteles en la Corniche · lujo: Old Cataract (Sofitel Legendary). En Abu Simbel hay pocos alojamientos, entre ellos el ecolodge Eskaleh.",
    comeArrivare: "Desde El Cairo el vuelo de EgyptAir dura 1 h 25 y cuesta orientativamente 70-140 €. Como alternativa está el tren nocturno con camarotes de Abela Trains desde las estaciones Cairo Upper Egypt (Bashtil) o Guiza, unas 13-14 horas, 110-125 $ por persona en camarote doble con cena y desayuno, reservable en abelatrains.com. Desde Luxor se llega en crucero por el Nilo (hacia el sur los barcos hacen 4 noches) o en unas 3 horas en coche. Desde el aeropuerto de Asuán (ASW) el taxi se acuerda antes, en libras egipcias. Para Abu Simbel: 280 km, 3-3,5 horas de carretera saliendo antes del amanecer, o el vuelo de EgyptAir de 45 minutos.",
    comeSpostarsi: "Barcas públicas y privadas por el Nilo, taxis y Uber en la ciudad; para Abu Simbel minivan con conductor o excursión en grupo.",
    periodoMigliore: "de noviembre a marzo; en verano es el lugar más caluroso del país",
    costi: "Presupuesto bajo unos 30-45 € al día por persona (guesthouse en Elefantina, comida en puestos, barca pública, un sitio al día); medio 70-120 € (hotel en la Corniche, falúa, Abu Simbel en minivan compartida); alto desde 200 € (hotel histórico, coche privado o vuelo a Abu Simbel, guía). Entradas 2026: Abu Simbel 822 EGP, Filé 550 más la barca (300-500 EGP por barca), Museo Nubio 400, obelisco inacabado 220, Elefantina y Tumbas de los Nobles 200 EGP; falúa orientativamente 300-600 EGP la hora por barca. Un euro vale unas 60 EGP.",
    erroriDaEvitare: [
      "Hacer Abu Simbel en un día de verano sin contar con levantarse a las 3-4 y siete horas de carretera entre ida y vuelta",
      "Subirse a una falúa sin acordar si el precio es por persona o por barca, y por cuánto tiempo",
    ],
    miaEsperienza:
      "Estuve con amigos durante nuestra ruta de tres semanas por Egipto, llegando en avión desde El Cairo: la falúa al atardecer, Abu Simbel al amanecer y Filae, y luego el embarque en el crucero por el Nilo hacia Luxor.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Abu Simbel",
        "testo": "Los dos templos de Ramsés II y Nefertari excavados en la roca, con las estatuas colosales en la entrada. Entre 1963 y 1968 se cortaron en bloques y se trasladaron para salvarlos del lago Nasser. El 22 de febrero y el 22 de octubre el sol entra hasta el santuario.",
        "come": "Desde Asuán unos 300 km por carretera, saliendo antes del amanecer, o en avión.",
        "quando": "Abierto todos los días de 6 a 17 (2026). Llegar a la apertura, antes de los autobuses de grupos.",
        "tempo": "1,5-2 horas en el lugar",
        "costo": "822 EGP, unos 14 €, para adultos extranjeros, 375 para estudiantes; 1.200 EGP (estudiantes 600) el 22 de febrero y el 22 de octubre (2026)",
        "orari": "Todos los días 6-17 (2026)",
        "lat": 22.33694,
        "lng": 31.62556,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/abu-simbel/",
        "consiglio": "Quien pueda, que duerma en Abu Simbel para el espectáculo de luz y sonido y el amanecer."
      },
      {
        "nome": "Templo de Filé",
        "testo": "El santuario de Isis en una isla, trasladado también tras la presa. Se llega en barca desde el embarcadero de Shellal y es muy fotogénico.",
        "come": "Taxi hasta el embarcadero, luego lancha, con el precio por acordar.",
        "quando": "Abierto todos los días de 7 a 16 (2026). A primera hora por la luz.",
        "tempo": "1,5 horas",
        "costo": "550 EGP, unos 9 €, para adultos extranjeros, 275 para estudiantes, más la barca desde el embarcadero, a acordar, orientativamente 300-500 EGP por barca (2026)",
        "orari": "Todos los días 7-16 (2026)",
        "lat": 24.02083,
        "lng": 32.88944,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/philae/"
      },
      {
        "nome": "Falúa al atardecer",
        "testo": "El velero tradicional alrededor de la isla Elefantina, para un paseo de una o dos horas.",
        "come": "Desde el paseo del río de Asuán.",
        "quando": "Atardecer.",
        "tempo": "1-2 horas",
        "costo": "orientativamente 300-600 EGP la hora por barca, unos 5-10 € (2026, del viaje del sitio)",
        "consiglio": "Acordar si el precio es por barco o por persona, y cuánto dura."
      },
      {
        "nome": "Museo Nubio",
        "testo": "El museo cuenta la Nubia sumergida por el lago Nasser tras la construcción de la Presa Alta, con estatuas, objetos de la vida cotidiana y maquetas de las aldeas. Fuera hay un jardín con una casa nubia reconstruida. Visto antes de Abu Simbel y Filé, ayuda a entenderlos.",
        "come": "Al sur del centro, a pocos minutos en taxi desde la Corniche.",
        "quando": "En las horas de calor de la tarde, o el jueves y el viernes por la noche.",
        "tempo": "1,5-2 horas",
        "costo": "400 EGP, unos 6,5 €, para adultos extranjeros; estudiantes 200 EGP (2026)",
        "orari": "Todos los días desde las 9, última entrada a las 16; jueves y viernes también desde las 18, última entrada a las 20 (2026)",
        "lat": 24.08,
        "lng": 32.88944,
        "url": "https://egymonuments.com/details/NubiaMuseum"
      },
      {
        "nome": "Isla Elefantina",
        "testo": "La isla frente a la Corniche era la frontera sur del antiguo Egipto. En la zona arqueológica del sur están los restos de la ciudad antigua, el templo de Jnum, el nilómetro y un pequeño museo; el resto de la isla son aldeas nubias con casas de colores y callejones entre palmeras.",
        "come": "Barca pública desde la Corniche, pocos minutos, o en falúa.",
        "quando": "Por la mañana o a última hora de la tarde.",
        "tempo": "1,5-2 horas",
        "costo": "200 EGP, unos 3,5 €, para adultos extranjeros; estudiantes 100 EGP (2026)",
        "orari": "Todos los días 8-16 (2026)",
        "lat": 24.08472,
        "lng": 32.88667,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/elephantine-1/",
        "consiglio": "Después de las ruinas conviene cruzar a pie las aldeas de la isla: se ve la vida cotidiana a dos pasos de los hoteles."
      },
      {
        "nome": "Obelisco inacabado",
        "testo": "Un obelisco que se quedó en la cantera de granito porque se agrietó durante el corte: habría sido uno de los más grandes jamás intentados. En la roca se ven aún las marcas del trabajo, y se entiende mejor que en un museo cómo se extraían los monolitos.",
        "come": "En taxi, al sur del centro; normalmente se combina con Filé y la Presa Alta.",
        "quando": "A primera hora, antes de que la cantera se caliente.",
        "tempo": "45 minutos",
        "costo": "220 EGP, unos 3,5 €, para adultos extranjeros; estudiantes 110 EGP (2026)",
        "orari": "Todos los días desde las 7, última entrada a las 15 (2026)",
        "lat": 24.07689,
        "lng": 32.89545,
        "url": "https://egymonuments.com/details/UnfinishedObelisk"
      },
      {
        "nome": "Tumbas de los Nobles (Qubbet el-Hawa)",
        "testo": "Las tumbas excavadas en la roca de los gobernadores de Elefantina, en la colina de la orilla oeste. Se sube por una escalinata empinada y desde arriba se tiene una de las mejores vistas del Nilo, las islas y la ciudad.",
        "come": "Barca desde la Corniche hasta el embarcadero bajo la colina, luego a pie.",
        "quando": "Por la tarde, antes del cierre: la luz sobre el río es más cálida.",
        "tempo": "1,5 horas",
        "costo": "200 EGP, unos 3,5 €, para adultos extranjeros; estudiantes 100 EGP (2026)",
        "orari": "Todos los días 7-16 (2026)",
        "lat": 24.10177,
        "lng": 32.88916,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/qubbat-al-hawa-cemetery-1"
      },
      {
        "nome": "Monasterio de San Simeón",
        "testo": "Un monasterio copto fortificado en el desierto de la orilla oeste, con murallas de piedra y adobe, la iglesia y las celdas de los monjes. Es uno de los conjuntos monásticos mejor conservados de Egipto y suele haber muy poca gente.",
        "come": "Barca hasta la orilla oeste, luego a pie cuesta arriba por la arena, o en camello acordando el precio.",
        "quando": "A primera hora: en el desierto no hay sombra.",
        "tempo": "1,5-2 horas con la subida",
        "costo": "150 EGP, unos 2,5 €, para adultos extranjeros; estudiantes 50 EGP (2026)",
        "orari": "Todos los días 7-17 (2026)",
        "lat": 24.09472,
        "lng": 32.87578,
        "url": "https://egymonuments.gov.eg/en/monuments/monastery-of-st-simeon/"
      },
      {
        "nome": "Aldea nubia de Gharb Soheil",
        "testo": "Una aldea nubia en la orilla oeste del Nilo, a pocos kilómetros de la presa de Asuán, nacida hace cerca de un siglo cuando la antigua presa de 1902 inundó las aldeas más al sur. Las familias nubias reciben a los visitantes en casa para comer y, si se quiere, para dormir.",
        "come": "Desde Asuán: preguntar en el hotel o en el embarcadero cómo llegar y acordar el precio antes.",
        "quando": "Por la tarde, con regreso al atardecer.",
        "tempo": "2-3 horas",
        "consiglio": "Comer o cenar en una casa nubia es la mejor manera de conocer la zona."
      },
      {
        "nome": "Templo de Kalabsha",
        "testo": "El templo del dios nubio Mandulis, desmontado y reconstruido junto a la Presa Alta para salvarlo del lago Nasser, como Abu Simbel. Al lado están el quiosco de Kertassi y el pequeño templo de Beit el-Wali, también trasladados, y hay pocos visitantes.",
        "come": "En lancha desde el puerto del lago, al sur de la Presa Alta, con el precio a acordar; en taxi junto con Filé y la presa.",
        "quando": "Por la mañana.",
        "tempo": "1-1,5 horas",
        "costo": "200 EGP, unos 3,5 €, para adultos extranjeros; estudiantes 100 EGP; barca aparte (2026)",
        "orari": "Todos los días desde las 7, última entrada a las 15 (2026)",
        "lat": 23.96083,
        "lng": 32.86722,
        "url": "https://egymonuments.com/details/TempleofKalabsha"
      },
      {
        "nome": "Presa Alta",
        "testo": "La presa de los años sesenta que creó el lago Nasser, uno de los mayores lagos artificiales del mundo. Se cruza en coche y se para en el mirador: a un lado el lago, al otro el Nilo.",
        "come": "En taxi, de camino a Filé o Kalabsha; puede haber control de documentos.",
        "quando": "En la misma salida que Filé.",
        "tempo": "20-30 minutos",
        "lat": 23.97056,
        "lng": 32.87778
      },
      {
        "nome": "Jardín Botánico (isla Kitchener)",
        "testo": "Una isla en el Nilo convertida en jardín botánico, con palmeras y plantas tropicales. Es una hora de sombra y pájaros en medio del río, a menudo incluida en el paseo en falúa.",
        "come": "En falúa o lancha desde la Corniche, con la parada acordada antes.",
        "quando": "A última hora de la tarde, antes de la falúa al atardecer.",
        "tempo": "1 hora",
        "lat": 24.09361,
        "lng": 32.88694
      },
      {
        "nome": "Mausoleo del Aga Khan",
        "testo": "La tumba de granito rosa del Aga Khan III, en la colina de la orilla oeste, de estilo fatimí. Se ve bien desde el río, durante la falúa.",
        "come": "Desde la falúa o la orilla oeste; si se puede visitar el interior, hay que preguntarlo allí.",
        "quando": "Al atardecer, desde el río.",
        "tempo": "Una parada desde el río",
        "lat": 24.08828,
        "lng": 32.8789
      },
      {
        "nome": "Zoco de Asuán",
        "testo": "La calle del mercado paralela a la Corniche, más tranquila que los zocos de El Cairo, con especias, karkadé, cestos de dátiles y telas nubias.",
        "come": "A pie desde el centro.",
        "quando": "Por la noche, cuando refresca.",
        "tempo": "1-1,5 horas",
        "consiglio": "Se regatea: preguntar antes el precio por kilo de especias y karkadé."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Al amanecer: Filé en barca desde el embarcadero de Shellal",
          "Presa Alta y obelisco inacabado",
          "Tarde: Museo Nubio",
          "Desde las 16: falúa alrededor de Elefantina y el Jardín Botánico hasta el atardecer",
          "Noche: paseo por el zoco"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Filé por la mañana, obelisco inacabado, Museo Nubio y falúa al atardecer",
          "Día 2: Abu Simbel al amanecer, con salida hacia las 4 y regreso a primera hora de la tarde",
          "Última hora de la tarde: isla Elefantina y noche en el zoco"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: barca a la orilla oeste, Monasterio de San Simeón a primera hora y Tumbas de los Nobles",
          "Tarde: Gharb Soheil, con cena en una casa nubia",
          "Como alternativa: Kalabsha por la mañana o excursión a Kom Ombo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Paseo del río de Asuán",
        "perChi": "quien quiere ver el Nilo",
        "testo": "Hoteles cerca del paseo y de las falúas. Cómodo para todo.",
        "fascia": "50-130 €"
      },
      {
        "nome": "Isla Elefantina",
        "perChi": "quien quiere una aldea nubia a dos minutos en barca del centro",
        "testo": "Guesthouses familiares y algún gran hotel; la barca pública une la isla con la Corniche en pocos minutos. Por la noche es muy tranquila.",
        "fascia": "20-130 €"
      },
      {
        "nome": "Aldeas nubias de la orilla oeste",
        "perChi": "quien busca calma y ambiente",
        "testo": "Casas nubias pintadas convertidas en guesthouses, con terrazas sobre el río, en Gharb Soheil y alrededores. Para ir al centro hace falta barca o taxi.",
        "fascia": "35-85 €"
      },
      {
        "nome": "Abu Simbel",
        "perChi": "quien quiere el amanecer en los templos",
        "testo": "Pocos alojamientos: útil para evitar el madrugón nocturno."
      }
    ],
    sapori: [
      {
        "nome": "Cocina nubia",
        "testo": "Platos especiados de pollo, pescado y arroz, en las aldeas nubias de los alrededores de Asuán, como Gharb Soheil."
      },
      {
        "nome": "Karkadé",
        "testo": "Infusión de hibisco, muy común en Asuán."
      },
      {
        "nome": "Ful y taameya",
        "testo": "Desayuno barato en los quioscos."
      },
      {
        "nome": "Pescado del Nilo",
        "testo": "Servido a la parrilla en el paseo del río."
      }
    ],
    attenzioni: [
      "Abu Simbel en el día supone madrugar muchísimo y muchas horas de carretera: tenerlo en cuenta.",
      "Precio de la falúa y de la barca a Filé: acordar antes, por barca o por persona.",
      "En verano Asuán es de los lugares más calurosos del país: visitas al amanecer.",
      "Vendedores muy insistentes en el paseo del río: un no firme basta."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Kom Ombo",
        "distanza": "unos 50 km, 1 hora",
        "come": "Coche con conductor, o como primera parada del crucero hacia Luxor.",
        "testo": "El único templo doble de Egipto, dedicado a Sobek, el dios cocodrilo, y a Horus, justo a orillas del Nilo; al lado está el pequeño museo de momias de cocodrilo. Entrada 450 EGP, unos 7,5 € (2026)."
      },
      {
        "nome": "Edfu",
        "distanza": "unos 110 km, 2 horas",
        "come": "Coche con conductor, a menudo el mismo día que Kom Ombo, o en crucero.",
        "testo": "El templo de Horus, el mejor conservado del país, con pilono, sala hipóstila y santuario casi intactos. Entrada 550 EGP (2026, del viaje del sitio)."
      },
      {
        "nome": "Isla de Sehel",
        "distanza": "unos 4 km al sur, en barca",
        "come": "Lancha o falúa desde la Corniche, con el precio a acordar.",
        "testo": "Una isla con una aldea nubia y cientos de inscripciones grabadas en los bloques de granito, entre ellas la Estela del Hambre. Media jornada tranquila en el río."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Asuán?",
        "risposta": "Dos días bastan para Filé, el Museo Nubio, la falúa y Abu Simbel. Con un tercero se añaden la orilla oeste, Kalabsha o una noche en una aldea nubia."
      },
      {
        "domanda": "¿Se puede hacer Abu Simbel en el día desde Asuán?",
        "risposta": "Sí: se sale hacia las 4, se recorren 280 km en 3-3,5 horas, se pasan una hora y media o dos en los templos y se vuelve a primera hora de la tarde. Quien quiera evitar el madrugón duerme en Abu Simbel o toma el vuelo de EgyptAir de 45 minutos."
      },
      {
        "domanda": "¿Cuánto cuesta ir a Abu Simbel?",
        "risposta": "La minivan compartida cuesta orientativamente 20-35 $ por persona, el coche privado 100-150 $ por vehículo. La entrada es de 822 EGP, unos 14 € (2026)."
      },
      {
        "domanda": "¿Cuándo entra el sol en el templo de Abu Simbel?",
        "risposta": "El 22 de febrero y el 22 de octubre, al amanecer, el sol llega hasta el santuario del templo grande. Esos días la entrada sube a 1.200 EGP y hay mucha gente."
      },
      {
        "domanda": "¿Cuánto cuesta una falúa en Asuán?",
        "risposta": "Orientativamente 300-600 EGP la hora por barca (2026). Se acuerdan antes la duración, el recorrido y si el precio es por barca o por persona."
      },
      {
        "domanda": "¿Se puede visitar Asuán en verano?",
        "risposta": "De mayo a septiembre Asuán es de los lugares más calurosos del país, a menudo por encima de 40 °C: se visita al amanecer y se vuelve a salir por la noche. La mejor época va de noviembre a marzo."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: "Los templos de Abu Simbel con las estatuas colosales de Ramsés II esculpidas en la roca",
    immagine: '/images/viaggi/egitto-completo/giorno-11-assuan-abu-simbel.jpg',
  },
  {
    slug: 'siwa',
    paeseSlug: 'egitto',
    ordine: 5,
    nome: 'Oasis de Siwa',
    tipologia: ['deserto', 'oasi', 'cultura berbera'],
    giorniConsigliati: '3 días más dos de viaje',
    visitataPersonalmente: true,
    introduzione:
      "Un oasis de palmeras y lagos salados a 50 km de la frontera libia, habitado por una comunidad de lengua bereber, al borde del Gran Mar de Arena.",
    percheAndarci:
      "Por un Egipto completamente distinto al de los templos: casas de barro salado, manantiales en los que bañarse, las dunas del Gran Mar de Arena y el templo del Oráculo donde Alejandro Magno fue proclamado hijo de Amón.",
    cosaVedere: [
      "La fortaleza de Shali, el casco viejo de kershef (barro y sal)",
      "El templo del Oráculo de Amón en Aghurmi",
      "La montaña de los muertos, Gebel al-Mawta, con tumbas pintadas",
      "El manantial de Cleopatra",
      "Los lagos salados, donde se flota como en el mar Muerto",
    ],
    cosaFare: [
      "Excursión en todoterreno por el Gran Mar de Arena con sandboard y atardecer sobre las dunas",
      "Una noche en un campamento de tiendas en el desierto",
      "Recorrer el oasis en bicicleta",
    ],
    doveDormire:
      "Económico: pequeños hoteles en el centro · gama media: ecolodges de estilo siwano fuera del centro · lujo: Adrère Amellal, sin electricidad, a la luz de las velas.",
    comeArrivare: "Siwa está a unos 750 km de El Cairo. En coche con conductor se tarda dos días, pasando por Alejandría y El Alamein y durmiendo en Marsa Matruh, desde donde quedan unas cuatro horas de desierto (unos 250-400 $ por el coche ida y vuelta, unos 215-345 €). Como alternativa está el autobús nocturno desde El Cairo, de unas 10-12 horas, o el autobús desde Marsa Matruh. En la carretera hay controles militares que registran los pasaportes: tenerlos siempre a mano.",
    comeSpostarsi: "Bicicleta, tuk-tuk y carros tirados por burros en el oasis; todoterreno con conductor local para el desierto.",
    periodoMigliore: "de octubre a abril; las noches de invierno en el desierto bajan casi a 0 °C",
    costi: "Presupuesto bajo unos 30-45 € al día por persona (hotel pequeño en el centro, bicicleta, sitios del oasis, comida en locales); medio 70-120 € (ecolodge de estilo siwí, medio día en el desierto, tuk-tuk); alto desde 250 € (lodge de lujo sin electricidad, noche en el desierto con cena, conductor privado). Sitios 2026: templo del Oráculo y Gebel al-Mawta 120 EGP cada uno, unos 2 €; excursión al Gran Mar de Arena unos 20-35 $ por persona.",
    erroriDaEvitare: [
      "Ir al desierto con quien no tiene los permisos: las zonas hacia la frontera libia están controladas por el ejército",
      "Llevar ropa corta en el pueblo: Siwa es una comunidad conservadora, y también en el lago o en los manantiales se baña uno vestido",
    ],
    miaEsperienza:
      "Llegué con amigos en coche desde El Cairo pasando por Alejandría y Marsa Matruh, durante nuestra ruta de tres semanas por Egipto: el Oráculo, la montaña de los muertos, el manantial de Cleopatra, los lagos salados y el Gran Mar de Arena en todoterreno.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fortaleza de Shali",
        "testo": "La vieja ciudadela de kershef, una mezcla de barro y sal, dañada por tres días de lluvia en 1926 y luego abandonada por sus habitantes. Desde la cima se ven los palmerales, los lagos salados y las montañas del desierto.",
        "come": "A pie desde el centro de Siwa: se sube entre los callejones hasta la cima.",
        "quando": "Atardecer.",
        "tempo": "1 hora",
        "costo": "Pocas EGP.",
        "lat": 29.2011,
        "lng": 25.5184
      },
      {
        "nome": "Templo del Oráculo de Amón",
        "testo": "Las ruinas en la colina de Aghurmi donde, según la tradición, Alejandro Magno vino en el 331 a.C. a consultar el oráculo, que lo reconoció hijo del dios y faraón. Alrededor quedan las casas de barro de la antigua aldea.",
        "come": "En bici o tuk-tuk desde el centro, unos 4 km.",
        "quando": "Mañana o última hora de la tarde.",
        "tempo": "1 hora",
        "costo": "120 EGP, unos 2 € (2026).",
        "lat": 29.2051,
        "lng": 25.5434,
        "url": "https://egymonuments.com/"
      },
      {
        "nome": "Templo de Umm Ubayda",
        "testo": "No lejos de Aghurmi queda un único muro decorado del segundo templo de Amón, volado en el siglo XIX para sacar piedra. Es una parada breve, de camino a la fuente de Cleopatra.",
        "come": "En bici o tuk-tuk desde Aghurmi, pocos minutos.",
        "quando": "Junto con el Oráculo.",
        "tempo": "15 minutos"
      },
      {
        "nome": "Gebel al-Mawta",
        "testo": "La montaña de los muertos, una colina perforada por tumbas ptolemaicas y romanas. Las pocas tumbas pintadas abiertas, como la de Si-Amón, conservan colores todavía vivos.",
        "come": "A pie o en bici desde el centro, alrededor de 1 km; las tumbas pintadas se visitan con el guarda.",
        "quando": "Por la mañana, antes del calor.",
        "tempo": "1 hora",
        "costo": "120 EGP, unos 2 € (2026).",
        "lat": 29.2114,
        "lng": 25.5251,
        "url": "https://egymonuments.com/"
      },
      {
        "nome": "Fuente de Cleopatra",
        "testo": "Una poza redonda de agua tibia entre los palmerales, la más famosa de las fuentes del oasis, con algunos cafés alrededor.",
        "come": "En bici o tuk-tuk desde el centro, unos 3 km.",
        "quando": "Por la tarde, después de los sitios.",
        "tempo": "1 hora",
        "lat": 29.197,
        "lng": 25.5501,
        "consiglio": "Uno se baña cubierto, con camiseta y pantalón corto, y las mujeres con más razón."
      },
      {
        "nome": "Lagos salados",
        "testo": "Pozas de agua turquesa nacidas en las salinas alrededor del oasis, tan saladas que se flota como en el mar Muerto. Las orillas blancas de sal son uno de los paisajes más fotografiados de Siwa.",
        "come": "En tuk-tuk o con un operador, a menudo en la misma salida del desierto.",
        "quando": "Por la tarde, con vuelta al atardecer.",
        "tempo": "1-2 horas",
        "consiglio": "Después del baño hace falta una ducha de agua dulce, que muchos operadores llevan en garrafas; nada de baño con cortes o heridas."
      },
      {
        "nome": "Isla de Fatnas",
        "testo": "Un promontorio de palmeras en el lago de Siwa, al oeste del pueblo, con un café y vistas al lago y a las montañas del desierto. Es el lugar clásico para el atardecer.",
        "come": "En bici o tuk-tuk desde el centro, unos 5 km.",
        "quando": "Atardecer.",
        "tempo": "1 hora",
        "lat": 29.1926,
        "lng": 25.4794
      },
      {
        "nome": "Gebel Dakrour",
        "testo": "La montaña al sureste del oasis donde en verano se toman baños de arena caliente, un remedio tradicional contra el reúma. Desde la cima se ve todo el oasis.",
        "come": "En bici o tuk-tuk desde el centro, unos 4 km.",
        "quando": "Última hora de la tarde para la subida; los baños de arena son en verano.",
        "tempo": "1 hora"
      },
      {
        "nome": "Gran Mar de Arena y Bir Wahed",
        "testo": "La salida en todoterreno entre dunas de decenas de metros, con sandboard, atardecer desde la cresta de una duna y baño en las fuentes en medio de la arena. La más conocida es Bir Wahed, una poza caliente entre las dunas.",
        "come": "Solo con un operador local, que pide el permiso para el desierto con el pasaporte entregado la noche anterior.",
        "quando": "Por la tarde, con vuelta al atardecer; o con una noche en campamento.",
        "tempo": "Medio día",
        "costo": "Medio día unos 20-35 $ por persona, unos 17-30 €, permiso incluido; noche en el desierto unos 50-90 $, unos 45-80 €, con cena y desayuno.",
        "lat": 29.1222,
        "lng": 25.4336,
        "consiglio": "Elegir un operador con todoterrenos en buen estado y al menos dos vehículos por salida, y llevar una chaqueta para la noche."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: templo del Oráculo, Umm Ubayda y Gebel al-Mawta",
          "Tarde: fuente de Cleopatra",
          "Atardecer: fortaleza de Shali o isla de Fatnas"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: bicicleta por el oasis, Gebel al-Mawta, fortaleza de Shali al atardecer",
          "Día 2: Aghurmi y fuente de Cleopatra por la mañana, Gran Mar de Arena y lagos salados por la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: llegada, fortaleza de Shali, atardecer",
          "Día 2: Aghurmi, Baño de Cleopatra, desierto y noche en tienda",
          "Día 3: bicicleta por el oasis, regreso"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro de Siwa",
        "perChi": "quien quiere estar cerca de todo",
        "testo": "Hoteles y casas de huéspedes cerca del mercado y la fortaleza. Sencillos.",
        "fascia": "20-40 €"
      },
      {
        "nome": "Ecolodges en el oasis",
        "perChi": "quien quiere naturaleza y silencio",
        "testo": "Casas de barro entre palmeras, más caras y poco cómodas de alcanzar a pie.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Lodge de lujo al pie de las montañas",
        "perChi": "quien quiere una experiencia especial",
        "testo": "Como Adrère Amellal, construido en kershef, sin electricidad y a la luz de las velas, aislado cerca del lago."
      },
      {
        "nome": "Campamento en el desierto",
        "perChi": "quien quiere una noche bajo las estrellas",
        "testo": "Una noche en el Gran Mar de Arena con cena y fuego, organizada por los operadores con el permiso; en invierno hace frío."
      }
    ],
    sapori: [
      {
        "nome": "Dátiles y aceitunas de Siwa",
        "testo": "El producto del oasis, vendido a granel en el mercado."
      },
      {
        "nome": "Aceite de oliva",
        "testo": "Elaborado en el oasis con aceitunas locales."
      }
    ],
    attenzioni: [
      "El desierto hacia Libia lo controla el ejército: ir solo con operadores que tengan permisos.",
      "Siwa es una comunidad conservadora: cubrir hombros y rodillas, y bañarse vestido en los manantiales.",
      "Tener el pasaporte a mano en los controles.",
      "Las noches de invierno en el desierto son frías: llevar ropa de abrigo.",
      "Carreteras: el gobierno británico (octubre de 2026) deja Siwa y la carretera desde Marsa Matruh fuera de las zonas desaconsejadas, pero desaconseja los viajes no esenciales por la carretera entre Bahariya y Siwa."
    ],
    gite: [
      {
        "nome": "Marsa Matruh y El Alamein",
        "distanza": "Marsa Matruh a unos 300 km, 4 horas; El Alamein otras 3 horas hacia El Cairo",
        "come": "En coche con conductor, como etapa del viaje de ida o de vuelta.",
        "testo": "Marsa Matruh tiene playas de arena blanca en el Mediterráneo; en El Alamein están los cementerios militares y el museo de la batalla de 1942. Se duerme en Matruh para partir el viaje."
      },
      {
        "nome": "Una noche en el Gran Mar de Arena",
        "distanza": "a 1-2 horas en todoterreno del oasis",
        "come": "Solo con operadores locales autorizados, que organizan campamento, cena y permiso.",
        "testo": "El atardecer y el amanecer sobre las dunas, el cielo estrellado y el silencio total. En invierno las noches rondan los 0 °C: hace falta ropa de abrigo y una linterna frontal."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Siwa?",
        "risposta": "Tres días en el lugar más los dos de viaje desde El Cairo. Con dos días se ven los sitios del oasis y se hace una sola salida al desierto."
      },
      {
        "domanda": "¿Cómo se llega a Siwa desde El Cairo?",
        "risposta": "En coche con conductor en dos días, durmiendo en Marsa Matruh, o con el autobús nocturno de unas 10-12 horas. En los controles se enseña el pasaporte."
      },
      {
        "domanda": "¿Hace falta un permiso para el desierto?",
        "risposta": "Sí, para el Gran Mar de Arena y las zonas hacia la frontera libia. Lo pide el operador local con el pasaporte, y el coste suele estar incluido en la excursión."
      },
      {
        "domanda": "¿Es seguro Siwa?",
        "risposta": "El gobierno británico (octubre de 2026) considera Siwa y la carretera desde Marsa Matruh fuera de las zonas desaconsejadas, pero desaconseja los viajes no esenciales por la carretera entre Bahariya y Siwa. Al desierto se va solo con operadores autorizados."
      },
      {
        "domanda": "¿Cómo hay que vestirse?",
        "risposta": "Siwa es una comunidad conservadora: hombros y rodillas cubiertos también para los hombres, y en las fuentes uno se baña vestido. El alcohol es casi imposible de encontrar y a las mujeres del lugar no se las fotografía."
      },
      {
        "domanda": "¿Cuándo ir?",
        "risposta": "De octubre a abril. En verano hace demasiado calor; en invierno los días son templados pero las noches en el desierto bajan cerca de 0 °C."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: "Palmeras datileras reflejadas en un manantial del oasis de Siwa",
    immagine: '/images/viaggi/egitto-completo/giorno-07-siwa.jpg',
  },
  {
    slug: 'mar-rosso',
    paeseSlug: 'egitto',
    ordine: 6,
    nome: 'Mar Rojo: Hurghada, Marsa Alam y Sharm el-Sheikh',
    tipologia: ['mare', 'immersioni', 'snorkeling'],
    giorniConsigliati: '3-5 días',
    visitataPersonalmente: true,
    introduzione:
      "La costa egipcia del mar Rojo y la punta del Sinaí: arrecife de coral muy cerca de la orilla, pecios, tiburones pelágicos mar adentro y un agua que no baja de los 21-22 °C ni en invierno.",
    percheAndarci:
      "Para cerrar el viaje arqueológico con el mar, o para algunas de las inmersiones más famosas del mundo: el pecio del Thistlegorm, Ras Mohammed, Elphinstone, las islas Brothers y Daedalus.",
    cosaVedere: [
      "Hurghada: las islas Giftun y la bahía de Orange Bay, el pecio del Thistlegorm en una jornada larga",
      "Marsa Alam: la bahía de Abu Dabbab con tortugas y, con suerte, el dugongo; el arrecife de Dolphin House (Samadai); el parque de Wadi el Gemal",
      "Sharm el-Sheikh: el parque nacional de Ras Mohammed y el estrecho de Tirán",
      "Dahab: el Blue Hole y los arrecifes desde la orilla",
    ],
    cosaFare: [
      "Snorkel desde la orilla en el arrecife del resort",
      "Curso Open Water o Advanced con un centro PADI o SSI",
      "Crucero de buceo (liveaboard) de una semana en el sur: Brothers, Daedalus, Elphinstone",
    ],
    doveDormire:
      "Hurghada: El Gouna y Sahl Hasheesh para la gama media y alta, la ciudad de Hurghada para la gama económica. Marsa Alam: resorts aislados con el arrecife delante, ecolodges como el de Wadi Lahami para los buceadores. Sharm: Naama Bay para la vida nocturna, Nabq para los resorts.",
    comeArrivare: "Hay vuelos directos desde Italia a Hurghada (HRG), Marsa Alam (RMF) y Sharm el-Sheij (SSH), muchos chárter de temporada, y vuelos internos desde El Cairo todo el año. Desde Luxor en coche con conductor se tarda unas 4 horas a Hurghada (unos 70-120 $, unos 60-105 €) y 4-4,5 a Marsa Alam (100-150 $, unos 85-130 €). El aeropuerto de Marsa Alam está a unos 60 km al norte de la ciudad, cerca de Port Ghalib; del Sinaí a Luxor casi siempre hace falta un vuelo vía El Cairo.",
    comeSpostarsi: "Traslados organizados por el resort, taxis y minivans con conductor; para las excursiones en barco se sale de los puertos turísticos.",
    periodoMigliore:
      "mar cálido de mayo a noviembre; de diciembre a marzo agua en torno a 22 °C y viento fuerte, con jornadas de traje de neopreno de 5 mm",
    costi: "Presupuesto bajo unos 50-70 € al día por persona (hotel en la ciudad en Hurghada, snorkel desde la orilla, comida en locales); medio 100-160 € (resort con arrecife y media pensión, una salida en barco o dos inmersiones); alto desde 250 € (resort aislado con playa privada, inmersiones cada día o crucero de buceo). Excursiones: snorkel en barco unos 30-50 $, unos 25-45 €; inmersión suelta 35-55 $, unos 30-47 €; curso Open Water 400-550 $, unos 345-475 €; crucero de buceo de 7 noches 1.000-1.800 € más tasas del parque.",
    erroriDaEvitare: [
      "Elegir Sharm pensando en ir cómodamente a Luxor: desde el Sinaí hace falta un vuelo, casi siempre vía El Cairo",
      "Tocar o caminar sobre el coral y comprar conchas o corales: está prohibido y la exportación se confisca en el aeropuerto",
      "Reservar un liveaboard en el sur sin el título y el número de inmersiones exigidos (normalmente Advanced y al menos 50 inmersiones)",
    ],
    miaEsperienza:
      "Fue el cierre de nuestra ruta de tres semanas por Egipto: en coche desde Luxor hasta Marsa Alam, y los últimos días buceando en Abu Dabbab y en los arrecifes de la zona.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hurghada y las islas Giftun",
        "testo": "Uno de los principales destinos turísticos de la costa, con excursiones en barco para hacer snorkel y bucear en las islas Giftun y en los arrecifes de mar adentro. Orange Bay, en la Giftun grande, tiene arena blanca y agua muy poco profunda.",
        "come": "Excursiones que se reservan con un operador local desde el hotel, con salida desde la marina.",
        "quando": "Todo el año; de diciembre a marzo el agua baja a 21-23 °C, en agosto llega a 28 °C.",
        "tempo": "Día entero",
        "costo": "Salida de snorkel con almuerzo unos 30-50 $, unos 25-45 €.",
        "lat": 27.2021,
        "lng": 33.9502
      },
      {
        "nome": "El Gouna",
        "testo": "La pequeña ciudad construida sobre lagunas al norte de Hurghada, con canales, islotes unidos por puentes, una marina y la vida nocturna más cuidada de la costa. Es también una base para el kitesurf.",
        "come": "En taxi o con el traslado de los hoteles desde Hurghada, unos 30 minutos.",
        "quando": "Por la noche, para la marina y los restaurantes; el viento para el kite sopla sobre todo en primavera y verano.",
        "tempo": "Medio día",
        "lat": 27.385,
        "lng": 33.6792
      },
      {
        "nome": "Pecio del Thistlegorm",
        "testo": "El mercante británico hundido en 1941 en el estrecho de Gubal, con la carga aún a bordo: motocicletas, camiones, munición y locomotoras. Es una de las inmersiones en pecio más famosas del mundo.",
        "come": "En una jornada larga desde Hurghada o desde Sharm el-Sheij, o durante un crucero de buceo; hace falta el título Advanced.",
        "quando": "Salida al amanecer; con mar agitado las salidas se cancelan.",
        "tempo": "Día entero, con dos inmersiones",
        "lat": 27.8142,
        "lng": 33.92
      },
      {
        "nome": "Marsa Alam y Abu Dabbab",
        "testo": "Más al sur y más tranquila: la bahía de arena de Abu Dabbab, conocida por las tortugas verdes que pastan en las praderas a pocos metros de profundidad y, con suerte, por el dugongo. Se hace desde la orilla y es apta para todos los niveles, también en snorkel.",
        "come": "En coche desde Luxor o con vuelos directos; la bahía está al norte de la ciudad, en la carretera hacia El Quseir.",
        "quando": "A primera hora, antes de los grupos de día de otros resorts.",
        "tempo": "Medio día",
        "costo": "Entrada para quien no se aloja en la bahía unos 10-20 $, unos 9-17 €.",
        "lat": 25.3386,
        "lng": 34.7397,
        "consiglio": "Nada de contacto con los animales y distancia con las tortugas: las normas de la bahía son estrictas."
      },
      {
        "nome": "Dolphin House (Samadai)",
        "testo": "El arrecife en herradura al sur de Marsa Alam donde viven los delfines girador, en una zona protegida de acceso limitado. Se nada en superficie en el área permitida y se deja que sean los delfines los que se acerquen.",
        "come": "Solo en barco con una excursión organizada, con aforo limitado.",
        "quando": "Por la mañana, con el mar en calma.",
        "tempo": "Día entero",
        "costo": "Excursión con almuerzo unos 40-60 $, unos 35-50 €.",
        "lat": 24.9858,
        "lng": 34.9966
      },
      {
        "nome": "Elphinstone",
        "testo": "Un arrecife largo y estrecho en mar abierto, frente a Marsa Alam, con corrientes, paredes verticales y, de octubre a diciembre, tiburones oceánicos de puntas blancas. Es una inmersión para buceadores con experiencia.",
        "come": "En barco desde los puertos cercanos a Marsa Alam; hace falta el Advanced, a menudo con un mínimo de inmersiones registradas.",
        "quando": "De octubre a diciembre para los tiburones; con viento fuerte los barcos no salen.",
        "tempo": "Medio día",
        "costo": "Dos inmersiones en barco unos 70-110 $, unos 60-95 €, equipo aparte.",
        "lat": 25.3092,
        "lng": 34.8607,
        "consiglio": "Reservar un día de margen por el tiempo, y al menos 18-24 horas entre la última inmersión y el vuelo."
      },
      {
        "nome": "Wadi el Gemal y Sharm el Luli",
        "testo": "El parque nacional al sur de Marsa Alam une desierto, manglares y arrecifes, y en él viven también dugongos y tortugas verdes. La bahía de Sharm el Luli tiene arena blanca y una de las aguas más claras de la costa.",
        "come": "En excursión o en coche, alrededor de una hora al sur de Marsa Alam; muchas excursiones añaden los manglares de Qulan, cerca de Hamata.",
        "quando": "Salir temprano: en las primeras horas la playa está casi vacía.",
        "tempo": "Día entero",
        "costo": "Excursión unos 35-60 $, unos 30-50 €.",
        "lat": 24.5542,
        "lng": 35.1455,
        "consiglio": "Es un área protegida: se entra al agua desde la arena, sin pisar el coral, y no se recoge nada."
      },
      {
        "nome": "Sharm el-Sheij y Ras Mohammed",
        "testo": "Buceo y snorkel en el parque nacional de Ras Mohammed, en la punta del Sinaí, con paredes de coral que caen a pico y grandes bancos de peces. El pecio del Thistlegorm no está lejos.",
        "come": "Vuelos directos desde Europa y desde El Cairo; al parque se llega en barco o en coche desde Sharm.",
        "quando": "Todo el año.",
        "tempo": "Día entero",
        "lat": 27.7694,
        "lng": 34.2097
      },
      {
        "nome": "Estrecho de Tirán",
        "testo": "Cuatro arrecifes en fila en el estrecho entre el Sinaí y la isla de Tirán, con corrientes, corales blandos y a menudo pelágicos. Son la segunda salida clásica desde Sharm después de Ras Mohammed.",
        "come": "En barco desde Sharm el-Sheij, alrededor de una hora de navegación.",
        "quando": "Por la mañana, antes de que se levante el viento.",
        "tempo": "Día entero",
        "lat": 28.0039,
        "lng": 34.4653
      },
      {
        "nome": "Naama Bay",
        "testo": "La bahía con el paseo peatonal de Sharm el-Sheij, llena de restaurantes, locales y centros de buceo. Es el punto de partida de muchas salidas en barco.",
        "come": "En taxi desde los hoteles de la zona de Sharm, 10-20 minutos.",
        "quando": "Por la noche.",
        "tempo": "2 horas",
        "lat": 27.9053,
        "lng": 34.3242
      },
      {
        "nome": "Dahab y el Blue Hole",
        "testo": "Un pueblo más relajado a una hora de Sharm, con arrecifes que empiezan en la orilla. El Blue Hole es una dolina sumergida al borde del arrecife: en superficie se hace muy bien snorkel, mientras que el fondo es solo para apneístas y buceadores técnicos.",
        "come": "En coche o en excursión desde Sharm el-Sheij, alrededor de una hora; en Dahab uno se mueve a pie y en taxi.",
        "quando": "Por la mañana, antes de los grupos de Sharm.",
        "tempo": "Día entero",
        "lat": 28.5722,
        "lng": 34.5374,
        "consiglio": "En el Blue Hole no bajar más allá de los límites del propio título: es uno de los puntos más peligrosos del mar Rojo."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: snorkel desde la orilla del resort o en Abu Dabbab",
          "Tarde: descanso y arrecife con luz baja",
          "Noche: pescado del día en un restaurante fuera del resort"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: snorkel desde la orilla y bautismo o inmersión en el arrecife de casa",
          "Día 2: salida en barco a Dolphin House, a las Giftun o a Ras Mohammed según la base"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: snorkel desde la orilla del resort",
          "Día 2: barco a los arrecifes de mar adentro o Ras Mohammed",
          "Día 3: curso o inmersiones"
        ]
      },
      {
        "titolo": "4 días en Marsa Alam",
        "tappe": [
          "Día 1: llegada, registro en el centro de buceo y arrecife de casa",
          "Día 2: Abu Dabbab con las tortugas",
          "Día 3: Elphinstone para buceadores con experiencia o Dolphin House",
          "Día 4: Wadi el Gemal y Sharm el Luli, sin inmersiones si se vuela al día siguiente"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hurghada",
        "perChi": "quien quiere mucha oferta y precios bajos",
        "testo": "Resorts por todas partes y vida nocturna, con una costa muy construida. Los hoteles de la ciudad son los más baratos, Sahl Hasheesh y Makadi la gama media, El Gouna la más cuidada.",
        "fascia": "40-130 €"
      },
      {
        "nome": "Marsa Alam",
        "perChi": "quien quiere arrecife y tranquilidad",
        "testo": "Resorts sobre el arrecife, lejos de las ciudades: ideal para el snorkel. Los resorts más aislados con playa privada superan los 180 € por noche.",
        "fascia": "70-130 €"
      },
      {
        "nome": "Sharm el-Sheij",
        "perChi": "quien quiere buceo y resorts grandes",
        "testo": "Muchos resorts y centros de buceo, parques marinos cerca. Naama Bay para la vida nocturna, Nabq para los resorts."
      },
      {
        "nome": "Ecolodges para buceadores en el sur",
        "perChi": "quien viene sobre todo a bucear",
        "testo": "Campamentos como el de Wadi Lahami, entre Marsa Alam y Berenice, con el centro de buceo en el lugar y los arrecifes más intactos; comodidades básicas."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "Elegido en el mercado y cocinado en los restaurantes junto al mar."
      },
      {
        "nome": "Sayadeya",
        "testo": "Pescado con arroz especiado y cebolla, de cocina costera."
      },
      {
        "nome": "Shawarma",
        "testo": "Para una comida rápida lejos de los resorts."
      },
      {
        "nome": "Karkadé",
        "testo": "Bebida fría de hibisco."
      }
    ],
    attenzioni: [
      "No tocar ni pisar el coral y no llevarse conchas ni corales.",
      "Del Sinaí a Luxor casi siempre hace falta un vuelo vía El Cairo: no contar con la carretera.",
      "Para los cruceros de buceo preguntar al operador qué titulación y experiencia piden.",
      "De diciembre a marzo el agua está a unos 21-23 °C y suele haber viento: hace falta un neopreno más grueso.",
      "Sinaí: el gobierno británico (octubre de 2026) desaconseja cualquier viaje al Sinaí del Norte y los no esenciales al interior del Sinaí del Sur más allá de la carretera Santa Catalina-Nuweiba; las costas, incluida Sharm el-Sheij, quedan fuera."
    ],
    gite: [
      {
        "nome": "Luxor",
        "distanza": "unas 4 horas desde Hurghada, 4-4,5 desde Marsa Alam",
        "come": "Coche con conductor o excursión de un día con salida al amanecer; mejor con una noche.",
        "testo": "Karnak, el templo de Luxor y el Valle de los Reyes. En el día resulta muy cansado: con una noche se ve también la orilla oeste con calma."
      },
      {
        "nome": "El Quseir",
        "distanza": "alrededor de 1,5 horas al norte de Marsa Alam",
        "come": "En coche o en taxi por la carretera costera.",
        "testo": "Un viejo puerto del mar Rojo con la fortaleza otomana, las casas de coral y madera del centro y el paseo marítimo. Una alternativa tranquila a los resorts."
      },
      {
        "nome": "Monasterio de Santa Catalina",
        "distanza": "unas 3 horas desde Sharm el-Sheij",
        "come": "Excursión organizada, a menudo de noche para subir al monte Sinaí al amanecer.",
        "testo": "El monasterio ortodoxo al pie del monte Sinaí, uno de los más antiguos aún habitados. El gobierno británico (octubre de 2026) desaconseja los viajes no esenciales al interior del Sinaí Sur más allá de la carretera Santa Catalina-Nuweiba: comprobar los avisos antes de salir."
      },
      {
        "nome": "Dahab",
        "distanza": "alrededor de 1 hora desde Sharm el-Sheij",
        "come": "En coche o en excursión.",
        "testo": "El Blue Hole, los arrecifes desde la orilla y un paseo de cafés bajos junto al mar. También se puede dormir aquí algunas noches."
      }
    ],
    faq: [
      {
        "domanda": "¿Mejor Hurghada, Marsa Alam o Sharm el-Sheij?",
        "risposta": "Marsa Alam por el arrecife desde la orilla y la tranquilidad, Hurghada por vuelos, precios y vida nocturna, Sharm por Ras Mohammed y Tirán. Solo Hurghada y Marsa Alam están unidas a Luxor por carretera."
      },
      {
        "domanda": "¿Hace falta título de buceo para ver las tortugas?",
        "risposta": "No: en Abu Dabbab las tortugas pastan a pocos metros de profundidad y se ven bien haciendo snorkel. Para Elphinstone y el Thistlegorm, en cambio, hace falta el Advanced."
      },
      {
        "domanda": "¿Cómo está el agua en invierno?",
        "risposta": "De diciembre a marzo ronda los 21-23 °C, con viento frecuente: para bucear hace falta un traje de 5-7 mm. De mayo a noviembre está cálida, hasta 28 °C en agosto."
      },
      {
        "domanda": "¿Se pueden llevar conchas o coral?",
        "risposta": "No: está prohibido y en el aeropuerto los controles los confiscan, junto con la arena. También está prohibido tocar o pisar el coral."
      },
      {
        "domanda": "¿Cuánto tiempo debe pasar entre la última inmersión y el vuelo?",
        "risposta": "Al menos 18-24 horas. El último día se pasa en el arrecife con máscara o en la playa."
      },
      {
        "domanda": "¿Es seguro el Sinaí?",
        "risposta": "El gobierno británico (octubre de 2026) desaconseja todo viaje al Sinaí Norte y los viajes no esenciales al interior del Sinaí Sur más allá de la carretera Santa Catalina-Nuweiba; las costas, incluida Sharm el-Sheij, quedan excluidas."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Corales de mesa y agua turquesa en un arrecife del mar Rojo",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg',
  },
]
