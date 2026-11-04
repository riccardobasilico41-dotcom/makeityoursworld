import type { Destinazione } from '@/lib/types'

// Prima uscita portoghese dell'archivio, collegata al viaggio "Lisbona in un
// weekend lungo" (src/content/viaggi/59-lisbona-weekend.md, dati in
// src/content/viaggi-dati/lisbona-weekend.ts), viaggio fatto da Rick. Due destinazioni
// distinte: Lisbona e Sintra, la seconda come gita di un giorno dalla prima.
// visitataPersonalmente è true su entrambe e il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome di
// hotel, ristorante o operatore è stato inventato. Prezzi e orari
// (soprattutto quelli di Sintra) cambiano spesso e vanno riverificati sui
// canali ufficiali prima di partire.

export const destinazioniPortogallo: Destinazione[] = [
  {
    slug: 'lisbona',
    paeseSlug: 'portogallo',
    ordine: 1,
    nome: 'Lisbona',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '3-4 giorni, compresa la gita fuori porta a Sintra',
    visitataPersonalmente: true,
    introduzione:
      'La capitale del Portogallo sta su sette colline affacciate sull\'estuario del Tago. In gran parte è stata ricostruita dopo il terremoto del 1755, che diede forma alla Baixa: il quartiere basso dal disegno regolare illuminista che oggi separa dal fiume i quartieri più antichi e collinari, Alfama e Bairro Alto.',
    percheAndarci:
      'È una città da vivere in verticale, tra salite, miradouros (belvedere) e mezzi storici pensati per le sue colline. In uno spazio compatto ci sono il quartiere più antico e stratificato (Alfama) e il centro commerciale ricostruito dopo il terremoto (Baixa-Chiado). A un\'ora di treno c\'è Sintra, uno dei paesaggi da favola più fotografati d\'Europa.',
    cosaVedere: [
      'L\'Alfama, il quartiere più antico, quasi intatto dopo il terremoto del 1755 grazie alla sua struttura araba di vicoli stretti. Qui si ascolta il fado, il canto tradizionale portoghese, nelle case da fado (casas de fado) sparse tra i vicoli',
      'Il tram 28, la linea storica che attraversa Alfama, Graça, Baixa ed Estrela su vagoni in legno d\'epoca: il modo più classico (e più affollato) di vedere le colline della città da dentro',
      'Belém, sul lungofiume, da dove partirono le grandi spedizioni portoghesi dell\'epoca delle scoperte. Qui ci sono il Mosteiro dos Jerónimos, capolavoro manuelino patrimonio UNESCO, e la Torre de Belém, la fortezza simbolo della città sull\'acqua, anche lei UNESCO',
      'Baixa e Chiado, il centro ricostruito dopo il 1755 su una griglia illuminista, con la Praça do Comércio sul Tago e l\'Elevador de Santa Justa, l\'ascensore panoramico neogotico in ferro battuto',
      'I miradouros, i belvedere sparsi sulle colline: al tramonto il Miradouro da Senhora do Monte e il Miradouro da Graça sono tra i più belli',
      'Sintra, patrimonio UNESCO dal 1995, con il Palácio Nacional da Pena e la Quinta da Regaleira (c\'è la destinazione dedicata)',
    ],
    cosaFare: [
      'Prendere il tram 28 presto la mattina, prima delle 9, per evitare la calca e i borseggiatori che lo hanno reso famoso quanto i suoi panorami',
      'Ascoltare il fado dal vivo, la sera, in una casa da fado dell\'Alfama',
      'Mangiare un pastel de nata alla Pastéis de Belém, la pasticceria originale del 1837, dove è nata la ricetta',
      'Salire ai miradouros al tramonto, con un bicchiere di vino preso in un chiosco all\'aperto (esplanada)',
      'Dedicare una giornata intera a Sintra, partendo il prima possibile (ci sono la destinazione e l\'esperienza dedicate)',
    ],
    doveDormire:
      'Baixa-Chiado è la zona più centrale e pratica, ben collegata con il resto della città. L\'Alfama ha più carattere ed è più vissuta, ma le salite sono più ripide e le strade più strette. Da entrambe si raggiunge a piedi gran parte delle attrazioni del centro.',
    doveMangiare:
      'Il pastel de nata, sfoglia con crema pasticcera e cannella, si trova ovunque, ma è nato alla Pastéis de Belém. Il bacalhau (baccalà) si prepara in centinaia di varianti. Al Bairro Alto e in Alfama si mangiano i petiscos, piccoli piatti da dividere come le tapas spagnole. Nei minuscoli chioschi storici della Baixa si beve la ginjinha, il liquore di amarena servito in bicchierini.',
    comeArrivare:
      'L\'Aeroporto Humberto Delgado (LIS) è a circa 7 km dal centro: con la metro (linea rossa) si arriva in circa 20-25 minuti, oppure ci sono autobus, taxi e app di ride-hailing. Dall\'Italia non c\'è un treno diretto comodo, quindi si arriva quasi sempre in aereo.',
    comeSpostarsi: 'Le salite sono tante, e per questo ci sono i tram storici, le funicolari (elevadores) e l\'Elevador de Santa Justa. Metro, autobus e treni suburbani si pagano con la carta contactless Viva Viagem/Navegante. Il centro si gira bene anche a piedi, con un po\' di fiato in più per le colline.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e molto affollata, soprattutto sul tram 28 e a Sintra; novembre-marzo è mite ma piovoso',
    costi: 'città ancora abbastanza economica per l\'Europa occidentale, anche se i prezzi salgono: pranzo semplice 10-12€, cena normale 15-20€ a testa, biglietto di tram o autobus circa 2€',
    erroriDaEvitare: [
      'Salire sul tram 28 nelle ore centrali sperando in un posto e in un po\' di tranquillità: è tra i mezzi pubblici più affollati d\'Europa e tra i preferiti dai borseggiatori',
      'Organizzare un giro a piedi come se Lisbona fosse in pianura',
      'Andare a Sintra senza partire presto: le code per il Palácio da Pena diventano lunghissime già a metà mattina',
      'Cercare il "vero" pastel de nata solo alla Pastéis de Belém: anche quelli delle pasticcerie di quartiere sono ottimi, e senza fila',
    ],
    confronti: [
      {
        titolo: 'Come arrivare a Sintra da Lisbona',
        introduzione: 'A Sintra si può andare da soli in treno o con un tour organizzato. La differenza principale è quanto tempo si è disposti a passare in coda fra un palazzo e l\'altro.',
        opzioni: [
          {
            nome: 'Treno da Rossio + biglietti online',
            sintesi: 'Treno regionale dalla stazione di Rossio (circa 40 minuti, corse molto frequenti), poi bus locale 434 o salita a piedi fino al Palácio da Pena, con gli ingressi comprati online in anticipo con orario',
            costo: 'treno circa 5€ a tratta, ingressi 15-25€ a sito',
            durata: 'giornata intera, partendo presto',
            pro: ['Costa poco', 'Orari e ritmo si decidono da soli', 'Non si dipende da un gruppo'],
            contro: ['Bus locale e code vanno organizzati da soli', 'Non c\'è una guida storica'],
            perChi: 'chi preferisce muoversi da solo e risparmiare',
          },
          {
            nome: 'Tour organizzato da Lisbona',
            sintesi: 'Transfer in minivan da Lisbona con guida, biglietti "salta fila" compresi e un itinerario che spesso tocca anche Cascais o la Boca do Inferno',
            costo: 'sui 70-100€ a persona',
            durata: 'giornata intera',
            pro: ['Nessuna logistica da organizzare', 'Spesso ingresso prioritario', 'Una guida che racconta la storia'],
            contro: ['Costa di più', 'Il ritmo lo decide il gruppo', 'Resta meno tempo per esplorare da soli'],
            perChi: 'chi non vuole occuparsi di trasporti e code, o ha poco tempo',
          },
        ],
        raccomandazione: 'Con la giornata libera e un minimo di organizzazione, il treno con i biglietti prenotati online è la scelta più efficiente. A Sintra conta poco come ci si arriva: conta partire presto la mattina.',
      },
    ],
    luoghi: [
      {
        "nome": "Alfama e Castelo de São Jorge",
        "testo": "Il quartiere più antico, sopravvissuto quasi intatto al terremoto del 1755, con vicoli, scale, panni stesi e le case da fado. Sopra, il castello medievale con le mura, i giardini e la vista sul Tago e sulla Baixa. In basso la Sé, la cattedrale romanica.",
        "come": "Si sale a piedi dalla Baixa per Rua da Madalena o con il tram 28. Il castello ha un ingresso da Largo do Chão da Feira, con una salita ripida.",
        "quando": "Al mattino presto per il castello, al tramonto per le terrazze. Di sera i locali di fado si riempiono dopo le 20.",
        "tempo": "mezza giornata",
        "url": "https://www.castelodesaojorge.pt/",
        "consiglio": "Perdersi nei vicoli senza mappa e scendere a piedi: la salita è la parte dura, la discesa è facile."
      },
      {
        "nome": "Belém: Mosteiro dos Jerónimos",
        "testo": "Monastero manuelino del Cinquecento, patrimonio UNESCO, con il chiostro a due piani coperto di decorazioni marinare e la tomba di Vasco da Gama in chiesa. Il portale sud è una delle opere più elaborate del Portogallo.",
        "come": "Dal centro con il tram 15 o il treno da Cais do Sodré, circa 15 minuti. La chiesa ha ingresso gratuito, il chiostro si paga.",
        "quando": "Chiuso il lunedì. Arrivare all'apertura, la fila si forma verso le 11.",
        "tempo": "1 ora e mezza",
        "url": "https://www.museusemonumentos.pt/",
        "consiglio": "Comprare il biglietto online per saltare la fila principale; la chiesa si può vedere gratis a parte."
      },
      {
        "nome": "Torre de Belém",
        "testo": "Fortezza manuelina del 1514-1520 sul Tago, patrimonio UNESCO. Il simbolo della città: bastioni, loggia e terrazza con vista sul fiume. Dentro le stanze sono piccole e la salita è stretta.",
        "come": "A 10 minuti a piedi dai Jerónimos lungo il fiume. Il tram 15 e il treno fermano nelle vicinanze.",
        "quando": "Chiusa il lunedì. Controllare sul sito se è aperta: sono possibili lavori. Il tramonto la illumina bene da fuori.",
        "tempo": "45 minuti dentro, più la passeggiata",
        "url": "https://www.museusemonumentos.pt/",
        "consiglio": "Per una foto dalla riva, il lungofiume vicino al Padrão dos Descobrimentos è meglio dell'interno."
      },
      {
        "nome": "Pastéis de Belém",
        "testo": "La pasticceria del 1837 dove si fa il pastel de nata con la ricetta dei monaci dei Jerónimos. La sala interna è un labirinto di sale piastrellate. Si mangiano caldi con cannella e zucchero a velo.",
        "come": "A 5 minuti a piedi dai Jerónimos. Fermate del tram 15 e del treno vicine.",
        "quando": "La fila fuori scorre in fretta: ha un banco per l'asporto. Aperti tutti i giorni, di solito fino a sera.",
        "tempo": "20-30 minuti",
        "url": "https://pasteisdebelem.pt/",
        "consiglio": "Entrare nelle sale interne invece di restare in coda al banco: spesso c'è posto."
      },
      {
        "nome": "Baixa, Chiado e Praça do Comércio",
        "testo": "Il centro ricostruito dopo il 1755 con strade a griglia, la Praça do Comércio aperta sul Tago e l'Arco da Rua Augusta. L'Elevador de Santa Justa, ascensore del 1902, porta a un belvedere sulla città. Il Chiado ha librerie storiche e caffè.",
        "come": "A piedi dalla metro Baixa-Chiado o Terreiro do Paço. L'ascensore è gestito da Carris, con biglietto a parte.",
        "quando": "Mattina per la piazza senza folla. Il belvedere dell'ascensore si riempie nelle ore centrali.",
        "tempo": "mezza giornata",
        "url": "https://www.carris.pt/",
        "consiglio": "Per la vista dall'alto, il Miradouro di Santa Luzia o la terrazza dell'Arco evita la coda dell'ascensore."
      },
      {
        "nome": "Tram 28 e miradouros",
        "testo": "La linea storica gialla che sale per Graça, Alfama, Baixa e Estrela. Per i belvedere: Santa Luzia, Portas do Sol, Senhora do Monte, Graça. Il tram è affollato; i belvedere si raggiungono anche a piedi.",
        "come": "Il tram parte da Martim Moniz o Campo Ourique. Paga la carta Navegante o il biglietto a bordo, più caro.",
        "quando": "Prima delle 9 o dopo le 18, nelle ore centrali è pieno. I miradouros al tramonto.",
        "tempo": "2 ore per il giro",
        "url": "https://www.carris.pt/",
        "consiglio": "Salire al capolinea per avere un posto a sedere."
      },
      {
        "nome": "LX Factory e Cais do Sodré",
        "testo": "LX Factory è un complesso industriale riconvertito sotto il ponte 25 de Abril, con librerie, negozi e ristoranti. Nel vicino Cais do Sodré c'è il Time Out Market, nel mercato della Ribeira, con banchi di cibo di chef.",
        "come": "LX Factory: tram 15 o bus dal centro. Time Out Market: metro Cais do Sodré, a piedi dalla Baixa.",
        "quando": "LX Factory nel pomeriggio e la domenica con il mercato. Il Time Out Market a pranzo, ma è affollato.",
        "tempo": "2 ore",
        "consiglio": "A cena il quartiere di Cais do Sodré, con la Pink Street, è più animato che al Time Out Market."
      },
      {
        "nome": "Oceanário e Parque das Nações",
        "testo": "Uno degli acquari più grandi d'Europa, con una vasca centrale su due piani e habitat dei quattro oceani. Il quartiere moderno costruito per l'Expo 98 ha una passeggiata sul Tago e una funivia.",
        "come": "Metro rossa fino a Oriente, a 10 minuti a piedi. Dall'aeroporto è sulla stessa linea.",
        "quando": "Mattina, con meno scolaresche. Utile nei giorni di pioggia.",
        "tempo": "2-3 ore",
        "url": "https://www.oceanario.pt/",
        "consiglio": "Prenotare online per saltare la fila alla cassa."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Alfama e castello",
          "Pranzo in Baixa",
          "Pomeriggio: Belém, Jerónimos e pastel de nata",
          "Tramonto a un miradouro"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Belém, Baixa e Chiado, fado la sera",
          "Giorno 2: Alfama, tram 28 e miradouros, LX Factory"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Alfama e Baixa",
          "Giorno 2: Belém e LX Factory",
          "Giorno 3: gita a Sintra, rientro per cena"
        ]
      }
    ],
    zone: [
      {
        "nome": "Baixa e Chiado",
        "perChi": "chi vuole comodità",
        "testo": "Centrale, in piano e vicina a metro e treni. Rumorosa la sera e cara. Pochi locali di quartiere."
      },
      {
        "nome": "Alfama e Graça",
        "perChi": "chi cerca atmosfera",
        "testo": "Vicoli, fado, belvedere. Salite e scale, taxi difficili, notti con musica alta."
      },
      {
        "nome": "Príncipe Real, Estrela e Campo de Ourique",
        "perChi": "chi cerca quartieri residenziali",
        "testo": "Più tranquilli, con giardini e bei negozi. Più lontani dal fiume."
      }
    ],
    sapori: [
      {
        "nome": "Pastel de nata",
        "testo": "Pasta sfoglia con crema pasticcera, tiepido e con cannella."
      },
      {
        "nome": "Bacalhau à Brás",
        "testo": "Baccalà sfilacciato con uova, patate fritte e cipolla."
      },
      {
        "nome": "Bifana",
        "testo": "Panino con maiale marinato in vino bianco e aglio, da chioschi e bar."
      },
      {
        "nome": "Sardine alla griglia",
        "testo": "Specialità di giugno, per i Santos Populares."
      },
      {
        "nome": "Ginjinha",
        "testo": "Liquore di amarena servito in un bicchierino, nei chioschi della Baixa."
      }
    ],
    attenzioni: [
      "Borseggiatori sul tram 28, in metro e nelle zone turistiche: tenere zaino e telefono davanti.",
      "In Baixa e Bairro Alto chi vi si avvicina offrendo hashish o altre droghe è molto comune: dire di no e andare avanti.",
      "Al ristorante il «couvert» (pane, olive, formaggio) portato in tavola è a pagamento se lo si tocca: rifiutarlo se non lo si vuole.",
      "Tuk-tuk e taxi fuori dalle zone turistiche: concordare il prezzo prima, o usare le app.",
      "Tassa di soggiorno comunale a notte, pagata in hotel e soggetta a variazioni (verificare l'importo attuale).",
      "Scioperi di metro, treni e Carris, avvisati in anticipo: controllare le notizie nei giorni di spostamento."
    ],
    esperienzeSlugs: ['tram-28-alfama', 'pasteis-de-belem'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il tram 28 giallo illuminato di sera in una strada stretta di Lisbona, con la facciata bianca di una chiesa in fondo alla via',
    immagine: '/images/portogallo/lisbona.jpg',
  },
  {
    slug: 'sintra',
    paeseSlug: 'portogallo',
    ordine: 2,
    nome: 'Sintra',
    tipologia: ['storia', 'natura', 'arte'],
    giorniConsigliati: 'una giornata intera, come gita da Lisbona',
    visitataPersonalmente: true,
    introduzione:
      'Una cittadina fra colline boscose, circa 30 km a nord-ovest di Lisbona, patrimonio UNESCO dal 1995 come "Paesaggio culturale di Sintra". Per secoli ci hanno passato l\'estate la nobiltà e la famiglia reale portoghese, che vi hanno costruito palazzi e ville romantiche in una concentrazione unica in Europa, in un microclima più fresco e umido di quello di Lisbona.',
    percheAndarci:
      'Il Palácio Nacional da Pena, con le torri colorate in stile romantico ottocentesco in cima a una collina, è uno dei paesaggi più fotografati del Portogallo. La Quinta da Regaleira, con il pozzo iniziatico a spirale e i giardini esoterici, è tra le cose più insolite del paese. Per via delle code, però, è anche una delle giornate più impegnative di tutto l\'itinerario.',
    cosaVedere: [
      'Il Palácio Nacional da Pena, palazzo reale romantico dell\'Ottocento che mescola elementi gotici, manuelini, moreschi e rinascimentali, giallo e rosso acceso, in cima a una collina sopra la città',
      'La Quinta da Regaleira, villa con giardino esoterico di inizio Novecento, famosa per il "Poço Iniciático" (pozzo iniziatico): una scala a spirale che scende sottoterra tra simboli massonici e templari',
      'Il Castelo dos Mouros, le rovine del castello moresco del IX secolo, con vista su Sintra e, nelle giornate limpide, fino all\'oceano',
      'Il Palácio Nacional de Sintra, in centro, con le due enormi ciminiere coniche bianche che si vedono da tutta la valle',
      'Il centro storico di Sintra, piccolo e pedonale, con pasticcerie storiche note per i travesseiros (dolci di sfoglia ripieni di crema di mandorle) e le queijadas',
    ],
    cosaFare: [
      'Prendere il primo treno utile da Lisbona per essere tra i primi in coda al Palácio da Pena: è il consiglio che ripete chiunque abbia già fatto questa gita',
      'Prenotare online, prima di partire, i biglietti a fascia oraria per Pena e Regaleira, senza contare sull\'acquisto sul posto',
      'Usare il bus locale 434 tra la stazione, il centro e il Palácio da Pena, invece di fare a piedi la salita ripida nelle giornate calde',
      'Scendere nel pozzo iniziatico della Quinta da Regaleira, uno dei punti più fotografati e affollati: anche qui bisogna mettere in conto l\'attesa',
    ],
    doveDormire: 'Si visita in giornata da Lisbona, senza dormire a Sintra.',
    doveMangiare: 'Travesseiros e queijadas, i dolci tipici, in una delle pasticcerie storiche del centro. Per il resto ci sono soprattutto locali turistici intorno alla stazione e nel centro pedonale.',
    comeArrivare:
      'Con il treno regionale dalla stazione di Rossio a Lisbona: circa 40 minuti, con corse molto frequenti durante il giorno. È molto più semplice ed economico dell\'auto a noleggio, anche perché nel centro di Sintra, nei fine settimana e in alta stagione, il parcheggio scarseggia.',
    comeSpostarsi: 'Il bus locale 434 fa un giro circolare tra stazione, centro storico e Palácio da Pena. Il centro pedonale si gira a piedi, ma fra i siti principali (Pena, Regaleira, Castelo dos Mouros) si sale sempre, e le distanze sono più lunghe di quanto sembri sulla mappa.',
    periodoMigliore:
      'il clima va bene tutto l\'anno; il problema è la folla. Nei weekend e in alta stagione (giugno-agosto) le code ai palazzi principali diventano lunghissime già dalla tarda mattinata. In un giorno feriale, partendo il prima possibile, l\'attesa si riduce di molto in qualsiasi stagione.',
    costi: 'Palácio da Pena circa 20-25€, Quinta da Regaleira circa 15€, con sconti sui biglietti combinati; treno da Lisbona circa 5€ a tratta',
    erroriDaEvitare: [
      'Arrivare a metà mattina pensando di "fare tutto con calma": le code al Palácio da Pena e alla Quinta da Regaleira si allungano in fretta dopo le 10-11',
      'Non prenotare online i biglietti a fascia oraria: in alta stagione gli orari della mattina finiscono',
      'Sottovalutare distanze e dislivelli tra un sito e l\'altro: non è un centro compatto come Lisbona',
      'Voler vedere tutti e quattro i siti principali (Pena, Regaleira, Castelo dos Mouros, Palácio Nacional) in una giornata: con le code vere, di solito almeno uno va sacrificato',
    ],
    luoghi: [
      {
        "nome": "Palácio Nacional da Pena",
        "testo": "Palazzo romantico dell'Ottocento voluto da Ferdinando II sulla cima di una collina, giallo e rosso, con torri, merli e decorazioni moresche e manueline. Dentro le stanze sono arredate com'erano alla fine dell'Ottocento. Intorno c'è un parco di 85 ettari.",
        "come": "Dalla stazione il bus 434 sale fino all'ingresso in circa 15 minuti. A piedi la salita è ripida, circa 45 minuti. Ingresso con biglietto a fascia oraria.",
        "quando": "Primo orario della mattina. Dopo le 10:30 la coda si allunga. Biglietti online su Parques de Sintra.",
        "tempo": "2-3 ore con il parco",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Il parco da solo si visita senza fila al palazzo e ha punti panoramici: utile se le code sono troppo lunghe."
      },
      {
        "nome": "Quinta da Regaleira",
        "testo": "Villa neogotica di inizio Novecento con un giardino pieno di simboli, grotte e gallerie. Il Poço Iniciático è un pozzo a spirale di 27 metri con nove livelli, collegato a tunnel che escono in un laghetto.",
        "come": "A 10 minuti a piedi dal centro di Sintra, in salita lieve. Il biglietto si compra alla biglietteria o online.",
        "quando": "Mattina presto o primo pomeriggio. Il pozzo si riempie verso le 11.",
        "tempo": "2 ore",
        "url": "https://www.regaleira.pt/",
        "consiglio": "Scendere nel pozzo con scarpe che non scivolano e tornare per i tunnel: l'uscita è più bella della discesa."
      },
      {
        "nome": "Castelo dos Mouros",
        "testo": "Rovine di una fortezza medievale del IX-X secolo sulla cresta sopra Sintra, con mura e torri collegate da camminamenti. Dall'alto si vedono la Pena, la città e l'oceano.",
        "come": "Dal centro a piedi in circa 40 minuti, oppure con il bus 434 fino alla fermata del castello. Tratti di scale su pietra irregolare.",
        "quando": "Mattina, con meno vento. Con nebbia il panorama non si vede.",
        "tempo": "1-1 ora e mezza",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Se si ha tempo per un solo castello o palazzo oltre alla Pena, qui la folla è minore."
      },
      {
        "nome": "Palácio Nacional de Sintra",
        "testo": "Il palazzo reale in centro, riconoscibile dai due camini conici bianchi delle cucine. Dentro ci sono la sala dei Cigni, la sala delle Gazze e una grande raccolta di azulejos dal Quattrocento.",
        "come": "A piedi dalla stazione in 10 minuti. È sulla piazza principale della città.",
        "quando": "Prima del pranzo; la piazza di sera è più tranquilla.",
        "tempo": "1 ora",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Visitarlo se si va in città nel pomeriggio: meno coda della Pena."
      },
      {
        "nome": "Cabo da Roca",
        "testo": "Il punto più occidentale dell'Europa continentale, su una scogliera di 140 metri sull'Atlantico, con un faro e una targa con i versi di Camões.",
        "come": "Dal centro di Sintra con il bus 403 (verso Cascais) in circa 40 minuti, o in auto in 20.",
        "quando": "Al tramonto con vento forte; portare una giacca anche d'estate.",
        "tempo": "1 ora",
        "consiglio": "Il certificato di visita si compra al piccolo ufficio turistico: è un ricordo, non obbligatorio."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Treno da Rossio, partenza prima delle 8",
          "Palácio da Pena all'apertura",
          "Castelo dos Mouros o Regaleira in tarda mattinata",
          "Pranzo in centro con un travesseiro",
          "Treno di rientro nel pomeriggio"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Pena, Castelo dos Mouros, centro storico",
          "Giorno 2: Regaleira, Palácio Nacional, Cabo da Roca al tramonto"
        ]
      }
    ],
    zone: [
      {
        "nome": "Gita da Lisbona",
        "perChi": "la maggior parte dei visitatori",
        "testo": "Treno da Rossio in 40 minuti, rientro in serata. Ritmo serrato con le code, ma costo basso."
      },
      {
        "nome": "Sintra, centro storico",
        "perChi": "chi vuole vedere la città senza folla",
        "testo": "Dormire in paese permette di vedere Pena all'apertura e il centro la sera. Pochi alberghi e prezzi alti."
      }
    ],
    sapori: [
      {
        "nome": "Travesseiro",
        "testo": "Sfoglia ripiena di crema di mandorle e uova, dolce simbolo di Sintra, alla pasticceria Piriquita."
      },
      {
        "nome": "Queijada",
        "testo": "Dolcetto di formaggio fresco, uova e cannella."
      },
      {
        "nome": "Vinho de Colares",
        "testo": "Vino di una zona sabbiosa vicino al mare, con viti non innestate."
      },
      {
        "nome": "Pastel de nata",
        "testo": "Presente in ogni pasticceria."
      },
      {
        "nome": "Bacalhau",
        "testo": "Baccalà in diverse versioni nei ristoranti del centro."
      }
    ],
    attenzioni: [
      "I biglietti per Pena e Regaleira sono a orario: comprarli online prima di partire, in alta stagione la mattina finisce.",
      "Il bus 434 viene preso d'assalto tra le 10 e le 14: salire alla stazione per avere posto.",
      "Taxi e tuk-tuk chiedono tariffe elevate: concordare il prezzo prima.",
      "Parcheggio quasi impossibile in centro nei fine settimana: meglio il treno.",
      "Zaini grandi non sempre entrano nei palazzi: lasciare il bagaglio a Lisbona.",
      "Nebbia e umidità frequenti: portare una giacca impermeabile."
    ],
    esperienzeSlugs: ['sintra-giornata-da-lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il Palácio Nacional da Pena di Sintra con le torri gialle e rosse che emergono dal bosco sotto un cielo azzurro',
    immagine: '/images/portogallo/sintra.jpg',
  },
]
