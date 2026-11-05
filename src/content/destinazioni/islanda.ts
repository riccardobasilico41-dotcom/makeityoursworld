import type { Destinazione } from '@/lib/types'

// Contenuto riutilizzato dal viaggio "Islanda in tenda: 9 giorni sull'isola del
// ghiaccio e del fuoco" (src/content/viaggi/02-islanda-2024.md).
// Dove un dato non è nel diario originale, il campo resta vuoto o con una nota
// esplicita "da confermare/da completare" — nessun fatto inventato.
//
// Le immagini sono foto stock temporanee (Pixabay/Pexels, licenze free-use),
// scelte per rappresentare davvero il luogo in attesa delle foto reali del
// viaggio — vanno sostituite non appena disponibili gli scatti originali.

export const destinazioniIslanda: Destinazione[] = [
  {
    slug: 'keflavik',
    paeseSlug: 'islanda',
    ordine: 1,
    nome: 'Keflavík',
    tipologia: ['cultura'],
    giorniConsigliati: '1 notte, all\'arrivo',
    visitataPersonalmente: true,
    introduzione: 'Il primo snodo del viaggio: qui siamo atterrati, abbiamo dormito la prima notte in hotel (l\'unica insieme a Reykjavík) e il giorno dopo abbiamo ritirato auto e tenda.',
    percheAndarci: 'È il punto di partenza obbligato, a pochi minuti dalla penisola di Reykjanes, una zona vulcanica attiva.',
    cosaVedere: ['Il centro di Keflavík', 'La penisola di Reykjanes'],
    cosaFare: [
      'Cena da Kaffi Duus e giro serale in centro',
      'Escursione al vulcano in eruzione sulla penisola di Reykjanes (vedi la scheda esperienza dedicata; ci sono andato in autonomia, senza tour, e il giorno esatto non me lo sono segnato)',
    ],
    doveDormire:
      'Ho dormito al Konvin Hotel, uno degli hotel più grandi della zona aeroporto: comodo per la navetta, con una colazione abbondante. Le recensioni online (circa 3/5 su quasi 940 recensioni Tripadvisor) lo danno nella media per uno scalo di una notte: chi lo sceglie per la vicinanza all\'aeroporto lo trova pratico e il personale gentile, altri segnalano stanze fredde o bagni non impeccabili. Niente di speciale, ma per la prima notte funziona.\n\nAlternative a Keflavík/Reykjanesbær. Economiche: guesthouse e piccoli B&B della zona · fascia media (qui rientra il Konvin Hotel): altri hotel vicino all\'aeroporto con navetta inclusa · più curate: hotel boutique in centro a Reykjavík (~45 min di auto), per chi alla prima o all\'ultima notte rinuncia volentieri alla comodità dell\'aeroporto.',
    doveMangiare: 'Kaffi Duus (bus 55 + pochi minuti a piedi): pesce misto, circa 30€ a persona.',
    comeArrivare: 'Volo su Keflavík; bus 55 (circa 20 minuti, fermata Kellir, 4€ a persona) fino in centro.',
    comeSpostarsi: 'Bus 55 il primo giorno; auto a noleggio dal giorno dopo (ritiro da Sixt Rent a Car in aeroporto).',
    periodoMigliore: 'quello di tutto il giro: l\'estate, se si gira l\'isola in tenda',
    costi: 'Bus 55: 4€ a persona a tratta.',
    erroriDaEvitare: ['L\'ultima corsa del bus 55 parte poco dopo le 23: da non perdere per rientrare in hotel'],
    miaEsperienza:
      'Keflavík è stata una tappa breve, ma è legata a uno dei ricordi più forti dell\'Islanda: durante il viaggio, sulla penisola di Reykjanes, a pochi minuti da qui, ho visto da vicino un vulcano in eruzione, andandoci in autonomia, senza tour. Il giorno esatto non me lo sono segnato.',
    luoghi: [
      {
        nome: "Penisola di Reykjanes e area vulcanica",
        testo: "La punta sud-ovest dell'isola, a pochi minuti dall'aeroporto: campi di lava, crateri e fumarole su una dorsale tra due placche tettoniche. Dal 2021 la zona ha avuto una serie di eruzioni, e i sentieri e le aree accessibili cambiano di volta in volta.",
        come: "In auto da Keflavík. Prima di partire controllare lo stato dei sentieri e delle chiusure sui siti ufficiali; con un'eruzione in corso si va solo dove le autorità lo consentono.",
        quando: "Con cielo sereno e vento calmo; d'estate la luce lunga permette di arrivare anche la sera.",
        tempo: "mezza giornata",
        url: "https://safetravel.is",
        consiglio: "Ci sono andato in autonomia, senza tour: prima di partire guardare sempre gas, vento e chiusure."
      },
      {
        nome: "Ponte tra i continenti (Midlina)",
        testo: "Un piccolo ponte pedonale sulla faglia tra la placca nordamericana e quella eurasiatica, a Sandvík. È un attraversamento simbolico, comodo per una sosta di mezz'ora tra aeroporto e Reykjanes.",
        come: "In auto, circa 15 minuti da Keflavík; parcheggio gratuito vicino al ponte.",
        quando: "Qualsiasi ora; è all'aperto e sempre accessibile.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Si abbina bene al faro di Reykjanesviti e alla zona geotermica di Gunnuhver."
      },
      {
        nome: "Centro di Keflavík e lungomare",
        testo: "Una cittadina portuale tranquilla, con il lungomare, la costa rocciosa e il museo del Rock'n'Roll d'Islanda. Per chi arriva la sera è il posto dove cenare senza spostarsi.",
        come: "A piedi dal centro o con il bus 55 dall'aeroporto (circa 20 minuti).",
        quando: "Al tramonto, in estate molto tardi.",
        tempo: "1-2 ore",
        consiglio: "Ultima corsa del bus 55 poco dopo le 23: tenerne conto per rientrare."
      }
    ],
    sapori: [
      {
        nome: "Pesce misto",
        testo: "Merluzzo, eglefino e salmerino alla piastra o in zuppa sono la base dei locali del porto; a Kaffi Duus è quello che abbiamo mangiato."
      },
      {
        nome: "Skyr",
        testo: "Latticino denso simile allo yogurt, in vendita in ogni supermercato: colazione economica e proteica."
      },
      {
        nome: "Hot dog islandese (pylsur)",
        testo: "Salsiccia di agnello con cipolla cruda e fritta e salse; si trova nelle stazioni di servizio e nei chioschi, a poco prezzo."
      }
    ],
    attenzioni: [
      "Vulcano e gas: durante le eruzioni seguire solo le indicazioni ufficiali (safetravel.is, vedur.is) e non avvicinarsi alle colate.",
      "Con il noleggio d'auto controllare le coperture per sabbia, cenere e ghiaia, spesso escluse dall'assicurazione base.",
      "Fare il pieno prima di lasciare la zona di Reykjavík: nell'Est e nel Nord le pompe sono rare e spesso senza personale."
    ],
    esperienzeSlugs: ['vulcano-reykjanes'],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Colata di lava incandescente durante un\'eruzione notturna sulla penisola di Reykjanes, vicino Keflavík',
    immagine: '/images/islanda/keflavik-stock.jpg',
  },
  {
    slug: 'vik',
    paeseSlug: 'islanda',
    ordine: 2,
    nome: 'Vík',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 notte, dopo una giornata piena di cascate',
    visitataPersonalmente: true,
    introduzione: 'La prima notte in tenda del viaggio, dopo una giornata passata fra il Golden Circle e le cascate più fotografate del sud dell\'Islanda.',
    percheAndarci: 'È la base per una delle notti che ricordo meglio del viaggio: il relitto dell\'aereo di Sólheimasandur, raggiunto a piedi a mezzanotte, con la luce di fine luglio, che a mezzanotte non cala mai del tutto.',
    cosaVedere: ['Geysir e Gullfoss (Golden Circle)', 'Seljalandsfoss e Gljúfrabúi', 'Skógafoss', 'Relitto dell\'aereo DC-3 a Sólheimasandur'],
    cosaFare: [
      'Golden Circle: Geysir (eruzioni ogni 6-7 minuti) e Gullfoss, la «cascata dorata» a due salti',
      'Seljalandsfoss, passando dietro la cascata, e la vicina Gljúfrabúi passando dentro il fiume',
      'Skógafoss e la salita dei circa 470 scalini del sentiero panoramico',
      'Escursione notturna al relitto dell\'aereo: circa 20 minuti d\'auto da Vík fino al parcheggio sulla Ring Road, poi 4 km (40-60 minuti) a piedi su sabbia nera piatta ed esposta al vento, andata e ritorno',
    ],
    doveDormire:
      'Ho dormito al campeggio di Vík (1.950 ISK + doccia 300 ISK): elettricità, docce, cucina comune. È in pratica l\'unica grande struttura della zona, comoda e ben servita, anche se nelle recensioni più recenti c\'è chi si lamenta del sovraffollamento in alta stagione.\n\nAlternative a Vík. Economiche: The Barn (uno dei migliori hostel d\'Islanda), Farmhouse Lodge Guesthouse · fascia media: Hotel Kría, design nordico sulla via principale · più curate: Hótel Vík í Mýrdal.',
    doveMangiare: 'Pranzo al sacco o nei dintorni delle cascate; cena al campeggio.',
    comeArrivare: 'Da Keflavík, con soste al Golden Circle e alle cascate del sud lungo il tragitto.',
    comeSpostarsi: 'Auto a noleggio (ritirata la mattina a Keflavík insieme alla tenda).',
    periodoMigliore: 'fine luglio, per la luce che a mezzanotte non cala mai del tutto e rende possibile l\'escursione notturna al relitto',
    costi: 'Campeggio 1.950 ISK + doccia 300 ISK; parcheggio a Seljalandsfoss 700 ISK.',
    erroriDaEvitare: [
      'Dopo una giornata già piena il relitto dell\'aereo è una bella sfacchinata: meglio valutare le energie prima di partire a mezzanotte',
      'Portare torcia o power bank per il telefono: quattro chilometri di sabbia nera piatta e senza punti di riferimento',
    ],
    miaEsperienza:
      'A fine luglio a mezzanotte c\'era ancora luce, così dopo cena ho deciso all\'ultimo di non andare a dormire e di raggiungere il relitto a piedi. Dopo una giornata già piena è stata una sfacchinata, ma è probabilmente il momento più assurdo del viaggio, e quello che ricordo meglio.',
    luoghi: [
      {
        nome: "Þingvellir",
        testo: "Parco nazionale e sito UNESCO nella spaccatura tra due placche tettoniche, dove nel 930 si riunì il primo parlamento islandese. Si cammina tra pareti di basalto e il lago, con la faglia Almannagjá come passaggio.",
        come: "In auto da Reykjavík (circa 45-50 minuti) o da Keflavík. Sentieri segnati dal centro visitatori, senza guida necessaria.",
        quando: "Mattina presto o sera, per evitare i pullman; d'estate aperto a tutte le ore.",
        tempo: "1-2 ore",
        costo: "sentieri liberi; parcheggio a pagamento, circa 1.000 ISK per auto (2025)",
        url: "https://www.thingvellir.is",
        consiglio: "Parcheggio e centro visitatori sono a pagamento: controllare le tariffe aggiornate sul sito ufficiale."
      },
      {
        nome: "Geysir e Strokkur",
        testo: "Zona geotermica sul Golden Circle. Il Geysir storico è quasi inattivo, ma lo Strokkur erutta a getti alti 15-20 metri ogni pochi minuti.",
        come: "Sosta dalla strada, ingresso libero al campo geotermico; i sentieri sono corti.",
        quando: "Con il vento che porta il vapore lontano dal pubblico; sempre aperto.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        consiglio: "Stare sopravvento e a distanza dalle pozze: l'acqua è a quasi 100 gradi."
      },
      {
        nome: "Gullfoss",
        testo: "La «cascata dorata»: due salti (circa 11 e 21 metri) in una gola stretta del fiume Hvítá. Una passerella porta fino al bordo, nel vapore.",
        come: "Parcheggio vicino; due livelli di sentieri, quello basso porta al bordo e spesso è chiuso in inverno per il ghiaccio.",
        quando: "Prima mattina o sera, con la luce radente.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        consiglio: "Impermeabile addosso: lo spruzzo arriva fino ai percorsi."
      },
      {
        nome: "Seljalandsfoss e Gljúfrabúi",
        testo: "Seljalandsfoss cade per 60 metri e si può aggirare con un sentiero scivoloso che passa dietro il getto. A 500 metri, nascosta in una fessura, c'è Gljúfrabúi, che si vede entrando nel fiume.",
        come: "Parcheggio a pagamento (700 ISK quando ci sono stato); percorso breve su sentiero fangoso.",
        quando: "Sera d'estate, con il sole che colpisce la caduta da ovest.",
        tempo: "1 ora",
        costo: "parcheggio circa 900-1.000 ISK per auto (2025)",
        consiglio: "Scarpe impermeabili per entrare nella gola di Gljúfrabúi."
      },
      {
        nome: "Skógafoss",
        testo: "Cascata larga 25 metri e alta 60, sul bordo della scogliera vecchia della costa. Una scala laterale sale in cima e continua verso il sentiero di Fimmvörðuháls.",
        come: "Parcheggio ai piedi; il campeggio accanto è comodo per la sera.",
        quando: "Pomeriggio, per l'arcobaleno quando c'è sole.",
        tempo: "45 minuti",
        costo: "ingresso libero; parcheggio a pagamento, circa 1.000 ISK (2025, app Parka)",
        consiglio: "Salire dalla scala di legno per la vista dall'alto: dalla piattaforma si vede anche la costa."
      },
      {
        nome: "Relitto del DC-3 a Sólheimasandur",
        testo: "Un aereo militare americano caduto nel 1973 su una pianura di sabbia nera. L'area è spoglia e battuta dal vento; da qualche anno non si arriva più con l'auto.",
        come: "Parcheggio sulla Ring Road e 4 km a piedi a tratta (40-60 minuti) su sabbia piatta. Niente guida necessaria.",
        quando: "Tardi in estate, quando il sole sfiora l'orizzonte; di notte serve una torcia.",
        tempo: "2-3 ore andata e ritorno",
        consiglio: "Ci siamo andati a mezzanotte con la luce di fine luglio: portare acqua e un power bank, il percorso non ha punti di riferimento."
      }
    ],
    sapori: [
      {
        nome: "Kjötsúpa",
        testo: "Zuppa di agnello con radici, tipica dei giorni di vento: la si trova ai chioschi delle cascate e nei bar delle stazioni di servizio."
      },
      {
        nome: "Pane di segale (rúgbrauð)",
        testo: "Pane scuro e dolce cotto sottoterra dal calore geotermico, servito con burro e trota affumicata a Laugarvatn."
      },
      {
        nome: "Pranzo al sacco",
        testo: "In Islanda i supermercati Bónus e Krónan sono i più economici: spesa e cucina in campeggio per dimezzare i costi."
      }
    ],
    attenzioni: [
      "A Reynisfjara e sulle altre spiagge nere le onde anomale (sneaker waves) arrivano senza preavviso: non voltare le spalle al mare.",
      "Le strade F e i guadi senza ponte richiedono un 4x4 e di solito non sono coperti dall'assicurazione base del noleggio.",
      "Il campeggio libero con la tenda è molto limitato: usare i campeggi (costi bassi, servizi puliti) e rispettare i cartelli.",
      "Fuori dalla zona di Reykjavík molte pompe di benzina sono automatiche: avere carta con PIN."
    ],
    esperienzeSlugs: ['relitto-aereo-solheimasandur', 'golden-circle'],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Relitto dell\'aereo DC-3 abbandonato sulla sabbia nera di Sólheimasandur, Islanda',
    immagine: '/images/islanda/vik-stock.jpg',
  },
  {
    slug: 'skaftafell-jokulsarlon',
    paeseSlug: 'islanda',
    ordine: 3,
    nome: 'Skaftafell e Jökulsárlón',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: 'una giornata piena, senza pernottamento',
    visitataPersonalmente: true,
    introduzione: 'Il cuore ghiacciato del Parco Nazionale del Vatnajökull, il più grande d\'Europa. Nella stessa giornata: trekking sul ghiacciaio, kayak tra gli iceberg e Diamond Beach.',
    percheAndarci: 'Probabilmente è la giornata più piena del viaggio: il ghiacciaio a piedi, il kayak tra gli iceberg e, prima ancora, due spiagge nere e un canyon.',
    cosaVedere: [
      'Dyrhólaey (faro e arco di lava nera) e Reynisfjara (spiaggia di colonne di basalto)',
      'Fjaðrárgljúfur, canyon di circa 100 metri di profondità',
      'Svartifoss, la cascata nera di Skaftafell',
      'Laguna di Jökulsárlón e Diamond Beach',
    ],
    cosaFare: [
      'Trekking guidato sul ghiacciaio Vatnajökull, con ramponi e piccozza (vedi la scheda esperienza dedicata)',
      'Kayak tra gli iceberg della laguna di Jökulsárlón (vedi la scheda esperienza dedicata)',
      'Passeggiata a Reynisfjara (attenzione alle onde, imprevedibili e pericolose) e Dyrhólaey',
      'Passeggiata fotografica a Fjaðrárgljúfur, molto meno affollato di altri siti della zona',
    ],
    doveDormire: 'Non ho pernottato qui: si dorme a Höfn, circa un\'ora più avanti sulla Ring Road.',
    doveMangiare: 'Pranzo veloce a Reynisfjara (baracchino hot dog/zuppa, 2-3.000 ISK).',
    comeArrivare: 'Da Vík, lungo la Ring Road, con soste a Dyrhólaey, Reynisfjara e Fjaðrárgljúfur.',
    comeSpostarsi: 'Auto a noleggio; l\'area di Skaftafell si esplora solo a piedi.',
    periodoMigliore: 'estate, per le migliori condizioni di accesso al ghiacciaio',
    costi: 'i prezzi del trekking sul ghiacciaio e del kayak non me li sono segnati: conviene controllarli sui siti degli operatori al momento di prenotare',
    erroriDaEvitare: ['A Reynisfjara seguire sempre le indicazioni di sicurezza: le onde sono imprevedibili'],
    miaEsperienza:
      'Il trekking sul ghiacciaio e il kayak tra gli iceberg sono state due delle esperienze più intense del viaggio. Il trekking l\'ho fatto con Troll Expeditions; l\'operatore del kayak, le durate e i prezzi esatti non li ho annotati.',
    luoghi: [
      {
        nome: "Dyrhólaey",
        testo: "Promontorio con un arco di lava nera nel mare e un faro, molto bello per la vista sulla costa del sud. In primavera parte dell'area chiude per la nidificazione degli uccelli, e fra maggio e agosto si vedono i pulcinella di mare.",
        come: "In auto, strada sterrata da percorrere con cautela fino al parcheggio alto.",
        quando: "Fine primavera e estate per i pulcinella; al tramonto per la luce.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Controllare le chiusure stagionali prima di salire."
      },
      {
        nome: "Reynisfjara",
        testo: "Spiaggia di sabbia nera con colonne di basalto e le torri di Reynisdrangar nel mare. È una delle più fotogeniche e pericolose d'Islanda per le onde improvvise.",
        come: "Parcheggio e sentiero breve; ci sono cartelli con un sistema a semaforo per le condizioni del mare.",
        quando: "Mattina presto, quando ci sono meno pullman.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Rispettare le indicazioni di sicurezza: le onde arrivano molto più in alto di quanto sembri."
      },
      {
        nome: "Fjaðrárgljúfur",
        testo: "Un canyon sinuoso di quasi 100 metri di profondità e circa 2 km di lunghezza, con pareti coperte di muschio. Il sentiero sale sul bordo con vista continua.",
        come: "Parcheggio vicino alla strada; sentiero ben tenuto da fare a piedi.",
        quando: "Estate, con il fiume basso; in primavera può essere chiuso per il fango.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Restare sul sentiero: la protezione del muschio è stata una delle ragioni delle chiusure passate."
      },
      {
        nome: "Skaftafell e Svartifoss",
        testo: "Nel parco nazionale del Vatnajökull, sentieri tra betulle e lingue di ghiaccio. Il più battuto porta alla cascata Svartifoss, circondata da colonne di basalto.",
        come: "Dal centro visitatori di Skaftafell circa 1,5 km a salire, 45 minuti a tratta.",
        quando: "Estate, con la luce lunga; il sentiero è chiuso o ghiacciato nei mesi freddi.",
        tempo: "2-3 ore",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "Il parcheggio è a pagamento; il centro visitatori ha caffè e informazioni sul meteo."
      },
      {
        nome: "Laguna glaciale di Jökulsárlón e Diamond Beach",
        testo: "Laguna con iceberg staccati dal ghiacciaio Breiðamerkurjökull, che escono in mare attraverso un canale. Sulla spiaggia di sabbia nera dall'altra parte della strada i blocchi di ghiaccio brillano come diamanti.",
        come: "Parcheggio a pagamento accanto alla laguna (circa 1.000 ISK, 2025). I giri in barca partono dal chiosco sulla riva: barca anfibia da maggio a novembre, gommone Zodiac da maggio a ottobre; il kayak si prenota in anticipo.",
        quando: "Mattina presto o sera; in estate la luce non cala.",
        tempo: "2-3 ore",
        costo: "laguna e spiaggia libere; barca anfibia 7.100 ISK, Zodiac 16.600 ISK a persona (2026, icelagoon.is)",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "Il kayak tra gli iceberg è tra i miei ricordi più forti: non ho annotato operatore e prezzo, controllare le offerte aggiornate."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno da Vík a Höfn",
        tappe: [
          "Partenza presto da Vík verso est",
          "Dyrhólaey e Reynisfjara",
          "Fjaðrárgljúfur",
          "Skaftafell (Svartifoss) o trekking sul ghiacciaio",
          "Jökulsárlón e Diamond Beach",
          "Arrivo a Höfn per la notte"
        ]
      }
    ],
    attenzioni: [
      "Reynisfjara: onde anomale, restare lontani dall'acqua.",
      "Sul ghiacciaio andare solo con guide autorizzate: ramponi e piccozza servono davvero.",
      "Controllare il vento prima di partire: raffiche forti possono rovinare le portiere dell'auto, danno non coperto dall'assicurazione base."
    ],
    esperienzeSlugs: ['trekking-ghiacciaio-vatnajokull', 'kayak-jokulsarlon'],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Un grande iceberg azzurro galleggia sulla laguna glaciale di Jökulsárlón, con le montagne del Vatnajökull sullo sfondo',
    immagine: '/images/islanda/jokulsarlon-iceberg-riccardo.jpg',
  },
  {
    slug: 'hofn',
    paeseSlug: 'islanda',
    ordine: 4,
    nome: 'Höfn',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 notte',
    visitataPersonalmente: true,
    introduzione: 'La «capitale dell\'aragosta islandese», con il set cinematografico vichingo di Vestrahorn proprio accanto al campeggio.',
    percheAndarci: 'Una buona base dopo la giornata più piena del viaggio, con una tappa curiosa al Viking Village prima di ripartire.',
    cosaVedere: ['Viking Village (set costruito nel 2010)', 'Montagna Vestrahorn', 'Spiaggia nera di Stokksnes'],
    cosaFare: ['Giro al Viking Village: cavalli al pascolo, ricostruzione di villaggio vichingo'],
    doveDormire:
      'A Höfn i campeggi sono due, il Vestrahorn e quello comunale, e in quale abbiamo dormito non me lo sono segnato. Il Vestrahorn (~2.800 ISK a persona/notte) include l\'ingresso al Viking Village e la vista su Stokksnes, ma alcune recensioni segnalano solo due docce, disponibili in orari limitati; il campeggio comunale su Hafnarbraut (~1.800 ISK) è più centrale, vicino alla piscina del paese.\n\nAlternative a Höfn. Economiche: Höfn HI Hostel, Guesthouse Dyngja · fascia media: Hotel Höfn, The Old Airline Guesthouse · più curate: Fosshotel Vatnajökull, Brunnhóll Country Guesthouse.',
    doveMangiare: 'Zuppa di pesce in uno dei ristoranti di Höfn, la «capitale dell\'aragosta islandese», oppure cena al campeggio.',
    comeArrivare: 'Da Skaftafell/Jökulsárlón, circa un\'ora di guida.',
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'quello di tutto il giro: l\'estate, se si gira l\'isola in tenda',
    costi: 'Campeggio Vestrahorn ~2.800 ISK/notte, campeggio comunale ~1.800 ISK/notte.',
    erroriDaEvitare: [],
    miaEsperienza: 'Dopo la giornata più intensa del viaggio, Höfn è stata una tappa tranquilla, comoda per riposare prima del lungo tratto verso i fiordi dell\'Est del giorno dopo.',
    luoghi: [
      {
        nome: "Vestrahorn e Stokksnes",
        testo: "Una montagna di gabbro da 454 metri che si specchia nelle dune nere della spiaggia di Stokksnes. È uno dei posti più fotografati dell'Islanda.",
        come: "Dopo la strada per Stokksnes c'è un ingresso a pagamento gestito dal privato che possiede il terreno; poi pochi minuti a piedi.",
        quando: "Alba o tramonto, con acqua bassa per i riflessi.",
        tempo: "1-2 ore",
        costo: "ingresso a pagamento (tariffa da verificare sul posto)",
        consiglio: "L'ingresso comprende il Viking Village: le due cose si fanno insieme."
      },
      {
        nome: "Viking Village",
        testo: "Un villaggio vichingo costruito nel 2010 come set di un film mai girato, oggi lasciato al pascolo dei cavalli. Accanto c'è il campeggio ai piedi di Vestrahorn.",
        come: "Si arriva dalla stessa strada di Stokksnes.",
        quando: "Ora di luce bassa, quando si vede bene Vestrahorn sullo sfondo.",
        tempo: "30 minuti",
        consiglio: "I cavalli sono liberi: non dare cibo, non avvicinarsi troppo."
      },
      {
        nome: "Porto di Höfn e aragosta",
        testo: "Cittadina di pescatori nota per l'aragosta (in realtà scampi islandesi), con un piccolo porto e belle vedute sul ghiacciaio Vatnajökull dal lungomare.",
        come: "A piedi dal campeggio comunale.",
        quando: "Cena: i ristoranti riempiono presto in estate.",
        tempo: "1-2 ore",
        consiglio: "Prenotare la cena a Höfn d'estate."
      }
    ],
    sapori: [
      {
        nome: "Aragosta islandese (humar)",
        testo: "Scampi piccoli e dolci, serviti in zuppa, grigliati o con burro all'aglio: tipica di Höfn."
      },
      {
        nome: "Zuppa di pesce",
        testo: "Zuppa con panna e pesce del giorno, a volte con pane di segale."
      }
    ],
    attenzioni: [
      "In alta stagione Höfn è piena: prenotare campeggio e cena con anticipo.",
      "Il tratto di Ring Road a est ha poche pompe: fare il pieno a Höfn."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Montagna Vestrahorn e spiaggia di sabbia nera vicino Höfn, Islanda',
    immagine: '/images/islanda/hofn-stock.jpg',
  },
  {
    slug: 'egilsstadir',
    paeseSlug: 'islanda',
    ordine: 5,
    nome: 'Egilsstaðir',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 notte',
    visitataPersonalmente: true,
    introduzione: 'Il capoluogo dell\'est islandese, raggiunto attraverso i fiordi meno turistici e più selvaggi dell\'isola.',
    percheAndarci: 'La strada lungo i fiordi dell\'Est è tra le più scenografiche del viaggio, e i Vök Baths sono il primo bagno caldo dopo giorni di trekking e vento.',
    cosaVedere: ['Fiordi dell\'Est lungo la Route 1', 'Eventuale deviazione a Seyðisfjörður, cittadina artistica tra le montagne'],
    cosaFare: [
      'Guida panoramica lungo i fiordi dell\'Est (circa 250 km, 3-4 ore effettive che con le soste diventano facilmente 5-6: la strada segue ogni fiordo)',
      'Vök Baths, piscina termale galleggiante sul lago Urriðavatn (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Ho dormito al Camp Egilsstaðir, ben recensito (4/5 su Tripadvisor): bagni puliti, lavatrici e asciugatrici, cucine al chiuso, elettricità, per circa 2.000 ISK a persona.\n\nAlternative a Egilsstaðir. Economiche: Hafaldan HI Hostel (edificio Harbour) · fascia media: Við Lónið Guesthouse · più curate: Gistihúsið Lake Hotel Egilsstaðir, Hotel Valaskjálf.',
    doveMangiare: 'Cena in campeggio o in uno dei locali di Egilsstaðir.',
    comeArrivare: 'Da Höfn, lungo i fiordi dell\'Est (Route 1).',
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'quello di tutto il giro: l\'estate, se si gira l\'isola in tenda',
    costi: 'Campeggio circa 2.000 ISK a persona.',
    erroriDaEvitare: [],
    miaEsperienza: 'I Vök Baths sono arrivati al momento giusto: dopo due giorni tra trekking e vento, è stato il primo vero bagno caldo del viaggio.',
    luoghi: [
      {
        nome: "Fiordi dell'Est",
        testo: "La strada costiera della Route 1 tra Höfn ed Egilsstaðir segue ogni fiordo, con montagne ripide, cascate e villaggi di pescatori. Circa 250 km: in 4-5 ore con le soste.",
        come: "In auto; non ci sono scorciatoie e il meteo cambia in fretta.",
        quando: "Estate, con visibilità; in inverno la passa di Öxi può chiudere.",
        tempo: "una giornata",
        url: "https://safetravel.is",
        consiglio: "Prevedere pause nei villaggi come Djúpivogur, e fare benzina prima."
      },
      {
        nome: "Seyðisfjörður",
        testo: "Villaggio di artisti in un fiordo profondo, con case di legno colorate, la chiesa azzurra e la strada con l'arcobaleno. Si arriva scendendo da un passo montano (Fjarðarheiði) con belle cascate.",
        come: "Circa 30 minuti d'auto da Egilsstaðir; è anche il porto del traghetto dalle Fær Øer e dalla Danimarca.",
        quando: "Estate; il passo può essere chiuso dalla neve da autunno a primavera.",
        tempo: "mezza giornata",
        consiglio: "Passeggiata alle cascate lungo la strada, con più soste."
      },
      {
        nome: "Vök Baths",
        testo: "Piscine termali galleggianti sul lago Urriðavatn, a poca distanza da Egilsstaðir, con un bar sull'acqua. Il primo bagno caldo vero dopo giorni di trekking e vento.",
        come: "In auto, circa 10 minuti da Egilsstaðir. Si prenota meglio online nei weekend.",
        quando: "Sera, per la luce e il vapore sull'acqua.",
        tempo: "2 ore",
        consiglio: "Controllare i prezzi aggiornati sul sito ufficiale prima di andare."
      },
      {
        nome: "Lagarfljót e foresta di Hallormsstaður",
        testo: "La foresta più grande d'Islanda, con alberi alti e sentieri sul lago lungo e stretto Lagarfljót. Una vera sorpresa in un paese quasi senza alberi.",
        come: "Circa 30 minuti d'auto da Egilsstaðir.",
        quando: "Estate e inizio autunno per i colori.",
        tempo: "2 ore",
        consiglio: "Piccolo e tranquillo, ideale come pausa dalla guida."
      }
    ],
    sapori: [
      {
        nome: "Renna (hreindýr)",
        testo: "Nell'Est si trova carne di renna nei ristoranti locali: cotta alla piastra o in stufato."
      },
      {
        nome: "Pane e dolci dei panifici",
        testo: "Nei piccoli villaggi i forni sono ottimi: kleina (dolce fritto) e vínarbrauð (sfoglia con crema)."
      }
    ],
    attenzioni: [
      "Strade di montagna come Fjarðarheiði e Öxi possono chiudere per neve o nebbia: controllare road.is.",
      "Le pompe di benzina nei fiordi sono lontane: pieno quando si può."
    ],
    esperienzeSlugs: ['terme-naturali-islanda'],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Villaggio di Seyðisfjörður tra le montagne innevate di un fiordo dell\'Est islandese',
    immagine: '/images/islanda/egilsstadir-stock.jpg',
  },
  {
    slug: 'asbyrgi',
    paeseSlug: 'islanda',
    ordine: 6,
    nome: 'Ásbyrgi',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 notte',
    visitataPersonalmente: true,
    introduzione: 'Il canyon a forma di ferro di cavallo nel cuore del parco nazionale, con lo Stuðlagil e la cascata più potente d\'Europa lungo il tragitto.',
    percheAndarci: 'Quanto a paesaggi, è una delle giornate più intense del viaggio: in poche ore le colonne di basalto, la cascata più potente d\'Europa e il canyon di Ásbyrgi.',
    cosaVedere: [
      'Stuðlagil Canyon: colonne di basalto alte 30 metri e fiume dalle acque turchesi, famoso solo dal 2017',
      'Dettifoss: la cascata più potente d\'Europa (44 m di salto, portata fino a 500 m³/s in estate)',
      'Canyon di Ásbyrgi, con passeggiata fino allo stagno Botnstjörn',
    ],
    cosaFare: [
      'Passeggiata allo Stuðlagil Canyon (circa 1h di guida, ultimo tratto su sterrato)',
      'Vista su Dettifoss dal lato ovest (Route 862, asfaltata, la vista migliore)',
      'Passeggiata tra le pareti verdi del canyon di Ásbyrgi',
    ],
    doveDormire:
      'Ho dormito al campeggio del parco nazionale di Ásbyrgi (fino a 350 piazzole, aperto da metà maggio a fine ottobre), che secondo le recensioni ha buoni servizi (bagni puliti, docce, lavanderia). In alta stagione conviene prenotare.\n\nLa zona è molto remota e le alternative vicine sono poche: a Kópasker (circa 35-40 minuti) ci sono Kópasker Guesthouse, MELAR Guesthouse e Kópasker HI Hostel (fascia economica/media). Di lusso nei dintorni non c\'è niente: si sceglie tra il campeggio stesso, che ha anche piccoli studio, e le guesthouse di Kópasker.',
    doveMangiare: 'Cena in campeggio.',
    comeArrivare: 'Da Egilsstaðir, con soste allo Stuðlagil Canyon e a Dettifoss.',
    comeSpostarsi: 'Auto a noleggio; ultimo tratto per lo Stuðlagil su sterrato.',
    periodoMigliore: 'campeggio aperto da metà maggio a fine ottobre',
    costi: 'il prezzo del campeggio non me lo sono segnato: conviene controllarlo al momento di prenotare',
    erroriDaEvitare: ['Non prenotare il campeggio in alta stagione: la zona è molto remota e le alternative sono poche'],
    miaEsperienza: 'Dettifoss si sente prima di vederla: il boato e la forza dell\'acqua fangosa sono tra i ricordi più fisici del viaggio.',
    luoghi: [
      {
        nome: "Stuðlagil",
        testo: "Un canyon con colonne di basalto alte fino a 30 metri e acqua turchese, noto solo dal 2017, quando la costruzione di una diga ha abbassato il fiume. Ci sono due accessi, uno con piattaforma panoramica e uno con sentiero fino al letto del fiume.",
        come: "Ultimo tratto su sterrato dall'asfalto; sentieri brevi e ben tenuti.",
        quando: "Estate, con il fiume basso e la luce piena.",
        tempo: "1-2 ore",
        consiglio: "Il sentiero fino al fiume è più bello della piattaforma ma richiede scarpe adatte."
      },
      {
        nome: "Dettifoss",
        testo: "Cascata larga 100 metri e alta 44, considerata la più potente d'Europa per portata. L'acqua è fangosa, grigia, e il rumore si sente da lontano.",
        come: "Dalla Route 862 (asfaltata) sul lato ovest, la vista migliore; sentiero di circa 1 km dal parcheggio.",
        quando: "Estate; in primavera la piena è al massimo.",
        tempo: "1 ora",
        costo: "ingresso libero",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "Il boato si sente prima di vederla: restare dietro le catene, il bordo è scivoloso."
      },
      {
        nome: "Canyon di Ásbyrgi",
        testo: "Una gola a forma di ferro di cavallo lunga 3,5 km e larga 1, con pareti fino a 100 metri e una foresta di betulle sul fondo. Secondo la leggenda è l'impronta dello zoccolo del cavallo di Odino.",
        come: "Dal parcheggio un sentiero pianeggiante porta fino allo stagno Botnstjörn.",
        quando: "Sera o mattina, con luce radente sulle pareti.",
        tempo: "2 ore",
        costo: "ingresso libero",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "Il campeggio del parco nazionale è sul fondo del canyon, con ottimi servizi."
      },
      {
        nome: "Hljóðaklettar",
        testo: "Colonne di basalto cresciute in cerchio, che da sopra sembrano una roccia fiorita, vicino a Ásbyrgi. Una passeggiata corta, la più bella dell'area per chi ama la geologia.",
        come: "A pochi chilometri da Ásbyrgi; sentiero ben segnato.",
        quando: "Estate.",
        tempo: "1 ora",
        consiglio: "Combinabile con Ásbyrgi in mattinata."
      }
    ],
    attenzioni: [
      "La zona è remota: pieno di benzina e spesa a Húsavík o Akureyri.",
      "Le strade sterrate vicino a Dettifoss est richiedono un 4x4; la Route 862 ovest è asfaltata."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Vista aerea del canyon di Ásbyrgi a forma di ferro di cavallo, Islanda',
    immagine: '/images/islanda/asbyrgi-stock.jpg',
  },
  {
    slug: 'akureyri',
    paeseSlug: 'islanda',
    ordine: 7,
    nome: 'Akureyri e il lago Mývatn',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 notte',
    visitataPersonalmente: true,
    introduzione: 'Base per il whale watching a Húsavík e per la zona geotermica del lago Mývatn, prima dell\'ultimo grande trasferimento verso Snæfellsnes.',
    percheAndarci: 'Un tour in barca alla ricerca di megattere e balenottere, e poi una delle zone con più fenomeni geotermici di tutta l\'Islanda.',
    cosaVedere: [
      'Baia di Skjálfandi, per il whale watching da Húsavík',
      'Grjótagjá (grotta lavica con sorgente termale, location di Game of Thrones; oggi non balneabile)',
      'Hverfjall (cratere vulcanico ad anello), Hverir (fumarole e pozze di fango), Dimmuborgir (labirinto di formazioni laviche)',
      'Goðafoss, la «cascata degli dei»',
    ],
    cosaFare: [
      'Whale watching da Húsavík (vedi la scheda esperienza dedicata)',
      'Giro della zona geotermica di Mývatn (vedi la scheda esperienza dedicata)',
    ],
    doveDormire:
      'Ho dormito al campeggio Hamrar, tra i meglio recensiti d\'Islanda (4/5 su Tripadvisor), ai margini della foresta di Kjarnaskógur, con docce quasi nuove e ottimi servizi. Il prezzo indicativo è intorno a 1.500 ISK a persona più una quota per la tenda.\n\nAlternative ad Akureyri. Economiche: Akureyri Backpackers, Guesthouse Bægisá · fascia media: Centrum Hotel · più curate: Hotel Kea, Bryggjan Boutique Hotel.',
    doveMangiare: 'Pranzo veloce a Húsavík; barbecue in campeggio la sera con la spesa fatta ad Akureyri.',
    comeArrivare: 'Da Ásbyrgi, con tappa a Húsavík e alla zona di Mývatn.',
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'estate, per le migliori condizioni del tour whale watching',
    costi: 'Campeggio Hamrar ~1.500 ISK/persona + quota tenda.',
    erroriDaEvitare: [],
    miaEsperienza: 'Whale watching al mattino e zona geotermica al pomeriggio: è stata una delle giornate più varie del viaggio, dal mare aperto allo zolfo in poche ore.',
    luoghi: [
      {
        nome: "Whale watching da Húsavík",
        testo: "La baia di Skjálfandi è tra i posti migliori d'Europa per vedere megattere e balenottere azzurre in estate. I tour partono dal porto di Húsavík e durano circa 3 ore.",
        come: "Si prenota online con l'operatore; barche tradizionali o veloci.",
        quando: "Uscite quotidiane da marzo a novembre; giugno-agosto è il periodo migliore. Mattina presto per il mare calmo.",
        tempo: "3 ore",
        costo: "da 12.990 ISK per il tour classico di 3 ore con North Sailing (2026)",
        consiglio: "Vestirsi a strati: in barca fa freddo anche d'estate."
      },
      {
        nome: "Goðafoss",
        testo: "La «cascata degli dei», larga 30 metri e alta 12, dove nell'anno 1000 un capo islandese avrebbe gettato le statue dei vecchi dei dopo la conversione al cristianesimo.",
        come: "Sosta lungo la Ring Road, con due lati e sentieri corti.",
        quando: "Sera d'estate o mattina presto.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        consiglio: "Il lato ovest ha meno gente e una vista migliore."
      },
      {
        nome: "Zona geotermica di Mývatn",
        testo: "Il lago è circondato da fenomeni vulcanici: i crateri di Hverfjall, le fumarole di Hverir con odore di zolfo e il labirinto di lava di Dimmuborgir. In pochi chilometri si vedono tre scenari diversi.",
        come: "In auto intorno al lago; sentieri brevi e ben segnati.",
        quando: "Mattina, prima dei gruppi; d'estate i mosconi sono fastidiosi.",
        tempo: "mezza giornata",
        consiglio: "Portare una retina antizanzare: il nome del lago significa «lago dei moscerini»."
      },
      {
        nome: "Grjótagjá",
        testo: "Una grotta di lava con una sorgente calda, nota per una scena di Game of Thrones. Oggi non si può fare il bagno perché la temperatura è troppo variabile.",
        come: "Piccolo parcheggio e pochi passi.",
        quando: "Qualsiasi ora.",
        tempo: "20 minuti",
        costo: "ingresso libero",
        consiglio: "Si può guardare, non bagnarsi."
      },
      {
        nome: "Akureyri città",
        testo: "La seconda città dell'Islanda, ai piedi di un fiordo lungo, con chiesa moderna, giardino botanico a nord del cerchio polare e una bella vista dei monti.",
        come: "A piedi dal centro; il giardino botanico Lystigarðurinn è gratuito.",
        quando: "Giorno intero; sera per i caffè.",
        tempo: "2-3 ore",
        consiglio: "Fare la spesa qui: i supermercati sono più forniti e meno cari della media del Nord."
      }
    ],
    sapori: [
      {
        nome: "Barbecue in campeggio",
        testo: "Spesa ad Akureyri e cucina condivisa o griglia nel campeggio: la scelta più semplice per risparmiare."
      },
      {
        nome: "Gelato al latte islandese",
        testo: "In Islanda i gelati si fanno con il latte e si mangiano tutto l'anno, anche con il freddo: provare quello della fattoria Efstidalur o dei bar del centro."
      }
    ],
    attenzioni: [
      "Il tour delle balene può essere annullato per il meteo: lasciare un giorno di margine.",
      "Intorno a Mývatn i moscerini sono molti in estate: portare un copricapo."
    ],
    esperienzeSlugs: ['whale-watching-husavik', 'zona-geotermale-myvatn'],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Pozza termale fumante nel terreno colorato di zolfo della zona geotermica vicino al lago Mývatn',
    immagine: '/images/islanda/akureyri-stock.jpg',
  },
  {
    slug: 'grundarfjordur',
    paeseSlug: 'islanda',
    ordine: 8,
    nome: 'Grundarfjörður',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 notte',
    visitataPersonalmente: true,
    introduzione: 'La penisola di Snæfellsnes e il Kirkjufell, la montagna più fotografata d\'Islanda, dopo la giornata di trasferimento più lunga del viaggio.',
    percheAndarci: 'È una giornata quasi tutta di guida, ma alla fine c\'è il tramonto al Kirkjufell, con l\'ultima vera cena in tenda del viaggio.',
    cosaVedere: ['Case di torba tradizionali lungo la Route 1', 'Kirkjufell (463 m) e la cascata Kirkjufellsfoss'],
    cosaFare: [
      'Sosta in una piscina termale naturale poco battuta del West Iceland, per esempio Guðrúnarlaug (spogliatoio essenziale, ingresso gratuito)',
      'Foto al Kirkjufell al tramonto: il parcheggio è proprio accanto alla cascata, non serve camminare',
    ],
    doveDormire:
      'Ho dormito al campeggio ai piedi del Kirkjufell, semplice e panoramico, con vista diretta sul fiordo e sulla montagna.\n\nIn paese le opzioni sono poche: il Kirkjufell Guesthouse and Apartments (da circa 180$/notte) è in pratica la scelta principale di fascia media, e di alternative economiche o di lusso ce ne sono poche. Per avere più scelta conviene guardare verso Stykkishólmur, a circa 25 minuti d\'auto.',
    doveMangiare: 'Spesa nei negozi del paese (10 minuti a piedi dal campeggio) e cena al campeggio: l\'ultima vera cena in tenda del viaggio.',
    comeArrivare: 'Da Akureyri, circa 390 km e 5 ore di guida effettive via Route 1 e Borgarnes (6-7 ore con soste).',
    comeSpostarsi: 'Auto a noleggio.',
    periodoMigliore: 'estate, per la luce fino a tardi sul Kirkjufell al tramonto',
    costi: 'il prezzo del campeggio non me lo sono segnato: conviene controllarlo prima di partire',
    erroriDaEvitare: ['Mettere in conto 6-7 ore di guida con le soste: è il trasferimento più lungo di tutto il viaggio'],
    miaEsperienza: 'L\'ultima cena in tenda, con vista sul Kirkjufell e sul fiordo, è stata un bel modo di chiudere la parte «on the road» del viaggio, prima delle due notti finali in hotel.',
    luoghi: [
      {
        nome: "Kirkjufell e Kirkjufellsfoss",
        testo: "La montagna più fotografata d'Islanda, alta 463 metri e a forma di cappello, con una cascata ai piedi. Il parcheggio è accanto alla caduta e non serve camminare.",
        come: "In auto dalla Route 54; sosta breve.",
        quando: "Tramonto, soprattutto in estate; in inverno di notte per l'aurora.",
        tempo: "1 ora",
        costo: "ingresso libero; parcheggio a pagamento, circa 1.000 ISK (2025)",
        consiglio: "Il campeggio ai piedi della montagna offre la vista migliore senza spostarsi."
      },
      {
        nome: "Arnarstapi e Hellnar",
        testo: "Due ex villaggi di pescatori sulla costa sud di Snæfellsnes, uniti da un sentiero di 2,5 km tra scogliere, archi di basalto e nidi di uccelli marini.",
        come: "Parcheggio nei due villaggi; il sentiero si fa a piedi.",
        quando: "Estate.",
        tempo: "1-2 ore",
        consiglio: "Portare giacca antivento: il mare è aperto."
      },
      {
        nome: "Djúpalónssandur",
        testo: "Spiaggia di ciottoli neri con resti di un naufragio e pietre di prova per i pescatori. Il sentiero scende tra la lava.",
        come: "Piccolo parcheggio sulla Route 574; breve discesa.",
        quando: "Mattina o sera.",
        tempo: "1 ora",
        consiglio: "Non toccare i ferri arrugginiti del relitto: sono ancora pericolosi."
      },
      {
        nome: "Guðrúnarlaug",
        testo: "Una piscina termale naturale in Laugar, nella valle di Sælingsdalur, ricostruita su un'antica sorgente. È ancora poco battuta e gratuita.",
        come: "Poco fuori dalla Route 60.",
        quando: "Sera.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Spogliatoio essenziale: portare asciugamano e infradito."
      }
    ],
    attenzioni: [
      "Il tratto Akureyri-Snæfellsnes è la giornata più lunga di guida: 6-7 ore con soste.",
      "Le piscine termali naturali sono spesso senza spogliatoi: rispettare le regole e lasciare tutto pulito."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Montagna Kirkjufell e la cascata Kirkjufellsfoss, Islanda',
    immagine: '/images/islanda/grundarfjordur-stock.jpg',
  },
  {
    slug: 'reykjavik',
    paeseSlug: 'islanda',
    ordine: 9,
    nome: 'Reykjavík',
    tipologia: ['cultura'],
    giorniConsigliati: '1-2 notti, a chiusura del viaggio',
    visitataPersonalmente: true,
    introduzione: 'La capitale, ultima tappa dopo sei notti in tenda: un letto vero, il centro città e l\'ultima cena del viaggio.',
    percheAndarci: 'È un buon modo per chiudere il viaggio, tra le vie colorate del centro e una sosta termale lungo il rientro.',
    cosaVedere: ['Chiesa di Hallgrímskirkja', 'Vie colorate del centro', 'Mercatino dell\'usato di Kolaportið (sabato/domenica)'],
    cosaFare: [
      'Eventuale sosta in una piscina termale naturale del West Iceland lungo il rientro (per esempio nella zona di Deildartunguhver/Krauma, la sorgente calda più potente d\'Europa)',
      'Giro a piedi del centro città, con eventuale tappa al mercatino di Kolaportið',
    ],
    doveDormire: 'Il nome dell\'hotel dell\'ultima notte non me lo sono segnato: conviene comunque dormire in centro, per girare tutto a piedi.\n\nAlternative a Reykjavík. Economiche: KEX Hostel, Loft HI Eco Hostel · fascia media: hotel in zona Þingholt, Hlemmur Square · più curate: The Reykjavik EDITION, Canopy by Hilton Reykjavík.',
    doveMangiare: 'Ultima cena in uno dei ristoranti del centro; il nome del locale non me lo sono segnato.',
    comeArrivare: 'Da Grundarfjörður, circa 2h30 di guida (180 km via Borgarnes).',
    comeSpostarsi: 'A piedi in centro.',
    periodoMigliore: 'quello di tutto il giro: l\'estate, se si gira l\'isola in tenda',
    costi: 'i costi dell\'ultima tappa non li ho annotati',
    erroriDaEvitare: [],
    miaEsperienza: 'Dopo sei notti in tenda, l\'ultima notte in un letto vero a Reykjavík è stata quasi surreale: un buon modo per festeggiare la fine del viaggio prima del volo di rientro da Keflavík.',
    luoghi: [
      {
        nome: "Hallgrímskirkja",
        testo: "Chiesa luterana in cemento ispirata ai fianchi di basalto, iniziata nel 1945 e finita nel 1986. La torre di 74 metri ha un belvedere sulla città.",
        come: "In centro, a piedi. L'ingresso alla chiesa e alla torre è separato.",
        quando: "Chiesa tutti i giorni 10-17 d'inverno e 9-20 d'estate; torre fino alle 16:45 d'inverno e alle 19:45 d'estate. Mattina per la luce più morbida.",
        tempo: "45 minuti",
        costo: "chiesa libera; torre 1.500 ISK adulti (2026), biglietto solo in chiesa, non prenotabile",
        url: "https://hallgrimskirkja.is",
        consiglio: "Controllare orari della torre sul sito ufficiale: possono cambiare per concerti e funzioni."
      },
      {
        nome: "Harpa e il lungomare",
        testo: "Sala concerti di vetro sul porto, aperta nel 2011, con facciata a cellule. Il lungomare porta alla scultura Sólfar e alla baia di Faxaflói.",
        come: "A piedi dal centro; l'ingresso al foyer è libero.",
        quando: "Tramonto, quando il vetro riflette il cielo.",
        tempo: "1 ora",
        costo: "ingresso libero al foyer",
        url: "https://www.harpa.is",
        consiglio: "Prenotare i biglietti dei concerti in anticipo."
      },
      {
        nome: "Perlan e museo Wonders of Iceland",
        testo: "Un edificio con cupola di vetro su sei cisterne dell'acqua calda, con una grotta di ghiaccio artificiale, un planetario e una terrazza panoramica.",
        come: "Fuori dal centro, con bus o auto; comodo in giornata di pioggia.",
        quando: "Mostre aperte tutti i giorni 9-21; ideale nelle giornate di brutto tempo.",
        tempo: "2-3 ore",
        url: "https://perlan.is",
        consiglio: "Si prenota online per evitare le code."
      },
      {
        nome: "Centro storico e street art",
        testo: "Strade colorate intorno a Skólavörðustígur, con negozi di design, gallerie e murales. Il quartiere Þingholt ha case di lamiera dipinte.",
        come: "A piedi; il tratto in salita parte dalla chiesa.",
        quando: "Mattina o pomeriggio.",
        tempo: "2 ore",
        consiglio: "Il sabato e la domenica c'è il mercatino delle pulci Kolaportið."
      },
      {
        nome: "Kolaportið",
        testo: "Mercato coperto delle pulci vicino al porto, il sabato e la domenica: usato, libri, souvenir e un banco di pesce essiccato, il cibo islandese più autentico.",
        come: "A piedi dal centro, accanto al porto vecchio.",
        quando: "Sabato e domenica, tutto l'anno; orari sul sito ufficiale.",
        tempo: "1 ora",
        url: "https://kolaportid.is",
        consiglio: "Provare lo harðfiskur (pesce secco) con burro."
      },
      {
        nome: "Terme e piscine pubbliche",
        testo: "Le piscine geotermiche sono parte della vita sociale locale: Sundhöllin in centro, Laugardalslaug la più grande, Vesturbæjarlaug a pochi passi dal mare.",
        come: "Bus o a piedi; ingresso a pagamento, doccia nuda obbligatoria prima di entrare.",
        quando: "Sera, quando i locali si ritrovano.",
        tempo: "2 ore",
        consiglio: "Fare la doccia senza costume: è una regola di igiene che gli islandesi prendono sul serio."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Hallgrímskirkja e passeggiata a Skólavörðustígur",
          "Pranzo in centro",
          "Harpa e lungomare",
          "Sera alla piscina geotermica"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Golden Circle (Þingvellir, Geysir, Gullfoss) in auto o tour",
          "Cena in centro"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro (101)",
        perChi: "Chi vuole girare a piedi",
        testo: "Vicino a Hallgrímskirkja, ristoranti e locali. Più rumoroso nel weekend sera, camere piccole."
      },
      {
        nome: "Laugardalur",
        perChi: "Chi cerca tranquillità e prezzi più bassi",
        testo: "Vicino alle piscine e all'ostello HI; 20 minuti a piedi dal centro, con il bus."
      },
      {
        nome: "Vicino al porto",
        perChi: "Chi arriva con traghetti o tour",
        testo: "Ha hotel moderni, vicino a Harpa."
      }
    ],
    sapori: [
      {
        nome: "Bæjarins Beztu Pylsur",
        testo: "Il chiosco di hot dog più famoso della città, vicino al porto, aperto da decenni."
      },
      {
        nome: "Skyr e pasticcini",
        testo: "Nei forni del centro: kleina, snúður (girella alla cannella)."
      },
      {
        nome: "Pesce fresco al porto",
        testo: "Le zuppe di pesce e il merluzzo al forno nei ristoranti del vecchio porto."
      },
      {
        nome: "Plokkfiskur",
        testo: "Purè di merluzzo e patate, piatto casalingo che si trova nei ristoranti tradizionali."
      }
    ],
    attenzioni: [
      "Prezzi alti: pranzare con zuppa o hot dog e cenare nei bar con piatto del giorno per risparmiare.",
      "I tassisti sono onesti, ma i taxi sono cari: meglio bus o auto.",
      "Nei locali del centro il sabato sera i prezzi dell'alcol sono alti: controllare lo scontrino."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Guglia in stile Art Déco della chiesa di Hallgrímskirkja a Reykjavík',
    immagine: '/images/islanda/reykjavik-stock.jpg',
  },
]
