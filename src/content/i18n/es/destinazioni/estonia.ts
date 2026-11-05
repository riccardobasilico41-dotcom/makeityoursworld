import type { Destinazione } from '@/lib/types'

export const destinazioniEstonia: Destinazione[] = [
  {
    slug: 'tallinn',
    paeseSlug: 'estonia',
    ordine: 1,
    nome: 'Tallin',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital de Estonia es la más septentrional de las tres capitales bálticas y da al golfo de Finlandia. El casco antiguo, Patrimonio de la Humanidad desde 1997, es uno de los centros medievales mejor conservados del norte de Europa: arriba, Toompea, la colina fortificada donde residía el poder; abajo, la ciudad de los mercaderes hanseáticos. Fuera de las murallas, el parque barroco de Kadriorg y el antiguo complejo industrial de Telliskivi cuentan dos Estonias distintas, la zarista y la más reciente, digital y creativa.',
    percheAndarci:
      'El centro histórico es auténtico: las murallas, las torres y la plaza con el ayuntamiento gótico han llegado hasta hoy casi intactos. Y justo al salir de esas murallas Tallin cambia de cara, con un parque imperial ruso por un lado y un distrito creativo nacido en una fábrica soviética por el otro.',
    cosaVedere: [
      'La Plaza del Ayuntamiento (Raekoja plats), con el Ayuntamiento de Tallin, de 1404, todavía en uso',
      'La colina de Toompea, con el Castillo de Toompea (hoy sede del parlamento estonio, el Riigikogu) y la catedral ortodoxa de Alexander Nevsky, con sus cúpulas de cebolla doradas',
      'Los miradores de Kohtuotsa y Patkuli, en Toompea, las dos vistas clásicas sobre la ciudad baja, el puerto y el golfo de Finlandia',
      'Las murallas medievales de la ciudad, con un largo tramo todavía en pie y las torres que se conservan, entre ellas la Kiek in de Kök, la gran torre de artillería',
      'La iglesia de San Olaf (Oleviste kirik), gótica, con su alta aguja que domina la ciudad baja',
      'El parque de Kadriorg, con el Palacio de Kadriorg, mandado construir en 1718 por Pedro el Grande para su esposa Catalina I según el proyecto del arquitecto italiano Niccolò Michetti, hoy sede del museo de arte extranjero; a pocos pasos, el KUMU, el museo de arte estonio en un edificio contemporáneo',
      'Telliskivi Creative City, el antiguo complejo industrial y ferroviario de época soviética convertido en barrio creativo, con arte urbano, estudios de diseño, tiendas independientes y locales',
    ],
    cosaFare: [
      'Subir a Toompea hasta los miradores de Kohtuotsa y Patkuli para ver el panorama sobre la ciudad baja',
      'Caminar por el tramo de muralla que todavía se puede recorrer y subir a una de las torres abiertas al público',
      'Pasear entre los museos y las avenidas del parque de Kadriorg, con una parada en el KUMU si hay tiempo para una visita más larga',
      'Pasar una tarde entre las tiendas independientes, los murales y los locales de Telliskivi Creative City',
    ],
    doveDormire:
      'En el casco antiguo, para tenerlo todo a pie: la parte baja, alrededor de la Plaza del Ayuntamiento, es la más céntrica; Toompea es la más tranquila y con mejores vistas. El barrio de Kalamaja, entre el casco antiguo y Telliskivi, es una alternativa más residencial, con un aire más local.',
    doveMangiare:
      'La verivorst (morcilla) con arándanos rojos es un plato tradicional, sobre todo en Navidad; el kiluvõileib, un sándwich abierto con espadines marinados, mantequilla y huevo duro, es el aperitivo estonio por excelencia. En Telliskivi está la escena gastronómica más joven de la ciudad, entre comida callejera, cervecerías artesanales y mercados de alimentos los fines de semana.',
    comeArrivare:
      'El aeropuerto de Tallin-Lennart Meri (TLL) está cerca del centro: tranvía, o taxi o app de transporte. Desde algunos aeropuertos italianos hay vuelos directos de bajo coste, de temporada o todo el año; si no, se hace escala en un hub europeo. Desde Riga: autobuses directos, con varias compañías y varias salidas al día. Desde Helsinki: ferris regulares, una ampliación clásica para quien tiene unos días más.',
    comeSpostarsi:
      'El casco histórico se recorre entero a pie. El transporte público une el centro con Kadriorg y Telliskivi, con billetes baratos que se compran en la app o en las taquillas.',
    periodoMigliore:
      'de mayo a septiembre, por el clima más suave y los días larguísimos cerca del solsticio; de junio a agosto es la temporada más concurrida en el casco antiguo. El invierno (noviembre-marzo) es frío y oscuro, pero la nieve sobre los tejados medievales y los mercadillos de Navidad en la Plaza del Ayuntamiento tienen su encanto.',
    costi: 'algo más cara que Vilna y Riga: precios de torres y museos actualizados en las webs oficiales.',
    erroriDaEvitare: [
      'Quedarse en el casco antiguo: Kadriorg y Telliskivi muestran la Tallin zarista y la contemporánea, que el centro medieval por sí solo no cuenta',
      'Subir a Toompea y saltarse los dos miradores (Kohtuotsa y Patkuli): están a pocos pasos el uno del otro y miran la ciudad baja desde ángulos distintos',
      'Dar por hecho que el estonio se parece al lituano o al letón: es una lengua ugrofinesa, emparentada con el finés y totalmente ajena a la familia báltica de las otras dos capitales',
      'Ir a Telliskivi sin comprobar los horarios: locales y tiendas independientes no abren todos igual cada día',
    ],
    luoghi: [
      {
        nome: "Plaza del Ayuntamiento (Raekoja plats)",
        testo: "El corazón medieval de la ciudad, con el Ayuntamiento gótico terminado en 1404, el más antiguo de la región del mar Báltico y Escandinavia, hoy museo y sala de conciertos. En verano tiene mesas al aire libre; en diciembre acoge el mercadillo de Navidad.",
        come: "A pie desde el puerto.",
        quando: "Temprano por la mañana, para la plaza sin multitudes; horarios de visita del Ayuntamiento y su torre en la web oficial.",
        tempo: "1 hora",
        url: "https://www.tallinn.ee",
        consiglio: "Comprobar los días de cruceros: la plaza se llena de grupos."
      },
      {
        nome: "Toompea y Catedral Alexander Nevsky",
        testo: "La colina sobre la ciudad baja, con el Castillo de Toompea (sede del Parlamento) y la catedral ortodoxa Alexander Nevsky, construida a finales del siglo XIX, con cúpulas de cebolla. La subida es corta pero panorámica.",
        come: "A pie desde la Plaza del Ayuntamiento, subiendo por Pikk jalg.",
        quando: "Mañana.",
        tempo: "1,5 horas",
        consiglio: "Para fotos de la ciudad desde arriba, las plataformas de Kohtuotsa y Patkuli."
      },
      {
        nome: "Plataformas panorámicas de Kohtuotsa y Patkuli",
        testo: "Dos terrazas en Toompea con las vistas clásicas de la ciudad baja, el puerto y el Golfo de Finlandia, con tejados rojos y agujas.",
        come: "A pie desde la catedral.",
        quando: "Atardecer, por la luz sobre los tejados.",
        tempo: "30 minutos",
        costo: "entrada libre",
        consiglio: "Kohtuotsa suele estar concurrida, Patkuli suele ser más tranquila."
      },
      {
        nome: "Murallas y torres medievales",
        testo: "Un largo tramo de murallas todavía en pie, con muchas torres medievales, entre ellas la Kiek in de Kök, torre de artillería del siglo XV, cuyo nombre en bajo alemán significa «mira en la cocina». También se visitan la Torre de la Doncella, la torre de la puerta de Lühike jalg y los pasadizos subterráneos de los bastiones.",
        come: "A pie, por Müürivahe.",
        quando: "De día, con buenas condiciones.",
        tempo: "1-2 horas",
        costo: "Kiek in de Kök 16 €, pasadizos de los bastiones 10 € (2026); de octubre a abril cerrado los lunes, abierto 11-18",
        url: "https://www.linnamuuseum.ee",
        consiglio: "Juntar Kiek in de Kök y los pasadizos de los bastiones en la misma visita."
      },
      {
        nome: "Iglesia de San Olaf (Oleviste kirik)",
        testo: "Iglesia gótica con una aguja de unos 124 metros, la iglesia más alta de Estonia. En la torre hay una plataforma panorámica a 60 metros.",
        come: "A pie, al final de la Plaza del Ayuntamiento.",
        quando: "Día despejado.",
        tempo: "45 minutos",
        url: "https://www.oleviste.ee",
        consiglio: "Subir a la torre para ver el puerto."
      },
      {
        nome: "Parque y Palacio de Kadriorg, KUMU",
        testo: "El Palacio, mandado construir por Pedro el Grande en 1718 para su esposa Catalina I, con el parque y el Kumu, el museo de arte estonio, en un edificio moderno en el mismo parque.",
        come: "Tranvía 1 o 3 hasta la terminal Kadriorg, o a pie desde el centro.",
        quando: "Tarde; el parque es libre. El Kumu cierra los lunes; abre 10-18, los jueves hasta las 20.",
        tempo: "3 horas",
        costo: "Kumu 16 € normal, 11 € reducida, 32 € familiar (2026)",
        url: "https://kumu.ekm.ee",
        consiglio: "El parque es un buen lugar para pasear fuera del centro."
      },
      {
        nome: "Telliskivi Creative City",
        testo: "Los antiguos talleres donde se reparaban las locomotoras, hoy barrio creativo con arte urbano, estudios, tiendas independientes y restaurantes.",
        come: "A pie desde el casco antiguo o en transporte público.",
        quando: "Noche, por los locales; el sábado por las tiendas.",
        tempo: "2 horas",
        costo: "entrada libre",
        consiglio: "Aquí se come muy bien a precios razonables."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Plaza del Ayuntamiento",
          "Toompea y Catedral Nevsky",
          "Murallas y torres",
          "Almuerzo en un restaurante medieval",
          "Noche: Telliskivi"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1 como arriba",
          "Día 2: Kadriorg y KUMU",
          "Iglesia de San Olaf",
          "Noche en el casco antiguo"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo (Vanalinn)",
        perChi: "Quien quiere ir a pie entre las atracciones",
        testo: "Calles empedradas y ambiente, pero precios altos y ruido nocturno."
      },
      {
        nome: "Kalamaja",
        perChi: "Quien busca un barrio de cafés y casas de madera",
        testo: "Cerca de Telliskivi y del puerto, a poca distancia del centro."
      },
      {
        nome: "Kesklinn",
        perChi: "Quien quiere comodidad y centros comerciales",
        testo: "Moderno, a pocos minutos del casco antiguo."
      }
    ],
    sapori: [
      {
        nome: "Leib (pan negro)",
        testo: "Pan de centeno oscuro, base de la cocina estonia."
      },
      {
        nome: "Kama",
        testo: "Harina de cereales tostados con kéfir, un postre típico."
      },
      {
        nome: "Verivorst",
        testo: "Morcilla con cebada, típica de Navidad."
      },
      {
        nome: "Mazapán",
        testo: "Mazapán estonio, en la confitería Maiasmokk, cafetería histórica de la ciudad."
      }
    ],
    attenzioni: [
      "Los restaurantes con trajes medievales son caros y turísticos: comparar con los de Telliskivi.",
      "Taxis: usar una app reconocida, y no los cercanos al puerto de cruceros.",
      "Los días de cruceros el casco antiguo está abarrotado: ir temprano.",
      "En invierno el hielo hace peligrosos los adoquines: calzado adecuado."
    ],
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Las casas medievales de colores pastel con tejados a dos aguas en el lado este de la Plaza del Ayuntamiento de Tallin, con las mesas de las cafeterías al aire libre',
    immagine: '/images/estonia/tallinn.jpg',
  },
]
