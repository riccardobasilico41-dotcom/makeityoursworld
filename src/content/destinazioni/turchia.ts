import type { Destinazione } from '@/lib/types'

// Destinazioni della Turchia per la guida "turchia-itinerario" (73), viaggio fatto da Rick:
// visitataPersonalmente è true; miaEsperienza resta assente finché non arriva un ricordo dell'autore.
// Prezzi indicativi a ottobre 2026; i musei statali sono quotati in euro.

export const destinazioniTurchia: Destinazione[] = [
  {
    slug: 'istanbul',
    paeseSlug: 'turchia',
    ordine: 1,
    nome: 'Istanbul',
    tipologia: ['città', 'storia', 'cibo'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'antica Bisanzio, poi Costantinopoli, divisa dal Bosforo fra Europa e Asia: la penisola storica di Sultanahmet, i quartieri di Beyoğlu e Karaköy, Kadıköy sul lato asiatico.',
    percheAndarci:
      'Per Santa Sofia, il Topkapı e la Süleymaniye, per i bazar, per i traghetti sul Bosforo e per una delle cucine di strada più ricche del Mediterraneo.',
    cosaVedere: [
      'Santa Sofia, dove i turisti visitano le gallerie superiori',
      'La Moschea Blu e l\'Ippodromo',
      'La Cisterna Basilica',
      'Il palazzo Topkapı con l\'harem',
      'La moschea di Süleymaniye, capolavoro di Sinan',
      'Il Gran Bazar e il Bazar delle Spezie',
      'Chora (Kariye), con i mosaici bizantini riaperti nel 2024',
    ],
    cosaFare: [
      'Il traghetto pubblico sul Bosforo fino ad Anadolu Kavağı',
      'Passare in traghetto da Eminönü a Kadıköy per il mercato del lato asiatico',
      'Un hammam storico',
      'Il tramonto dalla torre di Galata o da una terrazza di Karaköy',
    ],
    doveDormire:
      'Sultanahmet per stare a piedi dai monumenti, Karaköy e Galata per locali e vita serale, Kadıköy per un\'Istanbul più locale. Economiche: piccoli hotel di Sultanahmet e Fatih · fascia media: boutique hotel di Karaköy · lusso: hotel storici sul Bosforo.',
    doveMangiare:
      'Balık ekmek (panino di pesce) a Eminönü, kebab di Adana e lahmacun nelle lokanta, meze e rakı nelle meyhane di Beyoğlu, colazione turca a Kadıköy, baklava da Karaköy Güllüoğlu.',
    comeArrivare: 'Aeroporto di Istanbul (IST), collegato dalla metro M11 e dagli autobus Havaist; aeroporto Sabiha Gökçen (SAW) sul lato asiatico.',
    comeSpostarsi:
      'Istanbulkart ricaricabile per metro, tram T1, funicolari e traghetti; taxi con le app BiTaksi o Uber, che a Istanbul chiama i taxi gialli.',
    periodoMigliore: 'aprile-giugno e settembre-novembre',
    costi:
      'Santa Sofia 25 € per i turisti; Topkapı con harem intorno ai 50 €; Museum Pass Istanbul intorno ai 105 € per 5 giorni (prezzi indicativi, in euro).',
    erroriDaEvitare: [
      'Accettare l\'invito di uno sconosciuto a bere qualcosa in un locale: è la truffa del conto gonfiato, frequente a Taksim e Sultanahmet',
      'Raccogliere la spazzola che un lustrascarpe lascia cadere davanti a voi: è il pretesto per una lucidatura a pagamento',
      'Mangiare nei ristoranti di Sultanahmet senza prezzi esposti',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Santa Sofia",
        "testo": "La basilica costruita da Giustiniano nel 537, per quasi mille anni la più grande chiesa del mondo, poi moschea e museo, oggi di nuovo moschea. I turisti stranieri visitano le gallerie superiori con i mosaici bizantini.",
        "come": "Tram T1 fino a Sultanahmet. Ingresso separato per i turisti; abbigliamento coprente, donne con il capo coperto.",
        "quando": "Mattina presto. Chiusa ai turisti durante le preghiere, in particolare il venerdì a mezzogiorno.",
        "tempo": "1-1,5 ore",
        "consiglio": "Controllare prima gli orari sul sito ufficiale, che cambiano con le regole di accesso.",
        "costo": "25 € per i visitatori stranieri, percorso delle gallerie superiori (2026)"
      },
      {
        "nome": "Moschea Blu e Ippodromo",
        "testo": "La moschea di Sultanahmet, del primo Seicento, con sei minareti e l'interno rivestito di piastrelle di Iznik blu. Davanti, la piazza dell'antico ippodromo con l'obelisco egizio.",
        "come": "A piedi da Santa Sofia. Scarpe tolte, spalle e gambe coperte; donne con il capo coperto.",
        "quando": "Fuori dalle cinque preghiere, che chiudono l'ingresso ai turisti.",
        "tempo": "45 minuti",
        "costo": "Ingresso libero"
      },
      {
        "nome": "Palazzo Topkapı e Harem",
        "testo": "La residenza dei sultani ottomani per quasi quattro secoli: cortili, padiglioni, tesoro e Harem, con una bella vista sul Bosforo.",
        "come": "A piedi da Santa Sofia. Il biglietto per stranieri comprende Harem e Sant'Irene; si compra anche online.",
        "quando": "Chiuso il martedì. Arrivare all'apertura delle 9: d'autunno e d'inverno la biglietteria chiude presto.",
        "tempo": "2-3 ore",
        "url": "https://muze.gov.tr/",
        "consiglio": "Passare prima dall'Harem e dal Tesoro, che hanno le code, poi i cortili.",
        "costo": "2.750 TL con Harem e Sant'Irene (2026)"
      },
      {
        "nome": "Cisterna Basilica",
        "testo": "Un enorme serbatoio sotterraneo bizantino del VI secolo con 336 colonne, illuminato di luce soffusa. Alla base di due colonne ci sono teste di Medusa.",
        "come": "A piedi da Santa Sofia. Biglietto da prenotare online in alta stagione.",
        "quando": "Prima mattina o sera, quando c'è meno coda.",
        "tempo": "45 minuti",
        "consiglio": "Evitare il weekend e le ore centrali.",
        "costo": "1.950 TL di giorno, 3.000 TL nella fascia serale (2026)"
      },
      {
        "nome": "Gran Bazar e Bazar delle Spezie",
        "testo": "Il mercato coperto con oltre 4.000 negozi di tappeti, ceramiche, gioielli; poco più in là, quello delle spezie con tè, dolcezze turche e frutta secca.",
        "come": "Tram T1 fino a Beyazıt-Kapalıçarşı, oppure a piedi da Santa Sofia in 15 minuti.",
        "quando": "Tutto il giorno, domenica chiuso il Gran Bazar.",
        "tempo": "2 ore",
        "consiglio": "Il Bazar delle Spezie è meno turistico: prendere con calma e assaggiare prima di comprare."
      },
      {
        "nome": "Torre di Galata",
        "testo": "La torre di pietra genovese del 1348 sopra Karaköy, alta circa 67 metri. Dalla balconata in cima si vede il Corno d'Oro, il Bosforo e la penisola storica con le cupole e i minareti. Dentro c'è un piccolo museo.",
        "come": "Tram T1 fino a Karaköy, poi salita a piedi per le stradine; oppure la funicolare storica Tünel. Si sale in ascensore e poi per una scala.",
        "quando": "Apertura al mattino o ultima ora prima della chiusura: a metà giornata la coda dura anche un'ora.",
        "tempo": "1 ora con la coda",
        "costo": "30 € per i visitatori stranieri (2026)",
        "url": "https://muze.gov.tr/",
        "consiglio": "La balconata è stretta e si gira in senso unico: la vista migliore sulla penisola storica è sul lato sud."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Santa Sofia e Moschea Blu",
          "Cisterna Basilica",
          "Pomeriggio: Topkapı",
          "Sera: tramonto sul Bosforo e cena a Karaköy"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Sultanahmet come sopra",
          "Giorno 2: Süleymaniye, Gran Bazar, Bazar delle Spezie, traghetto per Kadıköy",
          "Giorno 3: Galata, Beyoğlu, Chora (Kariye) e crociera sul Bosforo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Sultanahmet",
        "perChi": "chi ha poco tempo e vuole stare tra i monumenti",
        "testo": "Si va a piedi a quasi tutto. È turistico, con ristoranti cari e venditori insistenti; di sera si spegne presto."
      },
      {
        "nome": "Galata / Karaköy",
        "perChi": "chi vuole locali, caffè e vita serale",
        "testo": "Quartiere di moda, con hotel boutique e terrazze. Le salite sono ripide e di notte è rumoroso."
      },
      {
        "nome": "Beyoğlu / Taksim",
        "perChi": "chi vuole movida e collegamenti",
        "testo": "Il cuore della vita notturna, vicino a metro e tram. Rumoroso e meno curato."
      }
    ],
    sapori: [
      {
        "nome": "Balık ekmek",
        "testo": "Panino con pesce grigliato, sul ponte di Galata e a Eminönü."
      },
      {
        "nome": "Meze e rakı",
        "testo": "Piattini freddi e anice nelle meyhane di Beyoğlu."
      },
      {
        "nome": "Börek e simit",
        "testo": "Pasta sfoglia salata e anello di sesamo, per la colazione o la pausa."
      },
      {
        "nome": "Baklava e lokum",
        "testo": "Dolci con pistacchio e miele, da Karaköy Güllüoğlu e nelle pasticcerie storiche."
      }
    ],
    attenzioni: [
      "Truffa del conto gonfiato: chi invita a bere in un locale sconosciuto porta a un conto enorme, frequente a Taksim e Sultanahmet.",
      "Il lustrascarpe che lascia cadere la spazzola ti chiede poi una lucidatura a pagamento: non raccoglierla.",
      "Ristoranti di Sultanahmet senza prezzi esposti: chiedere il menu con i prezzi prima di sedersi.",
      "Taxi: usare il tassametro o BiTaksi e Uber; evitare i taxi fermi davanti ai monumenti."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Santa Sofia vista da nord-ovest, con la grande cupola e i quattro minareti',
    immagine: '/images/viaggi/turchia-itinerario/giorno-02-istanbul.jpg',
  },
  {
    slug: 'cappadocia',
    paeseSlug: 'turchia',
    ordine: 2,
    nome: 'Cappadocia',
    tipologia: ['paesaggio', 'trekking', 'storia'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un altopiano di tufo vulcanico che l\'erosione ha scolpito in camini delle fate, valli e pinnacoli, con chiese rupestri bizantine e città sotterranee.',
    percheAndarci:
      'Per le mongolfiere all\'alba, le chiese affrescate del museo all\'aperto di Göreme, le passeggiate nelle valli e le notti in un hotel scavato nella roccia.',
    cosaVedere: [
      'Il museo all\'aperto di Göreme e la Chiesa Oscura',
      'La cittadella di Uçhisar',
      'La Valle Rossa e la Valle Rosa al tramonto',
      'Paşabağ (valle dei Monaci) e la valle di Devrent',
      'Le città sotterranee di Derinkuyu e Kaymaklı',
      'La valle di Ihlara',
    ],
    cosaFare: [
      'Il volo in mongolfiera all\'alba',
      'Trekking nella Valle d\'Amore e nella Valle dei Piccioni',
      'Giro a cavallo o in quad al tramonto',
    ],
    doveDormire:
      'Göreme per comodità, Uçhisar e Ortahisar per la vista e la calma, Ürgüp per ristoranti e cantine. Economiche: pensioni di Göreme · fascia media: cave hotel di Göreme e Uçhisar · lusso: Argos in Cappadocia, Museum Hotel.',
    doveMangiare:
      'Testi kebab cotto nel vaso di terracotta, mantı (ravioli con yogurt), pide, i vini di Ürgüp e Uçhisar.',
    comeArrivare: 'Voli da Istanbul su Kayseri (ASR, 1 ora di transfer) o Nevşehir (NAV, 40 minuti); bus notturni da Istanbul (circa 10-11 ore).',
    comeSpostarsi: 'Auto a noleggio o tour giornalieri (Red Tour, Green Tour); i dolmuş collegano Göreme, Uçhisar, Avanos e Ürgüp.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre; d\'inverno c\'è la neve e il paesaggio è bellissimo, ma più voli in mongolfiera vengono annullati',
    costi:
      'Mongolfiera indicativamente 180-350 € a persona secondo stagione; museo all\'aperto di Göreme intorno ai 20-25 €; Derinkuyu intorno ai 15-20 €; Museum Pass Cappadocia intorno ai 45-50 € (indicativi).',
    erroriDaEvitare: [
      'Prenotare la mongolfiera per l\'ultima mattina: col vento i voli si annullano, e conviene avere almeno un giorno di riserva',
      'Scegliere l\'operatore solo in base al prezzo: contano la licenza e il numero di passeggeri per cesta',
      'Visitare il museo all\'aperto a mezzogiorno, quando arrivano tutti i gruppi',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Museo all'aperto di Göreme",
        "testo": "Un gruppo di chiese rupestri bizantine con affreschi dall'XI secolo, scavate in coni di roccia. La Chiesa Oscura (Karanlık) ha i colori meglio conservati.",
        "come": "Da Göreme a piedi o in navetta, circa un chilometro dal centro.",
        "quando": "All'apertura, prima dei gruppi organizzati.",
        "tempo": "1,5-2 ore",
        "url": "https://muze.gov.tr/",
        "consiglio": "La Chiesa Oscura ha un biglietto a parte, ma i colori valgono la spesa.",
        "costo": "20 € per i visitatori stranieri; Chiesa Oscura a parte (2026). Per il 2027 il ministero ha annunciato 22 €."
      },
      {
        "nome": "Mongolfiera all'alba",
        "testo": "Il volo sopra le valli e i camini delle fate al sorgere del sole è il motivo per cui molti vengono qui.",
        "come": "Si prenota con un operatore con licenza, con prelievo in hotel prima dell'alba.",
        "quando": "All'alba, tutto l'anno se il meteo lo permette. Con vento forte i voli si annullano, più spesso d'inverno.",
        "tempo": "1 ora in volo, 3-4 ore in tutto",
        "consiglio": "Prenotare per i primi giorni e tenerne uno di riserva: i voli saltano col vento."
      },
      {
        "nome": "Valle Rossa e Valle Rosa",
        "testo": "Sentieri tra rocce rosa e rosse con chiese scavate nella roccia, belle al tramonto.",
        "come": "Partenza a piedi da Göreme o in auto fino a un belvedere.",
        "quando": "Tramonto.",
        "tempo": "2-3 ore"
      },
      {
        "nome": "Derinkuyu e Kaymaklı",
        "testo": "Le città sotterranee su più piani, scavate dagli abitanti per proteggersi dagli attacchi. Si scende per corridoi stretti fino a decine di metri.",
        "come": "In auto o in tour da Göreme, circa 40 minuti.",
        "quando": "Mattina presto per evitare la folla nei corridoi.",
        "tempo": "1-1,5 ore",
        "url": "https://muze.gov.tr/",
        "consiglio": "Chi soffre di claustrofobia salti Derinkuyu e scelga Kaymaklı, un po' più larga.",
        "costo": "13 € ciascuna per i visitatori stranieri (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: mongolfiera, museo all'aperto di Göreme, Valle Rossa al tramonto",
          "Giorno 2: Derinkuyu, valle di Ihlara, Uçhisar"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1-2 come sopra",
          "Giorno 3: trekking nella Valle d'Amore e dei Piccioni, tramonto a Uçhisar"
        ]
      }
    ],
    zone: [
      {
        "nome": "Göreme",
        "perChi": "chi vuole stare vicino a tutto",
        "testo": "Hotel in grotta, ristoranti e partenze delle mongolfiere. Il più turistico."
      },
      {
        "nome": "Uçhisar",
        "perChi": "chi vuole vista e quiete",
        "testo": "Villaggio sotto il castello, hotel di charme con terrazza panoramica."
      },
      {
        "nome": "Ürgüp / Mustafapaşa",
        "perChi": "chi vuole un posto meno turistico",
        "testo": "Cittadine più tranquille, con ristoranti locali e vino."
      }
    ],
    sapori: [
      {
        "nome": "Testi kebab",
        "testo": "Carne e verdure cotte in un vaso di terracotta che si rompe al tavolo."
      },
      {
        "nome": "Mantı",
        "testo": "Ravioli piccoli con yogurt e burro speziato."
      },
      {
        "nome": "Vini della Cappadocia",
        "testo": "Rossi di Öküzgözü e bianchi di Emir, nelle cantine di Ürgüp e Uçhisar."
      },
      {
        "nome": "Pide",
        "testo": "Pizza turca a barca con formaggio o carne, nei forni locali."
      }
    ],
    attenzioni: [
      "Mongolfiera all'ultima mattina: col vento si annulla, quindi meglio averne una di riserva.",
      "Scegliere l'operatore per licenza e numero di passeggeri per cesta, non solo per il prezzo.",
      "Museo all'aperto a mezzogiorno: arrivano tutti i gruppi, meglio andare all'apertura.",
      "Noleggi di quad e cavalli: verificare condizioni dei mezzi e assicurazione prima di partire."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Mongolfiere sopra le valli di tufo del parco nazionale di Göreme, in Cappadocia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-06-cappadocia.jpg',
  },
  {
    slug: 'pamukkale',
    paeseSlug: 'turchia',
    ordine: 3,
    nome: 'Pamukkale e Hierapolis',
    tipologia: ['paesaggio', 'archeologia', 'terme'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'Una collina di terrazze di travertino bianco formate da sorgenti calde, con in cima le rovine della città romana di Hierapolis.',
    percheAndarci:
      'Per camminare a piedi nudi nelle vasche calcaree, per il teatro romano di Hierapolis e per la piscina antica di Cleopatra, con le colonne sommerse.',
    cosaVedere: [
      'Le terrazze di travertino',
      'Il teatro e la necropoli di Hierapolis',
      'La piscina antica (Antique Pool), con ingresso a parte',
      'Il martyrion di San Filippo',
    ],
    cosaFare: ['Salire a piedi nudi dal basso al tramonto', 'Un bagno nella piscina antica'],
    doveDormire: 'Il villaggio di Pamukkale, ai piedi delle terrazze, con pensioni e piccoli hotel con piscina termale.',
    comeArrivare: 'Aeroporto di Denizli Çardak, poi 1 ora di strada; bus da Göreme (notturno, circa 9-10 ore), da Selçuk (3 ore) e da Antalya (4 ore).',
    comeSpostarsi: 'A piedi; dolmuş per Denizli.',
    periodoMigliore: 'primavera e autunno; d\'estate le terrazze bianche abbagliano e scottano',
    costi: 'Ingresso Pamukkale-Hierapolis intorno ai 30 €; piscina antica a parte, intorno ai 10-15 € (indicativi).',
    erroriDaEvitare: [
      'Salire a mezzogiorno d\'estate: il riflesso del bianco è accecante',
      'Aspettarsi tutte le vasche piene: molte vengono lasciate asciutte a rotazione per preservare il travertino',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Terrazze di travertino",
        "testo": "Le vasche bianche di calcare lungo il pendio, riempite dalle sorgenti calde. Si sale a piedi nudi, perché le scarpe non sono ammesse sul travertino.",
        "come": "Ingresso dal sud o dal nord del sito; bus o auto fino al parcheggio.",
        "quando": "Tramonto, con la luce sul bianco. A mezzogiorno d'estate abbaglia.",
        "tempo": "1-2 ore",
        "url": "https://muze.gov.tr/",
        "consiglio": "Portare un telo e un costume: molte vasche sono chiuse a rotazione.",
        "costo": "30 € per Hierapolis e travertini, biglietto unico (2026). Per il 2027 annunciati 35 €."
      },
      {
        "nome": "Hierapolis e Piscina Antica",
        "testo": "Le rovine della città romana sopra le terrazze: il teatro, la necropoli, il martyrion di San Filippo e la piscina di acqua calda con colonne antiche sul fondo.",
        "come": "Si cammina nel sito. La piscina ha biglietto a parte.",
        "quando": "Mattina presto o fine pomeriggio.",
        "tempo": "2 ore",
        "url": "https://muze.gov.tr/",
        "costo": "Compreso nel biglietto delle terrazze; Piscina Antica a parte"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Hierapolis, teatro e necropoli",
          "Piscina Antica",
          "Pomeriggio: salita sulle terrazze",
          "Tramonto sul travertino"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pamukkale paese",
        "perChi": "chi vuole stare sotto le terrazze",
        "testo": "Pensioni a conduzione familiare, piscine termali e ristoranti semplici."
      },
      {
        "nome": "Karahayıt",
        "perChi": "chi vuole bagni termali",
        "testo": "Villaggio vicino con terme e acque rosse ricche di ferro."
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Sfoglia sottile ripiena di formaggio o spinaci, cotta al momento."
      },
      {
        "nome": "Kebab di Denizli",
        "testo": "Carne cotta alla brace con insalata e pane caldo."
      },
      {
        "nome": "Ayran",
        "testo": "Yogurt liquido salato, per il caldo."
      },
      {
        "nome": "Tè turco",
        "testo": "Nel bicchiere a tulipano, ovunque."
      }
    ],
    attenzioni: [
      "Salire a mezzogiorno d'estate: il riflesso del bianco è accecante e il calore scotta.",
      "Aspettarsi tutte le vasche piene: molte sono lasciate asciutte a rotazione per proteggere il travertino.",
      "Le terrazze si salgono a piedi nudi: portare calze per i tratti caldi."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Le vasche di travertino bianco di Pamukkale piene d\'acqua azzurra',
    immagine: '/images/viaggi/turchia-itinerario/giorno-08-pamukkale.jpg',
  },
  {
    slug: 'efeso',
    paeseSlug: 'turchia',
    ordine: 4,
    nome: 'Efeso, Selçuk e Şirince',
    tipologia: ['archeologia', 'borghi'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città romana meglio conservata del Mediterraneo orientale, con la biblioteca di Celso e il grande teatro, a pochi chilometri dalla cittadina di Selçuk e dal villaggio collinare di Şirince.',
    percheAndarci:
      'Per percorrere la via dei Cureti fino alla biblioteca di Celso, vedere gli affreschi e i mosaici delle case a terrazza e passare una sera fra le case greche di Şirince.',
    cosaVedere: [
      'La biblioteca di Celso e il grande teatro di Efeso',
      'Le case a terrazza, con biglietto a parte',
      'La basilica di San Giovanni e il castello di Selçuk',
      'Il museo di Efeso a Selçuk',
      'La casa della Madonna (Meryem Ana Evi)',
      'Afrodisia, sulla strada da Pamukkale',
    ],
    cosaFare: ['Entrare dalla porta alta e scendere verso la biblioteca', 'Assaggiare i vini di frutta a Şirince'],
    doveDormire: 'Selçuk per comodità e prezzi, Şirince per la calma; Kuşadası per chi vuole il mare vicino.',
    comeArrivare: 'Aeroporto di Izmir (1 ora); treno Izmir-Selçuk; bus da Pamukkale.',
    comeSpostarsi: 'Taxi o dolmuş da Selçuk all\'ingresso alto di Efeso (pochi km); auto a noleggio.',
    periodoMigliore: 'aprile-giugno e settembre-ottobre, sempre all\'apertura',
    costi: 'Efeso intorno ai 40 €, case a terrazza intorno ai 15 € (indicativi, in euro).',
    erroriDaEvitare: [
      'Entrare a metà mattina in alta stagione, quando arrivano i passeggeri delle navi da crociera di Kuşadası',
      'Saltare le case a terrazza per risparmiare: sono la parte più bella del sito',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Efeso",
        "testo": "La grande città greco-romana con la biblioteca di Celso, il teatro da circa 25.000 posti, la via dei Cureti e le Case a terrazza con mosaici e affreschi.",
        "come": "Da Selçuk 3 km, in taxi o dolmuş; l'ingresso alto evita la salita.",
        "quando": "All'apertura, soprattutto quando arrivano le navi da crociera da Kuşadası.",
        "tempo": "2-3 ore",
        "url": "https://muze.gov.tr/",
        "consiglio": "Le Case a terrazza hanno un biglietto a parte e sono la parte più bella del sito.",
        "costo": "40 € con il museo esperienziale di Efeso; Case a terrazza a parte. Cumulativo con Case a terrazza, museo di Efeso e San Giovanni 65 € (2026)."
      },
      {
        "nome": "Basilica di San Giovanni e castello di Selçuk",
        "testo": "La basilica del VI secolo sopra la tomba tradizionale dell'apostolo, con il castello sulla collina.",
        "come": "A piedi da Selçuk.",
        "quando": "Mattina.",
        "tempo": "1 ora",
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "Casa della Madonna (Meryem Ana)",
        "testo": "Il santuario sulle colline sopra Efeso dove, secondo la tradizione, visse la Madonna.",
        "come": "In taxi o con un tour da Selçuk.",
        "quando": "Mattina.",
        "tempo": "45 minuti"
      },
      {
        "nome": "Şirince",
        "testo": "Piccolo villaggio di case di pietra in collina, con vini di frutta e botteghe.",
        "come": "Dolmuş o taxi da Selçuk, 8 km.",
        "quando": "Pomeriggio.",
        "tempo": "1-2 ore",
        "consiglio": "Assaggiare i vini di frutta prima di comprare."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Efeso all'apertura e Case a terrazza",
          "Pranzo a Selçuk",
          "Pomeriggio: basilica di San Giovanni",
          "Sera: Şirince"
        ]
      }
    ],
    zone: [
      {
        "nome": "Selçuk",
        "perChi": "chi vuole stare vicino a Efeso",
        "testo": "Cittadina con pensioni familiari, ristoranti e mercato."
      },
      {
        "nome": "Şirince",
        "perChi": "chi vuole atmosfera di villaggio",
        "testo": "Case di pietra e vigneti, più tranquillo ma isolato e con pochi servizi."
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Sfoglia ripiena, nelle bancarelle del mercato."
      },
      {
        "nome": "Köfte",
        "testo": "Polpette alla brace con pane e insalata."
      },
      {
        "nome": "Vini di frutta di Şirince",
        "testo": "Di melograno, pesca e mora, nelle botteghe del villaggio."
      },
      {
        "nome": "Zeytinyağlı",
        "testo": "Verdure all'olio, antipasto freddo tipico dell'Egeo."
      }
    ],
    attenzioni: [
      "Entrare a metà mattina in alta stagione significa trovare le navi da crociera: meglio all'apertura.",
      "Saltare le Case a terrazza per risparmiare è un errore: sono la parte più bella.",
      "Guide sul posto: concordare prezzo e durata prima di iniziare."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Le gradinate in pietra dell\'antico stadio di Efeso',
    immagine: '/images/viaggi/turchia-itinerario/giorno-10-efeso.jpg',
  },
  {
    slug: 'costa-licia',
    paeseSlug: 'turchia',
    ordine: 5,
    nome: 'Costa licia: Fethiye, Ölüdeniz, Kaş e Kekova',
    tipologia: ['mare', 'trekking', 'road trip'],
    giorniConsigliati: '4-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il tratto di costa fra Fethiye e Antalya, con calette di acqua turchese, tombe licie scavate nella roccia, il sentiero della Via Licia e le rovine sommerse di Kekova.',
    percheAndarci:
      'Per il mare più bello della Turchia, le spiagge di Ölüdeniz e Kaputaş, la sabbia di Patara, la gola di Saklıkent e le uscite in barca fra le isole.',
    cosaVedere: [
      'La laguna di Ölüdeniz e la Valle delle Farfalle',
      'Il villaggio abbandonato di Kayaköy',
      'La gola di Saklıkent',
      'Le rovine e la spiaggia di Patara',
      'La spiaggia di Kaputaş',
      'Le rovine sommerse di Kekova e il castello di Kaleköy (Simena)',
    ],
    cosaFare: [
      'Parapendio dal Babadağ su Ölüdeniz',
      'Una tappa della Via Licia',
      'Kayak o barca sopra la città sommersa di Kekova',
      'Immersioni e snorkeling a Kaş',
    ],
    doveDormire:
      'Fethiye o Ölüdeniz per la prima base, Kaş per la seconda (la più bella e vivace). Economiche: pensioni di Kaş · fascia media: hotel con vista mare · lusso: resort di Ölüdeniz e Kalkan.',
    doveMangiare: 'Pesce scelto al mercato di Fethiye e cucinato nei ristoranti intorno, gözleme nei villaggi, meze nelle taverne di Kaş.',
    comeArrivare: 'Aeroporti di Dalaman (per Fethiye) e Antalya (per Kaş e Kekova).',
    comeSpostarsi: 'Auto a noleggio; dolmuş tra le località principali; barche dal porto per le isole.',
    periodoMigliore: 'maggio-giugno e settembre-ottobre; luglio-agosto sono molto caldi e affollati',
    costi:
      'Gita in barca con pranzo indicativamente 25-45 €; parapendio intorno ai 100-150 €; Patara e Saklıkent intorno ai 5-15 € ciascuno (indicativi).',
    erroriDaEvitare: [
      'Girare la costa senza auto: fra un paese e l\'altro i dolmuş ci sono, ma le calette migliori restano fuori',
      'Andarci ad agosto senza prenotare: Kaş e Ölüdeniz si riempiono',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Ölüdeniz e la Valle delle Farfalle",
        "testo": "La laguna turchese, una delle spiagge più fotografate della Turchia. Poco più in là, la Valle delle Farfalle, raggiungibile in barca.",
        "come": "Dolmuş da Fethiye, circa 20 minuti.",
        "quando": "Mattina, prima dell'afflusso dei bagnanti.",
        "tempo": "Mezza giornata",
        "consiglio": "Il parapendio dal Babadağ è la cosa più famosa da fare qui."
      },
      {
        "nome": "Kayaköy",
        "testo": "Un villaggio greco abbandonato negli anni Venti, con centinaia di case di pietra in rovina sul pendio.",
        "come": "Dolmuş da Fethiye, 8 km.",
        "quando": "Mattina o pomeriggio, con luce bassa.",
        "tempo": "1-1,5 ore"
      },
      {
        "nome": "Saklıkent",
        "testo": "Una gola profonda dove si cammina nell'acqua gelata tra pareti di roccia.",
        "come": "In auto da Fethiye, circa un'ora.",
        "quando": "Estate, quando fa caldo.",
        "tempo": "2-3 ore",
        "consiglio": "Noleggiare scarpe adatte all'acqua sul posto."
      },
      {
        "nome": "Kekova e Simena",
        "testo": "Un tratto di mare con le rovine licie sommerse e il villaggio di Kaleköy sotto un castello.",
        "come": "Gita in barca o in kayak da Üçağız o da Kaş.",
        "quando": "Mattina, con l'acqua più chiara.",
        "tempo": "Mezza giornata",
        "consiglio": "Meglio il kayak all'alba per vedere le rovine sott'acqua senza barche."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Fethiye e Ölüdeniz",
          "Giorno 2: Kayaköy, Saklıkent e Patara",
          "Giorno 3: Kaş e Kekova"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fethiye",
        "perChi": "chi vuole una base con servizi",
        "testo": "Città con porto, mercato del pesce e dolmuş per tutta la costa."
      },
      {
        "nome": "Ölüdeniz",
        "perChi": "chi vuole spiaggia e parapendio",
        "testo": "Turistico, con hotel e locali fino a notte."
      },
      {
        "nome": "Kaş",
        "perChi": "chi vuole un paese di mare tranquillo",
        "testo": "Caffè e taverne sul porto, immersioni e gite a Kekova."
      }
    ],
    sapori: [
      {
        "nome": "Pesce al mercato di Fethiye",
        "testo": "Si sceglie al banco e lo cuociono i ristoranti vicini."
      },
      {
        "nome": "Gözleme",
        "testo": "Sfoglia sottile ripiena, nei villaggi."
      },
      {
        "nome": "Meze di Kaş",
        "testo": "Piatti freddi di verdure e formaggi, nelle taverne del porto."
      },
      {
        "nome": "Ayran",
        "testo": "Yogurt liquido salato."
      }
    ],
    attenzioni: [
      "Girare la costa senza auto: i dolmuş ci sono, ma le calette migliori restano fuori.",
      "Agosto senza prenotare: Kaş e Ölüdeniz si riempiono.",
      "Le gite in barca vendute in strada variano molto: guardare cosa include il prezzo.",
      "Parapendio: scegliere un operatore con licenza."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Panorama di Kaş con il porto, le case bianche e il mare della costa licia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-13-costa-licia.jpg',
  },
  {
    slug: 'antalya',
    paeseSlug: 'turchia',
    ordine: 6,
    nome: 'Antalya',
    tipologia: ['città', 'mare', 'archeologia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La grande città della costa mediterranea, con il centro storico di Kaleiçi intorno al porto romano e un museo archeologico tra i migliori del Paese.',
    percheAndarci: 'Per chiudere il viaggio vicino all\'aeroporto, con Kaleiçi, il museo e le cascate di Düden; nei dintorni ci sono Perge, Aspendos e Termessos.',
    cosaVedere: ['Kaleiçi e la porta di Adriano', 'Il Museo archeologico di Antalya', 'Le cascate di Düden', 'Il teatro di Aspendos e Perge'],
    cosaFare: ['Un bagno a Konyaaltı', 'La sera al porto vecchio'],
    doveDormire: 'Nelle case ottomane restaurate di Kaleiçi.',
    comeArrivare: 'Aeroporto di Antalya (AYT), con voli diretti dall\'Italia in stagione e da Istanbul tutto l\'anno.',
    comeSpostarsi: 'Tram e taxi in città; auto per i siti dei dintorni.',
    periodoMigliore: 'da aprile a novembre',
    costi: 'Museo archeologico e Aspendos intorno ai 15-20 € ciascuno (indicativi).',
    erroriDaEvitare: ['Restituire l\'auto a noleggio in un\'altra città senza aver controllato la tassa di sola andata'],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kaleiçi",
        "testo": "Il centro storico dentro le mura, con case ottomane, la porta di Adriano e il porto vecchio. Di sera è pieno di ristoranti.",
        "come": "A piedi dalla piazza dell'orologio.",
        "quando": "Pomeriggio e sera.",
        "tempo": "2 ore"
      },
      {
        "nome": "Museo archeologico di Antalya",
        "testo": "Uno dei migliori della Turchia, con statue romane da Perge e sarcofagi licii.",
        "come": "Tram fino alla fermata Müze.",
        "quando": "Mattina.",
        "tempo": "1,5-2 ore",
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "Aspendos e Perge",
        "testo": "Il teatro di Aspendos, del II secolo, è tra i meglio conservati dell'antichità: la cavea e la scena sono quasi intatte e d'estate ospita ancora spettacoli. Perge, sulla strada, ha lo stadio, le terme e una lunga strada colonnata con il canale d'acqua al centro.",
        "come": "In auto con autista o in tour, circa 45 minuti.",
        "quando": "Mattina presto.",
        "tempo": "Mezza giornata ciascuno",
        "url": "https://muze.gov.tr/",
        "consiglio": "Aspendos è la tappa da non saltare.",
        "costo": "Aspendos 15 €, Perge 11 € per i visitatori stranieri (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: museo archeologico",
          "Passeggiata a Kaleiçi",
          "Pomeriggio: bagno a Konyaaltı",
          "Sera: porto vecchio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Kaleiçi",
        "perChi": "chi vuole la città vecchia",
        "testo": "Hotel in case ottomane, rumore la sera dai locali."
      },
      {
        "nome": "Konyaaltı",
        "perChi": "chi vuole spiaggia",
        "testo": "Zona moderna con spiaggia di ciottoli e montagne sullo sfondo."
      }
    ],
    sapori: [
      {
        "nome": "Piyaz",
        "testo": "Insalata di fagioli bianchi con uova e tahin, specialità di Antalya."
      },
      {
        "nome": "Şiş köfte",
        "testo": "Polpette alla brace con pane."
      },
      {
        "nome": "Tahin-pekmez",
        "testo": "Colazione dolce con crema di sesamo e mosto."
      },
      {
        "nome": "Frutta fresca",
        "testo": "Arance e melograni dal mercato."
      }
    ],
    attenzioni: [
      "Noleggio auto con restituzione in un'altra città: controllare la tassa di sola andata.",
      "Hotel all-inclusive lontani dal centro: a volte il trasferimento costa quanto la differenza.",
      "In estate fa molto caldo: visite all'alba."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Vista di Kaleiçi, il centro storico di Antalya affacciato sul mare',
    immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg',
  },
]
