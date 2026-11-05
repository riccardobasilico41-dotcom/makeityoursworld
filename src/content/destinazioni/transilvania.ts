import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Transilvania Express in 5 giorni" (src/content/viaggi/10-transilvania-express.md).

export const destinazioniTransilvania: Destinazione[] = [
  {
    slug: 'bucarest',
    paeseSlug: 'transilvania',
    ordine: 1,
    nome: 'Bucarest',
    tipologia: ['città', 'storia'],
    giorniConsigliati: '1 giorno all\'arrivo, 1-2 al rientro',
    visitataPersonalmente: true,
    introduzione: 'Il punto di arrivo e di rientro del viaggio: il Palazzo del Parlamento, il quartiere storico di Lipscani e, l\'ultimo giorno, le Terme.',
    percheAndarci: 'Per il Palazzo del Parlamento, uno degli edifici amministrativi più grandi al mondo, e l\'atmosfera del centro storico di Lipscani.',
    cosaVedere: ['Il Palazzo del Parlamento', 'Il Romanian Athenaeum', 'Il quartiere storico di Lipscani'],
    cosaFare: [
      'Visita guidata al Palazzo del Parlamento (c\'è una scheda esperienza dedicata)',
      'Walking tour serale con guida locale',
      'Cena tipica da Caru\' cu Bere, con spettacoli folk',
      'Terme di Bucarest l\'ultimo giorno (c\'è una scheda esperienza dedicata)',
    ],
    doveDormire:
      'All\'arrivo abbiamo dormito all\'Hotel Duke Romana (zona Piața Romană), un 3 stelle con recensioni miste ma nel complesso positive: colazione buona, letti comodi e buon rapporto qualità-prezzo, con qualche lamentela sulle camere mansardate. Al rientro, all\'Hotel Continental Forum (zona Palazzo del Parlamento), un 4 stelle, con recensioni molto positive su colazione, staff e camere.\n\nAlternative arrivo: economiche: Hello Hotels Bucharest, Trianon Hotel · fascia media: Casa Mendeleev · lusso (contenuto): Epoque Hotel, Grand Hotel Continental.\n\nAlternative rientro: economiche: Hotel Parliament, Volo Hotel Bucharest · fascia media: Filitti Boutique Hotel · lusso (contenuto): Radisson Blu Hotel Bucharest, JW Marriott Bucharest Grand Hotel.',
    doveMangiare: 'Caru\' cu Bere per la cena di benvenuto; Hanu\' lui Manuc o Excalibur per la cena di arrivederci.',
    usciteSerali: 'Il quartiere di Lipscani, pieno di bar e locali con musica fino a tardi; Freddo, St. Patrick, il giardino di Grădina Dorobanți.',
    comeArrivare: 'Volo internazionale su Bucarest, poi taxi dall\'aeroporto (meglio taxi ufficiali o app di trasporto).',
    comeSpostarsi: 'A piedi in centro, Uber, Bolt o taxi per il resto.',
    periodoMigliore: 'ponte di Halloween o inizio novembre',
    costi: 'Biglietti di Palazzo del Parlamento, Ateneo Romeno e Terme sui siti ufficiali.',
    erroriDaEvitare: ['Restare senza contanti: conviene prelevare appena atterrati, perché alcuni locali tipici preferiscono i contanti in lei'],
    miaEsperienza:
      'Il Palazzo del Parlamento, con le sue dimensioni fuori scala, racconta la megalomania del regime di Ceaușescu prima ancora di entrare. È stata una delle visite guidate più impressionanti del viaggio.',
    luoghi: [
      {
        nome: "Palazzo del Parlamento",
        testo: "Un edificio enorme, voluto da Ceaușescu e costruito tra il 1984 e il 1997 dopo la demolizione di una vasta parte del vecchio centro: 365.000 m², considerato l'edificio più pesante del mondo. Si visita solo con tour guidato, tra sale di marmo, lampadari e tappeti giganti.",
        come: "Ingresso visitatori indicato sul sito ufficiale. Portare il passaporto e prenotare in anticipo.",
        quando: "Mattina nei giorni feriali; le sale di rappresentanza possono essere chiuse per eventi.",
        tempo: "1-1,5 ore",
        costo: "tariffe dei tour sul sito ufficiale",
        consiglio: "Le dimensioni fuori scala raccontano la megalomania del regime già prima di entrare."
      },
      {
        nome: "Ateneo Romeno",
        testo: "La sala concerti neoclassica del 1888, con la cupola e l'affresco circolare che racconta la storia della Romania. Casa dell'orchestra Filarmonica George Enescu.",
        come: "A piedi, a Piața Revoluției.",
        quando: "Mattina o sera di concerto.",
        tempo: "30-45 minuti",
        costo: "biglietti e concerti sul sito ufficiale",
        consiglio: "Se possibile, assistere a un concerto: l'acustica è eccellente."
      },
      {
        nome: "Città Vecchia (Lipscani)",
        testo: "Il quartiere storico di vicoli, locali e vecchi han, oggi il cuore dei ristoranti e della vita serale. Di giorno è tranquillo, di sera esplode di musica.",
        come: "A piedi, vicino a Piața Unirii.",
        quando: "Sera.",
        tempo: "2 ore",
        consiglio: "Controllare i prezzi dei menu: alcuni locali sono pensati per turisti."
      },
      {
        nome: "Caru' cu Bere",
        testo: "Nata come birreria nel 1879, dal 1899 è in un edificio neogotico con interni Art Nouveau e soffitti dipinti; è monumento storico e serve cucina romena tradizionale.",
        come: "In pieno centro, Strada Stavropoleos.",
        quando: "Cena; prenotare.",
        tempo: "1,5-2 ore",
        url: "https://www.carucubere.ro",
        consiglio: "Provare i sarmale e il papanași."
      },
      {
        nome: "Museo del Villaggio",
        testo: "Un museo all'aperto aperto nel 1936, con molti edifici contadini dal Seicento al Novecento portati da tutte le regioni della Romania. Si capisce bene l'architettura rurale.",
        come: "Nel parco Re Michele I (ex Herăstrău), a nord del centro, in metro o bus.",
        quando: "Mattina; il parco è piacevole.",
        tempo: "1,5-2 ore",
        url: "https://www.muzeul-satului.ro",
        consiglio: "Combinare con una passeggiata nel parco Herăstrău."
      },
      {
        nome: "Terme di Bucarest (Therme)",
        testo: "Il grande parco termale e acquatico alle porte della città, con piscine, saune e scivoli. Comodo per riposare l'ultimo giorno.",
        come: "In taxi o navetta da Bucarest: come arrivare sul sito ufficiale.",
        quando: "Giornata intera, specie l'ultimo giorno.",
        tempo: "giornata intera",
        costo: "tariffe sul sito ufficiale",
        url: "https://therme.ro",
        consiglio: "Prenotare online per saltare la fila."
      }
    ],
    sapori: [
      {
        nome: "Sarmale",
        testo: "Involtini di cavolo ripieni di carne e riso, serviti con panna acida."
      },
      {
        nome: "Mici",
        testo: "Salsicce speziate alla griglia, da mangiare con senape."
      },
      {
        nome: "Papanași",
        testo: "Ciambelline fritte con panna acida e marmellata di frutti di bosco."
      },
      {
        nome: "Ciorbă",
        testo: "Zuppa acida tradizionale, in versione di trippa o di verdure."
      }
    ],
    attenzioni: [
      "Taxi: usare Bolt, Uber o i taxi ufficiali con tariffa esposta.",
      "Per guidare in Romania serve la vignetta stradale (rovinieta), da avere prima di mettersi in strada.",
      "Borseggiatori alla Gara de Nord e in metro.",
      "Il Palazzo del Parlamento richiede il passaporto: portarlo."
    ],
    esperienzeSlugs: ['palazzo-parlamento', 'terme-bucarest'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'Il Palazzo del Parlamento di Bucarest, Romania',
    immagine: '/images/transilvania/bucarest-stock.jpg',
  },
  {
    slug: 'peles-bran',
    paeseSlug: 'transilvania',
    ordine: 2,
    nome: 'Castello di Peleș e Castello di Bran',
    tipologia: ['storia', 'castelli'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'Il Castello di Peleș, forse il più bello del viaggio per architettura, e il Castello di Bran, il famoso "Castello di Dracula".',
    percheAndarci: 'Per vedere nella stessa giornata due dei castelli più famosi della Romania: lo sfarzo neorinascimentale di Peleș e l\'aria gotica di Bran.',
    cosaVedere: [
      'Il Castello di Peleș, residenza estiva di Carlo I',
      'Il Monastero di Sinaia',
      'Il Castello di Bran, la fortezza medievale sulla roccia',
      'Il Castello di Cantacuzino (sosta fotografica facoltativa)',
    ],
    cosaFare: [
      'Visita al Castello di Peleș, primo e secondo piano (c\'è una scheda esperienza dedicata)',
      'Visita al Castello di Bran (c\'è una scheda esperienza dedicata)',
    ],
    doveDormire: 'Qui non abbiamo dormito: era una tappa di passaggio tra Bucarest e Brașov.',
    doveMangiare: 'Restaurant Bucegi (con terrazza) a Sinaia, oppure pranzo al sacco o street food per guadagnare tempo.',
    comeArrivare: 'In auto da Bucarest a Sinaia, poi da Sinaia a Bran.',
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'mattina, per evitare la ressa ai castelli',
    costi: 'Biglietti e tariffe di Peleș e Bran sui siti ufficiali.',
    erroriDaEvitare: ['Fidarsi dei prezzi delle bancarelle e dei ristoranti intorno al Castello di Bran: sono trappole per turisti'],
    miaEsperienza:
      'Per architettura Peleș è forse il castello più bello del viaggio, con interni curati fin nei dettagli come Bran, per quanto affascinante, non è. Il legame di Bran con Dracula è più un\'invenzione turistica che un fatto storico, ma il castello vale la visita anche da solo.',
    luoghi: [
      {
        nome: "Castello di Peleș",
        testo: "Residenza estiva di Carlo I, re di Romania, costruita tra il 1873 e il 1914 in stile neorinascimentale tedesco. Per architettura è forse il castello più bello del viaggio, con interni curati nei minimi dettagli.",
        come: "Da Bucarest a Sinaia; dal centro di Sinaia si sale a piedi.",
        quando: "Mattina presto, per evitare la ressa. Chiuso dal 2 novembre al 1° dicembre 2026 per pulizie e conservazione. Chiuso lunedì e martedì; mercoledì 10-17, giovedì-domenica 9:15-17, ultimo ingresso alle 16.",
        tempo: "1,5 ore",
        costo: "100 lei adulti, piano terra e primo piano (2026)",
        url: "https://peles.ro",
        consiglio: "I biglietti, su bilete.peles.ro, hanno una fascia oraria e non si possono spostare."
      },
      {
        nome: "Monastero di Sinaia",
        testo: "Il monastero fondato nel 1695 che dà il nome alla città, con la chiesa vecchia e quella nuova. Una sosta breve prima di Peleș.",
        come: "A piedi dal centro di Sinaia.",
        quando: "Mattina.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        consiglio: "Silenzio all'interno."
      },
      {
        nome: "Castello di Bran",
        testo: "La fortezza sulla roccia, documentata dal 1377, famosa per il legame con Dracula. In realtà il legame è più un'invenzione turistica che un fatto storico, ma il castello vale la visita anche da solo.",
        come: "A sud-ovest di Brașov, in auto. Biglietti sul sito ufficiale.",
        quando: "Mattina presto; il lunedì apre alle 12, gli altri giorni alle 9. Chiude alle 19 da aprile a ottobre, alle 18 da novembre a marzo.",
        tempo: "1-1,5 ore",
        costo: "100 lei adulti, visita standard (novembre-dicembre 2026); spesso esaurito: meglio online",
        url: "https://www.bran-castle.com",
        consiglio: "Il castello non ha mai ospitato Vlad l'Impalatore: il legame con Dracula è nato per il turismo."
      },
      {
        nome: "Castello Cantacuzino a Bușteni",
        testo: "Un castello in stile neobrâncovenesc del 1911 ai piedi dei Bucegi. Sosta fotografica facoltativa sulla strada.",
        come: "In auto o treno, a Bușteni, poco dopo Sinaia.",
        quando: "Giorno.",
        tempo: "30 minuti",
        consiglio: "Solo per chi ha tempo."
      }
    ],
    sapori: [
      {
        nome: "Pranzo a Sinaia",
        testo: "Ristorante Bucegi con terrazza, oppure pranzo al sacco per guadagnare tempo."
      }
    ],
    attenzioni: [
      "Mattina presto: i castelli si riempiono di gruppi in tarda mattinata.",
      "Peleș è chiuso il lunedì e il martedì; Bran il lunedì apre solo alle 12. Biglietti sui siti ufficiali."
    ],
    esperienzeSlugs: ['castello-peles', 'castello-bran'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'Il Castello di Bran, il "Castello di Dracula", in Transilvania, Romania',
    immagine: '/images/copertine/transilvania-express.jpg',
  },
  {
    slug: 'brasov',
    paeseSlug: 'transilvania',
    ordine: 3,
    nome: 'Brașov',
    tipologia: ['storia', 'natura'],
    giorniConsigliati: '1 giorno e una notte',
    visitataPersonalmente: true,
    introduzione: 'La Fortezza di Râșnov in cima a una rocca, la scritta cittadina in stile hollywoodiano e il centro storico con Piața Sfatului e la Chiesa Nera.',
    percheAndarci: 'Per la Fortezza di Râșnov, molto meno affollata del Castello di Bran e bella quanto lui, con un\'atmosfera più epica che vampiresca.',
    cosaVedere: [
      'La Fortezza di Râșnov',
      'La scritta "RASNOV" in stile hollywoodiano',
      'Piața Sfatului e la Torre dell\'Orologio',
      'La Chiesa Nera (Biserica Neagră), la grande chiesa gotica della città',
    ],
    cosaFare: ['Fortezza di Râșnov (c\'è una scheda esperienza dedicata)', 'Passeggiata nel centro storico'],
    doveDormire:
      'Curtea Brașoveana, a piedi dal centro storico, con ottime recensioni: staff molto disponibile, camere pulite, bel giardino.\n\nAlternative: economiche: Drachenhaus, Pensiunea Casa Cranta · fascia media: Vila Katharina · lusso (contenuto): Casa Wagner, Radisson Blu Aurum Hotel Brașov.',
    doveMangiare: 'Sergiana (zuppe fumanti in pagnotte scavate, stufati alla paprika) o Casa Românească; dopocena al Deane\'s Irish Pub & Grill o al Musik Cafe.',
    comeArrivare: 'Poco distante da Bran, in auto.',
    comeSpostarsi: 'A piedi in centro; in auto fino a Râșnov.',
    periodoMigliore: 'tardo pomeriggio, per la luce sulla rocca',
    costi: 'I prezzi di Sergiana non me li sono segnati; vino e palinka però costano più della media.',
    erroriDaEvitare: ['Non prenotare per tempo i ristoranti tipici più piccoli'],
    miaEsperienza:
      'La Fortezza di Râșnov, con la scritta "RASNOV" in stile hollywoodiano che si vede dalla rocca, ha un\'atmosfera più da Signore degli Anelli che da Dracula. È stata una delle chicche meno turistiche di tutto il viaggio.',
    luoghi: [
      {
        nome: "Piața Sfatului",
        testo: "La piazza centrale, con la Casa del Consiglio e la Torre dell'Orologio, circondata da case barocche colorate e caffè. Qui nel Medioevo si decidevano i destini della città.",
        come: "A piedi, dal centro.",
        quando: "Mattino e sera, quando si illumina.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Pranzo con zuppa in pagnotta da Sergiana."
      },
      {
        nome: "Chiesa Nera (Biserica Neagră)",
        testo: "La principale chiesa gotica della Romania, iniziata nel 1383 e completata nel Quattrocento. Ha un organo Buchholz del 1839 con circa 4.000 canne e la più grande collezione di «tappeti transilvani», tappeti anatolici donati dai mercanti sassoni tra Quattro e Seicento.",
        come: "A piedi dalla Piața Sfatului.",
        quando: "Mattina.",
        tempo: "45 minuti",
        consiglio: "I concerti d'organo estivi sono un'ottima occasione per vederla."
      },
      {
        nome: "Monte Tâmpa e scritta BRAȘOV",
        testo: "La collina sopra il centro con la scritta in stile hollywoodiano e una funivia. Dall'alto si vede l'intera città.",
        come: "Funivia o sentiero a piedi.",
        quando: "Tardo pomeriggio.",
        tempo: "1,5-2 ore",
        consiglio: "La salita a piedi è facile ma ripida in alcuni punti."
      },
      {
        nome: "Strada Sforii",
        testo: "Un vicolo largo poco più di un metro, considerato tra i più stretti d'Europa, che collega due vie. Una curiosità veloce nel centro.",
        come: "A piedi, vicino alla Porta Șchei.",
        quando: "Giorno.",
        tempo: "10 minuti",
        costo: "ingresso libero",
        consiglio: "Da combinare con un giro in centro."
      },
      {
        nome: "Fortezza di Râșnov",
        testo: "Una cittadella contadina fortificata, con la scritta «RASNOV» in stile hollywoodiano visibile dalla rocca. L'atmosfera è più da Signore degli Anelli che da Dracula, ed è tra le chicche meno turistiche del viaggio.",
        come: "Poco fuori Brașov, nella cittadina di Râșnov; si sale a piedi o con i mezzi in funzione sul posto.",
        quando: "Tardo pomeriggio, per la luce sulla rocca.",
        tempo: "1,5-2 ore",
        consiglio: "Una cittadella contadina: serviva da rifugio agli abitanti durante le guerre."
      }
    ],
    sapori: [
      {
        nome: "Zuppa in pagnotta",
        testo: "Ciorbă servita dentro un pane scavato, specialità dei ristoranti tradizionali di Brașov."
      },
      {
        nome: "Stufati alla paprika",
        testo: "Piatti di carne tradizionali delle osterie locali."
      },
      {
        nome: "Vino e palinka",
        testo: "Costano più della media locale."
      }
    ],
    attenzioni: [
      "Prezzi: il vino e la palinka nei locali del centro sono sopra la media.",
      "Fortezza di Râșnov e Brașov sono vicine: organizzare in una giornata.",
      "D'inverno ghiaccio sul sentiero di Tâmpa."
    ],
    esperienzeSlugs: ['fortezza-rasnov'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'La Fortezza di Râșnov su una rocca vicino a Brașov, Romania',
    immagine: '/images/transilvania/brasov-stock.jpg',
  },
  {
    slug: 'sighisoara-salina-turda',
    paeseSlug: 'transilvania',
    ordine: 4,
    nome: 'Sighișoara e Salina Turda',
    tipologia: ['storia', 'unesco'],
    giorniConsigliati: '1 giorno, il più lungo al volante',
    visitataPersonalmente: true,
    introduzione: 'Il borgo medievale UNESCO di Sighișoara, casa natale del Conte Dracula, e le saline sotterranee di Salina Turda.',
    percheAndarci: 'Per Salina Turda, una delle cose più sorprendenti di tutto il viaggio, e per le vie acciottolate di Sighișoara.',
    cosaVedere: [
      'La Torre dell\'Orologio di Sighișoara',
      'La casa natale del Conte Dracula',
      'The Covered Stairway, la scalinata coperta in legno',
      'Il laghetto sotterraneo di Salina Turda',
      'Il villaggio sassone di Viscri, con la sua Chiesa Fortificata UNESCO (tappa facoltativa)',
    ],
    cosaFare: [
      'Salita alla Torre dell\'Orologio e alla casa natale di Dracula',
      'Salita alla parte alta della città lungo The Covered Stairway',
      'Visita a Salina Turda, con biliardino, ping pong e barchette sul laghetto (c\'è una scheda esperienza dedicata)',
      'Tappa facoltativa a Viscri e alla sua Chiesa Fortificata',
    ],
    doveDormire: 'Qui non abbiamo dormito: era una giornata di passaggio verso Sibiu.',
    doveMangiare: 'Gasthaus Altepost o Vlad Dracul Restaurant a Sighișoara.',
    comeArrivare: 'In auto da Brașov a Viscri, poi verso Sighișoara e da lì a Salina Turda.',
    comeSpostarsi: 'Auto a noleggio; a piedi nei centri storici.',
    periodoMigliore: 'partenza presto: è la giornata più lunga al volante del viaggio',
    costi: 'Biglietti di Viscri, casa natale e Salina Turda sul posto o sui siti ufficiali; la guida a Salina Turda si paga a parte.',
    erroriDaEvitare: ['Sforare con i tempi: è la giornata più lunga al volante di tutto il viaggio'],
    miaEsperienza:
      'Salina Turda è stata una delle sorprese più belle del viaggio. Da una miniera di sale non mi aspettavo di scendere e trovare un laghetto navigabile, e perfino un biliardino.',
    luoghi: [
      {
        nome: "Cittadella di Sighișoara e Torre dell'Orologio",
        testo: "Una delle ultime cittadelle medievali abitate d'Europa, patrimonio UNESCO dal 1999. La Torre dell'Orologio, alta 64 metri, ospita dal 1898 il Museo di storia, con vista sulla città.",
        come: "A piedi dal parcheggio in basso; vicoli ripidi.",
        quando: "Mattina presto, quando è tranquilla.",
        tempo: "2 ore",
        consiglio: "Salire sulla torre per la vista: le case colorate dall'alto."
      },
      {
        nome: "Casa natale di Dracula e Scalinata Coperta",
        testo: "La casa dove sarebbe nato Vlad Țepeș e la lunga scala coperta di legno che sale alla chiesa sulla collina. Una breve tappa tra le case colorate.",
        come: "A piedi nella cittadella.",
        quando: "Mattina.",
        tempo: "1 ora",
        costo: "biglietto sul posto",
        consiglio: "Abbinarla alla salita sulla Scalinata Coperta."
      },
      {
        nome: "Viscri e Chiesa Fortificata",
        testo: "Un villaggio sassone con una chiesa fortificata patrimonio UNESCO, ben conservato. Visita facoltativa lungo il percorso.",
        come: "In auto da Brașov, verso Sighișoara.",
        quando: "Mattina.",
        tempo: "1-1,5 ore",
        costo: "biglietto sul posto",
        consiglio: "Tappa facoltativa ma molto autentica."
      },
      {
        nome: "Salina Turda",
        testo: "Una miniera di sale che oggi è un parco sotterraneo, con un lago sotterraneo, un ascensore panoramico, la sala dell'eco e un antico argano ancora al suo posto. È stata una delle sorprese più belle del viaggio.",
        come: "In auto da Sighișoara. Biglietti all'ingresso o online.",
        quando: "Tutti i giorni 9-17, ultimo ingresso 16:20; gruppi numerosi nel weekend.",
        tempo: "2 ore",
        costo: "75 lei dal lunedì al venerdì, 90 nel weekend e festivi (2026); guida su richiesta 205 lei",
        url: "https://salinaturda.eu",
        consiglio: "Vestirsi a strati: dentro la temperatura è bassa tutto l'anno."
      }
    ],
    sapori: [
      {
        nome: "Cucina della cittadella",
        testo: "Piatti locali nei ristoranti di Sighișoara, comodi per il pranzo."
      },
      {
        nome: "Mămăligă",
        testo: "Polenta con formaggio e panna acida, servita nei ristoranti locali."
      }
    ],
    attenzioni: [
      "È la giornata più lunga al volante: partire presto.",
      "I biglietti per Salina Turda si comprano all'ingresso o online.",
      "Parcheggiare fuori dalla cittadella di Sighișoara."
    ],
    esperienzeSlugs: ['salina-turda'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'Le case colorate e le vie acciottolate del centro storico di Sighișoara, Romania',
    immagine: '/images/transilvania/sighisoara-stock.jpg',
  },
  {
    slug: 'sibiu-transfagarasan',
    paeseSlug: 'transilvania',
    ordine: 5,
    nome: 'Sibiu e Transfăgărășan',
    tipologia: ['storia', 'natura', 'strada panoramica'],
    giorniConsigliati: '1 giorno, con un lungo tratto di guida',
    visitataPersonalmente: true,
    introduzione: 'Il centro storico UNESCO di Sibiu e la Transfăgărășan, una celebre strada panoramica, con tornanti che salgono in alta quota.',
    percheAndarci: 'Per la Transfăgărășan, con il Lago Bâlea e la possibilità (rara) di avvistare orsi lungo la strada.',
    cosaVedere: [
      'Piața Mare e il Museo Brukenthal a Sibiu',
      'Il Ponte delle Bugie (Podul Minciunilor)',
      'I tornanti della Transfăgărășan fino al Lago Bâlea',
      'La Diga di Vidraru',
    ],
    cosaFare: [
      'City tour di Sibiu con guida locale',
      'Percorrere la Transfăgărășan (c\'è una scheda esperienza dedicata)',
      'Sosta al Balea Lac Restaurant sul Lago Bâlea',
    ],
    doveDormire:
      'MyContinental Sibiu, struttura moderna vicino al centro storico. Le cose più citate sono le camere ai piani alti con vista sulla città e la colazione abbondante; qualcuno si lamenta del wifi lento e degli ascensori.\n\nAlternative: economiche: Casa Timpuri Vechi, Pensiunea Central Sibiu · fascia media: Casa Luxemburg · lusso (contenuto): Noblesse Boutique Hotel, Mina Luxury Boutique Hotel.',
    doveMangiare: 'Crama Sibiul Vechi (cantina rustica, pochi tavoli, prenotazione obbligatoria), La Dobrun o Crama Ileana; dopocena Oldie\'s Pub o Geea Caffe.',
    comeArrivare: 'In auto da Salina Turda a Sibiu.',
    comeSpostarsi: 'Auto a noleggio per la Transfăgărășan, a piedi nel centro di Sibiu.',
    periodoMigliore: 'estate e inizio autunno, quando la Transfăgărășan è aperta alle auto (date secondo la neve)',
    costi: 'Non mi sono segnato i prezzi.',
    erroriDaEvitare: ['Partire senza aver controllato sul sito ufficiale che la Transfăgărășan sia aperta', 'Dare da mangiare agli orsi o scendere dall\'auto se se ne avvista uno'],
    miaEsperienza:
      'La Transfăgărășan è all\'altezza della sua fama: i tornanti che salgono fino al Lago Bâlea sono tra le strade più belle che abbia mai guidato. Il lungo rientro a Bucarest nello stesso giorno, però, si fa sentire.',
    luoghi: [
      {
        nome: "Piața Mare e Museo Brukenthal",
        testo: "La grande piazza di Sibiu, tra le più belle della Romania, con il Museo Brukenthal, tra i musei più antichi del Paese, aperto nel 1817.",
        come: "A piedi dal centro.",
        quando: "Mattina.",
        tempo: "2 ore",
        url: "https://www.brukenthalmuseum.ro",
        consiglio: "Un city tour con guida locale per capire la storia."
      },
      {
        nome: "Ponte delle Bugie (Podul Minciunilor)",
        testo: "Un ponte di ferro del 1859. Secondo la tradizione, scricchiola se qualcuno dice una bugia.",
        come: "A piedi nel centro storico.",
        quando: "Sera.",
        tempo: "15 minuti",
        costo: "ingresso libero",
        consiglio: "Foto dal basso, sul vicolo sottostante."
      },
      {
        nome: "Strada Transfăgărășan",
        testo: "La strada di montagna costruita tra il 1970 e il 1974 sotto Ceaușescu: tornanti che salgono fino al lago Bâlea, tra le strade più belle che abbia mai guidato. Chiusa in inverno.",
        come: "In auto, da Sibiu o da Curtea de Argeș. Di solito aperta da fine giugno a fine ottobre, secondo la neve: lo stato è indicato ai cartelli di Curtea de Argeș e Cârțișoara.",
        quando: "Estate e inizio autunno; il rientro a Bucarest nello stesso giorno è molto lungo.",
        tempo: "giornata intera",
        consiglio: "Partire presto: il lungo rientro a Bucarest nello stesso giorno si fa sentire."
      },
      {
        nome: "Lago Bâlea",
        testo: "Il lago glaciale a 2.034 metri sulla Transfăgărășan, con rifugi. D'estate si arriva in auto, nel resto dell'anno con la funivia da Bâlea Cascadă.",
        come: "In auto lungo la strada.",
        quando: "Estate, con cielo sereno.",
        tempo: "1 ora",
        consiglio: "Al Balea Lac Restaurant si mangia vista sul lago."
      },
      {
        nome: "Diga di Vidraru",
        testo: "Una diga ad arco alta 166 metri, completata nel 1966, sul fiume Argeș, con un grande lago artificiale. Una sosta panoramica sul lato sud della Transfăgărășan.",
        come: "In auto lungo la strada.",
        quando: "Giorno.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Si vede anche dalla strada."
      }
    ],
    sapori: [
      {
        nome: "Cucina romena in cantina",
        testo: "Piatti tradizionali nelle cantine rustiche del centro, spesso con pochi tavoli: meglio prenotare."
      },
      {
        nome: "Cucina sassone",
        testo: "La città conserva piatti tradizionali e birre artigianali."
      }
    ],
    attenzioni: [
      "La Transfăgărășan è di solito chiusa da fine ottobre a fine giugno per la neve: controllare lo stato prima di partire.",
      "Prenotare nei ristoranti piccoli del centro, che hanno pochi tavoli.",
      "Guidare con prudenza: tornanti stretti e traffico di camion e moto."
    ],
    esperienzeSlugs: ['transfagarasan'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'I tornanti della Transfăgărășan tra le montagne della Romania',
    immagine: '/images/transilvania/transfagarasan-stock.jpg',
  },
]
