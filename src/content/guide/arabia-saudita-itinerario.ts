import type { Guida } from './types'

/**
 * Guida PDF «Arabia Saudita». Il racconto viene da
 * src/content/viaggi/22-arabia-saudita-itinerario.md e dalle schede del sito.
 * Emergenze, ambasciata, consolato, regole d'ingresso e sicurezza sono stati
 * ricontrollati il 2/11/2026 su Viaggiare Sicuri e sul Foreign Office britannico.
 * Attenzione: da luglio 2026 Viaggiare Sicuri sconsiglia la provincia di Aseer
 * (giorni 9-11), e la guida lo dice in apertura e nelle schede di quei giorni.
 *
 * Distanze e tempi: router OSRM su dati OpenStreetMap, traffico libero.
 * Coordinate: src/content/mappe/coordinate.ts e OpenStreetMap (Photon).
 */

export const guidaArabiaSaudita: Guida = {
  slug: 'arabia-saudita-itinerario',
  tripSlug: 'arabia-saudita-itinerario',
  paese: 'Arabia Saudita',
  titolo: 'Arabia Saudita',
  sottotitolo: 'Jeddah, Hegra e AlUla, Riyadh e Diriyah, l\'Edge of the World e le montagne dell\'Asir. Dodici giorni con tre voli interni.',
  autore: 'Rick',
  verificatoAl: 'novembre 2026',
  intro: [
    'Ho fatto questo giro con amici, in dodici giorni e con tre voli interni: Jeddah e il suo centro storico, AlUla con Hegra, Riyadh con Diriyah e l\'Edge of the World, poi le montagne dell\'Asir.',
    'Prima di tutto un avviso che nel mio viaggio non c\'era. Da luglio 2026 Viaggiare Sicuri raccomanda di non andare nelle province di Jazan, Najran e Aseer, colpite da attacchi Houthi. Abha, Rijal Almaa e Habala (giorni 9-11) sono nella provincia di Aseer: oggi quei tre giorni non li rifarei. Controlla la scheda prima di partire.',
    'Qui trovi le strade e i voli, i posti con coordinate, le regole del paese (visto, alcol, abbigliamento, foto), i numeri di emergenza, il Consolato a Jeddah e l\'Ambasciata a Riad. L\'Arabia Saudita cambia regole più in fretta di qualunque guida: per Hegra e Diriyah prezzi e orari vanno presi dal sito ufficiale.',
  ],
  cosaInPiu: [
    'Una scheda per giorno con voli, strade, chilometri e coordinate',
    'L\'avviso di Viaggiare Sicuri sull\'Asir e le zone di confine, aggiornato a settembre 2026',
    'Visto turistico o visto stopover gratuito: quale ti serve',
    'Regole su alcol, Mecca, abbigliamento, foto e Ramadan',
    'Numeri di emergenza, Consolato Generale a Jeddah e Ambasciata a Riad con i cellulari di reperibilità',
    'Lista per la valigia e frasario arabo',
  ],
  tappe: [
    { nome: 'Jeddah', gps: [21.48604, 39.1877], giorno: 'G1 · G2', etichetta: 'sinistra' },
    { nome: 'AlUla · Hegra', gps: [26.62558, 37.91479], giorno: 'G3-G5', etichetta: 'sinistra' },
    { nome: 'Riyadh', gps: [24.64714, 46.7107], giorno: 'G6 · G7', etichetta: 'destra' },
    { nome: 'Edge of the World', gps: [24.95004, 46.00264], giorno: 'G8', etichetta: 'sopra' },
    { nome: 'Abha · Asir', gps: [18.21643, 42.50436], giorno: 'G9-G11', etichetta: 'destra' },
  ],
  giorni: [
    {
      numero: 1,
      titolo: 'Arrivo a Jeddah',
      paginaSito: '/destinazioni/arabia-saudita/jeddah',
      racconto:
        'Siamo atterrati al King Abdulaziz (JED). Serata leggera sulla Corniche, con il getto della Fontana di Re Fahd, e cena di pesce. Il giovedì sera le famiglie stendono i tappeti sul prato, accendono i barbecue e restano fino a mezzanotte.',
      tratte: [{ da: 'Aeroporto King Abdulaziz (JED)', a: 'Al-Balad', km: 23, minuti: 24, mezzo: 'taxi, Uber o Careem' }],
      luoghi: [
        { nome: 'Fontana di Re Fahd, Corniche', gps: [21.51566, 39.14505], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Vicino ad Al-Balad per la parte storica, o sulla Corniche per il mare. La città è dispersa: la posizione conta. Nome dell\'hotel non annotato.',
      nota: 'L\'alcol non esiste in nessun hotel e introdurlo è un reato grave: non portarne in valigia.',
    },
    {
      numero: 2,
      titolo: 'Al-Balad',
      paginaSito: '/destinazioni/arabia-saudita/jeddah',
      racconto:
        'Mattina nei quartieri nuovi o al mare, pomeriggio in Al-Balad: case-torre di pietra corallina con i rawashin, le facciate di teak intagliato arrivate dall\'India sulle navi dei pellegrini. Di giorno è polveroso e pieno di impalcature, poi nell\'ultima ora di luce cambia tutto. Da vedere la Casa Nassif, con la rampa per i cammelli, e il souq Al-Alawi.',
      tratte: [],
      senzaStrada: 'Al-Balad si gira a piedi. Per arrivarci, taxi o app.',
      luoghi: [
        {
          nome: 'Al-Balad, Jeddah storica (UNESCO)',
          gps: [21.48604, 39.1877],
          biglietto: 'Quartiere libero; le case-museo hanno biglietti contenuti (prezzi non verificati)',
          fonti: ['osm'],
        },
        {
          nome: 'Casa Nassif (Bayt Nassif)',
          gps: [21.48396, 39.18767],
          nota: 'Orari e biglietto non verificati: chiedi sul posto.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Jeddah.',
    },
    {
      numero: 3,
      titolo: 'Volo per AlUla',
      paginaSito: '/destinazioni/arabia-saudita/alula',
      racconto:
        'Volo interno su AlUla (ULH), circa un\'ora e mezza; in alternativa sette ore di strada. Pomeriggio nella città vecchia di fango ai piedi della cittadella ed Elephant Rock al tramonto, il ritrovo serale con i fuochi accesi e le sedute nella sabbia.',
      tratte: [
        { da: 'Jeddah (JED)', a: 'AlUla (ULH)', km: 547, minuti: 90, mezzo: 'volo', nelMioViaggio: 'circa 1 ora e mezza; in auto circa 7 ore' },
      ],
      luoghi: [
        { nome: 'Città vecchia di AlUla', gps: [26.62558, 37.91479], fonti: ['osm'] },
        { nome: 'Elephant Rock (Jabal al-Fil)', gps: [26.68934, 37.98155], nota: 'Vai al tramonto.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'AlUla, da prenotare molto prima: strutture poche e care. Qui serve l\'auto a noleggio, con patente internazionale.',
    },
    {
      numero: 4,
      titolo: 'Hegra',
      paginaSito: '/esperienze/arabia-saudita/hegra-alula',
      racconto:
        'Il motivo del viaggio. A Hegra si entra solo con visita guidata contingentata, sui bus del sito con un rawi, un narratore locale. Centoundici tombe nabatee scavate nell\'arenaria, con le iscrizioni sull\'architrave ancora leggibili. La Qasr al-Farid, rimasta incompiuta, fa vedere che scolpivano dall\'alto verso il basso.',
      tratte: [{ da: 'Aeroporto di AlUla', a: 'Hegra', km: 54, minuti: 69 }],
      luoghi: [
        {
          nome: 'Hegra (Al-Hijr), UNESCO',
          gps: [26.79136, 37.95989],
          biglietto: 'Solo visita guidata, da prenotare online settimane prima (prezzo non verificato)',
          nota: 'Prenota Hegra prima dei voli: tutto l\'itinerario ruota attorno a quella data.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'AlUla.',
    },
    {
      numero: 5,
      titolo: 'Jabal Ikmah, Dadan e l\'oasi',
      paginaSito: '/destinazioni/arabia-saudita/alula',
      racconto:
        'Jabal Ikmah al mattino presto, con la luce radente sulle centinaia di iscrizioni in dadanitico, lihyanita, nabateo e arabo antico. Poi Dadan, la capitale più antica di Hegra, con le tombe scavate in alto nella parete. Il pomeriggio nell\'oasi di AlUla, tra le palme, a comprare datteri dai produttori.',
      tratte: [],
      senzaStrada: 'Spostamenti brevi in auto nella valle di AlUla.',
      luoghi: [
        { nome: 'Jabal Ikmah', gps: [26.6856, 37.903], nota: 'Al mattino presto. Accesso e orari non verificati.', fonti: ['osm'] },
        { nome: 'Dadan', nota: 'Coordinate non verificate: è nella valle a nord della città vecchia.', fonti: [] },
      ],
      mangiare: [],
      dormire: 'AlUla.',
    },
    {
      numero: 6,
      titolo: 'Volo per Riyadh, Museo Nazionale e Masmak',
      paginaSito: '/destinazioni/arabia-saudita/riyadh-diriyah',
      racconto:
        'Volo AlUla-Riyadh, circa due ore. Ci siamo sistemati in centro, verso Olaya o King Fahd Road. Il pomeriggio al Museo Nazionale, da vedere prima di Diriyah, poi il Masmak, la fortezza di fango tra i grattacieli da cui nel 1902 partì la riconquista di Ibn Saud.',
      tratte: [
        { da: 'AlUla (ULH)', a: 'Riyadh (RUH)', km: 877, minuti: 120, mezzo: 'volo', nelMioViaggio: 'circa 2 ore' },
        { da: 'Museo Nazionale', a: 'Masmak', km: 3, minuti: 4 },
      ],
      luoghi: [
        { nome: 'Museo Nazionale Saudita', gps: [24.64714, 46.7107], nota: 'Orari e biglietto non verificati.', fonti: ['osm'] },
        { nome: 'Forte Masmak', gps: [24.63125, 46.71333], nota: 'Orari non verificati.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Riyadh, zona Olaya o King Fahd Road. Senza Uber o Careem non ci si muove: la città si estende per decine di chilometri.',
    },
    {
      numero: 7,
      titolo: 'Diriyah',
      paginaSito: '/destinazioni/arabia-saudita/riyadh-diriyah',
      racconto:
        'Mattina libera: il souq Al-Zal, Deira, lo skybridge del Kingdom Centre. Il tardo pomeriggio a Diriyah, la prima capitale dei Saud, tutta in mattoni di fango e paglia, distrutta dagli ottomani nel 1818 e patrimonio UNESCO dal 2010. Nell\'ultima ora di luce il fango passa dall\'ocra all\'arancione.',
      tratte: [
        { da: 'Museo Nazionale', a: 'Diriyah (At-Turaif)', km: 22, minuti: 22, mezzo: 'taxi o app' },
      ],
      luoghi: [
        { nome: 'Kingdom Centre, skybridge', gps: [24.71135, 46.67441], nota: 'Biglietto e orari non verificati.', fonti: ['osm'] },
        { nome: 'Diriyah, At-Turaif (UNESCO)', gps: [24.733, 46.57338], biglietto: 'Biglietto d\'ingresso con i musei interni (prezzo non verificato)', nota: 'Vai nel tardo pomeriggio: a mezzogiorno il fango riverbera.', fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Riyadh.',
    },
    {
      numero: 8,
      titolo: 'L\'Edge of the World',
      paginaSito: '/destinazioni/arabia-saudita/riyadh-diriyah',
      racconto:
        'Un\'ora e mezza da Riyadh, l\'ultima mezz\'ora su pista, con un 4x4 e un autista. In cima alla scarpata del Tuwaiq c\'è un salto di trecento metri e poi la pianura fino alla foschia: nessun parapetto, nessuna biglietteria. Siamo andati nel pomeriggio e restati al tramonto, sapendo che il rientro su pista si fa al buio.',
      tratte: [{ da: 'Riyadh, centro', a: 'Edge of the World', km: 122, minuti: 234, mezzo: '4x4 con autista', nelMioViaggio: 'circa 1 ora e mezza, l\'ultima mezz\'ora su pista' }],
      luoghi: [
        {
          nome: 'Edge of the World (Jebel Fihrayn)',
          gps: [24.95004, 46.00264],
          biglietto: 'Gratis',
          nota: 'Il bordo è roccia friabile e senza protezioni. Niente segnaletica, campo a tratti: non andarci da solo.',
          fonti: ['osm'],
        },
      ],
      mangiare: [],
      dormire: 'Riyadh.',
      costiNoti: ['Escursione con 4x4 e autista: 300-600 SAR a persona (prezzi del mio viaggio)'],
      nota: 'Il tempo OSRM è lungo perché segue le piste: conta sulla stima dell\'autista.',
    },
    {
      numero: 9,
      titolo: 'Volo per Abha (oggi sconsigliato)',
      paginaSito: '/destinazioni/arabia-saudita/abha-asir',
      racconto:
        'Volo su Abha (AHB), circa un\'ora e mezza. Sopra i 2.000 metri: montagne verdi, nebbie, terrazzamenti. Il pomeriggio tra le case dipinte e il mercato; il qatt asiri, i motivi colorati dipinti dalle donne negli interni, è patrimonio immateriale UNESCO.',
      tratte: [{ da: 'Riyadh (RUH)', a: 'Abha (AHB)', km: 856, minuti: 90, mezzo: 'volo', nelMioViaggio: 'circa 1 ora e mezza' }],
      luoghi: [{ nome: 'Aeroporto di Abha (AHB)', gps: [18.24166, 42.65377], fonti: ['osm'] }],
      mangiare: [],
      dormire: 'Abha, offerta urbana normale e prezzi contenuti.',
      nota: 'Da luglio 2026 Viaggiare Sicuri raccomanda di non andare nella provincia di Aseer, dove è Abha. Prima di prenotare questi tre giorni controlla la scheda aggiornata.',
    },
    {
      numero: 10,
      titolo: 'Rijal Almaa e Habala (oggi sconsigliati)',
      paginaSito: '/destinazioni/arabia-saudita/abha-asir',
      racconto:
        'Una giornata a Rijal Almaa, il villaggio di pietra e quarzo su più piani con il museo nelle case restaurate. Nel pomeriggio il giro dei villaggi di montagna in auto fino a Habala, sulla scarpata, che un tempo si raggiungeva solo con scale di corda.',
      tratte: [{ da: 'Abha', a: 'Rijal Almaa', km: 51, minuti: 49 }],
      luoghi: [
        { nome: 'Rijal Almaa', gps: [18.21249, 42.27334], nota: 'Orari del museo non verificati.', fonti: ['osm'] },
        { nome: 'Habala', gps: [18.03064, 42.85352], fonti: ['osm'] },
      ],
      mangiare: [],
      dormire: 'Abha.',
      nota: 'Provincia di Aseer: vale l\'avviso di Viaggiare Sicuri del giorno 9.',
    },
    {
      numero: 11,
      titolo: 'Le montagne dell\'Asir (oggi sconsigliate)',
      paginaSito: '/destinazioni/arabia-saudita/abha-asir',
      racconto:
        'La giornata lenta: la funivia dell\'Asir, i sentieri sul Jebel Sawda, il punto più alto del paese, e il mercato del bestiame e dei fiori, dove i venditori portano ghirlande sul capo. Il miele dell\'Asir costa caro; l\'areeka è il pane con miele e burro chiarificato.',
      tratte: [],
      senzaStrada: 'Giro in auto intorno ad Abha.',
      luoghi: [],
      mangiare: [],
      dormire: 'Abha.',
      nota: 'La zona di confine con lo Yemen è da evitare in ogni caso.',
    },
    {
      numero: 12,
      titolo: 'Rientro',
      racconto: 'Volo da Abha con scalo a Jeddah o Riyadh, e rientro. Se salti l\'Asir, il rientro parte direttamente da Riyadh.',
      tratte: [],
      senzaStrada: 'Volo con scalo.',
      luoghi: [],
      mangiare: [],
      dormire: 'Nessun pernottamento.',
    },
  ],
  mappa: {
    percorso: ['Jeddah', 'AlUla', 'Riyadh', 'Edge'],
    ritorno: ['Riyadh', 'Abha'],
    legenda: 'Linea piena: Jeddah, AlUla e Riyadh (voli interni) con la gita all\'Edge of the World. Tratteggio: l\'Asir, oggi sconsigliato da Viaggiare Sicuri.',
    notaTempi: 'Le tratte in volo hanno i chilometri in linea d\'aria tra gli aeroporti e i tempi annotati nel mio viaggio. Quelle su strada: OSRM su OpenStreetMap, senza traffico.',
    notaTempiFonti: ['osrm'],
    scalaKm: 200,
  },
  primaDiPartire: [
    {
      titolo: 'Documenti e ingresso',
      righe: [
        { voce: 'Passaporto', valore: 'Almeno 6 mesi di validità residua.', fonti: ['vs'] },
        { voce: 'Visto turistico', valore: 'Online su visa.visitsaudi.com, da fare prima di partire (esiste anche il visto all\'arrivo a Riyadh e Jeddah per i residenti Schengen). Nel mio viaggio costava circa 535 SAR, assicurazione inclusa, con un anno di validità e ingressi multipli.', fonti: ['vs'] },
        { voce: 'Visto stopover', valore: 'Gratis con biglietto Saudia o flynas: 4 giorni in 3 mesi. Basta per Jeddah e AlUla, non per questo giro.', fonti: ['vs'] },
        { voce: 'Assicurazione', valore: 'Obbligatoria. Quella proposta con il visto può non coprire un ricovero: verifica la tua copertura.', fonti: ['vs'] },
        { voce: 'Patente', valore: 'Serve quella internazionale (Ginevra 1949), anche per noleggiare.', fonti: ['vs'] },
        { voce: 'Oggetti', valore: 'Simboli di altre religioni (croci, Bibbia) di solito vengono fermati alla frontiera; vietato il materiale pornografico, anche cataloghi.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Regole che contano',
      righe: [
        { voce: 'Alcol', valore: 'Vietato importarlo, produrlo, possederlo e berlo, ovunque. Pene molto dure.', fonti: ['vs'] },
        { voce: 'Mecca e Medina', valore: 'Mecca è vietata ai non musulmani, con uscite obbligatorie sulla strada e posti di blocco. A Medina è interdetta la zona della moschea del Profeta.', fonti: ['vs'] },
        { voce: 'Abbigliamento', valore: 'Agli stranieri si chiede un abbigliamento rispettoso: spalle e ginocchia coperte, niente abiti aderenti. Le donne straniere non sono obbligate all\'abaya.', fonti: ['vs'] },
        { voce: 'Foto', valore: 'Chiedi sempre prima di fotografare le persone, le donne in particolare, e accetta il no.' },
        { voce: 'Parole', valore: 'Non sono ammesse critiche alla religione islamica, al clero e alla casa reale.', fonti: ['vs'] },
        { voce: 'Ramadan', valore: 'Più rigido che nel resto del Golfo: di giorno è vietato a tutti mangiare e bere in pubblico. Nel 2027 inizio previsto intorno all\'8 febbraio.', fonti: ['ramadan'] },
      ],
    },
    {
      titolo: 'Sicurezza (Viaggiare Sicuri, settembre 2026)',
      righe: [
        { voce: 'Sconsigliate', valore: 'Province di Jazan, Najran e Aseer (Abha) e il confine con lo Yemen: da luglio 2026 attacchi Houthi a impianti energetici, con feriti.', fonti: ['vs'] },
        { voce: 'Altre zone', valore: 'Confini con Iraq e Bahrein, area di Qatif. Vietata la fascia di 20 km dal confine nord.', fonti: ['vs'] },
        { voce: 'In generale', valore: 'Ordine pubblico sotto controllo, ma il rischio terrorismo non è escluso: evita le vicinanze delle moschee il venerdì e nelle feste, tieni il telefono acceso, segui gli avvisi di «early warning» della Protezione civile.', fonti: ['vs'] },
        { voce: 'Segnalati', valore: 'Comunica la tua presenza al Consolato di Jeddah (anagrafe.gedda@esteri.it) con date e indirizzo, e registrati su Dove siamo nel mondo.', fonti: ['vs'] },
      ],
    },
    {
      titolo: 'Soldi, telefono, clima',
      righe: [
        { voce: 'Valuta', valore: 'Riyal saudita (SAR). Carte e contactless ovunque in città, taxi compresi; contanti per souq e villaggi.', fonti: ['vs'] },
        { voce: 'Telefono', valore: 'Copertura buona lungo le direttrici; le chiamate WhatsApp funzionano, a differenza di Emirati e Qatar.' },
        { voce: 'Fuso orario', valore: '2 ore avanti all\'Italia d\'inverno, 1 d\'estate.', fonti: ['vs'] },
        { voce: 'Clima', valore: 'Da novembre a marzo; in estate a Riyadh si superano i 50 gradi e Jeddah è umidissima.', fonti: ['vs'] },
        { voce: 'Acqua', valore: 'Quella del rubinetto non si beve.' },
      ],
    },
  ],
  emergenze: {
    numeri: [
      { voce: 'Emergenze (numero unico)', valore: '911', fonti: ['uk-sau'] },
      { voce: 'Senza SIM saudita', valore: '112', fonti: ['uk-sau'] },
      { voce: 'Polizia · Vigili del fuoco · Ambulanza', valore: '999 · 998 · 997', fonti: ['vs'] },
    ],
    ambasciata: [
      {
        nome: 'Consolato Generale d\'Italia a Gedda (Jeddah)',
        cosa: 'Competente per Jeddah, Mecca, Medina, Asir, Jazan, Najran e il nord',
        indirizzo: 'Prince Faisal Bin Fahad Street, edificio 6535, Al Shati, Jeddah',
        telefono: '+966 12 642 1451 · emergenze +966 50 667 8310 · anagrafe.gedda@esteri.it',
        stato: 'ufficiale',
        avviso: 'Aperto al pubblico dom-gio 9:30-13:00. AlUla rientra nel distretto di Medina, quindi è di competenza di Jeddah.',
        fonti: ['vs'],
      },
      {
        nome: 'Ambasciata d\'Italia a Riad',
        cosa: 'Competente per Riyadh e il resto del Regno',
        indirizzo: '3639 Al Adamri Street, Diplomatic Quarter, Riyadh 11693',
        telefono: '+966 11 488 1212 · emergenze +966 50 525 4792 · riad.consolare@esteri.it',
        web: 'ambriad.esteri.it',
        stato: 'ufficiale',
        avviso: 'Aperto al pubblico dom-gio 9:30-12:00.',
        fonti: ['vs'],
      },
    ],
    ospedali: [
      { nome: 'Ospedali', cosa: 'Nessun ospedale con numero verificato', stato: 'ufficiale', avviso: 'Le strutture saudite sono di livello occidentale, con molti ospedali privati a pagamento per stranieri. Chiama il 911 o chiedi all\'hotel.', fonti: ['vs'] },
    ],
  },
  contatti: [
    {
      gruppo: 'Enti e trasporti',
      voci: [
        { nome: 'Visit Saudi, visti', cosa: 'Visto turistico elettronico', web: 'visa.visitsaudi.com', stato: 'ufficiale', fonti: ['vs'] },
        { nome: 'Saudia · flynas', cosa: 'Voli interni e visto stopover gratuito', web: 'saudia.com · flynas.com', stato: 'ufficiale', fonti: ['vs'] },
        { nome: 'Uber · Careem', cosa: 'Taxi via app nelle città', stato: 'ufficiale', avviso: 'Dato del mio viaggio.', fonti: [] },
      ],
    },
  ],
  budget: {
    righe: [
      { voce: 'Voli Italia-Jeddah e ritorno' },
      { voce: 'Visto turistico', costo: 'circa 535 SAR', nota: 'nel mio viaggio, assicurazione inclusa' },
      { voce: 'Voli interni (3)' },
      { voce: 'Hotel Jeddah (2 notti)' },
      { voce: 'Hotel AlUla (3 notti)', nota: 'il più caro' },
      { voce: 'Hegra, visita guidata' },
      { voce: 'Auto a noleggio ad AlUla' },
      { voce: 'Hotel Riyadh (3 notti)' },
      { voce: 'Diriyah, At-Turaif' },
      { voce: 'Edge of the World in 4x4', costo: '300-600 SAR', nota: 'a persona' },
      { voce: 'Abha e Asir (se ci vai)' },
      { voce: 'Uber e Careem' },
      { voce: 'Pasti' },
      { voce: 'Datteri e miele' },
    ],
    nota: 'Nei miei appunti ci sono solo i prezzi del visto e dell\'escursione all\'Edge of the World: il resto lo riempi tu.',
  },
  valigia: [
    {
      gruppo: 'Documenti',
      voci: ['Passaporto con 6 mesi di validità', 'Visto stampato', 'Assicurazione sanitaria', 'Patente internazionale', 'Prenotazione di Hegra', 'Carta di credito contactless'],
    },
    {
      gruppo: 'Vestiti',
      voci: ['Pantaloni lunghi leggeri', 'Maglie con le maniche, non aderenti', 'Strato caldo per le sere nel deserto', 'Giacca e strati per l\'Asir (in inverno freddo e nebbia)', 'Scarpe chiuse comode', 'Cappello'],
    },
    {
      gruppo: 'Zaino e tecnica',
      voci: ['Borraccia', 'Crema solare', 'Power bank', 'Mappe offline', 'Adattatore universale', 'Torcia per il rientro dall\'Edge of the World', 'Niente alcol e niente oggetti religiosi in vista'],
    },
  ],
  lingua: {
    nome: 'Arabo, traslitterato',
    pronuncia: 'L\'inglese funziona in hotel, aeroporti e con i giovani. «kh» come la jota spagnola, «ʿ» è un suono di gola.',
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
        { it: 'Posso fare una foto?', loc: 'mumkin ṣūra?' },
        { it: 'Se Dio vuole', loc: 'inshallah' },
      ],
    },
    {
      gruppo: 'Muoversi e comprare',
      frasi: [
        { it: 'Dov\'è…?', loc: 'wēn…?' },
        { it: 'Quanto costa?', loc: 'bikam?' },
        { it: 'Datteri', loc: 'tamr' },
        { it: 'Basta così', loc: 'bas' },
      ],
    },
    {
      gruppo: 'A tavola',
      frasi: [
        { it: 'Acqua', loc: 'moya' },
        { it: 'Caffè arabo', loc: 'gahwa' },
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
    { titolo: 'Il viaggio completo', path: '/viaggi/arabia-saudita-itinerario' },
    { titolo: 'Arabia Saudita, la scheda paese', path: '/destinazioni/arabia-saudita' },
    { titolo: 'Jeddah', path: '/destinazioni/arabia-saudita/jeddah' },
    { titolo: 'AlUla e Hegra', path: '/destinazioni/arabia-saudita/alula' },
    { titolo: 'Hegra, la Petra senza fila', path: '/esperienze/arabia-saudita/hegra-alula' },
    { titolo: 'Riyadh e Diriyah', path: '/destinazioni/arabia-saudita/riyadh-diriyah' },
  ],
  consultate: 'Consultate il 2 novembre 2026. L\'Arabia Saudita cambia regole spesso: controlla Viaggiare Sicuri e i siti ufficiali prima di partire.',
  nonVerificato: [
    'Prezzi e orari di Hegra, Diriyah, Museo Nazionale, Masmak, Casa Nassif e Kingdom Centre: i siti ufficiali non si sono lasciati leggere',
    'Costo attuale del visto turistico: il prezzo è quello del mio viaggio',
    'Coordinate di Dadan',
    'Ospedali con telefono a Jeddah, AlUla, Riyadh e Abha',
    'Nomi degli hotel: non annotati',
    'Durata dei voli interni: tempi del mio viaggio; i chilometri sono in linea d\'aria',
  ],
  fonti: [
    { id: 'vs', titolo: 'Viaggiare Sicuri, scheda Arabia Saudita (agg. 21/09/2026)', url: 'https://www.viaggiaresicuri.it/schede_paese/SAU.json' },
    { id: 'uk-sau', titolo: 'UK Foreign Office, Saudi Arabia: getting help', url: 'https://www.gov.uk/foreign-travel-advice/saudi-arabia/getting-help' },
    { id: 'ramadan', titolo: 'Timeanddate, inizio del Ramadan 2027', url: 'https://timeanddate.com/holidays/morocco/ramadan-begins' },
    { id: 'osm', titolo: 'OpenStreetMap (coordinate, geocoder Photon)', url: 'https://photon.komoot.io' },
    { id: 'osrm', titolo: 'OSRM su dati OpenStreetMap (distanze e tempi, traffico libero)', url: 'https://router.project-osrm.org' },
  ],
}
