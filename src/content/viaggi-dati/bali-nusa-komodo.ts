import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "Bali, Nusa Penida, Nusa Lembongan e Komodo in 14 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/84-bali-nusa-komodo.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ...".
// Dati verificati il 5/11/2026: Love Bali (tassa 150.000 IDR), ANTARA 26/10/2024 (parco di
// Komodo 250.000 IDR per gli stranieri dal 30/10/2024), rotte LBJ-DPS, barche da Sanur circa
// mezz'ora (Wikivoyage Nusa Penida); prezzi barche e driver tolti perché senza fonte. Nessuna immagine: le foto le gestisce un altro lavoro.
// Le coordinate della tappa Nusa sono quelle già usate nel sito per l'esperienza
// indonesia/giornata-nusa-penida (src/content/mappe/coordinate.ts).

export const baliNusaKomodoMeta: TripMeta = {
  tripSlug: 'bali-nusa-komodo',
  paeseSlug: 'indonesia',
  ritmo:
    'Tranquillo a Ubud, con sveglie presto sulle Nusa e a Komodo per arrivare ai panorami prima della folla; tre giorni in barca nel parco e un giorno di margine a Labuan Bajo prima del volo per Bali',
  trasporti:
    'Driver a giornata a Bali, barca veloce da Sanur per Nusa Lembongan e ritorno da Nusa Penida, barca locale tra Lembongan e Penida, auto con autista su Penida, volo diretto Denpasar-Labuan Bajo andata e ritorno, barca con notti a bordo nel Parco di Komodo',
  stile: ['mare', 'snorkeling', 'risaie', 'natura', 'isole'],
  adattoA: [
    'chi vuole Bali e un po\' di mare selvaggio in due settimane, con spostamenti brevi',
    'chi vuole vedere i draghi di Komodo e dormire in barca nel parco',
    'chi ama lo snorkeling, dalle mante di Nusa Penida a Pink Beach',
    'chi accetta le sveglie all\'alba per avere Kelingking e Padar senza la coda',
  ],
  puntiForti: [
    'Tre giorni sulle Nusa dormendo sulle isole, per arrivare ai panorami prima delle barche da Bali',
    'Padar all\'alba e i draghi di Rinca, più selvaggia e meno affollata dell\'isola di Komodo',
    'Lo snorkeling con le mante a Nusa Penida e nel Parco di Komodo',
    'Le risaie di Tegalalang e Sidemen da Ubud',
    'La danza Kecak a Uluwatu al tramonto per chiudere il viaggio',
  ],
  criticita: [
    'Orari e prezzi delle barche per le Nusa cambiano spesso: vanno controllati il giorno prima',
    'La tassa locale delle Nusa è separata da quella di Bali e il suo importo è cambiato più volte',
    'Strade strette, ripide e piene di buche su Nusa Penida: scooter solo per chi ha esperienza vera',
    'Correnti forti tra le isole di Komodo e attorno a Penida: si nuota solo dove dice l\'equipaggio',
    'Kelingking e Padar si affollano subito dopo l\'alba',
    'Con il mare mosso le barche ritardano: volo per Labuan Bajo nel primo pomeriggio e un giorno di margine prima del rientro',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: 'itinerario pensato per viaggiare in autonomia, con driver a giornata a Bali e una barca con notti a bordo a Komodo',
    treEsperienzePiuBelle: 'La danza Kecak a Uluwatu al tramonto, Padar all\'alba, i draghi di Rinca',
    aChiLoConsiglio: 'A chi vuole Bali, il mare delle Nusa e i draghi di Komodo in due settimane, senza passare più tempo in viaggio che fermo',
  },
  tappeMappa: [
    { nome: 'Ubud', destinazioneSlug: 'bali' },
    { nome: 'Nusa Lembongan e Nusa Penida', destinazioneSlug: 'bali', lat: -8.74559, lng: 115.53468 },
    { nome: 'Labuan Bajo e Parco di Komodo', destinazioneSlug: 'komodo' },
    { nome: 'Uluwatu', destinazioneSlug: 'bali' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Bali e strada per Ubud', tratta: 'Aeroporto di Denpasar → Ubud, con driver', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'tassa turistica di Bali 150.000 IDR a persona, da pagare online', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 2 — Ubud e le risaie di Tegalalang', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 3 — Sidemen e la valle del Gunung Agung', tratta: 'Ubud → Sidemen e ritorno, con driver', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 4 — In barca veloce da Sanur a Nusa Lembongan', tratta: 'Ubud → porto di Sanur con driver, barca veloce per Nusa Lembongan, circa mezz\'ora', pernottamento: 'Nusa Lembongan', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'prezzo della barca veloce da chiedere alla compagnia; tassa locale delle Nusa da chiedere all\'operatore', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 5 — Da Lembongan a Nusa Penida: snorkeling con le mante', tratta: 'Nusa Lembongan → Nusa Penida in barca locale', pernottamento: 'Nusa Penida', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 6 — Nusa Penida: Kelingking, Broken Beach e Angel\'s Billabong', tratta: 'Giro della costa ovest di Penida con driver', pernottamento: 'Nusa Penida', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 7 — Rientro a Sanur e volo per Labuan Bajo', tratta: 'Nusa Penida → Sanur in barca veloce, aeroporto di Denpasar → Labuan Bajo, volo diretto', pernottamento: 'Labuan Bajo', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'komodo' },
    { titoloGiorno: 'Giorno 8 — In barca nel parco: Kelor, Rinca e il tramonto a Kalong', tratta: 'Labuan Bajo → Kelor → Rinca → Kalong in barca', pernottamento: 'A bordo, Parco di Komodo', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'ingresso al parco 250.000 IDR a persona per gli stranieri, trekking e snorkeling compresi', destinazioneSlug: 'komodo' },
    { titoloGiorno: 'Giorno 9 — Padar all\'alba, Pink Beach e l\'isola di Komodo', pernottamento: 'A bordo, Parco di Komodo', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'komodo' },
    { titoloGiorno: 'Giorno 10 — Mante, Taka Makassar, Kanawa e rientro a Labuan Bajo', tratta: 'Manta Point → Taka Makassar → Kanawa → Labuan Bajo in barca', pernottamento: 'Labuan Bajo', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'immersioni a parte, 25.000 IDR per attività di tariffa del parco', destinazioneSlug: 'komodo' },
    { titoloGiorno: 'Giorno 11 — Labuan Bajo, giorno di margine', pernottamento: 'Labuan Bajo', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'komodo' },
    { titoloGiorno: 'Giorno 12 — Volo per Bali e arrivo a Uluwatu', tratta: 'Labuan Bajo → Denpasar in volo, poi Uluwatu in auto', pernottamento: 'Uluwatu', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 13 — Uluwatu: spiagge e danza Kecak al tramonto', pernottamento: 'Uluwatu', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Giorno 14 — Partenza da Denpasar', tratta: 'Uluwatu → aeroporto di Denpasar', intensita: 'leggero', destinazioneSlug: 'bali' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Tassa turistica di Bali', valore: '150.000 IDR a persona' },
    { etichetta: 'Barche veloci per le Nusa', valore: 'variabile secondo compagnia e stagione' },
    { etichetta: 'Tassa locale delle Nusa', valore: 'importo da chiedere all\'operatore della barca' },
    { etichetta: 'Volo Denpasar-Labuan Bajo', valore: undefined },
    { etichetta: 'Ingresso al Parco di Komodo', valore: '250.000 IDR a persona per gli stranieri, trekking e snorkeling compresi; immersioni 25.000 IDR per attività' },
    { etichetta: 'Barca con notti a bordo a Komodo', valore: 'variabile secondo barca e durata' },
    { etichetta: 'Driver a Bali', valore: undefined },
  ],
}
