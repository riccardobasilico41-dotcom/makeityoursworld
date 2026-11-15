import type { Destinazione } from '@/lib/types'

// Destinazioni del viaggio montenegro-itinerario, viaggio fatto da Rick:
// visitataPersonalmente true; il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Prezzi e orari verificati a
// ottobre 2026, indicativi.

export const destinazioniMontenegro: Destinazione[] = [
  {
    slug: 'bocche-di-cattaro',
    paeseSlug: 'montenegro',
    ordine: 1,
    nome: 'Bocche di Cattaro: Kotor e Perast',
    tipologia: ['patrimonio UNESCO', 'mare', 'città storica'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata la prima tappa dei miei dieci giorni in Montenegro con amici, in auto a noleggio: tre giorni con base a Kotor, la città vecchia e le mura fino alla fortezza, poi Perast, la Madonna dello Scarpello e il giro delle Bocche.",
    introduzione:
      'Una baia profonda e ramificata, chiusa tra montagne che scendono a picco sull\'acqua, con le città venete di Kotor e Perast, palazzi di capitani di nave e isolotti con chiese e monasteri.',
    percheAndarci:
      'Per la vista dalle mura di Kotor, la città vecchia veneziana, Perast e la Madonna dello Scarpello: è il paesaggio più noto del Montenegro.',
    cosaVedere: [
      'La città vecchia di Kotor e la cattedrale di San Trifone',
      'Le mura e la fortezza di San Giovanni',
      'Perast e le isole della Madonna dello Scarpello e di San Giorgio',
      'I mosaici romani di Risan',
      'Dobrota e Prčanj con i palazzi dei capitani',
    ],
    cosaFare: ['Salire alle mura all\'alba', 'Prendere la barca per la Madonna dello Scarpello', 'Girare la baia passando dal traghetto di Kamenari'],
    doveDormire: 'Città vecchia di Kotor per l\'atmosfera; Dobrota, Muo e Prčanj per tranquillità e parcheggio; Perast per una notte in un palazzo.',
    doveMangiare: 'Konobe sul mare con pesce alla griglia, cozze alla buzara e risotto nero.',
    comeArrivare: "L'aeroporto di Tivat è a 15-20 minuti da Kotor: in taxi circa 15-20 €, oppure con l'auto a noleggio ritirata al terminal; la fermata dei bus di linea è sulla strada principale, a circa 200 metri. Da Podgorica, la capitale, servono circa un'ora e mezza di strada. Da Dubrovnik si arriva in circa un'ora e mezza passando il valico di Debeli Brijeg, con code anche di qualche ora d'estate. Bus frequenti collegano Kotor a Budva, Herceg Novi e Podgorica.",
    comeSpostarsi: 'Auto, bus locali lungo la riva, barche.',
    periodoMigliore: 'giugno e settembre; in luglio e agosto folla e navi da crociera.',
    costi: "Mura e fortezza 15 € in stagione, in contanti; cattedrale di San Trifone circa 4 €; barca per la Madonna dello Scarpello circa 5 € andata e ritorno; traghetto di Kamenari circa 5 € per l'auto. Budget giornaliero a persona, indicativo: basso 50-70 € (appartamento o guesthouse, bus, pranzi veloci), medio 90-140 € (piccolo hotel sul mare, cena in konoba, gita in barca), alto da 200 € (hotel di design o resort a Porto Montenegro e Luštica).",
    erroriDaEvitare: [
      'Visitare Kotor a metà giornata nei giorni con più navi da crociera',
      'Salire alle mura con il caldo e senza acqua',
      'Dormire in città vecchia con l\'auto: i parcheggi sono pochi e cari',
    ],
    luoghi: [
      {
        nome: "Città vecchia di Kotor",
        testo: "Un labirinto di vicoli medievali dentro mura costruite e ampliate per secoli, soprattutto dai veneziani: patrimonio UNESCO. Piazze minuscole, chiese romaniche e la cattedrale di San Trifone, consacrata nel 1166. I gatti sono ovunque, e la città ne ha fatto un simbolo.",
        come: "Si arriva in auto o bus fino ai parcheggi fuori dalle mura e si entra dalla Porta del Mare. Si visita a piedi da soli.",
        quando: "Presto la mattina o la sera: nelle ore centrali, con le navi da crociera in porto, i vicoli si riempiono.",
        tempo: "2-3 ore",
        costo: "Ingresso libero",
        orari: "Sempre accessibile",
        lat: 42.4249,
        lng: 18.7698,
        consiglio: "Perdersi nei vicoli senza mappa: la città è piccola e ci si ritrova sempre."
      },
      {
        nome: "Fortezza di San Giovanni",
        testo: "Le mura salgono lungo la montagna fino alla fortezza a circa 280 metri d'altezza. Dall'alto si vede tutta la baia, con la sua forma a fiordo. A metà salita c'è la chiesa della Madonna della Salute, del Cinquecento.",
        come: "Il sentiero parte dalla città vecchia: circa 1.350 gradini irregolari e 260 metri di dislivello. Scarpe chiuse e acqua.",
        quando: "All'apertura o nel tardo pomeriggio, mai nelle ore calde d'estate. In alto non c'è ombra.",
        tempo: "1 ora e mezza tra salita, sosta e discesa",
        costo: "15 € in stagione, in contanti (2026)",
        lat: 42.4236,
        lng: 18.7719,
        consiglio: "Entrare solo dagli ingressi ufficiali della città vecchia: i varchi non ufficiali nelle mura vengono chiusi o sorvegliati."
      },
      {
        nome: "Cattedrale di San Trifone",
        testo: "La cattedrale cattolica di Kotor, consacrata nel 1166 e ricostruita in parte dopo i terremoti del 1667 e del 1979. Dentro ci sono affreschi del Trecento, un ciborio romanico e, al piano superiore, il tesoro con reliquiari d'argento.",
        come: "Sulla piazza di San Trifone, nella città vecchia. Biglietto all'ingresso.",
        quando: "Mattina, prima che arrivino i gruppi delle crociere.",
        tempo: "30-45 minuti",
        costo: "circa 4 €, in contanti",
        lat: 42.4243,
        lng: 18.7714,
        consiglio: "Salire alla loggia del tesoro: da lì si vede la navata dall'alto."
      },
      {
        nome: "San Luca e San Nicola",
        testo: "Due chiese ortodosse a pochi metri l'una dall'altra. San Luca, del 1195, è piccola e romanica, e per secoli ha avuto due altari, uno cattolico e uno ortodosso; San Nicola è dei primi del Novecento, con le cupole che si vedono dalle mura.",
        come: "Sulla piazza di San Luca, nella parte nord della città vecchia. Ingresso libero.",
        quando: "Di giorno, fuori dagli orari delle funzioni.",
        tempo: "20 minuti",
        lat: 42.4255,
        lng: 18.7712
      },
      {
        nome: "Perast e le isole",
        testo: "Un paese barocco in una sola fila di palazzi sull'acqua, con sedici palazzi e diciassette chiese costruiti dalle famiglie di capitani al servizio di Venezia. Davanti ci sono due isolotti: lo scoglio della Madonna dello Scarpello, artificiale, e San Giorgio, con il monastero tra i cipressi.",
        come: "Da Kotor si arriva in auto o in bus lungo la strada costiera, circa 12 km. L'auto si lascia nei parcheggi all'ingresso del paese. Dal molo partono le barche per le isole, una traversata di pochi minuti.",
        quando: "Mattina o fine pomeriggio. Le barche partono quando sono piene.",
        tempo: "2-3 ore con la traversata",
        costo: "Barca per la Madonna dello Scarpello circa 5 € andata e ritorno",
        lat: 42.4869,
        lng: 18.6992,
        consiglio: "Fissare il prezzo della barca prima di salire, e andata e ritorno insieme."
      },
      {
        nome: "Madonna dello Scarpello",
        testo: "Un'isola artificiale costruita gettando in mare pietre e scafi di navi affondate attorno a uno scoglio, dove secondo la tradizione fu trovata un'icona della Madonna. La chiesa è piena di ex voto di marinai; ogni 22 luglio, con la Fašinada, le barche portano altre pietre per allargare l'isola.",
        come: "Con le barche dal lungomare di Perast. All'interno c'è un piccolo museo con offerta.",
        quando: "Mattina presto, prima delle escursioni organizzate.",
        tempo: "45 minuti sull'isola",
        costo: "Barca circa 5 €, piccola offerta per il museo",
        lat: 42.4867,
        lng: 18.6889,
        consiglio: "San Giorgio, l'isola accanto, è un monastero e di solito non si visita: si guarda dalla barca."
      },
      {
        nome: "Risan e i mosaici romani",
        testo: "L'antica Rhizon, considerata l'insediamento più antico delle Bocche di Cattaro. Dell'epoca romana sono rimasti i mosaici pavimentali di una villa del II secolo, con il dio Hypnos addormentato: è il resto più prezioso della città antica.",
        come: "Sulla strada da Kotor a Herceg Novi, nella parte più interna della baia. Si visita in pochi minuti.",
        quando: "Tutto l'anno, di mattina.",
        tempo: "30 minuti",
        costo: "6 €, bambini sotto i 12 anni 4 €; biglietto unico con il Museo di Perast 12 €",
        orari: "Da martedì a domenica 10-16; chiuso il lunedì, tutto gennaio, a Pasqua ortodossa, il 1° maggio e il 13-14 novembre",
        url: "https://muzejikotor.me/en/admission-fees-and-renting/",
        lat: 42.5147,
        lng: 18.695,
        consiglio: "Tappa breve sulla strada per Perast, non una giornata a sé."
      },
      {
        nome: "Dobrota",
        testo: "Il paese lungo la riva a nord di Kotor, con i palazzi dei capitani di nave del Settecento affacciati su piccole spiagge di ghiaia e pontili. È il posto dove si fa il bagno senza allontanarsi dalla città.",
        come: "A piedi lungo la riva dalla città vecchia, o con i bus locali verso Perast.",
        quando: "Pomeriggio per il mare, sera per la cena sull'acqua.",
        tempo: "mezza giornata",
        costo: "Ingresso libero",
        lat: 42.4542,
        lng: 18.7683,
        consiglio: "La sera la riva è illuminata e si vede la città vecchia con le mura accese."
      },
      {
        nome: "Prčanj",
        testo: "Un borgo di marinai sulla sponda opposta a Dobrota, con la grande chiesa della Natività della Vergine, costruita tra Sette e Ottocento e raggiunta da una scalinata. Strada stretta, poco traffico e lungomare tranquillo.",
        come: "In auto o in bici da Kotor verso Muo e Stoliv, circa 6 km.",
        quando: "Fine pomeriggio, con la luce sulla baia.",
        tempo: "1 ora",
        lat: 42.4575,
        lng: 18.7422,
        consiglio: "Proseguire fino a Stoliv e Lepetane chiudendo il giro con il traghetto."
      },
      {
        nome: "Traghetto Kamenari-Lepetane",
        testo: "Attraversa le Verige, lo stretto più sottile delle Bocche, in pochi minuti. Evita il giro intorno alla baia per chi va da Herceg Novi o dalla Croazia verso Tivat e Budva.",
        come: "Imbarco a Kamenari, sulla strada costiera, o a Lepetane, sulla sponda di Tivat. Si paga a bordo.",
        quando: "Mattina o sera d'estate: nei pomeriggi di luglio e agosto la coda può essere lunga.",
        tempo: "5 minuti di traversata, più l'attesa",
        costo: "circa 5 € per un'auto, pedoni gratis",
        orari: "Giorno e notte",
        lat: 42.4653,
        lng: 18.6858
      },
      {
        nome: "Tivat e Porto Montenegro",
        testo: "La città dell'aeroporto, con la marina di lusso di Porto Montenegro costruita sul vecchio arsenale navale. Lungomare con palme, yacht e ristoranti, e il museo del patrimonio navale con un sottomarino all'aperto.",
        come: "Da Kotor 15-20 minuti in auto o in bus. Si cammina sul lungomare.",
        quando: "Tardo pomeriggio e sera.",
        tempo: "2 ore",
        lat: 42.4333,
        lng: 18.6917,
        consiglio: "Da Tivat partono le barche per la Grotta Azzurra e per l'isola dei Fiori."
      },
      {
        nome: "Herceg Novi",
        testo: "La città all'ingresso delle Bocche, fondata nel 1382 dal re bosniaco Tvrtko, con la città vecchia in salita, la fortezza Kanli Kula in alto e il Forte Mare sul mare. Lungomare di sette chilometri fino a Igalo, pieno di bougainville e scalinate.",
        come: "Da Kotor circa 45 minuti in auto, con il traghetto di Kamenari o facendo il giro della baia. Bus frequenti.",
        quando: "Mattina per la città vecchia, sera per il lungomare.",
        tempo: "mezza giornata",
        lat: 42.4524,
        lng: 18.5381,
        consiglio: "Sulla strada per Dubrovnik è una buona sosta prima della frontiera."
      },
      {
        nome: "Grotta Azzurra di Luštica",
        testo: "Una grotta marina sulla punta della penisola di Luštica, dove la luce che entra sotto la volta colora l'acqua di un azzurro acceso. Ci si entra in barca e si può fare il bagno all'interno.",
        come: "Solo in barca, con le escursioni da Kotor, Tivat o Herceg Novi, spesso abbinate a Mamula e alla Madonna dello Scarpello.",
        quando: "Mezzogiorno, con il sole alto che illumina l'acqua; con mare mosso le barche non entrano.",
        tempo: "mezza giornata con l'escursione",
        lat: 42.3756,
        lng: 18.5982,
        consiglio: "Portare il costume: il bagno nella grotta è la parte migliore."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Kotor all'apertura, con la salita alla fortezza",
          "Pranzo in città vecchia",
          "Perast e barca per la Madonna dello Scarpello nel pomeriggio",
          "Tramonto sulla riva di Dobrota"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Kotor, mura e fortezza al mattino, città vecchia e cattedrale nel pomeriggio",
          "Giorno 2: Risan, Perast e giro in barca nelle isole, poi Prčanj e Dobrota"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Kotor, mura e fortezza al mattino, cattedrale e chiese nel pomeriggio, cena a Dobrota",
          "Giorno 2: Perast, Madonna dello Scarpello e Risan, poi rientro per Prčanj",
          "Giorno 3: barca per la Grotta Azzurra di Luštica, oppure Herceg Novi e Tivat passando dal traghetto di Kamenari"
        ]
      }
    ],
    zone: [
      {
        nome: "Città vecchia di Kotor",
        perChi: "chi vuole l'atmosfera",
        testo: "Si dorme dentro le mura, a piedi da tutto. Di giorno è rumorosa per le crociere e la sera i locali restano aperti fino a tardi. Le auto non entrano: si lascia la macchina fuori."
      },
      {
        nome: "Dobrota, Muo e Prčanj",
        perChi: "chi viaggia in auto",
        testo: "Sulla riva a pochi chilometri da Kotor, con parcheggio più facile e meno folla. Il centro si raggiunge a piedi lungo la riva o con un bus locale."
      },
      {
        nome: "Perast",
        perChi: "chi cerca silenzio",
        testo: "Pochi alberghi e palazzi trasformati in camere. Nel tardo pomeriggio, quando partono i gruppi, il paese è quasi vuoto. Pochi ristoranti."
      },
      {
        nome: "Tivat, Porto Montenegro e Luštica",
        perChi: "chi cerca un hotel di lusso",
        testo: "Hotel di catena e resort sul mare, a pochi minuti dall'aeroporto. Più moderni e meno caratteristici, con Kotor a 20 minuti d'auto.",
        fascia: "da 200 €"
      }
    ],
    sapori: [
      {
        nome: "Pesce alla griglia",
        testo: "Orata, branzino e calamari, di solito a peso, nelle konobe lungo la baia (Dobrota, Prčanj, Perast)."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto nero al nero di seppia, piatto tipico della costa, da provare nelle trattorie familiari."
      },
      {
        nome: "Pršut e formaggio di Njeguši",
        testo: "Prosciutto affumicato e formaggio stagionato, che arrivano dalla montagna sopra Kotor."
      },
      {
        nome: "Vranac",
        testo: "Rosso corposo del Montenegro, quasi sempre disponibile al bicchiere."
      }
    ],
    attenzioni: [
      "Con le navi da crociera in porto (di solito da maggio a ottobre) Kotor è congestionata nelle ore centrali: si evita arrivando presto.",
      "Taxi non ufficiali all'aeroporto di Tivat: usare quelli con tariffa esposta o concordare il prezzo prima di salire.",
      "Parcheggi a Kotor e Perast spesso a pagamento e con controlli frequenti: usare i parcheggi indicati e conservare lo scontrino.",
      "Nella baia il traghetto Kamenari-Lepetani evita il lungo giro intorno alla baia; d'estate la coda può durare a lungo."
    ],
    gite: [
      {
        nome: "Lovćen, Njeguši e Cetinje",
        distanza: "circa 1 ora fino a Njeguši",
        come: "In auto da Kotor lungo la strada delle 25 serpentine.",
        testo: "La strada dei tornanti sopra la baia, il prosciutto di Njeguši, il mausoleo di Njegoš in vetta e la vecchia capitale Cetinje: una giornata piena tra montagna e storia."
      },
      {
        nome: "Budva e Sveti Stefan",
        distanza: "circa 40 minuti",
        come: "In auto o con i bus frequenti da Kotor per Budva.",
        testo: "La città vecchia di Budva sulla penisola fortificata e il belvedere sull'isolotto di Sveti Stefan, con un bagno in una delle baie verso Petrovac."
      },
      {
        nome: "Dubrovnik",
        distanza: "circa 1 ora e mezza, senza code alla frontiera",
        come: "In auto o con i bus da Kotor e Herceg Novi, passando il valico di Debeli Brijeg.",
        testo: "Le mura e la città vecchia di Dubrovnik. D'estate le code alla frontiera croata possono durare ore: conviene partire all'alba e controllare che il noleggio permetta l'uscita dal paese."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per le Bocche di Cattaro?",
        risposta: "Due giorni bastano per Kotor con le mura e per Perast con la Madonna dello Scarpello. Con tre si aggiungono la Grotta Azzurra in barca oppure Herceg Novi e Tivat."
      },
      {
        domanda: "Quanto costa salire alle mura di Kotor?",
        risposta: "15 € a persona in stagione nel 2026, da pagare in contanti agli ingressi ufficiali della città vecchia. La salita richiede circa un'ora a passo tranquillo."
      },
      {
        domanda: "Meglio dormire a Kotor o a Perast?",
        risposta: "Kotor è più comoda per ristoranti e bus, ma rumorosa d'estate e senza auto dentro le mura. Perast è molto più tranquilla la sera, con pochi ristoranti: va bene per una o due notti."
      },
      {
        domanda: "Come si arriva alla Madonna dello Scarpello?",
        risposta: "Con le barche che partono dal lungomare di Perast, circa 5 € andata e ritorno e pochi minuti di traversata. Conviene concordare il prezzo prima di salire."
      },
      {
        domanda: "Quando ci sono meno navi da crociera a Kotor?",
        risposta: "Le crociere arrivano soprattutto da maggio a ottobre, con picchi in alcuni giorni della settimana: il calendario degli arrivi è pubblicato dal porto di Kotor. Nei giorni pieni conviene visitare la città vecchia presto la mattina o dopo le 18."
      },
      {
        domanda: "Serve l'auto per girare le Bocche?",
        risposta: "Non è indispensabile: bus locali collegano Kotor, Perast, Tivat e Herceg Novi. Con l'auto però si fa il giro della baia con più libertà, si raggiungono Prčanj e Luštica e si sale al Lovćen."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'I tetti di tegole rosse della città vecchia di Kotor e le cupole della chiesa di San Nicola',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-02-bocche-di-cattaro.jpg',
  },
  {
    slug: 'lovcen-cetinje',
    paeseSlug: 'montenegro',
    ordine: 2,
    nome: 'Lovćen e Cetinje',
    tipologia: ['montagna', 'parco nazionale', 'storia'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato durante i dieci giorni in Montenegro con amici: in auto da Kotor su per le serpentine del Lovćen, Njeguši e il mausoleo di Njegoš, con la notte a Cetinje.",
    introduzione:
      'La montagna simbolo del Montenegro, sopra le Bocche, con il mausoleo del principe-vescovo e poeta Njegoš in vetta, e la vecchia capitale reale di Cetinje ai suoi piedi.',
    percheAndarci:
      'Per la strada delle serpentine da Kotor, il prosciutto di Njeguši, la vista dal mausoleo e la Cetinje delle ambasciate.',
    cosaVedere: ['Le venticinque serpentine sopra Kotor', 'Il villaggio di Njeguši', 'Il mausoleo di Njegoš sul Jezerski vrh', 'Il monastero e il palazzo del re Nicola a Cetinje'],
    cosaFare: ['Assaggiare pršut e formaggio a Njeguši', 'Salire i 461 gradini del mausoleo'],
    doveDormire: 'Guesthouse e piccoli hotel a Cetinje.',
    doveMangiare: 'Pršut, formaggio njeguški e njeguški steak nelle trattorie di Njeguši.',
    comeArrivare: "Da Kotor si sale in auto lungo le 25 serpentine fino a Njeguši, circa un'ora; da lì al mausoleo di Njegoš e poi a Cetinje servono altri 30-40 minuti. Da Budva Cetinje è a circa 40 minuti, da Podgorica a mezz'ora. Senza auto, i bus collegano Cetinje con Budva e Podgorica, ma per Njeguši e il mausoleo serve un'auto o un'escursione organizzata.",
    comeSpostarsi: 'Auto.',
    periodoMigliore: 'maggio-ottobre; d\'inverno la strada del mausoleo può essere innevata.',
    costi: "Parco nazionale del Lovćen 3 € a persona al giorno; mausoleo di Njegoš 8 €; Museo del re Nicola 8 €; Biljarda 5 €; biglietto unico per tutti i musei nazionali e il mausoleo 20 €. Budget giornaliero a persona, indicativo: basso 50-70 € (guesthouse a Cetinje, pranzo a Njeguši), medio 90-140 € (piccolo hotel e musei), alto da 200 €.",
    erroriDaEvitare: ['Affrontare le serpentine con un camper grande o di notte', 'Salire con le nuvole basse: la vista sparisce'],
    luoghi: [
      {
        nome: "Strada delle 25 serpentine",
        testo: "La vecchia strada austro-ungarica che sale da Kotor al Lovćen con 25 tornanti numerati. In pochi chilometri si sale dal livello del mare all'altopiano di Njeguši, con la baia sempre più piccola sotto.",
        come: "Si percorre in auto da Kotor. Strada stretta, con molti pullman.",
        quando: "Mattina, per avere luce sulla baia e meno traffico.",
        tempo: "1 ora con le soste",
        costo: "Gratuita",
        consiglio: "Le soste panoramiche sono poche e piccole: fermarsi dove c'è spazio sicuro."
      },
      {
        nome: "Njeguši",
        testo: "Il villaggio d'origine della dinastia Petrović-Njegoš, sulle pendici del Lovćen. Qui si mangiano il prosciutto affumicato e il formaggio che hanno reso famosa la zona, e si visita la casa natale di Njegoš.",
        come: "Sulla strada tra Kotor e il Lovćen. Si pranza in una delle trattorie.",
        quando: "Ora di pranzo, tutto l'anno.",
        tempo: "1 ora",
        costo: "Casa natale di Njegoš 3 €; inclusa nel biglietto del mausoleo",
        orari: "Casa natale: dall'11 aprile al 15 novembre tutti i giorni 9-16; chiusa dal 16 novembre al 10 aprile",
        url: "https://en.narodnimuzej.me/posjeta-njegoseva-rodna-kuca/",
        lat: 42.4339,
        lng: 18.8103,
        consiglio: "Il pršut si compra anche intero o a fette sottovuoto, per portarlo a casa."
      },
      {
        nome: "Mausoleo di Njegoš",
        testo: "In cima al Jezerski vrh, a 1.657 metri, la tomba del principe-vescovo e poeta Petar II Petrović-Njegoš. Si sale per 461 gradini scavati nella roccia. Dalla terrazza si vedono la baia, il lago di Scutari e, nei giorni limpidi, l'Adriatico.",
        come: "In auto dal parcheggio, con l'ultimo tratto a piedi dopo il tunnel.",
        quando: "Mattina presto o tardo pomeriggio. In inverno la strada può essere chiusa dalla neve.",
        tempo: "1 ora e mezza",
        costo: "8 €, studenti 4 €, sotto i 12 anni gratis; più l'ingresso al parco, 3 €",
        orari: "Dall'11 aprile al 15 novembre tutti i giorni 9-16, ultimo ingresso mezz'ora prima; chiuso dal 16 novembre al 10 aprile",
        url: "https://en.narodnimuzej.me/posjeta-njegosev-mauzolej/",
        lat: 42.4,
        lng: 18.8378,
        consiglio: "Controllare il meteo: con nuvole basse non si vede nulla."
      },
      {
        nome: "Cetinje",
        testo: "L'antica capitale storica del Montenegro, con palazzi di ambasciate dell'Ottocento e il piccolo palazzo del re Nicola. Il monastero di Cetinje custodisce le reliquie di San Pietro, e la Biljarda, dove visse Njegoš, fa parte del Museo Nazionale.",
        come: "Da Njeguši in auto, scendendo dal Lovćen. In città si cammina.",
        quando: "Mattina, quando i musei sono aperti.",
        tempo: "2-3 ore",
        lat: 42.3894,
        lng: 18.9247,
        consiglio: "Il Museo del re Nicola, la Biljarda e il monastero sono a pochi minuti a piedi l'uno dall'altro: mezza giornata basta per tutti."
      },
      {
        nome: "Monastero di Cetinje",
        testo: "Il monastero ortodosso ricostruito all'inizio del Settecento, dopo che il primo, fondato nel 1484 da Ivan Crnojević, era stato distrutto dagli ottomani. Custodisce le reliquie di San Pietro di Cetinje e oggetti venerati come la mano destra di San Giovanni Battista.",
        come: "In centro, ai piedi della collina. Si visita in silenzio, con spalle e gambe coperte.",
        quando: "Mattina, fuori dagli orari delle funzioni.",
        tempo: "30 minuti",
        costo: "Ingresso libero",
        lat: 42.3877,
        lng: 18.9214
      },
      {
        nome: "Museo del re Nicola",
        testo: "Il palazzo dove visse re Nicola I, l'ultimo sovrano del Montenegro, con arredi, ritratti, armi e decorazioni della corte. Racconta la piccola capitale europea di fine Ottocento, con le ambasciate delle grandi potenze a pochi passi.",
        come: "Sulla piazza centrale di Cetinje. Visita guidata o libera, secondo il periodo.",
        quando: "Mattina; d'inverno chiude nel fine settimana.",
        tempo: "1 ora",
        costo: "8 €, studenti 4 €, sotto i 12 anni gratis; biglietto unico dei musei nazionali 20 €",
        orari: "Dall'11 aprile al 15 novembre tutti i giorni 9-16; dal 16 novembre al 10 aprile lunedì-venerdì 9-15, chiuso sabato e domenica",
        url: "https://en.narodnimuzej.me/posjeta-muzej-kralja-nikole/",
        lat: 42.3875,
        lng: 18.9244
      },
      {
        nome: "Biljarda",
        testo: "La residenza di Njegoš, costruita nel 1838 e chiamata così per il tavolo da biliardo che il principe-vescovo fece portare fino a Cetinje. Ospita il museo dedicato a Njegoš e, in un padiglione accanto, il grande plastico in rilievo del Montenegro.",
        come: "Accanto al monastero, a pochi minuti a piedi dal Museo del re Nicola.",
        quando: "Mattina.",
        tempo: "45 minuti",
        costo: "5 € con il plastico del Montenegro, studenti 2,50 €",
        orari: "Dall'11 aprile al 15 novembre tutti i giorni 9-16; dal 16 novembre al 10 aprile lunedì-venerdì 9-15",
        url: "https://en.narodnimuzej.me/posjeta-njegosev-muzej-biljarda/",
        lat: 42.3878,
        lng: 18.9231,
        consiglio: "Guardare il plastico prima di ripartire: si vede tutto il percorso tra le Bocche, il Lovćen e il lago."
      },
      {
        nome: "Chiesa di Corte (Ćipur)",
        testo: "Una piccola chiesa in pietra ricostruita nel 1886 sul luogo del primo monastero di Cetinje, quello fondato da Ivan Crnojević. Dal 1989 accoglie le tombe di re Nicola e della regina Milena, riportate dall'Italia.",
        come: "Accanto al Museo del re Nicola, nel centro di Cetinje.",
        quando: "Di giorno.",
        tempo: "15 minuti",
        lat: 42.3869,
        lng: 18.9236
      },
      {
        nome: "Chiesa dei Valacchi",
        testo: "La chiesa più antica di Cetinje, del 1450, ricostruita nel Settecento. Il recinto che la circonda è fatto con le canne dei fucili presi ai turchi nelle guerre dell'Ottocento.",
        come: "Nella parte nord del centro, a pochi minuti a piedi dalla piazza.",
        quando: "Di giorno.",
        tempo: "15 minuti",
        lat: 42.3909,
        lng: 18.9244,
        consiglio: "Il recinto si vede bene anche senza entrare."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Salita alle 25 serpentine da Kotor",
          "Pranzo a Njeguši",
          "Mausoleo di Njegoš",
          "Cetinje nel pomeriggio e rientro per la strada di Budva"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: serpentine, Njeguši e pranzo con il pršut, mausoleo di Njegoš nel pomeriggio, notte a Cetinje",
          "Giorno 2: monastero di Cetinje, Biljarda e Museo del re Nicola al mattino, poi Rijeka Crnojevića e il lago di Scutari"
        ]
      }
    ],
    zone: [
      {
        nome: "Cetinje",
        perChi: "chi vuole una base fuori dal mare",
        testo: "Città universitaria e tranquilla, raggiungibile in auto da Kotor e da Budva. Pochi alberghi, guesthouse a prezzi bassi, vita serale limitata."
      },
      {
        nome: "Njeguši",
        perChi: "chi vuole dormire in montagna",
        testo: "Poche camere in case di famiglia e trattorie, a metà strada tra Kotor e il mausoleo. Di sera non c'è nulla, ma il mattino il parco è vicinissimo."
      },
      {
        nome: "Kotor",
        perChi: "chi fa la gita in giornata",
        testo: "Più comodo per gli orari e per i ristoranti. Si sale in auto la mattina e si rientra la sera."
      }
    ],
    sapori: [
      {
        nome: "Pršut di Njeguši",
        testo: "Prosciutto crudo di maiale affumicato con legno di faggio e stagionato in quota."
      },
      {
        nome: "Formaggio njeguški",
        testo: "Formaggio vaccino stagionato, sapido, tipico dell'area."
      },
      {
        nome: "Njeguški steak",
        testo: "Cotoletta di vitello farcita con prosciutto e formaggio, servita nelle trattorie del villaggio."
      }
    ],
    attenzioni: [
      "La strada delle serpentine ha curve strette e pullman: precedenza a chi sale e attenzione ai tornanti.",
      "Evitare i giorni di nebbia: le curve sono fitte e la visibilità cala.",
      "Le trattorie lungo la strada a volte fanno pagare di più le porzioni «a peso»: chiedere il prezzo prima di ordinare."
    ],
    gite: [
      {
        nome: "Rijeka Crnojevića e il lago di Scutari",
        distanza: "circa 30 minuti",
        come: "In auto da Cetinje verso sud-est, su una strada stretta di collina.",
        testo: "Il borgo con il ponte di pietra sul fiume Crnojević e, poco più avanti, il belvedere di Pavlova Strana sull'ansa del fiume. Da qui si prosegue per Virpazar e il giro in barca sul lago."
      },
      {
        nome: "Budva",
        distanza: "circa 40 minuti",
        come: "In auto o in bus da Cetinje, scendendo verso la costa.",
        testo: "La città vecchia sulla penisola fortificata e le spiagge della riviera: si scende al mare nel pomeriggio, dopo i musei del mattino."
      }
    ],
    faq: [
      {
        domanda: "Quanto costa entrare nel parco del Lovćen?",
        risposta: "3 € a persona al giorno nel 2026, con il centro visite e i sentieri didattici compresi. Il mausoleo di Njegoš si paga a parte, 8 €."
      },
      {
        domanda: "Il mausoleo di Njegoš è aperto tutto l'anno?",
        risposta: "No: apre dall'11 aprile al 15 novembre, tutti i giorni 9-16. Dal 16 novembre al 10 aprile è chiuso ai visitatori, e la strada può essere innevata."
      },
      {
        domanda: "La strada delle serpentine è difficile da guidare?",
        risposta: "È stretta, con 25 tornanti e pochi punti per incrociare i pullman, ma asfaltata. Si guida con calma, di giorno, suonando nelle curve cieche; con camper grandi conviene evitarla."
      },
      {
        domanda: "Si può salire al Lovćen in funivia da Kotor?",
        risposta: "Sì, con la funivia Kotor-Lovćen: circa 11 minuti di salita, 20 € andata e ritorno e 12 € solo andata per un adulto. A fine stagione chiude: nel 2026 l'ultimo giorno è stato il 31 ottobre, con riapertura prevista in primavera 2027."
      },
      {
        domanda: "Conviene il biglietto unico dei musei di Cetinje?",
        risposta: "Costa 20 € e comprende tutti i musei nazionali e il mausoleo di Njegoš. Conviene a chi visita il mausoleo, il Museo del re Nicola e la Biljarda, che separati costano 21 €."
      },
      {
        domanda: "Meglio dormire a Cetinje o tornare a Kotor?",
        risposta: "Chi prosegue verso il lago di Scutari o Podgorica guadagna tempo dormendo a Cetinje, che è anche più economica. Chi ha Kotor come base fa il giro in giornata e rientra la sera."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'Prati e alberi sull\'altopiano del parco nazionale del Lovćen',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-04-lovcen-cetinje.jpg',
  },
  {
    slug: 'budva-riviera',
    paeseSlug: 'montenegro',
    ordine: 3,
    nome: 'Budva e la riviera',
    tipologia: ['mare', 'spiagge', 'vita notturna'],
    giorniConsigliati: '1-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono passato durante i dieci giorni in Montenegro con amici: un giorno in auto da Cetinje lungo la costa, Budva e Sveti Stefan fino a Petrovac.",
    introduzione:
      'La costa centrale del Montenegro, con la città vecchia fortificata di Budva, l\'isolotto-resort di Sveti Stefan e le baie fino a Petrovac.',
    percheAndarci: 'Per qualche giorno di mare, scegliendo le baie più tranquille a sud di Budva.',
    cosaVedere: ['La città vecchia di Budva', 'Sveti Stefan dal belvedere', 'Le spiagge di Drobni pijesak e Petrovac'],
    cosaFare: ['Bagni nelle baie tra Budva e Petrovac', 'Una sera nella città vecchia di Budva'],
    doveDormire: 'Petrovac e Pržno per la tranquillità, Budva per la vita notturna.',
    doveMangiare: 'Pesce e cucina mediterranea; konobe nelle baie.',
    comeArrivare: "Da Kotor si arriva in circa 40 minuti di auto, dall'aeroporto di Tivat in circa 30, da Podgorica in poco più di un'ora passando per Cetinje. La stazione dei bus di Budva ha collegamenti frequenti con Kotor, Herceg Novi, Bar e Podgorica, e d'estate i bus costieri fermano anche a Bečići, Sveti Stefan e Petrovac. In luglio e agosto la strada della riviera è lenta: si parte presto o la sera.",
    comeSpostarsi: 'Auto, bus costieri, taxi.',
    periodoMigliore: 'giugno e settembre.',
    costi: "Città vecchia di Budva a ingresso libero; lettini e ombrelloni 15-30 € al giorno in alta stagione. Budget giornaliero a persona, indicativo: basso 50-70 € (appartamento, spiaggia libera, cucina locale), medio 90-140 € (hotel sul mare, lettino, cena di pesce), alto da 200 € (resort tra Pržno e Sveti Stefan).",
    erroriDaEvitare: ['Aspettarsi una Budva tranquilla in agosto', 'Contare sulla visita dell\'isola di Sveti Stefan: l\'albergo è chiuso dal 2020 e l\'isola non si visita'],
    luoghi: [
      {
        nome: "Città vecchia di Budva",
        testo: "Un nucleo fortificato su una penisola, con mura in gran parte di epoca veneziana, la cittadella e vicoli di pietra. Fu in gran parte ricostruita dopo il terremoto del 1979. Nella piazza delle chiese, verso la punta, ci sono Santa Maria in Punta, San Giovanni e la chiesa ortodossa della Santissima Trinità.",
        come: "A piedi dai parcheggi della Riviera. Si gira da soli in un'ora.",
        quando: "Sera per l'atmosfera, mattina presto per la luce sul mare e i vicoli vuoti.",
        tempo: "1-2 ore",
        costo: "Ingresso libero",
        orari: "Sempre accessibile",
        lat: 42.2783,
        lng: 18.838,
        consiglio: "Evitare i ristoranti con camerieri che invitano ad entrare."
      },
      {
        nome: "Cittadella di Budva",
        testo: "La fortezza sulla punta della città vecchia, con i bastioni sul mare e una terrazza che guarda le spiagge e l'isola di San Nicola. Dentro ci sono una biblioteca e spazi espositivi.",
        come: "Dalla piazza delle chiese, dentro le mura. Ingresso a pagamento.",
        quando: "Tardo pomeriggio, con il sole basso sul mare.",
        tempo: "30 minuti",
        consiglio: "La vista migliore è dai bastioni verso Mogren, non verso la marina."
      },
      {
        nome: "Spiaggia di Mogren",
        testo: "Due piccole spiagge, Mogren 1 e Mogren 2, sotto le scogliere appena fuori dalla città vecchia. Si arriva con un breve sentiero lungo la scogliera che parte dalle mura. È la spiaggia più nota vicino al centro, ma in agosto si riempie presto.",
        come: "A piedi dalla città vecchia, pochi minuti sul sentiero lungo la scogliera.",
        quando: "Mattina presto in estate; giugno e settembre sono più tranquilli.",
        tempo: "mezza giornata",
        lat: 42.2771,
        lng: 18.8327,
        consiglio: "Lettini e ombrelloni sono a pagamento: chi vuole stendere l'asciugamano deve arrivare presto per trovare la parte libera."
      },
      {
        nome: "Isola di San Nicola",
        testo: "L'isola davanti a Budva, la più grande della riviera, con una piccola chiesa e spiagge di ghiaia sul lato verso la città. Il resto è macchia e roccia.",
        come: "D'estate con le barche-taxi dal porto di Budva, una traversata di circa 10 minuti.",
        quando: "Da giugno a settembre, quando le barche fanno servizio.",
        tempo: "mezza giornata",
        lat: 42.2667,
        lng: 18.85,
        consiglio: "Portare acqua e scarpette: la ghiaia è grossa e i servizi sono pochi."
      },
      {
        nome: "Spiaggia di Jaz",
        testo: "Una lunga spiaggia di ghiaia e sabbia a pochi chilometri a nord-ovest di Budva, aperta e meno costruita di quelle della città. D'estate ci sono festival e grandi concerti.",
        come: "In auto o con i bus della costa verso Tivat; parcheggio a pagamento.",
        quando: "Giugno e settembre; in luglio e agosto è piena nei giorni dei concerti.",
        tempo: "mezza giornata",
        lat: 42.2833,
        lng: 18.8047,
        consiglio: "La parte occidentale della spiaggia è più tranquilla."
      },
      {
        nome: "Sveti Stefan",
        testo: "Un isolotto-villaggio di pietra collegato a terra da un istmo, trasformato in resort di lusso. L'albergo che lo occupa è chiuso dal 2020 e l'isola non si visita. Il celebre colpo d'occhio è dal belvedere sulla strada sopra la baia.",
        come: "Poco a sud di Budva, sulla strada costiera. Si guarda dal belvedere e dalle spiagge ai lati dell'istmo; verificare sul posto se l'albergo ha riaperto.",
        quando: "Tardo pomeriggio, con la luce dorata sulle pietre.",
        tempo: "30 minuti per la sosta panoramica",
        lat: 42.2561,
        lng: 18.8914,
        consiglio: "Si può scendere alla spiaggia ai lati dell'istmo, ma è a pagamento in estate."
      },
      {
        nome: "Pržno e Miločer",
        testo: "Un piccolo paese di pescatori con una spiaggia raccolta e, subito accanto, il parco di Miločer, l'antica residenza estiva della famiglia reale con pini e cipressi sul mare. Un sentiero lungo la costa porta da Pržno fino a Sveti Stefan.",
        come: "In auto o in bus da Budva, circa 15 minuti. Il sentiero costiero per Sveti Stefan è a piedi.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "2-3 ore",
        lat: 42.2675,
        lng: 18.8933,
        consiglio: "Il sentiero tra i pini fino a Sveti Stefan è la passeggiata più bella della riviera."
      },
      {
        nome: "Monastero di Praskvica",
        testo: "Un monastero ortodosso tra gli ulivi sulla collina sopra Pržno e Sveti Stefan, con la chiesa di San Nicola e quella della Santissima Trinità. Il nome viene dal profumo di pesca della sorgente vicina.",
        come: "In auto dalla strada costiera, con un breve tratto in salita. Abiti coprenti.",
        quando: "Mattina.",
        tempo: "30 minuti",
        costo: "Ingresso libero",
        lat: 42.2689,
        lng: 18.9103
      },
      {
        nome: "Monastero di Reževići",
        testo: "Un monastero ortodosso medievale sulla costa tra Sveti Stefan e Petrovac, con affreschi e una vista sul mare tra gli ulivi. Sotto c'è una piccola spiaggia.",
        come: "Sulla strada costiera, con parcheggio sul ciglio. Si visita in silenzio, con spalle e gambe coperte.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "30 minuti",
        costo: "Ingresso libero",
        lat: 42.2149,
        lng: 18.924
      },
      {
        nome: "Petrovac",
        testo: "Una baia più raccolta a sud di Budva, verso Bar, con lungomare, forte veneziano e un paio di isolotti. Più tranquilla e per famiglie.",
        come: "Da Budva in auto o con il bus costiero.",
        quando: "Giugno e settembre per mare e prezzi più bassi.",
        tempo: "mezza giornata",
        lat: 42.2056,
        lng: 18.9425,
        consiglio: "Una buona base per chi vuole mare senza la vita notturna di Budva."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Città vecchia di Budva al mattino",
          "Pranzo sul mare",
          "Belvedere di Sveti Stefan nel pomeriggio",
          "Bagno e cena a Petrovac"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: città vecchia e cittadella di Budva al mattino, pomeriggio a Mogren, sera in città",
          "Giorno 2: Pržno e sentiero di Miločer fino a Sveti Stefan, monastero di Reževići e cena a Petrovac"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: città vecchia, cittadella e spiaggia di Mogren",
          "Giorno 2: barca per l'isola di San Nicola, sera a Budva",
          "Giorno 3: Pržno, Miločer e Sveti Stefan, poi monasteri di Praskvica e Reževići e tramonto a Petrovac"
        ]
      }
    ],
    zone: [
      {
        nome: "Budva",
        perChi: "chi cerca vita notturna",
        testo: "Alberghi, locali e spiagge affollate. Più rumore e traffico d'estate, ma tutto a piedi e bus frequenti."
      },
      {
        nome: "Bečići e Rafailovići",
        perChi: "famiglie",
        testo: "Una lunga spiaggia di sabbia e ghiaia subito a sud di Budva, con grandi hotel e un lungomare pedonale che arriva in città in mezz'ora a piedi."
      },
      {
        nome: "Petrovac e Pržno",
        perChi: "chi vuole tranquillità",
        testo: "Baie più piccole, ristoranti sul mare, meno locali."
      }
    ],
    sapori: [
      {
        nome: "Pesce e frutti di mare",
        testo: "Calamari, branzino e gamberi alla griglia, nelle konobe sulle baie."
      },
      {
        nome: "Burek e pita",
        testo: "Pasta sfoglia ripiena di formaggio o carne, per uno spuntino veloce."
      },
      {
        nome: "Rakija",
        testo: "Grappa di frutta, offerta spesso a fine pasto."
      }
    ],
    attenzioni: [
      "In luglio e agosto la strada della Riviera è congestionata: partire presto o la sera.",
      "Le spiagge in concessione fanno pagare lettini e ombrelloni anche con prezzi molto diversi tra una baia e l'altra: chiedere prima.",
      "Ristoranti con menu senza prezzi: chiedere sempre il conto indicativo prima di ordinare pesce a peso."
    ],
    gite: [
      {
        nome: "Kotor e le Bocche",
        distanza: "circa 40 minuti",
        come: "In auto o con i bus frequenti da Budva.",
        testo: "La città vecchia di Kotor, la salita alle mura e, con un'ora in più, Perast e la Madonna dello Scarpello."
      },
      {
        nome: "Cetinje e il Lovćen",
        distanza: "circa 40 minuti fino a Cetinje",
        come: "In auto verso l'interno; per il mausoleo di Njegoš serve l'auto.",
        testo: "La vecchia capitale con i suoi musei e, sopra, il parco del Lovćen con il mausoleo in vetta."
      },
      {
        nome: "Lago di Scutari",
        distanza: "circa 45 minuti fino a Virpazar",
        come: "In auto passando per Petrovac e il tunnel Sozina, a pedaggio.",
        testo: "Il giro in barca da Virpazar tra canali di ninfee e uccelli, con pranzo a base di pesce di lago."
      }
    ],
    faq: [
      {
        domanda: "Si può visitare l'isola di Sveti Stefan?",
        risposta: "No: l'isola è un resort e l'albergo è chiuso dal 2020, quindi non si entra. Si guarda dal belvedere sulla strada costiera e dalle spiagge ai lati dell'istmo."
      },
      {
        domanda: "Quali sono le spiagge migliori vicino a Budva?",
        risposta: "Mogren, a piedi dalla città vecchia, e Jaz, più lunga e aperta, verso Tivat. Verso sud Pržno, la spiaggia ai lati di Sveti Stefan e Petrovac sono più tranquille."
      },
      {
        domanda: "Quanto costano lettini e ombrelloni?",
        risposta: "In alta stagione 15-30 € al giorno, con prezzi molto diversi tra una baia e l'altra. Quasi tutte le spiagge hanno una parte libera, piccola e da occupare presto."
      },
      {
        domanda: "Meglio dormire a Budva o a Petrovac?",
        risposta: "Budva per chi vuole locali e vita serale, a piedi da tutto. Petrovac per chi preferisce una baia tranquilla e familiare, a circa 20 minuti di auto."
      },
      {
        domanda: "Budva è caotica in agosto?",
        risposta: "Sì: traffico sulla strada costiera, spiagge piene e musica fino a tardi. Giugno e settembre hanno mare caldo e molta meno folla."
      },
      {
        domanda: "Serve l'auto sulla riviera?",
        risposta: "Non per Budva, Bečići e Petrovac, collegate da bus frequenti d'estate. Serve per i monasteri, le baie piccole e le gite verso Kotor, Cetinje e il lago."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'La riviera di Budva vista dall\'alto, con l\'isola di San Nicola e la città vecchia',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-05-budva-riviera.jpg',
  },
  {
    slug: 'lago-di-scutari',
    paeseSlug: 'montenegro',
    ordine: 4,
    nome: 'Lago di Scutari',
    tipologia: ['lago', 'parco nazionale', 'natura', 'vino'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato durante i dieci giorni in Montenegro con amici: un giorno sul lago tra Virpazar, Pavlova Strana e Rijeka Crnojevića, prima di salire verso Ostrog e il Durmitor.",
    introduzione:
      'Il più grande lago dei Balcani, condiviso con l\'Albania, parco nazionale con circa 270 specie di uccelli, canali di ninfee, monasteri sugli isolotti e i vigneti di Crmnica.',
    percheAndarci: 'Per un giro in barca tra canali e villaggi di pescatori, il belvedere di Pavlova Strana e i vini del lago.',
    cosaVedere: ['Virpazar e i canali di ninfee', 'Il belvedere di Pavlova Strana', 'Il villaggio di Rijeka Crnojevića', 'I monasteri sugli isolotti'],
    cosaFare: ['Un giro in barca da Virpazar', 'Una degustazione in una cantina familiare', 'Birdwatching con guida'],
    doveDormire: 'Guesthouse e agriturismi a Virpazar e nei villaggi.',
    doveMangiare: 'Carpa e anguilla del lago, vranac e kratošija.',
    comeArrivare: "Virpazar è a circa 30 minuti da Podgorica e a 30-40 minuti da Bar e Petrovac, passando per il tunnel Sozina, a pedaggio (circa 2,50 € per un'auto). Il paese ha anche una stazione sulla ferrovia Podgorica-Bar, a breve distanza dal molo. Rijeka Crnojevića si raggiunge da Cetinje in circa mezz'ora; la strada panoramica tra Virpazar e Rijeka Crnojevića è stretta e va fatta di giorno.",
    comeSpostarsi: 'Auto e barche.',
    periodoMigliore: 'maggio-ottobre; primavera e autunno per gli uccelli.',
    costi: "Parco nazionale 5 € a persona al giorno, con i centri visite di Vranjina e Virpazar; giro in barca 15-30 € a persona per 2-3 ore; noleggio kayak dal parco 3-5 € l'ora. Budget giornaliero a persona, indicativo: basso 45-65 € (guesthouse, pranzo in trattoria), medio 80-120 € (agriturismo con cantina, barca e degustazione), alto da 150 € (barca privata e cena in cantina).",
    erroriDaEvitare: ['Salire su barche senza licenza del parco', 'Percorrere la strada del lago di sera: è stretta e senza illuminazione'],
    luoghi: [
      {
        nome: "Virpazar e il giro in barca",
        testo: "Il paese di pescatori sulla riva nord del lago, da cui partono le barche tra ninfee, canneti e pellicani. Il Parco Nazionale del Lago di Scutari è tra le più grandi riserve di uccelli d'Europa, con il raro pellicano riccio.",
        come: "In auto da Podgorica o dalla costa, o in treno sulla linea Podgorica-Bar. Le barche partono dal molo e dalle agenzie del paese.",
        quando: "Mattina o tardo pomeriggio per vedere gli uccelli.",
        tempo: "2-3 ore",
        costo: "Barca 15-30 € a persona, più l'ingresso al parco, 5 €",
        url: "https://nparkovi.me/sections/30/skadarsko-jezero",
        lat: 42.2444,
        lng: 19.0903,
        consiglio: "Concordare durata, percorso e prezzo prima di salire."
      },
      {
        nome: "Pavlova Strana",
        testo: "Un belvedere sulla strada sopra il lago dove il fiume Crnojević fa un'ansa a ferro di cavallo attorno a una lingua di terra verde. È il panorama più fotografato della zona, con le montagne dell'Albania sullo sfondo nei giorni limpidi.",
        come: "In auto da Virpazar o da Rijeka Crnojevića per una strada di montagna, stretta e piena di curve.",
        quando: "Tardo pomeriggio.",
        tempo: "30 minuti",
        costo: "Gratuito",
        consiglio: "Il parcheggio è piccolo: arrivare presto."
      },
      {
        nome: "Rijeka Crnojevića",
        testo: "Un borgo sul fiume, con il ponte di pietra voluto dal principe Danilo nel 1853 e il vecchio porto. Le barche per il lago partono da qui.",
        come: "In auto da Cetinje, circa mezz'ora.",
        quando: "Mattina.",
        tempo: "1 ora e mezza",
        lat: 42.35,
        lng: 19.0333,
        consiglio: "Provare il pesce di lago nelle trattorie lungo il fiume."
      },
      {
        nome: "Vranjina e il centro visite",
        testo: "Un villaggio su un'altura nella parte nord del lago, all'inizio dell'argine che porta la strada e la ferrovia verso Podgorica. Ospita il centro visite del parco nazionale e, poco sopra, il monastero di San Nicola.",
        come: "Sulla strada tra Virpazar e Podgorica, poco dopo il ponte sul lago.",
        quando: "Mattina, prima di salire in barca.",
        tempo: "1 ora",
        costo: "Compreso nel biglietto del parco, 5 €",
        url: "https://nparkovi.me/sections/30/skadarsko-jezero",
        lat: 42.2742,
        lng: 19.1356
      },
      {
        nome: "Fortezza di Lesendro",
        testo: "Una fortezza dell'Ottocento su un isolotto vicino alla riva, costruita da Njegoš per controllare il lago al tempo delle guerre con i turchi. Oggi è in rovina e si vede dalla strada e dalle barche.",
        come: "Dalla strada Virpazar-Podgorica, vicino al ponte di Vranjina. I giri in barca ci passano accanto.",
        quando: "Tutto l'anno, da fuori.",
        tempo: "15 minuti",
        lat: 42.2716,
        lng: 19.1197
      },
      {
        nome: "Žabljak Crnojevića",
        testo: "Le rovine della capitale della dinastia Crnojević nel Quattrocento, su una collina isolata in mezzo alla piana paludosa del lago. Mura, una chiesa e la vista sui canali tutt'intorno.",
        come: "In auto fino al villaggio, poi a piedi su un sentiero in salita; in alternativa in barca.",
        quando: "Mattina o tardo pomeriggio: d'estate non c'è ombra.",
        tempo: "1-2 ore",
        lat: 42.3172,
        lng: 19.1569,
        consiglio: "Scarpe chiuse: il sentiero è sassoso."
      },
      {
        nome: "Monastero di Kom",
        testo: "Un monastero del Quattrocento su un isolotto nel lago, fondato dai signori della famiglia Crnojević, con la chiesa della Dormizione e affreschi del Cinquecento. È uno dei monasteri sull'acqua che si raggiungono solo in barca.",
        come: "In barca da Virpazar o da Rijeka Crnojevića, con i giri del lago che lo includono.",
        quando: "Mattina.",
        tempo: "mezza giornata con il giro in barca",
        lat: 42.3101,
        lng: 19.1279
      },
      {
        nome: "Godinje",
        testo: "Un villaggio di vignaioli sulla riva sud-occidentale del lago, con case di pietra unite da passaggi e cantine sotterranee. Qui si assaggiano vranac e kratošija dai produttori.",
        come: "In auto da Virpazar verso Murići, circa 15 minuti.",
        quando: "Settembre per la vendemmia; tutto l'anno per le degustazioni.",
        tempo: "1-2 ore",
        lat: 42.2211,
        lng: 19.1092,
        consiglio: "Chiamare prima la cantina: molte sono piccole aziende familiari."
      },
      {
        nome: "Monastero di Starčevo",
        testo: "Un piccolo monastero su un isolotto nella parte sud del lago, fondato alla fine del Trecento e tra i più antichi della zona.",
        come: "Solo in barca, con i giri più lunghi da Virpazar o da Murići.",
        quando: "Mattina, con il lago calmo.",
        tempo: "mezza giornata con il giro in barca",
        lat: 42.19,
        lng: 19.2111,
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Virpazar e giro in barca la mattina",
          "Pranzo con pesce di lago",
          "Pavlova Strana nel pomeriggio",
          "Cantina familiare per una degustazione"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: centro visite di Vranjina e Lesendro, giro in barca da Virpazar fino al monastero di Kom, cena con pesce di lago",
          "Giorno 2: Godinje e una cantina al mattino, poi la strada panoramica per Pavlova Strana e Rijeka Crnojevića"
        ]
      }
    ],
    zone: [
      {
        nome: "Virpazar",
        perChi: "chi vuole il lago",
        testo: "Camere in case di famiglia, ristoranti di pesce e partenze delle barche a piedi."
      },
      {
        nome: "Godinje e la Crmnica",
        perChi: "chi ama il vino",
        testo: "Agriturismi e camere nelle cantine tra i vigneti, a pochi minuti da Virpazar. Serve l'auto."
      },
      {
        nome: "Rijeka Crnojevića",
        perChi: "chi cerca silenzio",
        testo: "Pochissimi alloggi, ma luce serale bellissima e nessun turismo organizzato."
      }
    ],
    sapori: [
      {
        nome: "Carpa e anguilla del lago",
        testo: "Cotti in umido o fritti, nelle trattorie sul lago."
      },
      {
        nome: "Vranac e kratošija",
        testo: "I vini rossi della zona di Crmnica, in cantine familiari."
      },
      {
        nome: "Lozova rakija",
        testo: "Distillato d'uva, spesso fatto in casa."
      }
    ],
    attenzioni: [
      "I prezzi dei giri in barca variano molto: chiedere il prezzo per persona e la durata prima.",
      "Le zanzare sono tante da giugno ad agosto: portare repellente.",
      "Il parco richiede un biglietto d'ingresso: acquistarlo solo in punti ufficiali e conservarlo."
    ],
    gite: [
      {
        nome: "Podgorica",
        distanza: "circa 30 minuti",
        come: "In auto, in treno o in bus da Virpazar.",
        testo: "La capitale, con il quartiere ottomano di Stara Varoš, il ponte del Millennio sulla Morača e la cattedrale della Resurrezione con i mosaici dorati."
      },
      {
        nome: "Cetinje",
        distanza: "circa 30 minuti da Rijeka Crnojevića",
        come: "In auto.",
        testo: "La vecchia capitale reale con il monastero, la Biljarda di Njegoš e il Museo del re Nicola."
      },
      {
        nome: "Monastero di Ostrog",
        distanza: "circa 1 ora e mezza",
        come: "In auto passando per Podgorica e Danilovgrad.",
        testo: "Il santuario bianco incastrato nella roccia, sulla strada per Nikšić e il Durmitor."
      }
    ],
    faq: [
      {
        domanda: "Quanto costa l'ingresso al parco del lago di Scutari?",
        risposta: "5 € a persona al giorno nel 2026, con la visita ai centri di Vranjina e Virpazar compresa. Il biglietto si compra nei punti ufficiali del parco e va conservato durante il giro in barca."
      },
      {
        domanda: "Quanto costa un giro in barca sul lago?",
        risposta: "15-30 € a persona per 2-3 ore con le barche condivise da Virpazar; una barca privata costa di più. Prezzo, durata e percorso si concordano prima di salire."
      },
      {
        domanda: "Quando si vedono i pellicani?",
        risposta: "In primavera e in autunno, i periodi migliori per gli uccelli, di mattina presto o nel tardo pomeriggio. Le colonie sono protette e si guardano da lontano, meglio con un binocolo."
      },
      {
        domanda: "Si può fare il bagno nel lago?",
        risposta: "Sì, d'estate, nelle spiagge della riva sud come Murići o dalle barche nei punti consentiti. L'acqua è bassa e calda; da giugno ad agosto servono repellenti per le zanzare."
      },
      {
        domanda: "Il lago si visita in giornata dalla costa?",
        risposta: "Sì: Virpazar è a 30-40 minuti da Bar e Petrovac e a circa 45 minuti da Budva. Una notte sul lago permette però di uscire in barca all'alba, l'ora migliore."
      },
      {
        domanda: "Quali vini si assaggiano sul lago?",
        risposta: "Soprattutto i rossi vranac e kratošija della Crmnica, la zona di vigneti tra Virpazar e Godinje. Molte cantine familiari fanno degustazioni su prenotazione."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'Il vecchio ponte in pietra di Rijeka Crnojevića sul fiume che scende al lago di Scutari',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-06-lago-di-scutari.jpg',
  },
  {
    slug: 'ostrog',
    paeseSlug: 'montenegro',
    ordine: 5,
    nome: 'Monastero di Ostrog',
    tipologia: ['monastero', 'pellegrinaggio'],
    giorniConsigliati: 'mezza giornata',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono passato durante i dieci giorni in Montenegro con amici, sulla strada dal lago di Scutari a Žabljak: una sosta al monastero, poi via per Nikšić verso il Durmitor.",
    introduzione:
      'Il monastero ortodosso più venerato del Montenegro, bianco e incastrato in una parete verticale a circa 900 metri, con le reliquie di San Basilio di Ostrog.',
    percheAndarci: 'Per la posizione nella roccia e per il pellegrinaggio, che attira fedeli di tutte le confessioni.',
    cosaVedere: ['Il monastero superiore e la cappella-grotta con le reliquie', 'Il monastero inferiore'],
    cosaFare: ['Salire l\'ultimo tratto a piedi dal parcheggio'],
    comeArrivare: "Il monastero è a circa un'ora d'auto da Podgorica e a 40 minuti da Nikšić: si lascia la strada principale vicino a Bogetići e si sale su una strada stretta e ripida fino al monastero inferiore, poi fino ai parcheggi sotto quello superiore. Senza auto ci sono escursioni organizzate dalla costa e da Podgorica, oppure il treno fino alla stazione di Ostrog, sulla linea Podgorica-Nikšić, da cui parte il sentiero in salita.",
    comeSpostarsi: 'A piedi tra parcheggio e monastero.',
    periodoMigliore: 'tutto l\'anno; affollato a metà maggio per la festa di San Basilio e nei fine settimana d\'estate.',
    costi: "Ingresso libero ai due monasteri, offerte ben accette. Budget giornaliero a persona, indicativo: basso 40-60 € (base a Nikšić o Podgorica, pranzo in trattoria), medio 80-120 € (hotel in città e auto), alto da 150 €.",
    erroriDaEvitare: ['Arrivare con spalle o gambe scoperte', 'Fotografare all\'interno delle cappelle'],
    luoghi: [
      {
        nome: "Monastero superiore",
        testo: "Una chiesa e le celle scavate nella parete verticale della roccia, a circa 900 metri. Fu fondato all'inizio del Seicento da San Basilio di Ostrog, le cui reliquie sono nella chiesa della Presentazione, ricavata nella grotta.",
        come: "In auto da Podgorica o Nikšić fino ai parcheggi, poi a piedi. L'ultimo tratto di strada è stretto e ripido, a senso alternato.",
        quando: "Mattina presto, per evitare le file. Il 12 maggio, festa di San Basilio, è affollatissimo.",
        tempo: "1-2 ore",
        costo: "Ingresso libero, offerte",
        url: "https://manastirostrog.com/",
        lat: 42.675,
        lng: 19.0292,
        consiglio: "Abiti coprenti: spalle e ginocchia coperte, niente pantaloncini. Alle donne viene chiesto di indossare una gonna, prestata all'ingresso."
      },
      {
        nome: "Chiesa della Santa Croce",
        testo: "La seconda chiesa-grotta del monastero superiore, al piano più alto, con gli affreschi dipinti direttamente sulla roccia nel 1667. Da una piccola terrazza si guarda la valle dello Zeta.",
        come: "Dal cortile del monastero superiore, salendo le scale interne.",
        quando: "Dopo la visita alle reliquie, quando la coda si è sciolta.",
        tempo: "20 minuti",
        costo: "Ingresso libero",
        lat: 42.675,
        lng: 19.0292,
        consiglio: "Dentro non si fotografa: gli affreschi si guardano in silenzio."
      },
      {
        nome: "Monastero inferiore",
        testo: "Più in basso, a circa 3 km di salita dal santuario, con la chiesa della Santissima Trinità del 1824. Molti pellegrini si fermano qui prima di salire, e qui c'è il konak dove si può dormire.",
        come: "Lungo la strada che sale al monastero superiore.",
        quando: "Tutto l'anno.",
        tempo: "30 minuti",
        costo: "Ingresso libero",
        consiglio: "Visitarlo al ritorno, quando la coda al monastero superiore è già fatta."
      },
      {
        nome: "Sentiero dei pellegrini",
        testo: "Il sentiero nel bosco che sale dal monastero inferiore a quello superiore, accorciando i tornanti della strada. Per tradizione alcuni pellegrini lo percorrono a piedi nudi.",
        come: "Parte dal monastero inferiore; è ripido e in parte a gradini.",
        quando: "Mattina presto, con il fresco.",
        tempo: "45 minuti-1 ora e mezza in salita",
        costo: "Gratuito",
        consiglio: "Scarpe con buona suola e acqua: d'estate fa caldo anche nel bosco."
      },
      {
        nome: "Danilovgrad",
        testo: "Una cittadina sul fiume Zeta, fondata alla fine dell'Ottocento, a valle di Ostrog. Il lungofiume e le spiagge sullo Zeta sono una sosta fresca d'estate.",
        come: "Sulla strada principale tra Podgorica e Nikšić, circa 20 minuti dal monastero.",
        quando: "Ora di pranzo o tardo pomeriggio.",
        tempo: "1 ora",
        lat: 42.5516,
        lng: 19.1058
      },
      {
        nome: "Nikšić e la piazza della Libertà",
        testo: "La seconda città del Montenegro, a mezz'ora dal monastero, con il centro ottocentesco attorno alla grande piazza della Libertà, bar e caffè all'aperto. È la base più vicina per chi va a Ostrog e poi verso il Durmitor.",
        come: "In auto o in treno da Podgorica. Il centro si gira a piedi.",
        quando: "Sera, quando la piazza si riempie.",
        tempo: "1-2 ore",
        lat: 42.7737,
        lng: 18.9485
      },
      {
        nome: "Palazzo reale di Nikšić",
        testo: "Il palazzo estivo di re Nicola, costruito alla fine dell'Ottocento in un parco del centro di Nikšić. Oggi ospita il museo della città, con collezioni archeologiche e storiche.",
        come: "A piedi dalla piazza della Libertà, pochi minuti.",
        quando: "Mattina.",
        tempo: "45 minuti",
        lat: 42.7693,
        lng: 18.9516
      },
      {
        nome: "Lago di Krupac",
        testo: "Un lago artificiale a pochi chilometri da Nikšić, con spiagge erbose, pontili e acqua pulita. D'estate è il posto dove gli abitanti della città vanno a fare il bagno.",
        come: "In auto da Nikšić, circa 10 minuti verso nord-ovest.",
        quando: "Da giugno a settembre.",
        tempo: "mezza giornata",
        lat: 42.7991,
        lng: 18.8891,
        consiglio: "Una pausa di mezza giornata sulla strada da Ostrog al Durmitor."
      }
    ],
    programmi: [
      {
        titolo: "mezza giornata",
        tappe: [
          "Partenza da Podgorica al mattino",
          "Monastero inferiore",
          "Salita al monastero superiore",
          "Pranzo sulla strada del ritorno"
        ]
      },
      {
        titolo: "1 giorno, verso il Durmitor",
        tappe: [
          "Monastero inferiore e sentiero dei pellegrini all'alba",
          "Monastero superiore con le reliquie e la chiesa della Santa Croce",
          "Pranzo a Nikšić e passeggiata sulla piazza della Libertà",
          "Pomeriggio sulla strada per Žabljak, con sosta al lago di Krupac d'estate"
        ]
      }
    ],
    zone: [
      {
        nome: "Podgorica",
        perChi: "chi visita in giornata",
        testo: "Base pratica per Ostrog, in auto. Hotel di città e aeroporto vicino."
      },
      {
        nome: "Nikšić",
        perChi: "chi prosegue verso il Durmitor",
        testo: "Hotel e guesthouse a mezz'ora dal monastero, con ristoranti e vita serale in piazza. Da qui Žabljak è a circa un'ora e mezza."
      },
      {
        nome: "Konak del monastero inferiore",
        perChi: "i pellegrini",
        testo: "Camerate semplici per chi arriva in pellegrinaggio, con offerta libera. Non è un albergo: niente prenotazioni online e regole del monastero da rispettare."
      }
    ],
    sapori: [
      {
        nome: "Kačamak",
        testo: "Polenta di mais e patate con formaggio, da assaggiare nelle trattorie del territorio."
      },
      {
        nome: "Formaggio di montagna",
        testo: "Si compra dai produttori lungo la strada."
      }
    ],
    attenzioni: [
      "La strada finale è stretta e ripida, a tratti con senso alternato: precedenza a chi sale.",
      "È un luogo di culto: abbigliamento coprente, voce bassa e nessuna foto dentro la cappella.",
      "Nel fine settimana d'estate e nei giorni di festa il parcheggio si riempie: arrivare presto."
    ],
    gite: [
      {
        nome: "Lago di Scutari",
        distanza: "circa 1 ora e mezza",
        come: "In auto passando per Danilovgrad e Podgorica.",
        testo: "Il giro in barca da Virpazar tra ninfee e uccelli, con pranzo a base di pesce di lago."
      },
      {
        nome: "Durmitor e Žabljak",
        distanza: "circa 2 ore e mezza",
        come: "In auto via Nikšić e l'altopiano di Šavnik.",
        testo: "Il Lago Nero, la strada panoramica e il canyon del Tara: la prosecuzione naturale dopo Ostrog."
      }
    ],
    faq: [
      {
        domanda: "Come bisogna vestirsi per entrare a Ostrog?",
        risposta: "Spalle e ginocchia coperte per tutti, niente pantaloncini né canottiere. Alle donne viene chiesto di indossare una gonna, che viene prestata all'ingresso."
      },
      {
        domanda: "Si paga per visitare il monastero?",
        risposta: "No, l'ingresso è libero sia al monastero superiore sia a quello inferiore. Le offerte sono ben accette, e si possono comprare candele e icone."
      },
      {
        domanda: "Si arriva in auto fino al monastero superiore?",
        risposta: "Sì, fino ai parcheggi poco sotto, su una strada stretta e ripida a tratti a senso alternato. L'ultimo pezzo si fa a piedi; chi vuole sale invece dal monastero inferiore con il sentiero dei pellegrini."
      },
      {
        domanda: "Quanto tempo serve per Ostrog?",
        risposta: "Mezza giornata da Podgorica, con un'ora o due tra i due monasteri. Nei fine settimana d'estate e nei giorni di festa la coda per le reliquie allunga la visita."
      },
      {
        domanda: "Si possono fare foto dentro il monastero?",
        risposta: "Non all'interno delle cappelle e della grotta con le reliquie. Fuori, nel cortile e sulla terrazza, si fotografa senza problemi."
      },
      {
        domanda: "Quando è la festa di San Basilio?",
        risposta: "Il 12 maggio: è il giorno di maggiore pellegrinaggio, con migliaia di fedeli e code lunghe. Chi non viene per la festa fa meglio a scegliere un altro giorno."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'Il monastero di Ostrog incastonato nella parete di roccia',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-07-ostrog.jpg',
  },
  {
    slug: 'durmitor-tara',
    paeseSlug: 'montenegro',
    ordine: 6,
    nome: 'Durmitor e canyon del Tara',
    tipologia: ['patrimonio UNESCO', 'montagna', 'trekking', 'rafting'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nella parte finale dei dieci giorni in Montenegro con amici, con base a Žabljak: il Lago Nero, la strada panoramica e il Bobotov Kuk, poi il ponte sul Tara e il rafting prima di scendere verso Podgorica.",
    introduzione:
      'Un massiccio calcareo con 48 vette sopra i 2.000 metri e diciotto laghi glaciali intorno a Žabljak, e il canyon del Tara, profondo fino a 1.300 metri, tra i più profondi d\'Europa.',
    percheAndarci: 'Per il Lago Nero, la strada panoramica del Durmitor, la salita al Bobotov Kuk e il rafting sul Tara.',
    cosaVedere: ['Il Lago Nero', 'La strada panoramica e il passo di Sedlo', 'Il canyon della Sušica', 'Il ponte di Đurđevića Tara'],
    cosaFare: ['Il giro del Lago Nero', 'La salita al Bobotov Kuk (2.523 m)', 'Rafting tra Brštanovica e Šćepan Polje', 'La zipline sul ponte del Tara'],
    doveDormire: 'Guesthouse e chalet a Žabljak; campi di rafting lungo il Tara.',
    doveMangiare: 'Kačamak, cicvara, agnello sotto la campana, formaggi di malga.',
    comeArrivare: "Da Podgorica a Žabljak servono circa 2 ore e mezza-3 ore: via Nikšić e Šavnik, oppure verso nord con il tratto autostradale Smokovac-Mateševo, a pedaggio (circa 3,50 € per un'auto), e poi per Kolašin e Mojkovac. Da Ostrog la strada per Nikšić richiede circa 2 ore e mezza. Ci sono bus da Podgorica e Nikšić, ma per la strada panoramica, i belvedere e il ponte sul Tara serve l'auto o un'escursione.",
    comeSpostarsi: 'Auto; trasferimenti degli operatori di rafting.',
    periodoMigliore: 'giugno-settembre per trekking e strada panoramica; da novembre ad aprile neve e sci.',
    costi: "Parco nazionale del Durmitor 5 € a persona al giorno; barca a remi sul Lago Nero 10 € l'ora; giro organizzato del Durmitor Ring con il parco 20 € in furgone, 30 € in jeep; rafting 50-80 € con pranzo; zipline sul ponte del Tara 20-30 €. Budget giornaliero a persona, indicativo: basso 45-65 € (guesthouse o campeggio, cucina di montagna), medio 80-130 € (chalet o piccolo hotel e rafting), alto da 180 €.",
    erroriDaEvitare: [
      'Partire tardi per il Bobotov Kuk: i temporali pomeridiani sono frequenti',
      'Percorrere la strada panoramica fuori stagione o con nebbia',
      'Scegliere il rafting più economico senza verificare attrezzatura e guide',
    ],
    luoghi: [
      {
        nome: "Lago Nero (Crno jezero)",
        testo: "Un lago glaciale tra pini e pareti del Međed, a 1.416 metri e a 3 km da Žabljak. Il giro intorno al lago è un sentiero facile, con panorami sulle vette.",
        come: "Dal centro di Žabljak a piedi (circa 3 km), o in auto fino al parcheggio. Ingresso al parco con biglietto.",
        quando: "Mattina, quando il lago è calmo e riflette le montagne.",
        tempo: "1-2 ore per il giro",
        costo: "5 € con l'ingresso al parco; barca a remi 10 € l'ora; parcheggio 1 € l'ora",
        url: "https://nparkovi.me/sections/27/durmitor",
        lat: 43.1433,
        lng: 19.0875,
        consiglio: "Portare una giacca: anche d'estate la sera fa fresco."
      },
      {
        nome: "Strada panoramica e passo di Sedlo",
        testo: "L'anello di circa 80 km attorno al massiccio, tra canyon, altopiani e pascoli con i pastori, che tocca il passo di Sedlo a circa 1.900 metri. È il modo per vedere il Durmitor senza camminare.",
        come: "In auto da Žabljak in senso orario o antiorario; strada stretta e in molti tratti senza guardrail. Il parco organizza anche il giro in furgone o in jeep.",
        quando: "Da giugno a ottobre, con tempo sereno.",
        tempo: "mezza giornata con le soste",
        costo: "Gratuita in auto; giro organizzato dal parco 20 € in furgone, 30 € in jeep",
        consiglio: "Fare il pieno a Žabljak: lungo l'anello non ci sono distributori."
      },
      {
        nome: "Bobotov Kuk",
        testo: "La cima più alta del massiccio del Durmitor, 2.523 metri. L'escursione è lunga e richiede un giorno, con alcuni passaggi esposti.",
        come: "Dal passo di Sedlo, circa 6-7 ore andata e ritorno. Con una guida locale in caso di dubbio; il parco offre guide a 40 € per 4 ore e 80 € per 8.",
        quando: "Luglio-settembre; prima la neve resta nei canaloni.",
        tempo: "giornata intera",
        lat: 43.1281,
        lng: 19.0347,
        consiglio: "Partire all'alba: i temporali pomeridiani sono frequenti."
      },
      {
        nome: "Savin Kuk",
        testo: "Una cima di 2.313 metri sopra Žabljak, con la seggiovia che d'inverno serve le piste da sci e d'estate porta gli escursionisti verso la vetta. Dall'alto si vedono il Lago Nero e l'altopiano.",
        come: "In auto o a piedi da Žabljak fino alla base degli impianti, a pochi chilometri dal paese.",
        quando: "D'inverno per lo sci, d'estate per le escursioni.",
        tempo: "mezza giornata",
        lat: 43.1222,
        lng: 19.0808
      },
      {
        nome: "Lago di Zminje",
        testo: "Un piccolo lago nel bosco di abeti a ovest di Žabljak, più tranquillo del Lago Nero e raggiunto da un sentiero breve e pianeggiante.",
        come: "Dalla strada per Šavnik, con un breve sentiero nel bosco.",
        quando: "Mattina.",
        tempo: "1 ora",
        lat: 43.1555,
        lng: 19.0701,
        consiglio: "Una buona alternativa quando il Lago Nero è affollato."
      },
      {
        nome: "Canyon della Sušica",
        testo: "Una gola stretta e profonda sul lato occidentale del Durmitor, con il fondo verde e un laghetto. La strada panoramica scende fino al fondovalle con tornanti e tunnel nella roccia.",
        come: "Sulla strada panoramica; dal belvedere sopra la gola o scendendo in auto fino al fondo.",
        quando: "Da giugno a settembre.",
        tempo: "1 ora",
        lat: 43.1853,
        lng: 18.9995
      },
      {
        nome: "Belvedere di Ćurevac",
        testo: "Un punto panoramico a circa 1.600 metri sopra il canyon del Tara, a pochi chilometri da Žabljak, dove la gola si apre sotto per centinaia di metri.",
        come: "In auto da Žabljak verso Tepca, poi un breve tratto a piedi.",
        quando: "Tardo pomeriggio, con la luce radente nel canyon.",
        tempo: "1 ora",
        lat: 43.2006,
        lng: 19.0933,
        consiglio: "Chi non fa rafting vede il Tara dall'alto proprio da qui."
      },
      {
        nome: "Canyon del Tara",
        testo: "Con i suoi 1.300 metri di profondità massima è tra i più profondi d'Europa. Il fiume ha scavato pareti verticali rivestite di pini, e il tratto tra Brštanovica e Šćepan Polje, 18 km di rapide moderate, è quello del rafting.",
        come: "Si guarda dai belvedere sulla strada e si scende sul fiume con le escursioni di rafting da Brštanovica.",
        quando: "Rafting da primavera a inizio autunno, con più acqua in primavera.",
        tempo: "mezza giornata per il rafting",
        costo: "Rafting 50-80 € con pranzo",
        lat: 43.2508,
        lng: 19.0085,
        consiglio: "Scegliere operatori con licenza, giubbotto e casco."
      },
      {
        nome: "Ponte di Đurđevića Tara",
        testo: "Un ponte in cemento a cinque archi, lungo 365 metri, con la carreggiata a circa 172 metri sopra il fiume, finito nel 1940. Durante la guerra i partigiani fecero saltare uno degli archi.",
        come: "Sulla strada da Žabljak verso Pljevlja e Mojkovac, circa mezz'ora. A pagamento la zipline.",
        quando: "Mattina.",
        tempo: "45 minuti",
        costo: "Ponte gratuito; zipline 20-30 €",
        lat: 43.1504,
        lng: 19.2952,
        consiglio: "Da qui si guarda il canyon dall'alto e si può fare la zipline."
      },
      {
        nome: "Monastero di Dobrilovina",
        testo: "Un monastero ortodosso del Cinquecento sulla riva del Tara, nella valle tra il ponte di Đurđevića Tara e Mojkovac, con affreschi del Seicento.",
        come: "In auto dal ponte di Đurđevića Tara verso Mojkovac.",
        quando: "Mattina o primo pomeriggio.",
        tempo: "30 minuti",
        costo: "Ingresso libero",
        lat: 43.0278,
        lng: 19.4008
      },
      {
        nome: "Monastero di Morača",
        testo: "Fondato nel 1252 nel canyon della Morača, con la chiesa dell'Assunzione e affreschi del Duecento e del Seicento. È la sosta naturale sulla strada da Kolašin a Podgorica.",
        come: "Sulla strada principale Kolašin-Podgorica, con parcheggio davanti all'ingresso. Abiti coprenti.",
        quando: "Di giorno, sulla strada di ritorno verso sud.",
        tempo: "45 minuti",
        costo: "Ingresso libero",
        lat: 42.7681,
        lng: 19.3917
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Lago Nero al mattino",
          "Pranzo a Žabljak",
          "Strada panoramica del Sedlo",
          "Belvedere del canyon del Tara"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Lago Nero e strada del Sedlo",
          "Giorno 2: Ponte di Đurđevića Tara e rafting tra Brštanovica e Šćepan Polje"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Lago Nero al mattino, lago di Zminje e belvedere di Ćurevac al tramonto",
          "Giorno 2: Bobotov Kuk dal passo di Sedlo per chi cammina, oppure l'anello panoramico con il canyon della Sušica",
          "Giorno 3: ponte di Đurđevića Tara e rafting, poi discesa verso sud con sosta al monastero di Morača"
        ]
      }
    ],
    zone: [
      {
        nome: "Žabljak",
        perChi: "chi vuole il Durmitor",
        testo: "Il paese è a circa 1.450 metri: guesthouse, chalet di legno, ristoranti e partenze dei sentieri a pochi minuti. Freddo di notte anche d'estate.",
        fascia: "40-90 €"
      },
      {
        nome: "Intorno al Lago Nero",
        perChi: "chi viaggia in tenda",
        testo: "Campeggi ai margini del bosco, a piedi dal lago e dai sentieri. Nel parco una piazzola costa 3 € al giorno."
      },
      {
        nome: "Lungo il Tara",
        perChi: "chi fa rafting",
        testo: "Campi e bungalow semplici vicino alla partenza del rafting e a Šćepan Polje, lontani dal paese."
      }
    ],
    sapori: [
      {
        nome: "Kačamak",
        testo: "Polenta di mais e patate con formaggio e panna."
      },
      {
        nome: "Cicvara",
        testo: "Crema di farina di mais, formaggio e panna acida."
      },
      {
        nome: "Agnello sotto la campana",
        testo: "Agnello e patate cotti sotto una cupola di ferro coperta di brace; si ordina in anticipo."
      },
      {
        nome: "Formaggi di malga",
        testo: "Prodotti nelle capanne di alta quota e venduti a Žabljak."
      }
    ],
    attenzioni: [
      "Il meteo in montagna cambia in fretta: partire presto e portare strati e giacca impermeabile.",
      "Le strade di montagna possono essere chiuse dalla neve in inverno.",
      "Operatori di rafting: scegliere società con attrezzatura certificata e guide, e confrontare i prezzi prima.",
      "Tracciati lunghi come il Bobotov Kuk non hanno segnaletica ovunque: con la nebbia meglio rientrare."
    ],
    gite: [
      {
        nome: "Kolašin e Biogradska Gora",
        distanza: "circa 1 ora e mezza",
        come: "In auto passando per il ponte di Đurđevića Tara e Mojkovac.",
        testo: "Il parco nazionale di Biogradska Gora, con una delle ultime foreste vergini d'Europa attorno a un lago, e la cittadina di montagna di Kolašin."
      },
      {
        nome: "Pljevlja e la moschea di Husein Pasha",
        distanza: "circa 1 ora",
        come: "In auto verso nord-est, oltre il ponte sul Tara.",
        testo: "Una città dell'interno con la moschea ottomana di Husein Pasha, del Cinquecento, e il vicino monastero della Santa Trinità."
      },
      {
        nome: "Piva e il lago di Plužine",
        distanza: "circa 1 ora e mezza",
        come: "In auto per il canyon della Piva, con tunnel scavati nella roccia.",
        testo: "Il lago artificiale verde smeraldo nel canyon della Piva e il monastero della Piva, spostato pietra per pietra quando fu costruita la diga."
      }
    ],
    faq: [
      {
        domanda: "Quanto costa l'ingresso al parco del Durmitor?",
        risposta: "5 € a persona al giorno nel 2026, con il centro visite e i sentieri didattici compresi. Il parcheggio al Lago Nero si paga a parte, 1 € l'ora per un'auto."
      },
      {
        domanda: "Quando è aperta la strada panoramica del Durmitor?",
        risposta: "Indicativamente da giugno a ottobre: il resto dell'anno il passo di Sedlo è spesso innevato. È stretta e in molti tratti senza guardrail, quindi si percorre solo di giorno e con tempo buono."
      },
      {
        domanda: "Il Bobotov Kuk è difficile?",
        risposta: "Non ha difficoltà tecniche, ma sono 6-7 ore andata e ritorno dal passo di Sedlo con dislivello importante e alcuni tratti esposti. Si parte all'alba per evitare i temporali del pomeriggio."
      },
      {
        domanda: "Quanto costa il rafting sul Tara?",
        risposta: "Indicativamente 50-80 € a persona per il tratto classico tra Brštanovica e Šćepan Polje, di solito con pranzo e trasferimenti. Conviene un operatore con licenza che fornisca giubbotto e casco."
      },
      {
        domanda: "Quanti giorni servono per il Durmitor?",
        risposta: "Due giorni bastano per il Lago Nero, la strada panoramica e il ponte sul Tara con il rafting. Con tre si aggiunge la salita al Bobotov Kuk o un'altra escursione."
      },
      {
        domanda: "Fa freddo a Žabljak d'estate?",
        risposta: "Le giornate sono miti, ma il paese è a circa 1.450 metri e la sera fa fresco anche ad agosto. Servono una felpa e una giacca impermeabile per i temporali."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'L\'altopiano di Žabljak visto dall\'alto, con le montagne del Durmitor all\'orizzonte',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-08-durmitor-tara.jpg',
  },
]
