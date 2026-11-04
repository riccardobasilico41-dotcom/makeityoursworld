import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "Sumatra e Mentawai in 14 giorni" (combo di due settimane).
// Il testo narrativo resta nel markdown (src/content/viaggi/82-sumatra-mentawai.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del markdown. Dati da docs/indonesia/ricerca-mentawai.md (4/11/2026).
// Nessuna immagine nei giorni: Rick non ha foto delle Mentawai, e le foto di Sumatra
// del viaggio lungo mostrano il nord (Bukit Lawang, Toba), non Bukittinggi e Padang.

export const sumatraMentawaiMeta: TripMeta = {
  tripSlug: 'sumatra-mentawai',
  paeseSlug: 'indonesia',
  ritmo:
    'Tranquillo a Bukittinggi, duro fisicamente a Siberut (fango, caldo umido, niente elettricità), lento a Sipora; due giorni tenuti di riserva per strade chiuse e traghetti cancellati',
  trasporti:
    'Volo su Padang, auto con autista o bus DAMRI per Bukittinggi, traghetto veloce Mentawai Fast da Padang a Siberut e da Tuapejat a Padang, minivan, canoa a motore e trekking a Siberut, barca tra le isole e per i break di Sipora',
  stile: ['giungla', 'cultura', 'surf', 'spiagge', 'avventura'],
  adattoA: [
    'chi vuole passare qualche giorno con una famiglia mentawai e accetta fango, insetti e una stuoia per letto',
    'chi vuole capire il lato etico di questo tipo di turismo e scegliere un operatore con guide mentawai',
    'surfisti intermedi o esperti che cercano i reef di Sipora',
    'chi ha già visto Bali e cerca un\'Indonesia molto meno battuta',
  ],
  puntiForti: [
    'Qualche giorno in una uma di Siberut con una famiglia mentawai, con guide di Siberut',
    'La risalita in canoa a motore e il trekking nella giungla fino alla casa lunga',
    'Le spiagge di Sipora dopo i giorni di giungla',
    'I break di Sipora, da Lance\'s Left a HTs e Telescopes, nella stagione maggio-settembre',
    'L\'altopiano di Bukittinggi con le gite alla valle di Harau e al lago Maninjau',
  ],
  criticita: [
    'Non è per tutti: fango, ponti di tronchi, zanzare, 27-33 gradi con umidità alta, niente elettricità, si dorme su una stuoia',
    'Il turismo nelle comunità mentawai ha un lato etico serio: chiedere il permesso per le foto, niente pose a pagamento, regali concordati dalla guida',
    'Orari e prezzi del Mentawai Fast cambiano tra le fonti (300.000-400.000 IDR): vanno verificati sulla pagina ufficiale',
    'Traghetti cancellati con mare mosso o bandiera rossa del Syahbandar: serve un giorno di margine prima del volo',
    'L\'importo attuale della tassa surf non è confermato (le fonti vanno da 75 a 130 USD)',
    'I reef famosi delle Mentawai non sono per principianti',
    'Rischio malaria nelle zone rurali di Sumatra: profilassi da decidere con un ambulatorio di medicina dei viaggi',
    'Assicurazione con evacuazione obbligatoria con Mentawai Tribe; nessun rimborso se il traghetto di rientro viene cancellato',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'con Mentawai Tribe, operatore di Padang con guide mentawai di Siberut, per il soggiorno in giungla',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi accetta condizioni dure e vuole entrare in una comunità con rispetto; poi a chi cerca spiagge e surf lontani dalle folle',
  },
  tappeMappa: [
    { nome: 'Padang', destinazioneSlug: 'sumatra' },
    { nome: 'Bukittinggi', destinazioneSlug: 'sumatra' },
    { nome: 'Siberut', destinazioneSlug: 'mentawai' },
    { nome: 'Sipora', destinazioneSlug: 'mentawai' },
    { nome: 'Padang', destinazioneSlug: 'sumatra' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Padang e strada per Bukittinggi', tratta: 'Aeroporto di Padang → Bukittinggi, circa 3h (fino a 6 dalla strada di montagna)', pernottamento: 'Bukittinggi', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'auto privata circa 500.000 IDR; bus DAMRI più bus locale circa 65.000 IDR', destinazioneSlug: 'sumatra' },
    { titoloGiorno: 'Giorno 2 — La valle di Harau', tratta: 'Bukittinggi → valle di Harau e ritorno', pernottamento: 'Bukittinggi', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'auto con autista 75 € al giorno fino a 4 persone, 90 € fino a 9 (tariffa Mentawai Tribe)', destinazioneSlug: 'sumatra' },
    { titoloGiorno: 'Giorno 3 — Il lago Maninjau', tratta: 'Bukittinggi → lago Maninjau e ritorno', pernottamento: 'Bukittinggi', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'sumatra' },
    { titoloGiorno: 'Giorno 4 — Bukittinggi, giornata di riserva', pernottamento: 'Bukittinggi', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'sumatra' },
    { titoloGiorno: 'Giorno 5 — Ritorno a Padang', tratta: 'Bukittinggi → Padang, circa 3h', pernottamento: 'Padang', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'biglietto del Mentawai Fast da comprare il giorno prima al porto', destinazioneSlug: 'sumatra' },
    { titoloGiorno: 'Giorno 6 — Traghetto per Siberut e la risalita del fiume', tratta: 'Padang → Siberut in traghetto veloce (circa 4h), minivan, 1,5-2h di canoa a motore, 3,5 km a piedi', pernottamento: 'Uma di una famiglia mentawai, Siberut', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'traghetto 300.000-400.000 IDR secondo le fonti; pacchetti Mentawai Tribe da 200 € (3 giorni) a 550 € (8 giorni) a persona', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Giorno 7 — Nella uma con la famiglia', pernottamento: 'Uma di una famiglia mentawai, Siberut', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Giorno 8 — La giungla di Siberut', pernottamento: 'Uma di una famiglia mentawai, Siberut', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Giorno 9 — Dalla giungla al mare, verso Sipora', tratta: 'Uma → costa a piedi e in canoa, poi barca per Sipora', pernottamento: 'Sipora', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'pacchetto Mentawai Tribe Siberut + Sipora di 6 giorni da 480 € a persona; barca privata tra le isole 1.500.000-3.000.000 IDR al giorno', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Giorno 10 — Sipora: spiagge e onde', pernottamento: 'Sipora', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'lezioni e noleggio surf 500.000-1.000.000 IDR al giorno; homestay 700.000-1.500.000 IDR a notte', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Giorno 11 — Sipora: i break del sud', pernottamento: 'Sipora', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'tassa surf da verificare: le fonti vanno da 75 a 130 USD', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Giorno 12 — Sipora, giorno lento o di riserva', pernottamento: 'Sipora', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Giorno 13 — Traghetto veloce da Tuapejat a Padang', tratta: 'Tuapejat → Padang in traghetto veloce, circa 3,5h', pernottamento: 'Padang', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'traghetto 300.000-400.000 IDR secondo le fonti, più il supplemento per le tavole', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Giorno 14 — Giorno di margine a Padang e partenza', intensita: 'leggero', destinazioneSlug: 'sumatra' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Volo per Padang', valore: 'circa 130-200 USD andata e ritorno da Giacarta o Bali' },
    { etichetta: 'Auto con autista a Sumatra Occidentale', valore: '75 € al giorno fino a 4 persone, 90 € fino a 9' },
    { etichetta: 'Soggiorno a Siberut con Mentawai Tribe', valore: 'da 200 € (3 giorni) a 550 € (8 giorni) a persona; Siberut + Sipora in 6 giorni da 480 €' },
    { etichetta: 'Traghetti Mentawai Fast', valore: '300.000-400.000 IDR a tratta secondo le fonti, da verificare' },
    { etichetta: 'Alloggi a Sipora', valore: 'homestay 700.000-1.500.000 IDR a notte, resort da circa 4.000.000 IDR' },
    { etichetta: 'Tassa surf', valore: 'importo attuale non confermato, tra 75 e 130 USD secondo le fonti' },
  ],
}
