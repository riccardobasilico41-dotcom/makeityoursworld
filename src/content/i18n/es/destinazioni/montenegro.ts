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
    comeArrivare: 'Aeropuerto de Tivat a 15 minutos; Dubrovnik a aproximadamente una hora y media con la frontera; Podgorica a 1 hora y media.',
    comeSpostarsi: 'Coche, autobuses locales por la orilla, barcas.',
    periodoMigliore: 'junio y septiembre; en julio y agosto multitudes y cruceros.',
    costi: 'Murallas unos 15 € en temporada, en efectivo; ferri de Kamenari unos 5 € por el coche.',
    erroriDaEvitare: [
      'Visitar Kotor a media jornada en los días con más cruceros',
      'Subir a las murallas con calor y sin agua',
      'Dormir en la ciudad vieja con coche: los aparcamientos son pocos y caros',
    ],
    luoghi: [
      {
        nome: "Casco antiguo de Kotor",
        testo: "Un laberinto de callejas medievales dentro de murallas construidas y ampliadas durante siglos, sobre todo por los venecianos: patrimonio de la UNESCO. Plazas diminutas, iglesias románicas y la catedral de San Trifón, consagrada en 1166. Los gatos están por todas partes, y la ciudad los ha convertido en un símbolo.",
        come: "Se llega en coche o autobús a los aparcamientos fuera de las murallas y se entra por la Puerta del Mar. Se visita a pie sin guía.",
        quando: "A primera hora o por la tarde. En las horas centrales, con cruceros en puerto, las calles se llenan.",
        tempo: "2-3 horas",
        consiglio: "Perderse por las calles sin mapa: la ciudad es pequeña y siempre se encuentra la salida."
      },
      {
        nome: "Fortaleza de San Juan",
        testo: "Las murallas suben por la montaña hasta la fortaleza, a unos 280 metros de altura. Desde arriba se ve toda la bahía, con forma de fiordo.",
        come: "El sendero parte del casco antiguo y son escalones irregulares. Calzado cerrado y agua.",
        quando: "A la apertura o a última hora de la tarde, nunca en las horas de calor del verano. Arriba no hay sombra.",
        tempo: "1 hora y media entre subida, descanso y bajada",
        costo: "Entrada de pago, precios en la web oficial; mejor llevar efectivo.",
        consiglio: "Entrar solo por los accesos oficiales del casco antiguo: los huecos no oficiales en las murallas se están cerrando o vigilando."
      },
      {
        nome: "Perast y los islotes",
        testo: "Un pueblo barroco en una sola hilera de palacios sobre el agua. Delante hay dos islotes: la Virgen de las Rocas, artificial, y San Jorge, con su iglesia.",
        come: "Desde Kotor se llega en coche o autobús por la carretera de la costa. Desde el muelle salen las barcas de los pescadores hacia los islotes, una travesía de pocos minutos.",
        quando: "Mañana o final de la tarde. Las barcas salen cuando están llenas.",
        tempo: "2-3 horas con la travesía",
        consiglio: "Fijar el precio de la barca antes de subir, ida y vuelta juntas."
      },
      {
        nome: "Risan y los mosaicos romanos",
        testo: "La antigua Rhizon, considerada el asentamiento más antiguo de las Bocas de Kotor. De época romana quedan los mosaicos del suelo de una villa, el resto más valioso de la ciudad antigua.",
        come: "En la carretera de Kotor a Herceg Novi, en la parte más interior de la bahía. La visita dura pocos minutos.",
        quando: "Todo el año, por la mañana.",
        tempo: "30 minutos",
        consiglio: "Parada breve de camino a Perast, no un día entero."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Kotor a la apertura, con la subida a la fortaleza",
          "Comida en el casco antiguo",
          "Perast y barca a la Virgen de las Rocas por la tarde",
          "Atardecer en el paseo de Dobrota"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Kotor, murallas y fortaleza por la mañana, casco antiguo por la tarde",
          "Día 2: Risan, Perast y paseo en barca por los islotes, luego Prčanj y Dobrota"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo de Kotor",
        perChi: "para quien busca ambiente",
        testo: "Se duerme dentro de las murallas, a pie de todo. De día es ruidoso por los cruceristas y por la noche los locales cierran tarde. Los coches no entran: se deja el coche fuera."
      },
      {
        nome: "Dobrota, Muo y Prčanj",
        perChi: "para quien viaja en coche",
        testo: "En la orilla, a pocos kilómetros de Kotor, con aparcamiento más fácil y menos gente. Al centro se llega a pie por la orilla o en autobús local."
      },
      {
        nome: "Perast",
        perChi: "para quien busca silencio",
        testo: "Pocos hoteles y palacios convertidos en habitaciones. A última hora de la tarde, cuando se van los grupos, el pueblo queda casi vacío. Pocos restaurantes."
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
    introduzione:
      'La montaña símbolo de Montenegro, sobre la bahía, con el mausoleo del príncipe-obispo y poeta Njegoš en la cima, y la antigua capital real de Cetinje a sus pies.',
    percheAndarci:
      'Por la carretera de curvas desde Kotor, el jamón de Njeguši, la vista desde el mausoleo y la Cetinje de las embajadas.',
    cosaVedere: ['Las veinticinco curvas sobre Kotor', 'El pueblo de Njeguši', 'El mausoleo de Njegoš en el Jezerski vrh', 'El monasterio y el palacio del rey Nicolás en Cetinje'],
    cosaFare: ['Probar pršut y queso en Njeguši', 'Subir los 461 escalones del mausoleo'],
    doveDormire: 'Casas de huéspedes y pequeños hoteles en Cetinje.',
    doveMangiare: 'Pršut, queso njeguški y njeguški steak en las trattorie de Njeguši.',
    comeArrivare: 'Desde Kotor en coche por las curvas, aproximadamente 1 hora hasta Njeguši.',
    comeSpostarsi: 'Coche.',
    periodoMigliore: 'mayo-octubre; en invierno la carretera del mausoleo puede estar nevada.',
    costi: 'Entrada al parque nacional y al mausoleo, pocos euros cada una.',
    erroriDaEvitare: ['Afrontar las curvas con una autocaravana grande o de noche', 'Subir con las nubes bajas: la vista desaparece'],
    luoghi: [
      {
        nome: "Carretera de las 25 curvas",
        testo: "La antigua carretera austrohúngara que sube de Kotor al Lovćen con 25 curvas numeradas. En pocos kilómetros se sube del nivel del mar a la meseta de Njeguši, con la bahía cada vez más pequeña.",
        come: "En coche desde Kotor. Carretera estrecha con muchos autocares.",
        quando: "Por la mañana, para tener luz sobre la bahía y menos tráfico.",
        tempo: "1 hora con paradas",
        consiglio: "Los miradores son pocos y pequeños: parar solo donde sea seguro."
      },
      {
        nome: "Njeguši",
        testo: "El pueblo de origen de la dinastía Petrović-Njegoš, en las laderas del Lovćen. Aquí se come el jamón ahumado y el queso que hicieron famosa la zona.",
        come: "En la carretera entre Kotor y el Lovćen. Se come en una de las tabernas.",
        quando: "Hora de comer, todo el año.",
        tempo: "1 hora",
        consiglio: "El pršut se vende también entero o en lonchas al vacío para llevar a casa."
      },
      {
        nome: "Mausoleo de Njegoš",
        testo: "En lo alto del Jezerski vrh, a 1.657 metros, la tumba del príncipe-obispo y poeta Petar II Petrović-Njegoš. Se suben 461 escalones excavados en la roca. Desde la terraza se ven la bahía, el lago Skadar y, en días claros, el Adriático.",
        come: "En coche hasta el aparcamiento, el último tramo a pie tras el túnel.",
        quando: "A primera hora o al final de la tarde. En invierno la carretera puede cerrarse por nieve.",
        tempo: "1 hora y media",
        consiglio: "Mirar el tiempo: con nubes bajas no se ve nada."
      },
      {
        nome: "Cetinje",
        testo: "La antigua capital histórica de Montenegro, con palacios de embajadas del siglo XIX y el pequeño palacio del rey Nicolás. El monasterio de Cetinje guarda reliquias de San Pedro y el Museo Nacional tiene la Biljarda, donde vivió Njegoš.",
        come: "En coche desde Njeguši, bajando del Lovćen. En la ciudad se camina.",
        quando: "Por la mañana. Horarios y días de cierre de los museos en la web oficial.",
        tempo: "2-3 horas",
        consiglio: "El Museo del rey Nikola, la Biljarda y el monasterio están a pocos minutos a pie unos de otros: medio día basta para todos."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Subida por las 25 curvas desde Kotor",
          "Comida en Njeguši",
          "Mausoleo de Njegoš",
          "Cetinje por la tarde y regreso por la carretera de Budva"
        ]
      }
    ],
    zone: [
      {
        nome: "Cetinje",
        perChi: "para tener base lejos del mar",
        testo: "Ciudad universitaria y tranquila, a un trayecto en coche de Kotor y Budva. Pocos hoteles, poca vida nocturna."
      },
      {
        nome: "Kotor",
        perChi: "para una excursión de un día",
        testo: "Más cómodo por horarios y restaurantes. Se sube en coche por la mañana y se vuelve por la tarde."
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
    introduzione:
      'La costa central de Montenegro, con la ciudad vieja fortificada de Budva, el islote-resort de Sveti Stefan y las bahías hasta Petrovac.',
    percheAndarci: 'Para unos días de mar, eligiendo las bahías más tranquilas al sur de Budva.',
    cosaVedere: ['La ciudad vieja de Budva', 'Sveti Stefan desde el mirador', 'Las playas de Drobni pijesak y Petrovac'],
    cosaFare: ['Baños en las bahías entre Budva y Petrovac', 'Una noche en la ciudad vieja de Budva'],
    doveDormire: 'Petrovac y Pržno para la tranquilidad, Budva para la vida nocturna.',
    doveMangiare: 'Pescado y cocina mediterránea; konobe en las bahías.',
    comeArrivare: 'Desde Kotor unos 40 minutos, desde Tivat 30 minutos.',
    comeSpostarsi: 'Coche, autobuses costeros, taxi.',
    periodoMigliore: 'junio y septiembre.',
    costi: 'Tumbonas y sombrillas 15-30 € al día en temporada alta.',
    erroriDaEvitare: ['Esperar una Budva tranquila en agosto', 'Contar con visitar la isla de Sveti Stefan: el hotel está cerrado desde 2020 y la isla no se visita'],
    luoghi: [
      {
        nome: "Casco antiguo de Budva",
        testo: "Un núcleo fortificado en una península, con murallas en gran parte de época veneciana, una ciudadela y calles de piedra. Reconstruido en gran parte tras el terremoto de 1979.",
        come: "A pie desde los aparcamientos de la Riviera. La Ciudadela tiene entrada de pago por las vistas.",
        quando: "Por la tarde-noche para el ambiente, por la mañana para la luz sobre el mar.",
        tempo: "1-2 horas",
        consiglio: "Evitar los restaurantes cuyos camareros invitan a entrar desde la calle."
      },
      {
        nome: "Sveti Stefan",
        testo: "Un islote-pueblo de piedra unido a tierra por un istmo, convertido en resort de lujo. El hotel que lo ocupa está cerrado desde 2020 y la isla no se visita. La famosa estampa se ve desde el mirador de la carretera sobre la bahía.",
        come: "Poco al sur de Budva, en la carretera de la costa. Se contempla desde el mirador y desde las playas a ambos lados del istmo; comprobar allí si el hotel ha reabierto.",
        quando: "Final de la tarde, con luz dorada sobre las piedras.",
        tempo: "30 minutos de parada panorámica",
        consiglio: "Se puede bajar a las playas a los lados del istmo, pero en verano son de pago."
      },
      {
        nome: "Petrovac",
        testo: "Una bahía más recogida al sur de Budva, hacia Bar, con paseo marítimo, fuerte veneciano y un par de islotes. Más tranquila y familiar.",
        come: "Desde Budva en coche o en el autobús costero.",
        quando: "Junio y septiembre por el mar y los precios más bajos.",
        tempo: "media jornada",
        consiglio: "Buena base para quien quiere mar sin la vida nocturna de Budva."
      },
      {
        nome: "Playa de Mogren",
        testo: "Dos pequeñas playas, Mogren 1 y Mogren 2, bajo los acantilados justo fuera del casco antiguo. Se llega por un corto sendero junto al acantilado que sale de las murallas. Es la playa más conocida cerca del centro, pero en agosto se llena pronto.",
        come: "A pie desde el casco antiguo, pocos minutos por el sendero del acantilado.",
        quando: "Temprano por la mañana en verano; junio y septiembre son más tranquilos.",
        tempo: "medio día",
        consiglio: "Tumbonas y sombrillas son de pago: quien quiera extender la toalla debe llegar pronto para encontrar la zona libre."
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
      }
    ],
    zone: [
      {
        nome: "Budva",
        perChi: "para vida nocturna",
        testo: "Hoteles, locales y playas llenas. Más ruido y tráfico en verano."
      },
      {
        nome: "Petrovac y Pržno",
        perChi: "para tranquilidad",
        testo: "Bahías más pequeñas, restaurantes frente al mar, menos locales."
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
    introduzione:
      'El lago más grande de los Balcanes, compartido con Albania, parque nacional con unas 270 especies de aves, canales de nenúfares, monasterios en islotes y los viñedos de Crmnica.',
    percheAndarci: 'Para un paseo en barca entre canales y pueblos de pescadores, el mirador de Pavlova Strana y los vinos del lago.',
    cosaVedere: ['Virpazar y los canales de nenúfares', 'El mirador de Pavlova Strana', 'El pueblo de Rijeka Crnojevića', 'Los monasterios en los islotes'],
    cosaFare: ['Un paseo en barca desde Virpazar', 'Una degustación en una bodega familiar', 'Observación de aves con guía'],
    doveDormire: 'Casas de huéspedes y agroturismos en Virpazar y en los pueblos.',
    doveMangiare: 'Carpa y anguila del lago, vranac y kratošija.',
    comeArrivare: 'Desde Petrovac o Bar unos 30-40 minutos, desde Podgorica 30 minutos.',
    comeSpostarsi: 'Coche y barcas.',
    periodoMigliore: 'mayo-octubre; primavera y otoño para las aves.',
    costi: 'Parque nacional unos 5 €; paseo en barca 15-30 € por persona.',
    erroriDaEvitare: ['Subir a barcas sin licencia del parque', 'Recorrer la carretera del lago por la noche: es estrecha y sin iluminación'],
    luoghi: [
      {
        nome: "Virpazar y el paseo en barca",
        testo: "El pueblo de pescadores en la orilla norte del lago, de donde salen las barcas entre nenúfares, cañaverales y pelícanos. El Parque Nacional del Lago Skadar es una de las mayores reservas de aves de Europa.",
        come: "En coche desde Podgorica o desde la costa. Las barcas salen del muelle y de las agencias del pueblo.",
        quando: "Mañana o final de la tarde para ver aves.",
        tempo: "2-3 horas",
        consiglio: "Acordar duración, ruta y precio antes de subir."
      },
      {
        nome: "Pavlova Strana",
        testo: "Un mirador en la carretera sobre el lago donde el río Crnojević traza un meandro en herradura alrededor de una lengua de tierra verde. Es el panorama más fotografiado de la zona, con las montañas de Albania al fondo en los días claros.",
        come: "En coche desde Virpazar por una carretera de montaña estrecha y con curvas.",
        quando: "Final de la tarde.",
        tempo: "30 minutos",
        consiglio: "El aparcamiento es pequeño: llegar pronto."
      },
      {
        nome: "Rijeka Crnojevića",
        testo: "Un pueblo en el río con el puente de piedra encargado por el príncipe Danilo en 1853 y el viejo puerto. De aquí salen las barcas al lago.",
        come: "En coche desde Cetinje.",
        quando: "Mañana.",
        tempo: "1 hora y media",
        consiglio: "Probar el pescado de lago en las tabernas del río."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Virpazar y paseo en barca por la mañana",
          "Comida con pescado de lago",
          "Pavlova Strana por la tarde",
          "Bodega familiar para una cata"
        ]
      }
    ],
    zone: [
      {
        nome: "Virpazar",
        perChi: "para estar en el lago",
        testo: "Habitaciones en casas familiares, restaurantes de pescado y salidas de barcas a pie."
      },
      {
        nome: "Rijeka Crnojevića",
        perChi: "para el silencio",
        testo: "Muy pocos alojamientos, pero luz de atardecer preciosa y nada de turismo organizado."
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
    introduzione:
      'El monasterio ortodoxo más venerado de Montenegro, blanco y encajado en una pared vertical a unos 900 metros, con las reliquias de San Basilio de Ostrog.',
    percheAndarci: 'Por su posición en la roca y por la peregrinación, que atrae a fieles de todas las confesiones.',
    cosaVedere: ['El monasterio superior y la capilla-gruta con las reliquias', 'El monasterio inferior'],
    cosaFare: ['Subir a pie el último tramo desde el aparcamiento'],
    comeArrivare: 'En coche desde Podgorica o Nikšić, con el último tramo por una carretera estrecha y empinada.',
    comeSpostarsi: 'A pie entre el aparcamiento y el monasterio.',
    periodoMigliore: 'todo el año; concurrido a mediados de mayo por la fiesta de San Basilio y los fines de semana de verano.',
    costi: 'Entrada libre, se agradecen las ofrendas.',
    erroriDaEvitare: ['Llegar con los hombros o las piernas descubiertos', 'Fotografiar en el interior de las capillas'],
    luoghi: [
      {
        nome: "Monasterio superior",
        testo: "Una iglesia y celdas excavadas en la pared vertical de la roca. Fundado a principios del siglo XVII por San Basilio de Ostrog, cuyas reliquias están en la iglesia de la Presentación, dentro de la cueva.",
        come: "En coche desde Podgorica o Nikšić hasta los aparcamientos, luego a pie. El último tramo de carretera es estrecho y empinado, con paso alterno.",
        quando: "A primera hora, para evitar colas. El 12 de mayo, fiesta de San Basilio, está muy concurrido.",
        tempo: "1-2 horas",
        consiglio: "Vestir cubierto: hombros y rodillas tapados, sin pantalones cortos."
      },
      {
        nome: "Monasterio inferior",
        testo: "Más abajo, a unos 3 km de subida del santuario, con la iglesia de la Santísima Trinidad de 1824. Muchos peregrinos paran aquí antes de subir.",
        come: "En la carretera que sube al monasterio superior.",
        quando: "Todo el año.",
        tempo: "30 minutos",
        consiglio: "Visitarlo a la vuelta, cuando ya se ha hecho la cola del monasterio superior."
      }
    ],
    programmi: [
      {
        titolo: "media jornada",
        tappe: [
          "Salida de Podgorica por la mañana",
          "Monasterio inferior",
          "Subida al monasterio superior",
          "Comida de regreso"
        ]
      }
    ],
    zone: [
      {
        nome: "Podgorica",
        perChi: "para visita de un día",
        testo: "Base práctica para Ostrog, en coche. El monasterio no tiene alojamiento turístico."
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
    introduzione:
      'Un macizo calcáreo con 48 cumbres por encima de los 2.000 metros y dieciocho lagos glaciares alrededor de Žabljak, y el cañón del Tara, de hasta 1.300 metros de profundidad, entre los más profundos de Europa.',
    percheAndarci: 'Por el Lago Negro, la carretera panorámica del Durmitor, la subida al Bobotov Kuk y el rafting en el Tara.',
    cosaVedere: ['El Lago Negro', 'La carretera panorámica y el paso de Sedlo', 'El cañón de la Sušica', 'El puente de Đurđevića Tara'],
    cosaFare: ['La vuelta al Lago Negro', 'La subida al Bobotov Kuk (2.523 m)', 'Rafting entre Brštanovica y Šćepan Polje', 'La tirolina sobre el puente del Tara'],
    doveDormire: 'Casas de huéspedes y chalés en Žabljak; campamentos de rafting a lo largo del Tara.',
    doveMangiare: 'Kačamak, cicvara, cordero bajo la campana, quesos de pastor.',
    comeArrivare: 'Desde Podgorica unas 2 horas y media-3 horas, vía Nikšić o vía Mateševo.',
    comeSpostarsi: 'Coche; traslados de los operadores de rafting.',
    periodoMigliore: 'junio-septiembre para el trekking y la carretera panorámica; de noviembre a abril nieve y esquí.',
    costi: 'Parque nacional unos 5 €; rafting 50-80 € con comida; tirolina 20-30 €.',
    erroriDaEvitare: [
      'Salir tarde hacia el Bobotov Kuk: las tormentas de la tarde son frecuentes',
      'Recorrer la carretera panorámica fuera de temporada o con niebla',
      'Elegir el rafting más barato sin comprobar equipo y guías',
    ],
    luoghi: [
      {
        nome: "Lago Negro (Crno jezero)",
        testo: "Un lago glaciar entre pinos y las paredes del Međed, a 1.416 metros y a 3 km de Žabljak. La vuelta al lago es un sendero fácil con vistas a las cumbres.",
        come: "A pie desde el centro de Žabljak (unos 3 km), o en coche hasta el aparcamiento. Entrada al parque con billete.",
        quando: "Por la mañana, cuando el lago está en calma y refleja las montañas.",
        tempo: "1-2 horas para la vuelta",
        consiglio: "Llevar chaqueta: incluso en verano las tardes son frescas."
      },
      {
        nome: "Bobotov Kuk",
        testo: "La cima más alta del macizo del Durmitor, 2.523 metros. Excursión larga que lleva un día, con algunos pasos expuestos.",
        come: "Desde el paso de Sedlo, varias horas de camino ida y vuelta. Con guía local si hay dudas.",
        quando: "Julio-septiembre; antes queda nieve en los canales.",
        tempo: "día completo",
        consiglio: "Salir al amanecer: las tormentas de la tarde son frecuentes."
      },
      {
        nome: "Cañón del Tara",
        testo: "Con 1.300 metros de profundidad máxima es de los más profundos de Europa. El río ha excavado paredes verticales cubiertas de pinos.",
        come: "Se ve desde los miradores de la carretera y se baja al río con las excursiones de rafting desde Brštanovica.",
        quando: "Rafting de primavera a principios de otoño, con más agua en primavera.",
        tempo: "media jornada para el rafting",
        consiglio: "Quien no haga rafting puede parar en los miradores de la carretera Žabljak-Šćepan Polje."
      },
      {
        nome: "Puente de Đurđevića Tara",
        testo: "Un puente de hormigón de cinco arcos, de 365 metros de largo, con la calzada a unos 172 metros sobre el río, terminado en 1940. Durante la guerra los partisanos volaron uno de los arcos.",
        come: "En la carretera de Žabljak hacia Pljevlja y Mojkovac. La tirolina es de pago.",
        quando: "Por la mañana.",
        tempo: "45 minutos",
        consiglio: "Desde aquí se mira el cañón desde arriba y se puede hacer la tirolina."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Lago Negro por la mañana",
          "Comida en Žabljak",
          "Carretera panorámica de Sedlo",
          "Mirador del cañón del Tara"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Lago Negro y carretera de Sedlo",
          "Día 2: Puente de Đurđevića Tara y rafting entre Brštanovica y Šćepan Polje"
        ]
      }
    ],
    zone: [
      {
        nome: "Žabljak",
        perChi: "para el Durmitor",
        testo: "El pueblo está a unos 1.450 metros: casas de huéspedes, restaurantes y senderos a pocos minutos. Frío de noche incluso en verano."
      },
      {
        nome: "A lo largo del Tara",
        perChi: "para hacer rafting",
        testo: "Campamentos y alojamientos sencillos cerca de la salida del rafting, lejos del pueblo."
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
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'La meseta de Žabljak vista desde lo alto, con las montañas del Durmitor en el horizonte',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-08-durmitor-tara.jpg',
  },
]
