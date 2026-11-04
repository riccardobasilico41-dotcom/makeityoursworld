import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Perù in 14 giorni: Lima, Arequipa, il Titicaca,
// Cusco e Machu Picchu". Il testo narrativo resta nel markdown
// (src/content/viaggi/83-peru-due-settimane.md). `titoloGiorno` deve combaciare
// esattamente con le intestazioni "### Giorno N — ..." del file markdown.
//
// Versione di due settimane della Parte 1 del viaggio lungo (peru-itinerario),
// girata in senso inverso per salire di quota per gradi: Lima → Arequipa (2.300 m)
// → Colca → Puno (3.812 m) → Cusco (3.400 m) → Valle Sacra → Machu Picchu.
// Tratte, tempi e costi vengono dal viaggio lungo; le foto sono le stesse dei suoi giorni.

const IMG = '/images/viaggi/peru-itinerario'

export const peruDueSettimaneMeta: TripMeta = {
  tripSlug: 'peru-due-settimane',
  paeseSlug: 'peru',
  ritmo:
    'Medio: due giorni pieni di trasferimento in bus (Arequipa-Puno e Puno-Cusco) e giornate lente all\'arrivo in quota, alternate a giorni intensi nel Colca, sul Titicaca e a Machu Picchu. L\'ordine da sud a nord serve a salire di quota per gradi.',
  trasporti:
    'In autonomia: voli interni Lima-Arequipa e Cusco-Lima, tour o bus di linea per il Colca, bus turistici Arequipa-Puno e Puno-Cusco, barca sul Titicaca, auto con autista nella Valle Sacra, treno PeruRail/IncaRail da Ollantaytambo ad Aguas Calientes e bus navetta per Machu Picchu.',
  stile: ['cultura inca', 'alta quota', 'natura', 'sud america'],
  adattoA: [
    'chi va in Perù per la prima volta e ha due settimane',
    'chi vuole Machu Picchu, il Titicaca e il Colca senza correre',
    'chi teme l\'altitudine e preferisce salire un gradino alla volta',
    'chi può aggiungere 3-4 giorni per l\'Amazzonia da Puerto Maldonado o per la Laguna 69 a Huaraz',
  ],
  puntiForti: [
    'Machu Picchu al primo turno, con quaranta minuti di silenzio prima che arrivino i gruppi',
    'La notte in famiglia ad Amantaní, l\'unico momento del giro fuori dal circuito turistico',
    'I condor alla Cruz del Cóndor nel Canyon del Colca, quando si alzano con le correnti del mattino',
    'Il Monastero di Santa Catalina ad Arequipa, una città murata dentro la città',
    'La salita di quota per gradi, che fa arrivare a Cusco e a Machu Picchu già acclimatati',
  ],
  criticita: [
    'L\'altitudine resta il tema del viaggio: Puno sta a 3.812 metri e Cusco a 3.400, e i primi momenti in quota vanno presi piano anche dopo il Colca',
    'Huayna Picchu e Montaña Machu Picchu in alta stagione si esauriscono 3-4 mesi prima; biglietti solo su tuboleto.cultura.pe',
    'Due giornate se ne vanno quasi tutte in bus (Arequipa-Puno circa 6 ore, Puno-Cusco 7-8 ore)',
    'Finti tassisti negli aeroporti e cambiavalute di strada a Cusco: taxi solo prenotati o via app, cambio solo in banca o in casa de cambio autorizzata',
    'Le isole Uros sono una messa in scena turistica: il lato vero del lago è Amantaní, scomoda e fredda di notte',
    'L\'ultimo giorno ha due voli in fila (Cusco-Lima e l\'intercontinentale): serve margine tra i due',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'con amici, in autonomia, con voli interni, bus turistici, treno per Machu Picchu e tour organizzati nel Colca e sul Titicaca',
    cosaCercavo: undefined,
    treEsperienzePiuBelle:
      'Machu Picchu al primo turno prima dei gruppi, la notte in famiglia ad Amantaní sul Titicaca, i condor alla Cruz del Cóndor',
    cosaCambierei: 'Non sottovalutare l\'altitudine, portare scarpe comode e non farsi fregare dalle agenzie',
    aChiLoConsiglio: 'A chi va in Perù per la prima volta e ha due settimane, magari con qualche giorno in più per l\'Amazzonia',
  },
  tappeMappa: [
    { nome: 'Lima', destinazioneSlug: 'lima' },
    { nome: 'Arequipa e il Colca', destinazioneSlug: 'arequipa-colca' },
    { nome: 'Titicaca (Puno e Amantaní)', destinazioneSlug: 'lago-titicaca' },
    { nome: 'Cusco', destinazioneSlug: 'cusco' },
    { nome: 'Valle Sacra', destinazioneSlug: 'valle-sacra' },
    { nome: 'Machu Picchu', destinazioneSlug: 'machu-picchu' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Lima', tratta: 'Arrivo internazionale a Lima (Jorge Chávez) → Miraflores o Barranco, taxi prenotato o app', pernottamento: 'Lima, Miraflores o Barranco', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-01-lima.jpg`, imageAlt: 'Tramonto sulla scogliera del Malecón di Miraflores a Lima, con il faro, i grattacieli e un parapendio in volo sull\'oceano' },
    { titoloGiorno: 'Giorno 2 — Lima: centro storico, Miraflores e Barranco', pernottamento: 'Lima, Miraflores o Barranco', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-02-lima.jpg`, imageAlt: 'Vista panoramica della Plaza Mayor di Lima, con il Palazzo di Governo, la Cattedrale e gli edifici coloniali gialli del centro storico' },
    { titoloGiorno: 'Giorno 3 — Volo ad Arequipa, la città bianca', tratta: 'Lima → Arequipa, volo interno (circa 1h30), arrivo a 2.300 metri', pernottamento: 'Arequipa, centro storico', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: `${IMG}/giorno-14-arequipa-colca.jpg`, imageAlt: 'Il corridoio blu del Monastero di Santa Catalina ad Arequipa, con volte affrescate e vasi di piante lungo il porticato' },
    { titoloGiorno: 'Giorno 4 — Verso il Canyon del Colca', tratta: 'Arequipa → Canyon del Colca, tour di due giorni o bus di linea fino a Chivay, sosta ai bagni termali di La Calera', pernottamento: 'Chivay o Cabanaconde, Canyon del Colca', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: `${IMG}/giorno-15-arequipa-colca.jpg`, imageAlt: 'Vista dall\'alto del Canyon del Colca vicino a Chivay, con i terrazzamenti agricoli e il fiume sul fondo della valle avvolta nella foschia mattutina' },
    { titoloGiorno: 'Giorno 5 — La Cruz del Cóndor e ritorno ad Arequipa', tratta: 'Cruz del Cóndor → rientro ad Arequipa nel pomeriggio', pernottamento: 'Arequipa, centro storico', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: `${IMG}/giorno-16-arequipa-colca.jpg`, imageAlt: 'Un condor andino in volo ravvicinato, ali spiegate, sopra il Canyon del Colca alla Cruz del Cóndor' },
    { titoloGiorno: 'Giorno 6 — Da Arequipa a Puno, sul Titicaca', tratta: 'Arequipa → Puno, bus (circa 6h), arrivo a 3.812 metri', pernottamento: 'Puno', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lago-titicaca' },
    { titoloGiorno: 'Giorno 7 — Titicaca: le isole Uros e Taquile, notte ad Amantaní', tratta: 'Puno → isole Uros → Taquile → Amantaní, in barca', pernottamento: 'Amantaní, homestay in famiglia', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour di due giorni con homestay: indicativamente 30-60$ a persona', destinazioneSlug: 'lago-titicaca', immagine: '/images/peru/titicaca-uros-arazzo-riccardo.jpg', imageAlt: 'Una donna uros sorridente con il cappello di paglia mostra un arazzo ricamato sul lago Titicaca' },
    { titoloGiorno: 'Giorno 8 — Amantaní all\'alba e ritorno a Puno', tratta: 'Amantaní → Puno, in barca', pernottamento: 'Puno', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lago-titicaca', immagine: `${IMG}/giorno-12-lago-titicaca.jpg`, imageAlt: 'Vista aerea dall\'isola di Amantaní verso il lago Titicaca al tramonto, con i campi terrazzati e il tempio di Pachatata in primo piano' },
    { titoloGiorno: 'Giorno 9 — Da Puno a Cusco sull\'altopiano', tratta: 'Puno → Cusco, bus turistico (7-8h) con soste al valico de La Raya (oltre 4.300 m), Raqchi e Andahuaylillas', pernottamento: 'Cusco, centro storico o San Blas', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'cusco', immagine: `${IMG}/giorno-10-lago-titicaca.jpg`, imageAlt: 'Il tempio di Wiracocha a Raqchi, con le mura in adobe su base di pietra e le montagne dell\'altopiano sullo sfondo, una delle soste lungo la strada tra Puno e Cusco' },
    { titoloGiorno: 'Giorno 10 — Cusco: Qorikancha, Sacsayhuamán e San Blas', pernottamento: 'Cusco, centro storico o San Blas', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Boleto Turístico del Cusco: circa 130 soles, copre Sacsayhuamán, i siti della Valle Sacra e diversi musei', destinazioneSlug: 'cusco', immagine: '/images/peru/cusco-donne-muri-inca-riccardo.jpg', imageAlt: 'Due donne andine in abiti tradizionali rossi camminano tra i muri inca di Cusco' },
    { titoloGiorno: 'Giorno 11 — Valle Sacra: Pisac, Maras e Moray', tratta: 'Cusco → Pisac → saline di Maras → Moray → Ollantaytambo, auto con autista', pernottamento: 'Ollantaytambo, Valle Sacra', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Ingresso alle saline di Maras: circa 10 soles', destinazioneSlug: 'valle-sacra', immagine: '/images/peru/moray-terrazze-riccardo.jpg', imageAlt: 'Le terrazze circolari inca di Moray viste dall\'alto, con un\'agave in primo piano' },
    { titoloGiorno: 'Giorno 12 — Ollantaytambo e il treno per Aguas Calientes', tratta: 'Ollantaytambo → Aguas Calientes, treno PeruRail/IncaRail', pernottamento: 'Aguas Calientes', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Treno 70-500$ andata e ritorno secondo la classe (Expedition/Voyager, Vistadome, Hiram Bingham)', destinazioneSlug: 'machu-picchu', immagine: `${IMG}/giorno-08-machu-picchu.jpg`, imageAlt: 'Il treno PeruRail costeggia il fiume Urubamba in un canyon lungo la tratta verso Machu Picchu' },
    { titoloGiorno: 'Giorno 13 — Machu Picchu all\'apertura', tratta: 'Aguas Calientes → Machu Picchu (bus navetta o a piedi) → treno verso Ollantaytambo e trasferimento a Cusco', pernottamento: 'Cusco, centro storico o San Blas', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Bus navetta Consettur: circa 25 minuti, 24$ andata e ritorno; ingresso al sito circa 152 soles (circa 200 soles con Huayna Picchu o Montaña Machu Picchu)', destinazioneSlug: 'machu-picchu', immagine: '/images/peru/machu-picchu-lama-terrazze-riccardo.jpg', imageAlt: 'Un lama solitario pascola sui terrazzamenti inca di Machu Picchu nella nebbia del mattino' },
    { titoloGiorno: 'Giorno 14 — Volo per Lima e rientro', tratta: 'Cusco → Lima, volo interno (circa 1h20) → volo intercontinentale di rientro', pernottamento: 'Volo di rientro', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'lima', immagine: `${IMG}/giorno-31-lima.jpg`, imageAlt: 'Vista aerea della nuova area terminal dell\'aeroporto internazionale Jorge Chávez di Lima' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Voli interni', valore: 'Lima-Arequipa e Cusco-Lima, economici se prenotati con anticipo' },
    { etichetta: 'Bus turistici', valore: 'Arequipa-Puno (circa 6h) e Puno-Cusco (7-8h, con soste)' },
    { etichetta: 'Machu Picchu', valore: 'treno 70-500$ A/R secondo la classe, bus navetta 24$ A/R, ingresso circa 152 soles (circa 200 soles con Huayna Picchu o Montaña Machu Picchu)' },
    { etichetta: 'Boleto Turístico del Cusco', valore: 'circa 130 soles; saline di Maras a parte, circa 10 soles' },
    { etichetta: 'Tour e homestay sul Titicaca', valore: 'indicativamente 30-60$ a persona per due giorni con notte ad Amantaní' },
    { etichetta: 'Colca', valore: 'tour di due giorni o bus di linea; boleto turistico del Colca a parte' },
    { etichetta: 'Estensione Amazzonia', valore: 'lodge a Tambopata indicativamente 300-600$ per 3 notti, tutto incluso, più il volo Cusco-Puerto Maldonado' },
  ],
}
