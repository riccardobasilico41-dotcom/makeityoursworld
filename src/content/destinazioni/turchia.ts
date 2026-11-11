import type { Destinazione } from '@/lib/types'

// Destinazioni della Turchia per la guida "turchia-itinerario" (73), viaggio fatto da Rick:
// visitataPersonalmente è true; miaEsperienza resta assente finché non arriva un ricordo dell'autore.
// Prezzi indicativi a ottobre 2026; i musei statali sono quotati in euro.

export const destinazioniTurchia: Destinazione[] = [
  {
    slug: 'istanbul',
    paeseSlug: 'turchia',
    ordine: 1,
    nome: 'Istanbul',
    tipologia: ['città', 'storia', 'cibo'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'antica Bisanzio, poi Costantinopoli, divisa dal Bosforo fra Europa e Asia: la penisola storica di Sultanahmet, i quartieri di Beyoğlu e Karaköy, Kadıköy sul lato asiatico.',
    percheAndarci:
      'Per Santa Sofia, il Topkapı e la Süleymaniye, per i bazar, per i traghetti sul Bosforo e per una delle cucine di strada più ricche del Mediterraneo.',
    cosaVedere: [
      'Santa Sofia, dove i turisti visitano le gallerie superiori',
      'La Moschea Blu e l\'Ippodromo',
      'La Cisterna Basilica',
      'Il palazzo Topkapı con l\'harem',
      'La moschea di Süleymaniye, capolavoro di Sinan',
      'Il Gran Bazar e il Bazar delle Spezie',
      'Chora (Kariye), con i mosaici bizantini riaperti nel 2024',
    ],
    cosaFare: [
      'Il traghetto pubblico sul Bosforo fino ad Anadolu Kavağı',
      'Passare in traghetto da Eminönü a Kadıköy per il mercato del lato asiatico',
      'Un hammam storico',
      'Il tramonto dalla torre di Galata o da una terrazza di Karaköy',
    ],
    doveDormire:
      'Sultanahmet per stare a piedi dai monumenti, Karaköy e Galata per locali e vita serale, Kadıköy per un\'Istanbul più locale. Economiche: piccoli hotel di Sultanahmet e Fatih · fascia media: boutique hotel di Karaköy · lusso: hotel storici sul Bosforo.',
    doveMangiare:
      'Balık ekmek (panino di pesce) a Eminönü, kebab di Adana e lahmacun nelle lokanta, meze e rakı nelle meyhane di Beyoğlu, colazione turca a Kadıköy, baklava da Karaköy Güllüoğlu.',
    comeArrivare: "Dall'aeroporto di Istanbul (IST) la metro M11 arriva a Gayrettepe in circa 35 minuti, poi la M2 porta a Taksim o verso la penisola storica (circa 40-75 TL con l'Istanbulkart, che si compra ai distributori in aeroporto). Gli autobus Havaist vanno a Sultanahmet o Taksim in 1-1,5 ore (circa 275 TL, corse anche di notte). Il taxi costa circa 40-60 €: meglio chiamarlo con BiTaksi o Uber, con il tassametro acceso. L'aeroporto Sabiha Gökçen (SAW) è sul lato asiatico, collegato a Kadıköy dalla metro M4.",
    comeSpostarsi:
      'Istanbulkart ricaricabile per metro, tram T1, funicolari e traghetti; taxi con le app BiTaksi o Uber, che a Istanbul chiama i taxi gialli.',
    periodoMigliore: 'aprile-giugno e settembre-novembre',
    costi:
      "Budget basso circa 50-70 € al giorno a persona (piccolo hotel a Sultanahmet o Fatih, cibo da strada e lokanta, una o due moschee gratuite); medio 110-160 € (boutique hotel a Karaköy o Sultanahmet, Topkapı e Santa Sofia, cene con meze); alto da 250 € in su (hotel storici sul Bosforo, ristoranti con vista, guide private). Santa Sofia 25 €, Topkapı con Harem circa 50 €, Museum Pass Istanbul circa 115-120 € per 5 giorni.",
    erroriDaEvitare: [
      'Accettare l\'invito di uno sconosciuto a bere qualcosa in un locale: è la truffa del conto gonfiato, frequente a Taksim e Sultanahmet',
      'Raccogliere la spazzola che un lustrascarpe lascia cadere davanti a voi: è il pretesto per una lucidatura a pagamento',
      'Mangiare nei ristoranti di Sultanahmet senza prezzi esposti',
    ],
    miaEsperienza:
      "Ci sono stato con amici all'inizio del mio viaggio di sedici giorni in Turchia: quattro giorni tra Sultanahmet con Santa Sofia, la Moschea Blu e la Cisterna, Topkapı, il Gran Bazar e la Süleymaniye, il Bosforo, Beyoğlu e Kadıköy.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Santa Sofia",
        testo: "La basilica di Giustiniano, inaugurata nel 537, poi moschea dal 1453, museo dal 1935 e di nuovo moschea dal 2020, con i mosaici bizantini sotto la grande cupola.",
        come: "Tram T1 fino a Sultanahmet. Dal 15 gennaio 2024 i visitatori stranieri pagano un biglietto e salgono alle gallerie superiori, riaperte nel 2024, mentre gran parte del piano terra è riservata ai fedeli. Abbigliamento coprente; le donne devono coprire il capo.",
        quando: "Mattina presto, fuori dagli orari di preghiera.",
        tempo: "1-1,5 ore",
        costo: "25 € per i visitatori stranieri, percorso dedicato alle gallerie superiori (2026)",
        lat: 41.0085,
        lng: 28.98001,
        consiglio: "Controllare prima gli orari sul sito ufficiale, che cambiano con le regole di accesso.",
      },
      {
        nome: "Moschea Blu e Ippodromo",
        testo: "La moschea di Sultanahmet, costruita tra il 1609 e il 1617, con sei minareti e oltre ventimila piastrelle di Iznik all'interno. Davanti, la piazza dell'antico ippodromo con l'obelisco egizio.",
        come: "A piedi da Santa Sofia. Scarpe tolte, spalle e gambe coperte; donne con il capo coperto.",
        quando: "Aperta ogni giorno 8.30-19 da aprile a settembre e 8.30-17 da ottobre a marzo, ultimo ingresso 30 minuti prima; il venerdì si entra dalle 14.30. Chiusa alle visite per le preghiere di mezzogiorno e del pomeriggio, da 30 minuti prima del richiamo a 15 minuti dopo la fine (2026).",
        tempo: "45 minuti",
        costo: "Ingresso libero (2026)",
        orari: "Aprile-settembre 8:30-19, ottobre-marzo 8:30-17; il venerdì dalle 14:30; chiusa alle visite durante le preghiere (2026)",
        lat: 41.00539,
        lng: 28.97682,
        url: "https://sultanahmetcami.org/",
        consiglio: "Chi non ha abiti adatti li prende in prestito all'apposito banco all'ingresso e li riconsegna lì.",
      },
      {
        nome: "Palazzo Topkapı e Harem",
        testo: "La residenza principale dei sultani ottomani per circa quattro secoli, fino a metà Ottocento: cortili, padiglioni, tesoro e Harem, sul promontorio tra Bosforo, Mar di Marmara e Corno d'Oro.",
        come: "A piedi da Santa Sofia. Il biglietto per stranieri comprende Harem e Sant'Irene; si compra anche online.",
        quando: "Chiuso il martedì. Aperto 9-17.30, biglietteria fino alle 17 (2026). Arrivare all'apertura.",
        tempo: "2-3 ore",
        costo: "2.750 TL (circa 50 €) per i visitatori stranieri con Harem e Sant'Irene, valido un giorno; Harem o Sant'Irene da soli 1.050 TL (2026)",
        orari: "9-17:30, biglietteria fino alle 17; chiuso il martedì (2026)",
        lat: 41.013,
        lng: 28.984,
        url: "https://www.millisaraylar.gov.tr/en/palaces/topkapi-palace",
        consiglio: "Passare prima dall'Harem e dal Tesoro, che hanno le code, poi i cortili.",
      },
      {
        nome: "Cisterna Basilica",
        testo: "Un enorme serbatoio sotterraneo bizantino del VI secolo, dell'epoca di Giustiniano, con 336 colonne di marmo in 12 file, illuminato di luce soffusa. Alla base di due colonne ci sono blocchi di riuso con la testa di Medusa.",
        come: "A piedi da Santa Sofia. In alta stagione meglio il biglietto online.",
        quando: "Prima mattina o sera, quando c'è meno coda.",
        tempo: "45 minuti",
        costo: "circa 1.950-2.250 TL di giorno (circa 35-40 €), 3.000 TL la sessione serale (circa 55 €); non è nel Museum Pass (2026, prezzi indicativi)",
        orari: "Di giorno 9-18:30, sessione serale 19:30-22 (2026)",
        lat: 41.00806,
        lng: 28.97778,
        consiglio: "Evitare il weekend e le ore centrali.",
      },
      {
        nome: "Gran Bazar e Bazar delle Spezie",
        testo: "Il mercato coperto con oltre 4.000 negozi di tappeti, ceramiche e gioielli; poco più in là, quello delle spezie con tè, dolci turchi e frutta secca.",
        come: "Tram T1 fino a Beyazıt-Kapalıçarşı, oppure a piedi da Santa Sofia.",
        quando: "In mattinata, prima della folla; il Gran Bazar è chiuso la domenica.",
        tempo: "2 ore",
        costo: "ingresso libero",
        orari: "Gran Bazar chiuso la domenica",
        lat: 41.01058,
        lng: 28.96793,
        consiglio: "Al Bazar delle Spezie assaggiare prima di comprare.",
      },
      {
        nome: "Torre di Galata",
        testo: "La torre di pietra genovese completata nel 1348 sopra Karaköy, alta circa 63 metri. Dalla terrazza in cima si vedono il Corno d'Oro, il Bosforo e la penisola storica con le cupole e i minareti. Dal 2020 è un museo.",
        come: "Tram T1 fino a Karaköy, poi salita a piedi per le stradine; oppure la funicolare storica Tünel. Dentro, un ascensore porta al sesto piano, poi una scala sale alla terrazza, a circa 40 metri.",
        quando: "Aperta tutti i giorni 8.30-18.30, biglietteria fino alle 18.15 circa (2026). Meglio all'apertura o nell'ultima ora: a metà giornata c'è coda.",
        tempo: "1 ora",
        costo: "circa 30 € per i visitatori stranieri (2026)",
        orari: "Tutti i giorni 8:30-18:30, biglietteria fino alle 18:15 circa (2026)",
        lat: 41.02564,
        lng: 28.97421,
        url: "https://muze.gov.tr/",
        consiglio: "Fare tutto il giro della terrazza: ogni lato ha una vista diversa.",
      },
      {
        nome: "Moschea di Süleymaniye",
        testo: "La grande moschea costruita da Sinan per Solimano il Magnifico, finita nel 1557, sulla terza collina della città. Più sobria e meno affollata della Moschea Blu, ha una terrazza sul Corno d'Oro e, nel giardino, le tombe di Solimano e di sua moglie Hürrem.",
        come: "A piedi dal Gran Bazar in 10-15 minuti, in salita. Stesse regole d'abbigliamento delle altre moschee.",
        quando: "Fuori dagli orari di preghiera; al tramonto la terrazza sul Corno d'Oro è la più bella.",
        tempo: "45 minuti-1 ora",
        costo: "ingresso libero",
        lat: 41.01611,
        lng: 28.96389,
        consiglio: "Scendere poi a piedi verso il Bazar delle Spezie per le vie dei vecchi artigiani.",
      },
      {
        nome: "Palazzo Dolmabahçe",
        testo: "Il palazzo sul Bosforo dove i sultani si trasferirono a metà Ottocento, con 285 stanze tra stile ottomano e barocco europeo, cristalli di Baccarat e il grande salone delle cerimonie. Qui morì Atatürk nel 1938: gli orologi del palazzo sono fermi alle 9:05.",
        come: "Tram T1 fino a Kabataş, poi 5 minuti a piedi. Si visita con un percorso guidato a gruppi; biglietti anche sull'app ufficiale Milli Saraylar.",
        quando: "Mattina, arrivando all'apertura della biglietteria.",
        tempo: "2 ore",
        costo: "2.000 TL (circa 35 €) per i visitatori stranieri con Selamlık, Harem e museo della pittura (2026)",
        orari: "Biglietteria 9-17; chiuso il lunedì (2026)",
        lat: 41.03944,
        lng: 29.00167,
        url: "https://www.millisaraylar.gov.tr/en/palaces/dolmabahce-palace",
      },
      {
        nome: "Musei Archeologici di Istanbul",
        testo: "Tre musei nello stesso giardino, ai piedi di Topkapı: il museo archeologico con il cosiddetto sarcofago di Alessandro, il museo dell'Antico Oriente e il Padiglione delle Maioliche. Una collezione di livello mondiale, spesso tralasciata da chi ha poco tempo.",
        come: "A piedi da Sultanahmet, dal parco di Gülhane. È compreso nel Museum Pass Istanbul.",
        quando: "Nel pomeriggio, dopo Topkapı.",
        tempo: "1,5-2 ore",
        lat: 41.0117,
        lng: 28.98132,
      },
      {
        nome: "Chora (Kariye)",
        testo: "L'antica chiesa del Salvatore in Chora, con uno dei cicli di mosaici e affreschi bizantini più belli al mondo, del primo Trecento. Trasformata in moschea, ha riaperto ai visitatori nel 2024, con i mosaici del nartece di nuovo visibili.",
        come: "Fuori mano, vicino alle mura di Teodosio: autobus o taxi da Sultanahmet, oppure a piedi da Balat in 20 minuti. È nel Museum Pass Istanbul.",
        quando: "Mattina, abbinata a Balat e Fener.",
        tempo: "1 ora",
        lat: 41.03122,
        lng: 28.93903,
      },
      {
        nome: "Balat e Fener",
        testo: "I vecchi quartieri ebraico e greco sul Corno d'Oro, con case colorate in salita, la chiesa di ferro di Santo Stefano dei Bulgari e il Patriarcato ecumenico di Costantinopoli. Si gira a piedi, tra caffè e botteghe.",
        come: "Autobus o taxi da Eminönü lungo il Corno d'Oro, oppure il traghetto della linea del Corno d'Oro fino a Fener o Balat.",
        quando: "In mattinata nei giorni feriali; nel weekend le vie delle foto si affollano.",
        tempo: "2-3 ore",
        costo: "ingresso libero",
        lat: 41.0328,
        lng: 28.9456,
      },
      {
        nome: "Crociera sul Bosforo",
        testo: "Il modo migliore per capire la città: il traghetto pubblico risale lo stretto tra Europa e Asia, passando sotto i ponti e davanti a palazzi, yalı di legno e fortezze, fino ad Anadolu Kavağı vicino al Mar Nero.",
        come: "Traghetto pubblico lungo Şehir Hatları da Eminönü; tratte brevi anche con i battelli turistici del molo.",
        quando: "La corsa lunga parte la mattina; d'estate meglio il pomeriggio per la luce sul ritorno.",
        tempo: "Mezza giornata o giornata intera con la corsa lunga",
        costo: "circa 320 TL andata e ritorno (circa 6 €) per la corsa lunga pubblica (2026, da ricontrollare)",
        orari: "Corsa lunga: partenza da Eminönü alle 10:35, ritorno da Anadolu Kavağı alle 15 (2026, da ricontrollare)",
        lat: 41.01722,
        lng: 28.97111,
        consiglio: "Ad Anadolu Kavağı salire alla fortezza di Yoros per la vista sull'imbocco del Mar Nero.",
      },
      {
        nome: "Kadıköy e Moda",
        testo: "Il cuore del lato asiatico: un mercato di pesce, frutta e sottaceti, locali popolari dove mangiano gli abitanti e, più a sud, il lungomare di Moda per il tramonto. È l'Istanbul di tutti i giorni, lontana dai monumenti.",
        come: "Traghetto da Eminönü o Karaköy, 20 minuti, con l'Istanbulkart.",
        quando: "Pomeriggio e sera.",
        tempo: "Mezza giornata",
        costo: "ingresso libero",
        lat: 40.99339,
        lng: 29.03736,
        consiglio: "La traversata in traghetto, con un tè preso a bordo, vale da sola il viaggio.",
      },
      {
        nome: "İstiklal e Beyoğlu",
        testo: "La grande via pedonale tra piazza Taksim e la torre di Galata, percorsa dal tram storico rosso, con passaggi ottocenteschi come il Çiçek Pasajı, chiese levantine e librerie. Intorno, le vie dei meyhane, le osterie con meze e rakı.",
        come: "Metro M2 fino a Taksim e discesa a piedi, oppure salita da Karaköy con la funicolare Tünel.",
        quando: "Tardo pomeriggio e sera.",
        tempo: "2 ore",
        costo: "ingresso libero",
        lat: 41.03417,
        lng: 28.97889,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Santa Sofia all'apertura e Moschea Blu",
          "Cisterna Basilica",
          "Pomeriggio: Palazzo Topkapı con l'Harem",
          "Sera: traghetto al tramonto e cena a Karaköy",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Gran Bazar in mattinata",
          "Moschea di Süleymaniye e discesa al Bazar delle Spezie",
          "Pomeriggio: traghetto per Kadıköy e tramonto a Moda",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: crociera pubblica sul Bosforo da Eminönü, oppure Dolmabahçe la mattina",
          "Pomeriggio: Torre di Galata e İstiklal",
          "Chi preferisce: Balat, Fener e Chora al posto del Bosforo",
        ],
      },
    ],
    zone: [
      {
        nome: "Sultanahmet",
        perChi: "chi ha poco tempo e vuole stare tra i monumenti",
        testo: "Si va a piedi a quasi tutto. È turistico, con ristoranti cari e venditori insistenti; di sera si spegne presto.",
        fascia: "50-120 €",
      },
      {
        nome: "Galata / Karaköy",
        perChi: "chi vuole locali, caffè e vita serale",
        testo: "Quartiere di moda, con hotel boutique e terrazze. Le salite sono ripide e di notte è rumoroso.",
        fascia: "90-180 €",
      },
      {
        nome: "Beyoğlu / Taksim",
        perChi: "chi vuole movida e collegamenti",
        testo: "Il cuore della vita notturna, vicino a metro e tram. Rumoroso e meno curato.",
        fascia: "60-140 €",
      },
      {
        nome: "Kadıköy",
        perChi: "chi vuole un'Istanbul più locale e prezzi più bassi",
        testo: "Lato asiatico, vivace e pieno di locali; ai monumenti si va con il traghetto, 20 minuti, che diventa parte del viaggio.",
        fascia: "50-110 €",
      },
    ],
    sapori: [
      {
        "nome": "Balık ekmek",
        "testo": "Panino con pesce grigliato, sul ponte di Galata e a Eminönü."
      },
      {
        "nome": "Meze e rakı",
        "testo": "Piattini freddi e anice nelle meyhane di Beyoğlu."
      },
      {
        "nome": "Börek e simit",
        "testo": "Pasta sfoglia salata e anello di sesamo, per la colazione o la pausa."
      },
      {
        "nome": "Baklava e lokum",
        "testo": "Dolci con pistacchio e miele, nelle pasticcerie storiche."
      }
    ],
    attenzioni: [
      "Sconosciuti che invitano a bere o a cena in un locale: il governo britannico segnala sia conti gonfiati sia bevande drogate. Scegliere da soli dove andare e non perdere di vista il bicchiere.",
      "Borseggi frequenti nelle zone turistiche: tenere zaino e telefono sotto controllo, soprattutto sul tram e nei bazar.",
      "Ristoranti di Sultanahmet senza prezzi esposti: chiedere il menu con i prezzi prima di sedersi.",
      "Taxi: solo registrati e con tassametro acceso, oppure app; annotare la targa. Evitare i passaggi offerti da autisti abusivi.",
      "Tensioni nella regione: il governo britannico (ottobre 2026) segnala possibili cancellazioni di voli e chiusure dello spazio aereo nel Medio Oriente e sconsiglia ogni viaggio entro 10 km dal confine siriano. Controllare viaggiaresicuri.it prima di partire."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Isole dei Principi",
        distanza: "1-1,5 ore in traghetto",
        come: "Traghetto pubblico da Kabataş o Eminönü per Büyükada, l'isola più grande; si paga con l'Istanbulkart.",
        testo: "Nove isole nel Mar di Marmara senza auto, con ville di legno ottocentesche, pinete e piccole spiagge. Si gira a piedi, in bici o con i minibus elettrici.",
      },
      {
        nome: "Bursa",
        distanza: "circa 2-2,5 ore",
        come: "Traghetto veloce da Istanbul per Mudanya o Güzelyalı, poi bus per il centro; in alternativa bus diretto.",
        testo: "La prima capitale ottomana, con la Grande Moschea, la Moschea Verde, i mausolei dei primi sultani e i caravanserragli della seta. In inverno è anche la porta per le piste dell'Uludağ.",
      },
      {
        nome: "Edirne",
        distanza: "circa 2,5-3 ore in bus",
        come: "Bus dalla stazione di Esenler o da Alibeyköy.",
        testo: "La città al confine con Grecia e Bulgaria che ospita la Moschea di Selimiye, considerata da Sinan il suo capolavoro, patrimonio UNESCO. Gita lunga ma fattibile in giornata.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Istanbul?",
        risposta: "Tre giorni per Sultanahmet, i bazar, la Süleymaniye, il Bosforo e un passaggio sul lato asiatico; con quattro si aggiungono Dolmabahçe, Chora e Balat senza correre.",
      },
      {
        domanda: "Conviene il Museum Pass Istanbul?",
        risposta: "Conviene se si visitano Topkapı con l'Harem e almeno due o tre musei come i Musei Archeologici o Chora. Non comprende Santa Sofia, la Cisterna Basilica e la Torre di Galata.",
      },
      {
        domanda: "Santa Sofia si paga?",
        risposta: "Sì: dal 2024 i visitatori stranieri pagano 25 € e seguono un percorso nelle gallerie superiori, mentre il piano terra è riservato alla preghiera. La Moschea Blu e la Süleymaniye restano gratuite.",
      },
      {
        domanda: "Come ci si veste per entrare nelle moschee?",
        risposta: "Spalle e ginocchia coperte per tutti, capo coperto per le donne, scarpe tolte all'ingresso. Nelle moschee principali si prestano foulard e gonne lunghe all'entrata.",
      },
      {
        domanda: "Meglio dormire a Sultanahmet o a Karaköy?",
        risposta: "Sultanahmet per chi ha poco tempo e vuole andare a piedi ai monumenti; Karaköy e Galata per chi vuole locali e vita serale, a un tram o una passeggiata dal centro storico.",
      },
      {
        domanda: "Come ci si muove in città?",
        risposta: "Con l'Istanbulkart ricaricabile, valida su tram T1, metro, funicolari, autobus e traghetti. Il tram T1 collega Sultanahmet, il Gran Bazar, Eminönü, Karaköy e Kabataş.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Santa Sofia vista da nord-ovest, con la grande cupola e i quattro minareti',
    immagine: '/images/viaggi/turchia-itinerario/giorno-02-istanbul.jpg',
  },
  {
    slug: 'cappadocia',
    paeseSlug: 'turchia',
    ordine: 2,
    nome: 'Cappadocia',
    tipologia: ['paesaggio', 'trekking', 'storia'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un altopiano di tufo vulcanico che l\'erosione ha scolpito in camini delle fate, valli e pinnacoli, con chiese rupestri bizantine e città sotterranee.',
    percheAndarci:
      'Per le mongolfiere all\'alba, le chiese affrescate del museo all\'aperto di Göreme, le passeggiate nelle valli e le notti in un hotel scavato nella roccia.',
    cosaVedere: [
      'Il museo all\'aperto di Göreme e la Chiesa Oscura',
      'La cittadella di Uçhisar',
      'La Valle Rossa e la Valle Rosa al tramonto',
      'Paşabağ (valle dei Monaci) e la valle di Devrent',
      'Le città sotterranee di Derinkuyu e Kaymaklı',
      'La valle di Ihlara',
    ],
    cosaFare: [
      'Il volo in mongolfiera all\'alba',
      'Trekking nella Valle d\'Amore e nella Valle dei Piccioni',
      'Giro a cavallo o in quad al tramonto',
    ],
    doveDormire:
      'Göreme per comodità, Uçhisar e Ortahisar per la vista e la calma, Ürgüp per ristoranti e cantine. Economiche: pensioni di Göreme · fascia media: cave hotel di Göreme e Uçhisar · lusso: Argos in Cappadocia, Museum Hotel.',
    doveMangiare:
      'Testi kebab cotto nel vaso di terracotta, mantı (ravioli con yogurt), pide, i vini di Ürgüp e Uçhisar.',
    comeArrivare: "Da Istanbul si vola in circa un'ora su Kayseri (ASR) o Nevşehir (NAV), indicativamente 40-90 € con bagaglio. Da Kayseri a Göreme ci sono circa un'ora di transfer, da Nevşehir circa 40 minuti; i transfer condivisi, indicativamente 10-15 € a persona, si prenotano con l'hotel in base all'orario del volo. In alternativa i bus notturni da Istanbul impiegano 10-11 ore, e quelli per Pamukkale partono da Göreme e Nevşehir (9-10 ore, 20-35 €).",
    comeSpostarsi: 'Auto a noleggio o tour giornalieri (Red Tour, Green Tour); i dolmuş collegano Göreme, Uçhisar, Avanos e Ürgüp.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre; d\'inverno c\'è la neve e il paesaggio è bellissimo, ma più voli in mongolfiera vengono annullati',
    costi: "Budget basso circa 50-70 € al giorno a persona (pensione a Göreme, dolmuş, un museo, cibo nei locali del paese); medio 110-170 € (cave hotel, un tour giornaliero o auto, due siti al giorno, cene con vino); alto da 300 € in su (cave hotel con terrazza a Uçhisar, mongolfiera, guida privata). Biglietti 2026: museo all'aperto di Göreme 20 €, Chiesa Oscura 6 €, Zelve-Paşabağ 12 €, Derinkuyu o Kaymaklı 13 €; mongolfiera 150-350 €.",
    erroriDaEvitare: [
      'Prenotare la mongolfiera per l\'ultima mattina: col vento i voli si annullano, e conviene avere almeno un giorno di riserva',
      'Scegliere l\'operatore solo in base al prezzo: contano la licenza e il numero di passeggeri per cesta',
      'Visitare il museo all\'aperto a mezzogiorno, quando arrivano tutti i gruppi',
    ],
    miaEsperienza:
      "Ci sono arrivato in volo da Istanbul durante i sedici giorni in Turchia con amici: tre giorni con base a Göreme, la mongolfiera all'alba, il museo all'aperto, la Valle Rossa, Uçhisar e la città sotterranea, poi il bus notturno per Pamukkale.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Museo all'aperto di Göreme",
        "testo": "Un gruppo di chiese e monasteri rupestri scavati nei coni di roccia, con affreschi in gran parte del X e XI secolo. La Chiesa Oscura (Karanlık) è una delle più belle.",
        "come": "Da Göreme a piedi o in navetta.",
        "quando": "All'apertura, prima dei gruppi.",
        "tempo": "1,5-2 ore",
        "costo": "20 € per i visitatori stranieri (muze.gov.tr, 2026); Chiesa Oscura 6 € a parte",
        "orari": "Tutti i giorni 8-17, biglietteria fino alle 16.15 (2026)",
        "lat": 38.6427,
        "lng": 34.84503,
        "url": "https://muze.gov.tr/muze-detay?SectionId=GRM01&DistId=GRM",
        "consiglio": "Chiedere in biglietteria se la Chiesa Oscura richiede un supplemento: i colori valgono la sosta."
      },
      {
        "nome": "Mongolfiera all'alba",
        "testo": "Il volo sopra le valli e i camini delle fate al sorgere del sole è il motivo per cui molti vengono qui.",
        "come": "Si prenota con un operatore autorizzato, con prelievo in hotel prima dell'alba.",
        "quando": "All'alba, quando il meteo lo permette: con vento forte i voli si annullano.",
        "tempo": "Circa un'ora in volo, mezza mattinata in tutto",
        "consiglio": "Prenotare per i primi giorni e tenerne uno di riserva: i voli saltano col vento."
      },
      {
        "nome": "Valle Rossa e Valle Rosa",
        "testo": "Sentieri tra rocce rosa e rosse con chiese scavate nella roccia, belle al tramonto.",
        "come": "Partenza a piedi da Göreme o in auto fino a un belvedere.",
        "quando": "Tramonto.",
        "tempo": "2-3 ore",
        "costo": "Gratis",
        "lat": 38.65099,
        "lng": 34.85359
      },
      {
        "nome": "Derinkuyu e Kaymaklı",
        "testo": "Le città sotterranee su più piani, usate per secoli come rifugio durante le incursioni. Derinkuyu scende fino a circa 85 metri e poteva ospitare migliaia di persone con gli animali; porte di pietra a ruota chiudevano i corridoi.",
        "come": "In auto o in tour da Göreme.",
        "quando": "Mattina presto per evitare la folla nei corridoi.",
        "tempo": "1-1,5 ore",
        "costo": "13 € ciascuna per i visitatori stranieri (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 8-17, biglietteria fino alle 16.15 (2026)",
        "lat": 38.37357,
        "lng": 34.7351,
        "url": "https://muze.gov.tr/muze-detay?SectionId=DKY01&DistId=DKY",
        "consiglio": "Chi soffre di claustrofobia valuti bene: i corridoi sono stretti e bassi."
      },
      {
        "nome": "Chiesa Oscura (Karanlık Kilise)",
        "testo": "La chiesa del museo all'aperto con gli affreschi meglio conservati della Cappadocia: le poche finestre hanno protetto i colori, soprattutto il blu dei fondi. È stata restaurata e si paga a parte.",
        "come": "Dentro il museo all'aperto di Göreme, biglietto separato.",
        "quando": "Nella stessa visita al museo, presto.",
        "tempo": "15-20 minuti",
        "costo": "6 € per i visitatori stranieri (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 8-17, biglietteria fino alle 16.45 (2026)",
        "lat": 38.6387,
        "lng": 34.84626,
        "url": "https://muze.gov.tr/muze-detay?SectionId=GRM02&DistId=GRM"
      },
      {
        "nome": "Zelve e Paşabağ",
        "testo": "Due siti in un biglietto: Zelve è una valle di case e chiese scavate, abitata fino agli anni Cinquanta e lasciata per il rischio di crolli; Paşabağ, la valle dei Monaci, ha i camini delle fate a più cappelli, con le celle degli eremiti.",
        "come": "In auto, quad o dolmuş verso Avanos, 10-15 minuti da Göreme.",
        "quando": "Tardo pomeriggio, con la luce radente.",
        "tempo": "1,5-2 ore",
        "costo": "12 € per i visitatori stranieri (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 8-17, biglietteria fino alle 16.15 (2026)",
        "lat": 38.66917,
        "lng": 34.86337,
        "url": "https://muze.gov.tr/muze-detay?SectionId=ZPO01&DistId=ZPO"
      },
      {
        "nome": "Valle di Devrent",
        "testo": "Detta anche Valle dell'Immaginazione: rocce rosa senza chiese né case, dove si cercano le forme di animali, la più famosa è il cammello. Si vede in poco tempo dalla strada.",
        "come": "In auto tra Zelve e Ürgüp, sosta sul bordo della strada.",
        "quando": "Fine pomeriggio.",
        "tempo": "20-30 minuti",
        "costo": "Gratis",
        "lat": 38.67262,
        "lng": 34.88551
      },
      {
        "nome": "Cittadella di Uçhisar",
        "testo": "Lo sperone di roccia più alto della zona, bucato da stanze e passaggi, che domina il villaggio di Uçhisar. Dalla cima si vedono Göreme, le valli e, nelle giornate limpide, il vulcano Erciyes.",
        "come": "In auto o in dolmuş da Göreme, 10 minuti; scalini fino in cima.",
        "quando": "Al tramonto.",
        "tempo": "45 minuti-1 ora",
        "lat": 38.63033,
        "lng": 34.80556
      },
      {
        "nome": "Valle dell'Amore",
        "testo": "La valle dei grandi pinnacoli a forma di fungo allungato, la più fotografata dalle mongolfiere. Un sentiero la percorre sul fondo, tra vigne e alberi da frutto.",
        "come": "A piedi da Göreme o dalla strada di Uçhisar; il sentiero è facile ma poco segnalato.",
        "quando": "All'alba, sotto le mongolfiere, o nel pomeriggio.",
        "tempo": "2-3 ore a piedi",
        "costo": "Gratis",
        "lat": 38.66069,
        "lng": 34.81961
      },
      {
        "nome": "Valle dei Piccioni",
        "testo": "La valle tra Uçhisar e Göreme che prende il nome dalle migliaia di colombaie scavate nella roccia, usate per raccogliere il guano come concime per le vigne. Il sentiero scende in un canyon verde.",
        "come": "A piedi, da Uçhisar in discesa verso Göreme.",
        "quando": "Mattina o pomeriggio, evitando le ore calde d'estate.",
        "tempo": "1,5-2 ore",
        "costo": "Gratis",
        "lat": 38.63278,
        "lng": 34.81611
      },
      {
        "nome": "Castello di Ortahisar",
        "testo": "L'altro grande sperone fortificato della Cappadocia, nel villaggio di Ortahisar, meno frequentato di Uçhisar. Intorno, magazzini nel tufo dove si conservano agrumi e patate.",
        "come": "In auto da Göreme o Ürgüp, 10 minuti.",
        "quando": "Pomeriggio.",
        "tempo": "45 minuti",
        "lat": 38.61994,
        "lng": 34.86433
      },
      {
        "nome": "Avanos",
        "testo": "La cittadina sul Kızılırmak, il fiume più lungo della Turchia, famosa per la ceramica fatta con l'argilla rossa del fiume. Si entra nei laboratori a vedere il tornio a pedale.",
        "come": "In dolmuş o in auto da Göreme, 15 minuti.",
        "quando": "Pomeriggio, insieme a Zelve e Paşabağ.",
        "tempo": "1-2 ore",
        "lat": 38.715,
        "lng": 34.84667
      },
      {
        "nome": "Valle di Ihlara",
        "testo": "Un canyon profondo un centinaio di metri scavato dal fiume Melendiz, con un sentiero lungo il torrente e chiese rupestri affrescate nelle pareti. È la camminata più verde della regione.",
        "come": "In auto o con il Green Tour, circa 1,5 ore da Göreme; il tratto classico va da Ihlara a Belisırma.",
        "quando": "Mattina, d'estate per il fresco del fiume.",
        "tempo": "mezza giornata",
        "lat": 38.2575,
        "lng": 34.29528,
        "consiglio": "Pranzo nei ristoranti sul torrente di Belisırma, poi taxi per tornare all'auto."
      },
      {
        "nome": "Monastero di Selime",
        "testo": "Il grande complesso rupestre in fondo alla valle di Ihlara, con una cattedrale scavata su due piani, cucine e stalle. Il paesaggio intorno è stato usato come set per film di fantascienza.",
        "come": "In auto o con il Green Tour, abbinato a Ihlara.",
        "quando": "Pomeriggio, dopo Ihlara.",
        "tempo": "45 minuti-1 ora",
        "lat": 38.3012,
        "lng": 34.25943
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "All'alba: mongolfiera, o il cielo pieno di palloni dalle terrazze di Göreme",
          "Museo all'aperto di Göreme e Chiesa Oscura",
          "Pomeriggio: Zelve, Paşabağ e Devrent",
          "Tramonto sulla Valle Rossa"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1 come sopra",
          "Giorno 2: città sotterranea di Derinkuyu o Kaymaklı",
          "Valle di Ihlara e monastero di Selime",
          "Tramonto dalla cittadella di Uçhisar"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: trekking nella Valle dei Piccioni e nella Valle dell'Amore",
          "Pomeriggio ad Avanos tra i laboratori di ceramica, o castello di Ortahisar",
          "Cena e vino a Ürgüp, con il giorno di riserva per la mongolfiera"
        ]
      }
    ],
    zone: [
      {
        "nome": "Göreme",
        "perChi": "chi vuole stare vicino a tutto",
        "testo": "Hotel in grotta, ristoranti e partenze delle mongolfiere. Il più turistico.",
        "fascia": "40-170 €"
      },
      {
        "nome": "Uçhisar",
        "perChi": "chi vuole vista e quiete",
        "testo": "Villaggio sotto il castello, hotel di charme con terrazza panoramica.",
        "fascia": "90-170 €"
      },
      {
        "nome": "Ürgüp / Mustafapaşa",
        "perChi": "chi vuole un posto meno turistico",
        "testo": "Cittadine più tranquille, con ristoranti locali e vino."
      }
    ],
    sapori: [
      {
        "nome": "Testi kebab",
        "testo": "Carne e verdure cotte in un vaso di terracotta che si rompe al tavolo."
      },
      {
        "nome": "Mantı",
        "testo": "Ravioli piccoli con yogurt e burro speziato."
      },
      {
        "nome": "Vini della Cappadocia",
        "testo": "Bianchi di uva Emir e rossi locali, nelle cantine di Ürgüp e Uçhisar."
      },
      {
        "nome": "Pide",
        "testo": "Pizza turca a barca con formaggio o carne, nei forni locali."
      }
    ],
    attenzioni: [
      "Mongolfiera all'ultima mattina: col vento si annulla, quindi meglio averne una di riserva.",
      "Scegliere l'operatore per licenza e numero di passeggeri per cesta, non solo per il prezzo.",
      "Museo all'aperto a mezzogiorno: arrivano tutti i gruppi, meglio andare all'apertura.",
      "Noleggi di quad e cavalli: verificare condizioni dei mezzi e assicurazione prima di partire."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Valle di Soğanlı",
        "distanza": "circa 55-60 km, 1 ora",
        "come": "In auto; non ci sono tour regolari.",
        "testo": "Due valli con chiese rupestri dipinte e il villaggio delle bambole di pezza, quasi senza turisti. Una Cappadocia come doveva essere prima del boom."
      },
      {
        "nome": "Kayseri",
        "distanza": "circa 75 km, 1 ora",
        "come": "In auto o in bus da Nevşehir; da qui partono molti voli per Istanbul.",
        "testo": "La città selgiuchide ai piedi del vulcano Erciyes, con la cittadella, le scuole coraniche del Duecento e il bazar. D'inverno sull'Erciyes si scia."
      },
      {
        "nome": "Hacıbektaş",
        "distanza": "circa 55 km, 45 minuti",
        "come": "In auto da Göreme o Avanos.",
        "testo": "Il complesso del santo sufi Hacı Bektaş Veli, centro della tradizione alevi, con il museo e il mausoleo in un giardino tranquillo."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono in Cappadocia?",
        "risposta": "Tre notti: due giorni pieni per musei, valli e città sotterranee, più una mattina di riserva per la mongolfiera, che con il vento viene annullata."
      },
      {
        "domanda": "Meglio dormire a Göreme, Uçhisar o Ürgüp?",
        "risposta": "Göreme è il più comodo, con tutto a piedi; Uçhisar e Ortahisar sono più tranquilli e panoramici; Ürgüp ha più ristoranti e cantine ma serve l'auto per le valli."
      },
      {
        "domanda": "Quanto costa la mongolfiera e quando si vola?",
        "risposta": "Non esiste un prezzo ufficiale: di massima 150-350 € a persona secondo stagione, operatore e numero di passeggeri nel cesto. Si vola all'alba e il volo dura circa un'ora."
      },
      {
        "domanda": "Meglio Derinkuyu o Kaymaklı?",
        "risposta": "Derinkuyu scende di più ed è più spettacolare, Kaymaklı è più vicina a Göreme e spesso meno affollata. Il biglietto costa 13 € in entrambe: per la maggior parte delle persone ne basta una."
      },
      {
        "domanda": "Serve l'auto in Cappadocia?",
        "risposta": "Non è indispensabile: tra Göreme, Uçhisar, Avanos e Ürgüp ci sono i dolmuş, e Ihlara e le città sotterranee si fanno con il Green Tour. L'auto dà libertà per tramonti e valli lontane."
      },
      {
        "domanda": "Conviene il Museum Pass Cappadocia?",
        "risposta": "Con Göreme (20 €), Chiesa Oscura (6 €), Zelve-Paşabağ (12 €) e una città sotterranea (13 €) si arriva a 51 €; il pass, intorno ai 65 € per tre giorni, conviene solo se si aggiungono altri siti."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Mongolfiere sopra le valli di tufo del parco nazionale di Göreme, in Cappadocia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-06-cappadocia.jpg',
  },
  {
    slug: 'pamukkale',
    paeseSlug: 'turchia',
    ordine: 3,
    nome: 'Pamukkale e Hierapolis',
    tipologia: ['paesaggio', 'archeologia', 'terme'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'Una collina di terrazze di travertino bianco formate da sorgenti calde, con in cima le rovine della città romana di Hierapolis.',
    percheAndarci:
      'Per camminare a piedi nudi nelle vasche calcaree, per il teatro romano di Hierapolis e per la piscina antica di Cleopatra, con le colonne sommerse.',
    cosaVedere: [
      'Le terrazze di travertino',
      'Il teatro e la necropoli di Hierapolis',
      'La piscina antica (Antique Pool), con ingresso a parte',
      'Il martyrion di San Filippo',
    ],
    cosaFare: ['Salire a piedi nudi dal basso al tramonto', 'Un bagno nella piscina antica'],
    doveDormire: 'Il villaggio di Pamukkale, ai piedi delle terrazze, con pensioni e piccoli hotel con piscina termale.',
    comeArrivare: "L'aeroporto più vicino è Denizli Çardak, a circa un'ora di strada, con voli da Istanbul; da lì navette e taxi portano al paese. Chi arriva in bus scende all'autostazione di Denizli e prende il minibus (dolmuş) fino a Pamukkale, ai piedi della collina. Il bus notturno dalla Cappadocia, da Göreme o Nevşehir, impiega circa 9-10 ore e costa indicativamente 20-35 €; da Selçuk servono circa 3 ore, da Antalya circa 4. In auto, Pamukkale-Afrodisia-Selçuk sono circa 3,5 ore di guida.",
    comeSpostarsi: 'A piedi; dolmuş per Denizli.',
    periodoMigliore: 'primavera e autunno; d\'estate le terrazze bianche abbagliano e scottano',
    costi: "Budget basso circa 60-80 € al giorno a persona (pensione nel paese, cibo nei locali, biglietto da 30 €); medio 100-150 € (hotel con piscina termale, Piscina Antica, Laodicea, cena al ristorante); alto da 200 € in su (hotel termale a Karahayıt, auto, guida). Biglietti 2026 per i visitatori stranieri: Pamukkale-Hierapolis 30 €, Laodicea 12 €, Afrodisia 12 €; la Piscina Antica si paga a parte, in lire.",
    erroriDaEvitare: [
      'Salire a mezzogiorno d\'estate: il riflesso del bianco è accecante',
      'Aspettarsi tutte le vasche piene: molte vengono lasciate asciutte a rotazione per preservare il travertino',
    ],
    miaEsperienza:
      "Ci sono arrivato con il bus notturno dalla Cappadocia durante i sedici giorni in Turchia con amici: un giorno tra le terrazze e Hierapolis, poi in auto verso Afrodisia ed Efeso.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Terrazze di travertino",
        "testo": "Le vasche bianche di calcare lungo il pendio, riempite dalle sorgenti calde. Le autorità regolano l'acqua e chiudono a turno alcuni tratti per far rigenerare il travertino. Patrimonio UNESCO dal 1988 insieme a Hierapolis.",
        "come": "Ingresso dal sud o dal nord del sito; bus o auto fino al parcheggio. Dall'ingresso basso, nel paese, si sale a piedi scalzi in circa mezz'ora.",
        "quando": "Al tramonto, con la luce sul bianco; a mezzogiorno d'estate abbaglia.",
        "tempo": "1-2 ore",
        "costo": "30 € per i visitatori stranieri, biglietto unico con Hierapolis (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 8-18, biglietteria fino alle 17 (muze.gov.tr, 2026)",
        "lat": 37.92389,
        "lng": 29.12333,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK",
        "consiglio": "Portare un telo e un costume, sapendo che molte vasche possono essere asciutte."
      },
      {
        "nome": "Hierapolis e Piscina Antica",
        "testo": "Le rovine della città fondata nel II secolo a.C. sopra le terrazze: il teatro, la necropoli con circa 1.200 tombe, il martyrion ottagonale di San Filippo e la piscina antica di acqua calda con colonne sul fondo.",
        "come": "Si cammina nel sito. La piscina si paga a parte.",
        "quando": "Mattina presto o fine pomeriggio.",
        "tempo": "2 ore",
        "costo": "Compreso nei 30 € del biglietto delle terrazze; Piscina Antica a parte, in lire",
        "orari": "Tutti i giorni 8-18, biglietteria fino alle 17 (muze.gov.tr, 2026)",
        "lat": 37.925,
        "lng": 29.12583,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Teatro di Hierapolis",
        "testo": "Il teatro romano scavato nel fianco della collina, con la scena decorata da rilievi restaurati dalla missione archeologica italiana che lavora qui da decenni. Dalle gradinate alte si vede tutta la valle del Lico.",
        "come": "A piedi dalla Piscina Antica, in salita per una decina di minuti.",
        "quando": "Mattina, prima del caldo: il sentiero non ha ombra.",
        "tempo": "30-45 minuti",
        "costo": "Compreso nel biglietto di Hierapolis",
        "lat": 37.9267,
        "lng": 29.1292,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Necropoli di Hierapolis",
        "testo": "Una delle necropoli antiche più estese dell'Anatolia, lungo la strada che arriva da nord: tumuli, sarcofagi e tombe a casa, molte inclinate dai terremoti. Si attraversa entrando dalla porta nord.",
        "come": "Dall'ingresso nord del sito, a piedi lungo la strada antica.",
        "quando": "Fine pomeriggio, con la luce bassa.",
        "tempo": "45 minuti-1 ora",
        "costo": "Compreso nel biglietto di Hierapolis",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Porta di Frontino e via Frontina",
        "testo": "La porta monumentale a tre archi tra due torri rotonde, costruita alla fine del I secolo d.C. dal proconsole Giulio Frontino e dedicata all'imperatore Domiziano. Da qui parte la via colonnata principale della città.",
        "come": "Dall'ingresso nord, dopo la necropoli.",
        "quando": "Insieme alla necropoli.",
        "tempo": "20 minuti",
        "costo": "Compreso nel biglietto di Hierapolis",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Martyrion di San Filippo",
        "testo": "Il santuario ottagonale del V secolo costruito sul luogo della tradizione del martirio dell'apostolo Filippo, sulla collina sopra la città. Nel 2011 la missione italiana ha annunciato vicino al martyrion la scoperta della chiesa con quella che ritiene la sua tomba.",
        "come": "Salita a piedi dal teatro, circa 15-20 minuti su scalini e sentiero.",
        "quando": "Mattina presto o tardo pomeriggio.",
        "tempo": "1 ora con la salita",
        "costo": "Compreso nel biglietto di Hierapolis",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Plutonium",
        "testo": "La grotta sacra a Plutone da cui escono gas di anidride carbonica, che nell'antichità uccidevano gli animali offerti in sacrificio. Ritrovata e scavata dalla missione italiana, si vede dall'esterno, accanto al tempio di Apollo.",
        "come": "A piedi, tra il teatro e la Piscina Antica.",
        "quando": "In qualsiasi momento della visita.",
        "tempo": "15 minuti",
        "costo": "Compreso nel biglietto di Hierapolis",
        "lat": 37.9268,
        "lng": 29.12681,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Museo archeologico di Hierapolis",
        "testo": "Il museo dentro le grandi terme romane, con sale a volta in blocchi di travertino. Espone sarcofagi, statue e rilievi da Hierapolis, Laodicea e Tripolis, utili a capire le rovine viste fuori.",
        "come": "Accanto alla Piscina Antica, nel centro del sito.",
        "quando": "Nelle ore più calde, quando fuori il sole picchia.",
        "tempo": "45 minuti",
        "costo": "Indicato in 30 € su muze.gov.tr, lo stesso importo del biglietto del sito",
        "orari": "Tutti i giorni 8-17.30, biglietteria fino alle 17 (muze.gov.tr, 2026)",
        "lat": 37.92506,
        "lng": 29.12405,
        "url": "https://muze.gov.tr/muze-detay?SectionId=DHA01&DistId=MRK"
      },
      {
        "nome": "Karahayıt",
        "testo": "Il villaggio termale a pochi chilometri a nord di Pamukkale, dove una sorgente di acqua calda ricca di ferro colora di rosso e arancio il calcare. Intorno ci sono molti hotel con piscine termali.",
        "come": "In dolmuş o in auto dal paese di Pamukkale, circa 10 minuti.",
        "quando": "Sera, dopo la visita a Hierapolis.",
        "tempo": "1 ora",
        "costo": "La sorgente rossa si vede gratis",
        "lat": 37.96539,
        "lng": 29.10268
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Hierapolis, teatro e necropoli",
          "Piscina Antica",
          "Pomeriggio: salita sulle terrazze",
          "Tramonto sul travertino"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1 come sopra",
          "Giorno 2: Laodicea all'apertura",
          "Museo archeologico di Hierapolis e salita al Martyrion di San Filippo",
          "Sera alla sorgente rossa e nelle terme di Karahayıt"
        ]
      },
      {
        "titolo": "Lungo il percorso",
        "tappe": [
          "Bus notturno da Göreme o Nevşehir, arrivo a Pamukkale la mattina presto",
          "Terrazze e Hierapolis in giornata, notte nel paese",
          "Ritiro dell'auto a Denizli e partenza verso ovest",
          "Sosta di due ore ad Afrodisia, poi Selçuk per la sera"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pamukkale paese",
        "perChi": "chi vuole stare sotto le terrazze",
        "testo": "Pensioni a conduzione familiare, piscine termali e ristoranti semplici.",
        "fascia": "35-70 €"
      },
      {
        "nome": "Karahayıt",
        "perChi": "chi vuole bagni termali",
        "testo": "Villaggio vicino con terme e acque rosse ricche di ferro.",
        "fascia": "60-250 €"
      },
      {
        "nome": "Denizli",
        "perChi": "chi arriva tardi o riparte in auto",
        "testo": "La città a circa mezz'ora, con autostazione, noleggi auto e hotel urbani; poco interessante da vivere, comoda per la logistica."
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Sfoglia sottile ripiena di formaggio o spinaci, cotta al momento."
      },
      {
        "nome": "Kebab di Denizli",
        "testo": "Agnello cotto a lungo nel forno a legna, servito con pane."
      },
      {
        "nome": "Ayran",
        "testo": "Yogurt liquido salato, per il caldo."
      },
      {
        "nome": "Tè turco",
        "testo": "Nel bicchiere a tulipano, ovunque."
      }
    ],
    attenzioni: [
      "Salire a mezzogiorno d'estate: il riflesso del bianco è accecante e il calore scotta.",
      "Aspettarsi tutte le vasche piene: molti tratti vengono chiusi a turno per proteggere il travertino.",
      "Seguire le indicazioni dei custodi su dove e come si cammina sul travertino: di solito si va scalzi, quindi portare una borsa per le scarpe."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Afrodisia",
        "distanza": "circa 1,5 ore in auto",
        "come": "In auto, sulla strada verso Selçuk; con i mezzi pubblici è scomodo.",
        "testo": "La città di Afrodite, patrimonio UNESCO dal 2017, con uno stadio romano quasi intatto, il tetrapylon e un museo pieno di statue della sua scuola di scultori, compresi i rilievi del Sebasteion. Biglietto 12 €, aperto tutti i giorni 8.30-17.30 (muze.gov.tr, 2026)."
      },
      {
        "nome": "Laodicea",
        "distanza": "circa 20 minuti in auto",
        "come": "In auto o in taxi da Pamukkale, verso Denizli.",
        "testo": "Una delle sette chiese dell'Apocalisse, con due teatri, vie colonnate in parte rialzate e una chiesa del IV secolo sotto una copertura. Molto meno frequentata di Hierapolis. Biglietto 12 €, tutti i giorni 8-17.30 (muze.gov.tr, 2026)."
      }
    ],
    faq: [
      {
        "domanda": "Quanto tempo serve a Pamukkale?",
        "risposta": "Un giorno pieno basta per le terrazze e Hierapolis. Conviene dormire nel paese per avere il tramonto sul travertino e la mattina presto senza gruppi; un secondo giorno serve solo se si aggiungono Laodicea o Afrodisia."
      },
      {
        "domanda": "Quanto costa l'ingresso a Pamukkale?",
        "risposta": "Per i visitatori stranieri il biglietto unico per terrazze e Hierapolis costa 30 € nel 2026. La Piscina Antica si paga a parte, in lire, alla sua cassa."
      },
      {
        "domanda": "Si può fare il bagno nelle terrazze?",
        "risposta": "Si cammina scalzi e ci si bagna nelle vasche aperte, che hanno poca acqua e cambiano a rotazione. Per nuotare davvero c'è la Piscina Antica, tra le colonne sommerse."
      },
      {
        "domanda": "Meglio entrare dall'ingresso basso o da quello alto?",
        "risposta": "Dall'ingresso basso, nel paese, si sale scalzi sul travertino in circa mezz'ora ed è il modo più bello di arrivare a Hierapolis. Gli ingressi nord e sud, raggiungibili in auto o con i tour, sono comodi per chi vuole partire dalle rovine e dalla necropoli."
      },
      {
        "domanda": "Si può visitare Pamukkale in giornata da Selçuk?",
        "risposta": "Sì, con un tour o in bus, ma sono circa 3 ore per tratta e si perde il tramonto. Meglio una notte nel paese, sulla strada tra la Cappadocia e la costa."
      },
      {
        "domanda": "Vale la pena il Museum Pass?",
        "risposta": "Il Museum Pass The Mediterranean, 90 € per 7 giorni, copre i siti statali delle province di Antalya, Mersin, Adana e Denizli, quindi anche Pamukkale e Laodicea. Conviene a chi prosegue verso la costa licia e Antalya."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Le vasche di travertino bianco di Pamukkale piene d\'acqua azzurra',
    immagine: '/images/viaggi/turchia-itinerario/giorno-08-pamukkale.jpg',
  },
  {
    slug: 'efeso',
    paeseSlug: 'turchia',
    ordine: 4,
    nome: 'Efeso, Selçuk e Şirince',
    tipologia: ['archeologia', 'borghi'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città romana meglio conservata del Mediterraneo orientale, con la biblioteca di Celso e il grande teatro, a pochi chilometri dalla cittadina di Selçuk e dal villaggio collinare di Şirince.',
    percheAndarci:
      'Per percorrere la via dei Cureti fino alla biblioteca di Celso, vedere gli affreschi e i mosaici delle case a terrazza e passare una sera fra le case greche di Şirince.',
    cosaVedere: [
      'La biblioteca di Celso e il grande teatro di Efeso',
      'Le case a terrazza, con biglietto a parte',
      'La basilica di San Giovanni e il castello di Selçuk',
      'Il museo di Efeso a Selçuk',
      'La casa della Madonna (Meryem Ana Evi)',
      'Afrodisia, sulla strada da Pamukkale',
    ],
    cosaFare: ['Entrare dalla porta alta e scendere verso la biblioteca', 'Assaggiare i vini di frutta a Şirince'],
    doveDormire: 'Selçuk per comodità e prezzi, Şirince per la calma; Kuşadası per chi vuole il mare vicino.',
    comeArrivare: "L'aeroporto più vicino è Izmir Adnan Menderes, a circa un'ora di strada da Selçuk; dalla stazione dell'aeroporto e dal centro di Izmir i treni regionali arrivano alla stazione di Selçuk. Da Pamukkale ci sono bus diretti in circa 3 ore, mentre in auto, passando da Afrodisia, si calcolano circa 3,5 ore di guida. Da Selçuk all'ingresso alto di Efeso sono pochi chilometri: taxi per pochi euro o dolmuş.",
    comeSpostarsi: 'Taxi o dolmuş da Selçuk all\'ingresso alto di Efeso (pochi km); auto a noleggio.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre, sempre all\'apertura',
    costi: "Budget basso circa 70-90 € al giorno a persona (pensione a Selçuk, dolmuş, Efeso, cibo nei locali); medio 130-180 € (case in pietra a Şirince o hotel a Selçuk, taxi, case a terrazza e museo, cene con vino); alto da 250 € in su (boutique hotel, guida privata, auto). Biglietti 2026 per i visitatori stranieri: Efeso 40 € con il museo esperienziale, case a terrazza 15 €, museo di Efeso 10 €, basilica di San Giovanni 6 €.",
    erroriDaEvitare: [
      'Entrare a metà mattina in alta stagione, quando arrivano i passeggeri delle navi da crociera di Kuşadası',
      'Saltare le case a terrazza per risparmiare: sono la parte più bella del sito',
    ],
    miaEsperienza:
      "Ci sono stato durante i sedici giorni in Turchia con amici, in auto da Pamukkale con una sosta ad Afrodisia: base a Selçuk, poi Efeso e Şirince.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Efeso",
        "testo": "La grande città greco-romana con la biblioteca di Celso (II secolo d.C.), il grande teatro da circa 24.000-25.000 posti, la via dei Cureti e le Case a terrazza, residenze romane con mosaici e affreschi sotto una copertura.",
        "come": "Da Selçuk in taxi o dolmuş; l'ingresso alto evita la salita.",
        "quando": "All'apertura, soprattutto quando arrivano le navi da crociera da Kuşadası: dalle 10 il sito si riempie.",
        "tempo": "2-3 ore",
        "costo": "40 € per i visitatori stranieri, compreso il museo esperienziale di Efeso (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 8-18, biglietteria fino alle 17.30 (muze.gov.tr, 2026)",
        "lat": 37.94097,
        "lng": 27.34147,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS",
        "consiglio": "Le Case a terrazza hanno un biglietto a parte da 15 €: vale la pena, sono tra le parti più belle del sito."
      },
      {
        "nome": "Case a terrazza",
        "testo": "Sette case romane dei notabili di Efeso costruite nel I secolo d.C. sulle terrazze del monte Koressos, sotto una grande copertura. Si cammina su passerelle sopra pavimenti a mosaico e pareti affrescate.",
        "come": "Dentro Efeso, lungo la via dei Cureti, con biglietto separato.",
        "quando": "Prima di mezzogiorno, prima di scendere alla biblioteca.",
        "tempo": "45 minuti-1 ora",
        "costo": "15 € per i visitatori stranieri (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 9-17, biglietteria fino alle 16.30 (muze.gov.tr, 2026)",
        "lat": 37.93806,
        "lng": 27.34139,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS02&DistId=EFS"
      },
      {
        "nome": "Biblioteca di Celso",
        "testo": "La facciata a due piani più fotografata della Turchia, costruita all'inizio del II secolo d.C. dal figlio del governatore Celso come biblioteca e tomba del padre. È stata rialzata pezzo per pezzo negli anni Settanta.",
        "come": "In fondo alla via dei Cureti, scendendo dall'ingresso alto.",
        "quando": "Appena aperto, prima dei gruppi, o nell'ultima ora.",
        "tempo": "20-30 minuti",
        "costo": "Compresa nel biglietto di Efeso",
        "lat": 37.93914,
        "lng": 27.34075,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS"
      },
      {
        "nome": "Grande teatro di Efeso",
        "testo": "Il teatro scavato nel colle Panayır, il più grande dell'Asia Minore romana, con circa 24.000-25.000 posti. Davanti parte la via del Porto, che un tempo arrivava al mare.",
        "come": "Dentro Efeso, accanto all'ingresso basso.",
        "quando": "Fine visita, con la luce del pomeriggio.",
        "tempo": "20-30 minuti",
        "costo": "Compreso nel biglietto di Efeso",
        "lat": 37.94101,
        "lng": 27.34273,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS"
      },
      {
        "nome": "Museo esperienziale di Efeso",
        "testo": "Il museo multimediale di fronte al grande teatro, che ricostruisce con proiezioni e audioguida la vita della città antica. Utile prima o dopo il giro tra le rovine.",
        "come": "Davanti al grande teatro, dentro il sito.",
        "quando": "A fine visita, nelle ore calde.",
        "tempo": "30-45 minuti",
        "costo": "Compreso nei 40 € di Efeso (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 8-18, biglietteria fino alle 17.30 (muze.gov.tr, 2026)",
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS03&DistId=EFS"
      },
      {
        "nome": "Museo di Efeso",
        "testo": "Il museo archeologico di Selçuk, con le due statue di Artemide trovate a Efeso, i reperti delle case a terrazza e le sale delle fontane e del culto imperiale. Aiuta a rimettere insieme quello che si è visto la mattina.",
        "come": "A piedi nel centro di Selçuk.",
        "quando": "Pomeriggio, dopo Efeso.",
        "tempo": "1 ora",
        "costo": "10 € per i visitatori stranieri (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 8.30-17.30, biglietteria fino alle 17 (muze.gov.tr, 2026)",
        "lat": 37.94896,
        "lng": 27.36767,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFM01&DistId=EFM"
      },
      {
        "nome": "Basilica di San Giovanni e castello di Selçuk",
        "testo": "La basilica fatta costruire da Giustiniano nel VI secolo sopra la tomba tradizionale dell'apostolo, con il castello sulla collina.",
        "come": "A piedi da Selçuk.",
        "quando": "Mattina, o al tramonto.",
        "tempo": "1 ora",
        "costo": "6 € per i visitatori stranieri (muze.gov.tr, 2026)",
        "orari": "Tutti i giorni 8-18, biglietteria fino alle 17.30 (muze.gov.tr, 2026)",
        "lat": 37.95292,
        "lng": 27.36697,
        "url": "https://muze.gov.tr/muze-detay?SectionId=STJ01&DistId=STJ"
      },
      {
        "nome": "Moschea di İsa Bey",
        "testo": "La moschea del 1375, ai piedi della collina di San Giovanni, con colonne di granito riprese dalle rovine di Efeso e un portale in marmo. È una delle più antiche dell'Anatolia occidentale.",
        "come": "A piedi dal centro di Selçuk, sotto la basilica.",
        "quando": "Fuori dagli orari di preghiera.",
        "tempo": "20 minuti",
        "lat": 37.95222,
        "lng": 27.36583
      },
      {
        "nome": "Artemision",
        "testo": "Il tempio di Artemide, una delle sette meraviglie del mondo antico: oggi in un prato paludoso resta in piedi una sola colonna ricostruita. Da qui si vedono insieme la basilica e la moschea di İsa Bey.",
        "come": "A piedi da Selçuk, sulla strada per Efeso.",
        "quando": "Al tramonto.",
        "tempo": "15-20 minuti",
        "lat": 37.94972,
        "lng": 27.36389
      },
      {
        "nome": "Casa della Madonna (Meryem Ana)",
        "testo": "Il santuario sulle colline sopra Selçuk che la tradizione cattolica, dall'Ottocento, considera l'ultima casa della Madonna. Ci sono venuti tre papi.",
        "come": "In taxi o con un tour da Selçuk; è a circa 15 minuti dall'ingresso alto di Efeso.",
        "quando": "Mattina.",
        "tempo": "45 minuti",
        "lat": 37.91154,
        "lng": 27.33406
      },
      {
        "nome": "Şirince",
        "testo": "Piccolo villaggio di case di pietra in collina, con vini di frutta e botteghe.",
        "come": "Dolmuş o taxi da Selçuk, circa 7 km.",
        "quando": "Pomeriggio.",
        "tempo": "1-2 ore",
        "lat": 37.94139,
        "lng": 27.43306,
        "consiglio": "Assaggiare i vini di frutta prima di comprare."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Efeso all'apertura e Case a terrazza",
          "Pranzo a Selçuk",
          "Pomeriggio: basilica di San Giovanni",
          "Sera: Şirince"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Efeso dall'ingresso alto, Case a terrazza, biblioteca di Celso e grande teatro",
          "Pomeriggio al museo di Efeso, poi cena a Selçuk",
          "Giorno 2: casa della Madonna in mattinata",
          "Basilica di San Giovanni, moschea di İsa Bey e Artemision, poi sera a Şirince"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Priene, Mileto e Didima in auto, verso sud",
          "Oppure mezza giornata al mare a Kuşadası"
        ]
      }
    ],
    zone: [
      {
        "nome": "Selçuk",
        "perChi": "chi vuole stare vicino a Efeso",
        "testo": "Cittadina con pensioni familiari, ristoranti e mercato.",
        "fascia": "35-60 €"
      },
      {
        "nome": "Şirince",
        "perChi": "chi vuole atmosfera di villaggio",
        "testo": "Case di pietra e vigneti, più tranquillo ma isolato e con pochi servizi.",
        "fascia": "70-120 €"
      },
      {
        "nome": "Kuşadası",
        "perChi": "chi vuole il mare",
        "testo": "La città di mare a una ventina di minuti, con il porto delle crociere, spiagge e grandi hotel; più cara e affollata di Selçuk.",
        "fascia": "80-190 €"
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Sfoglia ripiena, nelle bancarelle del mercato."
      },
      {
        "nome": "Köfte",
        "testo": "Polpette alla brace con pane e insalata."
      },
      {
        "nome": "Vini di frutta di Şirince",
        "testo": "Di melograno, pesca e mora, nelle botteghe del villaggio."
      },
      {
        "nome": "Zeytinyağlı",
        "testo": "Verdure all'olio, antipasto freddo tipico dell'Egeo."
      }
    ],
    attenzioni: [
      "Entrare a metà mattina in alta stagione significa trovare le navi da crociera: meglio all'apertura.",
      "Saltare le Case a terrazza per risparmiare è un errore: sono tra le parti più belle.",
      "Guide sul posto: concordare prezzo e durata prima di iniziare."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Priene, Mileto e Didima",
        "distanza": "circa 1 ora in auto fino a Priene",
        "come": "In auto o con un tour di giornata da Selçuk; con i mezzi pubblici servono più cambi.",
        "testo": "Tre siti ionici in fila verso sud: Priene sul fianco del monte, con la sua pianta a scacchiera, il grande teatro di Mileto e il tempio di Apollo a Didima, con colonne enormi."
      },
      {
        "nome": "Kuşadası",
        "distanza": "circa 20 km, 20-30 minuti",
        "come": "In dolmuş o in auto da Selçuk.",
        "testo": "La città di mare più vicina, con il lungomare, l'isolotto dei Piccioni e le spiagge della penisola di Dilek. Utile per mezza giornata di mare."
      }
    ],
    faq: [
      {
        "domanda": "Quanto costa entrare a Efeso?",
        "risposta": "Nel 2026 il biglietto per i visitatori stranieri costa 40 € e comprende il museo esperienziale. Le Case a terrazza si pagano a parte, 15 €; il museo di Efeso a Selçuk costa 10 € e la basilica di San Giovanni 6 €."
      },
      {
        "domanda": "Quanto tempo serve per visitare Efeso?",
        "risposta": "Il sito si vede in 2-3 ore, più un'ora per le Case a terrazza. Con Selçuk, il museo e Şirince servono un giorno pieno, due per aggiungere la casa della Madonna senza fretta."
      },
      {
        "domanda": "Da quale ingresso conviene entrare?",
        "risposta": "Dall'ingresso alto, raggiunto in taxi da Selçuk: si scende lungo la via dei Cureti fino alla biblioteca di Celso e al grande teatro, senza fare la salita."
      },
      {
        "domanda": "Meglio dormire a Selçuk o a Kuşadası?",
        "risposta": "Selçuk è a pochi minuti da Efeso, più tranquilla ed economica. Kuşadası ha il mare e più hotel, ma è più cara e affollata dalle crociere."
      },
      {
        "domanda": "Quando conviene andare per evitare la folla?",
        "risposta": "All'apertura delle 8: dalle 10 arrivano i passeggeri delle navi da crociera di Kuşadası. Primavera e inizio autunno sono i mesi migliori, d'estate a mezzogiorno si superano i 35 °C."
      },
      {
        "domanda": "Si può arrivare a Efeso dall'aeroporto di Izmir?",
        "risposta": "Sì: Selçuk è a circa un'ora di strada, con il treno regionale dalla stazione dell'aeroporto o con il transfer, e da Selçuk all'ingresso di Efeso bastano pochi minuti di taxi."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Le gradinate in pietra dell\'antico stadio di Efeso',
    immagine: '/images/viaggi/turchia-itinerario/giorno-10-efeso.jpg',
  },
  {
    slug: 'costa-licia',
    paeseSlug: 'turchia',
    ordine: 5,
    nome: 'Costa licia: Fethiye, Ölüdeniz, Kaş e Kekova',
    tipologia: ['mare', 'trekking', 'road trip'],
    giorniConsigliati: '4-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il tratto di costa fra Fethiye e Antalya, con calette di acqua turchese, tombe licie scavate nella roccia, il sentiero della Via Licia e le rovine sommerse di Kekova.',
    percheAndarci:
      'Per il mare più bello della Turchia, le spiagge di Ölüdeniz e Kaputaş, la sabbia di Patara, la gola di Saklıkent e le uscite in barca fra le isole.',
    cosaVedere: [
      'La laguna di Ölüdeniz e la Valle delle Farfalle',
      'Il villaggio abbandonato di Kayaköy',
      'La gola di Saklıkent',
      'Le rovine e la spiaggia di Patara',
      'La spiaggia di Kaputaş',
      'Le rovine sommerse di Kekova e il castello di Kaleköy (Simena)',
    ],
    cosaFare: [
      'Parapendio dal Babadağ su Ölüdeniz',
      'Una tappa della Via Licia',
      'Kayak o barca sopra la città sommersa di Kekova',
      'Immersioni e snorkeling a Kaş',
    ],
    doveDormire:
      'Fethiye o Ölüdeniz per la prima base, Kaş per la seconda (la più bella e vivace). Economiche: pensioni di Kaş · fascia media: hotel con vista mare · lusso: resort di Ölüdeniz e Kalkan.',
    doveMangiare: 'Pesce scelto al mercato di Fethiye e cucinato nei ristoranti intorno, gözleme nei villaggi, meze nelle taverne di Kaş.',
    comeArrivare: "Due aeroporti servono la costa: Dalaman (DLM) per Fethiye, Ölüdeniz e Göcek, a circa un'ora di strada da Fethiye, e Antalya (AYT) per Kaş e Kekova, a circa tre ore e mezza da Kaş. In stagione ci sono voli diretti dall'Italia su entrambi, tutto l'anno via Istanbul. Chi arriva in auto dall'Egeo conta circa 3,5-4 ore da Selçuk a Fethiye; da Fethiye a Kaş la strada costiera richiede circa 2 ore.",
    comeSpostarsi: 'Auto a noleggio; dolmuş tra le località principali; barche dal porto per le isole.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre; luglio-agosto sono molto caldi e affollati',
    costi: "Budget basso circa 50-70 € al giorno a persona (pensione a Fethiye o Kaş, dolmuş, un sito al giorno, cibo nei locali); medio 100-150 € (hotel con vista mare, auto a noleggio, gita in barca, cene di pesce); alto da 220 € in su (resort a Ölüdeniz o Kalkan, barca privata, parapendio). Biglietti 2026 per i visitatori stranieri: Patara 15 €, Myra 13 €, chiesa di San Nicola 17 €, Simena 4 €, Kayaköy, Tlos, Xanthos, Letoon, tomba di Aminta e isola di Gemile 3 € ciascuno.",
    erroriDaEvitare: [
      'Girare la costa senza auto: fra un paese e l\'altro i dolmuş ci sono, ma le calette migliori restano fuori',
      'Andarci ad agosto senza prenotare: Kaş e Ölüdeniz si riempiono',
    ],
    miaEsperienza:
      "Ci sono stato in auto con amici nella parte finale dei sedici giorni in Turchia: Fethiye, Ölüdeniz e Kayaköy, poi Saklıkent e Patara fino a Kaş e una giornata in barca a Kekova.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fethiye e la tomba di Aminta",
        "testo": "Fethiye è una cittadina vera, con il porto pieno di caicchi, il mercato del pesce e il lungomare. Sopra il centro le tombe licie sono scavate nella parete di roccia: la più grande, la tomba di Aminta del IV secolo a.C., ha una facciata a tempio con colonne ioniche.",
        "come": "Dal centro si sale alla tomba con una scalinata, in circa 15 minuti a piedi.",
        "quando": "Tardo pomeriggio, quando la facciata scolpita diventa arancione.",
        "tempo": "1 ora per la tomba, mezza giornata con il mercato e il porto",
        "costo": "Tomba di Aminta 3 € (2026).",
        "orari": "Tutti i giorni, 8:30-19:30 da aprile a ottobre e 8:30-17:30 da novembre a marzo.",
        "lat": 36.6183,
        "lng": 29.1178,
        "url": "https://www.turkishmuseums.com/museum/detail/2177-mugla-amynthas-archaeological-site/2177/4",
        "consiglio": "Al mercato del pesce chiedere il prezzo al chilo prima della pesata: la cottura nei ristoranti intorno si paga a parte."
      },
      {
        "nome": "Ölüdeniz e la Valle delle Farfalle",
        "testo": "La laguna turchese, area naturale protetta, con la spiaggia pubblica di Belcekız davanti. Poco più a sud la Valle delle Farfalle è una caletta chiusa tra pareti di roccia, raggiungibile in pratica solo dal mare.",
        "come": "Dolmuş da Fethiye, circa 30 minuti. Per la Valle delle Farfalle barca dalla spiaggia di Ölüdeniz.",
        "quando": "Mattina, prima dell'afflusso dei bagnanti; in estate arrivare presto per trovare posto.",
        "tempo": "Mezza giornata",
        "costo": "La laguna ha un piccolo biglietto d'ingresso, la spiaggia di Belcekız è libera; barca per la Valle delle Farfalle circa 10-20 € andata e ritorno.",
        "lat": 36.5495,
        "lng": 29.1116,
        "consiglio": "Da qui partono i voli in parapendio dal monte Babadağ, a quasi duemila metri, con atterraggio sulla spiaggia: circa 100-150 €."
      },
      {
        "nome": "Kayaköy",
        "testo": "Un villaggio greco svuotato con lo scambio di popolazioni del 1923, con circa 500 case di pietra senza tetto lungo il pendio e due chiese. Da qui parte anche un sentiero che scende verso Ölüdeniz.",
        "come": "Dolmuş da Fethiye, circa 8 km. Si gira a piedi tra le rovine, su sentieri in salita.",
        "quando": "Mattina o pomeriggio, con luce bassa.",
        "tempo": "1-1,5 ore",
        "costo": "3 € (2026).",
        "orari": "Tutti i giorni, 8:30-19:30 da aprile a ottobre e 8:30-17:30 da novembre a marzo.",
        "lat": 36.5767,
        "lng": 29.0867,
        "url": "https://www.turkishmuseums.com/museum/detail/2187-mugla-kayakoy-archaeological-site/2187/4"
      },
      {
        "nome": "Isola di Gemile",
        "testo": "Un'isoletta davanti alla costa tra Ölüdeniz e Kayaköy, detta anche isola di San Nicola, con i resti di chiese bizantine e un lungo passaggio coperto che sale fino alla cima. È una tappa classica delle gite in barca da Fethiye e Ölüdeniz.",
        "come": "Solo in barca: gite giornaliere da Fethiye e Ölüdeniz o barche dalla baia di Gemiler.",
        "quando": "Mattina, prima che arrivino le barche delle gite.",
        "tempo": "1 ora sull'isola",
        "costo": "3 € (2026), oltre alla barca.",
        "orari": "Tutti i giorni, 8:30-19:30 da aprile a ottobre e 8:30-17:30 da novembre a marzo.",
        "lat": 36.5534,
        "lng": 29.0694,
        "url": "https://www.turkishmuseums.com/museum/detail/2181-mugla-gemile-island/2181/4"
      },
      {
        "nome": "Tlos",
        "testo": "Una delle città più antiche della Licia, su uno sperone sopra la valle dello Xanthos, con le tombe a facciata scavate nella rupe, l'acropoli con il castello ottomano, lo stadio e il teatro. Dall'alto si vedono le montagne verso Saklıkent.",
        "come": "In auto da Fethiye, circa 40 minuti; si abbina facilmente a Saklıkent.",
        "quando": "Mattina presto o tardo pomeriggio: c'è poca ombra.",
        "tempo": "1,5 ore",
        "costo": "3 € (2026).",
        "orari": "Tutti i giorni, 8:30-19:30 da aprile a ottobre e 8:30-17:30 da novembre a marzo.",
        "lat": 36.5539,
        "lng": 29.4208,
        "url": "https://www.turkishmuseums.com/museum/detail/2194-mugla-tlos-archaeological-site/2194/4"
      },
      {
        "nome": "Saklıkent",
        "testo": "Una gola profonda circa 300 metri e lunga 18 chilometri, dove si cammina nell'acqua fredda tra pareti di roccia. L'acqua arriva dalla neve dei monti ed è gelida anche in agosto; il tratto a piedi si apre solo quando il livello lo permette, poi la gola si stringe e diventa impegnativa.",
        "come": "In auto da Fethiye, circa un'ora. Passerella di legno all'ingresso, poi si guada il torrente.",
        "quando": "Estate, quando fa caldo; in primavera l'acqua può essere troppo alta.",
        "tempo": "2-3 ore",
        "costo": "Circa 5-10 €.",
        "lat": 36.4688,
        "lng": 29.4034,
        "consiglio": "Noleggiare scarpe adatte all'acqua sul posto e lasciare telefono e documenti in una sacca stagna."
      },
      {
        "nome": "Xanthos e Letoon",
        "testo": "Xanthos fu la capitale della Lega licia, con il teatro, le tombe a pilastro e l'obelisco iscritto con il testo licio più lungo conosciuto. A pochi chilometri il Letoon era il santuario federale dedicato a Leto, Apollo e Artemide. Insieme sono patrimonio UNESCO dal 1988.",
        "come": "In auto, sulla strada tra Fethiye e Kaş; Xanthos è vicino al villaggio di Kınık, il Letoon a 10 minuti.",
        "quando": "Mattina, prima del caldo; si abbinano a Patara nella stessa giornata.",
        "tempo": "1 ora ciascuno",
        "costo": "3 € ciascuno (2026).",
        "orari": "Xanthos: Tutti i giorni, 8:30-19:00 da aprile a ottobre (biglietteria fino alle 18:30) e 8:30-17:30 da novembre a marzo (biglietteria fino alle 17:00). Letoon: 8:30-19:30 in estate, 8:30-17:30 in inverno.",
        "lat": 36.3571,
        "lng": 29.3193,
        "url": "https://www.turkishmuseums.com/museum/detail/1975-antalya-xanthos-archeological-site/1975/4"
      },
      {
        "nome": "Patara",
        "testo": "Le rovine dell'antica capitale licia, con il teatro, il bouleuterion restaurato, sala dell'assemblea della Lega, e una via colonnata. Oltre le rovine si apre una spiaggia di sabbia lunga 18 chilometri tra le dune, protetta perché ci nidificano le tartarughe marine.",
        "come": "In auto o in dolmuş da Kaş o Kalkan fino al villaggio di Gelemiş; dalle rovine alla spiaggia si va a piedi o in auto.",
        "quando": "Le rovine al mattino, la spiaggia nel pomeriggio.",
        "tempo": "Mezza giornata",
        "costo": "15 € (2026), rovine e spiaggia.",
        "orari": "Tutti i giorni, 8:30-19:00 da aprile a ottobre (biglietteria fino alle 18:30) e 8:30-17:30 da novembre a marzo (biglietteria fino alle 17:00).",
        "lat": 36.2603,
        "lng": 29.3142,
        "url": "https://www.turkishmuseums.com/museum/detail/1968-antalya-patara/1968/4",
        "consiglio": "La spiaggia chiude al tramonto per le tartarughe, e di notte non si può restare."
      },
      {
        "nome": "Kaputaş",
        "testo": "Una piccola spiaggia di sabbia e ciottoli alla foce di una gola, tra Kalkan e Kaş, con l'acqua di un azzurro molto intenso. È una delle spiagge più fotografate del Paese, e si vede bene anche dall'alto della strada costiera.",
        "come": "Dalla strada si scende con una scalinata; il parcheggio è piccolo e c'è la fermata dei dolmuş tra Kaş e Kalkan.",
        "quando": "Mattina presto o fuori stagione: d'estate si riempie in fretta.",
        "tempo": "1-2 ore",
        "lat": 36.2292,
        "lng": 29.4492,
        "consiglio": "Fermarsi solo se si trova posto al parcheggio: lungo la strada costiera non si sosta."
      },
      {
        "nome": "Kaş e il teatro di Antiphellos",
        "testo": "Il paese di mare più piacevole della costa, con vie in salita, caffè sul porto e taverne. Al margine del paese resta il piccolo teatro ellenistico dell'antica Antiphellos, affacciato sul mare e sull'isola greca di Kastellorizo, e qua e là tombe licie tra le case.",
        "come": "A piedi dal porto: il teatro è a 10 minuti verso ovest.",
        "quando": "Tramonto al teatro, poi la sera sul porto.",
        "tempo": "Mezza giornata",
        "lat": 36.2,
        "lng": 29.6383,
        "consiglio": "Kaş è anche un centro di immersioni, con relitti e grotte vicino alla costa."
      },
      {
        "nome": "Kekova e Simena",
        "testo": "Un tratto di mare protetto con le rovine sommerse di Dolichiste, distrutta da un terremoto nel II secolo, e il villaggio di Kaleköy, l'antica Simena, raggiungibile solo dal mare, sotto un castello. Dall'alto del castello si vedono le isole, la baia e un sarcofago licio che esce dall'acqua.",
        "come": "Gita in barca o in kayak da Üçağız o da Kaş; a Kaleköy si sale al castello a piedi tra le case.",
        "quando": "Mattina, con l'acqua più chiara; le barche rientrano nel pomeriggio.",
        "tempo": "Mezza giornata o giornata intera",
        "costo": "Gita in barca con pranzo circa 25-45 €, tour in kayak circa 40-60 €; castello di Simena 4 € (2026).",
        "orari": "Castello di Simena: Tutti i giorni, 8:30-19:00 da aprile a ottobre (biglietteria fino alle 18:30) e 8:30-17:30 da novembre a marzo (biglietteria fino alle 17:00).",
        "lat": 36.1906,
        "lng": 29.8615,
        "url": "https://www.turkishmuseums.com/museum/detail/1972-antalya-simena-archeological-site/1972/4",
        "consiglio": "Sopra la città sommersa è vietato fare il bagno e immergersi: si guarda dalla barca o dal kayak."
      },
      {
        "nome": "Myra e la chiesa di San Nicola",
        "testo": "A Demre le tombe rupestri di Myra hanno le facciate scolpite a forma di case licie, sopra un grande teatro romano. In paese la chiesa di San Nicola custodiva le reliquie del santo vescovo di Myra prima che nel 1087 fossero portate a Bari.",
        "come": "In auto da Kaş, circa 45 minuti; tra le rovine e la chiesa ci sono 2 km.",
        "quando": "Mattina, prima dei pullman dei tour da Antalya.",
        "tempo": "2 ore per entrambi",
        "costo": "Myra 13 €, chiesa di San Nicola 17 € (2026).",
        "orari": "Tutti i giorni, 8:30-19:00 da aprile a ottobre (biglietteria fino alle 18:30) e 8:30-17:30 da novembre a marzo (biglietteria fino alle 17:00).",
        "lat": 36.2592,
        "lng": 29.9853,
        "url": "https://www.turkishmuseums.com/museum/detail/1966-antalya-myra-archaeological-site/1966/4",
        "consiglio": "Sulla strada per Antalya si abbina bene con Olympos e la Chimera."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Ölüdeniz e la laguna",
          "Pomeriggio: Kayaköy",
          "Sera: tomba di Aminta al tramonto e cena al mercato del pesce di Fethiye"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Fethiye, Ölüdeniz e Kayaköy",
          "Giorno 2: Saklıkent e Tlos al mattino, Xanthos e Patara nel pomeriggio, arrivo a Kaş passando da Kaputaş"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Fethiye e Ölüdeniz",
          "Giorno 2: Kayaköy, Saklıkent e Patara",
          "Giorno 3: Kaş e Kekova"
        ]
      },
      {
        "titolo": "5 giorni, da Fethiye ad Antalya",
        "tappe": [
          "Giorno 1: Fethiye e la tomba di Aminta",
          "Giorno 2: Ölüdeniz, Valle delle Farfalle e Kayaköy",
          "Giorno 3: Tlos, Saklıkent, Xanthos e Patara, sera a Kaş",
          "Giorno 4: Kekova e Simena in barca",
          "Giorno 5: Myra e San Nicola, Olympos e la Chimera, arrivo ad Antalya"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fethiye",
        "perChi": "chi vuole una base con servizi",
        "testo": "Città con porto, mercato del pesce e dolmuş per tutta la costa.",
        "fascia": "40-70 €"
      },
      {
        "nome": "Ölüdeniz",
        "perChi": "chi vuole spiaggia e parapendio",
        "testo": "Turistico, con hotel e locali fino a notte; vicino alla laguna i prezzi salgono.",
        "fascia": "80-140 €"
      },
      {
        "nome": "Kaş",
        "perChi": "chi vuole un paese di mare tranquillo",
        "testo": "Caffè e taverne sul porto, immersioni e gite a Kekova.",
        "fascia": "45-160 €"
      },
      {
        "nome": "Kalkan",
        "perChi": "chi cerca ville e hotel di fascia alta",
        "testo": "Paese di case bianche su una baia tra Kaş e Patara, con molte ville con piscina e ristoranti su terrazze; più caro e meno vivace di Kaş."
      }
    ],
    sapori: [
      {
        "nome": "Pesce al mercato di Fethiye",
        "testo": "Si sceglie al banco e lo cuociono i ristoranti vicini."
      },
      {
        "nome": "Gözleme",
        "testo": "Sfoglia sottile ripiena, nei villaggi."
      },
      {
        "nome": "Meze di Kaş",
        "testo": "Piatti freddi di verdure e formaggi, nelle taverne del porto."
      },
      {
        "nome": "Ayran",
        "testo": "Yogurt liquido salato."
      }
    ],
    attenzioni: [
      "Girare la costa senza auto: i dolmuş ci sono, ma le calette migliori restano fuori.",
      "Agosto senza prenotare: Kaş e Ölüdeniz si riempiono.",
      "Le gite in barca vendute in strada variano molto: guardare cosa include il prezzo.",
      "Parapendio: scegliere un operatore autorizzato e verificare che l'assicurazione di viaggio copra l'attività."
    ],
    gite: [
      {
        "nome": "Kastellorizo (Meis)",
        "distanza": "circa 20 minuti di traghetto da Kaş",
        "come": "Traghetto dal porto di Kaş, con il passaporto o la carta d'identità valida per l'espatrio: è un'isola greca, quindi si esce dalla Turchia.",
        "testo": "Il paese colorato sul porto, la Grotta Azzurra in barca e le taverne sul mare. Si fa in mezza giornata."
      },
      {
        "nome": "Olympos e la Chimera",
        "distanza": "circa 2 ore da Kaş, 1,5 ore da Antalya",
        "come": "In auto lungo la costa verso Antalya; per la Chimera si sale a piedi in circa mezz'ora da Çıralı.",
        "testo": "Le rovine di Olympos nel bosco lungo un torrente, fino alla spiaggia (10 €, 2026), e le fiamme della Chimera, che bruciano naturalmente dal sottosuolo sulla collina sopra Çıralı. Al buio rendono di più: servono scarpe chiuse e torcia."
      },
      {
        "nome": "Le dodici isole di Fethiye",
        "distanza": "giornata in barca dal porto di Fethiye",
        "come": "Caicchi con pranzo a bordo che partono la mattina dal porto, con prenotazione il giorno prima.",
        "testo": "Soste per il bagno tra baie e isole del golfo, comprese spesso l'isola di Gemile e le calette raggiungibili solo dal mare. Guardare cosa include il prezzo: alcune barche sono molto affollate e con musica alta."
      },
      {
        "nome": "Una tappa della Via Licia",
        "distanza": "a piedi da Ölüdeniz o da Kaş",
        "come": "Il sentiero è segnato con strisce bianche e rosse; i tratti più facili sono Ölüdeniz-Faralya e Kaş-Limanağzı.",
        "testo": "Il sentiero di 540 km che collega Fethiye ad Antalya lungo la costa. Un tratto di una giornata dà viste sulla laguna o sulle baie dall'alto; l'ombra è poca e servono scarpe da trekking e molta acqua."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per la costa licia?",
        "risposta": "Quattro o cinque giorni per il tratto da Fethiye ad Antalya con Kekova. Con tre giorni si fanno Fethiye, Ölüdeniz, Patara e Kaş, rinunciando a qualche sito."
      },
      {
        "domanda": "Meglio dormire a Fethiye, a Ölüdeniz o a Kaş?",
        "risposta": "Fethiye o Ölüdeniz per la parte ovest, Kaş per Kekova, Patara e Myra. Due basi evitano di rifare la stessa strada ogni giorno."
      },
      {
        "domanda": "Serve l'auto?",
        "risposta": "Non è indispensabile, perché i dolmuş collegano i paesi principali, ma senza auto restano fuori le calette, Tlos e Saklıkent. Per cinque giorni l'auto a noleggio è la scelta più comoda."
      },
      {
        "domanda": "Si può fare il bagno sopra la città sommersa di Kekova?",
        "risposta": "No: sopra le rovine il bagno e le immersioni sono vietati. Le barche si fermano per il bagno in baie vicine e le rovine si guardano dalla barca o dal kayak."
      },
      {
        "domanda": "Quando è il periodo migliore?",
        "risposta": "Maggio-giugno e settembre-ottobre, con il mare già caldo e meno gente. Luglio e agosto sono molto caldi e Kaş e Ölüdeniz vanno prenotate in anticipo."
      },
      {
        "domanda": "Quanto costano i siti archeologici?",
        "risposta": "Nel 2026 Patara costa 15 €, Myra 13 € e la chiesa di San Nicola 17 €; Tlos, Xanthos, Letoon e Kayaköy 3 € ciascuno. Si paga in biglietteria con carta o online sul sito del ministero."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Panorama di Kaş con il porto, le case bianche e il mare della costa licia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-13-costa-licia.jpg',
  },
  {
    slug: 'antalya',
    paeseSlug: 'turchia',
    ordine: 6,
    nome: 'Antalya',
    tipologia: ['città', 'mare', 'archeologia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La grande città della costa mediterranea, con il centro storico di Kaleiçi intorno al porto romano e un museo archeologico tra i migliori del Paese.',
    percheAndarci: 'Per chiudere il viaggio vicino all\'aeroporto, con Kaleiçi, il museo e le cascate di Düden; nei dintorni ci sono Perge, Aspendos e Termessos.',
    cosaVedere: ['Kaleiçi e la porta di Adriano', 'Il Museo archeologico di Antalya', 'Le cascate di Düden', 'Il teatro di Aspendos e Perge'],
    cosaFare: ['Un bagno a Konyaaltı', 'La sera al porto vecchio'],
    doveDormire: 'Nelle case ottomane restaurate di Kaleiçi.',
    comeArrivare: "L'aeroporto di Antalya (AYT) è a circa 20-30 minuti dal centro, con voli diretti dall'Italia in stagione e da Istanbul tutto l'anno. Dall'aeroporto il tram AntRay arriva in centro, oppure si prende un taxi o il transfer dell'hotel; in alta stagione conviene arrivare in aeroporto 2,5-3 ore prima del volo di rientro. Da Kaş in auto lungo la costa servono circa 3,5 ore, da Pamukkale circa 3,5-4.",
    comeSpostarsi: 'Tram e taxi in città; auto per i siti dei dintorni.',
    periodoMigliore: 'da aprile a novembre',
    costi: "Budget basso circa 50-70 € al giorno a persona (pensione a Kaleiçi, tram, un sito, cibo nei locali); medio 100-150 € (hotel in una casa ottomana, auto o autista per Perge e Aspendos, cene al porto); alto da 250 € in su (resort sul mare o hotel di lusso, guida privata, rafting o barca). Biglietti 2026 per i visitatori stranieri: Aspendos 15 €, Perge 11 €, Side 7 €, Karain 5 €.",
    erroriDaEvitare: ['Restituire l\'auto a noleggio in un\'altra città senza aver controllato la tassa di sola andata'],
    miaEsperienza:
      "È stata l'ultima tappa dei miei sedici giorni in Turchia con amici: ci sono arrivato in auto da Kaş, una notte a Kaleiçi e da qui il volo di rientro.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kaleiçi",
        "testo": "Il centro storico dentro le mura, con le case tradizionali dai tetti rossi, la porta di Adriano, eretta per la visita dell'imperatore nel 130, e il porto antico, oggi marina. Di sera è pieno di ristoranti.",
        "come": "A piedi dal centro moderno; le vie scendono a gradini fino al porto.",
        "quando": "Pomeriggio e sera, quando rinfresca.",
        "tempo": "2 ore",
        "lat": 36.881,
        "lng": 30.7037,
        "consiglio": "In alta stagione prenotare la cena: i ristoranti sul porto si riempiono."
      },
      {
        "nome": "Porta di Adriano",
        "testo": "L'arco di marmo a tre fornici costruito per la visita dell'imperatore Adriano nel 130, ingresso orientale di Kaleiçi. Sotto i fornici si vedono ancora i solchi lasciati dalle ruote dei carri nel lastricato.",
        "come": "Su Atatürk Caddesi, a due passi dalla fermata del tram.",
        "quando": "Sempre visibile; la sera è illuminata.",
        "tempo": "15 minuti",
        "costo": "Libero.",
        "lat": 36.8853,
        "lng": 30.7083
      },
      {
        "nome": "Yivli Minare",
        "testo": "Il minareto scanalato del XIII secolo, in mattoni con inserti di maiolica turchese, simbolo della città. È accanto alla moschea omonima e alla torre dell'orologio, all'ingresso nord di Kaleiçi.",
        "come": "A piedi da piazza Kale Kapısı.",
        "quando": "Fuori dagli orari di preghiera per entrare nella moschea.",
        "tempo": "20 minuti",
        "costo": "Libero.",
        "lat": 36.8864,
        "lng": 30.7044,
        "consiglio": "Nella moschea spalle e ginocchia coperte, e per le donne un foulard."
      },
      {
        "nome": "Torre di Hıdırlık e parco Karaalioğlu",
        "testo": "La torre romana in pietra, del II secolo, all'angolo sud-ovest delle mura, sopra la scogliera. Accanto si apre il parco Karaalioğlu, lungo la costa, con viste sul golfo e sui monti Beydağları.",
        "come": "A piedi dal porto vecchio, in 10 minuti in salita.",
        "quando": "Al tramonto, quando la luce scende dietro i monti.",
        "tempo": "1 ora",
        "costo": "Libero.",
        "lat": 36.8814,
        "lng": 30.7036
      },
      {
        "nome": "Museo archeologico di Antalya",
        "testo": "Era uno dei musei più importanti della Turchia, con le statue romane di Perge e i sarcofagi istoriati. Ha chiuso nel luglio 2025 ed è in ricostruzione: a novembre 2026 non è visitabile.",
        "come": "Chiuso per ricostruzione.",
        "quando": "Controllare sul sito ufficiale la data di riapertura.",
        "tempo": "—",
        "lat": 36.8856,
        "lng": 30.6797,
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "Cascate di Düden superiori",
        "testo": "Il fiume Düden salta in una gola dentro un parco alberato, alla periferia nord della città. Un sentiero passa dietro il salto d'acqua, in una grotta umida.",
        "come": "In taxi o in autobus urbano dal centro, circa 20-30 minuti.",
        "quando": "Mattina presto nei giorni feriali; nel weekend arrivano famiglie e gruppi.",
        "tempo": "1 ora",
        "lat": 36.9638,
        "lng": 30.7269
      },
      {
        "nome": "Cascate di Düden inferiori",
        "testo": "Dove il fiume finisce direttamente in mare cadendo dalla scogliera, alta una quarantina di metri, nella zona di Lara. Si guardano dal parco sulla scogliera o, meglio, dal mare con le barche che partono dal porto vecchio.",
        "come": "In taxi verso Lara, circa 20 minuti; oppure in barca dal porto di Kaleiçi.",
        "quando": "Pomeriggio, con il sole alle spalle.",
        "tempo": "30-45 minuti, o 1-2 ore in barca",
        "lat": 36.851,
        "lng": 30.7835
      },
      {
        "nome": "Spiaggia di Konyaaltı",
        "testo": "La lunga spiaggia di ciottoli a ovest del centro, con i monti alle spalle, un lungomare pedonale e ciclabile e stabilimenti con lettini. L'acqua diventa profonda subito.",
        "come": "Tram o autobus dal centro, circa 15 minuti, o a piedi lungo la costa dal parco Karaalioğlu.",
        "quando": "Da maggio a ottobre; d'estate meglio presto o dopo le 17.",
        "tempo": "Mezza giornata",
        "lat": 36.865,
        "lng": 30.6444,
        "consiglio": "Scarpe da scoglio per entrare in acqua sui ciottoli."
      },
      {
        "nome": "Funivia di Tünektepe",
        "testo": "Dall'estremità ovest di Konyaaltı una funivia sale sulla collina di Tünektepe, con un belvedere e un ristorante sul golfo di Antalya, la città e i monti.",
        "come": "In taxi o in autobus fino alla stazione a valle, in fondo a Konyaaltı.",
        "quando": "Tramonto, con le luci della città.",
        "tempo": "1-1,5 ore",
        "lat": 36.8262,
        "lng": 30.5906
      },
      {
        "nome": "Perge",
        "testo": "Una delle grandi città della Panfilia, vicino ad Antalya: le porte ellenistiche con le due torri rotonde, lo stadio, le grandi Terme Sud e la via principale con il canale d'acqua al centro. Da qui vengono molte delle statue del museo di Antalya.",
        "come": "In auto, in taxi o in tour da Antalya, circa 20 minuti. È sulla strada per Aspendos.",
        "quando": "Mattina presto: il sito è vasto e quasi senza ombra.",
        "tempo": "1,5-2 ore",
        "costo": "11 € (2026).",
        "orari": "Tutti i giorni, 8:00-19:00 in estate (biglietteria fino alle 18:30) e 8:00-17:00 da novembre ad aprile (biglietteria fino alle 16:30).",
        "lat": 36.9604,
        "lng": 30.8537,
        "url": "https://www.turkishmuseums.com/museum/detail/1969-antalya-perge-archaeological-site/1969/4"
      },
      {
        "nome": "Aspendos",
        "testo": "Il teatro, costruito nel 155, è considerato tra i meglio conservati dell'antichità, con la scena ancora in piedi, e ospita ancora un festival estivo di opera e balletto. Sulla collina dietro restano la basilica, l'agorà e un lungo tratto di acquedotto.",
        "come": "In auto con autista o in tour da Antalya, circa 45 minuti.",
        "quando": "Mattina presto, prima dei pullman; d'estate la sera per gli spettacoli.",
        "tempo": "1-1,5 ore",
        "costo": "15 € (2026).",
        "orari": "Tutti i giorni, 8:00-19:00 in estate (biglietteria fino alle 18:30) e 8:00-17:00 da novembre ad aprile (biglietteria fino alle 16:30).",
        "lat": 36.9389,
        "lng": 31.1722,
        "url": "https://www.turkishmuseums.com/museum/detail/1963-antalya-aspendos-archaeological-site/1963/4",
        "consiglio": "Se si ha tempo per un solo sito fuori città, è questo."
      },
      {
        "nome": "Termessos",
        "testo": "Una città arroccata a oltre mille metri nel parco nazionale di Güllük Dağı, che Alessandro Magno rinunciò ad assediare. Il teatro sul bordo del precipizio guarda le montagne; intorno restano mura, cisterne e centinaia di tombe sparse nel bosco.",
        "come": "In auto, circa 45 minuti da Antalya fino al parcheggio, poi 20-30 minuti di salita ripida su sentiero sassoso.",
        "quando": "Mattina, in primavera o in autunno; d'estate fa caldo anche in quota.",
        "tempo": "3 ore",
        "orari": "Tutti i giorni, 8:00-19:00 in estate e 8:00-17:00 da novembre ad aprile (biglietteria fino alle 15:30).",
        "lat": 36.9825,
        "lng": 30.4644,
        "url": "https://www.turkishmuseums.com/museum/detail/1974-antalya-termessos-archeological-site/1974/4",
        "consiglio": "Scarpe da trekking e acqua: in cima non c'è nulla."
      },
      {
        "nome": "Grotta di Karain",
        "testo": "Una grotta abitata fin dal Paleolitico, tra i siti preistorici più importanti della Turchia, a nord-ovest di Antalya. Si sale con una scalinata e un piccolo museo accanto espone i reperti.",
        "come": "In auto, circa 30 minuti dal centro; si abbina a Termessos.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "costo": "5 € (2026).",
        "orari": "Tutti i giorni, 8:00-19:30 in estate e 8:00-17:00 da novembre ad aprile (biglietteria fino alle 16:30).",
        "lat": 37.0778,
        "lng": 30.5708,
        "url": "https://www.turkishmuseums.com/museum/detail/1964-antalya-karain-cave/1964/4"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Perge e Aspendos",
          "Pomeriggio: bagno a Konyaaltı",
          "Sera: Kaleiçi e porto vecchio"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Kaleiçi, porta di Adriano, Yivli Minare, torre di Hıdırlık; tramonto dal parco Karaalioğlu",
          "Giorno 2: Perge e Aspendos al mattino, cascate di Düden inferiori nel pomeriggio, sera al porto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Kaleiçi e cascate di Düden superiori",
          "Giorno 2: Perge, Aspendos e Side",
          "Giorno 3: Termessos e Karain al mattino, Konyaaltı e funivia di Tünektepe al tramonto"
        ]
      }
    ],
    zone: [
      {
        "nome": "Kaleiçi",
        "perChi": "chi vuole la città vecchia",
        "testo": "Hotel in case ottomane, rumore la sera dai locali.",
        "fascia": "60-130 €"
      },
      {
        "nome": "Konyaaltı",
        "perChi": "chi vuole spiaggia",
        "testo": "Zona moderna con spiaggia di ciottoli e montagne sullo sfondo, collegata al centro da tram e autobus."
      },
      {
        "nome": "Lara",
        "perChi": "chi vuole un resort vicino all'aeroporto",
        "testo": "La costa sabbiosa a est, dopo le cascate di Düden inferiori, con grandi hotel e all-inclusive; lontana dal centro storico."
      }
    ],
    sapori: [
      {
        "nome": "Piyaz",
        "testo": "Insalata di fagioli bianchi con uova e tahin, specialità di Antalya."
      },
      {
        "nome": "Şiş köfte",
        "testo": "Polpette alla brace con pane."
      },
      {
        "nome": "Tahin-pekmez",
        "testo": "Colazione dolce con crema di sesamo e mosto."
      },
      {
        "nome": "Frutta fresca",
        "testo": "Arance e melograni dal mercato."
      }
    ],
    attenzioni: [
      "Noleggio auto con restituzione in un'altra città: controllare la tassa di sola andata.",
      "Hotel all-inclusive lontani dal centro: a volte il trasferimento costa quanto la differenza.",
      "In estate fa molto caldo: visite all'alba."
    ],
    gite: [
      {
        "nome": "Side",
        "distanza": "circa 75 km, 1 ora e un quarto",
        "come": "In auto o in autobus da Antalya fino a Manavgat, poi dolmuş.",
        "testo": "Il paese è costruito dentro la città antica: il teatro, il tempio di Apollo sul mare, la via colonnata e il museo nelle terme romane. Sito archeologico 7 € e museo 5 € (2026); il tempio al tramonto è la scena più bella."
      },
      {
        "nome": "Canyon di Köprülü",
        "distanza": "circa 1,5 ore",
        "come": "In auto o con le escursioni di rafting che partono dagli hotel, con pick-up la mattina.",
        "testo": "Un canyon lungo il fiume Köprü in un parco nazionale, con il rafting più facile e frequentato della zona e un ponte romano ancora in uso. Più su ci sono le rovine di Selge."
      },
      {
        "nome": "Phaselis e la funivia del Tahtalı",
        "distanza": "circa 1 ora verso Kemer",
        "come": "In auto lungo la costa sud-ovest.",
        "testo": "Phaselis ha tre porti antichi e una via lastricata tra i pini che arriva alle calette, dove si fa il bagno tra le rovine (10 €, 2026). Poco lontano una funivia sale sul monte Tahtalı, a oltre 2.300 metri."
      },
      {
        "nome": "Cascata di Kurşunlu",
        "distanza": "circa 20 km, 30 minuti",
        "come": "In auto o in taxi verso est.",
        "testo": "Un parco naturale con una cascata in una conca verde e un sentiero tra le pozze. Si abbina a Perge sulla stessa strada."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono ad Antalya?",
        "risposta": "Uno per Kaleiçi e Aspendos, due per aggiungere Perge, le cascate e il mare, tre con Termessos o Side. Molti la usano come ultima tappa prima del volo."
      },
      {
        "domanda": "Il Museo archeologico di Antalya è aperto?",
        "risposta": "No: è chiuso dal luglio 2025 per la ricostruzione e a novembre 2026 non è visitabile. La riapertura va controllata sul sito ufficiale del ministero."
      },
      {
        "domanda": "Come si va ad Aspendos e Perge senza auto?",
        "risposta": "Con un tour di mezza giornata o un taxi con autista per entrambi, che si fanno nella stessa mattina perché Perge è sulla strada per Aspendos."
      },
      {
        "domanda": "Dove conviene dormire?",
        "risposta": "A Kaleiçi per stare a piedi tra porto e ristoranti, a Konyaaltı per il mare in città, a Lara per un resort vicino all'aeroporto."
      },
      {
        "domanda": "Quanto costano i siti intorno ad Antalya?",
        "risposta": "Per i visitatori stranieri nel 2026 Aspendos costa 15 €, Perge 11 €, Side 7 € e la grotta di Karain 5 €. I biglietti si pagano in biglietteria con carta o online."
      },
      {
        "domanda": "Quando andare?",
        "risposta": "Da aprile a giugno e da settembre a novembre. Luglio e agosto sono molto caldi: i siti si visitano all'apertura e il pomeriggio si passa al mare."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Vista di Kaleiçi, il centro storico di Antalya affacciato sul mare',
    immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg',
  },
]
