import type { Guida } from './types'

/**
 * Guida PDF «Corea del Sud». Il racconto viene da src/content/viaggi/18-corea-del-sud-itinerario.md
 * (14 giorni con amici, in autonomia: KTX, autobus express, auto a noleggio solo a Jeju).
 * Ingresso, emergenze, ambasciata, consolato onorario di Busan, ospedali di Seoul, salute:
 * Viaggiare Sicuri (revisione del 07/10/2026). Biglietti e orari dei siti non verificati:
 * la guida rimanda ai siti ufficiali (raggiungibili al 2/11/2026).
 *
 * Distanze su strada: OSRM su OpenStreetMap. Voli: distanza in linea d'aria.
 * Coordinate: src/content/mappe/coordinate.ts (OpenStreetMap).
 */

export const guidaCorea: Guida = {
  slug: 'corea-del-sud-itinerario',
  tripSlug: 'corea-del-sud-itinerario',
  paese: 'Corea del Sud',
  titolo: 'Corea del Sud',
  sottotitolo: 'Seoul, la DMZ, il Seoraksan, Andong, Gyeongju, Busan e le haenyeo di Jeju. Quattordici giorni, giorno per giorno.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Ho fatto questo giro con amici, in autonomia: KTX e autobus express prenotati in anticipo, auto a noleggio solo a Jeju. Quattordici giorni da Seoul alla costa est, poi giù per Andong, Gyeongju e Busan, e il volo per Jeju.',
    'Sul sito c\'è il racconto. Qui ci sono le distanze, le coordinate, le prenotazioni da fare prima (Giardino Segreto, DMZ, templestay, Hallasan), i numeri di emergenza e un frasario coreano con l\'hangul da mostrare.',
    'Regole d\'ingresso e contatti li ho ricontrollati a novembre 2026: fino al 31 dicembre 2026 gli italiani non devono chiedere la K-ETA. Prezzi e orari dei siti non sono riuscito a verificarli sulle fonti ufficiali, quindi non li scrivo.',
  ],
  cosaInPiu: [
    'Una scheda per ogni giorno con distanze, tempi, coordinate GPS e un QR verso la pagina del sito',
    'K-ETA sospesa fino a fine 2026, Arrival Card online, patente internazionale per Jeju',
    'Le prenotazioni che non si fanno sul posto: Giardino Segreto, DMZ e JSA, templestay, Hallasan',
    'Ambasciata a Seoul, consolato onorario a Busan, ospedali internazionali di Seoul, numeri di emergenza',
    'Frasario coreano con l\'hangul',
  ],
  tappe: [
    { nome: 'Seoul', gps: [37.56668, 126.97829], giorno: 'G1-G4', etichetta: 'sinistra' },
    { nome: 'DMZ', gps: [37.91756, 126.69053], giorno: 'G3', etichetta: 'sinistra' },
    { nome: 'Sokcho · Seoraksan', gps: [38.20696, 128.59134], giorno: 'G5-G6', etichetta: 'destra' },
    { nome: 'Andong · Hahoe', gps: [36.56325, 128.73074], giorno: 'G7', etichetta: 'sinistra' },
    { nome: 'Gyeongju', gps: [35.85567, 129.22488], giorno: 'G8-G9', etichetta: 'destra' },
    { nome: 'Busan', gps: [35.17995, 129.07524], giorno: 'G10-G11', etichetta: 'destra' },
    { nome: 'Jeju', gps: [33.48877, 126.49871], giorno: 'G12-G14', etichetta: 'sinistra' },
    { nome: 'Seongsan', gps: [33.45889, 126.94082], giorno: 'G12-G13', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Seoul e Gwangjang',
      paginaSito: '/esperienze/corea-del-sud/gwangjang-cibo-strada',
      racconto:
        'Atterrati a Incheon, abbiamo preso l\'AREX fino al centro, circa un\'ora, e ci siamo sistemati tra Myeongdong e Jongno. Giornata leggera: la T-money comprata al primo minimarket, una prova di Naver Map e la cena al mercato di Gwangjang, sugli sgabelli davanti a chi cucina: bindaetteok, mayak gimbap, tteokbokki.',
      tratte: [{ da: 'Aeroporto di Incheon', a: 'Seoul centro', km: 58, minuti: 66, nelMioViaggio: 'circa un\'ora in AREX' }],
      luoghi: [
        {
          nome: 'Mercato di Gwangjang',
          indirizzo: 'Jongno-gu, Seoul',
          gps: [37.57019, 126.9995],
          nota: 'Si paga ai banchi, spesso in contanti.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Tra Myeongdong e Jongno, vicino a una stazione della metropolitana.',
    },
    {
      numero: 2,
      titolo: 'Palazzi e Memoriale della Guerra',
      paginaSito: '/esperienze/corea-del-sud/gyeongbokgung-hanbok',
      racconto:
        'La mattina Changdeokgung con la visita guidata al Giardino Segreto, prenotata online qualche giorno prima perché è a numero chiuso. Il pomeriggio Gyeongbokgung per il cambio della guardia, magari in hanbok, che fa entrare gratis. A fine giornata il Memoriale della Guerra di Corea, gratuito: rende leggibile la DMZ del giorno dopo.',
      tratte: [],
      senzaStrada: 'Metropolitana e a piedi.',
      luoghi: [
        {
          nome: 'Gyeongbokgung',
          indirizzo: 'Jongno-gu, Seoul',
          gps: [37.57975, 126.97668],
          nota: 'Chiuso il martedì; gli altri palazzi chiudono il lunedì. In hanbok l\'ingresso è gratuito. Biglietto e orari da controllare prima.',
          fonti: ['osm'],
        },
        {
          nome: 'Changdeokgung e Giardino Segreto',
          indirizzo: 'Jongno-gu, Seoul',
          nota: 'Il Giardino Segreto si visita solo con la guida, a numero chiuso: prenota online qualche giorno prima.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'Seoul.',
    },
    {
      numero: 3,
      titolo: 'La DMZ',
      paginaSito: '/esperienze/corea-del-sud/tour-dmz-terzo-tunnel',
      racconto:
        'Tour autorizzato al mattino presto, con il passaporto originale: al checkpoint le copie non valgono. Imjingak con il Ponte della Libertà, il Terzo Tunnel d\'Infiltrazione (1.635 metri, a piedi e curvi), l\'Osservatorio di Dora con la vista su Kaesong e la stazione di Dorasan, che aspetta dal 2002 un treno per Pyongyang. La JSA di Panmunjom dal 2023 è stata chiusa più volte che aperta: tienila come bonus.',
      tratte: [{ da: 'Seoul', a: 'DMZ, Terzo Tunnel', km: 65, minuti: 79 }],
      luoghi: [
        {
          nome: 'Terzo Tunnel d\'Infiltrazione e Osservatorio di Dora',
          indirizzo: 'Paju, Gyeonggi-do',
          gps: [37.91756, 126.69053],
          nota: 'Solo con tour autorizzato. Prezzo del tour e regole per la JSA da controllare con l\'operatore al momento della prenotazione.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Seoul.',
    },
    {
      numero: 4,
      titolo: 'Bukchon, la fortezza e il jjimjilbang',
      paginaSito: '/esperienze/corea-del-sud/jjimjilbang',
      racconto:
        'La mattina tra Bukchon, il villaggio di hanok ancora abitato, e Insadong. Il pomeriggio un tratto della fortezza di Seoul sul crinale, con la città sotto. La sera il jjimjilbang: vasche divise per sesso e senza costume, sala comune in pigiama dove le famiglie dormono per terra. Per poco più di dieci euro, e volendo ci si dorme.',
      tratte: [],
      senzaStrada: 'A piedi e in metropolitana.',
      luoghi: [],
      mangiare: [],
      dormire: 'Seoul.',
    },
    {
      numero: 5,
      titolo: 'Sokcho e il quartiere di Abai',
      paginaSito: '/destinazioni/corea-del-sud/sokcho-seoraksan',
      racconto:
        'Autobus express da Seoul a Sokcho, circa due ore e mezza: il treno non arriva fin qui. Il pomeriggio nel quartiere di Abai, fondato dai profughi nordcoreani, attraversando il canale sul galsseonbae, la chiatta a fune che i passeggeri tirano a mano. A cena l\'ojingeo sundae, il calamaro ripieno.',
      tratte: [{ da: 'Seoul', a: 'Sokcho', km: 193, minuti: 163, mezzo: 'autobus express', nelMioViaggio: 'circa 2 ore e mezza' }],
      luoghi: [],
      mangiare: [],
      dormire: 'Sokcho.',
    },
    {
      numero: 6,
      titolo: 'Seoraksan e Ulsanbawi',
      paginaSito: '/destinazioni/corea-del-sud/sokcho-seoraksan',
      racconto:
        'Il Buddha di bronzo di Sinheungsa all\'ingresso, poi la salita a Ulsanbawi: circa quattro ore andata e ritorno, l\'ultimo tratto su 808 gradini metallici sulla parete di granito. In ottobre, con il foliage, nei weekend si sale in fila: vai in un giorno feriale. Chi non cammina prende la funivia per Gwongeumseong. Trasferimento la sera o la mattina dopo verso Andong.',
      tratte: [],
      senzaStrada: 'Bus locale da Sokcho all\'ingresso del parco.',
      luoghi: [
        {
          nome: 'Parco nazionale del Seoraksan',
          indirizzo: 'Ingresso di Sogongwon, Sokcho',
          nota: 'Biglietto, funivia e orari dei sentieri da controllare prima di partire.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'Sokcho.',
    },
    {
      numero: 7,
      titolo: 'Andong e il villaggio di Hahoe',
      paginaSito: '/destinazioni/corea-del-sud/andong',
      racconto:
        'Da Andong al villaggio di Hahoe, patrimonio UNESCO, abitato dalla stessa famiglia da seicento anni: case dei nobili con le tegole al centro, quelle dei contadini con il tetto di paglia intorno. Abbiamo dormito dentro il villaggio, in una hanok: alle cinque i pullman ripartono e restano il fiume e qualche anziano seduto fuori. A cena l\'andong jjimdak.',
      tratte: [{ da: 'Sokcho', a: 'Andong', km: 288, minuti: 238 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Hanok nel villaggio di Hahoe (nome non annotato).',
    },
    {
      numero: 8,
      titolo: 'Gyeongju, la capitale di Silla',
      paginaSito: '/destinazioni/corea-del-sud/gyeongju',
      racconto:
        'In bicicletta tra i tumuli reali del Daereungwon, in mezzo alla città: in uno si entra e c\'è la corona d\'oro dove fu trovata. Poi Cheomseongdae, l\'osservatorio del VII secolo. Dopo il buio Anapji, lo stagno con i padiglioni illuminati: mezz\'ora che vale la giornata.',
      tratte: [{ da: 'Andong', a: 'Gyeongju', km: 126, minuti: 119 }],
      luoghi: [],
      mangiare: [],
      dormire: 'Gyeongju.',
    },
    {
      numero: 9,
      titolo: 'Seokguram, Bulguksa e templestay',
      paginaSito: '/esperienze/corea-del-sud/bulguksa-seokguram',
      racconto:
        'Seokguram all\'apertura, prima dei pullman: una cupola di granito del 751 con un Buddha di tre metri e mezzo, che si guarda da dietro una vetrata. Poi Bulguksa, con le due pagode di pietra dell\'VIII secolo. Nel pomeriggio templestay in un monastero di montagna: cerimonia serale, il pasto rituale in cui non si lascia un chicco di riso, sveglia verso le quattro.',
      tratte: [{ da: 'Gyeongju', a: 'Bulguksa', km: 17, minuti: 20 }],
      luoghi: [
        {
          nome: 'Bulguksa e Seokguram',
          indirizzo: 'Monte Toham, Gyeongju',
          gps: [35.78899, 129.33089],
          nota: 'Biglietti e orari da controllare prima.',
          fonti: ['osm'],
        },
        {
          nome: 'Templestay',
          indirizzo: 'Portale ufficiale delle permanenze nei templi',
          web: 'eng.templestay.com',
          nota: 'Scegli un tempio con programma in inglese, altrimenti gran parte di quello che succede resta incomprensibile.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'In monastero (templestay).',
    },
    {
      numero: 10,
      titolo: 'Busan: Jagalchi e Gamcheon',
      paginaSito: '/esperienze/corea-del-sud/gamcheon-busan',
      racconto:
        'KTX o autobus fino a Busan. La mattina il mercato del pesce di Jagalchi: si compra al banco di sotto e si fa cucinare al piano di sopra. Il pomeriggio il villaggio di Gamcheon, in autobus fino in cima e giù a piedi, lasciando il percorso dei murales per i vicoli laterali. La sera Gwangalli e il ponte illuminato sul mare.',
      tratte: [{ da: 'Gyeongju', a: 'Busan', km: 84, minuti: 70, nelMioViaggio: 'mezz\'ora scarsa di KTX' }],
      luoghi: [
        {
          nome: 'Villaggio di Gamcheon',
          indirizzo: 'Saha-gu, Busan',
          gps: [35.09634, 129.00879],
          nota: 'Ci vive ancora gente: voce bassa e niente foto dentro le case.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Busan.',
    },
    {
      numero: 11,
      titolo: 'Il cimitero ONU e la costa',
      paginaSito: '/destinazioni/corea-del-sud/busan',
      racconto:
        'La mattina il cimitero commemorativo delle Nazioni Unite, l\'unico al mondo dedicato ai caduti ONU: lapidi di ragazzi di ventidue paesi. Il pomeriggio il sentiero costiero di Igidae, con lo skyline di Haeundae, o il tempio di Haedong Yonggungsa sugli scogli, da evitare nel weekend. A cena il dwaeji gukbap, la zuppa di maiale nata qui nel 1951.',
      tratte: [],
      senzaStrada: 'Metropolitana e autobus di Busan.',
      luoghi: [
        {
          nome: 'Cimitero commemorativo delle Nazioni Unite',
          indirizzo: 'Nam-gu, Busan',
          web: 'unmck.or.kr',
          nota: 'Orari sul sito ufficiale.',
          fonti: [],
        },
      ],
      mangiare: [],
      dormire: 'Busan.',
    },
    {
      numero: 12,
      titolo: 'Volo per Jeju e il museo delle haenyeo',
      paginaSito: '/esperienze/corea-del-sud/haenyeo-jeju',
      racconto:
        'Volo Busan-Jeju, meno di un\'ora, e auto a noleggio con la patente internazionale. Dritti sulla costa est: prima il Museo delle haenyeo a Gujwa-eup, che spiega i bulteok, la gerarchia delle pescatrici e la rivolta del 1932. Ci siamo sistemati intorno a Seongsan; a cena una bancarella delle cooperative, dove il pescato lo vendono direttamente loro.',
      tratte: [
        { da: 'Busan', a: 'Jeju', km: 302, minuti: 55, mezzo: 'volo (distanza in linea d\'aria)' },
        { da: 'Jeju città', a: 'Seongsan', km: 46, minuti: 53 },
      ],
      luoghi: [
        {
          nome: 'Museo delle haenyeo',
          indirizzo: 'Gujwa-eup, Jeju',
          gps: [33.51877, 126.88306],
          nota: 'Biglietto e orari da controllare prima.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Zona di Seongsan.',
    },
    {
      numero: 13,
      titolo: 'Seongsan Ilchulbong e le haenyeo in acqua',
      paginaSito: '/esperienze/corea-del-sud/seongsan-ilchulbong',
      racconto:
        'All\'alba su Seongsan Ilchulbong, venti minuti di gradini con il vento. In mattinata, secondo le maree, la dimostrazione di immersione delle haenyeo ai piedi del cono: scendono a una decina di metri senza bombole e riemergono con il sumbisori, un fischio acutissimo. Nei villaggi della costa est si possono vedere anche senza spettacolo: non avvicinarti, non fotografare da vicino, non entrare nei bulteok. Pomeriggio libero: Manjanggul, un tratto di Olle Trail o il Parco della Pace 4·3.',
      tratte: [],
      senzaStrada: 'In auto sulla costa est.',
      luoghi: [
        {
          nome: 'Seongsan Ilchulbong',
          indirizzo: 'Seongsan-eup, Jeju',
          gps: [33.45889, 126.94082],
          nota: 'Biglietto e orario della dimostrazione delle haenyeo (dipende dalle maree) da controllare sul posto.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Zona di Seongsan.',
    },
    {
      numero: 14,
      titolo: 'Rientro, o Hallasan con mezza giornata in più',
      paginaSito: '/esperienze/corea-del-sud/hallasan',
      racconto:
        'Volo Jeju-Seoul Gimpo e poi Incheon, oppure volo internazionale diretto, secondo le coincidenze. Con mezza giornata in più c\'è l\'Hallasan, ma solo con la prenotazione online già fatta: i due sentieri per la vetta hanno quote giornaliere e senza prenotazione non si passa il checkpoint.',
      tratte: [{ da: 'Jeju', a: 'Seoul', km: 456, minuti: 70, mezzo: 'volo (distanza in linea d\'aria)' }],
      luoghi: [
        {
          nome: 'Hallasan, prenotazione dei sentieri per la vetta',
          indirizzo: 'Jeju',
          web: 'visithalla.jeju.go.kr',
          gps: [33.36143, 126.52942],
          nota: 'Quote giornaliere sui due sentieri che arrivano in cima.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Seoul', 'Sokcho', 'Andong', 'Gyeongju', 'Busan', 'Jeju', 'Seongsan'],
    ritorno: ['Jeju', 'Seoul'],
    legenda: 'Linea piena: autobus, KTX e strada fino a Busan, poi il volo per Jeju. Tratteggio: il volo di rientro a Seoul. La DMZ è una gita in giornata da Seoul.',
    notaTempi: 'Tempi su strada stimati senza traffico (OSRM su OpenStreetMap); i voli sono in linea d\'aria. Dove il viaggio ha usato KTX o autobus express, è indicato il tempo reale.',
    notaTempiFonti: ['osrm'],
    scalaKm: 100,
  },
  pass: {
    nome: 'Nessun pass',
    titolo: 'Le prenotazioni da fare prima',
    occhiello: 'La prima decisione',
    regola:
      'In Corea non c\'è un biglietto unico. Contano le prenotazioni a numero chiuso, che sul posto non si recuperano, e i trasporti: KTX e autobus express si prenotano in anticipo, e a Jeju serve la patente internazionale per noleggiare l\'auto.',
    scenari: [
      { situazione: 'Giardino Segreto di Changdeokgung', scelta: 'Visita guidata a numero chiuso: prenota qualche giorno prima' },
      { situazione: 'DMZ', scelta: 'Tour autorizzato con il passaporto originale. La JSA è un bonus, spesso chiusa' },
      { situazione: 'Templestay', scelta: 'Prenota su eng.templestay.com un tempio con programma in inglese' },
      { situazione: 'Hallasan', scelta: 'Prenota il sentiero per la vetta su visithalla.jeju.go.kr' },
      { situazione: 'Treni KTX', scelta: 'Prenota su letskorail.com' },
    ],
    esito: 'In ottobre il foliage riempie Seoraksan e templi: nei fine settimana si sale in fila. Muoviti nei giorni feriali.',
    fonti: [],
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno 3 mesi di validità residua, integro: uno strappato o danneggiato può bastare per essere respinti.', fonti: ['vs'] },
        { voce: 'Visto', valore: 'Non serve per turismo sotto i 90 giorni. Possono chiedere il biglietto di ritorno.', fonti: ['vs'] },
        { voce: 'K-ETA', valore: 'Per gli italiani l\'obbligo è sospeso fino al 31 dicembre 2026. Se viaggi dopo, controlla su k-eta.go.kr.', fonti: ['vs'] },
        { voce: 'Arrival Card', valore: 'Si compila all\'arrivo, oppure prima online su e-arrivalcard.go.kr. Dichiarazione doganale solo se hai beni da dichiarare.', fonti: ['vs'] },
        { voce: 'Patente', valore: 'Per guidare a Jeju serve la patente internazionale (Ginevra 1949 o Vienna 1968). Assicurazione auto obbligatoria.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Soldi e telefono',
      righe: [
        { voce: 'Valuta', valore: 'Won sudcoreano (KRW): banconote da 1.000, 5.000, 10.000 e 50.000.', fonti: ['vs'] },
        { voce: 'T-money', valore: 'Carta ricaricabile per metropolitana e autobus, si compra nei minimarket.' },
        { voce: 'Mappe', valore: 'Per i percorsi a piedi e con i mezzi ho usato Naver Map: scaricala e provala prima.' },
        { voce: 'Telefono', valore: 'Gli smartphone recenti funzionano. Per chiamare l\'Italia dai fissi serve il prefisso di un operatore internazionale (per esempio 001).', fonti: ['vs'] },
        { voce: 'Corrente', valore: '230 V, 60 Hz. Prese di tipo C e F: le spine italiane a due poli sottili entrano.', fonti: ['prese'] },
        { voce: 'Fuso orario', valore: 'Otto ore avanti rispetto all\'Italia, sette con l\'ora legale.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Salute',
      righe: [
        { voce: 'Vaccini', valore: 'Nessuno obbligatorio. Sentito il medico, epatite B e tifo; encefalite giapponese solo per i bambini in estate.', fonti: ['vs'] },
        { voce: 'Ospedali', valore: 'Seoul ha centri internazionali con personale che parla inglese: elenco nella pagina delle emergenze.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Calendario e usanze',
      righe: [
        { voce: 'Palazzi', valore: 'Gyeongbokgung chiude il martedì, gli altri palazzi il lunedì. In hanbok si entra gratis.' },
        { voce: 'Foliage', valore: 'Ottobre: parchi e templi pienissimi nel fine settimana.' },
        { voce: 'Templi', valore: 'Nel templestay si segue il ritmo del monastero: silenzio, sveglia alle quattro, niente avanzi nel piatto.' },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Polizia', valore: '112', fonti: ['vs'] },
      { voce: 'Ambulanza e vigili del fuoco (anche in inglese)', valore: '119', fonti: ['vs'] },
      { voce: 'Korea Travel Hotline, 24 ore su 24 in inglese', valore: '1330 (dal cellulare 02-1330)', fonti: ['vs'] },
      { voce: 'Immigrazione (anche in inglese)', valore: '1345', fonti: ['vs'] },
    ],
    ambasciata: [
      {
        nome: 'Ambasciata d\'Italia a Seoul',
        cosa: 'Centralino e cancelleria consolare',
        indirizzo: '3F Ilshin Bldg., 98 Hannam-daero, Yongsan-gu, Seoul 04418',
        telefono: '+82 2 750 0200 · embassy.seoul@esteri.it',
        web: 'ambseoul.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
      { nome: 'Ambasciata, cellulare per le emergenze', cosa: 'Solo emergenze', telefono: '+82 10 2242 0491', stato: 'ufficiale', fonti: ['vs'] },
      {
        nome: 'Consolato onorario a Busan',
        cosa: 'Console onorario Vincenzo Campitelli',
        indirizzo: 'D-572, 65 Geumsaem-ro 485beon-gil, Geumjeong-gu, Busan 46234',
        telefono: '+82 51 509 5536 · +82 10 9982 5331 · busan.onorario@esteri.it',
        stato: 'ufficiale',
        fonti: ['vs'],
      },
    ],
    ospedali: [
      { nome: 'Samsung Medical Center, International Health Services', cosa: 'Seoul', indirizzo: '81 Irwon-ro, Gangnam-gu, Seoul', telefono: '+82 2 3410 0200', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Asan Medical Center, International Healthcare Center', cosa: 'Seoul', indirizzo: '88 Olympic-ro 43-gil, Songpa-gu, Seoul', telefono: '+82 2 3010 5001', stato: 'ufficiale', fonti: ['vs'] },
      { nome: 'Severance Hospital, International Health Care Center', cosa: 'Seoul, università Yonsei', indirizzo: '50-1 Yonsei-ro, Seodaemun-gu, Seoul', telefono: '+82 2 2228 5800', stato: 'ufficiale', fonti: ['vs'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Siti ufficiali',
      voci: [
        { nome: 'K-ETA', cosa: 'Autorizzazione elettronica, sospesa per gli italiani fino al 31/12/2026', web: 'k-eta.go.kr', stato: 'ufficiale', fonti: ['vs'] },
        { nome: 'e-Arrival Card', cosa: 'Precompilazione della carta di sbarco', web: 'e-arrivalcard.go.kr', stato: 'ufficiale', fonti: ['vs'] },
        { nome: 'Korail', cosa: 'Biglietti KTX', web: 'letskorail.com', stato: 'ufficiale', fonti: [] },
        { nome: 'Templestay', cosa: 'Prenotazione dei soggiorni nei templi', web: 'eng.templestay.com', stato: 'ufficiale', fonti: [] },
        { nome: 'Hallasan', cosa: 'Prenotazione dei sentieri per la vetta', web: 'visithalla.jeju.go.kr', stato: 'ufficiale', fonti: [] },
        { nome: 'Visit Korea', cosa: 'Ente del turismo coreano', web: 'english.visitkorea.or.kr', stato: 'ufficiale', fonti: [] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Seoul andata e ritorno' },
      { voce: 'AREX Incheon-Seoul' },
      { voce: 'Tour della DMZ' },
      { voce: 'Jjimjilbang', costo: 'poco più di 10 €', nota: 'dal diario' },
      { voce: 'Autobus Seoul-Sokcho' },
      { voce: 'Hanok a Hahoe' },
      { voce: 'Templestay' },
      { voce: 'KTX Gyeongju-Busan' },
      { voce: 'Volo Busan-Jeju' },
      { voce: 'Auto a noleggio a Jeju' },
      { voce: 'Volo Jeju-Seoul' },
      { voce: 'T-money e trasporti urbani' },
    ],
    nota: 'Nel diario quasi nessuna spesa è annotata: le righe le riempi tu, con i prezzi presi dai siti ufficiali.',
  },
  valigia: [
    { gruppo: 'Documenti e soldi', voci: ['Passaporto integro, almeno 3 mesi di validità', 'Biglietto di ritorno', 'Patente internazionale per Jeju', 'Prenotazioni stampate: Giardino Segreto, DMZ, templestay, Hallasan', 'Carta di credito e un po\' di contanti in won', 'Polizza sanitaria'] },
    { gruppo: 'Vestiti', voci: ['Scarpe da trekking per Ulsanbawi e Hallasan', 'Strati e giacca a vento per Seongsan', 'Abiti comodi e sobri per il templestay', 'Calzini: nelle case e nei templi si entra scalzi'] },
    { gruppo: 'Zaino del giorno', voci: ['T-money carica', 'Naver Map scaricata', 'Power bank', 'Acqua e snack per i sentieri'] },
    { gruppo: 'Tecnica e salute', voci: ['Adattatore solo per spine a tre poli', 'Farmaci personali', 'Cerotti'] },
  ],
  lingua: {
    nome: 'Coreano, romanizzato',
    pronuncia: 'Romanizzazione riveduta. «eo» è una o aperta, quasi una a; «eu» una u con le labbra distese; «ae» è una e aperta. Le consonanti finali si appoggiano appena. In città l\'inglese basta per le cose essenziali; per il resto mostra l\'hangul.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Buongiorno, salve', loc: 'annyeonghaseyo', scritto: '안녕하세요' },
        { it: 'Grazie', loc: 'gamsahamnida', scritto: '감사합니다' },
        { it: 'Mi scusi', loc: 'joesonghamnida', scritto: '죄송합니다' },
        { it: 'Sì', loc: 'ne', scritto: '네' },
        { it: 'No', loc: 'aniyo', scritto: '아니요' },
        { it: 'Arrivederci (a chi resta)', loc: 'annyeonghi gyeseyo', scritto: '안녕히 계세요' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Parla inglese?', loc: 'yeongeo haseyo?', scritto: '영어 하세요?' },
        { it: 'Non capisco', loc: 'moreugesseoyo', scritto: '모르겠어요' },
        { it: 'Dov\'è il bagno?', loc: 'hwajangsil eodiyeyo?', scritto: '화장실 어디예요?' },
        { it: 'Quanto costa?', loc: 'eolmayeyo?', scritto: '얼마예요?' },
        { it: 'Troppo caro', loc: 'neomu bissayo', scritto: '너무 비싸요' },
        { it: 'Stazione', loc: 'yeok', scritto: '역' },
        { it: 'Terminal dei bus', loc: 'beoseu teomineol', scritto: '버스 터미널' },
        { it: 'Aeroporto', loc: 'gonghang', scritto: '공항' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Acqua', loc: 'mul', scritto: '물' },
        { it: 'Poco piccante, per favore', loc: 'an maepge hae juseyo', scritto: '안 맵게 해 주세요' },
        { it: 'Il conto, per favore', loc: 'gyesanhae juseyo', scritto: '계산해 주세요' },
        { it: 'Buonissimo', loc: 'masisseoyo', scritto: '맛있어요' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'dowajuseyo!', scritto: '도와주세요!' },
        { it: 'Polizia', loc: 'gyeongchal', scritto: '경찰' },
        { it: 'Ospedale', loc: 'byeongwon', scritto: '병원' },
        { it: 'Mi serve un medico', loc: 'uisaga piryohaeyo', scritto: '의사가 필요해요' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'il', scritto: '일' },
    { it: '2', loc: 'i', scritto: '이' },
    { it: '3', loc: 'sam', scritto: '삼' },
    { it: '4', loc: 'sa', scritto: '사' },
    { it: '5', loc: 'o', scritto: '오' },
    { it: '6', loc: 'yuk', scritto: '육' },
    { it: '7', loc: 'chil', scritto: '칠' },
    { it: '8', loc: 'pal', scritto: '팔' },
    { it: '9', loc: 'gu', scritto: '구' },
    { it: '10', loc: 'sip', scritto: '십' },
    { it: '100', loc: 'baek', scritto: '백' },
    { it: '1000', loc: 'cheon', scritto: '천' },
    { it: '10.000', loc: 'man', scritto: '만', nota: 'i prezzi si contano a decine di migliaia' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/corea-del-sud-itinerario' },
    { titolo: 'Corea del Sud, scheda paese', path: '/destinazioni/corea-del-sud' },
    { titolo: 'Seoul', path: '/destinazioni/corea-del-sud/seoul' },
    { titolo: 'La DMZ e il Terzo Tunnel', path: '/esperienze/corea-del-sud/tour-dmz-terzo-tunnel' },
    { titolo: 'Templestay', path: '/esperienze/corea-del-sud/templestay' },
    { titolo: 'Busan', path: '/destinazioni/corea-del-sud/busan' },
    { titolo: 'Le haenyeo di Jeju', path: '/esperienze/corea-del-sud/haenyeo-jeju' },
    { titolo: 'Hallasan', path: '/esperienze/corea-del-sud/hallasan' },
  ],
  consultate: 'Consultate il 2 novembre 2026. Prezzi e orari cambiano: prima di pagare, guarda sempre la fonte ufficiale.',
  nonVerificato: [
    'Biglietti e orari di palazzi, Seoraksan, Hahoe, Bulguksa e Seokguram, Seongsan Ilchulbong, museo delle haenyeo',
    'Prezzi dei tour della DMZ e stato attuale della JSA di Panmunjom',
    'Orari e prezzi di KTX, autobus express e voli interni',
    'Nomi e contatti di hotel, hanok, ristoranti e del noleggio auto a Jeju',
    'Ospedali fuori Seoul (Busan, Gyeongju, Jeju)',
  ],
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri (Farnesina), scheda Corea del Sud (rev. 07/10/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/KOR.json' },
    { id: 'prese', titolo: 'WorldStandards, prese elettriche in Corea del Sud', url: 'https://www.worldstandards.eu/electricity/plug-voltage-by-country/south-korea/' },
    { id: 'osm', titolo: 'OpenStreetMap (coordinate)', url: 'https://www.openstreetmap.org' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
