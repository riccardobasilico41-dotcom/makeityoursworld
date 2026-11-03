import type { TripMeta } from '@/lib/types'

export const stopoverGolfoMeta: TripMeta = {
  tripSlug: 'stopover-golfo',
  paeseSlug: 'emirati-arabi-uniti',
  ritmo: 'Modular: siete días si se hacen seguidos, pero cada bloque de 24-48 horas funciona como escala independiente',
  trasporti: 'Vuelos regulares con los hubs del Golfo, metro desde los aeropuertos, 4x4 con conductor para el desierto',
  stile: ['stopover', 'architettura', 'deserto'],
  adattoA: [
    'quien vuela a Asia, Oceanía o África oriental y tiene escalas largas que llenar',
    'quien quiere ver algo sin alargar el viaje ni gastar mucho',
    'quien acepta planificar el programa de escala al reservar el billete, no después',
  ],
  puntiForti: [
    "El creek de Dubái en abra por un dírham, a veinte minutos en metro del aeropuerto",
    'La Gran Mezquita Sheikh Zayed y el Louvre, ambos dentro de la escala gratuita de Etihad',
    'La escala de Qatar Airways por unos 14 dólares la noche, que es la mejor relación coste-rendimiento del Golfo',
  ],
  criticita: [
    'Los programas no son equivalentes: Dubai Connect es una compensación por una escala larga inevitable, todos los demás son elecciones que hay que hacer al reservar',
    'La escala de Qatar Airways se reserva en un portal aparte con el código del vuelo: es el paso que casi nadie conoce',
    'De mayo a septiembre se superan los 45 grados en todo el Golfo y la escala se reduce a museos y centros comerciales',
    'Una escala de doce horas no son doce horas de ciudad: entre controles, traslados y regreso anticipado quedan cinco o seis',
    'Las condiciones, los umbrales y los precios de los programas cambian a menudo y sin previo aviso',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'por cuenta propia, usando los programas de escala de las aerolíneas del Golfo',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'El creek de Dubái en abra, la luz bajo la cúpula del Louvre Abu Dabi, las dunas que entran en el agua en Khor Al Adaid',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Dubái', destinazioneSlug: 'dubai' },
    { nome: 'Abu Dabi', destinazioneSlug: 'abu-dhabi' },
    { nome: 'Doha', destinazioneSlug: 'doha' },
    { nome: 'Khor Al Adaid', destinazioneSlug: 'qatar-deserto-nord' },
    { nome: 'Yeda', destinazioneSlug: 'jeddah' },
  ],
  giorni: [
    { titoloGiorno: 'Día 1 — Dubái, las primeras 24 horas', tratta: 'Aeropuerto DXB → centro en metro (20 min)', pernottamento: 'Dubái, asignado por Dubai Connect o Deira/Bur Dubai', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'abra 1 dírham; Burj Khalifa desde unos 170 dírhams', destinazioneSlug: 'dubai', immagine: '/images/viaggi/stopover-golfo/giorno-1-dubai-creek.jpg', imageAlt: 'Un abra de madera cargado de pasajeros cruza el Dubai Creek, con el skyline de la ciudad al fondo' },
    { titoloGiorno: 'Día 2 — Dubái, el segundo día', pernottamento: 'Dubái', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'safari nocturno por el desierto 200-400 dírhams', destinazioneSlug: 'dubai', immagine: '/images/viaggi/stopover-golfo/giorno-2-dubai-deserto.jpg', imageAlt: 'Un todoterreno sobre las dunas del desierto cerca de Dubái durante el safari nocturno' },
    { titoloGiorno: 'Día 3 — Abu Dabi, la escala Etihad', tratta: 'Dubái → Abu Dabi (unas 2 h en autobús)', pernottamento: 'Abu Dabi, hotel incluido en la escala Etihad', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Gran Mezquita gratuita, con reserva por franja horaria', destinazioneSlug: 'abu-dhabi', immagine: '/images/viaggi/stopover-golfo/giorno-3-grande-moschea.jpg', imageAlt: 'Los minaretes y las cúpulas blancas de la Gran Mezquita Sheikh Zayed vistos desde la avenida de palmeras' },
    { titoloGiorno: 'Día 4 — Abu Dabi, el Louvre y el desierto', pernottamento: 'Abu Dabi', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Louvre Abu Dabi unos 65 dírhams', destinazioneSlug: 'abu-dhabi', immagine: '/images/viaggi/stopover-golfo/giorno-4-louvre-abu-dhabi.jpg', imageAlt: 'La cúpula calada del Louvre Abu Dabi, con la luz que se filtra dibujando la «lluvia de luz» sobre la plaza' },
    { titoloGiorno: 'Día 5 — Doha, la escala de catorce dólares', tratta: 'Vuelo a Doha; aeropuerto → centro en metro (20 min)', pernottamento: 'Doha, hotel del programa Qatar Airways', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'hotel de 4 estrellas desde unos 14 $ por persona y noche; zoco y hospital de halcones gratuitos', destinazioneSlug: 'doha', immagine: '/images/viaggi/stopover-golfo/giorno-5-museo-arte-islamica-doha.jpg', imageAlt: 'El Museo de Arte Islámico de Doha al anochecer, con el skyline de West Bay al otro lado de la bahía' },
    { titoloGiorno: 'Día 6 — Doha, el mar interior', tratta: 'Doha → Khor Al Adaid en 4x4 (1 h 30, último tramo sobre arena)', pernottamento: 'Doha o campamento de tiendas en el desierto', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'excursión 250-500 riyales según la fórmula', destinazioneSlug: 'qatar-deserto-nord', immagine: '/images/viaggi/stopover-golfo/giorno-6-khor-al-adaid.jpg', imageAlt: 'Las dunas de Khor Al Adaid que bajan hacia el mar interior en el desierto de Catar' },
    { titoloGiorno: 'Día 7 — Yeda, la escala saudí', tratta: 'Vuelo a Yeda con Saudia o flynas, visado de escala gratuito', pernottamento: 'Yeda, cerca de Al-Balad o en la Corniche', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'visado de escala gratuito, salvo gastos administrativos y seguro', destinazioneSlug: 'jeddah', immagine: '/images/viaggi/stopover-golfo/giorno-7-al-balad-jeddah.jpg', imageAlt: 'Una casa-torre de Al-Balad en Yeda, con los rawashin de madera verde tallada en los pisos altos' },
  ],
  budget: [
    { etichetta: 'Hotel con Emirates Dubai Connect', valore: 'gratuito, pero asignado: habitación, comidas, traslado y visado de tránsito incluidos' },
    { etichetta: 'Hotel con Etihad Abu Dhabi Stopover', valore: 'gratuito por 1 o 2 noches, con reserva de ida y vuelta con parada declarada' },
    { etichetta: 'Hotel con Qatar Airways Stopover', valore: '4 estrellas desde unos 14 $ por persona y noche, 5 estrellas desde 20-30 $' },
    { etichetta: 'Visado de escala Arabia Saudí', valore: 'gratuito con Saudia o flynas, salvo gastos administrativos y seguro' },
    { etichetta: 'Visados Emiratos y Catar', valore: 'gratuitos a la llegada para los ciudadanos italianos' },
    { etichetta: 'Excursiones por el desierto', valore: 'safari nocturno 200-400 dírhams; Khor Al Adaid 250-500 riyales' },
  ],
}
