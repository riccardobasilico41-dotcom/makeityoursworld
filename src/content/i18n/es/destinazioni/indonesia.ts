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
      "La puerta de entrada más salvaje del archipiélago: la selva del Gunung Leuser con los últimos orangutanes salvajes del planeta, el mayor lago volcánico del mundo y la cultura batak en la isla de Samosir.",
    percheAndarci:
      "Aquí el trekking por la selva está menos trillado que en otros destinos del sudeste asiático, y el momento más fuerte es el encuentro con los orangutanes.",
    cosaVedere: [
      "El Parque Nacional del Gunung Leuser en Bukit Lawang, uno de los últimos hábitats de los orangutanes de Sumatra",
      "El Lago Toba, el mayor lago volcánico del mundo, con la isla de Samosir en el centro",
      "Los pueblos batak de Samosir, con las casas tradicionales de tejado en silla de montar y las tumbas de piedra",
      "Los volcanes Sibayak y Sinabung en la zona de Berastagi",
    ],
    cosaFare: [
      "Trekking de 1-3 días por la selva de Bukit Lawang para avistar orangutanes salvajes (solo con guía certificado)",
      "Paseo en barca por el Lago Toba y jornada en moto por la isla de Samosir",
      "Baño en las aguas termales a los pies del Sibayak tras un trekking volcánico",
      "Inmersión en la cultura batak: ceremonias, artesanía, danzas Sigale-gale",
    ],
    doveDormire:
      "Guesthouses a lo largo del río Bohorok en Bukit Lawang, cómodas para salir temprano al trekking; homestays en la isla de Samosir para el Lago Toba.",
    doveMangiare:
      "Se come sencillo y casi en todas partes bien: el nasi padang (vitrinas con diez o quince platos ya preparados: se señala el que se quiere y se paga solo lo que se toca) es la institución local y nació precisamente aquí, en Sumatra occidental. En la zona del Lago Toba aparece el cerdo, raro en el resto de la Indonesia musulmana, porque los batak son cristianos. El café de Sumatra, bebido en los warung de la carretera a Berastagi, es de los mejores del país y cuesta unos pocos céntimos.",
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
          "Los orangutanes salvajes existen solo en estas dos islas, y son especies distintas: el de Sumatra (en peligro crítico, pocos miles de ejemplares) y el de Borneo. Quien ha hecho Bukit Lawang y piensa en Borneo, o al revés, hace bien en planteárselo, porque las dos experiencias son distintas.",
        opzioni: [
          {
            nome: "Bukit Lawang, Sumatra",
            sintesi: "Trekking a pie por la selva del Gunung Leuser, buscando a los animales en lugar de esperarlos.",
            costo: "el más barato de todos: trekkings guiados de 1-3 días por unas pocas decenas de euros, alojamientos sencillos junto al río",
            durata: "2-3 días",
            pro: [
              "Se camina dentro del bosque: el encuentro es activo, sin plataformas ni barcas",
              "Probabilidades altas, porque en la zona viven antiguos ejemplares rehabilitados ya salvajes",
              "Costes bajísimos, una cuarta parte o menos que cualquier opción de Borneo",
              "El Leuser es el último ecosistema del mundo donde conviven orangutanes, tigres, rinocerontes y elefantes",
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
            costo: "mucho más alto: los lodges del Kinabatangan se pagan por paquete, desde unos 100 € la noche",
            durata: "4-5 días para hacer ambos con sentido",
            pro: [
              "En Sepilok el encuentro cercano está razonablemente garantizado en casi cualquier época",
              "En el Kinabatangan los orangutanes son salvajes y llegan con todo lo demás: monos narigudos, elefantes pigmeos, cocodrilos, cálaos",
              "Estándares de gestión y regulación más altos, con prácticas de alimentación declaradas",
              "En la misma isla están el bosque primario del Danum Valley y Sipadan",
            ],
            contro: [
              "Se mira desde una plataforma o desde una barca a veinte-treinta metros: es menos directo",
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
    esperienzeSlugs: ['trekking-oranghi-bukit-lawang'],
    tripSlugs: ['indonesia-itinerario', 'sumatra-mentawai'],
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
      "La isla más poblada de Indonesia, corazón cultural del país con los templos budistas e hindúes más imponentes del sudeste asiático y dos de los volcanes más espectaculares para ver al amanecer.",
    percheAndarci:
      "Concentra en pocos cientos de kilómetros los templos de Borobudur y Prambanan, el amanecer sobre el cráter del Bromo y el fuego azul del Ijen, experiencias muy distintas entre sí.",
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
    esperienzeSlugs: ['alba-bromo-jeep'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
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
      "La isla más conocida del archipiélago: arrozales en terrazas, templos al borde del mar, playas de surf y una escena de vida nocturna y bienestar entre las más desarrolladas del sudeste asiático.",
    percheAndarci:
      "En poco espacio hay almas muy distintas: la calma cultural de Ubud, el surf y la vida nocturna del sur, los acantilados de Uluwatu y Nusa Penida a pocas horas de barca.",
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
    comeArrivare: "Vuelo a Denpasar (DPS), el principal aeropuerto internacional de la isla.",
    comeSpostarsi:
      "Moto de alquiler (se recomienda carné internacional, controles frecuentes) o conductor privado/Grab para los desplazamientos más largos.",
    periodoMigliore: "abril-octubre, estación seca",
    costi: "varían mucho: es de los destinos indonesios con más oferta, tanto económica como de gama alta",
    erroriDaEvitare: [
      "Alquilar una moto sin carné internacional: los controles son frecuentes y las multas elevadas",
      "Subestimar el tráfico entre Canggu y Seminyak en las horas punta",
      "No reservar con antelación la barca a Nusa Penida en temporada alta",
    ],
    miaEsperienza:
      "Bali son dos islas distintas según dónde se duerma, y es el motivo por el que recibe juicios opuestos. El sur, entre Canggu y Seminyak, está hecho de cemento, tráfico y locales pensados para quien llega de fuera: uno se puede divertir, pero Indonesia está en otra parte. Bastan veinte kilómetros hacia el interior y reaparecen las ofrendas de flores delante de las casas, renovadas cada mañana, y los templos en uso en lugar de en exposición: la isla vuelve a ser la que se venía a buscar. Más que cualquier arrozal o playa, me quedó grabada la danza Kecak en Uluwatu al atardecer, con setenta hombres sentados en círculo que hacen toda la música con la voz. Nusa Penida, en cambio, es ya víctima de su propio éxito (Kelingking a media jornada es una cola de gente en un sendero empinado) y conviene ir en la primera barca de la mañana.",
    esperienzeSlugs: ['giornata-nusa-penida'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
    imageAlt: "Los arrozales en terrazas con las palmeras a la entrada del templo de Gunung Kawi en Tampaksiring, Bali",
    immagine: '/images/indonesia/bali.jpg',
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
      "Rantepao es la base natural para todo Tana Toraja, con guesthouses sencillas en el centro; para Bunaken se elige entre los dive resorts de la propia isla, más cómodos para las inmersiones al amanecer, y Manado en tierra firme, más barata pero con una hora de barca cada día.",
    doveMangiare:
      "Célebes tiene la cocina más picante del archipiélago, sobre todo en el norte, alrededor de Manado: el plato que hay que conocer es el rica-rica, a base de guindilla en cantidades que no se negocian. En Makassar se come el coto makassar, sopa de ternera que se sirve en el desayuno, y el pescado a la parrilla en el paseo marítimo por la noche. En Tana Toraja aparecen el cerdo y el búfalo, porque la zona es cristiana: el pa'piong, carne cocinada dentro de un tubo de bambú, hay que pedirlo con horas de antelación.",
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
    esperienzeSlugs: ['diving-bunaken-national-park'],
    tripSlugs: ['indonesia-itinerario'],
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
      "Trekking de 2-3 días al Rinjani hasta el lago del cráter (hay una ficha de experiencia dedicada)",
      "Surf en Kuta Lombok o, para niveles avanzados, en Desert Point",
    ],
    doveDormire:
      "Gili Trawangan para la vida nocturna, Gili Air para el equilibrio entre servicios y calma, Gili Meno para el silencio; en Lombok, Kuta es la base del sur para surf y playas, Senaru y Sembalun son los dos pueblos desde los que parten los treks al Rinjani.",
    doveMangiare:
      "El plato de Lombok es el ayam taliwang, pollo a la parrilla en una salsa de guindilla que no hace concesiones: en sasak el nombre de la isla significa precisamente guindilla. En las Gili el mercado nocturno de Trawangan es el mejor sitio y el más barato: el pescado está expuesto sobre hielo, se elige y se espera a que lo pasen por la parrilla. En los restaurantes junto al mar se paga sobre todo la vista.",
    comeArrivare:
      "Vuelo al Lombok International Airport (LOP), o ferri rápido desde Bali (Padang Bai o Sanur hacia las Gili).",
    comeSpostarsi: "Solo cidomo (calesas tiradas por caballos) o bicicleta en las Gili, donde los vehículos a motor están prohibidos; coche o moto en el resto de Lombok.",
    periodoMigliore:
      "abril-noviembre; el Rinjani solo es accesible de abril a diciembre, cerrado en la estación de lluvias",
    costi: "en general más barato que Bali",
    erroriDaEvitare: [
      "Subestimar el cansancio y la altitud del trekking al Rinjani",
      "Intentar el trekking sin guía: es obligatorio por ley",
    ],
    miaEsperienza:
      "El Rinjani es el trekking más duro que he hecho en Indonesia, y la comparación con los demás no se sostiene. La subida al borde del cráter es larga y expuesta, y acaba en arena volcánica donde cada tres pasos se pierde uno. El campamento lo montamos en el filo, con viento, y por la noche se duerme poco y mal. Despertarse sobre el lago Segara Anak con las nubes debajo, sin embargo, lo compensa todo. Las Gili son perfectas justo después: sin coches ni motos, se recorren a pie en una hora y las tortugas se ven desde la playa, sin barca ni guía. Trawangan por la noche es más fiestera de lo que alguien se espera, Meno es lo contrario: mejor saberlo antes de reservar.",
    esperienzeSlugs: ['trekking-gunung-rinjani'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
    imageAlt: "El macizo del Rinjani de Lombok visto desde la playa de Gili Trawangan, con Gili Meno en primer plano",
    immagine: '/images/indonesia/lombok-gili.jpg',
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
      "El parque nacional que da nombre al último gran depredador terrestre que queda en la Tierra, el dragón de Komodo, en un archipiélago de islas bellas por encima y por debajo del nivel del mar.",
    percheAndarci:
      "Es probablemente el único lugar del mundo donde ver los dragones de Komodo en su hábitat natural, con además algunos de los paisajes y fondos marinos más fotografiados de Indonesia.",
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
      "Tour en barca (liveaboard de 2-4 días) desde Labuan Bajo entre las islas del parque",
    ],
    doveDormire:
      "Labuan Bajo es el punto de apoyo de todos, con una amplia oferta entre albergues y resorts en el puerto. Como alternativa se duerme a bordo, en los tours en barca de dos o más noches, que son también la única forma de estar en Padar al amanecer.",
    doveMangiare:
      "En Labuan Bajo se come pescado, y bien: el mercado nocturno del paseo marítimo expone la pesca del día y la asa al momento, a precios mucho más bajos que los restaurantes con vistas al puerto un poco más allá. A bordo cocina la tripulación: platos sencillos de arroz, pescado y verduras, pero buenos.",
    comeArrivare: "Vuelo a Labuan Bajo (Flores), punto de partida de todos los tours hacia el parque.",
    comeSpostarsi: "Solo en barca: tours organizados de uno o más días, o liveaboard.",
    periodoMigliore: "abril-diciembre, estación seca con mar más tranquilo",
    costi: "variable según la duración del tour en barca; los liveaboard de varios días tienen un coste más alto",
    erroriDaEvitare: [
      "Acercarse a los dragones sin un ranger o un guía: son depredadores peligrosos",
      "Subestimar el mar movido y las corrientes fuertes entre las islas",
    ],
    miaEsperienza:
      "Los dragones casi siempre están quietos. Son animales enormes que pasan el día a la sombra y se mueven poco, y quien se espera una escena de documental se queda descolocado: lo que impresiona son las dimensiones y el hecho de que el ranger lleve en la mano solo un palo bifurcado. Rinca es más salvaje y menos concurrida que la isla de Komodo, y conviene pedirla expresamente. El mejor momento es Padar al amanecer: una subida corta y empinada por una cresta, y debajo tres bahías con tres arenas distintas todas juntas. Hay que hacerla muy temprano, porque a partir de las ocho la fila en el sendero es continua y el calor se hace notar.",
    esperienzeSlugs: ['trekking-draghi-komodo'],
    tripSlugs: ['indonesia-itinerario'],
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
    esperienzeSlugs: ['alba-kelimutu'],
    tripSlugs: ['indonesia-itinerario'],
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
      "no existe una verdadera estación equivocada: hay dos experiencias distintas. De octubre a abril, con el pico entre diciembre y febrero, las corrientes traen un afloramiento de aguas ricas en plancton que atrae a las mantas y a los demás grandes pelágicos, el mar está más tranquilo y los liveaboard operan a pleno rendimiento: es la ventana más segura y con más fauna. De mayo a septiembre soplan los vientos del sureste, más fuertes en agosto, que levantan el mar sobre todo en el estrecho de Dampier y en las travesías hacia Misool: los desplazamientos entre islas pueden alargarse y las salidas a las zonas más expuestas pueden cancelarse, y muchos liveaboard en este periodo se desplazan a otro lugar. A cambio, el verano tiene mucha menos gente. Para la lluvia no hay una regla estacional: aquí llueve todo el año, en chubascos breves e imprevisibles. Lo que decide cuándo ir son el viento y lo que se quiere ver bajo el agua.",
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
            costo: "orientativamente 25-45 € la noche, comidas incluidas (desayuno, almuerzo y cena preparados por la familia)",
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
            costo: "desde unos 150 hasta más de 400 € la noche, a menudo con paquetes que incluyen las inmersiones",
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
            costo: "el más caro con diferencia: orientativamente 250-500 €+ al día por persona, todo incluido",
            durata: "en general 7-10 días, la forma más eficiente de cubrir zonas lejanas entre sí",
            pro: [
              "Es la única manera práctica de llegar hasta Wayag o de empujar hacia el sur, hacia Misool, en el mismo viaje",
              "Ningún tiempo perdido en desplazamientos por tierra o ferris: se duerme mientras la barca cambia de zona",
              "Inmersiones y comidas organizadas por la tripulación, la mayor comodidad de las tres opciones",
            ],
            contro: [
              "El coste es con mucho el más alto de las tres opciones, a menudo el doble o el triple de una semana en homestay",
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
    esperienzeSlugs: ['diving-liveaboard-raja-ampat'],
    tripSlugs: [],
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
      "Los breaks de Sipora: Lance's Left y HTs en el sur, Telescopes en el norte",
    ],
    cosaFare: [
      "Unos días con una familia mentawai en la selva de Siberut, con un operador que trabaja con guías mentawai",
      "Surf en los reefs de Sipora, solo para intermedios y expertos, en la temporada mayo-septiembre",
      "Clases de surf en olas de playa para quien empieza, mejor en los meses con poco swell",
    ],
    doveDormire:
      "En Siberut, en la uma de la familia que acoge, en una esterilla con mosquitero. En Sipora, homestay (aproximadamente 700.000-1.500.000 IDR por noche) o resorts y surf camps (desde unos 4.000.000 IDR).",
    comeArrivare:
      "Ferri rápido Mentawai Fast desde Padang: unas 3,5 horas hasta Tuapejat (Sipora) y unas 4 hasta Siberut. Horarios y precios (300.000-400.000 IDR según las fuentes) cambian a menudo: hay que verificarlos en la página oficial del operador. No constan vuelos regulares confirmados para el aeropuerto de las Mentawai.",
    comeSpostarsi:
      "En Siberut, minivan, canoa a motor por el río y trekking por el barro. Entre las islas y hacia los breaks, barca privada (aproximadamente 1.500.000-3.000.000 IDR al día) o los traslados organizados por operadores y surf camps.",
    periodoMigliore:
      "mayo-principios de septiembre para la selva de Siberut, mayo-septiembre para los swells más grandes; de noviembre a enero llueve mucho",
    costi:
      "estancias con Mentawai Tribe de 200 € (3 días) a 550 € (8 días) por persona; tasa de surf obligatoria, con importe actual por verificar (las fuentes van de 75 a 130 USD)",
    erroriDaEvitare: [
      "Tratar la visita como un espectáculo: se es huésped en casa de una familia, se pide permiso antes de cada foto y no se paga por poses o disfraces",
      "Salir sin días de margen: con bandera roja del Syahbandar los ferris no salen",
      "Subestimar las condiciones: barro, mosquitos, sin electricidad, calor húmedo",
      "Pensar que los reefs famosos son aptos para principiantes",
      "Salir sin un seguro que cubra la evacuación y sin haber pasado por un centro de medicina del viajero por la malaria",
    ],
    miaEsperienza:
      "Fui con Mentawai Tribe, un operador de Padang que trabaja con guías de Siberut, y pasé unos días en la selva con una familia mentawai. Son lugares increíbles. Pero no es para todos: hay barro por todas partes, hay insectos, no hay electricidad y se duerme en una esterilla. Y hay un lado ético que afrontar con honestidad. No es un zoo humano, eres huésped en casa de alguien. Se pregunta antes de fotografiar, los regalos los acuerda el guía, el dinero debe llegar a la comunidad: por eso importa elegir un operador con guías mentawai. Conviene saber también que durante décadas el Estado reprimió sus tradiciones, quemando objetos rituales y arrestando a los chamanes. Después de la selva están las playas, preciosas, y el surf de Sipora, que es el motivo por el que casi todos llegan hasta aquí.",
    esperienzeSlugs: [],
    tripSlugs: ['sumatra-mentawai'],
    imageAlt: "La selva de Siberut y las playas de Sipora, islas Mentawai",
  },
]
