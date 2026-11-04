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
      'Una capitale cresciuta da un accampamento di cercatori di stagno a città di grattacieli in poco più di un secolo, dove una moschea, un tempio indù e un tempio cinese possono stare nello stesso isolato e dove l\'istituzione civica è il cibo di strada.',
    percheAndarci:
      'È il modo più rapido di capire come funziona la Malesia: tre comunità vivono nella stessa città con lingue, religioni e cucine separate, e si incontrano ai food court. Ed è un ottimo hub aereo, da cui parte tutto il resto del viaggio.',
    cosaVedere: [
      'Le Petronas Twin Towers, con lo skybridge e la piattaforma panoramica',
      'Le Batu Caves, con la statua dorata di Murugan alta 42 metri e i 272 gradini colorati',
      'La moschea Masjid Jamek, alla confluenza dei due fiumi da cui la città prende il nome',
      'Il quartiere di Chinatown attorno a Petaling Street e il tempio Sri Mahamariamman',
      'Il Museo delle Arti Islamiche, uno dei migliori al mondo nel suo genere e quasi sempre vuoto',
      'Il mercato notturno di Jalan Alor, dove si cena all\'aperto tra decine di cucine',
    ],
    cosaFare: [
      'Salire alle Batu Caves presto al mattino, prima del caldo e dei gruppi (c\'è una scheda esperienza dedicata)',
      'Cena a Jalan Alor, il modo giusto di passare la prima sera',
      'Giro dei quartieri a piedi: Chinatown, Little India a Brickfields, Kampung Baru',
      'Passeggiata sulla canopy walkway del parco forestale di Bukit Nanas, foresta pluviale primaria rimasta in centro città',
    ],
    doveDormire:
      'Bukit Bintang per la comodità e la vita serale, Chinatown per i prezzi bassi e il carattere, KLCC per la vicinanza alle torri e ai centri commerciali. La città è grande e caotica: conviene stare vicino a una stazione della monorotaia o della metropolitana.',
    doveMangiare:
      'Kuala Lumpur è una delle città dove si mangia meglio in Asia, e il modo di farlo è uno solo: i food court e i banchi di strada, lasciando stare i ristoranti. Da provare il nasi lemak (riso al cocco con sambal, acciughe secche, arachidi e uovo: è il piatto nazionale e si mangia a colazione), il char kway teow, il roti canai indiano al mattino con il dahl, il laksa e il satay alla brace. Jalan Alor la sera è la versione più scenografica; i food court dei centri commerciali, con l\'aria condizionata, sono buoni e costano niente.',
    comeArrivare:
      'Volo su Kuala Lumpur International (KUL), grande hub regionale, con il KLIA Ekspres che porta in centro in 28 minuti. Il terminal 2 serve i voli low cost, compresi quelli per il Borneo.',
    comeSpostarsi:
      'Metropolitana, monorotaia e LRT coprono bene il centro, con la Touch \'n Go o il biglietto singolo. Grab è economico e risolve tutto il resto. Camminare è possibile ma faticoso: marciapiedi discontinui, caldo e umidità.',
    periodoMigliore:
      'tutto l\'anno, con acquazzoni pomeridiani in qualsiasi stagione. Le piogge più insistenti si concentrano tra ottobre e dicembre e ad aprile.',
    costi:
      'Petronas skybridge attorno agli 80 ringgit, Batu Caves gratuito (a pagamento solo la Dark Cave quando accessibile), Museo delle Arti Islamiche circa 20 ringgit. I trasporti costano pochi ringgit.',
    erroriDaEvitare: [
      'Salire alle Batu Caves a metà giornata: 272 gradini sotto il sole equatoriale, con le scimmie che rubano tutto quello che si tiene in mano',
      'Vestirsi troppo scoperti per visitare templi e moschee: alle Batu Caves e alla Masjid Negara servono spalle e ginocchia coperte, e i sarong prestati all\'ingresso risolvono solo in parte',
      'Giudicare la città dai centri commerciali di Bukit Bintang: quello che vale sta nei quartieri, a piedi',
      'Contare sulle carte ai banchi di strada: lì serve contante',
    ],
    miaEsperienza:
      'Quasi tutti usano Kuala Lumpur come scalo, e invece regge due giorni pieni, a patto di girarla per quartieri più che per monumenti. Le Petronas si guardano dal basso all\'ora blu e va bene così: la salita allo skybridge costa e restituisce meno di quanto promette. Le Batu Caves vanno fatte alle sette del mattino, quando i gradini colorati sono ancora in ombra e i fedeli salgono a pregare: due ore dopo è una scalinata rovente con centinaia di persone e le scimmie che strappano le bottiglie di mano. Il ricordo che resta però è più semplice: la sera a Jalan Alor, seduti su sgabelli di plastica in mezzo alla strada, con una cucina cinese a destra, una malese a sinistra e un banco indiano di fronte. È lì che si capisce di che paese si sta parlando.',
    luoghi: [
      {
        nome: "Petronas Twin Towers",
        testo: "Le torri gemelle di 452 metri, a lungo le più alte del mondo, sono il simbolo della città. Si visita lo skybridge al 41° piano e la piattaforma panoramica più in alto; ai piedi c'è il parco KLCC con la fontana e uno spettacolo serale.",
        come: "LRT fino a KLCC, uscita diretta nel centro commerciale. I biglietti per la salita sono a orario e si prenotano online sul sito ufficiale.",
        quando: "Il tramonto, ma i posti finiscono. Dal basso le torri si guardano meglio all'ora blu.",
        tempo: "1 ora per la salita; il parco KLCC si gira in mezz'ora",
        consiglio: "Chi non vuole spendere può guardarle dal basso e vedere la salita da un'altra torre, la KL Tower."
      },
      {
        nome: "Batu Caves",
        testo: "Un santuario indù in una grotta calcarea, preceduto dalla statua dorata di Murugan alta 42 metri e da 272 gradini colorati. Dentro c'è un grande salone con piccoli templi e scimmie sui gradini.",
        come: "Treno KTM Komuter da KL Sentral fino al capolinea Batu Caves, circa 30 minuti. L'ingresso è libero; alla Dark Cave si va con un tour a pagamento. Spalle e ginocchia coperte.",
        quando: "Alle 7 del mattino, con i fedeli che salgono e i gradini in ombra. Il Thaipusam, tra gennaio e febbraio, porta centinaia di migliaia di persone.",
        tempo: "2 ore",
        costo: "ingresso gratuito",
        consiglio: "Non tenere in mano bottiglie, occhiali o cibo: le scimmie li strappano."
      },
      {
        nome: "Masjid Jamek e Merdeka Square",
        testo: "La moschea del 1909 sorge alla confluenza dei fiumi Klang e Gombak, dove è nata la città. Poco più in là Merdeka Square, dove nel 1957 fu ammainata la bandiera britannica, e il Sultan Abdul Samad Building.",
        come: "LRT fino a Masjid Jamek. La moschea si visita fuori dagli orari di preghiera, con veste prestata all'ingresso.",
        quando: "Al mattino.",
        tempo: "1 ora e mezza",
        consiglio: "Fare il giro a piedi fino a Merdeka Square e a Chinatown, tutto nello stesso pomeriggio."
      },
      {
        nome: "Chinatown, Petaling Street e Sri Mahamariamman",
        testo: "Il quartiere cinese con il mercato di strada e il tempio indù più antico della città, a due passi l'uno dall'altro.",
        come: "LRT fino a Pasar Seni. Il mercato è all'aperto, il tempio si visita senza scarpe.",
        quando: "Al mattino per il tempio; la sera per la strada, quando il mercato è più vivo.",
        tempo: "1 ora e mezza",
        consiglio: "Non comprare i falsi: i prezzi iniziali sono molto alti."
      },
      {
        nome: "Museo delle Arti Islamiche",
        testo: "Uno dei musei più completi dell'Asia sul tema: tessili, ceramiche, manoscritti e modelli di moschee. Quasi sempre quasi vuoto.",
        come: "Nel parco dei Lake Gardens, vicino alla Moschea Nazionale. A piedi dalla fermata KL Sentral o in taxi.",
        quando: "Nel primo pomeriggio, nelle ore più calde.",
        tempo: "2 ore",
        consiglio: "Il caffè del museo, climatizzato e silenzioso, è un'ottima pausa."
      },
      {
        nome: "Jalan Alor",
        testo: "Una strada chiusa al traffico la sera, con decine di tavolini all'aperto e cucine cinesi, malesi e indiane una accanto all'altra. Il posto dove mangiare la prima sera.",
        come: "A piedi da Bukit Bintang o con il monorail fino a Bukit Bintang.",
        quando: "Dalle 18 in poi.",
        tempo: "1-2 ore",
        consiglio: "Chiedere il prezzo prima di ordinare il pesce, che si paga a peso."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "7:00 Batu Caves, con la salita in ombra",
          "10:00 Rientro e colazione al KL Sentral",
          "Primo pomeriggio: Museo delle Arti Islamiche, al fresco",
          "Tardo pomeriggio: Masjid Jamek e Merdeka Square a piedi, poi Chinatown",
          "Ora blu: Petronas dal basso",
          "Sera: cena a Jalan Alor"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra senza Jalan Alor",
          "Giorno 2: mattina ai Lake Gardens e al Perdana Botanical Garden, poi KL Tower; sera con cena a Jalan Alor e Bukit Bintang"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Bintang",
        perChi: "chi vuole cibo, negozi e vita serale",
        testo: "Il centro dello shopping, con tantissime scelte di alloggio e ristoranti. È rumoroso e un po' turistico, ma ben collegato."
      },
      {
        nome: "KLCC",
        perChi: "chi cerca vista sulle torri e alberghi di fascia alta",
        testo: "Tranquilla, pulita, con ristoranti di qualità. Meno vita autentica."
      },
      {
        nome: "Chinatown e Pasar Seni",
        perChi: "chi vuole risparmiare e stare vicino a mercati e stazione",
        testo: "Ostelli e alberghi economici, vicini al treno per l'aeroporto. Rumorosa la sera."
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
      'Un\'isola sullo Stretto di Malacca con al centro George Town, ex porto franco britannico e oggi patrimonio UNESCO: shophouse cinesi, moschee, templi, case-clan sull\'acqua e quella che quasi tutti i malesi considerano senza discussione la migliore cucina di strada del paese.',
    percheAndarci:
      'Per il cibo, che qui basta da solo a giustificare il viaggio, e perché George Town è la città dove gli strati culturali della Malesia si leggono meglio: quattro comunità in quattro isolati, ognuna con la propria architettura religiosa, tutte arrivate via mare.',
    cosaVedere: [
      'Il centro storico UNESCO di George Town, con le shophouse peranakan',
      'I Clan Jetties, i villaggi su palafitte delle famiglie cinesi, ognuno di un clan diverso',
      'Il tempio Kek Lok Si, il complesso buddista più grande della Malesia, sulla collina di Air Itam',
      'La Blue Mansion di Cheong Fatt Tze e la Pinang Peranakan Mansion',
      'La Street of Harmony, dove moschea, tempio cinese, tempio indù e chiesa anglicana stanno nella stessa via',
      'I murales del centro, che hanno reso George Town famosa ben oltre il suo perimetro',
    ],
    cosaFare: [
      'Mangiare ai banchi di strada, il motivo per cui si viene qui (c\'è una scheda esperienza dedicata)',
      'Girare il centro storico a piedi seguendo i murales e le installazioni in ferro battuto',
      'Salire a Penang Hill con la funicolare per la vista sull\'isola e sull\'aria fresca',
      'Escursione nel Penang National Park, il parco nazionale più piccolo al mondo, fino a Monkey Beach',
    ],
    doveDormire:
      'Dentro il perimetro UNESCO di George Town, possibilmente in una shophouse restaurata: si gira tutto a piedi ed è l\'unico modo di vedere la città la sera. Batu Ferringhi è la zona delle spiagge e dei resort, ma sta dall\'altra parte dell\'isola e taglia fuori dalla parte migliore.',
    doveMangiare:
      'È la ragione del viaggio. Da provare in ordine: l\'assam laksa, la zuppa acida di pesce e tamarindo che è il piatto simbolo dell\'isola; il char kway teow saltato al wok sul fuoco vivo; il cendol, il dolce ghiacciato con latte di cocco e zucchero di palma; il nasi kandar indiano-musulmano, con i curry versati uno sull\'altro sul riso; e il rojak, macedonia salata con salsa di gamberi fermentati. Si mangia ai coffee shop e ai food court più che nei ristoranti, e i banchi migliori hanno orari propri: alcuni aprono solo la mattina, altri solo dopo il tramonto.',
    comeArrivare:
      'Volo su Penang (PEN) da Kuala Lumpur o dall\'estero, oppure treno ETS fino a Butterworth e traghetto, che è il modo più bello di arrivare. In autobus da Kuala Lumpur sono circa 5 ore.',
    comeSpostarsi: 'George Town si gira a piedi; per il resto dell\'isola autobus pubblici economici e Grab.',
    periodoMigliore:
      'da dicembre a marzo, la stagione più secca della costa ovest. A fine giugno si tiene il George Town Festival e a luglio il festival del cibo: entrambi ottimi motivi per esserci, ma la città si riempie.',
    costi:
      'La città in sé è quasi tutta gratuita: il centro storico si cammina, i murales non si pagano. Kek Lok Si offre libero ingresso con contributo per la funicolare della pagoda; Penang Hill circa 30 ringgit andata e ritorno.',
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
          'Sono le due città dello Stretto iscritte insieme nella lista UNESCO nel 2008, hanno la stessa storia (porti coloniali con comunità cinesi, indiane e malesi) e vengono spesso messe in alternativa quando il tempo è poco. Si somigliano meno di quanto sembra.',
        opzioni: [
          {
            nome: 'George Town (Penang)',
            sintesi: 'La più grande, la più viva e la capitale gastronomica del paese, su un\'isola con anche montagna, parco nazionale e spiagge.',
            costo: 'la città è quasi tutta gratuita; volo o 5 ore di bus da KL',
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
            sintesi: 'Più piccola e più antica, con la stratificazione portoghese, olandese e britannica visibile in pochi isolati, a due ore da Kuala Lumpur.',
            costo: 'bus da KL circa 2 ore, pochi euro',
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
        come: "Dal terminal dei traghetti o dagli alberghi si va a piedi. Esistono bus gratuiti CAT nel centro. Tanti i percorsi a piedi.",
        quando: "Al mattino presto e dopo le quattro del pomeriggio. Tra le undici e le tre il caldo è serio.",
        tempo: "mezza giornata",
        consiglio: "Cercare i murales ma anche le botteghe di artigiani, e fermarsi a bere un caffè bianco in una vecchia caffetteria."
      },
      {
        nome: "Clan Jetties",
        testo: "Villaggi su palafitte dove da generazioni vivono famiglie cinesi, raggruppate per clan. Il più noto è il Chew Jetty, con case di legno, altarini e botteghe.",
        come: "A piedi dal lungomare di George Town. È un luogo dove si vive: camminare in silenzio, chiedere prima di fotografare.",
        quando: "Al mattino o a fine pomeriggio.",
        tempo: "1 ora",
        consiglio: "Comprare qualcosa da una delle botteghe lungo il molo: è l'unico modo corretto di sostenere chi ci vive."
      },
      {
        nome: "Kek Lok Si",
        testo: "Il complesso buddista più grande della Malesia, sulla collina di Air Itam. Una pagoda a sette piani unisce stili cinese, thailandese e birmano, e in alto c'è una statua di Guanyin alta 30 metri.",
        come: "Bus da George Town (Rapid Penang) o taxi, circa 20 minuti. Una funicolare porta alla statua.",
        quando: "Al mattino; durante il Capodanno cinese è affollato di lanterne e fedeli.",
        tempo: "1 ora e mezza",
        costo: "ingresso libero, la funicolare è a pagamento",
        consiglio: "Salire fino alla statua di Guanyin: la vista su Penang vale i gradini."
      },
      {
        nome: "Cheong Fatt Tze Mansion (Blue Mansion)",
        testo: "La casa-palazzo di un mercante cinese di fine Ottocento, con le pareti color indaco, i cortili interni e gli arredi originali. Ha vinto un premio UNESCO per il restauro.",
        come: "A piedi dal centro di George Town. Si visita solo con tour guidato, a orari fissi.",
        quando: "Al mattino, con il tour in lingua inglese.",
        tempo: "1 ora",
        consiglio: "Arrivare in tempo per il primo tour: i gruppi sono piccoli e il racconto vale più delle sale."
      },
      {
        nome: "Street of Harmony",
        testo: "Un tratto di Lebuh Pantai e dintorni dove stanno vicini una moschea, un tempio cinese, un tempio indù e una chiesa anglicana. Un esempio vero di convivenza.",
        come: "A piedi nel centro storico, nella zona di Jalan Masjid Kapitan Keling.",
        quando: "Al mattino. Le moschee sono chiuse ai non musulmani durante la preghiera.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Visitare la Kapitan Keling Mosque fuori dagli orari di preghiera, con abiti coperti."
      },
      {
        nome: "Penang Hill",
        testo: "Una collina di 833 metri sopra la città, raggiunta da una funicolare, con aria più fresca, un giardino botanico e viste su George Town e il continente.",
        come: "Autobus 204 da Komtar fino alla stazione della funicolare. Salita di circa 10 minuti.",
        quando: "Al mattino, con meno nebbia e meno code.",
        tempo: "3 ore",
        consiglio: "Salire presto: nel pomeriggio le code alla funicolare sono lunghe."
      }
    ],
    programmi: [
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: mattina a piedi nel centro storico e Street of Harmony; pranzo in un centro cibo; primo pomeriggio Blue Mansion; tardo pomeriggio Clan Jetties; sera cena in strada",
          "Giorno 2: mattina Kek Lok Si; pranzo ad Air Itam (assam laksa); pomeriggio Penang Hill; sera libera"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Come i due giorni, con il terzo dedicato al mangiare: colazione tradizionale, mercato, un giro in cerca dei banchi migliori, e la cena finale in un hawker"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro storico di George Town",
        perChi: "chi vuole fare tutto a piedi",
        testo: "Shophouse restaurate trasformate in guesthouse e piccoli alberghi. Comodissimo, un po' rumoroso la sera."
      },
      {
        nome: "Batu Ferringhi",
        perChi: "chi cerca il mare e i resort",
        testo: "Una striscia di spiaggia con alberghi grandi. Mare mediocre, ma è la zona più comoda per le famiglie."
      },
      {
        nome: "Komtar e Jalan Burma",
        perChi: "chi vuole risparmiare",
        testo: "Alberghi di fascia media, fuori dal cuore turistico ma a pochi minuti di bus o taxi."
      }
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
      "Alle bancarelle turistiche attorno ai murales i prezzi di cibo e souvenir sono doppi rispetto alle vie laterali."
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
      'Il porto che per secoli ha controllato lo stretto più strategico d\'Asia, conquistato dai portoghesi nel 1511, poi dagli olandesi e infine dai britannici: tre dominazioni europee sovrapposte in pochi isolati, più la cultura peranakan nata dai matrimoni tra mercanti cinesi e donne malesi.',
    percheAndarci:
      'Qui la storia coloniale del sud-est asiatico si legge camminando (la chiesa portoghese in rovina, la piazza olandese rossa, il forte), e la città sta a metà strada tra Kuala Lumpur e Singapore.',
    cosaVedere: [
      'La Dutch Square con la Christ Church e lo Stadthuys, il municipio olandese del 1650',
      'Le rovine della chiesa di St. Paul in cima alla collina, con la vista sullo stretto',
      'La Porta de Santiago, ciò che resta della fortezza portoghese A Famosa',
      'Jonker Street, la via principale di Chinatown, con il mercato notturno del fine settimana',
      'Il Baba & Nyonya Heritage Museum, una casa peranakan conservata con gli arredi originali',
      'La Kampung Kling Mosque e il Cheng Hoon Teng, il tempio cinese più antico della Malesia',
    ],
    cosaFare: [
      'Camminare il centro storico UNESCO, che si fa tutto a piedi in mezza giornata',
      'Cenare peranakan, la cucina nata dall\'incontro tra cinesi e malesi e che esiste quasi solo qui e a Penang',
      'Mercato notturno di Jonker Street il venerdì, sabato o domenica sera',
      'Giro in barca sul fiume al tramonto, con i murales sulle rive',
    ],
    doveDormire:
      'Dentro il centro storico, meglio dal lato di Chinatown: la sera, quando i pullman dei visitatori in giornata sono ripartiti, il quartiere cambia del tutto, ed è questa la ragione per fermarsi a dormire.',
    doveMangiare:
      'La cucina da cercare è quella peranakan o nyonya: l\'ayam pongteh, il pollo stufato con salsa di soia fermentata, e il laksa nyonya, con il latte di cocco, che è diverso da quello di Penang. La specialità popolare è invece il chicken rice ball, il pollo con il riso servito in polpette compatte, nato qui. Da provare anche il cendol di Malacca, ricco di zucchero di palma, e i satay celup, gli spiedini cotti dai clienti in una pentola di salsa di arachidi bollente al centro del tavolo.',
    comeArrivare:
      'Autobus da Kuala Lumpur, circa 2 ore, con partenze continue dal terminal TBS. Da Malacca a Singapore ci sono autobus diretti in 4-5 ore, frontiera compresa: è la ragione per cui questa città sta in mezzo a quasi tutti gli itinerari.',
    comeSpostarsi: 'Il centro storico si gira a piedi. Per la stazione degli autobus, che è fuori città, servono un bus locale o Grab.',
    periodoMigliore: 'da dicembre a marzo. Il mercato notturno di Jonker Street c\'è solo nel fine settimana, il che condiziona la scelta dei giorni.',
    costi: 'Baba & Nyonya Heritage Museum circa 25 ringgit, St. Paul e la Porta de Santiago gratuiti, giro in barca sul fiume attorno ai 30.',
    erroriDaEvitare: [
      'Andarci in un fine settimana aspettandosi tranquillità: da venerdì a domenica Malacca è una delle mete domestiche più battute della Malesia',
      'Farla in giornata da Kuala Lumpur: si vede solo nelle ore peggiori e si perde la sera, che è il momento in cui la città funziona',
      'Salire sui trishaw decorati con le luci e la musica a tutto volume aspettandosi un giro romantico: sono un\'attrazione kitsch, il che va benissimo se si sa in anticipo',
    ],
    miaEsperienza:
      'Malacca è una tappa breve che rende molto più di quanto prometta, a una condizione: dormirci. Di giorno, soprattutto nel fine settimana, il centro è un flusso continuo di visitatori in giornata da Kuala Lumpur e Singapore, con i trishaw decorati a luci LED che passano sparando musica a tutto volume: un livello di kitsch che alla seconda volta diventa divertente. La sera, quando i pullman se ne vanno, restano i vicoli di Chinatown, le case peranakan con le porte aperte e il fiume illuminato. La collina di St. Paul, con la chiesa portoghese senza tetto e le lapidi olandesi appoggiate ai muri, è il posto dove gli strati di questa città si capiscono in due minuti. E la cucina nyonya, nata dall\'incontro tra mercanti cinesi e donne malesi, è una delle cose più interessanti che ho mangiato in tutto il paese.',
    luoghi: [
      {
        nome: "Dutch Square, Christ Church e Stadthuys",
        testo: "Il centro olandese della città, con edifici rosso mattone del Seicento: la chiesa del 1753 e il municipio, il più antico edificio olandese ancora in piedi in Asia.",
        come: "A piedi dal centro storico. Il Stadthuys ospita un museo di storia ed etnografia.",
        quando: "Al mattino, prima della folla.",
        tempo: "1 ora",
        consiglio: "Cominciare qui e salire verso St. Paul con le scale laterali."
      },
      {
        nome: "St. Paul's Hill e Porta de Santiago",
        testo: "Sulla collina stanno le rovine della chiesa portoghese del 1521, senza tetto, con lapidi olandesi lungo i muri. Ai piedi c'è la Porta de Santiago, ultima parte della fortezza A Famosa.",
        come: "A piedi, con una breve salita. Dalla cima si vede lo stretto.",
        quando: "Al tramonto, con la luce che scende sullo stretto.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Leggere le lapidi: sono la sintesi della storia della città."
      },
      {
        nome: "Jonker Street",
        testo: "La via principale di Chinatown, con botteghe di antiquariato, caffè e, nel fine settimana, un mercato notturno affollato.",
        come: "A piedi dal centro. Il mercato notturno c'è venerdì, sabato e domenica sera.",
        quando: "Nei giorni feriali per camminare con calma; il fine settimana per il mercato.",
        tempo: "1-2 ore",
        consiglio: "Mangiare a Jonker non è sempre la scelta migliore: provare le vie laterali."
      },
      {
        nome: "Baba & Nyonya Heritage Museum",
        testo: "Una casa peranakan del 1861 conservata con gli arredi originali: legno intarsiato, porcellane e foto di famiglia. Racconta la comunità cino-malese nata dall'incontro dei mercanti cinesi con le donne locali.",
        come: "A piedi da Jonker Street. Si visita con guida in italiano o inglese, a orari fissi.",
        quando: "Al mattino. La guida dura circa un'ora.",
        tempo: "1 ora",
        consiglio: "Prenotare il tour appena arrivati: i gruppi sono limitati."
      },
      {
        nome: "Cheng Hoon Teng e Kampung Kling Mosque",
        testo: "Il tempio cinese più antico della Malesia e una moschea di architettura sumatrana, a pochi passi: tre culture nella stessa strada.",
        come: "A piedi, nella Jalan Tukang Emas, detta Harmony Street.",
        quando: "Al mattino.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Visitare entrambi nello stesso giro, col capo coperto per la moschea."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Dutch Square e Stadthuys",
          "Tarda mattina: St. Paul's Hill e Porta de Santiago",
          "Pranzo: cucina nyonya",
          "Primo pomeriggio: Baba & Nyonya Museum",
          "Tardo pomeriggio: Cheng Hoon Teng e Kampung Kling",
          "Sera: Jonker Street e fiume illuminato"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Giorno 2: mattina in giro per Chinatown nei giorni feriali, giro in barca sul fiume e rientro nel pomeriggio"
        ]
      }
    ],
    zone: [
      {
        nome: "Chinatown e Jonker Street",
        perChi: "chi vuole stare nel cuore della città",
        testo: "Guesthouse in case storiche, molte a poche decine di metri da tutto. Rumoroso nel fine settimana."
      },
      {
        nome: "Lungofiume",
        perChi: "chi cerca una vista sul fiume",
        testo: "Alberghi con vista sul fiume, più tranquilli. Un po' più lontani da Jonker Street."
      }
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
        testo: "Ghiaccio tritato, latte di cocco, sciroppo di palma e gelatine verdi. Il dolce simbolo di Malacca."
      },
      {
        nome: "Satay celup",
        testo: "Spiedini che si cuociono da soli in una pentola di salsa bollente. Una specialità di Malacca."
      }
    ],
    attenzioni: [
      "Da venerdì a domenica la città è affollata di gitanti: se si può, venire nei giorni feriali.",
      "I trishaw decorati con luci e musica forte sono un'attrazione: concordare il prezzo prima di salire.",
      "Non fare la tappa in giornata da Kuala Lumpur: si perde la sera, quando i pullman se ne vanno.",
      "Il caldo è forte a mezzogiorno: tenere acqua e coprirsi la testa."
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
      'L\'altopiano a 1.500 metri dove i britannici si rifugiavano dal caldo: piantagioni di tè a perdita d\'occhio, serre di fragole, foresta muschiosa e un clima che di sera scende sotto i quindici gradi. È l\'unico posto della penisola dove serve una felpa.',
    percheAndarci:
      'Dopo qualche giorno di caldo equatoriale il sollievo fisico si sente, e le piantagioni di tè che scendono a onde lungo le colline sono uno dei paesaggi più fotografati del paese. La mossy forest, la foresta muschiosa d\'altura, è tutta un\'altra cosa.',
    cosaVedere: [
      'Le piantagioni di tè di Sungai Palas e Bharat, con le terrazze verdi che seguono le colline',
      'La mossy forest sul Gunung Brinchang, un bosco d\'altura coperto di muschio e felci, percorribile su una passerella',
      'Le fattorie di fragole e le serre, che sono il secondo prodotto locale',
      'Il Time Tunnel Museum a Brinchang, per la storia coloniale dell\'altopiano',
      'Il mercato di Brinchang, con i prodotti dell\'altopiano',
    ],
    cosaFare: [
      'Visita a una piantagione con degustazione e vista sulle terrazze (c\'è una scheda esperienza dedicata)',
      'Passeggiata nella mossy forest al mattino, quando la nebbia è ancora tra gli alberi',
      'Uno dei sentieri numerati della zona, dal facile al parecchio impegnativo',
      'Cercare la rafflesia, il fiore più grande del mondo, con una guida locale: fiorisce a periodi e non è garantita',
    ],
    doveDormire:
      'Tanah Rata è il paese più comodo e ha l\'offerta più ampia; Brinchang è più vicino alle piantagioni ma più anonimo. Le camere hanno raramente il riscaldamento: di notte fa freddo sul serio e le coperte contano più delle stelle.',
    doveMangiare:
      'L\'altopiano ha una sua identità gastronomica legata al clima: lo steamboat, la pentola di brodo bollente al centro del tavolo in cui si cuociono verdure e carne, è quello che mangiano tutti la sera perché fa freddo, ed è la cosa giusta da fare. Per il resto, tè e scones nelle sale da tè delle piantagioni (un\'eredità coloniale che qui non è una posa) e le fragole in ogni forma possibile, comprese quelle che sarebbe meglio evitare.',
    comeArrivare:
      'Autobus da Kuala Lumpur (circa 4 ore) o da Penang e Ipoh. L\'ultimo tratto è una strada di montagna con centinaia di tornanti: chi soffre il mal d\'auto lo sente, e non è un dettaglio da poco su quattro ore di viaggio.',
    comeSpostarsi:
      'Le distanze tra i punti d\'interesse sono scomode a piedi e i mezzi pubblici sono radi: quasi tutti si aggregano a un tour di mezza giornata o prendono un taxi per la giornata. Grab funziona a singhiozzo.',
    periodoMigliore:
      'tutto l\'anno, con temperature stabili sui 15-22 gradi. Le piogge sono frequenti nel pomeriggio in ogni stagione: le uscite vanno programmate al mattino.',
    costi: 'ingresso alle piantagioni gratuito o simbolico; tour di mezza giornata attorno ai 40-60 ringgit.',
    erroriDaEvitare: [
      'Andarci in un fine settimana o durante le vacanze scolastiche malesi: l\'altopiano è la meta domestica per eccellenza e le strade a tornanti diventano una coda',
      'Non portare niente di caldo: qui, unico posto del viaggio, la sera si gela',
      'Prenotare i tour più economici per la mossy forest, che spesso portano solo sulla passerella affollata vicino alla torre invece che nella parte vera',
      'Aspettarsi paesaggi incontaminati: l\'altopiano è pesantemente coltivato e in alcune zone le serre di plastica hanno mangiato la vista',
    ],
    miaEsperienza:
      'Le Cameron Highlands funzionano soprattutto per contrasto: ci siamo arrivati dopo giorni di caldo umido e la sera abbiamo dormito sotto una coperta, che a quel punto sembrava un lusso. Le piantagioni di tè sono belle, con le terrazze verdi che scendono a onde, e la sala da tè affacciata sulle colline è una di quelle cose coloniali che qui non stonano. La mossy forest è la parte che sorprende di più (un bosco nano a 2.000 metri tutto coperto di muschio, con la nebbia tra i rami) e insieme quella su cui conviene essere pratici: ci sono due mossy forest, quella vera e la passerella turistica accanto al parcheggio della torre, e i tour più economici portano solo alla seconda. C\'è anche il rovescio della medaglia: l\'altopiano è agricolo e in certi tratti le serre di plastica coprono interi versanti. È una zona coltivata con dei bei pezzi dentro, non un parco nazionale.',
    luoghi: [
      {
        nome: "Piantagioni di tè di Sungai Palas e Bharat",
        testo: "Colline coperte di terrazze di tè a perdita d'occhio. La fabbrica della BOH a Sungai Palas offre una visita gratuita e una sala da tè con vista.",
        come: "In auto o in tour da Tanah Rata o Brinchang, circa 30 minuti. Strade di montagna strette.",
        quando: "Al mattino, con meno nebbia e meno gente.",
        tempo: "2 ore",
        costo: "visita alla fabbrica gratuita",
        consiglio: "Prendere il tè in terrazza e guardare le colline per mezz'ora: è la parte migliore."
      },
      {
        nome: "Mossy Forest sul Gunung Brinchang",
        testo: "Un bosco d'altura a circa 2.000 metri, tutto coperto di muschio, felci e orchidee selvatiche, con nebbia tra i rami. Si percorre su una passerella di legno.",
        come: "In fuoristrada o con un tour guidato da Tanah Rata o Brinchang. Chiedere di essere portati alla parte vera, non solo alla passerella accanto al parcheggio della torre.",
        quando: "Al mattino presto: la nebbia sale a metà giornata.",
        tempo: "2-3 ore",
        consiglio: "Preferire un tour guidato con un'ora in più: i tour più economici portano solo alla passerella affollata."
      },
      {
        nome: "Fattorie di fragole e serre",
        testo: "La coltivazione di fragole e verdure è il secondo prodotto dell'altopiano. Si visitano le serre, si mangiano fragole e si compra miele e tè.",
        come: "In auto o con un tour, lungo la strada principale di Brinchang.",
        quando: "Al mattino.",
        tempo: "1 ora",
        consiglio: "Non aspettarsi il paesaggio incontaminato: molte zone sono coperte dalle serre di plastica."
      },
      {
        nome: "Brinchang e il mercato",
        testo: "Il paese più grande dell'altopiano, con il mercato dei prodotti locali, il sabato sera un mercato notturno e i ristoranti dove si mangia lo steamboat.",
        come: "A piedi da Brinchang o in bus da Tanah Rata.",
        quando: "Nel tardo pomeriggio e la sera.",
        tempo: "2 ore",
        consiglio: "Portare una felpa: la sera fa freddo."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina presto: Mossy Forest con tour guidato",
          "Tarda mattina: piantagione di tè e fabbrica BOH con tè in terrazza",
          "Pranzo a Brinchang",
          "Primo pomeriggio: fattoria di fragole",
          "Sera: steamboat a Brinchang"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Come sopra, e nel secondo giorno trekking leggero sui sentieri di Tanah Rata e un po' di tempo libero"
        ]
      }
    ],
    zone: [
      {
        nome: "Tanah Rata",
        perChi: "chi vuole stare vicino ai sentieri e ai bus",
        testo: "Il centro con ostelli e guesthouse, comodo per escursioni e ristoranti. Un po' trafficato."
      },
      {
        nome: "Brinchang",
        perChi: "chi vuole essere vicino alla Mossy Forest e al mercato",
        testo: "Più tranquillo, con alberghi di fascia media e più freddo la sera."
      }
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
        testo: "Tè nero locale, servito nelle sale da tè. La BOH è la più nota."
      },
      {
        nome: "Murtabak",
        testo: "Una frittella farcita di carne e uova, di origine indiana musulmana. Si trova nei locali di Tanah Rata e Brinchang."
      }
    ],
    attenzioni: [
      "Nei fine settimana e durante le vacanze scolastiche malesi le strade a tornanti si intasano: venire in un giorno feriale.",
      "La sera fa freddo, sui 15 gradi: portare qualcosa di caldo.",
      "Chi soffre l'auto: la strada di salita ha centinaia di tornanti.",
      "Scegliere un tour per la Mossy Forest che arrivi alla parte vera e non solo alla passerella vicino al parcheggio."
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
      'Una delle foreste pluviali più antiche del pianeta (si stima attorno ai 130 milioni di anni, ininterrotta anche durante le glaciazioni), nel cuore della penisola malese. Ci si arriva in barca lungo il fiume, e questo dice già molto su cosa aspettarsi.',
    percheAndarci:
      'È giungla vera, raggiungibile in mezza giornata da Kuala Lumpur, e la canopy walkway sospesa tra gli alberi è uno dei pochi modi di vedere una foresta pluviale dall\'alto invece che dal basso, dove non si vede quasi niente.',
    cosaVedere: [
      'La canopy walkway, una delle più lunghe al mondo, sospesa a 40 metri tra gli alberi',
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
      'Circa 3-4 ore di minibus da Kuala Lumpur fino a Kuala Tembeling o direttamente a Jerantut, poi barca lunga sul fiume Tembeling: la traversata dura circa 2-3 ore ed è la parte più bella del trasferimento. Molti operatori offrono il pacchetto combinato dalla capitale.',
    comeSpostarsi: 'A piedi nel parco e in barca sul fiume: non ci sono strade. Per attraversare da Kuala Tahan all\'ingresso ci sono navette a remi continue per pochi ringgit.',
    periodoMigliore:
      'da febbraio a settembre, la finestra più asciutta. Da novembre a gennaio le piogge sono forti e alcune attività vengono sospese; il livello del fiume condiziona le risalite in barca.',
    costi: 'ingresso al parco pochi ringgit più il permesso per la macchina fotografica; canopy walkway circa 5 ringgit; le escursioni guidate 50-150 ringgit secondo la durata.',
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
        testo: "Una passerella sospesa a circa 40 metri tra gli alberi, una delle più lunghe al mondo. È il solo modo di guardare la foresta dall'alto e di capirne la struttura a strati.",
        come: "A piedi dal villaggio di Kuala Tahan, circa 40 minuti di sentiero. Il permesso si compra al centro visitatori; si passa una persona alla volta.",
        quando: "All'apertura: più tardi si va con la coda dietro.",
        tempo: "2-3 ore",
        consiglio: "Andare all'apertura per avere la passerella quasi libera."
      },
      {
        nome: "Bukit Teresek",
        testo: "Una salita di circa 334 metri sopra la volta della foresta, con gradini e radici. In cima si vede la distesa verde e il fiume.",
        come: "A piedi da Kuala Tahan, dallo stesso sentiero della canopy walkway, con un tratto in più.",
        quando: "Al mattino presto, per il fresco.",
        tempo: "2 ore",
        consiglio: "Portare acqua e calze alte per le sanguisughe."
      },
      {
        nome: "Lata Berkoh",
        testo: "Rapide a monte del fiume Tembeling, raggiungibili in barca lunga. Il percorso in barca, controcorrente tra due pareti di foresta, è già parte della visita.",
        come: "Con barca lunga dal villaggio, a orari concordati con gli operatori. Il livello del fiume decide se si può andare.",
        quando: "Al mattino. Nella stagione delle piogge le uscite si fermano.",
        tempo: "mezza giornata",
        consiglio: "Chiedere a più operatori se l'uscita è confermata prima di prenotare."
      },
      {
        nome: "Night walk",
        testo: "Una camminata notturna con guida e torcia nella foresta: ragni, insetti, serpenti e rane, e con fortuna qualche mammifero. È il momento in cui la foresta si anima.",
        come: "Con una guida del parco o di un operatore autorizzato, dal villaggio.",
        quando: "Dopo il tramonto, per circa due ore.",
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
          "Giorno 1: arrivo in barca da Kuala Tembeling nel pomeriggio, sistemazione, night walk",
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
        nome: "Dentro il parco (Mutiara Taman Negara)",
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
      "Da novembre a gennaio le piogge sono forti e alcune attività sono sospese."
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
      'Un arcipelago di novantanove isole nel nord dello Stretto di Malacca, a ridosso del confine thailandese: spiagge, mangrovie, un geoparco UNESCO di formazioni calcaree e la funivia più ripida del mondo, che sale su una cresta con un ponte sospeso in curva.',
    percheAndarci:
      'È la migliore isola della costa ovest raggiungibile senza complicazioni, funziona anche nella stagione in cui le Perhentian chiudono, e il giro in barca tra le mangrovie mostra una Malesia diversa da quella delle spiagge.',
    cosaVedere: [
      'Lo Sky Bridge, il ponte pedonale curvo sospeso a 660 metri, raggiunto dalla funivia di Machinchang',
      'Il geoparco delle mangrovie di Kilim, con le formazioni calcaree e le grotte',
      'Le cascate di Telaga Tujuh, le sette pozze naturali in successione',
      'La spiaggia di Pantai Cenang, la più attrezzata, e quelle più tranquille del nord',
      'L\'isola di Dayang Bunting, con il suo lago d\'acqua dolce a pochi metri dal mare',
    ],
    cosaFare: [
      'Giro in barca nelle mangrovie di Kilim, con le aquile di mare e le grotte calcaree',
      'Funivia e Sky Bridge, meglio al mattino prima che arrivi la foschia',
      'Island hopping verso Dayang Bunting e Beras Basah',
      'Approfittare del duty free: Langkawi è zona franca e l\'alcol costa una frazione che nel resto della Malesia',
    ],
    doveDormire:
      'Pantai Cenang per servizi, ristoranti e vita serale; la costa nord attorno a Datai e Tanjung Rhu per i resort e la vera tranquillità; Kuah per i prezzi bassi e la vicinanza al porto, ma senza spiaggia degna.',
    doveMangiare:
      'L\'isola vive di turismo e i prezzi lo riflettono, ma bastano pochi metri dalla spiaggia per rientrare negli standard malesi: i banchi del mercato notturno, che ruota di paese in paese secondo il giorno della settimana, sono l\'opzione migliore e più economica. Il pesce alla griglia e i curry di pesce sono la cucina naturale del posto. E, essendo zona franca, è l\'unico posto della Malesia dove bere costa poco.',
    comeArrivare:
      'Volo su Langkawi (LGK) da Kuala Lumpur o Penang, oppure traghetto da Kuala Kedah, Penang o Satun in Thailandia, utile per chi combina i due paesi.',
    comeSpostarsi:
      'Auto o scooter a noleggio sono il mezzo giusto: l\'isola è grande, i mezzi pubblici quasi inesistenti e i taxi cari rispetto al resto del paese. Guidare è semplice e le strade sono buone.',
    periodoMigliore:
      'da novembre ad aprile, la stagione secca della costa ovest, con il mare più calmo. Da maggio a ottobre le piogge sono più frequenti e in agosto-settembre può arrivare la foschia da incendi dall\'Indonesia.',
    costi: 'funivia e Sky Bridge attorno agli 85 ringgit, giro nelle mangrovie 250-350 ringgit a barca da dividere, noleggio scooter pochi euro al giorno.',
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
        testo: "Una funivia sale a quasi 700 metri sul Gunung Machinchang. Da lì un ponte pedonale curvo, sospeso a 660 metri, offre vista su mare, isole e foresta.",
        come: "Dalla stazione base a Oriental Village. Si prende la funivia e un percorso a piedi porta al ponte.",
        quando: "Al mattino, quando la foschia è minore e le code più corte.",
        tempo: "3 ore",
        consiglio: "Salire all'apertura: verso mezzogiorno la foschia copre la vista."
      },
      {
        nome: "Mangrovie di Kilim",
        testo: "Un geoparco UNESCO con pareti calcaree, grotte di pipistrelli, scimmie e granchi nei fanghi. Si visita in barca.",
        come: "In barca con operatori, dall'imbarcadero di Kilim. Il giro dura qualche ora.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "Chiedere in anticipo se l'operatore dà da mangiare alle aquile: è una pratica discutibile."
      },
      {
        nome: "Telaga Tujuh",
        testo: "Una serie di pozze naturali in cascata, tra la foresta, con acqua fresca per un bagno dopo la salita.",
        come: "In auto o scooter fino al parcheggio, poi 600 gradini circa fino alle pozze.",
        quando: "Al mattino presto.",
        tempo: "1 ora e mezza",
        consiglio: "Portare il costume e scarpe adatte: i gradini sono scivolosi."
      },
      {
        nome: "Pantai Cenang",
        testo: "La spiaggia più attrezzata dell'isola, con bar, ristoranti e negozi. Mare spesso torbido, ma tramonto bello.",
        come: "In scooter o taxi dall'aeroporto, circa 10 minuti.",
        quando: "Il tramonto.",
        tempo: "2 ore",
        consiglio: "Chi cerca il mare turchese deve andare alle Perhentian: qui c'è la vita da spiaggia."
      },
      {
        nome: "Pulau Dayang Bunting",
        testo: "Un'isola con un lago d'acqua dolce a pochi metri dal mare, dove ci si può bagnare. La leggenda lo lega a una principessa.",
        come: "In barca con tour organizzati da Kuah o Pantai Cenang.",
        quando: "Al mattino.",
        tempo: "mezza giornata",
        consiglio: "Nel lago i pedalò sono più comodi dei bagni, ma il bagno è l'unico modo di sentirlo vivo."
      }
    ],
    programmi: [
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Sky Bridge all'apertura, Telaga Tujuh, pranzo, Pantai Cenang al tramonto",
          "Giorno 2: mangrovie di Kilim al mattino, Dayang Bunting nel pomeriggio"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Come i 2 giorni, con il terzo giorno libero: spiagge del nord, un giro in scooter tra le risaie, il tramonto a Tanjung Rhu"
        ]
      }
    ],
    zone: [
      {
        nome: "Pantai Cenang",
        perChi: "chi vuole spiaggia, bar e cena fuori",
        testo: "La zona più animata, con molta scelta. Rumorosa e affollata."
      },
      {
        nome: "Pantai Tengah",
        perChi: "chi cerca un po' di calma",
        testo: "Accanto a Cenang, più tranquilla, con resort e guesthouse."
      },
      {
        nome: "Kuah",
        perChi: "chi arriva in traghetto o vuole risparmiare",
        testo: "Il capoluogo, con il porto e i prezzi più bassi, ma lontano dalle spiagge."
      }
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
        nome: "Nasi lemak",
        testo: "Riso al cocco con acciughe fritte, uovo e sambal. La colazione nazionale."
      },
      {
        nome: "Cioccolato e prodotti in zona franca",
        testo: "L'isola è zona franca: cioccolato, liquori e profumi costano meno che sulla terraferma."
      }
    ],
    attenzioni: [
      "Mare spesso torbido: chi cerca acqua turchese resta deluso, meglio puntare alle mangrovie e alle escursioni.",
      "Scooter: patente internazionale e casco, i controlli esistono.",
      "Aquile e scimmie nelle mangrovie: non dare da mangiare e chiedere all'operatore se lo fa.",
      "Da agosto a settembre può arrivare la foschia da incendi dall'Indonesia: controllare le notizie."
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
      'Due isole sulla costa est, nel Mar Cinese Meridionale: sabbia bianca, acqua turchese vera, tartarughe che si incontrano facendo snorkeling dalla riva e nessuna strada, perché non ci sono veicoli. Chiudono da novembre a febbraio, quando arriva il monsone.',
    percheAndarci:
      'Sono la risposta alla domanda su dove sia il mare bello in Malesia (sulla costa est, non su quella ovest), e lo sviluppo è ancora basso: si dorme in chalet, si mangia sulla spiaggia e la sera l\'elettricità in certi posti va a generatore.',
    cosaVedere: [
      'Perhentian Besar, la più grande, più tranquilla e con le spiagge migliori',
      'Perhentian Kecil, la piccola, con Long Beach e la vita serale',
      'Il reef attorno a Shark Point e Turtle Point, raggiungibili in snorkeling',
      'La laguna di Romantic Beach e le cale accessibili solo via mare',
    ],
    cosaFare: [
      'Snorkeling con le tartarughe, che qui si vedono partendo dalla spiaggia senza barca né guida',
      'Corso o immersioni: le Perhentian sono tra i posti più economici al mondo dove prendere un brevetto',
      'Giro in barca attorno alle due isole con soste nei punti di snorkeling',
      'Percorrere il sentiero nella giungla tra le spiagge, l\'unico collegamento via terra',
    ],
    doveDormire:
      'Besar per le famiglie e chi cerca calma, Kecil e Long Beach per il ritmo più sociale e i prezzi bassi. Le sistemazioni sono semplici: chalet in legno, aria condizionata non sempre, e in alcune strutture l\'elettricità funziona a fasce orarie.',
    doveMangiare:
      'Si mangia nei ristoranti dei chalet e nei barbecue serali sulla spiaggia, dove il pesce viene esposto sul ghiaccio e grigliato al momento: è la cena tipica e costa poco. L\'offerta è limitata e ripetitiva (nasi goreng, mie goreng, pesce, curry) e va accettata come parte del pacchetto. Da sapere: siamo in uno stato conservatore, l\'alcol si trova poco ed è caro, e alcune strutture non lo servono affatto.',
    comeArrivare:
      'Volo su Kota Bharu o autobus notturno da Kuala Lumpur fino a Kuala Besut, poi speedboat di circa 30-40 minuti. La traversata è veloce ma movimentata: chi soffre il mare lo sente.',
    comeSpostarsi: 'Solo a piedi e in water taxi: sulle isole non ci sono strade né veicoli. I trasferimenti tra spiagge si fanno in barca, per pochi ringgit.',
    periodoMigliore:
      'da marzo a ottobre, con i mesi migliori da aprile a settembre. **Da novembre a febbraio le isole chiudono quasi completamente** per il monsone di nord-est: le strutture serrano e i traghetti si fermano. È una chiusura vera e propria, più che una bassa stagione.',
    costi:
      'chalet semplici da 25-50€ a notte, speedboat andata e ritorno attorno ai 70 ringgit più la tassa di conservazione marina, immersioni tra le più economiche del sud-est asiatico.',
    erroriDaEvitare: [
      'Programmarle tra novembre e febbraio: sono chiuse, ed è l\'errore che manda a monte interi itinerari',
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
        come: "In speedboat da Kuala Besut, circa 30-40 minuti. Il pagamento della tassa del parco marino si fa all'imbarco.",
        quando: "Da aprile a settembre. Le isole chiudono da novembre a febbraio.",
        tempo: "almeno 2 notti",
        costo: "tassa di conservazione marina da pagare all'arrivo",
        consiglio: "Prenotare chalet e barca in anticipo in alta stagione."
      },
      {
        nome: "Perhentian Kecil e Long Beach",
        testo: "L'isola piccola, con la spiaggia più animata (Long Beach), i bar sulla sabbia e la vita serale. Dall'altra parte, Coral Bay, più tranquilla.",
        come: "Speedboat da Kuala Besut; tra le spiagge con taxi-barca.",
        quando: "Da aprile a settembre.",
        tempo: "almeno 2 notti",
        consiglio: "Chi cerca silenzio deve andare a Coral Bay o a Besar."
      },
      {
        nome: "Shark Point e Turtle Point",
        testo: "Due punti di snorkeling dove si incontrano squali pinna nera di scogliera e tartarughe. In alcuni punti si entra direttamente dalla spiaggia.",
        come: "In barca con gli operatori di snorkeling, mezza giornata.",
        quando: "Al mattino, con l'acqua più limpida.",
        tempo: "mezza giornata",
        consiglio: "Non toccare né inseguire le tartarughe: si guardano senza avvicinarsi."
      },
      {
        nome: "Romantic Beach e le cale solo via mare",
        testo: "Una laguna e cale accessibili solo in barca o con sentieri brevi, con acqua trasparente e pochissima gente.",
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
          "Giorno 2: giro di snorkeling a Shark Point e Turtle Point",
          "Giorno 3: Romantic Beach e ritorno in barca"
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
      "Le isole chiudono da novembre a febbraio per il monsone: controllare le date prima di prenotare.",
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
