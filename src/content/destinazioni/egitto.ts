import type { Destinazione } from '@/lib/types'

// Destinazioni dell'Egitto, costruite su ricerca documentale per le guide
// "egitto-mare-luxor-cairo" (71) ed "egitto-completo" (72), entrambi fatti
// dall'autore. miaEsperienza è assente e la UI mostra il placeholder.
// Prezzi indicativi a ottobre 2026, in lire egiziane (EGP) per turisti stranieri.

export const destinazioniEgitto: Destinazione[] = [
  {
    slug: 'cairo',
    paeseSlug: 'egitto',
    ordine: 1,
    nome: 'Il Cairo',
    tipologia: ['città', 'musei', 'cultura islamica'],
    giorniConsigliati: '2-3 giorni, piramidi escluse',
    visitataPersonalmente: true,
    introduzione:
      'Venti milioni di abitanti, traffico continuo e mille anni di architettura islamica: il Cairo è la porta d\'ingresso del Paese e la città dove si trovano i due grandi musei egizi.',
    percheAndarci:
      'Per il Grand Egyptian Museum con il tesoro completo di Tutankhamon, per il Cairo islamico tra moschee e madrase mamelucche, per il Cairo copto e per la sera al Khan el-Khalili.',
    cosaVedere: [
      'Il Grand Egyptian Museum (GEM) a Giza, con la scalinata monumentale e le gallerie di Tutankhamon',
      'Il Museo Egizio di piazza Tahrir, ancora pieno di pezzi straordinari',
      'La Cittadella di Saladino e la moschea di Muhammad Ali',
      'Il Cairo islamico: la moschea di Ibn Tulun, il complesso del sultano Hassan, la via al-Muizz',
      'Il Cairo copto: la Chiesa Sospesa e la sinagoga Ben Ezra',
      'Il Museo nazionale della civiltà egizia (NMEC), con la sala delle mummie reali',
    ],
    cosaFare: [
      'Passeggiare la sera nel bazar del Khan el-Khalili e bere un tè al caffè El Fishawy',
      'Un tramonto in feluca sul Nilo dalla Corniche',
      'Lo spettacolo di danza sufi Tannoura al Wekalet El Ghouri (conviene controllare prima i giorni)',
    ],
    doveDormire:
      'Per chi ha poco tempo conviene dormire a Giza, vicino alle piramidi e al GEM. Per chi resta di più, Zamalek (isola sul Nilo, tranquilla e piena di locali) o Downtown. Economiche: guesthouse con vista piramidi a Nazlet el-Semman · fascia media: hotel di Zamalek e Garden City · lusso: Marriott Mena House a Giza, i grandi hotel sul Nilo.',
    doveMangiare:
      'Koshari da Abou Tarek a Downtown, ful e taameya nei chioschi del mattino, cucina egiziana tradizionale da Zooba o Abou El Sid, pesce e mezze nei ristoranti di Zamalek.',
    comeArrivare: "Aeroporto internazionale del Cairo (CAI); dalla primavera 2025 anche il Sphinx International Airport, vicino a Giza, servito da alcuni voli. Dal CAI la metro non arriva ai terminal: si usano Uber o Careem dal parcheggio delle partenze, 30-60 minuti (fino a 90 nelle ore di punta) e indicativamente 200-400 EGP per il centro, 300-500 EGP fino a Giza. I taxi dei banchi ufficiali costano di più ma hanno il prezzo fissato prima; chi offre passaggi dentro il terminal va ignorato. Da Luxor e Assuan si arriva in aereo in un'ora o in treno notte.",
    comeSpostarsi:
      'Uber e Careem, economici e senza trattative. Metropolitana utile per Downtown e il Cairo copto (fermata Mar Girgis). Evitare di guidare.',
    periodoMigliore: 'da ottobre ad aprile',
    costi:
      "Budget basso 30-45 € al giorno (guesthouse, koshari e street food, metro); medio 70-120 € (hotel a Zamalek o Giza, Uber, ristoranti); alto da 200 € (grandi hotel sul Nilo, guida privata). Biglietti 2026: GEM 1.830 EGP (circa 35 $) dal 1° novembre 2026, con fascia oraria da prenotare online; Museo Egizio di Tahrir 550 EGP; Cittadella 550 EGP; NMEC circa 500 EGP. A 60 EGP per euro, 600 EGP sono circa 10 €.",
    erroriDaEvitare: [
      'Arrivare al GEM senza biglietto prenotato: gli ingressi sono a fascia oraria e i giorni di punta si esauriscono',
      'Accettare la «guida gratuita» che si offre per strada o il «negozio di papiri di mio fratello»',
      'Prendere un taxi senza tassametro senza concordare il prezzo: meglio Uber o Careem',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: "Grand Egyptian Museum (GEM)",
        testo: "Il museo nuovo vicino alle piramidi, con la scalinata monumentale e le gallerie dedicate a Tutankhamon. È il museo da vedere per primo.",
        come: "Sta a Giza, raggiungibile dal centro con Uber o taxi. Il biglietto ha data e orario d'ingresso; l'unico sito ufficiale di vendita online è tickets.gem.eg, ma ci sono anche biglietterie sul posto.",
        quando: "Gallerie aperte 9-18; mercoledì e sabato fino alle 21; ultimo ingresso un'ora prima della chiusura delle gallerie (2026). Meglio all'apertura.",
        tempo: "3-4 ore",
        costo: "1.830 EGP, circa 30 € (35 $), dal 1° novembre 2026 (prima 1.570 EGP); solo con prenotazione a fascia oraria.",
        orari: "Gallerie aperte tutti i giorni 9-18, mercoledì e sabato fino alle 21; ultimo ingresso un'ora prima (2026).",
        lat: 29.995,
        lng: 31.1193,
        url: "https://tickets.gem.eg/",
        consiglio: "Prenotare l'orario d'ingresso prima di partire, solo sul sito ufficiale, e abbinarlo alle piramidi, che sono a pochi chilometri.",
      },
      {
        nome: "Museo Egizio di piazza Tahrir",
        testo: "Il museo storico inaugurato nel 1902, con migliaia di pezzi in sale piene e un po' vecchio stile. Resta pieno di oggetti straordinari anche dopo il trasferimento dei pezzi di Tutankhamon.",
        come: "Metro fino a Sadat, a piedi dalla piazza. Audioguida o guida in loco.",
        quando: "Aperto tutti i giorni 9-17, biglietteria fino alle 16; durante il Ramadan 9-16 (2026). Meglio la mattina presto, prima dei gruppi.",
        tempo: "2 ore",
        costo: "550 EGP (circa 9 €) per adulti stranieri, 275 per studenti; audioguida 75 EGP (2026)",
        orari: "Tutti i giorni 9-17, biglietteria fino alle 16; durante il Ramadan 9-16 (2026).",
        lat: 30.04778,
        lng: 31.23333,
        url: "https://egymonuments.gov.eg/en/museums/egyptian-museum/",
        consiglio: "Scegliere poche sale e vederle bene, invece di correre su tutto il museo.",
      },
      {
        nome: "Cittadella di Saladino e moschea di Muhammad Ali",
        testo: "La fortezza che Saladino fece iniziare nel 1176, sulla collina che domina la città, con la moschea ottomana di Muhammad Ali. Dal bordo, nelle giornate limpide, la vista arriva fino alle piramidi.",
        come: "Taxi o Uber fino all'ingresso. Si gira a piedi dentro la cittadella, con scarpe comode.",
        quando: "Aperta tutti i giorni 8-17 (2026). Il pomeriggio ha la luce migliore.",
        tempo: "2 ore",
        costo: "550 EGP (circa 9 €) per adulti stranieri, 275 per studenti (2026)",
        orari: "Tutti i giorni 8-17 (2026).",
        lat: 30.02944,
        lng: 31.26139,
        url: "https://egymonuments.gov.eg/en/archaeological-sites/cairo-citadel/",
      },
      {
        nome: "Cairo islamico e via al-Muizz",
        testo: "La strada pedonale con monumenti dall'epoca fatimide a quella ottomana: moschee, madrase, porte e mausolei. Un museo all'aperto, vivo di sera quando le facciate sono illuminate.",
        come: "Ci si arriva dalla zona di Khan el-Khalili. Si cammina da nord a sud.",
        quando: "Dal tardo pomeriggio fino a sera.",
        tempo: "2-3 ore",
        costo: "la strada è a ingresso libero; alcuni monumenti hanno un biglietto proprio",
        lat: 30.04667,
        lng: 31.26,
        consiglio: "Salire su un minareto, dove permesso, regala la vista migliore della città vecchia.",
      },
      {
        nome: "Khan el-Khalili",
        testo: "Il grande bazar del Cairo, con vicoli di argento, lampade, spezie, tessuti. È turistico, ma di sera si riempie anche di cairoti.",
        come: "Taxi fino all'ingresso, poi a piedi. Il caffè El Fishawy è il punto di sosta classico.",
        quando: "Sera.",
        tempo: "2 ore",
        costo: "ingresso libero",
        lat: 30.0475,
        lng: 31.26222,
        consiglio: "Contrattare sempre, partendo molto più in basso del prezzo detto.",
      },
      {
        nome: "Museo nazionale della civiltà egizia (NMEC)",
        testo: "Il museo di Fustat che racconta l'Egitto dalla preistoria a oggi. Il pezzo forte è la Sala delle mummie reali, con una ventina di faraoni e regine portati qui dal Museo Egizio nel 2021, tra cui Ramses II e Hatshepsut, in una sala buia e silenziosa.",
        come: "In Uber o taxi verso la zona di Fustat, vicino al Cairo copto. La sala delle mummie è al piano inferiore.",
        quando: "Mattina o primo pomeriggio; si abbina bene al Cairo copto, a pochi minuti.",
        tempo: "2 ore",
        costo: "circa 500 EGP, circa 8 € (2026)",
        lat: 30.00761,
        lng: 31.24836,
        consiglio: "Visto il GEM, il NMEC vale soprattutto per le mummie reali: chi ha poco tempo può limitarsi a quella sala e alla galleria principale.",
      },
      {
        nome: "Cairo copto: Chiesa Sospesa, sinagoga Ben Ezra e Museo copto",
        testo: "Il nucleo più antico della città, dentro le mura della fortezza romana di Babilonia. La Chiesa Sospesa è costruita sopra una porta della fortezza; poco lontano la sinagoga Ben Ezra, dove fu trovata la Geniza del Cairo, e il Museo copto, con la raccolta più ricca di arte cristiana d'Egitto.",
        come: "Metro linea 1 fino a Mar Girgis, che esce davanti al quartiere. Si gira a piedi tra vicoli stretti; per le chiese spalle e ginocchia coperte.",
        quando: "Mattina, meglio non di domenica, quando le chiese sono piene per la messa.",
        tempo: "2-3 ore",
        costo: "Museo copto 280 EGP, circa 5 € (2026)",
        orari: "Museo copto tutti i giorni 9-17 (2026).",
        lat: 30.0054,
        lng: 31.2301,
        url: "https://egymonuments.gov.eg/en/museums/the-coptic-museum/",
      },
      {
        nome: "Moschea-madrasa del sultano Hassan e moschea al-Rifai",
        testo: "Due moschee monumentali una di fronte all'altra, ai piedi della Cittadella. Quella del sultano Hassan, del 1356-1363, è tra i capolavori dell'architettura mamelucca, con il cortile chiuso da quattro grandi iwan; la al-Rifai, finita nel 1912, ospita le tombe della famiglia reale egiziana e dell'ultimo scià di Persia.",
        come: "A piedi dalla Cittadella, scendendo verso piazza Salah al-Din, oppure in Uber. Si entra scalzi o con i copriscarpe, donne con il foulard.",
        quando: "Fuori dagli orari di preghiera, meglio non il venerdì a mezzogiorno.",
        tempo: "1 ora",
        lat: 30.0319,
        lng: 31.2567,
      },
      {
        nome: "Moschea di Ibn Tulun e Museo Gayer-Anderson",
        testo: "La moschea più antica del Cairo rimasta quasi intatta nella forma originale, del IX secolo, con un cortile enorme e un minareto a spirale esterna da cui si vede mezza città. Accanto, il Museo Gayer-Anderson occupa due case ottomane arredate da un ufficiale inglese: mashrabiya, sale e terrazze.",
        come: "In Uber o taxi; dalla moschea del sultano Hassan sono circa 15 minuti a piedi. Al museo si entra da un ingresso sul lato della moschea.",
        quando: "Tardo pomeriggio, quando la luce entra radente nel cortile.",
        tempo: "1,5 ore",
        costo: "Museo Gayer-Anderson 100 EGP, circa 2 € (2026)",
        orari: "Museo Gayer-Anderson tutti i giorni 9-17 (2026).",
        lat: 30.02889,
        lng: 31.24944,
        url: "https://egymonuments.gov.eg/en/museums/gayer-anderson-museum/",
      },
      {
        nome: "Moschea di al-Azhar",
        testo: "Fondata nel 970, è una delle università più antiche del mondo ancora attive e il centro dell'islam sunnita. Il cortile in marmo bianco, chiuso da portici e minareti di epoche diverse, è uno dei posti più calmi del centro storico.",
        come: "A piedi da Khan el-Khalili, attraversando la strada al-Azhar con il sottopassaggio. Scarpe da togliere all'ingresso, donne con il foulard.",
        quando: "Fuori dagli orari di preghiera, nel pomeriggio prima di Khan el-Khalili.",
        tempo: "45 minuti",
        lat: 30.04571,
        lng: 31.26268,
      },
      {
        nome: "Bab Zuweila",
        testo: "La porta meridionale della città fatimide, del 1092, sormontata da due minareti della moschea di al-Muayyad. Si sale fino in cima ai minareti, e da lì il Cairo islamico appare come un mare di cupole e tetti.",
        come: "In fondo alla via al-Muizz, sul lato sud; si sale a piedi per scale strette.",
        quando: "Tardo pomeriggio, per la luce sulla città vecchia.",
        tempo: "45 minuti",
        costo: "100 EGP, circa 2 € (2026)",
        orari: "Tutti i giorni 9-17 (2026).",
        lat: 30.04283,
        lng: 31.2578,
        url: "https://egymonuments.gov.eg/en/monuments/bab-zuwayla/",
      },
      {
        nome: "Museo di arte islamica",
        testo: "Una delle raccolte più importanti al mondo di arte islamica: lampade di moschea in vetro smaltato, legni intagliati, ceramiche, tappeti e manoscritti dall'Egitto, dalla Persia e dalla Turchia. Restaurato dopo l'attentato del 2014, è ordinato e poco frequentato.",
        come: "In Uber o taxi fino a Bab al-Khalq, a metà strada tra Downtown e il Cairo islamico.",
        quando: "Mattina, prima di passare al Cairo islamico.",
        tempo: "1,5 ore",
        costo: "340 EGP, circa 6 € (2026)",
        orari: "9-17 (2026).",
        lat: 30.04472,
        lng: 31.25278,
        url: "https://egymonuments.gov.eg/en/museums/islamic-art-museum/",
      },
      {
        nome: "Parco al-Azhar",
        testo: "Un grande parco costruito su una vecchia discarica, sul bordo del Cairo islamico, con giardini, fontane e un tratto di mura ayyubidi riportate alla luce. Dalle terrazze si vede la Cittadella e tutta la città vecchia, ed è uno dei pochi spazi verdi tranquilli del Cairo.",
        come: "In Uber o taxi fino all'ingresso principale su Salah Salem.",
        quando: "Al tramonto, con la chiamata alla preghiera che sale da centinaia di minareti.",
        tempo: "1,5 ore",
        lat: 30.0401,
        lng: 31.26408,
        consiglio: "I ristoranti del parco hanno le terrazze migliori per una cena con vista sulla città vecchia.",
      },
      {
        nome: "Zamalek e la Torre del Cairo",
        testo: "L'isola sul Nilo dei palazzi d'inizio Novecento, delle ambasciate, delle gallerie e dei caffè: il Cairo più calmo. All'estremità sud c'è la Torre del Cairo, 187 metri del 1961, con la terrazza da cui si vedono il fiume, il centro e, nelle giornate limpide, le piramidi.",
        come: "In Uber, oppure in metro linea 3 fino a Safaa Hegazy, a Zamalek. La torre si raggiunge a piedi dal ponte di Qasr al-Nil.",
        quando: "Pomeriggio e sera, quando il caldo cala e i caffè si riempiono.",
        tempo: "2-3 ore",
        lat: 30.04583,
        lng: 31.22444,
      },
      {
        nome: "Palazzo di Manial",
        testo: "La residenza del principe Muhammad Ali Tawfik, costruita tra il 1900 e il 1929 sull'isola di Roda, che mescola stile ottomano, persiano e moresco. Sale piastrellate, una sala del trono, un museo della caccia e un giardino di banyan e palme.",
        come: "In Uber o taxi fino all'isola di Roda, poco a sud di Garden City.",
        quando: "Mattina, prima del caldo; è poco affollato quasi sempre.",
        tempo: "1,5 ore",
        costo: "220 EGP, circa 4 € (2026)",
        orari: "Tutti i giorni dalle 9 (2026).",
        lat: 30.0274,
        lng: 31.2298,
        url: "https://egymonuments.gov.eg/en/museums/manial-palace-museum/",
      },
      {
        nome: "Feluca sul Nilo",
        testo: "La barca a vela tradizionale, noleggiata per un'ora sul fiume. Lontano dal traffico, il Cairo diventa silenzioso e si capisce quanto la città sia costruita intorno al Nilo.",
        come: "Si prende dagli imbarcaderi lungo la Corniche, a Garden City o vicino al ponte di Qasr al-Nil. Il prezzo è per barca, non a persona.",
        quando: "Al tramonto.",
        tempo: "1 ora",
        costo: "prezzo a barca, da concordare prima di salire",
        consiglio: "Fissare durata e prezzo totale prima di partire, in sterline egiziane.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Grand Egyptian Museum all'apertura",
          "Pranzo a Zamalek o a Downtown",
          "Pomeriggio: Cittadella, poi moschee del sultano Hassan e al-Rifai",
          "Sera: via al-Muizz e Khan el-Khalili",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Giorno 2 mattina: Cairo copto in metro, poi NMEC e la sala delle mummie reali",
          "Giorno 2 pomeriggio: Ibn Tulun e Museo Gayer-Anderson",
          "Giorno 2 sera: feluca sul Nilo e cena a Zamalek",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3 mattina: Museo Egizio di Tahrir",
          "Giorno 3 pomeriggio: Museo di arte islamica, Bab Zuweila e moschea di al-Azhar",
          "Giorno 3 tramonto: Parco al-Azhar",
        ],
      },
    ],
    zone: [
      {
        nome: "Zamalek",
        perChi: "chi vuole un quartiere tranquillo e curato",
        testo: "Isola sul Nilo con caffè, ristoranti e gallerie. Più cara e un po' lontana dalle visite, ma comoda in Uber.",
        fascia: "70-180 €",
      },
      {
        nome: "Downtown",
        perChi: "chi vuole stare vicino al Museo Egizio",
        testo: "Palazzi ottocenteschi, locali e rumore continuo. Gli hotel sono vecchi e di fascia media.",
        fascia: "35-90 €",
      },
      {
        nome: "Giza",
        perChi: "chi vuole le piramidi e il GEM",
        testo: "Zona vicina ai siti, con hotel con vista piramidi. Il centro è lontano e il traffico pesante.",
        fascia: "30-150 €",
      },
      {
        nome: "Garden City e Corniche del Nilo",
        perChi: "chi vuole un grande hotel con vista sul fiume",
        testo: "La riva est del Nilo tra Downtown e Garden City, con i grandi alberghi internazionali affacciati sull'acqua. Comoda per il Museo Egizio e per le feluche; il traffico sulla Corniche è continuo.",
        fascia: "120-350 €",
      },
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Riso, lenticchie, pasta, ceci e salsa piccante di pomodoro: il piatto di strada nazionale, nelle trattorie specializzate di tutta la città."
      },
      {
        "nome": "Ful e taameya",
        "testo": "Fave in pentola e falafel di fave per colazione, nei chioschi del mattino."
      },
      {
        "nome": "Molokhia",
        "testo": "Zuppa verde di corchoro con pollo o coniglio e riso."
      },
      {
        "nome": "Om Ali",
        "testo": "Dolce caldo di pasta sfoglia, latte, noci e uvetta."
      }
    ],
    attenzioni: [
      "La guida gratuita che si offre per strada, o il negozio di papiri o di profumi di un fratello, è un aggancio per portare in un negozio: rifiutare con calma.",
      "Taxi senza tassametro: concordare il prezzo o usare Uber e Careem.",
      "Nei bazar il primo prezzo è alto: contrattare e non comprare nulla sotto pressione.",
      "Il traffico è pesante: calcolare molto più tempo del previsto tra una tappa e l'altra.",
      "Tensioni nella regione: il governo britannico (ottobre 2026) segnala rischio di escalation, possibili cancellazioni di voli e chiusure improvvise del valico di Taba; sconsiglia i viaggi nel Nord Sinai e lungo il confine libico. Controllare viaggiaresicuri.it prima di partire."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Piramidi di Giza e Sfinge",
        distanza: "45-75 minuti in Uber dal centro, circa 20 km",
        come: "Uber o autista fino all'ingresso principale; dentro l'altopiano il bus elettrico collega piramidi, belvedere e Sfinge.",
        testo: "Le tre piramidi e la Sfinge, a pochi chilometri dal GEM. Si entra all'apertura, alle 7, prima dei pullman. Altopiano 700 EGP, interno della Grande Piramide circa 1.500 EGP a parte (2026).",
      },
      {
        nome: "Saqqara, Dahshur e Menfi",
        distanza: "1 ora in auto, circa 30-40 km",
        come: "Con un autista per la giornata (indicativamente 30-50 $ l'auto): non ci sono mezzi pubblici comodi.",
        testo: "La piramide a gradoni di Djoser e le mastabe dipinte a Saqqara, la Romboidale e la piramide Rossa a Dahshur, il colosso di Ramses II a Menfi. Molta meno gente che a Giza. Saqqara 600 EGP, Dahshur 200, Menfi 200 (2026).",
      },
      {
        nome: "Alessandria",
        distanza: "circa 3 ore in treno, 220 km",
        come: "Treno dalla stazione Ramses del Cairo, oppure auto con autista per la giornata.",
        testo: "La città di Alessandro sul Mediterraneo: la nuova Biblioteca, le catacombe di Kom el-Shoqafa, la cittadella di Qaitbey dove sorgeva il Faro e la Corniche. Lunga ma fattibile in giornata.",
      },
      {
        nome: "Fayyum e Wadi al-Hitan",
        distanza: "2-3 ore in auto, circa 150 km",
        come: "Solo con autista o tour organizzato, servono un fuoristrada per l'ultimo tratto nel deserto.",
        testo: "L'oasi con il lago Qarun e la valle delle balene fossili di Wadi al-Hitan, patrimonio UNESCO: scheletri di 40 milioni di anni fa nella sabbia. Una giornata di deserto vicino alla capitale.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono al Cairo?",
        risposta: "Due giorni pieni per GEM, Cittadella, Cairo islamico e copto, più uno per le piramidi di Giza e uno per Saqqara e Dahshur. Con meno di tre giorni conviene scegliere tra Museo Egizio e NMEC.",
      },
      {
        domanda: "Grand Egyptian Museum o Museo Egizio di Tahrir?",
        risposta: "Il GEM per primo: ha Tutankhamon e le gallerie nuove. Il Museo Egizio di Tahrir resta pieno di pezzi straordinari ed è più economico, ma è una seconda visita per chi ha tempo.",
      },
      {
        domanda: "Serve prenotare il Grand Egyptian Museum?",
        risposta: "Sì: l'ingresso è a fascia oraria e si prenota solo sul sito ufficiale tickets.gem.eg. Dal 1° novembre 2026 il biglietto per stranieri costa 1.830 EGP.",
      },
      {
        domanda: "Meglio dormire a Giza o in centro?",
        risposta: "Per un soggiorno breve Giza fa risparmiare due tragitti nel traffico verso piramidi e GEM. Per più giorni Zamalek o Downtown sono più comodi per il Cairo islamico, i musei del centro e la sera.",
      },
      {
        domanda: "Come ci si muove al Cairo?",
        risposta: "Uber e Careem sono la soluzione più semplice e con prezzo chiaro. La metro è economica e utile per Downtown, Zamalek e il Cairo copto (fermata Mar Girgis), ma non arriva all'aeroporto né a Giza.",
      },
      {
        domanda: "Come vestirsi per visitare le moschee del Cairo?",
        risposta: "Spalle e ginocchia coperte per tutti, foulard per le donne, scarpe da togliere all'ingresso. Si evita il venerdì a mezzogiorno e gli orari di preghiera.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'La moschea-madrasa del sultano Hassan e la moschea di al-Rifa\'i con i loro minareti, nel Cairo islamico',
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg',
  },
  {
    slug: 'piramidi',
    paeseSlug: 'egitto',
    ordine: 2,
    nome: 'Piramidi: Giza, Saqqara e Dahshur',
    tipologia: ['archeologia', 'deserto'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Le tre necropoli reali dell\'Antico Regno a sud-ovest del Cairo: Giza con Cheope, Chefren, Micerino e la Sfinge; Saqqara con la piramide a gradoni di Djoser; Dahshur con la piramide Romboidale e la piramide Rossa.',
    percheAndarci:
      'Per vedere in un giorno e mezzo l\'intera evoluzione della piramide, dalla prima a gradoni fino alla forma perfetta di Giza, e per entrare nelle camere interne di Saqqara e Dahshur, molto meno affollate di quelle di Cheope.',
    cosaVedere: [
      'La Grande Piramide di Cheope, anche all\'interno con biglietto a parte',
      'La Sfinge e il tempio a valle di Chefren',
      'Il punto panoramico delle nove piramidi, nel deserto dietro Micerino',
      'La piramide a gradoni di Djoser e le mastabe dipinte di Saqqara (Ti, Mereruka)',
      'Il Serapeum di Saqqara, con i sarcofagi dei tori Api',
      'La piramide Rossa di Dahshur, in cui si scende senza code',
    ],
    cosaFare: [
      'Entrare alle 7 all\'apertura per avere un\'ora di luce buona e meno gruppi',
      'Spostarsi sull\'altopiano con il bus elettrico interno invece che con cavalli e cammelli',
    ],
    comeArrivare: 'Giza è a 30-60 minuti dal centro del Cairo secondo il traffico; Saqqara e Dahshur a 45-60 minuti da Giza, in auto con autista o con un tour.',
    comeSpostarsi:
      'A Giza il bus elettrico interno collega ingresso, piramidi e Sfinge; per Saqqara e Dahshur serve un\'auto con autista per la giornata (indicativamente 30-50 $).',
    periodoMigliore: 'da ottobre ad aprile, sempre al mattino presto',
    costi:
      'Altopiano di Giza circa 700 EGP; interno della Grande Piramide circa 1.500 EGP; Saqqara circa 450-600 EGP con le tombe principali; Dahshur intorno ai 150-200 EGP (indicativi, i prezzi cambiano spesso).',
    erroriDaEvitare: [
      'Credere a chi dice che «l\'ingresso è chiuso» o che «bisogna passare da qui»: è il primo aggancio per il giro a pagamento in cammello',
      'Salire su un cammello senza aver concordato prezzo totale, durata e cosa include: la cifra raddoppia per scendere',
      'Comprare il biglietto per l\'interno di Cheope pensando di vedere decorazioni: le camere sono spoglie, l\'interesse è nel corridoio e nella Grande Galleria',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Piramidi e Sfinge di Giza",
        "testo": "La Grande Piramide di Cheope, quelle di Chefren e Micerino e la Sfinge: il gruppo più famoso dell'Egitto, sull'altopiano a sud-ovest del Cairo. L'interno delle piramidi richiede biglietti a parte.",
        "come": "Da Giza o dal Cairo in Uber o con un autista; si gira a piedi, in navetta o a cavallo.",
        "quando": "Aperto tutti i giorni 8-16 (2026). All'apertura la luce è migliore e ci sono meno gruppi.",
        "tempo": "3-4 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/giza-plateau/",
        "consiglio": "Il punto panoramico dietro Micerino mostra le tre piramidi insieme, senza folla.",
        "costo": "700 EGP per adulti stranieri, 350 per studenti (2026). Grande Piramide, piramidi di Chefren e Micerino, tomba di Meresankh III e cimitero degli operai a parte: prezzi in biglietteria."
      },
      {
        "nome": "Saqqara",
        "testo": "La piramide a gradoni di Djoser, considerata la prima grande costruzione in pietra tagliata, e le tombe dei nobili, come le mastabe di Mereruka e di Ti, alto funzionario della V dinastia, con rilievi molto belli di agricoltura, pesca, caccia nelle paludi e costruzione di barche. La mastaba di Ti non compare nei biglietti ufficiali: chiedere in biglietteria se è aperta.",
        "come": "In auto con autista da Giza o dal Cairo.",
        "quando": "Aperto tutti i giorni 8-16 (2026). Meglio la mattina.",
        "tempo": "2-3 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/saqqara/",
        "consiglio": "Le tombe dipinte valgono quanto la piramide e di solito hanno meno gente.",
        "costo": "600 EGP l'area per adulti stranieri; biglietto cumulativo con museo Imhotep, tombe dei nobili e del Nuovo Regno, Mereruka e Mehu 1.400 EGP (2026)"
      },
      {
        "nome": "Dahshur",
        "testo": "La piramide Rossa e la piramide Romboidale, di Snefru: i tentativi che portarono alla vera piramide liscia. Di solito c'è poca gente.",
        "come": "In auto con autista, vicino a Saqqara.",
        "quando": "Aperto tutti i giorni 8-17 (2026). Meglio la mattina, con meno caldo.",
        "tempo": "1-2 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/dahshur/",
        "consiglio": "Un'ottima aggiunta a Saqqara per chi ha un giorno intero con un autista.",
        "costo": "200 EGP per adulti stranieri, 100 per studenti (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Giza all'apertura",
          "Pranzo",
          "Pomeriggio a Saqqara",
          "Rientro al Cairo"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Giza e Grand Egyptian Museum",
          "Giorno 2: Saqqara e Dahshur con autista"
        ]
      }
    ],
    zone: [
      {
        "nome": "Giza",
        "perChi": "chi vuole le piramidi dalla finestra",
        "testo": "Hotel con vista, vicinissimi all'ingresso e al GEM. Zona rumorosa e poco curata."
      },
      {
        "nome": "Il Cairo",
        "perChi": "chi vuole altri quartieri a portata",
        "testo": "Si fa la giornata in Uber o con autista: più scelta di locali, ma parecchia strada nel traffico."
      }
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Piatto di riso, lenticchie, pasta e salsa piccante, per un pranzo economico."
      },
      {
        "nome": "Piccione ripieno (hamam mahshi)",
        "testo": "Un classico egiziano, farcito di riso o frikeh."
      },
      {
        "nome": "Tè alla menta",
        "testo": "Servito in ogni sosta, dolcissimo."
      },
      {
        "nome": "Pane baladi",
        "testo": "Pane piatto egiziano, cotto nei forni di quartiere."
      }
    ],
    attenzioni: [
      "Chi dice che l'ingresso è chiuso o che bisogna passare da un altro lato sta cercando di portarvi al giro a pagamento in cammello: ignorare.",
      "Cammello e cavallo: concordare prezzo totale, durata e cosa include, e farsi dire cosa succede per scendere.",
      "L'interno della Grande Piramide ha camere spoglie: l'interesse è nel corridoio e nella Grande Galleria. Claustrofobici, valutare.",
      "Non comprare papiri e souvenir all'ingresso dai venditori che si avvicinano."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Le piramidi di Giza che si stagliano sul deserto in una giornata limpida',
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg',
  },
  {
    slug: 'luxor',
    paeseSlug: 'egitto',
    ordine: 3,
    nome: 'Luxor',
    tipologia: ['archeologia', 'Nilo'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'antica Tebe, divisa dal Nilo in due: sulla riva est i templi dei vivi, Karnak e Luxor; sulla riva ovest la città dei morti, con la Valle dei Re, la Valle delle Regine e il tempio di Hatshepsut.',
    percheAndarci:
      'Per la più grande concentrazione di monumenti dell\'Egitto faraonico in un solo posto, e per le tombe dipinte che conservano ancora i colori originali.',
    cosaVedere: [
      'Il complesso di Karnak e la sala ipostila con 134 colonne',
      'Il tempio di Luxor, da vedere al tramonto e con l\'illuminazione serale',
      'La Valle dei Re: il biglietto base include tre tombe, Tutankhamon e Seti I si pagano a parte',
      'Il tempio funerario di Hatshepsut a Deir el-Bahari',
      'Medinet Habu, il tempio di Ramses III, con rilievi ancora colorati e pochi visitatori',
      'I Colossi di Memnone e il villaggio degli artigiani di Deir el-Medina',
    ],
    cosaFare: [
      'Il volo in mongolfiera all\'alba sulla riva ovest',
      'Attraversare il Nilo con il traghetto pubblico o in feluca',
      'Una gita in giornata al tempio di Dendera o di Abydos',
    ],
    doveDormire:
      'Riva est per comodità (ristoranti, templi a piedi), riva ovest per la calma e la vicinanza alle tombe. Economiche: guesthouse sulla riva ovest · fascia media: hotel sul Nilo della riva est · lusso: Sofitel Winter Palace, Al Moudira sulla riva ovest.',
    doveMangiare:
      'Cucina egiziana casalinga nei ristoranti della riva ovest, piccione ripieno e tagine; sulla riva est i locali con terrazza sul tempio di Luxor.',
    comeArrivare: 'Volo dal Cairo (1 ora), treno diurno o notturno dal Cairo (9-10 ore), strada dal Mar Rosso (4 ore da Hurghada, 4-4,5 da Marsa Alam).',
    comeSpostarsi:
      'Sulla riva ovest serve un\'auto con autista o un taxi per la giornata (indicativamente 25-40 $); sulla riva est si gira a piedi o in Uber. Calessi solo concordando il prezzo prima.',
    periodoMigliore: 'da ottobre ad aprile; d\'estate solo visite tra l\'alba e le 11',
    costi:
      'Karnak circa 600 EGP, tempio di Luxor circa 500 EGP, Valle dei Re circa 750 EGP (3 tombe), tomba di Tutankhamon circa 700 EGP, Seti I e Nefertari intorno ai 2.000 EGP ciascuna, Hatshepsut circa 440 EGP; mongolfiera indicativamente 50-100 $ (indicativi).',
    erroriDaEvitare: [
      'Andare in Valle dei Re a mezzogiorno: tra le pareti di roccia si superano i 40 °C già a maggio',
      'Scattare foto nelle tombe senza il permesso fotografico se richiesto: i guardiani fanno pagare la «multa» in contanti',
      'Scegliere la mongolfiera solo sul prezzo più basso: conta la compagnia, e i voli si annullano col vento',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Tempio di Karnak",
        "testo": "Uno dei più grandi complessi religiosi dell'antico Egitto, costruito per quasi duemila anni da una trentina di faraoni. La sala ipostila ha 134 colonne: le dodici centrali sono alte 21 metri.",
        "come": "Dalla città in taxi o calesse. Si cammina nel sito, lungo la via delle sfingi dal tempio di Luxor se si vuole il percorso completo.",
        "quando": "Aperto tutti i giorni 6-17 (2026). Arrivare all'apertura: d'estate è l'unico momento sopportabile.",
        "tempo": "2-3 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/karnak/",
        "consiglio": "Tornare la sera per lo spettacolo di suoni e luci, se in programma.",
        "costo": "600 EGP con il museo all'aperto, tempio di Mut 200 EGP (adulti stranieri, 2026)"
      },
      {
        "nome": "Tempio di Luxor",
        "testo": "Un tempio più piccolo, in mezzo alla città, con le statue colossali di Ramses II e uno dei due obelischi dell'ingresso: l'altro è a Parigi, in place de la Concorde, dal 1836. La sera, illuminato, è bellissimo.",
        "come": "A piedi dal lungofiume sulla riva est.",
        "quando": "Aperto tutti i giorni 6-20 (2026). Tramonto e sera.",
        "tempo": "1 ora",
        "costo": "500 EGP per adulti stranieri, 250 per studenti (2026)",
        "url": "https://egymonuments.gov.eg/en/monuments/luxor-temple/"
      },
      {
        "nome": "Valle dei Re",
        "testo": "Oltre sessanta tombe scavate nella roccia, quasi tutte di faraoni del Nuovo Regno, con pareti dipinte ancora colorate. Il biglietto base copre un numero limitato di tombe; Tutankhamon e altre sono a pagamento a parte.",
        "come": "Sulla riva ovest, in taxi o con un tour. Si visita a piedi, tomba per tomba.",
        "quando": "Aperta tutti i giorni 6-17 (2026). Arrivare all'apertura: a mezzogiorno è molto caldo, già in primavera.",
        "tempo": "2-3 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/valley-of-the-kings/",
        "consiglio": "Chiedere in biglietteria quali tombe sono aperte quel giorno e scegliere quelle con le decorazioni meglio conservate, non solo la più famosa.",
        "costo": "750 EGP per adulti stranieri, 375 per studenti; Tutankhamon e altre tombe a parte (2026)"
      },
      {
        "nome": "Tempio di Hatshepsut",
        "testo": "Il tempio funerario della regina-faraone a Deir el-Bahari, a terrazze sotto la parete di roccia, con un'architettura che sembra moderna.",
        "come": "Sulla riva ovest, vicino alla Valle dei Re.",
        "quando": "Aperto tutti i giorni 6-17 (2026). Mattina presto.",
        "tempo": "1 ora",
        "costo": "440 EGP per adulti stranieri, 220 per studenti (2026)",
        "url": "https://egymonuments.gov.eg/en/monuments/hatshepsut-temple/"
      },
      {
        "nome": "Medinet Habu e Colossi di Memnone",
        "testo": "Il tempio di Ramses III, con rilievi ancora colorati e meno visitatori dei grandi templi, vicino ai due colossi di Amenhotep III che sorvegliano la piana.",
        "come": "Sulla riva ovest, in taxi con le altre tappe.",
        "quando": "Medinet Habu aperto tutti i giorni 6-17 (2026). Metà mattina o fine pomeriggio.",
        "tempo": "1-1,5 ore",
        "consiglio": "Medinet Habu è spesso trascurato, ma merita la sosta.",
        "costo": "Medinet Habu 230 EGP per adulti stranieri, 110 per studenti (2026); i Colossi si vedono dalla strada"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Alba: mongolfiera o Valle dei Re all'apertura",
          "Hatshepsut",
          "Medinet Habu e Colossi",
          "Pomeriggio: Karnak e tempio di Luxor al tramonto"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: riva ovest",
          "Giorno 2: Karnak, tempio di Luxor, poi gita a Dendera o Abydos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Riva est",
        "perChi": "chi vuole ristoranti e vita serale",
        "testo": "Vicino ai templi di Karnak e Luxor, con hotel di tutte le fasce e il lungofiume. Più turistica e con più venditori."
      },
      {
        "nome": "Riva ovest",
        "perChi": "chi vuole quiete",
        "testo": "Campagne, case e piccole guesthouse vicino alle tombe e ai campi, con poco rumore."
      }
    ],
    sapori: [
      {
        "nome": "Piccione ripieno",
        "testo": "Piatto tipico egiziano, servito anche nei ristoranti della riva ovest."
      },
      {
        "nome": "Tagine di carne",
        "testo": "Cucina egiziana di casa, con verdure e salsa di pomodoro."
      },
      {
        "nome": "Ful e taameya",
        "testo": "Colazione economica nei chioschi del mercato."
      },
      {
        "nome": "Karkadè",
        "testo": "Infuso freddo o caldo di ibisco, in ogni caffè."
      }
    ],
    attenzioni: [
      "Nelle tombe le regole sulle foto cambiano spesso: chiedere in biglietteria, mai il flash. I guardiani che aprono un angolo chiuso o mettono in posa poi chiedono la mancia.",
      "Mongolfiere: scegliere la compagnia e non il prezzo più basso, e mettere margine perché i voli si annullano col vento.",
      "I calessi e i venditori sul lungofiume partono da cifre alte: contrattare e decidere prima.",
      "D'estate le visite vanno fatte dall'alba alla tarda mattinata: dopo il caldo è estremo."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Le colonne papiriformi della grande sala ipostila del tempio di Karnak, viste dal basso',
    immagine: '/images/viaggi/egitto-completo/giorno-14-luxor.jpg',
  },
  {
    slug: 'assuan-abu-simbel',
    paeseSlug: 'egitto',
    ordine: 4,
    nome: 'Assuan e Abu Simbel',
    tipologia: ['archeologia', 'Nilo', 'cultura nubiana'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città più meridionale del circuito, dove il Nilo si stringe tra isole di granito e dune, con i villaggi nubiani colorati sulla riva ovest. Da qui si parte per i templi di Ramses II e Nefertari ad Abu Simbel.',
    percheAndarci:
      'Per il ritmo più lento dell\'Egitto, il tempio di Philae su un\'isola del lago, la feluca al tramonto e Abu Simbel, il monumento spostato pezzo per pezzo negli anni Sessanta per salvarlo dal lago Nasser.',
    cosaVedere: [
      'I due templi di Abu Simbel, a 280 km a sud',
      'Il tempio di Philae, in barca dal molo di Shellal',
      'L\'obelisco incompiuto nelle cave di granito',
      'Il Museo nubiano',
      'Il villaggio nubiano di Gharb Soheil',
    ],
    cosaFare: [
      'Una feluca al tramonto intorno all\'isola Elefantina',
      'Lo spettacolo di suoni e luci ad Abu Simbel, per chi dorme lì',
      'Il 22 febbraio e il 22 ottobre il sole entra fino al santuario del tempio grande',
    ],
    doveDormire:
      'Economiche: guesthouse nubiane sull\'isola Elefantina o a Gharb Soheil · fascia media: hotel sulla Corniche · lusso: Old Cataract (Sofitel Legendary). Ad Abu Simbel poche strutture, tra cui l\'eco-lodge Eskaleh.',
    comeArrivare:
      'Volo dal Cairo (1h25), treno notturno con cabine letto dal Cairo o da Giza, crociera dal Nilo da Luxor (3-4 notti). Per Abu Simbel: strada di 3,5 ore con partenza prima dell\'alba, oppure volo EgyptAir di 45 minuti.',
    comeSpostarsi: 'Barche pubbliche e private sul Nilo, taxi e Uber in città; per Abu Simbel minivan con autista o tour di gruppo.',
    periodoMigliore: 'da novembre a marzo; in estate è il posto più caldo del Paese',
    costi:
      'Abu Simbel indicativamente 750-850 EGP; Philae circa 550 EGP più la barca (da concordare, 300-500 EGP a barca); Museo nubiano circa 300 EGP; feluca indicativamente 300-600 EGP l\'ora a barca (indicativi).',
    erroriDaEvitare: [
      'Fare Abu Simbel in giornata d\'estate senza mettere in conto la sveglia alle 3-4 e sette ore di strada andata e ritorno',
      'Salire in feluca senza concordare se il prezzo è a persona o a barca, e per quanto tempo',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Abu Simbel",
        "testo": "I due templi di Ramses II e Nefertari scavati nella roccia, con le statue colossali all'ingresso. Tra il 1963 e il 1968 furono tagliati a blocchi e spostati per salvarli dal lago Nasser. Il 22 febbraio e il 22 ottobre il sole entra fino al santuario.",
        "come": "Da Assuan circa 300 km di strada, con partenza prima dell'alba, oppure in aereo.",
        "quando": "Aperto tutti i giorni 6-17 (2026). Arrivare all'apertura, prima dei bus dei gruppi.",
        "tempo": "1,5-2 ore sul posto",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/abu-simbel/",
        "consiglio": "Chi può, dormire ad Abu Simbel per lo spettacolo di suoni e luci e per l'alba.",
        "costo": "750 EGP per adulti stranieri, 375 per studenti; 1.200 EGP (studenti 600) il 22 febbraio e il 22 ottobre (2026)"
      },
      {
        "nome": "Tempio di Philae",
        "testo": "Il santuario di Iside su un'isola, spostato anch'esso dopo la diga. Si arriva in barca dal molo di Shellal ed è molto fotogenico.",
        "come": "Taxi fino al molo, poi barca a motore, con il prezzo da concordare.",
        "quando": "Aperto tutti i giorni 7-16 (2026). Mattina presto per la luce.",
        "tempo": "1,5 ore",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/philae/",
        "costo": "550 EGP per adulti stranieri, 275 per studenti, più la barca dal molo da concordare (2026)"
      },
      {
        "nome": "Villaggio nubiano di Gharb Soheil",
        "testo": "Un villaggio nubiano sulla riva ovest del Nilo, a pochi chilometri dalla diga di Assuan, nato circa un secolo fa quando la vecchia diga del 1902 sommerse i villaggi più a sud. Le famiglie nubiane accolgono i visitatori in casa per mangiare e, volendo, per dormire.",
        "come": "Da Assuan: chiedere in hotel o al molo come arrivarci e concordare il prezzo prima.",
        "quando": "Pomeriggio, con rientro al tramonto.",
        "tempo": "2-3 ore",
        "consiglio": "Pranzare o cenare in una casa nubiana è il modo migliore per conoscere la zona."
      },
      {
        "nome": "Feluca al tramonto",
        "testo": "La barca a vela tradizionale intorno all'isola Elefantina, per un giro di un'ora o due.",
        "come": "Dal lungofiume di Assuan.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "consiglio": "Concordare se il prezzo è a barca o a persona, e quanto dura."
      }
    ],
    programmi: [
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Philae al mattino, obelisco incompiuto, feluca al tramonto",
          "Giorno 2: Abu Simbel all'alba con rientro a metà giornata"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lungofiume di Assuan",
        "perChi": "chi vuole vedere il Nilo",
        "testo": "Hotel vicino al corso e alle feluche. Comodo per tutto."
      },
      {
        "nome": "Abu Simbel",
        "perChi": "chi vuole l'alba ai templi",
        "testo": "Poche strutture: utile per evitare la sveglia notturna."
      }
    ],
    sapori: [
      {
        "nome": "Cucina nubiana",
        "testo": "Piatti di pollo, pesce e riso speziati, nei villaggi nubiani intorno ad Assuan, come Gharb Soheil."
      },
      {
        "nome": "Karkadè",
        "testo": "Infuso di ibisco, molto diffuso ad Assuan."
      },
      {
        "nome": "Ful e taameya",
        "testo": "Colazione economica ai chioschi."
      },
      {
        "nome": "Pesce del Nilo",
        "testo": "Servito alla griglia sul lungofiume."
      }
    ],
    attenzioni: [
      "Abu Simbel in giornata significa sveglia nel cuore della notte e molte ore di strada: metterlo in conto.",
      "Prezzo della feluca e della barca per Philae: concordare prima, a barca o a persona.",
      "D'estate Assuan è tra i posti più caldi del Paese: visite all'alba.",
      "Venditori molto insistenti sul lungofiume: un no deciso basta."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: 'I templi di Abu Simbel con le statue colossali di Ramses II scolpite nella roccia',
    immagine: '/images/viaggi/egitto-completo/giorno-11-assuan-abu-simbel.jpg',
  },
  {
    slug: 'siwa',
    paeseSlug: 'egitto',
    ordine: 5,
    nome: 'Oasi di Siwa',
    tipologia: ['deserto', 'oasi', 'cultura berbera'],
    giorniConsigliati: '3 giorni più due di viaggio',
    visitataPersonalmente: true,
    introduzione:
      'Un\'oasi di palme e laghi salati a 50 km dal confine libico, abitata da una comunità di lingua berbera, ai margini del Grande Mare di Sabbia.',
    percheAndarci:
      'Per un Egitto del tutto diverso da quello dei templi: case di fango salato, sorgenti in cui fare il bagno, le dune del Grande Mare di Sabbia e il tempio dell\'Oracolo dove Alessandro Magno venne proclamato figlio di Amon.',
    cosaVedere: [
      'La fortezza di Shali, il vecchio centro in kershef (fango e sale)',
      'Il tempio dell\'Oracolo di Amon ad Aghurmi',
      'La montagna dei morti, Gebel al-Mawta, con tombe dipinte',
      'La sorgente di Cleopatra',
      'I laghi salati, dove si galleggia come nel Mar Morto',
    ],
    cosaFare: [
      'Escursione in fuoristrada nel Grande Mare di Sabbia con sandboarding e tramonto sulle dune',
      'Una notte in campo tendato nel deserto',
      'Girare l\'oasi in bicicletta',
    ],
    doveDormire:
      'Economiche: piccoli hotel in centro · fascia media: eco-lodge in stile siwano fuori dal centro · lusso: Adrère Amellal, senza elettricità, a lume di candela.',
    comeArrivare:
      'Bus notturno dal Cairo (circa 10-12 ore) oppure in due tappe passando per Marsa Matruh; in alternativa auto con autista o tour organizzato. Lungo la strada ci sono posti di blocco: passaporto sempre a portata di mano.',
    comeSpostarsi: 'Bicicletta, tuk-tuk e carretti trainati da asini nell\'oasi; fuoristrada con autista locale per il deserto.',
    periodoMigliore: 'da ottobre ad aprile; le notti d\'inverno nel deserto scendono vicino a 0 °C',
    costi:
      'Escursione di mezza giornata nel Grande Mare di Sabbia indicativamente 20-35 $ a persona; il permesso per il deserto viene richiesto dall\'operatore locale, che lo include nel prezzo (indicativo).',
    erroriDaEvitare: [
      'Andare nel deserto con chi non ha i permessi: le zone verso il confine libico sono controllate dall\'esercito',
      'Indossare abiti succinti in paese: Siwa è una comunità conservatrice, e anche al lago o alle sorgenti si fa il bagno coperti',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fortezza di Shali",
        "testo": "La vecchia cittadella di fango e sale, danneggiata da tre giorni di piogge nel 1926 e poi abbandonata dagli abitanti. Dalla cima si vede tutta l'oasi.",
        "come": "A piedi dal centro di Siwa.",
        "quando": "Tramonto.",
        "tempo": "1 ora"
      },
      {
        "nome": "Tempio dell'Oracolo di Amon",
        "testo": "Le rovine sul colle di Aghurmi dove, secondo la tradizione, Alessandro Magno venne a consultare l'oracolo, che lo riconobbe figlio del dio e faraone.",
        "come": "In bici o taxi dal centro.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1 ora"
      },
      {
        "nome": "Deserto, laghi salati e sorgente di Cleopatra",
        "testo": "Gita in fuoristrada verso il Grande Mare di Sabbia con sandboarding, tramonto sulle dune e bagno nelle sorgenti, come l'antica sorgente naturale detta Bagno di Cleopatra, e nei laghi salati.",
        "come": "Solo con un operatore locale, che ha il permesso per il deserto.",
        "quando": "Pomeriggio, con rientro al tramonto.",
        "tempo": "Mezza giornata",
        "consiglio": "Chiedere se bagno e cena sono inclusi, e portare una giacca per la sera."
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: arrivo, fortezza di Shali, tramonto",
          "Giorno 2: Aghurmi, Bagno di Cleopatra, deserto e notte in tenda",
          "Giorno 3: bicicletta nell'oasi, rientro"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro di Siwa",
        "perChi": "chi vuole stare vicino a tutto",
        "testo": "Hotel e guesthouse vicino al mercato e alla fortezza. Semplici."
      },
      {
        "nome": "Eco-lodge nell'oasi",
        "perChi": "chi vuole natura e silenzio",
        "testo": "Case in fango tra le palme, più care e poco comode da raggiungere a piedi."
      }
    ],
    sapori: [
      {
        "nome": "Datteri e olive di Siwa",
        "testo": "Il prodotto dell'oasi, venduto sfuso nel mercato."
      },
      {
        "nome": "Olio d'oliva",
        "testo": "Prodotto nell'oasi con le olive locali."
      }
    ],
    attenzioni: [
      "Il deserto verso la Libia è controllato dall'esercito: andare solo con operatori che hanno i permessi.",
      "Siwa è una comunità conservatrice: coprire spalle e ginocchia, e bagnarsi vestiti alle sorgenti.",
      "Tenere il passaporto a portata di mano ai posti di blocco.",
      "Le notti d'inverno nel deserto sono fredde: portare abiti pesanti.",
      "Strade: il governo britannico (ottobre 2026) considera Siwa e la strada da Marsa Matruh fuori dalle zone sconsigliate, ma sconsiglia i viaggi non essenziali sulla strada tra Bahariya e Siwa."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: 'Palme da dattero riflesse in una sorgente dell\'oasi di Siwa',
    immagine: '/images/viaggi/egitto-completo/giorno-07-siwa.jpg',
  },
  {
    slug: 'mar-rosso',
    paeseSlug: 'egitto',
    ordine: 6,
    nome: 'Mar Rosso: Hurghada, Marsa Alam e Sharm el-Sheikh',
    tipologia: ['mare', 'immersioni', 'snorkeling'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La costa egiziana del Mar Rosso e la punta del Sinai: barriera corallina vicinissima alla riva, relitti, squali pelagici al largo e un\'acqua che non scende sotto i 21-22 °C nemmeno d\'inverno.',
    percheAndarci:
      'Per chiudere il viaggio archeologico con il mare, o per immersioni tra le più famose del mondo: il relitto del Thistlegorm, Ras Mohammed, Elphinstone, le isole Brothers e Daedalus.',
    cosaVedere: [
      'Hurghada: le isole Giftun e la baia di Orange Bay, il relitto del Thistlegorm in giornata lunga',
      'Marsa Alam: la baia di Abu Dabbab con tartarughe e, con fortuna, il dugongo; il reef di Dolphin House (Samadai); il parco di Wadi el Gemal',
      'Sharm el-Sheikh: il parco nazionale di Ras Mohammed e lo stretto di Tiran',
      'Dahab: il Blue Hole e i reef dalla riva',
    ],
    cosaFare: [
      'Snorkeling dalla riva sulla barriera del resort',
      'Corso Open Water o Advanced con un centro PADI o SSI',
      'Crociera subacquea (liveaboard) di una settimana nel sud: Brothers, Daedalus, Elphinstone',
    ],
    doveDormire:
      'Hurghada: El Gouna e Sahl Hasheesh per la fascia media e alta, Hurghada città per la fascia economica. Marsa Alam: resort isolati con reef davanti, eco-lodge come quello di Wadi Lahami per i sub. Sharm: Naama Bay per la vita serale, Nabq per i resort.',
    comeArrivare:
      'Voli diretti dall\'Italia su Hurghada, Marsa Alam e Sharm el-Sheikh (molti charter stagionali); voli interni dal Cairo; da Luxor 4 ore di strada per Hurghada, 4-4,5 per Marsa Alam.',
    comeSpostarsi: 'Transfer organizzati dal resort, taxi e minivan con autista; per le escursioni in barca si parte dai porti turistici.',
    periodoMigliore:
      'mare caldo da maggio a novembre; da dicembre a marzo acqua sui 22 °C e vento forte, con giornate da muta di 5 mm',
    costi:
      'Escursione in barca di snorkeling con pranzo indicativamente 30-50 $; immersione singola 35-55 $, pacchetto da 10 immersioni 300-400 $; corso Open Water 400-550 $; liveaboard di 7 notti 1.000-1.800 € più tasse del parco (indicativi).',
    erroriDaEvitare: [
      'Scegliere Sharm pensando di andare comodamente a Luxor: dal Sinai serve un volo, quasi sempre via Cairo',
      'Toccare o camminare sul corallo e comprare conchiglie o coralli: è vietato e l\'export si sequestra in aeroporto',
      'Prenotare un liveaboard nel sud senza il brevetto e il numero di immersioni richiesti (di solito Advanced e almeno 50 immersioni)',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hurghada",
        "testo": "Una delle principali località turistiche della costa, con escursioni in barca per lo snorkeling e le immersioni sulle isole Giftun e sui reef al largo.",
        "come": "Escursioni da prenotare con un operatore locale dal proprio hotel.",
        "quando": "Tutto l'anno; da dicembre a marzo l'acqua scende a 21-23 °C, ad agosto arriva a 28 °C.",
        "tempo": "Giornata"
      },
      {
        "nome": "Marsa Alam e Abu Dabbab",
        "testo": "Più a sud e più tranquilla: la baia di Abu Dabbab, nota per le tartarughe marine, e più a sud il parco nazionale di Wadi el-Gemal, dove vivono anche dugonghi e tartarughe verdi. L'aeroporto riceve voli turistici anche dall'Italia.",
        "come": "In auto da Luxor o con voli diretti.",
        "quando": "Mattina presto, con meno barche.",
        "tempo": "Giornata",
        "consiglio": "Una buona scelta per chi cerca soprattutto lo snorkeling."
      },
      {
        "nome": "Sharm el-Sheikh e Ras Mohammed",
        "testo": "Immersioni e snorkeling nel parco nazionale di Ras Mohammed, con il relitto del Thistlegorm non lontano.",
        "come": "Voli diretti dall'Europa e dal Cairo.",
        "quando": "Tutto l'anno.",
        "tempo": "Giornata"
      }
    ],
    programmi: [
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorno 1: snorkeling dalla riva del resort",
          "Giorno 2: barca per i reef al largo o Ras Mohammed",
          "Giorno 3: corso o immersioni"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hurghada",
        "perChi": "chi vuole molta scelta e prezzi bassi",
        "testo": "Resort ovunque e vita serale, con costa molto costruita."
      },
      {
        "nome": "Marsa Alam",
        "perChi": "chi vuole reef e tranquillità",
        "testo": "Resort sul reef, lontani dalle città: ideale per lo snorkeling."
      },
      {
        "nome": "Sharm el-Sheikh",
        "perChi": "chi vuole immersioni e resort grandi",
        "testo": "Molti resort e centri diving, parchi marini vicini."
      }
    ],
    sapori: [
      {
        "nome": "Pesce alla griglia",
        "testo": "Scelto al mercato e cotto nei ristoranti sul mare."
      },
      {
        "nome": "Sayadeya",
        "testo": "Pesce con riso speziato e cipolle, di cucina costiera."
      },
      {
        "nome": "Shawarma",
        "testo": "Per un pasto veloce lontano dai resort."
      },
      {
        "nome": "Karkadè",
        "testo": "Bevanda fredda di ibisco."
      }
    ],
    attenzioni: [
      "Non toccare né calpestare il corallo e non portare via conchiglie o coralli.",
      "Dal Sinai a Luxor serve quasi sempre un volo via Cairo: non fare il conto sulla strada.",
      "Per le crociere subacquee chiedere all'operatore il brevetto e l'esperienza richiesti.",
      "Da dicembre a marzo l'acqua è sui 21-23 °C e c'è spesso vento: serve una muta più spessa.",
      "Sinai: il governo britannico (ottobre 2026) sconsiglia ogni viaggio nel Nord Sinai e i viaggi non essenziali nell'interno del Sud Sinai oltre la strada Santa Caterina-Nuweiba; le coste, compresa Sharm el-Sheikh, ne sono escluse."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: 'Coralli a tavola e acqua turchese su una barriera corallina del Mar Rosso',
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg',
  },
]
