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
    { titoloGiorno: "Día 1 — Llegada a Naha", tratta: "Vuelo interno → Naha, monorraíl", pernottamento: "Naha", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'okinawa-naha' },
    { titoloGiorno: "Día 2 — Naha: Shuri, el mercado y la historia", tratta: "Shuri → mercado de Makishi → Parque de la Paz (Itoman)", pernottamento: "Naha", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'okinawa-naha' },
    { titoloGiorno: "Día 3 — Ferri a Zamami, islas Kerama", tratta: "Naha (puerto de Tomari) → Zamami", pernottamento: "Zamami", statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: "Ferry Zamami 2.900 yenes, Queen Zamami 3.950 yenes, más 100 yenes de tasa (2025-26)", destinazioneSlug: 'isole-kerama' },
    { titoloGiorno: "Día 4 — Zamami: tortugas e islas desiertas", tratta: "Zamami, playas y barca", pernottamento: "Zamami", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'isole-kerama' },
    { titoloGiorno: "Día 5 — Regreso a Naha y hacia el norte: Churaumi", tratta: "Zamami → Naha (ferri) → Motobu (coche, unas 2 horas)", pernottamento: "Motobu o Nakijin", statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: "Churaumi Aquarium 2.180 yenes adultos", destinazioneSlug: 'okinawa-naha' },
    { titoloGiorno: "Día 6 — Motobu: Kouri, Bise y Nakijin", tratta: "Kouri → Bise → castillo de Nakijin", pernottamento: "Motobu o Nakijin", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'okinawa-naha' },
    { titoloGiorno: "Día 7 — Yanbaru, el bosque del norte", tratta: "Yanbaru → cabo Hedo → aeropuerto de Naha → Miyako (vuelo)", pernottamento: "Miyako", statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'okinawa-naha' },
    { titoloGiorno: "Día 8 — Miyako: el puente de Irabu y Shimoji", tratta: "Miyako → Irabu → Shimoji → Yonaha Maehama (coche)", pernottamento: "Miyako", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'miyako' },
    { titoloGiorno: "Día 9 — Miyako: snorkeling y la punta este", tratta: "Yoshino beach → Higashi-Hennazaki → Ishigaki (vuelo)", pernottamento: "Ishigaki", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'miyako' },
    { titoloGiorno: "Día 10 — Ishigaki: la bahía de Kabira", tratta: "Ishigaki, Kabira y Sukuji", pernottamento: "Ishigaki", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama' },
    { titoloGiorno: "Día 11 — Iriomote, la jungla", tratta: "Ishigaki → Iriomote (ferri 40-50 minutos) → Ishigaki", pernottamento: "Ishigaki o Iriomote", statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: "Ferri a Uehara 3.290 yenes, a Ohara 2.520 yenes por trayecto (horario 2026)", destinazioneSlug: 'ishigaki-yaeyama' },
    { titoloGiorno: "Día 12 — Taketomi, el pueblo", tratta: "Ishigaki → Taketomi (10-15 minutos) → Ishigaki", pernottamento: "Ishigaki", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama' },
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
