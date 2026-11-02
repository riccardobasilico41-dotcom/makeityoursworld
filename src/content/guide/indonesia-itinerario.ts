import type { Guida } from './types'

/**
 * Guida PDF «Indonesia in 35 giorni». Il racconto viene da src/content/viaggi/48-indonesia-itinerario.md
 * (itinerario composito: il meglio di sei viaggi in Indonesia fatti con amici, messi in fila in 35 giorni).
 * Ingresso, emergenze, ambasciata, sicurezza e salute: Viaggiare Sicuri, scheda Indonesia (agg. 16/10/2026).
 * Ospedali: elenco del governo britannico (agg. 9/7/2026) e sito di BIMC. Bromo: sito del parco (TNBTS).
 * I costi «indicativi» sono quelli annotati nel viaggio: biglietti e tariffe dei parchi non li ho
 * trovati su fonti ufficiali e la guida rimanda ai siti.
 *
 * Distanze su strada: OSRM su OpenStreetMap, traffico libero. Voli, barche e traghetti: linea d'aria.
 * Coordinate: OpenStreetMap (Nominatim).
 */

export const guidaIndonesia: Guida = {
  slug: 'indonesia-itinerario',
  tripSlug: 'indonesia-itinerario',
  paese: 'Indonesia',
  titolo: 'Indonesia',
  sottotitolo: 'Da Sumatra a Sulawesi, isola dopo isola: oranghi, vulcani, Bali, il Rinjani, Komodo, Flores e Tana Toraja. Trentacinque giorni.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'In Indonesia ci sono stato sei volte, sempre con amici. Questo giro mette in fila in trentacinque giorni il meglio di quei viaggi: sette isole, dagli oranghi di Sumatra alle case tongkonan di Sulawesi. Raja Ampat resta fuori, perché la sua stagione migliore è opposta a quella del resto del percorso.',
    'Funziona anche diviso in due: la Parte 1 (Sumatra, Giava e Bali, 20 giorni) e la Parte 2 (Lombok, Komodo, Flores e Sulawesi, 15 giorni). Questa guida mette in fila distanze, coordinate, i documenti da compilare prima di entrare, le zone in cui la Farnesina chiede cautela, ospedali e contatti ufficiali.',
    'Regole e contatti li ho ricontrollati a novembre 2026. I biglietti di templi e parchi cambiano spesso e non sono riuscito a verificarli sulle fonti ufficiali: dove serve ti indico il sito da guardare.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con distanze, tempi, coordinate GPS e un QR verso la pagina del sito',
    'e-VOA, All Indonesia Arrival Card e tassa di Bali: cosa compilare e dove',
    'Le aree di cautela della Farnesina lungo il percorso: Lombok, Flores, Sulawesi meridionale',
    'Ambasciata a Giacarta, consolato onorario a Bali, ospedali di riferimento, numeri di emergenza',
    'Le truffe di Probolinggo e del Bromo, con i prezzi di riferimento annotati nel viaggio',
    'Frasario indonesiano di base',
  ],
  tappe: [
    { nome: 'Bukit Lawang', gps: [3.54803, 98.12717], giorno: 'G1-G2', etichetta: 'sinistra' },
    { nome: 'Berastagi', gps: [3.19287, 98.50918], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Lago Toba · Samosir', gps: [2.67057, 98.86082], giorno: 'G4-G5', etichetta: 'sotto' },
    { nome: 'Giacarta', gps: [-6.1754, 106.82717], giorno: 'G6', etichetta: 'sopra' },
    { nome: 'Yogyakarta', gps: [-7.81915, 110.37064], giorno: 'G6-G8', etichetta: 'sotto' },
    { nome: 'Bromo', gps: [-7.94207, 112.95298], giorno: 'G9-G10', etichetta: 'sopra' },
    { nome: 'Ijen', gps: [-8.05792, 114.24171], giorno: 'G10-G11', etichetta: 'sopra' },
    { nome: 'Bali · Ubud', gps: [-8.51702, 115.25505], giorno: 'G12-G20', etichetta: 'sotto' },
    { nome: 'Rinjani · Gili', gps: [-8.41022, 116.39723], giorno: 'G21-G25', etichetta: 'sopra' },
    { nome: 'Labuan Bajo · Komodo', gps: [-8.48993, 119.87646], giorno: 'G26-G28', etichetta: 'sotto' },
    { nome: 'Bajawa', gps: [-8.7851, 120.97521], giorno: 'G29', etichetta: 'sotto' },
    { nome: 'Kelimutu · Ende', gps: [-8.76551, 121.79834], giorno: 'G30-G31', etichetta: 'destra' },
    { nome: 'Makassar', gps: [-5.13389, 119.40552], giorno: 'G32 · G35', etichetta: 'sinistra' },
    { nome: 'Tana Toraja', gps: [-2.97046, 119.89872], giorno: 'G32-G34', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Medan e trasferimento a Bukit Lawang',
      paginaSito: '/destinazioni/indonesia/sumatra',
      racconto:
        'Siamo atterrati al Kualanamu International, lo scalo di Medan, e in auto privata siamo andati a Bukit Lawang: tre ore abbondanti su strade che peggiorano avvicinandosi al parco. Guesthouse lungo il fiume Bohorok, comoda per partire all\'alba. La sera abbiamo ripassato le regole del trekking: guida certificata, niente cibo per attirare gli animali, niente scarpe da città.',
      tratte: [{ da: 'Aeroporto di Kualanamu', a: 'Bukit Lawang', km: 115, minuti: 107, nelMioViaggio: 'tre ore abbondanti' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Bukit Lawang, guesthouse lungo il fiume Bohorok (nome non annotato).',
    },
    {
      numero: 2,
      titolo: 'Trekking tra gli oranghi del Gunung Leuser',
      paginaSito: '/esperienze/indonesia/trekking-oranghi-bukit-lawang',
      racconto:
        'Trekking nella giungla del Parco Nazionale del Gunung Leuser: fango, radici, caldo umido e un paio d\'ore senza vedere niente. Poi un orango di Sumatra è sceso su un ramo a pochi metri, ci ha guardato e ha ripreso a mangiare. Alcune guide attirano gli animali con il cibo: va rifiutato al momento della prenotazione, scegliendo solo guide registrate al centro visitatori del parco. Rientro a Bukit Lawang nel pomeriggio.',
      tratte: [],
      senzaStrada: 'A piedi nel parco con la guida.',
      luoghi: [
        {
          nome: 'Parco Nazionale del Gunung Leuser',
          indirizzo: 'Ingresso da Bukit Lawang, Langkat, Sumatra Settentrionale',
          gps: [3.54803, 98.12717],
          nota: 'Patrimonio UNESCO. Solo con guida certificata; permesso del parco da chiedere alla guida.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Bukit Lawang.',
      costiNoti: ['Trekking guidato di mezza giornata: indicativamente 25-40 €, di più per i multi-giorno (nel viaggio)'],
    },
    {
      numero: 3,
      titolo: 'Berastagi, i vulcani Sibayak e Sinabung',
      paginaSito: '/destinazioni/indonesia/sumatra',
      racconto:
        'Trasferimento sull\'altopiano di Berastagi, sotto i coni del Sibayak e del Sinabung. Qui si pone la domanda che torna per tutta Sumatra: scooter o driver? Le strade di montagna sono strette e dissestate, e con le soste ci vogliono 5-8 ore. Chi vuole sale sul Sibayak, con il cratere che fuma da vicino; per tutti, bagno nelle sorgenti calde ai piedi del vulcano.',
      tratte: [{ da: 'Bukit Lawang', a: 'Berastagi', km: 98, minuti: 110, nelMioViaggio: '5-8 ore con le soste' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Berastagi.',
      nota: 'In scooter solo con vera esperienza di guida in montagna. La Farnesina chiede la patente internazionale valida anche per le due ruote.',
      costiNoti: ['Driver privato per la tratta: indicativamente 800.000-900.000 IDR (45-50 €)'],
    },
    {
      numero: 4,
      titolo: 'Verso il Lago Toba e l\'isola di Samosir',
      paginaSito: '/destinazioni/indonesia/sumatra',
      racconto:
        'Strada fino a Parapat, il porto sul Lago Toba, il più grande lago vulcanico del mondo, poi il traghetto per Samosir, l\'isola al centro del cratere. Ci siamo sistemati in una homestay e da lì il viaggio ha rallentato da solo.',
      tratte: [
        { da: 'Berastagi', a: 'Parapat', km: 111, minuti: 82, nelMioViaggio: 'circa 3 ore' },
        { da: 'Parapat', a: 'Tuktuk (Samosir)', km: 9, minuti: 45, mezzo: 'traghetto (linea d\'aria)' },
      ],
      luoghi: [],
      mangiare: [],
      dormire: 'Isola di Samosir, homestay (nome non annotato).',
      costiNoti: ['Driver privato Berastagi-Parapat: indicativamente 700.000-800.000 IDR (40-45 €)'],
    },
    {
      numero: 5,
      titolo: 'Samosir e i villaggi Batak',
      paginaSito: '/destinazioni/indonesia/sumatra',
      racconto:
        'Giornata per la cultura Batak, in gran parte cristiana: villaggi con le case dal tetto a sella, le tombe di pietra degli antenati e, nel periodo giusto, le danze Sigale-gale con le marionette di legno. Ci siamo mossi in motorino, il mezzo più pratico tra i villaggi sparsi; qui le strade sono più tranquille che sulla terraferma.',
      tratte: [],
      senzaStrada: 'Motorino a noleggio sull\'isola.',
      luoghi: [
        { nome: 'Huta Siallagan', indirizzo: 'Ambarita, Samosir', nota: 'Villaggio Batak con le sedie di pietra.', fonti: [] },
      ],
      mangiare: [],
      dormire: 'Samosir.',
    },
    {
      numero: 6,
      titolo: 'Giacarta e il volo verso Yogyakarta',
      paginaSito: '/destinazioni/indonesia/giava',
      racconto:
        'Da Samosir a Medan e volo per Giacarta, con un limite chiaro: una giornata, non di più. Abbiamo girato Kota Tua, la vecchia Batavia olandese con la piazza Fatahillah, e il Monas, l\'obelisco del monumento nazionale. In serata volo per Yogyakarta, base nella zona di Prawirotaman, più tranquilla di Malioboro.',
      tratte: [
        { da: 'Medan', a: 'Giacarta', km: 1387, minuti: 150, mezzo: 'volo (linea d\'aria)' },
        { da: 'Giacarta', a: 'Yogyakarta', km: 451, minuti: 80, mezzo: 'volo (linea d\'aria)', nelMioViaggio: 'un\'ora e mezza scarsa' },
      ],
      luoghi: [
        { nome: 'Kota Tua · Taman Fatahillah', indirizzo: 'Pinangsia, Taman Sari, Jakarta Barat', gps: [-6.13472, 106.81323], fonti: ['osm'] },
        { nome: 'Monas (Monumen Nasional)', indirizzo: 'Medan Merdeka, Gambir, Jakarta Pusat', gps: [-6.1754, 106.82717], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Yogyakarta, zona Prawirotaman.',
      nota: 'A Giacarta la Farnesina segnala proteste violente nell\'agosto-settembre 2025: evita assembramenti e manifestazioni.',
    },
    {
      numero: 7,
      titolo: 'Alba a Borobudur, tramonto a Prambanan',
      paginaSito: '/destinazioni/indonesia/giava',
      racconto:
        'Sveglia col buio per l\'alba a Borobudur, il tempio buddista più grande del mondo. Il biglietto per salire sulla struttura è a numero chiuso e finisce presto: va prenotato prima di partire. Nel tardo pomeriggio Prambanan, il complesso induista più grande dell\'Indonesia, con le guglie che si accendono negli ultimi minuti di sole.',
      tratte: [
        { da: 'Yogyakarta', a: 'Borobudur', km: 46, minuti: 40 },
        { da: 'Yogyakarta', a: 'Prambanan', km: 19, minuti: 19 },
      ],
      luoghi: [
        { nome: 'Candi Borobudur', indirizzo: 'Borobudur, Magelang, Giava Centrale', web: 'borobudurpark.com', gps: [-7.60641, 110.20454], nota: 'Salita sulla struttura a numero chiuso. Tariffe e fasce orarie da controllare sul sito ufficiale: quelle che girano online non coincidono.', fonti: ['osm'] },
        { nome: 'Candi Prambanan', indirizzo: 'Jl. Jogja-Solo, Bokoharjo, Sleman', gps: [-7.75223, 110.49153], nota: 'Biglietto da controllare sul sito ufficiale.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Yogyakarta.',
    },
    {
      numero: 8,
      titolo: 'Yogyakarta: kraton, batik e Malioboro',
      paginaSito: '/destinazioni/indonesia/giava',
      racconto:
        'Giornata in città: il kraton, il palazzo del sultano ancora in funzione, un laboratorio di batik e la sera la passeggiata su Malioboro tra lo street food. Da provare il gudeg, lo stufato dolce di jackfruit. In città lo scooter è comodo solo per chi sa guidare nel traffico indonesiano; per gli altri ci sono Grab e Gojek.',
      tratte: [],
      senzaStrada: 'A piedi, scooter o Grab e Gojek.',
      luoghi: [
        { nome: 'Kraton Ngayogyakarta Hadiningrat', indirizzo: 'Kraton, Yogyakarta', gps: [-7.8088, 110.36273], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Yogyakarta.',
    },
    {
      numero: 9,
      titolo: 'In treno verso Surabaya e trasferimento a Cemoro Lawang',
      paginaSito: '/destinazioni/indonesia/giava',
      racconto:
        'Treno da Yogyakarta a Surabaya Gubeng, 4-5 ore, poi un regionale di circa 2 ore fino a Probolinggo. All\'uscita della stazione ci sono i tout: dicono che i minivan pubblici sono già partiti o pieni e propongono auto private a prezzi gonfiati. Abbiamo tirato dritto fino al minivan pubblico per Cemoro Lawang, il villaggio sul bordo della caldera.',
      tratte: [
        { da: 'Yogyakarta', a: 'Surabaya', km: 270, minuti: 270, mezzo: 'treno (linea d\'aria)', nelMioViaggio: '4-5 ore' },
        { da: 'Surabaya Gubeng', a: 'Probolinggo', km: 99, minuti: 120, mezzo: 'treno (distanza su strada)', nelMioViaggio: 'circa 2 ore' },
        { da: 'Probolinggo', a: 'Caldera del Bromo', km: 49, minuti: 59, mezzo: 'minivan' },
      ],
      luoghi: [
        { nome: 'Stasiun Surabaya Gubeng', indirizzo: 'Jl. Gubeng Masjid, Surabaya', web: 'kai.id', gps: [-7.26531, 112.75264], nota: 'Biglietti dei treni sul sito o sull\'app delle ferrovie (KAI).', fonti: ['osm', 'kai'] },
      ],
      mangiare: [],
      dormire: 'Cemoro Lawang (nome non annotato).',
      costiNoti: ['Treno Yogyakarta-Surabaya: 75.000-285.000 IDR secondo la classe (nel viaggio)', 'Minivan pubblico Probolinggo-Cemoro Lawang: circa 35.000 IDR a persona (nel viaggio)'],
    },
    {
      numero: 10,
      titolo: 'Alba al Gunung Bromo e la cascata di Madakaripura',
      paginaSito: '/esperienze/indonesia/alba-bromo-jeep',
      racconto:
        'Partiti verso le tre di notte in jeep condiviso per il punto panoramico del Penanjakan. L\'alba con il Bromo che fuma e il Semeru sullo sfondo vale la sveglia, anche se è un parcheggio con centinaia di jeep. Poi a piedi attraverso il Mare di Sabbia fino all\'orlo del cratere. Servono strati pesanti: in quota di notte fa freddo. Nel pomeriggio la cascata di Madakaripura e il lungo trasferimento verso Licin.',
      tratte: [{ da: 'Bromo', a: 'Licin (Banyuwangi)', km: 225, minuti: 209 }],
      luoghi: [
        {
          nome: 'Parco Nazionale Bromo Tengger Semeru',
          indirizzo: 'Punto panoramico del Penanjakan e Mare di Sabbia',
          web: 'bromotenggersemeru.org',
          gps: [-7.90373, 112.95214],
          nota: 'Registrazione online obbligatoria per entrare (dal 2024). Il parco chiude per alcune feste (Nyepi, Wulan Kapitu): controlla le notizie sul sito prima di andare.',
          fonti: ['osm', 'tnbts'],
        },
      ],
      mangiare: [],
      dormire: 'Licin o Banyuwangi.',
      costiNoti: ['Jeep condiviso: 700.000-900.000 IDR per veicolo, diviso fra 4-6 persone (nel viaggio). Diffida di chi chiede il doppio'],
    },
    {
      numero: 11,
      titolo: 'Il fuoco blu del Kawah Ijen',
      paginaSito: '/destinazioni/indonesia/giava',
      racconto:
        'Partiti verso l\'una di notte, saliti al buio con la maschera antigas e scesi nel cratere per il fuoco blu: dal vivo le fiamme sono più piccole che in foto. Lungo lo stesso sentiero passano i minatori di zolfo con ceste da ottanta chili sulle spalle. Al ritorno, con la luce, il lago acido turchese. Resto della giornata per riposare.',
      tratte: [{ da: 'Licin', a: 'Kawah Ijen (parcheggio)', km: 18, minuti: 17 }],
      luoghi: [
        { nome: 'Kawah Ijen', indirizzo: 'Banyuwangi-Bondowoso, Giava Orientale', gps: [-8.05792, 114.24171], nota: 'Maschera antigas indispensabile: i fumi di zolfo sono pericolosi. Accesso e orari possono cambiare con l\'attività del vulcano.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Licin o Banyuwangi.',
    },
    {
      numero: 12,
      titolo: 'Il traghetto per Bali e arrivo a Ubud',
      paginaSito: '/destinazioni/indonesia/bali',
      racconto:
        'Dal porto di Ketapang il traghetto per Gilimanuk, sulla punta ovest di Bali: 30-60 minuti di traversata, partenze ogni quarto d\'ora giorno e notte. Poi circa due ore e mezza di strada fino a Ubud, la base per la parte centrale dell\'isola. Il sud dei beach club intorno a Seminyak in questo giro non ha una giornata dedicata.',
      tratte: [
        { da: 'Licin', a: 'Porto di Ketapang', km: 25, minuti: 22 },
        { da: 'Ketapang', a: 'Gilimanuk', km: 5, minuti: 45, mezzo: 'traghetto (linea d\'aria)', nelMioViaggio: '30-60 minuti più carico e scarico' },
        { da: 'Gilimanuk', a: 'Ubud', km: 129, minuti: 100, nelMioViaggio: 'circa due ore e mezza' },
      ],
      luoghi: [
        { nome: 'Porto di Ketapang', indirizzo: 'Ketapang, Banyuwangi', web: 'ferizy.com', gps: [-8.14264, 114.40045], nota: 'Biglietti dei traghetti ASDP sul portale Ferizy.', fonti: ['osm', 'ferizy'] },
      ],
      mangiare: [],
      dormire: 'Ubud (nome non annotato).',
      nota: 'Bali chiede a ogni turista straniero una tassa di 150.000 IDR, anche arrivando da altre isole indonesiane: si paga online su lovebali.baliprov.go.id. Si passa al fuso WITA, un\'ora avanti rispetto a Giava.',
    },
    {
      numero: 13,
      titolo: 'Ubud e le risaie di Tegalalang',
      paginaSito: '/destinazioni/indonesia/bali',
      racconto:
        'Le risaie a terrazza di Tegalalang, che scendono a onde lungo la collina. Chi vuole fatica in più fa il trekking all\'alba sul Gunung Batur, partendo nel cuore della notte; in alternativa una giornata lenta tra templi e mercati del centro.',
      tratte: [{ da: 'Ubud', a: 'Tegalalang', km: 14, minuti: 17 }],
      luoghi: [
        { nome: 'Risaie di Tegalalang', indirizzo: 'Kedisan, Tegallalang, Gianyar', gps: [-8.42855, 115.27988], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Ubud.',
      nota: 'La Farnesina sconsiglia il contatto con le scimmie del Monkey Forest di Ubud: a Bali c\'è la rabbia.',
    },
    {
      numero: 14,
      titolo: 'Sidemen, la pace delle risaie',
      paginaSito: '/destinazioni/indonesia/bali',
      racconto:
        'Gita nella valle di Sidemen, sotto il Gunung Agung: terrazze meno turistiche di Tegalalang, quasi nessun pullman. Abbiamo camminato tra le risaie, siamo passati dai tessitori di songket e ci siamo fermati in un warung con vista sul vulcano.',
      tratte: [{ da: 'Ubud', a: 'Sidemen', km: 36, minuti: 39, nelMioViaggio: '1h15-1h30 di scooter' }],
      luoghi: [{ nome: 'Valle di Sidemen', indirizzo: 'Sidemen, Karangasem', gps: [-8.48443, 115.43867], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Ubud.',
      costiNoti: ['Driver privato andata e ritorno: indicativamente 350.000 IDR (20 €)'],
    },
    {
      numero: 15,
      titolo: 'Amed e il mare a est',
      paginaSito: '/destinazioni/indonesia/bali',
      racconto:
        'Gita ad Amed, sulla costa nord-orientale: sabbia nera, barche dei pescatori e il relitto della USAT Liberty a Tulamben, raggiungibile in snorkeling dalla spiaggia. Per chi più avanti arriva alle Gili e a Komodo è una giornata di decompressione, non la tappa di mare del viaggio.',
      tratte: [{ da: 'Ubud', a: 'Amed', km: 81, minuti: 66, nelMioViaggio: 'circa 2 ore' }],
      luoghi: [
        { nome: 'Amed', indirizzo: 'Purwa Kerthi, Abang, Karangasem', gps: [-8.33458, 115.64094], fonti: ['osm'] },
        { nome: 'Relitto USAT Liberty', indirizzo: 'Tulamben, Kubu, Karangasem', gps: [-8.29488, 115.59419], nota: 'Coordinate del villaggio.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Ubud.',
      costiNoti: ['Driver privato andata e ritorno: indicativamente 500.000 IDR (28-30 €)'],
    },
    {
      numero: 16,
      titolo: 'Munduk e le cascate, verso Lovina',
      paginaSito: '/destinazioni/indonesia/bali',
      racconto:
        'Salita verso Munduk, sull\'altopiano del nord tra caffè e cacao, con sosta al tempio sul lago Beratan. Le cascate di Munduk e Melanting si raggiungono con una breve camminata nella foresta. Poi discesa a Lovina, sulla costa nord, dove abbiamo dormito.',
      tratte: [
        { da: 'Ubud', a: 'Munduk', km: 58, minuti: 65 },
        { da: 'Munduk', a: 'Lovina', km: 41, minuti: 46 },
      ],
      luoghi: [
        { nome: 'Pura Ulun Danu Beratan', indirizzo: 'Candikuning, Baturiti, Tabanan', gps: [-8.27551, 115.16626], fonti: ['osm'] },
        { nome: 'Munduk', indirizzo: 'Banjar, Buleleng', gps: [-8.26837, 115.07771], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Lovina.',
      costiNoti: ['Driver privato per l\'anello: indicativamente 500.000-600.000 IDR (28-35 €)'],
    },
    {
      numero: 17,
      titolo: 'Lovina e i delfini all\'alba',
      paginaSito: '/destinazioni/indonesia/bali',
      racconto:
        'Uscita in barca prima dell\'alba a cercare i delfini. È un\'attività turistica a tutti gli effetti, con decine di barche che inseguono gli stessi gruppi; vedere i delfini saltare con il mare ancora piatto vale comunque la sveglia. In mattinata rientro a Ubud.',
      tratte: [{ da: 'Lovina', a: 'Ubud', km: 79, minuti: 68 }],
      luoghi: [{ nome: 'Lovina Beach', indirizzo: 'Kalibukbuk, Buleleng', gps: [-8.15931, 115.0256], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Ubud.',
    },
    {
      numero: 18,
      titolo: 'Uluwatu: surf, spiagge e la danza Kecak al tramonto',
      paginaSito: '/destinazioni/indonesia/bali',
      racconto:
        'A sud, Uluwatu: scogliere a picco e spiagge in fondo alle scalinate, Padang Padang, Suluban con il bar nella grotta, Bingin. Onde da reef break, più per chi surfa già. Nel tardo pomeriggio il tempio di Uluwatu e al tramonto la danza Kecak, settanta uomini in cerchio che fanno la musica con la voce. È la cosa di Bali che ricordo di più.',
      tratte: [{ da: 'Ubud', a: 'Uluwatu', km: 54, minuti: 53 }],
      luoghi: [{ nome: 'Pura Luhur Uluwatu', indirizzo: 'Jl. Raya Uluwatu, Pecatu, Kuta Selatan', gps: [-8.82937, 115.08434], nota: 'Biglietto del tempio e della Kecak da controllare sul posto.', fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Uluwatu.',
      nota: 'La Farnesina segnala forti correnti sulle spiagge dell\'Oceano Indiano: fai il bagno solo dove è sorvegliato.',
    },
    {
      numero: 19,
      titolo: 'Canggu e la vita notturna di Bali',
      paginaSito: '/destinazioni/indonesia/bali',
      racconto:
        'Trasferimento a Canggu, la Bali della festa: beach club, musica dal vivo, surfisti e nomadi digitali. Chi ha tempo passa da Tanah Lot, il tempio sullo scoglio circondato dalla marea, a mezz\'ora, meglio al tramonto.',
      tratte: [
        { da: 'Uluwatu', a: 'Canggu', km: 35, minuti: 38 },
        { da: 'Canggu', a: 'Tanah Lot', km: 10, minuti: 14 },
      ],
      luoghi: [{ nome: 'Tanah Lot', indirizzo: 'Beraban, Kediri, Tabanan', gps: [-8.62123, 115.08688], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Canggu.',
      nota: 'La Farnesina chiede di non bere alcolici di dubbia provenienza: ci sono stati casi mortali di avvelenamento da metanolo.',
    },
    {
      numero: 20,
      titolo: 'Giornata a Nusa Penida',
      paginaSito: '/esperienze/indonesia/giornata-nusa-penida',
      racconto:
        'Barca veloce da Sanur di primo mattino e giro di Kelingking Beach, Angel\'s Billabong, Broken Beach e, per chi lo aggiunge, lo snorkeling con le mante a Manta Point. Meglio la prima barca: a metà giornata il sentiero di Kelingking è una coda. Chi ha tre settimane chiude qui il viaggio.',
      tratte: [
        { da: 'Canggu', a: 'Sanur', km: 21, minuti: 22 },
        { da: 'Sanur', a: 'Nusa Penida', km: 24, minuti: 45, mezzo: 'barca veloce (linea d\'aria)' },
      ],
      luoghi: [{ nome: 'Kelingking Beach', indirizzo: 'Bunga Mekar, Nusa Penida', gps: [-8.75126, 115.47313], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Canggu.',
      costiNoti: ['Tour di giornata: 30-50 € a persona, mante a parte (nel viaggio)'],
    },
    {
      numero: 21,
      titolo: 'Da Bali a Lombok, verso Senaru',
      paginaSito: '/destinazioni/indonesia/lombok-gili',
      racconto:
        'Comincia la Parte 2, più lenta e con meno infrastrutture. A Lombok si arriva con il traghetto veloce da Padang Bai o Sanur oppure in volo; poi strada fino a Senaru o Sembalun, i villaggi da cui partono i trekking al Rinjani. La sera zaino leggero e strato termico pronti.',
      tratte: [
        { da: 'Bali', a: 'Lombok', km: 122, minuti: 40, mezzo: 'volo (linea d\'aria)' },
        { da: 'Aeroporto di Lombok', a: 'Senaru', km: 111, minuti: 101 },
      ],
      luoghi: [],
      mangiare: [],
      dormire: 'Senaru o Sembalun.',
      nota: 'A Lombok la Farnesina segnala estorsioni a mano armata e furti di motorini a noleggio: prudenza la sera e nelle zone non illuminate.',
    },
    {
      numero: 22,
      titolo: 'Inizio del trekking al Gunung Rinjani',
      paginaSito: '/esperienze/indonesia/trekking-gunung-rinjani',
      racconto:
        'Comincia il trekking al Rinjani, 3.726 metri, con la guida obbligatoria per legge. Tutta salita tra foresta e savana fino al campo sul bordo del cratere, dove il vento non molla e abbiamo dormito poco e male. È il trekking più duro del viaggio.',
      tratte: [],
      senzaStrada: 'A piedi, con guida e portatori.',
      luoghi: [
        { nome: 'Gunung Rinjani', indirizzo: 'Partenze da Senaru o Sembalun, Lombok', gps: [-8.41022, 116.39723], nota: 'Solo con guide autorizzate, come raccomanda la Farnesina. Permessi e chiusure stagionali da controllare con l\'agenzia.', fonti: ['osm', 'vs-id'] },
      ],
      mangiare: [],
      dormire: 'Campo in tenda sul bordo del cratere.',
      costiNoti: ['Pacchetto con guida, portatori, campo e pasti: da 150-250 € a persona secondo la durata (nel viaggio)'],
    },
    {
      numero: 23,
      titolo: 'Il lago Segara Anak e la discesa dal Rinjani',
      paginaSito: '/esperienze/indonesia/trekking-gunung-rinjani',
      racconto:
        'Risveglio sopra il lago craterico Segara Anak con le nuvole sotto. Discesa al lago, bagno nelle sorgenti calde sulla riva, poi risalita e rientro verso Senaru o Sembalun. Gambe finite.',
      tratte: [],
      senzaStrada: 'A piedi.',
      luoghi: [{ nome: 'Lago Segara Anak', indirizzo: 'Caldera del Rinjani', gps: [-8.41022, 116.39723], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Senaru o Sembalun.',
    },
    {
      numero: 24,
      titolo: 'Verso le isole Gili',
      paginaSito: '/destinazioni/indonesia/lombok-gili',
      racconto:
        'Strada fino al porto di Bangsal e barca per le Gili. Il ritmo cambia di colpo: niente motori, solo cidomo, i calessi a cavallo, e biciclette. A piedi si gira un\'isola in meno di un\'ora.',
      tratte: [
        { da: 'Senaru', a: 'Bangsal', km: 61, minuti: 55 },
        { da: 'Bangsal', a: 'Gili Trawangan', km: 9, minuti: 30, mezzo: 'barca (linea d\'aria)' },
      ],
      luoghi: [{ nome: 'Porto di Bangsal', indirizzo: 'Pemenang, Lombok Utara', gps: [-8.39455, 116.09993], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Gili Trawangan o Gili Air.',
    },
    {
      numero: 25,
      titolo: 'Gili Trawangan e Gili Air, senza motori',
      paginaSito: '/destinazioni/indonesia/lombok-gili',
      racconto:
        'Snorkeling con le tartarughe direttamente dalla spiaggia, senza barca né guida. Gili Trawangan è la più festaiola; Gili Air tiene meglio l\'equilibrio tra servizi e calma, ed è meglio saperlo prima di scegliere dove dormire. Una giornata lenta dopo il Rinjani.',
      tratte: [{ da: 'Gili Trawangan', a: 'Gili Air', km: 5, minuti: 20, mezzo: 'barca (linea d\'aria)' }],
      luoghi: [{ nome: 'Gili Air', indirizzo: 'Tanjung, Lombok Utara', gps: [-8.35771, 116.08116], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Gili Trawangan o Gili Air.',
    },
    {
      numero: 26,
      titolo: 'Labuan Bajo e inizio del tour nel Parco di Komodo',
      paginaSito: '/destinazioni/indonesia/komodo',
      racconto:
        'Volo per Labuan Bajo, sulla punta ovest di Flores, dove partono tutti i tour del Parco di Komodo. Ci siamo imbarcati per un tour di più giorni con le notti a bordo, l\'unico modo per essere a Padar all\'alba. La prima sera al mercato serale sul lungomare, con il pesce grigliato al momento.',
      tratte: [{ da: 'Lombok', a: 'Labuan Bajo', km: 397, minuti: 75, mezzo: 'volo (linea d\'aria)' }],
      luoghi: [],
      mangiare: [{ nome: 'Mercato serale sul lungomare', cosa: 'Pesce del giorno alla griglia', indirizzo: 'Lungomare di Labuan Bajo', stato: 'usato', fonti: [] }],
      dormire: 'A bordo della barca.',
      nota: 'A Flores e Labuan Bajo la Farnesina segnala molestie e aggressioni a turiste sole, soprattutto di notte. Per le barche: verifica giubbotti e dotazioni di sicurezza prima di salire.',
    },
    {
      numero: 27,
      titolo: 'Padar Island all\'alba e Pink Beach',
      paginaSito: '/destinazioni/indonesia/komodo',
      racconto:
        'Salita breve e ripida su Padar per la vista sulle tre baie con tre sabbie diverse. Va fatta prestissimo: dalle otto la fila sul sentiero è continua e il caldo si fa serio. Poi Pink Beach, sabbia rosata di frammenti di corallo, per nuotare e fare snorkeling.',
      tratte: [{ da: 'Labuan Bajo', a: 'Padar', km: 40, minuti: 150, mezzo: 'barca (linea d\'aria)' }],
      luoghi: [{ nome: 'Pulau Padar', indirizzo: 'Parco Nazionale di Komodo', web: 'komodonationalpark.org', gps: [-8.6627, 119.55574], fonti: ['osm', 'komodo'] }],
      mangiare: [],
      dormire: 'A bordo della barca.',
    },
    {
      numero: 28,
      titolo: 'I draghi di Komodo e lo snorkeling a Kanawa',
      paginaSito: '/esperienze/indonesia/trekking-draghi-komodo',
      racconto:
        'Sbarco su Komodo o su Rinca, più selvaggia e meno affollata, da chiedere all\'operatore. Trekking con il ranger fino ai draghi: stanno quasi sempre fermi e colpiscono per le dimensioni, con il ranger che ha in mano solo un bastone biforcuto. Mai avvicinarsi senza guida. Nel pomeriggio snorkeling a Kanawa e rientro a Labuan Bajo.',
      tratte: [
        { da: 'Padar', a: 'Komodo', km: 13, minuti: 45, mezzo: 'barca (linea d\'aria)' },
        { da: 'Komodo', a: 'Kanawa', km: 34, minuti: 120, mezzo: 'barca (linea d\'aria)' },
        { da: 'Kanawa', a: 'Labuan Bajo', km: 13, minuti: 50, mezzo: 'barca (linea d\'aria)' },
      ],
      luoghi: [
        { nome: 'Isola di Komodo', indirizzo: 'Parco Nazionale di Komodo', web: 'komodonationalpark.org', gps: [-8.58919, 119.46241], nota: 'Ingresso al parco e ranger: le tariffe sono cambiate più volte, da controllare sul sito del parco.', fonti: ['osm', 'komodo'] },
        { nome: 'Isola di Rinca', indirizzo: 'Parco Nazionale di Komodo', gps: [-8.70696, 119.68671], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Labuan Bajo.',
      costiNoti: ['Ingresso al parco più ranger: indicativamente 15-25 € a persona (nel viaggio)'],
    },
    {
      numero: 29,
      titolo: 'Trans-Flores verso Bajawa e il villaggio di Bena',
      paginaSito: '/destinazioni/indonesia/flores',
      racconto:
        'Prima tappa della Trans-Flores, panoramica e tortuosa: duecento chilometri possono prendere una giornata intera. Ad arrivo a Bajawa la visita a Bena, ai piedi del vulcano Inerie, con le case dal tetto conico in file intorno al centro cerimoniale.',
      tratte: [
        { da: 'Labuan Bajo', a: 'Bajawa', km: 262, minuti: 186, nelMioViaggio: 'una giornata con le soste' },
        { da: 'Bajawa', a: 'Bena', km: 15, minuti: 21 },
      ],
      luoghi: [{ nome: 'Kampung Adat Bena', indirizzo: 'Ngada, Flores', gps: [-8.87716, 120.98608], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Bajawa.',
    },
    {
      numero: 30,
      titolo: 'Da Bajawa a Moni',
      paginaSito: '/destinazioni/indonesia/flores',
      racconto:
        'Seconda tappa sulla Trans-Flores fino a Moni, il villaggio da cui si parte di notte per il Kelimutu. Giornata di trasferimento con soste libere tra terrazzamenti di riso e villaggi che vivono di agricoltura.',
      tratte: [{ da: 'Bajawa', a: 'Moni', km: 175, minuti: 125, nelMioViaggio: 'una giornata con le soste' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Moni.',
    },
    {
      numero: 31,
      titolo: 'Alba al Kelimutu',
      paginaSito: '/esperienze/indonesia/alba-kelimutu',
      racconto:
        'Partiti verso le quattro per i tre laghi craterici del Kelimutu, di solito turchese, verde scuro e quasi nero. I colori cambiano nel tempo e non si sa prima cosa si troverà. Poi trasferimento a Ende, da dove parte il volo per Sulawesi.',
      tratte: [
        { da: 'Moni', a: 'Kelimutu', km: 12, minuti: 9, nelMioViaggio: 'più la salita a piedi dal parcheggio' },
        { da: 'Moni', a: 'Ende', km: 30, minuti: 29 },
      ],
      luoghi: [{ nome: 'Parco Nazionale del Kelimutu', indirizzo: 'Koanara, Ende', gps: [-8.76551, 121.79834], nota: 'Biglietto da pagare all\'ingresso del parco: tariffa da controllare sul posto.', fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Ende o Maumere.',
      costiNoti: ['Ingresso al parco: pochi euro (nel viaggio)'],
    },
    {
      numero: 32,
      titolo: 'Verso Makassar e Tana Toraja',
      paginaSito: '/destinazioni/indonesia/sulawesi',
      racconto:
        'Volo per Makassar, l\'hub di Sulawesi, e da lì bus o volo interno fino a Rantepao, nel cuore di Tana Toraja. Una giornata di trasferimenti verso l\'ultima tappa culturale del viaggio.',
      tratte: [
        { da: 'Ende', a: 'Makassar', km: 464, minuti: 90, mezzo: 'volo (linea d\'aria)' },
        { da: 'Aeroporto di Makassar', a: 'Rantepao', km: 300, minuti: 221 },
      ],
      luoghi: [],
      mangiare: [],
      dormire: 'Rantepao.',
      nota: 'La Farnesina considera il Sulawesi meridionale, dove sono Makassar e Tana Toraja, una zona a rischio per l\'attività di gruppi terroristici: controlla la scheda aggiornata prima di partire e muoviti con guide e strutture note.',
    },
    {
      numero: 33,
      titolo: 'Tana Toraja: villaggi tongkonan e tombe nella roccia',
      paginaSito: '/destinazioni/indonesia/sulawesi',
      racconto:
        'Giornata tra i villaggi tongkonan con le case dal tetto a barca e le tombe scavate nella roccia, sorvegliate dalle tau tau, le effigi di legno dei defunti. Con una guida si può assistere a un frammento di cerimonia funebre toraja, che dura giorni e prevede il sacrificio di bufali. Da ospiti si porta un piccolo regalo, di solito zucchero o sigarette, e si sta dove indica la guida.',
      tratte: [{ da: 'Rantepao', a: 'Kete Kesu', km: 4, minuti: 4 }],
      luoghi: [{ nome: 'Ke\'te Kesu', indirizzo: 'Kesu, Toraja Utara', gps: [-2.99664, 119.91026], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Rantepao.',
    },
    {
      numero: 34,
      titolo: 'Trekking tra i villaggi di montagna di Rantepao',
      paginaSito: '/destinazioni/indonesia/sulawesi',
      racconto:
        'Trekking di una giornata tra risaie terrazzate e case tongkonan isolate intorno a Rantepao, senza il contesto di una cerimonia. Nel tardo pomeriggio rientro verso Makassar per l\'ultima notte.',
      tratte: [{ da: 'Rantepao', a: 'Makassar', km: 299, minuti: 221 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Makassar.',
    },
    {
      numero: 35,
      titolo: 'Makassar e partenza',
      paginaSito: '/viaggi/indonesia-itinerario',
      racconto:
        'Ultima mattina a Makassar: Fort Rotterdam, il forte olandese sul lungomare, e una colazione con il coto makassar, la zuppa di manzo che qui si mangia al mattino. Partenza in giornata.',
      tratte: [],
      senzaStrada: 'In città, poi l\'aeroporto Sultan Hasanuddin.',
      luoghi: [{ nome: 'Fort Rotterdam', indirizzo: 'Jl. Ujung Pandang, Makassar', gps: [-5.13389, 119.40552], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Bukit Lawang', 'Berastagi', 'Lago Toba', 'Giacarta', 'Yogyakarta', 'Bromo', 'Ijen', 'Bali', 'Rinjani', 'Labuan Bajo', 'Bajawa', 'Kelimutu', 'Makassar', 'Tana Toraja'],
    legenda: 'Linea piena: l\'ordine delle tappe, da Sumatra a Sulawesi. Fra le isole ci si muove in volo o in traghetto.',
    notaTempi: 'Tempi su strada stimati senza traffico (OSRM su OpenStreetMap): in Indonesia servono quasi sempre di più, e il diario lo dice. Voli, treni e barche sono in linea d\'aria, con i tempi del diario.',
    notaTempiFonti: ['osrm'],
    scalaKm: 500,
  },
  pass: {
    nome: 'Documenti e prenotazioni',
    titolo: 'Cosa compilare e prenotare prima',
    occhiello: 'La prima decisione',
    regola:
      'Per entrare servono il visto all\'arrivo (e-VOA, 30 giorni, rinnovabile una volta per altri 30) e la dichiarazione doganale elettronica, da compilare nei tre giorni prima dell\'arrivo. Il viaggio dura 35 giorni: il visto va rinnovato almeno una settimana prima della scadenza, oppure va chiesto in anticipo un visto più lungo. A Bali si paga la tassa per i turisti. Da prenotare presto: la salita su Borobudur, il trekking al Rinjani, il tour in barca a Komodo.',
    scenari: [
      { situazione: 'Fai tutti i 35 giorni', scelta: 'e-VOA più rinnovo online almeno 7 giorni prima della scadenza, o un visto più lungo chiesto prima di partire' },
      { situazione: 'Fai solo la Parte 1 o la Parte 2', scelta: 'Basta l\'e-VOA da 30 giorni' },
      { situazione: 'Vuoi salire su Borobudur', scelta: 'Prenota il biglietto con salita sul sito ufficiale: i posti finiscono presto' },
      { situazione: 'Vuoi andare al Bromo', scelta: 'Registrazione online sul sito del parco e controllo delle chiusure per le feste' },
    ],
    esito: 'Ogni giorno oltre il visto costa 1.000.000 IDR di multa in contanti, e si rischia il carcere: segna la data di scadenza.',
    fonti: ['vs-id', 'evisa', 'allindonesia', 'lovebali', 'tnbts'],
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno 6 mesi di validità all\'ingresso e due pagine libere. Deve essere integro: hanno respinto turisti con passaporti strappati o scollati.', fonti: ['vs-id'] },
        { voce: 'Visto', valore: 'e-VOA, visto all\'arrivo per turismo: 30 giorni, 500.000 IDR, rinnovabile una volta per 30 giorni. Si chiede su evisa.imigrasi.go.id almeno una settimana prima, oppure all\'arrivo negli scali abilitati.', fonti: ['vs-id', 'evisa'] },
        { voce: 'Dichiarazione', valore: 'Dichiarazione doganale elettronica su allindonesia.imigrasi.go.id, non prima di tre giorni dall\'arrivo.', fonti: ['vs-id', 'allindonesia'] },
        { voce: 'Tassa di Bali', valore: '150.000 IDR a persona per ogni straniero non residente, anche arrivando da altre isole. Si paga su lovebali.baliprov.go.id.', fonti: ['vs-id', 'lovebali'] },
        { voce: 'Biglietto di uscita', valore: 'Per l\'e-VOA serve un volo di ritorno o di prosecuzione.', fonti: ['vs-id'] },
        { voce: 'Documento con sé', valore: 'Porta sempre passaporto o almeno una copia: ci sono stati italiani trattenuti fino all\'identificazione.', fonti: ['vs-id'] },
      ],
    },
    {
      titolo: 'Telefono, corrente, soldi',
      righe: [
        { voce: 'Corrente', valore: '230 V, 50 Hz, prese di tipo C e F. Le spine a due poli sottili e le Schuko entrano; per la spina italiana a tre poli in linea serve un adattatore.', fonti: ['prese-id'] },
        { voce: 'Fuso orario', valore: 'Sumatra e Giava +6 ore rispetto all\'Italia, Bali +7, l\'Indonesia orientale +8; un\'ora in meno con l\'ora legale. Nel viaggio Lombok, Flores e Sulawesi erano sul fuso di Bali (WITA).', fonti: ['vs-id'] },
        { voce: 'Prefisso', valore: '+62. Giacarta 021, Bali 0361.', fonti: ['vs-id'] },
        { voce: 'Valuta', valore: 'Rupia indonesiana (IDR). Carte accettate nei posti turistici; fuori da Bali e Giava servono contanti.', fonti: ['vs-id'] },
        { voce: 'SIM', valore: 'Si registra con il passaporto. Telkomsel ha la copertura migliore nelle isole remote (dal viaggio).' },
      ],
    },
    {
      titolo: 'Salute',
      righe: [
        { voce: 'Vaccini', valore: 'Obbligatoria solo la febbre gialla per chi arriva da Paesi a rischio. Consigliati, sentito il medico, tifo, epatite A e B, antitetanica.', fonti: ['vs-id'] },
        { voce: 'Malaria', valore: 'Aree endemiche a Lombok, Sulawesi, Sumatra e nelle province orientali: profilassi da valutare con il medico.', fonti: ['vs-id'] },
        { voce: 'Dengue', valore: 'Endemica, cresce con le piogge (ottobre-aprile): repellente e abiti coprenti.', fonti: ['vs-id'] },
        { voce: 'Rabbia', valore: 'Presente a Bali: niente contatto con cani, gatti e scimmie. Il vaccino è difficile da trovare negli ospedali locali.', fonti: ['vs-id'] },
        { voce: 'Sub', valore: 'Camere iperbariche solo a Giava e a Bali. La polizza deve coprire le immersioni.', fonti: ['vs-id'] },
        { voce: 'Assicurazione', valore: 'Indispensabile, con rimpatrio sanitario: senza pagamento o garanzia dell\'assicurazione non si viene curati. Per i casi gravi si va spesso a Singapore.', fonti: ['vs-id'] },
      ],
    },
    {
      titolo: 'Sicurezza lungo il percorso',
      righe: [
        { voce: 'Scooter', valore: 'Patente internazionale valida per le due ruote, casco sempre. In caso di incidente aspetta la polizia sul posto.', fonti: ['vs-id'] },
        { voce: 'Barche', valore: 'Standard di sicurezza spesso inadeguati: controlla giubbotti e scialuppe, evita le traversate dopo il tramonto.', fonti: ['vs-id'] },
        { voce: 'Bali', valore: 'Furti nelle strutture e aggressioni a donne straniere, di notte. Meglio agenzie note che guide free lance.', fonti: ['vs-id'] },
        { voce: 'Lombok', valore: 'Rinjani solo con guide autorizzate. Niente alcolici di dubbia provenienza (metanolo).', fonti: ['vs-id'] },
        { voce: 'Sulawesi', valore: 'Il Sulawesi meridionale è indicato come zona a rischio per gruppi terroristici: controlla la scheda prima di andare.', fonti: ['vs-id'] },
        { voce: 'Sumatra', valore: 'Nella stagione secca il fumo degli incendi può ridurre la visibilità e disturbare i voli.', fonti: ['vs-id'] },
        { voce: 'Registrati', valore: 'Su dovesiamonelmondo.it e con una mail a consolare.jakarta@esteri.it con date e recapiti.', fonti: ['vs-id'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze sanitarie', valore: '119', fonti: ['vs-id'] },
      { voce: 'Polizia', valore: '110', fonti: ['vs-id'] },
      { voce: 'Vigili del fuoco', valore: '113', fonti: ['vs-id'] },
      { voce: 'Protezione civile', valore: '115', fonti: ['vs-id'] },
    ],
    ambasciata: [
      {
        nome: 'Ambasciata d\'Italia a Giacarta',
        cosa: 'Ambasciata e ufficio consolare',
        indirizzo: 'Jalan Diponegoro no. 45, Menteng, Jakarta 10310',
        telefono: '+62 21 319 374 45 · ambasciata.jakarta@esteri.it · consolare.jakarta@esteri.it',
        web: 'ambjakarta.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs-id'],
      },
      {
        nome: 'Ambasciata, cellulare di emergenza',
        cosa: 'Solo emergenze gravi fuori orario: lun-gio 18.30-22, ven 15.30-22, sabato e festivi 8.30-22',
        telefono: '+62 815 1811 344 (dall\'Indonesia 0815 1811 344)',
        stato: 'ufficiale',
        fonti: ['vs-id'],
      },
      {
        nome: 'Consolato onorario a Bali',
        cosa: 'Gianyar, console Alessandro Tanganelli',
        indirizzo: 'Jl. Padatkarya GSM Kauh No. 12, Pering, Blahbatuh, Gianyar, Bali 80581',
        telefono: '+62 851 2694 6068',
        stato: 'ufficiale',
        fonti: ['vs-id'],
      },
    ],
    ospedali: [
      { nome: 'Medistra Hospital', cosa: 'Giacarta, privato', indirizzo: 'Jl. Jend. Gatot Subroto Kav. 59, Jakarta 12950', telefono: '+62 21 521 0200', stato: 'ufficiale', fonti: ['ukgov-med'] },
      { nome: 'RSUP Dr Sardjito', cosa: 'Yogyakarta, ospedale pubblico', indirizzo: 'Jalan Kesehatan No. 1, Sekip, Sinduadi, Yogyakarta', telefono: '+62 274 631 190 · +62 274 587 333', stato: 'ufficiale', fonti: ['ukgov-med'] },
      { nome: 'BIMC Hospital Kuta', cosa: 'Bali, privato, pronto soccorso 24 ore', indirizzo: 'Jl. Bypass Ngurah Rai No. 100X, Kuta 80361', telefono: '+62 361 761 263', web: 'bimcbali.com', stato: 'ufficiale', fonti: ['ukgov-med', 'bimc'] },
      { nome: 'BIMC Hospital Ubud', cosa: 'Bali, la più vicina alla base di Ubud', indirizzo: 'Jl. Raya Sanggingan No. 21, Kedewatan, Ubud 80561', telefono: '+62 361 2091 030', web: 'bimcbali.com', stato: 'ufficiale', fonti: ['bimc'] },
      { nome: 'Ospedale provinciale di Nusa Tenggara Occidentale', cosa: 'Mataram, Lombok, pubblico', indirizzo: 'Jl. Prabu Rangkasari, Dasan Cermen, Mataram 84371', telefono: '+62 370 750 2424', stato: 'ufficiale', fonti: ['ukgov-med'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Siti ufficiali',
      voci: [
        { nome: 'e-Visa Imigrasi', cosa: 'Visto all\'arrivo online e rinnovo', web: 'evisa.imigrasi.go.id', stato: 'ufficiale', fonti: ['evisa'] },
        { nome: 'All Indonesia', cosa: 'Dichiarazione doganale e arrival card', web: 'allindonesia.imigrasi.go.id', stato: 'ufficiale', fonti: ['allindonesia'] },
        { nome: 'Love Bali', cosa: 'Tassa turistica di Bali', web: 'lovebali.baliprov.go.id', stato: 'ufficiale', fonti: ['lovebali'] },
        { nome: 'Bromo Tengger Semeru', cosa: 'Registrazione online, chiusure e tariffe del parco', web: 'bromotenggersemeru.org', stato: 'ufficiale', fonti: ['tnbts'] },
        { nome: 'Parco Nazionale di Komodo', cosa: 'Sito ufficiale del parco', web: 'komodonationalpark.org', stato: 'ufficiale', fonti: ['komodo'] },
        { nome: 'Borobudur Park', cosa: 'Biglietti di Borobudur e Prambanan', web: 'borobudurpark.com', stato: 'ufficiale', avviso: 'Il sito blocca le richieste automatiche: non ho potuto leggerlo.', fonti: [] },
      ],
    },
    {
      gruppo: 'Trasporti',
      voci: [
        { nome: 'KAI', cosa: 'Ferrovie indonesiane: orari e biglietti di Giava', web: 'kai.id', stato: 'ufficiale', fonti: ['kai'] },
        { nome: 'Ferizy (ASDP)', cosa: 'Biglietti dei traghetti pubblici, anche Ketapang-Gilimanuk', web: 'ferizy.com', stato: 'ufficiale', fonti: ['ferizy'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Medan e ritorno da Makassar' },
      { voce: 'Voli interni', nota: 'Medan-Giacarta-Yogyakarta, Lombok-Labuan Bajo, Ende-Makassar' },
      { voce: 'Driver privati a Sumatra e Bali', costo: '350.000-900.000 IDR a tratta', nota: 'indicativo, dal viaggio' },
      { voce: 'Trekking agli oranghi', costo: '25-40 € la mezza giornata', nota: 'indicativo, dal viaggio' },
      { voce: 'Jeep del Bromo', costo: '700.000-900.000 IDR a veicolo', nota: 'indicativo, dal viaggio' },
      { voce: 'Rinjani con guida, portatori e campo', costo: '150-250 € a persona', nota: 'indicativo, dal viaggio' },
      { voce: 'Tour in barca a Komodo', nota: 'variabile con la durata' },
      { voce: 'Visto, rinnovo e tassa di Bali', costo: '500.000 IDR + rinnovo + 150.000 IDR' },
      { voce: 'Alloggi', nota: 'economici a Sumatra e Flores, medi a Bali, Lombok e Sulawesi' },
    ],
    nota: 'I prezzi «indicativi» sono quelli annotati nel viaggio: controllali prima di pagare. Visto e tassa di Bali sono da Viaggiare Sicuri.',
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Passaporto integro con 6 mesi di validità e due pagine libere', 'Ricevuta e-VOA e dichiarazione All Indonesia', 'Ricevuta della tassa di Bali', 'Patente internazionale valida per le moto', 'Polizza con rimpatrio e immersioni', 'Copia del passaporto da tenere sempre addosso'] },
    { gruppo: 'Vulcani e trekking', voci: ['Scarpe da trekking rodate', 'Frontale', 'Strato termico e giacca antivento per Bromo e Rinjani', 'Maschera antigas per l\'Ijen, se non la fornisce la guida', 'Bastoncini'] },
    { gruppo: 'Mare', voci: ['Maschera personale', 'Crema solare reef safe', 'Sacca stagna', 'Giubbotto salvagente per bambini, se servono'] },
    { gruppo: 'Salute', voci: ['Repellente', 'Farmaci personali di scorta', 'Antidiarroico e reidratanti', 'Profilassi antimalarica, se decisa con il medico'] },
  ],
  lingua: {
    nome: 'Indonesiano (Bahasa Indonesia)',
    pronuncia: 'Si legge quasi come si scrive. «c» è la «ci» di «ciao», «j» è la «gi» di «gioco», «u» è la «u» italiana, la «e» spesso è muta. Nelle zone turistiche l\'inglese basta quasi sempre.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Buongiorno', loc: 'selamat pagi' },
        { it: 'Buonasera', loc: 'selamat malam' },
        { it: 'Grazie', loc: 'terima kasih' },
        { it: 'Prego', loc: 'sama-sama' },
        { it: 'Scusi', loc: 'permisi', nota: 'per passare o chiedere' },
        { it: 'Mi dispiace', loc: 'maaf' },
        { it: 'Sì · No', loc: 'ya · tidak' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Quanto costa?', loc: 'berapa harganya?' },
        { it: 'Troppo caro', loc: 'terlalu mahal' },
        { it: 'Dov\'è il bagno?', loc: 'kamar kecil di mana?' },
        { it: 'Non capisco', loc: 'saya tidak mengerti' },
        { it: 'Sinistra · destra · dritto', loc: 'kiri · kanan · lurus' },
        { it: 'Piano, per favore', loc: 'pelan-pelan' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Acqua', loc: 'air putih' },
        { it: 'Non piccante', loc: 'tidak pedas' },
        { it: 'Senza ghiaccio', loc: 'tanpa es' },
        { it: 'Il conto, per favore', loc: 'minta bon' },
        { it: 'Buonissimo', loc: 'enak sekali' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'tolong!' },
        { it: 'Polizia', loc: 'polisi' },
        { it: 'Ospedale', loc: 'rumah sakit' },
        { it: 'Mi serve un medico', loc: 'saya perlu dokter' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'satu' },
    { it: '2', loc: 'dua' },
    { it: '3', loc: 'tiga' },
    { it: '4', loc: 'empat' },
    { it: '5', loc: 'lima' },
    { it: '10', loc: 'sepuluh' },
    { it: '100', loc: 'seratus' },
    { it: '1.000', loc: 'seribu' },
    { it: '10.000', loc: 'sepuluh ribu' },
    { it: '100.000', loc: 'seratus ribu' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/indonesia-itinerario' },
    { titolo: 'Indonesia, scheda paese', path: '/destinazioni/indonesia' },
    { titolo: 'Oranghi a Bukit Lawang', path: '/esperienze/indonesia/trekking-oranghi-bukit-lawang' },
    { titolo: 'Alba al Bromo', path: '/esperienze/indonesia/alba-bromo-jeep' },
    { titolo: 'Trekking al Rinjani', path: '/esperienze/indonesia/trekking-gunung-rinjani' },
    { titolo: 'I draghi di Komodo', path: '/esperienze/indonesia/trekking-draghi-komodo' },
  ],
  nonVerificato: [
    'Biglietti e fasce orarie di Borobudur e Prambanan (il sito ufficiale blocca la lettura automatica; le cifre online non coincidono)',
    'Tariffe 2026 dei parchi: Gunung Leuser, Bromo, Ijen, Rinjani, Komodo, Kelimutu',
    'Orari e prezzi delle barche veloci per Nusa Penida, Lombok e le Gili',
    'Nomi e contatti di guesthouse, driver, guide e operatori: nel diario non ci sono',
    'Ospedali a Medan, Labuan Bajo e Makassar: l\'elenco britannico non ne riporta',
  ],
  consultate: 'Consultate tra il 30 ottobre e il 2 novembre 2026. Prezzi, chiusure e regole d\'ingresso cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  fonti: [
    { id: 'vs-id', titolo: 'Viaggiare Sicuri (Farnesina), scheda Indonesia (agg. 16/10/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/IDN.json' },
    { id: 'evisa', titolo: 'Direttorato generale dell\'immigrazione, e-Visa', url: 'https://evisa.imigrasi.go.id' },
    { id: 'allindonesia', titolo: 'All Indonesia, dichiarazione d\'arrivo', url: 'https://allindonesia.imigrasi.go.id' },
    { id: 'lovebali', titolo: 'Provincia di Bali, tassa per i turisti stranieri', url: 'https://lovebali.baliprov.go.id' },
    { id: 'tnbts', titolo: 'Parco Nazionale Bromo Tengger Semeru, notizie e registrazione', url: 'https://bromotenggersemeru.org' },
    { id: 'komodo', titolo: 'Parco Nazionale di Komodo, sito ufficiale', url: 'https://www.komodonationalpark.org' },
    { id: 'kai', titolo: 'PT Kereta Api Indonesia', url: 'https://www.kai.id' },
    { id: 'ferizy', titolo: 'Ferizy, biglietteria traghetti ASDP', url: 'https://ferizy.com' },
    { id: 'ukgov-med', titolo: 'GOV.UK, elenco delle strutture sanitarie in Indonesia (agg. 9/7/2026)', url: 'https://www.gov.uk/government/publications/indonesia-list-of-medical-facilities-and-funeral-directors/list-of-medical-facilities-in-indonesia' },
    { id: 'bimc', titolo: 'BIMC Hospital, contatti', url: 'https://bimcbali.com/contact-us/' },
    { id: 'prese-id', titolo: 'WorldStandards, prese elettriche in Indonesia', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/indonesia/' },
    { id: 'osm', titolo: 'OpenStreetMap (coordinate)', url: 'https://www.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
