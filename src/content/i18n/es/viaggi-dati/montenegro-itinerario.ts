import type { TripMeta } from '@/lib/types'

export const montenegroItinerarioMeta: TripMeta = {
  tripSlug: 'montenegro-itinerario',
  paeseSlug: 'montenegro',
  ritmo:
    'Regular, en coche: tres noches en la bahía, luego una etapa al día por costa, lago y montaña, con desplazamientos de 1-3 horas por carreteras lentas. Dos jornadas más exigentes: el Bobotov Kuk o la carretera panorámica del Durmitor y el rafting en el Tara.',
  trasporti:
    'Coche de alquiler desde Tivat o Podgorica, ferri Kamenari-Lepetane en la bahía, barcas a Nuestra Señora de las Rocas y por el lago Skadar, neumática para el rafting en el Tara. Para salir a Croacia, Bosnia o Albania hacen falta autorización del alquiler y carta verde.',
  stile: ['roadtrip', 'mare', 'montagna', 'trekking', 'monasteri'],
  adattoA: [
    'quien quiere mar y montaña en el mismo viaje, a dos horas de vuelo de Italia',
    'quien ama conducir y acepta carreteras estrechas y curvas',
    'quien quiere combinar Montenegro con Dubrovnik, Mostar o el norte de Albania',
    'quien viaja en junio o septiembre y busca una alternativa más barata que Croacia',
  ],
  puntiForti: [
    'La bahía de Kotor desde la fortaleza de San Juan y la isla de Nuestra Señora de las Rocas en Perast',
    'Las veinticinco curvas del Lovćen y el mausoleo de Njegoš en la cima',
    'El monasterio de Ostrog encajado en la pared de roca',
    'El Lago Negro y la carretera panorámica del Durmitor',
    'El rafting en el cañón del Tara y el puente de Đurđevića Tara',
  ],
  criticita: [
    'Julio y agosto traen mucho calor, tráfico en la costa, colas en las fronteras y cruceros en Kotor',
    'Montenegro no está en la Unión Europea: el roaming europeo no vale y los datos con las SIM italianas cuestan mucho',
    'Las carreteras de montaña son estrechas y sinuosas: los tiempos de conducción son más largos de lo que dicen los kilómetros',
    'La salida del país con el coche de alquiler requiere autorización escrita, carta verde y permiso de circulación original, con un suplemento',
    'El documento de identidad electrónico vale solo para estancias de hasta 30 días; en el verano de 2026 ningún ferri directo desde Italia',
    'Budva y la costa central están construidas y abarrotadas: la parte más bonita del mar está entre la bahía y Petrovac',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'itinerario pensado para viajar por cuenta propia, en pareja, con amigos o en familia, con coche de alquiler',
    treEsperienzePiuBelle:
      'La bahía de Kotor desde las murallas, el monasterio de Ostrog en la roca, el cañón del Tara en neumática',
    aChiLoConsiglio: 'a quien tiene diez días en junio o en septiembre y quiere un roadtrip entre mar y montaña',
  },
  tappeMappa: [
    { nome: 'Kotor y la bahía', destinazioneSlug: 'bocche-di-cattaro' },
    { nome: 'Lovćen y Cetinje', destinazioneSlug: 'lovcen-cetinje' },
    { nome: 'Budva y la riviera', destinazioneSlug: 'budva-riviera' },
    { nome: 'Lago Skadar', destinazioneSlug: 'lago-di-scutari' },
    { nome: 'Monasterio de Ostrog', destinazioneSlug: 'ostrog' },
    { nome: 'Durmitor y cañón del Tara', destinazioneSlug: 'durmitor-tara' },
    { nome: 'Podgorica' },
  ],
  giorni: [
    { titoloGiorno: 'Día 1 — Llegada a Tivat y Kotor al atardecer', tratta: 'Aeropuerto de Tivat → Kotor, aproximadamente 15 minutos (desde Podgorica aproximadamente 1h30)', pernottamento: 'Kotor, Dobrota o Muo', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bocche-di-cattaro', immagine: '/images/viaggi/montenegro-itinerario/giorno-01-bocche-di-cattaro.jpg', imageAlt: 'Estela de estrellas sobre las montañas de la bahía de Kotor, con las luces de Kotor reflejadas en la bahía' },
    { titoloGiorno: 'Día 2 — Kotor: la ciudad vieja y las murallas hasta la fortaleza', pernottamento: 'Kotor, Dobrota o Muo', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Murallas y fortaleza de San Juan unos 15 € en temporada, efectivo', destinazioneSlug: 'bocche-di-cattaro', immagine: '/images/viaggi/montenegro-itinerario/giorno-02-bocche-di-cattaro.jpg', imageAlt: 'Los tejados de tejas rojas de la ciudad vieja de Kotor y las cúpulas de la iglesia de San Nicolás' },
    { titoloGiorno: 'Día 3 — Perast, Nuestra Señora de las Rocas y la vuelta a la bahía', tratta: 'Kotor → Perast → Risan → ferri Kamenari-Lepetane → Tivat → Kotor', pernottamento: 'Kotor, Dobrota o Muo', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Ferri de Kamenari unos 5 € por el coche; barca a la isla pocos euros', destinazioneSlug: 'bocche-di-cattaro', immagine: '/images/viaggi/montenegro-itinerario/giorno-03-bocche-di-cattaro.jpg', imageAlt: 'Perast vista desde la bahía, con el campanario de San Nicolás y las montañas de la bahía de Kotor' },
    { titoloGiorno: 'Día 4 — Las curvas del Lovćen, Njeguši y Cetinje', tratta: 'Kotor → curvas → Njeguši → mausoleo de Njegoš → Cetinje', pernottamento: 'Cetinje', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Parque nacional 3 €, mausoleo de Njegoš unos 8 € aparte', destinazioneSlug: 'lovcen-cetinje', immagine: '/images/viaggi/montenegro-itinerario/giorno-04-lovcen-cetinje.jpg', imageAlt: 'Prados y árboles en la meseta del parque nacional del Lovćen' },
    { titoloGiorno: 'Día 5 — Budva, la costa y Sveti Stefan', tratta: 'Cetinje → Budva, aproximadamente 40 minutos → Sveti Stefan → Petrovac', pernottamento: 'Petrovac o Budva', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Tumbonas y sombrillas 15-30 € al día en temporada alta', destinazioneSlug: 'budva-riviera', immagine: '/images/viaggi/montenegro-itinerario/giorno-05-budva-riviera.jpg', imageAlt: 'La riviera de Budva vista desde lo alto, con la isla de San Nicolás y la ciudad vieja' },
    { titoloGiorno: 'Día 6 — El lago Skadar: Virpazar y Rijeka Crnojevića', tratta: 'Petrovac → Virpazar → Pavlova Strana → Rijeka Crnojevića', pernottamento: 'Lago Skadar (Virpazar) o Podgorica', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Parque nacional unos 5 €; barca 15-30 € por persona', destinazioneSlug: 'lago-di-scutari', immagine: '/images/viaggi/montenegro-itinerario/giorno-06-lago-di-scutari.jpg', imageAlt: 'El viejo puente de piedra de Rijeka Crnojevića sobre el río que baja al lago Skadar' },
    { titoloGiorno: 'Día 7 — El monasterio de Ostrog y la carretera a Žabljak', tratta: 'Lago Skadar → Ostrog → Nikšić → Žabljak, aproximadamente 2h30 desde Ostrog', pernottamento: 'Žabljak', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Monasterio de Ostrog entrada libre', destinazioneSlug: 'ostrog', immagine: '/images/viaggi/montenegro-itinerario/giorno-07-ostrog.jpg', imageAlt: 'El monasterio de Ostrog engastado en la pared de roca' },
    { titoloGiorno: 'Día 8 — Durmitor: el Lago Negro, la carretera panorámica y el Bobotov Kuk', pernottamento: 'Žabljak', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Parque nacional unos 5 €, aparcamiento aparte', destinazioneSlug: 'durmitor-tara', immagine: '/images/viaggi/montenegro-itinerario/giorno-08-durmitor-tara.jpg', imageAlt: 'La meseta de Žabljak vista desde lo alto, con las montañas del Durmitor en el horizonte' },
    { titoloGiorno: 'Día 9 — El puente sobre el Tara, el rafting y el descenso hacia el sur', tratta: 'Žabljak → puente de Đurđevića Tara → rafting Brštanovica-Šćepan Polje → cañón de la Morača → Podgorica', pernottamento: 'Podgorica (o la costa, para los vuelos desde Tivat)', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Rafting 50-80 € con comida; tirolina 20-30 €', destinazioneSlug: 'durmitor-tara', immagine: '/images/viaggi/montenegro-itinerario/giorno-09-durmitor-tara.jpg', imageAlt: 'El río Tara que corre por el fondo de su cañón entre paredes boscosas' },
    { titoloGiorno: 'Día 10 — Podgorica y salida', tratta: 'Podgorica → aeropuerto, aproximadamente 15 minutos', pernottamento: 'Vuelo de regreso', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/montenegro-itinerario/giorno-10-podgorica.jpg', imageAlt: 'Podgorica y las colinas que la rodean vistas desde lo alto' },
  ],
  budget: [
    { etichetta: 'Vuelos', valore: 'Italia-Tivat o Podgorica aproximadamente 80-250 € ida y vuelta' },
    { etichetta: 'Coche de alquiler', valore: '30-60 € al día en verano; suplemento por salir del país 30-60 € por alquiler, hasta 100 € para Albania' },
    { etichetta: 'Entradas', valore: 'murallas de Kotor unos 15 €; parques nacionales 3-5 € cada uno; mausoleo de Njegoš unos 8 €' },
    { etichetta: 'Ferri y barcas', valore: 'Kamenari unos 5 € por el coche; Nuestra Señora de las Rocas pocos euros; lago Skadar 15-30 €' },
    { etichetta: 'Actividades', valore: 'rafting en el Tara 50-80 €; tirolina 20-30 €' },
    { etichetta: 'Alojamientos', valore: '40-70 € la doble en gama económica, 80-150 € en gama media; dobles en julio-agosto en la costa' },
    { etichetta: 'Comidas', valore: '15-30 € en konoba; pescado a menudo al kilo' },
    { etichetta: 'Tasa turística', valore: 'aproximadamente 1 € por persona y noche, según el municipio; gratis para menores de 12 años' },
  ],
}
