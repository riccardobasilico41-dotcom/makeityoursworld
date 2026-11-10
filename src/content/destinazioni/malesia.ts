import type { Destinazione } from '@/lib/types'

// Nessun nome di hotel, ristorante o operatore è stato inventato. Il Borneo
// malese sta in una scheda separata: src/content/destinazioni/borneo.ts

export const destinazioniMalesia: Destinazione[] = [
  {
    slug: 'kuala-lumpur',
    paeseSlug: 'malesia',
    ordine: 1,
    nome: 'Kuala Lumpur',
    tipologia: ['città', 'gastronomia', 'architettura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una capitale cresciuta da un accampamento di cercatori di stagno a città di grattacieli, dove una moschea, un tempio indù e un tempio cinese possono stare nello stesso isolato e dove l\'istituzione civica è il cibo di strada.',
    percheAndarci:
      'È il modo più rapido di capire come funziona la Malesia: tre comunità vivono nella stessa città con lingue, religioni e cucine separate, e si incontrano ai food court. Ed è un ottimo hub aereo, da cui parte tutto il resto del viaggio.',
    cosaVedere: [
      'Le Petronas Twin Towers, con lo skybridge e la piattaforma panoramica',
      'Le Batu Caves, con la statua dorata di Murugan alta quasi 43 metri e la lunga scalinata colorata',
      'La moschea Masjid Jamek, alla confluenza dei due fiumi da cui la città prende il nome',
      'Il quartiere di Chinatown attorno a Petaling Street e il tempio Sri Mahamariamman',
      'Il Museo delle Arti Islamiche, ricco e di solito tranquillo',
      'Il mercato notturno di Jalan Alor, dove si cena all\'aperto tra banchi di cucine diverse',
    ],
    cosaFare: [
      'Salire alle Batu Caves presto al mattino, prima del caldo e dei gruppi (c\'è una scheda esperienza dedicata)',
      'Cena a Jalan Alor, il modo giusto di passare la prima sera',
      'Giro dei quartieri a piedi: Chinatown, Little India a Brickfields, Kampung Baru',
      'Passeggiata sulla canopy walkway del parco forestale di Bukit Nanas, un lembo di foresta pluviale in centro città',
    ],
    doveDormire:
      'Bukit Bintang per la comodità e la vita serale, Chinatown per i prezzi bassi e il carattere, KLCC per la vicinanza alle torri e ai centri commerciali. La città è grande e caotica: conviene stare vicino a una stazione della monorotaia o della metropolitana.',
    doveMangiare:
      'Kuala Lumpur è una città dove si mangia molto bene, e il modo di farlo è uno solo: i food court e i banchi di strada, lasciando stare i ristoranti. Da provare il nasi lemak (riso al cocco con sambal, acciughe secche, arachidi e uovo: è considerato il piatto nazionale e si mangia a colazione), il char kway teow, il roti canai indiano al mattino con il dahl, il laksa e il satay alla brace. Jalan Alor la sera è la versione più scenografica; i food court dei centri commerciali, con l\'aria condizionata, sono buoni e costano poco.',
    comeArrivare: "Dal KLIA (terminal 1 e 2) il treno KLIA Ekspres arriva a KL Sentral in circa 30 minuti, con una corsa ogni 15-20 minuti dalle 5 a mezzanotte passata: 55 ringgit, circa 11 € (65 dal 1° gennaio 2027), con il 10% di sconto sull'app o pagando con la carta contactless al tornello. L'autobus per KL Sentral costa circa 15 ringgit e impiega un'ora e più; un Grab circa 70-100 ringgit, fino a un'ora con il traffico. Taxi solo con il coupon prepagato al banco. Da KL Sentral si prosegue in metro, monorotaia o Grab. All'immigrazione può essere chiesta la MDAC compilata online.",
    comeSpostarsi:
      'Metropolitana, monorotaia e LRT coprono bene il centro, con la Touch \'n Go o il biglietto singolo. Grab è economico e risolve tutto il resto. Camminare è possibile ma faticoso: marciapiedi discontinui, caldo e umidità.',
    periodoMigliore:
      'tutto l\'anno, con acquazzoni pomeridiani in qualsiasi stagione.',
    costi: "Batu Caves, moschee, templi e parchi gratuiti; Museo delle Arti Islamiche 20 ringgit (circa 4 €), KL Forest Eco Park 40 ringgit per gli stranieri (circa 8 €), skybridge delle Petronas circa 80 ringgit (circa 16 €). Metro e monorotaia costano pochi ringgit a corsa. Budget giornaliero: circa 30-40 € con ostello e food court, 70-110 € con un albergo di fascia media a Bukit Bintang, oltre 200 € in un albergo di lusso a KLCC.",
    erroriDaEvitare: [
      'Salire alle Batu Caves a metà giornata: una lunga scalinata sotto il sole equatoriale, con le scimmie che rubano tutto quello che si tiene in mano',
      'Vestirsi troppo scoperti per visitare templi e moschee: alle Batu Caves e alla Masjid Negara servono spalle e ginocchia coperte, e i sarong prestati all\'ingresso risolvono solo in parte',
      'Giudicare la città dai centri commerciali di Bukit Bintang: quello che vale sta nei quartieri, a piedi',
      'Contare sulle carte ai banchi di strada: lì serve contante',
    ],
    miaEsperienza:
      'Quasi tutti usano Kuala Lumpur come scalo, e invece regge due giorni pieni, a patto di girarla per quartieri più che per monumenti. Le Petronas si guardano dal basso all\'ora blu e va bene così: la salita allo skybridge costa e restituisce meno di quanto promette. Le Batu Caves vanno fatte alle sette del mattino, quando i gradini colorati sono ancora in ombra e i fedeli salgono a pregare: due ore dopo è una scalinata rovente con centinaia di persone e le scimmie che strappano le bottiglie di mano. Il ricordo che resta però è più semplice: la sera a Jalan Alor, seduti su sgabelli di plastica in mezzo alla strada, con una cucina cinese a destra, una malese a sinistra e un banco indiano di fronte. È lì che si capisce di che paese si sta parlando.',
    luoghi: [
      {
        nome: "Petronas Twin Towers",
        testo: "Le torri gemelle, alte 452 metri e le più alte del mondo dal 1998 al 2004, sono il simbolo della città. Si visita lo skybridge al 41° piano, che unisce le due torri, e la piattaforma panoramica all'86° piano; ai piedi c'è il parco KLCC con la fontana.",
        come: "LRT fino a KLCC, uscita diretta nel centro commerciale. I biglietti per la salita sono a orario e si prenotano online sul sito ufficiale.",
        quando: "Da martedì a domenica, 9-21; chiuso il lunedì salvo festivi (2025). Il tramonto è l'orario più richiesto e i posti finiscono. Dal basso le torri si guardano meglio all'ora blu.",
        tempo: "1 ora per la salita; il parco KLCC si gira in mezz'ora",
        costo: "circa 80 ringgit per gli stranieri, circa 16 € (2026); biglietti a orario sul sito ufficiale (i rivenditori non ufficiali non rimborsano)",
        consiglio: "Chi non vuole spendere può guardarle dal basso e vedere la salita da un'altra torre, la KL Tower.",
        orari: "martedì-domenica 9-21, chiuso il lunedì salvo i festivi",
        url: "https://www.petronastwintowers.com.my/",
        lat: 3.15785,
        lng: 101.71165
      },
      {
        nome: "Batu Caves",
        testo: "Un santuario indù in una grotta calcarea, preceduto dalla statua dorata di Murugan alta quasi 43 metri e da 272 gradini colorati. Dentro c'è un grande salone con piccoli templi, la luce che scende da un'apertura nel soffitto e scimmie sui gradini.",
        come: "Treno Komuter da KL Sentral fino al capolinea Batu Caves. L'ingresso alla grotta principale è libero. La Dark Cave, la grotta interna protetta, si visita solo con le uscite educative della Malaysian Nature Society, quando sono attive. Spalle e ginocchia coperte.",
        quando: "Presto la mattina, con i fedeli che salgono e i gradini in ombra. Durante la festa del Thaipusam le folle sono enormi.",
        tempo: "2 ore",
        costo: "ingresso gratuito",
        consiglio: "Non tenere in mano bottiglie, occhiali o cibo: le scimmie li strappano.",
        orari: "tutti i giorni, dalla mattina presto alla sera",
        lat: 3.2379,
        lng: 101.684
      },
      {
        nome: "Masjid Jamek",
        testo: "La moschea, del 1909, sorge alla confluenza dei fiumi Klang e Gombak, dove è nata la città. Poco più in là c'è Merdeka Square, dove il 31 agosto 1957 fu ammainata la bandiera britannica e alzata per la prima volta quella malese, con accanto il Sultan Abdul Samad Building.",
        come: "LRT fino a Masjid Jamek. La moschea si visita fuori dagli orari di preghiera, con veste prestata all'ingresso.",
        quando: "Al mattino.",
        tempo: "1 ora",
        consiglio: "Proseguire a piedi fino a Chinatown, nello stesso pomeriggio.",
        costo: "ingresso libero",
        orari: "visite fuori dagli orari di preghiera",
        lat: 3.14905,
        lng: 101.69575
      },
      {
        nome: "Chinatown, Petaling Street e Sri Mahamariamman",
        testo: "Il quartiere cinese con il mercato di strada e uno storico tempio indù, a due passi l'uno dall'altro.",
        come: "LRT fino a Pasar Seni. Il mercato è all'aperto, il tempio si visita senza scarpe.",
        quando: "Al mattino per il tempio; la sera per la strada, quando il mercato è più vivo.",
        tempo: "1 ora e mezza",
        consiglio: "Non comprare i falsi: i prezzi iniziali sono molto alti.",
        costo: "ingresso libero al tempio",
        lat: 3.1445,
        lng: 101.6978
      },
      {
        nome: "Museo delle Arti Islamiche",
        testo: "Un museo ricco sul tema: tessili, ceramiche, manoscritti e modelli di moschee. Di solito è tranquillo.",
        come: "Nel parco dei Lake Gardens, vicino alla Moschea Nazionale. In taxi o Grab, o a piedi da KL Sentral con una camminata lunga.",
        quando: "Aperto tutti i giorni, 9:30-18 (ultimo ingresso 17:30). Ottimo nel primo pomeriggio, nelle ore più calde.",
        tempo: "2 ore",
        url: "https://www.iamm.org.my/",
        consiglio: "Il caffè del museo, climatizzato e silenzioso, è un'ottima pausa.",
        costo: "20 ringgit, circa 4 € (sito ufficiale, 2026)",
        orari: "tutti i giorni 9:30-18, ultimo ingresso 17:30",
        lat: 3.1418,
        lng: 101.6899
      },
      {
        nome: "Jalan Alor",
        testo: "Una strada chiusa al traffico la sera, con tavolini all'aperto e cucine cinesi, malesi e indiane una accanto all'altra. Il posto dove mangiare la prima sera.",
        come: "A piedi da Bukit Bintang o con il monorail fino a Bukit Bintang.",
        quando: "La sera.",
        tempo: "1-2 ore",
        consiglio: "Chiedere il prezzo prima di ordinare il pesce, che si paga a peso.",
        costo: "piatti da pochi ringgit fino a una decina, circa 1-3 €",
        orari: "dal tardo pomeriggio a notte inoltrata; contanti ai banchi",
        lat: 3.1455,
        lng: 101.7087
      },
      {
        nome: "Piazza Merdeka e Sultan Abdul Samad Building",
        testo: "Il grande prato dove a mezzanotte del 31 agosto 1957 fu ammainata la bandiera britannica e alzata quella malese, con un pennone alto 95 metri. Di fronte c'è il Sultan Abdul Samad Building, del 1897, in stile moresco con le cupole di rame e la torre dell'orologio; sul lato opposto il vecchio Royal Selangor Club, in stile Tudor.",
        come: "LRT fino a Masjid Jamek, poi cinque minuti a piedi. Si gira da fuori, insieme alla moschea.",
        quando: "Al mattino presto, oppure la sera quando gli edifici sono illuminati.",
        tempo: "45 minuti",
        costo: "gratuito",
        orari: "sempre accessibile",
        consiglio: "Poco più a sud c'è la Kuala Lumpur City Gallery, con il plastico della città: utile per orientarsi il primo giorno.",
        lat: 3.1478,
        lng: 101.6934
      },
      {
        nome: "Masjid Negara",
        testo: "La Moschea Nazionale, inaugurata nel 1965 pochi anni dopo l'indipendenza: un tetto a ombrello a diciotto punte, per i tredici stati della federazione e i cinque pilastri dell'islam, e un minareto alto 73 metri. È architettura moderna, con vasche e giardini, molto diversa dalle moschee coloniali.",
        come: "A piedi dal Museo delle Arti Islamiche, cinque minuti, o in Grab. I non musulmani entrano da un ingresso dedicato; la veste lunga si riceve gratis all'ingresso, le scarpe si tolgono.",
        quando: "Al mattino, fuori dagli orari di preghiera.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        orari: "visite per i non musulmani fuori dagli orari di preghiera, con fasce più brevi il venerdì",
        consiglio: "Si abbina al Museo delle Arti Islamiche: prima la moschea, poi il museo nelle ore calde.",
        lat: 3.142,
        lng: 101.6917
      },
      {
        nome: "Perdana Botanical Garden (Lake Gardens)",
        testo: "Il grande parco coloniale degli anni Ottanta dell'Ottocento, attorno a un lago, sulla collina dietro la Moschea Nazionale. Dentro ci sono il giardino delle orchidee e quello degli ibischi, il fiore nazionale malese, ed è il posto dove la città fa jogging la mattina.",
        come: "In Grab, oppure a piedi dalla Masjid Negara salendo per il parco.",
        quando: "All'alba o nel tardo pomeriggio; a mezzogiorno l'ombra è poca.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Chi non vuole camminare molto si limita al giardino delle orchidee, il più curato.",
        lat: 3.1429,
        lng: 101.6848
      },
      {
        nome: "KL Forest Eco Park (Bukit Nanas)",
        testo: "Una delle riserve forestali più antiche del paese, protetta dal 1906: foresta pluviale vera in pieno centro, ai piedi della KL Tower. Una passerella sospesa tra gli alberi fa camminare all'altezza delle chiome, con i grattacieli che spuntano tra le foglie.",
        come: "Monorotaia fino a Bukit Nanas, poi una salita a piedi di dieci minuti; si può entrare anche dal lato della KL Tower. Si paga all'ingresso, meglio in contanti.",
        quando: "Al mattino presto, prima del caldo. Con il maltempo la passerella chiude.",
        tempo: "1-1 ora e mezza",
        costo: "40 ringgit per gli stranieri, circa 8 € (2026)",
        consiglio: "Repellente e acqua: è foresta vera, con zanzare e umidità.",
        lat: 3.1516,
        lng: 101.7015
      },
      {
        nome: "KL Tower (Menara Kuala Lumpur)",
        testo: "La torre delle telecomunicazioni alta 421 metri, finita nel 1995. Sorge sulla collina di Bukit Nanas, per cui la piattaforma panoramica a 276 metri sta più in alto dello skybridge delle Petronas, e sulla Sky Deck all'aperto si è fuori, con il vento.",
        come: "Navetta gratuita dall'ingresso su Jalan Puncak, o a piedi attraverso il KL Forest Eco Park.",
        quando: "Al tramonto, con le Petronas che si accendono di fronte.",
        tempo: "1 ora",
        orari: "tutti i giorni 9-22; la Sky Deck all'aperto chiude con il maltempo",
        url: "https://kltower.com.my/",
        consiglio: "È la torre da cui si vedono le Petronas: per una sola salita, conviene questa.",
        lat: 3.1528,
        lng: 101.7038
      },
      {
        nome: "Tempio Thean Hou",
        testo: "Un tempio cinese a sei livelli, finito alla fine degli anni Ottanta e dedicato a Mazu, la dea del mare cara ai marinai. Tetti rossi e oro, centinaia di lanterne e una terrazza con la vista sulla città.",
        come: "In Grab, circa 15 minuti dal centro: non c'è una fermata comoda vicino.",
        quando: "Nel tardo pomeriggio, con la luce calda sui tetti; durante il Capodanno cinese le lanterne sono migliaia e c'è la folla.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Si abbina bene a Brickfields, che è a pochi minuti di Grab.",
        lat: 3.1218,
        lng: 101.6873
      },
      {
        nome: "Kampung Baru",
        testo: "Un villaggio malese del 1900 rimasto in mezzo ai grattacieli, con case di legno su palafitte, orti e banchi di nasi lemak. Il contrasto con le Petronas, a un chilometro, è il motivo per venirci.",
        come: "LRT fino a Kampung Baru. Dal lato di KLCC ci si arriva a piedi sul ponte pedonale Saloma Link, sul fiume Klang.",
        quando: "Al tramonto, poi la cena ai banchi e il ponte illuminato.",
        tempo: "1-2 ore",
        costo: "gratuito",
        consiglio: "Le case sono abitate: si cammina sulle strade e non si entra nei cortili.",
        lat: 3.1631,
        lng: 101.703
      },
      {
        nome: "Central Market (Pasar Seni) e Kwai Chai Hong",
        testo: "Il mercato coperto del 1888, con la facciata Art déco azzurra del 1937, oggi pieno di artigianato: batik, legno intagliato, peltro. A pochi passi, Kwai Chai Hong è un vicolo restaurato di Chinatown con i murales che raccontano la vita del quartiere negli anni Sessanta.",
        come: "LRT fino a Pasar Seni. Il mercato è climatizzato.",
        quando: "Nelle ore calde per il mercato; Kwai Chai Hong la sera, con le luci.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Al piano di sopra del mercato c'è un food court economico.",
        lat: 3.1456,
        lng: 101.6956
      },
      {
        nome: "Brickfields (Little India)",
        testo: "Il quartiere indiano accanto a KL Sentral: archi colorati su Jalan Tun Sambanthan, banchi di ghirlande di fiori, negozi di sari e musica tamil dagli altoparlanti. È il posto per il riso servito sulla foglia di banano.",
        come: "A piedi da KL Sentral o dalla monorotaia KL Sentral, cinque minuti.",
        quando: "All'ora di pranzo, per il banana leaf rice.",
        tempo: "1-1 ora e mezza",
        costo: "gratuito",
        consiglio: "Al banana leaf si mangia con la mano destra; alla fine si piega la foglia verso di sé per dire che è piaciuto.",
        lat: 3.1304,
        lng: 101.6856
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina presto: Batu Caves, con la salita in ombra",
          "Rientro e colazione al KL Sentral",
          "Primo pomeriggio: Museo delle Arti Islamiche, al fresco",
          "Tardo pomeriggio: Masjid Jamek a piedi, poi Chinatown",
          "Ora blu: Petronas dal basso",
          "Sera: cena a Jalan Alor"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Batu Caves all'alba, Masjid Negara e Museo delle Arti Islamiche nelle ore calde, Petronas e KLCC Park all'ora blu",
          "Giorno 2: Masjid Jamek e Piazza Merdeka al mattino, Central Market e Chinatown",
          "Pranzo a Brickfields con il banana leaf rice, poi il tempio Thean Hou",
          "Sera: cena a Jalan Alor e Bukit Bintang"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1 e 2: come sopra",
          "Giorno 3: KL Forest Eco Park all'apertura e salita sulla KL Tower",
          "Pomeriggio: Perdana Botanical Garden, o il pomeriggio libero nelle ore di caldo",
          "Tramonto a Kampung Baru, poi il ponte Saloma Link verso le Petronas illuminate",
          "In alternativa al terzo giorno in città: una gita a Malacca o a Putrajaya"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Bintang",
        perChi: "chi vuole cibo, negozi e vita serale",
        testo: "Il centro dello shopping, con tantissime scelte di alloggio e ristoranti. È rumoroso e un po' turistico, ma ben collegato.",
        fascia: "40-110 €"
      },
      {
        nome: "KLCC",
        perChi: "chi cerca vista sulle torri e alberghi di fascia alta",
        testo: "Tranquilla, pulita, con ristoranti di qualità. Meno vita autentica.",
        fascia: "90-220 €"
      },
      {
        nome: "Chinatown e Pasar Seni",
        perChi: "chi vuole risparmiare e stare vicino a mercati e stazione",
        testo: "Ostelli e alberghi economici, vicini al treno per l'aeroporto. Rumorosa la sera.",
        fascia: "25-70 €"
      },
      {
        nome: "KL Sentral e Brickfields",
        perChi: "chi arriva o riparte in treno e in aereo",
        testo: "Alberghi attorno alla stazione centrale, dove arriva il KLIA Ekspres e passano metro, monorotaia e treni per le Batu Caves. Comoda più che bella; la sera si mangia a Brickfields.",
        fascia: "40-100 €"
      }
    ],
    sapori: [
      {
        nome: "Nasi lemak",
        testo: "Riso al cocco con acciughe fritte, uovo, cetriolo e sambal. La colazione nazionale; si trova ovunque, dai chioschi in strada."
      },
      {
        nome: "Char kway teow",
        testo: "Noodles di riso saltati a fuoco vivo con gamberi, uova e germogli. Un piatto di strada cinese-malese, ottimo la sera a Jalan Alor."
      },
      {
        nome: "Bak kut teh",
        testo: "Costine di maiale in brodo di spezie e aglio, di origine cinese. Si mangia a colazione o a pranzo nei locali di Klang e a Chinatown."
      },
      {
        nome: "Roti canai",
        testo: "Pane indiano piatto, croccante e unto, servito con curry di lenticchie. Si mangia nei locali mamak aperti tutta la notte."
      }
    ],
    attenzioni: [
      "Furti con scippo in moto: tenere il telefono lontano dal bordo del marciapiede e la borsa dal lato opposto alla strada.",
      "Alle Batu Caves scimmie aggressive con il cibo e con le borse aperte. Nel santuario spalle e ginocchia coperte.",
      "Taxi: usare le app Grab o taxi con tassametro. Rifiutare chi propone «prezzo fisso» alla stazione.",
      "Il caldo e gli acquazzoni pomeridiani sono quasi quotidiani: la mattina per le visite all'aperto."
    ],
    gite: [
      {
        nome: "Malacca",
        distanza: "circa 2 ore in autobus",
        come: "Autobus dal terminal TBS fino a Melaka Sentral, poi pochi minuti di Grab fino al centro storico.",
        testo: "Il porto portoghese, olandese e britannico sullo stretto, patrimonio UNESCO, con le case peranakan e il mercato notturno di Jonker Street nel fine settimana. Merita una notte; ha una scheda propria sul sito."
      },
      {
        nome: "Putrajaya",
        distanza: "circa 25 km, mezz'ora in treno",
        come: "Treno KLIA Transit da KL Sentral fino alla stazione di Putrajaya, poi Grab tra i monumenti.",
        testo: "La capitale amministrativa costruita da zero negli anni Novanta attorno a un lago artificiale: la moschea rosa di Putra, quella in acciaio di Tuanku Mizan e i ponti monumentali. Mezza giornata basta."
      },
      {
        nome: "Lucciole di Kuala Selangor",
        distanza: "circa 70 km, 1 ora e mezza in auto",
        come: "In auto o con un tour serale da Kuala Lumpur; le barchette partono dopo il tramonto da Kampung Kuantan.",
        testo: "Sulle mangrovie del fiume Selangor migliaia di lucciole si accendono insieme sugli alberi. Si vede solo nelle sere senza luna e senza pioggia, in barca a remi e in silenzio."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Kuala Lumpur?",
        risposta: "Due giorni pieni per le Batu Caves, le Petronas, i musei e i quartieri. Con il terzo si aggiungono la KL Tower e il parco forestale, oppure una gita a Malacca o Putrajaya."
      },
      {
        domanda: "Vale la pena salire sulle Petronas Twin Towers?",
        risposta: "Lo skybridge costa circa 80 ringgit e i posti al tramonto finiscono presto. Le torri si vedono meglio dal basso all'ora blu, o dalla KL Tower, che sta più in alto e le ha di fronte."
      },
      {
        domanda: "Come si va alle Batu Caves e quanto costa?",
        risposta: "Con il treno KTM Komuter da KL Sentral fino al capolinea Batu Caves, circa 35-40 minuti per pochi ringgit. L'ingresso alla grotta principale è gratuito; conviene arrivare all'alba."
      },
      {
        domanda: "Dove dormire a Kuala Lumpur?",
        risposta: "Bukit Bintang per cibo e comodità, Chinatown per spendere poco, KLCC per la vista sulle torri. L'importante è stare vicino a una fermata della metro o della monorotaia."
      },
      {
        domanda: "Come si va dall'aeroporto al centro di Kuala Lumpur?",
        risposta: "Il KLIA Ekspres arriva a KL Sentral in circa 30 minuti per 55 ringgit (65 dal 2027). L'autobus costa circa 15 ringgit ma impiega più di un'ora; un Grab circa 70-100 ringgit."
      },
      {
        domanda: "Come ci si veste per moschee e templi a Kuala Lumpur?",
        risposta: "Spalle e ginocchia coperte, e scarpe tolte prima di entrare. Alla Masjid Negara e alla Masjid Jamek prestano una veste lunga all'ingresso; alle Batu Caves conviene arrivare già vestiti in modo adatto."
      }
    ],
    esperienzeSlugs: ['batu-caves'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Lo skyline di Kuala Lumpur al crepuscolo con le Petronas Twin Towers illuminate',
    immagine: '/images/malesia/kuala-lumpur.jpg',
  },
  {
    slug: 'penang',
    paeseSlug: 'malesia',
    ordine: 2,
    nome: 'Penang e George Town',
    tipologia: ['gastronomia', 'cultura', 'città coloniali'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola sullo Stretto di Malacca con al centro George Town, ex porto franco britannico e oggi patrimonio UNESCO: shophouse cinesi, moschee, templi, case-clan sull\'acqua e una cucina di strada famosa in tutto il paese.',
    percheAndarci:
      'Per il cibo, che qui basta da solo a giustificare il viaggio, e perché George Town è la città dove gli strati culturali della Malesia si leggono meglio: comunità diverse a pochi isolati di distanza, ognuna con la propria architettura religiosa, tutte arrivate via mare.',
    cosaVedere: [
      'Il centro storico UNESCO di George Town, con le shophouse peranakan',
      'I Clan Jetties, i villaggi su palafitte delle famiglie cinesi, ognuno di un clan diverso',
      'Il tempio Kek Lok Si, grande complesso buddista sulla collina di Air Itam',
      'La Blue Mansion di Cheong Fatt Tze e la Pinang Peranakan Mansion',
      'La Street of Harmony, dove moschea, tempio cinese, tempio indù e chiesa anglicana stanno nella stessa via',
      'I murales del centro, che hanno reso George Town famosa ben oltre il suo perimetro',
    ],
    cosaFare: [
      'Mangiare ai banchi di strada, il motivo per cui si viene qui (c\'è una scheda esperienza dedicata)',
      'Girare il centro storico a piedi seguendo i murales e le installazioni in ferro battuto',
      'Salire a Penang Hill con la funicolare per la vista sull\'isola e sull\'aria fresca',
      'Escursione nel Penang National Park fino a Monkey Beach',
    ],
    doveDormire:
      'Dentro il perimetro UNESCO di George Town, possibilmente in una shophouse restaurata: si gira tutto a piedi ed è l\'unico modo di vedere la città la sera. Batu Ferringhi è la zona delle spiagge e dei resort, ma sta dall\'altra parte dell\'isola e taglia fuori dalla parte migliore.',
    doveMangiare:
      'È la ragione del viaggio. Da provare in ordine: l\'assam laksa, la zuppa acida di pesce e tamarindo che è il piatto simbolo dell\'isola; il char kway teow saltato al wok sul fuoco vivo; il cendol, il dolce ghiacciato con latte di cocco e zucchero di palma; il nasi kandar indiano-musulmano, con i curry versati uno sull\'altro sul riso; e il rojak, macedonia salata con salsa di gamberi fermentati. Si mangia ai coffee shop e ai food court più che nei ristoranti, e i banchi migliori hanno orari propri: alcuni aprono solo la mattina, altri solo dopo il tramonto.',
    comeArrivare: "L'aeroporto internazionale di Penang (PEN) è nel sud dell'isola, a circa 30-45 minuti di Grab o taxi da George Town; c'è anche l'autobus Rapid Penang, più lento. Da Kuala Lumpur si vola in meno di un'ora, oppure si prende il treno ETS da KL Sentral a Butterworth, sulla terraferma, in circa 4 ore, e da lì il traghetto che attraversa lo stretto fino al terminal di George Town in pochi minuti: il modo più bello di arrivare. Gli autobus da Kuala Lumpur e dalle Cameron Highlands (circa 4-5 ore) arrivano sull'isola passando dal ponte.",
    comeSpostarsi: 'George Town si gira a piedi; per il resto dell\'isola autobus pubblici economici e Grab.',
    periodoMigliore:
      'la stagione più secca, a inizio anno. Durante i festival cittadini, come il George Town Festival, la città si riempie.',
    costi: "Blue Mansion 25 RM con visita guidata, funicolare di Penang Hill 40 RM andata e ritorno per gli stranieri (prezzi ufficiali 2026); il centro storico e i murales sono gratuiti, i piatti ai banchi costano da pochi ringgit a una decina. Budget: circa 30-40 € al giorno con guesthouse, banchi di strada e autobus. Medio: 70-100 € con hotel in una shophouse restaurata, Grab e qualche ingresso. Alto: oltre 150 € con hotel storici come l'Eastern & Oriental e cene al ristorante.",
    erroriDaEvitare: [
      'Andare a Penang per le spiagge: Batu Ferringhi è mediocre e tiene lontani dalla parte che conta',
      'Mangiare nei ristoranti con menu illustrato: i banchi migliori non hanno insegne in inglese e chiudono quando finiscono gli ingredienti',
      'Girare il centro storico a mezzogiorno: tra le undici e le tre il caldo è serio e l\'ombra è poca',
      'Fermarsi una notte sola: George Town ha bisogno almeno di due sere, perché metà dei banchi lavora solo dopo il tramonto',
    ],
    confronti: [
      {
        titolo: 'Penang o Malacca?',
        introduzione:
          'Sono le due città dello Stretto iscritte insieme nella lista UNESCO, hanno la stessa storia (porti coloniali con comunità cinesi, indiane e malesi) e vengono spesso messe in alternativa quando il tempo è poco. Si somigliano meno di quanto sembra.',
        opzioni: [
          {
            nome: 'George Town (Penang)',
            sintesi: 'Più grande e più viva, considerata la capitale gastronomica del paese, su un\'isola con anche montagna, parco nazionale e spiagge.',
            costo: 'la città è quasi tutta gratuita; volo o autobus da KL',
            durata: '2-3 giorni',
            pro: [
              'Il cibo di strada è di un altro livello, ed è il motivo principale per venire in Malesia',
              'Centro storico più grande e ancora abitato, oltre che restaurato per i visitatori',
              'C\'è altro oltre alla città: Penang Hill, il parco nazionale, i Clan Jetties',
            ],
            contro: ['Più lontana da Kuala Lumpur', 'Più caotica e meno fotogenica nel complesso', 'Le spiagge sono deludenti'],
            perChi: 'Chi ha almeno due giorni e viene anche per mangiare. Se se ne sceglie una sola, è questa.',
          },
          {
            nome: 'Malacca',
            sintesi: 'Più piccola e più antica, con la stratificazione portoghese, olandese e britannica visibile in pochi isolati, non lontano da Kuala Lumpur.',
            costo: 'autobus da KL, economico',
            durata: '1-2 giorni',
            pro: [
              'Comoda: si incastra tra Kuala Lumpur e Singapore senza deviazioni',
              'Storia coloniale più antica e più leggibile, con tre dominazioni europee sovrapposte',
              'Jonker Street nel fine settimana e il quartiere peranakan sono molto belli',
            ],
            contro: [
              'Molto più turistica in proporzione, e nel fine settimana invasa dai visitatori in giornata',
              'Il centro si esaurisce in mezza giornata',
              'La cucina è buona ma non regge il confronto con Penang',
            ],
            perChi: 'Chi ha un giorno solo o sta viaggiando via terra verso Singapore.',
          },
        ],
        raccomandazione:
          'Con una settimana a disposizione si fanno tutte e due: Malacca è una sosta di un giorno sulla strada per Singapore, Penang una tappa a sé di due o tre. Dovendo sceglierne una, Penang, a meno che il viaggio non finisca a Singapore via terra: in quel caso Malacca non costa quasi tempo.',
      },
    ],
    miaEsperienza:
      'A Penang si va a mangiare, e chi dice il contrario non c\'è stato. Il centro storico di George Town è bello (shophouse scrostate, insegne cinesi, i Clan Jetties su palafitte dove vive ancora gente), ma a renderlo diverso da qualsiasi altra città malese è che ogni comunità ha portato qui la propria cucina e nessuna l\'ha annacquata. L\'assam laksa, con quel brodo acido di pesce e tamarindo che al primo cucchiaio spiazza, è il piatto per cui vale la deviazione. Bisogna sapere come funziona: i banchi migliori non hanno insegne in inglese, aprono a orari propri e chiudono quando finiscono, e capita di presentarsi e trovare la serranda abbassata alle due del pomeriggio. Quanto alla parte artistica, i murales sono simpatici e ormai ci sono code per fotografarsi davanti ai più famosi, ma la città è patrimonio UNESCO per altro.',
    luoghi: [
      {
        nome: "Centro storico di George Town",
        testo: "Patrimonio UNESCO per il suo mosaico di culture: shophouse peranakan, templi cinesi, moschee, chiese e vecchie case britanniche. Si gira a piedi per le vie strette con i murales di strada.",
        come: "Dal terminal dei traghetti o dagli alberghi si va a piedi. Tanti i percorsi a piedi.",
        quando: "Al mattino presto e dopo le quattro del pomeriggio. Tra le undici e le tre il caldo è serio.",
        tempo: "mezza giornata",
        consiglio: "Cercare i murales ma anche le botteghe di artigiani, e fermarsi a bere un caffè bianco in una vecchia caffetteria.",
        costo: "Gratuito: si cammina e i murales non si pagano.",
        lat: 5.41444,
        lng: 100.32917,
      },
      {
        nome: "Clan Jetties",
        testo: "Villaggi su palafitte dove da generazioni vivono famiglie cinesi, raggruppate per clan. Il più noto è il Chew Jetty, con case di legno, altarini e botteghe.",
        come: "A piedi dal lungomare di George Town. È un luogo dove si vive: camminare in silenzio, chiedere prima di fotografare.",
        quando: "Al mattino o a fine pomeriggio.",
        tempo: "1 ora",
        consiglio: "Comprare qualcosa da una delle botteghe lungo il molo: è l'unico modo corretto di sostenere chi ci vive.",
        lat: 5.41314,
        lng: 100.34128,
      },
      {
        nome: "Kek Lok Si",
        testo: "Il tempio buddista più grande della Malesia, ai piedi della collina di Air Itam. La pagoda dei Diecimila Buddha, a sette piani, ha la base cinese, la parte centrale thailandese e la cupola birmana; più in alto c'è una grande statua di Guanyin in bronzo.",
        come: "Bus Rapid Penang da George Town o taxi. Degli ascensori inclinati portano alla statua.",
        quando: "Al mattino; durante il Capodanno cinese è affollato di lanterne e fedeli.",
        tempo: "1 ora e mezza",
        costo: "ingresso al complesso libero; gli ascensori inclinati si pagano a parte",
        consiglio: "Salire fino alla statua di Guanyin: la vista su Penang vale i gradini.",
        lat: 5.39952,
        lng: 100.27373,
      },
      {
        nome: "Cheong Fatt Tze Mansion (Blue Mansion)",
        testo: "La casa-palazzo del mercante Cheong Fatt Tze, costruita tra il 1897 e il 1904, con le pareti color indaco ottenute da calce e tintura naturale, i cortili interni e gli arredi originali. Il restauro ha ricevuto un premio UNESCO per la conservazione del patrimonio.",
        come: "A piedi dal centro di George Town. Si visita con il tour guidato in inglese, a orari fissi; la casa è anche un albergo.",
        quando: "Al mattino, con il tour in lingua inglese.",
        tempo: "1 ora",
        url: "https://www.cheongfatttzemansion.com/",
        consiglio: "Arrivare in tempo per il primo tour: i gruppi sono piccoli e il racconto vale più delle sale.",
        costo: "Visita guidata 25 RM per gli adulti, circa 5 €; 12,50 RM sotto i 12 anni (sito ufficiale, 2026).",
        orari: "Visite guidate tutti i giorni alle 11:00 e alle 15:30, durata 45 minuti; conviene prenotare online.",
        lat: 5.42141,
        lng: 100.33495,
      },
      {
        nome: "Street of Harmony",
        testo: "Un tratto di Jalan Masjid Kapitan Keling e dintorni dove stanno vicini una moschea, un tempio cinese, un tempio indù e una chiesa anglicana. Un esempio vero di convivenza.",
        come: "A piedi nel centro storico.",
        quando: "Al mattino. Le moschee sono chiuse ai non musulmani durante la preghiera.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Visitare la Kapitan Keling Mosque fuori dagli orari di preghiera, con abiti coperti.",
        lat: 5.41667,
        lng: 100.33739,
      },
      {
        nome: "Penang Hill",
        testo: "Una collina che sale fino a 833 metri sopra la città, raggiunta da una funicolare che arriva in cima in 5-10 minuti, con aria più fresca, un giardino botanico e viste su George Town e il continente.",
        come: "In autobus da Komtar o in taxi fino alla stazione della funicolare, poi la salita in funicolare.",
        quando: "Aperta tutti i giorni dalle 6:15 alle 21:45. Al mattino c'è meno nebbia e ci sono meno code.",
        tempo: "3 ore",
        url: "https://www.penanghill.gov.my/",
        consiglio: "Salire presto: nel pomeriggio le code alla funicolare sono lunghe.",
        costo: "Funicolare andata e ritorno, corsia normale: 40 RM per gli adulti stranieri, circa 8 €; 20 RM i bambini da 4 a 12 anni (sito ufficiale, 2026).",
        orari: "Tutti i giorni 6:15-21:45.",
        lat: 5.42444,
        lng: 100.26892,
      },
      {
        nome: "Khoo Kongsi",
        testo: "La casa-clan della famiglia Khoo, la più sontuosa di George Town: un cortile di granito chiuso tra le case dei membri del clan e, in fondo, il tempio Leong San Tong, ricostruito all'inizio del Novecento dopo un incendio. Tetti carichi di figure in ceramica, colonne scolpite e travi dorate. Racconta bene come i clan hokkien organizzavano la vita della comunità.",
        come: "A piedi dal centro storico, entrando dal vicolo di Cannon Square. Visita libera, con pannelli e un piccolo museo al piano terra.",
        quando: "Al mattino, quando la luce entra nel cortile.",
        tempo: "1 ora",
        lat: 5.41503,
        lng: 100.33712,
        url: "https://www.khookongsi.com.my/",
      },
      {
        nome: "Pinang Peranakan Mansion",
        testo: "La villa verde costruita a fine Ottocento da Chung Keng Quee, capo della comunità cinese e magnate dello stagno, oggi museo della cultura peranakan. Raccoglie oltre mille oggetti d'epoca: porcellane nyonya, gioielli, mobili intarsiati, abiti da sposa. Gli interni, con il cortile centrale e le grate dorate, valgono da soli la visita.",
        come: "A piedi dal centro storico, in Church Street. Visita libera o con le guide del museo.",
        quando: "A metà mattina o nel primo pomeriggio, per stare al chiuso nelle ore calde.",
        tempo: "1-1,5 ore",
        lat: 5.418,
        lng: 100.34119,
        url: "https://www.pinangperanakanmansion.com.my/",
        consiglio: "Si abbina alla Blue Mansion: una racconta i mercanti cinesi, l'altra le famiglie peranakan.",
      },
      {
        nome: "St. George's Church",
        testo: "Costruita nel 1818 dalla Compagnia delle Indie Orientali, è la più antica chiesa anglicana del sud-est asiatico: colonne doriche bianche, un prato e un piccolo padiglione in memoria di Francis Light, il fondatore della colonia. Sta a pochi passi dalla Kapitan Keling Mosque e dal tempio della dea della misericordia.",
        come: "A piedi in Farquhar Street, nel centro storico.",
        quando: "Al mattino, abbinata alla Street of Harmony.",
        tempo: "20 minuti",
        lat: 5.41972,
        lng: 100.33911,
      },
      {
        nome: "Fort Cornwallis",
        testo: "Il forte a stella costruito dai britannici nel punto in cui Francis Light sbarcò nel 1786, prima in legno e poi in mattoni nei primi anni dell'Ottocento. Restano le mura basse, i cannoni rivolti al mare e una piccola cappella. È più interessante per la storia che per quello che si vede.",
        come: "A piedi sul lungomare, vicino alla torre dell'orologio della regina Vittoria e all'Esplanade.",
        quando: "Nel tardo pomeriggio, poi passeggiata sull'Esplanade al tramonto.",
        tempo: "45 minuti",
        lat: 5.4205,
        lng: 100.3439,
      },
      {
        nome: "Armenian Street e i murales",
        testo: "La via dove nel 2012 l'artista lituano Ernest Zacharevic dipinse i bambini in bicicletta, il murale che ha reso famosa la street art di George Town. Intorno ci sono altri dipinti e le sagome in ferro battuto che raccontano la storia delle strade. Oggi è piena di negozi e caffè, e davanti ai murales più noti si fa la fila per la foto.",
        come: "A piedi; i murales sono sparsi tra Armenian Street, Lebuh Ah Quee e Cannon Street. All'ufficio turistico si trova la mappa.",
        quando: "Prima delle nove, quando i murales sono liberi e fa ancora fresco.",
        tempo: "1-2 ore",
        costo: "Gratuito.",
        lat: 5.41474,
        lng: 100.33811,
      },
      {
        nome: "Little India e lo Sri Mahamariamman",
        testo: "Il quartiere indiano tra Queen Street e Market Street, con negozi di sari, ghirlande di fiori, musica tamil e banchi di dolci. Al centro c'è lo Sri Mahamariamman, del 1833, il più antico tempio indù dell'isola, con la torre d'ingresso coperta di divinità colorate.",
        come: "A piedi, accanto alla Street of Harmony. Nel tempio si entra scalzi e coperti.",
        quando: "Al tramonto, quando si accendono le luci; durante Deepavali è addobbato a festa.",
        tempo: "1 ora",
        lat: 5.41774,
        lng: 100.33856,
        consiglio: "Fermarsi per un tè tarik e un roti canai in uno dei locali con i tavoli sul marciapiede.",
      },
      {
        nome: "Wat Chayamangkalaram e Dhammikarama",
        testo: "Due templi buddisti uno di fronte all'altro in Burma Lane, a Pulau Tikus. Il Wat Chayamangkalaram, thailandese, custodisce un grande Buddha sdraiato di oltre 30 metri; il Dhammikarama, birmano, fondato nel 1803, ha elefanti di pietra all'ingresso e pagode dorate. Due stili diversi a pochi metri di distanza.",
        come: "Circa 3 km a nord-ovest del centro: Grab in 10-15 minuti o autobus Rapid Penang. Si entra scalzi, con spalle e ginocchia coperte.",
        quando: "Al mattino, quando ci sono i fedeli e meno caldo.",
        tempo: "1 ora",
        lat: 5.4318,
        lng: 100.31341,
      },
      {
        nome: "Gurney Drive",
        testo: "Il lungomare a nord del centro, con il food court all'aperto più famoso dell'isola: decine di banchi di char kway teow, satay, oyster omelette, rojak e laksa sotto le luci della sera. Più turistico dei banchi di George Town, ma comodo per assaggiare molti piatti in una sola cena.",
        come: "Grab dal centro storico in circa 10-15 minuti.",
        quando: "La sera, dopo il tramonto, quando aprono tutti i banchi.",
        tempo: "1-2 ore",
        lat: 5.43656,
        lng: 100.31256,
        consiglio: "Fare un giro completo prima di ordinare: lo stesso piatto cambia molto da un banco all'altro.",
      },
      {
        nome: "Penang Botanic Gardens",
        testo: "Il giardino botanico fondato dai britannici alla fine dell'Ottocento in una valle vicino a una cascata, detto anche Waterfall Gardens. Prati, alberi tropicali secolari, felci e macachi abituati alle persone. Da qui parte anche un sentiero ripido che sale a piedi fino a Penang Hill.",
        come: "Grab o autobus Rapid Penang dal centro, circa 20 minuti.",
        quando: "Mattina presto, quando corrono e camminano i residenti e fa fresco.",
        tempo: "1-2 ore",
        lat: 5.43996,
        lng: 100.28833,
        consiglio: "Non portare cibo in vista: le scimmie lo strappano di mano.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Murales di Armenian Street prima delle nove",
          "Khoo Kongsi e Street of Harmony con la Kapitan Keling Mosque",
          "Pranzo in un coffee shop del centro",
          "Blue Mansion con la visita delle 15:30",
          "Clan Jetties al tramonto",
          "Cena ai banchi di strada di George Town o a Gurney Drive",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Giorno 2: Kek Lok Si al mattino, poi assam laksa ad Air Itam",
          "Penang Hill in funicolare nel pomeriggio",
          "Little India e cena con nasi kandar",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: Botanic Gardens presto, poi Wat Chayamangkalaram e Dhammikarama",
          "Pinang Peranakan Mansion nelle ore calde",
          "Fort Cornwallis ed Esplanade al tramonto",
          "In alternativa, giornata al Penang National Park",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro storico di George Town",
        perChi: "chi vuole fare tutto a piedi",
        testo: "Shophouse restaurate trasformate in guesthouse e piccoli alberghi. Comodissimo, un po' rumoroso la sera.",
        fascia: "40-100 €",
      },
      {
        nome: "Batu Ferringhi",
        perChi: "chi cerca il mare e i resort",
        testo: "Una striscia di spiaggia con alberghi grandi. Mare mediocre, ma è la zona più comoda per le famiglie.",
        fascia: "70-200 €",
      },
      {
        nome: "Komtar e Jalan Burma",
        perChi: "chi vuole risparmiare",
        testo: "Alberghi di fascia media, fuori dal cuore turistico ma a pochi minuti di bus o taxi.",
        fascia: "30-70 €",
      },
      {
        nome: "Gurney Drive",
        perChi: "chi vuole hotel moderni e centri commerciali",
        testo: "Grandi alberghi e appartamenti sul lungomare, con il food court sotto casa. Al centro storico si va in Grab.",
        fascia: "50-130 €",
      },
    ],
    sapori: [
      {
        nome: "Assam laksa",
        testo: "Noodles in brodo acido di pesce e tamarindo con menta e ananas. Il piatto per cui vale la deviazione; si mangia ad Air Itam."
      },
      {
        nome: "Char kway teow",
        testo: "Noodles saltati su fiamma alta con gamberi, vongole e uova. A Penang la versione è affumicata dal fuoco di carbone."
      },
      {
        nome: "Nasi kandar",
        testo: "Riso con curry di vario tipo versati sopra, di origine indiana musulmana. Si ordina a banco e si indica che cosa mettere nel piatto."
      },
      {
        nome: "Cendol",
        testo: "Ghiaccio tritato, latte di cocco, sciroppo di palma e gelatine verdi. Il dolce di Penang."
      }
    ],
    attenzioni: [
      "I banchi migliori non hanno insegne in inglese, aprono a orari propri e chiudono quando finiscono: arrivare presto o non contare su un posto.",
      "Evitare il centro tra le undici e le tre: il caldo è forte e l'ombra scarsa.",
      "Nei templi e nelle moschee spalle e ginocchia coperte, scarpe tolte.",
      "Alle bancarelle turistiche attorno ai murales cibo e souvenir costano di più che nelle vie laterali."
    ],
    gite: [
      {
        nome: "Penang National Park e Monkey Beach",
        distanza: "circa 1 ora di autobus",
        come: "Autobus 101 da George Town fino a Teluk Bahang; all'ingresso del parco ci si registra, poi sentiero nella foresta o barca a pagamento da contrattare prima.",
        testo: "Il parco nazionale più piccolo della Malesia, istituito nel 2003, con foresta, spiagge e un lago meromittico. Monkey Beach si raggiunge in un'ora e mezza circa di sentiero; Pantai Kerachut è un sito di nidificazione delle tartarughe.",
      },
      {
        nome: "Batu Ferringhi",
        distanza: "circa 15 km, 30-45 minuti",
        come: "Autobus 101 da George Town o Grab.",
        testo: "La spiaggia dei resort sulla costa nord. Il mare non è il migliore della Malesia, ma la sera c'è il mercato lungo la strada principale e si mangia pesce sulla sabbia.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Penang?",
        risposta: "Due o tre: uno per il centro storico di George Town, uno per Kek Lok Si e Penang Hill, il terzo per mangiare con calma o per il parco nazionale. Con una notte sola si perde metà dei banchi, che aprono solo la sera.",
      },
      {
        domanda: "Penang o Malacca?",
        risposta: "Penang se si viene anche per il cibo e si hanno almeno due giorni; Malacca se il tempo è poco o si va via terra verso Singapore. Con una settimana si fanno entrambe.",
      },
      {
        domanda: "Dove dormire a George Town?",
        risposta: "Dentro il perimetro UNESCO, in una shophouse restaurata: si gira tutto a piedi e si vive la città la sera. Batu Ferringhi è comoda solo per chi vuole il resort sul mare.",
      },
      {
        domanda: "Quanto costa la funicolare di Penang Hill?",
        risposta: "40 RM andata e ritorno per gli adulti stranieri sulla corsia normale e 20 RM per i bambini da 4 a 12 anni (sito ufficiale, 2026). Funziona tutti i giorni dalle 6:15 alle 21:45.",
      },
      {
        domanda: "Bisogna prenotare la Blue Mansion?",
        risposta: "Conviene: si entra solo con la visita guidata delle 11:00 o delle 15:30, che dura 45 minuti e costa 25 RM, e i posti finiscono spesso.",
      },
      {
        domanda: "Penang è un posto da spiaggia?",
        risposta: "Non proprio. Batu Ferringhi è mediocre e lontana dal centro; per il mare in Malesia sono meglio Langkawi o le Perhentian.",
      },
    ],
    esperienzeSlugs: ['street-food-penang'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'I tetti di George Town, Weld Quay e i Clan Jetties visti dall\'alto, con lo stretto e Butterworth sullo sfondo',
    immagine: '/images/malesia/penang.jpg',
  },
  {
    slug: 'malacca',
    paeseSlug: 'malesia',
    ordine: 3,
    nome: 'Malacca',
    tipologia: ['storia', 'città coloniali', 'gastronomia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il porto che per secoli ha controllato lo stretto più strategico d\'Asia, conquistato dai portoghesi, poi dagli olandesi e infine dai britannici: tre dominazioni europee sovrapposte in pochi isolati, più la cultura peranakan nata dai matrimoni tra mercanti cinesi e donne malesi.',
    percheAndarci:
      'Qui la storia coloniale del sud-est asiatico si legge camminando (la chiesa portoghese in rovina, la piazza olandese rossa, il forte), e la città sta a metà strada tra Kuala Lumpur e Singapore.',
    cosaVedere: [
      'La Dutch Square con la Christ Church e lo Stadthuys, l\'antico municipio olandese',
      'Le rovine della chiesa di St. Paul in cima alla collina, con la vista sullo stretto',
      'La Porta de Santiago, ciò che resta della fortezza portoghese A Famosa',
      'Jonker Street, la via principale di Chinatown, con il mercato notturno del fine settimana',
      'Il Baba & Nyonya Heritage Museum, una casa peranakan conservata con gli arredi originali',
      'Il Cheng Hoon Teng, storico tempio cinese',
    ],
    cosaFare: [
      'Camminare il centro storico UNESCO, che si fa tutto a piedi in mezza giornata',
      'Cenare peranakan, la cucina nata dall\'incontro tra cinesi e malesi, tipica di Malacca e Penang',
      'Mercato notturno di Jonker Street nel fine settimana',
      'Giro in barca sul fiume al tramonto, con i murales sulle rive',
    ],
    doveDormire:
      'Dentro il centro storico, meglio dal lato di Chinatown: la sera, quando i pullman dei visitatori in giornata sono ripartiti, il quartiere cambia del tutto, ed è questa la ragione per fermarsi a dormire.',
    doveMangiare:
      'La cucina da cercare è quella peranakan o nyonya: l\'ayam pongteh, il pollo stufato con salsa di soia fermentata, e il laksa nyonya, con il latte di cocco, che è diverso da quello di Penang. La specialità popolare è invece il chicken rice ball, il pollo con il riso servito in polpette compatte, tipico della città. Da provare anche il cendol di Malacca, ricco di zucchero di palma, e i satay celup, gli spiedini cotti dai clienti in una pentola di salsa di arachidi bollente al centro del tavolo.',
    comeArrivare: "Malacca non ha voli di linea utili: si arriva in autobus. Dal terminal TBS di Kuala Lumpur gli autobus partono di continuo e arrivano a Melaka Sentral in circa 2 ore; dall'aeroporto KLIA ci sono autobus diretti, in circa 2-2,5 ore. Melaka Sentral è fuori città: da lì al centro storico si va in Grab in pochi minuti o con l'autobus locale. Per Singapore ci sono autobus diretti che impiegano circa 4-5 ore con la frontiera, da prenotare almeno il giorno prima.",
    comeSpostarsi: 'Il centro storico si gira a piedi. Per la stazione degli autobus, che è fuori città, servono un bus locale o Grab.',
    periodoMigliore: 'tutto l\'anno, con i mesi più asciutti a inizio anno. Il mercato notturno di Jonker Street c\'è solo nel fine settimana, il che condiziona la scelta dei giorni.',
    costi: "Musei statali (Stadthuys, Museo Marittimo, Palazzo del Sultanato) 20 RM ciascuno per gli stranieri, Baba & Nyonya circa 20-25 RM, Menara Taming Sari da 20 RM (2026); St. Paul, la Porta de Santiago e i templi sono gratuiti. Budget: circa 30-40 € al giorno con guesthouse a Chinatown, cibo di strada e autobus. Medio: 60-90 € con un hotel in una casa storica e qualche cena nyonya. Alto: oltre 140 € con gli alberghi di lusso sul fiume.",
    erroriDaEvitare: [
      'Andarci in un fine settimana aspettandosi tranquillità: da venerdì a domenica Malacca è una meta domestica molto frequentata',
      'Farla in giornata da Kuala Lumpur: si vede solo nelle ore peggiori e si perde la sera, che è il momento in cui la città funziona',
      'Salire sui trishaw decorati con le luci e la musica a tutto volume aspettandosi un giro romantico: sono un\'attrazione kitsch, il che va benissimo se si sa in anticipo',
    ],
    miaEsperienza:
      'Malacca è una tappa breve che rende molto più di quanto prometta, a una condizione: dormirci. Di giorno, soprattutto nel fine settimana, il centro è un flusso continuo di visitatori in giornata da Kuala Lumpur e Singapore, con i trishaw decorati a luci LED che passano sparando musica a tutto volume: un livello di kitsch che alla seconda volta diventa divertente. La sera, quando i pullman se ne vanno, restano i vicoli di Chinatown, le case peranakan con le porte aperte e il fiume illuminato. La collina di St. Paul, con la chiesa portoghese senza tetto e le lapidi olandesi appoggiate ai muri, è il posto dove gli strati di questa città si capiscono in due minuti. E la cucina nyonya, nata dall\'incontro tra mercanti cinesi e donne malesi, è una delle cose più interessanti che ho mangiato in tutto il paese.',
    luoghi: [
      {
        nome: "Dutch Square, Christ Church e Stadthuys",
        testo: "Il centro olandese della città, con gli edifici rosso mattone: la Christ Church, completata nel 1753, e lo Stadthuys, l'antica sede del governo olandese, costruita nel 1650.",
        come: "A piedi dal centro storico. Il Stadthuys ospita un museo di storia ed etnografia.",
        quando: "Al mattino, prima della folla.",
        tempo: "1 ora",
        consiglio: "Cominciare qui e salire verso St. Paul con le scale laterali.",
        costo: "20 RM per gli adulti stranieri, circa 4 €; 10 RM i bambini (Perbadanan Muzium Melaka, 2026).",
        orari: "Da martedì a domenica 9:00-17:30, ultimo ingresso 16:30; chiuso il lunedì.",
        lat: 2.19406,
        lng: 102.24915,
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "St. Paul's Hill e Porta de Santiago",
        testo: "Sulla collina stanno le rovine della chiesa nata come cappella portoghese nel 1521, con lapidi olandesi lungo i muri. Ai piedi c'è la Porta de Santiago, ultima parte della fortezza A Famosa.",
        come: "A piedi, con una breve salita. Dalla cima si vede lo stretto.",
        quando: "Al tramonto, con la luce che scende sullo stretto.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Leggere le lapidi: sono la sintesi della storia della città.",
        lat: 2.1928,
        lng: 102.249,
      },
      {
        nome: "Jonker Street",
        testo: "La via principale di Chinatown, con botteghe di antiquariato, caffè e, nel fine settimana, un mercato notturno affollato.",
        come: "A piedi dal centro. Il mercato notturno c'è nel fine settimana.",
        quando: "Nei giorni feriali per camminare con calma; il fine settimana per il mercato.",
        tempo: "1-2 ore",
        consiglio: "Mangiare a Jonker non è sempre la scelta migliore: provare le vie laterali.",
        lat: 2.19672,
        lng: 102.24653,
        costo: "Gratuito.",
        orari: "Mercato notturno venerdì, sabato e domenica dalla sera.",
      },
      {
        nome: "Baba & Nyonya Heritage Museum",
        testo: "Una casa di una famiglia peranakan, conservata con gli arredi originali: legno intarsiato, porcellane e foto di famiglia. Racconta la comunità cino-malese nata dall'incontro dei mercanti cinesi con le donne locali.",
        come: "A piedi da Jonker Street.",
        quando: "Chiuso il martedì. Negli altri feriali 10-16:15, nel fine settimana 10-16:45 (2025).",
        tempo: "1 ora",
        url: "https://www.babanyonyamuseum.com/",
        consiglio: "Controllare orari e modalità di visita sul sito prima di andare.",
        costo: "Circa 20-25 RM, circa 4-5 €.",
        orari: "Chiuso il martedì; negli altri feriali 10:00-16:15, sabato e domenica 10:00-16:45 (sito ufficiale).",
      },
      {
        nome: "Cheng Hoon Teng",
        testo: "Un tempio cinese storico, ancora in funzione; nelle vie vicine ci sono anche il tempio indù Sri Poyatha Moorthi e la Kampung Kling Mosque, fondata nel 1748 e ricostruita in mattoni nel 1872, con un'architettura che mescola elementi sumatrani, cinesi, indù e malesi: tre culture a pochi passi.",
        come: "A piedi, nel centro storico, in Jalan Tukang Emas, detta Harmony Street.",
        quando: "Al mattino.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Abiti coperti per il tempio e per la moschea vicina.",
        lat: 2.19747,
        lng: 102.24686,
        url: "https://www.chenghoonteng.org.my/",
      },
      {
        nome: "Museo Marittimo (Muzium Samudera)",
        testo: "Una grande replica della Flor de la Mar, la caracca portoghese affondata al largo di Malacca nel 1511 carica del bottino della conquista. Dentro e negli edifici accanto si racconta il porto: i mercanti arabi, cinesi e indiani, le spezie, le dominazioni europee. È il museo più amato dalle famiglie.",
        come: "A piedi lungo il fiume, a pochi minuti dalla Dutch Square. Lo stesso biglietto vale per le sezioni vicine del museo.",
        quando: "Nelle ore calde, per stare al chiuso.",
        tempo: "1 ora",
        costo: "20 RM per gli adulti stranieri, circa 4 €; 10 RM i bambini (Perbadanan Muzium Melaka, 2026).",
        orari: "Da martedì a domenica 9:00-17:30, ultimo ingresso 16:30; chiuso il lunedì.",
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "Palazzo del Sultanato",
        testo: "La ricostruzione in legno scuro, senza chiodi, del palazzo del sultano Mansur Shah, che regnò nel Quattrocento quando Malacca era il porto più ricco dello Stretto. Dentro c'è il museo della cultura malese: costumi, armi, scene della corte. Racconta la Malacca prima degli europei.",
        come: "A piedi ai piedi della collina di St. Paul, sul lato opposto alla Porta de Santiago. Si entra scalzi.",
        quando: "Al mattino, prima della salita a St. Paul.",
        tempo: "45 minuti",
        costo: "20 RM per gli adulti stranieri, circa 4 €; 10 RM i bambini (Perbadanan Muzium Melaka, 2026).",
        orari: "Da martedì a domenica 9:00-17:30, ultimo ingresso 16:30; chiuso il lunedì.",
        lat: 2.1929,
        lng: 102.2504,
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "Crociera sul fiume Malacca",
        testo: "Il battello che risale il fiume per circa 9 km tra le case dipinte di murales, i magazzini restaurati, i ponti e il villaggio di Kampung Morten. Di sera, con le luci sulle rive, è il modo più rilassante di vedere la città.",
        come: "Dal molo vicino al Museo Marittimo o dagli altri imbarchi lungo il fiume; biglietti alla biglietteria o online.",
        quando: "Dopo il tramonto, con le rive illuminate.",
        tempo: "45 minuti",
        orari: "Tutti i giorni 9:00-23:00.",
        url: "https://www.melakarivercruise.my/",
      },
      {
        nome: "Kampung Morten",
        testo: "Un villaggio malese tradizionale rimasto in mezzo alla città, sull'ansa del fiume: case di legno su palafitte con tetti spioventi, giardini e scale decorate. È abitato, e alcune famiglie aprono la casa ai visitatori.",
        come: "A piedi lungo la passeggiata del fiume, circa 15 minuti da Jonker Street, oppure con la crociera.",
        quando: "Nel tardo pomeriggio, poi si torna lungo il fiume al tramonto.",
        tempo: "45 minuti",
        lat: 2.20339,
        lng: 102.25103,
        consiglio: "È un quartiere residenziale: niente foto dentro i cortili senza chiedere.",
      },
      {
        nome: "Kampung Hulu Mosque",
        testo: "Del 1728, è una delle moschee più antiche della Malesia ancora in uso. Ha il tetto a piramide a più livelli tipico delle moschee di Giava e un minareto che somiglia a una pagoda: un'architettura che mescola influenze malesi, cinesi e indù, come la vicina Kampung Kling.",
        come: "A piedi nel nord di Chinatown. I non musulmani entrano fuori dagli orari di preghiera, con abiti coperti.",
        quando: "Al mattino, lontano dalla preghiera del venerdì.",
        tempo: "20 minuti",
        lat: 2.19925,
        lng: 102.24761,
      },
      {
        nome: "Menara Taming Sari",
        testo: "Una torre panoramica girevole alta 80 metri: la cabina sale ruotando e in pochi minuti mostra il centro storico, il fiume, lo stretto e le isole artificiali. Non ha niente di storico, ma aiuta a capire la forma della città.",
        come: "A piedi dalla Dutch Square, verso il lungomare.",
        quando: "Al tramonto, con la luce sullo stretto.",
        tempo: "30 minuti, con 7 minuti di salita",
        costo: "Da 20 RM per gli adulti, circa 4 € (sito ufficiale, 2026).",
        orari: "Feriali 9:00-22:00; fine settimana e festivi 9:00-23:00.",
        lat: 2.19083,
        lng: 102.24711,
        url: "https://www.menaratamingsari.com/",
      },
      {
        nome: "Bukit China",
        testo: "La collina che, secondo la tradizione, il sultano donò alla principessa cinese Hang Li Po e al suo seguito nel Quattrocento. Oggi è uno dei più grandi cimiteri cinesi fuori dalla Cina, con migliaia di tombe a ferro di cavallo tra gli alberi. Ai piedi c'è il pozzo del sultano e il tempio Sam Po Kong.",
        come: "A piedi o in Grab dal centro, circa 1 km a est di Jonker Street. I sentieri tra le tombe salgono fino alla cima.",
        quando: "Mattina presto, quando la collina è piena di persone che camminano e fanno esercizio.",
        tempo: "1 ora",
        lat: 2.2,
        lng: 102.2577,
        consiglio: "Rispettare le tombe: si cammina sui sentieri, non sopra le sepolture.",
      },
      {
        nome: "Portuguese Settlement",
        testo: "Il quartiere sul mare dove vivono i discendenti dei portoghesi arrivati nel 1511, che parlano ancora il kristang, un creolo portoghese. Case basse, croci sulle porte, una piazza con ristoranti di pesce. A fine giugno vi si celebra la Festa di San Pedro, con le barche decorate.",
        come: "Circa 3 km a sud-est del centro, in Grab in 10 minuti.",
        quando: "La sera, per cenare con il pesce alla griglia nella piazza.",
        tempo: "1-2 ore",
        lat: 2.18583,
        lng: 102.26583,
        consiglio: "Da provare il devil curry, il curry piccante della cucina kristang.",
      },
      {
        nome: "Masjid Selat (Moschea dello Stretto)",
        testo: "Una moschea moderna costruita su palafitte sull'acqua, sull'isola artificiale di Pulau Melaka, inaugurata nel 2006. Con l'alta marea sembra galleggiare; al tramonto la luce dietro il minareto attira molti fotografi.",
        come: "Circa 3 km a sud del centro, in Grab. I non musulmani entrano fuori dagli orari di preghiera, con abiti coperti; le donne con il capo coperto.",
        quando: "Al tramonto, restando fuori durante la preghiera della sera.",
        tempo: "45 minuti",
        lat: 2.17889,
        lng: 102.24917,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Dutch Square, Christ Church e museo dello Stadthuys",
          "Palazzo del Sultanato, poi salita a St. Paul's Hill e Porta de Santiago",
          "Pranzo nyonya",
          "Primo pomeriggio: Baba & Nyonya Museum",
          "Cheng Hoon Teng, Kampung Kling e Kampung Hulu",
          "Sera: Jonker Street e crociera sul fiume illuminato",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Giorno 2: Bukit China presto, poi Museo Marittimo nelle ore calde",
          "Kampung Morten lungo il fiume nel pomeriggio",
          "Tramonto alla Masjid Selat",
          "Cena al Portuguese Settlement",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: gita a Pulau Besar in mattinata",
          "Menara Taming Sari al tramonto",
          "Ultima cena di satay celup",
        ],
      },
    ],
    zone: [
      {
        nome: "Chinatown e Jonker Street",
        perChi: "chi vuole stare nel cuore della città",
        testo: "Guesthouse in case storiche, molte vicine a tutto. Rumoroso nel fine settimana.",
        fascia: "25-90 €",
      },
      {
        nome: "Lungofiume",
        perChi: "chi cerca una vista sul fiume",
        testo: "Alberghi con vista sul fiume, più tranquilli. Un po' più lontani da Jonker Street.",
        fascia: "50-150 €",
      },
      {
        nome: "Bandar Hilir",
        perChi: "chi vuole un hotel moderno a due passi dal centro",
        testo: "Grandi alberghi e centri commerciali tra la Dutch Square e il mare, vicino alla Menara Taming Sari. Comodi ma senza atmosfera.",
        fascia: "40-100 €",
      },
    ],
    sapori: [
      {
        nome: "Chicken rice ball",
        testo: "Riso modellato a palline e servito con pollo bollito. È la versione locale del chicken rice."
      },
      {
        nome: "Laksa nyonya",
        testo: "Noodles in brodo di cocco e gamberi, tipico della cucina peranakan."
      },
      {
        nome: "Cendol",
        testo: "Ghiaccio tritato, latte di cocco, sciroppo di palma e gelatine verdi. Un dolce molto amato a Malacca."
      },
      {
        nome: "Satay celup",
        testo: "Spiedini che si cuociono al tavolo in una pentola di salsa bollente. Una specialità di Malacca."
      }
    ],
    attenzioni: [
      "Da venerdì a domenica la città è affollata di gitanti: se si può, venire nei giorni feriali.",
      "I trishaw decorati con luci e musica forte sono un'attrazione: concordare il prezzo prima di salire.",
      "Non fare la tappa in giornata da Kuala Lumpur: si perde la sera, quando i pullman se ne vanno.",
      "Il caldo è forte a mezzogiorno: tenere acqua e coprirsi la testa."
    ],
    gite: [
      {
        nome: "Pulau Besar",
        distanza: "circa 20 km, poi 15 minuti di barca",
        come: "In Grab o taxi fino al molo di Anjung Batu, a Umbai, poi traghetto per l'isola.",
        testo: "Una piccola isola davanti alla costa, con spiagge tranquille, sentieri e tombe di santi musulmani meta di pellegrinaggio. Una mezza giornata di mare e silenzio dopo il centro affollato.",
      },
      {
        nome: "Port Dickson",
        distanza: "circa 90 km, 1,5 ore in auto",
        come: "In auto o con un autista; autobus da Melaka Sentral, più lenti.",
        testo: "La località balneare più vicina a Kuala Lumpur, con spiagge lunghe e il faro di Tanjung Tuan. Il mare non è da cartolina, ma è una giornata di riposo sulla strada verso nord.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Malacca?",
        risposta: "Uno pieno basta per il centro storico; con due si aggiungono musei, Kampung Morten e la sera sul fiume senza fretta. Conviene dormirci almeno una notte.",
      },
      {
        domanda: "Si può visitare Malacca in giornata da Kuala Lumpur?",
        risposta: "Si può, con circa 2 ore di autobus per tratta, ma si vede la città nelle ore più calde e affollate e si perde la sera, che è il momento migliore.",
      },
      {
        domanda: "Quando c'è il mercato notturno di Jonker Street?",
        risposta: "Venerdì, sabato e domenica dalla sera. Negli altri giorni la via è più tranquilla e si cammina meglio.",
      },
      {
        domanda: "Malacca o Penang?",
        risposta: "Malacca se il tempo è poco o si va via terra verso Singapore; Penang se si hanno due o tre giorni e si viene anche per il cibo.",
      },
      {
        domanda: "Quanto costano i musei di Malacca?",
        risposta: "I musei statali come lo Stadthuys, il Museo Marittimo e il Palazzo del Sultanato costano 20 RM ciascuno per gli adulti stranieri e chiudono il lunedì. Il Baba & Nyonya Heritage Museum è privato e chiude il martedì.",
      },
      {
        domanda: "Come si va da Malacca a Singapore?",
        risposta: "Con gli autobus diretti, circa 4-5 ore compresa la frontiera. La SG Arrival Card si compila online nei tre giorni prima dell'arrivo.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Il fiume di Malacca tra le case colorate del centro storico, con un battello turistico',
    immagine: '/images/malesia/malacca.jpg',
  },
  {
    slug: 'cameron-highlands',
    paeseSlug: 'malesia',
    ordine: 4,
    nome: 'Cameron Highlands',
    tipologia: ['natura', 'montagna', 'trekking'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'altopiano dove i britannici si rifugiavano dal caldo: piantagioni di tè a perdita d\'occhio, serre di fragole, foresta muschiosa e un clima fresco la sera. È uno dei pochi posti della penisola dove serve una felpa.',
    percheAndarci:
      'Dopo qualche giorno di caldo equatoriale il sollievo fisico si sente, e le piantagioni di tè che scendono a onde lungo le colline sono un paesaggio molto fotografato. La mossy forest, la foresta muschiosa d\'altura, è tutta un\'altra cosa.',
    cosaVedere: [
      'Le piantagioni di tè, con le terrazze verdi che seguono le colline',
      'La mossy forest sul Gunung Brinchang, un bosco d\'altura coperto di muschio e felci, percorribile su una passerella',
      'Le fattorie di fragole e le serre, l\'altra produzione tipica dell\'altopiano',
      'Il mercato di Brinchang, con i prodotti dell\'altopiano',
    ],
    cosaFare: [
      'Visita a una piantagione con degustazione e vista sulle terrazze (c\'è una scheda esperienza dedicata)',
      'Passeggiata nella mossy forest al mattino, quando la nebbia è ancora tra gli alberi',
      'Uno dei sentieri numerati della zona, dal facile al parecchio impegnativo',
      'Cercare la rafflesia, un fiore gigante, con una guida locale: fiorisce a periodi e non è garantita',
    ],
    doveDormire:
      'Tanah Rata è il paese più comodo e ha l\'offerta più ampia; Brinchang è più vicino alle piantagioni ma più anonimo. Le camere hanno raramente il riscaldamento: di notte fa freddo sul serio e le coperte contano più delle stelle.',
    doveMangiare:
      'L\'altopiano ha una sua identità gastronomica legata al clima: lo steamboat, la pentola di brodo bollente al centro del tavolo in cui si cuociono verdure e carne, è quello che mangiano tutti la sera perché fa freddo, ed è la cosa giusta da fare. Per il resto, tè e scones nelle sale da tè delle piantagioni (un\'eredità coloniale che qui non è una posa) e le fragole in ogni forma possibile, comprese quelle che sarebbe meglio evitare.',
    comeArrivare:
      "Gli autobus da Kuala Lumpur (terminal TBS) arrivano a Tanah Rata in circa 4 ore, da Ipoh in circa 2 e da Penang in 4-5; nei fine settimana conviene prenotarli. In treno ETS si arriva a Ipoh o a Tapah Road, poi taxi o autobus per la salita. L'ultimo tratto è una strada di montagna con molti tornanti: chi soffre l'auto lo sente.",
    comeSpostarsi:
      'Le distanze tra i punti d\'interesse sono scomode a piedi e i mezzi pubblici sono radi: quasi tutti si aggregano a un tour di mezza giornata o prendono un taxi per la giornata. Grab funziona a singhiozzo.',
    periodoMigliore:
      'tutto l\'anno, con temperature fresche e stabili. Le piogge sono frequenti nel pomeriggio in ogni stagione: le uscite vanno programmate al mattino.',
    costi:
      "Piantagioni BOH a ingresso gratuito, Mossy Forest circa 30 RM per gli stranieri, sentieri gratuiti; i tour di mezza giornata si confrontano tra le agenzie di Tanah Rata. Budget al giorno a persona in doppia: 25-40 € con guesthouse a Tanah Rata e cibo locale, 50-80 € con hotel a Brinchang e tour guidati, da 120 € nei resort coloniali.",
    erroriDaEvitare: [
      'Andarci in un fine settimana o durante le vacanze scolastiche malesi: l\'altopiano è una meta domestica molto amata e le strade a tornanti diventano una coda',
      'Non portare niente di caldo: qui, unico posto del viaggio, la sera si gela',
      'Prenotare i tour più economici per la mossy forest, che spesso portano solo sulla passerella affollata vicino alla torre invece che nella parte vera',
      'Aspettarsi paesaggi incontaminati: l\'altopiano è pesantemente coltivato e in alcune zone le serre di plastica hanno mangiato la vista',
    ],
    miaEsperienza:
      'Le Cameron Highlands funzionano soprattutto per contrasto: ci siamo arrivati dopo giorni di caldo umido e la sera abbiamo dormito sotto una coperta, che a quel punto sembrava un lusso. Le piantagioni di tè sono belle, con le terrazze verdi che scendono a onde, e la sala da tè affacciata sulle colline è una di quelle cose coloniali che qui non stonano. La mossy forest è la parte che sorprende di più (un bosco nano a 2.000 metri tutto coperto di muschio, con la nebbia tra i rami) e insieme quella su cui conviene essere pratici: ci sono due mossy forest, quella vera e la passerella turistica accanto al parcheggio della torre, e i tour più economici portano solo alla seconda. C\'è anche il rovescio della medaglia: l\'altopiano è agricolo e in certi tratti le serre di plastica coprono interi versanti. È una zona coltivata con dei bei pezzi dentro, non un parco nazionale.',
    luoghi: [
      {
        nome: "Piantagioni di tè",
        testo: "Colline coperte di terrazze di tè a perdita d'occhio, come la piantagione BOH di Sungai Palas, da cui parte anche il sentiero per la foresta muschiosa. Alcune piantagioni hanno una sala da tè con vista.",
        come: "In auto o in tour da Tanah Rata o Brinchang. Strade di montagna strette.",
        quando: "Al mattino, con meno nebbia e meno gente.",
        tempo: "2 ore",
        costo: "ingresso gratuito; tè e dolci a pagamento",
        orari: "BOH Sungei Palas: 8.30-16.30, chiuso il lunedì; aperto in alcuni festivi (sito ufficiale BOH).",
        url: "https://bohtea.com/visit-our-tea-gardens/",
        lat: 4.51638,
        lng: 101.41625,
        consiglio: "Prendere il tè in terrazza e guardare le colline per mezz'ora: è la parte migliore.",
      },
      {
        nome: "Mossy Forest sul Gunung Brinchang",
        testo: "Un bosco d'altura vicino alla cima del Gunung Brinchang, tutto coperto di muschio, felci e orchidee selvatiche, con nebbia tra i rami. Si percorre su una passerella di legno.",
        come: "In fuoristrada o con un tour guidato da Tanah Rata o Brinchang. Chiedere di essere portati alla parte vera, non solo alla passerella accanto al parcheggio della torre.",
        quando: "Al mattino presto: la nebbia sale a metà giornata.",
        tempo: "2-3 ore",
        costo: "circa 30 RM per gli adulti stranieri fino alla fine della passerella (circa 6 €, tariffa riportata dagli operatori)",
        orari: "Tutti i giorni 8-17 (Dipartimento forestale del Pahang).",
        url: "https://www.forestry.gov.my/en/pahang/taman-eko-rimba-mossy",
        lat: 4.50064,
        lng: 101.38919,
        consiglio: "Preferire un tour guidato con un'ora in più: i tour più economici portano solo alla passerella affollata.",
      },
      {
        nome: "Fattorie di fragole e serre",
        testo: "La coltivazione di fragole e verdure è l'altra attività tipica dell'altopiano. Si visitano le serre, si mangiano fragole e si compra miele e tè.",
        come: "In auto o con un tour, lungo la strada principale di Brinchang.",
        quando: "Al mattino.",
        tempo: "1 ora",
        lat: 4.49618,
        lng: 101.38628,
        consiglio: "Non aspettarsi il paesaggio incontaminato: molte zone sono coperte dalle serre di plastica.",
      },
      {
        nome: "Brinchang e il mercato",
        testo: "Uno dei paesi principali dell'altopiano, con il mercato dei prodotti locali, un mercato notturno e i ristoranti dove si mangia lo steamboat.",
        come: "A piedi da Brinchang o in bus da Tanah Rata.",
        quando: "Nel tardo pomeriggio e la sera.",
        tempo: "2 ore",
        costo: "gratuito",
        lat: 4.491,
        lng: 101.3885,
        consiglio: "Portare una felpa: la sera fa freddo.",
      },
      {
        nome: "Il mercato di Kea Farm",
        testo: "Una fila di banchi lungo la strada principale, sotto le serre, con fragole, mais dolce, patate dolci, piante, miele e souvenir. È il mercato dei prodotti dell'altopiano più frequentato.",
        come: "Sulla strada tra Brinchang e la piantagione di Sungei Palas, in auto o con i tour.",
        quando: "Al mattino, con i prodotti appena raccolti.",
        tempo: "45 minuti",
        costo: "gratuito",
        lat: 4.50438,
        lng: 101.4067,
      },
      {
        nome: "Il tempio di Sam Poh",
        testo: "Un tempio buddhista cinese su una collina sopra Brinchang, con statue dorate, leoni di pietra e una vista sui tetti del paese e sulle serre.",
        come: "A piedi in salita da Brinchang, 10-15 minuti.",
        quando: "Al mattino o al tramonto.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 4.48885,
        lng: 101.39112,
      },
      {
        nome: "Time Tunnel",
        testo: "Un piccolo museo privato pieno di oggetti della vita quotidiana malese del Novecento, ricostruzioni di negozi e foto dell'altopiano coloniale. Ingenuo ma divertente con la pioggia.",
        come: "Alla periferia di Brinchang, verso Kea Farm.",
        quando: "Nei pomeriggi di pioggia.",
        tempo: "1 ora",
        lat: 4.49729,
        lng: 101.39526,
      },
      {
        nome: "Robinson Falls e il sentiero 9",
        testo: "Una cascata alla fine di un breve sentiero nel bosco, a pochi minuti da Tanah Rata. Da qui il sentiero 9A scende tra la foresta fino alla piantagione BOH di Habu.",
        come: "A piedi dal fondo di Tanah Rata, seguendo la strada verso la centrale idroelettrica.",
        quando: "Al mattino, prima delle piogge del pomeriggio.",
        tempo: "1-3 ore secondo il percorso",
        costo: "gratuito",
        lat: 4.4636,
        lng: 101.38775,
        consiglio: "I sentieri dell'altopiano si chiudono e riaprono per frane e manutenzione: chiedere in paese quali sono aperti.",
      },
      {
        nome: "Gunung Jasar e il sentiero 10",
        testo: "Il sentiero più facile di Tanah Rata sale in un'ora circa fino alla cima del Gunung Jasar, a circa 1.700 metri, nella foresta, con qualche vista sulle colline.",
        come: "Dall'inizio del sentiero 10, sopra il paese.",
        quando: "Al mattino presto, con la nebbia che si alza.",
        tempo: "2-3 ore andata e ritorno",
        costo: "gratuito",
        lat: 4.47818,
        lng: 101.36096,
        consiglio: "Fango e radici: scarpe da trekking e qualcosa per la pioggia.",
      },
      {
        nome: "Tanah Rata",
        testo: "Il paese principale dell'altopiano, a circa 1.440 metri, con la stazione degli autobus, guesthouse, ristoranti indiani e cinesi e l'inizio di diversi sentieri. È la base più comoda per chi non guida.",
        come: "Gli autobus da Kuala Lumpur, Ipoh e Penang arrivano qui.",
        quando: "La sera, per cenare.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 4.47069,
        lng: 101.37769,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mossy Forest con tour guidato all'alba",
          "Piantagione di Sungei Palas con tè in terrazza",
          "Mercato di Kea Farm e una fattoria di fragole",
          "Pomeriggio a Brinchang e al tempio di Sam Poh",
          "Sera: steamboat",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: il giorno sopra",
          "Giorno 2: sentiero 10 al Gunung Jasar al mattino",
          "Robinson Falls nel pomeriggio",
          "Sera a Tanah Rata",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: piantagioni lungo la strada di Ringlet",
          "Time Tunnel se piove",
          "Partenza per Ipoh nel pomeriggio",
        ],
      },
    ],
    zone: [
      {
        nome: "Tanah Rata",
        perChi: "chi vuole stare vicino ai sentieri e ai bus",
        testo: "Il centro con ostelli e guesthouse, comodo per escursioni e ristoranti. Un po' trafficato.",
        fascia: "20-70 €",
      },
      {
        nome: "Brinchang",
        perChi: "chi vuole essere vicino alla Mossy Forest e al mercato",
        testo: "Più tranquillo, con alberghi di fascia media e più freddo la sera.",
        fascia: "40-120 €",
      },
      {
        nome: "Kea Farm e Tringkap",
        perChi: "chi viaggia in auto e vuole i resort",
        testo: "Resort e appartamenti con vista sulle colline a nord di Brinchang, vicini a piantagioni e serre. Fuori dai paesi, serve l'auto.",
        fascia: "50-150 €",
      },
    ],
    sapori: [
      {
        nome: "Steamboat",
        testo: "Una pentola di brodo bollente al centro del tavolo dove si cuociono carne, pesce e verdure. Ideale per le sere fredde dell'altopiano."
      },
      {
        nome: "Scones con fragole e panna",
        testo: "Un'eredità britannica, servita nelle sale da tè delle piantagioni."
      },
      {
        nome: "Tè delle piantagioni",
        testo: "Tè nero locale, servito nelle sale da tè delle piantagioni."
      },
      {
        nome: "Murtabak",
        testo: "Una frittella farcita di carne e uova, di origine indiana musulmana. Si trova nei locali di Tanah Rata e Brinchang."
      }
    ],
    attenzioni: [
      "Nei fine settimana e durante le vacanze scolastiche malesi le strade a tornanti si intasano: venire in un giorno feriale.",
      "La sera fa fresco, e in quota anche freddo: portare qualcosa di caldo.",
      "Chi soffre l'auto: la strada di salita è piena di tornanti.",
      "Scegliere un tour per la Mossy Forest che arrivi alla parte vera e non solo alla passerella vicino al parcheggio."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono alle Cameron Highlands?",
        risposta: "Due giorni: uno per la Mossy Forest, le piantagioni e i mercati, uno per un sentiero e un po' di riposo. Con il terzo si scende con calma verso Ipoh.",
      },
      {
        domanda: "Meglio dormire a Tanah Rata o a Brinchang?",
        risposta: "Tanah Rata per autobus, sentieri e ristoranti; Brinchang per stare più vicini alla Mossy Forest e al mercato notturno.",
      },
      {
        domanda: "Quanto costa la Mossy Forest?",
        risposta: "Gli operatori riportano circa 30 RM per gli adulti stranieri fino alla fine della passerella; la parte oltre richiede un permesso forestale. È aperta dalle 8 alle 17.",
      },
      {
        domanda: "Quando è aperta la piantagione BOH di Sungei Palas?",
        risposta: "Dalle 8.30 alle 16.30, chiusa il lunedì tranne in alcuni festivi. L'ingresso è gratuito; si pagano tè e dolci.",
      },
      {
        domanda: "Fa freddo alle Cameron Highlands?",
        risposta: "Di giorno è fresco, la sera si scende spesso sotto i 15 gradi. Serve una felpa o una giacca leggera tutto l'anno.",
      },
      {
        domanda: "Serve un tour o ci si muove da soli?",
        risposta: "I mezzi pubblici sono radi: si prende un tour di mezza giornata, un taxi a giornata o si noleggia l'auto. I sentieri vicini a Tanah Rata si fanno a piedi.",
      },
    ],
    gite: [
      {
        nome: "Ipoh",
        distanza: "circa 90 km, 2 ore in auto o bus",
        come: "In bus da Tanah Rata o in auto lungo la strada di Simpang Pulai.",
        testo: "La città dei templi nelle grotte calcaree, della città vecchia con i murales e del white coffee. Una buona tappa scendendo dall'altopiano.",
      },
      {
        nome: "La cascata di Lata Iskandar",
        distanza: "circa 30 km, 40 minuti in auto",
        come: "Sulla vecchia strada verso Tapah, in auto o come sosta del bus.",
        testo: "Una cascata che scende sulle rocce accanto alla strada di montagna, con bancarelle di frutta e prodotti degli orang asli.",
      },
      {
        nome: "Kellie's Castle",
        distanza: "circa 80 km, 1,5-2 ore in auto",
        come: "In auto verso Batu Gajah, vicino a Ipoh.",
        testo: "La villa incompiuta di un piantatore scozzese del primo Novecento, rimasta a metà dopo la sua morte. Rovine in mattoni rossi tra le piantagioni.",
      },
    ],
    esperienzeSlugs: ['piantagioni-te-cameron'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Le colline coperte di foresta delle Cameron Highlands viste da un punto panoramico',
    immagine: '/images/malesia/cameron-highlands.jpg',
  },
  {
    slug: 'taman-negara',
    paeseSlug: 'malesia',
    ordine: 5,
    nome: 'Taman Negara',
    tipologia: ['natura', 'giungla', 'trekking'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una foresta pluviale antichissima, nel cuore della penisola malese. Ci si arriva in barca lungo il fiume, e questo dice già molto su cosa aspettarsi.',
    percheAndarci:
      'È giungla vera, raggiungibile da Kuala Lumpur, e la canopy walkway sospesa tra gli alberi è uno dei pochi modi di vedere una foresta pluviale dall\'alto invece che dal basso, dove non si vede quasi niente.',
    cosaVedere: [
      'La canopy walkway, sospesa tra le chiome degli alberi',
      'Il Bukit Teresek, la salita panoramica sopra la volta della foresta',
      'Le rapide di Lata Berkoh, risalite in barca',
      'Un villaggio orang asli, le comunità indigene della penisola, con dimostrazione di cerbottana',
      'Le grotte di Gua Telinga, percorribili strisciando, per chi non teme gli spazi stretti',
    ],
    cosaFare: [
      'Camminare sulla canopy walkway al mattino presto (c\'è una scheda esperienza dedicata)',
      'Night walk guidata nella foresta, il momento in cui gli animali si vedono sul serio',
      'Risalita del fiume in barca lunga fino alle rapide',
      'Trekking di più giorni verso gli hide, le postazioni di avvistamento dove si dorme in attesa della fauna',
    ],
    doveDormire:
      'Kuala Tahan, il villaggio sulla riva opposta all\'ingresso del parco, ha le sistemazioni economiche e i ristoranti galleggianti; dentro il parco c\'è il resort ufficiale, più caro ma con il vantaggio di essere già dalla parte giusta del fiume al mattino.',
    doveMangiare:
      'A Kuala Tahan si mangia nei ristoranti galleggianti ormeggiati sul fiume, che servono cucina malese semplice a prezzi bassi con la corrente che passa sotto i tavoli. Dentro il parco l\'offerta è limitata e cara. Per i trekking lunghi si porta tutto da fuori: acqua compresa, perché lungo i sentieri non c\'è nulla.',
    comeArrivare:
      'Minibus da Kuala Lumpur fino a Kuala Tembeling o a Jerantut, poi barca lunga sul fiume Tembeling: la traversata è la parte più bella del trasferimento. Molti operatori offrono il pacchetto combinato dalla capitale.',
    comeSpostarsi: 'A piedi nel parco e in barca sul fiume: non ci sono strade. Per attraversare da Kuala Tahan all\'ingresso ci sono barchette frequenti ed economiche.',
    periodoMigliore:
      'la finestra più asciutta è a metà anno. A fine anno le piogge sono forti e alcune attività vengono sospese; il livello del fiume condiziona le risalite in barca.',
    costi: "per entrare nel parco serve il permesso del Dipartimento della fauna e dei parchi (spesso incluso nei pacchetti); canopy walkway ed escursioni guidate si pagano a parte, con prezzi variabili secondo la durata.",
    erroriDaEvitare: [
      'Aspettarsi di vedere tigri, elefanti o tapiri: ci sono, ma gli avvistamenti sono rarissimi e chi arriva con quell\'idea torna deluso. Qui si sente più di quanto si veda',
      'Andare senza calze antisanguisughe nella stagione umida: le sanguisughe terrestri sono numerose e arrivano dal basso',
      'Fare la canopy walkway a metà giornata, quando c\'è coda sulle passerelle e si passa uno alla volta',
      'Sottovalutare la night walk: è il momento in cui la foresta si anima, e quasi tutti la saltano per stanchezza',
    ],
    miaEsperienza:
      'Taman Negara va affrontata con l\'aspettativa giusta, perché è la tappa che delude chi arriva pensando a un documentario. La foresta pluviale è densissima e di lato si vede a pochi metri: si sentono cicale, gibboni lontani, uccelli, ma di animali grandi non si vede quasi niente. A renderla memorabile sono la traversata in barca lunga per arrivarci, due ore e mezza controcorrente tra due muri di verde, e la canopy walkway, il solo modo di guardare la foresta dall\'alto e capirne la struttura a strati. Va fatta all\'apertura, perché più tardi si passa uno per volta con la coda dietro. La night walk è la parte che quasi tutti saltano, ed è quella che vale: con la torcia si vedono ragni, serpenti, occhi che riflettono nel buio, e la foresta di giorno silenziosa diventa rumorosissima. Un\'ultima cosa pratica: le sanguisughe ci sono e salgono dai piedi, e le calze apposite non sono un eccesso di zelo.',
    luoghi: [
      {
        nome: "Canopy walkway",
        testo: "Una passerella sospesa tra le chiome degli alberi. È il solo modo di guardare la foresta dall'alto e di capirne la struttura a strati.",
        come: "A piedi dal villaggio di Kuala Tahan, lungo un sentiero nella foresta. Il permesso si compra al centro visitatori; si passa pochi alla volta.",
        quando: "All'apertura: più tardi si va con la coda dietro.",
        tempo: "2-3 ore",
        consiglio: "Andare all'apertura per avere la passerella quasi libera."
      },
      {
        nome: "Bukit Teresek",
        testo: "Una salita ripida sopra la volta della foresta, con gradini e radici. In cima si vede la distesa verde e il fiume.",
        come: "A piedi da Kuala Tahan, dallo stesso sentiero della canopy walkway, con un tratto in più.",
        quando: "Al mattino presto, per il fresco.",
        tempo: "2 ore",
        consiglio: "Portare acqua e calze alte per le sanguisughe."
      },
      {
        nome: "Lata Berkoh",
        testo: "Rapide a monte del villaggio, raggiungibili risalendo il fiume in barca lunga. Il percorso in barca, controcorrente tra due pareti di foresta, è già parte della visita.",
        come: "Con barca lunga dal villaggio, a orari concordati con gli operatori. Il livello del fiume decide se si può andare.",
        quando: "Al mattino. Nella stagione delle piogge le uscite si fermano.",
        tempo: "mezza giornata",
        consiglio: "Chiedere a più operatori se l'uscita è confermata prima di prenotare."
      },
      {
        nome: "Night walk",
        testo: "Una camminata notturna con guida e torcia nella foresta: ragni, insetti, serpenti e rane, e con fortuna qualche mammifero. È il momento in cui la foresta si anima.",
        come: "Con una guida del parco o di un operatore autorizzato, dal villaggio.",
        quando: "Dopo il tramonto, per un paio d'ore.",
        tempo: "2 ore",
        consiglio: "È la parte che quasi tutti saltano per stanchezza ed è quella che vale."
      },
      {
        nome: "Villaggio Orang Asli e Gua Telinga",
        testo: "Le comunità indigene della penisola vivono ancora nella zona; una visita con dimostrazione di cerbottana è la forma più comune. Gua Telinga è una grotta da percorrere strisciando, con pipistrelli.",
        come: "Con operatori autorizzati, in barca. La visita alla grotta richiede di non soffrire gli spazi stretti.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "Scegliere un operatore che porti i soldi alla comunità e non faccia uno spettacolo."
      }
    ],
    programmi: [
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: arrivo in barca da Kuala Tembeling (circa 2 ore e mezza sul fiume), sistemazione, night walk",
          "Giorno 2: canopy walkway all'apertura, Bukit Teresek, pranzo in paese, rientro nel pomeriggio"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Come i 2 giorni, con il giorno aggiuntivo per Lata Berkoh o il villaggio Orang Asli"
        ]
      }
    ],
    zone: [
      {
        nome: "Kuala Tahan (lato villaggio)",
        perChi: "chi vuole un letto economico e ristoranti vicini",
        testo: "Guesthouse e chalet sul fiume davanti al parco, con ristoranti galleggianti. Rumoroso e semplice."
      },
      {
        nome: "Dentro il parco",
        perChi: "chi vuole stare dentro il parco",
        testo: "Resort con chalet, vicino ai sentieri. Più caro, con poche scelte di cibo."
      }
    ],
    sapori: [
      {
        nome: "Pesce di fiume alla griglia",
        testo: "Pesce del Tembeling cotto alla brace, servito nei ristoranti galleggianti di Kuala Tahan."
      },
      {
        nome: "Nasi campur",
        testo: "Riso con tanti piccoli piatti a scelta, indicati al banco. Un pasto semplice e economico."
      },
      {
        nome: "Teh tarik",
        testo: "Tè con latte condensato «tirato» da un bicchiere all'altro. Si ordina ovunque."
      },
      {
        nome: "Mee goreng",
        testo: "Noodles saltati con verdure e uovo. È il piatto che quasi sempre c'è."
      }
    ],
    attenzioni: [
      "Le sanguisughe sono numerose nella stagione umida: calze apposite e controllare le gambe a fine giornata.",
      "Non aspettarsi di vedere tigri o elefanti: gli avvistamenti sono rarissimi.",
      "Quasi nessun bancomat al villaggio: portare contanti da Kuala Lumpur o Jerantut.",
      "Nella stagione delle piogge, a fine anno, i fiumi crescono e alcune attività vengono sospese: chiedere sul posto."
    ],
    esperienzeSlugs: ['canopy-walkway-taman-negara'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'La foresta pluviale di Taman Negara vista dalla collina di Teresek, con le montagne all\'orizzonte',
    immagine: '/images/malesia/taman-negara.jpg',
  },
  {
    slug: 'langkawi',
    paeseSlug: 'malesia',
    ordine: 6,
    nome: 'Langkawi',
    tipologia: ['mare', 'isole', 'natura'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un arcipelago di molte isole nel nord dello Stretto di Malacca, a ridosso del confine thailandese: spiagge, mangrovie, un geoparco UNESCO di formazioni calcaree e una funivia ripidissima che sale su una cresta con un ponte sospeso in curva.',
    percheAndarci:
      'È un\'isola della costa ovest raggiungibile senza complicazioni, funziona anche nella stagione in cui le Perhentian chiudono, e il giro in barca tra le mangrovie mostra una Malesia diversa da quella delle spiagge.',
    cosaVedere: [
      'Lo Sky Bridge, il ponte pedonale curvo sospeso sopra la foresta, raggiunto dalla funivia di Machinchang',
      'Il geoparco delle mangrovie di Kilim, con le formazioni calcaree e le grotte',
      'La spiaggia attrezzata di Pantai Cenang e quelle più tranquille del nord',
    ],
    cosaFare: [
      'Giro in barca nelle mangrovie di Kilim, con le aquile di mare e le grotte calcaree',
      'Funivia e Sky Bridge, meglio al mattino prima che arrivi la foschia',
      'Island hopping tra le isole vicine',
    ],
    doveDormire:
      'Pantai Cenang per servizi, ristoranti e vita serale; la costa nord attorno a Datai e Tanjung Rhu per i resort e la vera tranquillità; Kuah per i prezzi bassi e la vicinanza al porto, ma senza spiaggia degna.',
    doveMangiare:
      'L\'isola vive di turismo e i prezzi lo riflettono, ma bastano pochi metri dalla spiaggia per rientrare negli standard malesi: i banchi dei mercati notturni sono l\'opzione migliore e più economica. Il pesce alla griglia e i curry di pesce sono la cucina naturale del posto.',
    comeArrivare:
      "L'aeroporto di Langkawi (LGK) è a 10 minuti da Pantai Cenang, con voli da Kuala Lumpur in circa un'ora, da Penang e da Singapore. I traghetti arrivano al molo di Kuah da Kuala Perlis (circa 1 ora e 15) e Kuala Kedah (circa 1 ora e 45), collegate ai treni e agli autobus della costa ovest; altri traghetti arrivano da Penang e, nella stagione secca, da Satun e Koh Lipe in Thailandia.",
    comeSpostarsi:
      'Auto o scooter a noleggio sono il mezzo giusto: l\'isola è grande, i mezzi pubblici quasi inesistenti e i taxi cari rispetto al resto del paese. Guidare è semplice e le strade sono buone.',
    periodoMigliore:
      'la stagione secca della costa ovest, intorno all\'inizio dell\'anno, con il mare più calmo. Nei mesi centrali le piogge sono più frequenti e può arrivare la foschia da incendi dall\'Indonesia.',
    costi:
      "Funivia e Sky Bridge circa 80-90 RM per i non malesi, giro in barca nelle mangrovie da dividere, Underwater World circa 60 RM; Telaga Tujuh e le spiagge gratuite; scooter a noleggio economico. Budget al giorno a persona in doppia: 30-45 € con guesthouse a Cenang e mercati notturni, 70-110 € in resort con auto a noleggio, da 250 € nei resort della costa nord.",
    erroriDaEvitare: [
      'Aspettarsi acque da cartolina thailandese: il mare di Langkawi è spesso torbido perché siamo alla foce di sistemi fluviali, e chi cerca il turchese resta deluso',
      'Salire alla funivia nel primo pomeriggio, quando la foschia copre la vista e la coda è lunga',
      'Noleggiare lo scooter senza patente internazionale e senza casco: i controlli ci sono',
      'Trattare il giro in mangrovie come una gita in barca: le guide che danno da mangiare alle aquile per attirarle sono una pratica discutibile, e va chiesto in anticipo se l\'operatore la fa',
    ],
    miaEsperienza:
      'Langkawi è l\'isola comoda della Malesia e va presa per quello: si arriva in volo, si noleggia uno scooter e si gira liberamente. Sul mare bisogna abbassare le aspettative. L\'acqua è spesso verdastra e torbida, perché siamo nello stretto e i fiumi ci scaricano dentro: chi cerca il turchese delle cartoline sta guardando la costa sbagliata della Malesia. A sorpresa, a dare senso alla sosta è la parte non balneare: il giro tra le mangrovie di Kilim, con le pareti calcaree che si chiudono sopra la barca, le grotte dei pipistrelli e i granchi sui fanghi, è più interessante di qualsiasi spiaggia dell\'isola. Lo Sky Bridge merita la salita a patto di farla presto: verso mezzogiorno la foschia si mangia tutto e resta la coda. E c\'è il dettaglio pratico che nessuno anticipa: Langkawi è porto franco, quindi l\'alcol costa un terzo che nel resto del paese, e si nota subito in che modo cambia l\'atmosfera serale rispetto al resto della Malesia.',
    luoghi: [
      {
        nome: "Langkawi Sky Bridge e funivia",
        testo: "La funivia sale verso la cima del Gunung Mat Cincang. Da lì si scende al ponte pedonale curvo, sospeso nel vuoto a 660 metri sul livello del mare, con vista su mare, isole e foresta.",
        come: "Dalla stazione base si prende la funivia fino alla stazione alta, poi l'ascensore inclinato SkyGlide o un sentiero porta al ponte.",
        quando: "Al mattino, quando la foschia è minore e le code più corte.",
        tempo: "3 ore",
        costo: "funivia e Sky Bridge circa 80-90 RM per i non malesi (circa 16-18 €, prezzi dei rivenditori 2026)",
        orari: "SkyCab di solito 9.30-18; alcuni mercoledì apre solo dalle 12 per manutenzione. Quando la funivia è chiusa lo sono anche Sky Bridge e SkyGlide (calendario ufficiale, novembre-dicembre 2026).",
        url: "https://www.panoramalangkawi.com/",
        lat: 6.37136,
        lng: 99.6716,
        consiglio: "Salire all'apertura: verso mezzogiorno la foschia copre la vista.",
      },
      {
        nome: "Telaga Tujuh (Seven Wells)",
        testo: "Una serie di pozze naturali nella roccia, in cima a una cascata di circa 90 metri, nella foresta sopra Oriental Village. Acqua fresca per un bagno dopo la salita.",
        come: "A circa 1,5 km a nord di Oriental Village, la base della funivia: in scooter o auto fino al parcheggio, poi a piedi.",
        quando: "Al mattino presto.",
        tempo: "1 ora e mezza",
        costo: "gratuito",
        lat: 6.38178,
        lng: 99.67288,
        consiglio: "Si abbina alla funivia nella stessa mattinata. Scarpe adatte: le rocce bagnate sono scivolose.",
      },
      {
        nome: "Mangrovie di Kilim",
        testo: "Fanno parte del geoparco UNESCO di Langkawi: pareti calcaree, grotte di pipistrelli, scimmie e granchi nei fanghi. Si visita in barca.",
        come: "In barca con operatori, dall'imbarcadero di Kilim. Il giro dura qualche ora.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        lat: 6.405,
        lng: 99.85843,
        consiglio: "Chiedere in anticipo se l'operatore dà da mangiare alle aquile: è una pratica discutibile.",
      },
      {
        nome: "Pantai Cenang",
        testo: "Una spiaggia attrezzata, con bar, ristoranti e negozi. Mare spesso torbido, ma tramonto bello.",
        come: "In scooter o taxi dall'aeroporto, che è vicino.",
        quando: "Il tramonto.",
        tempo: "2 ore",
        costo: "gratuito",
        lat: 6.29576,
        lng: 99.72239,
        consiglio: "Chi cerca il mare turchese deve andare alle Perhentian: qui c'è la vita da spiaggia.",
      },
      {
        nome: "Tanjung Rhu",
        testo: "La spiaggia più bella dell'isola, sulla costa nord: sabbia chiara, casuarine e isolotti calcarei davanti, con l'acqua spesso più limpida che a Cenang. Con la bassa marea si cammina fino a un isolotto.",
        come: "In auto o scooter, circa 40 minuti da Cenang.",
        quando: "Al tramonto, o con la bassa marea per arrivare all'isolotto.",
        tempo: "mezza giornata",
        costo: "gratuito",
        lat: 6.45851,
        lng: 99.82543,
      },
      {
        nome: "Dataran Lang",
        testo: "La piazza sul porto di Kuah con l'aquila rossa e bruna alta 12 metri, simbolo dell'isola: secondo la leggenda il nome Langkawi viene da helang, aquila, e kawi, il colore bruno-rossastro.",
        come: "A piedi dal molo dei traghetti di Kuah.",
        quando: "Al tramonto, o arrivando in traghetto.",
        tempo: "30 minuti",
        costo: "gratuito",
        lat: 6.30846,
        lng: 99.85196,
      },
      {
        nome: "Underwater World",
        testo: "Il grande acquario di Pantai Cenang, con un tunnel sotto la vasca degli squali, pinguini e una sezione sulle mangrovie e la foresta pluviale. Utile con i bambini o nei pomeriggi di pioggia.",
        come: "A piedi sulla strada principale di Pantai Cenang.",
        quando: "Nelle ore calde o con la pioggia.",
        tempo: "2 ore",
        costo: "circa 60 RM per i non malesi (circa 12 €, prezzi dei rivenditori 2026)",
        orari: "Di solito 10-18, più a lungo nei festivi.",
        lat: 6.28772,
        lng: 99.72859,
      },
      {
        nome: "Pulau Dayang Bunting",
        testo: "La seconda isola dell'arcipelago, nel geoparco, con il lago della Fanciulla Incinta, un lago d'acqua dolce tra pareti calcaree separato dal mare da una sottile cresta. Ci si fa il bagno, tra pesci e scimmie sulla riva.",
        come: "Con i giri in barca tra le isole da Pantai Cenang o da Kuah, che fanno tappa anche a Pulau Beras Basah e al punto delle aquile.",
        quando: "Al mattino, con il mare calmo.",
        tempo: "mezza giornata con il giro delle isole",
        lat: 6.23222,
        lng: 99.79972,
        consiglio: "Tenere borse e cibo chiusi: le scimmie sul molo rubano.",
      },
      {
        nome: "Gunung Raya",
        testo: "La montagna più alta di Langkawi, circa 880 metri, con una strada che sale tra la foresta fino a una torre panoramica. Dalla cima si vede tutto l'arcipelago e, con l'aria limpida, la costa thailandese.",
        come: "In auto o scooter, strada asfaltata ripida fino in cima.",
        quando: "Al mattino presto: lungo la strada si vedono buceri e scimmie.",
        tempo: "2 ore",
        lat: 6.36882,
        lng: 99.81831,
        consiglio: "Con le nuvole basse non si vede niente: meglio un giorno sereno.",
      },
      {
        nome: "La tomba di Mahsuri",
        testo: "Il mausoleo di Mahsuri, la donna giustiziata ingiustamente nel Settecento che, secondo la leggenda, maledisse l'isola per sette generazioni. Intorno c'è un piccolo villaggio tradizionale malese con case di legno.",
        come: "A circa 12 km da Cenang, in auto o scooter.",
        quando: "Di giorno.",
        tempo: "1 ora",
        lat: 6.33874,
        lng: 99.78399,
      },
      {
        nome: "La cascata di Durian Perangin",
        testo: "Una cascata a gradini nella foresta del nord dell'isola, con pozze dove fare il bagno, meno frequentata di Telaga Tujuh. Si sale per una scalinata nel bosco.",
        come: "In auto o scooter, circa 15 km da Kuah verso nord.",
        quando: "Dopo le piogge, quando ha più acqua; nella stagione secca può essere quasi asciutta.",
        tempo: "1-2 ore",
        costo: "gratuito",
        lat: 6.40171,
        lng: 99.82054,
      },
      {
        nome: "Laman Padi",
        testo: "Un piccolo museo del riso con risaie dimostrative a Pantai Cenang, dove si vede come si coltiva il riso nella pianura di Langkawi e si mangia in un ristorante che affaccia sui campi.",
        come: "Sulla strada principale di Pantai Cenang, a piedi.",
        quando: "Al tramonto, con la luce sulle risaie.",
        tempo: "1 ora",
        lat: 6.29858,
        lng: 99.72239,
      },
      {
        nome: "Pantai Kok",
        testo: "Una baia sulla costa ovest, sotto le montagne della funivia, con acqua più verde e calma, resort e lo yacht club di Telaga. È la spiaggia da abbinare alla funivia e a Telaga Tujuh.",
        come: "In auto o scooter, circa 15 minuti da Cenang.",
        quando: "Pomeriggio, dopo la funivia.",
        tempo: "2 ore",
        costo: "gratuito",
        lat: 6.36639,
        lng: 99.67778,
      },
      {
        nome: "Il mercato notturno",
        testo: "Ogni sera si tiene un pasar malam in un paese diverso dell'isola, con banchi di satay, pesce alla griglia, murtabak e dolci malesi. Quello di Pantai Cenang è tra i più comodi per chi dorme in spiaggia.",
        come: "A piedi o in scooter; il giorno e il luogo cambiano: chiedere in hotel.",
        quando: "Dal tardo pomeriggio fino alle 22 circa.",
        tempo: "1-2 ore",
        lat: 6.29914,
        lng: 99.72753,
        consiglio: "È il posto dove si mangia meglio e spendendo meno.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Funivia e Sky Bridge all'apertura",
          "Telaga Tujuh e Pantai Kok",
          "Pomeriggio a Laman Padi",
          "Tramonto a Pantai Cenang e mercato notturno",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: il giorno sopra",
          "Giorno 2: mangrovie di Kilim al mattino",
          "Pomeriggio a Tanjung Rhu",
          "Cena a Kuah e Dataran Lang al tramonto",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: giro delle isole con Dayang Bunting al mattino",
          "Pomeriggio: Gunung Raya o Durian Perangin",
          "Tomba di Mahsuri sulla via del ritorno",
        ],
      },
    ],
    zone: [
      {
        nome: "Pantai Cenang",
        perChi: "chi vuole spiaggia, bar e cena fuori",
        testo: "La zona più animata, con molta scelta. Rumorosa e affollata.",
        fascia: "40-150 €",
      },
      {
        nome: "Pantai Tengah",
        perChi: "chi cerca un po' di calma",
        testo: "Accanto a Cenang, più tranquilla, con resort e guesthouse.",
        fascia: "50-200 €",
      },
      {
        nome: "Kuah",
        perChi: "chi arriva in traghetto o vuole risparmiare",
        testo: "Il capoluogo, con il porto e i prezzi più bassi, ma lontano dalle spiagge.",
        fascia: "25-60 €",
      },
      {
        nome: "Tanjung Rhu e Datai",
        perChi: "chi cerca resort e tranquillità",
        testo: "I grandi resort della costa nord, tra foresta e spiagge chiare, lontani da tutto: serve l'auto o il taxi per ogni uscita.",
        fascia: "200-600 €",
      },
    ],
    sapori: [
      {
        nome: "Pesce alla griglia",
        testo: "Pesce fresco cotto alla brace con sambal, nei ristoranti sul mare."
      },
      {
        nome: "Laksa di Langkawi",
        testo: "Noodles in brodo di pesce speziato. Si trova nei banchi di strada."
      },
      {
        nome: "Prodotti in zona franca",
        testo: "Langkawi è un'isola duty free: cioccolato, alcolici e profumi costano meno che sulla terraferma."
      },
      {
        nome: "Nasi lemak",
        testo: "Riso al cocco con acciughe fritte, uovo e sambal. La colazione nazionale."
      }
    ],
    attenzioni: [
      "Mare spesso torbido: chi cerca acqua turchese resta deluso, meglio puntare alle mangrovie e alle escursioni.",
      "Scooter: patente internazionale e casco, i controlli esistono.",
      "Aquile e scimmie nelle mangrovie: non dare da mangiare e chiedere all'operatore se lo fa.",
      "Nei mesi secchi può arrivare la foschia degli incendi dall'Indonesia: controllare le notizie."
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Langkawi?",
        risposta: "Tre giorni: uno per la funivia e la costa ovest, uno per le mangrovie di Kilim e Tanjung Rhu, uno per il giro delle isole e un po' di spiaggia.",
      },
      {
        domanda: "Il mare di Langkawi è bello?",
        risposta: "È spesso verdastro e torbido, per la vicinanza dei fiumi dello Stretto di Malacca. Le spiagge migliori sono Tanjung Rhu e quelle del nord; per il turchese si va alle Perhentian o a Koh Lipe.",
      },
      {
        domanda: "Serve noleggiare l'auto a Langkawi?",
        risposta: "Sì, o uno scooter: l'isola è grande e i mezzi pubblici quasi non esistono. Le strade sono buone; serve la patente internazionale.",
      },
      {
        domanda: "A che ora apre la funivia?",
        risposta: "Di solito alle 9.30, fino alle 18; alcuni mercoledì apre dalle 12 per la manutenzione. Il calendario aggiornato è sul sito ufficiale di Panorama Langkawi.",
      },
      {
        domanda: "Quando andare a Langkawi?",
        risposta: "Da novembre ad aprile, con il mare più calmo e meno pioggia. Da maggio a ottobre piove più spesso e può arrivare la foschia degli incendi dall'Indonesia.",
      },
      {
        domanda: "Langkawi è davvero duty free?",
        risposta: "Sì: alcol, cioccolato e tabacco costano meno che sulla terraferma. Uscendo dall'isola ci sono limiti alle quantità che si possono portare.",
      },
    ],
    gite: [
      {
        nome: "Il giro delle isole",
        distanza: "mezza giornata in barca",
        come: "Con gli operatori di Pantai Cenang o Kuah, in gruppo o in barca privata.",
        testo: "Pulau Dayang Bunting con il suo lago, Pulau Beras Basah per il bagno e il punto delle aquile. Conviene chiedere se l'operatore dà da mangiare alle aquile e sceglierne uno che non lo fa.",
      },
      {
        nome: "Koh Lipe",
        distanza: "circa 1,5 ore di traghetto",
        come: "Traghetto veloce da Pantai Cenang o da Kuah, nella stagione secca; si passa la frontiera thailandese con il passaporto.",
        testo: "L'isola thailandese con il mare limpido che a Langkawi manca. Si va per almeno una notte, non in giornata.",
      },
      {
        nome: "Penang",
        distanza: "circa 3 ore di traghetto",
        come: "Traghetto da Kuah a George Town, oppure volo di 30 minuti.",
        testo: "George Town, con il centro storico UNESCO e il cibo di strada: la tappa successiva naturale.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Lo Sky Bridge di Langkawi sospeso tra le montagne coperte di foresta',
    immagine: '/images/malesia/langkawi.jpg',
  },
  {
    slug: 'perhentian',
    paeseSlug: 'malesia',
    ordine: 7,
    nome: 'Isole Perhentian',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Due isole sulla costa est, nel Mar Cinese Meridionale: sabbia bianca, acqua turchese vera, tartarughe che si incontrano facendo snorkeling dalla riva e nessuna strada, perché non ci sono veicoli. Chiudono quasi del tutto quando arriva il monsone di nord-est, tra fine e inizio anno.',
    percheAndarci:
      'Sono la risposta alla domanda su dove sia il mare bello in Malesia (sulla costa est, non su quella ovest), e lo sviluppo è ancora basso: si dorme in chalet, si mangia sulla spiaggia e la sera l\'elettricità in certi posti va a generatore.',
    cosaVedere: [
      'Perhentian Besar, la più grande, più tranquilla e con le spiagge migliori',
      'Perhentian Kecil, la piccola, con Long Beach e la vita serale',
      'I reef raggiungibili in snorkeling',
      'Le cale accessibili solo via mare',
    ],
    cosaFare: [
      'Snorkeling con le tartarughe, che qui si vedono partendo dalla spiaggia senza barca né guida',
      'Corso o immersioni: le Perhentian sono un posto economico dove prendere un brevetto',
      'Giro in barca attorno alle due isole con soste nei punti di snorkeling',
      'Percorrere il sentiero nella giungla tra le spiagge, l\'unico collegamento via terra',
    ],
    doveDormire:
      'Besar per le famiglie e chi cerca calma, Kecil e Long Beach per il ritmo più sociale e i prezzi bassi. Le sistemazioni sono semplici: chalet in legno, aria condizionata non sempre, e in alcune strutture l\'elettricità funziona a fasce orarie.',
    doveMangiare:
      'Si mangia nei ristoranti dei chalet e nei barbecue serali sulla spiaggia, dove il pesce viene esposto sul ghiaccio e grigliato al momento: è la cena tipica e costa poco. L\'offerta è limitata e ripetitiva (nasi goreng, mie goreng, pesce, curry) e va accettata come parte del pacchetto. Da sapere: siamo in uno stato conservatore, l\'alcol si trova poco ed è caro, e alcune strutture non lo servono affatto.',
    comeArrivare:
      'Volo su Kota Bharu o autobus notturno da Kuala Lumpur fino a Kuala Besut, poi speedboat. La traversata è veloce ma movimentata: chi soffre il mare lo sente.',
    comeSpostarsi: 'Solo a piedi e in water taxi: sulle isole non ci sono strade né veicoli. I trasferimenti tra spiagge si fanno in barca, per pochi ringgit.',
    periodoMigliore:
      'i mesi fuori monsone, nella parte centrale dell\'anno. **Tra fine e inizio anno le isole chiudono quasi completamente** per il monsone di nord-est: le strutture serrano e i traghetti si fermano. È una chiusura vera e propria, più che una bassa stagione.',
    costi:
      "chalet semplici a prezzi bassi, speedboat andata e ritorno da Kuala Besut; immersioni a prezzi bassi.",
    erroriDaEvitare: [
      'Programmarle nei mesi del monsone di nord-est: sono chiuse, ed è l\'errore che manda a monte interi itinerari',
      'Contare sui pagamenti con carta: sulle isole si funziona quasi solo a contante e i bancomat sono pochissimi e spesso vuoti: si preleva sulla terraferma',
      'Aspettarsi resort e servizi: qui si dorme in chalet e la corrente può andare a orari',
      'Sottovalutare il codice sociale del Terengganu: è uno stato conservatore, e fuori dalle spiagge l\'abbigliamento coperto è la norma attesa',
    ],
    miaEsperienza:
      'Per le Perhentian vale la pena riorganizzare un itinerario in Malesia: è l\'unica costa dove il mare è quello delle fotografie, turchese e trasparente, e basta entrare in acqua dalla spiaggia per incrociare una tartaruga che bruca sul fondo senza farsi nessun problema. È anche un posto rimasto indietro di proposito: chalet di legno, ventilatore invece dell\'aria condizionata, elettricità a fasce, niente bancomat funzionante e cene che dopo tre giorni si ripetono. Chi lo sa in anticipo se lo gode, chi si aspetta un resort no. La cosa da mettere in agenda prima di qualsiasi altra è il calendario: da novembre a febbraio il monsone di nord-est chiude le isole, i traghetti si fermano e le strutture serrano. Più che bassa stagione, è chiuso: è l\'errore che fa saltare più itinerari malesi di qualsiasi altro.',
    luoghi: [
      {
        nome: "Perhentian Besar",
        testo: "L'isola grande, più tranquilla, con le spiagge migliori e meno locali serali. Il posto per chi vuole mare e silenzio.",
        come: "In speedboat dal molo di Kuala Besut.",
        quando: "Nei mesi fuori monsone. Con il monsone di nord-est quasi tutti i resort e i traghetti si fermano.",
        tempo: "almeno 2 notti",
        costo: "Tassa di conservazione del parco marino: 30 RM per gli stranieri (2022), da pagare all'ufficio del molo di Kuala Besut.",
        consiglio: "Prenotare chalet e barca in anticipo in alta stagione."
      },
      {
        nome: "Perhentian Kecil e Long Beach",
        testo: "L'isola piccola, con la spiaggia più animata (Long Beach), i bar sulla sabbia e la vita serale. Dall'altra parte, Coral Bay, più tranquilla.",
        come: "Speedboat da Kuala Besut; tra le spiagge con taxi-barca.",
        quando: "Nei mesi fuori monsone.",
        tempo: "almeno 2 notti",
        consiglio: "Chi cerca silenzio deve andare a Coral Bay o a Besar."
      },
      {
        nome: "Snorkeling sul reef",
        testo: "Punti di snorkeling dove si possono incontrare squali pinna nera di scogliera e tartarughe. In alcuni punti si entra direttamente dalla spiaggia.",
        come: "In barca con gli operatori di snorkeling, mezza giornata.",
        quando: "Al mattino, con l'acqua più limpida.",
        tempo: "mezza giornata",
        consiglio: "Non toccare né inseguire le tartarughe: si guardano senza avvicinarsi."
      },
      {
        nome: "Cale raggiungibili solo via mare",
        testo: "Cale accessibili solo in barca o con sentieri brevi, con acqua trasparente e pochissima gente.",
        come: "Con taxi-barca da Kecil, o a piedi attraverso la foresta con sentiero segnato.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "Portare contanti per il taxi-barca: sulle isole i bancomat sono pochissimi."
      }
    ],
    programmi: [
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: arrivo, chalet, spiaggia e tramonto",
          "Giorno 2: giro di snorkeling sul reef",
          "Giorno 3: cale raggiungibili via mare e ritorno in barca"
        ]
      },
      {
        titolo: "4 giorni",
        tappe: [
          "Come i 3 giorni, con il quarto per una immersione o una giornata libera sulla spiaggia"
        ]
      }
    ],
    zone: [
      {
        nome: "Long Beach (Kecil)",
        perChi: "chi vuole vita serale e comodità",
        testo: "Chalet semplici, bar, ristoranti, immersioni. Più rumorosa."
      },
      {
        nome: "Coral Bay (Kecil)",
        perChi: "chi vuole tramonti e un po' di calma",
        testo: "Sul lato ovest di Kecil, con bar sulla spiaggia e poca gente."
      },
      {
        nome: "Perhentian Besar",
        perChi: "chi vuole il mare migliore e il silenzio",
        testo: "Pochi resort e chalet, qualche ristorante. Elettricità a orari."
      }
    ],
    sapori: [
      {
        nome: "Pesce alla griglia",
        testo: "Pescato del giorno cotto alla brace con riso e verdure, nei piccoli ristoranti sulla spiaggia."
      },
      {
        nome: "Nasi goreng",
        testo: "Riso saltato con uovo e verdure. Quasi sempre disponibile."
      },
      {
        nome: "Roti canai",
        testo: "Pane piatto servito con curry. Una colazione di base."
      },
      {
        nome: "Frutta fresca e acqua di cocco",
        testo: "Cocco e frutta tropicale, venduti sulla spiaggia."
      }
    ],
    attenzioni: [
      "Con il monsone di nord-est, tra fine e inizio anno, quasi tutti i resort e i traghetti chiudono: controllare le date prima di prenotare.",
      "Contanti: pochi bancomat e spesso vuoti, si preleva sulla terraferma.",
      "Terengganu è uno stato conservatore: lontano dalle spiagge, vestirsi in modo coperto.",
      "Corrente elettrica a orari e niente aria condizionata in molti chalet."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Una spiaggia di sabbia bianca e mare turchese ai piedi della giungla a Perhentian Kecil',
    immagine: '/images/malesia/perhentian.jpg',
  },
]
