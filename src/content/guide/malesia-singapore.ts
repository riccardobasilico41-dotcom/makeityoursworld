import type { Guida } from './types'

/**
 * Guida PDF «Malesia e Singapore». Il racconto viene da src/content/viaggi/19-malesia-singapore.md
 * (14 giorni con amici, in autonomia: autobus interurbani, barca per Taman Negara, bus di frontiera).
 * Ingresso, emergenze, ambasciate, salute e regole: Viaggiare Sicuri, schede Malaysia
 * (agg. 23/10/2026) e Singapore (agg. 06/03/2026). Biglietti e orari dei siti non verificati:
 * la guida rimanda ai siti ufficiali (raggiungibili al 2/11/2026).
 *
 * Distanze su strada: OSRM su OpenStreetMap. Coordinate: src/content/mappe/coordinate.ts.
 */

export const guidaMalesiaSingapore: Guida = {
  slug: 'malesia-singapore',
  tripSlug: 'malesia-singapore',
  paese: 'Malesia e Singapore',
  titolo: 'Malesia e Singapore',
  sottotitolo: 'Kuala Lumpur, la giungla di Taman Negara, le Cameron Highlands, Penang, Malacca e Singapore. Quattordici giorni, giorno per giorno.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Questo giro l\'ho fatto con amici, in autonomia: autobus interurbani, la barca sul fiume per entrare a Taman Negara e il bus che attraversa la frontiera fino a Singapore.',
    'Sul sito c\'è il racconto. Qui ci sono le distanze tra le tappe, le coordinate, le due carte d\'arrivo da compilare online (MDAC per la Malesia, SG Arrival Card per Singapore), le regole che a Singapore costano care, i numeri di emergenza e le due ambasciate.',
    'Regole e contatti li ho ricontrollati a novembre 2026. Prezzi e orari dei siti non sono riuscito a verificarli sulle fonti ufficiali: dove non li ho trovati non li scrivo e ti indico dove guardare.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con distanze, tempi, coordinate GPS e un QR verso la pagina del sito',
    'MDAC e SG Arrival Card: quando e dove compilarle',
    'Cosa è vietato a Singapore: sigarette elettroniche, chewing gum, rifiuti per strada',
    'Ambasciate d\'Italia a Kuala Lumpur e Singapore, numeri di emergenza dei due paesi',
    'Frasario malese di base',
  ],
  tappe: [
    { nome: 'Kuala Lumpur', gps: [3.1517, 101.69424], giorno: 'G1-G2', etichetta: 'sinistra' },
    { nome: 'Taman Negara', gps: [4.38227, 102.40171], giorno: 'G3-G4', etichetta: 'destra' },
    { nome: 'Cameron Highlands', gps: [4.47108, 101.37517], giorno: 'G5-G6', etichetta: 'sinistra' },
    { nome: 'Penang · George Town', gps: [5.41416, 100.32874], giorno: 'G7-G9', etichetta: 'sinistra' },
    { nome: 'Malacca', gps: [2.32937, 102.2881], giorno: 'G10-G11', etichetta: 'sinistra' },
    { nome: 'Singapore', gps: [1.30684, 103.84928], giorno: 'G12-G14', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Kuala Lumpur e Jalan Alor',
      paginaSito: '/destinazioni/malesia/kuala-lumpur',
      racconto:
        'Arrivati a KUL, abbiamo preso il KLIA Ekspres, 28 minuti fino al centro, e ci siamo sistemati tra Bukit Bintang e Chinatown. La prima sera a Jalan Alor, il mercato notturno del cibo: cucina cinese a destra, malese a sinistra, banco indiano di fronte. Spiega il paese in una sera.',
      tratte: [],
      senzaStrada: 'Dall\'aeroporto con il KLIA Ekspres, 28 minuti fino a KL Sentral.',
      luoghi: [
        { nome: 'KLIA Ekspres', indirizzo: 'Aeroporto KLIA-KL Sentral', web: 'kliaekspres.com', nota: 'Tariffe e orari sul sito ufficiale.', fonti: [] },
      ],
      mangiare: [
        { nome: 'Jalan Alor', cosa: 'Mercato notturno del cibo, la prima cena', indirizzo: 'Bukit Bintang, Kuala Lumpur', stato: 'usato', fonti: [] },
      ],
      dormire: 'Tra Bukit Bintang e Chinatown, vicino a una fermata della monorotaia o della metropolitana.',
    },
    {
      numero: 2,
      titolo: 'Batu Caves e i quartieri',
      paginaSito: '/esperienze/malesia/batu-caves',
      racconto:
        'Alle Batu Caves all\'alba, con il treno KTM Komuter dalla stazione centrale: alle sette i 272 gradini sono in ombra e si sale con i fedeli; tre ore dopo fa caldo e le scimmie strappano le bottiglie di mano. Il pomeriggio Chinatown intorno a Petaling Street, Little India a Brickfields e il Museo delle Arti Islamiche, quasi sempre vuoto. Le Petronas le abbiamo guardate dal basso all\'ora blu.',
      tratte: [{ da: 'Kuala Lumpur', a: 'Batu Caves', km: 12, minuti: 13, nelMioViaggio: 'KTM Komuter dalla stazione centrale' }],
      luoghi: [
        {
          nome: 'Batu Caves',
          indirizzo: 'Gombak, Selangor',
          gps: [3.2378, 101.68138],
          nota: 'Spalle e ginocchia coperte, niente in mano per le scimmie. Orari non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Kuala Lumpur.',
    },
    {
      numero: 3,
      titolo: 'Verso Taman Negara in barca',
      paginaSito: '/destinazioni/malesia/taman-negara',
      racconto:
        'Minibus fino a Kuala Tembeling e poi la barca lunga sul fiume Tembeling, due-tre ore controcorrente tra due muri di verde: vale già da sola. Ci siamo sistemati a Kuala Tahan, sulla riva opposta all\'ingresso del parco, e abbiamo cenato nei ristoranti galleggianti sul fiume.',
      tratte: [{ da: 'Kuala Lumpur', a: 'Kuala Tahan (Taman Negara)', km: 236, minuti: 233, nelMioViaggio: 'minibus più 2-3 ore di barca da Kuala Tembeling' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Kuala Tahan.',
    },
    {
      numero: 4,
      titolo: 'Canopy walkway e night walk',
      paginaSito: '/esperienze/malesia/canopy-walkway-taman-negara',
      racconto:
        'Canopy walkway all\'apertura: una delle passerelle sospese più lunghe del mondo, a quaranta metri, si passa uno alla volta e più tardi c\'è coda. Il pomeriggio Bukit Teresek o la barca fino alle rapide di Lata Berkoh. La sera la night walk guidata, che quasi tutti saltano ed è la parte migliore: con la torcia si vedono ragni, serpenti e occhi tra le foglie.',
      tratte: [],
      senzaStrada: 'Barchette per attraversare il fiume fino all\'ingresso del parco.',
      luoghi: [
        {
          nome: 'Taman Negara, canopy walkway',
          indirizzo: 'Kuala Tahan, Pahang',
          gps: [4.38227, 102.40171],
          nota: 'Permesso del parco, biglietti e orari da controllare all\'ufficio del parco. Nella stagione umida servono le calze antisanguisughe.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Kuala Tahan.',
    },
    {
      numero: 5,
      titolo: 'Verso le Cameron Highlands',
      paginaSito: '/destinazioni/malesia/cameron-highlands',
      racconto:
        'Trasferimento all\'altopiano, con l\'ultimo tratto a tornanti che chi soffre il mal d\'auto sente parecchio. A Tanah Rata, 1.500 metri, si scende sotto i venti gradi: l\'unico posto del viaggio dove serve una felpa. Cena con lo steamboat, la pentola di brodo al centro del tavolo.',
      tratte: [{ da: 'Taman Negara', a: 'Tanah Rata', km: 220, minuti: 240 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Tanah Rata.',
    },
    {
      numero: 6,
      titolo: 'Piantagioni di tè e mossy forest',
      paginaSito: '/esperienze/malesia/piantagioni-te-cameron',
      racconto:
        'Mattinata tra le piantagioni, con le terrazze che scendono a onde e la sala da tè sulla valle. Poi la mossy forest sul Gunung Brinchang, bosco nano a duemila metri coperto di muschio. Chiedi prima se il tour porta alla foresta vera o alla passerella accanto al parcheggio della torre: i tour più economici fanno la seconda.',
      tratte: [],
      senzaStrada: 'Tour locale o taxi da Tanah Rata.',
      luoghi: [
        {
          nome: 'Piantagioni di tè delle Cameron Highlands',
          indirizzo: 'Brinchang, Pahang',
          gps: [4.51668, 101.41459],
          nota: 'Orari delle sale da tè non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Tanah Rata.',
    },
    {
      numero: 7,
      titolo: 'George Town e l\'assam laksa',
      paginaSito: '/destinazioni/malesia/penang',
      racconto:
        'Trasferimento a George Town, patrimonio UNESCO. Conviene dormire dentro il centro storico, se possibile in una shophouse restaurata: si gira a piedi e si vede la città la sera. Prima cena ai banchi: assam laksa, brodo acido di sgombro e tamarindo che al primo assaggio spiazza.',
      tratte: [{ da: 'Cameron Highlands', a: 'George Town', km: 246, minuti: 201 }],
      luoghi: [],
      mangiare: [],
      dormire: 'George Town, nel centro storico.',
    },
    {
      numero: 8,
      titolo: 'George Town a piedi',
      paginaSito: '/destinazioni/malesia/penang',
      racconto:
        'Shophouse peranakan, i Clan Jetties sulle palafitte, ancora abitati, la Street of Harmony con moschea, tempio cinese, tempio indù e chiesa nella stessa via, e la Blue Mansion. Nel pomeriggio il Kek Lok Si o la funicolare di Penang Hill. Il centro va camminato la mattina o dopo le quattro: tra le undici e le tre fa troppo caldo.',
      tratte: [],
      senzaStrada: 'A piedi; bus o Grab per Kek Lok Si e Penang Hill.',
      luoghi: [],
      mangiare: [],
      dormire: 'George Town.',
    },
    {
      numero: 9,
      titolo: 'Penang, la giornata del cibo',
      paginaSito: '/esperienze/malesia/street-food-penang',
      racconto:
        'Nessun monumento: cinque pasti piccoli seguendo gli orari dei banchi. Char kway teow, roti canai con il dahl a colazione, nasi kandar a pranzo, cendol nel pomeriggio, rojak la sera. Ogni banco fa una cosa sola, ha il suo orario e chiude quando finisce. In alternativa, mezza giornata al Penang National Park fino a Monkey Beach.',
      tratte: [],
      senzaStrada: 'A piedi tra i banchi.',
      luoghi: [],
      mangiare: [],
      dormire: 'George Town.',
    },
    {
      numero: 10,
      titolo: 'Verso Malacca',
      paginaSito: '/destinazioni/malesia/malacca',
      racconto:
        'Giù fino a Malacca, il porto che per secoli ha controllato lo stretto: portoghese dal 1511, poi olandese, poi britannico. Arrivati nel pomeriggio, la prima passeggiata nella Dutch Square rossa e sulla collina di St. Paul, con la chiesa portoghese senza tetto e le lapidi olandesi ai muri.',
      tratte: [{ da: 'George Town', a: 'Malacca', km: 488, minuti: 359 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Malacca, centro storico.',
    },
    {
      numero: 11,
      titolo: 'Malacca e la cucina nyonya',
      paginaSito: '/destinazioni/malesia/malacca',
      racconto:
        'La mattina al Baba & Nyonya Heritage Museum, una casa peranakan con gli arredi originali, poi i vicoli intorno a Jonker Street. A pranzo cucina nyonya: ayam pongteh, laksa al cocco, chicken rice ball. La sera, partiti i pullman, la città cambia: è il motivo per dormirci. Da venerdì a domenica c\'è il mercato notturno di Jonker Street.',
      tratte: [],
      senzaStrada: 'Tutto a piedi.',
      luoghi: [
        {
          nome: 'Baba & Nyonya Heritage Museum',
          indirizzo: 'Jalan Tun Tan Cheng Lock, Malacca',
          web: 'babanyonyamuseum.com',
          nota: 'Orari e biglietto sul sito ufficiale.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'Malacca.',
    },
    {
      numero: 12,
      titolo: 'Il bus per Singapore',
      paginaSito: '/destinazioni/singapore/quartieri-etnici',
      racconto:
        'Autobus diretto Malacca-Singapore, 4-5 ore con la frontiera. Si scende due volte, all\'uscita dalla Malesia e all\'ingresso a Singapore, e la SG Arrival Card deve essere già compilata: è l\'errore più comune di chi arriva via terra. Abbiamo dormito tra Chinatown e Bugis, più economiche di Marina Bay. La prima sera in un hawker centre, in coda al banco con più gente: pollo di Hainan.',
      tratte: [{ da: 'Malacca', a: 'Singapore', km: 234, minuti: 170, mezzo: 'autobus con la frontiera', nelMioViaggio: '4-5 ore' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Singapore, Chinatown o Bugis.',
    },
    {
      numero: 13,
      titolo: 'Quartieri, Marina Bay e Gardens by the Bay',
      paginaSito: '/esperienze/singapore/gardens-by-the-bay',
      racconto:
        'La mattina tra Chinatown, Little India e Kampong Glam, a due fermate l\'uno dall\'altro e diversissimi. Nel tardo pomeriggio il giro della baia all\'ora blu, la sera ai Gardens by the Bay con lo spettacolo di luci ai Supertree: un quarto d\'ora, gratuito, sdraiati sul prato. Al posto della piattaforma panoramica si ordina un cocktail al bar dello stesso edificio.',
      tratte: [],
      senzaStrada: 'MRT e a piedi.',
      luoghi: [
        {
          nome: 'Gardens by the Bay, Supertree Grove',
          indirizzo: '18 Marina Gardens Drive, Singapore',
          web: 'gardensbythebay.com.sg',
          gps: [1.28115, 103.86496],
          nota: 'Orari dello spettacolo di luci sul sito ufficiale.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Singapore.',
    },
    {
      numero: 14,
      titolo: 'La Singapore verde e partenza',
      paginaSito: '/destinazioni/singapore/natura-singapore',
      racconto:
        'La mattina ai Botanic Gardens all\'apertura, patrimonio UNESCO, pieni di gente che corre e fa tai chi. Oppure il TreeTop Walk di MacRitchie, passerella sospesa sopra la foresta pluviale, con macachi e varani sui sentieri. Partenza da Changi, dove conviene arrivare in anticipo.',
      tratte: [],
      senzaStrada: 'MRT per i Botanic Gardens e per Changi.',
      luoghi: [
        {
          nome: 'Botanic Gardens e MacRitchie',
          indirizzo: 'Singapore',
          web: 'nparks.gov.sg',
          gps: [1.34482, 103.82394],
          nota: 'Orari e chiusure del TreeTop Walk sul sito di NParks.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Kuala Lumpur', 'Taman Negara', 'Cameron', 'Penang', 'Malacca', 'Singapore'],
    legenda: 'Linea piena: il percorso in autobus, minibus e barca, fino al bus di frontiera per Singapore.',
    notaTempi: 'Tempi su strada stimati senza traffico (OSRM su OpenStreetMap). Il tratto in barca per Taman Negara e i controlli di frontiera allungano molto i tempi reali.',
    notaTempiFonti: ['osrm'],
    scalaKm: 100,
  },
  pass: {
    nome: 'Due paesi, due regole',
    titolo: 'Malesia e Singapore: cosa cambia alla frontiera',
    occhiello: 'La prima decisione',
    regola:
      'Malesia e Singapore sono vicine ma hanno regole molto diverse. Tutti e due chiedono una carta d\'arrivo online nei tre giorni prima. A Singapore le norme sono severe e si applicano anche ai turisti: sigarette elettroniche vietate anche nel possesso, chewing gum non ammessi, multe per i rifiuti per strada, controlli antidroga anche per sostanze consumate all\'estero.',
    scenari: [
      { situazione: 'Entri in Malesia', scelta: 'Malaysia Digital Arrival Card (MDAC), da tre giorni prima' },
      { situazione: 'Entri a Singapore, anche in bus', scelta: 'SG Arrival Card entro tre giorni prima dell\'arrivo, compreso il giorno stesso' },
      { situazione: 'Fumi la sigaretta elettronica', scelta: 'Lasciala a casa: a Singapore è vietato anche possederla' },
      { situazione: 'Vuoi risparmiare a Singapore', scelta: 'Dormi a Chinatown o Bugis, mangia negli hawker centre' },
    ],
    esito: 'In Malesia, oltre 10.000 USD in contanti vanno dichiarati sia in entrata sia in uscita.',
    fonti: ['vs-my', 'vs-sg'],
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno 6 mesi di validità all\'ingresso, sia in Malesia sia a Singapore.', fonti: ['vs-my', 'vs-sg'] },
        { voce: 'Visto', valore: 'Non serve per turismo fino a 90 giorni in Malesia e sotto i 90 giorni a Singapore.', fonti: ['vs-my', 'vs-sg'] },
        { voce: 'MDAC', valore: 'Malaysia Digital Arrival Card obbligatoria dal 1° dicembre 2023, da compilare online da tre giorni prima su imigresen-online.imi.gov.my/mdac.', fonti: ['vs-my'] },
        { voce: 'SG Arrival Card', valore: 'Obbligatoria per tutti, entro tre giorni prima dell\'arrivo (compreso il giorno stesso), su eservices.ica.gov.sg/sgarrivalcard.', fonti: ['vs-sg'] },
        { voce: 'Assicurazione', valore: 'In Malesia la sanità privata è migliore della pubblica ma cara: polizza con spese mediche consigliata.', fonti: ['vs-my'] },
      ],
    },
    {
      titolo: 'Soldi, telefono, corrente',
      righe: [
        { voce: 'Valute', valore: 'Ringgit malese (MYR o RM) in Malesia, dollaro di Singapore (SGD) a Singapore.', fonti: ['vs-my', 'vs-sg'] },
        { voce: 'Corrente', valore: '230 V, 50 Hz in tutti e due i paesi. Prese di tipo G (britanniche): serve l\'adattatore.', fonti: ['prese-my', 'prese-sg'] },
        { voce: 'Fuso orario', valore: 'Sette ore avanti rispetto all\'Italia, sei con l\'ora legale, in tutti e due i paesi.', fonti: ['vs-my', 'vs-sg'] },
        { voce: 'Lingua', valore: 'In Malesia l\'inglese lo parla la maggioranza, soprattutto in città. A Singapore è lingua ufficiale.', fonti: ['vs-my', 'vs-sg'] },
      ],
    },
    {
      titolo: 'Salute e regole',
      righe: [
        { voce: 'Dengue', valore: 'Presente in Malesia: repellente e abiti coprenti. Con la febbre niente aspirina senza il parere di un medico.', fonti: ['vs-my'] },
        { voce: 'Sanguisughe', valore: 'A Taman Negara nella stagione umida: calze antisanguisughe.' },
        { voce: 'Manifestazioni', valore: 'In Malesia per uno straniero partecipare a una manifestazione è illegale.', fonti: ['vs-my'] },
        { voce: 'Singapore', valore: 'Vietati sigarette elettroniche (anche il possesso), chewing gum non medicinali, rifiuti per strada e graffiti. Controlli antidroga anche per consumi avvenuti all\'estero.', fonti: ['vs-sg'] },
        { voce: 'Templi e moschee', valore: 'Spalle e ginocchia coperte; alle Batu Caves anche niente cibo in mano per le scimmie.' },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Malesia: polizia e pronto soccorso', valore: '999', fonti: ['vs-my'] },
      { voce: 'Malesia: vigili del fuoco', valore: '994', fonti: ['vs-my'] },
      { voce: 'Polizia di Kuala Lumpur, sede centrale (24 ore)', valore: '+60 3 2266 2222', fonti: ['vs-my'] },
      { voce: 'Malaysia Tourism, info line', valore: '1300 885 050', fonti: ['vs-my'] },
      { voce: 'Singapore: polizia', valore: '999', fonti: ['vs-sg'] },
      { voce: 'Singapore: ambulanza e vigili del fuoco', valore: '995 (da SIM straniera anche 112 e 911)', fonti: ['vs-sg'] },
    ],
    ambasciata: [
      {
        nome: 'Ambasciata d\'Italia in Malaysia',
        cosa: 'Kuala Lumpur. Email per le emergenze: kualalumpur.emergenza@esteri.it',
        indirizzo: '7 Jalan Penggawa, Taman U Thant, 55000 Kuala Lumpur',
        telefono: '+60 3 4256 5122 · +60 3 4256 5228 · ambasciata.kualalumpur@esteri.it',
        web: 'ambkualalumpur.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs-my'],
      },
      { nome: 'Ambasciata in Malaysia, funzionario di turno', cosa: 'Solo emergenze', telefono: '+60 12 382 1200', stato: 'ufficiale', fonti: ['vs-my'] },
      {
        nome: 'Ambasciata d\'Italia a Singapore',
        cosa: 'Cellulare di emergenza: +65 9062 9004',
        indirizzo: '9 Raffles Place, #33-01 Republic Plaza, Singapore',
        telefono: '+65 6250 6022 · ambasciata.singapore@esteri.it',
        web: 'ambsingapore.esteri.it',
        stato: 'ufficiale',
        avviso: 'Viaggiare Sicuri riporta due codici postali diversi (048619 e 048919).',
        fonti: ['vs-sg'],
      },
    ],
    ospedali: [],
  },
  contatti: [
    {
      gruppo: 'Siti ufficiali',
      voci: [
        { nome: 'MDAC', cosa: 'Carta d\'arrivo digitale della Malesia', web: 'imigresen-online.imi.gov.my/mdac/main', stato: 'ufficiale', fonti: ['vs-my'] },
        { nome: 'SG Arrival Card', cosa: 'Carta d\'arrivo di Singapore', web: 'eservices.ica.gov.sg/sgarrivalcard', stato: 'ufficiale', fonti: ['vs-sg'] },
        { nome: 'ICA, Immigration & Checkpoints Authority', cosa: 'Regole d\'ingresso a Singapore', indirizzo: '10 Kallang Road, Singapore 208718', telefono: '+65 6391 6100', web: 'ica.gov.sg', stato: 'ufficiale', fonti: ['vs-sg'] },
        { nome: 'Tourism Malaysia', cosa: 'Ente del turismo', telefono: '+60 3 8891 8000 · enquiries@tourism.gov.my', web: 'tourism.gov.my', stato: 'ufficiale', fonti: ['vs-my'] },
        { nome: 'KLIA Ekspres', cosa: 'Treno aeroporto-centro', web: 'kliaekspres.com', stato: 'ufficiale', fonti: [] },
        { nome: 'NParks', cosa: 'Botanic Gardens e MacRitchie', web: 'nparks.gov.sg', stato: 'ufficiale', fonti: [] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Kuala Lumpur e Singapore-Italia' },
      { voce: 'KLIA Ekspres' },
      { voce: 'Minibus e barca per Taman Negara' },
      { voce: 'Permessi del parco, canopy walkway, night walk' },
      { voce: 'Bus per Cameron, Penang e Malacca' },
      { voce: 'Tour delle piantagioni e mossy forest' },
      { voce: 'Baba & Nyonya Heritage Museum' },
      { voce: 'Bus Malacca-Singapore' },
      { voce: 'Hotel a Singapore', nota: 'la voce più cara del viaggio' },
      { voce: 'Hawker centre', nota: 'il modo economico di mangiare a Singapore' },
    ],
    nota: 'Nel diario i costi non sono annotati: le righe le riempi tu, con i prezzi presi dai siti ufficiali.',
  },
  valigia: [
    { gruppo: 'Documenti', voci: ['Passaporto con 6 mesi di validità', 'MDAC compilata', 'SG Arrival Card compilata prima del bus', 'Polizza sanitaria', 'Carta di credito e contanti in ringgit'] },
    { gruppo: 'Vestiti', voci: ['Abiti che coprono spalle e ginocchia', 'Felpa per le Cameron Highlands', 'Scarpe chiuse per la giungla', 'Calze antisanguisughe', 'K-way per i temporali'] },
    { gruppo: 'Zaino del giorno', voci: ['Torcia per la night walk', 'Repellente', 'Crema solare e cappello', 'Borraccia', 'Power bank'] },
    { gruppo: 'Tecnica e salute', voci: ['Adattatore per prese G', 'Farmaci contro il mal d\'auto per i tornanti', 'Paracetamolo', 'Niente sigaretta elettronica per Singapore'] },
  ],
  lingua: {
    nome: 'Malese (Bahasa Malaysia)',
    pronuncia: 'Si legge quasi come si scrive. «c» è la «ci» di «ciao», «sy» è «sc», la «e» spesso è muta. In città l\'inglese basta quasi sempre; a Singapore è lingua ufficiale.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Buongiorno', loc: 'selamat pagi' },
        { it: 'Grazie', loc: 'terima kasih' },
        { it: 'Prego', loc: 'sama-sama' },
        { it: 'Scusi', loc: 'maaf' },
        { it: 'Sì', loc: 'ya' },
        { it: 'No', loc: 'tidak' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Quanto costa?', loc: 'berapa harga?' },
        { it: 'Troppo caro', loc: 'mahal sangat' },
        { it: 'Dov\'è il bagno?', loc: 'tandas di mana?' },
        { it: 'Non capisco', loc: 'saya tidak faham' },
        { it: 'Stazione degli autobus', loc: 'stesen bas' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Acqua', loc: 'air' },
        { it: 'Non piccante', loc: 'tidak pedas' },
        { it: 'Il conto, per favore', loc: 'kira, ya' },
        { it: 'Buonissimo', loc: 'sedap' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'tolong!' },
        { it: 'Polizia', loc: 'polis' },
        { it: 'Ospedale', loc: 'hospital' },
        { it: 'Mi serve un medico', loc: 'saya perlukan doktor' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'satu' },
    { it: '2', loc: 'dua' },
    { it: '3', loc: 'tiga' },
    { it: '4', loc: 'empat' },
    { it: '5', loc: 'lima' },
    { it: '6', loc: 'enam' },
    { it: '7', loc: 'tujuh' },
    { it: '8', loc: 'lapan' },
    { it: '9', loc: 'sembilan' },
    { it: '10', loc: 'sepuluh' },
    { it: '20', loc: 'dua puluh' },
    { it: '100', loc: 'seratus' },
    { it: '1000', loc: 'seribu' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/malesia-singapore' },
    { titolo: 'Malesia, scheda paese', path: '/destinazioni/malesia' },
    { titolo: 'Kuala Lumpur', path: '/destinazioni/malesia/kuala-lumpur' },
    { titolo: 'Taman Negara', path: '/destinazioni/malesia/taman-negara' },
    { titolo: 'Street food a Penang', path: '/esperienze/malesia/street-food-penang' },
    { titolo: 'Malacca', path: '/destinazioni/malesia/malacca' },
    { titolo: 'Singapore', path: '/destinazioni/singapore' },
    { titolo: 'Gli hawker centre', path: '/esperienze/singapore/hawker-centre' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Tariffe del KLIA Ekspres, dei permessi di Taman Negara, della canopy walkway e della barca sul Tembeling',
    'Orari e biglietti di Batu Caves, Kek Lok Si, Penang Hill, Baba & Nyonya Museum, Gardens by the Bay e TreeTop Walk',
    'Orari e prezzi degli autobus interurbani e del bus Malacca-Singapore',
    'Nomi e contatti di hotel, guesthouse e banchi di street food',
    'Ospedali lungo il percorso (Viaggiare Sicuri non ne elenca)',
  ],
  fonti: [
    { id: 'vs-my', titolo: 'Viaggiare Sicuri (Farnesina), scheda Malaysia (agg. 23/10/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/MYS.json' },
    { id: 'vs-sg', titolo: 'Viaggiare Sicuri (Farnesina), scheda Singapore (agg. 06/03/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/SGP.json' },
    { id: 'prese-my', titolo: 'WorldStandards, prese elettriche in Malesia', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/malaysia/' },
    { id: 'prese-sg', titolo: 'WorldStandards, prese elettriche a Singapore', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/singapore/' },
    { id: 'osm', titolo: 'OpenStreetMap (coordinate)', url: 'https://www.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
