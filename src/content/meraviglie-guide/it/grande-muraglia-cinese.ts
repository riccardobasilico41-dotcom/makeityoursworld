import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'cina/pechino',
  prezzi:
    'Ingresso alla Muraglia (2026): Badaling 40 yuan da aprile a ottobre e 35 da novembre a marzo (circa 5 €); Mutianyu 45 yuan (circa 5,5 €), con navetta, funivia, seggiovia e toboga a parte; Juyongguan 40 e 35 yuan; Huanghuacheng 60 yuan (circa 7 €); Jinshanling 65 yuan da aprile a ottobre e 55 da novembre a marzo (circa 7-8 €), funivia 40 yuan solo andata; Simatai 40 yuan di giorno e 200 yuan (circa 24 €) per la visita serale, più 140 yuan (circa 17 €) per Gubei Water Town. A Badaling, Juyongguan e Mutianyu i minori di 18 anni con passaporto hanno riduzioni o ingresso gratuito; gli impianti di risalita si pagano a prezzo pieno sopra 1,2 metri di altezza.',
  luoghi: [
    {
      nome: 'Mutianyu',
      testo:
        "Il tratto restaurato più bello vicino a Pechino: un crinale coperto di bosco, con 20 torri di guardia aperte alla visita e la cinta che prosegue verso Jiankou. È meno affollato di Badaling e ha tre modi per salire: a piedi, in funivia o in seggiovia, con il toboga per scendere a valle.",
      come:
        "Dal centro servizi parte una navetta che in circa 3 km porta ai piedi della muraglia. Da lì si sale a piedi su due sentieri da circa 1.100 gradini (40 minuti), oppure con la cabinovia fino alla torre 14 o con la seggiovia, che fa coppia con il toboga. Funivia e toboga sono di due società diverse e i biglietti non valgono da una all'altra.",
      quando:
        "All'apertura in un giorno feriale. In autunno il bosco diventa rosso e giallo; in alcuni periodi c'è anche l'apertura serale sulle torri 10-15.",
      tempo: 'Mezza giornata, 3-4 ore sul posto',
      costo:
        'Ingresso 45 yuan, circa 5,5 €; ridotto 25 yuan per i minori stranieri tra 6 e 18 anni; navetta, funivia, seggiovia e toboga a parte (2026)',
      orari:
        'Dal 16 marzo al 15 novembre 7:30-18:00 dal lunedì al venerdì, 7:30-18:30 sabato e domenica; dal 16 novembre al 15 marzo 8:00-17:30. Biglietteria fino a un\'ora prima della chiusura, ingresso fino a mezz\'ora prima',
      url: 'https://www.mutianyugreatwall.com/',
      lat: 40.43802,
      lng: 116.5619,
      consiglio:
        'Biglietti nominativi online fino a 30 giorni prima, uno per passaporto al giorno: all\'ingresso basta il passaporto originale, senza ritirare nulla.',
    },
    {
      nome: 'Badaling',
      testo:
        "La sezione più famosa e la prima aperta ai visitatori, a 60 km a nord-ovest di Pechino nel distretto di Yanqing. È restaurata quasi del tutto, con camminamenti larghi e corrimano, e divisa in un ramo nord e uno sud. Nei weekend e nelle feste cinesi diventa la più affollata del paese.",
      come:
        "In treno ad alta velocità sulla linea Pechino-Zhangjiakou fino alla stazione Badaling Great Wall, oppure in auto. Per salire ci sono una funivia sul ramo nord e una funicolare sul ramo sud.",
      quando: 'Mattina presto di un giorno feriale; d\'inverno, con la neve, è quasi vuota.',
      tempo: '2-3 ore sul posto',
      costo:
        '40 yuan da aprile a ottobre, 35 yuan da novembre a marzo, circa 5 €; gratis per i minori di 18 anni e gli over 60 con documento (2026)',
      orari: 'Dal 1° aprile al 31 ottobre 6:30-16:30; dal 1° novembre al 31 marzo 7:30-16:00',
      url: 'https://www.badaling.cn/',
      lat: 40.35417,
      lng: 116.00694,
      consiglio: 'Biglietto nominativo con il numero di passaporto: conviene prenotarlo online prima di partire.',
    },
    {
      nome: 'Juyongguan',
      testo:
        "Un passo fortificato in fondo a una valle stretta, sulla strada tra Pechino e Badaling, chiuso da un anello di mura lungo 4.142 metri che sale sui due versanti. Ha porte, torri e una porta d'acqua sul torrente, e la salita sui due versanti è ripida.",
      come: 'In auto o taxi da Pechino; spesso si abbina a Badaling o alle Tombe Ming, che sono sulla stessa direttrice.',
      quando: 'Mattina, nei giorni feriali.',
      tempo: '2 ore',
      costo: '40 yuan in alta stagione, 35 in bassa stagione, circa 4-5 €; gratis per i minori di 18 anni e gli over 60 con documento (2026)',
      orari: 'Bassa stagione 8:30-16:30, alta stagione 8:30-17:30',
      url: 'https://english.beijing.gov.cn/specials/ticketing/attractions/202407/t20240717_3751596.html',
      lat: 40.2882,
      lng: 116.0686,
    },
    {
      nome: 'Huanghuacheng',
      testo:
        "L'unico tratto di Muraglia nei dintorni di Pechino che incontra l'acqua: tre spezzoni finiscono sommersi in un lago artificiale, e una parte si vede dalla barca. Il resto sale ripido sulle colline del distretto di Huairou, a circa 70 km dal centro.",
      come: 'In auto con autista o taxi da Pechino; le barche partono dentro l\'area panoramica.',
      quando: 'Primavera e autunno; d\'estate per il giro in barca.',
      tempo: '3 ore',
      costo: 'Ingresso 60 yuan, circa 7 € (2026)',
      orari:
        "D'estate 8:30-17:00 dal lunedì al venerdì, 8:00-18:00 il sabato e nei giorni della Golden Week, 8:00-17:00 la domenica; d'inverno 8:30-16:30",
      url: 'https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260324_4564623.html',
      lat: 40.40868,
      lng: 116.34488,
    },
    {
      nome: 'Jinshanling',
      testo:
        "Dieci chilometri e mezzo di cinta Ming tra il passo di Gubeikou e la torre di Wangjing, con 67 torri di guardia, nella contea di Luanping (Hebei). È restaurato solo in parte: dopo i primi tratti i gradini diventano irregolari, l'erba cresce tra le pietre e le torri sono mezze crollate.",
      come:
        "A circa 130 km da Pechino: auto con autista o tour per la giornata, oppure navette condivise al mattino presto. Si sale a piedi o con la funivia, poi si cammina lungo il crinale da una torre all'altra.",
      quando: 'Primavera e autunno, partendo presto; d\'estate sul crinale non c\'è ombra.',
      tempo: 'Giornata intera: circa 2 ore e mezza di strada per lato e 3-4 ore di cammino',
      costo: '65 yuan da aprile a ottobre, 55 yuan da novembre a marzo, circa 7-8 €; funivia 40 yuan solo andata, circa 5 € (2026)',
      orari: 'Dal 1° aprile al 31 ottobre 6:30-18:30; dal 1° novembre al 31 marzo 8:30-16:30',
      lat: 40.67639,
      lng: 117.24444,
      consiglio: 'Lungo il percorso non ci sono punti di ristoro: acqua, cappello e scarpe con una buona suola.',
    },
    {
      nome: 'Simatai',
      testo:
        "Un tratto ripido e poco ricostruito, sopra il bacino di Yuanyang e il borgo di Gubei Water Town, nel distretto di Miyun. Le torri seguono una cresta sottile e rocciosa; è anche l'unica sezione della zona che si visita dopo il tramonto, con le torri illuminate.",
      come:
        "Si arriva da Gubei Water Town, a circa 2 ore d'auto da Pechino, e si sale a piedi o in cabinovia. La visita serale ha un biglietto a parte.",
      quando: 'Tardo pomeriggio e sera, da maggio a ottobre, per la visita notturna.',
      tempo: '2-3 ore',
      costo: 'Di giorno 40 yuan, circa 5 €; visita serale 200 yuan, circa 24 €, ridotto 80 yuan (2026)',
      orari:
        'Di giorno ingresso 9:00-15:00; di sera, da maggio a ottobre, ingresso 18:00-21:40 e uscita dalla muraglia entro le 22:40',
      url: 'https://www.wtown.com/',
      lat: 40.65873,
      lng: 117.28438,
    },
    {
      nome: 'Gubei Water Town',
      testo:
        "Un borgo ricostruito ai piedi di Simatai, con canali, ponti in pietra, case a corte, botteghe e alberghi. Non è un villaggio antico ma un resort turistico, ed è il modo più comodo per dormire sotto la Muraglia e vederla illuminata.",
      come: 'In auto da Pechino o con i bus turistici; dentro il borgo si cammina o si gira in barca sui canali.',
      quando: 'Dal pomeriggio alla sera, con una notte sul posto.',
      tempo: 'Mezza giornata, meglio con una notte',
      costo: 'Ingresso al borgo 140 yuan, circa 17 € (2026)',
      orari:
        'Area aperta 9:00-22:30 da domenica a giovedì, 9:00-23:00 venerdì e sabato; controllo biglietti 9:00-21:00 da novembre ad aprile, 9:00-22:00 da maggio a ottobre',
      url: 'https://www.wtown.com/',
      lat: 40.64891,
      lng: 117.267,
    },
    {
      nome: 'Tombe Ming',
      testo:
        "La valle ai piedi delle Montagne Tianshou dove sono sepolti tredici imperatori Ming, patrimonio UNESCO come la Muraglia. Si visitano la Via Sacra, fiancheggiata da animali e funzionari di pietra, Changling, la tomba più grande, e Dingling, l'unica con il palazzo sotterraneo aperto.",
      come: 'Metro linea Changping fino alla stazione Ming Tombs, poi bus o taxi; spesso si abbinano in auto a Badaling, Juyongguan o Mutianyu.',
      quando: 'Mattina, prima o dopo la Muraglia.',
      tempo: '2-3 ore',
      costo:
        'Dingling 60 yuan in alta stagione; Changling 45 yuan in alta stagione e 30 in bassa; Via Sacra 20 e 15 yuan; circa 2-7 € a sito; gratis per gli over 60 (2026)',
      orari: 'Bassa stagione 8:30-16:30, alta stagione 8:30-17:30',
      url: 'https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260320_4562417.html',
      lat: 40.29446,
      lng: 116.21696,
    },
  ],
  programmi: [
    {
      titolo: 'Mezza giornata: Mutianyu',
      tappe: [
        'Partenza da Pechino alle 7, ingresso all\'apertura',
        'Cabinovia fino alla torre 14 e cammino verso le torri più alte, dove la gente si dirada',
        'Discesa in toboga e pranzo al villaggio prima di rientrare',
      ],
    },
    {
      titolo: '1 giorno: Jinshanling',
      tappe: [
        'Auto con autista all\'alba, circa 2 ore e mezza di strada',
        'Salita a piedi o in funivia e 3-4 ore lungo il crinale tra le torri',
        'Rientro a Pechino nel tardo pomeriggio',
      ],
    },
    {
      titolo: '2 giorni: Jinshanling e Simatai di notte',
      tappe: [
        'Giorno 1: Jinshanling al mattino, poi trasferimento a Gubei Water Town',
        'Sera: Simatai illuminata, notte nel borgo',
        'Giorno 2: canali di Gubei al mattino presto, rientro a Pechino',
      ],
    },
    {
      titolo: '1 giorno con le Tombe Ming',
      tappe: [
        'Mattina: Via Sacra e Dingling',
        'Pomeriggio: Juyongguan oppure Mutianyu',
        'Rientro a Pechino per cena',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Badaling, ingresso',
      prezzo: '40 yuan da aprile a ottobre, 35 da novembre a marzo (circa 5 €)',
      include: 'Ingresso alla sezione; ridotto 20 e 17,5 yuan; gratis per minori di 18 anni e over 60 con documento',
      dove: 'Canali ufficiali di Badaling o biglietteria, con il passaporto',
    },
    {
      tipo: 'Mutianyu, ingresso',
      prezzo: '45 yuan (circa 5,5 €)',
      include: 'Solo la muraglia; ridotto 25 yuan per i minori stranieri tra 6 e 18 anni',
      dove: 'mutianyugreatwall.com fino a 30 giorni prima, biglietto nominativo',
    },
    {
      tipo: 'Mutianyu, navetta',
      prezzo: 'circa 15 yuan andata e ritorno (circa 2 €)',
      include: 'Bus di circa 3 km tra il centro servizi e i piedi della muraglia; gratis sotto 1,2 metri',
      dove: 'Sito ufficiale o centro servizi',
    },
    {
      tipo: 'Mutianyu, cabinovia',
      prezzo: 'circa 100 yuan solo andata, 140 andata e ritorno (circa 12-17 €)',
      include: 'Salita alla torre 14; gratis sotto 1,2 metri',
      dove: 'Sito ufficiale o biglietteria',
    },
    {
      tipo: 'Mutianyu, seggiovia e toboga',
      prezzo: 'circa 100 yuan solo andata, 140 andata e ritorno (circa 12-17 €)',
      include: 'Seggiovia in salita e toboga in discesa; società diversa dalla cabinovia, biglietti non intercambiabili',
      dove: 'Sito ufficiale o biglietteria del toboga',
    },
    {
      tipo: 'Juyongguan, ingresso',
      prezzo: '40 yuan in alta stagione, 35 in bassa (circa 4-5 €)',
      include: 'Ingresso al passo e alle mura; gratis per minori di 18 anni e over 60',
      dove: 'Biglietteria',
    },
    {
      tipo: 'Huanghuacheng, ingresso',
      prezzo: '60 yuan (circa 7 €)',
      include: 'Ingresso all\'area del lago e della muraglia; ridotto per studenti e minori',
      dove: 'Biglietteria',
    },
    {
      tipo: 'Jinshanling, ingresso',
      prezzo: '65 yuan da aprile a ottobre, 55 da novembre a marzo (circa 7-8 €)',
      include: 'Ingresso al tratto aperto',
      dove: 'Biglietteria',
    },
    {
      tipo: 'Jinshanling, funivia',
      prezzo: '40 yuan solo andata (circa 5 €)',
      dove: 'Biglietteria',
    },
    {
      tipo: 'Gubei Water Town',
      prezzo: '140 yuan (circa 17 €)',
      include: 'Ingresso al borgo',
      dove: 'wtown.com o biglietteria',
    },
    {
      tipo: 'Simatai, di giorno',
      prezzo: '40 yuan (circa 5 €)',
      include: 'Ingresso alla muraglia, controllo 9:00-15:00',
      dove: 'wtown.com o biglietteria del borgo',
    },
    {
      tipo: 'Simatai, di sera',
      prezzo: '200 yuan (circa 24 €); ridotto 80 yuan',
      include: 'Muraglia illuminata, ingresso 18:00-21:40 da maggio a ottobre; ridotto per bambini tra 1,2 e 1,5 metri, studenti e over 60',
      dove: 'wtown.com o biglietteria del borgo, con anticipo',
    },
    {
      tipo: 'Tombe Ming, Dingling',
      prezzo: '60 yuan in alta stagione (circa 7 €)',
      include: 'Tomba con palazzo sotterraneo; metà prezzo per studenti, gratis over 60 e bambini sotto 1,2 metri',
      dove: 'Biglietteria',
    },
  ],
  mesi: [
    { voto: 2, folla: 'bassa', nota: 'Freddo secco e cieli limpidi; con la neve le sezioni sono quasi vuote.' },
    { voto: 2, folla: 'media', nota: 'Il Capodanno cinese porta una settimana di folla; il resto del mese è gelido e tranquillo.' },
    { voto: 3, folla: 'bassa', nota: 'Ancora freddo, con vento e possibili tempeste di sabbia; poca gente.' },
    { voto: 4, folla: 'media', nota: 'Clima mite e alberi in fiore; il vento può essere forte sul crinale.' },
    { voto: 4, folla: 'media', nota: 'Temperature ideali, ma i primi giorni del mese, con la festa del lavoro, sono da evitare.' },
    { voto: 3, folla: 'media', nota: 'Caldo in aumento e giornate lunghe; partire presto.' },
    { voto: 2, folla: 'alta', nota: 'Caldo umido, temporali e vacanze scolastiche cinesi.' },
    { voto: 2, folla: 'alta', nota: 'Afa e pioggia, con il turismo interno al massimo.' },
    { voto: 5, folla: 'media', nota: 'Aria più secca, cieli limpidi e temperature miti: il mese migliore.' },
    { voto: 4, folla: 'alta', nota: 'Golden Week dall\'1 al 7 da evitare; dopo, i boschi in autunno sono al loro meglio.' },
    { voto: 4, folla: 'bassa', nota: 'Fresco e limpido, poca gente; dal 16 a Mutianyu partono gli orari invernali.' },
    { voto: 2, folla: 'bassa', nota: 'Freddo intenso e vento sulle torri; sezioni vuote.' },
  ],
  zone: [
    {
      nome: 'Dongcheng e Wangfujing',
      perChi: 'Chi vuole visitare la Muraglia in giornata e Pechino a piedi',
      testo: 'Il centro della città, comodo per la metro e per le partenze all\'alba verso Mutianyu e Jinshanling.',
      fascia: '60-130 €',
    },
    {
      nome: 'Shichahai e Gulou',
      perChi: 'Chi vuole dormire negli hutong',
      testo: 'Hotel in case a corte tra i vicoli e i laghi; i taxi spesso non arrivano davanti alla porta, e per le partenze presto conviene fissare l\'auto su una strada principale.',
      fascia: '60-150 €',
    },
    {
      nome: 'Villaggio di Mutianyu',
      perChi: 'Chi vuole la Muraglia all\'apertura senza la strada del mattino',
      testo: 'Guesthouse e un hotel ai piedi della sezione: la sera e il primo mattino il posto è tranquillo.',
    },
    {
      nome: 'Gubei Water Town',
      perChi: 'Chi vuole Simatai di sera',
      testo: 'Alberghi e locande dentro il borgo, a pochi passi dalla salita alla muraglia illuminata; il giorno dopo ci si sposta facilmente a Jinshanling.',
    },
  ],
  gite: [
    {
      nome: 'Pechino imperiale',
      distanza: '1-2 ore di strada dalle sezioni più vicine',
      come: 'In auto o con i mezzi pubblici dal centro.',
      testo: 'La Città Proibita, il Tempio del Cielo e il Palazzo d\'Estate: la base naturale per ogni gita alla Muraglia.',
      link: '/destinazioni/cina/pechino',
    },
    {
      nome: 'Tianjin',
      distanza: '30 minuti in treno da Pechino',
      come: 'Treno ad alta velocità dalla stazione Beijing South.',
      testo: 'Città portuale con il lungofiume di palazzi europei delle ex concessioni e la ruota panoramica costruita sopra un ponte.',
    },
    {
      nome: 'Xi\'an e l\'Esercito di terracotta',
      distanza: 'circa 4 ore e mezza di treno ad alta velocità da Pechino',
      come: 'Treno dalla stazione Beijing West, o volo interno.',
      testo: 'L\'antica capitale con le mura cittadine percorribili in bici e i guerrieri di terracotta del primo imperatore, quello che collegò i primi tratti di muraglia.',
      link: '/destinazioni/cina/xian',
    },
  ],
  faq: [
    {
      domanda: 'Quale sezione della Grande Muraglia scegliere da Pechino?',
      risposta:
        'Con mezza giornata o con bambini, Mutianyu: restaurata, verde, con funivia e toboga. Per camminare a lungo su un tratto in parte originale, Jinshanling. Per vederla di sera, Simatai. Badaling è la più comoda ma anche la più affollata.',
    },
    {
      domanda: 'Si può andare alla Muraglia con i mezzi pubblici?',
      risposta:
        'Sì per Badaling, con il treno ad alta velocità, e per le Tombe Ming con la metro. Mutianyu si raggiunge con navette dirette o bus più taxi; per Jinshanling e Simatai serve quasi sempre un\'auto con autista o un tour.',
    },
    {
      domanda: 'Serve prenotare e portare il passaporto?',
      risposta:
        'Sì: i biglietti sono nominativi e a Mutianyu si comprano online fino a 30 giorni prima, uno per passaporto al giorno. All\'ingresso si mostra il passaporto originale.',
    },
    {
      domanda: 'Quanto è faticosa la camminata?',
      risposta:
        'Più di quanto sembri: la Muraglia segue il crinale con gradini alti e irregolari, senza ombra. A Mutianyu la funivia evita la salita; a Jinshanling e Simatai si cammina per ore su tratti ripidi.',
    },
    {
      domanda: 'Si può visitare la Muraglia di notte?',
      risposta:
        'Sì, a Simatai da maggio a ottobre, con ingresso tra le 18:00 e le 21:40 e biglietto da 200 yuan; Mutianyu apre di sera solo in alcuni periodi, sulle torri 10-15.',
    },
    {
      domanda: 'Qual è il periodo migliore?',
      risposta:
        'Settembre e la seconda metà di ottobre, poi aprile e maggio. Da evitare la Golden Week dei primi di ottobre, i primi giorni di maggio, il Capodanno cinese e l\'afa di luglio e agosto.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/grande-muraglia-cinese/jinshanling.jpg',
      alt: 'La Grande Muraglia di Jinshanling che scende verso una torre di guardia e risale sul crinale verde, tra colline velate di foschia',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/mutianyu-toboga.jpg',
      alt: 'La pista metallica del toboga di Mutianyu che scende nel bosco, con un parapetto giallo e la muraglia sulla collina',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/badaling-neve.jpg',
      alt: 'Il tratto sud di Badaling coperto di neve, con la muraglia e le torri che salgono tra gli alberi imbiancati',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/gubei-da-simatai.jpg',
      alt: 'La valle di Gubei vista dall\'alto della muraglia di Simatai, con il borgo, il bacino d\'acqua e le montagne all\'orizzonte',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/huanghuacheng.jpg',
      alt: 'La muraglia di Huanghuacheng che corre sulle colline boscose sotto un cielo azzurro, con creste rocciose sullo sfondo',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/simatai.jpg',
      alt: 'La muraglia di Simatai che sale lungo una cresta spoglia verso le montagne, con una torre di guardia in primo piano',
    },
  ],
}
