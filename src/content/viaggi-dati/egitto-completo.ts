import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "Egitto completo in 21 giorni: piramidi, Siwa, Abu Simbel,
// il Nilo e le immersioni nel Mar Rosso" (src/content/viaggi/72-egitto-completo.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del markdown. Guida non vissuta: nessun campo personale, immagini da recuperare.

export const egittoCompletoMeta: TripMeta = {
  tripSlug: 'egitto-completo',
  paeseSlug: 'egitto',
  ritmo:
    'Impegnativo: sveglie all\'alba in quasi tutti i siti, tre lunghe giornate di strada nel deserto occidentale e una notte corta per Abu Simbel; si allenta nelle tre notti di crociera sul Nilo e nei quattro giorni finali di immersioni.',
  trasporti:
    'In autonomia con autisti privati (Cairo, Siwa, Alto Egitto, Luxor-mare), fuoristrada con operatore autorizzato nel Grande Mare di Sabbia, volo interno Cairo-Assuan (o treno notte), crociera Assuan-Luxor di 3 notti, barche del centro diving a Marsa Alam.',
  stile: ['archeologia', 'deserto', 'crociera sul nilo', 'immersioni', 'avventura'],
  adattoA: [
    'chi ha tre settimane e vuole vedere l\'Egitto senza scegliere tra templi, deserto e mare',
    'sub brevettati che vogliono unire i reef del sud del Mar Rosso a un viaggio culturale',
    'chi ha già viaggiato fuori dall\'Europa e regge logistica, posti di blocco e trattative',
    'chi cerca anche un Egitto meno battuto: Siwa, Dahshur, Dendera, Medinet Habu',
  ],
  puntiForti: [
    'Le tre necropoli delle piramidi (Giza, Saqqara, Dahshur) e il Grand Egyptian Museum',
    'Siwa e il Grande Mare di Sabbia, un Egitto berbero di oasi e dune',
    'Abu Simbel all\'alba e il tempio di Philae',
    'Tre notti di crociera sul Nilo tra Kom Ombo ed Edfu',
    'Le tombe dipinte di Nefertari, Seti I e Deir el-Medina',
    'Immersioni ad Abu Dabbab ed Elphinstone, con tartarughe, dugongo e squali longimano in stagione',
  ],
  criticita: [
    'Biglietti dei siti cari e in continuo aumento: 280-400 € a persona solo di ingressi, di più con le tombe a pagamento',
    'Truffe e insistenza commerciale organizzate: cammelli a Giza, finte guide, papiri e profumi, taxi senza tassametro, baksheesh non dovuto',
    'Siwa è a 750 km dal Cairo: due giorni di strada all\'andata e uno al ritorno, con posti di blocco e permessi per il deserto',
    'Abu Simbel in giornata vuol dire sveglia alle 3 e sette ore di strada',
    'Brothers, Daedalus ed Elphinstone richiedono di norma brevetto Advanced ed esperienza; serve una pausa di 18-24 ore tra ultima immersione e volo',
    'Da maggio a settembre l\'Alto Egitto supera i 40-45 °C',
  ],
  budgetTotale: 'indicativamente 2.400-3.600 € a persona in due, voli internazionali esclusi',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      'Abu Simbel con la luce del mattino, il tramonto sulle dune del Grande Mare di Sabbia, il reef di Abu Dabbab con le tartarughe',
  },
  tappeMappa: [
    { nome: 'Giza, Saqqara e Dahshur', destinazioneSlug: 'piramidi' },
    { nome: 'Il Cairo', destinazioneSlug: 'cairo' },
    { nome: 'Alessandria e Marsa Matruh' },
    { nome: 'Oasi di Siwa', destinazioneSlug: 'siwa' },
    { nome: 'Assuan', destinazioneSlug: 'assuan-abu-simbel' },
    { nome: 'Abu Simbel', destinazioneSlug: 'assuan-abu-simbel' },
    { nome: 'Kom Ombo ed Edfu (crociera)' },
    { nome: 'Luxor', destinazioneSlug: 'luxor' },
    { nome: 'Marsa Alam', destinazioneSlug: 'mar-rosso' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo al Cairo', tratta: 'Aeroporto del Cairo → Giza', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'visto 25 $', destinazioneSlug: 'cairo' },
    { titoloGiorno: 'Giorno 2 — Giza e il Grand Egyptian Museum', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Giza circa 700 EGP, Cheope interno circa 1.500 EGP, GEM circa 1.830 EGP', destinazioneSlug: 'piramidi' },
    { titoloGiorno: 'Giorno 3 — Saqqara, Dahshur e Menfi', tratta: 'Giza → Saqqara → Dahshur → Menfi, auto con autista', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'autista 30-50 $, Saqqara circa 450-600 EGP, Dahshur intorno ai 150-200 EGP', destinazioneSlug: 'piramidi' },
    { titoloGiorno: 'Giorno 4 — Il Cairo islamico, il Cairo copto e il Museo Egizio', pernottamento: 'Cairo, Zamalek o Downtown', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Cittadella e Museo Egizio circa 550 EGP ciascuno', destinazioneSlug: 'cairo' },
    { titoloGiorno: 'Giorno 5 — Da Cairo a Marsa Matruh passando per Alessandria', tratta: 'Cairo → Alessandria → El Alamein → Marsa Matruh, circa 8 ore con soste', pernottamento: 'Marsa Matruh', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'auto con autista Cairo-Siwa e ritorno 250-400 $ in tutto' },
    { titoloGiorno: 'Giorno 6 — Da Marsa Matruh a Siwa', tratta: 'Marsa Matruh → Siwa, circa 4 ore con posti di blocco', pernottamento: 'Siwa', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'siwa' },
    { titoloGiorno: 'Giorno 7 — Siwa: l\'Oracolo, la montagna dei morti e la sorgente di Cleopatra', pernottamento: 'Siwa', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'siwa' },
    { titoloGiorno: 'Giorno 8 — Il Grande Mare di Sabbia', tratta: 'Siwa → dune del Grande Mare di Sabbia, fuoristrada con permesso', pernottamento: 'Siwa o campo tendato nel deserto', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'mezza giornata 20-35 $, notte nel deserto 50-90 $', destinazioneSlug: 'siwa' },
    { titoloGiorno: 'Giorno 9 — Rientro al Cairo', tratta: 'Siwa → Cairo, 8-10 ore di strada', pernottamento: 'Cairo, vicino all\'aeroporto', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'cairo' },
    { titoloGiorno: 'Giorno 10 — Volo per Assuan e feluca al tramonto', tratta: 'Cairo → Assuan, volo di 1h25 (o treno notte)', pernottamento: 'Assuan', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'volo 70-140 €, feluca 300-600 EGP l\'ora a barca', destinazioneSlug: 'assuan-abu-simbel' },
    { titoloGiorno: 'Giorno 11 — Abu Simbel all\'alba', tratta: 'Assuan → Abu Simbel → Assuan, 3,5 ore per tratta (o volo di 45 minuti)', pernottamento: 'Assuan', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Abu Simbel 750-850 EGP, minivan condiviso 20-35 $', destinazioneSlug: 'assuan-abu-simbel' },
    { titoloGiorno: 'Giorno 12 — Philae e l\'imbarco sulla crociera del Nilo', pernottamento: 'Nave da crociera, ormeggiata ad Assuan', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Philae circa 550 EGP più barca, crociera 3 notti 400-1.000 $', destinazioneSlug: 'assuan-abu-simbel' },
    { titoloGiorno: 'Giorno 13 — Crociera: Kom Ombo ed Edfu', tratta: 'Assuan → Kom Ombo → Edfu, in nave', pernottamento: 'Nave da crociera', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'templi spesso inclusi nel pacchetto' },
    { titoloGiorno: 'Giorno 14 — Esna e l\'arrivo a Luxor: Karnak e il tempio di Luxor', tratta: 'Edfu → chiusa di Esna → Luxor, in nave', pernottamento: 'Nave da crociera, ormeggiata a Luxor', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Karnak circa 600 EGP, tempio di Luxor circa 500 EGP', destinazioneSlug: 'luxor' },
    { titoloGiorno: 'Giorno 15 — Luxor, riva ovest: Valle dei Re, Hatshepsut e Nefertari', pernottamento: 'Luxor, riva ovest', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Valle dei Re circa 750 EGP, Nefertari intorno ai 2.000 EGP', destinazioneSlug: 'luxor' },
    { titoloGiorno: 'Giorno 16 — Mongolfiera, Medinet Habu e Deir el-Medina', pernottamento: 'Luxor, riva ovest', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'mongolfiera 50-100 $, Medinet Habu circa 300 EGP', destinazioneSlug: 'luxor' },
    { titoloGiorno: 'Giorno 17 — Gita a Dendera o ad Abydos', tratta: 'Luxor → Dendera (1,5 ore) e/o Abydos (3 ore) → Luxor', pernottamento: 'Luxor, riva ovest', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'autista 80-120 $, Dendera circa 450 EGP', destinazioneSlug: 'luxor' },
    { titoloGiorno: 'Giorno 18 — Da Luxor a Marsa Alam', tratta: 'Luxor → Edfu → Marsa Alam, 4-4,5 ore', pernottamento: 'Marsa Alam, resort con diving', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'auto privata 100-150 $', destinazioneSlug: 'mar-rosso' },
    { titoloGiorno: 'Giorno 19 — Immersioni: Abu Dabbab e i reef di Marsa Alam', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'immersione 35-55 $, 10 immersioni 300-400 $', destinazioneSlug: 'mar-rosso' },
    { titoloGiorno: 'Giorno 20 — Immersioni a Elphinstone o snorkeling a Dolphin House', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Dolphin House 40-60 $', destinazioneSlug: 'mar-rosso' },
    { titoloGiorno: 'Giorno 21 — Rientro', tratta: 'Marsa Alam (o Hurghada) → Italia', intensita: 'leggero', destinazioneSlug: 'mar-rosso' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Visto', valore: '25 $' },
    { etichetta: 'Biglietti dei siti', valore: '280-400 € a persona, 70-90 € in più con Nefertari, Seti I e Cheope interno' },
    { etichetta: 'Volo Cairo-Assuan', valore: '70-140 €' },
    { etichetta: 'Autisti e trasferimenti', valore: '300-450 € a testa in due persone' },
    { etichetta: 'Crociera Assuan-Luxor, 3 notti', valore: '400-1.000 $ a persona' },
    { etichetta: 'Siwa e Grande Mare di Sabbia', valore: '60-150 € a persona' },
    { etichetta: 'Immersioni', valore: '300-450 € per 6-8 immersioni; liveaboard di 7 notti 1.000-1.800 € più tasse' },
    { etichetta: 'Mance (baksheesh)', valore: '80-130 € a persona' },
  ],
}
