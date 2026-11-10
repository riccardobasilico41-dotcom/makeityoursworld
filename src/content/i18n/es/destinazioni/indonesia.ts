import type { Destinazione } from '@/lib/types'

export const destinazioniIndonesia: Destinazione[] = [
  {
    slug: 'sumatra',
    paeseSlug: 'indonesia',
    ordine: 1,
    nome: 'Sumatra',
    tipologia: ['natura', 'avventura', 'trekking'],
    giorniConsigliati: "7-10 días para recorrer el norte (Bukit Lawang, Lago Toba, Berastagi)",
    visitataPersonalmente: true,
    introduzione:
      "La puerta de entrada más salvaje del archipiélago: la selva del Gunung Leuser con sus orangutanes salvajes, el mayor lago volcánico del mundo y la cultura batak en la isla de Samosir.",
    percheAndarci:
      "Aquí el trekking por la selva está menos trillado que en otros destinos del sudeste asiático, y el momento más fuerte es el encuentro con los orangutanes.",
    cosaVedere: [
      "El Parque Nacional del Gunung Leuser en Bukit Lawang, uno de los últimos hábitats de los orangutanes de Sumatra",
      "El Lago Toba, el mayor lago volcánico del mundo, con la isla de Samosir en el centro",
      "Los pueblos batak de Samosir, con las casas tradicionales de tejado en silla de montar y las tumbas de piedra",
      "Los volcanes Sibayak y Sinabung en la zona de Berastagi",
    ],
    cosaFare: [
      "Trekking de uno o más días por la selva de Bukit Lawang para avistar orangutanes salvajes (solo con guía certificado)",
      "Paseo en barca por el Lago Toba y jornada en moto por la isla de Samosir",
      "Baño en las aguas termales a los pies del Sibayak tras un trekking volcánico",
      "Inmersión en la cultura batak: ceremonias, artesanía, danzas Sigale-gale",
    ],
    doveDormire:
      "Guesthouses a lo largo del río Bohorok en Bukit Lawang, cómodas para salir temprano al trekking; homestays en la isla de Samosir para el Lago Toba.",
    doveMangiare:
      "Se come sencillo y casi en todas partes bien: el nasi padang (vitrinas con muchos platos ya preparados: se señala el que se quiere y se paga solo lo que se toca) es la institución local y nació precisamente aquí, en Sumatra occidental. En la zona del Lago Toba aparece el cerdo, raro en el resto de la Indonesia musulmana, porque los batak son cristianos. El café de Sumatra, bebido en los warung de la carretera a Berastagi, es muy apreciado y cuesta poco.",
    comeArrivare: "Vuelo a Medan (Kualanamu International, KNO) desde Yakarta o desde Kuala Lumpur/Singapur.",
    comeSpostarsi: "Coche privado o autobús entre Medan, Bukit Lawang, Berastagi y Lago Toba; ferri a la isla de Samosir.",
    periodoMigliore: "junio-septiembre, estación más seca para el trekking",
    costi: "entre las islas más baratas del archipiélago, sobre todo en alojamientos y trekkings guiados",
    erroriDaEvitare: [
      "Fiarse de guías no certificados para el trekking de orangutanes: el contacto cercano no regulado es peligroso tanto para los visitantes como para los animales",
      "Subestimar los tiempos de desplazamiento por carreteras de montaña a menudo en mal estado",
    ],
    confronti: [
      {
        titolo: "¿Orangutanes en Sumatra o en Borneo?",
        introduzione:
          "Los orangutanes salvajes existen solo en estas dos islas, y son especies distintas: el de Sumatra (en peligro crítico) y el de Borneo. Quien ha hecho Bukit Lawang y piensa en Borneo, o al revés, hace bien en planteárselo, porque las dos experiencias son distintas.",
        opzioni: [
          {
            nome: "Bukit Lawang, Sumatra",
            sintesi: "Trekking a pie por la selva del Gunung Leuser, buscando a los animales en lugar de esperarlos.",
            costo: "el más barato: trekkings guiados a precios contenidos, alojamientos sencillos junto al río",
            durata: "2-3 días",
            pro: [
              "Se camina dentro del bosque: el encuentro es activo, sin plataformas ni barcas",
              "Probabilidades altas, porque en la zona viven antiguos ejemplares rehabilitados ya salvajes",
              "Costes mucho más bajos que las opciones de Borneo",
              "El Leuser es uno de los pocos ecosistemas donde conviven orangutanes, tigres, rinocerontes y elefantes",
            ],
            contro: [
              "Hay un nudo ético: algunos guías atraen a los animales con comida para garantizar el avistamiento, y hay que rechazarlo de forma explícita al reservar",
              "Físicamente exigente: barro, raíces, calor y humedad altos",
              "Regulación menos estricta que en Malasia: la calidad depende mucho del guía",
              "Además de los orangutanes, la zona ofrece menos variedad de fauna visible",
            ],
            perChi: "Quien quiere buscarlos caminando, tiene un presupuesto contenido y elige el operador con atención.",
          },
          {
            nome: "Sabah, Borneo malasio",
            sintesi: "El sistema Sepilok más Kinabatangan: centro de rehabilitación con comidas a hora fija y luego cruceros por el río para los avistamientos en libertad.",
            costo: "mucho más alto: los lodges del Kinabatangan se pagan por paquete",
            durata: "4-5 días para hacer ambos con sentido",
            pro: [
              "En Sepilok el encuentro cercano está razonablemente garantizado en casi cualquier época",
              "En el Kinabatangan los orangutanes son salvajes y llegan con todo lo demás: monos narigudos, elefantes pigmeos, cocodrilos, cálaos",
              "Estándares de gestión y regulación más altos, con prácticas de alimentación declaradas",
              "En la misma isla están el bosque primario del Danum Valley y Sipadan",
            ],
            contro: [
              "Se mira desde una plataforma o desde una barca, a distancia: es menos directo",
              "Cuesta mucho más, y los traslados internos son largos",
              "En Sepilok los animales son semisalvajes y están acostumbrados al hombre",
            ],
            perChi: "Quien quiere ver también el resto de la fauna de Borneo y acepta un presupuesto más alto a cambio de mayor previsibilidad.",
          },
        ],
        raccomandazione:
          "Para el solo encuentro con los orangutanes, Sumatra da más por mucho menos: se camina, se busca, y cuesta una fracción. Borneo se elige cuando la lista es más larga (monos narigudos, elefantes pigmeos, bosque primario, Sipadan) y los orangutanes son solo uno de los motivos. Quien ya ha hecho Bukit Lawang que no cruce medio sudeste asiático para volver a verlos: que vaya a Borneo por todo lo demás, y los verá igualmente.",
      },
    ],
    miaEsperienza:
      "Es la isla que casi nadie pone en el itinerario, y se equivoca. En Bukit Lawang subimos por el barro agarrándonos a las raíces, con un calor que quitaba el aliento, y tras tres horas sin ver nada me entró la duda de haber tirado una jornada. Luego un orangután bajó a una rama a pocos metros, se quedó mirando unos segundos y volvió a comer, y la duda desapareció. Hay también una parte incómoda: algún guía atrae a los animales con comida para garantizar el avistamiento, y hay que rechazarlo de forma explícita al reservar. El Lago Toba, después, fue la descompresión: grande como una provincia, silencioso, con un ritmo que se frena solo.",
    luoghi: [
      {
        nome: "Bukit Lawang y el Gunung Leuser",
        testo: "El pueblo a orillas del río Bohorok, a las puertas del Parque Nacional del Gunung Leuser, uno de los hábitats que quedan del orangután de Sumatra. En la zona viven orangutanes antes rehabilitados y hoy salvajes. En el parque viven también el elefante, el tigre y el rinoceronte de Sumatra.",
        come: "Desde Medan en coche o minibús, unas horas según el tráfico. El trekking se hace solo con guía certificado, a pie por la selva, durante medio día o varios días.",
        quando: "En los meses más secos, cuando los senderos tienen menos barro. Salir al amanecer.",
        tempo: "2-3 días",
        consiglio: "Rechazar de forma explícita, ya al reservar, a los guías que atraen a los animales con comida."
      },
      {
        nome: "Lago Toba",
        testo: "El mayor lago volcánico del mundo, unos 1.130 km², nacido de una erupción enorme. Agua fresca, orillas verdes, pueblos y una gran isla en el centro, Samosir.",
        come: "Desde Medan en coche o autobús hasta Parapat, varias horas de carretera, luego ferri a Tuk Tuk en la isla de Samosir.",
        quando: "Todo el año, mejor por la mañana y en la estación seca.",
        tempo: "2-3 días",
        consiglio: "Tras Bukit Lawang es la descompresión ideal: ritmo lento, sin prisa."
      },
      {
        nome: "Isla de Samosir y los pueblos batak",
        testo: "Los batak toba son en su inmensa mayoría cristianos y viven en casas de tejado en forma de silla de montar con fachadas talladas.",
        come: "En scooter o coche de alquiler desde Tuk Tuk, por la carretera que rodea la isla.",
        quando: "Por la mañana. Las danzas de la marioneta Sigale-gale se representan sobre todo para los visitantes, en algunos pueblos.",
        tempo: "1 día",
        consiglio: "Alquilar una scooter y dar la vuelta a la isla con calma, parando en los pueblos."
      },
      {
        nome: "Gunung Sibayak y Berastagi",
        testo: "Un volcán activo pero tranquilo sobre el pueblo de Berastagi, con una subida de pocas horas y fumarolas en la cima. Después, aguas termales para descansar.",
        come: "Desde Berastagi a pie o en moto hasta el inicio del sendero. Mejor con guía.",
        quando: "En las primeras horas de la mañana.",
        tempo: "medio día",
        consiglio: "Terminar el trekking con un baño en las aguas termales."
      },
      {
        nome: "Medan: Istana Maimun y mercados",
        testo: "La ciudad de partida de casi todos los viajes por el norte de Sumatra. El palacio del sultán de Deli, construido entre 1887 y 1891 y aún propiedad del sultanato, y los mercados son las paradas más interesantes.",
        come: "El palacio está en el centro, en taxi o Grab.",
        quando: "Por la mañana.",
        tempo: "2 horas",
        consiglio: "No quedarse más de una noche: lo bueno está fuera de la ciudad."
      }
    ],
    programmi: [
      {
        titolo: "7 días",
        tappe: [
          "Día 1: llegada a Medan, traslado a Bukit Lawang",
          "Día 2-3: trekking en el Leuser con guía certificado",
          "Día 4: traslado a Berastagi, Sibayak",
          "Día 5-6: Lago Toba y Samosir",
          "Día 7: regreso a Medan"
        ]
      },
      {
        titolo: "10 días",
        tappe: [
          "Como los 7 días, con un día más en Bukit Lawang y dos en el Lago Toba"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Lawang",
        perChi: "quien hace el trekking",
        testo: "Casas de huéspedes a lo largo del río Bohorok. Sencillas y cómodas para salir pronto."
      },
      {
        nome: "Tuk Tuk (Samosir)",
        perChi: "quien va al Lago Toba",
        testo: "Homestays y casas de huéspedes en la península de Tuk Tuk, junto al lago. Tranquilo, bajo coste."
      },
      {
        nome: "Berastagi",
        perChi: "quien va al volcán",
        testo: "Pueblo de altura con alojamiento económico, más fresco."
      }
    ],
    sapori: [
      {
        nome: "Nasi padang",
        testo: "Arroz con muchos platos ya preparados que se traen a la mesa o se exponen en la vitrina: se elige lo que se quiere y se paga lo que se toca. Nació en Sumatra occidental."
      },
      {
        nome: "Café de Sumatra",
        testo: "Muy apreciado, bebido en los warung de la carretera de Berastagi por poco dinero."
      },
      {
        nome: "Cerdo batak",
        testo: "Alrededor del Lago Toba, porque los batak son cristianos. Raro en el resto de la Indonesia musulmana."
      },
      {
        nome: "Mie goreng",
        testo: "Fideos salteados con verduras y huevo. Casi siempre disponibles."
      }
    ],
    attenzioni: [
      "Trekking solo con guías certificados: el contacto cercano sin regular es peligroso para ti y para los orangutanes.",
      "En las carreteras de montaña los tiempos de trayecto son mucho más largos de lo que parece.",
      "El río Bohorok puede crecer con la lluvia: seguir las indicaciones locales.",
      "Ley: Indonesia tiene leyes muy severas sobre drogas. No llevar nada que no sea propio."
    ],
    esperienzeSlugs: ['trekking-oranghi-bukit-lawang'],
    tripSlugs: ['indonesia-itinerario', 'sumatra-mentawai', 'indonesia-isola-per-isola'],
    imageAlt: "El lago Toba visto desde arriba entre colinas verdes y bosque, Sumatra",
    immagine: '/images/indonesia/sumatra.jpg',
  },
  {
    slug: 'giava',
    paeseSlug: 'indonesia',
    ordine: 2,
    nome: 'Java',
    tipologia: ['cultura', 'natura', 'vulcani'],
    giorniConsigliati: "6-8 días entre Yogyakarta, Bromo e Ijen",
    visitataPersonalmente: true,
    introduzione:
      "La isla más poblada de Indonesia, corazón cultural del país con grandes templos budistas e hindúes y dos volcanes espectaculares para ver al amanecer.",
    percheAndarci:
      "Concentra en una sola isla los templos de Borobudur y Prambanan, el amanecer sobre el cráter del Bromo y el fuego azul del Ijen, experiencias muy distintas entre sí.",
    cosaVedere: [
      "Borobudur, el templo budista más grande del mundo, al amanecer",
      "Prambanan, el mayor complejo de templos hindúes de Indonesia",
      "El Gunung Bromo, con el cráter humeante rodeado del Mar de Arena",
      "El Kawah Ijen, con el lago de ácido sulfúrico turquesa y las llamas azules nocturnas",
    ],
    cosaFare: [
      "Amanecer en el Bromo en jeep 4x4 desde el mirador del Monte Penanjakan",
      "Trekking nocturno al cráter del Ijen para ver el fenómeno del «fuego azul» y a los mineros de azufre trabajando",
      "Recorrido por los templos de Yogyakarta, base ideal para Borobudur y Prambanan",
      "Curso de batik o visita a un taller tradicional en Yogyakarta",
    ],
    doveDormire:
      "Yogyakarta como base para Borobudur y Prambanan, con la zona de Prawirotaman más tranquila que Malioboro; para el Bromo se duerme en Cemoro Lawang, en el borde del cráter, y para el Ijen en Banyuwangi o en las guesthouses de Licin.",
    doveMangiare:
      "Yogyakarta es el sitio para probar el gudeg, el estofado dulce de yaca que es el plato identitario de la ciudad y que divide a quien lo prueba. Por lo demás la calle gana a los restaurantes: nasi goreng y mie goreng de los carritos de la tarde, sate ayam y el tempeh (inventado precisamente en Java), frito y comido como aperitivo. Alrededor del Bromo y del Ijen la oferta es mínima y las comidas se hacen en la guesthouse: no es el momento del viaje en que se come bien.",
    comeArrivare:
      "Vuelo a Yakarta (CGK), hub internacional del país, o directamente a Yogyakarta o Surabaya (punto de partida para Bromo/Ijen).",
    comeSpostarsi:
      "Tren entre las ciudades principales (red eficiente Yakarta-Yogyakarta-Surabaya), coche con conductor para las excursiones al Bromo y al Ijen.",
    periodoMigliore: "mayo-septiembre, cielos más limpios para el amanecer en el Bromo",
    costi: "en la media del archipiélago; los tours organizados al Bromo/Ijen tienen un coste fijo independiente de la estación",
    erroriDaEvitare: [
      "Subir al Kawah Ijen sin máscara antigás: los humos de azufre son peligrosos",
      "Subestimar el tráfico de Yakarta al planificar los desplazamientos",
    ],
    miaEsperienza:
      "Java es la parte de Indonesia que menos parece vacaciones y deja el recuerdo más nítido. El Ijen sobre todo: salimos a la una de la madrugada y subimos a oscuras con la máscara antigás puesta. Ya en el cráter, las llamas azules eran más pequeñas de lo que parecen en las fotos; lo enorme era todo lo demás. Al lado pasaban los mineros con cestas de azufre de ochenta kilos a la espalda, descalzos o casi, y allí dentro el turismo adquiere otro peso. En el Bromo ocurrió lo contrario: el amanecer desde el Penanjakan es espectacular, pero es también un aparcamiento con cientos de jeeps y filas de gente con el móvil levantado. Merece la pena igualmente, a condición de saberlo antes. Borobudur al amanecer es de las pocas cosas que aguanta su mito, pero la entrada para subir a la estructura es de aforo limitado y se agota con mucha antelación.",
    luoghi: [
      {
        nome: "Borobudur",
        testo: "El templo budista más grande del mundo, del siglo IX, con nueve plataformas superpuestas, seis cuadradas y tres circulares, 2.672 paneles en relieve y en origen 504 estatuas de Buda. Al amanecer, con la niebla sobre la llanura, es uno de los pocos lugares que está a la altura de su mito.",
        come: "Desde Yogyakarta en coche o autobús. La subida a la estructura tiene cupo, con guía y sandalias especiales: se reserva online en la web oficial con mucha antelación.",
        quando: "Al amanecer o al atardecer, con paquetes específicos de pago. La subida a la estructura se divide en franjas horarias con cupo y se agota.",
        tempo: "3 horas",
        costo: "Dos entradas distintas: el parque y la subida a la estructura, que incluye guía y sandalias upanat. Las tarifas para extranjeros son más altas que para los indonesios: precios actualizados en la web oficial.",
        url: "https://borobudurpark.com/",
        consiglio: "Reservar la entrada para subir con mucha antelación, porque el cupo es limitado."
      },
      {
        nome: "Prambanan",
        testo: "El mayor conjunto de templos hindúes de Indonesia, de mediados del siglo IX, con las torres dedicadas a Shiva, Visnú y Brahma; la de Shiva, de 47 metros, es la más alta del conjunto. Los relieves de los templos de Shiva y de Brahma narran el Ramayana.",
        come: "A las afueras de Yogyakarta, en autobús urbano o taxi. Se visita solo o con guía.",
        quando: "Por la mañana o al atardecer. Los lunes, por mantenimiento, solo se visita el parque alrededor de los templos: consultar la web oficial. Algunas noches se representa el ballet del Ramayana.",
        tempo: "2 horas",
        costo: "Los extranjeros pagan más que los indonesios: precios actualizados en la web oficial.",
        url: "https://borobudurpark.com/",
        consiglio: "Consultar las fechas del ballet: en algunos periodos se celebra al atardecer con las torres iluminadas."
      },
      {
        nome: "Kraton de Yogyakarta y Taman Sari",
        testo: "El palacio del sultán, todavía en uso, con un museo y espectáculos de gamelán. Dentro del recinto del Kraton está el Taman Sari, el «castillo de agua» construido en el siglo XVIII, con estanques y pabellones.",
        come: "A pie o en becak desde Malioboro.",
        quando: "Por la mañana. El Kraton tiene horario reducido los días de ceremonia.",
        tempo: "2 horas",
        consiglio: "Visitar ambos en el mismo paseo y luego perderse por las calles del barrio de los batik."
      },
      {
        nome: "Gunung Bromo",
        testo: "Un cráter humeante dentro de la caldera del Tengger, rodeado por el Mar de Arena. El amanecer desde el mirador de Penanjakan es una de las imágenes más famosas de Java.",
        come: "Desde Cemoro Lawang o Surabaya en jeep 4x4 reservado la noche anterior. Se sale en plena noche. La entrada se compra online en la web oficial del parque, antes de la visita.",
        quando: "Al amanecer; de abril a octubre el cielo está más despejado.",
        tempo: "medio día",
        costo: "Entrada para extranjeros que se compra online en la web del parque: las tarifas han cambiado varias veces y las fuentes no coinciden, así que hay que comprobar el importe allí. Jeep aparte.",
        url: "https://bromotenggersemeru.org/",
        consiglio: "El amanecer desde Penanjakan es espectacular pero está lleno de jeeps: ir sabiéndolo."
      },
      {
        nome: "Kawah Ijen y el fuego azul",
        testo: "El mayor lago de cráter fuertemente ácido del mundo, de un kilómetro de ancho, turquesa, y de noche las llamas azules de los gases sulfurosos que arden. En el cráter trabajan los mineros de azufre, que cargan a hombros pesos enormes.",
        come: "Desde Banyuwangi o Licin en coche hasta Paltuding, luego a pie hasta el borde del cráter y, donde está permitido, hacia el lago. Hace falta una máscara antigás de verdad. Las entradas se compran online; el parque pide además un certificado médico reciente (a menudo lo gestionan hoteles y tours).",
        quando: "La puerta de Paltuding abre a las 2 y cierra a mediodía; el fuego azul solo se ve con oscuridad, antes del amanecer. El cráter cierra un día al mes por limpieza y con mal tiempo o actividad volcánica.",
        tempo: "medio día",
        costo: "Extranjeros 100.000 IDR los días laborables y 150.000 IDR los fines de semana y festivos (2025).",
        url: "https://ayoketamannasional.kehutanan.go.id/en/taman-wisata-alam/kawah-ijen",
        consiglio: "Llevar una máscara antigás de verdad y no un pañuelo; no fotografiar a los mineros sin preguntar."
      },
      {
        nome: "Malioboro y talleres de batik",
        testo: "La calle comercial de Yogyakarta y los talleres de batik donde se puede aprender la técnica de cera y tintes.",
        come: "A pie. Los cursos se reservan en los talleres del barrio de Taman Sari.",
        quando: "Por la tarde y la noche.",
        tempo: "2-3 horas",
        consiglio: "Un curso de batik es una buena forma de ver una artesanía viva."
      }
    ],
    programmi: [
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Yogyakarta, Kraton y Taman Sari, cena en Malioboro",
          "Día 2: amanecer en Borobudur, Prambanan por la tarde",
          "Día 3: tren a Surabaya o Probolinggo, noche en Cemoro Lawang"
        ]
      },
      {
        titolo: "6-8 días",
        tappe: [
          "Días 1-3 como arriba",
          "Día 4: amanecer en el Bromo, traslado hacia Banyuwangi",
          "Día 5: Ijen de noche, descanso",
          "Días 6-8: Bali o regreso"
        ]
      }
    ],
    zone: [
      {
        nome: "Prawirotaman (Yogyakarta)",
        perChi: "quien quiere estar más tranquilo",
        testo: "Barrio de cafés y casas de huéspedes, menos caótico que Malioboro."
      },
      {
        nome: "Malioboro",
        perChi: "quien quiere el corazón turístico",
        testo: "Cerca de la estación y los puestos. Ruidoso."
      },
      {
        nome: "Cemoro Lawang",
        perChi: "quien va al Bromo",
        testo: "Pueblo en el borde del cráter, con alojamiento sencillo. Hace frío por la noche."
      },
      {
        nome: "Banyuwangi o Licin",
        perChi: "quien va al Ijen",
        testo: "Alojamiento sencillo para salir en plena noche."
      }
    ],
    sapori: [
      {
        nome: "Gudeg",
        testo: "Guiso dulce de yaca, plato identitario de Yogyakarta. Divide a quien lo prueba."
      },
      {
        nome: "Nasi goreng y mie goreng",
        testo: "Arroz y fideos salteados, de los carritos nocturnos."
      },
      {
        nome: "Sate ayam",
        testo: "Brochetas de pollo con salsa de cacahuete."
      },
      {
        nome: "Tempeh",
        testo: "Soja fermentada, inventada en Java, frita y comida como aperitivo."
      }
    ],
    attenzioni: [
      "Ijen: sin máscara antigás los humos de azufre son peligrosos.",
      "El tráfico de Yakarta hace imprevisibles los tiempos de trayecto.",
      "Bromo: acordar el precio del jeep antes de partir; el Penanjakan está lleno de gente.",
      "Los taxis no oficiales en las estaciones piden tarifas altas: usar Grab o taxis con taxímetro."
    ],
    esperienzeSlugs: ['alba-bromo-jeep'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'indonesia-isola-per-isola'],
    imageAlt: "Una cabeza de Buda de piedra de Borobudur, de espaldas, frente al valle envuelto en la niebla del amanecer, Java",
    immagine: '/images/indonesia/borobudur-buddha-nebbia-riccardo.jpg',
  },
  {
    slug: 'bali',
    paeseSlug: 'indonesia',
    ordine: 3,
    nome: 'Bali',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: "7-10 días para recorrer Ubud, el sur y al menos una de las islas cercanas",
    visitataPersonalmente: true,
    introduzione:
      "La isla más conocida del archipiélago: arrozales en terrazas, templos al borde del mar, playas de surf y una escena de vida nocturna y bienestar muy desarrollada.",
    percheAndarci:
      "En poco espacio hay almas muy distintas: la calma cultural de Ubud, el surf y la vida nocturna del sur, los acantilados de Uluwatu y Nusa Penida, a la que se llega en barco.",
    cosaVedere: [
      "Los arrozales en terrazas de Tegalalang y el bosque de los monos en Ubud",
      "El templo de Uluwatu, sobre un acantilado a pico sobre el mar",
      "Tanah Lot, el templo sobre un peñón rodeado por la marea",
      "Kelingking Beach y Angel's Billabong en Nusa Penida",
    ],
    cosaFare: [
      "Sunrise trekking en el volcán Gunung Batur",
      "Jornada (o más) en las islas Nusa Penida para Kelingking Beach y los puntos de snorkel con mantas (hay una ficha de experiencia dedicada)",
      "Surf en Canggu o Uluwatu, para todos los niveles",
      "Danza Kecak al atardecer en el templo de Uluwatu",
      "Paseo en moto entre los arrozales del interior de Ubud",
    ],
    doveDormire:
      "Ubud para la parte cultural y los arrozales, Canggu para el surf y la vida nocturna, Uluwatu para los acantilados y la calma relativa, Sanur o Nusa Dua para un ritmo más tranquilo y familiar. Dormir una noche en Nusa Penida evita la doble travesía en el día.",
    doveMangiare:
      "El error es comer solo en los cafés para extranjeros, que están por todas partes y son excelentes pero cuentan poco. El babi guling, el cochinillo asado en espetón, es el plato balinés por excelencia y se encuentra en los locales especializados que abren a la hora de comer y cierran cuando se acaba; el bebek betutu, el pato cocinado durante horas entre especias, suele pedirse el día antes. En los warung de barrio se come por pocos euros, y la calidad no tiene nada que ver con el precio.",
    comeArrivare: "Se aterriza en el aeropuerto Ngurah Rai de Denpasar (DPS), desde Europa con una escala, normalmente en Singapur, Doha, Dubái o Estambul. No hay tren ni metro: en el mostrador oficial de taxis de llegadas la tarifa es fija por zona, unos 150.000-250.000 IDR a Kuta, Seminyak o Sanur y 300.000-450.000 IDR a Ubud, que está a 1-2 horas según el tráfico; Uluwatu queda a unos 45 minutos. Grab y Gojek cuestan menos, desde el punto de recogida que indica la app. Antes de salir se pagan online el e-VOA y la tasa turística Love Bali (150.000 IDR) y se rellena la All Indonesia Arrival Card.",
    comeSpostarsi:
      "Moto de alquiler (se recomienda carné internacional, controles frecuentes) o conductor privado/Grab para los desplazamientos más largos.",
    periodoMigliore: "abril-octubre, estación seca",
    costi: "Varían mucho: es uno de los destinos indonesios con más oferta, tanto económica como de gama alta. Económico: unos 30-40 € al día con guesthouse, warungs y scooter (60.000-100.000 IDR al día). Medio: 80-120 € con villa u hotel boutique y algunos días con conductor (300.000-600.000 IDR por trayecto). Alto: más de 200 € con resort y conductor fijo. Tasa turística 150.000 IDR por persona.",
    erroriDaEvitare: [
      "Alquilar una moto sin carné internacional: los controles son frecuentes y las multas elevadas",
      "Subestimar el tráfico entre Canggu y Seminyak en las horas punta",
      "No reservar con antelación la barca a Nusa Penida en temporada alta",
    ],
    miaEsperienza:
      "Bali son dos islas distintas según dónde se duerma, y es el motivo por el que recibe juicios opuestos. El sur, entre Canggu y Seminyak, está hecho de cemento, tráfico y locales pensados para quien llega de fuera: uno se puede divertir, pero Indonesia está en otra parte. Bastan veinte kilómetros hacia el interior y reaparecen las ofrendas de flores delante de las casas, renovadas cada mañana, y los templos en uso en lugar de en exposición: la isla vuelve a ser la que se venía a buscar. Más que cualquier arrozal o playa, me quedó grabada la danza Kecak en Uluwatu al atardecer, con setenta hombres sentados en círculo que hacen toda la música con la voz. Nusa Penida, en cambio, es ya víctima de su propio éxito (Kelingking a media jornada es una cola de gente en un sendero empinado) y conviene ir en la primera barca de la mañana.",
    luoghi: [
      {
        nome: "Ubud y los arrozales de Tegalalang",
        testo: "El centro cultural de Bali, con templos, talleres, danzas y arrozales en terrazas alrededor. Tegalalang es el más fotografiado, pero el interior tiene valles menos transitados.",
        come: "Desde Denpasar o el sur en coche con conductor o en scooter: los tiempos dependen mucho del tráfico. Los arrozales se visitan a pie.",
        quando: "Por la mañana, antes de los grupos.",
        tempo: "1 día",
        costo: "Tegalalang unos 25.000 IDR, unos 1,5 €, según el acceso; columpios aparte.",
        lat: -8.4335,
        lng: 115.279,
        consiglio: "Basta alejarse un poco hacia el interior para volver a encontrar las ofrendas de flores delante de las casas y los templos en uso.",
      },
      {
        nome: "Monkey Forest de Ubud",
        testo: "Un bosque con templos y cientos de macacos. Están acostumbrados a los visitantes y roban gafas, bolsos y comida.",
        come: "A pie desde el centro de Ubud.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        costo: "Unos 130.000 IDR para adultos extranjeros desde abril de 2026, unos 7 €.",
        orari: "Todos los días, aproximadamente 9-18.",
        lat: -8.5188,
        lng: 115.2585,
        url: "https://www.monkeyforestubud.com/",
        consiglio: "No llevar comida ni objetos colgando: los macacos lo arrancan todo.",
      },
      {
        nome: "Templo de Uluwatu y danza Kecak",
        testo: "Un templo sobre un acantilado cortado a pico sobre el mar. Por la noche, en el anfiteatro, se representa la danza Kecak: decenas de hombres sentados en círculo hacen toda la música con la voz, sin instrumentos, y cuentan el Ramayana.",
        come: "Desde Canggu o Seminyak en coche o scooter; con el tráfico hay que dejar margen. Hay macacos por todas partes.",
        quando: "Al atardecer.",
        tempo: "2-3 horas",
        costo: "Templo unos 50.000 IDR, unos 3 €; Kecak unos 150.000 IDR, unos 8 €, entrada aparte.",
        orari: "La Kecak empieza cada tarde hacia las 18; en los meses de más afluencia se agotan las plazas.",
        lat: -8.8291,
        lng: 115.0849,
        consiglio: "Llegar pronto para tener buen sitio en el anfiteatro.",
      },
      {
        nome: "Tanah Lot",
        testo: "Un templo sobre un peñasco frente a la costa, rodeado por la marea. Uno de los puntos más fotografiados del atardecer en Bali.",
        come: "En coche desde Canggu, a poca distancia por la costa. Con la marea baja se llega a la base del peñasco.",
        quando: "Al atardecer, aunque está muy concurrido.",
        tempo: "1 hora y media",
        lat: -8.6212,
        lng: 115.0868,
        consiglio: "Consultar la marea: con la marea baja es más sugerente.",
      },
      {
        nome: "Amanecer en el Gunung Batur",
        testo: "Un trekking nocturno hasta la cima del volcán, 1.717 metros, para ver el amanecer sobre la caldera y el lago Batur. La subida dura unas horas y no es técnica.",
        come: "Con un guía local, en la práctica obligatorio, saliendo de Toya Bungkah o de los pueblos cercanos; muchas agencias recogen en el hotel entre las 2 y las 3 de la madrugada.",
        quando: "Salida en plena noche para estar arriba al amanecer.",
        tempo: "Media jornada",
        costo: "Permiso unos 100.000 IDR por persona, unos 5,5 €, más el guía.",
        lat: -8.242,
        lng: 115.375,
        consiglio: "Llevar chaqueta: arriba hace frío.",
      },
      {
        nome: "Tirta Empul",
        testo: "El templo de los manantiales sagrados, fundado en el siglo X, donde los balineses se bañan para purificarse bajo los caños de piedra. Se puede entrar en las piscinas con sarong, siguiendo la fila de fieles.",
        come: "Unos 30-40 minutos en coche al norte de Ubud, hacia Tampaksiring. Se combina con Tegalalang.",
        quando: "A la apertura, antes de los grupos; los días de ceremonia las piscinas pueden quedar reservadas a los fieles.",
        tempo: "1-1,5 horas",
        costo: "Unos 75.000 IDR para adultos extranjeros, unos 4 € (2026); sarong prestado o de alquiler.",
        orari: "Todos los días, aproximadamente 8-18.",
        lat: -8.4155,
        lng: 115.3153,
        consiglio: "Quien entra en el agua se salta los caños reservados a los ritos por los difuntos: los señalan los fieles y los vigilantes.",
      },
      {
        nome: "Pura Besakih",
        testo: "El «templo madre» de Bali, en las laderas del Gunung Agung a unos mil metros: un conjunto de más de veinte templos en terrazas, el más importante de la isla. En los días de fiesta se llena de procesiones.",
        come: "Una hora y media en coche desde Ubud. Se entra con el guía del templo, que se contrata en la entrada: hay que ignorar a los guías que se ofrecen por la carretera.",
        quando: "Por la mañana, cuando el Agung está libre de nubes.",
        tempo: "2 horas",
        lat: -8.3739,
        lng: 115.4517,
      },
      {
        nome: "Pura Lempuyang",
        testo: "El templo del extremo oriental de la isla, famoso por la puerta partida que enmarca el Gunung Agung, la «puerta del cielo». La foto se hace por turnos y la cola puede durar horas; los templos de más arriba, al final de una larga escalinata, están casi vacíos.",
        come: "Unas 2 horas en coche desde Ubud. Los coches privados se dejan en la terminal y un autobús lanzadera obligatorio lleva a la entrada.",
        quando: "Al amanecer, cuando la cola es más corta y el Agung se ve mejor.",
        tempo: "Media jornada con el viaje",
        costo: "Unos 100.000 IDR más 50.000 por la lanzadera de ida y vuelta, unos 8 € en total (2026), solo en efectivo; sarong incluido.",
        lat: -8.3915,
        lng: 115.6305,
        consiglio: "El reflejo «de espejo» de las fotos es un truco del fotógrafo con un cristal: no hay ningún lago.",
      },
      {
        nome: "Tirta Gangga",
        testo: "El jardín acuático del último rey de Karangasem, con estanques, fuentes y carpas koi: se camina sobre piedras que cruzan el agua. Es la parada natural después de Lempuyang.",
        come: "En coche, a unos veinte minutos de Lempuyang.",
        quando: "A media mañana, a la vuelta de Lempuyang.",
        tempo: "1 hora",
        costo: "Entrada pequeña.",
        lat: -8.412,
        lng: 115.587,
      },
      {
        nome: "Sidemen",
        testo: "Un valle de terrazas de arroz al pie del Gunung Agung, menos turístico que Tegalalang, con pueblos de tejedores de songket. No hay ningún monumento que tachar: se camina entre los campos y se para en un warung con vistas al volcán.",
        come: "Desde Ubud, 1h15-1h30 de carretera, en scooter o con conductor (ida y vuelta unos 350.000 IDR, unos 20 €).",
        quando: "Temprano por la mañana o a última hora de la tarde.",
        tempo: "Media jornada, o una noche",
        lat: -8.48,
        lng: 115.44,
        consiglio: "Para caminar entre los arrozales conviene un guía del pueblo durante un par de horas: los senderos no están señalizados y pasan por fincas privadas.",
      },
      {
        nome: "Kerta Gosa en Klungkung",
        testo: "El pabellón de justicia del antiguo reino de Klungkung, con techos pintados en el estilo de Kamasan: castigos del infierno y premios del paraíso, como un cómic. Al lado están el pabellón flotante y un pequeño museo.",
        come: "En la carretera entre Ubud y Sidemen o Padang Bai, una parada fácil con el conductor.",
        quando: "De día, en un desplazamiento hacia el este.",
        tempo: "45 minutos",
        costo: "Entrada modesta.",
        lat: -8.5355,
        lng: 115.4039,
      },
      {
        nome: "Arrozales de Jatiluwih",
        testo: "Las terrazas más extensas de Bali, patrimonio de la UNESCO por el subak, el sistema de riego compartido que gestionan los templos del agua. Se recorren por senderos señalizados de distintas longitudes, con el monte Batukaru al fondo.",
        come: "Unas 1,5-2 horas en coche desde Ubud; se combina con Ulun Danu Beratan.",
        quando: "Por la mañana, antes del calor; antes de la cosecha las terrazas están verdes.",
        tempo: "2-3 horas",
        costo: "Unos 75.000 IDR para extranjeros, unos 4 €.",
        lat: -8.37,
        lng: 115.131,
      },
      {
        nome: "Ulun Danu Beratan",
        testo: "El templo dedicado a la diosa de las aguas en el lago Beratan, a unos 1.200 metros, con tejados de varios pisos que parecen flotar. A esa altura hace fresco y por la mañana suele haber niebla.",
        come: "En coche, en la zona de Bedugul, en la carretera entre el sur y Munduk o Lovina.",
        quando: "Temprano por la mañana, cuando el lago está en calma.",
        tempo: "1 hora",
        costo: "Unos 100.000 IDR para extranjeros desde julio de 2026, unos 5,5 €, en efectivo o con tarjeta.",
        lat: -8.2752,
        lng: 115.1668,
      },
      {
        nome: "Palacio real y templo Saraswati de Ubud",
        testo: "En el centro de Ubud está el Puri Saren, el palacio de la familia real, y un poco más allá el templo Saraswati con su estanque de lotos. Por la noche, en los patios, hay espectáculos de danza balinesa casi todos los días.",
        come: "A pie, en la calle principal de Ubud.",
        quando: "De día para los patios, por la noche para las danzas.",
        tempo: "1 hora, más el espectáculo",
        costo: "Entrada libre de día; las entradas para las danzas nocturnas se venden en la puerta por la tarde.",
        lat: -8.5069,
        lng: 115.2625,
      },
      {
        nome: "Campuhan Ridge Walk",
        testo: "Un sendero pavimentado de unos dos kilómetros por la cresta entre dos valles fluviales, a las afueras de Ubud, entre hierba alta y palmeras. Al final hay cafés y arrozales.",
        come: "A pie desde el centro de Ubud; empieza detrás del templo Gunung Lebah.",
        quando: "Al amanecer o al atardecer: a mediodía no hay sombra.",
        tempo: "1-1,5 horas",
        costo: "Gratis.",
        lat: -8.503,
        lng: 115.254,
      },
      {
        nome: "Playas de Uluwatu",
        testo: "En la península del Bukit las playas son pequeñas calas bajo los acantilados: Padang Padang, Bingin, Suluban, cada una con su escalinata. Tienen las olas de surf más famosas de Bali.",
        come: "En scooter o con conductor; se baja a pie por escaleras empinadas.",
        quando: "Con la marea baja, cuando hay más arena; el atardecer desde los warungs de Bingin.",
        tempo: "Media jornada",
        costo: "Padang Padang unos 15.000 IDR para extranjeros, en efectivo.",
        lat: -8.811,
        lng: 115.103,
      },
      {
        nome: "Nusa Penida: Kelingking Beach",
        testo: "Un acantilado con forma de dinosaurio sobre una playa, el punto más fotografiado de la isla. Con Angel's Billabong y Manta Bay se completa la vuelta.",
        come: "En lancha rápida desde Sanur o Padang Bai, y luego coche o scooter en la isla.",
        quando: "En la primera lancha de la mañana, para evitar la cola en el sendero empinado.",
        tempo: "1 día",
        lat: -8.7505,
        lng: 115.4746,
        consiglio: "Dormir una noche en Nusa Penida evita la doble travesía en el día.",
      },
    ],
    programmi: [
      {
        titolo: "3 días",
        tappe: [
          "Día 1: Ubud, palacio real y Monkey Forest, Campuhan Ridge Walk al atardecer",
          "Día 2: amanecer en el Batur y, a la vuelta, Tirta Empul y los arrozales de Tegalalang",
          "Día 3: Uluwatu, playas con marea baja y danza Kecak al atardecer",
        ],
      },
      {
        titolo: "5 días",
        tappe: [
          "Días 1-2: como arriba",
          "Día 3: este de Bali, Lempuyang al amanecer, Tirta Gangga, Kerta Gosa y el valle de Sidemen",
          "Día 4: Jatiluwih y Ulun Danu Beratan, Tanah Lot al atardecer",
          "Día 5: Uluwatu, playas y danza Kecak",
        ],
      },
      {
        titolo: "7 días",
        tappe: [
          "Días 1-5: como arriba",
          "Días 6-7: Nusa Penida en la primera lancha desde Sanur, Kelingking antes de la multitud, noche en la isla y vuelta",
        ],
      },
    ],
    zone: [
      {
        nome: "Ubud",
        perChi: "quien busca cultura y arrozales",
        testo: "Corazón cultural, con guesthouses entre los campos. Muy turístico de día.",
        fascia: "35-150 €",
      },
      {
        nome: "Canggu",
        perChi: "quien busca surf y vida nocturna",
        testo: "Locales, cafés y playas de arena negra. Tráfico intenso y cemento.",
        fascia: "50-180 €",
      },
      {
        nome: "Uluwatu",
        perChi: "quien busca acantilados y relativa calma",
        testo: "Playas bajo los acantilados y atardeceres. Más tranquilo pero lejos de todo.",
        fascia: "60-250 €",
      },
      {
        nome: "Sanur o Nusa Dua",
        perChi: "familias",
        testo: "Ritmo más tranquilo y mar protegido. Desde Sanur salen las lanchas a las Nusa.",
        fascia: "50-250 €",
      },
    ],
    sapori: [
      {
        nome: "Babi guling",
        testo: "Cochinillo al espeto, el plato balinés por excelencia. Se encuentra en locales especializados que abren a mediodía y cierran cuando se acaba."
      },
      {
        nome: "Bebek betutu",
        testo: "Pato cocinado durante horas con especias, a menudo para encargar el día anterior."
      },
      {
        nome: "Nasi campur",
        testo: "Arroz con pequeñas muestras de carne, verduras y buñuelos, en los warung de barrio."
      },
      {
        nome: "Sate lilit",
        testo: "Brochetas de pescado o carne picada enrolladas en caña de bambú o de limoncillo."
      }
    ],
    attenzioni: [
      "Scooters: hace falta el carné internacional, los controles son frecuentes y las multas altas.",
      "Tráfico entre Canggu y Seminyak en horas punta: dejar mucho margen.",
      "Cambistas y cócteles: usar casas de cambio oficiales y beber en locales fiables. El metanol en las bebidas es un riesgo señalado por las autoridades.",
      "Nusa Penida: reservar la barca con antelación en temporada alta y salir pronto.",
      "A la llegada se paga la tasa turística de Bali, 150.000 IDR por persona desde 2024: conviene pagarla online en la web oficial Love Bali (lovebali.baliprov.go.id).",
    ],
    gite: [
      {
        nome: "Nusa Lembongan y Nusa Ceningan",
        distanza: "unos 30 minutos en lancha rápida desde Sanur",
        come: "Lancha rápida desde Sanur, varias salidas al día, que conviene reservar el día antes; en la isla, scooter o pick-up con conductor.",
        testo: "Más tranquilas que Penida: manglares para recorrer en barca, el puente amarillo hacia Ceningan, la Blue Lagoon y salidas de snorkel. Se hacen en el día, pero una noche lo vuelve todo más tranquilo.",
      },
      {
        nome: "Islas Gili",
        distanza: "1,5-2 horas en lancha rápida desde Padang Bai",
        come: "Lancha rápida desde Padang Bai (unos 350.000-475.000 IDR por trayecto), más cara desde Sanur; comprar a la compañía, no a los vendedores del puerto.",
        testo: "Tres islotes sin coches frente a Lombok: Trawangan fiestera, Air a medio camino, Meno silenciosa, con tortugas a pocos metros de la orilla. En el día no tiene sentido: hacen falta al menos dos noches.",
      },
      {
        nome: "Isla de Menjangan",
        distanza: "unas 3-4 horas en coche desde el sur y luego 30-40 minutos en barca",
        come: "En coche hasta el muelle de Labuan Lalang, en el parque nacional de Bali Barat, y luego barca con guía.",
        testo: "El mejor snorkel de Bali: paredes de coral que caen a pico en agua transparente, en el parque nacional del oeste. Se combina con una noche en Pemuteran o Munduk.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Bali?",
        risposta: "De 7 a 10 días para Ubud, el sur y al menos una de las islas cercanas. Con menos de cinco hay que elegir: Ubud y Uluwatu, renunciando al este.",
      },
      {
        domanda: "¿Dónde conviene alojarse en Bali?",
        risposta: "En dos bases: Ubud para los arrozales y los templos del interior, Uluwatu o Sanur para el mar. Cambiar de base ahorra horas de tráfico cada día.",
      },
      {
        domanda: "¿Qué hace falta para entrar en Bali?",
        risposta: "Pasaporte con seis meses de validez, el e-VOA online (unos 500.000 IDR, unos 35 €), la All Indonesia Arrival Card y la tasa turística Love Bali de 150.000 IDR, que se paga online en lovebali.baliprov.go.id.",
      },
      {
        domanda: "¿Mejor scooter o conductor en Bali?",
        risposta: "El scooter cuesta 60.000-100.000 IDR al día, pero hace falta el carné internacional y experiencia real en el tráfico. El conductor cuesta 300.000-600.000 IDR por trayecto y es la opción sensata para las excursiones largas.",
      },
      {
        domanda: "¿Cuál es la mejor época para Bali?",
        risposta: "De abril a octubre, en la estación seca. En marzo, el día de Nyepi, la isla se detiene 24 horas y cierra también el aeropuerto.",
      },
      {
        domanda: "¿Se puede hacer Nusa Penida en el día?",
        risposta: "Sí, pero es cansado: dos travesías y carreteras lentas. Mejor dormir una noche en la isla y estar en Kelingking con la primera lancha de la mañana.",
      },
    ],
    esperienzeSlugs: ['giornata-nusa-penida'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'bali-nusa-komodo', 'bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: 'Las terrazas de arroz de Jatiluwih, en Bali, brillantes de agua hasta el horizonte, vistas desde el dron',
    immagine: '/images/indonesia/jatiluwih-terrazze-riccardo.jpg',
  },
  {
    slug: 'sulawesi',
    paeseSlug: 'indonesia',
    ordine: 4,
    nome: 'Célebes',
    tipologia: ['cultura', 'natura', 'diving'],
    giorniConsigliati: "7-9 días entre Tana Toraja y Bunaken",
    visitataPersonalmente: true,
    introduzione:
      "Una isla de forma única, dividida entre las tradiciones funerarias y los pueblos de montaña de Tana Toraja y los arrecifes del Parque Nacional de Bunaken, en el extremo norte.",
    percheAndarci:
      "Ofrece dos experiencias casi opuestas: una cultura que trata la muerte como un acontecimiento social y no como un tabú, y uno de los parques marinos más bellos del sudeste asiático.",
    cosaVedere: [
      "Los pueblos tongkonan de Tana Toraja, con las casas de tejado en forma de barca",
      "Las tumbas excavadas en la roca y los «tau tau», las efigies de madera de los difuntos",
      "El arrecife del Parque Nacional de Bunaken, con paredes coralinas verticales",
      "Makassar y el fuerte holandés de Fort Rotterdam",
    ],
    cosaFare: [
      "Asistir, con un guía local que explique la etiqueta, a una ceremonia funeraria toraja si coincide con la época adecuada",
      "Trekking entre los pueblos de montaña alrededor de Rantepao",
      "Buceo o snorkel en el Parque Nacional de Bunaken (hay una ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Rantepao es la base natural para todo Tana Toraja, con guesthouses sencillas en el centro; para Bunaken se elige entre los dive resorts de la propia isla, más cómodos para las inmersiones al amanecer, y Manado en tierra firme, más barata pero con la travesía en barca cada día.",
    doveMangiare:
      "Célebes tiene una cocina muy picante, sobre todo en el norte, alrededor de Manado: el plato que hay que conocer es el rica-rica, a base de guindilla en cantidades que no se negocian. En Makassar se come el coto makassar, sopa de ternera que se sirve en el desayuno, y el pescado a la parrilla en el paseo marítimo por la noche. En Tana Toraja aparecen el cerdo y el búfalo, porque la zona es cristiana: el pa'piong, carne cocinada dentro de un tubo de bambú, a menudo hay que pedirlo con antelación.",
    comeArrivare:
      "Vuelo a Makassar (hub principal), luego autobús o vuelo interno a Rantepao (Tana Toraja) o a Manado (base para Bunaken).",
    comeSpostarsi: "Autobús o coche con conductor para Tana Toraja; barca desde el muelle de Manado para Bunaken. Para organizarlo todo recomiendo Wale Adventure (wale-adventure.com), operador turístico local: amables y buenos, con tours privados por toda la isla y una vanilla farm que visitar (su web la hice yo).",
    periodoMigliore: "mayo-octubre",
    costi: "en la media, más alto para los paquetes de buceo en Bunaken",
    erroriDaEvitare: [
      "Participar en ceremonias funerarias sin un guía que explique la etiqueta: son eventos privados, abiertos a los visitantes solo con ciertas reglas de respeto",
    ],
    miaEsperienza:
      "Tana Toraja es lo más distinto que he visto en Indonesia, y no es un sitio de postal. Un funeral toraja dura días, reúne a cientos de personas y prevé el sacrificio de búfalos delante de todos. De la sobriedad a la que estamos acostumbrados no tiene nada: es una fiesta carísima, para la que las familias ahorran durante años. Como extraños se puede asistir (se lleva un regalo, normalmente azúcar o cigarrillos, y se está donde indica el guía), pero hay que estar preparado para ver cosas que impactan. Bunaken es la otra cara: paredes coralinas que caen a pico cientos de metros, donde uno se da la vuelta sobre la espalda y debajo ya no hay fondo. Entre las dos, la que ha cambiado algo en mí es Toraja.",
    luoghi: [
      {
        nome: "Rantepao y los pueblos tongkonan",
        testo: "El corazón de Tana Toraja, con las casas de tejado en forma de barca (tongkonan) y los arrozales. Kete Kesu es uno de los pueblos más conocidos, con casas, graneros y tumbas.",
        come: "Toraja está lejos de Makassar: un viaje largo en autobús nocturno o en coche, o con vuelos internos. Los pueblos se visitan con guía.",
        quando: "En la estación seca. Las fechas de los funerales las deciden las familias: el guía sabe si hay alguno en curso.",
        tempo: "2-3 días",
        consiglio: "Contratar un guía local que explique los símbolos: sin él se pierde la mitad del significado."
      },
      {
        nome: "Tumbas en la roca",
        testo: "Tumbas excavadas en la pared de roca y cuevas funerarias, como el cementerio de Lemo, en una pared de roca escarpada. En algunos sitios las «tau tau», efigies de madera de los difuntos, miran desde balcones.",
        come: "Con el guía desde Rantepao, en coche o scooter.",
        quando: "Por la mañana.",
        tempo: "medio día",
        consiglio: "Llevar linterna para las cuevas y respetar las tumbas: no tocar los huesos."
      },
      {
        nome: "Un funeral toraja",
        testo: "Un funeral dura varios días, reúne a menudo a cientos de personas e incluye el sacrificio de búfalos. Las familias ahorran durante años. Es una fiesta carísima, no un luto sobrio.",
        come: "Solo con un guía que explique la etiqueta. Se lleva un regalo, normalmente azúcar o cigarrillos, y se permanece donde indique el guía.",
        quando: "Cuando la familia lo celebra: las fechas no son fijas y se conocen en el lugar, con el guía.",
        tempo: "medio día",
        consiglio: "Prepararse para ver cosas impactantes. Para organizar el viaje: Wale Adventure (wale-adventure.com), operador local."
      },
      {
        nome: "Parque Marino Nacional de Bunaken",
        testo: "Paredes de coral verticales y agua transparente. Muy conocido para esnórquel e inmersiones desde barco.",
        come: "En barco desde el puerto de Manado. Paquetes de una o más noches.",
        quando: "En los meses con el mar más tranquilo: preguntar a los operadores de buceo.",
        tempo: "2-3 días",
        consiglio: "Quien llega después de Toraja lo vive como contrapeso: dos caras distintas de la isla."
      },
      {
        nome: "Fort Rotterdam y Makassar",
        testo: "El fuerte del puerto, nacido como fortaleza del reino de Gowa y reconstruido por los holandeses de la VOC en el siglo XVII, con el museo La Galigo. La ciudad es el punto de partida hacia Toraja.",
        come: "A pie o en taxi desde el centro de Makassar.",
        quando: "Por la mañana.",
        tempo: "1-2 horas",
        consiglio: "Comer coto makassar por la mañana y pescado a la parrilla en el paseo marítimo por la noche."
      }
    ],
    programmi: [
      {
        titolo: "7-9 días",
        tappe: [
          "Día 1: llegada a Makassar, Fort Rotterdam",
          "Día 2: traslado a Rantepao",
          "Día 3-4: tongkonan, tumbas en la roca, un funeral si lo hay",
          "Día 5: regreso a Makassar o vuelo a Manado",
          "Día 6-8: Bunaken",
          "Día 9: regreso"
        ]
      }
    ],
    zone: [
      {
        nome: "Rantepao",
        perChi: "quien visita Tana Toraja",
        testo: "Pequeña ciudad con casas de huéspedes y restaurantes, base para los pueblos."
      },
      {
        nome: "Manado",
        perChi: "quien va a Bunaken",
        testo: "Ciudad portuaria con hoteles, de donde salen las barcas a la isla."
      },
      {
        nome: "Isla de Bunaken",
        perChi: "quien bucea",
        testo: "Homestays y resorts en la isla. Sencillo."
      }
    ],
    sapori: [
      {
        nome: "Coto makassar",
        testo: "Sopa de ternera, servida en el desayuno en Makassar."
      },
      {
        nome: "Pa'piong",
        testo: "Carne cocinada en un tubo de bambú, típica de Toraja. A menudo hay que pedirla con antelación."
      },
      {
        nome: "Rica-rica",
        testo: "Plato picantísimo del norte, alrededor de Manado."
      },
      {
        nome: "Pescado a la parrilla",
        testo: "En el paseo marítimo de Makassar, por la noche."
      }
    ],
    attenzioni: [
      "Ceremonias fúnebres: no presentarse sin guía; son eventos privados con reglas de respeto.",
      "Tana Toraja es cristiana: aparece el cerdo, que en el resto de Indonesia es raro.",
      "Las carreteras a Toraja son largas y sinuosas; el autobús nocturno es incómodo.",
      "El paquete de buceo en Bunaken cuesta más que la media: comparar operadores."
    ],
    esperienzeSlugs: ['diving-bunaken-national-park'],
    tripSlugs: ['indonesia-itinerario', 'bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: "Un tongkonan de tejado en proa de barco en un pueblo toraja cerca de Rantepao, Célebes",
    immagine: '/images/indonesia/sulawesi.jpg',
  },
  {
    slug: 'lombok-gili',
    paeseSlug: 'indonesia',
    ordine: 5,
    nome: 'Lombok y las Gili',
    tipologia: ['mare', 'trekking', 'isole'],
    giorniConsigliati: "6-8 días, de los cuales 2-3 para el trekking al Rinjani si se incluye",
    visitataPersonalmente: true,
    introduzione:
      "La vecina menos abarrotada de Bali: las tres islas Gili sin vehículos a motor, el volcán Rinjani (el segundo más alto de Indonesia) y playas del sur todavía poco trilladas.",
    percheAndarci:
      "El ritmo es más lento que en Bali: el trekking al Rinjani es el reto físico, las Gili el contrapeso relajado junto al mar.",
    cosaVedere: [
      "Las tres islas Gili (Trawangan, Meno, Air), sin coches ni motos",
      "El Gunung Rinjani, con el lago del cráter Segara Anak",
      "Las playas del sur: Kuta Lombok, Tanjung Aan, Selong Belanak",
    ],
    cosaFare: [
      "Snorkel con tortugas marinas en las Gili",
      "Trekking de varios días al Rinjani hasta el lago del cráter (hay una ficha de experiencia dedicada)",
      "Surf en Kuta Lombok o, para niveles avanzados, en Desert Point",
    ],
    doveDormire:
      "Gili Trawangan para la vida nocturna, Gili Air para el equilibrio entre servicios y calma, Gili Meno para el silencio; en Lombok, Kuta es la base del sur para surf y playas, Senaru y Sembalun son los dos pueblos desde los que parten los treks al Rinjani.",
    doveMangiare:
      "El plato de Lombok es el ayam taliwang, pollo a la parrilla en una salsa de guindilla que no hace concesiones. En las Gili el mercado nocturno de Trawangan es un sitio bueno y barato: el pescado está expuesto sobre hielo, se elige y se espera a que lo pasen por la parrilla. En los restaurantes junto al mar se paga sobre todo la vista.",
    comeArrivare: "El Lombok International Airport (LOP) está en Praya, en el sur de la isla, con vuelos desde Bali en algo menos de una hora y desde Yakarta. Desde el aeropuerto, Kuta Lombok queda a una media hora en coche y Senaru a unas 3 horas. Desde Bali las barcas rápidas salen de Padang Bai (1,5-2 horas, 350.000-475.000 IDR por trayecto, unos 18-25 €) o de Sanur, más caras, y llegan a las Gili o a Bangsal; con mar gruesa las salidas se cancelan o se retrasan. Desde Bangsal la barca pública a las Gili tarda unos 30 minutos y cuesta poco. El billete se compra a la compañía o en plataformas conocidas, no a los vendedores del puerto.",
    comeSpostarsi: "Solo cidomo (calesas tiradas por caballos) o bicicleta en las Gili, donde los vehículos a motor están prohibidos; coche o moto en el resto de Lombok.",
    periodoMigliore:
      "la estación seca; el Rinjani cierra en la estación de lluvias, las fechas se consultan en la app oficial E-Rinjani del parque",
    costi: "Barca rápida Padang Bai-Gili 350.000-475.000 IDR por trayecto (unos 18-25 €), bicicleta en las Gili unos 50.000 IDR al día (unos 2,5 €). Económico: unos 25-35 € al día con casas de huéspedes, warung y barcas públicas. Medio: 60-90 € con bungaló con piscina, restaurantes y alguna excursión en barca. Alto: más de 150 € con resorts junto al mar y traslados privados. El trekking al Rinjani se paga aparte al operador.",
    erroriDaEvitare: [
      "Subestimar el cansancio y la altitud del trekking al Rinjani",
      "Intentar el trekking sin guía: es obligatorio por ley",
    ],
    miaEsperienza:
      "El Rinjani es el trekking más duro que he hecho en Indonesia, y la comparación con los demás no se sostiene. La subida al borde del cráter es larga y expuesta, y acaba en arena volcánica donde cada tres pasos se pierde uno. El campamento lo montamos en el filo, con viento, y por la noche se duerme poco y mal. Despertarse sobre el lago Segara Anak con las nubes debajo, sin embargo, lo compensa todo. Las Gili son perfectas justo después: sin coches ni motos, se recorren a pie en una hora y las tortugas se ven desde la playa, sin barca ni guía. Trawangan por la noche es más fiestera de lo que alguien se espera, Meno es lo contrario: mejor saberlo antes de reservar.",
    luoghi: [
      {
        nome: "Las islas Gili: Trawangan, Meno y Air",
        testo: "Tres islas donde coches y motos están prohibidos por ordenanza: se recorren a pie, en bici o en calesa (cidomo). Trawangan es la más grande y fiestera, Meno la más tranquila, Air un término medio. Las tortugas se ven en los arrecifes cerca de la orilla.",
        come: "Barco rápido desde Bali (Padang Bai) o barca local desde Bangsal, el puerto de la costa norte de Lombok. En las Gili se camina o se va en cidomo.",
        quando: "En la estación seca. Meno es la más tranquila en cualquier momento.",
        tempo: "2-3 días",
        consiglio: "Elegir la isla según el carácter: fiesta en Trawangan, calma en Meno.",
        costo: "Barca rápida desde Padang Bai 350.000-475.000 IDR por trayecto, unos 18-25 € (2026); entre las tres islas la barca pública cuesta pocos euros. Bicicleta de alquiler unos 50.000 IDR al día, unos 2,5 €.",
        lat: -8.35034,
        lng: 116.03626,
      },
      {
        nome: "Snorkel con tortugas",
        testo: "Las tortugas verdes pastan en los arrecifes cerca de la orilla. No hacen falta barca ni guía.",
        come: "Se entra al agua desde la playa, con máscara y aletas de alquiler.",
        quando: "Por la mañana, con el agua más calmada.",
        tempo: "1-2 horas",
        consiglio: "No tocar ni perseguir a las tortugas: mantener la distancia.",
        costo: "Máscara y aletas de alquiler por pocos euros; la excursión compartida de snorkel por las tres islas, de media jornada, tiene un precio contenido y se reserva la noche antes.",
      },
      {
        nome: "Trekking al Gunung Rinjani",
        testo: "El segundo volcán más alto de Indonesia, 3.726 metros. Desde el borde del cráter se ve el lago Segara Anak, dentro de la caldera, a unos 2.000 metros. El recorrido es largo y expuesto y termina en arena volcánica.",
        come: "Desde Senaru o Sembalun, solo con un operador autorizado y un guía. Las entradas se reservan en la app oficial E-Rinjani del parque (Android e iOS); la web erinjani.id hoy redirige a una agencia privada, no al parque. Paquetes de varios días con porteadores y tiendas.",
        quando: "En la estación seca. Con lluvias, mal tiempo o tras accidentes el parque puede cerrar los senderos: comprobarlo en la app E-Rinjani o en los canales oficiales del parque antes de reservar.",
        tempo: "varios días",
        consiglio: "El campamento en el borde es ventoso y se duerme poco: despertar sobre las nubes con el lago debajo lo compensa todo.",
        orari: "Cerrado cada año de enero a finales de marzo, y a veces en otros periodos tras accidentes o mal tiempo.",
        lat: -8.41441,
        lng: 116.45977,
      },
      {
        nome: "Cascadas de Senaru",
        testo: "Sendang Gile y Tiu Kelep son dos cascadas en el bosque a los pies del Rinjani, a las que se llega con una caminata corta. Un gran día de descanso antes o después del trekking.",
        come: "A pie desde Senaru, con guía.",
        quando: "Por la mañana.",
        tempo: "3 horas",
        consiglio: "Llevar calzado que se pueda mojar.",
        lat: -8.30556,
        lng: 116.40828,
      },
      {
        nome: "Playas del sur: Kuta, Tanjung Aan, Selong Belanak",
        testo: "Bahías de arena clara y olas para surf, mucho menos concurridas que Bali.",
        come: "En scooter o coche desde Kuta Lombok, que está cerca del aeropuerto.",
        quando: "Por la mañana o al atardecer.",
        tempo: "1 día",
        consiglio: "Selong Belanak es adecuada para surfistas principiantes.",
        lat: -8.91667,
        lng: 116.28333,
      },
      {
        nome: "Mercado nocturno de Gili Trawangan",
        testo: "Cada noche, cerca del puerto de Trawangan, los puestos exponen pescado, gambas y calamares sobre hielo: se elige, se paga al peso y lo asan al momento. Al lado hay satay, nasi campur y dulces. Es una de las formas más baratas de cenar en las Gili.",
        come: "A pie desde el puerto, en la calle principal de la costa este.",
        quando: "Desde el atardecer; los mejores puestos se quedan sin pescado pronto.",
        tempo: "1 hora",
        consiglio: "Preguntar el precio por kilo antes de elegir el pescado.",
      },
      {
        nome: "Nest, las estatuas sumergidas de Gili Meno",
        testo: "Un círculo de figuras humanas a tamaño natural esculpidas por Jason deCaires Taylor y colocadas en el fondo a pocos metros de profundidad, frente a Gili Meno. Se ven con solo máscara y tubo, y el coral está colonizando las esculturas.",
        come: "Nadando desde la playa oeste de Gili Meno, o como parada de las excursiones de snorkel por las tres islas.",
        quando: "Con el agua en calma y la marea baja, por la mañana.",
        tempo: "1 hora",
        consiglio: "Hay corriente: quedarse cerca de la barca o de la boya y no tocar las estatuas.",
      },
      {
        nome: "Bukit Merese",
        testo: "Una colina de hierba al este de Kuta Lombok, asomada a las bahías de Tanjung Aan y Gerupuk. Es el mirador más conocido del sur, y al atardecer se llena de gente.",
        come: "En moto o coche desde Kuta, unos 15 minutos; luego una breve subida a pie.",
        quando: "Al atardecer, o al amanecer para tenerla casi vacía.",
        tempo: "1 hora",
        lat: -8.91423,
        lng: 116.31908,
        consiglio: "Combinarla con un baño en Tanjung Aan, justo debajo.",
      },
      {
        nome: "Playa de Mawun",
        testo: "Una bahía en herradura entre dos promontorios, al oeste de Kuta, con arena clara y agua más resguardada que en las playas cercanas. Hay pocos warung y sombrillas de alquiler.",
        come: "En moto o coche desde Kuta, unos 20 minutos por la carretera de la costa hacia Selong Belanak.",
        quando: "Por la mañana, antes del viento.",
        tempo: "Media jornada",
        lat: -8.90221,
        lng: 116.23234,
        consiglio: "Se combina bien con Selong Belanak en la misma ruta.",
      },
      {
        nome: "Aldea sasak de Sade",
        testo: "Una aldea tradicional del pueblo sasak, con casas de bambú y paja y graneros con tejado en forma de sombrero, el emblema de Lombok. Todavía viven familias que tejen y venden telas. Es muy turística, pero ayuda a entender la cultura de la isla.",
        come: "En la carretera entre el aeropuerto y Kuta. Se visita con un guía de la aldea, al que se deja un donativo.",
        quando: "Por la mañana o a última hora de la tarde.",
        tempo: "1 hora",
        lat: -8.63854,
        lng: 116.30769,
        consiglio: "No hay obligación de comprar telas: decir que no es normal.",
      },
      {
        nome: "Sukarara",
        testo: "La aldea del tejido songket, telas con hilos de oro y plata trabajadas a mano en telares de madera. En los talleres se ve cómo se teje y a veces se puede probar.",
        come: "En coche, en el centro de la isla, a menudo en la misma ruta que Sade.",
        quando: "De día, cuando trabajan en los telares.",
        tempo: "45 minutos",
        lat: -8.69408,
        lng: 116.22522,
        consiglio: "Los precios de las telas se negocian.",
      },
      {
        nome: "Pink Beach (Pantai Tangsi)",
        testo: "Una playa en la punta sudeste de Lombok, con la arena que se vuelve rosada por los fragmentos de coral rojo. Está lejos de todo y es menos frecuentada que las playas de Kuta.",
        come: "En coche desde Kuta, unas 1,5-2 horas, por carreteras en parte de tierra; o en barca desde las bahías cercanas.",
        quando: "Con el sol alto el rosa se ve mejor.",
        tempo: "Jornada completa con el viaje",
        lat: -8.85931,
        lng: 116.58086,
        consiglio: "Llevar agua y comida: hay pocos servicios.",
      },
      {
        nome: "Cascadas de Benang Kelambu y Benang Stokel",
        testo: "Dos cascadas en el bosque del centro de la isla, en las laderas sur del Rinjani. Benang Kelambu cae en velos finos por una pared cubierta de vegetación, Benang Stokel tiene dos saltos más altos.",
        come: "En coche desde Kuta o Mataram, unas 1,5 horas; desde el aparcamiento, sendero a pie, con guías locales disponibles.",
        quando: "En la estación de lluvias hay más agua; por la mañana hay menos gente.",
        tempo: "Media jornada",
        lat: -8.53277,
        lng: 116.33701,
        consiglio: "Calzado que se pueda mojar: el sendero resbala.",
      },
      {
        nome: "Taman Narmada",
        testo: "Un jardín de agua construido en el siglo XVIII por los reyes balineses que gobernaban Lombok, con estanques, pabellones y un templo. Según la tradición, el estanque grande reproduce el lago del cráter del Rinjani.",
        come: "Al este de Mataram, en coche o taxi.",
        quando: "Entre semana, cuando hay menos familias locales.",
        tempo: "1 hora",
        lat: -8.59602,
        lng: 116.20533,
      },
      {
        nome: "Pura Lingsar",
        testo: "Un complejo de principios del siglo XVIII compartido por hindúes balineses y musulmanes sasak de la tradición wetu telu. Cada año, en la fiesta del Perang Topat, las dos comunidades se lanzan paquetes de arroz.",
        come: "A pocos kilómetros al noreste de Mataram, combinado con Narmada.",
        quando: "De día; sarong y faja, normalmente prestados en la entrada.",
        tempo: "45 minutos",
        lat: -8.57581,
        lng: 116.18014,
      },
    ],
    programmi: [
      {
        titolo: "2 días: Gili",
        tappe: [
          "Día 1: barca desde Bangsal o Bali, vuelta a Gili Trawangan en bici, atardecer en la costa oeste y cena en el mercado nocturno",
          "Día 2: excursión de snorkel por las tres islas con las tortugas y Nest en Gili Meno, tarde en Gili Air",
        ],
      },
      {
        titolo: "3 días: el sur de Lombok",
        tappe: [
          "Día 1: Sade y Sukarara desde el aeropuerto, noche en Kuta",
          "Día 2: Mawun y Selong Belanak, atardecer en Bukit Merese",
          "Día 3: Tanjung Aan por la mañana, luego Pink Beach o las cascadas de Benang Kelambu",
        ],
      },
      {
        titolo: "6-8 días",
        tappe: [
          "Día 1: llegada a Lombok, Senaru",
          "Día 2-4: trekking al Rinjani",
          "Día 5: descanso, cascadas de Senaru",
          "Día 6-7: Gili, snorkel con tortugas",
          "Día 8: salida",
        ],
      },
      {
        titolo: "Sin Rinjani",
        tappe: [
          "Día 1-2: Kuta Lombok y las playas del sur",
          "Día 3-5: Gili",
          "Día 6: regreso",
        ],
      },
    ],
    zone: [
      {
        nome: "Gili Trawangan",
        perChi: "quien quiere vida nocturna",
        testo: "Bares, restaurantes y locales. Más ruidosa de lo que muchos esperan.",
        fascia: "25-120 €",
      },
      {
        nome: "Gili Meno",
        perChi: "quien busca calma",
        testo: "La más tranquila, con pocos servicios y bonitos atardeceres.",
        fascia: "30-120 €",
      },
      {
        nome: "Senaru o Sembalun",
        perChi: "quien hace el Rinjani",
        testo: "Pueblos en las laderas del volcán con casas de huéspedes sencillas.",
      },
      {
        nome: "Kuta Lombok",
        perChi: "quien busca playas y surf",
        testo: "Pueblo tranquilo con alojamiento económico.",
        fascia: "30-130 €",
      },
    ],
    sapori: [
      {
        nome: "Ayam taliwang",
        testo: "Pollo a la parrilla en salsa de guindilla que no perdona, el plato más conocido de Lombok."
      },
      {
        nome: "Pescado a la parrilla del mercado nocturno de Trawangan",
        testo: "El pescado se expone sobre hielo, se elige y se espera a que lo asen. Una de las formas más económicas de comer en las Gili."
      },
      {
        nome: "Plecing kangkung",
        testo: "Espinacas de agua con salsa de tomate picante, un acompañamiento típico de Lombok."
      },
      {
        nome: "Sate rembiga",
        testo: "Brochetas de ternera picantes, típicas de Lombok."
      }
    ],
    attenzioni: [
      "Rinjani: guía, operador autorizado y reserva en la app oficial E-Rinjani son obligatorios. Subestimar el esfuerzo y la altitud es el error más común.",
      "Trawangan por la noche es más fiestera de lo que parece; Meno es lo contrario. Elegir una según el carácter.",
      "Travesías desde Bali: el mar puede estar agitado; evitar reservar traslados demasiado ajustados.",
      "En las Gili, corrientes y embarcaciones: no nadar lejos de la orilla."
    ],
    gite: [
      {
        nome: "Gili del suroeste: Nanggu, Sudak y Kedis",
        distanza: "unas 2 horas en coche desde Kuta o Mataram, luego 15-20 minutos de barca",
        come: "Coche hasta el puerto de Tawun o de Sekotong, luego barca alquilada allí para recorrer las islas.",
        testo: "Islotes pequeños y casi sin servicios, con agua poco profunda y arrecife cerca de la orilla. Son las Gili sin la multitud de las tres más famosas.",
      },
      {
        nome: "Gili Kondo",
        distanza: "unas 2,5 horas en coche desde Kuta o Senaru, luego una barca corta",
        come: "Coche hasta la costa noreste (Sambelia), barca de alquiler en el muelle.",
        testo: "Un islote de arena blanca en la costa este, frecuentado sobre todo por visitantes locales, con snorkel en el arrecife que lo rodea.",
      },
      {
        nome: "Tetebatu",
        distanza: "unas 1,5 horas en coche desde Kuta o Mataram",
        come: "Coche o moto; allí, paseos entre los arrozales con un guía del pueblo.",
        testo: "Un pueblo agrícola en las laderas sur del Rinjani, con arrozales en terrazas, plantaciones y cascadas en el bosque. Aire más fresco y ritmo lento.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta para Lombok y las Gili?",
        risposta: "Para las Gili solas bastan 2-3 días. Con el sur de Lombok se llega a 5-6, y el trekking al Rinjani añade 2-3 días más uno de descanso.",
      },
      {
        domanda: "¿Qué isla Gili elegir?",
        risposta: "Trawangan para la vida nocturna, Gili Air para un equilibrio entre servicios y calma, Gili Meno para el silencio. Se pasa de una a otra en pocos minutos en la barca pública.",
      },
      {
        domanda: "¿Hace falta guía para el trekking al Rinjani?",
        risposta: "Sí, es obligatorio por ley, con un operador autorizado y la reserva en la app oficial E-Rinjani del parque.",
      },
      {
        domanda: "¿Cuándo está cerrado el Rinjani?",
        risposta: "Cada año de enero a finales de marzo, en la estación de lluvias. También puede cerrar en otros periodos tras accidentes o mal tiempo: comprobarlo en la app E-Rinjani antes de reservar.",
      },
      {
        domanda: "¿Cómo se va de Bali a las Gili?",
        risposta: "En barca rápida desde Padang Bai (1,5-2 horas, 350.000-475.000 IDR por trayecto) o desde Sanur, más cara. Con mar gruesa las salidas se cancelan: mejor no reservar un vuelo el mismo día.",
      },
      {
        domanda: "¿Hay cajeros en las Gili?",
        risposta: "Pocos, sobre todo en Trawangan, y no siempre funcionan. Conviene llegar con suficiente efectivo, sobre todo a Gili Meno y Gili Air.",
      },
    ],
    esperienzeSlugs: ['trekking-gunung-rinjani'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'indonesia-isola-per-isola'],
    imageAlt: 'Un islote de arena blanca frente a Lombok, con las barcas de balancín amarradas y las colinas al fondo',
    immagine: '/images/indonesia/gili-isolotto-barche-riccardo.jpg',
  },
  {
    slug: 'komodo',
    paeseSlug: 'indonesia',
    ordine: 6,
    nome: 'Komodo',
    tipologia: ['natura', 'avventura', 'diving'],
    giorniConsigliati: "3-4 días, a menudo en tour en barca desde Labuan Bajo",
    visitataPersonalmente: true,
    introduzione:
      "El parque nacional que da nombre al dragón de Komodo, el lagarto más grande del mundo, en un archipiélago de islas bellas por encima y por debajo del nivel del mar.",
    percheAndarci:
      "Es el lugar al que se va a ver los dragones de Komodo en su hábitat natural, con además paisajes y fondos marinos muy fotografiados.",
    cosaVedere: [
      "Los dragones de Komodo en la isla de Komodo y en la isla de Rinca",
      "Pink Beach, con la arena rosada por los fragmentos de coral",
      "Padar Island, el mirador con las tres bahías en media luna",
      "Los puntos de snorkel de Kanawa y Kelor",
    ],
    cosaFare: [
      "Trekking guiado para ver los dragones de Komodo (hay una ficha de experiencia dedicada)",
      "Subida a Padar Island al amanecer para el paisaje icónico",
      "Snorkel o buceo en el parque marino",
      "Tour en barca (también liveaboard de varios días) desde Labuan Bajo entre las islas del parque",
    ],
    doveDormire:
      "Labuan Bajo es el punto de apoyo de todos, con una amplia oferta entre albergues y resorts en el puerto. Como alternativa se duerme a bordo, en los tours en barca de dos o más noches, que son también la única forma de estar en Padar al amanecer.",
    doveMangiare:
      "En Labuan Bajo se come pescado, y bien: el mercado nocturno del paseo marítimo expone la pesca del día y la asa al momento, a precios mucho más bajos que los restaurantes con vistas al puerto un poco más allá. A bordo cocina la tripulación: platos sencillos de arroz, pescado y verduras, pero buenos.",
    comeArrivare: "Se vuela a Labuan Bajo (aeropuerto Komodo, LBJ), con vuelos directos desde Bali en 1 hora y 15 minutos aproximadamente y desde Yakarta; desde Lombok son menos frecuentes. El aeropuerto está a pocos minutos en coche del puerto y de los hoteles del centro. Las barcas al parque salen del puerto de Labuan Bajo por la mañana; para estar en Padar al amanecer se sale antes de las 5 o se duerme a bordo. Quien llega desde el este recorre la Trans-Flores en coche con conductor, desde Bajawa unas 9-10 horas con las paradas.",
    comeSpostarsi: "Solo en barca: tours organizados de uno o más días, o liveaboard.",
    periodoMigliore: "abril-diciembre, estación seca con mar más tranquilo",
    costi: "Entrada al parque 250.000 IDR por persona para extranjeros (unos 13 €), normalmente gestionada por el operador; tasa de buceo 25.000 IDR por actividad. Económico: unos 40-60 € al día con casa de huéspedes, mercado nocturno y tour compartido de un día. Medio: 100-150 € con hotel en la ciudad y lancha rápida, o dos noches en un barco compartido. Alto: más de 250 € con liveaboard privado o resort junto al mar.",
    erroriDaEvitare: [
      "Acercarse a los dragones sin un ranger o un guía: son depredadores peligrosos",
      "Subestimar el mar movido y las corrientes fuertes entre las islas",
    ],
    miaEsperienza:
      "Los dragones casi siempre están quietos. Son animales enormes que pasan el día a la sombra y se mueven poco, y quien se espera una escena de documental se queda descolocado: lo que impresiona son las dimensiones y el hecho de que el ranger lleve en la mano solo un palo bifurcado. Rinca es más salvaje y menos concurrida que la isla de Komodo, y conviene pedirla expresamente. El mejor momento es Padar al amanecer: una subida corta y empinada por una cresta, y debajo tres bahías con tres arenas distintas todas juntas. Hay que hacerla muy temprano, porque a partir de las ocho la fila en el sendero es continua y el calor se hace notar.",
    luoghi: [
      {
        nome: "Isla de Rinca",
        testo: "Tiene muchos dragones y es más salvaje y menos concurrida que la isla de Komodo. Los dragones casi siempre están quietos a la sombra, pero son depredadores peligrosos.",
        come: "En barco desde Labuan Bajo: el tiempo depende del tipo de barco. Se camina por senderos con un ranger, que solo lleva un palo bifurcado.",
        quando: "Por la mañana, en las horas más frescas.",
        tempo: "medio día",
        url: "https://www.komodonationalpark.org/",
        consiglio: "Pedir expresamente Rinca en el tour: es más salvaje que la isla de Komodo.",
        costo: "Entrada al parque 250.000 IDR por persona para extranjeros, unos 13 € (2026), normalmente incluida o gestionada por el operador del tour; el guarda es obligatorio.",
        lat: -8.65927,
        lng: 119.7256,
      },
      {
        nome: "Isla de Komodo y Loh Liang",
        testo: "La isla que da nombre al parque. Los senderos cortos salen de Loh Liang y llevan a zonas donde se ven los dragones.",
        come: "En barco desde Labuan Bajo, más lejos que Rinca. Con ranger obligatorio.",
        quando: "Por la mañana.",
        tempo: "medio día",
        url: "https://www.komodonationalpark.org/",
        consiglio: "Nunca acercarse sin el guarda y nunca salir del sendero.",
        costo: "Entrada al parque 250.000 IDR por persona para extranjeros, unos 13 € (2026); el guarda es obligatorio.",
        lat: -8.56831,
        lng: 119.5069,
      },
      {
        nome: "Isla de Padar",
        testo: "Una subida breve y empinada por una cresta, y abajo tres bahías con arenas de distintos colores: el mirador más famoso del parque.",
        come: "En barca desde Labuan Bajo con un tour, a menudo como primera parada de la mañana.",
        quando: "Al amanecer, muy temprano: poco después llegan los grupos, la fila en el sendero es continua y el calor aprieta.",
        tempo: "1 hora y media",
        consiglio: "Subir con las primeras luces es la única forma de tener el panorama sin la cola.",
        costo: "Incluido en la entrada del parque. Desde 2026 hay un tope diario de visitantes y los turnos para Padar se reservan: confirmarlos con el operador.",
        lat: -8.6627,
        lng: 119.55574,
        url: "https://www.komodonationalpark.org/",
      },
      {
        nome: "Pink Beach",
        testo: "Una playa rosada por los fragmentos de coral mezclados con la arena, con excelente snorkel.",
        come: "En barca como parada del tour.",
        quando: "Mañana o primera hora de la tarde.",
        tempo: "1-2 horas",
        consiglio: "Hacer snorkel: los fondos son más interesantes que la playa.",
        lat: -8.60137,
        lng: 119.52052,
      },
      {
        nome: "Kanawa, Kelor y Manta Point",
        testo: "Islas y puntos de snorkel con arrecife de coral y, en algunos lugares, mantarrayas.",
        come: "En barca con tours de uno o más días.",
        quando: "En los meses con el mar más tranquilo; preguntar a la tripulación.",
        tempo: "medio día",
        consiglio: "Corrientes fuertes entre las islas: escuchar las instrucciones de la tripulación.",
        costo: "Para el buceo la tasa del parque va aparte: 25.000 IDR por actividad, unos 1,3 € (2026).",
        lat: -8.4948,
        lng: 119.75884,
      },
      {
        nome: "Taka Makassar",
        testo: "Una lengua de arena blanca que emerge con la marea baja en medio del mar, cerca del Manta Point. Alrededor el agua es poco profunda y turquesa, y se para para un baño y snorkel entre una parada y otra.",
        come: "En barca, como parada de los tours de uno o varios días.",
        quando: "Con la marea baja, cuando la arena queda al descubierto; la hora la decide la tripulación.",
        tempo: "1 hora",
        consiglio: "Crema solar y camiseta: no hay sombra.",
      },
      {
        nome: "Gili Lawa Darat",
        testo: "Una isla de colinas en el norte del parque, con una cresta de hierba desde la que se ven las bahías y las islas alrededor. Es una de las subidas panorámicas más bonitas después de Padar, y normalmente menos concurrida.",
        come: "En barca, en los tours de varios días que pasan por el norte del parque; subida a pie por un sendero empinado.",
        quando: "Al atardecer o al amanecer, durmiendo a bordo.",
        tempo: "1-1,5 horas",
        lat: -8.46933,
        lng: 119.55799,
        consiglio: "Calzado cerrado: el terreno está seco y resbala.",
      },
      {
        nome: "Isla de Kalong",
        testo: "Una isla de manglares de la que al atardecer salen miles de zorros voladores, los grandes murciélagos de la fruta, que cruzan el cielo hacia las islas cercanas. No se desembarca: se mira desde el barco fondeado.",
        come: "En barca, en los tours con noche a bordo, que fondean aquí por la tarde.",
        quando: "Al atardecer.",
        tempo: "1 hora",
        consiglio: "Es uno de los motivos para elegir al menos una noche en barco.",
      },
      {
        nome: "Cueva de Batu Cermin",
        testo: "Una cueva caliza a pocos kilómetros del centro de Labuan Bajo. El nombre, «piedra espejo», viene de la luz que a ciertas horas entra por una grieta y se refleja en las paredes. Dentro hay fósiles marinos en la roca.",
        come: "En moto o taxi desde el centro; se visita con un guía local y casco.",
        quando: "Hacia mediodía, cuando la luz entra en la cueva.",
        tempo: "1 hora",
        lat: -8.48374,
        lng: 119.89796,
        consiglio: "Buena media jornada en tierra antes o después de los tours en barca.",
      },
      {
        nome: "Mercado nocturno de Kampung Ujung",
        testo: "En el paseo marítimo de Labuan Bajo, por la noche, los puestos exponen la pesca del día y la asan al momento. Se come en mesas al aire libre, a precios mucho más bajos que los restaurantes con vistas al puerto.",
        come: "A pie desde el centro, en el paseo marítimo.",
        quando: "Desde el atardecer.",
        tempo: "1 hora",
        consiglio: "Acordar el precio del pescado antes de que lo pongan en la parrilla.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Amanecer: Padar",
          "Mañana: Pink Beach y snorkel",
          "Almuerzo a bordo",
          "Tarde: Rinca o Komodo con los guardas",
          "Atardecer: regreso a Labuan Bajo",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: tour de un día con Padar al amanecer, Pink Beach y Komodo; noche en el mercado de Kampung Ujung",
          "Día 2: snorkel en Kanawa y Kelor por la mañana, cueva de Batu Cermin por la tarde",
        ],
      },
      {
        titolo: "3 días (barco)",
        tappe: [
          "Día 1: Kanawa, Rinca, noche a bordo",
          "Día 2: Padar al amanecer, Pink Beach, Manta Point",
          "Día 3: isla de Komodo y regreso",
        ],
      },
    ],
    zone: [
      {
        nome: "Labuan Bajo",
        perChi: "quien hace tours de un día",
        testo: "Puerto con hoteles de todas las gamas, restaurantes junto al mar y el mercado nocturno de pescado. Base de todos los tours.",
      },
      {
        nome: "Playas fuera de la ciudad (Waecicu, Pede)",
        perChi: "quien quiere un resort junto al mar",
        testo: "Resorts y hoteles con piscina en la costa al norte y al sur del centro. Más tranquilos, pero hace falta un taxi para el puerto y los restaurantes.",
        fascia: "100-300 €",
      },
      {
        nome: "A bordo (liveaboard)",
        perChi: "quien quiere ver más",
        testo: "Dormir en el barco permite estar en Padar al amanecer, antes de los grupos. Cuesta más.",
      },
    ],
    sapori: [
      {
        nome: "Pescado a la parrilla del mercado nocturno",
        testo: "La pesca del día expuesta en el paseo marítimo de Labuan Bajo y asada al momento. Cuesta mucho menos que los restaurantes con vistas al puerto."
      },
      {
        nome: "Cocina de a bordo",
        testo: "A bordo cocina la tripulación: arroz, pescado y verduras, sencillo pero bueno."
      },
      {
        nome: "Café de Flores",
        testo: "Tostado en casa y servido sin filtro."
      }
    ],
    attenzioni: [
      "Acercarse a los dragones solo con un guarda: son depredadores peligrosos.",
      "Mar agitado y corrientes fuertes entre las islas: escuchar a la tripulación y no nadar solo.",
      "En Padar la fila en el sendero crece justo después del amanecer: subir con las primeras luces.",
      "Consultar las tarifas oficiales y los permisos del parque antes de reservar."
    ],
    gite: [
      {
        nome: "Cascada de Cunca Wulang",
        distanza: "aproximadamente 1 hora en coche desde Labuan Bajo",
        come: "Coche con conductor o moto, luego un paseo por el bosque con un guía del pueblo.",
        testo: "Una cascada en un cañón de roca con piscinas naturales donde bañarse. Es la mejor excursión por tierra cerca de Labuan Bajo.",
      },
      {
        nome: "Wae Rebo",
        distanza: "2 días: carretera hasta Denge, luego 2,5-3 horas de subida a pie",
        come: "Coche con conductor hasta Denge, luego la subida a pie; se duerme en las casas del pueblo.",
        testo: "Un pueblo manggarai con las casas cónicas tradicionales, en un valle entre montañas. No es una excursión de un día, pero sí una de las mejores experiencias de Flores.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta para Komodo?",
        risposta: "Un tour de un día cubre Padar, Pink Beach y los dragones. Con 2-3 días, mejor con una noche en barco, se añaden snorkel, Manta Point y Padar al amanecer sin prisas.",
      },
      {
        domanda: "¿Mejor el tour de un día o el barco con noche a bordo?",
        risposta: "El tour de un día es más barato pero va con prisa. Dormir a bordo permite subir a Padar al amanecer, antes de los grupos, y ver los zorros voladores de Kalong al atardecer.",
      },
      {
        domanda: "¿Cuánto cuesta la entrada al parque de Komodo?",
        risposta: "Para extranjeros 250.000 IDR por persona, unos 13 €, normalmente gestionada por el operador; el buceo tiene una tasa aparte. Las tarifas han cambiado varias veces: confirmarlas antes de reservar.",
      },
      {
        domanda: "¿Hay un límite de visitantes en Komodo?",
        risposta: "Desde el 1 de abril de 2026 el parque admite como máximo 1.000 visitantes al día, con las restricciones más estrictas en Padar, Rinca y Komodo. En temporada alta conviene reservar el tour con antelación.",
      },
      {
        domanda: "¿Es peligroso ver los dragones de Komodo?",
        risposta: "Son depredadores, pero la visita se hace solo con un guarda y por los senderos. El riesgo es bajo si se siguen las instrucciones y no se aleja uno del grupo.",
      },
      {
        domanda: "¿Cuál es la mejor época para Komodo?",
        risposta: "De abril a diciembre, en la estación seca, cuando el mar está más tranquilo. Las mantas nunca están garantizadas.",
      },
    ],
    esperienzeSlugs: ['trekking-draghi-komodo'],
    tripSlugs: ['indonesia-itinerario', 'bali-nusa-komodo', 'indonesia-isola-per-isola'],
    imageAlt: "Las colinas y las bahías de la isla de Padar vistas desde el mirador, Parque Nacional de Komodo",
    immagine: '/images/indonesia/komodo.jpg',
  },
  {
    slug: 'flores',
    paeseSlug: 'indonesia',
    ordine: 7,
    nome: 'Flores',
    tipologia: ['natura', 'cultura', 'vulcani'],
    giorniConsigliati: "5-7 días, a menudo combinados con Komodo vía Labuan Bajo",
    visitataPersonalmente: true,
    introduzione:
      "La isla más salvaje y menos desarrollada de las que toca el viaje, famosa por los tres lagos volcánicos que cambian de color del Kelimutu y por los pueblos tradicionales suspendidos entre las montañas.",
    percheAndarci:
      "Es un lado de Indonesia más rural y menos turístico, con paisajes volcánicos y una cultura de pueblos todavía viva.",
    cosaVedere: [
      "El Kelimutu, con los tres lagos de cráter de colores distintos",
      "El pueblo tradicional de Bena, a los pies del volcán Inerie",
      "Wae Rebo, el pueblo remoto al que solo se llega a pie",
      "Riung, punto de partida para el tour de las 17 islas",
    ],
    cosaFare: [
      "Amanecer en el Kelimutu para ver los lagos con la mejor luz (hay una ficha de experiencia dedicada)",
      "Trekking de 1-2 días hasta el pueblo de Wae Rebo",
      "Recorrido por los pueblos tradicionales alrededor de Bajawa, entre ellos Bena",
    ],
    doveDormire:
      "Moni es el pueblo desde el que se sale de noche hacia el Kelimutu, con guesthouses básicas; Bajawa sirve de base para los pueblos tradicionales, Labuan Bajo para el oeste y los tours a Komodo. En Wae Rebo se duerme en la casa comunal del pueblo, todos juntos en el suelo: no es un hotel y no hay que tratarlo como tal.",
    doveMangiare:
      "La oferta es mínima, y forma parte del viaje: fuera de Labuan Bajo se come en los warung de los pueblos, casi siempre arroz, pescado o pollo y verduras salteadas, con pocas alternativas. Merece la pena probar el se'i, la carne ahumada típica de las islas orientales, y en todas partes se encuentra el café de Flores, tostado en casa y servido sin filtro. En las guesthouses de Moni la cena se pide por la tarde, porque la cocinan expresamente.",
    comeArrivare:
      "Vuelo a Labuan Bajo para el oeste de la isla (y para seguir hacia Komodo), o a Ende o Maumere para el este.",
    comeSpostarsi:
      "La Trans-Flores, la carretera que cruza la isla de oeste a este: panorámica pero tortuosa y más lenta de lo que parece en el mapa.",
    periodoMigliore: "mayo-octubre",
    costi: "entre las islas más baratas del viaje",
    erroriDaEvitare: [
      "Subestimar los tiempos de recorrido en la Trans-Flores: las distancias en línea recta engañan",
    ],
    miaEsperienza:
      "Flores es la parte de Indonesia que se ha quedado atrás, y es precisamente eso lo que para mí la hace la más interesante. La Trans-Flores en el mapa parece corta, en realidad es una sucesión infinita de curvas: doscientos kilómetros son una jornada entera, y quien tenga poco tiempo haría mejor en renunciar. El Kelimutu al amanecer merece igualmente el despertador a las tres. Los colores de los tres lagos cambian con el tiempo y no hay manera de saber antes qué se va a encontrar, y ese es el sentido del lugar. Wae Rebo es lo más fuerte de la isla: tres horas de subida por el bosque, luego siete casas cónicas en un claro entre las montañas y nada más. Es un pueblo habitado, y se está a sus reglas.",
    luoghi: [
      {
        nome: "Kelimutu",
        testo: "Tres lagos de cráter en la misma montaña, de colores distintos que cambian con el tiempo por los gases volcánicos y las lluvias. No hay forma de saber de antemano qué colores se encontrarán, y ese es el sentido del lugar.",
        come: "Desde el pueblo de Moni en moto o coche hasta el aparcamiento, luego a pie. Despertador antes del amanecer.",
        quando: "Al amanecer, antes de que suba la niebla.",
        tempo: "3 horas",
        consiglio: "Merecen el madrugón antes del amanecer: la luz del amanecer sobre los lagos es lo mejor."
      },
      {
        nome: "Bena",
        testo: "Un pueblo tradicional a los pies del volcán Inerie, con filas de casas de paja y monumentos megalíticos de piedra. Los ngada siguen viviendo aquí.",
        come: "Desde Bajawa en coche, a poca distancia. Se deja un donativo en la entrada.",
        quando: "Por la mañana.",
        tempo: "1-2 horas",
        consiglio: "Dejar una pequeña ofrenda y preguntar antes de fotografiar a las personas."
      },
      {
        nome: "Wae Rebo",
        testo: "Un pueblo remoto con siete casas cónicas (mbaru niang) dispuestas en círculo alrededor del altar, en un claro entre las montañas, a unos 1.200 metros. Está habitado y se siguen sus reglas, empezando por el rito de bienvenida. Una de las cosas más fuertes de la isla.",
        come: "Desde la zona de Denge y Dintor, unos 4,5 km de sendero por el bosque: 2,5-3 horas de subida (2022). Se duerme en las casas de huéspedes del pueblo, en dormitorio. Se organiza a través del comité del pueblo o de un operador.",
        quando: "En la estación seca; con las lluvias el sendero está embarrado.",
        tempo: "2 días (1 noche)",
        consiglio: "Llevar un regalo modesto para la comunidad y respetar las normas del pueblo."
      },
      {
        nome: "Riung y las 17 islas",
        testo: "Un archipiélago de pequeñas islas con playas y snorkel.",
        come: "Desde Bajawa o Ruteng a Riung en coche y luego barca. Tours de medio día o de un día.",
        quando: "En la estación seca, con el mar más tranquilo.",
        tempo: "medio día",
        consiglio: "Venir con el tiempo justo: las distancias en la Trans-Flores engañan."
      },
      {
        nome: "Arrozales de telaraña de Cancar y Ruteng",
        testo: "Arrozales dispuestos en forma radial como una telaraña, según el antiguo reparto de tierras. El mejor mirador está en una colina cerca del pueblo.",
        come: "Desde Ruteng en coche.",
        quando: "Por la mañana o al atardecer.",
        tempo: "1 hora",
        consiglio: "Combinar con una parada en Ruteng, ciudad fresca de altura, y su café."
      }
    ],
    programmi: [
      {
        titolo: "5-7 días (este-oeste)",
        tappe: [
          "Día 1: Maumere o Ende, Moni",
          "Día 2: Kelimutu al amanecer, Trans-Flores hacia Bajawa",
          "Día 3: Bena y pueblos ngada",
          "Día 4: carretera a Ruteng, Cancar",
          "Día 5: Denge y subida a Wae Rebo",
          "Día 6: Wae Rebo, descenso y regreso a Labuan Bajo"
        ]
      }
    ],
    zone: [
      {
        nome: "Moni",
        perChi: "quien ve el Kelimutu",
        testo: "Pueblo de casas de huéspedes sencillas. La cena se pide por la tarde."
      },
      {
        nome: "Bajawa",
        perChi: "quien va a Bena",
        testo: "Ciudad de altura con alojamiento de todo tipo, más fresca."
      },
      {
        nome: "Labuan Bajo",
        perChi: "quien sale o llega",
        testo: "Puerto con más servicios, base para Komodo."
      }
    ],
    sapori: [
      {
        nome: "Se'i",
        testo: "Carne ahumada típica de las islas orientales."
      },
      {
        nome: "Café de Flores",
        testo: "Tostado en casa y servido sin filtro, en todas partes."
      },
      {
        nome: "Warung de pueblo",
        testo: "Arroz, pescado o pollo y verduras salteadas: la oferta es mínima, y forma parte del viaje."
      },
      {
        nome: "Sayur rebus",
        testo: "Verduras hervidas con sambal, sencillas y comunes."
      }
    ],
    attenzioni: [
      "La Trans-Flores es larga y sinuosa: tramos cortos en el mapa pueden llevar un día entero.",
      "En Wae Rebo y Bena se es huésped: se pregunta antes de fotografiar y se respetan las reglas locales.",
      "Las casas de huéspedes tienen pocas plazas: reservar para las paradas principales.",
      "Llevar efectivo: los cajeros son raros fuera de Labuan Bajo."
    ],
    esperienzeSlugs: ['alba-kelimutu'],
    tripSlugs: ['indonesia-itinerario', 'indonesia-isola-per-isola'],
    imageAlt: "Las casas cónicas mbaru niang del pueblo de Wae Rebo entre las montañas de Flores",
    immagine: '/images/indonesia/flores.jpg',
  },
  {
    slug: 'raja-ampat',
    paeseSlug: 'indonesia',
    ordine: 8,
    nome: 'Raja Ampat',
    tipologia: ['diving', 'natura', 'mare'],
    giorniConsigliati: "5-7 días, mejor en liveaboard o en varias islas distintas",
    visitataPersonalmente: true,
    introduzione:
      "El archipiélago más remoto del viaje, en Papúa Occidental: arrecifes considerados de los más biodiversos del mundo e islas en forma de seta que emergen de un mar color esmeralda.",
    percheAndarci:
      "Para quien hace buceo o snorkel es uno de los destinos más codiciados del mundo; incluso sin inmersiones, los miradores sobre las islas en forma de seta bastan para justificar el viaje.",
    cosaVedere: [
      "Piaynemo y Wayag, los miradores icónicos sobre las islas calizas en forma de seta",
      "Arborek, pueblo sobre palafitos con un arrecife accesible directamente desde la playa",
      "Los puntos de mantarrayas y los arrecifes vírgenes del parque marino",
    ],
    cosaFare: [
      "Buceo o snorkel en liveaboard entre los arrecifes del parque marino (hay una ficha de experiencia dedicada)",
      "Subida a los miradores de Piaynemo y Wayag",
      "Jornada en Arborek para el snorkel desde el pueblo",
    ],
    doveDormire:
      "Tres opciones muy distintas en presupuesto y comodidad (homestay, dive resort o liveaboard): la comparación está más abajo.",
    doveMangiare:
      "No hay elección, y no hace falta: en los homestays se come lo que cocina la familia, tres veces al día, pescado recién pescado con arroz y verduras. Es bueno y monótono. Fuera de los alojamientos no existen restaurantes, así que la última ocasión para comprar snacks, agua y efectivo es Sorong o Waisai: en las islas no hay cajeros.",
    comeArrivare:
      "Vuelo a Sorong (vía Yakarta o Makassar), luego ferri rápido o barca privada a Waisai o a los resorts/liveaboard.",
    comeSpostarsi: "Solo por mar: barca pública, barca privada o liveaboard.",
    periodoMigliore:
      "no existe una verdadera estación equivocada: hay dos experiencias distintas. De octubre a abril las corrientes traen un afloramiento de aguas ricas en plancton que atrae a las mantas y a los demás grandes pelágicos, el mar está más tranquilo y los liveaboard operan a pleno rendimiento: es la ventana más segura y con más fauna. De mayo a septiembre soplan los vientos del sureste, que levantan el mar sobre todo en el estrecho de Dampier y en las travesías hacia Misool: los desplazamientos entre islas pueden alargarse y las salidas a las zonas más expuestas pueden cancelarse, y muchos liveaboard en este periodo se desplazan a otro lugar. A cambio, el verano tiene mucha menos gente. Para la lluvia no hay una regla estacional: aquí llueve todo el año, en chubascos breves e imprevisibles. Lo que decide cuándo ir son el viento y lo que se quiere ver bajo el agua.",
    costi:
      "entre los destinos más caros de Indonesia por la logística y el permiso obligatorio del parque marino (PIN Raja Ampat)",
    erroriDaEvitare: [
      "No calcular el coste y los tiempos para obtener el permiso obligatorio del parque marino (PIN Raja Ampat)",
      "Subestimar los costes de transporte interno: los vuelos y las barcas hacia esta zona están entre los más caros del país",
      "Ir en verano esperando los mismos grandes pelágicos del invierno: mantas y tiburones son mucho menos frecuentes cuando el plancton no sube a la superficie",
      "No prever jornadas colchón si se viaja de mayo a septiembre: el viento puede cancelar una salida o alargar un traslado entre islas, sobre todo hacia Misool",
    ],
    confronti: [
      {
        titolo: "Dónde dormir en Raja Ampat: ¿homestay, resort o liveaboard?",
        introduzione:
          "Con un archipiélago hecho casi solo de islas y ninguna ciudad de verdad, dónde se duerme decide buena parte del viaje: presupuesto, contacto con las comunidades locales y qué puntos del parque se consigue realmente alcanzar.",
        opzioni: [
          {
            nome: "Homestay",
            sintesi: "Palafitos de gestión familiar en islas como Gam, Kri o Arborek: la base más sencilla y más extendida.",
            costo: "el más bajo de las tres opciones, normalmente con las comidas preparadas por la familia",
            durata: "más adecuada para estancias de una semana o más en una o dos islas",
            pro: [
              "El gasto se queda casi enteramente en la comunidad local, que es también lo que sostiene la protección del parque marino",
              "Muchos arrecifes excepcionales (Arborek sobre todo) se alcanzan a nado desde la playa, sin barca",
              "Contacto directo con quien vive en las islas",
            ],
            contro: [
              "Alojamientos básicos: baño a menudo compartido, electricidad solo a horas fijas (generador)",
              "Ningún restaurante fuera del alojamiento: se come lo que cocina la familia",
              "Para los puntos más lejanos (Wayag, Misool) hay que organizar igualmente barcas aparte",
            ],
            perChi: "Quien quiere la forma más barata y más cercana a la vida local de estar en Raja Ampat, y se conforma con explorar la zona alrededor de su isla.",
          },
          {
            nome: "Dive resort",
            sintesi: "Alojamientos de gama medio-alta, a menudo en una isla privada o casi, pensados para el buceo organizado.",
            costo: "medio-alto, a menudo con paquetes que incluyen las inmersiones",
            durata: "de pocos días a una semana, con salidas diarias en barca hacia los sitios cercanos",
            pro: [
              "Comodidad mucho más alta que el homestay: agua caliente, electricidad continua, restaurante propio",
              "Personal dedicado y barcas más rápidas y equipadas para las salidas de inmersión",
              "Buena base fija para quien quiere más comodidad sin renunciar al buceo diario",
            ],
            contro: [
              "Coste igualmente alto, y más lejos del modelo que sostiene directamente a las comunidades",
              "Queda ligado a una única zona: para los puntos lejanos hay que desplazarse igualmente",
            ],
            perChi: "Quien bucea en serio y quiere comodidad y organización, sin el presupuesto ni la flexibilidad de un liveaboard.",
          },
          {
            nome: "Liveaboard",
            sintesi: "Barca que hace de alojamiento y medio de transporte a la vez, desplazándose de noche para estar cada día en un punto distinto.",
            costo: "el más caro de las tres opciones, normalmente todo incluido",
            durata: "cruceros de varios días, la forma más eficiente de cubrir zonas lejanas entre sí",
            pro: [
              "Es la única manera práctica de llegar hasta Wayag o de empujar hacia el sur, hacia Misool, en el mismo viaje",
              "Ningún tiempo perdido en desplazamientos por tierra o ferris: se duerme mientras la barca cambia de zona",
              "Inmersiones y comidas organizadas por la tripulación, la mayor comodidad de las tres opciones",
            ],
            contro: [
              "El coste es con mucho el más alto de las tres opciones",
              "El menos ligado a las comunidades locales: el dinero se queda casi todo en el operador",
              "En la estación de los vientos (mayo-septiembre) muchos liveaboard se desplazan a otro lugar, para evitar las zonas más expuestas",
            ],
            perChi: "Quien tiene el presupuesto y quiere ver lo máximo del archipiélago, puntos más remotos incluidos, en una única semana organizada.",
          },
        ],
        raccomandazione:
          "Para un primer viaje con presupuesto contenido, el homestay en una isla como Kri o Arborek ya da muchísimo. El liveaboard se justifica cuando el objetivo es ver todo el archipiélago, Wayag incluido, en una única semana intensa: ahí es donde su coste, el más alto de las tres opciones, tiene sentido.",
      },
    ],
    miaEsperienza:
      "Es el sitio más bonito que he visto bajo el agua, y también el más fatigoso de alcanzar: dos vuelos, un ferri y una barca, con costes que no se parecen al resto de Indonesia. La diferencia, sin embargo, se ve en el primer snorkel: una densidad de peces como la del arrecife de Arborek, a veinte metros de la orilla, en otros sitios ya no existe. Las corrientes son fuertes y hay que respetarlas en serio: ciertos puntos se hacen solo en los horarios adecuados. Dormir en los homestays en lugar de en los resorts es la elección que merece la pena, porque ese modelo, más aún que el precio, es lo que mantiene en pie la protección del parque. Piaynemo al atardecer, con las escaleras de madera y la plataforma abarrotada, es el único momento en que uno se cruza con alguien más. Estuvimos en agosto de 2026, que en todas las guías figura como la estación equivocada. En parte lo es, pero de un modo distinto al que uno se espera: el mar fue espectacular igualmente, diez días sin ver una gota de lluvia. El viento, en cambio, se hizo notar: alargó un par de traslados entre las islas y nos hizo perder una salida a una zona más expuesta. La otra cuenta que hay que hacer es la de los grandes pelágicos: mantas y tiburones en verano son mucho más raros, porque el afloramiento de aguas ricas en plancton que los atrae es sobre todo un fenómeno invernal. Con los arrecifes llenos de peces igualmente y poquísimos turistas por ahí, fue un compromiso del que no me arrepiento.",
    luoghi: [
      {
        nome: "Piaynemo",
        testo: "El mirador icónico de Raja Ampat, con islas calizas en forma de seta que emergen de una laguna turquesa. Se llega por una escalera de madera.",
        come: "En barca desde las islas de Waisai o los homestays. Se paga el permiso del parque marino (PIN Raja Ampat).",
        quando: "Al atardecer, pero es el único momento en que uno se cruza con alguien.",
        tempo: "medio día",
        consiglio: "Subir pronto o al final del día para evitar la plataforma abarrotada."
      },
      {
        nome: "Wayag",
        testo: "El otro mirador famoso, en el norte, con decenas de islotes calizos en una laguna. Más lejos, requiere más tiempo y más dinero.",
        come: "Con liveaboard o barca privada, lejos de Waisai. Depende del viento y del mar.",
        quando: "En los meses con el mar más tranquilo: preguntar a homestays y operadores.",
        tempo: "1 día o más",
        consiglio: "Prever un día de margen: el viento puede cancelar la salida."
      },
      {
        nome: "Arborek",
        testo: "Un pueblo sobre palafitos con un arrecife accesible directamente desde la playa, con una densidad de peces a pocos metros de la orilla que en otros lugares es rara.",
        come: "En barca desde el resto de las islas. Se duerme en los homestays del pueblo.",
        quando: "Todo el año; mejor por la mañana.",
        tempo: "1-2 días",
        consiglio: "Dormir en homestays, no en resorts: ese modelo es lo que sostiene la protección del parque."
      },
      {
        nome: "Estrecho de Dampier y puntos de mantas",
        testo: "Los arrecifes vírgenes del parque marino, con mantas en las estaciones de limpieza y una gran variedad de peces. Las corrientes son fuertes y hay que respetarlas.",
        come: "En barca con operadores, en los horarios adecuados para las corrientes.",
        quando: "Las mantas y los grandes pelágicos dependen de la estación: preguntar a los operadores de buceo antes de fijar las fechas.",
        tempo: "1-2 días",
        consiglio: "Algunos puntos solo se hacen con la corriente adecuada: seguir las instrucciones del guía."
      },
      {
        nome: "Misool",
        testo: "El sur del parque, con arrecifes e islas calizas más remotos y zonas más calmadas. Menos transitado.",
        come: "Con liveaboard o resort, lejos de Waisai.",
        quando: "En los meses con el mar más tranquilo; con viento el mar hacia Misool se encrespa.",
        tempo: "2 días o más",
        consiglio: "Con viento los traslados hacia Misool pueden suspenderse: dejar margen."
      }
    ],
    programmi: [
      {
        titolo: "5-7 días",
        tappe: [
          "Día 1: vuelo a Sorong, ferri a Waisai",
          "Día 2-3: Arborek y snorkel en arrecifes cercanos",
          "Día 4: Piaynemo",
          "Día 5-6: puntos de mantas o Wayag, si el mar lo permite",
          "Día 7: regreso a Sorong"
        ]
      }
    ],
    zone: [
      {
        nome: "Homestays (Arborek, Gam, Kri)",
        perChi: "quien quiere ahorrar y apoyar a las comunidades",
        testo: "Se duerme en casa de familias, se come lo que cocinan, sin electricidad a todas horas."
      },
      {
        nome: "Liveaboard",
        perChi: "quien quiere cubrir más zonas",
        testo: "Barco con literas, para llegar a Wayag y Misool. Caro."
      },
      {
        nome: "Waisai",
        perChi: "quien llega y se va",
        testo: "Capital del distrito, con pocos servicios y parada logística."
      }
    ],
    sapori: [
      {
        nome: "Pescado fresco con arroz",
        testo: "Pescado recién pescado con arroz y verduras, en los homestays. Bueno y monótono."
      },
      {
        nome: "Papeda",
        testo: "Engrudo de sagú, típico de Papúa, servido con sopa de pescado amarilla."
      },
      {
        nome: "Fruta de temporada",
        testo: "La que haya, en las islas."
      }
    ],
    attenzioni: [
      "El permiso del parque marino (PIN Raja Ampat) es obligatorio: calcular su coste y tiempo.",
      "El viento puede alargar los traslados y suspender las salidas hacia las zonas expuestas: preguntar a los operadores cuál es la mejor estación.",
      "No hay cajeros en las islas: retirar en Sorong o Waisai.",
      "Las corrientes son fuertes: seguir siempre las instrucciones del guía."
    ],
    esperienzeSlugs: ['diving-liveaboard-raja-ampat'],
    tripSlugs: ['bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: "Los islotes calizos cubiertos de bosque en la laguna turquesa de Piaynemo, Raja Ampat",
    immagine: '/images/indonesia/raja-ampat.jpg',
  },
  {
    slug: 'mentawai',
    paeseSlug: 'indonesia',
    ordine: 9,
    nome: 'Mentawai',
    tipologia: ['natura', 'cultura', 'surf', 'mare'],
    giorniConsigliati: "7-8 días: 3-4 en la selva de Siberut, el resto en Sipora para el mar o el surf",
    visitataPersonalmente: true,
    introduzione:
      "Un archipiélago al oeste de Sumatra, con cuatro islas principales: Siberut, Sipora, Pagai Norte y Pagai Sur. En Siberut se vive unos días en la selva con una familia mentawai; en Sipora están las playas y algunos de los breaks de surf más famosos del mundo.",
    percheAndarci:
      "Para pasar unos días en una uma, la casa larga de los mentawai, con guías de Siberut, y después para el mar y las olas de Sipora.",
    cosaVedere: [
      "La selva de Siberut, remontando el río en canoa a motor hasta la uma de una familia",
      "Las playas de Sipora",
      "Tuapejat, la capital de las Mentawai, en Sipora",
      "Los breaks de surf de Sipora",
    ],
    cosaFare: [
      "Unos días con una familia mentawai en la selva de Siberut, con un operador que trabaja con guías mentawai",
      "Surf en los reefs de Sipora, solo para intermedios y expertos, en la temporada mayo-septiembre",
      "Clases de surf en olas de playa para quien empieza, mejor en los meses con poco swell",
    ],
    doveDormire:
      "En Siberut, en la uma de la familia que acoge, en una esterilla con mosquitero. En Sipora, homestay sencillos, o resorts y surf camps, más caros.",
    comeArrivare:
      "Ferri rápido Mentawai Fast desde Padang hasta Tuapejat (Sipora) y hasta Siberut. Horarios y precios cambian a menudo: hay que verificarlos en la página oficial del operador. No constan vuelos regulares confirmados para el aeropuerto de las Mentawai.",
    comeSpostarsi:
      "En Siberut, minivan, canoa a motor por el río y trekking por el barro. Entre las islas y hacia los breaks, barca privada o los traslados organizados por operadores y surf camps.",
    periodoMigliore:
      "mayo-principios de septiembre para la selva de Siberut, mayo-septiembre para los swells más grandes; de noviembre a enero llueve mucho",
    costi:
      "las estancias en la selva con operadores locales se venden por paquete, precios a consultar con el operador; los surfistas pagan una tasa de surf obligatoria, con importe que hay que comprobar al reservar.",
    erroriDaEvitare: [
      "Tratar la visita como un espectáculo: se es huésped en casa de una familia, se pide permiso antes de cada foto y no se paga por poses o disfraces",
      "Salir sin días de margen: con bandera roja del Syahbandar los ferris no salen",
      "Subestimar las condiciones: barro, mosquitos, sin electricidad, calor húmedo",
      "Pensar que los reefs famosos son aptos para principiantes",
      "Salir sin un seguro que cubra la evacuación y sin haber pasado por un centro de medicina del viajero por la malaria",
    ],
    miaEsperienza:
      "Fui con Mentawai Tribe, un operador de Padang que trabaja con guías de Siberut, y pasé unos días en la selva con una familia mentawai. Son lugares increíbles. Pero no es para todos: hay barro por todas partes, hay insectos, no hay electricidad y se duerme en una esterilla. Y hay un lado ético que afrontar con honestidad. No es un zoo humano, eres huésped en casa de alguien. Se pregunta antes de fotografiar, los regalos los acuerda el guía, el dinero debe llegar a la comunidad: por eso importa elegir un operador con guías mentawai. Conviene saber también que durante décadas el Estado reprimió sus tradiciones, quemando objetos rituales y arrestando a los chamanes. Después de la selva están las playas, preciosas, y el surf de Sipora, que es el motivo por el que casi todos llegan hasta aquí.",
    luoghi: [
      {
        nome: "Selva de Siberut y la uma de una familia mentawai",
        testo: "Se remonta el río en canoa a motor hasta la uma, la casa larga de una familia, y se pasan unos días en la selva. Barro por todas partes, insectos, sin electricidad, se duerme sobre una estera. No es un zoo humano: se es huésped en casa de alguien.",
        come: "Desde el puerto de Siberut, en canoa a motor y a pie por la selva. Con guías mentawai de operadores locales de Padang.",
        quando: "En los meses menos lluviosos; preguntar al operador, porque en ciertos periodos llueve mucho y los senderos se vuelven difíciles.",
        tempo: "3-8 días",
        consiglio: "Preguntar antes de fotografiar, acordar los regalos con el guía y elegir un operador con guías mentawai, para que el dinero llegue a la comunidad."
      },
      {
        nome: "Tuapejat y Sipora",
        testo: "La capital de las Mentawai y la isla donde están las playas más bonitas. Tras la selva de Siberut es la parte de mar y descanso.",
        come: "Ferri rápido Mentawai Fast desde Padang, solo algunos días a la semana. Horarios y precios cambian a menudo: consultarlos en la página del operador.",
        quando: "En los meses con el mar más tranquilo, preguntando a los operadores.",
        tempo: "2-3 días",
        consiglio: "Dejar días de margen: con bandera roja del Syahbandar los ferris no salen."
      },
      {
        nome: "Playas de Sipora",
        testo: "Playas preciosas y poco frecuentadas, con agua clara.",
        come: "En scooter o con traslados organizados desde Tuapejat.",
        quando: "En los meses con el mar más tranquilo.",
        tempo: "1-2 días",
        consiglio: "Llevar todo lo necesario: en la isla los servicios son pocos."
      },
      {
        nome: "Los rompientes de surf de las Mentawai",
        testo: "Olas entre las más célebres del mundo, el motivo por el que casi todos llegan hasta aquí. Los surf camps y los barcos llevan a los rompientes según el swell y el nivel de cada uno.",
        come: "Con barca privada o traslados organizados por campamentos de surf. Tasa de surf obligatoria.",
        quando: "Los swells y la mejor estación dependen del nivel: preguntar a los surf camps antes de fijar fechas.",
        tempo: "al menos 5 días",
        consiglio: "Los arrecifes famosos no son para principiantes: elegir los breaks según el nivel."
      }
    ],
    programmi: [
      {
        titolo: "8-9 días",
        tappe: [
          "Día 1: Padang, ferri a Siberut",
          "Día 2-5: selva con la familia mentawai",
          "Día 6: regreso y ferri a Tuapejat",
          "Día 7-8: playas o surf en Sipora",
          "Día 9: regreso a Padang"
        ]
      }
    ],
    zone: [
      {
        nome: "Siberut (uma u homestay)",
        perChi: "quien hace la selva",
        testo: "Se duerme con la familia o en un campamento sencillo. Sin electricidad."
      },
      {
        nome: "Tuapejat",
        perChi: "quien llega en ferri",
        testo: "Hoteles y restaurantes sencillos. Un punto logístico."
      },
      {
        nome: "Campamentos de surf de Sipora",
        perChi: "surfistas",
        testo: "Instalaciones dedicadas, con barcas para los breaks."
      }
    ],
    sapori: [
      {
        nome: "Pescado y arroz",
        testo: "La comida básica en la selva y en las islas."
      },
      {
        nome: "Sagú",
        testo: "Un alimento tradicional mentawai, preparado por las familias."
      },
      {
        nome: "Nasi padang en Padang",
        testo: "Antes o después de las islas, el plato de la ciudad de partida."
      }
    ],
    attenzioni: [
      "No tratar la visita como un espectáculo: se es huésped, se pregunta antes de fotografiar y no se paga por poses o disfraces.",
      "Con bandera roja los ferris no salen: partir con días de margen.",
      "Condiciones duras: barro, mosquitos, sin electricidad, calor húmedo.",
      "Seguro que cubra la evacuación y visita a una clínica de medicina del viajero por la malaria."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sumatra-mentawai', 'indonesia-isola-per-isola'],
    imageAlt: "La selva de las Mentawai que llega hasta el mar, con un río que serpentea hacia la costa, vista desde el dron",
    immagine: '/images/indonesia/mentawai-costa-foresta.webp',
  },
]
