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
      "Es la capital de Letonia y la mayor de las tres capitales bálticas. El casco histórico medieval, patrimonio UNESCO desde 1997, se asoma al río Daugava con las agujas de las iglesias hanseáticas y la Casa de las Cabezas Negras. Justo fuera de las murallas, el barrio construido entre los siglos XIX y XX es famoso por sus edificios Art Nouveau. Un poco más allá, el Mercado Central, hecho con cinco antiguos hangares para dirigibles, es uno de los grandes mercados cubiertos de Europa.",
    percheAndarci:
      "En un espacio pequeño hay un centro medieval auténtico, todo un barrio Art Nouveau para mirar con la nariz al aire y un mercado que es un monumento industrial donde todavía se hace la compra cada día. Desde aquí sale además la excursión más clásica de la costa letona, la playa de Jūrmala.",
    cosaVedere: [
      "La Plaza de la Catedral (Doma laukums) con la Catedral de Riga (Rīgas Doms), la gran iglesia medieval de la ciudad, y su histórico órgano",
      "La Iglesia de San Pedro, con la plataforma panorámica en la aguja a 72 metros, con vistas sobre la Ciudad Vieja y el río Daugava",
      "La Casa de las Cabezas Negras (Melngalvju nams), la célebre fachada renacentista de la plaza del ayuntamiento, reconstruida tras la destrucción de la guerra",
      "Los Tres Hermanos (Trīs brāļi), tres casas de épocas distintas en fila en la calle Mazā Pils, en la Ciudad Vieja",
      "El barrio Art Nouveau, a lo largo de Alberta iela y las calles cercanas: cientos de fachadas decoradas con máscaras, rostros esculpidos y motivos florales, muchas del arquitecto Mihails Eizenšteins, padre del director Serguéi Eisenstein",
      "El Mercado Central (Centrāltirgus): cinco pabellones hechos con hangares para dirigibles alemanes de la Primera Guerra Mundial, abierto en 1930. Forma parte del sitio UNESCO junto con la Ciudad Vieja",
    ],
    cosaFare: [
      "Subir a la torre de la Iglesia de San Pedro para el panorama sobre la Ciudad Vieja y el Daugava",
      "Caminar por Alberta iela con la nariz al aire, buscando las fachadas más elaboradas del barrio Art Nouveau",
      "Pasear entre los puestos del Mercado Central, en los pabellones de pescado, carne, lácteos y verdura, parándose a probar las especialidades locales",
      "Pasar una noche entre bares y restaurantes de la Ciudad Vieja, con una parada en un rooftop para ver los tejados",
    ],
    doveDormire:
      "En la Ciudad Vieja (Vecrīga) se tiene todo a pie, vida nocturna incluida. El barrio Art Nouveau, justo fuera de las murallas hacia el norte, es más tranquilo e igual de céntrico, y allí se puede dormir dentro de un edificio modernista.",
    doveMangiare:
      "El plato invernal más identitario es el pelēkie zirņi ar speķi, guisantes grises con panceta. El rupjmaize, el pan de centeno negro, está en la base de buena parte de la cocina letona, incluido el rupjmaizes kārtojums, un postre en capas con nata y frutos del bosque. Para probar los productos locales, del queso ahumado al pescado del Báltico, los puestos del Mercado Central son la forma más económica y auténtica.",
    comeArrivare:
      "El Aeropuerto Internacional de Riga (RIX), está fuera de la ciudad: autobús público, o taxi o app de transporte. Desde algunos aeropuertos italianos hay vuelos directos low cost, estacionales o durante todo el año; si no, se hace escala en un hub europeo. Desde Vilna hay autobuses directos, con varias compañías y muchos servicios al día.",
    comeSpostarsi:
      "El casco histórico se recorre todo a pie. Tranvías, trolebuses y autobuses de la red Rīgas satiksme cubren el resto de la ciudad, con billetes por tiempo económicos. Para Jūrmala está el tren regional desde la estación central, con salidas frecuentes.",
    periodoMigliore:
      "mayo-septiembre, por el clima suave y, en pleno verano, la posibilidad de unir la ciudad con un baño en Jūrmala. Junio-agosto es la temporada más concurrida. El invierno (noviembre-marzo) es frío y a menudo ventoso, pero la Ciudad Vieja aguanta bien y en diciembre está el mercadillo de Navidad en la Plaza de la Catedral.",
    costi: "ciudad económica para los estándares de Europa occidental: entradas, restaurantes y trenes cuestan menos que en Europa occidental; precios actualizados en las webs oficiales.",
    erroriDaEvitare: [
      "Quedarse en la Ciudad Vieja: el barrio Art Nouveau justo fuera de las murallas es una parte central de la arquitectura de Riga tanto como el centro medieval",
      "Ir al Mercado Central el fin de semana después de comer: los mejores puestos se vacían pronto, y la mañana, con los vendedores locales, es el momento más auténtico",
      "Programar Jūrmala sin mirar el tiempo: es una excursión a la playa y tiene sentido sobre todo de junio a agosto",
      "Pensar que el ruso no hace falta: todavía lo habla la considerable minoría rusófona de la ciudad, y en ciertas situaciones cotidianas fuera del centro turístico es más útil que el inglés",
    ],
    luoghi: [
      {
        nome: "Catedral de Riga y Plaza del Domo",
        testo: "Considerada entre las mayores iglesias medievales de los países bálticos, fundada en 1211, con un gran órgano histórico. La plaza está rodeada de cafés.",
        come: "A pie desde el casco antiguo.",
        quando: "Mañana.",
        tempo: "1 hora",
        url: "https://doms.lv",
        consiglio: "Programa de conciertos de órgano en la web oficial."
      },
      {
        nome: "Iglesia de San Pedro",
        testo: "Iglesia gótica cuya aguja tiene una plataforma panorámica a 72 metros, con vistas al casco antiguo y al Daugava. Se sube en ascensor.",
        come: "A pie, cerca de la Plaza del Ayuntamiento.",
        quando: "Día despejado.",
        tempo: "45 minutos",
        consiglio: "Mejor subir por la mañana, cuando la luz es clara."
      },
      {
        nome: "Casa de los Cabezas Negras",
        testo: "Desde el siglo XV sede de la cofradía de los Cabezas Negras, gremio de mercaderes solteros y armadores, con la fachada decorada a principios del XVII. Destruida en la Segunda Guerra Mundial y demolida en la época soviética, se reconstruyó a finales del siglo XX.",
        come: "En la Plaza del Ayuntamiento.",
        quando: "Mañana, para las fotos.",
        tempo: "30 minutos",
        url: "https://www.melngalvjunams.lv",
        consiglio: "La Plaza del Ayuntamiento es el mejor punto para las fotos."
      },
      {
        nome: "Los Tres Hermanos",
        testo: "Tres casas en fila en los números 17, 19 y 21 de la calle Mazā Pils, viviendas de épocas distintas: la primera, con el frontón escalonado, es medieval, la tercera es barroca.",
        come: "A pie desde el casco antiguo.",
        quando: "De día.",
        tempo: "15 minutos",
        costo: "entrada libre",
        consiglio: "Dentro está el Museo de Arquitectura."
      },
      {
        nome: "Barrio Art Nouveau",
        testo: "Alberta iela y las calles de alrededor, con fachadas decoradas con máscaras, rostros y motivos florales, muchas proyectadas por el arquitecto Mijaíl Eisenstein.",
        come: "A pie o en tranvía desde el centro.",
        quando: "Mañana, con luz plena sobre las fachadas.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "Levantar la vista: los detalles están sobre el primer piso."
      },
      {
        nome: "Mercado Central",
        testo: "Cinco pabellones hechos con los hangares de zepelines alemanes de la Primera Guerra Mundial, abiertos en 1930.",
        come: "A pie desde la estación de ferrocarril.",
        quando: "Mañana.",
        tempo: "1-2 horas",
        consiglio: "Probar el pescado ahumado en el pabellón del pescado."
      },
      {
        nome: "Monumento a la Libertad y Museo de la Ocupación",
        testo: "El monumento, inaugurado en 1935, es el símbolo de la independencia letona; la guardia de honor, retirada por los soviéticos, volvió en 1992. El Museo de la Ocupación, en la Ciudad Vieja, cuenta la historia soviética y nazi.",
        come: "A pie desde el casco antiguo.",
        quando: "Mañana.",
        tempo: "1,5 horas",
        url: "https://okupacijasmuzejs.lv",
        consiglio: "Horarios y entradas del Museo de la Ocupación en la web oficial."
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
        testo: "Tranquilo, con edificios bonitos; a pie desde el casco antiguo."
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
      "Vida nocturna: a algunos turistas se les han cobrado precios altísimos o cargos falsos en la tarjeta. Mirar el pago con tarjeta delante de uno y desconfiar si piden volver a meter el PIN.",
      "Taxis: reservar con una compañía conocida o tomarlo en una parada, solo coches registrados con matrícula amarilla; acordar antes el precio aproximado.",
      "Carteristas en el casco antiguo, en el Mercado Central y en las estaciones de tren y autobús.",
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
      "La ciudad balnearia histórica de Letonia: una larga playa de arena blanca finísima en el Golfo de Riga, poco al oeste de la capital y accesible en tren. Desde los tiempos de los zares hasta la época soviética, cuando iba a veranear la élite de la URSS, en Jūrmala surgieron cientos de villas de madera Art Nouveau y Art Déco. Muchas hoy están restauradas y son casas privadas, hoteles o pequeños museos.",
    percheAndarci:
      "Es la playa más fácil de alcanzar partiendo de una capital de este itinerario. Detrás de la arena, además, las calles residenciales llenas de villas de madera decoradas son un museo difuso de arquitectura balnearia con más de un siglo de historia letona.",
    cosaVedere: [
      "La playa de arena blanca, larga y continua",
      "Jomas iela, la calle peatonal de Majori, el centro de la localidad, con tiendas, cafés y heladerías",
      "Las villas de madera Art Nouveau y Art Déco en las calles residenciales de Majori y Dzintari, muchas con tallas hechas a mano y verandas acristaladas",
      "La Dzintari Concert Hall, la sala de conciertos al aire libre, sede histórica de festivales y eventos de verano",
    ],
    cosaFare: [
      "Caminar largo rato por la playa, desde la estación de Majori hacia Dzintari o Bulduri",
      "Pasear por las calles residenciales detrás de Jomas iela y mirar desde fuera las villas de madera decoradas",
      "Pararse en uno de los cafés o restaurantes del paseo marítimo, abiertos todo el año y más animados en verano",
    ],
    doveDormire: "En este itinerario Jūrmala se visita en media jornada desde Riga, sin dormir allí. Quien quiera quedarse unos días junto al mar puede añadirla como ampliación.",
    doveMangiare: "A lo largo de Jomas iela restaurantes y cafés hacen cocina letona e internacional; en verano varios chiringuitos de la playa sirven pescado a la parrilla y helado.",
    comeArrivare: "Desde Riga con el tren regional desde la estación central (Rīga Centrālā stacija) hasta Majori, con salidas frecuentes.",
    comeSpostarsi: "El centro de Majori y la playa se recorren a pie. Para Dzintari o las zonas más lejanas se puede volver a tomar el mismo tren regional, que para en varios puntos a lo largo de la costa.",
    periodoMigliore: "junio-agosto para bañarse. En las estaciones intermedias el paseo por la playa y entre las villas de madera sigue siendo agradable, con menos gente.",
    costi: "excursión económica: tren barato, playa gratuita, cafés y restaurantes en el paseo marítimo.",
    erroriDaEvitare: [
      "Ir fuera de temporada esperando la vida playera del verano: fuera del verano la playa está casi desierta y muchos locales cierran",
      "Quedarse solo en la playa sin pasear por las calles residenciales: son las villas de madera decoradas las que hacen que Jūrmala sea distinta de «otra playa»",
      "Subestimar el agua baja y fresca del Golfo de Riga, muy distinta de un baño en el Mediterráneo",
    ],
    luoghi: [
      {
        nome: "Playa de Jūrmala",
        testo: "Una playa de arena blanca de cuarzo larga y continua, en la costa del Golfo de Riga.",
        come: "Tren desde Riga a Majori, en la línea Riga-Tukums.",
        quando: "Verano, cuando hace calor; en invierno está desierta y evocadora.",
        tempo: "media jornada",
        costo: "entrada libre",
        consiglio: "El tren es más cómodo que el coche: los no residentes pagan un peaje para entrar en Jūrmala en vehículo."
      },
      {
        nome: "Jomas iela",
        testo: "La calle peatonal de Majori, el centro del pueblo, con tiendas, cafés y heladerías. En verano está muy animada.",
        come: "A pie desde la estación de Majori.",
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
        testo: "La sala al aire libre, sede histórica de festivales y conciertos de verano, con música clásica y pop.",
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
      "Para entrar en coche en Jūrmala los no residentes pagan un peaje: la excursión en tren es más sencilla.",
      "La playa tiene viento: llevar una sudadera incluso en verano.",
      "Los fines de semana de verano los restaurantes están llenos: reservar."
    ],
    esperienzeSlugs: ['jurmala-spiaggia-ville-liberty'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "Una villa de madera con verandas acristaladas y decoraciones talladas entre los árboles de Jūrmala",
    immagine: '/images/lettonia/jurmala.jpg',
  },
]
