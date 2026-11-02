import type { Guida } from './types'

/**
 * Guida PDF «Cina classica». Il racconto viene da src/content/viaggi/16-cina-classica.md
 * (15 giorni con amici, in autonomia, treni ad alta velocità).
 * Ingresso, emergenze, ambasciata e consolati, salute: Viaggiare Sicuri (agg. 08/10/2026).
 * Città Proibita: sito ufficiale del Palace Museum (consultato il 2/11/2026).
 * Biglietti e orari degli altri siti non sono stati verificati: la guida rimanda ai siti ufficiali.
 *
 * Distanze su strada: OSRM su OpenStreetMap. Treni, voli e traghetti: distanza in linea d'aria,
 * con il tempo indicato nel diario. Coordinate: src/content/mappe/coordinate.ts (OpenStreetMap).
 */

export const guidaCinaClassica: Guida = {
  slug: 'cina-classica',
  tripSlug: 'cina-classica',
  paese: 'Cina',
  titolo: 'Cina classica',
  sottotitolo: 'Pechino, Xi\'an, Shanghai, Hong Kong e Macao in quindici giorni di treni veloci, con tutto quello che va sistemato prima di partire.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Questo giro l\'ho fatto con amici, in autonomia: quindici giorni da Pechino a Hong Kong con i treni ad alta velocità prenotati dall\'Italia, e Macao in giornata.',
    'In Cina quasi niente funziona come altrove: carte di credito, mappe, biglietti comprati sul posto. Questa guida serve soprattutto a sistemare prima le quattro cose che decidono il viaggio (pagamenti, connessione, treni, prenotazioni dei musei), poi a tenere in tasca tempi, distanze, coordinate e numeri di emergenza.',
    'Le regole d\'ingresso e i contatti li ho ricontrollati a novembre 2026. Molti siti cinesi non si lasciano consultare dall\'estero: dove non ho potuto verificare un prezzo o un orario non l\'ho scritto, e ti indico dove controllarlo.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con distanze, tempi, coordinate GPS e un QR verso la pagina del sito',
    'La lista delle cose da fare a casa: Alipay o WeChat Pay, eSIM o VPN, account 12306, prenotazioni nominative',
    'Città Proibita con orari e biglietti ufficiali',
    'Esenzione dal visto fino al 31 dicembre 2026, carta d\'ingresso online, frontiere di Hong Kong e Macao',
    'Ambasciata a Pechino, consolati a Shanghai e Hong Kong, numeri di emergenza',
    'Frasario mandarino con i caratteri da mostrare',
  ],
  tappe: [
    { nome: 'Pechino', gps: [39.90571, 116.3913], giorno: 'G1-G4', etichetta: 'sinistra' },
    { nome: 'Jinshanling', gps: [40.68474, 117.23675], giorno: 'G3', etichetta: 'destra' },
    { nome: 'Xi\'an', gps: [34.261, 108.94234], giorno: 'G5-G6', etichetta: 'sinistra' },
    { nome: 'Esercito di Terracotta', gps: [34.40709, 109.22929], giorno: 'G6', etichetta: 'destra' },
    { nome: 'Shanghai', gps: [31.23127, 121.47002], giorno: 'G7-G10', etichetta: 'destra' },
    { nome: 'Suzhou', gps: [31.32635, 120.62471], giorno: 'G9', etichetta: 'sopra' },
    { nome: 'Zhujiajiao', gps: [31.10565, 121.04156], giorno: 'G10', etichetta: 'sotto' },
    { nome: 'Hong Kong', gps: [22.28183, 114.15828], giorno: 'G11-G15', etichetta: 'destra' },
    { nome: 'Macao', gps: [22.17576, 113.55141], giorno: 'G13', etichetta: 'sinistra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Pechino',
      paginaSito: '/destinazioni/cina/pechino',
      racconto:
        'Si arriva a Capital (PEK) o a Daxing (PKX): controlla quale prima di prenotare il transfer, perché Daxing è molto più lontano. Tutti e due sono collegati al centro con metropolitana o treni espresso. Il primo giorno l\'abbiamo tenuto leggero per il fuso: hutong intorno alla Torre del Tamburo e al lago Houhai, prima cena in un ristorante di quartiere per provare il traduttore con la fotocamera sul menu, e una prova di pagamento con Alipay in un negozio.',
      tratte: [],
      senzaStrada: 'Dall\'aeroporto in metropolitana o con il treno espresso dell\'aeroporto.',
      luoghi: [
        {
          nome: 'Hutong di Houhai e Torre del Tamburo',
          indirizzo: 'Distretto di Xicheng-Dongcheng, Pechino',
          nota: 'Intorno a Houhai ormai ci sono soprattutto bar e negozi: la vita vera è nei vicoli due isolati più in là.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'Dongcheng, tra Wangfujing e gli hutong di Houhai. Scegli in base alla fermata della metropolitana: la città è enorme e in superficie il traffico è pesante.',
    },
    {
      numero: 2,
      titolo: 'Città Proibita, Jingshan e Tiananmen',
      paginaSito: '/esperienze/cina/citta-proibita',
      racconto:
        'Siamo entrati nella Città Proibita all\'apertura, con la prenotazione fatta settimane prima e il passaporto in mano. Il percorso va da sud a nord: conviene lasciare presto l\'asse centrale e infilarsi nei cortili a est, piccoli e quasi vuoti. Usciti dalla porta nord, dieci minuti di salita sulla collina di Jingshan e il palazzo si vede tutto dall\'alto. Il pomeriggio in piazza Tiananmen, con i controlli di sicurezza e il passaporto, la sera anatra laccata in un locale specializzato.',
      tratte: [],
      senzaStrada: 'Tutto a piedi tra Città Proibita, Jingshan e Tiananmen.',
      luoghi: [
        {
          nome: 'Città Proibita (Palace Museum)',
          indirizzo: 'Ingresso dalla Porta Meridiana (Wumen), Dongcheng, Pechino',
          orari: '1° aprile-31 ottobre 08:30-17:00, ultimo ingresso 16:00. 1° novembre-31 marzo 08:30-16:30, ultimo ingresso 15:30. Chiusa il lunedì, salvo i festivi',
          biglietto: '60 CNY da aprile a ottobre, 40 CNY da novembre a marzo. Galleria del Tesoro e Galleria degli Orologi 10 CNY ciascuna',
          web: 'intl.dpm.org.cn',
          gps: [39.91728, 116.39077],
          nota: 'Non vende biglietti in giornata: si prenota online con il numero di passaporto. Massimo 40.000 visitatori al giorno.',
          fonti: ['dpm'],
        },
      ],
      mangiare: [],
      dormire: 'Pechino, stessa zona.',
    },
    {
      numero: 3,
      titolo: 'La Grande Muraglia a Jinshanling',
      paginaSito: '/esperienze/cina/muraglia-jinshanling',
      racconto:
        'Giornata intera: partenza presto e circa due ore e mezza di trasferimento. Jinshanling è il tratto solo in parte restaurato più accessibile da Pechino, una decina di chilometri sul crinale con torri mezze crollate. Si cammina tre o quattro ore su gradini irregolari, senza ombra e senza punti di ristoro. Dopo mezz\'ora di cammino ci siamo voltati e non c\'era nessuno.',
      tratte: [{ da: 'Pechino', a: 'Jinshanling', km: 146, minuti: 105, nelMioViaggio: 'circa 2 ore e mezza' }],
      luoghi: [
        {
          nome: 'Grande Muraglia di Jinshanling',
          indirizzo: 'Contea di Luanping, Hebei',
          gps: [40.68474, 117.23675],
          nota: 'Biglietto e orari non verificati: controlla prima di partire. Acqua, cappello e scarpe con una buona suola. Alternative: Mutianyu (mezza giornata, seggiovia e slittino), Gubei e Simatai (visitabile di notte), Badaling solo come ultima risorsa.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Pechino.',
    },
    {
      numero: 4,
      titolo: 'Tempio del Cielo e Palazzo d\'Estate',
      paginaSito: '/destinazioni/cina/pechino',
      racconto:
        'Sveglia presto e Tempio del Cielo all\'apertura, per il parco più che per il tempio: ogni mattina centinaia di pensionati ballano, cantano, giocano a carte e si allenano con la spada. Alle dieci è già finito tutto. Il pomeriggio al Palazzo d\'Estate, sul lago Kunming, più piacevole da camminare della Città Proibita. Ultima serata negli hutong.',
      tratte: [],
      senzaStrada: 'In metropolitana: Tempio del Cielo e Palazzo d\'Estate sono ai lati opposti della città.',
      luoghi: [
        {
          nome: 'Tempio del Cielo (Tiantan)',
          indirizzo: 'Dongcheng, Pechino',
          nota: 'Biglietto e orari non verificati. Il parco apre molto prima delle sale: vai entro le 8.',
          fonti: [],
        },
        {
          nome: 'Palazzo d\'Estate (Yiheyuan)',
          indirizzo: 'Haidian, Pechino',
          nota: 'Biglietto e orari non verificati. Non mettere Città Proibita, Tempio del Cielo e Palazzo d\'Estate nello stesso giorno.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'Pechino.',
    },
    {
      numero: 5,
      titolo: 'Treno per Xi\'an e mura in bicicletta',
      paginaSito: '/esperienze/cina/mura-xian-bicicletta',
      racconto:
        'Alta velocità Pechino-Xi\'an, circa quattro ore e mezza. In stazione servono 30-40 minuti di margine: i controlli sono seri e le stazioni grandi come aeroporti. Da Xi\'an Nord in metropolitana fino al centro, dentro le mura. Nel tardo pomeriggio il giro delle mura Ming in bicicletta, quattordici chilometri, nell\'ultima ora di luce quando si accendono le lanterne. Cena a tappe nel Quartiere Musulmano: spiedini di agnello al cumino, roujiamo, biang biang noodles.',
      tratte: [{ da: 'Pechino', a: 'Xi\'an', km: 911, minuti: 270, mezzo: 'treno ad alta velocità (distanza in linea d\'aria)', nelMioViaggio: 'circa 4 ore e mezza' }],
      luoghi: [
        {
          nome: 'Mura Ming di Xi\'an',
          indirizzo: 'Porta Sud (Yongningmen), Xi\'an',
          gps: [34.26512, 108.92076],
          nota: 'Biglietto, noleggio bici e orari non verificati: controlla sul posto.',
          fonti: ['osm'],
        },
      ],
      mangiare: [
      ],
      dormire: 'Xi\'an, dentro le mura vicino alla Torre della Campana: tutto a piedi.',
    },
    {
      numero: 6,
      titolo: 'L\'Esercito di Terracotta',
      paginaSito: '/esperienze/cina/esercito-terracotta',
      racconto:
        'La mattina al museo del mausoleo di Qin Shi Huang, a 40 minuti dal centro. Prenotazione nominativa con il passaporto, la vendita apre solo 7 giorni prima. Dalla stazione ferroviaria parte il bus pubblico 5 (306), economico e diretto; i «bus turistici» del piazzale portano a mausolei minori, ed è la fregatura più comune della città. C\'è chi visita le fosse al contrario, dalla tre alla uno. Il museo dei carri in bronzo non va saltato. Il pomeriggio Grande Pagoda dell\'Oca Selvatica o Museo di Storia dello Shaanxi, gratuito ma con quote che finiscono in pochi minuti.',
      tratte: [{ da: 'Xi\'an', a: 'Esercito di Terracotta', km: 36, minuti: 30, nelMioViaggio: 'circa 40 minuti in bus' }],
      luoghi: [
        {
          nome: 'Museo del Mausoleo di Qin Shi Huang (Esercito di Terracotta)',
          indirizzo: 'Lintong, Xi\'an',
          web: 'bmy.com.cn',
          gps: [34.40709, 109.22929],
          nota: 'Biglietterie fisiche chiuse: si entra solo con la prenotazione online. Prezzo e orari non verificati, controlla sul sito ufficiale.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Xi\'an.',
    },
    {
      numero: 7,
      titolo: 'Treno per Shanghai e il Bund',
      paginaSito: '/esperienze/cina/bund-pudong',
      racconto:
        'Alta velocità Xi\'an-Shanghai, circa sei ore: è la tratta più lunga, meglio al mattino. Ci siamo sistemati nella ex Concessione Francese e la prima uscita è stata sul Bund all\'ora blu. Il traghetto pubblico che attraversa il fiume costa pochi yuan e fa vedere insieme i palazzi coloniali e i grattacieli.',
      tratte: [{ da: 'Xi\'an', a: 'Shanghai', km: 1218, minuti: 360, mezzo: 'treno ad alta velocità (distanza in linea d\'aria)', nelMioViaggio: 'circa 6 ore' }],
      luoghi: [
        {
          nome: 'Il Bund e il traghetto sul Huangpu',
          indirizzo: 'Zhongshan Dong Yi Lu, Huangpu, Shanghai',
          gps: [31.23534, 121.48763],
          nota: 'Il traghetto pubblico costa pochi yuan: tariffa e orari da controllare all\'imbarco.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Shanghai, ex Concessione Francese.',
    },
    {
      numero: 8,
      titolo: 'Concessione Francese, Yuyuan e Pudong',
      paginaSito: '/destinazioni/cina/shanghai',
      racconto:
        'La mattina a piedi nella ex Concessione Francese, tra platani e case basse. Il pomeriggio il Giardino Yuyuan e il bazar della città vecchia, presto o tardi per la folla, poi un punto panoramico a Pudong: la Shanghai Tower o un rooftop, che costa quanto un cocktail. Sulla Nanjing Road la truffa del tè è più diffusa che altrove.',
      tratte: [],
      senzaStrada: 'A piedi e in metropolitana.',
      luoghi: [
        {
          nome: 'Giardino Yuyuan',
          indirizzo: 'Città vecchia, Huangpu, Shanghai',
          gps: [31.22893, 121.48798],
          nota: 'Biglietto e orari non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Shanghai.',
    },
    {
      numero: 9,
      titolo: 'Suzhou e i giardini classici',
      paginaSito: '/esperienze/cina/giardini-suzhou',
      racconto:
        'Giornata a Suzhou, 25 minuti di alta velocità da Shanghai, in un giorno feriale: nel weekend la folla cancella tutto. Due o tre giardini bastano. Il Giardino dell\'Umile Amministratore è il più famoso e va prenotato online con il passaporto; quello del Maestro delle Reti è il più piccolo, il meno battuto e forse il più bello.',
      tratte: [{ da: 'Shanghai', a: 'Suzhou', km: 81, minuti: 25, mezzo: 'treno ad alta velocità (distanza in linea d\'aria)' }],
      luoghi: [
        {
          nome: 'Giardino dell\'Umile Amministratore (Zhuozheng Yuan)',
          indirizzo: 'Dongbei Jie, Gusu, Suzhou',
          gps: [31.32635, 120.62471],
          nota: 'Prenotazione online con il passaporto. Prezzo e orari non verificati.',
          fonti: ['osm'],
        },
        {
          nome: 'Giardino del Maestro delle Reti (Wangshi Yuan)',
          indirizzo: 'Gusu, Suzhou',
          gps: [31.30042, 120.6298],
          nota: 'Prezzo e orari non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Shanghai.',
    },
    {
      numero: 10,
      titolo: 'Un villaggio d\'acqua',
      paginaSito: '/destinazioni/cina/shanghai',
      racconto:
        'Una giornata in uno dei borghi sui canali intorno a Shanghai. Zhujiajiao è a un\'ora di metropolitana, il più comodo e il più commerciale. Tongli si abbina a Suzhou, Wuzhen è il più curato e fotogenico (il settore ovest di notte), Nanxun il meno battuto e ancora in parte abitato. Chi vuole solo vedere un canale prenda Zhujiajiao; chi ha una notte da spendere dorma a Wuzhen.',
      tratte: [{ da: 'Shanghai', a: 'Zhujiajiao', km: 47, minuti: 34, nelMioViaggio: 'circa un\'ora in metropolitana' }],
      luoghi: [
        {
          nome: 'Zhujiajiao',
          indirizzo: 'Distretto di Qingpu, Shanghai',
          gps: [31.10565, 121.04156],
          nota: 'Raggiungibile con la metropolitana di Shanghai.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Shanghai.',
    },
    {
      numero: 11,
      titolo: 'Verso Hong Kong',
      paginaSito: '/destinazioni/cina/hong-kong',
      racconto:
        'Alta velocità Shanghai-Hong Kong West Kowloon, circa otto ore, oppure volo di due ore e mezza: su questa distanza il volo fa risparmiare mezza giornata. In tutti e due i casi c\'è una frontiera vera, con controllo passaporti all\'uscita dalla Cina continentale e all\'ingresso a Hong Kong. La prima sera sul lungomare di Tsim Sha Tsui e il primo cha chaan teng, le tavole calde anglo-cantonesi.',
      tratte: [{ da: 'Shanghai', a: 'Hong Kong', km: 1231, minuti: 150, mezzo: 'volo, o treno di circa 8 ore (distanza in linea d\'aria)' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Hong Kong: Causeway Bay o Wan Chai sull\'isola, Tsim Sha Tsui a Kowloon. Camere piccole e care.',
      nota: 'A Hong Kong Alipay non è scontato: si paga con la Octopus Card, carte internazionali o contanti in dollari di Hong Kong.',
    },
    {
      numero: 12,
      titolo: 'Victoria Peak, Star Ferry e mercati',
      paginaSito: '/esperienze/cina/star-ferry-victoria-peak',
      racconto:
        'Siamo saliti al Peak con il cielo pulito. Il tram storico a fine pomeriggio ha più di un\'ora di coda; il bus 15 parte subito e costa una frazione. In cima conviene saltare la terrazza a pagamento e fare Lugard Road, il sentiero in piano intorno alla cima: stessa vista, gratis. Pomeriggio tra Sheung Wan e le scale mobili più lunghe del mondo, sera nei mercati di Mong Kok fino a Temple Street. E una traversata sullo Star Ferry: dieci minuti, meno di mezzo euro.',
      tratte: [],
      senzaStrada: 'MTR, bus, tram e Star Ferry: tutto con la Octopus Card.',
      luoghi: [
        {
          nome: 'Star Ferry, molo di Tsim Sha Tsui',
          indirizzo: 'Star Ferry Pier, Tsim Sha Tsui, Kowloon',
          web: 'starferry.com.hk',
          gps: [22.29354, 114.16799],
          nota: 'Tariffe e orari aggiornati sul sito ufficiale.',
          fonti: ['osm'],
        },
        {
          nome: 'Victoria Peak e Lugard Road',
          indirizzo: 'The Peak, Hong Kong Island',
          gps: [22.27604, 114.14546],
          nota: 'Peak Tram: tariffe e orari da controllare prima. Il bus 15 è l\'alternativa senza coda.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Hong Kong.',
    },
    {
      numero: 13,
      titolo: 'Macao in giornata',
      paginaSito: '/destinazioni/cina/macao',
      racconto:
        'Traghetto veloce da Hong Kong, circa un\'ora, con controllo passaporti all\'andata e al ritorno. La mattina nel centro storico, a piedi: rovine di San Paolo, Largo do Senado, Fortaleza do Monte, tempio di A-Ma. Pranzo macanese a Taipa Village, in Rua do Cunha. Il pomeriggio sul Cotai con le navette gratuite dei casinò. La sera di nuovo a Hong Kong.',
      tratte: [
        { da: 'Hong Kong (molo Hong Kong-Macao)', a: 'Macao', km: 64, minuti: 60, mezzo: 'traghetto veloce (distanza in linea d\'aria)', nelMioViaggio: 'circa un\'ora' },
      ],
      luoghi: [
        {
          nome: 'Terminal dei traghetti Hong Kong-Macao',
          indirizzo: 'Shun Tak Centre, Sheung Wan, Hong Kong',
          web: 'turbojet.com.hk',
          gps: [22.28867, 114.15244],
          nota: 'Orari e tariffe sul sito dell\'operatore.',
          fonti: ['osm'],
        },
        {
          nome: 'Rovine di San Paolo',
          indirizzo: 'Centro storico di Macao',
          gps: [22.19746, 113.54086],
          nota: 'A Macao si usa la pataca, ma i dollari di Hong Kong sono accettati alla pari.',
          fonti: ['osm'],
        },
      ],
      mangiare: [
      ],
      dormire: 'Hong Kong.',
    },
    {
      numero: 14,
      titolo: 'Lantau o Dragon\'s Back',
      paginaSito: '/destinazioni/cina/hong-kong',
      racconto:
        'La mattina sull\'isola di Lantau: funivia di Ngong Ping, Grande Buddha e il villaggio su palafitte di Tai O. In alternativa il Dragon\'s Back, sentiero panoramico sulla costa sud a mezz\'ora dal centro tra metropolitana e bus. Ultima cena con l\'oca arrosto cantonese, tra le cose migliori del viaggio.',
      tratte: [],
      senzaStrada: 'MTR fino a Tung Chung, poi la funivia Ngong Ping 360.',
      luoghi: [
        {
          nome: 'Ngong Ping 360 e Grande Buddha',
          indirizzo: 'Tung Chung, Lantau',
          web: 'np360.com.hk',
          nota: 'Tariffe e orari della funivia sul sito ufficiale.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'Hong Kong.',
    },
    {
      numero: 15,
      titolo: 'Partenza',
      paginaSito: '/viaggi/cina-classica',
      racconto: 'Airport Express da Hong Kong Central all\'aeroporto in 24 minuti. Con il volo nel pomeriggio resta il tempo per un ultimo dim sum e un\'ultima traversata sullo Star Ferry.',
      tratte: [{ da: 'Hong Kong Central', a: 'Aeroporto di Hong Kong', km: 33, minuti: 24, mezzo: 'Airport Express (distanza in linea d\'aria)' }],
      luoghi: [
        {
          nome: 'Aeroporto internazionale di Hong Kong (HKG)',
          indirizzo: 'Chek Lap Kok, Lantau',
          web: 'mtr.com.hk',
          gps: [22.3126, 113.9173],
          nota: 'Tariffe dell\'Airport Express sul sito di MTR.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Pechino', 'Xi\'an', 'Shanghai', 'Hong Kong'],
    ritorno: ['Hong Kong', 'Macao'],
    legenda: 'Linea piena: i trasferimenti principali in treno ad alta velocità (e il volo o treno per Hong Kong). Tratteggio: Macao in giornata, andata e ritorno in traghetto.',
    notaTempi: 'Treni, voli e traghetti sono segnati con la distanza in linea d\'aria e il tempo annotato nel viaggio. Le tratte in auto e bus sono stimate senza traffico (OSRM su OpenStreetMap).',
    notaTempiFonti: ['osrm'],
    scalaKm: 200,
  },
  pass: {
    nome: 'Nessun pass',
    titolo: 'Le quattro cose da fare a casa',
    occhiello: 'La prima decisione',
    regola:
      'In Cina non c\'è un biglietto cumulativo. Quello che decide il viaggio si fa prima di partire. Pagamenti: Alipay o WeChat Pay installati, verificati e collegati a una Visa o Mastercard, con il passaporto a portata di mano. Connessione: il blocco di Google, WhatsApp, Instagram e YouTube si aggira con una eSIM estera in roaming, oppure con SIM locale e VPN installato e provato a casa. Treni: la vendita apre 15 giorni prima della partenza, all\'orario indicato dall\'app 12306 per ogni stazione. Musei: Città Proibita ed Esercito di Terracotta solo con prenotazione nominativa.',
    scenari: [
      { situazione: 'Vuoi i biglietti dei treni senza pensarci', scelta: 'Trip.com: prenoti fino a due mesi prima e converte la richiesta all\'apertura, con una commissione' },
      { situazione: 'Vuoi spendere il meno possibile sui treni', scelta: 'App ufficiale 12306 in inglese: registrazione con passaporto e carta estera, da verificare con anticipo' },
      { situazione: 'Usi un VPN', scelta: 'Spegnilo prima di pagare: l\'antifrode blocca la transazione e a volte l\'account' },
      { situazione: 'Ti ferma uno «studente» o qualcuno per un tè', scelta: 'Non seguire nessuno in un locale: è la truffa più diffusa, lo segnala anche Viaggiare Sicuri' },
    ],
    esito: 'Calendario: evita la Settimana d\'oro (1-7 ottobre), il Capodanno cinese e i primi giorni di maggio. I periodi migliori sono aprile-maggio e settembre-ottobre.',
    fonti: ['vs'],
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno 6 mesi di validità residua.', fonti: ['vs'] },
        { voce: 'Visto', valore: 'Fino al 31 dicembre 2026 gli italiani con passaporto ordinario entrano senza visto per turismo, fino a 30 giorni. Non si rilasciano visti alla frontiera.', fonti: ['vs'] },
        { voce: 'Carta d\'ingresso', valore: 'Dal 20 novembre 2025 si compila online prima dell\'arrivo, sul sito dell\'Amministrazione nazionale per l\'immigrazione (s.nia.gov.cn) o con l\'app «Immigration Bureau 12367».', fonti: ['vs'] },
        { voce: 'Registrazione', valore: 'Entro 24 ore dall\'arrivo: in hotel la fa la reception; chi dorme da privati va al commissariato di zona.', fonti: ['vs'] },
        { voce: 'Hong Kong e Macao', valore: 'Frontiere vere, con controllo passaporti in entrata e in uscita. Ogni rientro nella Cina continentale apre un nuovo periodo di 30 giorni.' },
        { voce: 'Dogana', valore: 'Dal 15 settembre 2026 possibili controlli più severi, anche sui dispositivi elettronici. Oltre 5.000 USD conviene dichiararli.', fonti: ['vs'] },
        { voce: 'Droni', valore: 'Fortemente sconsigliati. Dal 1° maggio 2026 non si può entrare né transitare da Pechino con un drone.', fonti: ['vs'] },
        { voce: 'Assicurazione', valore: 'Raccomandata, con spese mediche e rimpatrio: per gli stranieri la degenza a Pechino può arrivare a 500 € al giorno.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Soldi',
      righe: [
        { voce: 'Valuta', valore: 'Yuan renminbi (CNY). A Hong Kong il dollaro di Hong Kong, a Macao la pataca.', fonti: ['vs'] },
        { voce: 'Pagamenti', valore: 'Quasi tutto con Alipay o WeChat Pay. Le carte fisiche funzionano soprattutto negli hotel di fascia alta. I contanti non si possono rifiutare per legge, ma spesso manca il resto: tienili di riserva.' },
        { voce: 'Truffe', valore: 'Viaggiare Sicuri segnala inviti per tè, KTV o mostre che finiscono con conti enormi pagati sotto minaccia.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Telefono, corrente, ora',
      righe: [
        { voce: 'Internet', valore: 'Google, WhatsApp, Instagram, Facebook e YouTube sono bloccati. eSIM estera in roaming, oppure SIM locale con VPN installato prima. Scarica mappe offline, traduttore con fotocamera e Amap.' },
        { voce: 'Corrente', valore: '230 V, 50 Hz. Prese standard A e I, spesso in un\'unica presa combinata: porta un adattatore universale.', fonti: ['prese-cn'] },
        { voce: 'Fuso orario', valore: 'Sette ore avanti rispetto all\'Italia, sei con l\'ora legale. Hong Kong e Macao hanno la stessa ora.', fonti: ['vs'] },
        { voce: 'Patente', valore: 'Né la patente italiana né quella internazionale sono riconosciute: serve una patente temporanea locale.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Salute e aria',
      righe: [
        { voce: 'Vaccini', valore: 'Febbre gialla solo se arrivi da un paese a rischio, anche con un semplice scalo. Per gli altri senti il medico.', fonti: ['vs'] },
        { voce: 'Ospedali', valore: 'Personale competente solo nelle metropoli, con poco inglese. Fuori dalle città le strutture sono carenti.', fonti: ['vs'] },
        { voce: 'Inquinamento', valore: 'Pechino e Shanghai hanno giorni di polveri sottili molto alte: controlla l\'indice su aqicn.org e, nei picchi, mascherina con filtro.', fonti: ['vs'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze e polizia', valore: '110', fonti: ['vs'] },
      { voce: 'Ambulanze (indicato da Viaggiare Sicuri)', valore: '999', fonti: ['vs'] },
      { voce: 'Emergenze a Hong Kong e Macao', valore: 'Controlla il numero locale prima di partire sui siti dei consolati' },
    ],
    ambasciata: [
      {
        nome: 'Ambasciata d\'Italia a Pechino',
        cosa: 'Competente anche per lo Shaanxi (Xi\'an)',
        indirizzo: 'San Li Tun, 2 Dong Er Jie, 100600 Pechino',
        telefono: '+86 10 8532 7600 · ambasciata.pechino@esteri.it',
        web: 'ambpechino.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      { nome: 'Ambasciata, cellulare di emergenza', cosa: 'Solo emergenze', telefono: '+86 139 0103 2957', stato: 'ufficiale', fonti: ['vs'] },
      {
        nome: 'Consolato Generale d\'Italia a Shanghai',
        cosa: 'Shanghai, Jiangsu (Suzhou), Zhejiang, Anhui. Emergenze: +86 139 0199 3054',
        indirizzo: 'The Center, 19° piano, 989 Chang Le Road, 200031 Shanghai',
        telefono: '+86 21 6596 5900 · info.shanghai@esteri.it',
        web: 'consshanghai.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      {
        nome: 'Consolato Generale d\'Italia a Hong Kong',
        cosa: 'Hong Kong e Macao. Emergenze fuori orario: +852 9131 5535',
        indirizzo: 'Suite 3201, 32/F Central Plaza, 18 Harbour Road, Wan Chai, Hong Kong',
        telefono: '+852 2522 0033 · segreteria.hongkong@esteri.it',
        web: 'conshongkong.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
    ],
    ospedali: [],
  },
  contatti: [
    {
      gruppo: 'Siti ufficiali da usare prima di partire',
      voci: [
        { nome: 'Carta d\'ingresso per stranieri', cosa: 'Compilazione online prima dell\'arrivo', web: 's.nia.gov.cn/ArrivalCardFillingPC', stato: 'ufficiale', fonti: ['vs'] },
        { nome: 'China Railway 12306', cosa: 'Biglietti dei treni; la vendita apre 15 giorni prima', web: '12306.cn', stato: 'ufficiale', fonti: [] },
        { nome: 'Palace Museum', cosa: 'Prenotazione della Città Proibita con il passaporto', web: 'intl.dpm.org.cn', stato: 'ufficiale', fonti: ['dpm'] },
        { nome: 'Museo del Mausoleo di Qin Shi Huang', cosa: 'Prenotazione dell\'Esercito di Terracotta, 7 giorni prima', web: 'bmy.com.cn', stato: 'ufficiale', fonti: [] },
        { nome: 'MTR Hong Kong', cosa: 'Metropolitana e Airport Express', web: 'mtr.com.hk', stato: 'ufficiale', fonti: [] },
        { nome: 'TurboJET', cosa: 'Traghetti Hong Kong-Macao', web: 'turbojet.com.hk', stato: 'ufficiale', fonti: [] },
        { nome: 'Star Ferry', cosa: 'Traversata del porto di Hong Kong', web: 'starferry.com.hk', stato: 'ufficiale', fonti: [] },
        { nome: 'Ambasciata cinese in Italia', cosa: 'Regole d\'ingresso aggiornate', web: 'it.china-embassy.gov.cn', stato: 'ufficiale', fonti: ['vs'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Pechino e Hong Kong-Italia' },
      { voce: 'Treno Pechino-Xi\'an', costo: '40-90 €', nota: 'ordine di grandezza per tratta, dal diario' },
      { voce: 'Treno Xi\'an-Shanghai', costo: '40-90 €' },
      { voce: 'Shanghai-Hong Kong', nota: 'volo o treno' },
      { voce: 'Hotel fino a Shanghai', costo: '40-70 €', nota: 'a notte, buon livello' },
      { voce: 'Hotel a Hong Kong', nota: 'la voce più cara del viaggio' },
      { voce: 'Pasti in Cina continentale', costo: '4-10 €' },
      { voce: 'Città Proibita', costo: '60 CNY', nota: '40 CNY da novembre a marzo' },
      { voce: 'Jinshanling e trasferimento' },
      { voce: 'Esercito di Terracotta' },
      { voce: 'Giardini di Suzhou' },
      { voce: 'Traghetti per Macao' },
      { voce: 'eSIM o VPN' },
    ],
    nota: 'Le cifre in euro sono gli ordini di grandezza annotati nel diario, non prezzi pagati. Le righe vuote le riempi tu dopo aver controllato i siti ufficiali.',
  },
  valigia: [
    { gruppo: 'Documenti e telefono', voci: ['Passaporto con 6 mesi di validità', 'Carta d\'ingresso compilata', 'Alipay o WeChat Pay già verificati', 'eSIM estera o VPN provato', 'Account 12306 attivo', 'Prenotazioni di Città Proibita e Terracotta', 'Indirizzo dell\'hotel in caratteri cinesi', 'Polizza sanitaria con rimpatrio'] },
    { gruppo: 'Vestiti', voci: ['Scarpe con una buona suola per la Muraglia', 'Cappello', 'Strati per le stazioni con l\'aria condizionata', 'K-way'] },
    { gruppo: 'Zaino del giorno', voci: ['Acqua per Jinshanling: non ci sono punti di ristoro', 'Power bank', 'Mappe offline e traduttore scaricati', 'Un po\' di contanti in yuan', 'Mascherina con filtro per i giorni di smog'] },
    { gruppo: 'Tecnica', voci: ['Adattatore universale', 'Caricabatterie', 'Niente drone'] },
  ],
  lingua: {
    nome: 'Cinese mandarino, in pinyin',
    pronuncia: 'Trascrizione pinyin senza toni. «x» si legge come una «sc» dolce, «q» come «ci», «zh» come «gi» duro, «c» come «z» di pizza, «j» come «gi». Fuori dagli hotel l\'inglese quasi non c\'è: mostra i caratteri. A Hong Kong e Macao si parla cantonese, ma l\'inglese basta.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Ciao, buongiorno', loc: 'ni hao', scritto: '你好' },
        { it: 'Grazie', loc: 'xiexie', scritto: '谢谢' },
        { it: 'Prego, di niente', loc: 'bu keqi', scritto: '不客气' },
        { it: 'Scusi', loc: 'duibuqi', scritto: '对不起' },
        { it: 'Arrivederci', loc: 'zaijian', scritto: '再见' },
        { it: 'Sì, giusto', loc: 'dui', scritto: '对' },
        { it: 'No, non voglio', loc: 'bu yao', scritto: '不要' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Non capisco', loc: 'wo ting bu dong', scritto: '我听不懂' },
        { it: 'Dov\'è il bagno?', loc: 'cesuo zai nar?', scritto: '厕所在哪儿？' },
        { it: 'Quanto costa?', loc: 'duoshao qian?', scritto: '多少钱？' },
        { it: 'Troppo caro', loc: 'tai gui le', scritto: '太贵了' },
        { it: 'Stazione ferroviaria', loc: 'huochezhan', scritto: '火车站' },
        { it: 'Metropolitana', loc: 'ditie', scritto: '地铁' },
        { it: 'Aeroporto', loc: 'jichang', scritto: '机场' },
        { it: 'Mi porti qui, per favore', loc: 'qing dai wo qu zheli', scritto: '请带我去这里' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Acqua', loc: 'shui', scritto: '水' },
        { it: 'Non piccante', loc: 'bu yao la', scritto: '不要辣' },
        { it: 'Il conto, per favore', loc: 'maidan', scritto: '买单' },
        { it: 'Buonissimo', loc: 'hen haochi', scritto: '很好吃' },
        { it: 'Birra', loc: 'pijiu', scritto: '啤酒' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'jiuming!', scritto: '救命！' },
        { it: 'Polizia', loc: 'jingcha', scritto: '警察' },
        { it: 'Ospedale', loc: 'yiyuan', scritto: '医院' },
        { it: 'Mi serve un medico', loc: 'wo xuyao yisheng', scritto: '我需要医生' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'yi', scritto: '一' },
    { it: '2', loc: 'er', scritto: '二' },
    { it: '3', loc: 'san', scritto: '三' },
    { it: '4', loc: 'si', scritto: '四' },
    { it: '5', loc: 'wu', scritto: '五' },
    { it: '6', loc: 'liu', scritto: '六' },
    { it: '7', loc: 'qi', scritto: '七' },
    { it: '8', loc: 'ba', scritto: '八' },
    { it: '9', loc: 'jiu', scritto: '九' },
    { it: '10', loc: 'shi', scritto: '十' },
    { it: '20', loc: 'ershi', scritto: '二十' },
    { it: '100', loc: 'yibai', scritto: '一百' },
    { it: '1000', loc: 'yiqian', scritto: '一千' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/cina-classica' },
    { titolo: 'Cina, scheda paese', path: '/destinazioni/cina' },
    { titolo: 'Pechino', path: '/destinazioni/cina/pechino' },
    { titolo: 'Muraglia a Jinshanling', path: '/esperienze/cina/muraglia-jinshanling' },
    { titolo: 'Esercito di Terracotta', path: '/esperienze/cina/esercito-terracotta' },
    { titolo: 'Shanghai', path: '/destinazioni/cina/shanghai' },
    { titolo: 'Hong Kong', path: '/destinazioni/cina/hong-kong' },
    { titolo: 'Macao', path: '/destinazioni/cina/macao' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Biglietti e orari di Jinshanling, Tempio del Cielo, Palazzo d\'Estate, mura di Xi\'an, Esercito di Terracotta, Yuyuan, giardini di Suzhou: i siti ufficiali non si lasciano consultare dall\'estero o non pubblicano le tariffe in modo leggibile',
    'Tariffe e orari di Peak Tram, Star Ferry, Airport Express, TurboJET e Ngong Ping 360: controlla sui rispettivi siti ufficiali',
    'Numeri di emergenza di Hong Kong e Macao e numero nazionale dell\'ambulanza in Cina diverso dal 999 riportato da Viaggiare Sicuri',
    'Ospedali per stranieri a Pechino, Xi\'an, Shanghai e Hong Kong',
    'Nomi di hotel e ristoranti: nel diario ci sono solo le zone',
    'Cambio euro-yuan aggiornato',
  ],
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri (Farnesina), scheda Cina (agg. 08/10/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/CHN.json' },
    { id: 'dpm', titolo: 'Palace Museum, informazioni per la visita', url: 'https://intl.dpm.org.cn/visit.html?l=en' },
    { id: 'prese-cn', titolo: 'WorldStandards, prese elettriche in Cina', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/china/' },
    { id: 'osm', titolo: 'OpenStreetMap (coordinate)', url: 'https://www.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
