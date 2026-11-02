import type { Guida } from './types'
import { guidaCinaClassica as cn } from './cina-classica'

/**
 * Guida PDF «Cina dei paesaggi». Il racconto viene da src/content/viaggi/17-cina-paesaggi.md
 * (18 giorni con amici, in autonomia, voli interni e alta velocità).
 * Le parti di Paese (ingresso, soldi, salute, ambasciata, frasario) sono le stesse della guida
 * Cina classica, da Viaggiare Sicuri (agg. 08/10/2026); qui si aggiungono i consolati
 * competenti per Chongqing, Sichuan, Yunnan, Hunan e Guangxi.
 * Biglietti e orari dei parchi non verificati: la guida rimanda ai siti ufficiali.
 *
 * Distanze su strada: OSRM su OpenStreetMap. Treni e voli: distanza in linea d'aria,
 * con il tempo del diario. Coordinate: src/content/mappe/coordinate.ts (OpenStreetMap).
 */

export const guidaCinaPaesaggi: Guida = {
  ...cn,
  slug: 'cina-paesaggi',
  tripSlug: 'cina-paesaggi',
  titolo: 'Cina dei paesaggi',
  sottotitolo: 'Chongqing, Zhangjiajie, Chengdu, lo Yunnan e il fiume Li: diciotto giorni di montagne, gole e torri carsiche, con quello che serve per rifarli.',
  intro: [
    'Questo giro l\'ho fatto con amici, in autonomia, con voli interni e treni veloci prenotati in anticipo: diciotto giorni da Chongqing a Guilin passando per i pilastri di Zhangjiajie, i panda di Chengdu, Lijiang, la Gola del Salto della Tigre e Yangshuo.',
    'È un viaggio di quote e di prenotazioni: ascensori, funivie, spettacoli e basi dei panda hanno fasce orarie e quote giornaliere. Questa guida mette in fila tempi, distanze, coordinate, i contatti ufficiali e le cose da sistemare prima di partire.',
    'Le regole d\'ingresso e i contatti li ho ricontrollati a novembre 2026. I siti dei parchi cinesi non si lasciano consultare bene dall\'estero: dove non ho potuto verificare un prezzo o un orario non l\'ho scritto.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con distanze, tempi, coordinate GPS e un QR verso la pagina del sito',
    'Le prenotazioni a quota da fare prima: panda, Tianmen Shan, Yulong Xueshan, Impression Lijiang',
    'Quota e freddo: cosa cambia sopra i 3.000 metri',
    'Esenzione dal visto fino al 31 dicembre 2026, carta d\'ingresso online, pagamenti e connessione',
    'Ambasciata a Pechino e consolati di Chongqing e Canton, numeri di emergenza',
    'Frasario mandarino con i caratteri da mostrare',
  ],
  tappe: [
    { nome: 'Chongqing', gps: [29.56528, 106.57713], giorno: 'G1-G2', etichetta: 'sinistra' },
    { nome: 'Furong Zhen', gps: [28.77307, 109.98191], giorno: 'G3', etichetta: 'sinistra' },
    { nome: 'Wulingyuan · Zhangjiajie', gps: [29.36075, 110.42457], giorno: 'G4-G6', etichetta: 'destra' },
    { nome: 'Tianmen Shan', gps: [29.04988, 110.47889], giorno: 'G7', etichetta: 'destra' },
    { nome: 'Chengdu', gps: [30.65987, 104.06332], giorno: 'G8-G9', etichetta: 'sopra' },
    { nome: 'Lijiang', gps: [26.85959, 100.22498], giorno: 'G10-G11 · G14', etichetta: 'sinistra' },
    { nome: 'Gola del Salto della Tigre', gps: [27.25549, 100.16428], giorno: 'G12-G13', etichetta: 'sinistra' },
    { nome: 'Shangri-La', gps: [27.8717, 99.83655], giorno: 'G13-G14', etichetta: 'sopra' },
    { nome: 'Yangshuo', gps: [24.86303, 110.48718], giorno: 'G15-G18', etichetta: 'sotto' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Chongqing',
      paginaSito: '/destinazioni/cina/chongqing',
      racconto:
        'Siamo atterrati a Chongqing Jiangbei (CKG), collegato al centro con la metropolitana, e ci siamo sistemati sulla penisola di Yuzhong. La prima sera serve a capire che la città è costruita su più livelli: un isolato sulla mappa può essere cento metri di dislivello. A cena gli xiaomian, i noodles piccanti mangiati in strada.',
      tratte: [],
      senzaStrada: 'Dall\'aeroporto in metropolitana.',
      luoghi: [],
      mangiare: [],
      dormire: 'Penisola di Yuzhong, Chongqing.',
    },
    {
      numero: 2,
      titolo: 'Chongqing verticale',
      paginaSito: '/esperienze/cina/hongya-dong-notte',
      racconto:
        'A Liziba la monorotaia passa dentro un palazzo abitato; poi il quartiere antico di Ciqikou. Nel tardo pomeriggio la funivia sullo Yangtze, cinque minuti sopra il fiume. Dopo il buio Hongya Dong, ma dalla riva opposta del Jialing: dentro è un centro commerciale, da fuori sono undici piani illuminati che si specchiano nell\'acqua. A cena l\'hot pot di Chongqing, quello originale.',
      tratte: [],
      senzaStrada: 'Metropolitana, monorotaia e funivia.',
      luoghi: [
        {
          nome: 'Hongya Dong',
          indirizzo: 'Riva del Jialing, Yuzhong, Chongqing',
          gps: [29.56528, 106.57713],
          nota: 'Si guarda dalla riva opposta, dopo il tramonto.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Chongqing.',
    },
    {
      numero: 3,
      titolo: 'Furong Zhen, il borgo sulla cascata',
      paginaSito: '/destinazioni/cina/furong-zhen',
      racconto:
        'Alta velocità Chongqing-Furong Zhen, tre ore e mezza-quattro e mezza con il cambio a Zhangjiajie Ovest. Furong Zhen è un villaggio Tujia di case di legno su palafitte, con una cascata che gli passa attraverso. Siamo arrivati nel pomeriggio; verso le sei i pullman ripartono, si accendono le luci e il paese torna tranquillo. Da non perdere il camminamento dietro il salto d\'acqua. Abbiamo dormito nel borgo, in una guesthouse sul fiume.',
      tratte: [{ da: 'Chongqing', a: 'Furong Zhen', km: 342, minuti: 240, mezzo: 'treno ad alta velocità con cambio (distanza in linea d\'aria)', nelMioViaggio: 'tra 3 ore e mezza e 4 ore e mezza' }],
      luoghi: [
        {
          nome: 'Furong Zhen',
          indirizzo: 'Contea di Yongshun, Hunan',
          gps: [28.77307, 109.98191],
          nota: 'Biglietto d\'ingresso al borgo non verificato.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Guesthouse nel borgo, affacciata sul fiume (nome non annotato).',
    },
    {
      numero: 4,
      titolo: 'Verso Zhangjiajie',
      paginaSito: '/destinazioni/cina/zhangjiajie',
      racconto:
        'Trasferimento a Wulingyuan, il paese appena fuori dall\'ingresso principale del parco, circa due ore. Il pomeriggio è servito a organizzarsi: il parco è enorme, il biglietto vale più giorni e la mappa va studiata la sera prima. Dormire a Wulingyuan e non in città fa risparmiare due ore al giorno.',
      tratte: [{ da: 'Furong Zhen', a: 'Wulingyuan', km: 130, minuti: 114, nelMioViaggio: 'circa 2 ore' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Wulingyuan.',
    },
    {
      numero: 5,
      titolo: 'Yuanjiajie e l\'ascensore di Bailong',
      paginaSito: '/esperienze/cina/avatar-yuanjiajie',
      racconto:
        'All\'ingresso all\'apertura, non un minuto dopo: è la differenza tra cinque minuti e un\'ora e mezza di coda all\'ascensore di Bailong, 326 metri lungo la parete in una gabbia di vetro. In cima i belvedere di Yuanjiajie sul Pilastro dell\'Alleluia e sul Primo Ponte sotto il Cielo. Cammina fino alle piattaforme più lontane: a cinquecento metri da quella famosa ci sono dieci persone. La nebbia aiuta: fa sembrare i pilastri sospesi.',
      tratte: [],
      senzaStrada: 'Navette interne del parco.',
      luoghi: [
        {
          nome: 'Parco forestale nazionale di Zhangjiajie, Yuanjiajie',
          indirizzo: 'Wulingyuan, Zhangjiajie, Hunan',
          gps: [29.36075, 110.42457],
          nota: 'Biglietto del parco, ascensore e orari non verificati: controllali prima di partire.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Wulingyuan.',
    },
    {
      numero: 6,
      titolo: 'Tianzi Shan e il fondovalle',
      paginaSito: '/destinazioni/cina/zhangjiajie',
      racconto:
        'Seconda giornata nel parco. Tianzi Shan al mattino, per il panorama sull\'intero massiccio, e nel pomeriggio la discesa lungo il torrente della Frusta d\'Oro (Jinbian Xi). Guardare i pilastri dal basso impressiona più che dall\'alto, e in fondovalle i pullman non arrivano.',
      tratte: [],
      senzaStrada: 'A piedi e con le navette del parco.',
      luoghi: [],
      mangiare: [],
      dormire: 'Wulingyuan.',
    },
    {
      numero: 7,
      titolo: 'Tianmen Shan e volo per Chengdu',
      paginaSito: '/esperienze/cina/tianmen-shan',
      racconto:
        'Giornata a Tianmen Shan con la fascia oraria della funivia prenotata: quasi sette chilometri e mezzo, mezz\'ora di salita dal centro città sopra la strada dei 99 tornanti. In cima la Porta del Cielo, grotta passante alta 131 metri, con 999 gradini o le scale mobili dentro la montagna, e le passerelle con il fondo di vetro. Volo serale per Chengdu.',
      tratte: [
        { da: 'Wulingyuan', a: 'Tianmen Shan (Zhangjiajie)', km: 110, minuti: 120 },
        { da: 'Zhangjiajie', a: 'Chengdu', km: 644, minuti: 110, mezzo: 'volo (distanza in linea d\'aria)' },
      ],
      luoghi: [
        {
          nome: 'Tianmen Shan, funivia',
          indirizzo: 'Stazione a valle nel centro di Zhangjiajie',
          gps: [29.04988, 110.47889],
          nota: 'Si prenota una fascia oraria. Prezzo e orari non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Chengdu.',
    },
    {
      numero: 8,
      titolo: 'Chengdu: panda, tè e hot pot',
      paginaSito: '/esperienze/cina/panda-chengdu',
      racconto:
        'Alla base dei panda giganti alle 7:30, con la prenotazione nominativa fatta giorni prima: a quell\'ora mangiano e si arrampicano, alle undici dormono. Non saltare i panda rossi. Il pomeriggio al Monastero di Wenshu e alla casa da tè del Parco del Popolo, la sera hot pot sichuanese con il brodo diviso.',
      tratte: [],
      senzaStrada: 'Metropolitana o taxi fino alla base dei panda.',
      luoghi: [
        {
          nome: 'Base di ricerca sull\'allevamento del panda gigante',
          indirizzo: 'Chenghua, Chengdu',
          gps: [30.74323, 104.13293],
          nota: 'Prenotazione nominativa con il passaporto. Prezzo e orari non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Chengdu.',
    },
    {
      numero: 9,
      titolo: 'Leshan, poi volo per Lijiang',
      paginaSito: '/destinazioni/cina/chengdu',
      racconto:
        'Gita al Grande Buddha di Leshan, 71 metri scolpiti nella roccia alla confluenza di tre fiumi, circa un\'ora di alta velocità. L\'alternativa è Dujiangyan, ma è dalla parte opposta. Volo serale per Lijiang, a 2.400 metri: la quota vera si affronta dal giorno dopo.',
      tratte: [{ da: 'Chengdu', a: 'Lijiang', km: 564, minuti: 90, mezzo: 'volo (distanza in linea d\'aria)' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Lijiang.',
    },
    {
      numero: 10,
      titolo: 'Lijiang all\'alba e Baisha',
      paginaSito: '/destinazioni/cina/lijiang',
      racconto:
        'Nella città vecchia di Dayan alle sei del mattino, prima dei negozi: vicoli bagnati, canali, le donne Naxi che spazzano. Nel pomeriggio Baisha, dieci chilometri a nord, il villaggio Naxi originario, in bici o in taxi. La sera i noodles «che attraversano il ponte» e il formaggio di capra grigliato.',
      tratte: [],
      senzaStrada: 'A piedi a Dayan, bici o taxi per Baisha.',
      luoghi: [],
      mangiare: [],
      dormire: 'Lijiang.',
    },
    {
      numero: 11,
      titolo: 'Yulong Xueshan e Impression Lijiang',
      paginaSito: '/esperienze/cina/impression-lijiang',
      racconto:
        'Giornata in quota, tutto prenotato. Al mattino Impression Lijiang, lo spettacolo di Zhang Yimou con oltre cinquecento interpreti in un anfiteatro a 3.100 metri: strati pesanti anche d\'estate. Nel pomeriggio la funivia del ghiacciaio fino a 4.506 metri, solo con il cielo limpido. Se è coperto, la funivia del Prato degli Abeti a 3.200 metri costa la metà e ha meno coda.',
      tratte: [],
      senzaStrada: 'Bus e navette dell\'area panoramica dello Yulong Xueshan.',
      luoghi: [
        {
          nome: 'Impression Lijiang e Yulong Xueshan',
          indirizzo: 'Area panoramica della Montagna del Drago di Giada, Lijiang',
          gps: [27.10889, 100.21214],
          nota: 'Quote giornaliere che si esauriscono. Prezzi e orari non verificati. A 4.500 metri si fanno pochi passi: chi ha problemi di cuore o di respiro senta il medico prima.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Lijiang.',
    },
    {
      numero: 12,
      titolo: 'Gola del Salto della Tigre, primo giorno',
      paginaSito: '/esperienze/cina/gola-salto-tigre',
      racconto:
        'Trasferimento a Qiaotou, circa due ore, e partenza a piedi sul sentiero alto. I bagagli grossi restano a Lijiang o li porta la guesthouse d\'arrivo. Il tratto duro sono le 28 curve, un\'ora abbondante di tornanti sopra i 2.500 metri. Poi il sentiero si distende e lo Yangtze si sente prima di vederlo. Cinque o sei ore di cammino e notte in una guesthouse sul sentiero, cena tutti allo stesso tavolo.',
      tratte: [{ da: 'Lijiang', a: 'Qiaotou (Gola del Salto della Tigre)', km: 102, minuti: 81, nelMioViaggio: 'circa 2 ore' }],
      luoghi: [
        {
          nome: 'Gola del Salto della Tigre, sentiero alto',
          indirizzo: 'Partenza da Qiaotou, Yunnan',
          gps: [27.25549, 100.16428],
          nota: 'Biglietto d\'ingresso alla gola non verificato. Scarpe da trekking, acqua e contanti per le guesthouse.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Guesthouse sul sentiero (nome non annotato).',
    },
    {
      numero: 13,
      titolo: 'Walnut Garden e Shangri-La',
      paginaSito: '/destinazioni/cina/yulong-shangri-la',
      racconto:
        'Tre o quattro ore fino a Walnut Garden e discesa a fondovalle; chi vuole scende fino alla roccia della Tigre sul fiume, con una scalinata ripida andata e ritorno. Nel pomeriggio trasferimento a Shangri-La, circa due ore: sopra i 3.200 metri il paesaggio diventa altopiano tibetano e le notti sono fredde in ogni stagione.',
      tratte: [{ da: 'Gola del Salto della Tigre', a: 'Shangri-La', km: 123, minuti: 161, nelMioViaggio: 'circa 2 ore' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Shangri-La.',
    },
    {
      numero: 14,
      titolo: 'Songzanlin e rientro a Lijiang',
      paginaSito: '/destinazioni/cina/yulong-shangri-la',
      racconto:
        'La mattina al monastero di Songzanlin, il più grande complesso buddista tibetano dello Yunnan, e nella città vecchia di Dukezong con il grande cilindro di preghiera. Tè al burro di yak, carne di yak essiccata, momo. Rientro a Lijiang in poco più di un\'ora di treno.',
      tratte: [{ da: 'Shangri-La', a: 'Lijiang', km: 119, minuti: 70, mezzo: 'treno (distanza in linea d\'aria)', nelMioViaggio: 'poco più di un\'ora' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Lijiang.',
    },
    {
      numero: 15,
      titolo: 'Volo per Guilin e Yangshuo',
      paginaSito: '/destinazioni/cina/yangshuo',
      racconto:
        'Volo Lijiang-Guilin, poi circa un\'ora di bus fino a Yangshuo. Il paese è comodo ma rumoroso intorno alla West Street; le guesthouse in campagna lungo il fiume Yulong costano meno e sono il motivo per venire qui. Prima sera pesce birra lungo il fiume.',
      tratte: [{ da: 'Lijiang', a: 'Yangshuo (via Guilin)', km: 1050, minuti: 190, mezzo: 'volo più un\'ora di bus (distanza in linea d\'aria)' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Guesthouse lungo il fiume Yulong.',
    },
    {
      numero: 16,
      titolo: 'Alba a Xianggong e zattera a Xingping',
      paginaSito: '/esperienze/cina/fiume-li-zattera',
      racconto:
        'Sveglia prima delle cinque e salita al buio sulla collina di Xianggong, per l\'alba sull\'ansa del fiume Li. In mattinata la zattera di bambù tra Xingping e Yangdi: un\'ora a pelo d\'acqua tra le torri carsiche, compreso il panorama della banconota da 20 yuan. La crociera lunga da Guilin dura quattro ore su un battello affollato; la zattera fa solo il tratto migliore e costa una frazione.',
      tratte: [{ da: 'Yangshuo', a: 'Xingping', km: 19, minuti: 31 }],
      luoghi: [
        {
          nome: 'Fiume Li, tratto Xingping-Yangdi',
          indirizzo: 'Xingping, contea di Yangshuo, Guangxi',
          gps: [24.91909, 110.52155],
          nota: 'Prezzo della zattera e del punto panoramico di Xianggong non verificati. Frontale per la salita all\'alba.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Yangshuo.',
    },
    {
      numero: 17,
      titolo: 'Yangshuo in bicicletta',
      paginaSito: '/destinazioni/cina/yangshuo',
      racconto:
        'La giornata senza programma: bici elettrica lungo il fiume Yulong, cinque ore tra risaie, bufali e ponti in pietra. Yangshuo è anche una capitale dell\'arrampicata su calcare, con scuole e guide in paese. La sera Impression Liu Sanjie, sul fiume, con le torri carsiche illuminate.',
      tratte: [],
      senzaStrada: 'Bici elettrica a noleggio in paese.',
      luoghi: [],
      mangiare: [],
      dormire: 'Yangshuo.',
    },
    {
      numero: 18,
      titolo: 'Guilin e partenza',
      paginaSito: '/viaggi/cina-paesaggi',
      racconto:
        'Trasferimento a Guilin e partenza. Le terrazze di riso di Longji sono a due ore e mezza verso nord: valgono solo se resta una giornata intera.',
      tratte: [],
      senzaStrada: 'Circa un\'ora di bus da Yangshuo a Guilin.',
      luoghi: [],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Chongqing', 'Furong', 'Wulingyuan', 'Tianmen', 'Chengdu', 'Lijiang', 'Gola', 'Shangri', 'Lijiang', 'Yangshuo'],
    legenda: 'Linea piena: il percorso tra treni veloci, voli interni e strada, da Chongqing a Yangshuo.',
    notaTempi: 'Treni e voli sono segnati con la distanza in linea d\'aria e il tempo annotato nel viaggio. Le tratte su strada sono stimate senza traffico (OSRM su OpenStreetMap): in montagna conta più tempo.',
    notaTempiFonti: ['osrm'],
    scalaKm: 200,
  },
  pass: {
    nome: 'Nessun pass',
    titolo: 'Prenotare le quote',
    occhiello: 'La prima decisione',
    regola:
      'Oltre alle cose da sistemare a casa per tutta la Cina (Alipay o WeChat Pay verificati, eSIM o VPN, account 12306 per i treni che aprono 15 giorni prima), in questo giro molte attrazioni hanno fasce orarie o quote giornaliere. Le prenotazioni si fanno con il passaporto e spesso finiscono giorni prima.',
    scenari: [
      { situazione: 'Base dei panda di Chengdu', scelta: 'Prenota l\'ingresso più presto possibile: alle 7:30 i panda sono svegli' },
      { situazione: 'Tianmen Shan', scelta: 'Prenota la fascia oraria della funivia' },
      { situazione: 'Yulong Xueshan e Impression Lijiang', scelta: 'Prenota prima: le quote giornaliere si esauriscono. Ghiacciaio solo con il cielo limpido' },
      { situazione: 'Ascensore di Bailong a Zhangjiajie', scelta: 'Niente prenotazione nel mio viaggio, ma arrivo all\'apertura' },
      { situazione: 'Usi un VPN', scelta: 'Spegnilo prima di pagare con Alipay o WeChat Pay' },
    ],
    esito: 'Evita la Settimana d\'oro (1-7 ottobre), il Capodanno cinese e i primi giorni di maggio. Periodi migliori: aprile-maggio e settembre-ottobre.',
    fonti: ['vs'],
  },
  primaDiPartire: [
    ...cn.primaDiPartire.map((sez) => ({ ...sez, righe: sez.righe.filter((r) => r.voce !== 'Hong Kong e Macao') })),
    {
      titolo: 'Quota',
      righe: [
        { voce: 'Dove', valore: 'Lijiang 2.400 m, Impression Lijiang 3.100 m, Shangri-La oltre 3.200 m, ghiacciaio dello Yulong 4.506 m (quote dal diario).' },
        { voce: 'Come', valore: 'Il primo giorno a Lijiang tienilo leggero. Sopra i 4.000 metri pochi passi e niente corse. Strati caldi in ogni stagione: le notti a Shangri-La sono fredde anche d\'estate.' },
      ],
    },
  ],
  emergenze: {
    numeri: cn.emergenze.numeri.filter((n) => !n.voce.includes('Hong Kong')),
    ambasciata: [
      cn.emergenze.ambasciata[0],
      cn.emergenze.ambasciata[1],
      {
        nome: 'Consolato Generale d\'Italia a Chongqing',
        cosa: 'Per Chongqing, Sichuan e Yunnan verifica la competenza sul sito. Emergenze: +86 139 8325 7845 (feriali 18:00-08:30, festivi 24 ore)',
        indirizzo: 'World Financial Center, 49° piano, 188 Minzu Road, Yuzhong, 400010 Chongqing',
        telefono: '+86 23 6331 6592 (consolare) · chongqing.consolare@esteri.it',
        web: 'conschongqing.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      {
        nome: 'Consolato Generale d\'Italia a Canton',
        cosa: 'Competente per Hunan (Zhangjiajie) e Guangxi (Guilin, Yangshuo). Emergenze: +86 135 0000 6700',
        indirizzo: 'Unit 1403, International Finance Place, 8 Huaxia Road, Pearl River New City, 510623 Canton',
        telefono: '+86 20 3839 6225 · consolato.canton@esteri.it',
        web: 'conscanton.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
    ],
    ospedali: [],
  },
  contatti: [
    {
      gruppo: 'Siti ufficiali da usare prima di partire',
      voci: cn.contatti[0].voci.filter((v) => ['Carta d\'ingresso per stranieri', 'China Railway 12306', 'Ambasciata cinese in Italia'].includes(v.nome)),
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Chongqing e Guilin-Italia' },
      { voce: 'Treno Chongqing-Furong Zhen' },
      { voce: 'Voli interni Zhangjiajie-Chengdu, Chengdu-Lijiang, Lijiang-Guilin' },
      { voce: 'Parco di Zhangjiajie e ascensore di Bailong' },
      { voce: 'Tianmen Shan' },
      { voce: 'Base dei panda' },
      { voce: 'Impression Lijiang e funivia dello Yulong' },
      { voce: 'Guesthouse sulla Gola del Salto della Tigre' },
      { voce: 'Zattera sul fiume Li' },
      { voce: 'Bici elettrica a Yangshuo' },
      { voce: 'eSIM o VPN' },
    ],
    nota: 'Nel diario non ci sono i prezzi pagati: le righe le riempi tu dopo aver controllato i siti ufficiali.',
  },
  valigia: [
    { gruppo: 'Documenti e telefono', voci: ['Passaporto con 6 mesi di validità', 'Carta d\'ingresso compilata', 'Alipay o WeChat Pay già verificati', 'eSIM estera o VPN provato', 'Account 12306 attivo', 'Prenotazioni di panda, Tianmen Shan e Yulong', 'Indirizzi degli hotel in caratteri cinesi', 'Polizza sanitaria con rimpatrio'] },
    { gruppo: 'Vestiti', voci: ['Scarpe da trekking rodate per la gola', 'Piumino leggero e berretto per la quota', 'Strati caldi per Impression Lijiang', 'K-way contro spruzzi e nebbia', 'Sandali per la zattera'] },
    { gruppo: 'Zaino del giorno', voci: ['Frontale per l\'alba a Xianggong', 'Acqua e snack per il trek', 'Crema solare: in quota brucia', 'Power bank', 'Mappe offline e traduttore', 'Contanti per guesthouse e zattere'] },
    { gruppo: 'Tecnica e salute', voci: ['Adattatore universale', 'Farmaci personali', 'Cerotti per le vesciche', 'Niente drone'] },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/cina-paesaggi' },
    { titolo: 'Cina, scheda paese', path: '/destinazioni/cina' },
    { titolo: 'Chongqing', path: '/destinazioni/cina/chongqing' },
    { titolo: 'Zhangjiajie', path: '/destinazioni/cina/zhangjiajie' },
    { titolo: 'I panda di Chengdu', path: '/esperienze/cina/panda-chengdu' },
    { titolo: 'Lijiang', path: '/destinazioni/cina/lijiang' },
    { titolo: 'Gola del Salto della Tigre', path: '/esperienze/cina/gola-salto-tigre' },
    { titolo: 'Fiume Li in zattera', path: '/esperienze/cina/fiume-li-zattera' },
  ],
  nonVerificato: [
    'Biglietti e orari di Furong Zhen, parco di Zhangjiajie e ascensore di Bailong, Tianmen Shan, base dei panda, Leshan, Yulong Xueshan, Impression Lijiang, Gola del Salto della Tigre, zattere di Xingping: i siti ufficiali non si lasciano consultare dall\'estero',
    'Nomi e contatti delle guesthouse di Furong Zhen e della gola, degli hotel e dei ristoranti',
    'Numero nazionale dell\'ambulanza diverso dal 999 riportato da Viaggiare Sicuri',
    'Ospedali per stranieri a Chongqing, Chengdu, Lijiang e Guilin',
    'Orari dei treni Chongqing-Furong Zhen e Shangri-La-Lijiang: controllali su 12306',
  ],
  fonti: cn.fonti.filter((f) => f.id !== 'dpm'),
}
