import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "Giava, Bali e Gili in 14 giorni" (combo di due settimane).
// Il testo narrativo resta nel markdown (src/content/viaggi/81-giava-bali-gili.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del markdown. Tratte, tempi e costi ripresi dal viaggio lungo indonesia-itinerario.
// Immagini: foto da drone di Rick in /images/viaggi/giava-bali-gili/, più quelle già
// usate nel viaggio lungo (stessi file). Nessuna foto per i giorni 1 e 14.

const IMG = '/images/viaggi/giava-bali-gili'
const LUNGO = '/images/viaggi/indonesia-itinerario'

export const giavaBaliGiliMeta: TripMeta = {
  tripSlug: 'giava-bali-gili',
  paeseSlug: 'indonesia',
  mesiConsigliati: [5, 6, 7, 8, 9],
  ritmo:
    'Intenso nella prima settimana (sveglie notturne per Borobudur, Bromo e Ijen, una giornata intera di treni), più lento a Bali e alle Gili, con tre notti finali senza spostamenti lunghi',
  trasporti:
    'Volo interno Giacarta-Yogyakarta, treni Yogyakarta-Surabaya-Probolinggo, minivan e jeep 4x4 per il Bromo, traghetto Ketapang-Gilimanuk, driver privato o scooter a Bali, barca veloce da Sanur o Padang Bai per le Gili, cidomo e biciclette sulle isole',
  stile: ['templi', 'vulcani', 'risaie', 'isole', 'cultura'],
  adattoA: [
    'chi ha due settimane e vuole il meglio di Giava, Bali e Gili in un solo giro',
    'chi accetta tre sveglie nel cuore della notte per Borobudur, Bromo e Ijen',
    'chi vuole vedere una Bali lontana dal sud dei beach club',
    'chi chiude il viaggio volentieri con qualche giorno lento sul mare',
  ],
  puntiForti: [
    'Borobudur all\'alba e Prambanan al tramonto nella stessa giornata',
    'L\'alba sul Bromo e il fuoco blu dell\'Ijen, con i minatori di zolfo sullo stesso sentiero',
    'Il nord di Bali con Munduk, il lago Beratan e la porta di Handara, poi le risaie di Jatiluwih e Sidemen',
    'La danza Kecak al tramonto sulla scogliera di Uluwatu',
    'Le tartarughe alle Gili, in snorkeling partendo dalla spiaggia',
  ],
  criticita: [
    'Il biglietto per salire su Borobudur è a numero chiuso e finisce con largo anticipo',
    'A Probolinggo i tout dichiarano "pieni" i minivan pubblici (circa 35.000 IDR) per vendere passaggi privati gonfiati',
    'Il jeep del Bromo costa di riferimento 700.000-900.000 IDR a veicolo: all\'alba capita di sentirsi chiedere il doppio o il triplo',
    'Il giorno 6 mette insieme Ijen notturno, traghetto e strada fino al nord di Bali: è il più lungo del viaggio',
    'All\'Ijen la maschera antigas è obbligatoria: i fumi di zolfo sono pericolosi',
    'Lo scooter a Bali va guidato solo con esperienza vera; altrimenti driver a giornata',
    'Le barche veloci per le Gili dipendono dal mare: meglio non avere un volo intercontinentale presto l\'ultimo giorno',
    'Il Nyepi (capodanno balinese, a marzo) chiude Bali e il suo aeroporto per 24 ore',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'con amici, in autonomia: è la prima metà del viaggio lungo in Indonesia, stretta in due settimane',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il fuoco blu dell\'Ijen, l\'alba sul Bromo, la danza Kecak a Uluwatu',
    cosaCambierei: undefined,
    aChiLoConsiglio: 'A chi va in Indonesia per la prima volta e ha due settimane',
  },
  tappeMappa: [
    { nome: 'Yogyakarta', destinazioneSlug: 'giava' },
    { nome: 'Bromo', destinazioneSlug: 'giava' },
    { nome: 'Ijen', destinazioneSlug: 'giava' },
    { nome: 'Bali nord', destinazioneSlug: 'bali' },
    { nome: 'Ubud e Sidemen', destinazioneSlug: 'bali' },
    { nome: 'Uluwatu', destinazioneSlug: 'bali' },
    { nome: 'Gili', destinazioneSlug: 'lombok-gili' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Giacarta e volo per Yogyakarta', tratta: 'Giacarta → Yogyakarta in volo, un\'ora e mezza scarsa', pernottamento: 'Yogyakarta, zona Prawirotaman', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'giava', immagine: '/images/indonesia/giacarta-monas-piazza-merdeka.jpg', imageAlt: 'Il Monumento Nazionale (Monas) al centro della piazza Merdeka di Giacarta, visto dall\'alto con i grattacieli intorno' },
    { titoloGiorno: 'Giorno 2 — Alba a Borobudur, tramonto a Prambanan', pernottamento: 'Yogyakarta, zona Prawirotaman', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'biglietto per salire sulla struttura di Borobudur a numero chiuso, da prenotare prima', destinazioneSlug: 'giava', immagine: '/images/indonesia/borobudur-buddha-nebbia-riccardo.jpg', imageAlt: 'Una testa di Buddha in pietra di Borobudur, di spalle, davanti alla valle avvolta nella nebbia dell\'alba' },
    { titoloGiorno: 'Giorno 3 — Yogyakarta: kraton, batik e Malioboro', pernottamento: 'Yogyakarta, zona Prawirotaman', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'giava', immagine: `${LUNGO}/giorno-08-kraton-yogyakarta.jpg`, imageAlt: 'Un padiglione decorato del Kraton di Yogyakarta, il palazzo del Sultano, tra gli alberi del cortile interno' },
    { titoloGiorno: 'Giorno 4 — In treno verso Probolinggo e Cemoro Lawang', tratta: 'Yogyakarta → Surabaya Gubeng (treno, 4-5h) → Probolinggo (treno, circa 2h) → Cemoro Lawang in minivan', pernottamento: 'Cemoro Lawang', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'treno Yogyakarta-Surabaya 75.000-285.000 IDR; minivan pubblico Probolinggo-Cemoro Lawang circa 35.000 IDR a persona', destinazioneSlug: 'giava', immagine: '/images/indonesia/bromo-caldera-riccardo.jpg', imageAlt: 'La caldera del Tengger dal bordo sopra Cemoro Lawang: il Bromo fumante, il cono del Batok e il Semeru sullo sfondo' },
    { titoloGiorno: 'Giorno 5 — Alba al Bromo e verso l\'Ijen', tratta: 'Cemoro Lawang → Penanjakan in jeep, poi Banyuwangi o Licin in auto', pernottamento: 'Banyuwangi o Licin', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'jeep condiviso 700.000-900.000 IDR a veicolo, da dividere in 4-6', destinazioneSlug: 'giava', immagine: `${IMG}/bromo-alba.jpg`, imageAlt: 'Il cratere del Bromo che fuma nel Mare di Sabbia alla prima luce, con il Semeru sullo sfondo, visto dal drone' },
    { titoloGiorno: 'Giorno 6 — Il fuoco blu dell\'Ijen e il traghetto per Bali', tratta: 'Ijen → Ketapang → traghetto per Gilimanuk (30-60 min) → nord di Bali', pernottamento: 'Lovina o Munduk', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'traghetto Ketapang-Gilimanuk pochi euro a persona, partenze ogni 15 minuti', destinazioneSlug: 'giava', immagine: `${LUNGO}/giorno-11-kawah-ijen.jpg`, imageAlt: 'Le fiamme blu del fuoco di zolfo del Kawah Ijen, fotografate di notte nel buio del cratere' },
    { titoloGiorno: 'Giorno 7 — Bali nord: Munduk, il lago Beratan e la porta di Handara', pernottamento: 'Munduk', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${IMG}/bali-handara.jpg`, imageAlt: 'La porta di Handara, il portale balinese in pietra che si apre su un viale tra i prati, vista dal drone nella foschia' },
    { titoloGiorno: 'Giorno 8 — Le risaie di Jatiluwih e arrivo a Ubud', tratta: 'Munduk → Jatiluwih → Ubud, meglio con driver privato', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${IMG}/risaie-jatiluwih.jpg`, imageAlt: 'Le risaie a terrazze di Jatiluwih viste dall\'alto, tra palme e piccole capanne, Bali' },
    { titoloGiorno: 'Giorno 9 — Ubud e le risaie di Tegalalang', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-13-tegalalang.jpg`, imageAlt: 'Le risaie a terrazza di Tegalalang che scendono a onde verdi tra le palme, vicino a Ubud, Bali' },
    { titoloGiorno: 'Giorno 10 — Sidemen e la valle del Gunung Agung', tratta: 'Ubud → Sidemen e ritorno, 1h15-1h30 a tratta', pernottamento: 'Ubud', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'driver privato andata e ritorno indicativamente 350.000 IDR (20€)', destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-14-sidemen.jpg`, imageAlt: 'Le risaie della valle di Sidemen ai piedi del Gunung Agung, viste da un canale di irrigazione, Bali orientale' },
    { titoloGiorno: 'Giorno 11 — Uluwatu e la danza Kecak al tramonto', tratta: 'Ubud → Uluwatu', pernottamento: 'Uluwatu', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bali', immagine: `${LUNGO}/giorno-18-uluwatu.jpg`, imageAlt: 'Le scogliere a strapiombo di Uluwatu con il tempio Pura Luhur in cima, sopra il mare turchese di Bali' },
    { titoloGiorno: 'Giorno 12 — In barca veloce verso le Gili', tratta: 'Uluwatu → Sanur o Padang Bai → Gili in barca veloce', pernottamento: 'Isole Gili (Trawangan, Air o Meno)', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lombok-gili', immagine: `${IMG}/gili-dall-alto.jpg`, imageAlt: 'Un isolotto di sabbia bianca nel mare calmo delle Gili, con le isole vicine sullo sfondo, visto dal drone' },
    { titoloGiorno: 'Giorno 13 — Gili: tartarughe, biciclette e tramonto', pernottamento: 'Isole Gili (Trawangan, Air o Meno)', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lombok-gili', immagine: `${IMG}/gili-tramonto.jpg`, imageAlt: 'Il sole basso sul mare delle Gili, con un\'isoletta verde all\'orizzonte, visto dal drone al tramonto' },
    { titoloGiorno: 'Giorno 14 — Ritorno a Bali e partenza', tratta: 'Gili → Bali in barca veloce → aeroporto di Denpasar', intensita: 'leggero', destinazioneSlug: 'bali' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Volo interno', valore: 'Giacarta-Yogyakarta, un\'ora e mezza scarsa' },
    { etichetta: 'Treni e minivan per il Bromo', valore: 'treno Yogyakarta-Surabaya 75.000-285.000 IDR; minivan pubblico da Probolinggo circa 35.000 IDR a persona' },
    { etichetta: 'Jeep del Bromo', valore: '700.000-900.000 IDR a veicolo, da dividere in 4-6' },
    { etichetta: 'Driver privato a Bali', valore: 'di massima 300.000-600.000 IDR a tratta; Ubud-Sidemen andata e ritorno circa 350.000 IDR' },
    { etichetta: 'Alloggi', valore: 'economici a Giava e attorno ai vulcani, nella media a Bali e alle Gili' },
    { etichetta: 'Pasti', valore: 'pochi euro a piatto nei warung; di più nei locali turistici di Bali' },
  ],
}
