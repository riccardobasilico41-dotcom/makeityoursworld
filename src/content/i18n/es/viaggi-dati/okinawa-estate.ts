import type { TripMeta } from '@/lib/types'

export const okinawaEstateMeta: TripMeta = {
  tripSlug: 'okinawa-estate',
  paeseSlug: 'giappone',
  ritmo:
    "Relajado pero con muchos desplazamientos: cuatro bases (Naha, Zamami, el norte de la isla principal, Miyako, Ishigaki), con ferris y vuelos cortos entre una y otra y jornadas largas en el agua.",
  trasporti:
    "Vuelo interno a Naha, monorraíl Yui Rail en la ciudad, coche de alquiler en la isla principal y en Miyako, ferris desde Tomari a Zamami y desde Ishigaki a Iriomote y Taketomi, vuelos internos Naha-Miyako y Miyako-Ishigaki.",
  stile: ['mare', 'snorkeling', 'isole', 'cultura ryukyu'],
  adattoA: [
    "quien quiere el mar tropical sin salir de Japón",
    "quien hace snorkeling y quiere tortugas y arrecife de coral",
    "quien ya ha estado en Tokio y Kioto y busca un Japón distinto",
    "quien puede reservar dos días de margen para los tifones",
  ],
  puntiForti: [
    "El snorkeling en las Kerama, con las tortugas de Ama beach",
    "Los tiburones ballena de Churaumi y la península de Motobu",
    "El bosque de Yanbaru e Iriomote, Patrimonio natural de la UNESCO desde 2021",
    "El puente de Irabu y las playas blancas de Miyako",
    "El pueblo de coral de Taketomi",
  ],
  criticita: [
    "El mejor mar cae en los meses de los tifones: de media se acercan 2,3 en agosto y 2,0 en septiembre (JMA)",
    "La estación de lluvias dura de media del 10 de mayo al 21 de junio, pero varía mucho de un año a otro",
    "En la isla principal sin coche uno se mueve mal",
    "En verano está la medusa habu: se nada dentro de las redes y con neopreno",
    "Ferris rápidos, coches y alojamientos se agotan en julio y agosto",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: "A quien ama el mar y quiere un Japón que en Europa conocen pocos",
  },
  tappeMappa: [
    { nome: 'Naha', destinazioneSlug: 'okinawa-naha' },
    { nome: 'Zamami, islas Kerama', destinazioneSlug: 'isole-kerama' },
    { nome: 'Motobu y Yanbaru', destinazioneSlug: 'okinawa-naha' },
    { nome: 'Miyako', destinazioneSlug: 'miyako' },
    { nome: 'Ishigaki, Iriomote y Taketomi', destinazioneSlug: 'ishigaki-yaeyama' },
  ],
  giorni: [
    { titoloGiorno: "Día 1 — Llegada a Naha", tratta: "Vuelo interno → Naha, monorraíl", pernottamento: "Naha", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-01-naminoue.webp', imageAlt: "La playa de Naminoue en Naha, con el acantilado del santuario al fondo" },
    { titoloGiorno: "Día 2 — Naha: Shuri, el mercado y la historia", tratta: "Shuri → mercado de Makishi → Parque de la Paz (Itoman)", pernottamento: "Naha", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-02-shureimon.webp', imageAlt: "La puerta Shureimon del castillo de Shuri, en Naha" },
    { titoloGiorno: "Día 3 — Ferri a Zamami, islas Kerama", tratta: "Naha (puerto de Tomari) → Zamami", pernottamento: "Zamami", statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: "Ferry Zamami 2.900 yenes, Queen Zamami 3.950 yenes, más 100 yenes de tasa (2025-26)", destinazioneSlug: 'isole-kerama', immagine: '/images/viaggi/okinawa-estate/giorno-03-mare-zamami.webp', imageAlt: "El mar azul de las Kerama y sus islotes vistos desde Zamami" },
    { titoloGiorno: "Día 4 — Zamami: tortugas e islas desiertas", tratta: "Zamami, playas y barca", pernottamento: "Zamami", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'isole-kerama', immagine: '/images/viaggi/okinawa-estate/giorno-04-furuzamami.webp', imageAlt: "La playa de Furuzamami, en Zamami, con arena blanca y agua turquesa" },
    { titoloGiorno: "Día 5 — Regreso a Naha y hacia el norte: Churaumi", tratta: "Zamami → Naha (ferri) → Motobu (coche)", pernottamento: "Motobu o Nakijin", statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: "Churaumi Aquarium 2.180 yenes adultos", destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-05-churaumi.webp', imageAlt: "El gran tanque del Mar de Kuroshio del acuario Churaumi, con los tiburones ballena" },
    { titoloGiorno: "Día 6 — Motobu: Kouri, Bise y Nakijin", tratta: "Kouri → Bise → castillo de Nakijin", pernottamento: "Motobu o Nakijin", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-06-nakijin.webp', imageAlt: "Las murallas curvas de piedra del castillo de Nakijin, en la península de Motobu" },
    { titoloGiorno: "Día 7 — Yanbaru, el bosque del norte", tratta: "Yanbaru → cabo Hedo → aeropuerto de Naha → Miyako (vuelo)", pernottamento: "Miyako", statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-07-yanbaru.webp', imageAlt: "El bosque subtropical de Yanbaru, en el norte de Okinawa" },
    { titoloGiorno: "Día 8 — Miyako: el puente de Irabu y Shimoji", tratta: "Miyako → Irabu → Shimoji → Yonaha Maehama (coche)", pernottamento: "Miyako", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'miyako', immagine: '/images/viaggi/okinawa-estate/giorno-08-ponte-irabu.webp', imageAlt: "El puente de Irabu cruzando el mar turquesa entre Miyako e Irabu" },
    { titoloGiorno: "Día 9 — Miyako: snorkeling y la punta este", tratta: "Yoshino beach → Higashi-Hennazaki → Ishigaki (vuelo)", pernottamento: "Ishigaki", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'miyako', immagine: '/images/viaggi/okinawa-estate/giorno-09-higashi-hennazaki.webp', imageAlt: "El cabo Higashi-hennazaki, en Miyako, una lengua de prado sobre el mar abierto" },
    { titoloGiorno: "Día 10 — Ishigaki: la bahía de Kabira", tratta: "Ishigaki, Kabira y Sukuji", pernottamento: "Ishigaki", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-10-kabira.webp', imageAlt: "La bahía de Kabira en Ishigaki, con islotes verdes en el agua turquesa" },
    { titoloGiorno: "Día 11 — Iriomote, la jungla", tratta: "Ishigaki → Iriomote (ferri) → Ishigaki", pernottamento: "Ishigaki o Iriomote", statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-11-mangrovie-iriomote.webp', imageAlt: "Los manglares a lo largo de un río de Iriomote" },
    { titoloGiorno: "Día 12 — Taketomi, el pueblo", tratta: "Ishigaki → Taketomi (ferri) → Ishigaki", pernottamento: "Ishigaki", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-12-kondoi-taketomi.webp', imageAlt: "La playa de Kondoi en Taketomi, con el agua baja y transparente" },
    { titoloGiorno: "Día 13 — Regreso", tratta: "Ishigaki → Tokio, Osaka o Naha → regreso", pernottamento: "sin pernoctación (día de salida)", intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama' },
  ],
  budget: [
    { etichetta: "Vuelos internacionales", valore: undefined },
    { etichetta: "Vuelos internos (Naha, Miyako, Ishigaki)", valore: undefined },
    { etichetta: "Ferris", valore: undefined },
    { etichetta: "Coche de alquiler", valore: undefined },
    { etichetta: "Total", valore: undefined },
  ],
}
