import type { Destinazione } from '@/lib/types'

// Tappe di "Brasile in 22 giorni" (src/content/viaggi/68-brasile-itinerario.md)
// e delle sue due estensioni (Pantanal, Amazzonia). Le tappe del viaggio fatto
// dall'autore hanno visitataPersonalmente: true; le due estensioni, solo
// proposte nell'articolo, restano false. miaEsperienza solo dove c'è il viaggio. Nessun nome di
// hotel, ristorante o operatore inventato. Prezzi indicativi 2026.

export const destinazioniBrasile: Destinazione[] = [
  {
    slug: 'rio-de-janeiro',
    paeseSlug: 'brasile',
    ordine: 1,
    nome: 'Rio de Janeiro',
    tipologia: ['città', 'mare', 'panorami'],
    giorniConsigliati: '4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una metropoli stretta tra montagne di granito, foresta atlantica e oceano, con le spiagge di Copacabana e Ipanema, il Cristo Redentor sul Corcovado e il Pão de Açúcar all\'ingresso della baia di Guanabara.',
    percheAndarci: 'Per i panorami dall\'alto, le spiagge in città, il samba di Lapa e la cucina dei botecos.',
    cosaVedere: [
      'Il Cristo Redentor sul Corcovado',
      'Il Pão de Açúcar al tramonto',
      'Copacabana, Ipanema e la Pedra do Arpoador',
      'Santa Teresa e la Escadaria Selarón',
      'Il centro storico, il Real Gabinete Português de Leitura e il Museu do Amanhã',
    ],
    cosaFare: [
      'Salire al Cristo con la prima corsa del mattino',
      'Applaudire il tramonto dall\'Arpoador',
      'Una serata di samba a Lapa, andata e ritorno in app',
      'La feijoada del sabato',
    ],
    doveDormire: 'Ipanema, Leblon o Copacabana: economico 200-350 R$, medio 450-800 R$, alto oltre 1.200 R$ a notte.',
    doveMangiare: 'Botecos, churrascarias a rodízio, locali a peso, pastel e caldo de cana nei mercati.',
    comeArrivare: "Dall'aeroporto internazionale del Galeão (GIG), a circa 20 km dalla Zona Sul, Copacabana e Ipanema sono a 40-60 minuti, di più nelle ore di punta. Il taxi delle cooperative ufficiali si paga al banco degli arrivi a tariffa fissa comunale, circa 122-126 R$ per Copacabana, Ipanema e Leblon (145-150 R$ la sera, di notte e nei festivi); Uber e 99 costano circa 60-100 R$ dalla zona di prelievo indicata nell'app. Mai accettare corse da chi si avvicina negli arrivi. I voli interni arrivano anche al Santos Dumont, in centro.",
    comeSpostarsi: 'Metro tra zona sud e centro, taxi ufficiali e app; a piedi solo di giorno nelle zone frequentate.',
    periodoMigliore: 'maggio-ottobre, inverno mite e secco; dicembre-marzo caldo e piovoso.',
    costi: "Budget basso circa 50-70 € al giorno a persona (pousada o ostello, locali a peso, metro); medio 120-180 € (hotel a Ipanema o Copacabana, ristoranti, Cristo e Pão de Açúcar, app per gli spostamenti); alto da 300 € in su (hotel sul lungomare, churrascarias e ristoranti di livello, guida privata). Cristo Redentor 87 R$ con la van dal centro visitatori Paineiras (132 R$ da Copacabana o Largo do Machado), 139 R$ con il trenino da Cosme Velho; Pão de Açúcar 205 R$ il biglietto intero; Jardim Botânico 80 R$ per gli stranieri (2026).",
    erroriDaEvitare: [
      'Tenere il telefono in mano per strada o appoggiato sul telo in spiaggia',
      'Camminare la sera in zone deserte invece di usare un\'app',
      'Salire al Cristo a mezzogiorno, quando spesso è tra le nuvole e affollato',
    ],
    miaEsperienza:
      "Il Brasile l'ho cominciato da qui: quattro giorni a Rio, fra il Cristo Redentor, Santa Teresa e la Escadaria Selarón, il Pão de Açúcar, Copacabana e Ipanema, il tramonto dalla Pedra do Arpoador e le serate di samba a Lapa. Il Cristo Redentor l'ho visto anche dall'alto, sorvolandolo in elicottero. A Rio il mio contatto è Sylvain.",
    luoghi: [
      {
        "nome": "Cristo Redentor",
        "testo": "La statua di 30 metri (38 con il piedistallo) sul Corcovado, a circa 700 metri sopra la città. Dall'alto si capisce la forma di Rio: le spiagge, la laguna Rodrigo de Freitas e il Pão de Açúcar all'ingresso della baia.",
        "come": "Con il trenino a cremagliera da Cosme Velho o con le van ufficiali da Paineiras. Il biglietto si compra online scegliendo giorno e orario.",
        "quando": "Prima corsa del mattino, prima delle nuvole e della folla. A mezzogiorno spesso la statua è tra le nuvole.",
        "tempo": "3-4 ore tra salita, visita e discesa",
        "costo": "Trenino dal Cosme Velho 139 R$, circa 24 €, per adulti di qualsiasi nazionalità, 112 R$ per i bambini 7-11 anni; van ufficiali da Paineiras circa 87 R$, circa 15 € (2026)",
        "lat": -22.95194,
        "lng": -43.21056,
        "url": "https://www.tremdocorcovado.rio/",
        "consiglio": "Vai la mattina e porta una giacca leggera: in cima c'è vento."
      },
      {
        "nome": "Pão de Açúcar",
        "testo": "Il monolite di granito all'ingresso della baia di Guanabara. La funivia sale in due tratte, prima al Morro da Urca e poi in cima, con vista a 360 gradi.",
        "come": "Funivia dalla stazione di Praia Vermelha, nel quartiere di Urca. Chi cammina può salire a piedi fino all'Urca con un sentiero breve e prendere la funivia solo per la seconda tratta.",
        "quando": "Tardo pomeriggio, per il tramonto sulla baia e la città che si accende.",
        "tempo": "2-3 ore",
        "costo": "205 R$ il biglietto intero, circa 35 €; la tariffa ridotta vale solo per i brasiliani (2026)",
        "orari": "Da lunedì a venerdì 8:30-21, sabato e domenica 7:30-21; ultimo imbarco alle 19:30",
        "lat": -22.9494,
        "lng": -43.1567,
        "url": "https://www.bondinho.com.br/",
        "consiglio": "Arriva un'ora prima del tramonto per non fare la coda."
      },
      {
        "nome": "Copacabana, Ipanema e l'Arpoador",
        "testo": "Le due spiagge urbane più famose di Rio, divise in «postos», le torrette dei bagnini che indicano anche la tribù di ogni tratto. Tra le due c'è la Pedra do Arpoador, dove la gente applaude il tramonto.",
        "come": "In metro (Cardeal Arcoverde, Siqueira Campos e Cantagalo per Copacabana, General Osório per Ipanema) o a piedi lungo il lungomare.",
        "quando": "Mattina per la spiaggia; tramonto all'Arpoador.",
        "tempo": "Mezza giornata",
        "costo": "Libero; sedie e ombrelloni si affittano dalle barracas",
        "lat": -22.99056,
        "lng": -43.19167,
        "consiglio": "Sul telo porta solo ciò che sei disposto a perdere: telefono e portafoglio non vanno lasciati incustoditi."
      },
      {
        "nome": "Santa Teresa e la Escadaria Selarón",
        "testo": "Il quartiere sulla collina con ville storiche, atelier e il tram giallo (bondinho). La Escadaria Selarón, scalinata coperta di piastrelle colorate, scende verso Lapa.",
        "come": "In app o taxi fino a Santa Teresa, poi a piedi; la scalinata si scende verso Lapa.",
        "quando": "Di giorno.",
        "tempo": "2-3 ore",
        "costo": "Scalinata libera",
        "lat": -22.91541,
        "lng": -43.17941,
        "consiglio": "Ci si va di giorno e si rientra in app."
      },
      {
        "nome": "Centro storico e Museu do Amanhã",
        "testo": "Il centro ha la Confeitaria Colombo, il Theatro Municipal, la cattedrale a cono e la biblioteca del Real Gabinete Português de Leitura. Al porto, la piazza Mauá con il Museu do Amanhã e il Boulevard Olímpico pieno di murales.",
        "come": "In metro da Ipanema e Copacabana.",
        "quando": "Nei feriali, di giorno: nel fine settimana il centro si svuota.",
        "tempo": "Mezza giornata",
        "orari": "Museu do Amanhã da giovedì a martedì 10-18, ultimo ingresso alle 17; chiuso il mercoledì",
        "lat": -22.89413,
        "lng": -43.1794,
        "url": "https://museudoamanha.org.br/",
        "consiglio": "Il centro si gira di giorno: la sera e nel fine settimana si svuota."
      },
      {
        "nome": "Lapa e il samba",
        "testo": "Il quartiere sotto gli archi dell'acquedotto, con locali di samba dal vivo e strade piene il venerdì e il sabato.",
        "come": "In app andata e ritorno, evitando di camminare di notte.",
        "quando": "Venerdì e sabato sera.",
        "tempo": "Una serata",
        "lat": -22.91259,
        "lng": -43.17985,
        "consiglio": "Con in tasca solo il telefono e i contanti per la serata. Attenzione agli scippi nella folla a fine serata."
      },
      {
        "nome": "Jardim Botânico",
        "testo": "Il giardino botanico fondato nel 1808 dal principe reggente Giovanni di Portogallo, ai piedi del Corcovado. Il viale delle palme imperiali, le serre delle orchidee e delle bromelie e le scimmie e i tucani tra gli alberi ne fanno la pausa verde più bella della città.",
        "come": "In taxi o app da Ipanema e Leblon, 10-15 minuti; biglietti anche online su jbrj.eleventickets.com.",
        "quando": "Mattina presto, con il fresco e gli animali più attivi.",
        "tempo": "2-3 ore",
        "costo": "80 R$ per gli stranieri, circa 14 € (2026)",
        "orari": "Arboreto da giovedì a martedì 8-17, il mercoledì 11-17; chiuso il 25 dicembre e il 1° gennaio",
        "lat": -22.9675,
        "lng": -43.22389,
        "url": "https://www.gov.br/jbrj/pt-br/assuntos/visitacao/horarios-e-ingressos"
      },
      {
        "nome": "Parque Lage",
        "testo": "Una villa degli anni Venti con il cortile e la piscina al centro, dentro un parco di foresta atlantica sotto il Corcovado. Oggi ospita una scuola d'arte e un caffè, e dal cortile si vede il Cristo sopra la vegetazione.",
        "come": "A piedi dal Jardim Botânico, 10 minuti lungo Rua Jardim Botânico.",
        "quando": "Mattina, abbinato al Jardim Botânico.",
        "tempo": "1 ora",
        "lat": -22.96055,
        "lng": -43.21204
      },
      {
        "nome": "Real Gabinete Português de Leitura",
        "testo": "La biblioteca della comunità portoghese, finita nel 1887 in stile neomanuelino: tre piani di scaffali di legno sotto un lucernario, con oltre 350.000 volumi. È una delle sale di lettura più fotografate del mondo.",
        "come": "In centro, a piedi da Largo da Carioca o dalla metro Carioca.",
        "quando": "Nei giorni feriali.",
        "tempo": "30 minuti",
        "orari": "Da lunedì a venerdì 10-17",
        "lat": -22.90544,
        "lng": -43.18219,
        "url": "https://www.realgabinete.com.br/",
        "consiglio": "Si entra in silenzio: è una biblioteca in uso, non solo un monumento."
      },
      {
        "nome": "Museu de Arte do Rio (MAR)",
        "testo": "Il museo d'arte sulla Praça Mauá, accanto al Museu do Amanhã, in due edifici uniti da una copertura ondulata. Le mostre raccontano Rio e il Brasile e dalla terrazza si vede la baia.",
        "come": "A piedi dal Museu do Amanhã; in metro fino a Uruguaiana e poi VLT.",
        "quando": "Il martedì, quando l'ingresso è gratuito.",
        "tempo": "1-2 ore",
        "costo": "20 R$, circa 3,5 €; gratis il martedì (2026)",
        "orari": "Mostre 11-18, ultimo ingresso alle 17; chiuso il mercoledì",
        "lat": -22.89657,
        "lng": -43.18199,
        "url": "https://museudeartedorio.org.br/"
      },
      {
        "nome": "Mosteiro de São Bento",
        "testo": "Il monastero benedettino su una collina del centro, iniziato nel Seicento. La facciata è semplice, l'interno è tutto legno intagliato e dorato, uno dei grandi esempi del barocco brasiliano.",
        "come": "A piedi dalla Praça Mauá; si sale con l'ascensore da Rua Dom Gerardo.",
        "quando": "La domenica mattina per la messa con il canto gregoriano dei monaci, oppure nei feriali.",
        "tempo": "30-45 minuti",
        "lat": -22.89703,
        "lng": -43.17805,
        "consiglio": "Spalle e gambe coperte: è una chiesa in funzione."
      },
      {
        "nome": "Lagoa Rodrigo de Freitas",
        "testo": "La laguna dietro Ipanema e Leblon, circondata da una pista ciclabile e pedonale di circa 7 km, con chioschi sull'acqua e il Corcovado sopra. È il giro in bici più semplice della città.",
        "come": "A piedi da Ipanema; bici a noleggio lungo la riva.",
        "quando": "Fine pomeriggio e tramonto.",
        "tempo": "1-2 ore",
        "costo": "Libero",
        "lat": -22.97112,
        "lng": -43.21172
      },
      {
        "nome": "Vista Chinesa",
        "testo": "Un belvedere a forma di pagoda nel Parco Nazionale della Tijuca, la foresta dentro la città. Da qui si vedono la laguna, Ipanema, il Pão de Açúcar e il Cristo.",
        "come": "Solo in auto, taxi da app o tour; la strada sale nella foresta dal Jardim Botânico.",
        "quando": "Mattina con il cielo limpido.",
        "tempo": "1 ora con la strada",
        "costo": "Libero",
        "lat": -22.97316,
        "lng": -43.24976,
        "consiglio": "Non salire a piedi sulle strade della foresta: meglio un tour o un'auto con autista."
      },
      {
        "nome": "Maracanã",
        "testo": "Lo stadio inaugurato per i Mondiali del 1950, il tempio del calcio brasiliano. Si visita con un tour degli spogliatoi e del campo, oppure si va a una partita del Flamengo o del Fluminense.",
        "come": "Metro fino alla stazione Maracanã.",
        "quando": "Una sera di partita, oppure di giorno per il tour.",
        "tempo": "1-2 ore il tour, una serata la partita",
        "lat": -22.9122,
        "lng": -43.2303,
        "consiglio": "Alle partite si va e si torna in metro o in app, senza oggetti di valore."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Cristo Redentor con la prima corsa",
          "Pranzo a Santa Teresa o in centro",
          "Pomeriggio: Pão de Açúcar",
          "Sera: tramonto e cena a Ipanema"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: programma da 1 giorno",
          "Giorno 2: mattina in spiaggia a Ipanema e Copacabana, pomeriggio al centro, Real Gabinete e Museu do Amanhã, sera a Lapa"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Jardim Botânico e Parque Lage al mattino, giro della Lagoa in bici",
          "Pomeriggio: Santa Teresa e la Escadaria Selarón",
          "Tramonto all'Arpoador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ipanema e Leblon",
        "perChi": "Chi vuole sicurezza e ristoranti",
        "testo": "La zona più curata, con mare e metro vicina.",
        "fascia": "90-250 €"
      },
      {
        "nome": "Copacabana",
        "perChi": "Chi cerca l'atmosfera classica e i prezzi più bassi",
        "testo": "Il lungomare è sempre vivo, ma alcune vie interne sono meno sicure di notte.",
        "fascia": "50-180 €"
      },
      {
        "nome": "Santa Teresa",
        "perChi": "Chi cerca atmosfera artistica",
        "testo": "Pousadas in ville storiche, ma sulla collina e con strade ripide. La sera meglio spostarsi in app.",
        "fascia": "60-150 €"
      }
    ],
    sapori: [
      {
        "nome": "Feijoada",
        "testo": "Stufato di fagioli neri con carni di maiale, servito con riso, couve e farofa. Tradizionale il sabato."
      },
      {
        "nome": "Churrascarias a rodízio",
        "testo": "Carne alla griglia servita al tavolo a volontà."
      },
      {
        "nome": "Pastel e caldo de cana",
        "testo": "Fagottino fritto e succo di canna da zucchero, tipici dei mercati."
      },
      {
        "nome": "Locali a peso",
        "testo": "Buffet pagato a chilo, il pranzo quotidiano dei carioca."
      },
      {
        "nome": "Caipirinha",
        "testo": "Cachaça, lime e zucchero, ovunque."
      }
    ],
    attenzioni: [
      "Furti di telefoni in spiaggia e per strada, rapine nelle zone deserte la sera: niente gioielli e telefono in mano. Sulle spiagge di città non restare dopo il buio.",
      "Poco contante, ma una piccola somma da consegnare in caso di rapina, senza opporre resistenza.",
      "Con Uber e 99 usa l'app ufficiale e controlla targa e nome dell'autista: gli avvisi ufficiali segnalano falsi autisti, anche in aeroporto.",
      "Gli avvisi ufficiali (per esempio quelli del governo britannico) sconsigliano di visitare le favelas, anche con tour guidati.",
      "Dengue diffusa nelle città: repellente e maniche lunghe al tramonto."
    ],
    gite: [
      {
        "nome": "Niterói e il MAC",
        "distanza": "20 minuti di traghetto",
        "come": "Barca dalla stazione di Praça XV, in centro, poi a piedi o in app fino al museo.",
        "testo": "Dall'altra parte della baia c'è il Museo d'Arte Contemporanea di Oscar Niemeyer, il disco bianco sospeso sulla scogliera, con la vista migliore su Rio e il Pão de Açúcar."
      },
      {
        "nome": "Petrópolis",
        "distanza": "circa 70 km, 1,5 ore",
        "come": "Bus dalla rodoviária Novo Rio o auto con autista.",
        "testo": "La città imperiale sulle montagne, dove la corte passava l'estate: il Museo Imperiale nel palazzo di Pietro II, la cattedrale e il fresco della Serra dos Órgãos."
      },
      {
        "nome": "Ilha Grande",
        "distanza": "circa 150 km, 2,5-3 ore più la barca",
        "come": "Van e barca combinate dalla Zona Sul, o bus fino a Conceição de Jacareí e barca; meglio con una notte.",
        "testo": "Un'isola senza auto coperta di foresta atlantica, con sentieri tra le spiagge come Lopes Mendes. Fa parte del sito UNESCO della Costa Verde insieme a Paraty."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Rio de Janeiro?",
        "risposta": "Tre o quattro giorni: uno per il Cristo e Santa Teresa, uno per il Pão de Açúcar e le spiagge, uno per il centro e Lapa, più un margine per il meteo."
      },
      {
        "domanda": "Dove dormire a Rio?",
        "risposta": "Ipanema e Leblon sono le zone più curate e sicure, Copacabana costa meno e ha il lungomare sempre vivo, Santa Teresa ha più atmosfera ma è in collina. Conviene stare vicino a una fermata della metro."
      },
      {
        "domanda": "Cristo Redentor: trenino o van?",
        "risposta": "Il trenino a cremagliera da Cosme Velho (139 R$) attraversa la foresta della Tijuca; le van ufficiali da Paineiras costano meno (circa 87 R$). Entrambi si prenotano online con giorno e orario."
      },
      {
        "domanda": "A che ora salire al Pão de Açúcar?",
        "risposta": "Un'ora prima del tramonto, per vedere la baia con la luce e la città che si accende. L'ultimo imbarco è alle 19:30."
      },
      {
        "domanda": "Rio è sicura per i turisti?",
        "risposta": "Il rischio principale sono furti e scippi: telefono in tasca, niente gioielli, poco contante e app invece di camminare di notte. Gli avvisi ufficiali sconsigliano le favelas, anche con i tour."
      },
      {
        "domanda": "Qual è il periodo migliore per Rio?",
        "risposta": "Da maggio a ottobre, con l'inverno mite e secco. Da dicembre a marzo fa caldo e piove spesso nel pomeriggio; il Carnevale riempie la città e fa salire i prezzi."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Il Cristo Redentor sul Corcovado sopra la baia di Rio de Janeiro, con il Pão de Açúcar',
    immagine: '/images/viaggi/brasile-itinerario/giorno-02-rio-de-janeiro.jpg',
  },
  {
    slug: 'costa-verde',
    paeseSlug: 'brasile',
    ordine: 2,
    nome: 'Paraty e Ilha Grande',
    tipologia: ['mare', 'città coloniale', 'isole', 'foresta'],
    giorniConsigliati: '4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La Costa Verde tra Rio e São Paulo comprende la città coloniale di Paraty, porto dell\'oro nel Settecento, e Ilha Grande, isola senza auto coperta di foresta atlantica. Dal 2019 sono patrimonio UNESCO insieme alla Serra da Bocaina.',
    percheAndarci: 'Per la baia di Paraty in barca, le cascate dell\'entroterra e spiagge come Lopes Mendes.',
    cosaVedere: [
      'Il centro storico di Paraty',
      'Le isole della baia di Paraty',
      'Trindade e la piscina naturale del Cachadaço',
      'Lopes Mendes, Lagoa Azul e Lagoa Verde a Ilha Grande',
    ],
    cosaFare: [
      'Un giro in escuna nella baia',
      'Le cascate e gli alambiques di cachaça della strada di Cunha',
      'I sentieri nella foresta di Ilha Grande',
    ],
    doveDormire: 'Pousadas nel centro di Paraty (300-700 R$) e a Vila do Abraão (250-600 R$).',
    comeArrivare: "Da Rio a Paraty il bus dalla rodoviária Novo Rio impiega circa 4 ore e mezza; i biglietti si comprano qualche giorno prima nei fine settimana. In auto si fa la stessa strada lungo la BR-101, la Rio-Santos. Per Ilha Grande si prende una van fino ad Angra dos Reis o Conceição de Jacareí e poi la barca per Vila do Abraão: da Paraty circa 3 ore in tutto, da Rio 3-4 ore. Il transfer combinato van più barca si prenota il giorno prima in paese o online.",
    comeSpostarsi: 'A piedi e in barca; a Ilha Grande non ci sono auto.',
    periodoMigliore: 'aprile-novembre per meno pioggia e meno folla; dicembre-febbraio pieno e caro.',
    erroriDaEvitare: [
      'Non portare acqua e cibo a Lopes Mendes, dove non ci sono servizi',
      'Lasciare i bagagli grandi senza aver prenotato il transfer per l\'aeroporto il giorno prima',
    ],
    miaEsperienza:
      "Dopo Rio quattro giorni sulla Costa Verde: due a Paraty, con il giro della baia in barca e le cascate della strada di Cunha, e due a Ilha Grande, con base ad Abraão e la giornata a Lopes Mendes.",
    luoghi: [
      {
        "nome": "Centro storico di Paraty",
        "testo": "Città coloniale, antico porto dell'oro di Minas Gerais, patrimonio UNESCO dal 2019. Il centro è chiuso alle auto, con case bianche dalle porte colorate e strade di ciottoli che con l'alta marea a volte si allagano.",
        "come": "Bus diretti dalla rodoviária Novo Rio.",
        "quando": "La sera è tranquilla, con ristoranti e musica dal vivo.",
        "tempo": "Mezza giornata o una sera",
        "lat": -23.21907,
        "lng": -44.71335,
        "consiglio": "Con l'alta marea alcune strade si allagano: scarpe adatte."
      },
      {
        "nome": "La baia di Paraty in escuna",
        "testo": "La baia ha decine di isole e spiagge raggiungibili solo via mare. Le escunas fanno un giro di qualche ora con soste per il bagno.",
        "come": "Imbarco al porto di Paraty. Le lanchas private costano di più ma scelgono dove fermarsi.",
        "quando": "Mattina.",
        "tempo": "4-5 ore",
        "costo": "Escuna circa 100-150 R$ a persona per 4-5 ore con soste (circa 17-25 €), pranzo a parte",
        "lat": -23.21986,
        "lng": -44.71203,
        "consiglio": "Se vuoi evitare la folla, scegli una lancha."
      },
      {
        "nome": "Vila do Abraão (Ilha Grande)",
        "testo": "Il villaggio principale dell'isola senza auto, con pousadas, ristoranti e vita serale. Da qui partono sentieri verso l'Aqueduto e la Cachoeira da Feiticeira.",
        "come": "Da Paraty con van e barca, via Angra dos Reis o Conceição de Jacareí.",
        "quando": "Pomeriggio dell'arrivo per un primo sentiero breve.",
        "tempo": "Una notte o due",
        "lat": -23.14026,
        "lng": -44.16841,
        "consiglio": "Prenota il giorno prima il transfer per l'aeroporto di Rio."
      },
      {
        "nome": "Lopes Mendes, Lagoa Azul e Lagoa Verde",
        "testo": "Lopes Mendes è una lunga striscia di sabbia bianca, con mare aperto e foresta alle spalle. La Lagoa Azul e la Lagoa Verde si visitano in barca per lo snorkeling.",
        "come": "Barca da Abraão fino a Pouso, poi circa 20 minuti a piedi; il sentiero completo da Abraão richiede circa tre ore.",
        "quando": "Mattina. Il bagno va fatto con prudenza per onde e correnti.",
        "tempo": "Giornata intera",
        "lat": -23.16866,
        "lng": -44.13235,
        "consiglio": "Porta acqua e cibo da Vila do Abraão."
      },
      {
        "nome": "Trindade",
        "testo": "Villaggio con spiagge selvagge e la piscina naturale del Cachadaço.",
        "come": "Circa 30 minuti a sud di Paraty, con bus locali o taxi.",
        "quando": "Giornata intera, con un giorno in più.",
        "tempo": "Giornata",
        "lat": -23.35073,
        "lng": -44.72569,
        "consiglio": "Aggiungila se hai un giorno extra."
      },
      {
        "nome": "Praia do Sono",
        "testo": "Una baia di sabbia chiara con una comunità di pescatori e niente strade, a sud di Trindade. Da qui un altro sentiero porta ad Antigos e Ponta Negra.",
        "come": "Bus o taxi fino al condominio di Laranjeiras, poi circa un'ora a piedi nella foresta, oppure barca.",
        "quando": "Mattina, per avere il tempo di rientrare prima del buio.",
        "tempo": "Giornata",
        "lat": -23.33422,
        "lng": -44.63261,
        "consiglio": "Acqua e contanti: in spiaggia ci sono solo pochi chioschi."
      },
      {
        "nome": "Saco do Mamanguá",
        "testo": "Un'insenatura lunga e stretta, simile a un fiordo tropicale, chiusa da colline coperte di foresta e mangrovie sul fondo. Le comunità caiçaras vivono solo di barca e di pesca.",
        "come": "Barca da Paraty o da Paraty-Mirim; dal fondo del saco parte il sentiero per il Pão de Açúcar del Mamanguá.",
        "quando": "Mattina, con il mare calmo.",
        "tempo": "Giornata",
        "lat": -23.26584,
        "lng": -44.62993,
        "consiglio": "La salita al Pão de Açúcar del Mamanguá dura circa un'ora e dà la vista sull'intera insenatura."
      },
      {
        "nome": "Cascate di Cunha e alambiques",
        "testo": "Sulla strada di Cunha ci sono cascate e alambicchi di cachaça.",
        "come": "In taxi o con un tour dal centro di Paraty.",
        "quando": "Pomeriggio, dopo il giro in barca.",
        "tempo": "Mezza giornata",
        "lat": -23.21255,
        "lng": -44.79232,
        "consiglio": "Porta scarpe che si possono bagnare."
      },
      {
        "nome": "Cachoeira da Feiticeira",
        "testo": "Una cascata di circa 15 metri nella foresta dell'isola, con una pozza dove fare il bagno. Il sentiero passa vicino all'acquedotto ottocentesco del vecchio lazzaretto.",
        "come": "Sentiero facile da Vila do Abraão, circa un'ora a piedi.",
        "quando": "Pomeriggio dell'arrivo o mattina.",
        "tempo": "2-3 ore andata e ritorno",
        "lat": -23.12819,
        "lng": -44.18886,
        "consiglio": "Repellente: nella foresta e la sera ad Abraão le zanzare non mancano."
      },
      {
        "nome": "Pico do Papagaio (Ilha Grande)",
        "testo": "La cima a forma di becco che domina Ilha Grande, a circa 980 metri. Il sentiero sale nella foresta atlantica e arriva a una roccia da cui si vedono la baia e il continente.",
        "come": "Sentiero da Vila do Abraão, ripido; meglio con una guida locale.",
        "quando": "Partenza molto presto o di notte per l'alba, solo con il bel tempo.",
        "tempo": "5-6 ore andata e ritorno",
        "lat": -23.15506,
        "lng": -44.19681,
        "consiglio": "Con nuvole basse dalla cima non si vede nulla: decidi la mattina stessa."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: arrivo a Paraty, centro storico e cena con musica dal vivo",
          "Giorno 2: baia in escuna al mattino, cascate e alambiques nel pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Paraty, centro storico",
          "Giorno 2: baia in escuna o Saco do Mamanguá",
          "Giorno 3: Trindade e Cachadaço, oppure sentiero per la Praia do Sono"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorni 1-3 come nel programma da 3 giorni",
          "Giorno 4: van e barca per Ilha Grande, Cachoeira da Feiticeira nel pomeriggio",
          "Giorno 5: Lopes Mendes, oppure Lagoa Azul e Lagoa Verde in barca; il giorno dopo rientro a Rio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico di Paraty",
        "perChi": "Chi cerca atmosfera coloniale",
        "testo": "Pousadas in case coloniali. Strade di ciottoli, rumore serale dei locali.",
        "fascia": "60-200 €"
      },
      {
        "nome": "Vila do Abraão",
        "perChi": "Chi visita Ilha Grande",
        "testo": "Pousadas, vita serale e partenze delle barche. Isola senza auto.",
        "fascia": "40-150 €"
      },
      {
        "nome": "Jabaquara e fuori dal centro (Paraty)",
        "perChi": "Chi viaggia in auto e vuole spendere meno",
        "testo": "Pousadas con parcheggio e giardino a 10-20 minuti a piedi dal centro storico, più silenziose la notte.",
        "fascia": "40-110 €"
      },
      {
        "nome": "Trindade",
        "perChi": "Chi vuole il mare e un'atmosfera da villaggio",
        "testo": "Pousadas semplici e campeggi vicino alle spiagge, con vita serale piccola. Serve il bus per tornare a Paraty.",
        "fascia": "35-100 €"
      }
    ],
    sapori: [
      {
        "nome": "Cachaça artigianale",
        "testo": "Prodotta sul posto a Paraty e nei vicini alambicchi."
      },
      {
        "nome": "Pesce e frutti di mare",
        "testo": "Alla griglia o in moqueca nei ristoranti sul mare."
      },
      {
        "nome": "Banana-da-terra",
        "testo": "Platano fritto, servito come contorno in tutta la costa."
      }
    ],
    attenzioni: [
      "Per Lopes Mendes porta acqua e cibo da Vila do Abraão.",
      "Mare aperto con onde e correnti: bagno con prudenza.",
      "Prenota il transfer per l'aeroporto il giorno prima.",
      "Strade di ciottoli con l'alta marea: possibili allagamenti."
    ],
    costi: "Budget basso circa 40-60 € al giorno (pousada semplice o ostello, locali a peso, bus); medio 90-140 € (pousada nel centro storico di Paraty o ad Abraão, escuna, transfer); alto da 220 € (pousada di charme, lancha privata). Escuna nella baia di Paraty circa 100-150 R$ a persona per 4-5 ore, pranzo a parte; lancha privata più cara, da contrattare al molo. Sull'isola contanti utili per barche e pranzi.",
    gite: [
      {
        "nome": "Paraty-Mirim",
        "distanza": "circa 30 minuti, 17 km da Paraty",
        "come": "Bus locale o taxi, ultimo tratto su sterrato.",
        "testo": "Una piccola spiaggia con una chiesetta coloniale sulla riva e le barche per il Saco do Mamanguá."
      },
      {
        "nome": "Cunha",
        "distanza": "circa 1 ora, 47 km",
        "come": "Auto lungo la strada della Serra, asfaltata.",
        "testo": "Un paese di montagna famoso per i laboratori di ceramica a forno a legna e i campi di lavanda, con il clima fresco della serra."
      },
      {
        "nome": "Angra dos Reis e le isole",
        "distanza": "circa 1 ora e 30 da Paraty, 100 km",
        "come": "Bus lungo la BR-101 o transfer.",
        "testo": "Il porto per Ilha Grande e per i giri in barca tra le isole della baia di Angra, tra le più belle del litorale."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono sulla Costa Verde?",
        "risposta": "Almeno cinque: tre a Paraty con la baia e Trindade, due a Ilha Grande. Con meno giorni conviene scegliere una delle due."
      },
      {
        "domanda": "Paraty o Ilha Grande?",
        "risposta": "Paraty per il centro coloniale, la baia in barca e le cascate; Ilha Grande per spiagge e sentieri senza auto. Sono a circa 3 ore l'una dall'altra tra van e barca."
      },
      {
        "domanda": "Come si arriva a Ilha Grande da Rio?",
        "risposta": "Van fino ad Angra dos Reis o Conceição de Jacareí e poi barca per Vila do Abraão, circa 3-4 ore in tutto. Il transfer combinato si prenota il giorno prima."
      },
      {
        "domanda": "Quanto costa il giro in escuna a Paraty?",
        "risposta": "Circa 100-150 R$ a persona per 4-5 ore con soste per il bagno, pranzo a parte. Una lancha privata costa di più ma sceglie le spiagge."
      },
      {
        "domanda": "Ci sono auto a Ilha Grande?",
        "risposta": "No, sull'isola ci si muove solo a piedi o in barca. Per Lopes Mendes si va in barca fino a Pouso e poi a piedi."
      },
      {
        "domanda": "Quando andare sulla Costa Verde?",
        "risposta": "Da marzo a maggio e da settembre a novembre il clima è buono e c'è meno gente. D'estate, da dicembre a febbraio, fa caldo, piove spesso nel pomeriggio e i prezzi salgono."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Le case coloniali bianche dalle porte colorate nel centro storico di Paraty',
    immagine: '/images/viaggi/brasile-itinerario/giorno-05-costa-verde.jpg',
  },
  {
    slug: 'foz-do-iguacu',
    paeseSlug: 'brasile',
    ordine: 3,
    nome: 'Cascate di Iguazú (Foz do Iguaçu)',
    tipologia: ['cascate', 'parco nazionale', 'natura'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Circa 275 salti lungo quasi tre chilometri sul confine tra Brasile e Argentina, dentro due parchi nazionali patrimonio UNESCO. Il lato brasiliano offre la vista d\'insieme, quello argentino le passerelle sopra la Garganta del Diablo.',
    percheAndarci: 'Per uno dei sistemi di cascate più grandi del mondo, da vedere da due paesi.',
    cosaVedere: [
      'Il sentiero e la passerella della Garganta do Diabo sul lato brasiliano',
      'I circuiti Superior, Inferior e la Garganta del Diablo sul lato argentino',
      'Il Parque das Aves',
    ],
    cosaFare: ['Il giro in gommone sotto i salti', 'Il trenino della foresta sul lato argentino'],
    doveDormire: 'Foz do Iguaçu, fascia media 300-600 R$; l\'unico hotel dentro il parco brasiliano è la fascia alta.',
    comeArrivare: "L'aeroporto di Foz do Iguaçu (IGU) riceve voli da São Paulo, Rio e dalle altre grandi città, quasi sempre con uno scalo arrivando da Rio. Sta sulla strada per il parco: alla città ci sono 20-30 minuti di taxi o app, all'ingresso delle cascate circa 10 minuti; il bus urbano 120 collega centro, aeroporto e parco. Dal lato argentino c'è l'aeroporto di Puerto Iguazú (IGR), con voli da Buenos Aires. Il confine tra le due città si passa in taxi, bus o transfer con il passaporto.",
    comeSpostarsi: 'Bus urbani e taxi verso il parco brasiliano; taxi o transfer per passare la frontiera.',
    periodoMigliore: 'tutto l\'anno; più acqua tra dicembre e marzo, meno caldo tra aprile e settembre.',
    costi: "Budget basso circa 40-60 € al giorno (ostello o pousada, bus 120, locali a peso); medio 90-140 € (hotel a Foz, cascate da entrambi i lati, Parque das Aves); alto da 250 € (hotel dentro il parco, Macuco Safari, voli in elicottero). Parco brasiliano 134 R$ per gli stranieri (dal 19 dicembre 2025); parco argentino 60.000 pesos per gli stranieri non residenti (circa 40 dollari, dal 1° giugno 2026); Parque das Aves 110 R$; Itaipu Panorâmica 63 R$; gommone 450-550 R$.",
    erroriDaEvitare: [
      'Vedere un solo lato',
      'Dimenticare il passaporto per la frontiera argentina',
      'Arrivare tardi alla Garganta del Diablo, che si riempie a metà mattina',
    ],
    miaEsperienza:
      "Ci sono arrivato la sera, con il volo da Rio dopo Ilha Grande, e alle cascate ho dedicato due giornate: la prima sul lato brasiliano con il Parque das Aves, la seconda sul lato argentino fino alla Garganta del Diablo.",
    luoghi: [
      {
        "nome": "Lato brasiliano delle cascate",
        "testo": "Dà la vista d'insieme: un sentiero lungo il canyon porta alla passerella che entra sotto la Garganta do Diabo, dove ci si bagna completamente.",
        "come": "Bus urbani o taxi da Foz do Iguaçu; si entra dal centro visitatori e si sale con il bus del parco.",
        "quando": "Aperto tutti i giorni: 9-16 dal lunedì al venerdì, 8.30-16 il sabato e la domenica. Arriva all'apertura.",
        "tempo": "2-3 ore",
        "costo": "134 R$ per gli stranieri, 121 R$ per brasiliani e residenti Mercosur (tariffe in vigore dal 19 dicembre 2025, aggiornate ogni anno). Solo online, con giorno e orario",
        "orari": "Tutti i giorni: 9-16 dal lunedì al venerdì, 8.30-16 il sabato e la domenica",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "lat": -25.69005,
        "lng": -54.43823,
        "consiglio": "Mantella o sacchetto impermeabile per telefono e documenti."
      },
      {
        "nome": "Lato argentino delle cascate",
        "testo": "Si cammina dentro le cascate: tre circuiti di passerelle (Superior, Inferior e la Garganta del Diablo, raggiunta con un trenino nella foresta) arrivano sopra il salto più grande, avvolto dalla nebbia d'acqua.",
        "come": "Il confine si passa in taxi, in bus o con un transfer, mostrando il passaporto e facendo i timbri di uscita e di entrata.",
        "quando": "Arriva all'apertura: la passerella della Garganta si riempie in fretta.",
        "tempo": "Giornata intera",
        "costo": "60.000 pesos per gli stranieri non residenti (circa 40 dollari, dal 1° giugno 2026)",
        "url": "https://www.iguazuargentina.com/",
        "lat": -25.68382,
        "lng": -54.44878,
        "consiglio": "Porta il passaporto e pesos o carta."
      },
      {
        "nome": "Macuco Safari",
        "testo": "Il giro in gommone fin sotto i salti.",
        "come": "Prenotabile sul posto o in anticipo; parte dal lato brasiliano.",
        "quando": "Mattina o pomeriggio.",
        "tempo": "1-2 ore",
        "costo": "Circa 450-550 R$ (circa 75-90 €), a parte rispetto all'ingresso al parco",
        "lat": -25.65139,
        "lng": -54.43794,
        "consiglio": "Ti bagni completamente: vestiti di ricambio e protezione per il telefono."
      },
      {
        "nome": "Parque das Aves",
        "testo": "Un parco con tucani, are e uccelli della Mata Atlântica in grandi voliere, di fronte all'ingresso delle cascate brasiliane.",
        "come": "Proprio di fronte all'ingresso del lato brasiliano.",
        "quando": "Dopo le cascate, nel pomeriggio.",
        "tempo": "1-2 ore",
        "costo": "110 R$ il biglietto intero (circa 18 €), uguale per brasiliani e stranieri, tariffa valida fino al 30 novembre 2026",
        "orari": "Tutti i giorni 8.30-16.30",
        "url": "https://www.parquedasaves.com.br/",
        "lat": -25.61509,
        "lng": -54.48413,
        "consiglio": "Si combina bene con la mattina alle cascate."
      },
      {
        "nome": "Diga di Itaipu",
        "testo": "Una delle centrali idroelettriche più grandi del mondo, condivisa tra Brasile e Paraguay sul fiume Paraná. La visita panoramica in bus passa sulla diga e sul canale di sfioro; quella speciale entra anche nella sala macchine.",
        "come": "Circa 20 minuti di taxi o app dal centro di Foz; bus urbani dal terminal.",
        "quando": "Mattina o primo pomeriggio; il venerdì e il sabato sera c'è l'illuminazione della diga.",
        "tempo": "1h10 la panoramica, 2h30 la speciale",
        "costo": "Itaipu Panorâmica 63 R$ (circa 10 €), Itaipu Especial 185 R$ (circa 30 €), Itaipu Iluminada 50 R$ (2026)",
        "orari": "Panorâmica tutti i giorni 8.30-17; Iluminada venerdì e sabato alle 19",
        "url": "https://www.turismoitaipu.com.br/",
        "lat": -25.42462,
        "lng": -54.56703,
        "consiglio": "La visita speciale ha posti limitati e un'età minima: si prenota online prima."
      },
      {
        "nome": "Trilha do Poço Preto",
        "testo": "Un sentiero di 9 km nella Mata Atlântica dentro il parco brasiliano, a piedi o in bici, che arriva sul fiume Iguaçu sopra le cascate. Si vedono farfalle, tucani e con fortuna i coati.",
        "come": "Si prenota con il biglietto del parco; il punto di partenza è lungo la strada interna del parco.",
        "quando": "A piedi dalle 9 alle 12, in bici dalle 9 alle 15.",
        "tempo": "Mezza giornata (19,2 km andata e ritorno)",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "lat": -25.63014,
        "lng": -54.46232,
        "consiglio": "Si combina con le cascate la stessa giornata solo partendo all'apertura."
      },
      {
        "nome": "Marco das Três Fronteiras",
        "testo": "Il punto dove il fiume Iguaçu si getta nel Paraná e si guardano Brasile, Argentina e Paraguay. Lo spazio ha un belvedere, ristoranti e uno spettacolo serale con musica e luci.",
        "come": "Circa 10 minuti di taxi o app dal centro di Foz.",
        "quando": "Tramonto, sopra i fiumi.",
        "tempo": "1-2 ore",
        "lat": -25.59015,
        "lng": -54.59025,
        "consiglio": "Dal lato argentino c'è l'Hito Tres Fronteras, gratuito, con la stessa vista al contrario."
      },
      {
        "nome": "Templo Budista Chen Tien",
        "testo": "Un tempio buddista costruito dalla comunità cinese di Foz, con un giardino di oltre cento statue e un grande Buddha bianco rivolto verso il Paraguay.",
        "come": "Circa 15 minuti di taxi o app dal centro.",
        "quando": "Pomeriggio, con la luce sulle statue.",
        "tempo": "45 minuti-1 ora",
        "lat": -25.47497,
        "lng": -54.59893,
        "consiglio": "Abbigliamento che copra spalle e ginocchia."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: lato brasiliano all'apertura, passerella della Garganta do Diabo",
          "Macuco Safari subito dopo, se si vuole il gommone",
          "Pomeriggio: Parque das Aves, di fronte all'ingresso",
          "Tramonto al Marco das Três Fronteiras"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: programma da 1 giorno",
          "Giorno 2: lato argentino all'apertura, con la Garganta del Diablo per prima, poi i circuiti Superior e Inferior"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Itaipu la mattina, Templo Budista nel pomeriggio, oppure Trilha do Poço Preto nel parco"
        ]
      }
    ],
    zone: [
      {
        "nome": "Foz do Iguaçu",
        "perChi": "Chi ha voli e vuole comodità",
        "testo": "Ampia scelta di hotel, collegata all'aeroporto. Più comoda per i voli.",
        "fascia": "40-130 €"
      },
      {
        "nome": "Puerto Iguazú (Argentina)",
        "perChi": "Chi vuole stare più vicino al lato argentino",
        "testo": "Cittadina più piccola, con meno scelta e voli meno comodi.",
        "fascia": "40-150 €"
      },
      {
        "nome": "Hotel dentro il parco brasiliano",
        "perChi": "Chi cerca la vista dalla camera",
        "testo": "Hotel di fascia alta dentro il parco.",
        "fascia": "350-800 €"
      },
      {
        "nome": "Avenida das Cataratas (Foz)",
        "perChi": "Chi vuole stare vicino al parco brasiliano",
        "testo": "La strada tra la città e il parco, con resort e hotel con piscina immersi nel verde. Servono taxi o il bus 120 per la sera.",
        "fascia": "70-200 €"
      }
    ],
    sapori: [
      {
        "nome": "Pesce di fiume",
        "testo": "Surubí e altri pesci del Paraná, alla griglia."
      },
      {
        "nome": "Chipa",
        "testo": "Panini al formaggio di tradizione paraguayana e argentina, venduti in strada."
      },
      {
        "nome": "Churrasco",
        "testo": "Carne alla griglia nei ristoranti di Foz."
      }
    ],
    attenzioni: [
      "Vedere un solo lato: sono esperienze diverse.",
      "Dimenticare il passaporto per la frontiera argentina.",
      "Arrivare tardi alla Garganta del Diablo, che si riempie a metà mattina.",
      "Febbre gialla: vaccinazione raccomandata per chi visita le cascate dell'Iguaçu."
    ],
    gite: [
      {
        "nome": "Ciudad del Este (Paraguay)",
        "distanza": "circa 20-30 minuti, 10 km",
        "come": "Taxi o bus attraverso il Ponte da Amizade, con il passaporto.",
        "testo": "La città del commercio a prezzi bassi, piena di centri commerciali. Utile solo per lo shopping; il ponte è spesso congestionato."
      },
      {
        "nome": "Itaipu",
        "distanza": "circa 20 minuti, 15 km",
        "come": "Taxi, app o bus urbano.",
        "testo": "La diga sul Paraná, con la visita panoramica, quella speciale nella sala macchine e lo spettacolo serale di luci il venerdì e il sabato."
      },
      {
        "nome": "Minas de Wanda (Argentina)",
        "distanza": "circa 1 ora da Puerto Iguazú, 50 km",
        "come": "Auto o tour dal lato argentino.",
        "testo": "Una miniera a cielo aperto di ametiste, agate e quarzi nella foresta di Misiones, con visita guidata breve. Si combina con il rientro dal lato argentino."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Foz do Iguaçu?",
        "risposta": "Due giorni pieni: uno per il lato brasiliano e il Parque das Aves, uno per il lato argentino. Con un terzo si aggiungono Itaipu e il Marco das Três Fronteiras."
      },
      {
        "domanda": "Meglio il lato brasiliano o quello argentino delle cascate?",
        "risposta": "Il brasiliano dà la vista d'insieme in 2-3 ore; l'argentino, in una giornata, porta dentro e sopra i salti. Chi può vede entrambi."
      },
      {
        "domanda": "Quanto costa l'ingresso alle cascate?",
        "risposta": "Lato brasiliano 134 R$ per gli stranieri (dal 19 dicembre 2025), solo online con giorno e orario. Lato argentino 60.000 pesos per gli stranieri non residenti, circa 40 dollari, dal 1° giugno 2026."
      },
      {
        "domanda": "Serve il passaporto per il lato argentino?",
        "risposta": "Sì: al confine si fanno i timbri di uscita dal Brasile e di entrata in Argentina, anche in giornata. Taxi e transfer aspettano durante le formalità."
      },
      {
        "domanda": "Dormire a Foz do Iguaçu o a Puerto Iguazú?",
        "risposta": "Foz ha più scelta e voli più comodi; Puerto Iguazú è più piccola ma più vicina al lato argentino. Per due giorni sui due lati vanno bene entrambe."
      },
      {
        "domanda": "Quando andare a Iguazú?",
        "risposta": "Tutto l'anno. Da dicembre a febbraio la portata è più forte ma fa caldo e c'è molta gente; tra aprile e giugno il clima è più mite."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Le passerelle del lato brasiliano davanti alle cascate di Iguazú',
    immagine: '/images/viaggi/brasile-itinerario/giorno-10-foz-do-iguacu.jpg',
  },
  {
    slug: 'salvador-de-bahia',
    paeseSlug: 'brasile',
    ordine: 4,
    nome: 'Salvador de Bahia',
    tipologia: ['città coloniale', 'cultura afro-brasiliana', 'mare'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Prima capitale del Brasile (1549-1763) e principale porto di arrivo degli africani ridotti in schiavitù, Salvador ha una cultura profondamente afro-brasiliana: candomblé, capoeira, tamburi, cucina con l\'olio di dendê. Il centro storico del Pelourinho è patrimonio UNESCO.',
    percheAndarci: 'Per il Pelourinho, la musica, la capoeira e la cucina bahiana.',
    cosaVedere: [
      'Il Pelourinho e la Igreja de São Francisco',
      'L\'Elevador Lacerda e il Mercado Modelo',
      'La Igreja do Senhor do Bonfim',
      'Il Farol da Barra al tramonto',
    ],
    cosaFare: [
      'Il martedì sera nel Pelourinho',
      'Assistere a una roda di capoeira',
      'Mangiare acarajé dalle baianas di Rio Vermelho',
    ],
    doveDormire: 'Pelourinho e Santo Antônio Além do Carmo (pousadas 250-600 R$), Barra e Rio Vermelho per il mare.',
    doveMangiare: 'Moqueca baiana, acarajé, vatapá, bobó de camarão.',
    comeArrivare: "L'aeroporto internazionale Deputado Luís Eduardo Magalhães (SSA) riceve voli da tutte le grandi città brasiliane e alcuni voli diretti dall'Europa. Da qui a Barra ci sono circa 30-50 minuti di taxi o app, di più nelle ore di punta; al Pelourinho circa 40-60 minuti. La metro collega l'aeroporto al centro (stazione Lapa), ma con i bagagli taxi o app sono più comodi. Da Foz do Iguaçu il volo con scalo dura 4-6 ore.",
    comeSpostarsi: 'App e taxi; a piedi nel Pelourinho di giorno.',
    periodoMigliore: 'settembre-marzo; piogge più forti tra aprile e giugno.',
    erroriDaEvitare: [
      'Allontanarsi dalle vie principali del Pelourinho la sera',
      'Accettare i nastri del Bonfim «regalati» per strada',
    ],
    miaEsperienza:
      "Tre giorni a Salvador durante il giro del Brasile: il Pelourinho, la discesa con l'Elevador Lacerda fino al Mercado Modelo, la chiesa del Bonfim e Rio Vermelho la sera. Il primo tramonto l'abbiamo guardato dal Farol da Barra.",
    luoghi: [
      {
        "nome": "Pelourinho e Igreja de São Francisco",
        "testo": "Il centro storico, patrimonio UNESCO: piazze in salita con case coloniali color pastello e chiese barocche. La Igreja de São Francisco è rivestita d'oro all'interno.",
        "come": "A piedi dal tuo alloggio nel centro o in app dai quartieri di mare.",
        "quando": "Di giorno. La sera nel Pelourinho ci sono spesso concerti e percussioni: informati sul programma della settimana.",
        "tempo": "Mezza giornata",
        "orari": "La Igreja de São Francisco è chiusa per restauro dal febbraio 2025, dopo il crollo di parte del soffitto, con riapertura prevista verso il 2029: controlla prima di andare",
        "lat": -12.96667,
        "lng": -38.5,
        "consiglio": "La sera le strade laterali si svuotano presto: resta nelle vie principali e rientra in app."
      },
      {
        "nome": "Terreiro de Jesus e Catedral Basílica",
        "testo": "La piazza grande del Pelourinho, con la cattedrale dei gesuiti del Seicento e altre due chiese affacciate. Dentro la cattedrale altari dorati e soffitti in legno intagliato.",
        "come": "A piedi dal Pelourinho o dall'Elevador Lacerda, in 5 minuti.",
        "quando": "Mattina, quando le chiese sono aperte.",
        "tempo": "1 ora",
        "lat": -12.9729,
        "lng": -38.51033,
        "consiglio": "Da qui si scende verso il Largo do Pelourinho, la piazza in discesa delle cartoline."
      },
      {
        "nome": "Elevador Lacerda e Mercado Modelo",
        "testo": "L'ascensore pubblico del 1873, alto 72 metri, collega la città alta alla città bassa. In basso c'è il Mercado Modelo, mercato di artigianato.",
        "come": "L'ascensore parte dalla Praça Tomé de Souza.",
        "quando": "Mattina.",
        "tempo": "1-2 ore",
        "costo": "Elevador circa 1 R$ a corsa (dal 2025)",
        "lat": -12.97417,
        "lng": -38.51333,
        "consiglio": "Il mercato è turistico: contratta sui prezzi."
      },
      {
        "nome": "Museu Afro-Brasileiro",
        "testo": "Nel vecchio edificio della Facoltà di Medicina sul Terreiro de Jesus, racconta le culture africane arrivate in Bahia e il candomblé, con i pannelli in legno di Carybé dedicati agli orixás.",
        "come": "Sul Terreiro de Jesus, a piedi.",
        "quando": "Di giorno nei feriali.",
        "tempo": "1 ora",
        "lat": -12.97279,
        "lng": -38.50977,
        "consiglio": "Visitalo prima di una sera di musica o di una roda di capoeira: aiuta a capire cosa si vede."
      },
      {
        "nome": "Fundação Casa de Jorge Amado",
        "testo": "La casa azzurra sul Largo do Pelourinho dedicata allo scrittore che ha raccontato Salvador al mondo, con foto, copertine delle edizioni in decine di lingue e un caffè.",
        "come": "Sul Largo do Pelourinho, a piedi.",
        "quando": "Di giorno.",
        "tempo": "45 minuti",
        "lat": -12.97168,
        "lng": -38.50853,
        "consiglio": "Una pausa al fresco tra una chiesa e l'altra."
      },
      {
        "nome": "Santo Antônio Além do Carmo",
        "testo": "Il quartiere storico oltre il Pelourinho, più tranquillo, con pousadas nelle case coloniali, piccoli ristoranti e il belvedere del Largo de Santo Antônio sulla baia.",
        "come": "A piedi dal Pelourinho salendo per la Ladeira do Carmo, circa 10-15 minuti.",
        "quando": "Tardo pomeriggio e sera.",
        "tempo": "1-2 ore",
        "lat": -12.9655,
        "lng": -38.50364,
        "consiglio": "Il tramonto sulla baia dal Largo de Santo Antônio è meno affollato del Farol."
      },
      {
        "nome": "Igreja do Senhor do Bonfim",
        "testo": "La chiesa dei nastri colorati, legati al cancello e al polso come voto.",
        "come": "In taxi o app dalla città alta, circa 20-30 minuti.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "lat": -12.92375,
        "lng": -38.50812,
        "consiglio": "Se qualcuno ti offre un nastro per strada e non lo vuoi, rifiuta con gentilezza."
      },
      {
        "nome": "Farol da Barra",
        "testo": "Il faro sulla punta della città, con il tramonto sulla baia.",
        "come": "In app o bus da Barra.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "lat": -13.01033,
        "lng": -38.53293,
        "consiglio": "Il primo tramonto a Salvador si guarda da qui."
      },
      {
        "nome": "Praia do Porto da Barra",
        "testo": "La spiaggia di città più amata dai baianos, in una piccola baia con acqua calma tra il Forte de Santo Antônio e il Forte de Santa Maria. Al tramonto il sole cade in mare.",
        "come": "A piedi da Barra; in app o bus dal centro.",
        "quando": "Mattina per il bagno, sera per il tramonto.",
        "tempo": "Mezza giornata",
        "lat": -13.00327,
        "lng": -38.5333,
        "consiglio": "Lascia in pousada documenti e oggetti di valore: in spiaggia si tiene il minimo."
      },
      {
        "nome": "Solar do Unhão e MAM Bahia",
        "testo": "Un complesso coloniale sul mare, ex zuccherificio e magazzino, oggi sede del Museo d'Arte Moderna della Bahia, con sculture all'aperto e la baia davanti.",
        "come": "In taxi o app dal centro, pochi minuti; a piedi lungo l'Avenida Contorno non è consigliato.",
        "quando": "Pomeriggio, per il tramonto sulla baia.",
        "tempo": "1-2 ore",
        "orari": "Chiuso in genere il lunedì",
        "lat": -12.98263,
        "lng": -38.52027,
        "consiglio": "Il sabato pomeriggio c'è spesso il jazz dal vivo al tramonto: controlla il programma."
      },
      {
        "nome": "Rio Vermelho e l'acarajé",
        "testo": "Il quartiere della vita serale, dove le baianas friggono l'acarajé in olio di palma per strada.",
        "come": "In app dal centro o da Barra.",
        "quando": "Sera.",
        "tempo": "Una serata",
        "lat": -13.01006,
        "lng": -38.48996,
        "consiglio": "Mangia l'acarajé dalle baianas, non nei locali per turisti."
      },
      {
        "nome": "Feira de São Joaquim",
        "testo": "Il grande mercato popolare sulla baia: frutta, spezie, ceramiche, gabbie di animali e i banchi di oggetti per il candomblé. Caotico e vero, senza turisti.",
        "come": "In taxi o app dal centro, circa 10 minuti.",
        "quando": "Mattina presto, dal lunedì al sabato.",
        "tempo": "1 ora",
        "lat": -12.95185,
        "lng": -38.5024,
        "consiglio": "Meglio con qualcuno del posto o una guida: telefono in tasca e niente gioielli."
      },
      {
        "nome": "Lagoa do Abaeté",
        "testo": "Una laguna di acqua scura circondata da dune bianche nel quartiere di Itapuã, cantata dalla musica bahiana. Oggi è un parco con passerelle e chioschi.",
        "come": "Circa 40-50 minuti di app o taxi da Barra.",
        "quando": "Pomeriggio, combinato con la spiaggia di Itapuã.",
        "tempo": "1-2 ore",
        "lat": -12.94376,
        "lng": -38.35972,
        "consiglio": "Il bagno nella laguna è sconsigliato: si viene per il paesaggio."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Terreiro de Jesus, Catedral Basílica e Museu Afro-Brasileiro",
          "Largo do Pelourinho e Casa de Jorge Amado",
          "Elevador Lacerda e Mercado Modelo",
          "Tramonto al Farol da Barra"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: programma da 1 giorno",
          "Giorno 2: Igreja do Senhor do Bonfim al mattino, Solar do Unhão nel pomeriggio, sera a Rio Vermelho con l'acarajé"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Porto da Barra al mattino, Santo Antônio Além do Carmo al tramonto, oppure gita in barca nella Baía de Todos os Santos; roda di capoeira in una scuola del Pelourinho chiedendo prima"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pelourinho e Santo Antônio Além do Carmo",
        "perChi": "Chi vuole il centro storico",
        "testo": "Pousadas nelle case storiche. Di giorno sorvegliato, di sera si svuota.",
        "fascia": "40-150 €"
      },
      {
        "nome": "Barra e Rio Vermelho",
        "perChi": "Chi cerca il mare e la vita serale",
        "testo": "Più sicure la sera, vicino alle spiagge e ai ristoranti.",
        "fascia": "40-140 €"
      },
      {
        "nome": "Ondina e lungomare",
        "perChi": "Chi vuole il grande hotel sul mare",
        "testo": "Tra Barra e Rio Vermelho, con hotel più grandi affacciati sull'oceano. Comodo per la sera a Rio Vermelho, serve l'app per il centro storico.",
        "fascia": "60-160 €"
      }
    ],
    sapori: [
      {
        "nome": "Moqueca baiana",
        "testo": "Stufato di pesce con latte di cocco e olio di dendê."
      },
      {
        "nome": "Acarajé",
        "testo": "Frittella di fagioli fradinho fritta nell'olio di palma, ripiena di vatapá e gamberi."
      },
      {
        "nome": "Vatapá",
        "testo": "Crema di pane, gamberi, latte di cocco e arachidi."
      },
      {
        "nome": "Bobó de camarão",
        "testo": "Crema di manioca con gamberi."
      }
    ],
    attenzioni: [
      "Il Pelourinho di sera: allontanarsi dalle vie principali è rischioso.",
      "Venditori insistenti intorno alle attrazioni: rifiuta con gentilezza ciò che non vuoi.",
      "Piccola criminalità: furti di telefoni e scippi.",
      "Usa app invece di camminare di notte."
    ],
    costi: "Budget basso circa 40-60 € al giorno (pousada o ostello, acarajé e locali a peso, metro e bus); medio 90-140 € (hotel a Barra o al Pelourinho, ristoranti di cucina bahiana, app per gli spostamenti); alto da 220 € (hotel boutique in una casa storica, gita in barca privata nella baia). Elevador Lacerda circa 1 R$ a corsa (dal 2025); acarajé dalle baianas pochi reais.",
    gite: [
      {
        "nome": "Morro de São Paulo",
        "distanza": "circa 2 ore e 30 in catamarano",
        "come": "Catamarano dal Terminal Marítimo vicino al Mercado Modelo; in alternativa via Ilha de Itaparica e strada.",
        "testo": "Un villaggio senza auto sull'isola di Tinharé, con spiagge numerate e piscine naturali con la bassa marea. Meglio dormirci almeno una notte: il mare in catamarano può essere mosso."
      },
      {
        "nome": "Baía de Todos os Santos (Ilha dos Frades e Itaparica)",
        "distanza": "giornata in barca",
        "come": "Gita organizzata in escuna dal porto di Salvador.",
        "testo": "Il giro classico della baia, con soste per il bagno a Ilha dos Frades e il pranzo a Itaparica. Comodo, ma affollato nel fine settimana."
      },
      {
        "nome": "Praia do Forte",
        "distanza": "circa 1 ora e 15, 80 km",
        "come": "Auto, transfer o bus dalla rodoviária.",
        "testo": "Un villaggio di pescatori diventato località balneare, con piscine naturali, la base del Projeto Tamar per le tartarughe marine e le rovine del Castelo Garcia d'Ávila."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Salvador?",
        "risposta": "Tre: uno per il Pelourinho e la città bassa, uno per Bonfim, il Solar do Unhão e Rio Vermelho, uno per il mare o la baia. Con Morro de São Paulo se ne aggiungono due."
      },
      {
        "domanda": "Il Pelourinho è sicuro?",
        "risposta": "Di giorno, nelle vie principali, è sorvegliato e frequentato. La sera le strade laterali si svuotano presto: si resta nelle vie animate e si rientra in app chiamata davanti al locale."
      },
      {
        "domanda": "Dove dormire a Salvador?",
        "risposta": "Al Pelourinho o a Santo Antônio per la storia, a Barra e Rio Vermelho per il mare e la vita serale, più tranquilla da girare la sera."
      },
      {
        "domanda": "La Igreja de São Francisco è aperta?",
        "risposta": "È chiusa per restauro dal febbraio 2025, dopo il crollo di parte del soffitto, con riapertura prevista verso il 2029. Conviene controllare prima di andare."
      },
      {
        "domanda": "Quando andare a Salvador?",
        "risposta": "Da settembre a marzo piove meno e il mare è al meglio; aprile-giugno è il periodo più piovoso. A Carnevale e a inizio febbraio la città è piena e i prezzi salgono."
      },
      {
        "domanda": "Dove si mangia il vero acarajé?",
        "risposta": "Dalle baianas ai banchi di strada, soprattutto a Rio Vermelho e a Barra, fritto al momento nell'olio di palma. Costa pochi reais."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'La piazza in salita del Pelourinho a Salvador con le case coloniali e la chiesa del Rosário dos Pretos',
    immagine: '/images/viaggi/brasile-itinerario/giorno-13-salvador-de-bahia.jpg',
  },
  {
    slug: 'chapada-diamantina',
    paeseSlug: 'brasile',
    ordine: 5,
    nome: 'Chapada Diamantina',
    tipologia: ['trekking', 'cascate', 'grotte', 'parco nazionale'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un altopiano di mesas, canyon, grotte allagate e cascate nell\'interno di Bahia, con il paese di Lençóis, nato con la corsa ai diamanti dell\'Ottocento, come base.',
    percheAndarci: 'Per i trekking, le cascate come la Fumaça e le grotte d\'acqua blu del Poço Azul e del Poço Encantado.',
    cosaVedere: [
      'Il Morro do Pai Inácio al tramonto',
      'La Cachoeira da Fumaça',
      'Il Poço Azul e il Poço Encantado',
      'Le grotte di Lapa Doce e Pratinha',
    ],
    cosaFare: ['Il trekking di più giorni del Vale do Pati', 'Il bagno al Ribeirão do Meio'],
    doveDormire: 'Lençóis (pousadas 200-500 R$) o il Vale do Capão.',
    comeArrivare: 'Bus da Salvador (6-7 ore).',
    comeSpostarsi: 'Tour con guida e auto; i sentieri sono poco segnalati.',
    periodoMigliore: 'aprile-settembre, stagione secca; il Poço Encantado si illumina da aprile a settembre.',
    costi: 'Tour giornalieri 150-300 R$ più guida e ingressi.',
    erroriDaEvitare: ['Fare i sentieri lunghi senza guida', 'Sottovalutare la salita iniziale della Fumaça'],
    miaEsperienza:
      "Tre giorni nella Chapada con base a Lençóis, arrivando in bus da Salvador. Abbiamo fatto il giro classico con guida e auto, fra le grotte, il Poço do Diabo e il tramonto sul Morro do Pai Inácio.",
    luoghi: [
      {
        "nome": "Morro do Pai Inácio",
        "testo": "La mesa che domina la valle. Il tramonto da qui è il classico della Chapada.",
        "come": "Con tour o auto; dal parcheggio una salita breve e ripida.",
        "quando": "Tramonto.",
        "tempo": "2 ore",
        "consiglio": "Porta una torcia per la discesa."
      },
      {
        "nome": "Cachoeira da Fumaça",
        "testo": "Una cascata di circa 340 metri: il vento spesso disperde l'acqua in nebbia prima che tocchi terra.",
        "come": "Dalla valle del Capão con un sentiero di andata e ritorno di alcune ore e una salita iniziale ripida.",
        "quando": "Nelle giornate limpide: con le nuvole basse dall'alto si vede poco.",
        "tempo": "Mezza giornata",
        "consiglio": "Non sottovalutare la salita iniziale."
      },
      {
        "nome": "Poço Azul e Poço Encantado",
        "testo": "Grotte allagate dove la luce del sole entra e accende l'acqua di blu.",
        "come": "Con tour e guida, in auto.",
        "quando": "Il raggio di sole entra solo in alcuni mesi e in alcune ore: chiedi gli orari alla guida.",
        "tempo": "Mezza giornata",
        "costo": "Tour giornalieri con guida; gli ingressi si pagano a parte: chiedi cosa include il prezzo",
        "consiglio": "Controlla gli orari della luce: fuori stagione il blu non si vede."
      },
      {
        "nome": "Lapa Doce e Pratinha",
        "testo": "Grotte con acqua turchese dove si fa snorkeling. Il Poço do Diabo è una cascata con una pozza scura.",
        "come": "Giro classico con guida e auto.",
        "quando": "Giornata intera.",
        "tempo": "Giornata",
        "consiglio": "Vai con una guida: nelle grotte aiuta a orientarsi."
      },
      {
        "nome": "Vale do Pati",
        "testo": "Trekking di più giorni tra valli remote dormendo nelle case dei contadini.",
        "come": "Con guida, a piedi, da Guiné o dal Vale do Capão.",
        "quando": "Stagione secca.",
        "tempo": "3-5 giorni",
        "consiglio": "Per chi ha tempo e gambe, è l'alternativa ai tour di giornata."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Ribeirão do Meio, Lapa Doce o Pratinha, tramonto al Pai Inácio",
          "Giorno 2: Cachoeira da Fumaça o Poço Azul e Poço Encantado"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: seconda attività a scelta, o inizio del Vale do Pati"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lençóis",
        "perChi": "Chi vuole la base dei tour",
        "testo": "Pousadas per ogni budget. Piccolo paese con agenzie e ristoranti."
      },
      {
        "nome": "Vale do Capão",
        "perChi": "Chi vuole camminare",
        "testo": "Più tranquillo, vicino alla Fumaça e al Pati."
      }
    ],
    sapori: [
      {
        "nome": "Cucina bahiana dell'interno",
        "testo": "Carne di sole, feijão tropeiro, farofa."
      },
      {
        "nome": "Cachaça e liquori locali",
        "testo": "Prodotti nelle fazendas della regione."
      }
    ],
    attenzioni: [
      "Sentieri lunghi senza guida: i percorsi sono poco segnalati.",
      "Sottovalutare la salita iniziale della Fumaça.",
      "Fuori dalla stagione secca molte cascate sono più difficili."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Le mesas della Chapada Diamantina viste dall\'alto',
    immagine: '/images/viaggi/brasile-itinerario/giorno-16-chapada-diamantina.jpg',
  },
  {
    slug: 'lencois-maranhenses',
    paeseSlug: 'brasile',
    ordine: 6,
    nome: 'Lençóis Maranhenses',
    tipologia: ['dune', 'lagune', 'parco nazionale'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un parco nazionale di dune bianche sulla costa del Maranhão dove, dopo le piogge, si formano migliaia di lagune d\'acqua dolce trasparente. Barreirinhas, sul Rio Preguiças, è la porta d\'ingresso; Atins il villaggio all\'estremità del parco.',
    percheAndarci: 'Per fare il bagno nelle lagune tra le dune, tra giugno e settembre.',
    cosaVedere: [
      'Il circuito della Lagoa Azul',
      'La Lagoa Bonita dall\'alto della duna',
      'Vassouras, Mandacaru e Caburé lungo il Rio Preguiças',
      'Il centro storico di São Luís',
    ],
    cosaFare: ['I circuiti in jardineira 4x4', 'La barca sul Rio Preguiças fino al mare', 'Il volo panoramico sopra il parco', 'Kitesurf ad Atins'],
    doveDormire: 'Barreirinhas (pousadas 250-600 R$) o Atins per una base sul mare.',
    comeArrivare: 'Volo per São Luís, poi van per Barreirinhas (circa 4 ore).',
    comeSpostarsi: 'Solo 4x4 con autisti autorizzati dentro il parco; barche sul fiume.',
    periodoMigliore: 'giugno-settembre, con il massimo d\'acqua in luglio-agosto.',
    costi: 'Jardineira 100-150 R$ a persona per circuito; l\'ingresso al parco è gratuito: l\'ICMBio non vende biglietti e il piano di concessione ai privati è stato ritirato a fine 2023.',
    erroriDaEvitare: [
      'Andare fuori stagione, quando le lagune sono vuote',
      'Entrare nel parco nelle ore centrali senza acqua e cappello',
    ],
    miaEsperienza:
      "Sono stati gli ultimi giorni del viaggio in Brasile: da São Luís in van fino a Barreirinhas, il primo giro in jardineira verso le dune e l'ultima giornata in barca lungo il Rio Preguiças fino al mare.",
    luoghi: [
      {
        "nome": "Circuito della Lagoa Azul",
        "testo": "Le prime lagune: acqua piovana trasparente e tiepida, raccolta tra dune di sabbia bianca alte fino a 40 metri. Si cammina scalzi e si fa il bagno.",
        "come": "In jardineira, il fuoristrada con panche sul cassone che attraversa il fiume su una zattera e prende il sentiero di sabbia.",
        "quando": "Tramonto, quando la sabbia cambia colore. Le lagune si riempiono con le piogge, che cadono più o meno da gennaio a giugno, ed evaporano nei mesi secchi: informati sul livello dell'acqua prima di partire.",
        "tempo": "Mezza giornata",
        "costo": "Jardineira a persona per circuito, guida inclusa: prezzo dalle agenzie di Barreirinhas. Ingresso al parco gratuito (2026)",
        "consiglio": "Dentro il parco non c'è nulla: acqua e cappello vanno portati da Barreirinhas."
      },
      {
        "nome": "Lagoa Bonita",
        "testo": "Si raggiunge salendo una duna ripida con una corda: dall'alto si vede il mare di dune e lagune fino all'orizzonte.",
        "come": "Circuito in jardineira dal lato di Barreirinhas.",
        "quando": "All'alba o al tramonto. A mezzogiorno la sabbia è rovente.",
        "tempo": "Mezza giornata",
        "consiglio": "Vai nelle prime ore o nel pomeriggio."
      },
      {
        "nome": "Rio Preguiças: Vassouras, Mandacaru e Caburé",
        "testo": "Una giornata in barca lungo il fiume fino al mare. A Vassouras le scimmie cappuccine si avvicinano alla riva, a Mandacaru c'è un faro da cui si guardano le dune, Caburé è una lingua di sabbia tra il fiume e l'oceano.",
        "come": "Barca da Barreirinhas.",
        "quando": "Giornata intera.",
        "tempo": "Giornata",
        "consiglio": "Chi vuole può dormire ad Atins invece di rientrare."
      },
      {
        "nome": "Atins",
        "testo": "Il villaggio all'estremità del parco, base del kitesurf.",
        "come": "In barca o 4x4 da Barreirinhas.",
        "quando": "Meglio per una notte.",
        "tempo": "Una notte",
        "consiglio": "Il transfer di rientro verso São Luís è più lungo da Atins: pianifica con anticipo."
      },
      {
        "nome": "Centro storico di São Luís",
        "testo": "Unica capitale di uno stato brasiliano fondata dai francesi (1612), ha un centro storico patrimonio UNESCO dal 1997 con case coperte di azulejos portoghesi.",
        "come": "In app o a piedi nella Praia Grande.",
        "quando": "Prima di partire per Barreirinhas o all'arrivo.",
        "tempo": "Mezza giornata",
        "consiglio": "Chi arriva presto può fare una passeggiata nella Praia Grande."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: van da São Luís a Barreirinhas, circuito della Lagoa Azul al tramonto",
          "Giorno 2: Lagoa Bonita all'alba, poi Rio Preguiças"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Atins e Caburé, rientro a São Luís"
        ]
      }
    ],
    zone: [
      {
        "nome": "Barreirinhas",
        "perChi": "Chi vuole la base dei circuiti",
        "testo": "Pousadas per ogni budget. Porta d'ingresso del parco."
      },
      {
        "nome": "Atins",
        "perChi": "Chi vuole il mare e il kitesurf",
        "testo": "Villaggio sul mare, più isolato e meno servito."
      }
    ],
    sapori: [
      {
        "nome": "Arroz de cuxá",
        "testo": "Riso con vinagreira e gamberi secchi, tipico del Maranhão."
      },
      {
        "nome": "Torta de camarão",
        "testo": "Torta di gamberi, specialità di São Luís."
      },
      {
        "nome": "Guaraná Jesus",
        "testo": "Bibita rosa locale, simbolo dello stato."
      }
    ],
    attenzioni: [
      "Nei mesi secchi le lagune si svuotano.",
      "Non entrare nelle ore centrali senza acqua e cappello.",
      "Nel parco si va con i fuoristrada e gli autisti delle agenzie locali.",
      "Febbre gialla: vaccinazione raccomandata per tutto il Maranhão."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Lagune turchesi tra le dune bianche dei Lençóis Maranhenses',
    immagine: '/images/viaggi/brasile-itinerario/giorno-19-lencois-maranhenses.jpg',
  },
  {
    slug: 'pantanal',
    paeseSlug: 'brasile',
    ordine: 7,
    nome: 'Pantanal (Transpantaneira e Porto Jofre)',
    tipologia: ['fauna', 'safari', 'zona umida'],
    giorniConsigliati: '4-6 giorni',
    visitataPersonalmente: false,
    introduzione:
      'La più grande zona umida tropicale del mondo. Nel Pantanal nord, lungo la strada sterrata della Transpantaneira fino a Porto Jofre, nella stagione secca i giaguari si vedono sulle rive dei fiumi con una regolarità che non ha confronti.',
    percheAndarci: 'Per i giaguari, le lontre giganti, i caimani e gli uccelli della zona umida.',
    cosaVedere: ['La Transpantaneira e i suoi ponti di legno', 'I fiumi Cuiabá, Três Irmãos e Piquiri intorno a Porto Jofre'],
    cosaFare: ['Uscite in barca all\'alba e nel pomeriggio per i giaguari', 'Safari in auto, a cavallo o a piedi dalle pousadas'],
    doveDormire: 'Pousadas semplici lungo la Transpantaneira (opzione economica), lodge sul fiume o hotel galleggiante vicino a Porto Jofre (fascia alta).',
    comeArrivare: 'Volo per Cuiabá, poi circa 2 ore fino a Poconé e la Transpantaneira (147 km fino a Porto Jofre).',
    comeSpostarsi: 'Auto alta o 4x4, oppure pacchetti con transfer; barche con piloteiro.',
    periodoMigliore: 'luglio-ottobre, meglio agosto-settembre.',
    costi: 'Barca per la giornata intorno a 1.600 R$ per massimo 4 persone; pacchetti completi 9.000-13.000 R$ a persona per 3-4 notti.',
    erroriDaEvitare: [
      'Andare nella stagione delle piogge (novembre-aprile)',
      'Scegliere operatori che accerchiano gli animali con troppe barche',
      'Percorrere la Transpantaneira di notte',
    ],
    luoghi: [
      {
        "nome": "La Transpantaneira",
        "testo": "Strada sterrata di 147 km con oltre cento ponti di legno, da Poconé a Porto Jofre. Si percorre in un giorno intero, con soste per gli animali.",
        "come": "Volo per Cuiabá, poi strada fino a Poconé, dove inizia la Transpantaneira. Auto alta o 4x4, oppure pacchetti con transfer.",
        "quando": "Nella stagione secca. Le piogge cadono soprattutto da novembre a marzo e possono allagare la strada.",
        "tempo": "Un giorno",
        "consiglio": "Non percorrerla di notte."
      },
      {
        "nome": "Porto Jofre e i giaguari",
        "testo": "Il Pantanal è una delle zone dove si vedono i giaguari. Nella stagione secca, sui fiumi Cuiabá, Três Irmãos e Piquiri, si vedono spesso sulle rive.",
        "come": "Uscite in barca con piloteiro all'alba e nel pomeriggio.",
        "quando": "Stagione secca.",
        "tempo": "1-2 giorni di uscite",
        "costo": "Barca con piloteiro a giornata o mezza giornata, da dividere in gruppo: chiedi il prezzo alla pousada",
        "consiglio": "Evita gli operatori che accerchiano gli animali con troppe barche."
      },
      {
        "nome": "Safari dalle pousadas",
        "testo": "Safari in auto, a cavallo o a piedi dalle pousadas lungo la Transpantaneira, per capibara, caimani, tucani e giabiru.",
        "come": "Con la pousada, che organizza le uscite.",
        "quando": "Mattina e tardo pomeriggio.",
        "tempo": "1-2 giorni",
        "consiglio": "L'opzione economica: due notti in una pousada semplice e una o due giornate di barca da Porto Jofre."
      },
      {
        "nome": "Cuiabá",
        "testo": "La capitale del Mato Grosso, base logistica per il Pantanal e per proseguire verso l'Amazzonia con un volo per Manaus.",
        "come": "Volo da São Paulo o Brasília.",
        "quando": "Giorno di arrivo e di partenza.",
        "tempo": "Una notte",
        "consiglio": "Il Mato Grosso è a UTC-4, un'ora indietro rispetto a Rio: controlla gli orari dei voli."
      }
    ],
    programmi: [
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorno 1: volo per Cuiabá e strada fino a una pousada",
          "Giorno 2: safari e discesa a Porto Jofre",
          "Giorno 3: uscite in barca per i giaguari",
          "Giorno 4: rientro a Cuiabá"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorno 1: volo e pousada lungo la Transpantaneira",
          "Giorno 2: safari e discesa a Porto Jofre",
          "Giorni 3-4: barca all'alba e nel pomeriggio",
          "Giorno 5: rientro a Cuiabá e volo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pousadas lungo la Transpantaneira",
        "perChi": "Chi ha budget contenuto",
        "testo": "Semplici e economiche, con uscite a piedi e in auto."
      },
      {
        "nome": "Lodge sul fiume o hotel galleggiante a Porto Jofre",
        "perChi": "Chi vuole i giaguari",
        "testo": "Fascia alta, con pacchetti completi di più notti."
      }
    ],
    sapori: [
      {
        "nome": "Pesce di fiume",
        "testo": "Pintado, pacu e piranha, alla griglia o in zuppa."
      },
      {
        "nome": "Carne seca",
        "testo": "Carne essiccata del Mato Grosso con riso e mandioca."
      }
    ],
    attenzioni: [
      "Stagione delle piogge (soprattutto novembre-marzo): Transpantaneira allagata e barche incerte.",
      "Operatori che accerchiano gli animali: scegli chi rispetta la distanza.",
      "Non guidare la Transpantaneira di notte.",
      "Febbre gialla: vaccino raccomandato per il Mato Grosso."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Un giaguaro nascosto tra la vegetazione sulla riva del fiume a Porto Jofre, nel Pantanal nord',
    immagine: '/images/brasile/pantanal-stock.jpg',
  },
  {
    slug: 'amazzonia-manaus',
    paeseSlug: 'brasile',
    ordine: 8,
    nome: 'Amazzonia da Manaus',
    tipologia: ['foresta', 'fiume', 'fauna'],
    giorniConsigliati: '4-5 giorni, fino a 10 proseguendo verso Perù o Colombia',
    visitataPersonalmente: false,
    introduzione:
      'Manaus, città di oltre due milioni di abitanti raggiungibile solo in aereo o in barca, è la porta dell\'Amazzonia brasiliana, alla confluenza tra il Rio Negro e il Solimões. Da qui si risale il fiume fino alla triplice frontiera con Colombia e Perù.',
    percheAndarci: 'Per la foresta allagata, i delfini rosa, l\'Incontro delle Acque e, volendo, per attraversare il continente via fiume.',
    cosaVedere: [
      'Il Teatro Amazonas e il Mercado Adolpho Lisboa',
      'L\'Incontro delle Acque',
      'L\'arcipelago delle Anavilhanas sul Rio Negro',
    ],
    cosaFare: [
      'Due o tre notti in un lodge nella foresta',
      'Canoa nell\'igapó, camminata guidata, osservazione notturna dei caimani',
      'La barca veloce o lenta fino a Tabatinga, poi Leticia (Colombia) o Iquitos (Perù)',
    ],
    doveDormire: 'Lodge con pensione completa sul Rio Negro (800-2.500 R$ a persona a notte); hotel in centro a Manaus.',
    comeArrivare: 'Volo per Manaus da São Paulo, Brasília o Cuiabá.',
    comeSpostarsi: 'Transfer dei lodge in barca; per Tabatinga volo (circa 1h30), barca veloce (30-36 ore) o lenta (6-7 giorni).',
    periodoMigliore: 'tutto l\'anno: acque alte aprile-luglio, acque basse settembre-dicembre.',
    costi: 'Barca veloce Manaus-Tabatinga circa 1.000 R$; barca veloce Santa Rosa-Iquitos indicativamente 150-200 soles.',
    erroriDaEvitare: [
      'Dimenticare i timbri di uscita alla Polícia Federal di Tabatinga',
      'Partire senza vaccino della febbre gialla',
      'Contare su orari fissi delle barche, che cambiano spesso',
    ],
    luoghi: [
      {
        "nome": "Teatro Amazonas e Mercado Adolpho Lisboa",
        "testo": "Il teatro dell'opera del boom della gomma e il mercato sul porto, inaugurato nel 1883 con una struttura in ferro ispirata alle Halles di Parigi. Sono le due tappe urbane di Manaus.",
        "come": "A piedi nel centro storico.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "consiglio": "Il mercato è un buon posto per assaggiare pesci amazzonici."
      },
      {
        "nome": "L'Incontro delle Acque",
        "testo": "Il punto dove il Rio Negro, scuro, si incontra con il Solimões, color caffelatte, e le due acque corrono affiancate senza mescolarsi per circa 6 chilometri.",
        "come": "In barca da Manaus, spesso incluso nei tour.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "consiglio": "Si vede meglio con un tour in barca che dal porto."
      },
      {
        "nome": "Arcipelago delle Anavilhanas",
        "testo": "Un enorme arcipelago fluviale sul Rio Negro, parco nazionale, con foresta allagata (igapó).",
        "come": "Con tour o lodge.",
        "quando": "Con le acque alte si naviga dentro la foresta allagata: chiedi al lodge il livello del fiume.",
        "tempo": "1-2 giorni",
        "consiglio": "Controlla se il tour include la foresta allagata."
      },
      {
        "nome": "Lodge nella foresta",
        "testo": "Due o tre notti in un lodge con canoa nell'igapó, camminate guidate e osservazione notturna dei caimani. Delfini rosa nel fiume.",
        "come": "Transfer dei lodge in barca da Manaus.",
        "quando": "Tutto l'anno; il paesaggio cambia molto tra acque alte e basse.",
        "tempo": "2-3 notti",
        "costo": "Pensione completa ed escursioni incluse: i prezzi variano molto da lodge a lodge",
        "consiglio": "Per un'informazione sulle agenzie, vedi la pagina Amazzonia del sito."
      },
      {
        "nome": "Verso Tabatinga e la triplice frontiera",
        "testo": "Da Manaus si può risalire il Rio delle Amazzoni fino a Tabatinga, al confine con Colombia e Perù, e proseguire per Leticia o Iquitos.",
        "come": "In volo, oppure in barca veloce o lenta: la barca lenta richiede diversi giorni.",
        "quando": "Tutto l'anno; gli orari delle barche cambiano spesso.",
        "tempo": "Da un giorno a diversi giorni, secondo il mezzo",
        "costo": "Prezzi delle barche al porto di Manaus o presso le compagnie",
        "consiglio": "Prima di passare in Colombia o in Perù informati sulle formalità di uscita dal Brasile."
      }
    ],
    programmi: [
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorno 1: Manaus (teatro e mercato)",
          "Giorno 2: Incontro delle Acque e trasferimento al lodge",
          "Giorno 3: canoa nell'igapó e uscita notturna",
          "Giorno 4: rientro a Manaus"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorno 1: Manaus",
          "Giorno 2: Incontro delle Acque e lodge",
          "Giorni 3-4: foresta e Anavilhanas",
          "Giorno 5: rientro a Manaus"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro di Manaus",
        "perChi": "Chi si ferma pochi giorni",
        "testo": "Hotel in centro vicino al teatro e al porto. Caldo e traffico."
      },
      {
        "nome": "Lodge sul Rio Negro",
        "perChi": "Chi cerca la foresta",
        "testo": "Pensione completa, escursioni incluse. Costi alti, ma tutto compreso."
      }
    ],
    sapori: [
      {
        "nome": "Tambaqui alla griglia",
        "testo": "Pesce amazzonico, servito con farofa e manioca."
      },
      {
        "nome": "Tacacá",
        "testo": "Zuppa con tucupi, jambu e gamberi, tipica dell'Amazzonia."
      },
      {
        "nome": "Açaí",
        "testo": "Servito salato con pesce o dolce con guaraná."
      }
    ],
    attenzioni: [
      "Triplice frontiera: informati in anticipo sulle formalità di uscita dal Brasile prima di entrare in Colombia o in Perù.",
      "Vaccino della febbre gialla: raccomandato per tutta l'Amazzonia.",
      "Orari delle barche non fissi: tieni margine.",
      "Contanti nella valuta del Paese prima di imbarcarti."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Barche fluviali ormeggiate sul Rio Negro a Manaus',
    immagine: '/images/brasile/manaus-stock.jpg',
  },
]
