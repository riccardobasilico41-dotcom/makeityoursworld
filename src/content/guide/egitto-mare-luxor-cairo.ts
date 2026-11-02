import type { Guida } from './types'

/**
 * Guida PDF «Egitto in 11 giorni: Cairo, Luxor e Mar Rosso». Il racconto e i prezzi
 * vengono da src/content/viaggi/71-egitto-mare-luxor-cairo.md, che li ha verificati
 * il 30/10/2026 sulla biglietteria ufficiale egymonuments.com. Emergenze,
 * ambasciata, consolati, ingresso e sicurezza: Viaggiare Sicuri (21/07/2026) e
 * Foreign Office britannico, consultati il 2/11/2026.
 *
 * Distanze e tempi: router OSRM su dati OpenStreetMap, traffico libero.
 * Coordinate: OpenStreetMap (geocoder Photon).
 */

export const guidaEgittoMare: Guida = {
  slug: 'egitto-mare-luxor-cairo',
  tripSlug: 'egitto-mare-luxor-cairo',
  paese: 'Egitto',
  titolo: 'Egitto: Cairo, Luxor e Mar Rosso',
  sottotitolo: 'Undici giorni: le piramidi e il Grand Egyptian Museum, i templi di Luxor, poi il reef di Marsa Alam. Giorno per giorno, con prezzi dei siti e contatti utili.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Questo giro l\'abbiamo pensato con amici, in autonomia: un volo interno Cairo-Luxor, un autista per scendere al mare e qualche guida locale. L\'ordine conta: il Cairo, che è la parte più faticosa, poi Luxor in aereo per i due giorni più densi di archeologia, e alla fine il Mar Rosso. Dal mare si rientra in Italia senza ripassare dal Cairo.',
    'Qui trovi per ogni giorno strade e chilometri, i biglietti dei siti al prezzo della biglietteria ufficiale, le coordinate, poi visto, soldi, truffe comuni, numeri di emergenza, Ambasciata al Cairo e consolati onorari sul Mar Rosso.',
    'I prezzi per i turisti stranieri in Egitto sono cambiati più volte dal 2024. Quelli che trovi sono di fine ottobre 2026: prima di partire ricontrollali su egymonuments.com.',
  ],
  cosaInPiu: [
    'Una scheda per giorno con chilometri, tempi di guida, biglietti e coordinate GPS',
    'I prezzi dei siti dalla biglietteria ufficiale, con il cambio in euro',
    'Le truffe più comuni a Giza e a Luxor e come evitarle',
    'Visto, carta d\'identità con fototessere, limiti su alcol, droni e valuta',
    'Numeri di emergenza, Ambasciata al Cairo, consolati onorari di Hurghada e Sharm, corrispondente a Luxor, Ospedale Italiano',
    'Lista per la valigia e frasario in arabo egiziano',
  ],
  tappe: [
    { nome: 'Cairo · Giza', gps: [29.97916, 31.13421], giorno: 'G1-G4', etichetta: 'sinistra' },
    { nome: 'Saqqara', gps: [29.8712, 31.21657], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Luxor', gps: [25.69953, 32.63907], giorno: 'G4-G6', etichetta: 'sinistra' },
    { nome: 'Edfu', gps: [24.97722, 32.87249], giorno: 'G7', etichetta: 'sinistra' },
    { nome: 'Marsa Alam', gps: [25.06999, 34.89382], giorno: 'G7-G11', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo al Cairo, notte a Giza',
      paginaSito: '/destinazioni/egitto/cairo',
      racconto:
        'Il primo giorno è servito solo ad arrivare. Visto allo sportello prima dei controlli (chi non ha l\'e-visa), poi Uber o transfer fino a Giza: dormire lì fa risparmiare due tragitti nel traffico. Se si arriva nel pomeriggio, terrazza con vista sull\'altopiano e, volendo, lo spettacolo di suoni e luci alla Sfinge.',
      tratte: [{ da: 'Aeroporto del Cairo (CAI)', a: 'Giza, piramidi', km: 42, minuti: 46, mezzo: 'Uber o transfer', nelMioViaggio: '45-75 minuti secondo il traffico' }],
      luoghi: [
        {
          nome: 'Aeroporto internazionale del Cairo (CAI)',
          gps: [30.11405, 31.42455],
          nota: 'Visto all\'arrivo allo sportello prima dei controlli. SIM o eSIM ai banchi Vodafone e Orange negli arrivi.',
          fonti: ['osm', 'articolo'],
        },
      ],
      mangiare: [],
      dormire: 'Giza, vicino alle piramidi e al GEM. Fascia indicativa del mio articolo: guesthouse a Nazlet el-Semman 30-50 €, boutique hotel 70-120 €, Marriott Mena House per il lusso.',
      costiNoti: ['Visto all\'arrivo: 30 $', 'Uber aeroporto-Giza: 300-500 EGP'],
    },
    {
      numero: 2,
      titolo: 'Piramidi di Giza e Grand Egyptian Museum',
      paginaSito: '/destinazioni/egitto/piramidi',
      racconto:
        'L\'altopiano apre alle 7 ed è l\'ora giusta: luce bassa, i pullman arrivano dopo le 9. Abbiamo usato il bus elettrico interno tra piramidi, punto panoramico e Sfinge, per evitare gli intermediari di cammelli. Dopo pranzo il Grand Egyptian Museum, a due chilometri: la scalinata dei faraoni e tutto il corredo di Tutankhamon. Servono tre o quattro ore.',
      tratte: [{ da: 'Piramidi di Giza', a: 'Grand Egyptian Museum', km: 6, minuti: 9, nelMioViaggio: 'circa due chilometri in linea d\'aria' }],
      luoghi: [
        {
          nome: 'Altopiano di Giza',
          orari: 'Apertura alle 07:00',
          biglietto: '700 EGP; interno della Grande Piramide circa 1.500 EGP a parte',
          web: 'egymonuments.com',
          gps: [29.97916, 31.13421],
          nota: 'Concorda prima prezzo totale, durata e percorso di cammelli e cavalli, o usa il bus interno.',
          fonti: ['egymon', 'osm'],
        },
        {
          nome: 'Grand Egyptian Museum (GEM)',
          biglietto: '1.830 EGP (circa 35 $) dal 1° novembre 2026, solo con prenotazione online a fascia oraria',
          gps: [29.99458, 31.11907],
          fonti: ['articolo', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Giza.',
      costiNoti: ['Giza: 700 EGP', 'Grande Piramide: circa 1.500 EGP', 'GEM: 1.830 EGP'],
    },
    {
      numero: 3,
      titolo: 'Saqqara, Dahshur, Khan el-Khalili',
      paginaSito: '/destinazioni/egitto/piramidi',
      racconto:
        'La giornata che spiega meglio le piramidi. A Saqqara la piramide a gradoni di Djoser e le mastabe con i rilievi di vita quotidiana; a Dahshur la Romboidale con l\'errore d\'inclinazione e la Rossa, dove si scende dentro con poca gente. Auto con autista prenotata dall\'hotel. La sera al Khan el-Khalili, tè al caffè El Fishawy e koshari per cena.',
      tratte: [
        { da: 'Giza', a: 'Saqqara (Djoser)', km: 20, minuti: 29 },
        { da: 'Saqqara', a: 'Dahshur (piramide Rossa)', km: 11, minuti: 23, nelMioViaggio: 'mezz\'ora' },
        { da: 'Dahshur', a: 'Khan el-Khalili', km: 43, minuti: 38 },
      ],
      luoghi: [
        { nome: 'Saqqara, piramide di Djoser', biglietto: '600 EGP', gps: [29.8712, 31.21657], fonti: ['egymon', 'osm'] },
        { nome: 'Dahshur, piramide Rossa e Romboidale', biglietto: '200 EGP', gps: [29.80855, 31.20624], fonti: ['egymon', 'osm'] },
        { nome: 'Khan el-Khalili', gps: [30.04774, 31.26151], nota: 'Si tratta sempre, partendo da un terzo del prezzo chiesto.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Giza o Cairo.',
      costiNoti: ['Autista per Saqqara e Dahshur: 30-50 $ a macchina'],
    },
    {
      numero: 4,
      titolo: 'Cairo islamico, volo per Luxor',
      paginaSito: '/destinazioni/egitto/cairo',
      racconto:
        'La mattina la Cittadella di Saladino con la moschea di Muhammad Ali e la vista sulla città, sotto la moschea del sultano Hassan e la via al-Muizz. Chi preferisce il Cairo copto va a Mar Girgis in metro. Nel pomeriggio un\'ora di volo per Luxor, in tempo per il tempio di Luxor al tramonto con le luci accese.',
      tratte: [
        { da: 'Cittadella', a: 'Aeroporto del Cairo', km: 23, minuti: 27 },
        { da: 'Cairo (CAI)', a: 'Luxor (LXR)', km: 510, minuti: 60, mezzo: 'volo EgyptAir', nelMioViaggio: 'un\'ora' },
        { da: 'Aeroporto di Luxor', a: 'Tempio di Luxor', km: 9, minuti: 11 },
      ],
      luoghi: [
        { nome: 'Cittadella di Saladino', biglietto: '550 EGP', gps: [30.0293, 31.26158], nota: 'Foulard per le donne nelle moschee; spalle e ginocchia coperte per tutti.', fonti: ['egymon', 'osm'] },
        { nome: 'Tempio di Luxor', orari: 'Aperto fino a sera', biglietto: '500 EGP', gps: [25.69953, 32.63907], fonti: ['egymon', 'osm'] },
      ],
      mangiare: [],
      dormire: 'Luxor, riva est sul Nilo (60-110 € nella fascia media del mio articolo) o guesthouse sulla riva ovest.',
      costiNoti: ['Volo Cairo-Luxor: 60-120 € prenotato per tempo'],
      nota: 'Alternativa al volo: il treno notte con cabine letto di Abela Trains (abelatrains.com), 10-11 ore, 110-125 $ a persona in doppia.',
    },
    {
      numero: 5,
      titolo: 'Riva ovest: Valle dei Re e Hatshepsut',
      paginaSito: '/destinazioni/egitto/luxor',
      racconto:
        'All\'alba, per il caldo e la folla. Valle dei Re con tre tombe nel biglietto base; Tutankhamon e Seti I si pagano a parte all\'ingresso. Poi il tempio di Hatshepsut a Deir el-Bahari e i Colossi di Memnone; chi ha ancora energia aggiunge Medinet Habu, con i colori meglio conservati. Al tramonto traghetto pubblico per la riva est.',
      tratte: [{ da: 'Tempio di Luxor (riva est)', a: 'Valle dei Re', km: 17, minuti: 25, mezzo: 'auto con autista' }],
      luoghi: [
        { nome: 'Valle dei Re', biglietto: '750 EGP con 3 tombe; Tutankhamon circa 700 EGP, Seti I circa 2.000 EGP', gps: [25.74049, 32.60176], nota: 'I biglietti di Tutankhamon e Seti I si comprano all\'ingresso della valle. Una guida abilitata sa quali tombe sono aperte quel giorno.', fonti: ['egymon', 'articolo', 'osm'] },
        { nome: 'Tempio di Hatshepsut (Deir el-Bahari)', biglietto: '440 EGP', gps: [25.73784, 32.60767], fonti: ['egymon', 'osm'] },
        { nome: 'Colossi di Memnone', gps: [25.72049, 32.61044], fonti: ['osm'] },
        { nome: 'Medinet Habu', biglietto: '220 EGP', gps: [25.71768, 32.60224], fonti: ['egymon', 'osm'] },
      ],
      mangiare: [],
      dormire: 'Luxor.',
      costiNoti: ['Auto con autista per la riva ovest: 25-40 $'],
    },
    {
      numero: 6,
      titolo: 'Mongolfiera, Karnak e Nilo',
      paginaSito: '/destinazioni/egitto/luxor',
      racconto:
        'Sveglia alle 4 per la mongolfiera: 40-60 minuti sopra templi e campi di canna da zucchero. Si sceglie una compagnia seria, non la più economica; con vento forte il volo si annulla e si rimborsa. Poi Karnak, con la sala ipostila di 134 colonne, due o tre ore la mattina. Pomeriggio in feluca sul Nilo o al museo di Luxor.',
      tratte: [{ da: 'Tempio di Luxor', a: 'Karnak', km: 3, minuti: 4, nelMioViaggio: 'a piedi o in Uber' }],
      luoghi: [
        { nome: 'Karnak', biglietto: '600 EGP', gps: [25.71969, 32.65273], fonti: ['egymon', 'osm'] },
      ],
      mangiare: [],
      dormire: 'Luxor.',
      costiNoti: ['Mongolfiera: 50-100 $ a persona con transfer', 'Feluca: prezzo a barca, da concordare prima'],
    },
    {
      numero: 7,
      titolo: 'Da Luxor al Mar Rosso, via Edfu',
      paginaSito: '/destinazioni/egitto/mar-rosso',
      racconto:
        'Partenza in mattinata con l\'autista. Sosta di un\'ora a Edfu, il tempio di Horus meglio conservato d\'Egitto, poi il deserto orientale fino al mare nel primo pomeriggio. Il resto della giornata in spiaggia: dopo sei giorni di siti, il primo bagno sul reef. Chi ha scelto Hurghada va per Qena, circa quattro ore senza soste importanti.',
      tratte: [
        { da: 'Luxor', a: 'Edfu', km: 111, minuti: 82 },
        { da: 'Edfu', a: 'Marsa Alam', km: 225, minuti: 247, nelMioViaggio: 'in tutto 4-4,5 ore' },
      ],
      luoghi: [
        { nome: 'Tempio di Horus a Edfu', biglietto: '550 EGP', gps: [24.97722, 32.87249], fonti: ['egymon', 'osm'] },
      ],
      mangiare: [],
      dormire: 'Marsa Alam, resort con reef davanti (70-130 € a camera nella fascia media del mio articolo).',
      costiNoti: ['Auto privata Luxor-Marsa Alam: 100-150 $ a veicolo (per Hurghada 70-120 $)'],
      nota: 'Lungo la strada ci sono posti di blocco: tieni il passaporto a portata di mano. Viaggiare Sicuri chiede di non viaggiare in auto di notte.',
    },
    {
      numero: 8,
      titolo: 'Il reef dalla riva, Abu Dabbab',
      paginaSito: '/destinazioni/egitto/mar-rosso',
      racconto:
        'Prima giornata intera al mare. Quasi tutti i resort di Marsa Alam hanno un pontile nel reef: maschera e pinne bastano. La baia di Abu Dabbab, con le tartarughe sulla prateria e con fortuna il dugongo, va fatta al mattino presto, prima delle barche. Chi non si è mai immerso può fare un battesimo con un centro diving.',
      tratte: [{ da: 'Marsa Alam', a: 'Abu Dabbab', km: 36, minuti: 29 }],
      luoghi: [
        { nome: 'Baia di Abu Dabbab', biglietto: 'Ingresso per i non ospiti indicativamente 10-20 $ (senza fonte ufficiale)', gps: [25.34314, 34.79354], fonti: ['osm', 'articolo'] },
      ],
      mangiare: [],
      dormire: 'Marsa Alam.',
      costiNoti: ['Battesimo del mare: 60-90 $'],
      nota: 'Crema solare reef safe e maglietta di lycra: sul reef ci si scotta in un\'ora.',
    },
    {
      numero: 9,
      titolo: 'In barca: Dolphin House o immersioni',
      paginaSito: '/destinazioni/egitto/mar-rosso',
      racconto:
        'Giornata in barca a Dolphin House (Samadai), il reef a ferro di cavallo dei delfini spinner, a numero chiuso: si guardano in acqua senza inseguirli. Chi ha il brevetto fa due immersioni, Elphinstone per i longimano da ottobre a dicembre o i reef più tranquilli. Da Hurghada si va invece alle isole Giftun.',
      tratte: [],
      senzaStrada: 'Uscita in barca dal porto o dal pontile del centro diving.',
      luoghi: [],
      mangiare: [],
      dormire: 'Marsa Alam.',
      costiNoti: ['Dolphin House con pranzo: 40-60 $', 'Due immersioni in barca: 70-110 $, attrezzatura a parte'],
      nota: 'Prima di immergerti chiedi al centro diving dov\'è la camera iperbarica più vicina e come gestisce le emergenze: Viaggiare Sicuri lo raccomanda.',
    },
    {
      numero: 10,
      titolo: 'Wadi el Gemal o giornata libera',
      paginaSito: '/destinazioni/egitto/mar-rosso',
      racconto:
        'L\'ultimo giorno pieno si sceglie in base all\'energia. Il parco di Wadi el Gemal unisce deserto, mangrovie e la baia di Sharm el Luli, con l\'acqua più chiara della costa. In alternativa il deserto al tramonto con cena beduina, o un giorno in spiaggia.',
      tratte: [{ da: 'Marsa Alam', a: 'Sharm el Luli', km: 68, minuti: 50 }],
      luoghi: [
        { nome: 'Sharm el Luli (Wadi el Gemal)', gps: [24.55423, 35.14554], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Marsa Alam.',
      costiNoti: ['Wadi el Gemal e Sharm el Luli: 35-60 $', 'Cena beduina: 30-50 $'],
      nota: 'Nel deserto solo con operatori: Viaggiare Sicuri sconsiglia le zone non turistiche e segnala mine inesplose nel retroterra della costa.',
    },
    {
      numero: 11,
      titolo: 'Rientro',
      racconto: 'Transfer all\'aeroporto di Marsa Alam (o Hurghada) e volo diretto per l\'Italia.',
      tratte: [{ da: 'Marsa Alam', a: 'Aeroporto di Marsa Alam (RMF)', km: 68, minuti: 52 }],
      luoghi: [{ nome: 'Aeroporto di Marsa Alam (RMF)', gps: [25.55673, 34.58622], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
      nota: 'Arriva 3 ore prima: i controlli sono doppi. Conchiglie, coralli e sabbia vengono sequestrati. Spendi le ultime sterline: fuori dall\'Egitto non si cambiano.',
    },
  ],
  mappa: {
    percorso: ['Cairo', 'Saqqara', 'Luxor', 'Edfu', 'Marsa Alam'],
    legenda: 'Cairo-Luxor in volo, poi su strada da Luxor a Edfu e attraverso il deserto fino a Marsa Alam. Coste e Nilo non disegnati.',
    notaTempi: 'Tempi su strada stimati senza traffico (OSRM su OpenStreetMap). Al Cairo il traffico può raddoppiarli.',
    notaTempiFonti: ['osrm'],
    scalaKm: 100,
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Documento', valore: 'Passaporto con almeno 6 mesi di validità all\'arrivo. Solo per turismo vale anche la carta d\'identità elettronica valida per l\'espatrio, con più di 6 mesi residui e due fototessere: senza foto niente visto. Non valgono la CIE prorogata con il cedolino né il modello ATe.', fonti: ['vs'] },
        { voce: 'Visto', valore: 'All\'arrivo in aeroporto, 30 $ dal 1° marzo 2026 (Viaggiare Sicuri riporta ancora 25 $), oppure e-visa sul portale ufficiale visa2egypt.gov.eg. Attento ai siti che lo imitano.', fonti: ['vs', 'articolo'] },
        { voce: 'Dogana', valore: 'Al massimo 1 bottiglia di alcolici e 1 stecca di sigarette (altre 3 si comprano entro 24 ore nei duty free autorizzati). Valuta straniera libera sotto i 10.000 $; al massimo 5.000 EGP.', fonti: ['vs'] },
        { voce: 'Droni', valore: 'Solo con autorizzazione del Ministero della Difesa: senza, vengono sequestrati.', fonti: ['vs'] },
        { voce: 'Assicurazione', valore: 'Raccomandata con spese mediche e rimpatrio: le cliniche private costano moltissimo.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Soldi',
      righe: [
        { voce: 'Valuta', valore: 'Lira egiziana (EGP), circa 58-62 EGP per un euro a ottobre 2026: 600 EGP sono circa 10 €. Molti prezzi turistici sono in dollari.', fonti: ['articolo'] },
        { voce: 'Biglietti', valore: 'Le biglietterie dei siti statali accettano solo carte; i biglietti si comprano anche su egymonuments.com.', fonti: ['articolo', 'egymon'] },
        { voce: 'Contanti', valore: 'Tagli piccoli per taxi, mance, bagni, acqua e mercati: il resto spesso «non c\'è».' },
        { voce: 'Mance', valore: 'Indicativamente 10-20 EGP per bagni e piccoli servizi, 50-100 EGP al giorno all\'autista, 100-200 EGP al giorno a una guida.', fonti: ['articolo'] },
      ],
    },
    {
      titolo: 'Truffe comuni',
      righe: [
        { voce: 'Cammelli a Giza', valore: 'Prezzo basso per salire e triplo per scendere: concorda prima totale, durata e percorso.' },
        { voce: '«È chiuso»', valore: 'Chi ferma il taxi prima dell\'ingresso dicendo che il sito è chiuso vuole portarti alla sua stalla. L\'ingresso ufficiale è aperto.' },
        { voce: 'Finte guide', valore: 'Le guide vere hanno il tesserino del Ministero: meglio prenotarle prima.' },
        { voce: 'Negozi e regali', valore: 'Dì subito no alle visite «gratuite» a papiri e profumi; restituisci subito il braccialetto o lo scarabeo «regalato».' },
        { voce: 'Guardiani nelle tombe', valore: 'Offrono la foto vietata o l\'angolo chiuso, poi chiedono la mancia, a volte minacciando la multa.' },
      ],
    },
    {
      titolo: 'Sicurezza e salute',
      righe: [
        { voce: 'Quadro', valore: 'Situazione stabile e poca microcriminalità nelle zone turistiche, ma vigilanza alta. Niente manifestazioni, niente dichiarazioni politiche, anche sui social: in caso di fermo la polizia può controllare il telefono.', fonti: ['vs'] },
        { voce: 'Foto', valore: 'Vietato fotografare militari, polizia e installazioni di sicurezza.', fonti: ['vs'] },
        { voce: 'Strada', valore: 'Non viaggiare in auto o in pullman di notte; solo autisti e operatori autorizzati.', fonti: ['vs'] },
        { voce: 'Zone da evitare', valore: 'Sinai fuori dai resort di Sharm e dal monastero di Santa Caterina, confini con Libia, Sudan e Gaza, deserto fuori dai percorsi turistici.', fonti: ['vs'] },
        { voce: 'Salute', valore: 'Epatite A e B, tetano e tifo dopo il parere del medico. Solo acqua in bottiglia, niente ghiaccio. Dengue segnalata nell\'Alto Egitto e sulla costa sud del Mar Rosso: repellente.', fonti: ['vs'] },
        { voce: 'Abbigliamento', valore: 'Spalle e ginocchia coperte al Cairo, nelle moschee e nei villaggi; costume solo nei resort.' },
        { voce: 'Fuso orario', valore: 'Un\'ora avanti all\'Italia d\'inverno; Viaggiare Sicuri indica la stessa ora quando in Italia c\'è l\'ora legale.', fonti: ['vs'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Polizia', valore: '122', fonti: ['vs', 'uk'] },
      { voce: 'Ambulanza', valore: '123', fonti: ['uk'] },
      { voce: 'Polizia turistica', valore: '126', fonti: ['uk'] },
      { voce: 'Vigili del fuoco', valore: '180', fonti: ['uk'] },
      { voce: 'EgyptAir, call center dall\'Egitto', valore: '1717 da cellulare egiziano', fonti: ['vs'] },
    ],
    ambasciata: [
      {
        nome: 'Ambasciata d\'Italia al Cairo',
        cosa: 'Centralino attivo 24 ore',
        indirizzo: 'Nile City Towers, Torre Nord, 21° piano, 2005 Corniche El Nil, Boulaq, Cairo',
        telefono: '+20 2 2794 3194 · +20 2 2794 3195 · ambasciata.cairo@esteri.it',
        web: 'ambilcairo.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      {
        nome: 'Cancelleria consolare',
        cosa: 'Passaporti e documenti',
        indirizzo: 'Nile City Towers, Torre Sud, 7° piano, Cairo',
        telefono: '+20 2 2461 9680 · emergenze +20 100 669 0079 · consolare.cairo@esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      {
        nome: 'Consolato onorario a Hurghada',
        cosa: 'Competente per la costa africana del Mar Rosso, Marsa Alam compresa',
        indirizzo: 'Intercontinental area n. 11, Paradise Village, Hurghada',
        telefono: '+20 65 346508 · emergenze +20 111 080 6166 · hurgada.onorario@esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      {
        nome: 'Corrispondente consolare a Luxor',
        cosa: 'Francis Amin, per emergenze',
        telefono: '+20 122 340 3381',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
    ],
    ospedali: [
      { nome: 'Ospedale Italiano Umberto I', cosa: 'Cairo', indirizzo: '17 El Sarayat Street, Abbassia, Cairo', telefono: '+20 2 2674 0088', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Abbassia Fever Hospital', cosa: 'Cairo, pubblico, malattie infettive', indirizzo: 'El-Abaseya, Emtedad Ramses, Cairo', telefono: '+20 2 2342 4025', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Luxor e Marsa Alam', cosa: 'Nessun ospedale con numero verificato', stato: 'ufficiale', avviso: 'Chiedi al resort o chiama il 123. Per i sub: verifica in anticipo la camera iperbarica più vicina.', fonti: ['vs'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Biglietti, visti, trasporti',
      voci: [
        { nome: 'Egypt Monuments', cosa: 'Biglietteria online ufficiale dei siti', web: 'egymonuments.com', stato: 'ufficiale', fonti: ['egymon'] },
        { nome: 'Visa2Egypt', cosa: 'Portale ufficiale dell\'e-visa', web: 'visa2egypt.gov.eg', stato: 'ufficiale', fonti: ['articolo'] },
        { nome: 'EgyptAir', cosa: 'Voli interni. Ufficio del Cairo', telefono: '+20 2 2393 0381 · +20 2 2393 2836', stato: 'ufficiale', fonti: ['vs'] },
        { nome: 'Abela Trains', cosa: 'Treno notte Cairo-Luxor con cabine letto', web: 'abelatrains.com', stato: 'non-provato', fonti: ['articolo'] },
        { nome: 'Uber · Careem', cosa: 'Taxi via app al Cairo e a Luxor', stato: 'usato', fonti: ['articolo'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli internazionali' },
      { voce: 'Visto', costo: '30 $' },
      { voce: 'Biglietti dei siti', costo: '120-160 €', nota: 'più 55-60 € con Seti I e l\'interno di Cheope' },
      { voce: 'Volo Cairo-Luxor', costo: '60-120 €' },
      { voce: 'Autisti e trasferimenti', costo: '60-100 €', nota: 'a testa, in due' },
      { voce: 'Alloggi Cairo e Luxor', costo: '50-90 €', nota: 'a notte a camera' },
      { voce: 'Resort al mare', costo: '70-130 €', nota: 'a notte, all-inclusive' },
      { voce: 'Mongolfiera', costo: '50-100 $' },
      { voce: 'Escursioni in barca e immersioni', costo: '120-250 €' },
      { voce: 'Pasti fuori dal resort', costo: '10-25 €', nota: 'al giorno' },
      { voce: 'Mance', costo: '40-70 €', nota: 'tutto il viaggio' },
      { voce: 'SIM o eSIM' },
    ],
    nota: 'Cifre indicative di ottobre 2026 dal mio articolo. In totale, 1.100-1.700 € a persona in due, voli internazionali esclusi.',
    cambio: 'Cambio di riferimento: 1 € ≈ 60 EGP (ottobre 2026).',
    cambioFonti: ['articolo'],
  },
  valigia: [
    {
      gruppo: 'Documenti e soldi',
      voci: ['Passaporto con 6 mesi di validità (o CIE + 2 fototessere)', '30 $ in contanti per il visto', 'Biglietto GEM prenotato', 'Fotocopia del passaporto', 'Assicurazione sanitaria', 'Carta di credito', 'Banconote piccole'],
    },
    {
      gruppo: 'Vestiti',
      voci: ['Pantaloni lunghi e maglie con le maniche', 'Foulard per le moschee', 'Cappello e occhiali da sole', 'Scarpe comode chiuse', 'Felpa per l\'alba in mongolfiera', 'Costume e maglietta di lycra', 'Muta corta se vai tra dicembre e marzo'],
    },
    {
      gruppo: 'Salute e tecnica',
      voci: ['Repellente per zanzare', 'Crema solare reef safe', 'Antidiarroico e reidratanti', 'Maschera e pinne', 'Power bank', 'Niente drone'],
    },
  ],
  lingua: {
    nome: 'Arabo egiziano, traslitterato',
    pronuncia: 'Nell\'egiziano la «g» è dura (gamal, cammello), la «q» spesso diventa una pausa. «kh» come la jota spagnola. Nei luoghi turistici si parla inglese, a Sharm anche italiano.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Salve', loc: 'as-salāmu ʿalaykum' },
        { it: 'Benvenuto', loc: 'ahlan wa sahlan' },
        { it: 'Grazie', loc: 'shukran' },
        { it: 'Per favore', loc: 'min faḍlak' },
        { it: 'Sì · No', loc: 'aywa · laʾ' },
        { it: 'Va bene', loc: 'māshi' },
        { it: 'Se Dio vuole', loc: 'inshallah' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Quanto costa?', loc: 'bikam?' },
        { it: 'Troppo caro', loc: 'ghāli awi' },
        { it: 'No grazie', loc: 'laʾ shukran', nota: 'da ripetere con calma' },
        { it: 'Basta così', loc: 'khalāṣ' },
        { it: 'Dov\'è…?', loc: 'fēn…?' },
        { it: 'Piano piano', loc: 'shwaya shwaya' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Acqua', loc: 'mayya' },
        { it: 'Tè', loc: 'shāy' },
        { it: 'Il conto', loc: 'il-ḥisāb' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'ilḥaʾūni!' },
        { it: 'Medico', loc: 'doktōr' },
        { it: 'Ospedale', loc: 'mustashfa' },
        { it: 'Polizia', loc: 'bulīs' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'wāḥid' },
    { it: '2', loc: 'itnēn' },
    { it: '3', loc: 'talāta' },
    { it: '4', loc: 'arbaʿa' },
    { it: '5', loc: 'khamsa' },
    { it: '10', loc: 'ʿashara' },
    { it: '20', loc: 'ʿishrīn' },
    { it: '100', loc: 'miyya' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/egitto-mare-luxor-cairo' },
    { titolo: 'Egitto, la scheda paese', path: '/destinazioni/egitto' },
    { titolo: 'Il Cairo', path: '/destinazioni/egitto/cairo' },
    { titolo: 'Le piramidi', path: '/destinazioni/egitto/piramidi' },
    { titolo: 'Luxor', path: '/destinazioni/egitto/luxor' },
    { titolo: 'Il Mar Rosso', path: '/destinazioni/egitto/mar-rosso' },
  ],
  consultate: 'Prezzi dei siti consultati il 30 ottobre 2026; emergenze e regole d\'ingresso il 2 novembre 2026. Prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Prezzi di Tutankhamon, Seti I e dell\'interno di Cheope: non sono sulla biglietteria online, cifre da guide 2026',
    'Costo dell\'e-visa (25 o 30 $, fonti discordanti)',
    'Ingresso ad Abu Dabbab per i non ospiti',
    'Orari dei siti oltre all\'apertura di Giza',
    'Ospedali con telefono a Luxor e sul Mar Rosso; posizione delle camere iperbariche',
    'Prezzi di mongolfiere, barche e diving: indicativi',
    'Nomi degli hotel: non annotati',
  ],
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri, scheda Egitto (agg. 21/07/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/EGY.json' },
    { id: 'uk', titolo: 'UK Foreign Office, Egypt: getting help', url: 'https://www.gov.uk/foreign-travel-advice/egypt/getting-help' },
    { id: 'egymon', titolo: 'Egypt Monuments, biglietteria ufficiale (prezzi al 30/10/2026)', url: 'https://egymonuments.com' },
    { id: 'articolo', titolo: 'Make It Yours World, Egitto in 11 giorni (verifiche del 30/10/2026: GEM, visto, Abela Trains)', url: 'https://makeityoursworld.vercel.app/viaggi/egitto-mare-luxor-cairo' },
    { id: 'osm', titolo: 'OpenStreetMap (coordinate, geocoder Photon)', url: 'https://photon.komoot.io' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
