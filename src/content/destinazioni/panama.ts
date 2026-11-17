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
    comeArrivare: "Si atterra a Tocumen (PTY), l'hub di Copa Airlines e uno degli scali principali delle Americhe. Dall'aeroporto parte la linea 2 della metro, con biglietto di circa 0,50 USD sulla tessera ricaricabile (circa 0,45 €); in taxi o Uber fino al Casco Viejo servono 30-45 minuti, di più con il traffico serale. Dal Belize c'è il volo diretto Copa da Belize City, circa 2 ore e mezza, solo in alcuni giorni della settimana. I voli interni per David e Bocas del Toro partono invece dall'aeroporto di Albrook, in città: fra Albrook e Tocumen il taxi impiega 30-60 minuti.",
    comeSpostarsi: 'Metro (due linee, economica e funzionale), Uber diffuso e conveniente, taxi da contrattare sempre prima di salire.',
    periodoMigliore: 'metà dicembre-metà aprile, stagione secca; nel resto dell\'anno piove soprattutto nel pomeriggio',
    costi: "Si paga in dollari USA (il balboa esiste solo in monete). Miraflores 17,22 USD per i non residenti (circa 15 €), Biomuseo 20 USD (circa 17 €), Museo del Canal 15 USD (circa 13 €), Parque Natural Metropolitano 5 USD (circa 4 €). Budget: circa 45-60 € al giorno con ostello nel Casco Viejo, fonde e metro. Medio: 110-160 € con hotel a Bella Vista o El Cangrejo, Uber e qualche museo. Alto: oltre 250 € con hotel di design nel Casco e cene sui rooftop.",
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
          "costo": "17,22 USD per i non residenti dai 13 anni, circa 15 €; 7,22 USD dai 6 ai 12 anni (2026). Biglietti anche online.",
          "url": "https://visitcanaldepanama.com/",
          "consiglio": "Una portacontainer che entra con pochi centimetri di margine per lato vale da sola la deviazione.",
          "orari": "Tutti i giorni 8-18; biglietteria 8-17. Lavori di ammodernamento in corso fino alla fine del 2026, con possibili attese.",
          "lat": 8.9957,
          "lng": -79.5905
        },
        {
          "nome": "Casco Viejo",
          "testo": "Il centro storico coloniale, patrimonio UNESCO: Plaza de la Independencia, chiese, palazzi restaurati e facciate ancora puntellate, fra caffè e rooftop.",
          "come": "A piedi dal taxi, il quartiere si gira in un giorno.",
          "quando": "Mattina e tramonto; di sera restare nelle strade turistiche.",
          "tempo": "Mezza giornata",
          "consiglio": "Il contrasto fra palazzi restaurati e facciate puntellate è la cosa più interessante da guardare. Fuori dalle zone turistiche, dopo il tramonto, meglio non girare a piedi.",
          "costo": "Gratis.",
          "lat": 8.9525,
          "lng": -79.5347
        },
        {
          "nome": "Panamá Viejo",
          "testo": "Le rovine della città originale, fondata nel 1519 e distrutta nel 1671 durante l'assalto del corsaro Henry Morgan, da un incendio di cui non si sa con certezza chi fu l'autore. Con il Casco Viejo è patrimonio UNESCO dal 1997.",
          "come": "Taxi da app dal centro.",
          "quando": "Da martedì a domenica, 8.30-17.30 (biglietteria fino alle 16.30); chiuso il lunedì. Mattina, prima del caldo.",
          "tempo": "1-2 ore",
          "url": "https://www.patronatopanamaviejo.org/",
          "orari": "Da martedì a domenica 8.30-17.30, biglietteria fino alle 16.30; chiuso il lunedì.",
          "lat": 9.0072,
          "lng": -79.4884
        },
        {
          "nome": "Mercado de Mariscos",
          "testo": "Il mercato del pesce vicino al Casco Viejo, con banchi di ceviche serviti in bicchiere.",
          "come": "A piedi dal Casco Viejo.",
          "quando": "Pranzo.",
          "tempo": "1 ora",
          "consiglio": "Il ceviche si mangia in bicchiere di plastica, al banco, per pochi dollari.",
          "lat": 8.9583,
          "lng": -79.539
        },
        {
          "nome": "Biomuseo",
          "testo": "Il museo progettato da Frank Gehry, a Calzada de Amador, sul sorgere dell'istmo di Panama e sulla biodiversità. L'edificio a tettoie colorate si vede da lontano; dentro le sale raccontano come l'istmo, unendo due continenti, ha cambiato animali e correnti.",
          "come": "Taxi o Uber.",
          "quando": "Da martedì a venerdì 9-15, sabato e domenica 10-15; chiuso il lunedì.",
          "tempo": "2 ore",
          "costo": "20 USD per gli adulti non residenti, circa 17 € (2026).",
          "url": "https://biomuseo.org/",
          "orari": "Da martedì a venerdì 9-15, sabato e domenica 10-15; chiuso il lunedì.",
          "lat": 8.9319,
          "lng": -79.5448
        },
        {
          "nome": "Museo del Canal Interoceánico",
          "testo": "Il museo della storia del canale, in un palazzo ottocentesco su Plaza de la Independencia che fu sede della compagnia francese del canale. Racconta il tentativo fallito dei francesi, i lavori americani, le migliaia di operai morti e il passaggio del canale a Panama nel 1999.",
          "come": "A piedi nel Casco Viejo, sulla piazza principale.",
          "quando": "Prima o dopo Miraflores, per capire che cosa si guarda.",
          "tempo": "1-2 ore",
          "costo": "15 USD per gli adulti non residenti, circa 13 € (2026).",
          "orari": "Da martedì a domenica 9-18, biglietteria fino alle 17.30; chiuso il lunedì.",
          "lat": 8.9518,
          "lng": -79.5347,
          "url": "https://museodelcanal.com/"
        },
        {
          "nome": "Iglesia de San José e l'altare d'oro",
          "testo": "Una chiesa del Casco Viejo che custodisce un altare barocco in legno dorato arrivato da Panamá Viejo. Secondo la tradizione fu dipinto di nero per nasconderlo ai pirati di Henry Morgan nel 1671.",
          "come": "A piedi sull'Avenida A, nel Casco Viejo.",
          "quando": "Mattina, fuori dalle funzioni.",
          "tempo": "20 minuti",
          "lat": 8.9514,
          "lng": -79.536,
          "consiglio": "Spalle e ginocchia coperte: è una chiesa in uso."
        },
        {
          "nome": "Plaza de Francia e Las Bóvedas",
          "testo": "La piazza sulla punta del Casco Viejo, con l'obelisco dedicato ai francesi morti nei lavori del primo canale. Sopra le antiche volte delle mura si cammina sul Paseo Esteban Huertas, con vista sulla baia e sullo skyline.",
          "come": "A piedi, in fondo al Casco Viejo.",
          "quando": "Tardo pomeriggio e tramonto.",
          "tempo": "30-45 minuti",
          "costo": "Gratis.",
          "lat": 8.9499,
          "lng": -79.5321
        },
        {
          "nome": "Cinta Costera",
          "testo": "Il lungomare costruito sulla baia fra il Casco Viejo e Paitilla, con piste ciclabili, campi sportivi e prati. Di sera si riempie di chi corre e passeggia; da qui si ha la vista migliore dello skyline.",
          "come": "A piedi dal Mercado de Mariscos o dal Casco Viejo; si noleggiano biciclette lungo il percorso.",
          "quando": "Tramonto e prima sera, quando il caldo cala.",
          "tempo": "1-2 ore",
          "costo": "Gratis.",
          "lat": 8.959,
          "lng": -79.5379
        },
        {
          "nome": "Calzada de Amador",
          "testo": "La strada rialzata, costruita con le rocce scavate per il canale, che unisce la terraferma a quattro isolette all'ingresso pacifico del canale. Si percorre a piedi o in bicicletta guardando le navi in attesa e la città dall'acqua; all'inizio c'è il Biomuseo.",
          "come": "Taxi o Uber; biciclette e risciò a pedali a noleggio all'inizio della calzada.",
          "quando": "Pomeriggio tardi e tramonto.",
          "tempo": "2 ore",
          "costo": "Gratis.",
          "lat": 8.9178,
          "lng": -79.5339
        },
        {
          "nome": "Parque Natural Metropolitano",
          "testo": "Più di 200 ettari di foresta tropicale secca dentro la città, con sentieri e un belvedere sulla baia e sul canale. Si vedono bradipi, tucani, scimmie tamarino e agouti a pochi minuti dai grattacieli.",
          "come": "Taxi o Uber fino all'ingresso sull'Avenida Juan Pablo II.",
          "quando": "All'apertura, quando gli animali sono attivi e fa meno caldo.",
          "tempo": "2-3 ore",
          "costo": "5 USD per gli adulti stranieri, circa 4 € (2026).",
          "orari": "Sentieri aperti tutti i giorni 7-16.30, festivi compresi.",
          "lat": 8.9854,
          "lng": -79.5467,
          "url": "https://www.parquemetropolitano.org/"
        },
        {
          "nome": "Cerro Ancón",
          "testo": "La collina più alta della città, con una grande bandiera panamense in cima. Fu dentro la Zona del Canale amministrata dagli Stati Uniti: oggi è un'area verde dove si sale a piedi per guardare il Casco Viejo, il porto di Balboa e il Ponte delle Americhe.",
          "come": "Taxi fino all'inizio della strada di Quarry Heights, poi circa mezz'ora di salita a piedi su asfalto.",
          "quando": "Mattina presto, prima del caldo.",
          "tempo": "1-2 ore",
          "costo": "Gratis.",
          "lat": 8.9576,
          "lng": -79.5492,
          "consiglio": "Lungo la strada si incontrano spesso bradipi e tucani: salire piano e guardare gli alberi."
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
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorno 1: Miraflores al mattino, Mercado de Mariscos, Casco Viejo e Museo del Canal",
            "Giorno 2: Parque Natural Metropolitano all'apertura, Panamá Viejo, tramonto sulla Cinta Costera",
            "Giorno 3: Cerro Ancón al mattino, Biomuseo e Calzada de Amador, oppure gita a Isla Taboga"
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
        },
        {
          "nome": "El Cangrejo",
          "perChi": "ristoranti e metro",
          "testo": "Quartiere residenziale intorno alla Vía Argentina, con caffè, ristoranti di ogni cucina e la fermata della metro. Più tranquillo del Casco la sera."
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
      "gite": [
        {
          "nome": "Chiuse di Agua Clara",
          "distanza": "circa 80 km, sul lato caraibico vicino a Colón",
          "come": "In auto o tour di giornata; biglietti anche online.",
          "testo": "Il centro visitatori delle chiuse nuove, aperte nel 2016 per le navi più grandi, con una terrazza sul lago Gatún. Aperto tutti i giorni 8-17, biglietteria fino alle 15.30; 10 USD per gli adulti non residenti (circa 9 €)."
        },
        {
          "nome": "Portobelo",
          "distanza": "circa 2 ore di strada, sulla costa caraibica",
          "come": "In auto o tour di giornata, spesso abbinato a una spiaggia della costa.",
          "testo": "Il porto spagnolo da cui partivano i convogli con l'argento del Perù, con i forti sulla baia patrimonio UNESCO e la chiesa del Cristo Negro. È anche un centro della cultura congo, afro-panamense."
        },
        {
          "nome": "Isla Taboga",
          "distanza": "circa 20 km nel golfo di Panama",
          "come": "Traghetto dalla Calzada de Amador; andata e ritorno in giornata.",
          "testo": "L'«isola dei fiori», con un villaggio di case colorate, una delle chiese più antiche delle Americhe e spiagge tranquille da cui si vedono le navi in fila per il canale."
        }
      ],
      "faq": [
        {
          "domanda": "Quanti giorni servono a Panama City?",
          "risposta": "Due giorni bastano per il canale, il Casco Viejo e Panamá Viejo; con un terzo si aggiungono il Parque Metropolitano, Amador o una gita a Taboga."
        },
        {
          "domanda": "Quando passano le navi a Miraflores?",
          "risposta": "I transiti seguono fasce orarie che cambiano ogni giorno: conviene controllarle il giorno stesso e arrivare all'inizio di una fascia. Le ore di punta per l'ingresso sono le 8 e le 14."
        },
        {
          "domanda": "Il Casco Viejo è sicuro?",
          "risposta": "Le strade turistiche sono sorvegliate e vive fino a tardi, ma il quartiere confina con zone da evitare e gli scippi capitano. Dopo il tramonto conviene muoversi con taxi da app."
        },
        {
          "domanda": "Servono contanti o dollari?",
          "risposta": "La moneda è il dollaro USA, con monete di balboa per gli spiccioli. In città le carte funzionano quasi ovunque; i contanti servono per mercati, taxi e soprattutto per San Blas."
        },
        {
          "domanda": "Come ci si muove in città?",
          "risposta": "Metro per le tratte lungo le due linee, Uber per il resto. I taxi di strada spesso non hanno il tassametro: il prezzo si concorda prima di salire."
        },
        {
          "domanda": "Qual è il periodo migliore?",
          "risposta": "Da metà dicembre a metà aprile, nella stagione secca. Nel resto dell'anno piove soprattutto nel pomeriggio, e la mattina resta buona per le visite."
        }
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
    comeArrivare: "Si parte da Panama City prima dell'alba con un 4x4 prenotato insieme al pacchetto: circa 2h30-3h di strada, gli ultimi tratti su una strada di montagna con pendenze molto ripide, fino al porto di Cartí. Al posto di controllo si mostra il passaporto e si paga la tassa comunitaria Guna, circa 20 USD a persona (circa 17 €), più 2-5 USD al porto (circa 2-4 €), solo in contanti. Dal molo una barca porta alle isole in 15-60 minuti secondo la destinazione. Il rientro parte di solito a metà mattina e arriva in città nel primo pomeriggio.",
    comeSpostarsi: 'Solo in barca, con i trasferimenti organizzati dalla struttura che ospita.',
    periodoMigliore: 'stagione secca (dicembre-aprile) per mare più calmo; la traversata in barca può essere impegnativa con vento',
    costi: "Tassa comunitaria Guna circa 20 USD a persona (circa 17 €) più 2-5 USD al porto, solo contanti; transfer 4x4 più barca 40-60 USD a tratta (circa 34-52 €); pacchetti con cabaña e pasti 60-150 USD a persona per notte (circa 52-130 €). Budget: circa 80-100 € al giorno con cabaña condivisa e trasferimenti. Medio: 130-170 € con cabaña privata e giro delle isole. Alto: oltre 200 € con bagno privato su un'isola esterna e barca riservata.",
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
          "consiglio": "Si fa snorkeling senza bombole: le immersioni con le bombole sono vietate a Guna Yala per proteggere la barriera.",
          "lat": 9.5582,
          "lng": -78.8761
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
        },
        {
          "nome": "Gardi Sugdub",
          "testo": "L'isola-villaggio davanti al porto di Cartí, coperta quasi per intero da case di canna e lamiera. Con l'innalzamento del mare, nel 2024 gran parte degli abitanti si è trasferita in un nuovo quartiere sulla terraferma: l'isola resta il posto per capire com'è la vita quotidiana guna, lontano dalle spiagge da cartolina.",
          "come": "In barca da Cartí in pochi minuti, con il permesso della comunità; spesso è una sosta all'andata o al ritorno.",
          "quando": "Di giorno, all'arrivo o alla partenza.",
          "tempo": "1 ora",
          "lat": 9.4707,
          "lng": -78.961,
          "consiglio": "Chiedere sempre prima di fotografare: alcune famiglie chiedono un piccolo compenso."
        },
        {
          "nome": "Chichime",
          "testo": "Due isole con palme e sabbia bianca sul margine esterno dell'arcipelago occidentale, con acqua bassa e cabañas gestite da famiglie guna. Sono fra le più frequentate per il pernottamento, anche dalle barche a vela in sosta.",
          "come": "In barca da Cartí, con il pacchetto di chi ospita.",
          "quando": "Stagione secca, con mare più calmo per la traversata.",
          "tempo": "1-2 notti",
          "lat": 9.5859,
          "lng": -78.8788
        },
        {
          "nome": "Cayos Limones",
          "testo": "Un gruppo di isolotti con una laguna interna riparata, sabbia chiara e fondali bassi dove si fa snorkeling dalla riva. Sono una delle soste più comuni nei giri in barca delle isole occidentali.",
          "come": "In barca, nei giri fra le isole o con un pernottamento.",
          "quando": "Mattina, con luce limpida.",
          "tempo": "Mezza giornata",
          "lat": 9.5667,
          "lng": -78.861
        },
        {
          "nome": "El Porvenir (Gaigirgordub)",
          "testo": "Una piccola isola con la pista d'atterraggio e gli uffici della comarca, all'estremità occidentale dell'arcipelago. È il punto amministrativo di Guna Yala più che una meta di mare, ma da qui partono le barche per le isole vicine.",
          "come": "In barca da Cartí o dalle isole vicine.",
          "quando": "Di giorno.",
          "tempo": "Breve sosta",
          "lat": 9.5503,
          "lng": -78.9552
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
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorno 1: 4x4 fino a Cartí, sosta a Gardi Sugdub, barca verso l'isola e notte in cabaña",
            "Giorno 2: giro in barca fra Isla Perro, i Cayos Limones e le piscine naturali",
            "Giorno 3: mattina libera in acqua, rientro a Cartí e in 4x4 a Panama City"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Cabaña su un'isola Guna",
          "perChi": "chi vuole dormire in una comunità Guna",
          "testo": "Essenziale per scelta: luce a orario, acqua dolce razionata, wifi quasi assente, pasti inclusi, gestita da una famiglia Guna."
        },
        {
          "nome": "Alloggio sul continente a Cartí",
          "perChi": "chi vuole arrivare all'alba",
          "testo": "Meno suggestivo, ma evita la partenza notturna."
        },
        {
          "nome": "Isole esterne (Chichime, Cayos Limones)",
          "perChi": "mare più limpido",
          "testo": "Acqua più trasparente e meno barche di passaggio, in cambio di una traversata più lunga e più mossa da Cartí."
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
      "gite": [
        {
          "nome": "Isla Pelícano",
          "distanza": "circa 17 km dal porto di Cartí",
          "come": "In barca, come sosta nei giri fra le isole.",
          "testo": "Un isolotto di sabbia con poche palme, così piccolo che si gira in un minuto: è l'immagine di San Blas che finisce sulle cartoline."
        },
        {
          "nome": "In barca a vela verso la Colombia",
          "distanza": "3-5 giorni di navigazione",
          "come": "Con le barche a vela che fanno la traversata fra San Blas e la costa colombiana, prenotate a Panama City.",
          "testo": "È l'alternativa classica al Darién Gap, dove non ci sono strade: qualche giorno fra le isole guna e poi il mare aperto fino in Colombia."
        }
      ],
      "faq": [
        {
          "domanda": "San Blas si può fare in giornata?",
          "risposta": "Si può, ma fra 4x4 e barca si passano 6 ore in viaggio e si resta poco sulle isole. Con almeno una notte la visita ha senso."
        },
        {
          "domanda": "Quanti contanti portare?",
          "risposta": "Abbastanza per la tassa comunitaria, il porto, eventuali supplementi per singole isole, bevande e mole, in dollari USA. Sulle isole non ci sono bancomat né pagamenti con carta."
        },
        {
          "domanda": "Com'è una cabaña a San Blas?",
          "risposta": "Essenziale: pareti di canna, letto o amaca, bagno spesso in comune, luce solo per qualche ora e acqua dolce razionata. Pasti di pesce, riso e platano sono quasi sempre inclusi."
        },
        {
          "domanda": "Si può fare diving a San Blas?",
          "risposta": "No, le immersioni con bombole sono vietate per decisione delle autorità guna. Lo snorkeling invece è libero e i fondali bassi bastano."
        },
        {
          "domanda": "Qual è il periodo migliore?",
          "risposta": "Da dicembre ad aprile, nella stagione secca, con più sole e mare in genere più calmo. Con il vento forte la traversata in barca da Cartí può essere movimentata."
        },
        {
          "domanda": "Come si prenota?",
          "risposta": "Con un pacchetto che include 4x4, barca, cabaña e pasti, venduto dalle agenzie di Panama City o direttamente dalle famiglie guna. Le tasse comunitarie in genere si pagano a parte."
        }
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
      'Volo interno da Panama City a Bocas del Toro (circa 1 ora) oppure bus notturno fino ad Almirante e water taxi (circa 30 minuti). Dalla Costa Rica si arriva via terra dal Caribe: da Puerto Viejo o Cahuita bus fino a Sixaola, si esce dal Costa Rica (tassa di uscita via terra di 8 USD, circa 7 €, online sul sito del Banco de Costa Rica o ai chioschi BCR), si attraversa a piedi il ponte binazionale sul fiume Sixaola, aperto nel 2021, e si entra a Panama a Guabito. Poi bus o taxi collettivo fino a Changuinola e Almirante, e water taxi per Bocas Town (circa 30 minuti). Ci sono anche shuttle porta a porta da Puerto Viejo.',
    comeSpostarsi: 'Water taxi tra le isole (pochi dollari a tratta), biciclette e taxi su Isla Colón.',
    periodoMigliore:
      'ha un microclima diverso dal resto del paese: settembre-ottobre e febbraio-marzo sono spesso i periodi più soleggiati, mentre qui la «stagione secca» panamense non sempre coincide',
    costi: "Tour in barca di giornata circa 50-55 USD a persona (circa 43-47 €), pranzo a parte; tassa del parco marino per Cayo Zapatilla circa 10 USD in contanti (circa 9 €) se non è compresa; volo interno 100-150 USD a tratta (circa 86-130 €). Budget: circa 40-55 € al giorno con ostello a Bocas Town, chioschi e water taxi. Medio: 90-140 € con hotel sull'acqua e un tour. Alto: oltre 220 € con lodge a Bastimentos o Carenero e barca privata.",
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
          "tempo": "Mezza giornata",
          "lat": 9.3386,
          "lng": -82.2404
        },
        {
          "nome": "Cayo Zapatilla",
          "testo": "Gli isolotti disabitati di Cayos Zapatilla, dentro il parco nazionale marino di Isla Bastimentos, istituito nel 1988, con sabbia bianca e foresta. Spesso la tappa più bella dei tour in barca.",
          "come": "Con tour in barca da Bocas Town; ingresso al parco a parte.",
          "quando": "Mattina, con mare calmo.",
          "tempo": "Mezza giornata",
          "consiglio": "Le uscite verso i cayos più esterni saltano col mare mosso: metterlo in conto.",
          "costo": "Tassa del parco marino circa 10 USD in contanti (circa 9 €), se non è compresa nel tour.",
          "lat": 9.2655,
          "lng": -82.0552
        },
        {
          "nome": "Starfish Beach",
          "testo": "La spiaggia delle stelle marine: si vedono in acqua bassa vicino alla riva, e la promessa del nome è mantenuta.",
          "come": "Tappa nei tour in barca o in taxi acqueo.",
          "quando": "Mattina.",
          "tempo": "Breve sosta",
          "consiglio": "Non toccare né togliere le stelle marine dall'acqua.",
          "lat": 9.4048,
          "lng": -82.3255
        },
        {
          "nome": "Cayo Coral e Isla Bastimentos",
          "testo": "Snorkeling in acqua bassa a Cayo Coral. Isla Bastimentos ospita il parco nazionale marino e Red Frog Beach, raggiungibile con il water taxi.",
          "come": "Tour in barca da Bocas Town.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata",
          "lat": 9.2433,
          "lng": -82.1449
        },
        {
          "nome": "Red Frog Beach",
          "testo": "Una spiaggia lunga sul lato atlantico di Isla Bastimentos, con sabbia dorata e foresta alle spalle. Prende il nome dalle piccole rane rosse velenose che vivono nel sottobosco. Il mare è spesso mosso, più adatto al surf che al bagno.",
          "come": "Water taxi da Bocas Town fino al molo, poi un breve sentiero attraverso la foresta.",
          "quando": "Mattina, con il mare più calmo.",
          "tempo": "Mezza giornata",
          "lat": 9.3447,
          "lng": -82.1695,
          "consiglio": "Correnti forti: bagno solo dove fanno il bagno gli altri, e mai da soli."
        },
        {
          "nome": "Playa Bluff",
          "testo": "La spiaggia delle onde, sul lato atlantico di Isla Colón: chilometri di sabbia quasi deserta, frangenti potenti e tartarughe che depongono le uova in stagione. È il posto per il surf, non per il bagno tranquillo.",
          "come": "In taxi o in bicicletta da Bocas Town lungo la strada costiera.",
          "quando": "Mattina; bagno solo con mare calmo.",
          "tempo": "Mezza giornata",
          "lat": 9.3991,
          "lng": -82.2453,
          "consiglio": "Durante la deposizione delle tartarughe niente luci in spiaggia di notte."
        },
        {
          "nome": "Boca del Drago",
          "testo": "L'angolo nord-ovest di Isla Colón, con acqua calma e trasparente, palme e qualche ristorante di pesce. Da qui si cammina in pochi minuti fino a Starfish Beach.",
          "come": "Bus o taxi da Bocas Town attraversando l'isola, oppure in barca con i tour.",
          "quando": "Mattina, prima che arrivino le barche dei tour.",
          "tempo": "Mezza giornata",
          "lat": 9.4144,
          "lng": -82.331
        },
        {
          "nome": "Isla Carenero",
          "testo": "L'isola davanti a Bocas Town, a un paio di minuti di barca: alloggi sull'acqua, qualche ristorante e un sentiero che ne fa il giro. Davanti alla punta si forma un'onda nota ai surfisti.",
          "come": "Water taxi da Bocas Town, a qualsiasi ora del giorno.",
          "quando": "Pomeriggio e cena, con vista sulle luci di Bocas Town.",
          "tempo": "2-3 ore",
          "lat": 9.3466,
          "lng": -82.2318
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
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorno 1: arrivo, giro di Bocas Town, cena su Isla Carenero",
            "Giorno 2: tour dei cayos con Cayo Zapatilla, Cayo Coral e la Bahía de los Delfines",
            "Giorno 3: Boca del Drago e Starfish Beach al mattino, Playa Bluff nel pomeriggio"
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
        },
        {
          "nome": "Isla Colón fuori dal paese",
          "perChi": "surf e natura",
          "testo": "Lungo la strada per Playa Bluff o verso Boca del Drago: case fra la foresta e il mare, silenzio di sera, ma servono bici o taxi per tutto."
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
      "gite": [
        {
          "nome": "Bahía de los Delfines",
          "distanza": "circa 11 km a sud di Bocas Town",
          "come": "In barca, di solito come prima sosta del tour dei cayos.",
          "testo": "Una baia riparata fra le mangrovie dove vive un gruppo di tursiopi, che si osservano dalla barca. Le barche dovrebbero restare a distanza e a motore basso."
        },
        {
          "nome": "Old Bank (Isla Bastimentos)",
          "distanza": "pochi minuti di water taxi da Bocas Town",
          "come": "Water taxi dal molo di Bocas Town.",
          "testo": "Il villaggio afro-caraibico di Bastimentos, con case di legno sull'acqua e una comunità che parla il guari-guari, un creolo a base inglese. Da qui un sentiero attraversa l'isola fino a Wizard Beach."
        }
      ],
      "faq": [
        {
          "domanda": "Quanti giorni servono a Bocas del Toro?",
          "risposta": "Tre giorni per il tour dei cayos, Bastimentos e Boca del Drago; molti ne restano cinque, anche per avere un giorno di margine se il mare cancella le uscite."
        },
        {
          "domanda": "Bocas del Toro o San Blas?",
          "risposta": "Bocas è vivace, con ostelli, bar, surf e servizi; San Blas è isolata ed essenziale, con le isole più belle e la comunità guna. Sono esperienze diverse e molti le fanno entrambe."
        },
        {
          "domanda": "Qual è il periodo migliore?",
          "risposta": "Bocas ha un clima proprio: settembre-ottobre e febbraio-marzo sono spesso i mesi più soleggiati, mentre la stagione secca del resto di Panama qui non è garantita."
        },
        {
          "domanda": "Come ci si muove fra le isole?",
          "risposta": "In water taxi, che partono dai moli di Bocas Town per pochi dollari a tratta. Su Isla Colón ci sono anche bus, taxi e biciclette a noleggio."
        },
        {
          "domanda": "Che cosa sono i chitre?",
          "risposta": "Moscerini minuscoli che vivono sulle spiagge e pungono senza farsi sentire, lasciando segni che prudono per giorni. Repellente e, al tramonto, vestiti lunghi."
        },
        {
          "domanda": "Si arriva da Boquete senza passare da Panama City?",
          "risposta": "Sì: navette dirette da Boquete con water taxi incluso, oppure bus da David ad Almirante e poi barca per Bocas Town, circa mezz'ora. In tutto servono alcune ore."
        }
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
    comeArrivare: "Da Panama City il volo interno Air Panama per David parte dall'aeroporto di Albrook, in città, non da Tocumen, e impiega circa un'ora; conviene prenotarlo in anticipo. Da David a Boquete servono circa 40 minuti, con i bus frequenti dalla stazione centrale o in taxi, su una strada che sale dolcemente verso le montagne. In alternativa c'è il bus notturno dalla capitale, 6-7 ore. Verso Bocas del Toro ci sono navette dirette con il water taxi incluso, oppure il bus da David ad Almirante attraverso la Cordigliera.",
    comeSpostarsi: 'Bus locali frequenti tra David e Boquete; auto a noleggio comoda per le finche e i sentieri fuori paese.',
    periodoMigliore:
      'dicembre-aprile per la salita al Barú con cieli sereni; il bajareque, la pioggerella fine tipica della zona, può comparire in qualsiasi stagione',
    costi: "Salita guidata al Barú 50-90 USD a persona (circa 43-77 €); tour di una finca di caffè circa 35-45 USD (circa 30-39 €). Budget: circa 40-55 € al giorno con ostello in paese, fonde e bus. Medio: 90-140 € con hotel o lodge in collina e un tour al giorno. Alto: oltre 200 € con lodge fra i caffè e guide private.",
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
          "consiglio": "Senza vista sui due oceani, la salita notturna con le valli illuminate sotto vale comunque la fatica. Portare strati caldi.",
          "lat": 8.8089,
          "lng": -82.5424,
          "url": "https://miambiente.gob.pa/"
        },
        {
          "nome": "Sendero Los Quetzales",
          "testo": "Un sentiero del parco del Barú, nella foresta nebulosa fra Boquete e Cerro Punta, sul fianco del vulcano. È un buon posto per cercare il quetzal.",
          "come": "Sentiero di alcune ore, con guida o in autonomia.",
          "quando": "Mattina presto, quando gli uccelli sono più attivi. Il sentiero chiude a volte per maltempo o alberi caduti (riaperto a novembre 2025): verificare con MiAmbiente.",
          "tempo": "Circa 6 ore",
          "url": "https://miambiente.gob.pa/",
          "lat": 8.8465,
          "lng": -82.4897
        },
        {
          "nome": "Tour di una finca di caffè",
          "testo": "Visita a una piantagione con degustazione, compreso il Geisha, il caffè pregiato di Boquete, a una frazione del prezzo di altrove.",
          "come": "Tour di mezza giornata prenotabile in paese.",
          "quando": "Mattina.",
          "tempo": "2-3 ore",
          "consiglio": "Il Geisha qui si assaggia a una frazione di quello che costa altrove.",
          "costo": "Circa 35-45 USD a persona (circa 30-39 €), con degustazione."
        },
        {
          "nome": "Lost Waterfalls",
          "testo": "Un sentiero nella foresta nebulosa di Los Naranjos, vicino a Boquete, che collega tre cascate, ognuna con una breve deviazione.",
          "come": "In auto o taxi da Boquete fino all'ingresso; sentiero di circa 3,2 km, di difficoltà media.",
          "quando": "Di giorno, meglio la mattina.",
          "tempo": "Mezza giornata",
          "url": "https://www.tourismpanama.com/blog/post/trails-and-waterfalls-to-enjoy-in-boquete/",
          "lat": 8.8419,
          "lng": -82.4785
        },
        {
          "nome": "Bajo Boquete e il Parque Central",
          "testo": "Il centro del paese, sul fondo della valle del río Caldera, con la piazza, il mercato, le caffetterie dove si assaggia il caffè della zona e le agenzie per i tour. Le montagne coperte di nubi fanno da sfondo a ogni strada.",
          "come": "A piedi; il paese è piccolo e pianeggiante.",
          "quando": "Mattina, prima della pioggia del pomeriggio.",
          "tempo": "2 ore",
          "costo": "Gratis.",
          "lat": 8.7765,
          "lng": -82.4323
        },
        {
          "nome": "Sendero El Pianista",
          "testo": "Un sentiero che risale una valle stretta lungo un torrente, attraversandolo più volte su ponticelli, dentro la foresta nebulosa sopra Boquete. Il tratto basso è facile; più in alto diventa ripido e fangoso.",
          "come": "Taxi da Boquete fino all'inizio del sentiero, nella zona di Palo Alto.",
          "quando": "Mattina presto.",
          "tempo": "2-4 ore",
          "lat": 8.817,
          "lng": -82.4232,
          "consiglio": "Scarpe da trekking e giacca impermeabile: il bajareque arriva senza preavviso."
        },
        {
          "nome": "Mi Jardín es su Jardín",
          "testo": "Il giardino di una villa privata alle porte del paese, aperto ai visitatori: aiuole fiorite, sculture colorate e prati curati, nel clima fresco che a Boquete fa crescere fiori tutto l'anno.",
          "come": "A piedi o in taxi da Bajo Boquete, salendo verso Volcancito.",
          "quando": "Di giorno, con il sole.",
          "tempo": "30-45 minuti",
          "lat": 8.7885,
          "lng": -82.4376
        },
        {
          "nome": "Cerro Punta",
          "testo": "Uno dei villaggi agricoli più alti di Panama, sull'altro versante del Barú: campi di patate, fragole e fiori su pendii ripidi, aria fredda e serre ovunque. È l'arrivo del Sendero Los Quetzales e la porta del Parque Internacional La Amistad.",
          "come": "In auto girando intorno al vulcano passando per Volcán, oppure a piedi con il Sendero Los Quetzales.",
          "quando": "Mattina, prima che salgano le nuvole.",
          "tempo": "Mezza giornata",
          "lat": 8.8526,
          "lng": -82.5736
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
        },
        {
          "nome": "David",
          "perChi": "chi è di passaggio",
          "testo": "La città di pianura con l'aeroporto e la stazione dei bus: calda e poco interessante, utile solo per una notte prima di un volo o di un bus all'alba."
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
      "gite": [
        {
          "nome": "Pozos termali di Caldera",
          "distanza": "circa 15 km a sud di Boquete",
          "come": "In auto o taxi fino al villaggio di Caldera, poi l'ultimo tratto su sterrato e a piedi.",
          "testo": "Piccole pozze di acqua calda vulcanica in riva al fiume, in mezzo ai campi. Sono rustiche, senza strutture, e si alternano al bagno nell'acqua fredda del fiume."
        },
        {
          "nome": "Golfo di Chiriquí e Boca Chica",
          "distanza": "sulla costa pacifica, oltre David",
          "come": "In auto o con un tour di giornata, poi barca verso le isole del parco marino.",
          "testo": "Il parco nazionale marino del Golfo di Chiriquí, con isole di foresta e spiagge sul Pacifico, snorkeling e, da luglio a ottobre circa, il passaggio delle megattere. È il mare più vicino agli altopiani."
        }
      ],
      "faq": [
        {
          "domanda": "Quanti giorni servono a Boquete?",
          "risposta": "Tre giorni: uno per il caffè e il paese, uno per il Sendero Los Quetzales o le Lost Waterfalls, uno per il Barú, che si sale di notte e lascia stanchi per il resto della giornata."
        },
        {
          "domanda": "La salita al Barú è difficile?",
          "risposta": "A piedi sì: circa 13 km di pista sassosa per lato, 10-12 ore andata e ritorno, senza acqua lungo il percorso e con temperature vicine allo zero in vetta. Con un 4x4 si accorcia buona parte della salita."
        },
        {
          "domanda": "Dalla vetta del Barú si vedono davvero i due oceani?",
          "risposta": "Sì, ma solo con il cielo del tutto limpido, che capita in pochi giorni anche nella stagione secca. Conviene salire senza contarci."
        },
        {
          "domanda": "Che cos'è il caffè Geisha?",
          "risposta": "Una varietà di caffè molto aromatica che sugli altopiani di Boquete ha trovato il suo luogo ideale e alle aste raggiunge prezzi record. Nelle fincas e nelle caffetterie del paese si assaggia a una frazione del prezzo di altrove."
        },
        {
          "domanda": "Che tempo fa a Boquete?",
          "risposta": "Fresco tutto l'anno, con serate che chiedono una giacca. Il pomeriggio piove spesso, e il bajareque, una pioggerella fine, può arrivare in qualsiasi stagione: le uscite all'aperto si fanno al mattino."
        }
      ],
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Arcobaleno sulle colline verdi attorno a Boquete, negli altopiani di Chiriquí, Panama',
    immagine: '/images/panama/boquete.jpg',
  },
]
