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
    comeArrivare: 'Aeroporto di Tivat a 15 minuti; Dubrovnik a circa un\'ora e mezza con la frontiera; Podgorica a 1 ora e mezza.',
    comeSpostarsi: 'Auto, bus locali lungo la riva, barche.',
    periodoMigliore: 'giugno e settembre; in luglio e agosto folla e navi da crociera.',
    costi: 'Mura circa 15 € in stagione, in contanti; traghetto di Kamenari circa 5 € per l\'auto.',
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
        consiglio: "Perdersi nei vicoli senza mappa: la città è piccola e ci si ritrova sempre."
      },
      {
        nome: "Fortezza di San Giovanni",
        testo: "Le mura salgono lungo la montagna fino alla fortezza a circa 280 metri d'altezza. Dall'alto si vede tutta la baia, con la sua forma a fiordo.",
        come: "Il sentiero parte dalla città vecchia ed è fatto di scalini irregolari. Scarpe chiuse e acqua.",
        quando: "All'apertura o nel tardo pomeriggio, mai nelle ore calde d'estate. In alto non c'è ombra.",
        tempo: "1 ora e mezza tra salita, sosta e discesa",
        costo: "Biglietto d'ingresso, prezzi sul sito ufficiale; meglio avere contanti.",
        consiglio: "Entrare solo dagli ingressi ufficiali della città vecchia: i varchi non ufficiali nelle mura vengono chiusi o sorvegliati."
      },
      {
        nome: "Perast e le isole",
        testo: "Un paese barocco in una sola fila di palazzi sull'acqua. Davanti ci sono due isolotti: lo scoglio della Madonna dello Scarpello, artificiale, e San Giorgio, con la sua chiesa.",
        come: "Da Kotor si arriva in auto o in bus lungo la strada costiera. Dal molo partono le barche dei pescatori per le isole, una traversata di pochi minuti.",
        quando: "Mattina o fine pomeriggio. Le barche partono quando sono piene.",
        tempo: "2-3 ore con la traversata",
        consiglio: "Fissare il prezzo della barca prima di salire, e andata e ritorno insieme."
      },
      {
        nome: "Risan e i mosaici romani",
        testo: "Uno degli insediamenti più antichi della baia. Dell'epoca romana sono rimasti i mosaici pavimentali di una villa, il resto più prezioso della città antica.",
        come: "Sulla strada da Kotor a Herceg Novi, nella parte più interna della baia. Si visita in pochi minuti.",
        quando: "Tutto l'anno, di mattina.",
        tempo: "30 minuti",
        consiglio: "Tappa breve sulla strada per Perast, non una giornata a sé."
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
          "Giorno 1: Kotor, mura e fortezza al mattino, città vecchia nel pomeriggio",
          "Giorno 2: Risan, Perast e giro in barca nelle isole, poi Prčanj e Dobrota"
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
    introduzione:
      'La montagna simbolo del Montenegro, sopra le Bocche, con il mausoleo del principe-vescovo e poeta Njegoš in vetta, e la vecchia capitale reale di Cetinje ai suoi piedi.',
    percheAndarci:
      'Per la strada delle serpentine da Kotor, il prosciutto di Njeguši, la vista dal mausoleo e la Cetinje delle ambasciate.',
    cosaVedere: ['Le venticinque serpentine sopra Kotor', 'Il villaggio di Njeguši', 'Il mausoleo di Njegoš sul Jezerski vrh', 'Il monastero e il palazzo del re Nicola a Cetinje'],
    cosaFare: ['Assaggiare pršut e formaggio a Njeguši', 'Salire i 461 gradini del mausoleo'],
    doveDormire: 'Guesthouse e piccoli hotel a Cetinje.',
    doveMangiare: 'Pršut, formaggio njeguški e njeguški steak nelle trattorie di Njeguši.',
    comeArrivare: 'Da Kotor in auto lungo le serpentine, circa 1 ora fino a Njeguši.',
    comeSpostarsi: 'Auto.',
    periodoMigliore: 'maggio-ottobre; d\'inverno la strada del mausoleo può essere innevata.',
    costi: 'Ingresso al parco nazionale e al mausoleo pochi euro ciascuno.',
    erroriDaEvitare: ['Affrontare le serpentine con un camper grande o di notte', 'Salire con le nuvole basse: la vista sparisce'],
    luoghi: [
      {
        nome: "Strada delle 25 serpentine",
        testo: "La vecchia strada austro-ungarica che sale da Kotor al Lovćen con 25 tornanti numerati. In pochi chilometri si sale dal livello del mare all'altopiano di Njeguši, con la baia sempre più piccola sotto.",
        come: "Si percorre in auto da Kotor. Strada stretta, con molti pullman.",
        quando: "Mattina, per avere luce sulla baia e meno traffico.",
        tempo: "1 ora con le soste",
        consiglio: "Le soste panoramiche sono poche e piccole: fermarsi dove c'è spazio sicuro."
      },
      {
        nome: "Njeguši",
        testo: "Il villaggio d'origine della dinastia Petrović-Njegoš, sulle pendici del Lovćen. Qui si mangiano il prosciutto affumicato e il formaggio che hanno reso famosa la zona.",
        come: "Sulla strada tra Kotor e il Lovćen. Si pranza in una delle trattorie.",
        quando: "Ora di pranzo, tutto l'anno.",
        tempo: "1 ora",
        consiglio: "Il pršut si compra anche intero o a fette sottovuoto, per portarlo a casa."
      },
      {
        nome: "Mausoleo di Njegoš",
        testo: "In cima al Jezerski vrh, a 1.657 metri, la tomba del principe-vescovo e poeta Petar II Petrović-Njegoš. Si sale per 461 gradini scavati nella roccia. Dalla terrazza si vedono la baia, il lago di Scutari e, nei giorni limpidi, l'Adriatico.",
        come: "In auto dal parcheggio, con l'ultimo tratto a piedi dopo il tunnel.",
        quando: "Mattina presto o tardo pomeriggio. In inverno la strada può essere chiusa dalla neve.",
        tempo: "1 ora e mezza",
        consiglio: "Controllare il meteo: con nuvole basse non si vede nulla."
      },
      {
        nome: "Cetinje",
        testo: "L'antica capitale storica del Montenegro, con palazzi di ambasciate dell'Ottocento e il piccolo palazzo del re Nicola. Il monastero di Cetinje custodisce le reliquie di San Pietro e il Museo Nazionale la Biljarda, dove visse Njegoš.",
        come: "Da Njeguši in auto, scendendo dal Lovćen. In città si cammina.",
        quando: "Mattina. Orari e giorni di chiusura dei musei sul sito ufficiale.",
        tempo: "2-3 ore",
        consiglio: "Il Museo del re Nicola, la Biljarda e il monastero sono a pochi minuti a piedi l'uno dall'altro: mezza giornata basta per tutti."
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
      }
    ],
    zone: [
      {
        nome: "Cetinje",
        perChi: "chi vuole una base fuori dal mare",
        testo: "Città universitaria e tranquilla, raggiungibile in auto da Kotor e da Budva. Pochi alberghi, vita serale limitata."
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
    introduzione:
      'La costa centrale del Montenegro, con la città vecchia fortificata di Budva, l\'isolotto-resort di Sveti Stefan e le baie fino a Petrovac.',
    percheAndarci: 'Per qualche giorno di mare, scegliendo le baie più tranquille a sud di Budva.',
    cosaVedere: ['La città vecchia di Budva', 'Sveti Stefan dal belvedere', 'Le spiagge di Drobni pijesak e Petrovac'],
    cosaFare: ['Bagni nelle baie tra Budva e Petrovac', 'Una sera nella città vecchia di Budva'],
    doveDormire: 'Petrovac e Pržno per la tranquillità, Budva per la vita notturna.',
    doveMangiare: 'Pesce e cucina mediterranea; konobe nelle baie.',
    comeArrivare: 'Da Kotor circa 40 minuti, da Tivat 30 minuti.',
    comeSpostarsi: 'Auto, bus costieri, taxi.',
    periodoMigliore: 'giugno e settembre.',
    costi: 'Lettini e ombrelloni 15-30 € al giorno in alta stagione.',
    erroriDaEvitare: ['Aspettarsi una Budva tranquilla in agosto', 'Contare sulla visita dell\'isola di Sveti Stefan: l\'albergo è chiuso dal 2020 e l\'isola non si visita'],
    luoghi: [
      {
        nome: "Città vecchia di Budva",
        testo: "Un nucleo fortificato su una penisola, con mura in gran parte di epoca veneziana, la cittadella e vicoli di pietra. Fu in gran parte ricostruita dopo il terremoto del 1979.",
        come: "A piedi dai parcheggi della Riviera. La Cittadella ha un ingresso a pagamento per il panorama.",
        quando: "Sera per l'atmosfera, mattina per la luce sul mare.",
        tempo: "1-2 ore",
        consiglio: "Evitare i ristoranti con camerieri che invitano ad entrare."
      },
      {
        nome: "Sveti Stefan",
        testo: "Un isolotto-villaggio di pietra collegato a terra da un istmo, trasformato in resort di lusso. L'albergo che lo occupa è chiuso dal 2020 e l'isola non si visita. Il celebre colpo d'occhio è dal belvedere sulla strada sopra la baia.",
        come: "Poco a sud di Budva, sulla strada costiera. Si guarda dal belvedere e dalle spiagge ai lati dell'istmo; verificare sul posto se l'albergo ha riaperto.",
        quando: "Tardo pomeriggio, con la luce dorata sulle pietre.",
        tempo: "30 minuti per la sosta panoramica",
        consiglio: "Si può scendere alla spiaggia ai lati dell'istmo, ma è a pagamento in estate."
      },
      {
        nome: "Petrovac",
        testo: "Una baia più raccolta a sud di Budva, verso Bar, con lungomare, forte veneziano e un paio di isolotti. Più tranquilla e per famiglie.",
        come: "Da Budva in auto o con il bus costiero.",
        quando: "Giugno e settembre per mare e prezzi più bassi.",
        tempo: "mezza giornata",
        consiglio: "Una buona base per chi vuole mare senza la vita notturna di Budva."
      },
      {
        nome: "Spiaggia di Mogren",
        testo: "Due piccole spiagge, Mogren 1 e Mogren 2, sotto le scogliere appena fuori dalla città vecchia. Si arriva con un breve sentiero lungo la scogliera che parte dalle mura. È la spiaggia più nota vicino al centro, ma in agosto si riempie presto.",
        come: "A piedi dalla città vecchia, pochi minuti sul sentiero lungo la scogliera.",
        quando: "Mattina presto in estate; giugno e settembre sono più tranquilli.",
        tempo: "mezza giornata",
        consiglio: "Lettini e ombrelloni sono a pagamento: chi vuole stendere l'asciugamano deve arrivare presto per trovare la parte libera."
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
      }
    ],
    zone: [
      {
        nome: "Budva",
        perChi: "chi cerca vita notturna",
        testo: "Alberghi, locali e spiagge affollate. Più rumore e traffico d'estate."
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
    introduzione:
      'Il più grande lago dei Balcani, condiviso con l\'Albania, parco nazionale con circa 270 specie di uccelli, canali di ninfee, monasteri sugli isolotti e i vigneti di Crmnica.',
    percheAndarci: 'Per un giro in barca tra canali e villaggi di pescatori, il belvedere di Pavlova Strana e i vini del lago.',
    cosaVedere: ['Virpazar e i canali di ninfee', 'Il belvedere di Pavlova Strana', 'Il villaggio di Rijeka Crnojevića', 'I monasteri sugli isolotti'],
    cosaFare: ['Un giro in barca da Virpazar', 'Una degustazione in una cantina familiare', 'Birdwatching con guida'],
    doveDormire: 'Guesthouse e agriturismi a Virpazar e nei villaggi.',
    doveMangiare: 'Carpa e anguilla del lago, vranac e kratošija.',
    comeArrivare: 'Da Petrovac o Bar circa 30-40 minuti, da Podgorica 30 minuti.',
    comeSpostarsi: 'Auto e barche.',
    periodoMigliore: 'maggio-ottobre; primavera e autunno per gli uccelli.',
    costi: 'Parco nazionale circa 5 €; giro in barca 15-30 € a persona.',
    erroriDaEvitare: ['Salire su barche senza licenza del parco', 'Percorrere la strada del lago di sera: è stretta e senza illuminazione'],
    luoghi: [
      {
        nome: "Virpazar e il giro in barca",
        testo: "Il paese di pescatori sulla riva nord del lago, da cui partono le barche tra ninfee, canneti e pellicani. Il Parco Nazionale del Lago di Scutari è tra le più grandi riserve di uccelli d'Europa.",
        come: "In auto da Podgorica o dalla costa. Le barche partono dal molo e dalle agenzie del paese.",
        quando: "Mattina o tardo pomeriggio per vedere gli uccelli.",
        tempo: "2-3 ore",
        consiglio: "Concordare durata, percorso e prezzo prima di salire."
      },
      {
        nome: "Pavlova Strana",
        testo: "Un belvedere sulla strada sopra il lago dove il fiume Crnojević fa un'ansa a ferro di cavallo attorno a una lingua di terra verde. È il panorama più fotografato della zona, con le montagne dell'Albania sullo sfondo nei giorni limpidi.",
        come: "In auto da Virpazar per una strada di montagna, stretta e piena di curve.",
        quando: "Tardo pomeriggio.",
        tempo: "30 minuti",
        consiglio: "Il parcheggio è piccolo: arrivare presto."
      },
      {
        nome: "Rijeka Crnojevića",
        testo: "Un borgo sul fiume, con il ponte di pietra voluto dal principe Danilo nel 1853 e il vecchio porto. Le barche per il lago partono da qui.",
        come: "In auto da Cetinje.",
        quando: "Mattina.",
        tempo: "1 ora e mezza",
        consiglio: "Provare il pesce di lago nelle trattorie lungo il fiume."
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
      }
    ],
    zone: [
      {
        nome: "Virpazar",
        perChi: "chi vuole il lago",
        testo: "Camere in case di famiglia, ristoranti di pesce e partenze delle barche a piedi."
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
    introduzione:
      'Il monastero ortodosso più venerato del Montenegro, bianco e incastrato in una parete verticale a circa 900 metri, con le reliquie di San Basilio di Ostrog.',
    percheAndarci: 'Per la posizione nella roccia e per il pellegrinaggio, che attira fedeli di tutte le confessioni.',
    cosaVedere: ['Il monastero superiore e la cappella-grotta con le reliquie', 'Il monastero inferiore'],
    cosaFare: ['Salire l\'ultimo tratto a piedi dal parcheggio'],
    comeArrivare: 'In auto da Podgorica o Nikšić, con l\'ultimo tratto su una strada stretta e ripida.',
    comeSpostarsi: 'A piedi tra parcheggio e monastero.',
    periodoMigliore: 'tutto l\'anno; affollato a metà maggio per la festa di San Basilio e nei fine settimana d\'estate.',
    costi: 'Ingresso libero, offerte ben accette.',
    erroriDaEvitare: ['Arrivare con spalle o gambe scoperte', 'Fotografare all\'interno delle cappelle'],
    luoghi: [
      {
        nome: "Monastero superiore",
        testo: "Una chiesa e le celle scavate nella parete verticale della roccia. Fu fondato all'inizio del Seicento da San Basilio di Ostrog, le cui reliquie sono nella chiesa della Presentazione, ricavata nella grotta.",
        come: "In auto da Podgorica o Nikšić fino ai parcheggi, poi a piedi. L'ultimo tratto di strada è stretto e ripido, a senso alternato.",
        quando: "Mattina presto, per evitare le file. Il 12 maggio, festa di San Basilio, è affollatissimo.",
        tempo: "1-2 ore",
        consiglio: "Abiti coprenti: spalle e ginocchia coperte, niente pantaloncini."
      },
      {
        nome: "Monastero inferiore",
        testo: "Più in basso, a circa 3 km di salita dal santuario, con la chiesa della Santissima Trinità del 1824. Molti pellegrini si fermano qui prima di salire.",
        come: "Lungo la strada che sale al monastero superiore.",
        quando: "Tutto l'anno.",
        tempo: "30 minuti",
        consiglio: "Visitarlo al ritorno, quando la coda al monastero superiore è già fatta."
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
      }
    ],
    zone: [
      {
        nome: "Podgorica",
        perChi: "chi visita in giornata",
        testo: "Base pratica per Ostrog, in auto. Il monastero non ha alloggi per turisti."
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
    introduzione:
      'Un massiccio calcareo con 48 vette sopra i 2.000 metri e diciotto laghi glaciali intorno a Žabljak, e il canyon del Tara, profondo fino a 1.300 metri, tra i più profondi d\'Europa.',
    percheAndarci: 'Per il Lago Nero, la strada panoramica del Durmitor, la salita al Bobotov Kuk e il rafting sul Tara.',
    cosaVedere: ['Il Lago Nero', 'La strada panoramica e il passo di Sedlo', 'Il canyon della Sušica', 'Il ponte di Đurđevića Tara'],
    cosaFare: ['Il giro del Lago Nero', 'La salita al Bobotov Kuk (2.523 m)', 'Rafting tra Brštanovica e Šćepan Polje', 'La zipline sul ponte del Tara'],
    doveDormire: 'Guesthouse e chalet a Žabljak; campi di rafting lungo il Tara.',
    doveMangiare: 'Kačamak, cicvara, agnello sotto la campana, formaggi di malga.',
    comeArrivare: 'Da Podgorica circa 2 ore e mezza-3 ore, via Nikšić o via Mateševo.',
    comeSpostarsi: 'Auto; trasferimenti degli operatori di rafting.',
    periodoMigliore: 'giugno-settembre per trekking e strada panoramica; da novembre ad aprile neve e sci.',
    costi: 'Parco nazionale circa 5 €; rafting 50-80 € con pranzo; zipline 20-30 €.',
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
        consiglio: "Portare una giacca: anche d'estate la sera fa fresco."
      },
      {
        nome: "Bobotov Kuk",
        testo: "La cima più alta del massiccio del Durmitor, 2.523 metri. L'escursione è lunga e richiede un giorno, con alcuni passaggi esposti.",
        come: "Dal passo del Sedlo, diverse ore di cammino andata e ritorno. Con una guida locale in caso di dubbio.",
        quando: "Luglio-settembre; prima la neve resta nei canaloni.",
        tempo: "giornata intera",
        consiglio: "Partire all'alba: i temporali pomeridiani sono frequenti."
      },
      {
        nome: "Canyon del Tara",
        testo: "Con i suoi 1.300 metri di profondità massima è tra i più profondi d'Europa. Il fiume ha scavato pareti verticali rivestite di pini.",
        come: "Si guarda dai belvedere sulla strada e si scende sul fiume con le escursioni di rafting da Brštanovica.",
        quando: "Rafting da primavera a inizio autunno, con più acqua in primavera.",
        tempo: "mezza giornata per il rafting",
        consiglio: "Chi non vuole fare rafting può comunque fermarsi ai belvedere sulla strada Žabljak-Šćepan Polje."
      },
      {
        nome: "Ponte di Đurđevića Tara",
        testo: "Un ponte in cemento a cinque archi, con la carreggiata a circa 172 metri sopra il fiume, finito nel 1940. Durante la guerra i partigiani fecero saltare uno degli archi.",
        come: "Sulla strada da Žabljak verso Pljevlja e Mojkovac. A pagamento la zipline.",
        quando: "Mattina.",
        tempo: "45 minuti",
        consiglio: "Da qui si guarda il canyon dall'alto e si può fare la zipline."
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
      }
    ],
    zone: [
      {
        nome: "Žabljak",
        perChi: "chi vuole il Durmitor",
        testo: "Il paese è a circa 1.450 metri: guesthouse, ristoranti e partenze dei sentieri a pochi minuti. Freddo di notte anche d'estate."
      },
      {
        nome: "Lungo il Tara",
        perChi: "chi fa rafting",
        testo: "Campi e alloggi semplici vicino alla partenza del rafting, lontani dal paese."
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
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'L\'altopiano di Žabljak visto dall\'alto, con le montagne del Durmitor all\'orizzonte',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-08-durmitor-tara.jpg',
  },
]
