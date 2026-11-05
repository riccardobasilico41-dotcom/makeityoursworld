import type { Destinazione } from '@/lib/types'

// Paese visitato di persona (prima parte dell'articolo centro-america-itinerario).
// I campi miaEsperienza sono in prima persona e tengono solo i fatti
// raccontati nell'articolo. Nessun nome di hotel, ristorante o operatore.

export const destinazioniBelize: Destinazione[] = [
  {
    slug: 'caye-caulker',
    paeseSlug: 'belize',
    ordine: 1,
    nome: 'Caye Caulker',
    tipologia: ['mare', 'isole'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola lunga poche centinaia di metri, senza auto (solo golf cart e biciclette), col motto ufficiale «Go Slow» scritto ovunque. È la base più economica e rilassata per il mare del Belize.',
    percheAndarci:
      'È il modo più semplice ed economico per stare sulla seconda barriera corallina del mondo: si dorme sull\'isola, si fa snorkeling ogni giorno e si vive a piedi scalzi.',
    cosaVedere: [
      'The Split, il canale aperto da un uragano che divide l\'isola in due, dove ci si ritrova al tramonto',
      'La barriera corallina al largo, parte del Belize Barrier Reef Reserve System (UNESCO)',
      'Le mangrovie e le lagune sul lato ovest dell\'isola',
    ],
    cosaFare: [
      'Snorkeling a Hol Chan Marine Reserve e Shark Ray Alley (vedi la scheda esperienza dedicata)',
      'Uscita in barca a vela al tramonto',
      'Giornata di diving o volo panoramico sul Great Blue Hole',
      'Kayak fra le mangrovie, o anche solo un giro in bici da un capo all\'altro dell\'isola',
    ],
    doveDormire: 'L\'isola si gira tutta a piedi: si va dagli ostelli vicino al molo alle cabañas più tranquille del lato est.',
    doveMangiare:
      'Il Belize è caro rispetto ai vicini e a Caye Caulker si sente, ma una via d\'uscita c\'è: i barbecue di strada del pomeriggio, con pollo o pesce alla griglia, riso e fagioli per pochi dollari, e le signore che vendono pesce fritto e fry jacks sulla via principale. Il piatto di tutti i giorni è rice and beans con carne stufata. L\'aragosta ha una stagione precisa (da metà giugno a febbraio): fuori stagione, se è nel menu, è congelata. Da provare almeno una volta il ceviche di lambi (conch), che qui è un prodotto locale.',
    comeArrivare:
      'Volo internazionale su Belize City (BZE), poi water taxi dal terminal in centro (circa 45 minuti). In alternativa volo interno su Caye Caulker con Tropic Air o Maya Island Air.',
    comeSpostarsi: 'A piedi o in bicicletta; i golf cart si noleggiano ma servono a poco, perché l\'isola si attraversa in venti minuti.',
    periodoMigliore: 'dicembre-aprile per mare calmo e visibilità; da giugno a novembre stagione delle piogge e degli uragani',
    costi: 'water taxi da Belize City circa 30-40 BZD a tratta; tour di snorkeling di mezza giornata 60-100 BZD più le tasse del parco marino',
    erroriDaEvitare: [
      'Aspettarsi spiagge caraibiche classiche: la costa è per lo più mangrovie e pontili, si entra in acqua dai moli',
      'Non mettere in conto le tasse d\'ingresso ai parchi marini, spesso escluse dal prezzo del tour',
    ],
    miaEsperienza:
      'Ci siamo arrivati da Belize City col water taxi e il «Go Slow» scritto ovunque descrive l\'isola com\'è: niente auto, solo golf cart e biciclette, e in due giorni il ritmo è calato da solo. La spiaggia caraibica classica quasi non c\'è, la costa è mangrovie e pontili, e chi se la aspetta resta spiazzato per mezza giornata prima di capire che qui il mare si fa al largo. Al largo, infatti, c\'è la barriera: con l\'uscita in barca a Hol Chan e Shark Ray Alley siamo stati in acqua a un metro da squali nutrice e razze che non davano il minimo peso a chi guardava. Il pomeriggio l\'abbiamo lasciato libero fino al tramonto allo Split, dove si ritrova tutta l\'isola. Il Belize costa quasi il doppio del Guatemala, e qui lo si sente.',
      "luoghi": [
        {
          "nome": "The Split",
          "testo": "Il canale aperto dall'uragano Hattie nel 1961, che ha diviso l'isola in due. Oggi è il ritrovo dell'isola: un bar sul molo, tuffi dal ponte e il tramonto guardato da tutti insieme.",
          "come": "In fondo alla via principale, a 10 minuti a piedi dal molo dei water taxi.",
          "quando": "Dal tardo pomeriggio al tramonto.",
          "tempo": "1-2 ore",
          "consiglio": "Nel canale c'è corrente: si entra in acqua dal lato più calmo e si tengono d'occhio le barche."
        },
        {
          "nome": "Hol Chan Marine Reserve e Shark Ray Alley",
          "testo": "Hol Chan è un canale naturale nella barriera corallina, a sud di Ambergris, dentro la prima area marina protetta del Belize. Shark Ray Alley è il punto dove i pescatori ripulivano il pescato: oggi squali nutrice e razze si avvicinano alla barca.",
          "come": "Escursione in barca di mezza giornata da Caye Caulker, con guida e attrezzatura. La tassa del parco marino spesso non è nel prezzo.",
          "quando": "Mattina, con il mare più calmo; stagione migliore dicembre-aprile.",
          "tempo": "4-5 ore",
          "costo": "Tassa della riserva 15 USD a persona (dal 2024), spesso esclusa dal prezzo del tour.",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Da chi ci è stato: in acqua a un metro da squali nutrice e razze che non badano a chi li guarda. Prima di prenotare chiedere che cosa include il prezzo."
        },
        {
          "nome": "Il Great Blue Hole dall'alto",
          "testo": "Una voragine marina di circa 300 metri di diametro e 125 di profondità, al largo di Lighthouse Reef. Il cerchio perfetto si vede solo dall'alto.",
          "come": "Volo panoramico con partenza dall'isola o da Belize City, con un piccolo aereo. In alternativa un'immersione di giornata, più cara e più faticosa.",
          "quando": "Giornata limpida, meglio al mattino.",
          "tempo": "Mezza giornata",
          "consiglio": "Il volo costa molto meno dell'immersione e mostra quello che ci si aspetta dalle foto. Sott'acqua c'è un muro blu con poca vita."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Giro in bicicletta da un capo all'altro dell'isola",
            "Pranzo con il barbecue di strada",
            "Snorkeling sulla barriera nel primo pomeriggio",
            "Tramonto allo Split"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: arrivo col water taxi, giro a piedi, tramonto allo Split",
            "Giorno 2: mattina a Hol Chan e Shark Ray Alley, pomeriggio libero, cena di pesce sulla via principale"
          ]
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorno 1 e 2 come sopra",
            "Giorno 3: volo panoramico sul Blue Hole oppure kayak fra le mangrovie, poi water taxi per Ambergris"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Vicino al molo",
          "perChi": "vita sociale e prezzi bassi",
          "testo": "Ostelli e guesthouse a pochi passi da bar e ristoranti. Si dorme vicino alla musica serale, meglio portarsi i tappi."
        },
        {
          "nome": "Lato est e nord dell'isola",
          "perChi": "chi cerca calma",
          "testo": "Cabañas più tranquille, con il mare davanti. Per cenare si cammina 10-15 minuti, di sera con una torcia."
        }
      ],
      "sapori": [
        {
          "nome": "Rice and beans con stew chicken",
          "testo": "Riso e fagioli rossi cotti nel latte di cocco con pollo stufato: il piatto di tutti i giorni. Si trova nei locali e nei chioschi della via principale."
        },
        {
          "nome": "Fry jacks",
          "testo": "Frittelle di pasta gonfie, a colazione con uova, fagioli o miele."
        },
        {
          "nome": "Ceviche di conch",
          "testo": "Il lambi (conch) crudo marinato nel lime con cipolla e coriandolo. È un prodotto locale e si mangia fresco; la pesca è chiusa da luglio a settembre, e in quei mesi non dovrebbe essere nel menu."
        },
        {
          "nome": "Aragosta",
          "testo": "Stagione da metà giugno a fine febbraio: fuori stagione, se è nel menu, è congelata."
        },
        {
          "nome": "Barbecue di strada",
          "testo": "Nel pomeriggio, pollo o pesce alla griglia con riso e fagioli, per pochi dollari."
        }
      ],
      "attenzioni": [
        "Il Belize è caro rispetto a Messico e Guatemala, soprattutto per escursioni e attività: chiedere sempre che cosa è compreso.",
        "Le tasse dei parchi marini sono spesso escluse dal prezzo del tour e si pagano a parte.",
        "Al tramonto compaiono i sandflies, moscerini che pungono: repellente e vestiti lunghi.",
        "Non toccare né nutrire squali e razze durante lo snorkeling, anche se si avvicinano."
      ],
    esperienzeSlugs: ['hol-chan-shark-ray-alley'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Riva con palme, pontili di legno e acqua bassa a Caye Caulker, Belize',
    immagine: '/images/belize/caye-caulker.jpg',
  },
  {
    slug: 'ambergris-caye',
    paeseSlug: 'belize',
    ordine: 2,
    nome: 'Ambergris Caye e San Pedro',
    tipologia: ['mare', 'diving'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più grande e più sviluppata del Belize, col paese di San Pedro come centro: più servizi, ristoranti e centri diving che a Caye Caulker, ma anche prezzi più alti.',
    percheAndarci:
      'È la base migliore per chi viaggia soprattutto per le immersioni: da qui partono le uscite per Hol Chan, per il Blue Hole e per i punti più esterni della barriera.',
    cosaVedere: [
      'Hol Chan Marine Reserve, il canale naturale nella barriera',
      'Shark Ray Alley, dove si nuota con squali nutrice e razze',
      'Secret Beach, sul lato ovest dell\'isola, con acqua bassissima',
      'Il centro di San Pedro, tra case colorate e carretti da golf',
    ],
    cosaFare: [
      'Immersioni sulla barriera o gita di giornata al Great Blue Hole (tre immersioni, giornata lunga e mare aperto)',
      'Snorkeling a Hol Chan e Shark Ray Alley',
      'Kitesurf e windsurf sul lato sopravento dell\'isola',
    ],
    doveDormire: 'San Pedro per i servizi e la vita serale; le zone a nord e a sud dell\'isola per i resort più tranquilli, raggiungibili in golf cart o barca.',
    doveMangiare:
      'San Pedro ha più scelta di tutto il paese e anche i prezzi più alti: sul fronte mare si paga la posizione. Nelle strade dietro ci sono i comedor dove pranza la gente del posto, con lo stesso stew chicken a un quarto del prezzo. Da cercare i chioschi che grigliano il pescato del giorno e le tortillas di mais fatte al momento. In stagione vale la pena provare il conch fritter e, come bevanda locale, il seaweed shake, che descritto non convince e poi funziona.',
    comeArrivare: 'Water taxi da Belize City (circa 1h30, spesso con sosta a Caye Caulker) oppure volo interno di 15 minuti da Belize City.',
    comeSpostarsi: 'Golf cart a noleggio, taxi-golf cart, biciclette; barche-navetta per le zone più a nord.',
    periodoMigliore: 'dicembre-aprile; il Blue Hole richiede mare calmo, più probabile nei mesi secchi',
    costi: 'immersione al Blue Hole 300-400 USD a persona (tre immersioni, pranzo incluso); noleggio golf cart 50-80 USD al giorno',
    erroriDaEvitare: [
      'Prenotare il Blue Hole senza un\'esperienza subacquea adeguata: la parete richiede una discesa profonda e molti operatori chiedono un brevetto avanzato o un numero minimo di immersioni',
      'Dare per scontato che il Blue Hole sia spettacolare anche in snorkeling: dalla superficie si vede poco, la vista migliore è dall\'aereo',
    ],
    miaEsperienza:
      'Da Caye Caulker ci siamo spostati in barca ad Ambergris, l\'isola più grande e sviluppata del Belize: rispetto a Caye Caulker, a San Pedro ci sono più ristoranti, più diving center, più golf cart. È il posto dove si decide come affrontare il Blue Hole. L\'immersione di giornata intera costa parecchio, chiede spesso un brevetto avanzato e sott\'acqua mostra un muro blu con poche stalattiti e poco pesce; la foto famosa del cerchio perfetto si vede solo dall\'alto, e il volo panoramico costa molto meno ed è più fedele a quello che ci si immagina. Per chi resta sull\'acqua c\'è Secret Beach, con l\'acqua bassissima. L\'ultima mattina l\'abbiamo tenuta libera, con un\'ultima nuotata e un seaweed shake sul lungomare, prima di tornare a Belize City per il volo.',
      "luoghi": [
        {
          "nome": "Hol Chan e Shark Ray Alley da San Pedro",
          "testo": "Il canale naturale nella barriera e il punto degli squali nutrice e delle razze, a pochi minuti di barca da San Pedro. Ambergris è la partenza più vicina.",
          "come": "Escursione in barca di mezza giornata prenotata a San Pedro; attrezzatura inclusa. Tassa del parco spesso a parte.",
          "quando": "Mattina; dicembre-aprile.",
          "tempo": "4 ore",
          "costo": "Tassa della riserva 15 USD a persona (dal 2024), spesso esclusa dal prezzo del tour.",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Da qui si arriva prima, quindi si può abbinare un'altra sosta di snorkeling nello stesso giro."
        },
        {
          "nome": "Secret Beach",
          "testo": "Una spiaggia sul lato ovest dell'isola, con acqua bassissima e sabbia chiara, sul lato protetto dal vento.",
          "come": "Taxi-golf cart o barca da San Pedro; l'ultimo tratto è su strada sterrata.",
          "quando": "Mattina o pomeriggio, con cielo sereno. Meglio nei giorni senza vento forte da ovest.",
          "tempo": "Mezza giornata",
          "consiglio": "Si va per il bagno e per mangiare in riva al mare, non per il surf. Portare contanti."
        },
        {
          "nome": "Great Blue Hole",
          "testo": "Voragine marina nel Lighthouse Reef, patrimonio UNESCO. Da San Pedro si va in barca con l'immersione o in aereo con il volo panoramico.",
          "come": "Immersione: giornata intera, tre immersioni, mare aperto, brevetto avanzato richiesto da molti operatori. Volo panoramico: mezza giornata.",
          "quando": "Giornate di mare calmo, più probabili da dicembre ad aprile.",
          "tempo": "Giornata intera",
          "consiglio": "La vista migliore è dall'aereo, e costa molto meno. Sott'acqua è un muro blu con poche stalattiti e poca vita."
        },
        {
          "nome": "Il centro di San Pedro",
          "testo": "Strade sabbiose con case colorate, caffè, ristoranti e centri diving. Il lungomare è il cuore del paese, con i molo di partenza di tutte le escursioni.",
          "come": "A piedi dal molo principale. Sull'isola si gira in golf cart.",
          "quando": "Mattina presto per le prenotazioni, sera per la vita del lungomare.",
          "tempo": "Mezza giornata"
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina a Hol Chan e Shark Ray Alley",
            "Pranzo in un comedor lontano dal lungomare",
            "Pomeriggio a Secret Beach",
            "Cena a San Pedro"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Hol Chan e Shark Ray Alley, tramonto sul lungomare",
            "Giorno 2: volo panoramico sul Blue Hole oppure giornata di immersioni, poi Secret Beach"
          ]
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorni 1 e 2 come sopra",
            "Giorno 3: kitesurf o windsurf sul lato sopravento, ultima nuotata e partenza per Belize City"
          ]
        }
      ],
      "zone": [
        {
          "nome": "San Pedro",
          "perChi": "servizi e vita serale",
          "testo": "Ristoranti, diving center e tutto a piedi. Rumore la sera e prezzi più alti sul fronte mare."
        },
        {
          "nome": "Nord e sud dell'isola",
          "perChi": "resort tranquilli",
          "testo": "Spiagge più larghe e silenzio. Per cenare servono golf cart o barca navetta."
        }
      ],
      "sapori": [
        {
          "nome": "Stew chicken nei comedor",
          "testo": "Pollo stufato con riso e fagioli, lo stesso piatto del lungomare a un quarto del prezzo, nelle strade dietro il paese."
        },
        {
          "nome": "Conch fritter",
          "testo": "Frittelle di lambi, in stagione, vicino al molo."
        },
        {
          "nome": "Seaweed shake",
          "testo": "Frullato di alghe con latte, spezie e cannella. Detto così non convince, ma si beve."
        },
        {
          "nome": "Pesce alla griglia",
          "testo": "Il pescato del giorno nei chioschi di San Pedro, con tortillas di mais fatte al momento."
        }
      ],
      "attenzioni": [
        "Il fronte mare di San Pedro costa molto: per mangiare meglio e spendere meno spostarsi nelle vie interne.",
        "Il Blue Hole richiede un livello di esperienza adeguato: molti operatori chiedono un brevetto avanzato o un numero minimo di immersioni.",
        "Lo snorkeling dal Blue Hole in superficie mostra poco: non è la ragione per spendere quella cifra.",
        "Prezzi in dollari belizeani o USD: chiedere sempre in quale valuta è il preventivo."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Un caffè in una casa gialla con portici lungo una strada di San Pedro, Ambergris Caye, Belize',
    immagine: '/images/belize/ambergris-caye.jpg',
  },
  {
    slug: 'san-ignacio-cayo',
    paeseSlug: 'belize',
    ordine: 3,
    nome: 'San Ignacio e il Cayo',
    tipologia: ['natura', 'cultura', 'avventura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'entroterra del Belize, al confine col Guatemala: giungla, fiumi, siti maya e la grotta archeologica di Actun Tunichil Muknal, fra le più impressionanti al mondo.',
    percheAndarci:
      'Bilancia bene le isole: in pochi giorni si passa dal mare caraibico alla giungla, con una delle esperienze archeologiche più intense della Mesoamerica.',
    cosaVedere: [
      'La grotta ATM (Actun Tunichil Muknal), con ceramiche e resti umani maya lasciati in situ',
      'Xunantunich, sito maya raggiungibile con un traghetto a mano sul fiume Mopan',
      'Caracol, il sito maya più grande del Belize, dentro la Chiquibul Forest Reserve',
      'Il Green Hills Butterfly Ranch e le pozze naturali di Rio On, lungo la Mountain Pine Ridge',
    ],
    cosaFare: [
      'Escursione alla grotta ATM, con guida obbligatoria e macchine fotografiche vietate (vedi la scheda esperienza dedicata)',
      'Canoa sul fiume Macal',
      'Cave tubing, la discesa in camera d\'aria dentro le grotte',
      'Giornata a Tikal, in Guatemala: il confine è a circa un\'ora da San Ignacio',
    ],
    doveDormire: 'San Ignacio per prezzi e servizi; i jungle lodge lungo il fiume Macal o sulla Mountain Pine Ridge per stare dentro la giungla.',
    doveMangiare:
      'A San Ignacio si mangia meglio e si spende meno che nel resto del Belize, grazie al mercato del sabato mattina: banchi di frutta, pupusas, tamales e cucina cinese-belizeana, un abbinamento frequente nel paese che funziona. In settimana i chioschi serali sulla via principale servono stew chicken e pollo alla griglia, e a colazione le fry jacks. La cucina locale mescola influenze maya, creole e messicane; nel Cayo prevale quella maya.',
    comeArrivare: 'Bus o navetta da Belize City (circa 2-3 ore) lungo la George Price Highway; è anche la porta d\'ingresso via terra dal Guatemala (frontiera di Melchor de Mencos).',
    comeSpostarsi: 'Tour organizzati per i siti e le grotte (quasi sempre obbligatori); taxi collettivi e bus locali per gli spostamenti brevi.',
    periodoMigliore: 'dicembre-aprile; la grotta ATM può chiudere dopo piogge intense per il livello dell\'acqua',
    costi: 'tour ATM 100-140 USD a persona incluso trasporto, pranzo e ingressi; Xunantunich circa 10 USD di ingresso',
    erroriDaEvitare: [
      'Portare la macchina fotografica alla grotta ATM: è vietata da anni, da quando una caduta accidentale ha danneggiato un reperto, e non ci sono eccezioni',
      'Prenotare il tour ATM con operatori non autorizzati: l\'accesso è contingentato e riservato a guide con licenza specifica',
      'Sottovalutare che nella grotta si cammina e si nuota in acqua fredda per ore, con passaggi stretti',
    ],
    miaEsperienza:
      'Siamo arrivati a San Ignacio dalla frontiera di Melchor de Mencos, col primo impatto con l\'inglese e con i prezzi più alti del Belize. Il giorno dopo l\'abbiamo dedicato alla grotta ATM, la cosa più impressionante di tutto il Belize: una camminata nella giungla con tre guadi, poi si entra a nuoto in un fiume sotterraneo e si va avanti per ore in acqua fredda, con passaggi in cui bisogna girarsi di lato. Nella camera superiore ci si toglie le scarpe e si cammina in calzini fra ceramiche intatte e resti umani lasciati dove i maya li avevano deposti più di mille anni fa, compresa la «Crystal Maiden». Niente fotografie, vietate da quando una caduta accidentale ha danneggiato un reperto. Il giorno seguente è stato più leggero: Xunantunich, che si raggiunge con un piccolo traghetto a mano sul fiume Mopan, e nel pomeriggio le pozze di Rio On sulla Mountain Pine Ridge. Chi ha problemi con gli spazi stretti o con l\'acqua fredda può scegliere Xunantunich, che sta all\'aperto.',
      "luoghi": [
        {
          "nome": "Actun Tunichil Muknal (ATM)",
          "testo": "Grotta archeologica maya con ceramiche e resti umani lasciati dove i maya li deposero oltre mille anni fa, compresa la «Crystal Maiden». Si entra a nuoto in un fiume sotterraneo.",
          "come": "Solo con guida autorizzata, tour da San Ignacio con trasporto: cammino nella giungla con tre guadi, poi ore in acqua fredda e passaggi stretti.",
          "quando": "Mattina; dicembre-aprile. Può chiudere dopo piogge forti per il livello dell'acqua.",
          "tempo": "Giornata intera (circa 8 ore)",
          "url": "https://www.nichbelize.org/",
          "consiglio": "Macchine fotografiche vietate per tutti, senza eccezioni. Chi soffre di claustrofobia o ha problemi con l'acqua fredda salti."
        },
        {
          "nome": "Xunantunich",
          "testo": "Sito maya del periodo classico con la piramide El Castillo, alta circa 40 metri, su una collina sopra il fiume Mopan. Si sale sulla cima.",
          "come": "Da San Ignacio taxi fino al Mopan, poi traghetto a mano gratuito; dall'altra parte si sale a piedi per 15 minuti.",
          "quando": "Mattina, prima del caldo.",
          "tempo": "2 ore",
          "url": "https://www.nichbelize.org/",
          "consiglio": "Dalla cima si vede il Guatemala. Abbinabile alla grotta o a Rio On nello stesso giorno."
        },
        {
          "nome": "Caracol",
          "testo": "Il sito maya più grande del Belize, in mezzo alla foresta della Chiquibul. La piramide Caana è ancora la struttura più alta del paese.",
          "come": "Escursione da San Ignacio con guida, lungo una strada sterrata di circa 1h30-2 ore; in genere il pranzo è incluso.",
          "quando": "Mattina presto. Stagione secca per la strada.",
          "tempo": "Giornata intera",
          "url": "https://www.nichbelize.org/",
          "consiglio": "Si va per il silenzio e per le scimmie urlatrici, non per le folle di Tikal. Controllare lo stato della strada."
        },
        {
          "nome": "Rio On Pools e Mountain Pine Ridge",
          "testo": "Una serie di cascatelle e pozze naturali sul Rio On, in una foresta di pini dell'altopiano. Si fa il bagno e si scivola sulle rocce lisce.",
          "come": "In auto o taxi da San Ignacio (circa 45 minuti).",
          "quando": "Pomeriggio, con l'acqua più calda.",
          "tempo": "1-2 ore",
          "consiglio": "Scarpe da acqua: le rocce sono scivolose."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: Xunantunich con il traghetto sul Mopan",
            "Pranzo al mercato di San Ignacio",
            "Pomeriggio: Rio On Pools"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: grotta ATM, giornata intera",
            "Giorno 2: Xunantunich al mattino, Rio On nel pomeriggio, cena a San Ignacio"
          ]
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorni 1 e 2 come sopra",
            "Giorno 3: Caracol con guida, oppure giornata a Tikal dal confine guatemalteco"
          ]
        }
      ],
      "zone": [
        {
          "nome": "San Ignacio",
          "perChi": "prezzi e servizi",
          "testo": "Il paese ha più ristoranti, agenzie e mercato. Si organizzano tutti i tour a piedi."
        },
        {
          "nome": "Lodge sul Macal o sulla Mountain Pine Ridge",
          "perChi": "stare nella giungla",
          "testo": "Più silenzio, uccelli e passeggiate, ma lontani dai ristoranti e legati ai transfer."
        }
      ],
      "sapori": [
        {
          "nome": "Mercato di San Ignacio",
          "testo": "Sabato mattina: frutta, pupusas, tamales e cucina cinese-belizeana. Il posto più economico per mangiare."
        },
        {
          "nome": "Stew chicken e pollo alla griglia",
          "testo": "Nei chioschi serali della via principale."
        },
        {
          "nome": "Fry jacks",
          "testo": "Colazione con frittelle di pasta gonfie."
        },
        {
          "nome": "Cucina maya del Cayo",
          "testo": "Tamales, tortillas di mais e salse piccanti, più presenti qui che nel resto del Belize."
        }
      ],
      "attenzioni": [
        "Il tour ATM va prenotato solo con operatori autorizzati: l'accesso è contingentato e riservato a guide con licenza specifica.",
        "Nessuna fotocamera nella grotta ATM: è vietata da anni, da quando una caduta ha danneggiato un reperto.",
        "Il confine con il Guatemala a Benque Viejo/Melchor de Mencos: cambiare denaro solo agli sportelli ufficiali, non con chi si avvicina.",
        "Dopo piogge forti la grotta ATM e alcune strade, come quella per Caracol, possono chiudere."
      ],
    esperienzeSlugs: ['grotta-atm'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'La piramide El Castillo del sito maya di Xunantunich, vicino a San Ignacio nel distretto del Cayo, Belize',
    immagine: '/images/belize/san-ignacio-cayo.jpg',
  },
  {
    slug: 'placencia-hopkins',
    paeseSlug: 'belize',
    ordine: 4,
    nome: 'Placencia e Hopkins',
    tipologia: ['mare', 'cultura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La costa sud del Belize continentale: Placencia è una penisola sottile con le spiagge di sabbia più belle del paese, Hopkins un villaggio garifuna noto per la sua cultura e i tamburi.',
    percheAndarci:
      'È l\'alternativa alle isole per chi vuole una spiaggia vera senza prendere il traghetto, ed è l\'unico posto dove conoscere da vicino la cultura garifuna, riconosciuta dall\'UNESCO.',
    cosaVedere: [
      'La Placencia Sidewalk, il camminamento pedonale che attraversa il villaggio',
      'Il villaggio garifuna di Hopkins, con le scuole di tamburo tradizionale',
      'La Laughing Bird Caye, isola-parco nazionale al largo di Placencia',
      'Il Cockscomb Basin Wildlife Sanctuary, la prima riserva al mondo dedicata ai giaguari',
    ],
    cosaFare: [
      'Snorkeling con gli squali balena a Gladden Spit (stagionale, attorno alle lune piene tra marzo e giugno)',
      'Lezione di tamburo garifuna a Hopkins',
      'Trekking e bagni nelle pozze del Cockscomb Basin',
    ],
    doveDormire: 'Placencia village per la vita sociale, la penisola a nord per i resort; Hopkins per un\'atmosfera più di villaggio.',
    doveMangiare:
      'Qui si trova la cucina garifuna, rara nel resto del Belize. Il piatto da cercare è l\'hudut, pesce nel latte di cocco col purè di platano verde: è lungo da preparare e lo servono soprattutto i ristoranti di famiglia di Hopkins. A Placencia pesce alla griglia e ceviche di conch sono ovunque, con la solita differenza di prezzo fra fronte spiaggia e vie interne. Il cioccolato del sud del Belize, lavorato in piccole fattorie della zona di Punta Gorda, si vende un po\' ovunque e vale quello che costa.',
    comeArrivare: 'Volo interno da Belize City a Placencia (circa 40 minuti) o bus lungo la Hummingbird e Southern Highway (4-5 ore).',
    comeSpostarsi: 'A piedi o in bicicletta nei villaggi; golf cart a noleggio sulla penisola di Placencia.',
    periodoMigliore: 'dicembre-aprile in generale; marzo-giugno per la finestra degli squali balena',
    costi: 'volo interno 100-150 USD a tratta; uscita squali balena 200-250 USD a persona in stagione',
    erroriDaEvitare: [
      'Costruire il viaggio intorno agli squali balena dandoli per sicuri: gli avvistamenti dipendono dalle lune piene e restano incerti',
      'Sottovalutare i tempi del bus lungo la Southern Highway se si ha un volo in coincidenza',
    ],
    miaEsperienza:
      'Da San Ignacio siamo scesi a Placencia lungo la Hummingbird e la Southern Highway, e lì abbiamo trovato per la prima volta nel viaggio la sabbia caraibica da cartolina, quella che sulle isole del nord manca quasi del tutto. La Placencia Sidewalk attraversa a piedi l\'intero villaggio; il giorno dopo abbiamo fatto la gita in barca alla Laughing Bird Caye, con acqua bassa e reef vicini alla costa. Poi Hopkins, a meno di un\'ora, che conta più per la cultura che per il mare. I garifuna discendono da africani mai stati schiavi, deportati qui dai Caraibi orientali, e hanno lingua, cucina e percussioni proprie, riconosciute dall\'UNESCO. Una lezione di tamburo con un maestro del villaggio dice più di qualsiasi museo, e a tavola il piatto da cercare è l\'hudut. Dopo le giornate intense del Guatemala e del Cayo, Hopkins è stato il nostro giorno di decompressione. Gli squali balena di Gladden Spit, invece, dipendono dalle lune piene fra marzo e giugno: vanno presi come un bonus, non messi al centro dell\'itinerario.',
      "luoghi": [
        {
          "nome": "Placencia Sidewalk",
          "testo": "Il camminamento pedonale di cemento che attraversa il villaggio, sul bordo della penisola, con negozi, bar e spiaggia di sabbia fine a pochi passi. La spiaggia più simile alla cartolina caraibica del continente.",
          "come": "A piedi dal villaggio; la penisola si percorre anche in bicicletta o golf cart.",
          "quando": "Mattina per la spiaggia, tardo pomeriggio per camminare.",
          "tempo": "Mezza giornata"
        },
        {
          "nome": "Laughing Bird Caye",
          "testo": "Un'isoletta-parco nazionale sull'atollo al largo di Placencia, con barriera vicina e acqua bassa. Fa parte del sito UNESCO della barriera corallina.",
          "come": "Gita in barca di mezza giornata da Placencia con uno degli operatori della zona; tassa del parco a parte.",
          "quando": "Mattina, mare calmo; stagione secca.",
          "tempo": "4-5 ore",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Portare crema solare adatta alle barriere coralline e non toccare i coralli."
        },
        {
          "nome": "Hopkins e la cultura garifuna",
          "testo": "Villaggio garifuna sul mare. I garifuna discendono da africani dell'Ovest e da popoli caribi delle Piccole Antille, deportati qui alla fine del Settecento; lingua, danze e musica sono patrimonio immateriale UNESCO.",
          "come": "Da Placencia 40-50 minuti in auto o navetta. Nel villaggio si va a piedi.",
          "quando": "Sera per i tamburi, mattina per la cucina.",
          "tempo": "Mezza giornata",
          "consiglio": "Una lezione di tamburo con un maestro del villaggio dice più di qualsiasi museo. Chiedere in paese."
        },
        {
          "nome": "Cockscomb Basin Wildlife Sanctuary",
          "testo": "La prima riserva al mondo dedicata ai giaguari, in una valle di foresta pluviale con sentieri per cascate e belvedere. Il giaguaro si vede di rado.",
          "come": "Da Hopkins o Placencia in auto fino all'ingresso (circa 30-50 minuti); sentieri di 1-4 ore, alcuni con pozze per il bagno.",
          "quando": "Mattina presto; stagione secca.",
          "tempo": "Mezza giornata",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Si vedono più facilmente uccelli e scimmie che giaguari: andare per la foresta."
        }
      ],
      "programmi": [
        {
          "titolo": "1 giorno",
          "tappe": [
            "Mattina: spiaggia e Placencia Sidewalk",
            "Pranzo di pesce nel villaggio",
            "Pomeriggio: gita a Laughing Bird Caye"
          ]
        },
        {
          "titolo": "2 giorni",
          "tappe": [
            "Giorno 1: Placencia e Laughing Bird Caye",
            "Giorno 2: Hopkins, lezione di tamburo, hudut a pranzo, poi Cockscomb Basin"
          ]
        },
        {
          "titolo": "3 giorni",
          "tappe": [
            "Giorni 1 e 2 come sopra",
            "Giorno 3: stagionale, gita agli squali balena a Gladden Spit (circa marzo-giugno, intorno alle lune piene)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Placencia village",
          "perChi": "vita sociale",
          "testo": "Bar, ristoranti, negozi e spiaggia a piedi. Più rumore e più prezzi turistici."
        },
        {
          "nome": "Penisola a nord",
          "perChi": "resort tranquilli",
          "testo": "Sabbia larga e silenzio, ma bisogna spostarsi per cenare."
        },
        {
          "nome": "Hopkins",
          "perChi": "atmosfera di villaggio",
          "testo": "Meno servizi, più cultura. Il mare è più scuro e la spiaggia meno da cartolina."
        }
      ],
      "sapori": [
        {
          "nome": "Hudut",
          "testo": "Pesce nel latte di cocco con purè di platano verde. Lungo da preparare, lo servono soprattutto i ristoranti di famiglia di Hopkins."
        },
        {
          "nome": "Cioccolato del Belize meridionale",
          "testo": "Lavorato in piccole fattorie intorno a Punta Gorda, si vende in tutto il paese."
        },
        {
          "nome": "Ceviche di conch e pesce alla griglia",
          "testo": "Ovunque a Placencia, con la solita differenza di prezzo fra fronte spiaggia e vie interne."
        },
        {
          "nome": "Rice and beans con pollo",
          "testo": "Il piatto base belizeano, nei locali del villaggio."
        }
      ],
      "attenzioni": [
        "Gli squali balena di Gladden Spit dipendono dalle lune piene fra marzo e giugno: non costruire il viaggio attorno a loro.",
        "Il bus sulla Southern Highway richiede 4-5 ore: tenere un buon margine se c'è un volo.",
        "Il tramonto porta sandflies sulla spiaggia: repellente.",
        "Le gite in barca possono saltare con il mare mosso."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Palme, sabbia bianca e mare turchese sulla spiaggia di Placencia, Belize',
    immagine: '/images/belize/placencia-hopkins.jpg',
  },
]
