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
    comeArrivare: "Si atterra all'aeroporto Henri Coandă di Otopeni, circa 17 km a nord del centro. Il treno porta alla Gara de Nord in 20-25 minuti (circa 6-7 lei); il bus espresso 100, attivo 24 ore su 24, ferma a Piața Victoriei, Universitate e Piața Unirii (circa 3 lei con carta contactless). Il taxi si prenota dai touch screen degli arrivi e per il centro non dovrebbe superare i 60 lei; Bolt e Uber hanno un'area di ritiro segnalata.",
    comeSpostarsi: 'A piedi in centro, Uber, Bolt o taxi per il resto.',
    periodoMigliore: 'ponte di Halloween o inizio novembre',
    costi: "Budget giornaliero a persona, indicativo: basso 40-60 € (ostello o hotel semplice, trattorie, metro), medio 80-120 € (hotel in centro, ristoranti tipici, due ingressi), alto da 180 €. Ingressi 2026: Palazzo del Parlamento 85 lei (circa 17 €), Museo del Villaggio 40 lei (circa 8 €), Therme da 141 lei (circa 28 €). Una cena da Caru' cu Bere costa circa 25-30 € a testa.",
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
        costo: "tour standard 85 lei adulti, circa 17 € (2026)",
        lat: 44.4275,
        lng: 26.0875,
        url: "https://cic.cdep.ro/en/vizitare",
        consiglio: "Le dimensioni fuori scala raccontano la megalomania del regime già prima di entrare."
      },
      {
        nome: "Ateneo Romeno",
        testo: "La sala concerti neoclassica del 1888, con la cupola e l'affresco circolare che racconta la storia della Romania. Casa dell'orchestra Filarmonica George Enescu.",
        come: "A piedi, a Piața Revoluției.",
        quando: "Mattina o sera di concerto.",
        tempo: "30-45 minuti",
        costo: "visita dell'edificio circa 2 €; concerti sinfonici 120-160 lei, circa 24-32 €",
        lat: 44.4413,
        lng: 26.0973,
        url: "https://fge.org.ro",
        consiglio: "Se possibile, assistere a un concerto: l'acustica è eccellente."
      },
      {
        nome: "Città Vecchia (Lipscani)",
        testo: "Il quartiere storico di vicoli, locali e vecchi han, oggi il cuore dei ristoranti e della vita serale. Di giorno è tranquillo, di sera esplode di musica.",
        come: "A piedi, vicino a Piața Unirii.",
        quando: "Sera.",
        tempo: "2 ore",
        costo: "ingresso libero",
        orari: "Sempre accessibile.",
        lat: 44.43237,
        lng: 26.09862,
        consiglio: "Controllare i prezzi dei menu: alcuni locali sono pensati per turisti."
      },
      {
        nome: "Caru' cu Bere",
        testo: "Nata come birreria nel 1879, dal 1899 è in un edificio neogotico con interni Art Nouveau e soffitti dipinti; è monumento storico e serve cucina romena tradizionale.",
        come: "In pieno centro, Strada Stavropoleos.",
        quando: "Cena; prenotare.",
        tempo: "1,5-2 ore",
        costo: "circa 25-30 € a testa per piatto, bevanda e dolce",
        lat: 44.4321,
        lng: 26.0981,
        url: "https://www.carucubere.ro",
        consiglio: "Provare i sarmale e il papanași."
      },
      {
        nome: "Museo del Villaggio",
        testo: "Un museo all'aperto aperto nel 1936, con molti edifici contadini dal Seicento al Novecento portati da tutte le regioni della Romania. Si capisce bene l'architettura rurale.",
        come: "Nel parco Re Michele I (ex Herăstrău), a nord del centro, in metro o bus.",
        quando: "Mattina; il parco è piacevole.",
        tempo: "1,5-2 ore",
        costo: "40 lei adulti, circa 8 € (2026)",
        orari: "Aperto tutti i giorni, con orario stagionale; chiuso a Pasqua, il 25 e 26 dicembre e l'1 e 2 gennaio.",
        lat: 44.47336,
        lng: 26.07656,
        url: "https://www.muzeul-satului.ro",
        consiglio: "Combinare con una passeggiata nel parco Herăstrău."
      },
      {
        nome: "Terme di Bucarest (Therme)",
        testo: "Il grande parco termale e acquatico alle porte della città, con piscine, saune e scivoli. Comodo per riposare l'ultimo giorno.",
        come: "In taxi o navetta da Bucarest: come arrivare sul sito ufficiale.",
        quando: "Giornata intera, specie l'ultimo giorno.",
        tempo: "giornata intera",
        costo: "zona Galaxy 141 lei dal lunedì al giovedì e 151 lei da venerdì a domenica (circa 28-30 €); The Palm ed Elysium costano di più",
        orari: "Lunedì-giovedì 10-23, venerdì e sabato 9-24, domenica 9-23; le strutture chiudono 30 minuti prima.",
        lat: 44.60542,
        lng: 26.08536,
        url: "https://therme.ro",
        consiglio: "Prenotare online per saltare la fila."
      },
      {
        nome: "Monastero Stavropoleos",
        testo: "Una piccola chiesa del 1724 in stile brâncovenesc, con il portico a colonne di pietra scolpite e gli affreschi, oggi monastero femminile. Nel cortile sono raccolte lapidi e frammenti di chiese demolite.",
        come: "A piedi, in Strada Stavropoleos, accanto a Caru' cu Bere.",
        quando: "Di giorno; durante le funzioni si entra in silenzio.",
        tempo: "20-30 minuti",
        costo: "ingresso libero",
        lat: 44.43182,
        lng: 26.09879,
        url: "https://www.stavropoleos.ro"
      },
      {
        nome: "Cărturești Carusel",
        testo: "Una libreria su sei livelli dentro un palazzo bancario d'inizio Novecento restaurato, con balconate bianche e una caffetteria all'ultimo piano. Aperta nel 2015, è uno degli interni più fotografati della città.",
        come: "A piedi, in Strada Lipscani 55.",
        quando: "Mattina o tardo pomeriggio nei giorni feriali.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        lat: 44.43189,
        lng: 26.10161,
        url: "https://carturesti.ro"
      },
      {
        nome: "Hanu' lui Manuc",
        testo: "Il più antico caravanserraglio ancora in funzione di Bucarest, costruito nel 1808 dal mercante armeno Manuc Bei: un cortile chiuso da ballatoi di legno su due piani, oggi ristorante e hotel.",
        come: "A piedi, di fronte a Curtea Veche, vicino a Piața Unirii.",
        quando: "Pranzo o cena; nel fine settimana prenotare.",
        tempo: "1,5 ore",
        lat: 44.42944,
        lng: 26.10194
      },
      {
        nome: "Curtea Veche",
        testo: "I resti della corte principesca dove nel 1459 Vlad III firmò il primo documento che nomina Bucarest. Accanto c'è la chiesa dell'Annunciazione, la più antica della città ancora in uso. Nel 2026 il sito è interessato da lavori di messa in sicurezza.",
        come: "A piedi, in Strada Franceză, nel quartiere storico.",
        quando: "Di giorno, insieme a Lipscani.",
        tempo: "30 minuti",
        lat: 44.43009,
        lng: 26.10129
      },
      {
        nome: "Piața Revoluției e Calea Victoriei",
        testo: "La piazza dove nel dicembre 1989 Ceaușescu tenne l'ultimo discorso dal balcone dell'ex Comitato Centrale, con il Memoriale della Rinascita al centro. Intorno ci sono l'Ateneo, la Biblioteca centrale universitaria e l'ex Palazzo Reale.",
        come: "A piedi lungo Calea Victoriei, a circa 10 minuti da Piața Romană e da Universitate.",
        quando: "Di giorno, o la sera quando i palazzi sono illuminati.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        orari: "Sempre accessibile.",
        lat: 44.43866,
        lng: 26.0975
      },
      {
        nome: "Museo Nazionale d'Arte (ex Palazzo Reale)",
        testo: "Nell'ex Palazzo Reale di Piața Revoluției: la galleria di arte romena antica, con icone e oggetti di culto, quella di arte moderna romena, con Grigorescu e Brâncuși, e una galleria di arte europea.",
        come: "A piedi, Calea Victoriei 49-53.",
        quando: "Mattina, in un giorno di pioggia.",
        tempo: "2 ore",
        lat: 44.44016,
        lng: 26.09553,
        url: "https://www.mnar.ro"
      },
      {
        nome: "Parco Cișmigiu",
        testo: "Il giardino pubblico più antico del centro, disegnato a metà Ottocento dal paesaggista tedesco Carl Meyer, con un lago, barche a remi d'estate e pista di pattinaggio d'inverno.",
        come: "A piedi, tra Bulevardul Regina Elisabeta e Strada Știrbei Vodă.",
        quando: "Pomeriggio, per una pausa tra le visite.",
        tempo: "1 ora",
        costo: "ingresso libero",
        lat: 44.43726,
        lng: 26.0906
      },
      {
        nome: "Palazzo Primăverii (Casa Ceaușescu)",
        testo: "La residenza privata dei Ceaușescu fino al 1989, nel quartiere Primăverii: arredi originali, la piscina a mosaico, la sala cinema e il guardaroba di Elena Ceaușescu. Si visita con guida, su prenotazione.",
        come: "In taxi o metro (Aviatorilor), poi 10 minuti a piedi.",
        quando: "Su prenotazione, a orari fissi.",
        tempo: "1 ora",
        orari: "Martedì-domenica 10-17; chiuso il lunedì.",
        lat: 44.46888,
        lng: 26.09232,
        url: "https://casaceausescu.ro",
        consiglio: "Si abbina bene al Palazzo del Parlamento: i due lati dello stesso regime."
      },
      {
        nome: "Arco di Trionfo",
        testo: "L'arco alto 27 metri all'inizio di Șoseaua Kiseleff, nella forma attuale in granito del 1936, dedicato all'indipendenza e all'unione del 1918. Si vede di passaggio andando al Museo del Villaggio.",
        come: "Metro Aviatorilor o bus lungo Șoseaua Kiseleff.",
        quando: "Di giorno.",
        tempo: "15 minuti",
        costo: "esterno libero",
        lat: 44.46719,
        lng: 26.07813
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
    faq: [
      {
        domanda: "Quanti giorni servono a Bucarest?",
        risposta: "Per il Palazzo del Parlamento, Lipscani e Calea Victoriei basta un giorno pieno. Con due giorni si aggiungono il Museo del Villaggio e il Palazzo Primăverii, con tre anche le Terme o una gita a Mogoșoaia o Snagov."
      },
      {
        domanda: "Come si va dall'aeroporto al centro?",
        risposta: "In treno fino alla Gara de Nord in 20-25 minuti, con il bus espresso 100 fino a Piața Unirii oppure in taxi prenotato dai touch screen degli arrivi, per non più di circa 60 lei."
      },
      {
        domanda: "Bisogna prenotare il Palazzo del Parlamento?",
        risposta: "Sì: si entra solo con visita guidata, e per i piccoli gruppi di solito si prenota per telefono il giorno prima. Serve un documento d'identità e non c'è deposito bagagli."
      },
      {
        domanda: "Servono contanti in lei?",
        risposta: "Le carte sono accettate quasi ovunque in centro, ma alcuni locali tipici, le guide e i parcheggi preferiscono i contanti. Conviene prelevare appena atterrati."
      },
      {
        domanda: "Uber e Bolt funzionano?",
        risposta: "Sì, sono il modo più semplice per muoversi fuori dal centro. Per i taxi tradizionali meglio quelli con tariffa esposta, come Cobălcescu o Cris Taxi."
      },
      {
        domanda: "Si può andare alle Terme prima del volo?",
        risposta: "Sì: Therme è a Balotești, a 10-15 minuti dall'aeroporto di Otopeni. Basta uscire almeno 2 ore prima del volo."
      }
    ],
    gite: [
      {
        nome: "Sinaia e Castello di Peleș",
        distanza: "circa 2 ore in auto",
        come: "In auto lungo la DN1 o in treno dalla Gara de Nord.",
        testo: "La residenza estiva di Carlo I nella valle di Prahova, con il vicino Castello Pelișor. Peleș chiude il lunedì e il martedì e, nel 2026, dal 2 novembre al 1° dicembre."
      },
      {
        nome: "Palazzo Mogoșoaia",
        distanza: "circa 15 km a nord-ovest",
        come: "In auto o taxi, mezz'ora secondo il traffico.",
        testo: "Il palazzo in stile brâncovenesc del 1702, sul lago, con un grande parco. Una mezza giornata fuori città."
      },
      {
        nome: "Monastero di Snagov",
        distanza: "circa 40 km a nord",
        come: "In auto; il monastero sta su un'isola del lago, collegata da una passerella.",
        testo: "Un piccolo monastero del Cinquecento dove, secondo la tradizione, sarebbe sepolto Vlad l'Impalatore."
      },
      {
        nome: "Brașov",
        distanza: "circa 3 ore in auto senza soste",
        come: "In auto lungo la valle di Prahova o in treno diretto dalla Gara de Nord.",
        testo: "La città sassone con Piața Sfatului e la Chiesa Nera, base comoda per Bran e Râșnov."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Palazzo del Parlamento al mattino, con visita guidata",
          "Monastero Stavropoleos e Curtea Veche",
          "Pranzo a Lipscani",
          "Cărturești Carusel",
          "Calea Victoriei fino a Piața Revoluției e all'Ateneo",
          "Cena da Caru' cu Bere o da Hanu' lui Manuc"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: centro come nel programma di un giorno",
          "Giorno 2: Museo del Villaggio e parco Re Michele I, Arco di Trionfo, Palazzo Primăverii nel pomeriggio, sera a Dorobanți"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Palazzo del Parlamento e centro storico",
          "Giorno 2: Museo Nazionale d'Arte, Parco Cișmigiu, Museo del Villaggio e Palazzo Primăverii",
          "Giorno 3: Palazzo Mogoșoaia al mattino oppure mezza giornata alle Terme prima del volo"
        ]
      }
    ],
    zone: [
      {
        nome: "Città Vecchia (Lipscani)",
        perChi: "chi vuole uscire la sera a piedi",
        testo: "Hotel e appartamenti tra i locali del centro storico, a pochi passi da tutto. Il venerdì e il sabato notte è rumoroso.",
        fascia: "70-150 €"
      },
      {
        nome: "Piața Romană e Calea Victoriei",
        perChi: "chi vuole una base centrale e ben collegata",
        testo: "Zona servita dalla metro, a 15-20 minuti a piedi da Lipscani, con hotel di ogni categoria lungo i grandi viali."
      },
      {
        nome: "Unirii e Palazzo del Parlamento",
        perChi: "chi arriva o riparte in auto",
        testo: "Grandi hotel lungo i viali intorno a Piața Unirii, a piedi sia dal Parlamento sia dal centro storico."
      },
      {
        nome: "Dorobanți e Primăverii",
        perChi: "chi cerca boutique hotel in un quartiere tranquillo",
        testo: "Quartiere residenziale elegante a nord, con caffè e ristoranti; per il centro serve la metro o un taxi.",
        fascia: "110-280 €"
      }
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
    comeArrivare: "Da Bucarest a Sinaia sono circa 2 ore di auto lungo la DN1 e la valle di Prahova; da Sinaia a Bran serve circa un'ora, e da Bran a Brașov mezz'ora. Sinaia ha una stazione ferroviaria sulla linea Bucarest-Brașov, da cui si sale a piedi a Peleș. Bran si raggiunge anche in bus da Brașov, ma per vedere i due castelli nello stesso giorno l'auto è la soluzione più pratica.",
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'mattina, per evitare la ressa ai castelli',
    costi: "Budget giornaliero a persona, indicativo: basso 40-60 €, medio 70-110 €, alto da 150 €, più carburante e parcheggi. Ingressi 2026: Peleș 100 lei (circa 20 €), Pelișor 30 lei (circa 6 €), Bran 100 lei per la visita standard (circa 20 €).",
    erroriDaEvitare: ['Fidarsi dei prezzi delle bancarelle e dei ristoranti intorno al Castello di Bran: sono trappole per turisti'],
    miaEsperienza:
      'Per architettura Peleș è forse il castello più bello del viaggio, con interni curati fin nei dettagli come Bran, per quanto affascinante, non è. Il legame di Bran con Dracula è più un\'invenzione turistica che un fatto storico, ma il castello vale la visita anche da solo.',
    luoghi: [
      {
        nome: "Castello di Peleș",
        testo: "Residenza estiva di Carlo I, re di Romania, costruita tra il 1873 e il 1914 in stile neorinascimentale tedesco. Per architettura è forse il castello più bello del viaggio, con interni curati nei minimi dettagli.",
        come: "Da Bucarest a Sinaia; dal centro di Sinaia si sale a piedi.",
        quando: "Mattina presto, per evitare la ressa.",
        tempo: "1,5 ore",
        costo: "100 lei adulti, circa 20 €, piano terra e primo piano (2026)",
        orari: "Chiuso lunedì e martedì; mercoledì 10-17, giovedì-domenica 9:15-17, ultimo ingresso alle 16. Chiuso dal 2 novembre al 1° dicembre 2026.",
        lat: 45.35984,
        lng: 25.54265,
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
        lat: 45.35533,
        lng: 25.54962,
        consiglio: "Silenzio all'interno."
      },
      {
        nome: "Castello di Bran",
        testo: "La fortezza sulla roccia, documentata dal 1377, famosa per il legame con Dracula. In realtà il legame è più un'invenzione turistica che un fatto storico, ma il castello vale la visita anche da solo.",
        come: "A sud-ovest di Brașov, in auto. Biglietti sul sito ufficiale.",
        quando: "Mattina presto.",
        tempo: "1-1,5 ore",
        costo: "100 lei adulti, circa 20 €, visita standard (novembre-dicembre 2026); spesso esaurito: meglio online",
        orari: "Lunedì dalle 12, gli altri giorni dalle 9; chiude alle 19 da aprile a ottobre, alle 18 da novembre a marzo.",
        lat: 45.51508,
        lng: 25.36724,
        url: "https://www.bran-castle.com",
        consiglio: "Il castello non ha mai ospitato Vlad l'Impalatore: il legame con Dracula è nato per il turismo."
      },
      {
        nome: "Castello Cantacuzino a Bușteni",
        testo: "Un castello in stile neobrâncovenesc del 1911 ai piedi dei Bucegi. Sosta fotografica facoltativa sulla strada.",
        come: "In auto o treno, a Bușteni, poco dopo Sinaia.",
        quando: "Giorno.",
        tempo: "30 minuti",
        lat: 45.41411,
        lng: 25.54258,
        consiglio: "Solo per chi ha tempo."
      },
      {
        nome: "Castello Pelișor",
        testo: "Il castello più piccolo, costruito accanto a Peleș tra il 1899 e il 1902 per il futuro re Ferdinando e la regina Maria, con interni Art Nouveau. Si visita in meno di un'ora e di solito è molto meno affollato.",
        come: "A piedi da Peleș, pochi minuti nel parco.",
        quando: "Subito dopo Peleș.",
        tempo: "45 minuti",
        costo: "30 lei adulti, circa 6 €, tour completo (2026)",
        orari: "Chiuso lunedì e martedì; mercoledì 10-17, giovedì-domenica 9:15-17, ultimo ingresso alle 16:15.",
        lat: 45.3606,
        lng: 25.53914,
        url: "https://peles.ro"
      },
      {
        nome: "Casinò di Sinaia",
        testo: "L'edificio Belle Époque del 1912-1913 nel parco Dimitrie Ghica, voluto da Carlo I sul modello di Monte Carlo. Oggi è un centro congressi con alcune sale aperte alle visite.",
        come: "A piedi, nel parco al centro di Sinaia.",
        quando: "Di giorno, scendendo da Peleș.",
        tempo: "30-45 minuti",
        lat: 45.35518,
        lng: 25.55338
      },
      {
        nome: "Funivie di Sinaia (Cota 1400 e Cota 2000)",
        testo: "Dalla parte alta di Sinaia la telecabina sale a Cota 1400 e la Gondola Carp prosegue fino a Cota 2000, sui Bucegi, con sentieri e vista sulla valle di Prahova. Nell'autunno 2026 il tratto Cota 1000-1400 è chiuso; le altre risalite funzionano quando il tempo lo permette.",
        come: "Dalla stazione della telecabina, in fondo al centro di Sinaia.",
        quando: "Giornata serena; d'inverno per sciare.",
        tempo: "mezza giornata",
        lat: 45.34949,
        lng: 25.54595
      },
      {
        nome: "Cascata Urlătoarea",
        testo: "Una cascata nel bosco sopra Bușteni, ai piedi dei Bucegi, raggiungibile con un sentiero segnato e facile. Una sosta all'aria aperta tra Sinaia e Bran.",
        come: "A piedi dalla parte alta di Bușteni, lungo il sentiero segnato.",
        quando: "Da maggio a ottobre; d'inverno il sentiero può essere ghiacciato.",
        tempo: "1,5 ore andata e ritorno",
        lat: 45.3962,
        lng: 25.51574
      },
      {
        nome: "Museo del Villaggio di Bran",
        testo: "Un piccolo museo all'aperto ai piedi del castello, con case contadine, granai e laboratori della zona di Bran. Si gira in fretta prima o dopo il castello.",
        come: "A piedi, accanto all'ingresso del castello.",
        quando: "Prima o dopo la visita al castello.",
        tempo: "30 minuti",
        lat: 45.51495,
        lng: 25.37004
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
    faq: [
      {
        domanda: "Si possono vedere Peleș e Bran nello stesso giorno?",
        risposta: "Sì, partendo presto da Bucarest: Peleș al mattino, pranzo a Sinaia e Bran nel pomeriggio, con un'ora di strada tra i due. La sera si arriva a Brașov in mezz'ora."
      },
      {
        domanda: "Quando è chiuso Peleș?",
        risposta: "Il lunedì e il martedì, più alcune settimane all'anno per pulizie e conservazione: nel 2026 dal 2 novembre al 1° dicembre. Conviene controllare peles.ro prima di partire."
      },
      {
        domanda: "Bisogna prenotare i biglietti?",
        risposta: "Per Peleș i biglietti online su bilete.peles.ro hanno una fascia oraria e non si spostano. A Bran nei fine settimana la visita standard si esaurisce spesso: meglio comprarla online."
      },
      {
        domanda: "Bran è davvero il castello di Dracula?",
        risposta: "No: Vlad l'Impalatore non ci ha mai vissuto, e il legame con il romanzo di Bram Stoker è nato per il turismo. Il castello vale comunque la visita."
      },
      {
        domanda: "Si possono fare foto dentro Peleș?",
        risposta: "Le foto amatoriali senza flash sono ammesse secondo le regole del castello, ma le riprese professionali si pagano a parte."
      },
      {
        domanda: "Si arriva senza auto?",
        risposta: "Sì, ma con più tempo: treno da Bucarest a Sinaia per Peleș, poi treno fino a Brașov e bus per Bran. In un giorno solo è difficile vedere tutto."
      }
    ],
    gite: [
      {
        nome: "Fortezza di Râșnov",
        distanza: "circa 15 km da Bran",
        come: "In auto, sulla strada tra Bran e Brașov.",
        testo: "La fortezza contadina su una rocca, con la scritta in stile hollywoodiano. Nel 2026 la cittadella è in restauro e si visita il giardino."
      },
      {
        nome: "Brașov",
        distanza: "circa mezz'ora da Bran",
        come: "In auto o in bus.",
        testo: "Il centro sassone con Piața Sfatului, la Chiesa Nera e la funivia del Tâmpa: la base più comoda per dormire."
      },
      {
        nome: "Santuario degli orsi LiBEARty a Zărnești",
        distanza: "circa 30 minuti da Bran",
        come: "In auto; visita solo su prenotazione online.",
        testo: "Un rifugio per orsi salvati dalla cattività, con visite guidate al mattino. Va prenotato con anticipo."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno (da Bucarest a Brașov)",
        tappe: [
          "Partenza presto da Bucarest verso Sinaia",
          "Castello di Peleș e Castello Pelișor",
          "Monastero di Sinaia e pranzo in centro",
          "Sosta fotografica al Castello Cantacuzino di Bușteni",
          "Castello di Bran nel pomeriggio",
          "Arrivo a Brașov la sera"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Peleș, Pelișor, Casinò e funivia di Sinaia, notte a Sinaia o Bușteni",
          "Giorno 2: Cascata Urlătoarea al mattino, poi Bran e il Museo del Villaggio, Râșnov e arrivo a Brașov"
        ]
      }
    ],
    zone: [
      {
        nome: "Sinaia",
        perChi: "chi vuole visitare Peleș all'apertura",
        testo: "Hotel e pensioni nella stazione di montagna, a piedi dal castello e dalla funivia. Comoda anche senza auto, grazie al treno."
      },
      {
        nome: "Bușteni",
        perChi: "chi cerca la montagna e i sentieri",
        testo: "Pensioni ai piedi dei Bucegi, dieci minuti a nord di Sinaia, con vista sulle pareti del Caraiman."
      },
      {
        nome: "Bran e Râșnov",
        perChi: "chi vuole dormire vicino ai castelli",
        testo: "Pensioni di paese intorno al castello e verso Râșnov. Prezzi più bassi, serve l'auto.",
        fascia: "40-80 €"
      },
      {
        nome: "Brașov",
        perChi: "chi vuole la sera in città",
        testo: "Il centro storico o il quartiere di Șchei, a mezz'ora da Bran: più scelta di ristoranti e locali.",
        fascia: "45-140 €"
      }
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
    comeArrivare: "Poco distante da Bran, in auto. Da Bucarest si arriva in auto lungo la valle di Prahova: circa 2 ore fino a Sinaia, poi un'ora fino a Bran e mezz'ora fino a Brașov, oppure circa 3 ore senza soste. Ci sono anche treni diretti dalla stazione Gara de Nord di Bucarest, e l'aeroporto di Bucarest Otopeni è collegato alla Gara de Nord dal treno in 20-25 minuti. In centro si gira a piedi; l'auto serve per Râșnov, Bran e Prejmer.",
    comeSpostarsi: 'A piedi in centro; in auto fino a Râșnov.',
    periodoMigliore: 'tardo pomeriggio, per la luce sulla rocca',
    costi: "I prezzi di Sergiana non me li sono segnati; vino e palinka però costano più della media. Budget giornaliero a persona, indicativo: basso 40-60 € (pensione e trattorie), medio 70-110 € (hotel in centro, ristoranti tipici, un paio di ingressi), alto da 150 €. Ingressi verificati per il 2026: Chiesa Nera 30 lei (circa 6 €), funivia del Tâmpa 45 lei andata e ritorno (circa 9 €).",
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
        orari: "Sempre accessibile.",
        lat: 45.6422,
        lng: 25.58922,
        consiglio: "Pranzo con zuppa in pagnotta da Sergiana."
      },
      {
        nome: "Chiesa Nera (Biserica Neagră)",
        testo: "La principale chiesa gotica della Romania, iniziata nel 1383 e completata nel Quattrocento. Ha un organo Buchholz del 1839 con circa 4.000 canne e la più grande collezione di «tappeti transilvani», tappeti anatolici donati dai mercanti sassoni tra Quattro e Seicento.",
        come: "A piedi dalla Piața Sfatului.",
        quando: "Mattina.",
        tempo: "45 minuti",
        costo: "30 lei, circa 6 € (2026)",
        orari: "Dal 16 ottobre ad aprile: martedì-sabato 10-18, domenica e lunedì 12-18. Dal 1° aprile al 15 ottobre chiude alle 19.",
        lat: 45.641,
        lng: 25.58807,
        url: "https://bisericaneagra.ro/program/",
        consiglio: "I concerti d'organo estivi sono un'ottima occasione per vederla."
      },
      {
        nome: "Monte Tâmpa e scritta BRAȘOV",
        testo: "La collina sopra il centro con la scritta in stile hollywoodiano e una funivia. Dall'alto si vede l'intera città.",
        come: "Funivia o sentiero a piedi.",
        quando: "Tardo pomeriggio.",
        tempo: "1,5-2 ore",
        costo: "Funivia andata e ritorno 45 lei, circa 9 € (2026); a piedi gratis",
        lat: 45.63463,
        lng: 25.59346,
        url: "https://www.telecabina-tampa.ro/ro/bilete",
        consiglio: "La salita a piedi è facile ma ripida in alcuni punti."
      },
      {
        nome: "Casa Sfatului e Museo di Storia",
        testo: "Il vecchio municipio al centro di Piața Sfatului, con la Torre delle Trombe da cui si avvistavano gli incendi e i nemici. Dentro c'è il Museo di Storia della contea, con le sale sulla Brașov medievale e sulle corporazioni sassoni.",
        come: "A piedi, nel mezzo della piazza.",
        quando: "Mattina, abbinato alla piazza.",
        tempo: "45 minuti-1 ora",
        lat: 45.64234,
        lng: 25.58896
      },
      {
        nome: "Strada Republicii",
        testo: "La via pedonale che parte da Piața Sfatului verso nord, con facciate ottocentesche, caffè e negozi. È il passeggio serale della città e il modo più semplice per orientarsi nel centro.",
        come: "A piedi da Piața Sfatului.",
        quando: "Sera, quando si riempie.",
        tempo: "30 minuti",
        costo: "gratuito",
        orari: "Sempre accessibile.",
        lat: 45.64249,
        lng: 25.59077
      },
      {
        nome: "Porta Caterina e Porta Șchei",
        testo: "Porta Caterina, del 1559, con le quattro torrette angolari, è l'unica porta medievale della città rimasta intatta; a pochi metri c'è la neoclassica Porta Șchei, del 1828. Separavano la cittadella sassone dal quartiere romeno di Șchei.",
        come: "A piedi, all'estremità sud-ovest del centro, vicino a Strada Sforii.",
        quando: "Giorno.",
        tempo: "20 minuti",
        costo: "gratuito (esterni)",
        orari: "Sempre visibili dall'esterno.",
        lat: 45.63952,
        lng: 25.5861
      },
      {
        nome: "Strada Sforii",
        testo: "Un vicolo largo poco più di un metro, considerato tra i più stretti d'Europa, che collega due vie. Una curiosità veloce nel centro.",
        come: "A piedi, vicino alla Porta Șchei.",
        quando: "Giorno.",
        tempo: "10 minuti",
        costo: "ingresso libero",
        orari: "Sempre accessibile.",
        lat: 45.63954,
        lng: 25.58859,
        consiglio: "Da combinare con un giro in centro."
      },
      {
        nome: "Torre Nera e Torre Bianca",
        testo: "Due torri di guardia sulle mura occidentali, sul fianco della collina. Si sale per sentieri e scalinate brevi, e la vista sui tetti del centro e sulla Chiesa Nera è tra le migliori della città senza prendere la funivia.",
        come: "A piedi dal lato ovest delle mura, lungo la passeggiata sotto la collina (Aleea după Ziduri).",
        quando: "Tardo pomeriggio, con la luce sui tetti.",
        tempo: "1 ora per entrambe",
        costo: "Belvedere gratuito",
        lat: 45.64128,
        lng: 25.58564
      },
      {
        nome: "Bastione dei Tessitori",
        testo: "Il bastione meglio conservato delle mura, costruito dalla corporazione dei tessitori, con tre piani di ballatoi in legno. Dentro c'è una sezione del Museo di Storia con un plastico della Brașov del Seicento.",
        come: "A piedi, lungo le mura sud-orientali ai piedi del Tâmpa, vicino alla stazione della funivia.",
        quando: "Prima o dopo la salita sul Tâmpa.",
        tempo: "45 minuti",
        lat: 45.63693,
        lng: 25.58899
      },
      {
        nome: "Șchei: Chiesa di San Nicola e Prima Scuola Romena",
        testo: "Nel quartiere dove vivevano i romeni, fuori dalle mura sassoni, c'è la chiesa ortodossa di San Nicola, con il suo campanile slanciato. Accanto, la Prima Scuola Romena, un museo che ricorda la prima scuola in lingua romena e conserva libri antichi e una vecchia tipografia.",
        come: "A piedi da Porta Șchei, circa 10 minuti in salita per Strada Prundului e Piața Unirii.",
        quando: "Mattina.",
        tempo: "1 ora",
        lat: 45.63587,
        lng: 25.58121
      },
      {
        nome: "Fortezza di Râșnov",
        testo: "Una cittadella contadina fortificata, con la scritta «RASNOV» in stile hollywoodiano visibile dalla rocca. L'atmosfera è più da Signore degli Anelli che da Dracula, ed è tra le chicche meno turistiche del viaggio.",
        come: "Poco fuori Brașov, nella cittadina di Râșnov; si sale a piedi o con i mezzi in funzione sul posto.",
        quando: "Tardo pomeriggio, per la luce sulla rocca.",
        tempo: "1,5-2 ore",
        orari: "Fortezza in restauro (2026): si visita il giardino della cittadella, con biglietto all'ingresso. Estate 9-19, inverno 9-17.",
        lat: 45.59059,
        lng: 25.46938,
        url: "https://www.cetatea-rasnov.ro",
        consiglio: "Una cittadella contadina: serviva da rifugio agli abitanti durante le guerre."
      },
      {
        nome: "Chiesa fortificata di Prejmer",
        testo: "La più grande chiesa fortificata della Transilvania, patrimonio UNESCO: una chiesa gotica circondata da un anello di mura alte circa 12 metri, con dentro oltre 270 piccole stanze su più piani dove si rifugiavano le famiglie durante gli assedi. È il miglior esempio di come i villaggi sassoni si difendevano.",
        come: "In auto, circa 20 km a nord-est di Brașov.",
        quando: "Mattina o primo pomeriggio.",
        tempo: "1 ora",
        lat: 45.722,
        lng: 25.77374
      },
      {
        nome: "Santuario degli orsi LiBEARty, Zărnești",
        testo: "Una riserva nel bosco che ospita orsi bruni salvati da gabbie, circhi e ristoranti. Si visita solo con un tour guidato lungo passerelle e recinti molto ampi; è un modo per vedere gli orsi senza disturbare quelli selvatici.",
        come: "In auto, circa 30 km a sud-ovest di Brașov, vicino a Zărnești. Biglietti solo online, fino a 14 giorni prima.",
        quando: "Al mattino, quando gli orsi sono attivi: va messo come prima cosa della giornata.",
        tempo: "2 ore con il tragitto dal parcheggio",
        lat: 45.5951,
        lng: 25.37777,
        consiglio: "Con la Transfăgărășan aperta si può saltare: gli orsi spesso si vedono lungo la strada."
      },
      {
        nome: "Poiana Brașov",
        testo: "La stazione di montagna di Brașov, a circa 1.000 metri, con piste da sci d'inverno e sentieri nel bosco d'estate. È anche una base tranquilla per chi viaggia in auto.",
        come: "In auto o con il bus urbano da Brașov, circa 12 km di strada di montagna.",
        quando: "Inverno per lo sci, estate per camminare.",
        tempo: "mezza giornata",
        costo: "Accesso gratuito; impianti a pagamento",
        lat: 45.59671,
        lng: 25.55619
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
    faq: [
      {
        domanda: "Quanti giorni servono a Brașov?",
        risposta: "Per il centro storico e il Tâmpa basta un giorno pieno. Con due giorni si aggiunge Râșnov, con tre anche Bran, il santuario degli orsi e Prejmer."
      },
      {
        domanda: "Si possono vedere Bran e Râșnov in giornata da Brașov?",
        risposta: "Sì: Râșnov è a circa 20 minuti d'auto e Bran a mezz'ora. In auto stanno comodamente nella stessa mezza giornata."
      },
      {
        domanda: "Come si sale sul Tâmpa e sulla scritta BRAȘOV?",
        risposta: "Con la funivia vicino al Bastione dei Tessitori (45 lei andata e ritorno nel 2026) oppure a piedi per il sentiero a tornanti, circa un'ora di salita."
      },
      {
        domanda: "Brașov o Sibiu come base?",
        risposta: "Brașov è più comoda per i castelli (Bran, Peleș, Râșnov); Sibiu per la Transfăgărășan. In un giro in auto conviene dormire in entrambe."
      },
      {
        domanda: "Serve l'auto a Brașov?",
        risposta: "Per il centro no, si gira a piedi. Per Râșnov, Prejmer, Bran e il santuario degli orsi l'auto è la soluzione più pratica."
      },
      {
        domanda: "La Fortezza di Râșnov è visitabile?",
        risposta: "Nel 2026 la cittadella è in restauro e si visita il giardino della fortezza, con biglietto all'ingresso. Conviene controllare il sito ufficiale prima di andare."
      }
    ],
    gite: [
      {
        nome: "Castello di Bran",
        distanza: "circa 30 km, mezz'ora in auto",
        come: "In auto via Râșnov; biglietto online, guida a parte.",
        testo: "Il castello associato a Dracula, su uno sperone di roccia sopra il paese. Si abbina facilmente a Râșnov nella stessa mezza giornata."
      },
      {
        nome: "Sinaia e Castello di Peleș",
        distanza: "circa 1 ora in auto",
        come: "In auto lungo la valle di Prahova; ingressi a fasce orarie.",
        testo: "La residenza estiva di Carlo I, tra i castelli più ricchi d'Europa. Va controllato il calendario: chiude periodicamente per manutenzione, per esempio in novembre."
      },
      {
        nome: "Viscri",
        distanza: "circa 1 ora e 20 in auto",
        come: "In auto, con l'ultimo tratto su strada secondaria.",
        testo: "Villaggio sassone con la chiesa fortificata del XII secolo, patrimonio UNESCO. Ingresso 12 lei."
      },
      {
        nome: "Sighișoara",
        distanza: "circa 2 ore in auto",
        come: "In auto o in treno.",
        testo: "Il borgo medievale UNESCO con la Torre dell'Orologio e la scalinata coperta. Si può tenere come tappa verso Sibiu."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Piața Sfatului e Casa Sfatului al mattino",
          "Chiesa Nera",
          "Porta Caterina, Porta Șchei e Strada Sforii",
          "Pranzo con zuppa in pagnotta",
          "Bastione dei Tessitori e funivia sul Tâmpa nel pomeriggio",
          "Sera su Strada Republicii"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: centro storico come nel programma di un giorno",
          "Giorno 2: Fortezza di Râșnov al mattino, poi Torre Nera e Torre Bianca al tramonto e quartiere di Șchei"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: centro storico e Tâmpa",
          "Giorno 2: santuario LiBEARty presto al mattino, poi Râșnov e Castello di Bran",
          "Giorno 3: chiesa fortificata di Prejmer, rientro e pomeriggio a Șchei o a Poiana Brașov"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro storico (Cetate)",
        testo: "Pensioni e hotel dentro o a ridosso delle mura, a pochi minuti da Piața Sfatului. Più caro e, nei weekend, più rumoroso.",
        perChi: "chi visita senza auto e vuole uscire la sera a piedi",
        fascia: "70-140 €"
      },
      {
        nome: "Șchei",
        testo: "Il vecchio quartiere romeno appena fuori dalle mura: strade in salita, case basse e silenzio, a 10-15 minuti a piedi dalla piazza.",
        perChi: "chi cerca pensioni familiari a prezzi più bassi",
        fascia: "45-90 €"
      },
      {
        nome: "Poiana Brașov",
        testo: "Hotel di montagna tra i boschi, a 20 minuti d'auto dal centro. Comodo per la natura, scomodo per la sera in città.",
        perChi: "chi viaggia in auto o viene a sciare",
        fascia: "70-150 €"
      },
      {
        nome: "Râșnov e Bran",
        testo: "Pensioni di paese ai piedi della fortezza e verso Bran, a 20-30 minuti d'auto da Brașov. Prezzi più bassi, serve l'auto.",
        perChi: "chi vuole dormire vicino ai castelli",
        fascia: "40-80 €"
      }
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
    comeArrivare: "In auto da Brașov a Viscri servono circa un'ora e venti, poi da Viscri a Sighișoara circa un'ora, e da Sighișoara a Salina Turda circa 2 ore. Sighișoara è anche sulla linea ferroviaria Brașov-Cluj, con la stazione a dieci minuti a piedi dalla cittadella. Da Turda a Sibiu c'è circa un'ora e mezza di strada; l'aeroporto più vicino a Turda è quello di Cluj-Napoca.",
    comeSpostarsi: 'Auto a noleggio; a piedi nei centri storici.',
    periodoMigliore: 'partenza presto: è la giornata più lunga al volante del viaggio',
    costi: "Budget giornaliero a persona, indicativo: basso 35-55 €, medio 60-100 €, alto da 140 €, più carburante e parcheggi. Ingressi 2026: Salina Turda 75 lei dal lunedì al venerdì e 90 lei nel weekend (circa 15-18 €), guida a parte; Viscri 12 lei (circa 2,5 €); casa natale di Dracula 5 lei per il piano superiore (circa 1 €).",
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
        lat: 46.2193,
        lng: 24.7933,
        consiglio: "Salire sulla torre per la vista: le case colorate dall'alto."
      },
      {
        nome: "Casa natale di Dracula e Scalinata Coperta",
        testo: "La casa dove sarebbe nato Vlad Țepeș e la lunga scala coperta di legno che sale alla chiesa sulla collina. Una breve tappa tra le case colorate.",
        come: "A piedi nella cittadella.",
        quando: "Mattina.",
        tempo: "1 ora",
        costo: "5 lei per salire al piano superiore, circa 1 €",
        lat: 46.21947,
        lng: 24.79277,
        consiglio: "Abbinarla alla salita sulla Scalinata Coperta."
      },
      {
        nome: "Viscri e Chiesa Fortificata",
        testo: "Un villaggio sassone con una chiesa fortificata patrimonio UNESCO, ben conservato. Visita facoltativa lungo il percorso.",
        come: "In auto da Brașov, verso Sighișoara.",
        quando: "Mattina.",
        tempo: "1-1,5 ore",
        costo: "12 lei, circa 2,5 €",
        lat: 46.05471,
        lng: 25.08862,
        consiglio: "Tappa facoltativa ma molto autentica."
      },
      {
        nome: "Salina Turda",
        testo: "Una miniera di sale che oggi è un parco sotterraneo, con un lago sotterraneo, un ascensore panoramico, la sala dell'eco e un antico argano ancora al suo posto. È stata una delle sorprese più belle del viaggio.",
        come: "In auto da Sighișoara. Biglietti all'ingresso o online.",
        quando: "Nei giorni feriali; nel weekend arrivano gruppi numerosi.",
        tempo: "2 ore",
        costo: "75 lei dal lunedì al venerdì, 90 nel weekend e festivi (circa 15-18 €, 2026); guida su richiesta 205 lei",
        orari: "Tutti i giorni 9-17, ultimo ingresso alle 16:20.",
        lat: 46.58771,
        lng: 23.7874,
        url: "https://salinaturda.eu",
        consiglio: "Vestirsi a strati: dentro la temperatura è bassa tutto l'anno."
      },
      {
        nome: "Chiesa sulla Collina",
        testo: "La chiesa gotica evangelica in cima alla Scalinata Coperta, sulla collina della scuola, con affreschi del Quattrocento e una cripta. Dietro si stende il vecchio cimitero sassone, tra gli alberi.",
        come: "A piedi, salendo la Scalinata Coperta dalla cittadella.",
        quando: "Mattina.",
        tempo: "45 minuti",
        lat: 46.21763,
        lng: 24.79055,
        consiglio: "Il cimitero sul retro è il punto più silenzioso della città."
      },
      {
        nome: "Piața Cetății",
        testo: "La piazza principale della cittadella, chiusa da case colorate con caffè e ristoranti. A fine luglio qui si svolge il festival medievale.",
        come: "A piedi, dalla Torre dell'Orologio.",
        quando: "Mattina presto o al tramonto.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        orari: "Sempre accessibile.",
        lat: 46.21997,
        lng: 24.79256
      },
      {
        nome: "Chiesa del Monastero",
        testo: "La chiesa gotica dell'antico monastero domenicano, accanto alla Torre dell'Orologio, con una collezione di tappeti orientali e un organo barocco.",
        come: "A piedi, all'ingresso della cittadella.",
        quando: "Di giorno.",
        tempo: "20-30 minuti",
        lat: 46.21965,
        lng: 24.79348
      },
      {
        nome: "Torre dei Calzolai",
        testo: "Una delle nove torri rimaste delle mura medievali, ricostruita nel 1681 con un tetto barocco.",
        come: "A piedi, sul lato nord della cittadella.",
        quando: "Di giorno.",
        tempo: "20 minuti",
        costo: "esterno libero",
        lat: 46.22126,
        lng: 24.79195
      },
      {
        nome: "Gole di Turda (Cheile Turzii)",
        testo: "Un canyon calcareo lungo quasi 3 km scavato dal torrente Hășdate, con un sentiero sul fondo della gola e pareti attrezzate per l'arrampicata. Una passeggiata all'aperto vicino a Salina Turda.",
        come: "In auto da Turda verso Petreștii de Jos, poi a piedi dal parcheggio della cabana.",
        quando: "Da aprile a ottobre, con il bel tempo.",
        tempo: "2 ore",
        lat: 46.56389,
        lng: 23.67917,
        consiglio: "Scarpe con buona suola: le rocce lungo il torrente sono scivolose."
      },
      {
        nome: "Chiesa fortificata di Biertan",
        testo: "Una delle chiese fortificate più grandi della Transilvania, patrimonio UNESCO, chiusa da tre giri di mura su una collina. Dentro si conserva la porta della sagrestia con una serratura a 19 chiavistelli.",
        come: "In auto, circa mezz'ora da Sighișoara.",
        quando: "Mattina o primo pomeriggio.",
        tempo: "1 ora",
        lat: 46.13516,
        lng: 24.52145
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
    faq: [
      {
        domanda: "Quanto tempo serve a Sighișoara?",
        risposta: "La cittadella si gira in 2-3 ore, con la Torre dell'Orologio, la Scalinata Coperta e la Chiesa sulla Collina. Per Biertan o Viscri serve mezza giornata in più."
      },
      {
        domanda: "Si può dormire dentro la cittadella?",
        risposta: "Sì, ci sono pensioni e piccoli hotel tra le mura. L'auto va lasciata nei parcheggi in basso, perché nella cittadella si entra solo a piedi."
      },
      {
        domanda: "Bisogna prenotare Salina Turda?",
        risposta: "Non è obbligatorio: i biglietti si comprano all'ingresso o online. Online si salta la coda, utile soprattutto nel fine settimana."
      },
      {
        domanda: "Che temperatura c'è dentro Salina Turda?",
        risposta: "Fresca tutto l'anno, anche d'estate: serve una felpa o una giacca leggera."
      },
      {
        domanda: "Vale la pena il giro in barca sul lago sotterraneo?",
        risposta: "È breve e si paga a parte. Il lago è più spettacolare visto dall'alto, dalle passerelle."
      },
      {
        domanda: "Sighișoara e Turda nello stesso giorno?",
        risposta: "Sì, in auto: Sighișoara al mattino, circa 2 ore di strada e Salina Turda nel pomeriggio. È una giornata lunga, conviene partire presto."
      }
    ],
    gite: [
      {
        nome: "Cluj-Napoca",
        distanza: "circa 35 km da Turda",
        come: "In auto lungo l'autostrada A3, o in bus.",
        testo: "La città universitaria della Transilvania, con la piazza dell'Unione e la chiesa di San Michele. Ha l'aeroporto più vicino a Turda."
      },
      {
        nome: "Sibiu",
        distanza: "circa 1 ora e mezza da Turda",
        come: "In auto.",
        testo: "Il centro storico sassone con la Piazza Grande e il Ponte delle Bugie, punto di partenza per la Transfăgărășan."
      },
      {
        nome: "Brașov",
        distanza: "circa 2 ore da Sighișoara",
        come: "In auto o in treno.",
        testo: "La città della Chiesa Nera e del Tâmpa, comoda per i castelli di Bran e Peleș."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno (lungo il percorso in auto)",
        tappe: [
          "Partenza presto da Brașov",
          "Viscri e la chiesa fortificata",
          "Sighișoara: Torre dell'Orologio, casa natale di Dracula, Scalinata Coperta e Chiesa sulla Collina",
          "Pranzo nella cittadella",
          "Circa 2 ore di strada verso Turda",
          "Salina Turda nel pomeriggio, poi Sibiu o Cluj per la notte"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Viscri, Biertan e Sighișoara, notte nella cittadella",
          "Giorno 2: Salina Turda al mattino e Gole di Turda nel pomeriggio, poi Cluj-Napoca o Sibiu"
        ]
      }
    ],
    zone: [
      {
        nome: "Cittadella di Sighișoara",
        perChi: "chi vuole vivere il borgo la sera, senza folla",
        testo: "Pensioni e piccoli hotel dentro le mura, tra le case colorate. Si arriva a piedi dai parcheggi.",
        fascia: "45-80 €"
      },
      {
        nome: "Città bassa di Sighișoara",
        perChi: "chi viaggia in auto e vuole parcheggiare comodo",
        testo: "Hotel e pensioni ai piedi della cittadella, a 5-10 minuti a piedi dalla Torre dell'Orologio.",
        fascia: "35-70 €"
      },
      {
        nome: "Villaggi sassoni (Viscri, Biertan)",
        perChi: "chi cerca silenzio e case contadine restaurate",
        testo: "Case per ospiti nei villaggi intorno alle chiese fortificate, con cucina di casa. Serve l'auto."
      },
      {
        nome: "Turda e Cluj-Napoca",
        perChi: "chi visita la salina e prosegue verso ovest",
        testo: "A Turda pochi hotel semplici vicino alla salina; Cluj, a mezz'ora, ha molta più scelta."
      }
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
    comeArrivare: "In auto da Salina Turda a Sibiu. Da Salina Turda sono circa 1 ora e 30 di auto, da Brașov circa 2 ore e 30 lungo la DN1 passando per Făgăraș. L'aeroporto di Sibiu ha voli soprattutto via Monaco e Vienna; da Bucarest si arriva anche in treno o in auto. Dal centro alla Transfăgărășan (Bâlea Cascadă) serve circa un'ora e mezza, e al Museo ASTRA va il bus 13 dalla stazione.",
    comeSpostarsi: 'Auto a noleggio per la Transfăgărășan, a piedi nel centro di Sibiu.',
    periodoMigliore: 'estate e inizio autunno, quando la Transfăgărășan è aperta alle auto (date secondo la neve)',
    costi: "Non mi sono segnato i prezzi. Budget giornaliero a persona, indicativo: basso 40-60 € (pensione e trattorie), medio 70-110 € (hotel in centro, cantine tipiche, musei), alto da 150 €, più carburante per la Transfăgărășan. Ingressi verificati per il 2026: Palazzo Brukenthal 50 lei (circa 10 €), Museo ASTRA 50 lei (circa 10 €), funivia di Bâlea 80 lei a tratta (circa 16 €).",
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
        costo: "Piazza gratuita; Palazzo Brukenthal 50 lei, circa 10 € (2026); biglietto unico per tutte le sedi 120 lei valido 48 ore",
        orari: "Palazzo Brukenthal chiuso lunedì e martedì. Orario invernale dal 28 ottobre 2026: mercoledì-domenica 9-17, cassa fino alle 16:15; d'estate 10-18.",
        lat: 45.79678,
        lng: 24.15183,
        url: "https://www.brukenthalmuseum.ro/mnb/preturi",
        consiglio: "Un city tour con guida locale per capire la storia."
      },
      {
        nome: "Piața Mică",
        testo: "La piazza piccola, più raccolta della Piața Mare, con le case delle antiche corporazioni e i portici. Da qui si scende verso la città bassa passando sotto il Ponte delle Bugie.",
        come: "A piedi, attraverso la Torre del Consiglio dalla Piața Mare.",
        quando: "Sera, con i caffè aperti.",
        tempo: "30 minuti",
        costo: "gratuito",
        orari: "Sempre accessibile.",
        lat: 45.79772,
        lng: 24.15163
      },
      {
        nome: "Ponte delle Bugie (Podul Minciunilor)",
        testo: "Un ponte di ferro del 1859. Secondo la tradizione, scricchiola se qualcuno dice una bugia.",
        come: "A piedi nel centro storico.",
        quando: "Sera.",
        tempo: "15 minuti",
        costo: "ingresso libero",
        orari: "Sempre accessibile.",
        lat: 45.79832,
        lng: 24.1508,
        consiglio: "Foto dal basso, sul vicolo sottostante."
      },
      {
        nome: "Torre del Consiglio (Turnul Sfatului)",
        testo: "La torre che unisce la Piața Mare alla Piața Mică, con un passaggio ad arco alla base. In cima c'è un belvedere sui tetti con gli «occhi», gli abbaini a forma di palpebra tipici di Sibiu.",
        come: "A piedi; si sale per scale interne.",
        quando: "Tardo pomeriggio, con la luce radente sui tetti.",
        tempo: "30 minuti",
        lat: 45.79761,
        lng: 24.15213
      },
      {
        nome: "Cattedrale evangelica di Santa Maria",
        testo: "La grande chiesa gotica luterana in Piața Huet, simbolo della comunità sassone, con la torre di oltre 70 metri che domina il centro. Dentro ci sono lapidi funerarie e un grande organo; la torre si può salire.",
        come: "A piedi, in Piața Huet accanto alla Piața Mare.",
        quando: "Mattina.",
        tempo: "45 minuti",
        lat: 45.79777,
        lng: 24.15008
      },
      {
        nome: "Mura e torri di Strada Cetății",
        testo: "Il tratto meglio conservato delle mura medievali, lungo un viale alberato con tre torri in fila: dei Carpentieri, dei Vasai e degli Alabardieri. È una passeggiata tranquilla appena fuori dal giro delle piazze.",
        come: "A piedi, 10 minuti a sud-est della Piața Mare.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "45 minuti",
        costo: "gratuito",
        orari: "Sempre accessibile.",
        lat: 45.79424,
        lng: 24.15321
      },
      {
        nome: "Passaggio delle Scale (Pasajul Scărilor)",
        testo: "Una scalinata medievale coperta che scende dalla città alta, accanto alla cattedrale evangelica, verso la città bassa, tra muri di contenimento e archi. È il collegamento più suggestivo fra i due livelli di Sibiu.",
        come: "A piedi da Piața Huet.",
        quando: "Giorno.",
        tempo: "15 minuti",
        costo: "gratuito",
        orari: "Sempre accessibile.",
        lat: 45.79748,
        lng: 24.14927
      },
      {
        nome: "Cattedrale ortodossa della Santissima Trinità",
        testo: "La cattedrale metropolitana ortodossa, del primo Novecento, ispirata a Santa Sofia di Istanbul, con l'interno interamente dipinto e dorato. Fa da contrappunto alle chiese gotiche sassoni del centro.",
        come: "A piedi, in Strada Mitropoliei, 5 minuti dalla Piața Mare.",
        quando: "Mattina, fuori dalle funzioni.",
        tempo: "20-30 minuti",
        costo: "ingresso libero",
        lat: 45.79459,
        lng: 24.14815
      },
      {
        nome: "Museo ASTRA all'aperto",
        testo: "Uno dei più grandi musei all'aperto d'Europa: 96 ettari di bosco nella Dumbrava Sibiului con case contadine, mulini a vento, chiese di legno e laboratori artigiani spostati qui da tutta la Romania, lungo 10 km di viali. Racconta la vita rurale meglio di qualsiasi sala espositiva.",
        come: "A circa 6 km dal centro, sulla strada per Rășinari e Păltiniș: in auto, in bici sulla pista ciclabile o con il bus 13 dalla stazione.",
        quando: "Giornata asciutta, dalla primavera all'autunno.",
        tempo: "3 ore",
        costo: "50 lei, circa 10 € (2026)",
        orari: "Tutti i giorni; da settembre ad aprile 8-17, ultimo biglietto alle 16:45 all'ingresso principale.",
        lat: 45.75379,
        lng: 24.11274,
        url: "https://muzeulastra.ro/program-de-vizitare/",
        consiglio: "Si cammina molto su sterrato: servono scarpe comode."
      },
      {
        nome: "Strada Transfăgărășan",
        testo: "La strada di montagna costruita tra il 1970 e il 1974 sotto Ceaușescu: tornanti che salgono fino al lago Bâlea, tra le strade più belle che abbia mai guidato. Chiusa in inverno.",
        come: "In auto, da Sibiu o da Curtea de Argeș. Di solito aperta da fine giugno a fine ottobre, secondo la neve: lo stato è indicato ai cartelli di Curtea de Argeș e Cârțișoara.",
        quando: "Estate e inizio autunno; il rientro a Bucarest nello stesso giorno è molto lungo.",
        tempo: "giornata intera",
        costo: "Strada senza pedaggio",
        orari: "Tratto alto aperto di norma dal 20 giugno al 31 ottobre, secondo la neve.",
        lat: 45.60248,
        lng: 24.61401,
        consiglio: "Partire presto: il lungo rientro a Bucarest nello stesso giorno si fa sentire."
      },
      {
        nome: "Bâlea Cascadă e la funivia",
        testo: "Sul versante nord, a circa 1.200 metri, c'è la cascata di Bâlea e la stazione a valle della funivia che sale al lago. Quando la strada alta è chiusa, è l'unico modo per arrivare al Lago Bâlea.",
        come: "In auto da Cârțișoara lungo la Transfăgărășan; la funivia sale 3,7 km fino a 2.034 metri in circa 15 minuti.",
        quando: "Tutto l'anno; d'inverno è l'accesso al lago e all'Ice Hotel.",
        tempo: "1-2 ore con la funivia",
        costo: "Funivia 80 lei a tratta, circa 16 € (2026)",
        orari: "Funivia 9-17 d'inverno, 9-18 d'estate; parte con almeno 10 persone.",
        lat: 45.63657,
        lng: 24.60725,
        url: "https://www.balealac.ro"
      },
      {
        nome: "Lago Bâlea",
        testo: "Il lago glaciale a 2.034 metri sulla Transfăgărășan, con rifugi. D'estate si arriva in auto, nel resto dell'anno con la funivia da Bâlea Cascadă.",
        come: "In auto lungo la strada.",
        quando: "Estate, con cielo sereno.",
        tempo: "1 ora",
        costo: "Gratuito in auto; con la funivia 80 lei a tratta (2026)",
        lat: 45.60331,
        lng: 24.61705,
        url: "https://www.balealac.ro",
        consiglio: "Al Balea Lac Restaurant si mangia vista sul lago."
      },
      {
        nome: "Cetatea Poenari",
        testo: "I resti della fortezza legata a Vlad l'Impalatore, su una cresta sopra la valle dell'Argeș, sul versante sud della Transfăgărășan. Per arrivarci si salgono circa 1.480 gradini nel bosco: la vista sulla valle ripaga la fatica.",
        come: "In auto, poco a nord di Arefu, prima della diga di Vidraru salendo da sud.",
        quando: "Mattina o pomeriggio asciutto; si può chiudere per presenza di orsi.",
        tempo: "1,5-2 ore con la salita",
        lat: 45.3539,
        lng: 24.63526,
        consiglio: "È la vera fortezza di Dracula, molto più del castello di Bran: vale la fatica per chi ama la storia."
      },
      {
        nome: "Diga di Vidraru",
        testo: "Una diga ad arco alta 166 metri, completata nel 1966, sul fiume Argeș, con un grande lago artificiale. Una sosta panoramica sul lato sud della Transfăgărășan.",
        come: "In auto lungo la strada.",
        quando: "Giorno.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        orari: "Sempre visibile dalla strada.",
        lat: 45.36631,
        lng: 24.63147,
        consiglio: "Si vede anche dalla strada."
      },
      {
        nome: "Cittadella di Făgăraș",
        testo: "Una fortezza di pianura circondata da un fossato pieno d'acqua, tra le meglio conservate della Romania, nella cittadina di Făgăraș sulla strada tra Brașov e Sibiu. Dentro c'è il museo della Țara Făgărașului.",
        come: "In auto lungo la DN1, circa 1 ora da Sibiu e 1 ora da Brașov.",
        quando: "Come sosta di passaggio sulla strada Brașov-Sibiu.",
        tempo: "1 ora",
        lat: 45.84517,
        lng: 24.97375
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
    faq: [
      {
        domanda: "Quando è aperta la Transfăgărășan?",
        risposta: "Il tratto alto è aperto di norma dal 20 giugno al 31 ottobre, ma le date cambiano con la neve: vanno controllate prima di partire. Il resto dell'anno al Lago Bâlea si sale solo con la funivia da Bâlea Cascadă."
      },
      {
        domanda: "Quanto tempo serve per percorrere la Transfăgărășan?",
        risposta: "Da Sibiu al Lago Bâlea ci vuole circa un'ora e mezza; con le soste a Vidraru e Poenari serve una giornata intera. Dal lago a Bucarest restano circa 3 ore e 45 di guida."
      },
      {
        domanda: "Si vedono gli orsi sulla Transfăgărășan?",
        risposta: "Capita spesso, soprattutto sul versante sud. Non si scende dall'auto e non si dà da mangiare: è vietato e pericoloso, si fotografa dal finestrino."
      },
      {
        domanda: "Quanti giorni servono a Sibiu?",
        risposta: "Un giorno basta per il centro storico; con due si aggiunge la Transfăgărășan, con tre anche il Museo ASTRA e una chiesa fortificata."
      },
      {
        domanda: "Il Museo Brukenthal è aperto il lunedì?",
        risposta: "No: il Palazzo Brukenthal chiude il lunedì e il martedì. Negli altri giorni d'inverno apre dalle 9 alle 17."
      },
      {
        domanda: "Serve prenotare i ristoranti a Sibiu?",
        risposta: "Per le cantine piccole del centro sì: Crama Sibiul Vechi, per esempio, ha pochissimi tavoli e la prenotazione è obbligatoria."
      }
    ],
    gite: [
      {
        nome: "Cisnădioara",
        distanza: "circa 12 km, 20 minuti in auto",
        come: "In auto via Cisnădie; ultimo tratto a piedi in salita fino alla chiesa.",
        testo: "Una piccola basilica romanica fortificata su una collina sopra il villaggio sassone, con vista sui monti Cibin."
      },
      {
        nome: "Biertan",
        distanza: "circa 80 km, 1 ora e 30 in auto",
        come: "In auto verso Mediaș, poi strada secondaria.",
        testo: "Una delle chiese fortificate sassoni più grandi, patrimonio UNESCO, con tre cinte di mura in cima al villaggio."
      },
      {
        nome: "Salina Turda",
        distanza: "circa 1 ora e 30 in auto",
        come: "In auto lungo l'autostrada A1 e poi verso Turda; biglietto online.",
        testo: "Le saline sotterranee con il laghetto e le barchette: dentro fa fresco tutto l'anno, serve una felpa."
      },
      {
        nome: "Sighișoara",
        distanza: "circa 1 ora e 45-2 ore in auto",
        come: "In auto o in treno.",
        testo: "Il borgo medievale UNESCO con la Torre dell'Orologio, abbinabile a Viscri o Biertan."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno a Sibiu",
        tappe: [
          "Piața Mare e Museo Brukenthal al mattino",
          "Torre del Consiglio e Piața Mică",
          "Ponte delle Bugie e Passaggio delle Scale verso la città bassa",
          "Cattedrale evangelica e Piața Huet",
          "Mura di Strada Cetății nel pomeriggio",
          "Cena in una cantina del centro, prenotata"
        ]
      },
      {
        titolo: "2 giorni: Sibiu e Transfăgărășan",
        tappe: [
          "Giorno 1: Sibiu come nel programma di un giorno",
          "Giorno 2: partenza presto, 1 ora e 30 fino a Bâlea Cascadă, tornanti fino al Lago Bâlea, discesa sul versante sud con Vidraru e Poenari"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: centro storico di Sibiu",
          "Giorno 2: Museo ASTRA al mattino, pomeriggio a Cisnădioara o alla chiesa fortificata di Biertan",
          "Giorno 3: Transfăgărășan da nord a sud, con il Lago Bâlea, la diga di Vidraru e Poenari, poi Curtea de Argeș o il rientro a Bucarest (circa 3 ore e 45 dal lago)"
        ]
      }
    ],
    zone: [
      {
        nome: "Città alta (centro storico)",
        testo: "Hotel e pensioni intorno alla Piața Mare e alla Piața Mică. La zona più cara, soprattutto durante il mercatino di Natale.",
        perChi: "chi vuole tutto a piedi",
        fascia: "60-130 €"
      },
      {
        nome: "Città bassa (Orașul de Jos)",
        testo: "Le strade sotto le mura, con case basse e pensioni familiari, a 5-10 minuti a piedi in salita dalle piazze.",
        perChi: "chi cerca prezzi più bassi restando vicino al centro",
        fascia: "45-90 €"
      },
      {
        nome: "Cârțișoara e il versante nord della Transfăgărășan",
        testo: "Pensioni di paese all'imbocco nord della strada, a circa un'ora da Sibiu. Comode per essere ai tornanti prima del traffico.",
        perChi: "chi vuole partire all'alba sulla strada",
        fascia: "40-80 €"
      }
    ],
    esperienzeSlugs: ['transfagarasan'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'I tornanti della Transfăgărășan tra le montagne della Romania',
    immagine: '/images/transilvania/transfagarasan-stock.jpg',
  },
]
