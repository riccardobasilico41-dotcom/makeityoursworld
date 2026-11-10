import type { Destinazione } from '@/lib/types'

// Prima uscita portoghese dell'archivio, collegata al viaggio "Lisbona in un
// weekend lungo" (src/content/viaggi/59-lisbona-weekend.md, dati in
// src/content/viaggi-dati/lisbona-weekend.ts), viaggio fatto da Rick. Due destinazioni
// distinte: Lisbona e Sintra, la seconda come gita di un giorno dalla prima.
// visitataPersonalmente è true su entrambe e il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome di
// hotel, ristorante o operatore è stato inventato. Prezzi e orari
// (soprattutto quelli di Sintra) cambiano spesso e vanno riverificati sui
// canali ufficiali prima di partire.

export const destinazioniPortogallo: Destinazione[] = [
  {
    slug: 'lisbona',
    paeseSlug: 'portogallo',
    ordine: 1,
    nome: 'Lisbona',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '3-4 giorni, compresa la gita fuori porta a Sintra',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato con amici per quattro giorni, tre notti, a piedi e con i mezzi: Alfama e il tram 28, Belém, Baixa e Chiado, più una giornata intera a Sintra.",
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
      'L\'Aeroporto Humberto Delgado (LIS) è a circa 7 km dal centro: con la metro (linea rossa) si arriva in circa 20-25 minuti, oppure ci sono autobus, taxi e app di ride-hailing. Dall\'Italia non c\'è un treno diretto comodo, quindi si arriva quasi sempre in aereo. La corsa in metro costa circa 1,90 € più 0,50 € per la carta Navegante ocasional, che si compra alle macchinette della stazione; il taxi a tassametro costa circa 12-20 € con i bagagli, Uber e Bolt circa 10-15 €.',
    comeSpostarsi: 'Le salite sono tante, e per questo ci sono i tram storici, le funicolari (elevadores) e l\'Elevador de Santa Justa. Metro, autobus e treni suburbani si pagano con la carta contactless Viva Viagem/Navegante. Il centro si gira bene anche a piedi, con un po\' di fiato in più per le colline.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e molto affollata, soprattutto sul tram 28 e a Sintra; novembre-marzo è mite ma piovoso',
    costi:
      'città ancora abbastanza economica per l\'Europa occidentale, anche se i prezzi salgono: pranzo semplice 10-12€, cena normale 15-20€ a testa, biglietto di tram o autobus circa 2€. Budget indicativo al giorno a persona, con la doppia divisa in due: basso 60-80 €, medio 110-150 €, alto oltre 220 €.',
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
    luoghi: [
      {
        "nome": "Alfama e Castelo de São Jorge",
        "testo": "Il quartiere più antico, sopravvissuto quasi intatto al terremoto del 1755, con vicoli, scale, panni stesi e le case da fado. Sopra, il castello medievale con le mura, i giardini e la vista sul Tago e sulla Baixa. In basso la Sé, la cattedrale romanica.",
        "come": "Si sale a piedi dalla Baixa per Rua da Madalena o con il tram 28. Il castello ha un ingresso da Largo do Chão da Feira, con una salita ripida.",
        "quando": "Al mattino presto per il castello, al tramonto per le terrazze. Di sera i locali di fado si riempiono dopo le 20.",
        "tempo": "mezza giornata",
        "costo": "castello circa 17 € (2026); Alfama gratuita",
        "orari": "Castello tutti i giorni dalle 9; chiusura alle 21 da marzo a ottobre e alle 18 d'inverno.",
        "lat": 38.7139,
        "lng": -9.1335,
        "url": "https://www.castelodesaojorge.pt/",
        "consiglio": "Perdersi nei vicoli senza mappa e scendere a piedi: la salita è la parte dura, la discesa è facile."
      },
      {
        "nome": "Belém: Mosteiro dos Jerónimos",
        "testo": "Monastero manuelino del Cinquecento, patrimonio UNESCO, con il chiostro a due piani coperto di decorazioni marinare e la tomba di Vasco da Gama in chiesa. Il portale sud è una delle opere più elaborate del Portogallo.",
        "come": "Dal centro con il tram 15 o con il treno da Cais do Sodré fino a Belém. Il biglietto serve per il chiostro; la chiesa ha orari propri.",
        "quando": "Chiostro da martedì a domenica 9:30-17:30, ultimo ingresso alle 17. Chiuso il lunedì, il 1 gennaio, la domenica di Pasqua, il 1 maggio, il 13 giugno e il 25 dicembre. Arrivare all'apertura: in tarda mattinata la fila si allunga.",
        "tempo": "1 ora e mezza",
        "costo": "Chiostro 18 €, 2026 (sito ufficiale)",
        "orari": "Martedì-domenica 9:30-17:30. Chiuso il lunedì.",
        "lat": 38.6979,
        "lng": -9.2068,
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "consiglio": "Comprare il biglietto sulla biglietteria online ufficiale per non fare la coda alla cassa. La chiesa ha un ingresso separato dal chiostro e merita anche da sola, per la tomba di Vasco da Gama."
      },
      {
        "nome": "Torre de Belém",
        "testo": "Fortezza manuelina sul Tago, costruita tra il 1514 e il 1519 e patrimonio UNESCO insieme ai Jerónimos. Il simbolo della città: bastioni, loggia e terrazza con vista sul fiume. Dentro le stanze sono piccole e la salita è stretta.",
        "come": "A piedi dai Jerónimos lungo il fiume. Il tram 15 e il treno fermano nelle vicinanze.",
        "quando": "Da martedì a domenica 9:30-17:30; chiusa il lunedì e negli stessi festivi dei Jerónimos. Può chiudere quando il meteo rende la visita poco sicura. Il tramonto la illumina bene da fuori.",
        "tempo": "45 minuti dentro, più la passeggiata",
        "costo": "15 €, 2026 (sito ufficiale)",
        "orari": "Martedì-domenica 9:30-17:30. Chiusa il lunedì.",
        "lat": 38.6916,
        "lng": -9.216,
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "consiglio": "Per una foto dalla riva, il lungofiume vicino al Padrão dos Descobrimentos è meglio dell'interno."
      },
      {
        "nome": "Pastéis de Belém",
        "testo": "La pasticceria che dal 1837 fa i pastéis de Belém con un'antica ricetta del Mosteiro dos Jerónimos. Dentro è un labirinto di sale piastrellate. Si mangiano caldi con cannella e zucchero a velo.",
        "come": "A pochi passi dai Jerónimos. Fermate del tram 15 e del treno vicine.",
        "quando": "Aperta tutti i giorni; orari sul sito ufficiale. La fila fuori scorre in fretta perché c'è un banco per l'asporto.",
        "tempo": "mezz'ora",
        "costo": "circa 1,50 € a pastel (2026)",
        "lat": 38.6975,
        "lng": -9.2032,
        "url": "https://pasteisdebelem.pt/",
        "consiglio": "Entrare nelle sale interne invece di restare in coda al banco: spesso c'è posto."
      },
      {
        "nome": "Baixa, Chiado e Praça do Comércio",
        "testo": "Il centro ricostruito dopo il 1755 con strade a griglia, la Praça do Comércio aperta sul Tago e l'Arco da Rua Augusta. L'Elevador de Santa Justa, ascensore del 1902, porta a un belvedere sulla città. Il Chiado ha librerie storiche e caffè.",
        "come": "A piedi dalla metro Baixa-Chiado o Terreiro do Paço. L'ascensore è gestito da Carris, con biglietto a parte.",
        "quando": "Mattina per la piazza senza folla. Il belvedere dell'ascensore si riempie nelle ore centrali.",
        "tempo": "mezza giornata",
        "costo": "gratuito; Arco da Rua Augusta a pagamento",
        "lat": 38.7075,
        "lng": -9.1364,
        "url": "https://www.carris.pt/",
        "consiglio": "Per la vista dall'alto, il Miradouro di Santa Luzia o la terrazza dell'Arco evita la coda dell'ascensore."
      },
      {
        "nome": "Tram 28 e miradouros",
        "testo": "La linea storica gialla che sale per Graça, Alfama, Baixa e Estrela. Per i belvedere: Santa Luzia, Portas do Sol, Senhora do Monte, Graça. Il tram è affollato; i belvedere si raggiungono anche a piedi.",
        "come": "Il tram parte da Martim Moniz o da Campo de Ourique. Si paga con la carta ricaricabile dei trasporti o con il biglietto a bordo, che costa di più.",
        "quando": "Presto la mattina o in serata: nelle ore centrali è pieno. I miradouros al tramonto.",
        "tempo": "2 ore per il giro",
        "costo": "corsa circa 3 € a bordo, meno con la carta Navegante; miradouros gratuiti",
        "lat": 38.7118,
        "lng": -9.1301,
        "url": "https://www.carris.pt/",
        "consiglio": "Salire al capolinea per avere un posto a sedere."
      },
      {
        "nome": "LX Factory e Cais do Sodré",
        "testo": "LX Factory è un complesso industriale riconvertito sotto il ponte 25 de Abril, con librerie, negozi e ristoranti. Nel vicino Cais do Sodré c'è il Time Out Market, nel mercato della Ribeira, con banchi di cibo di chef.",
        "come": "LX Factory: tram 15 o bus dal centro. Time Out Market: metro Cais do Sodré, a piedi dalla Baixa.",
        "quando": "LX Factory nel pomeriggio e la domenica con il mercato. Il Time Out Market a pranzo, ma è affollato.",
        "tempo": "2 ore",
        "costo": "ingresso libero",
        "lat": 38.7034,
        "lng": -9.1786,
        "consiglio": "A cena il quartiere di Cais do Sodré, con la Pink Street, è più animato che al Time Out Market."
      },
      {
        "nome": "Oceanário e Parque das Nações",
        "testo": "Uno dei più grandi acquari al coperto d'Europa, aperto nel 1998, con una grande vasca centrale e gli habitat dei quattro oceani. Il Parque das Nações, l'area dell'Expo 98, ha una passeggiata sul Tago e una funivia.",
        "come": "Metro rossa fino a Oriente, poi un breve tratto a piedi. Dall'aeroporto è sulla stessa linea.",
        "quando": "Mattina, con meno scolaresche. Utile nei giorni di pioggia.",
        "tempo": "2-3 ore",
        "lat": 38.7636,
        "lng": -9.0938,
        "url": "https://www.oceanario.pt/",
        "consiglio": "Prenotare online per saltare la fila alla cassa."
      },
      {
        "nome": "Sé de Lisboa",
        "testo": "La cattedrale romanica del XII secolo, con l'aspetto di una fortezza, sopravvissuta al terremoto del 1755. Nel chiostro gli scavi mostrano strati romani, arabi e medievali.",
        "come": "A metà salita tra Baixa e Alfama; il tram 28 e il 12 passano davanti.",
        "quando": "Salendo verso il castello al mattino.",
        "tempo": "30-45 minuti",
        "costo": "chiesa a pagamento per i turisti, chiostro e tesoro inclusi",
        "orari": "Chiusa la domenica alle visite turistiche.",
        "lat": 38.7099,
        "lng": -9.1335
      },
      {
        "nome": "Elevador de Santa Justa",
        "testo": "L'ascensore in ferro neogotico del 1902 che collega la Baixa al Largo do Carmo. Dalla piattaforma in cima si vede il castello, la Baixa e il fiume.",
        "come": "Dalla Rua do Ouro, in Baixa. In alternativa si sale a piedi dal Chiado e si accede alla terrazza dall'alto, senza fare la coda dell'ascensore.",
        "quando": "All'apertura o la sera; nelle ore centrali la coda è lunga.",
        "tempo": "30 minuti più la coda",
        "costo": "circa 6 € (6,20 € a bordo, fino a due corse con accesso al belvedere, 2026), incluso nella Lisboa Card",
        "lat": 38.7121,
        "lng": -9.1394,
        "url": "https://www.carris.pt/"
      },
      {
        "nome": "Bairro Alto e Príncipe Real",
        "testo": "Il Bairro Alto è una griglia di vicoli con bar minuscoli e case di fado, che la sera si riempie di gente in strada. Più su, Príncipe Real ha giardini, palazzi ottocenteschi e il miradouro di São Pedro de Alcântara.",
        "come": "Dal Chiado a piedi o con l'Elevador da Glória da Restauradores.",
        "quando": "Il pomeriggio per Príncipe Real, la sera dopo le 22 per il Bairro Alto.",
        "tempo": "2-3 ore",
        "costo": "gratuito",
        "lat": 38.7166,
        "lng": -9.1489
      },
      {
        "nome": "Museu Nacional do Azulejo",
        "testo": "Cinque secoli di piastrelle portoghesi nel convento della Madre de Deus, con una chiesa barocca tutta d'oro e un panorama di Lisbona in azulejos lungo 23 metri, prima del terremoto.",
        "come": "A est dell'Alfama, fuori dai percorsi: bus 759 o 794 da Praça do Comércio, o taxi.",
        "quando": "Una mattina feriale, con poca gente.",
        "tempo": "1h30",
        "orari": "Chiuso il lunedì.",
        "lat": 38.7247,
        "lng": -9.1135,
        "url": "https://www.museudoazulejo.gov.pt/"
      },
      {
        "nome": "Museu Calouste Gulbenkian",
        "testo": "La collezione di un magnate del petrolio, dall'Egitto antico ai tappeti persiani, da Rembrandt ai gioielli di Lalique, in un edificio modernista dentro un giardino. Accanto c'è il Centro de Arte Moderna.",
        "come": "Metro São Sebastião o Praça de Espanha.",
        "quando": "In un giorno di pioggia, o la domenica pomeriggio.",
        "tempo": "2 ore",
        "costo": "circa 16 € il museo, 18 € con CAM e mostre (2026)",
        "orari": "10-18, sabato fino alle 21. Chiuso il martedì.",
        "lat": 38.7375,
        "lng": -9.1545,
        "url": "https://gulbenkian.pt/museu/"
      },
      {
        "nome": "Padrão dos Descobrimentos e MAAT",
        "testo": "Il monumento alle scoperte sul Tago, con Enrico il Navigatore a prua e la rosa dei venti sulla piazza, e poco più a est il MAAT, il museo d'arte e architettura con il tetto percorribile sul fiume.",
        "come": "A Belém, a piedi dai Jerónimos attraversando il sottopasso; tram 15 o treno da Cais do Sodré.",
        "quando": "Al tramonto, con la luce sul fiume e sul ponte 25 de Abril.",
        "tempo": "1 ora",
        "costo": "piazza e tetto del MAAT gratuiti; terrazza del Padrão e mostre a pagamento",
        "lat": 38.6936,
        "lng": -9.2058
      },
      {
        "nome": "Feira da Ladra e Panteão Nacional",
        "testo": "Il mercato delle pulci di Campo de Santa Clara, con oggetti vecchi, azulejos e cianfrusaglie, sotto la cupola bianca del Panteão Nacional, dove è sepolta Amália Rodrigues. Dalla terrazza del Panteão si vede il Tago.",
        "come": "Tram 28 fino a Voz do Operário, poi a piedi.",
        "quando": "Il martedì o il sabato mattina, i giorni del mercato.",
        "tempo": "1-2 ore",
        "costo": "mercato gratuito; Panteão a pagamento",
        "orari": "Mercato il martedì e il sabato, dalla mattina al primo pomeriggio; Panteão chiuso il lunedì.",
        "lat": 38.715,
        "lng": -9.125
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Alfama, Sé e Castelo de São Jorge all'apertura",
          "Miradouro de Santa Luzia e discesa in Baixa per pranzo",
          "Pomeriggio: Belém, Jerónimos, Torre de Belém e pastel de nata",
          "Tramonto al Padrão dos Descobrimentos o a un miradouro, sera al Bairro Alto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Alfama, castello, tram 28, Baixa e Chiado, fado la sera",
          "Giorno 2: Belém con Jerónimos, Torre e MAAT, poi LX Factory e Cais do Sodré; tramonto a São Pedro de Alcântara"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Alfama, castello, Sé e Feira da Ladra (martedì o sabato), Baixa",
          "Giorno 2: Belém e LX Factory, sera al Bairro Alto",
          "Giorno 3: gita a Sintra, rientro per cena; in alternativa Gulbenkian, Museu do Azulejo e Parque das Nações"
        ]
      }
    ],
    zone: [
      {
        "nome": "Baixa e Chiado",
        "perChi": "chi vuole comodità",
        "testo": "Centrale, in piano e vicina a metro e treni. Rumorosa la sera e cara. Pochi locali di quartiere.",
        "fascia": "130-250 €"
      },
      {
        "nome": "Alfama e Graça",
        "perChi": "chi cerca atmosfera",
        "testo": "Vicoli, fado, belvedere. Salite e scale, taxi difficili, notti con musica alta.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Príncipe Real, Estrela e Campo de Ourique",
        "perChi": "chi cerca quartieri residenziali",
        "testo": "Più tranquilli, con giardini e bei negozi. Più lontani dal fiume.",
        "fascia": "120-220 €"
      }
    ],
    gite: [
      {
        "nome": "Sintra",
        "distanza": "40 minuti in treno",
        "come": "Treno dalla stazione del Rossio con la carta Navegante, poi bus 434 per Pena e il Castelo dos Mouros.",
        "testo": "Palácio da Pena, Quinta da Regaleira e Castelo dos Mouros tra i boschi della serra. Pena e Regaleira vanno prenotati online con fascia oraria."
      },
      {
        "nome": "Cascais e la costa di Estoril",
        "distanza": "40 minuti in treno",
        "come": "Treno da Cais do Sodré lungo il mare, ogni 20 minuti circa.",
        "testo": "La cittadina di pescatori diventata località di villeggiatura, con spiagge, il centro storico e la Boca do Inferno. In bici si arriva alla spiaggia del Guincho."
      },
      {
        "nome": "Setúbal e Arrábida",
        "distanza": "50 km, 45 minuti in auto",
        "come": "In auto o con i bus da Sete Rios; per le spiagge della serra l'auto è quasi indispensabile.",
        "testo": "Il parco naturale dell'Arrábida, con calette di acqua turchese sotto la montagna, e Setúbal per il choco frito. Da qui partono le uscite in barca per vedere i delfini del Sado."
      },
      {
        "nome": "Óbidos",
        "distanza": "85 km, 1 ora in bus",
        "come": "Bus diretti da Campo Grande.",
        "testo": "Un borgo bianco e giallo dentro le mura medievali, che si percorrono a piedi, con la ginjinha servita in bicchierini di cioccolato."
      }
    ],
    sapori: [
      {
        "nome": "Pastel de nata",
        "testo": "Pasta sfoglia con crema pasticcera, tiepido e con cannella."
      },
      {
        "nome": "Bacalhau à Brás",
        "testo": "Baccalà sfilacciato con uova, patate fritte e cipolla."
      },
      {
        "nome": "Bifana",
        "testo": "Panino con maiale marinato in vino bianco e aglio, da chioschi e bar."
      },
      {
        "nome": "Sardine alla griglia",
        "testo": "Specialità di giugno, per i Santos Populares."
      },
      {
        "nome": "Ginjinha",
        "testo": "Liquore di amarena servito in un bicchierino, nei chioschi della Baixa."
      }
    ],
    attenzioni: [
      "Borseggiatori sul tram 28, in metro e nelle zone turistiche: tenere zaino e telefono davanti.",
      "In Baixa e Bairro Alto può capitare che sconosciuti offrano hashish o altre droghe per strada: dire di no e andare avanti. In Portogallo le droghe illegali comportano sanzioni severe.",
      "Al ristorante il «couvert» (pane, olive, formaggio) portato in tavola è a pagamento se lo si tocca: rifiutarlo se non lo si vuole.",
      "Tuk-tuk e taxi fuori dalle zone turistiche: concordare il prezzo prima, o usare le app.",
      "Tassa di soggiorno comunale a notte, pagata in hotel e soggetta a variazioni (verificare l'importo attuale).",
      "Scioperi di metro, treni e Carris, avvisati in anticipo: controllare le notizie nei giorni di spostamento."
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Lisbona?",
        "risposta": "Tre giorni: uno per Alfama e la Baixa, uno per Belém, uno per Sintra. Con quattro o cinque si aggiungono Cascais, i musei e una sera di fado senza fretta."
      },
      {
        "domanda": "Conviene la Lisboa Card?",
        "risposta": "Conviene se si concentrano in pochi giorni Jerónimos, Torre de Belém, Santa Justa e molti trasporti, compreso il treno per Sintra. Per chi gira a piedi e vede pochi musei basta la carta Navegante ricaricabile."
      },
      {
        "domanda": "Come evitare la coda del tram 28?",
        "risposta": "Salire presto al mattino o in serata, oppure prenderlo da una fermata intermedia invece che dal capolinea di Martim Moniz. È anche il mezzo preferito dei borseggiatori."
      },
      {
        "domanda": "Si può fare Sintra in giornata da Lisbona?",
        "risposta": "Sì, con il treno dal Rossio in 40 minuti, partendo presto: due palazzi con calma, tre di corsa. Pena e Regaleira vanno prenotati online."
      },
      {
        "domanda": "Dove dormire a Lisbona?",
        "risposta": "Baixa e Chiado per la comodità, Alfama e Graça per l'atmosfera, Príncipe Real ed Estrela per la calma. Una doppia costa circa 100-250 €; le salite e i sampietrini rendono utile stare vicino a una metro."
      },
      {
        "domanda": "Come si va dall'aeroporto al centro di Lisbona?",
        "risposta": "Con la metro, linea rossa, in 20-25 minuti per circa 1,90 € più 0,50 € della carta. Taxi circa 12-20 € con il tassametro acceso, Uber e Bolt circa 10-15 €."
      }
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
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato in giornata durante i quattro giorni a Lisbona con amici: un giorno intero dedicato solo a Sintra.",
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
      "Dalla stazione di Rossio, in pieno centro a Lisbona, il treno CP della linea di Sintra arriva al capolinea in circa 40 minuti, con corse frequenti dal mattino alla sera. Andata e ritorno Lisbona-Sintra costa 5,10 € (tariffe CP 2026) e si carica sulla carta Navegante ocasional da 0,50 €; il biglietto Train&Bus da 14 € vale una giornata sul treno e sui bus Scotturb 434 (Pena) e 435 (Monserrate). Dall'aeroporto si prende la metro rossa e si cambia ad Alameda sulla verde fino a Rossio. In auto il parcheggio in centro scarseggia.",
    comeSpostarsi: 'Il bus locale 434 fa un giro circolare tra stazione, centro storico e Palácio da Pena. Il centro pedonale si gira a piedi, ma fra i siti principali (Pena, Regaleira, Castelo dos Mouros) si sale sempre, e le distanze sono più lunghe di quanto sembri sulla mappa.',
    periodoMigliore:
      'il clima va bene tutto l\'anno; il problema è la folla. Nei weekend e in alta stagione (giugno-agosto) le code ai palazzi principali diventano lunghissime già dalla tarda mattinata. In un giorno feriale, partendo il prima possibile, l\'attesa si riduce di molto in qualsiasi stagione.',
    costi: "Palácio da Pena 20 € (parco e palazzo), solo parco 12 €; Quinta da Regaleira 20 €; Castelo dos Mouros e Monserrate 12 €; Palácio Nacional 13 €; Convento dos Capuchos 11 €; treno da Lisbona 5,10 € andata e ritorno. Budget indicativo al giorno a persona in gita da Lisbona, ingressi compresi: basso 40-60 €, medio 70-100 €, alto oltre 150 €.",
    erroriDaEvitare: [
      'Arrivare a metà mattina pensando di "fare tutto con calma": le code al Palácio da Pena e alla Quinta da Regaleira si allungano in fretta dopo le 10-11',
      'Non prenotare online i biglietti a fascia oraria: in alta stagione gli orari della mattina finiscono',
      'Sottovalutare distanze e dislivelli tra un sito e l\'altro: non è un centro compatto come Lisbona',
      'Voler vedere tutti e quattro i siti principali (Pena, Regaleira, Castelo dos Mouros, Palácio Nacional) in una giornata: con le code vere, di solito almeno uno va sacrificato',
    ],
    luoghi: [
      {
        "nome": "Palácio Nacional da Pena",
        "testo": "Palazzo romantico costruito tra il 1842 e il 1854 per volere di Ferdinando II sulla cima di una collina, giallo e rosso, con torri, merli e decorazioni moresche e manueline. Fu residenza estiva della famiglia reale e le stanze conservano gli arredi delle sue collezioni. Intorno c'è un parco di oltre 200 ettari.",
        "come": "Dalla stazione di Sintra il bus 434 di Scotturb sale fino alla Pena. A piedi la salita è lunga e ripida. Le auto private non possono salire sulle strade d'accesso: dalla base del parco al palazzo c'è una navetta ogni 15 minuti. Ingresso con biglietto a fascia oraria.",
        "quando": "Parco 9-19, palazzo 9:30-18:30 (ultimo biglietto alle 17:30). Il palazzo si visita solo con data e fascia oraria prenotate. Primo orario della mattina: dopo le 10:30 la coda si allunga. Biglietti online su Parques de Sintra.",
        "tempo": "2-3 ore con il parco",
        "url": "https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/",
        "costo": "Visita Essencial (parco e palazzo) 20 €, solo parco 12 €, 2026 (sito ufficiale)",
        "consiglio": "Il parco da solo si visita senza fila al palazzo e ha punti panoramici: utile se le code sono troppo lunghe.",
        "orari": "Parco 9-19 (ultimo ingresso alle 18), palazzo 9:30-18:30 (ultimo ingresso alle 17:30).",
        "lat": 38.78778,
        "lng": -9.39056
      },
      {
        "nome": "Quinta da Regaleira",
        "testo": "Villa neogotica costruita tra il 1904 e il 1910, con un giardino pieno di simboli, grotte e gallerie. Il Poço Iniciático è un pozzo profondo 27 metri con una scala a spirale, collegato a tunnel che escono in un laghetto.",
        "come": "A piedi dal centro di Sintra, in salita lieve. Il biglietto si compra alla biglietteria o sulla biglietteria online ufficiale, che evita la coda.",
        "quando": "Mattina presto o primo pomeriggio: in tarda mattinata il pozzo si riempie. Orari sul sito ufficiale.",
        "tempo": "2 ore",
        "url": "https://www.regaleira.pt/",
        "consiglio": "Scendere nel pozzo con scarpe che non scivolano e tornare per i tunnel: l'uscita è più bella della discesa.",
        "costo": "20 euro dal gennaio 2026 (sito ufficiale)",
        "orari": "Gennaio-marzo e ottobre-dicembre 10-18:30; aprile-settembre 9-19:30. Ultimo ingresso sempre alle 17:30; palazzo e cappella chiudono 30 minuti prima del giardino.",
        "lat": 38.79511,
        "lng": -9.3962
      },
      {
        "nome": "Castelo dos Mouros",
        "testo": "Le rovine della fortezza costruita dai Mori tra l'VIII e il IX secolo sulla cresta sopra Sintra, con mura e torri collegate da camminamenti. Dall'alto si vedono la Pena, la città e l'oceano.",
        "come": "Dal centro a piedi, in salita, oppure con il bus 434 fino alla fermata del castello. Tratti di scale su pietra irregolare.",
        "quando": "Mattina, con meno vento. Con nebbia il panorama non si vede.",
        "tempo": "1-1 ora e mezza",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Se si ha tempo per un solo castello o palazzo oltre alla Pena, qui la folla è minore.",
        "costo": "12 euro (Parques de Sintra)",
        "orari": "9:30-18, ultimo ingresso alle 17:30.",
        "lat": 38.79241,
        "lng": -9.38867
      },
      {
        "nome": "Palácio Nacional de Sintra",
        "testo": "Il palazzo reale in centro, riconoscibile dai due camini conici bianchi delle cucine. Dentro ci sono la sala dei Cigni, la sala delle Gazze e una grande raccolta di azulejos dal Quattrocento.",
        "come": "A piedi dalla stazione. È sulla piazza principale della città.",
        "quando": "Prima del pranzo; la piazza di sera è più tranquilla.",
        "tempo": "1 ora",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Visitarlo se si va in città nel pomeriggio: meno coda della Pena.",
        "costo": "visita essenziale 13 euro (Parques de Sintra)",
        "orari": "Palazzo e giardini 9:30-18:30; ultimo ingresso al palazzo alle 17:30.",
        "lat": 38.79778,
        "lng": -9.39083
      },
      {
        "nome": "Cabo da Roca",
        "testo": "Il punto più occidentale dell'Europa continentale, con un faro su scogliere a picco sull'Atlantico, a circa 140 metri sul mare. Il monumento ricorda il verso con cui Camões descrisse il luogo «dove la terra finisce e il mare comincia».",
        "come": "Dal centro di Sintra con il bus di linea verso Cascais (orari sull'app di Carris Metropolitana) o in auto.",
        "quando": "Al tramonto con vento forte; portare una giacca anche d'estate.",
        "tempo": "1 ora",
        "consiglio": "Il certificato di visita si compra al piccolo ufficio turistico: è un ricordo, non obbligatorio.",
        "costo": "gratuito",
        "lat": 38.78083,
        "lng": -9.50056
      },
      {
        "nome": "Parco e Palazzo di Monserrate",
        "testo": "Un palazzo dell'Ottocento con cupole e decorazioni ispirate all'arte moresca e indiana, voluto dal collezionista inglese Francis Cook. Intorno c'è un parco botanico in discesa, con felci arboree, prati e piante di tutti i continenti. Ha molta meno gente della Pena.",
        "come": "A ovest del centro, con il bus 435 di Scotturb dalla stazione o in auto. La strada passa davanti alla Quinta da Regaleira e a Seteais.",
        "quando": "Il pomeriggio, dopo la Pena; con il sole basso il palazzo diventa rosato.",
        "tempo": "2 ore",
        "costo": "12 euro (Parques de Sintra)",
        "orari": "Parco 9-19 (ultimo ingresso alle 18), palazzo 9:30-18.",
        "lat": 38.79423,
        "lng": -9.42065,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Convento dos Capuchos",
        "testo": "Un piccolo convento francescano del Cinquecento nascosto nel bosco della serra, con celle minuscole e porte basse rivestite di sughero. È il contrario dei palazzi reali: povero, silenzioso, quasi scavato nella roccia.",
        "come": "È isolato nel bosco della serra, lontano dal centro: si arriva in auto o in taxi.",
        "quando": "Nei giorni di nebbia, quando il bosco intorno dà il meglio.",
        "tempo": "1 ora",
        "costo": "11 euro (Parques de Sintra)",
        "orari": "9-17:30, ultimo ingresso alle 17.",
        "lat": 38.7844,
        "lng": -9.43817,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Chalet della Contessa d'Edla",
        "testo": "Uno chalet in stile alpino fatto costruire da Ferdinando II e dalla seconda moglie, la cantante Elise Hensler, nella parte ovest del parco della Pena. Fuori è decorato con finto legno e sughero, dentro con azulejos e stucchi.",
        "come": "Dentro il parco della Pena: si raggiunge a piedi dal palazzo lungo i sentieri del parco.",
        "quando": "Dopo la Pena, quando la gente si concentra sul palazzo.",
        "tempo": "45 minuti",
        "costo": "incluso nel biglietto del parco della Pena, 12 euro (Parques de Sintra)",
        "orari": "Chalet 9-17:30, ultimo ingresso alle 17; parco 9-19.",
        "lat": 38.7851,
        "lng": -9.39911,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Palácio de Seteais",
        "testo": "Un palazzo neoclassico della fine del Settecento, oggi albergo, con un grande arco tra le due ali. Dal prato davanti si vedono la Pena e il Castelo dos Mouros sulla cresta.",
        "come": "A piedi dal centro, 10-15 minuti sulla strada per Monserrate, poco dopo la Quinta da Regaleira.",
        "quando": "Nel tardo pomeriggio, sulla strada di ritorno da Monserrate.",
        "tempo": "20-30 minuti",
        "lat": 38.7968,
        "lng": -9.39957
      },
      {
        "nome": "Azenhas do Mar",
        "testo": "Un paese di case bianche aggrappato a una scogliera sull'Atlantico, sopra una piscina naturale ricavata tra gli scogli. È la cartolina della costa di Sintra, a una ventina di minuti dalla serra.",
        "come": "In auto dal centro di Sintra verso Colares e la costa. Il belvedere è sulla strada sopra il paese.",
        "quando": "Al tramonto; la piscina naturale si usa con la bassa marea e il mare calmo.",
        "tempo": "1 ora",
        "lat": 38.84096,
        "lng": -9.46191
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Treno da Rossio, partenza prima delle 8",
          "Palácio da Pena all'apertura",
          "Castelo dos Mouros o Regaleira in tarda mattinata",
          "Pranzo in centro con un travesseiro",
          "Treno di rientro nel pomeriggio"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Pena, Chalet della Contessa d'Edla, Castelo dos Mouros, centro storico",
          "Giorno 2: Regaleira all'apertura, Seteais e Monserrate, Palácio Nacional nel tardo pomeriggio"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1 e 2: come sopra",
          "Giorno 3: Convento dos Capuchos la mattina, Azenhas do Mar, Cabo da Roca al tramonto e rientro via Cascais"
        ]
      }
    ],
    zone: [
      {
        "nome": "Gita da Lisbona",
        "perChi": "la maggior parte dei visitatori",
        "testo": "Treno da Rossio in meno di un'ora, rientro in serata. Ritmo serrato con le code, ma costo basso.",
        "fascia": "100-250 € a Lisbona"
      },
      {
        "nome": "Sintra, centro storico",
        "perChi": "chi vuole vedere la città senza folla",
        "testo": "Dormire in paese permette di vedere Pena all'apertura e il centro la sera. Pochi alberghi e prezzi alti.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Colares e la costa",
        "perChi": "chi è in auto e vuole il mare vicino",
        "testo": "Quintas e case in affitto tra le vigne di Colares, a pochi minuti da Azenhas do Mar e dalle spiagge. Serate silenziose, ma per i palazzi serve l'auto.",
        "fascia": "90-180 €"
      }
    ],
    gite: [
      {
        "nome": "Cascais e Boca do Inferno",
        "distanza": "circa 30-40 minuti in bus o in auto",
        "come": "Bus di linea da Sintra passando per Cabo da Roca, o in auto; da Cascais si rientra a Lisbona in treno da Cais do Sodré in circa 40 minuti.",
        "testo": "La cittadina sul mare che fu residenza estiva della corte, con il porto, la spiaggia in centro e la scogliera della Boca do Inferno a pochi minuti a piedi."
      },
      {
        "nome": "Palácio Nacional de Queluz",
        "distanza": "circa 20 minuti in treno",
        "come": "Treno della linea di Sintra fino a Queluz-Belas, poi a piedi fino al palazzo.",
        "testo": "Il palazzo rococò dei Braganza, con sale dorate, giardini alla francese e un canale rivestito di azulejos. Sta sulla linea Lisbona-Sintra, quindi si aggiunge senza deviazioni. Palazzo e giardini 13 euro, solo giardini 6 euro; 9-18, giardini fino alle 18:30 (Parques de Sintra)."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Sintra?",
        "risposta": "Un giorno intero basta per la Pena e uno o due altri siti. Con due giorni si aggiungono Monserrate, Seteais e il Palácio Nacional senza correre, con un terzo anche Capuchos e la costa."
      },
      {
        "domanda": "Bisogna prenotare la Pena e la Regaleira?",
        "risposta": "Il palazzo della Pena si visita solo con data e fascia oraria, quindi va prenotato sul sito di Parques de Sintra. Per la Regaleira il biglietto online evita la coda in biglietteria."
      },
      {
        "domanda": "Come si arriva a Sintra da Lisbona?",
        "risposta": "Con il treno CP da Rossio, circa 40 minuti; andata e ritorno costa 5,10 euro. Il biglietto Train&Bus da 14 euro include anche i bus 434 e 435."
      },
      {
        "domanda": "Se c'è tempo per un solo sito, Pena o Regaleira?",
        "risposta": "La Pena per i panorami e gli interni reali, la Regaleira per il pozzo e i giardini simbolici. Con le code vere, chi arriva tardi trova la Regaleira più gestibile."
      },
      {
        "domanda": "Conviene andare a Sintra in auto?",
        "risposta": "Di solito no: le auto private non salgono alla Pena e in centro il parcheggio scarseggia nei fine settimana. L'auto serve solo per Capuchos e la costa."
      },
      {
        "domanda": "Vale la pena dormire a Sintra?",
        "risposta": "Sì per chi vuole la Pena all'apertura e il centro la sera senza gruppi. Gli alberghi sono pochi e costano più che a Lisbona, quindi si prenota presto."
      }
    ],
    sapori: [
      {
        "nome": "Travesseiro",
        "testo": "Sfoglia ripiena di crema di mandorle e uova, dolce simbolo di Sintra, alla pasticceria Piriquita."
      },
      {
        "nome": "Queijada",
        "testo": "Dolcetto di formaggio fresco, uova e cannella."
      },
      {
        "nome": "Vinho de Colares",
        "testo": "Vino di una zona sabbiosa vicino al mare, con viti non innestate."
      },
      {
        "nome": "Pastel de nata",
        "testo": "Presente in ogni pasticceria."
      },
      {
        "nome": "Bacalhau",
        "testo": "Baccalà in diverse versioni nei ristoranti del centro."
      }
    ],
    attenzioni: [
      "I biglietti per Pena e Regaleira sono a orario: comprarli online prima di partire, in alta stagione la mattina finisce.",
      "Il bus 434 è pieno nelle ore centrali: salire alla stazione, che è il capolinea, per avere posto.",
      "Taxi e tuk-tuk chiedono tariffe elevate: concordare il prezzo prima.",
      "Parcheggio quasi impossibile in centro nei fine settimana: meglio il treno.",
      "Zaini grandi non sempre entrano nei palazzi: lasciare il bagaglio a Lisbona.",
      "Nebbia e umidità frequenti: portare una giacca impermeabile."
    ],
    esperienzeSlugs: ['sintra-giornata-da-lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il Palácio Nacional da Pena di Sintra con le torri gialle e rosse che emergono dal bosco sotto un cielo azzurro',
    immagine: '/images/portogallo/sintra.jpg',
  },
]
