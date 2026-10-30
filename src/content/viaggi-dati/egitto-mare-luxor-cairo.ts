import type { TripMeta } from '@/lib/types'

// Overlay di metadati per "Egitto in 11 giorni: il Cairo, le piramidi, Luxor e
// il Mar Rosso" (src/content/viaggi/71-egitto-mare-luxor-cairo.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del markdown. Guida non vissuta: nessun campo personale, immagini da recuperare.

export const egittoMareLuxorCairoMeta: TripMeta = {
  tripSlug: 'egitto-mare-luxor-cairo',
  paeseSlug: 'egitto',
  ritmo:
    'Intenso nei primi sei giorni, con sveglie all\'alba al Cairo e a Luxor per evitare caldo e gruppi; poi quattro giorni di mare a ritmo libero prima del volo diretto di rientro.',
  trasporti:
    'In autonomia: Uber e autista privato al Cairo, volo interno Cairo-Luxor, auto con autista per la riva ovest e per il trasferimento Luxor-Marsa Alam (o Hurghada), escursioni in barca dal resort, volo di rientro dal Mar Rosso.',
  stile: ['archeologia', 'mare', 'snorkeling', 'prima volta in egitto'],
  adattoA: [
    'chi va in Egitto per la prima volta e ha 10-12 giorni',
    'chi vuole piramidi, templi e mare nello stesso viaggio senza crociera',
    'coppie e famiglie con ragazzi che reggono le sveglie presto',
    'chi preferisce chiudere il viaggio con la parte rilassante',
  ],
  puntiForti: [
    'Giza, Saqqara e Dahshur in un giorno e mezzo, per capire l\'intera evoluzione della piramide',
    'Il Grand Egyptian Museum con il corredo completo di Tutankhamon',
    'La riva ovest di Luxor all\'alba e il volo in mongolfiera',
    'Il reef dalla riva a Marsa Alam, con tartarughe ad Abu Dabbab e delfini a Dolphin House',
    'Rientro con volo diretto dal mare, senza tornare al Cairo',
  ],
  criticita: [
    'Prezzi dei biglietti aumentati più volte dal 2024: tra GEM, Giza e Luxor si arriva a 120-160 € a persona solo di ingressi, solo con carta',
    'Insistenza commerciale forte a Giza e Luxor: cammelli, finte guide, negozi di papiri e profumi',
    'Da maggio a settembre Luxor supera i 40 °C: si visita solo all\'alba',
    'Da dicembre a marzo il Mar Rosso è sui 22 °C e ventoso, con uscite in barca a volte annullate',
    'Sharm el-Sheikh non è collegata a Luxor via terra in tempi ragionevoli: serve un volo in più',
  ],
  budgetTotale: 'indicativamente 1.100-1.700 € a persona in due, voli internazionali esclusi',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      'Le piramidi di Giza all\'apertura, la Valle dei Re all\'alba, il reef di Abu Dabbab dalla riva',
  },
  tappeMappa: [
    { nome: 'Il Cairo', destinazioneSlug: 'cairo' },
    { nome: 'Giza, Saqqara e Dahshur', destinazioneSlug: 'piramidi' },
    { nome: 'Luxor', destinazioneSlug: 'luxor' },
    { nome: 'Edfu' },
    { nome: 'Marsa Alam', destinazioneSlug: 'mar-rosso' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo al Cairo', tratta: 'Aeroporto del Cairo → Giza, Uber o transfer', pernottamento: 'Giza, vicino alle piramidi', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'visto all\'arrivo 30 $', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-01-cairo.jpg', imageAlt: 'Le tre piramidi di Giza viste dall\'alto, con il deserto e le prime case del Cairo sullo sfondo' },
    { titoloGiorno: 'Giorno 2 — Le piramidi di Giza e il Grand Egyptian Museum', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Giza 700 EGP, interno di Cheope circa 1.500 EGP, GEM 1.830 EGP (circa 35 $)', destinazioneSlug: 'piramidi', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg', imageAlt: 'Le piramidi di Giza che si stagliano sul deserto in una giornata limpida' },
    { titoloGiorno: 'Giorno 3 — Saqqara, Dahshur e la sera al Khan el-Khalili', tratta: 'Giza → Saqqara → Dahshur → Cairo islamico, auto con autista', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'autista 30-50 $, Saqqara 600 EGP, Dahshur 200 EGP', destinazioneSlug: 'piramidi', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-03-piramidi.jpg', imageAlt: 'La piramide a gradoni di Djoser a Saqqara con il recinto funerario in pietra in primo piano' },
    { titoloGiorno: 'Giorno 4 — Il Cairo islamico e copto, volo per Luxor', tratta: 'Cairo → Luxor, volo di un\'ora', pernottamento: 'Luxor, riva est', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Cittadella 550 EGP, volo 60-120 €, tempio di Luxor 500 EGP', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg', imageAlt: 'La moschea-madrasa del sultano Hassan e la moschea di al-Rifa\'i con i loro minareti, nel Cairo islamico' },
    { titoloGiorno: 'Giorno 5 — Luxor, riva ovest: Valle dei Re e tempio di Hatshepsut', pernottamento: 'Luxor, riva est', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Valle dei Re 750 EGP, Tutankhamon circa 700, Hatshepsut 440, Medinet Habu 220; autista 25-40 $', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-05-luxor.jpg', imageAlt: 'Il tempio funerario di Hatshepsut a Deir el-Bahari, con le terrazze ai piedi della parete rocciosa' },
    { titoloGiorno: 'Giorno 6 — Mongolfiera all\'alba, Karnak e il tempio di Luxor', pernottamento: 'Luxor, riva est', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'mongolfiera 50-100 $, Karnak 600 EGP', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-06-luxor.jpg', imageAlt: 'Mongolfiere che si alzano all\'alba sopra la riva ovest di Luxor' },
    { titoloGiorno: 'Giorno 7 — Da Luxor al Mar Rosso', tratta: 'Luxor → Edfu → Marsa Alam, 4-4,5 ore con autista (Hurghada: 4 ore)', pernottamento: 'Marsa Alam, resort con reef', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'auto privata 100-150 $, tempio di Edfu 550 EGP', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-07-mar-rosso.jpg', imageAlt: 'La costa egiziana del Mar Rosso vista dalla Stazione Spaziale Internazionale, con il deserto orientale' },
    { titoloGiorno: 'Giorno 8 — Mare: la barriera corallina dalla riva', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'battesimo del mare 60-90 $', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-08-mar-rosso.jpg', imageAlt: 'Un pesce pappagallo tra i coralli della barriera di Marsa Shagra, a nord di Marsa Alam' },
    { titoloGiorno: 'Giorno 9 — In barca alle isole o immersioni', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Dolphin House 40-60 $, due immersioni 70-110 $', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg', imageAlt: 'Coralli a tavola e acqua turchese su una barriera corallina del Mar Rosso' },
    { titoloGiorno: 'Giorno 10 — Wadi el Gemal o giornata libera', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'escursione Wadi el Gemal 35-60 $', destinazioneSlug: 'mar-rosso' },
    { titoloGiorno: 'Giorno 11 — Rientro', tratta: 'Marsa Alam (o Hurghada) → Italia, volo diretto', intensita: 'leggero', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg', imageAlt: 'Coralli a tavola e acqua turchese su una barriera corallina del Mar Rosso' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Visto turistico', valore: '30 $ all\'arrivo (dal 1° marzo 2026) o come e-visa ufficiale' },
    { etichetta: 'Biglietti dei siti', valore: '120-160 € a persona, 55-60 € in più con Seti I e l\'interno di Cheope' },
    { etichetta: 'Volo interno Cairo-Luxor', valore: '60-120 €' },
    { etichetta: 'Autisti e trasferimenti', valore: '60-100 € a testa in due persone' },
    { etichetta: 'Alloggi', valore: '50-90 € a camera al Cairo e a Luxor, 70-130 € all-inclusive al mare' },
    { etichetta: 'Escursioni, mongolfiera e immersioni', valore: '120-250 € a persona' },
    { etichetta: 'Mance (baksheesh)', valore: '40-70 € a persona per il viaggio' },
  ],
}
