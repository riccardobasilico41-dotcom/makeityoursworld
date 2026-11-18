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
    comeArrivare: "Da Salvador a Lençóis ci sono circa 6-7 ore di bus verso l'interno, con partenze dalla rodoviária: conviene quello del mattino presto o quello notturno. In alcuni periodi Azul vola da Salvador all'aeroporto della Chapada, a una ventina di chilometri dal paese, in circa 1 ora e 15, con poche frequenze a settimana. Per le escursioni servono poi tour con guida e auto.",
    comeSpostarsi: 'Tour con guida e auto; i sentieri sono poco segnalati.',
    periodoMigliore: 'aprile-settembre, stagione secca; il Poço Encantado si illumina da aprile a settembre.',
    costi: "Pousadas a Lençóis 200-500 R$ a notte la doppia (circa 35-90 €). Tour giornalieri 150-300 R$ a persona (circa 25-50 €), più guida e ingressi alle grotte, di solito esclusi. Budget basso: pousada semplice in due e un tour di gruppo, circa 50-70 € al giorno a persona oltre ai pasti; medio e alto salgono con le pousadas più curate e le guide private.",
    erroriDaEvitare: ['Fare i sentieri lunghi senza guida', 'Sottovalutare la salita iniziale della Fumaça'],
    miaEsperienza:
      "Tre giorni nella Chapada con base a Lençóis, arrivando in bus da Salvador. Abbiamo fatto il giro classico con guida e auto, fra le grotte, il Poço do Diabo e il tramonto sul Morro do Pai Inácio.",
    luoghi: [
      {
        "nome": "Morro do Pai Inácio",
        "testo": "La mesa che domina la valle. Il tramonto da qui è il classico della Chapada.",
        "come": "Con tour o auto; dal parcheggio 20-30 minuti di salita breve e ripida.",
        "quando": "Tramonto.",
        "tempo": "2 ore",
        "lat": -12.4594,
        "lng": -41.4715,
        "consiglio": "Arrivare mezz'ora prima del tramonto e portare una frontale per la discesa: in cima si sta sulla roccia senza parapetti."
      },
      {
        "nome": "Cachoeira da Fumaça",
        "testo": "Una cascata di circa 340 metri: il vento spesso disperde l'acqua in nebbia prima che tocchi terra.",
        "come": "Dal Vale do Capão, a circa un'ora e mezza di strada da Lençóis, con un sentiero di circa 6 km andata e ritorno e una salita iniziale ripida.",
        "quando": "Nelle giornate limpide: con le nuvole basse dall'alto si vede poco.",
        "tempo": "Mezza giornata, partendo presto",
        "lat": -12.6007,
        "lng": -41.4551,
        "consiglio": "Non sottovalutare la salita iniziale."
      },
      {
        "nome": "Poço Azul e Poço Encantado",
        "testo": "Grotte allagate dove la luce del sole entra e accende l'acqua di blu. Al Poço Azul si può entrare in acqua con la maschera, il Poço Encantado si guarda soltanto.",
        "come": "Con tour e guida, in auto.",
        "quando": "Il raggio di sole entra solo in alcuni mesi e in alcune ore: chiedi gli orari alla guida.",
        "tempo": "Mezza giornata",
        "costo": "Biglietto d'ingresso in entrambe le grotte, di solito non compreso nel prezzo del tour.",
        "lat": -12.7821,
        "lng": -41.1492,
        "consiglio": "Controlla gli orari della luce: fuori stagione il blu non si vede."
      },
      {
        "nome": "Lapa Doce e Pratinha",
        "testo": "Grotte con acqua turchese. A Pratinha si nuota con maschera e torcia dentro la grotta, guidati da una corda; Lapa Doce si percorre a piedi per circa un'ora, tra stalattiti e grandi sale.",
        "come": "Giro classico con guida e auto.",
        "quando": "Giornata intera.",
        "tempo": "Giornata",
        "costo": "Ingressi a pagamento, di solito non compresi nel tour.",
        "lat": -12.3339,
        "lng": -41.6048,
        "consiglio": "Vai con una guida: nelle grotte aiuta a orientarsi."
      },
      {
        "nome": "Vale do Pati",
        "testo": "Trekking di più giorni tra valli remote dormendo nelle case dei contadini.",
        "come": "Con una guida locale, da organizzare giorni prima; si parte a piedi da Guiné o dal Vale do Capão.",
        "quando": "Stagione secca.",
        "tempo": "3-5 giorni",
        "lat": -12.7566,
        "lng": -41.5119,
        "consiglio": "Per chi ha tempo e gambe, è l'alternativa ai tour di giornata."
      },
      {
        "nome": "Lençóis",
        "testo": "Il paese nato nell'Ottocento con la corsa ai diamanti, con case coloniali colorate, strade di pietra e il fiume che scorre tra le rocce rosse sotto il centro. È la base dei tour: le agenzie sono tutte in centro e la sera il paese si gira a piedi.",
        "come": "Bus da Salvador fino alla stazione degli autobus, a pochi minuti dal centro.",
        "quando": "La sera, quando si organizzano i tour del giorno dopo.",
        "tempo": "Mezza giornata",
        "lat": -12.5615,
        "lng": -41.3895,
        "consiglio": "Parlare con un paio di agenzie e fissare guida e auto la sera prima."
      },
      {
        "nome": "Ribeirão do Meio",
        "testo": "Un fiume che scorre su una lunga lastra di roccia liscia, usata come scivolo naturale, con una pozza dove si fa il bagno. È la passeggiata più facile da Lençóis.",
        "come": "A piedi dal paese, circa 45 minuti su sentiero facile.",
        "quando": "Il giorno dell'arrivo o nel pomeriggio libero.",
        "tempo": "2-3 ore",
        "lat": -12.5875,
        "lng": -41.3893,
        "consiglio": "Le pozze sono scure e profonde: entrare solo dove si vede entrare la gente del posto."
      },
      {
        "nome": "Poço do Diabo",
        "testo": "Una cascata che cade in una pozza scura circondata da pareti di roccia, sul fiume Mucugezinho. È una delle soste del giro classico verso il Pai Inácio e le grotte.",
        "come": "Breve sentiero dalla strada, compreso nel giro classico con guida e auto.",
        "quando": "Nelle ore calde, per il bagno.",
        "tempo": "1 ora",
        "lat": -12.4617,
        "lng": -41.4145,
        "consiglio": "Scarpe da acqua per le rocce scivolose."
      },
      {
        "nome": "Vale do Capão",
        "testo": "Una valle verde sotto le mesas, con il villaggio di Caeté-Açu e un'atmosfera più alternativa di Lençóis. Da qui partono il sentiero della Fumaça e una delle vie per il Vale do Pati.",
        "come": "In auto o con transfer da Lençóis, circa un'ora e mezza.",
        "quando": "Per una o due notti, se si vuole camminare.",
        "tempo": "1-2 giorni",
        "lat": -12.6093,
        "lng": -41.5014,
        "consiglio": "Chi fa la Fumaça la mattina presto risparmia molta strada dormendo qui."
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
      },
      {
        "titolo": "1 giorno",
        "tappe": [
          "Giro classico con guida e auto: Lapa Doce o Pratinha, Poço do Diabo, tramonto al Pai Inácio"
        ]
      },
      {
        "titolo": "5 giorni",
        "tappe": [
          "Giorno 1: arrivo a Lençóis e Ribeirão do Meio",
          "Giorno 2: giro classico delle grotte e Pai Inácio",
          "Giorni 3-5: trekking del Vale do Pati con guida, oppure Fumaça dal Capão e Poço Azul"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lençóis",
        "perChi": "Chi vuole la base dei tour",
        "testo": "Pousadas per ogni budget. Piccolo paese con agenzie e ristoranti.",
        "fascia": "200-500 R$, circa 35-90 €"
      },
      {
        "nome": "Vale do Capão",
        "perChi": "Chi vuole camminare",
        "testo": "Più tranquillo, vicino alla Fumaça e al Pati."
      },
      {
        "nome": "Mucugê e Igatu",
        "perChi": "chi esplora il sud della Chapada",
        "testo": "Paesi di pietra dell'epoca dei diamanti, più vicini al Poço Azul, al Poço Encantado e agli accessi del Pati. Meno agenzie e servizi che a Lençóis."
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
    gite: [
      {
        "nome": "Igatu",
        "distanza": "circa 2 ore d'auto da Lençóis",
        "come": "In auto o con un tour, via Andaraí; l'ultimo tratto è su strada di pietra.",
        "testo": "Un villaggio di cercatori di diamanti in parte abbandonato, con le case di pietra a secco in rovina tra la vegetazione. Si abbina al Poço Azul e al Poço Encantado, che sono nella stessa zona."
      },
      {
        "nome": "Cachoeira do Buracão",
        "distanza": "nel sud della Chapada, verso Ibicoara: lontana da Lençóis, meglio con una notte in zona",
        "come": "Con guida locale, obbligatoria per l'accesso.",
        "testo": "Una cascata alta che cade in un canyon stretto: l'ultimo tratto si fa nuotando nel fiume tra le pareti fino alla pozza sotto il salto."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono nella Chapada Diamantina?",
        "risposta": "Tre giorni bastano per il giro classico delle grotte, il Pai Inácio e una tra Fumaça e Poço Azul. Con cinque giorni si aggiunge il trekking del Vale do Pati."
      },
      {
        "domanda": "Serve una guida?",
        "risposta": "Non ovunque, ma sui sentieri lunghi e nelle grotte sì, e i percorsi sono poco segnalati. Le agenzie di Lençóis organizzano guida e auto la sera prima."
      },
      {
        "domanda": "Meglio dormire a Lençóis o nel Vale do Capão?",
        "risposta": "Lençóis per i tour di giornata, i servizi e le agenzie; il Capão per chi vuole camminare, vicino alla Fumaça e al Pati, in un ambiente più tranquillo."
      },
      {
        "domanda": "Si può fare il bagno al Poço Azul e al Poço Encantado?",
        "risposta": "Al Poço Azul sì, con la maschera. Il Poço Encantado si guarda soltanto. Entrambi hanno un biglietto d'ingresso."
      },
      {
        "domanda": "Quando si vede la luce blu nel Poço Encantado?",
        "risposta": "Indicativamente da aprile a settembre, nelle ore centrali della giornata, quando il raggio di sole entra nella grotta."
      },
      {
        "domanda": "Qual è il periodo migliore?",
        "risposta": "Da aprile a settembre, nella stagione secca, con sentieri praticabili; le cascate hanno ancora acqua fino a giugno-luglio."
      }
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
    comeArrivare: "Si vola a São Luís, quasi sempre con uno scalo a São Paulo, Brasília o Fortaleza; dall'aeroporto al centro c'è circa mezz'ora. Da São Luís a Barreirinhas sono circa 4 ore in van, con partenza al mattino presto. Atins si raggiunge da Barreirinhas in barca o in 4x4; Santo Amaro ha un accesso separato da São Luís.",
    comeSpostarsi: 'Solo 4x4 con autisti autorizzati dentro il parco; barche sul fiume.',
    periodoMigliore: 'giugno-settembre, con il massimo d\'acqua in luglio-agosto.',
    costi: "Pousadas a Barreirinhas 250-600 R$ a notte la doppia (circa 45-105 €); ad Atins fascia media-alta. Jardineira 100-150 R$ a persona per circuito (circa 17-26 €), ingresso al parco gratuito, barca sul Rio Preguiças e pranzi a parte. Budget basso: pousada semplice in due e un circuito al giorno, circa 40-70 € a persona oltre ai pasti; con pousadas sulla spiaggia ad Atins e voli panoramici il conto sale.",
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
        "costo": "Jardineira indicativamente 100-150 R$ a persona per circuito, guida inclusa (circa 17-26 €). Ingresso al parco gratuito.",
        "orari": "Le partenze sono nel primo pomeriggio, per restare fino al tramonto; rientro con il buio.",
        "lat": -2.6631,
        "lng": -42.8621,
        "consiglio": "Dentro il parco non c'è nulla: acqua e cappello vanno portati da Barreirinhas."
      },
      {
        "nome": "Lagoa Bonita",
        "testo": "Si raggiunge salendo una duna ripida con una corda: dall'alto si vede il mare di dune e lagune fino all'orizzonte.",
        "come": "Circuito in jardineira dal lato di Barreirinhas.",
        "quando": "All'alba o al tramonto. A mezzogiorno la sabbia è rovente.",
        "tempo": "Mezza giornata",
        "costo": "Jardineira indicativamente 100-150 R$ a persona, guida inclusa (circa 17-26 €). Ingresso al parco gratuito.",
        "lat": -2.6833,
        "lng": -42.938,
        "consiglio": "Vai nelle prime ore o nel pomeriggio."
      },
      {
        "nome": "Rio Preguiças: Vassouras, Mandacaru e Caburé",
        "testo": "Una giornata in barca lungo il fiume fino al mare. A Vassouras le scimmie cappuccine si avvicinano alla riva, a Mandacaru c'è un faro da cui si guardano le dune, Caburé è una lingua di sabbia tra il fiume e l'oceano.",
        "come": "Barca da Barreirinhas la mattina, con soste lungo il fiume e pranzo a Caburé (a parte).",
        "quando": "Giornata intera.",
        "tempo": "Giornata",
        "lat": -2.6503,
        "lng": -42.689,
        "consiglio": "Chi vuole può dormire ad Atins invece di rientrare."
      },
      {
        "nome": "Atins",
        "testo": "Il villaggio all'estremità del parco, base del kitesurf.",
        "come": "In barca o 4x4 da Barreirinhas.",
        "quando": "Meglio per una notte.",
        "tempo": "Una notte",
        "lat": -2.5717,
        "lng": -42.7428,
        "consiglio": "Il transfer di rientro verso São Luís è più lungo da Atins: pianifica con anticipo."
      },
      {
        "nome": "Centro storico di São Luís",
        "testo": "Unica capitale di uno stato brasiliano fondata dai francesi (1612), ha un centro storico patrimonio UNESCO dal 1997 con case coperte di azulejos portoghesi.",
        "come": "In app o a piedi nella Praia Grande.",
        "quando": "Prima di partire per Barreirinhas o all'arrivo.",
        "tempo": "Mezza giornata",
        "lat": -2.5309,
        "lng": -44.3057,
        "consiglio": "Chi arriva presto può fare una passeggiata nella Praia Grande."
      },
      {
        "nome": "Barreirinhas",
        "testo": "Il paese sul Rio Preguiças che fa da porta d'ingresso al parco, con le agenzie dei circuiti, le pousadas e il lungofiume dove partono le barche. Non è bello in sé, ma è la base più comoda.",
        "come": "In van da São Luís, circa 4 ore.",
        "quando": "Tutto l'anno; per le lagune piene da giugno a settembre.",
        "tempo": "La base per 2-3 notti",
        "lat": -2.7541,
        "lng": -42.826,
        "consiglio": "Prenotare i circuiti la sera prima e portare contanti per barche e pranzi."
      },
      {
        "nome": "Faro di Mandacaru",
        "testo": "Il faro bianco e rosso sopra il villaggio di Mandacaru, lungo il Rio Preguiças. Dall'alto si vedono insieme il fiume, le dune e il mare.",
        "come": "Sosta del giro in barca sul Rio Preguiças; si sale a piedi con una scala interna.",
        "quando": "Durante il giro in barca, a metà mattina.",
        "tempo": "30-45 minuti",
        "lat": -2.5926,
        "lng": -42.7074,
        "consiglio": "Molti gradini e poco spazio in cima: aspettare il proprio turno."
      },
      {
        "nome": "Caburé",
        "testo": "Una lingua di sabbia stretta tra il fiume e l'oceano, con qualche pousada e ristorante di pesce. È la sosta del pranzo nel giro in barca.",
        "come": "In barca da Barreirinhas o da Atins.",
        "quando": "A pranzo; da agosto il vento soffia forte.",
        "tempo": "2 ore",
        "lat": -2.58,
        "lng": -42.6965,
        "consiglio": "Il vento a Caburé e Atins è forte da agosto in poi: è la stagione del kitesurf, meno comoda per il bagno."
      },
      {
        "nome": "Canto do Atins",
        "testo": "Il punto dove le dune del parco arrivano quasi fino alla spiaggia, a ovest di Atins, con lagune raggiungibili a piedi e un paio di ristoranti di gamberi. Dal lato di Atins il parco è meno frequentato.",
        "come": "In 4x4 o a piedi sulla spiaggia da Atins.",
        "quando": "Tardo pomeriggio, per le lagune al tramonto.",
        "tempo": "Mezza giornata",
        "lat": -2.5719,
        "lng": -42.8021,
        "consiglio": "Portare acqua: tra le dune non c'è ombra."
      },
      {
        "nome": "Santo Amaro do Maranhão",
        "testo": "La porta d'ingresso occidentale del parco, meno frequentata di Barreirinhas, con lagune grandi a pochi chilometri dal paese. Qui le dune arrivano quasi fino alle case.",
        "come": "Da São Luís in 4x4 o con transfer, poi jardineira verso le lagune.",
        "quando": "Da giugno a settembre, con le lagune piene.",
        "tempo": "1-2 giorni",
        "lat": -2.4988,
        "lng": -43.2533,
        "consiglio": "La tassa turistica di 10 R$ introdotta dal comune nel 2023 è stata sospesa dal tribunale del Maranhão."
      },
      {
        "nome": "Queimada dos Britos",
        "testo": "Un'oasi abitata da poche famiglie nel cuore delle dune, con alberi, animali e piccole case. È una delle tappe del trekking che attraversa il parco da Atins verso Santo Amaro.",
        "come": "A piedi con guida nella traversata di più giorni, o in 4x4 da Santo Amaro.",
        "quando": "Stagione secca e lagune piene, da giugno a settembre.",
        "tempo": "Una notte nella traversata",
        "lat": -2.5023,
        "lng": -43.0599,
        "consiglio": "La traversata si fa solo con guida: tra le dune non ci sono sentieri segnati."
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
      },
      {
        "titolo": "1 giorno",
        "tappe": [
          "Arrivo presto a Barreirinhas, circuito della Lagoa Azul o della Lagoa Bonita nel pomeriggio fino al tramonto"
        ]
      },
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorno 1: São Luís e Praia Grande",
          "Giorno 2: van per Barreirinhas e circuito della Lagoa Azul",
          "Giorno 3: Lagoa Bonita all'alba, pomeriggio libero o volo panoramico",
          "Giorno 4: barca sul Rio Preguiças, Mandacaru e Caburé, notte ad Atins"
        ]
      }
    ],
    zone: [
      {
        "nome": "Barreirinhas",
        "perChi": "Chi vuole la base dei circuiti",
        "testo": "Pousadas per ogni budget. Porta d'ingresso del parco.",
        "fascia": "250-600 R$, circa 45-105 €"
      },
      {
        "nome": "Atins",
        "perChi": "Chi vuole il mare e il kitesurf",
        "testo": "Villaggio sul mare, più isolato e meno servito, con resort di kitesurf e pousadas sulla spiaggia di fascia media-alta."
      },
      {
        "nome": "Santo Amaro do Maranhão",
        "perChi": "chi vuole il lato meno frequentato",
        "testo": "Porta d'ingresso occidentale del parco, con lagune vicine al paese e meno gruppi."
      },
      {
        "nome": "Centro storico di São Luís",
        "perChi": "chi arriva o riparte in aereo",
        "testo": "Una notte nella Praia Grande o nei quartieri sul mare prima del van per Barreirinhas; la sera si resta nelle vie animate e si rientra in app."
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
    gite: [
      {
        "nome": "Volo panoramico sul parco",
        "distanza": "dall'aeroporto di Barreirinhas",
        "come": "In piccolo aereo, con le agenzie del paese.",
        "testo": "Dall'alto si capisce quanto sono estese le lagune: un mare di dune bianche con migliaia di pozze azzurre e verdi fino alla costa."
      },
      {
        "nome": "Alcântara",
        "distanza": "dall'altra parte della baia di São Luís",
        "come": "In barca dal Cais da Praia Grande di São Luís.",
        "testo": "Una cittadina coloniale in parte in rovina, con chiese e palazzi dei proprietari terrieri dell'Ottocento. Si visita in giornata prima o dopo i Lençóis."
      }
    ],
    faq: [
      {
        "domanda": "Quando ci sono le lagune piene?",
        "risposta": "Da giugno a settembre, con il massimo d'acqua in luglio-agosto. Le piogge cadono più o meno da gennaio a giugno; nei mesi secchi le lagune evaporano."
      },
      {
        "domanda": "Si paga l'ingresso al parco?",
        "risposta": "No. L'ICMBio non vende biglietti e il piano di concessione ai privati è stato ritirato a fine 2023. Si pagano i circuiti in jardineira, circa 100-150 R$ a persona."
      },
      {
        "domanda": "Si può entrare nel parco con la propria auto?",
        "risposta": "No, si entra solo con i fuoristrada e gli autisti autorizzati delle agenzie locali."
      },
      {
        "domanda": "Meglio Barreirinhas o Atins?",
        "risposta": "Barreirinhas per i circuiti classici, i servizi e i transfer per São Luís; Atins per il mare, il kitesurf e le dune meno frequentate del lato est."
      },
      {
        "domanda": "Quanti giorni servono?",
        "risposta": "Due o tre giorni per i due circuiti principali e il giro in barca sul Rio Preguiças, più il tempo del transfer da São Luís, circa 4 ore per tratta."
      },
      {
        "domanda": "Serve il vaccino della febbre gialla?",
        "risposta": "È raccomandato per tutto il Maranhão, da fare almeno 10 giorni prima della partenza."
      }
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
    comeArrivare: "Si vola a Cuiabá, di solito con scalo a São Paulo o Brasília; l'aeroporto è a Várzea Grande, appena fuori città. Da qui si guida circa 2 ore fino a Poconé, dove comincia la Transpantaneira, 147 km di sterrato con oltre cento ponti di legno fino a Porto Jofre. Serve un'auto alta, meglio 4x4, oppure un pacchetto con transfer.",
    comeSpostarsi: 'Auto alta o 4x4, oppure pacchetti con transfer; barche con piloteiro.',
    periodoMigliore: 'luglio-ottobre, meglio agosto-settembre.',
    costi: "Barca con piloteiro intorno a 1.400-1.600 R$ la giornata per 4-6 persone (circa 240-275 €), 1.000 R$ la mezza giornata. Budget basso, in autonomia con auto a noleggio e pousadas semplici: sotto i 1.000-1.500 R$ al giorno a persona (circa 170-260 €). Budget alto: pacchetti completi con guida naturalista, pensione completa e barca privata, 9.000-13.000 R$ a persona per 3-4 notti (circa 1.550-2.250 €).",
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
        "costo": "Strada pubblica, senza pedaggio.",
        "lat": -16.2827,
        "lng": -56.6277,
        "consiglio": "Non percorrerla di notte."
      },
      {
        "nome": "Porto Jofre e i giaguari",
        "testo": "Il Pantanal è una delle zone dove si vedono i giaguari. Nella stagione secca, sui fiumi Cuiabá, Três Irmãos e Piquiri, si vedono spesso sulle rive.",
        "come": "Uscite in barca con piloteiro all'alba e nel pomeriggio.",
        "quando": "Stagione secca.",
        "tempo": "1-2 giorni di uscite",
        "costo": "Barca con piloteiro intorno a 1.400-1.600 R$ per la giornata intera per 4-6 persone (circa 240-275 €) e intorno a 1.000 R$ per mezza giornata (circa 170 €), da dividere.",
        "lat": -17.3644,
        "lng": -56.7735,
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
        "lat": -15.5987,
        "lng": -56.0991,
        "consiglio": "Il Mato Grosso è a UTC-4, un'ora indietro rispetto a Rio: controlla gli orari dei voli."
      },
      {
        "nome": "Poconé e l'inizio della Transpantaneira",
        "testo": "La cittadina dove finisce l'asfalto e comincia la Transpantaneira, con il portale d'ingresso in legno. È l'ultimo posto con distributori, bancomat e negozi prima di 147 km di sterrato.",
        "come": "Da Cuiabá in auto, circa 2 ore.",
        "quando": "La mattina, per arrivare alle pousadas con la luce.",
        "tempo": "30 minuti di sosta",
        "lat": -16.2579,
        "lng": -56.6339,
        "consiglio": "Fare il pieno e prelevare contanti qui."
      },
      {
        "nome": "Rio Pixaim",
        "testo": "Il fiume che la Transpantaneira attraversa più o meno a metà strada, con diverse pousadas sulle rive. È uno dei tratti migliori per uscite in barca brevi, caimani, capibara e uccelli d'acqua.",
        "come": "Lungo la Transpantaneira, in auto; le uscite in barca si prenotano con la pousada.",
        "quando": "Alba e tardo pomeriggio, quando gli animali sono più attivi.",
        "tempo": "1-2 notti",
        "lat": -16.7444,
        "lng": -56.8635,
        "consiglio": "Una buona tappa intermedia per spezzare la strada verso Porto Jofre."
      },
      {
        "nome": "Parque Estadual Encontro das Águas",
        "testo": "L'area protetta alla confluenza dei fiumi Cuiabá, Piquiri e Três Irmãos, raggiunta in barca da Porto Jofre. È qui che si concentrano gli avvistamenti di giaguari sulle rive nella stagione secca.",
        "come": "Solo in barca con piloteiro da Porto Jofre o dai lodge sul fiume.",
        "quando": "Da luglio a ottobre, meglio agosto e settembre.",
        "tempo": "Uscite di mezza giornata o giornata intera",
        "lat": -17.0861,
        "lng": -56.7203,
        "consiglio": "Partire all'alba: con il caldo del pomeriggio i giaguari cercano l'ombra."
      },
      {
        "nome": "Canali del Três Irmãos e lontre giganti",
        "testo": "I canali laterali e le anse dei fiumi intorno a Porto Jofre, dove vivono le famiglie di lontre giganti e si vedono martin pescatori, aironi e giabiru. Sono le uscite più tranquille, lontane dalle barche che seguono i giaguari.",
        "come": "In barca con il piloteiro, chiedendo di entrare nei canali più piccoli.",
        "quando": "Mattina presto.",
        "tempo": "2-3 ore",
        "consiglio": "Le lontre sono rumorose e curiose, ma vanno osservate a distanza dalle tane."
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
      },
      {
        "titolo": "1 giorno",
        "tappe": [
          "Da Cuiabá a Poconé e sulla Transpantaneira fino al Rio Pixaim, con soste per gli animali, e notte in pousada: il minimo per vedere il Pantanal, senza giaguari garantiti"
        ]
      },
      {
        "titolo": "6 giorni",
        "tappe": [
          "Giorno 1: volo per Cuiabá e strada fino a Poconé e al Rio Pixaim",
          "Giorno 2: safari intorno alla pousada e discesa a Porto Jofre",
          "Giorni 3-5: barca all'alba e nel pomeriggio verso l'Encontro das Águas e i canali del Três Irmãos",
          "Giorno 6: rientro a Cuiabá e volo"
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
      },
      {
        "nome": "Poconé",
        "perChi": "chi arriva tardi da Cuiabá",
        "testo": "Cittadina all'inizio della Transpantaneira, con alberghi semplici e servizi. Comoda per partire all'alba sulla strada."
      },
      {
        "nome": "Cuiabá",
        "perChi": "chi ha il volo presto",
        "testo": "Capitale del Mato Grosso, con alberghi vicino all'aeroporto, che è a Várzea Grande, appena fuori città."
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
    gite: [
      {
        "nome": "Chapada dos Guimarães",
        "distanza": "circa 65 km da Cuiabá, 1 ora d'auto",
        "come": "In auto a noleggio o con tour da Cuiabá.",
        "testo": "Un altopiano di arenaria rossa con canyon e cascate, come il Véu de Noiva, che cade da una parete verticale. Si abbina al Pantanal il giorno prima del volo."
      },
      {
        "nome": "Pantanal sud e Bonito",
        "distanza": "dall'altra parte del Pantanal, con volo su Campo Grande",
        "come": "In volo da Cuiabá a Campo Grande con scalo, poi strada verso Miranda e Bonito.",
        "testo": "Fazendas tra i pascoli allagati e i fiumi trasparenti di Bonito per lo snorkeling. I giaguari si vedono con meno regolarità che al nord."
      }
    ],
    faq: [
      {
        "domanda": "Quando si vedono i giaguari?",
        "risposta": "Da luglio a ottobre, nella stagione secca, quando l'acqua si ritira nei fiumi; agosto e settembre sono i mesi migliori intorno a Porto Jofre."
      },
      {
        "domanda": "Quanti giorni servono?",
        "risposta": "Almeno 4-5 giorni: uno per arrivare sulla Transpantaneira, due o tre di barca da Porto Jofre e uno per rientrare a Cuiabá."
      },
      {
        "domanda": "Si può fare il Pantanal da soli?",
        "risposta": "Sì, con un'auto alta o 4x4 noleggiata a Cuiabá e le pousadas prenotate prima. La barca con piloteiro si organizza con la pousada a Porto Jofre e si divide con altri viaggiatori."
      },
      {
        "domanda": "Quanto costa?",
        "risposta": "In autonomia si resta indicativamente sotto i 1.000-1.500 R$ al giorno a persona (circa 170-260 €). I pacchetti completi con guida e barca privata costano 9.000-13.000 R$ a persona per 3-4 notti (circa 1.550-2.250 €)."
      },
      {
        "domanda": "Serve il vaccino della febbre gialla?",
        "risposta": "È raccomandato per il Mato Grosso, da fare almeno 10 giorni prima della partenza."
      },
      {
        "domanda": "Che fuso orario ha il Pantanal nord?",
        "risposta": "Il Mato Grosso è a UTC-4, un'ora indietro rispetto a Rio e a São Paulo: va considerato con i voli interni."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Un giaguaro nascosto tra la vegetazione sulla riva del fiume a Porto Jofre, nel Pantanal nord',
    immagine: '/images/brasile/pantanal-giaguaro.jpg',
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
    comeArrivare: "Manaus si raggiunge solo in aereo o in barca. I voli diretti arrivano da São Paulo, Brasília e altre città brasiliane, e c'è un volo da Cuiabá per chi viene dal Pantanal. L'aeroporto Eduardo Gomes è a nord-ovest del centro, raggiungibile in taxi o in app. I lodge mandano il transfer in barca o in auto più barca dal porto della città.",
    comeSpostarsi: 'Transfer dei lodge in barca; per Tabatinga volo (circa 1h30), barca veloce (30-36 ore) o lenta (6-7 giorni).',
    periodoMigliore: 'tutto l\'anno: acque alte aprile-luglio, acque basse settembre-dicembre.',
    costi: "Teatro Amazonas 20 R$ (circa 3,50 €), Palacete Provincial gratuito. Lodge con pensione completa, guida e attività da circa 800-1.500 R$ a persona a notte (circa 140-260 €), oltre 2.500 R$ (circa 430 €) nella fascia alta. Barca veloce per Tabatinga intorno ai 1.000 R$ (circa 170 €). In città il budget dipende dall'albergo; nel lodge quasi tutto è compreso.",
    erroriDaEvitare: [
      'Dimenticare i timbri di uscita alla Polícia Federal di Tabatinga',
      'Partire senza vaccino della febbre gialla',
      'Contare su orari fissi delle barche, che cambiano spesso',
    ],
    luoghi: [
      {
        "nome": "Teatro Amazonas e Mercado Adolpho Lisboa",
        "testo": "Il teatro dell'opera del boom della gomma e il mercato sul porto, inaugurato nel 1883 con una struttura in ferro ispirata alle Halles di Parigi. Sono le due tappe urbane di Manaus.",
        "come": "A piedi nel centro storico. La visita al teatro è guidata.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "costo": "Teatro: 20 R$ intero, 10 R$ ridotto (circa 3,50 e 1,70 €); gratis per i nati in Amazonas e i bambini fino a 10 anni.",
        "orari": "Teatro: visite da martedì a sabato 9:00-17:00, domenica e festivi 9:00-13:00; lunedì non sono previste visite.",
        "lat": -3.1303,
        "lng": -60.0234,
        "url": "https://cultura.am.gov.br/espacos-culturais/teatros/teatro-amazonas/",
        "consiglio": "Il mercato è un buon posto per assaggiare pesci amazzonici."
      },
      {
        "nome": "L'Incontro delle Acque",
        "testo": "Il punto dove il Rio Negro, scuro, si incontra con il Solimões, color caffelatte, e le due acque corrono affiancate senza mescolarsi per circa 6 chilometri.",
        "come": "In barca da Manaus, spesso incluso nei tour.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "lat": -3.1189,
        "lng": -59.8927,
        "consiglio": "Si vede meglio con un tour in barca che dal porto."
      },
      {
        "nome": "Arcipelago delle Anavilhanas",
        "testo": "Un enorme arcipelago fluviale sul Rio Negro, parco nazionale, con foresta allagata (igapó).",
        "come": "Con tour o lodge.",
        "quando": "Con le acque alte si naviga dentro la foresta allagata: chiedi al lodge il livello del fiume.",
        "tempo": "1-2 giorni",
        "lat": -2.5291,
        "lng": -60.9196,
        "consiglio": "Controlla se il tour include la foresta allagata."
      },
      {
        "nome": "Lodge nella foresta",
        "testo": "Due o tre notti in un lodge con canoa nell'igapó, camminate guidate e osservazione notturna dei caimani. Delfini rosa nel fiume.",
        "come": "Transfer dei lodge in barca da Manaus.",
        "quando": "Tutto l'anno; il paesaggio cambia molto tra acque alte e basse.",
        "tempo": "2-3 notti",
        "costo": "Indicativamente da 800-1.500 R$ a persona a notte nelle strutture semplici (circa 140-260 €) a oltre 2.500 R$ (circa 430 €) in quelle di fascia alta, con pensione completa, guida e attività.",
        "consiglio": "Per un'informazione sulle agenzie, vedi la pagina Amazzonia del sito."
      },
      {
        "nome": "Verso Tabatinga e la triplice frontiera",
        "testo": "Da Manaus si può risalire il Rio delle Amazzoni fino a Tabatinga, al confine con Colombia e Perù, e proseguire per Leticia o Iquitos.",
        "come": "In volo, oppure in barca veloce o lenta: la barca lenta richiede diversi giorni.",
        "quando": "Tutto l'anno; gli orari delle barche cambiano spesso.",
        "tempo": "Da un giorno a diversi giorni, secondo il mezzo",
        "costo": "Barca veloce Manaus-Tabatinga intorno ai 1.000 R$ (circa 170 €), con una partenza al giorno nell'aprile 2026; da Santa Rosa a Iquitos barca veloce indicativamente 150-200 soles.",
        "lat": -4.2247,
        "lng": -69.9362,
        "consiglio": "Prima di passare in Colombia o in Perù informati sulle formalità di uscita dal Brasile."
      },
      {
        "nome": "Palácio Rio Negro",
        "testo": "La villa costruita all'inizio del Novecento per un commerciante tedesco della gomma, poi sede del governo dello stato. Oggi è un centro culturale con sale d'epoca e mostre, e racconta bene il lusso dell'epoca del caucciù.",
        "come": "A piedi o in app dal centro, lungo l'Avenida Sete de Setembro.",
        "quando": "Di mattina, insieme al Palacete Provincial.",
        "tempo": "1 ora",
        "orari": "Lunedì, mercoledì, giovedì, venerdì e sabato 9:00-15:00; chiuso il martedì.",
        "lat": -3.1351,
        "lng": -60.0168,
        "url": "https://cultura.am.gov.br/espacos-culturais/centros-culturais/centro-cultural-palacio-rio-negro/"
      },
      {
        "nome": "Palacete Provincial",
        "testo": "Un palazzo dell'Ottocento sulla Praça Heliodoro Balbi che riunisce diversi piccoli musei, tra archeologia, numismatica, pinacoteca e immagine e suono. È fresco e poco frequentato.",
        "come": "A piedi dal Teatro Amazonas, circa 10 minuti.",
        "quando": "Nelle ore calde, al riparo dal sole.",
        "tempo": "1-1,5 ore",
        "costo": "Ingresso gratuito.",
        "orari": "Lunedì, martedì, giovedì, venerdì e sabato 9:00-15:00.",
        "lat": -3.1356,
        "lng": -60.021,
        "url": "https://cultura.am.gov.br/espacos-culturais/centros-culturais/centro-cultural-palacete-provincial/"
      },
      {
        "nome": "Catedral Metropolitana",
        "testo": "La cattedrale di Nossa Senhora da Conceição, sopra il porto, con la facciata semplice e la piazza alberata davanti. Da qui si scende a piedi verso il mercato e il fiume.",
        "come": "A piedi nel centro, tra il porto e l'Avenida Eduardo Ribeiro.",
        "quando": "Di mattina.",
        "tempo": "30 minuti",
        "lat": -3.1352,
        "lng": -60.0255
      },
      {
        "nome": "Largo de São Sebastião",
        "testo": "La piazza davanti al Teatro Amazonas, con il pavimento a onde bianche e nere che richiama l'Incontro delle Acque, la chiesa di São Sebastião e il monumento all'apertura dei porti. La sera si riempie di bar e chioschi di tacacá.",
        "come": "A piedi, di fronte al teatro.",
        "quando": "La sera, quando si anima.",
        "tempo": "1 ora",
        "lat": -3.1298,
        "lng": -60.0226,
        "consiglio": "Buon posto per assaggiare il tacacá dai chioschi."
      },
      {
        "nome": "MUSA - Museu da Amazônia",
        "testo": "Un museo all'aperto dentro la riserva forestale Adolpho Ducke, ai margini nord della città, con sentieri nella foresta e una torre di osservazione di 42 metri che sale sopra la chioma degli alberi. È il modo più semplice di vedere la foresta senza uscire da Manaus.",
        "come": "In app o taxi dal centro, circa 40 minuti. Visite guidate, birdwatching e salita alla torre all'alba o al tramonto vanno prenotati.",
        "quando": "All'alba o al tramonto dalla torre.",
        "tempo": "Mezza giornata",
        "lat": -3.0078,
        "lng": -59.9397,
        "consiglio": "Repellente e scarpe chiuse sui sentieri."
      },
      {
        "nome": "Bosque da Ciência (INPA)",
        "testo": "Il parco dell'Istituto nazionale di ricerche dell'Amazzonia, in città, con sentieri nella foresta, vasche con lamantini amazzonici e lontre giganti. Adatto anche ai bambini.",
        "come": "In app o taxi dal centro, circa 20 minuti.",
        "quando": "Di mattina, quando gli animali sono più attivi.",
        "tempo": "2 ore",
        "lat": -3.0973,
        "lng": -59.9864,
        "consiglio": "Chiude in alcuni giorni festivi: controllare prima di andare."
      },
      {
        "nome": "Praia da Ponta Negra",
        "testo": "La spiaggia di sabbia sul Rio Negro, a ovest del centro, con un lungofiume pedonale, ristoranti e anfiteatro. Il tramonto sul fiume è il momento migliore; la spiaggia si allarga o sparisce secondo il livello dell'acqua.",
        "come": "In app o taxi dal centro, circa 30 minuti.",
        "quando": "Tardo pomeriggio e tramonto.",
        "tempo": "2 ore",
        "lat": -3.0625,
        "lng": -60.1038
      },
      {
        "nome": "Museu do Seringal Vila Paraíso",
        "testo": "La ricostruzione di una piantagione di gomma dell'Ottocento su un affluente del Rio Negro, con la casa del padrone, le baracche dei seringueiros e la lavorazione del lattice. Spiega la storia dietro i palazzi del centro.",
        "come": "In barca dal porto di Marina do Davi, nella zona di Ponta Negra, circa mezz'ora.",
        "quando": "Di mattina, con il caldo meno forte.",
        "tempo": "Mezza giornata",
        "lat": -3.0242,
        "lng": -60.1618,
        "consiglio": "Si abbina a una sosta a Ponta Negra al ritorno."
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
      },
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Teatro Amazonas, Largo de São Sebastião e Palacete Provincial",
          "Pomeriggio: Mercado Adolpho Lisboa e porto, tramonto a Ponta Negra",
          "Sera: tacacá al Largo de São Sebastião"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: centro storico come sopra",
          "Giorno 2: Incontro delle Acque in barca la mattina, MUSA e torre al tramonto"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Museu do Seringal in barca e Bosque da Ciência, oppure partenza per il lodge"
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
      },
      {
        "nome": "Ponta Negra",
        "perChi": "chi vuole il fiume e la sera tranquilla",
        "testo": "Quartiere di alberghi e condomini sul Rio Negro, vicino al lungofiume e al porto di Marina do Davi. Lontano dal centro storico, che si raggiunge in app."
      },
      {
        "nome": "Novo Airão",
        "perChi": "chi vuole le Anavilhanas da vicino",
        "testo": "Cittadina sul Rio Negro di fronte all'arcipelago, con pousadas semplici e uscite in barca. Si raggiunge in strada da Manaus passando il ponte sul Rio Negro."
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
    gite: [
      {
        "nome": "Presidente Figueiredo",
        "distanza": "circa 110 km a nord, 2 ore di strada",
        "come": "In auto lungo la BR-174 o con un tour da Manaus.",
        "testo": "La zona delle cascate e delle grotte nella foresta, con pozze dove fare il bagno e sentieri brevi. È la gita in giornata più semplice per vedere acqua e foresta fuori città."
      },
      {
        "nome": "Novo Airão e le Anavilhanas",
        "distanza": "circa 3 ore di strada",
        "come": "In auto o con tour, passando il ponte sul Rio Negro; poi barca nell'arcipelago.",
        "testo": "Il paese di fronte al parco nazionale delle Anavilhanas, con le uscite in barca tra le isole e la foresta allagata e i delfini rosa del Rio Negro vicini alla riva."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Manaus?",
        "risposta": "Uno o due giorni per la città, poi due o tre notti in un lodge nella foresta: in tutto 4-5 giorni. Chi prosegue verso Perù o Colombia in barca ne aggiunge diversi."
      },
      {
        "domanda": "Meglio un lodge sul Rio Negro o sul Solimões?",
        "risposta": "Sul Rio Negro l'acqua scura e acida tiene lontane molte zanzare e si vedono i delfini rosa; il Solimões ha più fauna lungo le rive ma più insetti."
      },
      {
        "domanda": "Quando andare?",
        "risposta": "Tutto l'anno. Con le acque alte, da aprile a luglio, si naviga in canoa dentro la foresta allagata; con le acque basse, da settembre a dicembre, compaiono spiagge e si cammina di più."
      },
      {
        "domanda": "Quanto costa visitare il Teatro Amazonas?",
        "risposta": "La visita guidata costa 20 R$, 10 R$ il ridotto, da martedì a sabato 9:00-17:00 e la domenica fino alle 13:00."
      },
      {
        "domanda": "Come si va da Manaus a Tabatinga?",
        "risposta": "In volo in circa un'ora e mezza, in barca veloce in 30-36 ore (intorno ai 1.000 R$) o in barca lenta, con l'amaca sul ponte, in 6-7 giorni. A Tabatinga si fa il timbro di uscita alla Polícia Federal."
      },
      {
        "domanda": "Serve il vaccino della febbre gialla?",
        "risposta": "È raccomandato per tutta l'Amazzonia, almeno 10 giorni prima della partenza; il certificato può essere chiesto entrando in Colombia o in Perù dalla frontiera amazzonica."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Barche fluviali ormeggiate sul Rio Negro a Manaus',
    immagine: '/images/brasile/manaus-barche-rio-negro.jpg',
  },
]
