import type { Destinazione } from '@/lib/types'

export const destinazioniMontenegro: Destinazione[] = [
  {
    slug: 'bocche-di-cattaro',
    paeseSlug: 'montenegro',
    ordine: 1,
    nome: 'Bahía de Kotor: Kotor y Perast',
    tipologia: ['patrimonio UNESCO', 'mare', 'città storica'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Fue la primera etapa de mis diez días en Montenegro con amigos, en coche de alquiler: tres días con base en Kotor, la ciudad vieja y las murallas hasta la fortaleza, y luego Perast, Nuestra Señora de las Rocas y la vuelta a las Bocas.",
    introduzione:
      "Una bahía profunda y ramificada, encajada entre montañas que caen a pico sobre el agua, con las ciudades venecianas de Kotor y Perast, palacios de capitanes de barco e islotes con iglesias y monasterios.",
    percheAndarci:
      'Por la vista desde las murallas de Kotor, la ciudad vieja veneciana, Perast y Nuestra Señora de las Rocas: es el paisaje más conocido de Montenegro.',
    cosaVedere: [
      'La ciudad vieja de Kotor y la catedral de San Trifón',
      'Las murallas y la fortaleza de San Juan',
      'Perast y las islas de Nuestra Señora de las Rocas y de San Jorge',
      'Los mosaicos romanos de Risan',
      'Dobrota y Prčanj con los palacios de los capitanes',
    ],
    cosaFare: ['Subir a las murallas al amanecer', 'Tomar la barca a Nuestra Señora de las Rocas', 'Rodear la bahía pasando por el ferri de Kamenari'],
    doveDormire: 'Ciudad vieja de Kotor por el ambiente; Dobrota, Muo y Prčanj por la tranquilidad y el aparcamiento; Perast para una noche en un palacio.',
    doveMangiare: 'Konobe junto al mar con pescado a la parrilla, mejillones a la buzara y risotto negro.',
    comeArrivare: "El aeropuerto de Tivat está a 15-20 minutos de Kotor: en taxi cuesta unos 15-20 €, o se recoge el coche de alquiler en la terminal; la parada de los autobuses de línea está en la carretera principal, a unos 200 metros. Desde Podgorica, la capital, hay alrededor de una hora y media por carretera. Desde Dubrovnik se llega en una hora y media cruzando el paso fronterizo de Debeli Brijeg, con colas de varias horas en verano. Autobuses frecuentes unen Kotor con Budva, Herceg Novi y Podgorica.",
    comeSpostarsi: 'Coche, autobuses locales por la orilla, barcas.',
    periodoMigliore: 'junio y septiembre; en julio y agosto multitudes y cruceros.',
    costi: "Murallas y fortaleza 15 € en temporada, en efectivo; catedral de San Trifón unos 4 €; barca a Nuestra Señora de las Rocas unos 5 € ida y vuelta; ferri de Kamenari unos 5 € por coche. Presupuesto diario por persona, orientativo: bajo 50-70 € (apartamento o casa de huéspedes, autobuses, comidas rápidas), medio 90-140 € (hotel pequeño junto al mar, cena en una konoba, excursión en barca), alto desde 200 € (hotel de diseño o resort en Porto Montenegro y Luštica).",
    erroriDaEvitare: [
      'Visitar Kotor a media jornada en los días con más cruceros',
      'Subir a las murallas con calor y sin agua',
      'Dormir en la ciudad vieja con coche: los aparcamientos son pocos y caros',
    ],
    luoghi: [
      {
        nome: "Casco antiguo de Kotor",
        testo: "Un laberinto de callejuelas medievales dentro de murallas construidas y ampliadas durante siglos, sobre todo por los venecianos: patrimonio de la UNESCO. Plazas diminutas, iglesias románicas y la catedral de San Trifón, consagrada en 1166. Los gatos están por todas partes, y la ciudad los ha convertido en su símbolo.",
        come: "Se llega en coche o autobús hasta los aparcamientos fuera de las murallas y se entra por la Puerta del Mar. Se visita a pie por libre.",
        quando: "Temprano por la mañana o por la tarde-noche: en las horas centrales, con los cruceros en el puerto, las calles se llenan.",
        tempo: "2-3 horas",
        costo: "Entrada gratuita",
        orari: "Siempre accesible",
        lat: 42.4249,
        lng: 18.7698,
        consiglio: "Perderse por las callejuelas sin mapa: la ciudad es pequeña y siempre se encuentra el camino."
      },
      {
        nome: "Fortaleza de San Juan",
        testo: "Las murallas suben por la montaña hasta la fortaleza, a unos 280 metros de altura. Desde arriba se ve toda la bahía, con su forma de fiordo. A media subida está la iglesia de Nuestra Señora de la Salud, del siglo XVI.",
        come: "El sendero sale del casco antiguo: unos 1.350 escalones irregulares y 260 metros de desnivel. Calzado cerrado y agua.",
        quando: "A la apertura o al final de la tarde, nunca en las horas de calor del verano. Arriba no hay sombra.",
        tempo: "1 hora y media entre subida, parada y bajada",
        costo: "15 € en temporada, en efectivo (2026)",
        lat: 42.4236,
        lng: 18.7719,
        consiglio: "Entrar solo por los accesos oficiales del casco antiguo: los huecos no oficiales en las murallas se están cerrando o vigilando."
      },
      {
        nome: "Catedral de San Trifón",
        testo: "La catedral católica de Kotor, consagrada en 1166 y reconstruida en parte tras los terremotos de 1667 y 1979. Dentro hay frescos del siglo XIV, un ciborio románico y, en el piso superior, el tesoro con relicarios de plata.",
        come: "En la plaza de San Trifón, en el casco antiguo. Entrada en la puerta.",
        quando: "Por la mañana, antes de que lleguen los grupos de los cruceros.",
        tempo: "30-45 minutos",
        costo: "unos 4 €, en efectivo",
        lat: 42.4243,
        lng: 18.7714,
        consiglio: "Subir a la logia del tesoro: desde allí se ve la nave desde arriba."
      },
      {
        nome: "San Lucas y San Nicolás",
        testo: "Dos iglesias ortodoxas a pocos metros una de otra. San Lucas, de 1195, es pequeña y románica, y durante siglos tuvo dos altares, uno católico y otro ortodoxo; San Nicolás es de principios del siglo XX, con cúpulas que se ven desde las murallas.",
        come: "En la plaza de San Lucas, en la parte norte del casco antiguo. Entrada gratuita.",
        quando: "De día, fuera del horario de los oficios.",
        tempo: "20 minutos",
        lat: 42.4255,
        lng: 18.7712
      },
      {
        nome: "Perast y las islas",
        testo: "Un pueblo barroco en una sola fila de palacios sobre el agua, con dieciséis palacios y diecisiete iglesias construidos por familias de capitanes al servicio de Venecia. Delante hay dos islotes: Nuestra Señora de las Rocas, artificial, y San Jorge, con el monasterio entre cipreses.",
        come: "Desde Kotor se llega en coche o en autobús por la carretera de la costa, unos 12 km. El coche se deja en los aparcamientos a la entrada del pueblo. Del muelle salen las barcas hacia las islas, una travesía de pocos minutos.",
        quando: "Por la mañana o al final de la tarde. Las barcas salen cuando se llenan.",
        tempo: "2-3 horas con la travesía",
        costo: "Barca a Nuestra Señora de las Rocas unos 5 € ida y vuelta",
        lat: 42.4869,
        lng: 18.6992,
        consiglio: "Fijar el precio de la barca antes de subir, ida y vuelta juntas."
      },
      {
        nome: "Nuestra Señora de las Rocas",
        testo: "Una isla artificial construida echando al mar piedras y cascos de barcos hundidos alrededor de un escollo donde, según la tradición, se encontró un icono de la Virgen. La iglesia está llena de exvotos de marineros; cada 22 de julio, con la Fašinada, las barcas llevan más piedras para ampliar la isla.",
        come: "Con las barcas desde el paseo marítimo de Perast. Dentro hay un pequeño museo con donativo.",
        quando: "Temprano por la mañana, antes de las excursiones organizadas.",
        tempo: "45 minutos en la isla",
        costo: "Barca unos 5 €, pequeño donativo para el museo",
        lat: 42.4867,
        lng: 18.6889,
        consiglio: "San Jorge, la isla de al lado, es un monasterio y normalmente no se visita: se ve desde la barca."
      },
      {
        nome: "Risan y los mosaicos romanos",
        testo: "La antigua Rhizon, considerada el asentamiento más antiguo de las Bocas de Kotor. De la época romana quedan los mosaicos del suelo de una villa del siglo II, con el dios Hipnos dormido: el resto más valioso de la ciudad antigua.",
        come: "En la carretera de Kotor a Herceg Novi, en la parte más interior de la bahía. Se visita en pocos minutos.",
        quando: "Todo el año, por la mañana.",
        tempo: "30 minutos",
        costo: "6 €, menores de 12 años 4 €; entrada conjunta con el Museo de Perast 12 €",
        orari: "De martes a domingo 10-16 h; cerrado los lunes, todo enero, la Pascua ortodoxa, el 1 de mayo y el 13-14 de noviembre",
        url: "https://muzejikotor.me/en/admission-fees-and-renting/",
        lat: 42.5147,
        lng: 18.695,
        consiglio: "Una parada breve camino de Perast, no un día entero."
      },
      {
        nome: "Dobrota",
        testo: "El pueblo a lo largo de la orilla al norte de Kotor, con palacios de capitanes del siglo XVIII asomados a pequeñas playas de guijarros y embarcaderos. Es donde uno se baña sin alejarse de la ciudad.",
        come: "A pie por la orilla desde el casco antiguo, o con los autobuses locales hacia Perast.",
        quando: "Por la tarde para el mar, por la noche para cenar junto al agua.",
        tempo: "media jornada",
        costo: "Gratis",
        lat: 42.4542,
        lng: 18.7683,
        consiglio: "Por la noche la orilla está iluminada y se ve el casco antiguo con las murallas encendidas."
      },
      {
        nome: "Prčanj",
        testo: "Un pueblo de marineros en la orilla opuesta a Dobrota, con la gran iglesia de la Natividad de la Virgen, construida entre los siglos XVIII y XIX y a la que se sube por una escalinata. Carretera estrecha, poco tráfico y un paseo tranquilo junto al mar.",
        come: "En coche o en bici desde Kotor hacia Muo y Stoliv, unos 6 km.",
        quando: "Al final de la tarde, con la luz sobre la bahía.",
        tempo: "1 hora",
        lat: 42.4575,
        lng: 18.7422,
        consiglio: "Seguir hasta Stoliv y Lepetane y cerrar la vuelta con el ferri."
      },
      {
        nome: "Ferri Kamenari-Lepetane",
        testo: "Cruza las Verige, el estrecho más angosto de las Bocas, en pocos minutos. Evita la vuelta a la bahía a quien va de Herceg Novi o de Croacia hacia Tivat y Budva.",
        come: "Embarque en Kamenari, en la carretera de la costa, o en Lepetane, en la orilla de Tivat. Se paga a bordo.",
        quando: "Mañana o noche en verano: las tardes de julio y agosto la cola puede ser larga.",
        tempo: "5 minutos de travesía, más la espera",
        costo: "unos 5 € por coche, peatones gratis",
        orari: "Día y noche",
        lat: 42.4653,
        lng: 18.6858
      },
      {
        nome: "Tivat y Porto Montenegro",
        testo: "La ciudad del aeropuerto, con el puerto deportivo de lujo de Porto Montenegro construido sobre el antiguo arsenal naval. Paseo marítimo con palmeras, yates y restaurantes, y el museo del patrimonio naval con un submarino al aire libre.",
        come: "A 15-20 minutos de Kotor en coche o en autobús. Se pasea por el frente marítimo.",
        quando: "Al final de la tarde y por la noche.",
        tempo: "2 horas",
        lat: 42.4333,
        lng: 18.6917,
        consiglio: "Desde Tivat salen las barcas hacia la Cueva Azul y la isla de las Flores."
      },
      {
        nome: "Herceg Novi",
        testo: "La ciudad a la entrada de las Bocas, fundada en 1382 por el rey bosnio Tvrtko, con el casco antiguo en cuesta, la fortaleza Kanli Kula arriba y el Forte Mare junto al mar. Un paseo de siete kilómetros llega hasta Igalo, lleno de buganvillas y escalinatas.",
        come: "A unos 45 minutos de Kotor en coche, con el ferri de Kamenari o rodeando la bahía. Autobuses frecuentes.",
        quando: "Por la mañana para el casco antiguo, por la tarde-noche para el paseo.",
        tempo: "media jornada",
        lat: 42.4524,
        lng: 18.5381,
        consiglio: "Camino de Dubrovnik es una buena parada antes de la frontera."
      },
      {
        nome: "Cueva Azul de Luštica",
        testo: "Una cueva marina en la punta de la península de Luštica, donde la luz que entra bajo la bóveda tiñe el agua de un azul intenso. Se entra en barca y se puede nadar dentro.",
        come: "Solo en barca, con las excursiones desde Kotor, Tivat o Herceg Novi, a menudo combinadas con Mamula y Nuestra Señora de las Rocas.",
        quando: "A mediodía, con el sol alto que ilumina el agua; con mar agitado las barcas no entran.",
        tempo: "media jornada con la excursión",
        lat: 42.3756,
        lng: 18.5982,
        consiglio: "Llevar bañador: el baño en la cueva es lo mejor."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Kotor a la apertura, con la subida a la fortaleza",
          "Comida en el casco antiguo",
          "Perast y barca a Nuestra Señora de las Rocas por la tarde",
          "Atardecer en la orilla de Dobrota"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Kotor, murallas y fortaleza por la mañana, casco antiguo y catedral por la tarde",
          "Día 2: Risan, Perast y paseo en barca a las islas, luego Prčanj y Dobrota"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Kotor, murallas y fortaleza por la mañana, catedral e iglesias por la tarde, cena en Dobrota",
          "Día 2: Perast, Nuestra Señora de las Rocas y Risan, y regreso por Prčanj",
          "Día 3: barca a la Cueva Azul de Luštica, o bien Herceg Novi y Tivat pasando por el ferri de Kamenari"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo de Kotor",
        perChi: "quien busca ambiente",
        testo: "Se duerme dentro de las murallas, a pie de todo. De día es ruidoso por los cruceros y por la noche los locales cierran tarde. Los coches no entran: se deja el coche fuera."
      },
      {
        nome: "Dobrota, Muo y Prčanj",
        perChi: "quien viaja en coche",
        testo: "En la orilla, a pocos kilómetros de Kotor, con aparcamiento más fácil y menos gente. Al centro se llega a pie por la orilla o en autobús local."
      },
      {
        nome: "Perast",
        perChi: "quien busca silencio",
        testo: "Pocos hoteles y palacios convertidos en habitaciones. Al final de la tarde, cuando se van los grupos, el pueblo queda casi vacío. Pocos restaurantes."
      },
      {
        nome: "Tivat, Porto Montenegro y Luštica",
        perChi: "quien busca un hotel de lujo",
        testo: "Hoteles de cadena y resorts junto al mar, a pocos minutos del aeropuerto. Más modernos y con menos carácter, con Kotor a 20 minutos en coche.",
        fascia: "desde 200 €"
      }
    ],
    sapori: [
      {
        nome: "Pescado a la parrilla",
        testo: "Dorada, lubina y calamares, normalmente al peso, en las konobe de la bahía (Dobrota, Prčanj, Perast)."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto negro con tinta de sepia, plato típico de la costa, mejor en locales familiares."
      },
      {
        nome: "Jamón y queso de Njeguši",
        testo: "Jamón ahumado y queso curado de la montaña sobre Kotor."
      },
      {
        nome: "Vranac",
        testo: "Tinto con cuerpo de Montenegro, casi siempre disponible por copas."
      }
    ],
    attenzioni: [
      "Con cruceros en puerto (normalmente de mayo a octubre) Kotor se congestiona en las horas centrales: conviene llegar temprano.",
      "Taxis no oficiales en el aeropuerto de Tivat: usar los que muestran tarifa o acordar el precio antes de subir.",
      "El aparcamiento en Kotor y Perast suele ser de pago y con controles frecuentes: usar los aparcamientos señalizados y guardar el ticket.",
      "El ferry Kamenari-Lepetani ahorra el largo rodeo por la bahía; en verano la cola puede ser larga."
    ],
    gite: [
      {
        nome: "Lovćen, Njeguši y Cetinje",
        distanza: "alrededor de 1 hora hasta Njeguši",
        come: "En coche desde Kotor por la carretera de las 25 serpentinas.",
        testo: "La carretera de curvas sobre la bahía, el jamón de Njeguši, el mausoleo de Njegoš en la cumbre y la antigua capital Cetinje: un día completo entre montaña e historia."
      },
      {
        nome: "Budva y Sveti Stefan",
        distanza: "unos 40 minutos",
        come: "En coche o con los autobuses frecuentes de Kotor a Budva.",
        testo: "El casco antiguo de Budva en su península amurallada y el mirador sobre el islote de Sveti Stefan, con un baño en alguna cala hacia Petrovac."
      },
      {
        nome: "Dubrovnik",
        distanza: "alrededor de 1 hora y media, sin colas en la frontera",
        come: "En coche o en autobús desde Kotor y Herceg Novi, por el paso de Debeli Brijeg.",
        testo: "Las murallas y el casco antiguo de Dubrovnik. En verano las colas en la frontera croata pueden durar horas: conviene salir al amanecer y comprobar que el alquiler permite salir del país."
      }
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta para las Bocas de Kotor?",
        risposta: "Dos días bastan para Kotor con sus murallas y para Perast con Nuestra Señora de las Rocas. Con tres se añaden la Cueva Azul en barca, o Herceg Novi y Tivat."
      },
      {
        domanda: "¿Cuánto cuesta subir a las murallas de Kotor?",
        risposta: "15 € por persona en temporada en 2026, a pagar en efectivo en los accesos oficiales del casco antiguo. La subida lleva alrededor de una hora a paso tranquilo."
      },
      {
        domanda: "¿Es mejor dormir en Kotor o en Perast?",
        risposta: "Kotor es más cómoda para restaurantes y autobuses, pero ruidosa en verano y sin coches dentro de las murallas. Perast es mucho más tranquila por la noche, con pocos restaurantes: va bien para una o dos noches."
      },
      {
        domanda: "¿Cómo se llega a Nuestra Señora de las Rocas?",
        risposta: "Con las barcas que salen del paseo marítimo de Perast, unos 5 € ida y vuelta y pocos minutos de travesía. Conviene acordar el precio antes de subir."
      },
      {
        domanda: "¿Cuándo hay menos cruceros en Kotor?",
        risposta: "Los cruceros llegan sobre todo de mayo a octubre, con picos algunos días de la semana: el calendario de llegadas lo publica el puerto de Kotor. Los días de más afluencia conviene visitar el casco antiguo temprano o después de las 18."
      },
      {
        domanda: "¿Hace falta coche para recorrer las Bocas?",
        risposta: "No es imprescindible: autobuses locales unen Kotor, Perast, Tivat y Herceg Novi. Con coche, en cambio, se rodea la bahía con más libertad, se llega a Prčanj y Luštica y se sube al Lovćen."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'Los tejados de tejas rojas de la ciudad vieja de Kotor y las cúpulas de la iglesia de San Nicolás',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-02-bocche-di-cattaro.jpg',
  },
  {
    slug: 'lovcen-cetinje',
    paeseSlug: 'montenegro',
    ordine: 2,
    nome: 'Lovćen y Cetinje',
    tipologia: ['montagna', 'parco nazionale', 'storia'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    miaEsperienza:
      "Estuve durante los diez días en Montenegro con amigos: en coche desde Kotor por las curvas del Lovćen, Njeguši y el mausoleo de Njegoš, con la noche en Cetinje.",
    introduzione:
      'La montaña símbolo de Montenegro, sobre la bahía, con el mausoleo del príncipe-obispo y poeta Njegoš en la cima, y la antigua capital real de Cetinje a sus pies.',
    percheAndarci:
      'Por la carretera de curvas desde Kotor, el jamón de Njeguši, la vista desde el mausoleo y la Cetinje de las embajadas.',
    cosaVedere: ['Las veinticinco curvas sobre Kotor', 'El pueblo de Njeguši', 'El mausoleo de Njegoš en el Jezerski vrh', 'El monasterio y el palacio del rey Nicolás en Cetinje'],
    cosaFare: ['Probar pršut y queso en Njeguši', 'Subir los 461 escalones del mausoleo'],
    doveDormire: 'Casas de huéspedes y pequeños hoteles en Cetinje.',
    doveMangiare: 'Pršut, queso njeguški y njeguški steak en las trattorie de Njeguši.',
    comeArrivare: "Desde Kotor se sube en coche por las 25 serpentinas hasta Njeguši, alrededor de una hora; de allí al mausoleo de Njegoš y luego a Cetinje hacen falta otros 30-40 minutos. Cetinje está a unos 40 minutos de Budva y a media hora de Podgorica. Sin coche, los autobuses unen Cetinje con Budva y Podgorica, pero para Njeguši y el mausoleo se necesita coche o una excursión organizada.",
    comeSpostarsi: 'Coche.',
    periodoMigliore: 'mayo-octubre; en invierno la carretera del mausoleo puede estar nevada.',
    costi: "Parque nacional del Lovćen 3 € por persona y día; mausoleo de Njegoš 8 €; Museo del rey Nikola 8 €; Biljarda 5 €; entrada conjunta para todos los museos nacionales y el mausoleo 20 €. Presupuesto diario por persona, orientativo: bajo 50-70 € (casa de huéspedes en Cetinje, comida en Njeguši), medio 90-140 € (hotel pequeño y museos), alto desde 200 €.",
    erroriDaEvitare: ['Afrontar las curvas con una autocaravana grande o de noche', 'Subir con las nubes bajas: la vista desaparece'],
    luoghi: [
      {
        nome: "Carretera de las 25 serpentinas",
        testo: "La antigua carretera austrohúngara que sube de Kotor al Lovćen con 25 curvas numeradas. En pocos kilómetros se pasa del nivel del mar a la meseta de Njeguši, con la bahía cada vez más pequeña abajo.",
        come: "Se recorre en coche desde Kotor. Carretera estrecha, con muchos autocares.",
        quando: "Por la mañana, para tener luz sobre la bahía y menos tráfico.",
        tempo: "1 hora con las paradas",
        costo: "Gratuita",
        consiglio: "Los apartaderos con vistas son pocos y pequeños: parar solo donde haya espacio seguro."
      },
      {
        nome: "Njeguši",
        testo: "El pueblo de origen de la dinastía Petrović-Njegoš, en las laderas del Lovćen. Aquí se comen el jamón ahumado y el queso que han hecho famosa la zona, y se visita la casa natal de Njegoš.",
        come: "En la carretera entre Kotor y el Lovćen. Se come en una de las tabernas.",
        quando: "A la hora de comer, todo el año.",
        tempo: "1 hora",
        costo: "Casa natal de Njegoš 3 €; incluida en la entrada del mausoleo",
        orari: "Casa natal: del 11 de abril al 15 de noviembre todos los días 9-16 h; cerrada del 16 de noviembre al 10 de abril",
        url: "https://en.narodnimuzej.me/posjeta-njegoseva-rodna-kuca/",
        lat: 42.4339,
        lng: 18.8103,
        consiglio: "El pršut también se vende entero o en lonchas envasadas al vacío, para llevarlo a casa."
      },
      {
        nome: "Mausoleo de Njegoš",
        testo: "En lo alto del Jezerski vrh, a 1.657 metros, la tumba del príncipe-obispo y poeta Petar II Petrović-Njegoš. Se suben 461 escalones excavados en la roca. Desde la terraza se ven la bahía, el lago Skadar y, en los días despejados, el Adriático.",
        come: "En coche hasta el aparcamiento, con el último tramo a pie después del túnel.",
        quando: "Temprano por la mañana o al final de la tarde. En invierno la carretera puede cerrarse por la nieve.",
        tempo: "1 hora y media",
        costo: "8 €, estudiantes 4 €, menores de 12 años gratis; más la entrada al parque, 3 €",
        orari: "Del 11 de abril al 15 de noviembre todos los días 9-16 h, última entrada media hora antes; cerrado del 16 de noviembre al 10 de abril",
        url: "https://en.narodnimuzej.me/posjeta-njegosev-mauzolej/",
        lat: 42.4,
        lng: 18.8378,
        consiglio: "Mirar el tiempo: con nubes bajas no se ve nada."
      },
      {
        nome: "Cetinje",
        testo: "La antigua capital histórica de Montenegro, con edificios de embajadas del siglo XIX y el pequeño palacio del rey Nikola. El monasterio de Cetinje guarda las reliquias de San Pedro, y la Biljarda, donde vivió Njegoš, forma parte del Museo Nacional.",
        come: "Desde Njeguši en coche, bajando del Lovćen. En la ciudad se camina.",
        quando: "Por la mañana, cuando los museos están abiertos.",
        tempo: "2-3 horas",
        lat: 42.3894,
        lng: 18.9247,
        consiglio: "El Museo del rey Nikola, la Biljarda y el monasterio están a pocos minutos a pie unos de otros: media jornada basta para todos."
      },
      {
        nome: "Monasterio de Cetinje",
        testo: "El monasterio ortodoxo reconstruido a principios del siglo XVIII, después de que el primero, fundado en 1484 por Ivan Crnojević, fuera destruido por los otomanos. Guarda las reliquias de San Pedro de Cetinje y objetos venerados como la mano derecha de San Juan Bautista.",
        come: "En el centro, al pie de la colina. Se visita en silencio, con hombros y piernas cubiertos.",
        quando: "Por la mañana, fuera del horario de los oficios.",
        tempo: "30 minutos",
        costo: "Entrada gratuita",
        lat: 42.3877,
        lng: 18.9214
      },
      {
        nome: "Museo del rey Nikola",
        testo: "El palacio donde vivió el rey Nikola I, el último soberano de Montenegro, con muebles, retratos, armas y condecoraciones de la corte. Cuenta la pequeña capital europea de finales del siglo XIX, con las embajadas de las grandes potencias a pocos pasos.",
        come: "En la plaza central de Cetinje. Visita guiada o libre, según la época.",
        quando: "Por la mañana; en invierno cierra los fines de semana.",
        tempo: "1 hora",
        costo: "8 €, estudiantes 4 €, menores de 12 años gratis; entrada conjunta de los museos nacionales 20 €",
        orari: "Del 11 de abril al 15 de noviembre todos los días 9-16 h; del 16 de noviembre al 10 de abril de lunes a viernes 9-15 h, cerrado sábado y domingo",
        url: "https://en.narodnimuzej.me/posjeta-muzej-kralja-nikole/",
        lat: 42.3875,
        lng: 18.9244
      },
      {
        nome: "Biljarda",
        testo: "La residencia de Njegoš, construida en 1838 y llamada así por la mesa de billar que el príncipe-obispo hizo llevar hasta Cetinje. Alberga el museo dedicado a Njegoš y, en un pabellón contiguo, la gran maqueta en relieve de Montenegro.",
        come: "Junto al monasterio, a pocos minutos a pie del Museo del rey Nikola.",
        quando: "Por la mañana.",
        tempo: "45 minutos",
        costo: "5 € con la maqueta de Montenegro, estudiantes 2,50 €",
        orari: "Del 11 de abril al 15 de noviembre todos los días 9-16 h; del 16 de noviembre al 10 de abril de lunes a viernes 9-15 h",
        url: "https://en.narodnimuzej.me/posjeta-njegosev-muzej-biljarda/",
        lat: 42.3878,
        lng: 18.9231,
        consiglio: "Mirar la maqueta antes de seguir: se ve todo el recorrido entre las Bocas, el Lovćen y el lago."
      },
      {
        nome: "Iglesia de la Corte (Ćipur)",
        testo: "Una pequeña iglesia de piedra reconstruida en 1886 en el lugar del primer monasterio de Cetinje, el fundado por Ivan Crnojević. Desde 1989 acoge las tumbas del rey Nikola y de la reina Milena, traídas desde Italia.",
        come: "Junto al Museo del rey Nikola, en el centro de Cetinje.",
        quando: "De día.",
        tempo: "15 minutos",
        lat: 42.3869,
        lng: 18.9236
      },
      {
        nome: "Iglesia de los Valacos",
        testo: "La iglesia más antigua de Cetinje, de 1450, reconstruida en el siglo XVIII. La valla que la rodea está hecha con los cañones de los fusiles arrebatados a los turcos en las guerras del siglo XIX.",
        come: "En la parte norte del centro, a pocos minutos a pie de la plaza.",
        quando: "De día.",
        tempo: "15 minutos",
        lat: 42.3909,
        lng: 18.9244,
        consiglio: "La valla se ve bien incluso sin entrar."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Subida por las 25 serpentinas desde Kotor",
          "Comida en Njeguši",
          "Mausoleo de Njegoš",
          "Cetinje por la tarde y regreso por la carretera de Budva"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: serpentinas, Njeguši y comida con pršut, mausoleo de Njegoš por la tarde, noche en Cetinje",
          "Día 2: monasterio de Cetinje, Biljarda y Museo del rey Nikola por la mañana, luego Rijeka Crnojevića y el lago Skadar"
        ]
      }
    ],
    zone: [
      {
        nome: "Cetinje",
        perChi: "quien quiere una base lejos del mar",
        testo: "Ciudad universitaria y tranquila, a la que se llega en coche desde Kotor y Budva. Pocos hoteles, casas de huéspedes a precios bajos, poca vida nocturna."
      },
      {
        nome: "Njeguši",
        perChi: "quien quiere dormir en la montaña",
        testo: "Unas pocas habitaciones en casas de familia y tabernas, a medio camino entre Kotor y el mausoleo. Por la noche no hay nada, pero por la mañana el parque está muy cerca."
      },
      {
        nome: "Kotor",
        perChi: "quien hace la excursión en el día",
        testo: "Más cómodo por horarios y restaurantes. Se sube en coche por la mañana y se vuelve por la noche."
      }
    ],
    sapori: [
      {
        nome: "Pršut de Njeguši",
        testo: "Jamón crudo de cerdo ahumado con haya y curado en altura."
      },
      {
        nome: "Queso njeguški",
        testo: "Queso de vaca curado, sabroso, típico de la zona."
      },
      {
        nome: "Njeguški steak",
        testo: "Filete de ternera relleno de jamón y queso, servido en las tabernas del pueblo."
      }
    ],
    attenzioni: [
      "La carretera de las curvas tiene giros cerrados y autocares: ceder el paso a quien sube y cuidado con los giros.",
      "Evitar los días de niebla: las curvas son seguidas y la visibilidad baja.",
      "Algunas tabernas de la carretera cobran más las raciones «al peso»: preguntar el precio antes de pedir."
    ],
    gite: [
      {
        nome: "Rijeka Crnojevića y el lago Skadar",
        distanza: "unos 30 minutos",
        come: "En coche desde Cetinje hacia el sureste, por una carretera estrecha de colina.",
        testo: "El pueblo con el puente de piedra sobre el río Crnojević y, un poco más allá, el mirador de Pavlova Strana sobre el meandro del río. Desde aquí se sigue hacia Virpazar y el paseo en barca por el lago."
      },
      {
        nome: "Budva",
        distanza: "unos 40 minutos",
        come: "En coche o en autobús desde Cetinje, bajando hacia la costa.",
        testo: "El casco antiguo en su península amurallada y las playas de la riviera: se baja al mar por la tarde, después de los museos de la mañana."
      }
    ],
    faq: [
      {
        domanda: "¿Cuánto cuesta entrar en el parque del Lovćen?",
        risposta: "3 € por persona y día en 2026, con el centro de visitantes y los senderos didácticos incluidos. El mausoleo de Njegoš se paga aparte, 8 €."
      },
      {
        domanda: "¿El mausoleo de Njegoš abre todo el año?",
        risposta: "No: abre del 11 de abril al 15 de noviembre, todos los días de 9 a 16 h. Del 16 de noviembre al 10 de abril está cerrado a las visitas, y la carretera puede estar nevada."
      },
      {
        domanda: "¿Es difícil conducir por la carretera de las serpentinas?",
        risposta: "Es estrecha, con 25 curvas cerradas y pocos puntos para cruzarse con los autocares, pero está asfaltada. Se conduce con calma, de día, tocando el claxon en las curvas ciegas; con autocaravanas grandes conviene evitarla."
      },
      {
        domanda: "¿Se puede subir al Lovćen en teleférico desde Kotor?",
        risposta: "Sí, con el teleférico Kotor-Lovćen: unos 11 minutos de subida, 20 € ida y vuelta y 12 € solo ida para un adulto. Cierra al final de la temporada: en 2026 el último día fue el 31 de octubre, con reapertura prevista en la primavera de 2027."
      },
      {
        domanda: "¿Compensa la entrada conjunta de los museos de Cetinje?",
        risposta: "Cuesta 20 € e incluye todos los museos nacionales y el mausoleo de Njegoš. Compensa a quien visita el mausoleo, el Museo del rey Nikola y la Biljarda, que por separado cuestan 21 €."
      },
      {
        domanda: "¿Es mejor dormir en Cetinje o volver a Kotor?",
        risposta: "Quien sigue hacia el lago Skadar o Podgorica gana tiempo durmiendo en Cetinje, que además es más barata. Quien tiene Kotor como base hace la vuelta en el día y regresa por la noche."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'Prados y árboles en la meseta del parque nacional del Lovćen',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-04-lovcen-cetinje.jpg',
  },
  {
    slug: 'budva-riviera',
    paeseSlug: 'montenegro',
    ordine: 3,
    nome: 'Budva y la riviera',
    tipologia: ['mare', 'spiagge', 'vita notturna'],
    giorniConsigliati: '1-3 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Pasé por allí durante los diez días en Montenegro con amigos: un día en coche desde Cetinje por la costa, Budva y Sveti Stefan hasta Petrovac.",
    introduzione:
      'La costa central de Montenegro, con la ciudad vieja fortificada de Budva, el islote-resort de Sveti Stefan y las bahías hasta Petrovac.',
    percheAndarci: 'Para unos días de mar, eligiendo las bahías más tranquilas al sur de Budva.',
    cosaVedere: ['La ciudad vieja de Budva', 'Sveti Stefan desde el mirador', 'Las playas de Drobni pijesak y Petrovac'],
    cosaFare: ['Baños en las bahías entre Budva y Petrovac', 'Una noche en la ciudad vieja de Budva'],
    doveDormire: 'Petrovac y Pržno para la tranquilidad, Budva para la vida nocturna.',
    doveMangiare: 'Pescado y cocina mediterránea; konobe en las bahías.',
    comeArrivare: "Desde Kotor se llega en unos 40 minutos en coche, desde el aeropuerto de Tivat en unos 30 y desde Podgorica en algo más de una hora pasando por Cetinje. La estación de autobuses de Budva tiene conexiones frecuentes con Kotor, Herceg Novi, Bar y Podgorica, y en verano los autobuses de la costa paran también en Bečići, Sveti Stefan y Petrovac. En julio y agosto la carretera de la riviera es lenta: conviene salir temprano o por la noche.",
    comeSpostarsi: 'Coche, autobuses costeros, taxi.',
    periodoMigliore: 'junio y septiembre.',
    costi: "Casco antiguo de Budva de entrada gratuita; tumbonas y sombrillas 15-30 € al día en temporada alta. Presupuesto diario por persona, orientativo: bajo 50-70 € (apartamento, playa libre, cocina local), medio 90-140 € (hotel junto al mar, tumbona, cena de pescado), alto desde 200 € (resort entre Pržno y Sveti Stefan).",
    erroriDaEvitare: ['Esperar una Budva tranquila en agosto', 'Contar con visitar la isla de Sveti Stefan: el hotel está cerrado desde 2020 y la isla no se visita'],
    luoghi: [
      {
        nome: "Casco antiguo de Budva",
        testo: "Un núcleo amurallado en una península, con murallas en gran parte de época veneciana, la ciudadela y callejuelas de piedra. Se reconstruyó en gran parte tras el terremoto de 1979. En la plaza de las iglesias, hacia la punta, están Santa María in Punta, San Juan y la iglesia ortodoxa de la Santísima Trinidad.",
        come: "A pie desde los aparcamientos de la Riviera. Se recorre por libre en una hora.",
        quando: "Por la noche para el ambiente, temprano por la mañana para la luz sobre el mar y las calles vacías.",
        tempo: "1-2 horas",
        costo: "Entrada gratuita",
        orari: "Siempre accesible",
        lat: 42.2783,
        lng: 18.838,
        consiglio: "Evitar los restaurantes con camareros que invitan a entrar desde la puerta."
      },
      {
        nome: "Ciudadela de Budva",
        testo: "La fortaleza en la punta del casco antiguo, con bastiones sobre el mar y una terraza que mira a las playas y a la isla de San Nicolás. Dentro hay una biblioteca y espacios de exposición.",
        come: "Desde la plaza de las iglesias, dentro de las murallas. Entrada de pago.",
        quando: "Al final de la tarde, con el sol bajo sobre el mar.",
        tempo: "30 minutos",
        consiglio: "La mejor vista es desde los bastiones hacia Mogren, no hacia el puerto deportivo."
      },
      {
        nome: "Playa de Mogren",
        testo: "Dos pequeñas playas, Mogren 1 y Mogren 2, bajo los acantilados justo fuera del casco antiguo. Se llega por un breve sendero junto al acantilado que sale de las murallas. Es la playa más conocida cerca del centro, pero en agosto se llena pronto.",
        come: "A pie desde el casco antiguo, pocos minutos por el sendero del acantilado.",
        quando: "Temprano por la mañana en verano; junio y septiembre son más tranquilos.",
        tempo: "media jornada",
        lat: 42.2771,
        lng: 18.8327,
        consiglio: "Tumbonas y sombrillas son de pago: quien quiera extender la toalla debe llegar pronto para encontrar la zona libre."
      },
      {
        nome: "Isla de San Nicolás",
        testo: "La isla frente a Budva, la más grande de la riviera, con una pequeña iglesia y playas de guijarros en el lado que mira a la ciudad. El resto es monte bajo y roca.",
        come: "En verano con las barcas-taxi desde el puerto de Budva, una travesía de unos 10 minutos.",
        quando: "De junio a septiembre, cuando funcionan las barcas.",
        tempo: "media jornada",
        lat: 42.2667,
        lng: 18.85,
        consiglio: "Llevar agua y escarpines: los guijarros son gruesos y hay pocos servicios."
      },
      {
        nome: "Playa de Jaz",
        testo: "Una larga playa de guijarros y arena a pocos kilómetros al noroeste de Budva, abierta y menos construida que las de la ciudad. En verano acoge festivales y grandes conciertos.",
        come: "En coche o con los autobuses de la costa hacia Tivat; aparcamiento de pago.",
        quando: "Junio y septiembre; en julio y agosto se llena los días de conciertos.",
        tempo: "media jornada",
        lat: 42.2833,
        lng: 18.8047,
        consiglio: "La parte occidental de la playa es más tranquila."
      },
      {
        nome: "Sveti Stefan",
        testo: "Un islote-pueblo de piedra unido a tierra por un istmo y convertido en resort de lujo. El hotel que lo ocupa está cerrado desde 2020 y la isla no se visita. La célebre vista es desde el mirador de la carretera sobre la bahía.",
        come: "Un poco al sur de Budva, en la carretera de la costa. Se contempla desde el mirador y desde las playas a ambos lados del istmo; conviene comprobar allí si el hotel ha reabierto.",
        quando: "Al final de la tarde, con la luz dorada sobre las piedras.",
        tempo: "30 minutos para la parada panorámica",
        lat: 42.2561,
        lng: 18.8914,
        consiglio: "Se puede bajar a la playa a los lados del istmo, pero en verano es de pago."
      },
      {
        nome: "Pržno y Miločer",
        testo: "Un pequeño pueblo de pescadores con una playa recogida y, justo al lado, el parque de Miločer, la antigua residencia de verano de la familia real, con pinos y cipreses junto al mar. Un sendero por la costa lleva de Pržno a Sveti Stefan.",
        come: "En coche o en autobús desde Budva, unos 15 minutos. El sendero costero hasta Sveti Stefan es a pie.",
        quando: "Por la mañana o al final de la tarde.",
        tempo: "2-3 horas",
        lat: 42.2675,
        lng: 18.8933,
        consiglio: "El sendero entre los pinos hasta Sveti Stefan es el paseo más bonito de la riviera."
      },
      {
        nome: "Monasterio de Praskvica",
        testo: "Un monasterio ortodoxo entre olivos en la colina sobre Pržno y Sveti Stefan, con la iglesia de San Nicolás y la de la Santísima Trinidad. El nombre viene del olor a melocotón del manantial cercano.",
        come: "En coche desde la carretera de la costa, con un breve tramo de subida. Ropa que cubra.",
        quando: "Por la mañana.",
        tempo: "30 minutos",
        costo: "Entrada gratuita",
        lat: 42.2689,
        lng: 18.9103
      },
      {
        nome: "Monasterio de Reževići",
        testo: "Un monasterio ortodoxo medieval en la costa entre Sveti Stefan y Petrovac, con frescos y vistas al mar entre los olivos. Debajo hay una pequeña playa.",
        come: "En la carretera de la costa, con aparcamiento en el arcén. Se visita en silencio, con hombros y piernas cubiertos.",
        quando: "Por la mañana o al final de la tarde.",
        tempo: "30 minutos",
        costo: "Entrada gratuita",
        lat: 42.2149,
        lng: 18.924
      },
      {
        nome: "Petrovac",
        testo: "Una bahía más recogida al sur de Budva, hacia Bar, con paseo marítimo, fuerte veneciano y un par de islotes. Más tranquila y familiar.",
        come: "Desde Budva en coche o con el autobús de la costa.",
        quando: "Junio y septiembre por el mar y los precios más bajos.",
        tempo: "media jornada",
        lat: 42.2056,
        lng: 18.9425,
        consiglio: "Una buena base para quien quiere mar sin la vida nocturna de Budva."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Casco antiguo de Budva por la mañana",
          "Comida junto al mar",
          "Mirador de Sveti Stefan por la tarde",
          "Baño y cena en Petrovac"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: casco antiguo y ciudadela de Budva por la mañana, tarde en Mogren, noche en la ciudad",
          "Día 2: Pržno y el sendero de Miločer hasta Sveti Stefan, monasterio de Reževići y cena en Petrovac"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: casco antiguo, ciudadela y playa de Mogren",
          "Día 2: barca a la isla de San Nicolás, noche en Budva",
          "Día 3: Pržno, Miločer y Sveti Stefan, luego los monasterios de Praskvica y Reževići y atardecer en Petrovac"
        ]
      }
    ],
    zone: [
      {
        nome: "Budva",
        perChi: "quien busca vida nocturna",
        testo: "Hoteles, locales y playas abarrotadas. Más ruido y tráfico en verano, pero todo a pie y autobuses frecuentes."
      },
      {
        nome: "Bečići y Rafailovići",
        perChi: "familias",
        testo: "Una larga playa de arena y guijarros justo al sur de Budva, con grandes hoteles y un paseo peatonal que llega a la ciudad en media hora a pie."
      },
      {
        nome: "Petrovac y Pržno",
        perChi: "quien busca tranquilidad",
        testo: "Calas más pequeñas, restaurantes junto al mar, menos locales."
      }
    ],
    sapori: [
      {
        nome: "Pescado y marisco",
        testo: "Calamares, lubina y gambas a la parrilla en las konobe de las bahías."
      },
      {
        nome: "Burek y pita",
        testo: "Hojaldre relleno de queso o carne, para un bocado rápido."
      },
      {
        nome: "Rakija",
        testo: "Aguardiente de fruta, que suelen ofrecer al final de la comida."
      }
    ],
    attenzioni: [
      "En julio y agosto la carretera de la Riviera se congestiona: salir pronto o por la tarde.",
      "Las playas en concesión cobran tumbonas y sombrillas con precios muy distintos de una bahía a otra: preguntar antes.",
      "Restaurantes con carta sin precios: pedir siempre una estimación antes de pedir pescado al peso."
    ],
    gite: [
      {
        nome: "Kotor y las Bocas",
        distanza: "unos 40 minutos",
        come: "En coche o con los autobuses frecuentes desde Budva.",
        testo: "El casco antiguo de Kotor, la subida a las murallas y, con una hora más, Perast y Nuestra Señora de las Rocas."
      },
      {
        nome: "Cetinje y el Lovćen",
        distanza: "unos 40 minutos hasta Cetinje",
        come: "En coche hacia el interior; para el mausoleo de Njegoš hace falta coche.",
        testo: "La antigua capital con sus museos y, encima, el parque del Lovćen con el mausoleo en la cumbre."
      },
      {
        nome: "Lago Skadar",
        distanza: "unos 45 minutos hasta Virpazar",
        come: "En coche pasando por Petrovac y el túnel Sozina, de peaje.",
        testo: "El paseo en barca desde Virpazar entre canales de nenúfares y aves, con comida a base de pescado del lago."
      }
    ],
    faq: [
      {
        domanda: "¿Se puede visitar la isla de Sveti Stefan?",
        risposta: "No: la isla es un resort y el hotel está cerrado desde 2020, así que no se entra. Se contempla desde el mirador de la carretera de la costa y desde las playas a ambos lados del istmo."
      },
      {
        domanda: "¿Cuáles son las mejores playas cerca de Budva?",
        risposta: "Mogren, a pie desde el casco antiguo, y Jaz, más larga y abierta, hacia Tivat. Hacia el sur, Pržno, las playas junto a Sveti Stefan y Petrovac son más tranquilas."
      },
      {
        domanda: "¿Cuánto cuestan tumbonas y sombrillas?",
        risposta: "En temporada alta 15-30 € al día, con precios muy distintos de una cala a otra. Casi todas las playas tienen una zona libre, pequeña y que hay que ocupar pronto."
      },
      {
        domanda: "¿Es mejor dormir en Budva o en Petrovac?",
        risposta: "Budva para quien quiere locales y vida nocturna, con todo a pie. Petrovac para quien prefiere una bahía tranquila y familiar, a unos 20 minutos en coche."
      },
      {
        domanda: "¿Budva es caótica en agosto?",
        risposta: "Sí: tráfico en la carretera de la costa, playas llenas y música hasta tarde. Junio y septiembre tienen el mar caliente y mucha menos gente."
      },
      {
        domanda: "¿Hace falta coche en la riviera?",
        risposta: "No para Budva, Bečići y Petrovac, unidas en verano por autobuses frecuentes. Sí para los monasterios, las calas pequeñas y las excursiones a Kotor, Cetinje y el lago."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'La riviera de Budva vista desde lo alto, con la isla de San Nicolás y la ciudad vieja',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-05-budva-riviera.jpg',
  },
  {
    slug: 'lago-di-scutari',
    paeseSlug: 'montenegro',
    ordine: 4,
    nome: 'Lago Skadar',
    tipologia: ['lago', 'parco nazionale', 'natura', 'vino'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    miaEsperienza:
      "Estuve durante los diez días en Montenegro con amigos: un día en el lago entre Virpazar, Pavlova Strana y Rijeka Crnojevića, antes de subir hacia Ostrog y el Durmitor.",
    introduzione:
      'El lago más grande de los Balcanes, compartido con Albania, parque nacional con unas 270 especies de aves, canales de nenúfares, monasterios en islotes y los viñedos de Crmnica.',
    percheAndarci: 'Para un paseo en barca entre canales y pueblos de pescadores, el mirador de Pavlova Strana y los vinos del lago.',
    cosaVedere: ['Virpazar y los canales de nenúfares', 'El mirador de Pavlova Strana', 'El pueblo de Rijeka Crnojevića', 'Los monasterios en los islotes'],
    cosaFare: ['Un paseo en barca desde Virpazar', 'Una degustación en una bodega familiar', 'Observación de aves con guía'],
    doveDormire: 'Casas de huéspedes y agroturismos en Virpazar y en los pueblos.',
    doveMangiare: 'Carpa y anguila del lago, vranac y kratošija.',
    comeArrivare: "Virpazar está a unos 30 minutos de Podgorica y a 30-40 minutos de Bar y Petrovac, pasando por el túnel Sozina, de peaje (unos 2,50 € por coche). El pueblo tiene también una estación en la línea de tren Podgorica-Bar, a poca distancia del muelle. A Rijeka Crnojevića se llega desde Cetinje en una media hora; la carretera panorámica entre Virpazar y Rijeka Crnojevića es estrecha y conviene hacerla de día.",
    comeSpostarsi: 'Coche y barcas.',
    periodoMigliore: 'mayo-octubre; primavera y otoño para las aves.',
    costi: "Parque nacional 5 € por persona y día, con los centros de visitantes de Vranjina y Virpazar; paseo en barca 15-30 € por persona para 2-3 horas; alquiler de kayak del parque 3-5 € la hora. Presupuesto diario por persona, orientativo: bajo 45-65 € (casa de huéspedes, comida en una taberna), medio 80-120 € (agroturismo con bodega, barca y cata), alto desde 150 € (barca privada y cena en una bodega).",
    erroriDaEvitare: ['Subir a barcas sin licencia del parque', 'Recorrer la carretera del lago por la noche: es estrecha y sin iluminación'],
    luoghi: [
      {
        nome: "Virpazar y el paseo en barca",
        testo: "El pueblo de pescadores en la orilla norte del lago, de donde salen las barcas entre nenúfares, cañaverales y pelícanos. El Parque Nacional del Lago Skadar es una de las mayores reservas de aves de Europa, con el raro pelícano ceñudo.",
        come: "En coche desde Podgorica o desde la costa, o en tren por la línea Podgorica-Bar. Las barcas salen del muelle y de las agencias del pueblo.",
        quando: "Por la mañana o al final de la tarde para ver las aves.",
        tempo: "2-3 horas",
        costo: "Barca 15-30 € por persona, más la entrada al parque, 5 €",
        url: "https://nparkovi.me/sections/30/skadarsko-jezero",
        lat: 42.2444,
        lng: 19.0903,
        consiglio: "Acordar duración, recorrido y precio antes de subir."
      },
      {
        nome: "Pavlova Strana",
        testo: "Un mirador en la carretera sobre el lago donde el río Crnojević traza una curva en herradura alrededor de una lengua de tierra verde. Es la vista más fotografiada de la zona, con las montañas de Albania al fondo en los días despejados.",
        come: "En coche desde Virpazar o desde Rijeka Crnojevića por una carretera de montaña estrecha y llena de curvas.",
        quando: "Al final de la tarde.",
        tempo: "30 minutos",
        costo: "Gratis",
        consiglio: "El aparcamiento es pequeño: llegar pronto."
      },
      {
        nome: "Rijeka Crnojevića",
        testo: "Un pueblo junto al río, con el puente de piedra mandado construir por el príncipe Danilo en 1853 y el antiguo puerto. De aquí salen las barcas hacia el lago.",
        come: "En coche desde Cetinje, una media hora.",
        quando: "Por la mañana.",
        tempo: "1 hora y media",
        lat: 42.35,
        lng: 19.0333,
        consiglio: "Probar el pescado del lago en las tabernas junto al río."
      },
      {
        nome: "Vranjina y el centro de visitantes",
        testo: "Un pueblo sobre una colina en la parte norte del lago, al comienzo del terraplén que lleva la carretera y el tren hacia Podgorica. Alberga el centro de visitantes del parque nacional y, un poco más arriba, el monasterio de San Nicolás.",
        come: "En la carretera entre Virpazar y Podgorica, poco después del puente sobre el lago.",
        quando: "Por la mañana, antes de subir a la barca.",
        tempo: "1 hora",
        costo: "Incluido en la entrada del parque, 5 €",
        url: "https://nparkovi.me/sections/30/skadarsko-jezero",
        lat: 42.2742,
        lng: 19.1356
      },
      {
        nome: "Fortaleza de Lesendro",
        testo: "Una fortaleza del siglo XIX en un islote junto a la orilla, construida por Njegoš para controlar el lago en tiempos de las guerras con los turcos. Hoy está en ruinas y se ve desde la carretera y desde las barcas.",
        come: "Desde la carretera Virpazar-Podgorica, cerca del puente de Vranjina. Los paseos en barca pasan a su lado.",
        quando: "Todo el año, desde fuera.",
        tempo: "15 minutos",
        lat: 42.2716,
        lng: 19.1197
      },
      {
        nome: "Žabljak Crnojevića",
        testo: "Las ruinas de la capital de la dinastía Crnojević en el siglo XV, sobre una colina aislada en medio de la llanura pantanosa del lago. Murallas, una iglesia y vistas sobre los canales de alrededor.",
        come: "En coche hasta el pueblo y luego a pie por un sendero en subida; también en barca.",
        quando: "Por la mañana o al final de la tarde: en verano no hay sombra.",
        tempo: "1-2 horas",
        lat: 42.3172,
        lng: 19.1569,
        consiglio: "Calzado cerrado: el sendero es pedregoso."
      },
      {
        nome: "Monasterio de Kom",
        testo: "Un monasterio del siglo XV en un islote del lago, fundado por los señores de la familia Crnojević, con la iglesia de la Dormición y frescos del siglo XVI. Es uno de los monasterios sobre el agua a los que solo se llega en barca.",
        come: "En barca desde Virpazar o desde Rijeka Crnojevića, con los paseos por el lago que lo incluyen.",
        quando: "Por la mañana.",
        tempo: "media jornada con el paseo en barca",
        lat: 42.3101,
        lng: 19.1279
      },
      {
        nome: "Godinje",
        testo: "Un pueblo de viticultores en la orilla suroeste del lago, con casas de piedra unidas por pasadizos y bodegas subterráneas. Aquí se prueban vranac y kratošija directamente de los productores.",
        come: "En coche desde Virpazar hacia Murići, unos 15 minutos.",
        quando: "Septiembre para la vendimia; catas todo el año.",
        tempo: "1-2 horas",
        lat: 42.2211,
        lng: 19.1092,
        consiglio: "Llamar antes a la bodega: muchas son pequeñas empresas familiares."
      },
      {
        nome: "Monasterio de Starčevo",
        testo: "Un pequeño monasterio en un islote de la parte sur del lago, fundado a finales del siglo XIV y uno de los más antiguos de la zona.",
        come: "Solo en barca, con los paseos más largos desde Virpazar o desde Murići.",
        quando: "Por la mañana, con el lago en calma.",
        tempo: "media jornada con el paseo en barca",
        lat: 42.19,
        lng: 19.2111,
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Virpazar y paseo en barca por la mañana",
          "Comida con pescado del lago",
          "Pavlova Strana por la tarde",
          "Bodega familiar para una cata"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: centro de visitantes de Vranjina y Lesendro, paseo en barca desde Virpazar hasta el monasterio de Kom, cena con pescado del lago",
          "Día 2: Godinje y una bodega por la mañana, luego la carretera panorámica hacia Pavlova Strana y Rijeka Crnojevića"
        ]
      }
    ],
    zone: [
      {
        nome: "Virpazar",
        perChi: "quien quiere el lago",
        testo: "Habitaciones en casas de familia, restaurantes de pescado y salidas de las barcas a pie."
      },
      {
        nome: "Godinje y la Crmnica",
        perChi: "a quien le gusta el vino",
        testo: "Agroturismos y habitaciones en las bodegas entre los viñedos, a pocos minutos de Virpazar. Hace falta coche."
      },
      {
        nome: "Rijeka Crnojevića",
        perChi: "quien busca silencio",
        testo: "Poquísimos alojamientos, pero una luz preciosa al atardecer y nada de turismo organizado."
      }
    ],
    sapori: [
      {
        nome: "Carpa y anguila del lago",
        testo: "Guisadas o fritas, en las tabernas del lago."
      },
      {
        nome: "Vranac y kratošija",
        testo: "Los tintos de la zona de Crmnica, en bodegas familiares."
      },
      {
        nome: "Lozova rakija",
        testo: "Aguardiente de uva, a menudo casero."
      }
    ],
    attenzioni: [
      "Los precios de los paseos en barca varían mucho: preguntar el precio por persona y la duración antes.",
      "Hay muchos mosquitos de junio a agosto: llevar repelente.",
      "El parque exige entrada: comprarla solo en puntos oficiales y guardarla."
    ],
    gite: [
      {
        nome: "Podgorica",
        distanza: "unos 30 minutos",
        come: "En coche, en tren o en autobús desde Virpazar.",
        testo: "La capital, con el barrio otomano de Stara Varoš, el puente del Milenio sobre el Morača y la catedral de la Resurrección con sus mosaicos dorados."
      },
      {
        nome: "Cetinje",
        distanza: "unos 30 minutos desde Rijeka Crnojevića",
        come: "En coche.",
        testo: "La antigua capital real con el monasterio, la Biljarda de Njegoš y el Museo del rey Nikola."
      },
      {
        nome: "Monasterio de Ostrog",
        distanza: "alrededor de 1 hora y media",
        come: "En coche pasando por Podgorica y Danilovgrad.",
        testo: "El santuario blanco encajado en la roca, camino de Nikšić y del Durmitor."
      }
    ],
    faq: [
      {
        domanda: "¿Cuánto cuesta la entrada al parque del lago Skadar?",
        risposta: "5 € por persona y día en 2026, con la visita a los centros de Vranjina y Virpazar incluida. La entrada se compra en los puntos oficiales del parque y hay que guardarla durante el paseo en barca."
      },
      {
        domanda: "¿Cuánto cuesta un paseo en barca por el lago?",
        risposta: "15-30 € por persona para 2-3 horas en las barcas compartidas desde Virpazar; una barca privada cuesta más. Precio, duración y recorrido se acuerdan antes de subir."
      },
      {
        domanda: "¿Cuándo se ven los pelícanos?",
        risposta: "En primavera y otoño, las mejores épocas para las aves, temprano por la mañana o al final de la tarde. Las colonias están protegidas y se observan de lejos, mejor con prismáticos."
      },
      {
        domanda: "¿Se puede nadar en el lago?",
        risposta: "Sí, en verano, en las playas de la orilla sur como Murići o desde las barcas en los puntos permitidos. El agua es poco profunda y templada; de junio a agosto hace falta repelente de mosquitos."
      },
      {
        domanda: "¿Se puede visitar el lago en el día desde la costa?",
        risposta: "Sí: Virpazar está a 30-40 minutos de Bar y Petrovac y a unos 45 minutos de Budva. Una noche en el lago permite, eso sí, salir en barca al amanecer, la mejor hora."
      },
      {
        domanda: "¿Qué vinos se prueban en el lago?",
        risposta: "Sobre todo los tintos vranac y kratošija de la Crmnica, la zona de viñedos entre Virpazar y Godinje. Muchas bodegas familiares hacen catas con reserva."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'El viejo puente de piedra de Rijeka Crnojevića sobre el río que baja al lago Skadar',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-06-lago-di-scutari.jpg',
  },
  {
    slug: 'ostrog',
    paeseSlug: 'montenegro',
    ordine: 5,
    nome: 'Monasterio de Ostrog',
    tipologia: ['monastero', 'pellegrinaggio'],
    giorniConsigliati: 'media jornada',
    visitataPersonalmente: true,
    miaEsperienza:
      "Pasé por allí durante los diez días en Montenegro con amigos, en la carretera del lago Skadar a Žabljak: una parada en el monasterio, y luego por Nikšić hacia el Durmitor.",
    introduzione:
      'El monasterio ortodoxo más venerado de Montenegro, blanco y encajado en una pared vertical a unos 900 metros, con las reliquias de San Basilio de Ostrog.',
    percheAndarci: 'Por su posición en la roca y por la peregrinación, que atrae a fieles de todas las confesiones.',
    cosaVedere: ['El monasterio superior y la capilla-gruta con las reliquias', 'El monasterio inferior'],
    cosaFare: ['Subir a pie el último tramo desde el aparcamiento'],
    comeArrivare: "El monasterio está a alrededor de una hora en coche de Podgorica y a 40 minutos de Nikšić: se deja la carretera principal cerca de Bogetići y se sube por una carretera estrecha y empinada hasta el monasterio inferior, y luego hasta los aparcamientos bajo el superior. Sin coche hay excursiones organizadas desde la costa y desde Podgorica, o el tren hasta la estación de Ostrog, en la línea Podgorica-Nikšić, de donde sale el sendero de subida.",
    comeSpostarsi: 'A pie entre el aparcamiento y el monasterio.',
    periodoMigliore: 'todo el año; concurrido a mediados de mayo por la fiesta de San Basilio y los fines de semana de verano.',
    costi: "Entrada gratuita a los dos monasterios, donativos bienvenidos. Presupuesto diario por persona, orientativo: bajo 40-60 € (base en Nikšić o Podgorica, comida en una taberna), medio 80-120 € (hotel en la ciudad y coche), alto desde 150 €.",
    erroriDaEvitare: ['Llegar con los hombros o las piernas descubiertos', 'Fotografiar en el interior de las capillas'],
    luoghi: [
      {
        nome: "Monasterio superior",
        testo: "Una iglesia y celdas excavadas en la pared vertical de la roca, a unos 900 metros. Lo fundó a principios del siglo XVII San Basilio de Ostrog, cuyas reliquias están en la iglesia de la Presentación, labrada en la cueva.",
        come: "En coche desde Podgorica o Nikšić hasta los aparcamientos, y luego a pie. El último tramo de carretera es estrecho y empinado, con paso alterno.",
        quando: "Temprano por la mañana, para evitar las colas. El 12 de mayo, fiesta de San Basilio, está abarrotado.",
        tempo: "1-2 horas",
        costo: "Entrada gratuita, donativos",
        url: "https://manastirostrog.com/",
        lat: 42.675,
        lng: 19.0292,
        consiglio: "Ropa que cubra: hombros y rodillas tapados, nada de pantalones cortos. A las mujeres se les pide llevar falda, que prestan en la entrada."
      },
      {
        nome: "Iglesia de la Santa Cruz",
        testo: "La segunda iglesia-cueva del monasterio superior, en el piso más alto, con frescos pintados directamente sobre la roca en 1667. Desde una pequeña terraza se ve el valle del Zeta.",
        come: "Desde el patio del monasterio superior, subiendo por las escaleras interiores.",
        quando: "Después de la visita a las reliquias, cuando la cola se ha disuelto.",
        tempo: "20 minutos",
        costo: "Entrada gratuita",
        lat: 42.675,
        lng: 19.0292,
        consiglio: "Dentro no se hacen fotos: los frescos se miran en silencio."
      },
      {
        nome: "Monasterio inferior",
        testo: "Más abajo, a unos 3 km de subida del santuario, con la iglesia de la Santísima Trinidad de 1824. Muchos peregrinos paran aquí antes de subir, y aquí está el konak, la hospedería donde se puede dormir.",
        come: "En la carretera que sube al monasterio superior.",
        quando: "Todo el año.",
        tempo: "30 minutos",
        costo: "Entrada gratuita",
        consiglio: "Visitarlo a la vuelta, cuando ya se ha hecho la cola en el monasterio superior."
      },
      {
        nome: "Sendero de los peregrinos",
        testo: "El sendero por el bosque que sube del monasterio inferior al superior, atajando las curvas de la carretera. Por tradición, algunos peregrinos lo recorren descalzos.",
        come: "Sale del monasterio inferior; es empinado y en parte con escalones.",
        quando: "Temprano por la mañana, con el fresco.",
        tempo: "45 minutos-1 hora y media de subida",
        costo: "Gratis",
        consiglio: "Calzado con buena suela y agua: en verano hace calor incluso en el bosque."
      },
      {
        nome: "Danilovgrad",
        testo: "Una pequeña ciudad a orillas del río Zeta, fundada a finales del siglo XIX, en el valle bajo Ostrog. La ribera y las zonas de baño del Zeta son una parada fresca en verano.",
        come: "En la carretera principal entre Podgorica y Nikšić, a unos 20 minutos del monasterio.",
        quando: "A la hora de comer o al final de la tarde.",
        tempo: "1 hora",
        lat: 42.5516,
        lng: 19.1058
      },
      {
        nome: "Nikšić y la plaza de la Libertad",
        testo: "La segunda ciudad de Montenegro, a media hora del monasterio, con el centro del siglo XIX en torno a la gran plaza de la Libertad, bares y cafés al aire libre. Es la base más cercana para quien va a Ostrog y luego hacia el Durmitor.",
        come: "En coche o en tren desde Podgorica. El centro se recorre a pie.",
        quando: "Por la tarde-noche, cuando la plaza se llena.",
        tempo: "1-2 horas",
        lat: 42.7737,
        lng: 18.9485
      },
      {
        nome: "Palacio real de Nikšić",
        testo: "El palacio de verano del rey Nikola, construido a finales del siglo XIX en un parque del centro de Nikšić. Hoy alberga el museo de la ciudad, con colecciones arqueológicas e históricas.",
        come: "A pie desde la plaza de la Libertad, pocos minutos.",
        quando: "Por la mañana.",
        tempo: "45 minutos",
        lat: 42.7693,
        lng: 18.9516
      },
      {
        nome: "Lago de Krupac",
        testo: "Un lago artificial a pocos kilómetros de Nikšić, con playas de césped, embarcaderos y agua limpia. En verano es donde los vecinos de la ciudad van a bañarse.",
        come: "En coche desde Nikšić, unos 10 minutos hacia el noroeste.",
        quando: "De junio a septiembre.",
        tempo: "media jornada",
        lat: 42.7991,
        lng: 18.8891,
        consiglio: "Una pausa de media jornada en la carretera de Ostrog al Durmitor."
      }
    ],
    programmi: [
      {
        titolo: "media jornada",
        tappe: [
          "Salida de Podgorica por la mañana",
          "Monasterio inferior",
          "Subida al monasterio superior",
          "Comida en el camino de vuelta"
        ]
      },
      {
        titolo: "1 día, hacia el Durmitor",
        tappe: [
          "Monasterio inferior y sendero de los peregrinos al amanecer",
          "Monasterio superior con las reliquias y la iglesia de la Santa Cruz",
          "Comida en Nikšić y paseo por la plaza de la Libertad",
          "Tarde en la carretera hacia Žabljak, con parada en el lago de Krupac en verano"
        ]
      }
    ],
    zone: [
      {
        nome: "Podgorica",
        perChi: "quien visita en el día",
        testo: "Base práctica para Ostrog, en coche. Hoteles de ciudad y el aeropuerto cerca."
      },
      {
        nome: "Nikšić",
        perChi: "quien sigue hacia el Durmitor",
        testo: "Hoteles y casas de huéspedes a media hora del monasterio, con restaurantes y vida nocturna en la plaza. Desde aquí Žabljak está a alrededor de una hora y media."
      },
      {
        nome: "Konak del monasterio inferior",
        perChi: "los peregrinos",
        testo: "Dormitorios sencillos para quien llega en peregrinación, con donativo libre. No es un hotel: sin reservas en línea y con las normas del monasterio."
      }
    ],
    sapori: [
      {
        nome: "Kačamak",
        testo: "Gachas de maíz y patata con queso, en las tabernas de la zona."
      },
      {
        nome: "Queso de montaña",
        testo: "Se compra a los productores de la carretera."
      }
    ],
    attenzioni: [
      "La carretera final es estrecha y empinada, con paso alterno en algunos puntos: ceder el paso a quien sube.",
      "Es un lugar de culto: vestir cubierto, hablar bajo y no hacer fotos dentro de la capilla.",
      "En fines de semana de verano y días de fiesta el aparcamiento se llena: llegar pronto."
    ],
    gite: [
      {
        nome: "Lago Skadar",
        distanza: "alrededor de 1 hora y media",
        come: "En coche pasando por Danilovgrad y Podgorica.",
        testo: "El paseo en barca desde Virpazar entre nenúfares y aves, con comida a base de pescado del lago."
      },
      {
        nome: "Durmitor y Žabljak",
        distanza: "alrededor de 2 horas y media",
        come: "En coche por Nikšić y la meseta de Šavnik.",
        testo: "El Lago Negro, la carretera panorámica y el cañón del Tara: la continuación natural después de Ostrog."
      }
    ],
    faq: [
      {
        domanda: "¿Cómo hay que vestirse para entrar en Ostrog?",
        risposta: "Hombros y rodillas cubiertos para todos, nada de pantalones cortos ni camisetas de tirantes. A las mujeres se les pide llevar falda, que se presta en la entrada."
      },
      {
        domanda: "¿Se paga por visitar el monasterio?",
        risposta: "No, la entrada es gratuita tanto al monasterio superior como al inferior. Los donativos son bienvenidos, y se pueden comprar velas e iconos."
      },
      {
        domanda: "¿Se llega en coche hasta el monasterio superior?",
        risposta: "Sí, hasta los aparcamientos de poco más abajo, por una carretera estrecha y empinada con tramos de paso alterno. El último trozo se hace a pie; quien quiera sube desde el monasterio inferior por el sendero de los peregrinos."
      },
      {
        domanda: "¿Cuánto tiempo hace falta para Ostrog?",
        risposta: "Media jornada desde Podgorica, con una o dos horas entre los dos monasterios. Los fines de semana de verano y los días de fiesta la cola para las reliquias alarga la visita."
      },
      {
        domanda: "¿Se pueden hacer fotos dentro del monasterio?",
        risposta: "No dentro de las capillas ni en la cueva de las reliquias. Fuera, en el patio y en la terraza, se fotografía sin problema."
      },
      {
        domanda: "¿Cuándo es la fiesta de San Basilio?",
        risposta: "El 12 de mayo: es el día de mayor peregrinación, con miles de fieles y colas largas. Quien no venga por la fiesta hará mejor en elegir otro día."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'El monasterio de Ostrog engastado en la pared de roca',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-07-ostrog.jpg',
  },
  {
    slug: 'durmitor-tara',
    paeseSlug: 'montenegro',
    ordine: 6,
    nome: 'Durmitor y cañón del Tara',
    tipologia: ['patrimonio UNESCO', 'montagna', 'trekking', 'rafting'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Estuve en la parte final de los diez días en Montenegro con amigos, con base en Žabljak: el Lago Negro, la carretera panorámica y el Bobotov Kuk, y luego el puente sobre el Tara y el rafting antes de bajar hacia Podgorica.",
    introduzione:
      'Un macizo calcáreo con 48 cumbres por encima de los 2.000 metros y dieciocho lagos glaciares alrededor de Žabljak, y el cañón del Tara, de hasta 1.300 metros de profundidad, entre los más profundos de Europa.',
    percheAndarci: 'Por el Lago Negro, la carretera panorámica del Durmitor, la subida al Bobotov Kuk y el rafting en el Tara.',
    cosaVedere: ['El Lago Negro', 'La carretera panorámica y el paso de Sedlo', 'El cañón de la Sušica', 'El puente de Đurđevića Tara'],
    cosaFare: ['La vuelta al Lago Negro', 'La subida al Bobotov Kuk (2.523 m)', 'Rafting entre Brštanovica y Šćepan Polje', 'La tirolina sobre el puente del Tara'],
    doveDormire: 'Casas de huéspedes y chalés en Žabljak; campamentos de rafting a lo largo del Tara.',
    doveMangiare: 'Kačamak, cicvara, cordero bajo la campana, quesos de pastor.',
    comeArrivare: "De Podgorica a Žabljak hacen falta unas 2 horas y media-3 horas: por Nikšić y Šavnik, o hacia el norte por el tramo de autopista Smokovac-Mateševo, de peaje (unos 3,50 € por coche), y luego por Kolašin y Mojkovac. Desde Ostrog la carretera por Nikšić lleva unas 2 horas y media. Hay autobuses desde Podgorica y Nikšić, pero para la carretera panorámica, los miradores y el puente del Tara hace falta coche o una excursión.",
    comeSpostarsi: 'Coche; traslados de los operadores de rafting.',
    periodoMigliore: 'junio-septiembre para el trekking y la carretera panorámica; de noviembre a abril nieve y esquí.',
    costi: "Parque nacional del Durmitor 5 € por persona y día; barca de remos en el Lago Negro 10 € la hora; vuelta organizada del Durmitor Ring con el parque 20 € en furgoneta, 30 € en todoterreno; rafting 50-80 € con comida; tirolina en el puente del Tara 20-30 €. Presupuesto diario por persona, orientativo: bajo 45-65 € (casa de huéspedes o camping, cocina de montaña), medio 80-130 € (chalé u hotel pequeño y rafting), alto desde 180 €.",
    erroriDaEvitare: [
      'Salir tarde hacia el Bobotov Kuk: las tormentas de la tarde son frecuentes',
      'Recorrer la carretera panorámica fuera de temporada o con niebla',
      'Elegir el rafting más barato sin comprobar equipo y guías',
    ],
    luoghi: [
      {
        nome: "Lago Negro (Crno jezero)",
        testo: "Un lago glaciar entre pinos y las paredes del Međed, a 1.416 metros y a 3 km de Žabljak. La vuelta al lago es un sendero fácil, con vistas a las cumbres.",
        come: "Desde el centro de Žabljak a pie (unos 3 km), o en coche hasta el aparcamiento. Entrada al parque con billete.",
        quando: "Por la mañana, cuando el lago está en calma y refleja las montañas.",
        tempo: "1-2 horas para la vuelta",
        costo: "5 € con la entrada al parque; barca de remos 10 € la hora; aparcamiento 1 € la hora",
        url: "https://nparkovi.me/sections/27/durmitor",
        lat: 43.1433,
        lng: 19.0875,
        consiglio: "Llevar una chaqueta: incluso en verano refresca por la noche."
      },
      {
        nome: "Carretera panorámica y paso de Sedlo",
        testo: "El anillo de unos 80 km alrededor del macizo, entre cañones, mesetas y pastos con pastores, que cruza el paso de Sedlo a unos 1.900 metros. Es la manera de ver el Durmitor sin caminar.",
        come: "En coche desde Žabljak en un sentido u otro; carretera estrecha y sin quitamiedos en muchos tramos. El parque organiza también la vuelta en furgoneta o en todoterreno.",
        quando: "De junio a octubre, con buen tiempo.",
        tempo: "media jornada con las paradas",
        costo: "Gratis en coche; vuelta organizada por el parque 20 € en furgoneta, 30 € en todoterreno",
        consiglio: "Llenar el depósito en Žabljak: en el anillo no hay gasolineras."
      },
      {
        nome: "Bobotov Kuk",
        testo: "La cumbre más alta del macizo del Durmitor, 2.523 metros. La excursión es larga y requiere un día, con algunos pasos expuestos.",
        come: "Desde el paso de Sedlo, unas 6-7 horas ida y vuelta. Con un guía local en caso de duda; el parque ofrece guías por 40 € 4 horas y 80 € 8 horas.",
        quando: "Julio-septiembre; antes la nieve sigue en las canales.",
        tempo: "jornada completa",
        lat: 43.1281,
        lng: 19.0347,
        consiglio: "Salir al amanecer: las tormentas de la tarde son frecuentes."
      },
      {
        nome: "Savin Kuk",
        testo: "Una cumbre de 2.313 metros sobre Žabljak, con el telesilla que en invierno da servicio a las pistas de esquí y en verano acerca a los excursionistas a la cima. Desde arriba se ven el Lago Negro y la meseta.",
        come: "En coche o a pie desde Žabljak hasta la base de los remontes, a pocos kilómetros del pueblo.",
        quando: "En invierno para esquiar, en verano para las excursiones.",
        tempo: "media jornada",
        lat: 43.1222,
        lng: 19.0808
      },
      {
        nome: "Lago de Zminje",
        testo: "Un pequeño lago en el bosque de abetos al oeste de Žabljak, más tranquilo que el Lago Negro y al que se llega por un sendero corto y llano.",
        come: "Desde la carretera de Šavnik, por un breve sendero en el bosque.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        lat: 43.1555,
        lng: 19.0701,
        consiglio: "Una buena alternativa cuando el Lago Negro está lleno."
      },
      {
        nome: "Cañón del Sušica",
        testo: "Una garganta estrecha y profunda en el lado occidental del Durmitor, con el fondo verde y un pequeño lago. La carretera panorámica baja hasta el fondo del valle con curvas y túneles excavados en la roca.",
        come: "En la carretera panorámica; desde el mirador sobre la garganta o bajando en coche hasta el fondo.",
        quando: "De junio a septiembre.",
        tempo: "1 hora",
        lat: 43.1853,
        lng: 18.9995
      },
      {
        nome: "Mirador de Ćurevac",
        testo: "Un mirador a unos 1.600 metros sobre el cañón del Tara, a pocos kilómetros de Žabljak, donde la garganta se abre cientos de metros más abajo.",
        come: "En coche desde Žabljak hacia Tepca y luego un breve tramo a pie.",
        quando: "Al final de la tarde, con la luz rasante en el cañón.",
        tempo: "1 hora",
        lat: 43.2006,
        lng: 19.0933,
        consiglio: "Quien no hace rafting ve el Tara desde arriba precisamente aquí."
      },
      {
        nome: "Cañón del Tara",
        testo: "Con sus 1.300 metros de profundidad máxima es uno de los más profundos de Europa. El río ha excavado paredes verticales cubiertas de pinos, y el tramo entre Brštanovica y Šćepan Polje, 18 km de rápidos moderados, es el del rafting.",
        come: "Se contempla desde los miradores de la carretera y se baja al río con las excursiones de rafting desde Brštanovica.",
        quando: "Rafting de primavera a principios de otoño, con más agua en primavera.",
        tempo: "media jornada para el rafting",
        costo: "Rafting 50-80 € con comida",
        lat: 43.2508,
        lng: 19.0085,
        consiglio: "Elegir operadores con licencia, chaleco y casco."
      },
      {
        nome: "Puente de Đurđevića Tara",
        testo: "Un puente de hormigón de cinco arcos, de 365 metros de largo, con la calzada a unos 172 metros sobre el río, terminado en 1940. Durante la guerra los partisanos volaron uno de los arcos.",
        come: "En la carretera de Žabljak hacia Pljevlja y Mojkovac, una media hora. La tirolina es de pago.",
        quando: "Por la mañana.",
        tempo: "45 minutos",
        costo: "Puente gratis; tirolina 20-30 €",
        lat: 43.1504,
        lng: 19.2952,
        consiglio: "Desde aquí se ve el cañón desde arriba y se puede hacer la tirolina."
      },
      {
        nome: "Monasterio de Dobrilovina",
        testo: "Un monasterio ortodoxo del siglo XVI a orillas del Tara, en el valle entre el puente de Đurđevića Tara y Mojkovac, con frescos del siglo XVII.",
        come: "En coche desde el puente de Đurđevića Tara hacia Mojkovac.",
        quando: "Por la mañana o a primera hora de la tarde.",
        tempo: "30 minutos",
        costo: "Entrada gratuita",
        lat: 43.0278,
        lng: 19.4008
      },
      {
        nome: "Monasterio de Morača",
        testo: "Fundado en 1252 en el cañón del Morača, con la iglesia de la Asunción y frescos de los siglos XIII y XVII. Es la parada natural en la carretera de Kolašin a Podgorica.",
        come: "En la carretera principal Kolašin-Podgorica, con aparcamiento delante de la entrada. Ropa que cubra.",
        quando: "De día, en el camino de vuelta hacia el sur.",
        tempo: "45 minutos",
        costo: "Entrada gratuita",
        lat: 42.7681,
        lng: 19.3917
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Lago Negro por la mañana",
          "Comida en Žabljak",
          "Carretera panorámica del Sedlo",
          "Mirador del cañón del Tara"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Lago Negro y carretera del Sedlo",
          "Día 2: puente de Đurđevića Tara y rafting entre Brštanovica y Šćepan Polje"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Lago Negro por la mañana, lago de Zminje y mirador de Ćurevac al atardecer",
          "Día 2: Bobotov Kuk desde el paso de Sedlo para quien camina, o el anillo panorámico con el cañón del Sušica",
          "Día 3: puente de Đurđevića Tara y rafting, luego bajada hacia el sur con parada en el monasterio de Morača"
        ]
      }
    ],
    zone: [
      {
        nome: "Žabljak",
        perChi: "quien quiere el Durmitor",
        testo: "El pueblo está a unos 1.450 metros: casas de huéspedes, chalés de madera, restaurantes y salidas de senderos a pocos minutos. Frío por la noche incluso en verano.",
        fascia: "40-90 €"
      },
      {
        nome: "Alrededor del Lago Negro",
        perChi: "quien viaja con tienda",
        testo: "Campings en el borde del bosque, a pie del lago y de los senderos. En el parque una parcela cuesta 3 € al día."
      },
      {
        nome: "A lo largo del Tara",
        perChi: "quien hace rafting",
        testo: "Campamentos y bungalós sencillos cerca de la salida del rafting y en Šćepan Polje, lejos del pueblo."
      }
    ],
    sapori: [
      {
        nome: "Kačamak",
        testo: "Gachas de maíz y patata con queso y nata."
      },
      {
        nome: "Cicvara",
        testo: "Crema de harina de maíz, queso y nata agria."
      },
      {
        nome: "Cordero bajo la campana",
        testo: "Cordero y patatas cocinados bajo una cúpula de hierro cubierta de brasas; se encarga con antelación."
      },
      {
        nome: "Quesos de pastos de montaña",
        testo: "Elaborados en cabañas de altura y vendidos en Žabljak."
      }
    ],
    attenzioni: [
      "El tiempo en montaña cambia rápido: salir temprano y llevar capas y chaqueta impermeable.",
      "Las carreteras de montaña pueden estar cerradas por nieve en invierno.",
      "Operadores de rafting: elegir empresas con material certificado y guías, y comparar precios.",
      "Rutas largas como el Bobotov Kuk no están señalizadas en todas partes: con niebla es mejor volver."
    ],
    gite: [
      {
        nome: "Kolašin y Biogradska Gora",
        distanza: "alrededor de 1 hora y media",
        come: "En coche pasando por el puente de Đurđevića Tara y Mojkovac.",
        testo: "El parque nacional de Biogradska Gora, con uno de los últimos bosques vírgenes de Europa alrededor de un lago, y el pueblo de montaña de Kolašin."
      },
      {
        nome: "Pljevlja y la mezquita de Husein Pasha",
        distanza: "alrededor de 1 hora",
        come: "En coche hacia el noreste, pasado el puente del Tara.",
        testo: "Una ciudad del interior con la mezquita otomana de Husein Pasha, del siglo XVI, y el cercano monasterio de la Santa Trinidad."
      },
      {
        nome: "Piva y el lago de Plužine",
        distanza: "alrededor de 1 hora y media",
        come: "En coche por el cañón del Piva, con túneles excavados en la roca.",
        testo: "El lago artificial verde esmeralda en el cañón del Piva y el monasterio de Piva, trasladado piedra a piedra cuando se construyó la presa."
      }
    ],
    faq: [
      {
        domanda: "¿Cuánto cuesta la entrada al parque del Durmitor?",
        risposta: "5 € por persona y día en 2026, con el centro de visitantes y los senderos didácticos incluidos. El aparcamiento del Lago Negro se paga aparte, 1 € la hora para un coche."
      },
      {
        domanda: "¿Cuándo está abierta la carretera panorámica del Durmitor?",
        risposta: "Aproximadamente de junio a octubre: el resto del año el paso de Sedlo suele estar nevado. Es estrecha y sin quitamiedos en muchos tramos, así que se recorre solo de día y con buen tiempo."
      },
      {
        domanda: "¿Es difícil el Bobotov Kuk?",
        risposta: "No tiene dificultades técnicas, pero son 6-7 horas ida y vuelta desde el paso de Sedlo, con un desnivel importante y algunos tramos expuestos. Hay que salir al amanecer para evitar las tormentas de la tarde."
      },
      {
        domanda: "¿Cuánto cuesta el rafting en el Tara?",
        risposta: "Aproximadamente 50-80 € por persona para el tramo clásico entre Brštanovica y Šćepan Polje, normalmente con comida y traslados. Conviene un operador con licencia que dé chaleco y casco."
      },
      {
        domanda: "¿Cuántos días hacen falta para el Durmitor?",
        risposta: "Dos días bastan para el Lago Negro, la carretera panorámica y el puente del Tara con el rafting. Con tres se añade la subida al Bobotov Kuk u otra excursión."
      },
      {
        domanda: "¿Hace frío en Žabljak en verano?",
        risposta: "Los días son suaves, pero el pueblo está a unos 1.450 metros y por la noche refresca incluso en agosto. Hacen falta una sudadera y una chaqueta impermeable para las tormentas."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'La meseta de Žabljak vista desde lo alto, con las montañas del Durmitor en el horizonte',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-08-durmitor-tara.jpg',
  },
]
