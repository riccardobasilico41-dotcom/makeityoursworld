import type { Destinazione } from '@/lib/types'

// Destinazioni dell'Egitto, costruite su ricerca documentale per le guide
// "egitto-mare-luxor-cairo" (71) ed "egitto-completo" (72), entrambi fatti
// dall'autore. miaEsperienza è assente e la UI mostra il placeholder.
// Prezzi indicativi a ottobre 2026, in lire egiziane (EGP) per turisti stranieri.

export const destinazioniEgitto: Destinazione[] = [
  {
    slug: 'cairo',
    paeseSlug: 'egitto',
    ordine: 1,
    nome: 'Il Cairo',
    tipologia: ['città', 'musei', 'cultura islamica'],
    giorniConsigliati: '2-3 giorni, piramidi escluse',
    visitataPersonalmente: true,
    introduzione:
      'Venti milioni di abitanti, traffico continuo e mille anni di architettura islamica: il Cairo è la porta d\'ingresso del Paese e la città dove si trovano i due grandi musei egizi.',
    percheAndarci:
      'Per il Grand Egyptian Museum con il tesoro completo di Tutankhamon, per il Cairo islamico tra moschee e madrase mamelucche, per il Cairo copto e per la sera al Khan el-Khalili.',
    cosaVedere: [
      'Il Grand Egyptian Museum (GEM) a Giza, con la scalinata monumentale e le gallerie di Tutankhamon',
      'Il Museo Egizio di piazza Tahrir, ancora pieno di pezzi straordinari',
      'La Cittadella di Saladino e la moschea di Muhammad Ali',
      'Il Cairo islamico: la moschea di Ibn Tulun, il complesso del sultano Hassan, la via al-Muizz',
      'Il Cairo copto: la Chiesa Sospesa e la sinagoga Ben Ezra',
      'Il Museo nazionale della civiltà egizia (NMEC), con la sala delle mummie reali',
    ],
    cosaFare: [
      'Passeggiare la sera nel bazar del Khan el-Khalili e bere un tè al caffè El Fishawy',
      'Un tramonto in feluca sul Nilo dalla Corniche',
      'Lo spettacolo di danza sufi Tannoura al Wekalet El Ghouri (conviene controllare prima i giorni)',
    ],
    doveDormire:
      'Per chi ha poco tempo conviene dormire a Giza, vicino alle piramidi e al GEM. Per chi resta di più, Zamalek (isola sul Nilo, tranquilla e piena di locali) o Downtown. Economiche: guesthouse con vista piramidi a Nazlet el-Semman · fascia media: hotel di Zamalek e Garden City · lusso: Marriott Mena House a Giza, i grandi hotel sul Nilo.',
    doveMangiare:
      'Koshari da Abou Tarek a Downtown, ful e taameya nei chioschi del mattino, cucina egiziana tradizionale da Zooba o Abou El Sid, pesce e mezze nei ristoranti di Zamalek.',
    comeArrivare: 'Aeroporto internazionale del Cairo (CAI); dalla primavera 2025 anche il Sphinx International Airport, vicino a Giza, servito da alcuni voli.',
    comeSpostarsi:
      'Uber e Careem, economici e senza trattative. Metropolitana utile per Downtown e il Cairo copto (fermata Mar Girgis). Evitare di guidare.',
    periodoMigliore: 'da ottobre ad aprile',
    costi:
      'GEM circa 1.830 EGP (35 $) dal 1° novembre 2026, con fascia oraria da prenotare online; Museo Egizio di Tahrir circa 550 EGP; Cittadella circa 550 EGP; NMEC circa 500 EGP (indicativi).',
    erroriDaEvitare: [
      'Arrivare al GEM senza biglietto prenotato: gli ingressi sono a fascia oraria e i giorni di punta si esauriscono',
      'Accettare la «guida gratuita» che si offre per strada o il «negozio di papiri di mio fratello»',
      'Prendere un taxi senza tassametro senza concordare il prezzo: meglio Uber o Careem',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Grand Egyptian Museum (GEM)",
        "testo": "Il museo nuovo vicino alle piramidi, con la scalinata monumentale e le gallerie dedicate a Tutankhamon. È il museo da vedere per primo.",
        "come": "Sta a Giza, raggiungibile dal centro con Uber o taxi. Il biglietto ha data e orario d'ingresso; l'unico sito ufficiale di vendita online è tickets.gem.eg, ma ci sono anche biglietterie sul posto.",
        "quando": "Gallerie aperte 9-18; mercoledì e sabato fino alle 21; ultimo ingresso un'ora prima della chiusura delle gallerie (2026). Meglio all'apertura.",
        "tempo": "3-4 ore",
        "url": "https://tickets.gem.eg/",
        "consiglio": "Prenotare l'orario d'ingresso prima di partire, solo sul sito ufficiale, e abbinarlo alle piramidi, che sono a pochi chilometri.",
        "costo": "Prezzi per stranieri aumentati dal 1° novembre 2026: controllarli sul sito ufficiale al momento della prenotazione."
      },
      {
        "nome": "Museo Egizio di piazza Tahrir",
        "testo": "Il museo storico inaugurato nel 1902, con migliaia di pezzi in sale piene e un po' vecchio stile. Resta pieno di oggetti straordinari anche dopo il trasferimento dei pezzi di Tutankhamon.",
        "come": "Metro fino a Sadat, a piedi dalla piazza. Audioguida o guida in loco.",
        "quando": "Aperto tutti i giorni 9-17, biglietteria fino alle 16; durante il Ramadan 9-16 (2026). Meglio la mattina presto, prima dei gruppi.",
        "tempo": "2 ore",
        "url": "https://egymonuments.gov.eg/en/museums/egyptian-museum/",
        "consiglio": "Scegliere poche sale e vederle bene, invece di correre su tutto il museo.",
        "costo": "550 EGP per adulti stranieri, 275 per studenti; audioguida 75 EGP (2026)"
      },
      {
        "nome": "Cittadella di Saladino e moschea di Muhammad Ali",
        "testo": "La fortezza voluta da Saladino nel XII secolo, sulla collina che domina la città, con la moschea ottomana di Muhammad Ali. Dal bordo, nelle giornate limpide, la vista arriva fino alle piramidi.",
        "come": "Taxi o Uber fino all'ingresso. Si gira a piedi dentro la cittadella, con scarpe comode.",
        "quando": "Aperta tutti i giorni 8-17 (2026). Il pomeriggio ha la luce migliore.",
        "tempo": "2 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/cairo-citadel/",
        "costo": "550 EGP per adulti stranieri, 275 per studenti (2026)"
      },
      {
        "nome": "Cairo islamico e via al-Muizz",
        "testo": "La strada pedonale con monumenti dall'epoca fatimide a quella ottomana: moschee, madrase, porte e mausolei. Un museo all'aperto, vivo di sera quando le facciate sono illuminate.",
        "come": "Ci si arriva dalla zona di Khan el-Khalili. Si cammina da nord a sud.",
        "quando": "Dal tardo pomeriggio fino a sera.",
        "tempo": "2-3 ore",
        "consiglio": "Salire su un minareto, dove permesso, regala la vista migliore della città vecchia."
      },
      {
        "nome": "Khan el-Khalili",
        "testo": "Il grande bazar del Cairo, con vicoli di argento, lampade, spezie, tessuti. È turistico, ma di sera si riempie anche di cairoti.",
        "come": "Taxi fino all'ingresso, poi a piedi. Il caffè El Fishawy è il punto di sosta classico.",
        "quando": "Sera.",
        "tempo": "2 ore",
        "consiglio": "Contrattare sempre, partendo molto più in basso del prezzo detto."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Grand Egyptian Museum",
          "Pranzo a Zamalek o a Downtown",
          "Pomeriggio: Cittadella e moschea di Muhammad Ali",
          "Sera: via al-Muizz e Khan el-Khalili"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come sopra, oppure Museo Egizio al mattino",
          "Giorno 2: Cairo copto e Cairo islamico, poi sera in feluca sul Nilo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Zamalek",
        "perChi": "chi vuole un quartiere tranquillo e curato",
        "testo": "Isola sul Nilo con caffè, ristoranti e gallerie. Più cara e un po' lontana dalle visite, ma comoda in Uber."
      },
      {
        "nome": "Downtown",
        "perChi": "chi vuole stare vicino al Museo Egizio",
        "testo": "Palazzi ottocenteschi, locali e rumore continuo. Gli hotel sono vecchi e di fascia media."
      },
      {
        "nome": "Giza",
        "perChi": "chi vuole le piramidi e il GEM",
        "testo": "Zona vicina ai siti, con hotel con vista piramidi. Il centro è lontano e il traffico pesante."
      }
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Riso, lenticchie, pasta, ceci e salsa piccante di pomodoro: il piatto di strada nazionale, nelle trattorie specializzate di tutta la città."
      },
      {
        "nome": "Ful e taameya",
        "testo": "Fave in pentola e falafel di fave per colazione, nei chioschi del mattino."
      },
      {
        "nome": "Molokhia",
        "testo": "Zuppa verde di corchoro con pollo o coniglio e riso."
      },
      {
        "nome": "Om Ali",
        "testo": "Dolce caldo di pasta sfoglia, latte, noci e uvetta."
      }
    ],
    attenzioni: [
      "La guida gratuita che si offre per strada, o il negozio di papiri o di profumi di un fratello, è un aggancio per portare in un negozio: rifiutare con calma.",
      "Taxi senza tassametro: concordare il prezzo o usare Uber e Careem.",
      "Nei bazar il primo prezzo è alto: contrattare e non comprare nulla sotto pressione.",
      "Il traffico è pesante: calcolare molto più tempo del previsto tra una tappa e l'altra.",
      "Tensioni nella regione: il governo britannico (ottobre 2026) segnala rischio di escalation, possibili cancellazioni di voli e chiusure improvvise del valico di Taba; sconsiglia i viaggi nel Nord Sinai e lungo il confine libico. Controllare viaggiaresicuri.it prima di partire."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'La moschea-madrasa del sultano Hassan e la moschea di al-Rifa\'i con i loro minareti, nel Cairo islamico',
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg',
  },
  {
    slug: 'piramidi',
    paeseSlug: 'egitto',
    ordine: 2,
    nome: 'Piramidi: Giza, Saqqara e Dahshur',
    tipologia: ['archeologia', 'deserto'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Le tre necropoli reali dell\'Antico Regno a sud-ovest del Cairo: Giza con Cheope, Chefren, Micerino e la Sfinge; Saqqara con la piramide a gradoni di Djoser; Dahshur con la piramide Romboidale e la piramide Rossa.',
    percheAndarci:
      'Per vedere in un giorno e mezzo l\'intera evoluzione della piramide, dalla prima a gradoni fino alla forma perfetta di Giza, e per entrare nelle camere interne di Saqqara e Dahshur, molto meno affollate di quelle di Cheope.',
    cosaVedere: [
      'La Grande Piramide di Cheope, anche all\'interno con biglietto a parte',
      'La Sfinge e il tempio a valle di Chefren',
      'Il punto panoramico delle nove piramidi, nel deserto dietro Micerino',
      'La piramide a gradoni di Djoser e le mastabe dipinte di Saqqara (Ti, Mereruka)',
      'Il Serapeum di Saqqara, con i sarcofagi dei tori Api',
      'La piramide Rossa di Dahshur, in cui si scende senza code',
    ],
    cosaFare: [
      'Entrare alle 7 all\'apertura per avere un\'ora di luce buona e meno gruppi',
      'Spostarsi sull\'altopiano con il bus elettrico interno invece che con cavalli e cammelli',
    ],
    comeArrivare: 'Giza è a 30-60 minuti dal centro del Cairo secondo il traffico; Saqqara e Dahshur a 45-60 minuti da Giza, in auto con autista o con un tour.',
    comeSpostarsi:
      'A Giza il bus elettrico interno collega ingresso, piramidi e Sfinge; per Saqqara e Dahshur serve un\'auto con autista per la giornata (indicativamente 30-50 $).',
    periodoMigliore: 'da ottobre ad aprile, sempre al mattino presto',
    costi:
      'Altopiano di Giza circa 700 EGP; interno della Grande Piramide circa 1.500 EGP; Saqqara circa 450-600 EGP con le tombe principali; Dahshur intorno ai 150-200 EGP (indicativi, i prezzi cambiano spesso).',
    erroriDaEvitare: [
      'Credere a chi dice che «l\'ingresso è chiuso» o che «bisogna passare da qui»: è il primo aggancio per il giro a pagamento in cammello',
      'Salire su un cammello senza aver concordato prezzo totale, durata e cosa include: la cifra raddoppia per scendere',
      'Comprare il biglietto per l\'interno di Cheope pensando di vedere decorazioni: le camere sono spoglie, l\'interesse è nel corridoio e nella Grande Galleria',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Piramidi e Sfinge di Giza",
        "testo": "La Grande Piramide di Cheope, quelle di Chefren e Micerino e la Sfinge: il gruppo più famoso dell'Egitto, sull'altopiano a sud-ovest del Cairo. L'interno delle piramidi richiede biglietti a parte.",
        "come": "Da Giza o dal Cairo in Uber o con un autista; si gira a piedi, in navetta o a cavallo.",
        "quando": "Aperto tutti i giorni 8-16 (2026). All'apertura la luce è migliore e ci sono meno gruppi.",
        "tempo": "3-4 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/giza-plateau/",
        "consiglio": "Il punto panoramico dietro Micerino mostra le tre piramidi insieme, senza folla.",
        "costo": "700 EGP per adulti stranieri, 350 per studenti (2026). Grande Piramide, piramidi di Chefren e Micerino, tomba di Meresankh III e cimitero degli operai a parte: prezzi in biglietteria."
      },
      {
        "nome": "Saqqara",
        "testo": "La piramide a gradoni di Djoser, considerata la prima grande costruzione in pietra tagliata, e le tombe dei nobili, come la mastaba di Mereruka, con rilievi molto belli.",
        "come": "In auto con autista da Giza o dal Cairo.",
        "quando": "Aperto tutti i giorni 8-16 (2026). Meglio la mattina.",
        "tempo": "2-3 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/saqqara/",
        "consiglio": "Le tombe dipinte valgono quanto la piramide e di solito hanno meno gente.",
        "costo": "600 EGP l'area per adulti stranieri; biglietto cumulativo con museo Imhotep, tombe dei nobili e del Nuovo Regno, Mereruka e Mehu 1.400 EGP (2026)"
      },
      {
        "nome": "Dahshur",
        "testo": "La piramide Rossa e la piramide Romboidale, di Snefru: i tentativi che portarono alla vera piramide liscia. Di solito c'è poca gente.",
        "come": "In auto con autista, vicino a Saqqara.",
        "quando": "Aperto tutti i giorni 8-17 (2026). Meglio la mattina, con meno caldo.",
        "tempo": "1-2 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/dahshur/",
        "consiglio": "Un'ottima aggiunta a Saqqara per chi ha un giorno intero con un autista.",
        "costo": "200 EGP per adulti stranieri, 100 per studenti (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Giza all'apertura",
          "Pranzo",
          "Pomeriggio a Saqqara",
          "Rientro al Cairo"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Giza e Grand Egyptian Museum",
          "Giorno 2: Saqqara e Dahshur con autista"
        ]
      }
    ],
    zone: [
      {
        "nome": "Giza",
        "perChi": "chi vuole le piramidi dalla finestra",
        "testo": "Hotel con vista, vicinissimi all'ingresso e al GEM. Zona rumorosa e poco curata."
      },
      {
        "nome": "Il Cairo",
        "perChi": "chi vuole altri quartieri a portata",
        "testo": "Si fa la giornata in Uber o con autista: più scelta di locali, ma parecchia strada nel traffico."
      }
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Piatto di riso, lenticchie, pasta e salsa piccante, per un pranzo economico."
      },
      {
        "nome": "Piccione ripieno (hamam mahshi)",
        "testo": "Un classico egiziano, farcito di riso o frikeh."
      },
      {
        "nome": "Tè alla menta",
        "testo": "Servito in ogni sosta, dolcissimo."
      },
      {
        "nome": "Pane baladi",
        "testo": "Pane piatto egiziano, cotto nei forni di quartiere."
      }
    ],
    attenzioni: [
      "Chi dice che l'ingresso è chiuso o che bisogna passare da un altro lato sta cercando di portarvi al giro a pagamento in cammello: ignorare.",
      "Cammello e cavallo: concordare prezzo totale, durata e cosa include, e farsi dire cosa succede per scendere.",
      "L'interno della Grande Piramide ha camere spoglie: l'interesse è nel corridoio e nella Grande Galleria. Claustrofobici, valutare.",
      "Non comprare papiri e souvenir all'ingresso dai venditori che si avvicinano."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Le piramidi di Giza che si stagliano sul deserto in una giornata limpida',
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg',
  },
  {
    slug: 'luxor',
    paeseSlug: 'egitto',
    ordine: 3,
    nome: 'Luxor',
    tipologia: ['archeologia', 'Nilo'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'antica Tebe, divisa dal Nilo in due: sulla riva est i templi dei vivi, Karnak e Luxor; sulla riva ovest la città dei morti, con la Valle dei Re, la Valle delle Regine e il tempio di Hatshepsut.',
    percheAndarci:
      'Per la più grande concentrazione di monumenti dell\'Egitto faraonico in un solo posto, e per le tombe dipinte che conservano ancora i colori originali.',
    cosaVedere: [
      'Il complesso di Karnak e la sala ipostila con 134 colonne',
      'Il tempio di Luxor, da vedere al tramonto e con l\'illuminazione serale',
      'La Valle dei Re: il biglietto base include tre tombe, Tutankhamon e Seti I si pagano a parte',
      'Il tempio funerario di Hatshepsut a Deir el-Bahari',
      'Medinet Habu, il tempio di Ramses III, con rilievi ancora colorati e pochi visitatori',
      'I Colossi di Memnone e il villaggio degli artigiani di Deir el-Medina',
    ],
    cosaFare: [
      'Il volo in mongolfiera all\'alba sulla riva ovest',
      'Attraversare il Nilo con il traghetto pubblico o in feluca',
      'Una gita in giornata al tempio di Dendera o di Abydos',
    ],
    doveDormire:
      'Riva est per comodità (ristoranti, templi a piedi), riva ovest per la calma e la vicinanza alle tombe. Economiche: guesthouse sulla riva ovest · fascia media: hotel sul Nilo della riva est · lusso: Sofitel Winter Palace, Al Moudira sulla riva ovest.',
    doveMangiare:
      'Cucina egiziana casalinga nei ristoranti della riva ovest, piccione ripieno e tagine; sulla riva est i locali con terrazza sul tempio di Luxor.',
    comeArrivare: 'Volo dal Cairo (1 ora), treno diurno o notturno dal Cairo (9-10 ore), strada dal Mar Rosso (4 ore da Hurghada, 4-4,5 da Marsa Alam).',
    comeSpostarsi:
      'Sulla riva ovest serve un\'auto con autista o un taxi per la giornata (indicativamente 25-40 $); sulla riva est si gira a piedi o in Uber. Calessi solo concordando il prezzo prima.',
    periodoMigliore: 'da ottobre ad aprile; d\'estate solo visite tra l\'alba e le 11',
    costi:
      'Karnak circa 600 EGP, tempio di Luxor circa 500 EGP, Valle dei Re circa 750 EGP (3 tombe), tomba di Tutankhamon circa 700 EGP, Seti I e Nefertari intorno ai 2.000 EGP ciascuna, Hatshepsut circa 440 EGP; mongolfiera indicativamente 50-100 $ (indicativi).',
    erroriDaEvitare: [
      'Andare in Valle dei Re a mezzogiorno: tra le pareti di roccia si superano i 40 °C già a maggio',
      'Scattare foto nelle tombe senza il permesso fotografico se richiesto: i guardiani fanno pagare la «multa» in contanti',
      'Scegliere la mongolfiera solo sul prezzo più basso: conta la compagnia, e i voli si annullano col vento',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Tempio di Karnak",
        "testo": "Uno dei più grandi complessi religiosi dell'antico Egitto, costruito per quasi duemila anni da una trentina di faraoni. La sala ipostila ha 134 colonne: le dodici centrali sono alte 21 metri.",
        "come": "Dalla città in taxi o calesse. Si cammina nel sito, lungo la via delle sfingi dal tempio di Luxor se si vuole il percorso completo.",
        "quando": "Aperto tutti i giorni 6-17 (2026). Arrivare all'apertura: d'estate è l'unico momento sopportabile.",
        "tempo": "2-3 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/karnak/",
        "consiglio": "Tornare la sera per lo spettacolo di suoni e luci, se in programma.",
        "costo": "600 EGP con il museo all'aperto, tempio di Mut 200 EGP (adulti stranieri, 2026)"
      },
      {
        "nome": "Tempio di Luxor",
        "testo": "Un tempio più piccolo, in mezzo alla città, con le statue colossali di Ramses II e uno dei due obelischi dell'ingresso: l'altro è a Parigi, in place de la Concorde, dal 1836. La sera, illuminato, è bellissimo.",
        "come": "A piedi dal lungofiume sulla riva est.",
        "quando": "Aperto tutti i giorni 6-20 (2026). Tramonto e sera.",
        "tempo": "1 ora",
        "costo": "500 EGP per adulti stranieri, 250 per studenti (2026)",
        "url": "https://egymonuments.gov.eg/en/monuments/luxor-temple/"
      },
      {
        "nome": "Valle dei Re",
        "testo": "Oltre sessanta tombe scavate nella roccia, quasi tutte di faraoni del Nuovo Regno, con pareti dipinte ancora colorate. Il biglietto base copre un numero limitato di tombe; Tutankhamon e altre sono a pagamento a parte.",
        "come": "Sulla riva ovest, in taxi o con un tour. Si visita a piedi, tomba per tomba.",
        "quando": "Aperta tutti i giorni 6-17 (2026). Arrivare all'apertura: a mezzogiorno è molto caldo, già in primavera.",
        "tempo": "2-3 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/valley-of-the-kings/",
        "consiglio": "Chiedere in biglietteria quali tombe sono aperte quel giorno e scegliere quelle con le decorazioni meglio conservate, non solo la più famosa.",
        "costo": "750 EGP per adulti stranieri, 375 per studenti; Tutankhamon e altre tombe a parte (2026)"
      },
      {
        "nome": "Tempio di Hatshepsut",
        "testo": "Il tempio funerario della regina-faraone a Deir el-Bahari, a terrazze sotto la parete di roccia, con un'architettura che sembra moderna.",
        "come": "Sulla riva ovest, vicino alla Valle dei Re.",
        "quando": "Aperto tutti i giorni 6-17 (2026). Mattina presto.",
        "tempo": "1 ora",
        "costo": "440 EGP per adulti stranieri, 220 per studenti (2026)",
        "url": "https://egymonuments.gov.eg/en/monuments/hatshepsut-temple/"
      },
      {
        "nome": "Medinet Habu e Colossi di Memnone",
        "testo": "Il tempio di Ramses III, con rilievi ancora colorati e meno visitatori dei grandi templi, vicino ai due colossi di Amenhotep III che sorvegliano la piana.",
        "come": "Sulla riva ovest, in taxi con le altre tappe.",
        "quando": "Metà mattina o fine pomeriggio.",
        "tempo": "1-1,5 ore",
        "consiglio": "Medinet Habu è spesso trascurato, ma merita la sosta.",
        "costo": "Medinet Habu a pagamento: prezzi sul sito ufficiale egymonuments.gov.eg o in biglietteria; i Colossi si vedono dalla strada"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Alba: mongolfiera o Valle dei Re all'apertura",
          "Hatshepsut",
          "Medinet Habu e Colossi",
          "Pomeriggio: Karnak e tempio di Luxor al tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: riva ovest",
          "Giorno 2: Karnak, tempio di Luxor, poi gita a Dendera o Abydos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Riva est",
        "perChi": "chi vuole ristoranti e vita serale",
        "testo": "Vicino ai templi di Karnak e Luxor, con hotel di tutte le fasce e il lungofiume. Più turistica e con più venditori."
      },
      {
        "nome": "Riva ovest",
        "perChi": "chi vuole quiete",
        "testo": "Campagne, case e piccole guesthouse vicino alle tombe e ai campi, con poco rumore."
      }
    ],
    sapori: [
      {
        "nome": "Piccione ripieno",
        "testo": "Piatto tipico egiziano, servito anche nei ristoranti della riva ovest."
      },
      {
        "nome": "Tagine di carne",
        "testo": "Cucina egiziana di casa, con verdure e salsa di pomodoro."
      },
      {
        "nome": "Ful e taameya",
        "testo": "Colazione economica nei chioschi del mercato."
      },
      {
        "nome": "Karkadè",
        "testo": "Infuso freddo o caldo di ibisco, in ogni caffè."
      }
    ],
    attenzioni: [
      "Nelle tombe le regole sulle foto cambiano spesso: chiedere in biglietteria, mai il flash. I guardiani che aprono un angolo chiuso o mettono in posa poi chiedono la mancia.",
      "Mongolfiere: scegliere la compagnia e non il prezzo più basso, e mettere margine perché i voli si annullano col vento.",
      "I calessi e i venditori sul lungofiume partono da cifre alte: contrattare e decidere prima.",
      "D'estate le visite vanno fatte dall'alba alla tarda mattinata: dopo il caldo è estremo."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Le colonne papiriformi della grande sala ipostila del tempio di Karnak, viste dal basso',
    immagine: '/images/viaggi/egitto-completo/giorno-14-luxor.jpg',
  },
  {
    slug: 'assuan-abu-simbel',
    paeseSlug: 'egitto',
    ordine: 4,
    nome: 'Assuan e Abu Simbel',
    tipologia: ['archeologia', 'Nilo', 'cultura nubiana'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città più meridionale del circuito, dove il Nilo si stringe tra isole di granito e dune, con i villaggi nubiani colorati sulla riva ovest. Da qui si parte per i templi di Ramses II e Nefertari ad Abu Simbel.',
    percheAndarci:
      'Per il ritmo più lento dell\'Egitto, il tempio di Philae su un\'isola del lago, la feluca al tramonto e Abu Simbel, il monumento spostato pezzo per pezzo negli anni Sessanta per salvarlo dal lago Nasser.',
    cosaVedere: [
      'I due templi di Abu Simbel, a 280 km a sud',
      'Il tempio di Philae, in barca dal molo di Shellal',
      'L\'obelisco incompiuto nelle cave di granito',
      'Il Museo nubiano',
      'Il villaggio nubiano di Gharb Soheil',
    ],
    cosaFare: [
      'Una feluca al tramonto intorno all\'isola Elefantina',
      'Lo spettacolo di suoni e luci ad Abu Simbel, per chi dorme lì',
      'Il 22 febbraio e il 22 ottobre il sole entra fino al santuario del tempio grande',
    ],
    doveDormire:
      'Economiche: guesthouse nubiane sull\'isola Elefantina o a Gharb Soheil · fascia media: hotel sulla Corniche · lusso: Old Cataract (Sofitel Legendary). Ad Abu Simbel poche strutture, tra cui l\'eco-lodge Eskaleh.',
    comeArrivare:
      'Volo dal Cairo (1h25), treno notturno con cabine letto dal Cairo o da Giza, crociera dal Nilo da Luxor (3-4 notti). Per Abu Simbel: strada di 3,5 ore con partenza prima dell\'alba, oppure volo EgyptAir di 45 minuti.',
    comeSpostarsi: 'Barche pubbliche e private sul Nilo, taxi e Uber in città; per Abu Simbel minivan con autista o tour di gruppo.',
    periodoMigliore: 'da novembre a marzo; in estate è il posto più caldo del Paese',
    costi:
      'Abu Simbel indicativamente 750-850 EGP; Philae circa 550 EGP più la barca (da concordare, 300-500 EGP a barca); Museo nubiano circa 300 EGP; feluca indicativamente 300-600 EGP l\'ora a barca (indicativi).',
    erroriDaEvitare: [
      'Fare Abu Simbel in giornata d\'estate senza mettere in conto la sveglia alle 3-4 e sette ore di strada andata e ritorno',
      'Salire in feluca senza concordare se il prezzo è a persona o a barca, e per quanto tempo',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Abu Simbel",
        "testo": "I due templi di Ramses II e Nefertari scavati nella roccia, con le statue colossali all'ingresso. Negli anni Sessanta furono tagliati a blocchi e spostati per salvarli dal lago Nasser. Il 22 febbraio e il 22 ottobre il sole entra fino al santuario.",
        "come": "Da Assuan in auto, con partenza prima dell'alba, oppure in aereo.",
        "quando": "Aperto tutti i giorni 6-17 (2026). Arrivare all'apertura, prima dei bus dei gruppi.",
        "tempo": "1,5-2 ore sul posto",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/abu-simbel/",
        "consiglio": "Chi può, dormire ad Abu Simbel per lo spettacolo di suoni e luci e per l'alba.",
        "costo": "750 EGP per adulti stranieri, 375 per studenti; 1.200 EGP (studenti 600) il 22 febbraio e il 22 ottobre (2026)"
      },
      {
        "nome": "Tempio di Philae",
        "testo": "Il santuario di Iside su un'isola, spostato anch'esso dopo la diga. Si arriva in barca dal molo di Shellal ed è molto fotogenico.",
        "come": "Taxi fino al molo, poi barca a motore, con il prezzo da concordare.",
        "quando": "Aperto tutti i giorni 7-16 (2026). Mattina presto per la luce.",
        "tempo": "1,5 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/philae/",
        "costo": "550 EGP per adulti stranieri, 275 per studenti, più la barca dal molo da concordare (2026)"
      },
      {
        "nome": "Feluca al tramonto",
        "testo": "La barca a vela tradizionale intorno all'isola Elefantina, per un giro di un'ora o due.",
        "come": "Dal lungofiume di Assuan.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "consiglio": "Concordare se il prezzo è a barca o a persona, e quanto dura."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Philae al mattino, obelisco incompiuto, feluca al tramonto",
          "Giorno 2: Abu Simbel all'alba con rientro a metà giornata"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lungofiume di Assuan",
        "perChi": "chi vuole vedere il Nilo",
        "testo": "Hotel vicino al corso e alle feluche. Comodo per tutto."
      },
      {
        "nome": "Abu Simbel",
        "perChi": "chi vuole l'alba ai templi",
        "testo": "Poche strutture: utile per evitare la sveglia notturna."
      }
    ],
    sapori: [
      {
        "nome": "Cucina nubiana",
        "testo": "Piatti di pollo, pesce e riso speziati, nei villaggi nubiani intorno ad Assuan."
      },
      {
        "nome": "Karkadè",
        "testo": "Infuso di ibisco, molto diffuso ad Assuan."
      },
      {
        "nome": "Ful e taameya",
        "testo": "Colazione economica ai chioschi."
      },
      {
        "nome": "Pesce del Nilo",
        "testo": "Servito alla griglia sul lungofiume."
      }
    ],
    attenzioni: [
      "Abu Simbel in giornata significa sveglia nel cuore della notte e molte ore di strada: metterlo in conto.",
      "Prezzo della feluca e della barca per Philae: concordare prima, a barca o a persona.",
      "D'estate Assuan è tra i posti più caldi del Paese: visite all'alba.",
      "Venditori molto insistenti sul lungofiume: un no deciso basta."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: 'I templi di Abu Simbel con le statue colossali di Ramses II scolpite nella roccia',
    immagine: '/images/viaggi/egitto-completo/giorno-11-assuan-abu-simbel.jpg',
  },
  {
    slug: 'siwa',
    paeseSlug: 'egitto',
    ordine: 5,
    nome: 'Oasi di Siwa',
    tipologia: ['deserto', 'oasi', 'cultura berbera'],
    giorniConsigliati: '3 giorni più due di viaggio',
    visitataPersonalmente: true,
    introduzione:
      'Un\'oasi di palme e laghi salati a 50 km dal confine libico, abitata da una comunità di lingua berbera, ai margini del Grande Mare di Sabbia.',
    percheAndarci:
      'Per un Egitto del tutto diverso da quello dei templi: case di fango salato, sorgenti in cui fare il bagno, le dune del Grande Mare di Sabbia e il tempio dell\'Oracolo dove Alessandro Magno venne proclamato figlio di Amon.',
    cosaVedere: [
      'La fortezza di Shali, il vecchio centro in kershef (fango e sale)',
      'Il tempio dell\'Oracolo di Amon ad Aghurmi',
      'La montagna dei morti, Gebel al-Mawta, con tombe dipinte',
      'La sorgente di Cleopatra',
      'I laghi salati, dove si galleggia come nel Mar Morto',
    ],
    cosaFare: [
      'Escursione in fuoristrada nel Grande Mare di Sabbia con sandboarding e tramonto sulle dune',
      'Una notte in campo tendato nel deserto',
      'Girare l\'oasi in bicicletta',
    ],
    doveDormire:
      'Economiche: piccoli hotel in centro · fascia media: eco-lodge in stile siwano fuori dal centro · lusso: Adrère Amellal, senza elettricità, a lume di candela.',
    comeArrivare:
      'Bus notturno dal Cairo (circa 10-12 ore) oppure in due tappe passando per Marsa Matruh; in alternativa auto con autista o tour organizzato. Lungo la strada ci sono posti di blocco: passaporto sempre a portata di mano.',
    comeSpostarsi: 'Bicicletta, tuk-tuk e carretti trainati da asini nell\'oasi; fuoristrada con autista locale per il deserto.',
    periodoMigliore: 'da ottobre ad aprile; le notti d\'inverno nel deserto scendono vicino a 0 °C',
    costi:
      'Escursione di mezza giornata nel Grande Mare di Sabbia indicativamente 20-35 $ a persona; il permesso per il deserto viene richiesto dall\'operatore locale, che lo include nel prezzo (indicativo).',
    erroriDaEvitare: [
      'Andare nel deserto con chi non ha i permessi: le zone verso il confine libico sono controllate dall\'esercito',
      'Indossare abiti succinti in paese: Siwa è una comunità conservatrice, e anche al lago o alle sorgenti si fa il bagno coperti',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fortezza di Shali",
        "testo": "La vecchia cittadella di fango e sale, danneggiata da tre giorni di piogge nel 1926 e poi abbandonata dagli abitanti. Dalla cima si vede tutta l'oasi.",
        "come": "A piedi dal centro di Siwa.",
        "quando": "Tramonto.",
        "tempo": "1 ora"
      },
      {
        "nome": "Tempio dell'Oracolo di Amon",
        "testo": "Le rovine sul colle di Aghurmi dove, secondo la tradizione, Alessandro Magno venne a consultare l'oracolo, che lo riconobbe figlio del dio e faraone.",
        "come": "In bici o taxi dal centro.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1 ora"
      },
      {
        "nome": "Deserto, laghi salati e sorgenti",
        "testo": "Gita in fuoristrada verso il Grande Mare di Sabbia con sandboarding, tramonto sulle dune e bagno nelle sorgenti e nei laghi salati.",
        "come": "Solo con un operatore locale, che ha il permesso per il deserto.",
        "quando": "Pomeriggio, con rientro al tramonto.",
        "tempo": "Mezza giornata",
        "consiglio": "Chiedere se bagno e cena sono inclusi, e portare una giacca per la sera."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: arrivo, fortezza di Shali, tramonto",
          "Giorno 2: Aghurmi, sorgenti, deserto e notte in tenda",
          "Giorno 3: bicicletta nell'oasi, rientro"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro di Siwa",
        "perChi": "chi vuole stare vicino a tutto",
        "testo": "Hotel e guesthouse vicino al mercato e alla fortezza. Semplici."
      },
      {
        "nome": "Eco-lodge nell'oasi",
        "perChi": "chi vuole natura e silenzio",
        "testo": "Case in fango tra le palme, più care e poco comode da raggiungere a piedi."
      }
    ],
    sapori: [
      {
        "nome": "Datteri e olive di Siwa",
        "testo": "Il prodotto dell'oasi, venduto sfuso nel mercato."
      },
      {
        "nome": "Olio d'oliva",
        "testo": "Prodotto nell'oasi con le olive locali."
      }
    ],
    attenzioni: [
      "Il deserto verso la Libia è controllato dall'esercito: andare solo con operatori che hanno i permessi.",
      "Siwa è una comunità conservatrice: coprire spalle e ginocchia, e bagnarsi vestiti alle sorgenti.",
      "Tenere il passaporto a portata di mano ai posti di blocco.",
      "Le notti d'inverno nel deserto sono fredde: portare abiti pesanti.",
      "Strade: il governo britannico (ottobre 2026) considera Siwa e la strada da Marsa Matruh fuori dalle zone sconsigliate, ma sconsiglia i viaggi non essenziali sulla strada tra Bahariya e Siwa."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: 'Palme da dattero riflesse in una sorgente dell\'oasi di Siwa',
    immagine: '/images/viaggi/egitto-completo/giorno-07-siwa.jpg',
  },
  {
    slug: 'mar-rosso',
    paeseSlug: 'egitto',
    ordine: 6,
    nome: 'Mar Rosso: Hurghada, Marsa Alam e Sharm el-Sheikh',
    tipologia: ['mare', 'immersioni', 'snorkeling'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La costa egiziana del Mar Rosso e la punta del Sinai: barriera corallina vicinissima alla riva, relitti, squali pelagici al largo e un\'acqua che non scende sotto i 21-22 °C nemmeno d\'inverno.',
    percheAndarci:
      'Per chiudere il viaggio archeologico con il mare, o per immersioni tra le più famose del mondo: il relitto del Thistlegorm, Ras Mohammed, Elphinstone, le isole Brothers e Daedalus.',
    cosaVedere: [
      'Hurghada: le isole Giftun e la baia di Orange Bay, il relitto del Thistlegorm in giornata lunga',
      'Marsa Alam: la baia di Abu Dabbab con tartarughe e, con fortuna, il dugongo; il reef di Dolphin House (Samadai); il parco di Wadi el Gemal',
      'Sharm el-Sheikh: il parco nazionale di Ras Mohammed e lo stretto di Tiran',
      'Dahab: il Blue Hole e i reef dalla riva',
    ],
    cosaFare: [
      'Snorkeling dalla riva sulla barriera del resort',
      'Corso Open Water o Advanced con un centro PADI o SSI',
      'Crociera subacquea (liveaboard) di una settimana nel sud: Brothers, Daedalus, Elphinstone',
    ],
    doveDormire:
      'Hurghada: El Gouna e Sahl Hasheesh per la fascia media e alta, Hurghada città per la fascia economica. Marsa Alam: resort isolati con reef davanti, eco-lodge come quello di Wadi Lahami per i sub. Sharm: Naama Bay per la vita serale, Nabq per i resort.',
    comeArrivare:
      'Voli diretti dall\'Italia su Hurghada, Marsa Alam e Sharm el-Sheikh (molti charter stagionali); voli interni dal Cairo; da Luxor 4 ore di strada per Hurghada, 4-4,5 per Marsa Alam.',
    comeSpostarsi: 'Transfer organizzati dal resort, taxi e minivan con autista; per le escursioni in barca si parte dai porti turistici.',
    periodoMigliore:
      'mare caldo da maggio a novembre; da dicembre a marzo acqua sui 22 °C e vento forte, con giornate da muta di 5 mm',
    costi:
      'Escursione in barca di snorkeling con pranzo indicativamente 30-50 $; immersione singola 35-55 $, pacchetto da 10 immersioni 300-400 $; corso Open Water 400-550 $; liveaboard di 7 notti 1.000-1.800 € più tasse del parco (indicativi).',
    erroriDaEvitare: [
      'Scegliere Sharm pensando di andare comodamente a Luxor: dal Sinai serve un volo, quasi sempre via Cairo',
      'Toccare o camminare sul corallo e comprare conchiglie o coralli: è vietato e l\'export si sequestra in aeroporto',
      'Prenotare un liveaboard nel sud senza il brevetto e il numero di immersioni richiesti (di solito Advanced e almeno 50 immersioni)',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hurghada",
        "testo": "Una delle principali località turistiche della costa, con escursioni in barca per lo snorkeling sulle isole e sui reef al largo.",
        "come": "Escursioni da prenotare con un operatore locale dal proprio hotel.",
        "quando": "Tutto l'anno, con acqua più fresca in inverno.",
        "tempo": "Giornata"
      },
      {
        "nome": "Marsa Alam e Abu Dabbab",
        "testo": "Più a sud e più tranquilla: la baia di Abu Dabbab, nota per le tartarughe marine, e più a sud il parco nazionale di Wadi el-Gemal, dove vivono anche dugonghi e tartarughe verdi. L'aeroporto riceve voli turistici anche dall'Italia.",
        "come": "In auto da Luxor o con voli diretti.",
        "quando": "Mattina presto, con meno barche.",
        "tempo": "Giornata",
        "consiglio": "Una buona scelta per chi cerca soprattutto lo snorkeling."
      },
      {
        "nome": "Sharm el-Sheikh e Ras Mohammed",
        "testo": "Immersioni e snorkeling nel parco nazionale di Ras Mohammed, con il relitto del Thistlegorm non lontano.",
        "come": "Voli diretti dall'Europa e dal Cairo.",
        "quando": "Tutto l'anno.",
        "tempo": "Giornata"
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: snorkeling dalla riva del resort",
          "Giorno 2: barca per i reef al largo o Ras Mohammed",
          "Giorno 3: corso o immersioni"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hurghada",
        "perChi": "chi vuole molta scelta e prezzi bassi",
        "testo": "Resort ovunque e vita serale, con costa molto costruita."
      },
      {
        "nome": "Marsa Alam",
        "perChi": "chi vuole reef e tranquillità",
        "testo": "Resort sul reef, lontani dalle città: ideale per lo snorkeling."
      },
      {
        "nome": "Sharm el-Sheikh",
        "perChi": "chi vuole immersioni e resort grandi",
        "testo": "Molti resort e centri diving, parchi marini vicini."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Scelto al mercato e cotto nei ristoranti sul mare."
      },
      {
        "nome": "Sayadeya",
        "testo": "Pesce con riso speziato e cipolle, di cucina costiera."
      },
      {
        "nome": "Shawarma",
        "testo": "Per un pasto veloce lontano dai resort."
      },
      {
        "nome": "Karkadè",
        "testo": "Bevanda fredda di ibisco."
      }
    ],
    attenzioni: [
      "Non toccare né calpestare il corallo e non portare via conchiglie o coralli.",
      "Dal Sinai a Luxor serve quasi sempre un volo via Cairo: non fare il conto sulla strada.",
      "Per le crociere subacquee chiedere all'operatore il brevetto e l'esperienza richiesti.",
      "D'inverno l'acqua è più fresca e c'è spesso vento: serve una muta più spessa.",
      "Sinai: il governo britannico (ottobre 2026) sconsiglia ogni viaggio nel Nord Sinai e i viaggi non essenziali nell'interno del Sud Sinai oltre la strada Santa Caterina-Nuweiba; le coste, compresa Sharm el-Sheikh, ne sono escluse."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Coralli a tavola e acqua turchese su una barriera corallina del Mar Rosso',
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg',
  },
]
