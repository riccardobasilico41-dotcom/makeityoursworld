import type { TripMeta } from '@/lib/types'

export const indiaRajasthanVaranasiMeta: TripMeta = {
  tripSlug: 'india-rajasthan-varanasi',
  paeseSlug: 'india',
  ritmo:
    "Intenso la primera semana (Delhi, tres noches en Varanasi con madrugones al amanecer, tren nocturno, Agra y Jaipur), más relajado la segunda, con una jornada colchón en Jodhpur antes de Ranakpur y Udaipur. Tres traslados largos en coche y dos en tren.",
  trasporti:
    "Vuelo interno Delhi-Varanasi, tren nocturno Varanasi-Agra en 2A o 3A, trenes diurnos Jodhpur-Jaisalmer y vuelta, coche con conductor para Agra-Jaipur, Jaipur-Pushkar-Jodhpur y Jodhpur-Ranakpur-Udaipur, jeep para las dunas, vuelo de regreso Udaipur-Delhi. Barcas y paseo por los ghats en Varanasi.",
  stile: ['cultura', 'spiritualità', 'treni notturni', 'deserto', 'forti e palazzi'],
  adattoA: [
    "quien tiene al menos dos semanas y media y quiere el norte de India entero, del Ganges al desierto",
    "quien quiere ver Varanasi sin prisas, con tres noches junto al río",
    "quien tiene curiosidad por probar un tren nocturno indio en litera",
    "quien aguanta algún traslado largo a cambio de etapas menos trilladas como Pushkar y Jaisalmer",
  ],
  puntiForti: [
    "Los ghats de Varanasi al amanecer en barca y el Ganga Aarti en Dashashwamedh por la noche",
    "El tren nocturno de Varanasi a Agra, un trozo de India vivido desde dentro",
    "El Taj Mahal a la apertura de las puertas",
    "Una noche en un campamento de tiendas entre las dunas del Thar cerca de Jaisalmer",
    "El Fuerte de Mehrangarh sobre la ciudad azul y el lago Pichola en Udaipur",
  ],
  criticita: [
    "Varanasi es intensa: cremaciones al aire libre, multitudes, callejones estrechos y estafas dirigidas (la «leña para los pobres» en Manikarnika, los precios de las barcas)",
    "El tren nocturno hay que reservarlo 4-6 semanas antes; sin confirmación hace falta el plan B del vuelo Varanasi-Delhi",
    "Entre diciembre y enero la niebla retrasa trenes y vuelos incluso horas, sobre todo en Varanasi y entre Delhi y Agra",
    "El Taj Mahal y el museo de Sarnath están cerrados los viernes: los días hay que encajarlos en el calendario",
    "Jaisalmer añade dos días de traslado: quien tiene poco tiempo lo quita (variante de 12-13 días)",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      "itinerario pensado para viajar por libre, en pareja o en grupo pequeño, con vuelos internos, trenes y conductor para Rajastán",
    treEsperienzePiuBelle:
      "El amanecer en barca sobre el Ganges en Varanasi, el Taj Mahal a la apertura de las puertas, la noche entre las dunas del Thar",
    aChiLoConsiglio: "a quien tiene diecisiete días entre octubre y marzo y quiere el norte de India completo",
  },
  tappeMappa: [
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
    { nome: 'Varanasi y Sarnath', destinazioneSlug: 'varanasi' },
    { nome: 'Agra y el Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Jaipur', destinazioneSlug: 'jaipur' },
    { nome: 'Pushkar', destinazioneSlug: 'pushkar' },
    { nome: 'Jodhpur', destinazioneSlug: 'jodhpur' },
    { nome: 'Jaisalmer y el desierto del Thar', destinazioneSlug: 'jaisalmer' },
    { nome: 'Ranakpur' },
    { nome: 'Udaipur', destinazioneSlug: 'udaipur' },
  ],
  giorni: [
    { titoloGiorno: "Día 1 — Llegada a Delhi y la Vieja Delhi", tratta: "Aeropuerto Indira Gandhi → hotel → Vieja Delhi en metro", pernottamento: "Delhi, Karol Bagh, Connaught Place o South Delhi", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-01-delhi.jpg', imageAlt: "Una calle abarrotada de la Vieja Delhi hacia Chandni Chowk, entre letreros, cables eléctricos y rickshaws, con una cúpula roja al fondo" },
    { titoloGiorno: "Día 2 — Delhi: Humayun, Qutub Minar y vuelo a Varanasi", tratta: "Delhi → Varanasi, vuelo interno de alrededor de 1 h 30", pernottamento: "Varanasi, en los ghats entre Assi y Dashashwamedh", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Humayun y Qutub Minar unas 600 rupias cada uno; vuelo 3.500-7.000 rupias", destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-02-delhi.jpg', imageAlt: "El Qutub Minar, el minarete de arenisca roja del siglo XII, entre el verde y las ruinas del complejo bajo un cielo nublado" },
    { titoloGiorno: "Día 3 — Varanasi: los ghats al amanecer y el aarti en Dashashwamedh", pernottamento: "Varanasi, en los ghats entre Assi y Dashashwamedh", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Barca de remos privada una hora al amanecer 800-1.500 rupias; Ganga Aarti gratuito", destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-barca-pellegrini-riccardo.jpg', imageAlt: "Una barca cargada de peregrinos envueltos en chales naranjas cruza el Ganges frente a los ghats de Varanasi" },
    { titoloGiorno: "Día 4 — Varanasi: Manikarnika, el Kashi Vishwanath y los callejones de la ciudad vieja", pernottamento: "Varanasi, en los ghats entre Assi y Dashashwamedh", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-manikarnika-riccardo.jpg', imageAlt: "La torre roja de un templo velada por el humo sobre el Manikarnika Ghat de Varanasi" },
    { titoloGiorno: "Día 5 — Sarnath y el tren nocturno a Agra", tratta: "Varanasi → Sarnath y vuelta; Varanasi City → Agra Fort, Marudhar Express nocturno de unas 14 h (16:30-16:40 → 6:35)", pernottamento: "Tren nocturno en 2A o 3A", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Sarnath unas 300 rupias (museo aparte, cerrado los viernes); Marudhar Express en 2A unas 2.000-3.000 rupias", destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-guglie-ghat-riccardo.jpg', imageAlt: 'Las agujas de los templos en los ghats de Varanasi con bandadas de pájaros en el cielo velado' },
    { titoloGiorno: "Día 6 — Agra: el Fuerte, el «pequeño Taj» y el atardecer desde Mehtab Bagh", pernottamento: "Agra, zona Taj Ganj", statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "Fuerte de Agra unas 650 rupias", destinazioneSlug: 'agra', immagine: '/images/india/agra-forte-archi-riccardo.jpg', imageAlt: "Una sucesión de arcos polilobulados de arenisca tallada en el Fuerte de Agra, iluminados por una luz cálida" },
    { titoloGiorno: "Día 7 — El Taj Mahal al amanecer y la carretera a Jaipur", tratta: "Agra → Fatehpur Sikri → Abhaneri (opcional) → Jaipur, coche con conductor 5-6 h", pernottamento: "Jaipur, haveli en la ciudad vieja o Bani Park", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Taj Mahal unas 1.100 rupias + 200 por el mausoleo; Fatehpur Sikri unas 600", destinazioneSlug: 'agra', immagine: '/images/india/agra-taj-mahal-cupola-riccardo.jpg', imageAlt: "La cúpula del Taj Mahal asomando tras un pilar oscuro a contraluz" },
    { titoloGiorno: "Día 8 — Jaipur, la ciudad rosa", pernottamento: "Jaipur, haveli en la ciudad vieja o Bani Park", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Amber 1.000 rupias, Hawa Mahal, Jantar Mantar y Nahargarh 600 cada uno, City Palace unas 700 (tarifas para extranjeros 2026)", destinazioneSlug: 'jaipur', immagine: '/images/india/jaipur-grata-riccardo.jpg', imageAlt: "Una celosía de piedra calada en forma de estrella bajo un arco pintado en Jaipur, con la luz filtrándose" },
    { titoloGiorno: "Día 9 — Jaipur: los bazares y la carretera a Pushkar", tratta: "Jaipur → Pushkar, coche unas 3 h", pernottamento: "Pushkar, guesthouse sobre el lago", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'pushkar', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-09-pushkar.jpg', imageAlt: "Pushkar vista desde arriba, con el lago sagrado en el centro de la ciudad y las colinas de los Aravalli alrededor" },
    { titoloGiorno: "Día 10 — Pushkar al amanecer y la carretera a Jodhpur", tratta: "Pushkar → Jodhpur, coche 4-5 h", pernottamento: "Jodhpur, haveli bajo el fuerte", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'pushkar', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-10-pushkar.jpg', imageAlt: "Los ghats y las casas blancas asomados al lago sagrado de Pushkar, reflejados en el agua" },
    { titoloGiorno: "Día 11 — Jodhpur: Mehrangarh y la ciudad azul", pernottamento: "Jodhpur, haveli bajo el fuerte", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Mehrangarh unas 600 rupias con audioguía", destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-11-jodhpur.jpg', imageAlt: "El Fuerte de Mehrangarh sobre su peña por encima de la ciudad vieja de Jodhpur" },
    { titoloGiorno: "Día 12 — Hacia Jaisalmer y la noche en el desierto del Thar", tratta: "Jodhpur → Jaisalmer, tren o coche unas 5 h; Jaisalmer → dunas de Sam o Khuri en jeep", pernottamento: "Campamento de tiendas en el desierto del Thar", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Campamento con cena, desayuno y camello 3.000-8.000 rupias por persona", destinazioneSlug: 'jaisalmer', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-12-jaisalmer.jpg', imageAlt: "Un camello con su camellero a contraluz sobre las dunas al atardecer" },
    { titoloGiorno: "Día 13 — Jaisalmer, la ciudad dorada", pernottamento: "Jaisalmer, hotel bajo el fuerte", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Fuerte gratuito; palacio real, templos y havelis de pago", destinazioneSlug: 'jaisalmer', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-13-jaisalmer.jpg', imageAlt: "Las murallas y los baluartes de arenisca dorada del Fuerte de Jaisalmer, con una bandada de pájaros en vuelo" },
    { titoloGiorno: "Día 14 — De Jaisalmer a Jodhpur", tratta: "Jaisalmer → Jodhpur, tren o coche unas 5 h", pernottamento: "Jodhpur, haveli bajo el fuerte", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-14-jodhpur.jpg', imageAlt: "La ciudad azul de Jodhpur vista a través de una ventana de arco festoneado" },
    { titoloGiorno: "Día 15 — Ranakpur y la llegada a Udaipur", tratta: "Jodhpur → Ranakpur (unas 3 h) → Udaipur (unas 2 h), coche con conductor", pernottamento: "Udaipur, Lal Ghat, Gangaur Ghat o Ambrai", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Ranakpur abierto a los no jainistas aproximadamente de 12 a 17 h", destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-15-udaipur.jpg', imageAlt: "El templo jainista de Ranakpur, con las agujas de mármol claro y la escalinata de entrada" },
    { titoloGiorno: "Día 16 — Udaipur, la ciudad de los lagos", pernottamento: "Udaipur, Lal Ghat, Gangaur Ghat o Ambrai", statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "City Palace 400-700 rupias para los extranjeros", destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-16-udaipur.jpg', imageAlt: "El Lake Palace de mármol blanco en medio del lago Pichola de Udaipur, con las colinas al fondo" },
    { titoloGiorno: "Día 17 — Vuelo de Udaipur a Delhi y salida", tratta: "Udaipur → Delhi, vuelo interno de alrededor de 1 h 30 → vuelo internacional", pernottamento: "Vuelo de regreso (eventual habitación de tránsito en Aerocity)", statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "Vuelo Udaipur-Delhi 4.000-8.000 rupias", destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-17-udaipur.jpg', imageAlt: "El Lake Palace sobre el lago Pichola visto desde la orilla entre las palmeras, bajo un cielo de nubes" },
  ],
  budget: [
    { etichetta: 'Vuelos intercontinentales', valore: "Italia-Delhi, orientativamente 450-900 € ida y vuelta" },
    { etichetta: 'Visado y documentos', valore: "e-Tourist Visa 25 $ (30 días) o 40 $ (un año), más el 2,5-3 % de comisión, que hay que pedir al menos 4 días antes; e-Arrival Card gratuita en las 72 horas previas" },
    { etichetta: 'Vuelos internos', valore: "Delhi-Varanasi 3.500-7.000 rupias, Udaipur-Delhi 4.000-8.000 rupias" },
    { etichetta: 'Trenes', valore: "nocturno Varanasi-Agra (Marudhar Express) en 2A unas 2.000-3.000 rupias; Jodhpur-Jaisalmer y vuelta 500-1.500 rupias por tramo" },
    { etichetta: 'Coche con conductor', valore: "3.000-4.500 rupias por tramo, o 2.800-4.000 rupias al día para Rajastán" },
    { etichetta: 'Varanasi', valore: "barca al amanecer 800-1.500 rupias por la barca; Sarnath unas 300 rupias" },
    { etichetta: 'Noche en el desierto', valore: "3.000-8.000 rupias por persona con cena, desayuno y camello" },
    { etichetta: 'Entradas a los monumentos', valore: "10.000-12.000 rupias por persona en total, unos 100-120 € (tarifas para extranjeros 2026, orientativas)" },
  ],
}
