import type { TripMeta } from '@/lib/types'

export const indiaRajasthan10GiorniMeta: TripMeta = {
  tripSlug: 'india-rajasthan-10-giorni',
  paeseSlug: 'india',
  ritmo:
    "Intenso pero llevadero: cinco ciudades en diez días, con al menos dos noches en Delhi, Jaipur y Jodhpur y dos traslados largos en coche (Agra-Jaipur, Jodhpur-Udaipur) partidos con paradas por el camino. Madrugones casi todos los días, para ver los fuertes y el Taj Mahal antes del calor y de las multitudes.",
  trasporti:
    "Por libre: trenes rápidos Delhi-Agra (Gatimaan Express o Vande Bharat) y Jaipur-Jodhpur reservados en IRCTC, coche con conductor para Agra-Jaipur y Jodhpur-Udaipur, vuelo interno Udaipur-Delhi para el regreso; en las ciudades, metro en Delhi, Uber, Ola y tuk-tuk.",
  stile: ['cultura', 'forti e palazzi', 'treni', 'prima volta in India'],
  adattoA: [
    "quien va a India por primera vez y quiere un itinerario que se pueda organizar por cuenta propia, sin tour en grupo",
    "quien quiere el Taj Mahal al amanecer y los grandes fuertes de Rajastán con tiempo para verlos bien",
    "quien tiene diez días y prefiere dos noches por ciudad a un recorrido que lo toque todo",
    "quien acepta el fuerte impacto de Delhi a cambio de una segunda mitad más tranquila entre Jodhpur y Udaipur",
  ],
  puntiForti: [
    "El Taj Mahal a la apertura de las puertas, después de haberlo visto al atardecer desde Mehtab Bagh la tarde anterior",
    "El Fuerte de Mehrangarh sobre la ciudad azul de Jodhpur, con la audioguía incluida en la entrada",
    "El templo jainista de Ranakpur con sus 1.444 columnas esculpidas, como parada del traslado hacia Udaipur",
    "El atardecer sobre el lago Pichola en Udaipur, con el City Palace iluminado en la orilla",
    "El pozo escalonado de Chand Baori en Abhaneri y Fatehpur Sikri por el camino de Agra a Jaipur",
  ],
  criticita: [
    "El Taj Mahal está cerrado los viernes: el día de Agra hay que encajarlo en el calendario antes de reservar trenes y hoteles",
    "Las estafas son la molestia principal: hotel «cerrado», falsas oficinas de turismo en Delhi, gemas de Jaipur, tiendas con comisión. Todas evitables si se conocen",
    "Diciembre y enero traen niebla por la mañana entre Delhi y Agra, con retrasos de los trenes y el Taj a veces invisible al amanecer",
    "Jaisalmer, el desierto del Thar y Pushkar se quedan fuera por falta de tiempo: están en las variantes",
    "Las entradas para extranjeros cuestan mucho más que para los indios, y desde 2026 Rajastán las ha duplicado: 9.000-11.000 rupias por persona por los monumentos del viaje",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      "itinerario pensado para viajar por libre, en pareja o en grupo pequeño, con trenes, conductor para los traslados y un vuelo interno",
    treEsperienzePiuBelle:
      "El Taj Mahal al amanecer, el Fuerte de Mehrangarh sobre la ciudad azul, el atardecer sobre el lago Pichola en Udaipur",
    aChiLoConsiglio: "a quien va a India por primera vez y tiene diez días entre octubre y marzo",
  },
  tappeMappa: [
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
    { nome: 'Agra y el Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Jaipur', destinazioneSlug: 'jaipur' },
    { nome: 'Jodhpur', destinazioneSlug: 'jodhpur' },
    { nome: 'Ranakpur' },
    { nome: 'Udaipur', destinazioneSlug: 'udaipur' },
  ],
  giorni: [
    { titoloGiorno: "Día 1 — Llegada a Delhi y la Vieja Delhi", tratta: "Aeropuerto Indira Gandhi → hotel → Vieja Delhi en metro", pernottamento: "Delhi, Karol Bagh, Connaught Place o South Delhi", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Ciclo-rickshaw en Chandni Chowk 300-500 rupias por trayecto", destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-01-delhi.jpg', imageAlt: "La Jama Masjid de Delhi, la gran mezquita de arenisca roja y mármol blanco con sus minaretes y cúpulas, vista desde el patio" },
    { titoloGiorno: "Día 2 — Delhi: Humayun, Qutub Minar y Nueva Delhi", pernottamento: "Delhi, Karol Bagh, Connaught Place o South Delhi", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Tumba de Humayun y Qutub Minar unas 600 rupias cada uno para los extranjeros", destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-02-delhi.jpg', imageAlt: "La Tumba de Humayun en Delhi, mausoleo mogol de arenisca roja con la cúpula de mármol blanco, bajo un cielo azul" },
    { titoloGiorno: "Día 3 — En tren a Agra: el Fuerte y el Taj al atardecer desde Mehtab Bagh", tratta: "Delhi (Hazrat Nizamuddin) → Agra, Gatimaan Express o Vande Bharat, unas 1 h 40-2 h", pernottamento: "Agra, zona Taj Ganj", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Tren 800-1.600 rupias según la clase; Fuerte de Agra unas 650 rupias", destinazioneSlug: 'agra', immagine: '/images/india/agra-chhatri-tramonto-riccardo.jpg', imageAlt: "Un chhatri en silueta contra el cielo naranja del atardecer en Agra, entre las copas oscuras de los árboles" },
    { titoloGiorno: "Día 4 — El Taj Mahal al amanecer, Fatehpur Sikri y la carretera a Jaipur", tratta: "Agra → Fatehpur Sikri → Abhaneri (opcional) → Jaipur, coche con conductor, 5-6 h con las paradas", pernottamento: "Jaipur, haveli en la ciudad vieja o Bani Park", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Taj Mahal unas 1.100 rupias + 200 por el mausoleo; Fatehpur Sikri unas 600 rupias", destinazioneSlug: 'agra', immagine: '/images/india/agra-taj-mahal-portale-riccardo.jpg', imageAlt: "El Taj Mahal enmarcado por el arco oscuro del portal de entrada, siluetas de visitantes a contraluz" },
    { titoloGiorno: "Día 5 — Jaipur: el Fuerte de Amber y Nahargarh al atardecer", pernottamento: "Jaipur, haveli en la ciudad vieja o Bani Park", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Fuerte de Amber 1.000 rupias, Nahargarh 600 (tarifas para extranjeros 2026); el billete combinado es ahora un pase estatal de 10 días por 5.500 rupias", destinazioneSlug: 'jaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-05-jaipur.jpg', imageAlt: "El Fuerte de Amber en la colina sobre el lago Maota, con las murallas color miel y una bandada de pájaros en vuelo" },
    { titoloGiorno: "Día 6 — Jaipur: City Palace, Jantar Mantar, Hawa Mahal y los bazares", pernottamento: "Jaipur, haveli en la ciudad vieja o Bani Park", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "City Palace unas 700 rupias (privado, fuera del billete combinado); Hawa Mahal y Jantar Mantar 600 rupias cada uno", destinazioneSlug: 'jaipur', immagine: '/images/india/jaipur-hawa-mahal-cupole-riccardo.jpg', imageAlt: "Las cúpulas y los pináculos rosas del Hawa Mahal sobre los tejados de Jaipur" },
    { titoloGiorno: "Día 7 — En tren a Jodhpur, la ciudad azul", tratta: "Jaipur → Jodhpur, tren diurno de unas 5 h", pernottamento: "Jodhpur, haveli bajo el fuerte (Ghanta Ghar, Navchokiya)", statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "Tren 500-1.200 rupias según la clase", destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-07-jodhpur.jpg', imageAlt: "Las casas azules de la ciudad vieja de Jodhpur vistas desde arriba, una extensión de tejados y fachadas color añil" },
    { titoloGiorno: "Día 8 — Jodhpur: el fuerte de Mehrangarh y los callejones azules", pernottamento: "Jodhpur, haveli bajo el fuerte (Ghanta Ghar, Navchokiya)", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Mehrangarh unas 600 rupias con audioguía para los extranjeros", destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-08-jodhpur.jpg', imageAlt: "El Fuerte de Mehrangarh sobre su peña por encima de Jodhpur, iluminado por la luz cálida del final de la tarde" },
    { titoloGiorno: "Día 9 — De Jodhpur a Udaipur pasando por el templo de Ranakpur", tratta: "Jodhpur → Ranakpur (unas 3 h) → Udaipur (unas 2 h), coche con conductor", pernottamento: "Udaipur, Lal Ghat, Gangaur Ghat o Ambrai", statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Ranakpur abierto a los no jainistas aproximadamente de 12 a 17 h", destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-09-udaipur.jpg', imageAlt: "El templo jainista de Ranakpur en mármol claro, con las agujas esculpidas y las colinas de los Aravalli al fondo" },
    { titoloGiorno: "Día 10 — Udaipur: City Palace, lago Pichola y regreso", tratta: "Udaipur → Delhi, vuelo interno de alrededor de 1 h 30, conexión internacional", pernottamento: "Vuelo de regreso, o una noche más en Udaipur", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "City Palace 400-700 rupias para los extranjeros; vuelo Udaipur-Delhi 4.000-8.000 rupias si se reserva con tiempo", destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-10-udaipur.jpg', imageAlt: "El City Palace de Udaipur a orillas del lago Pichola, con sus torres blancas sobre el agua" },
  ],
  budget: [
    { etichetta: 'Vuelos intercontinentales', valore: "Italia-Delhi, orientativamente 450-900 € ida y vuelta según la temporada" },
    { etichetta: 'Visado y documentos', valore: "e-Tourist Visa 25 $ (30 días) o 40 $ (un año), más el 2,5-3 % de comisión, que hay que pedir al menos 4 días antes; e-Arrival Card gratuita en las 72 horas previas" },
    { etichetta: 'Trenes', valore: "Delhi-Agra 800-1.600 rupias, Jaipur-Jodhpur 500-1.200 rupias según la clase" },
    { etichetta: 'Coche con conductor', valore: "unas 3.000-4.500 rupias por tramo (Agra-Jaipur, Jodhpur-Udaipur), o 2.800-4.000 rupias al día para todo el viaje" },
    { etichetta: 'Vuelo interno', valore: "Udaipur-Delhi 4.000-8.000 rupias" },
    { etichetta: 'Entradas a los monumentos', valore: "9.000-11.000 rupias por persona en total, unos 90-110 € (tarifas para extranjeros 2026, orientativas)" },
    { etichetta: 'Alojamiento', valore: "guesthouse 1.500-3.000 rupias, hotel heritage 4.000-9.000 rupias, palacios-hotel por encima de 25.000 rupias por noche" },
    { etichetta: 'Comidas', valore: "200-500 rupias en un restaurante local, 800-2.000 en un restaurante para turistas" },
  ],
}
