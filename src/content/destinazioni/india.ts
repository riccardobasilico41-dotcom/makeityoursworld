import type { Destinazione } from '@/lib/types'

// Destinazioni indiane dei tre itinerari: india-rajasthan-10-giorni,
// india-rajasthan-varanasi e india-sud-taj-mahal. Rick ha fatto Varanasi e
// il Rajasthan (viaggio 77): le destinazioni del Nord sono visitate
// (visitataPersonalmente: true), quelle del Sud no (false: il viaggio 78 è
// una proposta costruita sulla ricerca). Il campo miaEsperienza è assente
// finché non si scrivono i ricordi (la UI mostra un placeholder editoriale).
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
    introduzione:
      'La capitale è due città in una: la Vecchia Delhi moghul di Shah Jahan, con la Jama Masjid, il Forte Rosso e i vicoli di Chandni Chowk, e la Nuova Delhi britannica dei grandi viali, dei giardini e dei mausolei.',
    percheAndarci:
      'Quasi tutti i voli dall\'Italia arrivano qui, e due giorni bastano per vedere i monumenti che spiegano il resto del viaggio: la Tomba di Humayun, modello del Taj Mahal, e il Qutub Minar, la prima grande architettura islamica dell\'India.',
    cosaVedere: [
      'La Jama Masjid, la più grande moschea dell\'India, e il Forte Rosso',
      'I mercati di Chandni Chowk e delle spezie di Khari Baoli',
      'La Tomba di Humayun e il quartiere sufi di Nizamuddin',
      'Il Qutub Minar e la colonna di ferro',
      'Il Gurudwara Bangla Sahib, il tempio sikh con la mensa gratuita aperta a tutti',
      'India Gate, Kartavya Path e i Lodhi Gardens',
    ],
    cosaFare: [
      'Un giro in cyclo-risciò nei vicoli della Vecchia Delhi',
      'Mangiare al langar del Gurudwara Bangla Sahib',
      'Ascoltare i qawwali a Nizamuddin il giovedì sera',
      'Muoversi in metro, il mezzo più semplice e pulito della città',
    ],
    doveDormire:
      'Karol Bagh e Connaught Place in fascia media, South Delhi (Hauz Khas, Defence Colony) per la tranquillità. Paharganj è economica e vicina alla stazione di New Delhi, ma caotica.',
    doveMangiare:
      'Parathe a Paranthe Wali Gali, kebab intorno alla Jama Masjid, chaat a Chandni Chowk, cucina punjabi in tutta la città.',
    comeArrivare:
      'Aeroporto internazionale Indira Gandhi, collegato al centro dalla metro Airport Express (circa 20 minuti fino a New Delhi) o con taxi prepagato e Uber.',
    comeSpostarsi: 'Metro (con carrozza riservata alle donne), Uber, Ola e tuk-tuk a prezzo concordato.',
    periodoMigliore:
      'ottobre-novembre e febbraio-marzo. Tra novembre e gennaio l\'inquinamento dell\'aria è spesso molto alto; da aprile a giugno il caldo supera i 40 °C.',
    costi: 'Monumenti ASI circa 550-600 rupie per gli stranieri; metro poche decine di rupie a corsa.',
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
        quando: "Aperta tutti i giorni dall'alba al tramonto. Il tardo pomeriggio dà la luce migliore sull'arenaria.",
        tempo: "1 ora e mezza-2 ore",
        costo: "circa 600 rupie per gli stranieri, 550 online (tariffa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Vederla prima del Taj Mahal: si riconoscono la pianta, la cupola doppia e il giardino che ad Agra diventeranno perfetti."
      },
      {
        nome: "Qutub Minar e la colonna di ferro",
        testo: "Una torre in arenaria alta 73 metri, iniziata intorno al 1200 dai primi sultani di Delhi, con le fasce di iscrizioni coraniche scolpite. Accanto ci sono le rovine della prima moschea della città e una colonna di ferro di oltre 1.500 anni che non arrugginisce.",
        come: "Metro gialla fino a Qutub Minar, poi tuk-tuk per l'ultimo chilometro e mezzo. Nella torre non si sale.",
        quando: "Tutti i giorni dall'alba al tramonto. Meglio all'apertura, prima dei gruppi e del caldo.",
        tempo: "1 ora e mezza",
        costo: "circa 600 rupie per gli stranieri, 550 online (tariffa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Si abbina bene al quartiere di Mehrauli, a piedi, con le tombe e i pozzi sparsi nel parco archeologico."
      },
      {
        nome: "Forte Rosso",
        testo: "La cittadella di Shah Jahan, costruita tra il 1639 e il 1648 quando la capitale moghul passò da Agra a Delhi. Dentro ci sono le sale delle udienze, i padiglioni di marmo e alcuni musei. Da qui ogni 15 agosto il primo ministro parla alla nazione.",
        come: "Metro viola fino a Lal Quila. Ingresso dal Lahori Gate dopo i controlli di sicurezza.",
        quando: "Chiuso il lunedì. Mattina presto per evitare la folla della domenica.",
        tempo: "2 ore",
        url: "https://asi.nic.in/",
        consiglio: "Se il tempo è poco, meglio la Tomba di Humayun: il forte è grande ma più spoglio di quanto ci si aspetti."
      },
      {
        nome: "Jama Masjid",
        testo: "La moschea più grande dell'India, voluta da Shah Jahan e finita nel 1656. Il cortile tiene circa 25.000 fedeli e dai minareti si vede tutta la Vecchia Delhi.",
        come: "Metro viola fino a Jama Masjid. Scarpe tolte all'ingresso; a chi ha gambe o spalle scoperte prestano una veste.",
        quando: "Chiusa ai visitatori durante le preghiere, e il venerdì a mezzogiorno è affollatissima. Mattina o metà pomeriggio.",
        tempo: "45 minuti",
        costo: "ingresso libero; si paga per il telefono o la macchina fotografica e per salire sul minareto",
        consiglio: "Fissare le tariffe al cancello e non dare soldi a chi si offre di «sorvegliare» le scarpe dentro il cortile."
      },
      {
        nome: "Chandni Chowk e il mercato delle spezie di Khari Baoli",
        testo: "La strada dei mercanti della Delhi moghul, oggi un groviglio di vicoli specializzati: argento, tessuti da sposa, carta, dolci fritti. In fondo c'è Khari Baoli, il mercato all'ingrosso delle spezie, dove peperoncino e cardamomo si vendono a sacchi.",
        come: "Metro gialla fino a Chandni Chowk. Il modo migliore per girarlo è un cyclo-risciò a prezzo fissato prima, poi a piedi.",
        quando: "Mattina, da metà mattina in poi. Molti negozi sono chiusi la domenica.",
        tempo: "mezza giornata",
        consiglio: "Salire sulla terrazza del Gadodia Market, sopra le spezie: si vede il mercato dall'alto e si respira meglio."
      },
      {
        nome: "Gurudwara Bangla Sahib",
        testo: "Il tempio sikh più conosciuto di Delhi, con la cupola d'oro e una vasca sacra. Il langar, la mensa comune, serve pasti gratuiti a chiunque a ogni ora, preparati da volontari.",
        come: "A circa un chilometro e mezzo da Connaught Place, a piedi o in tuk-tuk. Scarpe e calze al deposito, capo coperto: i foulard si prendono all'ingresso.",
        quando: "Aperto tutto il giorno, tutti i giorni. La sera, con le luci e i canti, è più suggestivo.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Sedersi per terra al langar con tutti gli altri e, se si vuole, dare una mano in cucina."
      },
      {
        nome: "Dargah di Nizamuddin e i qawwali",
        testo: "Il santuario del santo sufi Nizamuddin Auliya, in un quartiere di vicoli dietro la Tomba di Humayun. La sera i cantori qawwali suonano davanti alla tomba tra i fedeli.",
        come: "A piedi dalla Tomba di Humayun o dalla stazione Hazrat Nizamuddin. Scarpe tolte, capo coperto, vestiti lunghi.",
        quando: "Il giovedì sera, dopo la preghiera del tramonto, è il momento più sentito.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Le offerte sono volontarie: lasciare solo quello che si vuole, anche se qualcuno insiste."
      },
      {
        nome: "India Gate, Kartavya Path e i Lodhi Gardens",
        testo: "La Delhi britannica dei grandi viali: l'arco dei caduti di India Gate e il viale cerimoniale verso i palazzi del governo. Poco più a sud i Lodhi Gardens sono un parco pubblico con le tombe dei sultani del Quattrocento.",
        come: "Metro fino a Khan Market per i Lodhi Gardens; India Gate in tuk-tuk o a piedi da Central Secretariat.",
        quando: "Lodhi Gardens all'alba, quando Delhi corre e fa yoga. India Gate al tramonto, quando si illumina.",
        tempo: "2 ore",
        costo: "gratuito",
        consiglio: "Chiudere ai Lodhi Gardens con un caffè a Khan Market: è il pezzo più tranquillo della città."
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
      }
    ],
    zone: [
      {
        nome: "Connaught Place e Karol Bagh",
        perChi: "chi vuole comodità e metro",
        testo: "Al centro della rete metro, a 15-20 minuti dalla stazione di New Delhi. Hotel di fascia media e ristoranti ovunque; Karol Bagh è più rumorosa e trafficata."
      },
      {
        nome: "South Delhi (Hauz Khas, Defence Colony)",
        perChi: "chi cerca calma",
        testo: "Quartieri residenziali, verdi, con guesthouse curate e locali. Si è più lontani dalla Vecchia Delhi: 40-60 minuti in auto con il traffico."
      },
      {
        nome: "Paharganj",
        perChi: "budget stretto",
        testo: "Di fronte alla stazione di New Delhi, comodissima per i treni. Economica ma caotica, sporca e piena di procacciatori: va bene per una notte prima di un treno."
      },
      {
        nome: "Aerocity",
        perChi: "voli all'alba o a tarda notte",
        testo: "Hotel di catena accanto all'aeroporto, collegati dalla metro Airport Express. Comoda per l'arrivo e la partenza, poco interessante per visitare la città."
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
        testo: "Pollo tandoori in salsa di pomodoro e burro, nato nelle cucine punjabi di Delhi dopo il 1947. Si trova nei ristoranti punjabi di tutta la città."
      }
    ],
    attenzioni: [
      "Chi vi ferma vicino alla stazione di New Delhi dicendo che l'ufficio per i biglietti stranieri è chiuso o si è spostato: l'International Tourist Bureau è dentro la stazione, al primo piano.",
      "Gli «uffici del turismo» privati intorno a Connaught Place vendono pacchetti cari spacciandosi per enti pubblici.",
      "All'aeroporto e la sera: solo taxi prepagati, Uber o Ola, o il transfer dell'hotel. Non credete a chi dice che l'hotel è chiuso o pieno.",
      "Non accettate cibo o bevande da sconosciuti: il Foreign Office britannico segnala furti dopo bevande drogate.",
      "Tra novembre e gennaio l'aria è spesso pessima: controllate l'indice di qualità dell'aria e portate una mascherina FFP2."
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
    introduzione:
      'La città del Taj Mahal, il mausoleo di marmo bianco che Shah Jahan fece costruire per la moglie Mumtaz Mahal, e del Forte di Agra, la cittadella moghul in arenaria rossa lungo il fiume Yamuna.',
    percheAndarci:
      'Per vedere il Taj Mahal all\'alba, quando il marmo cambia colore e i giardini sono quasi vuoti. Agra in sé è una città caotica: una notte basta, due se si vuole vederlo anche al tramonto da Mehtab Bagh.',
    cosaVedere: [
      'Il Taj Mahal all\'apertura dei cancelli, con l\'interno del mausoleo',
      'Il Forte di Agra, da cui Shah Jahan prigioniero guardava il Taj',
      'L\'Itimad-ud-Daulah, il «piccolo Taj» intarsiato di pietre dure',
      'Il giardino di Mehtab Bagh, sulla riva opposta del fiume, per il tramonto',
      'Fatehpur Sikri, la capitale abbandonata di Akbar, a 40 minuti',
    ],
    cosaFare: [
      'Entrare dall\'ingresso est all\'alba con il biglietto comprato online',
      'Guardare il Taj al tramonto da Mehtab Bagh o da una terrazza di Taj Ganj',
    ],
    doveDormire: 'Taj Ganj e Fatehabad Road, a distanza di passeggiata dall\'ingresso est del Taj.',
    doveMangiare: 'Cucina mughlai (biryani, korma, kebab) e il petha, il dolce di zucca candita della città.',
    comeArrivare:
      'Da Delhi in treno (Gatimaan Express o Vande Bharat, 1 ora e 40 minuti-2 ore) o in auto sull\'autostrada Yamuna Expressway (3-4 ore).',
    comeSpostarsi: 'Tuk-tuk elettrici vicino al Taj (le auto a benzina non possono avvicinarsi), auto con autista per Fatehpur Sikri.',
    periodoMigliore: 'ottobre-marzo; tra dicembre e gennaio la nebbia può coprire il Taj all\'alba per un paio d\'ore.',
    costi:
      'Taj Mahal circa 1.100 rupie per gli stranieri, più 200 per l\'interno del mausoleo; Forte di Agra circa 650; Fatehpur Sikri circa 600 (indicativo, ottobre 2026). Ingresso gratuito sotto i 15 anni.',
    erroriDaEvitare: [
      'Arrivare di venerdì: il Taj Mahal è chiuso',
      'Portare borse grandi, cibo, treppiedi o droni: non si entra e il deposito fa perdere tempo',
      'Affidarsi alle guide che si offrono ai cancelli senza tesserino',
    ],
    luoghi: [
      {
        nome: "Taj Mahal",
        testo: "Il mausoleo di marmo bianco che Shah Jahan fece costruire per la moglie Mumtaz Mahal, morta nel 1631. La simmetria è totale: giardino, vasche, moschea e foresteria si specchiano ai lati. Da vicino il marmo è intarsiato di pietre dure.",
        come: "Si arriva in tuk-tuk elettrico o in golf cart dai parcheggi, perché le auto non possono avvicinarsi. Due ingressi principali, est e ovest; biglietto online sul portale ufficiale e controlli di sicurezza separati per uomini e donne. Le guide autorizzate hanno il tesserino.",
        quando: "Da mezz'ora prima dell'alba a mezz'ora prima del tramonto. Chiuso il venerdì. Visita notturna cinque notti al mese intorno alla luna piena, dalle 20 a mezzanotte, a gruppi di 50 persone per mezz'ora.",
        tempo: "2-3 ore",
        costo: "1.100 rupie per gli stranieri, più 200 per l'interno del mausoleo; 50 rupie di sconto online; gratis sotto i 15 anni (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Noi l'abbiamo visto due volte, al tramonto e all'alba del giorno dopo, e ogni ingresso vuole il suo biglietto. Ai controlli ci sono file: portate il minimo indispensabile e, se potete, niente zainetti, per velocizzare tutto."
      },
      {
        nome: "Forte di Agra",
        testo: "La cittadella in arenaria rossa di Akbar, poi ampliata con i padiglioni di marmo di Shah Jahan, che vi passò gli ultimi anni prigioniero del figlio. Dal Musamman Burj si vede il Taj lungo il fiume. È patrimonio UNESCO.",
        come: "Ingresso dall'Amar Singh Gate, a 2,5 chilometri dal Taj, in tuk-tuk. Una guida autorizzata aiuta a capire chi ha costruito cosa.",
        quando: "Tutti i giorni dall'alba al tramonto. Bene la mattina o il primo pomeriggio prima del Taj.",
        tempo: "2 ore",
        costo: "650 rupie per gli stranieri, 600 il venerdì (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Il venerdì, con il Taj chiuso, è il giorno giusto per il forte: costa un po' meno."
      },
      {
        nome: "Itimad-ud-Daulah",
        testo: "La tomba che Nur Jahan fece costruire per il padre tra il 1622 e il 1628, sulla riva opposta della Yamuna. È la prima grande opera moghul in marmo intarsiato di pietre dure, e per questo la chiamano «piccolo Taj».",
        come: "In tuk-tuk dal Forte attraversando il ponte, circa 20 minuti. Si visita da soli.",
        quando: "Dall'alba al tramonto, aperto anche il venerdì. Poca gente a qualsiasi ora.",
        tempo: "45 minuti",
        costo: "310 rupie per gli stranieri, 300 il venerdì (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Guardare da vicino gli intarsi: è il laboratorio dove sono state provate le decorazioni del Taj."
      },
      {
        nome: "Mehtab Bagh",
        testo: "Il giardino moghul sulla riva nord della Yamuna, allineato esattamente con il Taj. Da qui il mausoleo si vede di fronte, oltre il fiume, senza folla.",
        come: "In tuk-tuk dall'Itimad-ud-Daulah, 15 minuti. Il belvedere sul fiume è in fondo al giardino.",
        quando: "Il tramonto, e anche il venerdì, quando il Taj è chiuso.",
        tempo: "1 ora",
        costo: "300 rupie per gli stranieri (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Se il vostro giorno ad Agra cade di venerdì, il Taj si guarda da qui."
      },
      {
        nome: "Fatehpur Sikri",
        testo: "La capitale che Akbar costruì tra il 1571 e il 1585 e abbandonò poco dopo. Palazzi, cortili e la grande moschea con la Buland Darwaza sono rimasti quasi intatti.",
        come: "A circa 40 chilometri, un'ora d'auto, sulla strada per Jaipur o Ranthambore. Il complesso reale ha il biglietto; la moschea è gratuita e si entra scalzi.",
        quando: "Tutti i giorni dall'alba al tramonto. Mattina, prima che il cortile di arenaria si scaldi.",
        tempo: "2 ore",
        costo: "610 rupie per gli stranieri, 600 il venerdì (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Nel cortile della moschea si viene avvicinati da venditori e finte guide: dite subito di no e proseguite."
      },
      {
        nome: "Tomba di Akbar a Sikandra",
        testo: "Il mausoleo dell'imperatore Akbar, a 10 chilometri dal centro, con una porta monumentale intarsiata e un parco dove pascolano antilopi e cervi.",
        come: "In auto o tuk-tuk verso nord, sulla strada per Delhi. Si visita da soli.",
        quando: "Dall'alba al tramonto, aperta anche il venerdì.",
        tempo: "1 ora",
        costo: "310 rupie per gli stranieri, 300 il venerdì (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Una sosta comoda arrivando da Delhi in auto, prima di entrare in città."
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
      }
    ],
    zone: [
      {
        nome: "Taj Ganj",
        perChi: "chi vuole il Taj a piedi",
        testo: "I vicoli a sud del Taj, a 5-10 minuti dai cancelli: guesthouse economiche e terrazze con vista sulla cupola. Rumoroso, stretto e pieno di procacciatori."
      },
      {
        nome: "Fatehabad Road",
        perChi: "fascia media e alta",
        testo: "Il viale degli hotel di catena e di lusso, a 1-2 chilometri dall'ingresso est. Più tranquillo e ordinato, serve un tuk-tuk per tutto."
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
      "Cibo, droni e treppiedi senza permesso non entrano al Taj, e il deposito fa perdere tempo.",
      "Tra dicembre e gennaio la nebbia può coprire il Taj all'alba per un paio d'ore."
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
    comeArrivare: 'Da Agra in auto in 5-6 ore con Fatehpur Sikri; da Delhi in treno (circa 4-5 ore) o in aereo.',
    comeSpostarsi: 'Tuk-tuk, Uber e Ola, autista per Amber e Nahargarh.',
    periodoMigliore: 'ottobre-marzo.',
    costi:
      'Amber 1.000 rupie per gli stranieri dal 1° gennaio 2026 (revisione delle tariffe statali); City Palace con tariffe proprie sul sito ufficiale; biglietto composito per Amber, Nahargarh, Hawa Mahal, Albert Hall e Jantar Mantar valido due giorni.',
    erroriDaEvitare: [
      'Credere alla proposta di comprare gemme da rivendere in Italia',
      'Salire ad Amber a dorso d\'elefante',
      'Visitare Amber a mezzogiorno, con il caldo e i gruppi',
    ],
    luoghi: [
      {
        nome: "Forte di Amber",
        testo: "Il palazzo-fortezza dei Kachwaha, sulle colline a 11 chilometri dalla città, con le mura che scendono fino al lago Maota. Dentro, cortili e sale tra cui lo Sheesh Mahal, la sala degli specchi. È patrimonio UNESCO tra i forti di collina del Rajasthan.",
        come: "Con l'autista o Uber fino ai piedi del forte, poi la rampa a piedi in 15-20 minuti, oppure in jeep. Una guida autorizzata o l'audioguida aiutano a orientarsi tra i cortili.",
        quando: "All'apertura del mattino, prima dei pullman e del caldo. La sera c'è lo spettacolo di luci e suoni.",
        tempo: "2-3 ore",
        costo: "1.000 rupie per gli stranieri secondo la revisione statale in vigore dal 1° gennaio 2026",
        url: "https://obms-tourist.rajasthan.gov.in/",
        consiglio: "Dentro il forte c'è il ristorante 1135 AD: noi ci siamo tornati per cena, molto buono e in una location super suggestiva. Alla fine ci hanno invitati a vedere la sala privata dei maharaja, all'ultimo piano, dove cenano ancora e accolgono le persone importanti."
      },
      {
        nome: "Hawa Mahal",
        testo: "Il Palazzo dei venti, costruito nel 1799: una facciata rosa di cinque piani con centinaia di finestrelle a grata, da cui le donne di corte guardavano la strada senza essere viste. Dietro la facciata è uno schermo sottile.",
        come: "Nella città vecchia, su Badi Chaupar. L'ingresso è sul retro; la facciata si guarda dalla strada o dalle terrazze dei caffè di fronte.",
        quando: "Mattina presto: la facciata guarda a est e prende il primo sole.",
        tempo: "45 minuti",
        url: "https://obms-tourist.rajasthan.gov.in/",
        consiglio: "La foto migliore è da una terrazza dall'altra parte della strada, con un chai, prima delle 9."
      },
      {
        nome: "City Palace",
        testo: "La residenza della famiglia reale di Jaipur, ancora abitata in parte: cortili, porte dipinte con i pavoni, armerie e collezioni di tessuti. Il Chandra Mahal, dove vive la famiglia, si visita solo con il Royal Tour.",
        come: "Nel cuore della città vecchia, accanto al Jantar Mantar. Biglietti alle porte 1 e 2; il Royal Tour si compra solo in biglietteria.",
        quando: "Tutti i giorni dalle 9.30 alle 18.30, chiuso solo il secondo giorno di Holi. La galleria dei tessuti del Mubarak Mahal è chiusa per restauro dal marzo 2026.",
        tempo: "1 ora e mezza-2 ore",
        url: "https://citypalace.org/visit",
        consiglio: "Abbinarlo al Jantar Mantar, che è a due passi: si fanno entrambi nello stesso pomeriggio."
      },
      {
        nome: "Jantar Mantar",
        testo: "L'osservatorio astronomico costruito da Jai Singh II nel Settecento, con strumenti di pietra giganti. La meridiana del Samrat Yantra è alta 27 metri e segna l'ora con una precisione di pochi secondi. È patrimonio UNESCO.",
        come: "Accanto al City Palace. Senza spiegazioni gli strumenti sembrano sculture: meglio una guida o l'audioguida.",
        quando: "Di giorno con il sole, che serve a vedere come funzionano le meridiane.",
        tempo: "1 ora",
        url: "https://obms-tourist.rajasthan.gov.in/",
        consiglio: "Andarci a metà giornata: è l'unico posto di Jaipur dove il sole alto aiuta."
      },
      {
        nome: "Jal Mahal e Panna Meena ka Kund",
        testo: "Il Jal Mahal è un palazzo che sembra galleggiare sul lago Man Sagar, sulla strada di Amber; non si visita, si guarda dalla passeggiata. Vicino al forte c'è Panna Meena ka Kund, un pozzo a gradini del Seicento con le scalinate incrociate.",
        come: "Soste lungo la strada per Amber, con l'autista. Il pozzo è a 10 minuti a piedi dal parcheggio del forte.",
        quando: "Il pozzo al mattino, con la luce radente sulle scale. Il Jal Mahal anche al tramonto.",
        tempo: "1 ora in tutto",
        costo: "gratuiti",
        consiglio: "Sui gradini del pozzo non si può più scendere: le foto si fanno dal bordo."
      },
      {
        nome: "Forte di Nahargarh",
        testo: "Il forte sulla cresta sopra la città, costruito nel 1734. Dalle mura si vede tutta Jaipur, rosa e polverosa, che si accende al tramonto.",
        come: "In auto con l'autista lungo la strada di cresta, circa 40 minuti dal centro. Dentro c'è il palazzo Madhavendra con gli appartamenti delle regine.",
        quando: "Il tardo pomeriggio fino al tramonto.",
        tempo: "1 ora e mezza",
        url: "https://obms-tourist.rajasthan.gov.in/",
        consiglio: "Non scendere a piedi al buio: si rientra in auto."
      },
      {
        nome: "Albert Hall Museum",
        testo: "Il museo più antico del Rajasthan, in un edificio indo-saraceno del 1887 al centro dei giardini Ram Niwas. Raccoglie armi, tappeti, miniature e una mummia egizia.",
        come: "Appena fuori dalla città vecchia, in tuk-tuk. Il percorso è breve e ben segnalato.",
        quando: "Di giorno per il museo; la sera l'edificio è illuminato.",
        tempo: "1 ora",
        url: "https://obms-tourist.rajasthan.gov.in/",
        consiglio: "È nel biglietto composito con Amber, Hawa Mahal, Jantar Mantar e Nahargarh: conviene se si vedono almeno tre di questi."
      },
      {
        nome: "I bazar della città vecchia",
        testo: "Jaipur è la città migliore del Rajasthan per comprare: Johari Bazar per gioielli e tessuti, Bapu Bazar per le scarpe ricamate (jutti) e le stoffe stampate a blocchi, Tripolia per i braccialetti di lacca.",
        come: "A piedi sotto i portici della città vecchia. Per vedere la stampa a blocchi si va nei laboratori di Sanganer o Bagru, fuori città.",
        quando: "Tarda mattina, quando i negozi aprono e prima del caldo.",
        tempo: "mezza giornata",
        consiglio: "Trattare con calma e non comprare mai pietre «da rivendere in Italia»."
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
      }
    ],
    zone: [
      {
        nome: "Città vecchia (Pink City)",
        perChi: "chi vuole i monumenti a piedi",
        testo: "Haveli trasformate in hotel dentro le mura, a pochi minuti da Hawa Mahal e City Palace. Atmosfera unica, ma traffico, clacson e strade affollate fino a sera."
      },
      {
        nome: "Bani Park e Civil Lines",
        perChi: "calma e hotel heritage",
        testo: "Quartieri residenziali appena a ovest delle mura, con molti hotel heritage e giardini. Si va in città vecchia in 10-15 minuti di tuk-tuk."
      },
      {
        nome: "C-Scheme e MI Road",
        perChi: "ristoranti e comodità",
        testo: "Il centro moderno, con caffè, ristoranti e hotel di catena. Comodo e pulito, meno caratteristico."
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
        testo: "Frittella ripiena di cipolla speziata, la colazione di Jaipur. Le botteghe storiche, come Rawat vicino alla stazione, la friggono dall'alba."
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
    introduzione:
      'Uno dei parchi delle tigri più famosi dell\'India, tra Agra e Jaipur: foresta secca, laghi e rovine, con un forte del X secolo su una rupe dentro il parco. Si visita solo con i safari ufficiali, in jeep o in camion scoperto.',
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
      'ottobre-giugno; le zone centrali (1-5) chiudono con il monsone, dal 1° luglio al 30 settembre. Da marzo a giugno fa caldo, ma gli animali si vedono di più intorno all\'acqua.',
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
        quando: "Due turni al giorno, al mattino presto e nel pomeriggio, con orari che cambiano con la stagione. Le zone 1-5 chiudono dal 1° luglio al 30 settembre. Da marzo a giugno fa caldo ma gli animali si vedono vicino all'acqua.",
        tempo: "circa 3 ore e mezza per safari; almeno due safari",
        consiglio: "Noi ci siamo mossi tardi e abbiamo fatto il canter, ma siamo stati fortunati lo stesso: 3 tigri in un solo safari del mattino, e anche due orsetti che correvano. Se volete la gypsy prenotate con largo anticipo, e fate sempre almeno due safari: la zona non si sceglie, è assegnata a caso."
      },
      {
        nome: "Forte di Ranthambore",
        testo: "Un forte del X secolo su una rupe dentro il parco, con mura, cisterne e il tempio di Trinetra Ganesh, meta di pellegrinaggio. È patrimonio UNESCO tra i forti di collina del Rajasthan.",
        come: "Si sale dalla porta del parco con l'auto o il tuk-tuk, poi a piedi per le scalinate. Non serve un safari.",
        quando: "La mattina, tra un safari e l'altro. Il mercoledì il tempio di Ganesh è affollato.",
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
        testo: "La strada di 10 chilometri tra Sawai Madhopur e la porta del parco, con lodge e resort in ogni fascia. Molti organizzano il ritiro per i safari; si dorme tranquilli, ma intorno non c'è nulla."
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
    imageAlt: 'Il parco nazionale di Ranthambore',
  },
  {
    slug: 'pushkar',
    paeseSlug: 'india',
    ordine: 5,
    nome: 'Pushkar',
    tipologia: ['città santa', 'lago', 'atmosfera'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'Una piccola città santa attorno a un lago con 52 ghat, dove si trova uno dei pochissimi templi dedicati a Brahma in India. Vegetariana per tradizione: niente carne, niente uova e niente alcol.',
    percheAndarci:
      'Per rallentare tra Jaipur e Jodhpur: i ghat al tramonto, i canti della sera, i vicoli dei bazar. Intorno alla luna piena di Kartik (ottobre-novembre) ospita la fiera dei cammelli.',
    cosaVedere: ['I ghat sul lago al tramonto', 'Il tempio di Brahma', 'Il tempio di Savitri sulla collina, raggiungibile a piedi o in funivia'],
    cosaFare: ['Salire al tempio di Savitri per l\'alba', 'Assistere all\'aarti serale sui ghat', 'Visitare la fiera dei cammelli, se le date coincidono'],
    doveDormire: 'Guesthouse e piccoli hotel con terrazza sul lago; durante la fiera i prezzi si moltiplicano.',
    doveMangiare: 'Thali vegetariani, malpua (frittelle dolci) e caffè sulle terrazze.',
    comeArrivare: 'Da Jaipur circa 3 ore di auto, o treno fino ad Ajmer e 30 minuti di strada.',
    comeSpostarsi: 'A piedi.',
    periodoMigliore: 'ottobre-marzo; fiera dei cammelli intorno alla luna piena di Kartik.',
    erroriDaEvitare: [
      'Accettare il fiore «in regalo» per la puja sui ghat: segue la richiesta di una donazione',
      'Fotografare i bagnanti sui ghat senza chiedere',
    ],
    luoghi: [
      {
        nome: "Il lago sacro e i ghat",
        testo: "Un piccolo lago circondato da 52 ghat e da case bianche, dove secondo la leggenda cadde un fiore di loto di Brahma. Al tramonto campane e canti riempiono l'acqua.",
        come: "A piedi dal bazar. Scarpe tolte sui ghat; fotografare i bagnanti non è consentito.",
        quando: "L'alba e il tramonto, con l'aarti serale sui ghat principali come Varaha e Gau Ghat.",
        tempo: "2 ore",
        costo: "gratuito",
        consiglio: "Sedersi su una terrazza sul lago al tramonto invece che sui gradini: si guarda la cerimonia senza essere avvicinati."
      },
      {
        nome: "Tempio di Brahma",
        testo: "Uno dei pochissimi templi dell'India dedicati a Brahma, il dio creatore. L'edificio attuale è del Trecento, con la guglia rossa e il pavimento di monete d'argento lasciate dai fedeli.",
        come: "Nel bazar, a piedi. Scarpe, telefoni e borse al deposito; niente oggetti in pelle.",
        quando: "Mattina presto o tardo pomeriggio. Si chiude a metà giornata.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Chi vi offre di accompagnarvi «per la benedizione» chiederà un'offerta: si entra benissimo da soli."
      },
      {
        nome: "Tempio di Savitri",
        testo: "Il tempio della moglie di Brahma, in cima alla collina a sud del lago. Da su si vedono Pushkar, il lago e il deserto.",
        come: "A piedi in 45 minuti-un'ora su una scalinata, oppure in funivia.",
        quando: "All'alba, partendo al buio con una torcia, o al tramonto.",
        tempo: "2 ore con la salita",
        consiglio: "Portare acqua: lungo la scalinata non c'è nulla."
      },
      {
        nome: "La fiera dei cammelli",
        testo: "Una delle fiere di bestiame più grandi del mondo: migliaia di cammelli, mercanti, gare e pellegrini. Si tiene nei giorni prima della luna piena di Kartik, che nel 2026 cade il 24 novembre.",
        come: "Nel terreno delle fiere a ovest della città, a piedi. Le date esatte le pubblica il governo del Rajasthan.",
        quando: "Le prime mattine della fiera, quando c'è il commercio vero dei cammelli; gli ultimi giorni sono dedicati ai pellegrini.",
        tempo: "una mezza giornata",
        consiglio: "Prenotare l'alloggio con mesi di anticipo: in quei giorni i prezzi si moltiplicano."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Arrivo da Jaipur e tramonto sui ghat",
          "Aarti serale",
          "Alba al tempio di Savitri",
          "Tempio di Brahma e bazar, poi partenza per Jodhpur"
        ]
      }
    ],
    zone: [
      {
        nome: "Intorno al lago",
        perChi: "chi vuole i ghat a piedi",
        testo: "Guesthouse e piccoli hotel con terrazza sull'acqua, nel centro pedonale. Campane e altoparlanti dei templi dall'alba."
      },
      {
        nome: "Fuori paese",
        perChi: "calma e piscina",
        testo: "Resort e campi tendati tra i campi, a 2-5 chilometri. Silenziosi, serve un tuk-tuk per il lago."
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
      "Il bhang lassi, con la cannabis, è venduto apertamente ma ha effetti forti e imprevedibili.",
      "Durante la fiera dei cammelli attenzione ai borseggiatori nella folla."
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
    introduzione:
      'La città blu, ai margini del deserto del Thar, dominata dal Forte di Mehrangarh su uno sperone di roccia alto 120 metri.',
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
    comeArrivare: 'Da Jaipur in treno (circa 5 ore) o in auto.',
    comeSpostarsi: 'A piedi e in tuk-tuk; le auto non entrano nei vicoli.',
    periodoMigliore: 'ottobre-marzo; notti fredde a gennaio.',
    costi: 'Mehrangarh circa 600 rupie con audioguida per gli stranieri.',
    erroriDaEvitare: ['Arrivare con trolley pesanti nei vicoli a scalinata', 'Visitare il forte nelle ore centrali'],
    luoghi: [
      {
        nome: "Forte di Mehrangarh",
        testo: "Il forte dei Rathore su uno sperone di roccia di 120 metri sopra la città blu, iniziato nel 1459. Dentro c'è uno dei musei meglio tenuti dell'India, con palanchini, armi, culle reali e sale dipinte. Lo gestisce una fondazione della famiglia reale.",
        come: "In tuk-tuk o a piedi dalla città vecchia, su per una salita ripida di 20 minuti. All'ingresso c'è un ascensore per la parte alta. Il percorso del museo è segnalato.",
        quando: "Il museo è aperto tutti i giorni dalle 9 alle 17. All'apertura, prima del caldo e dei gruppi.",
        tempo: "2-3 ore",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "Prendere l'audioguida: racconta il forte stanza per stanza e si gira con calma senza guida."
      },
      {
        nome: "Jaswant Thada",
        testo: "Il cenotafio di marmo bianco del maharaja Jaswant Singh II, del 1899, su una collina tra il forte e la città. Il marmo è così sottile che in controluce si accende.",
        come: "A un chilometro dal forte, a piedi o in tuk-tuk. Ha un biglietto suo.",
        quando: "Tutti i giorni dalle 9 alle 17. Il tardo pomeriggio, con la vista sul forte.",
        tempo: "45 minuti",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "Si abbina al Rao Jodha Desert Rock Park, che è accanto."
      },
      {
        nome: "Rao Jodha Desert Rock Park",
        testo: "Settanta ettari di roccia vulcanica sotto il forte, dove la fondazione di Mehrangarh ha riportato le piante del deserto. Sentieri brevi con viste sulle mura.",
        come: "Ingresso vicino al forte. Sentieri segnati, guide naturaliste su richiesta.",
        quando: "Da ottobre a marzo dalle 8 alle 17.30, da aprile a settembre dalle 7 alle 18.30. Mattina presto per la luce e gli uccelli.",
        tempo: "1-2 ore",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "È il posto più tranquillo di Jodhpur: buono per staccare dopo il forte."
      },
      {
        nome: "La città blu: Brahmpuri e Navchokiya",
        testo: "I vicoli sotto il forte, con le case dipinte d'indaco. Il blu era il colore dei bramini e oggi lo usano molte famiglie. Scale, piazzette, tempietti e bambini che giocano a cricket.",
        come: "A piedi, perdendosi. Le auto non entrano; un tuk-tuk vi lascia all'inizio dei vicoli.",
        quando: "Mattina presto o tardo pomeriggio, con la luce morbida sul blu.",
        tempo: "1-2 ore",
        costo: "gratuito",
        consiglio: "Chiedere sempre prima di fotografare le persone sulle porte di casa."
      },
      {
        nome: "Toorji ka Jhalra e il Ghanta Ghar",
        testo: "Un pozzo a gradini del Settecento in arenaria rossa, restaurato e circondato da caffè, a cinque minuti dalla torre dell'orologio. Intorno al Ghanta Ghar c'è il mercato di Sardar, con spezie, tessuti e stoviglie.",
        come: "A piedi nella città vecchia.",
        quando: "Il pozzo al mattino; il mercato dal tardo mattino alla sera.",
        tempo: "1-2 ore",
        costo: "gratuito",
        consiglio: "La sera, con il pozzo illuminato e il mercato aperto, è il momento migliore."
      },
      {
        nome: "Umaid Bhawan Palace",
        testo: "Il palazzo art déco finito nel 1943, oggi in parte hotel di lusso e in parte residenza della famiglia reale. Un'ala è un piccolo museo con orologi e auto d'epoca.",
        come: "A 4 chilometri dalla città vecchia, in tuk-tuk. Il museo ha ingresso separato dall'hotel.",
        quando: "Di giorno; si abbina bene al pomeriggio.",
        tempo: "1 ora",
        consiglio: "Se il tempo è poco, si può saltare: Mehrangarh e i vicoli valgono di più."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mehrangarh all'apertura",
          "Jaswant Thada e Rao Jodha Park",
          "Pranzo con mirchi bada al Ghanta Ghar",
          "Vicoli blu nel pomeriggio",
          "Toorji ka Jhalra la sera"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Mehrangarh, Jaswant Thada, Rao Jodha Park",
          "Giorno 2: vicoli di Brahmpuri e Navchokiya al mattino",
          "Umaid Bhawan nel pomeriggio",
          "Mercato di Sardar e tramonto da una terrazza sotto il forte"
        ]
      }
    ],
    zone: [
      {
        nome: "Sotto il forte (Navchokiya, Brahmpuri)",
        perChi: "chi vuole le terrazze con vista",
        testo: "Haveli e guesthouse nei vicoli blu, con terrazze sul forte. Atmosfera bellissima, ma scale ripide e niente auto fino alla porta."
      },
      {
        nome: "Ghanta Ghar",
        perChi: "chi vuole tutto a piedi",
        testo: "Intorno alla torre dell'orologio: mercato, ristoranti e tuk-tuk sotto casa. Rumoroso fino a tardi."
      },
      {
        nome: "Ratanada e la città nuova",
        perChi: "hotel heritage con giardino",
        testo: "Ex residenze nobiliari e hotel con piscina a 3-5 chilometri dalla città vecchia. Tranquilli, serve sempre un tuk-tuk."
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
    introduzione:
      'La città d\'oro, costruita in arenaria gialla nel deserto del Thar a un centinaio di chilometri dal confine pakistano, con uno dei pochi forti ancora abitati al mondo.',
    percheAndarci:
      'Per il forte abitato, le haveli scolpite come merletti e una notte tra le dune, che è l\'esperienza di deserto più semplice da organizzare in India.',
    cosaVedere: ['Il Forte di Jaisalmer e i suoi templi giainisti', 'Le haveli di Patwon e Nathmal', 'Il lago di Gadisar all\'alba', 'Le dune di Sam o di Khuri'],
    cosaFare: ['Una notte in campo tendato nel deserto con giro in cammello al tramonto', 'Il tramonto dai bastioni del forte'],
    doveDormire: 'Hotel nelle haveli della città sotto il forte; campi tendati nel deserto per una notte.',
    doveMangiare: 'Ker sangri, dal baati e i dolci di Jaisalmer.',
    comeArrivare: 'Da Jodhpur circa 5 ore di auto o di treno; voli stagionali da Delhi e Mumbai.',
    comeSpostarsi: 'A piedi in città, jeep per le dune.',
    periodoMigliore: 'novembre-febbraio; da aprile il caldo è estremo.',
    erroriDaEvitare: [
      'Scegliere il campo nel deserto più economico: gli standard di igiene e il trattamento dei cammelli variano molto',
      'Avvicinarsi alle zone di confine, soggette a restrizioni',
    ],
    luoghi: [
      {
        nome: "Il Forte di Jaisalmer",
        testo: "Il forte d'arenaria gialla del 1156, uno dei pochi al mondo ancora abitato: dentro le mura vivono qualche migliaio di persone tra case, negozi, templi e hotel. È patrimonio UNESCO tra i forti di collina del Rajasthan.",
        come: "Si entra a piedi dalla porta principale e si gira liberamente nei vicoli. A pagamento ci sono il palazzo del maharawal (Raj Mahal) e i templi giainisti.",
        quando: "Mattina per i templi giainisti, aperti ai visitatori solo nelle prime ore. Il tramonto dai bastioni.",
        tempo: "mezza giornata",
        consiglio: "Dormire fuori dalle mura e visitarlo di giorno: il peso degli scarichi degli hotel danneggia le fondamenta del forte."
      },
      {
        nome: "Le haveli di Patwon e di Nathmal",
        testo: "Palazzi di mercanti dell'Ottocento con le facciate scolpite come merletti di pietra. La Patwon ki Haveli è in realtà un gruppo di cinque case costruite da una famiglia di commercianti; una è un museo.",
        come: "Nella città sotto il forte, a 10 minuti a piedi. Ingresso a pagamento per la parte visitabile.",
        quando: "Mattina, prima che i vicoli si riempiano.",
        tempo: "1 ora",
        consiglio: "Le facciate si guardano bene anche gratis dalla strada; dentro si entra soprattutto per le terrazze."
      },
      {
        nome: "Il lago di Gadisar",
        testo: "Il bacino del Trecento che dava acqua alla città, con padiglioni e templi sull'acqua e una porta scolpita all'ingresso.",
        come: "A un chilometro e mezzo dal forte, a piedi o in tuk-tuk. Ci sono barche a remi e a pedali.",
        quando: "L'alba, quando l'acqua è ferma e ci sono solo gli uccelli.",
        tempo: "1 ora",
        costo: "accesso gratuito; barche a pagamento",
        consiglio: "Arrivare prima del sole e restare fino a quando illumina il forte in lontananza."
      },
      {
        nome: "Le dune di Sam e di Khuri",
        testo: "Le dune del Thar a 40-50 chilometri dalla città, dove si arriva in cammello al tramonto e si dorme in campi tendati. Sam è più grande e affollata; Khuri è più piccola e tranquilla.",
        come: "In jeep con il campo, che di solito organizza transfer, cammello, cena e musica. Il bagaglio grande resta in hotel a Jaisalmer.",
        quando: "Da novembre a febbraio, con notti fredde. Da aprile il caldo è estremo.",
        tempo: "una notte",
        consiglio: "Scegliere un campo con recensioni recenti su igiene e cura dei cammelli, anche se costa di più."
      },
      {
        nome: "Bada Bagh",
        testo: "Un giardino di cenotafi dei sovrani di Jaisalmer, con decine di padiglioni di arenaria su una collina, a 6 chilometri dalla città. Intorno ci sono le pale eoliche del deserto.",
        come: "In auto o tuk-tuk, anche sulla strada per le dune.",
        quando: "Al tramonto o all'alba, quando l'arenaria diventa arancione.",
        tempo: "45 minuti",
        consiglio: "Si abbina bene al villaggio abbandonato di Kuldhara, sulla strada per Khuri."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Forte e templi giainisti al mattino",
          "Haveli di Patwon",
          "Pomeriggio verso le dune, cammello al tramonto e notte nel campo"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: arrivo da Jodhpur, pomeriggio alle dune e notte nel campo",
          "Giorno 2: rientro, forte e templi giainisti",
          "Haveli di Patwon e Nathmal",
          "Tramonto dai bastioni o a Gadisar"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "I due giorni sopra",
          "Giorno 3: alba a Gadisar",
          "Bada Bagh e Kuldhara",
          "Ultima sera su una terrazza davanti al forte illuminato"
        ]
      }
    ],
    zone: [
      {
        nome: "Sotto il forte",
        perChi: "chi vuole il forte a piedi",
        testo: "Hotel nelle haveli dei vicoli intorno al forte, con terrazze vista mura. Comodi e meno dannosi per il monumento rispetto agli alberghi dentro le mura."
      },
      {
        nome: "Dentro il forte",
        perChi: "chi vuole l'atmosfera",
        testo: "Guesthouse dentro le mura: atmosfera unica, ma vicoli stretti, poca acqua e problemi di conservazione del forte."
      },
      {
        nome: "Campi nel deserto",
        perChi: "una notte",
        testo: "Campi tendati a Sam o Khuri, dai più spartani alle tende di lusso con bagno. Si va per una notte, non per base."
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
      "Jaisalmer è a un centinaio di chilometri dal Pakistan: le zone di confine hanno restrizioni e dopo le tensioni del maggio 2025 conviene controllare Viaggiare Sicuri prima di partire.",
      "Da aprile a giugno le temperature superano spesso i 45 °C: serve acqua sempre."
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
    comeArrivare: 'Da Jodhpur in auto (circa 5 ore con Ranakpur); aeroporto con voli per Delhi, Mumbai e Jaipur.',
    comeSpostarsi: 'A piedi e in tuk-tuk; barche sul lago.',
    periodoMigliore: 'ottobre-marzo; dopo il monsone i laghi sono pieni.',
    costi: 'City Palace circa 400 rupie; Ranakpur aperto ai non giainisti circa dalle 12 alle 17.',
    erroriDaEvitare: ['Arrivare a Ranakpur la mattina presto: i non giainisti entrano solo da mezzogiorno', 'Indossare pelle a Ranakpur'],
    luoghi: [
      {
        nome: "City Palace",
        testo: "Il palazzo dei Maharana di Mewar, cresciuto in quattro secoli sulla riva del lago Pichola. Cortili dei pavoni, sale di specchi, balconi sul lago; una parte è museo, un'altra è ancora della famiglia reale.",
        come: "Ingresso dalla Badi Pol, a piedi dalla città vecchia. Biglietti anche online sul sito della fondazione; guida o audioguida utili.",
        quando: "All'apertura del mattino, prima dei gruppi.",
        tempo: "2-3 ore",
        url: "https://www.eternalmewar.in/",
        consiglio: "Fare il palazzo al mattino e la barca sul Pichola nel pomeriggio, dallo stesso molo."
      },
      {
        nome: "Il lago Pichola in barca",
        testo: "Il lago artificiale del Trecento, con il Lake Palace (oggi hotel) e lo Jag Mandir sulle isole. Dall'acqua si vede tutta la facciata del City Palace.",
        come: "Le barche partono dal molo del City Palace e da alcuni ghat; il giro classico ferma allo Jag Mandir.",
        quando: "Il tardo pomeriggio, con il sole sui palazzi; al tramonto costa di più.",
        tempo: "1 ora",
        consiglio: "Chiedere se il giro comprende la sosta allo Jag Mandir: non tutti la fanno."
      },
      {
        nome: "Tempio di Jagdish",
        testo: "Il tempio di Vishnu del 1651 a pochi passi dal palazzo, su un'alta scalinata, con le pareti fitte di sculture. È un tempio vivo, con canti e offerte tutto il giorno.",
        come: "A piedi dalla Badi Pol. Scarpe all'ingresso.",
        quando: "Mattina presto e sera, durante le cerimonie.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Sedersi un momento sui gradini durante l'aarti della sera."
      },
      {
        nome: "Bagore ki Haveli",
        testo: "Una casa nobiliare del Settecento su Gangaur Ghat, oggi museo. La sera ospita lo spettacolo Dharohar di danze e musiche del Rajasthan.",
        come: "A piedi da Lal Ghat. Biglietti per lo spettacolo alla cassa, conviene arrivare presto.",
        quando: "La sera, per lo spettacolo di un'ora.",
        tempo: "1-2 ore",
        consiglio: "Arrivare mezz'ora prima per un posto in prima fila."
      },
      {
        nome: "Sajjangarh, il Palazzo dei monsoni",
        testo: "Un palazzo bianco dell'Ottocento su una collina a ovest della città, dentro un piccolo santuario naturale. Da lassù si vedono i laghi e le colline dell'Aravalli.",
        come: "In auto o tuk-tuk fino alla porta del santuario, poi con i mezzi interni fino in cima.",
        quando: "Al tramonto.",
        tempo: "1 ora e mezza",
        consiglio: "Si vede meglio il panorama che il palazzo: si va per il tramonto."
      },
      {
        nome: "Ranakpur e Kumbhalgarh",
        testo: "Lungo la strada da Jodhpur. Ranakpur è un tempio giainista del Quattrocento in marmo bianco con 1.444 colonne, tutte diverse. Kumbhalgarh è un forte con 36 chilometri di mura sulle colline.",
        come: "Con l'autista, come sosta tra Jodhpur e Udaipur (circa 5 ore in tutto). A Ranakpur audioguida disponibile.",
        quando: "Ranakpur è aperto ai non giainisti circa da mezzogiorno alle 17.",
        tempo: "1 ora e mezza a Ranakpur, 2 ore a Kumbhalgarh",
        consiglio: "Niente pelle a Ranakpur: cinture, borse e portafogli restano in auto."
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
      }
    ],
    zone: [
      {
        nome: "Lal Ghat e Gangaur Ghat",
        perChi: "budget e fascia media",
        testo: "Guesthouse con terrazza nei vicoli dietro il City Palace, a piedi da tutto. Strade strette e motorini, ma è il cuore della città vecchia."
      },
      {
        nome: "Hanuman Ghat e Ambrai",
        perChi: "chi vuole la vista sul palazzo",
        testo: "Sulla riva opposta del Pichola: dalle terrazze si vede il City Palace di fronte. Più tranquilla, si attraversa il ponte a piedi."
      },
      {
        nome: "Lago Fateh Sagar",
        perChi: "hotel con giardino e piscina",
        testo: "Più a nord, lungo un lago con la passeggiata. Più spazio e calma, serve un tuk-tuk per la città vecchia."
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
      "Le scimmie sulle terrazze sul lago rubano cibo e occhiali."
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
      'Da Delhi in treno notturno (circa 10-11 ore in cuccetta, come lo Shiv Ganga Express) o con il Vande Bharat diurno (circa 8 ore), oppure in volo (circa 1 ora e mezza, più un\'ora dall\'aeroporto ai ghat).',
    comeSpostarsi: 'A piedi lungo i ghat e nei vicoli, barche sul fiume, e-risciò e tuk-tuk verso la città nuova e Sarnath.',
    periodoMigliore:
      'ottobre-marzo; novembre per Dev Deepawali (il 24 novembre nel 2026). Dicembre-gennaio con nebbia fitta all\'alba. Con il monsone (luglio-settembre) i ghat bassi finiscono sott\'acqua.',
    costi: 'Barca privata un\'ora 800-1.500 rupie; Sarnath circa 300 rupie per gli stranieri, museo a parte e chiuso il venerdì.',
    erroriDaEvitare: [
      'Seguire la «guida» spontanea a Manikarnika che poi chiede soldi per la legna',
      'Fotografare le cremazioni o le famiglie in lutto',
      'Salire su una barca senza aver fissato prezzo e durata',
      'Fare il bagno nel Gange o bere l\'acqua del fiume',
      'Portare telefono e borse al Kashi Vishwanath: non si entra',
    ],
    luoghi: [
      {
        nome: "I ghat all'alba in barca",
        testo: "Ottantaquattro scalinate sul Gange, una dopo l'altra, dove all'alba i pellegrini fanno il bagno rituale, i sacerdoti pregano e i lavandai battono i panni. Dall'acqua si vede tutto il fronte della città.",
        come: "Barca a remi da Assi o da Dashashwamedh, verso nord fino a Manikarnika. Prezzo e durata si fissano prima di salire.",
        quando: "Mezz'ora prima del sole. Tra dicembre e gennaio la nebbia può fermare le barche; con il monsone il fiume si alza.",
        tempo: "1-2 ore",
        costo: "barca privata per un'ora circa 800-1.500 rupie, indicativo",
        consiglio: "Varanasi è assolutamente da fare con Shiva. Raramente ho trovato una persona così gentile e disponibile, che conosce così bene il posto e te lo spiega mentre giri: è come fare una passeggiata per le vie del tuo paese con un amico."
      },
      {
        nome: "Il Ganga Aarti a Dashashwamedh",
        testo: "La cerimonia serale per il fiume: sette sacerdoti fanno ruotare grandi lampade a fuoco al ritmo di campane e canti, davanti a migliaia di persone sulle scale e sulle barche.",
        come: "Dal ghat principale, sui gradini, oppure da una barca ferma davanti. Si arriva a piedi da Godowlia, perché le auto si fermano prima.",
        quando: "Ogni sera al tramonto; l'orario cambia con la stagione. Arrivare almeno un'ora prima per un posto sui gradini.",
        tempo: "1 ora e mezza",
        costo: "gratuito dai gradini",
        consiglio: "Tenere borse e telefoni davanti a sé: nella calca i borseggiatori lavorano."
      },
      {
        nome: "Subah-e-Banaras ad Assi Ghat",
        testo: "La cerimonia del mattino al ghat più a sud: canti, musica classica, un piccolo aarti e yoga sui gradini. Più raccolta e meno affollata di quella serale.",
        come: "Ad Assi Ghat, a piedi se si dorme in zona.",
        quando: "Prima dell'alba, ogni giorno.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Si combina bene con la barca: finita la cerimonia si sale e si parte verso nord."
      },
      {
        nome: "Manikarnika Ghat",
        testo: "Il ghat delle cremazioni, dove le pire bruciano giorno e notte. Essere cremati qui, per gli induisti, libera dal ciclo delle rinascite.",
        come: "Si guarda dalla barca o a distanza dai gradini sopra. Niente foto e niente video.",
        quando: "Di giorno; la sera si vede bene dalla barca.",
        tempo: "30 minuti",
        consiglio: "Ignorate chi si presenta come guida o «volontario dell'ospizio»: alla fine chiede soldi per la legna dei poveri."
      },
      {
        nome: "Kashi Vishwanath",
        testo: "Il tempio d'oro di Shiva, uno dei più sacri dell'India. Il corridoio del Kashi Vishwanath Dham, aperto nel 2021, lo collega direttamente al fiume.",
        come: "Telefoni, borse e oggetti di cuoio non entrano: armadietti all'esterno. Code lunghe; esiste un ingresso a pagamento più rapido, prenotabile sul sito ufficiale.",
        quando: "Mattina presto. Il lunedì, giorno di Shiva, e le feste sono molto affollati.",
        tempo: "1-3 ore secondo la coda",
        costo: "ingresso libero",
        url: "https://shrikashivishwanath.org/",
        consiglio: "Vestiti lunghi e niente in tasca: ai controlli si passa più in fretta."
      },
      {
        nome: "I vicoli della città vecchia",
        testo: "Il labirinto di vicoli dietro i ghat, con tempietti, mucche, botteghe di dolci, venditori di fiori e i telai della seta di Banaras.",
        come: "A piedi, meglio con una guida la prima volta: Google Maps qui si perde.",
        quando: "Mattina e pomeriggio. Dopo il tramonto è meglio non girarli da soli, soprattutto per le donne.",
        tempo: "mezza giornata",
        consiglio: "La seta va comprata in botteghe consigliate: quella «fatta a mano» spesso è di telaio meccanico."
      },
      {
        nome: "Sarnath",
        testo: "Il luogo dove il Buddha tenne il primo sermone, a 10 chilometri da Varanasi. Ci sono lo stupa di Dhamek, le rovine dei monasteri e un museo con il capitello dei leoni di Ashoka, simbolo dell'India.",
        come: "In tuk-tuk o auto in 30-40 minuti. Il sito archeologico e il museo hanno biglietti separati.",
        quando: "Mattina. Il museo è chiuso il venerdì.",
        tempo: "mezza giornata",
        costo: "sito archeologico circa 300 rupie per gli stranieri (tariffa ASI, 2026); museo a parte",
        url: "https://asi.nic.in/",
        consiglio: "Non andarci di venerdì: senza il museo manca il pezzo più bello."
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
        testo: "Il ghat più a sud, con caffè, guesthouse e la cerimonia del mattino. Un po' più tranquillo; si va a Dashashwamedh in barca o a piedi in 30-40 minuti."
      },
      {
        nome: "Dashashwamedh e Godowlia",
        perChi: "chi vuole stare nel centro",
        testo: "Guesthouse e haveli sul fiume tra i ghat centrali, a due passi dall'aarti e dal Kashi Vishwanath. Affollato e rumoroso a tutte le ore."
      },
      {
        nome: "Cantonment, la città nuova",
        perChi: "chi cerca un hotel di catena",
        testo: "Comoda per stazione e aeroporto, ma a 20-40 minuti dal fiume nel traffico. Ed è il fiume all'alba il motivo per venire."
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
        testo: "Schiuma di latte allo zafferano montata all'aperto nelle notti d'inverno e venduta all'alba. Solo da novembre a febbraio."
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
    visitataPersonalmente: false,
    introduzione:
      'La capitale del Tamil Nadu, ex Madras, porta d\'ingresso aereo al Sud-est dell\'India. Una città grande e calda, con il lungomare di Marina Beach e il quartiere di Mylapore attorno al tempio di Kapaleeshwarar.',
    percheAndarci:
      'Soprattutto come punto di arrivo: Mamallapuram è a un\'ora e mezza di strada. Chi ha mezza giornata vede Mylapore e il Museo statale con i bronzi Chola.',
    cosaVedere: ['Il tempio di Kapaleeshwarar a Mylapore', 'Marina Beach al tramonto', 'I bronzi Chola del Government Museum'],
    cosaFare: ['Un pasto su foglia di banano in un ristorante vegetariano storico', 'Un caffè filtrato in tazza di metallo'],
    comeArrivare: 'Aeroporto internazionale di Chennai, con voli dall\'Italia via Golfo.',
    comeSpostarsi: 'Uber, Ola, metro e tuk-tuk.',
    periodoMigliore: 'dicembre-marzo; ottobre-dicembre è la stagione del monsone di nord-est.',
    erroriDaEvitare: ['Fare il bagno a Marina Beach: correnti pericolose e niente bagnini', 'Programmare la visita tra ottobre e dicembre senza considerare i cicloni'],
    luoghi: [
      {
        nome: "Tempio di Kapaleeshwarar",
        testo: "Il tempio di Shiva del quartiere di Mylapore, con il gopuram dipinto e la grande vasca sacra. Attorno c'è il quartiere tamil più tradizionale della città, con botteghe di fiori, ottone e dolci.",
        come: "In metro o Uber fino a Mylapore. Scarpe al deposito; nei grandi templi del Tamil Nadu dal settembre 2026 anche il telefono va lasciato fuori.",
        quando: "Mattina presto o sera, durante le cerimonie. I templi chiudono a metà giornata.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Girare a piedi le strade intorno alla vasca: il mercato dei fiori è la parte più viva."
      },
      {
        nome: "Government Museum di Egmore",
        testo: "Uno dei musei più antichi dell'India, fondato nel 1851. La galleria dei bronzi raccoglie le statue Chola di Shiva danzante e delle altre divinità, tra le più belle mai fuse.",
        come: "In metro o Uber fino a Egmore. Si visita da soli; il complesso è grande, puntare dritti alla galleria dei bronzi.",
        quando: "Di giorno, nei giorni di apertura del museo.",
        tempo: "1 ora e mezza",
        consiglio: "Se si va poi a Thanjavur e Madurai, qui si capisce cosa si vedrà nei templi."
      },
      {
        nome: "Marina Beach",
        testo: "Una delle spiagge urbane più lunghe del mondo, circa 13 chilometri. Al tramonto si riempie di famiglie, venditori di frittelle e giostre.",
        come: "In Uber o tuk-tuk. La passeggiata corre lungo tutta la spiaggia.",
        quando: "Il tardo pomeriggio e il tramonto, quando il caldo cala.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Si cammina e si mangia, ma il bagno qui non si fa."
      },
      {
        nome: "Fort St. George",
        testo: "La prima fortezza inglese in India, del 1644, oggi sede del governo del Tamil Nadu. Dentro ci sono la chiesa di St. Mary, la più antica chiesa anglicana d'Asia, e un piccolo museo.",
        come: "In Uber vicino al porto. Ai controlli all'ingresso serve un documento.",
        quando: "Mattina, nei giorni feriali.",
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
      "Non fate il bagno a Marina Beach: correnti forti e nessun bagnino.",
      "Tra ottobre e dicembre il monsone di nord-est porta piogge forti e a volte cicloni.",
      "I tuk-tuk raramente usano il tassametro: meglio Uber, Ola o un prezzo fissato prima.",
      "Nei grandi templi del Tamil Nadu dal settembre 2026 i telefoni sono vietati: si lasciano al deposito."
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
    visitataPersonalmente: false,
    introduzione:
      'L\'antico porto dei re Pallava sulla costa del Coromandel, dove tra VII e VIII secolo gli scultori hanno inventato l\'architettura dei templi del Sud: templi scolpiti nella roccia, bassorilievi e il tempio sul mare.',
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
    comeArrivare: 'Dall\'aeroporto di Chennai circa 1 ora e mezza in auto.',
    comeSpostarsi: 'A piedi e in bici; tuk-tuk per i Cinque Ratha.',
    periodoMigliore: 'dicembre-marzo.',
    costi: 'Biglietto ASI unico per Shore Temple e Cinque Ratha circa 600 rupie per gli stranieri.',
    erroriDaEvitare: ['Fare il bagno in mare: correnti forti', 'Visitare i siti a mezzogiorno, sul granito al sole'],
    luoghi: [
      {
        nome: "Shore Temple",
        testo: "Il tempio di granito sulla spiaggia, costruito all'inizio dell'VIII secolo dai re Pallava, eroso dal vento e dal mare. È uno dei primi templi in pietra costruiti del Sud dell'India ed è patrimonio UNESCO.",
        come: "A piedi dal paese, 10 minuti. Biglietto ASI alla biglietteria, valido anche per i Cinque Ratha nello stesso giorno.",
        quando: "Tutti i giorni dalle 6 alle 18. L'alba o il tardo pomeriggio, quando il granito si scalda di luce.",
        tempo: "1 ora",
        costo: "circa 600 rupie per gli stranieri, biglietto unico con i Cinque Ratha (tariffa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Conservare il biglietto: serve per entrare ai Cinque Ratha più tardi."
      },
      {
        nome: "I Cinque Ratha",
        testo: "Cinque templi a forma di carro scolpiti ciascuno da un unico masso di granito nel VII secolo, insieme a un elefante, un leone e un toro di pietra. Sono i prototipi dei templi del Sud.",
        come: "A 1,5 chilometri dal paese, in bici o tuk-tuk. Stesso biglietto dello Shore Temple.",
        quando: "Mattina presto, prima che il sole renda il granito rovente.",
        tempo: "45 minuti",
        costo: "compreso nel biglietto dello Shore Temple",
        url: "https://asi.nic.in/",
        consiglio: "Girare intorno a ogni ratha: ognuno ha uno stile di tetto diverso."
      },
      {
        nome: "La Penitenza di Arjuna",
        testo: "Un bassorilievo all'aperto lungo una trentina di metri, scolpito su due massi: dei, animali, saggi e la discesa del Gange dal cielo, con un elefante a grandezza naturale.",
        come: "Nel centro del paese, a piedi. Accesso libero.",
        quando: "Mattina presto o tardo pomeriggio, con la luce radente che fa risaltare le figure.",
        tempo: "30 minuti",
        costo: "gratuito",
        consiglio: "Cercare il gatto che fa penitenza imitando il saggio, con i topi ai suoi piedi."
      },
      {
        nome: "La palla di burro di Krishna e la collina",
        testo: "Un masso di granito in equilibrio su un pendio, e intorno templi rupestri scolpiti nella roccia come il Varaha e il Mahishasuramardini, con bassorilievi bellissimi. In cima c'è il vecchio faro.",
        come: "A piedi dalla Penitenza di Arjuna, per sentieri sulla collina.",
        quando: "Il tardo pomeriggio fino al tramonto.",
        tempo: "1-2 ore",
        costo: "gratuito, il faro ha un biglietto a parte",
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
          "Giorno 2: gita a Kanchipuram, la città dei templi e della seta, a circa un'ora e mezza",
          "Ritorno e serata nel paese con le botteghe degli scalpellini"
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
        testo: "Resort sulla spiaggia a nord e a sud del paese, a 3-10 chilometri. Comodi per riposare dopo il volo, serve un mezzo per i siti."
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
      "Non fate il bagno in mare: le correnti sono forti e annegamenti avvengono ogni anno.",
      "I biglietti si comprano solo alle biglietterie ASI, non da chi li offre per strada.",
      "Nelle botteghe di sculture i prezzi per gli stranieri partono alti: trattare.",
      "A mezzogiorno il granito al sole è rovente: siti all'alba e al tramonto."
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
    visitataPersonalmente: false,
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
    comeArrivare: 'Da Thanjavur circa 3 ore in auto; aeroporto con voli per Chennai, Bangalore e Mumbai.',
    comeSpostarsi: 'A piedi intorno al tempio, tuk-tuk per il resto.',
    periodoMigliore: 'dicembre-febbraio; da marzo fa molto caldo.',
    costi: 'Meenakshi ingresso libero (santuario interno riservato agli induisti), deposito telefoni a pagamento.',
    erroriDaEvitare: [
      'Entrare con il telefono: dal settembre 2026 è vietato nei grandi templi del Tamil Nadu',
      'Andare al tempio nelle ore centrali, quando è chiuso o quasi vuoto',
    ],
    luoghi: [
      {
        nome: "Tempio di Meenakshi Amman",
        testo: "Un tempio-città con quattordici gopuram coperti di migliaia di statue dipinte, dedicato alla dea Meenakshi e a Shiva. Dentro ci sono la vasca del loto d'oro, il corridoio delle mille colonne e cerimonie a ogni ora.",
        come: "Quattro ingressi, uno per lato. Telefoni e scarpe al deposito; vestiti che coprono spalle e gambe. Il santuario interno è riservato agli induisti.",
        quando: "Aperto la mattina presto e dal pomeriggio alla sera, chiuso a metà giornata. La sera c'è la processione che porta Shiva alla camera di Meenakshi.",
        tempo: "2-3 ore",
        costo: "ingresso libero; deposito telefoni a pagamento",
        url: "https://maduraimeenakshi.hrce.tn.gov.in/",
        consiglio: "Tornarci due volte, al mattino per l'architettura e la sera per le cerimonie."
      },
      {
        nome: "Palazzo Thirumalai Nayak",
        testo: "Il palazzo del re Thirumalai Nayak, del 1636, con un cortile di enormi colonne bianche e archi in stile indo-saraceno. Ne rimane un quarto, ma basta a dare la misura.",
        come: "A 1,5 chilometri dal tempio, a piedi o in tuk-tuk.",
        quando: "Mattina o tardo pomeriggio. La sera c'è uno spettacolo di luci e suoni.",
        tempo: "1 ora",
        consiglio: "Si abbina bene alla mattina, prima di tornare al tempio per la sera."
      },
      {
        nome: "Il mercato dei fiori di Mattuthavani",
        testo: "Il mercato all'ingrosso dei fiori: montagne di gelsomino, calendule e rose vendute a peso per i templi, i matrimoni e le trecce delle donne.",
        come: "Vicino alla stazione dei bus di Mattuthavani, in tuk-tuk.",
        quando: "All'alba, quando arrivano i carichi.",
        tempo: "1 ora",
        costo: "gratuito",
        consiglio: "Andarci presto: a metà mattina la parte più bella è finita."
      },
      {
        nome: "Gandhi Memorial Museum",
        testo: "Un museo sulla lotta per l'indipendenza nel palazzo Tamukkam, con il dhoti macchiato di sangue che Gandhi indossava il giorno in cui fu ucciso.",
        come: "Oltre il fiume Vaigai, in tuk-tuk.",
        quando: "Di giorno.",
        tempo: "1 ora",
        consiglio: "Una pausa tranquilla tra le due visite al tempio."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mercato dei fiori all'alba",
          "Tempio di Meenakshi al mattino",
          "Palazzo Thirumalai Nayak",
          "Jigarthanda nel pomeriggio",
          "Ritorno al tempio per la cerimonia della sera"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Il giorno sopra",
          "Giorno 2: Gandhi Memorial Museum",
          "Botteghe dei sarti e mercati intorno al tempio",
          "Partenza per Munnar nel pomeriggio"
        ]
      }
    ],
    zone: [
      {
        nome: "Intorno al tempio",
        perChi: "chi vuole il Meenakshi a piedi",
        testo: "Hotel semplici e di fascia media nelle strade intorno al tempio, alcuni con terrazza sulle torri. Rumoroso, ma comodissimo per le visite all'alba e la sera."
      },
      {
        nome: "Colline intorno alla città",
        perChi: "calma e piscina",
        testo: "Hotel heritage e resort sulle alture a 5-10 chilometri, con vista sulla città. Serve un'auto per ogni spostamento."
      }
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
        testo: "Tortini di riso al vapore, morbidissimi, con quattro chutney. Le catene locali di idli sono nate qui."
      }
    ],
    attenzioni: [
      "Al Meenakshi e nei grandi templi del Tamil Nadu i telefoni sono vietati dal settembre 2026: si lasciano al deposito.",
      "Chi vi invita a salire su una terrazza «per vedere il tempio dall'alto» spesso vi porta in un negozio di tessuti.",
      "A metà giornata il tempio è chiuso o quasi: programmate le visite al mattino e alla sera.",
      "Da marzo il caldo è molto forte: acqua e cappello."
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
    visitataPersonalmente: false,
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
    comeArrivare: 'Da Madurai circa 5-6 ore, da Kochi circa 4 ore in auto.',
    comeSpostarsi: 'Auto con autista e jeep locali.',
    periodoMigliore: 'settembre-maggio; da giugno ad agosto il monsone porta piogge forti e frane.',
    costi: 'Eravikulam circa 500 rupie per gli stranieri; jeep per Kolukkumalai da concordare.',
    erroriDaEvitare: ['Arrivare a febbraio-marzo contando su Eravikulam, chiuso per le nascite', 'Dormire nel paese, trafficato e rumoroso'],
    luoghi: [
      {
        nome: "Parco nazionale di Eravikulam",
        testo: "Praterie d'altura e foresta sopra i 2.000 metri, dove vive il tahr dei Nilgiri, una capra di montagna che esiste solo nei Ghati Occidentali. Nel parco c'è anche l'Anamudi, la vetta più alta dell'India del Sud.",
        come: "A 15 chilometri da Munnar. Dall'ingresso si sale con i bus del Forest Department fino alla zona di Rajamala, poi un tratto a piedi. Biglietti anche online.",
        quando: "Chiuso ogni anno a febbraio e marzo per le nascite dei tahr. Mattina presto, prima delle nuvole e della coda.",
        tempo: "mezza giornata",
        costo: "500 rupie per gli stranieri (2026)",
        url: "https://www.eravikulam.org/",
        consiglio: "Prenotare online nei fine settimana e nei festivi indiani: i posti finiscono."
      },
      {
        nome: "Museo del tè di KDHP",
        testo: "Il museo del tè nella tenuta di Nallathanni, con le macchine storiche e una piccola fabbrica in funzione dove si vede la lavorazione delle foglie.",
        come: "A 2 chilometri dal paese, in tuk-tuk.",
        quando: "Di giorno, nei giorni di apertura.",
        tempo: "1 ora",
        consiglio: "Assaggiare i tè alla fine e comprarli qui, a prezzo di fabbrica."
      },
      {
        nome: "Kolukkumalai",
        testo: "Una delle piantagioni di tè più alte del mondo, oltre i 2.000 metri, con una fabbrica ancora a lavorazione tradizionale. All'alba le colline escono dalle nuvole.",
        come: "In jeep 4x4 da Suryanelli, circa un'ora di pista sterrata. Le jeep si prenotano con l'hotel.",
        quando: "Partenza verso le 4-5 per arrivare all'alba.",
        tempo: "mezza giornata",
        consiglio: "Fissare con chiarezza cosa comprende il prezzo della jeep: attesa, ingresso alla tenuta e ritorno."
      },
      {
        nome: "Top Station e la diga di Mattupetty",
        testo: "Un belvedere al confine con il Tamil Nadu, a circa 1.700 metri, che guarda le pianure dall'alto. Lungo la strada ci sono la diga di Mattupetty, l'Echo Point e piantagioni a perdita d'occhio.",
        come: "In auto da Munnar, circa un'ora per Top Station con le soste.",
        quando: "Mattina, prima che salga la foschia.",
        tempo: "mezza giornata",
        consiglio: "Nei fine settimana i punti panoramici sono affollati: meglio un giorno feriale."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Eravikulam all'apertura",
          "Museo del tè di KDHP",
          "Passeggiata tra le piantagioni nel pomeriggio"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: alba a Kolukkumalai in jeep, rientro e riposo",
          "Pomeriggio al museo del tè",
          "Giorno 2: Eravikulam al mattino",
          "Mattupetty e Top Station nel pomeriggio"
        ]
      }
    ],
    zone: [
      {
        nome: "Tra le piantagioni (Chithirapuram, Pallivasal)",
        perChi: "chi vuole il silenzio",
        testo: "Homestay e resort sulle colline a 8-15 chilometri dal paese, con vista sulle piantagioni. Silenzio totale, ma serve l'auto e la cena è dove si dorme."
      },
      {
        nome: "Munnar paese",
        perChi: "chi si muove con i mezzi",
        testo: "Hotel economici e ristoranti nel centro, con jeep e tuk-tuk a portata. Trafficato e rumoroso."
      },
      {
        nome: "Chinnakanal e Suryanelli",
        perChi: "chi va a Kolukkumalai",
        testo: "Più lontano, verso est, vicino al lago di Anayirangal. Comodo per l'alba in jeep, isolato per il resto."
      }
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
      "Eravikulam è chiuso a febbraio e marzo per le nascite dei tahr.",
      "Da giugno ad agosto il monsone porta piogge forti, frane e strade chiuse; nelle stagioni umide ci sono le sanguisughe sui sentieri.",
      "Le jeep per Kolukkumalai hanno prezzi molto variabili: fatevi dire tutto prima di partire.",
      "Nei fine settimana e nei festivi indiani arrivano molti turisti da Kerala e Tamil Nadu: traffico e code."
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
    visitataPersonalmente: false,
    introduzione:
      'La rete di canali, lagune e laghi del Kerala che corre parallela al mare tra Alappuzha (Alleppey), Kumarakom e Kollam, con risaie sotto il livello dell\'acqua e villaggi su strisce di terra.',
    percheAndarci:
      'Per una notte su una houseboat di legno e bambù, a guardare la vita dei villaggi dall\'acqua, o per un giro in canoa sui canali più stretti.',
    cosaVedere: ['I canali e le risaie di Kuttanad', 'Il lago Vembanad', 'I villaggi di Kainakary sui canali piccoli'],
    cosaFare: ['Una notte in houseboat (kettuvallam)', 'Un giro in canoa all\'alba sui canali stretti', 'Le gare delle barche-serpente, se si viaggia ad agosto'],
    doveDormire: 'Houseboat, oppure homestay sui canali a Kainakary o Kumarakom.',
    doveMangiare: 'Il karimeen (pearl spot) alla griglia, il curry di pesce e il riso rosso del Kerala, preparati dal cuoco di bordo.',
    comeArrivare: 'Da Kochi circa 1 ora e mezza in auto; da Munnar 4-5 ore.',
    comeSpostarsi: 'In barca.',
    periodoMigliore: 'ottobre-marzo.',
    costi: 'Houseboat per una notte 8.000-15.000 rupie in fascia standard, 15.000-25.000 premium, pasti inclusi; picchi a Natale e Capodanno.',
    erroriDaEvitare: [
      'Prenotare dai procacciatori sui moli senza vedere la barca',
      'Aspettarsi l\'aria condizionata di giorno: spesso funziona solo di notte',
      'Fermarsi ai soli canali principali, pieni di barche',
    ],
    luoghi: [
      {
        nome: "Una notte in houseboat",
        testo: "Il kettuvallam era la barca da carico del riso; oggi è una casa galleggiante di legno e bambù con camere, cuoco ed equipaggio. Si naviga sul lago Vembanad e nei canali di Kuttanad, guardando villaggi, risaie e chiese dall'acqua.",
        come: "Si parte dai moli di Alappuzha o Punnamada. Meglio barche classificate dal Dipartimento del Turismo del Kerala, prenotate prima e viste in foto recenti.",
        quando: "Da ottobre a marzo. Imbarco a metà giornata, sbarco la mattina dopo; la sera la barca si ferma e attracca.",
        tempo: "una notte",
        costo: "8.000-15.000 rupie a notte in fascia standard, 15.000-25.000 premium, pasti inclusi (indicativo)",
        url: "https://www.keralatourism.org/",
        consiglio: "Chiedere un itinerario che lasci i canali principali, dove le barche sono in fila."
      },
      {
        nome: "In canoa sui canali stretti",
        testo: "Le canoe a remi entrano nei canali dove le houseboat non passano: si vedono da vicino le case, le donne che lavano, i bambini che vanno a scuola in barca.",
        come: "Con homestay e piccoli operatori di Kainakary e Alappuzha, con un rematore.",
        quando: "All'alba, quando i canali sono calmi e pieni di uccelli.",
        tempo: "2-3 ore",
        consiglio: "Se si ha un solo giorno, la canoa all'alba dà più della houseboat."
      },
      {
        nome: "Le gare delle barche-serpente",
        testo: "Barche lunghe fino a 40 metri con un centinaio di rematori che cantano in coro. La più famosa è la Nehru Trophy, sul lago Punnamada.",
        come: "Biglietti per le tribune ad Alappuzha.",
        quando: "La Nehru Trophy si corre il secondo sabato di agosto, durante il monsone.",
        tempo: "una giornata",
        consiglio: "Per chi viaggia ad agosto vale il viaggio da sola."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Canoa all'alba sui canali di Kainakary",
          "Pranzo con karimeen e riso rosso",
          "Pomeriggio sul lago Vembanad in barca"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: imbarco in houseboat a mezzogiorno, navigazione e notte a bordo",
          "Giorno 2: sbarco al mattino",
          "Canoa sui canali piccoli",
          "Pomeriggio alla spiaggia di Marari o partenza per Kochi"
        ]
      }
    ],
    zone: [
      {
        nome: "Houseboat",
        perChi: "una notte",
        testo: "La notte a bordo è il motivo del viaggio. Cabine piccole e aria condizionata spesso solo di notte."
      },
      {
        nome: "Kainakary e Kuttanad",
        perChi: "chi vuole i villaggi",
        testo: "Homestay sui canali, raggiungibili in barca. Silenzio, cucina di casa e canoa all'alba, ma lontani da tutto."
      },
      {
        nome: "Kumarakom",
        perChi: "resort con piscina",
        testo: "Sulla sponda est del lago Vembanad, con resort di fascia alta. Comodo e curato, meno vita di villaggio."
      },
      {
        nome: "Spiaggia di Marari",
        perChi: "mare e backwaters",
        testo: "A 12 chilometri da Alappuzha, homestay e resort sulla spiaggia. Buona per alternare canali e mare."
      }
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
        testo: "Le osterie del vino di palma (kallu shappu) servono pesce piccante, tapioca e anatra. Molto locali, spesso solo per uomini."
      },
      {
        nome: "Curry di anatra",
        testo: "Le anatre allevate nelle risaie finiscono in uno stufato al cocco e pepe, un piatto delle backwaters."
      }
    ],
    attenzioni: [
      "I procacciatori sui moli: prenotate solo vedendo la barca o foto recenti, e controllate che sia classificata dal turismo del Kerala.",
      "L'aria condizionata in cabina spesso funziona solo di notte.",
      "I canali principali sono pieni di houseboat in fila: chiedete percorsi secondari.",
      "Zanzare la sera: repellente e maniche lunghe."
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
    visitataPersonalmente: false,
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
    comeArrivare: 'Aeroporto internazionale di Kochi a circa 1 ora e mezza; da Alleppey circa 1 ora e mezza.',
    comeSpostarsi: 'A piedi e in bici, traghetto per Ernakulam.',
    periodoMigliore: 'ottobre-marzo; la Biennale di Kochi si tiene tra dicembre e marzo.',
    costi: 'Kathakali circa 500-600 rupie; ingressi modesti a palazzo e sinagoga.',
    erroriDaEvitare: [
      'Arrivare a Mattancherry di venerdì: palazzo e sinagoga chiusi (la sinagoga anche il sabato)',
      'Comprare spezie e «antichità» senza trattare',
    ],
    luoghi: [
      {
        nome: "Le reti da pesca cinesi",
        testo: "Grandi reti a bilanciere su strutture di legno, manovrate da squadre di pescatori con contrappesi di pietra. Sono il simbolo di Fort Kochi, sul lungomare all'imbocco del porto.",
        come: "A piedi sul lungomare di Vasco da Gama Square.",
        quando: "Il tardo pomeriggio e il tramonto, quando le reti lavorano contro il sole.",
        tempo: "45 minuti",
        costo: "gratuito",
        consiglio: "Al mercato del pesce accanto si compra il pescato e lo cucinano i ristoranti lì dietro."
      },
      {
        nome: "Chiesa di San Francesco",
        testo: "La chiesa europea più antica dell'India, costruita dai portoghesi all'inizio del Cinquecento. Qui fu sepolto Vasco da Gama nel 1524, prima che i resti fossero riportati a Lisbona.",
        come: "Nel centro di Fort Kochi, a piedi. Si entra in silenzio, vestiti coperti.",
        quando: "Di giorno, fuori dagli orari delle funzioni.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        consiglio: "Cercare la lapide originale di Vasco da Gama sul pavimento."
      },
      {
        nome: "Palazzo di Mattancherry",
        testo: "Il palazzo che i portoghesi regalarono al raja di Kochi nel Cinquecento, poi restaurato dagli olandesi. Dentro ci sono affreschi del Ramayana tra i più belli del Kerala.",
        come: "A Mattancherry, 3 chilometri da Fort Kochi, in tuk-tuk o bici.",
        quando: "Chiuso il venerdì.",
        tempo: "1 ora",
        consiglio: "Le sale degli affreschi sono buie: lasciare agli occhi il tempo di abituarsi."
      },
      {
        nome: "La sinagoga Paradesi e Jew Town",
        testo: "La sinagoga del 1568, ancora in uso, con il pavimento di piastrelle cinesi dipinte a mano e lampadari di vetro belga. Intorno, Jew Town è una via di antiquari e negozi di spezie.",
        come: "Accanto al palazzo di Mattancherry, a piedi. Scarpe tolte, spalle e gambe coperte.",
        quando: "Chiusa il venerdì, il sabato e nelle feste ebraiche.",
        tempo: "30 minuti",
        consiglio: "Palazzo e sinagoga si vedono insieme in una mattina, mai di venerdì."
      },
      {
        nome: "I magazzini delle spezie",
        testo: "Lungo Bazaar Road e Jew Town ci sono i vecchi magazzini del pepe e dello zenzero, alcuni ancora attivi, altri diventati gallerie e caffè.",
        come: "A piedi o in bici da Mattancherry verso Fort Kochi.",
        quando: "Mattina, quando si lavora.",
        tempo: "1 ora",
        consiglio: "Per comprare spezie confrontare i prezzi in più negozi: la differenza è grande."
      },
      {
        nome: "Uno spettacolo di kathakali",
        testo: "Il teatro danzato del Kerala, con trucchi elaborati, gonne ampie e storie dei poemi epici raccontate con gesti e occhi. Nei teatri di Fort Kochi si assiste anche al trucco, prima dello spettacolo.",
        come: "Nei centri culturali di Fort Kochi, con biglietto prenotato in giornata.",
        quando: "La sera; il trucco comincia circa un'ora prima.",
        tempo: "2 ore con il trucco",
        consiglio: "Arrivare per il trucco: è metà dello spettacolo."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattancherry: palazzo e sinagoga (non di venerdì)",
          "Jew Town e i magazzini delle spezie",
          "Chiesa di San Francesco",
          "Reti da pesca cinesi al tramonto",
          "Kathakali la sera"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Il giorno sopra",
          "Giorno 2: un corso di cucina keralese al mattino",
          "Gallerie e caffè di Fort Kochi",
          "Traghetto per Ernakulam e ritorno al tramonto"
        ]
      }
    ],
    zone: [
      {
        nome: "Fort Kochi",
        perChi: "chi vuole il quartiere storico",
        testo: "Homestay e hotel heritage nei bungalow coloniali, tutto a piedi. Tranquillo la sera, a un'ora e mezza dall'aeroporto."
      },
      {
        nome: "Mattancherry",
        perChi: "chi vuole il quartiere ebraico",
        testo: "Poche guesthouse vicino al palazzo e alla sinagoga. Vivace di giorno, si svuota la sera."
      },
      {
        nome: "Ernakulam",
        perChi: "chi arriva o parte in treno",
        testo: "La città moderna sulla terraferma, con stazione e hotel di catena. Comoda per i trasporti, si va a Fort Kochi in traghetto."
      }
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
      "Il venerdì palazzo di Mattancherry e sinagoga sono chiusi; la sinagoga anche il sabato.",
      "I tuk-tuk che offrono un giro a pochissimo vi portano nei negozi di spezie e tessuti con commissione.",
      "Spezie e «antichità» di Jew Town: trattare, e diffidare delle antichità certificate.",
      "Zanzare e casi di dengue nella stagione delle piogge: repellente."
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
    visitataPersonalmente: false,
    introduzione:
      'Le rovine di Vijayanagara, capitale di uno dei più grandi imperi dell\'India, distrutta nel 1565, in un paesaggio di massi di granito, risaie e bananeti lungo il fiume Tungabhadra.',
    percheAndarci:
      'Per oltre mille monumenti in un paesaggio che non somiglia a nessun altro, con un villaggio tranquillo e i tramonti dalle colline di roccia.',
    cosaVedere: [
      'Il tempio di Virupaksha, ancora attivo',
      'Il tempio di Vittala e il carro di pietra',
      'Il Centro reale, il recinto delle regine con il Lotus Mahal e le stalle degli elefanti',
      'Il bazar di Hampi e la collina di Hemakuta',
      'La collina di Matanga al tramonto',
    ],
    cosaFare: ['Girare in motorino o in bici tra i gruppi di monumenti', 'Un giro in coracle sul Tungabhadra', 'Arrampicata sui massi con guide locali'],
    doveDormire: 'Guesthouse semplici nel bazar; resort oltre il fiume a Virupapur Gaddi e Hanumanahalli, o vicino a Kamalapura.',
    doveMangiare: 'Thali e caffè sulle terrazze; nel bazar niente carne e alcol.',
    comeArrivare: 'Treno notturno da Bangalore a Hosapete (circa 9 ore) e 20 minuti di tuk-tuk; aeroporto di Vidyanagar (Jindal) a circa un\'ora.',
    comeSpostarsi: 'Motorino, bicicletta o tuk-tuk a giornata.',
    periodoMigliore: 'ottobre-febbraio; da marzo il caldo sul granito diventa pesante.',
    costi: 'Vittala circa 500-600 rupie per gli stranieri, valido nello stesso giorno per recinto delle regine e stalle degli elefanti; coracle 300-500 rupie.',
    erroriDaEvitare: ['Visitare i siti a mezzogiorno', 'Contare sulla barca per Virupapur Gaddi in stagione di piena'],
    luoghi: [
      {
        nome: "Tempio di Virupaksha",
        testo: "Il tempio di Shiva ancora attivo nel bazar di Hampi, con il gopuram di 50 metri che si vede da tutta la valle. Le sue origini sono precedenti all'impero di Vijayanagara.",
        come: "In fondo al bazar, a piedi. Scarpe al deposito; si paga una piccola tassa per la macchina fotografica.",
        quando: "Mattina presto, quando i fedeli portano le offerte.",
        tempo: "1 ora",
        costo: "ingresso libero",
        consiglio: "Cercare la stanza buia dove il gopuram si proietta capovolto sul muro attraverso un foro."
      },
      {
        nome: "Tempio di Vittala e il carro di pietra",
        testo: "Il tempio più raffinato di Hampi, del Cinquecento, con il carro di pietra e le colonne musicali che suonano se percosse. È il cuore del sito UNESCO.",
        come: "Dal parcheggio si va con i veicoli elettrici o a piedi per un chilometro. Il biglietto ASI vale lo stesso giorno anche per il recinto delle regine e le stalle degli elefanti.",
        quando: "All'apertura, dalle 6, prima del sole forte e dei gruppi.",
        tempo: "1 ora e mezza",
        costo: "circa 600 rupie per gli stranieri (tariffa ASI, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "Andarci a piedi dal bazar lungo il fiume: 2 chilometri tra rovine e massi."
      },
      {
        nome: "Il Centro reale",
        testo: "Il cuore politico della capitale: la piattaforma di Mahanavami Dibba con i bassorilievi delle feste, la vasca a gradini geometrica e il tempio di Hazara Rama, con i fregi del Ramayana.",
        come: "A 4 chilometri dal bazar, in bici, motorino o tuk-tuk. Accesso libero alla maggior parte dei monumenti.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "2 ore",
        costo: "gratuito",
        consiglio: "Lasciare il tempo per l'Hazara Rama: i fregi sono il libro illustrato della città."
      },
      {
        nome: "Il recinto delle regine e le stalle degli elefanti",
        testo: "Il Lotus Mahal, un padiglione con archi a forma di loto, e le undici stalle a cupola per gli elefanti reali, in un recinto con torri di guardia.",
        come: "Accanto al Centro reale. Stesso biglietto del Vittala, se usato nello stesso giorno.",
        quando: "Pomeriggio, dopo il Vittala del mattino.",
        tempo: "1 ora",
        costo: "compreso nel biglietto del Vittala",
        url: "https://asi.nic.in/",
        consiglio: "Tenere il biglietto del Vittala in tasca: lo controllano."
      },
      {
        nome: "Le colline di Hemakuta e Matanga",
        testo: "Hemakuta è una collina di roccia sopra il bazar con piccoli templi antichi. Matanga è la più alta del sito: dalla cima si vedono il fiume, le risaie e le rovine in mezzo ai massi.",
        come: "A piedi dal bazar. Hemakuta è facile; Matanga richiede 20-30 minuti di salita su gradini e roccia.",
        quando: "Hemakuta al tramonto; Matanga all'alba, partendo al buio con una torcia.",
        tempo: "1-2 ore",
        costo: "gratuito",
        consiglio: "Non salire su Matanga da soli al buio: andare in gruppo o con una guida locale."
      },
      {
        nome: "Il coracle sul Tungabhadra",
        testo: "Le barche rotonde di bambù intrecciato, usate da secoli per attraversare il fiume. Un giro passa tra i massi e i templi sulle rive.",
        come: "Ai punti d'imbarco lungo il fiume, vicino al Vittala o a Sanapur. Prezzo da concordare.",
        quando: "Quando il fiume è calmo; con la piena del monsone si fermano.",
        tempo: "30-45 minuti",
        costo: "300-500 rupie, indicativo",
        consiglio: "Chiedere sempre il giubbotto salvagente."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Vittala all'apertura, arrivando a piedi lungo il fiume",
          "Coracle sul Tungabhadra",
          "Pomeriggio al Centro reale e al recinto delle regine",
          "Tramonto da Hemakuta"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: Virupaksha all'alba, Vittala e il fiume, tramonto da Hemakuta",
          "Giorno 2: alba da Matanga",
          "Centro reale, Hazara Rama, Lotus Mahal e stalle degli elefanti",
          "Pomeriggio in motorino verso i templi minori"
        ]
      }
    ],
    zone: [
      {
        nome: "Hampi Bazaar",
        perChi: "chi vuole tutto a piedi",
        testo: "Guesthouse semplici nel villaggio sotto il Virupaksha, a piedi da molti monumenti. Tranquillo, ma niente carne e alcol."
      },
      {
        nome: "Virupapur Gaddi e Hanumanahalli",
        perChi: "chi cerca relax",
        testo: "Oltre il fiume, tra risaie e massi, con resort e caffè. Il traghetto dipende dal livello dell'acqua: con la piena bisogna fare un lungo giro in strada."
      },
      {
        nome: "Kamalapura e Hosapete",
        perChi: "hotel con piscina e comodità",
        testo: "Hotel più strutturati vicino al Centro reale o in città, a 4-13 chilometri. Comodi, serve un mezzo per tutto."
      }
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
      "Non nuotate nel Tungabhadra: correnti e massi causano annegamenti ogni anno.",
      "Per guidare un motorino serve la patente valida per i motocicli e un casco; i controlli ci sono.",
      "Il traghetto per Virupapur Gaddi non va in stagione di piena.",
      "Visitate i siti la mattina e il tardo pomeriggio: a mezzogiorno il granito al sole è rovente."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: 'Il carro di pietra del tempio di Vittala a Hampi, tra colonne scolpite e massi di granito',
    immagine: '/images/india/hampi.jpg',
  },
]
