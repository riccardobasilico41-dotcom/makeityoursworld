import type { Destinazione } from '@/lib/types'

// Prima uscita polacca dell'archivio, collegata al viaggio "Cracovia in un
// weekend lungo" (src/content/viaggi/53-cracovia-weekend.md, dati in
// src/content/viaggi-dati/cracovia-weekend.ts), viaggio fatto da Rick: visitataPersonalmente è
// true su entrambe le destinazioni e il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Auschwitz-Birkenau è
// scritta in un registro deliberatamente sobrio: informativo, mai da
// "attrazione". Nessun nome di hotel, ristorante o operatore è stato
// inventato. Prezzi e regole di prenotazione (soprattutto quelle di
// Auschwitz-Birkenau) cambiano spesso e vanno riverificati sui canali
// ufficiali prima di partire.

export const destinazioniPolonia: Destinazione[] = [
  {
    slug: 'cracovia',
    paeseSlug: 'polonia',
    ordine: 1,
    nome: 'Cracovia',
    tipologia: ['città', 'storia', 'arte'],
    giorniConsigliati: '3-4 giorni, comprese le gite fuori porta ad Auschwitz-Birkenau e alla Miniera di sale di Wieliczka',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato con amici in un weekend lungo, tre notti, tutto a piedi e con i mezzi: Rynek Główny e il Wawel, Kazimierz e Podgórze, e l'ultimo giorno la Miniera di sale di Wieliczka.",
    introduzione:
      'La capitale polacca fino al 1596 e l\'unica grande città del paese uscita quasi intatta dalla Seconda guerra mondiale: il centro storico, patrimonio UNESCO dal 1978 (nella prima lista mai compilata), conserva la struttura medievale con Rynek Główny, una delle piazze del mercato più grandi d\'Europa, il colle del castello di Wawel e, poco più a sud, Kazimierz, l\'ex quartiere ebraico oggi tra i più vivi della città.',
    percheAndarci:
      'Perché concentra in un\'area percorribile a piedi otto secoli di storia polacca (la sede del potere reale a Wawel, il cuore mercantile e religioso di Rynek Główny, la memoria ebraica di Kazimierz), e perché è la base naturale per due delle visite più importanti della Polonia meridionale: Auschwitz-Birkenau e la Miniera di sale di Wieliczka.',
    cosaVedere: [
      'Rynek Główny, la piazza del mercato medievale tra le più grandi d\'Europa, con al centro la Sukiennice (Cloth Hall), l\'antica hala dei tessuti oggi mercato coperto di souvenir al piano terra e galleria di pittura polacca dell\'Ottocento al piano superiore',
      'La Basilica di Santa Maria, gotica, con il grande altare ligneo di Veit Stoss (Wit Stwosz) e le due torri diseguali: dalla più alta, ogni ora, suona l\'Hejnał mariacki, la breve melodia di tromba suonata dal vivo verso i quattro punti cardinali e interrotta di colpo a metà nota, in memoria della leggendaria guardia colpita da una freccia mentre dava l\'allarme durante un\'invasione tatara',
      'Il colle di Wawel, con il Castello Reale (le Sale di Stato, gli Appartamenti Reali, il Tesoro e l\'Armeria) e la Cattedrale, luogo di incoronazione e sepoltura dei re polacchi, con la Campana di Sigismondo e le tombe reali nelle cripte',
      'Kazimierz, la città fondata nel 1335 e per secoli centro della vita ebraica di Cracovia: la Old Synagogue, tra le sinagoghe più antiche della Polonia, e Plac Nowy, la piazza intorno a cui oggi si concentrano i bar della città',
      'Il Barbacane e i resti delle mura medievali, all\'estremità nord del centro storico',
      'Il quartiere di Podgórze, al di là della Vistola, con la Piazza degli Eroi del Ghetto (Plac Bohaterów Getta), dove file di sedie di metallo vuote ricordano il ghetto ebraico istituito qui dai nazisti nel 1941, e la ex Fabbrica di Oskar Schindler, oggi museo',
    ],
    cosaFare: [
      'Ascoltare l\'Hejnał dalla torre di Santa Maria, possibilmente in punto, per sentire l\'interruzione improvvisa della melodia',
      'Camminare sulla Via Reale, il percorso storico delle incoronazioni dal Barbacane a Wawel passando per Rynek Główny',
      'Scendere nel Rynek Underground Museum, sotto la piazza, con i resti archeologici del mercato medievale portati alla luce durante i restauri',
      'Un tour a piedi o in bici dell\'ex ghetto di Podgórze e della Fabbrica di Schindler, come contrappunto storico a Kazimierz',
      'Una serata tra i bar di Plac Nowy a Kazimierz, o un tour enogastronomico (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Il centro storico (Stare Miasto) dentro le Planty, gli antichi viali che seguono il tracciato delle mura abbattute, è la scelta più comoda e concentra la maggior parte dell\'offerta turistica. Kazimierz è l\'alternativa più vissuta e meno cara, a breve distanza a piedi da Rynek Główny, con una vita serale propria.',
    doveMangiare:
      'I pierogi restano il piatto simbolo, in decine di varianti dolci e salate; lo żurek, zuppa a base di farina di segale fermentata, spesso servito dentro una pagnotta scavata; il bigos, lo stufato di cavolo e carne; le zapiekanki, la versione polacca dello street food da forno, molto diffusa a Kazimierz sul Plac Nowy. I bary mleczne ("bar del latte"), mense economiche ereditate dall\'epoca comunista e sussidiate ancora oggi, restano il modo più semplice ed economico di mangiare cucina polacca di tutti i giorni. Da bere, la vodka polacca, spesso aromatizzata (żubrówka all\'erba di bisonte tra le più note).',
    comeArrivare:
      "Aeroporto Giovanni Paolo II (KRK, Balice), a circa 11 km dal centro: il treno diretto SKA1 arriva a Kraków Główny in 17-20 minuti, circa 20 PLN, con corse ogni mezz'ora fino a tarda sera; i bus urbani 208 e 252, di notte il 902, sono più lenti e costano circa 6 PLN. Dall'Italia non c'è un treno diretto comodo: si arriva in aereo. Da Varsavia ci sono treni veloci diretti.",
    comeSpostarsi: 'Centro storico tutto a piedi. Per il resto della città, tram e bus della rete KMK, con biglietti a tempo economici. Non serve auto.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, affollata e più calda; novembre-marzo è freddo ma gestibile, con i mercatini di Natale a dicembre',
    costi: "Città economica: musei, ristoranti e mezzi pubblici costano meno che nell'Europa occidentale. Budget indicativo al giorno a persona, in doppia: **economico 50-70 €** (ostello o appartamento, bar mleczny e tram), **medio 90-130 €** (hotel nel centro storico, ristoranti e musei), **alto da 200 €** (hotel storici sul Rynek e gite con tour organizzato).",
    erroriDaEvitare: [
      'Cambiare valuta nei kantor con il tabellone vistoso vicino a Rynek Główny senza controllare bene il tasso: alcuni mostrano tassi vantaggiosi per valute che non si stanno cambiando',
      'Seguire chi avvicina per strada proponendo "un bar fantastico" intorno a Rynek Główny, via Floriańska o Kazimierz: è lo schema classico che porta a conti gonfiati a dismisura',
      'Sottovalutare la coda per salire sulla torre della Basilica di Santa Maria o per la Cattedrale di Wawel in alta stagione: conviene arrivare presto',
      'Programmare Auschwitz-Birkenau come una tappa qualunque incastrata tra due musei: è una giornata che va isolata e affrontata con la testa giusta',
    ],
    luoghi: [
      {
        "nome": "Rynek Główny e Sukiennice",
        "testo": "La piazza del mercato medievale, spesso citata tra le più grandi d'Europa, con al centro la Sukiennice (la Cloth Hall) e la torre isolata del vecchio municipio, demolito nell'Ottocento. Intorno stanno la Basilica di Santa Maria e i caffè con i tavoli all'aperto.",
        "come": "Dalla stazione centrale a piedi.",
        "quando": "Mattina presto o sera, quando si accendono le luci; di giorno è affollata.",
        "tempo": "1-2 ore",
        "costo": "ingresso libero",
        "lat": 50.06166,
        "lng": 19.93722,
        "consiglio": "Sotto la piazza c'è un museo sotterraneo con i resti del mercato medievale."
      },
      {
        "nome": "Basilica di Santa Maria",
        "testo": "Chiesa gotica con il grande altare ligneo tardogotico di Veit Stoss, della fine del Quattrocento, e due torri diseguali. Dalla torre più alta, ogni ora, giorno e notte, suona l'Hejnał mariacki, la melodia di tromba che si interrompe di colpo; quella di mezzogiorno va in diretta alla radio nazionale.",
        "come": "Sulla piazza; il biglietto per l'interno si compra a lato.",
        "quando": "Mattina; per l'Hejnał stare sulla piazza in punto.",
        "tempo": "45 minuti",
        "costo": "20 PLN la basilica, circa 5 €; 20 PLN la torre dell'Hejnał, circa 5 € (2026)",
        "orari": "Basilica: lunedì-sabato 11:30-18, domenica e festivi 14-18. Torre: martedì-sabato 10-17:30, domenica 13-17:30, chiusa da novembre ad aprile.",
        "lat": 50.06167,
        "lng": 19.93917,
        "url": "https://mariacki.com/en/tourists/",
        "consiglio": "Orari di visita e apertura dell'altare sul sito ufficiale."
      },
      {
        "nome": "Colle di Wawel",
        "testo": "Il colle sopra la Vistola con il Castello Reale e la Cattedrale dove dal 1320 al 1764 furono incoronati i re polacchi, che è anche il loro principale luogo di sepoltura. Nella torre di Sigismondo c'è la campana del 1521, suonata solo nelle grandi occasioni. Mostre e percorsi hanno biglietti distinti.",
        "come": "A piedi dal centro. I biglietti si comprano sul posto o online sul sito ufficiale.",
        "quando": "Mattina presto, prima dei gruppi.",
        "tempo": "3 ore",
        "costo": "Castello: 95 PLN il percorso dei due piani, circa 22 €; Tesoro e Armeria 47 PLN ciascuno, circa 11 €. Cattedrale con tombe reali e campana di Sigismondo 26 PLN, circa 6 € (2026)",
        "orari": "Cattedrale: lunedì-sabato 9-17 (9-16 da novembre a marzo), domenica dalle 12:30. Le mostre del castello hanno orari stagionali, sul sito ufficiale.",
        "lat": 50.05389,
        "lng": 19.93472,
        "url": "https://wawel.krakow.pl",
        "consiglio": "Nei giorni pieni conviene comprare online in anticipo."
      },
      {
        "nome": "Kazimierz",
        "testo": "La città fondata nel 1335 da Casimiro il Grande e per secoli cuore della vita ebraica di Cracovia, con la Sinagoga Vecchia, tra le più antiche della Polonia, e altre sinagoghe storiche. Oggi è anche il quartiere dei caffè, delle gallerie e dei locali.",
        "come": "A piedi o in tram da Stare Miasto.",
        "quando": "Giorno per le sinagoghe; sera per i locali.",
        "tempo": "3 ore",
        "costo": "Sinagoga Vecchia 22 PLN, circa 5 €; gratis il lunedì (2026)",
        "orari": "Sinagoga Vecchia: lunedì 10-15, martedì-domenica 9-17. Le sinagoghe attive chiudono il sabato.",
        "lat": 50.05141,
        "lng": 19.94857,
        "url": "https://www.jewishkrakow.net",
        "consiglio": "La piazza Nowy è nota per le zapiekanki, i panini lunghi."
      },
      {
        "nome": "Fabbrica di Schindler e Podgórze",
        "testo": "Il museo nell'ex fabbrica di Oskar Schindler racconta la Cracovia occupata dai nazisti. Vicino c'è Piazza degli Eroi del Ghetto, con le sedie vuote a ricordo del ghetto.",
        "come": "In tram nel quartiere di Zabłocie o a piedi da Kazimierz.",
        "quando": "Mattina. Chiuso il primo martedì del mese.",
        "tempo": "2-3 ore",
        "costo": "60 PLN intero, 45 ridotto (2026); il lunedì ingresso gratuito, ma senza prenotazione",
        "orari": "Lunedì 10-15, martedì-domenica 9-20; chiuso il primo martedì del mese.",
        "lat": 50.0474,
        "lng": 19.96175,
        "url": "https://muzeumkrakowa.pl/en/branches/oskar-schindlers-enamel-factory",
        "consiglio": "Biglietti e orari sul sito del Museo storico di Cracovia; d'estate comprarli in anticipo."
      },
      {
        "nome": "Miniera di sale di Wieliczka",
        "testo": "Una miniera di sale scavata dal Duecento, nella prima lista UNESCO del 1978, nella cittadina di Wieliczka vicino a Cracovia. Il percorso turistico, di circa 3,5 km, scende fino a 135 metri e passa per cappelle scolpite nel sale, laghi di salamoia e la cappella di Santa Kinga, dove si celebrano anche matrimoni.",
        "come": "Treno o bus da Cracovia, poi a piedi fino all'ingresso.",
        "quando": "Prenotare online in anticipo.",
        "tempo": "2-3 ore di visita, più il viaggio",
        "costo": "da 121 PLN (2026)",
        "lat": 49.97917,
        "lng": 20.06389,
        "url": "https://www.wieliczka-saltmine.com",
        "consiglio": "Portare una giacca: sotto terra ci sono 17-18 gradi anche d'estate. Il percorso ha circa 800 gradini."
      },
      {
        "nome": "Planty e Barbacane",
        "testo": "L'anello di parchi sul tracciato delle mura demolite, che circonda la città vecchia, con la Porta di San Floriano e il Barbacane, salvati dalla demolizione delle mura nell'Ottocento: il Barbacane è un raro avamposto fortificato gotico ancora in piedi.",
        "come": "A piedi, intorno al centro.",
        "quando": "Mattina o sera, con luce morbida.",
        "tempo": "1 ora",
        "costo": "ingresso libero",
        "orari": "Il Barbacane, sede del Museo di Cracovia, è temporaneamente chiuso alle visite (novembre 2026); le Planty sono sempre aperte.",
        "lat": 50.06553,
        "lng": 19.94166,
        "consiglio": "Una passeggiata gratuita per orientarsi."
      },
      {
        "nome": "Rynek Underground",
        "testo": "Un museo sotto la piazza del mercato, ricavato negli scavi archeologici degli anni Duemila: si cammina tra le fondazioni delle botteghe medievali, le vecchie strade e le tombe, con ricostruzioni e schermi. Spiega bene com'era la Cracovia del commercio.",
        "come": "Ingresso dal lato nord della Sukiennice. Biglietti a fasce orarie, meglio comprati online.",
        "quando": "Primo mattino o tardo pomeriggio. Il martedì l'ingresso è gratuito ma con orario ridotto e molta più gente.",
        "tempo": "1 ora e mezza",
        "costo": "45 PLN intero, circa 11 €; gratis il martedì (2026)",
        "orari": "Lunedì 10-19 (chiuso il secondo lunedì del mese), martedì 10-15, mercoledì-giovedì 10-19, venerdì-domenica 10-20.",
        "lat": 50.06202,
        "lng": 19.93776,
        "url": "https://muzeumkrakowa.pl/en/branches/rynek-underground"
      },
      {
        "nome": "Collegium Maius",
        "testo": "L'edificio più antico dell'Università Jagellonica, del Quattrocento, con un cortile gotico ad arcate. Dentro c'è il museo dell'università, con aule, biblioteca e strumenti scientifici; tra gli studenti dell'ateneo c'era Copernico.",
        "come": "A piedi da Rynek Główny, in via Jagiellońska. Il cortile si attraversa liberamente, gli interni si visitano con percorso guidato a orario.",
        "quando": "Mattina. Gli orari cambiano spesso per eventi universitari: controllare il calendario prima.",
        "tempo": "1 ora",
        "lat": 50.06167,
        "lng": 19.93389,
        "url": "https://maius.uj.edu.pl/zwiedzanie"
      },
      {
        "nome": "Via Grodzka e chiesa dei Santi Pietro e Paolo",
        "testo": "La via che scende dal Rynek al Wawel, ultimo tratto della Via Reale. A metà c'è la chiesa barocca dei Santi Pietro e Paolo, con le statue dei dodici apostoli sulla cancellata, e accanto la romanica Sant'Andrea, una delle chiese più antiche della città.",
        "come": "A piedi, sulla strada tra la piazza e il castello.",
        "quando": "Al mattino andando verso il Wawel, o la sera con le facciate illuminate.",
        "tempo": "30-45 minuti",
        "lat": 50.0569,
        "lng": 19.939,
        "consiglio": "Entrare in Sant'Andrea, piccola e spesso vuota, che sembra una fortezza."
      },
      {
        "nome": "Tumulo di Kościuszko",
        "testo": "Una collina artificiale alta 34 metri, costruita nell'Ottocento in memoria dell'eroe nazionale Tadeusz Kościuszko, dentro una fortezza austriaca. Dalla cima si vede tutta Cracovia e, nelle giornate limpide, i Tatra.",
        "come": "Bus dal centro fino al quartiere di Salwator, poi a piedi in salita; oppure a piedi lungo la Vistola e il viale Aleja Waszyngtona.",
        "quando": "Giornate limpide, meglio di pomeriggio.",
        "tempo": "2 ore con il viaggio",
        "costo": "34 PLN intero, circa 8 €; 26 PLN ridotto (2026), solo alla cassa sul posto",
        "orari": "Tutti i giorni dalle 9 alle 15:30.",
        "lat": 50.05283,
        "lng": 19.8895,
        "url": "https://www.kopieckosciuszki.pl"
      },
      {
        "nome": "Nowa Huta",
        "testo": "Il quartiere costruito dal 1949 come città operaia modello dell'epoca comunista, attorno alle acciaierie: viali larghi, palazzi in stile realismo socialista e la Piazza Centrale a raggiera. Racconta una Cracovia diversa da quella medievale.",
        "come": "Tram dal centro fino alla Piazza Centrale (Plac Centralny), circa mezz'ora.",
        "quando": "Di giorno, in settimana. Il Museo di Nowa Huta è temporaneamente chiuso (novembre 2026).",
        "tempo": "mezza giornata",
        "costo": "il quartiere si gira liberamente",
        "lat": 50.07222,
        "lng": 20.03722,
        "consiglio": "Arrivare fino alla chiesa dell'Arca del Signore, costruita dagli abitanti negli anni Sessanta nonostante i divieti del regime."
      },
      {
        "nome": "Piazza degli Eroi del Ghetto",
        "testo": "Nel 1941 i nazisti chiusero qui, a Podgórze, il ghetto ebraico di Cracovia. Oggi la piazza è un memoriale: settanta sedie di metallo vuote ricordano i deportati. Sullo stesso lato c'è la Farmacia sotto l'Aquila, dove il farmacista Tadeusz Pankiewicz aiutò gli abitanti del ghetto.",
        "come": "A piedi da Kazimierz attraverso il ponte pedonale Bernatka, o in tram.",
        "quando": "Di giorno, insieme alla Fabbrica di Schindler, che è a 10 minuti a piedi.",
        "tempo": "30 minuti",
        "costo": "piazza libera",
        "lat": 50.04667,
        "lng": 19.95417
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Rynek Główny, Sukiennice e Basilica di Santa Maria, con l'Hejnał allo scoccare dell'ora",
          "Via Grodzka fino al colle di Wawel: Cattedrale e una sezione del castello",
          "Pranzo a Kazimierz, poi la Sinagoga Vecchia",
          "Sera: Planty e Barbacane, cena nel centro storico"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1 come sopra",
          "Giorno 2, mattina: Fabbrica di Schindler e Piazza degli Eroi del Ghetto a Podgórze",
          "Pomeriggio: Rynek Underground e Collegium Maius",
          "Sera: Plac Nowy a Kazimierz, con una zapiekanka"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Auschwitz-Birkenau con guida-educatore (prenotazione sul sito del Museo), oppure la Miniera di sale di Wieliczka e, nel pomeriggio, il Tumulo di Kościuszko o Nowa Huta"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stare Miasto",
        "perChi": "Chi vuole stare vicino alle attrazioni",
        "testo": "Cuore storico, vicino a tutto; rumore di notte vicino ai locali.",
        "fascia": "90-160 €"
      },
      {
        "nome": "Kazimierz",
        "perChi": "Chi cerca atmosfera e vita serale",
        "testo": "Quartiere con caffè e locali, alloggi charmant; più movimentato la sera.",
        "fascia": "70-130 €"
      },
      {
        "nome": "Podgórze",
        "perChi": "Chi vuole tranquillità e prezzi più bassi",
        "testo": "Oltre la Vistola, raggiungibile a piedi dal centro.",
        "fascia": "60-110 €"
      },
      {
        "nome": "Kleparz e la zona della stazione",
        "perChi": "Chi arriva in treno o dall'aeroporto e vuole spendere meno",
        "testo": "Appena a nord delle Planty, vicino a Kraków Główny e alla Galeria Krakowska. Meno atmosfera, ma si è a dieci minuti a piedi dal Rynek e il treno per l'aeroporto parte sotto casa.",
        "fascia": "60-110 €"
      }
    ],
    sapori: [
      {
        nome: "Pierogi",
        testo: "Ravioli ripieni di formaggio e patate, carne o cavolo e funghi."
      },
      {
        nome: "Zapiekanka",
        testo: "Mezza baguette gratinata con funghi e formaggio, street food di Plac Nowy."
      },
      {
        nome: "Obwarzanek krakowski",
        testo: "Ciambella di pane intrecciata, venduta dai carrettini in strada."
      },
      {
        nome: "Żurek",
        testo: "Zuppa acida di segale con salsiccia e uovo, spesso servita in una pagnotta."
      }
    ],
    attenzioni: [
      "Taxi: usare solo quelli ufficiali, con nome e telefono della compagnia su porta e tetto e le tariffe esposte; quelli con lo stemma ma senza nome non sono ufficiali.",
      "Carrozze con cavalli: tariffe alte e poco chiare, concordare prima.",
      "Cambio: usare ATM e rifiutare il pagamento in euro.",
      "Locali notturni: controllare bene il conto quando si paga con carta a fine serata e non lasciare il bicchiere incustodito.",
      "Borseggiatori nei luoghi affollati e turistici, nelle stazioni e sui treni."
    ],
    gite: [
      {
        "nome": "Auschwitz-Birkenau",
        "distanza": "66 km, circa 1 ora e mezza in bus",
        "come": "Bus diretto dalla stazione dei pullman di Cracovia, ogni 20-40 minuti, circa 34 PLN a tratta; o treno fino a Oświęcim. Ingresso gratuito con prenotazione online sul sito del Museo, e nelle ore centrali solo con guida-educatore.",
        "testo": "Il campo di concentramento e sterminio dove morirono oltre un milione di persone, quasi tutte ebrei. Si visitano Auschwitz I e Birkenau, collegati da una navetta gratuita. È una giornata da isolare dal resto del viaggio (vedi la scheda dedicata)."
      },
      {
        "nome": "Zakopane e i Tatra",
        "distanza": "circa 100 km, 2 ore in bus o in treno",
        "come": "Bus frequenti dalla stazione dei pullman o treni da Kraków Główny.",
        "testo": "La città di montagna polacca, ai piedi dei Tatra, con le case di legno in stile Zakopane e la funicolare del Gubałówka. D'inverno si scia, d'estate si cammina verso il lago Morskie Oko."
      },
      {
        "nome": "Parco Nazionale di Ojców",
        "distanza": "circa 25 km, 40 minuti in auto o in bus",
        "come": "Bus dal centro di Cracovia o auto.",
        "testo": "Il parco nazionale più piccolo della Polonia: una valle di rocce calcaree, grotte e i castelli della Via delle Aquile, tra cui Pieskowa Skała. Buono per una mezza giornata di camminate facili."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Cracovia?",
        "risposta": "Due giorni pieni per la città, tre o quattro aggiungendo Auschwitz-Birkenau e la Miniera di Wieliczka. Le due gite non vanno messe nello stesso giorno."
      },
      {
        "domanda": "Serve la prenotazione per Auschwitz-Birkenau?",
        "risposta": "Sì: l'ingresso è gratuito ma si prenota online sul sito ufficiale del Museo, fino a tre mesi prima. Nella fascia centrale della giornata si entra solo con una guida-educatore o con un tour organizzato."
      },
      {
        "domanda": "A Cracovia si paga in euro?",
        "risposta": "No, in złoty (PLN). Le carte funzionano quasi ovunque; quando il terminale propone il pagamento in euro conviene rifiutare e pagare in złoty."
      },
      {
        "domanda": "Dove dormire a Cracovia?",
        "risposta": "Nel centro storico dentro le Planty per avere tutto a piedi, a Kazimierz per la vita serale e prezzi un po' più bassi. Podgórze è più tranquillo, oltre il fiume."
      },
      {
        "domanda": "Come si arriva in centro dall'aeroporto di Cracovia?",
        "risposta": "Con il treno SKA1 fino a Kraków Główny, 17-20 minuti, circa 20 PLN, ogni mezz'ora circa. I biglietti di tram e bus non valgono sul treno."
      },
      {
        "domanda": "Wieliczka va prenotata?",
        "risposta": "È consigliato, soprattutto nel weekend: i biglietti sono a orario sul sito della miniera e i tour nelle lingue diverse da polacco e inglese si comprano solo online."
      }
    ],
    esperienzeSlugs: ['wieliczka-miniera-di-sale', 'kazimierz-food-vodka-tour'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: 'La Sukiennice illuminata di sera sulla piazza del Mercato di Cracovia, con la torre gotica della Basilica di Santa Maria a sinistra',
    immagine: '/images/polonia/cracovia.jpg',
  },
  {
    slug: 'auschwitz-birkenau',
    paeseSlug: 'polonia',
    ordine: 2,
    nome: 'Auschwitz-Birkenau',
    tipologia: ['memoria', 'storia'],
    giorniConsigliati: 'mezza giornata, come gita da Cracovia',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato durante il weekend a Cracovia con amici: una giornata intera dedicata solo a questo, senza altri programmi. Siamo rientrati a Cracovia nel tardo pomeriggio.",
    introduzione:
      'L\'ex campo di concentramento e sterminio nazista tedesco, in funzione dal 1940 al 1945 nei pressi della città polacca di Oświęcim, a ovest di Cracovia. È composto da due siti distinti collegati da un servizio navetta: Auschwitz I, il campo originario e oggi sede del museo principale, e Auschwitz II-Birkenau, il campo di sterminio più esteso costruito a partire dal 1941 a poca distanza. Dal 1947 il sito è un museo statale polacco, dal 1979 Patrimonio dell\'Umanità UNESCO.',
    percheAndarci:
      'Perché è il luogo simbolo dello sterminio nazista degli ebrei d\'Europa e di altri gruppi perseguitati, e perché la visita, con le testimonianze materiali conservate sul posto, aiuta a capire la storia come nessun libro riesce a fare del tutto. Richiede tempo, preparazione e il giusto stato d\'animo.',
    cosaVedere: [
      'Il cancello di Auschwitz I con la scritta "Arbeit macht frei"',
      'I blocchi-museo di Auschwitz I, con le esposizioni permanenti e nazionali (comprese le vetrine con oggetti personali delle vittime: valigie, occhiali, scarpe, capelli)',
      'Il Blocco 11 e il muro delle esecuzioni',
      'La camera a gas e il forno crematorio conservati ad Auschwitz I',
      'La distesa di Auschwitz II-Birkenau, molto più estesa, con l\'ingresso ferroviario e la rampa dove avveniva la selezione, le baracche in gran parte in legno e i resti delle camere a gas fatte saltare dai tedeschi in ritirata nel 1945',
      'Il monumento internazionale alle vittime, tra le rovine dei crematori di Birkenau',
    ],
    cosaFare: [],
    doveDormire: 'Si visita in giornata da Cracovia: non è pensata come tappa con pernottamento a Oświęcim.',
    doveMangiare: 'Un piccolo bar/self-service è presente nell\'area del centro visitatori di Auschwitz I; la maggior parte dei visitatori mangia al rientro a Cracovia.',
    comeArrivare:
      'Da Cracovia: bus diretti dalla stazione dei pullman fino al parcheggio del Museo, oppure treno regionale fino alla stazione di Oświęcim e poi a piedi o in bus fino all\'ingresso. Esistono anche tour organizzati con transfer, guida e biglietto inclusi, con partenza da Cracovia.',
    comeSpostarsi: 'Tra Auschwitz I e Birkenau funziona una navetta gratuita frequente; a piedi si cammina molto, su terreno in gran parte scoperto.',
    periodoMigliore:
      'tutto l\'anno, con considerazioni diverse: d\'estate fa caldo e i percorsi (soprattutto a Birkenau, quasi privo di ombra) diventano faticosi; d\'inverno il freddo intenso restituisce forse più di ogni altra stagione la durezza del luogo. L\'alta stagione (giugno-agosto) è anche il periodo con più difficoltà a trovare uno slot di ingresso libero.',
    costi:
      'L\'ingresso al sito è gratuito. Il costo, quando c\'è, è quello del trasporto (bus/treno) o del tour organizzato con guida, che di solito costa alcune decine di euro a persona.',
    erroriDaEvitare: [
      'Presentarsi senza prenotazione online: le entry card, gratuite, vanno riservate in anticipo sul sito ufficiale visit.auschwitz.org: non si acquistano più in loco',
      'Non controllare gli orari stagionali: nelle ore centrali della giornata l\'ingresso è consentito solo con una guida-educatore del Museo o un tour organizzato; il tour libero senza guida è possibile solo nelle fasce orarie residue, più tardi nel pomeriggio secondo la stagione',
      'Sottovalutare i tempi: una visita completa a entrambi i siti richiede almeno 3-4 ore, più il trasporto andata e ritorno da Cracovia: serve una giornata intera, senza altre tappe',
      'Vestirsi o comportarsi come si farebbe in una qualunque attrazione turistica: il regolamento del Museo richiede un abbigliamento e un comportamento rispettosi, e su foto e riprese vanno seguite le indicazioni sul posto',
      'Portare bagagli ingombranti: c\'è un limite di dimensione per gli zaini ammessi all\'interno, con un deposito per quelli più grandi',
    ],
    luoghi: [
      {
        nome: "Auschwitz I (Museo)",
        testo: "Il primo campo, con la scritta «Arbeit macht frei» all'ingresso, i blocchi-museo con le esposizioni nazionali e le vetrine di oggetti personali delle vittime. È il luogo della memoria dove si capisce la scala dello sterminio.",
        come: "Dalla stazione degli autobus di Cracovia, bus o minibus fino a Oświęcim, oppure treno fino alla stazione e poi bus o a piedi.",
        quando: "Il pass nominativo va prenotato online; per gran parte della giornata si entra solo con guida.",
        tempo: "mezza giornata; il tour guidato standard dura circa 3 ore e mezza",
        costo: "l'ingresso è libero ma richiede il pass per fascia oraria",
        url: "https://www.auschwitz.org",
        consiglio: "Zaini e borse non possono superare 35x25x15 cm: quelli più grandi vanno lasciati fuori."
      },
      {
        nome: "Auschwitz II-Birkenau",
        testo: "Il campo di sterminio vero e proprio, molto più esteso, con il binario d'ingresso, la rampa della selezione e le baracche in legno rimaste. Il monumento internazionale tra i resti dei crematori ricorda le vittime.",
        come: "Con il tour guidato il trasferimento da Auschwitz I è incluso.",
        quando: "Dopo la visita ad Auschwitz I.",
        tempo: "1,5-2 ore",
        url: "https://www.auschwitz.org",
        consiglio: "Un luogo da visitare in silenzio, senza selfie."
      },
      {
        nome: "Prenotazione e regole di visita",
        testo: "Il Museo gestisce un sistema di pass nominativi, in numero limitato. Le visite guidate per singoli ci sono in diverse lingue. Per gran parte del giorno si entra solo con guida; senza guida, con il pass gratuito, solo nelle ore indicate sul sito.",
        come: "Le prenotazioni si fanno solo online, su visit.auschwitz.org; in estate con largo anticipo.",
        quando: "Evitare weekend e festività.",
        url: "https://www.auschwitz.org",
        consiglio: "Diffidare dei rivenditori: il sito ufficiale è l'unico affidabile."
      }
    ],
    attenzioni: [
      "Le esposizioni sono molto dure: pensarci bene prima di portare bambini.",
      "Mettere in conto che la visita è emotivamente pesante: pianificare il resto del giorno con calma.",
      "Su foto e riprese seguire i cartelli e le indicazioni del personale."
    ],
    esperienzeSlugs: ['auschwitz-birkenau-visita-guidata'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: 'Il corpo di guardia in mattoni di Auschwitz II-Birkenau con la torre centrale e i binari che portano all\'ingresso, in bianco e nero',
    immagine: '/images/polonia/auschwitz-birkenau.jpg',
  },
]
