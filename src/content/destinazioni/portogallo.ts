import type { Destinazione } from '@/lib/types'

// Prima uscita portoghese dell'archivio, collegata al viaggio "Lisbona in un
// weekend lungo" (src/content/viaggi/59-lisbona-weekend.md, dati in
// src/content/viaggi-dati/lisbona-weekend.ts). Due destinazioni distinte,
// come da indicazione: Lisbona e Sintra, la seconda come gita di un giorno
// dalla prima. Nessuna delle due è stata visitata di persona:
// visitataPersonalmente resta false su entrambe e il campo miaEsperienza,
// facoltativo nel tipo, è assente di proposito — niente ricordo inventato,
// solo fatti verificati con ricerca (stesso trattamento usato in
// src/content/paesi/polonia.ts). Nessun nome di hotel, ristorante o
// operatore è stato inventato. Prezzi e orari (soprattutto quelli di Sintra)
// cambiano spesso e vanno riverificati sui canali ufficiali prima di partire.

export const destinazioniPortogallo: Destinazione[] = [
  {
    slug: 'lisbona',
    paeseSlug: 'portogallo',
    ordine: 1,
    nome: 'Lisbona',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '3-4 giorni, compresa la gita fuori porta a Sintra',
    visitataPersonalmente: false,
    introduzione:
      'La capitale del Portogallo sta su sette colline affacciate sull\'estuario del Tago. In gran parte è stata ricostruita dopo il terremoto del 1755, che diede forma alla Baixa: il quartiere basso dal disegno regolare illuminista che oggi separa dal fiume i quartieri più antichi e collinari, Alfama e Bairro Alto.',
    percheAndarci:
      'È una città da vivere in verticale, tra salite, miradouros (belvedere) e mezzi storici pensati per le sue colline. In uno spazio compatto ci sono il quartiere più antico e stratificato (Alfama) e il centro commerciale ricostruito dopo il terremoto (Baixa-Chiado). A un\'ora di treno c\'è Sintra, uno dei paesaggi da favola più fotografati d\'Europa.',
    cosaVedere: [
      'L\'Alfama, il quartiere più antico, quasi intatto dopo il terremoto del 1755 grazie alla sua struttura araba di vicoli stretti. Qui si ascolta il fado, il canto tradizionale portoghese, nelle case da fado (casas de fado) sparse tra i vicoli',
      'Il tram 28, la linea storica che attraversa Alfama, Graça, Baixa ed Estrela su vagoni in legno d\'epoca: il modo più classico (e più affollato) di vedere le colline della città da dentro',
      'Belém, sul lungofiume, da dove partirono le grandi spedizioni portoghesi dell\'epoca delle scoperte. Qui ci sono il Mosteiro dos Jerónimos, capolavoro manuelino patrimonio UNESCO, e la Torre de Belém, la fortezza simbolo della città sull\'acqua, anche lei UNESCO',
      'Baixa e Chiado, il centro ricostruito dopo il 1755 su una griglia illuminista, con la Praça do Comércio sul Tago e l\'Elevador de Santa Justa, l\'ascensore panoramico neogotico in ferro battuto',
      'I miradouros, i belvedere sparsi sulle colline: al tramonto il Miradouro da Senhora do Monte e il Miradouro da Graça sono tra i più belli',
      'Sintra, patrimonio UNESCO dal 1995, con il Palácio Nacional da Pena e la Quinta da Regaleira (c\'è la destinazione dedicata)',
    ],
    cosaFare: [
      'Prendere il tram 28 presto la mattina, prima delle 9, per evitare la calca e i borseggiatori che lo hanno reso famoso quanto i suoi panorami',
      'Ascoltare il fado dal vivo, la sera, in una casa da fado dell\'Alfama',
      'Mangiare un pastel de nata alla Pastéis de Belém, la pasticceria originale del 1837, dove è nata la ricetta',
      'Salire ai miradouros al tramonto, con un bicchiere di vino preso in un chiosco all\'aperto (esplanada)',
      'Dedicare una giornata intera a Sintra, partendo il prima possibile (ci sono la destinazione e l\'esperienza dedicate)',
    ],
    doveDormire:
      'Baixa-Chiado è la zona più centrale e pratica, ben collegata con il resto della città. L\'Alfama ha più carattere ed è più vissuta, ma le salite sono più ripide e le strade più strette. Da entrambe si raggiunge a piedi gran parte delle attrazioni del centro.',
    doveMangiare:
      'Il pastel de nata, sfoglia con crema pasticcera e cannella, si trova ovunque, ma è nato alla Pastéis de Belém. Il bacalhau (baccalà) si prepara in centinaia di varianti. Al Bairro Alto e in Alfama si mangiano i petiscos, piccoli piatti da dividere come le tapas spagnole. Nei minuscoli chioschi storici della Baixa si beve la ginjinha, il liquore di amarena servito in bicchierini.',
    comeArrivare:
      'L\'Aeroporto Humberto Delgado (LIS) è a circa 7 km dal centro: con la metro (linea rossa) si arriva in circa 20-25 minuti, oppure ci sono autobus, taxi e app di ride-hailing. Dall\'Italia non c\'è un treno diretto comodo, quindi si arriva quasi sempre in aereo.',
    comeSpostarsi: 'Le salite sono tante, e per questo ci sono i tram storici, le funicolari (elevadores) e l\'Elevador de Santa Justa. Metro, autobus e treni suburbani si pagano con la carta contactless Viva Viagem/Navegante. Il centro si gira bene anche a piedi, con un po\' di fiato in più per le colline.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e molto affollata, soprattutto sul tram 28 e a Sintra; novembre-marzo è mite ma piovoso',
    costi: 'città ancora abbastanza economica per l\'Europa occidentale, anche se i prezzi salgono: pranzo semplice 10-12€, cena normale 15-20€ a testa, biglietto di tram o autobus circa 2€',
    erroriDaEvitare: [
      'Salire sul tram 28 nelle ore centrali sperando in un posto e in un po\' di tranquillità: è tra i mezzi pubblici più affollati d\'Europa e tra i preferiti dai borseggiatori',
      'Organizzare un giro a piedi come se Lisbona fosse in pianura',
      'Andare a Sintra senza partire presto: le code per il Palácio da Pena diventano lunghissime già a metà mattina',
      'Cercare il "vero" pastel de nata solo alla Pastéis de Belém: anche quelli delle pasticcerie di quartiere sono ottimi, e senza fila',
    ],
    confronti: [
      {
        titolo: 'Come arrivare a Sintra da Lisbona',
        introduzione: 'A Sintra si può andare da soli in treno o con un tour organizzato. La differenza principale è quanto tempo si è disposti a passare in coda fra un palazzo e l\'altro.',
        opzioni: [
          {
            nome: 'Treno da Rossio + biglietti online',
            sintesi: 'Treno regionale dalla stazione di Rossio (circa 40 minuti, corse molto frequenti), poi bus locale 434 o salita a piedi fino al Palácio da Pena, con gli ingressi comprati online in anticipo con orario',
            costo: 'treno circa 5€ a tratta, ingressi 15-25€ a sito',
            durata: 'giornata intera, partendo presto',
            pro: ['Costa poco', 'Orari e ritmo si decidono da soli', 'Non si dipende da un gruppo'],
            contro: ['Bus locale e code vanno organizzati da soli', 'Non c\'è una guida storica'],
            perChi: 'chi preferisce muoversi da solo e risparmiare',
          },
          {
            nome: 'Tour organizzato da Lisbona',
            sintesi: 'Transfer in minivan da Lisbona con guida, biglietti "salta fila" compresi e un itinerario che spesso tocca anche Cascais o la Boca do Inferno',
            costo: 'sui 70-100€ a persona',
            durata: 'giornata intera',
            pro: ['Nessuna logistica da organizzare', 'Spesso ingresso prioritario', 'Una guida che racconta la storia'],
            contro: ['Costa di più', 'Il ritmo lo decide il gruppo', 'Resta meno tempo per esplorare da soli'],
            perChi: 'chi non vuole occuparsi di trasporti e code, o ha poco tempo',
          },
        ],
        raccomandazione: 'Con la giornata libera e un minimo di organizzazione, il treno con i biglietti prenotati online è la scelta più efficiente. A Sintra conta poco come ci si arriva: conta partire presto la mattina.',
      },
    ],
    esperienzeSlugs: ['tram-28-alfama', 'pasteis-de-belem'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il tram 28 giallo illuminato di sera in una strada stretta di Lisbona, con la facciata bianca di una chiesa in fondo alla via',
    immagine: '/images/portogallo/lisbona.jpg',
  },
  {
    slug: 'sintra',
    paeseSlug: 'portogallo',
    ordine: 2,
    nome: 'Sintra',
    tipologia: ['storia', 'natura', 'arte'],
    giorniConsigliati: 'una giornata intera, come gita da Lisbona',
    visitataPersonalmente: false,
    introduzione:
      'Una cittadina fra colline boscose, circa 30 km a nord-ovest di Lisbona, patrimonio UNESCO dal 1995 come "Paesaggio culturale di Sintra". Per secoli ci hanno passato l\'estate la nobiltà e la famiglia reale portoghese, che vi hanno costruito palazzi e ville romantiche in una concentrazione unica in Europa, in un microclima più fresco e umido di quello di Lisbona.',
    percheAndarci:
      'Il Palácio Nacional da Pena, con le torri colorate in stile romantico ottocentesco in cima a una collina, è uno dei paesaggi più fotografati del Portogallo. La Quinta da Regaleira, con il pozzo iniziatico a spirale e i giardini esoterici, è tra le cose più insolite del paese. Per via delle code, però, è anche una delle giornate più impegnative di tutto l\'itinerario.',
    cosaVedere: [
      'Il Palácio Nacional da Pena, palazzo reale romantico dell\'Ottocento che mescola elementi gotici, manuelini, moreschi e rinascimentali, giallo e rosso acceso, in cima a una collina sopra la città',
      'La Quinta da Regaleira, villa con giardino esoterico di inizio Novecento, famosa per il "Poço Iniciático" (pozzo iniziatico): una scala a spirale che scende sottoterra tra simboli massonici e templari',
      'Il Castelo dos Mouros, le rovine del castello moresco del IX secolo, con vista su Sintra e, nelle giornate limpide, fino all\'oceano',
      'Il Palácio Nacional de Sintra, in centro, con le due enormi ciminiere coniche bianche che si vedono da tutta la valle',
      'Il centro storico di Sintra, piccolo e pedonale, con pasticcerie storiche note per i travesseiros (dolci di sfoglia ripieni di crema di mandorle) e le queijadas',
    ],
    cosaFare: [
      'Prendere il primo treno utile da Lisbona per essere tra i primi in coda al Palácio da Pena: è il consiglio che ripete chiunque abbia già fatto questa gita',
      'Prenotare online, prima di partire, i biglietti a fascia oraria per Pena e Regaleira, senza contare sull\'acquisto sul posto',
      'Usare il bus locale 434 tra la stazione, il centro e il Palácio da Pena, invece di fare a piedi la salita ripida nelle giornate calde',
      'Scendere nel pozzo iniziatico della Quinta da Regaleira, uno dei punti più fotografati e affollati: anche qui bisogna mettere in conto l\'attesa',
    ],
    doveDormire: 'Si visita in giornata da Lisbona, senza dormire a Sintra.',
    doveMangiare: 'Travesseiros e queijadas, i dolci tipici, in una delle pasticcerie storiche del centro. Per il resto ci sono soprattutto locali turistici intorno alla stazione e nel centro pedonale.',
    comeArrivare:
      'Con il treno regionale dalla stazione di Rossio a Lisbona: circa 40 minuti, con corse molto frequenti durante il giorno. È molto più semplice ed economico dell\'auto a noleggio, anche perché nel centro di Sintra, nei fine settimana e in alta stagione, il parcheggio scarseggia.',
    comeSpostarsi: 'Il bus locale 434 fa un giro circolare tra stazione, centro storico e Palácio da Pena. Il centro pedonale si gira a piedi, ma fra i siti principali (Pena, Regaleira, Castelo dos Mouros) si sale sempre, e le distanze sono più lunghe di quanto sembri sulla mappa.',
    periodoMigliore:
      'il clima va bene tutto l\'anno; il problema è la folla. Nei weekend e in alta stagione (giugno-agosto) le code ai palazzi principali diventano lunghissime già dalla tarda mattinata. In un giorno feriale, partendo il prima possibile, l\'attesa si riduce di molto in qualsiasi stagione.',
    costi: 'Palácio da Pena circa 20-25€, Quinta da Regaleira circa 15€, con sconti sui biglietti combinati; treno da Lisbona circa 5€ a tratta',
    erroriDaEvitare: [
      'Arrivare a metà mattina pensando di "fare tutto con calma": le code al Palácio da Pena e alla Quinta da Regaleira si allungano in fretta dopo le 10-11',
      'Non prenotare online i biglietti a fascia oraria: in alta stagione gli orari della mattina finiscono',
      'Sottovalutare distanze e dislivelli tra un sito e l\'altro: non è un centro compatto come Lisbona',
      'Voler vedere tutti e quattro i siti principali (Pena, Regaleira, Castelo dos Mouros, Palácio Nacional) in una giornata: con le code vere, di solito almeno uno va sacrificato',
    ],
    esperienzeSlugs: ['sintra-giornata-da-lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il Palácio Nacional da Pena di Sintra con le torri gialle e rosse che emergono dal bosco sotto un cielo azzurro',
    immagine: '/images/portogallo/sintra.jpg',
  },
]
