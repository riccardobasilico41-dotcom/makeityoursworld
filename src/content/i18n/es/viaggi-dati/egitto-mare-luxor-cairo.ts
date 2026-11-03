import type { TripMeta } from '@/lib/types'

export const egittoMareLuxorCairoMeta: TripMeta = {
  tripSlug: 'egitto-mare-luxor-cairo',
  paeseSlug: 'egitto',
  ritmo:
    "Intenso los seis primeros días, con madrugones al amanecer en El Cairo y en Luxor para evitar el calor y los grupos; luego cuatro días de mar a ritmo libre antes del vuelo directo de regreso.",
  trasporti:
    "Por libre: Uber y conductor privado en El Cairo, vuelo interno El Cairo-Luxor, coche con conductor para la orilla oeste y para el traslado Luxor-Marsa Alam (o Hurghada), excursiones en barco desde el resort, vuelo de regreso desde el mar Rojo.",
  stile: ['archeologia', 'mare', 'snorkeling', 'prima volta in egitto'],
  adattoA: [
    "quien va a Egipto por primera vez y tiene 10-12 días",
    "quien quiere pirámides, templos y mar en el mismo viaje sin crucero",
    "parejas y familias con chicos que aguantan los madrugones",
    "quien prefiere cerrar el viaje con la parte relajante",
  ],
  puntiForti: [
    "Guiza, Saqqara y Dahshur en día y medio, para entender toda la evolución de la pirámide",
    "El Grand Egyptian Museum con el ajuar completo de Tutankamón",
    "La orilla oeste de Luxor al amanecer y el vuelo en globo",
    "El arrecife desde la orilla en Marsa Alam, con tortugas en Abu Dabbab y delfines en Dolphin House",
    "Regreso con vuelo directo desde el mar, sin volver a El Cairo",
  ],
  criticita: [
    "Precios de las entradas subidos varias veces desde 2024: entre GEM, Guiza y Luxor se llega a 120-160 € por persona solo en entradas, solo con tarjeta",
    "Fuerte insistencia comercial en Guiza y Luxor: camellos, falsos guías, tiendas de papiros y perfumes",
    "De mayo a septiembre Luxor supera los 40 °C: se visita solo al amanecer",
    "De diciembre a marzo el mar Rojo está a unos 22 °C y ventoso, con salidas en barco a veces canceladas",
    "Sharm el-Sheikh no está conectada con Luxor por tierra en tiempos razonables: hace falta un vuelo más",
  ],
  budgetTotale: 'aproximadamente 1.100-1.700 € por persona en dos, vuelos internacionales aparte',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      "Las pirámides de Guiza a la apertura, el Valle de los Reyes al amanecer, el arrecife de Abu Dabbab desde la orilla",
  },
  tappeMappa: [
    { nome: 'El Cairo', destinazioneSlug: 'cairo' },
    { nome: 'Guiza, Saqqara y Dahshur', destinazioneSlug: 'piramidi' },
    { nome: 'Luxor', destinazioneSlug: 'luxor' },
    { nome: 'Edfu' },
    { nome: 'Marsa Alam', destinazioneSlug: 'mar-rosso' },
  ],
  giorni: [
    { titoloGiorno: 'Día 1 — Llegada a El Cairo', tratta: 'Aeropuerto de El Cairo → Guiza, Uber o traslado', pernottamento: 'Guiza, cerca de las pirámides', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'visado a la llegada 30 $', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-01-cairo.jpg', imageAlt: 'Las tres pirámides de Guiza vistas desde arriba, con el desierto y las primeras casas de El Cairo al fondo' },
    { titoloGiorno: 'Día 2 — Las pirámides de Guiza y el Grand Egyptian Museum', pernottamento: 'Guiza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Guiza 700 EGP, interior de Keops unos 1.500 EGP, GEM 1.830 EGP (unos 35 $)', destinazioneSlug: 'piramidi', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg', imageAlt: 'Las pirámides de Guiza recortándose sobre el desierto en un día despejado' },
    { titoloGiorno: 'Día 3 — Saqqara, Dahshur y la noche en el Khan el-Khalili', tratta: 'Guiza → Saqqara → Dahshur → Cairo islámico, coche con conductor', pernottamento: 'Guiza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'conductor 30-50 $, Saqqara 600 EGP, Dahshur 200 EGP', destinazioneSlug: 'piramidi', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-03-piramidi.jpg', imageAlt: 'La pirámide escalonada de Djoser en Saqqara con el recinto funerario de piedra en primer plano' },
    { titoloGiorno: 'Día 4 — El Cairo islámico y copto, vuelo a Luxor', tratta: 'El Cairo → Luxor, vuelo de una hora', pernottamento: 'Luxor, orilla este', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Ciudadela 550 EGP, vuelo 60-120 €, templo de Luxor 500 EGP', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg', imageAlt: "La mezquita-madrasa del sultán Hassan y la mezquita de al-Rifa'i con sus minaretes, en el Cairo islámico" },
    { titoloGiorno: 'Día 5 — Luxor, orilla oeste: Valle de los Reyes y templo de Hatshepsut', pernottamento: 'Luxor, orilla este', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Valle de los Reyes 750 EGP, Tutankamón unos 700, Hatshepsut 440, Medinet Habu 220; conductor 25-40 $', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-05-luxor.jpg', imageAlt: 'El templo funerario de Hatshepsut en Deir el-Bahari, con las terrazas al pie de la pared rocosa' },
    { titoloGiorno: 'Día 6 — Globo al amanecer, Karnak y el templo de Luxor', pernottamento: 'Luxor, orilla este', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'globo 50-100 $, Karnak 600 EGP', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-06-luxor.jpg', imageAlt: 'Globos que se elevan al amanecer sobre la orilla oeste de Luxor' },
    { titoloGiorno: 'Día 7 — De Luxor al mar Rojo', tratta: 'Luxor → Edfu → Marsa Alam, 4-4,5 horas con conductor (Hurghada: 4 horas)', pernottamento: 'Marsa Alam, resort con arrecife', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'coche privado 100-150 $, templo de Edfu 550 EGP', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-07-mar-rosso.jpg', imageAlt: 'La costa egipcia del mar Rojo vista desde la Estación Espacial Internacional, con el desierto oriental' },
    { titoloGiorno: 'Día 8 — Mar: el arrecife de coral desde la orilla', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'bautismo de buceo 60-90 $', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-08-mar-rosso.jpg', imageAlt: 'Un pez loro entre los corales del arrecife de Marsa Shagra, al norte de Marsa Alam' },
    { titoloGiorno: 'Día 9 — En barco a las islas o inmersiones', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Dolphin House 40-60 $, dos inmersiones 70-110 $', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg', imageAlt: 'Corales de mesa y agua turquesa en un arrecife del mar Rojo' },
    { titoloGiorno: 'Día 10 — Wadi el Gemal o jornada libre', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'excursión a Wadi el Gemal 35-60 $', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-10-wadi-el-gemal.jpg', imageAlt: 'Un charrán de mejillas blancas en la orilla de la reserva de Wadi el Gemal, en el mar Rojo' },
    { titoloGiorno: 'Día 11 — Regreso', tratta: 'Marsa Alam (o Hurghada) → Italia, vuelo directo', intensita: 'leggero', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg', imageAlt: 'Corales de mesa y agua turquesa en un arrecife del mar Rojo' },
  ],
  budget: [
    { etichetta: 'Vuelos intercontinentales', valore: undefined },
    { etichetta: 'Visado turístico', valore: '30 $ a la llegada (desde el 1 de marzo de 2026) o como e-visa oficial' },
    { etichetta: 'Entradas a los yacimientos', valore: '120-160 € por persona, 55-60 € más con Seti I y el interior de Keops' },
    { etichetta: 'Vuelo interno El Cairo-Luxor', valore: '60-120 €' },
    { etichetta: 'Conductores y traslados', valore: '60-100 € por cabeza en dos personas' },
    { etichetta: 'Alojamientos', valore: '50-90 € por habitación en El Cairo y en Luxor, 70-130 € todo incluido en el mar' },
    { etichetta: 'Excursiones, globo e inmersiones', valore: '120-250 € por persona' },
    { etichetta: 'Propinas (baksheesh)', valore: '40-70 € por persona para el viaje' },
  ],
}
