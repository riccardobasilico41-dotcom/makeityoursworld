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
    'Le tombe dipinte di Seti I e Deir el-Medina, e Nefertari se è aperta',
    'Immersioni ad Abu Dabbab ed Elphinstone, con tartarughe, dugongo e squali longimano in stagione',
  ],
  criticita: [
    'Biglietti dei siti cari e in continuo aumento: 180-240 € a persona solo di ingressi, di più con le tombe a pagamento',
    'Truffe e insistenza commerciale organizzate: cammelli a Giza, finte guide, papiri e profumi, taxi senza tassametro, baksheesh non dovuto',
    'Siwa è a 750 km dal Cairo: due giorni di strada all\'andata e uno al ritorno, con posti di blocco e permessi per il deserto',
    'Abu Simbel in giornata vuol dire sveglia alle 3 e sette ore di strada',
    'Brothers, Daedalus ed Elphinstone richiedono di norma brevetto Advanced ed esperienza; serve una pausa di 18-24 ore tra ultima immersione e volo',
    'Da maggio a settembre l\'Alto Egitto supera i 40-45 °C',
  ],
  budgetTotale: 'indicativamente 2.300-3.500 € a persona in due, voli internazionali esclusi',
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
    { titoloGiorno: 'Giorno 1 — Arrivo al Cairo', tratta: 'Aeroporto del Cairo → Giza', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'visto 30 $', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-completo/giorno-01-cairo.jpg', imageAlt: 'Il Cairo visto dalla Cittadella, con la moschea-madrasa del sultano Hassan e i minareti del centro storico' },
    { titoloGiorno: 'Giorno 2 — Giza e il Grand Egyptian Museum', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Giza 700 EGP, Cheope interno circa 1.500 EGP, GEM 1.830 EGP (circa 35 $)', destinazioneSlug: 'piramidi', immagine: '/images/viaggi/egitto-completo/giorno-02-piramidi.jpg', imageAlt: 'Le piramidi di Giza nel deserto, viste dalla piana sabbiosa a sud' },
    { titoloGiorno: 'Giorno 3 — Saqqara, Dahshur e Menfi', tratta: 'Giza → Saqqara → Dahshur → Menfi, auto con autista', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'autista 30-50 $, Saqqara 600 EGP, Dahshur 200 EGP, Menfi 200 EGP', destinazioneSlug: 'piramidi', immagine: '/images/viaggi/egitto-completo/giorno-03-piramidi.jpg', imageAlt: 'La piramide a gradoni di Djoser che domina la necropoli di Saqqara' },
    { titoloGiorno: 'Giorno 4 — Il Cairo islamico, il Cairo copto e il Museo Egizio', pernottamento: 'Cairo, Zamalek o Downtown', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Cittadella e Museo Egizio 550 EGP ciascuno', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-completo/giorno-04-cairo.jpg', imageAlt: 'La moschea di Muhammad Ali con le sue cupole e i minareti sottili, dentro la Cittadella del Cairo' },
    { titoloGiorno: 'Giorno 5 — Da Cairo a Marsa Matruh passando per Alessandria', tratta: 'Cairo → Alessandria → El Alamein → Marsa Matruh, circa 8 ore con soste', pernottamento: 'Marsa Matruh', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'auto con autista Cairo-Siwa e ritorno 250-400 $ in tutto', immagine: '/images/viaggi/egitto-completo/giorno-05-marsa-matruh.jpg', imageAlt: 'Il lungomare di Marsa Matruh con la spiaggia e l\'acqua turchese del Mediterraneo' },
    { titoloGiorno: 'Giorno 6 — Da Marsa Matruh a Siwa', tratta: 'Marsa Matruh → Siwa, circa 4 ore con posti di blocco', pernottamento: 'Siwa', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'siwa', immagine: '/images/viaggi/egitto-completo/giorno-06-siwa.jpg', imageAlt: 'Il tramonto sul lago salato dall\'isola di Fatnas, nell\'oasi di Siwa' },
    { titoloGiorno: 'Giorno 7 — Siwa: l\'Oracolo, la montagna dei morti e la sorgente di Cleopatra', pernottamento: 'Siwa', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'siwa', immagine: '/images/viaggi/egitto-completo/giorno-07-siwa.jpg', imageAlt: 'Palme da dattero riflesse in una sorgente dell\'oasi di Siwa' },
    { titoloGiorno: 'Giorno 8 — Il Grande Mare di Sabbia', tratta: 'Siwa → dune del Grande Mare di Sabbia, fuoristrada con permesso', pernottamento: 'Siwa o campo tendato nel deserto', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'mezza giornata 20-35 $, notte nel deserto 50-90 $', destinazioneSlug: 'siwa', immagine: '/images/viaggi/egitto-completo/giorno-08-siwa.jpg', imageAlt: 'Le lunghe dune parallele del Grande Mare di Sabbia viste dalla Stazione Spaziale Internazionale' },
    { titoloGiorno: 'Giorno 9 — Rientro al Cairo', tratta: 'Siwa → Cairo, 8-10 ore di strada', pernottamento: 'Cairo, vicino all\'aeroporto', statoPernottamento: 'consigliato', intensita: 'intenso', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-completo/giorno-09-cairo.jpg', imageAlt: 'Botteghe e facciate storiche nel bazar di Khan el-Khalili, al Cairo' },
    { titoloGiorno: 'Giorno 10 — Volo per Assuan e feluca al tramonto', tratta: 'Cairo → Assuan, volo di 1h25 (o treno notte Abela da Giza, 13-14 ore)', pernottamento: 'Assuan', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'volo 70-140 €, feluca 300-600 EGP l\'ora a barca', destinazioneSlug: 'assuan-abu-simbel', immagine: '/images/viaggi/egitto-completo/giorno-10-assuan-abu-simbel.jpg', imageAlt: 'Feluche ormeggiate sul Nilo davanti alla riva di Assuan' },
    { titoloGiorno: 'Giorno 11 — Abu Simbel all\'alba', tratta: 'Assuan → Abu Simbel → Assuan, 3,5 ore per tratta (o volo di 45 minuti)', pernottamento: 'Assuan', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Abu Simbel 822 EGP (1.272 EGP il 22 febbraio e il 22 ottobre), minivan condiviso 20-35 $', destinazioneSlug: 'assuan-abu-simbel', immagine: '/images/viaggi/egitto-completo/giorno-11-assuan-abu-simbel.jpg', imageAlt: 'I templi di Abu Simbel con le statue colossali di Ramses II scolpite nella roccia' },
    { titoloGiorno: 'Giorno 12 — Philae e l\'imbarco sulla crociera del Nilo', pernottamento: 'Nave da crociera, ormeggiata ad Assuan', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Philae 550 EGP più barca, crociera 3 notti 400-1.000 $', destinazioneSlug: 'assuan-abu-simbel', immagine: '/images/viaggi/egitto-completo/giorno-12-assuan-abu-simbel.jpg', imageAlt: 'Il tempio di Philae visto dalla barca, sull\'isola di Agilkia nel lago di Assuan' },
    { titoloGiorno: 'Giorno 13 — Crociera: Kom Ombo ed Edfu', tratta: 'Assuan → Kom Ombo → Edfu, in nave', pernottamento: 'Nave da crociera', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Kom Ombo 450 EGP, Edfu 550 EGP, spesso inclusi nel pacchetto', immagine: '/images/viaggi/egitto-completo/giorno-13-kom-ombo-edfu.jpg', imageAlt: 'Il grande pilone d\'ingresso del tempio di Horus a Edfu' },
    { titoloGiorno: 'Giorno 14 — Esna e l\'arrivo a Luxor: Karnak e il tempio di Luxor', tratta: 'Edfu → chiusa di Esna → Luxor, in nave', pernottamento: 'Nave da crociera, ormeggiata a Luxor', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Karnak 600 EGP, tempio di Luxor 500 EGP', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-completo/giorno-14-luxor.jpg', imageAlt: 'Le colonne papiriformi della grande sala ipostila del tempio di Karnak, viste dal basso' },
    { titoloGiorno: 'Giorno 15 — Luxor, riva ovest: Valle dei Re, Hatshepsut e Nefertari', pernottamento: 'Luxor, riva ovest', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Valle dei Re 750 EGP, Seti I circa 2.000 EGP; tomba di Nefertari spesso chiusa nel 2026, da verificare sul posto', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-completo/giorno-15-luxor.jpg', imageAlt: 'Il corridoio decorato della tomba di Ramses IV nella Valle dei Re' },
    { titoloGiorno: 'Giorno 16 — Mongolfiera, Medinet Habu e Deir el-Medina', pernottamento: 'Luxor, riva ovest', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'mongolfiera 50-100 $, Medinet Habu 220 EGP', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-completo/giorno-16-luxor.jpg', imageAlt: 'Una mongolfiera all\'alba sopra le colline della riva ovest di Luxor' },
    { titoloGiorno: 'Giorno 17 — Gita a Dendera o ad Abydos', tratta: 'Luxor → Dendera (1,5 ore) e/o Abydos (3 ore) → Luxor', pernottamento: 'Luxor, riva ovest', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'autista 80-120 $, Dendera 300 EGP, Abydos 260 EGP', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-completo/giorno-17-luxor.jpg', imageAlt: 'Rilievi dipinti con le barche sacre di Amon, Mut e Khonsu nel tempio di Seti I ad Abydos' },
    { titoloGiorno: 'Giorno 18 — Da Luxor a Marsa Alam', tratta: 'Luxor → Edfu → Marsa Alam, 4-4,5 ore', pernottamento: 'Marsa Alam, resort con diving', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'auto privata 100-150 $', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-07-mar-rosso.jpg', imageAlt: 'La costa egiziana del Mar Rosso vista dalla Stazione Spaziale Internazionale, con il deserto orientale' },
    { titoloGiorno: 'Giorno 19 — Immersioni: Abu Dabbab e i reef di Marsa Alam', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'immersione 35-55 $, 10 immersioni 300-400 $', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-08-mar-rosso.jpg', imageAlt: 'Un pesce pappagallo tra i coralli della barriera di Marsa Shagra, a nord di Marsa Alam' },
    { titoloGiorno: 'Giorno 20 — Immersioni a Elphinstone o snorkeling a Dolphin House', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Dolphin House 40-60 $', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-completo/giorno-20-mar-rosso.jpg', imageAlt: 'Una donzella gialla tra i coralli di un reef del Mar Rosso egiziano' },
    { titoloGiorno: 'Giorno 21 — Rientro', tratta: 'Marsa Alam (o Hurghada) → Italia', intensita: 'leggero', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg', imageAlt: 'Coralli a tavola e acqua turchese su una barriera corallina del Mar Rosso' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Visto', valore: '30 $' },
    { etichetta: 'Biglietti dei siti', valore: '180-240 € a persona, 55-60 € in più con Seti I e Cheope interno (Nefertari a parte, se aperta)' },
    { etichetta: 'Volo Cairo-Assuan', valore: '70-140 €' },
    { etichetta: 'Autisti e trasferimenti', valore: '300-450 € a testa in due persone' },
    { etichetta: 'Crociera Assuan-Luxor, 3 notti', valore: '400-1.000 $ a persona' },
    { etichetta: 'Siwa e Grande Mare di Sabbia', valore: '60-150 € a persona' },
    { etichetta: 'Immersioni', valore: '300-450 € per 6-8 immersioni; liveaboard di 7 notti 1.000-1.800 € più tasse' },
    { etichetta: 'Mance (baksheesh)', valore: '80-130 € a persona' },
  ],
}
