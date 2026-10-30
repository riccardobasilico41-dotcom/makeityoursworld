import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "Turchia in 16 giorni: Istanbul, la Cappadocia, Pamukkale,
// Efeso e la costa licia" (src/content/viaggi/73-turchia-itinerario.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del markdown. Guida non vissuta: nessun campo personale, immagini da recuperare.

export const turchiaItinerarioMeta: TripMeta = {
  tripSlug: 'turchia-itinerario',
  paeseSlug: 'turchia',
  ritmo:
    'Medio-intenso: quattro giorni pieni a piedi a Istanbul, sveglie alle 4 in Cappadocia, un bus notturno e tre giorni di siti archeologici; si allenta sulla costa licia, con tratte in auto brevi e giornate in barca.',
  trasporti:
    'In autonomia: tram, metro e traghetti con l\'Istanbulkart, volo interno Istanbul-Kayseri o Nevşehir, bus notturno Cappadocia-Pamukkale, auto a noleggio con sola andata da Denizli ad Antalya, barche dai porti della costa.',
  stile: ['città', 'archeologia', 'mongolfiera', 'road trip', 'mare'],
  adattoA: [
    'chi va in Turchia per la prima volta e ha due settimane abbondanti',
    'chi vuole città, paesaggio, archeologia e mare nello stesso viaggio',
    'chi guida volentieri su strade di costa',
    'coppie e gruppi di amici; famiglie con ragazzi che reggono il bus notturno',
  ],
  puntiForti: [
    'Santa Sofia, Topkapı e il Bosforo in traghetto',
    'Le mongolfiere all\'alba sopra le valli della Cappadocia',
    'Afrodisia ed Efeso con le case a terrazza, all\'apertura',
    'La laguna di Ölüdeniz, la gola di Saklıkent e la spiaggia di Patara',
    'Kekova in barca sopra la città sommersa',
  ],
  criticita: [
    'Musei statali cari e quotati in euro, in aumento ogni anno; lira turca con inflazione molto alta',
    'Mongolfiera costosa (150-350 €) e soggetta ad annullamenti per vento: serve un giorno di riserva',
    'Truffe ricorrenti a Istanbul: il bar con conto gonfiato, il lustrascarpe, i taxi senza tassametro',
    'Auto a noleggio con supplemento di sola andata tra Denizli e Antalya',
    'Luglio e agosto caldissimi all\'interno e affollati sulla costa',
  ],
  budgetTotale: 'indicativamente 2.000-3.000 € a persona in due, voli internazionali esclusi',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      'Le mongolfiere sopra Göreme all\'alba, la biblioteca di Celso a Efeso prima delle navi da crociera, il mare di Kekova e Kaleköy',
  },
  tappeMappa: [
    { nome: 'Istanbul', destinazioneSlug: 'istanbul' },
    { nome: 'Cappadocia (Göreme)', destinazioneSlug: 'cappadocia' },
    { nome: 'Pamukkale e Hierapolis', destinazioneSlug: 'pamukkale' },
    { nome: 'Afrodisia' },
    { nome: 'Efeso e Selçuk', destinazioneSlug: 'efeso' },
    { nome: 'Fethiye e Ölüdeniz', destinazioneSlug: 'costa-licia' },
    { nome: 'Kaş e Kekova', destinazioneSlug: 'costa-licia' },
    { nome: 'Antalya', destinazioneSlug: 'antalya' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Istanbul', tratta: 'Aeroporto di Istanbul → Sultanahmet, Havaist o metro', pernottamento: 'Istanbul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-01-istanbul.jpg', imageAlt: 'Tramonto su Sultanahmet a Istanbul, con le cupole e i minareti contro il cielo' },
    { titoloGiorno: 'Giorno 2 — Sultanahmet: Santa Sofia, la Moschea Blu e la Cisterna', pernottamento: 'Istanbul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Santa Sofia 25 €, Cisterna circa 1.950-2.250 lire di giorno (35-40 €), 3.000 lire la sera', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-02-istanbul.jpg', imageAlt: 'Santa Sofia vista da nord-ovest, con la grande cupola e i quattro minareti' },
    { titoloGiorno: 'Giorno 3 — Topkapı, il Gran Bazar e la Süleymaniye', pernottamento: 'Istanbul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Topkapı con harem 2.750 lire (circa 50 €), chiuso il martedì', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-03-istanbul.jpg', imageAlt: 'La sala imperiale dell\'harem del palazzo Topkapı, con le maioliche e il trono del sultano' },
    { titoloGiorno: 'Giorno 4 — Il Bosforo, Beyoğlu e Kadıköy', pernottamento: 'Istanbul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'traghetto lungo del Bosforo circa 320 lire A/R (10.35 da Eminönü), traghetti brevi con l\'Istanbulkart, torre di Galata 30 €', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-04-istanbul.jpg', imageAlt: 'La torre di Galata che svetta sui tetti di Beyoğlu a Istanbul' },
    { titoloGiorno: 'Giorno 5 — Volo per la Cappadocia', tratta: 'Istanbul → Kayseri o Nevşehir, volo di un\'ora → Göreme', pernottamento: 'Göreme, cave hotel', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'volo 40-90 €, transfer 10-15 €', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-05-cappadocia.jpg', imageAlt: 'I camini delle fate e le rocce tufacee del parco nazionale di Göreme, in Cappadocia' },
    { titoloGiorno: 'Giorno 6 — Mongolfiera all\'alba e il museo all\'aperto di Göreme', pernottamento: 'Göreme, cave hotel', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'mongolfiera 150-350 €, museo all\'aperto 20 €', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-06-cappadocia.jpg', imageAlt: 'Mongolfiere sopra le valli di tufo del parco nazionale di Göreme, in Cappadocia' },
    { titoloGiorno: 'Giorno 7 — Valle Rossa, Uçhisar e la città sotterranea', tratta: 'Göreme → Derinkuyu → Uçhisar; la sera bus notturno per Pamukkale', pernottamento: 'Bus notturno Göreme-Pamukkale', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Derinkuyu 13 €, bus notturno 20-35 €', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-07-cappadocia.jpg', imageAlt: 'Le stratificazioni rosa e bianche delle valli della Cappadocia' },
    { titoloGiorno: 'Giorno 8 — Pamukkale e Hierapolis', pernottamento: 'Pamukkale, pensione nel villaggio', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Pamukkale-Hierapolis 30 €, piscina antica indicativamente 6-13 €', destinazioneSlug: 'pamukkale', immagine: '/images/viaggi/turchia-itinerario/giorno-08-pamukkale.jpg', imageAlt: 'Le vasche di travertino bianco di Pamukkale piene d\'acqua azzurra' },
    { titoloGiorno: 'Giorno 9 — Afrodisia e l\'arrivo a Selçuk', tratta: 'Pamukkale → Afrodisia → Selçuk, circa 3,5 ore in auto', pernottamento: 'Selçuk', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Afrodisia 12 €, basilica di San Giovanni 6 €', destinazioneSlug: 'efeso', immagine: '/images/viaggi/turchia-itinerario/giorno-09-efeso.jpg', imageAlt: 'Il tetrapilo, la porta monumentale dell\'antica Afrodisia' },
    { titoloGiorno: 'Giorno 10 — Efeso e Şirince', pernottamento: 'Selçuk o Şirince', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Efeso 40 €, case a terrazza 15 € a parte', destinazioneSlug: 'efeso', immagine: '/images/viaggi/turchia-itinerario/giorno-10-efeso.jpg', imageAlt: 'Le gradinate in pietra dell\'antico stadio di Efeso' },
    { titoloGiorno: 'Giorno 11 — Verso la costa licia: Fethiye', tratta: 'Selçuk → Fethiye, circa 3,5-4 ore in auto', pernottamento: 'Fethiye o Ölüdeniz', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-11-costa-licia.jpg', imageAlt: 'Il porto di Fethiye con le barche e le montagne della costa licia' },
    { titoloGiorno: 'Giorno 12 — Ölüdeniz, Kayaköy e la Via Licia', pernottamento: 'Fethiye o Ölüdeniz', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'parapendio intorno ai 100-150 €', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-12-costa-licia.jpg', imageAlt: 'Le case in pietra abbandonate sul fianco della collina di Kayaköy' },
    { titoloGiorno: 'Giorno 13 — Da Fethiye a Kaş: Saklıkent e Patara', tratta: 'Fethiye → Saklıkent → Patara → Kaş, circa 3 ore di guida con soste', pernottamento: 'Kaş', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Saklıkent intorno ai 5-10 €, Patara 15 €', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-13-costa-licia.jpg', imageAlt: 'Panorama di Kaş con il porto, le case bianche e il mare della costa licia' },
    { titoloGiorno: 'Giorno 14 — Kekova in barca', pernottamento: 'Kaş', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'barca con pranzo 25-45 €, kayak 40-60 €', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-14-costa-licia.jpg', imageAlt: 'La baia di Kaş vista dall\'alto, con le isole all\'orizzonte verso Kekova' },
    { titoloGiorno: 'Giorno 15 — Da Kaş ad Antalya', tratta: 'Kaş → Myra o Olympos → Antalya, circa 3,5 ore di guida', pernottamento: 'Antalya, Kaleiçi', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'antalya', immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg', imageAlt: 'Vista di Kaleiçi, il centro storico di Antalya affacciato sul mare' },
    { titoloGiorno: 'Giorno 16 — Antalya e rientro', tratta: 'Antalya → Italia, volo diretto in stagione o via Istanbul', intensita: 'leggero', costiNoti: 'museo archeologico chiuso per ricostruzione dal 2025 (riapertura annunciata entro fine 2026)', destinazioneSlug: 'antalya', immagine: '/images/viaggi/turchia-itinerario/giorno-16-antalya.jpg', imageAlt: 'I tetti e le case del centro storico di Kaleiçi, ad Antalya' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Musei e siti', valore: '280-380 € a persona' },
    { etichetta: 'Mongolfiera', valore: '150-350 € a persona' },
    { etichetta: 'Volo interno e bus notturno', valore: '60-125 €' },
    { etichetta: 'Auto a noleggio, 8 giorni con sola andata', valore: '200-350 € a testa in due, carburante e pedaggi inclusi' },
    { etichetta: 'Alloggi', valore: '70-150 € a notte a camera' },
    { etichetta: 'Pasti', valore: '25-45 € al giorno' },
  ],
}
