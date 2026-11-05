import type { TripMeta } from '@/lib/types'

// Structured metadata overlay for "Hokkaido and Skiing in Japan" (src/content/i18n/en/viaggi/93-hokkaido-sci-giappone.md).
// `titoloGiorno` must match exactly the "### Day N — ..." headings of the markdown.

export const hokkaidoSciGiapponeMeta: TripMeta = {
  tripSlug: 'hokkaido-sci-giappone',
  paeseSlug: 'giappone',
  ritmo:
    'Seven days of skiing out of eleven, with two days in Sapporo and two long transfers (Sapporo-Niseko and Niseko-Furano). The guided off-piste day also works as a rest day.',
  trasporti:
    'Flight to New Chitose, JR Rapid Airport train to Sapporo, seasonal buses to book for Kiroro, Niseko and Rusutsu, train or bus Sapporo-Furano, return from Asahikawa or New Chitose.',
  stile: ['sci', 'neve polverosa', 'onsen', 'inverno'],
  adattoA: [
    'those who ski or snowboard and are looking for powder snow',
    'those who want to combine skiing with Sapporo and the Yuki Matsuri',
    'those who can book many months ahead',
    'those trying to decide between Hokkaido and Hakuba',
  ],
  puntiForti: [
    "Hokkaido's light, frequent snow between mid-December and February",
    'Niseko United: four resorts on the same mountain with a single lift pass and night skiing',
    'Rusutsu and Furano, with fewer crowds than Niseko',
    'The Sapporo Yuki Matsuri, February 4-11 in 2027',
    'Onsen after the slopes, at almost every resort',
  ],
  criticita: [
    'Niseko lodging for the holidays needs booking many months ahead, and costs a lot',
    'Off-piste in Niseko is done only through the open gates, with helmet and transceiver; rescue costs at least 100,000 yen',
    'Intense cold at altitude and open chairlifts',
    'Two days go almost entirely on transfers',
    'With heavy snowfall, trains, roads and flights from New Chitose slow down',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'To those looking for powder snow who plan the trip well in advance',
  },
  tappeMappa: [
    { nome: 'Sapporo', destinazioneSlug: 'sapporo' },
    { nome: 'Otaru and Kiroro', destinazioneSlug: 'niseko' },
    { nome: 'Niseko and Rusutsu', destinazioneSlug: 'niseko' },
    { nome: 'Furano', destinazioneSlug: 'furano' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival at New Chitose and Sapporo', tratta: 'New Chitose → Sapporo (JR Rapid Airport)', pernottamento: 'Sapporo', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'sapporo', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-01-tv-tower-sapporo.webp', imageAlt: "Sapporo's TV Tower lit up at night above the snowy Odori Park" },
    { titoloGiorno: 'Day 2 — Sapporo and the Yuki Matsuri', tratta: 'Nijo → Odori → Susukino', pernottamento: 'Sapporo', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'sapporo', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-02-yuki-matsuri.webp', imageAlt: "Odori Park during the Yuki Matsuri seen from the TV Tower, with rows of snow sculptures" },
    { titoloGiorno: 'Day 3 — Otaru and Kiroro', tratta: 'Sapporo → Kiroro (bus) → Otaru → Sapporo', pernottamento: 'Sapporo', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-03-otaru.webp', imageAlt: "Lanterns in the snow along the Otaru canal during Yuki Akari no Michi" },
    { titoloGiorno: 'Day 4 — Transfer to Niseko', tratta: 'Sapporo → Niseko (bus, or train with a change at Otaru)', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-04-yotei-annupuri.webp', imageAlt: "Mount Yōtei seen from the slopes of Niseko Annupuri" },
    { titoloGiorno: 'Day 5 — Niseko: Hanazono and Grand Hirafu', tratta: 'Hanazono and Grand Hirafu', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Niseko United lift pass 1 day 13,500 yen in high season 2026-27', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-05-grand-hirafu.webp', imageAlt: "The Grand Hirafu slopes on the flank of Niseko Annupuri, seen from the valley" },
    { titoloGiorno: 'Day 6 — Niseko: Niseko Village and Annupuri', tratta: 'Niseko Village and Annupuri', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-06-annupuri.webp', imageAlt: "Snowy Niseko Annupuri with the runs of its southern side" },
    { titoloGiorno: 'Day 7 — Niseko: off-piste with a guide', tratta: 'Niseko, off-piste gates', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'niseko', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-07-fuoripista.webp', imageAlt: "Mount Yōtei and Niseko Annupuri seen from the slopes of Mount Weisshorn, in fresh snow" },
    { titoloGiorno: 'Day 8 — Rusutsu', tratta: 'Niseko → Rusutsu → Niseko', pernottamento: 'Niseko', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Rusutsu lift pass 1 day 16,700 yen at the ticket office, 13,200 online (regular season 2026-27)', destinazioneSlug: 'niseko' },
    { titoloGiorno: 'Day 9 — From Niseko to Furano', tratta: 'Niseko → Sapporo → Furano', pernottamento: 'Furano', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'furano', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-09-biei.webp', imageAlt: "A lone tree on top of a snowy Biei hill, under a blue sky" },
    { titoloGiorno: 'Day 10 — Furano', tratta: 'Furano slopes (or Asahidake with a guide)', pernottamento: 'Furano', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'furano', immagine: '/images/viaggi/hokkaido-sci-giappone/giorno-10-furano.webp', imageAlt: "The Kitanomine runs of Furano, above the town" },
    { titoloGiorno: 'Day 11 — Return home', tratta: 'Furano → Asahikawa or New Chitose → return home', pernottamento: 'no overnight stay (departure day)', intensita: 'leggero', destinazioneSlug: 'furano' },
  ],
  budget: [
    { etichetta: 'Flights', valore: undefined },
    { etichetta: 'Niseko United 7-day lift pass, high season 2026-27', valore: '91,500 yen' },
    { etichetta: 'New Chitose-Rusutsu bus, one way (online, 2026-27)', valore: '5,000 yen' },
    { etichetta: 'Lodging', valore: undefined },
    { etichetta: 'Equipment rental', valore: undefined },
    { etichetta: 'Total', valore: undefined },
  ],
}
