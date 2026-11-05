import type { Destinazione } from '@/lib/types'

// Paese visitato di persona (seconda parte dell'articolo centro-america-itinerario,
// raggiunta in volo dal Belize). I campi miaEsperienza sono in prima persona e
// tengono solo i fatti raccontati nell'articolo. Nessun nome di hotel,
// ristorante o operatore.

export const destinazioniPanama: Destinazione[] = [
  {
    slug: 'panama-city',
    paeseSlug: 'panama',
    ordine: 1,
    nome: 'Panama City',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una capitale con due facce opposte a pochi chilometri di distanza: lo skyline di grattacieli sulla baia e il Casco Viejo, il centro storico coloniale Patrimonio UNESCO, con le sue piazze e i suoi rooftop.',
    percheAndarci:
      'È l\'hub aereo di tutta l\'America Latina e la porta d\'ingresso obbligata del paese, e a differenza di molte capitali della regione merita un paio di giorni.',
    cosaVedere: [
      'Il Casco Viejo, con Plaza de la Independencia e le chiese coloniali',
      'Le chiuse di Miraflores sul Canale di Panama, con il centro visitatori e la terrazza panoramica',
      'Le rovine di Panamá Viejo, la città originale distrutta dai pirati nel 1671',
      'Il Biomuseo firmato Frank Gehry, sulla Calzada de Amador',
      'Il Parque Natural Metropolitano, foresta tropicale dentro i confini della città',
    ],
    cosaFare: [
      'Visita alle chiuse del canale, meglio negli orari di transito delle navi (c\'è una scheda esperienza dedicata)',
      'Aperitivo su uno dei rooftop del Casco Viejo al tramonto',
      'Gita in giornata alle isole Perlas o a Isla Taboga in traghetto',
      'Escursione a Portobelo e alla costa caraibica, a circa 2 ore dalla capitale',
    ],
    doveDormire: 'Casco Viejo per l\'atmosfera e la vita serale; zona Marbella e Obarrio per hotel più moderni e prezzi spesso più bassi.',
    doveMangiare:
      'Il posto da non saltare è il Mercado de Mariscos sulla baia: al piano di sotto si compra il pesce, al piano di sopra lo cucinano, e un ceviche in bicchiere di plastica costa un paio di dollari. Il Casco Viejo ha i rooftop e i ristoranti d\'autore, con prezzi da capitale internazionale; le fonde di quartiere servono il sancocho, la zuppa di pollo con la ñame che è il piatto nazionale, e il ropa vieja. Come cibo di strada, da provare le carimañolas e le empanadas fritte a colazione.',
    comeArrivare: 'Volo internazionale su Panama City-Tocumen (PTY), uno degli hub principali delle Americhe; dall\'aeroporto al centro 30-45 minuti in taxi o Uber.',
    comeSpostarsi: 'Metro (due linee, economica e funzionale), Uber diffuso e conveniente, taxi da contrattare sempre prima di salire.',
    periodoMigliore: 'metà dicembre-metà aprile, stagione secca; nel resto dell\'anno piove soprattutto nel pomeriggio',
    costi: 'si paga in dollari USA (il balboa esiste solo in monete); ingresso a Miraflores circa 20 USD per gli stranieri',
    erroriDaEvitare: [
      'Andare alle chiuse senza controllare gli orari di transito: senza navi in passaggio la visita perde gran parte del senso',
      'Girare di notte fuori dalle zone turistiche del Casco Viejo, che confina con quartieri da evitare',
    ],
    miaEsperienza:
      'Dall\'aeroporto siamo andati dritti al Casco Viejo, e il primo impatto è stato uno skyline di grattacieli che non somigliava a niente di quello visto nelle tre settimane prima. Il giorno dopo, al mattino, le chiuse di Miraflores: gli orari di transito delle navi vanno controllati prima, perché senza una nave in manovra si guarda una vasca di cemento vuota, mentre una portacontainer che entra con pochi centimetri di margine per lato vale da sola la deviazione. Nel pomeriggio le rovine di Panamá Viejo e una passeggiata nel Casco Viejo, dove la cosa più interessante da guardare è il contrasto fra palazzi ristrutturati e facciate ancora puntellate. Abbiamo pranzato al Mercado de Mariscos con un ceviche in bicchiere di plastica da un paio di dollari. Fuori dalle zone turistiche del Casco, dopo il tramonto, meglio non girare a piedi.',
      "luoghi": [
        {
          "nome": "Chiuse di Miraflores",
          "testo": "Le chiuse del Canale di Panama dove le navi vengono sollevate e abbassate fra i due livelli, con centro visitatori, museo e terrazza panoramica.",
          "come": "Taxi da app o transfer dell'hotel da Panama City. Biglietto d'ingresso al centro visitatori.",
          "quando": "Mattina: gli orari di transito delle navi vanno controllati prima, perché senza una nave in manovra si guarda una vasca vuota.",
          "tempo": "2-3 ore",
          "costo": "17,22 USD per i non residenti dai 13 anni (tariffa ufficiale ACP in vigore nel 2026).",
          "url": "https://pancanal.com/",
          "consiglio": "Una portacontainer che entra con pochi centimetri di margine per lato vale da sola la deviazione."
        },
        {
          "nome": "Casco Viejo",
          "testo": "Il centro storico coloniale, patrimonio UNESCO: Plaza de la Independencia, chiese, palazzi restaurati e facciate ancora puntellate, fra caffè e rooftop.",
          "come": "A piedi dal taxi, il quartiere si gira in un giorno.",
          "quando": "Mattina e tramonto; di sera restare nelle strade turistiche.",
          "tempo": "Mezza giornata",
          "consiglio": "Il contrasto fra palazzi restaurati e facciate puntellate è la cosa più interessante da guardare. Fuori dalle zone turistiche, dopo il tramonto, meglio non girare a piedi."
        },
        {
          "nome": "Panamá Viejo",
          "testo": "Le rovine della città originale, fondata nel 1519 e distrutta nel 1671 durante l'assalto del corsaro Henry Morgan, da un incendio di cui non si sa con certezza chi fu l'autore. Con il Casco Viejo è patrimonio UNESCO dal 1997.",
          "come": "Taxi da app dal centro.",
          "quando": "Da martedì a domenica, 8.30-17.30 (biglietteria fino alle 16.30); chiuso il lunedì. Mattina, prima del caldo.",
          "tempo": "1-2 ore",
          "url": "https://www.patronatopanamaviejo.org/"
        },
        {
          "nome": "Mercado de Mariscos",
          "testo": "Il mercato del pesce vicino al Casco Viejo, con banchi di ceviche serviti in bicchiere.",
          "come": "A piedi dal Casco Viejo.",
          "quando": "Pranzo.",
          "tempo": "1 ora",
          "consiglio": "Il ceviche si mangia in bicchiere di plastica, al banco, per pochi dollari."
        },
        {
          "nome": "Biomuseo",
          "testo": "Il museo progettato da Frank Gehry, a Calzada de Amador, sul sorgere dell'istmo di Panama e sulla biodiversità. L'edificio a tettoie colorate si vede da lontano; dentro le sale raccontano come l'istmo, unendo due continenti, ha cambiato animali e correnti.",
          "come": "Taxi o Uber.",
          "quando": "Da martedì a venerdì 9-15, sabato e domenica 10-15; chiuso il lunedì.",
          "tempo": "2 ore",
          "costo": "20 USD per gli adulti non residenti (2026).",
          "url": "https://biomuseo.org/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: chiuse di Miraflores con una nave in transito",
            "Pranzo al Mercado de Mariscos",
            "Pomeriggio: Casco Viejo",
            "Tramonto sul mare dalla Cinta Costera"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Miraflores, Casco Viejo",
            "Giorno 2: Panamá Viejo, Biomuseo, Calzada de Amador"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Casco Viejo",
          "perChi": "atmosfera e locali",
          "testo": "Hotel e ristoranti in palazzi restaurati, a piedi. Più cari, rumorosi di notte nel weekend."
        },
        {
          "nome": "Zona di Bella Vista e Obarrio",
          "perChi": "servizi e prezzi",
          "testo": "Quartiere di grattacieli, alberghi e ristoranti, ben collegato in taxi."
        }
      ],
      "sapori": [
        {
          "nome": "Ceviche",
          "testo": "Pesce crudo marinato nel lime, al Mercado de Mariscos."
        },
        {
          "nome": "Sancocho",
          "testo": "Zuppa di pollo con yuca e coriandolo, il piatto nazionale."
        },
        {
          "nome": "Arroz con pollo",
          "testo": "Riso al pollo con verdure, nelle fondas."
        },
        {
          "nome": "Patacones",
          "testo": "Platano verde fritto e schiacciato, da accompagnare ai piatti."
        }
      ],
      "attenzioni": [
        "Il Foreign Office britannico segnala scippi anche nel Casco Viejo, a Panamá Viejo e sulla Avenida Central: dopo il tramonto usare taxi da app e non camminare da soli in strade poco illuminate.",
        "Prima di andare a Miraflores controllare gli orari dei transiti delle navi.",
        "I taxi sono spesso in cattive condizioni e senza tassametro: meglio le app o il trasporto organizzato dall'hotel."
      ],
    esperienzeSlugs: ['chiuse-miraflores'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Lo skyline dei grattacieli di Panama City visto da una terrazza del Casco Viejo',
    immagine: '/images/panama/panama-city.jpg',
  },
  {
    slug: 'san-blas',
    paeseSlug: 'panama',
    ordine: 2,
    nome: 'San Blas (Guna Yala)',
    tipologia: ['mare', 'isole', 'cultura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un arcipelago di oltre 300 isole caraibiche amministrato in autonomia dal popolo Guna: palme, sabbia bianca, acqua bassa turchese e sistemazioni essenziali per scelta, spesso senza elettricità continua.',
    percheAndarci:
      'È il mare più famoso di Panama e uno dei pochi territori indigeni autogovernati del continente: le regole d\'accesso, i trasporti e le strutture li gestisce la comunità Guna, senza catene turistiche.',
    cosaVedere: [
      'Le isole più note per le gite in giornata: Isla Perro (con un relitto da snorkeling), Isla Aguja, Cayos Holandeses',
      'Le piscine naturali di acqua bassa in mezzo al mare',
      'I villaggi Guna, dove si acquistano le mole, i tessuti tradizionali cuciti a mano',
    ],
    cosaFare: [
      'Notte in cabaña su un\'isola, con pasti inclusi e giri in barca tra gli isolotti',
      'Snorkeling sui relitti e sulle secche coralline',
      'Traversata a vela verso la Colombia (3-5 giorni), alternativa classica al Darién Gap',
    ],
    doveDormire: 'Solo cabañas gestite dalle famiglie Guna, da quelle molto spartane a qualche opzione con bagno privato: si prenota a pacchetto, con trasporto e pasti inclusi.',
    doveMangiare: 'I pasti sono quasi sempre inclusi nel pacchetto: pesce, aragosta in stagione, riso e platano.',
    comeArrivare:
      'Trasferimento in 4x4 da Panama City fino al porto di Cartí (circa 2h30-3h su strada di montagna molto ripida), poi barca verso le isole. Partenze molto presto al mattino.',
    comeSpostarsi: 'Solo in barca, con i trasferimenti organizzati dalla struttura che ospita.',
    periodoMigliore: 'stagione secca (dicembre-aprile) per mare più calmo; la traversata in barca può essere impegnativa con vento',
    costi:
      'ingresso al territorio Guna e tasse per le isole da pagare in contanti; transfer 4x4 più barca 40-60 USD a tratta; pacchetti con cabaña e pasti 60-150 USD a persona per notte',
    erroriDaEvitare: [
      'Arrivare senza contanti: sulle isole non ci sono bancomat né pagamenti con carta',
      'Aspettarsi comfort da resort: elettricità limitata, acqua dolce razionata e wifi quasi assente fanno parte dell\'esperienza',
      'Prenotare con intermediari non autorizzati: le strutture e i trasporti sono gestiti dalla comunità Guna, che regola gli accessi',
    ],
    miaEsperienza:
      'Arrivarci è stato il trasferimento più impegnativo della seconda parte: sveglia verso le cinque, quasi tre ore di 4x4 su una strada di montagna dalle pendenze ripide fino al porto di Cartí, poi la barca verso le isole. Conviene sapere in cosa si entra. Guna Yala è un territorio autogovernato: il turismo lo gestiscono i Guna e la tassa d\'ingresso si paga a loro, solo in contanti, perché sulle isole non ci sono bancomat né carte. La nostra cabaña era essenziale per scelta, gestita da una famiglia Guna: luce a orario, acqua dolce razionata, wifi quasi assente, pasti inclusi. Il giorno pieno l\'abbiamo passato in barca fra Isla Perro, col relitto da fare in snorkeling, Isla Aguja, i Cayos Holandeses e le piscine naturali in mezzo al mare. Le regole sono della comunità: si chiede il permesso prima di fotografare persone e case, dalle isole non si porta via niente e le immersioni con bombole sono vietate.',
      "luoghi": [
        {
          "nome": "Isla Perro e il relitto",
          "testo": "Isoletta con un relitto di nave da vedere facendo snorkeling.",
          "come": "In barca dalle isole dove si dorme, in un giro di giornata.",
          "quando": "Mattina, con il mare calmo.",
          "tempo": "1-2 ore",
          "consiglio": "Si fa snorkeling senza bombole: le immersioni con le bombole sono vietate a Guna Yala per proteggere la barriera."
        },
        {
          "nome": "Isla Aguja e Cayos Holandeses",
          "testo": "Isolotti con palme e sabbia bianca, con acqua turchese e fondali bassi.",
          "come": "Giro in barca fra le isole, incluso nel pacchetto.",
          "quando": "Mattina, con luce limpida.",
          "tempo": "Giornata"
        },
        {
          "nome": "Piscine naturali in mezzo al mare",
          "testo": "Banchi di sabbia con acqua bassa, circondati dal mare aperto.",
          "come": "In barca dalla cabaña.",
          "quando": "Mattina.",
          "tempo": "Breve sosta"
        },
        {
          "nome": "Villaggi Guna e mole",
          "testo": "I villaggi Guna, dove si comprano le mole, i tessuti tradizionali cuciti a mano dalle donne. Guna Yala è una comarca autonoma, governata dal Congresso Generale Guna e dai sahila di ogni comunità.",
          "come": "Visita da una delle isole abitate, con il permesso dei residenti.",
          "quando": "Giorno.",
          "tempo": "1-2 ore",
          "consiglio": "Si chiede il permesso prima di fotografare persone e case, e dalle isole non si porta via niente."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Partenza prima dell'alba da Panama City in 4x4 per Cartí",
            "Barca verso le isole, snorkeling a Isla Perro",
            "Rientro verso sera, spesso troppo stretto per un solo giorno"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: 4x4 fino a Cartí, barca, notte in cabaña",
            "Giorno 2: giro fra Isla Perro, Isla Aguja, Cayos Holandeses, piscine naturali, poi rientro"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Cabaña su un'isola Guna",
          "perChi": "esperienza autentica",
          "testo": "Essenziale per scelta: luce a orario, acqua dolce razionata, wifi quasi assente, pasti inclusi, gestita da una famiglia Guna."
        },
        {
          "nome": "Alloggio sul continente a Cartí",
          "perChi": "chi vuole arrivare all'alba",
          "testo": "Meno suggestivo, ma evita la partenza notturna."
        }
      ],
      "sapori": [
        {
          "nome": "Pesce e aragosta alla griglia",
          "testo": "Il pescato dei Guna, spesso incluso nei pasti."
        },
        {
          "nome": "Riso e fagioli",
          "testo": "Base di ogni pasto, con platano fritto."
        },
        {
          "nome": "Patacones",
          "testo": "Platano fritto, come accompagnamento."
        },
        {
          "nome": "Cocco",
          "testo": "Acqua di cocco fresca e pezzi di polpa, raccolti sull'isola."
        }
      ],
      "attenzioni": [
        "Per entrare a Guna Yala si paga una tassa alla comarca, oltre al porto: portare contanti, perché sulle isole non ci sono bancomat.",
        "Il viaggio da Panama City comincia prima dell'alba, con ore di 4x4 su una strada di montagna ripida: chi soffre l'auto prenda un rimedio.",
        "Regole della comunità: chiedere il permesso prima di fotografare persone e case, niente prelievi dalle isole, niente bombole."
      ],
    esperienzeSlugs: ['notte-isola-san-blas'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Isolotto di sabbia bianca con palme e capanne nell\'arcipelago di San Blas, Panama',
    immagine: '/images/panama/san-blas.jpg',
  },
  {
    slug: 'bocas-del-toro',
    paeseSlug: 'panama',
    ordine: 3,
    nome: 'Bocas del Toro',
    tipologia: ['mare', 'isole', 'nightlife'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Arcipelago caraibico al confine con la Costa Rica, con case su palafitte, surf, snorkeling e la vita notturna più vivace del paese.',
    percheAndarci:
      'È il posto dove Panama diventa caraibica anche nell\'atmosfera: più vivace e meno essenziale di San Blas, con isole molto diverse tra loro a pochi minuti di barca.',
    cosaVedere: [
      'Isla Colón, con Bocas Town e i suoi edifici in legno colorati',
      'Starfish Beach, la spiaggia delle stelle marine',
      'Isla Bastimentos e il parco nazionale marino, con Red Frog Beach',
      'Cayo Zapatilla, spesso la tappa più bella dei tour in barca',
      'Cayo Coral, per lo snorkeling in acqua bassa',
    ],
    cosaFare: [
      'Tour in barca di giornata tra gli isolotti, con soste snorkeling e avvistamento delfini',
      'Lezione di surf a Playa Bluff o Paunch',
      'Giro in kayak tra le mangrovie',
      'Serata a Bocas Town, tra bar sull\'acqua e feste sulle isole',
    ],
    doveDormire: 'Bocas Town su Isla Colón per servizi e vita notturna; Bastimentos o Carenero per la tranquillità e gli alloggi sull\'acqua.',
    doveMangiare:
      'Bocas è il posto di Panama dove si mangia caraibico: pesce e pollo in salsa di cocco, rice and beans cucinati col latte di cocco invece che con l\'acqua, patacones ovunque. Il patrimonio afro-caraibico dell\'arcipelago si sente in cucina più che altrove nel paese. A Bocas Town i ristoranti sull\'acqua costano il doppio dei chioschi a due strade di distanza, dove si mangia lo stesso pesce; il mercato del mattino è l\'opzione più economica. La birra locale ghiacciata è quasi la bevanda ufficiale dell\'isola.',
    comeArrivare:
      'Volo interno da Panama City a Bocas del Toro (circa 1 ora) oppure bus notturno fino ad Almirante e water taxi (circa 30 minuti). Dalla Costa Rica si arriva via terra dal Caribe: da Puerto Viejo o Cahuita bus fino a Sixaola, si esce dal Costa Rica (tassa di uscita via terra di 8 USD, online sul sito del Banco de Costa Rica o ai chioschi BCR), si attraversa a piedi il ponte binazionale sul fiume Sixaola, aperto nel 2021, e si entra a Panama a Guabito. Poi bus o taxi collettivo fino a Changuinola e Almirante, e water taxi per Bocas Town (circa 30 minuti). Ci sono anche shuttle porta a porta da Puerto Viejo.',
    comeSpostarsi: 'Water taxi tra le isole (pochi dollari a tratta), biciclette e taxi su Isla Colón.',
    periodoMigliore:
      'ha un microclima diverso dal resto del paese: settembre-ottobre e febbraio-marzo sono spesso i periodi più soleggiati, mentre qui la «stagione secca» panamense non sempre coincide',
    costi: 'tour in barca di giornata 25-40 USD a persona più le tasse del parco nazionale; volo interno 100-150 USD a tratta',
    erroriDaEvitare: [
      'Dare per scontata la stagione secca nazionale: qui il meteo segue un ciclo diverso dal resto di Panama',
      'Programmare il tour in barca senza tenere conto del mare mosso, che può cancellare le uscite verso i cayos più esterni',
    ],
    miaEsperienza:
      'Da Boquete siamo arrivati a Bocas via terra fino ad Almirante e poi in water taxi, ed è stato l\'opposto di San Blas: case su palafitte, un\'atmosfera molto più sociale e rumorosa, ostelli e gente che quasi sempre resta più del previsto. Il giorno dopo abbiamo fatto il giro in barca fra gli isolotti: Cayo Zapatilla, spesso il punto più bello di tutto il giro, e Starfish Beach, che mantiene la promessa del nome con le stelle marine in acqua alta poco più di un metro, più una sosta di snorkeling a Cayo Coral. Le uscite verso i cayos più esterni saltano col mare mosso, ed è un\'eventualità da mettere in conto. Due avvertenze pratiche: qui il meteo segue un microclima proprio e non la stagione secca del resto di Panama, e le sabbie sono infestate dai chitre, moscerini che pungono senza farsi sentire e lasciano segni per giorni. La sera, a Bocas Town, musica dal vivo e feste che spesso si spostano in barca sulle isole vicine.',
      "luoghi": [
        {
          "nome": "Isla Colón e Bocas Town",
          "testo": "La città principale dell'arcipelago, con case di legno colorate su palafitte, ostelli e vita serale.",
          "come": "Arrivo in water taxi da Almirante o in aereo da Panama City.",
          "quando": "Sera, per musica dal vivo e feste.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Cayo Zapatilla",
          "testo": "Gli isolotti disabitati di Cayos Zapatilla, dentro il parco nazionale marino di Isla Bastimentos, istituito nel 1988, con sabbia bianca e foresta. Spesso la tappa più bella dei tour in barca.",
          "come": "Con tour in barca da Bocas Town; ingresso al parco a parte.",
          "quando": "Mattina, con mare calmo.",
          "tempo": "Mezza giornata",
          "consiglio": "Le uscite verso i cayos più esterni saltano col mare mosso: metterlo in conto."
        },
        {
          "nome": "Starfish Beach",
          "testo": "La spiaggia delle stelle marine: si vedono in acqua bassa vicino alla riva, e la promessa del nome è mantenuta.",
          "come": "Tappa nei tour in barca o in taxi acqueo.",
          "quando": "Mattina.",
          "tempo": "Breve sosta",
          "consiglio": "Non toccare né togliere le stelle marine dall'acqua."
        },
        {
          "nome": "Cayo Coral e Isla Bastimentos",
          "testo": "Snorkeling in acqua bassa a Cayo Coral. Isla Bastimentos ospita il parco nazionale marino e Red Frog Beach, raggiungibile con il water taxi.",
          "come": "Tour in barca da Bocas Town.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: giro in barca a Cayo Zapatilla, Starfish Beach, Cayo Coral",
            "Pomeriggio: riposo a Bocas Town",
            "Sera: musica dal vivo"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: giro dei cayos",
            "Giorno 2: Red Frog Beach a Bastimentos e serata in barca verso le isole vicine"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Bocas Town",
          "perChi": "vita sociale",
          "testo": "Ostelli, bar e ristoranti, rumorosa. Gente che quasi sempre resta più del previsto."
        },
        {
          "nome": "Bastimentos e Carenero",
          "perChi": "tranquillità",
          "testo": "Pochi servizi, più natura e silenzio."
        }
      ],
      "sapori": [
        {
          "nome": "Pesce al cocco",
          "testo": "Piatto caraibico con latte di cocco e pesce."
        },
        {
          "nome": "Rondón",
          "testo": "Stufato di pesce, platano e yuca nel latte di cocco."
        },
        {
          "nome": "Patacones",
          "testo": "Platano fritto con ceviche o formaggio."
        },
        {
          "nome": "Frutti di mare",
          "testo": "Granchi e aragosta, in stagione e nei ristoranti sul mare."
        }
      ],
      "attenzioni": [
        "Il microclima di Bocas segue le sue piogge, non la stagione secca del resto di Panama.",
        "Le chitras, moscerini che pungono senza farsi sentire e lasciano segni per giorni, infestano le spiagge: repellente.",
        "Le uscite verso i cayos più esterni saltano col mare mosso.",
        "Arrivando via terra dal Costa Rica, a Guabito possono chiedere il biglietto di uscita da Panama e la prova di almeno 1.000 USD o una carta di credito. Panama è un'ora avanti rispetto al Costa Rica, e gli uffici di frontiera chiudono nel tardo pomeriggio: meglio passare la mattina."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Casette colorate su palafitte e pontile di legno sull\'acqua a Bocas del Toro, Panama',
    immagine: '/images/panama/bocas-del-toro.jpg',
  },
  {
    slug: 'boquete',
    paeseSlug: 'panama',
    ordine: 4,
    nome: 'Boquete e gli altopiani',
    tipologia: ['natura', 'trekking'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il Panama d\'altura, nella provincia di Chiriquí: clima fresco, piantagioni di caffè tra i migliori al mondo, foreste nuvolose e il Volcán Barú, il punto più alto del paese.',
    percheAndarci:
      'È l\'unico posto al mondo da cui, con la giornata giusta, si vedono insieme l\'Oceano Pacifico e il Mar dei Caraibi. Ed è il contrappeso fresco alle isole caraibiche.',
    cosaVedere: [
      'Il Volcán Barú (3.475 m), con la salita notturna per l\'alba sui due oceani',
      'Il Sendero Los Quetzales, tra i migliori posti al mondo per avvistare il quetzal',
      'Le piantagioni di caffè della zona, tra cui quelle che producono il pregiato Geisha',
      'Le cascate di Lost Waterfalls e il Caldera Hot Springs',
    ],
    cosaFare: [
      'Salita notturna al Volcán Barú per l\'alba (c\'è una scheda esperienza dedicata)',
      'Tour di una finca di caffè con degustazione',
      'Birdwatching sul Sendero Los Quetzales, meglio con guida locale',
      'Rafting sul Rio Chiriquí Viejo',
    ],
    doveDormire: 'Boquete paese per i servizi; i lodge sulle colline circostanti per il verde e le viste sulla valle.',
    doveMangiare:
      'A Boquete si beve il caffè migliore del viaggio: la zona produce il Geisha, che alle aste batte record mondiali di prezzo, e nelle caffetterie del paese si assaggia a una frazione di quello che costa altrove. Per un paese di montagna l\'offerta di cibo è a sorpresa internazionale, per via della comunità di pensionati nordamericani che ci vive; per mangiare panamense servono le fonde locali, con il sancocho e la carne guisada. Al mercato dell\'agricoltore si trovano fragole e verdura d\'altura, rare nel resto del paese.',
    comeArrivare:
      'Volo interno da Panama City a David (circa 1 ora), poi 40 minuti di auto o bus fino a Boquete; in alternativa bus notturno dalla capitale (6-7 ore).',
    comeSpostarsi: 'Bus locali frequenti tra David e Boquete; auto a noleggio comoda per le finche e i sentieri fuori paese.',
    periodoMigliore:
      'dicembre-aprile per la salita al Barú con cieli sereni; il bajareque, la pioggerella fine tipica della zona, può comparire in qualsiasi stagione',
    costi: 'ingresso al parco Volcán Barú pochi dollari; salita guidata 50-90 USD a persona; tour del caffè 30-40 USD',
    erroriDaEvitare: [
      'Salire al Barú senza abbigliamento invernale: in vetta si arriva prima dell\'alba, con vento e temperature vicine allo zero',
      'Aspettarsi la vista sui due oceani garantita: capita solo con cielo limpido, tipicamente nei mesi secchi',
    ],
    miaEsperienza:
      'Ci siamo arrivati da San Blas passando per Panama City e il volo per David, e dopo il caldo umido delle isole Boquete è stato un sollievo fisico: si dorme con la finestra aperta e senza ventilatore, cosa che nel resto del viaggio non capita quasi mai. Abbiamo fatto il tour di una finca di caffè con degustazione, ed è qui che si assaggia il Geisha a una frazione di quello che costa altrove. La notte dopo siamo partiti attorno a mezzanotte per il Barú: tredici chilometri di pista sterrata per lato, al buio, col freddo che aumenta, per arrivare in vetta ai 3.475 metri prima dell\'alba. La vista sui due oceani insieme si ha solo con il cielo del tutto limpido, cioè in pochi giorni buoni anche in stagione secca; anche senza quella fortuna, la salita notturna con le valli illuminate sotto vale la fatica. In tarda mattinata eravamo di nuovo a Boquete.',
      "luoghi": [
        {
          "nome": "Vulcano Barú",
          "testo": "Il vulcano del Chiriquí e la vetta più alta di Panama (3.475 m), da cui con cielo limpido si vedono Pacifico e Caraibi insieme, cosa che succede di rado. Salita notturna per l'alba.",
          "come": "Partenza verso mezzanotte, a piedi con guida su un sentiero lungo e ripido, oppure con i tour in 4x4 fino in cima.",
          "quando": "Alba, con cielo del tutto limpido, cioè in pochi giorni buoni anche in stagione secca.",
          "tempo": "Notte-mattina",
          "consiglio": "Senza vista sui due oceani, la salita notturna con le valli illuminate sotto vale comunque la fatica. Portare strati caldi."
        },
        {
          "nome": "Sendero Los Quetzales",
          "testo": "Un sentiero del parco del Barú, nella foresta nebulosa fra Boquete e Cerro Punta, sul fianco del vulcano. È un buon posto per cercare il quetzal.",
          "come": "Sentiero di alcune ore, con guida o in autonomia.",
          "quando": "Mattina presto, quando gli uccelli sono più attivi. Il sentiero chiude a volte per maltempo o alberi caduti (riaperto a novembre 2025): verificare con MiAmbiente.",
          "tempo": "Circa 6 ore",
          "url": "https://miambiente.gob.pa/"
        },
        {
          "nome": "Tour di una finca di caffè",
          "testo": "Visita a una piantagione con degustazione, compreso il Geisha, il caffè pregiato di Boquete, a una frazione del prezzo di altrove.",
          "come": "Tour di mezza giornata prenotabile in paese.",
          "quando": "Mattina.",
          "tempo": "2-3 ore",
          "consiglio": "Il Geisha qui si assaggia a una frazione di quello che costa altrove."
        },
        {
          "nome": "Lost Waterfalls",
          "testo": "Un sentiero nella foresta nebulosa di Los Naranjos, vicino a Boquete, che collega tre cascate, ognuna con una breve deviazione.",
          "come": "In auto o taxi da Boquete fino all'ingresso; sentiero di circa 3,2 km, di difficoltà media.",
          "quando": "Di giorno, meglio la mattina.",
          "tempo": "Mezza giornata",
          "url": "https://www.tourismpanama.com/blog/post/trails-and-waterfalls-to-enjoy-in-boquete/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Tour di una finca di caffè con degustazione",
            "Pomeriggio: Lost Waterfalls o passeggiata in paese"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: caffè e riposo (Boquete è fresca)",
            "Giorno 2: Sendero Los Quetzales al mattino, notte per il Barú"
          ]
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorno 1: caffè",
            "Giorno 2: Sendero Los Quetzales",
            "Giorno 3: Barú all'alba, poi riposo"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Boquete",
          "perChi": "servizi e vita",
          "testo": "Ristoranti, tour, hotel; più fresco del resto di Panama, si dorme con la finestra aperta."
        },
        {
          "nome": "Dintorni e fincas",
          "perChi": "natura e silenzio",
          "testo": "Lodge fra caffè e foresta, lontani dai servizi."
        }
      ],
      "sapori": [
        {
          "nome": "Caffè Geisha",
          "testo": "Il caffè pregiato della zona, da assaggiare in una finca o in un caffè di Boquete."
        },
        {
          "nome": "Sancocho",
          "testo": "Zuppa di pollo con yuca e coriandolo."
        },
        {
          "nome": "Trota",
          "testo": "Allevata nei fiumi d'altura, nei ristoranti della zona."
        },
        {
          "nome": "Fragole e verdure d'altura",
          "testo": "Prodotti dei mercati di Boquete."
        }
      ],
      "attenzioni": [
        "Il Barú si sale di notte: strati caldi, torcia e guida. I sentieri di montagna di Panama sono segnalati male, il telefono spesso non prende e ci sono stati escursionisti dispersi: mai da soli.",
        "La vista sui due oceani dalla vetta si ha solo con cielo del tutto limpido, in pochi giorni buoni.",
        "Pioggia e nebbia possono cambiare i piani: tenere un giorno di margine."
      ],
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Arcobaleno sulle colline verdi attorno a Boquete, negli altopiani di Chiriquí, Panama',
    immagine: '/images/panama/boquete.jpg',
  },
]
