import type { Destinazione } from '@/lib/types'

// Destinazioni dell'Irlanda del Nord per il viaggio «Le due Irlande»
// (src/content/viaggi/98-irlanda-due-irlande.md). Schede in forma di guida, senza ricordi di Rick.
// Verificate a novembre 2026 su discovernorthernireland.com (turismo della pace), visitbelfast.com
// (tour in taxi), National Trust (Giant's Causeway), titanicbelfast.com e Wikipedia per storia e numeri.
// Sui Troubles il tono è descrittivo: si riportano i fatti e le due letture, senza schierarsi.

export const destinazioniIrlandaDelNord: Destinazione[] = [
  {
    slug: 'belfast',
    paeseSlug: 'irlanda-del-nord',
    ordine: 1,
    nome: 'Belfast',
    tipologia: ['città', 'storia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "È stata l'ultima tappa del mio giro in auto delle due Irlande: il tour dei murales e dei peace walls, il Titanic Belfast e poi la strada di rientro verso Dublino.",
    introduzione:
      'La capitale dell\'Irlanda del Nord. È la città dove il Titanic fu progettato e varato, e quella dove i Troubles hanno lasciato i segni più visibili: i murales di Falls Road e Shankill Road e i peace walls che ancora separano alcuni quartieri.',
    percheAndarci:
      'Per capire le due Irlande. Un giro con una guida del posto tra i murales e i muri della pace spiega più di qualsiasi libro, e la sera la città è vivace e tranquilla.',
    cosaVedere: ['I murales e il Peace Wall di Cupar Way, tra Falls e Shankill', 'Titanic Belfast e la SS Nomadic', 'Belfast City Hall', 'La Crumlin Road Gaol'],
    cosaFare: [
      'Un tour in black taxi o a piedi con una guida locale tra i murales e i peace walls',
      'La mattina o il pomeriggio a Titanic Belfast',
      'La sala sui Troubles della City Hall, con le testimonianze di chi li ha vissuti',
    ],
    comeArrivare: 'In auto dalla Causeway Coast o da Dublino; treni e bus collegano Belfast e Dublino.',
    comeSpostarsi: 'A piedi in centro, taxi per i quartieri ovest e per il Titanic Quarter.',
    periodoMigliore: 'tutto l\'anno; attorno al 12 luglio ci sono parate e falò, e conviene informarsi prima',
    costi: 'Titanic Belfast 24,95 £ adulti, SS Nomadic compresa (2026). I tour dei murales hanno prezzi propri, da chiedere all\'operatore.',
    erroriDaEvitare: [
      'Girare da soli tra i murales senza sapere cosa si guarda: con una guida si capisce chi li ha dipinti e perché',
      'Fare commenti politici con chi non si conosce, o fotografare persone e case senza chiedere',
      'Scegliere un tour che racconta una sola parte: ci sono operatori che fanno sentire tutte e due le versioni',
    ],
    luoghi: [
      {
        nome: 'Murales e peace walls',
        testo:
          'I peace walls, i «muri della pace», nascono nel 1969 come barriere provvisorie tra quartieri in prevalenza cattolici e nazionalisti e quartieri in prevalenza protestanti e unionisti. Sono diventati permanenti. Nel 2013 il governo dell\'Irlanda del Nord si era dato l\'obiettivo di toglierli tutti entro il 2023, con il consenso degli abitanti: il termine è passato e molti sono ancora in piedi. Uno dei più noti è quello di Cupar Way, tra Falls Road e Shankill Road. Sulle due strade ci sono i murales delle due comunità, quelli repubblicani da una parte e quelli lealisti dall\'altra.',
        come:
          'Con una guida. Discover Northern Ireland elenca tour in black taxi guidati da persone cresciute in città e tour a piedi. Alcuni tour a piedi in West Belfast sono guidati da ex prigionieri politici.',
        quando: 'Di giorno.',
        tempo: '1,5-2 ore',
        costo: 'secondo l\'operatore',
        url: 'https://discovernorthernireland.com/things-to-do/peace-tourism/',
        consiglio: 'Prima di prenotare chiedere com\'è costruito il racconto: i tour migliori fanno sentire più di una voce.',
      },
      {
        nome: 'Titanic Belfast',
        testo:
          'Aperto il 31 marzo 2012 sull\'area dell\'ex cantiere Harland & Wolff, accanto agli scali dove il Titanic fu costruito e varato. Nove gallerie raccontano la nave dal progetto al viaggio inaugurale. Il biglietto comprende la SS Nomadic, l\'ultima nave della White Star Line rimasta.',
        come: 'Nel Titanic Quarter, a piedi lungo il fiume o in taxi.',
        quando: 'Prenotare un orario d\'ingresso online.',
        tempo: '2-3 ore',
        costo: '24,95 £ adulti (2026)',
        url: 'https://www.titanicbelfast.com',
      },
      {
        nome: 'Belfast City Hall',
        testo: 'Il municipio inaugurato il 1° agosto 1906, nel centro della città. Dentro c\'è un\'esposizione permanente, aperta nel 2017, e si fanno visite guidate che entrano anche nelle sale di solito chiuse. Nei giardini c\'è il memoriale del Titanic, dedicato nel 1920.',
        come: 'In centro, Donegall Square.',
        tempo: '1 ora',
        costo: 'visite guidate su prenotazione',
      },
      {
        nome: 'Crumlin Road Gaol',
        testo: 'Un carcere vittoriano aperto nel 1846 e rimasto in funzione per 150 anni, fino al 1996. La visita guidata racconta la vita quotidiana di detenuti e guardie.',
        come: 'A nord del centro, in taxi o a piedi.',
        tempo: '1,5 ore',
        costo: 'prezzo sul sito ufficiale',
      },
    ],
    attenzioni: [
      'Murales e bandiere sono identità per chi vive lì: si guardano con rispetto.',
      'Attorno al 12 luglio si controllano le notizie locali prima di spostarsi in città.',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['irlanda-due-irlande'],
    imageAlt: 'La Belfast City Hall in Donegall Square, Belfast',
    immagine: '/images/irlanda-del-nord/belfast.webp',
  },
  {
    slug: 'causeway-coastal-route',
    paeseSlug: 'irlanda-del-nord',
    ordine: 2,
    nome: 'Causeway Coastal Route',
    tipologia: ['costa', 'natura', 'on the road'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato durante il giro in auto delle due Irlande: un giorno da Derry lungo la costa, con il Dunluce Castle, il Giant's Causeway, Carrick-a-Rede e le Dark Hedges.",
    introduzione:
      'La strada costiera della contea di Antrim. Le tappe più note sono il Giant\'s Causeway, con più di 40.000 colonne di basalto, il Dunluce Castle sulla scogliera, il ponte di corda di Carrick-a-Rede e, nell\'interno, il viale di faggi delle Dark Hedges.',
    percheAndarci: 'Per il tratto di costa più spettacolare dell\'Irlanda del Nord, tra Derry e Belfast.',
    cosaVedere: ['Il Giant\'s Causeway', 'Il Dunluce Castle', 'Il ponte di Carrick-a-Rede', 'Le Dark Hedges'],
    cosaFare: ['Scendere al Causeway a piedi presto la mattina', 'Attraversare il ponte di Carrick-a-Rede se il vento lo permette', 'Passare dalle Dark Hedges a piedi, all\'alba o al tramonto'],
    comeArrivare: 'In auto da Derry verso est, poi lungo la costa fino a Belfast.',
    comeSpostarsi: 'Auto.',
    periodoMigliore: 'da maggio a settembre; d\'estate partire presto',
    costi: 'Giant\'s Causeway: si arriva agli scogli a piedi gratis; Visitor Experience con parcheggio 15 £ adulti (2026); parcheggio alternativo della Causeway Coast Way 12 £ per auto. Carrick-a-Rede circa 14-15,50 £ (dato da verificare sul sito del National Trust).',
    erroriDaEvitare: [
      'Pensare che il Causeway sia a pagamento: agli scogli si va gratis, il biglietto è per centro visitatori e parcheggio',
      'Cercare di entrare in auto alle Dark Hedges: la strada è chiusa al traffico',
      'Salire sugli scogli bagnati vicino al mare: le colonne sono scivolose',
    ],
    luoghi: [
      {
        nome: 'Giant\'s Causeway',
        testo: 'Circa 40.000 colonne di basalto, in gran parte esagonali, formate tra 50 e 60 milioni di anni fa. È patrimonio UNESCO dal 1986 e in gran parte lo gestisce il National Trust.',
        come: 'Agli scogli si arriva a piedi gratis. Non serve passare dal centro visitatori, che è a pagamento. Regole del parcheggio e biglietti sul sito del National Trust.',
        quando: 'La mattina presto o in tarda giornata. Orari del centro visitatori sul sito del National Trust.',
        tempo: '2 ore',
        costo: 'scogli gratis; Visitor Experience a pagamento, prezzo sul sito del National Trust',
        url: 'https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway',
      },
      {
        nome: 'Dunluce Castle',
        testo: 'Le rovine di un castello sul bordo di una scogliera di basalto, tra Portballintrae e Portrush. Il primo castello è del Duecento; nel 1584 lo prese Sorley Boy MacDonnell, e nel 1588 vi furono montati i cannoni della Girona, una galeazza dell\'Invencible Armada naufragata lì vicino. Fu abbandonato nel 1690. Oggi è un monumento statale.',
        come: 'In auto, sulla strada costiera.',
        tempo: '45 minuti-1 ora',
        costo: 'prezzo sul sito ufficiale',
      },
      {
        nome: 'Carrick-a-Rede',
        testo: 'Un ponte di corda lungo 20 metri e sospeso a 30 metri sopra gli scogli, che porta a un isolotto. Secondo il National Trust i pescatori di salmone costruiscono ponti verso l\'isola da più di 350 anni.',
        come: 'In auto fino al parcheggio del National Trust, poi a piedi lungo la scogliera.',
        quando: 'Aperto tutto l\'anno, se il tempo lo permette.',
        tempo: '1-1,5 ore',
        costo: 'a pagamento, prezzo sul sito del National Trust',
      },
      {
        nome: 'Dark Hedges',
        testo: 'Un viale di faggi sulla Bregagh Road, tra Armoy e Stranocum. Li piantò James Stuart verso il 1775 lungo l\'ingresso della sua tenuta: erano più di 150, oggi ne restano circa 75, perché diversi sono caduti con le tempeste. È diventato famoso come la «Strada del Re» della serie Il Trono di Spade.',
        come: 'Dal 30 ottobre 2017 la strada è chiusa al traffico per proteggere le radici: si parcheggia nei dintorni e si va a piedi.',
        quando: 'All\'alba o al tramonto, con meno gente.',
        tempo: '30-45 minuti',
        costo: 'gratis',
      },
    ],
    attenzioni: ['Vento e onde sulla costa: sugli scogli del Causeway si resta lontani dal bordo del mare.'],
    esperienzeSlugs: [],
    tripSlugs: ['irlanda-due-irlande'],
    imageAlt: 'Le colonne esagonali di basalto del Giant\'s Causeway, sulla costa di Antrim',
    immagine: '/images/irlanda-del-nord/causeway-coastal-route.webp',
  },
  {
    slug: 'derry-londonderry',
    paeseSlug: 'irlanda-del-nord',
    ordine: 3,
    nome: 'Derry/Londonderry',
    tipologia: ['città', 'storia'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono arrivato in auto da Galway durante il giro delle due Irlande, passando il confine senza controlli: una notte qui, prima della costa di Antrim.",
    introduzione:
      'La seconda città dell\'Irlanda del Nord, sul fiume Foyle, con le mura del Seicento ancora intere. Ha due nomi, e già il nome racconta la sua storia. Qui, nel quartiere del Bogside, il 30 gennaio 1972 ci fu il Bloody Sunday.',
    percheAndarci: 'Per camminare sulle mura e per i musei che raccontano i Troubles da vicino, nella città dove sono cominciati e dove la pace si vede, a partire da un ponte.',
    cosaVedere: ['Le mura della città', 'Il Bogside e i suoi murales', 'Il Museum of Free Derry', 'Il Peace Bridge sul Foyle', 'La Guildhall'],
    cosaFare: ['Il giro completo delle mura a piedi', 'Un tour del Bogside con una guida locale', 'Attraversare il Peace Bridge fino al Waterside'],
    comeArrivare: 'In auto da Galway verso nord, passando il confine senza controlli; poi verso est per la Causeway Coast.',
    comeSpostarsi: 'A piedi.',
    periodoMigliore: 'tutto l\'anno',
    costi: 'Le mura e il Peace Bridge sono gratis; i musei hanno prezzi propri.',
    erroriDaEvitare: ['Passarci solo di corsa sulla strada per la costa: la città vale almeno una giornata'],
    luoghi: [
      {
        nome: 'Perché due nomi',
        testo:
          '«Derry» viene dall\'irlandese Doire, «bosco di querce». Nel 1613, durante la Plantation of Ulster, la colonizzazione inglese e scozzese dell\'Ulster, la città diventò Londonderry, perché a rifondarla furono le corporazioni di Londra. Il nome ufficiale della città resta Londonderry, confermato da una sentenza dell\'Alta Corte nel 2007. I nazionalisti in genere dicono Derry, molti unionisti preferiscono Londonderry, e nella conversazione di tutti i giorni anche molti protestanti dicono Derry. Per questo nei cartelli turistici e qui si scrive spesso «Derry/Londonderry».',
      },
      {
        nome: 'Le mura',
        testo: 'Costruite tra il 1613 e il 1619, girano tutte attorno al centro vecchio e si percorrono a piedi, tra cannoni e porte. Dall\'alto si vede il Bogside.',
        come: 'A piedi, accessi da più porte del centro.',
        tempo: '1-1,5 ore',
        costo: 'gratis',
      },
      {
        nome: 'Bogside e Museum of Free Derry',
        testo:
          'Il quartiere nazionalista sotto le mura. Il 30 gennaio 1972, durante una marcia per i diritti civili, i paracadutisti britannici spararono e uccisero 13 civili disarmati; un altro uomo morì più tardi per le ferite. Un primo rapporto, quello Widgery del 1972, accettò in gran parte la versione dei soldati. L\'inchiesta Saville, pubblicata il 15 giugno 2010, concluse che nessuna delle persone colpite era una minaccia, e il primo ministro David Cameron chiese scusa a nome del governo britannico, definendo i fatti «ingiustificati e ingiustificabili». Il Museum of Free Derry, del Bloody Sunday Trust, racconta il movimento per i diritti civili, Free Derry e il Bloody Sunday.',
        come: 'A piedi dalle mura. Ci sono tour guidati del Bogside e dei murales.',
        tempo: '2 ore',
        costo: 'Museum of Free Derry 10 £ adulti, sconto online (2026)',
      },
      {
        nome: 'Peace Bridge',
        testo: 'Una passerella pedonale di 235 metri sul Foyle, aperta il 25 giugno 2011. Collega il Cityside, in prevalenza nazionalista, al Waterside, in prevalenza unionista, ed è stata finanziata anche dal programma europeo per la pace PEACE III.',
        come: 'A piedi dalla Guildhall.',
        tempo: '30 minuti',
        costo: 'gratis',
      },
    ],
    attenzioni: ['Nel Bogside si fotografano i murales, non le persone, e si ascolta più di quanto si parli.'],
    esperienzeSlugs: [],
    tripSlugs: ['irlanda-due-irlande'],
    imageAlt: 'Il Peace Bridge sul fiume Foyle a Derry/Londonderry',
    immagine: '/images/irlanda-del-nord/derry-londonderry.webp',
  },
]
