import type { Destinazione } from '@/lib/types'

// Nessun nome di hotel, ristorante o operatore è stato inventato. Il confronto
// tra i programmi stopover delle compagnie del Golfo sta nella scheda Dubai:
// condizioni e prezzi cambiano spesso e vanno riverificati sui siti ufficiali
// delle compagnie prima di prenotare.

export const destinazioniEmiratiArabiUniti: Destinazione[] = [
  {
    slug: 'dubai',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 1,
    nome: 'Dubai',
    tipologia: ['città', 'architettura', 'stopover'],
    giorniConsigliati: '24 ore per lo stopover essenziale, 48 per vederla bene',
    visitataPersonalmente: true,
    introduzione:
      'Nel 1960 era un porto di pescatori di perle sul creek; oggi ha l\'edificio più alto del mondo. È anche lo scalo più trafficato del pianeta per i passeggeri internazionali: moltissimi ci passano senza scendere, mentre scendere, con i programmi delle compagnie, spesso costa poco o niente.',
    percheAndarci:
      'È lo stopover più facile del mondo: visto gratuito all\'arrivo, metropolitana dall\'aeroporto, e in due giorni si vedono la Dubai delle fotografie e quella che quasi nessuno cerca, con il creek, le barche di legno, i souq e i quartieri di Deira dove vive la maggior parte dei residenti.',
    cosaVedere: [
      'Il Burj Khalifa, 828 metri, con le piattaforme panoramiche ai piani 124-125 e 148',
      'Il Dubai Creek, con le abra (le barche di legno che traghettano per un dirham) e i souq dell\'oro e delle spezie a Deira',
      'Il quartiere storico di Al Fahidi, con le torri del vento e le case di corallo e gesso',
      'La Dubai Fountain e il Dubai Mall, che è una città a sé',
      'La Moschea di Jumeirah, l\'unica aperta ai non musulmani, con visite guidate',
      'Il Museo del Futuro, con la calligrafia araba incisa sulla facciata a forma di toro',
      'Alserkal Avenue, il quartiere delle gallerie d\'arte ricavato dai magazzini industriali',
    ],
    cosaFare: [
      'Attraversare il creek in abra e girare a caso nei souq di Deira (c\'è la scheda esperienza dedicata)',
      'Salire al Burj Khalifa al tramonto, con il biglietto comprato online',
      'Safari nel deserto con cena e notte sotto le stelle (c\'è la scheda esperienza dedicata)',
      'Mangiare nei quartieri indiani e pakistani di Bur Dubai e Karama, dove si mangia meglio e si spende meno',
    ],
    doveDormire:
      'Deira e Bur Dubai per i prezzi bassi, la metropolitana e la città vera; Downtown per stare sotto il Burj Khalifa; Jumeirah e Marina per la spiaggia. Con uno stopover Emirates o Etihad l\'hotel lo assegna il programma e la scelta non si pone.',
    doveMangiare:
      'Fuori dall\'India, Dubai è uno dei posti dove si mangia meglio la cucina del subcontinente, e costa pochissimo: a Karama, Bur Dubai e Deira si cena con meno di dieci euro in ristoranti pieni di residenti. Da provare il biryani, i curry pakistani, il pane afgano cotto nel tandoor e, per la cucina locale, il machboos e lo shawarma dei banchi di strada. La vera cucina emiratina è rara: il paese è abitato per la grande maggioranza da stranieri, e lo si vede prima di tutto nei menu.',
    comeArrivare:
      "In aereo su Dubai International (DXB). Dai terminal 1 e 3 la metropolitana, linea rossa, porta a Downtown in 20-30 minuti con circa 5-7,50 AED sulla tessera Nol comprata in stazione, dalle 5 circa a mezzanotte; il terminal 2 non è servito. Il taxi RTA a tassametro costa circa 60-90 AED, compresa la partenza di 25 AED dall'aeroporto; funzionano anche Uber e Careem. Al Maktoum (DWC) è molto più lontano. Da Abu Dhabi ci sono autobus frequenti, circa 2 ore.",
    comeSpostarsi:
      'Metropolitana con la Nol Card sull\'asse principale, taxi e Careem per il resto, abra sul creek a un dirham a tratta. Si può camminare solo d\'inverno e solo in certe zone: la città è fatta per l\'auto.',
    periodoMigliore:
      'da novembre a marzo. Da giugno a settembre si superano i 45 gradi con molta umidità e si vive al chiuso: uno stopover estivo si riduce a centri commerciali e hotel.',
    costi:
      "Budget giornaliero indicativo per persona, hotel compreso: basso 70-100 € (Deira, metro, cucina del subcontinente), medio 150-250 €, alto oltre 400 €. Burj Khalifa da circa 170 AED per i piani 124-125, molto di più per il 148 e per le fasce al tramonto; abra 1 AED; metropolitana pochi dirham; safari nel deserto 200-400 AED secondo la formula. Con Dubai Connect o lo stopover Etihad l'hotel esce dal conto.",
    erroriDaEvitare: [
      'Comprare il biglietto del Burj Khalifa sul posto: costa di più, e le fasce al tramonto finiscono con giorni di anticipo',
      'Fermarsi ai centri commerciali e alla Marina: è la Dubai che tutti si aspettano, e la meno interessante. Il creek, i souq e Al Fahidi sono a venti minuti di metropolitana',
      'Programmare uno stopover tra giugno e settembre, quando stare all\'aperto è impossibile',
      'Dimenticare che l\'alcol si beve solo nei locali autorizzati e che l\'ubriachezza in pubblico è un reato',
      'Contare su WhatsApp per le chiamate: sulle reti locali le VoIP sono limitate, i messaggi invece passano',
    ],
    confronti: [
      {
        titolo: 'I programmi stopover delle compagnie del Golfo: come funzionano nel dettaglio',
        introduzione:
          'Tutte le grandi compagnie del Golfo hanno un programma per convincerti a fermarti nel loro hub invece di cambiare aereo in due ore, ma funzionano in modi molto diversi. La differenza che conta è una: alcuni sono una compensazione per uno scalo lungo che subisci, altri sono prodotti commerciali che scegli. Confonderli è il modo più rapido per aspettarsi un hotel gratis e non averlo.',
        opzioni: [
          {
            nome: 'Emirates — Dubai Connect',
            sintesi: 'Hotel, pasti, trasferimenti e visto di transito gratuiti quando lo scalo a Dubai è lungo e inevitabile. È una compensazione, non un pacchetto turistico.',
            costo: 'gratuito, ma non si sceglie: viene assegnato',
            durata: 'scali più o meno tra le 8 e le 26 ore, con soglie diverse secondo la classe di viaggio',
            pro: [
              'Del tutto gratuito: camera, pasti, transfer e visto di transito compresi',
              'Non allunga il viaggio: vale per uno scalo che si avrebbe comunque',
              'Copre anche il visto, quindi non serve nessuna pratica prima',
            ],
            contro: [
              'Vale solo se lo scalo a Dubai è **il più breve disponibile** su quella rotta: chi sceglie di proposito un volo successivo lo perde',
              'Serve un biglietto unico emesso su documento Emirates, con voli in arrivo e in partenza Emirates (o Qantas in codeshare)',
              'L\'hotel viene assegnato e può essere lontano dal centro: come base per visitare vale poco',
              'Tra transfer e procedure le ore libere vere si riducono parecchio',
            ],
            perChi: 'Chi ha già uno scalo lungo e obbligato a Dubai e preferisce un letto all\'aeroporto. Non è il programma su cui costruire una visita.',
          },
          {
            nome: 'Emirates — Dubai Stopover (pacchetto)',
            sintesi: 'Il prodotto commerciale a parte: hotel scontati e visto agevolato per chi decide di fermarsi uno o più giorni.',
            costo: 'a pagamento, con tariffe scontate rispetto alla prenotazione libera',
            durata: 'una o più notti, a scelta',
            pro: ['Hotel e durata si scelgono', 'Prezzi più bassi che prenotando a parte', 'Si può unire al biglietto in un\'unica prenotazione'],
            contro: ['Non è gratuito, e spesso lo si confonde con Dubai Connect', 'Va confrontato con il prezzo di una prenotazione indipendente, perché non sempre è il più basso'],
            perChi: 'Chi sceglie di fermarsi a Dubai e vuole la comodità di un\'unica prenotazione.',
          },
          {
            nome: 'Etihad — Abu Dhabi Stopover',
            sintesi: 'Una o due notti di hotel gratis ad Abu Dhabi per chi inserisce di proposito una sosta nel biglietto di andata e ritorno.',
            costo: 'hotel gratuito per una o due notti; voli, transfer e pasti restano a carico',
            durata: 'sosta di almeno 24 ore, 1 o 2 notti',
            pro: [
              'È gratuito e, a differenza di Dubai Connect, **si sceglie**: si aggiunge mentre si prenota sul sito Etihad',
              'Abu Dhabi in due giorni si vede bene: Grande Moschea, Louvre e il deserto di Liwa a portata di mano',
              'Si può abbinare a Dubai, a due ore di autobus',
            ],
            contro: [
              'Richiede una prenotazione di andata e ritorno con la sosta dichiarata: non vale per uno scalo qualsiasi',
              'L\'hotel va prenotato qualche giorno prima del volo, non all\'ultimo',
              'Serve il visto per gli Emirati o il diritto a riceverlo all\'arrivo; per gli italiani non è un problema, perché in aeroporto è gratuito',
            ],
            perChi: 'Chi vola con Etihad e vuole aggiungere due giorni veri di visita senza pagare l\'hotel. È il programma con il miglior equilibrio tra gratuità e libertà.',
          },
          {
            nome: 'Qatar Airways — Stopover a Doha',
            sintesi: 'Hotel a quattro e cinque stelle a prezzi simbolici per chi si ferma a Doha tra un volo e l\'altro, da prenotare sul portale Discover Qatar.',
            costo: 'quattro stelle da circa 14 dollari a persona a notte, cinque stelle da 20-30: una frazione dei prezzi normali di Doha',
            durata: 'da 1 a 4 notti, con scalo tra 12 e 96 ore',
            pro: [
              'Il miglior rapporto qualità-prezzo di tutti i programmi del Golfo',
              'Vale per biglietti Qatar Airways, codeshare e oneworld, quindi per moltissimi passeggeri',
              'Hotel e numero di notti si scelgono, e Doha in due giorni si visita benissimo',
              'Per gli italiani il visto all\'arrivo è gratuito: nessuna pratica prima',
            ],
            contro: [
              'Non è gratuito, anche se ci si avvicina',
              'Si prenota su un portale separato con il codice di prenotazione del volo: un passaggio in più che molti non conoscono',
              'Nei periodi di punta le strutture migliori finiscono',
            ],
            perChi: 'Chiunque voli con Qatar Airways e non abbia fretta. A queste cifre non fermarsi è quasi una scelta contro i propri interessi.',
          },
          {
            nome: 'Saudia e flynas — visto stopover per l\'Arabia Saudita',
            sintesi: 'Non un hotel ma un visto: chi vola con Saudia o flynas ottiene un visto stopover gratuito, valido anche per turismo, con cui restare nel Regno fino a 4 giorni.',
            costo: 'il visto è gratuito, salvo le spese amministrative e l\'assicurazione sanitaria obbligatoria',
            durata: 'visto valido tre mesi, soggiorno fino a 4 giorni',
            pro: [
              'Fa risparmiare il visto turistico ordinario, che costa intorno ai 130 €',
              'Si chiede online dopo aver comprato il biglietto e arriva per email in poco tempo',
              'Quattro giorni bastano per Jeddah più AlUla, il cuore del paese',
              'Permette anche l\'Umrah, per chi è musulmano',
            ],
            contro: [
              'Non comprende l\'hotel: è un\'agevolazione sull\'ingresso, non un pacchetto',
              'Lega alla compagnia: vale solo volando Saudia o flynas',
              'Quattro giorni sono pochi per un paese così grande, dove per spostarsi servono voli interni',
            ],
            perChi: 'Chi vuole vedere l\'Arabia Saudita senza impegnarsi in un viaggio lungo, o provarla prima di tornarci con il visto annuale.',
          },
        ],
        raccomandazione:
          'Per orientarsi basta una regola: **Dubai Connect è una compensazione, tutti gli altri sono scelte**. Se lo scalo lungo a Dubai ce l\'hai comunque, Dubai Connect è denaro trovato e non va lasciato lì. Se invece stai decidendo dove fermarti, il migliore è Qatar Airways (a quattordici dollari a notte in un quattro stelle non c\'è partita), seguito da Etihad, che è gratuito ma richiede una prenotazione di andata e ritorno. Il visto stopover saudita è un caso a parte: non regala un letto, regala l\'ingresso in un paese il cui visto altrimenti costa centotrenta euro, ed è il modo più economico per vedere Hegra. In ogni caso le condizioni vanno ricontrollate sui siti ufficiali prima di prenotare, perché questi programmi cambiano spesso e senza preavviso.',
      },
    ],
    miaEsperienza:
      'Dubai è la città più facile del mondo da liquidare, e dopo due giorni questo giudizio mi è sembrato pigro. Lo skyline e i centri commerciali sono come te li immagini. Il Burj Khalifa impressiona per i numeri e un po\' meno dal vivo: una fila, un ascensore, una vetrata. Ma a venti minuti di metropolitana c\'è un\'altra città che nessuno cerca. Il creek è ancora un porto commerciale vero, con le barche di legno cariche fino all\'orlo di elettrodomestici diretti in Iran e in India; l\'abra che lo attraversa costa un dirham, ti siedi in mezzo a gente che va al lavoro e sbarchi dall\'altra parte nel souq delle spezie. Al Fahidi, con le torri del vento e i vicoli di gesso, fa vedere com\'era questo posto quando le perle erano l\'unica economia. E poi c\'è il dato che spiega la città meglio di qualsiasi grattacielo: gli emiratini sono poco più del dieci per cento di chi ci vive, e la sera nei ristoranti pakistani di Karama si mangia benissimo con otto euro, in mezzo a operai, autisti e famiglie. Quella, più del Burj, è Dubai.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Dubai Creek, abra e souq di Deira",
        "testo": "Il vecchio porto commerciale, ancora attivo, con barche di legno cariche di merci. L'abra, il traghetto di legno, attraversa il creek per 1 dirham, pagato al barcaiolo, e sbarca vicino al souq delle spezie e a quello dell'oro.",
        "come": "Metro, linea verde, fino ad Al Ras o Al Ghubaiba, poi a piedi agli imbarchi degli abra.",
        "quando": "Mattina o tardo pomeriggio, meno caldo.",
        "tempo": "2-3 ore",
        "costo": "1 AED a traversata, circa 0,25 €, pagato al barcaiolo (2026)",
        "lat": 25.26749,
        "lng": 55.29708,
        "consiglio": "Sedersi sull'abra in mezzo a chi va al lavoro: è il pezzo di Dubai che nessuno cerca."
      },
      {
        "nome": "Al Fahidi",
        "testo": "Il quartiere storico costruito dalla fine dell'Ottocento da mercanti arrivati dalla Persia, con le torri del vento e i vicoli stretti, oggi restaurato. Si capisce com'era Dubai prima del petrolio. Ci sono piccoli musei, come quello del caffè, e caffè nei cortili.",
        "come": "Metro fino a Sharaf DG o Al Ghubaiba, poi a piedi.",
        "quando": "Mattina, prima del caldo.",
        "tempo": "1-2 ore",
        "costo": "Ingresso al quartiere libero",
        "lat": 25.26423,
        "lng": 55.30017,
        "consiglio": "Si abbina bene al giro del creek nella stessa mattina."
      },
      {
        "nome": "Burj Khalifa",
        "testo": "Il grattacielo più alto del mondo, 828 metri. Le terrazze At the Top ai piani 124-125 e At the Top Sky al 148 danno la vista sulla città e sul deserto.",
        "come": "Metro, linea rossa, fino a Burj Khalifa/Dubai Mall. Biglietto con fascia oraria, meglio online.",
        "quando": "Tramonto, la fascia più richiesta: prenotarla con anticipo.",
        "tempo": "1-1,5 ore",
        "costo": "Piani 124-125 da circa 170 AED, circa 40 €; il piano 148 e le fasce del tramonto costano di più (2026)",
        "lat": 25.19703,
        "lng": 55.27413,
        "url": "https://www.burjkhalifa.ae/",
        "consiglio": "Prenotare online prima di partire: le fasce al tramonto finiscono per prime."
      },
      {
        "nome": "Dubai Mall e Dubai Fountain",
        "testo": "Il centro commerciale ai piedi del Burj Khalifa è una città climatizzata, con un acquario, una pista di pattinaggio e centinaia di negozi. Sul lago artificiale davanti, la sera, la fontana danza con getti alti come un palazzo sulla musica. È la Dubai delle fotografie, e va vista una volta.",
        "come": "Metro, linea rossa, fino a Burj Khalifa/Dubai Mall, poi la passerella coperta.",
        "quando": "Sera, quando gli spettacoli della fontana si susseguono.",
        "tempo": "1,5-2 ore",
        "costo": "Ingresso e spettacolo della fontana gratuiti",
        "lat": 25.19512,
        "lng": 55.27517,
        "consiglio": "Si abbina al Burj Khalifa al tramonto: scesi dalla torre, si guarda la fontana dal lungolago."
      },
      {
        "nome": "Al Shindagha Museum",
        "testo": "Il museo storico di Dubai, distribuito in una serie di case tradizionali restaurate alla foce del creek, dove viveva la famiglia regnante. Racconta come un villaggio di pescatori di perle sia diventato un porto e poi una metropoli, e ha una sezione dedicata ai profumi e all'incenso.",
        "come": "Metro, linea verde, fino ad Al Ghubaiba, poi a piedi lungo il creek.",
        "quando": "Ore calde: è al chiuso e si collega bene ad Al Fahidi.",
        "tempo": "1,5-2 ore",
        "costo": "50 AED, circa 12 € (2024)",
        "lat": 25.26643,
        "lng": 55.28945,
        "url": "https://dubaiculture.gov.ae/"
      },
      {
        "nome": "Moschea di Jumeirah",
        "testo": "Una delle poche moschee di Dubai aperte ai non musulmani, in pietra bianca e in stile fatimide. Le visite le organizza lo Sheikh Mohammed Centre for Cultural Understanding, con caffè arabo e domande libere sull'islam e sulla vita negli Emirati.",
        "come": "Taxi o Careem fino a Jumeirah Road; ci si registra al majlis di fronte alla moschea. Abiti coprenti, foulard per le donne.",
        "quando": "Mattina, con la visita guidata prenotata sul sito del centro.",
        "tempo": "1-1,5 ore",
        "lat": 25.23406,
        "lng": 55.26548,
        "url": "https://www.cultures.ae/",
        "consiglio": "È il posto giusto per fare le domande che altrove sembrerebbero indiscrete."
      },
      {
        "nome": "Dubai Frame",
        "testo": "Una cornice alta circa 150 metri nel parco di Zabeel, con in cima un ponte dal pavimento in parte di vetro: a nord si guarda la Dubai vecchia di Deira e Karama, a sud i grattacieli della Sheikh Zayed Road. Una sezione racconta la storia della città.",
        "come": "Taxi fino all'ingresso del parco di Zabeel.",
        "quando": "Tardo pomeriggio, per vedere la città con la luce del giorno e poi accesa.",
        "tempo": "1 ora",
        "costo": "50 AED, circa 12 €; bambini 3-12 anni 20 AED (2026)",
        "orari": "Tutti i giorni 9-21; orari ridotti durante il Ramadan e nei festivi (2026).",
        "lat": 25.23546,
        "lng": 55.30037,
        "url": "https://www.dubaiframe.ae/",
        "consiglio": "La vista su Deira, che dal Burj non si vede bene, è il motivo per salire."
      },
      {
        "nome": "Museo del Futuro",
        "testo": "L'edificio ad anello sulla Sheikh Zayed Road, rivestito di 1.024 pannelli d'acciaio che formano una calligrafia araba. Dentro, cinque piani di mostre presentate come un viaggio nel 2071: una stazione spaziale, un piano sulla natura, uno sul benessere. Vale soprattutto per l'architettura, che si fotografa da fuori anche senza entrare.",
        "come": "Metro, linea rossa, fino a Emirates Towers.",
        "quando": "A novembre 2026 il museo è chiuso temporaneamente per un nuovo allestimento: controllare il sito ufficiale prima di andare. La sera la scritta illuminata rende di più nelle foto.",
        "tempo": "1,5-2 ore",
        "orari": "Chiuso temporaneamente a novembre 2026 per un nuovo allestimento.",
        "lat": 25.21915,
        "lng": 55.28187,
        "url": "https://museumofthefuture.ae/",
        "consiglio": "Se è ancora chiuso, vale comunque la sosta fuori per l'edificio."
      },
      {
        "nome": "Alserkal Avenue",
        "testo": "Il quartiere delle gallerie d'arte ricavato dai magazzini industriali di Al Quoz, con mostre contemporanee, caffè e negozi di design. È l'opposto dell'immagine che si ha di Dubai, e mostra la scena artistica del Golfo e del Medio Oriente.",
        "come": "In taxi: la metropolitana resta lontana.",
        "quando": "Mattina o primo pomeriggio; non tutte le gallerie aprono ogni giorno, conviene controllare sul sito.",
        "tempo": "2 ore",
        "costo": "Ingresso libero",
        "lat": 25.14187,
        "lng": 55.22558,
        "url": "https://alserkal.online/"
      },
      {
        "nome": "Etihad Museum",
        "testo": "Il museo costruito accanto alla Union House, dove il 2 dicembre 1971 i governanti firmarono la nascita degli Emirati Arabi Uniti. L'edificio ha la forma di un manoscritto aperto e racconta, con documenti e filmati, come sette emirati diventarono uno Stato.",
        "come": "Taxi lungo Jumeirah Road; si abbina alla Moschea di Jumeirah, a pochi minuti.",
        "quando": "Ore calde.",
        "tempo": "1,5 ore",
        "costo": "25 AED, circa 6 € (2024)",
        "lat": 25.23921,
        "lng": 55.26933,
        "url": "https://dubaiculture.gov.ae/"
      },
      {
        "nome": "Kite Beach e Burj Al Arab",
        "testo": "Una spiaggia pubblica lunga e attrezzata a Umm Suqeim, con pista per correre, chioschi e kitesurf, e il Burj Al Arab, l'hotel a forma di vela, sullo sfondo. È il bagno più semplice a Dubai senza pagare un beach club.",
        "come": "Taxi lungo Jumeirah Road.",
        "quando": "Tardo pomeriggio, con il sole che tramonta dietro il Burj Al Arab; il bagno da ottobre ad aprile.",
        "tempo": "2 ore",
        "costo": "Spiaggia libera",
        "lat": 25.163,
        "lng": 55.20672
      },
      {
        "nome": "Palm Jumeirah e The View",
        "testo": "L'isola artificiale a forma di palma, con ville sui rami e l'Atlantis in fondo. La forma si capisce solo dall'alto: la terrazza The View, al 52° piano di The Palm Tower, la mostra intera.",
        "come": "Taxi, oppure la monorotaia della Palm dalla stazione Palm Gateway.",
        "quando": "Pomeriggio, con la luce radente.",
        "tempo": "1,5 ore",
        "costo": "The View: biglietto standard 80-115 AED, circa 19-27 €, secondo la fascia (2026)",
        "orari": "The View: tutti i giorni 9-19 (2026).",
        "lat": 25.11806,
        "lng": 55.13333,
        "url": "https://www.theviewpalm.ae/"
      },
      {
        "nome": "Dubai Marina e JBR",
        "testo": "Un canale artificiale chiuso da grattacieli, con una passeggiata pedonale di ristoranti e barche, che sbocca sulla spiaggia di Jumeirah Beach Residence. È la Dubai moderna e turistica, piacevole la sera.",
        "come": "Metro, linea rossa, fino alle fermate della Marina, oppure il tram di Dubai che la percorre.",
        "quando": "Sera, quando si accendono le torri.",
        "tempo": "2 ore",
        "costo": "Passeggiata e spiaggia gratuite",
        "lat": 25.08135,
        "lng": 55.14408
      },
      {
        "nome": "Safari nel deserto",
        "testo": "Una serata in 4x4 sulle dune, con tramonto, cena in campo tendato e notte sotto le stelle. È una delle esperienze «deserto» più vendute intorno a Dubai.",
        "come": "Operatori con prelievo in hotel. Le dune dei safari serali sono a breve distanza dalla città.",
        "quando": "Pomeriggio e sera, nei mesi freschi.",
        "tempo": "5-6 ore",
        "costo": "200-400 AED, circa 47-95 €, secondo la formula (2026)",
        "consiglio": "Per il deserto vero servono Liwa e il Rub' al-Khali."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Al Fahidi e Al Shindagha Museum, poi l'abra sul creek",
          "Mezzogiorno: souq delle spezie e dell'oro a Deira, pranzo a Bur Dubai o Karama",
          "Pomeriggio: Dubai Frame per la vista su Deira",
          "Tramonto: Burj Khalifa, poi la fontana davanti al Dubai Mall"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno",
          "Giorno 2, mattina: Moschea di Jumeirah con la visita guidata ed Etihad Museum",
          "Giorno 2, mezzogiorno: Alserkal Avenue",
          "Giorno 2, pomeriggio e sera: safari nel deserto, oppure Kite Beach al tramonto e cena alla Marina"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2: come sopra",
          "Giorno 3: gita ad Abu Dhabi per la Grande Moschea e il Louvre, oppure a Sharjah per i musei e il vecchio centro",
          "Sera: Palm Jumeirah e The View, poi Dubai Marina"
        ]
      }
    ],
    zone: [
      {
        "nome": "Deira / Bur Dubai",
        "perChi": "chi vuole la Dubai vecchia e spendere meno",
        "testo": "Hotel di fascia media vicino a creek e souq. Rumorosi, ma con ristoranti economici.",
        "fascia": "50-140 €"
      },
      {
        "nome": "Downtown",
        "perChi": "chi vuole stare sotto il Burj Khalifa",
        "testo": "Hotel di lusso e centri commerciali. Caro e anonimo.",
        "fascia": "180-450 €"
      },
      {
        "nome": "Marina / JBR",
        "perChi": "chi vuole spiaggia e grattacieli",
        "testo": "Moderno e turistico, lontano dalla Dubai storica.",
        "fascia": "130-350 €"
      },
      {
        "nome": "Jumeirah / Umm Suqeim",
        "perChi": "chi vuole il mare senza i grattacieli",
        "testo": "Ville basse, spiagge pubbliche e resort di lusso intorno al Burj Al Arab. Serve il taxi per tutto.",
        "fascia": "150-500 €"
      }
    ],
    sapori: [
      {
        "nome": "Biryani e curry pakistani",
        "testo": "A Karama, Bur Dubai e Deira si cena spendendo poco in locali pieni di residenti."
      },
      {
        "nome": "Machboos",
        "testo": "Riso speziato con carne o pesce, cucina emiratina."
      },
      {
        "nome": "Shawarma",
        "testo": "Dai banchi di strada, tutto il giorno."
      },
      {
        "nome": "Pane afgano",
        "testo": "Cotto nel tandoor, caldo."
      }
    ],
    attenzioni: [
      "Lasciare il Burj Khalifa all'ultimo: le fasce al tramonto finiscono con giorni di anticipo.",
      "Fermarsi ai centri commerciali e alla Marina: la parte più interessante sono creek, souq e Al Fahidi, raggiungibili in metro.",
      "Stopover in estate: da giugno a settembre fa caldissimo e si vive al chiuso.",
      "Regole su abbigliamento, alcol e comportamento in pubblico: controllare i canali ufficiali.",
      "Tensioni nella regione: i governi europei segnalano possibili cancellazioni di voli e chiusure dello spazio aereo con poco preavviso (gov.uk, ottobre 2026). Controllare viaggiaresicuri.it prima di partire."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Abu Dhabi",
        "distanza": "circa 2 ore in autobus, 140 km",
        "come": "Autobus frequenti da Dubai, oppure taxi o auto con autista per la giornata.",
        "testo": "La Grande Moschea Sheikh Zayed nel tardo pomeriggio e il Louvre Abu Dhabi bastano a giustificare la giornata. Meglio ancora dormirci una notte (c'è la scheda dedicata)."
      },
      {
        "nome": "Sharjah",
        "distanza": "30-60 minuti in taxi secondo il traffico",
        "come": "Taxi o Careem da Deira; nelle ore di punta il traffico tra le due città è pesante.",
        "testo": "L'emirato vicino, più conservatore e meno turistico, con il vecchio centro restaurato, lo Sharjah Art Museum e i musei della civiltà islamica. Niente alcol e abbigliamento coprente."
      },
      {
        "nome": "Liwa e Al Ain",
        "distanza": "Al Ain circa 1h45 in auto, Liwa circa 4 ore",
        "come": "Auto a noleggio o autista; per le dune serve un 4x4 con guida.",
        "testo": "L'oasi UNESCO di Al Ain e il bordo del Rub' al-Khali a Liwa: il deserto vero, invece del safari serale. Liwa chiede una notte (c'è la scheda dedicata)."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Dubai?",
        "risposta": "Con 24 ore si vedono creek, souq, Al Fahidi e il Burj Khalifa al tramonto. Con 48 si aggiungono la Moschea di Jumeirah, Alserkal e il deserto; il terzo giorno conviene andare ad Abu Dhabi."
      },
      {
        "domanda": "Conviene uscire dall'aeroporto durante uno scalo a Dubai?",
        "risposta": "Sopra le dodici ore sì: la metropolitana porta in centro in venti minuti e per gli italiani il visto all'arrivo è gratuito. Sotto le dieci ore, tra controlli e rientro con tre ore di anticipo, resta troppo poco."
      },
      {
        "domanda": "Bisogna prenotare il Burj Khalifa?",
        "risposta": "Sì, online e con qualche giorno di anticipo: il biglietto è a fascia oraria e quelle del tramonto, le più care, finiscono per prime. Sul posto costa di più."
      },
      {
        "domanda": "Dove dormire a Dubai per la prima volta?",
        "risposta": "Deira o Bur Dubai per spendere poco e avere la metropolitana e la città vecchia sotto casa; Downtown per stare sotto il Burj Khalifa; Marina o Jumeirah per il mare."
      },
      {
        "domanda": "Quando è meglio andare a Dubai?",
        "risposta": "Da novembre a marzo. Da giugno a settembre si superano i 45 gradi con molta umidità e si vive al chiuso."
      },
      {
        "domanda": "Dubai o Abu Dhabi come base?",
        "risposta": "Dubai ha la metropolitana e più cose da fare la sera; Abu Dhabi è più tranquilla e con lo stopover Etihad l'hotel è gratis. Sono a due ore di autobus: conviene dormire una notte in ciascuna invece di fare la spola."
      }
    ],
    esperienzeSlugs: ['creek-souq-dubai', 'deserto-emirati'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: 'Lo skyline di Dubai con il Burj Khalifa al tramonto, visto da lontano oltre l\'acqua',
    immagine: '/images/emirati-arabi-uniti/dubai.jpg',
  },
  {
    slug: 'abu-dhabi',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 2,
    nome: 'Abu Dhabi',
    tipologia: ['città', 'architettura', 'musei'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale degli Emirati è più bassa, più verde e molto meno frenetica di Dubai. Due edifici bastano a giustificare la deviazione: la Grande Moschea Sheikh Zayed, con le colonne intarsiate di madreperla e il tappeto annodato a mano più grande del mondo, e il Louvre di Jean Nouvel, sotto una cupola forata che filtra la luce come un palmeto.',
    percheAndarci:
      'È la meta dello stopover gratuito di Etihad, e in due giorni mostra degli Emirati una versione più misurata e più interessante di Dubai. In più, il deserto di Liwa è a un paio d\'ore.',
    cosaVedere: [
      'La Grande Moschea Sheikh Zayed, aperta ai non musulmani con regole di abbigliamento precise',
      'Il Louvre Abu Dhabi, sull\'isola di Saadiyat, con la cupola di 7.850 stelle metalliche sovrapposte',
      'Qasr Al Watan, il palazzo presidenziale aperto al pubblico, e Qasr Al Hosn, il forte più antico della città',
      'La Corniche e il quartiere di Al Mina, con il mercato del pesce',
      'Il Museo Zayed National e il distretto culturale di Saadiyat, che continua a crescere',
      'Yas Island, con il circuito di Formula 1 e i parchi a tema',
    ],
    cosaFare: [
      'Visitare la Grande Moschea nel tardo pomeriggio, quando il bianco vira al rosa e poi al blu (c\'è la scheda esperienza dedicata)',
      'Il Louvre Abu Dhabi, meglio di sera, quando la luce sotto la cupola cambia',
      'Un\'escursione alle dune di Liwa, le più alte del paese',
      'Il mercato del pesce di Al Mina, dove si compra al banco e si fa cucinare accanto',
    ],
    doveDormire:
      'La Corniche e il centro sono comodi e ben collegati; Saadiyat è la zona dei musei e delle spiagge; Yas quella dei parchi e del circuito. Con lo stopover Etihad l\'hotel è compreso e si sceglie tra le strutture convenzionate.',
    doveMangiare:
      'Come a Dubai, la cucina migliore e più economica è quella del subcontinente indiano, nei quartieri intorno al centro. Per il pesce si va al mercato di Al Mina: lo si sceglie al banco e lo si porta ai ristoranti accanto, che lo cucinano per pochi dirham. La vera cucina emiratina si trova in pochi locali dedicati: da provare il machboos, il luqaimat come dolce e il karak chai, il tè al latte speziato che qui si beve a tutte le ore.',
    comeArrivare:
      "In aereo su Abu Dhabi Zayed International (AUH), l'hub di Etihad. Per il centro c'è il bus A1, circa 4 AED con la tessera Hafilat, attivo 24 ore su 24, in 45-60 minuti; il taxi costa circa 100-150 AED. Da Dubai ci sono autobus frequenti, circa 2 ore, oppure il taxi. La Grande Moschea sta tra l'aeroporto e il centro.",
    comeSpostarsi:
      'La metropolitana non c\'è: si usano taxi e Careem, che costano poco, o gli autobus urbani. Tra il centro, Saadiyat e Yas le distanze sono grandi, e per buona parte dell\'anno camminare non è un\'opzione.',
    periodoMigliore: 'da novembre a marzo, come in tutto il Golfo. In autunno il Gran Premio di Formula 1 riempie la città.',
    costi:
      "Budget giornaliero indicativo per persona, hotel compreso: basso 60-90 €, medio 130-220 €, alto oltre 350 €. Grande Moschea con pass online (circa 10 AED per i turisti da settembre 2026); Louvre Abu Dhabi 70 AED; Qasr Al Watan da circa 65 AED; taxi economici. Nel complesso una giornata ad Abu Dhabi costa meno di una a Dubai, e con lo stopover Etihad l'hotel non si paga.",
    erroriDaEvitare: [
      'Presentarsi alla Grande Moschea vestiti in modo sbagliato: braccia e gambe coperte per tutti, capo coperto per le donne. Le abaya si possono avere in prestito, ma con code lunghe, e in certi orari l\'ingresso è contingentato',
      'Visitare la moschea a mezzogiorno: il marmo bianco riverbera e fa male agli occhi, ed è anche l\'ora peggiore per le foto',
      'Visitare il Louvre di corsa: la cupola e la luce che filtra sotto sono metà dell\'opera, e vanno guardate con calma',
      'Dare per scontata una metropolitana come a Dubai: qui non c\'è, e le distanze sono grandi',
    ],
    miaEsperienza:
      'Abu Dhabi è la sorpresa degli Emirati, soprattutto se ci si arriva dopo Dubai: più bassa, più lenta, con spazio tra un edificio e l\'altro. Alla Grande Moschea i primati (il tappeto annodato a mano più grande del mondo, i lampadari di cristalli Swarovski, ottantadue cupole) fanno temere l\'eccesso, e invece funziona. Le colonne bianche intarsiate con motivi floreali in madreperla hanno una delicatezza che i numeri non fanno immaginare. Il momento giusto è il tardo pomeriggio, quando il marmo passa dal bianco al rosa e poi, con l\'illuminazione notturna, al blu. L\'altro pezzo forte è il Louvre, dove l\'edificio vale quanto la collezione: sotto la cupola forata da quasi ottomila stelle metalliche sovrapposte cade una luce che si sposta e si scompone tutto il giorno, quella che Nouvel chiama pioggia di luce. Ci si siede sotto e si resta lì. Due giorni bastano, e con lo stopover Etihad l\'hotel non si paga.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Grande Moschea Sheikh Zayed",
        "testo": "Ottantadue cupole, colonne di marmo intarsiate di madreperla, un tappeto annodato a mano di oltre 5.600 metri quadrati e lampadari con milioni di cristalli Swarovski. È aperta ai visitatori non musulmani.",
        "come": "Taxi o Uber. Visita gratuita con prenotazione obbligatoria del pass online sul sito ufficiale; regole di abbigliamento sul sito.",
        "quando": "Il tardo pomeriggio, quando il marmo passa dal bianco al rosa e poi al blu; a mezzogiorno il bianco abbaglia.",
        "tempo": "1-1,5 ore",
        "costo": "Pass online obbligatorio; per i turisti, da settembre 2026, circa 10 AED (circa 2,50 €): verificare sul sito",
        "orari": "Sabato-giovedì 9-20.30; venerdì 9-11.30 e 14.30-20.30 (2026).",
        "lat": 24.412,
        "lng": 54.474,
        "url": "https://www.szgmc.gov.ae/en/home",
        "consiglio": "Gli orari per i non musulmani variano, soprattutto il venerdì: controllare sul sito."
      },
      {
        "nome": "Louvre Abu Dhabi",
        "testo": "Il museo di Jean Nouvel sull'isola di Saadiyat, aperto nel 2017, sotto una cupola fatta di 7.850 stelle di alluminio sovrapposte che fa piovere luce. L'edificio vale quanto la collezione.",
        "come": "Taxi o Uber da Abu Dhabi.",
        "quando": "Tardo pomeriggio, quando la luce sotto la cupola cambia.",
        "tempo": "2-3 ore",
        "costo": "70 AED, circa 16 €; gratis sotto i 18 anni (2026)",
        "orari": "Martedì-domenica dalle 10, chiusura alle 18.30 o alle 20.30 secondo il giorno; chiuso il lunedì (2026).",
        "lat": 24.533,
        "lng": 54.4,
        "url": "https://www.louvreabudhabi.ae/",
        "consiglio": "Sedersi sotto la cupola e restarci un po'."
      },
      {
        "nome": "Qasr Al Watan",
        "testo": "Il palazzo presidenziale, aperto al pubblico dal 2019. Si visitano la Grande Sala sotto la cupola centrale, di 37 metri di diametro, con un lampadario di 350.000 cristalli, la sala dove si riunisce il governo e la House of Knowledge con i doni ricevuti dai capi di Stato.",
        "come": "Taxi o Uber.",
        "quando": "Mattina. Orari e biglietti sul sito ufficiale.",
        "tempo": "1,5-2 ore",
        "costo": "Da circa 65 AED, circa 15 € (2026)",
        "lat": 24.46225,
        "lng": 54.30551,
        "url": "https://www.qasralwatan.ae/"
      },
      {
        "nome": "Zayed National Museum",
        "testo": "Il museo nazionale degli Emirati, nel distretto culturale di Saadiyat accanto al Louvre, progettato da Foster + Partners con torri ispirate alle piume di un falco. Racconta la storia del paese dalla preistoria alla figura dello sceicco Zayed, fondatore della federazione.",
        "come": "Taxi fino a Saadiyat; si abbina al Louvre nella stessa giornata. Spalle e ginocchia coperte.",
        "quando": "Mattina, prima del Louvre al pomeriggio.",
        "tempo": "2-3 ore",
        "orari": "Lunedì-giovedì 10-18.30, venerdì-domenica 10-20.30; ultimo ingresso un'ora prima (2026, dato dei rivenditori: verificare).",
        "lat": 24.53456,
        "lng": 54.4188,
        "url": "https://www.zayednationalmuseum.ae/"
      },
      {
        "nome": "Qasr Al Hosn",
        "testo": "Il forte bianco nel centro della città, l'edificio in pietra più antico di Abu Dhabi, nato come torre di guardia sul pozzo d'acqua e poi residenza della famiglia regnante. Restaurato e trasformato in museo, racconta come la città è cresciuta intorno a queste mura.",
        "come": "Taxi fino al centro, sulla Sheikh Zayed the First Street; accanto c'è la Cultural Foundation.",
        "quando": "Mattina.",
        "tempo": "1-1,5 ore",
        "lat": 24.48239,
        "lng": 54.35482
      },
      {
        "nome": "Abrahamic Family House",
        "testo": "Tre edifici di culto affiancati su Saadiyat, una moschea, una chiesa e una sinagoga, progettati da David Adjaye come tre volumi simili di pietra chiara. Si visitano tutti e tre, con un percorso che spiega cosa hanno in comune le tre religioni.",
        "come": "Taxi fino al distretto culturale di Saadiyat; abiti coprenti.",
        "quando": "Mattina o pomeriggio, fuori dagli orari di preghiera. Orari e prenotazioni sul sito ufficiale.",
        "tempo": "1 ora",
        "lat": 24.53093,
        "lng": 54.4061,
        "url": "https://www.abrahamicfamilyhouse.ae/"
      },
      {
        "nome": "Corniche e Heritage Village",
        "testo": "Un lungo lungomare con spiaggia pubblica, percorsi per bici e pedoni e la vista sui grattacieli. Sul frangiflutti, a pochi passi dal Marina Mall, l'Heritage Village ricostruisce la vita di prima del petrolio: un vecchio souq, una moschea, un accampamento, artigiani che tessono il sadu e soffiano il vetro, e un piccolo museo sui pescatori di perle.",
        "come": "Taxi fino alla Corniche, poi a piedi o in bici.",
        "quando": "Dal tardo pomeriggio al tramonto, quando si accende lo skyline.",
        "tempo": "2 ore",
        "costo": "Heritage Village a ingresso libero (2026)",
        "lat": 24.47324,
        "lng": 54.34087
      },
      {
        "nome": "Wahat Al Karama",
        "testo": "Il memoriale ai caduti degli Emirati, proprio di fronte alla Grande Moschea: grandi lastre inclinate di alluminio e una vasca d'acqua che riflette le cupole. Pochi lo visitano, ed è la vista migliore sulla moschea illuminata.",
        "come": "A piedi o con un breve taxi dalla Grande Moschea.",
        "quando": "Dopo il tramonto, uscendo dalla moschea.",
        "tempo": "30-45 minuti",
        "lat": 24.41346,
        "lng": 54.47878
      },
      {
        "nome": "Mercato del pesce di Mina Zayed",
        "testo": "Il mercato del pesce del porto di Mina Zayed, ancora aperto e tra i meno turistici della città, accanto agli altri mercati storici della zona. Si vede il pesce fresco del Golfo appena sbarcato.",
        "come": "Taxi dal centro.",
        "quando": "Mattina presto o tardo pomeriggio.",
        "tempo": "1 ora",
        "lat": 24.5253,
        "lng": 54.37693
      },
      {
        "nome": "Spiaggia di Saadiyat",
        "testo": "Una lunga spiaggia di sabbia bianca sul lato nord dell'isola di Saadiyat, con dune basse protette dove nidificano le tartarughe. C'è un tratto pubblico attrezzato, oltre ai resort.",
        "come": "Taxi da Abu Dhabi, circa 20 minuti dalla Corniche.",
        "quando": "Mattina, prima del Louvre; il bagno da ottobre ad aprile.",
        "tempo": "2-3 ore",
        "lat": 24.53167,
        "lng": 54.44306
      },
      {
        "nome": "Jubail Mangrove Park",
        "testo": "Una passerella di legno che entra nella foresta di mangrovie dell'isola di Jubail, tra il centro e Yas. Si cammina sopra l'acqua bassa tra granchi, aironi e radici aeree: un'ora di natura a mezz'ora dal centro.",
        "come": "Taxi dal centro o da Yas.",
        "quando": "Mattina presto o tardo pomeriggio, con meno caldo.",
        "tempo": "1 ora"
      },
      {
        "nome": "Yas Island",
        "testo": "L'isola dei parchi a tema e dello sport: Ferrari World con le sue montagne russe, Warner Bros. World, il parco acquatico e il circuito di Yas Marina, dove a inizio dicembre si corre il Gran Premio di Formula 1.",
        "come": "Taxi, circa 30 minuti dal centro; vicina all'aeroporto.",
        "quando": "Una giornata intera se si entra nei parchi; la sera per la marina.",
        "tempo": "Mezza giornata o una giornata",
        "lat": 24.4838,
        "lng": 54.607,
        "url": "https://www.yasisland.com/"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Qasr Al Hosn e il centro",
          "Mezzogiorno e pomeriggio: Louvre Abu Dhabi sull'isola di Saadiyat",
          "Tardo pomeriggio: Grande Moschea Sheikh Zayed fino all'accensione delle luci",
          "Sera: Wahat Al Karama per la vista sulla moschea, cena sulla Corniche"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: come il programma di un giorno",
          "Giorno 2, mattina: Qasr Al Watan",
          "Giorno 2, pomeriggio: Zayed National Museum e Abrahamic Family House a Saadiyat, poi la spiaggia",
          "Giorno 2, sera: Heritage Village e mercato del pesce di Mina Zayed"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2: come sopra",
          "Giorno 3: gita ad Al Ain, l'oasi UNESCO, oppure verso Liwa con una notte nel deserto",
          "In alternativa, con bambini o per la Formula 1: Yas Island"
        ]
      }
    ],
    zone: [
      {
        "nome": "Corniche / centro",
        "perChi": "chi vuole stare in città",
        "testo": "Hotel con vista sul mare e ristoranti vicini.",
        "fascia": "80-200 €"
      },
      {
        "nome": "Saadiyat",
        "perChi": "chi vuole musei e spiaggia",
        "testo": "Resort e il Louvre, più isolato e caro.",
        "fascia": "200-500 €"
      },
      {
        "nome": "Yas Island",
        "perChi": "chi viene per i parchi o per la Formula 1",
        "testo": "Hotel moderni vicino all'aeroporto e ai parchi, lontani dal centro. Durante il Gran Premio i prezzi salgono molto.",
        "fascia": "100-250 €"
      }
    ],
    sapori: [
      {
        "nome": "Cucina indiana e pakistana",
        "testo": "Buona ed economica, nei quartieri intorno al centro."
      },
      {
        "nome": "Machboos",
        "testo": "Riso speziato con carne o pesce, cucina emiratina."
      },
      {
        "nome": "Luqaimat",
        "testo": "Gnocchetti dolci fritti con sciroppo di datteri."
      }
    ],
    attenzioni: [
      "Alla Grande Moschea vestiti in modo sbagliato: leggere le regole di abbigliamento sul sito ufficiale prima di andare.",
      "Visitare la moschea a mezzogiorno: il marmo abbaglia e si cuoce.",
      "Prenotare il Louvre in anticipo nei fine settimana.",
      "Inizio dicembre: il Gran Premio di Formula 1 di Abu Dhabi riempie la città e alza i prezzi degli hotel.",
      "Tensioni nella regione: i governi europei segnalano possibili cancellazioni di voli e chiusure dello spazio aereo con poco preavviso (gov.uk, ottobre 2026). Controllare viaggiaresicuri.it prima di partire."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Dubai",
        "distanza": "circa 2 ore in autobus, 140 km",
        "come": "Autobus frequenti, taxi o auto con autista.",
        "testo": "Il creek in abra, i souq di Deira, Al Fahidi e il Burj Khalifa al tramonto stanno in una giornata (c'è la scheda dedicata)."
      },
      {
        "nome": "Al Ain",
        "distanza": "circa 1h30 in auto",
        "come": "Auto a noleggio o autista per la giornata.",
        "testo": "L'oasi patrimonio UNESCO con oltre 147.000 palme irrigate dai falaj, il forte Al Jahili e la strada del Jebel Hafeet per il tramonto."
      },
      {
        "nome": "Liwa e le dune di Moreeb",
        "distanza": "circa 2 ore in auto",
        "come": "Auto o transfer; sulle dune solo in 4x4 con autista esperto.",
        "testo": "Il bordo del Rub' al-Khali, con dune tra le più alte del mondo. Meglio con una notte nel deserto che in giornata."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono ad Abu Dhabi?",
        "risposta": "Un giorno pieno per Grande Moschea e Louvre, due per aggiungere Qasr Al Watan, il Zayed National Museum e la Corniche. Il terzo serve per Al Ain o per Liwa."
      },
      {
        "domanda": "Serve la prenotazione per la Grande Moschea?",
        "risposta": "Sì: i visitatori devono prenotare un pass online sul sito ufficiale, con fascia oraria. Il venerdì mattina e a mezzogiorno gli orari per i non musulmani si restringono."
      },
      {
        "domanda": "Come vestirsi per la Grande Moschea?",
        "risposta": "Braccia e gambe coperte per tutti, abiti larghi e non trasparenti, capo coperto per le donne. Conviene arrivare già vestiti nel modo giusto per evitare la coda delle abaya in prestito."
      },
      {
        "domanda": "Abu Dhabi si può visitare in giornata da Dubai?",
        "risposta": "Sì, con due ore di autobus per tratta, ma si vede solo l'essenziale. Dormire una notte permette di vedere la moschea al tramonto con calma e il Louvre la mattina dopo."
      },
      {
        "domanda": "Il Louvre Abu Dhabi è aperto tutti i giorni?",
        "risposta": "No, è chiuso il lunedì. Gli altri giorni apre alle 10 e chiude alle 18.30 o alle 20.30 secondo il giorno; il biglietto si compra online."
      },
      {
        "domanda": "Come funziona lo stopover gratuito di Etihad?",
        "risposta": "Si aggiunge mentre si prenota sul sito Etihad un biglietto di andata e ritorno con sosta di almeno 24 ore, e dà una o due notti di hotel; l'hotel va prenotato qualche giorno prima del volo. Le condizioni cambiano: verificarle prima."
      }
    ],
    esperienzeSlugs: ['moschea-sheikh-zayed', 'louvre-abu-dhabi'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "Le cupole bianche, gli archi e un minareto della Grande Moschea Sheikh Zayed di Abu Dhabi",
    immagine: "/images/emirati-arabi-uniti/abu-dhabi-sheikh-zayed-riccardo.jpg",
  },
  {
    slug: 'liwa-al-ain',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 3,
    nome: 'Liwa e Al Ain',
    tipologia: ['deserto', 'natura', 'oasi'],
    giorniConsigliati: '1-2 giorni, come estensione da Abu Dhabi',
    visitataPersonalmente: false,
    introduzione:
      'L\'entroterra. A sud c\'è l\'oasi di Liwa, sul bordo del Rub\' al-Khali, il Quarto Vuoto, il più grande deserto di sabbia continuo del mondo, con dune che superano i 250 metri. A est c\'è Al Ain, la "città giardino" patrimonio UNESCO, con le oasi di palme irrigate dai falaj, canali sotterranei di duemila anni fa.',
    percheAndarci:
      'È l\'unico modo di vedere il deserto vero, e non la sua versione da safari serale alle porte di Dubai. Al Ain, poi, mostra come si viveva qui prima del petrolio: un\'oasi agricola con un sistema di irrigazione che funziona ancora. È in lista per un motivo preciso. Quello che a Dubai e ad Abu Dhabi vendono come "safari nel deserto" si fa su dune modeste a mezz\'ora dalla città, con i quad, la cena in campo tendato e il rientro in serata. Il Rub\' al-Khali è un\'altra cosa, il più grande deserto di sabbia continuo del mondo, con dune oltre i duecento metri a Moreeb, e sta a due ore da Abu Dhabi: basta un\'estensione di due giorni. L\'altra metà della deviazione è Al Ain, che è l\'opposto: un\'oasi patrimonio UNESCO con centoquarantasettemila palme irrigate da canali scavati duemila anni fa e ancora in funzione, dove si cammina all\'ombra e si sente scorrere l\'acqua. Insieme raccontano com\'era questo paese prima del petrolio, ed è quello che manca del tutto a uno stopover fatto solo di città.',
    cosaVedere: [
      'Le dune di Moreeb, tra le più alte del mondo, nella zona di Liwa',
      'Il bordo del Rub\' al-Khali, il più grande deserto di sabbia continuo del pianeta',
      'L\'oasi di Al Ain, patrimonio UNESCO, con 147.000 palme e i canali falaj ancora in uso',
      'Il forte di Al Jahili e i siti archeologici di Hili, con tombe dell\'età del bronzo',
      'Jebel Hafeet, la montagna con la strada panoramica e la vista sull\'oasi',
    ],
    cosaFare: [
      'Una notte nel deserto a Liwa, molto meno turistica dei safari serali intorno a Dubai',
      'L\'alba sulle dune di Moreeb',
      'Camminare nell\'oasi di Al Ain lungo i canali di irrigazione, all\'ombra delle palme',
      'Salire in auto sul Jebel Hafeet, tra i tornanti, fino al belvedere in cima',
    ],
    doveDormire:
      'A Liwa ci sono pochi resort nel deserto, cari e da prenotare in anticipo; Al Ain ha la normale offerta di una città. Quasi tutti arrivano da Abu Dhabi in giornata, ed è la scelta che fa perdere la parte migliore: la notte.',
    doveMangiare:
      'Fuori dai resort ci sono i ristoranti di quartiere, quasi tutti indiani o pakistani, buoni ed economici. Ad Al Ain conviene cercare i datteri locali, il prodotto agricolo dell\'oasi, che si vendono nei mercati specializzati.',
    comeArrivare: "Da Abu Dhabi sono circa 2 ore di strada per Liwa e un'ora e mezza per Al Ain; tra Liwa e Al Ain ci sono circa 320 km e 3 ore. Serve un'auto a noleggio o un transfer: i mezzi pubblici ci sono ma sono poco pratici, e per le dune serve comunque un 4x4 con guida. Chi arriva in aereo usa l'aeroporto di Abu Dhabi (AUH).",
    comeSpostarsi: 'Con un\'auto propria sulle strade asfaltate; sulle dune solo in 4x4 con un autista esperto. Chi guida sulla sabbia senza esperienza di solito resta impantanato.',
    periodoMigliore:
      'da novembre a marzo, e anche allora nel deserto le notti sono fredde. D\'estate nell\'interno si superano spesso i 50 gradi.',
    costi: "L'oasi di Al Ain, il forte Al Jahili e Qasr Al Muwaiji sono gratuiti, lo zoo costa da 31,5 AED (circa 7 €); la voce cara sono i resort nel deserto. Budget giornaliero a persona, indicativo: basso 60-80 € (hotel di città ad Al Ain in doppia, auto in comune, ristoranti indiani); medio 130-200 € (hotel migliore, uscita in 4x4 sulle dune); alto 400 € e oltre (resort a Liwa o Qasr Al Sarab).",
    erroriDaEvitare: [
      'Scambiare un safari serale intorno a Dubai per il deserto: quelli si fanno su dune piccole a mezz\'ora dalla città, qui si è sul bordo del Rub\' al-Khali',
      'Guidare sulla sabbia senza esperienza e senza un secondo mezzo: è il modo più comune di finire nei guai',
      'Venire in giornata e saltare la notte, che è il motivo per cui si arriva fin qui',
      'Sottovalutare il freddo delle notti d\'inverno nel deserto',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Dune di Moreeb e Liwa",
        "testo": "Il bordo del Rub' al-Khali, il deserto di sabbia del sud della penisola arabica. Moreeb, circa 25 km a sud dell'oasi di Liwa, è la duna più alta degli Emirati: circa 300 metri, con un versante inclinato di 50 gradi, dove si tiene il festival con le gare in salita. Qui non ci sono safari serali: serve una notte nel deserto.",
        "come": "In auto da Abu Dhabi, circa 2 ore fino a Liwa, poi 29 km e circa 45 minuti fino a Moreeb su strada asfaltata; fuori pista serve un 4x4 con esperienza.",
        "quando": "Alba e tramonto.",
        "tempo": "1-2 giorni",
        "consiglio": "Non guidare sulla sabbia senza esperienza e senza un secondo mezzo.",
        "lat": 22.97967,
        "lng": 53.78622
      },
      {
        "nome": "Oasi di Al Ain",
        "testo": "La più grande delle sei oasi di Al Ain iscritte nel patrimonio UNESCO dal 2011: oltre 147.000 palme da dattero di più di 100 varietà su 136 ettari, irrigate dai canali falaj, un sistema antico di millenni. Si cammina all'ombra sentendo scorrere l'acqua.",
        "come": "In auto da Abu Dhabi. L'oasi si gira a piedi.",
        "quando": "Mattina.",
        "tempo": "2 ore",
        "orari": "Tutti i giorni 9-19",
        "costo": "Ingresso libero, tour guidati a pagamento (2026)",
        "url": "https://abudhabiculture.ae/en/cultural-sites/historic-buildings-and-cultural-landscapes/al-ain-oases",
        "lat": 24.217,
        "lng": 55.762
      },
      {
        "nome": "Forte Al Jahili e siti di Hili",
        "testo": "Il forte Al Jahili, costruito nel 1891 dallo sceicco Zayed bin Khalifa per proteggere i coltivatori di palme, poi base dei Trucial Oman Scouts negli anni Cinquanta. A pochi chilometri c'è il parco archeologico di Hili, uno dei principali siti dell'età del bronzo degli Emirati, con tombe del III millennio a.C., parte del patrimonio UNESCO.",
        "come": "In auto da Al Ain.",
        "quando": "Mattina.",
        "tempo": "2 ore",
        "orari": "Forte Al Jahili 9-19; chiuso il primo giorno di Eid al-Fitr ed Eid al-Adha",
        "costo": "Forte Al Jahili a ingresso libero (2026)",
        "url": "https://abudhabiculture.ae/en/Cultural-Sites/Historic-Buildings-And-Cultural-Landscapes/Al-Jahili-Fort",
        "lat": 24.21611,
        "lng": 55.7525
      },
      {
        "nome": "Jebel Hafeet",
        "testo": "L'unica montagna dell'emirato di Abu Dhabi, al confine con l'Oman, con una strada panoramica di 11,7 km e 60 curve fino al parcheggio in cima, da cui si vede la città. Ha dato il nome al periodo di Hafit dell'età del bronzo (3200-2600 a.C.), per le tombe trovate alle sue pendici.",
        "come": "In auto da Al Ain.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "lat": 24.05861,
        "lng": 55.7775
      },
      {
        "nome": "Museo di Al Ain",
        "testo": "Fondato nel 1969 dallo sceicco Zayed, è il primo museo costruito apposta negli Emirati: archeologia e storia di Al Ain, dall'età del bronzo alla vita nell'oasi. Sta nel quartiere storico di Harat Al Hosn, a est dell'oasi.",
        "come": "A piedi dall'ingresso est dell'oasi.",
        "quando": "Mattina, prima dell'oasi.",
        "tempo": "1,5 ore",
        "orari": "Tutti i giorni 9-19; durante il Ramadan 10-22",
        "url": "https://abudhabiculture.ae/en/cultural-sites/museums/al-ain-museum",
        "lat": 24.21615,
        "lng": 55.77376
      },
      {
        "nome": "Qasr Al Muwaiji",
        "testo": "Il forte nel centro di Al Ain dove nacque lo sceicco Khalifa bin Zayed, secondo presidente degli Emirati, e da cui lo sceicco Zayed governò la regione orientale. Dentro c'è una mostra sulla storia della famiglia.",
        "come": "In taxi o in auto, nel centro della città.",
        "quando": "Pomeriggio.",
        "tempo": "45 minuti",
        "orari": "9-19; durante il Ramadan 10-22",
        "costo": "Ingresso libero (2026)",
        "lat": 24.225,
        "lng": 55.72694
      },
      {
        "nome": "Museo del Palazzo dello sceicco Zayed",
        "testo": "L'ex residenza della famiglia regnante, costruita nel 1937 e ampliata dallo sceicco Zayed, trasformata in casa-museo nel 2001. Racconta la vita degli Emirati nel Novecento, accanto all'oasi.",
        "come": "A piedi dal bordo ovest dell'oasi di Al Ain.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "orari": "Chiuso per restauro dal 1° luglio 2024: verificare la riapertura prima di andare",
        "costo": "Ingresso libero (2026)",
        "lat": 24.21583,
        "lng": 55.77389
      },
      {
        "nome": "Zoo di Al Ain",
        "testo": "Un parco faunistico di 400 ettari ai piedi del Jebel Hafeet, con animali dei deserti e delle savane. D'estate chiude per qualche settimana.",
        "come": "In auto o taxi, a sud della città.",
        "quando": "Mattina presto o tardo pomeriggio, quando gli animali sono più attivi.",
        "tempo": "3 ore",
        "costo": "Da 31,5 AED per gli adulti, circa 7 € (2026)",
        "url": "https://visitabudhabi.ae/where-to-go/parks-and-zoos/al-ain-zoo",
        "lat": 24.17608,
        "lng": 55.73849
      },
      {
        "nome": "Green Mubazzarah",
        "testo": "Il parco verde ai piedi del Jebel Hafeet, con prati, sorgenti calde e laghetti. Si abbina alla salita in auto sulla montagna.",
        "come": "In auto, alla base della strada del Jebel Hafeet.",
        "quando": "Tardo pomeriggio, prima del tramonto in cima.",
        "tempo": "1 ora",
        "lat": 24.10253,
        "lng": 55.75042
      },
      {
        "nome": "Mercato dei cammelli di Al Ain",
        "testo": "Uno degli ultimi mercati di cammelli tradizionali degli Emirati, dove allevatori e compratori trattano la mattina. Non è un'attrazione costruita per i turisti.",
        "come": "In auto, alla periferia sud-est della città.",
        "quando": "La mattina presto, quando arrivano i camion.",
        "tempo": "45 minuti",
        "costo": "Ingresso libero (2026)",
        "lat": 24.16167,
        "lng": 55.81468
      },
      {
        "nome": "Jebel Hafit Desert Park",
        "testo": "Il parco sul versante del Jebel Hafeet con le tombe ad alveare dell'età del bronzo, circa cinquemila anni fa, alcune restaurate. Ci sono sentieri, noleggio di bici e campeggio.",
        "come": "In auto da Al Ain verso il confine con l'Oman.",
        "quando": "Mattina, nei mesi freschi.",
        "tempo": "2 ore",
        "orari": "Tutti i giorni 8-18"
      },
      {
        "nome": "Oasi di Liwa e forte di Mezairaa",
        "testo": "La mezzaluna di villaggi e palmeti che si allunga per decine di chilometri sul bordo delle dune, culla della famiglia regnante di Abu Dhabi. Il forte di Mezairaa sta nel centro principale dell'oasi.",
        "come": "In auto da Abu Dhabi, circa 2 ore.",
        "quando": "Tardo pomeriggio, prima di salire sulle dune.",
        "tempo": "1-2 ore",
        "lat": 23.13891,
        "lng": 53.78048
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno ad Al Ain",
        "tappe": [
          "Mattina: Museo di Al Ain e oasi lungo i falaj",
          "Pomeriggio: forte Al Jahili e Qasr Al Muwaiji",
          "Tramonto: Green Mubazzarah e salita sul Jebel Hafeet"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Abu Dhabi verso Liwa, oasi e forte di Mezairaa, notte nel deserto",
          "Giorno 2: alba sulle dune di Moreeb, poi rientro ad Abu Dhabi"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Abu Dhabi verso Liwa, notte nel deserto",
          "Giorno 2: alba a Moreeb, trasferimento ad Al Ain (circa 3 ore)",
          "Giorno 3: Al Ain come nel programma di un giorno, con il mercato dei cammelli la mattina presto"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campi e resort a Liwa",
        "perChi": "chi vuole il deserto vero",
        "testo": "Pochi resort, anche di lusso, in mezzo alle dune o sul bordo dell'oasi: da prenotare in anticipo nei mesi freschi."
      },
      {
        "nome": "Al Ain",
        "perChi": "chi vuole l'oasi",
        "testo": "Hotel di città e ristoranti indiani e pakistani, economici. Comoda per l'oasi, i forti e il Jebel Hafeet."
      },
      {
        "nome": "Abu Dhabi",
        "perChi": "chi va e torna in giornata",
        "testo": "Per Al Ain bastano un'ora e mezza di strada, per Liwa due: dormire in città si può, ma a Liwa si perde la notte nel deserto."
      }
    ],
    sapori: [
      {
        "nome": "Datteri di Al Ain",
        "testo": "Il prodotto dell'oasi, nei mercati specializzati."
      },
      {
        "nome": "Cucina indiana e pakistana",
        "testo": "Nei ristoranti di quartiere, buoni ed economici."
      },
      {
        "nome": "Machboos",
        "testo": "Cucina emiratina."
      },
      {
        "nome": "Caffè arabo",
        "testo": "Con cardamomo."
      }
    ],
    attenzioni: [
      "Scambiare un safari serale per il deserto: quelli si fanno su dune piccole vicino a Dubai.",
      "Guidare sulla sabbia senza esperienza e senza un secondo mezzo.",
      "Venire in giornata e saltare la notte, che è il motivo per cui si va a Liwa.",
      "D'estate nell'interno il caldo è estremo: venire tra novembre e marzo."
    ],
    gite: [
      {
        "nome": "Al-Buraimi (Oman)",
        "distanza": "subito oltre il confine, attaccata ad Al Ain",
        "come": "In auto attraverso il valico di frontiera, con passaporto; regole d'ingresso dell'Oman e assicurazione dell'auto da verificare prima.",
        "testo": "La città-oasi omanita gemella di Al Ain, con forti e case storiche: il forte Al-Khandaq, quello «della trincea», è il simbolo della città."
      },
      {
        "nome": "Qasr Al Sarab",
        "distanza": "81 km da Liwa, circa un'ora e 20 di auto",
        "come": "In auto su strada asfaltata tra le dune.",
        "testo": "Un resort costruito come un forte in mezzo al Rub' al-Khali, a sud-est di Liwa. La strada che ci arriva è il modo più comodo di attraversare il Quarto Vuoto senza un 4x4."
      }
    ],
    faq: [
      {
        "domanda": "Meglio Liwa o Al Ain?",
        "risposta": "Sono due cose diverse: Liwa è il deserto vero, Al Ain l'oasi e la storia. Con un giorno solo, Al Ain è più vicina e comoda; con due, una notte a Liwa vale la deviazione."
      },
      {
        "domanda": "Si può andare a Liwa in giornata da Abu Dhabi?",
        "risposta": "Si può, con circa 2 ore di strada per tratta, ma si perde la parte migliore: il tramonto e la notte sulle dune. Meglio dormire almeno una notte."
      },
      {
        "domanda": "Serve un 4x4?",
        "risposta": "Sulle strade asfaltate no, sulle dune sì, e con un autista esperto. Chi guida sulla sabbia senza esperienza di solito resta impantanato."
      },
      {
        "domanda": "I siti di Al Ain sono a pagamento?",
        "risposta": "L'oasi, il forte Al Jahili e Qasr Al Muwaiji sono a ingresso libero; si pagano i tour guidati e lo zoo, da 31,5 AED."
      },
      {
        "domanda": "Quando andare?",
        "risposta": "Da novembre a marzo. D'estate nell'interno si superano spesso i 50 gradi, e anche d'inverno le notti nel deserto sono fredde."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'La pianura desertica attorno ad Al Ain vista dalle pendici del Jebel Hafeet, nella foschia',
    immagine: '/images/emirati-arabi-uniti/liwa-al-ain.jpg',
  },
]
