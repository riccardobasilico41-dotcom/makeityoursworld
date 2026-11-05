import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Thailandia del nord in 13 giorni: Chiang Mai,
// Pai, Chiang Rai e il Triangolo d'oro". Il testo narrativo resta nel markdown
// (src/content/viaggi/94-thailandia-nord.md). `titoloGiorno` deve combaciare
// esattamente con le intestazioni "### Giorno N — ..." del file markdown.
//
// Rick è stato a Chiang Mai e all'Elephant Nature Park (viaggio separato dal giro al
// mare, vedi 06-thailandia.md); Pai, Chiang Rai e il Triangolo d'oro sono in forma di
// guida. Nessuna foto: la UI mostra il Field Dossier tipografico.

export const thailandiaNordMeta: TripMeta = {
  tripSlug: 'thailandia-nord',
  paeseSlug: 'thailandia',
  ritmo:
    'Medio: una notte in treno all\'andata, quasi una settimana ferma a Chiang Mai con giornate piene alternate a giornate lente, due tratte in minivan su strade di montagna per Pai e un bus di circa tre ore e mezza per Chiang Rai.',
  trasporti:
    'In autonomia: treno notturno Bangkok-Chiang Mai dalla stazione Krung Thep Aphiwat, minivan Chiang Mai-Pai e ritorno, bus Chiang Mai-Chiang Rai, auto con autista o tour per il Doi Inthanon e il Triangolo d\'oro, volo interno Chiang Rai-Bangkok.',
  stile: ['templi', 'montagna', 'cultura', 'cibo'],
  adattoA: [
    'chi ha già visto il mare thailandese e vuole l\'altra Thailandia',
    'chi vuole vedere gli elefanti senza contribuire al loro sfruttamento',
    'chi ama templi, mercati serali e cucina più dei resort',
    'chi vuole unire il nord e il mare del sud nello stesso viaggio, da novembre a febbraio',
  ],
  puntiForti: [
    'Il treno notturno da Bangkok, che porta a Chiang Mai senza perdere un giorno',
    'Chiang Mai con calma: la città vecchia, il Doi Suthep dal Monk\'s Trail, i mercati a piedi del fine settimana',
    'Una giornata con gli elefanti scelta con criteri chiari, non da un volantino',
    'I tre templi d\'artista di Chiang Rai: il Tempio Bianco, il Tempio Blu e il Baan Dam',
    'La Hall of Opium al Triangolo d\'oro, che racconta il confine meglio del belvedere',
  ],
  criticita: [
    'Molti centri per elefanti si chiamano «santuario» senza esserlo: va scelto prima di partire, con le domande della sezione dedicata',
    'Le strade per Pai e Mae Hong Son sono strette e piene di curve; in moto servono patente internazionale, casco e un\'assicurazione che copra davvero',
    'In certi periodi il nord è coperto dal fumo stagionale degli incendi di campi e boschi: va controllata la qualità dell\'aria',
    'I posti letto del treno notturno nei periodi di festa thailandesi finiscono settimane prima',
    'Il Triangolo d\'oro è sul confine con il Myanmar, dove la situazione è imprevedibile: il confine si guarda, non si attraversa',
    'Il Tempio Bianco è affollatissimo nelle ore centrali',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi ha già fatto il mare in Thailandia e vuole vedere il nord, o a chi vuole unire le due cose in tre settimane',
  },
  tappeMappa: [
    { nome: 'Bangkok', destinazioneSlug: 'bangkok' },
    { nome: 'Chiang Mai', destinazioneSlug: 'chiang-mai' },
    { nome: 'Pai', destinazioneSlug: 'pai-mae-hong-son' },
    { nome: 'Chiang Mai', destinazioneSlug: 'chiang-mai' },
    { nome: 'Chiang Rai', destinazioneSlug: 'chiang-rai' },
    { nome: 'Triangolo d\'oro', destinazioneSlug: 'triangolo-d-oro' },
    { nome: 'Chiang Rai', destinazioneSlug: 'chiang-rai' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Bangkok', tratta: 'Volo intercontinentale su Bangkok', pernottamento: 'Bangkok, vicino al fiume o a Silom', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'bangkok' },
    { titoloGiorno: 'Giorno 2 — Bangkok dei templi e treno notturno per Chiang Mai', tratta: 'Grand Palace → Wat Pho → Wat Arun → stazione Krung Thep Aphiwat, treno notturno per Chiang Mai (12-14 ore)', pernottamento: 'Treno notturno, cuccetta', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Grand Palace 500 THB (sito ufficiale); Wat Pho e Wat Arun: biglietti da controllare; cuccetta da prenotare su dticket.railway.co.th', destinazioneSlug: 'bangkok' },
    { titoloGiorno: 'Giorno 3 — Chiang Mai: arrivo e città vecchia', tratta: 'Arrivo in treno a Chiang Mai → templi della città vecchia a piedi o in bicicletta', pernottamento: 'Chiang Mai, città vecchia', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'chiang-mai' },
    { titoloGiorno: 'Giorno 4 — Doi Suthep, Wat Pha Lat e il mercato della sera', tratta: 'Monk\'s Trail → Wat Pha Lat → Wat Phra That Doi Suthep → mercato a piedi della sera', pernottamento: 'Chiang Mai, città vecchia', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Parco Doi Suthep-Pui: ingresso a pagamento dal 1° ottobre 2025, importo da controllare', destinazioneSlug: 'chiang-mai' },
    { titoloGiorno: 'Giorno 5 — Corso di cucina o Doi Inthanon', tratta: 'Corso di cucina con spesa al mercato, oppure giornata al Doi Inthanon con autista o tour', pernottamento: 'Chiang Mai, città vecchia', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'chiang-mai' },
    { titoloGiorno: 'Giorno 6 — Una giornata con gli elefanti, nel modo giusto', tratta: 'Chiang Mai → centro per elefanti scelto con criteri chiari → Chiang Mai, con trasferimento del centro', pernottamento: 'Chiang Mai, città vecchia', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'chiang-mai' },
    { titoloGiorno: 'Giorno 7 — Da Chiang Mai a Pai', tratta: 'Chiang Mai → Pai, minivan su strada di montagna', pernottamento: 'Pai', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'pai-mae-hong-son' },
    { titoloGiorno: 'Giorno 8 — Pai: canyon, campagna e sorgenti calde', tratta: 'Dintorni di Pai con songthaew, autista o scooter (solo con patente e assicurazione)', pernottamento: 'Pai', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'pai-mae-hong-son' },
    { titoloGiorno: 'Giorno 9 — Ritorno a Chiang Mai e Nimman', tratta: 'Pai → Chiang Mai, minivan', pernottamento: 'Chiang Mai, città vecchia o Nimman', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'chiang-mai' },
    { titoloGiorno: 'Giorno 10 — Da Chiang Mai a Chiang Rai e il Tempio Bianco', tratta: 'Chiang Mai (stazione Arcade) → Chiang Rai, bus di circa 3 ore e mezza → Wat Rong Khun', pernottamento: 'Chiang Rai, centro', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Tempio Bianco: 200 THB per gli stranieri nel 2026', destinazioneSlug: 'chiang-rai' },
    { titoloGiorno: 'Giorno 11 — Chiang Rai: Tempio Blu e Baan Dam', tratta: 'Wat Rong Suea Ten → Baan Dam → centro e mercato notturno', pernottamento: 'Chiang Rai, centro', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'chiang-rai' },
    { titoloGiorno: 'Giorno 12 — Il Triangolo d\'oro: Sop Ruak, la Hall of Opium e Chiang Saen', tratta: 'Chiang Rai → Sop Ruak → Hall of Opium → Chiang Saen → Chiang Rai, auto con autista o tour', pernottamento: 'Chiang Rai, centro', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'triangolo-d-oro' },
    { titoloGiorno: 'Giorno 13 — Volo da Chiang Rai a Bangkok e rientro', tratta: 'Chiang Rai → Bangkok, volo interno → volo intercontinentale, oppure volo verso il sud per il mare', pernottamento: 'Volo di rientro', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'chiang-rai' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Treno notturno Bangkok-Chiang Mai', valore: 'cuccetta in seconda classe, prezzo secondo treno e posto: da controllare su dticket.railway.co.th' },
    { etichetta: 'Templi di Bangkok', valore: 'Grand Palace 500 THB (sito ufficiale); Wat Pho e Wat Arun da controllare' },
    { etichetta: 'Elefanti', valore: 'Elephant Nature Park: mezza giornata 2.500 THB secondo il sito del parco (novembre 2026); altri centri hanno prezzi propri' },
    { etichetta: 'Tempio Bianco', valore: '200 THB per gli stranieri nel 2026' },
    { etichetta: 'Volo Chiang Rai-Bangkok', valore: undefined },
  ],
}
