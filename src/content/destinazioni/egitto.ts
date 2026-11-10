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
    comeArrivare: "Giza è a 15-20 km dal centro del Cairo, da 20 minuti a un'ora secondo il traffico, in Uber o Careem. Dall'aeroporto del Cairo (CAI) servono 45-75 minuti fino a Giza, indicativamente 300-500 EGP in Uber; alcuni voli usano lo Sphinx International Airport, più vicino. Saqqara e Dahshur sono a 45-60 minuti da Giza: si va con un autista per la giornata, indicativamente 30-50 $ a veicolo, o con un tour.",
    comeSpostarsi:
      'A Giza il bus elettrico interno collega ingresso, piramidi e Sfinge; per Saqqara e Dahshur serve un\'auto con autista per la giornata (indicativamente 30-50 $).',
    periodoMigliore: 'da ottobre ad aprile, sempre al mattino presto',
    costi: "Budget basso circa 30-45 € al giorno a persona (guesthouse a Nazlet el-Semman, koshari e cibo di strada, solo l'altopiano); medio 70-110 € (hotel vicino al GEM, GEM e Giza, autista per Saqqara e Dahshur); alto da 180 € in su (hotel di lusso sotto le piramidi, guida egittologa, interno di Cheope). Biglietti 2026: altopiano 700 EGP, GEM 1.830 EGP, Saqqara 600, Dahshur 200, Menfi 200 EGP; un euro vale circa 60 EGP.",
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
        "quando": "All'apertura: la luce è migliore e ci sono meno gruppi.",
        "tempo": "3-4 ore",
        "costo": "700 EGP, circa 11,5 €, per adulti stranieri, 350 per studenti (2026). Grande Piramide, piramidi di Chefren e Micerino, tomba di Meresankh III e cimitero degli operai a parte.",
        "orari": "Tutti i giorni dalle 7, ultimo ingresso alle 16 (biglietteria ufficiale egymonuments.com, 2026)",
        "lat": 29.97611,
        "lng": 31.13278,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/giza-plateau/",
        "consiglio": "Il punto panoramico dietro Micerino mostra le tre piramidi insieme, senza folla."
      },
      {
        "nome": "Saqqara",
        "testo": "La piramide a gradoni di Djoser, considerata la prima grande costruzione in pietra tagliata, e le tombe dei nobili, come le mastabe di Mereruka e di Ti, alto funzionario della V dinastia, con rilievi molto belli di agricoltura, pesca, caccia nelle paludi e costruzione di barche. La mastaba di Ti non compare nei biglietti ufficiali: chiedere in biglietteria se è aperta.",
        "come": "In auto con autista da Giza o dal Cairo.",
        "quando": "Mattina.",
        "tempo": "2-3 ore",
        "costo": "600 EGP, circa 10 €, l'area con il Museo Imhotep; tombe dei nobili e del Nuovo Regno 400 EGP, Mereruka 200, interno di Djoser 280 (adulti stranieri, 2026)",
        "orari": "Tutti i giorni 8-16 (2026)",
        "lat": 29.87111,
        "lng": 31.21639,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/saqqara/",
        "consiglio": "Le tombe dipinte valgono quanto la piramide e di solito hanno meno gente."
      },
      {
        "nome": "Dahshur e la piramide Rossa",
        "testo": "La piramide Rossa e la piramide Romboidale, di Snefru: i tentativi che portarono alla vera piramide liscia. Di solito c'è poca gente.",
        "come": "In auto con autista, vicino a Saqqara.",
        "quando": "Mattina, con meno caldo.",
        "tempo": "1-2 ore",
        "costo": "200 EGP, circa 3,5 €, per adulti stranieri, 100 per studenti (2026); si scende nella piramide Rossa senza supplemento",
        "orari": "Tutti i giorni 8-17 (2026)",
        "lat": 29.80833,
        "lng": 31.20583,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/dahshur/",
        "consiglio": "Un'ottima aggiunta a Saqqara per chi ha un giorno intero con un autista."
      },
      {
        "nome": "Interno della Grande Piramide",
        "testo": "Si sale piegati lungo un corridoio stretto fino alla Grande Galleria, alta oltre otto metri, e alla Camera del Re, con il sarcofago di granito. Le camere sono spoglie: l'interesse sta nella costruzione.",
        "come": "Biglietto a parte oltre a quello dell'area; ingressi a numero limitato.",
        "quando": "Subito all'apertura, prima che si formi la coda.",
        "tempo": "30-45 minuti",
        "costo": "1.000 EGP, circa 16,5 €, per adulti stranieri secondo il sito del Ministero, oltre all'area (2026)",
        "orari": "Tutti i giorni 7-17 (2026)",
        "lat": 29.97917,
        "lng": 31.13417,
        "url": "https://egymonuments.gov.eg/en/monuments/the-great-pyramid/",
        "consiglio": "Chi soffre di claustrofobia o di schiena ci pensi: il passaggio è basso e caldo."
      },
      {
        "nome": "Sfinge e tempio a valle di Chefren",
        "testo": "La Sfinge, scolpita nella roccia dell'altopiano, è lunga circa 73 metri. Accanto c'è il tempio a valle di Chefren, con pilastri di granito rosa, da cui si arriva alla terrazza davanti alla statua.",
        "come": "Dall'ingresso della Sfinge, in basso, o a piedi dalla piramide di Chefren lungo la rampa.",
        "quando": "Mattina presto, oppure la sera con lo spettacolo di suoni e luci.",
        "tempo": "45 minuti",
        "costo": "Compresa nel biglietto dell'altopiano (2026)",
        "lat": 29.97526,
        "lng": 31.13758
      },
      {
        "nome": "Piramide di Chefren",
        "testo": "La seconda piramide di Giza, che sembra la più alta perché sta su un punto più elevato e conserva in cima un tratto del rivestimento originale di calcare.",
        "come": "A piedi o con il bus elettrico interno; l'interno ha un biglietto a parte, prezzo in biglietteria.",
        "quando": "Mattina.",
        "tempo": "30 minuti da fuori",
        "lat": 29.97611,
        "lng": 31.13083
      },
      {
        "nome": "Piramide di Micerino",
        "testo": "La più piccola delle tre grandi, con le tre piramidi delle regine accanto e una parte del rivestimento di granito ancora alla base.",
        "come": "A piedi o con il bus elettrico, verso il punto panoramico.",
        "quando": "Mattina.",
        "tempo": "20-30 minuti",
        "lat": 29.9725,
        "lng": 31.12833
      },
      {
        "nome": "Punto panoramico",
        "testo": "Il pianoro nel deserto dietro Micerino da cui si vedono tutte le piramidi di Giza in fila. È la foto classica, e di solito c'è meno gente che sotto Cheope.",
        "come": "Con il bus elettrico interno o a piedi, circa 20 minuti da Micerino.",
        "quando": "Mattina o ultima ora prima della chiusura.",
        "tempo": "30 minuti",
        "costo": "Compreso nel biglietto dell'altopiano (2026)",
        "lat": 29.973,
        "lng": 31.11963,
        "consiglio": "Qui si concentrano cammellieri e venditori: niente giri senza prezzo totale concordato."
      },
      {
        "nome": "Grand Egyptian Museum",
        "testo": "Il nuovo museo nazionale a due chilometri dalle piramidi: la scalinata con le statue dei faraoni, le gallerie principali, il museo delle barche di Cheope e le sale di Tutankhamon, con il corredo esposto per intero.",
        "come": "Uber o taxi dall'altopiano, circa 10 minuti. Ingresso a fascia oraria, da prenotare online.",
        "quando": "Mezza giornata dopo le piramidi; il mercoledì e il sabato è aperto fino a sera.",
        "tempo": "3-4 ore",
        "costo": "1.830 EGP, circa 30 €, dal 1° novembre 2026 (dal viaggio sul sito)",
        "orari": "Domenica, lunedì, martedì, giovedì e venerdì: complesso 8.30-19, gallerie 9-18; mercoledì e sabato: complesso 8.30-22, gallerie 9-21; ultimo ingresso un'ora prima della chiusura delle gallerie (2026)",
        "lat": 29.995,
        "lng": 31.1193,
        "url": "https://visit-gem.com/en/home"
      },
      {
        "nome": "Piramide a gradoni di Djoser",
        "testo": "La prima grande costruzione in pietra tagliata, voluta da Djoser e attribuita all'architetto Imhotep, intorno al 2650 a.C. Dopo il restauro si scende anche all'interno, fino al pozzo e ai corridoi con piastrelle blu.",
        "come": "Dentro l'area di Saqqara, a piedi dall'ingresso del complesso funerario.",
        "quando": "Mattina.",
        "tempo": "1 ora con l'interno",
        "costo": "280 EGP, circa 4,5 €, per l'interno, oltre all'area (adulti stranieri, 2026)",
        "orari": "Tutti i giorni 8-16 (2026)",
        "lat": 29.8711,
        "lng": 31.2167,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/saqqara/"
      },
      {
        "nome": "Serapeum",
        "testo": "Le gallerie sotterranee dove venivano sepolti i tori sacri Api, con una ventina di sarcofagi di granito da decine di tonnellate ciascuno. Fa impressione per le dimensioni.",
        "come": "Nell'area di Saqqara, in auto dall'ingresso principale.",
        "quando": "A metà giornata, quando fuori fa più caldo: sottoterra è fresco.",
        "tempo": "30-45 minuti",
        "costo": "180 EGP, circa 3 €, per adulti stranieri secondo il sito del Ministero (2026)",
        "orari": "Tutti i giorni 8-17 (2026)",
        "lat": 29.87472,
        "lng": 31.21242,
        "url": "https://egymonuments.gov.eg/en/monuments/serapeum/"
      },
      {
        "nome": "Mastaba di Mereruka",
        "testo": "La tomba del visir del faraone Teti, con più di trenta stanze decorate: scene di caccia, pesca, artigiani e danze, con i colori in parte ancora visibili.",
        "come": "Nell'area di Saqqara, a pochi passi dalla piramide di Teti.",
        "quando": "Mattina.",
        "tempo": "30 minuti",
        "costo": "200 EGP, circa 3,5 €, per adulti stranieri, oltre all'area (2026)",
        "orari": "Tutti i giorni 8-16 (2026)",
        "lat": 29.8759,
        "lng": 31.2212
      },
      {
        "nome": "Museo Imhotep",
        "testo": "Il museo all'ingresso di Saqqara, con i reperti della necropoli e la ricostruzione della biblioteca dell'egittologo Jean-Philippe Lauer, che passò la vita a restaurare il complesso di Djoser.",
        "come": "All'ingresso dell'area di Saqqara.",
        "quando": "All'arrivo, per capire il sito prima di girarlo.",
        "tempo": "30-45 minuti",
        "costo": "Compreso nel biglietto di Saqqara, 600 EGP (2026)",
        "orari": "Tutti i giorni 8-17, biglietteria fino alle 16 (2026)",
        "lat": 29.86944,
        "lng": 31.22472,
        "url": "https://egymonuments.gov.eg/en/museums/imhotep-museum/"
      },
      {
        "nome": "Piramide Romboidale",
        "testo": "La piramide di Snefru che cambia pendenza a metà altezza, forse perché la struttura dava segni di cedimento. Conserva gran parte del rivestimento liscio esterno.",
        "come": "A Dahshur, in auto a pochi minuti dalla piramide Rossa.",
        "quando": "Mattina.",
        "tempo": "30 minuti",
        "costo": "Compresa nel biglietto di Dahshur, 200 EGP (2026)",
        "orari": "Tutti i giorni 8-17 (2026)",
        "lat": 29.79028,
        "lng": 31.20917,
        "url": "https://egymonuments.gov.eg/en/monuments/the-bent-pyramid/"
      },
      {
        "nome": "Menfi (Mit Rahina)",
        "testo": "Quel che resta della prima capitale d'Egitto è un museo all'aperto tra i palmeti: il colosso di Ramses II sdraiato, una sfinge di alabastro e statue sparse. Una sosta veloce sulla strada tra Saqqara e Giza.",
        "come": "In auto, tra Saqqara e il Cairo.",
        "quando": "Nella stessa giornata di Saqqara e Dahshur.",
        "tempo": "30-45 minuti",
        "costo": "200 EGP, circa 3,5 €, per adulti stranieri, 100 per studenti (2026)",
        "orari": "Tutti i giorni dalle 8, ultimo ingresso alle 16 (2026)",
        "lat": 29.84944,
        "lng": 31.255,
        "url": "https://egymonuments.com/details/Memphis"
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "Giza all'apertura: Cheope, eventuale interno, Chefren e Micerino",
          "Punto panoramico in bus elettrico, poi Sfinge e tempio a valle",
          "Pranzo vicino all'altopiano",
          "Pomeriggio: Grand Egyptian Museum"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1 come sopra",
          "Giorno 2 con autista: Saqqara (Museo Imhotep, Djoser, Mereruka, Serapeum)",
          "Pranzo lungo la strada, poi Dahshur: piramide Rossa e Romboidale",
          "Rientro passando per Menfi"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: seconda visita al GEM con calma, oppure Meidum e l'oasi del Fayyum in giornata"
        ]
      }
    ],
    zone: [
      {
        "nome": "Giza, Nazlet el-Semman",
        "perChi": "chi vuole le piramidi dalla finestra",
        "testo": "Guesthouse e piccoli hotel con terrazza sull'altopiano, vicinissimi all'ingresso della Sfinge. Zona rumorosa e poco curata.",
        "fascia": "30-50 €"
      },
      {
        "nome": "Il Cairo",
        "perChi": "chi vuole altri quartieri a portata",
        "testo": "Si fa la giornata in Uber o con autista: più scelta di locali, ma parecchia strada nel traffico."
      },
      {
        "nome": "Giza, zona del GEM",
        "perChi": "chi vuole un hotel moderno vicino a piramidi e museo",
        "testo": "Hotel boutique e di catena lungo la strada del Grand Egyptian Museum, a pochi minuti in auto dall'altopiano.",
        "fascia": "70-120 €"
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
    gite: [
      {
        "nome": "Il Cairo",
        "distanza": "circa 15 km, 20-60 minuti",
        "come": "Uber o Careem, secondo il traffico.",
        "testo": "Il Cairo islamico con la Cittadella e il Khan el-Khalili, il quartiere copto e il Museo Egizio di piazza Tahrir: è l'altra metà di una visita alle piramidi."
      },
      {
        "nome": "Meidum",
        "distanza": "circa 80 km, 1-1,5 ore",
        "come": "Auto con autista per la giornata.",
        "testo": "La piramide crollata di Snefru, un tentativo precedente a Dahshur, in mezzo alla campagna e quasi sempre deserta. Si entra nella camera interna."
      },
      {
        "nome": "Oasi del Fayyum e Wadi el-Rayan",
        "distanza": "circa 100-140 km, 1,5-3 ore",
        "come": "Auto con autista o tour organizzato, giornata intera.",
        "testo": "Laghi nel deserto, cascate basse a Wadi el-Rayan e, più lontano, Wadi al-Hitan, la Valle delle Balene patrimonio UNESCO, con fossili di cetacei nella sabbia (ultimo tratto in fuoristrada)."
      }
    ],
    faq: [
      {
        "domanda": "Quanto tempo serve per le piramidi di Giza?",
        "risposta": "Tre o quattro ore per l'altopiano con il punto panoramico e la Sfinge, mezza giornata in più per il Grand Egyptian Museum. Saqqara e Dahshur chiedono un secondo giorno."
      },
      {
        "domanda": "Vale la pena entrare nella Grande Piramide?",
        "risposta": "Sì per chi è curioso di come è costruita: la Grande Galleria impressiona. No per chi si aspetta pitture, perché le camere sono spoglie, e per chi soffre gli spazi stretti."
      },
      {
        "domanda": "Saqqara e Dahshur meritano?",
        "risposta": "Sì: mostrano la storia della piramide dalla prima a gradoni a quella liscia, con molta meno folla di Giza, e alla piramide Rossa si scende senza supplemento."
      },
      {
        "domanda": "Meglio dormire a Giza o al Cairo?",
        "risposta": "Giza per avere le piramidi all'alba e il GEM vicino; il Cairo per ristoranti e quartieri storici. Tra i due ci sono da 20 minuti a un'ora di traffico."
      },
      {
        "domanda": "Cammello o bus elettrico sull'altopiano?",
        "risposta": "Il bus elettrico interno collega ingresso, piramidi e punto panoramico senza trattative. Chi vuole il cammello concorda prima prezzo totale, durata e percorso."
      },
      {
        "domanda": "Il GEM va prenotato?",
        "risposta": "Sì: l'ingresso è a fascia oraria e si compra online. Il biglietto copre anche le sale di Tutankhamon e il museo delle barche di Cheope."
      }
    ],
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
    comeArrivare: "Dal Cairo il modo più rapido è il volo EgyptAir di un'ora, indicativamente 60-120 € se prenotato per tempo; dall'aeroporto di Luxor si va in centro in taxi o con il transfer dell'hotel. In alternativa c'è il treno notte con cabine letto di Abela Trains dalle stazioni del Cairo o di Giza, circa 10-11 ore. Dal Mar Rosso si arriva in auto con autista: circa 4 ore da Hurghada (70-120 $ a veicolo) e 4-4,5 ore da Marsa Alam (100-150 $); per Hurghada ci sono anche i bus Go Bus.",
    comeSpostarsi:
      'Sulla riva ovest serve un\'auto con autista o un taxi per la giornata (indicativamente 25-40 $); sulla riva est si gira a piedi o in Uber. Calessi solo concordando il prezzo prima.',
    periodoMigliore: 'da ottobre ad aprile; d\'estate solo visite tra l\'alba e le 11',
    costi: "Budget basso circa 35-50 € al giorno a persona (guesthouse sulla riva ovest, cibo nei chioschi, traghetto pubblico, uno o due siti); medio 80-130 € (hotel sul Nilo, autista per la riva ovest a 25-40 $, tre o quattro siti al giorno); alto da 200 € in su (hotel di lusso, guida privata, mongolfiera, Seti I e Nefertari). Biglietti 2026: Valle dei Re 750 EGP, Karnak 600, tempio di Luxor 500, Hatshepsut 440, Tutankhamon 700, Medinet Habu e Ramesseum 220 EGP; un euro vale circa 60 EGP.",
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
        "costo": "600 EGP, circa 10 €, con il museo all'aperto; tempio di Mut 200 EGP (adulti stranieri, 2026)",
        "orari": "Tutti i giorni 6-17 (2026)",
        "lat": 25.7183,
        "lng": 32.6583,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/karnak/",
        "consiglio": "Tornare la sera per lo spettacolo di suoni e luci, se in programma."
      },
      {
        "nome": "Tempio di Luxor",
        "testo": "Un tempio più piccolo, in mezzo alla città, con le statue colossali di Ramses II e uno dei due obelischi dell'ingresso: l'altro è a Parigi, in place de la Concorde, dal 1836. La sera, illuminato, è bellissimo.",
        "come": "A piedi dal lungofiume sulla riva est.",
        "quando": "Aperto tutti i giorni 6-20 (2026). Tramonto e sera.",
        "tempo": "1 ora",
        "costo": "500 EGP, circa 8 €, per adulti stranieri; studenti 250 EGP (2026)",
        "orari": "Tutti i giorni 6-20 (2026)",
        "lat": 25.7,
        "lng": 32.63917,
        "url": "https://egymonuments.gov.eg/en/monuments/luxor-temple/"
      },
      {
        "nome": "Valle dei Re",
        "testo": "Oltre sessanta tombe scavate nella roccia, quasi tutte di faraoni del Nuovo Regno, con pareti dipinte ancora colorate. Il biglietto base copre un numero limitato di tombe; Tutankhamon e altre sono a pagamento a parte.",
        "come": "Sulla riva ovest, in taxi o con un tour. Si visita a piedi, tomba per tomba.",
        "quando": "Aperta tutti i giorni 6-17 (2026). Arrivare all'apertura: a mezzogiorno è molto caldo, già in primavera.",
        "tempo": "2-3 ore",
        "costo": "750 EGP, circa 12,5 €, con tre tombe a scelta; studenti 375 EGP; Tutankhamon e Seti I a parte (2026)",
        "orari": "Tutti i giorni 6-17 (2026)",
        "lat": 25.74025,
        "lng": 32.60236,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/valley-of-the-kings/",
        "consiglio": "Chiedere in biglietteria quali tombe sono aperte quel giorno e scegliere quelle con le decorazioni meglio conservate, non solo la più famosa."
      },
      {
        "nome": "Tempio di Hatshepsut",
        "testo": "Il tempio funerario della regina-faraone a Deir el-Bahari, a terrazze sotto la parete di roccia, con un'architettura che sembra moderna.",
        "come": "Sulla riva ovest, vicino alla Valle dei Re.",
        "quando": "Aperto tutti i giorni 6-17 (2026). Mattina presto.",
        "tempo": "1 ora",
        "costo": "440 EGP, circa 7 €, per adulti stranieri; studenti 220 EGP (2026)",
        "orari": "Tutti i giorni 6-17 (2026)",
        "lat": 25.73806,
        "lng": 32.60694,
        "url": "https://egymonuments.gov.eg/en/monuments/hatshepsut-temple/"
      },
      {
        "nome": "Medinet Habu e Colossi di Memnone",
        "testo": "Il tempio di Ramses III, con rilievi ancora colorati e meno visitatori dei grandi templi, vicino ai due colossi di Amenhotep III che sorvegliano la piana.",
        "come": "Sulla riva ovest, in taxi con le altre tappe.",
        "quando": "Metà mattina o fine pomeriggio.",
        "tempo": "1-1,5 ore",
        "costo": "Medinet Habu 220 EGP, circa 3,5 €, studenti 110 EGP (2026); i Colossi si vedono gratis dalla strada",
        "orari": "Medinet Habu tutti i giorni dalle 6, ultimo ingresso alle 17 d'estate e alle 16 d'inverno (2026)",
        "lat": 25.71972,
        "lng": 32.60083,
        "url": "https://egymonuments.com/details/MedinetHabu",
        "consiglio": "Medinet Habu è spesso trascurato, ma merita la sosta."
      },
      {
        "nome": "Tomba di Tutankhamon (KV62)",
        "testo": "La tomba trovata da Howard Carter nel 1922, piccola e decorata solo nella camera funeraria. Il motivo per entrare è la mummia del re, rimasta qui in una teca, mentre il corredo è al Grand Egyptian Museum.",
        "come": "Dentro la Valle dei Re, con un biglietto a parte comprato all'ingresso della valle.",
        "quando": "Appena aperta la valle, prima dei gruppi.",
        "tempo": "15-20 minuti",
        "costo": "700 EGP, circa 11,5 €, per adulti stranieri; studenti 350 EGP (2026)",
        "orari": "Tutti i giorni 6-17, come la valle (2026)",
        "lat": 25.74039,
        "lng": 32.60142,
        "url": "https://egymonuments.gov.eg/en/monuments/tomb-of-tutankhamun/"
      },
      {
        "nome": "Tomba di Seti I (KV17)",
        "testo": "La tomba più lunga della valle e una delle più decorate, scoperta da Giovanni Battista Belzoni nel 1817. Corridoi e sale sono dipinti dall'ingresso alla camera funeraria, con il soffitto astronomico.",
        "come": "Dentro la Valle dei Re, biglietto a parte venduto all'ingresso della valle.",
        "quando": "Mattina, nella stessa visita alla valle.",
        "tempo": "30-40 minuti",
        "costo": "circa 2.000 EGP, circa 33 € (2026, dal viaggio sul sito)",
        "lat": 25.73981,
        "lng": 32.60189,
        "consiglio": "Se si paga una sola tomba extra, questa vale più di quella di Tutankhamon per le pitture."
      },
      {
        "nome": "Valle delle Regine",
        "testo": "La necropoli delle regine e dei principi della XIX e XX dinastia. La tomba più famosa è quella di Nefertari (QV66), moglie di Ramses II, con pitture tra le meglio conservate d'Egitto e un biglietto a parte, molto più caro.",
        "come": "Sulla riva ovest, in taxi con le altre tappe; si visita a piedi.",
        "quando": "Mattina presto.",
        "tempo": "1 ora, di più con Nefertari",
        "costo": "220 EGP, circa 3,5 €, per adulti stranieri; studenti 110 EGP; Nefertari a parte (2026)",
        "orari": "Tutti i giorni dalle 6, ultimo ingresso alle 17 d'estate e alle 16 d'inverno (2026)",
        "lat": 25.7275,
        "lng": 32.59306,
        "url": "https://egymonuments.com/details/ValleyOfTheQueens"
      },
      {
        "nome": "Deir el-Medina",
        "testo": "Il villaggio degli artigiani che scavavano e dipingevano le tombe reali, con le fondamenta delle case, un piccolo tempio tolemaico di Hathor e le loro tombe, piccole ma coloratissime. Racconta la vita di chi lavorava per i faraoni.",
        "come": "Sulla riva ovest, tra la Valle delle Regine e le Tombe dei Nobili.",
        "quando": "Metà mattina.",
        "tempo": "1 ora",
        "orari": "Tutti i giorni dalle 6, ultimo ingresso alle 17 (2026)",
        "lat": 25.7283,
        "lng": 32.6014,
        "url": "https://egymonuments.com/details/DeirElMadinaTemple"
      },
      {
        "nome": "Tombe dei Nobili",
        "testo": "Le tombe dei funzionari tebani sulla collina di Sheikh Abd el-Qurna, come quelle di Rekhmira, Sennefer, Nakht, Menna e Ramose. Le scene sono di vita quotidiana: campi, banchetti, artigiani, e di solito c'è pochissima gente.",
        "come": "Sulla riva ovest; i biglietti si vendono a gruppi di tombe.",
        "quando": "Metà mattina o primo pomeriggio.",
        "tempo": "1-2 ore",
        "orari": "Tutti i giorni dalle 6, ultimo ingresso alle 17 d'estate e alle 16 d'inverno (2026)",
        "lat": 25.7317,
        "lng": 32.6092,
        "url": "https://egymonuments.com/details/TombsOfTheNobles",
        "consiglio": "Nakht e Menna sono vicine e hanno i colori più vivi."
      },
      {
        "nome": "Ramesseum",
        "testo": "Il tempio funerario di Ramses II, in parte crollato. A terra c'è il colosso spezzato del faraone che avrebbe ispirato la poesia «Ozymandias» di Shelley.",
        "come": "Sulla riva ovest, lungo la strada tra i Colossi e la Valle dei Re.",
        "quando": "Fine pomeriggio, con la luce bassa.",
        "tempo": "45 minuti",
        "costo": "220 EGP, circa 3,5 €, per adulti stranieri; studenti 110 EGP (2026)",
        "orari": "Tutti i giorni dalle 6, ultimo ingresso alle 17 d'estate e alle 16 d'inverno (2026)",
        "lat": 25.72778,
        "lng": 32.61056,
        "url": "https://egymonuments.com/details/Ramesseum"
      },
      {
        "nome": "Casa di Howard Carter",
        "testo": "La casa in cui Carter visse durante gli scavi, all'imbocco della strada per la Valle dei Re, con lo studio, la camera oscura e gli arredi d'epoca. Una sosta breve che aiuta a capire come andò la scoperta del 1922.",
        "come": "Sulla riva ovest, in taxi sulla strada della valle.",
        "quando": "Dopo la Valle dei Re.",
        "tempo": "30 minuti",
        "costo": "220 EGP, circa 3,5 €, per adulti stranieri; studenti 110 EGP (2026)",
        "orari": "Tutti i giorni dalle 6, ultimo ingresso alle 17 d'estate e alle 16 d'inverno (2026)",
        "lat": 25.73888,
        "lng": 32.62817,
        "url": "https://egymonuments.com/details/CarterHouse"
      },
      {
        "nome": "Museo di Luxor",
        "testo": "Un museo piccolo e molto curato sul lungonilo, con statue scelte, i pezzi della cachette trovata nel 1989 sotto il tempio di Luxor e due mummie reali. Si vede bene in un'ora, ed è aperto anche la sera.",
        "come": "A piedi o in calesse sulla Corniche della riva est, tra Karnak e il tempio di Luxor.",
        "quando": "Nell'apertura serale, quando fa fresco.",
        "tempo": "1-1,5 ore",
        "costo": "400 EGP, circa 6,5 €, per adulti stranieri; studenti 200 EGP (2026)",
        "orari": "Tutti i giorni dalle 9 (ultimo ingresso alle 13 d'inverno, alle 12 d'estate) e dalle 17 (ultimo ingresso alle 20 d'inverno, alle 19 d'estate) (2026)",
        "lat": 25.7075,
        "lng": 32.64472,
        "url": "https://egymonuments.com/details/LuxorMuseum"
      },
      {
        "nome": "Museo della Mummificazione",
        "testo": "Una sala sotto la Corniche dedicata all'imbalsamazione: strumenti, vasi canopi, animali mummificati e la mummia di un sacerdote. Breve, ma spiega bene quello che si vede poi nelle tombe.",
        "come": "Sulla Corniche, a pochi minuti a piedi dal tempio di Luxor.",
        "quando": "Sera, prima o dopo il tempio di Luxor.",
        "tempo": "30-45 minuti",
        "costo": "220 EGP, circa 3,5 €, per adulti stranieri; studenti 110 EGP (2026)",
        "orari": "Tutti i giorni dalle 9 (ultimo ingresso alle 13 d'inverno, alle 12 d'estate) e dalle 17 (ultimo ingresso alle 19) (2026)",
        "lat": 25.70222,
        "lng": 32.63972,
        "url": "https://egymonuments.com/details/MummificationMuseumLuxor"
      },
      {
        "nome": "Viale delle Sfingi",
        "testo": "La strada processionale di circa 2,7 km che univa Karnak al tempio di Luxor, fiancheggiata da centinaia di sfingi. Riaperta nel 2021 dopo decenni di scavi, oggi si vede dalla strada e dal tempio di Luxor, dove inizia.",
        "come": "A piedi lungo il percorso tra i due templi, o dall'interno del tempio di Luxor.",
        "quando": "Al tramonto, insieme al tempio di Luxor.",
        "tempo": "30 minuti per il tratto vicino al tempio",
        "lat": 25.708,
        "lng": 32.648
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "All'alba: Valle dei Re con tre tombe e Tutankhamon",
          "Tempio di Hatshepsut",
          "Medinet Habu e Colossi di Memnone",
          "Pomeriggio: Karnak",
          "Tramonto e sera: tempio di Luxor e Viale delle Sfingi"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Valle dei Re con Seti I o Tutankhamon, Hatshepsut, Deir el-Medina, Medinet Habu e Colossi",
          "Giorno 2: mongolfiera all'alba, Karnak in mattinata",
          "Pomeriggio in hotel o in feluca sul Nilo",
          "Sera: Museo di Luxor e tempio di Luxor illuminato"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: Valle delle Regine, Tombe dei Nobili, Ramesseum e Casa di Carter",
          "In alternativa: gita a Dendera, rientro per il Museo della Mummificazione"
        ]
      }
    ],
    zone: [
      {
        "nome": "Riva est",
        "perChi": "chi vuole ristoranti e vita serale",
        "testo": "Vicino ai templi di Karnak e Luxor, con hotel di tutte le fasce e il lungofiume. Più turistica e con più venditori.",
        "fascia": "60-110 €"
      },
      {
        "nome": "Riva ovest",
        "perChi": "chi vuole quiete",
        "testo": "Campagne, case e piccole guesthouse vicino alle tombe e ai campi, con poco rumore.",
        "fascia": "25-40 €"
      },
      {
        "nome": "Hotel storici e di lusso",
        "perChi": "chi vuole il Nilo dalla terrazza",
        "testo": "I grandi alberghi della Corniche e le residenze di charme della riva ovest, con giardino e piscina. Il Sofitel Winter Palace risulta chiuso per lavori dal maggio 2026: verificare prima di prenotare.",
        "fascia": "da 170 € circa"
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
    gite: [
      {
        "nome": "Tempio di Dendera",
        "distanza": "circa 75 km, 1 ora",
        "come": "Auto con autista per mezza giornata, o crociera in giornata dove disponibile.",
        "testo": "Il tempio di Hathor, tra i meglio conservati d'Egitto, con il soffitto astronomico ancora colorato e le cripte. Si sale sul tetto per vedere la piana."
      },
      {
        "nome": "Abydos",
        "distanza": "circa 170 km, 2-2,5 ore",
        "come": "Auto con autista per la giornata, spesso abbinata a Dendera.",
        "testo": "Il tempio di Seti I, con alcuni dei rilievi più fini dell'arte egizia e la lista dei re, e dietro l'Osireion, mezzo sommerso dalla falda."
      },
      {
        "nome": "Edfu ed Esna",
        "distanza": "Esna circa 60 km, Edfu circa 110 km, 1,5 ore",
        "come": "Auto con autista, o in crociera verso Assuan.",
        "testo": "Il tempio di Horus a Edfu è il più completo del Paese; a Esna il tempio di Khnum, ripulito di recente, ha i soffitti tornati ai colori originali."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono a Luxor?",
        "risposta": "Due giorni pieni per la riva ovest e la riva est senza corse; con un terzo si aggiungono Valle delle Regine, Tombe dei Nobili o una gita a Dendera."
      },
      {
        "domanda": "Meglio dormire sulla riva est o sulla riva ovest?",
        "risposta": "La riva est ha ristoranti, il tempio di Luxor a piedi e più scelta di hotel; la riva ovest è più tranquilla e vicina alle tombe. Il traghetto pubblico unisce le due rive in pochi minuti."
      },
      {
        "domanda": "Quali tombe vedere nella Valle dei Re?",
        "risposta": "Il biglietto base include tre tombe tra quelle aperte quel giorno; Tutankhamon e Seti I si pagano a parte. Chi paga un solo extra fa bene a scegliere Seti I, la più decorata."
      },
      {
        "domanda": "Si possono fare foto nelle tombe?",
        "risposta": "Le foto con il telefono sono gratuite secondo la biglietteria ufficiale; il flash è vietato. Le regole cambiano, quindi conviene chiedere all'ingresso."
      },
      {
        "domanda": "La mongolfiera vale la spesa?",
        "risposta": "Per molti è il ricordo più bello di Luxor: un'ora sopra templi e campi all'alba, indicativamente 50-100 $ a persona. Si sceglie la compagnia, non il prezzo, e si tiene un giorno di margine per il vento."
      },
      {
        "domanda": "Quando fa troppo caldo per visitare?",
        "risposta": "Da maggio a settembre si superano spesso i 40 °C: si visita dall'alba alle 11 e si torna fuori la sera. Da ottobre ad aprile si gira tutto il giorno."
      }
    ],
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
    comeArrivare: "Dal Cairo il volo EgyptAir dura 1h25 e costa indicativamente 70-140 €. In alternativa c'è il treno notte con cabine letto di Abela Trains dalle stazioni Cairo Upper Egypt (Bashtil) o Giza, circa 13-14 ore, 110-125 $ a persona in cabina doppia con cena e colazione, da prenotare su abelatrains.com. Da Luxor si arriva in crociera sul Nilo (verso sud le navi fanno 4 notti) o in circa 3 ore d'auto. Dall'aeroporto di Assuan (ASW) il taxi si concorda prima, in sterline. Per Abu Simbel: 280 km, 3-3,5 ore di strada con partenza prima dell'alba, oppure il volo EgyptAir di 45 minuti.",
    comeSpostarsi: 'Barche pubbliche e private sul Nilo, taxi e Uber in città; per Abu Simbel minivan con autista o tour di gruppo.',
    periodoMigliore: 'da novembre a marzo; in estate è il posto più caldo del Paese',
    costi: "Budget basso circa 30-45 € al giorno a persona (guesthouse a Elefantina, cibo nei chioschi, barca pubblica, un sito al giorno); medio 70-120 € (hotel sulla Corniche, feluca, Abu Simbel in minivan condiviso); alto da 200 € in su (hotel storico, auto privata o volo per Abu Simbel, guida). Biglietti 2026: Abu Simbel 822 EGP, Philae 550 più la barca (300-500 EGP a barca), Museo nubiano 400, obelisco incompiuto 220, Elefantina e Tombe dei nobili 200 EGP; feluca indicativamente 300-600 EGP l'ora a barca. Un euro vale circa 60 EGP.",
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
        "costo": "822 EGP, circa 14 €, per adulti stranieri, 375 per studenti; 1.200 EGP (studenti 600) il 22 febbraio e il 22 ottobre (2026)",
        "orari": "Tutti i giorni 6-17 (2026)",
        "lat": 22.33694,
        "lng": 31.62556,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/abu-simbel/",
        "consiglio": "Chi può, dormire ad Abu Simbel per lo spettacolo di suoni e luci e per l'alba."
      },
      {
        "nome": "Tempio di Philae",
        "testo": "Il santuario di Iside su un'isola, spostato anch'esso dopo la diga. Si arriva in barca dal molo di Shellal ed è molto fotogenico.",
        "come": "Taxi fino al molo, poi barca a motore, con il prezzo da concordare.",
        "quando": "Aperto tutti i giorni 7-16 (2026). Mattina presto per la luce.",
        "tempo": "1,5 ore",
        "costo": "550 EGP, circa 9 €, per adulti stranieri, 275 per studenti, più la barca dal molo da concordare, indicativamente 300-500 EGP a barca (2026)",
        "orari": "Tutti i giorni 7-16 (2026)",
        "lat": 24.02083,
        "lng": 32.88944,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/philae/"
      },
      {
        "nome": "Feluca al tramonto",
        "testo": "La barca a vela tradizionale intorno all'isola Elefantina, per un giro di un'ora o due.",
        "come": "Dal lungofiume di Assuan.",
        "quando": "Tramonto.",
        "tempo": "1-2 ore",
        "costo": "indicativamente 300-600 EGP l'ora a barca, circa 5-10 € (2026, dal viaggio sul sito)",
        "consiglio": "Concordare se il prezzo è a barca o a persona, e quanto dura."
      },
      {
        "nome": "Museo nubiano",
        "testo": "Il museo racconta la Nubia sommersa dal lago Nasser dopo la costruzione dell'Alta diga, con statue, oggetti di vita quotidiana e ricostruzioni dei villaggi. Fuori c'è un giardino con una casa nubiana ricostruita. Visto prima di Abu Simbel e Philae, aiuta a capirli.",
        "come": "A sud del centro, a pochi minuti di taxi dalla Corniche.",
        "quando": "Nelle ore calde del pomeriggio, oppure il giovedì e il venerdì sera.",
        "tempo": "1,5-2 ore",
        "costo": "400 EGP, circa 6,5 €, per adulti stranieri; studenti 200 EGP (2026)",
        "orari": "Tutti i giorni dalle 9, ultimo ingresso alle 16; giovedì e venerdì anche dalle 18, ultimo ingresso alle 20 (2026)",
        "lat": 24.08,
        "lng": 32.88944,
        "url": "https://egymonuments.com/details/NubiaMuseum"
      },
      {
        "nome": "Isola Elefantina",
        "testo": "L'isola davanti alla Corniche era la frontiera meridionale dell'antico Egitto. Nell'area archeologica a sud ci sono i resti della città antica, il tempio di Khnum, il nilometro e un piccolo museo; il resto dell'isola sono villaggi nubiani con case colorate e vicoli tra le palme.",
        "come": "Barca pubblica dalla Corniche, pochi minuti, oppure in feluca.",
        "quando": "Mattina o tardo pomeriggio.",
        "tempo": "1,5-2 ore",
        "costo": "200 EGP, circa 3,5 €, per adulti stranieri; studenti 100 EGP (2026)",
        "orari": "Tutti i giorni 8-16 (2026)",
        "lat": 24.08472,
        "lng": 32.88667,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/elephantine-1/",
        "consiglio": "Dopo gli scavi conviene attraversare a piedi i villaggi dell'isola: si vede la vita quotidiana a due passi dagli hotel."
      },
      {
        "nome": "Obelisco incompiuto",
        "testo": "Un obelisco rimasto nella cava di granito perché si crepò durante il taglio: sarebbe stato uno dei più grandi mai tentati. Sulla roccia si vedono ancora i segni del lavoro, e si capisce meglio che in un museo come si estraevano i monoliti.",
        "come": "In taxi, a sud del centro; di solito si abbina a Philae e all'Alta diga.",
        "quando": "Mattina presto, prima che la cava si scaldi.",
        "tempo": "45 minuti",
        "costo": "220 EGP, circa 3,5 €, per adulti stranieri; studenti 110 EGP (2026)",
        "orari": "Tutti i giorni dalle 7, ultimo ingresso alle 15 (2026)",
        "lat": 24.07689,
        "lng": 32.89545,
        "url": "https://egymonuments.com/details/UnfinishedObelisk"
      },
      {
        "nome": "Tombe dei nobili (Qubbet el-Hawa)",
        "testo": "Le tombe rupestri dei governatori di Elefantina, scavate nella collina della riva ovest. Si sale con una scalinata ripida e dall'alto si ha una delle viste migliori su Nilo, isole e città.",
        "come": "Barca dalla Corniche fino al molo sotto la collina, poi a piedi.",
        "quando": "Pomeriggio, entro la chiusura: la luce sul fiume è più calda.",
        "tempo": "1,5 ore",
        "costo": "200 EGP, circa 3,5 €, per adulti stranieri; studenti 100 EGP (2026)",
        "orari": "Tutti i giorni 7-16 (2026)",
        "lat": 24.10177,
        "lng": 32.88916,
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/qubbat-al-hawa-cemetery-1"
      },
      {
        "nome": "Monastero di San Simeone",
        "testo": "Un monastero copto fortificato nel deserto della riva ovest, con mura di pietra e mattoni crudi, la chiesa e le celle dei monaci. È tra i complessi monastici meglio conservati d'Egitto e di solito c'è pochissima gente.",
        "come": "Barca fino alla riva ovest, poi a piedi nella sabbia in salita, o in cammello concordando il prezzo.",
        "quando": "Mattina presto: nel deserto non c'è ombra.",
        "tempo": "1,5-2 ore con la salita",
        "costo": "150 EGP, circa 2,5 €, per adulti stranieri; studenti 50 EGP (2026)",
        "orari": "Tutti i giorni 7-17 (2026)",
        "lat": 24.09472,
        "lng": 32.87578,
        "url": "https://egymonuments.gov.eg/en/monuments/monastery-of-st-simeon/"
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
        "nome": "Tempio di Kalabsha",
        "testo": "Il tempio del dio nubiano Mandulis, smontato e ricostruito vicino all'Alta diga per salvarlo dal lago Nasser, come Abu Simbel. Accanto ci sono il chiosco di Kertassi e il tempietto di Beit el-Wali, anch'essi spostati, e i visitatori sono pochi.",
        "come": "In barca a motore dal porto sul lago, a sud dell'Alta diga, con il prezzo da concordare; in taxi insieme a Philae e alla diga.",
        "quando": "Mattina.",
        "tempo": "1-1,5 ore",
        "costo": "200 EGP, circa 3,5 €, per adulti stranieri; studenti 100 EGP; barca a parte (2026)",
        "orari": "Tutti i giorni dalle 7, ultimo ingresso alle 15 (2026)",
        "lat": 23.96083,
        "lng": 32.86722,
        "url": "https://egymonuments.com/details/TempleofKalabsha"
      },
      {
        "nome": "Alta diga",
        "testo": "La diga degli anni Sessanta che ha creato il lago Nasser, uno dei più grandi laghi artificiali del mondo. Si passa sopra in auto e ci si ferma al belvedere: da un lato il lago, dall'altro il Nilo.",
        "come": "In taxi, sulla strada per Philae o Kalabsha; può esserci un controllo dei documenti.",
        "quando": "Nello stesso giro di Philae.",
        "tempo": "20-30 minuti",
        "lat": 23.97056,
        "lng": 32.87778
      },
      {
        "nome": "Giardino botanico (isola Kitchener)",
        "testo": "Un'isola sul Nilo trasformata in giardino botanico, con palme e piante tropicali. È un'ora di ombra e di uccelli in mezzo al fiume, spesso inserita nel giro in feluca.",
        "come": "In feluca o in barca a motore dalla Corniche, con la sosta concordata prima.",
        "quando": "Tardo pomeriggio, prima del tramonto in feluca.",
        "tempo": "1 ora",
        "lat": 24.09361,
        "lng": 32.88694
      },
      {
        "nome": "Mausoleo dell'Aga Khan",
        "testo": "La tomba in granito rosa dell'Aga Khan III, sulla collina della riva ovest, in stile fatimide. Si vede bene dal fiume, durante la feluca.",
        "come": "Dalla feluca o dalla riva ovest; se l'interno è visitabile va chiesto sul posto.",
        "quando": "Al tramonto, dal fiume.",
        "tempo": "Una sosta dal fiume",
        "lat": 24.08828,
        "lng": 32.8789
      },
      {
        "nome": "Suq di Assuan",
        "testo": "La via del mercato parallela alla Corniche, più tranquilla dei suq del Cairo, tra spezie, karkadè, cesti di datteri e stoffe nubiane.",
        "come": "A piedi dal centro.",
        "quando": "La sera, quando fa fresco.",
        "tempo": "1-1,5 ore",
        "consiglio": "Si contratta: chiedere prima il prezzo al chilo di spezie e karkadè."
      }
    ],
    programmi: [
      {
        "titolo": "1 giorno",
        "tappe": [
          "All'alba: Philae in barca dal molo di Shellal",
          "Alta diga e obelisco incompiuto",
          "Pomeriggio: Museo nubiano",
          "Dalle 16: feluca intorno a Elefantina e al giardino botanico fino al tramonto",
          "Sera: passeggiata nel suq"
        ]
      },
      {
        "titolo": "2 giorni",
        "tappe": [
          "Giorno 1: Philae al mattino, obelisco incompiuto, Museo nubiano e feluca al tramonto",
          "Giorno 2: Abu Simbel all'alba, con partenza verso le 4 e rientro nel primo pomeriggio",
          "Tardo pomeriggio: Isola Elefantina e sera nel suq"
        ]
      },
      {
        "titolo": "3 giorni",
        "tappe": [
          "Giorni 1-2 come sopra",
          "Giorno 3: barca per la riva ovest, Monastero di San Simeone al mattino presto e Tombe dei nobili",
          "Pomeriggio: Gharb Soheil, con cena in una casa nubiana",
          "In alternativa: Kalabsha al mattino o gita a Kom Ombo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lungofiume di Assuan",
        "perChi": "chi vuole vedere il Nilo",
        "testo": "Hotel vicino al corso e alle feluche. Comodo per tutto.",
        "fascia": "50-130 €"
      },
      {
        "nome": "Isola Elefantina",
        "perChi": "chi vuole un villaggio nubiano a due minuti di barca dal centro",
        "testo": "Guesthouse familiari e qualche grande albergo; la barca pubblica collega l'isola alla Corniche in pochi minuti. La sera è molto tranquilla.",
        "fascia": "20-130 €"
      },
      {
        "nome": "Villaggi nubiani della riva ovest",
        "perChi": "chi cerca calma e atmosfera",
        "testo": "Case nubiane dipinte trasformate in guesthouse, con terrazze sul fiume, a Gharb Soheil e dintorni. Per il centro serve la barca o il taxi.",
        "fascia": "35-85 €"
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
    gite: [
      {
        "nome": "Kom Ombo",
        "distanza": "circa 50 km, 1 ora",
        "come": "Auto con autista, oppure come prima sosta della crociera verso Luxor.",
        "testo": "L'unico tempio doppio d'Egitto, dedicato a Sobek, il dio coccodrillo, e a Horus, proprio sulla riva del Nilo; accanto c'è il piccolo museo con le mummie di coccodrillo. Biglietto 450 EGP, circa 7,5 € (2026)."
      },
      {
        "nome": "Edfu",
        "distanza": "circa 110 km, 2 ore",
        "come": "Auto con autista, spesso nella stessa giornata di Kom Ombo, o in crociera.",
        "testo": "Il tempio di Horus, il meglio conservato del Paese, con pilone, sala ipostila e santuario quasi integri. Biglietto 550 EGP (2026, dal viaggio sul sito)."
      },
      {
        "nome": "Isola di Sehel",
        "distanza": "circa 4 km a sud, in barca",
        "come": "Barca a motore o feluca dalla Corniche, con il prezzo da concordare.",
        "testo": "Un'isola con un villaggio nubiano e centinaia di iscrizioni incise sui massi di granito, tra cui la Stele della carestia. Mezza giornata tranquilla sul fiume."
      }
    ],
    faq: [
      {
        "domanda": "Quanti giorni servono ad Assuan?",
        "risposta": "Due giorni bastano per Philae, il Museo nubiano, la feluca e Abu Simbel. Con un terzo si aggiungono la riva ovest, Kalabsha o una sera in un villaggio nubiano."
      },
      {
        "domanda": "Abu Simbel si fa in giornata da Assuan?",
        "risposta": "Sì: si parte verso le 4, si fanno 280 km in 3-3,5 ore, si restano un'ora e mezza o due ai templi e si rientra nel primo pomeriggio. Chi vuole evitare la sveglia notturna dorme ad Abu Simbel o prende il volo EgyptAir di 45 minuti."
      },
      {
        "domanda": "Quanto costa andare ad Abu Simbel?",
        "risposta": "Il minivan condiviso costa indicativamente 20-35 $ a persona, l'auto privata 100-150 $ a veicolo. Il biglietto è di 822 EGP, circa 14 € (2026)."
      },
      {
        "domanda": "Quando il sole entra nel tempio di Abu Simbel?",
        "risposta": "Il 22 febbraio e il 22 ottobre, all'alba, il sole arriva fino al santuario del tempio grande. In quei giorni il biglietto sale a 1.200 EGP e c'è molta folla."
      },
      {
        "domanda": "Quanto costa una feluca ad Assuan?",
        "risposta": "Indicativamente 300-600 EGP l'ora a barca (2026). Si concordano prima durata, percorso e se il prezzo è a barca o a persona."
      },
      {
        "domanda": "Si può visitare Assuan d'estate?",
        "risposta": "Da maggio a settembre Assuan è tra i posti più caldi del Paese, spesso sopra i 40 °C: si visita all'alba e si esce di nuovo la sera. Il periodo migliore va da novembre a marzo."
      }
    ],
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
