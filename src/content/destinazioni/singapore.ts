import type { Destinazione } from '@/lib/types'

// Città-stato: le "destinazioni" qui sotto sono aree e quartieri, non città.
// Non sono stati inventati nomi di hotel o ristoranti; i centri hawker e i
// siti pubblici citati sono luoghi, non esercizi commerciali.

export const destinazioniSingapore: Destinazione[] = [
  {
    slug: 'marina-bay',
    paeseSlug: 'singapore',
    ordine: 1,
    nome: 'Marina Bay e i Gardens',
    tipologia: ['architettura', 'città', 'panorami'],
    giorniConsigliati: '1 giorno, con la sera dedicata ai Gardens',
    visitataPersonalmente: true,
    introduzione:
      'La baia costruita su terra strappata al mare, dove sta tutto quello che rende Singapore riconoscibile: l\'hotel con la nave sul tetto, i Supertree alti cinquanta metri, le serre climatizzate e il museo a forma di fiore di loto. È la città come vuole essere vista, e funziona.',
    percheAndarci:
      'Perché è uno degli esperimenti urbanistici più riusciti degli ultimi trent\'anni: un\'intera baia progettata da zero che rischiava di diventare un centro commerciale a cielo aperto. Invece regge, soprattutto dopo il tramonto.',
    cosaVedere: [
      'I Supertree Grove di Gardens by the Bay, con lo spettacolo di luci serale gratuito',
      'Le serre Flower Dome e Cloud Forest, con la cascata coperta più alta del mondo',
      'Il Marina Bay Sands e la sua piattaforma panoramica sul tetto',
      'Il ponte Helix e il Merlion, la statua simbolo della città',
      'L\'ArtScience Museum, a forma di loto, sulla punta della baia',
      'Il lungobaia illuminato, che si percorre a piedi tutto attorno',
    ],
    cosaFare: [
      'Spettacolo di luci ai Supertree dopo il tramonto (vedi la scheda esperienza dedicata)',
      'Camminata completa attorno alla baia, circa 3,5 km, meglio all\'ora blu',
      'Salita a un rooftop bar invece della piattaforma panoramica: si paga un cocktail e si ha la stessa vista',
      'Serate al Marina Barrage, la diga con il prato sul tetto dove i singaporiani fanno volare gli aquiloni',
    ],
    doveDormire:
      'La zona è la più cara della città. Chi ci dorme lo fa per la vista; chi vuole spendere meno sta a Chinatown, Bugis o Geylang e arriva qui in metropolitana in dieci minuti, che è la scelta ragionevole.',
    doveMangiare:
      'È la parte della città dove si mangia peggio in rapporto al prezzo: i ristoranti attorno alla baia sono pensati per chi non si sposta. Il consiglio è mangiare altrove e venire qui dopo cena, oppure fermarsi al Satay by the Bay, il centro hawker all\'interno dei Gardens, che è l\'unica opzione a prezzi normali della zona.',
    comeArrivare: 'Metropolitana: le fermate Bayfront, Marina Bay e Promenade servono tutta l\'area. Dall\'aeroporto sono circa 30 minuti in MRT.',
    comeSpostarsi:
      'Tutto a piedi, ma con un\'avvertenza: il caldo è serio e l\'ombra è poca. I passaggi sotterranei climatizzati che collegano i centri commerciali sono la vera rete pedonale della città e vale la pena usarli.',
    periodoMigliore:
      'tutto l\'anno, meglio di sera: ci sono le luci, e di giorno l\'umidità sulla baia è pesante e l\'asfalto rimanda il calore.',
    costi:
      'la baia, i Supertree e lo spettacolo di luci sono gratuiti; le serre costano attorno ai 30-50 SGD, la piattaforma del Marina Bay Sands circa 30. Quasi tutto il resto si vede senza pagare nulla.',
    erroriDaEvitare: [
      'Pagare la piattaforma panoramica del Marina Bay Sands: costa quanto un cocktail al bar dello stesso edificio, che ha la stessa vista e ci si siede',
      'Andare ai Gardens a metà giornata, quando fa caldissimo e le luci non ci sono',
      'Saltare le serre pensando che siano un giardino botanico qualsiasi: la Cloud Forest, con la cascata coperta di trenta metri, è la cosa più sorprendente della zona',
      'Cenare attorno alla baia: si paga il doppio per mangiare peggio che in qualsiasi centro hawker',
    ],
    miaEsperienza:
      'Mi aspettavo un posto artificiale, e invece Marina Bay funziona. Vale la pena capire perché: la baia è chiusa da una diga che ha trasformato l\'acqua di mare in un bacino d\'acqua dolce e risolto metà del problema idrico del paese. Sapendolo, i Supertree smettono di essere alberi finti e diventano quello che sono: torri di raccolta dell\'acqua piovana e di ventilazione per le serre, con i pannelli solari in cima. Lo spettacolo di luci serale è gratuito e dura una quindicina di minuti. Ci siamo sdraiati sul prato sotto le torri insieme a centinaia di persone: è la cosa più bella della città e non costa niente. La Cloud Forest, con la cascata di trenta metri dentro una cupola di vetro climatizzata, è l\'altra sorpresa. La regola di tutta la zona: non pagare per la vista dall\'alto e ordinare un cocktail al bar dello stesso grattacielo.',
    luoghi: [
      {
        nome: "Supertree Grove di Gardens by the Bay",
        testo: "Diciotto strutture a forma di albero alte fino a cinquanta metri, coperte di piante e dotate di pannelli solari. Servono davvero a ventilare le serre e a raccogliere l'acqua piovana. La sera si illuminano e c'è uno spettacolo di luci gratuito.",
        come: "MRT fino a Bayfront, poi un passaggio coperto che porta ai giardini. Il bosco dei Supertree si gira da soli e senza biglietto; la passerella sospesa (OCBC Skyway) si paga a parte.",
        quando: "Dopo il tramonto per lo spettacolo di luci, che dura circa quindici minuti e si ripete due volte a sera. Gli orari esatti sono sul sito ufficiale.",
        tempo: "1 ora e mezza",
        costo: "ingresso ai giardini e allo spettacolo gratuito",
        url: "https://www.gardensbythebay.com.sg/",
        consiglio: "Stendersi sul prato sotto le torri, come fanno i singaporiani, e guardare lo spettacolo da sdraiati."
      },
      {
        nome: "Cloud Forest e Flower Dome",
        testo: "Due serre climatizzate. Nella Cloud Forest una montagna coperta di felci e orchidee ha al centro una cascata di trenta metri; il Flower Dome ricrea un clima mediterraneo con ulivi e baobab.",
        come: "Dentro Gardens by the Bay, a pochi minuti a piedi dai Supertree. Biglietto d'ingresso per ogni serra, percorso a senso unico.",
        quando: "Al mattino, quando c'è meno gente e fuori fa meno caldo. Con la pioggia sono il rifugio ideale.",
        tempo: "1 ora per serra",
        consiglio: "Se se ne sceglie una sola, la Cloud Forest: è la più sorprendente della zona."
      },
      {
        nome: "Marina Bay Sands e il bar sul tetto",
        testo: "L'hotel con la nave di 340 metri sopra tre torri è il simbolo della città. La piattaforma panoramica sul tetto ha una vista a trecentosessanta gradi sulla baia e sul porto.",
        come: "MRT fino a Bayfront, il centro commerciale collega direttamente le torri. Per salire c'è la piattaforma a pagamento o il bar sul tetto, dove si ordina da bere.",
        quando: "Al tramonto, con la città che si accende.",
        tempo: "1 ora",
        consiglio: "Meglio un cocktail al bar sul tetto dello stesso edificio che il biglietto della piattaforma: la vista è la stessa e ci si siede."
      },
      {
        nome: "Helix Bridge, Merlion e lungobaia",
        testo: "Il ponte pedonale a doppia elica, ispirato al DNA, è il modo migliore per attraversare la baia. Il Merlion, mezzo leone e mezzo pesce, è la statua simbolo della città ed è piccolo, ma lo sfondo è quello giusto.",
        come: "A piedi dal Marina Bay Sands o da Esplanade. Il giro completo della baia misura circa 3,5 chilometri.",
        quando: "All'ora blu, quando le luci si accendono ma c'è ancora un po' di cielo.",
        tempo: "1 ora e mezza per il giro completo",
        costo: "gratuito",
        consiglio: "Fare il giro in senso orario partendo dal Merlion, così si arriva ai Gardens a luci già accese."
      },
      {
        nome: "ArtScience Museum",
        testo: "Il museo a forma di fiore di loto sulla punta della baia ospita mostre temporanee su arte, scienza e tecnologia, spesso immersive. Il programma cambia, quindi conviene controllare cosa c'è.",
        come: "A piedi dal Marina Bay Sands, di fronte alla baia.",
        quando: "Nelle ore calde del giorno, perché è al chiuso e climatizzato.",
        tempo: "1 ora e mezza",
        consiglio: "Guardare il programma prima di decidere: si paga per le mostre, non per l'edificio."
      },
      {
        nome: "Marina Barrage",
        testo: "La diga che ha chiuso la baia e trasformato l'acqua di mare in un bacino d'acqua dolce. Sul tetto c'è un prato dove i singaporiani vanno a fare volare gli aquiloni.",
        come: "MRT fino a Marina Bay, poi pochi minuti di autobus o taxi. È una tappa tranquilla, lontana dai flussi.",
        quando: "Al tramonto, con la skyline di fronte.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Portare un aquilone, o semplicemente un telo e qualcosa da bere."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina presto: giro di Helix Bridge, Merlion e lungobaia",
          "Tarda mattina: Cloud Forest e Flower Dome, al fresco",
          "Pranzo al Satay by the Bay o in un centro hawker fuori dalla zona",
          "Pomeriggio: ArtScience Museum o riposo in albergo, nelle ore di caldo",
          "Tramonto: cocktail al bar sul tetto del Marina Bay Sands",
          "Sera: Supertree Grove con lo spettacolo di luci, sdraiati sul prato"
        ]
      },
      {
        titolo: "Mezza giornata",
        tappe: [
          "Pomeriggio inoltrato: lungobaia e Helix Bridge",
          "Tramonto al Marina Barrage",
          "Sera: spettacolo di luci ai Supertree"
        ]
      }
    ],
    zone: [
      {
        nome: "Marina Bay",
        perChi: "chi vuole la vista e non guarda al prezzo",
        testo: "Alberghi di alta gamma attorno alla baia. La vista è eccezionale, ma i prezzi sono i più alti della città e i ristoranti sono pensati per chi non si sposta."
      },
      {
        nome: "Chinatown e Tanjong Pagar",
        perChi: "chi vuole risparmiare restando in centro",
        testo: "Si raggiunge la baia in metropolitana in dieci minuti. Vicinissimi a centri hawker, bar e ristoranti, e molto più economici."
      },
      {
        nome: "Bugis e Kampong Glam",
        perChi: "chi cerca vita serale e buon rapporto qualità-prezzo",
        testo: "Quartiere vivace, con molte opzioni di alloggio e il collegamento diretto con la baia. Un po' rumoroso nei fine settimana."
      }
    ],
    sapori: [
      {
        nome: "Satay",
        testo: "Spiedini di carne marinata cotti alla brace e serviti con salsa di arachidi. Al Satay by the Bay, dentro i Gardens, si mangiano a prezzi normali."
      },
      {
        nome: "Chilli crab",
        testo: "Granchio in salsa densa di peperoncino e uovo, da mangiare con le mani e con il pane fritto per intingere. È il piatto simbolo della città e si trova nei ristoranti di pesce, non nei centri hawker più economici."
      },
      {
        nome: "Kaya toast con uova e caffè",
        testo: "La colazione tradizionale: pane tostato con marmellata di cocco e uova poco cotte da mescolare con salsa di soia. Si trova nei caffè storici, anche vicino alla baia."
      },
      {
        nome: "Chicken rice",
        testo: "Pollo bollito con riso cotto nel brodo e salsa di zenzero. Il piatto nazionale non ufficiale; migliore nei centri hawker che nei locali attorno alla baia."
      }
    ],
    attenzioni: [
      "Il caldo è serio tra le undici e le tre. Meglio muoversi la mattina e la sera, e usare i passaggi coperti e climatizzati tra i centri commerciali.",
      "Le regole sono severe e vengono applicate: multe per chi getta rifiuti, fuma fuori dalle aree consentite o attraversa fuori dalle strisce. Le sigarette elettroniche sono vietate.",
      "Il Merlion e i punti più fotografati sono affollati: tenere il portafoglio in tasca davanti, anche se i furti sono rari.",
      "Chi cena attorno alla baia paga molto di più per un piatto mediocre: in dieci minuti di metropolitana si mangia meglio e a un terzo del prezzo."
    ],
    esperienzeSlugs: ['gardens-by-the-bay'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Le tre torri del Marina Bay Sands affacciate sull\'acqua della baia, Singapore',
    immagine: '/images/singapore/marina-bay.jpg',
  },
  {
    slug: 'quartieri-etnici',
    paeseSlug: 'singapore',
    ordine: 2,
    nome: 'Chinatown, Little India e Kampong Glam',
    tipologia: ['cultura', 'gastronomia', 'città'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'I tre quartieri storici delle comunità che hanno fatto Singapore, ognuno con il proprio tempio o moschea, la propria cucina e il proprio ritmo. Qui la città smette di sembrare un progetto.',
    percheAndarci:
      'Perché sono la parte che resta quando si toglie lo skyline: shophouse a due piani, botteghe, templi in funzione, e i centri hawker dove si mangia per tre euro una cucina che altrove sarebbe da ristorante.',
    cosaVedere: [
      'Il Buddha Tooth Relic Temple e il Sri Mariamman, il tempio indù più antico della città, entrambi a Chinatown',
      'Il Maxwell Food Centre e il Chinatown Complex, i due centri hawker storici',
      'Il tempio Sri Veeramakaliamman e le vie di tessuti e spezie di Little India',
      'La Tekka Centre, il mercato coperto di Little India',
      'La moschea Sultan a Kampong Glam e le case colorate di Haji Lane',
      'Il quartiere di Tiong Bahru, con l\'architettura razionalista degli anni Trenta e il suo mercato',
    ],
    cosaFare: [
      'Pranzo o cena in un centro hawker, il modo giusto di mangiare in questa città (vedi la scheda esperienza dedicata)',
      'Camminare i tre quartieri in sequenza, che sono a poche fermate di metropolitana uno dall\'altro',
      'Colazione con kaya toast e uovo alla coque, che è il rito mattutino locale',
      'Una sera a Haji Lane, tra murales e locali piccoli, che è la zona meno istituzionale della città',
    ],
    doveDormire:
      'Chinatown e Bugis sono le zone migliori per rapporto qualità-prezzo: centrali, servite dalla metropolitana e molto più economiche di Marina Bay. Little India ha i prezzi più bassi in assoluto.',
    doveMangiare:
      'Qui si mangia, e si mangia in un centro hawker. Il pollo di Hainan con il riso cotto nel brodo è il piatto nazionale; poi il laksa di Katong con il latte di cocco, il char kway teow, il chilli crab (che costa molto di più e si mangia altrove, sul mare), il roti prata e il teh tarik a Little India, il nasi padang a Kampong Glam. La regola: la coda più lunga indica il banco migliore, e ci si mette in fila.',
    comeArrivare: 'Metropolitana: Chinatown, Little India e Bugis hanno tutte la loro fermata, a poche stazioni di distanza.',
    comeSpostarsi: 'A piedi dentro ogni quartiere, in MRT tra l\'uno e l\'altro. Sono tutti nel raggio di tre chilometri.',
    periodoMigliore:
      'tutto l\'anno. I momenti speciali sono il Capodanno cinese a Chinatown, il Deepavali a Little India e l\'Hari Raya a Kampong Glam, quando i rispettivi quartieri si illuminano. Nel Capodanno cinese, però, molti banchi hawker a gestione familiare chiudono per giorni.',
    costi:
      'quasi nulli: i quartieri si camminano, i templi sono gratuiti o quasi, e un pasto completo in un centro hawker sta tra i 3 e i 6 euro. È la Singapore che si può fare con pochi soldi.',
    erroriDaEvitare: [
      'Mangiare nei ristoranti con aria condizionata e menu illustrato quando a cinquanta metri c\'è un centro hawker: si paga il triplo per un piatto peggiore',
      'Andare a Chinatown solo per la via dei souvenir, che è la parte meno interessante del quartiere',
      'Dimenticare le regole nei templi: spalle e ginocchia coperte, scarpe fuori dove indicato',
      'Girare a mezzogiorno: tra le undici e le tre il caldo è pesante, ed è anche l\'ora di punta ai centri hawker',
    ],
    miaEsperienza:
      'Questa è la Singapore che fa cambiare idea a chi la crede solo una città di grattacieli e regole. I centri hawker sono l\'invenzione civile più riuscita del paese: negli anni Settanta il governo tolse i venditori ambulanti dalla strada per ragioni igieniche. Invece di eliminarli li mise tutti sotto tettoie con acqua corrente e licenze, e oggi si mangia una cucina straordinaria per tre euro, seduti a tavoli condivisi, in un posto che chiunque può permettersi. Per orientarsi il sistema è banale e funziona: abbiamo sempre guardato quale banco aveva la coda e ci siamo messi in fila. Camminando tra Chinatown, Little India e Kampong Glam nello stesso pomeriggio, mi ha colpito quanto poco si somiglino: cambiano gli odori, la musica, la lingua che si sente per strada, e sono a due fermate di metropolitana di distanza. Il dettaglio locale da conoscere: sui tavoli si trovano pacchetti di fazzoletti appoggiati da soli. È il "chope", il modo di prenotare il posto, e non si sposta.',
    luoghi: [
      {
        nome: "Buddha Tooth Relic Temple",
        testo: "Tempio buddista in stile Tang a Chinatown, costruito nel 2007 per conservare una reliquia attribuita al Buddha. Dentro è sontuoso, con dorature e una grande stupa d'oro. Il quartiere intorno è stato in parte ricostruito.",
        come: "MRT fino a Chinatown. Si entra gratis, a spalle e ginocchia coperte. Alcune sale sono riservate.",
        quando: "Al mattino, quando il tempio è più tranquillo.",
        tempo: "45 minuti",
        costo: "ingresso gratuito",
        consiglio: "Salire al tetto, dove c'è un giardino con una grande ruota di preghiera."
      },
      {
        nome: "Sri Mariamman Temple",
        testo: "Il tempio indù più antico della città, fondato nel 1827 e dedicato alla dea Mariamman. La torre d'ingresso è coperta di figure scolpite e dipinte.",
        come: "A pochi passi dalla fermata di Chinatown. Scarpe fuori dove indicato.",
        quando: "Al mattino, o durante le feste indù quando il tempio è pieno di fedeli.",
        tempo: "30 minuti",
        costo: "ingresso gratuito",
        consiglio: "Controllare in anticipo se c'è una cerimonia: il tempio cambia volto."
      },
      {
        nome: "Maxwell Food Centre e Chinatown Complex",
        testo: "Due dei centri hawker più frequentati del quartiere, con decine di banchi sotto una tettoia. È il modo più rapido di capire come si mangia a Singapore.",
        come: "A piedi da Chinatown o dalla fermata di Maxwell. Si sceglie il banco, si ordina, si cerca un tavolo condiviso e poi si ritira il piatto.",
        quando: "Pranzo e cena sono le ore di punta, con code. A metà mattina o nel tardo pomeriggio si mangia con più calma.",
        tempo: "1 ora",
        consiglio: "Mettersi in fila dove la fila è più lunga: è il metodo più affidabile."
      },
      {
        nome: "Sri Veeramakaliamman Temple e le vie di Little India",
        testo: "Il tempio dedicato alla dea Kali, in una via di negozi di sari, ghirlande di fiori, spezie e oro. Little India è il quartiere con più colori e profumi della città.",
        come: "MRT fino a Little India. A piedi tra Serangoon Road, Campbell Lane e le vie laterali. Scarpe fuori nel tempio.",
        quando: "Il tardo pomeriggio e la sera, quando le botteghe sono aperte e il quartiere è più vivo. Durante il Deepavali è illuminato a festa.",
        tempo: "2 ore",
        consiglio: "Cercare il Tekka Centre, il mercato coperto con il centro hawker al primo piano, per un pasto indiano economico."
      },
      {
        nome: "Sultan Mosque e Haji Lane",
        testo: "La grande moschea dalla cupola d'oro è il centro di Kampong Glam, il quartiere malese-arabo. Le vie attorno, Arab Street e Haji Lane, hanno tessuti, profumi, caffè e murales.",
        come: "MRT fino a Bugis, poi pochi minuti a piedi. La moschea si visita fuori dagli orari di preghiera, con abiti lunghi e capo coperto per le donne; prestano un abbigliamento.",
        quando: "Al mattino per la moschea; il tardo pomeriggio per le vie.",
        tempo: "1 ora e mezza",
        consiglio: "Controllare gli orari di preghiera prima di salire, perché la visita si chiude durante la preghiera."
      },
      {
        nome: "Tiong Bahru",
        testo: "Il quartiere residenziale più vecchio della città, con palazzi razionalisti a scivolo degli anni Trenta, caffè indipendenti e il mercato con il centro hawker.",
        come: "MRT fino a Tiong Bahru e a piedi. Il quartiere è piccolo e si gira in un'ora.",
        quando: "Al mattino, per il mercato e la colazione.",
        tempo: "1 ora",
        consiglio: "Mangiare al centro hawker del mercato al piano superiore, dove i banchi sono molto frequentati dai residenti."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Buddha Tooth Relic Temple e Sri Mariamman a Chinatown",
          "Pranzo al Maxwell Food Centre",
          "Primo pomeriggio: pausa climatizzata o Tiong Bahru",
          "Tardo pomeriggio: Little India, con il tempio e le vie dei fiori",
          "Sera: cena indiana al Tekka Centre o nelle vie attorno"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Chinatown, Maxwell Food Centre, Tiong Bahru e Little India alla sera",
          "Giorno 2: mattina alla Sultan Mosque, Arab Street e Haji Lane; pranzo a Bugis; pomeriggio libero",
          "Sera: cena in un altro centro hawker a scelta"
        ]
      }
    ],
    zone: [
      {
        nome: "Chinatown e Tanjong Pagar",
        perChi: "chi vuole stare vicino ai centri hawker e al centro",
        testo: "Ostelli e alberghi di fascia media, molti bar e ristoranti. Un po' di vita notturna, ma la sera è ancora gestibile."
      },
      {
        nome: "Little India e Farrer Park",
        perChi: "chi vuole risparmiare e mangiare indiano",
        testo: "Alloggi tra i più economici della città, con ottimo cibo vicino. Le vie sono animate e il rumore non manca."
      },
      {
        nome: "Kampong Glam e Bugis",
        perChi: "chi vuole locali e comodità",
        testo: "Molta scelta di alberghi e ostelli, collegamento diretto con la baia. Il fine settimana la zona è affollata."
      }
    ],
    sapori: [
      {
        nome: "Chicken rice",
        testo: "Pollo bollito con riso al brodo di pollo e salsa di zenzero e peperoncino. Si mangia in qualsiasi centro hawker; Maxwell Food Centre è famoso per questo."
      },
      {
        nome: "Laksa",
        testo: "Noodles di riso in brodo di cocco speziato con gamberi e vongole. Si trova nei banchi della cucina peranakan e malese, anche a Kampong Glam."
      },
      {
        nome: "Roti prata",
        testo: "Frittella indiana piatta, croccante fuori e morbida dentro, da intingere nel curry. Si trova a Little India e nei ristoranti di cucina indiana del Sud."
      },
      {
        nome: "Biryani e banana leaf",
        testo: "A Little India il pranzo tradizionale su una foglia di banana, con riso, curry vegetali e carne. Si mangia con la mano destra."
      }
    ],
    attenzioni: [
      "Spalle e ginocchia coperte nei templi e nella moschea, scarpe fuori dove indicato. Alcune sale sono vietate ai non fedeli.",
      "I banchi più famosi hanno code molto lunghe a pranzo: andare presto o fuori orario. Molti chiudono quando finiscono gli ingredienti.",
      "Non buttare rifiuti per strada e non fumare fuori dalle aree consentite: le multe ci sono e sono alte.",
      "Durante il Capodanno cinese molti banchi a gestione familiare chiudono per giorni: se si viaggia in quel periodo, controllare in anticipo."
    ],
    esperienzeSlugs: ['hawker-centre'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Trengganu Street a Chinatown, con le shophouse e le lanterne rosse, Singapore',
    immagine: '/images/singapore/quartieri-etnici.jpg',
  },
  {
    slug: 'natura-singapore',
    paeseSlug: 'singapore',
    ordine: 3,
    nome: 'La Singapore verde',
    tipologia: ['natura', 'parchi', 'fauna selvatica'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'La parte che quasi nessuno mette in programma: un giardino botanico patrimonio UNESCO, una riserva di foresta primaria in mezzo all\'isola, sentieri sopraelevati tra le chiome e un\'isola senza auto dove si gira in bicicletta tra le case di legno.',
    percheAndarci:
      'Perché smonta l\'idea che Singapore sia solo cemento: quasi la metà del territorio è coperta da verde, il piano urbanistico si chiama proprio "città dentro un giardino", e a venti minuti di metropolitana dal centro finanziario ci sono scimmie e varani.',
    cosaVedere: [
      'I Singapore Botanic Gardens, patrimonio UNESCO, con il National Orchid Garden',
      'La Bukit Timah Nature Reserve, foresta pluviale primaria attorno alla collina più alta dell\'isola',
      'Il MacRitchie Reservoir con il TreeTop Walk, la passerella sospesa sopra la foresta',
      'L\'isola di Pulau Ubin, dieci minuti di barca, senza auto, con le ultime case di legno del kampong',
      'Il Southern Ridges, il percorso di ponti pedonali tra le colline del sud, con l\'Henderson Waves',
    ],
    cosaFare: [
      'Camminare il sentiero di MacRitchie fino al TreeTop Walk, circa 10 km ad anello',
      'Giornata in bicicletta a Pulau Ubin, con la laguna di Chek Jawa',
      'Botanic Gardens all\'apertura, quando è pieno di gente del posto che corre e fa tai chi',
      'Southern Ridges al tramonto, camminando sull\'Henderson Waves',
    ],
    doveDormire: 'Nessuna di queste zone è una base sensata: si dorme in centro e ci si arriva in metropolitana o con una corsa breve.',
    doveMangiare:
      'Nessuna offerta dentro le riserve, a parte qualche chiosco: si porta acqua in quantità, perché il caldo umido sui sentieri è serio. A Pulau Ubin ci sono un paio di ristoranti di pesce nel villaggio del molo, semplici e giusti così.',
    comeArrivare:
      'Botanic Gardens e MacRitchie hanno fermate della metropolitana o sono raggiungibili in pochi minuti di corsa; per Pulau Ubin si va a Changi Point e si prende un bumboat, che parte quando ha dodici passeggeri a bordo.',
    comeSpostarsi: 'A piedi nelle riserve, in bicicletta a Pulau Ubin (si noleggia al molo).',
    periodoMigliore:
      'tutto l\'anno, al mattino presto. Dopo le dieci il caldo e l\'umidità rendono i sentieri molto più pesanti di quanto la distanza lasci pensare.',
    costi: 'tutto gratuito, compresi Botanic Gardens, MacRitchie e Pulau Ubin; solo il National Orchid Garden ha un biglietto di pochi dollari.',
    erroriDaEvitare: [
      'Sottovalutare il clima: dieci chilometri a MacRitchie con questa umidità valgono il doppio, e lungo il percorso l\'acqua non si compra',
      'Avvicinarsi ai macachi o mangiare davanti a loro: a MacRitchie e Bukit Timah sono abituati agli esseri umani e strappano le borse',
      'Arrivare al TreeTop Walk troppo tardi: la passerella ha orari di chiusura e si percorre in una sola direzione',
      'Considerare Pulau Ubin una gita opzionale: è il posto dove si vede come era Singapore prima del 1965, e non esiste più altrove',
    ],
    miaEsperienza:
      'È la parte di Singapore che ribalta l\'idea che ci si fa prima di arrivare. A venti minuti di metropolitana dalla baia dei grattacieli c\'è una foresta pluviale vera, con i macachi sui sentieri e i varani che attraversano davanti, e il TreeTop Walk di MacRitchie è una passerella sospesa sopra le chiome che nessuno associa a questa città. I Botanic Gardens al mattino presto sono la scena più bella e meno turistica di tutte: gente del posto che corre, gruppi di anziani che fanno tai chi sotto gli alberi, famiglie sui prati. Un parco usato, più che visitato. Il posto che vale più di tutti però è Pulau Ubin: dieci minuti su una barca di legno che parte solo quando ha dodici passeggeri, e si sbarca in un\'isola senza auto, con le case di legno su palafitte, i sentieri sterrati e le biciclette a noleggio. È come era Singapore prima del 1965, ed è rimasta solo lì. Vale come contrappeso a tutto il resto, e costa quanto il traghetto.',
    luoghi: [
      {
        nome: "Singapore Botanic Gardens",
        testo: "Giardino botanico di epoca coloniale, patrimonio UNESCO dal 2015. Prati, laghi, foresta pluviale residua e il National Orchid Garden, con migliaia di orchidee, in gran parte a pagamento.",
        come: "MRT fino a Botanic Gardens (linea Downtown), con ingresso direttamente dalla stazione. Si visita da soli.",
        quando: "All'alba o al mattino presto, quando i residenti corrono e fanno tai chi sotto gli alberi.",
        tempo: "2 ore",
        costo: "ingresso ai giardini gratuito; il National Orchid Garden ha un biglietto a parte",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Arrivare prima delle otto: dopo il caldo diventa pesante e il giardino perde il meglio."
      },
      {
        nome: "MacRitchie Reservoir e TreeTop Walk",
        testo: "Un bacino circondato da foresta pluviale con sentieri e una passerella sospesa a 25 metri, che attraversa la volta degli alberi. Macachi, varani e scoiattoli sui sentieri.",
        come: "Autobus dalla MRT di Caldecott o Marymount fino all'ingresso. La passerella è raggiungibile solo a piedi, con un percorso di circa 11 chilometri a/r dalla sponda principale.",
        quando: "Al mattino presto, per il fresco e per essere in tempo: il TreeTop Walk ha orari di apertura e si percorre in un solo senso.",
        tempo: "3-4 ore",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Portare molta acqua: lungo il sentiero non ci sono negozi."
      },
      {
        nome: "Bukit Timah Nature Reserve",
        testo: "Foresta pluviale primaria attorno alla collina più alta dell'isola, 163 metri. Una delle poche aree di foresta primaria rimaste a Singapore, con macachi e uccelli.",
        come: "Autobus dalla MRT di Beauty World. Sentieri segnati di varie lunghezze, con scale e pendenze.",
        quando: "Al mattino presto.",
        tempo: "2-3 ore",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Tenere le borse chiuse e il cibo nascosto: i macachi strappano tutto."
      },
      {
        nome: "Pulau Ubin",
        testo: "Isola a dieci minuti di barca, dove vivono ancora poche famiglie nelle case di legno del vecchio kampong. Non ci sono auto: si noleggia una bici e si gira tra mangrovie, vecchie cave e sentieri.",
        come: "Bumboat dal terminal di Changi Point Ferry. La barca parte quando ha dodici passeggeri. Biciclette a noleggio sull'isola.",
        quando: "Al mattino. L'ultima barca di ritorno è la sera: controllare l'orario all'arrivo.",
        tempo: "mezza giornata",
        consiglio: "Noleggiare una bici e andare verso Chek Jawa, la zona umida con la passerella sul mare."
      },
      {
        nome: "Southern Ridges e Henderson Waves",
        testo: "Un percorso di dieci chilometri tra parchi collegati da passerelle sospese. Henderson Waves è il ponte pedonale più alto di Singapore, con una forma ondulata in legno.",
        come: "MRT fino a Labrador Park o Harbourfront. Il percorso si fa a tratti e si può interrompere in vari punti.",
        quando: "Al mattino o al tramonto. A mezzogiorno è senza ombra.",
        tempo: "2-3 ore",
        costo: "gratuito",
        url: "https://www.nparks.gov.sg/",
        consiglio: "Fare il tratto Henderson Waves - Forest Walk, il più suggestivo, e finire al Mount Faber."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Alba: Botanic Gardens, con colazione in uno dei caffè del parco",
          "Metà mattina: MRT e autobus per MacRitchie, TreeTop Walk",
          "Pranzo in un centro hawker di Toa Payoh o Bishan",
          "Pomeriggio: riposo al fresco",
          "Tramonto: Henderson Waves e Southern Ridges"
        ]
      },
      {
        titolo: "Giornata alternativa: Pulau Ubin",
        tappe: [
          "Mattina presto: bumboat da Changi Point",
          "Giro in bici fino a Chek Jawa",
          "Pranzo nell'unico caffè dell'isola",
          "Rientro nel pomeriggio, prima del caldo massimo"
        ]
      }
    ],
    zone: [
      {
        nome: "Orchard e Newton",
        perChi: "chi vuole stare vicino ai Botanic Gardens",
        testo: "Alberghi e centri commerciali, a pochi minuti dai giardini in MRT. Comoda e cara."
      },
      {
        nome: "Dintorni di Bishan o Toa Payoh",
        perChi: "chi vuole vivere come i residenti",
        testo: "Quartieri residenziali con ottimi centri hawker e prezzi bassi; pochi alberghi, ma ci sono appartamenti."
      }
    ],
    sapori: [
      {
        nome: "Nasi lemak",
        testo: "Riso al cocco con acciughe fritte, uovo, cetriolo e sambal. Una colazione nei centri hawker."
      },
      {
        nome: "Carrot cake",
        testo: "Non è il dolce: è una frittata di daikon e riso, saltata in padella nella versione bianca o nera. Si mangia nei centri hawker."
      },
      {
        nome: "Kopi e teh",
        testo: "Caffè e tè con latte condensato, ordinati in un codice proprio (kopi-o, kopi-c, teh-peng). Si ordina a banco."
      },
      {
        nome: "Ice kachang",
        testo: "Ghiaccio tritato con fagioli dolci, gelatine, mais e sciroppo colorato. Il dessert delle giornate calde."
      }
    ],
    attenzioni: [
      "Il clima è l'ostacolo principale: dopo le dieci il caldo e l'umidità rendono i sentieri molto più pesanti di quanto la distanza faccia pensare. Acqua e partenza all'alba.",
      "I macachi di MacRitchie e Bukit Timah strappano borse e cibo. Non mostrare cibo, non guardarli negli occhi, non dargli niente.",
      "Non uscire dai sentieri segnati e non prendere nulla dalla riserva: ci sono multe per chi lo fa.",
      "Per Pulau Ubin portare contanti: nell'isola le carte non sempre funzionano."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Un sentiero tra piante tropicali e palme nei Singapore Botanic Gardens',
    immagine: '/images/singapore/natura-singapore.jpg',
  },
  {
    slug: 'sentosa',
    paeseSlug: 'singapore',
    ordine: 4,
    nome: 'Sentosa e il sud',
    tipologia: ['mare', 'famiglia', 'parchi'],
    giorniConsigliati: 'mezza giornata o un giorno intero con i parchi',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola a sud, collegata da un ponte, una monorotaia e una funivia: spiagge artificiali, parchi a tema, acquario e il punto più meridionale dell\'Asia continentale, una passerella pedonale su un isolotto, con tanto di cartello.',
    percheAndarci:
      'Per i parchi, se si viaggia con bambini, e per la funivia sopra il porto, che è il modo migliore di vedere quanto sia grande il traffico marittimo che passa da qui: Singapore è uno dei porti più trafficati del pianeta e da lassù si contano le navi in rada a decine.',
    cosaVedere: [
      'Universal Studios Singapore e il S.E.A. Aquarium a Resorts World',
      'Le spiagge di Siloso, Palawan e Tanjong, artificiali ma attrezzate',
      'La funivia Mount Faber-Sentosa, sopra il porto',
      'Il Fort Siloso, l\'unica fortificazione costiera britannica conservata, con la storia della caduta di Singapore nel 1942',
      'Il punto più meridionale dell\'Asia continentale, sull\'isolotto collegato da un ponte sospeso a Palawan Beach',
    ],
    cosaFare: [
      'Funivia da Mount Faber, che è il modo giusto di arrivare',
      'Giornata ai parchi, se ci sono bambini o se piove',
      'Camminare il Southern Ridges fino a Mount Faber e poi scendere a Sentosa in funivia',
      'Fort Siloso, che è gratuito e racconta la parte di storia che l\'isola di solito non mostra',
    ],
    doveDormire: 'Gli hotel di Sentosa sono cari e isolati dal resto della città: ha senso solo per chi passa più giorni nei parchi con dei bambini.',
    doveMangiare:
      'L\'offerta sull\'isola è tutta a prezzi da parco a tema. Il consiglio è mangiare prima o dopo, a VivoCity, il centro commerciale da cui parte la monorotaia, che ha un food court normale al piano alto.',
    comeArrivare:
      'Monorotaia da VivoCity (fermata MRT HarbourFront), funivia da Mount Faber o a piedi sul ponte pedonale, che è gratuito e dura dieci minuti.',
    comeSpostarsi: 'Navette interne gratuite, monorotaia e molte camminate: l\'isola è lunga e i punti d\'interesse sono distanti tra loro.',
    periodoMigliore: 'tutto l\'anno. Nei fine settimana e nelle vacanze scolastiche l\'isola è molto affollata di residenti.',
    costi:
      'l\'accesso all\'isola a piedi è gratuito, la monorotaia costa pochi dollari; la spesa vera sono i parchi: Universal Studios e l\'acquario hanno prezzi da parco internazionale.',
    erroriDaEvitare: [
      'Aspettarsi spiagge: sono artificiali, con sabbia importata, e davanti c\'è la rada delle petroliere. Vanno prese per quello che sono',
      'Pagare la monorotaia all\'andata: il ponte pedonale è gratuito, coperto e ci si mette dieci minuti',
      'Programmare una giornata intera se non si vanno a fare i parchi: mezza giornata basta e avanza',
      'Andarci nel fine settimana, quando metà Singapore è lì',
    ],
    miaEsperienza:
      'Sentosa è la tappa su cui vale la pena essere onesti: è un\'isola di intrattenimento, con spiagge artificiali di sabbia importata che guardano una rada piena di petroliere in attesa. Chi ci va cercando il mare torna indietro perplesso. Con dei bambini, o in una giornata di pioggia, i parchi e l\'acquario sono ottimi e giustificano tutto. Per tutti gli altri, le due cose che rendono il viaggio sono altre: la funivia da Mount Faber, che passa sopra il porto e permette di vedere quante navi ci sono in rada (Singapore è uno dei porti più trafficati del mondo e dall\'alto si capisce cosa significhi), e il Fort Siloso, gratuito, con i cannoni puntati verso il mare e la storia di come la città cadde in mano giapponese nel 1942, da terra, mentre l\'artiglieria guardava dalla parte sbagliata. Per quelle due cose la mezza giornata vale.',
    luoghi: [
      {
        nome: "Fort Siloso",
        testo: "L'unica fortificazione costiera britannica conservata a Singapore, con tunnel, cannoni e figure di cera. Racconta la caduta della città nel 1942, quando i cannoni puntavano al mare e i giapponesi arrivarono da terra.",
        come: "Dentro Sentosa, sulla punta occidentale. Si arriva con il bus interno o a piedi da Siloso Beach. Percorso a piedi con scale e tunnel.",
        quando: "Al mattino, prima del caldo.",
        tempo: "1 ora e mezza",
        costo: "gratuito",
        url: "https://www.sentosa.com.sg/",
        consiglio: "Salire sulle piattaforme dei cannoni: la vista su rada e petroliere spiega il traffico del porto."
      },
      {
        nome: "Funivia Mount Faber - Sentosa",
        testo: "Cabine sospese che attraversano il porto da Mount Faber all'isola, con vista sulle navi in rada. Singapore è uno dei porti più trafficati al mondo e da qui si vede.",
        come: "MRT fino a HarbourFront, poi si sale a Mount Faber o si prende la funivia direttamente dal VivoCity. Biglietto a pagamento.",
        quando: "Al tramonto.",
        tempo: "1 ora",
        consiglio: "Prenderla in un senso solo e tornare a piedi o in monorotaia."
      },
      {
        nome: "Siloso, Palawan e Tanjong Beach",
        testo: "Spiagge create con sabbia importata, con bar, giochi e una vista sulla rada dove aspettano le petroliere. Palawan è la più adatta ai bambini; Tanjong la più tranquilla.",
        come: "Con il bus o la monorotaia interna da Sentosa Station.",
        quando: "Al mattino e nei giorni feriali. Nei fine settimana sono piene di residenti.",
        tempo: "2 ore",
        consiglio: "Non aspettarsi il mare: venire per il relax di una giornata di pioggia o con bambini."
      },
      {
        nome: "Universal Studios e S.E.A. Aquarium",
        testo: "Il parco a tema e uno degli acquari più grandi del mondo, a Resorts World Sentosa. Prezzi da parco internazionale.",
        come: "Si raggiunge con la monorotaia da VivoCity, fermata Resorts World. Biglietti online.",
        quando: "Nei giorni feriali; i fine settimana sono molto affollati.",
        tempo: "giornata intera per il parco, 2 ore per l'acquario",
        url: "https://www.sentosa.com.sg/",
        consiglio: "Prenotare online per saltare la coda alla cassa."
      },
      {
        nome: "Punto più a sud dell'Asia continentale",
        testo: "Un isolotto su Palawan Beach, collegato da un ponte sospeso, che si presenta come il punto più meridionale dell'Asia continentale. Un tratto simbolico, con vista sul mare.",
        come: "A piedi da Palawan Beach, con un ponte di pochi minuti.",
        quando: "Al tramonto.",
        tempo: "20 minuti",
        costo: "gratuito",
        consiglio: "Prima di farne una tappa, ricordare che è un monumento turistico più che un luogo naturale."
      }
    ],
    programmi: [
      {
        titolo: "Mezza giornata",
        tappe: [
          "Mattina: ponte pedonale da VivoCity, Fort Siloso",
          "Siloso Beach per una pausa",
          "Rientro con la funivia da Sentosa al Mount Faber, al tramonto"
        ]
      },
      {
        titolo: "1 giorno con i parchi",
        tappe: [
          "Apertura: Universal Studios, le attrazioni più richieste per prime",
          "Pranzo a Resorts World o nei centri hawker di VivoCity",
          "Pomeriggio: S.E.A. Aquarium",
          "Tramonto: spiaggia di Palawan e punto più a sud"
        ]
      }
    ],
    zone: [
      {
        nome: "Dentro Sentosa",
        perChi: "famiglie che vogliono stare nei parchi",
        testo: "Resort di fascia alta, comodi per i parchi ma lontani dalla vita cittadina e dai centri hawker."
      },
      {
        nome: "HarbourFront e VivoCity",
        perChi: "chi vuole stare vicino senza pagare i prezzi dell'isola",
        testo: "Alberghi di fascia media davanti al centro commerciale, con collegamento diretto a Sentosa a piedi o in monorotaia."
      }
    ],
    sapori: [
      {
        nome: "Hawker centre di VivoCity",
        testo: "Il punto più comodo per mangiare prima o dopo l'isola, con le specialità locali a prezzi molto più bassi di quelli di Sentosa."
      },
      {
        nome: "Pesce alla griglia (BBQ stingray)",
        testo: "Razza cucinata alla brace con sambal, un piatto da centro hawker. Non è a Sentosa: si trova nei centri sulla terraferma."
      },
      {
        nome: "Cendol",
        testo: "Dessert di ghiaccio tritato, latte di cocco, sciroppo di palma e gelatine verdi. Si trova nei centri hawker."
      },
      {
        nome: "Satay",
        testo: "Spiedini alla brace con salsa di arachidi, anche nei chioschi dell'isola ma a prezzi più alti."
      }
    ],
    attenzioni: [
      "Il ponte pedonale da VivoCity è gratuito e coperto, e ci si mette dieci minuti: la monorotaia all'andata non serve.",
      "Pagare l'ingresso di un parco senza aver controllato le offerte online costa molto di più dello stesso biglietto acquistato in anticipo.",
      "I fine settimana e le vacanze scolastiche l'isola è affollata di residenti: se possibile, venire in un giorno feriale.",
      "In spiaggia l'acqua davanti alla rada non è il motivo per venire: i bar servono più del mare."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Una cabina della funivia di Sentosa sopra la foresta dell\'isola, con il porto sullo sfondo',
    immagine: '/images/singapore/sentosa.jpg',
  },
]
