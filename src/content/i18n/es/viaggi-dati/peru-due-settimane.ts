import type { TripMeta } from '@/lib/types'

const IMG = '/images/viaggi/peru-itinerario'

export const peruDueSettimaneMeta: TripMeta = {
  tripSlug: 'peru-due-settimane',
  paeseSlug: 'peru',
  ritmo:
    "Medio: dos jornadas llenas de traslado en autobús (Arequipa-Puno y Puno-Cusco) y días lentos a la llegada en altura, alternados con días intensos en el Colca, en el Titicaca y en Machu Picchu. El orden de sur a norte sirve para subir de altitud por escalones.",
  trasporti:
    "Por libre: vuelos internos Lima-Arequipa y Cusco-Lima, tour o autobús de línea para el Colca, autobuses turísticos Arequipa-Puno y Puno-Cusco, barca en el Titicaca, coche con conductor en el Valle Sagrado, tren PeruRail/IncaRail de Ollantaytambo a Aguas Calientes y autobús lanzadera a Machu Picchu.",
  stile: ['cultura inca', 'alta quota', 'natura', 'sud america'],
  adattoA: [
    "quien va a Perú por primera vez y tiene dos semanas",
    "quien quiere Machu Picchu, el Titicaca y el Colca sin correr",
    "quien teme la altitud y prefiere subir un escalón cada vez",
    "quien puede añadir 3-4 días para la Amazonía desde Puerto Maldonado o para la Laguna 69 en Huaraz",
  ],
  puntiForti: [
    "Machu Picchu en el primer turno, con cuarenta minutos de silencio antes de que lleguen los grupos",
    "La noche en familia en Amantaní, el único momento del recorrido fuera del circuito turístico",
    "Los cóndores en la Cruz del Cóndor, en el Cañón del Colca, cuando se elevan con las corrientes de la mañana",
    "El Monasterio de Santa Catalina en Arequipa, una ciudad amurallada dentro de la ciudad",
    "La subida de altitud por escalones, que hace llegar a Cusco y a Machu Picchu ya aclimatados",
  ],
  criticita: [
    "La altitud sigue siendo el tema del viaje: Puno está a 3.812 metros y Cusco a 3.400, y los primeros momentos en altura hay que tomarlos con calma incluso después del Colca",
    "Huayna Picchu y Montaña Machu Picchu en temporada alta se agotan 3-4 meses antes; entradas solo en tuboleto.cultura.pe",
    "Dos jornadas se van casi enteras en autobús (Arequipa-Puno unas 6 horas, Puno-Cusco 7-8 horas)",
    "Falsos taxistas en los aeropuertos y cambistas callejeros en Cusco: taxi solo reservado o por app, cambio solo en banco o en casa de cambio autorizada",
    "Las islas de los Uros son una puesta en escena turística: el lado auténtico del lago es Amantaní, incómoda y fría de noche",
    "El último día tiene dos vuelos seguidos (Cusco-Lima y el intercontinental): hace falta margen entre los dos",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: "con amigos, por libre, con vuelos internos, autobuses turísticos, tren a Machu Picchu y tours organizados en el Colca y en el Titicaca",
    cosaCercavo: undefined,
    treEsperienzePiuBelle:
      "Machu Picchu en el primer turno antes de los grupos, la noche en familia en Amantaní en el Titicaca, los cóndores en la Cruz del Cóndor",
    cosaCambierei: "No subestimar la altitud, llevar zapatos cómodos y no dejarse engañar por las agencias",
    aChiLoConsiglio: "A quien va a Perú por primera vez y tiene dos semanas, quizá con unos días más para la Amazonía",
  },
  tappeMappa: [
    { nome: 'Lima', destinazioneSlug: 'lima' },
    { nome: 'Arequipa y el Colca', destinazioneSlug: 'arequipa-colca' },
    { nome: 'Titicaca (Puno y Amantaní)', destinazioneSlug: 'lago-titicaca' },
    { nome: 'Cusco', destinazioneSlug: 'cusco' },
    { nome: 'Valle Sagrado', destinazioneSlug: 'valle-sacra' },
    { nome: 'Machu Picchu', destinazioneSlug: 'machu-picchu' },
  ],
  giorni: [
    { titoloGiorno: "Día 1 — Llegada a Lima", tratta: "Llegada internacional a Lima (Jorge Chávez) → Miraflores o Barranco, taxi reservado o app", pernottamento: "Lima, Miraflores o Barranco", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-01-lima.jpg`, imageAlt: "Atardecer sobre el acantilado del Malecón de Miraflores en Lima, con el faro, los rascacielos y un parapente volando sobre el océano" },
    { titoloGiorno: "Día 2 — Lima: centro histórico, Miraflores y Barranco", pernottamento: "Lima, Miraflores o Barranco", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-02-lima.jpg`, imageAlt: "Vista panorámica de la Plaza Mayor de Lima, con el Palacio de Gobierno, la Catedral y los edificios coloniales amarillos del centro histórico" },
    { titoloGiorno: "Día 3 — Vuelo a Arequipa, la ciudad blanca", tratta: "Lima → Arequipa, vuelo interno (1 h 30 aprox.), llegada a 2.300 metros", pernottamento: "Arequipa, centro histórico", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: '/images/peru/arequipa-plaza-notte-riccardo.jpg', imageAlt: 'La catedral iluminada y la Plaza de Armas de Arequipa de noche, vistas desde el dron' },
    { titoloGiorno: "Día 4 — Hacia el Cañón del Colca", tratta: "Arequipa → Cañón del Colca, tour de dos días o autobús de línea hasta Chivay, parada en las termas de La Calera", pernottamento: "Chivay o Cabanaconde, Cañón del Colca", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: `${IMG}/giorno-15-arequipa-colca.jpg`, imageAlt: "Vista desde lo alto del Cañón del Colca cerca de Chivay, con los andenes agrícolas y el río en el fondo del valle envuelto en la bruma matinal" },
    { titoloGiorno: "Día 5 — La Cruz del Cóndor y regreso a Arequipa", tratta: "Cruz del Cóndor → regreso a Arequipa por la tarde", pernottamento: "Arequipa, centro histórico", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: `${IMG}/giorno-16-arequipa-colca.jpg`, imageAlt: "Un cóndor andino en vuelo cercano, con las alas desplegadas, sobre el Cañón del Colca en la Cruz del Cóndor" },
    { titoloGiorno: "Día 6 — De Arequipa a Puno, en el Titicaca", tratta: "Arequipa → Puno, autobús (unas 6 h), llegada a 3.812 metros", pernottamento: "Puno", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lago-titicaca' },
    { titoloGiorno: "Día 7 — Titicaca: las islas de los Uros y Taquile, noche en Amantaní", tratta: "Puno → islas de los Uros → Taquile → Amantaní, en barca", pernottamento: "Amantaní, homestay con una familia", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Tour de dos días con homestay: aproximadamente 30-60 $ por persona", destinazioneSlug: 'lago-titicaca', immagine: '/images/peru/titicaca-uros-arazzo-riccardo.jpg', imageAlt: "Una mujer uro sonriente con sombrero de paja muestra un tapiz bordado en el lago Titicaca" },
    { titoloGiorno: "Día 8 — Amantaní al amanecer y regreso a Puno", tratta: "Amantaní → Puno, en barca", pernottamento: "Puno", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lago-titicaca', immagine: `${IMG}/giorno-12-lago-titicaca.jpg`, imageAlt: "Vista aérea desde la isla de Amantaní hacia el lago Titicaca al atardecer, con los campos en terrazas y el templo de Pachatata en primer plano" },
    { titoloGiorno: "Día 9 — De Puno a Cusco por el altiplano", tratta: "Puno → Cusco, autobús turístico (7-8 h) con paradas en el paso de La Raya (más de 4.300 m), Raqchi y Andahuaylillas", pernottamento: "Cusco, centro histórico o San Blas", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'cusco', immagine: '/images/peru/uros-canale-titicaca-riccardo.jpg', imageAlt: 'El canal entre las islas flotantes de totora de los uros, en el lago Titicaca, visto desde el dron' },
    { titoloGiorno: "Día 10 — Cusco: Qorikancha, Sacsayhuamán y San Blas", pernottamento: "Cusco, centro histórico o San Blas", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Boleto Turístico del Cusco: unos 130 soles, cubre Sacsayhuamán, los sitios del Valle Sagrado y varios museos", destinazioneSlug: 'cusco', immagine: '/images/peru/cusco-donne-muri-inca-riccardo.jpg', imageAlt: "Dos mujeres andinas con trajes tradicionales rojos caminan entre los muros incas de Cusco" },
    { titoloGiorno: "Día 11 — Valle Sagrado: Pisac, Maras y Moray", tratta: "Cusco → Pisac → salineras de Maras → Moray → Ollantaytambo, coche con conductor", pernottamento: "Ollantaytambo, Valle Sagrado", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Entrada a las salineras de Maras: unos 10 soles", destinazioneSlug: 'valle-sacra', immagine: '/images/peru/moray-terrazze-riccardo.jpg', imageAlt: "Los andenes circulares incas de Moray vistos desde arriba, con un agave en primer plano" },
    { titoloGiorno: "Día 12 — Ollantaytambo y el tren a Aguas Calientes", tratta: "Ollantaytambo → Aguas Calientes, tren PeruRail/IncaRail", pernottamento: "Aguas Calientes", statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "Tren 70-500 $ ida y vuelta según la clase (Expedition/Voyager, Vistadome, Hiram Bingham)", destinazioneSlug: 'machu-picchu', immagine: '/images/peru/binari-urubamba-machu-picchu-riccardo.jpg', imageAlt: 'Las vías del tren junto al río Urubamba crecido, en el valle verde que lleva a Machu Picchu' },
    { titoloGiorno: "Día 13 — Machu Picchu a la apertura", tratta: "Aguas Calientes → Machu Picchu (autobús lanzadera o a pie) → tren hacia Ollantaytambo y traslado a Cusco", pernottamento: "Cusco, centro histórico o San Blas", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Autobús lanzadera Consettur: unos 25 minutos, 24 $ ida y vuelta; entrada al sitio unos 152 soles (unos 200 soles con Huayna Picchu o Montaña Machu Picchu)", destinazioneSlug: 'machu-picchu', immagine: '/images/peru/machu-picchu-lama-terrazze-riccardo.jpg', imageAlt: "Una llama solitaria pasta en los andenes incas de Machu Picchu en la niebla de la mañana" },
    { titoloGiorno: "Día 14 — Vuelo a Lima y regreso", tratta: "Cusco → Lima, vuelo interno (1 h 20 aprox.) → vuelo intercontinental de regreso", pernottamento: "Vuelo de regreso", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-31-lima.jpg`, imageAlt: "Vista aérea de la nueva área de terminal del aeropuerto internacional Jorge Chávez de Lima" },
  ],
  budget: [
    { etichetta: "Vuelos intercontinentales", valore: undefined },
    { etichetta: "Vuelos internos", valore: "Lima-Arequipa y Cusco-Lima, baratos si se reservan con antelación" },
    { etichetta: "Autobuses turísticos", valore: "Arequipa-Puno (unas 6 h) y Puno-Cusco (7-8 h, con paradas)" },
    { etichetta: "Machu Picchu", valore: "tren 70-500 $ ida y vuelta según la clase, autobús lanzadera 24 $ ida y vuelta, entrada unos 152 soles (unos 200 soles con Huayna Picchu o Montaña Machu Picchu)" },
    { etichetta: "Boleto Turístico del Cusco", valore: "unos 130 soles; salineras de Maras aparte, unos 10 soles" },
    { etichetta: "Tour y homestay en el Titicaca", valore: "aproximadamente 30-60 $ por persona por dos días con noche en Amantaní" },
    { etichetta: "Colca", valore: "tour de dos días o autobús de línea; boleto turístico del Colca aparte" },
    { etichetta: "Ampliación a la Amazonía", valore: "lodge en Tambopata aproximadamente 300-600 $ por 3 noches, todo incluido, más el vuelo Cusco-Puerto Maldonado" },
  ],
}
