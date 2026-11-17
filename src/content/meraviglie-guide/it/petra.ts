import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  prezzi:
    'Jordan Pass: 70 JOD (Jordan Wanderer, 1 giorno a Petra), 75 JOD (Jordan Explorer, 2 giorni consecutivi), 80 JOD (Jordan Expert, 3 giorni consecutivi). Senza pass, biglietto di Petra per stranieri: 50 JOD per 1 giorno, 55 JOD per 2 giorni, 60 JOD per 3 giorni; 90 JOD per chi visita Petra in giornata senza pernottare in Giordania. Petra by Night costa 30 JOD a persona, gratis sotto i 10 anni, e non è incluso in nessuna versione del Jordan Pass.',
  luoghi: [
    {
      nome: 'Siq e Tesoro (Al-Khazneh)',
      testo:
        "Il Siq è la gola naturale di circa 1,2 km che porta in città, tra pareti di arenaria alte fino a 180 metri e larghe in certi punti appena 3 metri. Alla fine si stringe e mostra di colpo la facciata del Tesoro, alta circa 37 metri e scolpita nella roccia. È il momento che tutti aspettano, e funziona anche sapendolo.",
      come: "Dal centro visitatori al Tesoro si cammina da mezz'ora a un'ora, secondo il passo. Nel primo tratto, prima del Siq, si può andare a cavallo.",
      quando: "Alla primissima ora, quando il Siq è vuoto; il sole arriva sulla facciata del Tesoro a metà mattina.",
      tempo: '45 minuti',
      costo:
        '50 JOD (circa 60 €) per 1 giorno, 55 JOD (circa 67 €) per 2, 60 JOD (circa 73 €) per 3 a chi dorme almeno una notte in Giordania; 90 JOD (circa 109 €) in giornata senza pernottamento (2026). Incluso nel Jordan Pass.',
      orari: "Tutti i giorni dalle 6; chiusura alle 17, d'inverno anche verso le 16 (2026).",
      lat: 30.32208,
      lng: 35.45154,
      url: 'https://international.visitjordan.com/page/17/Entrance-Fees',
    },
    {
      nome: 'Via delle Facciate e Teatro',
      testo:
        "Dopo il Tesoro la valle si apre su file di tombe scavate nella parete, con le facciate a gradoni tipiche dei Nabatei. Poco più avanti c'è il teatro, ricavato direttamente nella roccia, che poteva ospitare circa 8.500 persone.",
      come: 'A piedi dal Tesoro, tutto in piano.',
      quando: 'In mattinata, proseguendo dal Tesoro.',
      tempo: '1 ora',
      costo: 'Incluso nel biglietto di Petra e nel Jordan Pass',
      orari: 'Con il sito, dalle 6 alla chiusura.',
      lat: 30.32398,
      lng: 35.44769,
    },
    {
      nome: 'Tombe Reali',
      testo:
        "Un gruppo di tombe monumentali scavate nella montagna di Al-Khubtha: la Tomba dell'Urna, la Tomba di Seta, la Tomba Corinzia e la Tomba del Palazzo. Nella Tomba dell'Urna si sale e si entra nella grande sala, dove le venature della roccia sembrano dipinte.",
      come: 'Pochi minuti a piedi dal teatro, con qualche scalino per salire alle facciate.',
      quando: 'Nel pomeriggio, quando la luce bassa accende di rosso le pareti.',
      tempo: '45 minuti',
      costo: 'Incluso nel biglietto di Petra e nel Jordan Pass',
      orari: 'Con il sito, dalle 6 alla chiusura.',
      lat: 30.32755,
      lng: 35.44926,
    },
    {
      nome: 'Strada colonnata e Grande Tempio',
      testo:
        "Il cardo romano lastricato che attraversa il fondovalle, con le colonne ancora in piedi su un lato e i resti dei mercati. Sopra, a sinistra, il Grande Tempio: un complesso nabateo su terrazze con un piccolo teatro interno, tra le più grandi strutture costruite, e non scavate, della città.",
      come: 'A piedi dopo il teatro e le Tombe Reali, in piano. Al Grande Tempio si sale per una scalinata.',
      quando: 'In tarda mattinata, di passaggio verso il Monastero.',
      tempo: '45 minuti',
      costo: 'Incluso nel biglietto di Petra e nel Jordan Pass',
      orari: 'Con il sito, dalle 6 alla chiusura.',
      lat: 30.32912,
      lng: 35.44326,
    },
    {
      nome: 'Qasr al-Bint',
      testo:
        "Il tempio principale della città nabatea, uno dei pochi edifici in muratura sopravvissuti, ancora alto più di 20 metri. Chiude la strada colonnata e segna l'inizio della salita al Monastero; qui ci sono anche i due ristoranti del fondovalle e i bagni.",
      come: "A piedi in fondo alla strada colonnata, a circa 4 km dall'ingresso.",
      quando: "All'ora di pranzo, come pausa prima del Monastero.",
      tempo: '20-30 minuti',
      costo: 'Incluso nel biglietto di Petra e nel Jordan Pass',
      orari: 'Con il sito, dalle 6 alla chiusura.',
      lat: 30.3295,
      lng: 35.4401,
    },
    {
      nome: 'Monastero (Ad-Deir)',
      testo:
        'La facciata più grande di Petra, alta circa 45 metri e larga 50, più massiccia e spoglia del Tesoro. Si raggiunge con un sentiero di oltre 800 gradini scavati nella roccia, e davanti c\'è un chiosco dove fermarsi con un tè alla menta guardando il monumento.',
      come: 'Si parte dal fondovalle, dopo il Qasr al-Bint: 40-45 minuti di salita ripida. Lungo il sentiero ci sono bancarelle e qualche punto d\'ombra.',
      quando: 'Dopo mezzogiorno, quando il sole è sulla facciata; al mattino è in ombra.',
      tempo: '2-2,5 ore tra andata e ritorno',
      costo: 'Incluso nel biglietto di Petra e nel Jordan Pass',
      orari: "Con il sito; d'inverno conviene iniziare la salita entro le 14 per non scendere al buio.",
      lat: 30.33821,
      lng: 35.43098,
      consiglio: 'Scarpe da trekking e acqua. Gli asini offerti per la salita sono spesso tenuti male: meglio salire a piedi.',
    },
    {
      nome: 'Alto Luogo del Sacrificio (Al-Madbah)',
      testo:
        "Un'area cerimoniale in cima al Jebel Madbah, con l'altare e due obelischi scolpiti nella roccia. Il sentiero sale a gradoni dalla zona del teatro e regala una vista dall'alto sul centro di Petra che dal fondovalle non si immagina.",
      come: 'Si sale a piedi dalla Via delle Facciate, circa 45 minuti di gradini. Si può scendere dall\'altro versante per il Wadi Farasa, passando dalla Fontana del Leone e dalla Tomba del Soldato Romano, e sbucare vicino al Qasr al-Bint.',
      quando: "Al mattino presto o nel secondo giorno di visita; d'estate mai nelle ore centrali.",
      tempo: '2-3 ore con la discesa dal Wadi Farasa',
      costo: 'Incluso nel biglietto di Petra e nel Jordan Pass',
      orari: 'Con il sito, dalle 6 alla chiusura.',
      lat: 30.32148,
      lng: 35.44699,
    },
    {
      nome: 'Belvedere di Al-Khubtha sul Tesoro',
      testo:
        'Il sentiero che sale sul massiccio di Jebel al-Khubtha, sopra le Tombe Reali, fino a un punto panoramico che guarda il Tesoro dall\'alto. È la classica foto di Petra dall\'alto e costa meno fatica del Monastero.',
      come: "Si parte dalle Tombe Reali, sul lato della Tomba dell'Urna: circa un'ora di salita su scalini e roccia. In cima una tenda beduina chiede qualche dinaro per affacciarsi.",
      quando: 'Al mattino, quando il sole illumina la facciata del Tesoro.',
      tempo: '2-2,5 ore tra andata e ritorno',
      costo: 'Incluso nel biglietto di Petra, più qualche dinaro al punto panoramico',
      orari: 'Con il sito, dalle 6 alla chiusura.',
    },
    {
      nome: 'Petra by Night',
      testo:
        "Il Siq percorso al buio, illuminato da centinaia di candele, fino al Tesoro, dove si ascolta musica beduina seduti a terra. È un'esperienza d'atmosfera più che una visita, ma il Tesoro a lume di candela resta un'immagine forte.",
      come: 'Partenza dal centro visitatori di Wadi Musa e cammino in gruppo fino al Tesoro. Serve anche il biglietto di giorno o il Jordan Pass; non si prenota.',
      quando: 'Solo alcune sere a settimana, da verificare al centro visitatori o in hotel; meglio la sera prima o dopo la giornata intera.',
      tempo: '2 ore',
      costo: '30 JOD (circa 36 €), gratis sotto i 10 anni (2026); non incluso nel Jordan Pass',
      orari: 'Dalle 20.30 alle 22.30 circa, nelle sere in cui si tiene.',
      lat: 30.32208,
      lng: 35.45154,
      url: 'https://visitpetra.jo/en/Event/25',
      consiglio: 'Arrivare presto al centro visitatori per stare in testa al gruppo: le prime file trovano il Siq silenzioso.',
    },
    {
      nome: 'Museo di Petra',
      testo:
        "Il museo aperto nel 2019 accanto al centro visitatori, con statue, ceramiche, gioielli e iscrizioni trovati nel sito. In un'ora spiega chi erano i Nabatei e come vivevano, cosa che tra le facciate di roccia non è ovvia.",
      come: "All'ingresso di Petra, a Wadi Musa, prima dei tornelli.",
      quando: 'Il pomeriggio del giorno di arrivo, o al rientro dalla visita nelle ore calde.',
      tempo: '1 ora',
      costo: 'Incluso nel biglietto di Petra',
      lat: 30.32532,
      lng: 35.46784,
    },
    {
      nome: 'Little Petra (Siq al-Barid)',
      testo:
        'Un piccolo canyon a circa 8 km a nord di Wadi Musa, con abitazioni scavate nell\'arenaria, sale da banchetto nabatee e una grande cisterna. Nel Biclinio Dipinto restano affreschi ben conservati, rari in tutto il mondo nabateo. È più tranquillo di Petra e fa da anticipo in miniatura.',
      come: 'In taxi o in auto da Wadi Musa, circa un quarto d\'ora. Nel canyon si cammina.',
      quando: 'Nel pomeriggio, quando la luce bassa scalda l\'arenaria; perfetto il giorno prima di Petra.',
      tempo: '1,5-2 ore',
      costo: 'Ingresso libero',
      orari: 'Di giorno.',
      lat: 30.37408,
      lng: 35.44803,
    },
  ],
  programmi: [
    {
      titolo: 'Mezza giornata',
      tappe: [
        "Ingresso all'apertura, alle 6",
        'Siq e Tesoro con poca gente',
        'Via delle Facciate e teatro',
        'Tombe Reali, poi rientro per il Siq',
      ],
    },
    {
      titolo: '1 giorno',
      tappe: [
        "Ingresso all'apertura: Siq e Tesoro",
        'Via delle Facciate, teatro e Tombe Reali',
        'Strada colonnata e Grande Tempio',
        'Pranzo vicino al Qasr al-Bint',
        'Salita al Monastero nel primo pomeriggio, con il sole sulla facciata',
        'Rientro per il Siq verso la chiusura',
      ],
    },
    {
      titolo: '2-3 giorni',
      tappe: [
        'Giorno 1: Little Petra nel pomeriggio e Museo di Petra; la sera Petra by Night, se è una delle sere previste',
        'Giorno 2: Siq, Tesoro, Tombe Reali, strada colonnata e Monastero',
        'Giorno 3: belvedere di Al-Khubtha sul Tesoro al mattino, poi Alto Luogo del Sacrificio con discesa dal Wadi Farasa',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Petra, 1 giorno',
      prezzo: '50 JOD (circa 60 €)',
      include: 'Ingresso al sito e al Museo di Petra, per chi dorme almeno una notte in Giordania',
      dove: 'Biglietteria del centro visitatori di Wadi Musa',
    },
    {
      tipo: 'Petra, 2 giorni consecutivi',
      prezzo: '55 JOD (circa 67 €)',
      include: 'Ingresso per due giorni di fila',
      dove: 'Biglietteria del centro visitatori',
    },
    {
      tipo: 'Petra, 3 giorni consecutivi',
      prezzo: '60 JOD (circa 73 €)',
      include: 'Ingresso per tre giorni di fila',
      dove: 'Biglietteria del centro visitatori',
    },
    {
      tipo: 'Petra in giornata senza pernottamento',
      prezzo: '90 JOD (circa 109 €)',
      include: 'Ingresso di un giorno per chi non dorme in Giordania, ad esempio arrivando da Eilat o da una crociera',
      dove: 'Biglietteria del centro visitatori',
    },
    {
      tipo: 'Jordan Pass',
      prezzo: '70, 75 o 80 JOD (circa 85, 91 o 97 €)',
      include: 'Petra per 1, 2 o 3 giorni secondo la versione, oltre 40 siti del Paese e la tassa del visto per chi resta almeno 3 notti',
      dove: 'Online su jordanpass.jo, prima di arrivare',
    },
    {
      tipo: 'Petra by Night',
      prezzo: '30 JOD (circa 36 €)',
      include: 'Il Siq e il Tesoro illuminati dalle candele, con musica; gratis sotto i 10 anni. Non incluso nel Jordan Pass',
      dove: 'Centro visitatori, la sera stessa',
    },
  ],
  mesi: [
    { voto: 3, folla: 'bassa', nota: 'Freddo al mattino, giornate corte e chiusura verso le 16; poche persone nel Siq.' },
    { voto: 3, folla: 'bassa', nota: 'Fresco, possibili piogge. Nel 2027 il Ramadan inizia a febbraio: a Wadi Musa alcuni locali aprono solo dopo il tramonto.' },
    { voto: 4, folla: 'media', nota: 'Il Ramadan finisce nei primi giorni del mese; temperature buone per camminare.' },
    { voto: 5, folla: 'alta', nota: 'Clima ideale e giornate lunghe: il mese più richiesto, conviene entrare alle 6.' },
    { voto: 4, folla: 'media', nota: 'Si scalda dopo le 10; la salita al Monastero va fatta presto o nel tardo pomeriggio.' },
    { voto: 2, folla: 'bassa', nota: "Caldo forte e poca ombra lungo tutto il percorso." },
    { voto: 2, folla: 'bassa', nota: 'Il mese più caldo: visita solo all\'alba e al tramonto.' },
    { voto: 2, folla: 'media', nota: 'Ancora molto caldo; tornano i gruppi delle vacanze estive.' },
    { voto: 3, folla: 'media', nota: 'Le temperature calano nella seconda metà del mese.' },
    { voto: 5, folla: 'alta', nota: 'Il miglior equilibrio tra clima e luce, con molti gruppi organizzati.' },
    { voto: 5, folla: 'media', nota: 'Giornate fresche e limpide, folla in calo.' },
    { voto: 3, folla: 'media', nota: 'Freddo la sera e qualche pioggia; più gente tra Natale e Capodanno.' },
  ],
  zone: [
    {
      nome: 'Wadi Musa',
      perChi: "chi vuole entrare all'apertura",
      testo: "Il paese sotto l'ingresso, con hotel di tutte le fasce e ristoranti. A pochi minuti dal sito a piedi o in navetta.",
      fascia: '40-180 €',
    },
    {
      nome: 'Little Petra / Beidha',
      perChi: 'chi vuole silenzio',
      testo: 'Campi e guesthouse vicino al canyon di Little Petra, più isolati e poco serviti la sera. Serve un\'auto o un taxi per l\'ingresso di Petra.',
      fascia: '50-150 €',
    },
    {
      nome: 'Taybeh',
      perChi: 'chi viaggia in auto e cerca panorama',
      testo: "Il villaggio sulla collina a sud di Wadi Musa, con qualche hotel in posizione alta sulla valle e tramonti ampi. Circa un quarto d'ora d'auto dall'ingresso del sito.",
      fascia: '60-150 €',
    },
  ],
  gite: [
    {
      nome: 'Wadi Rum',
      distanza: '1 ora e mezza in auto, circa 110 km',
      come: 'Transfer, taxi o auto a noleggio verso sud sulla Desert Highway; nel deserto si entra con le jeep dei campi beduini.',
      testo: "La valle di sabbia rossa e torri di arenaria di Lawrence d'Arabia. Meglio fermarsi una notte in tenda che fare andata e ritorno in giornata.",
      link: '/destinazioni/giordania/wadi-rum',
    },
    {
      nome: 'Castello di Karak',
      distanza: "2-2,5 ore in auto sulla King's Highway",
      come: "In auto o transfer verso nord sulla King's Highway; si combina con l'arrivo da Amman o dal Mar Morto.",
      testo: 'La grande fortezza crociata sull\'altopiano, con corridoi a volta, sale sotterranee e camminamenti sulle mura. Inclusa nel Jordan Pass.',
      link: '/destinazioni/giordania/karak-monte-nebo',
    },
    {
      nome: 'Riserva di Dana',
      distanza: '1 ora e mezza in auto, circa 70 km',
      come: "In auto sulla King's Highway fino al villaggio di Dana; i sentieri si fanno a piedi, alcuni con guida della riserva.",
      testo: 'La riserva naturale più grande della Giordania, con un villaggio di pietra sul bordo di una valle che scende verso il Wadi Araba. Buona per una giornata di cammino dopo i siti archeologici.',
    },
    {
      nome: 'Aqaba e il Mar Rosso',
      distanza: '2 ore in auto, circa 125 km',
      come: 'Transfer, taxi o auto sulla Desert Highway; di solito si passa da Wadi Rum.',
      testo: 'Snorkeling sulle barriere coralline e spiaggia dopo giorni di deserto: la tappa finale naturale di un giro da Petra verso sud.',
      link: '/destinazioni/giordania/aqaba',
    },
  ],
  faq: [
    {
      domanda: 'Quanti giorni servono a Petra?',
      risposta: "Un giorno intero basta per Siq, Tesoro, Tombe Reali e Monastero, entrando all'apertura. Con due giorni si aggiungono l'Alto Luogo del Sacrificio, il belvedere di Al-Khubtha e Little Petra senza correre.",
    },
    {
      domanda: 'Conviene il Jordan Pass per Petra?',
      risposta: 'Quasi sempre sì per chi resta almeno tre notti: da 70 JOD comprende Petra (50 JOD da sola) e la tassa del visto, oltre a Jerash, Wadi Rum e decine di altri siti. Va comprato online prima di arrivare.',
    },
    {
      domanda: 'Si può visitare Petra in giornata da Amman o da Aqaba?',
      risposta: 'Si può, con più di tre ore di strada da Amman e circa due da Aqaba, ma si arriva quando il Siq è già pieno. Dormire a Wadi Musa permette di entrare alle 6, che è il vero vantaggio.',
    },
    {
      domanda: 'Petra by Night vale la pena?',
      risposta: "Sì, come esperienza d'atmosfera: si vedono solo Siq e Tesoro illuminati dalle candele. Costa 30 JOD, non è nel Jordan Pass e si tiene solo alcune sere a settimana.",
    },
    {
      domanda: 'Quanto si cammina a Petra?',
      risposta: "Dall'ingresso al Qasr al-Bint sono circa 4 km, e il Monastero aggiunge oltre 800 gradini: in una giornata completa si fanno 15-20 km. Servono scarpe da trekking, acqua e cappello, anche d'inverno.",
    },
    {
      domanda: 'Conviene salire al Monastero in asino?',
      risposta: 'Meglio di no: gli animali lavorano spesso in condizioni pessime e il prezzo tende a salire a fine giro. A piedi la salita richiede 40-45 minuti con qualche sosta.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/petra-tesoro-facciata-riccardo.jpg',
      alt: 'La facciata intera del Tesoro di Petra, con il frontone e i due ordini di colonne scolpiti nella roccia rosa',
    },
    {
      src: '/images/giordania/petra-siq-riccardo.jpg',
      alt: 'Due piccole figure camminano nel Siq di Petra tra pareti di roccia altissime',
    },
    {
      src: '/images/giordania/petra-tesoro-cammello-riccardo.jpg',
      alt: 'Primo piano di un cammello bardato davanti alle colonne del Tesoro di Petra',
    },
    {
      src: '/images/giordania/petra-tesoro-colonne-riccardo.jpg',
      alt: "Le colonne corinzie e il portale buio del Tesoro di Petra nella luce rosata del mattino",
    },
    {
      src: '/images/giordania/little-petra-facciata-riccardo.jpg',
      alt: "Una facciata nabatea con colonne scolpita nell'arenaria di Little Petra, tra le rocce erose",
    },
  ],
  destinazione: 'giordania/petra',
}
