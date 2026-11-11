import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Costa Rica in 13 giorni" (src/content/viaggi/12-costa-rica-360.md).

export const destinazioniCostaRica: Destinazione[] = [
  {
    slug: 'san-jose',
    paeseSlug: 'costa-rica',
    ordine: 1,
    nome: 'San José',
    tipologia: ['città'],
    giorniConsigliati: '1 giorno all\'arrivo, 1 al rientro',
    visitataPersonalmente: true,
    introduzione: 'Il punto di arrivo e di rientro del viaggio. Da vedere c\'è poco, ma è un buon primo assaggio di cucina e vita sociale costaricana.',
    percheAndarci: 'Come base logistica all\'arrivo e alla partenza, e per il primo e l\'ultimo casado del viaggio.',
    cosaVedere: ['Il Mercado Central', 'Il quartiere coloniale di Barrio Amón', 'Il Museo Nazionale'],
    cosaFare: [
      'Cena al Jardín de Lolita, tra food truck e tavolate tra amici',
      'Dopocena da Booze and Scoops e serata di ballo a La Concha',
      'Cena d\'arrivederci al Costa Rica Beer Factory',
    ],
    doveDormire:
      'Casa Boutique Las Orquídeas, dove abbiamo dormito sia all\'arrivo sia l\'ultima notte. È più una casa che un hotel: atmosfera familiare, staff disponibile a ogni ora, colazione preparata al momento. Qualche recensione segnala pareti sottili e camere un po\' spartane. Fascia media.\n\nAlternative: economiche: Selina San José, Costa Rica Backpackers Hostel · fascia media: Hotel Presidente, Hotel Kekoldi (Barrio Amón) · lusso: Hotel Grano de Oro, Xandari Resort & Spa (Alajuela, vicino all\'aeroporto).',
    doveMangiare: 'Jardín de Lolita e Colonia Arepas y Bar all\'arrivo; Costa Rica Beer Factory per la cena d\'arrivederci.',
    usciteSerali: 'La Concha, nel quartiere di La California, che a differenza del centro è sicuro e animato anche di sera.',
    comeArrivare: 'Volo internazionale su San José; Uber dall\'aeroporto al centro (30 min-1h, circa 14$).',
    comeSpostarsi: 'Uber, meglio dei taxi: costa circa un terzo in meno ed è più sicuro.',
    periodoMigliore: 'metà-fine novembre',
    costi: 'Uber aeroporto-centro circa 14$.',
    erroriDaEvitare: ['Evitare il centro città dopo il tramonto: meglio muoversi sempre in compagnia o in Uber', 'Cambiare valuta solo in banche o uffici autorizzati, mai per strada'],
    miaEsperienza:
      "San José merita di essere vista solo di passaggio. Carini il Mercado Central e il Museo Nazionale, quello di storia; per il resto niente di speciale. La cena al Jardín de Lolita, tra i food truck e tutti seduti insieme, è stata la serata giusta per ritrovarci dopo gli arrivi alla spicciolata.",
      "luoghi": [
        {
          "nome": "Mercado Central",
          "testo": "Il mercato coperto storico del centro, con bancarelle di cibo, caffè, artigianato e le sodas che servono il casado del giorno.",
          "come": "A piedi dal centro.",
          "quando": "Mattina e pranzo, quando le sodas lavorano di più.",
          "tempo": "1-1,5 ore",
          "consiglio": "Mangiare in una soda dentro il mercato è il modo più economico per assaggiare la cucina di casa."
        },
        {
          "nome": "Barrio Amón",
          "testo": "Quartiere con case in legno e mattoni costruite fra fine Ottocento e inizio Novecento, ex dimore dei baroni del caffè, ora con gallerie, caffè e hotel di charme.",
          "come": "A piedi, a nord del centro.",
          "quando": "Mattina, a luce buona.",
          "tempo": "1-2 ore",
          "consiglio": "Meglio non girare con il telefono in mano e di sera sono preferibili i taxi."
        },
        {
          "nome": "Museo Nazionale",
          "testo": "Ospitato nell'ex Cuartel Bellavista, con sale di storia, archeologia e natura del paese, di fronte all'Assemblea legislativa.",
          "come": "A piedi dal centro.",
          "quando": "Da martedì a sabato 8.30-16.30, domenica 9-16.30; chiuso il lunedì.",
          "tempo": "1-2 ore",
          "url": "https://www.museocostarica.go.cr/"
        },
        {
          "nome": "Teatro Nacional",
          "testo": "Il teatro neoclassico inaugurato nel 1897 con il Faust, pagato con una tassa sul caffè. Dentro c'è il celebre dipinto dell'allegoria del caffè e delle banane.",
          "come": "A piedi dal centro, sulla Plaza de la Cultura.",
          "quando": "Mattina.",
          "tempo": "1 ora",
          "url": "https://www.teatronacional.go.cr/",
          "consiglio": "Prenotare in anticipo se si vuole assistere a uno spettacolo."
        },
        {
          "nome": "Museo del Oro Precolombino",
          "testo": "I musei del Banco Central, in sale sotterranee sotto la Plaza de la Cultura, con la mostra permanente sull'oro precolombino e il museo di numismatica.",
          "come": "A piedi dal centro: Plaza de la Cultura, tra avenida 0 e 2, calle 5.",
          "quando": "Tutti i giorni, 9-16.30.",
          "tempo": "1-1,5 ore",
          "costo": "8.800 colones per gli stranieri, 6.950 per gli studenti (sito ufficiale, 2026).",
          "url": "https://www.museosdelbancocentral.org/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mercato Centrale e pranzo in una soda",
            "Teatro Nacional e Plaza de la Cultura",
            "Barrio Amón nel pomeriggio",
            "Cena in centro"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1 come sopra",
            "Giorno 2: escursione verso un vulcano (Poás o Irazú) in giornata, oppure caffè e museo Nazionale"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Barrio Amón e Otoya",
          "perChi": "chi vuole atmosfera",
          "testo": "Case storiche, caffè e un po' di vita serale; quartiere da attraversare con attenzione dopo il tramonto."
        },
        {
          "nome": "Vicino all'aeroporto (Alajuela)",
          "perChi": "arrivo o partenza tardi",
          "testo": "Hotel comodi per voli presto o tardi; poco da vedere."
        }
      ],
      "sapori": [
        {
          "nome": "Pollo, riso e fagioli",
          "testo": "Il cibo è normale, un misto tra americano e centroamericano, con tanto pollo, riso e fagioli. La frutta invece è incredibile."
        },
        {
          "nome": "Casado",
          "testo": "Il piatto del giorno con riso, fagioli, insalata, platano e carne o pesce. Si mangia nelle sodas."
        },
        {
          "nome": "Gallo pinto",
          "testo": "Riso e fagioli saltati con spezie, a colazione con uova e panna acida."
        },
        {
          "nome": "Chifrijo",
          "testo": "Riso, fagioli, cotenna e pico de gallo, uno snack da bar."
        },
        {
          "nome": "Caffè costaricano",
          "testo": "Si compra in cooperative e negozi del centro."
        }
      ],
      "attenzioni": [
        "San José offre poco al turista: è una base per un paio di giorni, non una meta.",
        "Non girare di sera nelle zone fuori dal centro turistico e nei quartieri dietro la stazione; usare taxi ufficiali o app.",
        "Borseggi nei mercati e sui bus: portare solo il necessario.",
        "Le attività in Costa Rica sono carissime e si paga quasi sempre in dollari: mettetelo in conto nel budget.",
        "La sicurezza mi ha dato una buona impressione, ma come in tutto il Centro America occhi sempre aperti."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Il centro di San José, capitale della Costa Rica',
    immagine: '/images/costa-rica/san-jose-stock.jpg',
  },
  {
    slug: 'puerto-viejo',
    paeseSlug: 'costa-rica',
    ordine: 2,
    nome: 'Puerto Viejo',
    tipologia: ['mare', 'natura', 'giungla'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'La costa caraibica della Costa Rica, girata in bicicletta tra Punta Uva, Playa Chiquita e Cocles, con il Parco Nazionale di Cahuita a un passo.',
    percheAndarci: 'Per Punta Uva, la spiaggia più bella per nuotare nei Caraibi, e per il tour di Cahuita, tra bradipi, comunità Bribrì e cioccolato tradizionale.',
    cosaVedere: ['Punta Uva', 'Playa Chiquita e Cocles', 'Il Parco Nazionale di Cahuita'],
    cosaFare: [
      'Noleggio bici da Rasta Lion per esplorare la costa',
      'Tour completo di Cahuita con la guida José (c\'è una scheda esperienza dedicata)',
      'Happy hour al tramonto a Cocles',
      'Pacuaré rafting (opzionale, da organizzare con una settimana d\'anticipo)',
    ],
    doveDormire:
      'Escape Caribeño: bungalow fronte spiaggia con piscina e un giardino tropicale molto fotografato, colazione giudicata ottima dalla maggior parte degli ospiti. Qualcuno si lamenta delle dotazioni minime in camera e del prezzo, già alto, che non include la colazione. Fascia medio-alta.\n\nAlternative: economiche: Cabinas Guaraná, Rocking J\'s · fascia media: Coco Loco Lodge · lusso: Le Cameleon Boutique Hotel, Cariblue Beach & Jungle Resort.',
    doveMangiare: 'Madre Tierra, Koki Beach Restaurant (spesso un bradipo attraversa il tetto la sera), Amimodo.',
    usciteSerali: 'Hot Rocks per la musica dal vivo, Selina per il karaoke. Di notte meglio muoversi sempre in compagnia.',
    comeArrivare: "Da San José sono circa 4-4 ore e mezza di van o di auto, scendendo dal Parco Braulio Carrillo verso Limón e poi lungo la costa; conviene fermarsi a metà strada per mangiare. Gli autobus pubblici partono dalla Gran Terminal del Caribe di San José e impiegano un po' di più, con fermate a Cahuita. Da Limón si arriva in circa un'ora e un quarto. L'aeroporto internazionale è il Juan Santamaría (SJO); dalla frontiera di Sixaola, verso Panama, sono circa 45 minuti.",
    comeSpostarsi: 'Bicicletta a noleggio, tuk tuk locali per gli spostamenti brevi (circa 4$ a persona).',
    periodoMigliore: 'tutto l\'anno tropicale',
    costi: "Noleggio bici circa 6$; tour di Cahuita 50$ a persona; Pacuaré rafting 112$; tuk tuk circa 4$ a persona per i tratti brevi. Budget giornaliero a persona, indicativo per il 2026: basso 50-80 € (cabinas o ostello, sodas, bici); medio 110-170 € (bungalow a Cocles, un tour al giorno, cene in ristorante); alto da 250 € (hotel nella foresta a Punta Uva, rafting e tour privati).",
    erroriDaEvitare: ['Prenotare il tour di Cahuita e il Pacuaré rafting con almeno una settimana d\'anticipo', 'Di notte muoversi sempre in compagnia, soprattutto le ragazze da sole'],
    miaEsperienza:
      "Abbiamo pedalato lungo la costa fino a Punta Uva, con le scimmie urlatrici che si sentivano dagli alberi sopra la testa. Cahuita bella bella: lì abbiamo visto lo squalo nutrice, le razze, vari bradipi, scimmiette di ogni tipo e altro. La comunità bribri invece è un'esperienza culturale, ma non devi immaginartela come una cosa autentica dentro la giungla, almeno per come l'ho vissuta io. È bello vedere come vivono, o vivevano, e come si fa il cioccolato, però non è tipo i Mentawai, per dire. Nella zona consiglio anche il Jaguar Rescue Center. Da qui poi siamo andati al confine con Panama.",
    luoghi: [
      {
        nome: "Parco Nazionale di Cahuita",
        testo: "Sentiero costiero fra spiaggia, foresta e mare, con una barriera corallina al largo. Si vedono bradipi, scimmie urlatrici e cappuccine, procioni, serpenti e uccelli, e si fa il bagno su una spiaggia dentro il parco.",
        come: "Ingresso principale di Playa Blanca, all'entrata del paese di Cahuita, oppure dal settore di Puerto Vargas. Il sentiero costeggia la spiaggia, in parte con guadi.",
        quando: "Mattina presto, quando gli animali sono attivi.",
        tempo: "3-4 ore",
        costo: "Settore di Playa Blanca a offerta libera; Puerto Vargas a tariffa fissa. Tour completo con guida locale 50 USD a persona in contanti, circa 43 €, ingresso compreso",
        lat: 9.73214,
        lng: -82.84006,
        consiglio: "Con una guida locale si vedono molti più animali: c'è una scheda esperienza dedicata al tour completo con la guida José, da prenotare almeno una settimana prima. Noi abbiamo visto lo squalo nutrice, le razze, vari bradipi e scimmie.",
      },
      {
        nome: "Punta Uva e Playa Chiquita",
        testo: "Spiagge di sabbia chiara a sud di Puerto Viejo, con palme e foresta alle spalle. Punta Uva è la spiaggia più bella per nuotare nei Caraibi costaricani, con l'acqua di solito calma e un promontorio con un piccolo arco di roccia.",
        come: "In bici lungo la costa da Puerto Viejo, circa quaranta minuti di pedalata; noleggio in paese.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "Mezza giornata",
        costo: "Gratis",
        lat: 9.64354,
        lng: -82.68501,
        consiglio: "Pedalare lungo la costa è il modo più semplice e più vero di conoscere il Caribe costaricano; lungo la strada si sentono le scimmie urlatrici.",
      },
      {
        nome: "Playa Cocles",
        testo: "Spiaggia lunga e frequentata vicino al paese, con onde per il surf, bagnini in alcuni tratti e bar sulla sabbia. Al tramonto è il posto dell'happy hour.",
        come: "In bici o a piedi dal paese, 5-10 minuti.",
        quando: "Tardo pomeriggio per l'happy hour.",
        tempo: "2-3 ore",
        costo: "Gratis",
        lat: 9.6478,
        lng: -82.7322,
        consiglio: "Le correnti sono forti: fare il bagno dove nuotano gli altri.",
      },
      {
        nome: "Centro di Puerto Viejo e Salsa Brava",
        testo: "Il paese sul mare, con sodas, bar reggae, negozi e la vita serale. Davanti al reef di Salsa Brava si forma una delle onde più potenti del paese, da guardare dalla spiaggia se non si è surfisti esperti.",
        come: "A piedi.",
        quando: "Sera; l'onda è migliore fra dicembre e marzo.",
        tempo: "1-2 ore",
        costo: "Gratis",
        lat: 9.65725,
        lng: -82.75421,
        consiglio: "Di notte meglio muoversi in compagnia, soprattutto le ragazze da sole.",
      },
      {
        nome: "Playa Negra",
        testo: "La spiaggia di sabbia vulcanica nera a nord del paese, lunga e poco frequentata, con le onde per i principianti di surf e la foresta fino alla sabbia.",
        come: "A piedi o in bici dal centro, pochi minuti verso Cahuita.",
        quando: "Mattina presto.",
        tempo: "1-2 ore",
        costo: "Gratis",
      },
      {
        nome: "Jaguar Rescue Center",
        testo: "Un centro che soccorre animali feriti, malati o rimasti orfani, soprattutto scimmie, bradipi, uccelli e rettili. Li cura e, quando possono tornare liberi, li rilascia nella foresta, anche dalla sua stazione di rilascio La Ceiba.",
        come: "Fra Cocles e Playa Chiquita, in bici o in tuk tuk dal paese.",
        quando: "Mattina, con la visita guidata.",
        tempo: "1,5-2 ore",
        orari: "Visite guidate tutti i giorni alle 9.30 e alle 11.30; visita privata alle 14, con posti limitati",
        lat: 9.6428,
        lng: -82.72347,
        url: "https://www.jaguarrescue.foundation/en-us/",
        consiglio: "Si entra solo con la visita guidata: prenotarla online sul loro sito.",
      },
      {
        nome: "Ara Manzanillo",
        testo: "Un progetto di reintroduzione dell'ara verde maggiore, il grande pappagallo che era scomparso dalla costa caraibica. Nella visita del pomeriggio si vedono le are libere arrivare alle piattaforme di alimentazione nella foresta.",
        come: "In auto o bici verso Manzanillo; solo su prenotazione online.",
        quando: "Visite di solito alle 15, su prenotazione",
        tempo: "1,5 ore",
        lat: 9.62569,
        lng: -82.68491,
        url: "https://aramanzanillo.org/",
      },
      {
        nome: "Manzanillo e il rifugio Gandoca-Manzanillo",
        testo: "Il villaggio dove finisce la strada costiera, alle porte del rifugio di fauna di Gandoca-Manzanillo: sentieri fra foresta, scogliere e piccole baie, con delfini al largo e coralli vicino alla riva.",
        come: "In bici o in auto, circa 13 km a sud di Puerto Viejo; il sentiero parte dalla fine del paese.",
        quando: "Mattina, con il mare calmo per lo snorkeling.",
        tempo: "Mezza giornata",
        lat: 9.63162,
        lng: -82.6581,
        consiglio: "Con una guida locale il sentiero è più sicuro e si vedono più animali.",
      },
      {
        nome: "Comunità Bribrì e laboratorio di cioccolato",
        testo: "Una visita a una comunità indigena Bribrì, dove il capo villaggio racconta le piante tradizionali e mostra le piccole rane velenose, e poi un laboratorio di cioccolato tradizionale con degustazione. È un'esperienza culturale, ma non va immaginata come una cosa autentica dentro la giungla.",
        come: "Dentro il tour completo di Cahuita, nel pomeriggio, oppure con un tour dedicato.",
        quando: "Pomeriggio.",
        tempo: "2-3 ore",
        consiglio: "Il giro di solito finisce con una cascata in fondo a una camminata breve ma ripida, dove si fa il bagno.",
      },
      {
        nome: "Fiume Pacuaré (rafting)",
        testo: "Discesa sul fiume Pacuaré, fra le gole e la foresta, tra i cinque fiumi migliori al mondo per il rafting. Quattro ore in acqua possono sembrare lunghe a chi è alla prima esperienza, soprattutto nella stagione secca, con l'acqua bassa.",
        come: "Tour organizzato lungo il tragitto fra San José e Puerto Viejo, da prenotare almeno una settimana prima.",
        quando: "Meglio nella stagione delle piogge, con più acqua.",
        tempo: "Giornata intera",
        costo: "112 USD a persona, circa 96 €",
        consiglio: "Il fiume è lontano dalla costa: è una giornata lunga, con molte ore di strada.",
      },
      {
        nome: "Frontiera di Sixaola, verso Panama",
        testo: "Da Puerto Viejo o Cahuita si arriva in bus a Sixaola, si passa il ponte binazionale sul fiume Sixaola, aperto nel 2021, e si entra a Panama a Guabito. Da lì si prosegue per Bocas del Toro.",
        come: "Bus locale fino a Sixaola, poi a piedi sul ponte. Dopo Guabito: bus o taxi collettivo fino a Changuinola e Almirante, poi water taxi per Bocas Town (circa 30 minuti).",
        quando: "La mattina presto: gli uffici di frontiera chiudono nel tardo pomeriggio.",
        tempo: "Mezza giornata fino a Bocas",
        costo: "Tassa di uscita via terra dal Costa Rica: 8 USD a persona, online sul sito del Banco de Costa Rica o ai chioschi BCR della frontiera",
        lat: 9.5579,
        lng: -82.66978,
        consiglio: "Panama può chiedere il biglietto di uscita e la prova di almeno 1.000 USD o una carta di credito. Panama è un'ora avanti rispetto al Costa Rica.",
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Mattina: bici fino a Punta Uva",
        "Pranzo di cucina caraibica",
        "Pomeriggio: Playa Cocles e happy hour",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: bici lungo la costa fino a Punta Uva, Jaguar Rescue Center la mattina",
        "Giorno 2: tour completo di Cahuita con guida, comunità Bribrì e cioccolato",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra",
        "Giorno 3: Manzanillo e il sentiero di Gandoca la mattina, Ara Manzanillo alle 15, cena in paese",
      ] },
    ],
    zone: [
      {
        nome: "Centro di Puerto Viejo",
        perChi: "vita sociale e ristoranti",
        testo: "Tutto vicino, con cabinas, ostelli e piccoli hotel, ma musica la sera, anche forte.",
        fascia: "40-100 €",
      },
      {
        nome: "Playa Cocles e Punta Uva",
        perChi: "calma e natura",
        testo: "Bungalow e cabañas nella foresta vicino alle spiagge migliori, ma serve la bici o un taxi per cena.",
        fascia: "90-200 €",
      },
      {
        nome: "Manzanillo",
        perChi: "chi vuole il villaggio più tranquillo",
        testo: "Poche strutture semplici a fine strada, accanto al rifugio di Gandoca; la sera c'è poco da fare.",
      },
    ],
      "sapori": [
        {
          "nome": "Rice and beans caraibico",
          "testo": "Riso e fagioli cotti nel latte di cocco, con pollo o pesce."
        },
        {
          "nome": "Pollo e pesce al cocco",
          "testo": "Specialità caraibica, in piccoli locali del paese."
        },
        {
          "nome": "Patacones e ceviche",
          "testo": "Platano fritto e ceviche fresco, vicino alle spiagge."
        },
        {
          "nome": "Pan bon",
          "testo": "Pane dolce caraibico con frutta, tipico di queste coste."
        }
      ],
      "attenzioni": [
        "Furti nelle spiagge e nei bungalow: non lasciare nulla incustodito.",
        "Il mare e le correnti a Playa Cocles sono forti: bagno con prudenza.",
        "Il tempo caraibico è più piovoso e imprevedibile del Pacifico: lasciare margine di giorni."
      ],
    gite: [
      {
        nome: "Bocas del Toro (Panama)",
        distanza: "mezza giornata di viaggio via Sixaola",
        come: "Bus fino a Sixaola, ponte a piedi, poi bus o taxi collettivo fino ad Almirante e water taxi; meglio con qualche notte.",
        testo: "L'arcipelago caraibico di Panama, con le case su palafitte di Bocas Town, le spiagge di Isla Bastimentos e le stelle marine di Playa Estrella.",
      },
      {
        nome: "Paese di Cahuita",
        distanza: "circa 16 km, 20 minuti",
        come: "In bus, taxi o bici.",
        testo: "Il villaggio più piccolo e lento della costa, con la Playa Negra di Cahuita, sodas di cucina caraibica e l'ingresso a offerta libera del parco.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Puerto Viejo?",
        risposta: "Due giorni bastano per la costa in bici e il parco di Cahuita; con un terzo si aggiungono Manzanillo, Gandoca e Ara Manzanillo. Il tempo è imprevedibile: un giorno di margine aiuta.",
      },
      {
        domanda: "Quale spiaggia è migliore per nuotare?",
        risposta: "Punta Uva, con l'acqua di solito calma; a Cocles e Playa Negra ci sono onde e correnti, meglio per il surf. Il bagno si fa dove nuotano gli altri.",
      },
      {
        domanda: "Si paga l'ingresso al Parco di Cahuita?",
        risposta: "All'ingresso di Playa Blanca, nel paese di Cahuita, si lascia un'offerta libera; il settore di Puerto Vargas ha una tariffa fissa. Con il tour guidato l'ingresso è di solito compreso.",
      },
      {
        domanda: "Puerto Viejo è sicuro?",
        risposta: "Di giorno sì, con le normali attenzioni: i furti in spiaggia e nei bungalow sono frequenti. Di notte conviene muoversi in compagnia, soprattutto le ragazze da sole.",
      },
      {
        domanda: "Come si va da Puerto Viejo a Bocas del Toro?",
        risposta: "In bus fino a Sixaola, a piedi sul ponte fino a Guabito, poi bus o taxi collettivo fino ad Almirante e water taxi per Bocas Town. All'uscita si pagano 8 dollari di tassa e Panama è un'ora avanti.",
      },
      {
        domanda: "Quando andare sulla costa caraibica?",
        risposta: "Si va tutto l'anno; settembre e ottobre sono spesso i mesi più asciutti qui, al contrario del Pacifico. Il tempo resta più piovoso e imprevedibile: conviene lasciare margine.",
      },
    ],
    esperienzeSlugs: ['tour-cahuita'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'La spiaggia caraibica di Punta Uva vicino a Puerto Viejo, Costa Rica',
    immagine: '/images/costa-rica/puerto-viejo-stock.jpg',
  },
  {
    slug: 'tortuguero',
    paeseSlug: 'costa-rica',
    ordine: 3,
    nome: 'Tortuguero',
    tipologia: ['natura', 'giungla'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'Un piccolo villaggio senza strade per auto, raggiungibile solo in barca lungo i canali della giungla, con il kayak all\'alba tra le mangrovie.',
    percheAndarci: 'Per il tragitto in barca, che è già uno dei trasferimenti più belli del viaggio.',
    cosaVedere: ['I canali di Tortuguero, tra coccodrilli, caimani e uccelli', 'Cerro Tortuguero, collina panoramica con vista su tutta l\'area'],
    cosaFare: [
      'Navigazione in barca da Moín a Tortuguero (c\'è una scheda esperienza dedicata)',
      'Kayak all\'alba tra le mangrovie (c\'è una scheda esperienza dedicata)',
      'Cerro Tortuguero in autonomia',
      'Escursione notturna alla nidificazione delle tartarughe (stagionale, luglio-ottobre)',
    ],
    doveDormire:
      'Hotel Icaco Tortuguero: posizione comoda, proprio davanti alla spiaggia del parco, check-in e check-out rapidi. Alcune recensioni giudicano le camere piccole ed essenziali rispetto al prezzo. Fascia medio-bassa.\n\nAlternative: economiche: La Casona de Tortuguero, Cabinas Miss Junie · fascia media: Aracari Garden Hotel · lusso: Tortuga Lodge & Gardens, Manatus Hotel.',
    doveMangiare: 'Taylor\'s Place o Mi Niño in paese; cena inclusa in hotel.',
    comeArrivare: "Al villaggio non arrivano strade: ci si arriva solo in barca o con un piccolo aereo. Da Puerto Viejo o da Limón si va in van fino al porto di Moín (circa 1h30) e poi si fanno 3 ore di navigazione lungo i canali. Da San José la via più usata passa da Cariari fino al molo di La Pavona, dove si prende la barca per il villaggio; molti lodge vendono il trasferimento completo. La pista di Tortuguero riceve voli nazionali da San José.",
    comeSpostarsi: 'A piedi: il villaggio non ha strade per auto. Kayak e barca per le escursioni.',
    periodoMigliore: 'luglio-ottobre per la nidificazione delle tartarughe',
    costi: "Cerro Tortuguero 6$ barca + 3$ ingresso; escursione notturna tartarughe circa 40$ a persona; parco nazionale intorno ai 15 dollari, da comprare online sul portale del SINAC. Budget giornaliero a persona, indicativo per il 2026: basso 60-90 € (cabinas in paese, sodas, escursioni condivise); medio 130-190 € (hotel con cena, kayak e uscite guidate); alto da 250 € (pacchetto in lodge sui canali con trasferimenti, pasti e tour).",
    erroriDaEvitare: [],
    miaEsperienza:
      "Tortuguero è bellissimo. Assomiglia molto all'Amazzonia ed è fantastico per la natura. Già il tragitto in barca da Moín, tra canali di giungla con coccodrilli e scimmie sulle rive, è stato uno dei trasferimenti più belli di tutto il viaggio.",
    luoghi: [
      {
        nome: "Canali di Tortuguero",
        testo: "Una rete di canali di mangrovie e foresta nel nord-est, abitata da caimani, coccodrilli, scimmie, aironi e martin pescatori. Assomiglia molto all'Amazzonia; si naviga in barca con motore a basso impatto, con una guida.",
        come: "Uscita in barca dal villaggio con guida e biglietto del parco.",
        quando: "Mattina presto, per animali e luce.",
        tempo: "2-3 ore",
        costo: "Ingresso al parco intorno ai 15 USD, circa 13 €, online sul portale del SINAC, più la barca e la guida",
        lat: 10.4232,
        lng: -83.4967,
        url: "https://serviciosenlinea.sinac.go.cr/",
        consiglio: "Il trasferimento da Moín, tra canali e giungla, è uno dei più belli del viaggio e vale come esperienza a sé.",
      },
      {
        nome: "Kayak all'alba nelle mangrovie",
        testo: "Due ore di kayak in silenzio fra i canali laterali, in singolo o in doppio, senza motore, per avvicinarsi a uccelli e rettili nel momento migliore della giornata. Esiste una scheda esperienza dedicata.",
        come: "Con guida del lodge, partenza prima dell'alba.",
        quando: "Alba, rientrando per colazione.",
        tempo: "2 ore",
      },
      {
        nome: "Cerro Tortuguero",
        testo: "Una collina vulcanica a nord del villaggio, l'unico rilievo della zona, con una breve salita nella giungla fino al belvedere su canali, mare e foresta.",
        come: "In autonomia: breve traversata in barca dal villaggio fino all'inizio del sentiero.",
        quando: "Mattina o pomeriggio del giorno di arrivo.",
        tempo: "1-1,5 ore",
        costo: "6 USD di barca più 3 USD d'ingresso, circa 8 €",
        lat: 10.5851,
        lng: -83.5278,
        consiglio: "Portare acqua e repellente: nel bosco umido le zanzare sono tante.",
      },
      {
        nome: "Nidificazione delle tartarughe",
        testo: "In stagione le tartarughe verdi depongono sulla spiaggia di notte: Tortuguero è uno dei siti di nidificazione più importanti dell'Atlantico. Si osservano solo con guide certificate, in gruppi piccoli e con regole severe.",
        come: "Escursione notturna con guida certificata, prenotata in paese.",
        quando: "Notte, di solito fra luglio e ottobre; conviene chiedere in loco.",
        tempo: "2-3 ore",
        costo: "Circa 40 USD a persona, circa 34 €",
        consiglio: "Vestiti scuri, niente luci né flash: si segue la guida e si mantiene la distanza.",
      },
      {
        nome: "Sentiero El Gavilán",
        testo: "Il sentiero a piedi del parco nazionale, dalla stazione di Cuatro Esquinas a sud del villaggio, fra foresta allagata e spiaggia. Si vedono scimmie urlatrici, rane e uccelli; spesso si cammina nel fango.",
        come: "A piedi dal villaggio; all'ingresso si noleggiano stivali di gomma.",
        quando: "Mattina.",
        tempo: "1,5-2 ore",
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Spiaggia di Tortuguero",
        testo: "La lunga spiaggia di sabbia scura sul Caribe davanti al villaggio, dove nidificano le tartarughe. È bella da camminare, ma non si fa il bagno: correnti forti e mare aperto.",
        come: "A piedi dal villaggio.",
        quando: "Tramonto.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 10.54225,
        lng: -83.50175,
      },
      {
        nome: "Centro visitatori della Sea Turtle Conservancy",
        testo: "Il piccolo museo dell'organizzazione che studia le tartarughe di Tortuguero dagli anni Cinquanta, con pannelli e video sulla vita delle tartarughe verdi. È un buon modo per capire cosa si vedrà di notte.",
        come: "A piedi, all'estremità nord del villaggio.",
        quando: "Pomeriggio, prima dell'escursione notturna.",
        tempo: "30-45 minuti",
        lat: 10.54715,
        lng: -83.50502,
      },
      {
        nome: "Villaggio di Tortuguero",
        testo: "Un villaggio senza strade per le auto, fra il canale e il mare, con case di legno colorate, negozietti di souvenir e sodas. Si gira tutto a piedi; davanti al molo ci sono un piccolo supermercato e un serbatoio di acqua potabile gratuita.",
        come: "A piedi dal molo.",
        quando: "Pomeriggio e sera.",
        tempo: "1 ora",
        costo: "Gratis",
      },
    ],
    programmi: [
      { titolo: "Lungo il percorso da Moín", tappe: [
        "1h30 di van fino al porto di Moín",
        "3 ore di barca lungo i canali, con pranzo a bordo",
        "Pomeriggio: villaggio e Cerro Tortuguero",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: barca da Moín, villaggio, Cerro Tortuguero, tartarughe la sera in stagione",
        "Giorno 2: kayak all'alba, colazione, partenza in barca verso Sarapiquí o La Pavona",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorno 1: arrivo, villaggio e spiaggia al tramonto",
        "Giorno 2: kayak all'alba, sentiero El Gavilán, centro della Sea Turtle Conservancy, nidificazione notturna in stagione",
        "Giorno 3: canali in barca la mattina, Cerro Tortuguero e partenza",
      ] },
    ],
    zone: [
      {
        nome: "Lodge sui canali",
        perChi: "chi vuole immergersi nella natura",
        testo: "Pacchetti con pasti, escursioni e trasferimenti, isolati e silenziosi sull'altra sponda del canale. Spesso gli unici servizi sono quelli del lodge.",
        fascia: "da 250 € a persona in pacchetto",
      },
      {
        nome: "Villaggio di Tortuguero",
        perChi: "budget e indipendenza",
        testo: "Cabinas semplici e piccoli hotel, ristoranti e guide a piedi, con il rumore del paese.",
      },
      {
        nome: "Fronte spiaggia del parco",
        perChi: "comodità",
        testo: "Hotel in paese davanti alla spiaggia, comodi per la nidificazione e l'ingresso al sentiero; camere spesso piccole ed essenziali.",
      },
    ],
      "sapori": [
        {
          "nome": "Casado caraibico",
          "testo": "Riso, fagioli, pesce o pollo al cocco."
        },
        {
          "nome": "Pesce di fiume e mare",
          "testo": "Gamberi e pesce fresco, fritti o alla piastra."
        },
        {
          "nome": "Frutta tropicale",
          "testo": "Papaya, ananas e banane dei dintorni."
        },
        {
          "nome": "Gallo pinto",
          "testo": "A colazione, con uova e plátano."
        }
      ],
      "attenzioni": [
        "La regione è molto piovosa tutto l'anno: giacca impermeabile e custodie.",
        "Nel parco le regole sulla nidificazione sono severe: niente luci, niente flash, solo con guida autorizzata.",
        "Zanzare e umidità: repellente e abiti leggeri a maniche lunghe."
      ],
    gite: [
      {
        nome: "Parismina",
        distanza: "a sud lungo i canali, in barca",
        come: "Barca privata o sosta lungo il trasferimento da Moín.",
        testo: "Un villaggio afro-caraibico fra il canale e il mare, con un progetto comunitario di protezione delle tartarughe e molta meno gente di Tortuguero.",
      },
      {
        nome: "Barra del Colorado",
        distanza: "a nord lungo i canali, in barca",
        come: "Barca privata da Tortuguero; si organizza con il lodge.",
        testo: "Il rifugio di fauna selvatica più grande del Caribe costaricano, verso il confine con il Nicaragua, con lagune, foresta allagata e pesca sportiva del tarpon.",
      },
    ],
    faq: [
      {
        domanda: "Come si arriva a Tortuguero?",
        risposta: "Solo in barca o in aereo: da Moín, vicino a Limón, sono 3 ore di navigazione; da San José si passa da Cariari e dal molo di La Pavona. Molti lodge vendono il trasferimento completo.",
      },
      {
        domanda: "Quanti giorni servono a Tortuguero?",
        risposta: "Una notte basta per il viaggio in barca, il Cerro e il kayak all'alba; con due notti si aggiungono il sentiero del parco e, in stagione, la nidificazione senza correre.",
      },
      {
        domanda: "Quando si vedono le tartarughe?",
        risposta: "Le tartarughe verdi nidificano di solito fra luglio e ottobre, ma la stagione va confermata in loco. Si esce solo di notte con guide certificate.",
      },
      {
        domanda: "Si fa il bagno a Tortuguero?",
        risposta: "In mare no: correnti forti e onde del mare aperto sconsigliano il bagno. Molti lodge hanno una piscina.",
      },
      {
        domanda: "Serve un pacchetto o si può andare da soli?",
        risposta: "Si può andare da soli, prendendo barca, cabinas e guide in paese. I pacchetti dei lodge costano di più ma includono trasferimenti, pasti e uscite.",
      },
      {
        domanda: "Che tempo fa a Tortuguero?",
        risposta: "Piove molto tutto l'anno, anche nei mesi considerati secchi altrove. Servono giacca impermeabile, custodie per telefono e macchina fotografica e abiti leggeri a maniche lunghe.",
      },
    ],
    esperienzeSlugs: ['barca-tortuguero', 'kayak-tortuguero'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Un canale di giungla verso il villaggio di Tortuguero, Costa Rica',
    immagine: '/images/costa-rica/tortuguero-stock.jpg',
  },
  {
    slug: 'sarapiqui',
    paeseSlug: 'costa-rica',
    ordine: 4,
    nome: 'Sarapiquí',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'Un lodge immerso nella foresta, con rafting sul fiume Sarapiquí e una cooking class per imparare a preparare piatti tradizionali.',
    percheAndarci: 'Per il rafting sul Sarapiquí, più regolare e adatto anche ai principianti rispetto al più estremo Pacuaré.',
    cosaVedere: ['La foresta intorno all\'Epic Adventure Lodge', 'Le Cataratas Bajas del Toro (escursione facoltativa)'],
    cosaFare: [
      'Rafting sul fiume Sarapiquí (c\'è una scheda esperienza dedicata)',
      'Cooking class inclusa al lodge (tipicamente empanadas)',
      'Escursione facoltativa alle Cataratas Bajas del Toro',
    ],
    doveDormire:
      'Epic Adventure Lodge, apprezzato per la vicinanza al fiume, la colazione abbondante e il calore dei proprietari. L\'unica nota stonata sono piccole mancanze, come zanzariere e ganci per gli asciugamani. Fascia media.\n\nAlternative: economiche: Hotel El Bambú, Perla Verde Hostel · fascia media: La Quinta de Sarapiquí Lodge · lusso: Sueño Azul Resort, Islas del Río.',
    doveMangiare: 'La cooking class al lodge, che diventa anche la cena; Restaurante Mirador Tinamú.',
    comeArrivare: '1h30 in barca da Tortuguero più 2h30 in van.',
    comeSpostarsi: 'Van privato; a piedi nel lodge.',
    periodoMigliore: 'tutto l\'anno, il Sarapiquí è più costante del Pacuaré',
    costi: 'Pranzo al sacco per Bajos del Toro circa 12$ a persona.',
    erroriDaEvitare: ['Fare scorta di bibite al supermercato lungo il tragitto prima di arrivare al lodge'],
    miaEsperienza:
      'La cooking class al lodge, con le empanadas preparate a mano che poi sono diventate la nostra cena, è stato un momento conviviale diverso dal resto del viaggio, più lento e più vero.',
      "luoghi": [
        {
          "nome": "Rafting sul Río Sarapiquí",
          "testo": "Discesa sul fiume tra rapide e foresta. Esiste una scheda esperienza dedicata.",
          "come": "Tour organizzato dal lodge o da operatori della zona, con guida e attrezzatura.",
          "quando": "Mattina.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Cooking class al lodge",
          "testo": "Lezione di cucina costaricana, tipicamente empanadas fatte a mano che diventano la cena.",
          "come": "Inclusa nel pacchetto del lodge.",
          "quando": "Pomeriggio.",
          "tempo": "2 ore",
          "consiglio": "Un momento conviviale, più lento e più vero del resto del viaggio."
        },
        {
          "nome": "Foresta del lodge",
          "testo": "Sentieri nella foresta intorno al lodge, con uccelli, rane e scimmie.",
          "come": "A piedi dal lodge con guida.",
          "quando": "Alba.",
          "tempo": "1-2 ore"
        },
        {
          "nome": "Catarata del Toro",
          "testo": "Una cascata che cade dentro un antico cratere vulcanico, nella foresta di Bajos del Toro, con quattro belvedere in alto. Escursione opzionale.",
          "come": "In auto o con un tour; si trova circa a metà strada fra l'aeroporto di San José e La Fortuna, su strada asfaltata. Non serve prenotare.",
          "quando": "Da lunedì a sabato 7-17; chiusa la domenica.",
          "tempo": "Mezza giornata",
          "costo": "15 USD (sito ufficiale, 2026).",
          "url": "https://www.catarata-del-toro.com/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: rafting",
            "Pranzo al lodge",
            "Pomeriggio: cooking class"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: rafting e cooking class",
            "Giorno 2: sentieri nella foresta del lodge, poi trasferimento verso Arenal"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lodge nella foresta",
          "perChi": "chi cerca natura",
          "testo": "Sistemazioni isolate, con attività incluse, ma lontane dai paesi."
        }
      ],
      "sapori": [
        {
          "nome": "Empanadas",
          "testo": "Fatte a mano in cooking class."
        },
        {
          "nome": "Casado",
          "testo": "Il piatto del giorno con riso e fagioli."
        },
        {
          "nome": "Frutta tropicale",
          "testo": "Ananas e banane della regione."
        },
        {
          "nome": "Caffè e cacao",
          "testo": "Coltivati nella zona; da assaggiare nei lodge."
        }
      ],
      "attenzioni": [
        "Rafting: indossare sempre casco e giubbotto forniti dall'operatore e seguire la guida.",
        "La zona è piovosa e umida: impermeabile e ricambio.",
        "Zanzare e insetti: repellente."
      ],
    esperienzeSlugs: ['rafting-sarapiqui'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'La foresta pluviale intorno a un lodge a Sarapiquí, Costa Rica',
    immagine: '/images/costa-rica/sarapiqui-stock.jpg',
  },
  {
    slug: 'arenal',
    paeseSlug: 'costa-rica',
    ordine: 5,
    nome: 'Arenal e La Fortuna',
    tipologia: ['natura', 'vulcani'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione: 'Il vulcano Arenal, la Cascada de La Fortuna e le sorgenti termali gratuite di El Chollín, molto più autentiche delle terme a pagamento "da cartolina".',
    percheAndarci: 'Per le sorgenti termali gratuite di El Chollín, uno dei momenti più belli e meno "da cartolina" di tutto il viaggio.',
    cosaVedere: ['Il vulcano Arenal', 'La Cascada de La Fortuna', 'Le sorgenti termali di El Chollín'],
    cosaFare: [
      'Bagno alla Cascada de La Fortuna (c\'è una scheda esperienza dedicata)',
      'Trekking al vulcano al Mirador El Silencio (opzionale)',
      'Ponti sospesi di Mistico Hanging Bridges (opzionale)',
      'Sorgenti termali gratuite di El Chollín',
      'Canyoning nel Lost Canyon (l\'abbiamo fatto: è l\'attività che consiglio di più a La Fortuna)',
    ],
    doveDormire:
      'Hotel Campos Arenal: tra i punti di forza più citati ci sono la vista sul vulcano dalla piscina, la colazione abbondante e la posizione comoda. Il difetto ricorrente è il vialetto sterrato d\'accesso, scivoloso quando piove. Fascia media.\n\nAlternative: economiche: Arenal Backpackers Resort, Gringo Pete\'s · fascia media: Volcano Lodge & Springs · lusso: Nayara Springs, Tabacón Thermal Resort & Spa.',
    doveMangiare: 'Nanku Restaurant con musica dal vivo; Soda Víquez per la cucina tradizionale ed economica; Spectacular Cantina (messicano).',
    usciteSerali: 'Selina o Lava Lounge.',
    comeArrivare: "Da Sarapiquí sono circa 1 ora e 20 di van. Da San José e dall'aeroporto Juan Santamaría (SJO) ci vogliono circa 3 ore in auto, passando per San Ramón o Ciudad Quesada; gli autobus pubblici partono da San José, spesso con cambio a Ciudad Quesada, e impiegano di più. Dall'aeroporto di Liberia (LIR) sono circa 2,5-3 ore. Da e per Monteverde si fa la strada di montagna intorno al lago, circa 3-3,5 ore, oppure il trasferimento jeep-barca-jeep che attraversa il Lago Arenal.",
    comeSpostarsi: 'Minivan a disposizione per tutta la giornata.',
    periodoMigliore: 'tardo pomeriggio per le sorgenti termali',
    costi: "Cascada de La Fortuna 18-20$; tour combo 90-120$ a persona; canyoning Lost Canyon 115-119$. Le attività di La Fortuna sono care: si scelgono poche cose fatte bene. Budget giornaliero a persona, indicativo per il 2026: basso 60-90 € (ostello, sodas, El Chollín gratis e la cascata); medio 140-200 € (hotel con vista vulcano, un'attività al giorno); alto da 300 € (resort termale, canyoning e tour privati).",
    erroriDaEvitare: ['Alle sorgenti di El Chollín non ci sono spogliatoi: bastano scarpe da fiume, costume e torcia frontale, senza asciugamani'],
    miaEsperienza:
      "La Fortuna è bella, ma un po' overtouristy. Le attività sono care, però belle belle, soprattutto il canyoning, che abbiamo fatto e che consiglio. Le sorgenti termali gratuite di El Choyin, in un tratto di fiume naturale, ci sono sembrate molto più autentiche delle terme a pagamento della zona.",
    luoghi: [
      {
        nome: "Cascada de La Fortuna",
        testo: "Cascata di circa 70 metri in una gola di foresta, con circa 530 gradini fra discesa e risalita e una pozza per il bagno alla base. È probabilmente la cascata più fotografata del paese. Esiste una scheda esperienza dedicata.",
        come: "Pochi minuti in auto o taxi dal paese di La Fortuna, poi scale ripide fino alla base.",
        quando: "La mattina, con meno folla.",
        tempo: "2 ore",
        costo: "20 USD per gli stranieri, circa 17 € (2025); si paga anche solo per il belvedere",
        orari: "Tutti i giorni 7-17",
        lat: 10.43919,
        lng: -84.66933,
        url: "https://www.cataratariofortuna.com/",
        consiglio: "Il ritorno è tutto in salita: scarpe con presa e acqua.",
      },
      {
        nome: "Il fiume termale gratuito di El Chollín",
        testo: "Un tratto del fiume Tabacón con acqua calda naturale e accesso pubblico, a pochi passi dai resort termali. Da non confondere con El Choyín, un complesso a pagamento sullo stesso fiume. È uno dei momenti più belli e meno da cartolina della zona.",
        come: "In auto o taxi da La Fortuna; si parcheggia sulla strada, spesso con un custode, e si scende a piedi al fiume per un breve tratto.",
        quando: "Tardo pomeriggio, oppure mattina presto: nei fine settimana e nei festivi è pieno.",
        tempo: "1-2 ore",
        costo: "Gratis",
        lat: 10.49145,
        lng: -84.72491,
        consiglio: "Non ci sono docce, armadietti né spogliatoi: scarpe da fiume, costume e una frontale in una sacca impermeabile, niente oggetti di valore in auto.",
      },
      {
        nome: "Ponti sospesi di Mistico",
        testo: "Un sentiero di circa 3,2 km nella foresta vicino all'Arenal, con 16 ponti, di cui 6 sospesi; i più alti passano a circa 45 metri sopra la foresta. C'è chi lo trova un po' sotto le aspettative: con una guida si vedono molti più animali.",
        come: "In auto o taxi da La Fortuna; si va da soli o con una guida, che va prenotata.",
        quando: "Mattina presto, per gli animali.",
        tempo: "2-3 ore",
        costo: "Da 32 USD più tasse da soli, da 44 USD con la guida, circa 28-38 € (2026)",
        orari: "Tutti i giorni dalle 6; ultimo ingresso al sentiero alle 15.50",
        lat: 10.48805,
        lng: -84.75378,
        url: "https://www.misticopark.com/",
      },
      {
        nome: "Parco Nazionale Vulcano Arenal",
        testo: "Il parco statale intorno al vulcano, con sentieri sulle colate di lava del 1992, un grande albero di ceiba e i belvedere sul cono e sul lago. Sul cratere non si sale: il vulcano è a riposo dal 2010 ma la vetta resta chiusa.",
        come: "In auto, circa 30 minuti da La Fortuna verso il lago; biglietti sul portale del SINAC.",
        quando: "Mattina, quando il cono è più spesso libero dalle nuvole.",
        tempo: "2-3 ore",
        lat: 10.46306,
        lng: -84.70306,
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Arenal 1968",
        testo: "Una riserva privata accanto al parco nazionale, con sentieri nella foresta e sulla colata di lava dell'eruzione del 1968, che distrusse i villaggi ai piedi del vulcano. Dal sentiero più lungo, circa due ore, si vedono il cono e il lago insieme.",
        come: "In auto o taxi da La Fortuna, sulla strada verso il parco nazionale.",
        quando: "Mattina presto o tardo pomeriggio.",
        tempo: "2 ore",
        lat: 10.46641,
        lng: -84.73621,
        url: "https://www.arenal1968.com/",
      },
      {
        nome: "Mirador El Silencio",
        testo: "Un trekking nella foresta sulle pendici del vulcano fino a un belvedere con ottime viste sul cono. È una delle tre attività del tour combo più comune di La Fortuna, insieme alla cascata e alle terme.",
        come: "Da soli o dentro il tour combo da 90 dollari con cascata e terme.",
        quando: "Mattina, prima che le nuvole coprano il vulcano.",
        tempo: "2 ore",
        costo: "Circa 10 USD da solo, circa 9 €",
      },
      {
        nome: "Canyoning nel Lost Canyon",
        testo: "Discesa in corda doppia lungo cascate e pareti di roccia in una gola della foresta, con un operatore che fornisce attrezzatura e trasporto. È l'attività che consiglio di più a La Fortuna: molto adrenalinica, solo con operatori seri.",
        come: "Prenotazione con l'operatore, con trasporto dall'hotel e pranzo incluso.",
        quando: "La mattina, oppure il primo pomeriggio.",
        tempo: "Mezza giornata",
        costo: "115-119 USD a persona, circa 100 €",
      },
      {
        nome: "Terme di Tabacón",
        testo: "Il resort termale più famoso della zona, costruito sul fiume caldo Tabacón, con piscine e cascate d'acqua termale nel giardino tropicale. Molti resort vendono un pass giornaliero con cena; costa caro rispetto al fiume gratuito.",
        come: "In auto o taxi, circa 15 minuti da La Fortuna; pass giornaliero da prenotare.",
        quando: "Sera, dopo una giornata di attività.",
        tempo: "3 ore",
        lat: 10.48781,
        lng: -84.72299,
        consiglio: "Per terme più semplici e con barbecue ci sono anche le Termalitas del Arenal, a pagamento.",
      },
      {
        nome: "Lago Arenal e diga di Sangregado",
        testo: "Il lago artificiale più grande del paese, a ovest del vulcano, nato con la diga di Sangregado. Dalla diga e dalla strada che costeggia la riva ci sono i belvedere più ampi sull'Arenal, e la sera si vedono spesso coati sul ciglio della strada.",
        come: "In auto, circa 30 minuti da La Fortuna; sulla diga si passa in auto.",
        quando: "Tramonto.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 10.4752,
        lng: -84.76079,
        consiglio: "Non dare cibo ai coati, anche se si avvicinano alle auto.",
      },
      {
        nome: "Paese di La Fortuna",
        testo: "Il paese ai piedi del vulcano, con la chiesa e il parco centrale da cui si vede il cono quando è libero dalle nuvole. Ha agenzie, sodas e ristoranti per tutte le tasche ed è la base di tutte le escursioni.",
        come: "A piedi.",
        quando: "Sera, per cena.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 10.47144,
        lng: -84.64472,
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Mattina: Cascada de La Fortuna",
        "Pranzo a La Fortuna",
        "Pomeriggio: Mirador El Silencio o ponti sospesi di Mistico",
        "Tardo pomeriggio: fiume termale gratuito di El Chollín",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: cascata, ponti sospesi e terme",
        "Giorno 2: canyoning nel Lost Canyon la mattina, parco nazionale o Arenal 1968 nel pomeriggio, tramonto sulla diga",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra",
        "Giorno 3: Río Celeste nel Parco Nazionale del Vulcano Tenorio, oppure una serata a Tabacón",
      ] },
    ],
    zone: [
      {
        nome: "La Fortuna",
        perChi: "servizi e tour",
        testo: "Il paese ha ristoranti, agenzie e hotel, molti con vista sul vulcano; tutto a piedi o in pochi minuti di taxi.",
        fascia: "70-150 €",
      },
      {
        nome: "Strada del vulcano",
        perChi: "terme e lusso",
        testo: "Resort con piscine termali e lodge nella foresta fra La Fortuna e il lago; serve l'auto per cenare fuori.",
        fascia: "150-280 €",
      },
      {
        nome: "El Castillo",
        perChi: "chi cerca silenzio",
        testo: "Un villaggio sul lato sud del lago, con cabañas e piccoli lodge affacciati sul vulcano; strada in parte sterrata.",
      },
    ],
      "sapori": [
        {
          "nome": "Casado",
          "testo": "Riso, fagioli, insalata e carne o pesce."
        },
        {
          "nome": "Gallo pinto",
          "testo": "A colazione, con uova."
        },
        {
          "nome": "Olla de carne",
          "testo": "Stufato di manzo con yuca, platano e mais."
        },
        {
          "nome": "Pesce di lago",
          "testo": "Tilapia fritta, nei ristoranti della zona."
        }
      ],
      "attenzioni": [
        "La salita alla Cascada de La Fortuna è lunga e il ritorno è tutto in salita.",
        "Le terme a pagamento sono care: valutare quelle gratuite.",
        "Canyoning: molto adrenalinico, solo con operatori seri. Noi l'abbiamo fatto ed è bellissimo.",
        "La Fortuna è un po' overtouristy e le attività costano care: scegliere poche cose fatte bene."
      ],
    gite: [
      {
        nome: "Río Celeste",
        distanza: "circa 1,5-2 ore",
        come: "In auto o tour organizzato; ingresso al Parco Nazionale del Vulcano Tenorio da prenotare sul portale del SINAC.",
        testo: "Il fiume dall'acqua azzurro latte nella foresta del Tenorio, con una cascata e il punto in cui due torrenti si incontrano e cambiano colore. Nel parco non si fa il bagno.",
      },
      {
        nome: "Bajos del Toro",
        distanza: "circa 1,5-2 ore",
        come: "In auto; l'area chiude nel tardo pomeriggio, quindi si arriva entro il primo pomeriggio.",
        testo: "La «capitale delle cascate» del Costa Rica, con la Catarata del Toro e le cascate gemelle in una valle fra due parchi nazionali. È più tranquilla della Fortuna.",
      },
      {
        nome: "Caño Negro",
        distanza: "circa 1,5-2 ore a nord",
        come: "Tour di giornata con giro in barca sul Río Frío, oppure in auto fino al villaggio.",
        testo: "Rifugio di zone umide vicino al confine con il Nicaragua, con caimani, aironi, spatole e martin pescatori. La stagione secca concentra gli uccelli nelle lagune.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a La Fortuna?",
        risposta: "Un giorno basta per cascata, un trekking e le terme; con due giorni si aggiungono il canyoning, il parco nazionale e il lago. Il terzo giorno serve per il Río Celeste.",
      },
      {
        domanda: "Ci sono terme gratuite a La Fortuna?",
        risposta: "Sì, il tratto pubblico del fiume Tabacón a El Chollín, senza servizi. I resort come Tabacón o le Termalitas del Arenal sono a pagamento, con piscine, docce e cena.",
      },
      {
        domanda: "Si sale sul vulcano Arenal?",
        risposta: "No, la vetta è chiusa. Si camina sulle pendici e sulle vecchie colate nel parco nazionale, ad Arenal 1968 o al Mirador El Silencio.",
      },
      {
        domanda: "Quanto costa la Cascada de La Fortuna?",
        risposta: "20 dollari per gli stranieri (2025), aperta tutti i giorni dalle 7 alle 17. Si scendono circa 530 gradini fra andata e ritorno.",
      },
      {
        domanda: "Meglio La Fortuna o Monteverde?",
        risposta: "Sono diverse e di solito si fanno entrambe: La Fortuna ha il vulcano, le cascate e le terme; Monteverde la foresta nebulosa, le camminate notturne e le zipline più lunghe. Fra le due ci sono circa 3-3,5 ore di strada.",
      },
      {
        domanda: "Quando si vede il vulcano senza nuvole?",
        risposta: "Di solito la mattina presto e nella stagione secca, da dicembre ad aprile. Nel resto dell'anno il cono resta spesso coperto, ma si apre a tratti.",
      },
    ],
    esperienzeSlugs: ['cascata-fortuna-termales'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Il vulcano Arenal visto da La Fortuna, Costa Rica',
    immagine: '/images/copertine/costa-rica-360.jpg',
  },
  {
    slug: 'monteverde',
    paeseSlug: 'costa-rica',
    ordine: 6,
    nome: 'Monteverde',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione: 'La foresta nebulosa di Monteverde, con una piantagione di caffè, una camminata notturna per la fauna e alcune delle migliori zipline del paese.',
    percheAndarci: 'Per la foresta nebulosa e per le zipline, considerate tra le migliori della Costa Rica e più lunghe di quelle di La Fortuna.',
    cosaVedere: ['La foresta nebulosa di Monteverde', 'Una piantagione di caffè'],
    cosaFare: [
      'Visita a una piantagione di caffè con degustazione',
      'Camminata notturna nella foresta nebulosa (c\'è una scheda esperienza dedicata)',
      'Zipline avventura (c\'è una scheda esperienza dedicata)',
      'Birdwatching all\'alba (opzionale, guida Jason)',
    ],
    doveDormire:
      'Hotel Jardines de Monteverde: giardini curati, molta fauna da osservare senza uscire dalla struttura, staff sempre citato come gentile. Alcune recensioni più recenti segnalano camere e bagni un po\' datati. Fascia medio-bassa.\n\nAlternative: economiche: Pensión Santa Elena, Monteverde Backpackers · fascia media: Cloud Forest Lodge · lusso: Hotel Belmar, Monteverde Lodge & Gardens.',
    doveMangiare: 'Tree House (supermercato accanto); Tico y Rico, The Green Restaurant, Sabor Tico.',
    comeArrivare: "Da La Fortuna sono circa 3-3,5 ore di van su strade di montagna lente e piene di curve, oppure il trasferimento jeep-barca-jeep attraverso il Lago Arenal. Da San José e dall'aeroporto Juan Santamaría ci vogliono circa 3,5-4 ore: si lascia la Interamericana e gli ultimi chilometri salgono fino a Santa Elena, a circa 1.400 metri. Gli autobus pubblici partono da San José e da Puntarenas. Verso il Pacifico e Uvita si calcolano fino a 4 ore.",
    comeSpostarsi: 'Van privato per le escursioni.',
    periodoMigliore: 'mattina presto per birdwatching e zipline',
    costi: "Camminata notturna (Kinkajou Night Walk) 28$ a persona; zipline circa 60$ a persona; birdwatching 50$ a persona. Budget giornaliero a persona, indicativo per il 2026: basso 60-90 € (ostello o pensione a Santa Elena, sodas, una riserva senza guida); medio 130-190 € (hotel con giardino, guida in riserva, zipline o camminata notturna); alto da 280 € (lodge nella foresta, tour privati).",
    erroriDaEvitare: ['Non avere paura di chiedere alla guida di accorciare la camminata notturna se dura troppo: per la durata non piace a tutti allo stesso modo'],
    miaEsperienza:
      "A Monteverde c'è la zip line gigante, ed è fighissima. Bella anche la camminata notturna nella foresta nebulosa, con la fauna che si muove solo dopo il tramonto, anche se a qualcuno la durata (1h30) può sembrare lunga.",
    luoghi: [
      {
        nome: "Riserva della Foresta Nebulosa di Monteverde",
        testo: "Foresta pluviale d'altura, avvolta nelle nuvole, con migliaia di specie di piante, uccelli e insetti; è la riserva storica della zona, dove si cerca il quetzal. Si cammina su sentieri e su un ponte sospeso sopra le chiome.",
        come: "Con taxi o navetta dalla cittadina di Santa Elena, su una strada di montagna lenta. Dal 2026 l'ingresso è a orario, da prenotare online. Meglio con guida per riconoscere gli animali.",
        quando: "Mattina presto per gli uccelli. La nebbia è parte del paesaggio.",
        tempo: "3-4 ore",
        orari: "Sentieri della foresta 7.30-16; camminata notturna alle 18",
        lat: 10.30345,
        lng: -84.78771,
        url: "https://cloudforestmonteverde.com/",
      },
      {
        nome: "Riserva di Santa Elena",
        testo: "Una riserva comunitaria a nord del paese, un po' più alta e meno frequentata di Monteverde, con 12 km di sentieri e una torre di osservazione sul sentiero Youth Challenge. Nelle giornate limpide si vede l'Arenal in lontananza.",
        come: "Navetta o taxi da Santa Elena, circa 20 minuti; si va da soli o con guida prenotata.",
        quando: "Mattina.",
        tempo: "2-4 ore",
        lat: 10.34285,
        lng: -84.79305,
        url: "https://reservasantaelena.org/",
      },
      {
        nome: "Riserva Curi-Cancha",
        testo: "Una riserva privata fra pascoli e foresta, con circa 8 km di sentieri facili, molto amata da chi fa birdwatching: è uno dei posti migliori per il quetzal e per i motmot. Gli ingressi sono limitati e c'è meno gente.",
        come: "Taxi da Santa Elena, sulla strada verso la riserva di Monteverde; anche camminata notturna.",
        quando: "All'alba, per gli uccelli.",
        tempo: "2-3 ore",
        lat: 10.30661,
        lng: -84.80742,
        url: "https://www.reservacuricancha.com/",
        consiglio: "Per il birdwatching all'alba si può prenotare una guida privata, circa 50 dollari a persona.",
      },
      {
        nome: "Bosque Eterno de los Niños, Bajo del Tigre",
        testo: "La riserva privata più grande del paese, nata da una raccolta di fondi di bambini di tutto il mondo. Il settore di Bajo del Tigre, a bordo strada, ha sentieri brevi in una foresta più bassa e asciutta, e la sera una camminata notturna.",
        come: "A piedi o in taxi da Santa Elena, pochi minuti.",
        quando: "Pomeriggio, o la sera per la camminata notturna.",
        tempo: "1,5-2 ore",
        lat: 10.30572,
        lng: -84.81922,
      },
      {
        nome: "Camminata notturna nella foresta",
        testo: "Escursione serale con guida e torcia per vedere rane, insetti, tarantole, bradipi e altri animali che si muovono solo dopo il tramonto. Il Kinkajou Night Walk Tour è considerato il migliore. Esiste una scheda esperienza dedicata.",
        come: "Partenza dopo il tramonto con guida; servono torcia e scarpe chiuse.",
        quando: "Sera, dalle 17.30-18.",
        tempo: "1,5 ore",
        costo: "Kinkajou Night Walk 28 USD a persona, circa 24 €",
        consiglio: "A qualcuno la durata può sembrare lunga: si può chiedere alla guida di tenerla fra un'ora e un quarto e un'ora e mezza. Portare giacca.",
      },
      {
        nome: "Zipline avventura",
        testo: "Percorso di teleferiche sopra la foresta. Quelle di Monteverde sono tra le migliori del paese e più lunghe di quelle di La Fortuna: 100% Aventura dichiara sul suo sito il cavo più lungo del Costa Rica, 1.590 metri, su 10 linee. Esiste una scheda esperienza dedicata.",
        come: "Prenotazione con l'operatore, con trasferimento dall'hotel; due turni, all'alba e in tarda mattinata.",
        quando: "Mattina.",
        tempo: "3 ore",
        costo: "Circa 60 USD; 100% Aventura da 72 USD a persona (2026), circa 52-62 €",
        url: "https://www.aventuracanopytour.com/",
        consiglio: "Chi dopo la terza linea non se la sente si ferma e riceve un rimborso del 75%.",
      },
      {
        nome: "Ponti sospesi di Selvatura e Sky Adventures",
        testo: "Due parchi privati a nord di Santa Elena con sentieri di ponti sospesi all'altezza delle chiome, dove si vedono da vicino epifite, orchidee e uccelli della canopy. Sky Adventures ha anche una cabinovia; entrambi abbinano i ponti alla zipline.",
        come: "Navetta dei parchi o taxi da Santa Elena, 15-20 minuti.",
        quando: "Mattina, prima delle nuvole del pomeriggio.",
        tempo: "2 ore",
      },
      {
        nome: "Piantagione di caffè",
        testo: "Visita a una finca con degustazione e spiegazione del processo, dalla pianta alla tazza. Ci sono tour che aggiungono cioccolato e canna da zucchero.",
        come: "Tour prenotato in loco, con trasporto.",
        quando: "Primo pomeriggio: conviene prenotare in anticipo lo slot.",
        tempo: "2 ore",
      },
      {
        nome: "Santa Elena",
        testo: "La cittadina dove si dorme e si mangia, con sodas, agenzie, supermercati e il punto di partenza delle navette per le riserve. È piccola e si gira a piedi, ma la sera fa freddo e spesso piove.",
        come: "A piedi.",
        quando: "Sera, per cena.",
        tempo: "1 ora",
        costo: "Gratis",
        lat: 10.3175,
        lng: -84.8241,
      },
    ],
    programmi: [
      { titolo: "1 giorno", tappe: [
        "Mattina: Riserva di Monteverde con guida",
        "Pranzo a Santa Elena",
        "Pomeriggio: piantagione di caffè",
        "Sera: camminata notturna",
      ] },
      { titolo: "2 giorni", tappe: [
        "Giorno 1: caffè nel pomeriggio e camminata notturna",
        "Giorno 2: birdwatching all'alba a Curi-Cancha, poi zipline in tarda mattinata",
      ] },
      { titolo: "3 giorni", tappe: [
        "Giorni 1-2 come sopra",
        "Giorno 3: Riserva di Monteverde o di Santa Elena la mattina, ponti sospesi nel pomeriggio",
      ] },
    ],
    zone: [
      {
        nome: "Santa Elena",
        perChi: "servizi e budget",
        testo: "Ristoranti, agenzie e hotel a piedi; per le riserve servono taxi o navetta.",
        fascia: "50-110 €",
      },
      {
        nome: "Cerro Plano",
        perChi: "a metà strada",
        testo: "La strada fra Santa Elena e la riserva di Monteverde, con hotel immersi nei giardini, Bajo del Tigre e Curi-Cancha a pochi minuti.",
        fascia: "80-170 €",
      },
      {
        nome: "Lodge nella foresta",
        perChi: "chi cerca natura",
        testo: "Lodge e cabañas al margine della foresta, più isolati e più cari, spesso con sentieri propri.",
        fascia: "da 200 €",
      },
    ],
      "sapori": [
        {
          "nome": "Casado",
          "testo": "Il piatto del giorno con riso, fagioli e pollo o pesce."
        },
        {
          "nome": "Caffè di Monteverde",
          "testo": "Coltivato sugli altopiani, con degustazioni nelle fincas."
        },
        {
          "nome": "Trota",
          "testo": "Allevata nella zona, in vari ristoranti."
        },
        {
          "nome": "Formaggio e dolci",
          "testo": "Prodotti di latte locali."
        }
      ],
      "attenzioni": [
        "Fa freddo e piove di sera: portare giacca impermeabile e maglione.",
        "Le strade di montagna verso la riserva sono strette e lente: lasciare tempo, e prenotare l'orario d'ingresso online.",
        "Per gli uccelli e la fauna serve una guida: da soli si vede molto meno."
      ],
    gite: [
      {
        nome: "Cascate del Tigre",
        distanza: "nei dintorni, con trasporto organizzato",
        come: "Escursione organizzata con trasporto e pranzo incluso.",
        testo: "Un sentiero fra pascoli e foresta con diverse cascate e ponti sospesi, più selvaggio delle riserve; è un'alternativa alla piantagione di caffè nel pomeriggio.",
      },
      {
        nome: "Lago Arenal e La Fortuna",
        distanza: "circa 3 ore con jeep-barca-jeep",
        come: "Trasferimento combinato in navetta e barca sul lago; meglio come tappa successiva con una notte.",
        testo: "Il vulcano Arenal, la cascata di La Fortuna e le terme naturali. La traversata del lago, con il vulcano davanti, è il modo più bello per spostarsi fra le due zone.",
      },
    ],
    faq: [
      {
        domanda: "Quale riserva scegliere a Monteverde?",
        risposta: "Monteverde è la più famosa e frequentata, con ingresso a orario da prenotare; Santa Elena è più alta e tranquilla; Curi-Cancha è la preferita per il birdwatching. Con una sola mattina, conviene una delle tre con guida.",
      },
      {
        domanda: "Quanti giorni servono a Monteverde?",
        risposta: "Due giorni: uno per riserva, caffè e camminata notturna, uno per zipline e birdwatching. Con un terzo si aggiungono un'altra riserva e i ponti sospesi.",
      },
      {
        domanda: "Serve la guida nella foresta nebulosa?",
        risposta: "Non è obbligatoria, ma da soli si vede molto meno: le guide hanno il cannocchiale e sanno dove cercare quetzal, bradipi e rane. Per la camminata notturna è indispensabile.",
      },
      {
        domanda: "Fa freddo a Monteverde?",
        risposta: "Sì, rispetto al resto del paese: si è a circa 1.400 metri, la sera la temperatura scende e piove spesso. Servono giacca impermeabile e un maglione.",
      },
      {
        domanda: "Quanto costa la zipline a Monteverde?",
        risposta: "Circa 60 dollari a persona per un percorso di tre ore; 100% Aventura parte da 72 dollari (2026). Ci sono due turni, all'alba e in tarda mattinata.",
      },
      {
        domanda: "Si vede il quetzal?",
        risposta: "Con una guida e un po' di fortuna sì, soprattutto la mattina presto fra febbraio e giugno, quando nidifica. Curi-Cancha e la riserva di Monteverde sono i posti più indicati.",
      },
    ],
    esperienzeSlugs: ['camminata-notturna-monteverde', 'zipline-monteverde'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'La foresta nebulosa di Monteverde, Costa Rica',
    immagine: '/images/costa-rica/monteverde-stock.jpg',
  },
  {
    slug: 'uvita',
    paeseSlug: 'costa-rica',
    ordine: 7,
    nome: 'Uvita',
    tipologia: ['mare', 'natura', 'relax'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione: 'La costa pacifica della Costa Rica, con il whale watching e il celebre banco di sabbia a forma di coda di balena, la Cola de la Ballena.',
    percheAndarci: 'Per il whale watching (nella stagione giusta) e per uno dei paesaggi più belli di tutto il viaggio, la Cola de la Ballena vista con la bassa marea.',
    cosaVedere: ['La Cola de la Ballena, il banco di sabbia a forma di coda di balena', 'Il ponte di Tárcoles con i grandi coccodrilli, lungo il tragitto'],
    cosaFare: [
      'Whale watching (c\'è una scheda esperienza dedicata)',
      'Giro a cavallo al tramonto in spiaggia al Rancho La Merced (consigliatissimo)',
      'Surf con Ariel, oppure noleggio tavole da Nomadic Surf',
      'Yoga al tramonto su un deck panoramico',
    ],
    doveDormire:
      'El Tecal: buona posizione e staff cordiale sono gli aspetti più citati, ma diverse recensioni segnalano camere e bagni non sempre curati come dovrebbero. Fascia economico-media.\n\nAlternative: economiche: Flutterby House, Cascada Verde Hostel · fascia media: Eden Tica Lodge, Hotel Por Qué No? · lusso: La Cusinga Lodge, Oxygen Jungle Villas.',
    doveMangiare: 'Gastro Park di Uvita (spesso sconto del 10% se avvisato in anticipo).',
    comeArrivare: 'Fino a 4 ore di van da Monteverde, con sosta fotografica al ponte di Tárcoles.',
    comeSpostarsi: 'A piedi in spiaggia; van per le escursioni.',
    periodoMigliore: 'gennaio-marzo o luglio-ottobre per il whale watching (novembre-dicembre è meno favorevole)',
    costi: 'Whale watching 70$ a persona; equitazione 52$ a persona; surf 70$ per 4 tavole al giorno; yoga 10$ a persona.',
    erroriDaEvitare: ['Affidarsi a operatori improvvisati per il whale watching: meglio un operatore serio come Uvita Ballena Jorobada, e chiedere sempre dell\'assicurazione'],
    miaEsperienza:
      "A Uvita ho fatto un po' di tutto. Per il tour delle balene consiglio Uvita Ballena Jorobada. Al Rancho La Merced abbiamo fatto il giro a cavallo al tramonto in spiaggia: io sono caduto, perché non sono un cavallerizzo esperto, ma è bellissimo. Gli animali sono trattati bene, cosa per me importantissima, e sono docili. Super consigliato. Il Costa Rica è bellissimo anche per il surf, e io qui l'ho fatto con Ariel. E la Cola de la Ballena con la bassa marea resta uno dei paesaggi più belli del viaggio.",
      "luoghi": [
        {
          "nome": "Parco Nazionale Marino Ballena e Cola de la Ballena",
          "testo": "Un banco di sabbia a forma di coda di balena che emerge con la bassa marea, nel Parco Marino Ballena. Uno dei paesaggi più belli del viaggio.",
          "come": "Ingresso dalla spiaggia di Playa Uvita; il banco si raggiunge a piedi con la bassa marea.",
          "quando": "Con bassa marea, da controllare sulle tabelle.",
          "tempo": "1-2 ore",
          "consiglio": "Controllare gli orari di marea: con l'alta marea il banco sparisce."
        },
        {
          "nome": "Whale watching",
          "testo": "Uscita in barca nel Parco Marino Ballena, creato nel 1989, per avvistare le megattere che vengono qui a riprodursi. Esiste una scheda esperienza dedicata.",
          "come": "Tour da Uvita con barca di piccole dimensioni.",
          "quando": "Due stagioni: da dicembre ad aprile arrivano le megattere dell'emisfero nord, da luglio a novembre quelle dell'emisfero sud.",
          "tempo": "3 ore",
          "consiglio": "Gli avvistamenti non sono garantiti, ma il paesaggio vale comunque."
        },
        {
          "nome": "Ponte di Tárcoles",
          "testo": "Un ponte sul fiume Tárcoles, lungo la strada principale, da cui si vedono grandi coccodrilli sulle rive.",
          "come": "Sosta lungo la strada Costanera, a piedi sul ponte.",
          "quando": "Giorno, con luce.",
          "tempo": "15-30 minuti",
          "consiglio": "Non scendere sulla riva: i coccodrilli sono reali."
        },
        {
          "nome": "Surf e yoga",
          "testo": "Noleggio di tavole e lezioni sulla spiaggia, e yoga al tramonto su un deck panoramico.",
          "come": "Scuole e deck nella zona di Uvita e Dominical.",
          "quando": "Mattina per il surf, tramonto per lo yoga.",
          "tempo": "2 ore"
        },
        {
          "nome": "Parco Nazionale Corcovado",
          "testo": "Il parco più selvaggio del paese, nella penisola di Osa: foresta primaria, spiagge deserte, tapiri, pecari e la popolazione più grande di are rosse del Costa Rica.",
          "come": "Solo con guida autorizzata e prenotazione (reservaciones.pnc@sinac.go.cr). In barca da Bahía Drake, Sierpe o Puerto Jiménez fino alla stazione Sirena; via terra dal settore La Leona, vicino a Playa Carate.",
          "quando": "Tutti i giorni 8-16. Il periodo migliore va da dicembre ad aprile; a ottobre la stazione Sirena è chiusa.",
          "tempo": "1-2 giorni",
          "url": "https://www.visitcostarica.com/",
          "consiglio": "Prenotare con largo anticipo: l'ente del turismo costaricano indica almeno sei mesi."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Cola de la Ballena con bassa marea",
            "Pranzo a Uvita",
            "Pomeriggio: surf",
            "Tramonto: yoga sul deck"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Cola de la Ballena e spiaggia",
            "Giorno 2: whale watching in stagione, sosta al ponte di Tárcoles verso nord"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Uvita",
          "perChi": "spiagge e servizi",
          "testo": "Ristoranti, tour e negozi vicino alla spiaggia, a poca distanza dal parco."
        },
        {
          "nome": "Colline sopra la costa",
          "perChi": "chi cerca vista e silenzio",
          "testo": "Lodge con vista sull'oceano, ma lontani dai servizi."
        }
      ],
      "sapori": [
        {
          "nome": "Casado di pesce",
          "testo": "Riso, fagioli e pesce del giorno."
        },
        {
          "nome": "Ceviche",
          "testo": "Pesce crudo marinato nel lime, sulle spiagge."
        },
        {
          "nome": "Frutta e smoothie",
          "testo": "Ananas, papaya e mango, per i chioschi."
        },
        {
          "nome": "Pesce alla griglia",
          "testo": "Nei ristoranti sul mare di Uvita."
        }
      ],
      "attenzioni": [
        "Tenere d'occhio la marea: il banco di sabbia si sommerge con l'alta marea.",
        "Il mare del Pacifico ha correnti forti: nuotare con prudenza.",
        "Furti dalle auto parcheggiate sulle spiagge: non lasciare niente a vista."
      ],
    esperienzeSlugs: ['whale-watching-uvita'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Il banco di sabbia della Cola de la Ballena a Uvita, Costa Rica',
    immagine: '/images/costa-rica/uvita-stock.jpg',
  },
  {
    slug: 'manuel-antonio',
    paeseSlug: 'costa-rica',
    ordine: 8,
    nome: 'Parco Nazionale Manuel Antonio',
    tipologia: ['natura', 'mare'],
    giorniConsigliati: 'mezza giornata, lungo il tragitto di rientro',
    visitataPersonalmente: true,
    introduzione: 'Una delle tappe più belle di tutto il Costa Rica: sentieri guidati tra bradipi, scimmie e iguane, seguiti da una delle spiagge più belle del paese.',
    percheAndarci: 'Con una guida esperta la probabilità di avvistare fauna selvatica è altissima, in uno dei parchi nazionali più famosi del paese.',
    cosaVedere: ['Bradipi, scimmie, iguane e colibrì lungo i sentieri', 'Le spiagge all\'interno del parco'],
    cosaFare: ['Visita guidata inclusa nel parco (c\'è una scheda esperienza dedicata)', 'Tempo libero in spiaggia dentro il parco'],
    doveDormire: 'Qui non abbiamo dormito: è stata una tappa di mezza giornata lungo il rientro verso San José.',
    doveMangiare: 'Non ho indirizzi da segnalare: la tappa era tutta per la visita al parco.',
    comeArrivare: "Da Uvita sono circa 1 ora e mezza di trasferimento sulla Costanera. Da San José ci vogliono circa 3 ore in auto, passando per Jacó e il ponte di Tárcoles; gli autobus diretti da San José arrivano a Quepos e proseguono fino all'ingresso del parco. Quepos ha anche un piccolo aeroporto con voli nazionali da San José. Dal parco a San José, per il rientro, si contano 3,5-4 ore con il traffico.",
    comeSpostarsi: 'A piedi lungo i sentieri del parco, con guida.',
    periodoMigliore: 'mattina presto: noi siamo partiti prima dell\'alba',
    costi: "Il prezzo del biglietto non me lo sono segnato; oggi è di circa 18 dollari per gli stranieri, solo online sul portale del SINAC, e il parco è chiuso il martedì. Budget giornaliero a persona, indicativo per il 2026: basso 60-90 € (alloggio a Quepos, sodas, parco senza guida); medio 140-200 € (hotel sulla strada del parco, guida, cena con vista); alto da 300 € (hotel con vista sul Pacifico, uscita in catamarano).",
    erroriDaEvitare: ['Dimenticare che il parco è chiuso il martedì: meglio controllare prima ed eventualmente anticipare la visita'],
    miaEsperienza:
      "Manuel Antonio è bello come parco, ma per la quantità di persone che ci sono hai quasi la sensazione di andare allo zoo. Rimane comunque molto bello. Grazie alla guida abbiamo visto da vicino bradipi, scimmie e iguane lungo sentieri che da soli avremmo fatto molta più fatica a leggere.",
    luoghi: [
      {
        nome: "Parco Nazionale Manuel Antonio",
        testo: "Un parco piccolo ma ricco di vita: bradipi, scimmie cappuccine e scoiattolo, iguane e colibrì lungo i sentieri, con spiagge dentro al parco. È uno dei parchi più famosi e affollati del paese. Esiste una scheda esperienza dedicata.",
        come: "Si arriva da Quepos in bus o auto, in pochi minuti. Con guida si vedono molti più animali; gli zaini vengono controllati: niente cibo in sacchetti di plastica né alcol.",
        quando: "All'apertura, quando gli animali sono attivi e la gente è meno.",
        tempo: "3-4 ore",
        costo: "Circa 18 USD per gli stranieri adulti (16 USD più IVA, 2025-2026), circa 16 €, solo online e con posti limitati",
        orari: "Da mercoledì a lunedì 7-16; chiuso il martedì",
        lat: 9.37556,
        lng: -84.13583,
        url: "https://serviciosenlinea.sinac.go.cr/",
        consiglio: "Con la guida abbiamo visto da vicino bradipi, scimmie e iguane lungo sentieri che da soli avremmo fatto molta più fatica a leggere.",
      },
      {
        nome: "Playa Manuel Antonio e Playa Espadilla Sur",
        testo: "Spiagge dentro il parco, con sabbia chiara e acqua calma, separate dal tombolo di Punta Catedral. Playa Manuel Antonio, nella baia più riparata, è una delle spiagge più belle del paese.",
        come: "Dai sentieri del parco, con il biglietto d'ingresso.",
        quando: "Metà mattina, dopo la visita guidata.",
        tempo: "1-2 ore",
        lat: 9.38088,
        lng: -84.1456,
        consiglio: "Non dare cibo agli animali e non lasciare zaini incustoditi: le scimmie e i procioni li aprono.",
      },
      {
        nome: "Sentiero di Punta Catedral",
        testo: "Un anello nella foresta sul promontorio che era un'isola, unito alla costa da una lingua di sabbia. Sale e scende con scalini e belvedere sul Pacifico e sugli isolotti davanti al parco.",
        come: "Dentro il parco, partendo fra le due spiagge.",
        quando: "Mattina, quando fa meno caldo.",
        tempo: "1 ora",
        lat: 9.3779,
        lng: -84.14679,
      },
      {
        nome: "Playa Espadilla",
        testo: "La lunga spiaggia pubblica fuori dal parco, davanti al paese di Manuel Antonio, con ombrelloni, surf per principianti e il tramonto sul mare. È libera e aperta anche il martedì.",
        come: "A piedi dall'ingresso del parco.",
        quando: "Pomeriggio e tramonto.",
        tempo: "2-3 ore",
        costo: "Gratis",
        lat: 9.39898,
        lng: -84.1596,
        consiglio: "Le correnti possono essere forti: fare il bagno vicino ai bagnini e dove nuotano gli altri.",
      },
      {
        nome: "Playa Biesanz",
        testo: "Una piccola baia nascosta fra la foresta e gli hotel della collina, con acqua calma e un po' di snorkeling fra le rocce. Spesso si vedono scimmie sugli alberi sopra la sabbia.",
        come: "A piedi per un sentiero breve e ripido dalla strada fra Quepos e il parco.",
        quando: "Mattina, o il martedì quando il parco è chiuso.",
        tempo: "2 ore",
        costo: "Gratis",
        lat: 9.4009,
        lng: -84.16844,
      },
      {
        nome: "Quepos e Marina Pez Vela",
        testo: "Il paese di servizio della zona, con il mercato, le sodas economiche e la marina da cui partono pesca sportiva e uscite in catamarano. Il lungomare è piacevole al tramonto.",
        come: "Bus o taxi dal parco, circa 15 minuti.",
        quando: "Pranzo dopo il parco, o sera.",
        tempo: "1-2 ore",
        lat: 9.42642,
        lng: -84.16872,
      },
      {
        nome: "Mangrovie di Isla Damas",
        testo: "Un estuario di mangrovie a nord di Quepos, che si gira in barca o in kayak fra canali con scimmie cappuccine, aironi e coccodrilli. È un'uscita tranquilla per un pomeriggio.",
        come: "Tour con trasferimento da Quepos o Manuel Antonio, circa 20 minuti.",
        quando: "Pomeriggio, con l'alta marea.",
        tempo: "2-3 ore",
        lat: 9.46458,
        lng: -84.1931,
      },
      {
        nome: "Parco Nazionale Carara",
        testo: "Sulla Costanera verso San José, una foresta di transizione fra secco e umido, famosa per le are rosse che volano verso la costa al tramonto. I sentieri vicino alla strada sono brevi e piani.",
        come: "Sosta sulla Costanera, circa 1,5 ore da Manuel Antonio; biglietti sul portale del SINAC.",
        quando: "Mattina presto o tardo pomeriggio, per le are.",
        tempo: "1-2 ore",
        lat: 9.74722,
        lng: -84.62778,
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Ponte di Tárcoles",
        testo: "Lungo il tragitto fra Uvita e San José, il ponte sotto cui si radunano grandi coccodrilli americani sui banchi di sabbia del fiume Tárcoles. La sosta è d'obbligo.",
        come: "Sosta sulla Costanera; si cammina sul marciapiede del ponte.",
        quando: "Di giorno.",
        tempo: "20-30 minuti",
        costo: "Gratis",
        lat: 9.80087,
        lng: -84.60611,
        consiglio: "Non lasciare oggetti in vista nell'auto parcheggiata vicino al ponte.",
      },
    ],
    programmi: [
      { titolo: "Mezza giornata", tappe: [
        "Arrivo all'apertura del parco",
        "Visita guidata di 2-3 ore",
        "Bagno a Playa Manuel Antonio",
        "Pranzo a Quepos e rientro",
      ] },
      { titolo: "1 giorno", tappe: [
        "Mattina: parco con guida e Punta Catedral",
        "Pomeriggio: Playa Espadilla o Playa Biesanz",
        "Sera: tramonto sul mare",
      ] },
      { titolo: "Lungo il rientro a San José", tappe: [
        "Partenza prima dell'alba e parco all'apertura",
        "Pranzo a Quepos",
        "Sosta a Carara e al ponte di Tárcoles",
        "Arrivo a San José in serata",
      ] },
    ],
    zone: [
      {
        nome: "Strada fra Quepos e il parco",
        perChi: "vista e comodità",
        testo: "Hotel sulla collina con vista sulla costa, molti con piscina, ma traffico di bus e taxi.",
        fascia: "110-330 €",
      },
      {
        nome: "Vicino all'ingresso e a Playa Espadilla",
        perChi: "chi vuole entrare all'apertura",
        testo: "Hotel e cabinas a piedi dal parco e dalla spiaggia pubblica, con ristoranti semplici.",
        fascia: "90-200 €",
      },
      {
        nome: "Quepos",
        perChi: "budget",
        testo: "Più economica, con ristoranti, mercato e la marina; per il parco si prende il bus o un taxi.",
        fascia: "60-110 €",
      },
    ],
      "sapori": [
        {
          "nome": "Casado di pesce",
          "testo": "Riso, fagioli e pesce del giorno."
        },
        {
          "nome": "Ceviche",
          "testo": "Pesce crudo marinato nel lime, nei ristoranti sul mare."
        },
        {
          "nome": "Frutta tropicale",
          "testo": "Ananas, papaya e banane, nei banchi vicino al parco."
        },
        {
          "nome": "Smoothie",
          "testo": "Con frutta fresca, nei chioschi di fronte all'ingresso."
        }
      ],
      "attenzioni": [
        "Il parco è chiuso il martedì; in caso di forti piogge il SINAC può chiuderlo anche in altri giorni.",
        "I biglietti si comprano solo online, sul sito del SINAC: all'ingresso non si vendono, e i siti che li rivendono con sovrapprezzo non sono ufficiali.",
        "Non dare cibo agli animali e tenere borse chiuse: scimmie e procioni rubano.",
        "Dal 30 aprile 2026 le multe per chi entra da accessi non ufficiali o in zone chiuse al pubblico sono alte: restare sui sentieri segnati.",
        "È uno dei parchi più affollati del paese: con tutta quella gente a tratti sembra uno zoo. Arrivare all'apertura aiuta."
      ],
    gite: [
      {
        nome: "Cascate Nauyaca",
        distanza: "circa 1,5 ore verso sud",
        come: "In auto verso Dominical, poi a piedi o in fuoristrada dall'ingresso.",
        testo: "Due salti d'acqua uno sopra l'altro con una grande pozza dove si nuota, nella valle del Barú. Si raggiungono con una camminata di qualche chilometro.",
      },
      {
        nome: "Uvita e Parco Marino Ballena",
        distanza: "circa 1-1,5 ore verso sud",
        come: "In auto sulla Costanera.",
        testo: "La Cola de la Ballena, il banco di sabbia a forma di coda di balena che si vede con la bassa marea, e le uscite per le megattere, meglio fra gennaio e marzo e fra luglio e ottobre.",
      },
      {
        nome: "Jacó",
        distanza: "circa 1 ora verso nord",
        come: "In auto sulla Costanera, sulla strada per San José.",
        testo: "La cittadina di surf più vicina a San José, con una lunga spiaggia di onde regolari, scuole di surf e vita serale.",
      },
    ],
    faq: [
      {
        domanda: "Il Parco Manuel Antonio è chiuso il martedì?",
        risposta: "Sì, è aperto da mercoledì a lunedì dalle 7 alle 16; con forti piogge il SINAC può chiuderlo anche in altri giorni. Il martedì si va a Playa Espadilla o a Biesanz.",
      },
      {
        domanda: "Come si comprano i biglietti?",
        risposta: "Solo online, sul portale ufficiale del SINAC, con posti limitati: all'ingresso non si vendono. I siti che li rivendono con sovrapprezzo non sono ufficiali.",
      },
      {
        domanda: "Serve la guida a Manuel Antonio?",
        risposta: "Non è obbligatoria, ma con il cannocchiale della guida si vedono bradipi, rane e serpenti che da soli sfuggono. Le guide certificate si trovano all'ingresso o si prenotano prima.",
      },
      {
        domanda: "Quanto tempo serve per il parco?",
        risposta: "Mezza giornata: due-tre ore di sentieri con la guida e un'ora o due in spiaggia. Basta anche come tappa lungo il rientro verso San José.",
      },
      {
        domanda: "Si può fare il bagno nel parco?",
        risposta: "Sì, a Playa Manuel Antonio e a Espadilla Sur, con acqua di solito calma. Gli zaini vanno tenuti chiusi e vicini, perché scimmie e procioni rubano il cibo.",
      },
      {
        domanda: "È troppo affollato?",
        risposta: "È uno dei parchi più visitati del paese e a tratti sembra uno zoo, ma resta molto bello. Arrivare all'apertura ed evitare i fine settimana aiuta.",
      },
    ],
    esperienzeSlugs: ['parco-manuel-antonio'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Un bradipo tra gli alberi del Parco Nazionale Manuel Antonio, Costa Rica',
    immagine: '/images/costa-rica/manuel-antonio-stock.jpg',
  },
]
