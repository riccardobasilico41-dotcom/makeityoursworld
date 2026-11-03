import type { Destinazione } from '@/lib/types'

export const destinazioniAustria: Destinazione[] = [
  {
    slug: 'vienna',
    paeseSlug: 'austria',
    ordine: 1,
    nome: 'Viena',
    tipologia: ['città', 'arte', 'musica'],
    giorniConsigliati: "3-4 días para el Innere Stadt, Schönbrunn, el Belvedere y el Prater",
    visitataPersonalmente: true,
    introduzione:
      "La capital austriaca, durante siglos corazón del Imperio de los Habsburgo y hoy una de las ciudades con mejor calidad de vida del mundo según varias clasificaciones internacionales. El casco antiguo es compacto: el Innere Stadt, Patrimonio de la UNESCO, rodeado por el Ring, la avenida que en el siglo XIX ocupó el lugar de las antiguas murallas. El palacio de Schönbrunn, el palacio del Belvedere y el gran parque del Prater están justo fuera del núcleo más céntrico.",
    percheAndarci:
      "Porque concentra en un área que se recorre a pie (o en pocos minutos de U-Bahn) siglos de historia imperial, una de las colecciones de arte más importantes de Europa central con «El beso» de Klimt en el Belvedere, y una cultura del café reconocida por la UNESCO como patrimonio inmaterial. Y se paga en euros, sin las complicaciones de cambio de moneda de Praga o Cracovia.",
    cosaVedere: [
      "La Catedral de San Esteban (Stephansdom), gótica, símbolo de la ciudad, con el tejado de 230.000 tejas de colores y la torre sur (Steffl) de 136 metros de altura, a la que se sube por 343 escalones hasta un mirador panorámico; bajo la catedral, las catacumbas con las vísceras de los emperadores Habsburgo",
      "La Hofburg, el palacio de invierno de los Habsburgo durante más de seis siglos, hoy sede del Museo Sisi, de los Apartamentos Imperiales y de la Escuela Española de Equitación con sus caballos lipizzanos",
      "El Palacio de Schönbrunn, la residencia de verano de la familia imperial, con más de 1.400 estancias (unas pocas decenas visitables), los jardines barrocos y la Gloriette en la colina",
      "El Palacio del Belvedere, con el Belvedere Superior que alberga «El beso» y otras obras de Gustav Klimt, además de una de las colecciones de arte austriaco más importantes del mundo",
      "El Naschmarkt, el mercado de alimentación más famoso de la ciudad, más de un kilómetro y medio de puestos entre fruta, especias y cocinas internacionales, con un mercadillo de las pulgas los sábados",
      "El Prater, el gran parque público desde 1766, con la Wiener Riesenrad, la noria panorámica construida en 1897 para el jubileo del emperador Francisco José y durante décadas la más alta del mundo",
    ],
    cosaFare: [
      "Sentarse al menos una vez en un café histórico (Café Central, Café Sacher o Landtmann entre los más conocidos) para entender en directo la Kaffeehauskultur, la cultura del café vienés reconocida por la UNESCO como patrimonio cultural inmaterial desde 2011",
      "Subir a la torre sur de la Catedral de San Esteban para ver desde lo alto los tejados del casco antiguo",
      "Asistir a una función en la Ópera Estatal con una entrada de pie (Stehplatz), desde unos 13 €, una de las formas más baratas del mundo de ver una ópera de primer nivel",
      "Dar una vuelta en la Wiener Riesenrad del Prater, sobre todo al atardecer",
      "Un paseo por el Ring, la avenida que rodea el Innere Stadt sobre el trazado de las antiguas murallas, entre edificios historicistas del siglo XIX",
    ],
    doveDormire:
      "El Innere Stadt (el distrito I, dentro del Ring) es la opción más cómoda y concentra la mayor parte de las atracciones, pero también es la zona con los precios más altos. Los distritos limítrofes (II, IV, VII) son alternativas más económicas y bien conectadas en U-Bahn, a menudo a pocos minutos a pie del Ring.",
    doveMangiare:
      "El Wiener Schnitzel, la escalope de ternera empanada, es el plato símbolo; el Tafelspitz, el cocido de ternera a la vienesa, igual de tradicional. Entre los dulces, la Sachertorte (la célebre tarta de chocolate con mermelada de albaricoque, nacida precisamente en Viena) y el Apfelstrudel. El Naschmarkt es el mejor sitio para una comida informal entre cocinas distintas; los cafés históricos, además de café, sirven a menudo repostería y pequeñas comidas durante todo el día.",
    comeArrivare:
      "Aeropuerto de Viena-Schwechat (VIE), a unos 18 km del centro: el City Airport Train (CAT) llega a Wien Mitte en 16 minutos (unos 14,90 € por trayecto), o bien los trenes regionales (S7, ÖBB) cubren el mismo trayecto en un poco más de tiempo a un precio inferior. En tren desde Italia, conexiones directas desde varias ciudades del norte; desde Praga, unas 4 horas de tren directo.",
    comeSpostarsi: "Casco antiguo en gran parte a pie. Para el resto de la ciudad, U-Bahn, tranvía y autobús de Wiener Linien, con billetes sencillos o abonos diarios/de varios días. No hace falta coche.",
    periodoMigliore: "abril-mayo y septiembre-octubre por el clima templado y menos gente; junio-agosto es temporada alta, abarrotada sobre todo en Schönbrunn y Stephansplatz; de noviembre a marzo hace frío pero es llevadero, con los mercadillos de Navidad en diciembre",
    costi: "en la media europea: museos principales 20-25 €, comida normal 15-25 € por persona, entradas de pie de la Ópera desde 13 €, transporte público económico",
    erroriDaEvitare: [
      "Presentarse en Schönbrunn o en el Belvedere en temporada alta sin entrada reservada online: las colas en el lugar pueden superar la hora",
      "Subestimar la Kaffeehauskultur como una simple pausa para el café: en los cafés históricos la mesa se «alquila» durante todo el tiempo que uno quiera: es una costumbre cultural precisa, que hay que tomarse con calma",
      "Programar compras o gestiones en domingo: casi todas las tiendas, supermercados incluidos, están cerradas por ley, con las únicas excepciones de estaciones, aeropuerto y farmacias de guardia",
      "Bajar la guardia en la línea U3 del metro en las horas punta: es la línea más señalada por los carteristas en la ciudad",
      "Subestimar las dimensiones de Schönbrunn: solo la vuelta por el palacio y los jardines principales requiere una buena media jornada",
    ],
    esperienzeSlugs: ['vienna-schonbrunn-biglietto', 'vienna-opera-stehplatz', 'vienna-giro-caffe-storici'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'El tejado de tejas esmaltadas en zigzag de colores de la Catedral de San Esteban en Viena, entre las agujas góticas',
    immagine: '/images/austria/vienna.jpg',
  },
]
