import type { Destinazione } from '@/lib/types'

// Paese visitato di persona. I campi miaEsperienza sono bozze scritte da
// Claude nella voce del diario, basate su ciò che è oggettivamente vero di
// ogni posto e non su ricordi reali: vanno riletti e sostituiti con i tuoi.
// Nessun nome di hotel, operatore o ristorante è stato inventato. In Bolivia
// prezzi e soprattutto condizioni di accesso (blocchi stradali, disponibilità
// di contanti) cambiano rapidamente: vanno verificati sul posto.
//
// Tutte e cinque le destinazioni sono ora collegate al viaggio-diario
// "Bolivia in 19 giorni" (tripSlugs: ['bolivia-itinerario']): vedi
// src/content/viaggi/49-bolivia-itinerario.md e
// src/content/viaggi-dati/bolivia-itinerario.ts.

export const destinazioniBolivia: Destinazione[] = [
  {
    slug: 'la-paz',
    paeseSlug: 'bolivia',
    ordine: 1,
    nome: 'La Paz',
    tipologia: ['città', 'avventura'],
    giorniConsigliati: '3-4 giorni, compresa la giornata sulla Carretera de la Muerte',
    visitataPersonalmente: true,
    introduzione:
      'La sede del governo più alta del mondo, incastrata in un canyon a 3.600 metri con El Alto che la sovrasta a oltre 4.000. Ci si muove con una rete di teleferiche urbane che è insieme trasporto pubblico e miglior punto panoramico della città.',
    percheAndarci:
      'Perché è la base per la Carretera de la Muerte e per il Titicaca, e perché la città stessa, con i mercati di strada, i quartieri verticali e il contrasto tra il centro e El Alto, è una delle più particolari del continente.',
    cosaVedere: [
      'Mi Teleférico, la rete di funivie urbane: la linea rossa e quella gialla danno la vista migliore sulla conca',
      'Il Mercado de las Brujas, il mercato delle streghe, con i rimedi tradizionali aymara',
      'La Valle de la Luna, formazioni di argilla erosa a pochi chilometri dal centro',
      'Il mercato di El Alto (giovedì e domenica), uno dei più grandi del Sud America',
      'Il Nevado Illimani che chiude l\'orizzonte a 6.438 metri',
    ],
    cosaFare: [
      'Scendere la Carretera de la Muerte in mountain bike (vedi la scheda esperienza dedicata)',
      'Salire in teleferica all\'ora del tramonto, quando la conca si illumina',
      'Assistere a un incontro di cholitas luchadoras, il wrestling delle donne aymara a El Alto',
      'Escursione al Chacaltaya, l\'ex stazione sciistica più alta del mondo, oggi senza ghiacciaio',
    ],
    doveDormire: 'Sopocachi per i ristoranti e la vita serale, zona San Pedro e centro per i prezzi bassi e la comodità alle agenzie.',
    doveMangiare:
      'A La Paz si mangia per strada meglio che al ristorante: salteñas a metà mattina (è un\'abitudine locale: a colazione non si mangiano), api con pastel, e le zuppe dei mercati coperti. Nella zona di Sopocachi c\'è l\'offerta più curata della città.',
    comeArrivare: "I voli internazionali e interni atterrano a El Alto (LPB), a oltre 4.000 metri: si passa dal livello del mare alla quota massima in poche ore, con effetti che si sentono subito. Dall'aeroporto al centro ci sono circa 30-45 minuti di taxi ufficiale o chiamato dall'hotel, di più con il traffico o i blocchi; in aeroporto conviene cambiare pochi contanti e il resto in città. Via terra arrivano i bus da Copacabana (circa 3,5-4 ore) e da Puno o Cusco passando dal Titicaca; da Uyuni il bus notturno impiega circa 10 ore.",
    comeSpostarsi: 'Mi Teleférico per gli spostamenti lunghi, taxi radio per il resto. Evitare i taxi non ufficiali, soprattutto la sera.',
    periodoMigliore: 'maggio-ottobre, stagione secca; le notti sono fredde tutto l\'anno',
    costi: "Budget basso circa 20-35 € al giorno (ostello, almuerzo nei mercati, teleferica e minibus); medio 50-90 € (hotel a Sopocachi o in centro, ristoranti, taxi radio); alto da 150 € (hotel di design a San Jorge o Calacoto, guida privata, cene curate). Teleferica 3 bolivianos a tratta, meno di mezzo euro, con biglietto a parte a ogni cambio di linea; Valle de la Luna circa 15 bolivianos; Tiwanaku circa 100 bolivianos per gli stranieri; Carretera de la Muerte con pedaggio delle comunità di circa 50 bolivianos, spesso escluso dal prezzo.",
    erroriDaEvitare: [
      'Atterrare a El Alto e programmare qualcosa di impegnativo il giorno stesso: dal livello del mare a 4.000 metri il corpo non si adatta in poche ore',
      'Sottovalutare i blocchi stradali: quando ci sono, possono isolare la città per giorni e far saltare voli e trasferimenti',
      'Girare con oggetti di valore in vista nei mercati affollati',
    ],
    miaEsperienza:
      'Atterrare a El Alto è uno shock fisico che quasi nessuno mette in conto: siamo scesi dall\'aereo a più di quattromila metri e il corpo se n\'è accorto prima ancora di uscire dal terminal. La Paz è la città più strana del continente, costruita dentro una conca con i quartieri poveri in alto e quelli ricchi in basso. È l\'opposto di ogni altra città al mondo, e per una ragione precisa: più si scende, più si respira. Le teleferiche urbane le consiglio a chiunque: costano pochi centesimi e danno la vista migliore sulla conca. Il problema vero della Bolivia sono i blocchi stradali, da mettere in conto nell\'itinerario come un rischio concreto.',
    luoghi: [
      {
        "nome": "Mi Teleférico",
        "testo": "La rete di funivie urbane che collega La Paz a El Alto. È trasporto pubblico e insieme un ottimo punto panoramico sulla conca, soprattutto dalla linea rossa e da quella gialla.",
        "come": "Le stazioni sono in tutta la città; si compra il biglietto alla stazione.",
        "quando": "Al tramonto, quando la conca si illumina.",
        "tempo": "1-2 ore",
        "costo": "3 bolivianos a tratta (meno di 0,50 €), con un nuovo biglietto a ogni cambio di linea",
        "url": "https://www.miteleferico.bo/",
        "lat": -16.49148,
        "lng": -68.14482,
        "consiglio": "Rick le consiglia a chiunque: costano pochissimo e danno la vista migliore sulla conca."
      },
      {
        "nome": "Plaza Murillo",
        "testo": "La piazza del potere, con il Palazzo del Governo, il Parlamento e la cattedrale. È il punto da cui partono le vie coloniali del centro, sempre animata da piccioni, venditori e manifestazioni.",
        "come": "A piedi dal centro, in salita dalla calle Comercio.",
        "quando": "Mattina, quando la piazza è piena di gente del posto.",
        "tempo": "30-45 minuti",
        "lat": -16.49571,
        "lng": -68.13356,
        "consiglio": "Se c'è una manifestazione la polizia chiude gli accessi: si passa più tardi."
      },
      {
        "nome": "Basilica di San Francisco",
        "testo": "La chiesa barocca andina del Settecento, con la facciata in pietra scolpita con piante e figure indigene. Il convento accanto ha un museo e si può salire sui tetti per la vista sulla conca.",
        "come": "In centro, sulla Plaza San Francisco, all'inizio della calle Sagárnaga.",
        "quando": "Mattina o primo pomeriggio.",
        "tempo": "1 ora con il museo e i tetti",
        "lat": -16.49648,
        "lng": -68.13736,
        "consiglio": "Il Mercado de las Brujas è a pochi minuti a piedi in salita: si visitano insieme."
      },
      {
        "nome": "Mercado de las Brujas",
        "testo": "Il mercato delle streghe, con rimedi tradizionali aymara, erbe, amuleti e i feti di lama usati come offerta alla Pachamama.",
        "come": "A piedi dal centro, nella zona di calle Linares.",
        "quando": "Di giorno.",
        "tempo": "1 ora",
        "lat": -16.49624,
        "lng": -68.13915,
        "consiglio": "Chiedi sempre prima di fotografare le persone."
      },
      {
        "nome": "Calle Jaén",
        "testo": "La via coloniale meglio conservata della città, in ciottoli e con case dai balconi colorati, che ospita alcuni piccoli musei municipali.",
        "come": "A piedi dal centro, a nord di Plaza Murillo.",
        "quando": "Di giorno.",
        "tempo": "1 ora",
        "lat": -16.49223,
        "lng": -68.13587,
        "consiglio": "I musei di Jaén hanno spesso un biglietto unico: chiedi al primo che visiti."
      },
      {
        "nome": "Museo Nacional de Etnografía y Folklore (MUSEF)",
        "testo": "In un palazzo coloniale del centro, raccoglie tessuti, maschere delle feste e oggetti delle culture andine e amazzoniche. Le sale delle maschere aiutano a capire carnevali e processioni.",
        "come": "A piedi, a due passi da Plaza Murillo.",
        "quando": "Mattina o pomeriggio nei giorni feriali.",
        "tempo": "1-1,5 ore",
        "lat": -16.49438,
        "lng": -68.13514,
        "consiglio": "Ottimo per un pomeriggio di riposo, quando la quota si fa sentire."
      },
      {
        "nome": "Mirador Killi Killi",
        "testo": "Il belvedere più classico sulla conca, su una collina sopra il centro: si vedono i quartieri che risalgono fino a El Alto e, nelle giornate limpide, l'Illimani.",
        "come": "In taxi dal centro, pochi minuti; a piedi in salita è faticoso.",
        "quando": "Tramonto, poi rientro in taxi.",
        "tempo": "30-45 minuti",
        "lat": -16.49514,
        "lng": -68.12753,
        "consiglio": "Di sera non salire né scendere a piedi: taxi radio in andata e ritorno."
      },
      {
        "nome": "Valle de la Luna",
        "testo": "Formazioni di argilla erosa a pochi chilometri dal centro, con sentieri brevi tra guglie e canyon.",
        "come": "Bus o taxi verso la zona sud di La Paz.",
        "quando": "Mattina, con luce migliore.",
        "tempo": "1-2 ore",
        "costo": "Circa 15 bolivianos (circa 2 €)",
        "lat": -16.56762,
        "lng": -68.09379,
        "consiglio": "A questa quota anche una passeggiata breve stanca: vai piano."
      },
      {
        "nome": "El Alto e le cholitas luchadoras",
        "testo": "La feria 16 de Julio di El Alto (giovedì e domenica) è un enorme mercato popolare. A El Alto si può assistere anche alla lucha libre delle cholitas, le donne aymara in gonna tradizionale.",
        "come": "In teleferica fino a El Alto.",
        "quando": "La feria il giovedì e la domenica; le cholitas luchadoras di solito la domenica pomeriggio al Multifuncional di El Alto, con orari da verificare",
        "tempo": "Mezza giornata",
        "lat": -16.49783,
        "lng": -68.17063,
        "consiglio": "Tieni borse e telefono davanti: il mercato è affollato."
      },
      {
        "nome": "Mercado Rodríguez",
        "testo": "Il mercato alimentare più vivace della città, che riempie diverse vie con banchi di patate, frutta tropicale delle Yungas, formaggi e carni. È il posto dove si vede come mangiano davvero i paceños.",
        "come": "A piedi dal centro, nella zona di San Pedro.",
        "quando": "Sabato e domenica mattina è al massimo.",
        "tempo": "1 ora",
        "lat": -16.50013,
        "lng": -68.13891,
        "consiglio": "Borsa davanti e telefono in tasca: tra i banchi si è stretti."
      },
      {
        "nome": "Carretera de la Muerte",
        "testo": "La vecchia strada per Coroico, con circa 3.500 metri di dislivello in discesa, oggi percorsa in mountain bike. Esperienza di giornata tra nebbia, foresta e gole.",
        "come": "Con un operatore, in mountain bike, con partenza da La Paz al mattino presto e rientro nel tardo pomeriggio.",
        "quando": "Nella stagione secca, e solo dopo essersi acclimatati.",
        "tempo": "Giornata intera",
        "costo": "Tour con bici e guida a prezzo variabile secondo l'operatore; pedaggio delle comunità circa 50 bolivianos, spesso escluso: chiedi prima",
        "lat": -16.29204,
        "lng": -67.80457,
        "consiglio": "Scegli un operatore con bici e freni in buono stato: qui conta più del prezzo."
      },
      {
        "nome": "Chacaltaya",
        "testo": "Era la stazione sciistica più alta del mondo; la cima è a circa 5.400 metri. Il ghiacciaio è scomparso del tutto nel 2009; la zona è vicina allo Huayna Potosí.",
        "come": "Tour di mezza giornata da La Paz.",
        "quando": "Mattina presto.",
        "tempo": "Mezza giornata",
        "lat": -16.34953,
        "lng": -68.12701,
        "consiglio": "Sali solo dopo almeno due giorni a La Paz: la quota è molto alta."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Plaza Murillo, calle Jaén e MUSEF",
          "Basilica di San Francisco e Mercado de las Brujas",
          "Pranzo con salteñas a metà mattina e almuerzo al mercato",
          "Teleferica rossa e gialla al tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: programma da 1 giorno, con calma assoluta",
          "Giorno 2: Valle de la Luna al mattino, poi teleferica fino a El Alto per la feria (giovedì o domenica) e cholitas luchadoras la domenica pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Carretera de la Muerte in bici, solo dopo acclimatamento, oppure Tiwanaku in giornata"
        ]
      }
    ],
    zone: [
      {
        "nome": "Sopocachi",
        "perChi": "Chi cerca ristoranti e vita serale",
        "testo": "Quartiere più curato, a quota più bassa e con bar. A pochi passi dal centro.",
        "fascia": "35-100 €"
      },
      {
        "nome": "San Pedro e centro",
        "perChi": "Chi vuole risparmiare",
        "testo": "Prezzi bassi e comodità alle agenzie, ma più caotico e rumoroso.",
        "fascia": "15-50 €"
      },
      {
        "nome": "Zona Sur (San Miguel, Calacoto)",
        "perChi": "Chi cerca hotel moderni e quota più bassa",
        "testo": "I quartieri benestanti in fondo alla conca, intorno ai 3.300 metri: si respira meglio e ci sono hotel e ristoranti moderni. Per il centro servono teleferica o taxi.",
        "fascia": "50-150 €"
      }
    ],
    sapori: [
      {
        "nome": "Salteñas",
        "testo": "Fagottini al forno ripieni di carne o pollo con sugo. Si mangiano a metà mattina: a colazione non si mangiano."
      },
      {
        "nome": "Api con pastel",
        "testo": "Bevanda calda di mais viola con un pasticcino fritto al formaggio, colazione da strada."
      },
      {
        "nome": "Zuppe dei mercati coperti",
        "testo": "Sostanziose, adatte alla quota."
      },
      {
        "nome": "Cucina curata di Sopocachi",
        "testo": "Il quartiere con l'offerta più elaborata della città."
      }
    ],
    attenzioni: [
      "Arrivare a El Alto, oltre i 4.000 metri, e programmare qualcosa di impegnativo il giorno stesso.",
      "Blocchi stradali: possono isolare la città per giorni e far saltare voli e trasferimenti.",
      "Taxi non ufficiali, soprattutto di sera: usa radio-taxi o app.",
      "Borseggi nei mercati affollati: niente oggetti di valore in vista.",
      "Ricontrolla su Viaggiare Sicuri la situazione politica e sociale prima di partire."
    ],
    gite: [
      {
        "nome": "Tiwanaku",
        "distanza": "circa 1 ora e 30 di strada, 70 km",
        "come": "Tour di un giorno o minibus dal cimitero generale di La Paz.",
        "testo": "Il centro della cultura che dominò l'altopiano prima degli Inca, con la Porta del Sole e la piramide di Akapana. Biglietto unico di circa 100 bolivianos con siti e musei."
      },
      {
        "nome": "Copacabana e Isla del Sol",
        "distanza": "circa 3,5-4 ore di bus",
        "come": "Bus turistico o minibus, con la traversata dello stretto di Tiquina su una barchetta, poi barca per l'isola.",
        "testo": "Il santuario di Copacabana e i sentieri inca dell'Isla del Sol sul lato boliviano del Titicaca. Meglio con almeno una notte sull'isola."
      },
      {
        "nome": "Coroico e le Yungas",
        "distanza": "circa 3 ore di strada, 95 km",
        "come": "Minibus dalla zona di Villa Fátima, o in fondo alla discesa della Carretera de la Muerte.",
        "testo": "Un paese a circa 1.700 metri tra colline di coca, caffè e cascate, con un clima caldo che dopo La Paz sembra un altro paese. Buono per una notte di riposo."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a La Paz?",
        "risposta": "Tre o quattro: uno di solo acclimatamento, uno per centro e teleferiche, uno per la Valle de la Luna e El Alto, uno per la Carretera de la Muerte o Tiwanaku."
      },
      {
        "domanda": "Come si affronta l'altitudine a La Paz?",
        "risposta": "Il primo giorno si cammina poco, si beve molto e si evita l'alcol. Mal di testa e fiato corto sono normali; se i sintomi peggiorano serve un medico."
      },
      {
        "domanda": "Quanto costa la teleferica di La Paz?",
        "risposta": "3 bolivianos a tratta, meno di mezzo euro. A ogni cambio di linea si paga un nuovo biglietto."
      },
      {
        "domanda": "La Paz è sicura?",
        "risposta": "Con le precauzioni normali sì: taxi radio o app invece dei taxi di strada, niente oggetti di valore in vista nei mercati, El Alto di sera non a piedi da soli. Prima di partire conviene controllare Viaggiare Sicuri per blocchi e proteste."
      },
      {
        "domanda": "La Carretera de la Muerte è pericolosa?",
        "risposta": "Oggi le auto usano la strada nuova, ma la discesa in bici resta impegnativa. La differenza la fanno l'operatore e lo stato delle bici e dei freni, più del prezzo."
      },
      {
        "domanda": "Quando ci sono le cholitas luchadoras?",
        "risposta": "Di solito la domenica pomeriggio al Multifuncional di El Alto, con orari da verificare. Molti ci vanno con un tour che include il trasporto."
      }
    ],
    esperienzeSlugs: ['carretera-de-la-muerte'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Il Nevado Illimani innevato che domina la conca di La Paz al tramonto, Bolivia',
    immagine: '/images/bolivia/la-paz.jpg',
  },
  {
    slug: 'salar-de-uyuni',
    paeseSlug: 'bolivia',
    ordine: 2,
    nome: 'Salar de Uyuni e Sud Lípez',
    tipologia: ['natura', 'avventura', 'deserto'],
    giorniConsigliati: '3-4 giorni, il formato del tour classico in 4x4',
    visitataPersonalmente: true,
    introduzione:
      'La distesa di sale più grande del mondo, oltre 10.000 km quadrati a 3.650 metri di quota, e il suo naturale prolungamento verso sud: le lagune colorate, i geyser e i deserti d\'alta quota del Sud Lípez, fino al confine cileno.',
    percheAndarci:
      'Perché non somiglia a nient\'altro, e perché il tour di tre giorni in 4x4 attraversa in sequenza salar, lagune rosse e verdi, geyser a 5.000 metri e terme all\'aperto: difficile trovare tanti paesaggi diversi in così poco spazio.',
    cosaVedere: [
      'Il salar vero e proprio, con i poligoni di sale a perdita d\'occhio',
      'Isla Incahuasi, l\'isola di roccia coperta di cactus giganti in mezzo alla distesa bianca',
      'Il cimitero dei treni, alla periferia di Uyuni',
      'La Laguna Colorada, rossa per le alghe, con migliaia di fenicotteri',
      'I geyser Sol de Mañana, a quasi 5.000 metri, e le terme di Polques',
      'La Laguna Verde ai piedi del vulcano Licancabur',
    ],
    cosaFare: [
      'Tour classico di 3 giorni e 2 notti in 4x4, con rientro a Uyuni o proseguimento verso San Pedro de Atacama in Cile',
      'Le foto prospettiche sul salar, dove la mancanza di riferimenti annulla la percezione della distanza',
      'Notte in un hotel di sale, con pareti e arredi ricavati dai blocchi del salar',
      'Alba sul salar, il momento in cui la luce fa la differenza vera',
    ],
    doveDormire:
      'Uyuni come base di partenza; durante il tour si dorme in alloggi molto essenziali nel Sud Lípez, spesso senza riscaldamento a oltre 4.000 metri.',
    doveMangiare: 'Pasti inclusi nel tour, preparati dall\'autista-cuoco.',
    comeArrivare: "Il volo da La Paz a Uyuni dura circa un'ora ed è la soluzione più comoda. Il bus notturno da La Paz parte di solito tra le 20 e le 21 e arriva all'alba dopo circa 10 ore; i biglietti delle compagnie turistiche si prenotano un giorno o due prima, e di notte fa freddo a bordo. Da Potosí ci sono circa 4 ore di bus, con diverse partenze al giorno. Molti arrivano da San Pedro de Atacama, in Cile, facendo il tour in senso inverso.",
    comeSpostarsi: 'Solo in 4x4 con autista, nell\'ambito del tour organizzato: non è una zona da girare in autonomia.',
    periodoMigliore:
      'Due stagioni, due esperienze diverse. Da maggio a ottobre il salar è asciutto e percorribile per intero, con cieli limpidi e notti gelide. Da gennaio a marzo un velo d\'acqua lo trasforma nello specchio gigante delle fotografie più famose, ma alcune zone, Isla Incahuasi compresa, possono diventare inaccessibili.',
    costi: "Tour condiviso di 3 giorni circa 200-350 dollari a persona secondo agenzia e categoria, con alloggi e pasti. A parte, in contanti: riserva Eduardo Avaroa circa 150 bolivianos (circa 20 €), Isla Incahuasi circa 30 bolivianos (circa 4 €), terme di Polques pochi bolivianos, bagni a pagamento lungo la strada. A Uyuni un giorno costa poco: budget basso circa 20-30 € (ostello e pasti semplici), medio 50-80 € (hotel di sale o in paese).",
    erroriDaEvitare: [
      'Scegliere l\'operatore solo sul prezzo: i mezzi e la manutenzione fanno una differenza reale su piste isolate a 4.500 metri, dove un guasto è un problema serio',
      'Andare a gennaio-marzo aspettandosi di vedere tutto: con l\'acqua l\'effetto specchio è spettacolare ma diverse tappe saltano',
      'Sottovalutare il freddo notturno: negli alloggi del Sud Lípez si dorme sotto zero, e il sacco a pelo non sempre è incluso',
      'Arrivare a Uyuni senza essersi acclimatati: il tour sale fino a quasi 5.000 metri il secondo giorno',
    ],
    miaEsperienza:
      'È l\'unico posto in cui ho perso del tutto il senso della distanza: senza riferimenti non si capisce se una montagna è a cinque chilometri o a cinquanta, ed è per questo che funzionano le foto prospettiche. La parte che mi è rimasta però è il secondo giorno, nel Sud Lípez, più del primo sul sale: lagune rosse piene di fenicotteri oltre i quattromila metri, geyser che sbuffano all\'alba con venti gradi sotto zero, alloggi dove abbiamo dormito vestiti perché non c\'era riscaldamento. È un tour molto più duro di quanto le fotografie lascino immaginare, e l\'unica voce su cui non conviene risparmiare è l\'operatore: lì in mezzo un 4x4 che si rompe è un problema serio.',
    luoghi: [
      {
        "nome": "Il salar di Uyuni",
        "testo": "La distesa di sale più grande del mondo, oltre 10.000 km² a circa 3.650 metri. Senza riferimenti non si capisce se una montagna è a cinque chilometri o a cinquanta, ed è per questo che funzionano le foto prospettiche.",
        "come": "Solo in 4x4 con autista, nell'ambito del tour organizzato, in partenza da Uyuni.",
        "quando": "Nella stagione secca il salar è asciutto e percorribile per intero. Nella stagione delle piogge (circa dicembre-aprile) diventa uno specchio d'acqua, ma alcune tappe saltano.",
        "tempo": "Mezza giornata o un giorno",
        "costo": "Il tour si paga all'agenzia e il prezzo cambia molto tra operatori. A parte, in contanti, l'ingresso alla riserva Eduardo Avaroa e all'Isla Incahuasi: chiedi all'operatore gli importi aggiornati",
        "lat": -20.13377,
        "lng": -67.48913,
        "consiglio": "Per le foto prospettiche porta oggetti di scala piccola e usa la luce dell'alba."
      },
      {
        "nome": "Isla Incahuasi",
        "testo": "L'isola di roccia coperta di cactus giganti in mezzo alla distesa bianca.",
        "come": "Tappa del tour in 4x4 dal salar, con breve sentiero di salita.",
        "quando": "Stagione secca; nella stagione delle piogge può diventare difficile da raggiungere.",
        "tempo": "1-2 ore",
        "costo": "Circa 30 bolivianos (circa 4 €), in contanti",
        "lat": -20.24278,
        "lng": -67.62528,
        "consiglio": "Il sentiero dà la vista migliore sul salar da una quota rialzata."
      },
      {
        "nome": "Colchani",
        "testo": "Il villaggio all'ingresso del salar dove si estrae e si lavora il sale: piccole cooperative lo seccano, lo iodano e lo confezionano a mano. Ci sono anche bancarelle di oggetti in sale e lana.",
        "come": "Prima tappa del tour in 4x4, a circa 20 km da Uyuni.",
        "quando": "Mattina, il primo giorno del tour.",
        "tempo": "30-45 minuti",
        "lat": -20.30061,
        "lng": -66.93782,
        "consiglio": "Qui si comprano gli ultimi snack e acqua prima del salar."
      },
      {
        "nome": "Cimitero dei treni",
        "testo": "Locomotive e vagoni abbandonati alla periferia di Uyuni, ricordo della rete ferroviaria mineraria.",
        "come": "In taxi dal paese o all'inizio del tour.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "costo": "Gratuito",
        "lat": -20.48079,
        "lng": -66.83688,
        "consiglio": "Fai attenzione alle parti metalliche arrugginite."
      },
      {
        "nome": "Laguna Hedionda",
        "testo": "Una delle lagune d'alta quota del Sud Lípez, dall'odore di zolfo che le dà il nome, con fenicotteri andini e di James che si nutrono vicino alla riva.",
        "come": "Tappa del secondo giorno del tour in 4x4.",
        "quando": "Mezzogiorno, durante la sosta per il pranzo.",
        "tempo": "30-45 minuti",
        "lat": -21.5667,
        "lng": -68.05,
        "consiglio": "Avvicinati ai fenicotteri piano e senza uscire dal bordo: si allontanano subito."
      },
      {
        "nome": "Árbol de Piedra",
        "testo": "Una roccia vulcanica modellata dal vento a forma di albero, nel deserto di Siloli, a circa 4.500 metri, tra altri blocchi erosi in forme strane.",
        "come": "Tappa del secondo giorno del tour, prima della Laguna Colorada.",
        "quando": "Pomeriggio, col vento che sale.",
        "tempo": "20-30 minuti",
        "lat": -22.05167,
        "lng": -67.88333,
        "consiglio": "Non si sale sulla roccia: è vietato e fragile."
      },
      {
        "nome": "Laguna Colorada",
        "testo": "Laguna rossa per i sedimenti e le alghe, con molti fenicotteri, nel Sud Lípez.",
        "come": "Tappa del secondo giorno del tour in 4x4.",
        "quando": "Mattina presto.",
        "tempo": "1-2 ore",
        "costo": "Nella riserva Eduardo Avaroa: circa 150 bolivianos in contanti all'ingresso del parco",
        "lat": -22.19861,
        "lng": -67.78111,
        "consiglio": "Il secondo giorno nel Sud Lípez è quello che a Rick è rimasto più impresso, più del sale: lagune rosse piene di fenicotteri oltre i quattromila metri."
      },
      {
        "nome": "Geyser Sol de Mañana e terme di Polques",
        "testo": "Geyser a circa 4.900 metri che sbuffano all'alba e, lungo lo stesso percorso, le terme all'aperto di Polques, a circa 4.400 metri, con acqua intorno ai 29 °C.",
        "come": "Tappe del tour in 4x4.",
        "quando": "All'alba, con temperature sotto zero.",
        "tempo": "1-2 ore",
        "costo": "Geyser nella riserva Eduardo Avaroa; terme di Polques con ingresso a parte di pochi bolivianos",
        "lat": -22.42639,
        "lng": -67.75972,
        "consiglio": "Vestiti a strati: l'alba ai geyser è tra le ore più fredde del viaggio."
      },
      {
        "nome": "Desierto de Dalí",
        "testo": "Un deserto di sabbia color ocra con rocce sparse che sembrano poggiate a caso, come nei quadri di Salvador Dalí, sulla strada per la Laguna Verde.",
        "come": "Tappa del terzo giorno del tour nella riserva Eduardo Avaroa.",
        "quando": "Mattina presto, il terzo giorno.",
        "tempo": "15-20 minuti",
        "lat": -22.615,
        "lng": -67.66361,
        "consiglio": "Si guarda dal mezzo o a pochi passi dalla pista: fuori dalla pista le tracce dei 4x4 restano per anni."
      },
      {
        "nome": "Laguna Verde",
        "testo": "Laguna dell'estremo sud-ovest, ai piedi del vulcano Licancabur, vicino al confine con il Cile.",
        "come": "Ultima tappa del tour in 4x4 prima di San Pedro de Atacama.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "costo": "Nella riserva Eduardo Avaroa (circa 150 bolivianos)",
        "lat": -22.795,
        "lng": -67.825,
        "consiglio": "Chi prosegue per il Cile passa il confine da qui."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: cimitero dei treni e Colchani",
          "Mezzogiorno: salar e Isla Incahuasi",
          "Tramonto sul salar e rientro a Uyuni"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: cimitero dei treni, Colchani, salar e Isla Incahuasi, notte in un hotel di sale",
          "Giorno 2: alba sul salar e rientro a Uyuni, oppure bus per Potosí"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: cimitero dei treni, Colchani, salar, Isla Incahuasi, notte in un hotel di sale",
          "Giorno 2: lagune del Sud Lípez con la Laguna Hedionda, Árbol de Piedra, Laguna Colorada",
          "Giorno 3: geyser Sol de Mañana all'alba, terme di Polques, Desierto de Dalí, Laguna Verde, rientro a Uyuni o proseguimento per San Pedro de Atacama"
        ]
      }
    ],
    zone: [
      {
        "nome": "Uyuni",
        "perChi": "Chi parte per il tour",
        "testo": "Base di partenza, paese semplice con agenzie.",
        "fascia": "25-80 €"
      },
      {
        "nome": "Alloggi del Sud Lípez",
        "perChi": "Chi fa il tour di 3 giorni",
        "testo": "Molto essenziali, spesso senza riscaldamento ad alta quota. Si dorme sotto zero.",
        "fascia": "Incluso nel tour"
      },
      {
        "nome": "Hotel di sale",
        "perChi": "Chi cerca esperienza particolare",
        "testo": "Pareti e arredi ricavati dai blocchi del salar.",
        "fascia": "60-200 €"
      }
    ],
    sapori: [
      {
        "nome": "Pasti del tour",
        "testo": "Preparati dall'autista-cuoco: zuppe, riso, carne."
      },
      {
        "nome": "Quinoa",
        "testo": "Coltivata nella zona, in zuppe e piatti locali."
      },
      {
        "nome": "Carne di lama",
        "testo": "Spesso nei piatti dei ristoranti di Uyuni."
      }
    ],
    attenzioni: [
      "Scegliere l'operatore solo sul prezzo: i mezzi e la manutenzione fanno una differenza reale su piste d'alta quota.",
      "Freddo notturno sotto zero: il sacco a pelo non sempre è incluso.",
      "Arrivare a Uyuni senza essersi acclimatati: il secondo giorno si sale quasi a 5.000 metri.",
      "Stagione delle piogge (circa dicembre-aprile): effetto specchio, ma diverse tappe saltano."
    ],
    gite: [
      {
        "nome": "San Pedro de Atacama (Cile)",
        "distanza": "fine del tour di 3 giorni, circa 1 ora dalla Laguna Verde",
        "come": "Transfer dal confine di Hito Cajón, organizzato dall'agenzia del tour.",
        "testo": "Il tour può finire in Cile invece di tornare a Uyuni: si prosegue verso il deserto di Atacama senza rifare la strada. Va detto all'agenzia al momento della prenotazione."
      },
      {
        "nome": "Potosí",
        "distanza": "circa 4 ore di bus",
        "come": "Bus da Uyuni, con diverse partenze al giorno.",
        "testo": "La città d'argento del Cerro Rico, a oltre 4.000 metri, con la Casa de la Moneda e le miniere delle cooperative. Strada naturale verso Sucre."
      },
      {
        "nome": "Pulacayo",
        "distanza": "circa 30 minuti, 20 km",
        "come": "Taxi o tour da Uyuni.",
        "testo": "Un villaggio minerario quasi abbandonato con vecchie locomotive e il treno che secondo la tradizione fu assaltato da Butch Cassidy. Meno affollato del cimitero dei treni."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono per il Salar de Uyuni?",
        "risposta": "Il salar si vede in un giorno, ma il tour di 3 giorni nel Sud Lípez è quello che vale il viaggio: lagune, geyser e deserti d'alta quota."
      },
      {
        "domanda": "Quando si vede l'effetto specchio?",
        "risposta": "Da gennaio a marzo, quando un velo d'acqua copre il sale. In quei mesi alcune zone, Isla Incahuasi compresa, possono diventare inaccessibili."
      },
      {
        "domanda": "Quanto costa il tour di 3 giorni?",
        "risposta": "Circa 200-350 dollari a persona secondo agenzia e categoria. A parte, in contanti, la riserva Eduardo Avaroa (circa 150 bolivianos) e Isla Incahuasi (circa 30)."
      },
      {
        "domanda": "Come si sceglie l'agenzia a Uyuni?",
        "risposta": "Si guarda prima lo stato del 4x4: cinture, gomme e ruota di scorta. Poi recensioni recenti, sacco a pelo incluso e ossigeno a bordo."
      },
      {
        "domanda": "Fa freddo durante il tour?",
        "risposta": "Sì, molto: negli alloggi del Sud Lípez la notte si scende sotto zero e non c'è riscaldamento. All'alba ai geyser si arriva a venti gradi sotto zero."
      },
      {
        "domanda": "Si può finire il tour in Cile?",
        "risposta": "Sì, l'ultimo giorno l'agenzia porta al confine di Hito Cajón e un transfer prosegue per San Pedro de Atacama. Va chiesto al momento della prenotazione."
      }
    ],
    esperienzeSlugs: ['tour-uyuni-sud-lipez'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Fuoristrada sulla distesa bianca del Salar de Uyuni sotto un cielo blu, Bolivia',
    immagine: '/images/bolivia/salar-de-uyuni.jpg',
  },
  {
    slug: 'titicaca-boliviano',
    paeseSlug: 'bolivia',
    ordine: 3,
    nome: 'Copacabana e Isla del Sol',
    tipologia: ['natura', 'cultura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il lato boliviano del Titicaca: Copacabana, paese di pellegrinaggio affacciato sul lago, e l\'Isla del Sol, dove secondo la tradizione inca nacquero il sole e il primo Inca. È anche la via naturale per entrare in Bolivia dal Perù.',
    percheAndarci:
      'Perché l\'Isla del Sol è più bella e meno costruita delle isole peruviane, con sentieri panoramici tra rovine inca e terrazzamenti, e perché il passaggio di frontiera da Puno è tra i più semplici del continente.',
    cosaVedere: [
      'La Basilica di Copacabana, meta di pellegrinaggio con la Virgen de la Candelaria',
      'Il Cerro Calvario, la collina sopra il paese, per il tramonto sul lago',
      'Le rovine di Chincana e la Roca Sagrada, sull\'estremità nord dell\'Isla del Sol',
      'Il sentiero che percorre la dorsale dell\'isola da nord a sud',
      'Le rovine di Tiwanaku, sulla strada verso La Paz, capitale di una civiltà precedente agli Inca',
    ],
    cosaFare: [
      'Dormire una notte sull\'Isla del Sol, invece di visitarla in giornata: al tramonto e all\'alba resta quasi deserta',
      'Camminare lungo la dorsale dell\'isola, tra terrazzamenti e rovine',
      'Attraversare il confine da Puno via Kasani/Yunguyo, con i timbri di uscita e ingresso da fare a piedi',
    ],
    doveDormire: 'Copacabana per la comodità dei collegamenti; l\'Isla del Sol per la notte più suggestiva, in strutture semplici e senza riscaldamento.',
    doveMangiare: 'Trucha (trota del lago) quasi ovunque, sul lungolago di Copacabana.',
    comeArrivare:
      'Bus da Puno (Perù) con passaggio alla frontiera di Kasani, circa 3-4 ore in totale; da La Paz circa 4 ore, con la traversata dello stretto di Tiquina su chiatta.',
    comeSpostarsi: 'Barche collettive da Copacabana per l\'Isla del Sol; sull\'isola non ci sono veicoli: si cammina, sempre in salita.',
    periodoMigliore: 'maggio-ottobre per il sole; a 3.800 metri le notti sono fredde tutto l\'anno',
    costi: 'molto economico: barca per l\'isola pochi dollari, più piccole tasse d\'ingresso riscosse dalle comunità locali',
    erroriDaEvitare: [
      'Programmare l\'Isla del Sol in giornata da Copacabana: gli orari delle barche lasciano poche ore utili e si perde la parte migliore',
      'Dare per scontato l\'accesso a tutta l\'isola: tensioni tra le comunità hanno a tratti limitato il passaggio verso la parte nord, quindi conviene chiedere sul posto',
      'Sottovalutare la quota: si cammina in salita a quasi 4.000 metri',
    ],
    miaEsperienza:
      'Il lato boliviano del lago è parecchio più bello di quello peruviano. Copacabana è un paese di pellegrinaggio un po\' scalcinato ma con un\'anima, e l\'Isla del Sol per me batte le isole di Puno: terrazzamenti, sentieri in pietra, nessuna macchina e nessuna organizzazione turistica pesante. Dormirci una notte cambia tutto, perché le barche in giornata arrivano e ripartono tutte insieme, e appena se ne vanno l\'isola torna silenziosa. Va solo messo in conto che si cammina sempre in salita a quasi quattromila metri, con lo zaino, e fa fatica.',
    luoghi: [
      {
        "nome": "Basilica di Copacabana",
        "testo": "Meta di pellegrinaggio dedicata alla Virgen de Copacabana, in un paese un po' scalcinato ma con un'anima.",
        "come": "A piedi dal lungolago.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "consiglio": "Copacabana è la via naturale d'ingresso dal Perù."
      },
      {
        "nome": "Cerro Calvario",
        "testo": "La collina sopra il paese, per il tramonto sul lago.",
        "come": "A piedi dal centro, con una salita breve ma ripida.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "consiglio": "A circa 3.800 metri la salita stanca: vai piano."
      },
      {
        "nome": "Isla del Sol: Chincana e Roca Sagrada",
        "testo": "Le rovine di Chincana e la Roca Sagrada, sull'estremità nord dell'isola dove secondo la tradizione nacquero il sole e il primo Inca.",
        "come": "Barca collettiva da Copacabana. Sull'isola non ci sono veicoli a motore né strade asfaltate.",
        "quando": "Mattina e tramonto.",
        "tempo": "Mezza giornata",
        "costo": "Barca e piccole tasse d'ingresso riscosse dalle comunità: tieni contanti",
        "consiglio": "Chiedi sul posto se il passaggio verso la parte nord è aperto: tensioni tra le comunità lo hanno a tratti limitato."
      },
      {
        "nome": "Il sentiero della dorsale dell'Isla del Sol",
        "testo": "Il sentiero che percorre la dorsale dell'isola da nord a sud tra terrazzamenti e rovine.",
        "come": "A piedi, sempre in salita e in alta quota.",
        "quando": "Mattina e tramonto.",
        "tempo": "3-4 ore",
        "consiglio": "Dormire una notte sull'isola cambia tutto: le barche in giornata arrivano e ripartono tutte insieme, e poi l'isola torna silenziosa."
      },
      {
        "nome": "Tiwanaku",
        "testo": "Le rovine di una civiltà precedente agli Inca, sulla strada verso La Paz.",
        "come": "Con tour o taxi dalla strada per La Paz.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "consiglio": "Si combina con il rientro a La Paz."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Copacabana, Cerro Calvario al tramonto",
          "Giorno 2: barca per l'Isla del Sol, sentiero della dorsale"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Copacabana",
          "Giorno 2: Isla del Sol, notte sull'isola",
          "Giorno 3: alba sull'isola e rientro a Copacabana, poi La Paz"
        ]
      }
    ],
    zone: [
      {
        "nome": "Copacabana",
        "perChi": "Chi cerca collegamenti e comodità",
        "testo": "Più comoda per i trasporti. Notti fredde in quota."
      },
      {
        "nome": "Isla del Sol",
        "perChi": "Chi cerca la notte più suggestiva",
        "testo": "Strutture semplici e senza riscaldamento. Tutto in salita."
      }
    ],
    sapori: [
      {
        "nome": "Trucha del lago",
        "testo": "Trota quasi ovunque, sul lungolago di Copacabana."
      },
      {
        "nome": "Pejerrey",
        "testo": "Pesce del lago, fritto."
      },
      {
        "nome": "Quinoa e chuño",
        "testo": "Cucina andina semplice nei piccoli locali."
      }
    ],
    attenzioni: [
      "Programmare l'Isla del Sol in giornata: si perde la parte migliore.",
      "Accesso a tutta l'isola non garantito: chiedi sul posto.",
      "Sottovalutare la quota: si cammina in salita in alta quota.",
      "Frontiera di Kasani/Yunguyo: orari e formalità cambiano, ricontrollali prima di partire."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Terrazzamenti e sentieri dell\'Isla del Sol con pecore al pascolo sul lago Titicaca, Bolivia',
    immagine: '/images/bolivia/titicaca-boliviano.jpg',
  },
  {
    slug: 'sucre-potosi',
    paeseSlug: 'bolivia',
    ordine: 4,
    nome: 'Sucre e Potosí',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '3-4 giorni per entrambe',
    visitataPersonalmente: true,
    introduzione:
      'Sucre è la capitale costituzionale, città coloniale bianca Patrimonio UNESCO a 2.800 metri, la quota più gentile della Bolivia. Potosí, a 4.000 metri, è la città che con l\'argento del suo Cerro Rico ha finanziato per secoli l\'impero spagnolo, al costo di un numero enorme di vite.',
    percheAndarci:
      'Per il contrasto: Sucre è la Bolivia più dolce, con il clima migliore e le migliori scuole di spagnolo del paese; Potosí è la sua storia più dura, ancora visibile ogni giorno nelle gallerie in attività.',
    cosaVedere: [
      'Il centro coloniale di Sucre, con la Casa de la Libertad dove fu firmata l\'indipendenza',
      'Il Parque Cretácico di Sucre, una parete verticale con migliaia di impronte di dinosauro',
      'La Casa Nacional de la Moneda a Potosí, l\'antica zecca coloniale',
      'Il Cerro Rico, la montagna d\'argento che domina Potosí',
      'Le lagune e i villaggi tessili intorno a Sucre, come Tarabuco con il suo mercato domenicale',
    ],
    cosaFare: [
      'Corso di spagnolo a Sucre, tra i più economici e apprezzati del Sud America',
      'Visita alle miniere cooperative del Cerro Rico, un\'esperienza forte e discussa (vedi la scheda esperienza dedicata)',
      'Mercato di Tarabuco la domenica, per i tessuti yampara',
    ],
    doveDormire: 'Centro storico di Sucre, la città più piacevole in cui fermarsi qualche giorno in tutta la Bolivia.',
    doveMangiare:
      'Sucre ha la migliore qualità della vita del paese e nei mercati coperti si mangia bene spendendo pochissimo, dove il banco dei succhi di frutta è un\'istituzione. A Potosí l\'offerta è più essenziale: zuppe sostanziose, adatte ai quattromila metri.',
    comeArrivare: "Il volo La Paz-Sucre dura circa un'ora; l'aeroporto Alcantarí è a circa 30 km dal centro, 40 minuti di taxi o navetta. Il bus notturno da La Paz impiega circa 12-14 ore. Tra Potosí e Sucre ci sono circa 3 ore di strada in bus o in taxi condiviso dal terminal; Uyuni-Potosí circa 4 ore di bus. A Potosí si arriva a oltre 4.000 metri: chi viene da Sucre fa bene a passarci almeno una notte senza sforzi.",
    comeSpostarsi: 'Entrambe le città si girano a piedi; bus frequenti tra le due.',
    periodoMigliore: 'maggio-ottobre; Sucre ha il clima più mite del paese grazie alla quota più bassa',
    costi: "Tra le zone più economiche del continente: budget basso circa 20-30 € al giorno (ostello, almuerzo al Mercado Central per pochi bolivianos); medio 45-80 € (hotel nel centro coloniale, ristoranti, visite guidate); alto da 120 € (hotel in casona storica, guide private). Parque Cretácico circa 30 bolivianos con guida; Casa de la Moneda circa 40 bolivianos, solo con guida; visita alle miniere circa 100-150 bolivianos con guida in spagnolo, 150-250 con guida in inglese.",
    erroriDaEvitare: [
      'Passare da Potosí senza mettere in conto la quota: a 4.000 metri anche camminare in centro è faticoso',
      'Trattare la visita alle miniere come un\'attrazione turistica qualunque: è un luogo di lavoro reale, con condizioni durissime',
    ],
    miaEsperienza:
      'Sucre è il posto dove mi è venuta voglia di fermarmi più a lungo: duemilaottocento metri invece di quattromila, clima mite, una città bianca e ordinata dove finalmente si respira e si dorme. Potosí è l\'opposto, e non solo per la quota. Entrare nelle gallerie del Cerro Rico è stata l\'esperienza più pesante di tutto il viaggio, pericolosa in sé no, ma difficile da digerire: abbiamo camminato piegati in cunicoli caldi e polverosi accanto a uomini che ci passano dieci ore al giorno con strumenti di un altro secolo. Va trattata con il rispetto che si deve a un luogo di lavoro. Ne siamo usciti zitti, e forse è giusto così.',
    luoghi: [
      {
        "nome": "Centro coloniale di Sucre e Casa de la Libertad",
        "testo": "La capitale costituzionale, città coloniale bianca patrimonio UNESCO, a circa 2.800 metri, più in basso di La Paz. Nella Casa de la Libertad fu fondata la repubblica.",
        "come": "A piedi dal centro.",
        "quando": "Di giorno.",
        "tempo": "Mezza giornata",
        "orari": "Visita guidata a turni: orari da verificare sul posto",
        "lat": -19.04745,
        "lng": -65.26019,
        "consiglio": "Sucre è il posto dove a Rick è venuta voglia di fermarsi più a lungo: quota più mite, clima gentile."
      },
      {
        "nome": "Plaza 25 de Mayo e cattedrale di Sucre",
        "testo": "La piazza principale, con palme, panchine e i palazzi bianchi del governo regionale intorno. La cattedrale metropolitana custodisce la Virgen de Guadalupe, patrona della città, coperta di gioielli.",
        "come": "A piedi dal centro storico.",
        "quando": "Sera, quando la piazza si riempie di famiglie.",
        "tempo": "1 ora",
        "lat": -19.04788,
        "lng": -65.25951,
        "consiglio": "La Casa de la Libertad è sulla stessa piazza: si visitano insieme."
      },
      {
        "nome": "Mirador della Recoleta",
        "testo": "Una piazza porticata in cima a una collina sopra il centro, davanti al convento francescano della Recoleta, con tutta la città bianca ai piedi.",
        "come": "Circa 20 minuti a piedi in salita dalla piazza principale.",
        "quando": "Tramonto.",
        "tempo": "1 ora",
        "lat": -19.05528,
        "lng": -65.25363,
        "consiglio": "Il caffè sotto i portici è il posto giusto per aspettare la luce del tramonto."
      },
      {
        "nome": "Parque Cretácico",
        "testo": "Una parete quasi verticale con migliaia di impronte di dinosauro (oltre 12.000 censite), in una cava poco fuori Sucre.",
        "come": "Circa 25 minuti dal centro in bus turistico o taxi.",
        "quando": "Mattina.",
        "tempo": "2 ore",
        "costo": "Circa 30 bolivianos (circa 4 €) con la guida",
        "lat": -19.00046,
        "lng": -65.23743,
        "consiglio": "Porta scarpe comode e un cappello: si visita all'aperto."
      },
      {
        "nome": "Mercado Central di Sucre",
        "testo": "Il mercato coperto a due isolati dalla piazza: banchi di frutta, succhi frullati al momento e, al piano di sopra, cucine dove si pranza come i sucrensi.",
        "come": "A piedi dal centro.",
        "quando": "Mattina per i succhi, mezzogiorno per l'almuerzo.",
        "tempo": "1 ora",
        "costo": "Pranzo completo per pochi bolivianos",
        "lat": -19.04508,
        "lng": -65.25913,
        "consiglio": "Prova il succo misto ai banchi del piano terra: te lo riempiono due volte."
      },
      {
        "nome": "Museo de Arte Indígena ASUR",
        "testo": "Il museo dei tessuti jalq'a e tarabuco, con una sezione dove le tessitrici lavorano davanti ai visitatori. Spiega i simboli che si ritrovano poi al mercato di Tarabuco.",
        "come": "A piedi dal centro, vicino alla Recoleta.",
        "quando": "Prima di andare a Tarabuco.",
        "tempo": "1 ora",
        "lat": -19.05385,
        "lng": -65.25379,
        "consiglio": "Il negozio del museo vende tessuti delle comunità a prezzi giusti, con una quota per le tessitrici."
      },
      {
        "nome": "Mercato di Tarabuco",
        "testo": "Villaggio tessile vicino a Sucre, con il mercato domenicale e i tessuti yampara.",
        "come": "In collettivo o tour da Sucre.",
        "quando": "Solo la domenica mattina",
        "tempo": "Mezza giornata",
        "lat": -19.1824,
        "lng": -64.91499,
        "consiglio": "Contratta sui prezzi."
      },
      {
        "nome": "Convento di San Felipe Neri",
        "testo": "Un convento del Settecento con un chiostro bianco e i tetti di tegole calpestabili, da cui si vede il centro e la Recoleta.",
        "come": "A piedi dal centro; l'ingresso è dalla scuola che occupa l'edificio.",
        "quando": "Pomeriggio.",
        "tempo": "45 minuti",
        "lat": -19.05005,
        "lng": -65.26132,
        "consiglio": "Gli orari seguono quelli della scuola: meglio chiedere sul posto."
      },
      {
        "nome": "Castillo de la Glorieta",
        "testo": "Un palazzo eclettico di fine Ottocento, con torri e stili mescolati, costruito per una coppia di aristocratici sucrensi alla periferia sud della città.",
        "come": "Circa 15-20 minuti di taxi o micro dal centro.",
        "quando": "Mattina.",
        "tempo": "1-1,5 ore",
        "lat": -19.08603,
        "lng": -65.26781,
        "consiglio": "Si combina con il Parque Cretácico nella stessa mattina, in taxi."
      },
      {
        "nome": "Corso di spagnolo a Sucre",
        "testo": "Nel centro di Sucre ci sono diverse scuole di spagnolo, comode per chi si ferma qualche settimana.",
        "come": "Scuole nel centro di Sucre; prenota prima.",
        "quando": "Tutto l'anno.",
        "tempo": "Da pochi giorni a settimane",
        "consiglio": "Prezzi e formule cambiano da scuola a scuola: confronta prima di prenotare."
      },
      {
        "nome": "Miniere del Cerro Rico",
        "testo": "La montagna d'argento che domina Potosí: tra Cinquecento e Settecento ne uscì gran parte dell'argento del mondo, e Potosí divenne una delle città più grandi del Nuovo Mondo. Si entra nelle gallerie delle cooperative minerarie ancora attive con casco e lampada.",
        "come": "Con un'agenzia di Potosí, preferendo quelle gestite da ex minatori.",
        "quando": "Nei giorni lavorativi, quando le cooperative sono in attività.",
        "tempo": "Mezza giornata",
        "costo": "Circa 100-150 bolivianos con guida in spagnolo, 150-250 con guida in inglese, con attrezzatura e trasporto",
        "lat": -19.61944,
        "lng": -65.74978,
        "consiglio": "Per Rick è stata l'esperienza più pesante del viaggio: cunicoli caldi e polverosi accanto a uomini che ci passano dieci ore al giorno. Sconsigliata a chi soffre di claustrofobia."
      },
      {
        "nome": "Casa Nacional de la Moneda (Potosí)",
        "testo": "L'antica zecca coloniale, dove si coniava l'argento del Cerro Rico.",
        "come": "A piedi dal centro di Potosí.",
        "quando": "Mattina.",
        "tempo": "1-2 ore",
        "costo": "Circa 40 bolivianos (circa 5 €), solo con guida",
        "orari": "Visite a turni guidati; dal 2026 l'edificio è interessato da lavori di restauro: verifica i turni prima",
        "lat": -19.58824,
        "lng": -65.75415,
        "consiglio": "A oltre 4.000 metri anche camminare in centro è faticoso."
      },
      {
        "nome": "Convento di Santa Teresa (Potosí)",
        "testo": "Un convento di carmelitane del Seicento, oggi museo, con dipinti coloniali, oggetti di vita claustrale e la storia delle ragazze ricche che entravano qui a quindici anni.",
        "come": "A piedi dal centro di Potosí.",
        "quando": "Pomeriggio, dopo la miniera.",
        "tempo": "1-1,5 ore, visita guidata",
        "lat": -19.58891,
        "lng": -65.75716,
        "consiglio": "La visita è guidata a turni: chiedi l'orario al mattino."
      },
      {
        "nome": "Torre della Compañía de Jesús (Potosí)",
        "testo": "Il campanile barocco della vecchia chiesa dei gesuiti, scolpito in pietra con figure andine, oggi sede dell'ufficio turistico. Dalla cima si vedono i tetti di Potosí e il Cerro Rico.",
        "come": "In centro, a pochi passi dalla piazza.",
        "quando": "Mattina limpida.",
        "tempo": "30 minuti",
        "lat": -19.58891,
        "lng": -65.7548,
        "consiglio": "Scale strette e quota sopra i 4.000 metri: sali piano."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno a Sucre",
        "tappe": [
          "Mattina: Plaza 25 de Mayo, cattedrale e Casa de la Libertad",
          "Pranzo al Mercado Central",
          "Pomeriggio: Parque Cretácico",
          "Tramonto al Mirador della Recoleta"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Sucre come nel programma da 1 giorno",
          "Giorno 2: Potosí, Casa de la Moneda e Torre della Compañía, notte in città"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Sucre, centro e Recoleta",
          "Giorno 2: Tarabuco se è domenica, oppure Museo ASUR, San Felipe Neri e Castillo de la Glorieta",
          "Giorno 3: bus per Potosí, Casa de la Moneda e Santa Teresa; il giorno dopo le miniere del Cerro Rico"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico di Sucre",
        "perChi": "Chi si ferma qualche giorno",
        "testo": "Una città piacevole dove fermarsi qualche giorno.",
        "fascia": "25-90 €"
      },
      {
        "nome": "Centro di Potosí",
        "perChi": "Chi visita le miniere",
        "testo": "Sistemazioni essenziali in alta quota. Notti fredde.",
        "fascia": "20-60 €"
      },
      {
        "nome": "Recoleta e dintorni (Sucre)",
        "perChi": "Chi cerca calma e vista",
        "testo": "Strade in salita sopra il centro, più silenziose, con qualche ostello e pousada con terrazza. Si scende in piazza in 15-20 minuti.",
        "fascia": "20-60 €"
      }
    ],
    sapori: [
      {
        "nome": "Mercati coperti di Sucre",
        "testo": "Si mangia bene spendendo pochissimo; il banco dei succhi è un'istituzione."
      },
      {
        "nome": "Chorizos chuquisaqueños",
        "testo": "Salsicce speziate tipiche di Sucre."
      },
      {
        "nome": "Zuppe di Potosí",
        "testo": "Sostanziose, adatte alla quota."
      }
    ],
    attenzioni: [
      "A Potosí la quota (oltre 4.000 metri) pesa: anche camminare in centro stanca.",
      "Le miniere sono un luogo di lavoro, non un'attrazione qualunque: condizioni durissime.",
      "Porta un piccolo dono ai minatori (foglie di coca, bibite) comprato al mercato dei minatori.",
      "Blocchi stradali: possono bloccare i collegamenti per giorni."
    ],
    gite: [
      {
        "nome": "Tarabuco",
        "distanza": "circa 1 ora e 30, 65 km da Sucre",
        "come": "Colectivo o tour dal centro di Sucre, la domenica mattina.",
        "testo": "Il mercato domenicale dei tessuti yampara, con le comunità che scendono in paese con i costumi tradizionali."
      },
      {
        "nome": "Cratere di Maragua",
        "distanza": "circa 2-3 ore di strada da Sucre",
        "come": "Trek di 2-3 giorni con guida o tour in giornata.",
        "testo": "Una conca di rocce rosse e viola piegate a onde, con villaggi jalq'a, impronte di dinosauro e sentieri lontani da tutto."
      },
      {
        "nome": "Ojo del Inca (Potosí)",
        "distanza": "circa 30 minuti da Potosí",
        "come": "Taxi o micro da Potosí verso Tarapaya.",
        "testo": "Una piscina termale naturale e circolare in un cratere, con acqua intorno ai 30 °C. Un bagno caldo dopo le miniere."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono tra Sucre e Potosí?",
        "risposta": "Almeno tre: due a Sucre e uno a Potosí con le miniere. Chi vuole riposare dalla quota resta a Sucre anche una settimana."
      },
      {
        "domanda": "Meglio dormire a Sucre o a Potosí?",
        "risposta": "Sucre, a circa 2.800 metri, è più comoda e piacevole; Potosí, a oltre 4.000, merita una notte per la Casa de la Moneda e le miniere senza correre."
      },
      {
        "domanda": "La visita alle miniere del Cerro Rico è etica?",
        "risposta": "Dipende dall'agenzia: meglio quelle gestite da ex minatori, che rispettano il lavoro nelle gallerie. Le dimostrazioni con la dinamite sono illegali e pericolose, vanno rifiutate."
      },
      {
        "domanda": "Quanto costa entrare nelle miniere?",
        "risposta": "Circa 100-150 bolivianos con guida in spagnolo e 150-250 con guida in inglese, con attrezzatura e trasporto. È consigliata una mascherina per la polvere."
      },
      {
        "domanda": "Quando c'è il mercato di Tarabuco?",
        "risposta": "Solo la domenica mattina. I colectivos e i tour partono presto dal centro di Sucre."
      },
      {
        "domanda": "Sucre è adatta per un corso di spagnolo?",
        "risposta": "Sì, è una delle città più scelte del continente: scuole in centro, costi bassi e clima mite. Prezzi e formule cambiano da scuola a scuola."
      }
    ],
    esperienzeSlugs: ['miniere-cerro-rico'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Il Cerro Rico che domina i tetti di tegole rosse di Potosí, Bolivia',
    immagine: '/images/bolivia/sucre-potosi.jpg',
  },
  {
    slug: 'rurrenabaque-madidi',
    paeseSlug: 'bolivia',
    ordine: 5,
    nome: 'Rurrenabaque e il Madidi',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '4-5 giorni, per fare sia pampas sia giungla',
    visitataPersonalmente: true,
    introduzione:
      'L\'Amazzonia boliviana, molto meno battuta e parecchio più economica di quella peruviana o brasiliana. Da Rurrenabaque si parte in due direzioni opposte: le pampas del Yacuma, praterie allagate dove la fauna si vede facilmente, o la foresta primaria del Parco Nazionale Madidi.',
    percheAndarci:
      'Perché è forse il modo più economico al mondo di entrare in Amazzonia, e perché il Madidi è una delle aree protette con la maggiore biodiversità del pianeta.',
    cosaVedere: [
      'I caimani, i capibara e le scimmie lungo il Rio Yacuma, nelle pampas',
      'I delfini rosa di fiume, che nelle pampas si avvicinano alle barche',
      'La foresta primaria del Madidi, con alberi enormi e fauna più difficile da avvistare ma più autentica',
      'I tramonti sulle praterie allagate, il momento migliore della giornata',
    ],
    cosaFare: [
      'Tour di 3 giorni nelle pampas: navigazione, avvistamento fauna, pesca ai piranha e ricerca notturna dei caimani',
      'Tour nella giungla del Madidi, con camminate guidate e notti in lodge nella foresta',
      'Nuotare con i delfini rosa dove le guide lo consentono',
    ],
    confronti: [
      {
        titolo: 'Pampas o giungla? Le due Amazzonie di Rurrenabaque',
        introduzione:
          'Da Rurrenabaque si sceglie tra due ambienti del tutto diversi, e chi ha tempo per uno solo spesso sbaglia scelta. La qualità c\'entra poco: conta cosa si vuole vedere.',
        opzioni: [
          {
            nome: 'Pampas del Yacuma',
            sintesi: 'Praterie allagate percorse in barca lungo il fiume, con la fauna concentrata sulle rive e ben visibile.',
            costo: 'indicativamente 100-200$ per 3 giorni, tutto incluso',
            durata: '3 giorni, 2 notti',
            pro: [
              'Avvistamenti garantiti e ravvicinati: caimani, capibara, scimmie, delfini rosa, centinaia di uccelli',
              'Meno faticoso: si sta quasi sempre in barca',
              'Il più economico dei due',
            ],
            contro: [
              'Non è la foresta amazzonica "da immaginario": è savana allagata',
              'Zanzare in quantità notevole',
              'Alcune pratiche degli operatori più economici con caimani e anaconda sono discutibili sul piano etico',
            ],
            perChi: 'Chi vuole vedere animali, e vederli con certezza.',
          },
          {
            nome: 'Giungla del Madidi',
            sintesi: 'Foresta primaria all\'interno del parco nazionale, con camminate guidate e notti in lodge o campo tendato.',
            costo: 'indicativamente 150-300$ per 3-4 giorni',
            durata: '3-4 giorni',
            pro: [
              'È l\'Amazzonia vera, con alberi enormi e una biodiversità altissima',
              'Componente culturale forte se si sceglie un lodge gestito dalle comunità indigene, come Chalalán o San Miguel del Bala',
              'Molto meno battuta delle pampas',
            ],
            contro: [
              'La fauna è molto più difficile da avvistare: nella foresta densa si sente più di quanto si veda',
              'Più faticoso, con camminate nel caldo umido',
              'Costa di più',
            ],
            perChi: 'Chi vuole capire com\'è fatta davvero la foresta, accettando di vedere meno animali.',
          },
        ],
        raccomandazione:
          'Con quattro o cinque giorni si fanno entrambe, ed è la soluzione migliore: pampas per la fauna, Madidi per la foresta. Dovendo scegliere, chi viene in Amazzonia per gli animali prenda le pampas, chi ci viene per l\'ambiente scelga il Madidi. In entrambi i casi conviene controllare che l\'operatore non maneggi la fauna per intrattenere i clienti.',
      },
    ],
    doveDormire: 'Rurrenabaque come base; durante i tour si dorme in lodge lungo il fiume, essenziali ma con zanzariere.',
    doveMangiare: 'Pasti inclusi nei tour.',
    comeArrivare:
      'Volo da La Paz a Rurrenabaque (circa 45 minuti, su piccoli aerei, spesso cancellati per meteo) oppure bus di 18-20 ore lungo una strada di montagna impegnativa.',
    comeSpostarsi: 'Solo in barca e a piedi, nell\'ambito dei tour organizzati.',
    periodoMigliore: 'maggio-ottobre, stagione secca: meno zanzare, strade e piste praticabili e fauna concentrata lungo i fiumi',
    costi: 'tra le esperienze amazzoniche più economiche al mondo',
    erroriDaEvitare: [
      'Contare sul volo di rientro senza margine: i voli per Rurrenabaque saltano spesso per il meteo, e l\'alternativa è un bus di quasi venti ore',
      'Scegliere l\'operatore più economico senza informarsi: nelle pampas alcune pratiche con caimani e anaconda sono dannose per gli animali',
      'Andarci senza repellente serio e senza vaccinazione contro la febbre gialla',
    ],
    miaEsperienza:
      'Nelle pampas ho visto più animali con meno sforzo che in qualsiasi altro posto: si sta in barca e sfilano caimani, capibara, scimmie e centinaia di uccelli, con i delfini rosa che ogni tanto emergono accanto allo scafo. Lì si vedono anche le pratiche più discutibili: certe guide tirano fuori i caimani dall\'acqua o vanno a cercare le anaconda per farle toccare ai clienti. Non va assecondato: basta dire di no e chiedere di restare a guardare. Le zanzare poi sono di un altro livello, più che un repellente servirebbe una corazza.',
    luoghi: [
      {
        "nome": "Pampas del Yacuma",
        "testo": "Praterie allagate percorse in barca lungo il Rio Yacuma: caimani, capibara, scimmie, delfini rosa e moltissimi uccelli, con avvistamenti ravvicinati.",
        "come": "Tour organizzato di 3 giorni da Rurrenabaque, con navigazione e notti in lodge.",
        "quando": "Nella stagione secca.",
        "tempo": "3 giorni, 2 notti",
        "costo": "Tour tutto incluso: il prezzo cambia tra agenzie, confrontane più di una a Rurrenabaque",
        "consiglio": "Rick ci ha visto più animali con meno sforzo che altrove. Se la guida tira fuori i caimani o cerca le anaconda per farle toccare, dì di no."
      },
      {
        "nome": "Giungla del Madidi",
        "testo": "Foresta primaria dentro il parco nazionale, con alberi enormi e biodiversità altissima. La fauna è più difficile da vedere.",
        "come": "Tour di 3-4 giorni con camminate guidate e notti in lodge o campo tendato.",
        "quando": "Nella stagione secca.",
        "tempo": "3-4 giorni",
        "costo": "Dipende dal lodge e dalla durata: chiedi il prezzo direttamente al lodge o all'agenzia",
        "consiglio": "Scegli un lodge gestito dalle comunità indigene."
      },
      {
        "nome": "Delfini rosa e tramonti sulle pampas",
        "testo": "I delfini rosa si avvicinano alle barche, e il tramonto sulle praterie allagate è il momento migliore della giornata.",
        "come": "Parte del tour delle pampas.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "consiglio": "Il nuoto con i delfini è consentito solo dove le guide lo permettono."
      },
      {
        "nome": "Volo La Paz-Rurrenabaque",
        "testo": "Un volo di circa 45 minuti-1 ora su aerei piccoli, che può saltare per il meteo e porta dall'altopiano al livello della foresta.",
        "come": "Prenota con margine; l'alternativa è un bus di circa 18 ore.",
        "quando": "Tutto l'anno.",
        "tempo": "45 minuti-1 ora",
        "consiglio": "Non contare sul volo di rientro senza margine."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni (pampas)",
        "tappe": [
          "Giorno 1: barca e avvistamenti lungo il Rio Yacuma",
          "Giorno 2: pesca ai piranha, delfini rosa, ricerca notturna dei caimani",
          "Giorno 3: alba sulle pampas e rientro"
        ]
      },
      {
        "titolo": "4-5 giorni (pampas e giungla)",
        "tappe": [
          "Giorni 1-3: pampas",
          "Giorni 4-5: Madidi con lodge nella foresta"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rurrenabaque",
        "perChi": "Chi parte per i tour",
        "testo": "Cittadina di base con agenzie. Caldo umido."
      },
      {
        "nome": "Lodge lungo il fiume",
        "perChi": "Chi fa i tour",
        "testo": "Essenziali ma con zanzariere."
      }
    ],
    sapori: [
      {
        "nome": "Pesce di fiume",
        "testo": "Surubí e pacú, alla griglia."
      },
      {
        "nome": "Pasti dei tour",
        "testo": "Inclusi nei tour."
      }
    ],
    attenzioni: [
      "I voli per Rurrenabaque possono saltare per il meteo: l'alternativa è un bus di circa 18 ore.",
      "Alcune pratiche con caimani e anaconda sono dannose per gli animali: informati sull'operatore.",
      "Repellente serio. Per la zona di Rurrenabaque è raccomandata la vaccinazione contro la febbre gialla: chiedi al tuo medico prima di partire.",
      "Zanzare in quantità notevole."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Barche ormeggiate sul fiume Beni a Rurrenabaque, ai piedi delle colline coperte di foresta, Bolivia',
    immagine: '/images/bolivia/rurrenabaque-madidi.jpg',
  },
]
