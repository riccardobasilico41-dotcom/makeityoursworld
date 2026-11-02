import type { Guida } from './types'

/**
 * Guida PDF «Il Golfo in stopover». Il racconto viene da
 * src/content/viaggi/21-stopover-golfo.md e dalle schede del sito (paesi e
 * destinazioni di Emirati, Qatar e Arabia Saudita, con il confronto dei programmi
 * stopover verificato a settembre 2026). Emergenze, ambasciate, regole d'ingresso
 * e ospedali sono stati ricontrollati il 2/11/2026 sulle fonti in fondo.
 *
 * Distanze e tempi: router OSRM su dati OpenStreetMap, traffico libero.
 * Coordinate: OpenStreetMap (geocoder Photon).
 */

export const guidaStopoverGolfo: Guida = {
  slug: 'stopover-golfo',
  tripSlug: 'stopover-golfo',
  paese: 'Emirati · Qatar · Arabia Saudita',
  titolo: 'Il Golfo in stopover',
  sottotitolo: 'Dubai, Abu Dhabi, Doha e Jeddah, a blocchi da 24-48 ore o tutto di fila. Come usare i programmi delle compagnie e cosa vedere in ogni scalo.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Questo giro l\'ho fatto con amici, in autonomia, usando gli scali delle compagnie del Golfo. Non è un itinerario classico: sono quattro blocchi indipendenti, ognuno buono come stopover di 24 o 48 ore, che messi in fila fanno una settimana tra novembre e marzo, l\'unica stagione in cui si sta all\'aperto.',
    'Qui trovi, per ogni giorno, la strada dall\'aeroporto, i posti con indirizzo e coordinate, e poi le regole che contano davvero in questi tre paesi: chi dà l\'hotel e a quali condizioni, i visti, l\'alcol, i farmaci, i numeri di emergenza, ambasciate e consolati, gli ospedali.',
    'Le condizioni dei programmi stopover cambiano spesso: quelle che riporto sono le ultime che ho verificato sui siti delle compagnie. Prima di prenotare ricontrollale lì.',
  ],
  cosaInPiu: [
    'Il confronto tra Dubai Connect, Etihad Stopover, Qatar Airways Stopover e visto stopover saudita, con le condizioni che fanno saltare l\'offerta',
    'Una scheda per blocco con la strada dall\'aeroporto, chilometri, coordinate e orari dei posti',
    'Regole d\'ingresso, alcol, farmaci controllati, VoIP, abbigliamento: le differenze tra i tre paesi',
    'Numeri di emergenza dei tre paesi, Ambasciate e Consolati d\'Italia con i cellulari di reperibilità',
    'Ospedali di Dubai e Abu Dhabi dall\'elenco del governo britannico',
    'Lista per la valigia e frasario arabo del Golfo',
  ],
  tappe: [
    { nome: 'Dubai', gps: [25.26423, 55.30017], giorno: 'G1 · G2', etichetta: 'destra' },
    { nome: 'Abu Dhabi', gps: [24.47419, 54.34019], giorno: 'G3 · G4', etichetta: 'sotto' },
    { nome: 'Doha', gps: [25.29554, 51.53942], giorno: 'G5', etichetta: 'sopra' },
    { nome: 'Khor Al Adaid', gps: [24.7702, 51.48139], giorno: 'G6', etichetta: 'sinistra' },
    { nome: 'Jeddah', gps: [21.48604, 39.1877], giorno: 'G7', etichetta: 'sotto' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Dubai, le prime 24 ore',
      paginaSito: '/destinazioni/emirati-arabi-uniti/dubai',
      racconto:
        'Dall\'aeroporto in metropolitana fino al centro. Prima tappa Al Fahidi, le case di gesso e corallo con le torri del vento, che si gira in un\'ora. Poi il creek in abra a un dirham, con i dhow carichi ormeggiati a Deira, e i souq delle spezie e dell\'oro. Cena tra Karama e Bur Dubai, cucina pakistana e indiana con meno di dieci euro. Il Burj Khalifa al tramonto solo con il biglietto comprato giorni prima.',
      tratte: [
        { da: 'Aeroporto DXB', a: 'Al Fahidi (Bur Dubai)', km: 20, minuti: 32, mezzo: 'metropolitana', nelMioViaggio: 'circa 20 minuti di metro fino al centro' },
      ],
      luoghi: [
        {
          nome: 'Al Fahidi, quartiere storico',
          indirizzo: 'Al Fahidi Street, Bur Dubai',
          gps: [25.26423, 55.30017],
          nota: 'Si gira a piedi in un\'ora. Le stazioni delle abra sono sul creek a pochi minuti.',
          fonti: ['osm', 'sito-dubai'],
        },
        {
          nome: 'Stazione delle abra di Bur Dubai',
          gps: [25.26442, 55.29271],
          biglietto: '1 AED a tratta (nel mio viaggio), in contanti',
          fonti: ['osm'],
        },
        {
          nome: 'Burj Khalifa, At the Top',
          indirizzo: 'Downtown Dubai, ingresso dal Dubai Mall',
          biglietto: 'Da circa 170 AED (prezzo del mio viaggio); le fasce del tramonto costano di più e finiscono prima',
          gps: [25.19703, 55.27413],
          nota: 'Compra online giorni prima. Prezzi e orari aggiornati solo sul sito ufficiale.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Con Dubai Connect l\'hotel è assegnato e non si sceglie. Fuori dal programma, Deira e Bur Dubai per i prezzi bassi e la metro, Downtown per stare sotto il Burj Khalifa.',
      nota: 'Il tempo utile vero è meno delle ore di scalo: tra sbarco, controlli e rientro con tre ore di anticipo, sotto le dieci ore non conviene uscire.',
      costiNoti: ['Abra: 1 AED', 'Cena a Karama o Bur Dubai: meno di 10 €', 'Burj Khalifa: da circa 170 AED'],
    },
    {
      numero: 2,
      titolo: 'Dubai, il secondo giorno',
      paginaSito: '/destinazioni/emirati-arabi-uniti/dubai',
      racconto:
        'La mattina Alserkal Avenue, le gallerie nei vecchi magazzini, oppure il Museo del Futuro con la calligrafia araba sulla facciata. Pomeriggio e sera nel deserto: safari con dune bashing e cena al campo. Organizzato, su dune modeste a mezz\'ora dalla città e con altri dieci fuoristrada, ma resta una serata piacevole.',
      tratte: [],
      senzaStrada: 'Metro e taxi in città. Per il safari passa a prenderti l\'operatore in hotel.',
      luoghi: [
        {
          nome: 'Alserkal Avenue',
          indirizzo: 'Al Quoz Industrial Area 1, Dubai',
          gps: [25.14122, 55.22566],
          nota: 'Orari delle gallerie non verificati: molte chiudono il lunedì o il venerdì, controlla prima.',
          fonti: ['osm'],
        },
        {
          nome: 'Museo del Futuro',
          indirizzo: 'Sheikh Zayed Road, accanto alla stazione metro Emirates Towers',
          gps: [25.21915, 55.28187],
          nota: 'Biglietto a fascia oraria online; prezzo e orari non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Dubai.',
      costiNoti: ['Safari serale nel deserto: 200-400 AED (prezzi del mio viaggio, secondo la formula)'],
      nota: 'Il deserto vero è a Liwa, a due ore da Abu Dhabi: vedi il giorno 4.',
    },
    {
      numero: 3,
      titolo: 'Abu Dhabi, la Grande Moschea',
      paginaSito: '/destinazioni/emirati-arabi-uniti/abu-dhabi',
      racconto:
        'Siamo andati alla Grande Moschea Sheikh Zayed nel tardo pomeriggio: le colonne intarsiate di madreperla, il tappeto annodato a mano più grande del mondo, il marmo che di notte cambia colore con le luci. La sera Corniche oppure il mercato del pesce di Al Mina, dove scegli al banco e ti cucinano il pesce accanto.',
      tratte: [{ da: 'Dubai, Al Fahidi', a: 'Grande Moschea Sheikh Zayed', km: 135, minuti: 88, mezzo: 'autobus o taxi', nelMioViaggio: 'circa 2 ore in autobus' }],
      luoghi: [
        {
          nome: 'Grande Moschea Sheikh Zayed',
          indirizzo: 'Sheikh Rashid Bin Saeed Street, Abu Dhabi',
          biglietto: 'Gratis, con prenotazione a fascia oraria',
          gps: [24.41245, 54.47427],
          nota: 'È l\'unica moschea degli Emirati aperta ai non musulmani, fuori dagli orari di preghiera e non il venerdì mattina. Braccia e gambe coperte per tutti, capo coperto per le donne: arriva già vestito giusto.',
          fonti: ['vs-are', 'osm'],
        },
      ],
      mangiare: [],
      dormire: 'Hotel dello stopover Etihad (1-2 notti gratis, da aggiungere mentre prenoti il volo). Fuori programma, la Corniche.',
    },
    {
      numero: 4,
      titolo: 'Abu Dhabi, il Louvre (e Liwa o Al Ain)',
      paginaSito: '/destinazioni/emirati-arabi-uniti/liwa-al-ain',
      racconto:
        'Il Louvre Abu Dhabi sull\'isola di Saadiyat, dove l\'edificio conta quanto la collezione: sotto la cupola di stelle metalliche la luce si muove per tutto il giorno. La collezione è ordinata per epoca, quindi nella stessa sala stanno oggetti di culture che non si conoscevano. Con un giorno in più si va a Liwa, a due ore, sul bordo del Rub\' al-Khali, oppure all\'oasi UNESCO di Al Ain.',
      tratte: [{ da: 'Grande Moschea', a: 'Louvre Abu Dhabi (Saadiyat)', km: 23, minuti: 23, mezzo: 'taxi' }],
      luoghi: [
        {
          nome: 'Louvre Abu Dhabi',
          indirizzo: 'Saadiyat Cultural District, Abu Dhabi',
          biglietto: 'Circa 65 AED nel mio viaggio',
          gps: [24.53368, 54.39861],
          nota: 'Orari e prezzo aggiornati sul sito ufficiale (louvreabudhabi.ae): non sono riuscito a verificarli.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Abu Dhabi.',
      nota: 'Il deserto non si fa da soli: Viaggiare Sicuri sconsiglia le escursioni senza guida e senza attrezzatura.',
    },
    {
      numero: 5,
      titolo: 'Doha, lo stopover da quattordici dollari',
      paginaSito: '/destinazioni/qatar/doha',
      racconto:
        'Lo stopover Qatar Airways si prenota sul portale Discover Qatar con il codice della prenotazione del volo. Metro dall\'aeroporto e prima tappa al Museo di Arte Islamica di Pei, con lo skyline di West Bay dalla scalinata al tramonto. La sera al Souq Waqif: l\'ala dei falchi e l\'ospedale veterinario per falchi, dove si entra e si guarda. Cena nel souq e karak chai ai chioschi.',
      tratte: [{ da: 'Aeroporto Hamad (DOH)', a: 'Museo di Arte Islamica', km: 9, minuti: 14, mezzo: 'metropolitana', nelMioViaggio: 'circa 20 minuti' }],
      luoghi: [
        {
          nome: 'Museo di Arte Islamica (MIA)',
          indirizzo: 'Off Al Corniche Street, Doha',
          orari: 'Dom, lun, mar e sab 09:00-19:00; gio 09:00-21:00; ven 13:30-19:00; chiuso il mercoledì. Chiuso anche sabato 7 novembre 2026',
          telefono: '+974 4422 4444',
          web: 'mia.org.qa',
          gps: [25.29554, 51.53942],
          nota: 'Il prezzo si vede solo sulla biglietteria online di Qatar Museums. Il parco del MIA è aperto 24 ore.',
          fonti: ['mia', 'osm'],
        },
        {
          nome: 'Souq Waqif',
          gps: [25.28615, 51.53274],
          fonti: ['osm'],
        },
        {
          nome: 'Ospedale dei falchi del Souq Waqif',
          gps: [25.28881, 51.53098],
          biglietto: 'Si entra senza biglietto (nel mio viaggio)',
          nota: 'Orari non verificati.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Hotel del programma stopover Qatar Airways: quattro stelle da circa 14 dollari a persona a notte, cinque stelle da 20-30, da 1 a 4 notti.',
      costiNoti: ['Hotel 4 stelle con lo stopover: da circa 14 $ a persona a notte', 'Karak chai: pochi centesimi'],
      nota: 'In Qatar l\'abbigliamento in pubblico è più conservativo che a Dubai: spalle e ginocchia coperte.',
    },
    {
      numero: 6,
      titolo: 'Khor Al Adaid, il mare dentro il deserto',
      paginaSito: '/destinazioni/qatar/qatar-deserto-nord',
      racconto:
        'Un\'ora e mezza da Doha, l\'ultima mezz\'ora su sabbia: l\'autista sgonfia le gomme e si va su e giù per le dune finché sotto compare il mare, un braccio di Golfo che entra per chilometri nel deserto con l\'Arabia Saudita sull\'altra sponda. Siamo restati fino al tramonto; dopo il buio la temperatura scende parecchio anche in inverno. In alternativa il nord: Al Zubarah, Al Jumail e le lastre di Richard Serra nel deserto di Brouq.',
      tratte: [
        { da: 'Doha, Souq Waqif', a: 'Sealine (fine dell\'asfalto)', km: 54, minuti: 45, nelMioViaggio: 'fino all\'inland sea circa 1 ora e mezza, l\'ultima mezz\'ora su sabbia in 4x4' },
      ],
      luoghi: [
        {
          nome: 'Khor Al Adaid (inland sea)',
          indirizzo: 'Sud-est del Qatar, al confine con l\'Arabia Saudita',
          gps: [24.7702, 51.48139],
          nota: 'Solo in 4x4 con autista esperto: con un\'auto normale ci si insabbia. Viaggiare Sicuri consiglia agenzie specializzate e una polizza che copra i passeggeri.',
          fonti: ['osm', 'vs-qat'],
        },
      ],
      mangiare: [],
      dormire: 'Doha, oppure un campo tendato nel deserto.',
      costiNoti: ['Escursione in 4x4: 250-500 QAR secondo la formula (prezzi del mio viaggio)'],
    },
    {
      numero: 7,
      titolo: 'Jeddah, lo stopover saudita',
      paginaSito: '/destinazioni/arabia-saudita/jeddah',
      racconto:
        'Qui non si risparmia l\'hotel ma il visto: volando Saudia o flynas si chiede online il visto stopover gratuito, fino a 4 giorni. Al-Balad, il centro UNESCO di case-torre di pietra corallina con i rawashin di teak, va visto nell\'ultima ora di luce. La sera la Corniche, che il giovedì si riempie di famiglie con tappeti e barbecue fino a mezzanotte.',
      tratte: [{ da: 'Aeroporto King Abdulaziz (JED)', a: 'Al-Balad', km: 23, minuti: 24, mezzo: 'taxi o app' }],
      luoghi: [
        {
          nome: 'Al-Balad, Jeddah storica (UNESCO)',
          gps: [21.48604, 39.1877],
          nota: 'Di giorno è polveroso e pieno di impalcature: vai nell\'ultima ora di luce.',
          fonti: ['osm'],
        },
        {
          nome: 'Corniche di Jeddah',
          gps: [21.62618, 39.10477],
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Vicino ad Al-Balad per la parte storica, o sulla Corniche per mare e ristoranti.',
      nota: 'In Arabia Saudita l\'alcol non esiste, in nessun hotel: introdurlo è un reato grave. Mecca è vietata ai non musulmani, e anche la strada che ci porta ha un\'uscita obbligatoria.',
    },
  ],
  mappa: {
    percorso: ['Dubai', 'Abu Dhabi', 'Doha', 'Khor Al Adaid'],
    ritorno: ['Doha', 'Jeddah'],
    legenda: 'Linea piena: l\'ordine dei blocchi (Abu Dhabi-Doha in volo). Tratteggio: il volo per Jeddah. Coste non disegnate.',
    notaTempi: 'Tempi su strada stimati senza traffico (OSRM su OpenStreetMap). A Dubai e Doha nelle ore di punta conta il doppio.',
    notaTempiFonti: ['osrm'],
    scalaKm: 200,
  },
  pass: {
    nome: 'programmi stopover',
    titolo: 'Quale programma stopover?',
    occhiello: 'La prima decisione',
    regola:
      'Dubai Connect è una compensazione, tutti gli altri sono scelte. Dubai Connect (Emirates) dà gratis hotel, pasti, transfer e visto di transito per scali a Dubai più o meno tra 8 e 26 ore, ma solo se quello è il collegamento più breve disponibile, su biglietto unico Emirates; l\'hotel è assegnato. Etihad regala una o due notti ad Abu Dhabi se aggiungi una sosta di almeno 24 ore mentre prenoti un andata e ritorno. Qatar Airways vende hotel a quattro stelle da circa 14 dollari a persona a notte (da 1 a 4 notti, scalo tra 12 e 96 ore) su biglietti Qatar, codeshare e oneworld, da prenotare su Discover Qatar con il codice del volo. Saudia e flynas danno un visto stopover gratuito, 4 giorni di permanenza in 3 mesi.',
    scenari: [
      { situazione: 'Hai già uno scalo lungo e obbligato a Dubai con Emirates', scelta: 'Dubai Connect: chiedilo, è gratis' },
      { situazione: 'Hai scelto tu un volo successivo per fermarti a Dubai', scelta: 'Dubai Connect non vale: confronta il pacchetto Dubai Stopover con una prenotazione libera' },
      { situazione: 'Voli Etihad e vuoi due giorni veri di visita', scelta: 'Abu Dhabi Stopover, da aggiungere mentre prenoti' },
      { situazione: 'Voli Qatar Airways o oneworld e hai almeno 12 ore', scelta: 'Stopover Doha su Discover Qatar: il miglior rapporto prezzo-resa' },
      { situazione: 'Vuoi vedere Jeddah o AlUla senza visto turistico', scelta: 'Biglietto Saudia o flynas e visto stopover gratuito, chiesto subito dopo l\'acquisto' },
    ],
    esito: 'Le condizioni cambiano spesso e senza preavviso: soglie orarie, prezzi e portali vanno ricontrollati sui siti ufficiali delle compagnie prima di prenotare.',
    fonti: ['sito-dubai', 'vs-sau'],
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno 6 mesi di validità residua all\'ingresso in tutti e tre i paesi. Negli Emirati respingono anche per passaporti rovinati.', fonti: ['vs-are', 'vs-qat', 'vs-sau'] },
        { voce: 'Emirati', valore: 'Niente visto per i cittadini UE fino a 90 giorni ogni 180.', fonti: ['vs-are'] },
        { voce: 'Qatar', valore: 'Visto turistico rilasciato all\'arrivo, di norma 30 giorni, con passaporto valido 6 mesi e biglietto di ritorno confermato; alcune compagnie chiedono anche la prenotazione dell\'hotel. In transito aeroportuale non serve.', fonti: ['vs-qat'] },
        { voce: 'Arabia Saudita', valore: 'Visto turistico online su visa.visitsaudi.com, oppure visto elettronico di transito gratuito con biglietto Saudia o flynas: 4 giorni di permanenza su 3 mesi. Serve anche un\'assicurazione sanitaria.', fonti: ['vs-sau'] },
        { voce: 'Farmaci', valore: 'Emirati e Qatar trattano come stupefacenti alcuni farmaci da banco europei. Porta la ricetta e un certificato medico in inglese; negli Emirati i farmaci controllati vanno autorizzati sul portale EDE o dichiarati in dogana.', fonti: ['vs-are', 'vs-qat'] },
      ],
    },
    {
      titolo: 'Soldi, telefono, corrente',
      righe: [
        { voce: 'Valute', valore: 'Dirham degli Emirati (AED), riyal del Qatar (QAR), riyal saudita (SAR), tutti agganciati al dollaro. Le carte, anche contactless, passano quasi ovunque.', fonti: ['vs-are', 'vs-qat', 'vs-sau'] },
        { voce: 'Chiamate', valore: 'Negli Emirati e in Qatar le chiamate VoIP sono limitate sulle reti locali: WhatsApp manda messaggi ma non chiama. Una eSIM estera in roaming risolve.' },
        { voce: 'Prese', valore: 'Tipo G britannico in tutti e tre i paesi: l\'adattatore europeo non entra.' },
        { voce: 'Fuso orario', valore: 'Emirati UTC+4 (3 ore avanti all\'Italia d\'inverno, 2 d\'estate). Qatar e Arabia Saudita UTC+3 (2 ore avanti d\'inverno, 1 d\'estate).', fonti: ['vs-are', 'vs-qat', 'vs-sau'] },
      ],
    },
    {
      titolo: 'Alcol, abbigliamento, foto',
      righe: [
        { voce: 'Emirati', valore: 'Alcol solo nei locali con licenza, dai 21 anni; vietato bere in luoghi pubblici; guidare dopo anche poco alcol porta in carcere. Nell\'emirato di Sharjah l\'alcol è proibito.', fonti: ['vs-are'] },
        { voce: 'Qatar', valore: 'Vietato importare alcol e carne di maiale. Gli stranieri bevono negli hotel e nelle case private.', fonti: ['vs-qat'] },
        { voce: 'Arabia Saudita', valore: 'Alcol, droga, pornografia vietati e puniti molto duramente. Abiti coprenti e non aderenti, spalle e ginocchia coperte; nessuna critica a religione o casa reale.', fonti: ['vs-sau'] },
        { voce: 'Foto', valore: 'Negli Emirati fotografare edifici governativi, polizia, zone militari, ambasciate, impianti petroliferi o aeroporti, anche per sbaglio sullo sfondo, può portare all\'arresto.', fonti: ['vs-are'] },
        { voce: 'Affetti in pubblico', valore: 'Da evitare in tutti e tre i paesi. L\'omosessualità è reato in Qatar e in Arabia Saudita e può essere punita negli Emirati.', fonti: ['vs-are', 'vs-qat', 'vs-sau'] },
      ],
    },
    {
      titolo: 'Sicurezza e calendario (autunno 2026)',
      righe: [
        { voce: 'Quadro', valore: 'Criminalità bassa in tutti e tre. Viaggiare Sicuri non esclude azioni ostili legate ai conflitti della regione contro infrastrutture negli Emirati e in Qatar: segui le indicazioni delle autorità e dell\'Ambasciata.', fonti: ['vs-are', 'vs-qat'] },
        { voce: 'Arabia Saudita', valore: 'Da evitare le province di Jazan, Najran e Aseer (attacchi Houthi da luglio 2026) e le zone di confine con Yemen, Iraq e Bahrein. Segui gli avvisi di «early warning» della Protezione civile.', fonti: ['vs-sau'] },
        { voce: 'Clima', valore: 'Da maggio a ottobre si superano i 45-50 gradi con umidità fino al 90%. Vai tra novembre e marzo.', fonti: ['vs-are', 'vs-qat'] },
        { voce: 'Ramadan', valore: 'Negli Emirati, dall\'alba al tramonto, è vietato anche ai non musulmani mangiare, bere (acqua compresa) e fumare in pubblico. Nel 2027 il Ramadan è previsto intorno all\'8 febbraio-9 marzo.', fonti: ['vs-are', 'ramadan'] },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emirati: polizia · ambulanza · vigili del fuoco', valore: '999 · 998 · 997', fonti: ['uk-are'] },
      { voce: 'Qatar: numero unico', valore: '999', fonti: ['vs-qat', 'uk-qat'] },
      { voce: 'Arabia Saudita: numero unico', valore: '911 (112 senza SIM saudita)', fonti: ['uk-sau'] },
      { voce: 'Arabia Saudita: polizia · vigili del fuoco · ambulanza', valore: '999 · 998 · 997', fonti: ['vs-sau'] },
      { voce: 'Emirati: Ministero della Salute (farmaci)', valore: '+971 800 11111', fonti: ['vs-are'] },
    ],
    ambasciata: [
      {
        nome: 'Ambasciata d\'Italia ad Abu Dhabi',
        cosa: 'Centralino',
        indirizzo: 'Etihad Towers, Corniche Road, Tower 3, piani 28 e 19, Abu Dhabi',
        telefono: '+971 2 443 5622 · emergenze (emirato di Abu Dhabi) +971 50 818 0780 · italianembassy.abudhabi@esteri.it',
        web: 'ambabudhabi.esteri.it',
        stato: 'ufficiale',
        avviso: 'Il cellulare di emergenza risponde lun-ven 16-22, festivi 9-22.',
        fonti: ['vs-are'],
      },
      {
        nome: 'Consolato Generale d\'Italia a Dubai',
        cosa: 'Dubai ed emirati del nord',
        indirizzo: 'World Trade Center, Dubai',
        telefono: '+971 4 331 4167 · emergenze +971 50 656 3375 · consular.dubai@esteri.it',
        web: 'consdubai.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs-are'],
      },
      {
        nome: 'Ambasciata d\'Italia a Doha',
        cosa: 'Centralino',
        indirizzo: 'Alfardan Office Tower, 23° piano, 61 Al Funduq Street, Doha',
        telefono: '+974 4483 1828 · emergenze +974 5551 3365 · doha.ambasciata@esteri.it',
        web: 'ambdoha.esteri.it',
        stato: 'ufficiale',
        avviso: 'Il cellulare di emergenza risponde lun-gio dalle 14 alle 8:30, venerdì e sabato 24 ore.',
        fonti: ['vs-qat'],
      },
      {
        nome: 'Consolato Generale d\'Italia a Gedda (Jeddah)',
        cosa: 'Competente per Jeddah, Mecca, Medina e il sud-ovest',
        indirizzo: 'Prince Faisal Bin Fahad Street, edificio 6535, Al Shati, Jeddah',
        telefono: '+966 12 642 1451 · emergenze +966 50 667 8310 · anagrafe.gedda@esteri.it',
        stato: 'ufficiale',
        avviso: 'Aperto al pubblico dom-gio 9:30-13:00. Segnala la tua presenza via email con date e indirizzo.',
        fonti: ['vs-sau'],
      },
      {
        nome: 'Ambasciata d\'Italia a Riad',
        cosa: 'Centralino',
        indirizzo: '3639 Al Adamri Street, Diplomatic Quarter, Riyadh',
        telefono: '+966 11 488 1212 · emergenze +966 50 525 4792',
        web: 'ambriad.esteri.it',
        stato: 'ufficiale',
        fonti: ['vs-sau'],
      },
    ],
    ospedali: [
      { nome: 'Rashid Hospital', cosa: 'Dubai, pubblico', indirizzo: 'Umm Hurair Second, Dubai', telefono: '+971 4 219 1000', stato: 'ufficiale', avviso: 'Elenco del governo britannico (marzo 2023).', fonti: ['uk-are-med'] },
      { nome: 'Mediclinic City Hospital', cosa: 'Dubai, privato', indirizzo: 'Dubai Healthcare City', telefono: '+971 800 1999', stato: 'ufficiale', avviso: 'Elenco del 2023.', fonti: ['uk-are-med'] },
      { nome: 'King\'s College Hospital London Dubai', cosa: 'Dubai, privato', indirizzo: 'Dubai Hills, Al Khail Road', telefono: '+971 4 247 7777', stato: 'ufficiale', avviso: 'Elenco del 2023.', fonti: ['uk-are-med'] },
      { nome: 'Sheikh Khalifa Medical City', cosa: 'Abu Dhabi, pubblico', indirizzo: 'Karama Street, Al Tibbiya, Abu Dhabi', telefono: '+971 2 819 0000', stato: 'ufficiale', avviso: 'Elenco del 2023.', fonti: ['uk-are-med'] },
      { nome: 'Mediclinic Airport Road Hospital', cosa: 'Abu Dhabi, privato', indirizzo: 'Airport Road, accanto a Zayed Sports City', telefono: '+971 800 2000', stato: 'ufficiale', avviso: 'Elenco del 2023.', fonti: ['uk-are-med'] },
      { nome: 'Doha e Jeddah', cosa: 'Nessun ospedale con numero verificato', stato: 'ufficiale', avviso: 'Chiama il 999 (Qatar) o il 911 (Arabia Saudita), oppure chiedi all\'hotel. Le strutture saudite sono di livello occidentale, quelle del Qatar in genere buone.', fonti: ['vs-qat', 'vs-sau'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Programmi stopover e visti',
      nota: 'Condizioni riassunte nella pagina «Quale programma stopover?». I siti delle compagnie non si lasciano leggere in automatico: aprili tu prima di prenotare.',
      voci: [
        { nome: 'Emirates, Dubai Connect', cosa: 'Hotel gratis per scali lunghi e obbligati a Dubai', web: 'emirates.com', stato: 'ufficiale', fonti: ['sito-dubai'] },
        { nome: 'Etihad, Abu Dhabi Stopover', cosa: '1-2 notti gratis con sosta di almeno 24 ore', web: 'etihad.com', stato: 'ufficiale', fonti: ['sito-dubai'] },
        { nome: 'Discover Qatar', cosa: 'Portale dello stopover Qatar Airways, si usa il codice di prenotazione del volo', web: 'discoverqatar.qa', stato: 'ufficiale', fonti: ['sito-dubai'] },
        { nome: 'Saudia · flynas', cosa: 'Visto stopover gratuito per l\'Arabia Saudita', web: 'saudia.com · flynas.com', stato: 'ufficiale', fonti: ['vs-sau'] },
        { nome: 'Visit Saudi, visti', cosa: 'Visto turistico elettronico', web: 'visa.visitsaudi.com', stato: 'ufficiale', fonti: ['vs-sau'] },
        { nome: 'Ambasciata del Qatar a Roma', cosa: 'Ingresso in Qatar', telefono: '+39 06 4424 9450 · rome@mofa.gov.qa', stato: 'ufficiale', fonti: ['vs-qat'] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli (con gli scali nel Golfo)' },
      { voce: 'Hotel Dubai (Dubai Connect o prenotazione libera)' },
      { voce: 'Abra sul creek', costo: '1 AED', nota: 'a tratta' },
      { voce: 'Cena a Karama o Bur Dubai', costo: 'meno di 10 €' },
      { voce: 'Burj Khalifa', costo: 'da circa 170 AED' },
      { voce: 'Safari serale nel deserto', costo: '200-400 AED' },
      { voce: 'Hotel Abu Dhabi', costo: 'gratis', nota: 'stopover Etihad, 1-2 notti' },
      { voce: 'Louvre Abu Dhabi', costo: 'circa 65 AED' },
      { voce: 'Hotel Doha', costo: 'da circa 14 $', nota: 'a persona a notte, stopover Qatar' },
      { voce: 'Escursione a Khor Al Adaid', costo: '250-500 QAR' },
      { voce: 'Visto saudita', costo: 'gratis', nota: 'visto stopover Saudia o flynas' },
      { voce: 'Hotel Jeddah' },
      { voce: 'Taxi e metro' },
      { voce: 'eSIM in roaming' },
      { voce: 'Pasti' },
    ],
    nota: 'Le cifre sono quelle del mio viaggio e delle condizioni dei programmi verificate a settembre 2026. Le righe vuote le riempi tu.',
  },
  valigia: [
    {
      gruppo: 'Documenti',
      voci: ['Passaporto con 6 mesi di validità e in buono stato', 'Biglietto di ritorno stampato (Qatar)', 'Codice di prenotazione per Discover Qatar', 'Visto stopover saudita stampato', 'Assicurazione sanitaria valida in Arabia Saudita', 'Ricetta e certificato medico in inglese per i farmaci', 'Carta di credito contactless'],
    },
    {
      gruppo: 'Vestiti',
      voci: ['Pantaloni lunghi leggeri', 'Maglie con le maniche, non aderenti', 'Foulard per le donne (moschea)', 'Felpa per aerei, metro e musei gelidi', 'Strato caldo per il deserto la sera', 'Scarpe comode'],
    },
    {
      gruppo: 'Tecnica e zaino',
      voci: ['Adattatore tipo G', 'eSIM estera in roaming', 'Power bank', 'Borraccia', 'Crema solare e occhiali', 'Mappe offline'],
    },
  ],
  lingua: {
    nome: 'Arabo del Golfo, traslitterato',
    pronuncia: 'In tutti e tre i paesi l\'inglese basta quasi sempre. Qualche parola araba fa piacere. «kh» come la jota spagnola, «ʿ» è un suono di gola.',
  },
  frasario: [
    {
      gruppo: 'Saluti e cortesia',
      frasi: [
        { it: 'Salve', loc: 'as-salāmu ʿalaykum', nota: 'risposta: wa ʿalaykum as-salām' },
        { it: 'Benvenuto', loc: 'ahlan wa sahlan' },
        { it: 'Grazie', loc: 'shukran' },
        { it: 'Prego', loc: 'ʿafwan' },
        { it: 'Per favore', loc: 'min faḍlak' },
        { it: 'Sì · No', loc: 'naʿam · lā' },
        { it: 'Va bene', loc: 'zēn' },
        { it: 'Se Dio vuole', loc: 'inshallah' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Dov\'è…?', loc: 'wēn…?' },
        { it: 'Quanto costa?', loc: 'bikam?' },
        { it: 'Troppo caro', loc: 'ghāli wāyed' },
        { it: 'Basta così', loc: 'bas' },
        { it: 'Andiamo', loc: 'yalla' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Acqua', loc: 'māy' },
        { it: 'Tè · Caffè', loc: 'chāy · gahwa' },
        { it: 'Il conto, per favore', loc: 'al-ḥisāb min faḍlak' },
      ],
    },
    {
      gruppo: 'Emergenze',
      frasi: [
        { it: 'Aiuto!', loc: 'sāʿidni!' },
        { it: 'Ospedale', loc: 'mustashfa' },
        { it: 'Polizia', loc: 'shurṭa' },
      ],
    },
  ],
  numeri: [
    { it: '1', loc: 'wāḥid' },
    { it: '2', loc: 'ithnēn' },
    { it: '3', loc: 'thalātha' },
    { it: '4', loc: 'arbaʿa' },
    { it: '5', loc: 'khamsa' },
    { it: '10', loc: 'ʿashara' },
    { it: '100', loc: 'miya' },
  ],
  pagineSito: [
    { titolo: 'Il viaggio completo', path: '/viaggi/stopover-golfo' },
    { titolo: 'Dubai e il confronto dei programmi', path: '/destinazioni/emirati-arabi-uniti/dubai' },
    { titolo: 'Doha', path: '/destinazioni/qatar/doha' },
    { titolo: 'Jeddah', path: '/destinazioni/arabia-saudita/jeddah' },
    { titolo: 'Il creek in abra', path: '/esperienze/emirati-arabi-uniti/creek-souq-dubai' },
    { titolo: 'La Grande Moschea Sheikh Zayed', path: '/esperienze/emirati-arabi-uniti/moschea-sheikh-zayed' },
    { titolo: 'Il Louvre Abu Dhabi', path: '/esperienze/emirati-arabi-uniti/louvre-abu-dhabi' },
  ],
  consultate: 'Consultate il 2 novembre 2026. I programmi stopover cambiano spesso: prima di prenotare, guarda sempre il sito della compagnia.',
  nonVerificato: [
    'Condizioni attuali dei programmi stopover: i siti di Emirates, Etihad, Qatar Airways, Discover Qatar e Saudia non si sono lasciati leggere, riporto quelle verificate per il sito a settembre 2026',
    'Prezzi e orari aggiornati di Burj Khalifa, Museo del Futuro, Louvre Abu Dhabi e del Museo di Arte Islamica',
    'Orari delle gallerie di Alserkal Avenue e dell\'ospedale dei falchi',
    'Ospedali di Doha e Jeddah con telefono',
    'Nomi degli hotel del viaggio: non annotati',
    'Prezzi di metro, taxi ed eSIM',
  ],
  fonti: [
    { id: 'vs-are', titolo: 'Viaggiare Sicuri, scheda Emirati Arabi Uniti (agg. 06/07/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/ARE.json' },
    { id: 'vs-qat', titolo: 'Viaggiare Sicuri, scheda Qatar (revisione 29/09/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/QAT.json' },
    { id: 'vs-sau', titolo: 'Viaggiare Sicuri, scheda Arabia Saudita (agg. 21/09/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/SAU.json' },
    { id: 'uk-are', titolo: 'UK Foreign Office, UAE: getting help', url: 'https://www.gov.uk/foreign-travel-advice/united-arab-emirates/getting-help' },
    { id: 'uk-qat', titolo: 'UK Foreign Office, Qatar: getting help', url: 'https://www.gov.uk/foreign-travel-advice/qatar/getting-help' },
    { id: 'uk-sau', titolo: 'UK Foreign Office, Saudi Arabia: getting help', url: 'https://www.gov.uk/foreign-travel-advice/saudi-arabia/getting-help' },
    { id: 'uk-are-med', titolo: 'UK Government, List of medical facilities in the UAE (10/03/2023)', url: 'https://www.gov.uk/government/publications/united-arab-emirates-list-of-medical-facilities/list-of-medical-facilities-in-the-uae' },
    { id: 'mia', titolo: 'Museum of Islamic Art, visita', url: 'https://mia.org.qa/en/visit/' },
    { id: 'sito-dubai', titolo: 'Make It Yours World, Dubai e i programmi stopover (verificati a settembre 2026)', url: 'https://makeityoursworld.vercel.app/destinazioni/emirati-arabi-uniti/dubai' },
    { id: 'ramadan', titolo: 'Timeanddate, inizio del Ramadan 2027', url: 'https://timeanddate.com/holidays/morocco/ramadan-begins' },
    { id: 'osm', titolo: 'OpenStreetMap (coordinate, geocoder Photon)', url: 'https://photon.komoot.io' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
