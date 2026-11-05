import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Classic Japan in 17 giorni" (src/content/viaggi/91-classic-japan.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
// Itinerario-guida senza ricordi personali: nessun pernottamento è "provato", tutti "da-confermare".
// Niente foto per ora.

export const classicJapanMeta: TripMeta = {
  tripSlug: 'classic-japan',
  paeseSlug: 'giappone',
  ritmo:
    'Medio-denso: la tratta classica Tokyo-Kyoto-Osaka-Hiroshima con in mezzo sei giorni di entroterra (Nakasendō, Kamikochi, Takayama, Shirakawa-go, Kanazawa) e una notte al tempio a Kōya-san. Quasi ogni giorno si cambia letto, con i bagagli spediti avanti.',
  trasporti:
    'JR Pass da 14 giorni attivato il giorno 4 (Shinkansen, Hokuriku Shinkansen, limited express Shinano, Hida e Thunderbird), più bus locali per Magome, Kamikochi e Shirakawa-go, linea Odakyu per Hakone, linea Nankai e funicolare per Kōya-san, traghetto JR per Miyajima.',
  stile: ['cultura', 'montagna', 'villaggi storici', 'onsen'],
  adattoA: [
    'chi ha 17 giorni e vuole il Giappone classico più l\'entroterra',
    'chi torna in Giappone dopo un primo viaggio tra Tokyo e Kyoto',
    'chi preferisce paesi di montagna, ryokan e templi alle grandi città',
    'chi viaggia a fine primavera o in autunno, quando Kamikochi è aperto',
  ],
  puntiForti: [
    'Il Nakasendō a piedi tra Magome e Tsumago, con il servizio bagagli tra i due paesi',
    'Kamikochi, le Alpi giapponesi da vicino su sentieri facili',
    'Takayama con i mercati del mattino e le case gasshō di Shirakawa-go',
    'Una notte in shukubō a Kōya-san, con la preghiera dell\'alba e il cimitero di Okunoin',
    'Miyajima di sera, dopo la partenza delle gite giornaliere',
  ],
  criticita: [
    'Tokyo, Kyoto e Osaka hanno solo i giorni minimi: per i dettagli c\'è il viaggio dei sakura',
    'Molti tratti non sono coperti dal JR Pass (bus di montagna, Odakyu, Nankai): va fatto il conto prima di comprarlo',
    'Kamikochi apre solo da metà aprile a metà novembre; in inverno serve la variante',
    'Bus Nohi per Shirakawa-go, bus per Kamikochi e alloggi gasshō vanno prenotati presto',
    'Quasi ogni giorno si cambia alloggio: senza takkyubin i bagagli diventano un peso',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi ha già visto Tokyo e Kyoto, o vuole un solo viaggio completo con il Giappone di montagna',
  },
  tappeMappa: [
    { nome: 'Tokyo', destinazioneSlug: 'tokyo' },
    { nome: 'Hakone' },
    { nome: 'Magome e Tsumago', destinazioneSlug: 'magome-tsumago' },
    { nome: 'Matsumoto e Kamikochi', destinazioneSlug: 'matsumoto-kamikochi' },
    { nome: 'Takayama', destinazioneSlug: 'takayama' },
    { nome: 'Shirakawa-go', destinazioneSlug: 'shirakawa-go' },
    { nome: 'Kanazawa', destinazioneSlug: 'kanazawa' },
    { nome: 'Kyoto', destinazioneSlug: 'kyoto' },
    { nome: 'Nara', destinazioneSlug: 'nara' },
    { nome: 'Kōya-san', destinazioneSlug: 'koya-san' },
    { nome: 'Osaka', destinazioneSlug: 'osaka' },
    { nome: 'Hiroshima e Miyajima', destinazioneSlug: 'hiroshima-miyajima' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Tokyo', tratta: 'Arrivo a Narita o Haneda, Tokyo', pernottamento: 'Tokyo (Shinjuku o Tokyo Station)', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'tokyo' },
    { titoloGiorno: 'Giorno 2 — Tokyo, una giornata sola', tratta: 'Tokyo, metro', pernottamento: 'Tokyo', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'tokyo' },
    { titoloGiorno: 'Giorno 3 — Hakone, il primo ryokan', tratta: 'Tokyo → Hakone (Odakyu o Shinkansen fino a Odawara)', pernottamento: 'Ryokan con onsen a Hakone', statoPernottamento: 'da-confermare', intensita: 'medio' },
    { titoloGiorno: 'Giorno 4 — Verso il Nakasendō: Magome', tratta: 'Odawara → Nagoya (Shinkansen) → Nakatsugawa (Shinano) → Magome (bus)', pernottamento: 'Minshuku a Magome o Tsumago', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'magome-tsumago' },
    { titoloGiorno: 'Giorno 5 — A piedi da Magome a Tsumago, poi Matsumoto', tratta: 'Magome → Tsumago a piedi (8 km) → Nagiso → Matsumoto (treno)', pernottamento: 'Matsumoto', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Servizio bagagli 1.000 yen a collo (2026)', destinazioneSlug: 'magome-tsumago' },
    { titoloGiorno: 'Giorno 6 — Kamikochi e la strada per Takayama', tratta: 'Matsumoto → Kamikochi (bus) → Hirayu Onsen → Takayama', pernottamento: 'Takayama', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'matsumoto-kamikochi' },
    { titoloGiorno: 'Giorno 7 — Takayama', tratta: 'Takayama a piedi', pernottamento: 'Takayama', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'takayama' },
    { titoloGiorno: 'Giorno 8 — Shirakawa-go e Kanazawa', tratta: 'Takayama → Shirakawa-go → Kanazawa (bus Nohi e Hokutetsu)', pernottamento: 'Kanazawa (o casa gasshō a Shirakawa-go)', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Bus Takayama-Shirakawa-go 2.800 yen fino al 30/11/2026, 2.900 dal 1/12/2026', destinazioneSlug: 'shirakawa-go' },
    { titoloGiorno: 'Giorno 9 — Kanazawa', tratta: 'Kanazawa a piedi e in bus', pernottamento: 'Kanazawa', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'kanazawa' },
    { titoloGiorno: 'Giorno 10 — Da Kanazawa a Kyoto', tratta: 'Kanazawa → Tsuruga (Hokuriku Shinkansen) → Kyoto (Thunderbird)', pernottamento: 'Kyoto', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'kyoto' },
    { titoloGiorno: 'Giorno 11 — Kyoto', tratta: 'Fushimi Inari → Kinkaku-ji → Ryoan-ji → Arashiyama', pernottamento: 'Kyoto', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'kyoto' },
    { titoloGiorno: 'Giorno 12 — Nara', tratta: 'Kyoto → Nara (JR Nara Line) → Kyoto o Osaka', pernottamento: 'Kyoto o Osaka', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'nara' },
    { titoloGiorno: 'Giorno 13 — Kōya-san, la notte al tempio', tratta: 'Osaka Namba → Gokurakubashi (Nankai) → Kōya-san (funicolare e bus)', pernottamento: 'Shukubō a Kōya-san', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'koya-san' },
    { titoloGiorno: 'Giorno 14 — Okunoin all\'alba e ritorno a Osaka', tratta: 'Kōya-san → Osaka', pernottamento: 'Osaka', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'osaka' },
    { titoloGiorno: 'Giorno 15 — Hiroshima e Miyajima', tratta: 'Shin-Osaka → Hiroshima (Shinkansen) → Miyajima (treno e traghetto JR)', pernottamento: 'Miyajima', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'hiroshima-miyajima' },
    { titoloGiorno: 'Giorno 16 — Miyajima e ritorno', tratta: 'Miyajima → Osaka o Tokyo (Shinkansen)', pernottamento: 'Osaka o Tokyo', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'hiroshima-miyajima' },
    { titoloGiorno: 'Giorno 17 — Rientro', tratta: 'Kansai o Tokyo → rientro', pernottamento: 'nessun pernottamento (giorno di partenza)', intensita: 'leggero' },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'JR Pass 14 giorni (online, 2026)', valore: '80.000 yen' },
    { etichetta: 'Bus, linee private e funicolari', valore: undefined },
    { etichetta: 'Alloggi', valore: undefined },
    { etichetta: 'Totale', valore: undefined },
  ],
}
