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
      'In aereo su Dubai International (DXB), a venti minuti di metropolitana dal centro, o su Al Maktoum (DWC), molto più lontano. Da Abu Dhabi ci sono autobus frequenti, circa 2 ore.',
    comeSpostarsi:
      'Metropolitana con la Nol Card sull\'asse principale, taxi e Careem per il resto, abra sul creek a un dirham a tratta. Si può camminare solo d\'inverno e solo in certe zone: la città è fatta per l\'auto.',
    periodoMigliore:
      'da novembre a marzo. Da giugno a settembre si superano i 45 gradi con molta umidità e si vive al chiuso: uno stopover estivo si riduce a centri commerciali e hotel.',
    costi:
      'Burj Khalifa da circa 170 dirham per i piani 124-125, molto di più per il 148 e per le fasce al tramonto; abra 1 dirham; metropolitana pochi dirham; safari nel deserto 200-400 dirham secondo la formula. Con Dubai Connect o lo stopover Etihad l\'hotel esce dal conto.',
    erroriDaEvitare: [
      'Comprare il biglietto del Burj Khalifa sul posto: costa di più, e le fasce al tramonto finiscono con giorni di anticipo',
      'Fermarsi ai centri commerciali e alla Marina: è la Dubai che tutti si aspettano, e la meno interessante. Il creek, i souq e Al Fahidi sono a venti minuti di metropolitana',
      'Programmare uno stopover tra giugno e settembre, quando stare all\'aperto è impossibile',
      'Dimenticare che l\'alcol si beve solo nei locali autorizzati e che l\'ubriachezza in pubblico è un reato',
      'Contare su WhatsApp per le chiamate: sulle reti locali le VoIP sono limitate, i messaggi invece passano',
    ],
    confronti: [
      {
        titolo: 'I programmi stopover delle compagnie del Golfo: come funzionano davvero',
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
              'Fa risparmiare il visto turistico ordinario, che costa intorno ai 130 euro',
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
      'In aereo su Abu Dhabi Zayed International (AUH), l\'hub di Etihad. Da Dubai ci sono autobus frequenti, circa 2 ore, oppure il taxi.',
    comeSpostarsi:
      'La metropolitana non c\'è: si usano taxi e Careem, che costano poco, o gli autobus urbani. Tra il centro, Saadiyat e Yas le distanze sono grandi, e per buona parte dell\'anno camminare non è un\'opzione.',
    periodoMigliore: 'da novembre a marzo, come in tutto il Golfo. In autunno il Gran Premio di Formula 1 riempie la città.',
    costi:
      'Grande Moschea gratuita; Louvre Abu Dhabi intorno ai 65 dirham; Qasr Al Watan circa 65. Nel complesso una giornata ad Abu Dhabi costa molto meno di una a Dubai.',
    erroriDaEvitare: [
      'Presentarsi alla Grande Moschea vestiti in modo sbagliato: braccia e gambe coperte per tutti, capo coperto per le donne. Le abaya si possono avere in prestito, ma con code lunghe, e in certi orari l\'ingresso è contingentato',
      'Visitare la moschea a mezzogiorno: il marmo bianco riverbera e fa male agli occhi, ed è anche l\'ora peggiore per le foto',
      'Visitare il Louvre di corsa: la cupola e la luce che filtra sotto sono metà dell\'opera, e vanno guardate con calma',
      'Dare per scontata una metropolitana come a Dubai: qui non c\'è, e le distanze sono grandi',
    ],
    miaEsperienza:
      'Abu Dhabi è la sorpresa degli Emirati, soprattutto se ci si arriva dopo Dubai: più bassa, più lenta, con spazio tra un edificio e l\'altro. Alla Grande Moschea i primati (il tappeto annodato a mano più grande del mondo, i lampadari di cristalli Swarovski, ottantadue cupole) fanno temere l\'eccesso, e invece funziona. Le colonne bianche intarsiate con motivi floreali in madreperla hanno una delicatezza che i numeri non fanno immaginare. Il momento giusto è il tardo pomeriggio, quando il marmo passa dal bianco al rosa e poi, con l\'illuminazione notturna, al blu. L\'altro pezzo forte è il Louvre, dove l\'edificio vale quanto la collezione: sotto la cupola forata da quasi ottomila stelle metalliche sovrapposte cade una luce che si sposta e si scompone tutto il giorno, quella che Nouvel chiama pioggia di luce. Ci si siede sotto e si resta lì. Due giorni bastano, e con lo stopover Etihad l\'hotel non si paga.',
    esperienzeSlugs: ['moschea-sheikh-zayed', 'louvre-abu-dhabi'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: 'I grattacieli del lungomare di Abu Dhabi visti dal mare, con una barca a vela',
    immagine: '/images/emirati-arabi-uniti/abu-dhabi.jpg',
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
      'È l\'unico modo di vedere il deserto vero, e non la sua versione da safari serale alle porte di Dubai. Al Ain, poi, mostra come si viveva qui prima del petrolio: un\'oasi agricola con un sistema di irrigazione che funziona ancora.',
    cosaVedere: [
      'Le dune di Moreeb, tra le più alte del mondo, nella zona di Liwa',
      'Il bordo del Rub\' al-Khali, il più grande deserto di sabbia continuo del pianeta',
      'L\'oasi di Al Ain, patrimonio UNESCO, con 147.000 palme e i canali falaj ancora in uso',
      'Il forte di Al Jahili e i siti archeologici di Hili, con tombe dell\'età del bronzo',
      'Jebel Hafeet, la montagna con la strada panoramica e la vista sull\'oasi',
    ],
    cosaFare: [
      'Una notte nel deserto a Liwa, molto più autentica dei safari serali intorno a Dubai',
      'L\'alba sulle dune di Moreeb',
      'Camminare nell\'oasi di Al Ain lungo i canali di irrigazione, all\'ombra delle palme',
      'Salire in auto sul Jebel Hafeet, tra i tornanti, fino al belvedere in cima',
    ],
    doveDormire:
      'A Liwa ci sono pochi resort nel deserto, cari e da prenotare in anticipo; Al Ain ha la normale offerta di una città. Quasi tutti arrivano da Abu Dhabi in giornata, ed è la scelta che fa perdere la parte migliore: la notte.',
    doveMangiare:
      'Fuori dai resort ci sono i ristoranti di quartiere, quasi tutti indiani o pakistani, buoni ed economici. Ad Al Ain vale la pena cercare i datteri locali, il prodotto agricolo dell\'oasi, che si vendono nei mercati specializzati.',
    comeArrivare:
      'Da Abu Dhabi sono circa 2 ore di strada per Liwa e 1h30 per Al Ain. Serve un\'auto a noleggio o un transfer: i mezzi pubblici ci sono ma sono poco pratici, e per le dune serve comunque un 4x4 con guida.',
    comeSpostarsi: 'Con un\'auto propria sulle strade asfaltate; sulle dune solo in 4x4 con un autista esperto. Chi guida sulla sabbia senza esperienza di solito resta impantanato.',
    periodoMigliore:
      'da novembre a marzo, e anche allora nel deserto le notti sono fredde. D\'estate nell\'interno si superano spesso i 50 gradi.',
    costi: 'oasi di Al Ain e forti gratuiti o quasi; la voce cara sono i resort nel deserto.',
    erroriDaEvitare: [
      'Scambiare un safari serale intorno a Dubai per il deserto: quelli si fanno su dune piccole a mezz\'ora dalla città, qui si è sul bordo del Rub\' al-Khali',
      'Guidare sulla sabbia senza esperienza e senza un secondo mezzo: è il modo più comune di finire nei guai',
      'Venire in giornata e saltare la notte, che è il motivo per cui si arriva fin qui',
      'Sottovalutare il freddo delle notti d\'inverno nel deserto',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, quindi questa scheda si ferma ai fatti e non racconta una giornata che non c\'è stata. È in lista per un motivo preciso. Quello che a Dubai e ad Abu Dhabi vendono come "safari nel deserto" si fa su dune modeste a mezz\'ora dalla città, con i quad, la cena in campo tendato e il rientro in serata. Il Rub\' al-Khali è un\'altra cosa, il più grande deserto di sabbia continuo del mondo, con dune oltre i duecento metri a Moreeb, e sta a due ore da Abu Dhabi: basta un\'estensione di due giorni. L\'altra metà della deviazione è Al Ain, che è l\'opposto: un\'oasi patrimonio UNESCO con centoquarantasettemila palme irrigate da canali scavati duemila anni fa e ancora in funzione, dove si cammina all\'ombra e si sente scorrere l\'acqua. Insieme raccontano com\'era questo paese prima del petrolio, ed è quello che manca del tutto a uno stopover fatto solo di città.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'La pianura desertica attorno ad Al Ain vista dalle pendici del Jebel Hafeet, nella foschia',
    immagine: '/images/emirati-arabi-uniti/liwa-al-ain.jpg',
  },
]
