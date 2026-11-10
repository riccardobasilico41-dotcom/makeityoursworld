import type { Destinazione } from '@/lib/types'

export const destinazioniTurchia: Destinazione[] = [
  {
    slug: 'istanbul',
    paeseSlug: 'turchia',
    ordine: 1,
    nome: 'Estambul',
    tipologia: ['città', 'storia', 'cibo'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    introduzione:
      'La antigua Bizancio, luego Constantinopla, dividida por el Bósforo entre Europa y Asia: la península histórica de Sultanahmet, los barrios de Beyoğlu y Karaköy, Kadıköy en el lado asiático.',
    percheAndarci:
      'Por Santa Sofía, el Topkapı y la Süleymaniye, por los bazares, por los ferris del Bósforo y por una de las cocinas callejeras más ricas del Mediterráneo.',
    cosaVedere: [
      'Santa Sofía, donde los turistas visitan las galerías superiores',
      'La Mezquita Azul y el Hipódromo',
      'La Cisterna Basílica',
      'El palacio de Topkapı con el harén',
      'La mezquita de Süleymaniye, obra maestra de Sinan',
      'El Gran Bazar y el Bazar de las Especias',
      'Chora (Kariye), con los mosaicos bizantinos reabiertos en 2024',
    ],
    cosaFare: [
      'El ferri público por el Bósforo hasta Anadolu Kavağı',
      'Cruzar en ferri de Eminönü a Kadıköy para ir al mercado del lado asiático',
      'Un hammam histórico',
      'La puesta de sol desde la torre de Gálata o desde una terraza de Karaköy',
    ],
    doveDormire:
      'Sultanahmet para estar a pie de los monumentos, Karaköy y Gálata para locales y vida nocturna, Kadıköy para un Estambul más local. Económicas: pequeños hoteles de Sultanahmet y Fatih · gama media: hoteles boutique de Karaköy · lujo: hoteles históricos en el Bósforo.',
    doveMangiare:
      'Balık ekmek (bocadillo de pescado) en Eminönü, kebab de Adana y lahmacun en las lokanta, meze y rakı en las meyhane de Beyoğlu, desayuno turco en Kadıköy, baklava en Karaköy Güllüoğlu.',
    comeArrivare: "Desde el aeropuerto de Estambul (IST) el metro M11 llega a Gayrettepe en unos 35 minutos y luego el M2 lleva a Taksim o hacia la península histórica (unas 40-75 TL con la Istanbulkart, que se compra en las máquinas del aeropuerto). Los autobuses Havaist van a Sultanahmet o Taksim en 1-1,5 horas (unas 275 TL, también de noche). El taxi cuesta unos 40-60 €: mejor pedirlo con BiTaksi o Uber, con el taxímetro encendido. El aeropuerto Sabiha Gökçen (SAW) está en el lado asiático, unido a Kadıköy por el metro M4.",
    comeSpostarsi:
      'Istanbulkart recargable para metro, tranvía T1, funiculares y ferris; taxi con las apps BiTaksi o Uber, que en Estambul llama a los taxis amarillos.',
    periodoMigliore: 'abril-junio y septiembre-noviembre',
    costi:
      "Presupuesto bajo unos 50-70 € al día por persona (hotel pequeño en Sultanahmet o Fatih, comida callejera y lokanta, una o dos mezquitas gratuitas); medio 110-160 € (hotel boutique en Karaköy o Sultanahmet, Topkapı y Santa Sofía, cenas con meze); alto desde 250 € (hoteles históricos en el Bósforo, restaurantes con vistas, guías privados). Santa Sofía 25 €, Topkapı con Harén unos 50 €, Museum Pass Istanbul unos 115-120 € por 5 días.",
    erroriDaEvitare: [
      'Aceptar la invitación de un desconocido a tomar algo en un local: es la estafa de la cuenta inflada, frecuente en Taksim y Sultanahmet',
      'Recoger el cepillo que un limpiabotas deja caer delante de ti: es el pretexto para un lustrado de pago',
      'Comer en los restaurantes de Sultanahmet sin precios a la vista',
    ],
    miaEsperienza:
      "Estuve con amigos al principio de mi viaje de dieciséis días por Turquía: cuatro días entre Sultanahmet con Santa Sofía, la Mezquita Azul y la Cisterna, Topkapı, el Gran Bazar y la Süleymaniye, el Bósforo, Beyoğlu y Kadıköy.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Santa Sofía",
        testo: "La basílica de Justiniano, inaugurada en 537, luego mezquita desde 1453, museo desde 1935 y de nuevo mezquita desde 2020, con los mosaicos bizantinos bajo la gran cúpula.",
        come: "Tranvía T1 hasta Sultanahmet. Desde el 15 de enero de 2024 los visitantes extranjeros pagan entrada y suben a las galerías superiores, reabiertas en 2024, mientras que gran parte de la planta baja se reserva a los fieles. Ropa que cubra; las mujeres deben cubrirse la cabeza.",
        quando: "A primera hora, fuera de las horas de oración.",
        tempo: "1-1,5 horas",
        costo: "25 € para los visitantes extranjeros, recorrido propio por las galerías superiores (2026)",
        lat: 41.0085,
        lng: 28.98001,
        consiglio: "Comprobar antes los horarios en el sitio oficial, que cambian con las normas de acceso.",
      },
      {
        nome: "Mezquita Azul e Hipódromo",
        testo: "La mezquita de Sultanahmet, construida entre 1609 y 1617, con seis minaretes y más de veinte mil azulejos de Iznik en el interior. Delante, la plaza del antiguo hipódromo con el obelisco egipcio.",
        come: "A pie desde Santa Sofía. Zapatos fuera, hombros y piernas cubiertos; mujeres con la cabeza cubierta.",
        quando: "Abierta todos los días de 8.30 a 19 de abril a septiembre y de 8.30 a 17 de octubre a marzo, última entrada 30 minutos antes; los viernes se entra desde las 14.30. Cerrada a las visitas durante las oraciones del mediodía y de la tarde, desde 30 minutos antes de la llamada hasta 15 minutos después del final (2026).",
        tempo: "45 minutos",
        costo: "Entrada gratuita (2026)",
        orari: "Abril-septiembre 8:30-19, octubre-marzo 8:30-17; los viernes desde las 14:30; cerrada a las visitas durante las oraciones (2026)",
        lat: 41.00539,
        lng: 28.97682,
        url: "https://sultanahmetcami.org/",
        consiglio: "Quien no lleve ropa adecuada puede tomarla prestada en el puesto de la entrada y devolverla allí.",
      },
      {
        nome: "Palacio de Topkapı y Harén",
        testo: "La residencia principal de los sultanes otomanos durante unos cuatro siglos, hasta mediados del XIX: patios, pabellones, tesoro y Harén, en el promontorio entre el Bósforo, el mar de Mármara y el Cuerno de Oro.",
        come: "A pie desde Santa Sofía. La entrada para extranjeros incluye el Harén y Santa Irene; también se compra en línea.",
        quando: "Cerrado los martes. Abierto de 9 a 17.30, taquilla hasta las 17 (2026). Llegar a la apertura.",
        tempo: "2-3 horas",
        costo: "2.750 TL (unos 50 €) para visitantes extranjeros con el Harén y Santa Irene, válido un día; Harén o Santa Irene solos 1.050 TL (2026)",
        orari: "9-17:30, taquilla hasta las 17; cerrado los martes (2026)",
        lat: 41.013,
        lng: 28.984,
        url: "https://www.millisaraylar.gov.tr/en/palaces/topkapi-palace",
        consiglio: "Pasar primero por el Harén y el Tesoro, que tienen cola, y luego los patios.",
      },
      {
        nome: "Cisterna Basílica",
        testo: "Un enorme depósito subterráneo bizantino del siglo VI, de la época de Justiniano, con 336 columnas de mármol en 12 filas, con luz tenue. Dos columnas se apoyan en bloques reutilizados con la cabeza de Medusa.",
        come: "A pie desde Santa Sofía. En temporada alta mejor la entrada online.",
        quando: "A primera hora o por la noche, cuando hay menos cola.",
        tempo: "45 minutos",
        costo: "unas 1.950-2.250 TL de día (unos 35-40 €), 3.000 TL la sesión nocturna (unos 55 €); no entra en el Museum Pass (2026, precios orientativos)",
        orari: "De día 9-18:30, sesión nocturna 19:30-22 (2026)",
        lat: 41.00806,
        lng: 28.97778,
        consiglio: "Evitar el fin de semana y las horas centrales.",
      },
      {
        nome: "Gran Bazar y Bazar de las Especias",
        testo: "El mercado cubierto con más de 4.000 tiendas de alfombras, cerámica y joyas; un poco más allá, el de las especias con té, dulces turcos y frutos secos.",
        come: "Tranvía T1 hasta Beyazıt-Kapalıçarşı, o a pie desde Santa Sofía.",
        quando: "Por la mañana, antes de la multitud; el Gran Bazar cierra los domingos.",
        tempo: "2 horas",
        costo: "entrada libre",
        orari: "Gran Bazar cerrado los domingos",
        lat: 41.01058,
        lng: 28.96793,
        consiglio: "En el Bazar de las Especias, probar antes de comprar.",
      },
      {
        nome: "Torre de Gálata",
        testo: "La torre de piedra genovesa terminada en 1348 sobre Karaköy, de unos 63 metros. Desde la terraza de arriba se ven el Cuerno de Oro, el Bósforo y la península histórica con cúpulas y minaretes. Desde 2020 es un museo.",
        come: "Tranvía T1 hasta Karaköy y luego subida a pie por las callejuelas; o el funicular histórico Tünel. Dentro, un ascensor lleva a la sexta planta y luego una escalera sube a la terraza, a unos 40 metros.",
        quando: "Abierta todos los días de 8.30 a 18.30, taquilla hasta las 18.15 aprox. (2026). Mejor a la apertura o en la última hora: a mediodía hay cola.",
        tempo: "1 hora",
        costo: "unos 30 € para visitantes extranjeros (2026)",
        orari: "Todos los días 8:30-18:30, taquilla hasta las 18:15 aproximadamente (2026)",
        lat: 41.02564,
        lng: 28.97421,
        url: "https://muze.gov.tr/",
        consiglio: "Dar la vuelta completa a la terraza: cada lado tiene una vista distinta.",
      },
      {
        nome: "Mezquita de Süleymaniye",
        testo: "La gran mezquita que Sinan construyó para Solimán el Magnífico, terminada en 1557, en la tercera colina de la ciudad. Más sobria y menos concurrida que la Mezquita Azul, tiene una terraza sobre el Cuerno de Oro y, en el jardín, las tumbas de Solimán y de su esposa Hürrem.",
        come: "A pie desde el Gran Bazar en 10-15 minutos, cuesta arriba. Mismas normas de vestimenta que las demás mezquitas.",
        quando: "Fuera de las horas de oración; al atardecer la terraza sobre el Cuerno de Oro está en su mejor momento.",
        tempo: "45 minutos-1 hora",
        costo: "entrada libre",
        lat: 41.01611,
        lng: 28.96389,
        consiglio: "Bajar después a pie hacia el Bazar de las Especias por las calles de los antiguos artesanos.",
      },
      {
        nome: "Palacio de Dolmabahçe",
        testo: "El palacio sobre el Bósforo al que se trasladaron los sultanes a mediados del siglo XIX, con 285 estancias entre estilo otomano y barroco europeo, cristales de Baccarat y el gran salón de ceremonias. Aquí murió Atatürk en 1938: los relojes del palacio están parados a las 9:05.",
        come: "Tranvía T1 hasta Kabataş y 5 minutos a pie. Se visita con un recorrido guiado en grupos; entradas también en la app oficial Milli Saraylar.",
        quando: "Por la mañana, llegando a la apertura de la taquilla.",
        tempo: "2 horas",
        costo: "2.000 TL (unos 35 €) para visitantes extranjeros con Selamlık, Harén y museo de pintura (2026)",
        orari: "Taquilla 9-17; cerrado los lunes (2026)",
        lat: 41.03944,
        lng: 29.00167,
        url: "https://www.millisaraylar.gov.tr/en/palaces/dolmabahce-palace",
      },
      {
        nome: "Museos Arqueológicos de Estambul",
        testo: "Tres museos en el mismo jardín, a los pies de Topkapı: el museo arqueológico con el llamado sarcófago de Alejandro, el Museo del Antiguo Oriente y el Pabellón de los Azulejos. Una colección de nivel mundial que a menudo se salta quien tiene poco tiempo.",
        come: "A pie desde Sultanahmet, por el parque de Gülhane. Incluido en el Museum Pass Istanbul.",
        quando: "Por la tarde, después de Topkapı.",
        tempo: "1,5-2 horas",
        lat: 41.0117,
        lng: 28.98132,
      },
      {
        nome: "Chora (Kariye)",
        testo: "La antigua iglesia del Santo Salvador en Chora, con uno de los ciclos de mosaicos y frescos bizantinos más bellos del mundo, de principios del siglo XIV. Convertida en mezquita, reabrió a los visitantes en 2024, con los mosaicos del nártex de nuevo visibles.",
        come: "Apartada, cerca de las murallas de Teodosio: autobús o taxi desde Sultanahmet, o 20 minutos a pie desde Balat. Incluida en el Museum Pass Istanbul.",
        quando: "Por la mañana, junto con Balat y Fener.",
        tempo: "1 hora",
        lat: 41.03122,
        lng: 28.93903,
      },
      {
        nome: "Balat y Fener",
        testo: "Los antiguos barrios judío y griego sobre el Cuerno de Oro, con casas de colores en cuesta, la iglesia de hierro de San Esteban de los Búlgaros y el Patriarcado Ecuménico de Constantinopla. Se recorren a pie, entre cafés y tiendas.",
        come: "Autobús o taxi desde Eminönü por el Cuerno de Oro, o el ferri de la línea del Cuerno de Oro hasta Fener o Balat.",
        quando: "Por la mañana entre semana; el fin de semana las calles de las fotos se llenan.",
        tempo: "2-3 horas",
        costo: "entrada libre",
        lat: 41.0328,
        lng: 28.9456,
      },
      {
        nome: "Crucero por el Bósforo",
        testo: "La mejor manera de entender la ciudad: el ferri público remonta el estrecho entre Europa y Asia, bajo los puentes y frente a palacios, yalı de madera y fortalezas, hasta Anadolu Kavağı, cerca del mar Negro.",
        come: "Ferri público largo de Şehir Hatları desde Eminönü; trayectos cortos con los barcos turísticos del muelle.",
        quando: "El ferri largo sale por la mañana; en verano la luz de la tarde es mejor a la vuelta.",
        tempo: "Media jornada, o el día entero con el ferri largo",
        costo: "unas 320 TL ida y vuelta (unos 6 €) en el ferri público largo (2026, por confirmar)",
        orari: "Ferri largo: sale de Eminönü a las 10:35, vuelve de Anadolu Kavağı a las 15 (2026, por confirmar)",
        lat: 41.01722,
        lng: 28.97111,
        consiglio: "En Anadolu Kavağı, subir a la fortaleza de Yoros para ver la boca del mar Negro.",
      },
      {
        nome: "Kadıköy y Moda",
        testo: "El corazón del lado asiático: un mercado de pescado, fruta y encurtidos, locales populares donde comen los vecinos y, más al sur, el paseo marítimo de Moda para el atardecer. Es el Estambul de todos los días, lejos de los monumentos.",
        come: "Ferri desde Eminönü o Karaköy, 20 minutos, con la Istanbulkart.",
        quando: "Tarde y noche.",
        tempo: "Media jornada",
        costo: "entrada libre",
        lat: 40.99339,
        lng: 29.03736,
        consiglio: "La travesía en ferri, con un té tomado a bordo, ya vale el viaje.",
      },
      {
        nome: "İstiklal y Beyoğlu",
        testo: "La gran avenida peatonal entre la plaza Taksim y la torre de Gálata, recorrida por el tranvía histórico rojo, con pasajes del siglo XIX como el Çiçek Pasajı, iglesias levantinas y librerías. Alrededor, las calles de las meyhane, tabernas con meze y rakı.",
        come: "Metro M2 hasta Taksim y bajada a pie, o subida desde Karaköy con el funicular Tünel.",
        quando: "Última hora de la tarde y noche.",
        tempo: "2 horas",
        costo: "entrada libre",
        lat: 41.03417,
        lng: 28.97889,
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Santa Sofía a la apertura y Mezquita Azul",
          "Cisterna Basílica",
          "Tarde: Palacio de Topkapı con el Harén",
          "Noche: ferri al atardecer y cena en Karaköy",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Gran Bazar por la mañana",
          "Mezquita de Süleymaniye y bajada al Bazar de las Especias",
          "Tarde: ferri a Kadıköy y atardecer en Moda",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: ferri público por el Bósforo desde Eminönü, o Dolmabahçe por la mañana",
          "Tarde: Torre de Gálata e İstiklal",
          "Como alternativa: Balat, Fener y Chora en lugar del Bósforo",
        ],
      },
    ],
    zone: [
      {
        nome: "Sultanahmet",
        perChi: "quien tiene poco tiempo y quiere estar entre los monumentos",
        testo: "Se va a pie a casi todo. Es turístico, con restaurantes caros y vendedores insistentes; por la noche se apaga pronto.",
        fascia: "50-120 €",
      },
      {
        nome: "Gálata / Karaköy",
        perChi: "quien quiere locales, cafés y vida nocturna",
        testo: "Barrio de moda, con hoteles boutique y terrazas. Las cuestas son empinadas y de noche es ruidoso.",
        fascia: "90-180 €",
      },
      {
        nome: "Beyoğlu / Taksim",
        perChi: "quien quiere marcha y conexiones",
        testo: "El corazón de la vida nocturna, cerca de metro y tranvía. Ruidoso y menos cuidado.",
        fascia: "60-140 €",
      },
      {
        nome: "Kadıköy",
        perChi: "quien quiere un Estambul más local y precios más bajos",
        testo: "Lado asiático, animado y lleno de locales; a los monumentos se va en ferri, 20 minutos, que se convierte en parte del viaje.",
        fascia: "50-110 €",
      },
    ],
    sapori: [
      {
        "nome": "Balık ekmek",
        "testo": "Bocadillo de pescado a la parrilla, en el puente de Gálata y en Eminönü."
      },
      {
        "nome": "Meze y rakı",
        "testo": "Platillos fríos y aguardiente de anís en las meyhane de Beyoğlu."
      },
      {
        "nome": "Börek y simit",
        "testo": "Hojaldre salado y rosca de sésamo, para el desayuno o un descanso."
      },
      {
        "nome": "Baklava y lokum",
        "testo": "Dulces con pistacho y miel, en las pastelerías históricas."
      }
    ],
    attenzioni: [
      "Desconocidos que invitan a beber o cenar en un local: el gobierno británico avisa de cuentas infladas y bebidas adulteradas. Elegir uno mismo adónde ir y no perder de vista el vaso.",
      "Los carteristas son frecuentes en las zonas turísticas: vigilar mochila y teléfono, sobre todo en el tranvía y en los bazares.",
      "Restaurantes de Sultanahmet sin precios expuestos: pedir la carta con precios antes de sentarse.",
      "Taxis: solo registrados y con taxímetro, o por app; anotar la matrícula. Evitar los coches de conductores no oficiales.",
      "Tensiones en la región: el gobierno británico (octubre de 2026) avisa de posibles cancelaciones de vuelos y cierres del espacio aéreo en Oriente Medio y desaconseja cualquier viaje a menos de 10 km de la frontera siria. Consultar las recomendaciones oficiales de viaje antes de salir."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Islas de los Príncipes",
        distanza: "1-1,5 horas en ferri",
        come: "Ferri público desde Kabataş o Eminönü hasta Büyükada, la isla más grande; se paga con la Istanbulkart.",
        testo: "Nueve islas sin coches en el mar de Mármara, con villas de madera del siglo XIX, pinares y pequeñas playas. Se recorren a pie, en bici o en los minibuses eléctricos.",
      },
      {
        nome: "Bursa",
        distanza: "unas 2-2,5 horas",
        come: "Ferri rápido desde Estambul a Mudanya o Güzelyalı y autobús al centro; o autobús directo.",
        testo: "La primera capital otomana, con la Gran Mezquita, la Mezquita Verde, los mausoleos de los primeros sultanes y los caravasares de la seda. En invierno es también la puerta a las pistas del Uludağ.",
      },
      {
        nome: "Edirne",
        distanza: "unas 2,5-3 horas en autobús",
        come: "Autobús desde las estaciones de Esenler o Alibeyköy.",
        testo: "La ciudad en la frontera con Grecia y Bulgaria donde está la Mezquita de Selimiye, que Sinan consideraba su obra maestra, patrimonio de la UNESCO. Excursión larga pero factible en el día.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Estambul?",
        risposta: "Tres días para Sultanahmet, los bazares, la Süleymaniye, el Bósforo y un paso por el lado asiático; con cuatro se añaden Dolmabahçe, Chora y Balat sin prisas.",
      },
      {
        domanda: "¿Conviene el Museum Pass Istanbul?",
        risposta: "Conviene si se visitan Topkapı con el Harén y al menos dos o tres museos como los Arqueológicos o Chora. No incluye Santa Sofía, la Cisterna Basílica ni la Torre de Gálata.",
      },
      {
        domanda: "¿Santa Sofía se paga?",
        risposta: "Sí: desde 2024 los visitantes extranjeros pagan 25 € y siguen un recorrido por las galerías superiores, mientras la planta baja queda reservada a la oración. La Mezquita Azul y la Süleymaniye siguen siendo gratuitas.",
      },
      {
        domanda: "¿Cómo vestirse para entrar en las mezquitas?",
        risposta: "Hombros y rodillas cubiertos para todos, cabeza cubierta para las mujeres, zapatos fuera en la entrada. En las mezquitas principales prestan pañuelos y faldas largas en la puerta.",
      },
      {
        domanda: "¿Mejor dormir en Sultanahmet o en Karaköy?",
        risposta: "Sultanahmet para quien tiene poco tiempo y quiere ir a pie a los monumentos; Karaköy y Gálata para quien busca bares y vida nocturna, a un tranvía o un paseo del casco antiguo.",
      },
      {
        domanda: "¿Cómo moverse por la ciudad?",
        risposta: "Con la Istanbulkart recargable, válida en el tranvía T1, metro, funiculares, autobuses y ferris. El tranvía T1 une Sultanahmet, el Gran Bazar, Eminönü, Karaköy y Kabataş.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Santa Sofía vista desde el noroeste, con la gran cúpula y los cuatro minaretes',
    immagine: '/images/viaggi/turchia-itinerario/giorno-02-istanbul.jpg',
  },
  {
    slug: 'cappadocia',
    paeseSlug: 'turchia',
    ordine: 2,
    nome: 'Capadocia',
    tipologia: ['paesaggio', 'trekking', 'storia'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      'Una meseta de toba volcánica que la erosión ha esculpido en chimeneas de hadas, valles y pináculos, con iglesias rupestres bizantinas y ciudades subterráneas.',
    percheAndarci:
      'Por los globos al amanecer, las iglesias con frescos del museo al aire libre de Göreme, los paseos por los valles y las noches en un hotel excavado en la roca.',
    cosaVedere: [
      'El museo al aire libre de Göreme y la Iglesia Oscura',
      'La ciudadela de Uçhisar',
      'El Valle Rojo y el Valle Rosa al atardecer',
      'Paşabağ (valle de los Monjes) y el valle de Devrent',
      'Las ciudades subterráneas de Derinkuyu y Kaymaklı',
      'El valle de Ihlara',
    ],
    cosaFare: [
      'El vuelo en globo al amanecer',
      'Trekking por el Valle del Amor y el Valle de las Palomas',
      'Paseo a caballo o en quad al atardecer',
    ],
    doveDormire:
      'Göreme por comodidad, Uçhisar y Ortahisar por las vistas y la calma, Ürgüp por restaurantes y bodegas. Económicas: pensiones de Göreme · gama media: cave hotels de Göreme y Uçhisar · lujo: Argos in Cappadocia, Museum Hotel.',
    doveMangiare:
      'Testi kebab cocinado en vasija de barro, mantı (raviolis con yogur), pide, los vinos de Ürgüp y Uçhisar.',
    comeArrivare: "Desde Estambul se vuela en una hora aproximadamente a Kayseri (ASR) o Nevşehir (NAV), unos 40-90 € con equipaje. De Kayseri a Göreme el traslado dura una hora, desde Nevşehir unos 40 minutos; los traslados compartidos, unos 10-15 € por persona, se reservan con el hotel según la hora del vuelo. Como alternativa, los autobuses nocturnos desde Estambul tardan 10-11 horas, y los de Pamukkale salen de Göreme y Nevşehir (9-10 horas, 20-35 €).",
    comeSpostarsi: 'Coche de alquiler o tours de un día (Red Tour, Green Tour); los dolmuş conectan Göreme, Uçhisar, Avanos y Ürgüp.',
    periodoMigliore: 'abril-junio y septiembre-octubre; en invierno hay nieve y el paisaje es preciosísimo, pero se cancelan más vuelos en globo',
    costi: "Presupuesto bajo unos 50-70 € al día por persona (pensión en Göreme, dolmuş, un museo, comida en los locales del pueblo); medio 110-170 € (hotel cueva, una excursión de un día o coche, dos sitios al día, cenas con vino); alto desde 300 € (hotel cueva con terraza en Uçhisar, globo, guía privado). Entradas 2026: museo al aire libre de Göreme 20 €, Iglesia Oscura 6 €, Zelve-Paşabağ 12 €, Derinkuyu o Kaymaklı 13 €; globo 150-350 €.",
    erroriDaEvitare: [
      'Reservar el globo para la última mañana: con viento los vuelos se cancelan, y conviene tener al menos un día de reserva',
      'Elegir al operador solo por el precio: cuentan la licencia y el número de pasajeros por cesta',
      'Visitar el museo al aire libre a mediodía, cuando llegan todos los grupos',
    ],
    miaEsperienza:
      "Llegué en avión desde Estambul durante los dieciséis días en Turquía con amigos: tres días con base en Göreme, el globo al amanecer, el museo al aire libre, el Valle Rojo, Uçhisar y la ciudad subterránea, y luego el autobús nocturno a Pamukkale.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Museo al aire libre de Göreme",
        "testo": "Un conjunto de iglesias y monasterios rupestres excavados en los conos de roca, con frescos en gran parte de los siglos X y XI. La Iglesia Oscura (Karanlık) es una de las más bellas.",
        "come": "Desde Göreme a pie o en lanzadera.",
        "quando": "A la apertura, antes que los grupos.",
        "tempo": "1,5-2 horas",
        "costo": "20 € para visitantes extranjeros (muze.gov.tr, 2026); Iglesia Oscura 6 € aparte",
        "orari": "Todos los días 8-17, taquilla hasta las 16:15 (2026)",
        "lat": 38.6427,
        "lng": 34.84503,
        "url": "https://muze.gov.tr/muze-detay?SectionId=GRM01&DistId=GRM",
        "consiglio": "Preguntar en taquilla si la Iglesia Oscura tiene suplemento: los colores merecen la parada."
      },
      {
        "nome": "Globo aerostático al amanecer",
        "testo": "El vuelo sobre los valles y las chimeneas de hadas al salir el sol es la razón por la que muchos vienen aquí.",
        "come": "Se reserva con un operador autorizado, con recogida en el hotel antes del amanecer.",
        "quando": "Al amanecer, cuando el tiempo lo permite: con viento fuerte se cancelan los vuelos.",
        "tempo": "Alrededor de una hora de vuelo, media mañana en total",
        "consiglio": "Reservar para los primeros días y tener uno de reserva: los vuelos se cancelan con viento."
      },
      {
        "nome": "Valle Rojo y Valle Rosa",
        "testo": "Senderos entre rocas rosas y rojas con iglesias excavadas en la roca, hermosos al atardecer.",
        "come": "Salida a pie desde Göreme o en coche hasta un mirador.",
        "quando": "Atardecer.",
        "tempo": "2-3 horas",
        "costo": "Gratis",
        "lat": 38.65099,
        "lng": 34.85359
      },
      {
        "nome": "Derinkuyu y Kaymaklı",
        "testo": "Las ciudades subterráneas de varios niveles, usadas durante siglos como refugio en las incursiones. Derinkuyu baja hasta unos 85 metros y podía albergar a miles de personas con sus animales; puertas de piedra rodantes cerraban los pasillos.",
        "come": "En coche o en tour desde Göreme.",
        "quando": "A primera hora para evitar la multitud en los corredores.",
        "tempo": "1-1,5 horas",
        "costo": "13 € cada una para visitantes extranjeros (muze.gov.tr, 2026)",
        "orari": "Todos los días 8-17, taquilla hasta las 16:15 (2026)",
        "lat": 38.37357,
        "lng": 34.7351,
        "url": "https://muze.gov.tr/muze-detay?SectionId=DKY01&DistId=DKY",
        "consiglio": "Quien sufra claustrofobia, que lo piense bien: los pasillos son estrechos y bajos."
      },
      {
        "nome": "Iglesia Oscura (Karanlık Kilise)",
        "testo": "La iglesia del museo al aire libre con los frescos mejor conservados de Capadocia: sus pocas ventanas protegieron los colores, sobre todo el azul de los fondos. Está restaurada y se paga aparte.",
        "come": "Dentro del museo al aire libre de Göreme, entrada separada.",
        "quando": "En la misma visita al museo, temprano.",
        "tempo": "15-20 minutos",
        "costo": "6 € para visitantes extranjeros (muze.gov.tr, 2026)",
        "orari": "Todos los días 8-17, taquilla hasta las 16:45 (2026)",
        "lat": 38.6387,
        "lng": 34.84626,
        "url": "https://muze.gov.tr/muze-detay?SectionId=GRM02&DistId=GRM"
      },
      {
        "nome": "Zelve y Paşabağ",
        "testo": "Dos sitios con una entrada: Zelve es un valle de casas e iglesias excavadas, habitado hasta los años cincuenta y abandonado por riesgo de derrumbes; Paşabağ, el valle de los Monjes, tiene chimeneas de hadas con varios sombreros y celdas de eremitas.",
        "come": "En coche, quad o dolmuş hacia Avanos, 10-15 minutos desde Göreme.",
        "quando": "Última hora de la tarde, con la luz rasante.",
        "tempo": "1,5-2 horas",
        "costo": "12 € para visitantes extranjeros (muze.gov.tr, 2026)",
        "orari": "Todos los días 8-17, taquilla hasta las 16:15 (2026)",
        "lat": 38.66917,
        "lng": 34.86337,
        "url": "https://muze.gov.tr/muze-detay?SectionId=ZPO01&DistId=ZPO"
      },
      {
        "nome": "Valle de Devrent",
        "testo": "También llamado Valle de la Imaginación: rocas rosadas sin iglesias ni casas, donde se buscan formas de animales, la más famosa es el camello. Se ve en poco tiempo desde la carretera.",
        "come": "En coche entre Zelve y Ürgüp, parada en el arcén.",
        "quando": "Última hora de la tarde.",
        "tempo": "20-30 minutos",
        "costo": "Gratis",
        "lat": 38.67262,
        "lng": 34.88551
      },
      {
        "nome": "Ciudadela de Uçhisar",
        "testo": "El espolón de roca más alto de la zona, horadado de estancias y pasadizos, que domina el pueblo de Uçhisar. Desde la cima se ven Göreme, los valles y, en días claros, el volcán Erciyes.",
        "come": "En coche o dolmuş desde Göreme, 10 minutos; escalones hasta arriba.",
        "quando": "Al atardecer.",
        "tempo": "45 minutos-1 hora",
        "lat": 38.63033,
        "lng": 34.80556
      },
      {
        "nome": "Valle del Amor",
        "testo": "El valle de los grandes pináculos alargados en forma de seta, el más fotografiado desde los globos. Un sendero lo recorre por el fondo, entre viñas y frutales.",
        "come": "A pie desde Göreme o desde la carretera de Uçhisar; el sendero es fácil pero está poco señalizado.",
        "quando": "Al amanecer, bajo los globos, o por la tarde.",
        "tempo": "2-3 horas a pie",
        "costo": "Gratis",
        "lat": 38.66069,
        "lng": 34.81961
      },
      {
        "nome": "Valle de las Palomas",
        "testo": "El valle entre Uçhisar y Göreme que debe su nombre a los miles de palomares excavados en la roca, usados para recoger el guano como abono para las viñas. El sendero baja por un cañón verde.",
        "come": "A pie, cuesta abajo de Uçhisar a Göreme.",
        "quando": "Por la mañana o por la tarde, evitando las horas de calor en verano.",
        "tempo": "1,5-2 horas",
        "costo": "Gratis",
        "lat": 38.63278,
        "lng": 34.81611
      },
      {
        "nome": "Castillo de Ortahisar",
        "testo": "El otro gran espolón fortificado de Capadocia, en el pueblo de Ortahisar, menos visitado que Uçhisar. Alrededor hay almacenes en la toba donde se guardan cítricos y patatas.",
        "come": "En coche desde Göreme o Ürgüp, 10 minutos.",
        "quando": "Por la tarde.",
        "tempo": "45 minutos",
        "lat": 38.61994,
        "lng": 34.86433
      },
      {
        "nome": "Avanos",
        "testo": "El pueblo a orillas del Kızılırmak, el río más largo de Turquía, famoso por la cerámica hecha con la arcilla roja del río. Se entra en los talleres a ver el torno de pie.",
        "come": "En dolmuş o en coche desde Göreme, 15 minutos.",
        "quando": "Por la tarde, junto con Zelve y Paşabağ.",
        "tempo": "1-2 horas",
        "lat": 38.715,
        "lng": 34.84667
      },
      {
        "nome": "Valle de Ihlara",
        "testo": "Un cañón de un centenar de metros de profundidad excavado por el río Melendiz, con un sendero junto al arroyo e iglesias rupestres con frescos en las paredes. Es la caminata más verde de la región.",
        "come": "En coche o con el Green Tour, unas 1,5 horas desde Göreme; el tramo clásico va de Ihlara a Belisırma.",
        "quando": "Por la mañana; en verano por el frescor del río.",
        "tempo": "media jornada",
        "lat": 38.2575,
        "lng": 34.29528,
        "consiglio": "Comida en los restaurantes junto al arroyo en Belisırma, y luego taxi para volver al coche."
      },
      {
        "nome": "Monasterio de Selime",
        "testo": "El gran complejo rupestre al final del valle de Ihlara, con una catedral excavada en dos niveles, cocinas y establos. El paisaje alrededor se ha usado como decorado de películas de ciencia ficción.",
        "come": "En coche o con el Green Tour, junto con Ihlara.",
        "quando": "Por la tarde, después de Ihlara.",
        "tempo": "45 minutos-1 hora",
        "lat": 38.3012,
        "lng": 34.25943
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Al amanecer: globo, o el cielo lleno de globos desde las terrazas de Göreme",
          "Museo al aire libre de Göreme e Iglesia Oscura",
          "Tarde: Zelve, Paşabağ y Devrent",
          "Atardecer en el Valle Rojo"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1 como arriba",
          "Día 2: ciudad subterránea de Derinkuyu o Kaymaklı",
          "Valle de Ihlara y monasterio de Selime",
          "Atardecer desde la ciudadela de Uçhisar"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: caminata por el Valle de las Palomas y el Valle del Amor",
          "Tarde en Avanos entre los talleres de cerámica, o castillo de Ortahisar",
          "Cena y vino en Ürgüp, con el día de reserva para el globo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Göreme",
        "perChi": "quien quiere estar cerca de todo",
        "testo": "Hoteles en cueva, restaurantes y salidas de los globos. El más turístico.",
        "fascia": "40-170 €"
      },
      {
        "nome": "Uçhisar",
        "perChi": "quien quiere vistas y calma",
        "testo": "Pueblo bajo el castillo, hoteles con encanto y terraza panorámica.",
        "fascia": "90-170 €"
      },
      {
        "nome": "Ürgüp / Mustafapaşa",
        "perChi": "quien quiere un sitio menos turístico",
        "testo": "Pueblos más tranquilos, con restaurantes locales y vino."
      }
    ],
    sapori: [
      {
        "nome": "Testi kebab",
        "testo": "Carne y verduras cocidas en una vasija de barro que se rompe en la mesa."
      },
      {
        "nome": "Mantı",
        "testo": "Raviolis pequeños con yogur y mantequilla especiada."
      },
      {
        "nome": "Vinos de Capadocia",
        "testo": "Blancos de uva Emir y tintos locales, en las bodegas de Ürgüp y Uçhisar."
      },
      {
        "nome": "Pide",
        "testo": "Pizza turca en forma de barca con queso o carne, en hornos locales."
      }
    ],
    attenzioni: [
      "Globo la última mañana: con viento se cancela, así que es mejor tener uno de reserva.",
      "Elegir el operador por la licencia y los pasajeros por cesta, no solo por el precio.",
      "Museo al aire libre a mediodía: llegan todos los grupos, mejor a la apertura.",
      "Alquiler de quads y caballos: comprobar el estado de los vehículos y el seguro antes de partir."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Valle de Soğanlı",
        "distanza": "unos 55-60 km, 1 hora",
        "come": "En coche; no hay excursiones regulares.",
        "testo": "Dos valles con iglesias rupestres pintadas y el pueblo de las muñecas de trapo, casi sin turistas. Una Capadocia como debía de ser antes del boom."
      },
      {
        "nome": "Kayseri",
        "distanza": "unos 75 km, 1 hora",
        "come": "En coche o en autobús desde Nevşehir; de aquí salen muchos vuelos a Estambul.",
        "testo": "La ciudad selyúcida al pie del volcán Erciyes, con la ciudadela, las madrasas del siglo XIII y el bazar. En invierno se esquía en el Erciyes."
      },
      {
        "nome": "Hacıbektaş",
        "distanza": "unos 55 km, 45 minutos",
        "come": "En coche desde Göreme o Avanos.",
        "testo": "El complejo del santo sufí Hacı Bektaş Veli, centro de la tradición aleví, con el museo y el mausoleo en un jardín tranquilo."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Capadocia?",
        "risposta": "Tres noches: dos días completos para museos, valles y ciudades subterráneas, más una mañana de reserva para el globo, que con viento se cancela."
      },
      {
        "domanda": "¿Mejor dormir en Göreme, Uçhisar o Ürgüp?",
        "risposta": "Göreme es lo más cómodo, con todo a pie; Uçhisar y Ortahisar son más tranquilos y con vistas; Ürgüp tiene más restaurantes y bodegas, pero hace falta coche para los valles."
      },
      {
        "domanda": "¿Cuánto cuesta el globo y cuándo se vuela?",
        "risposta": "No hay precio oficial: más o menos 150-350 € por persona según temporada, operador y número de pasajeros en la cesta. Se vuela al amanecer y el vuelo dura una hora aproximadamente."
      },
      {
        "domanda": "¿Derinkuyu o Kaymaklı?",
        "risposta": "Derinkuyu baja más y es más espectacular, Kaymaklı está más cerca de Göreme y a menudo tiene menos gente. La entrada cuesta 13 € en las dos: a la mayoría le basta con una."
      },
      {
        "domanda": "¿Hace falta coche en Capadocia?",
        "risposta": "No es imprescindible: entre Göreme, Uçhisar, Avanos y Ürgüp hay dolmuş, e Ihlara y las ciudades subterráneas se hacen con el Green Tour. El coche da libertad para atardeceres y valles lejanos."
      },
      {
        "domanda": "¿Compensa el Museum Pass Capadocia?",
        "risposta": "Con Göreme (20 €), la Iglesia Oscura (6 €), Zelve-Paşabağ (12 €) y una ciudad subterránea (13 €) se llega a 51 €; el pase, unos 65 € para tres días, solo compensa si se añaden otros sitios."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Globos sobre los valles de toba del parque nacional de Göreme, en Capadocia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-06-cappadocia.jpg',
  },
  {
    slug: 'pamukkale',
    paeseSlug: 'turchia',
    ordine: 3,
    nome: 'Pamukkale y Hierápolis',
    tipologia: ['paesaggio', 'archeologia', 'terme'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione:
      'Una colina de terrazas de travertino blanco formadas por fuentes termales, con las ruinas de la ciudad romana de Hierápolis en lo alto.',
    percheAndarci:
      'Para caminar descalzo por las pozas calcáreas, por el teatro romano de Hierápolis y por la antigua piscina de Cleopatra, con las columnas sumergidas.',
    cosaVedere: [
      'Las terrazas de travertino',
      'El teatro y la necrópolis de Hierápolis',
      'La piscina antigua (Antique Pool), con entrada aparte',
      'El martyrion de San Felipe',
    ],
    cosaFare: ['Subir descalzo desde abajo al atardecer', 'Un baño en la piscina antigua'],
    doveDormire: 'El pueblo de Pamukkale, a los pies de las terrazas, con pensiones y pequeños hoteles con piscina termal.',
    comeArrivare: "El aeropuerto más cercano es Denizli Çardak, a una hora de carretera, con vuelos desde Estambul; desde allí lanzaderas y taxis llevan al pueblo. En autobús se baja en la estación de Denizli y se toma el minibús (dolmuş) hasta Pamukkale, al pie de la colina. El autobús nocturno desde Capadocia, desde Göreme o Nevşehir, tarda unas 9-10 horas y cuesta orientativamente 20-35 €; desde Selçuk se tarda unas 3 horas y desde Antalya unas 4. En coche, Pamukkale-Afrodisias-Selçuk son unas 3,5 horas de conducción.",
    comeSpostarsi: 'A pie; dolmuş a Denizli.',
    periodoMigliore: 'primavera y otoño; en verano las terrazas blancas deslumbran y queman',
    costi: "Presupuesto bajo unos 60-80 € al día por persona (pensión en el pueblo, comida en locales, entrada de 30 €); medio 100-150 € (hotel con piscina termal, Piscina Antigua, Laodicea, cena en restaurante); alto desde 200 € (hotel termal en Karahayıt, coche, guía). Entradas 2026 para visitantes extranjeros: Pamukkale-Hierápolis 30 €, Laodicea 12 €, Afrodisias 12 €; la Piscina Antigua se paga aparte, en liras.",
    erroriDaEvitare: [
      'Subir a mediodía en verano: el reflejo del blanco es cegador',
      'Esperar que todas las pozas estén llenas: muchas se dejan secas por turnos para preservar el travertino',
    ],
    miaEsperienza:
      "Llegué en el autobús nocturno desde Capadocia durante los dieciséis días en Turquía con amigos: un día entre las terrazas e Hierápolis, y luego en coche hacia Afrodisias y Éfeso.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Terrazas de travertino",
        "testo": "Las pozas blancas de caliza a lo largo de la ladera, llenas por las fuentes termales. Las autoridades regulan el agua y cierran por turnos algunos tramos para que el travertino se regenere. Patrimonio de la UNESCO desde 1988 junto con Hierápolis.",
        "come": "Entrada por el sur o por el norte del sitio; autobús o coche hasta el aparcamiento. Desde la entrada baja, en el pueblo, se sube descalzo en una media hora.",
        "quando": "Al atardecer, con la luz sobre el blanco; a mediodía en verano deslumbra.",
        "tempo": "1-2 horas",
        "costo": "30 € para visitantes extranjeros, entrada única con Hierápolis (muze.gov.tr, 2026)",
        "orari": "Todos los días de 8 a 18, taquilla hasta las 17 (muze.gov.tr, 2026)",
        "lat": 37.92389,
        "lng": 29.12333,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK",
        "consiglio": "Llevar una toalla y bañador, sabiendo que muchas pozas pueden estar secas."
      },
      {
        "nome": "Hierápolis y la Piscina Antigua",
        "testo": "Las ruinas de la ciudad fundada en el siglo II a. C. sobre las terrazas: el teatro, la necrópolis con unas 1.200 tumbas, el martyrion octogonal de San Felipe y la piscina antigua de agua caliente con columnas en el fondo.",
        "come": "Se recorre el sitio a pie. La piscina se paga aparte.",
        "quando": "Temprano por la mañana o a última hora de la tarde.",
        "tempo": "2 horas",
        "costo": "Incluido en los 30 € de la entrada de las terrazas; Piscina Antigua aparte, en liras",
        "orari": "Todos los días de 8 a 18, taquilla hasta las 17 (muze.gov.tr, 2026)",
        "lat": 37.925,
        "lng": 29.12583,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Teatro de Hierápolis",
        "testo": "El teatro romano excavado en la ladera, con la escena decorada con relieves restaurados por la misión arqueológica italiana que trabaja aquí desde hace décadas. Desde las gradas altas se ve todo el valle del Lico.",
        "come": "A pie desde la Piscina Antigua, unos diez minutos de subida.",
        "quando": "Por la mañana, antes del calor: el sendero no tiene sombra.",
        "tempo": "30-45 minutos",
        "costo": "Incluido en la entrada de Hierápolis",
        "lat": 37.9267,
        "lng": 29.1292,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Necrópolis de Hierápolis",
        "testo": "Una de las necrópolis antiguas más extensas de Anatolia, a lo largo de la calzada que llega del norte: túmulos, sarcófagos y tumbas en forma de casa, muchas inclinadas por los terremotos. Se atraviesa entrando por la puerta norte.",
        "come": "Desde la entrada norte del sitio, a pie por la calzada antigua.",
        "quando": "Última hora de la tarde, con la luz baja.",
        "tempo": "45 minutos-1 hora",
        "costo": "Incluido en la entrada de Hierápolis",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Puerta de Frontino y vía Frontina",
        "testo": "La puerta monumental de tres arcos entre dos torres redondas, construida a finales del siglo I d. C. por el procónsul Julio Frontino y dedicada al emperador Domiciano. De aquí parte la calle columnada principal de la ciudad.",
        "come": "Desde la entrada norte, después de la necrópolis.",
        "quando": "Junto con la necrópolis.",
        "tempo": "20 minutos",
        "costo": "Incluido en la entrada de Hierápolis",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Martyrion de San Felipe",
        "testo": "El santuario octogonal del siglo V construido donde la tradición sitúa el martirio del apóstol Felipe, en la colina sobre la ciudad. En 2011 la misión italiana anunció, cerca del martyrion, el hallazgo de la iglesia con la que considera su tumba.",
        "come": "Subida a pie desde el teatro, unos 15-20 minutos por escalones y sendero.",
        "quando": "Temprano por la mañana o a última hora de la tarde.",
        "tempo": "1 hora con la subida",
        "costo": "Incluido en la entrada de Hierápolis",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Plutonium",
        "testo": "La gruta sagrada de Plutón de la que salen gases de dióxido de carbono, que en la Antigüedad mataban a los animales ofrecidos en sacrificio. Encontrada y excavada por la misión italiana, se ve desde fuera, junto al templo de Apolo.",
        "come": "A pie, entre el teatro y la Piscina Antigua.",
        "quando": "En cualquier momento de la visita.",
        "tempo": "15 minutos",
        "costo": "Incluido en la entrada de Hierápolis",
        "lat": 37.9268,
        "lng": 29.12681,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Museo arqueológico de Hierápolis",
        "testo": "El museo dentro de las grandes termas romanas, con salas abovedadas de bloques de travertino. Expone sarcófagos, estatuas y relieves de Hierápolis, Laodicea y Tripolis, útiles para entender las ruinas de fuera.",
        "come": "Junto a la Piscina Antigua, en el centro del sitio.",
        "quando": "En las horas de más calor, cuando fuera aprieta el sol.",
        "tempo": "45 minutos",
        "costo": "Indicado en 30 € en muze.gov.tr, el mismo importe que la entrada del sitio",
        "orari": "Todos los días de 8 a 17.30, taquilla hasta las 17 (muze.gov.tr, 2026)",
        "lat": 37.92506,
        "lng": 29.12405,
        "url": "https://muze.gov.tr/muze-detay?SectionId=DHA01&DistId=MRK"
      },
      {
        "nome": "Karahayıt",
        "testo": "El pueblo termal a pocos kilómetros al norte de Pamukkale, donde una fuente de agua caliente rica en hierro tiñe de rojo y naranja la caliza. Alrededor hay muchos hoteles con piscinas termales.",
        "come": "En dolmuş o en coche desde el pueblo de Pamukkale, unos 10 minutos.",
        "quando": "Por la tarde-noche, después de Hierápolis.",
        "tempo": "1 hora",
        "costo": "La fuente roja se ve gratis",
        "lat": 37.96539,
        "lng": 29.10268
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Hierápolis, teatro y necrópolis",
          "Piscina Antigua",
          "Tarde: subida por las terrazas",
          "Atardecer sobre el travertino"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1 como arriba",
          "Día 2: Laodicea a la apertura",
          "Museo arqueológico de Hierápolis y subida al Martyrion de San Felipe",
          "Tarde en la fuente roja y las termas de Karahayıt"
        ]
      },
      {
        "titolo": "A lo largo de la ruta",
        "tappe": [
          "Autobús nocturno desde Göreme o Nevşehir, llegada a Pamukkale de madrugada",
          "Terrazas e Hierápolis durante el día, noche en el pueblo",
          "Recogida del coche en Denizli y salida hacia el oeste",
          "Parada de dos horas en Afrodisias y luego Selçuk para la noche"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pueblo de Pamukkale",
        "perChi": "quien quiere estar bajo las terrazas",
        "testo": "Pensiones familiares, piscinas termales y restaurantes sencillos.",
        "fascia": "35-70 €"
      },
      {
        "nome": "Karahayıt",
        "perChi": "quien quiere baños termales",
        "testo": "Pueblo cercano con termas y aguas rojas ricas en hierro.",
        "fascia": "60-250 €"
      },
      {
        "nome": "Denizli",
        "perChi": "quien llega tarde o sigue en coche",
        "testo": "La ciudad a una media hora, con estación de autobuses, alquiler de coches y hoteles urbanos; poco interesante para quedarse, cómoda para la logística."
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Masa fina rellena de queso o espinacas, cocida al momento."
      },
      {
        "nome": "Kebab de Denizli",
        "testo": "Cordero cocinado lentamente en horno de leña, servido con pan."
      },
      {
        "nome": "Ayran",
        "testo": "Yogur líquido salado, para el calor."
      },
      {
        "nome": "Té turco",
        "testo": "En vaso de tulipán, en todas partes."
      }
    ],
    attenzioni: [
      "Subir a mediodía en verano: el reflejo del blanco es cegador y el calor quema.",
      "Esperar todas las pozas llenas: muchos tramos se cierran por turnos para proteger el travertino.",
      "Seguir las indicaciones de los vigilantes sobre dónde y cómo caminar por el travertino: normalmente descalzo, así que llevar una bolsa para el calzado."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Afrodisias",
        "distanza": "unas 1,5 horas en coche",
        "come": "En coche, en la carretera hacia Selçuk; en transporte público es incómodo.",
        "testo": "La ciudad de Afrodita, patrimonio de la UNESCO desde 2017, con un estadio romano casi intacto, el tetrapylon y un museo lleno de estatuas de su escuela de escultores, incluidos los relieves del Sebasteion. Entrada 12 €, abierto todos los días de 8.30 a 17.30 (muze.gov.tr, 2026)."
      },
      {
        "nome": "Laodicea",
        "distanza": "unos 20 minutos en coche",
        "come": "En coche o en taxi desde Pamukkale, hacia Denizli.",
        "testo": "Una de las siete iglesias del Apocalipsis, con dos teatros, calles columnadas en parte levantadas de nuevo y una iglesia del siglo IV bajo una cubierta. Mucho menos visitada que Hierápolis. Entrada 12 €, todos los días de 8 a 17.30 (muze.gov.tr, 2026)."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuánto tiempo hace falta en Pamukkale?",
        "risposta": "Un día completo basta para las terrazas e Hierápolis. Conviene dormir en el pueblo para ver el atardecer sobre el travertino y tener la mañana temprano sin grupos; un segundo día solo si se añaden Laodicea o Afrodisias."
      },
      {
        "domanda": "¿Cuánto cuesta la entrada a Pamukkale?",
        "risposta": "Para visitantes extranjeros la entrada única de terrazas e Hierápolis cuesta 30 € en 2026. La Piscina Antigua se paga aparte, en liras, en su propia taquilla."
      },
      {
        "domanda": "¿Se puede bañar uno en las terrazas?",
        "risposta": "Se camina descalzo y uno se moja en las pozas abiertas, que tienen poca agua y cambian por turnos. Para nadar de verdad está la Piscina Antigua, entre columnas sumergidas."
      },
      {
        "domanda": "¿Mejor entrar por la entrada baja o por la alta?",
        "risposta": "Desde la entrada baja, en el pueblo, se sube descalzo por el travertino en una media hora, la forma más bonita de llegar a Hierápolis. Las entradas norte y sur, a las que se llega en coche o en tour, van bien para empezar por las ruinas y la necrópolis."
      },
      {
        "domanda": "¿Se puede visitar Pamukkale en el día desde Selçuk?",
        "risposta": "Sí, con un tour o en autobús, pero son unas 3 horas por trayecto y se pierde el atardecer. Mejor una noche en el pueblo, de camino entre Capadocia y la costa."
      },
      {
        "domanda": "¿Vale la pena el Museum Pass?",
        "risposta": "El Museum Pass The Mediterranean, 90 € por 7 días, cubre los sitios estatales de las provincias de Antalya, Mersin, Adana y Denizli, así que también Pamukkale y Laodicea. Compensa a quien sigue hacia la costa licia y Antalya."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Las pozas de travertino blanco de Pamukkale llenas de agua azulada',
    immagine: '/images/viaggi/turchia-itinerario/giorno-08-pamukkale.jpg',
  },
  {
    slug: 'efeso',
    paeseSlug: 'turchia',
    ordine: 4,
    nome: 'Éfeso, Selçuk y Şirince',
    tipologia: ['archeologia', 'borghi'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La ciudad romana mejor conservada del Mediterráneo oriental, con la biblioteca de Celso y el gran teatro, a pocos kilómetros de la ciudad de Selçuk y del pueblo de colina de Şirince.',
    percheAndarci:
      'Para recorrer la calle de los Curetes hasta la biblioteca de Celso, ver los frescos y los mosaicos de las casas en terraza y pasar una tarde entre las casas griegas de Şirince.',
    cosaVedere: [
      'La biblioteca de Celso y el gran teatro de Éfeso',
      'Las casas en terraza, con entrada aparte',
      'La basílica de San Juan y el castillo de Selçuk',
      'El museo de Éfeso en Selçuk',
      'La casa de la Virgen (Meryem Ana Evi)',
      'Afrodisias, en el camino desde Pamukkale',
    ],
    cosaFare: ['Entrar por la puerta alta y bajar hacia la biblioteca', 'Probar los vinos de fruta en Şirince'],
    doveDormire: 'Selçuk por comodidad y precios, Şirince por la calma; Kuşadası para quien quiera el mar cerca.',
    comeArrivare: "El aeropuerto más cercano es Esmirna Adnan Menderes, a una hora de carretera de Selçuk; desde la estación del aeropuerto y desde el centro de Esmirna los trenes regionales llegan a la estación de Selçuk. Desde Pamukkale hay autobuses directos en unas 3 horas, y en coche, pasando por Afrodisias, se calculan unas 3,5 horas de conducción. De Selçuk a la entrada alta de Éfeso hay pocos kilómetros: taxi por pocos euros o dolmuş.",
    comeSpostarsi: 'Taxi o dolmuş de Selçuk a la entrada alta de Éfeso (pocos km); coche de alquiler.',
    periodoMigliore: 'abril-junio y septiembre-octubre, siempre a la apertura',
    costi: "Presupuesto bajo unos 70-90 € al día por persona (pensión en Selçuk, dolmuş, Éfeso, comida en locales); medio 130-180 € (casa de piedra en Şirince u hotel en Selçuk, taxis, casas en terraza y museo, cenas con vino); alto desde 250 € (hotel boutique, guía privado, coche). Entradas 2026 para visitantes extranjeros: Éfeso 40 € con el museo experiencial, casas en terraza 15 €, museo de Éfeso 10 €, basílica de San Juan 6 €.",
    erroriDaEvitare: [
      'Entrar a media mañana en temporada alta, cuando llegan los pasajeros de los cruceros de Kuşadası',
      'Saltarse las casas en terraza para ahorrar: son la parte más bonita del sitio',
    ],
    miaEsperienza:
      "Estuve durante los dieciséis días en Turquía con amigos, en coche desde Pamukkale con una parada en Afrodisias: base en Selçuk, y luego Éfeso y Şirince.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Éfeso",
        "testo": "La gran ciudad grecorromana con la biblioteca de Celso (siglo II d. C.), el gran teatro de unas 24.000-25.000 plazas, la vía de los Curetes y las Casas en terraza, residencias romanas con mosaicos y frescos bajo una cubierta.",
        "come": "Desde Selçuk en taxi o dolmuş; la entrada superior evita la subida.",
        "quando": "A la apertura, sobre todo cuando llegan los cruceros de Kuşadası: desde las 10 el sitio se llena.",
        "tempo": "2-3 horas",
        "costo": "40 € para visitantes extranjeros, con el museo experiencial de Éfeso incluido (muze.gov.tr, 2026)",
        "orari": "Todos los días de 8 a 18, taquilla hasta las 17.30 (muze.gov.tr, 2026)",
        "lat": 37.94097,
        "lng": 27.34147,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS",
        "consiglio": "Las Casas en terraza tienen una entrada aparte de 15 €: merece la pena, están entre lo mejor del sitio."
      },
      {
        "nome": "Casas en terraza",
        "testo": "Siete casas romanas de los notables de Éfeso construidas en el siglo I d. C. en las terrazas del monte Koressos, bajo una gran cubierta. Se camina por pasarelas sobre suelos de mosaico y paredes con frescos.",
        "come": "Dentro de Éfeso, en la vía de los Curetes, con entrada aparte.",
        "quando": "Antes del mediodía, antes de bajar a la biblioteca.",
        "tempo": "45 minutos-1 hora",
        "costo": "15 € para visitantes extranjeros (muze.gov.tr, 2026)",
        "orari": "Todos los días de 9 a 17, taquilla hasta las 16.30 (muze.gov.tr, 2026)",
        "lat": 37.93806,
        "lng": 27.34139,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS02&DistId=EFS"
      },
      {
        "nome": "Biblioteca de Celso",
        "testo": "La fachada de dos pisos más fotografiada de Turquía, construida a principios del siglo II d. C. por el hijo del gobernador Celso como biblioteca y tumba de su padre. Se volvió a levantar pieza a pieza en los años setenta.",
        "come": "Al final de la vía de los Curetes, bajando desde la entrada alta.",
        "quando": "Nada más abrir, antes de los grupos, o en la última hora.",
        "tempo": "20-30 minutos",
        "costo": "Incluida en la entrada de Éfeso",
        "lat": 37.93914,
        "lng": 27.34075,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS"
      },
      {
        "nome": "Gran teatro de Éfeso",
        "testo": "El teatro excavado en el monte Panayır, el mayor del Asia Menor romana, con unas 24.000-25.000 plazas. Delante empieza la vía del Puerto, que antes llegaba al mar.",
        "come": "Dentro de Éfeso, junto a la entrada baja.",
        "quando": "Al final de la visita, con la luz de la tarde.",
        "tempo": "20-30 minutos",
        "costo": "Incluido en la entrada de Éfeso",
        "lat": 37.94101,
        "lng": 27.34273,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS"
      },
      {
        "nome": "Museo experiencial de Éfeso",
        "testo": "El museo multimedia frente al gran teatro, que recrea con proyecciones y audioguía la vida de la ciudad antigua. Útil antes o después del recorrido por las ruinas.",
        "come": "Frente al gran teatro, dentro del sitio.",
        "quando": "Al final de la visita, en las horas de calor.",
        "tempo": "30-45 minutos",
        "costo": "Incluido en los 40 € de Éfeso (muze.gov.tr, 2026)",
        "orari": "Todos los días de 8 a 18, taquilla hasta las 17.30 (muze.gov.tr, 2026)",
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS03&DistId=EFS"
      },
      {
        "nome": "Museo de Éfeso",
        "testo": "El museo arqueológico de Selçuk, con las dos estatuas de Artemisa halladas en Éfeso, piezas de las casas en terraza y salas sobre las fuentes y el culto imperial. Ayuda a ordenar lo visto por la mañana.",
        "come": "A pie en el centro de Selçuk.",
        "quando": "Por la tarde, después de Éfeso.",
        "tempo": "1 hora",
        "costo": "10 € para visitantes extranjeros (muze.gov.tr, 2026)",
        "orari": "Todos los días de 8.30 a 17.30, taquilla hasta las 17 (muze.gov.tr, 2026)",
        "lat": 37.94896,
        "lng": 27.36767,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFM01&DistId=EFM"
      },
      {
        "nome": "Basílica de San Juan y castillo de Selçuk",
        "testo": "La basílica que Justiniano mandó construir en el siglo VI sobre la tumba tradicional del apóstol, con el castillo en la colina.",
        "come": "A pie desde Selçuk.",
        "quando": "Por la mañana, o al atardecer.",
        "tempo": "1 hora",
        "costo": "6 € para visitantes extranjeros (muze.gov.tr, 2026)",
        "orari": "Todos los días de 8 a 18, taquilla hasta las 17.30 (muze.gov.tr, 2026)",
        "lat": 37.95292,
        "lng": 27.36697,
        "url": "https://muze.gov.tr/muze-detay?SectionId=STJ01&DistId=STJ"
      },
      {
        "nome": "Mezquita de İsa Bey",
        "testo": "La mezquita de 1375, al pie de la colina de San Juan, con columnas de granito tomadas de las ruinas de Éfeso y una portada de mármol. Es una de las más antiguas de Anatolia occidental.",
        "come": "A pie desde el centro de Selçuk, bajo la basílica.",
        "quando": "Fuera de los horarios de oración.",
        "tempo": "20 minutos",
        "lat": 37.95222,
        "lng": 27.36583
      },
      {
        "nome": "Artemision",
        "testo": "El templo de Artemisa, una de las siete maravillas del mundo antiguo: hoy, en un prado pantanoso, queda en pie una sola columna reconstruida. Desde aquí se ven juntas la basílica y la mezquita de İsa Bey.",
        "come": "A pie desde Selçuk, en la carretera hacia Éfeso.",
        "quando": "Al atardecer.",
        "tempo": "15-20 minutos",
        "lat": 37.94972,
        "lng": 27.36389
      },
      {
        "nome": "Casa de la Virgen María (Meryem Ana)",
        "testo": "El santuario en las colinas sobre Selçuk que la tradición católica, desde el siglo XIX, considera la última casa de la Virgen. Lo han visitado tres papas.",
        "come": "En taxi o en tour desde Selçuk; está a unos 15 minutos de la entrada alta de Éfeso.",
        "quando": "Mañana.",
        "tempo": "45 minutos",
        "lat": 37.91154,
        "lng": 27.33406
      },
      {
        "nome": "Şirince",
        "testo": "Pequeño pueblo de casas de piedra en la colina, con vinos de fruta y tiendas.",
        "come": "Dolmuş o taxi desde Selçuk, unos 7 km.",
        "quando": "Tarde.",
        "tempo": "1-2 horas",
        "lat": 37.94139,
        "lng": 27.43306,
        "consiglio": "Probar los vinos de fruta antes de comprar."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Éfeso a la apertura y Casas de las Terrazas",
          "Almuerzo en Selçuk",
          "Tarde: basílica de San Juan",
          "Noche: Şirince"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Éfeso desde la entrada alta, Casas en terraza, biblioteca de Celso y gran teatro",
          "Tarde en el museo de Éfeso y cena en Selçuk",
          "Día 2: casa de la Virgen por la mañana",
          "Basílica de San Juan, mezquita de İsa Bey y Artemision, y noche en Şirince"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: Priene, Mileto y Dídima en coche, hacia el sur",
          "O media jornada de playa en Kuşadası"
        ]
      }
    ],
    zone: [
      {
        "nome": "Selçuk",
        "perChi": "quien quiere estar cerca de Éfeso",
        "testo": "Pueblo con pensiones familiares, restaurantes y mercado.",
        "fascia": "35-60 €"
      },
      {
        "nome": "Şirince",
        "perChi": "quien quiere ambiente de pueblo",
        "testo": "Casas de piedra y viñedos, más tranquilo pero aislado y con pocos servicios.",
        "fascia": "70-120 €"
      },
      {
        "nome": "Kuşadası",
        "perChi": "quien quiere el mar",
        "testo": "La ciudad costera a unos veinte minutos, con el puerto de cruceros, playas y grandes hoteles; más cara y concurrida que Selçuk.",
        "fascia": "80-190 €"
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Masa rellena, en los puestos del mercado."
      },
      {
        "nome": "Köfte",
        "testo": "Albóndigas a la brasa con pan y ensalada."
      },
      {
        "nome": "Vinos de fruta de Şirince",
        "testo": "De granada, melocotón y mora, en las tiendas del pueblo."
      },
      {
        "nome": "Zeytinyağlı",
        "testo": "Verduras en aceite, entrante frío típico del Egeo."
      }
    ],
    attenzioni: [
      "Entrar a media mañana en temporada alta significa encontrar los cruceros: mejor a la apertura.",
      "Saltarse las Casas en terraza para ahorrar es un error: están entre lo mejor.",
      "Guías en el lugar: acordar precio y duración antes de empezar."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Priene, Mileto y Dídima",
        "distanza": "aproximadamente 1 hora en coche hasta Priene",
        "come": "En coche o con un tour de día desde Selçuk; en transporte público hacen falta varios cambios.",
        "testo": "Tres sitios jonios en fila hacia el sur: Priene en la ladera del monte, con su plano en cuadrícula, el gran teatro de Mileto y el templo de Apolo en Dídima, con columnas enormes."
      },
      {
        "nome": "Kuşadası",
        "distanza": "unos 20 km, 20-30 minutos",
        "come": "En dolmuş o en coche desde Selçuk.",
        "testo": "La ciudad costera más cercana, con el paseo marítimo, la isla de las Palomas y las playas de la península de Dilek. Para media jornada de mar."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuánto cuesta entrar en Éfeso?",
        "risposta": "En 2026 la entrada para visitantes extranjeros cuesta 40 € e incluye el museo experiencial. Las Casas en terraza se pagan aparte, 15 €; el museo de Éfeso en Selçuk cuesta 10 € y la basílica de San Juan 6 €."
      },
      {
        "domanda": "¿Cuánto tiempo hace falta para visitar Éfeso?",
        "risposta": "El sitio se ve en 2-3 horas, más una hora para las Casas en terraza. Con Selçuk, el museo y Şirince hace falta un día completo, dos para añadir la casa de la Virgen sin prisas."
      },
      {
        "domanda": "¿Por qué entrada conviene entrar?",
        "risposta": "Por la entrada alta, en taxi desde Selçuk: se baja por la vía de los Curetes hasta la biblioteca de Celso y el gran teatro, sin subidas."
      },
      {
        "domanda": "¿Mejor dormir en Selçuk o en Kuşadası?",
        "risposta": "Selçuk está a pocos minutos de Éfeso, es más tranquila y barata. Kuşadası tiene mar y más hoteles, pero es más cara y se llena con los cruceros."
      },
      {
        "domanda": "¿Cuándo ir para evitar las multitudes?",
        "risposta": "A la apertura de las 8: desde las 10 llegan los pasajeros de los cruceros de Kuşadası. Primavera y principios de otoño son los mejores meses; en verano a mediodía se superan los 35 °C."
      },
      {
        "domanda": "¿Se puede llegar a Éfeso desde el aeropuerto de Esmirna?",
        "risposta": "Sí: Selçuk está a una hora, en tren regional desde la estación del aeropuerto o con traslado, y desde Selçuk a la entrada de Éfeso bastan unos minutos de taxi."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Las gradas de piedra del antiguo estadio de Éfeso',
    immagine: '/images/viaggi/turchia-itinerario/giorno-10-efeso.jpg',
  },
  {
    slug: 'costa-licia',
    paeseSlug: 'turchia',
    ordine: 5,
    nome: 'Costa licia: Fethiye, Ölüdeniz, Kaş y Kekova',
    tipologia: ['mare', 'trekking', 'road trip'],
    giorniConsigliati: '4-5 días',
    visitataPersonalmente: true,
    introduzione:
      'El tramo de costa entre Fethiye y Antalya, con calas de agua turquesa, tumbas licias excavadas en la roca, el sendero de la Vía Licia y las ruinas sumergidas de Kekova.',
    percheAndarci:
      'Por el mar más bonito de Turquía, las playas de Ölüdeniz y Kaputaş, la arena de Patara, el cañón de Saklıkent y las salidas en barco entre las islas.',
    cosaVedere: [
      'La laguna de Ölüdeniz y el Valle de las Mariposas',
      'El pueblo abandonado de Kayaköy',
      'El cañón de Saklıkent',
      'Las ruinas y la playa de Patara',
      'La playa de Kaputaş',
      'Las ruinas sumergidas de Kekova y el castillo de Kaleköy (Simena)',
    ],
    cosaFare: [
      'Parapente desde el Babadağ sobre Ölüdeniz',
      'Una etapa de la Vía Licia',
      'Kayak o barco sobre la ciudad sumergida de Kekova',
      'Buceo y snorkel en Kaş',
    ],
    doveDormire:
      'Fethiye u Ölüdeniz para la primera base, Kaş para la segunda (la más bonita y animada). Económicas: pensiones de Kaş · gama media: hoteles con vistas al mar · lujo: resorts de Ölüdeniz y Kalkan.',
    doveMangiare: 'Pescado elegido en el mercado de Fethiye y cocinado en los restaurantes de alrededor, gözleme en los pueblos, meze en las tabernas de Kaş.',
    comeArrivare: 'Aeropuertos de Dalaman (para Fethiye) y Antalya (para Kaş y Kekova).',
    comeSpostarsi: 'Coche de alquiler; dolmuş entre las localidades principales; barcos desde el puerto a las islas.',
    periodoMigliore: 'mayo-junio y septiembre-octubre; julio-agosto hace mucho calor y hay mucha gente',
    costi:
      'Excursión en barco con comida, de forma indicativa, 25-45 €; parapente en torno a 100-150 €; Patara y Saklıkent en torno a 5-15 € cada uno (indicativos).',
    erroriDaEvitare: [
      'Recorrer la costa sin coche: entre un pueblo y otro hay dolmuş, pero las mejores calas quedan fuera',
      'Ir en agosto sin reservar: Kaş y Ölüdeniz se llenan',
    ],
    miaEsperienza:
      "Estuve en coche con amigos en la parte final de los dieciséis días en Turquía: Fethiye, Ölüdeniz y Kayaköy, y luego Saklıkent y Patara hasta Kaş y un día en barco a Kekova.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Ölüdeniz y Valle de las Mariposas",
        "testo": "La laguna turquesa, espacio natural protegido, con el Valle de las Mariposas un poco más allá.",
        "come": "Dolmuş desde Fethiye.",
        "quando": "Mañana, antes de que lleguen los bañistas.",
        "tempo": "Medio día",
        "consiglio": "Aquí aterrizan los vuelos en parapente desde el monte Babadağ."
      },
      {
        "nome": "Kayaköy",
        "testo": "Un pueblo griego vaciado con el intercambio de población de 1923, con unas 500 casas de piedra en ruinas en la ladera.",
        "come": "Dolmuş desde Fethiye, unos 8 km.",
        "quando": "Mañana o tarde, con luz baja.",
        "tempo": "1-1,5 horas"
      },
      {
        "nome": "Saklıkent",
        "testo": "Un cañón de unos 300 metros de profundidad donde se camina por el agua fría entre paredes de roca; el tramo a pie solo se abre cuando el nivel del agua lo permite.",
        "come": "En coche desde Fethiye.",
        "quando": "Verano, cuando hace calor.",
        "tempo": "2-3 horas",
        "consiglio": "Alquilar zapatos de agua en el lugar."
      },
      {
        "nome": "Kekova y Simena",
        "testo": "Un tramo de mar protegido con las ruinas sumergidas de Dolichiste, destruida por un terremoto en el siglo II, y el pueblo de Kaleköy, la antigua Simena, accesible solo por mar, bajo un castillo.",
        "come": "Excursión en barco o kayak desde Üçağız o Kaş.",
        "quando": "Mañana, con el agua más clara.",
        "tempo": "Medio día",
        "consiglio": "Sobre la ciudad sumergida está prohibido bañarse y bucear: se mira desde el barco o el kayak."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Fethiye y Ölüdeniz",
          "Día 2: Kayaköy, Saklıkent y Patara",
          "Día 3: Kaş y Kekova"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fethiye",
        "perChi": "quien quiere una base con servicios",
        "testo": "Ciudad con puerto, mercado de pescado y dolmuş para toda la costa."
      },
      {
        "nome": "Ölüdeniz",
        "perChi": "quien quiere playa y parapente",
        "testo": "Turístico, con hoteles y locales hasta tarde."
      },
      {
        "nome": "Kaş",
        "perChi": "quien quiere un pueblo marinero tranquilo",
        "testo": "Cafés y tabernas en el puerto, buceo y excursiones a Kekova."
      }
    ],
    sapori: [
      {
        "nome": "Pescado en el mercado de Fethiye",
        "testo": "Se elige en el mostrador y lo cocinan los restaurantes cercanos."
      },
      {
        "nome": "Gözleme",
        "testo": "Masa fina rellena, en los pueblos."
      },
      {
        "nome": "Meze de Kaş",
        "testo": "Platos fríos de verduras y quesos, en las tabernas del puerto."
      },
      {
        "nome": "Ayran",
        "testo": "Yogur líquido salado."
      }
    ],
    attenzioni: [
      "Recorrer la costa sin coche: los dolmuş existen, pero las mejores calas quedan fuera.",
      "Agosto sin reservar: Kaş y Ölüdeniz se llenan.",
      "Las excursiones en barco vendidas en la calle varían mucho: mirar qué incluye el precio.",
      "Parapente: elegir un operador autorizado y comprobar que el seguro de viaje lo cubra."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Panorámica de Kaş con el puerto, las casas blancas y el mar de la costa licia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-13-costa-licia.jpg',
  },
  {
    slug: 'antalya',
    paeseSlug: 'turchia',
    ordine: 6,
    nome: 'Antalya',
    tipologia: ['città', 'mare', 'archeologia'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La gran ciudad de la costa mediterránea, con el casco antiguo de Kaleiçi alrededor del puerto romano y uno de los mejores museos arqueológicos del país.',
    percheAndarci: 'Para cerrar el viaje cerca del aeropuerto, con Kaleiçi, el museo y las cascadas de Düden; en los alrededores están Perge, Aspendos y Termessos.',
    cosaVedere: ['Kaleiçi y la puerta de Adriano', 'El Museo Arqueológico de Antalya', 'Las cascadas de Düden', 'El teatro de Aspendos y Perge'],
    cosaFare: ['Un baño en Konyaaltı', 'La tarde-noche en el puerto viejo'],
    doveDormire: 'En las casas otomanas restauradas de Kaleiçi.',
    comeArrivare: 'Aeropuerto de Antalya (AYT), con vuelos directos desde Italia en temporada y desde Estambul todo el año.',
    comeSpostarsi: 'Tranvía y taxi en la ciudad; coche para los sitios de los alrededores.',
    periodoMigliore: 'de abril a noviembre',
    costi: 'Museo Arqueológico y Aspendos en torno a 15-20 € cada uno (indicativos).',
    erroriDaEvitare: ['Devolver el coche de alquiler en otra ciudad sin haber comprobado la tasa de solo ida'],
    miaEsperienza:
      "Fue la última etapa de mis dieciséis días en Turquía con amigos: llegué en coche desde Kaş, una noche en Kaleiçi y desde aquí el vuelo de vuelta.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kaleiçi",
        "testo": "El casco antiguo dentro de las murallas, con las casas tradicionales de tejados rojos, la puerta de Adriano, levantada para la visita del emperador en 130, y el puerto antiguo, hoy marina. Por la noche está lleno de restaurantes.",
        "come": "A pie desde el centro moderno.",
        "quando": "Tarde y noche.",
        "tempo": "2 horas"
      },
      {
        "nome": "Museo Arqueológico de Antalya",
        "testo": "Era uno de los museos más importantes de Turquía, con las estatuas romanas de Perge. Cerró en julio de 2025 y se está reconstruyendo: en noviembre de 2026 no se puede visitar.",
        "come": "Cerrado por reconstrucción.",
        "quando": "Consultar en la web oficial la fecha de reapertura.",
        "tempo": "—",
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "Aspendos y Perge",
        "testo": "El teatro de Aspendos, construido en 155, se considera uno de los mejor conservados de la Antigüedad y aún acoge un festival de verano de ópera y ballet. Perge, cerca de Antalya, tiene el estadio, las grandes Termas del Sur y la vía principal con el canal de agua en el centro.",
        "come": "En coche con conductor o en excursión desde Antalya: Perge queda de camino a Aspendos.",
        "quando": "Abiertos todos los días de 8 a 17, taquilla hasta las 16.30 (noviembre de 2026). A primera hora.",
        "tempo": "Medio día para los dos",
        "url": "https://muze.gov.tr/",
        "consiglio": "Aspendos es la parada que no hay que saltarse.",
        "costo": "Precios para visitantes extranjeros en la web oficial"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Perge y Aspendos",
          "Tarde: baño en Konyaaltı",
          "Noche: Kaleiçi y el puerto viejo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Kaleiçi",
        "perChi": "quien quiere la ciudad vieja",
        "testo": "Hoteles en casas otomanas, ruido nocturno de los locales."
      },
      {
        "nome": "Konyaaltı",
        "perChi": "quien quiere playa",
        "testo": "Zona moderna con playa de guijarros y montañas al fondo."
      }
    ],
    sapori: [
      {
        "nome": "Piyaz",
        "testo": "Ensalada de alubias blancas con huevo y tahini, especialidad de Antalya."
      },
      {
        "nome": "Şiş köfte",
        "testo": "Albóndigas a la brasa con pan."
      },
      {
        "nome": "Tahini con melaza",
        "testo": "Desayuno dulce con crema de sésamo y melaza de uva."
      },
      {
        "nome": "Fruta fresca",
        "testo": "Naranjas y granadas del mercado."
      }
    ],
    attenzioni: [
      "Coche de alquiler devuelto en otra ciudad: comprobar la tasa de solo ida.",
      "Hoteles todo incluido lejos del centro: a veces el traslado cuesta tanto como la diferencia.",
      "En verano hace mucho calor: visitar al amanecer."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Vista de Kaleiçi, el casco antiguo de Antalya asomado al mar',
    immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg',
  },
]
