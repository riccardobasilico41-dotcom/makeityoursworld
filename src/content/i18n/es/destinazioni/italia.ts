import type { Destinazione } from '@/lib/types'

export const destinazioniItalia: Destinazione[] = [
  {
    slug: 'dolomiti',
    paeseSlug: 'italia',
    ordine: 1,
    nome: "Dolomitas en verano",
    tipologia: ['montagna', 'trekking', 'natura'],
    giorniConsigliati: "4-5 días para un valle, 7-10 para una Alta Via completa",
    visitataPersonalmente: true,
    introduzione:
      "Son Patrimonio de la UNESCO desde 2009 por una razón que casi nadie conoce: son un archivo geológico. Fueron arrecifes de coral de un mar tropical de hace doscientos cincuenta millones de años, luego elevados y resquebrajados, y las paredes verticales conservan su estratificación. Son nueve sistemas separados repartidos en tres provincias, y elegir cuál recorrer es la decisión más importante del viaje.",
    percheAndarci:
      "Paredes verticales de dolomía, prados de fondo de valle y una red tan densa de refugios con cocina y camas no se encuentran juntos en ningún otro lugar del mundo. Se camina durante días sin tienda ni comida, se duerme a tres mil metros y se comen canederli.",
    cosaVedere: [
      "Las Tre Cime di Lavaredo, con la vuelta en anillo alrededor de la base: **la carretera al Rifugio Auronzo es de peaje y desde 2026 exige reserva online obligatoria**",
      "El Lago di Braies, punto de partida de la Alta Via 1: **acceso en coche limitado en verano, con reserva obligatoria entre las 9 y las 16**",
      "Seceda, con la cresta cubierta de hierba que se corta de golpe en paredes verticales, y la Alpe di Siusi, la meseta alpina más extensa de Europa",
      "El Gruppo del Sella, el macizo tabular alrededor del cual giran los cuatro pasos",
      "La Marmolada, la Reina de las Dolomitas, con lo que queda del glaciar",
      "El Lago di Sorapis y el Lago di Carezza, con el agua de ese turquesa lechoso que le da la harina glaciar",
      "Las Cinque Torri y el museo al aire libre de la Gran Guerra, con las trincheras restauradas",
    ],
    cosaFare: [
      "Alta Via 1, de Braies a Belluno, el trekking por etapas más bonito de los Alpes (consulta la ficha de experiencia dedicada)",
      "La vuelta a las Tre Cime, la excursión más famosa y la más concurrida (consulta la ficha de experiencia dedicada)",
      "Una vía ferrata: nacieron en las Dolomitas, que tienen la red más densa del mundo (consulta la ficha de experiencia dedicada)",
      "Dormir en refugio al menos una noche, incluso sin hacer un trekking largo: cambia la relación con la montaña",
      "Ver el enrosadira, el rosa que adquieren las paredes al atardecer y al amanecer por la presencia de dolomía",
    ],
    doveDormire:
      "La elección del valle cuenta más que el alojamiento, y ese es el sentido de la comparación de más abajo. En general, los **refugios** hay que probarlos al menos una vez y para el verano se reservan desde enero: literas compartidas, cena a las 19, silencio a las 22, saco sábana obligatorio, casi siempre solo efectivo. En el fondo del valle, los **agriturismos masi** del Alto Adigio tienen una relación calidad-precio que los hoteles no igualan, pero hay que reservarlos con meses de antelación para julio y agosto.",
    doveMangiare:
      "En el refugio la cocina es precisa y repetitiva, y al tercer día se acaba amando: canederli en caldo, gulasch, polenta con queso fundido y setas, Kaiserschmarrn de postre y la sopa de cebada, que es el plato de alta montaña por excelencia. En el fondo del valle el Alto Adigio tiene una cocina propia, ni italiana ni austriaca: speck, Schlutzkrapfen (los raviolis de centeno con espinacas), strudel y los Törggelen otoñales en los masi, cuando sale el vino nuevo. Para beber, el Lagrein y la Schiava en el Alto Adigio, el Teroldego en el Trentino.",
    comeArrivare:
      "El coche es el medio más práctico y, para ciertos valles, el único sensato. En tren se llega a Bolzano, Bressanone o Calalzo y se continúa con los autobuses de valle, buenos en el Alto Adigio y mucho menos en el Véneto. Los aeropuertos útiles son Venecia, Verona, Innsbruck y Treviso.",
    comeSpostarsi:
      "Coche, con la advertencia de que **en verano los aparcamientos de los puntos más conocidos se llenan antes de las ocho de la mañana** y varias carreteras tienen acceso limitado. Los autobuses del Alto Adigio, incluidos en las tarjetas locales de muchos alojamientos, funcionan bien y permiten dejar el coche aparcado; en el Véneto la cobertura es peor. Los teleféricos de verano ahorran cientos de metros de desnivel y conviene meterlos en el presupuesto.",
    periodoMigliore:
      "**de finales de junio a mediados de septiembre**, cuando los refugios están abiertos; antes y después, buena parte de la red está cerrada y algunos senderos altos aún tienen nieve. Julio y agosto son los meses más concurridos y más caros. **Septiembre es el mejor mes**: menos gente, aire limpio, bonitos colores y refugios abiertos hasta finales de mes. En junio, los neveros que quedan en los pasos altos son una variable seria.",
    costi:
      "Media pensión en refugio, aproximadamente 60-80 € por persona, con descuentos para los socios del CAI y de las asociaciones alpinas afiliadas: el carné se amortiza en tres noches. **Peaje de las Tre Cime, alrededor de 40 € por coche** (válido 12 horas, con reserva obligatoria), teleféricos 15-30 € por tramo, alquiler del kit de ferrata 15-25 € al día.",
    erroriDaEvitare: [
      "Presentarse en las Tre Cime o en Braies sin reserva: desde 2026 la carretera de las Tre Cime exige reserva online obligatoria y Braies limita el acceso en coche entre las 9 y las 16 en temporada alta. Quien llega sin ella da media vuelta",
      "Reservar los refugios en junio para agosto: las plazas se agotan desde enero-febrero, y las habitaciones privadas, incluso antes",
      "Salir tarde: las tormentas de verano por la tarde son regulares y violentas, y la regla alpina es estar en el refugio antes de las dos",
      "Subir a la montaña sin efectivo: en muchos refugios no se usa tarjeta porque no hay cobertura",
      "Subestimar el desnivel: en las Dolomitas los números son bajos en kilómetros y altos en metros, y un «sendero fácil» puede significar ochocientos metros de subida",
      "Hacer una ferrata sin kit homologado y sin saber lo que se está haciendo: es la causa más frecuente de intervenciones del rescate alpino, que en Italia se paga",
    ],
    confronti: [
      {
        titolo: "Qué zona de las Dolomitas elegir",
        introduzione:
          "Las Dolomitas no son un lugar sino nueve sistemas montañosos en tres provincias, con idiomas, precios, afluencia y carácter distintos. Quien elige al azar casi siempre acaba en los dos o tres puntos más fotografiados, que también son los más congestionados. Así se dividen.",
        opzioni: [
          {
            nome: "Val Gardena y Alpe di Siusi",
            sintesi: "El corazón turístico del Alto Adigio, con Seceda, el Sassolungo y la meseta alpina más extensa de Europa. Ladino, alemán e italiano en el mismo valle.",
            costo: "gama alta: es la zona más cara de las Dolomitas junto con Cortina",
            durata: "4-5 días",
            pro: [
              "La mayor densidad de panoramas icónicos de todas: Seceda, Alpe di Siusi, Sassolungo en pocos kilómetros",
              "Numerosas instalaciones de verano, que hacen accesibles cotas altas incluso para quien camina poco",
              "Muy buenos servicios, autobuses de valle eficientes y alojamientos de nivel",
              "Excelente para familias y para quien no quiere un trekking exigente",
            ],
            contro: [
              "Abarrotadísima en julio y agosto: los aparcamientos de Seceda y Ortisei se llenan muy temprano",
              "Muy edificada: el fondo del valle es una hilera de hoteles y ya no tiene nada de alpino",
              "Los precios en temporada alta son de vértigo",
            ],
            perChi: "Quien va por primera vez, quien viaja con familia, quien quiere las fotografías que ha visto.",
          },
          {
            nome: "Cortina y las Dolomitas Ampezzane",
            sintesi: "La vertiente véneta, con Tre Cime, Cinque Torri, Lago di Sorapis y Tofane. Sede olímpica en 2026 junto con Milán.",
            costo: "gama alta, con los precios de Cortina condicionando todo el valle",
            durata: "4-6 días",
            pro: [
              "Las Tre Cime, que siguen siendo el símbolo de las Dolomitas",
              "El museo al aire libre de la Gran Guerra en las Cinque Torri, con las trincheras restauradas: además del paisaje, hay historia",
              "Acceso cómodo a Misurina, Sorapis y al Passo Giau",
            ],
            contro: [
              "El peaje y la reserva obligatoria para las Tre Cime, con colas reales en las horas centrales",
              "Cortina es cara y en temporada alta tiene una vida mundana que poco tiene que ver con la montaña",
              "Las obras y las intervenciones ligadas a los Juegos Olímpicos han cambiado el valle: conviene comprobar antes qué está abierto",
            ],
            perChi: "Quien quiere las Tre Cime y la parte histórica de la Gran Guerra, y acepta la aglomeración.",
          },
          {
            nome: "Val Badia y Alta Badia",
            sintesi: "El corazón ladino, alrededor del Gruppo del Sella y las Odle, con el Parque Natural Fanes-Sennes-Braies a sus espaldas.",
            costo: "media-alta, un escalón por debajo de la Gardena",
            durata: "4-6 días",
            pro: [
              "Cultura ladina todavía viva, con lengua y toponimia propias",
              "Base perfecta para la vuelta de los cuatro pasos y para el grupo del Sella",
              "El Parque Fanes-Sennes, una de las mesetas más bellas y menos transitadas de las Dolomitas",
              "Cocina de nivel altísimo en relación con el tamaño del valle",
            ],
            contro: ["Menos «icónica» en las fotografías: para unos es una virtud, para otros no", "Los pasos en temporada alta son asaltados por motos y ciclistas"],
            perChi: "Quien vuelve por segunda vez y quiere caminar en serio sin renunciar a los servicios.",
          },
          {
            nome: "Val di Fassa y Pale di San Martino",
            sintesi: "El Trentino: Catinaccio, Marmolada y, más al sur, la meseta de las Pale, un desierto de roca a dos mil seiscientos metros.",
            costo: "media, bastante más baja que el Alto Adigio",
            durata: "4-6 días",
            pro: [
              "Precios más asequibles con un paisaje equivalente",
              "La meseta de las Pale di San Martino no se parece a nada más en las Dolomitas: parece la luna",
              "Menos aglomeración que en los polos altoatesinos",
              "El Catinaccio al atardecer es el lugar donde el enrosadira da lo mejor de sí",
            ],
            contro: ["Servicios y transporte público menos cuidados que en el Alto Adigio", "San Martino di Castrozza queda lejos de los demás polos dolomíticos"],
            perChi: "Quien quiere las Dolomitas gastando menos y con menos gente alrededor.",
          },
          {
            nome: "Dolomitas Friulanas y Bellunesas",
            sintesi: "El trozo que casi nadie hace: las Dolomitas Friulanas, declaradas «wilderness», y el Parque Nacional de las Dolomitas Bellunesas.",
            costo: "baja: es la zona más económica de todo el sistema",
            durata: "3-5 días",
            pro: [
              "Se camina jornadas enteras encontrando poquísima gente",
              "Precios de otra época comparados con el Alto Adigio",
              "Refugios pequeños y de gestión familiar, sin reservas imposibles",
            ],
            contro: [
              "Senderos menos cuidados y señalizados, con tramos que requieren más experiencia",
              "Pocas instalaciones: aquí se sube con las piernas",
              "Servicios mínimos y transporte público casi inexistente",
            ],
            perChi: "Quien ya ha hecho las Dolomitas clásicas y no soporta más la cola en el sendero.",
          },
        ],
        raccomandazione:
          "Primera vez: Val Gardena o Alta Badia, en **septiembre** en lugar de agosto, una decisión que cambia el viaje más que cualquier otra. Segunda vez: Val di Fassa o Pale di San Martino, para gastar menos y ver más. Si el problema principal es la cola en el sendero, Dolomitas Friulanas sin pensarlo, sabiendo que allí hay que saber caminar solo.",
      },
      {
        titolo: "Refugio o fondo de valle: cómo dormir en las Dolomitas",
        introduzione:
          "Es la elección que decide el tipo de viaje, y casi siempre se hace por costumbre en lugar de con un criterio. Dormir en altura es más incómodo, y lo cambia todo.",
        opzioni: [
          {
            nome: "Refugio en altura",
            sintesi: "Literas compartidas o habitaciones pequeñas a dos mil-tres mil metros, media pensión, cena a hora fija, silencio desde las 22.",
            costo: "media pensión aproximadamente 60-80 €, con descuentos para socios del CAI que hacen rentable el carné en tres noches",
            durata: "desde una noche hasta una Alta Via entera",
            pro: [
              "Ya estás en altura al amanecer y al atardecer, que son las dos horas por las que merece la pena estar allí",
              "Permite hacer trekking por etapas sin tienda ni comida: es el modelo alpino, y en otros sitios no hay una red tan densa",
              "La cena en común con los demás excursionistas es la mitad de la experiencia",
              "Descuentos importantes para los socios de las asociaciones alpinas",
            ],
            contro: [
              "Hay que reservar desde enero-febrero para el verano; las habitaciones privadas, mucho antes",
              "Saco sábana obligatorio, duchas de fichas o inexistentes, literas ruidosas",
              "A menudo **solo efectivo**, porque no hay línea",
              "Nada es negociable: cena a las 19, luces apagadas a las 22",
            ],
            perChi: "Cualquiera que camine. Al menos una noche hay que hacerla incluso quien no tiene intención de hacer un trekking largo.",
          },
          {
            nome: "Maso o agriturismo de fondo de valle",
            sintesi: "Las estructuras agrícolas del Alto Adigio y del Trentino, a menudo todavía explotaciones en activo, con habitaciones y desayuno de producción propia.",
            costo: "asequible comparado con los hoteles, pero hay que reservar con meses de antelación",
            durata: "base fija para 4-7 días de excursiones diarias",
            pro: [
              "La mejor relación calidad-precio de la montaña italiana",
              "Desayunos con productos de la propia explotación que ningún hotel iguala",
              "Base cómoda para salidas distintas cada día, sin mover el equipaje",
              "Muchas estructuras incluyen la tarjeta de transporte público del valle",
            ],
            contro: [
              "Te pierdes el amanecer y el atardecer en altura, que son el mejor momento",
              "Hace falta coche o autobús cada mañana, con los aparcamientos llenándose pronto",
              "Reserva con meses de antelación para julio y agosto",
            ],
            perChi: "Quien hace excursiones de un día, quien viaja con niños, quien quiere una base fija.",
          },
          {
            nome: "Hotel en localidad turística",
            sintesi: "Ortisei, Cortina, Canazei, Corvara: servicios completos, spa, media pensión.",
            costo: "de alto a muy alto, con picos en agosto",
            durata: "semana clásica",
            pro: ["Comodidad total y servicios de nivel", "Excelente con familias o con mal tiempo", "Cercanía a las instalaciones y a los autobuses"],
            contro: ["El fondo de valle turístico ha perdido casi todo su carácter alpino", "Precios altos para lo que se ve, comparado con las otras dos opciones", "La montaña se vive con horario, entre las nueve y las cinco"],
            perChi: "Quien busca unas vacaciones más que una excursión, y quien tiene necesidades de confort concretas.",
          },
        ],
        raccomandazione:
          "La fórmula que mejor funciona es mixta: base en un maso de fondo de valle durante cuatro o cinco días de salidas, con **al menos una o dos noches en refugio** en medio. Cuesta poco más, y las noches en altura son las que se recuerdan. Quien hace una Alta Via, en cambio, vive en refugio y punto, y reserva en enero.",
      },
    ],
    miaEsperienza:
      "En las Dolomitas la comparación con el resto del mundo deja de funcionar, y no es cuestión de campanilismo: paredes verticales, prados altos y una red tan densa de refugios con cocina y camas no los he encontrado juntos en ningún otro sitio. Se camina ocho horas con una mochila de treinta litros y por la noche se come polenta y queso fundido a dos mil quinientos metros, mientras la pared se vuelve rosa. El enrosadira parece un invento de folleto, pero es un fenómeno real ligado a la composición de la dolomía: la primera vez que ves encenderse así una pared entiendes por qué a estos montes les dieron un nombre propio. Dicho esto, hay que decir claro que en julio y agosto ciertos puntos se han vuelto impracticables. La vuelta a las Tre Cime en pleno agosto es una fila india, los aparcamientos se agotan al amanecer, y en 2026 han tenido que poner la reserva obligatoria en la carretera. No hace falta renunciar: basta ir en septiembre, cuando los refugios siguen abiertos y hay un tercio de la gente, o desplazarse veinte kilómetros hacia los valles que nadie fotografía.",
    esperienzeSlugs: ['alta-via-1', 'tre-cime-lavaredo', 'via-ferrata-dolomiti'],
    tripSlugs: ['dolomiti-roadtrip'],
    imageAlt: 'Las agujas de las Pale di San Martino saliendo de las nubes sobre los prados del Paso Rolle, Dolomitas',
    immagine: '/images/italia/pale-san-martino-passo-rolle-riccardo.jpg',
  },
  {
    slug: 'sciare-in-italia',
    paeseSlug: 'italia',
    ordine: 2,
    nome: "Esquiar en Italia",
    tipologia: ['sci', 'montagna', 'inverno'],
    giorniConsigliati: "5-7 días para una semana blanca, 2-3 para un fin de semana largo",
    visitataPersonalmente: true,
    introduzione:
      "Italia tiene una de las ofertas de esquí más grandes del mundo. Solo el Dolomiti Superski reúne doce áreas esquiables y más de mil doscientos kilómetros de pistas con un único forfait, y en el arco alpino hay conexiones internacionales con Francia y Suiza, glaciares esquiables y estaciones a cotas altísimas. La verdadera pregunta es qué área se corresponde con tu manera de esquiar y cuánto estás dispuesto a gastar.",
    percheAndarci:
      "En Italia la relación entre extensión, calidad de los servicios y precio aguanta la comparación con Francia, Suiza y Austria. Y aquí, a diferencia de casi todo el arco alpino, en altura se come bien: el refugio a mitad de pista es un restaurante.",
    cosaVedere: [
      "El Sellaronda, la vuelta esquiable alrededor del Gruppo del Sella: cuatro pasos, cuatro valles, un día entero sobre los esquís",
      "La Marmolada, con la pista que baja desde el glaciar y la vista de toda la cadena",
      "El Cervino desde Breuil-Cervinia, con la conexión internacional con Zermatt",
      "El Mont Blanc desde Courmayeur, con el Skyway y el fuera de pista de la Vallée Blanche en la vertiente francesa",
      "La Via Lattea, que conecta Sestriere, Sauze d'Oulx, Sansicario y Montgenèvre en Francia",
      "Livigno, zona extraaduanera a 1.800 metros, con la nieve más fiable de los Alpes italianos",
    ],
    cosaFare: [
      "La vuelta del Sellaronda en un día, en sentido horario o antihorario (consulta la ficha de experiencia dedicada)",
      "Esquí al amanecer, cuando las áreas abren las instalaciones antes del horario para el primer trazado sobre la nieve pisada",
      "Esquí de travesía o raquetas de nieve, para quien quiere la montaña invernal sin remontes (consulta la ficha de experiencia dedicada)",
      "Comer en un refugio en altura, que en Italia es uno de los motivos por los que se esquía",
      "Esquiar de noche, donde las pistas iluminadas siguen abiertas hasta tarde",
    ],
    doveDormire:
      "Vale la regla opuesta a la del verano: en invierno **estar en las pistas cuenta**, porque media hora de lanzadera con las botas puestas dos veces al día pesa. Las fórmulas ski-in/ski-out cuestan más y a menudo merecen la pena. La semana blanca en media pensión sigue siendo el formato más conveniente, y los paquetes que incluyen forfait y alquiler ahorran bastante comparado con comprar todo por separado.",
    doveMangiare:
      "Aquí Italia gana a todos sobre la nieve: los refugios de pista son verdaderos restaurantes. Se comen canederli, polenta, gulasch y casunziei en las Dolomitas, polenta concia y fonduta en el Valle de Aosta, pizzoccheri en la Valtellina, y se bebe bien. La cuenta es más alta que en el valle, pero lejos de las de Francia y Suiza. En temporada alta los mejores refugios hay que reservarlos, incluso para comer.",
    comeArrivare:
      "En coche, con **cadenas o neumáticos de invierno obligatorios por ley** en gran parte de la red de montaña durante el periodo invernal, con fechas que varían de una región a otra. Los trenes llegan a los fondos de valle principales (Bolzano, Aosta, Tirano, Oulx) y se continúa en autobús. Los aeropuertos más útiles son Verona, Venecia, Milán, Turín e Innsbruck, con traslados organizados a las estaciones mayores.",
    comeSpostarsi:
      "Dentro de las grandes áreas los esquís son el medio de transporte: se cruzan valles enteros sin tocar el coche. Los skibus de valle suelen estar incluidos en la tarjeta de huéspedes y resuelven el último tramo.",
    periodoMigliore:
      "La temporada va de principios de diciembre a mediados de abril, pero los periodos son muy distintos. **Navidad y Fin de Año** tienen los precios más altos del año y las pistas más concurridas. **Enero después de Reyes** es el mejor momento por relación calidad-precio: buena nieve, poca gente, precios bajos. **Febrero** es el mes con la nieve más fiable pero coincide con las semanas blancas escolares. **Marzo** es el mejor mes para quien esquía bien: días largos, sol, nieve todavía buena en altura y precios a la baja. En abril solo se esquía en alta montaña y en los glaciares.",
    costi:
      "El forfait es la partida principal y varía mucho. En el Dolomiti Superski el de un día en temporada alta ronda los 86 euros (unos 77 en temporada baja) y el de temporada unos 970: son cifras orientativas que hay que volver a comprobar cada año. Luego están el alquiler (25-45 € al día por un equipo completo), las clases y la comida en altura. **Las tarifas bajan bastante reservando forfait y alojamiento en paquete y fuera de los periodos punta.**",
    erroriDaEvitare: [
      "Reservar en Navidad o Fin de Año sin saber que son las dos semanas más caras del año, con diferencias de hasta el cuarenta por ciento respecto a enero",
      "Elegir el área por fama en lugar de por altitud: por debajo de los 1.800 metros, con los inviernos de los últimos años, la nieve natural ya no está garantizada y se esquía sobre nieve producida",
      "Comprar forfait y alquiler por separado cuando hay paquete: la diferencia se nota",
      "Ponerse en carretera sin cadenas o neumáticos de invierno: en Italia es una obligación legal, y se arriesga la multa",
      "Subestimar el seguro: en Italia **el rescate en pista y en montaña se paga**, y en varias regiones una intervención con helicóptero cuesta miles de euros. Muchos forfaits incluyen una cobertura básica: conviene comprobar qué cubre",
      "Afrontar el fuera de pista sin ARVA, pala, sonda y alguien que sepa usarlos: sin ellos, el deporte se convierte en un riesgo",
    ],
    confronti: [
      {
        titolo: "Qué área esquiable elegir en Italia",
        introduzione:
          "La elección se hace casi siempre por costumbre o por el boca a boca, y casi siempre sin considerar los dos criterios que importan: la **altitud** (que hoy decide si habrá nieve) y el **tipo de esquí** que se busca. Aquí están las grandes áreas italianas comparadas sobre esas bases.",
        opzioni: [
          {
            nome: "Dolomiti Superski",
            sintesi: "El mayor consorcio de esquí del mundo por extensión servida con un único forfait: doce áreas, más de 1.200 km de pistas, del Sellaronda a la Marmolada y Cortina.",
            costo: "un día ronda los 86 € en temporada alta, el de temporada unos 970 €",
            durata: "una semana no basta para verlo todo",
            pro: [
              "Una extensión sin comparación: se esquía durante días sin repetir nunca una pista",
              "El Sellaronda, una vuelta completa alrededor de un macizo en un día, no existe en otro sitio",
              "Refugios en altura mucho mejores que en Francia y Suiza",
              "Mantenimiento de las pistas y nieve producida entre los mejores de Europa",
              "Panorama: se esquía dentro de un Patrimonio de la UNESCO",
            ],
            contro: [
              "El forfait más caro de Italia",
              "Pistas en su mayoría fáciles y medias: quien busca pendientes serias encuentra menos de lo que la extensión hace esperar",
              "Cotas medias no altísimas comparadas con Francia: en las temporadas escasas se depende mucho de la nieve artificial",
              "Sellaronda abarrotado en las semanas punta",
            ],
            perChi: "Quien esquía por el placer de dar vueltas, quien pone el paisaje y la comida entre los motivos de la jornada, familias y niveles intermedios.",
          },
          {
            nome: "Cervinia-Zermatt (Valle de Aosta)",
            sintesi: "El área más alta de los Alpes italianos, con conexión esquiable internacional con la suiza Zermatt y esquí de verano en el glaciar del Plateau Rosà.",
            costo: "alto, con un suplemento importante por el forfait internacional hacia Zermatt",
            durata: "5-7 días",
            pro: [
              "Cota altísima: es el área italiana con la nieve más garantizada, y se esquía hasta bien entrada la primavera",
              "La conexión con Zermatt permite esquiar en dos países el mismo día, bajo el Cervino desde ambas vertientes",
              "Pistas larguísimas y anchas, perfectas para devorar kilómetros",
              "Esquí de verano en el glaciar",
            ],
            contro: [
              "El pueblo de Cervinia no tiene ningún carácter: es una estación construida para esquiar, sin casco histórico",
              "Expuesta al viento y a la niebla en altura, con cierres frecuentes de instalaciones los días malos",
              "El suplemento para Zermatt es caro",
              "Pocas pistas difíciles en proporción",
            ],
            perChi: "Quien quiere la certeza de la nieve y pistas largas, y quien va a final de temporada cuando en otros sitios se esquía sobre nieve podrida.",
          },
          {
            nome: "Livigno",
            sintesi: "Zona extraaduanera en el Alta Valtellina a 1.800 metros de cota mínima, con orientación favorable y una fuerte vocación por el snowpark y el freestyle. Sede olímpica en 2026 para las disciplinas de freestyle y snowboard.",
            costo: "medio, con la ventaja de la exención fiscal en equipamiento, carburante y alcohol",
            durata: "5-7 días",
            pro: [
              "Cota de partida alta y clima seco: entre las estaciones italianas con la nieve más fiable",
              "Zona franca: equipamiento, carburante y artículos varios cuestan bastante menos",
              "El snowpark es de los mejores de Europa, y las instalaciones olímpicas han elevado aún más el nivel",
              "Excelente también para el esquí de fondo, con circuitos muy extensos",
            ],
            contro: [
              "Llegar es largo: la carretera pasa por puertos altos o por el túnel, y con nieve los tiempos se alargan bastante",
              "El pueblo es largo y disperso, y hacen falta lanzaderas",
              "Extensión del área inferior a la dolomítica",
              "Frío seco muy intenso en enero",
            ],
            perChi: "Freestylers, snowboarders, quien busca nieve garantizada sin los precios dolomíticos, quien esquía también de fondo.",
          },
          {
            nome: "Via Lattea (Piamonte)",
            sintesi: "Sestriere, Sauze d'Oulx, Sansicario, Claviere y la francesa Montgenèvre: cuatrocientos kilómetros de pistas con un único forfait, a una hora y media de Turín.",
            costo: "mucho más bajo que el Dolomiti Superski a igual extensión",
            durata: "4-6 días",
            pro: [
              "La mejor relación kilómetros-precio de los Alpes italianos",
              "Conexión con Francia incluida en el forfait completo",
              "Comodísima desde Turín y el noroeste: se puede hacer incluso en el día",
              "Pistas técnicas de nivel olímpico en Sestriere, herencia de los Juegos de 2006",
            ],
            contro: [
              "Nieve menos fiable que en las áreas alpinas más altas, con fuerte dependencia de la producida",
              "Las estaciones son feas de ver, hijas de la edificación de los años sesenta y setenta",
              "Servicios y refugios que no están al nivel dolomítico",
              "Conexiones entre los sectores a veces lentas",
            ],
            perChi: "Quien quiere muchos kilómetros gastando poco, quien vive en el noroeste, esquiadores intermedios y avanzados.",
          },
          {
            nome: "Monterosa Ski (Valle de Aosta y Piamonte)",
            sintesi: "Champoluc, Gressoney y Alagna conectadas entre sí bajo el macizo del Monte Rosa. Es la referencia italiana para el fuera de pista.",
            costo: "medio",
            durata: "5-7 días",
            pro: [
              "El mejor freeride de Italia: Alagna es uno de los destinos de freeride más conocidos de Europa",
              "Tres valles walser con una identidad cultural y arquitectónica fuerte, que las estaciones construidas no tienen",
              "Cotas altas y vertientes norte que conservan bien la nieve",
              "Menos concurrido que los grandes nombres",
            ],
            contro: [
              "Área pensada para esquiadores expertos: los principiantes tienen poco",
              "El fuera de pista aquí es serio y requiere equipo de autorrescate y guía",
              "Conexiones entre los valles que con viento fuerte se interrumpen",
              "Menos servicios y menos vida nocturna",
            ],
            perChi: "Freeriders, esquiadores expertos, quien busca la montaña más que la estación de esquí.",
          },
          {
            nome: "Apeninos: Roccaraso, Campo Felice, Abetone, Monte Amiata",
            sintesi: "Las estaciones apenínicas, del gran área de Roccaraso-Rivisondoli en los Abruzos a los polos toscanos y emilianos.",
            costo: "el más bajo de todos, a menudo la mitad que en los Alpes",
            durata: "fin de semana",
            pro: [
              "Precios de forfait, alojamiento y restauración lejísimos de los alpinos",
              "Comodidad para quien vive en el centro-sur: se esquía a pocas horas de Roma y Nápoles",
              "Roccaraso tiene una extensión seria, la mayor de los Apeninos",
              "Ambiente más familiar y menos mundano",
            ],
            contro: [
              "Cotas bajas: la nieve es la variable crítica y en los últimos inviernos ha flaqueado a menudo",
              "Temporadas cortas y cada vez más inciertas",
              "Pistas menos extensas y menos variadas",
              "Aglomeración fuerte los fines de semana, porque es la cuenca de todo el centro-sur",
            ],
            perChi: "Quien vive en el centro-sur, quien esquía pocos días al año, familias con presupuesto contenido.",
          },
        ],
        raccomandazione:
          "El criterio más útil hoy es la **altitud**, porque es la que decide si habrá nieve: por encima de los dos mil metros de partida se esquía con razonable certeza, por debajo de los mil ochocientos se depende del cañón. Para una semana blanca clásica con familia o nivel intermedio, **Dolomiti Superski**, aceptando su precio e yendo en enero después de Reyes o en marzo. Para la certeza de la nieve y para esquiar tarde, **Cervinia**. Para el fuera de pista, **Monterosa**. Para muchos kilómetros a poco precio, **Via Lattea**. Para el freestyle y la nieve garantizada sin los precios dolomíticos, **Livigno**. Los Apeninos tienen sentido para quien vive en el centro-sur y esquía pocos días, sabiendo que la temporada se ha convertido en una apuesta.",
      },
      {
        titolo: "Cuándo ir: las cinco temporadas de la semana blanca",
        introduzione:
          "En la misma estación, en la misma área, el mismo apartamento puede costar el doble según la semana. Conocer el calendario es la forma más eficaz de ahorrar en la nieve.",
        opzioni: [
          {
            nome: "Diciembre hasta la Inmaculada",
            sintesi: "La apertura de la temporada, con el 8 de diciembre como primer fin de semana fuerte.",
            costo: "bajo fuera del puente, alto durante",
            durata: "fin de semana o pocos días",
            pro: ["Precios bajos en las semanas laborables", "Pistas nuevas y poca gente", "El aire de principio de temporada"],
            contro: ["Nieve incierta: a menudo solo está abierta una parte del área", "Días cortísimos", "El puente de la Inmaculada ya tiene precios de temporada alta"],
            perChi: "Quien quiere esquiar pronto y acepta que esté abierto a medias.",
          },
          {
            nome: "Navidad y Fin de Año",
            sintesi: "Las dos semanas más caras del año, con diferencia.",
            costo: "el más alto del año, con diferencias de hasta el 40% respecto a enero",
            durata: "semana",
            pro: ["Eventos y vida nocturna al máximo", "Todas las instalaciones abiertas", "Si se viaja en familia, coincide con las vacaciones escolares"],
            contro: ["Precios altísimos en todo", "Pistas llenas y colas en los remontes", "Hay que reservar con meses de antelación"],
            perChi: "Quien no tiene alternativas de calendario, y quien busca el ambiente más que el esquí.",
          },
          {
            nome: "Enero después de Reyes",
            sintesi: "La mejor ventana por relación calidad-precio de toda la temporada.",
            costo: "el más bajo de la temporada alta, a menudo con ofertas agresivas",
            durata: "semana",
            pro: [
              "Precios en caída justo después del 6 de enero",
              "Nieve en general excelente y áreas todas abiertas",
              "Pistas vacías en las semanas laborables",
            ],
            contro: ["Frío intenso, con jornadas duras en altura", "Días todavía cortos", "Menos vida nocturna"],
            perChi: "Cualquiera que pueda elegir las fechas. Es la respuesta correcta en la mayoría de los casos.",
          },
          {
            nome: "Febrero",
            sintesi: "El mes con la nieve estadísticamente más fiable, pero coincide con las semanas blancas escolares.",
            costo: "alto, con picos en las semanas de vacaciones escolares",
            durata: "semana",
            pro: ["Nieve en su mejor momento", "Días que se alargan", "Áreas al máximo de eficiencia"],
            contro: ["Aglomeración en las semanas de vacaciones escolares, que cambian según la región", "Precios altos", "Colas en los remontes en las horas centrales"],
            perChi: "Quien pone la calidad de la nieve por delante de todo, evitando las semanas escolares de su propia región y de las limítrofes.",
          },
          {
            nome: "Marzo y principios de abril",
            sintesi: "La temporada del esquí primaveral: sol, días largos, precios a la baja.",
            costo: "en descenso, con ofertas fuertes a final de temporada",
            durata: "semana o fin de semana",
            pro: [
              "Días largos y luminosos: se esquía de nueve a cinco",
              "Precios bastante más bajos",
              "Comidas en las terrazas de los refugios, que son la mitad del placer",
              "Poca gente después de las semanas escolares",
            ],
            contro: [
              "La nieve se transforma: dura por la mañana, podrida por la tarde, y a cotas bajas puede desaparecer",
              "Algunas instalaciones cierran antes",
              "Hace falta alta montaña para tener garantías",
            ],
            perChi: "Quien esquía bien y sabe manejar la nieve transformada, y quien pone el sol entre los motivos para ir a la montaña.",
          },
        ],
        raccomandazione:
          "**Enero después de Reyes** si se puede elegir libremente: mismas pistas, misma área, cuarenta por ciento menos y ninguna cola. **Marzo en alta montaña** si se esquía bien y se quiere sol. Navidad y Fin de Año solo si el calendario no deja alternativas, y en ese caso reservando con meses de antelación.",
      },
    ],
    miaEsperienza:
      "El esquí italiano se distingue del francés o del suizo por la comida más que por la longitud de las pistas. En Francia se esquía fuerte y se come en un autoservicio; en las Dolomitas se hacen cuatro horas por la mañana, uno se sienta en un refugio a dos mil cuatrocientos metros y come canederli y strudel delante de una pared rosa. Quien esquía para hacer kilómetros lo considera tiempo perdido, quien va para estar en la montaña lo considera el motivo. El Sellaronda, la vuelta alrededor del Gruppo del Sella, es a la vez lo más bonito y lo más sobrevalorado. La idea es preciosa (cuatro pasos, cuatro valles, un macizo entero recorrido esquiando en una jornada), pero en las semanas punta es una cola continua, con los últimos remontes cerrando muy pronto y el riesgo real de quedarse en el lado equivocado. Hay que hacerlo en enero, saliendo a las nueve. En los últimos años, en cambio, ha cambiado la altitud: por debajo de los mil ochocientos metros la nieve natural ya no es una garantía, y elegir la estación por fama en lugar de por altitud es la forma más rápida de encontrar una lengua blanca en medio de la hierba.",
    esperienzeSlugs: ['sellaronda', 'scialpinismo-ciaspole'],
    tripSlugs: ['settimana-bianca'],
    imageAlt: "Pistas nevadas con los remontes sobre Madonna di Campiglio y las cumbres de los Alpes al fondo",
    immagine: '/images/italia/sciare-in-italia.jpg',
  },
  {
    slug: 'roma',
    paeseSlug: 'italia',
    ordine: 3,
    nome: "Roma",
    tipologia: ['città d\'arte', 'archeologia', 'gastronomia'],
    giorniConsigliati: "4-5 días, y no bastan",
    visitataPersonalmente: true,
    introduzione:
      "Tres mil años de estratos en un casco histórico que es todo Patrimonio de la UNESCO y que contiene un Estado soberano. Es la única ciudad del mundo donde se excava para un metro, se encuentra un cuartel imperial y la cosa se vive como un problema logístico más que como un descubrimiento.",
    percheAndarci:
      "Ningún otro lugar tiene tantos estratos superpuestos. Y a diferencia de casi todas las grandes ciudades de arte europeas, Roma sigue estando habitada en su centro: en los barrios se compra el pan, se discute y se vive.",
    cosaVedere: [
      "El Coliseo, el Foro Romano y el Palatino, con la entrada única: **nominativa desde 2023, con documento de identidad obligatorio a la entrada**",
      "Los Museos Vaticanos y la Capilla Sixtina, más San Pedro con la cúpula",
      "El Panteón, que desde 2023 tiene entrada de pago, y la cúpula de hormigón no armado más grande jamás construida",
      "El Foro de Trajano, los Mercados y la Domus Aurea, con visitas guiadas de aforo muy limitado",
      "Trastevere, el Gueto y Monti: los barrios donde Roma sigue siendo un lugar donde se vive",
      "La Galería Borghese, con reserva obligatoria y entradas cada dos horas",
      "La Via Appia Antica y los acueductos, la Roma que casi nadie incluye en el programa",
    ],
    cosaFare: [
      "Roma subterránea: Basílica de San Clemente, Casas Romanas del Celio, Domus Aurea (consulta la ficha de experiencia dedicada)",
      "Caminar por la Via Appia Antica el domingo, cuando está cerrada al tráfico (consulta la ficha de experiencia dedicada)",
      "Aperitivo y cena en los barrios en lugar de alrededor de los monumentos: es ahí donde se come bien",
      "Entrar en una decena de iglesias al azar: en Roma la pintura de Caravaggio es gratis y a menudo no hay nadie",
    ],
    doveDormire:
      "Monti y Trastevere para estar en un barrio vivo, Prati por los precios más bajos y la comodidad de la línea A del metro hacia el Vaticano, Testaccio para comer bien y quedarse fuera de la multitud. Mejor evitar por la noche las zonas justo alrededor de la estación Termini y el área de la Fontana de Trevi, que de día es impracticable.",
    doveMangiare:
      "La cocina romana son cuatro pastas (cacio e pepe, gricia, amatriciana, carbonara) más el quinto cuarto, que pocos prueban y que explica la ciudad mejor que las pastas: coda alla vaccinara, tripa, coratella. Para comer en trattoria en Testaccio o en el Pigneto, no en el centro. La alcachofa a la judía en el Gueto en temporada (de finales de invierno a primavera), la pizza romana fina y crujiente, el supplì como merienda. **La regla más importante: no comer en ningún local con fotos de los platos fuera o con alguien que invita a entrar.**",
    comeArrivare:
      "Vuelo a Fiumicino (FCO), con el Leonardo Express en 32 minutos a Termini, o a Ciampino (CIA) para los vuelos de bajo coste. En tren, la alta velocidad une Roma con Milán en tres horas y con Nápoles en algo más de una hora.",
    comeSpostarsi:
      "El metro tiene tres líneas (pocas para una ciudad así, por razones arqueológicas: cada excavación encuentra algo), los autobuses son lentos e irregulares, los tranvías útiles en algunos ejes. **El centro histórico se recorre a pie**, y es la única forma sensata: las distancias son menores de lo que parece y casi todo está en un radio de dos kilómetros.",
    periodoMigliore:
      "**de octubre a marzo**, sin duda. Abril, mayo y septiembre son preciosos y están llenos de gente; julio y agosto son difíciles, con temperaturas que superan los 38 grados y olas de calor que hacen la visita fatigosa y para algunos arriesgada. En agosto, en cambio, muchos romanos están fuera y la ciudad cambia de cara, pero muchas trattorie están cerradas.",
    costi:
      "Entrada única Coliseo-Foro-Palatino, nominativa y por franja horaria; Museos Vaticanos que hay que reservar sí o sí, aunque no sea una obligación formal; Galería Borghese con entradas limitadas cada dos horas. Las iglesias son casi todas gratuitas, y contienen una parte enorme de lo que se viene a ver.",
    erroriDaEvitare: [
      "Comprar la entrada del Coliseo en el lugar o a revendedores en la calle: es **nominativa**, hace falta un documento de identidad original (no una copia), y desde 2026 el cambio de nombre está aún más limitado. Se compra solo en el canal oficial, con semanas de antelación para las mejores franjas",
      "No reservar la Galería Borghese: las entradas están limitadas a franjas de dos horas y se agotan",
      "Comer a menos de trescientos metros de un monumento famoso",
      "Programar Vaticano y Coliseo el mismo día: son dos medias jornadas pesadas y están en las antípodas del centro",
      "Dar por hecho que se puede entrar en San Pedro en pantalones cortos: el código de vestimenta se controla a la entrada",
      "Ir en julio o agosto sin organizar las jornadas en torno al calor, con los museos en las horas centrales",
    ],
    miaEsperienza:
      "Roma se visita mal precisamente porque se cree conocerla. La trampa es el triángulo Coliseo-Trevi-Vaticano, hecho en dos días con la lengua fuera, haciendo cola, comiendo mal. A mí me han quedado dos cosas que no cuestan nada. La primera son las iglesias: en San Luigi dei Francesi hay tres Caravaggio, se entra gratis y a media mañana de un martes de noviembre no había casi nadie. Se echa un euro en la máquina de monedas para la luz y uno se queda diez minutos delante de la Vocación de San Mateo. La segunda es la Via Appia Antica en domingo, cerrada al tráfico: se camina sobre basoli romanos originales entre los sepulcros y los pinos, con los acueductos a lo lejos, y durante kilómetros solo hay ciclistas y familias. Está a media hora del Coliseo, y sin embargo casi ninguno de los millones de personas que fotografían el Coliseo va allí. Para comer vale una sola regla: alejarse. En Testaccio, en el Pigneto o en San Lorenzo se come una cacio e pepe bien hecha por quince euros, a quinientos metros de un sitio donde lo mismo cuesta el doble y es congelado.",
    esperienzeSlugs: ['roma-sotterranea', 'appia-antica'],
    tripSlugs: ['roma-4-giorni', 'grandi-citta-italia'],
    imageAlt: "El Coliseo visto desde el Foro Romano entre los restos de las columnas y los cipreses, Roma",
    immagine: '/images/italia/roma.jpg',
  },
  {
    slug: 'firenze',
    paeseSlug: 'italia',
    ordine: 4,
    nome: "Florencia",
    tipologia: ['città d\'arte', 'rinascimento', 'gastronomia'],
    giorniConsigliati: "3 días, más uno o dos para la Toscana de alrededor",
    visitataPersonalmente: true,
    introduzione:
      "Aquí nació el Renacimiento, todo dentro de un casco histórico que se cruza a pie en veinte minutos. Por la misma razón es también una de las ciudades más saturadas de Europa: en el mismo medio kilómetro cuadrado están la cúpula de Brunelleschi, los Uffizi, el David y el Ponte Vecchio.",
    percheAndarci:
      "Ningún lugar del mundo tiene tantas obras por metro cuadrado. Y la cúpula de Brunelleschi, construida sin cimbras con una técnica que nadie ha logrado replicar con exactitud, es todavía hoy un problema de ingeniería antes que un monumento.",
    cosaVedere: [
      "La cúpula de Brunelleschi, subiendo los 463 escalones hasta la linterna: **subida con reserva obligatoria y franja horaria**",
      "Los Uffizi, que hay que reservar sí o sí",
      "La Galleria dell'Accademia para el David, y el Museo dell'Opera del Duomo, que casi todos se saltan y es el mejor de la ciudad",
      "Palazzo Pitti y el Jardín de Boboli, en la otra orilla",
      "La Capilla Brancacci y las Capillas Medicea, menos concurridas e igual de importantes",
      "San Miniato al Monte, la iglesia románica en la colina, con el canto gregoriano de los monjes por la tarde",
      "El Oltrarno, con los talleres artesanos, la parte de la ciudad que desaparece más deprisa",
    ],
    cosaFare: [
      "Subir la cúpula reservando la primera franja de la mañana (consulta la ficha de experiencia dedicada)",
      "Pasar una tarde en el Oltrarno entre los talleres de restauración, dorado y marroquinería",
      "Subir a San Miniato al atardecer en lugar de al Piazzale Michelangelo, que está a cien metros y tiene diez veces más gente",
      "Comer en una trattoria del Oltrarno o de Sant'Ambrogio en lugar de en el cuadrilátero del centro",
    ],
    doveDormire:
      "El Oltrarno para estar en un barrio todavía vivo a cinco minutos a pie del centro, Sant'Ambrogio por los precios y el mercado, San Frediano para la noche. El cuadrilátero entre el Duomo y la Signoria es comodísimo y caro, y por la noche no hay residentes.",
    doveMangiare:
      "La cocina toscana es pobre y de materia prima: ribollita, pappa al pomodoro, panzanella en verano, y la bistecca alla fiorentina, un corte preciso, de al menos tres dedos de alto, poco hecho sin discusión y servido al kilo. Hay que probar los bocadillos de lampredotto en los puestos, lo más florentino que hay, y los crostini de hígado de pollo. El mercado de Sant'Ambrogio es el de los residentes; el central de San Lorenzo, en la primera planta, se ha convertido en un patio de comidas.",
    comeArrivare:
      "Alta velocidad: Firenze Santa Maria Novella está en el centro, a quince minutos a pie del Duomo, y une con Milán en una hora y cuarenta y con Roma en una hora y media. El aeropuerto de Florencia es pequeño; Pisa y Bolonia son las alternativas con conexión en tren.",
    comeSpostarsi:
      "Todo a pie: el casco histórico es pequeño, y es su virtud y a la vez la causa de la congestión. El tranvía sirve a la periferia y al aeropuerto. **El coche en el centro es inútil y la ZTL lo multa**, con cámaras que sancionan a quien no lo sabe.",
    periodoMigliore:
      "noviembre, enero y febrero son los meses en que la ciudad vuelve a ser habitable y los museos se visitan sin colas interminables. Abril-junio y septiembre-octubre son los más bonitos y los más llenos. Julio y agosto son calurosísimos y saturados.",
    costi:
      "Uffizi y Accademia tienen tarifas más altas en temporada alta; la entrada combinada del complejo del Duomo cubre cúpula, baptisterio, campanario, cripta y museo y es la única forma de subir. **Los primeros domingos de mes los museos estatales son gratuitos**, y por eso hay colas enormes.",
    erroriDaEvitare: [
      "Presentarse en los Uffizi o en la Accademia sin reserva: las colas llegan a horas, y en temporada alta se arriesga no entrar",
      "No reservar la subida a la cúpula, que tiene franjas horarias limitadas y se agota con días de antelación",
      "Saltarse el Museo dell'Opera del Duomo porque «es solo un museo anexo»: contiene las puertas originales del Baptisterio y la Piedad Bandini, y es el mejor de la ciudad",
      "Entrar en el centro en coche: la ZTL está activa y las multas llegan a casa meses después",
      "Ir al Piazzale Michelangelo al atardecer en lugar de a San Miniato, que está cien metros más arriba, tiene la misma vista y una décima parte de la gente",
      "Pedir una «bistecca fiorentina» muy hecha o de menos de doscientos cincuenta gramos: no existe, y quien la sirve así está sirviendo otra cosa",
    ],
    miaEsperienza:
      "Florencia tiene un problema de escala que las guías no cuentan: todo lo que se viene a ver está en medio kilómetro cuadrado, y de abril a octubre el centro es una multitud compacta que se mueve despacio a lo largo de tres ejes. En la práctica la ciudad hay que hacerla al revés: temprano por la mañana, o en noviembre. La subida a la cúpula reservada en la primera franja, a las ocho y media, es otra experiencia que hacerla a mediodía: se sube por una escalera estrecha entre las dos cáscaras, se pasa a pocos centímetros de los frescos del Juicio, y arriba hay aire. Casi nadie, en cambio, va al Museo dell'Opera del Duomo, que vale lo que los Uffizi: dentro están las puertas originales del Baptisterio (las de la plaza son copias) y la última Piedad de Miguel Ángel, la que quería destruir. Hay cuatro personas. Para el atardecer, todos van al Piazzale Michelangelo, que es un aparcamiento con vendedores; cien metros más arriba está San Miniato al Monte, una iglesia románica del año mil con la fachada de incrustaciones de mármol, la misma vista y, por la tarde, los monjes que cantan en gregoriano en la cripta.",
    esperienzeSlugs: ['cupola-brunelleschi'],
    tripSlugs: ['firenze-3-giorni', 'grandi-citta-italia'],
    imageAlt: "El Ponte Vecchio y los demás puentes sobre el Arno vistos desde el Piazzale Michelangelo al atardecer, Florencia",
    immagine: '/images/italia/firenze.jpg',
  },
  {
    slug: 'venezia',
    paeseSlug: 'italia',
    ordine: 5,
    nome: "Venecia",
    tipologia: ['città d\'arte', 'isole', 'architettura'],
    giorniConsigliati: "3 días, uno de ellos para la laguna",
    visitataPersonalmente: true,
    introduzione:
      "Una ciudad construida sobre pilotes de madera hincados en el fango de una laguna, que durante mil años fue una potencia marítima y hoy tiene menos de cincuenta mil residentes en el casco histórico, menos de un tercio que en los años cincuenta. Es el único lugar de Italia donde existe una entrada de pago para la ciudad.",
    percheAndarci:
      "No se parece a nada más: es una ciudad sin automóviles, donde todo, de la basura a los muebles y los enfermos, se mueve en barca. Y la laguna, que casi nadie visita, es la razón por la que Venecia existe.",
    cosaVedere: [
      "La Basílica de San Marcos, con los mosaicos de oro, y el Palacio Ducal con los Plomos y el Puente de los Suspiros",
      "Las Gallerie dell'Accademia y la Colección Peggy Guggenheim",
      "El Puente de Rialto y el mercado del pescado a primera hora de la mañana, todavía frecuentado por quien hace allí la compra",
      "Cannaregio y el Gueto, el primer gueto judío de Europa, donde Venecia sigue estando habitada",
      "Las islas de la laguna: Murano por el vidrio, Burano por las casas de colores, Torcello por la basílica con los mosaicos bizantinos",
      "La Scuola Grande di San Rocco, con el ciclo de Tintoretto: es la Capilla Sixtina de Venecia, y hay diez personas",
      "San Giorgio Maggiore, con el campanario que tiene la mejor vista sobre San Marcos y ninguna cola",
    ],
    cosaFare: [
      "Venecia al amanecer, antes de que lleguen los trenes y los barcos (consulta la ficha de experiencia dedicada)",
      "Tomar el vaporetto de la línea 1 a lo largo del Gran Canal, que cuesta una fracción de una góndola y dura mucho más",
      "Perderse por Cannaregio y Castello, los sestieri donde todavía vive la gente",
      "Un paseo por la laguna hacia Torcello y las islas menores: la Venecia de antes de Venecia",
    ],
    doveDormire:
      "Cannaregio y Castello para estar en una zona todavía habitada y gastar menos; Dorsoduro por la cercanía a los museos y una noche más viva. **Dormir en el centro exime de la tasa de acceso** y permite tener la ciudad al amanecer y después de las seis de la tarde, las únicas dos ventanas en que es como uno se la espera. Mestre cuesta menos, pero quita justamente eso.",
    doveMangiare:
      "La cocina veneciana es de laguna y de pescado humilde: sarde in saor, baccalà mantecato, moeche (los cangrejos en muda, de temporada y carísimos), risotto de gò, hígado a la veneciana. La manera correcta de comer es el **giro de bacari**: pequeñas tabernas donde se comen los cicheti de pie en la barra (medio huevo con anchoa, albóndigas, bacalao sobre un crostino) con una sombra de vino, pasando de una a otra. Cuesta poco y se come muy bien, siempre que se salga de los ejes principales.",
    comeArrivare:
      "Tren hasta Venezia Santa Lucia, que está **dentro** de la ciudad: es la forma más sensata de llegar. Aeropuerto Marco Polo, conectado con vaporetto Alilaguna o autobús a Piazzale Roma. En coche solo se llega hasta Piazzale Roma o el Tronchetto, con aparcamientos carísimos.",
    comeSpostarsi:
      "A pie y en vaporetto. **Los billetes sencillos del vaporetto son caros y los pases por tiempo se amortizan enseguida** si se hace más de un trayecto al día. Los traghetti de góndola que cruzan el Gran Canal en los puntos sin puente cuestan pocos céntimos y casi ningún visitante sabe que existen.",
    periodoMigliore:
      "de noviembre a febrero, Carnaval aparte, Venecia vuelve a ser una ciudad. Los días son cortos y húmedos, existe la posibilidad de acqua alta (que hoy el MOSE limita pero no anula), pero a cambio se tienen los campielli para uno solo. Abril-junio y septiembre-octubre son los meses más bonitos y los más saturados.",
    costi:
      "**La tasa de acceso** se aplica a quien entra en el día sin pernoctar, en un número definido de jornadas de temporada alta: en 2026 se pagó en 60 jornadas entre abril y julio, 5 euros reservando con al menos cuatro días de antelación y 10 euros por debajo de ese umbral. Quien pernocta en la ciudad está exento pero debe registrarse igualmente. El calendario cambia cada año: conviene comprobarlo antes de partir. El pase de vaporetto por tiempo casi siempre compensa; la góndola tiene tarifas fijadas por el Ayuntamiento y de todos modos es cara.",
    erroriDaEvitare: [
      "Venir en el día en temporada alta sin comprobar la tasa de acceso y sin reservarla con antelación, pagando el doble",
      "Hacer Venecia entre las diez y las cinco y juzgarla: en esas horas, en los ejes principales, es una multitud compacta. A las siete de la mañana la misma calle está vacía",
      "Comer en los restaurantes con menú turístico alrededor de San Marcos y Rialto: es el lugar de Italia donde la relación calidad-precio es peor",
      "Tomar la góndola pensando que es un transporte: es una experiencia de tarifa fija y cara. El vaporetto 1 por el Gran Canal cuesta una fracción y dura más",
      "Saltarse la laguna: Torcello, con la basílica del siglo VII y los mosaicos del Juicio Final, es donde Venecia empezó y hay veinte personas",
      "Dar por hecho que se encuentra fácilmente un cajero o un baño público: ambos son pocos, y los baños son de pago",
    ],
    miaEsperienza:
      "Venecia es la ciudad más malentendida de Italia, y el motivo es el horario. Entre las diez de la mañana y las cinco de la tarde, en los ejes que van de la estación a Rialto y de Rialto a San Marcos, se camina en un flujo compacto y se entiende por qué los venecianos se han ido: son menos de cincuenta mil, un tercio que en los años cincuenta, y siguen bajando. Pero eso es solo una franja horaria. A las siete de la mañana las mismas calli están vacías, se oye el agua golpear contra los muros, pasan las barcas de reparto, y los bacari abren para quien va a trabajar. Después de las siete de la tarde ocurre lo mismo a la inversa. Es la única razón seria para dormir en el centro en lugar de en Mestre, más que la comodidad: tener esas dos ventanas. Casi nadie, en cambio, va a la laguna: Torcello tiene una basílica del siglo siete con un Juicio Final en mosaico que cubre una pared entera, se llega en cuarenta minutos de vaporetto, y hay veinte personas. Es allí donde Venecia empezó, antes de que existiera Venecia.",
    esperienzeSlugs: ['venezia-alba'],
    tripSlugs: ['venezia-3-giorni', 'grandi-citta-italia'],
    imageAlt: "El Gran Canal de Venecia al atardecer con los palacios asomados al agua y una lancha que remonta el canal",
    immagine: '/images/italia/venezia.jpg',
  },
  {
    slug: 'napoli',
    paeseSlug: 'italia',
    ordine: 6,
    nome: "Nápoles y el golfo",
    tipologia: ['città d\'arte', 'archeologia', 'gastronomia'],
    giorniConsigliati: "4-5 días con Pompeya y la costa",
    visitataPersonalmente: true,
    introduzione:
      "Es el casco histórico más densamente habitado de Europa, fundado por los griegos, con cuarenta metros de ciudad subterránea debajo y delante un volcán activo que en el 79 d. C. selló dos ciudades enteras bajo la ceniza, conservándolas mejor que cualquier restauración.",
    percheAndarci:
      "Es la ciudad italiana con más energía y más contradicciones, y en un radio de treinta kilómetros están Pompeya, Herculano, el Vesubio, los Campos Flégreos, Capri y la Costa Amalfitana. Una concentración así no existe en otro sitio.",
    cosaVedere: [
      "El casco histórico de la UNESCO, con Spaccanapoli y San Gregorio Armeno",
      "El Museo Arqueológico Nacional, que contiene los hallazgos de Pompeya y Herculano y hay que verlo **antes** de los yacimientos, no después",
      "La Cappella Sansevero con el Cristo Velado",
      "Nápoles subterránea y las catacumbas de San Gennaro y San Gaudioso",
      "Pompeya y Herculano: **entradas nominativas y tope de 20.000 visitantes al día en Pompeya, con franjas horarias en verano**",
      "El Vesubio, con la subida al cráter, y los Campos Flégreos con la Solfatara",
      "La Costa Amalfitana, Capri, Ischia y Procida",
    ],
    cosaFare: [
      "Pompeya y Herculano en el mismo viaje, sabiendo que se complementan (consulta la ficha de experiencia dedicada)",
      "Nápoles subterránea, bajando a las canteras griegas y a los refugios antiaéreos (consulta la ficha de experiencia dedicada)",
      "Comer una pizza napolitana donde nació, distinta de cualquier otra pizza (consulta la ficha de experiencia dedicada)",
      "El Sentiero degli Dei en la Costa, de Bomerano a Nocelle: la costa vista desde arriba en lugar de desde la carretera",
    ],
    doveDormire:
      "El casco histórico para estar dentro de la ciudad, Chiaia para una zona más tranquila y residencial, el Vomero por la vista y los precios. Para la Costa, dormir en Nápoles y hacer las excursiones de un día cuesta mucho menos que alojarse en Amalfi o Positano en temporada.",
    doveMangiare:
      "La pizza, con la diferencia de que aquí es un alimento popular y cuesta poco: la masa alta en el borde, cocida noventa segundos a cuatrocientos grados, blanda en el centro hasta el punto de que se come doblada. Luego el ragù napolitano que cuece horas, la genovese (que de genovesa no tiene nada), el babà, la sfogliatella riccia caliente de la mañana, y el café, que en Nápoles es cosa seria: corto, fuerte, tomado de pie. Y la pizza a portafoglio callejera, que cuesta dos euros.",
    comeArrivare:
      "Alta velocidad desde Roma en algo más de una hora y desde Milán en cuatro y media, con la estación de Napoli Centrale en la ciudad. Aeropuerto de Capodichino, muy cerca del centro. Para la Costa y Pompeya se usa la Circumvesuviana, que es lenta y está llena pero es directa.",
    comeSpostarsi:
      "Metro línea 1, con las «estaciones del arte» que son obras en sí mismas, y funiculares hacia el Vomero. El centro se recorre a pie. **Para la costa, el ferry gana al coche y al autobús en cualquier temporada**, y en verano la carretera estatal amalfitana es un atasco continuo.",
    periodoMigliore:
      "abril-junio y septiembre-octubre. En agosto la costa está saturada y la estatal bloqueada; en invierno Nápoles es excelente y la costa se vacía (con muchos alojamientos cerrados). El periodo navideño en San Gregorio Armeno, la calle de los belenes, es un fenómeno aparte: precioso e impracticable.",
    costi:
      "El Museo Arqueológico y los yacimientos vesubianos tienen entradas contenidas comparadas con el norte de Italia. La entrada combinada para Pompeya, Herculano, Oplontis y Estabia dura tres días y conviene siempre si se hacen al menos dos.",
    erroriDaEvitare: [
      "Ir a Pompeya sin entrada reservada: desde 2024 las entradas son **nominativas** y hay un **tope de 20.000 visitantes al día**, con franjas horarias en verano (15.000 por la mañana, 5.000 desde primera hora de la tarde). Agotada la cuota no se entra, ni online ni en taquilla",
      "Visitar Pompeya sin haber visto antes el Museo Arqueológico de Nápoles: los mejores mosaicos, frescos y bronces están allí, y sin ese paso el yacimiento parece un campo de muros",
      "Hacer Pompeya a mediodía en verano: no hay sombra, es inmensa, y cada año alguien se encuentra mal",
      "Elegir Pompeya en lugar de Herculano: Herculano es mucho más pequeña pero está mejor conservada, con los pisos superiores, la madera carbonizada, los muebles",
      "Conducir por la estatal amalfitana en agosto",
      "Esperar que en Nápoles el tráfico y las motos sigan las reglas a las que uno está acostumbrado: se cruza con decisión y de manera previsible, sin esperar un hueco que no llega",
    ],
    miaEsperienza:
      "Nápoles es la ciudad italiana que más divide, porque pide adaptarse en lugar de acoger. El casco histórico es la zona más densamente habitada de Europa y se nota: las callejuelas son estrechas, las motos pasan donde no deberían, la ropa está tendida sobre la cabeza y hay un ruido constante. Quien se irrita vuelve a casa diciendo que es caótica; quien entra en el ritmo descubre la ciudad con más energía del país. Lo que más cambia la visita, sin embargo, es un consejo banal sobre el orden: el Museo Arqueológico Nacional hay que verlo **antes** de Pompeya y no después. Todos los mejores mosaicos, frescos y bronces fueron llevados allí en el siglo XIX, y quien llega a Pompeya sin haberlos visto camina tres horas entre muros sin entender qué había dentro. Y luego Herculano, que casi todos se saltan para hacer la más famosa: es una décima parte de Pompeya pero fue sepultada por barro y no por ceniza, así que se han conservado los pisos superiores, las vigas de madera carbonizadas e incluso los muebles. Se camina dentro de casas de dos plantas con las escaleras todavía en su sitio.",
    esperienzeSlugs: ['pompei-ercolano', 'napoli-sotterranea', 'pizza-napoletana'],
    tripSlugs: ['napoli-3-giorni', 'grandi-citta-italia'],
    imageAlt: "El golfo de Nápoles con el Vesubio al fondo, un barco fondeado en la rada y las barcas amarradas en el puertecito",
    immagine: '/images/italia/napoli.jpg',
  },
  {
    slug: 'milano-nord',
    paeseSlug: 'italia',
    ordine: 7,
    nome: "Milán y el norte",
    tipologia: ['città', 'design', 'laghi'],
    giorniConsigliati: "2-3 días, más los lagos",
    visitataPersonalmente: true,
    introduzione:
      "La ciudad que menos se parece al resto de Italia: trabaja, se mueve deprisa y ha elegido el diseño y la moda como identidad. Tiene también un Duomo gótico que tardaron casi seiscientos años en terminar y, en el muro de un refectorio, una pintura que se reserva con meses de antelación para verla quince minutos.",
    percheAndarci:
      "Es la puerta de entrada natural del norte de Italia, y en un radio de una hora tiene los lagos prealpinos (Como, Mayor, Garda), desde hace dos siglos entre los paisajes más celebrados de Europa.",
    cosaVedere: [
      "El Duomo y sobre todo las **terrazas**, que se recorren entre los pináculos y son la mejor parte",
      "La Última Cena de Leonardo en Santa Maria delle Grazie: **reserva obligatoria, aperturas con cadencia trimestral, quince minutos de visita**",
      "La Pinacoteca de Brera y el barrio homónimo",
      "El Castello Sforzesco, con la última Piedad de Miguel Ángel, dejada inacabada",
      "La Galleria Vittorio Emanuele II y el Teatro alla Scala con su museo",
      "Los Navigli y la zona de Porta Venezia, para la noche",
      "El Lago de Como con Bellagio y Varenna, el Lago Mayor con las Islas Borromeas, el Garda con Sirmione",
    ],
    cosaFare: [
      "Subir a las terrazas del Duomo, mejor a pie que en ascensor",
      "Reservar la Última Cena con meses de antelación: es la única forma, y las reservas se abren de forma escalonada cada trimestre",
      "El aperitivo, que en Milán es una institución con sus reglas",
      "Una jornada en el Lago de Como en barco, la forma correcta de verlo: la carretera costera es estrecha y con mucho tráfico",
    ],
    doveDormire:
      "Brera y el centro por la comodidad, Navigli y Porta Venezia para la noche, la zona de la Estación Central por los precios. Milán está bien servida por el metro: la ubicación cuenta menos que en otras ciudades italianas.",
    doveMangiare:
      "La cocina milanesa es rica e invernal: risotto al azafrán, cotoletta (gruesa, con el hueso, no fina), ossobuco, cassoeula. El resto es una escena internacional entre las más desarrolladas de Italia. El aperitivo es un formato: se paga la bebida y el bufé está incluido, con una calidad muy variable. Los mercados cubiertos y la zona de Porta Romana tienen la mejor relación calidad-precio.",
    comeArrivare:
      "Tres aeropuertos (Malpensa, Linate, Bérgamo) y el nudo ferroviario más importante de Italia: desde Milano Centrale se llega a Roma en tres horas, a Florencia en una hora y cuarenta, a Venecia en dos y media.",
    comeSpostarsi:
      "Metro con cuatro líneas, tranvías históricos, bicicletas y patinetes compartidos en todas partes. **Área B y Área C limitan el acceso de los coches al centro**, con cámaras: quien entra en coche sin saberlo paga.",
    periodoMigliore:
      "abril-junio y septiembre-octubre. El invierno es frío y neblinoso pero la ciudad funciona; el verano es bochornoso y en agosto Milán se vacía, con muchos locales cerrados. Durante el Salone del Mobile (abril) y las semanas de la moda los precios de los alojamientos se triplican y encontrar sitio es difícil.",
    costi:
      "En alojamientos es la ciudad más cara de Italia. Duomo y terrazas tienen una entrada combinada; la Última Cena cuesta poco, el problema es encontrar plaza.",
    erroriDaEvitare: [
      "Intentar ver la Última Cena sin reserva: **no se entra**, las aperturas de reservas son trimestrales y se agotan en poco tiempo. Es el error más común de los visitantes en Milán",
      "Entrar en el centro en coche sin conocer Área B y Área C",
      "Reservar durante el Salone del Mobile sin saberlo: los precios de los hoteles llegan a multiplicarse",
      "Hacer el Lago de Como en coche un fin de semana de verano: la carretera es estrecha, los aparcamientos no existen y el barco lo hace todo mejor",
      "Juzgar Milán por el centro: la ciudad interesante está en los barrios, y el centro es la parte que menos la representa",
    ],
    miaEsperienza:
      "Milán tiene fama de ser la ciudad italiana que no merece un viaje, y para el turismo clásico es casi verdad: el centro se ve en un día y no tiene el encanto estratificado de Roma o de Florencia. Pero luego se sube a las terrazas del Duomo, que casi todos se saltan para ver solo el interior, y la perspectiva cambia: se camina por el tejado de una catedral gótica en medio de ciento treinta y cinco agujas y tres mil estatuas, con la ciudad debajo y, en los días claros, los Alpes en el horizonte. Es una de las cosas más bonitas de Italia y cuesta lo que un museo. Sobre la Última Cena hay que decir lo incómodo: no se «intenta ver». Es una pintura sobre un muro, en un ambiente de humedad controlada donde entran pequeños grupos durante quince minutos; se reserva con meses de antelación con aperturas trimestrales, y quien llega a Milán esperando encontrar una a última hora no entra. Quien lo consigue, sin embargo, está delante de un fresco que desaparece desde hace quinientos años (Leonardo lo pintó con una técnica experimental que empezó a degradarse cuando él aún vivía), y esos quince minutos valen el trámite.",
    esperienzeSlugs: [],
    tripSlugs: ['milano-e-i-laghi', 'grandi-citta-italia'],
    imageAlt: "La fachada del Duomo de Milán vista desde el fondo de la Piazza del Duomo, con la gente y las palomas sobre el adoquinado",
    immagine: '/images/italia/milano-nord.jpg',
  },
  {
    slug: 'sicilia',
    paeseSlug: 'italia',
    ordine: 8,
    nome: "Sicilia",
    tipologia: ['isole', 'archeologia', 'gastronomia'],
    giorniConsigliati: "10-12 días, 7 para una sola mitad",
    visitataPersonalmente: true,
    introduzione:
      "Es una isla grande como una nación, que en tres mil años ha sido griega, romana, bizantina, árabe, normanda, sueva, española y borbónica: cada dominación ha dejado arquitectura, palabras y recetas que todavía conviven. Tiene también el volcán activo más alto de Europa, que entra en erupción con regularidad.",
    percheAndarci:
      "Ninguna otra región italiana tiene tantos estratos: se puede ver un templo griego mejor conservado que los de Grecia, una catedral normanda con mosaicos bizantinos e inscripciones en árabe, y un palacio barroco, el mismo día. Y se come de una manera que no se parece al resto de Italia.",
    cosaVedere: [
      "El Valle de los Templos en Agrigento, con el Templo de la Concordia, entre los templos dóricos mejor conservados del mundo",
      "Palermo, con la Capilla Palatina y la Catedral de Monreale: arte bizantino, maestros árabes y estructura normanda en el mismo edificio",
      "El Etna, con los cráteres de la cumbre y las coladas recientes",
      "Siracusa y Ortigia, con el teatro griego y la catedral construida dentro de un templo dórico todavía visible en las columnas",
      "El barroco del Val di Noto (Noto, Módica, Ragusa Ibla, Scicli), reconstruido tras el terremoto de 1693",
      "Taormina con el teatro greco-romano asomado al Etna y al mar",
      "Segesta y Selinunte, los dos yacimientos griegos del oeste, mucho menos concurridos que Agrigento",
      "Las reservas de Vendicari y del Zingaro, y la Scala dei Turchi",
    ],
    cosaFare: [
      "Subir al Etna hasta la zona de la cumbre, con guía obligatoria por encima de cierta cota (consulta la ficha de experiencia dedicada)",
      "El mercado de Ballarò o de la Vucciria en Palermo por la mañana, street food y teatro a la vez",
      "El Valle de los Templos al atardecer o de noche, cuando los templos están iluminados y la temperatura es llevadera",
      "Una vuelta por el barroco del Val di Noto en coche, la forma correcta de hacerlo",
    ],
    doveDormire:
      "En Sicilia la cuestión central es la base, y ese es el sentido de la comparación de más abajo: la isla es demasiado grande para una sola base. En general Palermo para el oeste, Siracusa o Catania para el este, con una o dos bases intermedias.",
    doveMangiare:
      "Sicilia tiene dos cocinas distintas, una por vertiente. En Palermo domina el street food árabe-normando: arancine (en femenino, en Palermo), panelle, sfincione, pan con bazo para los valientes. En el este prevalecen el pescado y la pasta: pasta alla Norma en Catania, pasta con sardinas, erizos en Siracusa. Luego los dulces, un capítulo aparte: cannoli rellenados en el momento y nunca antes, cassata, granita con brioche en el desayuno, que en verano es la forma correcta de empezar el día. El vino: Etna Rosso del Nerello Mascalese, Nero d'Avola, Grillo y Carricante.",
    comeArrivare:
      "Vuelos a Palermo y Catania, los dos aeropuertos principales, más Trapani y Comiso. En tren y en coche se llega con el ferry desde Villa San Giovanni: los trenes todavía se embarcan en el barco, cosa que ya casi no se hace en ningún sitio. Desde el norte de Italia, los ferries nocturnos desde Génova, Livorno y Nápoles llevan también el coche.",
    comeSpostarsi:
      "**El coche es indispensable.** La red ferroviaria es lenta y cubre poco; para quien no conduce, la alternativa son los autobuses, que sin embargo condicionan bastante. Las autopistas unen Palermo, Catania y Mesina; el resto es carretera estatal, con tiempos más largos de lo que sugiere Google.",
    periodoMigliore:
      "**mayo-junio y septiembre-octubre**, sin duda. Julio y agosto son tórridos (en el interior se superan a menudo los 40 grados), concurridos y caros. El invierno es suave y excelente para las ciudades de arte y los yacimientos arqueológicos, con el mar fuera de juego y muchos alojamientos costeros cerrados. Abril y noviembre son excelentes y poco transitados.",
    costi:
      "Más económica que el centro-norte en alojamientos y restauración, con la excepción de Taormina y las localidades de playa en agosto. Las entradas a los yacimientos arqueológicos son contenidas; la entrada combinada para varios yacimientos casi siempre conviene.",
    erroriDaEvitare: [
      "Intentar hacer toda Sicilia en una semana: es grande como una región y media, las carreteras interiores son lentas, y el resultado es pasar las vacaciones en el coche",
      "Hacer Agrigento a mediodía en verano: el Valle de los Templos no tiene sombra y se superan los 40 grados",
      "Ir en agosto sin saber que es el peor mes en todos los aspectos",
      "Saltarse el interior (Enna, Piazza Armerina, las Madonie) para quedarse solo en la costa: es donde Sicilia es más ella misma y menos turística",
      "Tomar la granita con nata montada pensando que es la versión auténtica: la granita siciliana se hace con agua, azúcar y la fruta, y se acompaña con la brioche col tuppo",
      "Fiarse de los tiempos de recorrido estimados: en las estatales interiores hay que aumentarlos un tercio",
    ],
    confronti: [
      {
        titolo: "Sicilia oriental u occidental: qué mitad elegir",
        introduzione:
          "Sicilia es demasiado grande para hacerla bien en una semana, y la mejor manera de afrontarla es elegir una mitad en lugar de atravesarla a toda prisa. Las dos partes tienen historia, arquitectura, cocina y ritmo distintos.",
        opzioni: [
          {
            nome: "Sicilia oriental (Catania, Siracusa, Val di Noto, Etna, Taormina)",
            sintesi: "La vertiente griega y barroca, dominada por el Etna: teatros griegos, ciudades reconstruidas en barroco tras el terremoto de 1693, y el volcán que se ve desde todas partes.",
            costo: "medio, con Taormina fuera de escala respecto al resto",
            durata: "7-8 días",
            pro: [
              "El Etna, que además del panorama es una experiencia en sí misma",
              "Siracusa y Ortigia, donde la catedral está construida dentro de un templo griego, con las columnas dóricas integradas en los muros",
              "El barroco del Val di Noto, Patrimonio de la UNESCO, concentrado en pocos kilómetros",
              "Distancias más cortas: se recorre con una o dos bases",
              "Las playas y las reservas del sureste (Vendicari, Marzamemi) están entre las mejores de la isla",
            ],
            contro: [
              "Taormina en temporada alta está saturada y tiene precios de otra región",
              "Catania como ciudad divide mucho: viva y caótica, menos bella que Palermo",
              "Más transitada por el turismo internacional",
            ],
            perChi: "Quien va por primera vez, quien tiene una sola semana, quien quiere unir arqueología, barroco y mar sin desplazamientos largos.",
          },
          {
            nome: "Sicilia occidental (Palermo, Monreale, Segesta, Trapani, Agrigento)",
            sintesi: "La vertiente árabe-normanda y fenicio-púnica: Palermo con la Capilla Palatina, Monreale, los templos de Segesta y Selinunte, las salinas, las Egadas.",
            costo: "más bajo que el este a igual calidad",
            durata: "7-8 días",
            pro: [
              "Palermo es la ciudad más estratificada y más interesante de la isla, y la catedral de Monreale es una de las obras maestras de la Edad Media europea",
              "Segesta y Selinunte tienen templos casi como Agrigento con una décima parte de la gente",
              "El street food palermitano no tiene equivalentes en Italia",
              "Las salinas de Trapani y Marsala, las islas Egadas, San Vito Lo Capo y la reserva del Zingaro",
              "Menos turismo internacional y precios más bajos",
            ],
            contro: [
              "Palermo exige adaptarse: tráfico, desorden y degradación en ciertas zonas",
              "Mayores distancias entre los puntos de interés",
              "El Valle de los Templos en Agrigento sigue siendo el yacimiento más concurrido de la isla",
              "Transporte público peor que en el este",
            ],
            perChi: "Quien vuelve por segunda vez, quien pone la historia y la comida por delante del mar, quien quiere gastar menos.",
          },
          {
            nome: "La vuelta completa",
            sintesi: "Toda la isla en un solo viaje, con base móvil.",
            costo: "alto en carburante y tiempo",
            durata: "mínimo 12-14 días para que tenga sentido",
            pro: ["Se ve todo lo que se había puesto en la lista", "Con dos semanas de verdad se hace bien", "El paso por el interior muestra la Sicilia menos turística"],
            contro: [
              "Por debajo de los doce días se convierte en un tour de traslados: se duerme en un sitio distinto cada noche y se pasan las vacaciones en el coche",
              "Los tiempos en las estatales interiores son más largos de lo que estiman los mapas",
              "Se acaba viendo todo deprisa y nada con calma",
            ],
            perChi: "Quien tiene al menos dos semanas completas y acepta estar bastante en el coche.",
          },
        ],
        raccomandazione:
          "Con una semana o diez días, **se elige una mitad**: el este la primera vez, por el Etna, Siracusa y el barroco; el oeste la segunda, por Palermo, Monreale y los templos sin cola. La vuelta completa tiene sentido solo a partir de doce días. Y sea cual sea la elección, un par de días en el interior (Enna, Piazza Armerina, las Madonie) cambian la percepción de la isla más que cualquier parada costera.",
      },
    ],
    miaEsperienza:
      "Cuando se organiza el viaje, Sicilia es la región italiana que más se subestima: en el mapa parece una isla, en realidad es una nación, y el clásico «vuelta a Sicilia en una semana» se convierte en seis días de estatales. Más que cualquier monumento me impresionó un edificio que los contiene todos: la Catedral de Monreale, construida por reyes normandos con maestros árabes y mosaiquistas bizantinos, con seis mil metros cuadrados de mosaicos de oro y un claustro donde cada capitel es distinto. Allí dentro se entiende que Sicilia ha mantenido unidas todas las culturas que la conquistaron. La segunda cosa es el Etna, que hay que subir sabiendo que es un volcán en actividad: se sube por un terreno negro de lapilli que cruje bajo los pies, con las fumarolas saliendo de las grietas y el suelo caliente si se apoya la mano. Por último, un consejo poco romántico pero útil: el Valle de los Templos se hace de noche. De día, en verano, se camina en un horno sin un árbol.",
    esperienzeSlugs: ['etna'],
    tripSlugs: ['sicilia-itinerario', 'sicilia-completa'],
    imageAlt: "Taormina vista desde lo alto con las casas en la colina y el mar Jónico al fondo, Sicilia",
    immagine: '/images/italia/sicilia.jpg',
  },
  {
    slug: 'sardegna',
    paeseSlug: 'italia',
    ordine: 9,
    nome: "Cerdeña",
    tipologia: ['isole', 'mare', 'trekking'],
    giorniConsigliati: "8-10 días",
    visitataPersonalmente: true,
    introduzione:
      "Es una isla con lengua propia, una civilización prehistórica que dejó siete mil torres de piedra y ninguna otra explicación de sí misma, y un mar que aguanta la comparación con el Caribe. Y es también, para sorpresa de muchos, uno de los destinos de trekking más duros de Italia.",
    percheAndarci:
      "Por el mar (Cala Goloritzé, Cala Mariolu, La Pelosa, el archipiélago de La Maddalena), y sobre todo porque el interior es una isla completamente distinta: el Supramonte, la garganta de Gorropu, los nuraghi, los pueblos de la Barbagia donde se habla sardo y adonde el turismo nunca ha llegado.",
    cosaVedere: [
      "El Golfo de Orosei, con Cala Goloritzé, Cala Mariolu y Cala Luna, accesibles casi solo por mar o a pie",
      "El archipiélago de La Maddalena y Budelli con la playa rosa, hoy protegida e inaccesible",
      "Su Nuraxi de Barumini, Patrimonio de la UNESCO, el complejo nurágico mejor conservado",
      "La garganta de Gorropu, entre las más profundas de Europa, con paredes de hasta quinientos metros",
      "La Barbagia y los pueblos del Supramonte: Orgosolo con los murales, Oliena, Urzulei",
      "Alghero, con la huella catalana todavía en la lengua, y la Gruta de Neptuno",
      "Las minas abandonadas del Sulcis-Iglesiente, patrimonio geominero, con Porto Flavia excavada dentro del acantilado",
      "Las dunas de Piscinas en la Costa Verde, entre las más altas de Europa, y Carloforte donde se habla ligur",
    ],
    cosaFare: [
      "Trekking en la garganta de Gorropu, lo más impresionante del interior (consulta la ficha de experiencia dedicada)",
      "Bajar a Cala Goloritzé a pie (la única forma por tierra; consulta la ficha de experiencia dedicada)",
      "Vuelta en neumática por el Golfo de Orosei, para ver las calas que desde tierra no se alcanzan",
      "Un día en la Barbagia, entre Orgosolo y Oliena, para ver la isla lejos del mar",
    ],
    doveDormire:
      "Cerdeña se hace con dos o tres bases: el noreste para La Maddalena y la Costa Esmeralda, el centro-este para el Golfo de Orosei y el Supramonte, el suroeste para el Sulcis y las playas menos transitadas. Los agriturismos del interior tienen una relación calidad-precio que la costa ni sueña.",
    doveMangiare:
      "Aunque sorprenda, la cocina sarda es de pastores más que de mar. Porceddu al espetón, pane carasau, culurgiones (los raviolis con patata, menta y pecorino, cerrados en espiga), malloreddus, pecorino sardo en todas las curaciones, y el fiore sardo ahumado. El mirto como digestivo. El Cannonau es el vino símbolo, el Vermentino di Gallura la única DOCG de la isla. **En la costa se come pescado a precios turísticos; a veinte kilómetros en el interior se come mejor y se gasta la mitad.**",
    comeArrivare:
      "Vuelos a Cagliari, Olbia y Alghero, con tarifas que se disparan en julio y agosto. **Los ferries con coche desde Génova, Livorno, Civitavecchia y Nápoles hay que reservarlos con meses de antelación para el verano**, y son la opción más sensata para quien se queda más de una semana.",
    comeSpostarsi:
      "**Coche obligatorio.** La red ferroviaria es mínima y lenta, los autobuses conectan los centros principales pero no las playas. Las carreteras interiores del Supramonte son estrechas y tortuosas; muchas calas se alcanzan solo por pistas de tierra o a pie.",
    periodoMigliore:
      "**mayo-junio y septiembre**, la respuesta correcta casi siempre: mar ya cálido, precios normales, playas llevaderas. Julio y agosto están abarrotadísimos y carísimos, con los ferries agotados y las calas con aforo limitado. Octubre y abril son excelentes para el interior y el trekking, con el mar fuera de juego.",
    costi:
      "En temporada alta la costa tiene precios entre los más altos de Italia, con la Costa Esmeralda fuera de escala. **Varias playas tienen accesos limitados con reserva de pago** (La Pelosa, Cala Goloritzé, algunas calas del Golfo de Orosei), introducidos para protegerlas: hay que comprobarlos y reservarlos antes de partir, porque sin ello no se entra.",
    erroriDaEvitare: [
      "No reservar el ferry con coche para julio y agosto: se agota con meses de antelación y los precios suben de forma drástica",
      "Presentarse en una playa con aforo limitado sin reserva: varias calas tienen cupos cerrados y accesos de pago, y sin ellos se da media vuelta",
      "Hacer solo la costa: el interior (Supramonte, Barbagia, Gorropu) es la parte que nadie espera y la más sorprendente",
      "Subestimar los senderos: los del Supramonte son duros, poco señalizados y sin agua, y cada año hay intervenciones de rescate",
      "Ir en agosto",
      "Esperar comer pescado como plato tradicional: la cocina sarda es pastoril, y lo mejor está en el interior",
    ],
    confronti: [
      {
        titolo: "Cerdeña chic o Cerdeña inexplorada",
        introduzione:
          "Cerdeña vive desde hace sesenta años una doble identidad: por un lado la costa diseñada en los años sesenta por el consorcio del Aga Khan, con precios de capital del lujo; por otro un interior de pastores, nuraghi y montañas adonde el turismo nunca ha llegado. Son dos islas distintas: se puede elegir, o mezclarlas, que es lo más interesante.",
        opzioni: [
          {
            nome: "Costa Esmeralda y noreste",
            sintesi: "Porto Cervo, Porto Rotondo, Baja Sardinia y el archipiélago de La Maddalena: el tramo de costa proyectado por el consorcio en los años sesenta, con una arquitectura estudiada sobre plano y los precios más altos del Mediterráneo.",
            costo: "altísimo en temporada alta, entre los más caros de Europa",
            durata: "4-5 días",
            pro: [
              "El mar es excepcional, y las playas del noreste están entre las más bellas de la isla",
              "El archipiélago de **La Maddalena** es parque nacional y se recorre en barca: Budelli, Spargi, Caprera",
              "Servicios de nivel internacional y conexiones cómodas desde Olbia",
              "La arquitectura del consorcio, por artificial que sea, está estudiada y en ciertos tramos es lograda",
            ],
            contro: [
              "Precios fuera de escala en julio y agosto, con restaurantes y alojamientos de capital del lujo",
              "Mucha gente y tráfico en las carreteras costeras",
              "Es un paisaje construido para el turismo: de sardo, allí, hay poco",
              "Los ferries y los vuelos al noreste en temporada alta cuestan el doble",
            ],
            perChi: "Quien viene por el mar y por los servicios y acepta el precio, y quien quiere recorrer La Maddalena en barca.",
          },
          {
            nome: "Interior: Barbagia, Supramonte y Ogliastra",
            sintesi: "La otra Cerdeña: los pueblos del Supramonte, los nuraghi, la garganta de Gorropu, los murales de Orgosolo, los apriscos de los pastores y una lengua que es una lengua de verdad, no un dialecto.",
            costo: "bajísimo, con agriturismos a precios que en la costa ya no existen",
            durata: "4-6 días",
            pro: [
              "La **garganta de Gorropu**, entre las más profundas de Europa, con paredes de hasta quinientos metros",
              "Los **nuraghi**: siete mil torres de piedra seca construidas entre 1800 y 1100 a. C. por una civilización sin escritura, de la que ni siquiera se sabe con certeza para qué servían. Su Nuraxi de Barumini es Patrimonio de la UNESCO",
              "La cocina es pastoril más que marinera (porceddu, pane carasau, culurgiones, pecorinos), y se come mejor y a mitad de precio que en la costa",
              "Se camina media jornada sin encontrar a nadie",
              "Tiscali, el poblado nurágico escondido dentro de una dolina",
            ],
            contro: [
              "Servicios turísticos mínimos y ninguna infraestructura de acogida",
              "Carreteras estrechas y lentas, con tiempos mucho más largos que las estimaciones",
              "Senderos del Supramonte duros, poco señalizados y sin agua: cada año hay intervenciones de rescate",
              "Nada de mar a mano",
            ],
            perChi: "Quien ya ha hecho la costa, quien camina, quien quiere entender qué es Cerdeña más allá de las playas.",
          },
          {
            nome: "Suroeste: Sulcis, Iglesiente y Costa Verde",
            sintesi: "La parte que casi nadie hace: las minas abandonadas patrimonio geominero, Porto Flavia excavada en el acantilado, las dunas de Piscinas y las playas sin nadie.",
            costo: "bajo",
            durata: "4-5 días",
            pro: [
              "Playas de nivel noreste con una fracción de la gente y de los precios",
              "La arqueología industrial minera: **Porto Flavia**, un puerto excavado dentro de un acantilado a pico sobre el mar, es una de las cosas más impresionantes de la isla",
              "Las dunas de **Piscinas**, entre las más altas de Europa, con el desierto que llega al mar",
              "Sant'Antioco y San Pietro, con Carloforte donde todavía se habla un dialecto ligur",
            ],
            contro: [
              "Menos servicios y menos conexiones: se llega desde Cagliari y hace falta coche",
              "Algunas playas son accesibles solo por pistas de tierra",
              "Menos «famoso»: para algunos es un defecto, para otros el motivo para ir",
            ],
            perChi: "Quien quiere playas de primer nivel sin los precios del noreste, y quien se interesa por la arqueología industrial.",
          },
        ],
        raccomandazione:
          "La fórmula que más rinde es **mezclarlas**: cuatro días de costa y tres en el interior, que están a una hora de carretera el uno del otro y parecen dos países. Quien ya haya visto el noreste que vaya al **suroeste**, que tiene playas del mismo nivel, Porto Flavia y las dunas de Piscinas, a una fracción del precio. Y quien quiera entender esta isla que dedique al menos dos días al **Supramonte**: los nuraghi y Gorropu explican Cerdeña mucho más que cualquier tramo de costa.",
      },
    ],
    miaEsperienza:
      "Cerdeña tiene un problema de percepción: se asocia al mar, y el mar es de los más bellos del Mediterráneo (Cala Goloritzé, con ese pináculo de caliza y el agua transparente, aguanta cualquier comparación). Pero la sorpresa está a veinte kilómetros de la costa, en el interior, adonde llega una fracción de la gente. La garganta de Gorropu es una hendidura entre paredes que llegan a quinientos metros, donde se camina sobre bloques grandes como automóviles con una franja de cielo encima: parece un cañón americano y está en la Barbagia. Y los nuraghi son lo más extraño de Italia: siete mil torres de piedra seca construidas entre 1800 y 1100 antes de Cristo por una civilización de la que no sabemos casi nada, sin escritura, y de la que ni siquiera se entiende con certeza para qué servían esas torres. En Barumini se entra dentro y se sube por escaleras interiores en el grosor del muro. Luego hay una cosa práctica que saber: las calas más bellas han sido limitadas precisamente porque las estaban destruyendo, y hoy sin reserva no se entra.",
    esperienzeSlugs: ['gorropu', 'cala-goloritze'],
    tripSlugs: ['sardegna-due-anime'],
    imageAlt: "La Costa Esmeralda vista desde lo alto con el monte bajo mediterráneo, las ensenadas y las islas al fondo, Cerdeña",
    immagine: '/images/italia/sardegna.jpg',
  },
  {
    slug: 'isole-minori',
    paeseSlug: 'italia',
    ordine: 10,
    nome: "Las islas menores",
    tipologia: ['isole', 'mare', 'natura'],
    giorniConsigliati: "4-7 días por archipiélago",
    visitataPersonalmente: true,
    introduzione:
      "Además de las dos grandes, Italia tiene unas sesenta islas habitadas repartidas en ocho archipiélagos, y cada una es un mundo aparte: volcanes activos en las Eolias, rocas negras y viñas en bajo en Pantelaria, la toba y las grutas en las Pontinas, los fondos de las Tremiti en el único parque marino del Adriático.",
    percheAndarci:
      "Han conservado una medida que la costa continental ha perdido: se recorren a pie o en barca, en temporada baja vive poca gente y varias siguen sin coches. Cada una tiene un carácter propio, y elegirlas al azar es la mejor manera de acabar en el sitio equivocado.",
    cosaVedere: [
      "Stromboli, con la erupción visible desde el mar o desde el mirador, y la Sciara del Fuoco",
      "Salina, Filicudi y Alicudi, las Eolias que no son Lipari y Panarea",
      "Pantelaria, con los dammusi, los jardines panteschi y el Lago Specchio di Venere",
      "Capri con los Faraglioni y la Gruta Azul, Ischia con las termas naturales, Procida con Marina Corricella",
      "Ponza y Palmarola, con la toba de colores y las grutas marinas",
      "Las Tremiti, único archipiélago del Adriático, con los fondos del área marina protegida",
      "La isla de Elba y el Archipiélago Toscano, el parque marino más grande de Europa",
      "Lampedusa con la Spiaggia dei Conigli, y Favignana con las canteras de toba y la almadraba",
    ],
    cosaFare: [
      "Subir a ver la actividad del Stromboli, con guía obligatoria por encima de cierta cota",
      "Buceo o snorkel en las Tremiti y en Ustica, la primera área marina protegida creada en Italia",
      "Baño nocturno en el Lago Specchio di Venere en Pantelaria, con el barro termal",
      "La vuelta a una isla en barca, que en las islas menores es casi siempre la mejor manera de verla",
    ],
    doveDormire:
      "En las islas menores la oferta es por fuerza limitada y en temporada alta se agota: se reserva con meses de antelación para julio y agosto. Los dammusi en Pantelaria, las casas eolias en Salina y los albergues difusos son las fórmulas más coherentes con los lugares.",
    doveMangiare:
      "Cada archipiélago tiene su identidad: alcaparras, malvasía y pescado azul en las Eolias; alcaparras, passito y el pesto pantesco en Pantelaria; conejo a la ischitana en Ischia, un plato de tierra en una isla; el pescado y el atún en todas sus conservas en Favignana. La regla general es que en las islas menores **el pescado cuesta caro y la cocina de tierra cuesta poco y a menudo es mejor**.",
    comeArrivare:
      "Ferries y aliscafi desde los puertos continentales, con **frecuencias que se desploman en temporada baja** y trayectos que se cancelan con el mar movido: es la variable que lo condiciona todo. Pantelaria y Lampedusa tienen aeropuertos; Elba también, pero con pocas conexiones.",
    comeSpostarsi:
      "A pie, en scooter, en barca. **Varias islas limitan o prohíben el desembarco de coches en verano** y en algunas (Panarea, Alicudi, Filicudi) casi no hay coches. Llevarse el vehículo es casi siempre inútil y a menudo imposible.",
    periodoMigliore:
      "junio y septiembre son la ventana ideal: mar cálido, conexiones completas, precios todavía no fuera de escala. **Julio y agosto hay que evitarlos** en cualquier isla menor: la oferta está saturada, los precios se multiplican y sitios ya pequeños se llenan. De noviembre a marzo muchas islas cierran casi del todo, con ferries reducidos y locales cerrados.",
    costi:
      "Los ferries pesan más de lo que se piensa, y con el coche detrás se duplican. En temporada alta los alojamientos en las islas más conocidas (Capri, Panarea, Ponza) alcanzan cifras de capital europea.",
    erroriDaEvitare: [
      "Programar conexiones ajustadas con los ferries: **con el mar movido los trayectos se cancelan**, y quedarse bloqueado un día más es la norma",
      "Elegir la isla por fama en lugar de por carácter: Capri y Panarea en agosto son mundanas y abarrotadísimas, y quien buscaba paz se ha equivocado de dirección",
      "Llevar el coche: casi siempre inútil, a menudo prohibido, siempre caro",
      "Ir en temporada baja sin comprobar qué está abierto: de noviembre a marzo varias islas tienen dos restaurantes y un ferry de vez en cuando",
      "Subestimar el agua: muchas islas menores tienen problemas hídricos y el agua llega con buques cisterna, así que hay que usarla sin derroche",
    ],
    confronti: [
      {
        titolo: "Qué archipiélago italiano elegir",
        introduzione:
          "Las islas menores italianas se tratan a menudo como un bloque único, cuando por geología, carácter, precios y afluencia son mundos separados. Así se dividen.",
        opzioni: [
          {
            nome: "Eolias (Sicilia)",
            sintesi: "Siete islas volcánicas al norte de Sicilia, Patrimonio de la UNESCO, con dos volcanes activos: Stromboli, que entra en erupción continuamente, y Vulcano.",
            costo: "medio-alto, con Panarea fuera de escala y Alicudi y Filicudi muy económicas",
            durata: "5-7 días para hacer al menos tres",
            pro: [
              "Dos volcanes activos: Stromboli es uno de los pocos del mundo en erupción permanente y se ve desde el mar de noche",
              "Las siete islas son muy distintas entre sí: se puede pasar de la mundana Panarea a Alicudi, donde no hay carreteras y uno se mueve a pie o con mulas",
              "Conexiones internas frecuentes en temporada alta",
              "Alcaparras, malvasía y una cocina isleña fuerte",
            ],
            contro: [
              "Abarrotadísimas en julio y agosto, con Panarea y Lipari saturadas",
              "Las conexiones dependen del mar: con libeccio uno se queda parado",
              "En invierno la vida se reduce al mínimo",
            ],
            perChi: "Quien quiere volcanes y variedad, y quien está dispuesto a moverse entre varias islas en un viaje.",
          },
          {
            nome: "Pantelaria",
            sintesi: "Una isla volcánica más cercana a África que a Sicilia, sin playas de arena, con los dammusi de piedra lávica y la vid en bajo reconocida como patrimonio inmaterial de la UNESCO.",
            costo: "medio-alto, pero sin el turismo de masas",
            durata: "5-7 días",
            pro: [
              "No se parece a ninguna otra isla italiana: roca negra, viento constante, bancales y jardines panteschi (los muros circulares que protegen un solo árbol)",
              "El Lago Specchio di Venere, con el barro termal, y las grutas de vapor naturales",
              "Passito y alcaparras de altísimo nivel",
              "Turismo menos masivo, con una clientela que vuelve",
            ],
            contro: [
              "Ninguna playa de arena: se entra en el agua desde las rocas, y no es para todos",
              "El viento es una constante y puede ser fuerte",
              "Hace falta coche, y las conexiones con el continente son menos frecuentes",
            ],
            perChi: "Quien busca una isla de carácter en lugar de playas, y quien ama el vino.",
          },
          {
            nome: "Golfo de Nápoles: Capri, Ischia, Procida",
            sintesi: "Tres islas muy cercanas entre sí y completamente distintas: Capri vertical y mundana, Ischia termal y grande, Procida pequeña y colorida.",
            costo: "de altísimo (Capri) a contenido (Procida)",
            durata: "3-5 días",
            pro: [
              "Accesibilidad: se llega en menos de una hora desde Nápoles, incluso en el día",
              "Ischia tiene termas naturales, con manantiales ya aprovechados por los griegos",
              "Procida ha seguido siendo un pueblo de pescadores y es la más auténtica de las tres",
              "Capri fuera de temporada, sin los visitantes de un día, es otra isla",
            ],
            contro: [
              "Capri en temporada alta es invivible y carísima: llegan decenas de miles de visitantes en el día",
              "Ischia es grande y está en parte edificada de forma pesada",
              "Poca sensación de isla remota: están a la vista desde tierra firme",
            ],
            perChi: "Quien ya está en Nápoles, quien tiene pocos días, quien busca las termas (Ischia).",
          },
          {
            nome: "Pontinas: Ponza y Palmarola",
            sintesi: "Islas de toba de colores a medio camino entre Roma y Nápoles, con acantilados, grutas marinas y un mar que compite con los mejores del Tirreno.",
            costo: "alto en temporada alta, sobre todo por la cuenca romana que las llena",
            durata: "4-5 días",
            pro: [
              "La toba amarilla y roja crea una costa única, con grutas y arcos naturales",
              "Palmarola, deshabitada, es considerada por muchos la isla más bella del Tirreno",
              "Muy cercanas a Roma: se llega en el día",
            ],
            contro: [
              "En agosto son el mar de Roma, y se nota: abarrotadísimas y caras",
              "Servicios limitados y pocos alojamientos",
              "Las conexiones fuera de temporada se reducen mucho",
            ],
            perChi: "Quien viene del centro de Italia y quiere un mar excepcional sin ir a Sicilia.",
          },
          {
            nome: "Tremiti y Archipiélago Toscano",
            sintesi: "Las Tremiti, único archipiélago del Adriático y área marina protegida; el Archipiélago Toscano con Elba, el parque marino más grande de Europa.",
            costo: "medio, bastante más bajo que el Tirreno meridional",
            durata: "3-5 días",
            pro: [
              "Las Tremiti tienen los mejores fondos del Adriático y son diminutas: se recorren a pie",
              "Elba une mar, montaña (el Monte Capanne), historia napoleónica y minas",
              "Precios más contenidos y turismo sobre todo italiano",
              "Excelentes para buceo y snorkel",
            ],
            contro: [
              "Mar menos espectacular que en el Tirreno meridional",
              "Las Tremiti en agosto son diminutas y están abarrotadas",
              "Elba es grande y en parte muy construida",
            ],
            perChi: "Quien viene del centro-norte, buceadores, familias, quien quiere gastar menos.",
          },
        ],
        raccomandazione:
          "Por variedad y carácter, **las Eolias** siguen siendo la elección más fuerte, siempre que se vaya en junio o en septiembre y se incluya al menos una isla menor como Salina o Filicudi. **Pantelaria** si se busca una isla que no se parezca a nada y no se necesita arena. **Procida** si se está en Nápoles y se tiene poco tiempo. Y una regla vale para todas: en agosto, en las islas menores italianas, se paga el triple por estar en medio del triple de gente.",
      },
    ],
    miaEsperienza:
      "En las islas menores ir en junio o en agosto significa encontrar dos lugares distintos: son pequeñas, con un número finito de camas, restaurantes y barcas, y cuando llega la carga de agosto dejan de funcionar como el resto del año. De todas, el recuerdo más fuerte es Stromboli visto desde el mar de noche: se está en una barca a motor apagado delante de la Sciara del Fuoco, a oscuras, y cada pocos minutos el cráter escupe material incandescente que rueda por la ladera hasta el agua. Ningún efecto especial: es un volcán que hace lo que hace desde hace milenios, con un pueblo habitado debajo. La otra sorpresa es Pantelaria, la anti-isla italiana: nada de arena, viento siempre, roca negra, y una viticultura en la que las vides se cultivan en hoyos excavados en el terreno para protegerlas del viento, técnica declarada patrimonio inmaterial por la UNESCO. Se va para entender qué significa cultivar algo en un lugar hostil.",
    esperienzeSlugs: [],
    tripSlugs: ['eolie-in-vela', 'isole-siciliane', 'costiera-e-isole'],
    imageAlt: "La Isola dei Conigli en Lampedusa rodeada de agua turquesa y transparente",
    immagine: '/images/italia/isole-minori.jpg',
  },
  {
    slug: 'italia-inesplorata',
    paeseSlug: 'italia',
    ordine: 11,
    nome: "La Italia inexplorada",
    tipologia: ['borghi', 'natura', 'cammini'],
    giorniConsigliati: "4-7 días por zona",
    visitataPersonalmente: true,
    introduzione:
      "El país tiene cincuenta y nueve sitios de la UNESCO y millones de visitantes concentrados en una decena de lugares. Mientras tanto hay regiones enteras adonde el turismo nunca ha llegado: el Molise, que se ha convertido en un meme precisamente por eso, el Apenino lucano, las montañas del Friuli, los Sibillini, el interior calabrés. Son las zonas donde Italia todavía cuesta lo que costaba hace veinte años.",
    percheAndarci:
      "Es la única parte del país donde se puede caminar una jornada entera sin encontrar a nadie, comer con veinte euros y hablar con quien vive allí en lugar de con quien trabaja allí. Y muchos de estos lugares se están despoblando: o se ven ahora o ya no se verán.",
    cosaVedere: [
      "El Molise: Campobasso e Isernia, los tratturi de la trashumancia (patrimonio inmaterial de la UNESCO), Pietrabbondante con el teatro samnita, la costa de Termoli",
      "El Apenino lucano y el Pollino, el parque nacional más grande de Italia, con los pinos loricados",
      "Los Montes Sibillini y el interior de las Marcas, con los pueblos reconstruidos tras el seísmo de 2016",
      "La Carnia y los Valles del Natisone en el Friuli, con las casas de piedra y una cultura de frontera eslovena y germánica",
      "El Aspromonte y la Calabria griega, donde todavía se habla el grecanico",
      "La Val Grande en el Piamonte, la mayor área wilderness de Italia: ninguna carretera, ningún pueblo habitado",
      "El Cilento interior, con los pueblos y el Vallo di Diano, y las Murge con las gravine",
      "Los caminos: la Via degli Dei, el Cammino di San Benedetto, la Via Francigena en el sur",
    ],
    cosaFare: [
      "Caminar un tramo de la Via degli Dei o de otro camino, durmiendo en los albergues y en las parroquias (consulta la ficha de experiencia dedicada)",
      "Las fiestas patronales de pueblo, que en la Italia interior siguen siendo el acontecimiento principal del año",
      "Comer en una trattoria de pueblo sin carta, donde se pregunta qué hay",
      "Recorrer un tramo de tratturo, las vías herbosas de cien metros de ancho por las que se desplazaban los rebaños desde hace siglos",
    ],
    doveDormire:
      "Agriturismos, albergues difusos (fórmula nacida precisamente en el Friuli y extendida en los pueblos en despoblación) y B&B familiares. Los precios son los que en el resto de Italia ya no existen: cincuenta-setenta euros para dos personas con desayuno son lo normal.",
    doveMangiare:
      "Es la mejor parte. En la Italia interior la cocina sigue ligada al territorio y a las estaciones, algo que en otros sitios se ha convertido en un eslogan: pasta hecha a mano con nombres distintos cada veinte kilómetros, carnes de cría local, quesos de pequeñas producciones, verduras silvestres. **Una comida completa con vino cuesta entre veinte y treinta euros**, y a menudo no hay carta escrita. La otra cara de la moneda: fuera de horario no se come, y el domingo por la noche y el lunes muchos sitios están cerrados.",
    comeArrivare:
      "**Coche obligatorio, sin excepciones.** Los trenes regionales llegan a las capitales de provincia y ahí se detiene todo; los autobuses interurbanos tienen horarios pensados para los estudiantes, es decir dos por la mañana y dos por la tarde, y nada los fines de semana.",
    comeSpostarsi:
      "Hace falta coche propio. Las carreteras interiores son estrechas, tortuosas y en ciertos tramos están en mal estado: los tiempos hay que aumentarlos un tercio respecto a las estimaciones de los mapas. El carburante en los pueblos pequeños puede no haber: se llena el depósito cuando se puede, no cuando hace falta.",
    periodoMigliore:
      "mayo-junio y septiembre-octubre. El verano en el interior del centro-sur es tórrido; el invierno en los Apeninos trae nieve y carreteras cortadas, con varios pueblos que entran en letargo. Las fiestas patronales se concentran entre junio y septiembre y es cuando los pueblos vuelven a llenarse, porque regresan los emigrados.",
    costi:
      "Es la parte de Italia donde se gasta menos, con diferencia. Entradas casi en todas partes gratuitas o simbólicas, alojamientos y restaurantes a cifras que en la costa o en las ciudades ya no existen.",
    erroriDaEvitare: [
      "Contar con el transporte público: aquí no sirve para nada",
      "Llegar a un pueblo a las tres de la tarde y buscar comida: en la Italia interior se come entre las doce y media y las dos, y luego se cierra",
      "Dar por hecha la conexión: en muchos valles interiores no hay señal, y los mapas sin conexión son una precaución seria",
      "Subestimar las distancias y las carreteras: sesenta kilómetros de estatal interior pueden significar dos horas",
      "Esperar servicios turísticos: aquí no hay oficinas de información, audioguías ni carteles en inglés, y es precisamente eso lo bonito",
      "Ir en agosto pensando encontrarla vacía: en agosto los pueblos se llenan de quien emigró y vuelve, y es el periodo más vivo del año, bonito pero no silencioso",
    ],
    confronti: [
      {
        titolo: "Adonde no va nadie: cinco Italias fuera de ruta",
        introduzione:
          "Las zonas poco transitadas no son todas iguales: algunas son remotas por geografía, otras por la despoblación, otras porque nunca han tenido una imagen que vender. Cambian bastante en accesibilidad, paisaje y lo que se encuentra en ellas.",
        opzioni: [
          {
            nome: "Molise",
            sintesi: "La región más pequeña y menos visitada de Italia, con los tratturi de la trashumancia, los yacimientos samnitas, un trozo de Apenino y sesenta kilómetros de costa.",
            costo: "el más bajo de Italia",
            durata: "4-5 días",
            pro: [
              "Los tratturi, las vías herbosas de hasta cien metros de ancho por las que se desplazaban los rebaños durante siglos: la trashumancia es patrimonio inmaterial de la UNESCO",
              "Pietrabbondante, con un teatro samnita del siglo II a. C. en una posición espectacular y nadie alrededor",
              "Precios y hospitalidad de una Italia que en otros sitios ya no existe",
              "Accesible: está a dos horas de Roma y Nápoles",
            ],
            contro: [
              "No tiene una «pieza fuerte» de postal, y es el motivo por el que nadie va",
              "Servicios turísticos casi inexistentes",
              "Hace falta coche y hace falta aceptar que el programa sea poco denso",
            ],
            perChi: "Quien quiere la Italia sin filtro y no necesita monumentos famosos.",
          },
          {
            nome: "Apenino lucano y Pollino",
            sintesi: "El parque nacional más grande de Italia a caballo entre la Basilicata y Calabria, con los pinos loricados y los pueblos arbëreshë de lengua albanesa.",
            costo: "muy bajo",
            durata: "5-7 días",
            pro: [
              "Montaña seria y poco frecuentada, con cumbres por encima de los dos mil metros",
              "Los pinos loricados, que crecen solo aquí y en los Balcanes, agarrados a las rocas",
              "Los pueblos arbëreshë, fundados por refugiados albaneses en el siglo XV, donde todavía se habla una lengua propia",
              "Cerca de Matera, que se puede añadir",
            ],
            contro: [
              "Carreteras largas y lentas, distancias que se notan",
              "Senderismo menos cuidado que en los Alpes",
              "Poquísimos servicios en altura",
            ],
            perChi: "Quien camina y quiere montaña sin multitudes, y quien se interesa por las minorías lingüísticas.",
          },
          {
            nome: "Carnia y Valles del Natisone (Friuli)",
            sintesi: "Las montañas del Friuli, con una cultura de frontera entre italiano, friulano, esloveno y alemán, y los lugares de la Gran Guerra.",
            costo: "bajo para los estándares alpinos",
            durata: "4-6 días",
            pro: [
              "Alpes sin los precios ni la aglomeración alpinos",
              "Estratos culturales que no se encuentran en otro sitio, con cuatro lenguas en pocos valles",
              "Los lugares de la Gran Guerra, del Monte Cavallo a las trincheras",
              "Cocina de montaña con el frico, el queso de majada y los vinos friulanos a poca distancia",
            ],
            contro: ["Clima lluvioso: el Friuli es una de las zonas más lluviosas de Italia", "Distancias a las grandes ciudades", "Algunos puertos cerrados en invierno"],
            perChi: "Quien ama la montaña pero no quiere pagar las Dolomitas, y quien se interesa por la historia de frontera.",
          },
          {
            nome: "Val Grande (Piamonte)",
            sintesi: "La mayor área wilderness de Italia, entre el Lago Mayor y Suiza: ninguna carretera, ningún pueblo habitado, pastos de altura abandonados reconquistados por el bosque.",
            costo: "bajo, pero requiere autonomía",
            durata: "2-4 días de trekking",
            pro: [
              "Es el único lugar de Italia donde se puede caminar días sin encontrar a nadie y sin carreteras",
              "Muy cerca del Lago Mayor, por lo tanto fácil de alcanzar",
              "Historia de la resistencia partisana y del abandono de la montaña",
            ],
            contro: [
              "**No es para principiantes**: senderos poco señalizados, vivacs esenciales, ningún refugio con servicio, ninguna señal de teléfono",
              "Hace falta autonomía completa: agua, comida, orientación",
              "Cada año hay intervenciones de rescate por personas que la han subestimado",
            ],
            perChi: "Excursionistas expertos y autónomos. No es un paseo y no hay que tratarla como tal.",
          },
          {
            nome: "Aspromonte y Calabria griega",
            sintesi: "El extremo de la península, con el parque nacional del Aspromonte, los pueblos abandonados como Pentedattilo y Roghudi, y las comunidades donde todavía se habla el grecanico.",
            costo: "muy bajo",
            durata: "5-7 días",
            pro: [
              "El grecanico, una lengua griega superviviente desde la Antigüedad, aún hablada por unos pocos cientos de personas",
              "Pueblos abandonados espectaculares, vaciados por desprendimientos e inundaciones y dejados donde estaban",
              "Paisaje que pasa del mar a mil ochocientos metros en veinte kilómetros",
              "Los Bronces de Riace en Reggio, que son de los pocos bronces griegos originales del mundo",
            ],
            contro: [
              "Carreteras interiores muy lentas y en ciertos tramos en mal estado",
              "Servicios turísticos mínimos",
              "Verano tórrido en la costa",
            ],
            perChi: "Quien quiere llegar hasta donde acaba Italia, y quien se interesa por las culturas en vías de extinción.",
          },
        ],
        raccomandazione:
          "La más accesible y la menos exigente es el **Molise**, a dos horas de Roma, que no pide nada. Para la montaña, **Carnia** en el norte y **Pollino** en el sur, ambas a una fracción del precio de los Alpes famosos. La **Val Grande** solo para quien camina en serio y es autónomo. El **Aspromonte** es la más lejana y la más sorprendente, pero hay que contar con un viaje largo. Y para todas vale una cosa: aquí el coche es indispensable.",
      },
    ],
    miaEsperienza:
      "En la Italia inexplorada se entiende lo concentrado que está el turismo en este país: cincuenta millones de personas al año se reparten por una decena de ciudades y de costas, y a dos horas de esas mismas ciudades hay valles en los que se camina media jornada sin encontrar a nadie. Más que el paisaje, bonito pero no extraordinario comparado con los Alpes, impresiona la relación con quien vive allí. En un pueblo de trescientos habitantes del Apenino nadie intenta venderte nada, porque no hay mercado: te preguntan de dónde vienes, y la respuesta les interesa. Se come en trattorie sin carta donde se pregunta qué hay y llegan tres platos por veinticinco euros con el vino de la casa. La otra cara que hay que conocer: aquí no hay horarios flexibles, no hay conexión, no hay oficina de información, y quien llega a las tres de la tarde buscando una comida lo encuentra todo cerrado. Y no se puede ignorar el motivo por el que estos lugares están vacíos: se están despoblando. Hay pueblos con más casas vacías que habitadas y con la edad media por encima de los sesenta años. Verlos ahora significa verlos mientras existen.",
    esperienzeSlugs: ['cammini-italia'],
    tripSlugs: [],
    imageAlt: "Civita di Bagnoregio encaramada en su espolón de toba, accesible solo por el largo puente peatonal, en la Tuscia",
    immagine: '/images/italia/italia-inesplorata.jpg',
  },
  {
    slug: 'rotte-dei-vini',
    paeseSlug: 'italia',
    ordine: 12,
    nome: "Por las rutas de los grandes vinos",
    tipologia: ['enogastronomia', 'paesaggi', 'itinerari'],
    giorniConsigliati: "4-6 días por ruta",
    visitataPersonalmente: true,
    introduzione:
      "Italia es el mayor productor mundial de vino y tiene más de quinientas variedades autóctonas catalogadas, más que cualquier otro país. Tres paisajes vitivinícolas son Patrimonio de la UNESCO: las Langhe-Roero y el Monferrato, las colinas del Prosecco de Conegliano y Valdobbiadene, y la Costiera como paisaje cultural. Y casi toda denominación importante tiene alrededor un territorio que se recorre en coche en pocos días.",
    percheAndarci:
      "Aquí el vino es el mejor pretexto para ver paisajes agrarios construidos a lo largo de siglos: los bancales de la Valtellina, las colinas de las Langhe, los muretes de piedra seca del Etna. Y en la bodega se habla con quien produce, cosa que en Francia ocurre mucho menos.",
    cosaVedere: [
      "Las Langhe y el Roero, Patrimonio de la UNESCO, con Barolo, Barbaresco, Alba y la trufa blanca",
      "La Valpolicella y el Soave, con las villas vénetas y las fruttaie donde se pasifican las uvas del Amarone",
      "Las colinas del Prosecco entre Conegliano y Valdobbiadene, Patrimonio de la UNESCO, con el Cartizze",
      "El Chianti Classico, Montalcino y Montepulciano, con las abadías y los pueblos amurallados",
      "El Etna, con las contrade en las laderas del volcán y las vides a pie franco, supervivientes de la filoxera",
      "El Collio y los Colli Orientali en el Friuli, para los blancos y los macerados",
      "La Valtellina, con los bancales a pico y los muretes de piedra seca",
      "La Irpinia y el Vulture, los dos grandes tintos del sur: Taurasi y Aglianico del Vulture",
    ],
    cosaFare: [
      "Visita y cata en bodega, reservando con antelación (consulta la ficha de experiencia dedicada)",
      "Ir en vendimia, entre finales de agosto y octubre, cuando las bodegas trabajan",
      "La feria de la trufa blanca de Alba, en otoño, cuando las Langhe dan lo mejor y se llenan",
      "Caminar entre los viñedos: casi todas las zonas tienen senderos señalizados entre las viñas",
    ],
    doveDormire:
      "Los agriturismos y los wine resorts de las zonas vitivinícolas son la fórmula correcta, y en muchos casos son las propias bodegas. En las Langhe y en el Chianti los precios son altos en temporada; en la Irpinia, el Vulture y la Valtellina se gasta una fracción por una calidad similar.",
    doveMangiare:
      "Cada ruta tiene su cocina, y por eso el tema funciona: en las Langhe el tajarin, el vitello tonnato, la carne cruda y la trufa; en la Valpolicella el risotto al Amarone y los hervidos; en la Toscana la bistecca y los pici; en el Etna la pasta alla Norma y el pescado del Jónico; en la Valtellina los pizzoccheri y la bresaola. **La mejor manera de comer en estas zonas es en las osterie asociadas a los consorcios**, que tienen las cartas de vinos locales completas a precios de bodega.",
    comeArrivare:
      "En coche, siempre. Las zonas del vino son colinas con pueblos dispersos, y el transporte público sirve de poco. Los aeropuertos y las estaciones de referencia son Turín y Milán para el Piamonte, Verona para el Véneto, Florencia para la Toscana, Catania para el Etna, Trieste para el Friuli.",
    comeSpostarsi:
      "Coche, con un tema serio: **quien conduce no cata**. Las alternativas son confiarse a un chófer, usar los servicios de lanzadera que ofrecen varias zonas, o bien organizar las visitas de modo que quien conduce pruebe y escupa, como hacen los profesionales.",
    periodoMigliore:
      "**septiembre y octubre**, durante la vendimia: las bodegas están en plena actividad, los colores de las viñas cambian y las ferias están en el calendario. Abril-junio es la segunda ventana, con el verde y menos gente. De noviembre a marzo muchas bodegas pequeñas reducen las visitas, y en agosto varias cierran.",
    costi:
      "Las catas en bodega cuestan normalmente entre 15 y 40 euros por persona según los vinos y la acogida, a menudo descontados de la compra. En las zonas más conocidas (Barolo, Montalcino) las visitas guiadas de las bodegas históricas cuestan más; en las zonas emergentes se paga mucho menos o nada.",
    erroriDaEvitare: [
      "**Presentarse en una bodega sin cita**: es el error número uno. Las bodegas son explotaciones agrícolas con horarios de trabajo, y casi todas reciben solo con reserva, a menudo con algunos días de antelación",
      "Programar más de dos o tres bodegas al día: después de la tercera ya no se prueba nada con atención, y la jornada se convierte en una colección de sellos",
      "No resolver el problema de quien conduce antes de partir: las sanciones por conducir en estado de embriaguez en Italia son severas y en las zonas vitivinícolas hay controles",
      "Ir en agosto: muchas bodegas cierran o reducen, y quien trabaja está de vacaciones o preparando la vendimia",
      "Quedarse solo en las denominaciones famosas: las Langhe y Montalcino son caras y están llenas, mientras que la Irpinia, el Vulture, la Valtellina y el Etna ofrecen el mismo nivel con una fracción de visitantes",
      "Comprar en la tienda de vinos lo que se puede comprar en la bodega: en la empresa el precio es el de producción y se habla con quien lo ha hecho",
    ],
    confronti: [
      {
        titolo: "Qué ruta del vino elegir",
        introduzione:
          "Las denominaciones italianas son más de cuatrocientas, pero las rutas que funcionan como viaje, con paisaje, bodegas visitables y una cocina a la altura en un radio recorrible, son una decena. Cambian muchísimo en precio, afluencia y tipo de vino.",
        opzioni: [
          {
            nome: "Langhe y Roero (Piamonte)",
            sintesi: "Patrimonio de la UNESCO: Barolo, Barbaresco, Barbera y Dolcetto sobre colinas de marga, con Alba en el centro y la trufa blanca en otoño.",
            costo: "la ruta más cara de Italia, con Barolo y Barbaresco a niveles internacionales",
            durata: "4-5 días",
            pro: [
              "El nivel enológico más alto de Italia, con el Nebbiolo entre las grandes uvas del mundo",
              "Paisaje UNESCO de colinas cultivadas de vid hasta el horizonte",
              "La cocina piamontesa es de las mejores del país: tajarin, carne cruda, plin, trufa en temporada",
              "Bodegas estructuradas para la acogida, con visitas bien organizadas",
            ],
            contro: [
              "Cara en todo: bodegas, alojamientos, restaurantes",
              "En otoño, durante la feria de la trufa, está saturada y los precios se duplican",
              "Es la ruta más transitada y se nota",
            ],
            perChi: "Quien quiere lo mejor y tiene presupuesto, y quien pone la cocina al mismo nivel que el vino.",
          },
          {
            nome: "Valpolicella, Soave y las colinas del Prosecco (Véneto)",
            sintesi: "Tres zonas cercanas entre sí a espaldas de Verona: el Amarone con sus fruttaie, el Soave, y las colinas del Prosecco Patrimonio de la UNESCO.",
            costo: "medio",
            durata: "3-5 días",
            pro: [
              "Tres denominaciones muy distintas en pocas decenas de kilómetros",
              "Las fruttaie del Amarone, donde las uvas se pasifican durante meses sobre cañizos: una técnica que solo se ve aquí",
              "Las colinas del Prosecco son paisaje UNESCO, con pendientes cultivadas a mano",
              "Muy cerca de Verona, del Garda y de Venecia: fáciles de encajar",
            ],
            contro: [
              "La zona del Prosecco ha sufrido una viticultura muy intensiva, y en ciertos tramos se ve",
              "Menos «remota» que las demás: siempre se está cerca de carreteras con tráfico",
              "La Valpolicella clásica es pequeña y en temporada alta las mejores bodegas se llenan",
            ],
            perChi: "Quien tiene pocos días, quien combina el vino con Verona y el Garda, quien quiere ver técnicas distintas.",
          },
          {
            nome: "Chianti Classico, Montalcino y Montepulciano (Toscana)",
            sintesi: "El Sangiovese en tres declinaciones, entre Florencia y Siena, con las abadías, los pueblos amurallados y los cipreses.",
            costo: "alto, con Montalcino a los niveles de las Langhe",
            durata: "4-6 días",
            pro: [
              "El paisaje más fotografiado de Italia, y no por casualidad",
              "Se combina con Florencia y Siena sin desplazamientos largos",
              "Brunello di Montalcino y Chianti Classico son denominaciones con bodegas muy bien organizadas para las visitas",
              "Las abadías (Sant'Antimo, San Galgano) añaden algo más al viaje",
            ],
            contro: [
              "La ruta más turística de todas: en temporada alta las carreteras del Chianti tienen mucho tráfico",
              "Precios altos, con muchas estructuras pensadas para un turismo internacional de gama alta",
              "Menos variedad: es casi todo Sangiovese",
            ],
            perChi: "Quien va por primera vez, quien combina vino y ciudades de arte, quien quiere el paisaje de postal.",
          },
          {
            nome: "Etna (Sicilia)",
            sintesi: "Las contrade en las laderas del volcán, con el Nerello Mascalese y el Carricante cultivados entre los 400 y los 1.000 metros sobre suelos lávicos, a menudo con vides a pie franco.",
            costo: "medio, con algunas bodegas de nivel internacional",
            durata: "3-4 días",
            pro: [
              "Las **vides a pie franco**: el Etna es una de las pocas zonas de Europa adonde la filoxera nunca llegó, y hay cepas prefiloxéricas de más de cien años",
              "El concepto de contrada, que funciona como los cru borgoñones: suelos y cotas distintos a pocos cientos de metros de distancia",
              "Un paisaje que no se encuentra en otro sitio: bancales de piedra lávica con el volcán humeante encima",
              "Se combina con Taormina, Catania y el mar",
            ],
            contro: [
              "Las bodegas están dispersas en un territorio amplio y las carreteras de la ladera son lentas",
              "Zona en fuerte crecimiento: algunas empresas son muy comerciales",
              "En verano hace mucho calor a cotas bajas",
            ],
            perChi: "Quien busca vinos de carácter y un territorio que no se parece a ningún otro de Italia.",
          },
          {
            nome: "Collio y Colli Orientali (Friuli)",
            sintesi: "La zona de los grandes blancos italianos, a caballo de la frontera eslovena, con el Friulano, la Ribolla Gialla y la escuela de los macerados.",
            costo: "medio, muy accesible para el nivel",
            durata: "3-4 días",
            pro: [
              "Los mejores blancos de Italia, reconocidos a nivel internacional",
              "La escuela de los **orange wine**, es decir blancos macerados con los hollejos, nació precisamente aquí y en Eslovenia",
              "Paisaje suave de colinas a caballo de una frontera que se cruza sin darse cuenta",
              "Precios mucho más humanos que las Langhe a igual calidad",
            ],
            contro: ["Menos espectacular como paisaje", "Lejos de los grandes ejes turísticos", "Poca oferta de alojamiento de gama alta"],
            perChi: "Quien bebe blancos, quien se interesa por los macerados, quien quiere calidad sin pagar la fama.",
          },
          {
            nome: "Irpinia y Vulture (Campania y Basilicata)",
            sintesi: "Los grandes tintos del sur: Taurasi en la Irpinia y Aglianico del Vulture en las laderas de un volcán apagado, más Fiano y Greco di Tufo para los blancos.",
            costo: "el más bajo de todas las rutas",
            durata: "4-5 días",
            pro: [
              "El Aglianico es una de las grandes uvas italianas y cuesta una fracción del Nebbiolo o del Sangiovese de igual nivel",
              "Zonas casi sin turismo: se visita en la bodega hablando con el propietario",
              "El Vulture tiene bodegas excavadas en la toba y un paisaje volcánico inesperado",
              "Precios de alojamientos y restaurantes bajísimos",
            ],
            contro: [
              "Poca organización para la acogida: muchas bodegas reciben pero no están estructuradas para el turismo",
              "Carreteras interiores lentas",
              "Servicios de alojamiento limitados",
            ],
            perChi: "Quien ya ha hecho las rutas famosas y quiere beber igual de bien gastando un tercio.",
          },
          {
            nome: "Valtellina (Lombardía)",
            sintesi: "El Nebbiolo de montaña, cultivado en bancales a pico sostenidos por cientos de kilómetros de muretes de piedra seca.",
            costo: "medio-bajo",
            durata: "2-3 días",
            pro: [
              "El paisaje de bancales más impresionante de Italia: muretes de piedra seca construidos a mano en laderas empinadísimas",
              "Viticultura heroica en el sentido pleno: se trabaja a mano porque ningún medio puede subir",
              "El Sforzato, obtenido de uvas pasificadas, es un vino de montaña sin equivalentes",
              "Se combina con la montaña y con los pizzoccheri",
            ],
            contro: ["Zona pequeña con pocas bodegas visitables", "El fondo del valle tiene tráfico y es poco bonito", "Menos variedad que las demás rutas"],
            perChi: "Quien ama la montaña y quiere ver qué significa viticultura heroica.",
          },
        ],
        raccomandazione:
          "Como primera ruta: **Langhe**, porque el nivel es el más alto y la cocina está a la altura, aceptando su precio e yendo en septiembre en lugar de durante la feria de la trufa. Si el presupuesto cuenta, **Irpinia y Vulture** dan casi lo mismo por un tercio, con la única renuncia de la acogida organizada. Para algo que no se parece a ninguna otra parte de Italia, **Etna**, con las vides prefiloxéricas. Para los blancos, **Collio** sin duda. Y sea cual sea la ruta que se elija: **se reserva en la bodega, no se presenta uno**, y se resuelve antes el problema de quien conduce.",
      },
    ],
    miaEsperienza:
      "Las rutas del vino son la mejor manera de ver la Italia agrícola en lugar de la monumental, y lo que lo cambia todo es algo banal: reservar. Una bodega es una explotación agrícola con un trabajo que hacer: quien llega sin cita normalmente encuentra la verja cerrada, mientras que quien escribe un correo tres días antes es recibido por el productor en persona, que tiene una hora para ti. La segunda cosa que entendí tiene que ver con la relación entre fama y valor: las Langhe son extraordinarias y cuestan en consecuencia, pero en el Etna hay vides a pie franco de más de cien años (la filoxera en ese suelo lávico nunca llegó), y en la Irpinia se bebe un Aglianico que aguanta la comparación con tintos que cuestan cuatro veces más, en bodegas donde entras y está el propietario trasegando. El problema práctico más serio, que nadie afronta al organizar, es quién conduce: se visitan bodegas en zonas de colinas, se prueba, y la tentación de hacer como si nada es fuerte. Las soluciones serias son dos: probar y escupir, como hacen los profesionales, o pagar a un chófer.",
    esperienzeSlugs: ['degustazione-cantina'],
    tripSlugs: ['rotte-dei-vini-itinerario'],
    imageAlt: "Las colinas cultivadas de vid alrededor de Castellina in Chianti con un caserío entre los cipreses, Toscana",
    immagine: '/images/italia/rotte-dei-vini.jpg',
  },
  {
    slug: 'torino',
    paeseSlug: 'italia',
    ordine: 13,
    nome: "Turín",
    tipologia: ['città d\'arte', 'musei', 'gastronomia'],
    giorniConsigliati: "2-3 días, más las Langhe o el Valle de Susa",
    visitataPersonalmente: true,
    introduzione:
      "Fue la primera capital de Italia, construida sobre una cuadrícula romana y luego barroca, con dieciocho kilómetros de soportales que permiten atravesarla sin mojarse nunca con la lluvia. Tiene el museo egipcio más importante del mundo después del de El Cairo, la Mole, que es el símbolo más improbable jamás adoptado por una ciudad, y una cultura del café y del vermut que nació aquí.",
    percheAndarci:
      "Es la gran ciudad italiana más infravalorada. No tiene el turismo de masas de Florencia o Venecia, tiene museos de nivel internacional, se recorre muy bien a pie y se come y se bebe como en pocas otras, con los Alpes al fondo de las calles en los días claros.",
    cosaVedere: [
      "El Museo Egipcio, segundo del mundo solo después del de El Cairo por la importancia de su colección",
      "La Mole Antonelliana con el Museo Nacional del Cine y el ascensor panorámico en el vacío central",
      "El Palazzo Reale, los Museos Reales y la Armería, con la Capilla del Santo Sudario de Guarini restaurada",
      "La Basílica de Superga en la colina, con las tumbas de los Saboya y el memorial del Grande Torino",
      "La Reggia di Venaria, Patrimonio de la UNESCO, con los jardines",
      "El Cuadrilátero Romano y Porta Palazzo, el mercado al aire libre más grande de Europa",
      "Los cafés históricos: aquí nacieron el bicerin, el vermut y el rito del aperitivo",
    ],
    cosaFare: [
      "Museo Egipcio a la apertura, con al menos tres horas disponibles",
      "Subir a la Mole con el ascensor que atraviesa el vacío de la cúpula, una experiencia en sí misma",
      "El aperitivo en un café histórico, en Turín un rito con reglas precisas desde hace dos siglos",
      "Subir a Superga con el tranvía de cremallera histórico, y dar la vuelta a la colina",
      "El mercado de Porta Palazzo por la mañana, el mayor mercado al aire libre de Europa",
    ],
    doveDormire:
      "El centro dentro del cuadrilátero barroco es comodísimo y se recorre todo a pie. San Salvario, detrás de Porta Nuova, tiene los mejores precios y la vida nocturna. El Cuadrilátero Romano por el ambiente. La ciudad está bien servida por el metro y los tranvías: la ubicación cuenta menos que en Roma o Nápoles.",
    doveMangiare:
      "La cocina piamontesa es de las más ricas de Italia: agnolotti del plin, vitello tonnato, carne cruda picada a cuchillo, bagna càuda (en invierno, y se come en grupo), finanziera para los valientes. Luego está la parte dulce y de beber, que en Turín es identidad: el **bicerin** (café, chocolate y crema de leche, servido en capas en el vaso), el gianduiotto, los grissini, nacidos aquí, y el **vermut**, inventado en Turín en el siglo XVIII. El aperitivo con bufé aquí se hace desde hace dos siglos.",
    comeArrivare:
      "Alta velocidad: Torino Porta Nuova y Porta Susa están en la ciudad, con Milán a una hora y Roma a cuatro y media. Aeropuerto de Caselle, conectado en tren y autobús.",
    comeSpostarsi:
      "A pie bajo los soportales, que cubren el centro durante kilómetros. Metro automático (una línea) y una red de tranvías entre las más extensas de Italia. **Atención a la ZTL central**, activa los días laborables con cámaras.",
    periodoMigliore:
      "abril-junio y septiembre-noviembre. El invierno es frío y neblinoso pero la ciudad funciona muy bien y los museos están vacíos; el verano es bochornoso y en agosto Turín se vacía. En noviembre está el Salone del Gusto en los años pares y la feria de la trufa en Alba, a una hora de distancia.",
    costi:
      "Museo Egipcio con entrada contenida para su nivel; la **Torino+Piemonte Card** cubre decenas de museos y conviene a partir de dos días. En alojamientos y restaurantes la ciudad cuesta bastante menos que Milán.",
    erroriDaEvitare: [
      "Dedicar una hora al Museo Egipcio: hacen falta al menos tres, y es la colección egipcia más importante del mundo después de la de El Cairo",
      "Saltarse la colina: Superga y la vuelta panorámica son la mitad del carácter de la ciudad y casi ningún visitante sube",
      "Entrar en coche al centro sin conocer la ZTL",
      "Considerarla solo una parada de paso hacia las Langhe: Turín aguanta dos días completos",
      "Esperar una ciudad «de postal»: Turín es rigurosa, geométrica y algo severa, y gusta por eso",
    ],
    miaEsperienza:
      "Turín es la gran ciudad italiana que llega como un regalo: nadie te dice que vayas, luego vas y aguanta dos días completos sin esfuerzo. La pieza fuerte es el Museo Egipcio, y es enorme: la segunda colección egipcia del mundo después de la de El Cairo, con estatuas enteras, papiros y la tumba de Kha y Merit reconstruida con todo el ajuar encontrado intacto. Hacen falta tres horas, y no es una forma de hablar. La Mole, en cambio, es lo más absurdo: nacida como sinagoga, nunca usada como tal, convertida en símbolo de la ciudad, y hoy museo del cine con un ascensor de cabina transparente que sube por el vacío de la cúpula, sobre la cabeza de los visitantes tumbados en los sofás viendo películas. Luego está la parte que casi nadie hace, la colina: se toma el tranvía de cremallera y se sube a Superga, donde están las tumbas de los Saboya y, en la parte de atrás, el muro contra el que se estrelló el avión del Grande Torino en 1949. Y por la noche el aperitivo, lejos de la moda milanesa: los cafés históricos con las barras de mármol donde se bebe un vermut hecho a cien metros de allí.",
    esperienzeSlugs: ['museo-egizio'],
    tripSlugs: ['torino-2-giorni'],
    imageAlt: "Los Jardines Reales y los tejados de Turín vistos desde lo alto de la Mole Antonelliana",
    immagine: '/images/italia/torino.jpg',
  },
  {
    slug: 'costiera-amalfitana',
    paeseSlug: 'italia',
    ordine: 14,
    nome: "Costa Amalfitana",
    tipologia: ['mare', 'paesaggi', 'trekking'],
    giorniConsigliati: "4-5 días",
    visitataPersonalmente: true,
    introduzione:
      "Cincuenta kilómetros de costa a pico entre Sorrento y Salerno, Patrimonio de la UNESCO como **paisaje cultural**, es decir por la manera en que el hombre la ha aterrazado con limoneros y vides en pendientes imposibles. Trece municipios agarrados a la roca, unidos por una carretera estatal que es a la vez la más bella y la más maldita de Italia.",
    percheAndarci:
      "Una relación tan estrecha entre montaña y mar no existe en otro lugar del Mediterráneo: se pasa de seiscientos metros de altitud al mar en dos kilómetros en línea recta. Y por encima de la carretera, en los senderos, hay una costa del todo distinta de la que ven los autocares.",
    cosaVedere: [
      "Positano, vertical y fotogénica, que se baja a pie y se sube con las piernas",
      "Amalfi con la Catedral y el Claustro del Paraíso, y Ravello con Villa Cimbrone y Villa Rufolo",
      "El **Sentiero degli Dei**, de Bomerano a Nocelle: la costa vista desde arriba",
      "La Valle delle Ferriere sobre Amalfi, con los helechos gigantes supervivientes de la era glacial",
      "El Fiordo di Furore y la Gruta Esmeralda",
      "Atrani, el municipio más pequeño de Italia por superficie, a doscientos metros de Amalfi y sin nadie",
      "Cetara, pueblo de pescadores con la colatura di alici, y Vietri con las cerámicas",
    ],
    cosaFare: [
      "El Sentiero degli Dei, lo mejor de la Costa (consulta la ficha de experiencia dedicada)",
      "Moverse en ferry en lugar de en coche: en verano es la única elección sensata",
      "La Scala Fenicia o los senderos de los Limoneros entre Maiori y Minori, que casi nadie hace",
      "Una velada en Ravello, que está cuatrocientos metros sobre la costa y es otro mundo respecto al fondo",
    ],
    doveDormire:
      "**Dormir en Nápoles o en Salerno y hacer excursiones de un día cuesta una fracción** respecto a alojarse en Positano o en Amalfi en temporada. Quien quiere estar en la costa: Praiano y Minori tienen precios mucho más humanos que Positano y Amalfi, con la misma costa. Ravello es otra cosa: más alta, más silenciosa, más cara.",
    doveMangiare:
      "Pescado azul, no pescado noble: aquí la tradición es la de los pescadores. La **colatura di alici de Cetara**, heredera del garum romano, se usa sobre espaguetis con ajo, aceite y perejil y no hay que cocerla. Luego los scialatielli con marisco, la mozzarella en hoja de mirto y los limones: el sfusato amalfitano es enorme y se come incluso en ensalada. El limoncello está en todas partes y casi siempre es industrial: el bueno se compra a los productores. **En el paseo marítimo de Positano y Amalfi se paga la posición**, no el plato.",
    comeArrivare:
      "Desde Nápoles: Circumvesuviana hasta Sorrento y luego autobús o ferry; o bien ferry directo en temporada. Desde Salerno: autobús o ferry a lo largo de toda la costa. **El avión llega a Nápoles Capodichino.**",
    comeSpostarsi:
      "**El ferry gana al coche y al autobús en cualquier temporada.** La estatal amalfitana es una carretera de dos carriles estrechos con cientos de curvas y ningún aparcamiento: en verano es un atasco continuo, con colas de horas. Los autobuses SITA son baratos y panorámicos pero van llenos. **En temporada alta en algunos tramos hay circulación por matrículas alternas**: conviene informarse antes. La scooter es la alternativa para quien se atreve.",
    periodoMigliore:
      "**mayo-junio y septiembre-principios de octubre.** Julio y agosto están saturados, con la estatal bloqueada y los precios al máximo. De noviembre a marzo la costa se vacía: preciosa y silenciosa, con muchos alojamientos cerrados y el mar fuera de juego. Abril y octubre son excelentes para los senderos.",
    costi:
      "Entre las zonas más caras de Italia en temporada alta. El Sentiero degli Dei es gratuito; Villa Cimbrone y Villa Rufolo en Ravello tienen entradas contenidas; los ferries cuestan pocos euros por tramo y son la mejor inversión del viaje.",
    erroriDaEvitare: [
      "**Venir en coche en julio o agosto.** Es el error que arruina más vacaciones en la Costa: la estatal está bloqueada, los aparcamientos cuestan cifras absurdas donde existen, y se pasa la jornada en cola",
      "Dormir en Positano o Amalfi sin saber que en Praiano o Minori se gasta la mitad con la misma costa",
      "Hacer solo el fondo: Ravello está a cuatrocientos metros y los senderos sobre la carretera son otra costa",
      "Quedarse en Positano y Amalfi saltándose Atrani, que está a doscientos metros de Amalfi, es el municipio más pequeño de Italia y no tiene a nadie",
      "Hacer el Sentiero degli Dei en el sentido equivocado: de Bomerano a Nocelle se baja, al revés se sube todo",
      "Cocer la colatura di alici, que hay que añadir en crudo",
    ],
    miaEsperienza:
      "La Costa tiene un problema que se llama estatal 163: una carretera de dos carriles estrechísimos, excavada en la roca, con los autobuses que se cruzan con los retrovisores plegados, y en verano una cola continua de Sorrento a Salerno. Quien llega en coche en agosto pasa las vacaciones parado, y basta eso para arruinar uno de los lugares más bellos del Mediterráneo. La solución es banal y casi nadie la usa: **el ferry**. Cuesta pocos euros, une todos los pueblos y se llega desde el mar, que es también la manera correcta de mirar esta costa: los pueblos se construyeron para ser vistos desde allí. La segunda cosa que cambia el viaje es subir. Sobre la carretera hay una costa de senderos, bancales y caminos de herradura que unían los pueblos antes de que existiera la estatal: el **Sentiero degli Dei** corre a quinientos metros sobre el mar con Positano debajo y Capri en el horizonte, dura tres horas, es gratis y va una fracción mínima de la gente que se apiña en el paseo marítimo. Desde allí arriba se entiende también por qué es Patrimonio de la UNESCO: esos bancales de limoneros en pendientes del cuarenta por ciento los construyó alguien, a mano, a lo largo de los siglos.",
    esperienzeSlugs: ['sentiero-degli-dei'],
    tripSlugs: ['costiera-e-isole'],
    imageAlt: "Las casas de color pastel de Positano trepando por la colina sobre la playa con las barcas varadas, Costa Amalfitana",
    immagine: '/images/italia/costiera-amalfitana.jpg',
  },
  {
    slug: 'isole-golfo-napoli',
    paeseSlug: 'italia',
    ordine: 15,
    nome: "Capri, Ischia y Procida",
    tipologia: ['isole', 'mare', 'terme'],
    giorniConsigliati: "4-5 días para hacer al menos dos",
    visitataPersonalmente: true,
    introduzione:
      "Tres islas a menos de una hora de Nápoles y completamente distintas entre sí: Capri vertical, mundana y carísima; Ischia grande, verde y termal, con manantiales ya aprovechados por los griegos; Procida minúscula, colorida y que sigue siendo un pueblo de pescadores.",
    percheAndarci:
      "Se llega en el día desde Nápoles, y el contraste entre las tres, a pocas millas de distancia, es lo más interesante: se puede pasar de la mundanidad de Capri a la Marina Corricella de Procida, donde la gente tiende la ropa, en la misma tarde.",
    cosaVedere: [
      "Capri: los Faraglioni, la Gruta Azul, Villa Jovis de Tiberio, el Monte Solaro con la telesilla desde Anacapri",
      "El Sentiero dei Fortini y la Scala Fenicia en Capri, que casi nadie hace",
      "Ischia: el Castello Aragonese en un islote, las termas de Cavascura excavadas en la roca, el Monte Epomeo",
      "La Bahía de Sorgeto en Ischia, donde manantiales termales hirvientes brotan directamente en el mar",
      "Procida: Marina Corricella con las casas de colores, Terra Murata, la Chiaiolella",
      "Los Campos Flégreos en tierra firme, con la Solfatara y Baia sumergida",
    ],
    cosaFare: [
      "Capri **durmiendo allí**, porque la isla cambia por completo cuando se van los visitantes de un día",
      "Baño termal en Sorgeto en Ischia, donde se excava un hoyo en la grava y se está en el agua caliente",
      "Subir al Monte Solaro en telesilla y bajar a pie por la Scala Fenicia",
      "La vuelta a Procida en bici o a pie, que se hace en media jornada",
      "La vuelta a la isla en barca, que en Capri es la única manera de ver las grutas y los Faraglioni de cerca",
    ],
    doveDormire:
      "Capri es carísima en temporada alta; Anacapri cuesta bastante menos y es más tranquila. Ischia tiene la oferta más amplia y más económica de las tres, con los hoteles termales. Procida es la más accesible y la más auténtica. **Muchos hacen base en Nápoles o en Sorrento y van en el día**: es la elección más económica, pero la peor para Capri.",
    doveMangiare:
      "En Capri nacieron la ensalada caprese y la torta caprese, con almendras y sin harina. En Ischia el plato que hay que buscar es el **coniglio all'ischitana**, un plato de tierra en una isla: los conejos se criaban en fosos excavados en la toba, y la cocina isleña es más campesina que marinera. En Procida se come pescado y se compra el limón local, enorme, que se usa en ensalada. **En las plazuelas principales se paga la posición**: dos callejuelas más allá se come mejor y se gasta la mitad.",
    comeArrivare:
      "Ferries y aliscafi desde Nápoles (Molo Beverello para los aliscafi, Calata Porta di Massa para los ferries) y desde Sorrento. Para Procida e Ischia hay también salidas desde Pozzuoli, más cerca y menos caótico.",
    comeSpostarsi:
      "En Capri **no se lleva el coche** (en temporada alta está prohibido a los no residentes) y uno se mueve con el funicular, los autobuses y los taxis descapotables. En Ischia hacen falta autobús o scooter, porque la isla es grande. Procida se recorre a pie o en bici.",
    periodoMigliore:
      "**mayo-junio y septiembre.** En julio y agosto Capri recibe decenas de miles de visitantes en el día y es invivible. Ischia funciona incluso en invierno por las termas, y es la única de las tres con una temporada larga.",
    costi:
      "Capri es de los lugares más caros de Italia. Ischia tiene precios normales, Procida bajos. Los ferries cuestan pocos euros; la Gruta Azul requiere entrada más el paso en la barquita, con colas largas y acceso suspendido cuando el mar está movido.",
    erroriDaEvitare: [
      "**Hacer Capri en el día en agosto**: se llega junto a miles de personas, se hace cola para el funicular, se camina en fila por la Piazzetta y se vuelve a partir. Quien duerme allí ve otra isla después de las seis de la tarde",
      "Ir a la Gruta Azul sin mirar el mar: con oleaje el acceso se suspende, y la cola puede ser de horas para cinco minutos dentro",
      "Llevar el coche a Capri, donde está prohibido, o a Procida, donde es inútil",
      "Elegir Ischia pensando que es una Capri más económica: es más grande, más verde, más campesina, y su razón de ser son las termas",
      "Saltarse Procida porque «es pequeña»: es la única de las tres que ha seguido siendo un pueblo de verdad",
    ],
    confronti: [
      {
        titolo: "Capri, Ischia o Procida: cuál elegir",
        introduzione:
          "Están a pocas millas una de otra y se tratan como intercambiables, cuando son tres viajes distintos en coste, ritmo y razón para ir.",
        opzioni: [
          {
            nome: "Capri",
            sintesi: "Vertical, mundana, con los Faraglioni, Villa Jovis y el Monte Solaro. Es la isla más célebre del Mediterráneo y se comporta en consecuencia.",
            costo: "altísimo, entre los más altos de Italia",
            durata: "1-2 días, mejor con una pernoctación",
            pro: [
              "El paisaje aguanta la fama: los Faraglioni y la costa desde Punta Carena son espectaculares",
              "Después de las seis de la tarde, cuando se van los visitantes de un día, se convierte en otra isla",
              "El Sentiero dei Fortini y la Scala Fenicia están entre los paseos más bellos del Tirreno y va poquísima gente",
              "Anacapri, arriba, tiene un ritmo completamente distinto al de la Piazzetta",
            ],
            contro: [
              "En temporada alta llegan decenas de miles de visitantes en el día: la Piazzetta es impracticable",
              "Precios de capital internacional en todo",
              "La Gruta Azul tiene colas larguísimas para cinco minutos dentro, y cierra con el mar movido",
            ],
            perChi: "Quien acepta el precio y sobre todo quien duerme allí. En el día en agosto es la peor manera de conocerla.",
          },
          {
            nome: "Ischia",
            sintesi: "La más grande de las tres, verde y montañosa, con el termalismo como identidad: los manantiales se aprovechan desde los tiempos de los griegos.",
            costo: "medio, con la oferta más amplia y más accesible de las tres",
            durata: "3-4 días",
            pro: [
              "Las termas son naturales, muy lejos de un spa: en **Sorgeto** el agua hirviente brota directamente en el mar y se excava un hoyo en la grava",
              "El Castello Aragonese en un islote unido por un puente es uno de los lugares más bellos del golfo",
              "Lo bastante grande para tener un interior agrícola: el Monte Epomeo, los viñedos, los pueblos en la colina",
              "Temporada larga: funciona incluso en invierno gracias a las termas",
            ],
            contro: [
              "Muy edificada en algunas zonas, con un urbanismo pesado a lo largo de la costa norte",
              "Hay que moverse: la isla es grande y los autobuses son lentos",
              "Menos «de postal» que las otras dos",
            ],
            perChi: "Quien busca termas naturales, quien se queda más días, quien viaja con familia, quien quiere gastar lo justo.",
          },
          {
            nome: "Procida",
            sintesi: "La más pequeña, la menos turística, que ha seguido siendo un pueblo de pescadores con las casas de colores de Marina Corricella. Capital italiana de la cultura en 2022.",
            costo: "el más bajo de las tres",
            durata: "media jornada o una noche",
            pro: [
              "Es la única que ha seguido siendo un pueblo de verdad: la gente vive allí, tiende la ropa, repara las barcas",
              "Marina Corricella, con las casas escalonadas de todos los colores, es uno de los puertos más bellos de Italia",
              "Se recorre a pie en media jornada y cuesta poquísimo",
              "Muy cercana: cuarenta minutos desde Nápoles",
            ],
            contro: [
              "Poco que «hacer» en sentido clásico: se camina, se mira, se come",
              "Playas modestas comparadas con las otras dos",
              "Tras el nombramiento como capital de la cultura la afluencia ha crecido mucho",
            ],
            perChi: "Quien tiene media jornada, quien prefiere un pueblo vivido a una escenografía, quien quiere gastar poco.",
          },
        ],
        raccomandazione:
          "Con un solo día: **Procida**, que cuesta poco y nunca decepciona. Con tres o cuatro días: **Ischia** como base, con una jornada en Procida, a veinte minutos de ferry. **Capri** merece la pena, pero solo durmiendo allí o viniendo fuera de temporada: hacerla en el día en agosto significa ver la peor versión del lugar más bello del golfo.",
      },
    ],
    miaEsperienza:
      "La diferencia entre estas tres islas se ve a las seis de la tarde. En Capri, a esa hora, parten los últimos aliscafi de quien ha venido en el día y la Piazzetta, que a mediodía es una multitud compacta en la que no se puede mover uno, se vacía. Quedan los residentes y los pocos que duermen allí, la luz baja sobre los Faraglioni, y se entiende por qué durante dos mil años esta ha sido la isla más deseada del Mediterráneo. Quien la hace en el día en agosto ve solo la peor parte y vuelve diciendo que está sobrevalorada. Ischia funciona de otra manera, porque es grande y tiene una economía propia: las termas son un recurso geológico ya aprovechado por los griegos, más que un servicio de hotel. En **Sorgeto** se baja una escalinata hasta una bahía donde el agua hirviente brota del fondo y se mezcla con el mar: se excava un hoyo en la grava y se sienta uno, gratis, con el mar frío a dos metros. Procida es la más pequeña y la más honesta: no hay nada que tachar de la lista, se camina hasta Marina Corricella, uno se sienta y mira un puerto de pescadores con las casas de todos los colores, donde la gente vive.",
    esperienzeSlugs: ['sorgeto-ischia'],
    tripSlugs: ['costiera-e-isole'],
    imageAlt: "La costa de Capri vista desde lo alto con los Faraglioni y las barcas amarradas en la bahía",
    immagine: '/images/italia/isole-golfo-napoli.jpg',
  },
  {
    slug: 'eolie',
    paeseSlug: 'italia',
    ordine: 16,
    nome: "Islas Eolias",
    tipologia: ['isole', 'vulcani', 'vela'],
    giorniConsigliati: "6-7 días para hacer al menos cuatro",
    visitataPersonalmente: true,
    introduzione:
      "Siete islas volcánicas al norte de Sicilia, Patrimonio de la UNESCO desde 2000 por su valor geológico: aquí se estudiaron y bautizaron dos tipos de erupción, la **estromboliana** y la **vulcaniana**, que llevan el nombre de estas islas en todos los manuales del mundo. Stromboli es uno de los poquísimos volcanes del mundo en erupción permanente desde hace milenios.",
    percheAndarci:
      "Son siete mundos separados a pocas millas unos de otros: de la mundana Panarea a Alicudi, donde no hay carreteras y las mercancías todavía suben con mulas. Y la mejor manera de recorrerlas, en velero, permite dormir fondeado delante de un volcán en erupción.",
    cosaVedere: [
      "Stromboli, con la Sciara del Fuoco y las explosiones visibles desde el mar de noche",
      "Vulcano, con el Gran Cráter, las fumarolas y los barros sulfurosos",
      "Lipari, la más grande, con las canteras de piedra pómez y obsidiana y el Museo Arqueológico Eolio",
      "Salina, la más verde, con los dos volcanes apagados, la malvasía y las alcaparras",
      "Panarea, la más pequeña y la más mundana, con el poblado prehistórico de Capo Milazzese",
      "Filicudi y Alicudi, las dos más remotas: en Alicudi no hay carreteras, solo escalinatas",
      "Las piedras pómez y las arenas blancas de Lipari y las aguas termales submarinas de Vulcano",
    ],
    cosaFare: [
      "Ver Stromboli en erupción desde el mar de noche (consulta la ficha de experiencia dedicada)",
      "Subir al Gran Cráter de Vulcano, con la advertencia de que el acceso ha sido varias veces regulado o cerrado por la actividad de las fumarolas",
      "Recorrer las islas **en velero**, la manera para la que estas islas parecen hechas (consulta la ficha de experiencia dedicada)",
      "Subir a pie en Alicudi por las escalinatas, las únicas vías de la isla",
      "Probar la malvasía de las Lipari en Salina, donde se produce",
    ],
    doveDormire:
      "Lipari como base, por las conexiones y la oferta más amplia; Salina por la calidad y la tranquilidad; Panarea si el presupuesto no es un tema; Stromboli por la subida y las erupciones. **En temporada alta las plazas se agotan**: son islas pequeñas con un número finito de camas. Quien va en velero duerme a bordo y resuelve el problema.",
    doveMangiare:
      "La cocina eolia es pobre y de mar: **pasta alla eoliana** con alcaparras, aceitunas y tomatitos, pescado azul, calamares, y el **pane cunzato**, una rebanada de pan con tomate, anchoas, alcaparras, orégano y queso, nacida como comida de los campesinos. Las **alcaparras de Salina** son un presidio y son distintas de todas las demás. Para beber, la **Malvasía de las Lipari** passita, que se bebe al final de la comida.",
    comeArrivare:
      "Aliscafi y ferries desde **Milazzo** (la conexión principal, aproximadamente una hora a Lipari), Mesina, Palermo y en temporada desde Nápoles. **Con el mar movido los trayectos se cancelan**, y es la variable que lo condiciona todo: quedarse bloqueado un día más es la norma.",
    comeSpostarsi:
      "Ferries y aliscafi internos entre las islas, frecuentes en temporada alta y escasos en baja. En las islas: scooter en Lipari y Salina, nada en Panarea (solo carritos eléctricos), **nada en Filicudi y Alicudi**, donde uno se mueve a pie y las mulas todavía llevan las mercancías.",
    periodoMigliore:
      "**junio y septiembre.** Julio y agosto están saturados: son islas pequeñas, y con la carga de agosto dejan de funcionar como el resto del año. De noviembre a marzo muchos alojamientos cierran y las conexiones se reducen al mínimo.",
    costi:
      "Los ferries pesan más de lo que se piensa, sobre todo haciendo varias islas. Panarea tiene precios de otra categoría; Filicudi y Alicudi son económicas a más no poder. La subida guiada al Stromboli tiene un coste fijo y es obligatoria por encima de cierta cota.",
    erroriDaEvitare: [
      "**Programar conexiones ajustadas**: con el mar movido los trayectos se cancelan y uno se queda bloqueado. No se reserva un vuelo para la misma noche del regreso de las islas",
      "Hacer solo Lipari y Vulcano porque son las más cómodas: Salina, Filicudi y Alicudi son la razón para venir hasta aquí",
      "Dar por hecha la subida al Stromboli: **el acceso por encima de cierta cota está regulado por Protección Civil y cambia con la actividad del volcán**, y en los últimos años ha sido varias veces limitado. Conviene informarse antes de partir",
      "Ir en agosto",
      "Llevar el coche: en estas islas es inútil y en gran parte imposible",
      "Subestimar el agua: varias islas tienen problemas hídricos y el agua llega con buques cisterna",
    ],
    confronti: [
      {
        titolo: "¿Eolias en velero o en ferry?",
        introduzione:
          "Las Eolias se pueden hacer de dos maneras muy distintas, y la elección cambia el viaje más que cualquier otra decisión. Además del medio cambian el lugar donde se duerme, lo que se ve y cuánto se depende de los horarios de otros.",
        opzioni: [
          {
            nome: "En velero",
            sintesi: "Se alquila un barco, con patrón o en autonomía si se tiene el título náutico, y se vive a bordo una semana, moviéndose entre las islas y durmiendo fondeado.",
            costo: "un barco de 8-10 personas repartido entre la tripulación cuesta a menudo menos que siete noches de hotel por cabeza en temporada alta, más patrón, carburante y caja común",
            durata: "7 días, el formato estándar del alquiler",
            pro: [
              "**Stromboli de noche desde el mar**: se está fondeado delante de la Sciara del Fuoco con el motor apagado y se miran las explosiones. Basta eso para justificar la fórmula",
              "Se llega a calas y puntos de fondeo inaccesibles desde tierra",
              "Ninguna dependencia de los horarios de los aliscafi y ningún problema de alojamiento en temporada alta",
              "Con una tripulación completa, el coste por cabeza es competitivo con los hoteles",
              "Se duerme fondeado, una experiencia en sí misma",
            ],
            contro: [
              "Espacios estrechos y vida en común: con las personas equivocadas, siete días son largos",
              "El mar decide: con viento fuerte se cambia el programa o se queda uno en puerto",
              "Confort limitado: agua racionada, duchas breves, literas",
              "Hace falta un patrón si no se tiene el título náutico, y hay que contarlo",
              "Quien se marea lo descubre el primer día",
            ],
            perChi: "Grupos de amigos, quien quiere ver Stromboli desde el mar, quien no soporta depender de los aliscafi.",
          },
          {
            nome: "Base en tierra y ferries",
            sintesi: "Se elige una base, normalmente Lipari o Salina, y se hacen las demás islas en el día con aliscafi y ferries.",
            costo: "alojamiento más billetes de las conexiones internas, que sumados pesan",
            durata: "5-7 días",
            pro: [
              "Comodidad: cama fija, ducha de verdad, equipaje que se queda quieto",
              "Se puede cambiar el programa según el tiempo sin consecuencias",
              "Accesible para todos, incluso para quien se marea",
              "Se conocen mejor las islas donde se duerme, porque se vive la noche",
            ],
            contro: [
              "**Se depende de los horarios**: los aliscafi del día limitan las islas alcanzables e imponen volver a partir por la tarde",
              "Con el mar movido los trayectos se cancelan y uno se queda parado",
              "En temporada alta los alojamientos se agotan y los precios suben",
              "Stromboli de noche desde el mar solo se puede hacer con excursiones organizadas con horario",
            ],
            perChi: "Quien viaja en pareja o en familia, quien no quiere vivir en un barco, quien tiene tiempos flexibles.",
          },
        ],
        raccomandazione:
          "Para un grupo con siete días: **el velero**, sin dudar. El coste por cabeza aguanta la comparación con los hoteles de temporada alta, se eliminan los problemas de alojamiento y de horarios, y se consigue lo que ninguna fórmula en tierra ofrece: estar fondeado delante del Stromboli de noche, con el motor apagado, mirando un volcán que explota cada pocos minutos. En pareja o con niños, base en **Salina** (más bonita y más tranquila que Lipari) y ferries, contando con una noche en Stromboli.",
      },
    ],
    miaEsperienza:
      "Las Eolias son el archipiélago italiano con la variedad más alta, y la manera de entenderlo es hacer cuatro islas en lugar de dos. Se pasa de Panarea, donde en verano atracan los yates y los precios son de Costa Esmeralda, a Alicudi, que tiene menos de cien habitantes, ninguna carretera (solo escalinatas de piedra) y las mercancías que todavía suben con mulas. Están a veinte millas de distancia. Pero el recuerdo más fuerte, sin comparación en Italia, es Stromboli visto desde el mar de noche. Uno se detiene fondeado delante de la **Sciara del Fuoco**, la ladera desnuda por la que rueda el material, apaga el motor y se queda a oscuras esperando. Cada pocos minutos el cráter escupe material incandescente que desciende por la pendiente hasta el agua, con un ruido sordo que llega un instante después. No hay iluminación ni espectáculo organizado: es un volcán que hace esto desde hace milenios, con un pueblo habitado debajo y las luces de las casas encendidas a pocos cientos de metros de la colada. Sobre la subida a pie, en cambio, hay que decir claro que **el acceso por encima de cierta cota está regulado y cambia con la actividad**: en los últimos años ha sido varias veces limitado, y conviene informarse antes de construir el viaje sobre ello.",
    esperienzeSlugs: ['stromboli-notte', 'eolie-in-vela'],
    tripSlugs: ['eolie-in-vela'],
    imageAlt: "Las Islas Eolias vistas desde el borde del Gran Cráter de Vulcano, con Lipari y Salina en el horizonte",
    immagine: '/images/italia/eolie.jpg',
  },
  {
    slug: 'sicilia-occidentale',
    paeseSlug: 'italia',
    ordine: 17,
    nome: "Sicilia occidental",
    tipologia: ['archeologia', 'città d\'arte', 'gastronomia'],
    giorniConsigliati: "7-8 días",
    visitataPersonalmente: true,
    introduzione:
      "La otra mitad de la isla: la árabe, normanda, fenicia y púnica. Palermo con la Capilla Palatina y la Catedral de Monreale, los templos de Segesta y Selinunte, las salinas de Trapani y Marsala, Erice a setecientos cincuenta metros sobre el mar, y las Egadas enfrente.",
    percheAndarci:
      "Monreale y la Capilla Palatina están entre las obras maestras de la Edad Media europea, construidas por reyes normandos con maestros árabes y mosaiquistas bizantinos, y el street food palermitano no tiene equivalentes en Italia. Segesta y Selinunte, además, tienen templos casi como Agrigento con una décima parte de la gente.",
    cosaVedere: [
      "La **Catedral de Monreale**, con seis mil metros cuadrados de mosaicos de oro y un claustro donde cada capitel es distinto",
      "La Capilla Palatina en Palermo, con el techo de muqarnas árabe sobre una estructura normanda: el itinerario árabe-normando es Patrimonio de la UNESCO",
      "Los mercados de Palermo, Ballarò, Vucciria y Capo: street food y teatro a la vez",
      "Segesta, con el templo dórico inacabado aislado en una colina y el teatro griego en lo alto",
      "Selinunte, el parque arqueológico más extenso de Europa, con los templos sobre el mar",
      "Erice a 750 metros, con la niebla que la cubre casi siempre, y Trapani con las salinas y los molinos",
      "Mozia, la isla fenicia en el Stagnone, con el camino púnico sumergido y el Efebo",
      "La Reserva del Zingaro y San Vito Lo Capo",
    ],
    cosaFare: [
      "Monreale a primera hora de la mañana, antes de los autocares (consulta la ficha de experiencia dedicada)",
      "Recorrer los mercados de Palermo comiendo: es la forma correcta de conocer la ciudad",
      "Las salinas de Trapani y Marsala al atardecer, cuando el agua se vuelve rosa",
      "Travesía a Mozia en el Stagnone, con la barca que cruza aguas poco profundas por donde pasaba un camino púnico",
      "Trekking en la Reserva del Zingaro, la primera reserva creada en Sicilia",
    ],
    doveDormire:
      "Palermo como base los primeros días: el casco histórico alrededor de Ballarò y la Kalsa es la elección más viva. Luego Trapani o Marsala para el oeste, o San Vito Lo Capo para el mar. Erice para una noche, para verla de noche cuando los autocares se han ido y queda la niebla.",
    doveMangiare:
      "Palermo es la capital italiana del street food: **arancine** (en femenino, aquí), **panelle** de garbanzos, **sfincione**, crocchè, y el **pane con la milza** (pan con bazo), para los valientes, para probar al menos una vez en los puestos históricos. Luego la pasta con sardinas, las sardinas a beccafico, el cuscús de pescado en **San Vito Lo Capo** y en Trapani, herencia directa del mundo árabe y norteafricano. Los dulces: cassata, cannoli y fruta martorana. El vino: Marsala en su zona, Grillo y Catarratto para los blancos.",
    comeArrivare:
      "Vuelo a Palermo Punta Raisi, o a Trapani Birgi para los de bajo coste. En ferry desde Nápoles, Génova y Civitavecchia. **Coche indispensable** para moverse fuera de Palermo.",
    comeSpostarsi:
      "Palermo se recorre a pie en el casco histórico, con el transporte público funcionando mal. Fuera hace falta coche: las autopistas unen Palermo, Trapani y Marsala, el resto es estatal. Para las Egadas, aliscafi desde Trapani y Marsala.",
    periodoMigliore:
      "**abril-junio y septiembre-octubre.** En verano el oeste es tórrido y las zonas arqueológicas no tienen sombra. El invierno es suave y excelente para Palermo y los yacimientos, con el mar fuera de juego. En septiembre está el Cous Cous Fest en San Vito Lo Capo.",
    costi:
      "En alojamientos y restaurantes cuesta bastante menos que la Sicilia oriental. Monreale tiene entradas separadas para catedral, claustro y terrazas; Segesta y Selinunte tienen entradas contenidas; los mercados no cuestan nada aparte de lo que se come.",
    erroriDaEvitare: [
      "Ir a Monreale a media jornada, cuando llegan los autocares: a las ocho y media se está dentro con diez personas",
      "Juzgar Palermo por la degradación de ciertas zonas y quedarse ahí: es la ciudad más estratificada de Italia y pide adaptarse",
      "Saltarse Segesta y Selinunte porque «ya está Agrigento»: Segesta tiene un templo aislado en una colina sin nadie alrededor, y Selinunte es el parque arqueológico más extenso de Europa",
      "Hacer Selinunte a mediodía en verano: es inmenso y sin sombra",
      "Esperar que Erice esté despejada: está a 750 metros y la niebla la cubre buena parte del año: forma parte del lugar",
      "Dejar objetos a la vista en el coche en las zonas urbanas",
    ],
    miaEsperienza:
      "La Sicilia occidental es la que se hace la segunda vez, y en muchos aspectos es la más fuerte. La **Catedral de Monreale** aguanta cualquier comparación: un edificio construido en el siglo XII por reyes normandos, con arquitectos y maestros árabes y mosaiquistas bizantinos, donde un Cristo Pantocrátor de casi veinte metros de alto mira hacia abajo desde un ábside enteramente revestido de oro. Alrededor, seis mil metros cuadrados de mosaicos cuentan el Antiguo y el Nuevo Testamento. Fuera hay un claustro con doscientas veintiocho columnillas, y **cada capitel es distinto de los demás**. Allí se entiende que Sicilia ha mantenido unidas todas las culturas que la conquistaron, en el mismo edificio y en el mismo momento. La segunda cosa es Palermo, que pide adaptarse: es caótica, en ciertas zonas degradada, ruidosa, y quien se irrita vuelve a casa diciendo que está sucia. Quien entra en el ritmo descubre los mercados, que por la mañana son un teatro, con los vendedores que gritan la abbanniata, una especie de pregón cantado, y donde se come de pie caminando con dos euros. Y luego Segesta: un templo dórico del siglo V, nunca terminado, en pie solo sobre una colina en medio de la nada, con el viento. Hay veinte personas.",
    esperienzeSlugs: ['monreale', 'street-food-palermo'],
    tripSlugs: ['sicilia-completa'],
    imageAlt: "El mirador almenado de Erice sobre un mar de nubes, con la costa trapanesa al fondo",
    immagine: '/images/italia/sicilia-occidentale.jpg',
  },
  {
    slug: 'isole-siciliane',
    paeseSlug: 'italia',
    ordine: 18,
    nome: "Egadas, Pantelaria y Pelagias",
    tipologia: ['isole', 'mare', 'natura'],
    giorniConsigliati: "4-5 días por archipiélago",
    visitataPersonalmente: true,
    introduzione:
      "Las otras islas sicilianas, que no son las Eolias: las **Egadas** frente a Trapani, con Favignana y las canteras de toba; **Pantelaria**, más cercana a África que a Sicilia, sin una playa de arena; y las **Pelagias**, con Lampedusa que está sobre la placa africana y tiene una de las playas más celebradas del Mediterráneo.",
    percheAndarci:
      "Son tres mundos distintos entre sí y de todo lo demás: Favignana es mar transparente y arqueología industrial de la almadraba, Pantelaria es roca lávica, viento y vino, Lampedusa es geológicamente África y tiene un mar que no se parece a nada en Italia.",
    cosaVedere: [
      "Favignana: Cala Rossa, Cala Azzurra, las **canteras de toba** que han excavado la isla y la antigua fábrica Florio de la almadraba",
      "Levanzo, con la **Gruta del Genovese** y las pinturas rupestres del Paleolítico",
      "Marettimo, la más salvaje de las Egadas, sin casi turismo",
      "Pantelaria: el **Lago Specchio di Venere**, los dammusi, los jardines panteschi y las grutas de vapor naturales",
      "La Montagna Grande y el Arco del Elefante en Pantelaria",
      "Lampedusa: la **Spiaggia dei Conigli**, reserva natural donde desova la tortuga Caretta caretta, con acceso regulado",
      "Linosa, volcánica y negra, con doscientos habitantes",
    ],
    cosaFare: [
      "Recorrer Favignana en bicicleta: es la forma correcta, y la isla es llana",
      "Baño nocturno en el Lago Specchio di Venere en Pantelaria, con el barro termal en la orilla",
      "Visitar una bodega pantesca, donde la vid se cultiva **en hoyos excavados en el terreno** para protegerla del viento, una técnica reconocida como patrimonio inmaterial de la UNESCO",
      "Snorkel y buceo: en las Egadas y en las Pelagias están entre los mejores de Italia",
      "La Gruta del Genovese en Levanzo, con los grabados de hace doce mil años",
    ],
    doveDormire:
      "Favignana tiene la oferta más amplia y los precios más asequibles. En Pantelaria se duerme en los **dammusi**, las casas de piedra lávica con tejado en cúpula, la fórmula correcta. Lampedusa tiene una oferta estacional que cierra casi del todo en invierno. **En las tres, en agosto las plazas se agotan.**",
    doveMangiare:
      "En las Egadas el atún, en todas sus conservas: la almadraba de Favignana fue la más importante del Mediterráneo, y la **mattanza** se practicaba hasta hace pocas décadas. En Pantelaria el **pesto pantesco**, las alcaparras, que aquí son un presidio y se recogen a mano, y el **passito de Pantelaria**, uno de los grandes vinos dulces del mundo. En Lampedusa el pescado, y una cocina que acusa la cercanía de Túnez.",
    comeArrivare:
      "**Egadas:** aliscafo desde Trapani, veinte minutos a Favignana. **Pantelaria:** avión desde Trapani o Palermo (en temporada también desde Milán y Roma), o ferry nocturno desde Trapani, seis horas. **Lampedusa:** avión desde Palermo o Catania, o ferry desde Porto Empedocle, ocho horas. Son las islas italianas más lejanas de tierra firme.",
    comeSpostarsi:
      "Favignana en bicicleta o scooter. **Pantelaria requiere coche**: es grande, montañosa y los puntos de interés están repartidos. Lampedusa en scooter o coche, pero es pequeña.",
    periodoMigliore:
      "**junio y septiembre**, como todas las islas menores. En Pantelaria la temporada es más larga y la isla funciona también en primavera y otoño gracias al vino y al termalismo. Lampedusa de noviembre a marzo cierra casi del todo.",
    costi:
      "La partida principal son los transportes, y no es poca cosa: Pantelaria y Lampedusa requieren un vuelo o un ferry largo. **La Spiaggia dei Conigli en Lampedusa tiene acceso regulado y con cupo** por la nidificación de las tortugas: conviene informarse antes.",
    erroriDaEvitare: [
      "Ir a Pantelaria buscando playas de arena: **no las hay**. Se entra en el agua desde las rocas, y quien no lo sabe se queda decepcionado",
      "Subestimar el viento en Pantelaria: es una constante y puede ser fuerte durante días",
      "Presentarse en la Spiaggia dei Conigli sin conocer las reglas de acceso, que tiene cupo",
      "Programar conexiones ajustadas con los ferries a Pantelaria y Lampedusa, que con el mar movido no salen",
      "Hacer Favignana en coche: es llana, pequeña y el coche es un estorbo: la bici es el medio correcto",
      "Ir a Lampedusa fuera de temporada esperando servicios: de noviembre a marzo la isla se detiene",
    ],
    confronti: [
      {
        titolo: "Favignana, Pantelaria o Lampedusa",
        introduzione:
          "Se juntan porque todas son «islas sicilianas», pero son tres viajes del todo distintos en geología, accesibilidad, coste y tipo de vacaciones.",
        opzioni: [
          {
            nome: "Favignana y las Egadas",
            sintesi: "Veinte minutos de aliscafo desde Trapani: isla llana, mar transparente, canteras de toba y la arqueología industrial de la almadraba Florio.",
            costo: "el más bajo de los tres, tanto para llegar como para estar",
            durata: "3-4 días",
            pro: [
              "Accesibilidad: se llega en veinte minutos desde Trapani, incluso en el día",
              "Se recorre en bicicleta: la isla es llana y pequeña",
              "Cala Rossa y Cala Azzurra tienen un agua que aguanta cualquier comparación",
              "Las **canteras de toba** son un escenario que no se encuentra en otro sitio: la isla ha sido excavada, y hoy hay jardines hipogeos dentro de las canteras",
              "Levanzo con las pinturas rupestres del Paleolítico está a veinte minutos",
            ],
            contro: [
              "Muy concurrida en julio y agosto: es la isla de los sicilianos y en esos meses se nota",
              "Pocas playas de arena, se entra en el agua desde los escollos",
              "Poca vida más allá del mar",
            ],
            perChi: "Quien tiene pocos días, quien viene de la Sicilia occidental, quien quiere gastar poco.",
          },
          {
            nome: "Pantelaria",
            sintesi: "Más cercana a África que a Sicilia: isla volcánica de roca negra, sin playas de arena, con los dammusi, el viento constante y una viticultura heroica.",
            costo: "medio-alto, pero sin turismo de masas",
            durata: "5-7 días",
            pro: [
              "No se parece a ninguna otra isla italiana: bancales de piedra lávica, **jardines panteschi** (muros circulares que protegen un solo árbol), grutas de vapor naturales",
              "La **vid en bajo pantesca** es patrimonio inmaterial de la UNESCO: se cultiva en hoyos excavados en el terreno para protegerla del viento",
              "El passito y las alcaparras están entre los mejores productos de Italia",
              "El Lago Specchio di Venere con el barro termal y el baño nocturno",
              "Turismo de regreso, no de masas: se vuelve",
            ],
            contro: [
              "**Ninguna playa de arena**: se entra en el agua desde las rocas, y para muchos es un problema serio",
              "El viento es una constante y puede soplar fuerte durante días",
              "Hace falta coche: la isla es grande y montañosa",
              "Conexiones menos frecuentes y más caras",
            ],
            perChi: "Quien busca una isla de carácter en lugar de playas, quien ama el vino, quien vuelve.",
          },
          {
            nome: "Lampedusa y las Pelagias",
            sintesi: "La isla más al sur de Italia, geológicamente sobre la **placa africana**, con la Spiaggia dei Conigli y un mar que no se parece a nada en el resto del país.",
            costo: "alto, sobre todo para llegar",
            durata: "5-7 días",
            pro: [
              "El mar es el más bello de Italia: agua transparente sobre fondos claros, con gradaciones que se ven desde arriba",
              "La **Spiaggia dei Conigli** es reserva natural y lugar de nidificación de la Caretta caretta",
              "Geológicamente es África: la vegetación, la roca y el paisaje no son mediterráneos en el sentido italiano",
              "Linosa, volcánica y negra, a pocas millas, con doscientos habitantes",
            ],
            contro: [
              "La más difícil de alcanzar: vuelo u ocho horas de ferry desde Porto Empedocle",
              "Precios altos en temporada alta, con la temporada concentrada en tres meses",
              "De noviembre a marzo la isla se detiene casi del todo",
              "El acceso a la Spiaggia dei Conigli tiene cupo y está regulado",
              "Isla árida: quien busca verde no lo encuentra",
            ],
            perChi: "Quien pone el mar en primer lugar y acepta el coste y la distancia para tenerlo al máximo nivel.",
          },
        ],
        raccomandazione:
          "Para el mar puro y sin compromisos, **Lampedusa**: es el más bello de Italia y vale el viaje, siempre que se vaya en junio o en septiembre y se cuente con el coste. Para una isla que tenga carácter propio y una cultura que entender, **Pantelaria**, sabiendo que no hay playas de arena. **Favignana** es la elección correcta para quien ya está en la Sicilia occidental y tiene tres días: cuesta poco, se llega en veinte minutos y no decepciona.",
      },
    ],
    miaEsperienza:
      "Estas tres islas explican bien lo amplia que es la palabra «Sicilia». Favignana es la más sencilla y la más inmediata: se llega en veinte minutos desde Trapani, se alquila una bici y en un día se ha recorrido toda, con el agua de Cala Rossa de un turquesa que no parece italiano. Lo que la hace distinta de las otras islas es la toba: durante siglos aquí se ha excavado piedra de construcción, y el resultado es un paisaje de canteras a cielo abierto, con paredes verticales amarillas y, dentro de algunas, jardines hipogeos plantados en el fondo. Pantelaria es lo opuesto exacto y la isla que más interesante he encontrado: nada de arena, roca negra por todas partes, viento que no cesa nunca, y una viticultura en la que las vides crecen dentro de hoyos excavados en el terreno para resguardarlas, una técnica tan particular que ha sido reconocida patrimonio inmaterial por la UNESCO. El baño nocturno en el Specchio di Venere, con el barro termal, es una de esas cosas que nadie cuenta antes. Lampedusa, por último, tiene el mar más bello de Italia, sin discusión; pero es geológicamente África, árida, lejana y cara, y se va por eso y solo por eso.",
    esperienzeSlugs: ['passito-pantelleria'],
    tripSlugs: ['isole-siciliane'],
    imageAlt: "El agua turquesa y los escollos bajos de Lido Burrone en Favignana, Islas Egadas",
    immagine: '/images/italia/isole-siciliane.jpg',
  },
]
