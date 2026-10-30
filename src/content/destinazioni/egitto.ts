import type { Destinazione } from '@/lib/types'

// Destinazioni dell'Egitto, costruite su ricerca documentale per le guide
// "egitto-mare-luxor-cairo" (71) ed "egitto-completo" (72). Nessuna visita
// diretta: miaEsperienza resta assente e la UI mostra il placeholder.
// Prezzi indicativi a ottobre 2026, in lire egiziane (EGP) per turisti stranieri.

export const destinazioniEgitto: Destinazione[] = [
  {
    slug: 'cairo',
    paeseSlug: 'egitto',
    ordine: 1,
    nome: 'Il Cairo',
    tipologia: ['città', 'musei', 'cultura islamica'],
    giorniConsigliati: '2-3 giorni, piramidi escluse',
    visitataPersonalmente: false,
    introduzione:
      'Venti milioni di abitanti, traffico continuo e mille anni di architettura islamica: il Cairo è la porta d\'ingresso del Paese e la città dove si trovano i due grandi musei egizi.',
    percheAndarci:
      'Per il Grand Egyptian Museum con il tesoro completo di Tutankhamon, per il Cairo islamico tra moschee e madrase mamelucche, per il Cairo copto e per la sera al Khan el-Khalili.',
    cosaVedere: [
      'Il Grand Egyptian Museum (GEM) a Giza, con la scalinata monumentale e le gallerie di Tutankhamon',
      'Il Museo Egizio di piazza Tahrir, ancora pieno di pezzi straordinari',
      'La Cittadella di Saladino e la moschea di Muhammad Ali',
      'Il Cairo islamico: la moschea di Ibn Tulun, il complesso del sultano Hassan, la via al-Muizz',
      'Il Cairo copto: la Chiesa Sospesa e la sinagoga Ben Ezra',
      'Il Museo nazionale della civiltà egizia (NMEC), con la sala delle mummie reali',
    ],
    cosaFare: [
      'Passeggiare la sera nel bazar del Khan el-Khalili e bere un tè al caffè El Fishawy',
      'Un tramonto in feluca sul Nilo dalla Corniche',
      'Lo spettacolo di danza sufi Tannoura al Wekalet El Ghouri (verificare i giorni)',
    ],
    doveDormire:
      'Per chi ha poco tempo conviene dormire a Giza, vicino alle piramidi e al GEM. Per chi resta di più, Zamalek (isola sul Nilo, tranquilla e piena di locali) o Downtown. Economiche: guesthouse con vista piramidi a Nazlet el-Semman · fascia media: hotel di Zamalek e Garden City · lusso: Marriott Mena House a Giza, i grandi hotel sul Nilo.',
    doveMangiare:
      'Koshari da Abou Tarek a Downtown, ful e taameya nei chioschi del mattino, cucina egiziana tradizionale da Zooba o Abou El Sid, pesce e mezze nei ristoranti di Zamalek.',
    comeArrivare: 'Aeroporto internazionale del Cairo (CAI); dalla primavera 2025 anche il Sphinx International Airport, vicino a Giza, servito da alcuni voli.',
    comeSpostarsi:
      'Uber e Careem, economici e senza trattative. Metropolitana utile per Downtown e il Cairo copto (fermata Mar Girgis). Evitare di guidare.',
    periodoMigliore: 'da ottobre ad aprile',
    costi:
      'GEM circa 1.830 EGP (35 $) dal 1° novembre 2026, con fascia oraria da prenotare online; Museo Egizio di Tahrir circa 550 EGP; Cittadella circa 550 EGP; NMEC circa 500 EGP (indicativi).',
    erroriDaEvitare: [
      'Arrivare al GEM senza biglietto prenotato: gli ingressi sono a fascia oraria e i giorni di punta si esauriscono',
      'Accettare la «guida gratuita» che si offre per strada o il «negozio di papiri di mio fratello»',
      'Prendere un taxi senza tassametro senza concordare il prezzo: meglio Uber o Careem',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Minareti del Cairo islamico al tramonto visti dalla Cittadella',
  },
  {
    slug: 'piramidi',
    paeseSlug: 'egitto',
    ordine: 2,
    nome: 'Piramidi: Giza, Saqqara e Dahshur',
    tipologia: ['archeologia', 'deserto'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: false,
    introduzione:
      'Le tre necropoli reali dell\'Antico Regno a sud-ovest del Cairo: Giza con Cheope, Chefren, Micerino e la Sfinge; Saqqara con la piramide a gradoni di Djoser; Dahshur con la piramide Romboidale e la piramide Rossa.',
    percheAndarci:
      'Per vedere in un giorno e mezzo l\'intera evoluzione della piramide, dalla prima a gradoni fino alla forma perfetta di Giza, e per entrare nelle camere interne di Saqqara e Dahshur, molto meno affollate di quelle di Cheope.',
    cosaVedere: [
      'La Grande Piramide di Cheope, anche all\'interno con biglietto a parte',
      'La Sfinge e il tempio a valle di Chefren',
      'Il punto panoramico delle nove piramidi, nel deserto dietro Micerino',
      'La piramide a gradoni di Djoser e le mastabe dipinte di Saqqara (Ti, Mereruka)',
      'Il Serapeum di Saqqara, con i sarcofagi dei tori Api',
      'La piramide Rossa di Dahshur, in cui si scende senza code',
    ],
    cosaFare: [
      'Entrare alle 7 all\'apertura per avere un\'ora di luce buona e meno gruppi',
      'Spostarsi sull\'altopiano con il bus elettrico interno invece che con cavalli e cammelli',
    ],
    comeArrivare: 'Giza è a 30-60 minuti dal centro del Cairo secondo il traffico; Saqqara e Dahshur a 45-60 minuti da Giza, in auto con autista o con un tour.',
    comeSpostarsi:
      'A Giza il bus elettrico interno collega ingresso, piramidi e Sfinge; per Saqqara e Dahshur serve un\'auto con autista per la giornata (indicativamente 30-50 $).',
    periodoMigliore: 'da ottobre ad aprile, sempre al mattino presto',
    costi:
      'Altopiano di Giza circa 700 EGP; interno della Grande Piramide circa 1.500 EGP; Saqqara circa 450-600 EGP con le tombe principali; Dahshur intorno ai 150-200 EGP (indicativi, i prezzi cambiano spesso).',
    erroriDaEvitare: [
      'Credere a chi dice che «l\'ingresso è chiuso» o che «bisogna passare da qui»: è il primo aggancio per il giro a pagamento in cammello',
      'Salire su un cammello senza aver concordato prezzo totale, durata e cosa include: la cifra raddoppia per scendere',
      'Comprare il biglietto per l\'interno di Cheope pensando di vedere decorazioni: le camere sono spoglie, l\'interesse è nel corridoio e nella Grande Galleria',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Le piramidi di Giza con la Sfinge in primo piano',
  },
  {
    slug: 'luxor',
    paeseSlug: 'egitto',
    ordine: 3,
    nome: 'Luxor',
    tipologia: ['archeologia', 'Nilo'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: false,
    introduzione:
      'L\'antica Tebe, divisa dal Nilo in due: sulla riva est i templi dei vivi, Karnak e Luxor; sulla riva ovest la città dei morti, con la Valle dei Re, la Valle delle Regine e il tempio di Hatshepsut.',
    percheAndarci:
      'Per la più grande concentrazione di monumenti dell\'Egitto faraonico in un solo posto, e per le tombe dipinte che conservano ancora i colori originali.',
    cosaVedere: [
      'Il complesso di Karnak e la sala ipostila con 134 colonne',
      'Il tempio di Luxor, da vedere al tramonto e con l\'illuminazione serale',
      'La Valle dei Re: il biglietto base include tre tombe, Tutankhamon e Seti I si pagano a parte',
      'Il tempio funerario di Hatshepsut a Deir el-Bahari',
      'Medinet Habu, il tempio di Ramses III, con rilievi ancora colorati e pochi visitatori',
      'I Colossi di Memnone e il villaggio degli artigiani di Deir el-Medina',
    ],
    cosaFare: [
      'Il volo in mongolfiera all\'alba sulla riva ovest',
      'Attraversare il Nilo con il traghetto pubblico o in feluca',
      'Una gita in giornata al tempio di Dendera o di Abydos',
    ],
    doveDormire:
      'Riva est per comodità (ristoranti, templi a piedi), riva ovest per la calma e la vicinanza alle tombe. Economiche: guesthouse sulla riva ovest · fascia media: hotel sul Nilo della riva est · lusso: Sofitel Winter Palace, Al Moudira sulla riva ovest.',
    doveMangiare:
      'Cucina egiziana casalinga nei ristoranti della riva ovest, piccione ripieno e tagine; sulla riva est i locali con terrazza sul tempio di Luxor.',
    comeArrivare: 'Volo dal Cairo (1 ora), treno diurno o notturno dal Cairo (9-10 ore), strada dal Mar Rosso (4 ore da Hurghada, 4-4,5 da Marsa Alam).',
    comeSpostarsi:
      'Sulla riva ovest serve un\'auto con autista o un taxi per la giornata (indicativamente 25-40 $); sulla riva est si gira a piedi o in Uber. Calessi solo concordando il prezzo prima.',
    periodoMigliore: 'da ottobre ad aprile; d\'estate solo visite tra l\'alba e le 11',
    costi:
      'Karnak circa 600 EGP, tempio di Luxor circa 500 EGP, Valle dei Re circa 750 EGP (3 tombe), tomba di Tutankhamon circa 700 EGP, Seti I e Nefertari intorno ai 2.000 EGP ciascuna, Hatshepsut circa 440 EGP; mongolfiera indicativamente 50-100 $ (indicativi).',
    erroriDaEvitare: [
      'Andare in Valle dei Re a mezzogiorno: tra le pareti di roccia si superano i 40 °C già a maggio',
      'Scattare foto nelle tombe senza il permesso fotografico se richiesto: i guardiani fanno pagare la «multa» in contanti',
      'Scegliere la mongolfiera solo sul prezzo più basso: conta la compagnia, e i voli si annullano col vento',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Le colonne della sala ipostila del tempio di Karnak a Luxor',
  },
  {
    slug: 'assuan-abu-simbel',
    paeseSlug: 'egitto',
    ordine: 4,
    nome: 'Assuan e Abu Simbel',
    tipologia: ['archeologia', 'Nilo', 'cultura nubiana'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: false,
    introduzione:
      'La città più meridionale del circuito, dove il Nilo si stringe tra isole di granito e dune, con i villaggi nubiani colorati sulla riva ovest. Da qui si parte per i templi di Ramses II e Nefertari ad Abu Simbel.',
    percheAndarci:
      'Per il ritmo più lento dell\'Egitto, il tempio di Philae su un\'isola del lago, la feluca al tramonto e Abu Simbel, il monumento spostato pezzo per pezzo negli anni Sessanta per salvarlo dal lago Nasser.',
    cosaVedere: [
      'I due templi di Abu Simbel, a 280 km a sud',
      'Il tempio di Philae, in barca dal molo di Shellal',
      'L\'obelisco incompiuto nelle cave di granito',
      'Il Museo nubiano',
      'Il villaggio nubiano di Gharb Soheil',
    ],
    cosaFare: [
      'Una feluca al tramonto intorno all\'isola Elefantina',
      'Lo spettacolo di suoni e luci ad Abu Simbel, per chi dorme lì',
      'Il 22 febbraio e il 22 ottobre il sole entra fino al santuario del tempio grande',
    ],
    doveDormire:
      'Economiche: guesthouse nubiane sull\'isola Elefantina o a Gharb Soheil · fascia media: hotel sulla Corniche · lusso: Old Cataract (Sofitel Legendary). Ad Abu Simbel poche strutture, tra cui l\'eco-lodge Eskaleh.',
    comeArrivare:
      'Volo dal Cairo (1h25), treno notturno con cabine letto dal Cairo o da Giza, crociera dal Nilo da Luxor (3-4 notti). Per Abu Simbel: strada di 3,5 ore con partenza prima dell\'alba, oppure volo EgyptAir di 45 minuti.',
    comeSpostarsi: 'Barche pubbliche e private sul Nilo, taxi e Uber in città; per Abu Simbel minivan con autista o tour di gruppo.',
    periodoMigliore: 'da novembre a marzo; in estate è il posto più caldo del Paese',
    costi:
      'Abu Simbel indicativamente 750-850 EGP; Philae circa 550 EGP più la barca (da concordare, 300-500 EGP a barca); Museo nubiano circa 300 EGP; feluca indicativamente 300-600 EGP l\'ora a barca (indicativi).',
    erroriDaEvitare: [
      'Fare Abu Simbel in giornata d\'estate senza mettere in conto la sveglia alle 3-4 e sette ore di strada andata e ritorno',
      'Salire in feluca senza concordare se il prezzo è a persona o a barca, e per quanto tempo',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: 'Le quattro statue colossali di Ramses II sulla facciata del tempio grande di Abu Simbel',
  },
  {
    slug: 'siwa',
    paeseSlug: 'egitto',
    ordine: 5,
    nome: 'Oasi di Siwa',
    tipologia: ['deserto', 'oasi', 'cultura berbera'],
    giorniConsigliati: '3 giorni più due di viaggio',
    visitataPersonalmente: false,
    introduzione:
      'Un\'oasi di palme e laghi salati a 50 km dal confine libico, abitata da una comunità di lingua berbera, ai margini del Grande Mare di Sabbia.',
    percheAndarci:
      'Per un Egitto completamente diverso da quello dei templi: case di fango salato, sorgenti in cui fare il bagno, le dune del Grande Mare di Sabbia e il tempio dell\'Oracolo dove Alessandro Magno venne proclamato figlio di Amon.',
    cosaVedere: [
      'La fortezza di Shali, il vecchio centro in kershef (fango e sale)',
      'Il tempio dell\'Oracolo di Amon ad Aghurmi',
      'La montagna dei morti, Gebel al-Mawta, con tombe dipinte',
      'La sorgente di Cleopatra',
      'I laghi salati, dove si galleggia come nel Mar Morto',
    ],
    cosaFare: [
      'Escursione in fuoristrada nel Grande Mare di Sabbia con sandboarding e tramonto sulle dune',
      'Una notte in campo tendato nel deserto',
      'Girare l\'oasi in bicicletta',
    ],
    doveDormire:
      'Economiche: piccoli hotel in centro · fascia media: eco-lodge in stile siwano fuori dal centro · lusso: Adrère Amellal, senza elettricità, a lume di candela.',
    comeArrivare:
      'Bus notturno dal Cairo (circa 10-12 ore) oppure in due tappe passando per Marsa Matruh; in alternativa auto con autista o tour organizzato. Lungo la strada ci sono posti di blocco: passaporto sempre a portata di mano.',
    comeSpostarsi: 'Bicicletta, tuk-tuk e carretti trainati da asini nell\'oasi; fuoristrada con autista locale per il deserto.',
    periodoMigliore: 'da ottobre ad aprile; le notti d\'inverno nel deserto scendono vicino a 0 °C',
    costi:
      'Escursione di mezza giornata nel Grande Mare di Sabbia indicativamente 20-35 $ a persona; il permesso per il deserto viene richiesto dall\'operatore locale, che lo include nel prezzo (indicativo).',
    erroriDaEvitare: [
      'Andare nel deserto con chi non ha i permessi: le zone verso il confine libico sono controllate dall\'esercito',
      'Indossare abiti succinti in paese: Siwa è una comunità conservatrice, e anche al lago o alle sorgenti si fa il bagno coperti',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: 'Le rovine della fortezza di Shali a Siwa con i palmeti sullo sfondo',
  },
  {
    slug: 'mar-rosso',
    paeseSlug: 'egitto',
    ordine: 6,
    nome: 'Mar Rosso: Hurghada, Marsa Alam e Sharm el-Sheikh',
    tipologia: ['mare', 'immersioni', 'snorkeling'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: false,
    introduzione:
      'La costa egiziana del Mar Rosso e la punta del Sinai: barriera corallina vicinissima alla riva, relitti, squali pelagici al largo e un\'acqua che non scende sotto i 21-22 °C nemmeno d\'inverno.',
    percheAndarci:
      'Per chiudere il viaggio archeologico con il mare, o per immersioni tra le più famose del mondo: il relitto del Thistlegorm, Ras Mohammed, Elphinstone, le isole Brothers e Daedalus.',
    cosaVedere: [
      'Hurghada: le isole Giftun e la baia di Orange Bay, il relitto del Thistlegorm in giornata lunga',
      'Marsa Alam: la baia di Abu Dabbab con tartarughe e, con fortuna, il dugongo; il reef di Dolphin House (Samadai); il parco di Wadi el Gemal',
      'Sharm el-Sheikh: il parco nazionale di Ras Mohammed e lo stretto di Tiran',
      'Dahab: il Blue Hole e i reef dalla riva',
    ],
    cosaFare: [
      'Snorkeling dalla riva sulla barriera del resort',
      'Corso Open Water o Advanced con un centro PADI o SSI',
      'Crociera subacquea (liveaboard) di una settimana nel sud: Brothers, Daedalus, Elphinstone',
    ],
    doveDormire:
      'Hurghada: El Gouna e Sahl Hasheesh per la fascia media e alta, Hurghada città per la fascia economica. Marsa Alam: resort isolati con reef davanti, eco-lodge come quello di Wadi Lahami per i sub. Sharm: Naama Bay per la vita serale, Nabq per i resort.',
    comeArrivare:
      'Voli diretti dall\'Italia su Hurghada, Marsa Alam e Sharm el-Sheikh (molti charter stagionali); voli interni dal Cairo; da Luxor 4 ore di strada per Hurghada, 4-4,5 per Marsa Alam.',
    comeSpostarsi: 'Transfer organizzati dal resort, taxi e minivan con autista; per le escursioni in barca si parte dai porti turistici.',
    periodoMigliore:
      'mare caldo da maggio a novembre; da dicembre a marzo acqua sui 22 °C e vento forte, con giornate da muta di 5 mm',
    costi:
      'Escursione in barca di snorkeling con pranzo indicativamente 30-50 $; immersione singola 35-55 $, pacchetto da 10 immersioni 300-400 $; corso Open Water 400-550 $; liveaboard di 7 notti 1.000-1.800 € più tasse del parco (indicativi).',
    erroriDaEvitare: [
      'Scegliere Sharm pensando di andare comodamente a Luxor: dal Sinai serve un volo, quasi sempre via Cairo',
      'Toccare o camminare sul corallo e comprare conchiglie o coralli: è vietato e l\'export si sequestra in aeroporto',
      'Prenotare un liveaboard nel sud senza il brevetto e il numero di immersioni richiesti (di solito Advanced e almeno 50 immersioni)',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Barriera corallina del Mar Rosso con pesci tropicali vista dall\'alto, acqua turchese',
  },
]
