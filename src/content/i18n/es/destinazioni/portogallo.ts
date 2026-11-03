import type { Destinazione } from '@/lib/types'

export const destinazioniPortogallo: Destinazione[] = [
  {
    slug: 'lisbona',
    paeseSlug: 'portogallo',
    ordine: 1,
    nome: 'Lisboa',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: "3-4 días, incluida la excursión a Sintra",
    visitataPersonalmente: true,
    introduzione:
      "La capital de Portugal está sobre siete colinas asomadas al estuario del Tajo. En gran parte fue reconstruida tras el terremoto de 1755, que dio forma a la Baixa: el barrio bajo de trazado regular ilustrado que hoy separa del río los barrios más antiguos y de colinas, Alfama y Bairro Alto.",
    percheAndarci:
      "Es una ciudad para vivir en vertical, entre cuestas, miradouros (miradores) y medios históricos pensados para sus colinas. En un espacio compacto están el barrio más antiguo y estratificado (Alfama) y el centro comercial reconstruido tras el terremoto (Baixa-Chiado). A una hora en tren está Sintra, uno de los paisajes de cuento más fotografiados de Europa.",
    cosaVedere: [
      "La Alfama, el barrio más antiguo, casi intacto tras el terremoto de 1755 gracias a su estructura árabe de callejones estrechos. Aquí se escucha el fado, el canto tradicional portugués, en las casas de fado (casas de fado) repartidas por los callejones",
      "El tranvía 28, la línea histórica que atraviesa Alfama, Graça, Baixa y Estrela en vagones de madera de época: la forma más clásica (y más concurrida) de ver las colinas de la ciudad por dentro",
      "Belém, junto al río, de donde partieron las grandes expediciones portuguesas de la época de los descubrimientos. Aquí están el Mosteiro dos Jerónimos, obra maestra manuelina patrimonio de la UNESCO, y la Torre de Belém, la fortaleza símbolo de la ciudad sobre el agua, también UNESCO",
      "Baixa y Chiado, el centro reconstruido tras 1755 sobre una cuadrícula ilustrada, con la Praça do Comércio junto al Tajo y el Elevador de Santa Justa, el ascensor panorámico neogótico de hierro forjado",
      "Los miradouros, los miradores repartidos por las colinas: al atardecer el Miradouro da Senhora do Monte y el Miradouro da Graça están entre los más bonitos",
      "Sintra, patrimonio de la UNESCO desde 1995, con el Palácio Nacional da Pena y la Quinta da Regaleira (hay un destino dedicado)",
    ],
    cosaFare: [
      "Coger el tranvía 28 pronto por la mañana, antes de las 9, para evitar el gentío y los carteristas que lo han hecho tan famoso como sus panoramas",
      "Escuchar fado en directo, por la noche, en una casa de fado de la Alfama",
      "Comer un pastel de nata en la Pastéis de Belém, la pastelería original de 1837, donde nació la receta",
      "Subir a los miradouros al atardecer, con una copa de vino tomada en un quiosco al aire libre (esplanada)",
      "Dedicar un día entero a Sintra, saliendo lo antes posible (hay un destino y una experiencia dedicados)",
    ],
    doveDormire:
      "Baixa-Chiado es la zona más céntrica y práctica, bien conectada con el resto de la ciudad. La Alfama tiene más carácter y es más viva, pero las cuestas son más empinadas y las calles más estrechas. Desde ambas se llega a pie a gran parte de las atracciones del centro.",
    doveMangiare:
      "El pastel de nata, hojaldre con crema pastelera y canela, se encuentra en todas partes, pero nació en la Pastéis de Belém. El bacalhau (bacalao) se prepara en cientos de variantes. En el Bairro Alto y en la Alfama se comen los petiscos, platitos para compartir como las tapas españolas. En los minúsculos quioscos históricos de la Baixa se bebe la ginjinha, el licor de guinda servido en vasitos.",
    comeArrivare:
      "El Aeropuerto Humberto Delgado (LIS) está a unos 7 km del centro: con el metro (línea roja) se llega en unos 20-25 minutos, o hay autobuses, taxis y apps de transporte. Desde Italia no hay un tren directo cómodo, así que se llega casi siempre en avión.",
    comeSpostarsi: "Las cuestas son muchas, y por eso hay tranvías históricos, funiculares (elevadores) y el Elevador de Santa Justa. Metro, autobuses y trenes de cercanías se pagan con la tarjeta contactless Viva Viagem/Navegante. El centro se recorre bien también a pie, con un poco más de aliento para las colinas.",
    periodoMigliore: "abril-mayo y septiembre-octubre por el clima suave y la menor afluencia; junio-agosto es temporada alta, calurosa y muy concurrida, sobre todo en el tranvía 28 y en Sintra; de noviembre a marzo es suave pero lluvioso",
    costi: "ciudad todavía bastante barata para Europa occidental, aunque los precios suben: comida sencilla 10-12 €, cena normal 15-20 € por persona, billete de tranvía o autobús unos 2 €",
    erroriDaEvitare: [
      "Subir al tranvía 28 en las horas centrales esperando un asiento y algo de tranquilidad: es de los transportes públicos más concurridos de Europa y de los preferidos por los carteristas",
      "Organizar un paseo a pie como si Lisboa fuera llana",
      "Ir a Sintra sin salir pronto: las colas del Palácio da Pena se hacen larguísimas ya a media mañana",
      "Buscar el «auténtico» pastel de nata solo en la Pastéis de Belém: también los de las pastelerías de barrio son excelentes, y sin fila",
    ],
    confronti: [
      {
        titolo: "Cómo llegar a Sintra desde Lisboa",
        introduzione: "A Sintra se puede ir por cuenta propia en tren o con un tour organizado. La diferencia principal es cuánto tiempo se está dispuesto a pasar en cola entre un palacio y otro.",
        opzioni: [
          {
            nome: "Tren desde Rossio + entradas en línea",
            sintesi: "Tren regional desde la estación de Rossio (unos 40 minutos, salidas muy frecuentes), luego autobús local 434 o subida a pie hasta el Palácio da Pena, con las entradas compradas en línea con antelación y con hora",
            costo: "tren unos 5 € por trayecto, entradas 15-25 € por sitio",
            durata: "día entero, saliendo pronto",
            pro: ["Cuesta poco", "Horarios y ritmo se deciden por uno mismo", "No se depende de un grupo"],
            contro: ["El autobús local y las colas hay que organizarlos por cuenta propia", "No hay una guía histórica"],
            perChi: "quien prefiere moverse solo y ahorrar",
          },
          {
            nome: "Tour organizado desde Lisboa",
            sintesi: "Traslado en minivan desde Lisboa con guía, entradas «salta fila» incluidas y un itinerario que a menudo toca también Cascais o la Boca do Inferno",
            costo: "unos 70-100 € por persona",
            durata: "día entero",
            pro: ["Ninguna logística que organizar", "A menudo entrada prioritaria", "Un guía que cuenta la historia"],
            contro: ["Cuesta más", "El ritmo lo decide el grupo", "Queda menos tiempo para explorar por cuenta propia"],
            perChi: "quien no quiere ocuparse de transportes y colas, o tiene poco tiempo",
          },
        ],
        raccomandazione: "Con el día libre y un mínimo de organización, el tren con las entradas reservadas en línea es la opción más eficiente. En Sintra importa poco cómo se llega: importa salir pronto por la mañana.",
      },
    ],
    esperienzeSlugs: ['tram-28-alfama', 'pasteis-de-belem'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: "El tranvía 28 amarillo iluminado de noche en una calle estrecha de Lisboa, con la fachada blanca de una iglesia al fondo de la calle",
    immagine: '/images/portogallo/lisbona.jpg',
  },
  {
    slug: 'sintra',
    paeseSlug: 'portogallo',
    ordine: 2,
    nome: 'Sintra',
    tipologia: ['storia', 'natura', 'arte'],
    giorniConsigliati: "un día entero, como excursión desde Lisboa",
    visitataPersonalmente: true,
    introduzione:
      "Una pequeña ciudad entre colinas boscosas, unos 30 km al noroeste de Lisboa, patrimonio de la UNESCO desde 1995 como «Paisaje cultural de Sintra». Durante siglos pasaron aquí el verano la nobleza y la familia real portuguesa, que construyeron palacios y villas románticas en una concentración única en Europa, en un microclima más fresco y húmedo que el de Lisboa.",
    percheAndarci:
      "El Palácio Nacional da Pena, con las torres de colores de estilo romántico decimonónico en lo alto de una colina, es uno de los paisajes más fotografiados de Portugal. La Quinta da Regaleira, con el pozo iniciático en espiral y los jardines esotéricos, está entre las cosas más insólitas del país. Por las colas, sin embargo, es también una de las jornadas más exigentes de todo el itinerario.",
    cosaVedere: [
      "El Palácio Nacional da Pena, palacio real romántico del siglo XIX que mezcla elementos góticos, manuelinos, moriscos y renacentistas, amarillo y rojo vivo, en lo alto de una colina sobre la ciudad",
      "La Quinta da Regaleira, villa con jardín esotérico de principios del siglo XX, famosa por el «Poço Iniciático» (pozo iniciático): una escalera en espiral que desciende bajo tierra entre símbolos masónicos y templarios",
      "El Castelo dos Mouros, las ruinas del castillo morisco del siglo IX, con vistas a Sintra y, en los días despejados, hasta el océano",
      "El Palácio Nacional de Sintra, en el centro, con las dos enormes chimeneas cónicas blancas que se ven desde todo el valle",
      "El casco antiguo de Sintra, pequeño y peatonal, con pastelerías históricas conocidas por los travesseiros (dulces de hojaldre rellenos de crema de almendras) y las queijadas",
    ],
    cosaFare: [
      "Coger el primer tren posible desde Lisboa para estar entre los primeros en la cola del Palácio da Pena: es el consejo que repite cualquiera que ya haya hecho esta excursión",
      "Reservar en línea, antes de salir, las entradas por franja horaria para Pena y Regaleira, sin contar con comprarlas en el lugar",
      "Usar el autobús local 434 entre la estación, el centro y el Palácio da Pena, en lugar de hacer a pie la subida empinada en los días calurosos",
      "Bajar al pozo iniciático de la Quinta da Regaleira, uno de los puntos más fotografiados y concurridos: también aquí hay que contar con la espera",
    ],
    doveDormire: "Se visita en el día desde Lisboa, sin dormir en Sintra.",
    doveMangiare: "Travesseiros y queijadas, los dulces típicos, en una de las pastelerías históricas del centro. Por lo demás hay sobre todo locales turísticos en torno a la estación y en el centro peatonal.",
    comeArrivare:
      "Con el tren regional desde la estación de Rossio en Lisboa: unos 40 minutos, con salidas muy frecuentes durante el día. Es mucho más sencillo y económico que el coche de alquiler, también porque en el centro de Sintra, los fines de semana y en temporada alta, escasea el aparcamiento.",
    comeSpostarsi: "El autobús local 434 hace un recorrido circular entre la estación, el casco antiguo y el Palácio da Pena. El centro peatonal se recorre a pie, pero entre los sitios principales (Pena, Regaleira, Castelo dos Mouros) siempre se sube, y las distancias son más largas de lo que parece en el mapa.",
    periodoMigliore:
      "el clima va bien todo el año; el problema es la multitud. En fines de semana y en temporada alta (junio-agosto) las colas en los palacios principales se hacen larguísimas ya desde última hora de la mañana. En un día laborable, saliendo lo antes posible, la espera se reduce mucho en cualquier estación.",
    costi: "Palácio da Pena unos 20-25 €, Quinta da Regaleira unos 15 €, con descuentos en los billetes combinados; tren desde Lisboa unos 5 € por trayecto",
    erroriDaEvitare: [
      "Llegar a media mañana pensando en «hacerlo todo con calma»: las colas en el Palácio da Pena y en la Quinta da Regaleira se alargan rápido después de las 10-11",
      "No reservar en línea las entradas por franja horaria: en temporada alta los horarios de la mañana se agotan",
      "Subestimar distancias y desniveles entre un sitio y otro: no es un centro compacto como Lisboa",
      "Querer ver los cuatro sitios principales (Pena, Regaleira, Castelo dos Mouros, Palácio Nacional) en un día: con las colas de verdad, por lo general hay que sacrificar al menos uno",
    ],
    esperienzeSlugs: ['sintra-giornata-da-lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: "El Palácio Nacional da Pena de Sintra con las torres amarillas y rojas que emergen del bosque bajo un cielo azul",
    immagine: '/images/portogallo/sintra.jpg',
  },
]
