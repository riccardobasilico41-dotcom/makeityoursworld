import type { TripMeta } from '@/lib/types'

export const hokkaidoSciGiapponeMeta: TripMeta = {
  tripSlug: 'hokkaido-sci-giappone',
  paeseSlug: 'giappone',
  ritmo:
    "Siete días de esquí de once, con dos días en Sapporo y dos traslados largos (Sapporo-Niseko y Niseko-Furano). El día con el guía en el fuera de pista sirve también de día de descanso.",
  trasporti:
    "Vuelo a New Chitose, tren JR Rapid Airport a Sapporo, autobuses de temporada que hay que reservar para Kiroro, Niseko y Rusutsu, tren o autobús Sapporo-Furano, regreso desde Asahikawa o New Chitose.",
  stile: ['sci', 'neve polverosa', 'onsen', 'inverno'],
  adattoA: [
    "quien esquía o hace snowboard y busca la nieve polvo",
    "quien quiere unir el esquí con Sapporo y el Yuki Matsuri",
    "quien sabe reservar con muchos meses de antelación",
    "quien quiere entender si elegir Hokkaido o Hakuba",
  ],
  puntiForti: [
    "La nieve ligera y frecuente de Hokkaido entre mediados de diciembre y febrero",
    "Niseko United: cuatro estaciones en el mismo monte con un único forfait y esquí nocturno",
    "Rusutsu y Furano, con menos gente que Niseko",
    "El Yuki Matsuri de Sapporo, en 2027 del 4 al 11 de febrero",
    "Onsen después de las pistas, en casi todas las estaciones",
  ],
  criticita: [
    "Los alojamientos de Niseko para las fiestas se agotan incluso con un año de antelación, y cuestan mucho",
    "El fuera de pista en Niseko se hace solo por las puertas abiertas, con casco y ARVA; el rescate cuesta al menos 100.000 yenes",
    "Frío intenso en altura y telesillas abiertos",
    "Dos jornadas se van casi enteras en traslados",
    "Con nevadas fuertes, trenes, carreteras y vuelos desde New Chitose van más lentos",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: "A quien busca la nieve polvo y organiza el viaje con mucha antelación",
  },
  tappeMappa: [
    { nome: 'Sapporo', destinazioneSlug: 'sapporo' },
    { nome: 'Otaru y Kiroro', destinazioneSlug: 'niseko' },
    { nome: 'Niseko y Rusutsu', destinazioneSlug: 'niseko' },
    { nome: 'Furano', destinazioneSlug: 'furano' },
  ],
  giorni: [
    { titoloGiorno: "Día 1 — Llegada a New Chitose y Sapporo", tratta: "New Chitose → Sapporo (JR Rapid Airport)", pernottamento: "Sapporo", statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'sapporo' },
    { titoloGiorno: "Día 2 — Sapporo y el Yuki Matsuri", tratta: "Nijo → Odori → Susukino", pernottamento: "Sapporo", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'sapporo' },
    { titoloGiorno: "Día 3 — Otaru y Kiroro", tratta: "Sapporo → Kiroro (autobús) → Otaru → Sapporo", pernottamento: "Sapporo", statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'niseko' },
    { titoloGiorno: "Día 4 — Traslado a Niseko", tratta: "Sapporo → Niseko (autobús, o tren con transbordo en Otaru)", pernottamento: "Niseko", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'niseko' },
    { titoloGiorno: "Día 5 — Niseko: Hanazono y Grand Hirafu", tratta: "Hanazono y Grand Hirafu", pernottamento: "Niseko", statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: "Forfait Niseko United 1 día 13.500 yenes en temporada alta 2026-27", destinazioneSlug: 'niseko' },
    { titoloGiorno: "Día 6 — Niseko: Niseko Village y Annupuri", tratta: "Niseko Village y Annupuri", pernottamento: "Niseko", statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'niseko' },
    { titoloGiorno: "Día 7 — Niseko: el fuera de pista con un guía", tratta: "Niseko, puertas del fuera de pista", pernottamento: "Niseko", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'niseko' },
    { titoloGiorno: "Día 8 — Rusutsu", tratta: "Niseko → Rusutsu → Niseko", pernottamento: "Niseko", statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: "Forfait Rusutsu 1 día 16.700 yenes en taquilla, 13.200 en línea (temporada regular 2026-27)", destinazioneSlug: 'niseko' },
    { titoloGiorno: "Día 9 — De Niseko a Furano", tratta: "Niseko → Sapporo → Furano", pernottamento: "Furano", statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'furano' },
    { titoloGiorno: "Día 10 — Furano", tratta: "Pistas de Furano (o Asahidake con guía)", pernottamento: "Furano", statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'furano' },
    { titoloGiorno: "Día 11 — Regreso", tratta: "Furano → Asahikawa o New Chitose → regreso", pernottamento: "sin pernoctación (día de salida)", intensita: 'leggero', destinazioneSlug: 'furano' },
  ],
  budget: [
    { etichetta: "Vuelos", valore: undefined },
    { etichetta: "Forfait Niseko United 7 días, temporada alta 2026-27", valore: "91.500 yenes" },
    { etichetta: "Autobús New Chitose-Rusutsu, por trayecto (en línea, 2026-27)", valore: "5.000 yenes" },
    { etichetta: "Alojamiento", valore: undefined },
    { etichetta: "Alquiler de material", valore: undefined },
    { etichetta: "Total", valore: undefined },
  ],
}
