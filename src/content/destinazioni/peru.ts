import type { Destinazione } from '@/lib/types'

// Paese visitato di persona (articolo peru-itinerario, tre viaggi riuniti).
// I campi miaEsperienza sono in prima persona e tengono solo i fatti
// raccontati nell'articolo. Choquequirao resta non vissuta: l'articolo dice che
// il trek è rimasto fuori dal viaggio. Nessun nome di hotel o ristorante. Prezzi, quote di ingresso e regole di prenotazione in Perù
// cambiano spesso: vanno riverificati sui canali ufficiali prima di partire
// (biglietti Machu Picchu solo su tuboleto.cultura.pe).

export const destinazioniPeru: Destinazione[] = [
  {
    slug: 'cusco',
    paeseSlug: 'peru',
    ordine: 1,
    nome: 'Cusco',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '3-4 giorni, di cui almeno due solo per acclimatarsi',
    visitataPersonalmente: true,
    introduzione:
      'L\'antica capitale dell\'impero inca a 3.400 metri, dove le fondamenta in pietra incastrata a secco reggono ancora le chiese coloniali costruite sopra. È la base logistica di quasi tutto ciò che si fa in Perù: da qui partono treni, trek e voli per l\'Amazzonia.',
    percheAndarci:
      'Perché è il punto di partenza obbligato e perché merita anche da sola: la muratura inca di Sacsayhuamán e di Qorikancha è il modo migliore per capire cosa si andrà a vedere a Machu Picchu.',
    cosaVedere: [
      'Qorikancha, il tempio del sole inca su cui i conquistadores costruirono il convento di Santo Domingo',
      'Sacsayhuamán, la fortezza con i blocchi megalitici incastrati senza malta, sopra la città',
      'Plaza de Armas e la Cattedrale',
      'Il quartiere di San Blas, il più ripido e caratteristico',
      'La Piedra de los Doce Ángulos, in Calle Hatun Rumiyoc',
    ],
    cosaFare: [
      'Prendersela comoda i primi due giorni: senza acclimatamento il resto del viaggio non si riesce a fare',
      'Mercato di San Pedro per il primo assaggio della cucina andina',
      'Corso di cucina peruviana o degustazione di ceviche e pisco sour',
      'Giornata a Rainbow Mountain (Vinicunca) o alla laguna Humantay, entrambe sopra i 4.600 metri, da fare solo dopo essersi acclimatati',
    ],
    doveDormire:
      'Il centro storico e San Blas sono le zone più comode e piacevoli; San Blas è però tutto in salita, cosa che nei primi giorni in quota si sente parecchio.',
    doveMangiare:
      'Il mercato di San Pedro è il posto giusto per il primo impatto: succhi di frutta al banco, zuppe e menú del día a pochi soles. Da provare in città il cuy (porcellino d\'India), l\'alpaca alla griglia e il chicharrón; il pisco sour è d\'obbligo la prima sera, ma con calma, perché a 3.400 metri l\'alcol pesa il doppio.',
    comeArrivare: "Volo interno da Lima (circa 1h20), la soluzione quasi obbligata. Via terra da Puno o Arequipa servono 6-10 ore di bus. L'aeroporto Alejandro Velasco Astete (CUZ) è in città: taxi ufficiale o app in 15-20 minuti, circa 20-40 soles (5-10 €); vanno evitati i finti tassisti all'uscita degli arrivi. Da Puno c'è anche il bus turistico di circa 10 ore con soste a Pukará, La Raya, Raqchi e Andahuaylillas. Cusco sta a 3.400 metri: il giorno dell'arrivo conviene tenerlo libero.",
    comeSpostarsi: 'Il centro si gira a piedi; taxi economici e collettivi per le zone esterne. Per la Valle Sacra, tour organizzati o auto con autista.',
    periodoMigliore: 'maggio-settembre, stagione secca. Attenzione al 24 giugno, quando l\'Inti Raymi riempie la città',
    costi: "Budget basso 30-45 € al giorno (ostello, menú del día al mercato, colectivos); medio 70-120 € (hotel nel centro o a San Blas, ristoranti, taxi); alto da 200 € (hotel in palazzi coloniali, guida privata, tour privati). Il Boleto Turístico del Cusco (circa 130 soles, circa 33 €) copre in un unico biglietto Sacsayhuamán, i siti della Valle Sacra e diversi musei; conviene quasi sempre.",
    erroriDaEvitare: [
      'Atterrare a Cusco e partire il giorno dopo per un trek: è il modo più diretto per rovinarsi il viaggio con il mal d\'altitudine',
      'Sottovalutare le notti: a 3.400 metri fa freddo tutto l\'anno, anche quando di giorno ci sono 20 gradi',
      'Salire a Rainbow Mountain nei primi giorni, quando l\'organismo non ha ancora reagito alla quota',
    ],
    miaEsperienza:
      'Il primo giorno qui è un giorno perso, e va messo in conto: siamo atterrati a 3.400 metri e abbiamo solo camminato piano fra la Plaza de Armas e San Blas, col tè di coca in mano come fanno tutti. È quello che serve, e il resto del viaggio ne guadagna. Il secondo giorno Qorikancha e Sacsayhuamán, il modo migliore per capire prima cosa si vedrà a Machu Picchu, e il pranzo al mercato di San Pedro fra succhi al banco e zuppe a pochi soles. Per i souvenir, a Cusco io vado da Assunta. Da qui ho fatto sia Rainbow Mountain sia la laguna Humantay, più un\'altra montagna colorata e un paio di lagune di cui non ricordo il nome. In Perù sono stato anche due volte come volontario, e una di queste è stata proprio qui a Cusco, con il Proyecto Cusimaky: è un progetto che sostengo, e invito chi passa da Cusco a visitarlo.',
    luoghi: [
      {
        nome: "Plaza de Armas e Cattedrale",
        testo: "Il cuore coloniale di Cusco: portici, balconi di legno e la Cattedrale costruita con i blocchi tolti a Sacsayhuamán. Di sera, con le chiese illuminate, è il posto dove far scendere il fiato dopo il giorno di arrivo.",
        come: "Sta nel centro, si raggiunge a piedi da quasi tutti gli alloggi. La Cattedrale ha un biglietto proprio, non incluso nel Boleto Turístico generale.",
        quando: "La piazza è bella all'alba e dopo il tramonto, quando i gruppi dei tour sono altrove.",
        tempo: "1-2 ore con la Cattedrale",
        lat: -13.51677,
        lng: -71.97878,
        consiglio: "Il primo giorno non fare altro: cammina piano tra la piazza e San Blas con un tè di coca in mano, come fanno tutti.",
      },
      {
        nome: "Qorikancha (convento di Santo Domingo)",
        testo: "Era il tempio del Sole degli Inca. I conquistadores ci costruirono sopra il convento di Santo Domingo, ma le mura in pietra incastrata a secco hanno retto ai terremoti che hanno danneggiato la parte coloniale. Spiega a cosa servivano le pietre che si vedranno a Machu Picchu.",
        come: "A piedi dalla Plaza de Armas, verso sud-est. Si visita il convento con i chiostri e le sale inca; esiste anche un museo di sito separato.",
        quando: "Meglio la mattina, prima dei gruppi organizzati.",
        tempo: "1 ora",
        costo: "circa 20 soles, circa 5 € (2026); non incluso nel Boleto Turístico",
        lat: -13.52,
        lng: -71.97556,
        consiglio: "Visitalo il secondo giorno insieme a Sacsayhuamán: sono il modo migliore per capire la muratura inca prima del resto del viaggio.",
      },
      {
        nome: "Sacsayhuamán",
        testo: "La fortezza-santuario sopra la città, con tre grandi mura a terrazze di blocchi megalitici incastrati senza malta: il più grande è stimato tra 128 e quasi 200 tonnellate. Dall'alto si vede tutta Cusco, e il 24 giugno qui si celebra l'Inti Raymi.",
        come: "Sopra la città, a nord: in taxi oppure a piedi in salita, cosa da evitare nei primi giorni in quota. È incluso nel Boleto Turístico.",
        quando: "Mattina o primo pomeriggio. Il 24 giugno, giorno dell'Inti Raymi, l'accesso cambia: informati prima.",
        tempo: "1,5-2 ore",
        costo: "Boleto Turístico generale circa 130 soles (circa 33 €) per gli stranieri, valido 10 giorni, 16 siti (tariffario COSITUC, 2026). I biglietti parziali di un solo circuito costano 70 soles (circa 18 €)",
        lat: -13.50778,
        lng: -71.98222,
        consiglio: "Sali in taxi e scendi a piedi: la discesa verso San Blas è piacevole e non ti stanca.",
      },
      {
        nome: "San Blas e la Piedra de los Doce Ángulos",
        testo: "Il quartiere degli artigiani, tutto vicoli in salita, botteghe e caffè. In Calle Hatun Rumiyoc c'è la pietra dei dodici angoli, un blocco inca incastrato perfettamente tra gli altri.",
        come: "A piedi dalla piazza. Le strade sono ripide e acciottolate.",
        quando: "Tutto il giorno; le botteghe sono più vive nel pomeriggio.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        lat: -13.51601,
        lng: -71.97625,
        consiglio: "Per i souvenir qui si trova roba più curata che nelle bancarelle della piazza. Mettici in conto le salite: nei primi giorni si sentono.",
      },
      {
        nome: "Chiesa della Compañía de Jesús",
        testo: "La chiesa dei gesuiti sul lato sud-est della Plaza de Armas, costruita sui resti del palazzo dell'inca Huayna Cápac. La facciata barocca è più ricca di quella della Cattedrale, con cui i gesuiti volevano competere, e la sera illuminata è la cartolina della piazza.",
        come: "Sulla Plaza de Armas, a pochi passi dalla Cattedrale. Ha un biglietto proprio.",
        quando: "La facciata al tramonto e di sera; l'interno nel tardo pomeriggio.",
        tempo: "30-45 minuti",
        lat: -13.5176,
        lng: -71.97796,
      },
      {
        nome: "Mercato di San Pedro",
        testo: "Il mercato coperto dove mangiano i cusqueños: banchi di succhi di frutta, zuppe, formaggi, erbe e coca. È il primo assaggio della cucina andina senza spendere troppo.",
        come: "A piedi dalla Plaza de Armas, verso ovest. Ingresso libero.",
        quando: "Mattina e pranzo; nel pomeriggio molti banchi chiudono.",
        tempo: "1 ora",
        costo: "ingresso libero",
        lat: -13.52116,
        lng: -71.9825,
        consiglio: "Il menú del día a pranzo costa pochi soles ed è quello che mangiano i locali. Tieni la borsa davanti: è un posto di borseggiatori.",
      },
      {
        nome: "Museo Inka",
        testo: "Il museo dell'Università di San Antonio Abad, in una casa coloniale a due passi dalla piazza, con ceramiche, tessuti, oggetti d'oro, qeros dipinti e mummie. Nel cortile spesso lavorano tessitrici delle comunità andine.",
        come: "A piedi dalla Plaza de Armas, salendo per la Cuesta del Almirante. Ha un biglietto proprio, non incluso nel Boleto Turístico.",
        quando: "In un pomeriggio di riposo nei primi giorni di acclimatamento.",
        tempo: "1-1,5 ore",
        lat: -13.51563,
        lng: -71.97815,
      },
      {
        nome: "Museo de Arte Precolombino (MAP)",
        testo: "Una selezione di pezzi della collezione del Museo Larco di Lima, esposta in una casa coloniale sulla piazzetta delle Nazarenas. Poche sale, molto curate: ceramiche moche e nazca, ori e argenti delle culture prima degli Inca.",
        come: "A piedi dalla Plaza de Armas, sulla piazzetta Nazarenas. Ha un biglietto proprio.",
        quando: "Pomeriggio o sera.",
        tempo: "1 ora",
        lat: -13.51491,
        lng: -71.97735,
        consiglio: "Chi non passa da Lima o non ha tempo per il Museo Larco trova qui l'essenziale.",
      },
      {
        nome: "Chiesa e belvedere di San Cristóbal",
        testo: "La piccola chiesa sulla collina a nord della piazza, con il sagrato che si affaccia su tutta Cusco. Accanto restano i muri del palazzo di Manco Cápac, il Colcampata. È il belvedere sulla città più vicino al centro.",
        come: "A piedi in salita dalla Plaza de Armas per la Cuesta del Almirante o in taxi; è sulla strada per Sacsayhuamán.",
        quando: "Al tramonto, quando la città si accende.",
        tempo: "30 minuti",
        lat: -13.51343,
        lng: -71.9802,
      },
      {
        nome: "Q'enqo",
        testo: "Un santuario inca scavato in un grande affioramento di roccia, con canali a zigzag, nicchie e una grotta con un altare che si pensa usato per riti e mummificazioni. È il sito più vicino a Sacsayhuamán e il più misterioso del circuito.",
        come: "Circa 1 km da Sacsayhuamán, sulla strada verso Pisac: a piedi o in taxi. Incluso nel Boleto Turístico.",
        quando: "Subito dopo Sacsayhuamán, la mattina.",
        tempo: "30-45 minuti",
        costo: "incluso nel Boleto Turístico (130 soles, circa 33 €, 2026)",
        lat: -13.51056,
        lng: -71.97167,
      },
      {
        nome: "Cristo Blanco",
        testo: "La statua bianca di Cristo con le braccia aperte, regalata alla città nel 1945, sulla collina accanto a Sacsayhuamán. Da qui si ha la vista più ampia su Cusco e sulla valle.",
        come: "In taxi o a piedi dalla parte alta di San Blas o da Sacsayhuamán, 10 minuti. È uno spazio aperto.",
        quando: "Al tramonto, oppure di sera per la città illuminata.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: -13.51042,
        lng: -71.97622,
      },
      {
        nome: "Tambomachay e Puka Pukara",
        testo: "Due piccoli siti uno di fronte all'altro, sulla strada verso Pisac. Tambomachay, il «bagno dell'Inca», ha fontane e canali di pietra ancora attivi; Puka Pukara era un posto di controllo e sosta sul cammino verso la Valle Sacra.",
        come: "In taxi da Cusco, circa 8 km, oppure con i bus verso Pisac. Molti scendono poi a piedi fino a Q'enqo e Sacsayhuamán, in discesa.",
        quando: "Mattina, prima dei gruppi del city tour pomeridiano.",
        tempo: "1 ora per entrambi",
        costo: "incluso nel Boleto Turístico (130 soles, circa 33 €, 2026)",
        lat: -13.48083,
        lng: -71.96472,
        consiglio: "Salire in taxi fino a Tambomachay e scendere a piedi passando da Puka Pukara, Q'enqo e Sacsayhuamán: si fa tutto il circuito senza fatica in salita.",
      },
      {
        nome: "Rainbow Mountain (Vinicunca)",
        testo: "La montagna a strisce color ocra, rosa e turchese, sopra i 5.000 metri. Si raggiunge in una giornata da Cusco, con una camminata finale in quota dura per il fiato più che per la distanza.",
        come: "Escursione di un giorno con partenza notturna da Cusco, qualche ora di strada e una camminata in salita. Si va con un'agenzia.",
        quando: "Stagione secca. Partenza prima dell'alba per avere meno folla.",
        tempo: "Giornata intera",
        costo: "ingresso a Vinicunca circa 25-30 soles (circa 7 €) in contanti, pagato alla comunità; il tour da Cusco si paga a parte (2026)",
        lat: -13.87023,
        lng: -71.30295,
        consiglio: "Fallo dopo qualche giorno di acclimatamento. Rick ha fatto anche la laguna Humantay e altre lagune della zona, sempre dopo essersi abituato alla quota.",
      },
      {
        nome: "Laguna Humantay",
        testo: "Un lago turchese a circa 4.200 metri, ai piedi del ghiacciaio del Nevado Humantay, sulla via del trek del Salkantay. La salita dal parcheggio di Soraypampa è breve ma ripida e in quota.",
        come: "Escursione di un giorno con partenza notturna da Cusco: circa 3 ore di strada fino a Soraypampa, poi 1-1,5 ore di salita. Cavalli disponibili per buona parte della salita.",
        quando: "Stagione secca, da maggio a settembre; arrivare presto, prima che le nuvole coprano la montagna.",
        tempo: "Giornata intera",
        costo: "biglietto d'ingresso a parte rispetto al tour, da chiarire con l'agenzia",
        lat: -13.37955,
        lng: -72.58466,
        consiglio: "Da fare dopo qualche giorno di acclimatamento, come la Rainbow Mountain; strati caldi, crema solare e acqua.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Plaza de Armas, Cattedrale e chiesa della Compañía",
          "Qorikancha e pranzo al mercato di San Pedro",
          "Pomeriggio: San Blas e la Piedra de los Doce Ángulos",
          "Tramonto al belvedere di San Cristóbal",
          "Sera: cena leggera e a letto presto, sei in quota",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: piazza, San Blas e mercato, tutto piano, tè di coca e niente alcol",
          "Giorno 2 mattina: Qorikancha e Museo Inka",
          "Giorno 2 pomeriggio: taxi fino a Tambomachay, poi a piedi in discesa per Puka Pukara, Q'enqo e Sacsayhuamán",
          "Giorno 2 tramonto: Cristo Blanco e discesa verso San Blas",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come nel programma da 2 giorni",
          "Giorno 3: Museo de Arte Precolombino e ultimi giri in città, poi notte già nella Valle Sacra (più in basso)",
          "In alternativa, ben acclimatati: Rainbow Mountain o laguna Humantay in giornata",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro storico e Plaza de Armas",
        perChi: "Chi arriva e vuole tutto a piedi",
        testo: "La zona più comoda per ristoranti, agenzie e trasporti. Di sera è animata e un po' rumorosa; attenzione ai borseggiatori nelle vie più turistiche.",
        fascia: "40-150 €",
      },
      {
        nome: "San Blas",
        perChi: "Chi cerca atmosfera e botteghe",
        testo: "Il quartiere più bello, con vicoli e caffè. Sta tutto in salita, e nei primi giorni in quota le scale pesano molto.",
        fascia: "40-130 €",
      },
      {
        nome: "Zona di San Pedro e Santa Ana",
        perChi: "Chi vuole risparmiare",
        testo: "Alloggi più economici vicino al mercato e alla stazione dei bus. Meno pittoresca, ma la piazza è raggiungibile a piedi.",
        fascia: "25-60 €",
      },
      {
        nome: "Valle Sacra (Urubamba e Ollantaytambo)",
        perChi: "chi vuole acclimatarsi più in basso",
        testo: "Paesi a circa 2.800-2.900 metri, 600 più in basso di Cusco: si dorme meglio e si è già sulla strada per Machu Picchu. Da qui Cusco è a un'ora e mezza.",
        fascia: "50-250 €",
      },
    ],
    sapori: [
      {
        "nome": "Cuy",
        "testo": "Porcellino d'India arrostito o fritto, piatto delle feste andine. Lo si mangia nei ristoranti tipici del centro e nelle picanterías fuori città."
      },
      {
        "nome": "Alpaca alla griglia",
        "testo": "Carne magra, simile a un manzo delicato. Si trova in quasi tutti i ristoranti del centro."
      },
      {
        "nome": "Chicharrón",
        "testo": "Pezzi di maiale fritti serviti con mais e patate, tipico del fine settimana."
      },
      {
        "nome": "Mate de coca",
        "testo": "Infuso di foglie di coca, offerto in quasi tutti gli alloggi. Si beve per tutta la giornata nei primi giorni in quota."
      },
      {
        "nome": "Menú del día",
        "testo": "Zuppa, secondo e bibita a un prezzo fisso basso. Il posto migliore per provarlo è il mercato di San Pedro."
      }
    ],
    attenzioni: [
      "Taxi abusivi all'aeroporto e ovunque: usa solo taxi prenotati o app. Sono uno dei punti dove i furti sono più frequenti.",
      "Cambiavalute di strada che passano banconote false o fuori corso: cambia solo in banca o in una casa de cambio autorizzata.",
      "Borseggi nelle zone turistiche affollate e al mercato di San Pedro: borsa davanti, niente telefono in mano.",
      "Mal d'altitudine (soroche): due giorni di calma vera prima di qualsiasi trek, niente alcol il primo giorno.",
      "Bus a lunga percorrenza: usa solo le compagnie principali, soprattutto di notte."
    ],
    gite: [
      {
        nome: "Pisac e la Valle Sacra",
        distanza: "circa 1 ora in auto, 33 km",
        come: "Colectivo o bus dal centro, taxi, oppure tour di un giorno che unisce Pisac, Urubamba e Ollantaytambo.",
        testo: "Le terrazze e la cittadella inca sopra il paese di Pisac, il mercato artigiano in basso e la valle dell'Urubamba. Le rovine di Pisac sono incluse nel Boleto Turístico.",
      },
      {
        nome: "Chinchero, Moray e Maras",
        distanza: "1-1,5 ore in auto, circa 50 km",
        come: "Auto con autista o tour di mezza giornata; con i mezzi pubblici è scomodo.",
        testo: "La chiesa e i tessitori di Chinchero, i terrazzamenti circolari di Moray e le migliaia di vasche delle saline di Maras, che hanno un biglietto a parte di circa 20 soles in contanti.",
      },
      {
        nome: "Machu Picchu",
        distanza: "3,5-4 ore tra auto e treno",
        come: "Auto o bus fino a Ollantaytambo, treno PeruRail o IncaRail fino ad Aguas Calientes, poi bus navetta fino all'ingresso.",
        testo: "Fattibile in giornata ma lunghissima: meglio dormire ad Aguas Calientes ed entrare al primo turno. Ingresso solo su tuboleto.cultura.pe, da prenotare con largo anticipo.",
      },
      {
        nome: "Tipón e Andahuaylillas",
        distanza: "40-50 minuti in auto, circa 25-40 km",
        come: "Taxi o auto per mezza giornata verso sud-est, sulla strada per Puno.",
        testo: "I canali d'acqua inca ancora funzionanti di Tipón e la chiesa di Andahuaylillas, detta la «Cappella Sistina delle Ande» per le pareti affrescate. Mezza giornata lontana dai gruppi.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Cusco?",
        risposta: "Almeno tre: uno solo per acclimatarsi, uno per Qorikancha e i siti sopra la città, uno per musei o una gita. Con la Valle Sacra e Machu Picchu si arriva facilmente a 5-6 giorni nella zona.",
      },
      {
        domanda: "Come evitare il mal di quota a Cusco?",
        risposta: "Il primo giorno si cammina piano, si beve molto, si evita l'alcol e si mangia leggero; il tè di coca aiuta. Chi può dorme le prime notti nella Valle Sacra, 600 metri più in basso, e rimanda le escursioni sopra i 4.000 metri.",
      },
      {
        domanda: "Conviene il Boleto Turístico del Cusco?",
        risposta: "Quasi sempre sì: con circa 130 soles copre per 10 giorni Sacsayhuamán, Q'enqo, Tambomachay, Pisac, Ollantaytambo, Moray e diversi musei. Non comprende Qorikancha, la Cattedrale, le saline di Maras né Machu Picchu.",
      },
      {
        domanda: "Meglio dormire a Cusco o nella Valle Sacra?",
        risposta: "A Cusco per i musei, i ristoranti e la sera; nella Valle Sacra per acclimatarsi meglio e avvicinarsi a Machu Picchu. Molti dividono le notti tra le due.",
      },
      {
        domanda: "Rainbow Mountain o laguna Humantay?",
        risposta: "La Rainbow Mountain arriva oltre i 5.000 metri ed è più dura; Humantay è più breve e meno affollata. Entrambe richiedono qualche giorno di acclimatamento e una partenza prima dell'alba.",
      },
      {
        domanda: "Quando andare a Cusco?",
        risposta: "Da maggio a settembre, la stagione secca, con giornate limpide e notti fredde. Intorno al 24 giugno, per l'Inti Raymi, la città è piena e gli alloggi vanno prenotati molto prima.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'Una venditrice con il cappello solleva un vassoio di pannocchie davanti alla cattedrale di Cusco, in Plaza de Armas',
    immagine: '/images/peru/cusco-plaza-de-armas-venditrice-riccardo.jpg',
  },
  {
    slug: 'valle-sacra',
    paeseSlug: 'peru',
    ordine: 2,
    nome: 'Valle Sacra degli Inca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 giorni, meglio dormendoci invece di farla in giornata da Cusco',
    visitataPersonalmente: true,
    introduzione:
      'La valle del fiume Urubamba tra Cusco e Machu Picchu: terrazzamenti, saline ancora in uso dai tempi degli Inca, villaggi di tessitori e la fortezza di Ollantaytambo, da cui partono i treni.',
    percheAndarci:
      'Sta 500-600 metri più in basso di Cusco, quindi è il posto giusto dove acclimatarsi dormendo meglio, ed è piena di siti che quasi nessuno visita con calma perché tutti corrono a Machu Picchu.',
    cosaVedere: [
      'Ollantaytambo, l\'unico insediamento inca ancora abitato secondo l\'impianto originale, con la fortezza a terrazze sopra il paese',
      'Le saline di Maras, migliaia di vasche bianche scavate nel fianco della montagna',
      'Moray, i terrazzamenti circolari concentrici usati dagli Inca come laboratorio agricolo',
      'Il mercato e il sito archeologico di Pisac',
      'Chinchero, per la tessitura tradizionale',
    ],
    cosaFare: [
      'Dormire a Ollantaytambo la sera prima del treno per Machu Picchu: si guadagna un\'ora abbondante di sonno rispetto a partire da Cusco',
      'Giro in bici o quad tra Maras e Moray',
      'Rafting sull\'Urubamba o parapendio sopra la valle',
      'Laboratorio di tessitura con una cooperativa di donne a Chinchero',
    ],
    doveDormire:
      'Ollantaytambo è la scelta più strategica per il treno; Urubamba ha le strutture più confortevoli; Pisac è la più tranquilla e alternativa.',
    doveMangiare:
      'Nella valle si mangia meglio nei ristoranti di campagna con vista sui terrazzamenti che nei locali turistici di Pisac. Da cercare la trucha (trota) dei fiumi della zona e il classico menú del día, che a mezzogiorno costa pochissimo ed è quello che mangiano i locali.',
    comeArrivare: 'Circa 1h30 di auto da Cusco a Ollantaytambo; collettivi frequenti ed economici da Calle Pavitos a Cusco.',
    comeSpostarsi: 'Auto con autista o tour organizzato per coprire Maras, Moray e Pisac in una giornata; collettivi tra i paesi principali.',
    periodoMigliore: 'maggio-settembre; nella stagione delle piogge le strade sterrate verso Maras si fanno difficili',
    costi: 'la maggior parte dei siti è inclusa nel Boleto Turístico; le saline di Maras hanno un biglietto a parte, da pagare in contanti all\'ingresso',
    erroriDaEvitare: [
      'Comprimere Valle Sacra e Machu Picchu in un\'unica giornata di corsa: è il classico errore che toglie senso a entrambe',
      'Dormire a Cusco la sera prima del treno delle 5 o 6 del mattino da Ollantaytambo',
    ],
    miaEsperienza:
      'Sta cinquecento metri più in basso di Cusco, e da qui in poi si dorme meglio. Il primo giorno Pisac, col mercato e il sito sulla collina, poi Ollantaytambo, dove abbiamo dormito per essere pronti al treno del mattino per Machu Picchu. Il paese dà il meglio la sera, quando i pullman dei tour sono ripartiti e torna ai suoi abitanti. Il giorno dopo il resto della valle: le saline di Maras, vasche scavate nella montagna e usate da generazioni dalle stesse famiglie, i terrazzamenti circolari di Moray e Chinchero, per la tessitura. È la tappa da allungare se si ha un giorno in più, ed è quella che quasi tutti sacrificano per correre a Machu Picchu.',
    luoghi: [
      {
        "nome": "Pisac",
        "testo": "Un paese con un mercato artigianale e, sulla collina, un sito inca con terrazzamenti e il quartiere cerimoniale. Il sito è meno visitato di Machu Picchu e si cammina quasi da soli.",
        "come": "Da Cusco in collettivo o auto. Il sito archeologico è incluso nel Boleto Turístico; il mercato è nel paese.",
        "quando": "Mattina presto per il sito, poi mercato. Il mercato si tiene martedì, giovedì e domenica; il più grande è la domenica.",
        "tempo": "Mezza giornata",
        "consiglio": "Se hai un giorno solo, vai al sito la mattina e scendi al mercato per pranzo."
      },
      {
        "nome": "Ollantaytambo",
        "testo": "Un villaggio con un reticolo di strade di origine inca e alcune delle abitazioni abitate senza interruzione più antiche del Sud America, sotto una fortezza a terrazze. Da qui parte la maggior parte dei treni per Machu Picchu.",
        "come": "In auto o collettivo da Cusco, circa 72 km di strada. Si visita a piedi. Il sito è incluso nel Boleto Turístico.",
        "quando": "Il sito la mattina; il paese dà il meglio la sera, quando i pullman dei tour sono ripartiti.",
        "tempo": "2-3 ore per il sito, una notte per il paese",
        "consiglio": "Dormici la sera prima del treno per Machu Picchu: dormi di più che partendo da Cusco.",
        "url": "https://cosituccusco.pe/tarifario/"
      },
      {
        "nome": "Saline di Maras",
        "testo": "Tantissime vasche bianche scavate nel fianco della montagna, alimentate da una sorgente salata e usate da generazioni dalle stesse famiglie.",
        "come": "In auto con autista o tour, spesso in combinazione con Moray. Si cammina sul bordo delle vasche, dove il passaggio è consentito.",
        "quando": "Mattina o tardo pomeriggio, quando il sale è più bianco.",
        "tempo": "1 ora",
        "costo": "Biglietto a parte, non incluso nel Boleto Turístico: si paga in contanti all'ingresso",
        "consiglio": "Le strade sterrate verso Maras diventano difficili nella stagione delle piogge."
      },
      {
        "nome": "Moray",
        "testo": "Terrazzamenti circolari concentrici, una specie di anfiteatro: gli Inca li usavano come laboratorio agricolo, con differenze di temperatura fra i livelli.",
        "come": "In auto o bici da Maras. Incluso nel Boleto Turístico.",
        "quando": "Tutto il giorno; la luce del mattino è la migliore.",
        "tempo": "45 minuti",
        "consiglio": "Il giro in bici o quad tra Maras e Moray è una buona alternativa alla macchina."
      },
      {
        "nome": "Chinchero",
        "testo": "Un paese di tessitrici sopra la valle, con terrazzamenti inca e la chiesa coloniale di Nuestra Señora de la Natividad.",
        "come": "Da Cusco, sulla strada per la valle. Sito incluso nel Boleto Turístico.",
        "quando": "Mattina.",
        "tempo": "1-2 ore",
        "consiglio": "Un laboratorio di tessitura con una cooperativa di donne vale più dei negozi turistici."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: Pisac (sito e mercato)",
          "Pranzo ad Urubamba",
          "Pomeriggio: Ollantaytambo",
          "Rientro a Cusco o notte lì"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Chinchero, Moray, Maras, poi notte a Ollantaytambo",
          "Giorno 2: Pisac la mattina, oppure treno per Machu Picchu da Ollantaytambo"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Pisac e notte a Pisac o Urubamba",
          "Giorno 2: Chinchero, Moray, Maras, notte a Ollantaytambo",
          "Giorno 3: Ollantaytambo e treno per Aguas Calientes"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ollantaytambo",
        "perChi": "Chi prende il treno per Machu Picchu",
        "testo": "La scelta più strategica: stazione a piedi, vicoli inca e poca folla la sera. Piccola, con meno scelta di locali."
      },
      {
        "nome": "Urubamba",
        "perChi": "Chi cerca comfort e centralità",
        "testo": "Il paese con le strutture più confortevoli e spesso più spazio, a metà valle. Meno carattere."
      },
      {
        "nome": "Pisac",
        "perChi": "Chi vuole tranquillità e atmosfera alternativa",
        "testo": "Più tranquilla e con una scena di artigiani, ma più lontana dal treno. Il mercato la domenica porta molta gente."
      }
    ],
    sapori: [
      {
        "nome": "Trucha",
        "testo": "Trota dei fiumi della zona, alla griglia o fritta. Si mangia nei ristoranti di campagna lungo la valle."
      },
      {
        "nome": "Menú del día",
        "testo": "A mezzogiorno costa pochissimo ed è quello che mangiano i locali."
      },
      {
        "nome": "Chicha morada e chicha de jora",
        "testo": "La prima è una bevanda di mais viola analcolica, la seconda è una birra di mais fermentato. Si trovano nei paesi, anche nei mercati."
      },
      {
        "nome": "Maiz cancha e choclo con queso",
        "testo": "Mais tostato e pannocchie grandi con formaggio fresco, spuntino da strada e da tavola in tutta la valle."
      }
    ],
    attenzioni: [
      "Non comprimere Valle Sacra e Machu Picchu in un'unica giornata: perdono senso entrambe.",
      "Tour con prezzi bassi che fanno tappe lunghe in negozi turistici: chiedi in anticipo quali siti sono inclusi.",
      "Strade sterrate verso Maras e Moray difficili nella stagione delle piogge.",
      "Treno per Machu Picchu: i posti si esauriscono con settimane di anticipo nei mesi di punta."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'Migliaia di vasche di sale di Maras che scendono a gradoni lungo il fianco della Valle Sacra',
    immagine: '/images/peru/saline-maras-riccardo.jpg',
  },
  {
    slug: 'machu-picchu',
    paeseSlug: 'peru',
    ordine: 3,
    nome: 'Machu Picchu',
    tipologia: ['cultura', 'trekking'],
    giorniConsigliati: '2 giorni (una notte ad Aguas Calientes) per entrare all\'apertura senza corse',
    visitataPersonalmente: true,
    introduzione:
      'La cittadella inca del XV secolo sospesa tra le montagne, e la meta con il sistema di accesso più regolamentato di tutto il Sud America: quote giornaliere, fasce orarie fisse, circuiti obbligati e biglietti extra a numero molto chiuso per le vette.',
    percheAndarci:
      'Perché è ciò che promette di essere, e perché il modo in cui ci si arriva cambia tutto il viaggio: arrivarci in treno o dopo quattro giorni di cammino attraverso la Porta del Sole sono due esperienze diverse.',
    cosaVedere: [
      'L\'Intihuatana, la pietra rituale legata all\'osservazione solare, uno dei pochi sopravvissuti alla distruzione coloniale',
      'Il Tempio del Sole e il Recinto Reale, dove la muratura inca raggiunge il massimo livello',
      'I terrazzamenti agricoli, con le prospettive fotografiche classiche',
      'Huayna Picchu, la vetta che fa da sfondo alle foto: salita ripida con biglietto separato',
      'Intipunku, la Porta del Sole, punto d\'arrivo del Cammino Inca',
    ],
    cosaFare: [
      'Scegliere il circuito giusto al momento della prenotazione: i percorsi sono numerati e vincolanti, non ci si muove liberamente nel sito',
      'Aggiungere la salita a Huayna Picchu o alla Montaña Machu Picchu, entrambe con quota separata e molto limitata',
      'Dormire ad Aguas Calientes per entrare al primo turno, quando il sito è più vuoto',
    ],
    confronti: [
      {
        titolo: 'Come arrivare a Machu Picchu: tutte le opzioni a confronto',
        introduzione:
          'Non esiste una strada che arrivi a Machu Picchu: si arriva solo in treno, a piedi, o con una combinazione delle due cose. La scelta pesa sul budget molto più del biglietto d\'ingresso, che costa relativamente poco. Tutte le opzioni convergono su Aguas Calientes (Machu Picchu Pueblo), da cui si sale con il bus navetta in 25 minuti o a piedi in 1h30-2h.',
        opzioni: [
          {
            nome: 'Treno da Ollantaytambo o Cusco',
            sintesi:
              'La via classica: treno PeruRail o IncaRail fino ad Aguas Calientes, poi bus navetta fino all\'ingresso. Le partenze da Ollantaytambo sono più numerose e più economiche di quelle da Cusco/Poroy.',
            costo: 'treno 70-500$ andata e ritorno secondo la classe (Expedition/Voyager le economiche, Vistadome panoramico, Hiram Bingham di lusso), più 24$ di bus navetta A/R e l\'ingresso al sito (152 soles per gli stranieri adulti nei circuiti senza montagna, 2026)',
            durata: '1 giorno da Ollantaytambo, meglio 2 con notte ad Aguas Calientes',
            pro: [
              'Nessuna preparazione fisica richiesta, adatto a tutti',
              'Tempi certi e prevedibili, utile se si hanno pochi giorni',
              'Permette di dormire ad Aguas Calientes ed entrare al primo turno',
            ],
            contro: [
              'Di gran lunga l\'opzione più cara',
              'I posti in treno si esauriscono con settimane di anticipo nei mesi di punta',
              'Zero senso di "arrivo" progressivo: si passa dal vagone alla cittadella in poche ore',
            ],
            perChi: 'Chi ha poco tempo, viaggia con bambini o non vuole affrontare un trek in quota.',
          },
          {
            nome: 'Cammino Inca classico (4 giorni)',
            sintesi:
              'Il trek storico lungo la via lastricata originale, con arrivo a Machu Picchu attraverso Intipunku, la Porta del Sole, all\'alba dell\'ultimo giorno. Obbligatorio andarci con un\'agenzia autorizzata: non è percorribile in autonomia.',
            costo: 'indicativamente 600-900$ a persona, tutto incluso (permesso, guida, portatori, campo, pasti, treno di rientro)',
            durata: '4 giorni, 3 notti',
            pro: [
              'L\'arrivo dalla Porta del Sole è il modo in cui il sito era pensato per essere visto',
              'Siti inca lungo il percorso che nessun\'altra via tocca',
              'Tutto organizzato: portatori, cuoco, tende',
            ],
            contro: [
              'I permessi sono contingentati e si esauriscono anche 5-6 mesi prima, soprattutto per i mesi da maggio ad agosto',
              'Chiuso tutto febbraio per manutenzione',
              'Passo Warmiwañusca a 4.215 metri: serve acclimatamento vero',
            ],
            perChi: 'Chi vuole l\'esperienza storica completa e può prenotare con molti mesi di anticipo.',
          },
          {
            nome: 'Cammino Inca corto (2 giorni)',
            sintesi:
              'Versione ridotta che parte dal km 104 della ferrovia e copre l\'ultimo tratto del sentiero originale, con arrivo alla Porta del Sole nel pomeriggio e visita del sito il giorno dopo.',
            costo: 'indicativamente 400-550$ a persona',
            durata: '2 giorni, 1 notte (ad Aguas Calientes, non in tenda)',
            pro: [
              'Si arriva comunque da Intipunku, come nel percorso classico',
              'Molto meno impegnativo, si dorme in hotel',
              'Permessi più facili da trovare rispetto al classico',
            ],
            contro: [
              'Richiede comunque un permesso a numero chiuso',
              'Si perde gran parte del percorso e dei siti intermedi',
            ],
            perChi: 'Chi vuole l\'arrivo dalla Porta del Sole senza quattro giorni di campo in quota.',
          },
          {
            nome: 'Trek del Salkantay (4-5 giorni)',
            sintesi:
              'L\'alternativa più popolare al Cammino Inca: passo a 4.630 metri sotto il ghiacciaio Salkantay, poi discesa verso la foresta nuvolosa e arrivo ad Aguas Calientes via Hidroeléctrica.',
            costo: 'indicativamente 350-600$ a persona secondo il livello dei campi',
            durata: '4-5 giorni',
            pro: [
              'Nessun permesso a numero chiuso: si può prenotare anche pochi giorni prima',
              'Paesaggi più vari del Cammino Inca, dal ghiacciaio alla giungla',
              'Costa sensibilmente meno',
            ],
            contro: [
              'Il passo è più alto di quello del Cammino Inca: la quota si sente',
              'Non si arriva dalla Porta del Sole ma dal basso, come chi arriva in treno',
            ],
            perChi: 'Chi vuole un trek impegnativo e panoramico senza dipendere dai permessi.',
          },
          {
            nome: 'Via Hidroeléctrica (bus + camminata)',
            sintesi:
              'L\'opzione low cost: minibus da Cusco fino alla centrale di Hidroeléctrica, poi 2-3 ore di cammino pianeggiante lungo i binari fino ad Aguas Calientes.',
            costo: 'indicativamente 30-60$ andata e ritorno per il trasporto',
            durata: '2 giorni (6-7 ore di strada per tratta più la camminata)',
            pro: [
              'Di gran lunga la via più economica per raggiungere il sito',
              'La camminata finale lungo la ferrovia è piacevole e pianeggiante',
            ],
            contro: [
              'La strada è lunga, tortuosa e in alcuni tratti esposta: non è un tragitto comodo',
              'Nella stagione delle piogge sono frequenti frane e interruzioni',
              'Giornata molto lunga, con partenza prima dell\'alba',
            ],
            perChi: 'Chi viaggia con budget ridotto e ha un giorno in più da spendere.',
          },
          {
            nome: 'Inca Jungle Trek (3-4 giorni)',
            sintesi:
              'Formula avventura che mette insieme discesa in mountain bike, rafting, zipline e camminata, con arrivo finale ad Aguas Calientes.',
            costo: 'indicativamente 250-450$ a persona secondo le attività incluse',
            durata: '3-4 giorni',
            pro: [
              'Il modo più divertente di arrivarci se si cerca adrenalina più che archeologia',
              'Nessun permesso richiesto',
              'Quote più basse rispetto agli altri trek: meno problemi di altitudine',
            ],
            contro: [
              'Poco contenuto storico-archeologico lungo il percorso',
              'La qualità di bici e attrezzature varia molto da operatore a operatore',
            ],
            perChi: 'Chi è giovane dentro, cerca attività e non è interessato al cammino storico.',
          },
        ],
        raccomandazione:
          'Con date fisse e poco tempo, treno da Ollantaytambo con notte ad Aguas Calientes: si entra al primo turno e si evita la corsa. Con 4-5 giorni e voglia di camminare, il Salkantay dà più paesaggio per meno soldi e senza l\'ansia dei permessi. Il Cammino Inca classico vale la pena solo se si può decidere (e prenotare) con almeno cinque o sei mesi di anticipo.',
      },
    ],
    doveDormire:
      'Aguas Calientes (Machu Picchu Pueblo) è l\'unica base che permette di entrare al primo turno senza dipendere dal primo treno del giorno; in alternativa Ollantaytambo o la Valle Sacra per una visita in giornata.',
    doveMangiare:
      'Aguas Calientes vive di turismo e i prezzi lo dimostrano: i ristoranti sulla via principale sono cari e mediocri, meglio scendere verso il mercato per mangiare a una frazione del prezzo. Conviene comunque portarsi acqua e qualcosa da mangiare per la visita, perché dentro il sito non si può consumare cibo.',
    comeArrivare: 'Vedi il confronto qui sopra: treno, trek o via Hidroeléctrica, tutte con arrivo ad Aguas Calientes.',
    comeSpostarsi:
      'Da Aguas Calientes all\'ingresso del sito: bus navetta Consettur, circa 25 minuti e 24$ andata e ritorno, oppure 1h30-2h a piedi in salita. Dentro il sito ci si muove solo lungo il circuito assegnato.',
    periodoMigliore:
      'maggio-settembre per i cieli limpidi, ma è anche il periodo in cui tutto si esaurisce prima. Aprile e ottobre sono un buon compromesso tra meteo e affollamento',
    costi:
      'Ingresso per gli stranieri adulti (2026): 152 soles per i circuiti senza montagna, 200 soles per le rutas con Huayna Picchu, la Montaña Machu Picchu o la Gran Caverna. Dal 1° maggio 2026 è stato annunciato un aumento di 11 soles per gli stranieri adulti: controlla la cifra finale al momento dell\'acquisto. Ci sono tre circuiti e dieci rutas, a numero chiuso (4.500 ingressi al giorno, 5.600 in alta stagione). L\'unico venditore ufficiale è il portale del Ministero della Cultura, tuboleto.cultura.pe: tutto il resto sono rivenditori con ricarico.',
    erroriDaEvitare: [
      'Prenotare tardi: per Huayna Picchu servono 2-3 mesi di anticipo in qualsiasi stagione, 3-4 nei mesi di punta, e i posti finiscono in fretta',
      'Comprare i biglietti da rivenditori non ufficiali a prezzi gonfiati invece che su tuboleto.cultura.pe',
      'Scegliere il circuito senza leggere cosa include: i percorsi sono vincolanti e alcuni non passano dai punti che si danno per scontati',
      'Arrivare a Cusco e salire a Machu Picchu il giorno dopo, senza acclimatamento',
    ],
    miaEsperienza:
      'Il momento che mi porto dietro dal Perù è Machu Picchu all\'alba. Entrare tra i primi, quando la cittadella è ancora quasi vuota, ripaga la sveglia nel buio e la strada per arrivarci: il consiglio che vale più di tutti è dormire ad Aguas Calientes ed entrare al primo turno, più che per la luce per quei quaranta minuti in cui il posto è ancora silenzioso. Ci sono arrivato in più modi: con un trekking di cinque giorni, col pulmino fino a Hidroeléctrica e poi a piedi, e in treno, nella classe economica. Ho fatto anche il Huayna Picchu: è bellissimo, ma va prenotato per tempo e chi soffre di vertigini deve pensarci bene. Conviene sapere prima che non si gira liberamente: il circuito scelto al momento della prenotazione decide cosa si vedrà e cosa no.',
    luoghi: [
      {
        "nome": "La cittadella e i circuiti di visita",
        "testo": "Il complesso inca del XV secolo con terrazzamenti agricoli, il Tempio del Sole, il Recinto Reale e l'Intihuatana, la pietra rituale legata al sole.",
        "come": "Si arriva ad Aguas Calientes in treno o a piedi, poi bus navetta o salita a piedi. Dentro il sito il percorso è obbligato: si sceglie il circuito al momento dell'acquisto e non ci si muove liberamente. Regole su guida e circuiti sul portale ufficiale.",
        "quando": "Il primo turno è il più tranquillo e ripaga la sveglia. La stagione secca è anche quella in cui i posti finiscono prima.",
        "tempo": "3-4 ore",
        "costo": "152 soles per gli stranieri adulti nei circuiti senza montagna (2026). Tariffa aggiornata da controllare sul portale ufficiale, l'unico dove comprare",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "Dormi ad Aguas Calientes per entrare al primo turno. Porta acqua e uno snack da consumare prima di entrare."
      },
      {
        "nome": "Huayna Picchu",
        "testo": "La vetta che compare sullo sfondo delle foto, con una salita ripida su gradini di pietra e tratti esposti. In cima si vede la cittadella dall'alto.",
        "come": "Biglietto separato con ingresso a fasce orarie e posti molto limitati. La salita parte dall'interno del sito: mettila in conto con calma, è ripida.",
        "quando": "Fasce orarie al mattino. Prenota con largo anticipo, soprattutto nei mesi di punta.",
        "tempo": "2-3 ore",
        "costo": "Biglietto separato dalla sola cittadella: tariffa sul portale ufficiale",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "Rick l'ha fatto: è bellissimo, ma chi soffre di vertigini deve pensarci bene."
      },
      {
        "nome": "Montaña Machu Picchu",
        "testo": "La montagna alle spalle della cittadella, alternativa a Huayna Picchu, con una vista più ampia e un percorso più lungo ma meno esposto.",
        "come": "Biglietto separato a numero chiuso, stesse regole di prenotazione di Huayna Picchu. La salita parte dal sito.",
        "quando": "Fasce orarie al mattino; prenota con largo anticipo.",
        "tempo": "3-4 ore di salita e discesa",
        "costo": "Biglietto separato dalla sola cittadella: tariffa sul portale ufficiale",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "Se Huayna Picchu è esaurito o hai paura dei tratti esposti, questa è l'alternativa."
      },
      {
        "nome": "Intipunku, la Porta del Sole",
        "testo": "Il valico da cui chi percorre il Cammino Inca vede per la prima volta la cittadella all'alba. Si può raggiungere anche con una camminata dal sito.",
        "come": "Camminata in salita dall'interno del sito, lungo il sentiero originale.",
        "quando": "Alba per chi arriva dal Cammino Inca; per gli altri, mattina.",
        "tempo": "1,5-2 ore andata e ritorno",
        "consiglio": "Dà una vista diversa e quasi vuota. Chiedi all'ingresso se il circuito prenotato include il tratto."
      },
      {
        "nome": "Aguas Calientes (Machu Picchu Pueblo)",
        "testo": "Il paese-base di tutta la visita, costruito attorno ai binari. Ha le terme che danno il nome e il mercato, ma vive di turismo e si vede dai prezzi.",
        "come": "Solo in treno o a piedi (vedi il confronto sopra). Da qui parte il bus navetta Consettur per il sito.",
        "quando": "Si dorme una notte per entrare al primo turno.",
        "tempo": "Una notte",
        "consiglio": "Scendi verso il mercato per mangiare a una frazione dei prezzi della via principale."
      },
      {
        "nome": "Come arrivare: treno, Cammino Inca, Salkantay, Hidroeléctrica",
        "testo": "La scelta del come pesa sul budget più dell'ingresso. Rick ci è arrivato in treno, in classe economica, con il pulmino fino a Hidroeléctrica e poi a piedi, e con un trekking di cinque giorni.",
        "come": "Treno PeruRail o IncaRail da Ollantaytambo o Cusco; trek del Salkantay senza permessi a numero chiuso; Cammino Inca solo con agenzia autorizzata e permessi che si esauriscono con largo anticipo.",
        "quando": "Il Cammino Inca è chiuso a febbraio. La stagione secca è la più richiesta.",
        "tempo": "Da 1 giorno (treno) a 4-5 giorni (trek)",
        "consiglio": "Con date fisse: treno da Ollantaytambo e notte ad Aguas Calientes. Con 4-5 giorni, il Salkantay."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Treno da Ollantaytambo al mattino presto",
          "Bus navetta e visita guidata di 2-3 ore",
          "Rientro in treno nel pomeriggio (giornata lunga, tempi stretti)"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: treno ad Aguas Calientes nel pomeriggio, cena e a letto presto",
          "Giorno 2: primo bus del mattino, ingresso al primo turno, eventuale Huayna Picchu, rientro in treno"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Valle Sacra e notte a Ollantaytambo",
          "Giorno 2: treno, Machu Picchu al primo turno",
          "Giorno 3: seconda mattina al sito o terme e rientro"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aguas Calientes",
        "perChi": "Chi vuole entrare al primo turno",
        "testo": "L'unica base che non dipende dal primo treno. Prezzi alti per quel che offre, rumore dei binari e dei locali."
      },
      {
        "nome": "Ollantaytambo",
        "perChi": "Chi prende il treno e vuole dormire in un paese vero",
        "testo": "Più tranquilla e con vicoli inca. Il treno parte presto, quindi la sveglia è prima dell'alba."
      },
      {
        "nome": "Valle Sacra (Urubamba)",
        "perChi": "Chi visita in giornata e non vuole dormire in quota alta",
        "testo": "Più bassa e comoda, ma richiede una giornata molto lunga per il sito."
      }
    ],
    sapori: [
      {
        "nome": "Menú del día al mercato di Aguas Calientes",
        "testo": "Zuppa e piatto unico a una frazione dei prezzi dei ristoranti sulla via principale."
      },
      {
        "nome": "Trucha",
        "testo": "Trota del fiume, il piatto più comune sui menù locali."
      },
      {
        "nome": "Lomo saltado",
        "testo": "Manzo saltato con cipolla, pomodoro e patate fritte, servito con riso. Si trova ovunque."
      },
      {
        "nome": "Chicha morada",
        "testo": "Bevanda di mais viola, analcolica e dolce, accompagna quasi tutti i pasti."
      }
    ],
    attenzioni: [
      "Compra i biglietti solo su tuboleto.cultura.pe: i rivenditori ricaricano il prezzo.",
      "Il circuito scelto è vincolante: leggi cosa include prima di pagare.",
      "Il sito ha quote giornaliere e fasce orarie: senza prenotazione non si entra.",
      "Non salire a Machu Picchu il giorno dopo l'arrivo a Cusco: serve acclimatamento.",
      "Bus lunghi e strade verso Hidroeléctrica: tortuose e con frane nella stagione delle piogge."
    ],
    esperienzeSlugs: ['huayna-picchu', 'cammino-inca'],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'Un lama solitario pascola sui terrazzamenti inca di Machu Picchu avvolti nella nebbia del mattino',
    immagine: '/images/peru/machu-picchu-lama-terrazze-riccardo.jpg',
  },
  {
    slug: 'choquequirao',
    paeseSlug: 'peru',
    ordine: 4,
    nome: 'Choquequirao',
    tipologia: ['trekking', 'cultura', 'avventura'],
    giorniConsigliati: '4-5 giorni per l\'andata e ritorno classico',
    visitataPersonalmente: false,
    immagine: '/images/peru/choquequirao.jpg',
    imageAlt: 'I terrazzamenti inca di Choquequirao con i lama di pietra bianca nei muri e un gruppo di escursionisti sulla terrazza',
    introduzione:
      'La "sorella di Machu Picchu": una cittadella inca di dimensioni paragonabili, scavata solo per circa un terzo, appollaiata sopra il canyon dell\'Apurímac. Ci arrivano meno di diecimila persone all\'anno, contro il milione e mezzo di Machu Picchu, e il motivo è semplice: non c\'è altro modo che camminare per due giorni.',
    percheAndarci:
      'È il posto dove si può stare davanti a rovine inca di quella scala quasi da soli, cosa che a Machu Picchu non succede più da decenni. Ed è una finestra che si sta chiudendo: da anni si parla di una teleferica che ridurrebbe l\'accesso da due giorni di cammino a venti minuti.',
    cosaVedere: [
      'La piazza cerimoniale e il settore degli usnu, la parte centrale della cittadella',
      'Le terrazze delle llamas, decorate con figure di lama in pietra bianca incastonata',
      'Il settore agricolo con i terrazzamenti che scendono lungo il fianco della montagna',
      'Il canyon dell\'Apurímac, uno dei più profondi del continente, che si attraversa scendendo e risalendo circa 1.500 metri per lato',
    ],
    cosaFare: [
      'Il trek classico di 4-5 giorni da Cachora, andata e ritorno per la stessa via (vedi la scheda esperienza dedicata)',
      'La traversata lunga Choquequirao-Machu Picchu, 8-9 giorni, uno dei trek più duri e belli del Perù',
      'Fermarsi due notti al sito invece di una, per avere una giornata piena tra le rovine senza la stanchezza della salita',
    ],
    doveDormire:
      'Campeggio lungo tutto il percorso (Chiquisca, Santa Rosa, Marampata), con alcune famiglie che affittano spazi e servizi essenziali a Marampata, il villaggio più vicino al sito.',
    doveMangiare: 'Pasti preparati dalla propria organizzazione di trek; a Marampata e Chiquisca si trova qualcosa di semplice.',
    comeArrivare: 'Da Cusco circa 4 ore di auto fino a Cachora (regione di Apurímac), il punto di partenza del sentiero.',
    comeSpostarsi: 'Solo a piedi. I muli si possono noleggiare per i bagagli e, in alcuni tratti, per chi è in difficoltà.',
    periodoMigliore:
      'da aprile a ottobre. Nella stagione delle piogge il sentiero diventa pericoloso per le frane e il caldo nel canyon è pesante in qualsiasi periodo',
    costi:
      'Trek organizzato indicativamente 400-700$ a persona per 4-5 giorni con guida, muli e pasti; in autonomia si spende molto meno, più l\'ingresso al sito, che si paga al posto di controllo.',
    confronti: [
      {
        titolo: 'Andarci ora o aspettare la teleferica?',
        introduzione:
          'Il progetto di una teleferica per Choquequirao esiste dal 2011 e da allora è stato rinviato più volte per ragioni tecniche, legali, ambientali e sociali. Nel 2026 è ancora in fase di gara, con il modello della partnership pubblico-privata, e senza una data di costruzione confermata. Cambierebbe del tutto il posto.',
        opzioni: [
          {
            nome: 'Andarci adesso, a piedi',
            sintesi: 'Il trek di 4-5 giorni da Cachora, come si fa oggi: due giorni di cammino per arrivare, con discesa e risalita del canyon dell\'Apurímac.',
            durata: '4-5 giorni',
            costo: '400-700$ con agenzia, molto meno in autonomia',
            pro: [
              'Rovine di scala monumentale quasi deserte: oggi ci vanno circa 10.000 persone l\'anno',
              'Il percorso in sé è considerato più duro del Cammino Inca e del Salkantay ed è parte dell\'esperienza',
              'Nessuna infrastruttura turistica: il posto è ancora com\'era',
            ],
            contro: [
              'Fisicamente impegnativo: circa 1.500 metri di dislivello in discesa e altrettanti in salita, due volte, con caldo forte nel fondovalle',
              'Serve tempo: 4-5 giorni minimo, difficili da incastrare in un itinerario corto',
            ],
            perChi: 'Chi cammina volentieri e vuole vedere il posto prima che cambi.',
          },
          {
            nome: 'Aspettare la teleferica',
            sintesi:
              'Il progetto prevede oltre 10 km di percorso aereo tra Kiuñalla (Apurímac) e Yanama (Cusco), con un investimento stimato attorno ai 261 milioni di dollari.',
            durata: '20 minuti invece di due giorni di cammino',
            pro: [
              'Renderebbe il sito accessibile a chiunque, a prescindere dalla forma fisica',
              'Tempi compatibili con una visita in giornata da Cusco',
            ],
            contro: [
              'Nessuna data di costruzione confermata: l\'aggiudicazione era attesa nell\'ultimo trimestre del 2026 e il progetto slitta da oltre un decennio',
              'La capacità passerebbe da circa 10.000 visitatori l\'anno a oltre un milione: sarebbe un altro posto',
            ],
            perChi: 'Chi non può o non vuole affrontare quattro giorni di trek in quota.',
          },
        ],
        raccomandazione:
          'Se si è in grado di camminare, andarci adesso. Oggi il valore di Choquequirao sta nelle rovine e anche nel fatto che ci si arriva a fatica e ci si sta quasi da soli: proprio quello che la teleferica eliminerebbe.',
      },
    ],
    erroriDaEvitare: [
      'Sottovalutarlo perché "è meno famoso di Machu Picchu": le guide di Cusco lo considerano più duro sia del Cammino Inca sia del Salkantay',
      'Portare troppo peso: il dislivello si sente moltissimo, i muli per i bagagli valgono ogni sol speso',
      'Andarci nella stagione delle piogge, quando il sentiero sul fianco del canyon diventa pericoloso',
      'Programmare una sola notte al sito: si arriva stanchi e si riparte subito, perdendo il senso del posto',
    ],
    miaEsperienza:
      '',
    luoghi: [
      {
        "nome": "La cittadella di Choquequirao",
        "testo": "Una cittadella inca chiamata la «città sorella» di Machu Picchu per struttura e architettura, scavata solo in parte (tra il 30 e il 40%). Ci arriva poca gente, perché non c'è altro modo che camminare.",
        "come": "Solo a piedi da Cachora, dopo due giorni di cammino. Si dorme in campeggio vicino al sito; guida consigliata.",
        "quando": "Stagione secca. Nella stagione delle piogge il sentiero è pericoloso.",
        "tempo": "Una mattina o un giorno intero; meglio due notti",
        "costo": "Ingresso al sito da pagare al posto di controllo prima della cittadella; tariffa sul sito del Ministero della Cultura",
        "consiglio": "Fermati due notti per avere una giornata piena tra le rovine senza la stanchezza della salita."
      },
      {
        "nome": "Le terrazze delle llamas",
        "testo": "Terrazzamenti decorati con figure di lama e altri camelidi in pietra bianca incastonata nel muro, il dettaglio più riconoscibile del sito.",
        "come": "Nel settore agricolo del sito, raggiungibile con un breve cammino dall'area centrale.",
        "quando": "Mattina presto, con la luce radente sui muri.",
        "tempo": "30-60 minuti",
        "consiglio": "Portati un teleobiettivo o stai vicino ai muri: le figure sono piccole."
      },
      {
        "nome": "Il canyon dell'Apurímac",
        "testo": "Un canyon profondissimo: tra il sito e il fiume ci sono circa 1.600 metri di dislivello, e il sentiero li scende e li risale, con caldo forte sul fondo.",
        "come": "Il sentiero parte da Cachora, scende fino al fiume e risale verso Marampata. Le tappe si fanno con campi lungo il percorso.",
        "quando": "Parti all'alba per evitare il caldo nel fondovalle.",
        "tempo": "2 giorni di cammino all'andata, 2 al ritorno",
        "consiglio": "I muli per i bagagli valgono ogni sol speso: il dislivello si sente moltissimo."
      },
      {
        "nome": "Marampata e i campi lungo il sentiero",
        "testo": "Il villaggio poco prima del sito, con alcune famiglie che affittano spazi per la tenda e servizi essenziali. Più in basso, Chiquisca e Santa Rosa sono le soste classiche.",
        "come": "Lungo il sentiero, poco prima del sito.",
        "quando": "Come tappa di sera, prima dell'ultima salita.",
        "tempo": "Una notte",
        "consiglio": "Porta contanti in monete e tagli piccoli: non ci sono bancomat."
      }
    ],
    programmi: [
      {
        "titolo": "4-5 giorni",
        "tappe": [
          "Giorno 1: Cusco-Cachora in auto, poi discesa verso il fiume e primo campo",
          "Giorno 2: risalita verso Marampata",
          "Giorno 3: visita di Choquequirao",
          "Giorno 4: ritorno verso Chiquisca o Santa Rosa",
          "Giorno 5: risalita a Cachora e rientro a Cusco"
        ]
      }
    ],
    zone: [
      {
        "nome": "Cachora",
        "perChi": "Chi parte e prepara il trek",
        "testo": "Il paese di partenza, con alloggi semplici e muli da noleggiare. Una notte prima di partire serve per abituarsi alla quota."
      },
      {
        "nome": "Campi lungo il sentiero (Chiquisca, Santa Rosa, Marampata)",
        "perChi": "Chi cammina",
        "testo": "Campeggio con servizi essenziali. Poco confort, molto silenzio."
      }
    ],
    sapori: [
      {
        "nome": "Pasti del trek",
        "testo": "Preparati dall'agenzia: zuppe, riso, tè di coca. In autonomia si porta tutto, tranne qualcosa di semplice a Marampata e Chiquisca."
      },
      {
        "nome": "Frutta del canyon",
        "testo": "Nel fondovalle caldo famiglie vendono arance e banane ai passanti."
      }
    ],
    attenzioni: [
      "Il trek è spesso considerato più duro del Cammino Inca e del Salkantay: non sottovalutarlo.",
      "Niente stagione delle piogge: il sentiero sul fianco del canyon diventa pericoloso.",
      "Segnale telefonico assente: lascia l'itinerario a qualcuno.",
      "Una sola notte al sito è troppo poco."
    ],
    esperienzeSlugs: ['trek-choquequirao'],
    tripSlugs: [],
  },
  {
    slug: 'amazzonia-peruviana',
    paeseSlug: 'peru',
    ordine: 5,
    nome: 'Amazzonia peruviana',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '3-4 giorni da Puerto Maldonado, 5-7 da Iquitos, 6-8 per il Manu',
    visitataPersonalmente: true,
    introduzione:
      'Oltre metà del territorio peruviano è foresta amazzonica, e la domanda vera è "da quale porta entrare": Puerto Maldonado, Iquitos e il Manu offrono tre esperienze molto diverse per costo, difficoltà e tipo di fauna.',
    percheAndarci:
      'Perché è il contrappeso giusto alle Ande e perché il Perù ha alcune delle aree protette più biodiverse del pianeta: la Riserva di Tambopata, il Parco Nazionale del Manu e la riserva Pacaya-Samiria.',
    cosaVedere: [
      'Le collpas, le pareti di argilla dove centinaia di pappagalli e ara si radunano all\'alba per integrare i minerali',
      'Le lontre giganti dei laghi a ferro di cavallo, come il Lago Sandoval',
      'I delfini rosa di fiume, più facili da avvistare nella zona di Iquitos',
      'Caimani, scimmie, bradipi e centinaia di specie di uccelli',
      'Le canopy walkway, le passerelle sospese tra le chiome degli alberi',
    ],
    cosaFare: [
      'Escursioni notturne nella foresta, quando la fauna è più attiva',
      'Navigazione all\'alba per l\'avvistamento di fauna lungo i fiumi',
      'Pesca ai piranha e visita alle comunità locali',
      'Birdwatching alle collpas, da farsi molto presto al mattino',
    ],
    confronti: [
      {
        titolo: 'Le tre porte dell\'Amazzonia peruviana a confronto',
        introduzione:
          'Puerto Maldonado, Iquitos e il Manu sono tre cose diverse: cambiano il tempo necessario, il costo, la difficoltà d\'accesso e persino gli animali che si vedono. Sceglierne una senza sapere cosa offrono le altre è il modo più comune di restare delusi da un lodge amazzonico. Noi siamo entrati da Puerto Maldonado, verso la riserva di Tambopata; Iquitos e il Manu restano qui come alternative per chi ha più giorni.',
        opzioni: [
          {
            nome: 'Puerto Maldonado (Tambopata)',
            sintesi:
              'La porta da cui siamo entrati noi, e la più semplice: voli diretti da Cusco e da Lima, e lodge raggiungibili con brevi trasferimenti in barca lungo i fiumi Madre de Dios e Tambopata.',
            costo: 'indicativamente 300-600$ per 3 notti in lodge, tutto incluso; volo da Cusco poco più di un\'ora',
            durata: '3-4 giorni, il formato ideale',
            pro: [
              'Accesso molto rapido: si può innestare in un itinerario Cusco-Machu Picchu senza stravolgerlo',
              'Ottimo per lontre giganti, ara alle collpas e fauna delle chiome',
              'Ampia scelta di lodge per tutte le fasce di prezzo',
            ],
            contro: [
              'La zona più vicina alla città è la più battuta: per la fauna migliore bisogna spingersi più a monte, e servono più ore di barca',
              'Meno "spedizione" e più circuito organizzato',
            ],
            perChi: 'Chi ha pochi giorni e vuole comunque un\'Amazzonia vera senza complicazioni logistiche.',
          },
          {
            nome: 'Iquitos (Pacaya-Samiria e Rio delle Amazzoni)',
            sintesi:
              'La più grande città al mondo non raggiungibile via strada: ci si arriva solo in aereo o risalendo il fiume. È la base per le spedizioni fluviali lunghe e per le crociere sul Rio delle Amazzoni.',
            costo: 'da 400-800$ per un lodge di qualche notte fino a diverse migliaia per le crociere fluviali',
            durata: '5-7 giorni per avere senso',
            pro: [
              'L\'esperienza fluviale più completa: si naviga sul serio invece di fare base in un lodge',
              'I delfini rosa si avvistano con più facilità che altrove',
              'La città stessa è un pezzo di storia del boom del caucciù, con un carattere che Puerto Maldonado non ha',
            ],
            contro: [
              'Si raggiunge solo via Lima: non si incastra bene in un giro andino',
              'Richiede più giorni per giustificare lo spostamento',
              'Alcune attrazioni vicino alla città sono molto turistiche, con animali tenuti in condizioni discutibili',
            ],
            perChi: 'Chi vuole il fiume come protagonista e ha una settimana da dedicargli.',
          },
          {
            nome: 'Parco Nazionale del Manu',
            sintesi:
              'Una delle aree più biodiverse del pianeta, raggiungibile da Cusco via terra e poi in barca, attraversando la discesa dalle Ande alla foresta di pianura.',
            costo: 'indicativamente 800-1.500$ per una spedizione di 6-8 giorni',
            durata: '6-8 giorni, non meno',
            pro: [
              'La biodiversità più alta delle tre: è il posto dove si vede di più',
              'La discesa dalle Ande alla foresta attraversa fasce di vegetazione del tutto diverse, gallo delle rocce compreso',
              'Poco battuto: si incontrano pochissimi altri gruppi',
            ],
            contro: [
              'Il più costoso e il più lungo: due giorni di trasferimento solo per entrare e uscire',
              'Livello di difficoltà da moderato a impegnativo',
              'La zona riservata ha accessi limitati e richiede operatori autorizzati',
            ],
            perChi: 'Chi mette la fauna al primo posto e ha tempo e budget per una vera spedizione.',
          },
        ],
        raccomandazione:
          'In un viaggio classico di due settimane in Perù, Puerto Maldonado è la scelta sensata, ed è quella che abbiamo fatto noi: costa poco in termini di tempo e dà comunque un\'Amazzonia vera, purché si scelga un lodge abbastanza lontano dalla città. Iquitos ha senso solo se si dedica una settimana al fiume. Il Manu è per chi torna in Perù una seconda volta, o per chi viene apposta per la fauna.',
      },
    ],
    doveDormire:
      'Lodge nella foresta, quasi sempre venduti a pacchetto con trasferimenti, pasti ed escursioni incluse. Conta più la distanza dalla città che il lusso della struttura: più si risale il fiume, più fauna si vede.',
    doveMangiare: 'Pasti inclusi nei pacchetti dei lodge.',
    comeArrivare:
      'Puerto Maldonado: volo da Cusco (poco più di un\'ora) o da Lima. Iquitos: volo da Lima, oppure risalendo il fiume: non esistono strade. Manu: da Cusco via terra e poi in barca, con due giorni di trasferimento.',
    comeSpostarsi: 'Solo in barca lungo i fiumi e a piedi lungo i sentieri, sempre accompagnati da una guida del lodge.',
    periodoMigliore:
      'Da maggio a ottobre (acque basse) i sentieri sono più praticabili e la fauna si concentra lungo i corsi d\'acqua; da dicembre a maggio (acque alte) si naviga più in profondità nella foresta allagata. Non esiste una stagione senza pioggia.',
    costi: 'La voce principale è il pacchetto del lodge; il volo interno da Cusco a Puerto Maldonado costa poco se prenotato per tempo.',
    erroriDaEvitare: [
      'Scegliere il lodge più vicino alla città perché costa meno: è la ragione numero uno per cui la gente torna dicendo "non abbiamo visto niente"',
      'Andare in Amazzonia per due notti: la prima e l\'ultima giornata se ne vanno quasi tutte in trasferimenti',
      'Dimenticare il certificato di vaccinazione contro la febbre gialla, richiesto da alcuni lodge',
      'Sottovalutare il repellente, la torcia frontale e i sacchetti impermeabili per l\'elettronica',
    ],
    miaEsperienza:
      'Siamo entrati in Amazzonia da Puerto Maldonado, col volo da Lima e poi la barca lungo il fiume fino a un lodge nella riserva di Tambopata. Non è il documentario che ci si aspetta: nella foresta fitta si sente molto più di quanto si veda. Abbiamo fatto la canopy walkway fra le chiome degli alberi e la navigazione fino al lago Sandoval, quello delle lontre giganti. Il momento che ha ribaltato tutto è stato l\'alba alla collpa, quando centinaia di pappagalli e ara sono arrivati insieme sulla parete d\'argilla e per venti minuti non siamo riusciti a guardare altro. L\'altra cosa che conta più di quanto sembri è la distanza dalla città: dai lodge vicini, comodi, si vede pochissimo, mentre qualche ora di barca in più cambia l\'esperienza. Al caldo umido non mi sono mai abituato del tutto, ma se si riesce, all\'Amazzonia va dedicato tempo: è incredibile.',
    luoghi: [
      {
        "nome": "Puerto Maldonado e la riserva di Tambopata",
        "testo": "La porta più comoda dell'Amazzonia peruviana, con volo da Cusco o Lima e poi barca fino ai lodge nella riserva. Qui Rick ha fatto la canopy walkway e la navigazione.",
        "come": "Volo da Cusco o da Lima, poi barca lungo il fiume. I lodge vendono pacchetti con trasferimenti ed escursioni.",
        "quando": "La stagione secca ha sentieri più praticabili e fauna concentrata lungo i fiumi.",
        "tempo": "3-4 giorni",
        "consiglio": "Scegli un lodge lontano dalla città: da quelli vicini si vede pochissimo."
      },
      {
        "nome": "La collpa dei pappagalli",
        "testo": "Una parete di argilla dove al mattino molti pappagalli e ara si radunano per integrare i minerali. È un'osservazione breve ma intensa.",
        "come": "Si raggiunge con la guida del lodge, partendo prima dell'alba. Alcune collpas sono vicine a Tambopata, altre nel Manu.",
        "quando": "All'alba, meglio nei giorni senza pioggia.",
        "tempo": "2-3 ore",
        "consiglio": "Rick l'ha vista ed è stato il momento che gli ha ribaltato il viaggio: per venti minuti non si guarda altro."
      },
      {
        "nome": "Lago Sandoval",
        "testo": "Un lago nella foresta dove si vedono uccelli e caimani e, con un po' di fortuna, le lontre giganti. Si arriva con una camminata nella foresta e poi in canoa.",
        "come": "Escursione organizzata dai lodge, a piedi più canoa.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "Mezza giornata",
        "consiglio": "Rick ci è andato in barca: porta repellente e torcia frontale."
      },
      {
        "nome": "Iquitos e Pacaya-Samiria",
        "testo": "Iquitos è la città più grande al mondo, fuori dalle isole, che non si raggiunge in strada: ci si arriva solo in aereo o in barca. Dalla città partono le spedizioni verso la riserva Pacaya-Samiria, dove Rick è stato con Ruth Amazon Expedition: notti nelle case dei contadini e in tenda nella foresta.",
        "come": "Volo da Lima o barca lungo il fiume. Da Iquitos i tour partono dalle agenzie e dagli alloggi.",
        "quando": "Tutto l'anno; la stagione secca rende i sentieri più facili.",
        "tempo": "3-4 giorni per una spedizione",
        "costo": "3 giorni 1.000 soles, 4 giorni 1.350 soles a persona con Ruth Amazon Expedition (novembre 2026)",
        "url": "https://ruthamazonexpeditions.com/",
        "consiglio": "Dormire in tenda in foresta non è per tutti: valutalo prima di partire. Il mercato di Belén si gira in autonomia ma con attenzione."
      },
      {
        "nome": "Manu",
        "testo": "Il Parco Nazionale del Manu, area protetta molto ricca di fauna, con accesso lungo e difficile.",
        "come": "Da Cusco via terra e poi in barca, con un trasferimento lungo.",
        "quando": "Stagione secca.",
        "tempo": "6-8 giorni",
        "consiglio": "Va scelto solo se si hanno almeno una settimana e un budget alto."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni (Puerto Maldonado)",
        "tappe": [
          "Giorno 1: volo, barca e arrivo al lodge",
          "Giorno 2: collpa all'alba, canopy walkway, uscita notturna",
          "Giorno 3: Lago Sandoval e rientro"
        ]
      },
      {
        "titolo": "4 giorni (Iquitos e Pacaya-Samiria)",
        "tappe": [
          "Giorno 1: Iquitos e trasferimento in barca",
          "Giorni 2-3: navigazione, camminate e notti nella foresta",
          "Giorno 4: rientro a Iquitos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lodge lontani dalla città",
        "perChi": "Chi vuole vedere fauna",
        "testo": "Più si risale il fiume, più si vede. Costano di più e richiedono più ore di barca."
      },
      {
        "nome": "Puerto Maldonado e Iquitos",
        "perChi": "Chi cerca la logistica",
        "testo": "Città di transito con alloggi semplici, caldo e rumore di mototaxi."
      }
    ],
    sapori: [
      {
        "nome": "Juane",
        "testo": "Riso con pollo avvolto in foglia di bijao, piatto tipico della selva."
      },
      {
        "nome": "Pesce di fiume",
        "testo": "Paiche, boquichico e altre specie, alla griglia o in zuppa."
      },
      {
        "nome": "Tacacho con cecina",
        "testo": "Palline di platano verde con carne affumicata, colazione tipica della selva."
      }
    ],
    attenzioni: [
      "Vaccinazione contro la febbre gialla: raccomandata per l'Amazzonia, chiedi al medico prima di partire.",
      "Repellente, torcia frontale e sacchetti impermeabili per l'elettronica.",
      "Due notti sono poche: la prima e l'ultima giornata se ne vanno in trasferimenti.",
      "Zone di confine con Ecuador, Colombia e Brasile: più rischi legati alla criminalità del narcotraffico, segui gli avvisi di viaggio ufficiali.",
      "Cerimonie di ayahuasca e San Pedro a Iquitos: non sono regolamentate e gli avvisi ufficiali segnalano malori gravi, morti e aggressioni."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario'],
    imageAlt: "Un fiume dell'Amazzonia peruviana che corre dritto nella foresta, visto dal drone sotto il cielo azzurro",
    immagine: '/images/peru/amazzonia-fiume-foresta-riccardo.jpg',
  },
  {
    slug: 'lago-titicaca',
    paeseSlug: 'peru',
    ordine: 6,
    nome: 'Lago Titicaca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 giorni dal lato peruviano, 4-5 se si prosegue in Bolivia',
    visitataPersonalmente: true,
    introduzione:
      'Il lago navigabile più alto del mondo, a 3.812 metri, diviso tra Perù e Bolivia. Dal lato peruviano si parte da Puno per le isole galleggianti degli Uros, Taquile e Amantaní; dal lato boliviano ci sono Copacabana e l\'Isla del Sol, e il confine si attraversa senza difficoltà.',
    percheAndarci:
      'Per le comunità che ci vivono, più che per il paesaggio: gli Uros costruiscono ancora le isole in totora, a Taquile la tessitura è patrimonio UNESCO e ad Amantaní si dorme in casa delle famiglie.',
    cosaVedere: [
      'Le isole galleggianti degli Uros, a pochi minuti di barca da Puno',
      'Taquile, con i suoi tessuti e la vista sulla parte boliviana del lago',
      'Amantaní, l\'isola dove si pernotta presso le famiglie',
      'Le torri funerarie preincaiche di Sillustani, poco fuori Puno',
      'Copacabana e l\'Isla del Sol, in Bolivia, dove secondo la tradizione nacque il primo Inca',
    ],
    cosaFare: [
      'Tour di due giorni con notte in homestay ad Amantaní: è quello che dà senso alla visita',
      'Proseguire via terra verso la Bolivia (vedi il confronto qui sotto)',
      'Kayak all\'alba sul lago, dove l\'acqua è ferma e la luce migliore',
    ],
    confronti: [
      {
        titolo: 'Estendere il Titicaca alla Bolivia: come e se conviene',
        introduzione:
          'Puno e Copacabana distano poche ore e il confine di Kasani/Yunguyo è uno dei più semplici del continente. La domanda è se fermarsi al lato peruviano o incrociare anche quello boliviano, che ha un carattere diverso.',
        opzioni: [
          {
            nome: 'Solo lato peruviano (Puno)',
            sintesi: 'Base a Puno, con Uros, Taquile ed eventualmente la notte ad Amantaní.',
            durata: '2-3 giorni',
            pro: [
              'Non serve attraversare frontiere, tutto si incastra facilmente con Cusco o Arequipa',
              'L\'homestay ad Amantaní è l\'esperienza più vera del lago',
            ],
            contro: [
              'Gli Uros sono il punto più turistico e organizzato di tutto il lago',
              'Puno come città ha poco da offrire',
            ],
            perChi: 'Chi ha un itinerario solo peruviano e pochi giorni.',
          },
          {
            nome: 'Estensione a Copacabana e Isla del Sol (Bolivia)',
            sintesi:
              'Bus da Puno a Copacabana attraversando il confine di Kasani (circa 3-4 ore in totale, con la formalità di uscita e ingresso a piedi), poi barca per l\'Isla del Sol.',
            costo: 'bus 10-20$; barca per l\'Isla del Sol pochi dollari; tasse d\'ingresso locali sull\'isola',
            durata: '2-3 giorni in più',
            pro: [
              'L\'Isla del Sol è più bella e meno costruita delle isole peruviane, con sentieri panoramici tra rovine inca',
              'Copacabana ha un\'atmosfera da paese di pellegrinaggio che Puno non ha',
              'Apre naturalmente la strada a La Paz e al resto della Bolivia',
            ],
            contro: [
              'Va messa in conto la logistica di frontiera, con i timbri di uscita e ingresso da fare a piedi',
              'Sull\'Isla del Sol le tensioni tra comunità hanno a tratti limitato l\'accesso alla parte nord: conviene chiedere sul posto',
            ],
            perChi: 'Chi sta facendo un giro sudamericano più ampio o vuole entrare in Bolivia via terra.',
          },
        ],
        raccomandazione:
          'Se la Bolivia è già in programma, il Titicaca è il modo migliore per entrarci: si passa da Puno a Copacabana in mezza giornata e si arriva a La Paz il giorno dopo. Se invece il viaggio resta peruviano, due giorni a Puno con la notte ad Amantaní bastano.',
      },
    ],
    doveDormire: 'Puno per la logistica; Amantaní per l\'homestay, che è la ragione principale per venire fin qui.',
    doveMangiare:
      'Sul lago il pasto che conta è la cena ad Amantaní, preparata dalla famiglia che ospita e mangiata insieme a loro: semplice e genuina. Nel giro in barca da Puno il pranzo si fa a Taquile, con la vista sulla parte boliviana del lago.',
    comeArrivare:
      'Da Cusco, bus turistico di circa 7-8 ore con soste ai siti lungo la strada (la formula migliore), treno panoramico Andean Explorer, oppure volo su Juliaca. Da Arequipa circa 6 ore di bus.',
    comeSpostarsi: 'Barche collettive e tour organizzati dal porto di Puno; a Taquile e Amantaní ci si muove solo a piedi, in salita.',
    periodoMigliore: 'maggio-settembre per il sole; le notti sono gelide tutto l\'anno a quasi 3.900 metri',
    costi: 'tour di due giorni con homestay indicativamente 30-60$ a persona, uno dei migliori rapporti qualità-prezzo del Perù',
    erroriDaEvitare: [
      'Arrivare a Puno direttamente da bassa quota: a 3.812 metri il mal d\'altitudine è più probabile che a Cusco',
      'Fare solo il giro degli Uros in mezza giornata e ripartire: è la parte più turistica e meno rappresentativa del lago',
      'Sottovalutare il freddo notturno nelle case di Amantaní, dove non c\'è riscaldamento',
    ],
    miaEsperienza:
      'Gli Uros, va detto, sono una messa in scena turistica: mezz\'ora interessante di spiegazione su come si costruisce l\'isola di totora, e poco più. Poi Taquile, col pranzo e la vista sulla parte boliviana del lago. Il Titicaca è diventato un\'altra cosa ad Amantaní, dove abbiamo dormito in casa di una famiglia, abbiamo cenato con loro e siamo saliti al tempio di Pachatata per il tramonto. Non è comodo: bagno condiviso, acqua calda non garantita e, a 3.800 metri senza riscaldamento, la notte si gela. Ma è l\'unico punto del giro in cui si esce dal circuito turistico, ed è il momento del lago che mi è rimasto più impresso.',
    luoghi: [
      {
        "nome": "Puno",
        "testo": "La base del lago, che è a 3.812 metri. Ha un centro vivace e il porto da cui partono le barche. È più in alto di Cusco: il mal d'altitudine è più probabile.",
        "come": "Da Cusco bus turistico con soste (una giornata), treno turistico o volo su Juliaca. Bus anche da Arequipa.",
        "quando": "Stagione secca, per il sole.",
        "tempo": "1-2 giorni",
        "consiglio": "Arriva già acclimatato e non fare programmi pesanti il primo giorno."
      },
      {
        "nome": "Isole degli Uros",
        "testo": "Isole galleggianti di totora, costruite dalle comunità che ancora le abitano. La visita è turistica: una breve spiegazione su come si costruisce l'isola.",
        "come": "Barca da Puno, tragitto breve.",
        "quando": "Mattina.",
        "tempo": "1-2 ore",
        "consiglio": "Rick la definisce una messa in scena turistica: non dedicarci più del tempo necessario."
      },
      {
        "nome": "Taquile",
        "testo": "Isola con villaggio e tessitura tradizionale, riconosciuta dall'UNESCO. Si pranza con vista sul lago.",
        "come": "Barca da Puno, qualche ora di navigazione, poi a piedi in salita.",
        "quando": "Mattina e pranzo.",
        "tempo": "Mezza giornata",
        "consiglio": "Si cammina in quota e in salita, con ritmo lento."
      },
      {
        "nome": "Amantaní",
        "testo": "L'isola dove si dorme in casa delle famiglie. Si cena con loro e si sale al tempio di Pachatata per il tramonto. Nessuna strada, nessun riscaldamento.",
        "come": "Barca da Puno, di solito in un tour di due giorni.",
        "quando": "Tramonto e alba.",
        "tempo": "Una notte",
        "costo": "Tour di due giorni con homestay: si prenota con le agenzie di Puno, confronta cosa include",
        "consiglio": "È il momento del lago che a Rick è rimasto di più. Porta sacco a pelo caldo: bagno condiviso e acqua calda non garantita."
      },
      {
        "nome": "Sillustani",
        "testo": "Torri funerarie preincaiche (chullpas) sulla riva della laguna Umayo, vicino a Puno.",
        "come": "Tour di mezza giornata o taxi da Puno.",
        "quando": "Pomeriggio, con luce bassa.",
        "tempo": "2-3 ore",
        "consiglio": "Se hai poco tempo, scegli Amantaní al posto degli Uros e aggiungi questa a parte."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: barca da Puno, Uros, Amantaní, cena con la famiglia",
          "Giorno 2: alba, Taquile, rientro a Puno"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Puno e Sillustani",
          "Giorni 2-3: come nel programma da 2 giorni"
        ]
      }
    ],
    zone: [
      {
        "nome": "Puno centro",
        "perChi": "Chi cerca logistica",
        "testo": "Alloggi, agenzie e ristoranti, ma in quota le notti sono fredde."
      },
      {
        "nome": "Amantaní (homestay)",
        "perChi": "Chi cerca l'esperienza vera",
        "testo": "La famiglia ospita con cena. Bagno condiviso, nessun riscaldamento."
      }
    ],
    sapori: [
      {
        "nome": "Trucha e pejerrey",
        "testo": "Trota e pesce del lago, fritti o alla griglia."
      },
      {
        "nome": "Quinoa",
        "testo": "In zuppe e piatti dei locali, coltivata in quota."
      },
      {
        "nome": "Cena ad Amantaní",
        "testo": "Semplice e genuina, preparata dalla famiglia che ospita."
      }
    ],
    attenzioni: [
      "Quota: arrivare direttamente da bassa quota aumenta molto il rischio di soroche.",
      "Freddo notturno nelle case di Amantaní, senza riscaldamento.",
      "Il giro dei soli Uros in mezza giornata è la parte più turistica del lago."
    ],
    esperienzeSlugs: ['homestay-amantani'],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'Una donna uros sorridente con il cappello di paglia mostra un arazzo ricamato sul lago Titicaca',
    immagine: '/images/peru/titicaca-uros-arazzo-riccardo.jpg',
  },
  {
    slug: 'lima',
    paeseSlug: 'peru',
    ordine: 7,
    nome: 'Lima',
    tipologia: ['città', 'cibo'],
    giorniConsigliati: '2 giorni, spesso all\'inizio e alla fine del viaggio',
    visitataPersonalmente: true,
    introduzione:
      'La capitale sull\'oceano, punto di arrivo di ogni volo internazionale e, negli ultimi vent\'anni, una delle capitali gastronomiche mondiali: diversi ristoranti della città compaiono stabilmente nelle classifiche dei migliori al mondo.',
    percheAndarci: 'Perché ci si passa comunque, e perché è il posto dove la cucina peruviana si vede al massimo livello, dal ceviche di quartiere all\'alta cucina.',
    cosaVedere: [
      'Il centro storico coloniale, Patrimonio UNESCO, con la Plaza Mayor e il convento di San Francisco',
      'Miraflores e il Malecón, la passeggiata sulla scogliera a picco sull\'oceano',
      'Barranco, il quartiere bohémien con i murales e il Puente de los Suspiros',
      'Il Museo Larco, con la più importante collezione di arte precolombiana del paese',
      'Huaca Pucllana, la piramide preincaica in mezzo a Miraflores',
    ],
    cosaFare: [
      'Mangiare ceviche in una cevichería a pranzo, come si usa qui (la sera è considerato fuori orario)',
      'Tour gastronomico tra mercati e cucine di quartiere',
      'Parapendio dalla scogliera di Miraflores',
      'Prenotare con largo anticipo uno dei ristoranti da classifica mondiale, se interessa',
    ],
    doveDormire: 'Miraflores per comodità e sicurezza, Barranco per l\'atmosfera; entrambi lontani dal centro storico ma ben collegati.',
    doveMangiare:
      'Lima è il motivo gastronomico del viaggio: ceviche a pranzo in una cevichería di quartiere (la sera è considerato fuori orario e il pesce non è più quello del mattino), poi tiradito, causa, lomo saltado e anticuchos dai carretti la sera. L\'alta cucina per cui la città è famosa va prenotata con settimane di anticipo.',
    comeArrivare: 'Aeroporto Jorge Chávez, l\'unico scalo intercontinentale del paese. Dall\'aeroporto al centro, taxi autorizzati o app: mai i tassisti abusivi all\'uscita.',
    comeSpostarsi: 'Taxi tramite app, Metropolitano per gli assi principali; il traffico è pesante, i tempi vanno sempre maggiorati.',
    periodoMigliore: 'dicembre-aprile per il sole; da giugno a novembre la garúa, una foschia umida costante, copre la città',
    costi: 'nella media; l\'alta cucina ha prezzi internazionali, il resto no',
    erroriDaEvitare: [
      'Prendere taxi non autorizzati all\'uscita dell\'aeroporto: è uno dei punti dove i furti a turisti sono più frequenti',
      'Saltarla del tutto: molti ci passano solo in transito, ma in due giorni qui si vede un Perù che sulle Ande non c\'è',
    ],
    miaEsperienza:
      'Molti la attraversano solo in transito e si perdono il motivo migliore per restarci, il cibo. La cucina peruviana è una delle cose che ricordo di più di questi viaggi, e Lima è il posto dove l\'ho trovata migliore. Il primo ceviche l\'abbiamo mangiato a pranzo, come si usa qui, in una cevichería di quartiere col pesce arrivato la mattina. Poi il centro storico fra la Plaza Mayor e San Francisco, il Malecón di Miraflores fino a Huaca Pucllana e l\'aperitivo al tramonto a Barranco, sul Puente de los Suspiros. La città però è pericolosa: va girata con attenzione, soprattutto fuori da Miraflores e Barranco.',
    luoghi: [
      {
        "nome": "Plaza Mayor e convento di San Francisco",
        "testo": "Il centro storico coloniale, Patrimonio UNESCO. La Plaza Mayor ha il palazzo del governo e la cattedrale; a pochi passi il convento di San Francisco con la biblioteca e le catacombe.",
        "come": "In taxi o Metropolitano dal quartiere di Miraflores; poi a piedi.",
        "quando": "Di giorno, nei giorni feriali. La sera è meglio evitare.",
        "tempo": "Mezza giornata",
        "consiglio": "Il centro va girato con attenzione, soprattutto fuori dalle vie principali."
      },
      {
        "nome": "Miraflores e il Malecón",
        "testo": "La passeggiata sulla scogliera sull'oceano, con parchi, vista sul Pacifico e il parapendio. La prima passeggiata serale a Lima è qui.",
        "come": "A piedi da qualsiasi albergo di Miraflores.",
        "quando": "Tramonto e sera, con le luci.",
        "tempo": "1-2 ore",
        "consiglio": "È tra le zone più tranquille della città, ma anche qui gli avvisi ufficiali segnalano rapine: telefono in tasca."
      },
      {
        "nome": "Huaca Pucllana",
        "testo": "Una piramide di adobe e argilla in mezzo a Miraflores, centro della cultura Lima, che fiorì tra il 200 e il 700 d.C.",
        "come": "A piedi da Miraflores; visita guidata.",
        "quando": "Di giorno; orari sul sito ufficiale del museo.",
        "tempo": "1 ora",
        "consiglio": "Si visita con guida: dà il contesto di una Lima molto più antica degli Inca."
      },
      {
        "nome": "Barranco",
        "testo": "Il quartiere bohémien dei murales, delle gallerie e dei locali. Il Puente de los Suspiros è il luogo classico dell'aperitivo al tramonto.",
        "come": "In taxi o app da Miraflores.",
        "quando": "Tardo pomeriggio e sera.",
        "tempo": "2-3 ore",
        "consiglio": "Rick ha chiuso qui la giornata: aperitivo sul ponte al tramonto."
      },
      {
        "nome": "Museo Larco",
        "testo": "Una grande collezione di arte precolombiana, in una casa vicereale con giardini.",
        "come": "In taxi o app, a Pueblo Libre.",
        "quando": "Mattina, per evitare i gruppi. Controlla orari e giorni sul sito.",
        "tempo": "2 ore",
        "url": "https://www.museolarco.org/",
        "consiglio": "Aggiungilo se hai mezza giornata libera, soprattutto per la sala erotica e i tessuti."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Mattina: centro storico",
          "Pranzo: ceviche in una cevichería di quartiere",
          "Pomeriggio: Miraflores e Malecón",
          "Tramonto: Barranco"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: programma da 1 giorno",
          "Giorno 2: Museo Larco e Huaca Pucllana, cena in un ristorante prenotato in anticipo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Miraflores",
        "perChi": "Chi cerca comodità e sicurezza",
        "testo": "La zona più comoda e sicura, vicina al Malecón. Più cara."
      },
      {
        "nome": "Barranco",
        "perChi": "Chi cerca atmosfera e vita serale",
        "testo": "Bohémien, con locali e murales. Più rumorosa di sera."
      },
      {
        "nome": "Centro storico",
        "perChi": "Chi vuole risparmiare",
        "testo": "Alloggi economici, ma la zona si svuota di sera ed è meno sicura."
      }
    ],
    sapori: [
      {
        "nome": "Ceviche",
        "testo": "Pesce crudo marinato nel limone con cipolla e peperoncino. Si mangia a pranzo in una cevichería di quartiere, non a cena."
      },
      {
        "nome": "Tiradito e causa",
        "testo": "Il primo è pesce crudo a fette, la seconda un tortino freddo di patate gialle."
      },
      {
        "nome": "Lomo saltado",
        "testo": "Manzo saltato con cipolla e pomodoro, servito con riso e patate fritte."
      },
      {
        "nome": "Anticuchos",
        "testo": "Spiedini di cuore di manzo marinati, dai carretti la sera."
      },
      {
        "nome": "Pisco sour",
        "testo": "Il cocktail nazionale: pisco, limone, albume e sciroppo."
      }
    ],
    attenzioni: [
      "Taxi abusivi all'uscita dell'aeroporto: uno dei punti dove i furti sono più frequenti. Solo taxi prenotati o app.",
      "Rapine anche nelle zone turistiche come Miraflores e Barranco: niente oggetti di valore in vista, telefono lontano dal bordo della strada, bancomat solo dentro banche o edifici.",
      "Il traffico è pesante: maggiora sempre i tempi.",
      "Prenota in anticipo i ristoranti di alta cucina."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'Vista dall\'alto del quartiere di Miraflores a Lima, con palazzi e un parco alberato, Perù',
    immagine: '/images/peru/lima.jpg',
  },
  {
    slug: 'arequipa-colca',
    paeseSlug: 'peru',
    ordine: 8,
    nome: 'Arequipa e il Colca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '3-4 giorni, di cui due per il canyon',
    visitataPersonalmente: true,
    introduzione:
      'La "città bianca", costruita in sillar, la pietra vulcanica chiara, ai piedi del vulcano Misti. A poche ore c\'è il Canyon del Colca, uno dei più profondi al mondo, dove i condor si alzano in volo la mattina presto.',
    percheAndarci:
      'Arequipa sta a 2.300 metri ed è la tappa giusta per acclimatarsi per gradi prima di salire a Cusco o Puno, invece di arrivare in quota di colpo.',
    cosaVedere: [
      'Il Monastero di Santa Catalina, una città nella città con vicoli e cortili colorati',
      'La Plaza de Armas e la cattedrale in sillar bianco',
      'La mummia Juanita al Museo Santuarios Andinos',
      'La Cruz del Cóndor, nel Canyon del Colca, punto di avvistamento dei condor andini',
      'I villaggi coloniali e i terrazzamenti preincaici lungo il canyon',
    ],
    cosaFare: [
      'Alzarsi presto per la Cruz del Cóndor: i condor sfruttano le correnti termiche del mattino',
      'Trek di due giorni nel canyon fino all\'oasi di Sangalle, con risalita all\'alba',
      'Bagni termali di La Calera a Chivay',
      'Assaggiare il rocoto relleno e gli altri piatti della cucina arequipeña, diversa da quella del resto del paese',
    ],
    doveDormire: 'Centro storico di Arequipa; Chivay o Cabanaconde come basi per il canyon.',
    doveMangiare:
      'La cucina arequipeña è diversa da quella del resto del Perù e vale la pena assaggiarla nelle picanterías tradizionali: rocoto relleno, adobo la domenica mattina e chupe de camarones. Nel canyon l\'offerta si riduce ai menù fissi dei piccoli ristoranti dei villaggi.',
    comeArrivare: 'Volo da Lima (circa 1h30) o bus notturno; da Puno circa 6 ore di bus.',
    comeSpostarsi: 'Arequipa si gira a piedi; per il Colca tour organizzati di due giorni o bus di linea fino a Chivay e Cabanaconde.',
    periodoMigliore: 'maggio-settembre; i condor si avvistano tutto l\'anno ma con più probabilità nelle prime ore del mattino',
    costi: 'Monastero di Santa Catalina 50 soles per gli stranieri adulti (2026); boleto turistico del Colca a parte',
    erroriDaEvitare: [
      'Fare il Colca in un\'unica giornata da Arequipa: significa partire alle 3 del mattino e passare quasi tutto il tempo in pullman',
      'Sottovalutare la risalita dall\'oasi di Sangalle: circa 1.100 metri di dislivello, da fare prima che il sole picchi',
    ],
    miaEsperienza:
      'È la città dove finalmente ho dormito bene: a 2.300 metri il corpo recupera, e dopo giorni passati in quota si sente. Il Monastero di Santa Catalina è il posto che mi è rimasto più impresso. Non mi aspettavo che fosse così grande: è una piccola città murata con i vicoli dipinti di blu e arancione. Alla Cruz del Cóndor invece bisogna arrivare con le aspettative giuste: i condor si alzano con le correnti del mattino e quando succede è impressionante, ma non è garantito e la piazzola è piena di gente. Vale comunque la sveglia all\'alba. Ad Arequipa sono stato anche come osteopata volontario, in una delle due volte in cui sono venuto in Perù a fare volontariato.',
    luoghi: [
      {
        "nome": "Plaza de Armas e cattedrale di Arequipa",
        "testo": "La piazza della città bianca, in sillar, la pietra vulcanica chiara, con portici e la cattedrale. Il vulcano Misti compare sullo sfondo.",
        "come": "A piedi dal centro storico.",
        "quando": "Sera, con la luce calda sul sillar.",
        "tempo": "1 ora",
        "consiglio": "Arequipa è più bassa di Cusco e Puno: è la tappa giusta per acclimatarsi prima di Cusco o Puno."
      },
      {
        "nome": "Monastero di Santa Catalina",
        "testo": "Una città nella città, con vicoli, cortili colorati e celle. Ci vivevano le monache domenicane, chiuse al mondo per secoli.",
        "come": "A piedi dal centro. Serve il passaporto per il biglietto da straniero.",
        "quando": "Tutti i giorni 9-17; il martedì e il mercoledì aperto fino alle 20 (ultimo ingresso alle 19). Chiuso il Venerdì Santo, il 25 dicembre e il 1° gennaio.",
        "tempo": "1,5-2 ore",
        "costo": "50 soles per gli stranieri adulti (2026)",
        "url": "https://www.santacatalina.org.pe/",
        "consiglio": "Visitalo a metà mattina o la sera per avere meno gruppi."
      },
      {
        "nome": "Museo Santuarios Andinos e la mummia Juanita",
        "testo": "Museo con la mummia di una ragazza inca sacrificata sul vulcano Ampato, ritrovata molto ben conservata.",
        "come": "A piedi dal centro. Visita guidata.",
        "quando": "Controlla orari e giorni di chiusura prima di andare.",
        "tempo": "1 ora",
        "consiglio": "La visita è guidata e breve: vale la pena per capire il contesto del Colca."
      },
      {
        "nome": "Cruz del Cóndor",
        "testo": "Il punto di avvistamento dei condor andini nel Canyon del Colca, uno dei più profondi al mondo. I condor passano vicini alle pareti del canyon.",
        "come": "Tour organizzato da Arequipa o bus di linea fino a Chivay e Cabanaconde, con trasferimento al belvedere.",
        "quando": "Prime ore del mattino, tutto l'anno.",
        "tempo": "1-2 ore sul punto",
        "consiglio": "Dormi a Chivay o Cabanaconde la sera prima per arrivare presto."
      },
      {
        "nome": "Chivay e i bagni termali di La Calera",
        "testo": "Il paese principale della valle, con mercato e le terme di La Calera, ottime dopo una giornata di strada in quota.",
        "come": "Strada da Arequipa.",
        "quando": "Sera.",
        "tempo": "1-2 ore alle terme",
        "consiglio": "Una buona base per la prima notte nel canyon."
      },
      {
        "nome": "Trek a Sangalle (l'oasi)",
        "testo": "Trek di due giorni nel canyon, con discesa fino all'oasi di Sangalle e risalita all'alba.",
        "come": "Parte da Cabanaconde; si può fare in autonomia o con guida.",
        "quando": "Stagione secca; scendi presto per evitare il caldo.",
        "tempo": "2 giorni",
        "consiglio": "La risalita è dura: parti al buio per evitare il sole."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Plaza de Armas e Santa Catalina",
          "Giorno 2: Museo Santuarios Andinos e partenza per Chivay"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Arequipa",
          "Giorno 2: Chivay, terme di La Calera",
          "Giorno 3: Cruz del Cóndor all'alba e rientro o proseguimento per Puno"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro storico di Arequipa",
        "perChi": "Chi visita la città",
        "testo": "La zona più comoda per monastero e piazza. Alcune vie sono rumorose di notte."
      },
      {
        "nome": "Chivay",
        "perChi": "Chi visita il canyon senza trekking",
        "testo": "Paese più grande della valle, con terme e mercato. In quota, fredda di notte."
      },
      {
        "nome": "Cabanaconde",
        "perChi": "Chi vuole camminare",
        "testo": "Il paese vicino alla Cruz del Cóndor e al sentiero per Sangalle. Alloggi semplici."
      }
    ],
    sapori: [
      {
        "nome": "Rocoto relleno",
        "testo": "Peperone piccante ripieno di carne e formaggio, piatto tipico di Arequipa."
      },
      {
        "nome": "Adobo",
        "testo": "Maiale marinato in chicha e spezie, mangiato la domenica mattina."
      },
      {
        "nome": "Chupe de camarones",
        "testo": "Zuppa di gamberi di fiume, tipica delle picanterías."
      },
      {
        "nome": "Menù fissi del Colca",
        "testo": "Nel canyon l'offerta si riduce a menù dei piccoli ristoranti dei villaggi."
      }
    ],
    attenzioni: [
      "Bus notturni: scegli solo compagnie principali.",
      "Quota nel Colca: i paesi e i belvedere sono in alta quota.",
      "Il trek di Sangalle in estate è molto caldo nel fondo.",
      "Non comprare tour con prezzi molto bassi: spesso saltano le soste."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'La facciata illuminata della cattedrale di Arequipa di notte, con il campanile dorato sul cielo nero',
    immagine: '/images/peru/arequipa-cattedrale-notte-riccardo.jpg',
  },
  {
    slug: 'huaraz-cordillera-blanca',
    paeseSlug: 'peru',
    ordine: 9,
    nome: 'Huaraz e la Cordillera Blanca',
    tipologia: ['trekking', 'natura', 'avventura'],
    giorniConsigliati: '4-7 giorni, secondo i trek scelti',
    visitataPersonalmente: true,
    introduzione:
      'La catena tropicale più alta del mondo, con oltre trenta cime sopra i 6.000 metri e laghi glaciali dai colori quasi finti. È il Perù dell\'alta montagna, quasi ignorato da chi viene solo per Machu Picchu.',
    percheAndarci:
      'Perché è la zona di trekking migliore del paese e perché la Laguna 69 e il circuito di Santa Cruz reggono il confronto con qualsiasi trek andino, a una frazione del costo e della folla del circuito di Cusco.',
    cosaVedere: [
      'La Laguna 69, a 4.600 metri, di un turchese che sembra artificiale',
      'Il Nevado Huascarán, la montagna più alta del Perù (6.768 m)',
      'La Laguna Parón, la più grande della Cordillera Blanca',
      'Il sito archeologico di Chavín de Huántar, Patrimonio UNESCO',
      'Il Nevado Pastoruri, uno dei pochi ghiacciai raggiungibili in giornata',
    ],
    cosaFare: [
      'Laguna 69 in giornata: il classico, impegnativo per la quota più che per la distanza',
      'Trek di Santa Cruz, 4 giorni tra i 6.000 della cordigliera',
      'Alpinismo di introduzione sul Nevado Mateo o sull\'Ishinca, per chi ha esperienza',
    ],
    doveDormire: 'Huaraz è la base di tutto: ostelli e piccoli hotel, con agenzie di trekking a ogni angolo.',
    doveMangiare:
      'Huaraz è una città di montagna e si mangia di conseguenza: zuppe calde a ogni pasto, trucha (trota) degli allevamenti in quota, cuy e il pachamanca, la carne cotta sotto terra con pietre roventi, che si trova soprattutto nei fine settimana. Il mercato centrale al mattino serve caldo de gallina e gli infusi di erbe d\'altura che nei primi giorni aiutano. Per le giornate di trekking, il pranzo al sacco lo preparano le agenzie o lo si compra al mercato: sui sentieri non c\'è nulla.',
    comeArrivare: 'Bus notturno da Lima, circa 8 ore. Non ci sono voli regolari comodi: la strada è la via normale.',
    comeSpostarsi: 'Collettivi e tour giornalieri dalle agenzie di Huaraz per tutti i punti di partenza dei trek.',
    periodoMigliore: 'da maggio a settembre, la stagione secca: nel resto dell\'anno i sentieri in quota diventano impraticabili',
    costi: 'tra le zone più economiche del Perù: una giornata guidata alla Laguna 69 costa poche decine di dollari',
    erroriDaEvitare: [
      'Arrivare da Lima (livello del mare) e partire il giorno dopo per la Laguna 69 a 4.600 metri: serve acclimatarsi a Huaraz per almeno due giorni',
      'Affidarsi alle agenzie più economiche senza verificare guide e attrezzatura, soprattutto per i trek multi-giorno',
    ],
    miaEsperienza:
      'È la parte di Perù che quasi nessuno fa, ed è un peccato: la Cordillera Blanca regge il confronto con qualsiasi cosa si veda intorno a Cusco, a una frazione del prezzo e senza code. La Laguna 69 riassume tutto: gli ultimi quaranta minuti sopra i 4.500 metri sono stati una lotta col fiato, venti passi e una sosta, e poi ci siamo trovati davanti a quel turchese che sembra ritoccato e non lo è. Il paese in sé non è bello, è una base di appoggio piena di agenzie, ma è quello che serve.',
    luoghi: [
      {
        "nome": "Laguna 69",
        "testo": "La laguna turchese a 4.600 metri, dal colore che sembra ritoccato. È il trek di giornata classico della Cordillera Blanca, duro per la quota più che per la distanza.",
        "come": "Escursione di un giorno con partenza all'alba da Huaraz, qualche ora di strada e poi qualche ora di cammino in salita. Si fa con agenzia o in collettivo.",
        "quando": "Stagione secca. Parti presto per avere il cielo pulito.",
        "tempo": "Giornata intera",
        "consiglio": "Rick racconta gli ultimi quaranta minuti sopra i 4.500 metri come una lotta col fiato: venti passi e una sosta. Acclimatati a Huaraz almeno due giorni."
      },
      {
        "nome": "Trek di Santa Cruz",
        "testo": "Un trek di più giorni nella cordigliera tra cime altissime, con campi tendati e il passo di Punta Unión.",
        "come": "Con agenzia, con muli e cuoco, da Huaraz, con un lungo trasferimento all'inizio.",
        "quando": "Stagione secca.",
        "tempo": "4 giorni",
        "consiglio": "Verifica la guida e l'attrezzatura: le agenzie più economiche non sono sempre affidabili."
      },
      {
        "nome": "Laguna Parón",
        "testo": "Una laguna d'alta quota della Cordillera Blanca, circondata da cime, con acqua turchese.",
        "come": "Collettivo o tour giornaliero da Huaraz, con un tratto di strada su pista.",
        "quando": "Mattina presto.",
        "tempo": "Mezza giornata o giornata",
        "consiglio": "Una buona alternativa se la Laguna 69 è troppo faticosa."
      },
      {
        "nome": "Chavín de Huántar",
        "testo": "Sito archeologico Patrimonio UNESCO, un centro cerimoniale preincaico con gallerie sotterranee e sculture.",
        "come": "Tour di giornata da Huaraz, con un lungo viaggio in strada.",
        "quando": "Mattina; le gallerie sono più fresche.",
        "tempo": "Giornata intera con trasferimenti",
        "consiglio": "Visita il museo: spiega molto del sito."
      },
      {
        "nome": "Nevado Pastoruri",
        "testo": "Un ghiacciaio raggiungibile in giornata, in alta quota, in forte ritiro.",
        "come": "Tour di giornata, con breve cammino finale.",
        "quando": "Mattina.",
        "tempo": "Giornata intera",
        "consiglio": "La quota è alta: chiedi la sosta di acclimatamento."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Huaraz e acclimatamento (città, mercato)",
          "Giorno 2: Laguna 69 o Parón"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: Huaraz, acclimatamento",
          "Giorno 2: Laguna 69",
          "Giorno 3: Chavín o Parón"
        ]
      }
    ],
    zone: [
      {
        "nome": "Huaraz centro",
        "perChi": "Chi cerca la base per i trek",
        "testo": "Ostelli e piccoli hotel, agenzie a ogni angolo. Il paese non è bello, ma è comodo."
      }
    ],
    sapori: [
      {
        "nome": "Trucha",
        "testo": "Trota di allevamento in quota."
      },
      {
        "nome": "Cuy",
        "testo": "Porcellino d'India, piatto tradizionale."
      },
      {
        "nome": "Pachamanca",
        "testo": "Carne cotta sotto terra con pietre roventi, soprattutto nei fine settimana."
      },
      {
        "nome": "Caldo de gallina",
        "testo": "Brodo di gallina, al mercato centrale al mattino."
      }
    ],
    attenzioni: [
      "Non partire per la Laguna 69 il giorno dopo l'arrivo da Lima: serve acclimatarsi per almeno due giorni.",
      "Verifica guide e attrezzatura dei trek multi-giorno prima di pagare.",
      "Bus notturno Lima-Huaraz: solo compagnie principali.",
      "Nessuna copertura telefonica sui trek."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario'],
    imageAlt: 'La Laguna 69 dal colore turchese ai piedi dei ghiacciai della Cordillera Blanca, Perù',
    immagine: '/images/peru/huaraz-cordillera-blanca.jpg',
  },
]
