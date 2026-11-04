import type { Destinazione } from '@/lib/types'

export const destinazioniLettonia: Destinazione[] = [
  {
    slug: 'riga',
    paeseSlug: 'lettonia',
    ordine: 1,
    nome: 'Riga',
    tipologia: ['città', 'architettura', 'gastronomia'],
    giorniConsigliati: '3 días, incluida la excursión a Jūrmala',
    visitataPersonalmente: true,
    introduzione:
      "Es la capital de Letonia y la mayor de las tres capitales bálticas. El casco histórico medieval, patrimonio UNESCO desde 1997, se asoma al río Daugava con las agujas de las iglesias hanseáticas y la Casa de las Cabezas Negras. Justo fuera de las murallas, el barrio construido entre los siglos XIX y XX tiene una de las densidades de arquitectura Art Nouveau más altas del mundo. Un poco más allá, el Mercado Central, hecho con cinco antiguos hangares para dirigibles, sigue siendo el mayor bazar cubierto de Europa.",
    percheAndarci:
      "En un espacio pequeño hay un centro medieval auténtico, todo un barrio Art Nouveau para mirar con la nariz al aire y un mercado que es un monumento industrial donde todavía se hace la compra cada día. Desde aquí sale además la excursión más clásica de la costa letona, la playa de Jūrmala.",
    cosaVedere: [
      "La Plaza de la Catedral (Doma laukums) con la Catedral de Riga (Rīgas Doms), la iglesia más grande del Báltico, y su histórico órgano",
      "La Iglesia de San Pedro, con la plataforma panorámica en la aguja a 72 metros: es la vista más alta sobre la Ciudad Vieja y el río Daugava",
      "La Casa de las Cabezas Negras (Melngalvju nams), la fachada renacentista más fotografiada de la plaza del ayuntamiento, reconstruida tras la destrucción de la guerra",
      "Las Tres Hermanas (Trīs brāļi), tres casas medievales y barrocas en fila en la calle Mazā Pils, entre los edificios de piedra más antiguos de la ciudad",
      "El barrio Art Nouveau, a lo largo de Alberta iela, Elizabetes iela y Strēlnieku iela: cientos de fachadas decoradas con máscaras, rostros esculpidos y motivos florales, muchas del arquitecto Mihails Eizenšteins, padre del director Serguéi Eisenstein",
      "El Mercado Central (Centrāltirgus): cinco pabellones hechos con hangares para dirigibles alemanes de la Primera Guerra Mundial, abierto en 1930, cuando era el más grande y moderno de Europa. Forma parte del sitio UNESCO junto con la Ciudad Vieja",
    ],
    cosaFare: [
      "Subir a la torre de la Iglesia de San Pedro para el panorama sobre la Ciudad Vieja y el Daugava",
      "Caminar por Alberta iela con la nariz al aire, buscando las fachadas más elaboradas del barrio Art Nouveau",
      "Pasear entre los puestos del Mercado Central, en los pabellones de pescado, carne, lácteos y verdura, parándose a probar las especialidades locales",
      "Pasar una noche entre bares y restaurantes de la Ciudad Vieja, con una parada en el Bar Skyline o en otro rooftop para ver los tejados",
    ],
    doveDormire:
      "En la Ciudad Vieja (Vecrīga) se tiene todo a pie, vida nocturna incluida. El barrio Art Nouveau, justo fuera de las murallas hacia el norte, es más tranquilo e igual de céntrico, y allí se puede dormir dentro de un edificio modernista.",
    doveMangiare:
      "El plato invernal más identitario es el pelēkie zirņi ar speķi, guisantes grises con panceta. El rupjmaize, el pan de centeno negro, está en la base de buena parte de la cocina letona, incluido el rupjmaizes kārtojums, un postre en capas con nata y frutos del bosque. Para probar los productos locales, del queso ahumado al pescado del Báltico, los puestos del Mercado Central son la forma más económica y auténtica.",
    comeArrivare:
      "El Aeropuerto Internacional de Riga (RIX), el principal aeropuerto del Báltico, está a unos 10 km del centro: autobús o tranvía en 20-30 minutos, o taxi o Bolt en pocos minutos. Desde algunos aeropuertos italianos hay vuelos directos low cost, estacionales o durante todo el año; si no, se hace escala en un hub europeo. Desde Vilna se llega en autobús en unas 4 horas, con varias compañías (entre ellas Lux Express) y muchos servicios al día.",
    comeSpostarsi:
      "El casco histórico se recorre todo a pie. Tranvías, trolebuses y autobuses de la red Rīgas satiksme cubren el resto de la ciudad, con billetes por tiempo económicos. Para Jūrmala está el tren regional desde la estación central, unos 30 minutos, con salidas al menos cada media hora.",
    periodoMigliore:
      "mayo-septiembre, por el clima suave y, en pleno verano, la posibilidad de unir la ciudad con un baño en Jūrmala. Junio-agosto es la temporada más concurrida. El invierno (noviembre-marzo) es frío y a menudo ventoso, pero la Ciudad Vieja aguanta bien y en diciembre está el mercadillo de Navidad en la Plaza de la Catedral.",
    costi: "ciudad económica para los estándares de Europa occidental: entrada a la torre de San Pedro 9 €, cena normal 10-16 € por persona, tren a Jūrmala unos 2 € por trayecto.",
    erroriDaEvitare: [
      "Quedarse en la Ciudad Vieja: el barrio Art Nouveau justo fuera de las murallas es una parte central de la arquitectura de Riga tanto como el centro medieval",
      "Ir al Mercado Central el fin de semana después de comer: los mejores puestos se vacían pronto, y la mañana, con los vendedores locales, es el momento más auténtico",
      "Programar Jūrmala sin mirar el tiempo: es una excursión a la playa y tiene sentido sobre todo de junio a agosto",
      "Pensar que el ruso no hace falta: todavía lo habla la considerable minoría rusófona de la ciudad, y en ciertas situaciones cotidianas fuera del centro turístico es más útil que el inglés",
    ],
    luoghi: [
      {
        nome: "Catedral de Riga y Plaza del Domo",
        testo: "La mayor catedral luterana de los países bálticos, fundada en 1211, con un órgano histórico. La plaza está rodeada de cafés.",
        come: "A pie desde el casco antiguo.",
        quando: "Mañana; por la tarde hay a menudo conciertos de órgano.",
        tempo: "1 hora",
        url: "https://doms.lv",
        consiglio: "Preguntar los horarios de los conciertos de órgano."
      },
      {
        nome: "Iglesia de San Pedro",
        testo: "Iglesia gótica cuya aguja tiene una plataforma panorámica a 72 metros, la vista más alta del casco antiguo y del Daugava. Se sube en ascensor.",
        come: "A pie, cerca de la Plaza del Ayuntamiento.",
        quando: "Día despejado.",
        tempo: "45 minutos",
        costo: "9 euros por la plataforma (dato del sitio, a revisar)",
        consiglio: "Mejor subir por la mañana, cuando la luz es clara."
      },
      {
        nome: "Casa de los Cabezas Negras",
        testo: "Fachada renacentista flamenca, destruida en la Segunda Guerra Mundial y reconstruida. Pertenecía a la cofradía de mercaderes solteros.",
        come: "En la Plaza del Ayuntamiento.",
        quando: "Mañana, para las fotos.",
        tempo: "30 minutos",
        url: "https://www.melngalvjunams.lv",
        consiglio: "La Plaza del Ayuntamiento es el mejor punto para las fotos."
      },
      {
        nome: "Los Tres Hermanos",
        testo: "Tres casas en fila en la calle Mazā Pils, entre los edificios de piedra más antiguos de la ciudad, de épocas distintas, del siglo XV a finales del XVII.",
        come: "A pie desde el casco antiguo.",
        quando: "De día.",
        tempo: "15 minutos",
        costo: "entrada libre",
        consiglio: "Dentro está el Museo de Arquitectura."
      },
      {
        nome: "Barrio Art Nouveau",
        testo: "Alberta iela, Elizabetes iela y Strēlnieku iela, con cientos de fachadas decoradas con máscaras, rostros y motivos florales, muchas obra del arquitecto Mijaíl Eisenstein.",
        come: "A pie o en tranvía desde el centro (15 minutos).",
        quando: "Mañana, con luz plena sobre las fachadas.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "Levantar la vista: los detalles están sobre el primer piso."
      },
      {
        nome: "Mercado Central",
        testo: "Cinco pabellones hechos con los hangares de zepelines alemanes de la Primera Guerra Mundial, abiertos en 1930. Uno de los mercados cubiertos más grandes de Europa.",
        come: "A pie desde la estación de ferrocarril.",
        quando: "Mañana.",
        tempo: "1-2 horas",
        consiglio: "Probar el pescado ahumado en el pabellón del pescado."
      },
      {
        nome: "Monumento a la Libertad y Museo de la Ocupación",
        testo: "El monumento de 1935 es el símbolo de la independencia letona, con una guardia de honor. El Museo de la Ocupación, en la Plaza del Ayuntamiento, cuenta la historia soviética y nazi.",
        come: "A pie desde el casco antiguo (10 minutos).",
        quando: "Mañana.",
        tempo: "1,5 horas",
        url: "https://okupacijasmuzejs.lv",
        consiglio: "Comprobar horarios y condiciones de entrada del Museo de la Ocupación en su sitio web."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Domo y San Pedro",
          "Casa de los Cabezas Negras",
          "Almuerzo en el Mercado Central",
          "Tarde: Art Nouveau",
          "Noche: casco antiguo"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Museo de la Ocupación",
          "Monumento a la Libertad",
          "Excursión a Jūrmala (ver ficha)"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo (Vecrīga)",
        perChi: "Quien quiere estar a un paso de las atracciones",
        testo: "Cerca de todo, pero ruidoso por la noche; muchos bares."
      },
      {
        nome: "Centro Art Nouveau",
        perChi: "Quien busca ambiente y restaurantes",
        testo: "Tranquilo, con edificios bonitos; a 10 minutos del casco antiguo."
      },
      {
        nome: "Āgenskalns",
        perChi: "Quien prefiere un barrio local",
        testo: "Al otro lado del río, más barato; conectado en tranvía."
      }
    ],
    sapori: [
      {
        nome: "Rupjmaize",
        testo: "Pan de centeno oscuro y dulce, base de la cocina letona."
      },
      {
        nome: "Pelēkie zirņi ar speķi",
        testo: "Guisantes grises con panceta, plato tradicional."
      },
      {
        nome: "Rīgas Melnais balzams",
        testo: "Licor negro de hierbas, para probar en los bares del casco antiguo."
      },
      {
        nome: "Pescado ahumado",
        testo: "Excelente en el Mercado Central: salmón, anguila, espadines."
      }
    ],
    attenzioni: [
      "Locales nocturnos en el casco antiguo: algunos inflan la cuenta, revisar la carta antes de pedir.",
      "Taxis: usar Bolt o Eco Taxi, no los aparcados cerca de la estación.",
      "Carteristas en el casco antiguo y en el Mercado Central.",
      "En invierno las aceras están heladas: calzado adecuado."
    ],
    esperienzeSlugs: ['riga-art-nouveau-passeggiata', 'riga-mercato-centrale-tour'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "El skyline de la Ciudad Vieja de Riga visto desde el Daugava, con las agujas de San Pedro y de la Catedral sobre la ribera",
    immagine: '/images/lettonia/riga.jpg',
  },
  {
    slug: 'jurmala',
    paeseSlug: 'lettonia',
    ordine: 2,
    nome: 'Jūrmala',
    tipologia: ['mare', 'architettura', 'relax'],
    giorniConsigliati: 'media jornada, como excursión desde Riga',
    visitataPersonalmente: true,
    introduzione:
      "La ciudad balnearia histórica de Letonia: unos 32 km de arena blanca finísima en el Golfo de Riga, a 20 km y media hora de tren de la capital. Desde los tiempos de los zares hasta la época soviética, cuando iba a veranear la élite de la URSS, en Jūrmala surgieron cientos de villas de madera Art Nouveau y Art Déco. Muchas hoy están restauradas y son casas privadas, hoteles o pequeños museos.",
    percheAndarci:
      "Es la playa más fácil de alcanzar partiendo de una capital de este itinerario. Detrás de la arena, además, las calles residenciales llenas de villas de madera decoradas son un museo difuso de arquitectura balnearia con más de un siglo de historia letona.",
    cosaVedere: [
      "La playa de arena blanca, continua durante unos 32 km, entre las más anchas y limpias del Báltico",
      "Jomas iela, la calle peatonal de Majori, el centro de la localidad, con tiendas, cafés y heladerías",
      "Las villas de madera Art Nouveau y Art Déco en las calles residenciales de Majori y Dzintari, muchas con tallas hechas a mano y verandas acristaladas",
      "La Dzintari Concert Hall, la sala de conciertos al aire libre entre los pinos, sede histórica de festivales y eventos de verano",
    ],
    cosaFare: [
      "Caminar largo rato por la playa, desde la estación de Majori hacia Dzintari o Bulduri",
      "Pasear por las calles residenciales detrás de Jomas iela y mirar desde fuera las villas de madera decoradas",
      "Pararse en uno de los cafés o restaurantes del paseo marítimo, abiertos todo el año y más animados en verano",
    ],
    doveDormire: "En este itinerario Jūrmala se visita en media jornada desde Riga, sin dormir allí. Quien quiera quedarse unos días junto al mar puede añadirla como ampliación.",
    doveMangiare: "A lo largo de Jomas iela restaurantes y cafés hacen cocina letona e internacional; en verano varios chiringuitos de la playa sirven pescado a la parrilla y helado.",
    comeArrivare: "Desde Riga con el tren regional desde la estación central (Rīga Centrālā stacija) hasta Majori: unos 30 minutos, con salidas al menos cada media hora.",
    comeSpostarsi: "El centro de Majori y la playa se recorren a pie. Para Dzintari o las zonas más lejanas se puede volver a tomar el mismo tren regional, que para en varios puntos a lo largo de la costa.",
    periodoMigliore: "junio-agosto para bañarse. En las estaciones intermedias el paseo por la playa y entre las villas de madera sigue siendo agradable, con menos gente.",
    costi: "excursión económica: tren unos 2 € por trayecto, playa gratuita, comida en un café del paseo marítimo 8-15 €.",
    erroriDaEvitare: [
      "Ir fuera de temporada esperando la vida playera del verano: de octubre a mayo la playa está casi desierta y muchos locales cierran",
      "Quedarse solo en la playa sin pasear por las calles residenciales: son las villas de madera decoradas las que hacen que Jūrmala sea distinta de «otra playa»",
      "Subestimar el agua baja y fresca del Golfo de Riga, muy distinta de un baño en el Mediterráneo",
    ],
    luoghi: [
      {
        nome: "Playa de Jūrmala",
        testo: "Una playa de arena blanca continua de unos 32 km, entre las más anchas y limpias del Báltico, en la costa del Golfo de Riga.",
        come: "Tren desde Riga a Majori (unos 30 minutos).",
        quando: "Verano, cuando hace calor; en invierno está desierta y evocadora.",
        tempo: "media jornada",
        costo: "entrada libre",
        consiglio: "El tren es más cómodo que el coche: en verano se paga un peaje para entrar en vehículo."
      },
      {
        nome: "Jomas iela",
        testo: "La calle peatonal de Majori, el centro del pueblo, con tiendas, cafés y heladerías. En verano está muy animada.",
        come: "A pie desde la estación de Majori (5 minutos).",
        quando: "Tarde y noche de verano.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "Elegir un café en las calles laterales para mejores precios."
      },
      {
        nome: "Villas de madera Art Nouveau",
        testo: "En las calles residenciales de Majori y Dzintari, villas de madera con tallas y galerías acristaladas, ejemplos de arquitectura de madera de principios del siglo XX.",
        come: "A pie, detrás de Jomas iela.",
        quando: "De día, con buena luz.",
        tempo: "1 hora",
        costo: "entrada libre",
        consiglio: "Se mira desde fuera: son residencias privadas."
      },
      {
        nome: "Sala de conciertos Dzintari",
        testo: "La sala al aire libre entre los pinos, sede histórica de festivales y conciertos de verano, con música clásica y pop.",
        come: "Tren hasta Dzintari.",
        quando: "Verano, por la noche.",
        tempo: "2 horas",
        url: "https://www.dzintarukoncertzale.lv",
        consiglio: "Consultar el programa de los conciertos en cartel."
      }
    ],
    sapori: [
      {
        nome: "Pescado a la parrilla",
        testo: "Salmón y espadines servidos en los quioscos de la playa."
      },
      {
        nome: "Helado",
        testo: "Quioscos en el paseo marítimo, en verano, también baratos."
      }
    ],
    attenzioni: [
      "Para entrar en coche en Jūrmala en verano se paga una tasa: la excursión en tren es más sencilla.",
      "La playa tiene viento: llevar una sudadera incluso en verano.",
      "Los fines de semana de verano los restaurantes están llenos: reservar."
    ],
    esperienzeSlugs: ['jurmala-spiaggia-ville-liberty'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "Una villa de madera con verandas acristaladas y decoraciones talladas entre los árboles de Jūrmala",
    immagine: '/images/lettonia/jurmala.jpg',
  },
]
