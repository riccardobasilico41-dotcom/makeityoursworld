import type { TripMeta } from '@/lib/types'

export const turchiaItinerarioMeta: TripMeta = {
  tripSlug: 'turchia-itinerario',
  paeseSlug: 'turchia',
  ritmo:
    'Medio-intenso: cuatro días completos a pie en Estambul, despertadores a las 4 en Capadocia, un autobús nocturno y tres días de sitios arqueológicos; se relaja en la costa licia, con tramos cortos en coche y jornadas en barco.',
  trasporti:
    'Por libre: tranvía, metro y ferris con la Istanbulkart, vuelo interno Estambul-Kayseri o Nevşehir, autobús nocturno Capadocia-Pamukkale, coche de alquiler con solo ida de Denizli a Antalya, barcos desde los puertos de la costa.',
  stile: ['città', 'archeologia', 'mongolfiera', 'road trip', 'mare'],
  adattoA: [
    'quien va a Turquía por primera vez y tiene dos semanas largas',
    'quien quiere ciudad, paisaje, arqueología y mar en el mismo viaje',
    'quien conduce a gusto por carreteras de costa',
    'parejas y grupos de amigos; familias con adolescentes que aguanten el autobús nocturno',
  ],
  puntiForti: [
    'Santa Sofía, Topkapı y el Bósforo en ferri',
    'Los globos al amanecer sobre los valles de Capadocia',
    'Afrodisias y Éfeso con las casas en terraza, a la apertura',
    'La laguna de Ölüdeniz, el cañón de Saklıkent y la playa de Patara',
    'Kekova en barco sobre la ciudad sumergida',
  ],
  criticita: [
    'Museos estatales caros y cotizados en euros, con subidas cada año; lira turca con inflación muy alta',
    'Globo caro (150-350 €) y sujeto a cancelaciones por viento: hace falta un día de reserva',
    'Estafas recurrentes en Estambul: el bar con cuenta inflada, el limpiabotas, los taxis sin taxímetro',
    'Coche de alquiler con suplemento de solo ida entre Denizli y Antalya',
    'Julio y agosto muy calurosos en el interior y con mucha gente en la costa',
  ],
  budgetTotale: 'de forma indicativa 2.000-3.000 € por persona entre dos, sin vuelos internacionales',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      'Los globos sobre Göreme al amanecer, la biblioteca de Celso en Éfeso antes de los cruceros, el mar de Kekova y Kaleköy',
  },
  tappeMappa: [
    { nome: 'Estambul', destinazioneSlug: 'istanbul' },
    { nome: 'Capadocia (Göreme)', destinazioneSlug: 'cappadocia' },
    { nome: 'Pamukkale y Hierápolis', destinazioneSlug: 'pamukkale' },
    { nome: 'Afrodisias' },
    { nome: 'Éfeso y Selçuk', destinazioneSlug: 'efeso' },
    { nome: 'Fethiye y Ölüdeniz', destinazioneSlug: 'costa-licia' },
    { nome: 'Kaş y Kekova', destinazioneSlug: 'costa-licia' },
    { nome: 'Antalya', destinazioneSlug: 'antalya' },
  ],
  giorni: [
    { titoloGiorno: 'Día 1 — Llegada a Estambul', tratta: 'Aeropuerto de Estambul → Sultanahmet, Havaist o metro', pernottamento: 'Estambul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-01-istanbul.jpg', imageAlt: 'Atardecer sobre Sultanahmet en Estambul, con las cúpulas y los minaretes contra el cielo' },
    { titoloGiorno: 'Día 2 — Sultanahmet: Santa Sofía, la Mezquita Azul y la Cisterna', pernottamento: 'Estambul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Santa Sofía 25 €, Cisterna unas 1.950-2.250 liras de día (35-40 €), 3.000 liras por la noche', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-02-istanbul.jpg', imageAlt: 'Santa Sofía vista desde el noroeste, con la gran cúpula y los cuatro minaretes' },
    { titoloGiorno: 'Día 3 — Topkapı, el Gran Bazar y la Süleymaniye', pernottamento: 'Estambul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Topkapı con harén 2.750 liras (unos 50 €), cerrado los martes', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-03-istanbul.jpg', imageAlt: 'El salón imperial del harén del palacio de Topkapı, con los azulejos y el trono del sultán' },
    { titoloGiorno: 'Día 4 — El Bósforo, Beyoğlu y Kadıköy', pernottamento: 'Estambul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'ferri largo del Bósforo unas 320 liras I/V (10.35 desde Eminönü), ferris cortos con la Istanbulkart, torre de Gálata 30 €', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-04-istanbul.jpg', imageAlt: 'La torre de Gálata sobresaliendo por encima de los tejados de Beyoğlu en Estambul' },
    { titoloGiorno: 'Día 5 — Vuelo a Capadocia', tratta: 'Estambul → Kayseri o Nevşehir, vuelo de una hora → Göreme', pernottamento: 'Göreme, cave hotel', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'vuelo 40-90 €, traslado 10-15 €', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-05-cappadocia.jpg', imageAlt: 'Las chimeneas de hadas y las rocas de toba del parque nacional de Göreme, en Capadocia' },
    { titoloGiorno: 'Día 6 — Globo al amanecer y el museo al aire libre de Göreme', pernottamento: 'Göreme, cave hotel', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'globo 150-350 €, museo al aire libre 20 €', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-06-cappadocia.jpg', imageAlt: 'Globos sobre los valles de toba del parque nacional de Göreme, en Capadocia' },
    { titoloGiorno: 'Día 7 — Valle Rojo, Uçhisar y la ciudad subterránea', tratta: 'Göreme → Derinkuyu → Uçhisar; por la noche autobús nocturno a Pamukkale', pernottamento: 'Autobús nocturno Göreme-Pamukkale', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Derinkuyu 13 €, autobús nocturno 20-35 €', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-07-cappadocia.jpg', imageAlt: 'Los estratos rosas y blancos de los valles de Capadocia' },
    { titoloGiorno: 'Día 8 — Pamukkale y Hierápolis', pernottamento: 'Pamukkale, pensión en el pueblo', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Pamukkale-Hierápolis 30 €, piscina antigua de forma indicativa 6-13 €', destinazioneSlug: 'pamukkale', immagine: '/images/viaggi/turchia-itinerario/giorno-08-pamukkale.jpg', imageAlt: 'Las pozas de travertino blanco de Pamukkale llenas de agua azulada' },
    { titoloGiorno: 'Día 9 — Afrodisias y la llegada a Selçuk', tratta: 'Pamukkale → Afrodisias → Selçuk, unas 3,5 horas en coche', pernottamento: 'Selçuk', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Afrodisias 12 €, basílica de San Juan 6 €', destinazioneSlug: 'efeso', immagine: '/images/viaggi/turchia-itinerario/giorno-09-efeso.jpg', imageAlt: 'El tetrápilo, la puerta monumental de la antigua Afrodisias' },
    { titoloGiorno: 'Día 10 — Éfeso y Şirince', pernottamento: 'Selçuk o Şirince', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Éfeso 40 €, casas en terraza 15 € aparte', destinazioneSlug: 'efeso', immagine: '/images/viaggi/turchia-itinerario/giorno-10-efeso.jpg', imageAlt: 'Las gradas de piedra del antiguo estadio de Éfeso' },
    { titoloGiorno: 'Día 11 — Hacia la costa licia: Fethiye', tratta: 'Selçuk → Fethiye, unas 3,5-4 horas en coche', pernottamento: 'Fethiye u Ölüdeniz', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-11-costa-licia.jpg', imageAlt: 'El puerto de Fethiye con los barcos y las montañas de la costa licia' },
    { titoloGiorno: 'Día 12 — Ölüdeniz, Kayaköy y la Vía Licia', pernottamento: 'Fethiye u Ölüdeniz', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'parapente en torno a 100-150 €', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-12-costa-licia.jpg', imageAlt: 'Las casas de piedra abandonadas en la ladera de la colina de Kayaköy' },
    { titoloGiorno: 'Día 13 — De Fethiye a Kaş: Saklıkent y Patara', tratta: 'Fethiye → Saklıkent → Patara → Kaş, unas 3 horas de conducción con paradas', pernottamento: 'Kaş', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Saklıkent en torno a 5-10 €, Patara 15 €', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-13-costa-licia.jpg', imageAlt: 'Panorámica de Kaş con el puerto, las casas blancas y el mar de la costa licia' },
    { titoloGiorno: 'Día 14 — Kekova en barco', pernottamento: 'Kaş', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'barco con comida 25-45 €, kayak 40-60 €', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-14-costa-licia.jpg', imageAlt: 'La bahía de Kaş vista desde lo alto, con las islas en el horizonte hacia Kekova' },
    { titoloGiorno: 'Día 15 — De Kaş a Antalya', tratta: 'Kaş → Myra u Olimpos → Antalya, unas 3,5 horas de conducción', pernottamento: 'Antalya, Kaleiçi', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'antalya', immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg', imageAlt: 'Vista de Kaleiçi, el casco antiguo de Antalya asomado al mar' },
    { titoloGiorno: 'Día 16 — Antalya y regreso', tratta: 'Antalya → Italia, vuelo directo en temporada o vía Estambul', intensita: 'leggero', costiNoti: 'museo arqueológico cerrado por reconstrucción desde 2025 (reapertura anunciada para finales de 2026)', destinazioneSlug: 'antalya', immagine: '/images/viaggi/turchia-itinerario/giorno-16-antalya.jpg', imageAlt: 'Los tejados y las casas del casco antiguo de Kaleiçi, en Antalya' },
  ],
  budget: [
    { etichetta: 'Vuelos intercontinentales', valore: undefined },
    { etichetta: 'Museos y sitios', valore: '280-380 € por persona' },
    { etichetta: 'Globo', valore: '150-350 € por persona' },
    { etichetta: 'Vuelo interno y autobús nocturno', valore: '60-125 €' },
    { etichetta: 'Coche de alquiler, 8 días con solo ida', valore: '200-350 € por cabeza entre dos, carburante y peajes incluidos' },
    { etichetta: 'Alojamientos', valore: '70-150 € por noche y habitación' },
    { etichetta: 'Comidas', valore: '25-45 € al día' },
  ],
}
