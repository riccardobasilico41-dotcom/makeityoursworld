import type { Destinazione } from '@/lib/types'

export const destinazioniPaesiBassi: Destinazione[] = [
  {
    slug: 'amsterdam',
    paeseSlug: 'paesi-bassi',
    ordine: 1,
    nome: 'Ámsterdam',
    tipologia: ['città', 'arte', 'storia'],
    giorniConsigliati: '3-4 días para el casco histórico, el anillo de canales y los museos principales',
    visitataPersonalmente: true,
    introduzione:
      'La capital de los Países Bajos, construida sobre una red de canales concéntricos excavados a partir del siglo XVII, en la edad de oro neerlandesa. El Grachtengordel (el anillo de canales), con las típicas casas adosadas estrechas y altas asomadas al agua, es Patrimonio de la UNESCO desde 2010. Es una ciudad compacta, casi plana, para recorrer a pie o, más a menudo, en bicicleta.',
    percheAndarci:
      'En un área que en bici se cruza en media hora hay algunos de los museos más importantes de Europa (Rijksmuseum, Museo Van Gogh), un lugar de la memoria que hay que visitar con preparación como la Casa de Ana Frank y un barrio entero de canales patrimonio de la humanidad. Y hay una cultura urbana que en otros sitios no se encuentra así: la bicicleta como medio de transporte principal, no como actividad para turistas.',
    cosaVedere: [
      'El Grachtengordel, el anillo de canales del siglo XVII (Herengracht, Keizersgracht, Prinsengracht) patrimonio de la UNESCO, con las casas adosadas y los típicos gables, los frontones decorados que antaño indicaban el oficio o la riqueza del propietario',
      'La Casa de Ana Frank (Anne Frank Huis), en el Prinsengracht, el edificio donde la familia Frank se escondió de 1942 a 1944: las entradas se agotan con semanas de antelación y hay que reservarlas online en el sitio oficial',
      'El Rijksmuseum, el museo nacional con la mayor colección de arte e historia neerlandesa del mundo, desde La ronda de noche de Rembrandt en adelante',
      'El Museo Van Gogh, la mayor colección del mundo de obras de Vincent van Gogh, ordenada en gran parte cronológicamente',
      'Jordaan, el antiguo barrio obrero al oeste del centro, hoy entre las zonas más vividas de la ciudad, con callejuelas estrechas, hofjes (pequeños patios interiores, antaño casas de caridad) y un ambiente más residencial que el del casco histórico',
      'El Barrio Rojo (De Wallen), en el corazón medieval de la ciudad: una zona de luces rojas regulada desde hace siglos, que hay que atravesar sin fotografiar',
      'Dam Square, la plaza central con el Palacio Real y el Monumento Nacional',
    ],
    cosaFare: [
      'Alquilar una bicicleta y moverse como los amsterdameses: es la forma más natural de vivir la ciudad, pero hay que aprender deprisa las reglas básicas (véase la ficha de experiencia dedicada)',
      'Un crucero por los canales, de día o al atardecer, para ver el anillo del Grachtengordel desde el agua en lugar de desde los puentes',
      'Caminar por Jordaan sin un destino preciso, entre hofjes y pequeñas tiendas',
      'Atravesar el Barrio Rojo al mismo paso que cualquier otra zona de la ciudad, sin pararse a fotografiar los escaparates ni a las personas que trabajan en ellos: en muchas áreas está prohibido por ley, y en cualquier caso es una cuestión de respeto elemental',
      'Si el tiempo lo permite, visitar uno de los museos menores: el Museo Van Loon o el Museo Willet-Holthuysen, dos casas-museo de canal que muestran cómo se vivía en estas casas',
    ],
    doveDormire:
      'El Grachtengordel (el anillo de canales) es la zona más céntrica y característica, cómoda a pie para casi todo; Jordaan, justo al oeste, es la alternativa más residencial y a menudo algo más económica, a diez minutos a pie del corazón del casco histórico.',
    doveMangiare:
      'Las bitterballen (croquetas fritas rellenas, típico aperitivo de bar) con una cerveza neerlandesa; el haring (arenque crudo marinado, servido en trozos con cebolla picada) de los puestos callejeros; el stroopwafel, la oblea rellena de sirope de caramelo, mejor recién hecho y todavía caliente en los puestos del mercado; la rijsttafel, la «mesa de arroz» con decenas de platitos al estilo indonesio, herencia del pasado colonial neerlandés y hoy parte de la cocina de la ciudad.',
    comeArrivare:
      'Aeropuerto de Ámsterdam Schiphol (AMS), de los más transitados de Europa, a unos 15 km del centro: tren directo en 15-20 minutos hasta la Estación Central, con servicios muy frecuentes. Desde Italia no hay una conexión ferroviaria directa cómoda: casi siempre se llega en avión.',
    comeSpostarsi: 'En el centro bicicleta o a pie; para el resto de la ciudad tranvía, autobús y metro GVB, que se pagan también con tarjeta contactless directamente en los transportes. Coche desaconsejado: en el centro se desincentiva el tráfico y el aparcamiento es caro y escaso.',
    periodoMigliore: 'abril-mayo y septiembre-octubre por el clima suave y menos gente; junio-agosto es temporada alta, calurosa y muy concurrida; noviembre-marzo es frío y a menudo lluvioso pero llevadero, con mercadillos de Navidad en diciembre',
    costi: 'ciudad cara para los estándares europeos: museos principales 20-25 € cada uno, cena normal 20-25 € por persona, alquiler de bici 10-15 € al día',
    erroriDaEvitare: [
      'Llegar sin haber reservado online la Casa de Ana Frank: las entradas se agotan con semanas de antelación y ya no se compran en taquilla',
      'Caminar o pararse distraído en los carriles bici (el asfalto rojo, distinto de la acera): en toda la ciudad es la causa más común de accidentes y discusiones con los turistas',
      'Dar por hecho que se puede pagar en efectivo en todas partes: muchos locales aceptan solo tarjeta o contactless',
      'Fotografiar los escaparates o a las personas que trabajan en el Barrio Rojo: está prohibido en gran parte de la zona y culturalmente muy mal visto',
      'Subestimar las colas en el Rijksmuseum y en el Museo Van Gogh en temporada alta: conviene reservar online con antelación las entradas con franja horaria',
    ],
    luoghi: [
      {
        nome: "Rijksmuseum",
        testo: "El museo nacional neerlandés, con la Ronda de noche de Rembrandt, los Vermeer y los barcos en miniatura. El edificio tiene un jardín gratuito con esculturas y una plaza para las fotos.",
        come: "En el Museumplein. Conviene reservar en línea la hora de entrada; en taquilla solo se vende si queda sitio.",
        quando: "Todos los días de 9 a 17, festivos incluidos; temprano o a última hora para evitar la multitud ante La ronda de noche.",
        tempo: "3 horas",
        costo: "25 € adultos (2026), gratis hasta los 18 años",
        url: "https://www.rijksmuseum.nl",
        consiglio: "Empezar por la planta de la Edad de Oro: en una hora se ven las salas más importantes."
      },
      {
        nome: "Museo Van Gogh",
        testo: "Una enorme colección de obras de Van Gogh, entre cuadros, dibujos y cartas, desde Los comedores de patatas (1885) hasta Los girasoles (1889). Se sigue la evolución del artista.",
        come: "En el Museumplein, junto al Rijksmuseum. Entradas en la web oficial.",
        quando: "Temprano por la mañana, con la entrada ya comprada.",
        tempo: "2 horas",
        url: "https://www.vangoghmuseum.nl",
        consiglio: "Comprar la entrada con antelación, sobre todo los fines de semana."
      },
      {
        nome: "Casa de Ana Frank",
        testo: "El anexo secreto donde Ana Frank y su familia se escondieron más de dos años, de 1942 a 1944, en la parte trasera del edificio de la empresa de su padre, Prinsengracht 263. El recorrido es estrecho y silencioso.",
        come: "Las entradas se venden solo en línea en la web oficial: cada martes a las 10 salen las de las visitas seis semanas después. En la puerta no se venden.",
        quando: "Reservar en cuanto se decidan las fechas.",
        tempo: "1-1,5 horas",
        costo: "16,50 € adultos, con 1 € de gastos de gestión (web oficial, 2026)",
        url: "https://www.annefrank.org",
        consiglio: "Desconfiar de los revendedores: el sitio oficial es el único fiable."
      },
      {
        nome: "Canales del siglo XVII",
        testo: "El anillo de canales (Grachtengordel) es Patrimonio de la UNESCO desde 2010, con casas de frontón, puentes y barcos. Los tramos más bonitos son Prinsengracht, Keizersgracht y Herengracht.",
        come: "A pie, en paseo en barco o con alquiler de barca; mejor a pie.",
        quando: "Tarde, con luces sobre el agua.",
        tempo: "2-3 horas",
        consiglio: "Hacer un paseo en barco al atardecer para ver las casas iluminadas."
      },
      {
        nome: "Jordaan y Begijnhof",
        testo: "El Jordaan es un barrio de calles estrechas, cafés y tiendas de artesanía. El Begijnhof es un patio de origen medieval, con fachadas antiguas y Het Houten Huys, de hacia 1420, considerada la casa de madera más antigua de Ámsterdam.",
        come: "A pie desde el centro.",
        quando: "Mañana, con luz suave y menos gente.",
        tempo: "2 horas",
        consiglio: "El Begijnhof está habitado: hablar bajo y respetar la intimidad de los vecinos."
      },
      {
        nome: "Vondelpark",
        testo: "El gran parque de la ciudad, 47 hectáreas de estanques, praderas y quioscos; de mayo a septiembre el teatro al aire libre (Openluchttheater) acoge espectáculos casi todos los fines de semana, con entrada libre y donativo voluntario. Un buen sitio para descansar después de los museos.",
        come: "Junto al museo Van Gogh, a pocos minutos a pie.",
        quando: "Tarde de verano.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        consiglio: "Alquilar una bici para recorrer el parque."
      },
      {
        nome: "Mercado Albert Cuyp",
        testo: "Un gran mercado callejero en el barrio de De Pijp, activo desde 1905: fruta, verdura, pescado, ropa y stroopwafels hechos al momento. Ideal para picar algo barato.",
        come: "Metro Noord/Zuidlijn desde Centraal hasta De Pijp, o en tranvía.",
        quando: "Lunes a sábado de 9:30 a 17; cerrado los domingos y festivos. Mejor por la mañana.",
        tempo: "1 hora",
        consiglio: "Probar stroopwafels calientes y arenque con cebolla."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Rijksmuseum",
          "Almuerzo en Albert Cuyp",
          "Canales por la tarde",
          "Noche: Jordaan"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Casa de Ana Frank reservada",
          "Museo Van Gogh",
          "Vondelpark y cena"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como arriba",
          "Día 3: excursión a Keukenhof (primavera) o Zaanse Schans"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro histórico (Centrum)",
        perChi: "Quien quiere hacerlo todo a pie",
        testo: "Canales y museos cerca, pero precios altísimos y ruido, sobre todo hacia De Wallen."
      },
      {
        nome: "Jordaan y Canal Ring",
        perChi: "Quien busca ambiente y calles tranquilas",
        testo: "Zonas bonitas y más tranquilas, pero caras."
      },
      {
        nome: "De Pijp",
        perChi: "Quien quiere bares, restaurantes y vida local",
        testo: "Barrio animado cerca de Albert Cuyp; menos turístico, precios algo más bajos."
      },
      {
        nome: "Amsterdam Oost y Noord",
        perChi: "Quien intenta ahorrar",
        testo: "Fuera del centro, en tranvía o, para Noord, con los ferris GVB desde detrás de Centraal, gratuitos para peatones y ciclistas."
      }
    ],
    sapori: [
      {
        nome: "Stroopwafel",
        testo: "Oblea con sirope de caramelo, para comer caliente en los mercados."
      },
      {
        nome: "Haring",
        testo: "Arenque crudo con cebolla y pepinillos, en los quioscos (haringhandel)."
      },
      {
        nome: "Bitterballen",
        testo: "Croquetas fritas de ragú, con mostaza, típicas de los pubs."
      },
      {
        nome: "Poffertjes y pannenkoeken",
        testo: "Mini tortitas y crepes neerlandesas, en los restaurantes de pancakes."
      }
    ],
    attenzioni: [
      "Bicicletas: son el mayor peligro para los peatones, van rápido y a menudo no paran en los semáforos; no caminar por los carriles bici rojos.",
      "Carteristas en el centro y alrededor de Centraal Station, también en bandas en trenes y tranvías desde y hacia Schiphol.",
      "Revendedores no oficiales para Ana Frank y museos: comprar solo en el sitio oficial. Desconfiar también de los falsos policías que piden efectivo o tarjetas.",
      "En De Wallen no fotografiar a las trabajadoras ni fumar cannabis en la calle: está prohibido.",
      "Los taxis no siempre son baratos: mejor tranvía o a pie."
    ],
    esperienzeSlugs: ['amsterdam-in-bicicletta', 'crociera-sui-canali-amsterdam', 'casa-di-anna-frank'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Un viejo puente de arco de ladrillo sobre el canal Reguliersgracht en Ámsterdam, con las casas adosadas y los árboles sin hojas a lo largo de las orillas',
    immagine: '/images/paesi-bassi/amsterdam.jpg',
  },
]
