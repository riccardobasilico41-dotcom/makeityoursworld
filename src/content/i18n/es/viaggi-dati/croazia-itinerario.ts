import type { TripMeta } from '@/lib/types'

export const croaziaItinerarioMeta: TripMeta = {
  tripSlug: 'croazia-itinerario',
  paeseSlug: 'croazia',
  ritmo:
    'Regular: una parada nueva cada uno o dos días, con trayectos cortos en coche hasta Split y en catamarán entre las islas; las primeras horas de la mañana se reservan para Plitvice, Krka y las murallas de Dubrovnik para evitar la multitud.',
  trasporti:
    'Coche de alquiler de Zagreb a Split (Plitvice, Zadar, Krka, Šibenik, Trogir) con devolución en Split; catamaranes Split-Hvar-Korčula-Dubrovnik; autobús y taxi en Dubrovnik; excursión en coche o autobús a Ston.',
  stile: ['mare', 'isole', 'natura', 'città storiche', 'europa'],
  adattoA: [
    'quien sale de Italia y quiere un viaje cercano, con euro y carné de identidad',
    'quien quiere combinar lagos y cascadas del interior, ciudades romanas y venecianas e islas',
    'quien puede viajar entre finales de mayo y junio o en septiembre, evitando el pico de julio-agosto',
    'quien prefiere dejar el coche en tierra firme y moverse en catamarán entre las islas',
  ],
  puntiForti: [
    'Plitvice a la apertura, antes de que se llenen las pasarelas',
    'El palacio de Diocleciano en Split, una ciudad dentro de una residencia imperial romana',
    'Las islas Pakleni desde Hvar y la ciudad vieja de Korčula',
    'Las murallas de Dubrovnik al atardecer y las ostras de Ston',
  ],
  criticita: [
    'En julio-agosto Plitvice, Hvar y Dubrovnik están abarrotados y caros',
    'Multas por bañador, alcohol en la calle y comportamientos molestos en los cascos antiguos: 150 € en Split, hasta 700 € en Hvar',
    'Suplemento por devolver el coche en otro lugar al dejarlo en Split',
    'Tasa turística y aparcamientos a menudo excluidos de los precios online',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: 'por libre, coche hasta Split y catamaranes entre las islas',
    treEsperienzePiuBelle:
      'Las pasarelas de Plitvice al amanecer, el atardecer en el Órgano del mar de Zadar, las murallas de Dubrovnik a última hora de la tarde',
  },
  tappeMappa: [
    { nome: 'Zagreb', destinazioneSlug: 'zagabria' },
    { nome: 'Lagos de Plitvice', destinazioneSlug: 'plitvice' },
    { nome: 'Zadar, Krka y Šibenik', destinazioneSlug: 'zara-krka-sebenico' },
    { nome: 'Split y Trogir', destinazioneSlug: 'spalato' },
    { nome: 'Hvar', destinazioneSlug: 'hvar' },
    { nome: 'Korčula', destinazioneSlug: 'curzola' },
    { nome: 'Dubrovnik y Ston', destinazioneSlug: 'dubrovnik' },
  ],
  giorni: [
    { titoloGiorno: 'Día 1 — Llegada a Zagreb', tratta: 'Vuelo a Zagreb o coche desde Trieste (unas 2 horas y media)', pernottamento: 'Zagreb, Ciudad Baja', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'zagabria', immagine: '/images/viaggi/croazia-itinerario/giorno-01-zagabria.jpg', imageAlt: 'El tejado de tejas de colores de la iglesia de San Marcos en la Ciudad Alta de Zagreb' },
    { titoloGiorno: 'Día 2 — Hacia Plitvice: los lagos inferiores', tratta: 'Zagreb → Plitvice, unas 2 horas en coche', pernottamento: 'Cerca de las entradas de Plitvice', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'entrada 40 € en junio-septiembre (25 € por la tarde), 23 € en abril, mayo y octubre; online con franja horaria', destinazioneSlug: 'plitvice', immagine: '/images/viaggi/croazia-itinerario/giorno-02-plitvice.jpg', imageAlt: 'La Veliki slap, la cascada más alta de los lagos de Plitvice' },
    { titoloGiorno: 'Día 3 — Plitvice a la apertura y carretera a Zadar', tratta: 'Plitvice → Zadar, unas 2 horas en coche', pernottamento: 'Zadar, casco antiguo', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'plitvice', immagine: '/images/viaggi/croazia-itinerario/giorno-03-plitvice.jpg', imageAlt: 'Una pasarela de madera junto a una cascada y al agua turquesa de los lagos de Plitvice' },
    { titoloGiorno: 'Día 4 — Zadar: el Órgano del mar y el Saludo al Sol', pernottamento: 'Zadar, casco antiguo', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'zara-krka-sebenico', immagine: '/images/viaggi/croazia-itinerario/giorno-04-zara-krka-sebenico.jpg', imageAlt: 'La punta de la península de Zadar desde arriba, con el paseo marítimo del Órgano del mar y el Saludo al Sol' },
    { titoloGiorno: 'Día 5 — Las cascadas del Krka y Šibenik', tratta: 'Zadar → Skradin (Krka) → Šibenik, unas 1 hora más el barco en el parque', pernottamento: 'Šibenik', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Krka 40 € en junio-septiembre (30 € después de las 15), 20 € en abril, mayo y octubre; baño prohibido', destinazioneSlug: 'zara-krka-sebenico', immagine: '/images/viaggi/croazia-itinerario/giorno-05-zara-krka-sebenico.jpg', imageAlt: 'El Skradinski buk, la cascada escalonada del Parque Nacional del Krka' },
    { titoloGiorno: 'Día 6 — Trogir y llegada a Split', tratta: 'Šibenik → Trogir → Split, unas 1 hora y media; devolución del coche en Split', pernottamento: 'Split, casco antiguo', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'spalato', immagine: '/images/viaggi/croazia-itinerario/giorno-06-spalato.jpg', imageAlt: 'El paseo marítimo de Trogir con el centro medieval, las palmeras y los barcos amarrados' },
    { titoloGiorno: 'Día 7 — Split: el palacio de Diocleciano y el Marjan', pernottamento: 'Split, casco antiguo', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'subterráneos del palacio 10-15 €', destinazioneSlug: 'spalato', immagine: '/images/viaggi/croazia-itinerario/giorno-07-spalato.jpg', imageAlt: 'Las columnas y los arcos del Peristilo del palacio de Diocleciano en Split, bajo el campanario' },
    { titoloGiorno: 'Día 8 — En catamarán a Hvar', tratta: 'Split → Hvar, catamarán (unas 1 hora)', pernottamento: 'Hvar ciudad o Stari Grad', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'catamarán 15-25 € en verano', destinazioneSlug: 'hvar', immagine: '/images/viaggi/croazia-itinerario/giorno-08-hvar.jpg', imageAlt: 'La bahía de Hvar y las islas Pakleni vistas desde la fortaleza española' },
    { titoloGiorno: 'Día 9 — Hvar: las islas Pakleni', tratta: 'Hvar → islas Pakleni, taxi-boat', pernottamento: 'Hvar ciudad o Stari Grad', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'taxi-boat 10-15 € ida y vuelta', destinazioneSlug: 'hvar', immagine: '/images/viaggi/croazia-itinerario/giorno-09-hvar.jpg', imageAlt: 'Las islas Pakleni frente al puerto de Hvar, vistas entre los pinos' },
    { titoloGiorno: 'Día 10 — Korčula, la ciudad de Marco Polo', tratta: 'Hvar → Korčula, catamarán (unas 1 hora y media)', pernottamento: 'Korčula, ciudad vieja o Lumbarda', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'catamarán 20-30 €', destinazioneSlug: 'curzola', immagine: '/images/viaggi/croazia-itinerario/giorno-10-curzola.jpg', imageAlt: 'La ciudad vieja de Korčula en su península fortificada' },
    { titoloGiorno: 'Día 11 — De Korčula a Dubrovnik y las murallas', tratta: 'Korčula → Dubrovnik (puerto de Gruž), catamarán (unas 2 horas)', pernottamento: 'Dubrovnik, ciudad vieja o Lapad', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'catamarán 25-35 €; murallas unos 40 € con Lovrijenac', destinazioneSlug: 'dubrovnik', immagine: '/images/viaggi/croazia-itinerario/giorno-11-dubrovnik.jpg', imageAlt: 'Las murallas y el puerto viejo de Dubrovnik sobre el mar' },
    { titoloGiorno: 'Día 12 — Dubrovnik: Stradun, Lokrum y el teleférico', pernottamento: 'Dubrovnik, ciudad vieja o Lapad', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Lokrum con barco 25-30 €', destinazioneSlug: 'dubrovnik', immagine: '/images/viaggi/croazia-itinerario/giorno-12-dubrovnik.jpg', imageAlt: 'El Stradun visto desde lo alto de las murallas de Dubrovnik' },
    { titoloGiorno: 'Día 13 — Ston y la península de Pelješac', tratta: 'Dubrovnik → Ston, unas 1 hora', pernottamento: 'Dubrovnik, ciudad vieja o Lapad', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'dubrovnik', immagine: '/images/viaggi/croazia-itinerario/giorno-13-dubrovnik.jpg', imageAlt: 'Las murallas de Ston tras los árboles en flor' },
    { titoloGiorno: 'Día 14 — Regreso desde Dubrovnik', tratta: 'Dubrovnik → aeropuerto de Čilipi (unos 20 km)', intensita: 'leggero', destinazioneSlug: 'dubrovnik', immagine: '/images/viaggi/croazia-itinerario/giorno-14-dubrovnik.jpg', imageAlt: 'Las murallas occidentales de Dubrovnik y las calas bajo la fortaleza de Lovrijenac' },
  ],
  budget: [
    { etichetta: 'Presupuesto diario económico', valore: '70-100 € por persona' },
    { etichetta: 'Presupuesto diario medio', valore: '130-200 € por persona' },
    { etichetta: 'Presupuesto diario alto', valore: 'más de 300 € por persona' },
    { etichetta: 'Parques nacionales', valore: 'Plitvice y Krka 40 € cada uno de junio a septiembre (23 € y 20 € en primavera y octubre)' },
    { etichetta: 'Dubrovnik', valore: 'murallas unos 40 €; Lokrum con barco 25-30 €' },
    { etichetta: 'Catamaranes', valore: 'Split-Hvar 10-25 €, Hvar-Korčula 20-30 €, Korčula-Dubrovnik 25-35 €' },
    { etichetta: 'Coche y peajes', valore: 'alquiler 40-90 € al día en verano más suplemento por devolución en otro lugar; Zagreb-Split 25-30 €' },
    { etichetta: 'Tasa turística', valore: 'hasta 2,65 € por persona y noche en temporada alta (Dubrovnik), 1,86 € en Zagreb' },
  ],
}
