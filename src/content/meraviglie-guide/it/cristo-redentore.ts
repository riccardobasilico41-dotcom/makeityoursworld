import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'brasile/rio-de-janeiro',
  prezzi:
    'Trem do Corcovado (2026): adulti 139 R$ (circa 24 €) per qualsiasi nazionalità, bambini dai 7 agli 11 anni 112 R$ (circa 19 €), fino a 6 anni gratis in braccio a un adulto; il biglietto comprende treno andata e ritorno e accesso al monumento. Van ufficiali Paineiras Corcovado da circa 87 R$ (circa 15 €) dal centro visitatori Paineiras, di più da Copacabana e Largo do Machado. Le riduzioni per over 60 e studenti valgono solo per i cittadini brasiliani e i residenti.',
  luoghi: [
    {
      nome: 'Cristo Redentor e la terrazza del Corcovado',
      testo:
        "La statua Art Déco di 30 metri, 38 con il piedistallo, in cima al Corcovado, a circa 700 metri sopra la città. Dalla terrazza ai suoi piedi si vede tutta la forma di Rio: il Pão de Açúcar all'ingresso della baia, Copacabana, Ipanema e la laguna Rodrigo de Freitas. Alla base c'è una piccola cappella.",
      come:
        'Con il treno a cremagliera da Cosme Velho o con le van ufficiali; dall\'arrivo si sale con ascensori e scale mobili o a piedi per l\'ultimo tratto.',
      quando: 'Con la prima corsa del mattino, prima delle nuvole e della folla; a mezzogiorno la statua è spesso coperta.',
      tempo: '3-4 ore tra salita, visita e discesa',
      costo: 'Compreso nel biglietto del treno (139 R$, circa 24 €) o della van (da 87 R$, circa 15 €) (2026)',
      orari:
        "Treno e van tutti i giorni dalle 8 alle 19 (ultima discesa), d'estate fino alle 20; in alta stagione gli orari possono essere ampliati",
      url: 'https://www.tremdocorcovado.rio/',
      lat: -22.95194,
      lng: -43.21056,
      consiglio: 'In cima c\'è vento: una giacca leggera serve anche d\'estate.',
    },
    {
      nome: 'Trem do Corcovado (Cosme Velho)',
      testo:
        "La ferrovia a cremagliera del 1884, la più antica ferrovia turistica del Brasile, che sale dal quartiere di Cosme Velho attraverso la foresta atlantica del Parco Nazionale della Tijuca. I treni elettrici di oggi fanno la salita tra alberi, liane e scorci sulla città.",
      come:
        'Stazione in Rua Cosme Velho 513, in taxi o app da Copacabana e Ipanema. Il biglietto si compra online con giorno e orario; il check-in in biglietteria va fatto almeno 40 minuti prima della partenza.',
      quando: 'Primo treno della giornata, o tardo pomeriggio con la luce calda.',
      tempo: 'Circa 3 ore con la visita in cima',
      costo:
        'Adulti 139 R$, circa 24 €; bambini 7-11 anni 112 R$, circa 19 €; fino a 6 anni gratis in braccio (2026)',
      orari: 'Partenze tutti i giorni dalle 8 alle 18, ogni venti minuti, con corse extra secondo la disponibilità',
      url: 'https://www.tremdocorcovado.rio/',
      lat: -22.94061,
      lng: -43.19853,
    },
    {
      nome: 'Van ufficiali e Centro Visitatori Paineiras',
      testo:
        "L'altro modo ufficiale per salire: van della concessionaria Paineiras Corcovado che partono da Copacabana, da Largo do Machado o dal centro visitatori Paineiras, nel bosco a circa 15 minuti dalla statua. Il biglietto comprende la van andata e ritorno dallo stesso punto e l'accesso al monumento.",
      come:
        'A Copacabana si sale in Praça do Lido, a Largo do Machado davanti alla chiesa di Nossa Senhora da Glória, vicino alla metro. Al centro visitatori, in Estrada das Paineiras, si arriva in taxi o app: non c\'è parcheggio.',
      quando: 'Prima fascia oraria, alle 8; arrivare 15 minuti prima dell\'orario scelto (la tolleranza è di 15 minuti).',
      tempo: 'Almeno un\'ora e mezza in cima, più il viaggio',
      costo: 'Da Paineiras circa 87 R$, circa 15 €; da Copacabana e Largo do Machado costa di più (2026)',
      orari:
        'Tutti i giorni: Copacabana 7:30-16:00, Largo do Machado 7:00-16:00, Paineiras 7:30-18:00 con ultimo ingresso alle 17:00',
      url: 'https://www.paineirascorcovado.com.br/',
      lat: -22.94774,
      lng: -43.21751,
    },
    {
      nome: 'Parque Lage',
      testo:
        "Una villa degli anni Venti dentro un parco di foresta atlantica, ai piedi del Corcovado: dal giardino si vede il Cristo sopra la parete di roccia. Il palazzo con il cortile e la piscina è chiuso per restauro, con riapertura prevista nel 2027; parco, sentieri e giardini restano aperti. Da qui parte il sentiero che sale fino al Corcovado.",
      come: 'In taxi o app, oppure a piedi dal Jardim Botânico in una decina di minuti lungo Rua Jardim Botânico.',
      quando: 'Mattina, abbinato al Jardim Botânico.',
      tempo: '1 ora; mezza giornata con il sentiero',
      costo: 'Ingresso libero',
      orari:
        "Ingresso 8:00-18:00, con un'ora per uscire dopo la chiusura del cancello; accesso al sentiero per il Corcovado fino alle 15:00",
      url: 'https://parquenacionaldatijuca.rio/',
      lat: -22.9606,
      lng: -43.212,
      consiglio: 'Il sentiero per il Corcovado è ripido, con un tratto attrezzato con catene: conviene farlo in gruppo o con una guida.',
    },
    {
      nome: 'Floresta da Tijuca',
      testo:
        "Il settore più grande del Parco Nazionale della Tijuca, una foresta ripiantata nell'Ottocento dentro la città, con sentieri, cascate e belvederi. La Cascatinha Taunay, vicino all'ingresso, è la cascata più facile da raggiungere; i sentieri più lunghi salgono fino al Pico da Tijuca.",
      come:
        "L'ingresso principale è in Praça Afonso Viseu, ad Alto da Boa Vista, in taxi o app. Dentro si gira in auto lungo la strada del parco o a piedi sui sentieri.",
      quando: 'Mattina presto, con il fresco; meglio nei giorni feriali.',
      tempo: 'Mezza giornata',
      orari:
        'Auto 8:00-17:00, a piedi e in bici 6:00-17:00, uscita entro le 18:00; centro visitatori 8:00-17:00; sentieri dal Bom Retiro 7:00-15:00',
      url: 'https://parquenacionaldatijuca.rio/',
      lat: -22.96131,
      lng: -43.27347,
      consiglio: 'Con vento forte o temporali il parco può chiudere anche in giornata.',
    },
    {
      nome: 'Vista Chinesa',
      testo:
        'Un belvedere a forma di pagoda nel Parco Nazionale della Tijuca. Da qui si vedono la laguna, Ipanema, il Pão de Açúcar e il Cristo, con la foresta tutto intorno.',
      come: 'Solo in auto, taxi da app o tour; la strada sale nella foresta dal Jardim Botânico.',
      quando: 'Mattina con il cielo limpido.',
      tempo: '1 ora con la strada',
      costo: 'Libero',
      lat: -22.97316,
      lng: -43.24976,
      consiglio: 'Non salire a piedi sulle strade della foresta: meglio un tour o un\'auto con autista.',
    },
    {
      nome: 'Jardim Botânico',
      testo:
        'Il giardino botanico fondato nel 1808 ai piedi del Corcovado, con il viale delle palme imperiali, le serre delle orchidee e delle bromelie e le scimmie e i tucani tra gli alberi. Da molti punti si vede il Cristo in alto.',
      come: 'In taxi o app da Ipanema e Leblon, 10-15 minuti; biglietti anche online.',
      quando: 'Mattina presto, con il fresco e gli animali più attivi.',
      tempo: '2-3 ore',
      costo: '80 R$ per gli stranieri, circa 14 € (2026)',
      orari: 'Arboreto da giovedì a martedì 8-17, il mercoledì 11-17; chiuso il 25 dicembre e il 1° gennaio',
      url: 'https://www.gov.br/jbrj/pt-br/assuntos/visitacao/horarios-e-ingressos',
      lat: -22.9675,
      lng: -43.22389,
    },
    {
      nome: 'Santa Teresa e il bonde',
      testo:
        'Il quartiere sulla collina con ville storiche, atelier e il tram giallo, il bonde, che parte dal centro e attraversa gli archi di Lapa. Dal quartiere si scende a piedi lungo la Escadaria Selarón, la scalinata coperta di piastrelle colorate.',
      come: 'Il bonde parte dalla stazione Carioca, in centro, vicino alla metro Carioca; in alternativa taxi o app fino a Largo dos Guimarães.',
      quando: 'Di giorno, nei feriali, quando il tram è meno pieno.',
      tempo: '2-3 ore',
      costo: 'Bonde 20 R$ andata e ritorno, circa 3,5 €; scalinata libera (2026)',
      orari: 'Bonde tutti i giorni 8-17 sulla linea principale',
      url: 'https://riotur.rio/',
      lat: -22.9217,
      lng: -43.18605,
      consiglio: 'Ci si va di giorno e si rientra in app.',
    },
    {
      nome: 'Pão de Açúcar',
      testo:
        'Il monolite di granito all\'ingresso della baia di Guanabara, l\'altra grande vista di Rio, con il Cristo dall\'altra parte della città. La funivia sale in due tratte, prima al Morro da Urca e poi in cima.',
      come: 'Funivia dalla stazione di Praia Vermelha, nel quartiere di Urca.',
      quando: 'Tardo pomeriggio, per il tramonto sulla baia e la città che si accende.',
      tempo: '2-3 ore',
      costo: '205 R$ il biglietto intero, circa 35 €; la tariffa ridotta vale solo per i brasiliani (2026)',
      orari: 'Da lunedì a venerdì 8:30-21, sabato e domenica 7:30-21; ultimo imbarco alle 19:30',
      url: 'https://www.bondinho.com.br/',
      lat: -22.94949,
      lng: -43.15616,
      consiglio: 'Arrivare un\'ora prima del tramonto per evitare la coda.',
    },
  ],
  programmi: [
    {
      titolo: 'Mezza giornata: il Cristo',
      tappe: [
        'Treno delle 8 da Cosme Velho (check-in 40 minuti prima)',
        'Un\'ora e mezza sulla terrazza e alla cappella',
        'Discesa e pranzo a Laranjeiras o in Zona Sul',
      ],
    },
    {
      titolo: '1 giorno: il Cristo e le due viste',
      tappe: [
        'Mattina: Cristo Redentor con la prima corsa',
        'Pranzo e pomeriggio al Jardim Botânico e al Parque Lage',
        'Tramonto dal Pão de Açúcar',
      ],
    },
    {
      titolo: '2 giorni: il Cristo e la foresta',
      tappe: [
        'Giorno 1: programma da 1 giorno',
        'Giorno 2: Floresta da Tijuca e Cascatinha al mattino, Vista Chinesa',
        'Pomeriggio: bonde e Santa Teresa, discesa dalla Escadaria Selarón',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Trem do Corcovado, adulti',
      prezzo: '139 R$ (circa 24 €)',
      include: 'Treno andata e ritorno da Cosme Velho e accesso al monumento; valido per ogni nazionalità',
      dove: 'tremdocorcovado.rio, app, call center o WhatsApp ufficiali',
    },
    {
      tipo: 'Trem do Corcovado, bambini 7-11 anni',
      prezzo: '112 R$ (circa 19 €)',
      include: 'Come l\'adulto; serve un documento con l\'età. Fino a 6 anni gratis in braccio a un adulto',
      dove: 'tremdocorcovado.rio',
    },
    {
      tipo: 'Trem do Corcovado, over 60 e studenti',
      prezzo: '74 R$ over 60, 112 R$ studenti (circa 13-19 €)',
      include: 'Solo per cittadini brasiliani e residenti con documento',
      dove: 'tremdocorcovado.rio',
    },
    {
      tipo: 'Van ufficiale da Paineiras',
      prezzo: 'circa 87 R$ (circa 15 €)',
      include: 'Van andata e ritorno dal centro visitatori e accesso al monumento',
      dove: 'paineirascorcovado.com.br',
    },
    {
      tipo: 'Van ufficiale da Copacabana o Largo do Machado',
      prezzo: 'più della van da Paineiras, secondo la data',
      include: 'Van andata e ritorno dallo stesso punto e accesso al monumento',
      dove: 'paineirascorcovado.com.br',
    },
    {
      tipo: 'Pão de Açúcar, funivia',
      prezzo: '205 R$ (circa 35 €)',
      include: 'Le due tratte andata e ritorno; ridotto solo per i brasiliani',
      dove: 'bondinho.com.br o biglietteria',
    },
    {
      tipo: 'Jardim Botânico',
      prezzo: '80 R$ per gli stranieri (circa 14 €)',
      include: 'Ingresso all\'arboreto',
      dove: 'Online o biglietteria',
    },
  ],
  mesi: [
    { voto: 3, folla: 'alta', nota: 'Piena estate e vacanze brasiliane: caldo, temporali pomeridiani e nuvole frequenti in vetta.' },
    { voto: 2, folla: 'alta', nota: 'Il Carnevale riempie la città e fa salire i prezzi; caldo e piogge.' },
    { voto: 3, folla: 'media', nota: 'Ancora caldo e piovoso, ma dopo il Carnevale la folla cala.' },
    { voto: 4, folla: 'media', nota: 'Temperature in calo e meno pioggia; Pasqua e Tiradentes, il 21, portano gente.' },
    { voto: 5, folla: 'bassa', nota: 'Inizia la stagione secca: aria più limpida e poca folla.' },
    { voto: 4, folla: 'bassa', nota: 'Inverno mite e secco, con le feste juninas nei quartieri.' },
    { voto: 4, folla: 'media', nota: 'Secco e fresco, ma con le vacanze scolastiche brasiliane.' },
    { voto: 5, folla: 'bassa', nota: 'Uno dei mesi più asciutti, con buona visibilità.' },
    { voto: 4, folla: 'media', nota: 'Ancora secco, temperature in salita; festa nazionale il 7.' },
    { voto: 4, folla: 'media', nota: 'Primavera, con le prime piogge; festa nazionale il 12.' },
    { voto: 3, folla: 'media', nota: 'Più caldo e umido, festivi il 15 e il 20.' },
    { voto: 2, folla: 'alta', nota: 'Natale e Capodanno: affluenza fuori scala, caldo e piogge.' },
  ],
  zone: [
    {
      nome: 'Copacabana',
      perChi: 'Chi cerca il lungomare e i prezzi più bassi',
      testo: 'Da qui partono anche le van ufficiali per il Cristo, in Praça do Lido. Il lungomare è sempre vivo, ma alcune vie interne sono meno sicure di notte.',
      fascia: '50-180 €',
    },
    {
      nome: 'Ipanema e Leblon',
      perChi: 'Chi vuole la zona più curata',
      testo: 'Mare, ristoranti e metro vicina; Jardim Botânico, Parque Lage e Cosme Velho sono a pochi minuti in taxi.',
      fascia: '90-250 €',
    },
    {
      nome: 'Santa Teresa',
      perChi: 'Chi cerca atmosfera e pousadas in ville storiche',
      testo: 'In collina, vicino a Cosme Velho e al centro; strade ripide, e la sera conviene spostarsi in app.',
      fascia: '60-150 €',
    },
  ],
  gite: [
    {
      nome: 'Copacabana, Ipanema e l\'Arpoador',
      distanza: '15-20 minuti dal Corcovado',
      come: 'In taxi o app, oppure in metro dal Largo do Machado.',
      testo: 'Le spiagge che si vedono dalla terrazza del Cristo, con il tramonto applaudito dalla Pedra do Arpoador.',
      link: '/destinazioni/brasile/rio-de-janeiro',
    },
    {
      nome: 'Niterói e il MAC',
      distanza: '20 minuti di traghetto',
      come: 'Barca dalla stazione di Praça XV, in centro, poi a piedi o in app fino al museo.',
      testo: 'Il Museo d\'Arte Contemporanea di Oscar Niemeyer sulla scogliera, con la vista migliore su Rio, il Pão de Açúcar e il Corcovado.',
    },
    {
      nome: 'Petrópolis',
      distanza: 'circa 70 km, 1,5 ore',
      come: 'Bus dalla rodoviária Novo Rio o auto con autista.',
      testo: 'La città imperiale sulle montagne, con il Museo Imperiale nel palazzo di Pietro II e il fresco della Serra dos Órgãos.',
    },
    {
      nome: 'Ilha Grande e Paraty',
      distanza: 'circa 150 km, 2,5-3 ore più la barca',
      come: 'Van e barca combinate dalla Zona Sul; meglio con almeno una notte.',
      testo: 'La Costa Verde: un\'isola senza auto coperta di foresta atlantica e un borgo coloniale sul mare, insieme nel sito UNESCO.',
      link: '/destinazioni/brasile/costa-verde',
    },
  ],
  faq: [
    {
      domanda: 'Meglio il treno o la van per salire al Cristo Redentor?',
      risposta:
        'Il treno da Cosme Velho (139 R$) è il più bello, perché attraversa la foresta della Tijuca; le van ufficiali partono anche da Copacabana e Largo do Machado e da Paineiras costano meno, circa 87 R$. Entrambi comprendono l\'accesso al monumento.',
    },
    {
      domanda: 'A che ora conviene andare?',
      risposta:
        'Con la prima corsa delle 8: c\'è meno gente e la statua è più spesso libera dalle nuvole, che tendono a salire verso mezzogiorno.',
    },
    {
      domanda: 'Bisogna prenotare?',
      risposta:
        'Sì, conviene comprare online il biglietto con giorno e orario, soprattutto nei weekend, a dicembre e gennaio. Per il treno il check-in in biglietteria va fatto almeno 40 minuti prima.',
    },
    {
      domanda: 'Si può salire a piedi al Corcovado?',
      risposta:
        'Sì, con il sentiero che parte dal Parque Lage: è ripido, ha un tratto con catene e l\'accesso chiude alle 15. In cima l\'accesso al monumento si paga a parte, con vendita dalle 8 alle 17.',
    },
    {
      domanda: 'Cosa succede se il Cristo è tra le nuvole?',
      risposta:
        'Capita in ogni stagione, anche in quella secca: conviene guardare le webcam e il meteo la mattina stessa e tenere un giorno di margine nel programma.',
    },
    {
      domanda: 'Ci sono sconti per i turisti stranieri?',
      risposta:
        'Solo per i bambini: 112 R$ tra 7 e 11 anni e gratis fino a 6 anni in braccio. Le tariffe ridotte per over 60 e studenti valgono solo per brasiliani e residenti.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/cristo-redentore/vista-pan-di-zucchero.jpg',
      alt: 'Visitatori sulla terrazza del Corcovado davanti alla baia di Guanabara, con il Pão de Açúcar e le isole all\'orizzonte',
    },
    {
      src: '/images/meraviglie/cristo-redentore/statua-dettaglio.jpg',
      alt: 'Il volto del Cristo Redentor visto dal basso, contro il cielo azzurro con nuvole bianche',
    },
    {
      src: '/images/meraviglie/cristo-redentore/trem-cosme-velho.jpg',
      alt: 'Un treno rosso del Trem do Corcovado alla stazione di Cosme Velho, tra i palazzi e il verde della collina',
    },
    {
      src: '/images/meraviglie/cristo-redentore/parque-lage.jpg',
      alt: 'La villa del Parque Lage con la fontana e le palme, sotto la parete di roccia del Corcovado con il Cristo in cima',
    },
    {
      src: '/images/meraviglie/cristo-redentore/cascatinha-tijuca.jpg',
      alt: 'La Cascatinha Taunay che scende tra le rocce e la vegetazione della Floresta da Tijuca',
    },
    {
      src: '/images/meraviglie/cristo-redentore/bonde-santa-teresa.jpg',
      alt: 'Il tram giallo di Santa Teresa sui binari, con i grattacieli del centro di Rio sullo sfondo',
    },
  ],
}
