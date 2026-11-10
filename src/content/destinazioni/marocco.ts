import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Marocco" (src/content/viaggi/07-marocco-360.md).

export const destinazioniMarocco: Destinazione[] = [
  {
    slug: 'marrakech',
    paeseSlug: 'marocco',
    ordine: 1,
    nome: 'Marrakech',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '3 giorni, tra inizio e fine viaggio',
    visitataPersonalmente: true,
    introduzione: 'La medina, i souk, Jemaa El-Fna di sera e il Jardin Majorelle: il punto di partenza e di arrivo del viaggio, dove abbiamo passato tre notti in momenti diversi.',
    percheAndarci: 'È la porta d\'ingresso più comoda al Marocco, con monumenti e atmosfera che valgono più di una visita.',
    cosaVedere: [
      'Piazza Jemaa El-Fna, il cuore della medina',
      'Medersa Ali Ben Youssef',
      'Palazzo della Bahia',
      'Tombe Saadiane',
      'Moschea Koutoubia (solo esterno)',
      'Jardin Majorelle',
    ],
    cosaFare: [
      'Tour guidato di Marrakech (vedi la scheda esperienza dedicata)',
      'Visita al Jardin Majorelle (vedi la scheda esperienza dedicata)',
      'Shopping nei souk',
      'Cena con dinner show da Narwama',
    ],
    doveDormire:
      'Abbiamo dormito a Villa Zahra, una villa spaziosa e tranquilla, comoda e meno soffocante di un hotel nel cuore della medina. Secondo le recensioni ha piscina e personale disponibile. L\'unico compromesso è la posizione, un po\' fuori dal centro, da tenere presente per gli spostamenti serali.\n\nEconomiche: Central House Marrakech Medina, Equity Point Marrakech · fascia media: Riad Nelia, Riad Yasmine · lux (non eccessiva): IZZA, Riad Kaiss.',
    doveMangiare: 'Kui Zin (cena di benvenuto), Narwama (dinner show), Safran by Koya.',
    usciteSerali: 'Churchill Bar o la Pergola.',
    comeArrivare: "L'aeroporto di Marrakech Menara (RAK) è a circa 6 km dalla medina, 15-20 minuti d'auto. Il bus L19 porta a Jemaa el-Fna e a Guéliz in circa 30 minuti (circa 30 MAD, contanti a bordo, una corsa ogni mezz'ora circa dalle 6 alle 23:30). I taxi ufficiali al posteggio degli arrivi chiedono circa 100-150 MAD di giorno e di più dopo le 20: il prezzo si fissa prima di salire, oppure si chiede il transfer al riad. Da Casablanca si arriva in treno ONCF in circa 3 ore.",
    comeSpostarsi: 'Van privato con guida, a piedi nella medina, taxi per il Jardin Majorelle (50 MAD a corsa).',
    periodoMigliore: 'inizio maggio',
    costi: "Budget basso circa 40-60 € al giorno a persona (riad semplice o ostello in medina, cibo da strada e ai banchi di Jemaa el-Fna, due monumenti); medio 100-150 € (riad di charme, guida per mezza giornata, cene in ristorante, hammam); alto da 250 € in su (riad di lusso o hotel con piscina, ristoranti di livello, autista privato). Monumenti 50-80 MAD, Jardin Majorelle 150 MAD, taxi in città circa 50 MAD a corsa.",
    erroriDaEvitare: ['Non prenotare il Jardin Majorelle in anticipo: gli ingressi sono contingentati e nelle ore centrali si riempie in fretta'],
    miaEsperienza:
      'Il tour guidato è stato un ottimo modo per orientarmi nella medina, ma il ricordo più forte di Marrakech resta Jemaa El-Fna, rivista di sera dopo il tour, fra incantatori di serpenti, musicisti e bancarelle di ogni tipo.',
    // GUIDA-START
    luoghi: [
      {
        nome: "Piazza Jemaa el-Fna",
        testo: "Il cuore della medina: di giorno spremute d'arancia, acquaioli e incantatori di serpenti, di sera cantastorie, musicanti e decine di cucine all'aperto. L'UNESCO l'ha proclamata patrimonio immateriale nel 2001 e iscritta nella Lista nel 2008.",
        come: "Si arriva a piedi dalla medina; i taxi si fermano ai bordi. Si cammina in mezzo alle bancarelle.",
        quando: "Al tramonto e di sera, quando le cucine aprono.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        orari: "Sempre aperta; le cucine all'aperto si montano verso il tramonto",
        lat: 31.62583,
        lng: -7.98944,
        consiglio: "Mangiare ai banchi numerati con i prezzi esposti e scegliere quelli pieni di gente del posto.",
      },
      {
        nome: "Medersa Ben Youssef",
        testo: "La scuola coranica sorta in epoca merinide nel Trecento e ricostruita dal sultano saadiano Abdallah al-Ghalib, finita nel 1564-65: allora era la più grande del Maghreb e ospitava fino a 800 studenti. Il patio ha una grande vasca al centro e pareti di zellige, stucchi e cedro intagliato. Intorno al cortile, su due piani, ci sono circa 130 celle degli studenti.",
        come: "A piedi nella medina nord, da Jemaa el-Fna.",
        quando: "Mattina all'apertura, per avere i cortili vuoti.",
        tempo: "45 minuti",
        costo: "50 MAD, circa 5 € (dal mio viaggio)",
        lat: 31.63194,
        lng: -7.98619,
      },
      {
        nome: "Palazzo della Bahia",
        testo: "Il palazzo iniziato negli anni Sessanta dell'Ottocento dal gran visir Si Musa e ampliato dal figlio Ba Ahmed fino al 1900: circa 150 stanze, cortili, giardini e soffitti di cedro dipinto.",
        come: "A piedi dal Mellah o da Jemaa el-Fna.",
        quando: "Mattina.",
        tempo: "1 ora",
        costo: "70 MAD, circa 6,5 € (dal mio viaggio)",
        lat: 31.62159,
        lng: -7.98223,
      },
      {
        nome: "Tombe Saadiane",
        testo: "La necropoli reale saadiana, ampliata soprattutto da Ahmad al-Mansur (1578-1603), con colonne di marmo di Carrara, muqarnas e zellige. La Sala delle Dodici Colonne è la tomba di al-Mansur.",
        come: "Dietro la moschea della Kasbah, a piedi da Jemaa el-Fna.",
        quando: "Mattina presto: nel pomeriggio si forma coda.",
        tempo: "30-45 minuti",
        costo: "70 MAD, circa 6,5 € (dal mio viaggio)",
        lat: 31.6173,
        lng: -7.9887,
      },
      {
        nome: "Jardin Majorelle",
        testo: "Il giardino botanico di un ettaro creato dal pittore Jacques Majorelle dal 1923, con il blu cobalto che porta il suo nome; negli anni Ottanta lo comprarono e restaurarono Yves Saint Laurent e Pierre Bergé. Nella villa c'è il museo berbero Pierre Bergé.",
        come: "Taxi dalla medina, nel quartiere Guéliz. Biglietti solo online, sul sito ufficiale tickets.jardinmajorelle.com.",
        quando: "Giardino aperto tutti i giorni 8-17.30, ultimo ingresso alle 17; museo berbero 8.30-17 (2026). Meglio all'apertura.",
        tempo: "1-1,5 ore",
        costo: "150 MAD, circa 14 € (dal mio viaggio)",
        orari: "Giardino tutti i giorni 8-17:30, ultimo ingresso alle 17; museo berbero 8:30-17 (2026)",
        lat: 31.64278,
        lng: -8.00306,
        url: "https://www.jardinmajorelle.com/",
        consiglio: "Comprare il biglietto solo sul sito ufficiale: quelli presi altrove non danno accesso.",
      },
      {
        nome: "Museo Yves Saint Laurent",
        testo: "Aperto nel 2017 a pochi passi dal Jardin Majorelle, ospita a rotazione abiti, bozzetti e fotografie dello stilista, che a Marrakech aveva casa. C'è anche una sala per le mostre temporanee.",
        come: "A piedi dal Jardin Majorelle. Biglietti sul sito ufficiale tickets.jardinmajorelle.com.",
        quando: "Aperto tutti i giorni tranne il mercoledì, 10-18, ultimo ingresso 17.30 (2026).",
        tempo: "1 ora",
        lat: 31.64254,
        lng: -8.00342,
        url: "https://www.museeyslmarrakech.com/",
        consiglio: "Abbinarlo al Majorelle nella stessa mattina, prenotando entrambi in anticipo.",
      },
      {
        nome: "Moschea della Koutoubia",
        testo: "La moschea almohade costruita tra il 1158 e il 1195, con il minareto di circa 77 metri che è il punto di riferimento della città e probabilmente ispirò la Giralda di Siviglia. È chiusa ai non musulmani; sulla spianata si vedono i resti della prima moschea, iniziata nel 1147.",
        come: "A piedi da Jemaa el-Fna, verso ovest.",
        quando: "Tramonto, quando il minareto si colora e parte la preghiera della sera.",
        tempo: "30 minuti",
        costo: "Esterni e giardini liberi",
        orari: "Esterni e giardini sempre accessibili; moschea chiusa ai non musulmani",
        lat: 31.62412,
        lng: -7.99354,
      },
      {
        nome: "Souk della medina",
        testo: "Il labirinto di mercati coperti a nord di Jemaa el-Fna, diviso per mestieri: lanterne e metalli, cuoio, babbucce, tappeti, spezie, tintori. Il Souk Semmarine è l'asse principale; più ci si allontana dalla piazza, più si vedono le botteghe degli artigiani al lavoro.",
        come: "A piedi da Jemaa el-Fna, entrando dal Souk Semmarine. Una mappa offline aiuta a non dipendere da chi si offre di indicare la strada.",
        quando: "Mattina, quando i negozi aprono e c'è meno ressa; il venerdì a mezzogiorno molte botteghe chiudono per la preghiera.",
        tempo: "2-3 ore",
        costo: "ingresso libero",
        lat: 31.62792,
        lng: -7.98809,
        consiglio: "Si contratta sempre, partendo da molto meno della metà del prezzo chiesto, e senza fretta.",
      },
      {
        nome: "Palazzo El Badi",
        testo: "Le rovine del grande palazzo che il sultano saadiano Ahmad al-Mansur fece costruire dal 1578, rivestito d'oro, onice e marmo italiano, e poi spogliato dal sultano alawide Moulay Ismail un secolo dopo. Restano il cortile immenso con le vasche e gli aranceti, i bastioni con le cicogne e, in un padiglione, il minbar della Koutoubia.",
        come: "A piedi dalla Place des Ferblantiers, a sud della medina.",
        quando: "Tardo pomeriggio, quando la luce scalda le mura e si sale sui bastioni.",
        tempo: "1 ora",
        lat: 31.6183,
        lng: -7.9858,
        consiglio: "Salire sulle terrazze per la vista sui tetti e sull'Atlante.",
      },
      {
        nome: "Le Jardin Secret",
        testo: "Un riad del Cinquecento nel cuore della medina restaurato con due giardini, uno islamico a quattro parti e uno esotico, alimentati dall'antico sistema delle khettara. È un posto tranquillo a due passi dai souk, con una torre da cui si vedono i tetti della medina e l'Atlante.",
        come: "A piedi dai souk, in rue Mouassine.",
        quando: "Nelle ore calde, come pausa dai souk.",
        tempo: "45 minuti-1 ora",
        lat: 31.63087,
        lng: -7.99005,
        url: "https://lejardinsecretmarrakech.com/en/",
      },
      {
        nome: "Maison de la Photographie",
        testo: "Una collezione di fotografie del Marocco tra il 1870 e il 1960, allestita in una vecchia casa della medina: ritratti, paesaggi dell'Atlante e del deserto, la vita delle città prima del turismo. Dalla terrazza con il caffè si vede tutta la medina.",
        come: "A piedi dalla Medersa Ben Youssef, 3 minuti, in rue Souk Ahal Fassi.",
        quando: "Abbinata alla Medersa Ben Youssef, la mattina; la terrazza è bella anche nel pomeriggio.",
        tempo: "1 ora",
        costo: "80 MAD adulti, circa 7,5 €; gratuito sotto i 15 anni (2026)",
        orari: "Tutti i giorni 9:30-19 (2026)",
        lat: 31.63199,
        lng: -7.98437,
        url: "https://www.maisondelaphotographie.ma/",
      },
      {
        nome: "Mellah",
        testo: "L'antico quartiere ebraico, creato nel Cinquecento accanto al palazzo reale, con la sinagoga Lazama ancora visitabile, il grande cimitero ebraico e il mercato delle spezie del quartiere. Oggi ci vivono pochissimi ebrei, ma le case con i balconi sulla strada lo distinguono dal resto della medina.",
        come: "A piedi dalla Place des Ferblantiers, vicino al Palazzo della Bahia e al Palazzo El Badi.",
        quando: "Mattina, prima o dopo la Bahia; la sinagoga e il cimitero chiudono il sabato.",
        tempo: "1-1,5 ore",
        lat: 31.61981,
        lng: -7.98487,
      },
      {
        nome: "Giardini della Menara",
        testo: "Un grande uliveto con un bacino d'acqua del XII secolo e un padiglione del XIX, con l'Atlante sullo sfondo nelle giornate limpide. Più che per il giardino in sé si viene per la vista e per una passeggiata fuori dalla medina.",
        come: "In taxi dalla medina, 10-15 minuti; prezzo da fissare prima di salire.",
        quando: "Tardo pomeriggio, d'inverno e in primavera, quando l'Atlante è innevato.",
        tempo: "1 ora",
        costo: "giardini a ingresso libero",
        lat: 31.61333,
        lng: -8.02167,
      },
      {
        nome: "Dar Si Said",
        testo: "Il palazzo ottocentesco del fratello del visir Ba Ahmed, a pochi passi dalla Bahia, che ospita il museo nazionale del tessuto e del tappeto: tappeti berberi e arabi, costumi, gioielli, porte di legno dipinto. È più raccolto e meno affollato della Bahia.",
        come: "A piedi dal Palazzo della Bahia, 5 minuti.",
        quando: "Mattina, nella stessa uscita della Bahia.",
        tempo: "45 minuti-1 ora",
        lat: 31.62333,
        lng: -7.98381,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Medersa Ben Youssef e Maison de la Photographie",
          "Souk della medina e Le Jardin Secret",
          "Pranzo in medina",
          "Pomeriggio: Palazzo della Bahia e Tombe Saadiane",
          "Sera: Koutoubia al tramonto e cena a Jemaa el-Fna",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Jardin Majorelle all'apertura e Museo Yves Saint Laurent",
          "Pranzo a Guéliz",
          "Pomeriggio: Mellah e Palazzo El Badi",
          "Hammam e cena",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: gita all'Atlante, nella valle dell'Ourika o a Imlil",
          "Rientro in città nel tardo pomeriggio, Giardini della Menara o Dar Si Said",
          "Ultima sera a Jemaa el-Fna",
        ],
      },
    ],
    zone: [
      {
        nome: "Medina",
        perChi: "chi vuole l'atmosfera di Marrakech",
        testo: "Riad dentro le mura, a pochi minuti da Jemaa el-Fna. Vicoli stretti, rumore, difficile orientarsi con i bagagli: chiedere al riad di mandare qualcuno alla porta.",
        fascia: "50-150 €",
      },
      {
        nome: "Guéliz",
        perChi: "chi vuole una città moderna",
        testo: "Quartiere europeo con ristoranti e negozi, vicino al Jardin Majorelle. Più tranquillo, ma si perde l'atmosfera.",
        fascia: "50-120 €",
      },
      {
        nome: "Hivernage",
        perChi: "chi vuole hotel con piscina",
        testo: "Grandi alberghi con giardino, vicino sia alla medina sia a Guéliz.",
        fascia: "120-300 €",
      },
    ],
    sapori: [
      {
        "nome": "Tajine",
        "testo": "Carne o pollo con limone, olive e verdure, cotti nel recipiente di terracotta."
      },
      {
        "nome": "Couscous del venerdì",
        "testo": "Il piatto della settimana nelle case; si trova nei ristoranti il venerdì."
      },
      {
        "nome": "Pastilla",
        "testo": "Sfoglia croccante con piccione o pollo, mandorle e cannella."
      },
      {
        "nome": "Tè alla menta",
        "testo": "Servito sempre, da bere caldo e molto dolce."
      }
    ],
    attenzioni: [
      "Le guide non autorizzate che si offrono in medina chiedono poi una mancia alta: concordare prima o usare una guida ufficiale.",
      "Se un ragazzo indica «la strada è chiusa», sta cercando di portarvi in un negozio: controllare sulla mappa.",
      "Nei souq contrattare partendo molto più in basso del primo prezzo.",
      "Foto agli incantatori e ai musicisti di Jemaa el-Fna: si paga, concordare prima.",
      "Il Jardin Majorelle vende i biglietti solo online: non arrivare senza."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Valle dell'Ourika",
        distanza: "circa 60 km, 1 ora",
        come: "Gran taxi condiviso o escursione con autista dalla città.",
        testo: "Una valle verde ai piedi dell'Atlante, con villaggi berberi, ristoranti sul fiume e, a Setti Fatma, una camminata fino alle cascate. È la gita più facile per uscire dal caldo di Marrakech.",
      },
      {
        nome: "Imlil e l'Alto Atlante",
        distanza: "circa 65 km, 1,5 ore",
        come: "Auto con autista o gran taxi via Asni; da Imlil si cammina con una guida locale.",
        testo: "Il villaggio da cui partono i sentieri verso il Toubkal, la vetta più alta del Nord Africa. In giornata si fanno camminate di qualche ora tra villaggi di terra cruda e noci, con pranzo in una casa berbera.",
      },
      {
        nome: "Cascate d'Ouzoud",
        distanza: "circa 150 km, 2,5-3 ore",
        come: "Escursione organizzata o auto con autista; giornata intera.",
        testo: "Salti d'acqua di circa 110 metri in una gola rossa, con sentieri, barchette sotto le cascate e scimmie di Barberia tra gli ulivi.",
      },
      {
        nome: "Essaouira",
        distanza: "circa 190 km, 2,5-3 ore",
        come: "Bus Supratours o CTM dalla città, oppure auto; meglio con una notte.",
        testo: "La città fortificata sull'Atlantico, con la medina bianca e blu, il porto dei pescherecci e il vento costante. Lo shopping costa meno che a Marrakech.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Marrakech?",
        risposta: "Due giorni pieni bastano per medina, monumenti e Jardin Majorelle; con un terzo giorno si aggiunge una gita all'Atlante o all'Ourika.",
      },
      {
        domanda: "Meglio un riad in medina o un hotel a Guéliz?",
        risposta: "Il riad in medina dà l'atmosfera e permette di andare a piedi a quasi tutto, ma i vicoli sono rumorosi e difficili con i bagagli. Guéliz e Hivernage sono più tranquilli e moderni, a un taxi dalla piazza.",
      },
      {
        domanda: "Serve prenotare il Jardin Majorelle?",
        risposta: "Sì: i biglietti, a orario, si comprano solo sul sito ufficiale e quelli presi altrove non danno accesso. Lo stesso sito vende il Museo Yves Saint Laurent.",
      },
      {
        domanda: "Si può entrare nella Koutoubia?",
        risposta: "No: come quasi tutte le moschee del Marocco è chiusa ai non musulmani. Si vedono il minareto, la spianata e i giardini intorno.",
      },
      {
        domanda: "Come si tratta nei souk?",
        risposta: "Si parte da molto meno della metà del prezzo chiesto e si sale piano, con calma e senza impegno; se il prezzo non convince, si saluta e si va. Chi si offre di accompagnare a un negozio di solito prende una commissione.",
      },
      {
        domanda: "Qual è il periodo migliore?",
        risposta: "Primavera e autunno, con giornate calde e serate fresche. Luglio e agosto superano spesso i 40 °C; d'inverno le giornate sono miti ma le notti fredde, e i riad non sempre sono riscaldati bene.",
      },
    ],
    esperienzeSlugs: ['tour-marrakech', 'jardin-majorelle'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La piazza Jemaa El-Fna animata di sera a Marrakech, Marocco',
    immagine: '/images/marocco/marrakech-stock.jpg',
  },
  {
    slug: 'ait-benhaddou',
    paeseSlug: 'marocco',
    ordine: 2,
    nome: 'Kasbah di Telouet e Aït Benhaddou',
    tipologia: ['storia', 'kasbah'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'L\'antica residenza della famiglia Glaoui a Telouet e il ksar di Aït Benhaddou, patrimonio UNESCO e set di moltissimi film, da «Il Gladiatore» a «Game of Thrones».',
    percheAndarci: 'Per uno dei villaggi fortificati di fango meglio conservati del Marocco, che sembra fermo a un\'altra epoca.',
    cosaVedere: ['La Kasbah di Telouet, con gli interni molto decorati', 'Il ksar di Aït Benhaddou'],
    cosaFare: ['Visita alla Kasbah di Telouet', 'Visita al ksar di Aït Benhaddou'],
    doveDormire:
      'Abbiamo dormito al Ksar El Janoub, la struttura con le recensioni migliori della zona: camere pulite e curate, piscina con vista e un servizio descritto come attento e cordiale (diverse recensioni citano il proprietario, Khalid, per la sua ospitalità).\n\nEconomiche: Riad Caravane, Dar Mouna · fascia media: Kasbah Tebi, Kasbah El Hajja · lux (non eccessiva): Kasbah Rayane, Caravane Hotel (Ounila Valley).',
    doveMangiare: 'Tawesna, per pranzo dopo la visita al ksar.',
    comeArrivare: 'Circa 2h30 da Marrakech per Telouet, poi circa 1h per Aït Benhaddou.',
    comeSpostarsi: 'A piedi nel ksar.',
    periodoMigliore: 'mattina, per la luce migliore sulla facciata in terra battuta',
    costi: 'I prezzi degli ingressi a Telouet e Aït Benhaddou non me li sono segnati.',
    erroriDaEvitare: ['Dimenticare di ricaricare i power bank prima della notte nel deserto: ai campi tendati non ci sono prese elettriche'],
    miaEsperienza:
      'Mi ha sorpreso il contrasto fra l\'esterno in terra battuta della Kasbah di Telouet, ormai in parte crollato, e gli interni pieni di decorazioni. Il ksar di Aït Benhaddou dal vivo è ancora più bello di come appare nei film che lo hanno reso famoso.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kasbah di Telouet",
        "testo": "La residenza del clan Glaoui, iniziata nel 1860 sulla vecchia via carovaniera dell'Atlante. Gran parte del palazzo è in rovina e il terremoto del 2023 ha colpito anche la parte restaurata; le sale di ricevimento hanno zellige, stucchi e soffitti di cedro dipinto.",
        "come": "Da Marrakech passando per il passo del Tizi n'Tichka; si visita con una guida locale. Chiedere prima quali sale sono aperte.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "consiglio": "Il contrasto tra il fango esterno e gli interni decorati è la sorpresa della visita."
      },
      {
        "nome": "Ksar di Aït Benhaddou",
        "testo": "Il villaggio fortificato in terra cruda sul fiume Ounila, patrimonio UNESCO dal 1987, set di film da «Lawrence d'Arabia» al «Gladiatore». Si sale alla cima per la vista sulla valle.",
        "come": "Da Telouet in auto; dal villaggio moderno si attraversa il fiume sul ponte pedonale e si sale tra le case.",
        "quando": "Mattina, per la luce migliore sulla facciata e senza il caldo.",
        "tempo": "1-1,5 ore"
      },
      {
        "nome": "Kasbah di Taourirt a Ouarzazate",
        "testo": "La kasbah ampliata dai Glaoui nell'Ottocento nel centro di Ouarzazate, dove si incontrano le valli del Draa e del Dadès. Una parte è restaurata e visitabile, con stanze decorate e soffitti di canne; altre parti sono ancora abitate. È stata danneggiata dal terremoto del 2023.",
        "come": "Nel centro di Ouarzazate. Si visita da soli o con una guida all'ingresso.",
        "quando": "Fine pomeriggio, sulla strada verso le valli. Orari sul posto.",
        "tempo": "45 minuti",
        "consiglio": "Gli studi cinematografici della città valgono solo per chi ama il cinema: la kasbah è più interessante."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Partenza da Marrakech, passo del Tizi n'Tichka",
          "Kasbah di Telouet",
          "Pranzo lungo la strada",
          "Ksar di Aït Benhaddou"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aït Benhaddou",
        "perChi": "chi vuole dormire dentro la valle",
        "testo": "Kasbah-hotel a pochi passi dal ksar, semplici e tranquilli."
      },
      {
        "nome": "Ouarzazate",
        "perChi": "chi vuole più servizi",
        "testo": "Città vicina, con hotel di tutte le fasce e ristoranti."
      }
    ],
    sapori: [
      {
        "nome": "Tajine con mandorle",
        "testo": "Agnello con prugne e mandorle, nei ristoranti attorno al ksar."
      },
      {
        "nome": "Pane berbero",
        "testo": "Cotto nei forni a legna dei villaggi."
      },
      {
        "nome": "Datteri della valle del Draa",
        "testo": "Dolci e morbidi, in vendita lungo la strada."
      },
      {
        "nome": "Tè alla menta",
        "testo": "Servito ovunque come benvenuto."
      }
    ],
    attenzioni: [
      "Il passo del Tizi n'Tichka è tortuoso e d'inverno può esserci neve o ghiaccio.",
      "Le guide a Aït Benhaddou chiedono tariffe a persona: concordare prima.",
      "Dimenticare di ricaricare i power bank prima della notte nel deserto: ai campi non ci sono prese."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Il ksar fortificato di Aït Benhaddou, Patrimonio UNESCO, Marocco',
    immagine: '/images/marocco/ait-benhaddou-stock.jpg',
  },
  {
    slug: 'merzouga',
    paeseSlug: 'marocco',
    ordine: 3,
    nome: 'Gole di Todra e Merzouga',
    tipologia: ['deserto', 'natura'],
    giorniConsigliati: '2 giorni, 1 notte nel deserto',
    visitataPersonalmente: true,
    introduzione: 'Le Gole di Todra lungo il tragitto, poi una notte a Erg Chebbi con il cammello, il quad e un cielo stellato senza paragoni.',
    percheAndarci: 'È l\'ingresso nel Sahara e uno dei momenti più belli del viaggio: il cielo stellato del deserto, lontano da ogni luce artificiale.',
    cosaVedere: ['Le Gole di Todra', 'Le dune di Erg Chebbi'],
    cosaFare: [
      'Visita alle Gole di Todra (30 minuti)',
      'Notte nel deserto a Erg Chebbi (vedi la scheda esperienza dedicata)',
      'Giro in cammello al tramonto e all\'alba',
      'Quad nel deserto (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Abbiamo dormito al Camp La Source, un campo tendato ai piedi delle dune di Erg Chebbi: tende ampie e curate, una gestione familiare descritta come molto accogliente e il cielo stellato lontano da ogni luce artificiale.\n\nEconomiche: Hostel La Liberte Merzouga, Merzouga Camp and Hostel · fascia media: Auberge La Khaima, Nomad Palace Camp · lux (non eccessiva): Merzouga Luxury Desert Camp, Sahara Desert Luxury Camp.',
    doveMangiare: 'Cena al campo tendato; allergie e intolleranze si possono segnalare in anticipo.',
    comeArrivare: 'Circa 3h da Aït Benhaddou per le Gole di Todra, poi circa 3h per Erg Chebbi.',
    comeSpostarsi: 'Cammello e quad nel deserto.',
    periodoMigliore: 'inizio maggio, notti ancora fresche',
    costi: 'Quad 350 MAD a persona.',
    erroriDaEvitare: ['Entrare nel deserto senza turbante o pashmina: conviene comprarli prima al mercato locale, servono contro la sabbia e il freddo della notte', 'Arrivare a Merzouga senza scorte di alcolici e snack: nel deserto se ne trovano pochi'],
    miaEsperienza:
      'Il cielo stellato di notte, lontano da ogni luce artificiale, è stato uno dei momenti più belli del viaggio. Il giro in cammello all\'alba, con le dune che cambiavano colore alla luce del sole, ha chiuso bene quella notte.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Gole di Todra",
        "testo": "Un canyon nell'Alto Atlante: negli ultimi 600 metri le pareti lisce salgono fino a circa 160 metri e il fondo si stringe fino a una decina di metri. Si cammina sul fondo accanto al ruscello.",
        "come": "In auto sulla strada verso Merzouga; ci si ferma in un piazzale e si cammina.",
        "quando": "Mattina, prima dei gruppi.",
        "tempo": "30 minuti"
      },
      {
        "nome": "Erg Chebbi e la notte nel deserto",
        "testo": "Le dune alte fino a circa 150 metri, lunghe una trentina di chilometri, vicino a Merzouga. Si sale in cammello al campo tendato, si cena, si dorme sotto un cielo senza luci e si torna all'alba.",
        "come": "Il cammello parte dal villaggio verso il campo tendato.",
        "quando": "Tramonto e alba; la stagione migliore va da ottobre ad aprile.",
        "tempo": "Una notte",
        "consiglio": "Portare un turbante o una pashmina per sabbia e freddo notturno, e caricare il telefono prima."
      },
      {
        "nome": "Quad nel deserto",
        "testo": "Un giro in quad tra le dune e i villaggi vicino a Merzouga, in gruppo con una guida.",
        "come": "Prenotare in hotel o al campo.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1-2 ore",
        "costo": "350 MAD a persona (dal mio viaggio)"
      },
      {
        "nome": "Khamlia e la musica gnawa",
        "testo": "Un villaggio al margine dell'Erg Chebbi legato alla musica gnawa: nelle case della musica suonano tamburi e qraqeb, le nacchere di ferro, e servono il tè. D'estate ospita un festival gnawa di tre notti.",
        "come": "In auto o in 4x4 da Merzouga. Spesso è una tappa dei giri in jeep intorno all'Erg Chebbi.",
        "quando": "Pomeriggio, prima di partire per il campo nel deserto.",
        "tempo": "1 ora",
        "costo": "Offerta libera per i musicisti",
        "consiglio": "Lasciare un'offerta o comprare un CD: è il modo in cui il gruppo vive."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Gole di Todra, poi trasferimento a Merzouga, cammello al tramonto, notte nel campo",
          "Giorno 2: alba sulle dune, rientro"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campo tendato a Erg Chebbi",
        "perChi": "chi vuole la notte nel deserto",
        "testo": "Tende semplici o più comode, con cena e colazione. Poca elettricità."
      },
      {
        "nome": "Hotel a Merzouga",
        "perChi": "chi preferisce una camera",
        "testo": "Alberghi e kasbah con piscina, a pochi minuti dalle dune."
      }
    ],
    sapori: [
      {
        "nome": "Pane del deserto (madfouna)",
        "testo": "Un pane ripieno di carne e cipolle cotto sotto la sabbia."
      },
      {
        "nome": "Tajine di cammello",
        "testo": "In alcuni campi lo servono su richiesta."
      },
      {
        "nome": "Tè al berbero",
        "testo": "Con menta e spezie, nei campi."
      },
      {
        "nome": "Datteri",
        "testo": "Dolci e secchi, dalla valle del Ziz."
      }
    ],
    attenzioni: [
      "Entrare nel deserto senza turbante o pashmina: conviene comprarli prima al mercato, servono contro sabbia e freddo.",
      "Arrivare a Merzouga senza scorte di alcolici e snack: nel deserto se ne trovano pochi.",
      "Le notti sono fredde anche in primavera: portare strati caldi.",
      "Verificare quanto costano cammello e quad prima di firmare: i prezzi variano."
    ],
    // GUIDA-END
    esperienzeSlugs: ['notte-deserto-erg-chebbi', 'gole-todra', 'quad-deserto-merzouga'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Una guida con il turbante conduce un dromedario sulla sabbia arancione delle dune di Merzouga',
    immagine: '/images/marocco/merzouga-guida-dromedario-riccardo.jpg',
  },
  {
    slug: 'agdz',
    paeseSlug: 'marocco',
    ordine: 4,
    nome: 'Agdz e la valle del Draa',
    tipologia: ['kasbah', 'natura'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'La valle del Draa e la Kasbah di Tamnougalt, una delle meglio conservate della zona.',
    percheAndarci: 'Una tappa più tranquilla fra il deserto e la costa, con una delle kasbah meglio conservate del Marocco.',
    cosaVedere: ['La Kasbah di Tamnougalt'],
    cosaFare: ['Visita alla Kasbah di Tamnougalt', 'Tempo libero in piscina'],
    doveDormire:
      'Abbiamo passato una notte alla Kasbah Trane, lungo la valle del Draa: zona tranquilla e buon punto d\'appoggio per la vicina Kasbah di Tamnougalt. Recensioni con questo nome esatto non ne ho trovate.\n\nEconomiche: Kasbah Maktob Tamnougalt, Guest House Jardin de Tamnougalt · fascia media: Maison d\'Hôtes Kasbah Azul, Dar Jnane - La Maison Du Jardin · lux (non eccessiva): Hotel and Restaurant Kasbah Draa, Kasbah Kissane.',
    doveMangiare: 'Cena in hotel.',
    comeArrivare: 'Circa 4h da Merzouga.',
    comeSpostarsi: 'A piedi nella kasbah.',
    periodoMigliore: 'sera, per la visita alla Kasbah di Tamnougalt',
    costi: 'Kasbah di Tamnougalt 20 MAD a persona + 200 MAD di mancia per la guida locale.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Dopo il deserto, Agdz è arrivata al momento giusto per rifiatare, e la Kasbah di Tamnougalt mi ha ricordato quanto valga la pena uscire dagli itinerari più battuti.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kasbah di Tamnougalt",
        "testo": "Una kasbah fortificata nella valle del Draa, abitata da famiglie berbere. Si visita con una guida locale che spiega le stanze e la vita del villaggio.",
        "come": "In auto lungo la valle del Draa.",
        "quando": "Sera, per la luce sulle mura di fango.",
        "tempo": "1 ora",
        "costo": "20 MAD a persona più circa 200 MAD di mancia per la guida (dal mio viaggio)"
      },
      {
        "nome": "Valle del Draa",
        "testo": "La lunga valle di palmeti lungo il fiume, con kasbah e villaggi di fango.",
        "come": "In auto lungo la strada principale.",
        "quando": "Pomeriggio.",
        "tempo": "Mezza giornata",
        "consiglio": "Uscire dagli itinerari più battuti vale la pena: Tamnougalt lo dimostra."
      },
      {
        "nome": "Zagora e il cartello «Tombouctou 52 giorni»",
        "testo": "Il capoluogo della valle del Draa. All'uscita c'è il murale che ha preso il posto del vecchio cartello «Tombouctou 52 jours», il tempo che serviva alle carovane per arrivare a Timbuctù. Poco più a sud c'è Tamegroute, con la biblioteca della zawiya e le ceramiche smaltate.",
        "come": "Da Agdz verso sud lungo la valle. Tamegroute è poco più avanti.",
        "quando": "Mattina per Tamegroute e i laboratori dei vasai.",
        "tempo": "Mezza giornata",
        "consiglio": "Nella biblioteca di Tamegroute i libri si possono guardare solo sul posto; i forni dei vasai valgono più delle piccole dune della zona."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Partenza da Merzouga",
          "Pranzo in strada",
          "Kasbah di Tamnougalt",
          "Tempo libero in piscina"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agdz",
        "perChi": "chi vuole una pausa dopo il deserto",
        "testo": "Piccola cittadina con kasbah-hotel e piscina, tranquilla e senza turisti."
      },
      {
        "nome": "Zagora",
        "perChi": "chi vuole più servizi",
        "testo": "Città più grande a sud, con hotel e partenze per il deserto."
      }
    ],
    sapori: [
      {
        "nome": "Datteri del Draa",
        "testo": "Il prodotto dei palmeti della valle."
      },
      {
        "nome": "Tajine di verdure",
        "testo": "Con zucchine, carote e zafferano, in hotel e ristoranti."
      },
      {
        "nome": "Pane berbero",
        "testo": "Cotto in forno comune."
      },
      {
        "nome": "Tè alla menta",
        "testo": "Con ospitalità."
      }
    ],
    attenzioni: [
      "Controllare quanto chiede la guida locale prima della visita: la mancia è concordata.",
      "Il caldo è forte in estate.",
      "Il territorio è molto isolato: portare contanti."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La Kasbah di Tamnougalt nella valle del Draa, Marocco',
    immagine: '/images/marocco/agdz-stock.jpg',
  },
  {
    slug: 'agadir',
    paeseSlug: 'marocco',
    ordine: 5,
    nome: 'Agadir e Taghazout',
    tipologia: ['mare', 'surf'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'Taliouine, la capitale marocchina dello zafferano, e una lezione di surf a Taghazout, uno dei villaggi più noti del surf in Marocco.',
    percheAndarci: 'La costa dopo giorni di deserto e kasbah, con una tappa golosa a Taliouine lungo la strada.',
    cosaVedere: ['La città vecchia di Taliouine', 'Il centro storico di Taroudant'],
    cosaFare: [
      'Acquisto di zafferano a Taliouine',
      'Yoga al tramonto con Khalid',
      'Lezione di surf a Taghazout (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Abbiamo passato una notte all\'Hotel Oasis, comodo perché vicino al mare e ai ristoranti. Le recensioni online sono contrastanti: buone la posizione e la colazione a buffet, meno la manutenzione delle camere, che diversi ospiti descrivono come datate.\n\nEconomiche: Hotel Sindibad Agadir, Résidence IGOUDAR · fascia media: Riad Dar Maktoub, Hôtel Riad Salam Agadir · lux (non eccessiva): Sofitel Agadir Thalassa Sea & Spa, Hotel Riu Palace Tikida Agadir.',
    doveMangiare: 'Les Blancs (terrazza vista mare, cucina spagnola e mediterranea); pranzo a Taghazout dopo il surf.',
    usciteSerali: 'LOFT, narghilè e birre, atmosfera da discoteca araba.',
    comeArrivare: 'Circa 2h30 da Agdz per Taliouine, poi circa 3h per Agadir.',
    comeSpostarsi: 'Van privato, a piedi a Taghazout.',
    periodoMigliore: 'inizio maggio, buone condizioni per iniziare a surfare',
    costi: 'Lezione di surf 250 MAD a persona (docce 10 MAD).',
    erroriDaEvitare: ['Comprare lo zafferano nei negozi lungo la strada pensati per i turisti di passaggio: a Taliouine conviene andare solo nei posti consigliati dalla guida'],
    miaEsperienza:
      'Una mattinata diversa dal resto del viaggio: dopo giorni di deserto e kasbah, il surf a Taghazout è stato un tuffo, anche in senso letterale, in tutt\'altro mondo.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Taliouine e lo zafferano",
        "testo": "Il paese famoso per lo zafferano, tra i principali esportatori al mondo. In autunno, di solito a novembre, si tiene il festival internazionale dello zafferano.",
        "come": "In auto da Agdz, sulla strada verso Taroudant.",
        "quando": "Autunno, nella stagione della fioritura.",
        "tempo": "1 ora",
        "consiglio": "Comprare lo zafferano nelle cooperative e nei posti consigliati, non nei negozi per turisti di passaggio."
      },
      {
        "nome": "Taghazout e il surf",
        "testo": "Il villaggio di pescatori a circa 19 km a nord di Agadir diventato una delle mete del surf del Marocco, con scuole per principianti; poco a nord c'è Anchor Point, con le sue lunghe onde destre.",
        "come": "Da Agadir in taxi o bus; scuole e noleggio sul posto.",
        "quando": "Le condizioni migliori vanno da settembre ad aprile; per i principianti contano le scuole e il giorno.",
        "tempo": "Mezza giornata",
        "costo": "Lezione 250 MAD a persona, docce 10 MAD (dal mio viaggio)",
        "consiglio": "Fermarsi a pranzo a Taghazout dopo la lezione."
      },
      {
        "nome": "Taroudant",
        "testo": "Una cittadina dentro mura di terra lunghe tra i 6 e gli 8 km, con bastioni e nove porte ancora in uso. Ha due souq vicino alle piazze principali, molto meno turistici di quelli di Marrakech, e si gira bene in calesse lungo le mura.",
        "come": "Da Taliouine in auto, verso Agadir.",
        "quando": "Pomeriggio.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Kasbah di Agadir Oufella",
        "testo": "Le mura della vecchia kasbah sulla collina sopra il porto, distrutta dal terremoto del 1960 insieme alla città vecchia che racchiudeva. Dall'alto si vede tutta la baia.",
        "come": "In taxi oppure con la cabinovia in servizio dal 2022, che sale per circa 1,7 km dal ponte di Tildi.",
        "quando": "Tramonto, con la luce sulla baia.",
        "tempo": "1 ora",
        "consiglio": "Salire in cabinovia e scendere in taxi o a piedi, guardando il porto dei pescherecci."
      },
      {
        "nome": "Souk El Had",
        "testo": "Il grande mercato coperto di Agadir, dentro mura con molte porte: frutta, spezie, olio d'argan, ceramiche e vestiti, con molti più marocchini che turisti. È il posto giusto per comprare argan e amlou a prezzi normali.",
        "come": "In taxi dal lungomare.",
        "quando": "Mattina. Chiuso il lunedì; aperto di solito dalle 9 alle 18 (2026), ma i singoli banchi hanno orari propri.",
        "tempo": "1,5-2 ore",
        "consiglio": "Le bancarelle di frutta e verdura sono la parte più viva."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Taliouine, zafferano, poi Taroudant e arrivo ad Agadir, yoga al tramonto",
          "Giorno 2: surf a Taghazout, pranzo, cena a Les Blancs"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agadir",
        "perChi": "chi vuole spiaggia e servizi",
        "testo": "Città moderna ricostruita dopo il terremoto del 1960, con lungomare e hotel."
      },
      {
        "nome": "Taghazout",
        "perChi": "chi vuole surf e atmosfera",
        "testo": "Villaggio con scuole di surf e guesthouse, rilassato."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Nei ristoranti del porto di Agadir."
      },
      {
        "nome": "Olio d'argan e amlou",
        "testo": "Pasta di mandorle, olio d'argan e miele, da spalmare sul pane."
      },
      {
        "nome": "Tajine di pesce",
        "testo": "Sulla costa, con verdure e spezie."
      },
      {
        "nome": "Zafferano",
        "testo": "Nei tè e nei piatti, comprato a Taliouine."
      }
    ],
    attenzioni: [
      "Zafferano in vendita nei negozi per turisti: spesso è adulterato, comprare solo in luoghi consigliati.",
      "La corrente a Taghazout può essere forte: seguire le istruzioni dell'istruttore.",
      "Il sole sulla costa scotta anche con il cielo coperto."
    ],
    // GUIDA-END
    esperienzeSlugs: ['surf-taghazout'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Lezione di surf sulle onde di Taghazout, Marocco',
    immagine: '/images/marocco/agadir-stock.jpg',
  },
  {
    slug: 'essaouira',
    paeseSlug: 'marocco',
    ordine: 6,
    nome: 'Essaouira',
    tipologia: ['città', 'mare', 'relax'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'La città portuale fortificata sull\'Atlantico, con una medina bianca e blu fra le più belle del Marocco.',
    percheAndarci: 'Per un\'atmosfera diversa dal resto del viaggio, con lo shopping più conveniente che a Marrakech e un po\' di relax.',
    cosaVedere: ['La medina bianca e blu di Essaouira', 'Il porto fortificato', 'Il Ranch de Diabat'],
    cosaFare: [
      'Tour guidato di Essaouira (1h30)',
      'Hammam da Kenza (vedi la scheda esperienza dedicata)',
      'Avventura in quad al Ranch de Diabat, con possibile passeggiata a cavallo',
    ],
    doveDormire:
      'Abbiamo passato una notte alla Maison De Sud, in pieno centro storico, a pochi passi dai souk e dal porto: una casa di carattere, con decorazioni artigianali e, secondo le recensioni, un personale molto attento. Camere piccole, e di notte si sentono i richiami alla preghiera, normale nel cuore della medina.\n\nEconomiche: La Smala, Riad Al Madina · fascia media: Lyon Mogador, Riad Chakir Mogador · lux (non eccessiva): Heure Bleue Palais, Riad Dar Maya.',
    doveMangiare: 'Triskala, La Table by Madada o Des Rêves.',
    comeArrivare: 'Circa 2h30 da Agadir via Taghazout.',
    comeSpostarsi: 'A piedi nella medina.',
    periodoMigliore: 'tardo pomeriggio, per il tour guidato con luce migliore',
    costi: 'Hammam 250 MAD a persona; shopping generalmente più economico che a Marrakech.',
    erroriDaEvitare: [],
    miaEsperienza:
      'Dopo giorni di van, deserto e visite, l\'ora all\'hammam da Kenza è stata uno dei pochi momenti di relax vero del viaggio, e la medina bianca e blu di Essaouira resta una delle atmosfere più belle del Marocco.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Medina di Essaouira",
        "testo": "La città bianca e blu costruita dal 1760 per volere del sultano Mohammed III, con le mura e i bastioni sul mare, patrimonio UNESCO dal 2001. Vicoli pedonali e botteghe di intaglio del legno di tuia.",
        "come": "A piedi: si entra dalle porte principali o dal porto.",
        "quando": "Tardo pomeriggio, con luce migliore.",
        "tempo": "2-3 ore",
        "consiglio": "Un tour guidato a piedi dà un buon orientamento."
      },
      {
        "nome": "Porto e Skala",
        "testo": "Il porto con le barche blu dei pescatori e la Sqala, i bastioni con i cannoni usati anche come set di «Game of Thrones», con i gabbiani e i banchi del pesce.",
        "come": "A piedi dalla medina.",
        "quando": "Mattina, quando arrivano i pescherecci, e al tramonto.",
        "tempo": "1 ora"
      },
      {
        "nome": "Hammam",
        "testo": "Un bagno di vapore con scrub e massaggio nella tradizione marocchina.",
        "come": "Prenotare in anticipo in una struttura, in medina.",
        "quando": "Pomeriggio.",
        "tempo": "1-1,5 ore",
        "costo": "250 MAD a persona da Kenza (dal mio viaggio)",
        "consiglio": "Perfetto dopo giorni di van e visite."
      },
      {
        "nome": "Ranch de Diabat",
        "testo": "Escursioni a cavallo e in quad sulla costa sabbiosa verso Diabat, circa 5 km a sud, vicino alle rovine di Bordj El Berod.",
        "come": "Dalla medina in taxi.",
        "quando": "Tardo pomeriggio.",
        "tempo": "1-2 ore"
      },
      {
        "nome": "Spiaggia e kitesurf",
        "testo": "La lunga baia sabbiosa a sud della medina, battuta dai forti alisei: per questo è molto frequentata da chi fa kitesurf e windsurf. Il bagno si fa poco, l'acqua è fredda; si cammina fino a Diabat con l'isola di Mogador davanti.",
        "come": "A piedi dalla medina verso sud. Scuole di kite e noleggio sulla spiaggia.",
        "quando": "Pomeriggio, quando il vento è più regolare.",
        "tempo": "Mezza giornata",
        "consiglio": "Per una lezione di kite scegliere una scuola con licenza e istruttori certificati, e chiedere cosa include l'assicurazione."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: arrivo, medina e porto, cena di pesce",
          "Giorno 2: mattina al mercato, hammam, pomeriggio a Diabat"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "chi vuole stare dentro la città",
        "testo": "Riad e pensioni nei vicoli bianchi, molto vicini a tutto. Camere piccole, ma l'atmosfera è unica."
      },
      {
        "nome": "Lungomare",
        "perChi": "chi vuole spiaggia e vento",
        "testo": "Hotel moderni davanti al mare, più grandi e con parcheggio."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia al porto",
        "testo": "Si sceglie al banco e lo cuociono i ristoranti vicini."
      },
      {
        "nome": "Tajine di pesce",
        "testo": "Con verdure e spezie."
      },
      {
        "nome": "Olio d'argan",
        "testo": "Prodotto nelle cooperative di donne, per cucina e cosmetica."
      },
      {
        "nome": "Dolci alle mandorle",
        "testo": "Dai pasticceri della medina."
      }
    ],
    attenzioni: [
      "Il vento forte (alisei) rende spesso freddo il lungomare: portare una giacca anche d'estate.",
      "Gli acquisti a Essaouira costano in genere meno che a Marrakech, ma il prezzo si negozia comunque.",
      "Evitare le guide non ufficiali in strada."
    ],
    // GUIDA-END
    esperienzeSlugs: ['hammam-essaouira'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La medina bianca e blu della città portuale di Essaouira, Marocco',
    immagine: '/images/marocco/essaouira-stock.jpg',
  },
  // --- NORD: città imperiali e città blu (visitate da Rick; dati pratici verificati il 05/11/2026, distanze OSRM) ---
  {
    slug: 'chefchaouen',
    paeseSlug: 'marocco',
    ordine: 7,
    nome: 'Chefchaouen',
    tipologia: ['città', 'montagna'],
    giorniConsigliati: '2 notti',
    visitataPersonalmente: true,
    introduzione:
      'La città blu nelle montagne del Rif, fondata nel 1471 come fortezza contro i portoghesi. Una medina piccola, con le case dipinte di azzurro, la kasbah in piazza e le montagne tutto intorno.',
    percheAndarci:
      'Per camminare nella medina blu all\'alba, quando è ancora vuota, e vedere il tramonto dalla Moschea spagnola. È anche una pausa più tranquilla tra Tangeri e Fès.',
    cosaVedere: [
      'La medina blu',
      'Piazza Outa el-Hammam e la Grande Moschea',
      'La kasbah, oggi museo',
      'La sorgente di Ras el-Ma',
      'La Moschea spagnola e il panorama sulla città',
    ],
    cosaFare: ['Fotografare i vicoli all\'alba', 'Salire alla Moschea spagnola al tramonto', 'Una giornata ad Akchour, tra gole e cascate'],
    comeArrivare:
      "Su strada: circa 110 km da Tangeri (circa 2 ore di guida) e circa 190 km da Fès (quasi 4 ore senza soste), con auto e autista o con i bus CTM (corse e orari su ctm.ma). Non c'è la ferrovia. Tétouan, a circa 60 km, è il nodo più vicino per bus e grand taxi verso Tangeri e la costa. Nella medina le auto non entrano: si lascia la macchina in un parcheggio custodito fuori dalle mura, pochi dirham a notte, e si arriva al riad a piedi, spesso con un facchino (mancia da concordare).",
    comeSpostarsi: 'A piedi: la medina è piccola e tutta in salita.',
    periodoMigliore: 'primavera e autunno',
    costi:
      "Budget basso circa 30-50 € al giorno a persona (riad semplice in medina, pasti nei locali della piazza); medio 70-110 € (riad con terrazza, cene in ristorante, autista per Akchour diviso in due); alto da 180 € in su (i riad più curati, auto con autista per tutto il soggiorno). Quasi tutto ciò che si vede in città è gratis; la kasbah ha un biglietto economico.",
    erroriDaEvitare: [
      'Accettare la cannabis che qualcuno offre per strada: il Marocco ha tolleranza zero sulle droghe, con carcere e multe pesanti',
      'Arrivare solo per un pomeriggio: la medina è bella la mattina presto e la sera, quando i gruppi in giornata sono ripartiti',
    ],
    miaEsperienza:
      "Ci sono stato nel mio giro di undici giorni nel Marocco del nord, tutto su strada: arrivato da Tangeri, due giorni tra la medina, Ras el-Ma e la Moschea spagnola, poi giù verso Fès.",
    // GUIDA-START
    luoghi: [
      {
        nome: "La medina blu",
        testo: "Vicoli in salita e case dipinte in tante sfumature di azzurro. Sul perché ci sono più versioni: per tenere lontane le zanzare, per richiamare il cielo, o per attirare i turisti, come raccontano alcuni abitanti. Nessuna è sicura. La città è cresciuta con gli andalusi, i moriscos e gli ebrei arrivati dalla Penisola iberica.",
        come: "A piedi, senza meta. Per i bagagli conviene chiedere al riad se manda qualcuno.",
        quando: "All'alba, prima che arrivino i gruppi in giornata.",
        tempo: "mezza giornata",
        costo: "ingresso libero",
        orari: "Sempre accessibile",
        lat: 35.17139,
        lng: -5.26972,
        consiglio: "Molte porte e scalinate sono case private: si fotografa senza entrare e senza mettere in posa i bambini.",
      },
      {
        nome: "Piazza Outa el-Hammam e la Grande Moschea",
        testo: "La piazza centrale della medina, con i caffè sotto gli alberi, la Grande Moschea con il suo minareto ottagonale e, sul lato opposto, le mura della kasbah. La sera è il punto d'incontro della città.",
        come: "Al centro della medina. Alla Grande Moschea i non musulmani non entrano.",
        quando: "La sera, quando la piazza si riempie.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        orari: "Piazza sempre accessibile; moschea chiusa ai non musulmani",
        lat: 35.16843,
        lng: -5.26233,
      },
      {
        nome: "La kasbah",
        testo: "La vecchia fortezza sulla piazza, oggi museo. Dentro c'è un giardino andaluso, alcune sale con oggetti e fotografie della città, e dalla torre si vedono i tetti e la piazza dall'alto.",
        come: "Si entra dalla piazza Outa el-Hammam, con un biglietto economico (dal mio viaggio).",
        quando: "Al mattino, prima del caldo e dei gruppi.",
        tempo: "45 minuti",
        lat: 35.16867,
        lng: -5.26151,
        consiglio: "Salire sulla torre: è la vista migliore sulla piazza senza fare la salita alla Moschea spagnola.",
      },
      {
        nome: "Bab el-Ain",
        testo: "La porta principale della medina, sul lato ovest, dove si fermano i taxi e iniziano i vicoli in salita. Da qui le strade dipinte salgono verso la piazza in dieci minuti.",
        come: "A piedi dai parcheggi e dalla città nuova; è il punto più comodo per arrivare con i bagagli.",
        quando: "Mattina presto, per fotografare le prime strade blu ancora vuote.",
        tempo: "15 minuti",
        costo: "ingresso libero",
        orari: "Sempre accessibile",
        lat: 35.1682,
        lng: -5.26499,
      },
      {
        nome: "Ras el-Ma",
        testo: "La sorgente ai piedi della montagna, appena fuori dalla medina, da dove l'acqua scende verso la città. Lungo il torrente ci sono canali e lavatoi ancora usati.",
        come: "A piedi dalla piazza: è appena fuori dalla medina, sul lato est.",
        quando: "Mattina o tardo pomeriggio, prima di salire alla Moschea spagnola.",
        tempo: "mezz'ora circa",
        costo: "ingresso libero",
        orari: "Sempre accessibile",
        lat: 35.17149,
        lng: -5.25609,
      },
      {
        nome: "Moschea spagnola",
        testo: "La moschea costruita dagli spagnoli negli anni Venti sulla collina davanti alla città. Oggi è in disuso ed è soprattutto un belvedere su tutta Chefchaouen.",
        come: "A piedi da Ras el-Ma, su un sentiero in salita: circa mezz'ora, con poca ombra.",
        quando: "Al tramonto.",
        tempo: "1 ora con la salita",
        costo: "ingresso libero",
        lat: 35.16553,
        lng: -5.25563,
        consiglio: "Torcia del telefono pronta per la discesa al buio.",
      },
      {
        nome: "Cascate di Akchour",
        testo: "Una valle a circa 30 km da Chefchaouen (40 minuti di strada), nel Parco nazionale di Talassemtane, con le gole e le cascate del fiume e sentieri tra le rocce. È la gita della giornata per chi vuole la natura dopo la medina.",
        come: "Auto con autista o taxi da Chefchaouen, prezzo da fissare la sera prima. Dal parcheggio si risale il fiume a piedi.",
        quando: "In primavera e in autunno; d'estate nel fine settimana c'è molta gente.",
        tempo: "una giornata",
        lat: 35.24264,
        lng: -5.18186,
        consiglio: "Scarpe da camminata: i sentieri passano sulle rocce e nell'acqua.",
      },
      {
        nome: "Pont de Dieu",
        testo: "Un arco naturale di roccia sopra il fiume, sull'altro sentiero che parte da Akchour. Il sentiero passa sopra l'arco e poi scende al fiume, da dove lo si vede da sotto.",
        come: "Dallo stesso parcheggio di Akchour, su un sentiero diverso da quello delle cascate; si abbina alle cascate nella stessa giornata.",
        quando: "Mattina, prima del caldo.",
        tempo: "mezza giornata",
        lat: 35.22836,
        lng: -5.17563,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: la medina all'alba, da Bab el-Ain verso la piazza",
          "Kasbah e piazza Outa el-Hammam",
          "Pomeriggio: Ras el-Ma",
          "Tramonto dalla Moschea spagnola",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Giorno 2: Akchour in giornata con autista, cascate al mattino e Pont de Dieu nel pomeriggio",
          "Sera di nuovo in piazza",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: ["Giorni 1-2: come sopra", "Giorno 3: Tétouan e la sua medina bianca, oppure il mare a Oued Laou"],
      },
    ],
    zone: [
      {
        nome: "Medina",
        perChi: "chi vuole la città blu fuori dalla porta",
        testo: "Riad e piccoli hotel tra i vicoli. Molte scale e salite con i bagagli.",
        fascia: "30-90 €",
      },
      {
        nome: "Fuori dalle mura",
        perChi: "chi arriva in auto",
        testo: "Hotel più grandi, più comodi per parcheggiare, a pochi minuti a piedi dalla medina.",
      },
    ],
    sapori: [
      { nome: "Formaggio di capra del Rif", testo: "Il formaggio fresco delle montagne intorno, nei ristoranti della medina." },
      { nome: "Tajine", testo: "Carne o pollo cotti nella terracotta, come nel resto del Marocco." },
      { nome: "Tè alla menta", testo: "Servito ovunque, caldo e molto dolce, nei caffè della piazza." },
    ],
    attenzioni: [
      "Chi offre cannabis per strada: il Marocco ha tolleranza zero sulle droghe, anche per i turisti, con carcere e multe pesanti.",
      "Finte guide che si offrono per accompagnare alla Moschea spagnola: il sentiero è facile e si fa da soli.",
      "Foto alle persone: va chiesto prima.",
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Akchour e il Pont de Dieu",
        distanza: "circa 30 km, 40 minuti",
        come: "Auto con autista o taxi da Chefchaouen, prezzo da fissare la sera prima.",
        testo: "Due sentieri dallo stesso parcheggio: uno risale il fiume fino alle cascate, l'altro arriva all'arco di roccia del Pont de Dieu. In una giornata si fanno entrambi.",
      },
      {
        nome: "Tétouan",
        distanza: "circa 60 km, 1 ora e un quarto",
        come: "Bus CTM, grand taxi o auto; è anche sulla strada per Tangeri.",
        testo: "La medina bianca di influenza andalusa, patrimonio UNESCO dal 1997, con i souk degli artigiani e la piazza Hassan II davanti al Palazzo Reale. Meno turistica di Chefchaouen.",
      },
      {
        nome: "Oued Laou",
        distanza: "circa 55 km, 1 ora e 10",
        come: "Auto o grand taxi, per una strada di montagna che scende al mare.",
        testo: "Un paese di pescatori sul Mediterraneo, con una lunga spiaggia, frequentato d'estate soprattutto da famiglie marocchine.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Chefchaouen?",
        risposta: "Due notti: un giorno per la medina, la kasbah, Ras el-Ma e il tramonto dalla Moschea spagnola, uno per Akchour. In giornata da Tangeri o da Fès si vede poco e nelle ore peggiori.",
      },
      {
        domanda: "Perché Chefchaouen è blu?",
        risposta: "Non c'è una risposta sicura. Si racconta che il blu tenga lontane le zanzare, che richiami il cielo o che sia legato agli ebrei arrivati dalla Spagna; oggi le case si ridipingono anche per i visitatori.",
      },
      {
        domanda: "Come si arriva a Chefchaouen?",
        risposta: "Solo su strada: circa 2 ore da Tangeri e quasi 4 da Fès, con auto e autista o con i bus CTM. Non c'è la ferrovia.",
      },
      {
        domanda: "Akchour si fa da soli?",
        risposta: "Sì: i sentieri sono segnati e frequentati, e alle cascate e al Pont de Dieu si arriva senza guida. Serve un'auto o un taxi per il trasferimento e scarpe che si possano bagnare.",
      },
      {
        domanda: "Chefchaouen è sicura?",
        risposta: "È una città tranquilla. Il fastidio più comune è chi offre cannabis per strada: basta un no fermo, ricordando che in Marocco la droga è punita con il carcere anche per i turisti.",
      },
      {
        domanda: "Qual è il periodo migliore?",
        risposta: "Primavera e autunno, con giornate miti e la valle di Akchour verde. D'inverno sulle montagne del Rif fa freddo e piove spesso; d'estate la medina si riempie di visitatori.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "I vicoli dipinti di blu della medina di Chefchaouen, nelle montagne del Rif, Marocco",
    immagine: '/images/marocco/chefchaouen.webp',
  },
  {
    slug: 'fes',
    paeseSlug: 'marocco',
    ordine: 8,
    nome: 'Fès',
    tipologia: ['città', 'cultura', 'città imperiale'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Fondata nel 789 da Idris I, capitale fino al 1912. La città vecchia, Fès el-Bali, è patrimonio UNESCO dal 1981 ed è una delle zone pedonali urbane più grandi e antiche del mondo.',
    percheAndarci:
      'Per una delle medine più grandi e antiche del mondo, con le madrase merinidi, la Qarawiyyin e le concerie. È il punto in cui questo itinerario si divide da quello del deserto.',
    cosaVedere: [
      'Bab Bou Jeloud',
      'Medersa Bou Inania',
      'Medersa al-Attarine',
      'La Qarawiyyin (solo dall\'esterno)',
      'Le concerie Chouara',
      'Fès Jdid, il Mellah e il Palazzo Reale (da fuori)',
      'I giardini di Jnan Sbil',
    ],
    cosaFare: ['Una mattina con una guida ufficiale in Fès el-Bali', 'Guardare le concerie dalle terrazze', 'Il tramonto sulla medina dalle Tombe merinidi'],
    comeArrivare:
      "Su strada da Chefchaouen (circa 190 km, quasi 4 ore senza soste) e da Meknès (circa 70 km, un'ora di guida), con auto e autista o bus CTM; in alternativa il treno ONCF da Meknès, Rabat, Casablanca e Tangeri, con orari su oncf-voyages.ma. La stazione è nella Ville Nouvelle: da lì un petit taxi rosso, con tassametro, porta alla porta della medina più vicina al riad, di solito Bab Bou Jeloud o Bab Guissa. L'aeroporto di Fès-Saïss è a circa 15 km dalla medina: grand taxi a prezzo da fissare prima di salire, oppure il transfer del riad.",
    comeSpostarsi: 'A piedi nella medina, in petit taxi tra la medina, Fès Jdid e la stazione.',
    periodoMigliore: 'primavera e autunno; d\'estate fa molto caldo',
    costi:
      "Budget basso circa 35-55 € al giorno a persona (riad semplice in medina, cibo di strada sulla Talaa Kebira, madrase a circa 20 MAD); medio 90-140 € (riad di charme, guida ufficiale per mezza giornata, cene sulle terrazze, hammam); alto da 220 € in su (riad di lusso con piscina, autista per Volubilis e Meknès). Petit taxi in città con tassametro, pochi euro a corsa.",
    erroriDaEvitare: [
      'Girare il primo giorno da soli senza mappa offline: la medina è un labirinto',
      'Seguire chi si offre come guida per strada: le guide ufficiali hanno un tesserino',
      'Prenotare un riad senza chiedere dove lascia il taxi: nella medina le auto non entrano',
    ],
    miaEsperienza:
      "Ci sono stato nel giro di undici giorni nel Marocco del nord, arrivando da Chefchaouen: tre giorni, prima Fès el-Bali con le madrase, le concerie e i souk, poi Fès Jdid, il Mellah e la medina vista dall'alto.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Bab Bou Jeloud e la Talaa Kebira",
        testo: "La porta decorata di maioliche blu da cui si entra in Fès el-Bali. Da qui scende la Talaa Kebira, la via principale della medina, tra botteghe, banchi di cibo e muli carichi.",
        come: "Petit taxi fino a Bab Bou Jeloud, poi a piedi in discesa.",
        quando: "Mattina, quando le botteghe aprono.",
        tempo: "mezz'ora, poi si continua nella medina",
        costo: "ingresso libero",
        orari: "Porta e strada sempre accessibili",
        lat: 34.06167,
        lng: -4.98389,
      },
      {
        nome: "Medersa Bou Inania",
        testo: "Voluta dal sultano merinide Abu Inan e costruita tra il 1350 e il 1355. È l'unica madrasa del Marocco che faceva anche da moschea del venerdì, con il suo minareto. Di fronte c'è il vecchio orologio ad acqua, completato nel 1357, il cui meccanismo oggi non è più compreso.",
        come: "Lungo la Talaa Kebira, pochi minuti dopo Bab Bou Jeloud. La sala di preghiera non è aperta ai non musulmani, ma si vede dal cortile.",
        quando: "Mattina presto. Fuori dagli orari della preghiera.",
        tempo: "mezz'ora abbondante",
        costo: "circa 20 MAD, circa 2 € (dal mio viaggio)",
        lat: 34.06194,
        lng: -4.98278,
        consiglio: "Contanti in dirham: alla biglietteria non si paga con la carta.",
      },
      {
        nome: "Medersa al-Attarine",
        testo: "Piccola madrasa costruita tra il 1323 e il 1325 per il sultano merinide Abu Said Uthman II, con il cortile coperto di zellige, stucchi e legno di cedro intagliato. È aperta come sito storico.",
        come: "Nel cuore della medina, accanto alla Qarawiyyin.",
        quando: "Mattina.",
        tempo: "mezz'ora circa",
        costo: "biglietto simile a quello della Bou Inania, circa 20 MAD (dal mio viaggio)",
        lat: 34.06508,
        lng: -4.97369,
      },
      {
        nome: "La Qarawiyyin",
        testo: "La moschea fondata nell'857-859, secondo la tradizione da Fatima al-Fihri, poi diventata un centro di studi che l'UNESCO cita come la più antica istituzione d'insegnamento superiore ancora attiva al mondo. È il centro della medina.",
        come: "I non musulmani non entrano: dalle porte aperte si vedono una parte del cortile e degli interni.",
        tempo: "pochi minuti",
        costo: "solo dall'esterno, gratis",
        orari: "Chiusa ai non musulmani",
        lat: 34.06444,
        lng: -4.97333,
        consiglio: "Non fermarsi a lungo davanti alle porte durante la preghiera.",
      },
      {
        nome: "Concerie Chouara",
        testo: "La più grande conceria della città, con le vasche di pietra piene di tinture dove si lavorano le pelli come da secoli. È tra le più antiche della città, restaurata nel XXI secolo e lasciata al suo posto. L'odore è forte.",
        come: "Si guarda dall'alto, dalle terrazze delle botteghe di pelle intorno, che chiedono di passare dal negozio.",
        quando: "Di giorno, quando le vasche sono in attività.",
        tempo: "mezz'ora circa",
        costo: "nessun biglietto: si entra dalle botteghe, con una mancia (dal mio viaggio)",
        lat: 34.06609,
        lng: -4.97098,
        consiglio: "Non c'è obbligo di comprare. Una piccola mancia a chi accompagna sulla terrazza è normale.",
      },
      {
        nome: "Fondouk el-Nejjarine",
        testo: "Un caravanserraglio del Settecento, dove un tempo dormivano i mercanti e si depositavano le merci, restaurato e oggi museo delle arti e dei mestieri del legno. Il cortile su tre piani è uno dei più belli della medina, e davanti c'è la fontana di zellige della piazza Nejjarine.",
        come: "A pochi passi dalla Qarawiyyin, sulla piazza omonima, dove lavorano ancora i falegnami.",
        quando: "Mattina o primo pomeriggio, come pausa tra madrase e souk.",
        tempo: "45 minuti",
        lat: 34.06483,
        lng: -4.97596,
        consiglio: "Salire sulla terrazza: c'è un caffè con vista sui tetti.",
      },
      {
        nome: "Place Seffarine",
        testo: "La piazzetta dei calderai, dove gli artigiani battono il rame e l'ottone sotto un grande albero. Ci si affacciano la madrasa Seffarine, la più antica madrasa merinide della città, e la biblioteca della Qarawiyyin.",
        come: "A piedi dalla Qarawiyyin, scendendo verso il fiume e le concerie.",
        quando: "Di giorno, quando le botteghe lavorano.",
        tempo: "15-20 minuti",
        costo: "ingresso libero",
        lat: 34.0642,
        lng: -4.9728,
      },
      {
        nome: "Zaouia di Moulay Idriss II",
        testo: "Il santuario dove è sepolto Idris II, che nel IX secolo fece di Fès la sua capitale ed è considerato il patrono della città. Il complesso fu ricostruito nel Settecento; le vie intorno sono piene di banchi di candele, incenso e dolci per i pellegrini.",
        come: "Nel centro della medina, vicino alla Qarawiyyin. I non musulmani non entrano: si guarda dalla porta.",
        quando: "Di giorno; il venerdì c'è più movimento di fedeli.",
        tempo: "15 minuti",
        costo: "solo dall'esterno",
        orari: "Chiusa ai non musulmani",
        lat: 34.06485,
        lng: -4.97475,
      },
      {
        nome: "Dar Batha",
        testo: "Un palazzo di fine Ottocento con un grande giardino andaluso, appena fuori da Bab Bou Jeloud. Dopo un restauro iniziato nel 2019 ha riaperto nel 2025 come Museo delle arti islamiche, con ceramiche blu di Fès, legni, tappeti e strumenti scientifici.",
        come: "A piedi da Bab Bou Jeloud, pochi minuti verso Fès Jdid.",
        quando: "Primo pomeriggio, quando la medina è più calda e affollata.",
        tempo: "1 ora",
        lat: 34.06058,
        lng: -4.98272,
      },
      {
        nome: "Fès Jdid e il Mellah",
        testo: "La città nuova fondata dai Merinidi nel 1276, con le grandi porte del Palazzo Reale e il Mellah, l'antico quartiere ebraico.",
        come: "Petit taxi o a piedi da Bab Bou Jeloud passando per Jnan Sbil. Il Palazzo Reale si vede solo da fuori.",
        quando: "Pomeriggio.",
        tempo: "un paio d'ore",
        costo: "Palazzo Reale solo dall'esterno, gratis",
        orari: "Palazzo Reale chiuso al pubblico; le porte si vedono sempre",
        lat: 34.0553,
        lng: -4.99393,
      },
      {
        nome: "Sinagoga Ibn Danan e cimitero ebraico",
        testo: "Nel Mellah, la sinagoga del Seicento restaurata e il cimitero ebraico, con le tombe bianche in file sulla collina. Le case intorno hanno balconi di legno sulla strada, diversi da quelli della medina.",
        come: "A piedi nel Mellah, dopo le porte del Palazzo Reale.",
        quando: "Pomeriggio, nella stessa uscita di Fès Jdid.",
        tempo: "1 ora",
        costo: "offerta o biglietto modesto (dal mio viaggio)",
        lat: 34.0523,
        lng: -4.9922,
      },
      {
        nome: "Jnan Sbil",
        testo: "I giardini storici tra Fès el-Bali e Fès Jdid, sistemati nell'Ottocento sotto Moulay Hassan I: la pausa all'ombra della giornata.",
        come: "A piedi da Bab Bou Jeloud.",
        tempo: "mezz'ora abbondante",
        lat: 34.05828,
        lng: -4.98681,
      },
      {
        nome: "Le Tombe merinidi",
        testo: "Le rovine sulle colline a nord della medina. Il motivo per salirci è la vista: tutta Fès el-Bali sotto, con i tetti e i minareti.",
        come: "In petit taxi, concordando anche il ritorno.",
        quando: "Prima del tramonto.",
        tempo: "un'ora circa",
        costo: "ingresso libero",
        lat: 34.06977,
        lng: -4.97924,
        consiglio: "Scendere in taxi prima che faccia buio, senza tornare a piedi per i sentieri.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina con guida ufficiale: Bab Bou Jeloud, Medersa Bou Inania, Talaa Kebira",
          "Medersa al-Attarine, la Qarawiyyin dalle porte e la Zaouia di Moulay Idriss II",
          "Fondouk el-Nejjarine e pranzo in medina",
          "Pomeriggio: Place Seffarine e concerie Chouara",
          "Tramonto dalle Tombe merinidi",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Giorno 2: Dar Batha e Jnan Sbil",
          "Fès Jdid, le porte del Palazzo Reale e il Mellah, con la sinagoga Ibn Danan e il cimitero ebraico",
          "Pomeriggio libero nei souk o in hammam",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: ["Giorni 1-2: come sopra", "Giorno 3: Volubilis, Moulay Idriss e Meknès in giornata con auto e autista"],
      },
    ],
    zone: [
      {
        nome: "Fès el-Bali",
        perChi: "chi vuole dormire dentro la medina",
        testo: "Riad nei vicoli, silenziosi dentro e caotici fuori. Scegliere un riad vicino a una porta raggiungibile in taxi, come Bab Bou Jeloud.",
        fascia: "40-120 €",
      },
      {
        nome: "Batha e Bab Bou Jeloud",
        perChi: "chi vuole un riad di charme comodo da raggiungere",
        testo: "Il margine ovest della medina, vicino a Dar Batha e alla porta blu: i taxi arrivano a pochi passi e si entra subito sulla Talaa Kebira. Qui ci sono molti riad restaurati con terrazza e qualche piscina.",
        fascia: "80-200 €",
      },
      {
        nome: "Ville Nouvelle",
        perChi: "chi arriva in auto o vuole comodità",
        testo: "La città moderna, con hotel di catena e ristoranti, più semplice da raggiungere in auto. Per la medina serve il taxi.",
      },
    ],
    sapori: [
      { nome: "Pastilla", testo: "Sfoglia croccante con piccione o pollo, mandorle e cannella, una delle specialità di Fès." },
      { nome: "Harira", testo: "La zuppa di legumi e pomodoro, che si trova ovunque e la sera del Ramadan rompe il digiuno." },
      { nome: "Cibo di strada sulla Talaa Kebira", testo: "Pane, frittelle e dolci ai banchi lungo la via principale." },
      { nome: "Tè alla menta", testo: "Offerto in ogni bottega e riad." },
    ],
    attenzioni: [
      "Finte guide che si offrono per strada: chiedere il tesserino ufficiale prima di partire con qualcuno.",
      "Chi dice che una strada è chiusa vuole portare in una bottega: controllare sulla mappa.",
      "Borseggi tra la folla dei souk: zaino davanti e niente contanti in vista.",
      "Alle concerie le terrazze sono dei negozi: si guarda, si ringrazia, non si è obbligati a comprare.",
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Volubilis e Moulay Idriss",
        distanza: "circa 70 km, 1 ora e mezza",
        come: "Auto con autista o escursione in giornata; i due posti sono a pochi chilometri l'uno dall'altro.",
        testo: "Le rovine della città romana, patrimonio UNESCO dal 1997, con l'Arco di Caracalla e i mosaici rimasti nelle case, e poi la città santa di Moulay Idriss, bianca sulla collina, per il pranzo. Volubilis costa circa 70 MAD (dal mio viaggio) e ha poca ombra.",
      },
      {
        nome: "Meknès",
        distanza: "circa 70 km, 1 ora",
        come: "Treno ONCF, grand taxi o auto; si abbina facilmente a Volubilis.",
        testo: "La città di Moulay Ismail, patrimonio UNESCO dal 1996, con Bab Mansour, la piazza el-Hedim e l'enorme granaio dell'Heri es-Souani. È più tranquilla di Fès e si gira bene da soli.",
      },
      {
        nome: "Ifrane e il Medio Atlante",
        distanza: "circa 70 km, 1 ora e un quarto",
        come: "Auto o grand taxi; meglio con un autista per fermarsi nelle foreste.",
        testo: "Una cittadina di montagna con case dai tetti spioventi, costruita in epoca coloniale, e intorno le foreste di cedri del Medio Atlante, dove vivono le scimmie di Barberia. D'estate si va a cercare il fresco, d'inverno a volte nevica.",
      },
      {
        nome: "Sefrou",
        distanza: "circa 35 km, 40 minuti",
        come: "Grand taxi da Fès o auto.",
        testo: "Una piccola medina ai piedi dell'Atlante, con un vecchio mellah e una cascata appena fuori dal centro. È la gita più breve per vedere una città marocchina senza turisti.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Fès?",
        risposta: "Due giorni pieni: uno per Fès el-Bali con madrase e concerie, uno per Fès Jdid, il Mellah e Dar Batha. Con un terzo giorno si fanno Volubilis, Moulay Idriss e Meknès.",
      },
      {
        domanda: "Serve una guida nella medina di Fès?",
        risposta: "Per la prima mattina conviene una guida ufficiale, prenotata tramite il riad e con il tesserino: la medina è un labirinto. Dopo si gira bene da soli con una mappa offline.",
      },
      {
        domanda: "Si può entrare nella Qarawiyyin?",
        risposta: "No, è chiusa ai non musulmani, come la Zaouia di Moulay Idriss II. Dalle porte aperte si vedono una parte del cortile e degli interni; le madrase Bou Inania e al-Attarine invece si visitano.",
      },
      {
        domanda: "Le concerie Chouara si pagano?",
        risposta: "Non c'è biglietto: si sale sulle terrazze delle botteghe di pelle intorno. Ci si aspetta che si guardi la merce o si lasci una piccola mancia, ma non c'è obbligo di comprare.",
      },
      {
        domanda: "Meglio Fès o Marrakech?",
        risposta: "Fès ha la medina più antica e autentica, con meno turisti e più artigiani al lavoro; Marrakech ha più monumenti visitabili, giardini e locali. Chi ha tempo le vede entrambe, in due itinerari diversi.",
      },
      {
        domanda: "Come si arriva al riad nella medina?",
        risposta: "Le auto non entrano: il taxi lascia a una porta, di solito Bab Bou Jeloud o Bab Guissa, e il riad manda qualcuno per i bagagli. Conviene chiedere prima la porta più vicina.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "I tetti della medina di Fès el-Bali visti dalle Tombe merinidi, con i minareti, Marocco",
    immagine: '/images/marocco/fes.webp',
  },
  {
    slug: 'meknes-volubilis',
    paeseSlug: 'marocco',
    ordine: 9,
    nome: 'Meknès e Volubilis',
    tipologia: ['città', 'storia', 'città imperiale', 'archeologia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Meknès è la città di Moulay Ismail, che ne fece la capitale e regnò dal 1672 al 1727: patrimonio UNESCO dal 1996. A circa 30 km ci sono le rovine romane di Volubilis, patrimonio UNESCO dal 1997, e la città santa di Moulay Idriss.',
    percheAndarci:
      'Per le porte e i granai di Moulay Ismail, in una città più tranquilla di Fès, e per i mosaici di una città romana ai margini dell\'impero.',
    cosaVedere: [
      'Bab Mansour e la piazza el-Hedim',
      'Il mausoleo di Moulay Ismail',
      'L\'Heri es-Souani e il bacino dell\'Agdal',
      'La Medersa Bou Inania di Meknès',
      'Volubilis',
      'Moulay Idriss Zerhoun',
    ],
    cosaFare: ['Volubilis la mattina presto', 'Un giro a piedi nella medina di Meknès, da soli'],
    comeArrivare: 'In auto da Fès (circa 70 km, un\'ora di guida) o da Rabat (circa 140 km, quasi 2 ore). In alternativa il treno ONCF: Meknès ha due stazioni.',
    comeSpostarsi: 'A piedi nella medina, petit taxi in città, taxi o auto con autista per Volubilis e Moulay Idriss.',
    periodoMigliore: 'primavera e autunno; a Volubilis d\'estate il sole picchia',
    erroriDaEvitare: [
      'Andare a Volubilis nelle ore centrali d\'estate: il sito è quasi senza ombra',
      'Chiamare scuderie l\'Heri es-Souani: era un granaio, come spiegano le fonti storiche',
    ],
    miaEsperienza:
      "Ci sono passato nel giro su strada del Marocco del nord: Volubilis e Moulay Idriss lungo la strada da Fès, una notte a Meknès e la mattina dopo la città di Moulay Ismail, prima di ripartire in auto per Rabat.",
    // GUIDA-START
    luoghi: [
      {
        nome: 'Volubilis',
        testo:
          'Abitata già nel III secolo a.C., forse capitale del regno di Mauretania, diventò romana quando Roma annesse la Mauretania nel 44 d.C. Alla fine del II secolo aveva circa 20.000 abitanti e viveva di olio d\'oliva. Verso il 285 cadde in mano alle tribù locali e Roma non la riprese più. Restano il Decumano Massimo, la basilica, il Campidoglio, l\'Arco di Caracalla del 217 e i mosaici nelle case, come le Fatiche di Ercole e Orfeo.',
        come: 'Circa 30 km a nord di Meknès (mezz\'ora di strada) e circa 70 km da Fès (un\'ora e mezza), in auto con autista o taxi. Si visita a piedi lungo il percorso del sito.',
        quando: 'Mattina presto: il sito è aperto e quasi senza ombra.',
        tempo: 'un paio d\'ore',
        consiglio: 'Cappello, acqua e scarpe chiuse. Una guida aiuta a leggere le rovine.',
      },
      {
        nome: 'Moulay Idriss Zerhoun',
        testo:
          'La città santa costruita intorno al mausoleo di Idris I, che a Volubilis fondò nel 787-788 la dinastia idriside e lì fu ucciso nel 791. Il mausoleo di oggi fu ricostruito da Moulay Ismail all\'inizio del Settecento. È a pochi chilometri dalle rovine, sulle colline.',
        come: 'Con lo stesso taxi di Volubilis. Il mausoleo è un luogo di pellegrinaggio e non è aperto ai non musulmani.',
        quando: 'Dopo Volubilis, a fine mattina.',
        tempo: 'un\'ora circa',
        consiglio: 'Salire sulla collina più alta del paese, da dove si vede tutto il complesso religioso.',
      },
      {
        nome: 'Bab Mansour e la piazza el-Hedim',
        testo:
          'La porta monumentale iniziata da Moulay Ismail e finita nel 1732 dal figlio Moulay Abdallah, che prende il nome da Mansour al-Alj, un ex schiavo cristiano convertito all\'Islam. Davanti c\'è la piazza el-Hedim, che vuol dire "macerie": viene dalle demolizioni fatte per aprirla.',
        come: 'A piedi, all\'ingresso della medina.',
        quando: 'Tardo pomeriggio, quando la piazza si anima.',
        tempo: 'mezz\'ora circa',
      },
      {
        nome: 'Mausoleo di Moulay Ismail',
        testo: 'La tomba del sultano. È ancora un luogo religioso, aperto anche ai turisti.',
        come: 'A piedi da Bab Mansour, nella città imperiale. Abiti coprenti e silenzio.',
        tempo: 'mezz\'ora circa',
      },
      {
        nome: 'Heri es-Souani',
        testo:
          'L\'enorme granaio e magazzino di Moulay Ismail, con 22 file di archi che reggevano una volta ormai crollata. Spesso viene chiamato scuderia, ma era un granaio. È accanto al bacino dell\'Agdal, parte del sistema idrico del palazzo.',
        come: 'Petit taxi da Bab Mansour: è lontano a piedi.',
        tempo: 'un\'ora scarsa',
      },
      {
        nome: 'Medersa Bou Inania di Meknès',
        testo: 'La madrasa merinide fondata nel 1335-36 dal sultano Abu al-Hasan e oggi intitolata al figlio Abu Inan.',
        come: 'Nella medina, a piedi da el-Hedim.',
        tempo: 'mezz\'ora circa',
      },
      {
        nome: 'Museo Dar Jamai',
        testo: 'Un palazzo del 1882, costruito da un gran visir del sultano Moulay Hassan, che oggi ospita un museo affacciato sulla piazza el-Hedim.',
        come: 'Sulla piazza el-Hedim.',
        tempo: 'un\'ora scarsa',
      },
    ],
    programmi: [
      {
        titolo: '1 giorno',
        tappe: ['Mattina: Volubilis', 'Fine mattina: Moulay Idriss', 'Pomeriggio: Bab Mansour, el-Hedim e il mausoleo di Moulay Ismail'],
      },
      {
        titolo: '2 giorni',
        tappe: ['Giorno 1: Volubilis e Moulay Idriss', 'Giorno 2: Meknès, con Heri es-Souani, la medersa e Dar Jamai'],
      },
    ],
    zone: [
      {
        nome: 'Medina',
        perChi: 'chi vuole dormire vicino a el-Hedim',
        testo: 'Riad e guest house a pochi passi da Bab Mansour.',
      },
      {
        nome: 'Ville Nouvelle',
        perChi: 'chi arriva in auto',
        testo: 'Hotel più semplici da raggiungere in auto; per la medina serve il taxi.',
      },
    ],
    sapori: [
      { nome: 'Olive e olio della piana', testo: 'La zona di Volubilis e Meknès è terra di ulivi fin dall\'epoca romana.' },
      { nome: 'Tajine', testo: 'Nei ristoranti intorno a el-Hedim.' },
      { nome: 'Harira', testo: 'La zuppa di legumi che si trova ovunque.' },
    ],
    attenzioni: [
      'A Volubilis si offrono guide: concordare prezzo e durata prima di partire, e chiedere il tesserino ufficiale.',
      'Il taxi per Volubilis e Moulay Idriss va concordato prima, con attesa e ritorno inclusi.',
      'Abiti coprenti a Moulay Idriss, che è una città santa.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "L'Arco di Caracalla tra le rovine romane di Volubilis, vicino a Meknès, Marocco",
    immagine: '/images/marocco/meknes-volubilis.webp',
  },
  {
    slug: 'rabat',
    paeseSlug: 'marocco',
    ordine: 10,
    nome: 'Rabat (e la Moschea Hassan II di Casablanca)',
    tipologia: ['città', 'cultura', 'città imperiale', 'mare'],
    giorniConsigliati: '1-2 giorni, più mezza giornata a Casablanca',
    visitataPersonalmente: true,
    introduzione:
      'La capitale del Marocco dal 1912, rimasta tale dopo l\'indipendenza del 1956, sulla foce del Bou Regreg, di fronte a Salé. Patrimonio UNESCO dal 2012, con la città vecchia e quella moderna. A circa 95 km di strada c\'è Casablanca, con la Moschea Hassan II.',
    percheAndarci:
      'Per la Kasbah degli Oudaya sul mare, la Torre Hassan e lo Chellah, in una città ordinata dove si gira senza pressioni. Poi Casablanca per la sua moschea.',
    cosaVedere: [
      'La Kasbah degli Oudaya',
      'I Giardini andalusi',
      'La Torre Hassan',
      'Il Mausoleo di Mohammed V',
      'Lo Chellah',
      'La Moschea Hassan II a Casablanca',
    ],
    cosaFare: ['Il belvedere della kasbah sul fiume e sull\'Atlantico', 'Il tour guidato della Moschea Hassan II'],
    comeArrivare:
      'In auto da Meknès (circa 140 km, quasi 2 ore) e da Casablanca (circa 95 km, poco più di un\'ora). In alternativa il treno ONCF, con le stazioni di Rabat Ville e Rabat Agdal. C\'è anche l\'aeroporto di Rabat-Salé.',
    comeSpostarsi: 'A piedi e in tram, che collega Rabat e Salé dal 2011.',
    periodoMigliore: 'tutto l\'anno, con la primavera e l\'autunno più piacevoli',
    erroriDaEvitare: [
      'Arrivare alla Moschea Hassan II in pantaloncini o senza maniche: non si entra',
      'Andare alla Moschea Hassan II senza controllare i turni: il venerdì sono meno',
    ],
    miaEsperienza:
      "È stata l'ultima tappa del mio giro nel Marocco del nord: un giorno tra la Kasbah degli Oudaya, la Torre Hassan e lo Chellah, poi verso Casablanca per la Moschea Hassan II e il volo di rientro.",
    // GUIDA-START
    luoghi: [
      {
        nome: 'Kasbah degli Oudaya',
        testo:
          'La cittadella costruita dagli Almohadi verso il 1150 sulla foce del Bou Regreg. Si entra dalla porta di Bab Oudaya, fatta tra il 1195 e il 1199, e si cammina tra le case bianche e blu fino al belvedere su Salé e sull\'Atlantico. Nel padiglione di Moulay Ismail c\'è il Museo nazionale dei gioielli, riaperto nel 2023.',
        come: 'A piedi dalla medina. Ingresso libero alla kasbah.',
        quando: 'Mattina o tardo pomeriggio.',
        tempo: 'un\'ora o poco più',
      },
      {
        nome: 'Giardini andalusi',
        testo: 'Il giardino creato tra il 1915 e il 1918, durante il protettorato francese, sul modello dei giardini moreschi di al-Andalus, dentro la kasbah.',
        come: 'Dentro la Kasbah degli Oudaya.',
        tempo: 'mezz\'ora circa',
      },
      {
        nome: 'Torre Hassan e Mausoleo di Mohammed V',
        testo:
          'La Torre Hassan è il minareto mai finito della grande moschea voluta dal sultano almohade Yaqub al-Mansur, iniziata nel 1191 e lasciata incompiuta alla sua morte, nel 1199. Accanto c\'è il Mausoleo di Mohammed V, completato nel 1971, dove sono sepolti anche i figli, il re Hassan II e il principe Abdallah, con la guardia d\'onore all\'ingresso.',
        come: 'A piedi o in tram.',
        quando: 'Mattina o tardo pomeriggio.',
        tempo: 'un\'ora circa',
        consiglio: 'Abiti coprenti e niente foto alle guardie senza chiedere.',
      },
      {
        nome: 'Chellah',
        testo:
          'Il luogo dove si sovrappongono le rovine della città romana di Sala e la necropoli dei Merinidi, iniziata nel 1284-85. La porta principale è del 1339. Sugli alberi e sul vecchio minareto nidificano le cicogne. Le rovine hanno ospitato per anni il festival Jazz au Chellah.',
        come: 'Petit taxi o a piedi dalla Torre Hassan.',
        quando: 'Pomeriggio, quando la luce è più morbida.',
        tempo: 'un\'ora circa',
      },
      {
        nome: 'Moschea Hassan II (Casablanca)',
        testo:
          'La grande moschea sul mare di Casablanca, una delle poche in Marocco che i non musulmani possono visitare, solo con il tour guidato. Il tour passa dalla sala di preghiera, dalla sala del minareto e dalle sale delle abluzioni.',
        come: 'In auto da Rabat, circa 95 km lungo la costa.',
        quando:
          'Turni guidati più volte al giorno, la mattina e nel primo pomeriggio; il venerdì sono meno. Gli orari aggiornati sono su fmh2.ma, dove sono indicati in ora GMT.',
        tempo: 'un\'ora circa',
        costo: '140 MAD per gli adulti stranieri (fmh2.ma, novembre 2026)',
        url: 'https://fmh2.ma/',
        consiglio: 'Spalle, busto e gambe coperti fin sotto le ginocchia: niente pantaloncini né canottiere. Le scarpe si tolgono all\'ingresso, con i sacchetti dati alla porta.',
      },
    ],
    programmi: [
      {
        titolo: '1 giorno',
        tappe: ['Mattina: Kasbah degli Oudaya e Giardini andalusi', 'Pomeriggio: Torre Hassan e Mausoleo di Mohammed V', 'Fine pomeriggio: Chellah'],
      },
      {
        titolo: '2 giorni',
        tappe: ['Giorno 1: come sopra', 'Giorno 2: in auto a Casablanca e tour della Moschea Hassan II'],
      },
    ],
    zone: [
      {
        nome: 'Medina di Rabat',
        perChi: 'chi vuole dormire vicino alla kasbah',
        testo: 'Riad a pochi minuti dalla Kasbah degli Oudaya. Più tranquilla della medina di Fès.',
      },
      {
        nome: 'Centro moderno e Agdal',
        perChi: 'chi arriva in auto o vuole comodità',
        testo: 'Hotel nella città moderna, con il tram per la medina.',
      },
    ],
    sapori: [
      { nome: 'Pesce dell\'Atlantico', testo: 'Pesce alla griglia nei ristoranti verso il porto e la foce del fiume.' },
      { nome: 'Tè alla menta', testo: 'Nei caffè della kasbah e della medina.' },
    ],
    attenzioni: [
      'Alla Moschea Hassan II si entra solo con il tour guidato e con abiti coprenti: il prezzo ufficiale è quello del sito fmh2.ma.',
      'Borseggi nelle zone affollate e sulle spiagge.',
      'Taxi: chiedere il tassametro o concordare il prezzo prima.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "La porta almohade di Bab Oudaya e le mura della Kasbah degli Oudaya a Rabat, Marocco",
    immagine: '/images/marocco/rabat.webp',
  },
]
