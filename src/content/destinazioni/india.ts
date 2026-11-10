import type { Destinazione } from '@/lib/types'

// Destinazioni indiane dei tre itinerari: india-rajasthan-10-giorni,
// india-rajasthan-varanasi e india-sud-taj-mahal. Rick ha fatto Varanasi e
// il Rajasthan (viaggio 77): le destinazioni del Nord sono visitate
// (visitataPersonalmente: true), quelle del Sud no (false: il viaggio 78 è
// una proposta costruita sulla ricerca). miaEsperienza: ricordi di Rick dal
// viaggio 77 per il Nord, frasi solo fattuali dal viaggio 78 per il Sud.
// Prezzi e orari verificati a ottobre 2026, indicativi.
//
// Ordine: Nord (1-9: Delhi, Agra, Jaipur, Ranthambore, Pushkar, Jodhpur,
// Jaisalmer, Udaipur, Varanasi), Sud (10-16: Chennai, Mamallapuram, Madurai, Munnar,
// backwaters di Alleppey, Fort Kochi, Hampi).

export const destinazioniIndia: Destinazione[] = [
  // --- NORD ---
  {
    slug: 'delhi',
    paeseSlug: 'india',
    ordine: 1,
    nome: 'Delhi',
    tipologia: ['città', 'storia moghul', 'arrivo'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "In India siamo arrivati a Delhi a fine febbraio e da qui, la sera, abbiamo preso il treno notturno per Varanasi, in cuccetta di seconda classe. Le cuccette alla fine non erano così male come pensavamo, anche se non sono il top: bagni a parte, ci siamo capiti. E per tutto il viaggio, di giorno, abbiamo sempre mangiato per strada: con un po' di cautela sull'igiene ci si può lanciare, e strano ma vero siamo sempre stati bene di pancia.",
    introduzione:
      'La capitale è due città in una: la Vecchia Delhi moghul di Shah Jahan, con la Jama Masjid, il Forte Rosso e i vicoli di Chandni Chowk, e la Nuova Delhi britannica dei grandi viali, dei giardini e dei mausolei.',
    percheAndarci:
      'Quasi tutti i voli dall\'Italia arrivano qui, e due giorni bastano per vedere i monumenti che spiegano il resto del viaggio: la Tomba di Humayun, modello del Taj Mahal, e il Qutub Minar, tra i primi monumenti islamici dell\'India.',
    cosaVedere: [
      'La Jama Masjid, una delle moschee più grandi dell\'India, e il Forte Rosso',
      'I mercati di Chandni Chowk e delle spezie di Khari Baoli',
      'La Tomba di Humayun e il quartiere sufi di Nizamuddin',
      'Il Qutub Minar e la colonna di ferro',
      'Il Gurudwara Bangla Sahib, il tempio sikh con la mensa gratuita aperta a tutti',
      'India Gate, Kartavya Path e i Lodhi Gardens',
    ],
    cosaFare: [
      'Un giro in cyclo-risciò nei vicoli della Vecchia Delhi',
      'Mangiare al langar del Gurudwara Bangla Sahib',
      'Ascoltare i qawwali a Nizamuddin la sera, soprattutto il giovedì',
      'Muoversi in metro, il mezzo più semplice e pulito della città',
    ],
    doveDormire:
      'Karol Bagh e Connaught Place in fascia media, South Delhi (Hauz Khas, Defence Colony) per la tranquillità. Paharganj è economica e vicina alla stazione di New Delhi, ma caotica.',
    doveMangiare:
      'Parathe a Paranthe Wali Gali, kebab intorno alla Jama Masjid, chaat a Chandni Chowk, cucina punjabi in tutta la città.',
    comeArrivare:
      "L'aeroporto internazionale Indira Gandhi è a circa 15 km dal centro. Dal Terminal 3 la metro Airport Express arriva alla stazione New Delhi in circa 20 minuti, per circa 60-65 rupie, all'incirca dalle 5 alle 23.30. In alternativa il taxi prepagato dal banco ufficiale dentro gli arrivi, Uber o Ola: 45-60 minuti secondo il traffico. In treno si arriva a New Delhi, Hazrat Nizamuddin o Old Delhi, tutte servite dalla metro.",
    comeSpostarsi: 'Metro (con carrozza riservata alle donne), Uber, Ola e tuk-tuk a prezzo concordato.',
    periodoMigliore:
      'ottobre-novembre e febbraio-marzo. Tra novembre e gennaio l\'inquinamento dell\'aria è spesso molto alto; da aprile a giugno il caldo supera i 40 °C.',
    costi:
      "Budget al giorno a persona in doppia: 40-60 € in guesthouse e metro, 90-140 € in hotel di fascia media con qualche Uber e una guida, da 250 € in hotel di lusso con autista. Monumenti ASI circa 600 rupie (6 €) per gli stranieri, 300 quelli minori; metro poche decine di rupie a corsa.",
    erroriDaEvitare: [
      'Salire su taxi non ufficiali all\'aeroporto o credere a chi dice che l\'hotel è chiuso',
      'Entrare nei finti uffici del turismo vicino alla stazione di New Delhi e a Connaught Place',
      'Visitare la Vecchia Delhi nelle ore più calde o di venerdì all\'ora della preghiera',
    ],
    luoghi: [
      {
        nome: "Tomba di Humayun",
        testo: "Il primo grande giardino-tomba dell'India, finito nel 1572 per l'imperatore Humayun: arenaria rossa, marmo bianco e un giardino diviso in quattro dai canali. È il modello diretto del Taj Mahal, ed è patrimonio UNESCO. Nel complesso ci sono altre tombe, tra cui quella di Isa Khan, più antica.",
        come: "Metro fino a JLN Stadium o Hazrat Nizamuddin, poi un breve tratto in tuk-tuk. Si visita da soli: i pannelli spiegano bene, la guida non serve.",
        quando: "Orari sul sito ASI. Il tardo pomeriggio dà la luce migliore sull'arenaria.",
        tempo: "1 ora e mezza-2 ore",
        costo: "circa 600 rupie (6 €) per gli stranieri, 550 online (tariffa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Vederla prima del Taj Mahal: si riconoscono la pianta, la cupola doppia e il giardino che ad Agra diventeranno perfetti.",
        lat: 28.5933,
        lng: 77.2507,
        orari: "Tutti i giorni dall'alba al tramonto (Delhi Tourism)."
      },
      {
        nome: "Qutub Minar e la colonna di ferro",
        testo: "Una torre in arenaria alta circa 73 metri, iniziata nel 1199 da Qutb ud-Din Aibak, il primo sultano di Delhi, con le fasce di iscrizioni coraniche scolpite. Accanto ci sono le rovine della moschea Quwwat-ul-Islam, la più antica rimasta dei sultani di Delhi, e una colonna di ferro con un'iscrizione del IV secolo che non arrugginisce.",
        come: "Metro gialla fino a Qutub Minar, poi un breve tratto in tuk-tuk. Nella torre non si sale: è chiusa al pubblico dal 1981.",
        quando: "Orari sul sito ASI. Meglio all'apertura, prima dei gruppi e del caldo.",
        tempo: "1 ora e mezza",
        costo: "circa 600 rupie (6 €) per gli stranieri, 550 online (tariffa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Si abbina bene al quartiere di Mehrauli, a piedi, con le tombe e i pozzi sparsi nel parco archeologico.",
        lat: 28.5245,
        lng: 77.1855,
        orari: "Tutti i giorni dall'alba alle 20 (Delhi Tourism)."
      },
      {
        nome: "Forte Rosso",
        testo: "La cittadella di Shah Jahan, costruita tra il 1638 e il 1648 quando la capitale moghul passò da Agra a Delhi. Dentro ci sono le sale delle udienze, i padiglioni di marmo e alcuni musei. Da qui ogni 15 agosto il primo ministro parla alla nazione.",
        come: "Metro viola fino a Lal Quila. Ingresso dal Lahori Gate dopo i controlli di sicurezza.",
        quando: "Dal febbraio 2026 è aperto tutti i giorni, lunedì compreso, dall'alba alle 21. Mattina presto per evitare la folla della domenica.",
        tempo: "2 ore",
        costo: "600 rupie (circa 6 €) per gli stranieri, 550 online (tariffa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Se il tempo è poco, meglio la Tomba di Humayun: il forte è grande ma più spoglio di quanto ci si aspetti.",
        lat: 28.6562,
        lng: 77.241,
        orari: "Tutti i giorni dall'alba alle 21, lunedì compreso (dal febbraio 2026)."
      },
      {
        nome: "Jama Masjid",
        testo: "Una delle moschee più grandi dell'India, voluta da Shah Jahan e finita nel 1656. Il cortile tiene circa 25.000 fedeli e dai minareti si vede tutta la Vecchia Delhi.",
        come: "Metro viola fino a Jama Masjid. Scarpe tolte all'ingresso; a chi ha gambe o spalle scoperte prestano una veste.",
        quando: "Chiusa ai visitatori durante le preghiere, e il venerdì a mezzogiorno è affollatissima. Mattina o metà pomeriggio.",
        tempo: "45 minuti",
        costo: "ingresso libero; si paga per il telefono o la macchina fotografica e per salire sul minareto",
        consiglio: "Fissare le tariffe al cancello e non dare soldi a chi si offre di «sorvegliare» le scarpe dentro il cortile.",
        lat: 28.6507,
        lng: 77.2334,
        orari: "Aperta ai visitatori di giorno, fino al tramonto; chiusa durante le preghiere."
      },
      {
        nome: "Chandni Chowk e il mercato delle spezie di Khari Baoli",
        testo: "La strada dei mercanti della Delhi moghul, oggi un groviglio di vicoli specializzati: argento, tessuti da sposa, carta, dolci fritti. In fondo c'è Khari Baoli, il mercato all'ingrosso delle spezie, dove peperoncino e cardamomo si vendono a sacchi.",
        come: "Metro gialla fino a Chandni Chowk. Il modo migliore per girarlo è un cyclo-risciò a prezzo fissato prima, poi a piedi.",
        quando: "Da metà mattina, quando i negozi sono aperti.",
        tempo: "mezza giornata",
        consiglio: "Entrare nel Gadodia Market, l'edificio degli anni Venti dove lavorano i grossisti di spezie: è il cuore del mercato.",
        lat: 28.6562,
        lng: 77.23,
        orari: "Negozi aperti più o meno dalle 10 alla sera; la domenica molti sono chiusi."
      },
      {
        nome: "Gurudwara Bangla Sahib",
        testo: "Il tempio sikh più conosciuto di Delhi, con la cupola d'oro e una vasca sacra. Il langar, la mensa comune, serve pasti gratuiti a chiunque, preparati da volontari.",
        come: "Su Baba Kharak Singh Marg, vicino a Connaught Place, a piedi o in tuk-tuk. Scarpe e calze al deposito, capo coperto: i foulard si prendono all'ingresso.",
        quando: "Aperto tutti i giorni. La sera, con le luci e i canti, è più suggestivo.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Sedersi per terra al langar con tutti gli altri e, se si vuole, dare una mano in cucina.",
        lat: 28.6264,
        lng: 77.2091,
        orari: "Aperto giorno e notte, tutti i giorni; il langar serve pasti per tutta la giornata."
      },
      {
        nome: "Dargah di Nizamuddin e i qawwali",
        testo: "Il santuario del santo sufi Nizamuddin Auliya, in un quartiere di vicoli vicino alla Tomba di Humayun. Ogni sera, dopo la preghiera del tramonto, i cantori qawwali suonano davanti alla tomba tra i fedeli.",
        come: "A piedi dalla Tomba di Humayun o dalla stazione Hazrat Nizamuddin. Scarpe tolte, capo coperto, vestiti lunghi.",
        quando: "Ogni sera dopo la preghiera del tramonto; il giovedì è la serata più sentita e affollata.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Le offerte sono volontarie: lasciare solo quello che si vuole, anche se qualcuno insiste.",
        lat: 28.5913,
        lng: 77.2419
      },
      {
        nome: "India Gate, Kartavya Path e i Lodhi Gardens",
        testo: "La Delhi britannica dei grandi viali: l'arco dei caduti di India Gate e il viale cerimoniale verso i palazzi del governo. Poco più a sud i Lodhi Gardens sono un parco pubblico con le tombe dei sultani del Quattrocento.",
        come: "Metro fino a Khan Market per i Lodhi Gardens; India Gate in tuk-tuk o a piedi da Central Secretariat.",
        quando: "Lodhi Gardens all'alba, quando Delhi corre e fa yoga. India Gate al tramonto, quando si illumina.",
        tempo: "2 ore",
        costo: "gratuito",
        consiglio: "Chiudere ai Lodhi Gardens con un caffè a Khan Market: è il pezzo più tranquillo della città.",
        lat: 28.6129,
        lng: 77.2295
      },
      {
        nome: "Purana Qila",
        testo: "Il «forte vecchio», con le mura del Cinquecento costruite da Humayun e da Sher Shah Suri, su un sito abitato da almeno tremila anni. Dentro ci sono la moschea Qila-i-Kuhna e lo Sher Mandal, la torretta da cui, si racconta, Humayun cadde dalle scale. È molto meno affollato del Forte Rosso.",
        come: "Metro blu fino a Supreme Court (ex Pragati Maidan), poi 10 minuti a piedi. Si visita da soli.",
        quando: "Pomeriggio, da abbinare alla Tomba di Humayun, che è a 3 chilometri.",
        tempo: "1 ora",
        costo: "300 rupie per gli stranieri, circa 3 € (Delhi Tourism, 2026)",
        orari: "Tutti i giorni; la sera c'è lo spettacolo di luci e suoni.",
        lat: 28.6096,
        lng: 77.2437,
        url: "https://delhitourism.gov.in/tourist_place/purana_quila.html"
      },
      {
        nome: "Tomba di Safdarjung",
        testo: "L'ultimo grande giardino-tomba moghul di Delhi, finito nel 1754 per il primo ministro Safdarjung. Ripete lo schema della Tomba di Humayun, ma più verticale e decorato: si vede come lo stile moghul cambia nell'ultimo secolo dell'impero.",
        come: "Metro gialla fino a Jor Bagh, poi 5 minuti a piedi. Si visita da soli.",
        quando: "Tardo pomeriggio, prima dei Lodhi Gardens, che sono a 10 minuti.",
        tempo: "45 minuti",
        costo: "300 rupie per gli stranieri, circa 3 € (Delhi Tourism, 2026)",
        orari: "Tutti i giorni dall'alba al tramonto.",
        lat: 28.5894,
        lng: 77.2106,
        url: "https://delhitourism.gov.in/tourist_place/safdarjang_tomb.html"
      },
      {
        nome: "Akshardham",
        testo: "Il grande tempio induista della comunità Swaminarayan, inaugurato nel 2005 sulla riva est della Yamuna: arenaria rosa e marmo scolpiti fino all'ultimo centimetro, con oltre 20.000 statue. Non è antico, ma è impressionante per dimensioni e lavorazione.",
        come: "Metro blu fino ad Akshardham. Telefoni, macchine fotografiche e apparecchi elettronici non entrano: si lasciano al deposito gratuito prima dei controlli.",
        quando: "Tardo pomeriggio, per restare allo spettacolo delle fontane dopo il tramonto.",
        tempo: "2-3 ore",
        costo: "ingresso e tempio gratuiti; mostre 260 rupie (circa 2,5 €), spettacolo delle fontane 110 rupie (akshardham.com, 2026)",
        orari: "Da martedì a domenica, primo ingresso alle 10 e ultimo alle 18.30; chiuso il lunedì.",
        lat: 28.6127,
        lng: 77.2773,
        url: "https://akshardham.com/newdelhi/",
        consiglio: "Senza telefono si perde la cognizione del tempo: fissare prima un punto d'incontro con chi viaggia con voi."
      },
      {
        nome: "Tempio del Loto",
        testo: "La casa di preghiera bahá'í del 1986, a forma di fiore di loto con 27 petali di marmo bianco. Dentro c'è una sala silenziosa aperta a tutte le fedi, senza immagini né prediche.",
        come: "Metro viola o magenta fino a Kalkaji Mandir, poi 10 minuti a piedi. Scarpe al deposito, silenzio nella sala.",
        quando: "Mattina, prima che si formi la coda; bello anche al tramonto dal giardino.",
        tempo: "1 ora",
        costo: "gratuito",
        orari: "Da martedì a domenica, in inverno circa 9-17.30; chiuso il lunedì.",
        lat: 28.5535,
        lng: 77.2588,
        url: "https://bahaihouseofworship.in/"
      },
      {
        nome: "Agrasen ki Baoli",
        testo: "Un pozzo a gradini lungo circa 60 metri, con 103 scalini che scendono tra arcate di pietra, nascosto tra i palazzi moderni vicino a Connaught Place. Le origini sono incerte, ma l'aspetto attuale risale al periodo dei sultani.",
        come: "Metro blu fino a Barakhamba Road, poi 10 minuti a piedi in Hailey Lane.",
        quando: "Metà mattina, quando la luce entra fino ai gradini bassi.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 28.6262,
        lng: 77.225
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Jama Masjid all'apertura",
          "Chandni Chowk in cyclo-risciò e Khari Baoli",
          "Pranzo con i parathe a Paranthe Wali Gali",
          "Tomba di Humayun nel pomeriggio",
          "Qawwali a Nizamuddin, se è giovedì"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Vecchia Delhi, Forte Rosso e Jama Masjid, poi la Tomba di Humayun e Nizamuddin",
          "Giorno 2: Qutub Minar all'apertura e Mehrauli",
          "Lodhi Gardens e Gurudwara Bangla Sahib",
          "India Gate al tramonto, oppure la sera il treno notturno per Varanasi come abbiamo fatto noi"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Vecchia Delhi con Jama Masjid, Chandni Chowk e Forte Rosso",
          "Giorno 2: Tomba di Humayun, Purana Qila e Nizamuddin per i qawwali",
          "Giorno 3: Qutub Minar e Mehrauli al mattino, Tempio del Loto",
          "Safdarjung, Lodhi Gardens e cena a Khan Market; in alternativa Akshardham la sera (non il lunedì)"
        ]
      }
    ],
    zone: [
      {
        nome: "Connaught Place e Karol Bagh",
        perChi: "chi vuole comodità e metro",
        testo: "Al centro della rete metro, vicino alla stazione di New Delhi. Hotel di fascia media e ristoranti ovunque; Karol Bagh è più rumorosa e trafficata.",
        fascia: "50-120 €"
      },
      {
        nome: "South Delhi (Hauz Khas, Defence Colony)",
        perChi: "chi cerca calma",
        testo: "Quartieri residenziali, verdi, con guesthouse curate e locali. Si è più lontani dalla Vecchia Delhi, e con il traffico il tragitto in auto è lungo.",
        fascia: "40-100 €"
      },
      {
        nome: "Paharganj",
        perChi: "budget stretto",
        testo: "Di fronte alla stazione di New Delhi, comodissima per i treni. Economica ma caotica, sporca e piena di procacciatori: va bene per una notte prima di un treno.",
        fascia: "15-40 €"
      },
      {
        nome: "Aerocity",
        perChi: "voli all'alba o a tarda notte",
        testo: "Hotel di catena accanto all'aeroporto, collegati dalla metro Airport Express. Comoda per l'arrivo e la partenza, poco interessante per visitare la città.",
        fascia: "70-150 €"
      }
    ],
    sapori: [
      {
        nome: "Parathe di Paranthe Wali Gali",
        testo: "Pane fritto ripieno di patate, cavolfiore o paneer, servito con chutney e curry di zucca. Si mangia nel vicolo omonimo a Chandni Chowk, nelle botteghe aperte da generazioni."
      },
      {
        nome: "Kebab e curry della Jama Masjid",
        testo: "Intorno alla moschea, verso Matia Mahal, ci sono le cucine mughlai: kebab, nihari di manzo stufato e korma. Karim's è la più nota, aperta dal 1913."
      },
      {
        nome: "Chaat",
        testo: "Spuntini di strada agrodolci: aloo tikki, papdi chaat, golgappa ripieni d'acqua speziata. A Chandni Chowk e nei mercati di quartiere."
      },
      {
        nome: "Chole bhature",
        testo: "Ceci piccanti con un pane fritto che si gonfia come un pallone, la colazione pesante di Delhi. In tutte le botteghe punjabi."
      },
      {
        nome: "Butter chicken",
        testo: "Pollo tandoori in salsa di pomodoro e burro, reso famoso dopo il 1947 dal ristorante Moti Mahal, aperto a Delhi da rifugiati punjabi. Si trova nei ristoranti punjabi di tutta la città."
      }
    ],
    attenzioni: [
      "Chi vi ferma vicino alla stazione di New Delhi dicendo che l'ufficio per i biglietti stranieri è chiuso o si è spostato: l'International Tourist Bureau è dentro la stazione, al piano di sopra, e non chiude «per lavori».",
      "Gli «uffici del turismo» privati intorno a Connaught Place vendono pacchetti cari spacciandosi per enti pubblici.",
      "All'aeroporto e la sera: solo taxi prepagati, Uber o Ola, o il transfer dell'hotel. Non credete a chi dice che l'hotel è chiuso o pieno.",
      "Non accettate cibo o bevande da sconosciuti: il Foreign Office britannico segnala furti dopo bevande drogate.",
      "Tra novembre e gennaio l'aria è spesso pessima: controllate l'indice di qualità dell'aria e portate una mascherina FFP2."
    ],
    gite: [
      {
        nome: "Agra e il Taj Mahal",
        distanza: "circa 2 ore in treno",
        come: "Gatimaan Express o Vande Bharat del mattino presto da Hazrat Nizamuddin o New Delhi, ritorno la sera; da prenotare su IRCTC.",
        testo: "In giornata si vedono il Taj e il Forte di Agra, ma una notte ad Agra permette l'alba al Taj, che vale il viaggio. Il Taj è chiuso il venerdì."
      },
      {
        nome: "Mathura e Vrindavan",
        distanza: "circa 160 km, 2 ore e mezza in auto",
        come: "Auto con autista sulla Yamuna Expressway, o treno per Mathura Junction.",
        testo: "La città natale di Krishna e il villaggio dove avrebbe passato l'infanzia, con centinaia di templi e canti tutto il giorno. Durante Holi è la festa più intensa dell'India."
      },
      {
        nome: "Sultanpur National Park",
        distanza: "circa 50 km, 1 ora e mezza in auto",
        come: "Auto o Uber verso Gurugram e oltre; si gira a piedi lungo il lago.",
        testo: "Un piccolo parco con un lago dove d'inverno arrivano migliaia di uccelli migratori, tra cui gru e pellicani. Mezza giornata di aria più pulita."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Delhi?",
        risposta: "Due giorni bastano per la Vecchia Delhi, la Tomba di Humayun e il Qutub Minar. Con tre si aggiungono Purana Qila, i Lodhi Gardens e Akshardham senza correre."
      },
      {
        domanda: "Delhi è sicura per i turisti?",
        risposta: "Di giorno, nelle zone turistiche e in metro, sì, con le normali attenzioni. I problemi più frequenti sono le truffe all'aeroporto e intorno alla stazione di New Delhi; la sera conviene muoversi con Uber o taxi prepagati."
      },
      {
        domanda: "Come si arriva dall'aeroporto al centro?",
        risposta: "Con la metro Airport Express dal Terminal 3 si è a New Delhi in circa 20 minuti per circa 60-65 rupie. Di notte, taxi prepagato dal banco ufficiale o Uber."
      },
      {
        domanda: "Qual è il periodo migliore per visitare Delhi?",
        risposta: "Ottobre-novembre e febbraio-marzo. Tra novembre e gennaio l'aria è spesso molto inquinata, da aprile a giugno si superano i 40 °C."
      },
      {
        domanda: "Dove dormire a Delhi la prima volta?",
        risposta: "Connaught Place o Karol Bagh per avere la metro sotto casa; South Delhi per la calma; Aerocity solo per voli all'alba o a tarda notte."
      },
      {
        domanda: "Si può andare al Taj Mahal in giornata da Delhi?",
        risposta: "Sì, con il Gatimaan Express o il Vande Bharat in circa 2 ore, tranne il venerdì, quando il Taj è chiuso. Dormire una notte ad Agra permette però di vederlo all'alba."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi', 'india-sud-taj-mahal'],
    imageAlt: 'La Tomba di Humayun a Delhi, in arenaria rossa e marmo bianco, al centro dei giardini moghul',
    immagine: '/images/india/delhi.jpg',
  },
  {
    slug: 'agra',
    paeseSlug: 'india',
    ordine: 2,
    nome: 'Agra e il Taj Mahal',
    tipologia: ['storia moghul', 'patrimonio UNESCO'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Il Taj Mahal l'abbiamo visto due volte: al tramonto il primo giorno e all'alba il giorno dopo. Ai controlli ci sono file, quindi portate il minimo indispensabile e, se potete, niente zainetti. E ricordatevi che il venerdì è chiuso.",
    introduzione:
      'La città del Taj Mahal, il mausoleo di marmo bianco che Shah Jahan fece costruire per la moglie Mumtaz Mahal, e del Forte di Agra, la cittadella moghul in arenaria rossa lungo il fiume Yamuna.',
    percheAndarci:
      'Per vedere il Taj Mahal all\'alba, quando il marmo cambia colore e i giardini sono quasi vuoti. Agra in sé è una città caotica: una notte basta, due se si vuole vederlo anche al tramonto da Mehtab Bagh.',
    cosaVedere: [
      'Il Taj Mahal all\'apertura dei cancelli, con l\'interno del mausoleo',
      'Il Forte di Agra, da cui Shah Jahan prigioniero guardava il Taj',
      'L\'Itimad-ud-Daulah, il «piccolo Taj» intarsiato di pietre dure',
      'Il giardino di Mehtab Bagh, sulla riva opposta del fiume, per il tramonto',
      'Fatehpur Sikri, la capitale abbandonata di Akbar, a circa un\'ora d\'auto',
    ],
    cosaFare: [
      'Entrare dall\'ingresso est all\'alba con il biglietto comprato online',
      'Guardare il Taj al tramonto da Mehtab Bagh o da una terrazza di Taj Ganj',
    ],
    doveDormire: 'Taj Ganj e Fatehabad Road, a distanza di passeggiata dall\'ingresso est del Taj.',
    doveMangiare: 'Cucina mughlai (biryani, korma, kebab) e il petha, il dolce di zucca candita della città.',
    comeArrivare:
      "Da Delhi il treno è il mezzo migliore: Gatimaan Express o Vande Bharat da Hazrat Nizamuddin o New Delhi in circa 1 ora e 40 minuti-2 ore, 800-1.600 rupie secondo la classe, da prenotare su IRCTC (il Gatimaan non circola il venerdì). In auto sulla Yamuna Expressway servono 3-4 ore. Le stazioni sono Agra Cantt e Agra Fort; da lì al Taj 15-20 minuti di tuk-tuk. Da Jaipur 5-6 ore di auto con la sosta a Fatehpur Sikri.",
    comeSpostarsi: 'Tuk-tuk elettrici vicino al Taj (le auto a benzina non possono avvicinarsi), auto con autista per Fatehpur Sikri.',
    periodoMigliore: 'ottobre-marzo; tra dicembre e gennaio la nebbia può coprire il Taj all\'alba per un paio d\'ore.',
    costi:
      "Taj Mahal 1.100 rupie per gli stranieri (circa 11 €), più 200 per l'interno del mausoleo; Forte di Agra 650; Fatehpur Sikri 610; tombe e giardini minori 300-310 (tajmahal.gov.in, 2026; 50 rupie in meno online, gratis sotto i 15 anni). Budget al giorno a persona in doppia: 40-60 € con guesthouse a Taj Ganj, 90-140 € con hotel di fascia media e guida, da 250 € negli hotel di lusso con vista sul Taj.",
    erroriDaEvitare: [
      'Arrivare di venerdì: il Taj Mahal è chiuso',
      'Portare cibo, treppiedi o droni, che non entrano, e borse grandi, che allungano i controlli',
      'Affidarsi alle guide che si offrono ai cancelli senza tesserino',
    ],
    luoghi: [
      {
        nome: "Taj Mahal",
        testo: "Il mausoleo di marmo bianco che Shah Jahan fece costruire per la moglie Mumtaz Mahal, morta nel 1631. La simmetria è totale: giardino, vasche, moschea e foresteria si specchiano ai lati. Da vicino il marmo è intarsiato di pietre dure.",
        come: "Si arriva in tuk-tuk elettrico o in golf cart dai parcheggi, perché le auto non possono avvicinarsi. Due ingressi principali, est e ovest; biglietto online sul portale ufficiale e controlli di sicurezza all'ingresso. Le guide autorizzate hanno il tesserino.",
        quando: "Da mezz'ora prima dell'alba a mezz'ora prima del tramonto. Chiuso il venerdì. In alcune notti intorno alla luna piena c'è la visita notturna, a piccoli gruppi e su prenotazione: date e regole sul sito ufficiale.",
        tempo: "2-3 ore",
        costo: "1.100 rupie (circa 11 €) per gli stranieri, più 200 per l'interno del mausoleo; gratis sotto i 15 anni (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Noi l'abbiamo visto due volte, al tramonto e all'alba del giorno dopo, e ogni ingresso vuole il suo biglietto. Ai controlli ci sono file: portate il minimo indispensabile e, se potete, niente zainetti, per velocizzare tutto.",
        lat: 27.1751,
        lng: 78.0421,
        orari: "Da mezz'ora prima dell'alba a mezz'ora prima del tramonto; chiuso il venerdì."
      },
      {
        nome: "Forte di Agra",
        testo: "La cittadella in arenaria rossa di Akbar, poi ampliata con i padiglioni di marmo di Shah Jahan, che vi passò gli ultimi anni prigioniero del figlio. Dal Musamman Burj si vede il Taj lungo il fiume. È patrimonio UNESCO.",
        come: "Ingresso dall'Amar Singh Gate, a 2,5 chilometri dal Taj, in tuk-tuk. Una guida autorizzata aiuta a capire chi ha costruito cosa.",
        quando: "Tutti i giorni dall'alba al tramonto. Bene la mattina o il primo pomeriggio prima del Taj.",
        tempo: "2 ore",
        costo: "650 rupie (circa 6,5 €) per gli stranieri, 600 il venerdì (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Il venerdì, con il Taj chiuso, è il giorno giusto per il forte: costa un po' meno.",
        lat: 27.1795,
        lng: 78.0211,
        orari: "Tutti i giorni dall'alba al tramonto."
      },
      {
        nome: "Itimad-ud-Daulah",
        testo: "La tomba che Nur Jahan fece costruire per il padre tra il 1622 e il 1628, sulla riva opposta della Yamuna. In marmo bianco intarsiato di pietre dure, segna il passaggio dalle tombe moghul in arenaria rossa al marmo del Taj: per questo la chiamano «piccolo Taj».",
        come: "In tuk-tuk dal Forte attraversando il ponte, circa 20 minuti. Si visita da soli.",
        quando: "Aperto anche il venerdì, a tariffa ridotta; orari sul sito ufficiale. Poca gente a qualsiasi ora.",
        tempo: "45 minuti",
        costo: "310 rupie (circa 3 €) per gli stranieri, 300 il venerdì (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Guardare da vicino gli intarsi: è il laboratorio dove sono state provate le decorazioni del Taj.",
        lat: 27.1929,
        lng: 78.0311,
        orari: "Tutti i giorni dall'alba al tramonto."
      },
      {
        nome: "Mehtab Bagh",
        testo: "Il giardino moghul sulla riva nord della Yamuna, allineato esattamente con il Taj. Da qui il mausoleo si vede di fronte, oltre il fiume, senza folla.",
        come: "In tuk-tuk dall'Itimad-ud-Daulah, 15 minuti. Il belvedere sul fiume è in fondo al giardino.",
        quando: "Il tramonto, e anche il venerdì, quando il Taj è chiuso.",
        tempo: "1 ora",
        costo: "300 rupie (circa 3 €) per gli stranieri (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Se il vostro giorno ad Agra cade di venerdì, il Taj si guarda da qui.",
        lat: 27.1797,
        lng: 78.0425,
        orari: "Tutti i giorni dall'alba al tramonto."
      },
      {
        nome: "Fatehpur Sikri",
        testo: "La capitale che Akbar costruì tra il 1571 e il 1585 e abbandonò poco dopo. Palazzi, cortili e la grande moschea con la Buland Darwaza sono rimasti quasi intatti.",
        come: "A circa 37 chilometri, un'ora d'auto, sulla strada per Jaipur o Ranthambore. Il complesso reale ha il biglietto; nella moschea si entra senza scarpe.",
        quando: "Aperto anche il venerdì, a tariffa ridotta; orari sul sito ufficiale. Mattina, prima che il cortile di arenaria si scaldi.",
        tempo: "2 ore",
        costo: "610 rupie (circa 6 €) per gli stranieri, 600 il venerdì (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Nel cortile della moschea si viene avvicinati da venditori e finte guide: dite subito di no e proseguite.",
        lat: 27.094,
        lng: 77.665,
        orari: "Tutti i giorni dall'alba al tramonto."
      },
      {
        nome: "Tomba di Akbar a Sikandra",
        testo: "Il mausoleo dell'imperatore Akbar, costruito da Jahangir tra il 1605 e il 1613 a circa 8 chilometri dal centro, con una porta monumentale intarsiata di marmo e ardesia e un grande giardino intorno.",
        come: "In auto o tuk-tuk verso nord, sulla strada per Delhi. Si visita da soli.",
        quando: "Aperta anche il venerdì, a tariffa ridotta; orari sul sito ufficiale.",
        tempo: "1 ora",
        costo: "310 rupie (circa 3 €) per gli stranieri, 300 il venerdì (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Una sosta comoda arrivando da Delhi in auto, prima di entrare in città.",
        lat: 27.2204,
        lng: 77.9503,
        orari: "Tutti i giorni dall'alba al tramonto."
      },
      {
        nome: "Museo del Taj",
        testo: "Un piccolo museo dentro il complesso del Taj, nel padiglione sul lato ovest del giardino. Espone miniature di Shah Jahan e Mumtaz Mahal, disegni del mausoleo, calligrafie e piatti di celadon che, si diceva, cambiavano colore a contatto con il veleno.",
        come: "Si entra con il biglietto del Taj, senza supplemento.",
        quando: "A metà visita, quando il sole è alto sul marmo.",
        tempo: "30 minuti",
        orari: "Chiuso il venerdì, come il Taj.",
        lat: 27.1738,
        lng: 78.0408,
        url: "https://www.tajmahal.gov.in/"
      },
      {
        nome: "Jama Masjid di Agra",
        testo: "La moschea del venerdì che Shah Jahan dedicò nel 1648 alla figlia Jahanara, di fronte al Forte, con le cupole a strisce di arenaria rossa e marmo bianco. È il cuore della città vecchia e dei suoi mercati.",
        come: "In tuk-tuk dal Forte, 5 minuti. Scarpe tolte, spalle e gambe coperte.",
        quando: "Fuori dagli orari di preghiera, mai il venerdì a mezzogiorno.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 27.1823,
        lng: 78.0151
      },
      {
        nome: "Kinari Bazar",
        testo: "Il mercato della città vecchia alle spalle della Jama Masjid: nastri dorati per i matrimoni, sari, spezie, dolci e il petha. È l'Agra di chi ci vive, lontano dalle botteghe di marmo per turisti.",
        come: "A piedi dalla Jama Masjid; meglio in cyclo-risciò a prezzo fissato prima.",
        quando: "Tardo pomeriggio, quando il mercato è più vivo.",
        tempo: "1-2 ore",
        lat: 27.184,
        lng: 78.015
      },
      {
        nome: "Chini ka Rauza",
        testo: "La tomba del poeta e ministro persiano Afzal Khan, morto nel 1639, sulla riva est della Yamuna. Era rivestita di piastrelle smaltate in stile persiano, di cui restano frammenti blu, verdi e gialli: un caso unico ad Agra.",
        come: "In tuk-tuk, a un chilometro a nord dell'Itimad-ud-Daulah, sulla stessa strada.",
        quando: "Insieme all'Itimad-ud-Daulah e a Mehtab Bagh.",
        tempo: "20 minuti",
        costo: "ingresso libero",
        lat: 27.1965,
        lng: 78.033
      },
      {
        nome: "Ram Bagh",
        testo: "Considerato il più antico giardino moghul dell'India, legato a Babur, il fondatore della dinastia, negli anni Venti del Cinquecento. Oggi è un giardino a terrazze con canali e padiglioni, poco curato ma quasi sempre vuoto.",
        come: "In tuk-tuk lungo la riva est, dopo Chini ka Rauza.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "30 minuti",
        costo: "300 rupie per gli stranieri, circa 3 € (tajmahal.gov.in, 2026)",
        orari: "Tutti i giorni dall'alba al tramonto.",
        lat: 27.2035,
        lng: 78.0382,
        url: "https://www.tajmahal.gov.in/"
      },
      {
        nome: "Tomba di Mariam-uz-Zamani",
        testo: "La tomba della moglie rajput di Akbar e madre di Jahangir, a Sikandra, a un chilometro da quella del marito. È un edificio sobrio in arenaria, nato come padiglione da giardino e trasformato in mausoleo nel 1623.",
        come: "In auto o tuk-tuk dalla Tomba di Akbar.",
        quando: "Insieme a Sikandra, arrivando da Delhi.",
        tempo: "30 minuti",
        costo: "300 rupie per gli stranieri, circa 3 € (tajmahal.gov.in, 2026)",
        orari: "Tutti i giorni dall'alba al tramonto.",
        lat: 27.2253,
        lng: 77.9531,
        url: "https://www.tajmahal.gov.in/"
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Forte di Agra in mattinata",
          "Itimad-ud-Daulah",
          "Pranzo e riposo in hotel a Taj Ganj",
          "Taj Mahal nel tardo pomeriggio, fino alla chiusura"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Forte di Agra, Itimad-ud-Daulah e Taj Mahal al tramonto",
          "Giorno 2: Taj Mahal all'alba, come abbiamo fatto noi",
          "Colazione e partenza con sosta a Fatehpur Sikri",
          "Se uno dei due giorni è venerdì: Mehtab Bagh al posto del Taj"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Forte di Agra, Jama Masjid e Kinari Bazar, Taj Mahal al tramonto",
          "Giorno 2: Taj Mahal all'alba con il museo, poi riva est: Itimad-ud-Daulah, Chini ka Rauza, Ram Bagh e Mehtab Bagh al tramonto",
          "Giorno 3: Sikandra e la tomba di Mariam, poi Fatehpur Sikri sulla strada per Jaipur"
        ]
      }
    ],
    zone: [
      {
        nome: "Taj Ganj",
        perChi: "chi vuole il Taj a piedi",
        testo: "I vicoli a sud del Taj, a 5-10 minuti dai cancelli: guesthouse economiche e terrazze con vista sulla cupola. Rumoroso, stretto e pieno di procacciatori.",
        fascia: "15-50 €"
      },
      {
        nome: "Fatehabad Road",
        perChi: "fascia media e alta",
        testo: "Il viale degli hotel di catena e di lusso, a 1-2 chilometri dall'ingresso est. Più tranquillo e ordinato, serve un tuk-tuk per tutto.",
        fascia: "50-150 €"
      },
      {
        nome: "Sadar Bazar e Agra Cantt",
        perChi: "chi arriva e riparte in treno",
        testo: "Il quartiere del Cantonment, vicino alla stazione Agra Cantt, con hotel di fascia media, negozi e ristoranti. A 15-20 minuti di tuk-tuk dal Taj, più ordinato di Taj Ganj.",
        fascia: "30-80 €"
      }
    ],
    sapori: [
      {
        nome: "Petha",
        testo: "Il dolce di Agra: cubetti di zucca candita, al naturale, allo zafferano o al cocco. Si compra nelle pasticcerie storiche, come Panchhi Petha."
      },
      {
        nome: "Bedai e jalebi",
        testo: "La colazione di Agra: pane fritto ripieno di lenticchie con curry di patate, poi le spirali fritte nello sciroppo. Nelle botteghe della città vecchia, al mattino."
      },
      {
        nome: "Cucina mughlai",
        testo: "Biryani, korma, kebab e pane naan dal forno tandoor, la cucina di corte dei moghul. Nei ristoranti di Fatehabad Road e Taj Ganj."
      },
      {
        nome: "Dalmoth",
        testo: "Un mix salato e croccante di lenticchie fritte e spezie, da sgranocchiare con il chai. Si vende a peso insieme al petha."
      }
    ],
    attenzioni: [
      "Il Taj Mahal è chiuso il venerdì: controllate il calendario prima di fissare treni e hotel.",
      "Chi si offre come guida ai cancelli senza tesserino ufficiale, o vende biglietti fuori dalle biglietterie.",
      "Le botteghe di marmo intarsiato dove vi porta l'autista o il tuk-tuk pagano una commissione: i prezzi salgono di conseguenza.",
      "Cibo, droni e treppiedi senza permesso non entrano al Taj; borse grandi e libri allungano i controlli.",
      "Tra dicembre e gennaio la nebbia può coprire il Taj all'alba per un paio d'ore."
    ],
    gite: [
      {
        nome: "Fatehpur Sikri e Bharatpur",
        distanza: "37 km a Fatehpur Sikri, altri 20 a Bharatpur",
        come: "Auto con autista per la giornata, oppure in uscita verso Jaipur.",
        testo: "La città fantasma di Akbar al mattino e, d'inverno, il parco nazionale di Keoladeo a Bharatpur, una zona umida patrimonio UNESCO piena di uccelli, da girare in bicicletta o in risciò."
      },
      {
        nome: "Mathura e Vrindavan",
        distanza: "circa 60 km, 1 ora e mezza in auto",
        come: "Auto con autista, o treno fino a Mathura Junction e poi tuk-tuk.",
        testo: "I luoghi di Krishna, con templi aperti dall'alba e canti continui. Si può fare anche come sosta tra Delhi e Agra."
      }
    ],
    faq: [
      {
        domanda: "Il Taj Mahal è chiuso il venerdì?",
        risposta: "Sì, ogni venerdì. Gli altri monumenti di Agra restano aperti, con tariffa ridotta, e il Taj si può guardare dal giardino di Mehtab Bagh, sull'altra riva."
      },
      {
        domanda: "Meglio il Taj Mahal all'alba o al tramonto?",
        risposta: "All'alba c'è meno gente e il marmo passa dal grigio al rosa; al tramonto la luce è calda ma la folla è maggiore. Chi dorme ad Agra può fare entrambi, con due biglietti."
      },
      {
        domanda: "Bisogna prenotare il biglietto del Taj Mahal?",
        risposta: "Non è obbligatorio, ma online sul portale ufficiale costa 50 rupie in meno e si evita la coda in biglietteria. L'ingresso al mausoleo interno si aggiunge allo stesso biglietto."
      },
      {
        domanda: "Quanti giorni servono ad Agra?",
        risposta: "Una notte basta per il Forte, il Taj al tramonto e all'alba. Con due si aggiungono la riva est, Sikandra e Fatehpur Sikri."
      },
      {
        domanda: "Cosa non si può portare al Taj Mahal?",
        risposta: "Cibo, treppiedi, droni, tabacco e oggetti come coltelli restano fuori; borse grandi e zaini allungano i controlli. Acqua e copriscarpe sono dati con il biglietto per stranieri."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi', 'india-sud-taj-mahal'],
    imageAlt: 'Il Taj Mahal simmetrico all\'alba, con la vasca d\'acqua e i cipressi del giardino, Agra',
    immagine: '/images/india/agra-taj-mahal-alba-riccardo.jpg',
  },
  {
    slug: 'jaipur',
    paeseSlug: 'india',
    ordine: 3,
    nome: 'Jaipur',
    tipologia: ['città', 'forti e palazzi', 'bazar'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "A Jaipur abbiamo dormito al Jaipur Heritage Palace, clamoroso: costa poco, ha un servizio super attento e la colazione, nella struttura gemella, è esagerata. Come cene abbiamo fatto cene da maharaja: al Jamavar del The Leela Palace, costoso e con deposito alla prenotazione ma merita tutto, e al 1135 AD dentro il Forte di Amber, molto buono e in una location super suggestiva. Lì alla fine ci hanno invitati a vedere la sala privata dei maharaja, all'ultimo piano.",
    introduzione:
      'La capitale del Rajasthan, la «città rosa» fondata nel Settecento dal maharaja Jai Singh II con una pianta a griglia, mura color terracotta, bazar e alcuni dei palazzi più fotografati dell\'India.',
    percheAndarci:
      'Concentra in due giorni il Forte di Amber, l\'Hawa Mahal, il City Palace e l\'osservatorio del Jantar Mantar, più i mercati migliori del Rajasthan per tessuti stampati a blocchi, gioielli e scarpe ricamate.',
    cosaVedere: [
      'Il Forte di Amber, con la Sala degli specchi, al mattino presto',
      'L\'Hawa Mahal, il Palazzo dei venti',
      'Il City Palace e il Jantar Mantar',
      'Il Jal Mahal sul lago Man Sagar e il pozzo a gradini di Panna Meena',
      'Il Forte di Nahargarh al tramonto',
    ],
    cosaFare: [
      'Salire ad Amber a piedi lungo la rampa',
      'Girare Johari Bazar e Bapu Bazar',
      'Un laboratorio di stampa a blocchi dei tessuti',
      'Un thali rajasthano e un lassi in vasetto di terracotta',
    ],
    doveDormire: 'Haveli e hotel heritage nella città vecchia o a Bani Park.',
    doveMangiare: 'Dal baati churma, laal maas, ker sangri, kachori al mattino e lassi.',
    comeArrivare:
      "Da Delhi in treno in circa 4-5 ore (alcuni Vande Bharat e Shatabdi), in auto in 5 ore o in aereo in un'ora. Da Agra in auto 5-6 ore, con la sosta a Fatehpur Sikri o ad Abhaneri. L'aeroporto di Jaipur è a Sanganer, circa 12 km a sud del centro: 30-40 minuti in Uber o taxi prepagato. La stazione Jaipur Junction è a 15 minuti di tuk-tuk dalla città vecchia.",
    comeSpostarsi: 'Tuk-tuk, Uber e Ola, autista per Amber e Nahargarh.',
    periodoMigliore: 'ottobre-marzo.',
    costi:
      "Dal 1° gennaio 2026 gli stranieri pagano 1.000 rupie (circa 10 €) ad Amber e 600 (circa 6 €) a Hawa Mahal, Jantar Mantar, Nahargarh e Albert Hall; il biglietto composito vale 10 giorni per i monumenti statali del Rajasthan (5.500 rupie secondo la stampa locale). Il City Palace, privato, ha tariffe proprie. Budget al giorno a persona in doppia: 40-60 € in guesthouse, 90-140 € in hotel heritage con autista, da 250 € nei palazzi-hotel.",
    erroriDaEvitare: [
      'Credere alla proposta di comprare gemme da rivendere in Italia',
      'Salire ad Amber a dorso d\'elefante',
      'Visitare Amber a mezzogiorno, con il caldo e i gruppi',
    ],
    luoghi: [
      {
        nome: "Forte di Amber",
        testo: "Il palazzo-fortezza dei Kachwaha, sulle colline a 11 chilometri dalla città, con le mura che scendono fino al lago Maota. Dentro, cortili e sale tra cui lo Sheesh Mahal, la sala degli specchi. È patrimonio UNESCO tra i forti di collina del Rajasthan.",
        come: "Con l'autista o Uber fino ai piedi del forte, poi la rampa a piedi, oppure in jeep. Una guida autorizzata o l'audioguida aiutano a orientarsi tra i cortili.",
        quando: "All'apertura del mattino, prima dei pullman e del caldo.",
        tempo: "2-3 ore",
        costo: "1.000 rupie (circa 10 €) per gli stranieri secondo la revisione statale in vigore dal 1° gennaio 2026",
        consiglio: "Dentro il forte c'è il ristorante 1135 AD: noi ci siamo tornati per cena, molto buono e in una location super suggestiva. Alla fine ci hanno invitati a vedere la sala privata dei maharaja, all'ultimo piano, dove cenano ancora e accolgono le persone importanti.",
        lat: 26.9855,
        lng: 75.8513,
        orari: "Tutti i giorni dalle 8 alle 17.30 circa."
      },
      {
        nome: "Hawa Mahal",
        testo: "Il Palazzo dei venti, costruito nel 1799: una facciata rosa di cinque piani con 953 finestrelle a grata, da cui le donne di corte guardavano la strada senza essere viste. Dietro la facciata è uno schermo sottile.",
        come: "Nella città vecchia, vicino a Badi Chaupar. L'ingresso è dal lato del City Palace; la facciata si guarda dalla strada o dalle terrazze dei caffè di fronte.",
        quando: "Mattina presto: la facciata guarda a est e prende il primo sole.",
        tempo: "45 minuti",
        costo: "600 rupie (circa 6 €) per gli stranieri (tariffa statale dal 1° gennaio 2026)",
        consiglio: "La foto migliore è da una terrazza dall'altra parte della strada, con un chai, prima delle 9.",
        lat: 26.9239,
        lng: 75.8267
      },
      {
        nome: "City Palace",
        testo: "La residenza della famiglia reale di Jaipur, ancora abitata in parte: cortili, porte dipinte con i pavoni, armerie e collezioni di tessuti. Il Chandra Mahal, dove vive la famiglia, si visita solo con il Royal Tour.",
        come: "Nel cuore della città vecchia, accanto al Jantar Mantar. Il Royal Tour, con guida e rinfresco, si compra solo in biglietteria.",
        quando: "Tutti i giorni dalle 9.30 alle 18.30, chiuso solo il secondo giorno di Holi. La galleria dei tessuti del Mubarak Mahal è chiusa per restauro dal marzo 2026.",
        tempo: "1 ora e mezza-2 ore",
        costo: "Royal Tour 4.000 rupie a persona; le tariffe del museo sul sito ufficiale (citypalace.org, 2026)",
        url: "https://citypalace.org/visit",
        consiglio: "Abbinarlo al Jantar Mantar, che è a due passi: si fanno entrambi nello stesso pomeriggio.",
        lat: 26.9258,
        lng: 75.8237,
        orari: "Tutti i giorni dalle 9.30 alle 18.30; chiuso solo il secondo giorno di Holi."
      },
      {
        nome: "Jantar Mantar",
        testo: "L'osservatorio astronomico costruito da Jai Singh II nel Settecento, con strumenti di pietra giganti. La meridiana del Samrat Yantra è alta circa 27 metri e, si dice, segna l'ora con una precisione di circa due secondi. È patrimonio UNESCO.",
        come: "Accanto al City Palace. Senza spiegazioni gli strumenti sembrano sculture: meglio una guida o l'audioguida.",
        quando: "Di giorno con il sole, che serve a vedere come funzionano le meridiane.",
        tempo: "1 ora",
        costo: "600 rupie (circa 6 €) per gli stranieri (tariffa statale dal 1° gennaio 2026)",
        consiglio: "Andarci a metà giornata: è l'unico posto di Jaipur dove il sole alto aiuta.",
        lat: 26.9248,
        lng: 75.8246
      },
      {
        nome: "Jal Mahal e Panna Meena ka Kund",
        testo: "Il Jal Mahal è un palazzo che sembra galleggiare sul lago Man Sagar, sulla strada di Amber; non si visita, si guarda dalla passeggiata. Vicino al forte c'è Panna Meena ka Kund, un pozzo a gradini del Cinquecento con le scalinate incrociate.",
        come: "Soste lungo la strada per Amber, con l'autista. Il pozzo è a 10 minuti a piedi dal parcheggio del forte.",
        quando: "Il pozzo al mattino, con la luce radente sulle scale. Il Jal Mahal anche al tramonto.",
        tempo: "1 ora in tutto",
        costo: "gratuiti",
        consiglio: "Sui gradini del pozzo non si può più scendere: le foto si fanno dal bordo.",
        lat: 26.9535,
        lng: 75.8462
      },
      {
        nome: "Forte di Nahargarh",
        testo: "Il forte sulla cresta sopra la città, costruito nel 1734. Dalle mura si vede tutta Jaipur, rosa e polverosa, che si accende al tramonto.",
        come: "In auto con l'autista lungo la strada di cresta. Dentro c'è il palazzo Madhavendra con gli appartamenti delle regine.",
        quando: "Il tardo pomeriggio fino al tramonto.",
        tempo: "1 ora e mezza",
        costo: "600 rupie (circa 6 €) per gli stranieri (tariffa statale dal 1° gennaio 2026)",
        consiglio: "Non scendere a piedi al buio: si rientra in auto.",
        lat: 26.9373,
        lng: 75.8155
      },
      {
        nome: "Albert Hall Museum",
        testo: "Il museo più antico del Rajasthan, in un edificio indo-saraceno del 1887 al centro dei giardini Ram Niwas. Raccoglie armi, tappeti, miniature e una mummia egizia.",
        come: "Appena fuori dalla città vecchia, in tuk-tuk. Il percorso è breve e ben segnalato.",
        quando: "Di giorno per il museo; la sera l'edificio è illuminato.",
        tempo: "1 ora",
        consiglio: "Ingresso 600 rupie per gli stranieri. Il biglietto composito statale vale 10 giorni in tutto il Rajasthan: conviene solo se si visitano molti monumenti statali anche fuori Jaipur.",
        lat: 26.9116,
        lng: 75.8195,
        costo: "600 rupie per gli stranieri, circa 6 € (tariffa statale dal 1° gennaio 2026)"
      },
      {
        nome: "I bazar della città vecchia",
        testo: "Jaipur è la città migliore del Rajasthan per comprare: Johari Bazar per gioielli e tessuti, Bapu Bazar per le scarpe ricamate (jutti) e le stoffe stampate a blocchi, Tripolia per i braccialetti di lacca.",
        come: "A piedi sotto i portici della città vecchia. Per vedere la stampa a blocchi si va nei laboratori di Sanganer o Bagru, fuori città.",
        quando: "Tarda mattina, quando i negozi aprono e prima del caldo.",
        tempo: "mezza giornata",
        consiglio: "Trattare con calma e non comprare mai pietre «da rivendere in Italia».",
        lat: 26.9196,
        lng: 75.8267,
        orari: "Negozi aperti più o meno dalle 10-11 alle 20; alcuni chiudono la domenica."
      },
      {
        nome: "Forte di Jaigarh",
        testo: "Il forte militare sopra Amber, collegato al palazzo da un camminamento sulle mura. Custodisce il Jaivana, uno dei più grandi cannoni su ruote del mondo, fuso qui nel 1720, e le cisterne che davano acqua alla guarnigione.",
        come: "In auto lungo la strada di cresta, oppure a piedi da Amber in salita. Il biglietto è separato da quello statale.",
        quando: "Dopo Amber, a fine mattina; si abbina a Nahargarh, sulla stessa cresta.",
        tempo: "1 ora e mezza",
        lat: 26.9851,
        lng: 75.8456
      },
      {
        nome: "Galtaji, il tempio delle scimmie",
        testo: "Un complesso di templi e vasche sacre in una gola delle colline a est della città, alimentato da una sorgente naturale. I pellegrini si bagnano nelle vasche e centinaia di macachi vivono tra i padiglioni.",
        come: "In tuk-tuk o auto, circa 20 minuti dalla città vecchia. Dal Surya Mandir, in cima, si vede tutta Jaipur.",
        quando: "Tardo pomeriggio, verso il tramonto.",
        tempo: "1 ora e mezza",
        costo: "ingresso libero; a volte si chiede una piccola tassa per la fotocamera",
        lat: 26.9196,
        lng: 75.8586,
        consiglio: "Niente cibo in mano e occhiali ben stretti: le scimmie sono svelte."
      },
      {
        nome: "Birla Mandir",
        testo: "Il tempio di Lakshmi Narayan, in marmo bianco, costruito nel 1988 ai piedi del forte di Moti Dungri. Le vetrate e le sculture mescolano divinità induiste e figure di altre religioni.",
        come: "In tuk-tuk, a sud della città vecchia. Scarpe al deposito; dentro niente foto.",
        quando: "Al tramonto e la sera, quando il marmo è illuminato.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        lat: 26.8921,
        lng: 75.8155
      },
      {
        nome: "Patrika Gate",
        testo: "Una porta monumentale moderna all'ingresso di Jawahar Circle, con nove arcate dipinte a mano che raccontano città e tradizioni del Rajasthan. È diventata uno dei luoghi più fotografati della città.",
        come: "In Uber o tuk-tuk, a sud vicino all'aeroporto: si combina con l'arrivo o la partenza.",
        quando: "Mattina presto, prima dei servizi fotografici.",
        tempo: "30 minuti",
        costo: "gratuito",
        lat: 26.8418,
        lng: 75.8013
      },
      {
        nome: "Anokhi Museum of Hand Printing",
        testo: "Un museo dedicato alla stampa a blocchi su tessuto, in una haveli restaurata nel paese di Amber. Spiega la tecnica dai blocchi di legno intagliati ai colori naturali, spesso con un artigiano che stampa davanti ai visitatori.",
        come: "A piedi dal parcheggio del Forte di Amber, nei vicoli del paese vicino alla Keri Gate.",
        quando: "Dopo Amber, nella stessa mattina. Orari e chiusure sul sito ufficiale.",
        tempo: "1 ora",
        lat: 26.9875,
        lng: 75.8537,
        url: "https://www.anokhimuseum.com/"
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Forte di Amber all'apertura",
          "Panna Meena ka Kund e Jal Mahal",
          "City Palace e Jantar Mantar nel pomeriggio",
          "Hawa Mahal",
          "Tramonto da Nahargarh"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Hawa Mahal all'alba, Amber, Panna Meena e Jal Mahal, cena al 1135 AD dentro il forte",
          "Giorno 2: City Palace e Jantar Mantar",
          "Bazar della città vecchia e un laboratorio di stampa a blocchi",
          "Albert Hall e tramonto da Nahargarh, cena al Jamavar"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: Hawa Mahal all'alba, Amber, Anokhi Museum e Jaigarh, Panna Meena e Jal Mahal",
          "Giorno 2: City Palace e Jantar Mantar, bazar della città vecchia, Nahargarh al tramonto",
          "Giorno 3: Patrika Gate al mattino, Albert Hall, Galtaji nel pomeriggio e Birla Mandir la sera"
        ]
      }
    ],
    zone: [
      {
        nome: "Città vecchia (Pink City)",
        perChi: "chi vuole i monumenti a piedi",
        testo: "Haveli trasformate in hotel dentro le mura, a pochi minuti da Hawa Mahal e City Palace. Atmosfera unica, ma traffico, clacson e strade affollate fino a sera.",
        fascia: "30-120 €"
      },
      {
        nome: "Bani Park e Civil Lines",
        perChi: "calma e hotel heritage",
        testo: "Quartieri residenziali appena a ovest delle mura, con molti hotel heritage e giardini. Si va in città vecchia in 10-15 minuti di tuk-tuk.",
        fascia: "40-120 €"
      },
      {
        nome: "C-Scheme e MI Road",
        perChi: "ristoranti e comodità",
        testo: "Il centro moderno, con caffè, ristoranti e hotel di catena. Comodo e pulito, meno caratteristico.",
        fascia: "50-150 €"
      }
    ],
    sapori: [
      {
        nome: "Le cene da maharaja",
        testo: "Noi a Jaipur abbiamo fatto cene da maharaja. Al Jamavar, il ristorante indiano del The Leela Palace: costoso e con prenotazione con deposito, ma merita tutto. E al 1135 AD, dentro il Forte di Amber: molto buono e in una location super suggestiva."
      },
      {
        nome: "Il cibo di strada",
        testo: "Durante il giorno abbiamo sempre mangiato per strada e siamo sempre stati bene di pancia, fortunelli. La regola è cibo cotto davanti a voi e servito bollente, nei banchi pieni di gente del posto."
      },
      {
        nome: "Pyaaz kachori",
        testo: "Frittella ripiena di cipolla speziata, la colazione di Jaipur. Le botteghe storiche, come Rawat Mishthan Bhandar, la friggono dal mattino presto."
      },
      {
        nome: "Dal baati churma",
        testo: "Il piatto del Rajasthan: palline di pane cotte nella brace e bagnate nel ghi, con lenticchie e una briciola dolce di grano. Nei ristoranti di cucina rajasthana e nei thali."
      },
      {
        nome: "Laal maas",
        testo: "Curry di montone rosso e piccante, fatto con i peperoncini di Mathania. Nei ristoranti di cucina rajput."
      },
      {
        nome: "Lassi in vasetto di terracotta",
        testo: "Yogurt dolce e denso servito nel kulhad, il bicchiere di terracotta che si butta. Il più famoso è quello dei Lassiwala di MI Road."
      }
    ],
    attenzioni: [
      "La truffa delle gemme: un negoziante gentile vi propone di portare pietre in Italia da rivendere con un grosso guadagno. Le pietre valgono poco e i soldi non tornano.",
      "Tuk-tuk e autisti portano nei negozi dove prendono commissione: dite chiaramente dove volete andare.",
      "Non salite ad Amber a dorso d'elefante: le associazioni per il benessere animale lo sconsigliano.",
      "Scegliete bene l'autista per il Rajasthan: il nostro era uno squinternato, e non lo consiglio. Si ferma spesso nei ristoranti «per turisti» dove mangia gratis: si può chiedere un dhaba normale.",
      "I prezzi dei monumenti statali sono cambiati il 1° gennaio 2026: verificate le tariffe sul portale ufficiale prima di partire."
    ],
    gite: [
      {
        nome: "Chand Baori ad Abhaneri",
        distanza: "circa 95 km, 1 ora e mezza-2 ore in auto",
        come: "Auto con autista, anche come sosta tra Agra e Jaipur.",
        testo: "Uno dei pozzi a gradini più profondi dell'India, del IX secolo, con oltre 3.500 scalini disposti a zigzag su tredici livelli. Accanto c'è il tempio di Harshat Mata."
      },
      {
        nome: "Sanganer e Bagru",
        distanza: "15-30 km, 30-60 minuti in auto",
        come: "Tuk-tuk o autista per mezza giornata.",
        testo: "I villaggi dei tintori e degli stampatori a blocchi: a Bagru si stampa ancora con colori naturali e fango, a Sanganer anche la carta fatta a mano."
      },
      {
        nome: "Pushkar e Ajmer",
        distanza: "circa 145 km, 2 ore e mezza-3 ore in auto",
        come: "Auto con autista, o treno fino ad Ajmer e 30 minuti di strada; meglio con una notte a Pushkar.",
        testo: "Il dargah sufi di Ajmer e la città santa di Pushkar, con il lago e i ghat. In giornata è stancante: chi può ci dorme."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Jaipur?",
        risposta: "Due giorni pieni per Amber, la città vecchia e Nahargarh; tre per aggiungere Jaigarh, Galtaji e un laboratorio di stampa a blocchi."
      },
      {
        domanda: "Conviene il biglietto composito di Jaipur?",
        risposta: "Dal 2026 è un pass di 10 giorni per tutti i monumenti statali del Rajasthan e costa più della somma dei biglietti di Jaipur. Conviene solo a chi visita molti siti statali anche in altre città."
      },
      {
        domanda: "A che ora apre il Forte di Amber?",
        risposta: "Alle 8. Conviene essere lì all'apertura, prima dei pullman e del caldo, e salire a piedi lungo la rampa."
      },
      {
        domanda: "Dove dormire a Jaipur?",
        risposta: "Nella città vecchia per avere i monumenti a piedi, a Bani Park per un hotel heritage tranquillo, in C-Scheme per ristoranti e comodità."
      },
      {
        domanda: "Si può salire ad Amber in elefante?",
        risposta: "Si può, ma le associazioni per il benessere animale lo sconsigliano. La rampa a piedi richiede una ventina di minuti, oppure si sale in jeep."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: 'La facciata rosa dell\'Hawa Mahal di Jaipur, con le finestre a grata e le persiane verdi',
    immagine: '/images/india/jaipur-hawa-mahal-facciata-riccardo.jpg',
  },
  {
    slug: 'ranthambore',
    paeseSlug: 'india',
    ordine: 4,
    nome: 'Ranthambore',
    tipologia: ['parco nazionale', 'safari', 'tigri'],
    giorniConsigliati: '2 notti, almeno due safari',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci siamo mossi tardi con la prenotazione e ci è toccato il canter, non la jeeppina, ma siamo stati fortunati lo stesso: in un solo safari del mattino abbiamo visto tre tigri, e anche due orsetti che correvano. Le zone del parco le assegnano a caso il giorno stesso, quindi conviene fare almeno due safari.",
    introduzione:
      'Uno dei parchi delle tigri più famosi dell\'India, tra Agra e Jaipur: foresta secca, laghi e rovine, con un forte medievale su una rupe dentro il parco. Si visita solo con i safari ufficiali, in jeep o in camion scoperto.',
    percheAndarci:
      'Per vedere le tigri in libertà a poche ore da Jaipur. Oltre alle tigri ci sono leopardi, orsi labiati, coccodrilli nei laghi e molti cervi. Il Forte di Ranthambore è patrimonio UNESCO con gli altri forti di collina del Rajasthan.',
    cosaVedere: [
      'Il parco nei safari del mattino e del pomeriggio',
      'Il Forte di Ranthambore e il tempio di Ganesh in cima alla rupe',
    ],
    cosaFare: [
      'Almeno due safari, perché le zone sono assegnate a caso',
      'Prenotare la gypsy, la jeep da 6 posti, invece del canter da una ventina',
    ],
    doveDormire: 'Lodge e hotel lungo la strada del parco a Sawai Madhopur, molti con il ritiro per i safari.',
    comeArrivare: 'Da Agra circa 5-6 ore di auto, da Jaipur circa 3,5-4. La stazione è Sawai Madhopur, sulla linea Delhi-Mumbai.',
    comeSpostarsi: 'Con i mezzi dei safari (gypsy o canter) che passano a prendere in hotel.',
    periodoMigliore:
      'ottobre-giugno; le zone centrali (1-5) chiudono con il monsone, da luglio a settembre, mentre alcune zone esterne restano aperte. Da marzo a giugno fa caldo, ma gli animali si vedono di più intorno all\'acqua.',
    erroriDaEvitare: [
      'Muoversi tardi con la prenotazione: le gypsy finiscono per prime',
      'Fare un solo safari: la zona assegnata può essere quella sbagliata',
      'Vestiti dai colori accesi e voce alta durante il safari',
    ],
    luoghi: [
      {
        nome: "Il parco nei safari",
        testo: "Foresta secca, laghi e rovine dove vivono tigri, leopardi, orsi labiati, coccodrilli e molti cervi sambar. Il parco è diviso in zone e ogni safari ne percorre una sola, assegnata dal Forest Department.",
        come: "Solo con i safari ufficiali, in gypsy (jeep da 6 posti) o canter (camion scoperto da una ventina), che passano a prendere in hotel. Si prenota con il passaporto sul portale del Forest Department o tramite l'hotel.",
        quando: "Due turni al giorno, al mattino presto e nel pomeriggio, con orari che cambiano con la stagione. Le zone 1-5 chiudono da luglio a settembre. Da marzo a giugno fa caldo ma gli animali si vedono vicino all'acqua.",
        tempo: "qualche ora per safari, durata secondo la stagione; almeno due safari",
        consiglio: "Noi ci siamo mossi tardi e abbiamo fatto il canter, ma siamo stati fortunati lo stesso: 3 tigri in un solo safari del mattino, e anche due orsetti che correvano. Se volete la gypsy prenotate con largo anticipo, e fate sempre almeno due safari: la zona non si sceglie, è assegnata a caso."
      },
      {
        nome: "Forte di Ranthambore",
        testo: "Un forte medievale, fondato forse intorno al X secolo, su una rupe dentro il parco, con mura, cisterne e il tempio di Trinetra Ganesh, meta di pellegrinaggio. È patrimonio UNESCO tra i forti di collina del Rajasthan.",
        come: "Si sale dalla porta del parco con l'auto o il tuk-tuk, poi a piedi per le scalinate, come i pellegrini diretti al tempio di Ganesh.",
        quando: "La mattina, tra un safari e l'altro. Il mercoledì il tempio di Ganesh richiama migliaia di fedeli.",
        tempo: "2 ore",
        consiglio: "Lungo le mura si vedono spesso langur e a volte animali del parco sotto la rupe."
      },
      {
        nome: "I laghi di Padam Talao e Rajbagh",
        testo: "Nelle zone centrali del parco ci sono i laghi più fotografati, con il palazzo di caccia di Jogi Mahal e le rovine di Rajbagh sull'acqua. Coccodrilli, uccelli acquatici e cervi che bevono.",
        come: "Si vedono solo se il vostro safari ha una delle zone centrali.",
        quando: "Nella stagione secca, quando gli animali si concentrano intorno all'acqua.",
        tempo: "dentro un safari",
        consiglio: "Chiedere all'hotel quali zone stanno dando buoni avvistamenti: non si sceglie, ma aiuta a capire cosa aspettarsi."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Safari del mattino",
          "Forte di Ranthambore e il tempio di Ganesh",
          "Safari del pomeriggio"
        ]
      },
      {
        titolo: "2 notti",
        tappe: [
          "Giorno 1: arrivo, safari del pomeriggio",
          "Giorno 2: safari del mattino, forte, safari del pomeriggio",
          "Giorno 3: un ultimo safari all'alba e partenza per Jaipur"
        ]
      }
    ],
    zone: [
      {
        nome: "Ranthambore Road",
        perChi: "chi viene per i safari",
        testo: "La strada tra Sawai Madhopur e la porta del parco, con lodge e resort in ogni fascia. Molti organizzano il ritiro per i safari; si dorme tranquilli, ma intorno non c'è nulla."
      },
      {
        nome: "Sawai Madhopur",
        perChi: "chi arriva in treno con poco budget",
        testo: "Il paese vicino alla stazione, con hotel semplici. Comodo per i treni, meno per i safari: i mezzi passano comunque, ma più presto."
      }
    ],
    attenzioni: [
      "Molti siti con nomi simili a quello ufficiale rivendono i safari a prezzo più alto: prenotate sul portale del Forest Department o tramite un hotel serio.",
      "Le tigri non sono garantite: due o tre safari aumentano molto le probabilità.",
      "Tra dicembre e febbraio le mattine sui mezzi scoperti sono fredde: servono strati, un berretto e i guanti.",
      "Colori accesi, voce alta e cibo sui mezzi sono vietati o mal tollerati dai ranger."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: 'Una tigre sdraiata in una pozza d\'acqua tra l\'erba secca di Ranthambore',
    immagine: '/images/india/ranthambore-tigre-pozza-riccardo.jpg',
  },
  {
    slug: 'pushkar',
    paeseSlug: 'india',
    ordine: 5,
    nome: 'Pushkar',
    tipologia: ['città santa', 'lago', 'atmosfera'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci siamo passati a fine febbraio, nel tratto in auto con l'autista tra Jaipur e Jodhpur: una notte sul lago e il giro all'alba la mattina dopo, prima di ripartire.",
    introduzione:
      'Una piccola città santa attorno a un lago con una cinquantina di ghat, dove si trova uno dei pochissimi templi dedicati a Brahma in India. Vegetariana per tradizione: niente carne, niente uova e niente alcol.',
    percheAndarci:
      'Per rallentare tra Jaipur e Jodhpur: i ghat al tramonto, i canti della sera, i vicoli dei bazar. Intorno alla luna piena di Kartik (ottobre-novembre) ospita la fiera dei cammelli.',
    cosaVedere: ['I ghat sul lago al tramonto', 'Il tempio di Brahma', 'Il tempio di Savitri sulla collina, raggiungibile a piedi o in funivia'],
    cosaFare: ['Salire al tempio di Savitri per l\'alba', 'Assistere all\'aarti serale sui ghat', 'Visitare la fiera dei cammelli, se le date coincidono'],
    doveDormire: 'Guesthouse e piccoli hotel con terrazza sul lago; durante la fiera i prezzi si moltiplicano.',
    doveMangiare: 'Thali vegetariani, malpua (frittelle dolci) e caffè sulle terrazze.',
    comeArrivare: "Da Jaipur sono circa 3 ore d'auto. In treno si arriva ad Ajmer, stazione sulle linee da Delhi e Jaipur, e da lì restano circa 15 km e mezz'ora di strada oltre la collina di Nag Pahar, in taxi, tuk-tuk o bus locale. Per proseguire, Jodhpur è a 4-5 ore d'auto. L'aeroporto con più voli è quello di Jaipur. Il centro intorno al lago è pedonale: l'auto lascia ai margini del bazar.",
    comeSpostarsi: 'A piedi.',
    periodoMigliore: 'ottobre-marzo; fiera dei cammelli intorno alla luna piena di Kartik.',
    costi: "Templi e ghat sono gratuiti; la funivia per Savitri è a pagamento. Budget al giorno a persona in doppia: 20-35 € in guesthouse con thali e chai, 50-80 € in un hotel con piscina e qualche taxi, da 150 € nei resort e nei campi di lusso; durante la fiera dei cammelli i prezzi degli alloggi si moltiplicano.",
    erroriDaEvitare: [
      'Accettare il fiore «in regalo» per la puja sui ghat: segue la richiesta di una donazione',
      'Fotografare i bagnanti sui ghat senza chiedere',
    ],
    luoghi: [
      {
        nome: "Il lago sacro e i ghat",
        testo: "Un piccolo lago circondato da circa 52 ghat e da case bianche, dove secondo la leggenda cadde un fiore di loto di Brahma. Al tramonto campane e canti riempiono l'acqua.",
        come: "A piedi dal bazar. Scarpe tolte sui ghat; fotografare chi fa il bagno senza chiedere è mal visto.",
        quando: "L'alba e il tramonto, con l'aarti serale sui ghat principali come Varaha e Gau Ghat.",
        tempo: "2 ore",
        costo: "gratuito",
        consiglio: "Sedersi su una terrazza sul lago al tramonto invece che sui gradini: si guarda la cerimonia senza essere avvicinati.",
        lat: 26.48722,
        lng: 74.55417,
      },
      {
        nome: "Tempio di Brahma",
        testo: "Uno dei pochissimi templi dell'India dedicati a Brahma, il dio creatore. L'edificio attuale è del Trecento, con la guglia rossa e il pavimento di monete d'argento lasciate dai fedeli.",
        come: "Nel bazar, a piedi. Scarpe tolte prima di entrare.",
        quando: "Mattina presto o tardo pomeriggio: a metà giornata chiude, di solito dalle 13.30 alle 15.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Chi vi offre di accompagnarvi «per la benedizione» chiederà un'offerta: si entra benissimo da soli.",
        orari: "Aperto dalla mattina presto alla sera, con una pausa a metà giornata (di solito 13:30-15:00).",
        lat: 26.48732,
        lng: 74.54893,
      },
      {
        nome: "Tempio di Savitri",
        testo: "Il tempio della moglie di Brahma, in cima alla collina di Ratnagiri, dietro il tempio di Brahma. Da su si vedono Pushkar, il lago e il deserto.",
        come: "A piedi su una lunga scalinata, oppure in funivia (orari e prezzi sul posto).",
        quando: "All'alba, partendo al buio con una torcia, o al tramonto.",
        tempo: "2 ore con la salita",
        consiglio: "Portare acqua: lungo la scalinata non c'è nulla.",
        lat: 26.48596,
        lng: 74.54606,
      },
      {
        nome: "La fiera dei cammelli",
        testo: "Una delle fiere di cammelli, cavalli e bestiame più grandi dell'India: migliaia di cammelli, mercanti, gare e pellegrini. Si tiene nei giorni che precedono la luna piena di Kartik e finisce quel giorno: nel 2026 il 24 novembre.",
        come: "Nel terreno delle fiere, a piedi dal centro. Le date esatte le pubblica il governo del Rajasthan.",
        quando: "I primi giorni, quando si commerciano i cammelli; gli ultimi cinque, intorno alla luna piena, sono i più affollati di pellegrini.",
        tempo: "una mezza giornata",
        consiglio: "Prenotare l'alloggio con mesi di anticipo: in quei giorni i prezzi si moltiplicano."
      },
      {
        nome: "Tempio di Varaha",
        testo: "Uno dei templi più antichi di Pushkar, dedicato a Varaha, l'incarnazione di Vishnu in forma di cinghiale, accanto al ghat che porta lo stesso nome. Distrutto e ricostruito più volte, l'edificio attuale è del Settecento.",
        come: "A piedi dal bazar, sulla riva del lago. Scarpe tolte.",
        quando: "Al mattino o prima dell'aarti serale al Varaha Ghat.",
        tempo: "30 minuti",
        costo: "Ingresso libero.",
      },
      {
        nome: "Tempio di Old Rangji",
        testo: "Un tempio dell'Ottocento dedicato a Vishnu come Rangji, con la torre d'ingresso in stile dell'India del sud: un'eccezione nel Rajasthan, che mescola elementi rajput e moghul. Si vede bene dal bazar.",
        come: "A piedi nel bazar, tra il tempio di Brahma e il lago.",
        quando: "Al mattino o nel tardo pomeriggio.",
        tempo: "20-30 minuti",
      },
      {
        nome: "Tempio di Pap Mochani",
        testo: "Un piccolo tempio su una collina ai margini del paese, con una salita molto più breve di quella di Savitri. Da su si vede Pushkar con il lago e le dune verso il deserto, ed è un buon posto per l'alba.",
        come: "A piedi dal paese, su un sentiero con gradini.",
        quando: "All'alba o al tramonto.",
        tempo: "1 ora con la salita",
        lat: 26.49639,
        lng: 74.55427,
        consiglio: "Per chi non ha le gambe per Savitri, la vista è quasi la stessa.",
      },
      {
        nome: "Il bazar principale",
        testo: "La lunga strada pedonale che corre parallela al lago, dal tempio di Brahma al Varaha Ghat. Botteghe di tessuti, argento, strumenti musicali, prodotti di rosa e dolci fritti nel ghi, con mucche e pellegrini in mezzo.",
        come: "A piedi: le auto restano fuori.",
        quando: "Al mattino presto per camminare in pace, la sera per l'atmosfera.",
        tempo: "1-2 ore",
        costo: "Gratuito.",
        consiglio: "Contrattare con calma: i primi prezzi per gli stranieri sono spesso alti.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Arrivo da Jaipur e tramonto sui ghat",
          "Aarti serale al Varaha Ghat",
          "Alba al tempio di Savitri",
          "Tempio di Brahma e bazar, poi partenza per Jodhpur",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra, fino all'aarti",
          "Giorno 2: alba a Savitri, tempio di Brahma, Old Rangji e Varaha",
          "Pomeriggio ad Ajmer per la dargah, rientro per il tramonto da Pap Mochani",
          "Cena su una terrazza sul lago",
        ],
      },
    ],
    zone: [
      {
        nome: "Intorno al lago",
        perChi: "chi vuole i ghat a piedi",
        testo: "Guesthouse e piccoli hotel con terrazza sull'acqua, nel centro pedonale. Campane e altoparlanti dei templi dall'alba.",
        fascia: "20-60 €",
      },
      {
        nome: "Fuori paese",
        perChi: "calma e piscina",
        testo: "Resort e campi tendati tra i campi, a 2-5 chilometri. Silenziosi, serve un tuk-tuk per il lago.",
        fascia: "40-120 €",
      }
    ],
    sapori: [
      {
        nome: "Malpua",
        testo: "Frittelle dolci fritte nel ghi e passate nello sciroppo, la specialità delle botteghe del bazar."
      },
      {
        nome: "Thali vegetariano",
        testo: "Pushkar è vegetariana per tradizione: niente carne, uova e alcol. Il thali con dal, verdure, chapati e riso è il pasto di tutti."
      },
      {
        nome: "Gulkand e prodotti di rosa",
        testo: "Intorno a Pushkar si coltivano rose: si trovano la marmellata di petali (gulkand), lo sciroppo e l'acqua di rose nei negozi del bazar."
      },
      {
        nome: "Falafel e cucina dei viaggiatori",
        testo: "Decenni di viaggiatori israeliani hanno lasciato falafel e hummus in molti caffè del bazar, accanto alla cucina indiana."
      }
    ],
    attenzioni: [
      "Il fiore «in regalo» sui ghat: segue una puja e la richiesta di una donazione per la famiglia, spesso molto alta.",
      "Non fotografate chi fa il bagno o le cerimonie senza chiedere.",
      "Il bhang lassi, con la cannabis, si trova facilmente ma ha effetti forti e imprevedibili.",
      "Durante la fiera dei cammelli attenzione ai borseggiatori nella folla."
    ],
    gite: [
      {
        nome: "Ajmer e la dargah di Moinuddin Chishti",
        distanza: "circa 15 km, 30 minuti di strada",
        come: "In taxi, tuk-tuk o bus locale oltre la collina di Nag Pahar.",
        testo: "Il santuario sufi del XIII secolo dedicato a Moinuddin Chishti, uno dei luoghi di pellegrinaggio più frequentati dell'India, da musulmani e non. Si entra a capo coperto e senza scarpe, tra i qawwali e le offerte di fiori.",
      },
      {
        nome: "Ajmer: Soniji ki Nasiyan e Ana Sagar",
        distanza: "circa 15 km, 30 minuti di strada",
        come: "Nello stesso giro della dargah, in taxi o tuk-tuk.",
        testo: "Il tempio giainista dell'Ottocento con la sala d'oro, dove un modello dorato rappresenta l'universo giainista con città, navi e figure volanti. Poco lontano c'è il lago Ana Sagar, con i padiglioni di marmo sul lungolago voluti dall'imperatore Shah Jahan.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Pushkar?",
        risposta: "Una notte basta per un tramonto sui ghat, l'aarti e l'alba a Savitri. Con due si aggiungono Ajmer e qualche ora di calma sulle terrazze.",
      },
      {
        domanda: "Quando si tiene la fiera dei cammelli di Pushkar nel 2026?",
        risposta: "Nei giorni che precedono la luna piena di Kartik, che nel 2026 cade il 24 novembre. Le date esatte le pubblica il governo del Rajasthan; i primi giorni sono quelli del commercio dei cammelli.",
      },
      {
        domanda: "A Pushkar si possono mangiare carne e bere alcol?",
        risposta: "No: per tradizione la città è vegetariana, senza carne, uova né alcol nei locali. Il bhang lassi invece si trova, ma ha effetti forti e imprevedibili.",
      },
      {
        domanda: "Come si evita la truffa del fiore sui ghat?",
        risposta: "Rifiutando con gentilezza il fiore offerto «in regalo»: chi lo accetta viene portato a una puja e poi gli si chiede una donazione, spesso alta. Ai templi si entra benissimo da soli.",
      },
      {
        domanda: "Come si arriva a Pushkar da Jaipur?",
        risposta: "In auto in circa 3 ore, oppure in treno fino ad Ajmer e poi circa 30 minuti di strada in taxi, tuk-tuk o bus locale.",
      },
      {
        domanda: "Si può visitare Pushkar in giornata?",
        risposta: "Da Ajmer sì, ma si perdono il tramonto e l'alba, che sono il motivo per venire. Meglio dormire almeno una notte sul lago.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: 'I ghat e le case bianche affacciati sul lago sacro di Pushkar, riflessi nell\'acqua nella luce del pomeriggio',
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-10-pushkar.jpg',
  },
  {
    slug: 'jodhpur',
    paeseSlug: 'india',
    ordine: 6,
    nome: 'Jodhpur',
    tipologia: ['città', 'forti e palazzi'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Jodhpur l'abbiamo fatta a fine febbraio, in due passaggi: all'andata per il forte di Mehrangarh e la città blu, poi di nuovo una notte al ritorno da Jaisalmer.",
    introduzione:
      'La città blu, ai margini del deserto del Thar, dominata dal Forte di Mehrangarh su uno sperone di roccia che sale di circa 120 metri sopra la pianura.',
    percheAndarci:
      'Mehrangarh è il forte più impressionante del Rajasthan e la città vecchia, con le case dipinte di blu, è più tranquilla e verticale di Jaipur.',
    cosaVedere: [
      'Il Forte di Mehrangarh e il suo museo',
      'Il cenotafio di Jaswant Thada',
      'I vicoli blu di Navchokiya e Brahmpuri',
      'Il pozzo a gradini di Toorji ka Jhalra',
      'Il Ghanta Ghar e il mercato di Sardar',
    ],
    cosaFare: ['La visita del forte con l\'audioguida inclusa', 'Il tramonto da una terrazza della città vecchia', 'La zipline sulle mura del forte'],
    doveDormire: 'Haveli con terrazza sotto il forte, nella zona del Ghanta Ghar e di Navchokiya.',
    doveMangiare: 'Mirchi bada, pyaaz kachori e makhaniya lassi allo zafferano.',
    comeArrivare: "Da Jaipur il treno impiega circa 5 ore (classi CC o 3A, prenotazione su IRCTC); in auto con autista si calcola mezza giornata. Da Pushkar sono circa 4-5 ore di strada, da Jaisalmer circa 5. L'aeroporto di Jodhpur, con voli interni da Delhi, Mumbai e altre città, è a circa 5 km dal centro: si arriva alla città vecchia in taxi o tuk-tuk. Nella città vecchia le auto si fermano ai margini dei vicoli e l'ultimo tratto si fa a piedi o in tuk-tuk.",
    comeSpostarsi: 'A piedi e in tuk-tuk; le auto non entrano nei vicoli.',
    periodoMigliore: 'ottobre-marzo; notti fredde a gennaio.',
    costi: "Museo di Mehrangarh 800 rupie per gli stranieri, audioguida compresa; Jaswant Thada 100 rupie; Rao Jodha Park 100 rupie (sito ufficiale, 2026); zipline da 1.699 rupie. Budget al giorno a persona in doppia: 30-45 € in guesthouse sotto il forte, 70-110 € in haveli boutique con autista, da 250 € negli hotel-palazzo.",
    erroriDaEvitare: ['Arrivare con trolley pesanti nei vicoli a scalinata', 'Visitare il forte nelle ore centrali'],
    luoghi: [
      {
        nome: "Forte di Mehrangarh",
        testo: "Il forte dei Rathore su uno sperone di roccia che domina la città blu, iniziato nel 1459. Dentro c'è uno dei musei meglio tenuti dell'India, con le gallerie dei palanchini, delle armi, degli howdah, delle culle reali e dei dipinti. Lo gestisce una fondazione della famiglia reale.",
        come: "In tuk-tuk o a piedi dalla città vecchia, su per una salita ripida. All'ingresso c'è un ascensore per la parte alta (50 rupie a tratta, 2026). Il percorso del museo è segnalato.",
        quando: "Il museo è aperto tutti i giorni dalle 9 alle 17. All'apertura, prima del caldo e dei gruppi.",
        tempo: "2-3 ore",
        url: "https://www.mehrangarh.org/visit/",
        costo: "800 rupie per gli stranieri, audioguida compresa (sito ufficiale, 2026)",
        consiglio: "Prendere l'audioguida, compresa nel biglietto per gli stranieri: racconta il forte stanza per stanza e si gira con calma senza guida.",
        orari: "Museo aperto tutti i giorni, 9:00-17:00 (sito ufficiale).",
        lat: 26.29806,
        lng: 73.01889,
      },
      {
        nome: "Jaswant Thada",
        testo: "Il cenotafio di marmo bianco del maharaja Jaswant Singh II, voluto dal figlio Sardar Singh nel 1899 e finito nel 1906, su una collina tra il forte e la città. Le lastre di marmo sono così sottili che al sole si accendono di una luce calda.",
        come: "A breve distanza dal forte, a piedi o in tuk-tuk. Ha un biglietto suo: 100 rupie per gli stranieri (sito ufficiale, 2026).",
        quando: "Tutti i giorni dalle 9 alle 17. Il tardo pomeriggio, con la vista sul forte.",
        tempo: "45 minuti",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "Si abbina al Rao Jodha Desert Rock Park, che è accanto.",
        costo: "100 rupie per gli stranieri, circa 1 € (sito ufficiale, 2026).",
        orari: "Tutti i giorni, 9:00-17:00.",
        lat: 26.30389,
        lng: 73.02528,
      },
      {
        nome: "Rao Jodha Desert Rock Park",
        testo: "Settanta ettari di terreno roccioso intorno al forte, dove dal 2006 la fondazione di Mehrangarh ha riportato le piante del deserto. Sentieri brevi con viste sulle mura.",
        come: "Ingresso vicino al forte. Si cammina da soli oppure con una guida naturalista (200 rupie, sito ufficiale 2026). Biglietto 100 rupie.",
        quando: "Da ottobre a marzo dalle 8 alle 17.30, da aprile a settembre dalle 7 alle 18.30. Mattina presto per la luce e gli uccelli.",
        tempo: "1-2 ore",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "È il posto più tranquillo di Jodhpur: buono per staccare dopo il forte.",
        costo: "100 rupie; guida naturalista 200 rupie (sito ufficiale, 2026).",
        orari: "Tutti i giorni: ottobre-marzo 8:00-17:30, aprile-settembre 7:00-18:30.",
        lat: 26.30076,
        lng: 73.01579,
      },
      {
        nome: "La città blu: Brahmpuri e Navchokiya",
        testo: "I vicoli sotto il forte, con le case dipinte d'indaco. Sul perché del blu circolano più spiegazioni, nessuna documentata. Scale, piazzette, tempietti e bambini che giocano a cricket.",
        come: "A piedi, perdendosi. Le auto non entrano; un tuk-tuk vi lascia all'inizio dei vicoli.",
        quando: "Mattina presto o tardo pomeriggio, con la luce morbida sul blu.",
        tempo: "1-2 ore",
        costo: "gratuito",
        consiglio: "Chiedere sempre prima di fotografare le persone sulle porte di casa."
      },
      {
        nome: "Toorji ka Jhalra e il Ghanta Ghar",
        testo: "Un pozzo a gradini in arenaria scolpita, datato di solito intorno al 1740 e restaurato più volte, nella città vecchia sotto il forte. Intorno al Ghanta Ghar c'è il mercato di Sardar, con spezie, tessuti e stoviglie.",
        come: "A piedi nella città vecchia.",
        quando: "Il pozzo al mattino; il mercato dal tardo mattino alla sera.",
        tempo: "1-2 ore",
        costo: "gratuito",
        consiglio: "La sera, con il pozzo illuminato e il mercato aperto, è il momento migliore.",
        lat: 26.29715,
        lng: 73.02301,
      },
      {
        nome: "Umaid Bhawan Palace",
        testo: "Il palazzo art déco finito nel 1943, oggi in parte hotel di lusso e in parte residenza della famiglia reale. Un'ala è un piccolo museo sulla storia della famiglia nel Novecento; davanti, in giardino, ci sono le auto d'epoca dei maharaja.",
        come: "Fuori dalla città vecchia, in tuk-tuk. Il museo ha ingresso separato dall'hotel.",
        quando: "Di giorno; si abbina bene al pomeriggio.",
        tempo: "1 ora",
        consiglio: "Se il tempo è poco, si può saltare: Mehrangarh e i vicoli valgono di più.",
        lat: 26.28083,
        lng: 73.04694,
      },
      {
        nome: "Tempio di Chamunda Mata",
        testo: "Il tempio della dea protettrice dei Rathore, sul bastione meridionale di Mehrangarh. Rao Jodha vi portò l'immagine della dea quando fondò il forte. Dal terrazzo davanti al santuario si ha una delle viste più ampie sulla città blu.",
        come: "Si raggiunge a piedi percorrendo il forte verso sud, oltre le sale del museo. Scarpe tolte all'ingresso del santuario.",
        quando: "Al mattino, abbinato alla visita del forte. Durante il Navratri è affollato di fedeli.",
        tempo: "30 minuti",
        consiglio: "Tenere qualche minuto per il belvedere: da qui si capisce bene come la città vecchia sia cresciuta sotto la rupe.",
      },
      {
        nome: "Zipline sulle mura di Mehrangarh",
        testo: "Un percorso di sei teleferiche fino a 300 metri, per 1,2 chilometri di volo in tutto, sopra i bastioni e i laghetti ai piedi del forte. L'ultima linea passa sopra due laghi. È gestito da Flying Fox.",
        come: "Si prenota sul sito dell'operatore o all'ingresso; il punto di partenza è nell'area del forte.",
        quando: "Al mattino o nel tardo pomeriggio, evitando le ore calde.",
        tempo: "1-2 ore, briefing compreso",
        costo: "Da 1.699 rupie, circa 17 € (sito ufficiale, 2026).",
        url: "https://www.flyingfox.asia/jodhpur",
      },
      {
        nome: "Giardini di Mandore",
        testo: "Mandore fu la capitale del Marwar prima della fondazione di Jodhpur nel 1459. Nei giardini stanno i cenotafi dei sovrani Rathore, alti e scolpiti come templi in arenaria rossa, e una galleria di figure di divinità ed eroi ricavate nella roccia. Ci sono molte scimmie e langur.",
        come: "Circa 9 km a nord della città vecchia, in tuk-tuk o taxi; si cammina liberamente nel parco.",
        quando: "Mattina presto o tardo pomeriggio, con la luce radente sull'arenaria.",
        tempo: "1-1,5 ore",
        lat: 26.35048,
        lng: 73.03635,
        consiglio: "Non dare cibo alle scimmie e tenere chiuse le borse.",
      },
      {
        nome: "Mahamandir",
        testo: "Un grande tempio dell'Ottocento voluto dal maharaja Man Singh per i maestri della setta Nath, nel quartiere fortificato che porta lo stesso nome. La sala principale poggia su 84 colonne scolpite e ha le pareti dipinte con scene di yoga.",
        come: "Circa 3 km dalla città vecchia, sulla strada per Mandore, in tuk-tuk. Scarpe tolte.",
        quando: "Al mattino, quando i turisti sono pochissimi.",
        tempo: "30-45 minuti",
        lat: 26.30943,
        lng: 73.03875,
        consiglio: "Si abbina a Mandore nello stesso giro in tuk-tuk.",
      },
      {
        nome: "Lago di Kaylana",
        testo: "Un lago artificiale fatto costruire nel 1872 da Pratap Singh, a ovest della città, tra le colline rocciose. È il posto dove gli abitanti di Jodhpur vanno a vedere il tramonto.",
        come: "Circa 8 km dalla città vecchia, in tuk-tuk o taxi. Ci sono barche a pedali.",
        quando: "Al tramonto.",
        tempo: "1 ora",
        consiglio: "Si combina con il Machia Biological Park, sulla stessa strada.",
      },
      {
        nome: "Lago di Balsamand",
        testo: "Un bacino del XII secolo sulla strada di Mandore, con il palazzo d'estate dei maharaja costruito sulla riva e oggi trasformato in hotel. Intorno ci sono giardini di manghi e melograni.",
        come: "Circa 5 km a nord della città, in tuk-tuk o taxi, spesso nello stesso giro di Mandore.",
        quando: "Nel tardo pomeriggio.",
        tempo: "45 minuti",
        consiglio: "L'accesso al palazzo e ai giardini dipende dall'hotel: chiedere prima, o fermarsi per un tè.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mehrangarh all'apertura, con il tempio di Chamunda Mata",
          "Jaswant Thada e Rao Jodha Park",
          "Pranzo con mirchi bada al Ghanta Ghar",
          "Vicoli blu nel pomeriggio",
          "Toorji ka Jhalra e mercato di Sardar la sera",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: come sopra",
          "Giorno 2: Mahamandir, Balsamand e giardini di Mandore in tuk-tuk al mattino",
          "Umaid Bhawan nel pomeriggio",
          "Tramonto al lago di Kaylana o da una terrazza sotto il forte",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: zipline sulle mura al mattino presto",
          "Gita a Osian o nei villaggi bishnoi nel pomeriggio",
          "Ultima cena su una terrazza con il forte illuminato",
        ],
      },
    ],
    zone: [
      {
        nome: "Sotto il forte (Navchokiya, Brahmpuri)",
        perChi: "chi vuole le terrazze con vista",
        testo: "Haveli e guesthouse nei vicoli blu, con terrazze sul forte. Atmosfera bellissima, ma scale ripide e niente auto fino alla porta.",
        fascia: "15-70 €",
      },
      {
        nome: "Ghanta Ghar",
        perChi: "chi vuole tutto a piedi",
        testo: "Intorno alla torre dell'orologio: mercato, ristoranti e tuk-tuk sotto casa. Rumoroso fino a tardi.",
        fascia: "15-50 €",
      },
      {
        nome: "Ratanada e la città nuova",
        perChi: "hotel heritage con giardino",
        testo: "Ex residenze nobiliari e hotel con piscina fuori dalla città vecchia. Tranquilli, serve sempre un tuk-tuk.",
        fascia: "60-150 €",
      }
    ],
    sapori: [
      {
        nome: "Mirchi bada",
        testo: "Un grande peperoncino ripieno di patate speziate, impanato nella farina di ceci e fritto. Si mangia caldo nei banchi intorno al Ghanta Ghar."
      },
      {
        nome: "Makhaniya lassi",
        testo: "Un lassi densissimo allo zafferano e cardamomo, quasi da mangiare con il cucchiaio. Il più noto è quello delle botteghe storiche vicino alla torre dell'orologio."
      },
      {
        nome: "Pyaaz kachori",
        testo: "La frittella ripiena di cipolla, qui ancora più speziata che a Jaipur, con chutney di tamarindo."
      },
      {
        nome: "Mawa kachori",
        testo: "La versione dolce: ripiena di latte ridotto e frutta secca, passata nello sciroppo. Un dolce di Jodhpur."
      }
    ],
    attenzioni: [
      "I locali famosi hanno copie con lo stesso nome a pochi metri, come l'omelette shop del Ghanta Ghar e i negozi di spezie: controllate indirizzo e insegna.",
      "I tuk-tuk che offrono la corsa gratis o a pochissimo vi portano nei negozi con commissione.",
      "I vicoli della città vecchia sono a scalinata: i trolley pesanti diventano un problema.",
      "Le scimmie intorno a Jaswant Thada e ai templi prendono il cibo dalle mani."
    ],
    gite: [
      {
        nome: "Osian",
        distanza: "circa 65 km, 1,5 ore d'auto",
        come: "In auto con autista o in bus da Jodhpur; spesso con una notte in un campo tra le dune.",
        testo: "Un'antica città carovaniera con un gruppo di templi indù e giainisti tra l'VIII e l'XI secolo, tra i più antichi del Rajasthan, e il tempio di Sachiya Mata in cima alla collina. Intorno ci sono le prime dune, meno battute di quelle di Jaisalmer.",
      },
      {
        nome: "Villaggi bishnoi",
        distanza: "20-30 km, mezza giornata",
        come: "Con un tour o un autista da Jodhpur, di solito al mattino.",
        testo: "I Bishnoi sono una comunità che da cinque secoli protegge alberi e animali per regola religiosa: intorno ai villaggi si vedono antilopi e gazzelle libere. Il giro tocca case di fango, vasai e tessitori. Meglio scegliere chi entra in pochi e non trasforma la visita in una sosta nei negozi.",
      },
      {
        nome: "Ranakpur",
        distanza: "circa 3 ore d'auto, sulla strada per Udaipur",
        come: "In auto con autista, come tappa del trasferimento Jodhpur-Udaipur (poi circa 2 ore fino a Udaipur).",
        testo: "Il grande tempio giainista in marmo bianco, con centinaia di colonne scolpite tutte diverse. Per i non giainisti è aperto dalle 12 alle 17 circa; niente oggetti in pelle e niente cibo all'interno, spalle e gambe coperte.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Jodhpur?",
        risposta: "Un giorno pieno basta per Mehrangarh, Jaswant Thada e i vicoli blu. Con due si aggiungono Mandore, Umaid Bhawan e un tramonto con calma; il terzo serve per Osian o i villaggi bishnoi.",
      },
      {
        domanda: "Quanto costa il biglietto del Forte di Mehrangarh?",
        risposta: "Per gli stranieri 800 rupie, circa 8 €, con l'audioguida compresa (sito ufficiale, 2026). Jaswant Thada e Rao Jodha Park hanno biglietti separati da 100 rupie.",
      },
      {
        domanda: "Dove conviene dormire a Jodhpur?",
        risposta: "In una haveli con terrazza sotto il forte, tra Navchokiya e il Ghanta Ghar: si fa tutto a piedi e si vede Mehrangarh illuminato la sera. Chi vuole piscina e silenzio sceglie un hotel heritage a Ratanada.",
      },
      {
        domanda: "Perché Jodhpur è chiamata la città blu?",
        risposta: "Per l'indaco delle case della città vecchia, soprattutto a Brahmpuri e Navchokiya. Le spiegazioni che circolano (casta dei brahmini, fresco, insetti) non sono documentate.",
      },
      {
        domanda: "Come si va da Jaipur a Jodhpur?",
        risposta: "In treno in circa 5 ore, con prenotazione su IRCTC, oppure in auto con autista in mezza giornata. Da Pushkar sono circa 4-5 ore di strada.",
      },
      {
        domanda: "Jodhpur e Jaisalmer: servono tutte e due?",
        risposta: "Sono diverse: Jodhpur è la città del grande forte, Jaisalmer quella del forte abitato e del deserto. Sono a circa 5 ore d'auto l'una dall'altra, e chi ha almeno dieci giorni in Rajasthan di solito le fa entrambe.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: 'Il Forte di Mehrangarh sulla sua rupe sopra la città vecchia di Jodhpur',
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-11-jodhpur.jpg',
  },
  {
    slug: 'jaisalmer',
    paeseSlug: 'india',
    ordine: 7,
    nome: 'Jaisalmer e il deserto del Thar',
    tipologia: ['deserto', 'forti e palazzi'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci siamo arrivati a fine febbraio da Jodhpur, con l'autista: una notte in campo tendato tra le dune del Thar e il giorno dopo la città d'oro.",
    introduzione:
      'La città d\'oro, costruita in arenaria gialla nel deserto del Thar, non lontano dal confine con il Pakistan, con uno dei pochi forti ancora abitati al mondo.',
    percheAndarci:
      'Per il forte abitato, le haveli scolpite come merletti e una notte tra le dune, che è l\'esperienza di deserto più semplice da organizzare in India.',
    cosaVedere: ['Il Forte di Jaisalmer e i suoi templi giainisti', 'Le haveli di Patwon e Nathmal', 'Il lago di Gadisar all\'alba', 'Le dune di Sam o di Khuri'],
    cosaFare: ['Una notte in campo tendato nel deserto con giro in cammello al tramonto', 'Il tramonto dai bastioni del forte'],
    doveDormire: 'Hotel nelle haveli della città sotto il forte; campi tendati nel deserto per una notte.',
    doveMangiare: 'Ker sangri, dal baati e i dolci di Jaisalmer.',
    comeArrivare: "Da Jodhpur sono circa 5 ore d'auto con autista; c'è anche il treno, da prenotare su IRCTC. L'aeroporto, a circa 7 km dalla città, funziona solo da fine ottobre a fine marzo: in quei mesi Air India vola ogni giorno da Delhi e, dal 25 ottobre 2026, da Mumbai; d'estate chiude. Dalla stazione e dalla fermata dei bus al forte bastano pochi minuti di tuk-tuk. Per le dune il campo organizza di solito il transfer in jeep.",
    comeSpostarsi: 'A piedi in città, jeep per le dune.',
    periodoMigliore: 'novembre-febbraio; da aprile il caldo è estremo.',
    costi: "Ingresso libero al forte; palazzo reale e templi giainisti a pagamento; Patwon ki Haveli 100-200 rupie per gli stranieri; campo nel deserto con cena, colazione e cammello circa 3.000-8.000 rupie a persona. Budget al giorno a persona in doppia: 30-45 € in guesthouse sotto il forte, 70-110 € in haveli boutique più una notte in un buon campo, da 250 € negli hotel di lusso e nei campi tendati con bagno.",
    erroriDaEvitare: [
      'Scegliere il campo nel deserto più economico: gli standard di igiene e il trattamento dei cammelli variano molto',
      'Avvicinarsi alle zone di confine, soggette a restrizioni',
    ],
    luoghi: [
      {
        nome: "Il Forte di Jaisalmer",
        testo: "Il forte d'arenaria gialla del 1156, uno dei pochi al mondo ancora abitato: dentro le mura vivono circa 4.000 persone tra case, negozi, templi e hotel. È patrimonio UNESCO tra i forti di collina del Rajasthan.",
        come: "Si entra a piedi dalla porta principale e si gira liberamente nei vicoli. A pagamento ci sono il palazzo del maharawal (Raj Mahal) e i templi giainisti.",
        quando: "Mattina per i templi giainisti, che di solito ricevono i visitatori solo fino a mezzogiorno. Il tramonto dai bastioni.",
        tempo: "mezza giornata",
        consiglio: "Dormire fuori dalle mura e visitarlo di giorno: secondo l'Archaeological Survey of India l'acqua consumata da hotel e ristoranti dentro le mura filtra nelle fondamenta e le indebolisce.",
        costo: "Ingresso libero alle mura e ai vicoli; palazzo reale e templi giainisti a pagamento.",
        orari: "Il forte è sempre accessibile; i templi giainisti ricevono i non giainisti solo la mattina.",
        lat: 26.9127,
        lng: 70.9126,
      },
      {
        nome: "Le haveli di Patwon e di Nathmal",
        testo: "Palazzi di mercanti dell'Ottocento con le facciate scolpite come merletti di pietra. La Patwon ki Haveli è in realtà un gruppo di cinque case, iniziato nel 1805 dal mercante Guman Chand Patwa per i suoi figli; una parte è museo.",
        come: "Nella città sotto il forte, a piedi. Ingresso a pagamento per la parte visitabile.",
        quando: "Mattina, prima che i vicoli si riempiano.",
        tempo: "1 ora",
        consiglio: "Le facciate si guardano bene anche gratis dalla strada; dentro si entra soprattutto per le terrazze.",
        costo: "Patwon ki Haveli 100-200 rupie per gli stranieri secondo la casa visitata, circa 1-2 €.",
        lat: 26.91578,
        lng: 70.9126,
      },
      {
        nome: "Il lago di Gadisar",
        testo: "Il bacino che un tempo dava acqua a tutta la città, scavato nel 1156 e ricostruito intorno al 1367 da Rawal Gadsi, con padiglioni e templi sull'acqua.",
        come: "A un chilometro e mezzo dal forte, a piedi o in tuk-tuk. Ci sono barche a remi e a pedali.",
        quando: "L'alba, quando l'acqua è ferma e ci sono solo gli uccelli.",
        tempo: "1 ora",
        costo: "accesso gratuito; barche a pagamento",
        consiglio: "Arrivare prima del sole e restare fino a quando illumina il forte in lontananza.",
        lat: 26.90784,
        lng: 70.92195,
      },
      {
        nome: "Le dune di Sam e di Khuri",
        testo: "Le dune del Thar a qualche decina di chilometri dalla città, dove si arriva in cammello al tramonto e si dorme in campi tendati. Sam è più grande e affollata; Khuri è più piccola e tranquilla.",
        come: "In jeep con il campo, che di solito organizza transfer, cammello, cena e musica. Il bagaglio grande resta in hotel a Jaisalmer.",
        quando: "Da novembre a febbraio, con notti fredde. Da aprile il caldo è estremo.",
        tempo: "una notte",
        consiglio: "Scegliere un campo con recensioni recenti su igiene e cura dei cammelli, anche se costa di più.",
        costo: "Campo con cena, colazione e cammello indicativamente 3.000-8.000 rupie a persona secondo la categoria, circa 30-80 €.",
        lat: 26.8284,
        lng: 70.50751,
      },
      {
        nome: "Bada Bagh",
        testo: "Un giardino di cenotafi dei sovrani di Jaisalmer, con decine di padiglioni di arenaria su una collina, circa 6 chilometri a nord della città, costruiti tra il Settecento e i primi del Novecento.",
        come: "In auto o tuk-tuk, anche sulla strada per le dune.",
        quando: "Al tramonto o all'alba, quando l'arenaria diventa arancione.",
        tempo: "45 minuti",
        consiglio: "Si abbina bene al villaggio abbandonato di Kuldhara, circa 18 chilometri a sud-ovest della città.",
        lat: 26.9549,
        lng: 70.88777,
      },
      {
        nome: "Il palazzo del maharawal (Raj Mahal)",
        testo: "Il palazzo reale dentro il forte, su più piani affacciati sulla piazza principale, oggi museo con armi, abiti, ritratti e stanze decorate di specchi e piastrelle. Dalle terrazze più alte si vede tutta la città d'oro fino al deserto.",
        come: "Dentro il forte, sulla piazza principale vicino all'ingresso. Biglietto a pagamento, con audioguida disponibile.",
        quando: "Al mattino, prima dei templi giainisti o subito dopo.",
        tempo: "1-1,5 ore",
        lat: 26.91281,
        lng: 70.91327,
        consiglio: "Salire fino all'ultimo piano: la vista sui tetti è la parte migliore della visita.",
      },
      {
        nome: "I templi giainisti del forte",
        testo: "Un gruppo di sette templi giainisti collegati tra loro, costruiti tra il XII e il XVI secolo in arenaria gialla, con colonne, soffitti e pareti scolpiti fittissimi. Sono ancora luoghi di culto attivi.",
        come: "Dentro il forte, a pochi passi dal palazzo. Scarpe tolte, spalle e gambe coperte; come negli altri templi giainisti, niente oggetti in pelle.",
        quando: "La mattina: ai non giainisti sono aperti solo fino a mezzogiorno circa.",
        tempo: "1 ora",
        costo: "Ingresso a pagamento, con un supplemento per la macchina fotografica.",
        orari: "Per i non giainisti solo la mattina.",
      },
      {
        nome: "Salim Singh ki Haveli",
        testo: "La haveli del primo ministro Salim Singh, dell'inizio dell'Ottocento, riconoscibile perché i piani alti sporgono più larghi della base e il tetto è arcuato, con mensole scolpite a forma di pavone. Sta ai piedi del forte, vicino al suo ingresso.",
        come: "A piedi dalla città sotto il forte. Ingresso a pagamento per la parte visitabile.",
        quando: "Al mattino, con la luce sulla facciata.",
        tempo: "30-45 minuti",
        lat: 26.91368,
        lng: 70.91602,
        consiglio: "Si abbina alla Nathmal ki Haveli e alla Patwon nello stesso giro.",
      },
      {
        nome: "Tazia Tower e Badal Vilas",
        testo: "Una torre a cinque piani dai balconi traforati, costruita dagli artigiani musulmani della città sul modello delle tazia, le strutture portate in processione durante il Muharram, e donata al sovrano. Sta nel complesso del palazzo Badal Vilas, vicino ad Amar Sagar Pol.",
        come: "A piedi dalla città sotto il forte; si guarda soprattutto da fuori.",
        quando: "Di giorno, nello stesso giro delle haveli.",
        tempo: "20 minuti",
      },
      {
        nome: "Vyas Chhatri",
        testo: "Un'area di cenotafi in arenaria sulla collina a nord della città, dedicata al saggio Vyasa. È uno dei punti più usati per vedere il sole che tramonta dietro le cupolette, con il forte sullo sfondo.",
        come: "A piedi o in tuk-tuk dalla città, circa un chilometro e mezzo dal forte.",
        quando: "Al tramonto.",
        tempo: "45 minuti",
        lat: 26.92236,
        lng: 70.90682,
        consiglio: "Arrivare mezz'ora prima del tramonto per trovare posto sui muretti.",
      },
      {
        nome: "Amar Sagar",
        testo: "Un lago con un palazzo del Seicento e un tempio giainista scolpito, circa 6 chilometri a ovest della città. Il lago è spesso asciutto fuori dalla stagione delle piogge; si viene per il tempio e i padiglioni.",
        come: "In tuk-tuk o auto, spesso sulla strada per Lodurva e per le dune di Sam.",
        quando: "Al mattino o nel tardo pomeriggio.",
        tempo: "45 minuti",
        lat: 26.93203,
        lng: 70.87317,
      },
      {
        nome: "Lodurva",
        testo: "L'antica capitale dei Bhati prima della fondazione di Jaisalmer, a circa 15 chilometri dalla città. Della città resta poco; resta il tempio giainista dedicato a Parshvanath, ricostruito, con un portale scolpito e l'albero dei desideri in metallo.",
        come: "In auto o tuk-tuk, insieme ad Amar Sagar sulla strada per Sam.",
        quando: "Al mattino.",
        tempo: "45 minuti",
        lat: 26.9867,
        lng: 70.80465,
        consiglio: "Si fa insieme ad Amar Sagar e alle dune di Sam nella stessa mezza giornata.",
      },
      {
        nome: "Kuldhara",
        testo: "Un villaggio di pietra abbandonato, circa 18 chilometri a sud-ovest della città: i suoi abitanti, brahmini Paliwal, lo lasciarono in una notte secondo la leggenda all'inizio dell'Ottocento. Restano file di case senza tetto e un tempio.",
        come: "In auto o jeep, sulla strada per Sam o Khaba. Ingresso a pagamento all'entrata del villaggio.",
        quando: "Al mattino presto o nel tardo pomeriggio.",
        tempo: "45 minuti-1 ora",
        lat: 26.86988,
        lng: 70.78512,
        consiglio: "Le storie di fantasmi le raccontano tutti: la parte interessante è la pianta del villaggio, che si capisce bene camminando.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Forte, palazzo del maharawal e templi giainisti al mattino",
          "Haveli di Patwon e Salim Singh",
          "Pomeriggio verso le dune, cammello al tramonto e notte nel campo",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: arrivo da Jodhpur, haveli e tramonto a Vyas Chhatri",
          "Giorno 2: forte e templi giainisti al mattino",
          "Amar Sagar e Lodurva",
          "Dune di Sam al tramonto e notte nel campo",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: rientro dalle dune passando per Kuldhara e Khaba Fort",
          "Pomeriggio a Bada Bagh",
          "Ultima sera su una terrazza davanti al forte illuminato",
        ],
      },
    ],
    zone: [
      {
        nome: "Sotto il forte",
        perChi: "chi vuole il forte a piedi",
        testo: "Hotel nelle haveli dei vicoli intorno al forte, con terrazze vista mura. Comodi e meno dannosi per il monumento rispetto agli alberghi dentro le mura.",
        fascia: "25-60 €",
      },
      {
        nome: "Dentro il forte",
        perChi: "chi vuole l'atmosfera",
        testo: "Guesthouse dentro le mura: atmosfera unica, ma vicoli stretti, poca acqua e problemi di conservazione del forte.",
        fascia: "20-50 €",
      },
      {
        nome: "Campi nel deserto",
        perChi: "una notte",
        testo: "Campi tendati a Sam o Khuri, dai più spartani alle tende di lusso con bagno. Si va per una notte, non per base.",
        fascia: "60-160 €",
      }
    ],
    sapori: [
      {
        nome: "Ker sangri",
        testo: "Bacche e fagioli del deserto essiccati e cotti con spezie, il piatto più tipico del Thar. Nei thali dei ristoranti della città."
      },
      {
        nome: "Dal baati churma",
        testo: "Palline di pane cotte nella brace con lenticchie e briciola dolce: spesso è la cena dei campi nel deserto."
      },
      {
        nome: "Ghotua e panchdhari laddoo",
        testo: "I dolci di Jaisalmer, palline di farina, zucchero e ghi. Nelle pasticcerie vicino alla porta del forte."
      },
      {
        nome: "Chai nel deserto",
        testo: "Il tè con latte e spezie fatto sul fuoco al campo, al tramonto o all'alba tra le dune."
      }
    ],
    attenzioni: [
      "Alla stazione e alla fermata dei bus si offrono passaggi gratis verso l'hotel: spesso finiscono in un altro hotel che paga commissione.",
      "I campi più economici hanno standard di igiene e trattamento dei cammelli molto variabili.",
      "Jaisalmer è vicina al Pakistan: il Foreign Office britannico sconsiglia ogni viaggio entro 10 chilometri dal confine, che in Rajasthan in alcuni tratti non è segnato. Controllate Viaggiare Sicuri prima di partire.",
      "A maggio e giugno le massime medie superano i 40 °C: serve acqua sempre."
    ],
    gite: [
      {
        nome: "Khaba Fort",
        distanza: "circa 40 km, 1 ora d'auto",
        come: "In auto o jeep, spesso insieme a Kuldhara sulla strada per le dune di Sam.",
        testo: "Un altro villaggio paliwal abbandonato, dominato da un piccolo forte su un'altura da cui si vedono le rovine delle case e il deserto intorno. Più tranquillo di Kuldhara.",
      },
      {
        nome: "Desert National Park",
        distanza: "circa 40-50 km, mezza giornata",
        come: "In jeep con guida da Jaisalmer, partendo all'alba; serve un permesso d'ingresso del parco.",
        testo: "Una delle grandi aree protette del Thar, con dune, praterie e affioramenti fossili. È uno degli ultimi rifugi dell'otarda indiana, un grande uccello quasi estinto, oltre a gazzelle chinkara e rapaci.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Jaisalmer?",
        risposta: "Due giorni con una notte nel deserto sono il minimo per il forte, le haveli e le dune. Con tre si aggiungono Kuldhara, Khaba e Bada Bagh senza correre.",
      },
      {
        domanda: "Conviene dormire dentro il forte di Jaisalmer?",
        risposta: "È suggestivo, ma l'acqua consumata da hotel e ristoranti dentro le mura filtra nelle fondamenta e indebolisce il forte. Meglio una haveli sotto le mura, con terrazza sul forte.",
      },
      {
        domanda: "Meglio le dune di Sam o di Khuri?",
        risposta: "Sam è più grande, più vicina e più affollata, con molti campi e spettacoli. Khuri è più piccola e tranquilla, adatta a chi cerca silenzio.",
      },
      {
        domanda: "Quanto costa una notte nel deserto del Thar?",
        risposta: "Un campo con cena, colazione e giro in cammello costa indicativamente 3.000-8.000 rupie a persona, circa 30-80 €, secondo la categoria. Conviene pagare di più per igiene e cura dei cammelli.",
      },
      {
        domanda: "Qual è il periodo migliore per Jaisalmer?",
        risposta: "Da novembre a febbraio, con giornate miti e notti fredde nel deserto, anche sotto i 5 °C a dicembre e gennaio. Da aprile il caldo è estremo, e d'estate l'aeroporto chiude.",
      },
      {
        domanda: "È sicuro andare vicino al confine con il Pakistan?",
        risposta: "Le dune turistiche sono lontane dal confine, ma il Foreign Office britannico sconsiglia ogni viaggio entro 10 chilometri dalla frontiera. Controllare Viaggiare Sicuri prima di partire e non spingersi verso ovest oltre le zone dei campi.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: 'Le mura e i bastioni in arenaria dorata del Forte di Jaisalmer',
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-13-jaisalmer.jpg',
  },
  {
    slug: 'udaipur',
    paeseSlug: 'india',
    ordine: 8,
    nome: 'Udaipur',
    tipologia: ['città', 'laghi', 'palazzi'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Udaipur è stata l'ultima tappa del giro, a fine febbraio: ci siamo arrivati passando dal tempio di Ranakpur e ci siamo rimasti due notti. Fin qui ci ha portati l'autista che avevamo da Agra, ed era uno squinternato: non lo consiglio, sceglietelo con cura.",
    introduzione:
      'La città dei laghi, nelle colline dell\'Aravalli, con il City Palace sulla riva del lago Pichola e i palazzi bianchi sulle isole.',
    percheAndarci:
      'È la tappa più rilassante del Rajasthan: terrazze sul lago, giri in barca, ghat e vicoli più tranquilli che altrove. Lungo la strada da Jodhpur c\'è il tempio di Ranakpur.',
    cosaVedere: [
      'Il City Palace',
      'Il tempio di Jagdish',
      'Il lago Pichola con lo Jag Mandir',
      'Il Palazzo dei monsoni di Sajjangarh al tramonto',
      'Il tempio giainista di Ranakpur e il forte di Kumbhalgarh, lungo la strada da Jodhpur',
    ],
    cosaFare: ['Un giro in barca sul Pichola', 'Una cena su una terrazza ad Ambrai Ghat', 'Uno spettacolo di danze tradizionali alla Bagore ki Haveli'],
    doveDormire: 'Lal Ghat e Gangaur Ghat in fascia economica e media; Ambrai e Hanuman Ghat per la vista sul palazzo.',
    doveMangiare: 'Terrazze sul lago per la vista, thali house della città vecchia per mangiare bene e spendere poco.',
    comeArrivare:
      "L'aeroporto di Udaipur è a circa 22 km dalla città, 30-40 minuti in taxi prepagato o Uber, con voli diretti per Delhi (circa 1 ora e mezza, 4.000-8.000 rupie se prenotati presto), Mumbai e Jaipur. Da Jodhpur in auto è una lunga giornata con la sosta a Ranakpur; da Jaipur ci sono treni in circa 7 ore. La stazione Udaipur City è a 10-15 minuti di tuk-tuk dalla città vecchia.",
    comeSpostarsi: 'A piedi e in tuk-tuk; barche sul lago.',
    periodoMigliore: 'ottobre-marzo; dopo il monsone i laghi sono pieni.',
    costi:
      "City Palace 400 rupie, circa 4 €, tariffa unica per indiani e stranieri (sito ufficiale, 2023); barca per lo Jag Mandir 600 rupie, 800 al tramonto (tariffe ufficiali aprile 2025-marzo 2026); a Ranakpur i non giainisti entrano di solito da mezzogiorno. Budget al giorno a persona in doppia: 40-60 € in guesthouse sui ghat, 90-140 € in hotel heritage con vista, da 250 € nei palazzi sul lago.",
    erroriDaEvitare: ['Arrivare a Ranakpur la mattina presto: i non giainisti entrano solo da mezzogiorno', 'Indossare pelle a Ranakpur'],
    luoghi: [
      {
        nome: "City Palace",
        testo: "Il palazzo dei Maharana di Mewar, cresciuto in quattro secoli sulla riva del lago Pichola. Cortili dei pavoni, sale di specchi, balconi sul lago; una parte è museo, un'altra è ancora della famiglia reale.",
        come: "Ingresso dalla Badi Pol o dalla porta di Shitla Mata, a piedi dalla città vecchia. Biglietti alle due porte o online sul sito del museo; guida o audioguida (in inglese, francese, tedesco e spagnolo) utili.",
        quando: "Aperto tutti i giorni dalle 9 alle 21, biglietteria fino alle 20. All'apertura del mattino, prima dei gruppi.",
        tempo: "2-3 ore",
        costo: "400 rupie (circa 4 €), stessa tariffa per indiani e stranieri (sito ufficiale, 2023)",
        url: "https://www.citypalacemuseum.org/planyourvisit",
        consiglio: "Fare il palazzo al mattino e la barca sul Pichola nel pomeriggio, dallo stesso molo.",
        lat: 24.5764,
        lng: 73.6835,
        orari: "Tutti i giorni dalle 9 alle 21, biglietteria fino alle 20."
      },
      {
        nome: "Il lago Pichola in barca",
        testo: "Il lago artificiale creato nel 1362, con il Lake Palace (oggi hotel) e lo Jag Mandir sulle isole. Dall'acqua si vede tutta la facciata del City Palace.",
        come: "Le barche ufficiali partono da Rameshwar Ghat, accanto al City Palace, e portano allo Jag Mandir; altre barche partono da alcuni ghat.",
        quando: "Giri di giorno dalle 10; il giro al tramonto costa di più. Orari che cambiano tra estate e inverno.",
        tempo: "1 ora",
        costo: "giro con sosta allo Jag Mandir 600 rupie (circa 6 €), al tramonto 800 (tariffe ufficiali aprile 2025-marzo 2026)",
        consiglio: "Chiedere se il giro comprende la sosta allo Jag Mandir: non tutti la fanno.",
        lat: 24.576,
        lng: 73.682,
        orari: "Giri di giorno dalle 10, l'ultimo al tramonto; orari diversi tra estate e inverno."
      },
      {
        nome: "Tempio di Jagdish",
        testo: "Il tempio del 1651 dedicato a Jagannath, forma di Vishnu, a pochi passi dal palazzo, in cima a 32 gradini di marmo, con le pareti fitte di sculture. È un tempio vivo, con canti e offerte tutto il giorno.",
        come: "A piedi dalla Badi Pol. Scarpe all'ingresso.",
        quando: "Mattina presto e sera, durante le cerimonie.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Sedersi un momento sui gradini durante l'aarti della sera.",
        lat: 24.5797,
        lng: 73.684
      },
      {
        nome: "Bagore ki Haveli",
        testo: "Una casa nobiliare del Settecento su Gangaur Ghat, oggi museo. La sera ospita lo spettacolo Dharohar di danze e musiche del Rajasthan.",
        come: "A piedi da Lal Ghat. Biglietti per lo spettacolo alla cassa, conviene arrivare presto.",
        quando: "La sera: lo spettacolo comincia alle 19 e dura un'ora.",
        tempo: "1-2 ore",
        consiglio: "Arrivare mezz'ora prima per un posto in prima fila.",
        lat: 24.5806,
        lng: 73.6816,
        orari: "Spettacolo Dharohar ogni sera alle 19, durata un'ora."
      },
      {
        nome: "Sajjangarh, il Palazzo dei monsoni",
        testo: "Un palazzo bianco iniziato nel 1884 su una collina a circa 5 chilometri a ovest della città, dentro un piccolo santuario naturale. Da lassù si vedono i laghi e le colline dell'Aravalli.",
        come: "In auto o tuk-tuk, su una strada che sale attraverso il santuario. Si visita fino al tramonto.",
        quando: "Al tramonto.",
        tempo: "1 ora e mezza",
        consiglio: "Si vede meglio il panorama che il palazzo: si va per il tramonto.",
        lat: 24.5951,
        lng: 73.642
      },
      {
        nome: "Ranakpur e Kumbhalgarh",
        testo: "Lungo la strada da Jodhpur. Ranakpur è un tempio giainista del Quattrocento in marmo bianco con 1.444 colonne, tutte diverse. Kumbhalgarh è un forte del 1448 con 36 chilometri di mura sulle colline, patrimonio UNESCO dal 2013.",
        come: "Con l'autista, come sosta nella giornata di viaggio tra Jodhpur e Udaipur. A Ranakpur audioguida disponibile.",
        quando: "Ranakpur riceve i non giainisti solo dopo le preghiere del mattino, di solito da mezzogiorno; l'orario di chiusura cambia secondo le fonti.",
        tempo: "1 ora e mezza a Ranakpur, 2 ore a Kumbhalgarh",
        consiglio: "Niente pelle a Ranakpur: cinture, borse e portafogli restano in auto.",
        lat: 25.1162,
        lng: 73.4729
      },
      {
        nome: "Lago Fateh Sagar",
        testo: "Il secondo lago della città, a nord del Pichola, con una lunga passeggiata sull'argine dove la sera escono le famiglie di Udaipur. Al centro c'è l'isola del Nehru Park.",
        come: "In tuk-tuk dalla città vecchia, 15 minuti. Sull'argine si cammina; ci sono barchette per l'isola.",
        quando: "Tardo pomeriggio e sera, con i chioschi di spuntini aperti.",
        tempo: "1 ora",
        costo: "passeggiata gratuita",
        lat: 24.6,
        lng: 73.672
      },
      {
        nome: "Saheliyon ki Bari",
        testo: "Il «giardino delle damigelle», creato nel Settecento per le dame di corte: prati, padiglioni di marmo, elefanti di pietra e fontane alimentate dal Fateh Sagar. Un'ora tranquilla tra un palazzo e l'altro.",
        come: "In tuk-tuk, vicino al Fateh Sagar. Biglietto all'ingresso.",
        quando: "Mattina, prima del caldo; si abbina al Fateh Sagar.",
        tempo: "45 minuti",
        lat: 24.6036,
        lng: 73.6862
      },
      {
        nome: "Funivia del Karni Mata",
        testo: "Una funivia breve che sale dal parco di Deen Dayal Upadhyay, sulla riva del Pichola, fino al tempio di Karni Mata sulla collina di Machla Magra. Dall'alto si vedono il City Palace, il lago e la città vecchia.",
        come: "A piedi o in tuk-tuk fino a Doodh Talai, dove parte la cabina.",
        quando: "Al tramonto, con il palazzo che si accende; nei fine settimana c'è coda.",
        tempo: "1 ora",
        lat: 24.5745,
        lng: 73.686
      },
      {
        nome: "Ambrai Ghat e Hanuman Ghat",
        testo: "La riva ovest del Pichola, di fronte al City Palace: scalinate dove le donne lavano i panni al mattino e da cui si vede tutta la facciata del palazzo. La sera le terrazze dei ristoranti si riempiono per la vista.",
        come: "A piedi dalla città vecchia attraverso il ponte di Chandpole.",
        quando: "Al tramonto e dopo, quando il palazzo è illuminato.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 24.577,
        lng: 73.68
      },
      {
        nome: "Gangaur Ghat",
        testo: "Il ghat principale della città vecchia, con l'arco a tre fornici sul lago davanti alla Bagore ki Haveli. Qui si celebra in primavera la festa di Gangaur, con le donne che portano in processione le statue della dea.",
        come: "A piedi da Lal Ghat o dal Jagdish.",
        quando: "All'alba, quando il lago è calmo, o prima dello spettacolo serale.",
        tempo: "30 minuti",
        costo: "gratuito",
        lat: 24.5803,
        lng: 73.6812
      },
      {
        nome: "Bharatiya Lok Kala Mandal",
        testo: "Il museo dell'arte popolare del Rajasthan, con una grande collezione di marionette di legno, maschere, costumi e strumenti. Nel pomeriggio c'è uno spettacolo di burattini tradizionali.",
        come: "In tuk-tuk, a nord della città vecchia verso Chetak Circle.",
        quando: "Pomeriggio, in tempo per lo spettacolo di burattini.",
        tempo: "1 ora",
        lat: 24.5875,
        lng: 73.697,
        consiglio: "Buono con i bambini e nelle ore calde."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "City Palace all'apertura",
          "Tempio di Jagdish",
          "Giro in barca sul Pichola nel pomeriggio",
          "Spettacolo alla Bagore ki Haveli"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: City Palace, Jagdish, ghat di Gangaur e Ambrai",
          "Barca sul Pichola e Bagore ki Haveli",
          "Giorno 2: mattina libera nei vicoli e nelle botteghe di miniature",
          "Tramonto da Sajjangarh e cena su una terrazza ad Ambrai Ghat"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1: City Palace all'apertura, Jagdish, Gangaur Ghat, barca sul Pichola e Bagore ki Haveli",
          "Giorno 2: Saheliyon ki Bari e Fateh Sagar al mattino, Lok Kala Mandal, funivia del Karni Mata e cena ad Ambrai Ghat",
          "Giorno 3: gita a Kumbhalgarh e Ranakpur, oppure Eklingji e Nagda al mattino e Sajjangarh al tramonto"
        ]
      }
    ],
    zone: [
      {
        nome: "Lal Ghat e Gangaur Ghat",
        perChi: "budget e fascia media",
        testo: "Guesthouse con terrazza nei vicoli dietro il City Palace, a piedi da tutto. Strade strette e motorini, ma è il cuore della città vecchia.",
        fascia: "20-70 €"
      },
      {
        nome: "Hanuman Ghat e Ambrai",
        perChi: "chi vuole la vista sul palazzo",
        testo: "Sulla riva opposta del Pichola: dalle terrazze si vede il City Palace di fronte. Più tranquilla, si attraversa il ponte a piedi.",
        fascia: "40-150 €"
      },
      {
        nome: "Lago Fateh Sagar",
        perChi: "hotel con giardino e piscina",
        testo: "Più a nord, lungo un lago con la passeggiata. Più spazio e calma, serve un tuk-tuk per la città vecchia.",
        fascia: "50-150 €"
      }
    ],
    sapori: [
      {
        nome: "Thali rajasthano",
        testo: "Il pranzo completo con dal, verdure, kadhi e chapati, ricaricato finché si vuole. Le thali house della città vecchia sono le più economiche e buone."
      },
      {
        nome: "Gatte ki sabzi",
        testo: "Gnocchetti di farina di ceci in un curry allo yogurt, un classico della cucina vegetariana del Mewar."
      },
      {
        nome: "Dal baati",
        testo: "Il piatto del Rajasthan, qui spesso servito nei ristoranti sulle terrazze."
      },
      {
        nome: "Kachori e jalebi al mattino",
        testo: "Frittelle salate e spirali dolci nelle botteghe intorno al Jagdish, la colazione locale."
      }
    ],
    attenzioni: [
      "Le «scuole d'arte» di miniature dove gli «studenti» vendono i quadri: spesso sono negozi, e i prezzi di partenza sono molto alti.",
      "Il giro in barca al tramonto costa più che di giorno: controllate la tariffa alla cassa.",
      "A Ranakpur i non giainisti entrano solo da mezzogiorno: non arrivate al mattino presto.",
      "Sulle terrazze sul lago possono arrivare le scimmie: non lasciate cibo in vista."
    ],
    gite: [
      {
        nome: "Kumbhalgarh e Ranakpur",
        distanza: "circa 85 km a Kumbhalgarh, 2 ore e mezza in auto",
        come: "Auto con autista per la giornata, giro ad anello.",
        testo: "Le mura di 36 chilometri del forte sulle colline e il tempio giainista dalle 1.444 colonne. Ranakpur riceve i non giainisti da mezzogiorno: conviene il forte al mattino."
      },
      {
        nome: "Chittorgarh",
        distanza: "circa 115 km, 2 ore in auto",
        come: "Auto con autista, o treno da Udaipur City in circa 2 ore.",
        testo: "Il più grande forte del Rajasthan, patrimonio UNESCO, con la Torre della Vittoria e i palazzi legati alla regina Padmini. Un luogo chiave della storia rajput."
      },
      {
        nome: "Eklingji e Nagda",
        distanza: "circa 22 km, 30-40 minuti in auto",
        come: "Tuk-tuk o auto per mezza giornata.",
        testo: "Il complesso di templi di Shiva protettore dei Maharana di Mewar e, poco lontano, i templi di Sas-Bahu a Nagda, del X secolo, finemente scolpiti."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Udaipur?",
        risposta: "Due giorni per il City Palace, il Pichola e i ghat con calma; il terzo per Kumbhalgarh e Ranakpur o per Chittorgarh."
      },
      {
        domanda: "Si può visitare il Lake Palace?",
        risposta: "No, è un hotel di lusso e vi entrano solo gli ospiti o chi prenota il ristorante. Dal lago lo si vede con il giro in barca allo Jag Mandir."
      },
      {
        domanda: "Quando conviene il giro in barca sul Pichola?",
        risposta: "Al tramonto la luce è la più bella ma il biglietto costa di più (800 rupie contro 600). Dopo il monsone il lago è pieno; in anni di siccità il livello può essere basso."
      },
      {
        domanda: "Dove dormire a Udaipur?",
        risposta: "Lal Ghat e Gangaur Ghat per stare nel centro a piedi, Hanuman Ghat e Ambrai per la vista sul City Palace, Fateh Sagar per hotel con giardino e piscina."
      },
      {
        domanda: "A che ora si entra al tempio di Ranakpur?",
        risposta: "I non giainisti entrano di solito da mezzogiorno, dopo le preghiere del mattino. Niente oggetti in pelle e spalle e gambe coperte."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: 'Il City Palace di Udaipur sulla riva del lago Pichola',
    immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-10-udaipur.jpg',
  },
  {
    slug: 'varanasi',
    paeseSlug: 'india',
    ordine: 9,
    nome: 'Varanasi e Sarnath',
    tipologia: ['città santa', 'fiume', 'spiritualità'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Varanasi è stata la prima vera tappa del nostro giro, a fine febbraio: ci siamo arrivati con il treno notturno da Delhi e siamo rimasti tre giorni sul Gange. Siamo ripartiti con un'altra notte in cuccetta, questa volta in terza classe, fino ad Agra: tra seconda e terza non c'è tantissima differenza.",
    introduzione:
      'La città santa dell\'induismo sulla riva occidentale del Gange, con 84 ghat, le scalinate dove si prega, ci si bagna e si cremano i morti. A mezz\'ora c\'è Sarnath, dove il Buddha tenne il primo sermone.',
    percheAndarci:
      'Per vedere la vita religiosa dell\'India senza filtri: il bagno rituale all\'alba, le pire di Manikarnika, il Ganga Aarti della sera. È la tappa più intensa di qualsiasi viaggio al Nord.',
    cosaVedere: [
      'I ghat all\'alba dalla barca, da Assi Ghat verso nord',
      'Il Ganga Aarti serale a Dashashwamedh Ghat',
      'Manikarnika Ghat, il ghat delle cremazioni, a distanza e senza foto',
      'Il Kashi Vishwanath, il tempio d\'oro di Shiva, con il nuovo corridoio verso il fiume',
      'I vicoli della città vecchia e le botteghe dei tessitori di seta',
      'Sarnath: lo stupa di Dhamek, le rovine del monastero e il museo con il capitello di Ashoka',
    ],
    cosaFare: [
      'Una barca a remi all\'alba',
      'Il Subah-e-Banaras ad Assi Ghat, la cerimonia del mattino',
      'Un lassi denso in una bottega della città vecchia',
      'Una camminata lungo tutti i ghat al pomeriggio',
    ],
    doveDormire:
      'Sui ghat o nei vicoli appena dietro, tra Assi e Dashashwamedh: guesthouse economiche, haveli sul fiume in fascia media e alta. La città nuova è comoda ma lontana dal fiume.',
    doveMangiare: 'Lassi, kachori sabzi, tamatar chaat, malaiyo d\'inverno, paan di Banaras. Molti locali vegetariani.',
    comeArrivare:
      "Da Delhi in treno notturno: lo Shiv Ganga Express parte da New Delhi verso le 20.05 e arriva a Banaras verso le 6.10, in cuccetta 1.000-3.000 rupie secondo la classe; il Vande Bharat diurno impiega circa 8 ore. In aereo da Delhi si vola in circa 1 ora e mezza; l'aeroporto Lal Bahadur Shastri è a circa 26 km, un'ora di taxi prepagato fino ai ghat. Le auto si fermano prima dei vicoli: l'ultimo tratto si fa a piedi o in e-risciò.",
    comeSpostarsi: 'A piedi lungo i ghat e nei vicoli, barche sul fiume, e-risciò e tuk-tuk verso la città nuova e Sarnath.',
    periodoMigliore:
      'ottobre-marzo; novembre per Dev Deepawali (il 24 novembre nel 2026). Dicembre-gennaio con nebbia fitta all\'alba. Con il monsone (luglio-settembre) i ghat bassi finiscono sott\'acqua.',
    costi:
      "Barca all'alba 800-1.500 rupie per la barca, circa 8-15 €, da contrattare prima di salire; Sarnath circa 300 rupie per gli stranieri, museo a parte e chiuso il venerdì; i templi sono gratuiti. Budget al giorno a persona in doppia: 40-60 € in guesthouse sui ghat (da 1.500 rupie la camera), 90-140 € in haveli sul fiume con guida, da 250 € negli hotel di lusso sul Gange.",
    erroriDaEvitare: [
      'Seguire la «guida» spontanea a Manikarnika che poi chiede soldi per la legna',
      'Fotografare le cremazioni o le famiglie in lutto',
      'Salire su una barca senza aver fissato prezzo e durata',
      'Fare il bagno nel Gange o bere l\'acqua del fiume',
      'Portare telefono e borse al Kashi Vishwanath: non entrano, vanno negli armadietti',
    ],
    luoghi: [
      {
        nome: "I ghat all'alba in barca",
        testo: "Ottantaquattro scalinate sul Gange, una dopo l'altra, dove all'alba i pellegrini fanno il bagno rituale, i sacerdoti pregano e i lavandai battono i panni. Dall'acqua si vede tutto il fronte della città.",
        come: "Barca a remi da Assi o da Dashashwamedh, verso nord fino a Manikarnika. Prezzo e durata si fissano prima di salire.",
        quando: "Mezz'ora prima del sole. Tra dicembre e gennaio la nebbia può fermare le barche; con il monsone il fiume si alza.",
        tempo: "1-2 ore",
        costo: "barca privata a prezzo da contrattare: le cifre cambiano molto secondo stagione, durata e barcaiolo",
        consiglio: "Varanasi è assolutamente da fare con Shiva. Raramente ho trovato una persona così gentile e disponibile, che conosce così bene il posto e te lo spiega mentre giri: è come fare una passeggiata per le vie del tuo paese con un amico.",
        lat: 25.2896,
        lng: 83.0066
      },
      {
        nome: "Il Ganga Aarti a Dashashwamedh",
        testo: "La cerimonia serale per il fiume: un gruppo di sacerdoti fa ruotare grandi lampade a fuoco al ritmo di campane e canti, davanti a migliaia di persone sulle scale e sulle barche.",
        come: "Dal ghat principale, sui gradini, oppure da una barca ferma davanti. Si arriva a piedi da Godowlia, perché le auto si fermano prima.",
        quando: "Ogni sera al tramonto; l'orario cambia con la stagione. Arrivare almeno un'ora prima per un posto sui gradini.",
        tempo: "1 ora e mezza",
        costo: "gratuito dai gradini",
        consiglio: "Tenere borse e telefoni davanti a sé: nella calca i borseggiatori lavorano.",
        lat: 25.3066,
        lng: 83.0106,
        orari: "Ogni sera al tramonto: verso le 18 in inverno, verso le 19 in estate."
      },
      {
        nome: "Subah-e-Banaras ad Assi Ghat",
        testo: "La cerimonia del mattino al ghat più a sud: canti, musica classica, un piccolo aarti e yoga sui gradini. Più raccolta e meno affollata di quella serale.",
        come: "Ad Assi Ghat, a piedi se si dorme in zona.",
        quando: "Prima dell'alba, ogni giorno.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Si combina bene con la barca: finita la cerimonia si sale e si parte verso nord.",
        lat: 25.2896,
        lng: 83.0066
      },
      {
        nome: "Manikarnika Ghat",
        testo: "Uno dei due ghat delle cremazioni, dove i fuochi delle pire non si spengono mai. Per gli induisti essere cremati qui porta al moksha, la liberazione dal ciclo delle rinascite.",
        come: "Si guarda dalla barca o a distanza dai gradini sopra. Niente foto e niente video.",
        quando: "Di giorno; la sera si vede bene dalla barca.",
        tempo: "30 minuti",
        consiglio: "Ignorate chi si presenta come guida o «volontario dell'ospizio»: alla fine chiede soldi per la legna dei poveri.",
        lat: 25.3109,
        lng: 83.0141,
        orari: "Le cremazioni vanno avanti giorno e notte, senza interruzione."
      },
      {
        nome: "Kashi Vishwanath",
        testo: "Il tempio d'oro di Shiva, uno dei più sacri dell'India. Il corridoio del Kashi Vishwanath Dham, inaugurato il 13 dicembre 2021, lo collega direttamente al fiume.",
        come: "Telefoni, borse e apparecchi elettronici non entrano: armadietti gratuiti agli ingressi. Code lunghe; esiste un ingresso a pagamento più rapido (Sugam Darshan), prenotabile sul sito ufficiale e sospeso durante gli aarti e nei giorni di festa.",
        quando: "Mattina presto. Il lunedì, giorno di Shiva, e le feste sono molto affollati.",
        tempo: "1-3 ore secondo la coda",
        costo: "ingresso libero",
        url: "https://shrikashivishwanath.org/",
        consiglio: "Vestiti lunghi e niente in tasca: ai controlli si passa più in fretta.",
        lat: 25.3109,
        lng: 83.0107
      },
      {
        nome: "I vicoli della città vecchia",
        testo: "Il labirinto di vicoli dietro i ghat, con tempietti, mucche, botteghe di dolci, venditori di fiori e i telai della seta di Banaras.",
        come: "A piedi, meglio con una guida la prima volta: Google Maps qui si perde.",
        quando: "Mattina e pomeriggio. Dopo il tramonto è meglio non girarli da soli, soprattutto per le donne.",
        tempo: "mezza giornata",
        consiglio: "La seta va comprata in botteghe consigliate: quella venduta come «fatta a mano» può essere di telaio meccanico.",
        lat: 25.309,
        lng: 83.01
      },
      {
        nome: "Sarnath",
        testo: "Il luogo dove il Buddha tenne il primo sermone, circa 8 chilometri a nord-est di Varanasi. Ci sono lo stupa di Dhamek, le rovine dei monasteri e un museo con il capitello dei leoni di Ashoka, simbolo dell'India.",
        come: "In tuk-tuk o in auto. Il sito archeologico e il museo hanno biglietti separati.",
        quando: "Mattina. Il museo apre dalle 10 alle 17 ed è chiuso il venerdì (Incredible India).",
        tempo: "mezza giornata",
        costo: "circa 300 rupie per gli stranieri (circa 3 €), museo a parte (2026)",
        url: "https://asi.nic.in/",
        consiglio: "Non andarci di venerdì: senza il museo manca il pezzo più bello.",
        lat: 25.3808,
        lng: 83.0245,
        orari: "Sito dall'alba al tramonto; museo dalle 10 alle 17, chiuso il venerdì."
      },
      {
        nome: "La camminata dei ghat, da Assi a Dashashwamedh",
        testo: "Circa tre chilometri di scalinate continue lungo il fiume, ognuna con i suoi palazzi e la sua storia: Tulsi, Harishchandra con le pire minori, Kedar con il tempio a strisce bianche e rosse, Chet Singh con il suo forte, Darbhanga con il palazzo a picco sull'acqua. È il modo migliore per capire la città.",
        come: "A piedi, partendo da Assi verso nord. Con il monsone alcuni tratti sono sott'acqua e si passa dai vicoli.",
        quando: "Nel pomeriggio, per arrivare a Dashashwamedh in tempo per l'aarti.",
        tempo: "2-3 ore",
        costo: "gratuito",
        lat: 25.2985,
        lng: 83.0081,
        consiglio: "A Harishchandra, come a Manikarnika, niente foto alle pire."
      },
      {
        nome: "Banaras Hindu University e Bharat Kala Bhavan",
        testo: "Il grande campus verde fondato nel 1916, una pausa dal caos della città. Dentro c'è il Bharat Kala Bhavan, un museo con miniature, sculture, tessuti di Banaras e una sala dedicata alla storia della città, e il nuovo tempio di Vishwanath dell'università.",
        come: "In e-risciò da Assi Ghat, 10 minuti.",
        quando: "Mattina, nei giorni feriali. Il museo è chiuso la domenica e nei giorni di festa dell'università.",
        tempo: "2 ore",
        orari: "Museo chiuso la domenica e nei giorni festivi dell'università.",
        lat: 25.2677,
        lng: 82.9913
      },
      {
        nome: "Tempio di Sankat Mochan",
        testo: "Il tempio di Hanuman fondato secondo la tradizione dal poeta Tulsidas, tra i più amati della città. Il martedì e il sabato, giorni di Hanuman, si riempie di fedeli e di canti.",
        come: "In e-risciò dalla zona di Assi, 10 minuti. Controlli all'ingresso: telefoni e borse di solito vanno lasciati al deposito.",
        quando: "Martedì o sabato sera, per l'atmosfera.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        lat: 25.2817,
        lng: 82.9993,
        consiglio: "Prendere i laddu, i dolci di offerta che si comprano all'ingresso: sono famosi in città."
      },
      {
        nome: "Tempio di Durga e Tulsi Manas Mandir",
        testo: "Due templi uno accanto all'altro: quello di Durga, del Settecento, rosso ocra accanto a una vasca, e il Tulsi Manas Mandir, in marmo bianco, con i versi del Ramcharitmanas di Tulsidas incisi sulle pareti.",
        come: "A piedi o in e-risciò da Sankat Mochan, 5 minuti. Scarpe tolte.",
        quando: "Insieme a Sankat Mochan e alla BHU.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        lat: 25.2889,
        lng: 82.9997
      },
      {
        nome: "Forte di Ramnagar",
        testo: "La residenza settecentesca dei maharaja di Benares, sulla riva est del Gange, di fronte alla città. Una parte è un museo un po' polveroso, con auto d'epoca, palanchini, armi e un curioso orologio astronomico.",
        come: "In auto o e-risciò attraverso il ponte, circa 30-40 minuti da Assi; oppure in barca.",
        quando: "Pomeriggio; tra settembre e ottobre qui si tiene la Ramlila, la rappresentazione del Ramayana che dura un mese.",
        tempo: "1 ora e mezza",
        lat: 25.2679,
        lng: 83.0249
      },
      {
        nome: "Tempio nepalese di Lalita Ghat",
        testo: "Un tempio di Shiva in legno scuro costruito nell'Ottocento dal re del Nepal, in stile pagoda come quelli di Kathmandu. Le travi sono intagliate fittamente, e la terrazza guarda il fiume.",
        come: "A piedi dai ghat, tra Manikarnika e il corridoio del Kashi Vishwanath. Scarpe tolte.",
        quando: "Mattina, insieme al Kashi Vishwanath.",
        tempo: "20 minuti",
        lat: 25.3115,
        lng: 83.0151
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Barca all'alba da Assi Ghat",
          "Kashi Vishwanath in mattinata",
          "Vicoli della città vecchia e un lassi",
          "Camminata lungo i ghat nel pomeriggio",
          "Ganga Aarti a Dashashwamedh"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: arrivo, camminata lungo i ghat, Ganga Aarti",
          "Giorno 2: Subah-e-Banaras e barca all'alba",
          "Manikarnika dalla barca, Kashi Vishwanath",
          "Vicoli e botteghe della seta"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "I due giorni sopra, come li abbiamo fatti noi con il treno notturno da Delhi all'arrivo",
          "Giorno 3: Sarnath al mattino (non il venerdì)",
          "Pomeriggio lento sui ghat del sud",
          "La sera il treno per Agra"
        ]
      }
    ],
    zone: [
      {
        nome: "Assi Ghat",
        perChi: "chi vuole il fiume con un po' di calma",
        testo: "Il ghat più a sud, con caffè, guesthouse e la cerimonia del mattino. Un po' più tranquillo; a Dashashwamedh si va in barca o con una lunga camminata lungo i ghat.",
        fascia: "20-80 €"
      },
      {
        nome: "Dashashwamedh e Godowlia",
        perChi: "chi vuole stare nel centro",
        testo: "Guesthouse e haveli sul fiume tra i ghat centrali, a due passi dall'aarti e dal Kashi Vishwanath. Affollato e rumoroso a tutte le ore.",
        fascia: "25-150 €"
      },
      {
        nome: "Cantonment, la città nuova",
        perChi: "chi cerca un hotel di catena",
        testo: "Comoda per stazione e aeroporto, ma lontana dal fiume, e il traffico allunga i tempi. Ed è il fiume all'alba il motivo per venire.",
        fascia: "50-120 €"
      }
    ],
    sapori: [
      {
        nome: "Lassi",
        testo: "Yogurt denso, a volte con frutta o malai, servito in vasetti di terracotta nelle botteghe dei vicoli verso Manikarnika."
      },
      {
        nome: "Kachori sabzi e jalebi",
        testo: "La colazione di Varanasi: frittelle ripiene con curry di patate, poi jalebi caldi. Nelle botteghe dei vicoli dall'alba."
      },
      {
        nome: "Tamatar chaat",
        testo: "Un chaat caldo di pomodoro, patate e spezie, servito in ciotoline di foglie. Nei chioschi di chaat di Godowlia."
      },
      {
        nome: "Malaiyo",
        testo: "Schiuma di latte allo zafferano montata all'aperto nelle notti d'inverno e venduta all'alba. Solo nei mesi freddi."
      },
      {
        nome: "Paan di Banaras",
        testo: "Foglia di betel ripiena di noce di areca, spezie e dolci, da masticare dopo cena. Per provarlo chiedere la versione dolce, senza tabacco."
      }
    ],
    attenzioni: [
      "Le scimmie sui terrazzi degli hotel sono aggressive con il cibo. A Varanasi la mia fidanzata è stata morsa da una scimmia sul terrazzo dell'hotel che dava sul Gange: Shiva ci ha accompagnati in ospedale per la visita e le vaccinazioni. Se succede, andate subito per la profilassi antirabbica.",
      "La «guida» spontanea di Manikarnika che poi chiede soldi per la legna delle cremazioni.",
      "Fissate prezzo e durata della barca prima di salire.",
      "Non fate il bagno nel Gange e non bevete l'acqua del fiume, nemmeno «benedetta».",
      "Nei vicoli e nella folla dell'aarti molestie e borseggi sono possibili: meglio essere accompagnati dopo il tramonto."
    ],
    gite: [
      {
        nome: "Sarnath",
        distanza: "circa 10 km, 30-40 minuti",
        come: "Tuk-tuk o auto per mezza giornata.",
        testo: "Il parco dei cervi dove il Buddha tenne il primo sermone: stupa di Dhamek, monasteri moderni di vari Paesi buddhisti e il museo con il capitello dei leoni. Il museo è chiuso il venerdì."
      },
      {
        nome: "Forte di Chunar",
        distanza: "circa 40 km, 1 ora e mezza in auto",
        come: "Auto con autista.",
        testo: "Un forte su uno sperone di roccia sopra il Gange, conteso per secoli da sultani, moghul e britannici. Pochi turisti e una bella vista sul fiume."
      },
      {
        nome: "Bodh Gaya",
        distanza: "circa 250 km, 5-6 ore in auto",
        come: "Auto con autista o treno fino a Gaya; serve almeno una notte.",
        testo: "Il luogo dell'illuminazione del Buddha, con il tempio di Mahabodhi, patrimonio UNESCO. Non è una gita in giornata: va messa come tappa a sé."
      }
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Varanasi?",
        risposta: "Almeno due notti, per avere un'alba in barca e un aarti serale; tre giorni permettono anche Sarnath e una camminata lenta lungo i ghat."
      },
      {
        domanda: "Si possono fotografare le cremazioni?",
        risposta: "No. A Manikarnika e Harishchandra le foto e i video delle pire sono vietati e offendono le famiglie; si guarda in silenzio, dalla barca o da lontano."
      },
      {
        domanda: "Quanto costa la barca all'alba sul Gange?",
        risposta: "Una barca a remi privata costa indicativamente 800-1.500 rupie per un'ora o due, secondo stagione e barcaiolo. Prezzo e durata si fissano prima di salire."
      },
      {
        domanda: "Dove dormire a Varanasi?",
        risposta: "Sui ghat o nei vicoli appena dietro, tra Assi e Dashashwamedh: il fiume all'alba è il motivo del viaggio. La città nuova è comoda solo per stazione e aeroporto."
      },
      {
        domanda: "Si può entrare nel Kashi Vishwanath?",
        risposta: "Sì, anche i non induisti, con vestiti coperti e senza telefoni né borse, che restano negli armadietti gratuiti. Le code possono durare ore: esiste un ingresso più rapido a pagamento sul sito ufficiale."
      },
      {
        domanda: "Qual è il periodo migliore per Varanasi?",
        risposta: "Da ottobre a marzo; a novembre c'è Dev Deepawali, con i ghat coperti di lumini. A dicembre e gennaio la nebbia può fermare le barche all'alba; con il monsone i ghat bassi vanno sott'acqua."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: 'Una barca a remi rossa scivola sul Gange davanti ai ghat e ai palazzi di Varanasi',
    immagine: '/images/india/varanasi-barca-rossa-gange-riccardo.jpg',
  },

  // --- SUD ---
  {
    slug: 'chennai',
    paeseSlug: 'india',
    ordine: 10,
    nome: 'Chennai',
    tipologia: ['città', 'arrivo'],
    giorniConsigliati: 'di passaggio',
    visitataPersonalmente: true,
    miaEsperienza:
      "Nel giro dell'India del Sud Chennai per me è stata solo la porta d'ingresso: ci sono arrivato in volo da Delhi, dopo il Taj Mahal all'alba, e sono ripartito lungo la East Coast Road verso Mamallapuram.",
    introduzione:
      'La capitale del Tamil Nadu, ex Madras, porta d\'ingresso aereo al Sud-est dell\'India. Una città grande e calda, con il lungomare di Marina Beach e il quartiere di Mylapore attorno al tempio di Kapaleeshwarar.',
    percheAndarci: "Soprattutto come punto di arrivo: Mamallapuram è a circa 60 chilometri di strada. Chi ha mezza giornata vede Mylapore e il Government Museum con i bronzi del Sud.",
    cosaVedere: [
      "Il tempio di Kapaleeshwarar a Mylapore",
      "Marina Beach al tramonto",
      "I bronzi del Government Museum",
    ],
    cosaFare: ['Un pasto su foglia di banano in un ristorante vegetariano storico', 'Un caffè filtrato in tazza di metallo'],
    comeArrivare: 'Aeroporto internazionale di Chennai, con voli dall\'Italia via Golfo.',
    comeSpostarsi: 'Uber, Ola, metro e tuk-tuk.',
    periodoMigliore: 'dicembre-marzo; ottobre-dicembre è la stagione del monsone di nord-est.',
    erroriDaEvitare: [
      "Fare il bagno a Marina Beach: è vietato per legge, le correnti sono pericolose e non ci sono bagnini",
      "Programmare la visita tra ottobre e dicembre senza considerare il monsone e i cicloni",
    ],
    luoghi: [
      {
        nome: "Tempio di Kapaleeshwarar",
        testo: "Il tempio di Shiva del quartiere di Mylapore, con il gopuram di circa 37 metri coperto di figure in stucco e la grande vasca sacra, che ha acqua tutto l'anno. Intorno c'è uno dei quartieri tamil più tradizionali della città, con botteghe di fiori, ottone e dolci.",
        come: "In metro o Uber fino a Mylapore. Scarpe al deposito. Dal settembre 2026 nei grandi templi del Tamil Nadu foto e video sono vietati e le regole sui telefoni sono cambiate più volte: seguire le indicazioni all'ingresso.",
        quando: "Mattina presto o sera, durante le cerimonie. Orari esposti all'ingresso del tempio.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Girare a piedi le strade intorno alla vasca, tra botteghe e bancarelle."
      },
      {
        nome: "Government Museum di Egmore",
        testo: "Fondato nel 1851, è il secondo museo più antico dell'India dopo l'Indian Museum di Calcutta. La galleria dei bronzi raccoglie statue di divinità dell'India del Sud, tra cui il Nataraja (Shiva danzante) di Tiruvalangadu, dell'XI secolo.",
        come: "In metro o Uber fino a Egmore. Si visita da soli; il complesso è grande, puntare dritti alla galleria dei bronzi.",
        quando: "Dalle 10.30 alle 18.30, chiuso il venerdì e in alcune feste (Deepavali, Pongal, 26 gennaio, 15 agosto, 2 ottobre). Fonte: sito ufficiale, 2026.",
        tempo: "1 ora e mezza",
        url: "https://www.govtmuseumchennai.org/",
        consiglio: "Se si va poi a Thanjavur e Madurai, qui si capisce cosa si vedrà nei templi."
      },
      {
        nome: "Marina Beach",
        testo: "La spiaggia urbana naturale più lunga dell'India, con una passeggiata di circa 6 chilometri. Al tramonto si riempie di famiglie, venditori di spuntini e giostre.",
        come: "In Uber o tuk-tuk. La passeggiata corre lungo tutta la spiaggia.",
        quando: "Il tardo pomeriggio e il tramonto, quando il caldo cala.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Si cammina e si mangia, ma il bagno qui è vietato per legge: le correnti sono pericolose e non ci sono bagnini."
      },
      {
        nome: "Fort St. George",
        testo: "La prima fortezza inglese in India, fondata nel 1639 e finita nel 1644, oggi sede dell'assemblea legislativa del Tamil Nadu. Dentro ci sono la chiesa di St. Mary, del 1680, la chiesa anglicana più antica dell'India, e il Fort Museum sul periodo britannico.",
        come: "In Uber o tuk-tuk, vicino al porto.",
        quando: "Di mattina; orari del Fort Museum sul sito dell'ASI.",
        tempo: "1 ora",
        consiglio: "Una visita per chi è appassionato di storia coloniale; altrimenti meglio Mylapore."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Kapaleeshwarar e Mylapore al mattino",
          "Colazione tamil con caffè filtrato",
          "Government Museum e i bronzi Chola",
          "Tramonto a Marina Beach",
          "La sera, o il mattino dopo, partenza per Mamallapuram"
        ]
      }
    ],
    zone: [
      {
        nome: "Mylapore e Alwarpet",
        perChi: "chi vuole la Chennai tradizionale",
        testo: "Quartiere dei templi e dei ristoranti vegetariani storici, vicino a Marina Beach. Traffico intenso, ma tutto a portata di Uber."
      },
      {
        nome: "Egmore",
        perChi: "chi arriva o parte in treno",
        testo: "Vicino alla stazione e al museo, con hotel di fascia media. Comodo, poco affascinante."
      },
      {
        nome: "Vicino all'aeroporto o sulla East Coast Road",
        perChi: "chi va diretto a Mamallapuram",
        testo: "Hotel e resort a sud, sulla strada per la costa. Si evita il centro e si parte subito."
      }
    ],
    sapori: [
      {
        nome: "Caffè filtrato",
        testo: "Caffè con cicoria e latte, versato da un bicchiere di metallo all'altro per fare la schiuma. In ogni ristorante vegetariano tradizionale."
      },
      {
        nome: "Pasto su foglia di banano",
        testo: "Riso, sambar, rasam, verdure, yogurt e pickle serviti su una foglia di banano, ricaricati finché si vuole. Nei ristoranti vegetariani di Mylapore."
      },
      {
        nome: "Idli, dosa e vada",
        testo: "Tortini di riso al vapore, crêpe croccanti di riso e lenticchie e ciambelline fritte, con chutney di cocco. La colazione del Sud."
      },
      {
        nome: "Pollo del Chettinad",
        testo: "Il curry più speziato del Tamil Nadu, con pepe nero, anice stellato e cocco tostato. Nei ristoranti di cucina Chettinad."
      }
    ],
    attenzioni: [
      "Non fate il bagno a Marina Beach: è vietato per legge, le correnti sono forti e non ci sono bagnini.",
      "Tra ottobre e dicembre il monsone di nord-est porta piogge forti e a volte cicloni.",
      "I tuk-tuk raramente usano il tassametro: meglio Uber, Ola o un prezzo fissato prima.",
      "Dal settembre 2026 nei grandi templi del Tamil Nadu foto e video sono vietati; le regole sui telefoni (deposito o telefono spento) sono cambiate più volte: seguite le indicazioni all'ingresso.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Le onde sulla sabbia di Marina Beach al crepuscolo, Chennai',
    immagine: '/images/india/chennai.jpg',
  },
  {
    slug: 'mamallapuram',
    paeseSlug: 'india',
    ordine: 11,
    nome: 'Mamallapuram',
    tipologia: ['patrimonio UNESCO', 'mare', 'templi'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nel giro dell'India del Sud, come prima tappa dopo l'arrivo a Chennai: il tempio sul mare e i Cinque Ratha, prima di proseguire per Puducherry.",
    introduzione: "L'antico porto dei re Pallava sulla costa del Coromandel, dove tra VII e VIII secolo furono scolpiti alcuni dei primi templi in pietra del Sud: templi ricavati nella roccia, bassorilievi e il tempio sul mare.",
    percheAndarci:
      'Per vedere in un paese piccolo e tranquillo l\'inizio di tutto quello che si vedrà a Thanjavur e Madurai, e per riprendersi dal volo prima di partire verso sud.',
    cosaVedere: [
      'Lo Shore Temple sulla spiaggia',
      'I Cinque Ratha, templi monolitici a forma di carro',
      'La Penitenza di Arjuna, il grande bassorilievo nella roccia',
      'La «palla di burro di Krishna» e i templi rupestri della collina',
    ],
    cosaFare: ['Visitare le botteghe degli scalpellini', 'Il tramonto sullo Shore Temple', 'Una gita a Kanchipuram, la città dei templi e della seta'],
    doveDormire: 'Guesthouse vicino alla spiaggia dei pescatori; resort sulla East Coast Road.',
    doveMangiare: 'Pesce e frutti di mare nei ristoranti sulla spiaggia, colazioni tamil in paese.',
    comeArrivare: "Circa 60 chilometri a sud di Chennai, in auto o taxi dall'aeroporto lungo la East Coast Road.",
    comeSpostarsi: 'A piedi e in bici; tuk-tuk per i Cinque Ratha.',
    periodoMigliore: 'dicembre-marzo.',
    costi: "Shore Temple e Cinque Ratha sono a pagamento con biglietto ASI: tariffe per gli stranieri alla biglietteria o sul portale ASI. Penitenza di Arjuna ad accesso libero.",
    erroriDaEvitare: [
      "Fare il bagno senza informarsi: il mare davanti al paese ha correnti forti",
      "Visitare i siti a mezzogiorno, sul granito al sole",
    ],
    luoghi: [
      {
        nome: "Shore Temple",
        testo: "Il tempio di granito sulla spiaggia, costruito dai re Pallava all'inizio dell'VIII secolo, sotto Narasimhavarman II. È uno dei più antichi templi in pietra costruiti (e non scavati nella roccia) del Sud dell'India; il vento salato ne ha consumato in parte le decorazioni. È patrimonio UNESCO dal 1984 con gli altri monumenti di Mamallapuram.",
        come: "A piedi dal paese. Biglietto alla biglietteria ASI o online.",
        quando: "Orari alla biglietteria o sul sito dell'ASI. L'alba e il tardo pomeriggio danno la luce migliore sul granito.",
        tempo: "1 ora",
        costo: "biglietto ASI per gli stranieri, tariffa alla biglietteria",
        url: "https://asi.nic.in/",
        consiglio: "Girare intorno al tempio dal lato del mare: si vede bene quanto il vento ha consumato le sculture."
      },
      {
        nome: "I Cinque Ratha",
        testo: "Cinque templi a forma di carro, ognuno scolpito in un unico blocco di granito rosa nel VII secolo. Accanto ci sono un elefante e un toro Nandi di pietra a tutto tondo, e sul Bhima Ratha le colonne poggiano su leoni.",
        come: "Poco fuori dal centro, in bici o tuk-tuk. Biglietto ASI.",
        quando: "Mattina presto, prima che il sole renda il granito rovente.",
        tempo: "45 minuti",
        costo: "biglietto ASI; chiedere alla biglietteria se vale anche per lo Shore Temple",
        url: "https://asi.nic.in/",
        consiglio: "Girare intorno a ogni ratha: ognuno ha uno stile di tetto diverso."
      },
      {
        nome: "La Penitenza di Arjuna",
        testo: "Un bassorilievo all'aperto di circa 29 metri per 13, scolpito su due massi: dei, animali, saggi e la discesa del Gange dal cielo, con elefanti quasi a grandezza naturale.",
        come: "Nel centro del paese, a piedi. Accesso libero.",
        quando: "Mattina presto o tardo pomeriggio, con la luce radente che fa risaltare le figure.",
        tempo: "30 minuti",
        costo: "gratuito",
        consiglio: "Cercare il gatto in piedi su una zampa, che imita la penitenza dei saggi."
      },
      {
        nome: "La palla di burro di Krishna e la collina",
        testo: "Un masso di granito in equilibrio su un pendio, e intorno templi rupestri scolpiti nella roccia come il Varaha e il Mahishasuramardini, con bassorilievi bellissimi. In cima c'è il vecchio faro.",
        come: "A piedi dalla Penitenza di Arjuna, per sentieri sulla collina.",
        quando: "Il tardo pomeriggio fino al tramonto.",
        tempo: "1-2 ore",
        consiglio: "Scarpe comode: la roccia è liscia e scivolosa."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Cinque Ratha all'apertura",
          "Penitenza di Arjuna",
          "Pranzo di pesce sulla spiaggia",
          "Collina con i templi rupestri e la palla di Krishna",
          "Shore Temple al tramonto"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Il giorno sopra",
          "Giorno 2: gita a Kanchipuram, l'antica capitale dei Pallava, città dei templi e della seta",
          "Ritorno e serata nel paese con le botteghe degli scalpellini",
        ]
      }
    ],
    zone: [
      {
        nome: "Il paese, vicino alla spiaggia dei pescatori",
        perChi: "chi vuole tutto a piedi",
        testo: "Guesthouse e piccoli hotel tra la spiaggia e i monumenti, con ristoranti di pesce. Semplice, tranquillo la sera."
      },
      {
        nome: "East Coast Road",
        perChi: "resort con piscina",
        testo: "Resort sulla spiaggia a nord e a sud del paese. Comodi per riposare dopo il volo, serve un mezzo per i siti."
      }
    ],
    sapori: [
      {
        nome: "Pesce e frutti di mare",
        testo: "Gamberi, calamari e pesce del giorno alla griglia o al curry, nei ristoranti sulla spiaggia dei pescatori."
      },
      {
        nome: "Colazione tamil",
        testo: "Idli, dosa e pongal con caffè filtrato, nelle trattorie vegetariane del paese."
      },
      {
        nome: "Meen kuzhambu",
        testo: "Curry di pesce al tamarindo della costa del Coromandel, acidulo e piccante, con riso."
      },
      {
        nome: "Cocco fresco",
        testo: "Noci di cocco aperte al momento dai venditori sulla spiaggia, la bevanda migliore nel caldo."
      }
    ],
    attenzioni: [
      "Prima di fare il bagno informatevi sul posto: il mare davanti al paese ha correnti forti.",
      "I biglietti si comprano alle biglietterie ASI o online, non da chi li offre per strada.",
      "Nelle botteghe di sculture i prezzi per gli stranieri partono alti: trattare.",
      "A mezzogiorno il granito al sole è rovente: siti all'alba e al tramonto.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Lo Shore Temple di Mamallapuram sulla spiaggia, in granito eroso dal vento',
    immagine: '/images/india/mamallapuram.jpg',
  },
  {
    slug: 'madurai',
    paeseSlug: 'india',
    ordine: 12,
    nome: 'Madurai',
    tipologia: ['città', 'templi'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nel giro dell'India del Sud, arrivando da Thanjavur: una notte vicino al tempio di Meenakshi e il mercato dei fiori la mattina dopo, prima di salire a Munnar.",
    introduzione:
      'Una delle città abitate più antiche del Sud, cresciuta per cerchi concentrici intorno al tempio di Meenakshi Amman, con le sue quattordici torri coperte di divinità dipinte.',
    percheAndarci:
      'Il Meenakshi è il tempio più vivo dell\'India del Sud: fedeli, musici, elefanti e cerimonie a ogni ora, e la processione della sera.',
    cosaVedere: [
      'Il tempio di Meenakshi Amman, la vasca del loto d\'oro e il corridoio delle mille colonne',
      'Il palazzo Thirumalai Nayak',
      'Il mercato dei fiori di Mattuthavani all\'alba',
    ],
    cosaFare: ['Assistere alla cerimonia della notte al tempio', 'Bere un jigarthanda', 'Farsi cucire un vestito in giornata dai sarti vicino al tempio'],
    doveDormire: 'Hotel di città vicino al tempio; hotel heritage sulle colline intorno.',
    doveMangiare: 'Parotta con curry di montone, cucina del Chettinad, idli e dosa al mattino, jigarthanda.',
    comeArrivare:
      "L'aeroporto di Madurai, con voli da Chennai, Bangalore, Mumbai e Delhi, è a circa 12 km dal tempio: 30-40 minuti in taxi. La stazione di Madurai Junction è a 1 km dal Meenakshi, con treni da Chennai in circa 6-8 ore secondo il treno. Da Thanjavur sono circa 3 ore d'auto, da Munnar 5-6 ore di strada di montagna.",
    comeSpostarsi: 'A piedi intorno al tempio, tuk-tuk per il resto.',
    periodoMigliore: 'dicembre-febbraio; da marzo fa molto caldo.',
    costi:
      "Meenakshi ingresso libero, sala delle mille colonne con un piccolo biglietto, deposito telefoni 5 rupie; palazzo Thirumalai Nayak con biglietto modesto. Budget al giorno a persona in doppia: 25-40 € con hotel semplice vicino al tempio e pasti su foglia di banano, 60-90 € in hotel di fascia media con tuk-tuk, da 150 € negli hotel heritage sulle colline.",
    erroriDaEvitare: [
      "Ignorare le regole sui telefoni: al Meenakshi foto e video sono vietati e il telefono va lasciato al deposito o tenuto spento, secondo le indicazioni del momento",
      "Andare al tempio senza controllare gli orari: di solito chiude per qualche ora a metà giornata",
    ],
    luoghi: [
      {
        nome: "Tempio di Meenakshi Amman",
        testo: "Un tempio-città con quattordici gopuram coperti di migliaia di statue dipinte, dedicato alla dea Meenakshi e a Shiva (Sundareswarar). Dentro ci sono la vasca del loto d'oro e la sala delle mille colonne, che in realtà ne ha 985 scolpite, e cerimonie per tutta la giornata.",
        come: "Quattro ingressi, uno per lato. Scarpe al deposito; telefono al deposito o spento secondo le regole del momento, foto vietate. Vestiti che coprono spalle e gambe. I santuari principali sono riservati agli induisti.",
        quando: "Di solito aperto dalle 5 del mattino fino a metà giornata e dalle 16 alle 21.30 (Incredible India, 2026); gli orari cambiano nelle feste. Ogni sera una processione porta in palanchino le impronte di Shiva alla camera di Meenakshi.",
        tempo: "2-3 ore",
        costo: "ingresso libero; piccola tariffa per il deposito dei telefoni",
        orari: "Di solito dalle 5 a metà giornata (verso le 12.30) e dalle 16 alle 21.30; orari diversi nei giorni di festa.",
        lat: 9.91954,
        lng: 78.11883,
        consiglio: "Tornarci due volte, al mattino per l'architettura e la sera per le cerimonie.",
      },
      {
        nome: "Palazzo Thirumalai Nayak",
        testo: "Il palazzo del re Thirumalai Nayak, finito intorno al 1636, con un cortile circondato da enormi colonne bianche alte circa 25 metri e grandi archi. Oggi ne resta circa un quarto, ma basta a dare la misura.",
        come: "A circa 2 chilometri a sud-est del tempio, a piedi o in tuk-tuk.",
        quando: "Mattina o tardo pomeriggio. La sera c'è uno spettacolo di luci e suoni, in tamil e in inglese, sulla storia del Silappathikaram.",
        tempo: "1 ora",
        costo: "biglietto modesto, con supplemento per la fotocamera: tariffa alla biglietteria",
        orari: "Di solito 9-17 con una breve pausa verso le 13; spettacolo di luci e suoni la sera, in inglese verso le 18.45.",
        lat: 9.9148,
        lng: 78.1243,
        consiglio: "Si abbina bene alla mattina, prima di tornare al tempio per la sera.",
      },
      {
        nome: "Il mercato dei fiori di Mattuthavani",
        testo: "Il mercato all'ingrosso dei fiori: montagne di gelsomino, calendule e rose vendute a peso per i templi, i matrimoni e le trecce delle donne.",
        come: "Vicino alla stazione dei bus di Mattuthavani, in tuk-tuk.",
        quando: "All'alba, quando arrivano i carichi.",
        tempo: "1 ora",
        costo: "gratuito",
        orari: "Tutti i giorni, al meglio prima delle 8.",
        lat: 9.94411,
        lng: 78.1561,
        consiglio: "Andarci presto: a metà mattina la parte più bella è finita.",
      },
      {
        nome: "Gandhi Memorial Museum",
        testo: "Un museo sulla lotta per l'indipendenza nell'antico palazzo della regina Rani Mangammal, con il telo macchiato di sangue che Gandhi indossava il giorno in cui fu ucciso (secondo alcuni una replica).",
        come: "In tuk-tuk, vicino al Collector Office.",
        quando: "Di giorno; orari sul sito del museo (gandhimmm.org).",
        tempo: "1 ora",
        lat: 9.92988,
        lng: 78.13861,
        consiglio: "Una pausa tranquilla tra le due visite al tempio.",
      },
      {
        nome: "La sala delle mille colonne",
        testo: "Dentro il recinto del Meenakshi, la grande sala del Cinquecento con 985 colonne scolpite di divinità, guerrieri e animali, oggi museo del tempio con bronzi, avori e dipinti. Le colonne sono allineate in modo che da ogni punto si vedano file perfette.",
        come: "Dall'interno del tempio, con un piccolo biglietto separato.",
        quando: "Al mattino, insieme alla prima visita al tempio.",
        tempo: "45 minuti",
        consiglio: "Cercare le colonne musicali vicino all'uscita: battute, danno note diverse.",
      },
      {
        nome: "Puthu Mandapam e i sarti",
        testo: "Il padiglione del Seicento davanti alla porta est del Meenakshi, con colonne scolpite di re e divinità. Per secoli ha ospitato sarti e bancarelle di stoffe e ottoni; con i restauri degli ultimi anni molte botteghe si sono spostate nelle strade intorno al tempio, dove si porta la stoffa e il vestito si ritira in giornata.",
        come: "Di fronte all'ingresso est del tempio, a piedi.",
        quando: "Al mattino, per ritirare il vestito la sera.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 9.92012,
        lng: 78.1212,
        consiglio: "Concordare prezzo e ora di ritiro per iscritto, e portare un vestito da copiare.",
      },
      {
        nome: "Vandiyur Mariamman Teppakulam",
        testo: "Una vasca templare enorme, quasi quadrata, con un padiglione su un'isola al centro, costruita nel Seicento dai Nayak. Durante il Float Festival di gennaio-febbraio le statue di Meenakshi e Sundareswarar vengono portate sull'acqua su zattere illuminate.",
        come: "A circa 5 km a est del tempio, in tuk-tuk.",
        quando: "Al tramonto; per il Float Festival, in genere tra gennaio e febbraio, con il plenilunio di Thai.",
        tempo: "45 minuti",
        costo: "gratuito",
        lat: 9.91034,
        lng: 78.14799,
      },
      {
        nome: "Tempio di Koodal Azhagar",
        testo: "Un tempio di Vishnu più antico del Meenakshi, tra i 108 santuari sacri ai vaishnaviti, con un vimana a tre piani e le immagini del dio in piedi, seduto e disteso, una sopra l'altra. È tranquillo e poco frequentato dai turisti.",
        come: "A 1 km a ovest del Meenakshi, a piedi o in tuk-tuk. Scarpe al deposito.",
        quando: "Mattina presto o sera, con la puja.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        lat: 9.9144,
        lng: 78.11411,
      },
      {
        nome: "Thirupparankundram",
        testo: "Il primo dei sei santuari di Murugan, scavato in parte nella roccia di una collina a sud della città. Dentro, le celle sono tagliate nella pietra viva; in cima alla collina c'è anche una dargah musulmana.",
        come: "A circa 8 km a sud-ovest del centro, in tuk-tuk, taxi o bus.",
        quando: "Al mattino; il venerdì e nelle feste di Murugan è affollatissimo.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        lat: 9.8798,
        lng: 78.0711,
      },
      {
        nome: "Samanar Hills",
        testo: "Una collina rocciosa a ovest della città con letti di pietra dei monaci jainisti, iscrizioni in tamil-brahmi di oltre duemila anni fa e bassorilievi del IX secolo. Dalla cima si vedono le risaie e la città.",
        come: "A circa 12 km dal centro, a Keezhakuyilkudi, in auto o tuk-tuk; breve salita sulla roccia.",
        quando: "All'alba o al tramonto: di giorno la roccia scotta.",
        tempo: "1-2 ore",
        costo: "gratuito",
        lat: 9.92425,
        lng: 78.04467,
        consiglio: "Non è un luogo sorvegliato: andarci in compagnia e con acqua.",
      },
      {
        nome: "Moschea Kazimar",
        testo: "La moschea più antica di Madurai, fondata secondo la tradizione nel Duecento da discendenti del Profeta arrivati dall'Oman. Si trova nel quartiere musulmano a sud-ovest del Meenakshi, tra botteghe e vicoli.",
        come: "A piedi dal tempio, 15 minuti. Vestiti lunghi; le donne di solito non entrano nella sala di preghiera.",
        quando: "Fuori dagli orari di preghiera.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 9.91274,
        lng: 78.11425,
      },
      {
        nome: "Alagar Kovil e Pazhamudircholai",
        testo: "Il grande tempio di Vishnu ai piedi dei monti Alagar, a nord della città, con un gopuram imponente in mezzo alla foresta. Una strada sale fino a Pazhamudircholai, un altro dei sei santuari di Murugan, e a una sorgente sacra.",
        come: "A circa 20 km a nord-est del centro, in taxi o autobus.",
        quando: "Al mattino. In aprile-maggio il Chithirai Festival porta l'immagine di Alagar fino al fiume Vaigai.",
        tempo: "mezza giornata",
        costo: "ingresso libero",
        lat: 10.07485,
        lng: 78.2131,
        consiglio: "Attenzione alle scimmie sulla strada per la sorgente: niente cibo in mano.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mercato dei fiori di Mattuthavani all'alba",
          "Tempio di Meenakshi e sala delle mille colonne al mattino",
          "Puthu Mandapam e i sarti",
          "Palazzo Thirumalai Nayak nel primo pomeriggio",
          "Jigarthanda e ritorno al tempio per la cerimonia della sera",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: il giorno sopra",
          "Giorno 2: Gandhi Memorial Museum al mattino",
          "Koodal Azhagar e la moschea Kazimar",
          "Thirupparankundram nel pomeriggio",
          "Teppakulam al tramonto, cena con kari dosa",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: Samanar Hills all'alba",
          "Alagar Kovil e Pazhamudircholai",
          "Oppure gita a Chettinad per le dimore dei mercanti",
        ],
      },
    ],
    zone: [
      {
        nome: "Intorno al tempio",
        perChi: "chi vuole il Meenakshi a piedi",
        testo: "Hotel semplici e di fascia media nelle strade intorno al tempio, alcuni con terrazza sulle torri. Rumoroso, ma comodissimo per le visite all'alba e la sera.",
        fascia: "20-60 €",
      },
      {
        nome: "Colline intorno alla città",
        perChi: "calma e piscina",
        testo: "Hotel heritage e resort sulle alture a 5-10 chilometri, con vista sulla città. Serve un'auto per ogni spostamento.",
        fascia: "70-180 €",
      },
      {
        nome: "Tallakulam e KK Nagar",
        perChi: "hotel moderni e business",
        testo: "I quartieri a nord del fiume Vaigai, con hotel di catena, ristoranti e uffici. Più ordinati del centro, a 15-20 minuti di tuk-tuk dal tempio.",
        fascia: "40-90 €",
      },
    ],
    sapori: [
      {
        nome: "Jigarthanda",
        testo: "La bibita fredda di Madurai: latte, gomma di mandorla, sciroppo e gelato. Nei chioschi storici intorno al tempio."
      },
      {
        nome: "Parotta con salna",
        testo: "Pane sfogliato e fritto sulla piastra, servito con un curry leggero di montone o pollo. Nei ristoranti aperti fino a tardi."
      },
      {
        nome: "Kari dosa",
        testo: "Una dosa spessa con sopra carne di montone macinata e uovo, la specialità notturna di Madurai."
      },
      {
        nome: "Idli",
        testo: "Tortini di riso al vapore, morbidissimi, con diversi chutney: a Madurai si mangiano a colazione e a cena."
      }
    ],
    attenzioni: [
      "Al Meenakshi foto e video sono vietati e il telefono va al deposito o resta spento: dal settembre 2026 le regole nei grandi templi del Tamil Nadu sono cambiate più volte.",
      "Chi vi invita a salire su una terrazza «per vedere il tempio dall'alto» spesso vi porta in un negozio di tessuti.",
      "A metà giornata il tempio di solito chiude per qualche ora: programmate le visite al mattino e alla sera.",
      "Da marzo il caldo è molto forte: acqua e cappello.",
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Madurai?",
        risposta: "Uno pieno basta per il Meenakshi, visitato la mattina e la sera, e per il palazzo Thirumalai Nayak. Con due si aggiungono i templi minori, il Teppakulam e il cibo di strada.",
      },
      {
        domanda: "A che ora è aperto il tempio di Meenakshi?",
        risposta: "Di solito dalle 5 a metà giornata e dalle 16 alle 21.30, con orari diversi nelle feste. Conviene andarci al mattino presto e tornare la sera per la processione.",
      },
      {
        domanda: "I non induisti possono entrare nel Meenakshi?",
        risposta: "Sì nel tempio, nei corridoi e nella sala delle mille colonne; i due santuari principali sono riservati agli induisti.",
      },
      {
        domanda: "Si possono portare telefoni e macchine fotografiche?",
        risposta: "Foto e video all'interno sono vietati. Dall'autunno 2026 il telefono si può tenere spento oppure lasciare al deposito per pochi rupie; le regole sono cambiate più volte, meglio chiedere all'ingresso.",
      },
      {
        domanda: "Come vestirsi per visitare i templi di Madurai?",
        risposta: "Spalle e ginocchia coperte per tutti, niente pantaloncini; le scarpe si lasciano al deposito fuori dal tempio.",
      },
      {
        domanda: "Quando c'è il Chithirai Festival?",
        risposta: "Ad aprile-maggio, per circa due settimane, con il matrimonio celeste di Meenakshi e l'arrivo di Alagar al fiume Vaigai. La città si riempie di pellegrini: prenotare l'alloggio presto.",
      },
    ],
    gite: [
      {
        nome: "Chettinad e Karaikudi",
        distanza: "circa 90 km, 2 ore in auto",
        come: "In auto con autista, meglio con una notte in una dimora storica.",
        testo: "I villaggi dei mercanti Chettiar, con palazzi enormi di inizio Novecento, cortili di teak birmano e pavimenti di Athangudi. È anche la patria della cucina più piccante del Tamil Nadu.",
      },
      {
        nome: "Kodaikanal",
        distanza: "circa 120 km, 3-4 ore in auto",
        come: "In auto per la strada dei Ghati, o bus da Madurai.",
        testo: "La stazione di montagna a oltre 2.000 metri, con un lago, boschi e belvedere sulle pianure. Fresca tutto l'anno, conviene dormirci.",
      },
      {
        nome: "Rameswaram",
        distanza: "circa 170 km, 3-4 ore in auto o treno",
        come: "In treno o in auto, attraversando il ponte di Pamban sul mare.",
        testo: "L'isola santa del tempio di Ramanathaswamy, con il corridoio colonnato più lungo dell'India, e la punta di Dhanushkodi verso lo Sri Lanka.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Una delle torri dipinte del tempio di Meenakshi a Madurai, coperta di statue colorate',
    immagine: '/images/viaggi/india-sud-taj-mahal/giorno-05-madurai.jpg',
  },
  {
    slug: 'munnar',
    paeseSlug: 'india',
    ordine: 13,
    nome: 'Munnar',
    tipologia: ['montagna', 'piantagioni di tè', 'natura'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nel giro dell'India del Sud, salendo da Madurai: due notti tra le piantagioni di tè, con una giornata per le colline e il parco di Eravikulam.",
    introduzione:
      'Una stazione di montagna a circa 1.600 metri sui Ghati Occidentali del Kerala, circondata da piantagioni di tè che coprono le colline a perdita d\'occhio.',
    percheAndarci:
      'Per il fresco dopo le pianure, le passeggiate tra il tè, il tahr dei Nilgiri a Eravikulam e le albe sopra le nuvole a Kolukkumalai.',
    cosaVedere: [
      'Il Parco nazionale di Eravikulam e il tahr dei Nilgiri',
      'Il museo del tè di Tata (KDHP)',
      'Le piantagioni di Kolukkumalai all\'alba',
      'I belvedere di Top Station e le dighe di Mattupetty',
    ],
    cosaFare: ['Un trekking guidato tra le piantagioni', 'L\'alba a Kolukkumalai in jeep', 'Comprare tè direttamente alle fabbriche'],
    doveDormire: 'Homestay e resort fuori dal paese, tra le piantagioni.',
    doveMangiare: 'Cucina keralese nei homestay, spesso la migliore della zona.',
    comeArrivare:
      "Munnar non ha né aeroporto né stazione. Dall'aeroporto di Kochi sono circa 110 km, 3,5-4 ore d'auto con autista o taxi; da Ernakulam ci sono anche autobus statali KSRTC, più lenti. Da Madurai si attraversano i Ghati in 5-6 ore, da Alleppey sono 4-5 ore. L'ultimo tratto è una strada di montagna con tornanti: meglio viaggiare di giorno.",
    comeSpostarsi: 'Auto con autista e jeep locali.',
    periodoMigliore: "settembre-maggio; giugno e luglio sono i mesi più piovosi, e con il monsone ci sono frane e strade chiuse.",
    costi:
      "Eravikulam 500 rupie per gli stranieri più 50 per la macchina fotografica (2026); jeep per Kolukkumalai a prezzo da concordare. Budget al giorno a persona in doppia: 25-40 € con homestay e cucina di casa, 60-100 € in resort tra le piantagioni con autista, da 180 € nei resort con vista e spa.",
    erroriDaEvitare: ['Arrivare a febbraio-marzo contando su Eravikulam, chiuso per le nascite', 'Dormire nel paese, trafficato e rumoroso'],
    luoghi: [
      {
        nome: "Parco nazionale di Eravikulam",
        testo: "Praterie d'altura e foresta intorno ai 2.000 metri, dove vive la più grande popolazione di tahr dei Nilgiri, una capra di montagna che esiste solo sui Nilgiri e nella parte sud dei Ghati Occidentali. Nel parco c'è anche l'Anamudi, 2.695 metri, la vetta più alta dell'India del Sud.",
        come: "A 13 chilometri da Munnar. Dentro il parco si cammina su strade e sentieri della zona turistica di Rajamala. Biglietti online sul sito ufficiale o allo sportello del centro informazioni di Munnar.",
        quando: "Ingressi dalle 8 alle 14 (sito ufficiale, 2026). Chiuso ogni anno per le nascite dei tahr, tra febbraio e marzo, a volte fino ai primi di aprile: il sito stesso dà date diverse, quindi controllare prima di partire. Meglio all'apertura, prima delle nuvole e della coda.",
        tempo: "mezza giornata",
        costo: "500 rupie per gli stranieri, più 50 per la macchina fotografica (2026)",
        orari: "Ingressi dalle 8 alle 14 (sito ufficiale, 2026); chiuso ogni anno per le nascite dei tahr, tra febbraio e marzo o fino ai primi di aprile.",
        url: "https://www.eravikulamnationalpark.in/",
        lat: 10.22751,
        lng: 77.07432,
        consiglio: "Prenotare online nei fine settimana e nei festivi indiani: i posti finiscono.",
      },
      {
        nome: "Museo del tè di KDHP",
        testo: "Il museo del tè di Tata nella tenuta di Nallathanni, con le macchine storiche e una piccola lavorazione dimostrativa delle foglie.",
        come: "A 2 chilometri dal paese, in tuk-tuk.",
        quando: "Di giorno. Diverse fonti lo danno chiuso il lunedì: verificare prima di andare.",
        tempo: "1 ora",
        orari: "Diverse fonti lo danno chiuso il lunedì: verificare prima di andare.",
        lat: 10.09423,
        lng: 77.05065,
        consiglio: "Assaggiare i tè alla fine e comprarli qui, a prezzo di fabbrica.",
      },
      {
        nome: "Kolukkumalai",
        testo: "Una piantagione di tè a circa 2.170 metri, tra le più alte del mondo, sul lato del Tamil Nadu ma raggiungibile solo da Munnar. All'alba le colline escono dalle nuvole.",
        come: "In jeep 4x4 da Suryanelli, su circa 17 chilometri di pista sterrata e ripida. Le jeep si prenotano con l'hotel.",
        quando: "Partenza prima dell'alba, al buio.",
        tempo: "mezza giornata",
        lat: 10.08265,
        lng: 77.22177,
        consiglio: "Fissare con chiarezza cosa comprende il prezzo della jeep: attesa, ingresso alla tenuta e ritorno.",
      },
      {
        nome: "Top Station e la diga di Mattupetty",
        testo: "Un belvedere sul bordo dei Ghati, vicino al confine con il Tamil Nadu, che guarda le pianure dall'alto. Lungo la strada ci sono la diga di Mattupetty, l'Echo Point e piantagioni a perdita d'occhio.",
        come: "In auto da Munnar, con le soste lungo la strada.",
        quando: "Mattina, prima che salga la foschia.",
        tempo: "mezza giornata",
        consiglio: "Nei fine settimana i punti panoramici sono affollati: meglio un giorno feriale.",
      },
      {
        nome: "La diga di Mattupetty",
        testo: "Un bacino tra colline di tè e prati, a circa 1.700 metri, con barche a pedali e motoscafi sul lago. Lungo la strada si incontra l'allevamento sperimentale di bovini dell'Indo-Swiss Project.",
        come: "A circa 13 km da Munnar sulla strada per Top Station, in auto o tuk-tuk.",
        quando: "Al mattino, prima della foschia e delle comitive.",
        tempo: "1 ora",
        lat: 10.1063,
        lng: 77.12391,
      },
      {
        nome: "Echo Point e il lago di Kundala",
        testo: "Echo Point è una riva del bacino di Mattupetty dove la voce rimbalza tra le colline; poco oltre c'è il lago di Kundala, con la diga ad arco e le barche a remi tra eucalipti e piantagioni.",
        come: "Sulla strada da Mattupetty a Top Station, con soste in auto.",
        quando: "Mattina presto, quando l'acqua è ferma.",
        tempo: "1 ora",
        lat: 10.14361,
        lng: 77.1875,
      },
      {
        nome: "La cascata di Lakkam",
        testo: "Una cascata a gradini nella foresta, con una pozza dove ci si può bagnare, lungo la strada per Marayoor. Un sentiero breve porta dalla strada all'acqua.",
        come: "A circa 25 km da Munnar sulla strada per Marayoor, poi pochi minuti a piedi.",
        quando: "Dopo il monsone, da settembre a dicembre, quando ha più acqua.",
        tempo: "1 ora",
        lat: 10.18889,
        lng: 77.11111,
        consiglio: "Si abbina al ritorno da Eravikulam o alla gita a Marayoor.",
      },
      {
        nome: "La cascata di Attukad",
        testo: "Una cascata tra le colline di tè di Pallivasal, alta e scenografica dopo le piogge. Un sentiero tra le piantagioni la raggiunge dalla strada.",
        come: "A circa 9 km da Munnar verso Pallivasal, in auto e poi a piedi.",
        quando: "Tra agosto e novembre, quando l'acqua è abbondante.",
        tempo: "1-2 ore",
        lat: 10.0535,
        lng: 77.05862,
        consiglio: "Rocce scivolose: scarpe con la suola e niente bagno sotto il getto.",
      },
      {
        nome: "La diga di Anayirangal e Chinnakanal",
        testo: "Un lago circondato da piantagioni di tè e foresta, nella zona di Chinnakanal, dove gli elefanti selvatici scendono a bere. Dai belvedere lungo la strada si vede l'acqua chiusa tra le colline.",
        come: "A circa 22 km da Munnar verso est, in auto, sulla strada per Suryanelli.",
        quando: "Mattina o tardo pomeriggio; con la siccità il livello è basso.",
        tempo: "1-2 ore",
        lat: 10.00944,
        lng: 77.2075,
        consiglio: "Gli elefanti della zona sono selvatici: non avvicinarsi e seguire le indicazioni delle guardie forestali.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Eravikulam all'apertura",
          "Museo del tè di KDHP",
          "Pomeriggio: Mattupetty, Echo Point e Kundala",
          "Tramonto a Top Station",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: alba a Kolukkumalai in jeep, rientro e riposo",
          "Pomeriggio: Anayirangal e Chinnakanal",
          "Giorno 2: Eravikulam al mattino, cascata di Lakkam al ritorno",
          "Museo del tè, poi Mattupetty e Top Station",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: trekking guidato tra le piantagioni e la cascata di Attukad",
          "Pomeriggio: gita a Marayoor per il sandalo e i dolmen",
        ],
      },
    ],
    zone: [
      {
        nome: "Tra le piantagioni (Chithirapuram, Pallivasal)",
        perChi: "chi vuole il silenzio",
        testo: "Homestay e resort sulle colline fuori dal paese, con vista sulle piantagioni. Silenzio totale, ma serve l'auto e la cena è dove si dorme.",
        fascia: "40-150 €",
      },
      {
        nome: "Munnar paese",
        perChi: "chi si muove con i mezzi",
        testo: "Hotel economici e ristoranti nel centro, con jeep e tuk-tuk a portata. Trafficato e rumoroso.",
        fascia: "20-50 €",
      },
      {
        nome: "Chinnakanal e Suryanelli",
        perChi: "chi va a Kolukkumalai",
        testo: "Più lontano, verso est, vicino al lago di Anayirangal. Comodo per l'alba in jeep, isolato per il resto.",
        fascia: "50-150 €",
      },
    ],
    sapori: [
      {
        nome: "Cucina dei homestay",
        testo: "Curry di verdure e di pollo, riso e pane fatto in casa: spesso è il pasto migliore della zona."
      },
      {
        nome: "Puttu e kadala",
        testo: "Cilindri di riso e cocco cotti al vapore, con curry di ceci neri. La colazione del Kerala."
      },
      {
        nome: "Appam",
        testo: "Crêpe di riso fermentato, croccanti ai bordi e soffici al centro, con stufato di verdure o pollo."
      },
      {
        nome: "Tè e cardamomo",
        testo: "Tè nero delle colline e cardamomo delle piantagioni vicine, da comprare direttamente nelle fabbriche e nelle cooperative."
      }
    ],
    attenzioni: [
      "Eravikulam chiude ogni anno tra febbraio e marzo, a volte fino ai primi di aprile, per le nascite dei tahr.",
      "Con il monsone, soprattutto a giugno e luglio, piogge forti, frane e strade chiuse; nelle stagioni umide ci sono le sanguisughe sui sentieri.",
      "Le jeep per Kolukkumalai hanno prezzi molto variabili: fatevi dire tutto prima di partire.",
      "Nei fine settimana e nei festivi indiani arrivano molti turisti da Kerala e Tamil Nadu: traffico e code.",
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Munnar?",
        risposta: "Due giorni: uno per Eravikulam e il museo del tè, uno per l'alba a Kolukkumalai e i laghi. Con il terzo si aggiungono un trekking e Marayoor.",
      },
      {
        domanda: "Quando chiude il parco di Eravikulam?",
        risposta: "Ogni anno per la stagione delle nascite dei tahr, tra febbraio e marzo e a volte fino ai primi di aprile. Le date esatte escono sul sito ufficiale del parco.",
      },
      {
        domanda: "Serve prenotare Eravikulam?",
        risposta: "Nei fine settimana e nei festivi indiani sì: i biglietti si comprano online sul sito ufficiale o allo sportello del centro informazioni di Munnar.",
      },
      {
        domanda: "Meglio dormire in paese o tra le piantagioni?",
        risposta: "Tra le piantagioni, in un homestay o resort fuori dal paese: silenzio e vista. In paese conviene solo a chi si muove con i mezzi pubblici.",
      },
      {
        domanda: "Che tempo fa a Munnar?",
        risposta: "Fresco tutto l'anno, con sere fredde tra dicembre e febbraio. Giugno e luglio sono i mesi più piovosi, con frane e strade chiuse.",
      },
      {
        domanda: "Come si va da Munnar alle backwaters?",
        risposta: "In auto con autista fino ad Alleppey o Kumarakom, circa 4-5 ore, oppure con una sosta a Thekkady.",
      },
    ],
    gite: [
      {
        nome: "Marayoor",
        distanza: "circa 40 km, 1,5 ore in auto",
        come: "In auto con autista, passando per Eravikulam e la cascata di Lakkam.",
        testo: "Una valle più asciutta oltre i Ghati, con l'unica foresta naturale di sandalo del Kerala, i dolmen preistorici e le fabbriche di zucchero di canna in pani. Si abbina a Kanthalloor, il villaggio dei frutteti.",
      },
      {
        nome: "Chinnar Wildlife Sanctuary",
        distanza: "circa 60 km, 2 ore in auto",
        come: "In auto oltre Marayoor; trekking e torri d'osservazione con le guardie forestali.",
        testo: "Una foresta secca sul confine con il Tamil Nadu, con lo scoiattolo gigante grigio, elefanti e coccodrilli palustri nel fiume. Un paesaggio opposto a quello delle colline di tè.",
      },
      {
        nome: "Thekkady e Periyar",
        distanza: "circa 90 km, 3 ore in auto",
        come: "In auto con autista per la strada delle piantagioni di cardamomo.",
        testo: "La riserva di Periyar, con il giro in barca sul lago e i trekking nella foresta, e le piantagioni di spezie intorno. Meglio con una notte, sulla strada verso le backwaters.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Le colline di Munnar coperte di piantagioni di tè, con file ordinate di cespugli verdi',
    immagine: '/images/india/munnar.jpg',
  },
  {
    slug: 'backwaters-alleppey',
    paeseSlug: 'india',
    ordine: 14,
    nome: 'Backwaters di Alleppey',
    tipologia: ['lagune', 'natura', 'houseboat'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nel giro dell'India del Sud, scendendo da Munnar: una notte in houseboat sulle backwaters, prima di proseguire per Fort Kochi.",
    introduzione:
      'La rete di canali, lagune e laghi del Kerala che corre parallela al mare tra Alappuzha (Alleppey), Kumarakom e Kollam, con risaie sotto il livello dell\'acqua e villaggi su strisce di terra.',
    percheAndarci:
      'Per una notte su una houseboat di legno e bambù, a guardare la vita dei villaggi dall\'acqua, o per un giro in canoa sui canali più stretti.',
    cosaVedere: ['I canali e le risaie di Kuttanad', 'Il lago Vembanad', 'I villaggi di Kainakary sui canali piccoli'],
    cosaFare: ['Una notte in houseboat (kettuvallam)', 'Un giro in canoa all\'alba sui canali stretti', 'Le gare delle barche-serpente, se si viaggia ad agosto'],
    doveDormire: 'Houseboat, oppure homestay sui canali a Kainakary o Kumarakom.',
    doveMangiare: 'Il karimeen (pearl spot) alla griglia, il curry di pesce e il riso rosso del Kerala, preparati dal cuoco di bordo.',
    comeArrivare:
      "Da Kochi ad Alappuzha sono circa 55 km: 1,5-2 ore d'auto secondo il traffico, oppure un'ora e mezza di treno da Ernakulam. Dall'aeroporto di Kochi servono circa 2-2,5 ore. Da Munnar la strada scende in 4-5 ore. Kumarakom si raggiunge da Kottayam in 30 minuti; il traghetto pubblico collega Kottayam e Alappuzha attraverso il lago in circa 2-2,5 ore.",
    comeSpostarsi: 'In barca.',
    periodoMigliore: 'ottobre-marzo.',
    costi:
      "Houseboat 8.000-25.000 rupie per la barca a notte, pasti di solito compresi; traghetto pubblico circa 29 rupie a tratta; canoa con rematore a prezzo da concordare. Budget al giorno a persona in doppia: 35-50 € con homestay e traghetto, 80-130 € con houseboat privata, da 200 € con houseboat di lusso o resort a Kumarakom.",
    erroriDaEvitare: [
      'Prenotare dai procacciatori sui moli senza vedere la barca',
      'Aspettarsi l\'aria condizionata di giorno: spesso funziona solo di notte',
      'Fermarsi ai soli canali principali, pieni di barche',
    ],
    luoghi: [
      {
        nome: "Una notte in houseboat",
        testo: "Il kettuvallam era la barca da carico che portava riso e spezie da Kuttanad al porto di Kochi; quando arrivarono i camion fu trasformato in casa galleggiante, con camere, cuoco ed equipaggio. Si naviga sul lago Vembanad e nei canali di Kuttanad, guardando villaggi, risaie e chiese dall'acqua.",
        come: "Si parte dai moli di Alappuzha. Meglio barche registrate presso il turismo del Kerala, prenotate al banco prepagato del DTPC o da operatori seri, viste in foto recenti.",
        quando: "Da ottobre a marzo. Imbarco a metà giornata, sbarco la mattina dopo; la sera la barca attracca.",
        tempo: "una notte",
        costo: "molto variabile secondo barca e stagione, pasti di solito compresi: chiedere il preventivo scritto",
        url: "https://www.keralatourism.org/houseboat/",
        lat: 9.50003,
        lng: 76.35491,
        consiglio: "Chiedere un itinerario che lasci i canali principali, dove le barche sono in fila.",
      },
      {
        nome: "In canoa sui canali stretti",
        testo: "Le canoe a remi entrano nei canali dove le houseboat non passano: si vedono da vicino le case, le donne che lavano, i bambini che vanno a scuola in barca.",
        come: "Con homestay e piccoli operatori di Kainakary e Alappuzha, con un rematore.",
        quando: "All'alba, quando i canali sono calmi e pieni di uccelli.",
        tempo: "2-3 ore",
        lat: 9.46667,
        lng: 76.38333,
        consiglio: "Se si ha un solo giorno, la canoa all'alba dà più della houseboat.",
      },
      {
        nome: "Le gare delle barche-serpente",
        testo: "Barche lunghe oltre 30 metri con decine di rematori che cantano in coro. La più famosa è la Nehru Trophy, sul lago Punnamada, su un percorso di circa 1,4 chilometri.",
        come: "Tribune a pagamento sul lago Punnamada ad Alappuzha; informazioni sul sito ufficiale della gara.",
        quando: "La Nehru Trophy si corre di solito ad agosto, durante il monsone (per tradizione il secondo sabato del mese, ma la data cambia: nel 2024 fu rinviata a settembre, nel 2026 si è corsa il 22 agosto).",
        tempo: "una giornata",
        url: "https://nehrutrophy.nic.in/",
        lat: 9.50003,
        lng: 76.35491,
        consiglio: "Per chi viaggia ad agosto vale il viaggio da sola.",
      },
      {
        nome: "Il traghetto pubblico Alappuzha-Kottayam",
        testo: "Il battello del servizio statale (SWTD) che collega Alappuzha e Kottayam attraverso il lago Vembanad e i canali di Kuttanad. È lo stesso paesaggio delle houseboat, con i pendolari e gli scolari a bordo, a una frazione del prezzo.",
        come: "Dal molo dei traghetti di Alappuzha, vicino alla stazione dei bus; biglietto a bordo o allo sportello.",
        quando: "Le corse partono dal mattino al pomeriggio: controllare gli orari al molo il giorno prima.",
        tempo: "circa 2-2,5 ore a tratta",
        costo: "circa 29 rupie a tratta (meno di 1 €, dicembre 2025)",
        consiglio: "Sedersi a prua sul lato ombreggiato e tenere qualcosa per la pioggia: i finestrini non si chiudono.",
      },
      {
        nome: "La spiaggia e il molo di Alappuzha",
        testo: "Una lunga spiaggia di sabbia con i resti del vecchio molo del porto, del 1862, e un faro che si può salire. È il posto dove la gente di Alappuzha passeggia al tramonto.",
        come: "A 2 km dal centro, in tuk-tuk o bici.",
        quando: "Al tramonto.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 9.49299,
        lng: 76.3177,
        consiglio: "Correnti forti: il bagno è sconsigliato.",
      },
      {
        nome: "La spiaggia di Marari",
        testo: "Una spiaggia lunga e quieta tra palme e villaggi di pescatori, a nord di Alappuzha, con homestay e resort a pochi passi dal mare. È il contrappunto marino delle backwaters.",
        come: "A circa 15 km a nord di Alappuzha, in tuk-tuk o taxi.",
        quando: "Da novembre a marzo, quando il mare è più calmo; all'alba si vedono i pescatori tirare le reti.",
        tempo: "mezza giornata",
        costo: "gratuito",
        lat: 9.6008,
        lng: 76.2983,
        consiglio: "Con il mare mosso fare il bagno solo dove lo fanno i locali, vicino alla riva.",
      },
      {
        nome: "Il santuario degli uccelli di Kumarakom",
        testo: "Una riserva sulla sponda est del lago Vembanad, con mangrovie e un sentiero tra gli alberi dove nidificano aironi, cormorani, garzette e martin pescatori, e d'inverno gli uccelli migratori.",
        come: "A Kumarakom, a circa 15 km da Kottayam; dalla parte di Alappuzha si attraversa il lago in barca o si va in auto, circa 1 ora.",
        quando: "All'alba, da novembre a febbraio per i migratori.",
        tempo: "2 ore",
        lat: 9.5,
        lng: 76.52,
        consiglio: "Portare un binocolo e repellente: il sentiero è all'ombra ma pieno di zanzare.",
      },
      {
        nome: "Pathiramanal",
        testo: "Una piccola isola boscosa in mezzo al lago Vembanad, senza abitanti, dove si fermano molte specie di uccelli. Il nome significa «sabbia di mezzanotte».",
        come: "In barca da Muhamma, sulla riva ovest, o come sosta di un giro in houseboat o motoscafo.",
        quando: "Al mattino presto, per gli uccelli.",
        tempo: "1-2 ore con la traversata",
        lat: 9.61873,
        lng: 76.38521,
      },
      {
        nome: "Champakulam e la basilica di Santa Maria",
        testo: "Un villaggio sul fiume Pamba nel cuore di Kuttanad, con una delle chiese più antiche del Kerala, rifondata più volte e oggi basilica. A luglio qui si corre una delle gare di barche-serpente più antiche.",
        come: "A circa 15 km da Alappuzha, in barca lungo i canali o in auto.",
        quando: "Al mattino; a luglio per la regata di Champakulam Moolam.",
        tempo: "1 ora",
        costo: "ingresso libero",
        lat: 9.40917,
        lng: 76.41111,
      },
      {
        nome: "Tempio di Ambalappuzha",
        testo: "Il tempio di Krishna famoso per il pal payasam, il budino di riso e latte offerto al dio e distribuito ai fedeli. L'architettura è quella tipica del Kerala, con tetti di legno e lampade di ottone.",
        come: "A circa 14 km a sud di Alappuzha, in auto o bus. I non induisti di solito non entrano nel santuario; uomini senza camicia all'interno.",
        quando: "Mattina presto o sera, con le lampade accese.",
        tempo: "45 minuti",
        costo: "ingresso libero",
        lat: 9.3836,
        lng: 76.3695,
      },
      {
        nome: "Palazzo di Krishnapuram",
        testo: "Un palazzo del Settecento in stile keralese a Kayamkulam, oggi museo, che conserva il Gajendra Moksham, una delle pitture murali più grandi del Kerala, oltre a sculture e bronzi.",
        come: "A circa 47 km a sud di Alappuzha, in auto, sulla strada verso Kollam.",
        quando: "Di giorno, sulla strada tra le backwaters e il sud.",
        tempo: "1 ora",
        lat: 9.15,
        lng: 76.50861,
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Canoa all'alba sui canali di Kainakary",
          "Pranzo con karimeen e riso rosso",
          "Traghetto pubblico sul lago Vembanad, oppure un giro in barca di qualche ora",
          "Tramonto sulla spiaggia di Alappuzha",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: imbarco in houseboat a mezzogiorno, navigazione e notte a bordo",
          "Giorno 2: sbarco al mattino",
          "Canoa sui canali piccoli e Champakulam",
          "Pomeriggio alla spiaggia di Marari",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: santuario degli uccelli di Kumarakom all'alba",
          "Pathiramanal in barca",
          "Partenza per Fort Kochi nel pomeriggio",
        ],
      },
    ],
    zone: [
      {
        nome: "Houseboat",
        perChi: "una notte",
        testo: "La notte a bordo è il motivo del viaggio. Cabine piccole e aria condizionata spesso solo di notte.",
        fascia: "80-250 € a barca, pasti compresi",
      },
      {
        nome: "Kainakary e Kuttanad",
        perChi: "chi vuole i villaggi",
        testo: "Homestay sui canali, raggiungibili in barca. Silenzio, cucina di casa e canoa all'alba, ma lontani da tutto.",
        fascia: "30-80 €",
      },
      {
        nome: "Kumarakom",
        perChi: "resort con piscina",
        testo: "Sulla sponda est del lago Vembanad, con resort di fascia alta. Comodo e curato, meno vita di villaggio.",
        fascia: "100-300 €",
      },
      {
        nome: "Spiaggia di Marari",
        perChi: "mare e backwaters",
        testo: "A nord di Alappuzha, homestay e resort sulla spiaggia. Buona per alternare canali e mare.",
        fascia: "50-200 €",
      },
    ],
    sapori: [
      {
        nome: "Karimeen pollichathu",
        testo: "Il pearl spot, pesce delle lagune, marinato nelle spezie e cotto in una foglia di banano. A bordo e nelle trattorie sui canali."
      },
      {
        nome: "Curry di pesce con riso rosso",
        testo: "Pesce in salsa rossa al tamarindo kudampuli con il riso rosso del Kuttanad, coltivato sotto il livello dell'acqua."
      },
      {
        nome: "Cibo delle toddy shop",
        testo: "Le osterie del vino di palma (kallu shappu) servono pesce piccante, tapioca e anatra. Ambiente molto locale."
      },
      {
        nome: "Curry di anatra",
        testo: "Le anatre allevate nelle risaie finiscono in uno stufato al cocco e pepe, un piatto delle backwaters."
      }
    ],
    attenzioni: [
      "I procacciatori sui moli: prenotate vedendo la barca o foto recenti, meglio al banco prepagato del DTPC ad Alappuzha o con barche registrate presso il turismo del Kerala.",
      "L'aria condizionata in cabina spesso funziona solo di notte: chiedetelo prima.",
      "I canali principali sono pieni di houseboat in fila: chiedete percorsi secondari.",
      "Zanzare la sera: repellente e maniche lunghe.",
    ],
    faq: [
      {
        domanda: "Meglio houseboat o canoa?",
        risposta: "La houseboat per la notte sull'acqua, la canoa per i canali stretti dove le barche grandi non passano. Con un solo giorno, la canoa all'alba dà di più.",
      },
      {
        domanda: "Quanto costa una notte in houseboat?",
        risposta: "Indicativamente 8.000-25.000 rupie per la barca, secondo cabine, categoria e stagione, di solito con i pasti compresi. Si chiede un preventivo scritto che dica cosa include.",
      },
      {
        domanda: "Alleppey o Kumarakom?",
        risposta: "Alleppey ha più scelta di barche e più traffico sui canali principali; Kumarakom ha resort più curati e un ritmo più lento, con il santuario degli uccelli vicino.",
      },
      {
        domanda: "Si possono vedere le backwaters senza houseboat?",
        risposta: "Sì: con il traghetto pubblico Alappuzha-Kottayam, a pochi rupie, o con una canoa o uno shikara per qualche ora.",
      },
      {
        domanda: "Quando si corre la Nehru Trophy?",
        risposta: "Di solito ad agosto sul lago Punnamada, ma la data cambia ogni anno: nel 2026 si è corsa il 22 agosto. Il calendario esce sul sito ufficiale della gara.",
      },
      {
        domanda: "Qual è il periodo migliore per le backwaters?",
        risposta: "Da ottobre a marzo, con cielo sereno e meno umidità. Con il monsone si naviga lo stesso, ma piove molto e la visibilità cala.",
      },
    ],
    gite: [
      {
        nome: "Fort Kochi",
        distanza: "circa 55 km, 1,5-2 ore in auto",
        come: "In auto con autista o in treno fino a Ernakulam e poi traghetto.",
        testo: "Il porto delle spezie con le reti cinesi, Mattancherry e il kathakali: merita almeno una notte, ma si vede anche in giornata.",
      },
      {
        nome: "Le backwaters di Kollam e Munroe Island",
        distanza: "circa 85 km, 2 ore in auto",
        come: "In auto fino a Munroe Island, oppure in barca lungo i canali da Alappuzha a Kollam (circa 8 ore).",
        testo: "Canali stretti, villaggi di pescatori e lavorazione delle fibre di cocco, con molte meno houseboat che ad Alleppey. Il giro in canoa di Munroe Island è tra i più tranquilli del Kerala.",
      },
      {
        nome: "Krishnapuram e Kayamkulam",
        distanza: "circa 47 km, 1 ora e mezza in auto",
        come: "In auto lungo la statale verso sud.",
        testo: "Il palazzo-museo con il grande affresco del Gajendra Moksham, da abbinare a Ambalappuzha sulla strada.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Una houseboat di legno e bambù su un canale delle backwaters del Kerala tra le palme da cocco',
    immagine: '/images/viaggi/india-sud-taj-mahal/giorno-09-backwaters-alleppey.jpg',
  },
  {
    slug: 'fort-kochi',
    paeseSlug: 'india',
    ordine: 15,
    nome: 'Fort Kochi',
    tipologia: ['città coloniale', 'cultura', 'mare'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Ci sono stato nel giro dell'India del Sud, arrivando dalle backwaters: due notti tra Fort Kochi e Mattancherry, prima del volo per Bangalore.",
    introduzione:
      'Il quartiere storico di Kochi, porto delle spezie per secoli, segnato da portoghesi, olandesi e inglesi, con le reti da pesca cinesi sul lungomare e il quartiere ebraico di Mattancherry.',
    percheAndarci:
      'Per la città più cosmopolita del Kerala, da girare a piedi tra chiese, sinagoghe, magazzini di spezie e gallerie d\'arte, con il kathakali la sera.',
    cosaVedere: [
      'Le reti da pesca cinesi',
      'La chiesa di San Francesco',
      'Il Palazzo olandese di Mattancherry con gli affreschi del Ramayana',
      'La sinagoga Paradesi e Jew Town',
      'I magazzini delle spezie',
    ],
    cosaFare: ['Uno spettacolo di kathakali', 'Un corso di cucina keralese', 'Comprare il pesce al mercato vicino alle reti e farlo cucinare'],
    doveDormire: 'Homestay a gestione familiare e hotel heritage nei bungalow coloniali.',
    doveMangiare: 'Appam con stufato, fish moilee, karimeen alla griglia, caffè nelle gallerie.',
    comeArrivare:
      "Dall'aeroporto internazionale di Kochi (COK), a circa 40 km, si arriva in taxi prepagato o con Uber in 1-1,5 ore secondo il traffico. Dalla stazione di Ernakulam Junction sono circa 12 km: 30-45 minuti in taxi, oppure tuk-tuk fino al molo e traghetto o Water Metro per Fort Kochi. Da Alleppey 1-2 ore d'auto, da Munnar circa 4 ore.",
    comeSpostarsi: 'A piedi e in bici, traghetto per Ernakulam.',
    periodoMigliore: "ottobre-marzo; la Biennale di Kochi, ogni due anni circa, apre a dicembre e dura circa tre mesi (l'ultima: 12 dicembre 2025-31 marzo 2026).",
    costi:
      "Kathakali circa 500-600 rupie (circa 5-6 €), chiese e tempio jainista gratuiti, sinagoga e palazzo con biglietti modesti alla biglietteria. Budget al giorno a persona in doppia: 35-50 € con homestay e cibo locale, 80-130 € in hotel heritage con qualche cena di pesce, da 200 € nei bungalow coloniali di lusso.",
    erroriDaEvitare: [
      "Arrivare a Mattancherry di venerdì: la sinagoga è chiusa e anche il palazzo, secondo la maggior parte delle fonti",
      "Comprare spezie e «antichità» senza trattare",
    ],
    luoghi: [
      {
        nome: "Le reti da pesca cinesi",
        testo: "Grandi reti a bilanciere alte almeno 10 metri, manovrate da squadre di fino a sei pescatori con contrappesi di pietra appesi alle corde. Sono il simbolo di Fort Kochi, sul lungomare.",
        come: "A piedi sul lungomare di Vasco da Gama Square.",
        quando: "Il tardo pomeriggio e il tramonto, quando le reti lavorano contro il sole.",
        tempo: "45 minuti",
        costo: "gratuito",
        orari: "Sempre accessibili; le reti lavorano soprattutto con l'alta marea, di mattina presto e al tramonto.",
        lat: 9.96819,
        lng: 76.24217,
        consiglio: "Al mercato del pesce accanto si compra il pescato e lo cucinano i ristoranti lì dietro.",
      },
      {
        nome: "Chiesa di San Francesco",
        testo: "Una delle chiese europee più antiche dell'India: nata nel 1503 come chiesa portoghese di legno, ricostruita in muratura nei primi decenni del Cinquecento. Qui fu sepolto Vasco da Gama, morto a Kochi nel 1524; quattordici anni dopo i resti furono riportati a Lisbona.",
        come: "Nel centro di Fort Kochi, a piedi. Si entra in silenzio, vestiti coperti.",
        quando: "Di giorno, fuori dagli orari delle funzioni.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 9.96595,
        lng: 76.24107,
        consiglio: "Cercare sul pavimento il punto della prima sepoltura di Vasco da Gama.",
      },
      {
        nome: "Palazzo di Mattancherry",
        testo: "Il palazzo che i portoghesi regalarono al re di Kochi verso il 1545, detto anche «Palazzo olandese» perché dal 1663 Mattancherry passò agli olandesi. Dentro ci sono le pitture murali del Ramayana, tra i capolavori della pittura murale del Kerala.",
        come: "A Mattancherry, a pochi chilometri dal centro di Fort Kochi, in tuk-tuk o bici.",
        quando: "Quasi tutte le fonti lo danno chiuso il venerdì, alcune anche il sabato; orari con pausa a metà giornata. Verificare sul sito dell'ASI prima di andare.",
        tempo: "1 ora",
        orari: "Chiuso il venerdì; di solito aperto dalle 10 alle 17 circa con pausa a pranzo (controllare all'ingresso).",
        lat: 9.95835,
        lng: 76.25918,
        consiglio: "Le sale degli affreschi sono buie: lasciare agli occhi il tempo di abituarsi.",
      },
      {
        nome: "La sinagoga Paradesi e Jew Town",
        testo: "La sinagoga del 1568, ancora in uso, con il pavimento di centinaia di piastrelle cinesi di porcellana del Settecento, dipinte a mano e tutte diverse, e lampadari di vetro belga. Intorno, Jew Town è una via di antiquari e negozi di spezie.",
        come: "Accanto al palazzo di Mattancherry, a piedi. Si entra scalzi; uomini con camicia e pantaloni lunghi, donne con gonna sotto il ginocchio.",
        quando: "Aperta la mattina e il tardo pomeriggio, con una lunga pausa; chiusa il venerdì, il sabato e nelle feste ebraiche. Controllare gli orari prima di andare.",
        tempo: "30 minuti",
        orari: "10-12 e 15-17; chiusa il venerdì, il sabato e nelle feste ebraiche (Kerala Tourism).",
        url: "https://www.keralatourism.org/kochi/paradeso-synagogue-mattancherry.php",
        lat: 9.95748,
        lng: 76.2593,
        consiglio: "Palazzo e sinagoga si vedono insieme in una mattina, mai di venerdì né di sabato.",
      },
      {
        nome: "I magazzini delle spezie",
        testo: "Lungo Bazaar Road e Jew Town ci sono i vecchi magazzini del pepe e dello zenzero, alcuni ancora attivi, altri diventati gallerie e caffè.",
        come: "A piedi o in bici da Mattancherry verso Fort Kochi.",
        quando: "Mattina, quando si lavora.",
        tempo: "1 ora",
        lat: 9.96101,
        lng: 76.25892,
        consiglio: "Per comprare spezie confrontare i prezzi in più negozi: la differenza è grande.",
      },
      {
        nome: "Uno spettacolo di kathakali",
        testo: "Il teatro danzato del Kerala, con trucchi elaborati, gonne ampie e storie dei poemi epici raccontate con gesti e occhi. Nei teatri di Fort Kochi si assiste anche al trucco, prima dello spettacolo.",
        come: "Nei centri culturali di Fort Kochi, con biglietto da prenotare in giornata o il giorno prima.",
        quando: "La sera; in molti teatri il trucco degli attori comincia prima dello spettacolo e si può guardare. Orari al teatro.",
        tempo: "circa 2 ore con il trucco",
        costo: "circa 500-600 rupie (circa 5-6 €, 2026)",
        orari: "Ogni sera; il trucco comincia prima dello spettacolo.",
        lat: 9.96389,
        lng: 76.24281,
        consiglio: "Arrivare per il trucco: è metà dello spettacolo.",
      },
      {
        nome: "Basilica di Santa Cruz",
        testo: "La cattedrale cattolica di Fort Kochi, ricostruita alla fine dell'Ottocento sul luogo della prima chiesa portoghese, demolita dagli inglesi. Dentro, colonne e soffitti dipinti, vetrate colorate e la Via Crucis in stile indo-europeo.",
        come: "A pochi passi da San Francesco, a piedi. Vestiti che coprano spalle e gambe.",
        quando: "Di giorno, fuori dagli orari delle messe.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 9.96529,
        lng: 76.24358,
      },
      {
        nome: "Princess Street e le case coloniali",
        testo: "Una delle prime strade di Fort Kochi, con case portoghesi e olandesi a due piani, balconi di legno e cortili oggi occupati da caffè, gallerie e homestay. Insieme alle vie intorno è il quartiere da girare senza meta.",
        come: "A piedi o in bici partendo da San Francesco.",
        quando: "Mattina presto o tardo pomeriggio, con la luce bassa sulle facciate.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 9.96651,
        lng: 76.24254,
      },
      {
        nome: "Il cimitero olandese",
        testo: "Consacrato nel 1724, è uno dei cimiteri europei più antichi dell'India, con lapidi di mercanti e soldati della Compagnia olandese delle Indie orientali. Si guarda dal cancello: di solito è chiuso.",
        come: "Sul lungomare, verso la spiaggia, a piedi dalle reti cinesi.",
        quando: "Di passaggio, andando a vedere il tramonto sulla spiaggia.",
        tempo: "15 minuti",
        costo: "gratuito, visto da fuori",
        lat: 9.96419,
        lng: 76.23827,
      },
      {
        nome: "Museo indo-portoghese",
        testo: "Nel complesso del vescovado, raccoglie l'arte sacra delle chiese cattoliche di Kochi: altari, statue, croci processionali e argenti, con le fondamenta del vecchio bastione portoghese nel seminterrato.",
        come: "Vicino alla residenza del vescovo, a 10 minuti a piedi da San Francesco.",
        quando: "Nelle ore calde, come pausa all'ombra.",
        tempo: "45 minuti",
        orari: "Di solito 10-13 e 14-17, chiuso il lunedì.",
        lat: 9.96231,
        lng: 76.24027,
      },
      {
        nome: "Aspinwall House e la Biennale",
        testo: "Un vecchio magazzino commerciale sul mare, con moli e capannoni del commercio di spezie e cocco. È la sede principale della Kochi-Muziris Biennale, la grande mostra d'arte contemporanea che porta a Fort Kochi artisti da tutto il mondo.",
        come: "Sulla Calvetty Road, tra le reti cinesi e Mattancherry, a piedi o in bici.",
        quando: "Durante la Biennale, che apre a dicembre e dura circa tre mesi (l'ultima edizione fino al 31 marzo 2026); fuori stagione può essere chiusa.",
        tempo: "2-3 ore durante la Biennale",
        lat: 9.96861,
        lng: 76.24655,
        consiglio: "Il biglietto della Biennale vale per più sedi sparse tra Fort Kochi e Mattancherry: conviene un giorno intero in bici.",
      },
      {
        nome: "Il tempio jainista di Mattancherry",
        testo: "Il tempio dei mercanti gujarati, in marmo bianco, dedicato a Dharmanath. È famoso per il rito dei piccioni: verso mezzogiorno i fedeli spargono il grano e centinaia di uccelli scendono nel cortile.",
        come: "Nella zona di Gujarati Road, in tuk-tuk o a piedi da Jew Town. Si entra scalzi, niente oggetti di cuoio.",
        quando: "Verso mezzogiorno, per il rito dei piccioni.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 9.96113,
        lng: 76.25399,
      },
      {
        nome: "Il traghetto per Ernakulam",
        testo: "I traghetti pubblici e il Water Metro attraversano il porto tra Fort Kochi ed Ernakulam, passando davanti a navi container, pescherecci e isole. È il modo più economico di vedere Kochi dall'acqua.",
        come: "Dal molo di Fort Kochi, vicino al Customs Jetty; si compra il biglietto allo sportello.",
        quando: "Al tramonto, sulla via del ritorno.",
        tempo: "20-30 minuti a tratta",
        lat: 9.96906,
        lng: 76.25107,
        consiglio: "Sul traghetto pubblico si sale con la gente del posto: tenersi lontano dal bordo quando è pieno.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina a Mattancherry: palazzo e sinagoga (non di venerdì né di sabato)",
          "Jew Town e i magazzini delle spezie di Bazaar Road",
          "Tempio jainista verso mezzogiorno",
          "Pomeriggio a Fort Kochi: San Francesco, Santa Cruz, Princess Street",
          "Reti cinesi al tramonto",
          "Kathakali la sera, arrivando per il trucco",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: il giorno sopra",
          "Giorno 2: corso di cucina keralese al mattino",
          "Museo indo-portoghese e cimitero olandese",
          "Gallerie e caffè, oppure Aspinwall House durante la Biennale",
          "Traghetto per Ernakulam e ritorno al tramonto",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: Hill Palace di Tripunithura al mattino",
          "Pomeriggio alla spiaggia di Cherai",
          "Oppure una giornata nelle backwaters di Alleppey",
        ],
      },
    ],
    zone: [
      {
        nome: "Fort Kochi",
        perChi: "chi vuole il quartiere storico",
        testo: "Homestay e hotel heritage nei bungalow coloniali, tutto a piedi. Tranquillo la sera, a un'ora o più dall'aeroporto.",
        fascia: "30-120 €",
      },
      {
        nome: "Mattancherry",
        perChi: "chi vuole il quartiere ebraico",
        testo: "Poche guesthouse vicino al palazzo e alla sinagoga. Vivace di giorno, si svuota la sera.",
        fascia: "25-70 €",
      },
      {
        nome: "Ernakulam",
        perChi: "chi arriva o parte in treno",
        testo: "La città moderna sulla terraferma, con stazione e hotel di catena. Comoda per i trasporti, si va a Fort Kochi in traghetto.",
        fascia: "40-110 €",
      },
    ],
    sapori: [
      {
        nome: "Appam con stufato",
        testo: "Crêpe di riso fermentato con uno stufato di verdure, pollo o montone al latte di cocco. La colazione dei cristiani del Kerala."
      },
      {
        nome: "Fish moilee",
        testo: "Pesce in una salsa leggera di cocco, curcuma e foglie di curry, di origine portoghese. In molti ristoranti di Fort Kochi."
      },
      {
        nome: "Kerala parotta e beef fry",
        testo: "Pane sfogliato con manzo saltato con cocco e spezie, un piatto popolare in Kerala, dove il manzo si mangia."
      },
      {
        nome: "Chips di banana",
        testo: "Fettine di banana verde fritte nell'olio di cocco, salate o dolci, appena fatte nei negozi del bazar."
      }
    ],
    attenzioni: [
      "La sinagoga Paradesi è chiusa il venerdì, il sabato e nelle feste ebraiche; il palazzo di Mattancherry di solito il venerdì.",
      "I tuk-tuk che offrono un giro a pochissimo vi portano nei negozi di spezie e tessuti con commissione.",
      "Spezie e «antichità» di Jew Town: trattare, e diffidare delle antichità certificate.",
      "Zanzare e casi di dengue nella stagione delle piogge: repellente.",
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Fort Kochi?",
        risposta: "Due giorni pieni: uno per Mattancherry e Fort Kochi, uno per gallerie, cucina e il porto. Con il terzo si aggiungono Tripunithura o Cherai.",
      },
      {
        domanda: "Meglio dormire a Fort Kochi o a Ernakulam?",
        risposta: "A Fort Kochi, dove tutto si fa a piedi e la sera è tranquilla. Ernakulam conviene solo per chi arriva tardi in treno o parte all'alba.",
      },
      {
        domanda: "Quando è chiusa la sinagoga Paradesi?",
        risposta: "Il venerdì, il sabato e nelle feste ebraiche; negli altri giorni apre la mattina e il pomeriggio con una lunga pausa. Il palazzo di Mattancherry chiude il venerdì.",
      },
      {
        domanda: "Dove vedere il kathakali?",
        risposta: "Nei centri culturali di Fort Kochi, come il Kerala Kathakali Centre, ogni sera. Conviene arrivare in anticipo per assistere al trucco degli attori.",
      },
      {
        domanda: "Quando c'è la Biennale di Kochi?",
        risposta: "Si tiene ogni due anni circa, da dicembre a marzo; l'ultima edizione è durata dal 12 dicembre 2025 al 31 marzo 2026.",
      },
      {
        domanda: "Ci si può bagnare a Fort Kochi?",
        risposta: "La spiaggia di Fort Kochi non è adatta al bagno. Per il mare si va a Cherai o a Marari, con attenzione alle correnti.",
      },
    ],
    gite: [
      {
        nome: "Hill Palace di Tripunithura",
        distanza: "circa 15 km, 45 minuti-1 ora in auto",
        come: "In taxi o in metro fino a Tripunithura, poi tuk-tuk.",
        testo: "L'ex residenza dei re di Kochi, un complesso di padiglioni in un grande parco, oggi museo con troni, gioielli, armi e manoscritti. È chiuso il lunedì.",
      },
      {
        nome: "Spiaggia di Cherai",
        distanza: "circa 25 km, 1 ora in auto",
        come: "In taxi, oppure traghetto per Vypeen e poi bus o tuk-tuk verso nord.",
        testo: "Una lunga spiaggia sull'isola di Vypeen, con le backwaters alle spalle e le reti cinesi anche qui. Mare da guardare più che da nuotare: le correnti sono forti.",
      },
      {
        nome: "Backwaters di Alleppey",
        distanza: "circa 55 km, 1-2 ore in auto",
        come: "In auto con autista o in treno da Ernakulam ad Alappuzha.",
        testo: "Canoa sui canali, pranzo con il karimeen e rientro la sera; meglio ancora con una notte in houseboat.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Le reti da pesca cinesi sul lungomare di Fort Kochi al tramonto',
    immagine: '/images/india/fort-kochi.jpg',
  },
  {
    slug: 'hampi',
    paeseSlug: 'india',
    ordine: 16,
    nome: 'Hampi',
    tipologia: ['patrimonio UNESCO', 'rovine', 'paesaggio'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    miaEsperienza:
      "Hampi è stata l'ultima tappa del giro nel Sud: ci sono arrivato con il treno notturno da Bangalore e sono ripartito allo stesso modo due giorni dopo. In mezzo il bazar, il tempio di Virupaksha, il tramonto su Matanga, il Centro reale e il tempio di Vittala.",
    introduzione:
      'Le rovine di Vijayanagara, capitale di uno dei più grandi imperi dell\'India, distrutta nel 1565, in un paesaggio di massi di granito, risaie e bananeti lungo il fiume Tungabhadra.',
    percheAndarci: "Per oltre 1.600 resti di monumenti in un paesaggio che non somiglia a nessun altro, con un villaggio tranquillo e i tramonti dalle colline di roccia.",
    cosaVedere: [
      'Il tempio di Virupaksha, ancora attivo',
      'Il tempio di Vittala e il carro di pietra',
      'Il Centro reale, il recinto delle regine con il Lotus Mahal e le stalle degli elefanti',
      'Il bazar di Hampi e la collina di Hemakuta',
      'La collina di Matanga al tramonto',
    ],
    cosaFare: ['Girare in motorino o in bici tra i gruppi di monumenti', 'Un giro in coracle sul Tungabhadra', 'Arrampicata sui massi con guide locali'],
    doveDormire: 'Guesthouse semplici nel bazar; resort oltre il fiume a Virupapur Gaddi e Hanumanahalli, o vicino a Kamalapura.',
    doveMangiare: "Thali e caffè sulle terrazze; nel bazar la cucina è soprattutto vegetariana.",
    comeArrivare:
      "Da Bangalore il modo classico è il treno notturno Hampi Express (16592), che parte da Bangalore City verso le 21.50 e arriva a Hosapete verso le 7, circa 9 ore, da prenotare su IRCTC. Da Hosapete al bazar di Hampi sono 13 km, 20-30 minuti in tuk-tuk o bus locale. L'aeroporto di Vidyanagar (Jindal), con pochi voli nazionali, è a circa un'ora d'auto. Da Goa ci sono bus notturni.",
    comeSpostarsi: 'Motorino, bicicletta o tuk-tuk a giornata.',
    periodoMigliore: 'ottobre-febbraio; da marzo il caldo sul granito diventa pesante.',
    costi:
      "Vittala e recinto delle regine con biglietto ASI per gli stranieri (circa 600 rupie per il Vittala, 2026); Virupaksha gratuito con circa 50 rupie per la fotocamera; tuk-tuk a giornata 1.200-1.800 rupie. Budget al giorno a persona in doppia: 25-40 € con guesthouse nel bazar e motorino, 60-100 € in resort oltre il fiume con tuk-tuk, da 200 € nei resort di lusso.",
    erroriDaEvitare: ['Visitare i siti a mezzogiorno', 'Contare sulla barca per Virupapur Gaddi in stagione di piena'],
    luoghi: [
      {
        nome: "Tempio di Virupaksha",
        testo: "Il tempio di Shiva ancora attivo nel bazar di Hampi, con il gopuram di nove piani, alto 50 metri, che si vede da tutta la valle. Il culto qui va avanti senza interruzioni dal VII secolo circa, prima dell'impero di Vijayanagara.",
        come: "In fondo al bazar, a piedi. Scarpe al deposito.",
        quando: "Mattina presto, quando i fedeli portano le offerte.",
        tempo: "1 ora",
        costo: "ingresso libero",
        lat: 15.33517,
        lng: 76.45868,
        consiglio: "Andarci al mattino presto e poi salire su Hemakuta, subito sopra, per vedere il gopuram dall'alto.",
      },
      {
        nome: "Tempio di Vittala e il carro di pietra",
        testo: "Il tempio più raffinato di Hampi, del Cinquecento, con il carro di pietra e le colonne che suonano se percosse (oggi non si possono toccare). È uno dei simboli del sito UNESCO.",
        come: "Dal parcheggio le auto non passano: ci si arriva con i veicoli elettrici o a piedi. Biglietto ASI alla biglietteria.",
        quando: "All'apertura, prima del sole forte e dei gruppi. Le fonti danno orari diversi: verificarli alla biglietteria.",
        tempo: "1 ora e mezza",
        costo: "circa 600 rupie per gli stranieri, tariffa soggetta a modifiche (Karnataka Tourism, 2026); validità per il recinto delle regine alla biglietteria",
        url: "https://asi.nic.in/",
        lat: 15.34229,
        lng: 76.47547,
        consiglio: "Andarci a piedi dal bazar lungo il fiume: un paio di chilometri tra rovine e massi.",
      },
      {
        nome: "Il Centro reale",
        testo: "Il cuore politico della capitale: la piattaforma a tre gradoni di Mahanavami Dibba, la grande vasca a gradini in granito e il tempio di Hazara Rama, con i fregi che raccontano il Ramayana.",
        come: "A qualche chilometro dal bazar, verso Kamalapura, in bici, motorino o tuk-tuk.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "2 ore",
        lat: 15.31596,
        lng: 76.47085,
        consiglio: "Lasciare il tempo per l'Hazara Rama: i fregi sono il libro illustrato della città.",
      },
      {
        nome: "Il recinto delle regine e le stalle degli elefanti",
        testo: "Il Lotus Mahal, un padiglione a due piani con torri piramidali e una cupola a bocciolo di loto, e accanto le stalle degli elefanti reali: undici camere in fila, quasi tutte coperte da cupole. Vicino c'è una torre di guardia.",
        come: "Accanto al Centro reale. Biglietto ASI: chiedere alla biglietteria se vale anche per il Vittala nello stesso giorno.",
        quando: "Pomeriggio, dopo il Vittala del mattino.",
        tempo: "1 ora",
        costo: "biglietto ASI per gli stranieri, tariffa alla biglietteria",
        url: "https://asi.nic.in/",
        lat: 15.32028,
        lng: 76.47139,
        consiglio: "Tenere il biglietto in tasca: lo controllano.",
      },
      {
        nome: "Le colline di Hemakuta e Matanga",
        testo: "Hemakuta è una collina di roccia sopra il bazar con più di trenta piccoli templi. Matanga è la collina più panoramica del sito: in cima c'è il tempio di Virabhadra, e si vedono il fiume, le risaie e le rovine in mezzo ai massi.",
        come: "A piedi dal bazar. Hemakuta è facile; Matanga è una salita ripida su gradini e roccia.",
        quando: "Hemakuta al tramonto; Matanga all'alba, partendo al buio con una torcia.",
        tempo: "1-2 ore",
        costo: "gratuito",
        lat: 15.33434,
        lng: 76.45997,
        consiglio: "Non salire su Matanga da soli al buio: andare in gruppo o con una guida locale.",
      },
      {
        nome: "Il coracle sul Tungabhadra",
        testo: "Le barche rotonde di bambù intrecciato, usate da secoli per attraversare il fiume. Un giro passa tra i massi e i templi sulle rive.",
        come: "Ai punti d'imbarco lungo il fiume. Prezzo da concordare prima.",
        quando: "Quando il fiume è calmo; con la piena del monsone si fermano.",
        tempo: "30-45 minuti",
        costo: "da concordare con il barcaiolo",
        consiglio: "Chiedere sempre il giubbotto salvagente.",
      },
      {
        nome: "I Ganesha di Sasivekalu e Kadalekalu",
        testo: "Due grandi Ganesha monolitici sul fianco di Hemakuta: Sasivekalu, alto circa 2,5 metri, sotto un padiglione aperto, e Kadalekalu, alto quasi 5 metri, dentro un tempio con colonne slanciate. I nomi vengono dalla forma della pancia, paragonata a un seme di senape e a un cece.",
        come: "Sulla strada che sale dal bazar verso il Centro reale, a piedi.",
        quando: "Al mattino, abbinati a Hemakuta.",
        tempo: "30 minuti",
        costo: "gratuito",
        lat: 15.3314,
        lng: 76.45997,
      },
      {
        nome: "Tempio di Krishna e il suo bazar",
        testo: "Un tempio del 1513, fatto costruire dal re Krishnadevaraya dopo una vittoria in Orissa, con un gopuram in parte crollato e fregi sulla vita di Krishna. Davanti corre un bazar di portici di pietra, con la vasca a gradini di fianco.",
        come: "Sulla strada Hampi-Kamalapura, a 10 minuti a piedi dal bazar.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "45 minuti",
        costo: "gratuito",
        lat: 15.33023,
        lng: 76.46038,
      },
      {
        nome: "Lakshmi Narasimha e Badavilinga",
        testo: "Il Narasimha monolitico, alto più di 6 metri, è la statua più grande di Hampi: Vishnu con il volto di leone, seduto sotto il cappuccio di un cobra a sette teste. Accanto, in una cella allagata da un canale, c'è il Badavilinga, un linga di tre metri ancora venerato.",
        come: "Poco a sud del tempio di Krishna, a piedi o in bici.",
        quando: "Al mattino, quando la luce entra nella cella del linga.",
        tempo: "30 minuti",
        costo: "gratuito",
        lat: 15.32932,
        lng: 76.45905,
      },
      {
        nome: "Tempio di Achyutaraya e Sule Bazaar",
        testo: "Un grande complesso del 1534 nascosto tra Matanga e il fiume, con due recinti e colonne scolpite. Davanti si apre Sule Bazaar, una strada lastricata lunga quasi un chilometro, un tempo il mercato più ricco della città.",
        come: "A piedi dal bazar di Hampi lungo il sentiero del fiume, oppure scendendo da Matanga.",
        quando: "Al mattino presto: c'è pochissima gente.",
        tempo: "1 ora",
        costo: "gratuito",
        lat: 15.33196,
        lng: 76.47009,
        consiglio: "Si attraversa sulla strada a piedi verso il Vittala: è il tratto più bello del percorso.",
      },
      {
        nome: "Tempio di Hazara Rama",
        testo: "Il tempio privato dei re, nel cuore del Centro reale. Le pareti esterne sono coperte di fregi con processioni di elefanti, cavalli, danzatrici e soldati; dentro, i pannelli raccontano il Ramayana scena per scena.",
        come: "Nel Centro reale, a piedi da Mahanavami Dibba.",
        quando: "Mattina o tardo pomeriggio, con la luce radente sui fregi.",
        tempo: "45 minuti",
        costo: "gratuito",
        lat: 15.3178,
        lng: 76.46887,
      },
      {
        nome: "Il tempio sotterraneo di Shiva",
        testo: "Un tempio costruito sotto il livello del suolo, vicino al Centro reale, con le sale spesso allagate da un canale: si cammina nell'acqua fino al santuario buio.",
        come: "A ovest dell'Hazara Rama, a piedi o in bici. Scalzi.",
        quando: "Con il fiume basso, in inverno; dopo il monsone l'acqua è più alta.",
        tempo: "20 minuti",
        costo: "gratuito",
        lat: 15.31782,
        lng: 76.46403,
      },
      {
        nome: "Il bagno della regina",
        testo: "Un edificio quadrato dall'esterno sobrio, con dentro una vasca circondata da un corridoio ad archi e balconi ornati. Probabilmente era un bagno della corte, alimentato da un canale.",
        come: "Sulla strada per Kamalapura, a sud del Centro reale.",
        quando: "Di giorno, abbinato al Centro reale.",
        tempo: "20 minuti",
        costo: "gratuito",
        lat: 15.31342,
        lng: 76.47278,
      },
      {
        nome: "Museo archeologico di Kamalapura",
        testo: "Il piccolo museo dell'ASI con sculture, armi, monete e un grande plastico del sito, utile per capire come era disposta la capitale prima di girarla.",
        come: "A Kamalapura, 4 chilometri a sud del bazar, in tuk-tuk o motorino.",
        quando: "Il primo giorno, prima del Centro reale.",
        tempo: "45 minuti",
        orari: "Di solito 10-17, chiuso il venerdì.",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Vittala all'apertura, arrivando a piedi lungo il fiume da Achyutaraya",
          "Coracle sul Tungabhadra",
          "Pomeriggio al Centro reale, Hazara Rama e recinto delle regine",
          "Tramonto da Hemakuta",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Virupaksha all'alba, Vittala e il fiume, tramonto da Hemakuta",
          "Giorno 2: alba da Matanga",
          "Museo di Kamalapura, Centro reale, bagno della regina e Lotus Mahal",
          "Pomeriggio: Ganesha, tempio di Krishna, Narasimha e Badavilinga",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2: come sopra",
          "Giorno 3: oltre il fiume ad Anegundi e alla collina di Anjanadri",
          "Pomeriggio tra le risaie in motorino",
          "Sera a Virupapur Gaddi",
        ],
      },
    ],
    zone: [
      {
        nome: "Hampi Bazaar",
        perChi: "chi vuole tutto a piedi",
        testo: "Guesthouse semplici nel villaggio sotto il Virupaksha, a piedi da molti monumenti. Tranquillo, cucina soprattutto vegetariana.",
        fascia: "15-40 €",
      },
      {
        nome: "Virupapur Gaddi e Hanumanahalli",
        perChi: "chi cerca relax",
        testo: "Oltre il fiume, tra risaie e massi, con resort e caffè. Il traghetto dipende dal livello dell'acqua: con la piena bisogna fare un lungo giro in strada.",
        fascia: "25-80 €",
      },
      {
        nome: "Kamalapura e Hosapete",
        perChi: "hotel con piscina e comodità",
        testo: "Hotel più strutturati vicino al Centro reale o a Hosapete, a 13 chilometri. Comodi, serve un mezzo per tutto.",
        fascia: "50-150 €",
      },
    ],
    sapori: [
      {
        nome: "Thali su foglia di banano",
        testo: "Riso, sambar, rasam, verdure e chapati serviti su una foglia, ricaricati finché si vuole. Nelle trattorie del bazar e nei caffè sulla riva."
      },
      {
        nome: "Colazione del Karnataka",
        testo: "Idli, vada e dosa con chutney di cocco, oppure upma, nelle botteghe del bazar dall'alba."
      },
      {
        nome: "Bisi bele bath",
        testo: "Riso con lenticchie, verdure e spezie, cotto fino a diventare cremoso: un piatto unico del Karnataka."
      },
      {
        nome: "Banana e zucchero di canna",
        testo: "Intorno a Hampi si coltivano banane e canna da zucchero: succo di canna appena spremuto e banane piccole dolcissime nei banchi."
      }
    ],
    attenzioni: [
      "Non nuotate nel Tungabhadra: correnti e massi sono pericolosi.",
      "Per guidare un motorino serve una patente valida per i motocicli, con il permesso internazionale, e il casco.",
      "Il traghetto per Virupapur Gaddi non va quando il fiume è in piena.",
      "Visitate i siti la mattina e il tardo pomeriggio: a mezzogiorno il granito al sole è rovente.",
    ],
    faq: [
      {
        domanda: "Quanti giorni servono a Hampi?",
        risposta: "Due giorni pieni per i monumenti principali; con tre si aggiungono Anegundi, Anjanadri e le rovine minori senza fretta.",
      },
      {
        domanda: "Meglio dormire a Hampi Bazaar o oltre il fiume?",
        risposta: "Il bazar è comodo per tutto a piedi; Virupapur Gaddi è più rilassato ma dipende dalla barca, che con la piena non passa. Chi vuole piscina e comodità sceglie Kamalapura o Hosapete.",
      },
      {
        domanda: "Quanto costa il biglietto per il Vittala?",
        risposta: "Per gli stranieri circa 600 rupie, secondo Karnataka Tourism nel 2026; il resto del sito è in gran parte gratuito. Alla biglietteria si chiede se lo stesso biglietto vale per il recinto delle regine.",
      },
      {
        domanda: "Come ci si muove tra i monumenti?",
        risposta: "In motorino, bicicletta o tuk-tuk a giornata; tra i gruppi di templi ci sono alcuni chilometri. Il tratto dal bazar al Vittala lungo il fiume si fa a piedi.",
      },
      {
        domanda: "Qual è il periodo migliore per Hampi?",
        risposta: "Da ottobre a febbraio. Da marzo il caldo sale e ad aprile supera spesso i 40 °C; con il monsone il fiume si alza e le barche si fermano.",
      },
      {
        domanda: "Come si arriva a Hampi da Bangalore?",
        risposta: "Con il treno notturno Hampi Express fino a Hosapete, circa 9 ore, poi 13 km in tuk-tuk. In alternativa un volo per l'aeroporto di Vidyanagar, a circa un'ora.",
      },
    ],
    gite: [
      {
        nome: "Anegundi e la collina di Anjanadri",
        distanza: "5-10 km oltre il fiume",
        come: "In barca o coracle dove passano, altrimenti in auto o motorino dal ponte di Kampli.",
        testo: "Anegundi è un villaggio più antico di Hampi, con case di fango e un'associazione di artigiane che intreccia banano. Anjanadri, con circa 570 gradini, è per i devoti il luogo di nascita di Hanuman, e dalla cima si vede tutto il sito.",
      },
      {
        nome: "Santuario degli orsi di Daroji",
        distanza: "circa 15 km, 30-40 minuti in auto",
        come: "In auto o tuk-tuk da Hampi o Kamalapura, nel tardo pomeriggio.",
        testo: "Una riserva per l'orso labiato tra colline di granito: dalla torre di osservazione, al tramonto, gli orsi scendono alle rocce. Serve un binocolo.",
      },
      {
        nome: "Badami e Pattadakal",
        distanza: "circa 140 km, 3 ore in auto",
        come: "In auto con autista per la giornata, meglio con una notte a Badami.",
        testo: "I templi in grotta di Badami e quelli di Pattadakal, patrimonio UNESCO, sono più antichi di Hampi di quasi mille anni: è la gita lunga per chi ha tempo.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Il carro di pietra del tempio di Vittala a Hampi, tra colonne scolpite e massi di granito',
    immagine: '/images/india/hampi.jpg',
  },
]
