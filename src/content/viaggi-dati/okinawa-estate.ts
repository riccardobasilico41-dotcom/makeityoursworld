import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Okinawa d'estate in 13 giorni" (src/content/viaggi/92-okinawa-estate.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..." del markdown.
// Itinerario-guida senza ricordi personali. Niente foto per ora.

export const okinawaEstateMeta: TripMeta = {
  tripSlug: 'okinawa-estate',
  paeseSlug: 'giappone',
  provenienza: 'journey',
  mesiConsigliati: [6, 7, 9, 10],
  ritmo:
    'Rilassato ma con molti spostamenti: quattro basi (Naha, Zamami, il nord dell\'isola principale, Miyako, Ishigaki), con traghetti e voli brevi tra l\'una e l\'altra e giornate lunghe in acqua.',
  trasporti:
    'Volo interno su Naha, monorotaia Yui Rail in città, auto a noleggio sull\'isola principale e a Miyako, traghetti da Tomari per Zamami e da Ishigaki per Iriomote e Taketomi, voli interni Naha-Miyako e Miyako-Ishigaki.',
  stile: ['mare', 'snorkeling', 'isole', 'cultura ryukyu'],
  adattoA: [
    'chi vuole il mare tropicale senza lasciare il Giappone',
    'chi fa snorkeling e vuole tartarughe e barriera corallina',
    'chi è già stato a Tokyo e Kyoto e cerca un Giappone diverso',
    'chi può tenere due giorni di margine per i tifoni',
  ],
  puntiForti: [
    'Lo snorkeling alle Kerama, con le tartarughe di Ama beach',
    'Gli squali balena di Churaumi e la penisola di Motobu',
    'La foresta di Yanbaru e Iriomote, Patrimonio naturale UNESCO dal 2021',
    'Il ponte di Irabu e le spiagge bianche di Miyako',
    'Il villaggio di corallo di Taketomi',
  ],
  criticita: [
    'Il mare migliore cade nei mesi dei tifoni: in media 2,3 si avvicinano ad agosto e 2,0 a settembre (JMA)',
    'La stagione delle piogge dura in media dal 10 maggio al 21 giugno, ma varia molto da un anno all\'altro',
    'Sull\'isola principale senza auto ci si muove male',
    'In estate c\'è la medusa habu: si nuota dentro le reti e con la muta',
    'Traghetti veloci, auto e alloggi a luglio e agosto si esauriscono',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi ama il mare e vuole un Giappone che in Europa conoscono in pochi',
  },
  tappeMappa: [
    { nome: 'Naha', destinazioneSlug: 'okinawa-naha' },
    { nome: 'Zamami, isole Kerama', destinazioneSlug: 'isole-kerama' },
    { nome: 'Motobu e Yanbaru', destinazioneSlug: 'okinawa-naha' },
    { nome: 'Miyako', destinazioneSlug: 'miyako' },
    { nome: 'Ishigaki, Iriomote e Taketomi', destinazioneSlug: 'ishigaki-yaeyama' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Naha', tratta: 'Volo interno → Naha, monorotaia', pernottamento: 'Naha', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-01-naminoue.webp', imageAlt: "La spiaggia di Naminoue a Naha, con la scogliera del santuario sullo sfondo" },
    { titoloGiorno: 'Giorno 2 — Naha: Shuri, il mercato e la storia', tratta: 'Shuri → mercato di Makishi → Parco della Pace (Itoman)', pernottamento: 'Naha', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-02-shureimon.webp', imageAlt: "La porta Shureimon del castello di Shuri, a Naha" },
    { titoloGiorno: 'Giorno 3 — Traghetto per Zamami, isole Kerama', tratta: 'Naha (porto di Tomari) → Zamami', pernottamento: 'Zamami', statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: 'Ferry Zamami 2.900 yen, Queen Zamami 3.950 yen, più 100 yen di tassa (2025-26)', destinazioneSlug: 'isole-kerama', immagine: '/images/viaggi/okinawa-estate/giorno-03-mare-zamami.webp', imageAlt: "Il mare blu delle Kerama e gli isolotti visti da Zamami" },
    { titoloGiorno: 'Giorno 4 — Zamami: tartarughe e isole deserte', tratta: 'Zamami, spiagge e barca', pernottamento: 'Zamami', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'isole-kerama', immagine: '/images/viaggi/okinawa-estate/giorno-04-furuzamami.webp', imageAlt: "La spiaggia di Furuzamami, a Zamami, con la sabbia bianca e l'acqua turchese" },
    { titoloGiorno: 'Giorno 5 — Ritorno a Naha e verso il nord: Churaumi', tratta: 'Zamami → Naha (traghetto) → Motobu (auto)', pernottamento: 'Motobu o Nakijin', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Churaumi Aquarium 2.180 yen adulti', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-05-churaumi.webp', imageAlt: "La grande vasca del Mare di Kuroshio all'acquario Churaumi, con gli squali balena" },
    { titoloGiorno: 'Giorno 6 — Motobu: Kouri, Bise e Nakijin', tratta: 'Kouri → Bise → castello di Nakijin', pernottamento: 'Motobu o Nakijin', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-06-nakijin.webp', imageAlt: "Le mura curve di pietra del castello di Nakijin, sulla penisola di Motobu" },
    { titoloGiorno: 'Giorno 7 — Yanbaru, la foresta del nord', tratta: 'Yanbaru → Capo Hedo → aeroporto di Naha → Miyako (volo)', pernottamento: 'Miyako', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-07-yanbaru.webp', imageAlt: "La foresta subtropicale di Yanbaru, nel nord di Okinawa" },
    { titoloGiorno: 'Giorno 8 — Miyako: il ponte di Irabu e Shimoji', tratta: 'Miyako → Irabu → Shimoji → Yonaha Maehama (auto)', pernottamento: 'Miyako', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'miyako', immagine: '/images/viaggi/okinawa-estate/giorno-08-ponte-irabu.webp', imageAlt: "Il ponte di Irabu che attraversa il mare turchese tra Miyako e Irabu" },
    { titoloGiorno: 'Giorno 9 — Miyako: snorkeling e la punta est', tratta: 'Yoshino beach → Higashi-Hennazaki → Ishigaki (volo)', pernottamento: 'Ishigaki', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'miyako', immagine: '/images/viaggi/okinawa-estate/giorno-09-higashi-hennazaki.webp', imageAlt: "La punta di Higashi-hennazaki, a Miyako, una lingua di prato sul mare aperto" },
    { titoloGiorno: 'Giorno 10 — Ishigaki: la baia di Kabira', tratta: 'Ishigaki, Kabira e Sukuji', pernottamento: 'Ishigaki', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-10-kabira.webp', imageAlt: "La baia di Kabira a Ishigaki, con gli isolotti verdi nell'acqua turchese" },
    { titoloGiorno: 'Giorno 11 — Iriomote, la giungla', tratta: 'Ishigaki → Iriomote (traghetto) → Ishigaki', pernottamento: 'Ishigaki o Iriomote', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-11-mangrovie-iriomote.webp', imageAlt: "Le mangrovie lungo un fiume di Iriomote" },
    { titoloGiorno: 'Giorno 12 — Taketomi, il villaggio', tratta: 'Ishigaki → Taketomi (traghetto) → Ishigaki', pernottamento: 'Ishigaki', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-12-kondoi-taketomi.webp', imageAlt: "La spiaggia di Kondoi a Taketomi, con l'acqua bassa e trasparente" },
    { titoloGiorno: 'Giorno 13 — Rientro', tratta: 'Ishigaki → Tokyo, Osaka o Naha → rientro', pernottamento: 'nessun pernottamento (giorno di partenza)', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama' },
  ],
  budget: [
    { etichetta: 'Voli internazionali', valore: undefined },
    { etichetta: 'Voli interni (Naha, Miyako, Ishigaki)', valore: undefined },
    { etichetta: 'Traghetti', valore: undefined },
    { etichetta: 'Auto a noleggio', valore: undefined },
    { etichetta: 'Totale', valore: undefined },
  ],
}
