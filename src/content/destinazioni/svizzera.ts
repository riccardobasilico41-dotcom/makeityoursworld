import type { Destinazione } from '@/lib/types'

// Le sette zone della Jungfrau Region trattate in "Svizzera in van"
// (src/content/viaggi/52-svizzera-alpi-van.md), viaggio fatto da Rick: tutte hanno
// visitataPersonalmente: true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore (vedi il commento del tipo
// Destinazione in src/lib/types.ts). Nessun nome di hotel, ristorante o
// operatore è stato inventato. Prezzi, orari stagionali di passi e funivie
// e regole di campeggio in van cambiano ogni stagione e da un cantone
// all'altro: vanno riverificati prima di partire.

export const destinazioniSvizzera: Destinazione[] = [
  {
    slug: 'interlaken',
    paeseSlug: 'svizzera',
    ordine: 1,
    nome: 'Interlaken e i laghi di Thun e Brienz',
    tipologia: ['laghi', 'base logistica', 'montagna'],
    giorniConsigliati: '1-2 giorni come base, tutto il resto del giro vi ruota intorno',
    visitataPersonalmente: true,
    introduzione:
      'Interlaken significa «fra i laghi»: sta su una lingua di terra fra il Lago di Thun a ovest e il Lago di Brienz a est, tutti e due di un turchese lattiginoso per i sedimenti glaciali in sospensione. È lo snodo logistico della regione, con diversi campeggi nel giro di pochi chilometri.',
    percheAndarci:
      'È la base più pratica per un van in tutta la Jungfrau Region: c\'è la stazione principale, ci sono supermercati e noleggi di attrezzatura outdoor, e ogni altra zona di questa guida si raggiunge in giornata senza cambiare alloggio ogni notte.',
    cosaVedere: [
      'Il Lago di Thun e il Lago di Brienz, turchesi e lattiginosi per i sedimenti glaciali',
      'Il centro di Interlaken, con l\'Höheweg, il lungo viale con vista sulla Jungfrau in fondo',
      'Il castello di Oberhofen, sul Lago di Thun, con il parco botanico affacciato sull\'acqua',
      'Il villaggio di Iseltwald, sul Lago di Brienz, con l\'imbarcadero diventato famoso grazie ad alcune produzioni internazionali',
    ],
    cosaFare: [
      'Un giro in battello storico su uno dei due laghi, con imbarcazioni a vapore ancora in servizio',
      'Passeggiata sull\'Höheweg al tramonto, quando la Jungfrau si accende di rosa',
      'Fare la spesa grossa da Coop o Migros in centro prima di salire nelle valli, dove i prezzi aumentano',
    ],
    doveDormire:
      'Sulle rive dei due laghi, a pochi minuti dal centro, ci sono diversi campeggi attrezzati per van: è la zona della guida con più posti legali per dormire.',
    doveMangiare:
      'Rösti, fondue e raclette con i formaggi d\'alpeggio locali sono la base della cucina della regione. Un pasto semplice in un ristorante di fascia media di rado costa meno di 25-30 CHF a persona.',
    comeArrivare: 'Uscita autostradale diretta da Berna (circa un\'ora) o dal Vallese via Grimsel-Furka.',
    comeSpostarsi: 'A piedi nel centro; il van serve per raggiungere le altre zone, tutte entro 20-30 minuti di guida.',
    periodoMigliore: 'da giugno a settembre, con luglio-agosto più caldo e affollato.',
    costi: 'Campeggi 35-50 CHF/notte; giro in battello da circa 20-30 CHF a tratta singola.',
    erroriDaEvitare: [
      'Arrivare senza aver prenotato, o almeno individuato, un campeggio per la prima notte',
      'Fare la spesa nei minimarket delle valli, molto più cari, invece che nei supermercati di Interlaken',
      'Sottovalutare quanto tempo prendano le altre zone: Interlaken è la base, non la meta principale del viaggio',
    ],
    luoghi: [
      {
        nome: "Harder Kulm",
        testo: "Il belvedere sopra Interlaken, a 1.322 metri, con vista sui due laghi e, in giornata limpida, su Eiger, Mönch e Jungfrau. In cima ci sono una piattaforma panoramica e un ristorante in un edificio a forma di castello.",
        come: "Funicolare dalla stazione Harder Bahn, vicino a Interlaken Ost: 8 minuti di salita.",
        quando: "Tardo pomeriggio per la luce sui laghi. Funziona solo in stagione: date sul sito ufficiale.",
        tempo: "2 ore",
        consiglio: "Controllare le webcam prima di salire: con nuvole basse il panorama sparisce."
      },
      {
        nome: "Lago di Brienz e cascate del Giessbach",
        testo: "Il lago più verde e meno turistico, con le cascate del Giessbach che cadono a gradoni per 14 salti accanto a un albergo storico. Si arriva con il battello.",
        come: "Battello da Interlaken Ost o da Brienz fino al molo, poi la funicolare storica del Giessbach.",
        quando: "Mattina, in primavera quando le cascate sono piene.",
        tempo: "mezza giornata",
        consiglio: "Il tragitto a piedi nel bosco dal molo alle cascate è breve e piacevole."
      },
      {
        nome: "Lago di Thun",
        testo: "Il lago a ovest di Interlaken, con il castello di Thun, villaggi sulle rive e il battello a vapore storico. Il borgo di Spiez ha un castello sul lago.",
        come: "Battello o treno da Interlaken West; il battello è molto più lento del treno.",
        quando: "Estate.",
        tempo: "mezza giornata",
        consiglio: "Salire sul battello verso Thun e tornare in treno, per vedere il lago e risparmiare tempo."
      },
      {
        nome: "Iseltwald",
        testo: "Un piccolo villaggio sul lago di Brienz, sul promontorio con un ex castello, oggi centro di riabilitazione. È famoso per il pontile dove è stata girata una scena della serie coreana «Crash Landing on You».",
        come: "In auto o con il bus da Interlaken Ost.",
        quando: "Mattina presto, prima dei gruppi.",
        tempo: "1-2 ore",
        costo: "Pontile a pagamento, 5 CHF, con tornello (introdotto nel 2023).",
        consiglio: "Il molo si vede meglio all'alba."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Harder Kulm in mattinata",
          "Battello sul lago di Brienz",
          "Giessbach nel pomeriggio",
          "Cena a Interlaken"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Harder Kulm e il lago di Thun",
          "Giorno 2: lago di Brienz, Giessbach e Iseltwald"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        perChi: "chi vuole una base comoda",
        testo: "Treni verso tutte le valli. Prezzi alti e centro molto turistico, ma comodo se non si ha l'auto."
      },
      {
        nome: "Brienz e Iseltwald",
        perChi: "chi cerca silenzio",
        testo: "Sul lago di Brienz, con meno folla; le mete delle valli vanno raggiunte in auto o in treno."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patate grattugiate e fritte, spesso con uovo o formaggio, la base della cucina svizzera tedesca."
      },
      {
        nome: "Fondue al formaggio",
        testo: "Gruyère ed Emmental fusi, da mangiare con pane in pentole comuni."
      },
      {
        nome: "Cioccolato svizzero",
        testo: "Dai negozi della città e dai supermercati Coop e Migros, il più economico."
      }
    ],
    attenzioni: [
      "I prezzi sono molto alti: pranzare nei supermercati Coop e Migros riduce la spesa.",
      "Il biglietto dei battelli è compreso nello Swiss Travel Pass: controllare prima di pagare.",
      "Per spostarsi in auto serve la vignetta autostradale, da acquistare alla frontiera o online."
    ],
    esperienzeSlugs: ['giro-battello-laghi-thun-brienz'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Interlaken vista dall\'alto, con il fiume Aare color smeraldo che attraversa la cittadina tra le montagne, nella piana tra i laghi di Thun e Brienz',
    immagine: '/images/svizzera/interlaken.jpg',
  },
  {
    slug: 'lauterbrunnen',
    paeseSlug: 'svizzera',
    ordine: 2,
    nome: 'Lauterbrunnen e la valle delle cascate',
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: '1 giorno pieno',
    visitataPersonalmente: true,
    introduzione:
      'Una gola glaciale a pareti verticali, con settantadue cascate censite nei suoi dodici chilometri. La più famosa è la Staubbach, 300 metri di salto quasi in centro al paese: ha ispirato Goethe e, secondo la tradizione locale, la valle di Rivendell nel «Signore degli Anelli».',
    percheAndarci:
      'È la valle più scenografica della regione e il punto di partenza per Mürren, Wengen e Gimmelwald, villaggi senza auto raggiungibili solo in funivia o cremagliera. E ci sono le Trümmelbachfälle, un fenomeno geologico che non ha uguali altrove.',
    cosaVedere: [
      'La cascata Staubbach, che precipita per 300 metri quasi nel centro del paese',
      'Le Trümmelbachfälle, dieci cascate glaciali che si vedono da gallerie e ascensori scavati nella montagna (vedi la scheda esperienza dedicata)',
      'I villaggi senza auto di Wengen e Gimmelwald, raggiungibili solo in funivia o cremagliera',
    ],
    cosaFare: [
      'Percorrere il fondovalle a piedi o in bici fra le cascate, su un tracciato quasi pianeggiante',
      'Salire in funivia o cremagliera verso Mürren o Wengen per la vista dall\'alto sulla gola',
      'Visitare le Trümmelbachfälle, aperte da inizio aprile a inizio novembre',
    ],
    doveDormire:
      'Campeggi attrezzati sul fondovalle. **In questa valle il campeggio libero è vietato**, con multe fino a 200 CHF, e il divieto viene fatto rispettare.',
    doveMangiare: 'Ristoranti di fondovalle con cucina svizzero-tedesca di montagna; prezzi nella media alta della regione.',
    comeArrivare: 'Da Interlaken, 20 minuti d\'auto o di treno.',
    comeSpostarsi: 'Il fondovalle a piedi o in bici; per Mürren, Wengen e Gimmelwald servono funivia o cremagliera, perché l\'auto non arriva.',
    periodoMigliore: 'da giugno a settembre, con le cascate più abbondanti a inizio estate per lo scioglimento della neve.',
    costi: 'Trümmelbachfälle 18 CHF ingresso adulti, 8 CHF bambini 6-15 anni.',
    erroriDaEvitare: [
      'Montare tavolino e sedie fuori dal van in un parcheggio non autorizzato: la polizia locale controlla proprio questo, anche dove dormire nel mezzo è tollerato',
      'Arrivare alle Trümmelbachfälle senza sapere che sono chiuse da inizio novembre a inizio aprile',
      'Non prevedere le scarpe da pioggia: le gallerie delle cascate sono umide e scivolose',
    ],
    luoghi: [
      {
        nome: "Cascata dello Staubbach",
        testo: "Una cascata di circa 297 metri che cade da una parete a picco sul paese, spesso dispersa in nebbia dal vento.",
        come: "A piedi dalla stazione di Lauterbrunnen, pochi minuti; si guarda dal paese.",
        quando: "Mattina, con il sole che entra nella valle. Primavera per il flusso massimo.",
        tempo: "45 minuti",
        consiglio: "Portare una giacca impermeabile: il vento porta gli spruzzi."
      },
      {
        nome: "Cascate del Trümmelbach",
        testo: "Dieci cascate glaciali che scorrono dentro la montagna, visibili da passerelle e gallerie con un ascensore in galleria. Aperto dalla primavera all'autunno; vietato a bambini sotto i 4 anni e ai cani.",
        come: "Con il bus postale da Lauterbrunnen verso Stechelberg, oppure a piedi lungo la valle.",
        quando: "Aperte all'incirca da inizio aprile a inizio novembre, dalle 9 alle 17 (luglio e agosto 8.30-18).",
        tempo: "1-1 ora e mezza",
        url: "https://www.truemmelbachfaelle.ch/",
        consiglio: "Indossare scarpe con suola aderente: le passerelle sono bagnate."
      },
      {
        nome: "Wengen",
        testo: "Un villaggio senza auto su una terrazza alta, raggiungibile con la cremagliera. Dà accesso alla Kleine Scheidegg e alla linea per Jungfraujoch.",
        come: "Treno a cremagliera da Lauterbrunnen, circa 15 minuti.",
        quando: "Tutto l'anno.",
        tempo: "2 ore",
        consiglio: "Partire da qui per la camminata verso Männlichen, con la vista sul gruppo dell'Eiger."
      },
      {
        nome: "La valle a piedi fino a Stechelberg",
        testo: "Il sentiero piano di fondovalle che segue il torrente da Lauterbrunnen verso Stechelberg, tra prati e pareti di roccia da cui scendono decine di cascate. Si passa vicino al Trümmelbach e alla partenza della funivia per Mürren. È la camminata più facile della regione e mostra perché la valle è famosa.",
        come: "Si parte a piedi dal paese; per tornare c'è il bus postale lungo la strada della valle.",
        quando: "Da maggio a ottobre; dopo giorni di pioggia le cascate sono più piene.",
        tempo: "2-3 ore a piedi",
        costo: "Gratuito.",
        consiglio: "Andare a piedi e tornare in bus: il sentiero è in leggera salita verso Stechelberg."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Staubbach all'apertura",
          "Cascate del Trümmelbach",
          "Cremagliera fino a Wengen",
          "Camminata panoramica e rientro"
        ]
      }
    ],
    zone: [
      {
        nome: "Lauterbrunnen",
        perChi: "chi vuole stare nella valle",
        testo: "Campeggi e alloggi nel fondovalle, quasi senza auto di notte; più freddo e meno vita serale."
      },
      {
        nome: "Wengen e Mürren",
        perChi: "chi cerca villaggi sull'altopiano",
        testo: "Senza auto, con viste dall'alto, ma da raggiungere con cremagliera o funivia con i bagagli."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patate fritte, con formaggio o salsiccia."
      },
      {
        nome: "Älplermagronen",
        testo: "Pasta, patate, formaggio e cipolle fritte, piatto di malga."
      },
      {
        nome: "Formaggi d'alpeggio",
        testo: "Si comprano nei piccoli negozi e dai produttori."
      }
    ],
    attenzioni: [
      "Le mucche pascolano sui sentieri: non avvicinarsi alle madri con i vitelli.",
      "Il tempo cambia in fretta: nebbia e pioggia possono nascondere le cascate in alto."
    ],
    esperienzeSlugs: ['trummelbachfalle'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La cascata Staubbach che precipita dalla parete di roccia sopra gli chalet di Lauterbrunnen, tra le nuvole basse, in toni quasi monocromi',
    immagine: '/images/svizzera/lauterbrunnen.jpg',
  },
  {
    slug: 'grindelwald',
    paeseSlug: 'svizzera',
    ordine: 3,
    nome: 'Grindelwald e il First',
    tipologia: ['montagna', 'panorama', 'famiglia'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'Ai piedi della parete nord dell\'Eiger, Grindelwald è il villaggio più «da cartolina» della regione. Da qui parte la funivia per il First, dove il Cliff Walk regala uno dei panorami più fotografati delle Alpi Bernesi senza nessuna camminata impegnativa.',
    percheAndarci:
      'È il modo più semplice di avvicinarsi all\'Eiger senza un dislivello serio, e il First va bene sia per chi cammina fino al Bachalpsee sia per chi vuole solo il panorama dalla funivia.',
    cosaVedere: [
      'La parete nord dell\'Eiger, visibile da tutto il paese',
      'Il First Cliff Walk, una passerella metallica a sbalzo sulla parete rocciosa',
      'Il Bachalpsee, un laghetto alpino che riflette Eiger, Mönch e Jungfrau nelle giornate senza vento',
    ],
    cosaFare: [
      'Salire in funivia al First e percorrere il Cliff Walk, incluso nel biglietto e ripetibile quante volte si vuole',
      'Camminare fino al Bachalpsee, 2-3 ore andata e ritorno con dislivello moderato',
      'Provare lo zipline First Flyer, attività extra a pagamento sul posto',
    ],
    doveDormire: 'Campeggi in zona, più economici di Interlaken ma con meno scelta.',
    doveMangiare: 'Ristoranti di montagna con vista sull\'Eiger, prezzi allineati al resto della regione.',
    comeArrivare: 'Da Interlaken, 20 minuti d\'auto o di treno.',
    comeSpostarsi: 'Il paese si gira a piedi; per il First e il Bachalpsee serve la funivia.',
    periodoMigliore: 'da giugno a settembre; il Bachalpsee resta spesso ghiacciato fino a giugno inoltrato.',
    costi: 'Funivia First 72-76 CHF A/R secondo la stagione; Cliff Walk incluso.',
    erroriDaEvitare: [
      'Salire al First credendo che il Bachalpsee sia «dietro l\'angolo»: la camminata richiede 2-3 ore andata e ritorno',
      'Sottovalutare il vento in cima, che sul Cliff Walk può essere forte anche con cielo sereno a valle',
    ],
    luoghi: [
      {
        nome: "First e il Cliff Walk",
        testo: "Dalla funivia di Grindelwald si sale al First, a 2.166 metri, con vista su Eiger, Mönch e Jungfrau. Il Cliff Walk è una passerella metallica di 45 metri sospesa sul vuoto, lungo la parete.",
        come: "Funivia da Grindelwald in circa 25 minuti, con più tronchi. Il Cliff Walk è incluso nel biglietto.",
        quando: "Mattina, con il cielo più limpido. Chiusure e orari variano con la stagione.",
        tempo: "2-3 ore",
        costo: "Circa 76 CHF andata e ritorno (2026); metà prezzo con Swiss Travel Pass o abbonamento metà prezzo.",
        consiglio: "La prima cabina del mattino ha meno coda; i ghiacciai si vedono meglio prima di mezzogiorno."
      },
      {
        nome: "Bachalpsee",
        testo: "Un lago d'alta quota che riflette il Wetterhorn e lo Schreckhorn. Dal First il sentiero è facile, in leggera salita, meno di un'ora.",
        come: "A piedi dalla stazione del First sul sentiero segnalato.",
        quando: "Mattina, quando l'acqua è ferma e specchia le montagne.",
        tempo: "2 ore andata e ritorno",
        consiglio: "Portare uno strato caldo: soffia il vento, anche in luglio."
      },
      {
        nome: "Ghiacciaio inferiore (Unterer Gletscher)",
        testo: "Il ghiacciaio che scende fino alla valle sopra Grindelwald, con una gola profonda scavata dal fiume. Si arriva a piedi dal paese.",
        come: "A piedi dal paese o con la funivia della Pfingstegg.",
        quando: "Estate.",
        tempo: "2-3 ore",
        consiglio: "Non salire sul ghiaccio senza guida: ci sono crepacci nascosti."
      },
      {
        nome: "Männlichen e il sentiero panoramico",
        testo: "La cresta tra Grindelwald e Wengen, raggiunta in cabinovia dal Grindelwald Terminal. Dalla stazione si sale in pochi minuti al belvedere a forma di corona del Royal Walk, poi parte il sentiero panoramico verso la Kleine Scheidegg, quasi tutto in discesa e di fronte a Eiger, Mönch e Jungfrau. È la passeggiata con la vista più ampia della zona per lo sforzo richiesto.",
        come: "Cabinovia Männlichen dal Grindelwald Terminal; dalla Kleine Scheidegg si torna in treno a Grindelwald o a Wengen.",
        quando: "Estate, di mattina; orari e chiusure stagionali della cabinovia sul sito ufficiale.",
        tempo: "mezza giornata",
        consiglio: "Fare il sentiero in direzione Kleine Scheidegg: si cammina sempre con le tre vette davanti."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Funivia al First di mattina",
          "Cliff Walk",
          "Camminata al Bachalpsee",
          "Discesa a piedi o in funivia"
        ]
      }
    ],
    zone: [
      {
        nome: "Grindelwald",
        perChi: "chi vuole fare escursioni",
        testo: "Il paese si trova ai piedi della parete nord dell'Eiger, con servizi e accesso diretto alle funivie."
      },
      {
        nome: "Interlaken",
        perChi: "chi vuole risparmiare",
        testo: "Treno diretto da Interlaken Ost, con più scelta di alloggi."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patate fritte, con uova o formaggio, nei ristoranti d'alpe."
      },
      {
        nome: "Fondue",
        testo: "Formaggio fuso in pentola, in rifugi e ristoranti del paese."
      },
      {
        nome: "Meringata con panna",
        testo: "Un dolce di meringhe e panna di montagna."
      }
    ],
    attenzioni: [
      "Con nuvole basse la vista dal First sparisce: controllare le webcam prima di comprare il biglietto.",
      "Le passerelle del Cliff Walk non sono adatte a chi soffre di vertigini.",
      "I sentieri si innevano da ottobre; verificare lo stato dei sentieri."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La parete nord dell\'Eiger innevata che domina il villaggio di Grindelwald, con chalet e prati verdi ai suoi piedi',
    immagine: '/images/svizzera/grindelwald.jpg',
  },
  {
    slug: 'jungfraujoch',
    paeseSlug: 'svizzera',
    ordine: 4,
    nome: 'Jungfraujoch, il Top of Europe',
    tipologia: ['ghiacciaio', 'panorama', 'esperienza unica'],
    giorniConsigliati: '1 giorno intero',
    visitataPersonalmente: true,
    introduzione:
      'La stazione ferroviaria più alta d\'Europa, a 3.454 metri. Ci arriva una cremagliera scavata quasi tutta nella roccia dell\'Eiger e del Mönch fra il 1896 e il 1912. In cima c\'è il ghiacciaio dell\'Aletsch, il più lungo delle Alpi.',
    percheAndarci:
      'È l\'unico punto di questa guida dove si sta oltre i 3.400 metri senza un\'escursione impegnativa, davanti al ghiacciaio più lungo delle Alpi. È anche il biglietto più caro del viaggio: va trattato come la giornata principale.',
    cosaVedere: [
      'Il ghiacciaio dell\'Aletsch, il più esteso delle Alpi, patrimonio UNESCO',
      'Il palazzo di ghiaccio scavato nel permafrost',
      'Le terrazze panoramiche, da cui nelle giornate limpide si vede fino alla Foresta Nera',
    ],
    cosaFare: [
      'Salire con la cremagliera da Interlaken Ost, partendo presto per avere più probabilità di cielo sereno',
      'Camminare sul primo tratto del ghiacciaio dell\'Aletsch, dove segnalato e in sicurezza',
      'Visitare il palazzo di ghiaccio, incluso nel biglietto',
    ],
    doveDormire: 'Non si pernotta in quota: è una gita di giornata da Interlaken o dalle valli vicine.',
    doveMangiare: 'Ristoranti self-service in stazione, prezzi da zona di alta quota isolata.',
    comeArrivare: 'Treno a cremagliera da Interlaken Ost, con cambi a Grindelwald o Lauterbrunnen e a Kleine Scheidegg, circa 2h20 complessive.',
    comeSpostarsi: 'A piedi tra le terrazze e le gallerie panoramiche in quota.',
    periodoMigliore: 'tutto l\'anno, con orari e frequenze diversi fra alta e bassa stagione; di solito le mattine sono più serene dei pomeriggi.',
    costi: 'Biglietto A/R da Interlaken Ost circa 224-261 CHF secondo la stagione; Good Morning Ticket scontato per chi parte entro le 8.',
    erroriDaEvitare: [
      'Partire nel primo pomeriggio: di solito le nuvole si formano dopo mezzogiorno e coprono la vista',
      'Non prenotare online: alla cassa i biglietti costano di solito di più',
      'Sottovalutare il freddo in quota anche in piena estate: servono giacca a vento e strati anche a luglio',
    ],
    luoghi: [
      {
        nome: "Terrazza della Sphinx",
        testo: "L'osservatorio e la terrazza a 3.571 metri, raggiunti con un ascensore dalla stazione. Da qui si vedono l'Aletsch, il Mönch e, nelle giornate limpide, la Foresta Nera e i Vosgi.",
        come: "Ascensore veloce dalla stazione (Top of Europe) alla piattaforma.",
        quando: "Mattina, con meno nuvole. Chiusa in caso di vento forte o tempesta.",
        tempo: "45 minuti",
        costo: "Oltre 200 CHF andata e ritorno da Interlaken Ost in alta stagione, con prezzi che cambiano per data e forti sconti con Swiss Travel Pass o metà prezzo (2026); posto riservato 10 CHF. Il Good Morning Ticket dei primi treni ha il 15% di sconto (maggio-ottobre 2026).",
        url: "https://www.jungfrau.ch/",
        consiglio: "Controllare la webcam prima di partire: nelle giornate coperte non si vede nulla."
      },
      {
        nome: "Palazzo di ghiaccio",
        testo: "Un tunnel scavato nel ghiacciaio, con sculture di ghiaccio, a circa 3.450 metri. Ha pavimento scivoloso e temperatura sotto zero tutto l'anno.",
        come: "Incluso nel biglietto, accanto alla stazione.",
        quando: "Tutto l'anno.",
        tempo: "30 minuti",
        consiglio: "Indossare scarpe con suola antiscivolo e guanti."
      },
      {
        nome: "Ghiacciaio dell'Aletsch e passeggiata sul Plateau",
        testo: "Il più lungo ghiacciaio delle Alpi, oltre 20 chilometri, e il sentiero battuto sulla neve verso la capanna Mönchsjoch. La camminata è facile ma in alta quota.",
        come: "Si esce dalla stazione e si segue il sentiero segnalato sul plateau.",
        quando: "Mattina; la neve è più compatta e il tempo migliore.",
        tempo: "1 ora",
        consiglio: "L'aria è rarefatta: camminare piano e bere acqua."
      },
      {
        nome: "Fermata Eismeer",
        testo: "Sulla salita il treno corre in galleria dentro l'Eiger e il Mönch e si ferma alla stazione Eismeer, a circa 3.160 metri. Dalle vetrate scavate nella roccia si guarda il ghiacciaio sottostante. Dura pochi minuti, ma è il momento in cui si capisce l'impresa della ferrovia, finita nel 1912.",
        come: "Sosta di circa 5 minuti compresa nel viaggio, solo in salita.",
        quando: "Tutto l'anno.",
        tempo: "5 minuti",
        consiglio: "Sedersi in modo da scendere subito: le vetrate sono poche e si affollano."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Partenza da Interlaken Ost entro le 8",
          "Cambio a Kleine Scheidegg",
          "Terrazza della Sphinx e palazzo di ghiaccio",
          "Passeggiata sul plateau",
          "Rientro nel primo pomeriggio"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        perChi: "chi parte la mattina presto",
        testo: "Base comoda per il primo treno; alloggi per ogni budget."
      },
      {
        nome: "Grindelwald",
        perChi: "chi vuole il treno diretto",
        testo: "Da Grindelwald si sale con la cremagliera verso Kleine Scheidegg e in meno cambi."
      }
    ],
    sapori: [
      {
        nome: "Cioccolato Lindt",
        testo: "Ce n'è un negozio in cima, caro e turistico, ma è un souvenir tipico."
      },
      {
        nome: "Rösti di montagna",
        testo: "Al self-service della stazione."
      },
      {
        nome: "Tè caldo e zuppa",
        testo: "Per scaldarsi tra le due uscite sul ghiaccio."
      }
    ],
    attenzioni: [
      "Il mal di quota può colpire anche a 3.400 metri: salire con calma, bere e fermarsi se si ha mal di testa.",
      "Il biglietto è tra i più cari del Paese: confrontare le tariffe del Good Morning Ticket.",
      "Non tenere i documenti nelle tasche esterne: vento e guanti rendono scomodo cercarli."
    ],
    esperienzeSlugs: ['jungfraujoch-top-of-europe'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il ghiacciaio dell\'Aletsch e lo Jungfraufirn visti dalla terrazza panoramica della Sphinx al Jungfraujoch',
    immagine: '/images/svizzera/jungfraujoch.jpg',
  },
  {
    slug: 'muerren-schilthorn',
    paeseSlug: 'svizzera',
    ordine: 5,
    nome: 'Mürren e lo Schilthorn',
    tipologia: ['montagna', 'panorama', 'trekking'],
    giorniConsigliati: '1 giorno, più mezza giornata per chi fa la via ferrata',
    visitataPersonalmente: true,
    introduzione:
      'Mürren è uno dei villaggi senza auto della valle di Lauterbrunnen, con una delle viste più aperte della regione su Eiger, Mönch e Jungfrau. Sopra il paese la funivia sale allo Schilthorn, dove il ristorante girevole Piz Gloria, reso famoso da un film di James Bond, guarda a 360 gradi su oltre duecento vette.',
    percheAndarci:
      'Ha lo stesso panorama di Grindelwald sulla catena Eiger-Mönch-Jungfrau, ma dal lato opposto della valle e in un paese senza auto. E da qui parte la via ferrata più nota della regione.',
    cosaVedere: [
      'Il panorama sulla catena Eiger-Mönch-Jungfrau dal paese di Mürren, senza pareti a bloccare la vista',
      'Il ristorante girevole Piz Gloria in cima allo Schilthorn, set del film «Al servizio segreto di Sua Maestà»',
      'Il villaggio di Gimmelwald, ancora più piccolo e meno turistico, raggiungibile a piedi dalla via ferrata o in funivia',
    ],
    cosaFare: [
      'Salire in funivia allo Schilthorn per il panorama a 360 gradi',
      'Percorrere la via ferrata Mürren-Gimmelwald, circa 2,2 km con un ponte sospeso di 90 metri (vedi la scheda esperienza dedicata)',
      'Camminare da Mürren a Gimmelwald per il sentiero normale, alternativa senza attrezzatura da ferrata',
    ],
    doveDormire: 'Nessun campeggio dentro Mürren (paese senza auto): si dorme nei campeggi del fondovalle a Lauterbrunnen o Stechelberg.',
    doveMangiare: 'Ristoranti di paese con cucina di montagna; il Piz Gloria in cima allo Schilthorn ha un menù turistico con prezzi da terrazza panoramica.',
    comeArrivare: 'Da Lauterbrunnen, funivia da Stechelberg oppure cremagliera via Grütschalp.',
    comeSpostarsi: 'Mürren si gira a piedi; per lo Schilthorn e per Gimmelwald servono funivia o via ferrata.',
    periodoMigliore: 'da giugno a ottobre; la via ferrata è aperta solo in questa finestra.',
    costi: 'Funivia Schilthorn circa 115 CHF A/R da Stechelberg, 91 CHF da Mürren.',
    erroriDaEvitare: [
      'Affrontare la via ferrata senza kit omologato o senza aver fatto prima un percorso più semplice',
      'Lasciare il van a Lauterbrunnen pensando di guidare fino a Mürren: il paese non è raggiungibile in auto',
    ],
    confronti: [
      {
        titolo: 'Salire allo Schilthorn da Stechelberg o da Mürren',
        introduzione:
          'La funivia per lo Schilthorn ha due punti di partenza, con una differenza di prezzo e di tempo da conoscere prima di scegliere.',
        opzioni: [
          {
            nome: 'Da Stechelberg (fondovalle)',
            sintesi: 'Il percorso completo, dal fondo della valle di Lauterbrunnen fino in cima, con un solo biglietto su più tronconi.',
            costo: 'circa 115 CHF A/R',
            durata: '32 minuti di sola andata',
            pro: ['Un unico biglietto per tutto il dislivello', 'Non richiede prima la cremagliera per Mürren'],
            contro: ['Più caro della tratta da Mürren', 'Il van deve arrivare fino a Stechelberg, ultimo tratto della valle'],
            perChi: 'Chi arriva in van fin dentro la valle e non vuole cambiare mezzo più volte.',
          },
          {
            nome: 'Da Mürren',
            sintesi: 'Si arriva prima a Mürren in cremagliera da Lauterbrunnen via Grütschalp, poi si prende la funivia più corta per lo Schilthorn.',
            costo: 'circa 91 CHF A/R da Mürren',
            durata: 'tratta più breve rispetto a Stechelberg',
            pro: ['Tratta finale più economica', 'Si passa comunque da Mürren, utile per chi vuole vedere anche il paese'],
            contro: ['Serve anche il biglietto della cremagliera fino a Mürren, quindi si risparmia meno di quanto sembri'],
            perChi: 'Chi vuole comunque fermarsi a Mürren prima o dopo la salita allo Schilthorn.',
          },
        ],
        raccomandazione:
          'Per chi ha il van e vuole vedere anche il paese di Mürren, la tratta da Stechelberg con sosta intermedia resta la più semplice da organizzare in una sola giornata.',
      },
    ],
    luoghi: [
      {
        nome: "Schilthorn e Piz Gloria",
        testo: "La vetta a 2.970 metri con il ristorante girevole che compare in un film di James Bond del 1969. Dalla terrazza si vedono Eiger, Mönch e Jungfrau.",
        come: "Funivia da Stechelberg (fondovalle) o da Mürren, con più tronchi.",
        quando: "Mattina, con la luce migliore. Chiusa al vento forte.",
        tempo: "2-3 ore",
        costo: "Circa 115 CHF andata e ritorno da Stechelberg, circa 91 CHF da Mürren (2026); forti sconti con Swiss Travel Pass.",
        url: "https://www.schilthorn.ch/",
        consiglio: "Dal fondovalle la salita è più lunga ma regala vedute sulle pareti."
      },
      {
        nome: "Mürren",
        testo: "Un villaggio senza auto sull'altopiano, di fronte alla parete nord dell'Eiger. Un posto per la vista, non per i monumenti.",
        come: "Funivia da Stechelberg o treno da Grütschalp.",
        quando: "Tutto l'anno.",
        tempo: "2 ore",
        consiglio: "Camminare fino al Allmendhubel per la vista sulle montagne."
      },
      {
        nome: "Gimmelwald",
        testo: "Un minuscolo villaggio agricolo a metà parete, senza auto, raggiungibile in funivia o a piedi da Mürren. Fienili in legno e mucche al pascolo. È il punto più quieto della valle, con la stessa vista di Mürren e pochissimi posti letto.",
        come: "Sentiero in discesa da Mürren, oppure la funivia per Stechelberg, che ferma qui.",
        quando: "Estate e autunno.",
        tempo: "1 ora e mezza",
        consiglio: "È un villaggio vivo: rispettare le proprietà e non entrare nelle stalle."
      },
      {
        nome: "Birg e il Thrill Walk",
        testo: "La stazione intermedia della funivia dello Schilthorn, sospesa sopra la valle. Da qui parte il Thrill Walk, un sentiero attrezzato che scende lungo le pareti verticali della roccia. Si vede la parete nord dell'Eiger da vicino, con il vuoto sotto i piedi.",
        come: "Si scende a Birg con lo stesso biglietto della funivia dello Schilthorn.",
        quando: "Quando la funivia è aperta; con ghiaccio la passerella può essere chiusa.",
        tempo: "30-45 minuti",
        costo: "Compreso nel biglietto della funivia.",
        consiglio: "Chi soffre di vertigini può fermarsi alla terrazza della stazione, che ha la stessa vista."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Funivia per lo Schilthorn di mattina",
          "Colazione a Piz Gloria",
          "Discesa a Mürren",
          "Camminata a Gimmelwald",
          "Rientro a Stechelberg"
        ]
      }
    ],
    zone: [
      {
        nome: "Mürren",
        perChi: "chi vuole vista e silenzio",
        testo: "Sull'altopiano, senza auto; pochi servizi e prezzi alti."
      },
      {
        nome: "Lauterbrunnen",
        perChi: "chi vuole risparmiare",
        testo: "Fondovalle, più servizi e meno cari, con funivia per Mürren."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Patate fritte con uovo o formaggio, nei ristoranti di Mürren."
      },
      {
        nome: "Berner Platte",
        testo: "Piatto bernese di carni miste e crauti, nelle trattorie."
      },
      {
        nome: "Fondue",
        testo: "Formaggio fuso, nei ristoranti del villaggio."
      }
    ],
    attenzioni: [
      "Con nuvole basse lo Schilthorn non si vede: controllare le webcam.",
      "La sera la funivia ferma presto: segnarsi l'ultima corsa.",
      "Gimmelwald è un villaggio residenziale: non fare rumore la sera."
    ],
    esperienzeSlugs: ['via-ferrata-muerren-gimmelwald'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Una cabina della funivia dello Schilthorn sospesa tra Mürren e Birg, sopra le pareti rocciose della valle di Lauterbrunnen',
    immagine: '/images/svizzera/muerren-schilthorn.jpg',
  },
  {
    slug: 'grimsel-furka',
    paeseSlug: 'svizzera',
    ordine: 6,
    nome: 'Grimselpass e Furkapass',
    tipologia: ['roadtrip', 'panorama', 'passi alpini'],
    giorniConsigliati: '1 giorno di trasferimento',
    visitataPersonalmente: true,
    introduzione:
      'La strada che porta dalle Alpi Bernesi al Vallese attraverso due dei passi più scenografici della Svizzera: il Grimselpass (2.164 m), fra laghi artificiali color smeraldo, e il Furkapass (2.429 m), famoso per l\'inseguimento in Aston Martin di «Goldfinger» e affacciato sulla lingua terminale del ghiacciaio del Rodano.',
    percheAndarci:
      'È la giornata di guida pura di questa guida: qui il van serve ad attraversare le Alpi, oltre che a visitarle. E collega la Jungfrau Region a Zermatt senza tornare indietro verso la pianura.',
    cosaVedere: [
      'I laghi artificiali del Grimsel, verde smeraldo fra la roccia grigia',
      'Il ghiacciaio del Rodano, visibile dal Furkapass: è in forte ritiro e d\'estate in parte coperto da teli riflettenti per rallentarne lo scioglimento',
      'L\'Hotel Belvédère, abbandonato sul Furkapass, dove è stato girato l\'inseguimento in auto di «Goldfinger»',
    ],
    cosaFare: [
      'Percorrere la strada con soste fotografiche ai punti panoramici segnalati',
      'Una breve camminata alla lingua del ghiacciaio del Rodano, dove l\'accesso è consentito',
    ],
    doveDormire: 'Nessuna sosta prevista: è una giornata di trasferimento tra la Jungfrau Region e il Vallese.',
    doveMangiare: 'Pochi rifugi e punti di ristoro sui passi, con prezzi da alta quota isolata: conviene avere provviste nel van.',
    comeArrivare: 'Da Interlaken o dalla zona di Lauterbrunnen-Mürren, circa 2-3 ore di guida con soste.',
    comeSpostarsi: 'Solo in auto o van; non esiste un collegamento pubblico diretto lungo l\'intero tracciato.',
    periodoMigliore: 'da giugno a ottobre; le date di apertura cambiano ogni anno secondo la neve rimasta.',
    costi: 'Nessun pedaggio sulla strada.',
    erroriDaEvitare: [
      'Programmare il trasferimento senza controllare prima che i due passi siano aperti, soprattutto a inizio giugno o a fine ottobre',
      'Non sapere che il Furka ha un\'alternativa in treno-navetta (Furka Autoverlad) quando il passo è chiuso alla circolazione ordinaria',
    ],
    luoghi: [
      {
        nome: "Passo del Grimsel",
        testo: "Un valico a 2.164 metri tra il Canton Berna e il Vallese, in un paesaggio di laghi artificiali, dighe e rocce di granito levigate dal ghiaccio. La strada ha tornanti e punti di sosta.",
        come: "In auto da Meiringen verso Gletsch, circa 38 km. Strada aperta di norma da giugno a ottobre.",
        quando: "Mattina: meno traffico e luce migliore. Controllare l'apertura in primavera e autunno.",
        tempo: "2 ore con le soste",
        consiglio: "Fermarsi alla diga del Räterichsboden e al lago del Grimsel."
      },
      {
        nome: "Ghiacciaio del Rodano",
        testo: "La sorgente del Rodano, che scende dal ghiacciaio di fronte all'Albergo Belvédère. Una grotta di ghiaccio scavata nel ghiacciaio si visita in estate.",
        come: "Dal parcheggio di Gletsch, a pochi minuti a piedi dal Belvédère.",
        quando: "Estate.",
        tempo: "1 ora",
        consiglio: "Il ghiacciaio si è ritirato molto: i cartelli mostrano la posizione in anni diversi."
      },
      {
        nome: "Passo della Furka",
        testo: "Un valico a 2.429 metri, con tornanti ripidi e panorami sul Rodano. Il passo è stato set di un film di James Bond (Goldfinger, 1964).",
        come: "Da Gletsch in auto, salendo per i tornanti.",
        quando: "Estate.",
        tempo: "1 ora",
        consiglio: "La strada ha tratti stretti: precedenza a chi sale."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Meiringen",
          "Passo del Grimsel",
          "Gletsch e ghiacciaio del Rodano",
          "Passo della Furka",
          "Andermatt o rientro per il Susten"
        ]
      }
    ],
    zone: [
      {
        nome: "Meiringen",
        perChi: "chi arriva da Berna",
        testo: "Cittadina ai piedi del Grimsel, con alberghi per ogni budget."
      },
      {
        nome: "Andermatt",
        perChi: "chi continua verso il Ticino",
        testo: "Paese alpino sulla Furka, comodo per ripartire verso il Gottardo."
      }
    ],
    sapori: [
      {
        nome: "Älplermagronen",
        testo: "Pasta, patate e formaggio, nei rifugi."
      },
      {
        nome: "Meringata di Meiringen",
        testo: "Il dolce che la tradizione fa nascere nella cittadina, con panna."
      },
      {
        nome: "Formaggio Bergkäse",
        testo: "Formaggio d'alpeggio."
      }
    ],
    attenzioni: [
      "I passi sono chiusi da ottobre-novembre a giugno: controllare l'apertura sui siti ufficiali.",
      "Il maltempo e il ghiaccio possono chiudere il passo in giornata.",
      "Carburante: i distributori sono rari in quota, fare il pieno a valle."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La valle del Grimselpass con i laghi artificiali tra le rocce granitiche e le cime ancora innevate',
    immagine: '/images/svizzera/grimsel-furka.jpg',
  },
  {
    slug: 'zermatt',
    paeseSlug: 'svizzera',
    ordine: 7,
    nome: 'Zermatt e il Cervino',
    tipologia: ['montagna', 'panorama', 'iconico'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il punto più a sud di questa guida, e l\'unico dove il van non entra: Zermatt è chiusa al traffico privato dal 1961. In cambio c\'è il Cervino (Matterhorn), 4.478 metri di piramide di roccia quasi perfetta, visibile dal centro del paese.',
    percheAndarci:
      'Il Cervino è una delle montagne più riconoscibili al mondo. Zermatt è la zona più cara e più lontana di questa guida, ma ha punti panoramici (il Gornergrat prima di tutti) che nel resto del giro non hanno equivalenti.',
    cosaVedere: [
      'Il Cervino (Matterhorn), visibile dal centro del paese in ogni giornata serena',
      'Il Gornergrat, raggiunto dalla ferrovia a cremagliera più alta d\'Europa all\'aperto',
      'Il centro storico di Zermatt, senza traffico automobilistico, con i tradizionali fienili di legno su piedritti in pietra',
    ],
    cosaFare: [
      'Salire al Gornergrat in treno per la vista frontale sul Cervino',
      'Passeggiare nel centro di Zermatt, libero da auto',
      'Per chi ha tempo, una delle molte funivie panoramiche minori intorno al paese',
    ],
    doveDormire: 'Dentro Zermatt in van non si dorme, perché la città è chiusa al traffico privato: si dorme nel van a Täsch o si torna verso le altre zone.',
    doveMangiare: 'Ristoranti da paese turistico, fra i più cari della guida; conviene alternarli con pasti preparati nel van a Täsch.',
    comeArrivare: 'Il van si lascia nel parcheggio coperto di Täsch, 5 km prima di Zermatt; da lì un treno navetta parte ogni 20 minuti.',
    comeSpostarsi: 'A piedi in paese; per il Gornergrat e le altre quote serve la ferrovia a cremagliera o le funivie.',
    periodoMigliore: 'da giugno a settembre; il Cervino resta comunque visibile (quando il cielo è sereno) tutto l\'anno.',
    costi: 'Parcheggio Täsch da 17 CHF/giorno; Gornergrat a parte, non incluso nel parcheggio.',
    erroriDaEvitare: [
      'Provare a entrare a Zermatt in van o in auto: il divieto c\'è e viene controllato',
      'Non mettere in conto il tempo di guida per arrivarci: oltre due ore da Interlaken anche passando per Grimsel-Furka',
      'Dare per scontato il Cervino libero dalle nuvole: se ne forma di proprie anche quando intorno il cielo è pulito',
    ],
    luoghi: [
      {
        nome: "Gornergrat",
        testo: "Il treno a cremagliera più alto d'Europa all'aperto sale a 3.089 metri. Dalla terrazza si vedono il Cervino, il Monte Rosa e il ghiacciaio del Gorner.",
        come: "Treno a cremagliera dalla stazione della Gornergrat Bahn a Zermatt; in estate parte ogni 24 minuti.",
        quando: "Mattina, con il cielo più terso.",
        tempo: "Mezza giornata",
        costo: "Andata e ritorno 132 CHF da maggio a ottobre 2026 e 102 CHF da novembre 2026 ad aprile 2027; metà prezzo con Swiss Travel Pass o abbonamento metà prezzo.",
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Scendere a Rotenboden o Riffelberg per camminare un tratto a piedi."
      },
      {
        nome: "Matterhorn Glacier Paradise",
        testo: "La stazione a 3.820 metri, sotto la vetta del Piccolo Cervino (3.883 m): è il punto più alto d'Europa raggiungibile in funivia. Nel ghiacciaio è scavata una grotta di ghiaccio.",
        come: "Funivia da Zermatt con cambio a Furi e Trockener Steg.",
        quando: "Mattina presto per avere il cielo più terso.",
        tempo: "Mezza giornata",
        costo: "Andata e ritorno da 104 CHF nella stagione novembre 2026-aprile 2027, con tariffe stagionali; prezzi aggiornati sul sito ufficiale.",
        url: "https://www.matterhornparadise.ch/",
        consiglio: "Portare occhiali da sole e uno strato caldo: a 3.800 metri fa freddo."
      },
      {
        nome: "Sentiero dei cinque laghi",
        testo: "Una camminata da Blauherd verso Sunnegga lungo cinque laghi alpini (Stellisee, Grindjisee, Grünsee, Moosjisee e Leisee) che riflettono il Cervino. È una delle foto classiche.",
        come: "Funicolare per Sunnegga e cabinovia per Blauherd, poi circa 11 km a piedi, più in discesa che in salita.",
        quando: "Estate; i laghi riflettono meglio al mattino.",
        tempo: "3-4 ore",
        consiglio: "Il lago Stellisee è il più fotografato: arrivare presto."
      },
      {
        nome: "Villaggio di Zermatt",
        testo: "Il centro senza auto, con case di legno scuro, negozi e hotel. Il piccolo cimitero accanto alla chiesa ricorda gli alpinisti morti sul Cervino.",
        come: "Dalla stazione a piedi.",
        quando: "Tutto l'anno.",
        tempo: "1-2 ore",
        consiglio: "Il museo del Cervino mostra la storia della prima salita nel 1865."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Gornergrat di mattina",
          "Pranzo a Riffelberg",
          "Camminata verso Zermatt",
          "Cena in paese"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Gornergrat e paese",
          "Giorno 2: Matterhorn Glacier Paradise o sentiero dei cinque laghi"
        ]
      }
    ],
    zone: [
      {
        nome: "Zermatt",
        perChi: "chi vuole stare nel centro",
        testo: "Senza auto; alloggi tutti i prezzi, ma cari."
      },
      {
        nome: "Täsch e Randa",
        perChi: "chi vuole risparmiare",
        testo: "Prezzi più bassi, con il treno navetta frequente per Zermatt."
      }
    ],
    sapori: [
      {
        nome: "Raclette",
        testo: "Formaggio fuso raschiato su patate, tipico del Vallese."
      },
      {
        nome: "Fondue al formaggio",
        testo: "Con vino bianco del Vallese."
      },
      {
        nome: "Cervino di cioccolato",
        testo: "Souvenir dolce, in vari negozi."
      }
    ],
    attenzioni: [
      "Le auto si fermano a Täsch: lasciarle nel parcheggio e prendere il treno.",
      "Prezzi alti: comprare panini nei supermercati prima di salire.",
      "Nei giorni di vento o nuvole le funivie possono chiudere: tenere un margine nel programma."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il Cervino al tramonto riflesso in un laghetto alpino sopra Zermatt, con un escursionista di spalle in primo piano',
    immagine: '/images/svizzera/zermatt.jpg',
  },
]
