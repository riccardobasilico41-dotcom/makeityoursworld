import type { Destinazione } from '@/lib/types'

// Destinazioni della Tanzania. Rick ha visitato Serengeti, Ngorongoro,
// Tarangire/lago Manyara e Zanzibar (safari con Suricata Safaris); dei suoi
// ricordi ci sono solo le frasi sul safari in tenda, quindi miaEsperienza è
// presente solo sul Serengeti e altrove la UI mostra il placeholder.
// Arusha/Kilimanjaro è la base logistica, non visitata come meta.
// Tariffe: NCAA dalla tabella ufficiale (ncaa.go.tz/tariffs), TANAPA come
// riportate dagli operatori, novembre 2026.

export const destinazioniTanzania: Destinazione[] = [
  {
    slug: 'serengeti',
    paeseSlug: 'tanzania',
    ordine: 1,
    nome: 'Serengeti',
    tipologia: ['safari', 'parco nazionale', 'fauna'],
    giorniConsigliati: '2-3 giorni, meglio con almeno due notti dentro il parco',
    visitataPersonalmente: true,
    introduzione:
      "La grande pianura del nord della Tanzania, patrimonio UNESCO: savana aperta, kopje di granito, grandi felini e, a seconda della stagione, le mandrie della Grande Migrazione.",
    percheAndarci:
      "È il parco da cui nasce l'idea stessa di safari: spazi enormi, leoni, ghepardi e leopardi, e milioni di gnu e zebre che si spostano seguendo le piogge.",
    cosaVedere: [
      'La valle del Seronera, nel centro del parco, la zona più facile per i grandi felini',
      'I kopje, gli affioramenti di granito dove riposano i leoni',
      'Le pianure meridionali verso Ndutu nella stagione delle nascite degli gnu',
      'Il fiume Mara, nel nord, negli attraversamenti della migrazione',
    ],
    cosaFare: [
      'Game drive all\'alba e nel tardo pomeriggio, quando gli animali sono più attivi',
      'Dormire in tenda dentro il parco (vedi la scheda esperienza dedicata)',
      'Seguire la Grande Migrazione nella zona giusta per il mese (vedi la scheda esperienza dedicata)',
      'Safari in mongolfiera all\'alba, per chi vuole vedere la pianura dall\'alto',
    ],
    doveDormire:
      "Dentro il parco c'è di tutto: campeggi pubblici con tende da campeggio, campi tendati fissi con letti veri e bagno, lodge e campi di lusso. Dormire dentro il Serengeti, invece che fuori, fa risparmiare ore di strada e permette di essere sulle piste già all'alba. Suricata Safaris organizza il circuito in tutte e tre le formule (campeggio, fascia media e lusso).",
    comeArrivare:
      "Da Arusha in fuoristrada, di solito passando per Tarangire o Ngorongoro: è una lunga giornata di strada. In alternativa, volo interno da Arusha verso una delle piste del parco.",
    comeSpostarsi: 'In fuoristrada con autista-guida: dentro il parco non si cammina da soli.',
    periodoMigliore:
      "da giugno a ottobre (stagione secca, migrazione nel nord da luglio); da dicembre a marzo nel sud, per le nascite",
    costi:
      "Ingresso circa 83 $ a persona ogni 24 ore in alta stagione e 71 $ in bassa, IVA inclusa, più la tassa di pernottamento nei campi e nei lodge (circa 59-71 $ a notte); nel campeggio pubblico circa 35 $ (indicativi, da verificare con l'operatore).",
    erroriDaEvitare: [
      "Andare nella zona sbagliata per il mese: la migrazione si sposta, e d'estate nel sud del parco gli gnu non ci sono",
      'Pianificare un solo giorno: tra andata e ritorno si passa più tempo in auto che a guardare animali',
      'Dimenticare strati caldi per i game drive dell\'alba, che sul fuoristrada aperto sono freddi',
    ],
    miaEsperienza:
      "Ho fatto il safari con Suricata Safaris: sono top, hanno accommodation per tutti i gusti e anche le esperienze in tenda, che consiglio. Mi piace viaggiare scomodo e a contatto con la natura, anche se ogni tanto qualche 5 stelle va bene.",
    esperienzeSlugs: ['safari-in-tenda', 'grande-migrazione'],
    tripSlugs: [],
    imageAlt: "Un'acacia solitaria nella savana del Serengeti al tramonto, con le colline all'orizzonte",
    immagine: '/images/tanzania/serengeti-savana.jpg',
  },
  {
    slug: 'ngorongoro',
    paeseSlug: 'tanzania',
    ordine: 2,
    nome: 'Cratere di Ngorongoro',
    tipologia: ['safari', 'fauna', 'unesco'],
    giorniConsigliati: '1 giorno nel cratere, con la notte sul bordo',
    visitataPersonalmente: true,
    introduzione:
      "Una caldera vulcanica intatta con il fondo piatto pieno di animali: erbivori, leoni, ippopotami e i rari rinoceronti neri. È il cuore della Ngorongoro Conservation Area, patrimonio UNESCO, dove i Maasai vivono ancora con le loro mandrie.",
    percheAndarci:
      'In poche ore e in uno spazio chiuso si vedono moltissimi animali, rinoceronte nero compreso, con le pareti del cratere tutt\'intorno.',
    cosaVedere: [
      'Il fondo del cratere, con il lago salato e le paludi',
      'I rinoceronti neri, che qui si avvistano più facilmente che altrove nel nord',
      'La vista dal bordo del cratere',
      "La gola di Olduvai, sito paleontologico dentro l'area protetta, sulla strada per il Serengeti",
    ],
    cosaFare: [
      'Game drive sul fondo del cratere (vedi la scheda esperienza dedicata)',
      'Visita a un villaggio Maasai (boma culturale)',
    ],
    doveDormire:
      'Lodge e campeggi sul bordo del cratere, a circa 2.300 metri: di notte fa freddo davvero. Più economico dormire a Karatu, fuori dall\'area protetta, e salire la mattina presto.',
    comeArrivare: "Da Arusha in fuoristrada, passando per Karatu; è anche la tappa di passaggio tra Arusha e il Serengeti.",
    comeSpostarsi: 'In fuoristrada con autista-guida, con discesa e risalita su piste dedicate.',
    periodoMigliore: 'tutto l\'anno; nella stagione secca l\'erba è bassa e gli animali si vedono meglio',
    costi:
      "Tariffe ufficiali NCAA per i visitatori non residenti fuori dall'Africa orientale: ingresso 70,80 $ a persona ogni 24 ore (23,60 $ per i bambini dai 5 ai 15 anni), più 295 $ a veicolo per ogni discesa nel cratere e il permesso per il fuoristrada.",
    erroriDaEvitare: [
      'Scendere a metà mattina: i primi veicoli entrano all\'alba e trovano il cratere più vuoto',
      'Sottovalutare il freddo sul bordo, di sera e al mattino presto',
      'Fare il conto del safari senza la tassa del cratere, che si paga a veicolo e quindi pesa di più sui gruppi piccoli',
    ],
    esperienzeSlugs: ['cratere-ngorongoro'],
    tripSlugs: [],
    imageAlt: 'Il fondo del cratere di Ngorongoro visto dal bordo, con il lago e le pareti della caldera',
    immagine: '/images/tanzania/ngorongoro-cratere.jpg',
  },
  {
    slug: 'tarangire-manyara',
    paeseSlug: 'tanzania',
    ordine: 3,
    nome: 'Tarangire e lago Manyara',
    tipologia: ['safari', 'parco nazionale', 'natura'],
    giorniConsigliati: '1 giorno ciascuno, spesso a inizio o fine circuito',
    visitataPersonalmente: true,
    introduzione:
      "Due parchi vicini ad Arusha e diversissimi tra loro: Tarangire, con i baobab giganti e i branchi di elefanti lungo il fiume, e il lago Manyara, stretto tra la scarpata della Rift Valley e il lago, con foresta, fenicotteri e babbuini.",
    percheAndarci:
      'Sono le tappe più comode per iniziare un safari e, nella stagione secca, Tarangire ha una delle concentrazioni di elefanti più alte della Tanzania.',
    cosaVedere: [
      'I baobab e gli elefanti lungo il fiume Tarangire',
      'La foresta e la riva del lago Manyara, con i fenicotteri quando il livello dell\'acqua lo permette',
      'La scarpata della Rift Valley sopra Manyara',
    ],
    cosaFare: [
      'Game drive a Tarangire, meglio nella stagione secca',
      'Giro nel parco del lago Manyara, che si fa bene in mezza giornata',
      'Visita al villaggio di Mto wa Mbu, all\'ingresso di Manyara',
    ],
    doveDormire:
      'Campi e lodge appena fuori o dentro Tarangire; per Manyara si dorme a Mto wa Mbu o a Karatu, che è anche la base per Ngorongoro.',
    comeArrivare: 'Da Arusha in fuoristrada: sono i due parchi del circuito nord più vicini alla città.',
    comeSpostarsi: 'In fuoristrada con autista-guida.',
    periodoMigliore: 'da giugno a ottobre, quando gli animali si concentrano attorno all\'acqua',
    costi: "Ingresso indicativo di circa 50-60 $ a persona ogni 24 ore per ciascun parco (tariffe TANAPA come riportate dagli operatori, da verificare).",
    erroriDaEvitare: [
      'Saltare Tarangire per correre verso il Serengeti: nella stagione secca vale da solo il viaggio',
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Un branco di elefanti attraversa il fiume Tarangire, con i baobab sulla riva',
    immagine: '/images/tanzania/tarangire-elefanti.jpg',
  },
  {
    slug: 'zanzibar',
    paeseSlug: 'tanzania',
    ordine: 4,
    nome: 'Zanzibar',
    tipologia: ['mare', 'spiagge', 'città storica'],
    giorniConsigliati: '4-5 giorni, dopo il safari',
    visitataPersonalmente: true,
    introduzione:
      "L'isola principale dell'arcipelago (Unguja) è il mare classico dopo il safari: Stone Town, la città vecchia patrimonio UNESCO, e le spiagge bianche dell'oceano Indiano, da Nungwi e Kendwa a nord fino a Paje e Jambiani sulla costa est.",
    percheAndarci:
      'Per chiudere il viaggio con giorni di mare, e per una città storica che mescola cultura swahili, araba, indiana ed europea.',
    cosaVedere: [
      'Stone Town, con le porte intagliate, i vicoli e il lungomare (vedi la scheda esperienza dedicata)',
      'Le spiagge del nord, Nungwi e Kendwa, dove la marea si sente meno',
      'La costa est, Paje e Jambiani, con la bassa marea che lascia scoperta la laguna',
      'La foresta di Jozani, con le scimmie colobo rosse di Zanzibar',
    ],
    cosaFare: [
      'Snorkeling attorno all\'atollo di Mnemba',
      'Kitesurf a Paje',
      'Cena al mercato serale dei Forodhani Gardens a Stone Town',
    ],
    doveDormire:
      'Una o due notti a Stone Town per la città, poi la spiaggia: il nord per fare il bagno a qualsiasi ora, la costa est per il kitesurf e i villaggi più tranquilli.',
    comeArrivare:
      "Volo interno da Arusha o dal Kilimanjaro all'aeroporto di Zanzibar (ZNZ), oppure voli internazionali diretti; da Dar es Salaam anche il traghetto veloce. All'ingresso serve l'assicurazione obbligatoria di Zanzibar (44 $).",
    comeSpostarsi: 'Taxi o transfer concordati tra Stone Town e le spiagge; a Stone Town si gira a piedi.',
    periodoMigliore: 'da giugno a ottobre e da dicembre a febbraio, fuori dalle stagioni delle piogge',
    costi: 'Assicurazione obbligatoria 44 $ a persona per soggiorni fino a 92 giorni.',
    erroriDaEvitare: [
      'Scegliere la costa est senza sapere della marea: con la bassa marea il mare si ritira per centinaia di metri',
      'Girare per Stone Town in costume o canottiera: fuori dalle spiagge ci si copre spalle e ginocchia',
      "Arrivare senza l'assicurazione di Zanzibar già comprata online, e fare la fila in aeroporto",
    ],
    esperienzeSlugs: ['stone-town'],
    tripSlugs: [],
    imageAlt: 'La spiaggia bianca di Nungwi, a nord di Zanzibar, con il mare turchese e le case sulla riva',
    immagine: '/images/tanzania/zanzibar-nungwi.jpg',
  },
  {
    slug: 'arusha-kilimanjaro',
    paeseSlug: 'tanzania',
    ordine: 5,
    nome: 'Arusha e il Kilimanjaro',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 notte prima e dopo il safari; 6-8 giorni per salire il Kilimanjaro',
    visitataPersonalmente: false,
    introduzione:
      "Arusha è la città da cui partono quasi tutti i safari del nord, ai piedi del monte Meru; poco più a est c'è il Kilimanjaro, la montagna più alta d'Africa, con Moshi come base per chi lo sale.",
    percheAndarci:
      'È la base logistica del viaggio: qui si arriva, si incontra l\'operatore e si parte per i parchi. Chi ha più tempo può aggiungere il trekking sul Kilimanjaro o sul Meru.',
    cosaVedere: [
      'Il Kilimanjaro, che nelle giornate limpide si vede anche dalla strada',
      'Il parco nazionale di Arusha, ai piedi del monte Meru, per una giornata a piedi o in auto',
    ],
    cosaFare: [
      'Salita al Kilimanjaro su una delle vie classiche (Machame, Lemosho, Marangu, Rongai)',
      'Trekking di 3-4 giorni sul monte Meru',
      'Escursione alle cascate di Materuni e a una piantagione di caffè vicino a Moshi',
    ],
    doveDormire: "Ad Arusha ci sono lodge e hotel di tutte le fasce; per il Kilimanjaro la base è Moshi.",
    comeArrivare: "Kilimanjaro International Airport (JRO), tra Arusha e Moshi; l'aeroporto di Arusha (ARK) serve i voli interni.",
    comeSpostarsi: "Transfer organizzato dall'operatore o taxi; in città traffico intenso nelle ore di punta.",
    periodoMigliore: 'da giugno a ottobre e da gennaio a febbraio per il Kilimanjaro, fuori dalle piogge',
    erroriDaEvitare: [
      'Prenotare il primo safari il giorno stesso del volo intercontinentale: meglio una notte ad Arusha',
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Il Kilimanjaro sopra le nuvole, con le acacie in primo piano',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
