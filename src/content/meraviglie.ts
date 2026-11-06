import type { Meraviglia } from '@/lib/types'

// Le Sette Meraviglie del Mondo Moderno (New7Wonders, 2007). Contenuto guida
// puramente pratico e verificabile (storia, prenotazione, prezzi, come
// arrivare, truffe comuni) — non un itinerario di viaggio personale. I ricordi
// (miaEsperienza) sono di Rick, in prima persona; dal novembre 2026 c'è anche
// quello sul Cristo Redentore, visto nel viaggio in Brasile. Prezzi,
// orari e regole di prenotazione cambiano spesso: vanno sempre riverificati
// sui siti ufficiali prima di partire. Ultimo passaggio di verifica
// prezzi/prenotazioni/orari: 6 novembre 2026, solo su fonti ufficiali (vedi
// `fonti`, `verificataIl`, `statoVerifica` di ogni meraviglia e
// docs/ux/report-meraviglie.md). Ciò che non è stato confermato è stato reso
// generico con rimando al sito ufficiale.

export const meraviglie: Meraviglia[] = [
  {
    slug: 'grande-muraglia-cinese',
    nome: 'Grande Muraglia Cinese',
    nomeLocale: '长城 (Chángchéng)',
    paese: 'Cina',
    citta: 'Pechino (varie sezioni)',
    titolo: 'Grande Muraglia Cinese: quale sezione scegliere e come arrivarci da Pechino',
    descrizione:
      'Oltre 21.000 km di fortificazioni costruite in oltre duemila anni, di cui i tratti meglio conservati risalgono alla dinastia Ming (XIV-XVII secolo). Non un singolo monumento ma una rete di sezioni molto diverse tra loro per stato di conservazione, affollamento e difficoltà — la scelta della sezione giusta conta più di ogni altro dettaglio pratico.',
    storiaBreve:
      'Costruita e ricostruita a partire dal VII secolo a.C. da diversi stati e dinastie per difendersi dalle incursioni nomadi del nord, raggiunse la forma oggi più visibile sotto i Ming. Patrimonio UNESCO dal 1987, eletta tra le New7Wonders nel 2007.',
    visitataPersonalmente: true,
    periodoMigliore:
      'aprile-giugno e settembre-novembre, clima mite e minore umidità; evitare agosto (caldo/afa) e le settimane della Golden Week di inizio ottobre e del Capodanno cinese, quando ogni sezione è presa d\'assalto.',
    durataConsigliata: 'mezza giornata per Badaling o Mutianyu, giornata intera per Jinshanling o Simatai incluse le soste',
    comeArrivareInternazionale: 'Aeroporto di Pechino Capitale (PEK) o Daxing (PKX).',
    comeArrivareLocale:
      'Badaling è la sezione più facile da raggiungere in autonomia da Pechino, con treno o bus pubblici: linee e orari vanno controllati prima di partire. Mutianyu si raggiunge di solito in auto, con un tour o con i bus turistici. Jinshanling e Simatai sono più lontane e quasi sempre convenienti solo con tour organizzato o autista privato per l\'intera giornata.',
    comeSpostarsi:
      'A Badaling e Mutianyu funivia/seggiovia disponibile per salire (consigliata, il dislivello a piedi è impegnativo); a Mutianyu esiste anche uno scivolo/toboga per la discesa, un\'esperienza a sé. A Jinshanling e Simatai si cammina di più, sentieri meno battuti e in parte non restaurati.',
    prenotazione:
      'Badaling: dal 2019 l\'ingresso si prenota online con nome e documento (sistema real-name), sui canali ufficiali della sezione. Mutianyu: il sito ufficiale vende online biglietti nominativi, prenotabili fino a 30 giorni prima, uno per documento al giorno; per entrare serve il documento originale (per gli stranieri il passaporto). Orari di Mutianyu dal sito ufficiale: dal 16 marzo al 15 novembre 7:30-18:00 nei giorni feriali e 7:30-18:30 nel weekend, dal 16 novembre al 15 marzo 8:00-17:30; la biglietteria chiude un\'ora prima e l\'ingresso mezz\'ora prima. Per Jinshanling e Simatai regole e canali di vendita vanno controllati sui siti ufficiali delle singole sezioni.',
    prezzi:
      'I prezzi cambiano con la sezione, la stagione e gli extra (funivia, seggiovia, toboga, visita serale a Simatai). Non li riportiamo perché non siamo riusciti a confermarli su una fonte ufficiale: vanno controllati sui canali ufficiali di ciascuna sezione al momento della prenotazione.',
    tourOAutonomo:
      'Badaling e Mutianyu si visitano bene anche in autonomia con i mezzi pubblici o un taxi/Didi. Per Jinshanling e Simatai conviene un tour organizzato o un autista privato per l\'intera giornata: i collegamenti pubblici sono scarsi e i tempi di trasferimento lunghi.',
    scamDaEvitare: [
      'Venditori ambulanti fuori dagli hotel di Pechino che offrono "tour economici" verso sezioni improvvisate o mai raggiunte davvero — prenotare solo tramite agenzie con recensioni verificabili',
      'Tassisti che sostengono che la sezione scelta sia "chiusa" per dirottare verso un\'altra meta convenzionata a loro favore',
      'Venditori di biglietti "scontati" fuori dagli ingressi ufficiali: i biglietti si comprano solo alle biglietterie o online sui canali ufficiali',
    ],
    sezioniDaVedere: [
      {
        nome: 'Badaling',
        perche: 'la sezione più restaurata e turistica, la più semplice da raggiungere in autonomia da Pechino — ma anche la più affollata.',
      },
      {
        nome: 'Mutianyu',
        perche: 'ben restaurata come Badaling ma meno affollata, con funivia e il celebre toboga per la discesa — il miglior compromesso per chi ha poco tempo.',
      },
      {
        nome: 'Jinshanling',
        perche: 'parzialmente restaurata, ottima per chi vuole camminare a lungo lungo torri di guardia più autentiche e panorami meno battuti.',
      },
      {
        nome: 'Simatai',
        perche: 'la sezione più selvaggia e meno ricostruita, sopra Gubei Water Town, la città d\'acqua da cui si sale: si può visitare anche di sera, con illuminazione dedicata e biglietto a parte. Gli orari serali cambiano con la stagione: vanno controllati prima sui canali ufficiali.',
      },
    ],
    giorniSpeciali:
      'Da evitare: la Golden Week dei primi giorni di ottobre, le festività del Primo maggio e il Capodanno cinese (variabile tra fine gennaio e febbraio), quando ogni sezione, Badaling in testa, è presa d\'assalto. Le date esatte delle festività cambiano ogni anno. Simatai, con Gubei Water Town, offre visite serali a pagamento con biglietto separato: date e orari vanno controllati e prenotati con anticipo.',
    doveDormire: 'Pechino città, per la comodità dei collegamenti verso qualsiasi sezione si scelga; alcune guesthouse vicino a Mutianyu permettono un\'alba sulla muraglia senza folla.',
    erroriDaEvitare: [
      'Sottovalutare la ripidezza e il numero di gradini, specialmente a Jinshanling e Simatai: non è una semplice passeggiata',
      'Andarci in piena estate senza acqua e protezione solare: gran parte dei percorsi non ha ombra',
      'Scegliere Badaling nei weekend o nei giorni festivi cinesi aspettandosi tranquillità',
    ],
    miaEsperienza:
      'Dipende da dove vuoi andare e da cosa vuoi fare, e la scelta del tratto fa la differenza tra una gita in mezzo alla folla e una giornata memorabile. Il tratto vicino alla città, Badaling, lo sconsiglio: c\'è tantissima gente, è restaurato al punto da sembrare un parco a tema e rischi di goderti poco l\'esperienza. Gubeikou, con Gubei Water Town, mi è piaciuto molto: ai piedi della muraglia di Simatai c\'è la città d\'acqua, c\'è poca gente e si visita anche di sera. Mutianyu è il compromesso giusto, con la seggiovia per salire e il toboga per scendere: carino e divertente, sembra una trovata turistica e invece è uno dei modi migliori di finire la giornata. Jinshanling è il tratto per chi vuole camminare: due ore da Pechino, torri non restaurate, erba tra le pietre e per lunghi tratti nessun altro in vista. Va anche detta la fatica, che le foto non trasmettono: non è una passeggiata in piano ma un continuo su e giù su gradini di altezza diversa, alcuni altissimi, e dopo tre ore le gambe se ne accorgono.',
    fonti: [
      { url: 'https://www.mutianyugreatwall.com/', titolo: 'Mutianyu Great Wall, sito ufficiale' },
      { url: 'https://www.visitbeijing.com.cn/article/47QmKoFtnnF', titolo: 'Visit Beijing: prenotazione real-name a Badaling' },
    ],
    verificataIl: '2026-11-06',
    statoVerifica: 'parziale',
    heroImageAlt: 'La Grande Muraglia Cinese che serpeggia sulle colline verdi di Mutianyu fino a una torre di guardia, sotto un cielo azzurro con nuvole bianche',
    heroImage: '/images/meraviglie/grande-muraglia-cinese.jpg',
  },
  {
    slug: 'petra',
    nome: 'Petra',
    nomeLocale: 'البتراء (Al-Batrāʾ)',
    paese: 'Giordania',
    citta: 'Wadi Musa',
    titolo: 'Petra: Jordan Pass, Petra by Night e come organizzare la visita al sito nabateo',
    descrizione:
      'L\'antica capitale del regno nabateo, scavata nella roccia arenaria rosa a partire dal IV secolo a.C. Oltre 800 monumenti su più di 8 km di estensione, con il Tesoro (Al-Khazneh) e il Monastero (Ad-Deir) come punti più iconici.',
    storiaBreve:
      'Fondata come capitale nabatea e crocevia delle rotte carovaniere dell\'incenso, fu abbandonata dopo un terremoto nel 363 d.C. e riscoperta per il mondo occidentale nel 1812 dall\'esploratore svizzero Johann Ludwig Burckhardt. Patrimonio UNESCO dal 1985, New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'marzo-maggio e settembre-novembre; l\'estate è molto calda e priva d\'ombra lungo quasi tutto il percorso, l\'inverno può portare rari ma intensi acquazzoni con rischio di flash flood nel Siq.',
    durataConsigliata: 'una giornata intera per il percorso principale fino al Monastero, due giorni per esplorare anche i sentieri meno battuti (Alta Place of Sacrifice, tombe periferiche)',
    comeArrivareInternazionale: 'Aeroporto di Amman-Regina Alia (AMM), in alternativa Aqaba (AQJ) più vicino se si arriva dal Mar Rosso.',
    comeArrivareLocale: 'Da Amman o da Aqaba si arriva su strada, in auto o in bus, fino a Wadi Musa, la cittadina all\'ingresso del sito. Orari e operatori dei bus vanno controllati prima di partire.',
    comeSpostarsi:
      'All\'interno del sito si cammina molto: il Monastero è lontano dall\'ingresso e si raggiunge con una lunga salita. Lungo il percorso si offrono a pagamento carrozze, cavalli, asini e cammelli: tutti opzionali, con prezzo da concordare prima e spesso richieste di mance oltre l\'accordo iniziale.',
    prenotazione:
      'Il Jordan Pass si compra online prima del viaggio. Include l\'ingresso a Petra (1, 2 o 3 giorni consecutivi secondo la versione) e a oltre 40 siti del Paese, e cancella il costo del visto turistico solo se è comprato prima dell\'arrivo e si resta in Giordania almeno 2 notti intere (3 giorni): chi riparte prima paga il visto all\'uscita. Va usato entro tre mesi dall\'acquisto e scade un mese dopo la prima scansione. Senza pass, il biglietto per Petra si compra sul posto.',
    prezzi:
      'Jordan Pass: 70 JOD (Jordan Wanderer, 1 giorno a Petra), 75 JOD (Jordan Explorer, 2 giorni consecutivi), 80 JOD (Jordan Expert, 3 giorni consecutivi). Senza pass, biglietto di Petra per stranieri: 50 JOD per 1 giorno, 55 JOD per 2 giorni, 60 JOD per 3 giorni; 90 JOD per chi visita Petra in giornata senza pernottare in Giordania. Petra by Night non è incluso in nessuna versione del Jordan Pass: ha un biglietto a parte, con prezzo da controllare sui canali ufficiali.',
    tourOAutonomo:
      'Il sito si visita bene in autonomia seguendo la mappa. Una guida locale ufficiale aggiunge molto contesto storico, soprattutto sul Siq e sul Tesoro: tariffe e durata si concordano all\'ingresso.',
    scamDaEvitare: [
      'Sedicenti "guide" non ufficiali fuori dal centro visitatori: rivolgersi solo al booth ufficiale delle guide dentro l\'ingresso',
      'Conducenti di cavalli/asini/cammelli che, dopo il giro, chiedono mance ben superiori a quanto pattuito: concordare sempre il prezzo totale prima di salire',
      'Venditori lungo il Siq e vicino al Tesoro con prezzi gonfiati per souvenir "antichi" — sono repliche',
    ],
    sezioniDaVedere: [
      {
        nome: 'Il Siq',
        perche: 'la gola naturale di 1,2 km che introduce al sito: il primo scorcio del Tesoro attraverso la fessura finale è il momento clou dell\'intera visita.',
      },
      {
        nome: 'Al-Khazneh (il Tesoro)',
        perche: 'la facciata più fotografata di Petra, resa celebre anche da Indiana Jones e l\'ultima crociata — da vedere anche con luce diversa se si torna più volte durante il giorno.',
      },
      {
        nome: 'Street of Facades e le Tombe Reali',
        perche: 'la concentrazione più alta di facciate scavate nella roccia dopo il Tesoro, spesso saltata da chi ha poco tempo.',
      },
      {
        nome: 'Ad-Deir (il Monastero)',
        perche: 'più grande e meno affollato del Tesoro, raggiungibile con una salita di oltre 800 gradini — la vista dal chiosco panoramico di fronte ripaga la fatica.',
      },
    ],
    giorniSpeciali:
      'Petra by Night è una visita serale con biglietto separato, non incluso nel Jordan Pass: il Siq illuminato dalle candele fino al Tesoro. Giorni, orari, prezzo e modalità d\'acquisto cambiano nel tempo: vanno controllati sui canali ufficiali di Petra o all\'arrivo a Wadi Musa.',
    doveDormire: 'Wadi Musa, la cittadina proprio all\'ingresso del sito: permette di arrivare a piedi alla biglietteria e di partire presto per battere il caldo e le folle.',
    erroriDaEvitare: [
      'Non portare abbastanza acqua: quasi tutto il percorso è privo d\'ombra',
      'Non mettere in conto tempo sufficiente per la salita al Monastero, spesso tagliata per mancanza di tempo',
      'Perdersi Petra by Night pur pernottando a Wadi Musa: ha un biglietto a parte, non compreso né nel biglietto diurno né nel Jordan Pass',
    ],
    miaEsperienza:
      'Petra non è un monumento, è una città, e il primo errore è comprare il biglietto da un giorno. Il Siq da solo è più di un chilometro di gola stretta e altissima che continua a girare senza mai mostrare cosa c\'è dopo, e quando il Tesoro compare nello spiraglio finale l\'effetto funziona anche sapendolo in anticipo. Ma il Tesoro è l\'inizio: il Monastero sta in cima a ottocento gradini, un\'ora abbondante di salita col sole a picco, ed è più grande di quello che quasi tutti vengono a vedere. Chi ha una sola giornata parta all\'apertura ed eviti la fascia centrale, quando arrivano i pullman dal Mar Morto e la temperatura tra le rocce diventa seria. Sui muli e i cammelli offerti lungo il percorso vale la pena essere netti: le condizioni degli animali sono spesso pessime, e rifiutare è la scelta giusta. Io ho fatto sia il giro classico sia Petra by Night, ed è stato tutto bellissimo. Soprattutto adesso c\'è pochissima gente: sarebbe da approfittarne.',
    fonti: [
      { url: 'https://www.jordanpass.jo/Contents/Prices.aspx', titolo: 'Jordan Pass, prezzi' },
      { url: 'https://www.jordanpass.jo/Contents/FAQs.aspx', titolo: 'Jordan Pass, FAQ' },
      { url: 'https://international.visitjordan.com/page/17/Entrance-Fees', titolo: 'Jordan Tourism Board, tariffe d\'ingresso' },
    ],
    verificataIl: '2026-11-06',
    statoVerifica: 'verificata',
    heroImageAlt: 'La facciata rosa del Tesoro di Petra (Al-Khazneh), con il colonnato e il frontone scolpiti nella parete di arenaria, Giordania',
    heroImage: '/images/meraviglie/petra-tesoro-facciata-riccardo.jpg',
  },
  {
    slug: 'cristo-redentore',
    nome: 'Cristo Redentore',
    nomeLocale: 'Cristo Redentor',
    paese: 'Brasile',
    citta: 'Rio de Janeiro',
    titolo: 'Cristo Redentore a Rio: treno del Corcovado, orari e come evitare le rivendite non ufficiali',
    descrizione:
      'La statua Art Déco di 38 metri che domina Rio de Janeiro dalla cima del Corcovado, all\'interno della Foresta di Tijuca. Qui il modo in cui si sale conta quanto la visita: trenino del Corcovado, van autorizzati o elicottero.',
    storiaBreve:
      'Costruita tra il 1922 e il 1931 su progetto dell\'ingegnere Heitor da Silva Costa con la collaborazione dello scultore francese Paul Landowski, fu concepita per celebrare il centenario dell\'indipendenza del Brasile. Si trova all\'interno del Parco Nazionale della Foresta di Tijuca, Patrimonio UNESCO dal 2012 (nell\'ambito del paesaggio culturale di Rio). New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'stagione secca, maggio-settembre, per cieli più tersi — ma la nuvolosità sulla cima del Corcovado è imprevedibile in ogni stagione: vale la pena tenere un giorno di riserva se il programma lo permette.',
    durataConsigliata: 'mezza giornata, incluso il trasporto di andata e ritorno e il tempo sulla piattaforma panoramica',
    comeArrivareInternazionale: 'Aeroporto di Rio de Janeiro-Galeão (GIG), in alternativa Santos Dumont (SDU) per i voli nazionali.',
    comeArrivareLocale:
      'Il modo ufficiale più noto per salire è il trenino del Corcovado, che parte dalla stazione di Cosme Velho; esistono anche van autorizzati con partenza da vari punti della città e tour in elicottero come opzione premium. Quali accessi sono attivi, e da dove partono, va controllato sui canali ufficiali prima di andare.',
    comeSpostarsi: 'Una volta in cima, un breve tratto a piedi o con scale mobili/ascensori porta alla piattaforma panoramica; l\'intera visita in vetta si svolge a piedi su un\'area contenuta.',
    prenotazione:
      'Il biglietto del treno si compra in anticipo sul sito ufficiale del Trem do Corcovado, nell\'app ufficiale, tramite call center o WhatsApp ufficiali e negli hotel accreditati. Nei weekend e in alta stagione conviene muoversi con anticipo.',
    prezzi:
      'Sul sito ufficiale del Trem do Corcovado il biglietto adulto costa 139 BRL (prezzo mostrato a novembre 2026, può variare con la data) e comprende treno andata e ritorno e accesso al monumento. Bambini dai 7 agli 11 anni 112 BRL; fino a 6 anni gratis in braccio a un adulto, con prova dell\'età. Le riduzioni per over 60 e studenti valgono solo per i cittadini brasiliani. I prezzi dei van vanno controllati sui loro canali ufficiali.',
    tourOAutonomo:
      'Il trenino si prenota facilmente in autonomia. Le guide non sono necessarie per la visita in sé (la piattaforma si vede da sola), ma un tour organizzato semplifica gli spostamenti e spesso combina la visita con il Pan di Zucchero nella stessa giornata.',
    scamDaEvitare: [
      'Siti terzi non ufficiali che rivendono i biglietti del treno a prezzi gonfiati: acquistare solo dal sito ufficiale del Trem do Corcovado o da operatori riconosciuti',
      'Tassisti o autisti che promettono di portare "fino in cima" fuori dai canali ufficiali: meglio affidarsi al trenino o ai van autorizzati',
      'Borseggio nelle code e sulla piattaforma panoramica affollata: tenere gli oggetti di valore ben chiusi',
    ],
    sezioniDaVedere: [
      {
        nome: 'La piattaforma panoramica',
        perche: 'vista a 360° su Rio: il Pan di Zucchero, le spiagge di Copacabana e Ipanema, la Baia di Guanabara e le favelas che si arrampicano sulle colline.',
      },
      {
        nome: 'La piccola cappella alla base della statua',
        perche: 'spesso trascurata dai visitatori più frettolosi, offre un momento di quiete rispetto all\'affollamento della piattaforma principale.',
      },
    ],
    giorniSpeciali:
      'Gli slot mattutini presto e quelli a fine giornata sono generalmente meno affollati dei tour di mezza giornata via crociera. Natale e Capodanno vedono un\'affluenza fuori scala: prenotare con largo anticipo se si viaggia in quel periodo.',
    doveDormire: 'Zona Sul di Rio (Copacabana o Ipanema), la base più comoda per raggiungere sia il Corcovado sia le principali attrazioni della città.',
    erroriDaEvitare: [
      'Non prenotare un orario specifico in anticipo, rischiando di trovare tutti gli slot esauriti',
      'Non controllare le previsioni meteo: la statua è spesso avvolta dalle nuvole, meglio tenere flessibilità sulle date se possibile',
      'Portare con sé oggetti di valore vistosi nelle zone più affollate',
    ],
    miaEsperienza:
      'Merita. E se il budget lo permette, è bello vederlo anche in elicottero: è un altro modo di guardarlo, e vale la spesa.',
    fonti: [
      { url: 'https://www.tremdocorcovado.rio/', titolo: 'Trem do Corcovado, sito ufficiale' },
    ],
    verificataIl: '2026-11-06',
    statoVerifica: 'parziale',
    heroImageAlt: 'Il Cristo Redentore in controluce sulla terrazza del Corcovado al tramonto, con il cielo di Rio de Janeiro striato di rosa e azzurro',
    heroImage: '/images/meraviglie/cristo-redentore.jpg',
  },
  {
    slug: 'machu-picchu',
    nome: 'Machu Picchu',
    paese: 'Perù',
    citta: 'Regione di Cusco (base ad Aguas Calientes)',
    titolo: 'Machu Picchu: quote giornaliere, circuiti e come prenotare Huayna Picchu',
    descrizione:
      'La cittadella inca del XV secolo sospesa tra le montagne della Valle Sacra, riportata all\'attenzione del mondo occidentale nel 1911. È la meraviglia di questa lista con il sistema di accesso più regolamentato: quote giornaliere di visitatori, circuiti obbligati e biglietti extra per le vette circostanti.',
    storiaBreve:
      'Costruita intorno al 1450 come probabile residenza reale o santuario dell\'imperatore Pachacútec, fu abbandonata durante la conquista spagnola e rimase sconosciuta al mondo esterno fino a quando l\'esploratore americano Hiram Bingham la fece conoscere internazionalmente nel 1911. Patrimonio UNESCO dal 1983, New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'maggio-settembre, stagione secca con cieli più tersi (ma anche la più affollata e con i biglietti che si esauriscono prima); aprile e ottobre sono un buon compromesso tra clima e affollamento.',
    durataConsigliata: 'una giornata piena se si pernotta ad Aguas Calientes il giorno prima per un ingresso all\'apertura; due giorni se si combina con il Trekking dell\'Inca Trail',
    comeArrivareInternazionale: 'Di solito si arriva all\'aeroporto di Lima (LIM) e si prosegue con un volo interno per Cusco (CUZ). Le rotte internazionali su Cusco cambiano nel tempo: vanno controllate al momento di prenotare.',
    comeArrivareLocale:
      'Da Cusco o dalla Valle Sacra ad Aguas Calientes (Machu Picchu Pueblo) si va in treno, con gli operatori PeruRail e Inca Rail, oppure a piedi con i trekking autorizzati. Da Aguas Calientes all\'ingresso del sito c\'è il bus navetta, oppure la salita a piedi, ripida. Stazioni, orari e tempi vanno controllati sui siti degli operatori.',
    comeSpostarsi:
      'All\'interno del sito si cammina su sentieri e terrazze in pietra, con dislivelli e alcuni tratti stretti. Il percorso dipende dalla rotta comprata: dal 1° giugno 2024 ci sono 3 circuiti (Panoramico, Machupicchu Classico, Machupicchu Realeza) con 10 rotte in tutto, alcune aperte solo in alta stagione.',
    prenotazione:
      'I biglietti si comprano sulla piattaforma ufficiale del Ministero della Cultura (tuboleto.cultura.pe), con circuito, rotta e orario d\'ingresso fissi; in alta stagione conviene muoversi settimane o mesi prima. Montaña Machupicchu (rotta 1-A) e Huayna Picchu (rotta 3-A, Montaña Waynapicchu) sono rotte specifiche da scegliere al momento dell\'acquisto. Per comprare il biglietto e per entrare serve il documento originale: per gli stranieri il passaporto.',
    prezzi:
      'Le tariffe dipendono da circuito e rotta e vengono fissate con decreti del Ministero della Cultura: non le riportiamo perché non siamo riusciti a confermarle su una pagina ufficiale. Il prezzo esatto compare su tuboleto.cultura.pe al momento dell\'acquisto. Treno e bus navetta si pagano a parte, con tariffe sui siti degli operatori.',
    tourOAutonomo:
      'Il regolamento di visita approvato dal Ministero della Cultura (Resolución Ministerial 000334-2026-MC, 11 settembre 2026) raccomanda la guida turistica ma non la rende obbligatoria: per entrare servono il biglietto e un documento d\'identità ufficiale, che il personale può chiedere anche dentro il sito. Una guida autorizzata aggiunge comunque molto contesto. Treno e biglietto si organizzano bene in autonomia, con largo anticipo.',
    scamDaEvitare: [
      'Rivenditori non ufficiali di biglietti online a prezzi gonfiati o con garanzie false sulla disponibilità: acquistare solo dai canali ufficiali (Ministero della Cultura peruviano) o da agenzie autorizzate riconosciute',
      'Operatori che offrono trekking sull\'Inca Trail "last minute" senza permesso regolare: i permessi sono limitatissimi e vanno prenotati mesi prima tramite agenzie autorizzate',
      'Venditori di pillole "miracolose" per il mal di montagna a Cusco a prezzi eccessivi: la coca in foglie o in tè, ampiamente disponibile, è il rimedio locale più diffuso ed economico',
    ],
    sezioniDaVedere: [
      {
        nome: 'Intihuatana',
        perche: 'la pietra rituale legata all\'osservazione astronomica, uno dei pochi manufatti di questo tipo sopravvissuti alla distruzione spagnola.',
      },
      {
        nome: 'Tempio del Sole e Recinto Reale',
        perche: 'la sezione con la muratura più raffinata del sito, esempio dell\'ingegneria inca ai suoi massimi livelli.',
      },
      {
        nome: 'Terrazze agricole',
        perche: 'raccontano la capacità inca di coltivare su pendii ripidissimi, e offrono le prospettive fotografiche più classiche sul sito.',
      },
      {
        nome: 'Huayna Picchu',
        perche: 'la montagna che fa da sfondo alle foto più iconiche di Machu Picchu — la salita (ripida, con biglietto a parte) regala la vista dall\'alto sull\'intera cittadella.',
      },
      {
        nome: 'Intipunku (Porta del Sole)',
        perche: 'il punto d\'arrivo del Cammino Inca classico, con la prima vista panoramica su Machu Picchu che vedevano i pellegrini originali.',
      },
    ],
    giorniSpeciali:
      'Il numero di visitatori al giorno è limitato; in alta stagione (giugno-agosto) i biglietti per gli orari migliori e per Huayna Picchu finiscono presto. Alcune rotte sono aperte solo in alta stagione e altre possono essere sospese per lavori di conservazione: controllare sempre il sito ufficiale prima di pianificare il viaggio.',
    doveDormire: 'Aguas Calientes (Machu Picchu Pueblo) per un ingresso mattutino senza dover dipendere dal primo treno del giorno; in alternativa Cusco o la Valle Sacra se si organizza una visita in giornata.',
    erroriDaEvitare: [
      'Prenotare treno e biglietti d\'ingresso troppo a ridosso della data: in alta stagione si esauriscono con settimane di anticipo',
      'Sottovalutare l\'altitudine di Cusco (circa 3.400 m): meglio acclimatarsi un paio di giorni prima di qualsiasi sforzo fisico',
      'Non portare abbigliamento per la pioggia: il clima della foresta nuvolosa è imprevedibile anche in stagione secca',
      'Portare il treppiede: le norme di comportamento del sito ufficiale (machupicchu.gob.pe) vietano di entrare con treppiedi, supporti ed estensioni per fotocamere e cellulari, quindi anche con il bastone da selfie; vietati anche i droni',
    ],
    miaEsperienza:
      'L\'ho fatta due volte, una col sole e una con pioggia e nuvole. Col sole è più bella, perché vedi meglio tutto; con la pioggia e la nebbiolina era tutto più mistico e misterioso, super affascinante. È uno di quei posti di cui si sono viste talmente tante foto da temere la delusione, e invece regge — ma regge nella prima ora, quando la nebbia si alza a strappi e il sito compare a pezzi. Dopo, con i gruppi in fila lungo il circuito assegnato, diventa un\'altra cosa: bellissima, ma gestita. Conviene sapere prima che non si gira liberamente: dal 2024 il circuito scelto al momento della prenotazione decide cosa si vedrà e cosa no, e la fotografia classica dall\'alto non è compresa in tutti. L\'altra cosa da mettere in conto è che i biglietti per i periodi buoni si esauriscono con mesi di anticipo, Huayna Picchu per primo. Dormire ad Aguas Calientes ed entrare al primo turno non serve per la luce: serve per quei quaranta minuti in cui il posto è ancora silenzioso.',
    fonti: [
      { url: 'https://www.machupicchu.gob.pe/circuitos-y-rutas-de-visita/', titolo: 'Machu Picchu (Ministerio de Cultura), circuiti e rotte' },
      { url: 'https://www.machupicchu.gob.pe/normas-de-conducta/', titolo: 'Machu Picchu, norme di comportamento' },
      { url: 'https://busquedas.elperuano.pe/dispositivo/EX/2553933-1', titolo: 'El Peruano, Resolución Ministerial 000334-2026-MC' },
    ],
    verificataIl: '2026-11-06',
    statoVerifica: 'parziale',
    heroImageAlt: 'Un lama pascola sui terrazzamenti inca di Machu Picchu avvolti nella nebbia del mattino, Perù',
    heroImage: '/images/peru/machu-picchu-lama-terrazze-riccardo.jpg',
  },
  {
    slug: 'chichen-itza',
    nome: 'Chichén Itzá',
    paese: 'Messico',
    citta: 'Yucatán (vicino Valladolid)',
    titolo: 'Chichén Itzá: orari, biglietti e come evitare la ressa dei pullman turistici',
    descrizione:
      'Il più celebre sito archeologico Maya dello Yucatán, dominato dalla piramide di Kukulcán (El Castillo). Il biglietto si compra sul posto, ma l\'orario di arrivo fa una differenza enorme sull\'esperienza.',
    storiaBreve:
      'Città Maya fondata intorno al V secolo d.C. e diventata, con influenze Tolteche successive, uno dei centri politici e religiosi più importanti della penisola dello Yucatán fino al suo declino nel XIII secolo. Patrimonio UNESCO dal 1988, New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'novembre-marzo, stagione più fresca e secca; il sito va comunque affrontato presto al mattino in ogni stagione per il caldo e le folle di mezza giornata.',
    durataConsigliata: 'mezza giornata, 2-3 ore di visita effettiva',
    comeArrivareInternazionale: 'Aeroporto di Cancún (CUN), il più comodo; in alternativa Mérida (MID), più vicino geograficamente al sito.',
    comeArrivareLocale: 'In bus (ADO tra gli operatori) da Cancún, Mérida o Valladolid, la più vicina; in auto a noleggio; oppure con un tour organizzato di giornata da Cancún o dalla Riviera Maya, che comporta molte ore di trasferimento.',
    comeSpostarsi: 'Il sito si visita interamente a piedi, su un\'area pianeggiante e priva quasi ovunque di ombra.',
    prenotazione: 'Sul sito dell\'INAH non è indicata una prenotazione: il biglietto si paga alla biglietteria del sito. Orari (INAH): tutti i giorni dalle 8:00 alle 17:00, ultimo ingresso alle 16:00. Arrivare all\'apertura è la vera chiave per evitare il caldo peggiore e l\'arrivo in massa dei pullman turistici a metà giornata.',
    prezzi: 'Stranieri: 697 pesos messicani in totale, cioè 105 pesos di tariffa federale INAH più 592 pesos di tariffa del Governo dello Yucatán, che si paga anch\'essa alla biglietteria del sito (per i visitatori messicani la quota statale è di 205 pesos). Lo spettacolo serale Noches de Kukulcán è organizzato dal Governo dello Yucatán, con biglietto e informazioni a parte.',
    tourOAutonomo: 'Facilmente visitabile in autonomia in bus o auto a noleggio. Le guide si trovano all\'ingresso: tariffa da concordare prima di partire. Aggiungono molto contesto sulla cosmologia Maya e sul gioco della pelota.',
    scamDaEvitare: [
      '"Guide gratuite" che si offrono spontaneamente all\'ingresso e poi richiedono una mancia elevata a fine tour: concordare sempre il prezzo prima di iniziare',
      'Venditori di souvenir all\'interno del sito con tattiche di vendita aggressive ("ultimo giorno di sconto", "prezzo speciale solo per te")',
      'Tour "combinati" venduti fuori dai terminal bus a prezzi gonfiati rispetto a quelli prenotabili online o direttamente con operatori riconosciuti',
    ],
    sezioniDaVedere: [
      {
        nome: 'El Castillo (Tempio di Kukulcán)',
        perche: 'la piramide simbolo del sito, allineata astronomicamente per l\'effetto luce-ombra a forma di serpente durante gli equinozi — non si può salire.',
      },
      {
        nome: 'Grande Gioco della Pelota',
        perche: 'il campo da gioco cerimoniale più grande della Mesoamerica, con un\'acustica particolare che si può testare con un battito di mani.',
      },
      {
        nome: 'Tempio dei Guerrieri',
        perche: 'colonnato imponente con la statua reclinata del Chac Mool, tra le zone meno affollate rispetto a El Castillo.',
      },
      {
        nome: 'El Caracol (l\'Osservatorio)',
        perche: 'edificio circolare usato per osservazioni astronomiche, una delle prove più dirette della sofisticazione scientifica Maya.',
      },
      {
        nome: 'Cenote Sagrado',
        perche: 'il pozzo naturale usato per offerte rituali (anche umane, secondo i ritrovamenti archeologici), a una breve passeggiata dal centro del sito.',
      },
    ],
    giorniSpeciali:
      'Gli equinozi di primavera e d\'autunno portano folle enormi per assistere al celebre effetto del serpente di luce e ombra che scende lungo la scalinata di El Castillo: spettacolare, ma da affrontare sapendo di trovare il sito sovraffollato. Lo spettacolo serale Noches de Kukulcán ha date, orari e biglietto propri, sul sito del Governo dello Yucatán.',
    doveDormire: 'Valladolid, cittadina coloniale a 45 minuti dal sito — la base più comoda e piacevole; alternativa Mérida, più distante ma con più offerta.',
    erroriDaEvitare: [
      'Arrivare a metà mattina: nelle ore centrali il sito si riempie dei pullman organizzati da Cancún e dalla Riviera Maya',
      'Tentare di salire su El Castillo: la scalata non è consentita',
      'Non portare acqua e protezione solare: il sito è quasi completamente privo di ombra',
    ],
    miaEsperienza:
      'L\'ho vista quattro volte. È bellissima, ma con riserva. È la meraviglia che più delude chi arriva impreparato, e la ragione non è il sito ma il modo in cui lo si visita. Dalle dieci in poi arrivano i pullman di massa dalla Riviera, da Cancún e da Playa del Carmen, e non mi piace per niente, come le bancarelle che ci sono ovunque: i viali si riempiono di venditori, una bancarella accanto all\'altra lungo quasi tutti i percorsi, con i fischietti a forma di giaguaro che suonano di continuo. Entrare all\'apertura cambia completamente l\'esperienza. Il Castillo non si sale più da anni, quindi va guardato da sotto, ed è lì che si capisce il gioco: battendo le mani davanti alla scalinata l\'eco torna indietro come il verso del quetzal, e non è una coincidenza. Chi cerca la sensazione di scoperta la trova più a Uxmal o a Cobá, e tra Messico, Belize e Guatemala ci sono templi che secondo me sono più belli: Calakmul, Palenque, Tikal, Caracol. Qui si viene per la precisione astronomica, che è un\'altra cosa e vale comunque.',
    fonti: [
      { url: 'https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza', titolo: 'INAH, zona archeologica di Chichén Itzá' },
    ],
    verificataIl: '2026-11-06',
    statoVerifica: 'verificata',
    heroImageAlt: 'La piramide di El Castillo a Chichén Itzá vista di fronte, con la scalinata centrale, il prato verde e il cielo azzurro, Yucatán, Messico',
    heroImage: '/images/meraviglie/chichen-itza.jpg',
  },
  {
    slug: 'colosseo',
    nome: 'Colosseo',
    nomeLocale: 'Colosseum / Anfiteatro Flavio',
    paese: 'Italia',
    citta: 'Roma',
    titolo: 'Colosseo: biglietti combinati, accesso all\'arena e come evitare le code',
    descrizione:
      'Il più grande anfiteatro mai costruito dall\'Impero Romano, nel cuore di Roma. Insieme al Foro Romano e al Palatino forma un\'area archeologica unica, visitabile con un unico biglietto combinato.',
    storiaBreve:
      'Costruito tra il 70 e l\'80 d.C. sotto la dinastia Flavia, ospitava combattimenti tra gladiatori, cacce di animali selvatici e spettacoli pubblici davanti a decine di migliaia di spettatori. Patrimonio UNESCO dal 1980 (nell\'ambito del centro storico di Roma), New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'aprile-maggio e settembre-ottobre, clima mite; in piena estate le code e il caldo dentro l\'anfiteatro (poca ombra) rendono la visita più faticosa — meglio prenotare gli orari mattutini o del tardo pomeriggio.',
    durataConsigliata: '2-3 ore per Colosseo, Foro Romano e Palatino insieme',
    comeArrivareInternazionale: 'Aeroporto di Roma-Fiumicino (FCO) o Roma-Ciampino (CIA).',
    comeArrivareLocale: 'Metro Linea B, fermata Colosseo, proprio davanti all\'ingresso; numerose linee di bus e tram; a piedi dal centro storico (15-20 minuti da Piazza Venezia).',
    comeSpostarsi: 'Il sito e l\'area archeologica circostante (Foro Romano, Palatino) si visitano interamente a piedi, su terreno spesso irregolare (pavimentazione antica, gradini).',
    prenotazione: 'Il canale ufficiale è ticketing.colosseo.it, la biglietteria online del Parco archeologico del Colosseo: le vendite aprono 30 giorni prima della visita e l\'ingresso al Colosseo è sempre a orario fisso. I biglietti sono nominativi: all\'ingresso va tenuto a vista un documento d\'identità insieme al biglietto, che basta mostrare sullo smartphone. C\'è anche la biglietteria sul posto, ma in alta stagione conviene prenotare online. Con il biglietto base si resta nel Colosseo al massimo 75 minuti, con la Full Experience Underground and Arena 90.',
    prezzi:
      'Biglietto Colosseo, Foro Romano e Palatino (24 ore): 18 euro intero; comprende primo e secondo livello del Colosseo, Foro Romano e Palatino, non l\'arena né i sotterranei. Full Experience Underground and Arena: 24 euro (32 con visita didattica), valido 2 giorni consecutivi; comprende arena e sotterranei (quando accessibili), Foro, Palatino e i siti SUPER. Ridotto a 2 euro per i cittadini UE dai 18 anni al compimento dei 25. Ingresso gratuito la prima domenica del mese, senza prenotazione (dettagli sotto).',
    tourOAutonomo:
      'Visitabile bene in autonomia. Il biglietto Full Experience con arena e sotterranei, o una visita guidata, aggiunge una prospettiva che da soli non si può vedere: i sotterranei dove venivano preparati gladiatori e animali.',
    scamDaEvitare: [
      'Venditori di biglietti "salta fila" fuori dall\'area archeologica a prezzi molto più alti di quelli ufficiali',
      '"Gladiatori" in costume che si offrono per foto e poi chiedono compensi elevati non dichiarati in anticipo',
      'Finti tour "senza coda" venduti da persone non affiliate, che spesso rivendono biglietti generici già esauriti per lo slot promesso',
    ],
    sezioniDaVedere: [
      {
        nome: 'L\'arena (sezione ricostruita)',
        perche: 'una porzione del pavimento originale è stata ricostruita, permettendo di stare dove un tempo si esibivano i gladiatori.',
      },
      {
        nome: 'Gli ipogei (sotterranei)',
        perche: 'la rete di corridoi e montacarichi usati per far comparire d\'improvviso gladiatori e animali nell\'arena — accesso solo con biglietto "Full Experience" e su prenotazione.',
      },
      {
        nome: 'Gli anelli superiori',
        perche: 'la vista d\'insieme migliore sull\'intera struttura, comprese le gradinate dove sedeva la plebe romana.',
      },
      {
        nome: 'Foro Romano e Palatino',
        perche: 'inclusi nello stesso biglietto combinato, raccontano il cuore politico e residenziale dell\'antica Roma — spesso sottovalutati rispetto al solo Colosseo.',
      },
    ],
    giorniSpeciali: 'Ingresso gratuito la prima domenica del mese e il 25 aprile, il 2 giugno e il 4 novembre. Nelle prime domeniche i biglietti gratuiti non si prenotano: si ritirano di persona alle biglietterie di piazza del Colosseo e di Largo della Salara Vecchia, in ordine di arrivo, solo individuali e validi per quel giorno; non si accede ad arena, sotterranei, livelli superiori e ascensore panoramico, e la Domus Aurea è chiusa. Orario invernale (25 ottobre 2026 - 28 febbraio 2027): 8:30-16:30, ultimo ingresso alle 15:30; chiuso il 25 dicembre e il 1° gennaio. Eventuali aperture serali sono nel calendario del sito ufficiale.',
    doveDormire: 'Zona Monti o Celio, entrambe a pochi minuti a piedi dal Colosseo e dal centro storico.',
    erroriDaEvitare: [
      'Presentarsi senza biglietto prenotato in alta stagione, rischiando di non trovare posto per lo stesso giorno',
      'Sottovalutare i controlli di sicurezza all\'ingresso, che allungano i tempi anche con biglietto già in mano',
      'Visitare a mezzogiorno in piena estate: l\'interno dell\'anfiteatro ha pochissima ombra',
    ],
    miaEsperienza:
      'L\'ho visto una miriade di volte, ed è sempre bello e affascinante. Ma qui gioco in casa, e stare in mezzo alla città, con il traffico che ci passa davanti, gli dà per me un fascino diverso da quello delle altre meraviglie. Il modo per guardarlo con occhi nuovi è scendere negli ipogei, i sotterranei dove stavano gabbie, montacarichi e chi lavorava agli spettacoli: sono a ingresso separato, a numero chiuso, si esauriscono presto, e sono di gran lunga la parte più interessante del monumento. L\'errore più comune resta comprare il biglietto sul posto: la fila si conta in ore, e online sul sito ufficiale costa meno. Attenzione anche a chi propone "salta fila" davanti all\'ingresso, spesso a prezzi tripli per lo stesso biglietto. Il consiglio pratico è visitarlo la mattina presto o nell\'ultima fascia del pomeriggio, e tenersi il Palatino per dopo: è compreso nello stesso biglietto e quasi tutti lo saltano per stanchezza.',
    fonti: [
      { url: 'https://colosseo.it/orari-e-biglietti/', titolo: 'Parco archeologico del Colosseo, orari e biglietti' },
      { url: 'https://colosseo.it/biglietti/colosseo-foro-romano-palatino/', titolo: 'Biglietto Colosseo, Foro Romano, Palatino' },
      { url: 'https://colosseo.it/en/tickets/full-experience-underground-arena/', titolo: 'Full Experience Underground and Arena' },
      { url: 'https://colosseo.it/faq-biglietti/', titolo: 'FAQ biglietti' },
      { url: 'https://colosseo.it/2025/03/domenicalmuseo-colosseo/', titolo: 'Domeniche e giornate gratuite' },
    ],
    verificataIl: '2026-11-06',
    statoVerifica: 'verificata',
    heroImageAlt: 'Il Colosseo di Roma visto dal Foro Romano nella luce calda del pomeriggio, tra cipressi, ulivi e colonne antiche',
    heroImage: '/images/meraviglie/colosseo.jpg',
  },
  {
    slug: 'taj-mahal',
    nome: 'Taj Mahal',
    nomeLocale: 'ताज महल',
    paese: 'India',
    citta: 'Agra',
    titolo: 'Taj Mahal: perché conviene l\'ingresso all\'alba e come evitare le truffe dei finti negozi',
    descrizione:
      'Il mausoleo di marmo bianco fatto costruire dall\'imperatore Moghul Shah Jahan in memoria della moglie Mumtaz Mahal, sulle rive del fiume Yamuna. Uno dei monumenti più fotografati al mondo, e uno di quelli dove l\'orario di visita cambia radicalmente l\'esperienza.',
    storiaBreve:
      'Costruito tra il 1632 e il 1653 da circa 20.000 artigiani, è considerato l\'apice dell\'architettura Moghul, con influenze persiane, islamiche e indiane. Patrimonio UNESCO dal 1983, New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'novembre-febbraio, temperature più miti; da evitare il monsone (luglio-settembre, afa altissima) e l\'estate (aprile-giugno, spesso oltre i 40°C).',
    durataConsigliata: '2-3 ore per la visita, mezza giornata se combinata con il Forte di Agra',
    comeArrivareInternazionale: 'Aeroporto di Delhi (DEL), il principale scalo internazionale più vicino.',
    comeArrivareLocale: 'Da Delhi in treno, tra i più rapidi il Gatimaan Express e lo Shatabdi Express, oppure in auto o bus: orari sui canali delle ferrovie indiane. La gita in giornata da Delhi è molto comune ma frettolosa: pernottare almeno una notte ad Agra permette l\'ingresso all\'alba.',
    comeSpostarsi: 'Il complesso si visita interamente a piedi; dal parcheggio esterno (le auto non possono avvicinarsi per motivi di inquinamento) si prosegue con navette elettriche, a piedi o in risciò a pedali fino agli ingressi.',
    prenotazione: 'I biglietti si comprano online sul portale dell\'Archaeological Survey of India (asi.payumoney.com), con 50 rupie di sconto per ogni biglietto straniero rispetto alla biglietteria; quelli per la visita notturna su asi.paygov.org.in. Comprare online la sera prima evita la coda alla cassa.',
    prezzi: 'Stranieri: 1.100 rupie per l\'ingresso al complesso (comprende le tariffe ASI e ADA), più 200 rupie facoltative per entrare nel mausoleo principale. Ingresso gratuito sotto i 15 anni. Online si risparmiano 50 rupie a biglietto.',
    tourOAutonomo: 'Facilmente visitabile in autonomia. Una guida autorizzata, con tariffa da concordare prima, aiuta a capire i dettagli della simmetria architettonica e della calligrafia coranica incisa sul marmo, oltre a scoraggiare l\'avvicinamento di venditori e falsi assistenti.',
    scamDaEvitare: [
      'Finte guide o "assistenti" fuori dai cancelli che offrono aiuto e poi portano verso negozi di tappeti/marmi con commissione, sotto forma di "laboratorio artigianale da visitare"',
      'Tassisti che insistono per portare solo a negozi "convenzionati dal governo" a prezzi gonfiati',
      'Persone che affermano che l\'ingresso "è chiuso" o "cambiato" per reindirizzare verso un accesso alternativo a pagamento',
    ],
    sezioniDaVedere: [
      {
        nome: 'Il mausoleo principale',
        perche: 'l\'intarsio in marmo (pietra dura) con motivi floreali e calligrafia coranica è visibile da vicino solo salendo sulla piattaforma di marmo — qui si trovano i cenotafi di Shah Jahan e Mumtaz Mahal.',
      },
      {
        nome: 'I giardini Charbagh',
        perche: 'il giardino quadripartito persiano che inquadra simmetricamente il mausoleo, pensato per essere ammirato lungo l\'asse centrale dal Grande Cancello.',
      },
      {
        nome: 'Il Grande Cancello (Darwaza-i-rauza)',
        perche: 'la prima vista incorniciata del Taj Mahal, un momento scenografico voluto dagli architetti originali.',
      },
      {
        nome: 'Moschea e Jawab',
        perche: 'i due edifici gemelli in arenaria rossa ai lati del mausoleo, spesso ignorati ma parte integrante della simmetria del complesso.',
      },
      {
        nome: 'Mehtab Bagh',
        perche: 'giardino sulla sponda opposta del fiume Yamuna, ottimo per una vista del Taj Mahal al tramonto senza l\'affollamento del complesso principale.',
      },
    ],
    giorniSpeciali: 'Il Taj Mahal è chiuso ogni venerdì; gli altri giorni apre da 30 minuti prima dell\'alba a 30 minuti prima del tramonto. Visita notturna: cinque notti al mese (la notte di luna piena, le due prima e le due dopo), dalle 20:00 alle 23:59, in 8 turni da massimo 50 persone di 30 minuti ciascuno, con biglietto separato.',
    doveDormire: 'Agra, per un ingresso all\'alba (la luce migliore e la minore folla); molti hotel con vista sul monumento si trovano nella zona di Taj Ganj, a ridosso dell\'ingresso est.',
    erroriDaEvitare: [
      'Programmare la visita di venerdì: il sito è chiuso',
      'Arrivare a metà mattina in alta stagione: le code diventano lunghissime e il caldo si fa sentire',
      'Seguire chiunque si offra spontaneamente come guida o "aiuto" fuori dai cancelli ufficiali',
    ],
    miaEsperienza:
      'Il Taj è l\'unico monumento che regge davvero la propria fama, e lo fa per un motivo difficile da spiegare a parole: il marmo cambia colore durante il giorno, rosato all\'alba, bianco accecante a mezzogiorno, ambrato al tramonto, e non è un modo di dire. Va visto all\'apertura, con il biglietto comprato online la sera prima, perché entro le nove i cortili sono pieni e la panchina delle fotografie ha una fila costante. La cosa che colpisce da vicino, e che nessuna foto mostra, è l\'intarsio: fiori composti con decine di pietre dure incastrate nel marmo, che si vedono solo appoggiandosi al muro. Ad Agra però bisogna essere preparati a tutto il resto: il livello di insistenza di guide non autorizzate, autisti e venditori attorno agli ingressi è tra i più alti dell\'India, e l\'unico modo di gestirlo è non avviare la conversazione. Chiude il venerdì, ed è l\'errore più comune di chi organizza all\'ultimo.',
    fonti: [
      { url: 'https://www.tajmahal.gov.in/', titolo: 'Taj Mahal, sito ufficiale' },
    ],
    verificataIl: '2026-11-06',
    statoVerifica: 'verificata',
    heroImageAlt: 'Il Taj Mahal simmetrico all\'alba con la vasca d\'acqua e i cipressi dei giardini Charbagh, Agra, India',
    heroImage: '/images/india/agra-taj-mahal-alba-riccardo.jpg',
  },
]
