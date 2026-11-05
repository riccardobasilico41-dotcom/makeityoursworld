import type { TripMeta } from '@/lib/types'

// Structured metadata overlay for "Classic Japan in 17 Days" (src/content/i18n/en/viaggi/91-classic-japan.md).
// `titoloGiorno` must match exactly the "### Day N — ..." headings of the markdown.

export const classicJapanMeta: TripMeta = {
  tripSlug: 'classic-japan',
  paeseSlug: 'giappone',
  ritmo:
    'Medium-dense: the classic Tokyo-Kyoto-Osaka-Hiroshima route with six days of interior in between (Nakasendō, Kamikochi, Takayama, Shirakawa-go, Kanazawa) and a night at a temple in Kōya-san. You change beds almost every day, with luggage shipped ahead.',
  trasporti:
    'A 14-day JR Pass activated on day 4 (Shinkansen, Hokuriku Shinkansen, Shinano, Hida and Thunderbird limited expresses), plus local buses for Magome, Kamikochi and Shirakawa-go, the Odakyu line for Hakone, the Nankai line and funicular for Kōya-san, the JR ferry for Miyajima.',
  stile: ['cultura', 'montagna', 'villaggi storici', 'onsen'],
  adattoA: [
    'those who have 17 days and want classic Japan plus the interior',
    'those returning to Japan after a first trip between Tokyo and Kyoto',
    'those who prefer mountain villages, ryokan and temples to big cities',
    'those traveling in late spring or autumn, when Kamikochi is open',
  ],
  puntiForti: [
    'The Nakasendō on foot between Magome and Tsumago, with the luggage service between the two villages',
    'Kamikochi, the Japanese Alps up close on easy trails',
    'Takayama with its morning markets and the gasshō houses of Shirakawa-go',
    "A night in a shukubō at Kōya-san, with the dawn prayer and the Okunoin cemetery",
    'Miyajima in the evening, after the day trips leave',
  ],
  criticita: [
    "Tokyo, Kyoto and Osaka get only the minimum days: for the details there's the sakura trip",
    "Many legs aren't covered by the JR Pass (mountain buses, Odakyu, Nankai): do the math before buying it",
    'Kamikochi is open only from mid-April to mid-November; in winter you need the variant',
    'The Nohi bus to Shirakawa-go, the buses to Kamikochi and the gasshō lodgings need booking early',
    'You change lodging almost every day: without takkyubin, luggage becomes a burden',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'To those who have already seen Tokyo and Kyoto, or want a single complete trip that includes mountain Japan',
  },
  tappeMappa: [
    { nome: 'Tokyo', destinazioneSlug: 'tokyo' },
    { nome: 'Hakone' },
    { nome: 'Magome and Tsumago', destinazioneSlug: 'magome-tsumago' },
    { nome: 'Matsumoto and Kamikochi', destinazioneSlug: 'matsumoto-kamikochi' },
    { nome: 'Takayama', destinazioneSlug: 'takayama' },
    { nome: 'Shirakawa-go', destinazioneSlug: 'shirakawa-go' },
    { nome: 'Kanazawa', destinazioneSlug: 'kanazawa' },
    { nome: 'Kyoto', destinazioneSlug: 'kyoto' },
    { nome: 'Nara', destinazioneSlug: 'nara' },
    { nome: 'Kōya-san', destinazioneSlug: 'koya-san' },
    { nome: 'Osaka', destinazioneSlug: 'osaka' },
    { nome: 'Hiroshima and Miyajima', destinazioneSlug: 'hiroshima-miyajima' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Tokyo', tratta: 'Arrival at Narita or Haneda, Tokyo', pernottamento: 'Tokyo (Shinjuku or Tokyo Station)', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'tokyo' },
    { titoloGiorno: 'Day 2 — Tokyo, a single day', tratta: 'Tokyo, metro', pernottamento: 'Tokyo', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'tokyo' },
    { titoloGiorno: 'Day 3 — Hakone, the first ryokan', tratta: 'Tokyo → Hakone (Odakyu or Shinkansen to Odawara)', pernottamento: 'Ryokan with onsen in Hakone', statoPernottamento: 'da-confermare', intensita: 'medio' },
    { titoloGiorno: 'Day 4 — Toward the Nakasendō: Magome', tratta: 'Odawara → Nagoya (Shinkansen) → Nakatsugawa (Shinano) → Magome (bus)', pernottamento: 'Minshuku in Magome or Tsumago', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'magome-tsumago' },
    { titoloGiorno: 'Day 5 — On foot from Magome to Tsumago, then Matsumoto', tratta: 'Magome → Tsumago on foot (8 km) → Nagiso → Matsumoto (train)', pernottamento: 'Matsumoto', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Luggage service 1,000 yen per bag (2026)', destinazioneSlug: 'magome-tsumago' },
    { titoloGiorno: 'Day 6 — Kamikochi and the road to Takayama', tratta: 'Matsumoto → Kamikochi (bus) → Hirayu Onsen → Takayama', pernottamento: 'Takayama', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'matsumoto-kamikochi' },
    { titoloGiorno: 'Day 7 — Takayama', tratta: 'Takayama on foot', pernottamento: 'Takayama', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'takayama' },
    { titoloGiorno: 'Day 8 — Shirakawa-go and Kanazawa', tratta: 'Takayama → Shirakawa-go → Kanazawa (Nohi and Hokutetsu buses)', pernottamento: 'Kanazawa (or a gasshō house in Shirakawa-go)', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Takayama-Shirakawa-go bus 2,800 yen until 30/11/2026, 2,900 from 1/12/2026', destinazioneSlug: 'shirakawa-go' },
    { titoloGiorno: 'Day 9 — Kanazawa', tratta: 'Kanazawa on foot and by bus', pernottamento: 'Kanazawa', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'kanazawa' },
    { titoloGiorno: 'Day 10 — From Kanazawa to Kyoto', tratta: 'Kanazawa → Tsuruga (Hokuriku Shinkansen) → Kyoto (Thunderbird)', pernottamento: 'Kyoto', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'kyoto' },
    { titoloGiorno: 'Day 11 — Kyoto', tratta: 'Fushimi Inari → Kinkaku-ji → Ryoan-ji → Arashiyama', pernottamento: 'Kyoto', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'kyoto' },
    { titoloGiorno: 'Day 12 — Nara', tratta: 'Kyoto → Nara (JR Nara Line) → Kyoto or Osaka', pernottamento: 'Kyoto or Osaka', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'nara' },
    { titoloGiorno: 'Day 13 — Kōya-san, the night at the temple', tratta: 'Osaka Namba → Gokurakubashi (Nankai) → Kōya-san (funicular and bus)', pernottamento: 'Shukubō in Kōya-san', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'koya-san' },
    { titoloGiorno: 'Day 14 — Okunoin at dawn and back to Osaka', tratta: 'Kōya-san → Osaka', pernottamento: 'Osaka', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'osaka' },
    { titoloGiorno: 'Day 15 — Hiroshima and Miyajima', tratta: 'Shin-Osaka → Hiroshima (Shinkansen) → Miyajima (JR train and ferry)', pernottamento: 'Miyajima', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'hiroshima-miyajima' },
    { titoloGiorno: 'Day 16 — Miyajima and the way back', tratta: 'Miyajima → Osaka or Tokyo (Shinkansen)', pernottamento: 'Osaka or Tokyo', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'hiroshima-miyajima' },
    { titoloGiorno: 'Day 17 — Return home', tratta: 'Kansai or Tokyo → return home', pernottamento: 'no overnight stay (departure day)', intensita: 'leggero' },
  ],
  budget: [
    { etichetta: 'Flights', valore: undefined },
    { etichetta: '14-day JR Pass (online, 2026)', valore: '80,000 yen' },
    { etichetta: 'Buses, private lines and funiculars', valore: undefined },
    { etichetta: 'Lodging', valore: undefined },
    { etichetta: 'Total', valore: undefined },
  ],
}
