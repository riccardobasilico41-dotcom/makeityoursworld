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
    luoghi: [
      {
        "nome": "Tre Cime di Lavaredo",
        "testo": "Tres torres de dolomía que surgen de una meseta de gravilla: el símbolo de los Dolomitas. El recorrido circular alrededor de la base pasa por los refugios Auronzo, Lavaredo y Locatelli, con la cara norte justo encima de la cabeza.",
        "come": "Desde Cortina o Dobbiaco se llega a Auronzo o Misurina y se sube en coche por la carretera de peaje hasta el Rifugio Auronzo (2.320 m), donde empieza el recorrido. También hay un autobús lanzadera desde Misurina.",
        "quando": "De finales de primavera al otoño, mientras la carretera está abierta: las fechas se consultan en el portal de reservas. Llegar a la apertura o a última hora de la tarde: en las horas centrales de julio y agosto el sendero es una fila continua.",
        "tempo": "3-4 horas para el recorrido completo (unos 10 km)",
        "costo": "40 euros por coche, 2026; la reserva online es obligatoria y el ticket vale 12 horas desde la hora elegida. El autobús lanzadera de Misurina al Rifugio Auronzo cuesta 10 euros por persona y día",
        "consiglio": "Hice el recorrido en agosto y parecía una fila india: en septiembre se camina con un tercio de la gente. Si se sale temprano, conviene ir en sentido horario y subir al Locatelli con la luz lateral de la mañana."
      },
      {
        "nome": "Lago di Braies",
        "testo": "Uno de los lagos alpinos más fotografiados del Alto Adigio, de un verde esmeralda, a los pies de la Croda del Becco. El sendero alrededor del lago es fácil y llano. De aquí parte también la Alta Via 1.",
        "come": "Desde Dobbiaco se toma la carretera del valle de Braies hasta el aparcamiento del lago. En verano el acceso en coche está limitado y en las horas centrales requiere reserva: fechas y horarios en la web del Ayuntamiento de Braies. También hay autobuses y lanzaderas desde Dobbiaco y Villabassa.",
        "quando": "De junio a octubre. Al amanecer o a última hora de la tarde se tiene el lago sin multitudes; a mediodía en verano está lleno.",
        "tempo": "1 hora para rodear el lago, 3-4 horas con el sendero hasta la Forcella del Lago",
        "consiglio": "Quien duerme en el valle y va al lago al amanecer o por la tarde vive otra experiencia. Evitar alquilar la barca a mediodía: la cola es larga y el lago está lleno."
      },
      {
        "nome": "Seceda",
        "testo": "Una cresta de hierba a unos 2.500 metros que de golpe se rompe en paredes verticales: el paisaje de todas las postales de Val Gardena. Desde la cima se ven las Odle y, al otro lado, todas las Dolomitas.",
        "come": "Desde Ortisei, el teleférico sube a Furnes y después a Seceda (2.500 m). Desde la cima se puede bajar a pie hacia Santa Cristina pasando por el Rifugio Firenze.",
        "quando": "De junio a octubre, con los teleféricos abiertos en verano. Mejor el primer viaje de la mañana: las nubes suelen subir a media mañana.",
        "tempo": "media jornada; una jornada con el descenso a pie",
        "consiglio": "La bajada a pie hacia Santa Cristina cuesta en las piernas, pero deja atrás la multitud de la llegada del teleférico. Llevar una chaqueta: en la cima hace viento incluso en agosto."
      },
      {
        "nome": "Alpe di Siusi",
        "testo": "La meseta alpina más extensa de Europa, con prados de altura, cabañas y el Sassolungo y el Sciliar al fondo. Es uno de los lugares más fáciles de las Dolomitas: senderos anchos, poco desnivel, ideal para familias y paseos largos.",
        "come": "Desde Siusi allo Sciliar o desde Ortisei se sube en telecabina hasta Compaccio o Mont Seuc. En la meseta los coches particulares no pueden subir casi todo el día: se circula a pie, en autobús o en bicicleta.",
        "quando": "De junio a octubre. A finales de septiembre los alerces se ponen amarillos.",
        "tempo": "una jornada",
        "consiglio": "Con las telecabinas se llega directamente a la altura: se puede caminar en llano durante horas y volver con el último viaje. Comprobar el horario de la última bajada."
      },
      {
        "nome": "Cinque Torri",
        "testo": "Un grupo de cinco torres de roca cerca de Cortina, donde durante la Primera Guerra Mundial se combatió a pocos metros del enemigo. Hoy es un museo al aire libre con trincheras, galerías y posiciones restauradas que se pueden recorrer a pie.",
        "come": "Desde el Paso Falzarego o Bai de Dones, con el telesilla hasta el Rifugio Scoiattoli, y luego se camina entre las torres y el museo. Cortina está cerca en coche.",
        "quando": "De finales de junio a mediados de octubre, con los remontes abiertos.",
        "tempo": "3-4 horas con la visita al museo al aire libre",
        "consiglio": "Es una de las pocas excursiones fáciles con la historia dentro del paisaje: llegar sabiendo la historia de la Primera Guerra Mundial hace las torres mucho más interesantes."
      },
      {
        "nome": "Lago di Sorapis",
        "testo": "Un lago de montaña en forma de herradura, de un turquesa lechoso por la harina glaciar, bajo las paredes del Sorapis. El sendero cruza cornisas equipadas con cables.",
        "come": "Desde el Paso Tre Croci, a pocos kilómetros de Cortina, sale el sendero 215, el más transitado. En el tramo final hay pasos expuestos con cables de seguridad; hacen falta botas de montaña. En el lago está prohibido bañarse y acampar.",
        "quando": "De finales de junio a septiembre. Antes, en los tramos de sombra todavía hay nieve.",
        "tempo": "5-6 horas ida y vuelta",
        "consiglio": "Salir temprano: el sendero es estrecho y en temporada alta se hace cola justo en los cables. El lago es lo mejor al final, pero conviene llegar cuando aún haya luz."
      },
      {
        "nome": "Pale di San Martino",
        "testo": "El grupo del Trentino que parece la luna: una meseta de roca a gran altura, sin árboles ni prados, rodeada de agujas. Para la calidad de su paisaje es uno de los lugares menos concurridos de los Dolomitas.",
        "come": "Desde San Martino di Castrozza, los teleféricos Colverde y Rosetta llevan al Rifugio Rosetta. Desde allí se camina por la meseta.",
        "quando": "De finales de junio a finales de septiembre. El tiempo cambia rápido: salir temprano por la mañana.",
        "tempo": "una jornada",
        "consiglio": "En la meseta no hay puntos de referencia y con niebla es fácil perderse: llevar un mapa o el track GPS descargado."
      },
      {
        "nome": "Marmolada y Lago di Fedaia",
        "testo": "La cima más alta de los Dolomitas (3.343 m) con su glaciar, que retrocede cada año. En julio de 2022 el desprendimiento de una parte del glaciar causó once muertos: hoy la subida a la cima exige guía y atención al tiempo.",
        "come": "Desde el Passo Fedaia o Malga Ciapela, con el teleférico hasta Punta Rocca. El lago de Fedaia, más abajo, se rodea en una hora.",
        "quando": "De junio a septiembre; las condiciones del glaciar hay que comprobarlas cada temporada.",
        "tempo": "media jornada con teleférico; el lago en una hora",
        "consiglio": "Quien quiera el glaciar debe ir con un guía de montaña e informarse de las condiciones antes de salir. Para una excursión ligera basta el lago de Fedaia."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Subir con el primer teleférico de Ortisei a la Seceda y caminar por la cresta hasta la Cima Pana.",
          "Bajar a pie hacia el Rifugio Firenze y comer canederli y sopa de cebada.",
          "Por la tarde seguir hasta Santa Cristina y volver en autobús a Ortisei.",
          "Cena en Ortisei con speck, Schlutzkrapfen y una copa de Lagrein."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1, Alpe di Siusi: subir en telecabina desde Siusi, caminar por la meseta todo el día hasta una cabaña para comer, volver con el último viaje.",
          "Día 2, Seceda y Val Gardena: salir a la apertura del teleférico, caminar hasta el Rifugio Firenze y bajar a Santa Cristina por la tarde.",
          "Día 3, Passo Gardena y Sella: subir en teleférico desde el paso y hacer un recorrido corto por la meseta del Sella; por la noche, cena en una cabaña."
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Día 1: llegada a Cortina o Dobbiaco, tarde en el Lago di Braies para rodear el lago.",
          "Día 2: Tre Cime di Lavaredo con el peaje reservado con antelación, saliendo a la apertura.",
          "Día 3: Cinque Torri y museo de la Primera Guerra Mundial, después Passo Falzarego.",
          "Día 4: Lago di Sorapis desde el Passo Tre Croci, con salida temprano.",
          "Día 5: Alpe di Siusi o Seceda, bajando al Val Gardena para el regreso."
        ]
      }
    ],
    zone: [
      {
        "nome": "Val Gardena (Ortisei, Santa Cristina, Selva)",
        "perChi": "primer viaje, familias, quien quiere servicios",
        "testo": "El polo mejor equipado: muchos remontes, autobuses de valle, excelentes restaurantes. En temporada alta es cara y está llena, y el fondo del valle está edificado. Los teleféricos llevan enseguida a Seceda y a la Alpe di Siusi."
      },
      {
        "nome": "Val Badia y Alta Badia (Corvara, La Villa, San Cassiano)",
        "perChi": "quien repite y quiere caminar de verdad",
        "testo": "Cultura ladina viva, muy buena cocina, base para el Sella y para el Parque Fanes-Sennes-Braies. Un escalón más barata que Gardena. Los pasos en verano están llenos de motos y bicicletas."
      },
      {
        "nome": "Cortina d'Ampezzo y Misurina",
        "perChi": "Tre Cime, Cinque Torri, Sorapis, historia de la Primera Guerra Mundial",
        "testo": "Cerca de los lugares más conocidos, pero cara y con la mundanidad de una localidad de lujo. Tras los Juegos Olímpicos de 2026 conviene comprobar qué está abierto y qué obras siguen. Misurina es más pequeña, junto al lago, y está más cerca de las Tre Cime."
      },
      {
        "nome": "Val di Fassa y San Martino di Castrozza",
        "perChi": "quien quiere gastar menos",
        "testo": "Precios más bajos que en el Alto Adigio con panoramas equivalentes, con Catinaccio, Marmolada y las Pale. Servicios y transporte público menos cuidados, con más distancia entre los polos."
      }
    ],
    sapori: [
      {
        "nome": "Canederli",
        "testo": "Bolas de pan duro con speck, en caldo o secas con mantequilla derretida. El plato que se come en todos los refugios, a menudo hecho esa misma mañana."
      },
      {
        "nome": "Schlutzkrapfen",
        "testo": "Ravioles de masa de centeno rellenos de espinacas y ricota, aderezados con mantequilla y parmesano. Típicos del Alto Adigio, se encuentran en todas las cabañas y trattorias de valle."
      },
      {
        "nome": "Polenta, queso y setas",
        "testo": "Polenta con queso fundido y setas o con salchicha: la comida de refugio en la vertiente del Véneto y del Trentino."
      },
      {
        "nome": "Kaiserschmarrn",
        "testo": "Tortilla dulce troceada, con azúcar glas y compota de arándanos rojos. El postre de altura después de una jornada larga."
      },
      {
        "nome": "Sopa de cebada",
        "testo": "Caldo espeso de cebada, verduras y speck: el plato de refugio para recuperarse del esfuerzo."
      },
      {
        "nome": "Strudel",
        "testo": "El postre de manzana y pasas del Alto Adigio, mejor caliente con salsa de vainilla. Cada cabaña tiene el suyo."
      }
    ],
    attenzioni: [
      "Reservar en línea el acceso en coche a las Tre Cime y a Braies antes de salir: sin reserva la carretera o el aparcamiento pueden estar cerrados y hay que volver atrás. Comprobar fechas y horarios en la web del gestor.",
      "Las tormentas de tarde son frecuentes en verano: hay que estar en el refugio o en el valle antes de las 15. Consultar el boletín meteorológico del Alto Adigio o del Véneto la víspera y por la mañana.",
      "Refugios: para julio y agosto reservar con mucha antelación, llevar efectivo y el saco sábana, que piden muchos refugios.",
      "En algunas regiones el rescate en montaña se paga; conviene un seguro con cobertura para trekking y rescate en helicóptero.",
      "En las vías ferratas usar un kit completo homologado (casco, arnés, disipador) y no ir solo sin experiencia.",
      "Aparcamiento: en los puntos más conocidos en verano las plazas se acaban a primera hora. Muchas carreteras de los puertos tienen limitaciones horarias o prohibiciones para motos ciertos días: mirar las señales."
    ],
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
    luoghi: [
      {
        "nome": "Sellaronda",
        "testo": "El circuito de esquí alrededor del macizo del Sella: cuatro pasos (Gardena, Sella, Pordoi, Campolongo) y cuatro valles (Val Gardena, Val di Fassa, Arabba, Alta Badia). El circuito, de unos 40 km, alterna pistas y remontes, con pistas fáciles y medias casi siempre, y vistas a los Dolomitas durante todo el recorrido.",
        "come": "Se sale desde cualquier pueblo alrededor del Sella (Selva, Canazei, Arabba, Corvara) con el forfait Dolomiti Superski. El sentido horario está señalizado con carteles naranjas y el antihorario con carteles verdes.",
        "quando": "En temporada, de diciembre a mediados de abril. Salir temprano y llegar al último remonte antes del cierre: quien llega tarde tiene que volver en taxi.",
        "tempo": "una jornada entera: 4-5 horas esquiando más pausas",
        "costo": "Las tarifas del forfait Dolomiti Superski cambian cada temporada: consultarlas en la web oficial antes de salir",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "Comprobar los horarios del último remonte de cada paso esa misma mañana y llevar algo de comer en el bolsillo."
      },
      {
        "nome": "Alta Badia y Gran Risa",
        "testo": "El Val Badia ladino tiene pistas anchas y bien cuidadas y una cocina entre las mejores de los Alpes. La Gran Risa, en La Villa, es la pista de Copa del Mundo de eslalon gigante: larga y empinada.",
        "come": "Se duerme en Corvara, La Villa o San Cassiano y se sube con los remontes directamente desde el pueblo. Con el forfait Dolomiti Superski se llega también al Sellaronda.",
        "quando": "De diciembre a abril. Enero y marzo son los mejores meses por nieve y precios.",
        "tempo": "2-3 días para conocer la zona",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "Comer en un refugio de altura y reservar en temporada alta: los mejores se quedan sin mesas pronto."
      },
      {
        "nome": "Cortina d'Ampezzo",
        "testo": "La localidad olímpica de 2026, con tres áreas principales: Tofane, Faloria-Cristallo y Cinque Torri-Lagazuoi. Pistas de nivel intermedio a las más exigentes, con las paredes de las Tofane de fondo. La zona del Lagazuoi permite también el recorrido esquiable de la Gran Guerra.",
        "come": "Se duerme en Cortina y se toma la telecabina o la lanzadera hasta el remonte de salida; los skibus de valle unen las tres áreas.",
        "quando": "De diciembre a abril. En las semanas posteriores a la Epifanía y a finales de febrero bajan los precios.",
        "tempo": "3-4 días",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "Tras los Juegos de 2026 se han cambiado algunos remontes y pistas: consultar el mapa actualizado antes de organizar las jornadas."
      },
      {
        "nome": "Cervinia y Zermatt",
        "testo": "Una zona esquiable de alta montaña: desde Breuil-Cervinia (unos 2.050 m) se sube hasta el Plateau Rosà (unos 3.480 m) y se esquía también en verano en el glaciar. Con el forfait internacional se cruza la frontera con Suiza y se baja a Zermatt, bajo el Cervino.",
        "come": "Desde Aosta se va a Breuil-Cervinia en coche o en autobús. Los remontes salen del pueblo. Para Zermatt hace falta el forfait ampliado.",
        "quando": "De noviembre a mayo para tener nieve en altura; la conexión con Zermatt depende del tiempo y del viento.",
        "tempo": "3-5 días; el recorrido Cervinia-Zermatt ocupa una jornada entera",
        "url": "https://www.cervinia.it/",
        "consiglio": "Comprobar el último remonte para volver desde Suiza: si se pierde el último viaje, se regresa en taxi o tren con un coste alto."
      },
      {
        "nome": "Courmayeur y Skyway Monte Bianco",
        "testo": "Courmayeur está a los pies del Mont Blanc. El teleférico Skyway sube hasta la Punta Helbronner (3.466 m): desde allí se ve el macizo de cerca. Las pistas son más cortas que en las grandes zonas, pero hay itinerarios fuera de pista famosos, como la Vallée Blanche, solo con guía.",
        "come": "A Courmayeur se llega en coche o autobús desde Aosta. El Skyway sale de Pontal d'Entrèves, a pocos minutos del centro.",
        "quando": "Diciembre-abril. Para subir con el Skyway elegir días despejados: con nubes no hay panorama.",
        "tempo": "2-3 días; el Skyway requiere media jornada",
        "url": "https://www.montebianco.com/",
        "consiglio": "Quien quiera la Vallée Blanche debe reservar un guía de montaña con antelación y comprobar las condiciones de las grietas."
      },
      {
        "nome": "Via Lattea (Sestriere y Sauze d'Oulx)",
        "testo": "Una gran zona esquiable del Piamonte que une Sestriere, Sauze d'Oulx, Sansicario, Cesana y Claviere, con un paso a Francia en Montgenèvre. Sestriere acogió los Juegos Olímpicos de 2006. Las pistas son variadas y el carácter es menos lujoso que en los Dolomitas.",
        "come": "Desde Turín en coche por el valle de Susa. Hasta Oulx también hay tren, y luego autobús a Sauze o Sestriere.",
        "quando": "De diciembre a abril. Altitudes más bajas que Cervinia: la nieve es menos segura a principio y final de temporada.",
        "tempo": "3-5 días",
        "url": "https://www.vialattea.it/",
        "consiglio": "Para quien llega desde Turín es la opción más cómoda para un fin de semana: se puede hacer sin pasar dos noches largas en la carretera."
      },
      {
        "nome": "Livigno",
        "testo": "Zona extraaduanera en Valtellina, a 1.816 m, con una de las nieves más fiables de los Alpes italianos. Pistas anchas y tranquilas, buenas para principiantes y familias, y un gran snowpark. Aquí el combustible, el alcohol y los perfumes cuestan menos.",
        "come": "Desde Milán en coche, pasando por Bormio y el Paso de Eira, o desde Suiza por el túnel Munt la Schera. Comprobar el estado de las carreteras en invierno.",
        "quando": "De finales de noviembre a abril.",
        "tempo": "3-5 días",
        "url": "https://www.livigno.eu/",
        "consiglio": "A la salida hay controles aduaneros con límites de cantidad de alcohol, tabaco y combustible: informarse antes de comprar."
      },
      {
        "nome": "Marmolada",
        "testo": "Una larga pista baja del glaciar, de Punta Rocca a Malga Ciapela, con un desnivel muy fuerte. Es un descenso de alta montaña, abierto según las condiciones de nieve.",
        "come": "Desde Malga Ciapela, en el Alto Agordino, un teleférico en tres tramos sube hasta Punta Rocca. Desde allí se baja siguiendo la pista. Los remontes forman parte de Dolomiti Superski.",
        "quando": "De diciembre a abril, con nieve a menudo buena en primavera. Los remontes dependen del tiempo.",
        "tempo": "media jornada para el descenso",
        "url": "https://www.dolomitisuperski.com/",
        "consiglio": "El descenso es largo: comprobar condiciones y horario del último viaje y llevar algo de líquido."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "A primera hora estar ya en el teleférico de Corvara o de Selva, con el forfait Dolomiti Superski y el mapa en el bolsillo.",
          "Hacer el Sellaronda en sentido horario o antihorario, parando a comer algo rápido en un refugio a mediodía.",
          "Comprobar los horarios del último remonte de cada paso y volver antes del cierre."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1, Alta Badia: pistas anchas y fáciles para calentar, comida en refugio, Gran Risa por la tarde.",
          "Día 2, Sellaronda en una jornada, saliendo temprano.",
          "Día 3, Val Gardena o Cortina para cambiar de ambiente, con regreso el mismo día o por la noche."
        ]
      },
      {
        "titolo": "7 días",
        "tappe": [
          "Día 1: jornada de calentamiento por la zona, tarde libre y sin prisas.",
          "Día 2: Sellaronda en una jornada.",
          "Día 3: Marmolada con el descenso desde el glaciar.",
          "Día 4: Cortina y Lagazuoi, con el recorrido de la Gran Guerra.",
          "Día 5: día libre, o clase o esquí de fondo.",
          "Día 6: Alta Badia y Gran Risa.",
          "Día 7: última bajada por la mañana, regreso por la tarde."
        ]
      }
    ],
    zone: [
      {
        "nome": "Corvara y Alta Badia",
        "perChi": "quien quiere el Sellaronda desde la cama",
        "testo": "Remontes junto a los pueblos, excelentes refugios, cultura ladina. El ski-in/ski-out está muy extendido y los precios son altos en temporada alta. Por la noche es tranquila."
      },
      {
        "nome": "Selva di Val Gardena",
        "perChi": "quien busca vida nocturna y servicios",
        "testo": "Pueblo animado, con tiendas y locales, y el Sellaronda al alcance de un paseo. Más concurrida que Alta Badia y más cara. El Passo Gardena queda justo encima."
      },
      {
        "nome": "Breuil-Cervinia",
        "perChi": "esquiadores que quieren nieve garantizada",
        "testo": "Altitud elevada y pistas anchas, conexión con Zermatt. El pueblo está hecho para esquiar y tiene poco encanto. El viento y la niebla pueden cerrar los remontes altos."
      },
      {
        "nome": "Livigno",
        "perChi": "familias, principiantes, quien quiere ahorrar en algunas compras",
        "testo": "Nieve fiable, pistas fáciles y precios más bajos en bienes gracias a la zona extraaduanera. Lejos de las otras grandes estaciones: se llega solo en coche o con autobuses largos."
      }
    ],
    sapori: [
      {
        "nome": "Canederli y casunziei",
        "testo": "Canederli por toda la zona dolomítica; los casunziei son los ravioles en media luna de Cortina, rellenos de remolacha y aderezados con mantequilla y semillas de amapola."
      },
      {
        "nome": "Polenta concia y fondue valdostana",
        "testo": "En el Valle de Aosta, polenta con queso fundido y fondue con fontina, a menudo con pan tostado. Se comen en los refugios y restaurantes de Courmayeur y Cervinia."
      },
      {
        "nome": "Pizzoccheri",
        "testo": "Tallarines de trigo sarraceno con repollo, patatas y queso Casera. Típicos de Valtellina y Livigno."
      },
      {
        "nome": "Gulasch y sopa de cebada",
        "testo": "Platos calientes de refugio en el Alto Adigio, perfectos para recuperarse a mitad de jornada esquiando."
      },
      {
        "nome": "Vin brulé",
        "testo": "Vino tinto caliente con especias y cítricos. Se bebe en las cabañas junto a la pista para entrar en calor, pero el alcohol y el esquí no se llevan bien."
      },
      {
        "nome": "Kaiserschmarrn",
        "testo": "Tortilla dulce troceada con mermelada de arándanos rojos, el postre de muchos refugios altoatesinos."
      }
    ],
    attenzioni: [
      "Por ley, quien practica esquí de travesía, fuera de pista o raquetas en terreno nevado fuera de las pistas preparadas debe llevar ARTVA, pala y sonda. El casco es obligatorio para menores de 18 años y el seguro de responsabilidad civil es obligatorio para todos los esquiadores.",
      "En muchas carreteras de montaña es obligatorio llevar cadenas o neumáticos de invierno, normalmente del 15 de octubre al 15 de abril. Comprobar la ordenanza de la carretera concreta: las fechas cambian.",
      "El rescate en pista y fuera de pista en Italia puede ser de pago, y el helicóptero es muy caro. Comprobar qué cubre el forfait y contratar un seguro.",
      "En Navidad, Fin de Año y en las semanas de febrero los precios suben mucho y las pistas están muy llenas. Reservar con tiempo o elegir enero después de la Epifanía o marzo.",
      "En las estaciones más bajas la nieve natural no está garantizada: consultar webcams y parte de nieve antes de reservar.",
      "En Cervinia el viento y la niebla cierran con frecuencia los remontes altos: tener un plan B a menor altura. En Livigno hay controles aduaneros a la salida."
    ],
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
    luoghi: [
      {
        "nome": "Coliseo, Foro Romano y Palatino",
        "testo": "El anfiteatro Flavio, inaugurado en el año 80 d.C., acogía a decenas de miles de espectadores. Con la misma entrada se visitan el Foro Romano, el corazón político de la ciudad antigua, y el Palatino, la colina de los palacios imperiales.",
        "come": "Metro B hasta Colosseo. Todas las entradas son nominativas y en el acceso se muestra el documento. La entrada estándar vale 24 horas, con un acceso al Coliseo (sin arena) y uno al Foro y al Palatino; las Full Experience (arena, subterráneos, ático) valen dos días consecutivos.",
        "quando": "Cerrado el 25 de diciembre y el 1 de enero. Del 25 de octubre de 2026 al 28 de febrero de 2027 abre a las 8:30 y cierra a las 16:30, última entrada a las 15:30; en verano el horario es más largo, en la web oficial. Primera franja de la mañana o últimas horas para evitar colas; en verano el Foro es muy caluroso y sin sombra.",
        "tempo": "media jornada, 3-4 horas para todo",
        "costo": "tarifas en el canal oficial; entrada gratuita el primer domingo de cada mes, el 25 de abril, el 2 de junio y el 4 de noviembre",
        "url": "https://colosseo.it/",
        "consiglio": "Comprar solo por el canal oficial y con antelación para las mejores franjas. Visitar primero el Foro y el Palatino si hace calor, y el interior del Coliseo en las horas más frescas."
      },
      {
        "nome": "Museos Vaticanos y Capilla Sixtina",
        "testo": "Kilómetros de salas con colecciones de arte antiguo y renacentista: la Galería de los Mapas, las Estancias de Rafael y, al final, la Capilla Sixtina con los frescos de Miguel Ángel. El recorrido es largo y obligado, con multitud continua.",
        "come": "Metro A hasta Ottaviano o Cipro, y luego a pie. Mejor reservar online en la web oficial para evitar la cola de taquilla.",
        "quando": "De lunes a sábado de 8 a 20 h, última entrada a las 18 h. Cerrados los domingos, salvo el último del mes (de 9 a 14 h, última entrada a las 12:30), cuando la entrada es gratuita y hay muchísima gente. También cierran en algunas fiestas religiosas: ver el calendario en la web. Primera franja de la mañana o última hora de la tarde.",
        "tempo": "3-4 horas",
        "costo": "20 euros la entrada general, 25 euros con reserva online en la web oficial (2026)",
        "url": "https://www.museivaticani.va/",
        "consiglio": "En la Sixtina el personal vigila el silencio y la prohibición de fotografiar. Decidir antes qué ver: nadie consigue verlo todo."
      },
      {
        "nome": "Basílica de San Pedro y cúpula",
        "testo": "Una de las iglesias más grandes del mundo, con la Piedad de Miguel Ángel, el baldaquino de Bernini y la cúpula diseñada por Miguel Ángel. Desde la cúpula se ve toda Roma.",
        "come": "Metro A hasta Ottaviano y a pie. Se pasan controles de seguridad; la entrada a la basílica es gratuita, la subida a la cúpula es de pago. Hombros y rodillas deben ir cubiertos.",
        "quando": "Todos los días, pero cerrada durante las ceremonias papales; el miércoles por la mañana hay audiencia general y la zona está muy llena. A primera hora.",
        "tempo": "1-2 horas, más 1 hora para la cúpula",
        "url": "https://www.basilicasanpietro.va/",
        "consiglio": "Se controla el código de vestimenta: con pantalón corto o hombros descubiertos no se entra. Llevar un pañuelo ligero en la mochila."
      },
      {
        "nome": "Panteón",
        "testo": "El templo de todos los dioses, reconstruido con Adriano en el siglo II d. C. La cúpula de hormigón sin armar sigue siendo la mayor de su tipo en el mundo, con el óculo abierto en el centro por donde entra la luz y también la lluvia. Dentro están enterrados Rafael y los primeros reyes de Italia.",
        "come": "En el centro, entre Piazza Navona y la Fontana de Trevi, a pie. Desde 2023 la entrada es de pago, con billete online o en el lugar. Durante los oficios religiosos el acceso es limitado.",
        "quando": "Todos los días de 9 a 19, última entrada a las 18:30; el primer domingo de cada mes la entrada es gratuita (web oficial). A primera hora o por la tarde para encontrar menos gente; con lluvia el óculo crea un ambiente especial.",
        "tempo": "30-45 minutos",
        "consiglio": "Comprobar con antelación las normas y el precio de la entrada. La plaza exterior está llena de gente y de restaurantes turísticos: no comer allí."
      },
      {
        "nome": "Galleria Borghese",
        "testo": "La colección del cardenal Escipión Borghese en una villa dentro del parque: Bernini (Apolo y Dafne, el Rapto de Proserpina), Caravaggio, Tiziano y Canova. Es una de las colecciones más bellas de Roma, con pocos visitantes a la vez.",
        "come": "Dentro de Villa Borghese, a pie desde Piazza di Spagna o Piazzale Flaminio. Reserva obligatoria con turnos de dos horas.",
        "quando": "Cerrada los lunes. Las franjas se agotan con días o semanas de antelación en temporada alta.",
        "tempo": "2 horas (la visita tiene duración fija)",
        "url": "https://galleriaborghese.cultura.gov.it/",
        "consiglio": "Llegar un poco antes para recoger la entrada y dejar las cosas en el guardarropa. El parque de alrededor es bonito para pasear después."
      },
      {
        "nome": "Vía Apia Antigua",
        "testo": "La reina de las calzadas romanas, construida en el 312 a. C. Hay adoquines originales, tumbas, villas y acueductos, y las catacumbas de San Calixto y San Sebastián bajo la calzada. El Parque de la Vía Apia Antigua es una de las pocas grandes zonas verdes cerca del centro.",
        "come": "Desde el centro con el autobús 118 (parada Circo Massimo o Coliseo) o el 660 (desde la parada Arco di Travertino del metro A), y luego a pie; o en bici de alquiler. Los domingos y festivos la Appia está cerrada a los vehículos a motor desde Porta San Sebastiano, de 9 a 16 con horario de invierno y de 9 a 18 con horario de verano.",
        "quando": "El domingo, que es el mejor día porque está cerrada a los coches. Las catacumbas tienen días de cierre distintos: consultarlos en sus webs antes de ir.",
        "tempo": "media jornada",
        "url": "https://www.parcoappiaantica.it/",
        "consiglio": "La Vía Apia en domingo no está lejos del Coliseo y casi nadie va. Se camina sobre adoquines originales entre sepulcros y pinos, con los acueductos a lo lejos. Llevar agua: hay pocos puntos para comer o beber en el camino."
      },
      {
        "nome": "Basílica de San Clemente",
        "testo": "Una iglesia del siglo XII construida sobre una basílica del siglo IV, a su vez sobre edificios romanos y un mitreo del siglo II. Al bajar se atraviesan mil años de historia de la ciudad en tres niveles.",
        "come": "A pocos minutos a pie del Coliseo, en via Labicana. La basílica superior se visita libremente, los niveles subterráneos con entrada.",
        "quando": "Horarios con pausa a mitad del día; comprobar en la web. Los ambientes subterráneos son húmedos y frescos incluso en verano.",
        "tempo": "1 hora",
        "url": "https://www.basilicasanclemente.com/",
        "consiglio": "Es la forma más sencilla de entender qué significa la Roma subterránea, y está a dos pasos del Coliseo. A menudo se combina con las Case Romane del Celio."
      },
      {
        "nome": "San Luigi dei Francesi",
        "testo": "La iglesia nacional de los franceses en Roma, cerca de Piazza Navona. En la capilla Contarelli hay tres lienzos de Caravaggio sobre san Mateo: la Vocación, el Martirio y la Inspiración.",
        "come": "A pie desde Piazza Navona o el Panteón, en pocos minutos. La entrada es gratuita.",
        "quando": "Todos los días con horarios partidos. A media mañana de un día laborable hay poca gente.",
        "tempo": "20-30 minutos",
        "costo": "entrada gratuita",
        "consiglio": "Fui a media mañana de un martes de noviembre: se puede estar diez minutos delante de la Vocación de San Mateo prácticamente solo. Llevar monedas."
      },
      {
        "nome": "Trastevere y el Gueto judío",
        "testo": "Dos barrios donde Roma sigue habitada. Trastevere tiene callejuelas, osterías y la basílica de Santa María in Trastevere con sus mosaicos dorados. El Gueto judío, cerca del Pórtico de Octavia, es el lugar del carciofo alla giudia.",
        "come": "A pie desde el centro cruzando el Tíber por la isla Tiberina, o en el tranvía 8 (desde Piazza Venezia, pasando por Largo Argentina).",
        "quando": "Por la mañana para las callejuelas; por la noche para cenar. Trastevere un sábado por la noche está muy lleno.",
        "tempo": "media jornada",
        "consiglio": "Para comer bien, alejarse de los restaurantes con camareros que invitan a entrar. En Testaccio, el Pigneto o San Lorenzo se come una cacio e pepe bien hecha, a menudo por una fracción del precio de los locales junto a los monumentos."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Coliseo y Foro Romano con entrada reservada, antes de que llegue la multitud.",
          "Comida lejos de los monumentos, en Monti o en Testaccio.",
          "Tarde en el Panteón y en San Luigi dei Francesi.",
          "Paseo por Piazza Navona y, al atardecer, Ponte Sant'Angelo.",
          "Cena en Trastevere o en el Gueto."
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Coliseo, Foro y Palatino por la mañana; San Clemente y comida en Monti; Panteón y San Luigi dei Francesi por la tarde.",
          "Día 2: Museos Vaticanos en la primera franja y San Pedro; comida en Prati; tarde libre en Trastevere y cena en el Gueto."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Coliseo, Foro y Palatino, San Clemente.",
          "Día 2: Museos Vaticanos y San Pedro, después Castel Sant'Angelo y Piazza Navona.",
          "Día 3: Galleria Borghese por la mañana con reserva; por la tarde la Vía Apia (mejor en domingo) o Trastevere y el Gueto."
        ]
      }
    ],
    zone: [
      {
        "nome": "Monti",
        "perChi": "quien quiere un barrio vivo cerca del Coliseo y de Termini",
        "testo": "Callejuelas, talleres y locales a pie del Coliseo. Algo ruidoso por la noche, con pocos hoteles grandes y muchos apartamentos. Cómodo para metro y trenes."
      },
      {
        "nome": "Trastevere",
        "perChi": "quien quiere vida nocturna",
        "testo": "Callejuelas, tabernas y música. Llena y ruidosa los fines de semana; los restaurantes de las calles principales son turísticos. Al centro se llega a pie cruzando el Tíber."
      },
      {
        "nome": "Prati",
        "perChi": "quien quiere gastar menos y ver el Vaticano",
        "testo": "Barrio residencial con precios más bajos y la línea A de metro para San Pedro y Termini. Poco encanto, pero tranquilo y cómodo."
      },
      {
        "nome": "Testaccio",
        "perChi": "quien quiere comer bien y huir de las multitudes",
        "testo": "Barrio popular con trattorias históricas y el mercado. Un poco apartado del centro y de los monumentos, pero bien conectado por la línea B."
      }
    ],
    sapori: [
      {
        "nome": "Las cuatro pastas romanas",
        "testo": "Cacio e pepe, gricia, amatriciana y carbonara: pocos ingredientes y mucha técnica. Se comen en trattoria, mejor en Testaccio, Pigneto o San Lorenzo que en el centro."
      },
      {
        "nome": "Carciofo alla giudia",
        "testo": "Alcachofa romanesca frita entera, crujiente por fuera y tierna por dentro. Se come en el Gueto, en temporada, desde finales de invierno hasta primavera."
      },
      {
        "nome": "Coda alla vaccinara",
        "testo": "Rabo de buey estofado con apio y tomate, uno de los platos del quinto quarto. Se encuentra en las trattorias tradicionales, sobre todo en Testaccio."
      },
      {
        "nome": "Supplì",
        "testo": "Croqueta de arroz frita con ragú y un corazón de mozzarella que se estira. Se compra para llevar en las freidurías y en las pizzerías al corte."
      },
      {
        "nome": "Pizza romana",
        "testo": "Fina y crujiente, a diferencia de la napolitana. Se come en pizzería por la noche, o al corte en el mostrador como merienda."
      },
      {
        "nome": "Maritozzo",
        "testo": "Bollo dulce y blando con nata montada, típico del desayuno romano. Se encuentra en cafés y pastelerías."
      }
    ],
    attenzioni: [
      "La entrada al Coliseo es nominativa y hace falta documento de identidad a la entrada. Comprar solo en la web oficial: los vendedores callejeros y muchas webs no oficiales cobran de más.",
      "Los carteristas actúan en las líneas A y B del metro, en los autobuses hacia San Pedro, en Termini y cerca de los monumentos. Llevar los bolsos cerrados y por delante, el móvil en un bolsillo interior.",
      "Evitar los restaurantes con fotos de los platos fuera o con alguien que invita a entrar. Comprobar el cubierto y los extras de la cuenta antes de pedir.",
      "Taxis: tomar solo los blancos con licencia, con tarifa fija desde el aeropuerto de Fiumicino al centro dentro de las Murallas Aurelianas. Rechazar a quien ofrezca un precio pactado en llegadas.",
      "Falsos centuriones y personas que ponen pulseras o rosas en la mano piden dinero después: decir que no con firmeza. No entrar en las fuentes, hay multa.",
      "Se cobra una tasa turística por noche, que se paga en el alojamiento; el importe depende de la categoría. El centro histórico tiene una ZTL con cámaras: si se llega en coche, preguntar al hotel cómo evitar la multa."
    ],
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
    luoghi: [
      {
        "nome": "Duomo y cúpula de Brunelleschi",
        "testo": "La catedral de Santa Maria del Fiore con la mayor cúpula de mampostería jamás construida, terminada en 1436 sin cimbras. Al subir los 463 escalones se camina entre las dos cáscaras, a pocos centímetros de los frescos del Juicio Final, hasta la linterna con vistas a toda la ciudad.",
        "come": "En pleno centro, a pie desde la estación. La subida a la cúpula es por franja horaria y se reserva online en la web oficial de la Opera del Duomo. La entrada a la catedral es gratuita, con cola en los controles.",
        "quando": "Primera franja de la mañana, para subir con poca gente. La escalera es estrecha y no hay ascensores: no apto para quien sufra claustrofobia o vértigo.",
        "tempo": "1 hora y media para la cúpula, más la catedral",
        "url": "https://www.duomo.firenze.it/",
        "consiglio": "Subí a la cúpula en la primera franja, a las ocho y media: es otra experiencia respecto a mediodía. Se pasa cerca de los frescos y arriba hay aire."
      },
      {
        "nome": "Museo dell'Opera del Duomo",
        "testo": "El museo del conjunto del Duomo, que muchos se saltan y es de los mejores de la ciudad. Dentro están las puertas originales del Baptisterio (las de la plaza son copias), la Piedad Bandini de Miguel Ángel, la Magdalena de Donatello y los modelos de la cúpula.",
        "come": "A dos pasos del Duomo, por detrás. La entrada combinada del conjunto del Duomo incluye cúpula, baptisterio, campanario, cripta y museo.",
        "quando": "Todos los días; comprobar los horarios en la web. A primera hora está casi vacío.",
        "tempo": "1 hora y media-2 horas",
        "url": "https://www.duomo.firenze.it/",
        "consiglio": "No me lo saltaría: dentro están las puertas del Baptisterio y la última Piedad de Miguel Ángel, la que quería destruir. Cuando fui había cuatro personas."
      },
      {
        "nome": "Galería de los Uffizi",
        "testo": "Uno de los museos de pintura más importantes de Italia: el Nacimiento de Venus y la Primavera de Botticelli, la Maestà de Ognissanti de Giotto, Leonardo, Rafael, Miguel Ángel, Caravaggio. El recorrido sigue la historia de la pintura desde la Edad Media hasta el siglo XVIII.",
        "come": "A pie desde Piazza della Signoria. La entrada es con reserva: la cola sin entrada es larga incluso en temporada baja. La visita es lineal y no hay atajo: elegir antes las salas.",
        "quando": "De martes a domingo de 8:15 a 18:30, última entrada a las 17:30; cerrado los lunes, el 1 de enero y el 25 de diciembre. Primera franja de la mañana o última hora de la tarde.",
        "tempo": "3 horas",
        "costo": "25 euros el mismo día, 29 euros reservando con antelación (web oficial, 2026)",
        "url": "https://www.uffizi.it/",
        "consiglio": "Reservar con semanas de antelación en temporada alta. Tres horas bastan para las salas principales: intentar concentrarse en Botticelli, Leonardo y Caravaggio."
      },
      {
        "nome": "Galleria dell'Accademia",
        "testo": "El David de Miguel Ángel, de más de cinco metros de altura, al fondo de una galería con los Prisioneros inacabados. El resto del museo es pequeño y se ve en una hora.",
        "come": "A pie desde el Duomo, en via Ricasoli. Reserva recomendada.",
        "quando": "Cerrada los lunes; horarios y días gratuitos en la web oficial. Mejor la primera franja de la mañana.",
        "tempo": "1 hora-1 hora y media",
        "consiglio": "El David se ve mejor de cerca, rodeándolo: los Prisioneros de la galería ayudan a entender cómo trabajaba Miguel Ángel. Reservar con antelación."
      },
      {
        "nome": "Palazzo Pitti y Jardín de Boboli",
        "testo": "La residencia de los Medici, luego de los Lorena y los Saboya, en la otra orilla del Arno. Dentro están la Galería Palatina con Rafael y Tiziano, los apartamentos reales y varios museos. Detrás, el Jardín de Boboli es un parque a la italiana con vistas a la ciudad.",
        "come": "A pie desde el Ponte Vecchio. Los museos y el jardín tienen entradas separadas o combinadas: consultar la web.",
        "quando": "Cerrado los lunes. En verano el jardín es caluroso y en muchos puntos sin sombra: ir por la mañana temprano.",
        "tempo": "media jornada",
        "url": "https://www.uffizi.it/palazzo-pitti",
        "consiglio": "El Jardín de Boboli es el lugar adecuado para descansar tras la multitud del centro. Llevar agua."
      },
      {
        "nome": "Capilla Brancacci",
        "testo": "El ciclo de frescos de Masaccio y Masolino en la iglesia del Carmine, que marca el inicio de la pintura renacentista. La Expulsión del Edén de Masaccio es una de las imágenes más fuertes del siglo XV.",
        "come": "En el Oltrarno, en la piazza del Carmine, a pie desde el centro. Aforo limitado y reserva recomendada.",
        "quando": "Consultar horarios y días de cierre en la web de los museos cívicos florentinos antes de ir.",
        "tempo": "45 minutos",
        "url": "https://museicivicifiorentini.comune.fi.it/",
        "consiglio": "Está menos concurrida que los grandes museos y es igual de importante. Antes de entrar merece la pena leer dos líneas sobre Masaccio: la visita resulta mucho más interesante."
      },
      {
        "nome": "San Miniato al Monte",
        "testo": "La iglesia románica del siglo XI en la colina al sur del Arno, con la fachada incrustada de mármol blanco y verde y un suelo con motivos zodiacales. Los monjes olivetanos cantan en gregoriano por la tarde.",
        "come": "A pie desde el Ponte Vecchio, pasando por Porta San Niccolò y las escaleras, o en autobús. Un poco por encima del Piazzale Michelangelo.",
        "quando": "Todos los días. A última hora de la tarde, para el atardecer y el canto de los monjes. Comprobar los horarios de las funciones en la web.",
        "tempo": "1 hora",
        "url": "https://www.sanminiatoalmonte.it/",
        "consiglio": "Un poco por encima del Piazzale Michelangelo, que a esa hora es un aparcamiento con vendedores, hay la misma vista con menos gente. En la cripta los monjes cantan en gregoriano por la tarde."
      },
      {
        "nome": "Oltrarno: Santo Spirito y los talleres",
        "testo": "La orilla sur del Arno es la parte de la ciudad donde aún hay talleres de restauración, dorado, laudería y marroquinería. Piazza Santo Spirito es el corazón del barrio, con la basílica de Brunelleschi.",
        "come": "A pie cruzando el Ponte Vecchio o el Ponte alla Carraia. No hacen falta entradas: se camina y se entra en los talleres.",
        "quando": "Tardes de días laborables, cuando los talleres están abiertos. Los domingos muchos cierran.",
        "tempo": "media jornada",
        "consiglio": "Pedir siempre permiso antes de fotografiar dentro de los talleres. Para cenar, las trattorias del Oltrarno son mejores y más baratas que las de alrededor del Duomo."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: subida a la cúpula de Brunelleschi con reserva.",
          "Mañana: Museo dell'Opera del Duomo.",
          "Primera hora de la tarde: comida con bocadillo de lampredotto o en una trattoria de Sant'Ambrogio.",
          "Primera hora de la tarde: Uffizi (sala por sala, sin querer verlo todo).",
          "Atardecer en San Miniato al Monte y cena en el Oltrarno."
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: cúpula a primera hora, Museo dell'Opera del Duomo, comida en Sant'Ambrogio, Uffizi por la tarde.",
          "Día 2: Accademia y el David en la primera franja; Oltrarno con la Capilla Brancacci y Santo Spirito; atardecer en San Miniato."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: cúpula, Museo dell'Opera del Duomo, casco histórico a pie.",
          "Día 2: Uffizi por la mañana, Accademia por la tarde.",
          "Día 3: Palazzo Pitti y Boboli, Capilla Brancacci, Oltrarno; San Miniato al atardecer."
        ]
      }
    ],
    zone: [
      {
        "nome": "Oltrarno",
        "perChi": "quien quiere un barrio vivo a cinco minutos del centro",
        "testo": "Talleres, trattorias y plazas. Más tranquilo que el centro, con precios algo más bajos. San Frediano es el barrio para la noche."
      },
      {
        "nome": "Sant'Ambrogio",
        "perChi": "quien busca precios más bajos y un mercado de verdad",
        "testo": "Zona residencial al este del Duomo, con el mercado de los florentinos y muchas trattorias. Algo apartada de los recorridos turísticos."
      },
      {
        "nome": "Santa Maria Novella",
        "perChi": "quien llega en tren y se va pronto",
        "testo": "Cerca de la estación: cómoda para los trenes y los autobuses hacia la Toscana. Zona más transitada y menos agradable por la noche."
      },
      {
        "nome": "Centro histórico (Duomo y Signoria)",
        "perChi": "quien quiere todo a pie y no mira los precios",
        "testo": "Comodísimo y caro. Por la noche hay pocos residentes y muchos turistas, y el ruido de las calles peatonales llega hasta las habitaciones."
      }
    ],
    sapori: [
      {
        "nome": "Bistecca alla fiorentina",
        "testo": "Corte de al menos tres dedos de grosor, poco hecho y servido al peso, normalmente un kilo o más. Se pide en trattoria, comprobando el precio por cada cien gramos."
      },
      {
        "nome": "Lampredotto",
        "testo": "Bocadillo con callos del cuarto estómago de la vaca, hervidos y servidos con salsa verde. Se come de pie en los puestos callejeros, como los florentinos."
      },
      {
        "nome": "Ribollita y pappa al pomodoro",
        "testo": "Dos sopas de pan duro: la ribollita con col y alubias, la pappa con tomate y albahaca. Cocina humilde de trattoria."
      },
      {
        "nome": "Crostini di fegatini",
        "testo": "Rebanadas de pan toscano con paté de hígado de pollo, entrante clásico toscano."
      },
      {
        "nome": "Panzanella",
        "testo": "Ensalada veraniega de pan duro remojado, tomate, cebolla, albahaca y aceite."
      },
      {
        "nome": "Cantucci y vin santo",
        "testo": "Galletas de almendra para mojar en vino dulce de postre. Se sirven al final de la comida en casi todas las trattorias."
      }
    ],
    attenzioni: [
      "La ZTL del centro está vigilada por cámaras: entrar en coche sin permiso supone una multa que llega a casa meses después. Si se llega en coche, preguntar al hotel cómo registrar la matrícula o dejar el coche en un aparcamiento exterior.",
      "Reservar en línea Uffizi, Accademia y cúpula: sin entrada las colas pueden durar horas y en temporada alta se corre el riesgo de no entrar.",
      "El ayuntamiento prohíbe sentarse a comer en las escalinatas de iglesias y monumentos y en algunas calles del centro, con multas. Evitar comer en el suelo.",
      "Carteristas en la estación de Santa Maria Novella, en los autobuses llenos y en los puntos más visitados como el Ponte Vecchio. Llevar los bolsos cerrados y por delante.",
      "En los restaurantes comprobar el precio del chuletón por cada cien gramos y el cubierto. Desconfiar de los locales con menús turísticos alrededor del Duomo y de Piazza della Signoria.",
      "Se cobra una tasa turística por noche, que se paga en el alojamiento. En caso de huelgas de transporte, dejar margen de tiempo."
    ],
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
    luoghi: [
      {
        "nome": "Basílica de San Marcos",
        "testo": "La basílica bizantina de los dux, con miles de metros cuadrados de mosaicos dorados que cubren bóvedas y cúpulas. El suelo ondulado, la Pala d'Oro y los caballos de bronce del museo son lo que hay que buscar.",
        "come": "En Piazza San Marco, se llega en vaporetto (parada San Marco-San Zaccaria) o a pie desde Rialto. La entrada exige ropa que cubra hombros y rodillas. No se admiten mochilas ni bolsos grandes: hay consignas cerca.",
        "quando": "Todos los días; las primeras horas de la mañana son las menos concurridas. Durante las funciones religiosas el acceso es limitado.",
        "tempo": "1 hora",
        "url": "https://www.basilicasanmarco.it/",
        "consiglio": "Reservar la entrada online para evitar la cola en la plaza. La Pala d'Oro y el Museo con la Logia de los Caballos tienen entrada propia: la logia merece la subida, para ver los mosaicos de cerca y la plaza desde arriba."
      },
      {
        "nome": "Palacio Ducal",
        "testo": "La sede del gobierno de la República y residencia del dux, en gótico veneciano. Dentro están la Sala del Gran Consejo con el Paraíso de Tintoretto, la Escalera de los Gigantes, las cárceles y el Puente de los Suspiros. Los Itinerarios Secretos llevan a las estancias de los funcionarios.",
        "come": "Junto a la Basílica, en la cuenca de San Marcos. La entrada estándar incluye también los museos de la Piazza San Marco.",
        "quando": "Abierto todos los días: de 9 a 19 h de abril a octubre, de 9 a 18 h de noviembre a marzo, última entrada una hora antes del cierre. Primera hora de la mañana o última de la tarde para evitar los grupos.",
        "tempo": "2-3 horas",
        "costo": "35 euros la entrada general, con los Museos de la Plaza de San Marcos; 30 euros si se compra online con más de 30 días de antelación (2026)",
        "url": "https://palazzoducale.visitmuve.it/",
        "consiglio": "Comprar online con más de un mes de antelación ahorra 5 euros y permite saltarse la cola. Si hay tiempo, los Itinerarios Secretos, con visita guiada, muestran salas a las que no llega el recorrido normal."
      },
      {
        "nome": "Scuola Grande di San Rocco",
        "testo": "El ciclo de pinturas de Tintoretto, realizado en más de veinte años, cubre paredes y techos de tres plantas. Es la Capilla Sixtina de Venecia, pero con mucha menos gente. En la sala superior unos espejos permiten mirar el techo sin doblar el cuello.",
        "come": "A pie desde la estación de tren o Piazzale Roma, junto a la iglesia de los Frari (campo San Rocco). En vaporetto, parada San Tomà.",
        "quando": "Abierta todos los días; comprobar horarios y cierres en la web. Las horas centrales son tranquilas.",
        "tempo": "1 hora",
        "url": "https://www.scuolagrandesanrocco.it/",
        "consiglio": "Coger uno de los espejos que prestan a la entrada para mirar las pinturas del techo. En los Frari, a dos pasos, están los retablos de Tiziano y Bellini."
      },
      {
        "nome": "Rialto y el mercado del pescado",
        "testo": "El puente más antiguo sobre el Gran Canal, de piedra desde 1591, con el barrio comercial histórico alrededor. En la Pescheria, del lado de San Polo, por la mañana se vende pescado de laguna y de mar a los residentes; cerca hay fruta y verdura.",
        "come": "A pie desde la estación o San Marcos, o en vaporetto hasta Rialto. El mercado está a pocos minutos del puente.",
        "quando": "A primera hora. Comprobar los días de apertura de la Pescheria. El puente se llena a media mañana.",
        "tempo": "1 hora",
        "consiglio": "Al acabar el mercado, ir a comer cicheti en los bacari cercanos. Ver el puente al amanecer, cuando está vacío."
      },
      {
        "nome": "Cannaregio y el Gueto",
        "testo": "El sestiere más habitado, con canales anchos y osterías donde comen los venecianos. El Gueto, instituido en 1516, es uno de los primeros guetos judíos de Europa: los edificios son altos porque no se podía ampliar el área. Se visitan las sinagogas y el museo judío.",
        "come": "A pie desde la estación de tren. El museo judío organiza visitas guiadas a las sinagogas.",
        "quando": "Abierto todo el año; horarios y cierres del museo judío en su web.",
        "tempo": "media jornada",
        "consiglio": "Perderse por las calli lejos del eje estación-Rialto: en Cannaregio es fácil encontrar la Venecia que viven los residentes."
      },
      {
        "nome": "San Giorgio Maggiore",
        "testo": "La isla frente a San Marcos con la iglesia de Palladio y un campanario desde el que se ve la ciudad y la laguna. Es uno de los mejores miradores, normalmente con poca cola.",
        "come": "Desde la parada San Zaccaria se toma el vaporetto de la línea 2 hasta San Giorgio, en pocos minutos. El campanario tiene ascensor.",
        "quando": "Todos los días; el final de la tarde da la mejor luz sobre San Marcos. Comprobar el horario del ascensor.",
        "tempo": "1 hora",
        "consiglio": "Desde el campanario se ven San Marcos y toda la laguna con una fracción de la multitud que hay en el campanario de la plaza."
      },
      {
        "nome": "Torcello",
        "testo": "La isla donde empezó Venecia. La basílica de Santa Maria Assunta, del siglo VII, tiene un mosaico del Juicio Final que cubre una pared entera. Hoy viven allí pocas decenas de personas.",
        "come": "Desde Fondamente Nove en el vaporetto 12 hasta Burano, y de allí con la línea 9 a Torcello.",
        "quando": "Todos los días; la mañana es tranquila. Comprobar el horario de la basílica.",
        "tempo": "media jornada, combinada con Burano",
        "consiglio": "Fui a pleno día y había veinte personas: es allí donde empezó Venecia, antes de que existiera Venecia."
      },
      {
        "nome": "Murano y Burano",
        "testo": "Murano es la isla del vidrio, con el Museo del Vidrio y los hornos. Burano tiene casas pintadas de colores vivos y tradición de encaje. Ambas están muy fotografiadas y visitadas por grupos.",
        "come": "En vaporetto desde Fondamente Nove: la línea 12 para en Murano y sigue hasta Burano. En el Museo del Vidrio se ven las piezas históricas.",
        "quando": "Todo el año; a primera hora hay menos gente. En invierno las islas están tranquilas.",
        "tempo": "media jornada cada una",
        "consiglio": "Evitar los hornos que llevan a los turistas con demostraciones gratuitas y luego les empujan a comprar: comprar vidrio con el sello Vetro Artistico Murano."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: paseo temprano de Rialto a San Marcos, cuando las calli están vacías.",
          "Mañana: Basílica de San Marcos con entrada reservada.",
          "Mañana: Palacio Ducal.",
          "Primera hora de la tarde: ruta de bacari en Cannaregio o en Castello.",
          "Primera hora de la tarde: Scuola Grande di San Rocco.",
          "Atardecer en vaporetto a lo largo de todo el Gran Canal."
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: amanecer entre Rialto y San Marcos, Basílica, Palacio Ducal, San Giorgio Maggiore al atardecer.",
          "Día 2: Rialto y el mercado, Scuola Grande di San Rocco y los Frari, Cannaregio y el Gueto, ruta de bacari."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: San Marcos, Palacio Ducal, San Giorgio Maggiore.",
          "Día 2: Rialto, San Rocco y los Frari, Cannaregio y Gueto.",
          "Día 3: la laguna: Murano, Burano y Torcello, en vaporetto desde Fondamente Nove."
        ]
      }
    ],
    zone: [
      {
        "nome": "Cannaregio",
        "perChi": "quien quiere una zona habitada y gastar menos",
        "testo": "Cerca de la estación, con canales anchos y tabernas de venecianos. Más tranquila y barata que el centro, a un paseo de San Marcos."
      },
      {
        "nome": "Castello",
        "perChi": "quien busca calma lejos de San Marcos",
        "testo": "Sestiere grande y residencial, con zonas muy tranquilas hacia el Arsenal y los Giardini. Poco que hacer por la noche, pero cerca de San Marcos."
      },
      {
        "nome": "Dorsoduro",
        "perChi": "quien quiere museos y vida nocturna",
        "testo": "Cerca de las Gallerie dell'Accademia y de la Colección Guggenheim, con locales alrededor de Campo Santa Margherita. Más animada por la noche, algo más cara."
      },
      {
        "nome": "Mestre",
        "perChi": "quien quiere gastar lo mínimo",
        "testo": "En tierra firme, a pocos minutos en tren de Venezia Santa Lucia. Cuesta menos, pero se pierden el amanecer y la noche en la ciudad, que son los mejores momentos. Quien duerme en el centro histórico está exento de la tasa de acceso."
      }
    ],
    sapori: [
      {
        "nome": "Cicheti y bacari",
        "testo": "Pequeños bocados (albóndigas, bacalao sobre un crostino, medio huevo con anchoa) para comer de pie en la barra con una copita de vino. Se va de bacaro en bacaro."
      },
      {
        "nome": "Sarde in saor",
        "testo": "Sardinas fritas marinadas con cebolla, vinagre, pasas y piñones. Plato histórico de los marineros, se come frío."
      },
      {
        "nome": "Baccalà mantecato",
        "testo": "Bacalao seco trabajado hasta formar una crema blanca, servido sobre crostini de polenta. El cicheto más veneciano."
      },
      {
        "nome": "Fegato alla veneziana",
        "testo": "Hígado de ternera con cebollas estofadas, normalmente con polenta blanca."
      },
      {
        "nome": "Risotto di gò y risi e bisi",
        "testo": "Risotto con gobio, un pescado de laguna; el risi e bisi es una sopa espesa de arroz y guisantes, de primavera."
      },
      {
        "nome": "Spritz",
        "testo": "Aperitivo con prosecco, Aperol o Select y soda, nacido en el Véneto. Se bebe en los bacari antes de cenar."
      }
    ],
    attenzioni: [
      "Tasa de acceso para quien entra en el día sin pernoctar: la prueba de 2026 terminó el 27 de julio. Para 2027 el Ayuntamiento ya ha fijado 72 días entre el 26 de marzo y el 15 de agosto, con la tasa debida de 8:30 a 16:30; importes y exenciones se publican en cda.ve.it. Consultar el calendario antes de salir.",
      "Desde 2024 los grupos turísticos están limitados a 25 personas y están prohibidos los altavoces.",
      "Carteristas en los vaporetti llenos, en Rialto y en San Marcos. Llevar los bolsos cerrados y por delante.",
      "El billete sencillo del vaporetto es caro y los pases por tiempo compensan si se hacen varios viajes al día. Validar siempre el billete antes de subir.",
      "Restaurantes alrededor de San Marcos y Rialto con menú turístico y cubierto alto: comprobar la cuenta. La góndola tiene tarifas fijadas por el ayuntamiento; acordar el precio antes de subir.",
      "Acqua alta en otoño e invierno: el MOSE protege la laguna, pero las pasarelas se siguen montando cuando la marea supera cierto umbral. Llevar botas de goma ligeras. Prohibiciones: nadar en los canales, sentarse en los puentes y comer en las escalinatas de los monumentos."
    ],
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
    luoghi: [
      {
        "nome": "Centro histórico, Spaccanapoli y San Gregorio Armeno",
        "testo": "El trazado grecorromano sigue siendo el de las calles: Spaccanapoli corta el centro en línea recta, con iglesias, palacios y talleres. San Gregorio Armeno es la calle de los belenes, con artesanos trabajando todo el año.",
        "come": "A pie, desde Piazza del Gesù Nuovo o la parada Dante del metro línea 1. El recorrido es peatonal o casi, con motos pasando por todas partes.",
        "quando": "Temprano por la mañana para ver los callejones sin multitud. En diciembre San Gregorio Armeno es preciosa e intransitable.",
        "tempo": "Medio día",
        "consiglio": "Entrar en las iglesias abiertas (Gesù Nuovo, Santa Chiara, San Domenico Maggiore): son gratis o cuestan poco y sirven de pausa del ruido."
      },
      {
        "nome": "Museo Arqueológico Nacional (MANN)",
        "testo": "Reúne los mosaicos, frescos, bronces y estatuas traídos de Pompeya y Herculano, además de la colección Farnese. Conviene verlo antes que los yacimientos del Vesubio: en Pompeya se entiende entonces qué había dentro de los muros.",
        "come": "Metro línea 1 o 2 hasta Museo/Piazza Cavour, a pocos minutos a pie. Se visita por cuenta propia con los paneles; la audioguía es opcional.",
        "quando": "Cierra los martes. Abierto de 9 a 19:30 h, última entrada a las 18:30 (2026). Por la mañana, cuando hay menos gente en las salas de mosaicos.",
        "tempo": "2-3 horas",
        "consiglio": "Subir directamente a los mosaicos de Pompeya y al Gabinete secreto, y bajar luego a la colección Farnese si sobra tiempo."
      },
      {
        "nome": "Capilla Sansevero",
        "testo": "Una capilla nobiliaria del siglo XVIII con el Cristo Velado de Giuseppe Sanmartino, un mármol que parece un paño mojado sobre el cuerpo. En la cripta están las máquinas anatómicas.",
        "come": "A pie, en via Francesco De Sanctis, en el centro histórico. Visita por cuenta propia, con entrada a hora fija.",
        "quando": "Reservar con antelación: las plazas se agotan, sobre todo en fin de semana y en temporada alta. Prohibido fotografiar dentro.",
        "tempo": "45 minutos",
        "url": "https://www.museosansevero.it/",
        "consiglio": "Comprar la entrada en el sitio oficial unos días antes: ante la puerta suele haber ya cola."
      },
      {
        "nome": "Nápoles subterránea y catacumbas",
        "testo": "Bajo la ciudad hay canteras griegas, acueductos romanos y refugios antiaéreos de la guerra. Las catacumbas de San Gennaro, en el barrio de la Sanità, están entre las más grandes del sur de Italia, con frescos paleocristianos.",
        "come": "A la Nápoles subterránea se entra por la Piazza San Gaetano, con visita guiada a horas fijas. Las catacumbas de San Gennaro están en el barrio de la Sanità, a pie desde el MANN.",
        "quando": "Todo el año, también con lluvia. Bajo tierra hace fresco: llevar una sudadera.",
        "tempo": "1 hora y media por visita",
        "consiglio": "Hacer solo una de las dos si hay poco tiempo: Napoli Sotterranea por la guerra y las canteras, las catacumbas por el arte."
      },
      {
        "nome": "Pompeya",
        "testo": "Una gran ciudad romana sellada por la erupción del 79 d.C.: calles con las marcas de los carros, tiendas, termas, casas con frescos, el foro y el anfiteatro. La parte excavada es grande y hay que elegir qué ver.",
        "come": "Circumvesuviana línea Nápoles-Sorrento hasta Pompei Scavi-Villa dei Misteri, desde Napoli Garibaldi. También se puede llegar en tren regional a Pompei. Audioguía o guía recomendadas.",
        "quando": "A la apertura o a última hora de la tarde en verano; no a mediodía, sin sombra. Abierto de 9 a 19 h del 16 de marzo al 14 de octubre (última entrada 17:30) y de 9 a 17 h el resto del año (última entrada 15:30). Cerrado el 25 de diciembre y el 1 de enero, salvo aperturas extraordinarias. Entradas nominativas, límite de 20.000 visitantes al día y franjas horarias en temporada alta.",
        "tempo": "3-4 horas",
        "costo": "Pompei Express 20 euros; Pompei+, con las villas suburbanas y Boscoreale, 25 euros (desde el 12 de enero de 2026). Venta online solo en Vivaticket, o en taquilla",
        "url": "https://pompeiisites.org/",
        "consiglio": "Visto después del MANN, se reconocen las obras. Llevar agua y gorra: hay pocos puntos donde refrescarse."
      },
      {
        "nome": "Herculano",
        "testo": "Una ciudad más pequeña que Pompeya, sepultada por el barro y no por la ceniza: se conservaron pisos superiores, vigas de madera carbonizada, puertas y camas. Se ve cómo se vivía de verdad.",
        "come": "Circumvesuviana línea Nápoles-Sorrento hasta Ercolano Scavi, desde Napoli Garibaldi, y luego un tramo a pie cuesta abajo.",
        "quando": "Por la mañana, en verano. El yacimiento cierra en las fiestas principales: consultar el calendario del sitio oficial.",
        "tempo": "2 horas",
        "url": "https://ercolano.beniculturali.it/",
        "consiglio": "Si solo hay tiempo para un yacimiento, muchos eligen Herculano: menos gente, más detalles conservados."
      },
      {
        "nome": "Vesubio",
        "testo": "El volcán que sepultó Pompeya está activo. Se llega en coche o en lanzadera hasta los aparcamientos en altura y se sube a pie por el sendero del Gran Cono hasta el borde del cráter, con vistas al golfo.",
        "come": "Desde Ercolano hay lanzaderas hacia los aparcamientos en altura. La entrada al Gran Cono se compra solo online, en el canal indicado por el Parque Nacional del Vesubio. Desde el aparcamiento se sube por un sendero de tierra, con calzado cerrado.",
        "quando": "Por la mañana, con cielo despejado. Con alertas meteorológicas o por eventos el acceso se suspende: consultar los avisos en la web del Parque.",
        "tempo": "3-4 horas entre ida, subida y vuelta",
        "url": "https://www.parconazionaledelvesuvio.it/",
        "consiglio": "Mirar el tiempo el día antes: con nubes bajas se sube sin ver nada."
      },
      {
        "nome": "Campos Flégreos y Pozzuoli",
        "testo": "Una zona volcánica al oeste de Nápoles, con bradisismo todavía activo: el anfiteatro Flavio de Pozzuoli, el Rione Terra, el parque arqueológico de Baia con sus termas romanas.",
        "come": "Cumana o línea 2 del metro hasta Pozzuoli, y luego autobuses locales o taxi a los yacimientos. También se llega en coche.",
        "quando": "Consultar antes los avisos de Protección Civil y si cada sitio está abierto: cambia con las obras.",
        "tempo": "Medio día",
        "consiglio": "Combinarlo con un almuerzo de pescado en Pozzuoli: cuesta menos que en Posillipo."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Museo Arqueológico Nacional, con los mosaicos de Pompeya.",
          "Media mañana: paseo por via dei Tribunali hasta San Gregorio Armeno.",
          "Almuerzo: una pizza en el centro histórico.",
          "Tarde: Spaccanapoli, Capilla Sansevero con entrada reservada.",
          "Noche: paseo por el paseo marítimo de via Caracciolo hasta Castel dell'Ovo."
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1 como arriba, con el MANN por la mañana.",
          "Día 2, mañana: Circumvesuviana hasta Herculano, dos horas en el yacimiento.",
          "Almuerzo rápido en Ercolano.",
          "Tarde: Pompeya en una franja horaria reservada, o el Vesubio si hace buen tiempo.",
          "Noche: de vuelta en Nápoles, cena sin prisa en una pizzería histórica."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: centro histórico, MANN, Sansevero.",
          "Día 2: Herculano por la mañana, Pompeya por la tarde, regreso en tren antes del anochecer.",
          "Día 3 por la mañana: Nápoles subterránea o las catacumbas de San Gennaro.",
          "Tarde: funicular hasta el Vomero para Castel Sant'Elmo y la vista del golfo.",
          "Noche: última pizza o fritura en Chiaia."
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro histórico",
        "perChi": "Quien quiere estar dentro de la ciudad",
        "testo": "Todo a pie, callejones llenos de vida y locales abiertos hasta tarde. Ruido constante de motos y voces incluso de noche, calles estrechas y no siempre limpias. Mejor una habitación en un piso alto o al patio."
      },
      {
        "nome": "Chiaia y paseo marítimo",
        "perChi": "Quien busca una zona más tranquila",
        "testo": "Barrio residencial y comercial, con restaurantes y vistas al mar desde el paseo marítimo. Más tranquilo por la noche, a pie desde el centro histórico y cerca del metro."
      },
      {
        "nome": "Vomero",
        "perChi": "Quien vigila los precios y quiere vistas",
        "testo": "Colina servida por funiculares y metro línea 1, con panorámicas del golfo. Más seguro y silencioso, pero hay que bajar y subir en funicular cada vez: por la noche se pierde tiempo."
      }
    ],
    sapori: [
      {
        "nome": "Pizza napolitana",
        "testo": "Masa alta y blanda en el borde, cocida en horno de leña en menos de dos minutos. Las dos clásicas son la Margherita y la Marinara; se come doblada «a libretto» y a portafoglio por la calle."
      },
      {
        "nome": "Ragù y genovese",
        "testo": "Dos salsas del domingo. El ragù cuece horas con la carne; la genovese es una salsa de cebolla y carne que no tiene nada de Génova. Se encuentran en las trattorias más que en las pizzerías."
      },
      {
        "nome": "Sfogliatella y babà",
        "testo": "La sfogliatella riccia, caliente por la mañana, con ricota y frutas confitadas. El babà, un bollo empapado en ron, se toma en la pastelería."
      },
      {
        "nome": "Fritura callejera",
        "testo": "Frittatine de pasta, crocchè de patata, arancini y pizza frita. Se toman en cucuruchos de papel, por dos o tres euros."
      },
      {
        "nome": "Café",
        "testo": "Corto, fuerte, tomado de pie en la barra. El «caffè sospeso» es la costumbre de pagar uno de más para quien llegue después."
      }
    ],
    attenzioni: [
      "Carteristas en la Circumvesuviana, en la estación Central, en Piazza Garibaldi y en los callejones concurridos: bolso por delante, sin móvil en la mano cerca de las motos.",
      "En Pompeya las entradas son nominativas y hay un tope diario de visitantes: comprar online en el sitio oficial y no a intermediarios que cobran más.",
      "Taxis: usar solo los blancos oficiales, pedir la tarifa fija aeropuerto-centro y puerto, y desconfiar de quien ofrece llevar en el aeropuerto.",
      "El centro tiene zonas de tráfico limitado con cámaras: dormir donde se pueda dejar el coche en un garaje y evitar conducir por la ciudad.",
      "Las huelgas de transporte son frecuentes, también en la Circumvesuviana: consultar el calendario antes de programar Pompeya o el Vesubio.",
      "El Vesubio y los Campos Flégreos son zonas volcánicas activas: seguir los avisos de Protección Civil y las indicaciones de los senderos."
    ],
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
      "En alojamientos es la ciudad más cara de Italia. Duomo y terrazas tienen una entrada combinada; la Última Cena cuesta 15 euros la entrada general (web oficial, 2026), el problema es encontrar plaza.",
    erroriDaEvitare: [
      "Intentar ver la Última Cena sin reserva: **no se entra**, las aperturas de reservas son trimestrales y se agotan en poco tiempo. Es el error más común de los visitantes en Milán",
      "Entrar en el centro en coche sin conocer Área B y Área C",
      "Reservar durante el Salone del Mobile sin saberlo: los precios de los hoteles llegan a multiplicarse",
      "Hacer el Lago de Como en coche un fin de semana de verano: la carretera es estrecha, los aparcamientos no existen y el barco lo hace todo mejor",
      "Juzgar Milán por el centro: la ciudad interesante está en los barrios, y el centro es la parte que menos la representa",
    ],
    miaEsperienza:
      "Milán tiene fama de ser la ciudad italiana que no merece un viaje, y para el turismo clásico es casi verdad: el centro se ve en un día y no tiene el encanto estratificado de Roma o de Florencia. Pero luego se sube a las terrazas del Duomo, que casi todos se saltan para ver solo el interior, y la perspectiva cambia: se camina por el tejado de una catedral gótica en medio de ciento treinta y cinco agujas y tres mil estatuas, con la ciudad debajo y, en los días claros, los Alpes en el horizonte. Es una de las cosas más bonitas de Italia y cuesta lo que un museo. Sobre la Última Cena hay que decir lo incómodo: no se «intenta ver». Es una pintura sobre un muro, en un ambiente de humedad controlada donde entran pequeños grupos durante quince minutos; se reserva con meses de antelación con aperturas trimestrales, y quien llega a Milán esperando encontrar una a última hora no entra. Quien lo consigue, sin embargo, está delante de un fresco que desaparece desde hace quinientos años (Leonardo lo pintó con una técnica experimental que empezó a degradarse cuando él aún vivía), y esos quince minutos valen el trámite.",
    luoghi: [
      {
        "nome": "Duomo y terrazas",
        "testo": "La catedral gótica tardó casi seiscientos años en terminarse. Las terrazas del tejado se recorren entre agujas y estatuas, con la ciudad debajo y, en días claros, los Alpes en el horizonte. Cuesta lo mismo que un museo y para mí es la mejor parte.",
        "come": "Metro M1 o M3 hasta Duomo; la entrada a las terrazas está en el lado de la plaza. Se sube a pie o en ascensor; el ascensor no llega al nivel más alto, donde se sigue por escaleras.",
        "quando": "Mañana o última hora de la tarde, con cielo despejado. Reservar online en fin de semana y en temporada alta. El museo del Duomo tiene sus propios días de cierre: comprobar.",
        "tempo": "1 hora y media para las terrazas, 2-3 horas con interior y museo",
        "url": "https://www.duomomilano.it/",
        "consiglio": "Subir a pie: el camino forma parte de la visita y la cola del ascensor a veces es larga."
      },
      {
        "nome": "La Última Cena (Cenacolo Vinciano)",
        "testo": "La Última Cena de Leonardo, pintada en una pared del refectorio de Santa Maria delle Grazie. La técnica experimental empezó a deteriorarse cuando él aún vivía. Se entra en grupos de 40 personas como máximo, en turnos de 15 minutos, en una sala con humedad controlada.",
        "come": "Metro M1 Conciliazione o M2 Cadorna, y unos minutos a pie. Visita por cuenta propia, a la hora fijada en la entrada.",
        "quando": "De martes a domingo de 8:15 a 19, última entrada a las 18:45; cerrado los lunes, el 1 de enero y el 25 de diciembre. Reserva obligatoria para todas las entradas, también las gratuitas: sin ella no se entra. La entrada se recoge en la taquilla junto al acceso al menos 30 minutos antes del turno, con documento.",
        "tempo": "15 minutos dentro, una hora con la espera y los controles",
        "costo": "15 euros entrada general, 2 euros de 18 a 25 años, gratis para menores de 18 (web oficial, 2026)",
        "url": "https://cenacolovinciano.org/",
        "consiglio": "Consultar el sitio oficial con meses de antelación para las nuevas aperturas de venta y reservar en cuanto estén disponibles: es el error más común en Milán."
      },
      {
        "nome": "Pinacoteca de Brera",
        "testo": "Una de las colecciones de pintura italiana más importantes, con Mantegna, Rafael, Caravaggio y El beso de Hayez. Está en un palacio del siglo XVIII con patio, en el barrio de Brera.",
        "come": "Metro M2 Lanza o M3 Montenapoleone, y luego a pie por las calles de Brera. Visita por libre.",
        "quando": "Cerrada los lunes; de martes a domingo de 8:30 a 19:15 h, con reserva obligatoria. Por la tarde hay más calma. El barrio se recorre bien por la noche.",
        "tempo": "2 horas",
        "costo": "20 euros la entrada general, billete Grande Brera con el Palazzo Citterio (2026)",
        "url": "https://pinacotecabrera.org/",
        "consiglio": "Elegir cinco o seis salas y no intentar verlas todas."
      },
      {
        "nome": "Castillo Sforzesco",
        "testo": "La fortaleza de los Visconti y los Sforza alberga hoy los museos cívicos. El más conocido guarda la Piedad Rondanini, la última obra de Miguel Ángel, dejada sin terminar. El patio y el parque Sempione son gratuitos.",
        "come": "Metro M1 Cairoli o M2 Lanza. Los patios y el jardín están abiertos a todos; los museos tienen entrada aparte.",
        "quando": "Museos cerrados los lunes. Mañana para el castillo, tarde para el parque.",
        "tempo": "2 horas con los museos, 1 hora para patios y parque",
        "url": "https://www.milanocastello.it/",
        "consiglio": "Con poco tiempo, entrar solo por la Piedad Rondanini: es una sola sala."
      },
      {
        "nome": "Galería Vittorio Emanuele II y La Scala",
        "testo": "La galería de vidrio y hierro del siglo XIX une Piazza Duomo con Piazza della Scala. Al lado está el teatro, con un museo de trajes, instrumentos y documentos.",
        "come": "A pocos pasos del Duomo. El museo de La Scala está en el Largo Ghiringhelli.",
        "quando": "La galería está siempre abierta. El museo de La Scala tiene horarios propios: comprobar antes. Por la noche para los escaparates iluminados.",
        "tempo": "1 hora para la galería y la plaza, una hora más con el museo",
        "consiglio": "Los cafés de la galería son caros: tomar el café en una calle lateral y usar la galería solo para pasear."
      },
      {
        "nome": "Navigli",
        "testo": "Dos canales, el Naviglio Grande y el Pavese, usados en su día para llevar el mármol del Duomo. Hoy están llenos de locales y talleres, con aperitivo al atardecer.",
        "come": "Metro M2 Porta Genova o tranvía. Se camina por los caminos de sirga.",
        "quando": "Por la noche para el aperitivo. El último domingo del mes hay un mercado de antigüedades en el Naviglio Grande.",
        "tempo": "2-3 horas por la noche",
        "consiglio": "Alejarse de los locales del canal: dos calles más allá los precios bajan."
      },
      {
        "nome": "Lago de Como: Varenna y Bellagio",
        "testo": "El lago prealpino más célebre, con pueblos de piedra y villas en las orillas. Varenna y Bellagio se miran y se unen en barco.",
        "come": "Tren de Milano Centrale a Varenna-Esino y luego barco a Bellagio. Líneas y horarios en Navigazione Laghi.",
        "quando": "Primavera y otoño, cuando los barcos van menos llenos. Los fines de semana de verano hay mucha gente.",
        "tempo": "Un día entero",
        "url": "https://www.navigazionelaghi.it/",
        "consiglio": "Ir en tren y barco, no en coche: la carretera costera es estrecha y sin aparcamiento."
      },
      {
        "nome": "Lago Mayor e Islas Borromeas",
        "testo": "Tres islas frente a Stresa: Isola Bella con el palacio barroco y el jardín, Isola Madre con el parque botánico, Isola dei Pescatori con su pueblo de pescadores.",
        "come": "Tren de Milano Centrale a Stresa y luego barco desde el paseo del lago. Entradas separadas para los palacios.",
        "quando": "De abril a octubre, con los jardines en flor en primavera. En temporada alta salir temprano.",
        "tempo": "Un día para dos islas",
        "consiglio": "Con un solo día elegir Isola Bella e Isola dei Pescatori: caben en el mismo recorrido."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Duomo y terrazas, a pie.",
          "Almuerzo: Galería Vittorio Emanuele II, luego un bocadillo o un risotto en una calle lateral.",
          "Primera hora de la tarde: Castillo Sforzesco, con la Piedad Rondanini.",
          "Tarde: Brera, a pie.",
          "Noche: aperitivo en los Navigli."
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1 como arriba; si se tiene la entrada de la Última Cena, ponerla en lugar del Castillo.",
          "Día 2: tren a Varenna y barco a Bellagio, o a Stresa para las Islas Borromeas.",
          "Almuerzo en el lago.",
          "Tarde: barco y regreso en tren antes del anochecer."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Duomo, Galería, La Scala, Brera.",
          "Día 2: Última Cena con entrada reservada, Castillo Sforzesco, Navigli por la noche.",
          "Día 3: un lago en el día, Como o Mayor."
        ]
      }
    ],
    zone: [
      {
        "nome": "Brera y el centro",
        "perChi": "Quien quiere ir andando a todas partes",
        "testo": "Cómodo y bonito, cerca del Duomo, Brera y el Castillo. El más caro de la ciudad, con locales que cierran pronto y menos vida por la noche."
      },
      {
        "nome": "Navigli y Porta Ticinese",
        "perChi": "Quien quiere las noches",
        "testo": "Locales y vida nocturna hasta tarde. El ruido del camino de sirga se oye en las habitaciones sobre el canal: mejor una habitación trasera."
      },
      {
        "nome": "Estación Central",
        "perChi": "Quien tiene poco presupuesto o sale en tren",
        "testo": "Hoteles más baratos y conexiones con los lagos y otras ciudades. La zona está menos cuidada y por la noche conviene tener cuidado; el centro está a pocas paradas de metro."
      }
    ],
    sapori: [
      {
        "nome": "Risotto alla milanese",
        "testo": "Arroz cremoso con azafrán y tuétano. Se come en una trattoria, a menudo junto al ossobuco."
      },
      {
        "nome": "Cotoletta alla milanese",
        "testo": "El corte es grueso y con hueso, empanado y frito en mantequilla, distinto del fino «vienés». Se encuentra en las trattorias tradicionales."
      },
      {
        "nome": "Ossobuco",
        "testo": "Jarrete de ternera estofado con gremolada. Es un plato de invierno."
      },
      {
        "nome": "Panettone",
        "testo": "Dulce navideño, pero en las pastelerías milanesas se encuentra bueno casi todo el año."
      },
      {
        "nome": "Aperitivo",
        "testo": "Se paga la bebida y el buffet va incluido, con una calidad muy variable. Los mejores están en los barrios, no en el centro."
      }
    ],
    attenzioni: [
      "Última Cena: sin reserva no se entra. Las ventas se abren por tandas: consultar el sitio oficial con meses de antelación.",
      "Area B y Area C limitan el acceso de coches al centro, con cámaras: quien entra sin saberlo recibe la multa.",
      "Salone del Mobile (abril) y semanas de la moda: el alojamiento sube mucho de precio, reservar con meses de antelación.",
      "Carteristas en el metro, delante del Duomo y en la estación Central: bolso cerrado por delante, nunca en el bolsillo trasero.",
      "Quien ofrece comida para palomas o pulseras en Piazza Duomo luego pide dinero: rechazar sin coger nada en la mano.",
      "Huelgas de transporte frecuentes (ATM y trenes): consultar el calendario antes de ir a los lagos."
    ],
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
    luoghi: [
      {
        "nome": "Palermo: Palacio de los Normandos y Capilla Palatina",
        "testo": "La Capilla Palatina, dentro del palacio real, reúne estructura normanda, mosaicos bizantinos y un techo de madera de artesanos árabes. El palacio tiene también los apartamentos reales.",
        "come": "A pie desde el centro histórico de Palermo, cerca de la Catedral, en Piazza del Parlamento. Se entra con entrada a hora fija; la visita es libre, audioguía opcional.",
        "quando": "De lunes a sábado de 8:30 a 16:30, domingos y festivos de 8:30 a 12:30 (horas de última entrada, web de la Fundación Federico II). Por la mañana, por la luz sobre los mosaicos. Consultar los cierres por ceremonias y sesiones de la asamblea regional.",
        "tempo": "1 hora y media",
        "url": "https://www.fondazionefedericosecondo.it/",
        "consiglio": "Mirar hacia arriba: los mosaicos del ábside ocupan una pared entera y el techo de muqarnas justifica el tortícolis."
      },
      {
        "nome": "Catedral de Monreale",
        "testo": "Una catedral normanda del siglo XII con miles de metros cuadrados de mosaicos dorados bizantinos y un claustro donde cada capitel es distinto. Dentro se entiende cómo Sicilia mantuvo juntas todas las culturas que la conquistaron.",
        "come": "Desde Palermo en el autobús AMAT 389 desde la Piazza Indipendenza (a dos pasos del Palazzo dei Normanni) o en taxi. La catedral se visita por libre; el claustro tiene entrada aparte.",
        "quando": "A primera hora o a primera hora de la tarde. El horario tiene una pausa a mediodía: comprobar antes.",
        "tempo": "2 horas",
        "consiglio": "Subir a la terraza de los tejados, si está abierta: se camina sobre la nave y se ve Palermo."
      },
      {
        "nome": "Ballarò y los mercados de Palermo",
        "testo": "Ballarò es el mercado histórico del centro: puestos de pescado, fruta, especias y freidurías. Se come allí mismo: arancine, panelle, sfincione, pan con bazo. La Vucciria es más pequeña y de noche se convierte en punto de reunión.",
        "come": "A pie desde el Teatro Massimo o la estación. El mercado abre por la mañana, hasta primera hora de la tarde.",
        "quando": "Por la mañana. El mercado cierra a primera hora de la tarde. El domingo está más tranquilo.",
        "tempo": "1-2 horas",
        "consiglio": "Comer de pie en los puestos más llenos de palermitanos, no en los que tienen carta en inglés."
      },
      {
        "nome": "Valle de los Templos, Agrigento",
        "testo": "Un parque de templos dóricos del siglo V a.C. alineados sobre una cresta. El Templo de la Concordia está entre los mejor conservados del mundo. El resto del parque baja hacia el jardín de la Kolymbethra.",
        "come": "Desde la estación de Agrigento se toma un autobús urbano hasta la entrada, o se va en coche con aparcamiento de pago. El camino por la cresta es llano.",
        "quando": "A primera hora o al atardecer: a mediodía en verano no hay sombra y el calor es muy fuerte. En verano hay aperturas nocturnas: consultar las fechas en la web.",
        "tempo": "3 horas",
        "url": "https://www.parcovalledeitempli.it/",
        "consiglio": "En las noches de verano se visita con los templos iluminados y una temperatura soportable."
      },
      {
        "nome": "Segesta y Selinunte",
        "testo": "Segesta tiene un templo dórico sin terminar y un teatro en la colina. Selinunte es un parque arqueológico muy extenso, con templos caídos y la acrópolis junto al mar. Reciben una fracción de los visitantes de Agrigento.",
        "come": "En coche desde Palermo, Segesta más cerca y Selinunte más lejos. Desde el aparcamiento de Segesta una lanzadera sube al teatro.",
        "quando": "Por la mañana, por el calor. Selinunte al atardecer es muy bonito.",
        "tempo": "2 horas en Segesta, 3 en Selinunte",
        "consiglio": "Dormir en Trapani o Marsala para ver los dos sitios con calma en día y medio."
      },
      {
        "nome": "Etna",
        "testo": "El volcán activo más alto de Europa. Se sube en teleférico desde Rifugio Sapienza y luego en todoterreno o a pie, caminando sobre lapilli negro que cruje bajo los pies, cerca de las fumarolas. Los cráteres de la cima se visitan solo con guía y dependen de la actividad.",
        "come": "Desde Catania en coche o autobús hasta el Rifugio Sapienza. Por encima de cierta altura el guía es obligatorio. Calzado cerrado, capas de abrigo y cortavientos.",
        "quando": "Mañana o atardecer con cielo despejado. Las ascensiones pueden suspenderse por actividad o por el tiempo.",
        "tempo": "Medio día, un día entero con la excursión a los cráteres",
        "url": "https://www.parcoetna.it/",
        "consiglio": "Llevar más capas de las que parecen necesarias: en altura hace frío incluso en verano."
      },
      {
        "nome": "Siracusa y Ortigia",
        "testo": "Ortigia es la isla del casco antiguo: la catedral está construida dentro de un templo dórico, con las columnas aún visibles en los muros. En el parque de la Neapolis están el teatro griego, la Oreja de Dionisio y el anfiteatro romano.",
        "come": "Ortigia a pie desde el puente; el parque arqueológico a pie o en autobús desde la estación. Se visita por libre.",
        "quando": "La Neapolis a primera hora. En mayo-junio, durante las representaciones clásicas en el teatro griego, la visita puede estar limitada.",
        "tempo": "Un día entero, medio día para Ortigia",
        "consiglio": "Cenar en Ortigia y alojarse fuera de la zona de tráfico limitado, donde aparcar cuesta menos."
      },
      {
        "nome": "Val di Noto: Noto, Módica y Ragusa Ibla",
        "testo": "Ciudades reconstruidas en estilo barroco tras el terremoto de 1693, patrimonio UNESCO. Noto tiene el escenario de una calle larga y dorada; Módica, el chocolate trabajado en frío; Ragusa Ibla, un centro sobre un espolón.",
        "come": "En coche, la manera adecuada: las tres ciudades están cerca entre sí. Se aparca fuera y se recorre a pie.",
        "quando": "A primera hora de la tarde para las fachadas doradas, de noche para Noto iluminada. Evitar agosto.",
        "tempo": "Un día para dos ciudades, dos días para tres",
        "consiglio": "Dormir en Ragusa Ibla o Módica: tranquilo y con muy buenos restaurantes, y se ahorra respecto a Noto."
      },
      {
        "nome": "Taormina y el teatro antiguo",
        "testo": "Un teatro grecorromano frente al Etna y el mar, en un pueblo en lo alto de un risco. Es la panorámica más fotografiada de la isla. La ciudad es cara, pero el teatro vale la subida.",
        "come": "Tren hasta Taormina-Giardini y luego autobús o taxi cuesta arriba. En coche, dejarlo en un aparcamiento de pago fuera del centro.",
        "quando": "A primera hora, antes de los autobuses turísticos, o al atardecer. Muy concurrido en temporada alta.",
        "tempo": "2 horas",
        "consiglio": "Subir a Castelmola a pie o en coche: mejor panorámica y mucha menos gente."
      },
      {
        "nome": "Villa Romana del Casale, Piazza Armerina",
        "testo": "Una villa romana del siglo IV con suelos de mosaico en casi todas las salas, entre ellos las «chicas en bikini». Está en el interior, lejos de la costa y de las rutas más trilladas.",
        "come": "En coche desde Enna o Catania, siguiendo hasta Piazza Armerina. Pasarelas elevadas guían la visita.",
        "quando": "Mañana o primera hora de la tarde; evitar las horas centrales del verano, la cubierta retiene el calor.",
        "tempo": "1 hora y media",
        "consiglio": "Combinarla con Enna y las Madonie: el interior cambia la percepción de la isla."
      },
      {
        "nome": "Vendicari, Zingaro y Scala dei Turchi",
        "testo": "Tres tramos de costa salvaje: Vendicari, al sureste, con playas y salinas; la reserva del Zingaro, entre Scopello y San Vito Lo Capo, con calas accesibles solo a pie; la Scala dei Turchi, un acantilado de marga blanca cerca de Agrigento.",
        "come": "En coche hasta la entrada de cada una. En el Zingaro y Vendicari se camina; a la Scala dei Turchi se va desde la playa de Realmonte.",
        "quando": "Primavera y principios de verano o septiembre. En agosto están llenas y achicharrantes. La entrada al Zingaro es de pago.",
        "tempo": "Medio día cada una",
        "consiglio": "Llevar agua, gorra y calzado de caminar incluso para la playa: no hay quioscos a lo largo de los senderos."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Palermo, mañana: Palacio de los Normandos y Capilla Palatina.",
          "Media mañana: Catedral y paseo hacia los Quattro Canti.",
          "Almuerzo: comida callejera en Ballarò.",
          "Tarde: Monreale en autobús o taxi.",
          "Noche: de vuelta a Palermo, cena con vino siciliano."
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Siracusa, Neapolis por la mañana y Ortigia por la tarde.",
          "Día 2: Val di Noto en coche, con Noto, Módica y Ragusa Ibla.",
          "Día 3: Etna por la mañana y Taormina por la tarde, regreso a Catania."
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Día 1: Palermo.",
          "Día 2: Monreale y Segesta, dormir en Trapani.",
          "Día 3: Selinunte y luego hacia Agrigento.",
          "Día 4: Valle de los Templos al amanecer o al atardecer, luego Piazza Armerina.",
          "Día 5: Catania y Etna."
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro de Palermo",
        "perChi": "Quien quiere ciudad, comida y arte",
        "testo": "Base ideal para el oeste. Ruidosa y caótica, con excelentes mercados, pero aparcar es difícil: mejor dormir donde haya garaje."
      },
      {
        "nome": "Catania",
        "perChi": "Quien llega en avión y quiere el Etna",
        "testo": "Base para el Etna, Siracusa y Taormina. Barroca y viva, con un centro algo descuidado fuera de las calles principales. Noches animadas, movimiento también de madrugada."
      },
      {
        "nome": "Ortigia, Siracusa",
        "perChi": "Quien busca un centro peatonal y mar",
        "testo": "Isla pequeña y compacta, bonita de noche, con zona de tráfico limitado. Habitaciones caras en temporada alta y aparcamiento fuera de la isla."
      },
      {
        "nome": "Ragusa Ibla y Módica",
        "perChi": "Quien quiere una base tranquila para el barroco",
        "testo": "Más tranquilas y baratas que Taormina y Noto, con muy buena cocina. Hacen falta coche y algo de paciencia con las calles en cuesta."
      }
    ],
    sapori: [
      {
        "nome": "Arancine",
        "testo": "Bolas de arroz fritas con ragú o con mantequilla y jamón. En Palermo son «arancine», en femenino y redondas; en Catania «arancini», en masculino y en forma de cono."
      },
      {
        "nome": "Pasta alla Norma",
        "testo": "Pasta con tomate, berenjena frita y ricota salada. Es el plato de Catania."
      },
      {
        "nome": "Comida callejera de Palermo",
        "testo": "Panelle de garbanzos, sfincione, pan con bazo. Se comen de pie en los mercados."
      },
      {
        "nome": "Cannoli y cassata",
        "testo": "El cannolo debe rellenarse al momento, con ricota; la cassata es una tarta de ricota y mazapán. Se encuentran en las pastelerías históricas."
      },
      {
        "nome": "Granita con brioche",
        "testo": "Granita de limón, almendra, pistacho o moras, con brioche col tuppo: el desayuno de verano. Se hace con agua, azúcar y fruta, no con nata."
      },
      {
        "nome": "Pasta con le sarde y erizos de mar",
        "testo": "En Palermo la pasta con sardinas, hinojo silvestre y pasas; en Siracusa los erizos de mar en temporada, comidos con pan."
      }
    ],
    attenzioni: [
      "El coche hace falta casi en todas partes, pero Palermo, Catania, Ortigia y Taormina tienen zonas de tráfico limitado con cámaras: preguntar al hotel dónde dejarlo y evitar multas.",
      "Calor extremo en julio y agosto, que puede superar los 40 grados en el interior y en los yacimientos sin sombra: agua, sombrero, visitas al amanecer o al atardecer.",
      "Etna: por encima de cierta altitud la guía es obligatoria y el acceso depende de la actividad del volcán y del tiempo. Consultar los avisos del parque antes de salir.",
      "Carteristas en los mercados y en el centro de Palermo y Catania: bolso por delante, móvil en el bolsillo.",
      "Los tiempos de viaje son más largos de lo previsto en las carreteras estatales del interior: dejar margen sobre lo que indica el mapa.",
      "Tasa turística en las principales ciudades: se paga en el hotel, consultar el importe del municipio."
    ],
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
    luoghi: [
      {
        "nome": "Cala Goloritzé",
        "testo": "Una cala de guijarros blancos bajo un pináculo de caliza de 143 metros, en el Golfo de Orosei, con agua transparente. Aguanta cualquier comparación con el Caribe. El acceso está regulado para protegerla.",
        "come": "A pie desde la meseta del Golgo, en Baunei, por un sendero que baja entre el monte bajo. En barco se puede acercar, pero el desembarco está limitado. Hace falta reserva.",
        "quando": "A primera hora, cuando se camina con fresco y la cala sigue vacía. Mayo-junio y septiembre. Reservar antes de salir: el número de accesos al día es limitado.",
        "tempo": "3-4 horas entre bajada, baño y subida",
        "consiglio": "Botas de trekking y litro y medio de agua por persona: la subida por la tarde en verano es dura."
      },
      {
        "nome": "Golfo de Orosei en barca: Cala Mariolu y Cala Luna",
        "testo": "Una serie de calas bajo el acantilado, accesibles casi solo por mar: Cala Luna con sus grutas, Cala Mariolu con guijarros rosas y blancos, Cala Sisine. Desde el mar se ve un tramo de costa que no se ve desde tierra.",
        "come": "Neumática o barca desde Cala Gonone, con salida del puerto. El capitán decide el itinerario y las paradas. Reservar con antelación en verano.",
        "quando": "Por la mañana, con mar en calma. Las salidas son de mayo a octubre. El agua está más clara antes del mediodía.",
        "tempo": "Un día entero",
        "consiglio": "Reservar una neumática pequeña para desembarcar en las calas más estrechas, donde las barcas grandes no llegan."
      },
      {
        "nome": "Garganta de Gorropu",
        "testo": "Una grieta excavada por el Rio Flumineddu entre paredes de caliza de hasta 500 metros, en el Supramonte. Se camina sobre rocas grandes como coches, con una franja de cielo encima. Parece un cañón americano y está en la Barbagia.",
        "come": "En coche desde Dorgali o Urzulei hasta Sa Barva, y luego un sendero largo hasta la entrada de la garganta, cruzando un río. El acceso puede tener normas y entrada: comprobar antes.",
        "quando": "Primavera y otoño. En verano hace calor y la garganta se llena. Tras lluvias fuertes el torrente puede impedir el paso.",
        "tempo": "Medio día, un día entero con el trekking largo",
        "consiglio": "Informarse de las normas de acceso y valorar un guía: el sendero se pierde en el cauce del río."
      },
      {
        "nome": "Orgosolo y Oliena, Barbagia",
        "testo": "Orgosolo es famosa por los murales políticos de sus casas, pintados desde los años sesenta: luchas campesinas, guerras, derechos. Oliena está a los pies del Supramonte, con viñedos de Cannonau y vistas al monte Corrasi.",
        "come": "En coche desde Nuoro, que está cerca de ambos. Se camina por los pueblos; los murales están todos en la calle.",
        "quando": "Mañana o última hora de la tarde. En otoño, con Autunno in Barbagia, los pueblos abren casas y talleres a los visitantes.",
        "tempo": "Medio día cada uno",
        "consiglio": "Respetar a las personas que viven en las casas pintadas: preguntar antes de fotografiar retratos."
      },
      {
        "nome": "Su Nuraxi de Barumini",
        "testo": "El complejo nurágico mejor conservado de la isla, patrimonio UNESCO: una torre central de la Edad del Bronce rodeada de bastiones y de una aldea de piedra. En Barumini se entra y se sube por escaleras dentro del grosor del muro.",
        "come": "En coche desde Cagliari; en tren y luego autobús, con pocas conexiones. La visita es guiada: un guía acompaña al grupo por las salas.",
        "quando": "Mañana o última hora de la tarde. El horario varía con la estación: consultar el sitio de la Fundación antes de ir.",
        "tempo": "1 hora y media",
        "url": "https://www.fondazionebarumini.it/",
        "consiglio": "Un nuraghe parece un montón de piedras hasta que se entra: las escaleras interiores explican cómo estaba hecho."
      },
      {
        "nome": "La Pelosa, Stintino",
        "testo": "Una playa de arena blanca y agua poco profunda, frente a la torre aragonesa y la isla Piana. Es de las más fotografiadas de Italia. Para protegerla, del 15 de mayo al 15 de octubre de 2026 solo se entra con reserva: 1.500 plazas al día, 3,50 € por persona (2026), gratis para menores de 12 años, controles de 8 a 18.",
        "come": "En coche hasta Stintino, en el noroeste, y luego a pie desde los aparcamientos. Se reserva en la web oficial spiaggialapelosa.it, como máximo 4 personas por reserva: 1.000 plazas se abren dos días antes, a las 9.",
        "quando": "A primera hora. Junio y septiembre, evitando julio y agosto. Con el mistral el mar está picado y la playa cerrada en parte.",
        "tempo": "Medio día",
        "consiglio": "Comprobar las normas de acceso unos días antes y llevar una esterilla para la arena."
      },
      {
        "nome": "Archipiélago de La Maddalena",
        "testo": "Un grupo de islas de granito rosa y agua verde en el noreste: La Maddalena, Caprera con la casa de Garibaldi, Spargi, Santa Maria. Budelli y la playa rosa están hoy protegidas y son inaccesibles.",
        "come": "Ferry de Palau a La Maddalena, también con coche, en una travesía corta. Para las otras islas hacen falta barcos o lanchas.",
        "quando": "Junio y septiembre. En agosto está muy concurrido y escasean las barcas.",
        "tempo": "Un día entero",
        "consiglio": "Reservar pronto la excursión en barca: las plazas de agosto vuelan."
      },
      {
        "nome": "Alghero y Gruta de Neptuno",
        "testo": "Alghero tiene un centro de huella catalana, con baluartes sobre el mar y la lengua todavía hablada. En el cercano Capo Caccia, la Gruta de Neptuno es una gran caverna con estalactitas y un lago interior.",
        "come": "Alghero en avión o en coche. Para la gruta: barco desde el puerto de Alghero o a pie por la Escala del Cabirol, la larga escalera excavada en el acantilado.",
        "quando": "Por la mañana. El barco no sale con mar picada. El atardecer sobre las murallas de Alghero es precioso.",
        "tempo": "Medio día para la gruta, un día entero con Alghero",
        "consiglio": "Elegir la escalera o el barco según el mar: si está agitado, la gruta puede estar cerrada."
      },
      {
        "nome": "Porto Flavia y las dunas de Piscinas",
        "testo": "En el Sulcis-Iglesiente, las minas abandonadas forman un paisaje geominero. Porto Flavia es un puerto excavado en el acantilado de Masua para cargar minerales en los barcos. En Piscinas, en la Costa Verde, las dunas están entre las más altas de Europa.",
        "come": "En coche desde Iglesias: Masua está cerca, Piscinas más lejos, con un tramo de pista. Para Porto Flavia, informarse antes de cómo se visita.",
        "quando": "Primavera y otoño. En verano las dunas arden.",
        "tempo": "Medio día cada uno",
        "consiglio": "Visitar las dunas al final del día, cuando la arena ya ha perdido el calor."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Cala Gonone, excursión en neumática por el Golfo de Orosei.",
          "Día 2: Garganta de Gorropu por la mañana, Oliena y Orgosolo por la tarde.",
          "Día 3: Cala Goloritzé a pie desde el Golgo, con reserva."
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Día 1: llegada a Olbia, ferri de Palau a La Maddalena y excursión en barca.",
          "Día 2: de Palau hacia Alghero por la costa.",
          "Día 3: Alghero, murallas y Gruta de Neptuno.",
          "Día 4: La Pelosa en Stintino y luego hacia el centro de la isla.",
          "Día 5: Su Nuraxi de Barumini y regreso a Cagliari."
        ]
      },
      {
        "titolo": "7 días",
        "tappe": [
          "Día 1: Cagliari y Su Nuraxi de Barumini.",
          "Día 2: Barbagia, Oliena y Orgosolo.",
          "Día 3: Gorropu.",
          "Día 4: Golfo de Orosei en barca.",
          "Día 5: Cala Goloritzé.",
          "Día 6: Alghero y Gruta de Neptuno.",
          "Día 7: Stintino y La Pelosa, vuelo desde Alghero."
        ]
      }
    ],
    zone: [
      {
        "nome": "Noreste: Palau y La Maddalena",
        "perChi": "Quien quiere mar y archipiélago",
        "testo": "Base para las islas y las playas de la Gallura. La Costa Esmeralda queda cerca y es cara. Ferris frecuentes a La Maddalena. Muy concurrido en temporada alta."
      },
      {
        "nome": "Centro-este: Cala Gonone, Dorgali, Baunei",
        "perChi": "Quien quiere calas y trekking",
        "testo": "Base para el Golfo de Orosei, Gorropu y Goloritzé. Carreteras largas y sinuosas; los pueblos del interior tienen agroturismos con muy buena relación calidad-precio."
      },
      {
        "nome": "Noroeste: Alghero y Stintino",
        "perChi": "Quien quiere ciudad y playas",
        "testo": "Alghero tiene un centro animado y el aeropuerto; a Stintino, cerca de La Pelosa, se llega en coche. Con el mistral el mar cambia de un lado a otro."
      },
      {
        "nome": "Suroeste: Sulcis y Costa Verde",
        "perChi": "Quien busca playas menos transitadas",
        "testo": "Playas y dunas casi vacías, minas, Carloforte. Más lejos de todo, hace falta coche y unos días más."
      }
    ],
    sapori: [
      {
        "nome": "Porceddu",
        "testo": "Lechón asado al espetón, con piel crujiente y aroma de mirto. Es el plato de las fiestas y de los almuerzos en agroturismo."
      },
      {
        "nome": "Culurgiones",
        "testo": "Raviolis de Ogliastra con patata, menta y pecorino, cerrados en forma de espiga. Se aliñan con salsa de tomate."
      },
      {
        "nome": "Pane carasau",
        "testo": "Pan fino y crujiente de pastores, que se come con aceite o como base del «pane guttiau»."
      },
      {
        "nome": "Pecorino sardo y fiore sardo",
        "testo": "Quesos de oveja en todas las curaciones, el fiore sardo también ahumado. Se compran a los productores."
      },
      {
        "nome": "Cannonau y Vermentino",
        "testo": "El Cannonau es el tinto emblema, de los viñedos de Oliena y Jerzu. El Vermentino di Gallura es la única DOCG de la isla."
      },
      {
        "nome": "Mirto",
        "testo": "El licor de bayas, que se bebe frío al final de la comida. El casero es más dulce."
      }
    ],
    attenzioni: [
      "Algunas playas y calas tienen acceso regulado, a veces con reserva (por ejemplo La Pelosa, con reserva del 15 de mayo al 15 de octubre y 3,50 € en 2026, y Cala Goloritzé): comprobar las normas de la temporada antes de ir.",
      "Está prohibido llevarse arena, guijarros y conchas: las multas son altas y hay controles en puertos y aeropuertos.",
      "Los ferris con coche para el verano se reservan con meses de antelación y los precios suben en julio y agosto.",
      "Trekkings como Gorropu y Goloritzé: en verano hace calor, hace falta mucha agua, calzado adecuado, y tras las tormentas los torrentes pueden impedir el paso.",
      "Incendios en verano: prohibidos fuegos y barbacoas en el matorral, y las carreteras pueden cerrar. Respetar las prohibiciones de los municipios.",
      "Carreteras interiores estrechas y sinuosas, con ovejas y curvas ciegas: contar con más tiempo del que sugiere el navegador y repostar antes de entrar en el Supramonte."
    ],
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
    luoghi: [
      {
        "nome": "Stromboli",
        "testo": "Isla-volcán con erupciones casi continuas del cráter, visibles cada pocos minutos. Bajo la Sciara del Fuoco está el pueblo, con pocos habitantes. El recuerdo más fuerte para mí fue verla desde el mar de noche, con el motor apagado frente a la Sciara, cuando el cráter lanza material incandescente hasta el agua.",
        "come": "Hidroala desde Milazzo o desde Lipari y las demás Eolias. En la isla se camina y se usan taxis-ape. Por encima de la cota libre hacen falta guías vulcanológicos autorizados.",
        "quando": "La subida está regulada por ordenanzas que cambian con la actividad del volcán: la cota máxima, el acceso a la cima y la obligación de guía se consultan en el Ayuntamiento de Lipari o con los guías autorizados antes de reservar. Junio y septiembre, con mar en calma, para las salidas en barco.",
        "tempo": "1 jornada completa, mejor una noche",
        "consiglio": "Por la noche se cena en Stromboli y se sale en barco a oscuras: no hace falta la cima para ver las explosiones. Linterna frontal, botas de trekking y un jersey incluso en septiembre."
      },
      {
        "nome": "Salina",
        "testo": "La segunda isla más grande de las Eolias, dos conos volcánicos gemelos cubiertos de verde, con viñedos de malvasía y alcaparras. Tiene pueblos como Malfa y Pollara, donde se rodó 'El cartero', y senderos en el Monte Fossa delle Felci.",
        "come": "Aliscafo desde Milazzo o Lipari; en temporada alta desembarcos en Santa Marina y Rinella. En la isla hay pocos autobuses y conviene la moto.",
        "quando": "Junio y septiembre. En verano el atardecer en Pollara está lleno; mejor a primera hora de la mañana.",
        "tempo": "1-2 días",
        "consiglio": "Probar el atardecer en Pollara y la malvasía passito en una bodega. En agosto los enlaces van llenos."
      },
      {
        "nome": "Lago Specchio di Venere, Pantelleria",
        "testo": "Lago termal en el cráter de un volcán apagado, con aguas calientes en la orilla y barros usados para los baños. Desde arriba tiene forma de corazón, justo encima de la carretera a Bukkuram. Pantelleria está más cerca de África que de Sicilia: roca negra, viento y viñas en vaso cultivadas en hoyos excavados en el suelo, técnica reconocida por la UNESCO.",
        "come": "Hace falta coche o moto desde Pantelleria pueblo. Se llega en avión desde Trapani, Palermo y Catania, o por mar desde Trapani en ferry o hidroala; con mar agitado se cancelan los viajes.",
        "quando": "Primavera y otoño para caminar, junio y septiembre para el baño. La isla es muy ventosa. El baño de barro y el chapuzón en el lago son más agradables por la mañana.",
        "tempo": "2-3 horas",
        "consiglio": "Si se hace el baño de barro, quitarse las joyas y ducharse en el lago antes de volver. Llevar escarpines: no hay playas de arena."
      },
      {
        "nome": "Dammusi, jardines panteschi y Montagna Grande",
        "testo": "Los dammusi son casas de piedra lávica con cúpula, construidas para resistir el viento y el calor. Los jardines panteschi son muros de piedra circulares que protegen un solo cítrico. La Montagna Grande es la cima de la isla, con senderos en el bosque.",
        "come": "Carreteras interiores para recorrer en coche o moto. Los senderos parten de la carretera a Montagna Grande.",
        "quando": "Primavera y otoño. El verano es tórrido de día y los días de siroco dificultan los senderos.",
        "tempo": "media jornada",
        "consiglio": "Las bodegas locales hacen catas de passito: reservar. La viña en vaso se ve sobre todo en el sur."
      },
      {
        "nome": "Capri: Faraglioni y Gruta Azul",
        "testo": "Los tres Faraglioni son rocas de más de 100 metros al sureste, mejor vistos desde un barco. La Gruta Azul se visita con barquitas de remos desde Marina Grande, pero queda cerrada con mar movida. En verano Capri está asaltada por visitantes de un día.",
        "come": "Hidroala o ferry desde Nápoles y Sorrento. En la isla se va en autobús y funicular, y luego a pie.",
        "quando": "Mayo, junio y septiembre; fuera de temporada Capri es otra isla. La Gruta Azul se visita con mar en calma, a primera hora.",
        "tempo": "1 día, mejor 2 con una noche",
        "consiglio": "Para escapar de la multitud, dar la vuelta a la isla en barco temprano y subir luego a Anacapri. Por la tarde los Faraglioni lucen más a contraluz."
      },
      {
        "nome": "Procida: Marina Corricella y Terra Murata",
        "testo": "La más pequeña y menos cara de las tres islas del golfo de Nápoles. Marina Corricella es un puerto de pescadores con casas pintadas, Terra Murata el pueblo alto con la abadía de San Michele Arcangelo.",
        "come": "Ferry o hidroala desde Nápoles (Molo Beverello y Calata Porta di Massa) o Pozzuoli. En la isla se camina y circulan microbuses.",
        "quando": "Todo el año, pero de mayo a septiembre. En julio y agosto los barcos de un día traen mucha gente.",
        "tempo": "1 día",
        "consiglio": "Bajar a Corricella por la escalinata y comer en uno de los locales del muelle."
      },
      {
        "nome": "Ponza y Palmarola",
        "testo": "Ponza es una isla de toba amarilla, con grutas y calas. Palmarola, deshabitada, tiene acantilados y arcos naturales, y se alcanza con barcas de pescadores desde Ponza. El mar es de los más claros del Tirreno.",
        "come": "Ferry o hidroala desde Anzio, Formia o Terracina. En la isla se camina o se coge el autobús; la vuelta en barco se reserva en el puerto.",
        "quando": "Junio y septiembre. En agosto Ponza se llena con el público romano.",
        "tempo": "1-2 días",
        "consiglio": "La vuelta en barco es la mejor forma: salir pronto y parar a bañarse en Palmarola. Chiaia di Luna suele estar prohibida por riesgo de desprendimientos."
      },
      {
        "nome": "Islas Tremiti",
        "testo": "El único archipiélago italiano del Adriático, con San Domino y San Nicola y un área marina protegida. San Domino tiene pinares, calas y grutas. San Nicola tiene la abadía fortificada con vistas de 360 grados.",
        "come": "Ferris e hidroalas desde Termoli, Vieste, Peschici, Rodi Garganico y Ortona; desde Termoli la travesía es la más corta.",
        "quando": "Junio y septiembre. En invierno los enlaces se reducen.",
        "tempo": "1-2 días",
        "consiglio": "Hacer snorkel con un operador local: la zona está protegida y el acceso en barco está regulado."
      },
      {
        "nome": "Favignana",
        "testo": "Isla de las Egadi, llana al este, con canteras de toba y la gran antigua fábrica Florio para procesar el atún. La isla tiene mar turquesa en Cala Rossa y Lido Burrone.",
        "come": "Hidroala desde Trapani o Marsala. En la isla se alquila una bici: las distancias son cortas.",
        "quando": "Mayo, junio y septiembre. A primera hora las calas están vacías.",
        "tempo": "1 día",
        "consiglio": "Vuelta en bici por las canteras, luego cena de atún. Reservar la bici en temporada alta."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: aliscafo desde Milazzo, llegada a Salina, vuelta y atardecer en Pollara",
          "Día 2: traslado a Stromboli, cena en la isla",
          "Día 3: salida en barco hacia la Sciara del Fuoco a oscuras"
        ]
      },
      {
        "titolo": "4 días",
        "tappe": [
          "Días 1-2: Capri y Procida desde el golfo de Nápoles",
          "Días 3-4: Ponza y Palmarola con vuelta en barco"
        ]
      }
    ],
    zone: [
      {
        "nome": "Eolias: Salina, Lipari o Stromboli",
        "perChi": "quien quiere varias islas en un viaje",
        "testo": "Salina es verde y tranquila, Lipari la más cómoda, Stromboli pequeña y espartana. Los servicios dependen del mar y se cancelan a menudo."
      },
      {
        "nome": "Pantelleria",
        "perChi": "quien busca una isla de carácter sin arena",
        "testo": "Se duerme en dammusi, hace falta coche. El viento es constante y los horarios de enlace cambian con el tiempo."
      },
      {
        "nome": "Golfo de Nápoles: Procida",
        "perChi": "quien tiene pocos días",
        "testo": "Procida cuesta menos que Capri e Ischia, con vida de pueblo y conexiones frecuentes desde Nápoles."
      }
    ],
    sapori: [
      {
        "nome": "Pane cunzato y alcaparras, Eolias",
        "testo": "Pan aderezado con tomate, anchoas, alcaparras, orégano y queso. Las alcaparras de Salina son un presidio Slow Food."
      },
      {
        "nome": "Malvasía de las Lipari",
        "testo": "Vino blanco dulce de uvas pasificadas, la Malvasía de Salina y Lipari. Se bebe al final de la comida."
      },
      {
        "nome": "Passito de Pantelleria",
        "testo": "Vino dulce de uva zibibbo cultivada en vaso, patrimonio UNESCO. Se prueba en las bodegas locales, con reserva."
      },
      {
        "nome": "Conejo a la ischitana",
        "testo": "Plato de tierra de Ischia: conejo en cazuela con tomate, ajo y vino. Se come en las trattorias del campo."
      },
      {
        "nome": "Atún de Favignana",
        "testo": "Atún rojo trabajado durante generaciones en la fábrica Florio. En conserva o fresco en los restaurantes del puerto."
      },
      {
        "nome": "Cocina de tierra",
        "testo": "En las islas menores el pescado es caro y la cocina de tierra es barata y a menudo mejor."
      }
    ],
    attenzioni: [
      "En julio y agosto las islas menores están saturadas y los precios se multiplican: reservar alojamiento y ferris con meses de antelación o ir en junio y septiembre.",
      "El mar movido bloquea aliscafos y ferris: no encajar combinaciones ajustadas con vuelos o trenes el mismo día.",
      "Stromboli: la subida está regulada por una ordenanza que cambia con la actividad del volcán (cota permitida, obligación de guía): comprobarla antes. Quien no la respeta se arriesga a multas y peligros.",
      "Muchas islas limitan o prohíben el desembarco de coches en verano: llevar el coche es casi siempre inútil y caro.",
      "El agua dulce escasea y llega con barcos cisterna: usarla con moderación.",
      "Fuera de temporada (noviembre-marzo) muchos negocios están cerrados y los enlaces reducidos: comprobar qué está abierto antes de salir."
    ],
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
    luoghi: [
      {
        "nome": "Pietrabbondante y el Molise samnita",
        "testo": "El santuario samnita de Pietrabbondante, en lo alto del Alto Molise, tiene un teatro-templo del siglo II a.C. con gradas de piedra y el templo principal. Alrededor se extienden colinas vacías por las que pasaban los tratturi, las vías de trashumancia reconocidas por la UNESCO.",
        "come": "En coche desde Isernia o Campobasso. No hay transporte público útil. Se visita por libre, con paneles.",
        "quando": "Primavera y otoño. Comprobar horarios y días de apertura con el Ayuntamiento o la Soprintendenza antes de salir, sobre todo fuera de temporada.",
        "tempo": "1-2 horas, más la vuelta por los pueblos",
        "consiglio": "Combinar la visita con una comida en una trattoria del pueblo, llegando pronto: pasada la hora de comer la cocina cierra."
      },
      {
        "nome": "Termoli",
        "testo": "Pequeña ciudad marinera con el casco antiguo en el promontorio, el castillo suabo y los trabucchi, antiguas máquinas de pesca sobre palafitos. Es el puerto del que salen los ferris a las islas Tremiti.",
        "come": "Tren por la línea adriática o autopista A14. Al casco antiguo se llega a pie desde la estación.",
        "quando": "Mayo-junio y septiembre. En agosto se llena de veraneantes italianos.",
        "tempo": "media jornada",
        "consiglio": "Comer el brodetto alla termolese en uno de los locales del puerto y pasear por el paseo marítimo al atardecer."
      },
      {
        "nome": "Parque Nacional del Pollino",
        "testo": "El parque más grande de Italia, entre Basilicata y Calabria, con cumbres de más de 2.000 metros y pinos loricados, árboles centenarios que crecen a gran altitud solo aquí y en pocos lugares de los Balcanes. Los senderos parten de los pasos de Colle Impiso y Piano di Ruggio.",
        "come": "Solo en coche. Desde Terranova di Pollino o San Severino Lucano. Orientarse con mapa o app de senderos; hace falta calzado de montaña.",
        "quando": "Junio-septiembre por la altitud, octubre por los colores. De noviembre a mayo nieve y carreteras cortadas.",
        "tempo": "1-2 días",
        "consiglio": "Llenar el depósito y llevar comida: en los pueblos de montaña las tiendas cierran pronto. El tiempo cambia rápido por encima de 1.800 metros."
      },
      {
        "nome": "Montes Sibillini y Castelluccio di Norcia",
        "testo": "Parque con cumbres de más de 2.000 metros y la meseta del Piano Grande de Castelluccio, conocida por la floración de las lentejas y las flores silvestres. El terremoto de 2016 afectó a muchos pueblos: hoy están en parte reconstruidos.",
        "come": "En coche desde Norcia o desde las Marcas. Algunas carreteras pueden estar cerradas por desprendimientos u obras: comprobar.",
        "quando": "La floración se concentra entre finales de mayo y julio. En los fines de semana de floración el Piano se llena de coches.",
        "tempo": "1 jornada",
        "url": "https://www.sibillini.net/",
        "consiglio": "Visitar entre semana y a primera hora para la mejor luz, y no caminar entre los campos florecidos."
      },
      {
        "nome": "Carnia y los valles del Friuli",
        "testo": "Valles alpinos con casas de piedra, pueblos como Sauris y Forni di Sopra y una cultura de frontera entre friulano, alemán y esloveno. Aquí nació el albergo diffuso, que usa las casas de los pueblos despoblados.",
        "come": "En coche desde Udine hacia Tolmezzo. Los valles se recorren en coche y con caminatas cortas.",
        "quando": "Junio-septiembre para los senderos, invierno para la nieve. El Friuli es una de las zonas más lluviosas de Italia.",
        "tempo": "2-3 días",
        "consiglio": "Probar el jamón de Sauris y el queso de majada, y preguntar por los senderos en la oficina de turismo."
      },
      {
        "nome": "Val Grande",
        "testo": "Una de las mayores áreas salvajes de Italia, sin carreteras ni pueblos habitados, entre el Lago Mayor y Suiza. Hay pastos alpinos abandonados recuperados por el bosque y senderos poco señalizados. No apta para principiantes.",
        "come": "Los accesos parten de Cicogna, Premosello y el Val d'Ossola. Hacen falta autonomía, mapas y agua: los vivacs son esenciales y no hay cobertura.",
        "quando": "Finales de primavera hasta otoño. Tras las lluvias los senderos pueden ser impracticables.",
        "tempo": "2-4 días de trekking",
        "url": "https://www.parcovalgrande.it/",
        "consiglio": "Pedir información al ente del parque antes de salir y comunicar el recorrido. Cada año hay rescates de quien subestima la zona."
      },
      {
        "nome": "Aspromonte y Pentedattilo",
        "testo": "Parque nacional que pasa del mar a casi 2.000 metros en pocos kilómetros. Pentedattilo es un pueblo fantasma al pie de una roca con forma de mano; Roghudi y Gallicianò son comunidades grecánicas, donde sobrevive el grecánico, un dialecto de origen griego.",
        "come": "En coche desde Reggio Calabria. Las carreteras del interior son lentas y están en mal estado en algunos tramos.",
        "quando": "Primavera y otoño. El verano es tórrido en la costa.",
        "tempo": "2-3 días",
        "consiglio": "En el Museo Arqueológico de Reggio Calabria se ven los Bronces de Riace: hacerlo el día de llegada o de salida."
      },
      {
        "nome": "Via degli Dei",
        "testo": "Camino de unos 130 km de Bolonia a Florencia que sigue la antigua vía romana por los Apeninos. Se duerme en albergues y hospederías y se camina 4-5 días, con subidas y escalinatas.",
        "come": "Tren hasta Bolonia para la salida, regreso en tren desde Florencia. El trazado está señalizado; albergues por reservar.",
        "quando": "Abril-junio y septiembre-octubre. En verano el calor y en invierno el barro.",
        "tempo": "4-5 días",
        "consiglio": "Reservar las camas con antelación y llevar poco peso: las etapas son largas."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Pietrabbondante y almuerzo en una trattoria de pueblo",
          "Día 1 por la noche: Isernia o un agroturismo",
          "Día 2: Termoli, casco antiguo y trabucchi, luego el mar"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Pollino, sendero a los pinos loricados",
          "Día 2: pueblos lucanos y cena en una trattoria",
          "Día 3: Castelluccio o el Aspromonte, según la dirección del viaje"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agroturismos y albergues difusos",
        "perChi": "quien quiere precios bajos y cocina auténtica",
        "testo": "Los precios son mucho más bajos que en las zonas turísticas. Hacen falta coche y reserva: muchos sitios cierran entre noviembre y marzo."
      },
      {
        "nome": "Capitales de provincia (Isernia, Campobasso, Reggio Calabria)",
        "perChi": "quien llega en tren",
        "testo": "Cómodas como base por los trenes regionales, pero poco interesantes. Desde allí se toma el coche para los pueblos."
      },
      {
        "nome": "B&B de pueblo",
        "perChi": "quien quiere hablar con la gente del lugar",
        "testo": "Pocas camas, hospitalidad familiar. Preguntar dónde comer: a menudo no hay carta escrita."
      }
    ],
    sapori: [
      {
        "nome": "Cavatelli y pasta hecha a mano",
        "testo": "En la Italia interior la pasta fresca cambia de nombre cada veinte kilómetros. Se come en trattorias de pueblo, a menudo sin carta."
      },
      {
        "nome": "Caciocavallo y quesos de pequeña producción",
        "testo": "Quesos de majada y de quesería familiar, del Molise a la Carnia."
      },
      {
        "nome": "Frico de la Carnia",
        "testo": "Queso y patatas cocinados en sartén hasta formar una costra dorada. Plato de montaña friulano."
      },
      {
        "nome": "Pimientos cruschi de Senise",
        "testo": "Pimientos secos y fritos, crujientes, típicos de la Basilicata y del área del Pollino."
      },
      {
        "nome": "Lentejas de Castelluccio",
        "testo": "Pequeñas lentejas cultivadas en la meseta de los Sibillini, que se comen en sopa."
      }
    ],
    attenzioni: [
      "Coche imprescindible: en estas zonas el transporte público llega a las capitales y ahí se acaba. Calcular más tiempo del que estiman los mapas.",
      "Se come pronto a mediodía y pronto por la noche; el domingo por la noche y el lunes muchos sitios cierran. A media tarde no se encuentra nada.",
      "Falta cobertura en muchos valles: descargar mapas sin conexión y llenar el depósito cuando se pueda.",
      "Val Grande y la alta montaña del Pollino son entornos para excursionistas expertos: tiempo cambiante, pocos refugios, rescate lejano.",
      "En agosto los pueblos se llenan de emigrados que regresan: es el periodo más vivo, no el más tranquilo.",
      "Tras el terremoto de 2016 algunas carreteras y pueblos de los Sibillini tienen cortes: comprobar los avisos del ente del parque."
    ],
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
    luoghi: [
      {
        "nome": "Barolo y La Morra (Langhe)",
        "testo": "Las colinas de Barolo, patrimonio UNESCO con Langhe-Roero y Monferrato, están cubiertas de viñedos de nebbiolo. El pueblo de Barolo tiene el castillo Falletti y La Morra el mirador sobre el mar de colinas. Aquí el vino es el pretexto para un paisaje agrario construido durante siglos.",
        "come": "En coche desde Alba. Las bodegas reciben con reserva: escribir con unos días de antelación. Muchas carreteras son estrechas y en cuesta.",
        "quando": "Septiembre-octubre en vendimia, o abril-junio con el verde. En agosto muchas bodegas cierran.",
        "tempo": "1 jornada, 2 bodegas",
        "consiglio": "Reservar una sola bodega por la mañana y otra por la tarde. Después de la tercera ya no se prueba nada con atención."
      },
      {
        "nome": "Alba y la trufa blanca",
        "testo": "Capital de las Langhe, con la feria internacional de la trufa blanca en otoño, cuando la ciudad se llena. Tiene torres, soportales y tiendas de chocolate y avellanas.",
        "come": "Desde Turín en tren con transbordo, aunque es más cómodo el coche. En la ciudad se va a pie.",
        "quando": "Octubre-noviembre para la trufa. Fuera de la feria Alba es más tranquila.",
        "tempo": "media jornada",
        "consiglio": "En la feria los precios de la trufa son altos: preguntar el peso y el precio antes de pedir, y preferir restaurantes con trufa de temporada."
      },
      {
        "nome": "Valpolicella (Véneto)",
        "testo": "Colinas al noroeste de Verona donde se produce el Amarone: las uvas se pasifican durante meses en los fruttai antes de prensarse. Villas venecianas e iglesias románicas salpican los pueblos de Fumane y San Pietro in Cariano.",
        "come": "En coche o taxi desde Verona. Las bodegas reciben con cita.",
        "quando": "Septiembre-octubre para la vendimia, enero-febrero para el prensado de las uvas pasificadas.",
        "tempo": "1 jornada",
        "consiglio": "Si quien conduce no bebe, el taxi desde Verona a las bodegas es una solución sencilla."
      },
      {
        "nome": "Colinas del Prosecco entre Conegliano y Valdobbiadene",
        "testo": "Patrimonio UNESCO desde 2019: hileras de viñas en colinas empinadas, con la ruta del Prosecco Superiore entre pueblos y tabernas. El Cartizze es el viñedo más valorado, una pequeña zona de colinas sobre Valdobbiadene.",
        "come": "En coche desde Treviso o en tren hasta Conegliano. En bici se hace una vuelta entre las viñas.",
        "quando": "Primavera y otoño. No en agosto: hace calor y muchas bodegas están cerradas.",
        "tempo": "1 jornada",
        "consiglio": "Las osterias de Valdobbiadene sirven el Prosecco espumoso con embutidos: almorzar allí tras la visita a la bodega."
      },
      {
        "nome": "Chianti Classico (Toscana)",
        "testo": "El territorio entre Florencia y Siena con Greve, Castellina, Radda y Gaiole. El Gallo Nero es la marca del consorcio. Iglesias rurales, castillos y granjas se alternan con viñas y olivares.",
        "come": "En coche desde Florencia o Siena. La carretera Chiantigiana atraviesa los pueblos.",
        "quando": "Abril-junio y septiembre-octubre. En verano hay muchas excursiones en autocar.",
        "tempo": "1-2 jornadas",
        "consiglio": "Dormir en agroturismo y visitar bodegas pequeñas: a menudo recibe el propio productor."
      },
      {
        "nome": "Montalcino y Brunello",
        "testo": "Pueblo medieval con la fortaleza y las bodegas del Brunello, sangiovese en pureza. La Abadía de Sant'Antimo, románica, está a pocos kilómetros entre olivos.",
        "come": "En coche desde Siena. Montalcino se recorre a pie, las bodegas están repartidas alrededor.",
        "quando": "Primavera y otoño. Reservar las bodegas con antelación.",
        "tempo": "1 jornada",
        "consiglio": "Visitar la Abadía de Sant'Antimo temprano, cuando hay silencio y la luz entra de lado en las naves."
      },
      {
        "nome": "Etna (Sicilia)",
        "testo": "Contrade en las laderas del volcán, con viñas de nerello mascalese a pie franco, libres de la filoxera. Algunas tienen más de cien años. Se cata en bodegas de piedra lávica.",
        "come": "En coche desde Catania, por carreteras sinuosas y lentas. Base en Linguaglossa, Castiglione di Sicilia o Randazzo.",
        "quando": "Septiembre-octubre para la vendimia, pero el Etna es bonito también en primavera.",
        "tempo": "1-2 jornadas",
        "consiglio": "Pedir ver las viñas viejas: se entiende por qué el suelo lávico salvó las vides del parásito."
      },
      {
        "nome": "Collio y Colli Orientali (Friuli)",
        "testo": "Colinas en la frontera con Eslovenia, famosas por los vinos blancos: ribolla gialla, friulano, malvasía. Muchas bodegas hacen vinos macerados con las pieles, llamados orange.",
        "come": "En coche desde Gorizia o Cormons, que están cerca. Las bodegas son pequeñas y familiares.",
        "quando": "Primavera y otoño. En verano hay más sol.",
        "tempo": "1-2 jornadas",
        "consiglio": "Cruzar la frontera eslovena para almorzar en una gostilna: a poca distancia cambia la cocina."
      },
      {
        "nome": "Irpinia y Vulture (Campania y Basilicata)",
        "testo": "Dos grandes tintos del sur: el Taurasi en Irpinia y el Aglianico del Vulture, ambos de aglianico. En Irpinia también los blancos Fiano di Avellino y Greco di Tufo. Zonas con pocos turistas y precios bajos.",
        "come": "Solo en coche desde Avellino o Potenza. Pocas bodegas tienen instalaciones para visitantes.",
        "quando": "Septiembre-octubre. Verano muy caluroso.",
        "tempo": "2 jornadas, una por zona",
        "consiglio": "Aquí uno se encuentra a menudo en la bodega donde el propietario está trasegando: es el momento de hacer preguntas."
      },
      {
        "nome": "Valtellina (Lombardía)",
        "testo": "Terrazas de viñedos sostenidas por cientos de kilómetros de muros de piedra seca en pendientes empinadas, para el nebbiolo de montaña, aquí llamado chiavennasca. El Sforzato se obtiene de uvas pasificadas.",
        "come": "Tren de Milán a Tirano o Sondrio. Para moverse entre bodegas hace falta coche.",
        "quando": "Septiembre-octubre. En verano el fondo del valle es caluroso y tiene tráfico.",
        "tempo": "1-2 jornadas",
        "consiglio": "Caminar un tramo de la Via dei Terrazzamenti, el sendero entre los muros, antes o después de las catas."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: bodega en Barolo, con reserva",
          "Almuerzo: osteria con platos piamonteses",
          "Tarde: segunda bodega en La Morra y mirador",
          "Noche: en Alba, aperitivo y cena"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Barolo, La Morra y almuerzo en una osteria",
          "Día 2: Barbaresco y Alba",
          "Quien conduce prueba y escupe, o se contrata un chófer"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2: como arriba",
          "Día 3: Roero y Monferrato, o el lago de Orta",
          "Regreso a Turín, con el Valle de Susa como alternativa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Alba y alrededores",
        "perChi": "quien quiere cocina y trufa",
        "testo": "Ciudad pequeña, base cómoda para las Langhe, pero cara en octubre. Trenes lentos, mejor el coche."
      },
      {
        "nome": "Agroturismos entre las viñas",
        "perChi": "quien busca tranquilidad",
        "testo": "Se duerme en las propias bodegas, con paisaje. Hacen falta coche y reserva, en temporada alta los precios suben."
      },
      {
        "nome": "Verona o Siena",
        "perChi": "quien une el vino a una ciudad",
        "testo": "Se duerme en la ciudad y se va a las bodegas en coche: ideal si gustan los monumentos, pero sin colinas por la noche."
      }
    ],
    sapori: [
      {
        "nome": "Tajarin y carne cruda",
        "testo": "La pasta al huevo fina de las Langhe y la carne cruda picada a cuchillo. Se comen en todas las osterias de Alba."
      },
      {
        "nome": "Vitello tonnato",
        "testo": "Entrante piamontés: ternera fría con salsa de atún y alcaparras."
      },
      {
        "nome": "Risotto all'Amarone",
        "testo": "Plato de la Valpolicella a base de arroz cocido en vino Amarone."
      },
      {
        "nome": "Bistecca y pici",
        "testo": "Chuletón a la florentina en el Chianti; pici hechos a mano en Montalcino y Montepulciano."
      },
      {
        "nome": "Pasta alla Norma",
        "testo": "Pasta con tomate, berenjenas fritas y ricotta salada, típica de Catania y del Etna."
      },
      {
        "nome": "Pizzoccheri",
        "testo": "Tallarines de trigo sarraceno con berza, patatas y queso: plato de la Valtellina."
      }
    ],
    attenzioni: [
      "Presentarse en una bodega sin cita es el error número uno: muchas bodegas reciben solo con reserva, a menudo con unos días de antelación.",
      "Quien conduce no cata: las sanciones por conducir ebrio son severas y hay controles en las zonas vinícolas. Prever chófer, taxi o lanzadera.",
      "No más de dos o tres bodegas al día, si no se pierde el gusto y la seguridad.",
      "En agosto muchas bodegas cierran o reducen las visitas, mientras que en vendimia se llenan.",
      "En las zonas famosas (Barolo, Montalcino) los precios de alojamiento y cata son altos: considerar Irpinia, Vulture, Valtellina y Etna.",
      "Comprar en la bodega cuesta menos que en la enoteca y se habla con quien ha hecho el vino."
    ],
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
    luoghi: [
      {
        "nome": "Museo Egizio",
        "testo": "Una de las colecciones egipcias más importantes fuera de El Cairo, nacida en 1824 del núcleo reunido por el cónsul Drovetti. La pieza imprescindible es la tumba de Kha y Merit, hallada intacta en 1906 con todo su ajuar. Después, el Templo de Ellesiya, la Galería de los Reyes y el Papiro de las Minas de Oro.",
        "come": "En pleno centro, a pie desde Piazza Castello o Piazza San Carlo. La entrada se compra obligatoriamente online, por franja horaria. Audioguía o app para entender las piezas.",
        "quando": "Abierto todos los días: lunes de 9 a 14, de martes a viernes y domingo de 9 a 18:30, sábado de 9 a 20; algunos días hay aperturas nocturnas especiales, en la web. A primera hora o el sábado por la noche para evitar multitudes. Las Salas Históricas están cerradas temporalmente desde el 12 de diciembre de 2025: ver el aviso en la web.",
        "tempo": "3 horas, mejor 4",
        "costo": "18 euros entrada general (2026)",
        "url": "https://www.museoegizio.it/",
        "consiglio": "Reservar la franja horaria en línea, sobre todo en fines de semana y puentes. Dejar para el final la Galería de los Reyes, cuando las piernas están cansadas."
      },
      {
        "nome": "Mole Antonelliana y Museo Nacional del Cine",
        "testo": "Iniciada en 1863 como sinagoga y nunca usada como tal, es el símbolo de la ciudad. Dentro está el museo del cine, dispuesto en espiral alrededor de la sala central, con butacas rojas reclinables en el centro. El ascensor panorámico de cristal sube por el vacío hasta el templete.",
        "come": "En via Montebello, a pie desde Piazza Castello. Entrada al museo, al ascensor o combinada, con franja horaria.",
        "quando": "En los días despejados el ascensor se agota: reservar. Comprobar en la web posibles obras o aperturas reducidas.",
        "tempo": "2-3 horas con el ascensor",
        "costo": "museo 18 euros, ascensor 9 euros, combinada 23 euros (web oficial, 2026); hasta el 8 de diciembre de 2026 solo el museo baja para todos a 16 euros por el montaje de una nueva exposición",
        "url": "https://www.museocinema.it/",
        "consiglio": "La entrada conjunta compensa si se hace todo. En un día despejado se ve el Monviso detrás del arco alpino."
      },
      {
        "nome": "Museos Reales y Capilla del Santo Sudario",
        "testo": "Palacio Real, Armería Real, Galleria Sabauda y la Capilla del Santo Sudario de Guarini, con la cúpula de hexágonos superpuestos, reabierta tras la restauración posterior al incendio de 1997. El Sudario no está expuesto: se ve la capilla, no el lienzo.",
        "come": "En Piazza Castello, entrada por el patio. Entrada única para todo el complejo. Se puede recorrer solo, las salas tienen paneles claros.",
        "quando": "Abiertos de jueves a martes, de 9 a 19, cerrados los miércoles. El primer domingo de cada mes la entrada es gratuita sin reserva: las entradas se recogen solo en taquilla el mismo día.",
        "tempo": "3 horas",
        "costo": "15 euros entrada general (web oficial, 2026)",
        "url": "https://museireali.cultura.gov.it/",
        "consiglio": "Dos horas bastan para el Palacio Real, la Armería y la capilla: la Galleria Sabauda es para quien ama la pintura antigua."
      },
      {
        "nome": "Basílica de Superga y tranvía de cremallera",
        "testo": "Basílica de Juvarra en la colina al este del Po, con las tumbas de los Saboya en la cripta. En la parte trasera está el memorial del Grande Torino, donde se estrelló el avión en 1949. Desde la terraza se ven la ciudad y los Alpes.",
        "come": "Tranvía histórico de cremallera desde la estación Sassi, a la que se llega en transporte público GTT desde el centro, con salidas cada hora. Los miércoles el tranvía no funciona.",
        "quando": "Salidas desde Sassi cada hora de 10 a 18, última bajada desde Superga a las 18:30; horarios actualizados en la web de GTT. Día despejado, mejor por la tarde por la luz sobre los Alpes.",
        "tempo": "2-3 horas incluida la subida",
        "url": "https://www.gtt.to.it/cms/turismo/sassisup",
        "costo": "tranvía: 4 euros ida y 6 ida y vuelta entre semana, 6 y 9 euros los sábados y festivos (GTT, 2026)",
        "consiglio": "Un paseo por la cresta detrás de la basílica no cuesta nada y da la mejor vista. La ida y vuelta sale mejor que dos billetes sencillos."
      },
      {
        "nome": "Reggia di Venaria",
        "testo": "Residencia de caza de los Saboya, patrimonio UNESCO, con la Galleria Grande de Juvarra, la Capilla de Sant'Uberto y los jardines. El complejo es enorme y acoge también exposiciones.",
        "come": "A unos diez kilómetros de Turín, se llega en tren, autobús o coche: conexiones en la web oficial. Se recomienda reservar la entrada con hora.",
        "quando": "Abierta de martes a domingo, cerrada los lunes; los horarios del palacio, las exposiciones y los jardines cambian durante el año. Jardines y parque se visitan también con tiempo dudoso, pero las salas piden un día libre.",
        "tempo": "media jornada, una jornada con los jardines",
        "url": "https://www.lavenaria.it/",
        "consiglio": "Necesita una mañana entera: dedicarle un día más en vez de encajarla entre el Egizio y la Mole."
      },
      {
        "nome": "Cuadrilátero Romano y Porta Palazzo",
        "testo": "La zona más antigua de la ciudad, con la trama ortogonal romana y la Porta Palatina del siglo I, con las torres en pie. Al lado está Porta Palazzo, uno de los mercados al aire libre más grandes de Europa.",
        "come": "A pie desde Piazza Castello. El mercado está en la Piazza della Repubblica.",
        "quando": "Mercado por la mañana, de lunes a sábado. Por la noche el Cuadrilátero es el barrio del aperitivo.",
        "tempo": "2 horas",
        "costo": "entrada libre",
        "consiglio": "En el mercado se compra también la fruta del día y las especias de los puestos norteafricanos. Cuidado con los bolsillos entre la multitud."
      },
      {
        "nome": "Cafés históricos y bicerin",
        "testo": "Turín inventó el bicerin: café, chocolate y crema de leche en capas, que no se mezclan. Se bebe en vaso de cristal en el Caffè Al Bicerin, abierto desde 1763, o en uno de los cafés de Piazza San Carlo y de la Galleria Subalpina. Aquí nació también el rito del aperitivo con vermut.",
        "come": "Todos en el centro, a pie. El Caffè Al Bicerin está en Piazza della Consolata, pequeño y con pocas mesas.",
        "quando": "Bicerin por la mañana o por la tarde, vermut desde las 18. En el Bicerin suele haber cola los fines de semana.",
        "tempo": "1 hora por parada",
        "consiglio": "El bicerin no se mezcla: se bebe por capas, y cada sorbo cambia."
      },
      {
        "nome": "Monte dei Cappuccini y Parco del Valentino",
        "testo": "En la colina sobre el Po, el Monte dei Cappuccini da la vista clásica con la Mole y los Alpes detrás. Más abajo, el Parco del Valentino sigue el río y alberga el Borgo Medievale, reconstrucción decimonónica hecha con rigor filológico.",
        "come": "A pie desde Piazza Vittorio Veneto, con una subida corta. El Valentino está al sur, junto al Po.",
        "quando": "Día despejado, mejor al final de la tarde. El parque está siempre abierto.",
        "tempo": "2 horas",
        "consiglio": "Subir con la luz del final de la tarde y bajar a pie hacia el río."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Museo Egizio, con reserva, al menos 3 horas",
          "Almuerzo: agnolotti del plin en una trattoria del centro",
          "Tarde: Piazza Castello, Museos Reales y Capilla del Santo Sudario",
          "Noche: bicerin o vermut en Piazza San Carlo, aperitivo en el Cuadrilátero"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Museo Egizio, Piazza San Carlo, Museos Reales, Cuadrilátero Romano y aperitivo",
          "Día 2 por la mañana: Mole Antonelliana, museo y ascensor",
          "Día 2 por la tarde: Monte dei Cappuccini y Valentino, o el tranvía a Superga (no el miércoles)",
          "Noche: cena piamontesa, tajarin o vitello tonnato"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1 y 2: como arriba",
          "Día 3: Reggia di Venaria con jardines (no el lunes)",
          "Tarde: Porta Palazzo si aún es primera hora, si no Superga con la última luz",
          "Noche: bagna cauda en invierno, si no cena en San Salvario"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro histórico, entre Piazza Castello y Piazza San Carlo",
        "perChi": "quien quiere ir a pie a todas partes",
        "testo": "Se camina bajo los soportales, y museos y cafés están a pocos minutos. Los hoteles cuestan más, la noche es tranquila. Desde la estación de Porta Nuova se llega a pie."
      },
      {
        "nome": "San Salvario",
        "perChi": "quien busca precios más bajos y vida nocturna",
        "testo": "Barrio detrás de Porta Nuova, con locales y restaurantes. Más ruidoso los fines de semana y al final de la noche, a pie desde el centro."
      },
      {
        "nome": "Cuadrilátero Romano",
        "perChi": "quien busca ambiente",
        "testo": "Callejones antiguos, aperitivos y locales. Por la noche muy animado y ruidoso, cerca de Porta Palazzo."
      }
    ],
    sapori: [
      {
        "nome": "Agnolotti del plin",
        "testo": "Pequeña pasta rellena de carne, pellizcada a mano, servida también en servilleta sin salsa. Se encuentra en las trattorias piamontesas del centro."
      },
      {
        "nome": "Vitello tonnato y carne cruda",
        "testo": "Entrantes típicos: el vitello tonnato con salsa de atún y alcaparras, y la carne cruda picada a cuchillo con aceite y limón."
      },
      {
        "nome": "Bicerin",
        "testo": "Café, chocolate y crema de leche en tres capas. En el Caffè Al Bicerin y en los cafés históricos."
      },
      {
        "nome": "Gianduiotto",
        "testo": "Bombón de avellanas piamontesas, nacido en el siglo XIX cuando escaseaba el cacao. En todas las chocolaterías del centro."
      },
      {
        "nome": "Vermut",
        "testo": "Inventado en Turín en el siglo XVIII. Se bebe en los cafés históricos y en los bares del Cuadrilátero con el aperitivo."
      },
      {
        "nome": "Bagna càuda",
        "testo": "Salsa caliente de ajo, anchoas y aceite en la que se mojan verduras crudas y cocidas. Plato de invierno, se come en grupo."
      }
    ],
    attenzioni: [
      "La ZTL central tiene cámaras y horarios en días laborables: no entrar en coche sin comprobar los horarios en la web del Ayuntamiento. Mejor aparcar fuera o en un aparcamiento subterráneo.",
      "El Museo Egizio y la Mole se visitan con entrada en línea por franja horaria: en fines de semana y puentes las franjas se agotan. Reservar unos días antes.",
      "Los Museos Reales cierran el miércoles y el tranvía de Superga no funciona ese día. La Reggia di Venaria cierra el lunes.",
      "El Sudario no está expuesto, salvo en exposiciones extraordinarias: quien va a Turín a verlo se lleva una decepción. Se visita la capilla de Guarini.",
      "En Porta Palazzo y en el transporte público abarrotado, cuidado con los carteristas.",
      "En Turín se paga la tasa turística: el importe se comprueba en la web del Ayuntamiento o en el hotel."
    ],
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
    luoghi: [
      {
        "nome": "Positano",
        "testo": "El pueblo más fotografiado de la costa: casas de colores pastel escalonadas en un barranco que baja a la Spiaggia Grande. Se baja a pie desde la carretera entre escaleras y tiendas, y se sube con las piernas.",
        "come": "Desde Amalfi en ferry o en autobús SITA por la carretera costera. En coche no se recomienda: hay poco aparcamiento y es caro.",
        "quando": "Temprano por la mañana o después de las 17:00, cuando se van los grupos de un día. Julio y agosto están saturados.",
        "tempo": "3-4 horas",
        "consiglio": "Para bañarse, la playa de Fornillo, al oeste de la Spiaggia Grande, está menos llena y se llega a pie por el sendero junto al mar."
      },
      {
        "nome": "Amalfi: Duomo e Chiostro del Paradiso",
        "testo": "El Duomo di Sant'Andrea está en lo alto de una escalinata sobre la plaza del puerto, con fachada de mosaicos y una puerta de bronce bizantina. Al lado está el Chiostro del Paradiso, del siglo XIII, con arcos entrelazados de gusto árabe. Amalfi fue una república marinera antes que Pisa y Génova.",
        "come": "Desde el muelle de los ferris se llega a pie en pocos minutos. La entrada incluye claustro, basílica del Crucifijo y museo; a la catedral se entra desde la escalinata.",
        "quando": "Los horarios y días cambian con las funciones religiosas. Mejor por la mañana, antes de los autocares.",
        "tempo": "1 hora",
        "consiglio": "Subir la escalinata y darse la vuelta: la plaza vista desde arriba es la mejor foto de la ciudad."
      },
      {
        "nome": "Atrani",
        "testo": "Un pueblo de menos de mil habitantes, pegado a Amalfi, encajado en una garganta con la plaza que se abre al mar bajo un arco. Casas blancas, callejones con escaleras, la iglesia de la Maddalena. Casi nadie se detiene.",
        "come": "A pie desde Amalfi por la carretera y luego por las escaleras, o por el paso subterráneo junto al muelle.",
        "quando": "Todo el día. Por la tarde, cuando se han ido los visitantes de un día, es muy tranquilo.",
        "tempo": "1 hora",
        "costo": "gratis",
        "consiglio": "Un aperitivo en la plaza, con los niños del pueblo jugando al fútbol bajo el arco."
      },
      {
        "nome": "Ravello: Villa Rufolo e Villa Cimbrone",
        "testo": "Ravello está en lo alto sobre la costa y tiene otro ritmo: silencio, jardines y miradores. Villa Rufolo, del siglo XIII, tiene la torre morisca y el jardín sobre el vacío donde se celebra el festival de música. Villa Cimbrone tiene el Belvedere del Infinito, con las estatuas asomadas al mar.",
        "come": "Desde Amalfi en autobús SITA, o a pie por la Scala Fenicia (sendero con muchos escalones). Las dos villas se unen a pie pasando por el centro.",
        "quando": "Villa Rufolo abre todos los días, con horario ampliado en temporada. Después de las 17:00 la luz en el Belvedere es mejor. El festival cambia los horarios de cierre.",
        "tempo": "media jornada",
        "url": "https://www.villarufolo.com/",
        "consiglio": "Comprobar los precios en las webs oficiales de las villas antes de ir y verlas en este orden: Rufolo por la mañana, Cimbrone al atardecer."
      },
      {
        "nome": "Sentiero degli Dei",
        "testo": "Uno de los recorridos panorámicos más bonitos de la costa, de Bomerano (Agerola) a Nocelle, a media altura, con Positano y Capri en el horizonte. Son unos 8 km, entre 630 y 30 metros de altitud, y se hacen en tres o cuatro horas, casi todo en bajada.",
        "come": "Autobús SITA de Amalfi a Bomerano y luego a pie hasta Nocelle. Desde Nocelle una larga escalinata baja a Positano, o se para y se toma el autobús.",
        "quando": "Primavera y otoño. En verano salir al amanecer: el sendero tiene poca sombra.",
        "tempo": "3-4 horas más el descenso a Positano",
        "consiglio": "Hacerlo de Bomerano a Nocelle, no al revés: todo es bajada y se llega con el mar delante. Botas de senderismo y agua."
      },
      {
        "nome": "Valle delle Ferriere",
        "testo": "Una garganta húmeda sobre Amalfi donde sobreviven helechos raros, reliquias de épocas más frías. El sendero sigue el arroyo Canneto entre los restos de las antiguas ferrerías y papeleras. Es una reserva natural.",
        "come": "Desde Amalfi se sube a pie por un sendero, o se sale de Pontone (Scala). El recorrido circular requiere calzado de montaña.",
        "quando": "Todo el año; en verano es fresco y con sombra. Tras lluvias fuertes puede resbalar o tener tramos cerrados.",
        "tempo": "3 horas",
        "consiglio": "Buena salida para días de calor o de mar agitado, cuando la costa no es agradable."
      },
      {
        "nome": "Furore e il Fiordo",
        "testo": "Furore es un municipio disperso sobre un barranco profundo: el Fiordo es una grieta en la roca con una pequeña playa de guijarros, bajo un puente de la carretera. El pueblo es conocido por sus murales y viñedos en terrazas sobre la roca.",
        "come": "Autobús SITA desde Amalfi o Positano hasta Furore y luego una escalera baja al Fiordo. En barca desde Amalfi con taxis acuáticos.",
        "quando": "Hace falta mar en calma para bajar con seguridad; evitar los días de viento. Final de la mañana por la luz en el barranco.",
        "tempo": "1-2 horas",
        "consiglio": "En temporada alta se llega por mar, para evitar la carretera detenida y la escalera con el calor del mediodía."
      },
      {
        "nome": "Cetara",
        "testo": "Un pueblo de pescadores de atún y anchoas hacia Salerno, lejos de las multitudes. Aquí se hace la colatura di alici, heredera del garum romano. El puerto y la playa son de un pueblo de verdad.",
        "come": "Autobús SITA desde Amalfi o Salerno; ferry en temporada. Se recorre a pie en una hora.",
        "quando": "Todo el año. La comida es la hora ideal, con los locales llenos de gente del lugar.",
        "tempo": "2 horas",
        "consiglio": "Comprar la colatura directamente a un productor, en botella sellada, y llevársela a casa."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Llegar a Amalfi en ferri desde Salerno o Positano, antes de los autocares",
          "Duomo y Chiostro del Paradiso, luego paseo a Atrani",
          "Comida en Amalfi lejos del paseo marítimo",
          "Autobús SITA a Ravello por la tarde, Villa Rufolo y Villa Cimbrone",
          "Ferri de vuelta antes del anochecer"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Sentiero degli Dei de Bomerano a Nocelle, bajada a Positano, baño y cena",
          "Día 2: ferri Positano-Amalfi, Duomo y Atrani",
          "Ravello por la tarde, regreso en autobús o a pie por la Scala Fenicia",
          "Cena en Cetara si se duerme cerca de Salerno"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Positano y Praiano, baño en una cala",
          "Día 2: Sentiero degli Dei y Furore",
          "Día 3: Amalfi, Valle delle Ferriere por la mañana, Ravello al atardecer",
          "Opcional: media jornada en Cetara y Vietri sul Mare para las cerámicas"
        ]
      }
    ],
    zone: [
      {
        "nome": "Praiano",
        "perChi": "quien quiere la costa a mitad de precio",
        "testo": "Más tranquilo y barato que Positano, con calas accesibles a pie. El pueblo es largo y empinado: hace falta buen calzado. A los ferris se llega a pie o en autobús."
      },
      {
        "nome": "Positano y Amalfi",
        "perChi": "quien quiere estar en el centro y puede gastar",
        "testo": "Cómodos para todo, pero caros y muy llenos en temporada alta. Alojarse aquí significa también ruido y escaleras con las maletas."
      },
      {
        "nome": "Ravello",
        "perChi": "quien busca silencio y miradores",
        "testo": "Alta y tranquila, se vacía por la noche. Cuesta más y para el mar hay que bajar en autobús. Ideal para uno o dos días de calma."
      },
      {
        "nome": "Salerno",
        "perChi": "presupuestos ajustados y quien llega en tren",
        "testo": "Alojamiento mucho más barato y estación de alta velocidad. El ferri a la costa sale de aquí; se pierde el encanto de dormir junto al mar."
      }
    ],
    sapori: [
      {
        "nome": "Colatura di alici de Cetara",
        "testo": "Líquido ámbar obtenido de salar anchoas, heredero del garum romano. Se usa sobre espaguetis con ajo, aceite y perejil, en crudo, al final de la cocción."
      },
      {
        "nome": "Scialatielli ai frutti di mare",
        "testo": "Pasta fresca larga y ancha, a menudo con almejas, mejillones y mariscos. Se encuentra por toda la costa, mejor en locales algo alejados del puerto."
      },
      {
        "nome": "Delizia al limone",
        "testo": "Dulce de bizcocho empapado y crema de limón, nacido en la península sorrentina y extendido por toda la costa. El limón local, el sfusato amalfitano, es grande y poco ácido."
      },
      {
        "nome": "Mozzarella nella mortella",
        "testo": "Mozzarella envuelta en hojas de mirto, típica del cercano Cilento y que también se encuentra en la costa. Se come fresca, a temperatura ambiente."
      },
      {
        "nome": "Limoncello",
        "testo": "Muy extendido y a menudo industrial: el bueno se compra a los productores, que suelen dejar probar."
      }
    ],
    attenzioni: [
      "La carretera SS163 puede bloquearse durante horas en temporada alta, y en algunos periodos hay restricción de matrículas pares e impares: mejor el ferri. Informarse de las ordenanzas vigentes antes de salir.",
      "Los ferris se detienen con mar agitado: tener un plan B (autobús SITA) y no dejar el último trayecto al azar.",
      "Los aparcamientos son muy caros y las plazas en garaje cuestan como una habitación: conviene dejar el coche en Salerno o fuera de la costa.",
      "Los taxis acuáticos y los taxis no siempre exponen las tarifas: acordar el precio antes de subir.",
      "Senderos como el Sentiero degli Dei requieren calzado adecuado y agua; la escalinata hasta Positano es larga y empinada.",
      "Muchos municipios cobran tasa turística, que se paga en efectivo o en el alojamiento."
    ],
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
    luoghi: [
      {
        "nome": "Grotta Azzurra, Capri",
        "testo": "Una cavidad marina en Anacapri donde la luz entra por una abertura submarina y tiñe el agua de azul intenso. Se entra solo en pequeñas barcas de remos, tumbado, por un paso bajo.",
        "come": "Desde Marina Grande en barca hasta la entrada, o en autobús desde Anacapri y luego a pie hasta la taquilla de los barqueros. Se sube a la barquita y se paga allí mismo.",
        "quando": "Por la mañana y a primera hora de la tarde, con mar en calma. Con oleaje el acceso se suspende, y en invierno los cierres son frecuentes.",
        "tempo": "1-2 horas con la cola, 5 minutos dentro",
        "costo": "la barca de remos y la entrada se pagan allí mismo: preguntar el total antes de subir",
        "consiglio": "Mirar el mar antes de salir de Marina Grande: si está agitado, preguntar si la gruta está abierta antes de pagar un paseo en barca."
      },
      {
        "nome": "Monte Solaro e Scala Fenicia",
        "testo": "El punto más alto de Capri, 589 metros, al que se sube desde Anacapri en telesilla. Desde la cima se ven los dos golfos, Nápoles y Salerno a la vez. Abajo, la Escalera Fenicia, 921 escalones en unos 1,7 km, es el antiguo camino entre Marina Grande y Anacapri.",
        "come": "Telesilla desde la plaza de Anacapri. Para bajar a pie se puede tomar la Scala Fenicia, con calzado cómodo.",
        "quando": "Por la mañana, con el aire limpio. El telesilla se detiene con viento fuerte.",
        "tempo": "2-3 horas",
        "consiglio": "Subir en telesilla y volver a pie: la bajada es larga pero el último tramo, entre los muretes, es el más bonito."
      },
      {
        "nome": "Villa Jovis",
        "testo": "Los restos de la villa donde el emperador Tiberio pasó los últimos años de su reinado, al borde de un precipicio sobre el mar, en lo alto del Monte Tiberio. Quedan cisternas, terrazas y la planta de la residencia.",
        "come": "A pie desde Capri, cuesta arriba por via Longano, en parte entre casas y luego entre muros de piedra seca. Sin transporte.",
        "quando": "Temprano por la mañana por el fresco; hay que comprobar antes los horarios y días de apertura, cambian con la temporada.",
        "tempo": "2 horas ida y vuelta",
        "consiglio": "Llevar agua: en la subida hay pocos sitios donde refrescarse."
      },
      {
        "nome": "Sentiero dei Fortini",
        "testo": "Un sendero costero en la parte occidental de Anacapri, entre antiguos fortines y muros de piedra seca, con el mar abajo y casi nadie alrededor. Termina cerca de Punta Carena, con su faro.",
        "come": "Desde Anacapri en autobús hasta Punta Carena, luego a pie por la costa en dirección a la Grotta Azzurra. Zapatos cerrados.",
        "quando": "Primavera, otoño y última hora de la tarde en verano. Al mediodía no hay sombra.",
        "tempo": "1,5-2 horas",
        "costo": "gratis",
        "consiglio": "Terminar con el atardecer en Punta Carena: desde el faro el sol cae al mar sin nadie delante."
      },
      {
        "nome": "Castello Aragonese, Ischia",
        "testo": "Un islote de roca unido a Ischia Ponte por una pasarela, con un castillo fortificado que a lo largo de los siglos albergó una ciudad entera, iglesias y un monasterio. Desde arriba se ve la costa de la isla.",
        "come": "A pie desde Ischia Ponte cruzando el puente. Hay un ascensor panorámico para subir.",
        "quando": "Abierto todo el año con horarios cambiantes; la mejor luz es al final de la tarde.",
        "tempo": "2-3 horas",
        "url": "https://www.castelloaragonese.it/",
        "consiglio": "El recorrido es largo y cuesta arriba: salir temprano y parar en los jardines a mitad de camino."
      },
      {
        "nome": "Baia di Sorgeto, Ischia",
        "testo": "Una pequeña bahía de guijarros donde manantiales calientes brotan directamente en el mar. Se cava un hoyo en la grava y se sienta uno en el agua tibia, con el mar frío a dos metros. La entrada a la bahía es gratuita.",
        "come": "Desde Panza (Forio) una escalinata empinada baja a la bahía; alternativamente una barca desde Sant'Angelo. Autobús de Forio o Ischia Porto hasta Panza.",
        "quando": "Por la mañana o a última hora. En verano está llena; en invierno funciona igualmente gracias al agua caliente.",
        "tempo": "2-3 horas",
        "costo": "gratis",
        "consiglio": "Probar el agua antes de sentarse: en algunas pozas está hirviendo. Llevar escarpines y una toalla."
      },
      {
        "nome": "Monte Epomeo",
        "testo": "El monte más alto de Ischia, en el centro de la isla, 789 metros, con una cima de toba verde. Desde el mirador se ve toda la isla y el golfo. En el camino hay bodegas excavadas en la roca.",
        "come": "Sendero desde Fontana (autobús desde Ischia Porto o Forio) o desde Serrara Fontana, en subida. También se puede subir en microbús el primer tramo.",
        "quando": "Mañana despejada; evitar días de viento o después de la lluvia por la toba resbaladiza.",
        "tempo": "3 horas entre subida y bajada",
        "costo": "gratis",
        "consiglio": "Comer algo en uno de los restaurantes de roca bajo la cima, en la cocina campesina de la isla."
      },
      {
        "nome": "Procida: Marina Corricella e Terra Murata",
        "testo": "Corricella es un pueblo de pescadores en gradas, con casas de mil colores alrededor del puertecito. Encima, Terra Murata es la parte alta y fortificada de la isla, con la abadía de San Michele y un mirador. Procida es pequeña y se recorre en media jornada.",
        "come": "Ferry o hidroala desde Nápoles o Pozzuoli. Desde el puerto de Marina Grande se camina o se coge el microbús hacia Terra Murata.",
        "quando": "Todo el año. El final de la tarde y la noche son los mejores momentos, con los pescadores trabajando.",
        "tempo": "media jornada",
        "consiglio": "Bajar a Corricella por la escalinata de Terra Murata y comer pescado en el puertecito bajo las casas."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: hidroala desde Nápoles o Pozzuoli a Procida",
          "Terra Murata y Marina Corricella a pie",
          "Almuerzo de pescado en el puertecito",
          "Paseo hacia Chiaiolella y vuelta por la tarde"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Capri, Anacapri, telesilla del Monte Solaro y bajada por la Scala Fenicia",
          "Noche en Capri o Anacapri para ver la isla después de las 18:00",
          "Día 2: vuelta a Capri en barca con los Faraglioni, Grotta Azzurra si el mar está en calma, regreso por la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Procida en media jornada, luego ferri a Ischia",
          "Día 2: Castello Aragonese por la mañana, Sorgeto por la tarde",
          "Día 3: Monte Epomeo por la mañana y parque termal, o vuelta a la isla en barca"
        ]
      }
    ],
    zone: [
      {
        "nome": "Anacapri (Capri)",
        "perChi": "quien quiere Capri sin los precios de la Piazzetta",
        "testo": "Cuesta menos que el pueblo de Capri, es más tranquila por la noche y tiene el Monte Solaro. Un autobús baja a Marina Grande y Capri; a última hora de la noche las conexiones son escasas."
      },
      {
        "nome": "Forio y Sant'Angelo (Ischia)",
        "perChi": "termas, atardeceres y mar",
        "testo": "Forio, en la costa oeste, tiene los atardeceres y la vida nocturna. Sant'Angelo, al sur, es un pueblo peatonal con pocos coches y calas. Dormir aquí significa estar lejos del puerto principal."
      },
      {
        "nome": "Marina Corricella (Procida)",
        "perChi": "quien busca un pueblo de verdad",
        "testo": "Habitaciones en las casas de colores del puertecito, a menudo pequeñas y con escaleras. Las noches son tranquilas. No se llega en coche."
      },
      {
        "nome": "Nápoles o Sorrento",
        "perChi": "presupuestos ajustados y excursiones de un día",
        "testo": "Se gasta menos y se va en el día con aliscafo, pero Capri en un día en agosto es la peor forma de verla."
      }
    ],
    sapori: [
      {
        "nome": "Insalata caprese y torta caprese",
        "testo": "Tomate, mozzarella y albahaca, nacidos en Capri. La tarta es de chocolate y almendras, sin harina."
      },
      {
        "nome": "Coniglio all'ischitana",
        "testo": "El plato que buscar en Ischia: conejo cocinado en cazuela con tomate, vino y hierbas, en recuerdo de los conejos criados en fosas en la toba."
      },
      {
        "nome": "Ravioli capresi",
        "testo": "Ravioles rellenos de caciotta y mejorana, con salsa de tomate fresco. Se encuentran en los locales de Capri y Anacapri."
      },
      {
        "nome": "Limone di Procida",
        "testo": "Enorme, aromático y poco ácido: se come incluso en ensalada, se transforma en limoncello y en postres. Se compra a los cultivadores."
      },
      {
        "nome": "Pescado de Corricella",
        "testo": "En Procida el pescado es recién capturado y se come junto al puertecito. Se gasta menos que en las otras dos islas."
      }
    ],
    attenzioni: [
      "Las vueltas en barca y las tarifas de los barqueros en Capri conviene acordarlas antes de subir: preguntar el precio total y qué incluye.",
      "La Grotta Azzurra cierra con mar agitado, y las entradas se pagan allí mismo: no pagar por adelantado a quien te aborde en el puerto.",
      "En Capri en temporada alta el coche de los no residentes no puede entrar: se circula en funicular, autobús y taxi.",
      "El funicular de Capri tiene largas colas al mediodía en verano: planificar el regreso con antelación al último aliscafo.",
      "Las huelgas de ferris y el mar agitado cancelan trayectos: no reservar vuelo ni tren la misma tarde del regreso de las islas.",
      "En Sorgeto el agua de algunas pozas está muy caliente: probar antes de sentarse, sobre todo con niños."
    ],
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
    luoghi: [
      {
        "nome": "Stromboli e la Sciara del Fuoco",
        "testo": "Un volcán en erupción casi continua desde hace milenios, con un pueblo habitado a sus pies. Cada pocos minutos el cráter lanza material incandescente que rueda por la Sciara del Fuoco hasta el mar. La mejor forma de verlo es desde el agua, de noche.",
        "come": "Aliscafo o ferri desde Lipari, Milazzo o las demás islas. Para verlo desde el mar se toma una excursión nocturna en barca, o se duerme en velero frente a la Sciara con el motor apagado.",
        "quando": "Por la tarde y de noche, con mar en calma. Las excursiones en barca salen a última hora de la tarde y vuelven de noche.",
        "tempo": "una tarde, mejor una noche",
        "consiglio": "Apagar el motor y guardar silencio: el ruido llega un instante después de la luz. Llevar una sudadera, de noche en el mar hace frío."
      },
      {
        "nome": "Salita a Stromboli",
        "testo": "La subida a los cráteres está regulada por las autoridades: en los últimos años los límites de altitud y las normas han cambiado varias veces según la actividad del volcán. Hasta cierta altitud se sube sin guía, más arriba es obligatoria una guía vulcanológica autorizada, y en la cima el acceso está prohibido.",
        "come": "Los senderos salen del pueblo de Stromboli. Las guías autorizadas organizan subidas al atardecer y vuelven de noche, con casco y linterna.",
        "quando": "Subida a última hora de la tarde para ver las explosiones en la oscuridad. Reservar con antelación en temporada alta y comprobar las normas vigentes.",
        "tempo": "5-6 horas",
        "consiglio": "Consultar la norma vigente en el Comune di Lipari o con las guías locales: no organizar el viaje en torno a una subida que podría estar prohibida."
      },
      {
        "nome": "Vulcano: Gran Cratere e fanghi",
        "testo": "Un cráter de algo menos de 400 metros con fumarolas de azufre en el borde, al que se sube a pie desde Porto di Levante. Abajo están los fangos sulfurosos y el mar que burbujea de gas junto a los Faraglioni.",
        "come": "Hidroala desde Lipari, una travesía corta. Desde el puerto el sendero sale a pie. El laguito de fangos está junto al puerto, pero está cerrado al público desde 2020 a la espera de obras de seguridad: comprobar si ha reabierto.",
        "quando": "Temprano por la mañana por el calor y el sol. El acceso al cráter se ha regulado o cerrado varias veces por la actividad de las fumarolas: comprobarlo antes.",
        "tempo": "media jornada para el cráter, 1 hora para los barros",
        "consiglio": "El barro mancha y el olor se queda: bañador viejo y sin joyas de plata. Respirar poco cerca de las fumarolas."
      },
      {
        "nome": "Lipari: Castello e Museo Archeologico",
        "testo": "La isla más grande tiene un castillo sobre la roca que domina el puerto, con el Museo Archeologico Regionale Eoliano dentro. Reúne hallazgos del Neolítico a Grecia, con la colección de vasos y máscaras teatrales. Fuera, las canteras de piedra pómez y las playas blancas de Canneto.",
        "come": "Se llega al puerto de Marina Corta y se sube a pie al Castello. Para las canteras de pómez, autobús o scooter hacia Canneto y Acquacalda.",
        "quando": "Por la mañana el museo, por la tarde el mar. El museo tiene día de descanso: comprobarlo antes.",
        "tempo": "media jornada",
        "consiglio": "Subir al mirador de Quattrocchi, en el lado sur, al atardecer: se ve Vulcano contra el sol."
      },
      {
        "nome": "Salina: Pollara e Fossa delle Felci",
        "testo": "La isla más verde, con dos volcanes gemelos extintos. Pollara es el cráter derrumbado en el mar, con un mirador y un peñasco vertical. El Monte Fossa delle Felci, el punto más alto del archipiélago, se sube en pocas horas entre bosques y alcaparras.",
        "come": "Aliscafo desde Lipari hasta Rinella o Santa Marina. Dentro de la isla en autobús o scooter. Pollara está en la parte oeste.",
        "quando": "Primavera y principios de verano por el verde; atardecer en Pollara. El acceso a la playa de Pollara suele estar limitado por riesgo de desprendimientos: comprobarlo.",
        "tempo": "1 día",
        "consiglio": "Probar la Malvasia en una de las bodegas y comprar las alcaparras directamente a los productores."
      },
      {
        "nome": "Panarea e Capo Milazzese",
        "testo": "La más pequeña y mundana, con casas blancas y sin coches. El poblado prehistórico de Capo Milazzese, de la Edad del Bronce, está en un promontorio al sur, con las cabañas de piedra visibles. En el mar están los islotes, entre ellos Lisca Bianca.",
        "come": "Hidroala desde Lipari o Stromboli. Desde el puerto se va a pie hacia el sur hasta Capo Milazzese; las maletas viajan en carritos eléctricos.",
        "quando": "Junio y septiembre. En verano las noches se llenan de yates y suben los precios.",
        "tempo": "media jornada",
        "consiglio": "El paseo en barca por los islotes es la forma correcta de ver el mar de Panarea, pero regatear el precio."
      },
      {
        "nome": "Filicudi: Grotta del Bue Marino e Capo Graziano",
        "testo": "Una isla casi sin turismo. Capo Graziano tiene un poblado prehistórico y una costa de roca oscura. La Grotta del Bue Marino es una gruta marina a la que se llega en barca, con aguas límpidas.",
        "come": "Hidroala desde Lipari o Salina. En la isla se camina; los taxis-barco hacen la vuelta de las grutas.",
        "quando": "Junio y septiembre; el mar agitado impide la entrada a las grutas.",
        "tempo": "1 día",
        "consiglio": "Dormir allí al menos una noche: por la tarde, cuando salen los aliscafi, la isla queda casi vacía."
      },
      {
        "nome": "Alicudi",
        "testo": "La más remota, circular y casi sin carreteras, con pocos habitantes fijos. Se sube por caminos de herradura y escalinatas de piedra; las mulas todavía llevan las mercancías. Desde la cima se ve todo el archipiélago.",
        "come": "Aliscafo desde Lipari o Filicudi. Desde el puerto se sube a pie, sin vehículos.",
        "quando": "Primavera y principios de otoño. En verano la subida es dura por el calor.",
        "tempo": "1 día o una noche",
        "consiglio": "Llevar poco equipaje: las maletas suben a hombros o a lomos de mula. Reservar el alojamiento con mucha antelación."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: aliscafo de Milazzo a Lipari, Castello y Museo Archeologico",
          "Tarde en Canneto, baño en las playas de pómez",
          "Día 2: mañana en Vulcano para el cráter y los barros, regreso a Lipari por la tarde"
        ]
      },
      {
        "titolo": "4 días",
        "tappe": [
          "Día 1: Lipari, Castello y Museo",
          "Día 2: Vulcano por la mañana, Salina por la tarde",
          "Día 3: Panarea en el día o en barca, baño en Lisca Bianca",
          "Día 4: Stromboli, tarde en barca para la Sciara del Fuoco, noche allí"
        ]
      },
      {
        "titolo": "7 días",
        "tappe": [
          "Día 1-2: Lipari y Vulcano",
          "Día 3: Salina con Pollara y Fossa delle Felci",
          "Día 4: Panarea y Capo Milazzese",
          "Día 5: Stromboli, Sciara del Fuoco de noche desde el mar",
          "Día 6: Filicudi, Grotta del Bue Marino",
          "Día 7: Alicudi o descanso, regreso a Milazzo con margen por el tiempo y los aliscafi"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lipari",
        "perChi": "quien quiere la base más cómoda",
        "testo": "Conexiones a todas las islas, mucha oferta de alojamiento y restaurantes. Es la más llena en verano, pero es el punto desde el que se llega a todo en el día."
      },
      {
        "nome": "Salina",
        "perChi": "calma y calidad",
        "testo": "Más verde y tranquila, con pueblos como Malfa, Santa Marina y Rinella. Menos conectada, se usa scooter. Cenar con Malvasia es la razón para quedarse."
      },
      {
        "nome": "Stromboli",
        "perChi": "quien quiere el volcán",
        "testo": "Casas negras bajas, playas de arena oscura, ruido del volcán por la noche. Pequeña, con pocas camas y precios altos; la subida y las excursiones salen de aquí."
      },
      {
        "nome": "Panarea",
        "perChi": "quien puede gastar",
        "testo": "Isla diminuta y mundana, con precios muy altos en la temporada de los grandes yates. Se va a pie o en carritos eléctricos."
      }
    ],
    sapori: [
      {
        "nome": "Pane cunzato",
        "testo": "Rebanada de pan con tomate, anchoas, alcaparras, orégano y queso, nacida como comida de campesinos. Se come en todas las islas, a menudo con productos locales."
      },
      {
        "nome": "Pasta alla eoliana",
        "testo": "Pasta con alcaparras, aceitunas, tomatitos y pescado azul. Un plato sencillo, de despensa."
      },
      {
        "nome": "Capperi di Salina",
        "testo": "Presidio Slow Food, recogidas a mano y conservadas en sal. Distintas de las demás por su aroma."
      },
      {
        "nome": "Malvasia delle Lipari",
        "testo": "Vino dulce tipo passito, que se bebe al final de la comida. Se produce sobre todo en Salina."
      },
      {
        "nome": "Granita",
        "testo": "Como en toda Sicilia, pero aquí con brioche en el desayuno y en sabores locales de café, almendra y pistacho."
      }
    ],
    attenzioni: [
      "Con mar agitado los aliscafi y ferris se cancelan: no encadenar conexiones ajustadas ni reservar un vuelo la noche del regreso.",
      "La subida al cráter de Stromboli y al Gran Cratere de Vulcano está regulada y cambia con la actividad: comprobar las normas vigentes antes de reservar.",
      "Alojamientos y plazas en barco se agotan en temporada alta: reservar con meses de antelación para julio y agosto.",
      "El agua es escasa y llega en buques cisterna: usarla con moderación.",
      "En Vulcano las fumarolas y el gas se concentran cerca del cráter y de los barros: permanecer en los puntos señalizados y alejarse si el aire se vuelve pesado.",
      "Paseos en barca y taxis acuáticos: acordar precio y duración antes de subir."
    ],
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
    luoghi: [
      {
        "nome": "Mercati di Palermo: Ballarò, Capo e Vucciria",
        "testo": "Tres mercados históricos en el centro, con origen árabe. Por la mañana son un teatro: puestos de pescado, especias, verduras, vendedores que gritan la abbanniata. Se come de pie, caminando, gastando pocos euros.",
        "come": "A pie desde el centro histórico. Ballarò está cerca de la Casa Professa y de Porta Nuova; el Capo está detrás del Teatro Massimo; la Vucciria queda entre via Roma y el puerto.",
        "quando": "Por la mañana, cuando están todos los puestos. Por la tarde muchos puestos recogen. El domingo hay menos movimiento.",
        "tempo": "2-3 horas",
        "consiglio": "Comer panelle, arancine y sfincione de pie, en los puestos donde hace cola la gente del lugar, no en locales con menú en inglés."
      },
      {
        "nome": "Palazzo dei Normanni e Cappella Palatina",
        "testo": "La capilla real del siglo XII: paredes de mosaicos de oro, techo de madera con muqarnas de mano árabe y suelos de mármol. Es una de las iglesias más bellas de Italia y forma parte del itinerario árabe-normando, patrimonio UNESCO.",
        "come": "Desde el centro se llega a pie hacia Porta Nuova. Entrada online en la web de la Fundación Federico II; acceso con controles y colas cortas si se va temprano.",
        "quando": "De lunes a sábado de 8:30 a 16:30, domingos y festivos de 8:30 a 12:30 (horas de última entrada, web de la Fundación Federico II). Por la mañana, nada más abrir. Los horarios cambian con los oficios y las sesiones de la asamblea regional: comprobar antes.",
        "tempo": "1 hora y media",
        "url": "https://www.federicosecondo.org/",
        "consiglio": "Levantar la vista al techo: los muqarnas son de madera pintada, con escenas de la corte árabe."
      },
      {
        "nome": "Duomo di Monreale",
        "testo": "La obra maestra normanda del siglo XII: miles de metros cuadrados de mosaicos de fondo dorado, con el gran Cristo Pantocrátor en el ábside. Al lado el claustro tiene una columnata de columnillas pareadas, y cada capitel es distinto. Las terrazas de arriba dan a la Conca d'Oro.",
        "come": "Autobús AMAT 389 desde Palermo (piazza Indipendenza o corso Calatafimi). El claustro y las terrazas tienen entrada propia.",
        "quando": "A primera hora, antes de los autocares. Los horarios cambian con los oficios: comprobar antes.",
        "tempo": "2 horas",
        "consiglio": "Subir a las terrazas para ver el tejado y Palermo; llevar una sudadera por el fresco del interior."
      },
      {
        "nome": "Segesta",
        "testo": "Un templo dórico del siglo V a. C., nunca terminado, en pie solo sobre una colina en medio de la nada, con el viento. Más arriba está el teatro griego con vista al golfo de Castellammare.",
        "come": "Desde Palermo en coche, por la autopista Palermo-Trapani. El templo está cerca de la entrada; para el teatro hay lanzadera o subida a pie.",
        "quando": "Por la mañana o al final de la tarde. En verano no hay sombra: evitar el mediodía.",
        "tempo": "2 horas",
        "costo": "entradas y pases combinados en la web del parque arqueológico: las tarifas cambian",
        "consiglio": "Subir al teatro: arriba se entiende por qué los griegos lo construyeron aquí."
      },
      {
        "nome": "Selinunte",
        "testo": "El parque arqueológico más extenso de Europa: templos dóricos junto al mar, la acrópolis, la ciudad con sus calles. El Templo E ha sido reconstruido en pie; los otros son gigantescos montones de piedras caídas en un terremoto.",
        "come": "En coche desde Trapani o Palermo. Dentro del parque hay lanzadera; también se puede alquilar una bici.",
        "quando": "Temprano por la mañana o al final de la tarde. Al mediodía en verano es inmenso y sin sombra.",
        "tempo": "3 horas",
        "costo": "entradas y pases combinados en la web del parque arqueológico: las tarifas cambian",
        "consiglio": "Terminar en la playa de Marinella, a dos pasos de los templos."
      },
      {
        "nome": "Erice",
        "testo": "Un pueblo medieval a 750 metros sobre Trapani, a menudo envuelto en niebla. Calles empedradas, el castillo de Venus en lo alto, iglesias y pastelerías con dulces de almendra.",
        "come": "En coche por carretera de curvas desde Trapani, o en autobús de línea. El teleférico Trapani-Erice, cuando funciona, es el camino más corto.",
        "quando": "Por la tarde-noche, cuando se han ido los autocares y queda la niebla. La niebla forma parte del lugar.",
        "tempo": "media jornada",
        "consiglio": "Dormir allí una noche para verla vacía, y llevar una sudadera incluso en verano."
      },
      {
        "nome": "Saline di Trapani e Marsala, Mozia",
        "testo": "La laguna del Stagnone y las salinas entre Trapani y Marsala: balsas planas, molinos de viento y montañas de sal. En medio está Mozia, una isla fenicia con una calzada púnica sumergida y la estatua del Giovinetto, a la que se llega en barca.",
        "come": "En coche por la Via del Sale. Para Mozia, una barquita desde el embarcadero de Birgi, pocos minutos. El museo de la sal está en Nubia.",
        "quando": "Al atardecer, cuando el agua se vuelve rosa. Mozia: días sin viento fuerte.",
        "tempo": "media jornada",
        "consiglio": "Parar en Marsala por el vino del mismo nombre: las bodegas históricas hacen visitas con degustación."
      },
      {
        "nome": "Riserva dello Zingaro",
        "testo": "La primera reserva natural creada en Sicilia, en la costa entre Scopello y San Vito Lo Capo: siete kilómetros de costa sin carreteras, con calas de guijarros y agua límpida, accesibles solo a pie.",
        "come": "Dos entradas: Scopello (sur) y San Vito Lo Capo (norte). Se deja el coche en los aparcamientos de la entrada.",
        "quando": "Primavera y otoño; en verano salir al abrir y llevar agua. Conviene comprobar horarios y entradas.",
        "tempo": "media jornada o todo el día",
        "consiglio": "Escarpines y máscara: el mar de las calas está entre los más bellos de Sicilia."
      },
      {
        "nome": "San Vito Lo Capo",
        "testo": "Un pueblo marinero con una larga playa de arena clara, bajo el Monte Monaco. Es también la ciudad del cuscús: cada septiembre se celebra el Cous Cous Fest, festival internacional.",
        "come": "En coche desde Trapani o Palermo. Aparcamiento de pago en el pueblo, lleno en verano.",
        "quando": "Junio y septiembre, por el mar y el cuscús. En julio y agosto está lleno.",
        "tempo": "media jornada o una noche",
        "consiglio": "Probar el cuscús de pescado en un local con receta familiar, y reservar en septiembre."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Palazzo dei Normanni y Cappella Palatina nada más abrir",
          "Mercados del Capo y Ballarò, comida de street food",
          "Tarde: Catedral y barrio de la Kalsa",
          "Noche: aperitivo en piazza Marina o en Mondello en verano"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Palermo, Cappella Palatina y mercados, luego Monreale con el claustro",
          "Día 2: Segesta por la mañana, Erice por la tarde, noche en Trapani",
          "Día 3: Selinunte temprano, luego salinas y Marsala, regreso a Palermo"
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Día 1: Palermo y mercados",
          "Día 2: Monreale por la mañana, Palazzo dei Normanni por la tarde",
          "Día 3: Segesta, Erice, Trapani",
          "Día 4: Mozia y salinas, atardecer en el Stagnone",
          "Día 5: Zingaro o San Vito Lo Capo, o Selinunte por la mañana"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro histórico de Palermo (Kalsa, Ballarò)",
        "perChi": "quien quiere vivir la ciudad",
        "testo": "Animado, con todo a pie, restaurantes y mercados cerca. Ruidoso de noche, con calles estrechas y algo de deterioro en algunas. Dejar el coche en un aparcamiento vigilado."
      },
      {
        "nome": "Trapani",
        "perChi": "quien quiere una base para el oeste",
        "testo": "Cerca de Erice, las salinas, las Egadi y el aeropuerto de Birgi. Centro histórico de toba con callejones y el puerto para los aliscafi. Más barata que Palermo."
      },
      {
        "nome": "San Vito Lo Capo",
        "perChi": "mar y Zingaro",
        "testo": "Playa, calas, cuscús. Muy llena en agosto y con aparcamiento difícil; mucho más agradable en junio y septiembre."
      },
      {
        "nome": "Erice",
        "perChi": "una noche de silencio",
        "testo": "Pequeña, medieval, casi vacía de noche. Pocos alojamientos, viento y niebla. Se hace una noche, no más."
      }
    ],
    sapori: [
      {
        "nome": "Arancine",
        "testo": "Bolas de arroz fritas con ragú o mantequilla y jamón. Aquí se dice «arancina», en femenino."
      },
      {
        "nome": "Panelle y crocchè",
        "testo": "Buñuelos de harina de garbanzo servidos en un bollo, con croquetas de patata. Street food puro, para comer en el mercado."
      },
      {
        "nome": "Sfincione",
        "testo": "Focaccia blanda con cebolla, caciocavallo, anchoas y tomate. Se compra a los vendedores ambulantes y en las panaderías."
      },
      {
        "nome": "Pane con la milza",
        "testo": "Bocadillo de bazo y pulmón de ternera, en los puestos históricos; se elige «schietta» (con limón y sal) o «maritata» (con caciocavallo)."
      },
      {
        "nome": "Pasta con le sarde y cuscús de pescado",
        "testo": "La pasta con sardinas, hinojo silvestre, pasas y piñones es un plato palermitano. El cuscús de pescado es típico de Trapani y San Vito."
      },
      {
        "nome": "Cassata y cannoli",
        "testo": "Los dulces sicilianos por excelencia: la cassata con ricotta y mazapán, los cannoli rellenos en el momento."
      }
    ],
    attenzioni: [
      "Palermo tiene una ZTL en el centro histórico y las multas llegan a casa: dejar el coche fuera y usar aparcamientos vigilados.",
      "Los aparcacoches ilegales son frecuentes: pagar solo aparcamientos oficiales o vigilados.",
      "No dejar nada a la vista en el coche, sobre todo en zonas urbanas y cerca de los sitios arqueológicos.",
      "Carteristas en los mercados y calles concurridas: llevar la mochila delante.",
      "Segesta y Selinunte no tienen sombra: agua, sombrero y visita temprano en verano.",
      "Los horarios y precios de los yacimientos cambian: consultar siempre las webs oficiales antes de ir."
    ],
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
    luoghi: [
      {
        "nome": "Favignana: cale e Ex Stabilimento Florio",
        "testo": "Una isla con forma de mariposa, plana y excavada por canteras de toba. Cala Rossa y Cala Azzurra tienen agua transparente sobre roca blanca. En el pueblo la antigua fábrica Florio, la almadraba del siglo XIX, cuenta la historia de la mattanza, ya no practicada.",
        "come": "Hidroala desde Trapani. En la isla se alquila una bicicleta: las distancias son cortas.",
        "quando": "Junio y septiembre. Por la mañana las calas, por la tarde el museo. En agosto está llena.",
        "tempo": "2 días",
        "consiglio": "Llevar zapatos de goma: casi ninguna cala es de arena, se entra desde la roca."
      },
      {
        "nome": "Cave di tufo e giardini ipogei",
        "testo": "Durante siglos la isla fue una cantera: la piedra de construcción de media Sicilia occidental salió de aquí. El resultado son fosos de paredes verticales, algunos convertidos en jardines hipogeos, resguardados del viento, con cítricos y plantas.",
        "come": "En bicicleta, con indicaciones por las carreteras secundarias. Algunas canteras son visitables con gestores privados.",
        "quando": "Por la mañana o al final de la tarde; en verano las canteras dan sombra y frescor.",
        "tempo": "1-2 horas",
        "consiglio": "Preguntar en el pueblo qué jardines están abiertos: horarios y entradas cambian de cantera en cantera."
      },
      {
        "nome": "Levanzo e Grotta del Genovese",
        "testo": "La más pequeña de las tres Egadas mayores, con un solo pueblo de pescadores. La Grotta del Genovese conserva grabados y pinturas del Paleolítico superior y del Neolítico.",
        "come": "Hidroala desde Trapani o Favignana. A la gruta se llega a pie o en barco y se visita con guía.",
        "quando": "Junio y septiembre. La visita es con reserva y en grupos reducidos: organizarse por la mañana.",
        "tempo": "media jornada",
        "url": "https://www.ampisoleegadi.it/",
        "consiglio": "Reservar la visita a la gruta el día anterior y llevar zapatos cerrados para el sendero."
      },
      {
        "nome": "Marettimo",
        "testo": "La más salvaje y remota de las Egadi, casi sin turismo, con un único pueblo de casas blancas y un interior de senderos. Las grutas marinas se ven en barca.",
        "come": "Aliscafo desde Trapani (más largo que el de Favignana) o ferri. Se recorre a pie y en barca.",
        "quando": "Junio y septiembre. Con mar agitado se cancelan los trayectos.",
        "tempo": "1-2 días",
        "consiglio": "El recorrido de las grutas en barca es la experiencia principal; acordar el precio con el barquero."
      },
      {
        "nome": "Pantelleria: Lago Specchio di Venere e dammusi",
        "testo": "Isla volcánica más cercana a Túnez que a Sicilia. El Lago Specchio di Venere es un lago en un cráter, con barro termal en la orilla. Los dammusi son casas de piedra lávica con techo de cúpula, y la vid se cultiva en forma de arbusto bajo en hoyos excavados en el suelo, técnica reconocida por la UNESCO.",
        "come": "Vuelo desde Trapani, Palermo o en temporada desde el continente, o ferri nocturno desde Trapani. En la isla hace falta coche, que se reserva con antelación.",
        "quando": "Primavera y septiembre. El lago al atardecer, con el barro ya caliente. El viento es constante.",
        "tempo": "4-5 días",
        "url": "https://www.parconazionalepantelleria.it/",
        "consiglio": "No buscar playas de arena: no hay, se entra al agua desde las rocas o las pozas termales."
      },
      {
        "nome": "Pantelleria: Montagna Grande e giardini panteschi",
        "testo": "La Montagna Grande es el punto más alto de la isla, con bosques de pino y senderos. Los jardines panteschi son muros circulares de piedra seca que protegen un solo naranjo del viento.",
        "come": "En coche hasta el pie de la Montagna Grande y luego a pie. Los jardines se ven por las carreteras interiores y en algunas fincas.",
        "quando": "Por la mañana. Viento fuerte y fresco en altura incluso en verano.",
        "tempo": "media jornada",
        "consiglio": "Visitar una bodega y probar el passito: las visitas se reservan."
      },
      {
        "nome": "Lampedusa: Spiaggia dei Conigli",
        "testo": "Una playa de arena clara y agua turquesa dentro de una reserva natural, donde anida la tortuga Caretta caretta. La isla está sobre la placa africana. El acceso está regulado para proteger los nidos.",
        "come": "Avión desde Palermo o Catania, o barco desde Porto Empedocle, con una travesía larga. Desde el pueblo en moto o coche hasta el aparcamiento, y luego a pie.",
        "quando": "Junio y septiembre. En temporada alta el acceso puede estar limitado y con reserva.",
        "tempo": "media jornada",
        "url": "https://www.ampisolepelagie.it/",
        "consiglio": "Informarse de las normas de acceso de la temporada antes de salir y llegar temprano por la mañana."
      },
      {
        "nome": "Linosa",
        "testo": "Una isla volcánica negra, a medio camino entre Lampedusa y Sicilia, con unos pocos cientos de habitantes. Casas de colores vivos, playas de lava y aguas limpias para hacer snorkel.",
        "come": "Barco desde Sicilia o aliscafo desde Lampedusa en temporada. Se recorre a pie en un día.",
        "quando": "Junio y septiembre; fuera de temporada las conexiones son escasas.",
        "tempo": "1 día o una noche",
        "consiglio": "Comprobar los horarios de vuelta antes de partir: con mar agitado se cancelan los trayectos."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: aliscafo de Trapani a Favignana, bici hacia Cala Rossa y las calas del ala oriental",
          "Día 2: antigua fábrica Florio por la mañana, canteras de toba por la tarde, cena de atún",
          "Día 3: Levanzo y Grotta del Genovese con reserva, regreso a Trapani en aliscafo"
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Día 1: vuelo o ferri nocturno a Pantelleria, recoger el coche",
          "Día 2: Lago Specchio di Venere y los barros, baños por la costa",
          "Día 3: Montagna Grande, jardines panteschi y una bodega",
          "Día 4: recorrido de los dammusi y las pozas termales, cena con ravioles de ricotta y menta",
          "Día 5: regreso con margen por el viento y el mar"
        ]
      },
      {
        "titolo": "7 días",
        "tappe": [
          "Día 1-2: Lampedusa, Spiaggia dei Conigli con las normas de la temporada",
          "Día 3: vuelta a la isla en barca",
          "Día 4: Linosa en el día o con una noche",
          "Día 5-6: regreso a Palermo o Porto Empedocle, luego Egadi o Pantelleria",
          "Día 7: margen por el mar agitado"
        ]
      }
    ],
    zone: [
      {
        "nome": "Favignana (pueblo y Cala Rossa)",
        "perChi": "quien llega del continente en el día o por pocos días",
        "testo": "La oferta más amplia y los precios más accesibles de las tres islas. En agosto está llena y ruidosa; se va en bici desde cualquier alojamiento."
      },
      {
        "nome": "Pantelleria (Khamma y Scauri)",
        "perChi": "quien busca dammusi y tranquilidad",
        "testo": "Dormir en un dammuso en el campo, lejos del puerto, con jardín y muros de lava. Hace falta coche para todo y se cena en sitios cercanos."
      },
      {
        "nome": "Pueblo de Lampedusa",
        "perChi": "quien busca mar y servicios",
        "testo": "Alojamientos de temporada cerca del puerto y las playas. De noviembre a marzo cierra casi todo. Se alquila scooter para las playas más lejanas."
      },
      {
        "nome": "Levanzo o Marettimo",
        "perChi": "quien quiere silencio",
        "testo": "Pocas camas, pocos restaurantes, sin vida nocturna. Son islas para una noche tranquila, con trayectos que dependen del mar."
      }
    ],
    sapori: [
      {
        "nome": "Atún de las Egadi",
        "testo": "La almadraba de Favignana fue de las más importantes del Mediterráneo. Se come fresco y en conserva: ventresca, bottarga, mosciame."
      },
      {
        "nome": "Pesto pantesco",
        "testo": "Salsa cruda de tomate, almendras, albahaca y ajo, a menudo sobre pasta. Se encuentra en Pantelleria."
      },
      {
        "nome": "Ravioles de ricotta y menta",
        "testo": "Ravioles «amari» con ricotta y menta, típicos de Pantelleria, con salsa de tomate."
      },
      {
        "nome": "Alcaparras de Pantelleria",
        "testo": "Presidio Slow Food, recogidas a mano y conservadas en sal. Tienen un aroma más fuerte que las demás."
      },
      {
        "nome": "Passito di Pantelleria",
        "testo": "Vino dulce y ámbar de uva Zibibbo, entre los grandes vinos dulces del mundo. Se prueba en la bodega."
      }
    ],
    attenzioni: [
      "Con mar agitado los ferris y aliscafi no salen, sobre todo hacia Pantelleria y Lampedusa: prever margen y no reservar un vuelo el mismo día.",
      "En la Spiaggia dei Conigli el acceso está regulado para proteger las tortugas: informarse de las normas de la temporada y no llevarse arena ni conchas.",
      "La Grotta del Genovese se visita solo con guía y con reserva: no contar con entrada libre.",
      "En Pantelleria conviene buscar coche con antelación, porque hay pocos vehículos disponibles en temporada.",
      "El agua dulce escasea en Pantelleria, Lampedusa y las islas menores: usarla con moderación.",
      "El viento es constante en Pantelleria: elegir calas resguardadas y consultar la previsión."
    ],
    esperienzeSlugs: ['passito-pantelleria'],
    tripSlugs: ['isole-siciliane'],
    imageAlt: "El agua turquesa y los escollos bajos de Lido Burrone en Favignana, Islas Egadas",
    immagine: '/images/italia/isole-siciliane.jpg',
  },
]
