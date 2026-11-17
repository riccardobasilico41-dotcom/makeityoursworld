import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'italia/roma',
  prezzi:
    "Coliseo, Foro Romano y Palatino (24 horas): 18 €, con el primer y el segundo nivel del Coliseo, el Foro y el Palatino, sin la arena ni los subterráneos. Only Arena: 18 €, con 20 minutos en el piso de la arena más el Foro y el Palatino. Full Experience (2 días consecutivos): 24 € con la arena, con subterráneos y arena (32 € con visita didáctica) o con el ático; 32 € con el Pasaje de Cómodo. Forum Pass SUPER: 18 €, con el Foro, el Palatino y los Foros Imperiales, pero sin el Coliseo. Reducida de 2 € para ciudadanos de la UE desde los 18 años hasta cumplir los 25. Entrada gratuita el primer domingo del mes, el 25 de abril, el 2 de junio y el 4 de noviembre.",
  luoghi: [
    {
      nome: 'Coliseo: primer y segundo nivel, ático',
      testo:
        "El recorrido ordinario pasa por el primer y el segundo nivel, con las terrazas panorámicas sobre la arena y el Arco de Constantino, y por el Museo del Coliseo. Más arriba solo se sube con la Full Experience Ático: tercer nivel, galería intermedia y ático, con el ascensor panorámico, desde donde se entiende la altura real de la gradería.",
      come:
        "Metro B, parada Colosseo, justo delante de la entrada. Se entra solo en la franja horaria reservada, tras los controles de seguridad, con la entrada en el móvil y un documento de identidad.",
      quando:
        "En la primera franja de la mañana o en las últimas horas, cuando bajan los grupos. En verano las gradas casi no tienen sombra.",
      tempo: 'Máximo 75 minutos con la entrada básica, 90 con las Full Experience',
      costo: '18 € la entrada básica de 24 horas; 24 € la Full Experience Ático (2026)',
      orari:
        "Todos los días desde las 8:30. Del 25 de octubre de 2026 al 28 de febrero de 2027 cierra a las 16:30, último acceso a las 15:30; en verano cierra más tarde. Cerrado el 25 de diciembre y el 1 de enero.",
      url: 'https://colosseo.it/biglietti/colosseo-foro-romano-palatino/',
      lat: 41.8903,
      lng: 12.4922,
    },
    {
      nome: 'Arena y subterráneos (hipogeo)',
      testo:
        "Bajo el piso de la arena corría una red de pasillos, jaulas y montacargas que hacía aparecer de golpe animales y gladiadores. Hoy una parte del piso está reconstruida: se camina sobre ella mirando las gradas desde abajo, como las veían los combatientes, y luego se baja al hipogeo.",
      come:
        "Solo con la Full Experience Subterráneos y Arena (o con Only Arena y Full Experience Arena para el piso solo). Los subterráneos se abren según disponibilidad y las plazas son pocas.",
      quando: 'Reservar en cuanto abre la venta, 30 días antes: son los turnos que se agotan primero.',
      tempo: '1h30 con el resto del Coliseo; 20 minutos con Only Arena',
      costo: '24 €, 32 € con visita didáctica; Only Arena 18 € (2026)',
      orari: 'Acceso solo a la hora reservada, dentro del horario del Coliseo.',
      url: 'https://colosseo.it/en/tickets/full-experience-underground-arena/',
      lat: 41.8903,
      lng: 12.4922,
      consiglio: 'Es la parte del monumento que más cambia la visita: si solo se puede elegir un extra, que sea este.',
    },
    {
      nome: 'Arco de Constantino',
      testo:
        "El arco triunfal más grande de Roma, dedicado en el 315 d. C. por la victoria de Constantino sobre Majencio. Muchos relieves proceden de monumentos más antiguos, de Trajano, Adriano y Marco Aurelio, y se reconocen por su estilo distinto.",
      come: 'Está entre el Coliseo y el inicio de la vía di San Gregorio; se mira desde fuera, rodeado por una valla.',
      quando: 'A primera hora o al atardecer, con la luz rasante sobre los relieves.',
      tempo: '15 minutos',
      costo: 'Gratis, se ve desde la plaza',
      orari: 'Visible a cualquier hora',
      lat: 41.8897,
      lng: 12.4908,
    },
    {
      nome: 'Foro Romano',
      testo:
        "El centro político, religioso y comercial de la Roma antigua: la Vía Sacra, la Curia donde se reunía el Senado, los templos de Saturno y de los Dioscuros, la Casa de las Vestales y la iglesia de Santa Maria Antiqua con sus frescos. Sin una clave de lectura parece un campo de piedras; con un mapa o una audioguía se vuelve legible.",
      come:
        "Incluido en la entrada del Coliseo y en el Forum Pass SUPER. Se entra por el Arco de Tito, por Largo della Salara Vecchia (vía dei Fori Imperiali) o por vía del Tulliano.",
      quando: "En verano, por la mañana: el Foro tiene muy poca sombra. Con la entrada de 24 horas se puede visitar en las 24 horas antes o después del Coliseo; con las Full Experience, también el día antes o el día después.",
      tempo: '1h30-2 horas',
      costo: 'Incluido en las entradas de 18 € (2026)',
      orari:
        "Del 25 de octubre de 2026 al 28 de febrero de 2027, de 9 a 16:30, último acceso a las 15:30; en verano, horario más largo. Cerrado el 25 de diciembre y el 1 de enero.",
      url: 'https://colosseo.it/area/foro-romano/',
      lat: 41.8922,
      lng: 12.4852,
    },
    {
      nome: 'Palatino',
      testo:
        "La colina donde, según la tradición, nació Roma y donde los emperadores construyeron sus palacios, de la Domus Augustana a la Domus Tiberiana. Es verde, alta y menos concurrida que el Foro, y desde sus terrazas se ve el Foro desde arriba por un lado y el Circo Máximo por el otro.",
      come:
        "Por el mismo acceso del Foro, subiendo desde el Arco de Tito, o por la puerta de vía di San Gregorio. Dentro están la Casa de Augusto (cerrada los lunes), el Aula Isiaca y el Museo Palatino.",
      quando: 'Por la tarde, cuando la luz baja sobre el Foro; muchos lo saltan por cansancio, conviene guardar fuerzas.',
      tempo: '1-2 horas',
      costo: 'Incluido en las entradas de 18 € (2026)',
      orari: 'Mismo horario que el Foro Romano.',
      url: 'https://colosseo.it/area/palatino/',
      lat: 41.8883,
      lng: 12.4869,
      consiglio: 'La Casa de Livia está cerrada por restauración; la Casa de Augusto es uno de los sitios SUPER con aforo limitado.',
    },
    {
      nome: 'Foros Imperiales y Mercados de Trajano',
      testo:
        "Después del Foro Romano los emperadores construyeron plazas nuevas: los Foros de César, Augusto, Nerva y Trajano, hoy cortados por la vía dei Fori Imperiali. Sobre el Foro de Trajano se alzan los Mercados, un conjunto de ladrillo de varias plantas con tiendas y oficinas que alberga el Museo de los Foros Imperiales.",
      come:
        "Desde la calle se ven gratis. Se baja a los Foros con el Forum Pass SUPER; los Mercados de Trajano tienen entrada aparte, con acceso por vía Quattro Novembre.",
      quando: 'Al atardecer la luz sobre el ladrillo de los Mercados es la mejor.',
      tempo: '1-2 horas',
      costo: 'Forum Pass SUPER 18 €; Mercados de Trajano 15 € más 1 € de preventa online (2026)',
      orari: 'Mercados de Trajano todos los días de 9:30 a 19:30, último acceso una hora antes; cerrados el 1 de mayo y el 25 de diciembre.',
      url: 'https://colosseo.it/biglietti/forum-pass-super/',
      lat: 41.8944,
      lng: 12.4856,
    },
    {
      nome: 'Domus Aurea y Colle Oppio',
      testo:
        "El palacio de Nerón, enterrado tras su muerte bajo las termas de Trajano y redescubierto en el Renacimiento, cuando los artistas se descolgaban desde arriba para copiar sus decoraciones. Se visita dentro de una excavación permanente, con la sala octogonal y una reconstrucción en realidad virtual. Encima está el parque del Colle Oppio, con restos de las termas y vistas al Coliseo.",
      come:
        "Entrada por vía della Domus Aurea, a pocos minutos a pie del Coliseo. Entrada aparte, solo con reserva, en turnos cada 15 minutos.",
      quando: 'Solo viernes, sábado y domingo. Cerrada el primer domingo del mes y algunos días del calendario del Parque.',
      costo: '26 € con recorrido didáctico y realidad virtual; 18 € (reducida 2 €) en los turnos sin guía de las 12 y las 17 (2026)',
      orari: 'Viernes a domingo de 9 a 16:30, último acceso a las 15:30 (horario hasta el 28 de febrero de 2027).',
      url: 'https://colosseo.it/biglietti/domus-aurea/',
      lat: 41.8914,
      lng: 12.4953,
      consiglio: 'Dentro hace frío todo el año: hace falta una sudadera incluso en verano.',
    },
    {
      nome: 'Circo Máximo',
      testo:
        "El mayor edificio para espectáculos de la Antigüedad, donde se corrían las carreras de carros. Hoy es un largo prado con forma de pista, bajo las ruinas de los palacios imperiales del Palatino, que lo miran desde arriba.",
      come: 'Metro B, parada Circo Massimo, o a pie desde el Coliseo por vía di San Gregorio en unos 15 minutos.',
      quando: 'Al atardecer, con el Palatino iluminado de lado.',
      tempo: '20-30 minutos',
      costo: 'El prado es de acceso libre',
      lat: 41.8859,
      lng: 12.4857,
      consiglio: 'Combina bien con las Termas de Caracalla y el Aventino con el Jardín de los Naranjos.',
    },
    {
      nome: 'Museos Capitolinos',
      testo:
        "El museo público más antiguo del mundo, en la plaza del Campidoglio diseñada por Miguel Ángel. Guarda la Loba, el Marco Aurelio ecuestre original y los retratos de los emperadores; desde la galería del Tabularium se ve todo el Foro Romano desde arriba.",
      come: 'A pie desde el Foro, subiendo al Capitolio, o desde Piazza Venezia por la Cordonata. Entradas online o en taquilla.',
      quando: 'A última hora de la tarde, después del Foro y el Palatino: al atardecer el Tabularium mira al Foro con la mejor luz.',
      tempo: '2-3 horas',
      costo: '15 € para no residentes, 16,50 € con la exposición en curso (2026)',
      orari: 'Todos los días de 9:30 a 19:30, último acceso a las 18:30. Cerrados el 1 de mayo y el 25 de diciembre.',
      url: 'https://www.museicapitolini.org/',
      lat: 41.8931,
      lng: 12.4828,
    },
    {
      nome: 'Domus Romanas de Palazzo Valentini',
      testo:
        "Bajo un palacio de la administración provincial, junto a la Columna Trajana, han salido a la luz los suelos de mosaico y los muros de dos casas aristocráticas de época imperial. Proyecciones y luces reconstruyen salas, termas privadas y mobiliario: es la forma más directa de entender cómo vivían los romanos ricos.",
      come: 'Vía Quattro Novembre, a dos pasos de Piazza Venezia. Visita en grupo a hora fija, con reserva.',
      quando: 'Reservar al menos el día antes. Hay que estar en taquilla 15 minutos antes del turno.',
      tempo: '1 hora; 1h30 con la Columna Trajana',
      costo: '15 € más 1,50 € de reserva (2026)',
      orari: 'Cerradas los martes. Hasta el 28 de febrero de 2027, de 10 a 18, última visita a las 16:30.',
      url: 'https://www.palazzovalentini.it/',
      lat: 41.8967,
      lng: 12.4839,
    },
    {
      nome: 'Ludus Magnus',
      testo:
        "El mayor cuartel y escuela de gladiadores de Roma, construido bajo Domiciano y unido al Coliseo por un pasaje subterráneo. Se ve todavía una parte de la pequeña arena elíptica donde entrenaban, con las bases de las estancias alrededor.",
      come: 'Entre vía Labicana y vía di San Giovanni in Laterano, a pocos pasos del Coliseo: se mira desde arriba, desde la calle.',
      quando: 'De camino a San Clemente.',
      tempo: '10 minutos',
      costo: 'Gratis, visible desde la calle',
      lat: 41.8901,
      lng: 12.495,
    },
    {
      nome: 'Basílica de San Clemente',
      testo:
        "Una basílica del siglo XII construida sobre una iglesia del IV, levantada a su vez sobre edificios romanos del siglo I con un mitreo. Se bajan tres niveles y mil años, hasta oír el agua de un conducto romano que sigue corriendo.",
      come: 'A cinco minutos a pie del Coliseo por vía Labicana. La basílica superior es de acceso libre; las excavaciones, con entrada y reserva online obligatoria.',
      quando: 'Por la tarde, después del Coliseo. Abajo hace fresco incluso en verano.',
      tempo: '1 hora',
      costo: 'Excavaciones 10 €, reducida 7 € para estudiantes hasta 21 años (2026)',
      orari: 'Lunes a sábado de 9 a 12:30 y de 14 a 18, domingos y festivos de 12 a 18; último acceso media hora antes del cierre.',
      url: 'https://www.basilicasanclemente.com/',
      lat: 41.8894,
      lng: 12.4975,
    },
  ],
  programmi: [
    {
      titolo: 'Medio día',
      tappe: [
        'Coliseo en la primera franja de la mañana con la entrada de 24 horas (primer y segundo nivel, museo).',
        'Arco de Constantino a la salida, luego entrada al Foro Romano por el Arco de Tito a lo largo de la Vía Sacra.',
        'Subida al Palatino para ver el Foro desde arriba y, al otro lado, el Circo Máximo.',
        'Salida por vía di San Gregorio y comida en Monti o en el Celio, lejos de los locales frente al Coliseo.',
      ],
    },
    {
      titolo: '1 día',
      tappe: [
        'Mañana: Full Experience Subterráneos y Arena en la primera franja, luego los niveles y las terrazas.',
        'Arco de Constantino y Ludus Magnus, comida en Monti.',
        'Tarde: Foro Romano y Palatino con la misma entrada.',
        'Atardecer en los Museos Capitolinos, con la vista del Foro desde el Tabularium, y cena en Monti.',
      ],
    },
    {
      titolo: '2 días',
      tappe: [
        'Día 1: Coliseo con arena y subterráneos por la mañana, Ludus Magnus y San Clemente por la tarde, noche en Monti. La Domus Aurea, si es viernes, sábado o domingo.',
        'Día 2: Foro Romano y Palatino por la mañana con la misma Full Experience (vale dos días consecutivos), Circo Máximo, luego Foros Imperiales y Mercados de Trajano, las Domus Romanas de Palazzo Valentini y los Museos Capitolinos al atardecer.',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Coliseo, Foro Romano, Palatino (24 horas)',
      prezzo: '18 € (reducida 2 €)',
      include: 'Primer y segundo nivel del Coliseo con las terrazas, Museo del Coliseo, Foro Romano y Palatino, exposiciones en curso. Un acceso al Coliseo a la hora reservada y uno al Foro y Palatino en un plazo de 24 horas. Máximo 75 minutos dentro del Coliseo.',
      dove: 'ticketing.colosseo.it o taquilla',
    },
    {
      tipo: 'Only Arena (24 horas)',
      prezzo: '18 € (reducida 2 €)',
      include: '20 minutos en el piso de la arena, con entrada y salida por el lado Sperone Stern, más Foro Romano, Palatino y sitios SUPER. No incluye los niveles del Coliseo.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Subterráneos y Arena (2 días)',
      prezzo: '24 € (reducida 2 €); 32 € con visita didáctica',
      include: 'Arena y subterráneos (cuando son accesibles), Museo del Coliseo, Foro Romano, Palatino y sitios SUPER. Máximo 90 minutos dentro del Coliseo.',
      dove: 'ticketing.colosseo.it, a la venta desde 30 días antes',
    },
    {
      tipo: 'Full Experience Arena (2 días)',
      prezzo: '24 € (reducida 2 €)',
      include: 'Arena y Museo del Coliseo, Foro Romano, Palatino y sitios SUPER. Máximo 90 minutos dentro del Coliseo.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Ático (2 días)',
      prezzo: '24 € (reducida 2 €)',
      include: 'Primer, segundo y tercer nivel, galería intermedia, ático con ascensor panorámico, Foro Romano, Palatino y sitios SUPER.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Full Experience Pasaje de Cómodo (2 días)',
      prezzo: '32 € (reducida 2 €)',
      include: 'El pasaje subterráneo reservado al emperador, primer y segundo nivel del Coliseo, Foro Romano, Palatino y sitios SUPER.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Forum Pass SUPER',
      prezzo: '18 € (reducida 2 €)',
      include: 'Un acceso en un día al Foro Romano, Palatino, Foros Imperiales y sitios SUPER. Sin Coliseo. Comprado online se usa en un plazo de 30 días; no vale el primer domingo del mes.',
      dove: 'ticketing.colosseo.it o taquilla',
    },
    {
      tipo: 'Domus Aurea',
      prezzo: '26 € con visita didáctica y realidad virtual; 18 € (reducida 2 €) en turnos sin guía',
      include: 'Visitas por turnos el viernes, sábado y domingo; los turnos sin guía son a las 12 y a las 17.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Una Notte al Colosseo (visitas nocturnas de verano)',
      prezzo: '50 € (reducida 28 €)',
      include: 'Visita guiada de una hora aproximadamente con arena y subterráneos, martes y jueves por la noche de 20 a 23 (edición 2026: del 7 de julio al 29 de septiembre). Grupos de 25 personas como máximo; entradas a la venta 7 días antes, no modificables.',
      dove: 'ticketing.colosseo.it',
    },
    {
      tipo: 'Primer domingo del mes y días gratuitos',
      prezzo: 'Gratis',
      include: 'Primer domingo del mes, 25 de abril, 2 de junio y 4 de noviembre. El primer domingo no se reserva: entradas individuales que se recogen el mismo día en las taquillas de piazza del Colosseo y Largo della Salara Vecchia, hasta agotarse. Sin arena, subterráneos ni niveles superiores; Domus Aurea cerrada.',
      dove: 'Taquilla, por orden de llegada',
    },
    {
      tipo: 'Reglas para todas las entradas',
      prezzo: 'Nominativas',
      include: 'Cada entrada lleva el nombre del visitante: en el acceso se muestra un documento de identidad. Para visitas desde el 9 de mayo de 2026 el nombre se puede cambiar una sola vez, hasta la medianoche del séptimo día antes, y solo por un error de escritura evidente, una categoría equivocada o motivos graves documentados. No hace falta imprimir: basta la entrada en el móvil.',
      dove: 'Formulario de cambio en la web oficial',
    },
  ],
  mesi: [
    { voto: 4, folla: 'bassa', nota: 'Tras el cierre del Jubileo, el 6 de enero de 2026, es el mes más tranquilo. Cerrado el 1 de enero; días cortos, el Parque cierra a las 16:30.' },
    { voto: 4, folla: 'bassa', nota: 'Fresco y poca gente, ideal para el Foro y el Palatino sin calor. Último mes del horario de invierno.' },
    { voto: 4, folla: 'media', nota: 'Clima suave y horario más largo. En 2027 la Pascua cae el 28 de marzo: la Semana Santa trae muchos peregrinos y grupos.' },
    { voto: 3, folla: 'alta', nota: 'El mejor clima, pero llegan excursiones escolares y puentes; el 25 de abril la entrada es gratuita y las colas son larguísimas.' },
    { voto: 3, folla: 'alta', nota: 'Días largos y luz bonita, pero las franjas de la mañana y los subterráneos se agotan semanas antes.' },
    { voto: 3, folla: 'alta', nota: 'Empieza el calor. El 2 de junio es gratuito y está abarrotado; mejor las franjas de las 8:30 o las últimas de la tarde.' },
    { voto: 2, folla: 'alta', nota: 'Calor fuerte y poquísima sombra entre el Coliseo y el Foro. A cambio, los martes y jueves hay visitas nocturnas.' },
    { voto: 2, folla: 'alta', nota: 'El mes más caluroso; hacia el 15 de agosto los romanos se van, pero los turistas no. Agua de los nasoni y visitas al amanecer o por la noche.' },
    { voto: 4, folla: 'alta', nota: 'El calor baja y la afluencia sigue alta hasta final de mes. Últimas visitas nocturnas de la temporada.' },
    { voto: 5, folla: 'media', nota: 'Temperaturas agradables y luz suave sobre el Foro. Desde el 25 de octubre vuelve el horario de invierno, con cierre a las 16:30.' },
    { voto: 5, folla: 'media', nota: 'Uno de los mejores meses: menos grupos y luz baja sobre el Foro. El 4 de noviembre es gratuito.' },
    { voto: 4, folla: 'media', nota: 'Tranquilo hasta mediados de mes, luego las fiestas llenan la ciudad, sobre todo en torno al 8 de diciembre y Navidad. Cerrado el 25 de diciembre.' },
  ],
  zone: [
    {
      nome: 'Monti',
      perChi: 'quien quiere llegar a pie al Coliseo y salir por la noche',
      testo:
        'El barrio detrás de los Foros Imperiales: callejuelas, tiendas y locales, con el metro B en Cavour. Algo ruidoso por la noche, con pocos hoteles grandes y muchos apartamentos.',
      fascia: '130-250 €',
    },
    {
      nome: 'Celio',
      perChi: 'quien busca silencio a dos pasos del Coliseo',
      testo:
        'La colina verde al sur del Coliseo, con vía di San Giovanni in Laterano, San Clemente y los Santi Quattro Coronati. Residencial y tranquila, con pocos alojamientos y alguna trattoria de barrio.',
    },
    {
      nome: 'Esquilino',
      perChi: 'quien quiere gastar menos y tener los trenes cerca',
      testo:
        'Entre Termini y Piazza Vittorio, a 15-20 minutos a pie del Coliseo o a una parada de metro. Barrio multiétnico con mercado cubierto y precios más bajos; por la noche, las calles junto a Termini no son agradables.',
    },
  ],
  gite: [
    {
      nome: 'Ostia Antica',
      distanza: '25 km, unos 40 minutos',
      come: 'Tren Roma-Lido desde la estación de Porta San Paolo (metro B Piramide) hasta Ostia Antica, con el billete urbano.',
      testo:
        'El puerto de la Roma antigua: calles, termas, insulae de varias plantas, el teatro y las tiendas con los mosaicos de los gremios. Menos espectacular que Pompeya pero mucho más fácil de recorrer, y casi vacía. Excavaciones cerradas los lunes.',
      link: '/viaggi/roma-4-giorni',
    },
    {
      nome: 'Vía Apia Antigua',
      distanza: 'a pocos km al sur del Coliseo',
      come: 'Autobús 118 desde el Coliseo o el Circo Máximo; bicis de alquiler en los puntos de información del Parque.',
      testo:
        'La reina de las calzadas romanas, con el empedrado original entre pinos, sepulcros, el Mausoleo de Cecilia Metela y las catacumbas. Los domingos está cerrada al tráfico y es el día para recorrerla a pie o en bici.',
      link: '/esperienze/italia/appia-antica',
    },
    {
      nome: "Tívoli: Villa Adriana y Villa d'Este",
      distanza: '30 km, alrededor de 1 hora',
      come: 'Tren regional desde Tiburtina o autobús Cotral desde Ponte Mammolo (metro B); un autobús local une las dos villas.',
      testo:
        "La residencia del emperador Adriano, grande como una ciudad, y las fuentes renacentistas de Villa d'Este: dos sitios UNESCO que completan la historia de la arquitectura imperial que empieza en el Coliseo.",
    },
  ],
  faq: [
    {
      domanda: '¿Hay que reservar el Coliseo?',
      risposta:
        'En la práctica, sí: el acceso es siempre a hora fija y las mejores franjas se agotan con semanas de antelación. La venta abre 30 días antes en ticketing.colosseo.it; hay taquilla in situ, pero en temporada alta puede no quedar sitio para el mismo día.',
    },
    {
      domanda: '¿Qué entrada conviene elegir?',
      risposta:
        'Con poco tiempo basta la entrada de 24 horas de 18 €. Quien quiera ver de verdad el Coliseo por dentro debe tomar la Full Experience Subterráneos y Arena de 24 €, que vale dos días y permite ver el Foro y el Palatino con calma al día siguiente.',
    },
    {
      domanda: '¿Cuánto tiempo se puede estar dentro del Coliseo?',
      risposta:
        '75 minutos con la entrada básica y 90 con las Full Experience; después hay que salir. En el Foro y el Palatino no hay límite, salvo la hora de cierre.',
    },
    {
      domanda: '¿La entrada es nominativa? ¿Se puede cambiar el nombre?',
      risposta:
        'Sí, todas las entradas son nominativas y en el acceso se muestra un documento. El nombre se puede cambiar una sola vez, hasta siete días antes de la visita, y solo por errores evidentes o motivos graves documentados: las entradas compradas a revendedores a nombre de otros no pasan el control.',
    },
    {
      domanda: '¿Cómo funciona el primer domingo del mes gratuito?',
      risposta:
        'No se reserva: las entradas gratuitas se recogen en persona en las taquillas de piazza del Colosseo y Largo della Salara Vecchia, hasta agotarse. La arena, los subterráneos y los niveles superiores siguen cerrados, y las colas son las más largas del mes.',
    },
    {
      domanda: '¿Se puede visitar el Coliseo de noche?',
      risposta:
        'Solo en verano, con «Una Notte al Colosseo»: en 2026 del 7 de julio al 29 de septiembre, martes y jueves de 20 a 23, con guía, arena y subterráneos, por 50 €. Las entradas salen 7 días antes y se agotan rápido.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/colosseo/colosseo-interno-panoramica.jpg',
      alt: 'El interior del Coliseo en un día de sol: las gradas en ruinas, el piso de la arena reconstruido en parte y los pasillos de los subterráneos al descubierto',
    },
    {
      src: '/images/meraviglie/colosseo/colosseo-ipogei-sotterranei.jpg',
      alt: 'Los muros de los subterráneos del Coliseo vistos desde arriba, con la pasarela reconstruida de la arena y visitantes en las terrazas',
    },
    {
      src: '/images/meraviglie/colosseo/colosseo-arco-costantino-dal-palatino.jpg',
      alt: 'El Coliseo y el Arco de Constantino vistos desde el Palatino, con la plaza llena de visitantes y el cielo azul',
    },
    {
      src: '/images/meraviglie/colosseo/foro-romano-dal-vittoriano.jpg',
      alt: 'Pinos piñoneros, la cúpula de Santi Luca e Martina y el borde del Foro Romano vistos desde las terrazas del Vittoriano',
    },
    {
      src: '/images/meraviglie/colosseo/palatino-dal-circo-massimo.jpg',
      alt: 'Las arcadas de ladrillo de los palacios imperiales del Palatino vistas desde el Circo Máximo',
    },
  ],
}
