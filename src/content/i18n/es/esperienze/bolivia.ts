import type { Esperienza } from '@/lib/types'

export const esperienzeBolivia: Esperienza[] = [
  {
    slug: 'carretera-de-la-muerte',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'la-paz',
    nome: 'Carretera de la Muerte en bicicleta de montaña',
    localita: 'De La Cumbre (4.650 m) a Yolosa (1.200 m), Yungas',
    cosE:
      "El descenso en bicicleta de montaña por la antigua carretera de los Yungas, la que en los años noventa se ganó el nombre de «carretera más peligrosa del mundo» por el número de vehículos que acababan en el vacío. Desde 2006 el tráfico pasa por una carretera nueva y asfaltada, y la vieja pista se ha convertido en la práctica en un recorrido ciclista: unos 64 km de bajada, con más de 3.400 metros de desnivel negativo, del paso glaciar de La Cumbre a la selva subtropical de Yolosa.",
    percheFarla:
      "Porque en pocas horas se atraviesan tres franjas climáticas, del frío de la puna a la selva húmeda, por una pista de tierra de tres metros de ancho con precipicios de cientos de metros. Es la actividad más emblemática de Bolivia, y no hace falta ser un ciclista experto.",
    durata: 'jornada completa: salida de La Paz a primera hora de la mañana, regreso a última hora de la tarde',
    periodo:
      "todo el año, pero la estación seca (mayo-octubre) es mucho mejor: en la estación de lluvias la pista se vuelve fangosa, la visibilidad baja con la niebla y el riesgo aumenta de forma concreta",
    costo:
      "unos 80-170 $ por persona según el operador. Los operadores económicos rondan los 80-100 $, los premium entre 120 y 170 $, con diferencias reales en bicicletas, grupos y protocolos de seguridad.",
    comePrenotare:
      "A través de las agencias de La Paz, incluso con un día de antelación. Vale la pena leer reseñas recientes y preguntar de forma explícita qué bicicletas se usarán, cuántas personas hay por guía y si se incluyen las protecciones completas.",
    cosaPortare:
      "Ropa por capas: se sale a 4.650 metros cerca de cero grados y se llega a 1.200 metros con clima tropical. Guantes, gafas, protección solar y una muda completa para el final.",
    perChiEAdatta:
      "No hace falta ser un ciclista experto (todo es bajada y se va a su propio ritmo), pero hay que saber manejar una bicicleta de montaña en terreno sin asfaltar y, sobre todo, tener cabeza para no correr. No recomendada a quien sufre vértigo.",
    confronti: [
      {
        titolo: 'Operador económico o premium: dónde está la diferencia',
        introduzione:
          "En este recorrido el precio del tour incide en la seguridad más que en la comodidad. Los números ayudan a enmarcar el riesgo real: de los cerca de 25.000 ciclistas que cada año recorren la carretera, los heridos graves que requieren hospitalización son del orden de unos pocos al año, y los accidentes mortales se cuentan más o menos uno cada dos o tres años entre todos los operadores juntos: al menos dieciocho desde 1998. Casi todos los accidentes registrados implican a operadores económicos, equipos deficientes, exceso de velocidad o error del ciclista.",
        opzioni: [
          {
            nome: 'Operadores económicos',
            sintesi: 'Tour básico con bicicletas de doble suspensión de gama baja y grupos más numerosos.',
            costo: '80-100 $',
            pro: [
              'Coste contenido, que en un viaje largo pesa',
              'El recorrido y los paisajes son los mismos',
            ],
            contro: [
              'Mantenimiento de las bicicletas menos riguroso: en una bajada de 64 km los frenos lo son todo',
              'Grupos más grandes, y por tanto menos control por parte de los guías',
              'Es la franja en la que se concentra la casi totalidad de los accidentes registrados',
            ],
            perChi: 'No recomendada: es el único caso, entre todos los viajes del sitio, en el que ahorrar no compensa.',
          },
          {
            nome: 'Operadores premium',
            sintesi:
              "Bicicletas de gama alta y bien mantenidas, grupos limitados, protocolos de seguridad estructurados, guías expertos y vehículo de apoyo. En esta franja están los nombres históricos del sector: Gravity Bolivia, que en la práctica inventó estos tours en 1998, Barracuda Biking y Vertigo Biking.",
            costo: '120-170 $',
            pro: [
              'Bicicletas bien cuidadas, con frenos a la altura de los 3.400 metros de descenso',
              'Grupos pequeños, a menudo con un límite de diez ciclistas por guía',
              'Briefing de seguridad real y vehículo de apoyo para quien se detiene',
            ],
            contro: ['Cuesta casi el doble que la franja económica'],
            perChi: 'Cualquiera que tenga intención de hacerlo.',
          },
        ],
        raccomandazione:
          "En esta actividad, elegir el operador más barato para ahorrar 50 dólares es la decisión equivocada: los datos dicen que la diferencia entre las dos franjas se mide en accidentes. Mejor renunciar del todo que hacerla con equipo deficiente.",
      },
    ],
    giudizio: 'da-verificare',
    alternative: ['Recorrer la carretera en coche o en moto con conductor, para quien quiere ver el paisaje sin pedalear'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'La pista de tierra de la Carretera de la Muerte excavada en la ladera de las montañas de los Yungas, Bolivia',
    immagine: '/images/bolivia/carretera-de-la-muerte.jpg',
  },
  {
    slug: 'tour-uyuni-sud-lipez',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'salar-de-uyuni',
    nome: 'Tour de 3 días por Uyuni y el Sur Lípez',
    localita: 'De Uyuni al Sur Lípez, hasta la frontera chilena',
    cosE:
      "El tour clásico en 4x4 que parte de Uyuni, atraviesa el salar y sigue hacia el sur entre lagunas de colores, desiertos de gran altitud, géiseres y termas, con la posibilidad de terminar en San Pedro de Atacama, en Chile, en lugar de volver atrás.",
    percheFarla: "Porque concentra en tres días una sucesión de paisajes que no existe en ningún otro sitio: extensión de sal, flamencos en lagunas rojas, géiseres a 5.000 metros y volcanes en la frontera.",
    durata: '3 días, 2 noches (existe también la versión de un día solo por el salar)',
    periodo:
      "mayo-octubre para el salar seco y transitable por completo; enero-marzo para el efecto espejo, aunque con varias paradas inaccesibles",
    costo: 'unos 150-250 $ por persona según el operador, más la entrada a la reserva Eduardo Avaroa',
    comePrenotare:
      "A través de las agencias de Uyuni o de La Paz. Vale la pena elegir en función del mantenimiento de los vehículos y no del precio: se viaja por pistas aisladas a más de 4.500 metros, donde una avería seria es un problema difícil de resolver.",
    cosaPortare:
      "Saco de dormir grueso (no siempre incluido, y en los alojamientos del Sur Lípez se duerme bajo cero), ropa por capas, protección solar muy alta (a esa altitud el sol reflejado por la sal quema), bañador para las termas y efectivo para las entradas.",
    perChiEAdatta: 'Apto para todos físicamente, pero la altitud se hace notar: el segundo día se superan los 4.800 metros.',
    giudizio: 'da-verificare',
    alternative: [
      'Tour de un día solo por el salar, para quien tiene poco tiempo',
      'Recorrido inverso partiendo de San Pedro de Atacama, en Chile',
    ],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Un flamenco en una laguna salada de gran altitud entre las colinas del altiplano boliviano',
    immagine: '/images/bolivia/tour-uyuni-sud-lipez.jpg',
  },
  {
    slug: 'miniere-cerro-rico',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'sucre-potosi',
    nome: 'Visita a las minas del Cerro Rico',
    localita: 'Cerro Rico, Potosí',
    cosE:
      "La visita guiada a las galerías de las cooperativas mineras todavía activas del Cerro Rico, la montaña cuya plata financió durante siglos el imperio español. Se entra con casco, lámpara y botas, acompañados casi siempre por antiguos mineros, en túneles estrechos, calurosos y polvorientos donde todavía hoy se trabaja con métodos en gran parte manuales.",
    percheFarla:
      "Porque es uno de los pocos lugares del mundo donde se toca con la mano lo que significó la extracción colonial, y porque el relato de quien trabaja allí es más eficaz que cualquier museo.",
    durata: 'unas 4 horas',
    periodo: 'todo el año, en días laborables, cuando las cooperativas están en actividad',
    costo: 'unos 15-30 $ por persona con guía, equipo incluido',
    comePrenotare: 'A través de las agencias de Potosí, prefiriendo las gestionadas por antiguos mineros que destinan una parte a las cooperativas.',
    cosaPortare:
      "Ropa que se pueda estropear para siempre, mascarilla o buff para el polvo, agua. Es tradición llevar un pequeño regalo a los mineros con los que uno se cruza (hojas de coca, refrescos, guantes), que se compra en el mercado de los mineros antes de subir.",
    perChiEAdatta:
      "No recomendada a quien sufre claustrofobia o tiene problemas respiratorios: las galerías son estrechas, el aire es pésimo y se está a 4.000 metros de altitud. Hay que afrontarla sabiendo que es un lugar de trabajo, con condiciones durísimas y esperanza de vida reducida.",
    giudizio: 'da-verificare',
    alternative: ['Casa Nacional de la Moneda, la antigua ceca colonial, para entender la historia del Cerro Rico sin entrar en la mina'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'La montaña del Cerro Rico de Potosí, acribillada por las minas de plata, sobre los tejados de la ciudad, Bolivia',
    immagine: '/images/bolivia/miniere-cerro-rico.jpg',
  },
]
