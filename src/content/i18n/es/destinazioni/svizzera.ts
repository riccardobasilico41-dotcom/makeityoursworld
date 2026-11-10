import type { Destinazione } from '@/lib/types'

export const destinazioniSvizzera: Destinazione[] = [
  {
    slug: 'interlaken',
    paeseSlug: 'svizzera',
    ordine: 1,
    nome: "Interlaken y los lagos de Thun y Brienz",
    tipologia: ['laghi', 'base logistica', 'montagna'],
    giorniConsigliati: "1-2 días como base, todo el resto del recorrido gira en torno a ella",
    visitataPersonalmente: true,
    introduzione:
      "Interlaken significa «entre los lagos»: está sobre una lengua de tierra entre el Lago de Thun al oeste y el Lago de Brienz al este, ambos de un turquesa lechoso por los sedimentos glaciares en suspensión. Es el nudo logístico de la región, con varios campings en pocos kilómetros.",
    percheAndarci:
      "Es la base más práctica para una furgoneta en toda la Jungfrau Region: está la estación principal, hay supermercados y alquileres de equipo outdoor, y cualquier otra zona de esta guía se alcanza en el día sin cambiar de alojamiento cada noche.",
    cosaVedere: [
      "El Lago de Thun y el Lago de Brienz, turquesa y lechosos por los sedimentos glaciares",
      "El centro de Interlaken, con el Höheweg, la larga avenida con vista al Jungfrau al fondo",
      "El castillo de Oberhofen, en el Lago de Thun, con el parque botánico asomado al agua",
      "El pueblo de Iseltwald, en el Lago de Brienz, con el embarcadero que se hizo famoso gracias a algunas producciones internacionales",
    ],
    cosaFare: [
      "Un paseo en barco histórico por uno de los dos lagos, con embarcaciones de vapor todavía en servicio",
      "Paseo por el Höheweg al atardecer, cuando el Jungfrau se enciende de rosa",
      "Hacer la compra grande en Coop o Migros en el centro antes de subir a los valles, donde los precios aumentan",
    ],
    doveDormire:
      "En las orillas de los dos lagos, a pocos minutos del centro, hay varios campings preparados para furgonetas: es la zona de la guía con más lugares legales para dormir.",
    doveMangiare:
      "Rösti, fondue y raclette con los quesos de alpe locales son la base de la cocina de la región. Una comida sencilla en un restaurante de gama media rara vez cuesta menos de 25-30 CHF por persona.",
    comeArrivare: "Salida de autopista directa desde Berna (aproximadamente una hora) o desde el Valais por Grimsel-Furka. Sin coche se suele aterrizar en Zúrich: desde la estación bajo la terminal el tren SBB llega a Interlaken Ost en unas 2 horas, con transbordo en Berna y salidas cada media hora; el billete completo en segunda clase cuesta unos 75-80 CHF (unos 80-86 €), mucho menos con las tarifas Supersaver de la app SBB. Desde Ginebra se tarda unas 3 horas. Interlaken tiene dos estaciones: West para el centro y el lago de Thun, Ost para el lago de Brienz y los trenes a Lauterbrunnen y Grindelwald.",
    comeSpostarsi: "A pie en el centro; la furgoneta sirve para llegar a las demás zonas, todas a 20-30 minutos de conducción.",
    periodoMigliore: "de junio a septiembre, con julio-agosto más cálido y concurrido.",
    costi: "Campings 35-50 CHF/noche; paseo en barco desde unos 20-30 CHF por tramo sencillo. Presupuesto diario por persona: bajo 100-140 € (camping o albergue, compra en Coop o Migros, una subida en funicular), medio 220-320 € (hotel de gama media en doble, un restaurante, un teleférico), alto desde 450 €.",
    erroriDaEvitare: [
      "Llegar sin haber reservado, o al menos localizado, un camping para la primera noche",
      "Hacer la compra en los minimercados de los valles, mucho más caros, en lugar de en los supermercados de Interlaken",
      "Subestimar cuánto tiempo llevan las otras zonas: Interlaken es la base, no el destino principal del viaje",
    ],
    miaEsperienza:
      "Interlaken fue la base de salida de nuestro viaje en furgoneta con amigos por los Alpes berneses: desde aquí subimos a Lauterbrunnen, Grindelwald y la Jungfrau, antes de los puertos hacia Zermatt.",
    luoghi: [
      {
        nome: "Harder Kulm",
        testo: "El mirador sobre Interlaken, a 1.322 metros, con vistas a los dos lagos y, en día claro, al Eiger, Mönch y Jungfrau. Arriba hay una plataforma panorámica y un restaurante en un edificio con aire de castillo.",
        come: "Funicular desde la estación Harder Bahn, cerca de Interlaken Ost: unos 10 minutos de subida.",
        quando: "Final de la tarde por la luz sobre los lagos. Solo funciona en temporada: fechas en la web oficial.",
        tempo: "2 horas",
        costo: "Billetes desde 22 CHF (unos 24 €) en la web oficial, tarifa más baja de la temporada 2026.",
        orari: "De temporada, cerrado en invierno; en temporada funciona a diario, también por la tarde para el atardecer.",
        lat: 46.69968,
        lng: 7.85614,
        url: "https://www.jungfrau.ch/en-gb/harder-kulm/",
        consiglio: "Mirar las webcams antes de subir: con nubes bajas la vista desaparece."
      },
      {
        nome: "Höheweg y Höhematte",
        testo: "La avenida principal de Interlaken bordea el Höhematte, un gran prado sin edificar donde aterrizan los parapentes. Desde aquí se ve la Jungfrau al fondo, entre hoteles de la Belle Époque. Es el sitio para un paseo al atardecer sin gastar nada.",
        come: "A pie, 10 minutos desde Interlaken Ost o Interlaken West.",
        quando: "Al atardecer, cuando la Jungfrau se ilumina.",
        tempo: "1 hora",
        costo: "Gratis.",
        orari: "Siempre accesible.",
        lat: 46.68773,
        lng: 7.86085
      },
      {
        nome: "Lago de Brienz y cascadas de Giessbach",
        testo: "El lago más verde y menos turístico, con las cascadas de Giessbach que caen en 14 saltos junto a un hotel histórico. Se llega en barco.",
        come: "Barco desde Interlaken Ost o Brienz hasta el muelle, luego el funicular histórico de Giessbach.",
        quando: "Por la mañana, en primavera cuando las cascadas van llenas.",
        tempo: "media jornada",
        lat: 46.73355,
        lng: 8.02382,
        url: "https://www.giessbach.ch/en/",
        consiglio: "El corto paseo por el bosque del muelle a las cascadas es agradable."
      },
      {
        nome: "Lago de Thun",
        testo: "El lago al oeste de Interlaken, con el castillo de Thun, pueblos en la orilla y el vapor histórico. Spiez tiene un castillo sobre el lago.",
        come: "Barco o tren desde Interlaken West; el barco es mucho más lento que el tren.",
        quando: "Verano.",
        tempo: "media jornada",
        costo: "Barco unos 20-30 CHF (unos 21-32 €) por trayecto; incluido en el Swiss Travel Pass.",
        lat: 46.70559,
        lng: 7.69144,
        url: "https://www.bls.ch/en",
        consiglio: "Tomar el barco hasta Thun y volver en tren, para ver el lago y ahorrar tiempo."
      },
      {
        nome: "Iseltwald",
        testo: "Un pequeño pueblo en el lago de Brienz, en un promontorio con un antiguo castillo, hoy centro de rehabilitación. Famoso por el embarcadero donde se rodó una escena de la serie coreana «Crash Landing on You».",
        come: "En coche o autobús desde Interlaken Ost.",
        quando: "A primera hora, antes de los grupos.",
        tempo: "1-2 horas",
        costo: "Embarcadero de pago, 5 CHF, con torniquete (desde 2023).",
        orari: "Embarcadero accesible todo el día.",
        lat: 46.71046,
        lng: 7.96346,
        consiglio: "El muelle se ve mejor al amanecer."
      },
      {
        nome: "Schynige Platte",
        testo: "Un mirador a 1.967 metros al que sube un tren cremallera histórico con vagones de madera. Arriba hay un jardín botánico alpino, una plataforma panorámica y vistas del Eiger, el Mönch y la Jungfrau por un lado y del lago de Thun por el otro. De aquí sale la travesía a pie hasta First.",
        come: "Tren cremallera desde Wilderswil, a 5 minutos en tren de Interlaken Ost.",
        quando: "Una mañana despejada; el jardín luce más en julio.",
        tempo: "media jornada",
        costo: "68 CHF (unos 73 €) ida y vuelta.",
        orari: "De mediados de junio a finales de octubre.",
        lat: 46.65226,
        lng: 7.91117,
        url: "https://www.jungfrau.ch/en-gb/schynige-platte/"
      },
      {
        nome: "Thun y su castillo",
        testo: "La ciudad al final del lago tiene un centro medieval con las aceras elevadas de la Obere Hauptgasse y el Aare corriendo rápido bajo puentes cubiertos. Arriba está el castillo de cuatro torres, uno de los conjuntos fortificados más antiguos de Europa, hoy museo con vistas a la ciudad y a los Alpes.",
        come: "Tren desde Interlaken West, unos 30 minutos, o barco por el lago.",
        quando: "El sábado por la mañana hay mercado en el centro.",
        tempo: "media jornada",
        orari: "Castillo cerrado de noviembre a enero.",
        lat: 46.75992,
        lng: 7.62972,
        url: "https://schlossthun.ch/en/"
      },
      {
        nome: "Castillo de Oberhofen",
        testo: "Un castillo con un torreón que entra en el agua del lago de Thun, rodeado de un parque con árboles centenarios junto al lago. Dentro hay salas amuebladas desde la Edad Media hasta el siglo XIX. Es la parada más fotogénica del paseo en barco.",
        come: "Barco desde Interlaken West o Thun, o autobús desde Thun.",
        quando: "Verano, a última hora de la tarde por la luz sobre el lago.",
        tempo: "1-2 horas",
        lat: 46.72968,
        lng: 7.66857,
        url: "https://www.schlossoberhofen.ch/"
      },
      {
        nome: "Spiez y su castillo",
        testo: "El castillo de Spiez se alza en un promontorio sobre una bahía con un pequeño puerto y viñedos en pendiente. Se visitan las salas y la torre, y luego se baja al lago a pie entre las viñas.",
        come: "Tren desde Interlaken West, unos 20 minutos, o barco.",
        quando: "De mayo a octubre, cuando el castillo abre.",
        tempo: "2 horas",
        orari: "Del 1 de mayo al 31 de octubre: lunes 14-17, de martes a domingo 10-17; julio y agosto todos los días hasta las 18. Cerrado del 1 de noviembre de 2026 al 30 de abril de 2027.",
        lat: 46.68938,
        lng: 7.68747,
        url: "https://www.schloss-spiez.ch/en/"
      },
      {
        nome: "Cuevas de San Beato (St. Beatus-Höhlen)",
        testo: "Cuevas kársticas con estalactitas, lagunas y cascadas interiores, que se recorren por un sendero iluminado de cerca de un kilómetro. En la entrada hay un pequeño museo de las cuevas. Dentro la temperatura se mantiene entre 8 y 10 grados todo el año.",
        come: "Autobús 21 de Interlaken hacia Thun, parada Beatushöhlen, o barco por el lago de Thun.",
        quando: "Los días de lluvia, cuando las cumbres están tapadas.",
        tempo: "1 hora y media",
        costo: "Adultos 20 CHF (unos 21 €), niños de 6 a 16 años 12 CHF.",
        orari: "Abiertas todo el año.",
        lat: 46.68467,
        lng: 7.78231,
        url: "https://www.beatushoehlen.swiss/en/",
        consiglio: "Hace falta chaqueta incluso en agosto."
      },
      {
        nome: "Brienz y el tren del Rothorn",
        testo: "Brienz es el pueblo de los tallistas de madera, con casas de madera oscura junto al lago. Desde la estación sale el tren cremallera de vapor del Brienzer Rothorn, que sube a 2.244 metros con vistas al lago y a los Alpes berneses.",
        come: "Tren o barco desde Interlaken Ost hasta Brienz; el cremallera sale frente a la estación.",
        quando: "Desde junio, cuando los trenes llegan a la cima.",
        tempo: "media jornada",
        orari: "Temporada 2027 desde el 8 de mayo hasta la estación intermedia de Planalp; desde el 5 de junio ocho trenes al día hasta la cima. Sin servicio en invierno.",
        lat: 46.75508,
        lng: 8.03889,
        url: "https://brienz-rothorn-bahn.ch/en/"
      },
      {
        nome: "Museo al aire libre de Ballenberg",
        testo: "Más de cien casas rurales desmontadas en toda Suiza y reconstruidas en un gran parque en el bosque, con animales de granja, huertos y artesanos trabajando. En un día cuenta cómo se vivía en cada cantón.",
        come: "Tren a Brienz y luego autobús hasta una de las dos entradas.",
        quando: "De abril a octubre; con niños es la mejor excursión.",
        tempo: "una jornada",
        orari: "Cerrado en invierno; reabre a diario desde el 15 de abril de 2027.",
        lat: 46.7487,
        lng: 8.0804,
        url: "https://www.ballenberg.ch/en/",
        consiglio: "El parque es grande: conviene elegir antes las zonas que se quieren ver."
      },
      {
        nome: "Unterseen, el casco antiguo",
        testo: "Al otro lado del Aare, a cinco minutos del centro, Unterseen conserva la plaza del Stadthaus, la iglesia con su campanario medieval y casas de madera del siglo XVII. Es la parte más tranquila y antigua de Interlaken.",
        come: "A pie desde Interlaken West cruzando el puente sobre el Aare.",
        quando: "Por la mañana o al atardecer, para un paseo corto.",
        tempo: "45 minutos",
        costo: "Gratis.",
        orari: "Siempre accesible.",
        lat: 46.68692,
        lng: 7.8494
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Harder Kulm por la mañana",
          "Barco por el lago de Brienz hasta Giessbach",
          "Parada en Iseltwald a la vuelta",
          "Atardecer en el Höhematte y cena en Interlaken"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Harder Kulm, lago de Brienz, Giessbach e Iseltwald",
          "Día 2: lago de Thun en barco con paradas en Oberhofen y Spiez, vuelta en tren; tarde en Unterseen"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Harder Kulm, Höheweg y Unterseen",
          "Día 2: Schynige Platte por la mañana, tarde en el lago de Brienz con Giessbach e Iseltwald",
          "Día 3: lago de Thun con el castillo de Thun y Oberhofen, o Brienz con el Rothorn o el Ballenberg; si llueve, las cuevas de San Beato"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        testo: "Trenes a todos los valles. Precios altos y centro muy turístico, pero cómodo sin coche.",
        perChi: "para una base cómoda",
        fascia: "150-300 €"
      },
      {
        nome: "Brienz e Iseltwald",
        testo: "En el lago de Brienz, con menos gente; los destinos de los valles requieren coche o tren.",
        perChi: "para el silencio",
        fascia: "130-260 €"
      },
      {
        nome: "Thun y Spiez",
        testo: "En el lago de Thun, con casco antiguo, restaurantes y trenes directos a Berna e Interlaken. Los valles de la Jungfrau quedan a 45-60 minutos.",
        perChi: "quien quiere una ciudad de verdad y precios algo más bajos",
        fascia: "120-240 €"
      },
      {
        nome: "Campings en los dos lagos",
        testo: "Entre Unterseen, Bönigen y las orillas de los lagos hay varios campings a pocos minutos del centro, la opción más barata de la zona. En temporada baja los campings TCS tienen ofertas desde unos 25 CHF la noche para dos.",
        perChi: "quien viaja en furgoneta o con tienda",
        fascia: "parcela 35-50 CHF (unos 37-53 €)"
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patata rallada y frita, a menudo con huevo o queso, base de la cocina suizo-alemana."
      },
      {
        nome: "Fondue de queso",
        testo: "Gruyère y Emmental fundidos, que se comen con pan de una olla común."
      },
      {
        nome: "Chocolate suizo",
        testo: "De las tiendas de la ciudad y de los supermercados Coop y Migros, lo más barato."
      }
    ],
    attenzioni: [
      "Los precios son muy altos: comer en los supermercados Coop y Migros reduce el gasto.",
      "Los billetes de barco están incluidos en el Swiss Travel Pass: comprobarlo antes de pagar.",
      "Para conducir hace falta la viñeta de autopista, que se compra en la frontera o en línea."
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Interlaken?",
        risposta: "Dos días bastan para los dos lagos y el Harder Kulm. Con tres o cuatro días Interlaken se convierte en la base para Lauterbrunnen, Grindelwald y el Jungfraujoch."
      },
      {
        domanda: "¿Mejor dormir en Interlaken, Grindelwald o Lauterbrunnen?",
        risposta: "Interlaken es la más cómoda sin coche, con trenes a todos los valles y más oferta de alojamiento. Grindelwald y Lauterbrunnen son más bonitos por la noche, pero cuestan más y alargan los trayectos a los lagos."
      },
      {
        domanda: "¿Compensa el Jungfrau Travel Pass?",
        risposta: "Cuesta desde 165 CHF (unos 177 €) por 3 días, barcos incluidos. Compensa si se suben al menos dos o tres remontes, por ejemplo First, Schynige Platte y Harder Kulm; para el Jungfraujoch solo da un descuento."
      },
      {
        domanda: "¿Hay que reservar el Jungfraujoch?",
        risposta: "No es obligatorio fuera de los días punta del verano, pero en línea sale más barato. La reserva de asiento cuesta 10 CHF y garantiza la franja horaria."
      },
      {
        domanda: "¿Qué se puede hacer en Interlaken en invierno?",
        risposta: "Mucho cierra hasta la primavera: el castillo de Spiez, el Ballenberg y el tren del Rothorn. Las cuevas de San Beato abren todo el año y los trenes a los valles de la Jungfrau funcionan también en invierno."
      },
      {
        domanda: "¿Se paga por el embarcadero de Iseltwald?",
        risposta: "Sí, desde 2023 hay un torniquete con entrada de 5 CHF."
      }
    ],
    gite: [
      {
        nome: "Berna",
        distanza: "cerca de 1 hora en tren",
        come: "Tren directo o con un transbordo desde Interlaken Ost o West, varios por hora.",
        testo: "La capital tiene un centro medieval Patrimonio de la UNESCO con seis kilómetros de soportales, la Zytglogge y el foso de los osos junto al Aare. Se recorre a pie en un día."
      },
      {
        nome: "Lucerna",
        distanza: "cerca de 2 horas en tren",
        come: "Tren panorámico Luzern-Interlaken Express desde Interlaken Ost, por el paso del Brünig.",
        testo: "El puente de la Capilla de madera, el paseo del lago y el León moribundo. El viaje en tren, entre lagos y por el Brünig, ya justifica la excursión."
      },
      {
        nome: "Garganta del Aare (Aareschlucht)",
        distanza: "cerca de 35 minutos en tren",
        come: "Tren directo de Interlaken Ost a Meiringen y luego a pie o en trenecito hasta la entrada.",
        testo: "Una garganta de 1,4 km entre paredes de roca de hasta 200 metros, recorrida por pasarelas sobre el río. Se combina con Meiringen, el pueblo de los merengues y de Sherlock Holmes."
      },
      {
        nome: "Oeschinensee (Kandersteg)",
        distanza: "cerca de 1 hora en tren",
        come: "Tren a Kandersteg con transbordo en Spiez, luego telecabina y 20 minutos a pie.",
        testo: "Un lago turquesa cerrado por paredes de roca verticales, de los más bonitos de los Alpes berneses. En verano se camina por el sendero alto que lo rodea."
      }
    ],
    esperienzeSlugs: ['giro-battello-laghi-thun-brienz'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "Interlaken vista desde arriba, con el río Aare de color esmeralda atravesando la ciudad entre las montañas, en la llanura entre los lagos de Thun y Brienz",
    immagine: '/images/svizzera/interlaken.jpg',
  },
  {
    slug: 'lauterbrunnen',
    paeseSlug: 'svizzera',
    ordine: 2,
    nome: "Lauterbrunnen y el valle de las cascadas",
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: "1 día completo",
    visitataPersonalmente: true,
    introduzione:
      "Una garganta glaciar de paredes verticales, con setenta y dos cascadas censadas en sus doce kilómetros. La más famosa es la Staubbach, 300 metros de salto casi en el centro del pueblo: inspiró a Goethe y, según la tradición local, el valle de Rivendel de «El Señor de los Anillos».",
    percheAndarci:
      "Es el valle más espectacular de la región y el punto de partida para Mürren, Wengen y Gimmelwald, pueblos sin coches a los que solo se llega en teleférico o cremallera. Y están las Trümmelbachfälle, un fenómeno geológico que no tiene igual en ningún otro sitio.",
    cosaVedere: [
      "La cascada Staubbach, que cae 300 metros casi en el centro del pueblo",
      "Las Trümmelbachfälle, diez cascadas glaciales que se ven desde galerías y ascensores excavados en la montaña (véase la ficha de experiencia dedicada)",
      "Los pueblos sin coches de Wengen y Gimmelwald, a los que solo se llega en teleférico o cremallera",
    ],
    cosaFare: [
      "Recorrer el fondo del valle a pie o en bici entre las cascadas, por un trazado casi llano",
      "Subir en teleférico o cremallera hacia Mürren o Wengen para la vista desde arriba sobre la garganta",
      "Visitar las Trümmelbachfälle, abiertas de principios de abril a principios de noviembre",
    ],
    doveDormire:
      "Campings equipados en el fondo del valle. **En este valle la acampada libre está prohibida**, con multas de hasta 200 CHF, y la prohibición se hace respetar.",
    doveMangiare: "Restaurantes del fondo del valle con cocina suizo-alemana de montaña; precios en la media alta de la región.",
    comeArrivare: "Desde Interlaken, 20 minutos en coche o en tren. El tren BOB sale de Interlaken Ost varias veces por hora y tarda unos 20 minutos; desde la estación de Lauterbrunnen salen el cremallera a Wengen y el teleférico a Grütschalp y Mürren, y el autobús postal sube por el valle hasta Stechelberg con parada en las cascadas del Trümmelbach. Desde el aeropuerto de Zúrich se tarda unas 2 horas y media con transbordos en Berna e Interlaken.",
    comeSpostarsi: "El fondo del valle a pie o en bici; para Mürren, Wengen y Gimmelwald hacen falta teleférico o cremallera, porque el coche no llega.",
    periodoMigliore: "de junio a septiembre, con las cascadas más caudalosas a principios de verano por el deshielo.",
    costi: "Trümmelbachfälle 18 CHF entrada adultos, 8 CHF niños de 6 a 15 años. Presupuesto diario por persona: bajo 100-140 € (camping, compra en el supermercado, cascadas y senderos gratis), medio 220-320 € (hotel en doble, restaurante, un teleférico), alto desde 450 € con el Schilthorn o el Jungfraujoch.",
    erroriDaEvitare: [
      "Montar mesa y sillas fuera de la furgoneta en un aparcamiento no autorizado: la policía local controla precisamente eso, incluso donde dormir dentro del vehículo se tolera",
      "Llegar a las Trümmelbachfälle sin saber que están cerradas de principios de noviembre a principios de abril",
      "No prever calzado de lluvia: las galerías de las cascadas son húmedas y resbaladizas",
    ],
    miaEsperienza:
      "El valle de Lauterbrunnen fue una de las etapas de nuestro viaje en furgoneta con amigos, justo después de Interlaken.",
    luoghi: [
      {
        nome: "Cascada de Staubbach",
        testo: "Una cascada de unos 297 metros que cae de una pared vertical sobre el pueblo, a menudo convertida en niebla por el viento.",
        come: "A pie desde la estación de Lauterbrunnen, pocos minutos; se contempla desde el pueblo.",
        quando: "Por la mañana, cuando el sol entra en el valle. Primavera para el caudal máximo.",
        tempo: "45 minutos",
        costo: "Gratis.",
        orari: "Visible desde el pueblo a cualquier hora.",
        lat: 46.58978,
        lng: 7.90543,
        consiglio: "Llevar chaqueta impermeable: el viento trae las salpicaduras."
      },
      {
        nome: "Cascadas de Trümmelbach",
        testo: "Diez cascadas glaciares que corren dentro de la montaña, vistas desde pasarelas y túneles con un ascensor en túnel. Abiertas de primavera a otoño; prohibidas a menores de 4 años y a perros.",
        come: "En autobús postal desde Lauterbrunnen hacia Stechelberg, o a pie por el valle.",
        quando: "Abiertas más o menos de principios de abril a principios de noviembre, de 9 a 17 (julio y agosto 8.30-18).",
        tempo: "1-1 hora y media",
        costo: "Adultos 18 CHF (unos 19 €), niños de 6 a 15 años 8 CHF; sin tarifas de grupo.",
        orari: "De principios de abril a principios de noviembre, todos los días 9-17; julio y agosto 8.30-18. Cerradas en invierno.",
        lat: 46.57001,
        lng: 7.91321,
        url: "https://www.truemmelbachfaelle.ch/",
        consiglio: "Llevar zapatos con suela adherente: las pasarelas están mojadas."
      },
      {
        nome: "Wengen",
        testo: "Un pueblo sin coches en una terraza alta, al que se llega en tren de cremallera. Da acceso a Kleine Scheidegg y a la línea del Jungfraujoch.",
        come: "Tren de cremallera desde Lauterbrunnen.",
        quando: "Todo el año.",
        tempo: "2 horas",
        orari: "Trenes desde Lauterbrunnen todo el año, unos 11 minutos.",
        lat: 46.60544,
        lng: 7.92172,
        consiglio: "Salir de aquí para la caminata a Männlichen, con vistas al grupo del Eiger."
      },
      {
        nome: "El valle a pie hasta Stechelberg",
        testo: "El sendero llano del fondo del valle que sigue el torrente de Lauterbrunnen hacia Stechelberg, entre prados y paredes de roca por las que bajan decenas de cascadas. Pasa cerca del Trümmelbach y de la salida del teleférico a Mürren. Es la caminata más fácil de la región y muestra por qué el valle es famoso.",
        come: "Se sale a pie del pueblo; para volver está el autobús postal por la carretera del valle.",
        quando: "De mayo a octubre; tras días de lluvia las cascadas llevan más agua.",
        tempo: "2-3 horas a pie",
        costo: "Gratis.",
        orari: "Sendero siempre accesible.",
        lat: 46.54502,
        lng: 7.9022,
        consiglio: "Ir a pie y volver en autobús: el sendero sube suavemente hacia Stechelberg."
      },
      {
        nome: "Cascada del Mürrenbach",
        testo: "Una de las cascadas más altas de Suiza, unos 417 metros en varios saltos, que cae desde la terraza de Mürren hacia Stechelberg. Desde el fondo del valle se ve entera; la vía ferrata Mürren-Gimmelwald la cruza con un puente colgante.",
        come: "Desde el sendero del valle cerca de Stechelberg, a pie o en autobús postal hasta la Schilthornbahn.",
        quando: "De mayo a julio, con el deshielo.",
        tempo: "30 minutos de parada",
        costo: "Gratis.",
        orari: "Siempre visible.",
        lat: 46.55542,
        lng: 7.89666
      },
      {
        nome: "Grütschalp y el sendero a Mürren",
        testo: "Un teleférico sube de Lauterbrunnen a Grütschalp, desde donde un trenecito corre en llano hasta Mürren. El sendero junto a las vías es uno de los paseos más panorámicos del valle: todo el camino se tienen delante el Eiger, el Mönch y la Jungfrau.",
        come: "Teleférico desde la estación de Lauterbrunnen, frente a los andenes del BOB; luego a pie o en tren hasta Mürren.",
        quando: "De junio a octubre, por la mañana.",
        tempo: "1 hora y media a pie",
        lat: 46.59656,
        lng: 7.89071,
        consiglio: "Subir en teleférico, caminar hasta Mürren y bajar por Gimmelwald y Stechelberg para hacer una vuelta."
      },
      {
        nome: "Isenfluh y Sulwald",
        testo: "Un pueblecito en una terraza sobre la entrada del valle, con un pequeño teleférico que sube a Sulwald. Desde allí se baja en patinete o se camina hacia la Lobhornhütte, con mucha menos gente que en Mürren.",
        come: "Carretera estrecha desde Lauterbrunnen o autobús postal, luego el teleférico Isenfluh-Sulwald.",
        quando: "Verano y principios de otoño.",
        tempo: "media jornada",
        orari: "Teleférico en servicio todo el año salvo la revisión (2-6 de noviembre de 2026); patinetes hasta el 1 de noviembre de 2026.",
        lat: 46.62011,
        lng: 7.89617,
        url: "https://isenfluh.ch/"
      },
      {
        nome: "Obersteinberg y el valle alto",
        testo: "Pasado Stechelberg el valle se convierte en reserva natural, sin carreteras, cerrada por los glaciares del Breithorn y el Tschingelhorn. El sendero sube hasta una vieja posada de montaña, en Obersteinberg, con vistas a las cascadas que bajan de los glaciares.",
        come: "A pie desde Stechelberg, final de línea del autobús postal.",
        quando: "De junio a septiembre.",
        tempo: "una jornada, unas 5-6 horas ida y vuelta",
        costo: "Gratis.",
        lat: 46.51854,
        lng: 7.88542,
        consiglio: "Para excursionistas en forma: el desnivel supera los 800 metros."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Staubbach por la mañana",
          "Paseo por el valle hasta el Trümmelbach",
          "Cascada del Mürrenbach y autobús de vuelta",
          "Tarde en Wengen en cremallera"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Staubbach, Trümmelbach y paseo por el valle hasta Stechelberg",
          "Día 2: teleférico a Grütschalp, sendero hasta Mürren, bajada por Gimmelwald; tarde en Wengen"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Staubbach, Trümmelbach y Mürrenbach",
          "Día 2: Grütschalp, Mürren y el Schilthorn",
          "Día 3: Wengen y Kleine Scheidegg, o la excursión a Obersteinberg; con tiempo dudoso, Isenfluh y Sulwald"
        ]
      }
    ],
    zone: [
      {
        nome: "Lauterbrunnen",
        testo: "Campings y alojamientos en el fondo del valle, casi sin coches de noche; más frío y poca vida nocturna.",
        perChi: "para estar en el valle",
        fascia: "120-260 €"
      },
      {
        nome: "Wengen y Mürren",
        testo: "Sin coches, con vistas desde arriba, pero hay que llegar en cremallera o teleférico con el equipaje.",
        perChi: "para pueblos de la meseta",
        fascia: "160-320 €"
      },
      {
        nome: "Interlaken",
        testo: "A 20 minutos en tren, con mucho más alojamiento y restaurantes. Se pierde el valle por la noche, pero se gana en conexiones con los lagos y Grindelwald.",
        perChi: "quien quiere más oferta y precios algo más bajos",
        fascia: "150-300 €"
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patatas fritas, con queso o salchicha."
      },
      {
        nome: "Älplermagronen",
        testo: "Pasta, patatas, queso y cebolla frita, plato de refugio alpino."
      },
      {
        nome: "Quesos de alpe",
        testo: "Se compran en pequeñas tiendas y a los productores."
      }
    ],
    attenzioni: [
      "Las vacas pastan en los senderos: no acercarse a las madres con terneros.",
      "El tiempo cambia rápido: niebla y lluvia pueden ocultar las cascadas altas."
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Lauterbrunnen?",
        risposta: "Un día para las cascadas del fondo del valle y Wengen. Con dos o tres días se añaden Mürren, el Schilthorn y una excursión de verdad como Obersteinberg."
      },
      {
        domanda: "¿Se puede dormir en furgoneta en el valle de Lauterbrunnen?",
        risposta: "No: la acampada libre y la pernocta fuera de las áreas autorizadas están prohibidas, con multas de hasta 200 CHF. Se duerme en los campings del valle."
      },
      {
        domanda: "¿Las cascadas del Trümmelbach abren en invierno?",
        risposta: "No, abren de principios de abril a principios de noviembre. El Staubbach se ve todo el año, aunque en invierno lleva poca agua."
      },
      {
        domanda: "¿Cuándo están más bonitas las cascadas?",
        risposta: "Entre mayo y julio, con el deshielo, y después de unos días de lluvia. A finales de verano el caudal baja."
      },
      {
        domanda: "¿Hace falta coche en Lauterbrunnen?",
        risposta: "No. El fondo del valle se recorre a pie y en autobús postal, y a Wengen y Mürren solo se llega en tren o teleférico porque no admiten coches."
      }
    ],
    gite: [
      {
        nome: "Mürren y el Schilthorn",
        distanza: "unos 20 minutos entre teleférico y tren",
        come: "Teleférico a Grütschalp y tren hasta Mürren; para el Schilthorn, teleférico desde Mürren o Stechelberg.",
        testo: "El pueblo sin coches con la vista más abierta de la Jungfrau y, arriba, el Piz Gloria a 2.970 metros con su restaurante giratorio."
      },
      {
        nome: "Kleine Scheidegg y Jungfraujoch",
        distanza: "unos 45 minutos hasta la Kleine Scheidegg",
        come: "Cremallera desde Lauterbrunnen por Wengen; desde allí el tren de la Jungfrau sigue hasta la cima.",
        testo: "La subida clásica a la Jungfrau desde el lado de Lauterbrunnen. Aunque sea solo hasta la Kleine Scheidegg, es un día de vistas y senderos fáciles."
      },
      {
        nome: "Interlaken y los lagos",
        distanza: "unos 20 minutos en tren",
        come: "Tren BOB directo hasta Interlaken Ost.",
        testo: "Harder Kulm, barco por el lago de Brienz e Iseltwald: el día adecuado cuando las nubes tapan las cumbres."
      }
    ],
    esperienzeSlugs: ['trummelbachfalle'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "La cascada Staubbach cayendo de la pared de roca sobre los chalés de Lauterbrunnen, entre nubes bajas, en tonos casi monocromos",
    immagine: '/images/svizzera/lauterbrunnen.jpg',
  },
  {
    slug: 'grindelwald',
    paeseSlug: 'svizzera',
    ordine: 3,
    nome: "Grindelwald y el First",
    tipologia: ['montagna', 'panorama', 'famiglia'],
    giorniConsigliati: "1 día",
    visitataPersonalmente: true,
    introduzione:
      "A los pies de la cara norte del Eiger, Grindelwald es el pueblo más «de postal» de la región. Desde aquí sale el teleférico al First, donde el Cliff Walk regala uno de los panoramas más fotografiados de los Alpes Berneses sin ninguna caminata exigente.",
    percheAndarci:
      "Es la forma más sencilla de acercarse al Eiger sin un desnivel serio, y el First sirve tanto para quien camina hasta el Bachalpsee como para quien solo quiere el panorama desde el teleférico.",
    cosaVedere: [
      "La cara norte del Eiger, visible desde todo el pueblo",
      "El First Cliff Walk, una pasarela metálica en voladizo sobre la pared rocosa",
      "El Bachalpsee, un pequeño lago alpino que refleja el Eiger, el Mönch y el Jungfrau en los días sin viento",
    ],
    cosaFare: [
      "Subir en teleférico al First y recorrer el Cliff Walk, incluido en el billete y repetible cuantas veces se quiera",
      "Caminar hasta el Bachalpsee, 2-3 horas ida y vuelta con desnivel moderado",
      "Probar la tirolina First Flyer, actividad extra de pago en el lugar",
    ],
    doveDormire: "Campings en la zona, más económicos que los de Interlaken pero con menos oferta.",
    doveMangiare: "Restaurantes de montaña con vista al Eiger, precios alineados con el resto de la región.",
    comeArrivare: "Desde Interlaken, 20 minutos en coche o en tren. El tren BOB directo desde Interlaken Ost tarda unos 35 minutos y para tanto en Grindelwald Terminal (Eiger Express y telecabina del Männlichen) como en la estación del pueblo, a pocos minutos del teleférico de First. Desde el aeropuerto de Zúrich se llega en unas 2 horas y media-3 horas con transbordos en Berna e Interlaken. En coche hay un aparcamiento cubierto en el Terminal.",
    comeSpostarsi: "El pueblo se recorre a pie; para el First y el Bachalpsee hace falta el teleférico.",
    periodoMigliore: "de junio a septiembre; el Bachalpsee suele seguir helado hasta bien entrado junio.",
    costi: "Teleférico First 72-76 CHF i/v según la temporada; Cliff Walk incluido. Presupuesto diario por persona: bajo 110-150 € (albergue o camping, compra en el supermercado, un remonte), medio 230-330 € (hotel de gama media en doble, restaurante, First o Männlichen), alto desde 450 €, Jungfraujoch incluido.",
    erroriDaEvitare: [
      "Subir al First creyendo que el Bachalpsee está «a la vuelta de la esquina»: la caminata requiere 2-3 horas ida y vuelta",
      "Subestimar el viento en la cima, que en el Cliff Walk puede ser fuerte incluso con el cielo despejado en el valle",
    ],
    miaEsperienza:
      "Grindelwald y el First fueron una de las etapas de nuestro viaje en furgoneta con amigos por la Jungfrau Region.",
    luoghi: [
      {
        nome: "First y el Cliff Walk",
        testo: "Desde Grindelwald el teleférico sube a First, a 2.166 metros, con vistas al Eiger, Mönch y Jungfrau. El Cliff Walk es una pasarela metálica de 45 metros colgada sobre el vacío, a lo largo de la pared.",
        come: "Teleférico desde Grindelwald, unos 25 minutos con paradas en Bort y Schreckfeld. El Cliff Walk está incluido en la entrada.",
        quando: "Por la mañana, con el cielo más despejado. Cierres y horarios varían según la temporada.",
        tempo: "2-3 horas",
        costo: "72-76 CHF (unos 77-81 €) ida y vuelta según la temporada; Cliff Walk incluido.",
        lat: 46.66033,
        lng: 8.05301,
        url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/",
        consiglio: "La primera cabina de la mañana tiene menos cola; los glaciares se ven mejor antes del mediodía."
      },
      {
        nome: "Bachalpsee",
        testo: "Un lago de altura que refleja el Wetterhorn y el Schreckhorn. Desde First el sendero es fácil, de subida suave.",
        come: "A pie desde la estación de First por el sendero señalizado.",
        quando: "Por la mañana, cuando el agua está quieta y refleja las montañas.",
        tempo: "2 horas ida y vuelta",
        costo: "Gratis (hace falta el billete del teleférico a First).",
        orari: "Sendero transitable de junio a octubre, cuando se ha ido la nieve.",
        lat: 46.66958,
        lng: 8.02095,
        consiglio: "Llevar una capa de abrigo: sopla viento incluso en julio."
      },
      {
        nome: "Eiger Express y Eigergletscher",
        testo: "La telecabina inaugurada en 2020 sube en unos 15 minutos desde Grindelwald Terminal hasta la estación de Eigergletscher, bajo la cara norte del Eiger. Allí se toma el tren al Jungfraujoch o se baja a pie por el Eiger Trail.",
        come: "Tren BOB desde Interlaken Ost hasta Grindelwald Terminal, donde también hay aparcamiento cubierto.",
        quando: "En los primeros viajes de la mañana, antes de que se formen nubes en la pared.",
        tempo: "15 minutos de subida, luego depende del destino",
        costo: "Incluida en el billete al Jungfraujoch, que en línea parte de 100,60 CHF (unos 108 €, tarifa más baja).",
        lat: 46.62448,
        lng: 8.02028,
        url: "https://www.jungfrau.ch/en-gb/"
      },
      {
        nome: "Männlichen y el sendero panorámico",
        testo: "La cresta entre Grindelwald y Wengen, a la que se sube en telecabina desde Grindelwald Terminal. Desde la estación se sube en pocos minutos al mirador en forma de corona del Royal Walk, y luego sale el sendero panorámico hacia la Kleine Scheidegg, casi todo en bajada y frente al Eiger, el Mönch y la Jungfrau.",
        come: "Telecabina Männlichen desde Grindelwald Terminal; desde la Kleine Scheidegg se vuelve en tren a Grindelwald o a Wengen.",
        quando: "Verano, por la mañana; horarios y cierres de temporada de la telecabina en la web oficial.",
        tempo: "medio día",
        orari: "Verano hasta principios de noviembre; cerrada por mantenimiento desde el 6 de noviembre de 2026, reabre el 12 de diciembre de 2026 para el invierno.",
        lat: 46.61814,
        lng: 7.93804,
        url: "https://maennlichen.ch/en/",
        consiglio: "Hacer el sendero en dirección a la Kleine Scheidegg: se camina siempre con las tres cumbres delante."
      },
      {
        nome: "Kleine Scheidegg",
        testo: "El collado a 2.061 metros entre Grindelwald y Wengen, al pie del Eiger, el Mönch y la Jungfrau. Es el nudo de los trenes cremallera y la llegada del sendero panorámico desde el Männlichen; en verano los prados se llenan de excursionistas.",
        come: "Tren cremallera WAB desde Grindelwald, unos 30 minutos, o desde Wengen.",
        quando: "Verano; en invierno queda en medio de las pistas.",
        tempo: "1-2 horas, más si se camina",
        lat: 46.58525,
        lng: 7.96131,
        consiglio: "Bajar a pie hasta Alpiglen o Wengernalp y tomar allí el tren."
      },
      {
        nome: "Eiger Trail",
        testo: "El sendero que baja de Eigergletscher a Alpiglen justo bajo la cara norte del Eiger, la pared más famosa de la historia del alpinismo. Se camina sobre pedreras y prados con el valle de Grindelwald a los pies.",
        come: "Eiger Express hasta Eigergletscher y luego a pie; desde Alpiglen se vuelve a Grindelwald en tren.",
        quando: "De julio a septiembre, cuando el sendero está libre de nieve.",
        tempo: "unas 2 horas y media",
        costo: "El sendero es gratis; se pagan los remontes.",
        lat: 46.56846,
        lng: 7.9882,
        consiglio: "Hacerlo de bajada: de subida cansa mucho más."
      },
      {
        nome: "Glaciar inferior (Unterer Gletscher)",
        testo: "El glaciar que baja al valle sobre Grindelwald, con una profunda garganta excavada por el río. Se llega a pie desde el pueblo.",
        come: "A pie desde el pueblo o con el teleférico de Pfingstegg.",
        quando: "Verano.",
        tempo: "2-3 horas",
        orari: "La garganta cierra en invierno; abierta de primavera a otoño.",
        lat: 46.611,
        lng: 8.05029,
        consiglio: "No pisar el hielo sin guía: hay grietas ocultas."
      },
      {
        nome: "Pfingstegg",
        testo: "Un pequeño teleférico sube desde el pueblo a una terraza a 1.391 metros sobre el glaciar inferior, con tobogán de verano, tirolina y restaurante. Desde aquí salen senderos fáciles hacia el glaciar y la Bäregg.",
        come: "A pie desde el centro hasta la estación del valle, unos 15 minutos, o autobús hasta la parada Pfingsteggbahn.",
        quando: "Por la tarde, con niños.",
        tempo: "2-3 horas",
        orari: "Temporada de verano 2026 del 25 de abril al 25 de octubre; cerrado en invierno.",
        lat: 46.61752,
        lng: 8.05686,
        url: "https://www.pfingstegg.ch/en/"
      },
      {
        nome: "First Flyer, Glider, Mountain Cart y Trottibike",
        testo: "Las actividades de bajada de First: una tirolina larga sobre los prados, un ala delta remolcada con forma de águila, carritos de tres ruedas y patinetes de montaña para bajar al valle por pistas de tierra. Se hacen entre las estaciones intermedias del teleférico, Schreckfeld y Bort.",
        come: "Teleférico de First; billetes en la estación del valle.",
        quando: "Verano, con tiempo seco.",
        tempo: "media jornada",
        costo: "First Adventure Package desde 60 CHF (unos 64 €) para dos actividades, subidas en teleférico ilimitadas.",
        lat: 46.64672,
        lng: 8.05177,
        url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/",
        consiglio: "Los fines de semana de julio y agosto hay cola en el Flyer: hacerlo el primero."
      },
      {
        nome: "Grosse Scheidegg",
        testo: "El collado a 1.962 metros hacia Meiringen, cerrado al tráfico privado, con el Wetterhorn que parece caer sobre la carretera. Se llega en autobús en verano o a pie desde First, por un sendero casi llano con vistas continuas del valle.",
        come: "Autobús postal de verano desde Grindelwald, o a pie desde First en una hora y media.",
        quando: "De junio a septiembre, cuando funciona el autobús.",
        tempo: "media jornada",
        costo: "Gratis a pie; el autobús se paga aparte.",
        lat: 46.65588,
        lng: 8.10187
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Teleférico a First en el primer viaje",
          "Cliff Walk y caminata al Bachalpsee",
          "Bajada en First Flyer o Mountain Cart",
          "Tarde en la garganta del glaciar inferior",
          "Cena en el pueblo"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: First, Cliff Walk, Bachalpsee y actividades de bajada",
          "Día 2: telecabina al Männlichen, sendero panorámico hasta la Kleine Scheidegg, vuelta en tren; tarde en Pfingstegg"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: First, Cliff Walk y Bachalpsee, luego a pie hasta la Grosse Scheidegg",
          "Día 2: Männlichen y Kleine Scheidegg, bajada a pie hacia Alpiglen",
          "Día 3: Eiger Express hasta Eigergletscher y el Eiger Trail; o el Jungfraujoch en los primeros trenes"
        ]
      }
    ],
    zone: [
      {
        nome: "Grindelwald",
        testo: "El pueblo está al pie de la cara norte del Eiger, con servicios y acceso directo a los teleféricos.",
        perChi: "para hacer excursiones",
        fascia: "130-280 €"
      },
      {
        nome: "Interlaken",
        testo: "Tren directo desde Interlaken Ost, con más oferta de alojamiento.",
        perChi: "para ahorrar",
        fascia: "150-300 €"
      },
      {
        nome: "Albergues y pensiones de Grindelwald",
        testo: "En el pueblo hay albergues y pequeñas pensiones con habitaciones dobles sencillas, a menudo con cocina compartida. Para julio y agosto hay que reservar pronto.",
        perChi: "quien viaja con presupuesto ajustado",
        fascia: "80-150 €"
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patatas fritas, con huevo o queso, en restaurantes de alpe."
      },
      {
        nome: "Fondue",
        testo: "Queso fundido en olla, en refugios y restaurantes del pueblo."
      },
      {
        nome: "Merengue con nata",
        testo: "Un postre de merengues y nata de montaña."
      }
    ],
    attenzioni: [
      "Con nubes bajas la vista desde First desaparece: mirar las webcams antes de comprar la entrada.",
      "Las pasarelas del Cliff Walk no son aptas para quien tiene vértigo.",
      "Los senderos se cubren de nieve desde octubre; comprobar su estado."
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Grindelwald?",
        risposta: "Un día basta para First, el Cliff Walk y el Bachalpsee. Con dos o tres días se añaden el Männlichen, la Kleine Scheidegg, el Eiger Trail o el Jungfraujoch."
      },
      {
        domanda: "¿Mejor Grindelwald o Lauterbrunnen como base?",
        risposta: "Grindelwald tiene más servicios, la vista del Eiger y acceso directo a First y al Eiger Express. Lauterbrunnen es más pequeño y cómodo para Mürren, Wengen y las cascadas."
      },
      {
        domanda: "¿Cuánto cuesta subir a First?",
        risposta: "La ida y vuelta cuesta 72-76 CHF (unos 77-81 €) según la temporada, con el Cliff Walk incluido. Con el Swiss Travel Pass o el abono medio precio se paga menos."
      },
      {
        domanda: "¿Cuánto se tarda a pie de First al Bachalpsee?",
        risposta: "Cerca de una hora de ida y otra de vuelta, por un sendero fácil con poca pendiente. A principios de verano el lago puede seguir helado."
      },
      {
        domanda: "¿El Cliff Walk es apto para niños?",
        risposta: "Sí, la pasarela tiene barandillas altas y está incluida en el billete. Con viento fuerte impresiona."
      }
    ],
    gite: [
      {
        nome: "Jungfraujoch",
        distanza: "unos 45 minutos entre telecabina y tren",
        come: "Eiger Express desde Grindelwald Terminal hasta Eigergletscher y luego el tren de la Jungfrau por dentro de la montaña.",
        testo: "La estación más alta de Europa, a 3.454 metros, con el glaciar Aletsch y el palacio de hielo. Conviene salir en los primeros viajes y dejar un día de margen por el tiempo."
      },
      {
        nome: "Wengen y Lauterbrunnen",
        distanza: "cerca de 1 hora y cuarto en tren",
        come: "Cremallera de Grindelwald a la Kleine Scheidegg y bajada hacia Wengen y Lauterbrunnen.",
        testo: "La vuelta clásica de la Jungfrau: se sube por un valle y se baja por el otro, con Wengen sin coches y las cascadas de Lauterbrunnen. Desde Lauterbrunnen se vuelve por Interlaken."
      },
      {
        nome: "Interlaken y los lagos",
        distanza: "unos 35 minutos en tren",
        come: "Tren BOB directo de Grindelwald a Interlaken Ost.",
        testo: "Para un día más tranquilo o con mal tiempo en altura: barco por el lago de Brienz, Harder Kulm y el centro de Interlaken."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "La cara norte del Eiger nevada dominando el pueblo de Grindelwald, con chalés y prados verdes a sus pies",
    immagine: '/images/svizzera/grindelwald.jpg',
  },
  {
    slug: 'jungfraujoch',
    paeseSlug: 'svizzera',
    ordine: 4,
    nome: "Jungfraujoch, el Top of Europe",
    tipologia: ['ghiacciaio', 'panorama', 'esperienza unica'],
    giorniConsigliati: "1 día entero",
    visitataPersonalmente: true,
    introduzione:
      "La estación ferroviaria más alta de Europa, a 3.454 metros. Llega hasta ella un tren de cremallera excavado casi por completo en la roca del Eiger y del Mönch entre 1896 y 1912. En la cima está el glaciar del Aletsch, el más largo de los Alpes.",
    percheAndarci:
      "Es el único punto de esta guía donde se está por encima de los 3.400 metros sin una excursión exigente, frente al glaciar más largo de los Alpes. Es también el billete más caro del viaje: hay que tratarlo como la jornada principal.",
    cosaVedere: [
      "El glaciar del Aletsch, el más extenso de los Alpes, patrimonio de la UNESCO",
      "El palacio de hielo excavado en el permafrost",
      "Las terrazas panorámicas, desde las que en los días despejados se ve hasta la Selva Negra",
    ],
    cosaFare: [
      "Subir con el tren de cremallera desde Interlaken Ost, saliendo temprano para tener más probabilidades de cielo despejado",
      "Caminar por el primer tramo del glaciar del Aletsch, donde está señalizado y es seguro",
      "Visitar el palacio de hielo, incluido en el billete",
    ],
    doveDormire: "No se pernocta en altura: es una excursión de un día desde Interlaken o desde los valles cercanos.",
    doveMangiare: "Restaurantes de autoservicio en la estación, precios de zona de alta montaña aislada.",
    comeArrivare: "Tren de cremallera desde Interlaken Ost, con cambios en Grindelwald o Lauterbrunnen y en Kleine Scheidegg, unas 2 h 20 en total.",
    comeSpostarsi: "A pie entre las terrazas y las galerías panorámicas en altura.",
    periodoMigliore: "todo el año, con horarios y frecuencias distintos entre temporada alta y baja; normalmente las mañanas son más despejadas que las tardes.",
    costi: "Billete i/v desde Interlaken Ost unos 224-261 CHF según la temporada; Good Morning Ticket con descuento para quien sale antes de las 8.",
    erroriDaEvitare: [
      "Salir a primera hora de la tarde: normalmente las nubes se forman después del mediodía y tapan la vista",
      "No reservar online: en taquilla los billetes suelen costar más",
      "Subestimar el frío en altura incluso en pleno verano: hacen falta cortavientos y capas incluso en julio",
    ],
    miaEsperienza:
      "El Jungfraujoch fue una de las etapas de nuestro viaje en furgoneta con amigos: la furgoneta se queda abajo y a la cima solo se sube en tren.",
    luoghi: [
      {
        nome: "Terraza de la Esfinge",
        testo: "El observatorio y la terraza a 3.571 metros, a los que se llega en ascensor desde la estación. Desde aquí se ven el Aletsch, el Mönch y, en días claros, la Selva Negra y los Vosgos.",
        come: "Ascensor rápido desde la estación (Top of Europe) a la plataforma.",
        quando: "Por la mañana, con menos nubes. Cerrada con viento fuerte o tormenta.",
        tempo: "45 minutos",
        costo: "Billete caro, con precios que cambian según la fecha y la temporada; descuentos con Swiss Travel Pass o Half Fare Card. Asiento reservado 10 CHF; el Good Morning Ticket del primer tren tiene un 15% de descuento del 1 de mayo al 31 de octubre de 2026. Precios y ofertas en la web oficial.",
        url: "https://www.jungfrau.ch/",
        consiglio: "Mirar la webcam antes de salir: en días cubiertos no se ve nada."
      },
      {
        nome: "Palacio de hielo",
        testo: "Un túnel excavado en el glaciar, con esculturas de hielo, a unos 3.450 metros. Suelo resbaladizo y temperatura bajo cero todo el año.",
        come: "Incluido en la entrada, junto a la estación.",
        quando: "Todo el año.",
        tempo: "30 minutos",
        consiglio: "Llevar zapatos antideslizantes y guantes."
      },
      {
        nome: "Glaciar Aletsch y paseo por la Meseta",
        testo: "El glaciar más largo de los Alpes, más de 20 kilómetros, y el sendero de nieve pisada hacia el refugio Mönchsjoch. La caminata es fácil pero a gran altitud.",
        come: "Se sale de la estación y se sigue el sendero señalizado por la meseta.",
        quando: "Por la mañana; la nieve está más firme y el tiempo es mejor.",
        tempo: "1 hora",
        consiglio: "El aire es fino: caminar despacio y beber agua."
      },
      {
        nome: "Parada Eismeer",
        testo: "En la subida el tren va en túnel por dentro del Eiger y del Mönch y para en la estación Eismeer, a unos 3.160 metros. Desde ventanales excavados en la roca se mira el glaciar de abajo. La parada dura unos 5 minutos, pero es cuando se entiende la hazaña del ferrocarril, terminado en 1912.",
        come: "Parada breve incluida en el viaje, solo en la subida.",
        quando: "Todo el año.",
        tempo: "pocos minutos",
        consiglio: "Sentarse de modo que se pueda bajar enseguida: los ventanales son pocos y se llenan."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Salida de Interlaken Ost antes de las 8",
          "Cambio en Kleine Scheidegg",
          "Terraza de la Esfinge y palacio de hielo",
          "Paseo por la meseta",
          "Regreso a primera hora de la tarde"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        perChi: "para salir temprano",
        testo: "Base cómoda para el primer tren; alojamiento para todos los presupuestos."
      },
      {
        nome: "Grindelwald",
        perChi: "para el tren directo",
        testo: "Desde Grindelwald, el tren de cremallera hasta Kleine Scheidegg implica menos cambios."
      }
    ],
    sapori: [
      {
        nome: "Chocolate Lindt",
        testo: "Hay una tienda arriba, cara y turística, pero es un souvenir típico."
      },
      {
        nome: "Rösti de montaña",
        testo: "En el autoservicio de la estación."
      },
      {
        nome: "Té caliente y sopa",
        testo: "Para entrar en calor entre las dos salidas al hielo."
      }
    ],
    attenzioni: [
      "El mal de altura puede afectar incluso a 3.400 metros: subir con calma, beber y parar si hay dolor de cabeza.",
      "El billete es de los más caros del país: comparar las tarifas del Good Morning Ticket.",
      "No guardar documentos en bolsillos exteriores: con viento y guantes es incómodo buscarlos."
    ],
    esperienzeSlugs: ['jungfraujoch-top-of-europe'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "El glaciar del Aletsch y el Jungfraufirn vistos desde la terraza panorámica de la Sphinx en el Jungfraujoch",
    immagine: '/images/svizzera/jungfraujoch.jpg',
  },
  {
    slug: 'muerren-schilthorn',
    paeseSlug: 'svizzera',
    ordine: 5,
    nome: "Mürren y el Schilthorn",
    tipologia: ['montagna', 'panorama', 'trekking'],
    giorniConsigliati: "1 día, más media jornada para quien hace la vía ferrata",
    visitataPersonalmente: true,
    introduzione:
      "Mürren es uno de los pueblos sin coches del valle de Lauterbrunnen, con una de las vistas más abiertas de la región sobre el Eiger, el Mönch y el Jungfrau. Sobre el pueblo, el teleférico sube al Schilthorn, donde el restaurante giratorio Piz Gloria, hecho famoso por una película de James Bond, mira a 360 grados sobre más de doscientas cumbres.",
    percheAndarci:
      "Tiene el mismo panorama que Grindelwald sobre la cadena Eiger-Mönch-Jungfrau, pero desde el lado opuesto del valle y en un pueblo sin coches. Y de aquí parte la vía ferrata más conocida de la región.",
    cosaVedere: [
      "El panorama sobre la cadena Eiger-Mönch-Jungfrau desde el pueblo de Mürren, sin paredes que bloqueen la vista",
      "El restaurante giratorio Piz Gloria en la cima del Schilthorn, escenario de la película «007 al servicio secreto de Su Majestad»",
      "El pueblo de Gimmelwald, todavía más pequeño y menos turístico, al que se llega a pie por la vía ferrata o en teleférico",
    ],
    cosaFare: [
      "Subir en teleférico al Schilthorn para el panorama de 360 grados",
      "Recorrer la vía ferrata Mürren-Gimmelwald, unos 2,2 km con un puente colgante de 90 metros (véase la ficha de experiencia dedicada)",
      "Caminar de Mürren a Gimmelwald por el sendero normal, alternativa sin equipo de ferrata",
    ],
    doveDormire: "No hay ningún camping dentro de Mürren (pueblo sin coches): se duerme en los campings del fondo del valle en Lauterbrunnen o Stechelberg.",
    doveMangiare: "Restaurantes de pueblo con cocina de montaña; el Piz Gloria en la cima del Schilthorn tiene un menú turístico con precios de terraza panorámica.",
    comeArrivare: "Desde Lauterbrunnen, teleférico desde Stechelberg o cremallera vía Grütschalp.",
    comeSpostarsi: "Mürren se recorre a pie; para el Schilthorn y para Gimmelwald hacen falta teleférico o vía ferrata.",
    periodoMigliore: "de junio a octubre; la vía ferrata está abierta solo en esta ventana.",
    costi: "Teleférico Schilthorn unos 115 CHF i/v desde Stechelberg, 91 CHF desde Mürren.",
    erroriDaEvitare: [
      "Afrontar la vía ferrata sin kit homologado o sin haber hecho antes un recorrido más sencillo",
      "Dejar la furgoneta en Lauterbrunnen pensando en conducir hasta Mürren: al pueblo no se llega en coche",
    ],
    confronti: [
      {
        titolo: "Subir al Schilthorn desde Stechelberg o desde Mürren",
        introduzione:
          "El teleférico al Schilthorn tiene dos puntos de partida, con una diferencia de precio y de tiempo que conviene conocer antes de elegir.",
        opzioni: [
          {
            nome: "Desde Stechelberg (fondo del valle)",
            sintesi: "El recorrido completo, desde el fondo del valle de Lauterbrunnen hasta la cima, con un solo billete en varios tramos.",
            costo: "unos 115 CHF i/v",
            durata: "32 minutos solo de ida",
            pro: ["Un único billete para todo el desnivel", "No requiere coger antes la cremallera a Mürren"],
            contro: ["Más caro que el tramo desde Mürren", "La furgoneta tiene que llegar hasta Stechelberg, último tramo del valle"],
            perChi: "Quien llega en furgoneta hasta el interior del valle y no quiere cambiar de medio varias veces.",
          },
          {
            nome: "Desde Mürren",
            sintesi: "Primero se llega a Mürren en cremallera desde Lauterbrunnen vía Grütschalp, luego se coge el teleférico más corto al Schilthorn.",
            costo: "unos 91 CHF i/v desde Mürren",
            durata: "tramo más corto que desde Stechelberg",
            pro: ["Tramo final más económico", "En cualquier caso se pasa por Mürren, útil para quien quiere ver también el pueblo"],
            contro: ["Hace falta también el billete de la cremallera hasta Mürren, así que se ahorra menos de lo que parece"],
            perChi: "Quien quiere en cualquier caso parar en Mürren antes o después de la subida al Schilthorn.",
          },
        ],
        raccomandazione:
          "Para quien tiene furgoneta y quiere ver también el pueblo de Mürren, el tramo desde Stechelberg con parada intermedia sigue siendo el más sencillo de organizar en una sola jornada.",
      },
    ],
    miaEsperienza:
      "Mürren y el Schilthorn fueron una de las zonas de nuestro viaje en furgoneta con amigos por la Jungfrau Region.",
    luoghi: [
      {
        nome: "Schilthorn y Piz Gloria",
        testo: "La cima a 2.970 metros con el restaurante giratorio que aparece en una película de James Bond de 1969. Desde la terraza se ven Eiger, Mönch y Jungfrau.",
        come: "Teleférico desde Stechelberg (valle) o desde Mürren, en varios tramos.",
        quando: "Por la mañana, con la mejor luz. Cerrado con viento fuerte.",
        tempo: "2-3 horas",
        costo: "Ida y vuelta 115 CHF desde Stechelberg y 91,40 CHF desde Mürren, válidos hasta el 12/12/2026 (web oficial); grandes descuentos con el Swiss Travel Pass.",
        url: "https://www.schilthorn.ch/",
        consiglio: "Desde el valle la subida es más larga pero da vistas de las paredes."
      },
      {
        nome: "Mürren",
        testo: "Un pueblo sin coches en la meseta, frente a la cara norte del Eiger. Un lugar para la vista, no para monumentos.",
        come: "Teleférico desde Stechelberg o tren desde Grütschalp.",
        quando: "Todo el año.",
        tempo: "2 horas",
        consiglio: "Caminar hasta Allmendhubel para ver las montañas."
      },
      {
        nome: "Gimmelwald",
        testo: "Un diminuto pueblo agrícola a media pared, sin coches, al que se llega en teleférico o a pie desde Mürren. Pajares de madera y vacas pastando. Es el rincón más tranquilo del valle, con la misma vista que Mürren y muy pocas camas.",
        come: "Sendero en bajada desde Mürren, o el teleférico de Stechelberg, que para aquí.",
        quando: "Verano y otoño.",
        tempo: "1 hora y media",
        consiglio: "Es un pueblo vivo: respetar las propiedades y no entrar en los establos."
      },
      {
        nome: "Birg y el Thrill Walk",
        testo: "La estación intermedia del teleférico del Schilthorn, colgada sobre el valle. De aquí sale el Thrill Walk, un sendero equipado que baja por las paredes verticales de la roca. Se ve de cerca la cara norte del Eiger, con el vacío bajo los pies.",
        come: "Se baja en Birg con el mismo billete del teleférico del Schilthorn.",
        quando: "Cuando el teleférico funciona; con hielo la pasarela puede cerrar.",
        tempo: "30-45 minutos",
        costo: "Incluido en el billete del teleférico.",
        consiglio: "Quien tenga vértigo puede quedarse en la terraza de la estación, que tiene la misma vista."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Teleférico al Schilthorn por la mañana",
          "Desayuno en Piz Gloria",
          "Bajada a Mürren",
          "Caminata a Gimmelwald",
          "Regreso a Stechelberg"
        ]
      }
    ],
    zone: [
      {
        nome: "Mürren",
        perChi: "para vistas y silencio",
        testo: "En la meseta, sin coches; pocos servicios y precios altos."
      },
      {
        nome: "Lauterbrunnen",
        perChi: "para ahorrar",
        testo: "Fondo del valle, más servicios y más barato, con teleférico a Mürren."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patatas fritas con huevo o queso, en los restaurantes de Mürren."
      },
      {
        nome: "Berner Platte",
        testo: "Plato bernés de carnes variadas y chucrut, en las tabernas."
      },
      {
        nome: "Fondue",
        testo: "Queso fundido, en los restaurantes del pueblo."
      }
    ],
    attenzioni: [
      "Con nubes bajas el Schilthorn no se ve: mirar las webcams.",
      "Por la tarde el teleférico para pronto: anotar la última salida.",
      "Gimmelwald es un pueblo residencial: no hacer ruido por la noche."
    ],
    esperienzeSlugs: ['via-ferrata-muerren-gimmelwald'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "Una cabina del teleférico del Schilthorn suspendida entre Mürren y Birg, sobre las paredes rocosas del valle de Lauterbrunnen",
    immagine: '/images/svizzera/muerren-schilthorn.jpg',
  },
  {
    slug: 'grimsel-furka',
    paeseSlug: 'svizzera',
    ordine: 6,
    nome: "Puerto de Grimsel y puerto de Furka",
    tipologia: ['roadtrip', 'panorama', 'passi alpini'],
    giorniConsigliati: "1 día de traslado",
    visitataPersonalmente: true,
    introduzione:
      "La carretera que lleva de los Alpes Berneses al Valais a través de dos de los puertos más espectaculares de Suiza: el puerto de Grimsel (2.164 m), entre embalses de color esmeralda, y el puerto de Furka (2.429 m), famoso por la persecución en Aston Martin de «Goldfinger» y asomado a la lengua terminal del glaciar del Ródano.",
    percheAndarci:
      "Es la jornada de conducción pura de esta guía: aquí la furgoneta sirve para atravesar los Alpes, además de para visitarlos. Y conecta la Jungfrau Region con Zermatt sin volver atrás hacia la llanura.",
    cosaVedere: [
      "Los embalses del Grimsel, verde esmeralda entre la roca gris",
      "El glaciar del Ródano, visible desde el puerto de Furka: está en fuerte retroceso y en verano está en parte cubierto con lonas reflectantes para frenar su deshielo",
      "El Hotel Belvédère, abandonado en el puerto de Furka, donde se rodó la persecución en coche de «Goldfinger»",
    ],
    cosaFare: [
      "Recorrer la carretera con paradas fotográficas en los miradores señalizados",
      "Una breve caminata hasta la lengua del glaciar del Ródano, donde se permite el acceso",
    ],
    doveDormire: "No hay parada prevista: es una jornada de traslado entre la Jungfrau Region y el Valais.",
    doveMangiare: "Pocos refugios y puntos de restauración en los puertos, con precios de alta montaña aislada: conviene llevar provisiones en la furgoneta.",
    comeArrivare: "Desde Interlaken o desde la zona de Lauterbrunnen-Mürren, unas 2-3 horas de conducción con paradas.",
    comeSpostarsi: "Solo en coche o furgoneta; no existe un enlace público directo a lo largo de todo el trazado.",
    periodoMigliore: "de junio a octubre; las fechas de apertura cambian cada año según la nieve que quede.",
    costi: "Sin peaje en la carretera.",
    erroriDaEvitare: [
      "Programar el traslado sin comprobar antes que los dos puertos estén abiertos, sobre todo a principios de junio o a finales de octubre",
      "No saber que el Furka tiene una alternativa en tren lanzadera (Furka Autoverlad) cuando el puerto está cerrado a la circulación ordinaria",
    ],
    miaEsperienza:
      "Los puertos del Grimsel y del Furka fueron nuestro traslado en furgoneta con amigos desde la Jungfrau Region hacia el Valais, camino de Zermatt.",
    luoghi: [
      {
        nome: "Puerto del Grimsel",
        testo: "Un puerto a 2.164 metros entre el cantón de Berna y el Valais, en un paisaje de embalses, presas y granito pulido por el hielo. La carretera tiene curvas y miradores.",
        come: "En coche desde Meiringen hacia Gletsch. Normalmente abierta de junio a octubre.",
        quando: "Por la mañana: menos tráfico y mejor luz. Comprobar la apertura en primavera y otoño.",
        tempo: "2 horas con paradas",
        consiglio: "Parar en la presa de Räterichsboden y el lago del Grimsel."
      },
      {
        nome: "Glaciar del Ródano",
        testo: "El nacimiento del Ródano, que baja del glaciar frente al hotel Belvédère. En verano se puede visitar una gruta de hielo excavada en el glaciar.",
        come: "Desde el aparcamiento de Gletsch, a pocos minutos a pie del Belvédère.",
        quando: "Verano.",
        tempo: "1 hora",
        consiglio: "El glaciar ha retrocedido mucho: los carteles muestran su posición en distintos años."
      },
      {
        nome: "Puerto de la Furka",
        testo: "Un puerto a 2.429 metros, con curvas empinadas y vistas al Ródano. El puerto fue escenario de una película de James Bond (Goldfinger, 1964).",
        come: "En coche desde Gletsch, subiendo por las curvas.",
        quando: "Verano.",
        tempo: "1 hora",
        consiglio: "La carretera tiene tramos estrechos: ceder el paso a quien sube."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Meiringen",
          "Puerto del Grimsel",
          "Gletsch y glaciar del Ródano",
          "Puerto de la Furka",
          "Andermatt o regreso por el Susten"
        ]
      }
    ],
    zone: [
      {
        nome: "Meiringen",
        perChi: "para quien llega desde Berna",
        testo: "Ciudad al pie del Grimsel, con hoteles para todos los presupuestos."
      },
      {
        nome: "Andermatt",
        perChi: "para seguir hacia el Tesino",
        testo: "Pueblo alpino en la Furka, cómodo para seguir hacia el Gotardo."
      }
    ],
    sapori: [
      {
        nome: "Älplermagronen",
        testo: "Pasta, patatas y queso, en los refugios."
      },
      {
        nome: "Merengue de Meiringen",
        testo: "El postre que, según la tradición, nació en el pueblo, con nata."
      },
      {
        nome: "Bergkäse",
        testo: "Queso de alpe."
      }
    ],
    attenzioni: [
      "Los puertos cierran de octubre-noviembre a junio: comprobar la apertura en sitios oficiales.",
      "El mal tiempo y el hielo pueden cerrar el puerto durante el día.",
      "Combustible: las gasolineras son escasas en altura, repostar en el valle."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "El valle del puerto de Grimsel con los embalses entre las rocas graníticas y las cumbres todavía nevadas",
    immagine: '/images/svizzera/grimsel-furka.jpg',
  },
  {
    slug: 'zermatt',
    paeseSlug: 'svizzera',
    ordine: 7,
    nome: "Zermatt y el Cervino",
    tipologia: ['montagna', 'panorama', 'iconico'],
    giorniConsigliati: "1-2 días",
    visitataPersonalmente: true,
    introduzione:
      "El punto más al sur de esta guía, y el único donde la furgoneta no entra: Zermatt está cerrada al tráfico privado desde 1961. A cambio está el Cervino (Matterhorn), 4.478 metros de pirámide de roca casi perfecta, visible desde el centro del pueblo.",
    percheAndarci:
      "El Cervino es una de las montañas más reconocibles del mundo. Zermatt es la zona más cara y más lejana de esta guía, pero tiene miradores (el Gornergrat antes que ninguno) que en el resto del recorrido no tienen equivalente.",
    cosaVedere: [
      "El Cervino (Matterhorn), visible desde el centro del pueblo en cada día despejado",
      "El Gornergrat, al que se llega por el ferrocarril de cremallera al aire libre más alto de Europa",
      "El casco antiguo de Zermatt, sin tráfico de automóviles, con los tradicionales graneros de madera sobre pilares de piedra",
    ],
    cosaFare: [
      "Subir al Gornergrat en tren para la vista frontal del Cervino",
      "Pasear por el centro de Zermatt, libre de coches",
      "Para quien tiene tiempo, uno de los muchos teleféricos panorámicos menores de los alrededores del pueblo",
    ],
    doveDormire: "Dentro de Zermatt no se duerme en furgoneta, porque la ciudad está cerrada al tráfico privado: se duerme en la furgoneta en Täsch o se vuelve hacia las otras zonas.",
    doveMangiare: "Restaurantes de pueblo turístico, entre los más caros de la guía; conviene alternarlos con comidas preparadas en la furgoneta en Täsch.",
    comeArrivare: "La furgoneta se deja en el aparcamiento cubierto de Täsch, 5 km antes de Zermatt; desde allí sale un tren lanzadera cada 20 minutos. El tren lanzadera desde Täsch tarda unos 12 minutos. En tren desde el aeropuerto de Zúrich se llega en unas 3 horas y 40 minutos con transbordo en Visp, desde Interlaken en unas 2 horas y media por Spiez y Visp, y desde el aeropuerto de Ginebra en unas 4 horas; el último tramo, desde Visp, es en la línea Matterhorn Gotthard Bahn. La estación de Zermatt está en el centro y los hoteles suelen mandar taxis eléctricos a recoger el equipaje.",
    comeSpostarsi: "A pie por el pueblo; para el Gornergrat y las demás cotas hacen falta el ferrocarril de cremallera o los teleféricos.",
    periodoMigliore: "de junio a septiembre; el Cervino sigue siendo en cualquier caso visible (cuando el cielo está despejado) todo el año.",
    costi: "Aparcamiento de Täsch desde 17 CHF/día; Gornergrat aparte, no incluido en el aparcamiento. Presupuesto diario por persona: bajo 120-160 € (albergue o alojamiento en Täsch, compra en el supermercado, Sunnegga o Schwarzsee), medio 280-400 € (hotel en doble en Zermatt, restaurante, Gornergrat), alto desde 550 €.",
    erroriDaEvitare: [
      "Intentar entrar en Zermatt en furgoneta o en coche: la prohibición existe y se controla",
      "No tener en cuenta el tiempo de conducción para llegar: más de dos horas desde Interlaken incluso pasando por Grimsel-Furka",
      "Dar por hecho que el Cervino esté libre de nubes: se forma las suyas propias incluso cuando alrededor el cielo está limpio",
    ],
    miaEsperienza:
      "Zermatt fue la última etapa de nuestro viaje en furgoneta con amigos, llegando por los puertos del Grimsel y del Furka: la furgoneta se deja en Täsch y el último tramo se hace en tren.",
    luoghi: [
      {
        nome: "Gornergrat",
        testo: "El tren de cremallera sube hasta 3.089 metros. Desde la terraza se ven el Cervino, el Monte Rosa y el glaciar del Gorner.",
        come: "Tren cremallera desde la estación de la Gornergrat Bahn en Zermatt; en verano las salidas son frecuentes.",
        quando: "Por la mañana, con el cielo más despejado.",
        tempo: "Media jornada",
        costo: "Ida y vuelta 132 CHF de mayo a octubre de 2026 y 102 CHF de noviembre de 2026 a abril de 2027; mitad de precio con Swiss Travel Pass o Half Fare Card.",
        lat: 45.98331,
        lng: 7.78463,
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Bajar en Rotenboden o Riffelberg para caminar un tramo."
      },
      {
        nome: "Pueblo de Zermatt",
        testo: "El centro sin coches, con casas de madera oscura, tiendas y hoteles. El pequeño cementerio junto a la iglesia recuerda a los alpinistas muertos en el Cervino.",
        come: "A pie desde la estación.",
        quando: "Todo el año.",
        tempo: "1-2 horas",
        costo: "Gratis.",
        orari: "Siempre accesible.",
        lat: 46.02457,
        lng: 7.74813,
        consiglio: "El museo del Cervino cuenta la historia de la primera ascensión en 1865."
      },
      {
        nome: "Matterhorn Glacier Paradise",
        testo: "La estación a 3.820 metros, bajo la cumbre del Pequeño Cervino (3.883 m): uno de los puntos más altos de Europa a los que se llega en teleférico. En el glaciar hay excavada una gruta de hielo.",
        come: "Teleférico desde Zermatt con cambio en Furi y Trockener Steg.",
        quando: "A primera hora para tener el cielo más limpio.",
        tempo: "Media jornada",
        costo: "Ida y vuelta 104 CHF (unos 111 €) de noviembre de 2026 a abril de 2027, 138 CHF (unos 148 €) de mayo a octubre de 2027.",
        lat: 45.93836,
        lng: 7.72934,
        url: "https://www.matterhornparadise.ch/",
        consiglio: "Llevar gafas de sol y una capa de abrigo: a 3.800 metros hace frío."
      },
      {
        nome: "Sendero de los cinco lagos",
        testo: "Una caminata de Blauherd hacia Sunnegga junto a cinco lagos alpinos (Stellisee, Grindjisee, Grünsee, Moosjisee y Leisee) que reflejan el Cervino. Una de las fotos clásicas.",
        come: "Funicular a Sunnegga y telecabina a Blauherd, luego a pie, más de bajada que de subida.",
        quando: "Verano; los lagos reflejan mejor por la mañana.",
        tempo: "3-4 horas",
        costo: "Billete combinado Zermatt-Blauherd y Sunnegga-Zermatt 52 CHF (unos 56 €) en verano.",
        orari: "Sendero transitable de finales de junio a principios de octubre, según la nieve.",
        lat: 46.01344,
        lng: 7.80038,
        url: "https://www.matterhornparadise.ch/en/information/tickets-prices/sightseeing-tickets",
        consiglio: "El Stellisee está muy concurrido: llegar temprano."
      },
      {
        nome: "Riffelsee",
        testo: "El pequeño lago bajo la estación de Rotenboden, a 2.757 metros, donde el Cervino se refleja entero las mañanas sin viento. Es la foto más clásica de Zermatt y está a pocos minutos a pie del tren.",
        come: "Tren del Gornergrat hasta Rotenboden y luego 10 minutos a pie en bajada.",
        quando: "A primera hora, cuando el agua está quieta.",
        tempo: "1 hora",
        costo: "Incluido en el billete del Gornergrat.",
        orari: "El lago suele estar sin hielo de julio a octubre.",
        lat: 45.98336,
        lng: 7.76205,
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Seguir a pie hasta Riffelberg y tomar allí el tren."
      },
      {
        nome: "Sunnegga y Rothorn",
        testo: "Un funicular subterráneo sube en pocos minutos a Sunnegga, una terraza soleada con el lago Leisee y un parque infantil; desde allí telecabina y teleférico siguen hasta el Rothorn, a 3.103 metros. Es el mirador más de frente a la cara este del Cervino.",
        come: "Funicular Sunnegga Express desde la estación del valle junto al río, luego Blauherd y Rothorn.",
        quando: "Por la mañana para ver el Cervino con luz; Sunnegga también al atardecer.",
        tempo: "media jornada",
        costo: "Sunnegga ida y vuelta 26 CHF en invierno y 36 CHF (unos 39 €) en verano; Rothorn 70 CHF en invierno y 96 CHF (unos 103 €) en verano.",
        lat: 46.01717,
        lng: 7.76976,
        url: "https://www.matterhornparadise.ch/en/experience/peaks/rothorn",
        consiglio: "En el Leisee uno se puede bañar en verano: es de los pocos lagos alpinos aptos para niños."
      },
      {
        nome: "Schwarzsee",
        testo: "Un lago oscuro a 2.583 metros con una capilla blanca en la orilla, justo al pie de la arista del Hörnli, la vía normal al Cervino. Desde aquí se ve la montaña de lado, casi al alcance de la mano.",
        come: "Teleférico desde Zermatt con transbordo en Furi.",
        quando: "Verano; se puede bajar a pie a Zermatt pasando por Stafelalp.",
        tempo: "2-3 horas",
        costo: "Ida y vuelta 53 CHF en invierno y 70 CHF (unos 75 €) en verano.",
        lat: 45.99077,
        lng: 7.70682,
        url: "https://www.matterhornparadise.ch/"
      },
      {
        nome: "Matterhorn Museum - Zermatlantis",
        testo: "Un museo bajo la plaza de la iglesia, construido como un pueblo enterrado, que cuenta la primera ascensión al Cervino en 1865 y la tragedia del descenso. También se ve la cuerda rota de la cordada de Whymper.",
        come: "A pie desde la estación, 5 minutos, junto a la iglesia.",
        quando: "Las tardes de mal tiempo.",
        tempo: "1 hora",
        costo: "Adultos 12 CHF (unos 13 €), jóvenes de 10 a 16 años 7 CHF, niños gratis.",
        orari: "Abre por la tarde: desde el 20 de noviembre de 2026 de viernes a domingo 15-18, desde el 18 de diciembre todos los días 15-18; desde junio de 2027 todos los días 14-18.",
        lat: 46.01977,
        lng: 7.74646,
        url: "https://www.zermatt.ch/en/Media/Attractions/Matterhorn-Museum-Zermatlantis"
      },
      {
        nome: "Kirchbrücke",
        testo: "El puente sobre el Vispa junto a la iglesia es el punto del pueblo con la vista más limpia del Cervino, enmarcado entre casas y el río. Al amanecer, cuando la cima se tiñe de naranja, se llena de fotógrafos.",
        come: "A pie desde el centro, 5 minutos desde la estación.",
        quando: "Al amanecer, por la primera luz en la cima.",
        tempo: "20 minutos",
        costo: "Gratis.",
        orari: "Siempre accesible.",
        lat: 46.01891,
        lng: 7.74806
      },
      {
        nome: "Hinterdorf, el pueblo antiguo",
        testo: "Una calle estrecha detrás de la Bahnhofstrasse con pajares y graneros de madera ennegrecida de los siglos XVI y XVII, elevados sobre pilotes con discos de piedra contra los ratones. Es lo que queda del Zermatt campesino antes del alpinismo.",
        come: "A pie desde la iglesia hacia el norte por la Hinterdorfstrasse.",
        quando: "A primera hora o al anochecer, con poca gente.",
        tempo: "30 minutos",
        costo: "Gratis.",
        orari: "Siempre accesible.",
        lat: 46.02085,
        lng: 7.74761
      },
      {
        nome: "Garganta del Gorner (Gornerschlucht)",
        testo: "Una garganta estrecha excavada por el torrente glaciar del Gorner, que se recorre por pasarelas de madera ancladas a la roca sobre el agua verde. Es un paseo corto, a media hora del centro, que combina bien con la vuelta a pie desde Furi.",
        come: "A pie desde el pueblo hacia la aldea de Blatten, unos 30 minutos.",
        quando: "En verano, en las horas de calor.",
        tempo: "1-2 horas con el paseo",
        lat: 46.00882,
        lng: 7.7391,
        consiglio: "Comprobar antes que esté abierta: las pasarelas cierran fuera de temporada."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Kirchbrücke al amanecer",
          "Gornergrat en tren, parada en el Riffelsee bajando en Rotenboden",
          "Comida en Riffelberg y vuelta en tren",
          "Tarde entre Hinterdorf y el Matterhorn Museum"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Gornergrat, Riffelsee y el pueblo",
          "Día 2: Sunnegga, sendero de los cinco lagos y Rothorn; tarde en la Kirchbrücke"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Gornergrat y Riffelsee, tarde en el pueblo y el museo",
          "Día 2: Sunnegga, los cinco lagos y el Rothorn",
          "Día 3: Matterhorn Glacier Paradise por la mañana, Schwarzsee por la tarde y bajada a pie pasando por la garganta del Gorner"
        ]
      }
    ],
    zone: [
      {
        nome: "Zermatt",
        testo: "Sin coches; alojamiento a todos los precios, pero caro.",
        perChi: "para estar en el centro",
        fascia: "200-450 €"
      },
      {
        nome: "Täsch y Randa",
        testo: "Precios más bajos, con el tren lanzadera frecuente a Zermatt.",
        perChi: "para ahorrar",
        fascia: "130-250 €"
      },
      {
        nome: "Visp y Brig",
        testo: "Las dos ciudades en la línea del Ródano, a cerca de una hora en tren de Zermatt, tienen hoteles más baratos y trenes rápidos a Berna, Interlaken e Italia.",
        perChi: "quien combina Zermatt con otros destinos del Valais",
        fascia: "110-200 €"
      }
    ],
    sapori: [
      {
        nome: "Raclette",
        testo: "Queso fundido raspado sobre patatas, típico del Valais."
      },
      {
        nome: "Fondue de queso",
        testo: "Con vino blanco del Valais."
      },
      {
        nome: "Cervino de chocolate",
        testo: "Un souvenir dulce, en muchas tiendas."
      }
    ],
    attenzioni: [
      "Los coches se quedan en Täsch: dejarlos en el aparcamiento y tomar el tren.",
      "Precios altos: comprar bocadillos en supermercados antes de subir.",
      "En días de viento o nubes los teleféricos pueden cerrar: dejar margen en el plan."
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Zermatt?",
        risposta: "Dos días bastan para el Gornergrat y el sendero de los cinco lagos. Con tres se añaden el Matterhorn Glacier Paradise y el Schwarzsee, y queda un día de margen si el Cervino está tapado."
      },
      {
        domanda: "¿Se puede llegar a Zermatt en coche?",
        risposta: "No, el pueblo está cerrado al tráfico privado. El coche se deja en Täsch, en el aparcamiento cubierto desde 17 CHF al día, y el tren lanzadera tarda unos 12 minutos, con salidas cada 20 minutos."
      },
      {
        domanda: "¿Mejor el Gornergrat o el Matterhorn Glacier Paradise?",
        risposta: "El Gornergrat tiene la vista de frente al Cervino y el Riffelsee por el camino, así que es la opción si solo hay un día. El Glacier Paradise es más alto y glaciar, pero desde arriba el Cervino se ve de lado."
      },
      {
        domanda: "¿Cuándo se ve mejor el Cervino?",
        risposta: "A primera hora de la mañana, antes de que se formen nubes alrededor de la cima. Las webcams de los remontes ayudan a decidir si subir."
      },
      {
        domanda: "¿Cuánto cuesta un día en Zermatt?",
        risposta: "Los remontes son lo que más pesa: el Gornergrat cuesta 132 CHF ida y vuelta en verano, la mitad con el Swiss Travel Pass o el abono medio precio. Con hotel y restaurante se superan fácilmente los 300 € por persona."
      }
    ],
    gite: [
      {
        nome: "Puente colgante Charles Kuonen (Randa)",
        distanza: "unos 20 minutos en tren y luego 1-2 horas a pie",
        come: "Tren hasta Randa y luego sendero señalizado en subida hasta el puente, en el trazado del Europaweg.",
        testo: "Un puente peatonal colgante de 494 metros sobre un valle lateral, de los más largos de los Alpes. Se camina sobre el vacío con el Weisshorn enfrente."
      },
      {
        nome: "Saas-Fee",
        distanza: "unas 2 horas entre tren y autobús",
        come: "Tren hasta Visp o Stalden y luego autobús postal hasta Saas-Fee.",
        testo: "El otro pueblo sin coches del Valais, rodeado de cuatromiles y glaciares que bajan casi hasta las casas. Menos concurrido y algo más barato que Zermatt."
      },
      {
        nome: "Sion",
        distanza: "unas 2 horas en tren",
        come: "Tren hasta Visp y transbordo a la línea del Ródano.",
        testo: "La capital del Valais, con dos colinas fortificadas, Valère y Tourbillon, y viñedos en terrazas alrededor. Un día de ciudad y vino cuando arriba hace mal tiempo."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "El Cervino al atardecer reflejado en un pequeño lago alpino sobre Zermatt, con un excursionista de espaldas en primer plano",
    immagine: '/images/svizzera/zermatt.jpg',
  },
]
