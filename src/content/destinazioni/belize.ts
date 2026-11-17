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
    comeArrivare: "Si atterra all'aeroporto internazionale Philip S. W. Goldson di Belize City (BZE). Non ci sono mezzi pubblici: il taxi ufficiale fino al terminal dei water taxi in centro costa circa 25-35 USD (circa 22-30 €) e impiega 20-30 minuti. Da lì il water taxi per Caye Caulker parte più volte al giorno e traversa in circa 45 minuti, per 30-40 BZD a tratta (circa 13-17 €); i biglietti si comprano al terminal. Chi ha poco tempo prende un volo interno di Tropic Air o Maya Island Air fino alla pista dell'isola. Da San Pedro, su Ambergris, il water taxi impiega circa mezz'ora.",
    comeSpostarsi: 'A piedi o in bicicletta; i golf cart si noleggiano ma servono a poco, perché l\'isola si attraversa in venti minuti.',
    periodoMigliore: 'dicembre-aprile per mare calmo e visibilità; da giugno a novembre stagione delle piogge e degli uragani',
    costi: "Water taxi da Belize City circa 30-40 BZD a tratta (circa 13-17 €); tour di snorkeling di mezza giornata 60-100 BZD (circa 26-43 €) più la tassa di Hol Chan, 15 USD (circa 13 €). Budget: circa 50-70 € al giorno con ostello, barbecue di strada e bicicletta. Medio: 110-160 € con guesthouse con bagno, un'uscita in barca e cene di pesce. Alto: oltre 250 € con cabaña sul mare, immersioni o volo sul Blue Hole.",
    erroriDaEvitare: [
      'Aspettarsi spiagge caraibiche classiche: la costa è per lo più mangrovie e pontili, si entra in acqua dai moli',
      'Non mettere in conto le tasse d\'ingresso ai parchi marini, spesso escluse dal prezzo del tour',
    ],
    miaEsperienza:
      'Ci siamo arrivati da Belize City col water taxi e il «Go Slow» scritto ovunque descrive l\'isola com\'è: niente auto, solo golf cart e biciclette, e in due giorni il ritmo è calato da solo. La spiaggia caraibica classica quasi non c\'è, la costa è mangrovie e pontili, e chi se la aspetta resta spiazzato per mezza giornata prima di capire che qui il mare si fa al largo. Al largo, infatti, c\'è la barriera: con l\'uscita in barca a Hol Chan e Shark Ray Alley siamo stati in acqua a un metro da squali nutrice e razze che non davano il minimo peso a chi guardava. Il pomeriggio l\'abbiamo lasciato libero fino al tramonto allo Split, dove si ritrova tutta l\'isola. Il Belize costa quasi il doppio del Guatemala, e qui lo si sente.',
      "luoghi": [
        {
          "nome": "The Split",
          "testo": "Il canale che divide l'isola in due. L'uragano Hattie, nel 1961, aprì un passaggio poco profondo; poi gli abitanti lo scavarono a mano fino a farne un canale. Oggi è il ritrovo dell'isola: un bar sul molo, tuffi dal ponte e il tramonto guardato da tutti insieme.",
          "come": "In fondo alla via principale, a pochi minuti a piedi dal molo dei water taxi.",
          "quando": "Dal tardo pomeriggio al tramonto.",
          "tempo": "1-2 ore",
          "consiglio": "Nel canale c'è corrente: si entra in acqua dal lato più calmo e si tengono d'occhio le barche.",
          "costo": "Ingresso libero; si paga solo al bar.",
          "orari": "Sempre accessibile.",
          "lat": 17.7496,
          "lng": -88.0239
        },
        {
          "nome": "Hol Chan Marine Reserve e Shark Ray Alley",
          "testo": "Hol Chan è un canale naturale nella barriera corallina, a sud di Ambergris, dentro una riserva marina istituita nel 1987, che fa parte del sito UNESCO della barriera del Belize. Shark Ray Alley è il punto dove i pescatori pulivano le reti: gli scarti attiravano squali nutrice e razze, che oggi si avvicinano alla barca.",
          "come": "Escursione in barca di mezza giornata da Caye Caulker, con guida e attrezzatura. La tassa del parco marino spesso non è nel prezzo.",
          "quando": "Mattina, con il mare più calmo; stagione migliore dicembre-aprile.",
          "tempo": "Mezza giornata",
          "costo": "Tassa della riserva 15 USD a persona, circa 13 € (dal 2024), spesso esclusa dal prezzo del tour.",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Da chi ci è stato: in acqua a un metro da squali nutrice e razze che non badano a chi li guarda. Prima di prenotare chiedere che cosa include il prezzo.",
          "lat": 17.8628,
          "lng": -87.9772
        },
        {
          "nome": "Il Great Blue Hole dall'alto",
          "testo": "Una voragine marina larga più di 300 metri e profonda circa 124, al centro di Lighthouse Reef, un atollo a circa 70 km dalla costa. Il cerchio perfetto si vede solo dall'alto.",
          "come": "Volo panoramico con partenza dall'isola o da Belize City, con un piccolo aereo. In alternativa un'immersione di giornata, più cara e più faticosa.",
          "quando": "Giornata limpida, meglio al mattino.",
          "tempo": "Mezza giornata",
          "consiglio": "Il volo costa molto meno dell'immersione e mostra quello che ci si aspetta dalle foto. Sott'acqua c'è un muro blu con poca vita.",
          "lat": 17.3153,
          "lng": -87.5344
        },
        {
          "nome": "Front Street",
          "testo": "La via sabbiosa che corre lungo il lato est del villaggio, dal molo dei water taxi fino allo Split. Qui stanno agenzie di escursioni, caffè e, nel pomeriggio, i barbecue di strada con pollo e pesce alla griglia. Di sera è la passeggiata di tutta l'isola.",
          "come": "A piedi dal molo; si percorre tutta in un quarto d'ora.",
          "quando": "Pomeriggio per i barbecue, sera per la passeggiata.",
          "tempo": "1 ora",
          "orari": "Sempre accessibile; i chioschi lavorano soprattutto dal pomeriggio.",
          "lat": 17.7427,
          "lng": -88.0242,
          "consiglio": "I prezzi delle escursioni cambiano da un'agenzia all'altra: confrontarne due o tre e chiedere se la tassa del parco è inclusa."
        },
        {
          "nome": "Caye Caulker Forest Reserve",
          "testo": "La metà nord dell'isola, oltre lo Split, è quasi disabitata e in parte protetta come riserva forestale: mangrovie, foresta litoranea e lagune dove passano aironi e altri uccelli acquatici. È il lato selvatico di Caye Caulker, a pochi minuti dal villaggio.",
          "come": "In kayak o in barca attraversando lo Split; alcune agenzie organizzano giri guidati fra le mangrovie.",
          "quando": "Mattina presto o tardo pomeriggio, con meno caldo e più uccelli.",
          "tempo": "2-3 ore",
          "lat": 17.7906,
          "lng": -88.0214,
          "consiglio": "Repellente: fra le mangrovie i moscerini non perdonano."
        },
        {
          "nome": "Caye Caulker Marine Reserve",
          "testo": "Il tratto di barriera corallina davanti all'isola, protetto come riserva marina. Le uscite di snorkeling più corte si fermano qui, su giardini di corallo poco profondi con pesci pappagallo, razze e talvolta tartarughe.",
          "come": "Con le uscite di snorkeling che partono dai moli di Front Street, spesso combinate con Hol Chan.",
          "quando": "Mattina, con mare calmo; dicembre-aprile.",
          "tempo": "Mezza giornata",
          "lat": 17.7502,
          "lng": -87.9994,
          "consiglio": "Crema solare adatta alla barriera e niente piedi sul corallo."
        },
        {
          "nome": "Swallow Caye Wildlife Sanctuary",
          "testo": "Un santuario fra Caye Caulker e Belize City creato per proteggere i lamantini delle Antille, che pascolano nelle praterie di fanerogame fra le mangrovie. Le barche si avvicinano a motore spento e si osservano gli animali dalla superficie.",
          "come": "Gita in barca di mezza giornata da Caye Caulker con una guida autorizzata; con i lamantini non si nuota.",
          "quando": "Mattina, con acqua piatta e buona visibilità.",
          "tempo": "Mezza giornata",
          "lat": 17.4965,
          "lng": -88.1249
        },
        {
          "nome": "Half Moon Caye",
          "testo": "Un'isola dell'atollo di Lighthouse Reef, monumento naturale e parte del sito UNESCO della barriera. Ospita una colonia di sule dai piedi rossi che si osserva da una piattaforma fra gli alberi, e una spiaggia dove si pranza nelle gite al Blue Hole.",
          "come": "Inclusa nelle giornate di immersione o snorkeling al Blue Hole, con lunga traversata in mare aperto.",
          "quando": "Giornate di mare calmo, più frequenti da dicembre ad aprile.",
          "tempo": "Giornata intera, con il Blue Hole",
          "lat": 17.2055,
          "lng": -87.5364,
          "consiglio": "Chi soffre il mal di mare prenda un rimedio prima di partire: la traversata dura ore."
        },
        {
          "nome": "Turneffe Atoll",
          "testo": "Il più grande dei tre atolli del Belize, fra la barriera e Lighthouse Reef: isole di mangrovie, lagune interne e pareti coralline. È meta di immersioni di giornata per chi cerca fondali più ricchi di quelli vicino alla costa.",
          "come": "Uscita di immersione di giornata con un diving center dell'isola; serve il brevetto.",
          "quando": "Dicembre-aprile, con mare più calmo.",
          "tempo": "Giornata intera",
          "lat": 17.309,
          "lng": -87.8728
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
          "testo": "Cabañas più tranquille, con il mare davanti. Per cenare si cammina un po', di sera con una torcia."
        },
        {
          "nome": "Sud dell'isola, verso la pista",
          "perChi": "soggiorni lunghi e tranquillità",
          "testo": "Case in affitto e guesthouse fra le palme, lontano dalla musica. Il villaggio si raggiunge in bicicletta in pochi minuti."
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
          "testo": "La pesca è chiusa per alcuni mesi fra la fine dell'inverno e l'inizio dell'estate (dal 2021 da marzo a giugno): in quel periodo, se è nel menu, è congelata."
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
      "gite": [
        {
          "nome": "Ambergris Caye e San Pedro",
          "distanza": "circa 30 minuti di water taxi",
          "come": "Water taxi dal molo principale, più corse al giorno.",
          "testo": "L'isola più grande del Belize, con il paese di San Pedro, Secret Beach e più scelta di ristoranti e diving center. Si va e si torna in giornata senza fatica."
        },
        {
          "nome": "Altun Ha",
          "distanza": "circa 50 km a nord di Belize City",
          "come": "Tour di giornata: water taxi fino a Belize City, poi strada; il biglietto si compra anche online sul sito del NICH.",
          "testo": "Sito maya del periodo classico con due piazze e il Tempio degli Altari di Muratura, dove fu trovata una grande testa di giada del dio del sole. È il sito maya più vicino alle isole."
        }
      ],
      "faq": [
        {
          "domanda": "Quanti giorni servono a Caye Caulker?",
          "risposta": "Tre o quattro: uno per ambientarsi e il tramonto allo Split, uno per Hol Chan e Shark Ray Alley, uno per il Blue Hole o le mangrovie. Chi vuole solo rallentare ne aggiunge volentieri un altro."
        },
        {
          "domanda": "A Caye Caulker ci sono spiagge?",
          "risposta": "Poche e strette: la costa è fatta soprattutto di mangrovie e pontili, e il bagno si fa dai moli o allo Split. Il mare vero è al largo, sulla barriera."
        },
        {
          "domanda": "Caye Caulker o Ambergris Caye?",
          "risposta": "Caye Caulker è più piccola, più economica e si gira a piedi; Ambergris ha più servizi, più resort e prezzi più alti. Sono a mezz'ora di water taxi, quindi si possono fare entrambe."
        },
        {
          "domanda": "Servono contanti?",
          "risposta": "Sì: sull'isola si paga quasi ovunque in contanti e gli sportelli sono pochi. I dollari USA si accettano ovunque, con il resto in dollari del Belize al cambio fisso di 2 a 1."
        },
        {
          "domanda": "Qual è il periodo migliore?",
          "risposta": "Da dicembre ad aprile, con mare più calmo e acqua più limpida. Da giugno a novembre piove di più ed è la stagione degli uragani."
        },
        {
          "domanda": "Meglio il volo o l'immersione al Blue Hole?",
          "risposta": "Per vedere il cerchio blu il volo panoramico è più fedele alle foto e costa molto meno. L'immersione è una giornata lunga in mare aperto, chiede esperienza e sott'acqua mostra soprattutto una parete scura."
        }
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
      'San Pedro ha più scelta di tutto il paese e anche i prezzi più alti: sul fronte mare si paga la posizione. Nelle strade dietro ci sono i comedor dove pranza la gente del posto, con lo stesso stew chicken a un quarto del prezzo. Da cercare i chioschi che grigliano il pescato del giorno e le tortillas di mais fatte al momento. In stagione conviene provare il conch fritter e, come bevanda locale, il seaweed shake, che descritto non convince e poi funziona.',
    comeArrivare: "Da Belize City ci sono due strade. Il water taxi parte più volte al giorno dal terminal sul lungomare e arriva a San Pedro in circa un'ora e mezza, spesso con una sosta a Caye Caulker. Il volo interno di Tropic Air o Maya Island Air impiega circa 15 minuti e parte sia dall'aeroporto internazionale sia dalla pista municipale. Da Caye Caulker il water taxi impiega circa mezz'ora. San Pedro è collegata in barca anche a Chetumal, in Messico, per chi arriva dallo Yucatán.",
    comeSpostarsi: 'Golf cart a noleggio, taxi-golf cart, biciclette; barche-navetta per le zone più a nord.',
    periodoMigliore: 'dicembre-aprile; il Blue Hole richiede mare calmo, più probabile nei mesi secchi',
    costi: "Immersione al Blue Hole 300-400 USD a persona (circa 260-345 €), con tre immersioni e pranzo; noleggio golf cart 50-80 USD al giorno (circa 43-69 €); tassa di Hol Chan 15 USD (circa 13 €). Budget: circa 70-90 € al giorno con ostello, comedor e spostamenti a piedi. Medio: 150-220 € con hotel in paese, un'escursione e cene sul lungomare. Alto: oltre 350 € con resort a nord dell'isola e giornate di immersione.",
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
          "tempo": "Mezza giornata",
          "costo": "Tassa della riserva 15 USD a persona, circa 13 € (dal 2024), spesso esclusa dal prezzo del tour.",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Da qui si arriva prima, quindi si può abbinare un'altra sosta di snorkeling nello stesso giro.",
          "lat": 17.8628,
          "lng": -87.9772
        },
        {
          "nome": "Secret Beach",
          "testo": "Una spiaggia lontana dal centro di San Pedro, con acqua bassissima e sabbia chiara.",
          "come": "Taxi-golf cart o barca da San Pedro; chiedere in paese lo stato della strada.",
          "quando": "Mattina o pomeriggio, con cielo sereno.",
          "tempo": "Mezza giornata",
          "consiglio": "Si va per il bagno e per mangiare in riva al mare, non per il surf. Portare contanti.",
          "lat": 17.9731,
          "lng": -87.972
        },
        {
          "nome": "Great Blue Hole",
          "testo": "Voragine marina nel Lighthouse Reef, patrimonio UNESCO. Da San Pedro si va in barca con l'immersione o in aereo con il volo panoramico.",
          "come": "Immersione: giornata intera con più immersioni in mare aperto; molti operatori chiedono un brevetto avanzato. Volo panoramico: mezza giornata.",
          "quando": "Giornate di mare calmo, più probabili da dicembre ad aprile.",
          "tempo": "Giornata intera",
          "consiglio": "La vista migliore è dall'aereo, e costa molto meno. Sott'acqua è un muro blu con poche stalattiti e poca vita.",
          "lat": 17.3153,
          "lng": -87.5344
        },
        {
          "nome": "Il centro di San Pedro",
          "testo": "Strade sabbiose con case colorate, caffè, ristoranti e centri diving. Il lungomare è il cuore del paese, con i moli da cui partono tutte le escursioni.",
          "come": "A piedi dal molo principale. Sull'isola si gira in golf cart.",
          "quando": "Mattina presto per le prenotazioni, sera per la vita del lungomare.",
          "tempo": "Mezza giornata",
          "lat": 17.9214,
          "lng": -87.9611
        },
        {
          "nome": "Mexico Rocks",
          "testo": "Una zona di teste di corallo in acqua bassa, all'interno della barriera, a nord di San Pedro. È lo snorkeling più facile dell'isola: fondale di pochi metri, corallo cervello e pesci di barriera, adatto anche a chi nuota poco.",
          "come": "In barca con le uscite di snorkeling da San Pedro, spesso abbinata ad altre soste nel nord dell'isola.",
          "quando": "Mattina, con mare calmo.",
          "tempo": "2-3 ore",
          "lat": 17.9928,
          "lng": -87.9058
        },
        {
          "nome": "Bacalar Chico",
          "testo": "Il parco nazionale e riserva marina all'estremità nord di Ambergris, al confine con il Messico, nel sito UNESCO della barriera. Il canale di Bacalar Chico, secondo la tradizione scavato dai maya, separa l'isola dalla penisola dello Yucatán; intorno ci sono mangrovie, lagune e barriera quasi deserta.",
          "come": "Gita in barca di giornata da San Pedro con snorkeling e sosta alla stazione dei ranger.",
          "quando": "Stagione secca, con mare calmo per la lunga risalita.",
          "tempo": "Giornata intera",
          "lat": 18.1362,
          "lng": -87.859
        },
        {
          "nome": "Marco Gonzalez",
          "testo": "Un piccolo sito archeologico maya nella parte sud dell'isola, nascosto fra le mangrovie. Era un porto commerciale sulla rotta costiera: non ha piramidi, ma racconta che Ambergris era abitata e trafficata molto prima del turismo.",
          "come": "In golf cart verso sud da San Pedro, poi un breve sentiero fra le mangrovie.",
          "quando": "Mattina, prima del caldo e delle zanzare.",
          "tempo": "1 ora",
          "lat": 17.8821,
          "lng": -88.0148,
          "consiglio": "Repellente e scarpe chiuse."
        },
        {
          "nome": "Boca del Rio Park",
          "testo": "La spiaggia pubblica di San Pedro, subito a nord del centro, con palme, panchine e un molo da cui ci si tuffa. È il posto dove gli abitanti fanno il bagno nel fine settimana.",
          "come": "A piedi o in bicicletta dal centro di San Pedro.",
          "quando": "Pomeriggio e tramonto.",
          "tempo": "1-2 ore",
          "costo": "Ingresso libero.",
          "lat": 17.93,
          "lng": -87.957
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
        },
        {
          "nome": "Boca del Rio e il nord del paese",
          "perChi": "calma senza rinunciare al centro",
          "testo": "Appena oltre il ponte, più residenziale e meno rumoroso del lungomare. Il centro si raggiunge a piedi o in bicicletta."
        }
      ],
      "sapori": [
        {
          "nome": "Stew chicken nei comedor",
          "testo": "Pollo stufato con riso e fagioli, lo stesso piatto del lungomare a prezzi molto più bassi, nelle strade dietro il paese."
        },
        {
          "nome": "Conch fritter",
          "testo": "Frittelle di lambi, in stagione."
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
      "gite": [
        {
          "nome": "Caye Caulker",
          "distanza": "circa 30 minuti di water taxi",
          "come": "Water taxi da San Pedro, più corse al giorno.",
          "testo": "L'isola del «Go Slow», senza auto e più economica: un pomeriggio allo Split e una cena di pesce bastano per capire la differenza con San Pedro."
        },
        {
          "nome": "Altun Ha",
          "distanza": "circa 50 km a nord di Belize City",
          "come": "Tour di giornata da San Pedro, in barca fino alla terraferma e poi su strada.",
          "testo": "Il sito maya più vicino alle isole, con il Tempio degli Altari di Muratura, dove fu trovata una grande testa di giada del dio del sole."
        }
      ],
      "faq": [
        {
          "domanda": "Quanti giorni servono ad Ambergris Caye?",
          "risposta": "Tre giorni bastano per Hol Chan, il Blue Hole e Secret Beach; chi si immerge ne mette cinque, per avere margine se il mare non permette le uscite."
        },
        {
          "domanda": "Serve il golf cart?",
          "risposta": "In centro no, si gira a piedi. Per Secret Beach e per le zone a nord e a sud sì: si noleggia con la patente, oppure si usano i taxi-golf cart."
        },
        {
          "domanda": "Serve un brevetto per il Blue Hole?",
          "risposta": "Per l'immersione sì: la parete è profonda e molti operatori chiedono un brevetto avanzato o un minimo di immersioni registrate. Senza brevetto c'è il volo panoramico."
        },
        {
          "domanda": "Ambergris è cara?",
          "risposta": "È la parte più cara del Belize, soprattutto sul fronte mare. Nelle vie interne i comedor servono gli stessi piatti a un prezzo molto più basso."
        },
        {
          "domanda": "I prezzi sono in dollari USA o del Belize?",
          "risposta": "Si vedono entrambi, e il dollaro del Belize vale metà di quello USA. Prima di accettare un preventivo conviene chiedere in quale valuta è."
        }
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
    comeArrivare: "Da Belize City si arriva in bus o navetta lungo la George Price Highway, in circa 2-3 ore, passando per Belmopan; dall'aeroporto internazionale conviene il taxi fino alla stazione dei bus o una navetta prenotata. Chi arriva dal Guatemala passa la frontiera di Melchor de Mencos, aperta ogni giorno, e in pochi chilometri è a San Ignacio. Verso sud, per Placencia e Hopkins, si prende la Hummingbird Highway: circa 4-5 ore in navetta, di più in bus con cambio a Dangriga.",
    comeSpostarsi: 'Tour organizzati per i siti e le grotte (quasi sempre obbligatori); taxi collettivi e bus locali per gli spostamenti brevi.',
    periodoMigliore: 'dicembre-aprile; la grotta ATM può chiudere dopo piogge intense per il livello dell\'acqua',
    costi: "Tour ATM 100-140 USD a persona (circa 86-120 €) con trasporto, pranzo e ingresso; Xunantunich e Caracol 25 BZD (circa 11 €), Cahal Pech e Barton Creek 20 BZD (circa 9 €) per i non residenti. Budget: circa 45-60 € al giorno con guesthouse in paese, mercato e taxi collettivi. Medio: 100-150 € con hotel con piscina e un tour al giorno. Alto: oltre 250 € con jungle lodge sul Macal e guide private.",
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
          "testo": "Grotta archeologica maya con ceramiche e resti umani lasciati dove furono deposti, alcuni con più di mille anni, compresa la «Crystal Maiden», lo scheletro calcificato e luccicante di un ragazzo. Si entra a nuoto e si risale un fiume sotterraneo.",
          "come": "I biglietti li vendono solo i tour operator autorizzati, con guida e trasporto da San Ignacio: cammino nella giungla con guadi, poi ore in acqua fredda e passaggi stretti.",
          "quando": "Mattina; dicembre-aprile. Può chiudere dopo piogge forti per il livello dell'acqua.",
          "tempo": "Giornata intera",
          "consiglio": "Le fotocamere sono vietate ai visitatori dal 2012, da quando una macchina caduta ha incrinato un cranio. Chi soffre di claustrofobia o ha problemi con l'acqua fredda salti.",
          "costo": "Solo con tour autorizato: 100-140 USD a persona (circa 86-120 €), ingresso compreso.",
          "lat": 17.13,
          "lng": -88.8658,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Xunantunich",
          "testo": "Sito maya del periodo classico con la piramide El Castillo, alta circa 40 metri, su una collina sopra il fiume Mopan. Si sale sulla cima.",
          "come": "Da San Ignacio taxi fino al Mopan, poi traghetto a mano; dall'altra parte si sale a piedi.",
          "quando": "Mattina, prima del caldo.",
          "tempo": "2 ore",
          "consiglio": "Dalla cima si vede il Guatemala. Abbinabile alla grotta o a Rio On nello stesso giorno.",
          "costo": "25 BZD per i non residenti, circa 11 € (2026); il traghetto sul Mopan è gratuito.",
          "orari": "Tutti i giorni 8-17, festivi compresi; ultimo ingresso un'ora prima della chiusura in auto, un'ora e mezza prima a piedi.",
          "lat": 17.0891,
          "lng": -89.1414,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Caracol",
          "testo": "Una delle più grandi città maya, sull'altopiano di Vaca ai piedi delle Maya Mountains. La piramide Caana, alta 43 metri, è ancora la struttura costruita dall'uomo più alta del Belize.",
          "come": "Escursione da San Ignacio con guida, lungo una lunga strada in parte sterrata; in genere il pranzo è incluso.",
          "quando": "Mattina presto. Stagione secca per la strada.",
          "tempo": "Giornata intera",
          "consiglio": "Si va per il silenzio e per le scimmie urlatrici, non per le folle di Tikal. Controllare lo stato della strada.",
          "costo": "25 BZD per i non residenti, circa 11 € (2026).",
          "orari": "Tutti i giorni 8-17; ultimo giro alle 14, uscita dal sito entro le 15.",
          "lat": 16.7612,
          "lng": -89.1185,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Rio On Pools e Mountain Pine Ridge",
          "testo": "Una serie di cascatelle e pozze naturali sul Rio On, in una foresta di pini dell'altopiano. Si fa il bagno e si scivola sulle rocce lisce.",
          "come": "In auto o taxi da San Ignacio, salendo verso la Mountain Pine Ridge.",
          "quando": "Di giorno, nella stagione secca.",
          "tempo": "1-2 ore",
          "consiglio": "Scarpe da acqua: le rocce sono scivolose.",
          "lat": 16.9896,
          "lng": -88.9782
        },
        {
          "nome": "Cahal Pech",
          "testo": "Un sito maya su una collina sopra San Ignacio, fra i più antichi abitati della valle del Belize. Piazze, templi e cortili residenziali di una famiglia d'élite, con il paese che si vede sotto. È il sito più vicino e si visita in poco tempo.",
          "come": "A piedi dal centro di San Ignacio, in salita, o in taxi.",
          "quando": "Al mattino presto o nel tardo pomeriggio, con la luce bassa.",
          "tempo": "1-2 ore",
          "costo": "20 BZD per i non residenti, circa 9 € (2026).",
          "orari": "Tutti i giorni: da aprile a ottobre 6-18, da ottobre ad aprile 6.30-17; ultimo giro un'ora prima della chiusura.",
          "lat": 17.1477,
          "lng": -89.0723,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Barton Creek Cave",
          "testo": "Una grotta fluviale che si visita in canoa, risalendo il fiume sotterraneo con le torce fra stalattiti e camere alte decine di metri. I maya la usavano per cerimonie, e lungo le pareti restano ceramiche e resti. È l'alternativa tranquilla all'ATM: niente nuoto, si resta seduti in canoa.",
          "come": "In auto o con tour da San Ignacio; l'ultimo tratto è una strada sterrata con guadi. Canoa e torce si noleggiano all'ingresso.",
          "quando": "Mattina; dopo piogge forti la strada può essere difficile.",
          "tempo": "Mezza giornata con il viaggio",
          "costo": "20 BZD per i non residenti, circa 9 € (2026), canoa a parte.",
          "orari": "Tutti i giorni 8-17; non si entra nella grotta dopo le 16.",
          "lat": 17.1129,
          "lng": -88.9293,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Rio Frio Cave",
          "testo": "Una grotta attraversata da parte a parte da un fiume, con un ingresso enorme aperto sulla foresta di pini della Mountain Pine Ridge. Si cammina dentro sulle rocce lungo l'acqua, senza bisogno di attrezzatura.",
          "come": "In auto o con un tour della Mountain Pine Ridge, spesso abbinata a Rio On Pools e Big Rock Falls.",
          "quando": "Di giorno, stagione secca.",
          "tempo": "1 ora",
          "lat": 16.9792,
          "lng": -89.0072
        },
        {
          "nome": "Big Rock Falls",
          "testo": "Una cascata sul fiume Privassion che cade in una pozza larga e profonda, dove si nuota. Si raggiunge con una breve discesa a gradini nella foresta.",
          "come": "In auto o tour lungo la strada della Mountain Pine Ridge, poi 10-15 minuti a piedi.",
          "quando": "Stagione secca; dopo forti piogge la corrente è pericolosa.",
          "tempo": "1-2 ore",
          "lat": 17.0325,
          "lng": -88.9742,
          "consiglio": "Scarpe con buona presa: gli scalini sono scivolosi."
        },
        {
          "nome": "Green Hills Butterfly Ranch",
          "testo": "Un allevamento di farfalle tropicali con una grande voliera, un giardino botanico e mangiatoie per i colibrì, sulla strada per la Mountain Pine Ridge. Le guide spiegano il ciclo di vita delle farfalle, dalla crisalide al volo.",
          "come": "In auto o taxi da San Ignacio, sulla strada di Georgeville verso la Mountain Pine Ridge.",
          "quando": "Tarda mattina, con il sole che fa volare le farfalle.",
          "tempo": "1 ora",
          "lat": 17.0975,
          "lng": -88.9742
        },
        {
          "nome": "Mercato di San Ignacio",
          "testo": "Il mercato all'aperto del paese, con contadini del Cayo, mennoniti e venditori dal Guatemala: frutta, verdura, formaggi, pupusas e tamales. Il sabato mattina è il momento più vivace.",
          "come": "A piedi dal centro, vicino al fiume Macal.",
          "quando": "Sabato mattina.",
          "tempo": "1 ora",
          "consiglio": "È il posto più economico per mangiare in tutto il Belize: andarci a stomaco vuoto."
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
        },
        {
          "nome": "Santa Elena",
          "perChi": "prezzi bassi e soste brevi",
          "testo": "La città gemella oltre il ponte sul Macal, più residenziale e meno turistica. Il centro di San Ignacio si raggiunge a piedi."
        }
      ],
      "sapori": [
        {
          "nome": "Mercato di San Ignacio",
          "testo": "Frutta, pupusas, tamales e cucina cinese-belizeana. Il posto più economico per mangiare: il giorno più vivace è il fine settimana, meglio chiedere in paese."
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
        "Nessuna fotocamera nella grotta ATM: è vietata dal 2012, da quando una macchina caduta ha incrinato un cranio.",
        "Il confine con il Guatemala a Benque Viejo/Melchor de Mencos: cambiare denaro solo agli sportelli ufficiali, non con chi si avvicina.",
        "Dopo piogge forti la grotta ATM e alcune strade, come quella per Caracol, possono chiudere."
      ],
      "gite": [
        {
          "nome": "Tikal (Guatemala)",
          "distanza": "circa 100 km, oltre la frontiera di Melchor de Mencos",
          "come": "Tour di giornata con trasporto e guida, partendo all'alba; serve il passaporto e alla frontiera si pagano le tasse di uscita e di ingresso.",
          "testo": "La grande città maya del Petén, con i templi che spuntano sopra la foresta, scimmie urlatrici e tucani. È lunga da fare in giornata: chi può dorme a Flores o vicino al parco."
        },
        {
          "nome": "Belize Zoo",
          "distanza": "circa 1 ora di strada verso Belize City",
          "come": "Sulla George Price Highway: si ferma lì il bus per Belize City, oppure in auto o navetta.",
          "testo": "Un piccolo zoo nella savana di pini, con solo animali nativi del Belize, molti salvati o nati in cattività: giaguari, tapiri, arpie e scimmie. È il modo più sicuro per vedere un giaguaro da vicino."
        }
      ],
      "faq": [
        {
          "domanda": "Quanti giorni servono a San Ignacio?",
          "risposta": "Almeno due: uno per la grotta ATM, uno per Xunantunich e la Mountain Pine Ridge. Con un terzo giorno si aggiunge Caracol o Tikal."
        },
        {
          "domanda": "La grotta ATM è difficile?",
          "risposta": "Chiede una forma fisica normale: guadi, un tratto a nuoto, ore in acqua fredda e passaggi stretti. Chi soffre di claustrofobia o non nuota bene dovrebbe scegliere Barton Creek o Xunantunich."
        },
        {
          "domanda": "Si possono fare foto nella grotta ATM?",
          "risposta": "No: le fotocamere sono vietate ai visitatori dal 2012, dopo che una macchina caduta ha danneggiato un cranio. Telefoni e macchine restano sul pulmino."
        },
        {
          "domanda": "Si compra il biglietto dei siti maya online?",
          "risposta": "Sì, Xunantunich, Cahal Pech, Caracol e Barton Creek hanno biglietti sul sito del NICH. L'ATM invece si visita solo tramite tour operator autorizzati."
        },
        {
          "domanda": "Si può andare a Tikal in giornata da San Ignacio?",
          "risposta": "Sì, con un tour che parte all'alba e rientra la sera, passando la frontiera due volte. È una giornata lunga: dormire a Flores rende la visita più tranquilla."
        },
        {
          "domanda": "San Ignacio o un jungle lodge?",
          "risposta": "In paese si spende meno e si organizzano i tour a piedi; nei lodge sul Macal o sulla Mountain Pine Ridge si sta nella foresta, ma si dipende dai transfer per tutto."
        }
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
    comeArrivare: "Il modo più rapido è il volo interno di Tropic Air o Maya Island Air da Belize City, circa mezz'ora fino alla pista di Placencia. Via terra, da San Ignacio o da Belize City si prende la Hummingbird Highway, la strada più panoramica del paese, e poi la Southern Highway: circa 4-5 ore in navetta, che porta fino all'alloggio, di più in bus pubblico con cambio a Dangriga. Hopkins sta sulla stessa costa, a meno di un'ora da Placencia; da Hopkins a Belize City servono circa tre ore. In alta stagione, da dicembre ad aprile, gli alloggi vanno prenotati prima.",
    comeSpostarsi: 'A piedi o in bicicletta nei villaggi; golf cart a noleggio sulla penisola di Placencia.',
    periodoMigliore: 'dicembre-aprile in generale; marzo-giugno per la finestra degli squali balena',
    costi: "Volo interno 100-150 USD a tratta (circa 86-130 €); uscita agli squali balena 200-250 USD a persona in stagione (circa 172-215 €). Budget: circa 50-70 € al giorno con guesthouse nel villaggio, pesce alla griglia e bicicletta. Medio: 110-170 € con cabaña sulla spiaggia e una gita in barca. Alto: oltre 280 € con resort sulla penisola nord e uscite private.",
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
          "tempo": "Mezza giornata",
          "costo": "Gratis.",
          "orari": "Sempre accessibile.",
          "lat": 16.5156,
          "lng": -88.3672
        },
        {
          "nome": "Laughing Bird Caye",
          "testo": "Un'isoletta parco nazionale al largo di Placencia, con barriera vicina e acqua bassa. Fa parte del sito UNESCO della barriera corallina del Belize.",
          "come": "Gita in barca di mezza giornata da Placencia con uno degli operatori della zona; tassa del parco a parte.",
          "quando": "Mattina, mare calmo; stagione secca.",
          "tempo": "Mezza giornata",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Portare crema solare adatta alle barriere coralline e non toccare i coralli.",
          "lat": 16.4438,
          "lng": -88.1964
        },
        {
          "nome": "Hopkins e la cultura garifuna",
          "testo": "Villaggio garifuna sul mare. I garifuna discendono da africani e da popoli caribi e arawak di Saint Vincent, da dove i britannici li deportarono nel 1797; da lì si sono sparsi lungo la costa centroamericana. Lingua, danze e musica sono patrimonio immateriale UNESCO dal 2001.",
          "come": "Da Placencia in auto o navetta lungo la costa. Nel villaggio si va a piedi.",
          "quando": "Sera per i tamburi, mattina per la cucina.",
          "tempo": "Mezza giornata",
          "consiglio": "Una lezione di tamburo con un maestro del villaggio dice più di qualsiasi museo. Chiedere in paese.",
          "lat": 16.8604,
          "lng": -88.2845
        },
        {
          "nome": "Cockscomb Basin Wildlife Sanctuary",
          "testo": "Riserva istituita nel 1986 come prima area protetta per il giaguaro, in una valle di foresta pluviale con sentieri per cascate e belvedere. Il giaguaro si vede di rado.",
          "come": "Da Hopkins o Placencia in auto fino all'ingresso; sentieri da una a qualche ora, alcuni con pozze per il bagno.",
          "quando": "Mattina presto; stagione secca.",
          "tempo": "Mezza giornata",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Si vedono più facilmente uccelli e scimmie che giaguari: andare per la foresta.",
          "lat": 16.7801,
          "lng": -88.4574
        },
        {
          "nome": "Gladden Spit e Silk Cayes",
          "testo": "Una riserva marina al largo di Placencia, nel sito UNESCO della barriera. Le Silk Cayes sono tre isolotti di sabbia con snorkeling sulla barriera; a Gladden Spit, fra marzo e giugno, intorno alle lune piene, i pesci si radunano per deporre le uova e attirano gli squali balena.",
          "come": "Gita in barca di giornata da Placencia; per gli squali balena solo operatori autorizzati, con numeri limitati.",
          "quando": "Silk Cayes tutto l'anno con mare calmo; squali balena marzo-giugno, nei giorni attorno alla luna piena.",
          "tempo": "Giornata intera",
          "lat": 16.4471,
          "lng": -88.0537,
          "consiglio": "Gli avvistamenti non sono garantiti: le Silk Cayes da sole valgono comunque la giornata."
        },
        {
          "nome": "Mayflower Bocawina National Park",
          "testo": "Un parco di foresta pluviale ai piedi dei Maya Mountains, vicino a Hopkins, con piccoli siti maya, sentieri e una serie di cascate. La più alta, Antelope Falls, si raggiunge con un sentiero ripido, in parte con corde.",
          "come": "In auto o taxi da Hopkins, poi sentieri a piedi dall'ingresso.",
          "quando": "Mattina presto; stagione secca per i sentieri.",
          "tempo": "Mezza giornata",
          "lat": 16.9307,
          "lng": -88.4071,
          "consiglio": "Costume sotto i vestiti: nelle pozze sotto le cascate si fa il bagno."
        },
        {
          "nome": "Monkey River",
          "testo": "Un fiume a sud di Placencia, con il piccolo villaggio omonimo alla foce. Si risale in barca fra mangrovie e foresta, con soste a piedi per cercare scimmie urlatrici, iguane, coccodrilli e uccelli.",
          "come": "Gita in barca di giornata da Placencia, con guida e pranzo al villaggio.",
          "quando": "Partenza al mattino, quando gli animali sono più attivi.",
          "tempo": "Giornata intera",
          "lat": 16.3634,
          "lng": -88.4853,
          "consiglio": "Repellente e maniche lunghe per le soste nella foresta."
        },
        {
          "nome": "St. Herman's Blue Hole National Park",
          "testo": "Un piccolo parco sulla Hummingbird Highway con una dolina d'acqua turchese in cui si nuota e la grotta di St. Herman, dove i maya lasciarono tracce di cerimonie. È la sosta classica lungo la strada fra il Cayo e la costa sud.",
          "come": "Sosta in auto o navetta lungo la Hummingbird Highway; dall'ingresso sentieri brevi per la pozza e la grotta.",
          "quando": "Di giorno, durante il trasferimento.",
          "tempo": "1-2 ore",
          "lat": 17.156,
          "lng": -88.685,
          "consiglio": "Torcia per la grotta: si entra al buio."
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
            "Giorno 3: stagionale, gita agli squali balena a Gladden Spit (fra marzo e giugno, quando si riproducono i pesci)"
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
        "Gli squali balena di Gladden Spit arrivano fra marzo e giugno per le uova dei pesci, ma solo per pochi giorni: non costruire il viaggio attorno a loro.",
        "Il bus sulla Southern Highway è lento: tenere un buon margine se c'è un volo.",
        "Il tramonto porta sandflies sulla spiaggia: repellente.",
        "Le gite in barca possono saltare con il mare mosso."
      ],
      "gite": [
        {
          "nome": "Dangriga",
          "distanza": "circa mezz'ora di strada da Hopkins",
          "come": "In auto, navetta o bus lungo la costa.",
          "testo": "La città principale dei garifuna in Belize, con laboratori di tamburi e una vita quotidiana poco turistica. Il 19 novembre vi si festeggia con particolare intensità il Garifuna Settlement Day, che ricorda l'arrivo dei garifuna sulla costa."
        },
        {
          "nome": "Punta Gorda e il cacao del Toledo",
          "distanza": "più a sud sulla Southern Highway, circa 2-3 ore di strada",
          "come": "In auto o con una notte a Punta Gorda; le visite alle fattorie di cacao si prenotano sul posto.",
          "testo": "Il distretto più a sud del Belize, con villaggi maya mopan e q'eqchi' e piccole fattorie dove il cacao si coltiva e si lavora a mano. Da qui arriva il cioccolato che si vende in tutto il paese."
        }
      ],
      "faq": [
        {
          "domanda": "Placencia o Hopkins?",
          "risposta": "Placencia ha la spiaggia più bella e più servizi; Hopkins è un villaggio garifuna più tranquillo, dove contano musica e cucina. Sono a meno di un'ora, e molti dividono il soggiorno fra le due."
        },
        {
          "domanda": "Quando si vedono gli squali balena?",
          "risposta": "Fra marzo e giugno, nei giorni attorno alla luna piena, a Gladden Spit. Anche allora non sono garantiti: meglio considerarli un bonus."
        },
        {
          "domanda": "Quanti giorni servono?",
          "risposta": "Due o tre: un giorno per Placencia e Laughing Bird Caye, uno per Hopkins e il Cockscomb, un terzo per le Silk Cayes o Monkey River."
        },
        {
          "domanda": "Al Cockscomb si vede il giaguaro?",
          "risposta": "Quasi mai: è un animale notturno e schivo. Si vedono più facilmente uccelli, scimmie e tracce; il motivo per andarci è la foresta con le sue cascate."
        },
        {
          "domanda": "Che cosa mangiare a Hopkins?",
          "risposta": "L'hudut, pesce nel latte di cocco con purè di platano verde, il piatto simbolo della cucina garifuna. Lo preparano soprattutto i ristoranti di famiglia, spesso su prenotazione perché richiede tempo."
        }
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Palme, sabbia bianca e mare turchese sulla spiaggia di Placencia, Belize',
    immagine: '/images/belize/placencia-hopkins.jpg',
  },
]
