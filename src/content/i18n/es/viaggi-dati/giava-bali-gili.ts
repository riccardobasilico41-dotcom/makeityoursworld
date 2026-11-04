import type { TripMeta } from '@/lib/types'

const IMG = '/images/viaggi/giava-bali-gili'
const LUNGO = '/images/viaggi/indonesia-itinerario'

export const giavaBaliGiliMeta: TripMeta = {
  tripSlug: 'giava-bali-gili',
  paeseSlug: 'indonesia',
  ritmo:
    "Intenso la primera semana (madrugones para Borobudur, el Bromo y el Ijen, una jornada entera de trenes), más lento en Bali y las Gili, con tres noches finales sin grandes desplazamientos",
  trasporti:
    "Vuelo interno Yakarta-Yogyakarta, trenes Yogyakarta-Surabaya-Probolinggo, minivan y jeep 4x4 para el Bromo, ferri Ketapang-Gilimanuk, conductor privado o moto en Bali, lancha rápida desde Sanur o Padang Bai a las Gili, cidomo y bicicletas en las islas",
  stile: ['templi', 'vulcani', 'risaie', 'isole', 'cultura'],
  adattoA: [
    "quien tiene dos semanas y quiere lo mejor de Java, Bali y las Gili en un solo recorrido",
    "quien acepta tres madrugones en plena noche para Borobudur, el Bromo y el Ijen",
    "quien quiere ver una Bali alejada del sur de los beach clubs",
    "quien cierra el viaje con gusto con unos días lentos junto al mar",
  ],
  puntiForti: [
    "Borobudur al amanecer y Prambanan al atardecer en la misma jornada",
    "El amanecer en el Bromo y el fuego azul del Ijen, con los mineros de azufre en el mismo sendero",
    "El norte de Bali con Munduk, el lago Beratan y la puerta de Handara, luego los arrozales de Jatiluwih y Sidemen",
    "La danza kecak al atardecer en el acantilado de Uluwatu",
    "Las tortugas de las Gili, haciendo snorkel desde la playa",
  ],
  criticita: [
    "La entrada para subir a Borobudur tiene aforo limitado y se agota con mucha antelación",
    "En Probolinggo los tout declaran \"llenos\" los minivans públicos (unos 35.000 IDR) para vender traslados privados inflados",
    "El jeep del Bromo cuesta, como referencia, 700.000-900.000 IDR por vehículo: al amanecer es fácil que te pidan el doble o el triple",
    "El día 6 une el Ijen nocturno, el ferri y la carretera hasta el norte de Bali: es el más largo del viaje",
    "En el Ijen la máscara antigás es obligatoria: los humos de azufre son peligrosos",
    "La moto en Bali solo debe conducirla quien tenga experiencia de verdad; si no, conductor por jornadas",
    "Las lanchas rápidas a las Gili dependen del mar: mejor no tener un vuelo intercontinental temprano el último día",
    "El Nyepi (Año Nuevo balinés, en marzo) cierra Bali y su aeropuerto durante 24 horas",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: "con amigos, por libre: es la primera mitad del viaje largo por Indonesia, condensada en dos semanas",
    cosaCercavo: undefined,
    treEsperienzePiuBelle: "El fuego azul del Ijen, el amanecer en el Bromo, la danza kecak en Uluwatu",
    cosaCambierei: undefined,
    aChiLoConsiglio: "A quien va a Indonesia por primera vez y tiene dos semanas",
  },
  tappeMappa: [
    { nome: 'Yogyakarta', destinazioneSlug: 'giava' },
    { nome: 'Bromo', destinazioneSlug: 'giava' },
    { nome: 'Ijen', destinazioneSlug: 'giava' },
    { nome: 'Norte de Bali', destinazioneSlug: 'bali' },
    { nome: 'Ubud y Sidemen', destinazioneSlug: 'bali' },
    { nome: 'Uluwatu', destinazioneSlug: 'bali' },
    { nome: 'Gili', destinazioneSlug: 'lombok-gili' },
  ],
  giorni: [
    { titoloGiorno: "Día 1 — Llegada a Yakarta y vuelo a Yogyakarta", tratta: "Yakarta → Yogyakarta en avión, poco menos de hora y media", pernottamento: "Yogyakarta, zona Prawirotaman", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'giava' },
    { titoloGiorno: "Día 2 — Amanecer en Borobudur, atardecer en Prambanan", pernottamento: "Yogyakarta, zona Prawirotaman", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "entrada para subir a la estructura de Borobudur con aforo limitado, a reservar antes", destinazioneSlug: 'giava', immagine: '/images/indonesia/borobudur-buddha-nebbia-riccardo.jpg', imageAlt: "Una cabeza de Buda de piedra de Borobudur, de espaldas, frente al valle envuelto en la niebla del amanecer" },
    { titoloGiorno: "Día 3 — Yogyakarta: kraton, batik y Malioboro", pernottamento: "Yogyakarta, zona Prawirotaman", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'giava', immagine: `${LUNGO}/giorno-08-kraton-yogyakarta.jpg`, imageAlt: "Un pabellón decorado del Kraton de Yogyakarta, el palacio del sultán, entre los árboles del patio interior" },
    { titoloGiorno: "Día 4 — En tren hacia Probolinggo y Cemoro Lawang", tratta: "Yogyakarta → Surabaya Gubeng (tren, 4-5 h) → Probolinggo (tren, unas 2 h) → Cemoro Lawang en minivan", pernottamento: "Cemoro Lawang", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "tren Yogyakarta-Surabaya 75.000-285.000 IDR; minivan público Probolinggo-Cemoro Lawang unos 35.000 IDR por persona", destinazioneSlug: 'giava', immagine: '/images/indonesia/bromo-caldera-riccardo.jpg', imageAlt: 'La caldera del Tengger desde el borde sobre Cemoro Lawang: el Bromo humeante, el cono del Batok y el Semeru al fondo' },
    { titoloGiorno: "Día 5 — Amanecer en el Bromo y rumbo al Ijen", tratta: "Cemoro Lawang → Penanjakan en jeep, luego Banyuwangi o Licin en coche", pernottamento: "Banyuwangi o Licin", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "jeep compartido 700.000-900.000 IDR por vehículo, a repartir entre 4-6", destinazioneSlug: 'giava', immagine: `${IMG}/bromo-alba.jpg`, imageAlt: "El cráter del Bromo humeando en el Mar de Arena con la primera luz, con el Semeru al fondo, visto desde el dron" },
    { titoloGiorno: "Día 6 — El fuego azul del Ijen y el ferri a Bali", tratta: "Ijen → Ketapang → ferri a Gilimanuk (30-60 min) → norte de Bali", pernottamento: "Lovina o Munduk", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "ferri Ketapang-Gilimanuk pocos euros por persona, salidas cada 15 minutos", destinazioneSlug: 'giava', immagine: `${LUNGO}/giorno-11-kawah-ijen.jpg`, imageAlt: "Las llamas azules del fuego de azufre del Kawah Ijen, fotografiadas de noche en la oscuridad del cráter" },
    { titoloGiorno: "Día 7 — Norte de Bali: Munduk, el lago Beratan y la puerta de Handara", pernottamento: "Munduk", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${IMG}/bali-handara.jpg`, imageAlt: "La puerta de Handara, el portal balinés de piedra que se abre a una avenida entre praderas, vista desde el dron en la bruma" },
    { titoloGiorno: "Día 8 — Los arrozales de Jatiluwih y llegada a Ubud", tratta: "Munduk → Jatiluwih → Ubud, mejor con conductor privado", pernottamento: "Ubud", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${IMG}/risaie-jatiluwih.jpg`, imageAlt: "Los arrozales en terrazas de Jatiluwih vistos desde arriba, entre palmeras y pequeñas cabañas, Bali" },
    { titoloGiorno: "Día 9 — Ubud y los arrozales de Tegalalang", pernottamento: "Ubud", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-13-tegalalang.jpg`, imageAlt: "Los arrozales en terrazas de Tegalalang que bajan en ondas verdes entre las palmeras, cerca de Ubud, Bali" },
    { titoloGiorno: "Día 10 — Sidemen y el valle del Gunung Agung", tratta: "Ubud → Sidemen y vuelta, 1h15-1h30 por trayecto", pernottamento: "Ubud", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "conductor privado ida y vuelta aproximadamente 350.000 IDR (20 €)", destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-14-sidemen.jpg`, imageAlt: "Los arrozales del valle de Sidemen a los pies del Gunung Agung, vistos desde un canal de riego, Bali oriental" },
    { titoloGiorno: "Día 11 — Uluwatu y la danza kecak al atardecer", tratta: "Ubud → Uluwatu", pernottamento: "Uluwatu", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-18-uluwatu.jpg`, imageAlt: "Los acantilados cortados a pico de Uluwatu con el templo Pura Luhur en lo alto, sobre el mar turquesa de Bali" },
    { titoloGiorno: "Día 12 — En lancha rápida a las Gili", tratta: "Uluwatu → Sanur o Padang Bai → Gili en lancha rápida", pernottamento: "Islas Gili (Trawangan, Air o Meno)", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lombok-gili', immagine: `${IMG}/gili-dall-alto.jpg`, imageAlt: "Un islote de arena blanca en el mar en calma de las Gili, con las islas vecinas al fondo, visto desde el dron" },
    { titoloGiorno: "Día 13 — Gili: tortugas, bicicletas y atardecer", pernottamento: "Islas Gili (Trawangan, Air o Meno)", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lombok-gili', immagine: `${IMG}/gili-tramonto.jpg`, imageAlt: "El sol bajo sobre el mar de las Gili, con un islote verde en el horizonte, visto desde el dron al atardecer" },
    { titoloGiorno: "Día 14 — Regreso a Bali y salida", tratta: "Gili → Bali en lancha rápida → aeropuerto de Denpasar", intensita: 'leggero', destinazioneSlug: 'bali' },
  ],
  budget: [
    { etichetta: "Vuelos intercontinentales", valore: undefined },
    { etichetta: "Vuelo interno", valore: "Yakarta-Yogyakarta, poco menos de hora y media" },
    { etichetta: "Trenes y minivan para el Bromo", valore: "tren Yogyakarta-Surabaya 75.000-285.000 IDR; minivan público desde Probolinggo unos 35.000 IDR por persona" },
    { etichetta: "Jeep del Bromo", valore: "700.000-900.000 IDR por vehículo, a repartir entre 4-6" },
    { etichetta: "Conductor privado en Bali", valore: "aproximadamente 300.000-600.000 IDR por trayecto; Ubud-Sidemen ida y vuelta unos 350.000 IDR" },
    { etichetta: "Alojamientos", valore: "económicos en Java y alrededor de los volcanes, de precio medio en Bali y las Gili" },
    { etichetta: "Comidas", valore: "pocos euros por plato en los warung; más en los locales turísticos de Bali" },
  ],
}
