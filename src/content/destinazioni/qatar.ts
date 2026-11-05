import type { Destinazione } from '@/lib/types'

// Nessun nome di hotel, ristorante o operatore è stato inventato. Prezzi e
// condizioni del programma stopover di Qatar Airways cambiano spesso: vanno
// riverificati sul portale ufficiale.

export const destinazioniQatar: Destinazione[] = [
  {
    slug: 'doha',
    paeseSlug: 'qatar',
    ordine: 1,
    nome: 'Doha',
    tipologia: ['città', 'musei', 'stopover'],
    giorniConsigliati: '12-24 ore per lo stopover essenziale, 2 giorni per farla bene',
    visitataPersonalmente: true,
    introduzione:
      'Quindici anni fa questa capitale non aveva quasi nulla da mostrare. Oggi ha il Museo di Arte Islamica di I.M. Pei su un\'isola artificiale, il Museo Nazionale di Jean Nouvel a forma di rosa del deserto e un souq restaurato che, a differenza di molti nella regione, è rimasto un mercato vero e non è diventato una scenografia.',
    percheAndarci:
      'Il programma stopover di Qatar Airways rende la sosta quasi gratuita, e Doha è la città del Golfo che si visita meglio in poco tempo: la metropolitana collega aeroporto, souq e musei, e in una giornata piena si vede tutto quello che conta.',
    cosaVedere: [
      'Il Museo di Arte Islamica, progettato da I.M. Pei a novant\'anni, su un\'isola artificiale davanti alla Corniche',
      'Il Museo Nazionale del Qatar di Jean Nouvel, con i dischi intersecati ispirati alla rosa del deserto',
      'Il Souq Waqif, restaurato ma ancora funzionante, con il mercato dei falchi e il loro ospedale',
      'La Corniche, sette chilometri di lungomare con lo skyline di West Bay di fronte',
      'Msheireb Downtown, il quartiere ricostruito con i suoi musei sulla schiavitù e sulla storia del petrolio',
      'Il Katara Cultural Village e le installazioni di Richard Serra nel deserto',
    ],
    cosaFare: [
      'Souq Waqif la sera, quando apre il mercato dei falchi (vedi la scheda esperienza dedicata)',
      'Museo di Arte Islamica al tramonto, con la vista sullo skyline dalla scalinata',
      'Giro in dhow sulla baia, le barche di legno tradizionali, per pochi riyal',
      'Escursione all\'inland sea di Khor Al Adaid, dove il mare entra nel deserto (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Con il programma stopover di Qatar Airways si sceglie tra le strutture convenzionate a prezzi simbolici, ed è quasi sempre la scelta giusta. Fuori dal programma, la zona di West Bay è comoda per la metropolitana, quella attorno al Souq Waqif per l\'atmosfera.',
    doveMangiare:
      'Il Souq Waqif è la zona della città con più ristoranti, di cucina levantina, iraniana e qatariota, per tutte le tasche. Da provare il machboos, la carne speziata con il riso, e il karak chai ai chioschi: il tè al latte speziato che qui si beve a tutte le ore e costa pochi centesimi. Per spendere poco, nei quartieri dove vivono i lavoratori del subcontinente indiano ci sono ristoranti ottimi ed economici.',
    comeArrivare:
      'Volo su Hamad International (DOH), hub di Qatar Airways e uno degli aeroporti migliori al mondo, collegato al centro dalla metropolitana in circa venti minuti.',
    comeSpostarsi:
      'Metropolitana recente, economica e climatizzata, che copre tutto quello che serve; per il resto Karwa Taxi e Uber. Camminare sulla Corniche è piacevole solo da novembre a marzo.',
    periodoMigliore:
      'da novembre a marzo. Tra giugno e settembre si superano i 45 gradi con umidità altissima, e uno stopover estivo si riduce a musei e centri commerciali.',
    costi:
      'Museo di Arte Islamica e Museo Nazionale hanno biglietti contenuti; il Souq Waqif è gratuito; la metropolitana costa pochi riyal. Con il programma stopover l\'hotel parte da cifre simboliche.',
    erroriDaEvitare: [
      'Non prenotare lo stopover sul portale dedicato: si prenota separatamente dal volo, usando il codice di prenotazione, e molti non sanno che esiste',
      'Programmarlo in estate, quando stare all\'aperto è impraticabile',
      'Fermarsi solo a West Bay e ai centri commerciali: sono il souq e i musei a valere la discesa dall\'aereo',
      'Sottovalutare le regole sull\'abbigliamento: qui sono più conservative che a Dubai, con spalle e ginocchia coperte attese in pubblico per tutti',
    ],
    confronti: [
      {
        titolo: 'Quanto fermarsi a Doha',
        introduzione:
          'Doha è una delle poche città al mondo che funzionano sia in dodici ore sia in tre giorni: per questo conviene scegliere la durata della sosta invece di subire lo scalo. Le tre formule danno risultati molto diversi.',
        opzioni: [
          {
            nome: 'Scalo breve, 6-10 ore senza uscire',
            sintesi: 'Restare dentro Hamad International, che è regolarmente tra i migliori aeroporti del mondo.',
            costo: 'nulla',
            durata: '6-10 ore',
            pro: ['Nessun rischio di perdere il volo', 'L\'aeroporto ha giardini interni, una piscina, aree relax e ristoranti seri', 'Nessuna pratica'],
            contro: ['Non si vede il paese', 'Dieci ore in aeroporto restano dieci ore in aeroporto'],
            perChi: 'Chi ha bagagli da riconsegnare, coincidenze strette o non vuole complicazioni.',
          },
          {
            nome: 'Stopover di 12-24 ore, una notte',
            sintesi: 'Uscire, dormire una notte in città con il programma Qatar Airways e vedere l\'essenziale: souq, Corniche, un museo.',
            costo: 'da circa 14 dollari a persona a notte in quattro stelle con il programma',
            durata: 'una notte',
            pro: [
              'Il miglior rapporto tra costo e resa: a queste cifre non fermarsi è quasi una scelta contro i propri interessi',
              'Visto all\'arrivo gratuito per gli italiani, nessuna pratica preventiva',
              'Souq Waqif la sera e un museo la mattina dopo coprono l\'essenziale',
              'Metropolitana dall\'aeroporto: si è in città in venti minuti',
            ],
            contro: ['Si dorme poco, tra arrivo notturno e partenza', 'Non si esce dalla città', 'Va prenotato sul portale dedicato, separatamente dal volo'],
            perChi: 'Quasi chiunque voli con Qatar Airways e abbia uno scalo di più di dodici ore.',
          },
          {
            nome: 'Sosta di 2-3 giorni',
            sintesi: 'Doha con calma più l\'inland sea di Khor Al Adaid e il nord del paese, con le installazioni di Richard Serra nel deserto.',
            costo: 'fino a 4 notti con il programma stopover, a tariffe comunque basse',
            durata: '2-3 giorni',
            pro: [
              'Si esce dalla città, che è la parte che quasi nessuno fa',
              'Khor Al Adaid, dove il mare entra nel deserto, è uno dei pochi posti al mondo fatti così',
              'In tre giorni il Qatar si vede tutto: è più piccolo dell\'Abruzzo',
            ],
            contro: ['Oltre i quattro giorni il paese finisce', 'Per il deserto e il nord servono un 4x4 o un tour', 'Ai costi dell\'hotel si sommano quelli dei trasferimenti fuori città'],
            perChi: 'Chi vuole fare dello scalo una tappa vera, e chi ha già visto Doha città.',
          },
        ],
        raccomandazione:
          'Con uno scalo sopra le dodici ore la notte in città è la scelta ovvia: costa quanto un pranzo e ti dà una capitale intera. Con due giorni si aggiunge Khor Al Adaid, la cosa più insolita del paese. Oltre i quattro giorni conviene usare il Qatar come trampolino verso un\'altra tappa del Golfo, perché qui le cose da vedere finiscono.',
      },
    ],
    miaEsperienza:
      'Doha è la città del Golfo che rende di più rispetto al tempo che le dedichi, per un motivo quasi banale: è piccola, la metropolitana funziona e le due cose che vale la pena vedere sono vicine. La migliore è il Museo di Arte Islamica. Pei lo progettò a novant\'anni, dopo aver girato il mondo musulmano per capire cosa fosse l\'architettura islamica: è un edificio di pietra calcarea su un\'isola artificiale, dove la luce entra dall\'alto da una cupola nascosta. Dalla scalinata esterna, al tramonto, si guarda lo skyline di West Bay dall\'altra parte dell\'acqua, ed è la cartolina della città. L\'altra sorpresa è il Souq Waqif, una ricostruzione che però funziona: ci si comprano ancora tessuti, spezie e falchi da caccia, e c\'è perfino un ospedale per falchi visitabile, dove gli uccelli aspettano il loro turno appollaiati con il cappuccio in testa. È il posto più strano e più qatariota della città. Con il programma stopover, tutto questo costa quanto una pizza.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Museo di Arte Islamica",
        "testo": "L'edificio di pietra calcarea progettato da I.M. Pei a novant'anni, su un'isola artificiale davanti alla Corniche. La luce entra dall'alto da una cupola nascosta. Dentro, manoscritti, ceramiche, metalli e tessuti da tutto il mondo musulmano.",
        "come": "Taxi o Uber dal centro; la metro arriva alla stazione Corniche. Si cammina nel parco.",
        "quando": "Chiuso il mercoledì. Sabato-martedì 9-19, giovedì 9-21, venerdì 13.30-19 (2026). Al tramonto, dalla scalinata esterna, si guarda lo skyline di West Bay.",
        "tempo": "2-3 ore",
        "url": "https://mia.org.qa/en/",
        "consiglio": "Salire sulla scalinata sul retro alla fine della visita: è la cartolina della città."
      },
      {
        "nome": "Souq Waqif",
        "testo": "Il mercato ricostruito nei primi anni Duemila con i materiali e le forme del vecchio souq. Funziona: si vendono ancora tessuti, spezie, incenso e falchi da caccia, e c'è un ospedale per falchi visitabile, dove gli uccelli aspettano il turno con il cappuccio in testa. La sera i vicoli e i ristoranti all'aperto si riempiono di famiglie qatariote.",
        "come": "Metro fino a Msheireb o Souq Waqif; si cammina nei vicoli.",
        "quando": "Sera, quando apre il mercato dei falchi.",
        "tempo": "2 ore",
        "consiglio": "Il posto più strano e più qatariota della città."
      },
      {
        "nome": "Museo Nazionale del Qatar",
        "testo": "L'edificio di Jean Nouvel con dischi intersecati ispirati alla rosa del deserto. Dentro, la storia del paese dal deserto alle perle al gas.",
        "come": "Metro fino a Msheireb o taxi; sta a pochi minuti dalla Corniche.",
        "quando": "Chiuso il martedì. Altri giorni 9-19, giovedì fino alle 21, venerdì dalle 13.30; ultimo ingresso 45 minuti prima della chiusura (2026). Meglio la mattina.",
        "tempo": "2 ore",
        "url": "https://nmoq.org.qa/en/visit/"
      },
      {
        "nome": "Corniche e dhow",
        "testo": "Il lungomare a mezzaluna sulla baia, con i dhow, le barche di legno tradizionali, che fanno brevi giri a pochi riyal.",
        "come": "A piedi dal Museo di Arte Islamica.",
        "quando": "Tramonto.",
        "tempo": "1 ora"
      },
      {
        "nome": "Mathaf, museo arabo d'arte moderna",
        "testo": "Il museo di Qatar Museums dedicato all'arte moderna e contemporanea del mondo arabo, in un'ex scuola nella Education City. Le mostre cambiano spesso e mettono insieme pittori iracheni, egiziani, libanesi e del Golfo che in Europa si vedono poco.",
        "come": "In taxi o Uber dal centro, circa 20 minuti; la metro verde arriva a Education City.",
        "quando": "Orari sul sito di Qatar Museums. Buono per le ore calde.",
        "tempo": "1-1,5 ore",
        "costo": "Ingresso libero per tutti, con biglietto da prenotare (2026)",
        "url": "https://qm.org.qa/tickets/select-tickets/"
      },
      {
        "nome": "Katara Cultural Village",
        "testo": "Un quartiere culturale costruito sul mare tra West Bay e The Pearl, con un anfiteatro di pietra, due moschee decorate (una dorata e una a mosaico blu), gallerie, piccionaie in fango e una spiaggia pubblica. È dove i qatarioti vengono la sera a passeggiare e a cena.",
        "come": "Taxi o metro rossa fino a Katara, poi a piedi.",
        "quando": "Sera, quando cala il caldo e si accendono le luci dell'anfiteatro.",
        "tempo": "1,5-2 ore",
        "costo": "Ingresso al quartiere libero",
        "url": "https://www.katara.net/",
        "consiglio": "Guardare il calendario degli eventi: concerti e festival si tengono spesso nell'anfiteatro."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Museo di Arte Islamica",
          "Pranzo a Souq Waqif",
          "Pomeriggio: Museo Nazionale",
          "Tramonto: Corniche e dhow, sera al souq"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra",
          "Giorno 2: escursione in 4x4 all'inland sea (vedi il deserto e il nord)"
        ]
      }
    ],
    zone: [
      {
        "nome": "Souq Waqif / Msheireb",
        "perChi": "chi vuole stare vicino a tutto",
        "testo": "Hotel boutique e catene vicino al souq e alla metro."
      },
      {
        "nome": "West Bay",
        "perChi": "chi vuole grattacieli e hotel di lusso",
        "testo": "Skyline moderno, lontano dal souq."
      },
      {
        "nome": "The Pearl",
        "perChi": "chi vuole spiaggia e ristoranti",
        "testo": "Isola artificiale con marina e locali, turistica e cara."
      }
    ],
    sapori: [
      {
        "nome": "Machboos",
        "testo": "Carne speziata con il riso, il piatto qatariota."
      },
      {
        "nome": "Karak chai",
        "testo": "Tè al latte speziato, nei chioschi a tutte le ore per pochi centesimi."
      },
      {
        "nome": "Cucina levantina e iraniana",
        "testo": "Nei ristoranti del Souq Waqif."
      },
      {
        "nome": "Cucina dei lavoratori",
        "testo": "Nei quartieri popolari si mangia bene e si spende poco."
      }
    ],
    attenzioni: [
      "Non prenotare lo stopover sul portale dedicato: si prenota separatamente dal volo con il codice di prenotazione, molti non sanno che esiste.",
      "Programmarlo in estate: stare all'aperto è impraticabile.",
      "Fermarsi solo a West Bay e ai centri commerciali: sono il souq e i musei a valere la discesa dall'aereo.",
      "Regole su abbigliamento e comportamento in pubblico: controllare i canali ufficiali."
    ],
    // GUIDA-END
    esperienzeSlugs: ['souq-waqif', 'khor-al-adaid'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: 'I grattacieli di West Bay visti dall\'acqua sotto un cielo limpido, Doha',
    immagine: '/images/qatar/doha.jpg',
  },
  {
    slug: 'qatar-deserto-nord',
    immagine: '/images/qatar/qatar-deserto-nord.jpg',
    paeseSlug: 'qatar',
    ordine: 2,
    nome: 'Il deserto e il nord del Qatar',
    tipologia: ['deserto', 'natura', 'archeologia'],
    giorniConsigliati: '1-2 giorni, come estensione da Doha',
    visitataPersonalmente: true,
    introduzione:
      'Fuori dalla capitale il Qatar è quasi vuoto. A sud c\'è Khor Al Adaid, l\'«inland sea» dove il Golfo entra nel deserto tra dune che scendono dritte in acqua. A nord ci sono il forte di Al Zubarah, patrimonio UNESCO, i villaggi di pescatori abbandonati e le quattro lastre d\'acciaio di Richard Serra piantate in mezzo al nulla.',
    percheAndarci:
      'Khor Al Adaid è un caso raro al mondo, un braccio di mare che entra in un deserto di dune vive. E il nord mostra il Qatar di prima del gas: villaggi di pescatori di perle abbandonati negli anni Settanta e lasciati com\'erano.',
    cosaVedere: [
      'Khor Al Adaid, l\'inland sea, riserva naturale dichiarata dall\'UNESCO, raggiungibile solo in 4x4',
      'Il forte di Al Zubarah, patrimonio UNESCO, e i resti della città portuale del XVIII secolo',
      'East-West/West-East di Richard Serra, quattro lastre d\'acciaio alte 14 metri nel deserto di Brouq',
      'Il villaggio abbandonato di Al Jumail, sulla costa nord',
      'Le dune di Sealine e il deserto meridionale',
    ],
    cosaFare: [
      'Escursione in 4x4 all\'inland sea, con il dune bashing e la sosta sulla riva (vedi la scheda esperienza dedicata)',
      'Giornata al nord tra Al Zubarah, Al Jumail e le installazioni di Serra',
      'Notte in campo tendato nel deserto meridionale',
      'Camminare tra le lastre di Serra al tramonto, quando l\'acciaio cambia colore',
    ],
    doveDormire:
      'Nel deserto meridionale ci sono campi tendati di vario livello, dal semplice al lussuoso; il nord non ha quasi strutture e si fa in giornata da Doha, a meno di un\'ora e mezza.',
    doveMangiare:
      'Fuori Doha c\'è pochissimo: nei campi tendati i pasti sono inclusi, nel nord non c\'è quasi nulla. Pranzo e acqua si portano da Doha, come fanno anche i qatarioti nelle loro giornate fuori città.',
    comeArrivare:
      'Khor Al Adaid è a circa un\'ora e mezza da Doha, ma **si raggiunge solo in 4x4 con un autista esperto**: gli ultimi chilometri sono sulla sabbia. Al nord si arriva con un\'auto normale su strada asfaltata, in poco più di un\'ora.',
    comeSpostarsi: 'Auto a noleggio per il nord; 4x4 con guida per il sud e per il deserto. Fuori dalla capitale non ci sono mezzi pubblici utili.',
    periodoMigliore:
      'da novembre a marzo. In estate il deserto qatariota è impraticabile, e anche le escursioni organizzate si fanno solo nei mesi freschi.',
    costi: 'escursione in 4x4 all\'inland sea indicativamente 250-500 riyal secondo la formula e la durata; Al Zubarah gratuito o quasi.',
    erroriDaEvitare: [
      'Provare ad arrivare a Khor Al Adaid con un\'auto normale: si resta impantanati, ed è un classico',
      'Fare il dune bashing subito dopo mangiato: è più movimentato di quanto sembri',
      'Andare al nord senza acqua e senza pranzo: non c\'è niente, per decine di chilometri',
      'Programmare il deserto tra giugno e settembre',
    ],
    miaEsperienza:
      'Fuori Doha il Qatar è quasi vuoto, ed è proprio per questo che conviene uscire dalla capitale. Khor Al Adaid è quello che mi è rimasto. Ci siamo arrivati in 4x4 dopo una mezz\'ora di sabbia, con l\'autista che ha sgonfiato le gomme all\'inizio della pista; si scollina un\'ultima duna e sotto c\'è il mare, un braccio di Golfo che entra nel deserto, con le dune che scendono dritte in acqua e l\'Arabia Saudita sull\'altra sponda. Pochi posti al mondo sono fatti così, e che sia a un\'ora e mezza da un aeroporto internazionale è quasi assurdo. Il nord è un\'altra storia, ed è la parte che quasi nessuno fa. Le quattro lastre d\'acciaio di Richard Serra, alte quattordici metri e allineate su un chilometro in mezzo al niente, si raggiungono su una pista e non c\'è nessuno: niente parcheggio, niente biglietto, niente cartelli. Ci arrivi, cammini tra una lastra e l\'altra sentendo solo il vento, e torni indietro. È l\'opposto di tutto il resto del Golfo.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Khor Al Adaid (inland sea)",
        "testo": "Un braccio di Golfo che entra nel deserto, con le dune che scendono dritte in acqua e l'Arabia Saudita sull'altra sponda. Pochi posti al mondo sono fatti così.",
        "come": "Solo in 4x4 con un autista: all'inizio della pista si sgonfiano le gomme, poi circa mezz'ora di sabbia. Si scollina l'ultima duna e sotto c'è il mare.",
        "quando": "Pomeriggio, fino al tramonto.",
        "tempo": "Mezza giornata",
        "consiglio": "Non fare dune bashing subito dopo mangiato: è più movimentato di quanto sembri."
      },
      {
        "nome": "Forte di Al Zubarah",
        "testo": "Patrimonio UNESCO: il forte del Settecento e i resti della città portuale che c'era intorno.",
        "come": "In auto da Doha, circa un'ora e mezza.",
        "quando": "Mattina.",
        "tempo": "1-1,5 ore",
        "consiglio": "Portare acqua e pranzo: nel nord non c'è nulla per decine di chilometri."
      },
      {
        "nome": "East-West/West-East di Richard Serra",
        "testo": "Quattro lastre d'acciaio alte 14 metri, allineate su circa un chilometro nel deserto di Brouq. Si raggiungono su una pista, senza parcheggio né biglietto né cartelli.",
        "come": "In 4x4, a ovest di Doha.",
        "quando": "Tramonto, quando l'acciaio cambia colore.",
        "tempo": "1-2 ore",
        "consiglio": "Camminare tra una lastra e l'altra sentendo solo il vento: è l'opposto del resto del Golfo."
      },
      {
        "nome": "Mangrovie di Al Thakhira",
        "testo": "Una laguna bassa sulla costa nord-est con le mangrovie più estese del Qatar. Si gira in kayak tra i canali, con aironi e fenicotteri in inverno; con la bassa marea il fango scoperto è pieno di granchi.",
        "come": "In auto da Doha, circa un'ora verso nord. Kayak a noleggio sul posto con operatori locali, meglio prenotati.",
        "quando": "Con l'alta marea, la mattina presto o nel tardo pomeriggio. Da ottobre ad aprile.",
        "tempo": "2-3 ore",
        "consiglio": "Controllare l'orario delle maree prima di partire: con la bassa i kayak restano a secco."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Al Zubarah e il nord",
          "Pomeriggio: installazioni di Serra al tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Khor Al Adaid in 4x4",
          "Giorno 2: nord, Al Zubarah e Serra"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campi tendati nel deserto",
        "perChi": "chi vuole una notte sotto le stelle",
        "testo": "Campi con pasti inclusi, a sud, nel deserto."
      },
      {
        "nome": "Doha",
        "perChi": "chi preferisce rientrare in città",
        "testo": "Tutte le escursioni partono da Doha in giornata."
      }
    ],
    sapori: [
      {
        "nome": "Pranzo al sacco",
        "testo": "Si porta da Doha, come fanno i qatarioti nelle gite fuori città."
      },
      {
        "nome": "Machboos",
        "testo": "Nei campi tendati."
      },
      {
        "nome": "Karak chai",
        "testo": "Termos di tè speziato."
      },
      {
        "nome": "Datteri",
        "testo": "Nei campi, per merenda."
      }
    ],
    attenzioni: [
      "Arrivare a Khor Al Adaid con un'auto normale: si resta impantanati, ed è un classico.",
      "Fare dune bashing dopo mangiato.",
      "Andare al nord senza acqua e senza pranzo: non c'è nulla per decine di chilometri.",
      "Programmare il deserto tra giugno e settembre."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['stopover-golfo'],
    imageAlt: 'Il forte di Al Zubarah, con le torri merlate e la bandiera del Qatar, sulla pianura sassosa del nord',
  },
]
