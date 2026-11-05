import type { Destinazione } from '@/lib/types'

// Contenuto riutilizzato dal viaggio "Lofoten in 7 giorni" (src/content/viaggi/01-lofoten-estate-2025.md).
// Dove un dato non è nel diario originale, il campo resta vuoto o con una nota
// esplicita "da confermare/da completare" — nessun fatto inventato.
//
// Le immagini sono foto stock temporanee (Pixabay/Pexels, licenze free-use),
// scelte per rappresentare davvero il luogo in attesa delle foto reali del
// viaggio — vanno sostituite non appena disponibili gli scatti originali.
//
// Oslo serve anche un secondo viaggio, "Capitali nordiche"
// (src/content/viaggi/60-capitali-nordiche.md): lì la città non è più solo il
// giorno di apertura/chiusura delle Lofoten, ma la tappa finale di 2-3 giorni
// pieni. visitataPersonalmente resta true (quella giornata di transito è
// stata vissuta davvero) e miaEsperienza non cambia — racconta solo quella
// giornata. Le voci aggiunte per il nuovo itinerario (Vigeland Park, Fram
// Museum, crociera sul fiordo) sono ricerca, non ricordo: coerente con le
// singole schede Esperienza collegate, che restano giudizio 'da-verificare'.

export const destinazioniNorvegia: Destinazione[] = [
  {
    slug: 'oslo',
    paeseSlug: 'norvegia',
    ordine: 1,
    nome: 'Oslo',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      '1 giorno, sia all\'andata che al ritorno, nel viaggio alle Lofoten; 2-3 giorni pieni nell\'itinerario "Capitali nordiche", come tappa finale dopo Copenaghen e Stoccolma',
    visitataPersonalmente: true,
    introduzione:
      'La capitale norvegese: giardini reali, lungomare di Aker Brygge, musei d\'arte contemporanea e l\'Opera House affacciata sul fiordo. Nel viaggio alle Lofoten è punto di ingresso e di uscita, una giornata per direzione; nell\'itinerario "Capitali nordiche" diventa una tappa piena, con il parco di sculture di Vigeland, i musei della penisola di Bygdøy e un\'uscita sul fiordo.',
    percheAndarci:
      'Un giorno di cultura e passeggiate a piedi che funziona bene sia per aprire sia per chiudere il viaggio alle Lofoten, prima o dopo il volo interno verso Bodø. Come tappa finale di un giro di capitali nordiche, regge bene 2-3 giorni pieni tra il centro, Bygdøy e il fiordo.',
    cosaVedere: [
      'Giardini del Palazzo Reale',
      'Lungomare di Aker Brygge',
      'Museo Astrup Fearnley (edificio di Renzo Piano)',
      'Oslo Opera House, con salita sul tetto per la vista su città e mare',
      'Il Vigeland Park (Frognerparken), il più grande parco di sculture al mondo opera di un solo artista: oltre 200 statue in bronzo, granito e ferro di Gustav Vigeland, ingresso libero e sempre aperto. È l\'attrazione più visitata di tutta la Norvegia',
      'La penisola di Bygdøy, con il Fram Museum (dedicato alla nave polare usata da Nansen e Amundsen) e il Kon-Tiki Museum (la zattera di Thor Heyerdahl): il Viking Ship Museum della stessa penisola è invece chiuso per una ristrutturazione che dovrebbe durare fino al 2027, con le navi vichinghe in trasferimento verso il nuovo Museum of the Viking Age: prima di programmare la visita conviene controllare la data di riapertura',
    ],
    cosaFare: [
      'Passeggiata a piedi dal Palazzo Reale ad Aker Brygge fino all\'Opera House',
      'Salita sul tetto dell\'Opera House per la vista, con una sosta per un tè caldo nel bar interno',
      'Una passeggiata tra le sculture del Vigeland Park (vedi la scheda esperienza dedicata)',
      'Una mattinata ai musei di Bygdøy (Fram Museum e Kon-Tiki Museum), vedi la scheda esperienza dedicata',
      'Una crociera sull\'Oslofjord di due ore, tra le isole e le baie a sud della città (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Ho dormito al Citybox Hotel, a 5 minuti a piedi da Oslo S: design-hotel economico, check-in automatico, camere essenziali ma pulite, letti comodi, macchina del caffè in stanza. Le recensioni (Tripadvisor, oltre 2.400 giudizi, punteggio 4/5) confermano la mia impressione: ottimo rapporto qualità-prezzo per gli standard di Oslo e posizione comodissima, a fronte di uno stile minimal per scelta (niente reception fisica) e qualche lamentela su stanze rumorose se affacciate sul tram. Consiglio di chiedere una camera sul lato interno.\n\nAlternative a Oslo. Economiche: Saga Poshtel (a pochi passi da Oslo S), Comfort Hotel Xpress Central Station (due minuti da Jernbanetorget) · fascia media (qui rientra anche il Citybox scelto): Comfort Hotel Karl Johan (250 m da Oslo S) · fascia alta senza esagerare: Amerikalinjen (hotel storico e boutique vicino alla stazione), The Thief (design hotel sul lungomare di Tjuvholmen, con spa interna).',
    doveMangiare:
      'Cena da Rorbua (Aker Brygge): cucina norvegese tradizionale, porzioni generose, prezzi nella media, atmosfera calda in legno. Se si torna a Oslo a fine viaggio, Café Sara va bene per l\'ultima cena: locale semplice ma aperto fino a tardi, comodo dopo un volo serale (nel weekend conviene prenotare).',
    comeArrivare:
      'Volo internazionale su Oslo Gardermoen; dall\'aeroporto il treno Flytoget porta al centro in 19 minuti (circa 210 NOK, partenze ogni 10 minuti). Da Stoccolma, per chi arriva come tappa finale di "Capitali nordiche": treno diretto SJ (circa 5h45) o volo interno (circa 1h).',
    comeSpostarsi: 'A piedi in centro; Flytoget per/dall\'aeroporto; per Bygdøy, bus urbano o traghetto stagionale dal municipio.',
    periodoMigliore: 'per la sola tappa di transito vale l\'estate del viaggio alle Lofoten; maggio-settembre per un soggiorno pieno, con la crociera sul fiordo e Vigeland Park al meglio con le giornate lunghe',
    costi:
      'Flytoget circa 210 NOK a tratta; cene nella media per gli standard norvegesi (comunque care rispetto all\'Italia). Vigeland Park: ingresso libero. Fram Museum: circa 180 NOK (16€ circa). Crociera sull\'Oslofjord di 1,5-2 ore: indicativamente 45-70€ a persona.',
    erroriDaEvitare: [
      'Se si va a Café Sara nel weekend, prenotare: la sera è un locale molto frequentato',
      'Programmare la visita al Viking Ship Museum di Bygdøy senza informarsi prima: è chiuso per ristrutturazione, con riapertura prevista non prima del 2027',
    ],
    miaEsperienza:
      'Oslo per me è stata una tappa breve ma piacevole su entrambi i lati del viaggio: un pomeriggio di passeggiata tranquilla il primo giorno, e un\'ultima cena rilassata da Café Sara al rientro, dopo una settimana di trekking.',
    luoghi: [
      {
        nome: "Parco Vigeland (Frognerparken)",
        testo: "Il più grande parco di sculture di un solo artista: oltre 200 figure in bronzo, granito e ferro di Gustav Vigeland, tra cui il Monolite alto 14 metri con 121 corpi intrecciati. È il luogo più visitato della Norvegia.",
        come: "Metropolitana o tram fino a Majorstuen/Vigelandsparken, poi 10 minuti a piedi. Si cammina in un asse di circa 850 metri dal cancello al monolite.",
        quando: "Aperto sempre, ingresso libero. Mattina presto o sera d'estate per avere le sculture senza folla.",
        tempo: "1,5-2 ore",
        costo: "ingresso libero",
        url: "https://www.vigeland.museum.no",
        consiglio: "Il museo Vigeland, accanto al parco, ha gli studi dell'artista: utile per un'ora in caso di pioggia."
      },
      {
        nome: "Oslo Opera House",
        testo: "Teatro dell'opera e del balletto sul fiordo, aperto nel 2008, progettato da Snøhetta con un tetto di marmo inclinato su cui si cammina. La vista sulla città e sul mare vale la salita.",
        come: "A piedi dalla stazione centrale (circa 5 minuti). Il tetto è sempre aperto, anche senza biglietto per gli spettacoli.",
        quando: "Al tramonto, o con cielo limpido per la vista dell'Oslofjord.",
        tempo: "45 minuti-1 ora",
        costo: "tetto: ingresso libero",
        url: "https://www.operaen.no",
        consiglio: "Dopo la salita, tè caldo al bar interno: è il modo migliore per riscaldarsi."
      },
      {
        nome: "Fortezza di Akershus",
        testo: "Fortezza medievale del 1300 sul porto, poi castello rinascimentale. Il parco è gratuito e le mura offrono una bella veduta sul porto di Oslo; dentro ci sono il museo militare e quello della Resistenza.",
        come: "A piedi dal centro in 10-15 minuti; ingresso libero al parco.",
        quando: "Giorno intero; il cambio della guardia nella piazza esterna è attrazione gratuita.",
        tempo: "1,5 ore",
        costo: "parco libero; musei e castello con biglietto separato",
        consiglio: "Salire sulle mura al tramonto: la luce sul fiordo è la migliore."
      },
      {
        nome: "Penisola di Bygdøy: Fram e Kon-Tiki",
        testo: "Il Fram Museum custodisce la nave polare di Nansen e Amundsen, intatta e visitabile a bordo. Accanto il Kon-Tiki Museum espone la zattera con cui Thor Heyerdahl attraversò il Pacifico nel 1947. Il museo delle navi vichinghe è chiuso per rinnovo fino al 2027: controllare la riapertura.",
        come: "In estate il traghetto per Bygdøy parte da Rådhusbryggen; in alternativa il bus 30. I musei sono a pochi minuti l'uno dall'altro.",
        quando: "Mattina, per avere le sale con meno gruppi.",
        tempo: "3-4 ore",
        costo: "Fram Museum 180 NOK adulti (2026); Kon-Tiki con biglietto separato",
        url: "https://www.frammuseum.no",
        consiglio: "I due musei si vedono bene in mezza giornata; evitare il lunedì festivo, quando è affollato."
      },
      {
        nome: "Munch e Nasjonalmuseet",
        testo: "Il museo Munch, a Bjørvika, raccoglie gran parte dell'opera di Edvard Munch; il Nasjonalmuseet, la più grande raccolta di arte, architettura e design della Norvegia, ha un'altra versione dell'Urlo (1893). Due edifici vicini al fiordo, nel quartiere più nuovo.",
        come: "Munch a 10 minuti a piedi dalla stazione; il Nasjonalmuseet a 15 minuti dal centro.",
        quando: "Mattina nei giorni feriali; prenotare online per gli ingressi con orario.",
        tempo: "2-3 ore per ognuno",
        costo: "Munch 220 NOK adulti (2026)",
        url: "https://www.munch.no",
        consiglio: "Confrontare le versioni dell'Urlo: le differenze si vedono dal vivo."
      },
      {
        nome: "Holmenkollen",
        testo: "Il trampolino di salto con gli sci di Oslo, con museo dello sci e simulatore, sopra la città. La vista sul fiordo e sulla foresta è la ragione per salire.",
        come: "Metropolitana linea 1 fino a Holmenkollen, circa 30 minuti dal centro. Il percorso fino al trampolino è a piedi.",
        quando: "Giorno, con cielo limpido; in inverno spesso c'è neve.",
        tempo: "2 ore",
        url: "https://www.holmenkollen.com",
        consiglio: "Salire in metropolitana e tornare giù a piedi lungo i sentieri nel bosco."
      },
      {
        nome: "Aker Brygge e Astrup Fearnley",
        testo: "L'ex area dei cantieri navali, oggi lungomare con ristoranti, e il museo d'arte contemporanea Astrup Fearnley, edificio di Renzo Piano. Il Tjuvholmen vicino ha sculture all'aperto.",
        come: "A piedi dal Palazzo Reale lungo il lungomare, circa 20 minuti.",
        quando: "Sera d'estate, per i tavoli all'aperto sul fiordo.",
        tempo: "2 ore",
        url: "https://www.afmuseet.no",
        consiglio: "Camminare fino a Tjuvholmen: la spiaggia urbana è gratuita."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Parco Vigeland",
          "Pranzo in centro",
          "Opera House (tetto)",
          "Passeggiata a Aker Brygge",
          "Cena a Aker Brygge"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Bygdøy (Fram e Kon-Tiki)",
          "Pomeriggio al Munch o al Nasjonalmuseet",
          "Akershus al tramonto"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Holmenkollen la mattina",
          "Crociera sull'Oslofjord di due ore",
          "Ultima cena in centro"
        ]
      }
    ],
    zone: [
      {
        nome: "Sentrum e Oslo S",
        perChi: "Chi arriva in treno o ha poco tempo",
        testo: "Vicino alla stazione, all'Opera e ai bus per l'aeroporto. Il Citybox dove ho dormito è a 5 minuti dalla stazione. Zone rumorose di sera vicino alla stazione."
      },
      {
        nome: "Grünerløkka",
        perChi: "Chi cerca bar, caffè e vita notturna",
        testo: "Il quartiere più giovane, a 15 minuti a piedi dal centro. Molti locali, più rumore nel weekend."
      },
      {
        nome: "Frogner e Majorstuen",
        perChi: "Chi vuole tranquillità e il parco",
        testo: "Quartiere residenziale vicino al Vigeland; alloggi un po' più cari, buoni collegamenti."
      }
    ],
    sapori: [
      {
        nome: "Brunost",
        testo: "Formaggio bruno e dolce di siero di latte, a fette sul pane o sulle cialde."
      },
      {
        nome: "Fårikål",
        testo: "Il piatto nazionale: agnello e cavolo bollito con pepe in grani, tipico d'autunno."
      },
      {
        nome: "Gamberi al porto (reker)",
        testo: "Si comprano freschi dalle barche al porto, ad Aker Brygge, con pane e maionese."
      },
      {
        nome: "Kanelboller",
        testo: "Girelle alla cannella e cardamomo, da provare nei forni del centro."
      }
    ],
    attenzioni: [
      "L'alcol forte si vende solo da Vinmonopolet; i supermercati vendono birra fino a 4,7% e solo in orari limitati (chiusi la domenica).",
      "Pickpocket intorno alla stazione e a Karl Johans gate: tenere borsa e telefono davanti.",
      "Il traffico elettrico e i monopattini sfrecciano sulle piste ciclabili: guardare prima di attraversare.",
      "La metropolitana si usa con i biglietti dell'app Ruter: comprare prima di salire, i controlli ci sono."
    ],
    esperienzeSlugs: ['vigeland-park-oslo', 'bygdoy-musei-fram-kontiki', 'oslofjord-crociera'],
    tripSlugs: ['lofoten-estate-2025', 'capitali-nordiche'],
    imageAlt: 'Facciata in vetro e marmo dell\'Oslo Opera House, con persone sul tetto spiovente',
    immagine: '/images/norvegia/oslo-stock.jpg',
  },
  {
    slug: 'bodo',
    paeseSlug: 'norvegia',
    ordine: 2,
    nome: 'Bodø',
    tipologia: ['natura'],
    giorniConsigliati: 'poche ore, tappa di passaggio due volte (andata e ritorno)',
    visitataPersonalmente: true,
    introduzione: 'Il punto di transito obbligato tra Oslo e le Lofoten: qui si arriva in aereo, si ritira l\'auto a noleggio e si prendono i traghetti verso l\'arcipelago.',
    percheAndarci: 'Serve comunque attraversarla, e ha abbastanza da offrire per occupare bene qualche ora tra un volo e un traghetto.',
    cosaVedere: ['Nyholms Fort, punto panoramico a 10 minuti a piedi dal porto', 'Spiaggia di Mjelle'],
    cosaFare: [
      'Giro del centro e del molo a piedi',
      'Traghetto verso Misten/Kjerringøy (circa 10 minuti, si resta in auto, arrivare 30 minuti prima): a me non ha entusiasmato, ma è un modo onesto per occupare qualche ora. Se il Bodø/Glimt gioca in casa, può valere la pena andare alla partita',
    ],
    doveDormire: 'Non ho pernottato a Bodø, ci sono solo passato: non ho un indirizzo da consigliare per chi vuole fermarsi una notte.',
    doveMangiare:
      'Bryggerikaia (apre a metà mattina): ottimi panini "mega farciti" da asporto, da consumare al punto panoramico della città. Melkebaren per colazione: buono, ma il servizio è lento, da mettere in conto con i tempi stretti.',
    comeArrivare: 'Volo interno da Oslo Gardermoen.',
    comeSpostarsi: 'A piedi in centro; auto a noleggio per il resto degli spostamenti.',
    periodoMigliore: 'ci sono passato in estate, all\'andata e al ritorno dalle Lofoten; per gli altri mesi non ho un riferimento diretto',
    costi: 'non mi sono segnato i costi di questa tappa',
    erroriDaEvitare: ['Mettere in conto il servizio lento da Melkebaren se si ha poco tempo tra un traghetto e l\'altro'],
    miaEsperienza:
      'Per noi è stata una tappa logistica sia all\'andata che al ritorno, ma con abbastanza da fare (spiaggia di Mjelle, il punto panoramico di Nyholms Fort) da non sembrare tempo perso.',
    luoghi: [
      {
        nome: "Nyholms Fort",
        testo: "Un forte del Settecento sulla punta del porto di Bodø, oggi con vista sul porto e sulle isole. Si raggiunge in 10 minuti a piedi dal porto.",
        come: "A piedi dal porto.",
        quando: "Tardo pomeriggio, con la luce sulle isole.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Il punto più comodo per una foto panoramica prima dell'imbarco."
      },
      {
        nome: "Spiaggia di Mjelle",
        testo: "Una lunga spiaggia di sabbia chiara a nord del centro, tra dune e mare. D'estate si cammina anche di sera con la luce lunga.",
        come: "In auto o con bus locale da Bodø.",
        quando: "Estate, sera.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Portare giacca antivento: il vento da nord è forte."
      },
      {
        nome: "Saltstraumen",
        testo: "Uno degli stretti con la corrente di marea più forte del mondo, circa 30 km da Bodø: l'acqua passa a oltre 30 km/h formando vortici. Non l'ho visitato, ma è la gita classica da Bodø.",
        come: "In auto o con bus da Bodø, circa 40 minuti.",
        quando: "Controllare le tabelle delle maree: la corrente è più forte a mezzo flusso, circa ogni sei ore.",
        tempo: "2-3 ore",
        consiglio: "Da guardare dal ponte; non si fa il bagno."
      }
    ],
    sapori: [
      {
        nome: "Panini da asporto",
        testo: "Da Bryggerikaia si mangiano panini farciti da portare al punto panoramico."
      },
      {
        nome: "Colazione",
        testo: "Da Melkebaren, anche se il servizio è lento."
      }
    ],
    attenzioni: [
      "Se si va alle Lofoten in traghetto, arrivare con 30-40 minuti d'anticipo: in estate le code sono lunghe.",
      "In estate gli alloggi di Bodø si riempiono in anticipo: prenotare presto."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Vista dall\'alto del porto di Bodø, con casette rosse sul molo e la strada costiera',
    immagine: '/images/norvegia/bodo-stock.jpg',
  },
  {
    slug: 'svolvaer',
    paeseSlug: 'norvegia',
    ordine: 3,
    nome: 'Svolvær',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 notti, prima base del viaggio',
    visitataPersonalmente: true,
    introduzione: 'Il porto principale delle Lofoten e la prima base logistica del viaggio: da qui si parte per l\'escursione in gommone al Trollfjord e per la gita a Henningsvær.',
    percheAndarci: 'Posizione centrale per le prime giornate nell\'arcipelago, con il ristorante migliore di tutto il viaggio.',
    cosaVedere: ['Il porto di Svolvær'],
    cosaFare: ['Escursione in RIB al Trollfjord (vedi la scheda esperienza dedicata)', 'Colazione da Kringla, panetteria molto buona vicino agli appartamenti'],
    doveDormire:
      'Ho dormito in un appartamento con vista sul porto al Nordis Apartment: finestroni, terrazza panoramica, angolo cottura. Su Booking.com ha un punteggio di 8,7/10 (417 recensioni) e 9,7/10 per la posizione — numeri che confermano la mia impressione: spazi ampi e puliti, vista che da sola vale il soggiorno, comodo per chi vuole cucinare la sera invece di uscire sempre.\n\nAlternative a Svolvær. Economiche: Lofoten Feriesenter (campeggio e cabine, da circa 200 NOK a persona), Lofoten Sommerhotell og Vandrerhjem (ostello a Kabelvåg, sauna e colazione inclusa) · fascia media (qui rientra il Nordis Apartment scelto): Thon Hotel Lofoten (centrale, vista sul porto) · fascia alta senza esagerare: Thon Hotel Svolvær (grande hotel sul lungomare, binocolo in ogni stanza), Svinøya Rorbuer (rorbu storici con cucina propria, il più quotato di Svolvær su Tripadvisor).',
    doveMangiare:
      'Bacalo per una cena nella media. Paleo Arctic è stato il ristorante migliore di tutto il viaggio: prezzi un po\' sopra la media, ma qualità molto più alta. Va prenotato per tempo.',
    comeArrivare: 'Da Bodø: circa 3h15 di guida fino a Bognes, traghetto Bognes-Lødingen (arrivare con 40 minuti di anticipo), poi altre 1h40 d\'auto fino a Svolvær.',
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'ci sono stato in estate; per gli altri mesi non ho un riferimento diretto',
    costi: 'non mi sono segnato i costi di questa tappa',
    erroriDaEvitare: ['Prenotare per tempo sia il Trollfjord sia una cena da Paleo Arctic: sono le due esperienze più richieste della zona'],
    miaEsperienza:
      'Svolvær è stata la base giusta per le prime giornate: comoda per il Trollfjord e per Henningsvær, e lì abbiamo fatto la cena migliore di tutto il viaggio, al Paleo Arctic.',
    luoghi: [
      {
        nome: "Porto di Svolvær",
        testo: "Il porto della capitale delle Lofoten, con vecchi capannoni da pesca (rorbuer) e barche. Da qui partono i RIB per il Trollfjord e i battelli per le isole.",
        come: "A piedi dal centro.",
        quando: "Sera, per la luce e il pesce in banchina.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Appartamento con vista sul porto: scelta pratica per cucinare e riposare."
      },
      {
        nome: "Trollfjord",
        testo: "Un fiordo stretto di circa 2 km con pareti ripide e aquile di mare. In estate il giro in RIB (gommone veloce) è il modo più diffuso per entrarci.",
        come: "Escursione prenotata con operatore da Svolvær, 2-3 ore.",
        quando: "Estate, con cielo sereno.",
        tempo: "2-3 ore",
        consiglio: "Prenotare in anticipo: i RIB si riempiono."
      },
      {
        nome: "Svolværgeita",
        testo: "Una roccia a due corna sopra il paese, sfida classica per gli alpinisti che saltano da un corno all'altro. Si raggiunge con un sentiero di salita ripida di circa un'ora e mezza.",
        come: "Sentiero dal paese, ben segnato ma ripido.",
        quando: "Giornata sgombra da nuvole.",
        tempo: "3-4 ore",
        consiglio: "Non è per chi soffre di vertigini."
      },
      {
        nome: "Kabelvåg e Lofotr",
        testo: "Poco fuori Svolvær, il Lofotmuseet nel vecchio porto di Kabelvåg racconta la pesca; a Borg c'è il Lofotr Viking Museum con una ricostruzione di casa da capo vichingo.",
        come: "In auto, circa 10 minuti per Kabelvåg e 55 per Borg.",
        quando: "Giorno pieno.",
        tempo: "2-3 ore",
        url: "https://lofotr.no",
        consiglio: "Il Lofotr Viking Museum si visita in autonomia; in estate ci sono attività dal vivo."
      }
    ],
    sapori: [
      {
        nome: "Stoccafisso (tørrfisk)",
        testo: "Merluzzo essiccato all'aria sui tradizionali stendi di legno; lo si mangia in zuppa o con patate."
      },
      {
        nome: "Skrei",
        testo: "Merluzzo artico della stagione invernale, da gennaio ad aprile, nei ristoranti locali."
      },
      {
        nome: "Paleo Arctic",
        testo: "Il ristorante dove ho cenato meglio in tutto il viaggio: da prenotare per tempo."
      }
    ],
    attenzioni: [
      "In Norvegia le strade delle Lofoten sono strette e con molti ponti: attenzione agli autobus e ai camper.",
      "Prenotare il Trollfjord e le cene con anticipo in estate.",
      "Per l'accesso alla natura vale il diritto di libero accesso, ma niente campeggio vicino a case e bivacchi nei parcheggi dei villaggi."
    ],
    esperienzeSlugs: ['trollfjord-rib'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'La chiesa di Svolvær con le case rosse del porto sullo sfondo di un cielo tempestoso, Lofoten',
    immagine: '/images/norvegia/svolvaer-stock.jpg',
  },
  {
    slug: 'henningsvaer',
    paeseSlug: 'norvegia',
    ordine: 4,
    nome: 'Henningsvær',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: 'mezza giornata, in gita da Svolvær (circa 30 minuti d\'auto)',
    visitataPersonalmente: true,
    introduzione: 'La "piccola Venezia" delle Lofoten: un villaggio di pescatori con il campo da calcio più fotografato di Norvegia e un\'atmosfera bohémien tra bakery, artigianato e boutique vintage.',
    percheAndarci: 'Uno dei villaggi più fotogenici dell\'arcipelago, con un ottimo pranzo sul canale e il punto di partenza per il Festvågtind trail.',
    cosaVedere: ['Il celebre campo da calcio, ottimo per foto/drone', 'Il canale del villaggio', 'Boutique vintage e artigianato locale'],
    cosaFare: [
      'Pranzo da Fiskekrogen, sul canale del villaggio: l\'effetto "piccola Venezia" c\'è, meglio prenotare e chiedere un tavolo vicino alla finestra',
      'Giro del villaggio, piccolo ma vivace',
      'Festvågtind trail nel pomeriggio (vedi la scheda esperienza dedicata)',
    ],
    doveDormire: 'Non ho pernottato a Henningsvær: si dorme a Svolvær, a circa 30 minuti d\'auto.',
    doveMangiare: 'Fiskekrogen, sul canale: cibo ottimo, ma meglio prenotare in anticipo, soprattutto per un tavolo vicino alla finestra.',
    comeArrivare: '30 minuti d\'auto da Svolvær.',
    comeSpostarsi: 'A piedi, il villaggio è piccolo.',
    periodoMigliore: 'ci sono stato in estate; per gli altri mesi non ho un riferimento diretto',
    costi: 'non mi sono segnato i costi di questa tappa',
    erroriDaEvitare: ['Non prenotare Fiskekrogen: nelle ore di punta il ristorante si riempie in fretta'],
    miaEsperienza:
      'Henningsvær è stata una delle sorprese del viaggio: il pranzo sul canale, il campo da calcio e, nel pomeriggio, il Festvågtind, un trekking più selvaggio e meno affollato del Reinebringen.',
    luoghi: [
      {
        nome: "Campo da calcio di Henningsvær",
        testo: "Un campo a erba sintetica costruito su una piccola isola di roccia, circondato dal mare. Dall'alto con il drone o dal ponte di accesso è una delle foto più note delle Lofoten.",
        come: "Si arriva in auto da Svolvær (circa 30 minuti) e si parcheggia nel villaggio.",
        quando: "Mattina presto o sera, con luce morbida.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Non entrare in campo durante le partite o gli allenamenti."
      },
      {
        nome: "Canale e porto",
        testo: "Il villaggio si sviluppa su piccole isole unite da ponti, con case di legno colorate e vecchi magazzini del pesce. L'atmosfera da piccola Venezia c'è davvero sul canale.",
        come: "A piedi dal parcheggio.",
        quando: "Mattina, prima dei gruppi.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Pranzo da Fiskekrogen sul canale: prenotare e chiedere un tavolo vicino alla finestra."
      },
      {
        nome: "Festvågtind",
        testo: "Una cima di circa 540 metri sopra il paese, con vista sul mare aperto e sulle isole. Il sentiero è più selvaggio e meno affollato del Reinebringen.",
        come: "Il punto di partenza è vicino al paese; sentiero con tratti ripidi.",
        quando: "Pomeriggio con cielo limpido.",
        tempo: "3-4 ore",
        costo: "ingresso libero",
        consiglio: "È stata una delle sorprese del viaggio: meno turisti, più silenzio."
      }
    ],
    sapori: [
      {
        nome: "Fiskekrogen",
        testo: "Ristorante sul canale con pesce fresco della zona: ottimo, da prenotare."
      },
      {
        nome: "Merluzzo al forno",
        testo: "Piatto semplice con patate e burro, cucina tradizionale."
      }
    ],
    attenzioni: [
      "Il parcheggio nel villaggio è piccolo e a pagamento: arrivare presto.",
      "Per il sentiero Festvågtind servono scarpe da trekking: dopo la pioggia è scivoloso."
    ],
    esperienzeSlugs: ['festvagtind-trail'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: "Henningsvær dal drone: il campo da calcio sullo scoglio, le rastrelliere del merluzzo e l'arcipelago di isolotti verdi",
    immagine: '/images/norvegia/henningsvaer-stadio-riccardo.jpg',
  },
  {
    slug: 'reine',
    paeseSlug: 'norvegia',
    ordine: 5,
    nome: 'Reine',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '1-2 giorni, base per Reinebringen e la gita alla spiaggia di Bunes',
    visitataPersonalmente: true,
    introduzione: 'Il villaggio simbolo delle Lofoten, base per il trekking più iconico dell\'arcipelago e punto di partenza del traghetto verso una delle spiagge più belle della zona.',
    percheAndarci: 'Il Reinebringen è il trekking che tutti associano alle Lofoten, e da qui si parte anche per la spiaggia di Bunes: per me sono state due delle esperienze più forti di tutto il viaggio.',
    cosaVedere: ['Il villaggio di Reine', 'Il Reinebringen dall\'alto'],
    cosaFare: [
      'Trekking al Reinebringen (vedi la scheda esperienza dedicata)',
      'Traghetto ed escursione alla spiaggia di Bunes (vedi la scheda esperienza dedicata)',
      'Tappa al Viking Museum di Borg lungo il tragitto da Svolvær (vedi la scheda esperienza dedicata)',
    ],
    doveDormire: 'Non ho pernottato a Reine: si dorme a Nesland/Flakstad, a pochi minuti d\'auto.',
    doveMangiare: 'A Reine non mi sono segnato ristoranti: la Coop Prix del paese è comoda per organizzare un pranzo al sacco prima delle escursioni.',
    comeArrivare: 'Da Svolvær via Leknes (con tappa al Viking Museum di Borg), circa 55 minuti d\'auto da Svolvær fino a Borg, poi altri 20-30 minuti fino a Reine.',
    comeSpostarsi: 'Parcheggio a pagamento in paese (200 NOK/3h).',
    periodoMigliore: 'Il Reinebringen vale la pena solo con cielo sereno: controllare le previsioni prima di programmare la giornata.',
    costi: 'Parcheggio 200 NOK/3h.',
    erroriDaEvitare: [
      'Il Reinebringen richiede un minimo di allenamento per il dislivello; se il cielo è coperto, meglio rimandarlo, perché la vista è tutto',
      'Per il traghetto verso Vindstad/Bunes, arrivare con almeno 30 minuti di anticipo anche con posti riservati',
    ],
    miaEsperienza:
      'Reine è stata il punto più intenso del viaggio: il Reinebringen (1h50 il mio tempo totale, tra salita, sosta e discesa) e il giorno dopo la spiaggia di Bunes, raggiungibile solo in traghetto. Di tutte le tappe, sono i due ricordi che mi sono portato a casa.',
    luoghi: [
      {
        nome: "Reinebringen",
        testo: "La salita più famosa delle Lofoten: circa 450 metri di dislivello su una scalinata di pietra costruita dagli sherpa nepalesi. Dalla cima si vede Reine con i fiordi e le montagne intorno.",
        come: "Parcheggio nel villaggio, sentiero ben segnato; salita ripida ma breve.",
        quando: "Con cielo sereno e senza pioggia, per evitare gradini scivolosi. Mattina presto o sera.",
        tempo: "circa 1h50 tra salita, sosta e discesa",
        costo: "parcheggio 200 NOK per 3 ore (viaggio 2025, da ricontrollare)",
        consiglio: "Controllare le previsioni prima: con nuvole non si vede nulla dalla cima."
      },
      {
        nome: "Reine e Hamnøy",
        testo: "Villaggio di pescatori con rorbuer rossi su rocce a picco sul mare, tra le viste più fotografate della Norvegia. A pochi minuti di strada c'è Hamnøy, con le stesse case e il ponte.",
        come: "A piedi nel villaggio; Hamnøy in auto, 5 minuti.",
        quando: "Mattina, con luce morbida.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Il supermercato Coop Prix di Reine è comodo per preparare un pranzo al sacco."
      },
      {
        nome: "Spiaggia di Bunes",
        testo: "Una spiaggia di sabbia bianca raggiungibile solo in traghetto da Reine, con una camminata di circa mezz'ora sulle montagne. È uno dei luoghi più belli e meno accessibili dell'arcipelago.",
        come: "Traghetto stagionale da Reine, poi sentiero a piedi.",
        quando: "Estate, con l'orario del traghetto verificato in anticipo.",
        tempo: "mezza giornata",
        consiglio: "Insieme al Reinebringen, è il ricordo che mi sono portato a casa."
      },
      {
        nome: "Lofotr Viking Museum a Borg",
        testo: "La più grande casa vichinga mai scavata, lunga 83 metri, ricostruita sul posto con barche, laboratori e animali. Si trova sulla strada tra Svolvær e Reine.",
        come: "In auto, circa 55 minuti da Svolvær; sosta ideale lungo il trasferimento.",
        quando: "Giorno pieno.",
        tempo: "2 ore",
        url: "https://lofotr.no",
        consiglio: "Una sosta utile se piove."
      }
    ],
    sapori: [
      {
        nome: "Tørrfisk",
        testo: "Merluzzo essiccato, simbolo delle Lofoten: si può comprare in confezioni nei negozi."
      },
      {
        nome: "Pranzo al sacco",
        testo: "La Coop Prix di Reine è la soluzione più pratica prima delle escursioni."
      }
    ],
    attenzioni: [
      "Reinebringen: i gradini sono molti e il sentiero è affollato; non scendere con fretta, soprattutto con la pioggia.",
      "Il traghetto per Bunes ha orari ridotti e può essere cancellato: verificare il giorno prima.",
      "Parcheggio e traffico nel villaggio sono limitati: non lasciare l'auto lungo la strada."
    ],
    esperienzeSlugs: ['reinebringen', 'spiaggia-di-bunes', 'viking-museum-borg'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Vista aerea dal Reinebringen sul villaggio di Reine e i fiordi circostanti',
    immagine: '/images/norvegia/reinebringen-stock.jpg',
  },
  {
    slug: 'nesland-flakstad',
    paeseSlug: 'norvegia',
    ordine: 6,
    nome: 'Nesland / Flakstad',
    tipologia: ['natura'],
    giorniConsigliati: '2-3 notti, seconda base del viaggio',
    visitataPersonalmente: true,
    introduzione: 'La base più isolata e silenziosa del viaggio: un rorbu affacciato direttamente sul fiordo, punto di partenza per la passeggiata panoramica verso Nusfjord.',
    percheAndarci: 'Per staccare dal ritmo dei trekking più famosi con una base tranquilla, e per la passeggiata verso Nusfjord, meno battuta ma altrettanto bella.',
    cosaVedere: ['Il fiordo davanti al rorbu', 'Il villaggio di Nusfjord, in fondo alla passeggiata panoramica'],
    cosaFare: [
      'Passeggiata panoramica Nesland-Nusfjord (vedi la scheda esperienza dedicata)',
      'Barbecue serale nella rorbu con la spesa fatta a Ramberg',
    ],
    doveDormire:
      'Ho dormito in un rorbu privato affacciato sul fiordo, Casa Flakstad, la sistemazione più isolata e silenziosa del viaggio. È una struttura piccola, con troppe poche recensioni online per citarle: un rorbu semplice ed essenziale, poche luci, tanto silenzio, il fiordo a pochi passi.\n\nAlternative a Nesland/Flakstad. Economiche: Ramberg Gjestegård (cabine semplici, 850-1050 NOK a notte, sconto in bassa stagione), Lofoten Beach Camp (campeggio a conduzione familiare a Ramberg, sauna e area pic-nic) · fascia media (qui rientra il rorbu scelto): Lofoten Nesland Guesthouse (punteggio molto alto nelle recensioni, posizione tranquilla con vista sull\'oceano) · fascia alta senza esagerare: Nusfjord Village & Resort (rorbu storici ristrutturati nel villaggio di Nusfjord, sauna e vasche idromassaggio incluse; caro, ma con recensioni entusiaste).',
    doveMangiare:
      'Cena al Ramberg Resort, buona posizione a due passi dalla spiaggia di Ramberg per una passeggiata digestiva. Il supermercato di Ramberg è più fornito ed economico rispetto alla Coop di Reine ed è il punto di riferimento per organizzare un barbecue serale (salmone, verdure, contorni). Attenzione: vende solo birra, niente vino o superalcolici.',
    comeArrivare: 'Pochi minuti d\'auto da Reine.',
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'ci sono stato in estate; per gli altri mesi non ho un riferimento diretto',
    costi: 'Cabine da 850-1050 NOK/notte per le opzioni economiche della zona.',
    erroriDaEvitare: ['Il supermercato di Ramberg non vende vino/superalcolici, solo birra: pianificare la spesa di conseguenza'],
    miaEsperienza:
      'Il rorbu di Nesland è stato il posto più silenzioso di tutto il viaggio: nessuna luce artificiale, il fiordo a pochi passi, e una serata di barbecue tra le più rilassate della settimana.',
    luoghi: [
      {
        nome: "Passeggiata Nesland-Nusfjord",
        testo: "Un sentiero panoramico che segue la costa del fiordo da Nesland fino al villaggio di Nusfjord, con vista sul mare e sulle montagne di Flakstadøya.",
        come: "Dal rorbu a piedi, circa un'ora di cammino a tratta.",
        quando: "Sera d'estate, con la luce lunga.",
        tempo: "2-3 ore andata e ritorno",
        consiglio: "Il silenzio e le poche luci del posto sono la parte migliore."
      },
      {
        nome: "Nusfjord",
        testo: "Uno dei villaggi di pescatori più antichi della Norvegia, protetto e conservato come museo vivente, con rorbuer rossi e un piccolo porto.",
        come: "In auto da Nesland, 10 minuti; l'ingresso al villaggio può essere a pagamento.",
        quando: "Mattina o sera, evitando i gruppi.",
        tempo: "1 ora",
        consiglio: "Passeggiata corta, ma da fare con tempo calmo."
      },
      {
        nome: "Ramberg e le spiagge di Flakstadøya",
        testo: "Ramberg ha una lunga spiaggia di sabbia chiara, e poco più avanti si trovano Skagsanden e Haukland, tra le più belle delle Lofoten. L'acqua è fredda ma il colore è caraibico.",
        come: "In auto, 10-20 minuti da Nesland.",
        quando: "Estate, con sole.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        consiglio: "Al supermercato di Ramberg si vende solo birra, niente vino né superalcolici."
      }
    ],
    sapori: [
      {
        nome: "Barbecue nel rorbu",
        testo: "Spesa al supermercato di Ramberg: salmone, verdure e contorni sono la cena più semplice."
      }
    ],
    attenzioni: [
      "Ramberg: il supermercato vende solo birra, per il vino bisogna andare al Vinmonopolet di Leknes.",
      "Il rorbu è isolato: portare spesa sufficiente e torcia."
    ],
    esperienzeSlugs: ['nesland-nusfjord'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Rorbu rosse tradizionali con una montagna avvolta dalla nebbia sullo sfondo, Lofoten',
    immagine: '/images/norvegia/nesland-stock.jpg',
  },
  {
    slug: 'a',
    paeseSlug: 'norvegia',
    ordine: 7,
    nome: 'Å',
    tipologia: ['cultura'],
    giorniConsigliati: 'mezza giornata, in gita da Nesland/Flakstad (circa 50 minuti d\'auto)',
    visitataPersonalmente: true,
    introduzione: 'Il villaggio dal nome più corto del mondo, e forse il più "storico" di tutta la zona: bakery tradizionale e Museo dei Pescatori.',
    percheAndarci: 'Per capire lo stile di vita delle comunità di pescatori delle Lofoten, con una tappa golosa alla bakery del paese.',
    cosaVedere: ['Il villaggio storico', 'La bakery tradizionale'],
    cosaFare: ['Visita guidata al Museo dei Pescatori (vedi la scheda esperienza dedicata)', 'Pranzo lungo la strada a Sakrisøy da Anita\'s Seafood'],
    doveDormire: 'Non ho pernottato ad Å: si dorme a Nesland/Flakstad.',
    doveMangiare:
      'La bakery storica del paese (pochi posti a sedere, ma dolci ottimi). Lungo la strada, a Sakrisøy, Anita\'s Seafood: panini farciti, zuppe, sushi, vista sul fiordo. Si ordina al bancone, niente servizio al tavolo.',
    comeArrivare: 'Circa 50 minuti d\'auto da Nesland/Flakstad.',
    comeSpostarsi: 'A piedi, il villaggio è piccolo.',
    periodoMigliore: 'ci sono stato in estate, sotto la pioggia; per gli altri mesi non ho un riferimento diretto',
    costi: 'non mi sono segnato i costi di questa tappa',
    erroriDaEvitare: [],
    miaEsperienza:
      'Å mi ha colpito anche sotto la pioggia: il Museo dei Pescatori, con la visita guidata in inglese, racconta bene una parte di storia locale che altrove nel viaggio si vede solo di sfuggita.',
    luoghi: [
      {
        nome: "Museo dei Pescatori (Norsk Fiskeværsmuseum)",
        testo: "Il museo del villaggio di Å, con case, magazzini e un forno storico, raccontano la vita dei pescatori delle Lofoten. La visita guidata in inglese spiega bene la storia locale.",
        come: "Da Nesland circa 50 minuti d'auto; il museo si visita con guida o in autonomia.",
        quando: "Mattina, con visita guidata.",
        tempo: "1,5-2 ore",
        url: "https://www.museumnord.no",
        consiglio: "Con la pioggia, come quando ci sono stato, è comunque una buona visita al coperto."
      },
      {
        nome: "Panificio storico di Å",
        testo: "Una panetteria in funzione dal 1844, con cannella e dolci fatti sul posto; pochi posti a sedere ma ottimo.",
        come: "A piedi nel villaggio.",
        quando: "Mattina.",
        tempo: "30 minuti",
        consiglio: "Prendere una girella alla cannella: è la cosa tipica."
      },
      {
        nome: "Sakrisøy e Anita's Seafood",
        testo: "Sul percorso verso Å c'è Sakrisøy, villaggio di casette gialle, e Anita's Seafood, dove si mangiano zuppe, panini e sushi. Si ordina al bancone, senza servizio al tavolo.",
        come: "In auto, lungo la strada verso Å.",
        quando: "Pranzo.",
        tempo: "1 ora",
        consiglio: "Vista sul fiordo dal tavolo esterno."
      }
    ],
    sapori: [
      {
        nome: "Cinnamon rolls dal panificio",
        testo: "Girelle fresche del panificio storico."
      },
      {
        nome: "Zuppa di pesce da Anita's",
        testo: "Zuppa e panini con vista sul fiordo."
      }
    ],
    attenzioni: [
      "Å è la fine della strada E10: non c'è altro oltre, parcheggiare con calma.",
      "Il tempo cambia in fretta: portare impermeabile."
    ],
    esperienzeSlugs: ['museo-dei-pescatori'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Rastrelliere tradizionali per l\'essiccazione dello stoccafisso al tramonto, con montagne innevate sullo sfondo, Lofoten',
    immagine: '/images/norvegia/a-stock.jpg',
  },
  {
    slug: 'tromso',
    paeseSlug: 'norvegia',
    ordine: 8,
    nome: 'Tromsø',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '5 giorni, viaggio a sé rispetto alle Lofoten',
    visitataPersonalmente: true,
    introduzione:
      'La "capitale artica" della Norvegia, ben più a nord delle Lofoten: base per la caccia all\'aurora boreale, husky sledding e cultura sami, con la Cattedrale Artica come simbolo della città.',
    percheAndarci: 'Per l\'aurora boreale e per un pacchetto di attività artiche molto concentrato in pochi giorni, con la città stessa come base comoda a piedi.',
    cosaVedere: [
      'Cattedrale Artica (Ishavskatedralen), a forma di iceberg, con una delle vetrate a mosaico più grandi d\'Europa',
      'Fjellheisen, la funivia che sale sul monte Storsteinen (465 m) con vista su città e fiordi: cabina ogni 30 minuti, 4-5 minuti di salita, aperta fino a mezzanotte in inverno',
      'Polaria, il centro artico con cinema panoramico, vasca delle foche e acquari di specie del mare del nord',
      'Polar Museum, dedicato alla storia delle spedizioni polari norvegesi (caccia alle foche, spedizioni artiche, Amundsen)',
    ],
    cosaFare: [
      'Aurora chase in minibus (vedi la scheda esperienza dedicata)',
      'Husky sledding a Tromsø Villmarkssenter (vedi la scheda esperienza dedicata)',
      'Esperienza sami con le renne (vedi la scheda esperienza dedicata)',
      'Whale watching invernale verso Skjervøy (in questo viaggio non l\'ho fatto), vedi la scheda esperienza dedicata',
      'Notte in igloo di vetro nel Lyngenfjord (in questo viaggio non l\'ho fatta), vedi la scheda esperienza dedicata',
    ],
    doveDormire: 'Non ricordo con precisione dove ho dormito. La zona più comoda è quella del porto/Storgata, a pochi passi da negozi, bar e dal punto di ritrovo di gran parte delle escursioni; una doppia in hotel centrale in alta stagione costa indicativamente 140-170€/notte.',
    doveMangiare: 'Ho ricordi generici più che locali precisi: la cucina locale ruota molto intorno a granchio reale (kongekrabbe) e baccalà essiccato (tørrfisk/lutefisk), diffusi nei ristoranti della zona di Storgata.',
    comeArrivare: 'Volo diretto o con scalo su Tromsø.',
    comeSpostarsi: 'A piedi in centro; minibus/pullman organizzati per le escursioni fuori città.',
    periodoMigliore: 'da fine settembre a fine marzo per l\'aurora, con notte polare (poca luce diurna) tra dicembre e gennaio',
    costi:
      'Fjellheisen: 645 NOK (circa 55€) andata e ritorno adulti, 310 NOK (circa 27€) bambini 3-15 anni (2026). Polaria: circa 400-450 NOK (35-39€). Polar Museum: 130 NOK (circa 11€). Aurora chase in minibus: 100-160€ a persona. Husky sledding: 170-320€ a persona. Esperienza sami con le renne: da 145€ a persona. Whale watching: 130-260€ a persona. Doppia in hotel centrale in alta stagione: 140-170€/notte.',
    erroriDaEvitare: [
      'Prenotare le escursioni serali con un minimo di anticipo, soprattutto nei mesi di punta (novembre-marzo)',
      'Sottovalutare il vento sul lungomare: si sente più del previsto',
      'Provare a fare tutto: tra aurora, husky, sami e whale watching il conto sale in fretta. Meglio scegliere 2-3 attività e viverle bene',
    ],
    miaEsperienza:
      'Di questo viaggio mi sono rimasti dei flash più che un diario dettagliato: il freddo pungente appena scesi dall\'aereo, il buio della notte polare, e l\'aurora vista muoversi nel cielo per la prima volta durante l\'aurora chase in minibus. Le attività fatte, però, le ricordo bene, e qui sotto trovi tutto quello che serve per organizzarle allo stesso modo, o meglio.',
    luoghi: [
      {
        nome: "Cattedrale Artica (Ishavskatedralen)",
        testo: "Chiesa del 1965 a forma di iceberg, sul lato opposto del ponte rispetto al centro. La vetrata a mosaico che ricopre la facciata est è tra le più grandi d'Europa.",
        come: "A piedi attraverso il ponte (circa 25 minuti) o con bus 24 dal centro.",
        quando: "Mattina o pomeriggio; la sera si tengono concerti.",
        tempo: "45 minuti",
        url: "https://ishavskatedralen.no",
        consiglio: "Se c'è un concerto di mezzanotte in estate, meglio prenotare."
      },
      {
        nome: "Fjellheisen e Storsteinen",
        testo: "La funivia che sale in pochi minuti sopra la città; in cima c'è un belvedere sui fiordi e sulle isole. D'inverno è un posto per vedere l'aurora senza spostarsi.",
        come: "Dal centro con il bus 28 o con una passeggiata di 15 minuti; la cabina parte circa ogni 30 minuti.",
        quando: "Sera in inverno per le luci della città, giorno in estate.",
        tempo: "1-2 ore",
        costo: "645 NOK andata e ritorno adulti, 310 NOK bambini 3-15 anni (2026)",
        url: "https://www.fjellheisen.no",
        consiglio: "Salita rapida, ma vestirsi caldo in cima."
      },
      {
        nome: "Polaria",
        testo: "Il centro artico con acquari di specie del Mare del Nord, vasche con foche e un cinema panoramico sul clima polare.",
        come: "A piedi dal centro, accanto al porto.",
        quando: "Giorno, in particolare se piove.",
        tempo: "1,5 ore",
        url: "https://polaria.no",
        consiglio: "Orari delle alimentazioni delle foche sul sito."
      },
      {
        nome: "Polar Museum",
        testo: "Museo ospitato in un edificio storico del porto, sulla storia delle spedizioni polari norvegesi di Amundsen e dei cacciatori di foche artici.",
        come: "A piedi dal centro.",
        quando: "Giorno.",
        tempo: "1 ora",
        url: "https://uit.no/tmu/polarmuseet",
        consiglio: "Più interessante di quanto sembri, per chi ama la storia delle esplorazioni."
      },
      {
        nome: "Mack's Ølhallen",
        testo: "Il pub storico della birreria Mack, fondata nel 1877 e per decenni tra le più settentrionali del mondo, con birra alla spina. Un posto da locali, senza pretese.",
        come: "A piedi dal centro, in Storgata.",
        quando: "Sera.",
        tempo: "1 ora",
        consiglio: "Provare una birra locale: si ordina al bancone."
      },
      {
        nome: "Caccia all'aurora in minibus",
        testo: "Un'uscita serale con guida fuori città, lontano dalle luci, per cercare l'aurora in cielo sereno. Il tour più frequente dura 5-6 ore.",
        come: "Prenotato con operatore, partenza dal centro in minibus.",
        quando: "Da fine settembre a fine marzo, notte con poche nuvole.",
        tempo: "5-6 ore",
        consiglio: "È stata la prima volta che ho visto l'aurora muoversi nel cielo."
      },
      {
        nome: "Husky e renne sami",
        testo: "A Tromsø Villmarkssenter si può guidare una slitta di husky; altre aziende organizzano visite a un campo sami con le renne e racconti della cultura locale.",
        come: "Prenotazione con operatore; trasferimento in minibus.",
        quando: "Inverno, con la neve.",
        tempo: "mezza giornata",
        consiglio: "Vestirsi a strati: ci si ferma spesso."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Cattedrale Artica",
          "Fjellheisen",
          "Polaria o Polar Museum",
          "Cena in centro"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: husky sledding o renne",
          "Sera: caccia all'aurora in minibus"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: whale watching a Skjervøy (non fatto) o relax in centro",
          "Ultima sera: Mack's Ølhallen"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro (Storgata e porto)",
        perChi: "Chi non ha l'auto",
        testo: "A pochi passi da negozi, bar e dal punto di ritrovo delle escursioni. Doppie in alta stagione da 140-170 euro a notte."
      },
      {
        nome: "Tromsdalen",
        perChi: "Chi vuole un po' di tranquillità",
        testo: "Dall'altra parte del ponte, vicino alla Cattedrale Artica e alla funivia; si va in centro in bus."
      }
    ],
    sapori: [
      {
        nome: "Granchio reale (kongekrabbe)",
        testo: "Dalla zona di Storgata si mangiano gambe di granchio reale, ricco e dolce."
      },
      {
        nome: "Stoccafisso (tørrfisk)",
        testo: "Merluzzo essiccato, cucina tipica del nord."
      },
      {
        nome: "Renna",
        testo: "Servita in stufato o in padella, tipica della cucina sami."
      }
    ],
    attenzioni: [
      "Aurora: non è garantita, serve cielo sereno e attività solare; prevedere più sere.",
      "Il freddo pungente e le giornate di notte polare richiedono strati termici veri.",
      "Prezzi alti: confrontare i tour prima di prenotare."
    ],
    esperienzeSlugs: ['aurora-chase-minibus-tromso', 'husky-sledding-tromso', 'sami-renne-lavvu-tromso', 'whale-watching-tromso', 'glass-igloo-lyngen'],
    tripSlugs: ['tromso'],
    imageAlt: 'Cattedrale Artica di Tromsø illuminata di sera con aurora boreale sullo sfondo',
    immagine: '/images/norvegia/tromso-stock.jpg',
  },
]
