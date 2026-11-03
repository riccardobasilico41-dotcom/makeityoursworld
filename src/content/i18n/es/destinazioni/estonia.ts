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
      'El centro histórico es auténtico: las murallas, las torres y la plaza con el ayuntamiento más antiguo del Báltico han llegado hasta hoy casi intactos. Y justo al salir de esas murallas Tallin cambia de cara, con un parque imperial ruso por un lado y un distrito creativo nacido en una fábrica soviética por el otro.',
    cosaVedere: [
      'La Plaza del Ayuntamiento (Raekoja plats), con el Ayuntamiento de Tallin, de 1404, el más antiguo del Báltico que sigue en uso',
      'La colina de Toompea, con el Castillo de Toompea (hoy sede del parlamento estonio, el Riigikogu) y la catedral ortodoxa de Alexander Nevsky, con sus cúpulas de cebolla doradas',
      'Los miradores de Kohtuotsa y Patkuli, en Toompea, las dos vistas clásicas sobre la ciudad baja, el puerto y el golfo de Finlandia',
      'Las murallas medievales de la ciudad, unos 1,85 km todavía en pie con las torres que se conservan, entre ellas la Kiek in de Kök, la torre-cañón cuyo nombre significa «espía la cocina»: uno de los sistemas defensivos mejor conservados de Europa',
      'La iglesia de San Olaf (Oleviste kirik): en el siglo XVI, con su aguja, fue durante un tiempo el edificio más alto del mundo',
      'El parque de Kadriorg, con el Palacio de Kadriorg, mandado construir en 1718 por Pedro el Grande para su esposa Catalina I según el proyecto del arquitecto italiano Niccolò Michetti, hoy sede del museo de arte extranjero; a pocos pasos, el KUMU, el museo de arte estonio en un edificio contemporáneo, Museo Europeo del Año en 2008',
      'Telliskivi Creative City, el antiguo complejo industrial y ferroviario de época soviética convertido desde 2009 en barrio creativo, con arte urbano, estudios de diseño, tiendas independientes y locales',
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
      'El aeropuerto de Tallin-Lennart Meri (TLL) está a unos 4 km del centro: 15-20 minutos en tranvía o pocos minutos en taxi/Bolt, uno de los aeropuertos más cercanos al centro de la ciudad de Europa. Desde algunos aeropuertos italianos hay vuelos directos de bajo coste, de temporada o todo el año; si no, se hace escala en un hub europeo. Desde Riga: autobús en unas 4-4 h 30, con varias compañías, entre ellas Lux Express, y varias salidas al día. Desde Helsinki: ferri en unas 2 horas, una ampliación clásica para quien tiene unos días más.',
    comeSpostarsi:
      'El casco histórico se recorre entero a pie. Los tranvías y autobuses públicos llevan del centro a Kadriorg y Telliskivi en pocos minutos, con billetes baratos que se compran en la app o en las taquillas.',
    periodoMigliore:
      'de mayo a septiembre, por el clima más suave y los días larguísimos cerca del solsticio; de junio a agosto es la temporada más concurrida en el casco antiguo. El invierno (noviembre-marzo) es frío y oscuro, pero la nieve sobre los tejados medievales y los mercadillos de Navidad en la Plaza del Ayuntamiento tienen su encanto.',
    costi: 'algo más cara que Vilna y Riga: entrada a las cuatro torres de la muralla 12 €, entrada al KUMU 12-16 € según la exposición, cena normal 12-18 € por persona.',
    erroriDaEvitare: [
      'Quedarse en el casco antiguo: Kadriorg y Telliskivi muestran la Tallin zarista y la contemporánea, que el centro medieval por sí solo no cuenta',
      'Subir a Toompea y saltarse los dos miradores (Kohtuotsa y Patkuli): están a pocos pasos el uno del otro y miran la ciudad baja desde ángulos distintos',
      'Dar por hecho que el estonio se parece al lituano o al letón: es una lengua ugrofinesa, emparentada con el finés y totalmente ajena a la familia báltica de las otras dos capitales',
      'Ir a Telliskivi el domingo por la noche o el lunes, cuando varios locales y tiendas independientes están cerrados',
    ],
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Las casas medievales de colores pastel con tejados a dos aguas en el lado este de la Plaza del Ayuntamiento de Tallin, con las mesas de las cafeterías al aire libre',
    immagine: '/images/estonia/tallinn.jpg',
  },
]
