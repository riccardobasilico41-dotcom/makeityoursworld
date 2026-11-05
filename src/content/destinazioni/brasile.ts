import type { Destinazione } from '@/lib/types'

// Tappe di "Brasile in 22 giorni" (src/content/viaggi/68-brasile-itinerario.md)
// e delle sue due estensioni (Pantanal, Amazzonia). Le tappe del viaggio fatto
// dall'autore hanno visitataPersonalmente: true; le due estensioni, solo
// proposte nell'articolo, restano false. Nessun miaEsperienza. Nessun nome di
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
    comeArrivare: 'Aeroporto internazionale del Galeão (GIG); voli interni anche dal Santos Dumont, in centro.',
    comeSpostarsi: 'Metro tra zona sud e centro, taxi ufficiali e app; a piedi solo di giorno nelle zone frequentate.',
    periodoMigliore: 'maggio-ottobre, inverno mite e secco; dicembre-marzo caldo e piovoso.',
    costi: 'Cristo Redentor 87 R$ con la van dal centro visitatori Paineiras (132 R$ da Copacabana o Largo do Machado, 134 R$ con il trenino), prezzo unico tutto l\'anno; Pão de Açúcar 205 R$ il biglietto intero (2026).',
    erroriDaEvitare: [
      'Tenere il telefono in mano per strada o appoggiato sul telo in spiaggia',
      'Camminare la sera in zone deserte invece di usare un\'app',
      'Salire al Cristo a mezzogiorno, quando spesso è tra le nuvole e affollato',
    ],
    luoghi: [
      {
        "nome": "Cristo Redentor",
        "testo": "La statua di 30 metri sul Corcovado, a 710 metri sopra la città. Dall'alto si capisce la forma di Rio: le spiagge, la laguna Rodrigo de Freitas e il Pão de Açúcar all'ingresso della baia.",
        "come": "Con il trenino a cremagliera da Cosme Velho o con le van ufficiali da Paineiras. Il biglietto si compra online scegliendo giorno e orario.",
        "quando": "Prima corsa del mattino, prima delle nuvole e della folla. A mezzogiorno spesso la statua è tra le nuvole.",
        "tempo": "3-4 ore tra salita, visita e discesa",
        "costo": "87 R$ con la van dal centro visitatori Paineiras, 132 R$ con la van da Copacabana o Largo do Machado, 134 R$ con il trenino da Cosme Velho; prezzo unico tutto l'anno (2026)",
        "url": "https://paineirascorcovado.com.br/",
        "consiglio": "Vai la mattina e porta una giacca leggera: in cima c'è vento."
      },
      {
        "nome": "Pão de Açúcar",
        "testo": "Il monolite di granito all'ingresso della baia di Guanabara. La funivia sale in due tratte, prima al Morro da Urca e poi in cima, con vista a 360 gradi.",
        "come": "Funivia dalla stazione di Praia Vermelha, nel quartiere di Urca. Chi cammina può salire a piedi fino all'Urca con un sentiero breve e prendere la funivia solo per la seconda tratta.",
        "quando": "Tardo pomeriggio, per il tramonto sulla baia e la città che si accende.",
        "tempo": "2-3 ore",
        "costo": "Circa 205 R$ il biglietto intero (2026); la tariffa promozionale da 160 R$ è solo per i brasiliani",
        "url": "https://www.bondinho.com.br/",
        "consiglio": "Arriva un'ora prima del tramonto per non fare la coda."
      },
      {
        "nome": "Copacabana, Ipanema e l'Arpoador",
        "testo": "Le due spiagge urbane più note del mondo, divise in «postos», le torrette dei bagnini che indicano anche la tribù di ogni tratto. Tra le due c'è la Pedra do Arpoador, dove la gente applaude il tramonto.",
        "come": "In metro (stazioni di Copacabana, Cantagalo e General Osório) o a piedi lungo il lungomare.",
        "quando": "Mattina per la spiaggia; tramonto all'Arpoador.",
        "tempo": "Mezza giornata",
        "consiglio": "Sul telo porta solo ciò che sei disposto a perdere: telefono e portafoglio non vanno lasciati incustoditi."
      },
      {
        "nome": "Santa Teresa e la Escadaria Selarón",
        "testo": "Il quartiere sulla collina con ville dell'Ottocento, atelier e il tram giallo (bondinho). La Escadaria Selarón, scalinata coperta di piastrelle colorate, scende verso Lapa.",
        "come": "In app o taxi fino a Santa Teresa, poi a piedi; la scalinata si scende verso Lapa.",
        "quando": "Di giorno.",
        "tempo": "2-3 ore",
        "consiglio": "Ci si va di giorno e si rientra in app."
      },
      {
        "nome": "Centro storico e Museu do Amanhã",
        "testo": "Il centro ha la Confeitaria Colombo, il Theatro Municipal, la cattedrale a cono e il Real Gabinete Português de Leitura, una delle biblioteche più belle del mondo. Al porto, la piazza Mauá con il Museu do Amanhã e il Boulevard Olímpico pieno di murales.",
        "come": "In metro da Ipanema e Copacabana: 20-30 minuti.",
        "quando": "Nei feriali, di giorno. Molte attrazioni chiudono la domenica e il centro si svuota.",
        "tempo": "Mezza giornata",
        "consiglio": "Il centro si gira di giorno: la sera e nel fine settimana si svuota."
      },
      {
        "nome": "Lapa e il samba",
        "testo": "Il quartiere sotto gli archi dell'acquedotto, con locali di samba dal vivo e strade piene il venerdì e il sabato.",
        "come": "In app andata e ritorno, evitando di camminare di notte.",
        "quando": "Venerdì e sabato sera.",
        "tempo": "Una serata",
        "consiglio": "Con in tasca solo il telefono e i contanti per la serata. Attenzione agli scippi nella folla a fine serata."
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
          "Giorno 2: mattina in spiaggia a Ipanema e Copacabana, pomeriggio al centro e al Museu do Amanhã, sera a Lapa"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Santa Teresa e la Escadaria Selarón, tramonto all'Arpoador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ipanema e Leblon",
        "perChi": "Chi vuole sicurezza e ristoranti",
        "testo": "La zona più curata, con mare e metro vicina. Economico 200-350 R$, medio 450-800 R$, alto oltre 1.200 R$ a notte."
      },
      {
        "nome": "Copacabana",
        "perChi": "Chi cerca l'atmosfera classica e i prezzi più bassi",
        "testo": "Il lungomare è sempre vivo, ma alcune vie interne sono meno sicure di notte."
      },
      {
        "nome": "Santa Teresa",
        "perChi": "Chi cerca atmosfera artistica",
        "testo": "Pousadas in ville storiche, ma sulla collina e con strade ripide. La sera meglio spostarsi in app."
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
      "Furti di telefoni in spiaggia e per strada, scippi da moto, rapine nelle zone deserte la sera: niente gioielli e telefono in mano.",
      "Poco contante, ma una piccola somma da consegnare in caso di rapina, senza opporre resistenza.",
      "Con Uber e 99 controlla targa e nome dell'autista: la Farnesina segnala falsi autisti, soprattutto in aeroporto.",
      "Viaggiare Sicuri sconsiglia qualsiasi visita alle favelas, anche con guide.",
      "Dengue diffusa nelle città: repellente e maniche lunghe al tramonto."
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
    comeArrivare: 'Bus da Rio a Paraty (circa 4 ore e mezza); van e barca da Paraty o Rio per Ilha Grande.',
    comeSpostarsi: 'A piedi e in barca; a Ilha Grande non ci sono auto.',
    periodoMigliore: 'aprile-novembre per meno pioggia e meno folla; dicembre-febbraio pieno e caro.',
    erroriDaEvitare: [
      'Non portare acqua e cibo a Lopes Mendes, dove non ci sono servizi',
      'Lasciare i bagagli grandi senza aver prenotato il transfer per l\'aeroporto il giorno prima',
    ],
    luoghi: [
      {
        "nome": "Centro storico di Paraty",
        "testo": "Città coloniale del Settecento, porto dell'oro di Minas Gerais, patrimonio UNESCO dal 2019. Il centro è chiuso alle auto, con case bianche dalle porte colorate e strade di ciottoli che con l'alta marea a volte si allagano.",
        "come": "Bus da Rio (rodoviária Novo Rio) in circa 4 ore e mezza.",
        "quando": "La sera è tranquilla, con ristoranti e musica dal vivo.",
        "tempo": "Mezza giornata o una sera",
        "consiglio": "Con l'alta marea alcune strade si allagano: scarpe adatte."
      },
      {
        "nome": "La baia di Paraty in escuna",
        "testo": "La baia ha decine di isole e spiagge raggiungibili solo via mare. Le escunas fanno un giro di 4-5 ore con soste per il bagno.",
        "come": "Imbarco al porto di Paraty. Le lanchas private costano di più ma scelgono dove fermarsi.",
        "quando": "Mattina.",
        "tempo": "4-5 ore",
        "consiglio": "Se vuoi evitare la folla, scegli una lancha."
      },
      {
        "nome": "Cascate di Cunha e alambiques",
        "testo": "Sulla strada di Cunha ci sono cascate come la Cachoeira do Tobogã, dove i ragazzi del posto scivolano sulla roccia, e alambicchi di cachaça.",
        "come": "In taxi o con un tour dal centro di Paraty.",
        "quando": "Pomeriggio, dopo il giro in barca.",
        "tempo": "Mezza giornata",
        "consiglio": "Porta scarpe che si possono bagnare."
      },
      {
        "nome": "Trindade",
        "testo": "Villaggio con spiagge selvagge e la piscina naturale del Cachadaço.",
        "come": "30 minuti a sud di Paraty, in bus o taxi.",
        "quando": "Giornata intera, con un giorno in più.",
        "tempo": "Giornata",
        "consiglio": "Aggiungila se hai un giorno extra."
      },
      {
        "nome": "Vila do Abraão (Ilha Grande)",
        "testo": "Il villaggio principale dell'isola senza auto, con pousadas, ristoranti e vita serale. Da qui partono sentieri verso l'Aqueduto e la Cachoeira da Feiticeira.",
        "come": "Da Paraty con van e barca (circa 3 ore), via Angra dos Reis o Conceição de Jacareí.",
        "quando": "Pomeriggio dell'arrivo per un primo sentiero breve.",
        "tempo": "Una notte o due",
        "consiglio": "Prenota il giorno prima il transfer per l'aeroporto di Rio."
      },
      {
        "nome": "Lopes Mendes, Lagoa Azul e Lagoa Verde",
        "testo": "Lopes Mendes è considerata una delle spiagge più belle del Brasile: tre chilometri di sabbia bianca, mare aperto, foresta alle spalle. La Lagoa Azul e la Lagoa Verde si visitano in barca per lo snorkeling.",
        "come": "In barca fino a Pouso e poi 20 minuti a piedi, oppure un sentiero di circa tre ore nella foresta.",
        "quando": "Mattina. Il bagno va fatto con prudenza per onde e correnti.",
        "tempo": "Giornata intera",
        "consiglio": "A Lopes Mendes non ci sono servizi: porta acqua e cibo."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Paraty (centro storico, baia in escuna)",
          "Giorno 2: cascate di Cunha o Trindade, poi sera a Paraty"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Paraty e baia",
          "Giorno 2: transfer a Ilha Grande, Vila do Abraão",
          "Giorno 3: Lopes Mendes"
        ]
      },
      {
        "titolo": "4 giorni",
        "tappe": [
          "Giorni 1-3 come sopra",
          "Giorno 4: Lagoa Azul e Lagoa Verde in barca, poi rientro a Rio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico di Paraty",
        "perChi": "Chi cerca atmosfera coloniale",
        "testo": "Pousadas 300-700 R$. Strade di ciottoli, rumore serale dei locali."
      },
      {
        "nome": "Vila do Abraão",
        "perChi": "Chi visita Ilha Grande",
        "testo": "Pousadas 250-600 R$, vita serale e partenze delle barche. Isola senza auto."
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
      "Niente servizi a Lopes Mendes: porta acqua e cibo.",
      "Mare aperto con onde e correnti: bagno con prudenza.",
      "Prenota il transfer per l'aeroporto il giorno prima.",
      "Strade di ciottoli con l'alta marea: possibili allagamenti."
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
    comeArrivare: 'Volo per Foz do Iguaçu (IGU), spesso via São Paulo; aeroporto argentino a Puerto Iguazú.',
    comeSpostarsi: 'Bus urbani e taxi verso il parco brasiliano; taxi o transfer per passare la frontiera.',
    periodoMigliore: 'tutto l\'anno; più acqua tra dicembre e marzo, meno caldo tra aprile e settembre.',
    costi: 'Parco brasiliano 134 R$ per gli stranieri (dal 19 dicembre 2025); parco argentino 60.000 pesos per gli stranieri non residenti (circa 40 dollari, dal 1° giugno 2026); gommone 450-550 R$.',
    erroriDaEvitare: [
      'Vedere un solo lato',
      'Dimenticare il passaporto per la frontiera argentina',
      'Arrivare tardi alla Garganta del Diablo, che si riempie a metà mattina',
    ],
    luoghi: [
      {
        "nome": "Lato brasiliano delle cascate",
        "testo": "Dà la vista d'insieme: un sentiero di circa un chilometro e mezzo lungo il canyon, fino alla passerella che entra sotto la Garganta do Diabo, dove ci si bagna completamente.",
        "come": "Bus urbani o taxi da Foz do Iguaçu; si entra dal centro visitatori e si sale con il bus del parco.",
        "quando": "Aperto tutti i giorni: 9-16 dal lunedì al venerdì, 8.30-16 il sabato e la domenica. Arriva all'apertura.",
        "tempo": "2-3 ore",
        "costo": "134 R$ per gli stranieri, 121 R$ per brasiliani e residenti Mercosur (tariffe in vigore dal 19 dicembre 2025, aggiornate ogni anno). Solo online, con giorno e orario",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "consiglio": "Mantella o sacchetto impermeabile per telefono e documenti."
      },
      {
        "nome": "Lato argentino delle cascate",
        "testo": "Si cammina dentro le cascate: tre circuiti di passerelle (Superior, Inferior e la Garganta del Diablo, raggiunta con un trenino nella foresta) arrivano sopra il salto più grande, dove la nebbia d'acqua sale per decine di metri.",
        "come": "Il confine si passa in taxi, in bus o con un transfer, mostrando il passaporto e facendo i timbri di uscita e di entrata.",
        "quando": "Arriva all'apertura: la passerella della Garganta si riempie entro metà mattina.",
        "tempo": "Giornata intera",
        "costo": "60.000 pesos argentini per gli stranieri non residenti (circa 40 dollari) dal 1° giugno 2026, con tariffa ridotta il secondo giorno consecutivo",
        "url": "https://www.iguazuargentina.com/",
        "consiglio": "Porta il passaporto e pesos o carta."
      },
      {
        "nome": "Parque das Aves",
        "testo": "Un parco con tucani, are e uccelli della Mata Atlântica in grandi voliere, di fronte all'ingresso delle cascate brasiliane.",
        "come": "Proprio di fronte all'ingresso del lato brasiliano.",
        "quando": "Dopo le cascate, nel pomeriggio.",
        "tempo": "1-2 ore",
        "consiglio": "Si combina bene con la mattina alle cascate."
      },
      {
        "nome": "Macuco Safari",
        "testo": "Il giro in gommone fin sotto i salti.",
        "come": "Prenotabile sul posto o in anticipo; parte dal lato brasiliano.",
        "quando": "Mattina o pomeriggio.",
        "tempo": "1-2 ore",
        "costo": "Indicativamente 450-550 R$",
        "consiglio": "Ti bagni completamente: vestiti di ricambio e protezione per il telefono."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: lato brasiliano alle cascate",
          "Pomeriggio: Parque das Aves"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: lato brasiliano e Parque das Aves, eventuale Macuco Safari",
          "Giorno 2: lato argentino, partendo all'apertura, con la Garganta del Diablo per prima"
        ]
      }
    ],
    zone: [
      {
        "nome": "Foz do Iguaçu",
        "perChi": "Chi ha voli e vuole comodità",
        "testo": "Fascia media 300-600 R$ a notte, collegata all'aeroporto. Più comoda per i voli."
      },
      {
        "nome": "Puerto Iguazú (Argentina)",
        "perChi": "Chi vuole stare più vicino al lato argentino",
        "testo": "Cittadina più piccola, con meno scelta e voli meno comodi."
      },
      {
        "nome": "Hotel dentro il parco brasiliano",
        "perChi": "Chi cerca la vista dalla camera",
        "testo": "L'unico hotel dentro il parco è in fascia alta."
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
      "Febbre gialla: vaccinazione raccomandata per l'ovest del Paraná."
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
    comeArrivare: 'Aeroporto internazionale di Salvador, collegato a tutte le grandi città brasiliane.',
    comeSpostarsi: 'App e taxi; a piedi nel Pelourinho di giorno.',
    periodoMigliore: 'settembre-marzo; piogge più forti tra aprile e giugno.',
    erroriDaEvitare: [
      'Allontanarsi dalle vie principali del Pelourinho la sera',
      'Accettare i nastri del Bonfim «regalati» per strada',
    ],
    luoghi: [
      {
        "nome": "Pelourinho e Igreja de São Francisco",
        "testo": "Il centro storico, patrimonio UNESCO: piazze in salita con case coloniali color pastello e chiese barocche. La Igreja de São Francisco è rivestita d'oro all'interno.",
        "come": "A piedi dal tuo alloggio nel centro o in app dai quartieri di mare.",
        "quando": "Di giorno. Il martedì sera nel Pelourinho si fa festa, con concerti e i tamburi dell'Olodum.",
        "tempo": "Mezza giornata",
        "consiglio": "La sera le strade laterali si svuotano presto: resta nelle vie principali e rientra in app."
      },
      {
        "nome": "Elevador Lacerda e Mercado Modelo",
        "testo": "L'ascensore pubblico del 1873 collega la città alta alla città bassa. In basso c'è il Mercado Modelo, mercato di artigianato.",
        "come": "L'ascensore parte dalla Praça Tomé de Souza.",
        "quando": "Mattina.",
        "tempo": "1-2 ore",
        "consiglio": "Il mercato è turistico: contratta sui prezzi."
      },
      {
        "nome": "Igreja do Senhor do Bonfim",
        "testo": "La chiesa dei nastri colorati, legati al cancello e al polso come voto.",
        "come": "In app o taxi dal centro.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "consiglio": "Non accettare i nastri «regalati» per strada: poi chiedono soldi."
      },
      {
        "nome": "Rio Vermelho e l'acarajé",
        "testo": "Il quartiere della vita serale, dove le baianas friggono l'acarajé in olio di palma per strada.",
        "come": "In app dal centro o da Barra.",
        "quando": "Sera.",
        "tempo": "Una serata",
        "consiglio": "Mangia l'acarajé dalle baianas, non nei locali per turisti."
      },
      {
        "nome": "Farol da Barra",
        "testo": "Il faro sulla punta della città, con il tramonto più bello sulla baia.",
        "come": "In app o bus da Barra.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "consiglio": "Il primo tramonto a Salvador si guarda da qui."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Pelourinho e Igreja de São Francisco",
          "Elevador Lacerda e Mercado Modelo",
          "Tramonto al Farol da Barra"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: programma da 1 giorno",
          "Giorno 2: Igreja do Senhor do Bonfim, Solar do Unhão, sera a Rio Vermelho"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: roda di capoeira in una scuola del Pelourinho (chiedendo prima) o gita in barca nella Baía de Todos os Santos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pelourinho e Santo Antônio Além do Carmo",
        "perChi": "Chi vuole il centro storico",
        "testo": "Pousadas 250-600 R$. Di giorno sorvegliato, di sera si svuota."
      },
      {
        "nome": "Barra e Rio Vermelho",
        "perChi": "Chi cerca il mare e la vita serale",
        "testo": "Più sicure la sera, vicino alle spiagge e ai ristoranti."
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
      "Nastri del Bonfim «regalati» per strada: poi chiedono soldi.",
      "Piccola criminalità: furti di telefoni e scippi.",
      "Usa app invece di camminare di notte."
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
    luoghi: [
      {
        "nome": "Morro do Pai Inácio",
        "testo": "La mesa che domina la valle. Il tramonto da qui è il classico della Chapada.",
        "come": "Con tour o auto; 20-30 minuti di salita ripida dal parcheggio.",
        "quando": "Tramonto.",
        "tempo": "2 ore",
        "consiglio": "Porta una torcia per la discesa."
      },
      {
        "nome": "Cachoeira da Fumaça",
        "testo": "Una delle cascate più alte del Brasile, circa 340 metri. Nella stagione secca l'acqua diventa fumo prima di toccare terra, da cui il nome.",
        "come": "Dalla valle del Capão con un sentiero di 6 km andata e ritorno e una salita iniziale ripida.",
        "quando": "Stagione secca, aprile-settembre.",
        "tempo": "Mezza giornata",
        "consiglio": "Non sottovalutare la salita iniziale."
      },
      {
        "nome": "Poço Azul e Poço Encantado",
        "testo": "Grotte allagate dove la luce del sole entra e accende l'acqua di blu.",
        "come": "Con tour e guida, in auto.",
        "quando": "Il Poço Encantado si illumina nelle ore centrali da aprile a settembre.",
        "tempo": "Mezza giornata",
        "costo": "Tour giornalieri 150-300 R$ più guida e ingressi",
        "consiglio": "Controlla gli orari della luce: fuori stagione il blu non si vede."
      },
      {
        "nome": "Lapa Doce e Pratinha",
        "testo": "Grotte con acqua turchese dove si fa snorkeling. Il Poço do Diabo è una cascata con una pozza scura.",
        "come": "Giro classico con guida e auto.",
        "quando": "Giornata intera.",
        "tempo": "Giornata",
        "consiglio": "Nelle grotte la guida è obbligatoria."
      },
      {
        "nome": "Vale do Pati",
        "testo": "Trekking di 3-5 giorni tra valli remote dormendo nelle case dei contadini.",
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
        "testo": "Pousadas 200-500 R$. Piccolo paese con agenzie e ristoranti."
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
    luoghi: [
      {
        "nome": "Circuito della Lagoa Azul",
        "testo": "Le prime lagune: acqua piovana trasparente e tiepida, raccolta tra dune di sabbia bianca alte fino a 40 metri. Si cammina scalzi e si fa il bagno.",
        "come": "In jardineira, il fuoristrada con panche sul cassone che attraversa il fiume su una zattera e prende il sentiero di sabbia.",
        "quando": "Tramonto, quando la sabbia cambia colore. Giugno-settembre, con il massimo d'acqua in luglio-agosto.",
        "tempo": "Mezza giornata",
        "costo": "Jardineira 100-150 R$ a persona per circuito, guida inclusa. Ingresso al parco gratuito (2026)",
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
        "testo": "Unica capitale brasiliana fondata dai francesi (1612), con un centro storico di case coperte di azulejos portoghesi, patrimonio UNESCO.",
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
          "Giorno 1: van da São Luís a Barreirinhas (circa 4 ore), circuito della Lagoa Azul al tramonto",
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
        "testo": "Pousadas 250-600 R$. Porta d'ingresso del parco."
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
      "Fuori stagione le lagune sono vuote.",
      "Non entrare nelle ore centrali senza acqua e cappello.",
      "Nel parco si circola solo in 4x4 con autisti autorizzati.",
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
        "testo": "Strada sterrata di 147 km con oltre cento ponti di legno che finisce a Porto Jofre. Si percorre in un giorno intero, con soste per gli animali.",
        "come": "Volo per Cuiabá, circa 2 ore fino a Poconé e poi la strada. Auto alta o 4x4, oppure pacchetti con transfer.",
        "quando": "Luglio-ottobre, meglio agosto-settembre. Da novembre ad aprile le piogge allagano la strada.",
        "tempo": "Un giorno",
        "consiglio": "Non percorrerla di notte."
      },
      {
        "nome": "Porto Jofre e i giaguari",
        "testo": "Sui fiumi Cuiabá, Três Irmãos e Piquiri nella stagione secca i giaguari si vedono sulle rive con una regolarità senza confronti.",
        "come": "Uscite in barca con piloteiro all'alba e nel pomeriggio.",
        "quando": "Luglio-ottobre.",
        "tempo": "1-2 giorni di uscite",
        "costo": "Barca per la giornata intera 1.400-1.600 R$ per 4-6 persone, circa 1.000 R$ per mezza giornata (indicazioni di viaggiatori, 2026)",
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
        "consiglio": "Fuso orario UTC-4, un'ora indietro rispetto a Rio."
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
        "testo": "Fascia alta, con pacchetti completi 9.000-13.000 R$ a persona per 3-4 notti."
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
      "Stagione delle piogge (novembre-aprile): Transpantaneira allagata e barche incerte.",
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
        "testo": "Il teatro dell'opera del boom della gomma e il mercato sul porto, ispirato alle Halles di Parigi. Sono le due tappe urbane di Manaus.",
        "come": "A piedi nel centro storico.",
        "quando": "Mattina.",
        "tempo": "Mezza giornata",
        "consiglio": "Il mercato è un buon posto per assaggiare pesci amazzonici."
      },
      {
        "nome": "L'Incontro delle Acque",
        "testo": "Il punto dove il Rio Negro, scuro, si incontra con il Solimões, color caffelatte, e le due acque corrono affiancate senza mescolarsi per chilometri.",
        "come": "In barca da Manaus, spesso incluso nei tour.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "consiglio": "Si vede meglio con un tour in barca che dal porto."
      },
      {
        "nome": "Arcipelago delle Anavilhanas",
        "testo": "Uno dei più grandi arcipelaghi fluviali del mondo, sul Rio Negro, con foresta allagata (igapó).",
        "come": "Con tour o lodge.",
        "quando": "Acque alte aprile-luglio per navigare nella foresta allagata.",
        "tempo": "1-2 giorni",
        "consiglio": "Controlla se il tour include la foresta allagata."
      },
      {
        "nome": "Lodge nella foresta",
        "testo": "Due o tre notti in un lodge con canoa nell'igapó, camminate guidate e osservazione notturna dei caimani. Delfini rosa nel fiume.",
        "come": "Transfer dei lodge in barca da Manaus.",
        "quando": "Tutto l'anno; acque basse settembre-dicembre.",
        "tempo": "2-3 notti",
        "costo": "Lodge con pensione completa 800-2.500 R$ a persona a notte",
        "consiglio": "Per un'informazione sulle agenzie, vedi la pagina Amazzonia del sito."
      },
      {
        "nome": "Verso Tabatinga e la triplice frontiera",
        "testo": "Da Manaus si può risalire il Rio delle Amazzoni fino a Tabatinga, al confine con Colombia e Perù, e proseguire per Leticia o Iquitos.",
        "come": "Volo (circa 1h30), barca veloce (30-36 ore) o lenta (6-7 giorni).",
        "quando": "Tutto l'anno; gli orari delle barche cambiano spesso.",
        "tempo": "1-7 giorni secondo il mezzo",
        "costo": "Barca veloce Manaus-Tabatinga circa 1.000 R$ (2026)",
        "consiglio": "Fai i timbri di uscita alla Polícia Federal di Tabatinga."
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
      "Timbri di uscita alla Polícia Federal di Tabatinga: dimenticarli complica l'ingresso in Colombia e Perù.",
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
