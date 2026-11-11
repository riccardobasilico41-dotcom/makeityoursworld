import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Bulgaria on the snow" (src/content/viaggi/11-bulgaria-bansko-rila.md).

export const destinazioniBulgaria: Destinazione[] = [
  {
    slug: 'bansko',
    paeseSlug: 'bulgaria',
    ordine: 1,
    nome: 'Bansko',
    tipologia: ['sci', 'montagna'],
    giorniConsigliati: '4 giorni, tre pieni sulle piste',
    visitataPersonalmente: true,
    introduzione: 'Uno dei comprensori sciistici più noti della Bulgaria, sui Monti Pirin, con un centro storico di case in pietra e legno.',
    percheAndarci: 'Per sciare in un angolo d\'Europa che compare di rado nei programmi delle vacanze bianche, a prezzi molto più bassi delle Alpi.',
    cosaVedere: ['Il centro storico di Bansko, tra le case della "scuola di Bansko" e la parte più moderna', 'La vista dal Todorka Peak'],
    cosaFare: [
      'Sci sulle piste di Bansko Ski Zone (c\'è la scheda esperienza dedicata)',
      'La discesa illuminata per lo sci notturno (c\'è la scheda esperienza dedicata)',
      'Après-ski nei locali alla base della gondola',
      'Cena in una mehana tipica del centro storico',
    ],
    doveDormire:
      'Ho scelto un hotel a pochi minuti a piedi dalla stazione della gondola: la mattina arrivavo alle piste in fretta e la sera ero a due passi dal centro storico. Non era una struttura di marca né particolarmente ricercata, solo una base pratica per la settimana sulla neve.\n\nAlternative vicino alla gondola. Economiche: Hotel Dumanov (vicino alla stazione a valle), La Vien Guest House (5 minuti a piedi, gestione familiare). Fascia media: Hotel Ida (piscina interna e idromassaggio), MPM Hotel Sport (accesso quasi diretto alle piste). Lusso: Kempinski Hotel Grand Arena Bansko (accanto alla gondola), Premier Luxury Mountain Resort.',
    doveMangiare: 'Abbiamo mangiato nelle mehane del centro storico: kapama, banitsa e shopska salata, sempre con la rakia.',
    comeArrivare: "Si vola su Sofia, l'aeroporto internazionale più comodo, a circa 160 km da Bansko: in auto sono 2-2 ore e 30 lungo l'autostrada Struma e poi la valle fino a Razlog. Chi va solo a sciare usa spesso i transfer condivisi (circa 15-30 € a persona) o privati (circa 80-90 € per auto), da prenotare in anticipo. Il bus pubblico costa circa 20-22 € ma richiede il passaggio dalla stazione centrale di Sofia; il treno fino a Blagoevgrad e poi il minibus è la via più lenta.",
    comeSpostarsi: 'Una gondola porta dal centro alle piste; tra una pista e l\'altra ci si sposta con gli sci.',
    periodoMigliore: 'da dicembre alla primavera, con innevamento artificiale; date della stagione sul sito ufficiale',
    costi: "Budget giornaliero a persona, indicativo: basso 50-70 € (pensione, mehane, skipass), medio 90-130 € (hotel vicino alla gondola, noleggio attrezzatura, cene fuori), alto da 200 €. Lo skipass giornaliero per adulti costava circa 33 € nella stagione 2025/26; una birra locale circa 1,50-2 €, una cena in mehana 15-20 € a testa. Nelle baite in quota i prezzi sono molto più alti. Dal 2026 si paga in euro.",
    erroriDaEvitare: ['Comprare lo skipass alla cassa: online, con qualche giorno di anticipo, costa meno', 'Aspettarsi piste da Alpi: a Bansko si va per l\'esperienza e per il prezzo, non per il livello del comprensorio'],
    miaEsperienza:
      'Non mi aspettavo grandi cose dallo sci in Bulgaria, ed è quello che ho trovato: piste carine e ben tenute, niente di esagerato rispetto alle Alpi. Il bello sta proprio qui. Ci si va per l\'esperienza esotica di sciare in un angolo d\'Europa fuori dai soliti circuiti, più che per lo sci in sé.',
    luoghi: [
      {
        nome: "Comprensorio sciistico di Bansko",
        testo: "Il comprensorio si raggiunge con una lunga gondola, in funzione dal 2003, che parte dal paese e sale alla base di Banderishka Polyana; gli impianti arrivano a 2.600 metri e le piste sono circa 75 km. Le piste sono più tranquille di quelle alpine. Ci si va per l'esperienza esotica in un angolo d'Europa fuori dai circuiti più noti.",
        come: "Stazione della gondola a pochi minuti a piedi dal centro; skipass in biglietteria o online.",
        quando: "Inverno; alla mattina presto la gondola ha code.",
        tempo: "giornata intera",
        costo: "skipass giornaliero adulti circa 33 € nella stagione 2025/26; listino 2026/27 sul sito ufficiale",
        orari: "Stagione dal 1° dicembre 2026 all'11 aprile 2027; gondola 8:30-17, seggiovie 8:45-16:15.",
        lat: 41.82709,
        lng: 23.4775,
        url: "https://banskoski.com",
        consiglio: "Comprare lo skipass online per evitare la fila alla cassa."
      },
      {
        nome: "Discesa notturna illuminata",
        testo: "La pista di rientro verso il paese, viene illuminata per sciare di sera, ma non tutti i giorni. È una delle attrazioni più particolari di Bansko.",
        come: "Gondola fino alla stazione intermedia e discesa; orari sul sito del comprensorio.",
        quando: "Sera, nei giorni di apertura notturna.",
        tempo: "1-2 ore",
        url: "https://banskoski.com",
        consiglio: "Dopo la discesa, après-ski nei locali alla base della gondola."
      },
      {
        nome: "Todorka Peak",
        testo: "La stazione in quota di Todorka, con vista sui monti Pirin. Si arriva con gli impianti di risalita.",
        come: "Gondola e seggiovie.",
        quando: "Giorno sereno, in inverno.",
        tempo: "1 ora",
        lat: 41.75274,
        lng: 23.43179,
        consiglio: "Mettere in conto il vento e il freddo in cima."
      },
      {
        nome: "Centro storico di Bansko",
        testo: "Case di pietra e legno della «scuola di Bansko» (il revival bulgaro dell'Ottocento), la chiesa della Santa Trinità, costruita dagli abitanti nell'Ottocento, e le mehane tipiche con kapama, banitsa e shopska salata. È più vivace la sera.",
        come: "A piedi dalla stazione della gondola.",
        quando: "Sera.",
        tempo: "2 ore",
        costo: "ingresso libero",
        orari: "Sempre accessibile.",
        lat: 41.83933,
        lng: 23.48871,
        consiglio: "Mangiare nelle mehane del centro storico, non sulla strada principale."
      },
      {
        nome: "Chiesa della Santa Trinità",
        testo: "La grande chiesa del 1835, costruita dagli abitanti dopo aver ottenuto il permesso dalle autorità ottomane, con il campanile di circa 30 metri aggiunto nel 1850. Dentro ci sono icone e affreschi dei pittori della scuola di Bansko.",
        come: "A piedi, nel centro storico.",
        quando: "Di giorno, fuori dalle funzioni.",
        tempo: "30 minuti",
        costo: "ingresso libero",
        lat: 41.83539,
        lng: 23.48706,
        consiglio: "Abiti che coprano spalle e ginocchia."
      },
      {
        nome: "Casa Velyanova",
        testo: "Una casa fortificata dell'Ottocento, decorata dal pittore Velyan Ognev, arrivato da Debar per dipingere la chiesa della Santa Trinità. La «stanza blu» ha soffitti di legno intagliato e pareti dipinte.",
        come: "A piedi, in via Velyan Ognev, nel centro storico.",
        quando: "Di giorno.",
        tempo: "30 minuti",
        lat: 41.8355,
        lng: 23.48803
      },
      {
        nome: "Casa-museo Neofit Rilski",
        testo: "La casa natale di Neofit Rilski (1793-1881), monaco e pedagogo, autore della prima grammatica bulgara. È una tipica casa-fortezza di Bansko, con muri spessi e nascondigli.",
        come: "A piedi, nel centro storico, vicino alla chiesa della Santa Trinità.",
        quando: "Di giorno.",
        tempo: "30 minuti",
        lat: 41.83509,
        lng: 23.48669
      },
      {
        nome: "Casa-museo Nikola Vaptsarov",
        testo: "La casa natale del poeta Nikola Vaptsarov (1909-1942), fucilato a Sofia per la sua attività antifascista, con oggetti personali e la storia della Bansko del primo Novecento.",
        come: "A piedi, nella piazza Nikola Vaptsarov.",
        quando: "Di giorno.",
        tempo: "30-45 minuti",
        lat: 41.8375,
        lng: 23.4888
      },
      {
        nome: "Esposizione permanente di icone",
        testo: "Le icone della scuola pittorica di Bansko, tra Settecento e Ottocento, raccolte in un edificio del centro storico. Mostra quanto il paese fosse un centro artistico prima di diventare una stazione sciistica.",
        come: "A piedi, in via Yane Sandanski, nel centro storico.",
        quando: "Di giorno, nei giorni feriali.",
        tempo: "30 minuti",
        lat: 41.83615,
        lng: 23.48817
      },
      {
        nome: "Banya e le sorgenti termali",
        testo: "Il paese termale a pochi chilometri da Bansko, con sorgenti calde, piscine pubbliche e hotel con spa. Un pomeriggio di riposo dopo le giornate sugli sci.",
        come: "In auto o taxi, circa un quarto d'ora.",
        quando: "Pomeriggio o sera, dopo lo sci.",
        tempo: "2-3 ore",
        lat: 41.88111,
        lng: 23.52444
      }
    ],
    sapori: [
      {
        nome: "Kapama",
        testo: "Stufato di maiale e salsicce con cavolo, cotto lentamente in un coccio."
      },
      {
        nome: "Banitsa",
        testo: "Sfoglia al formaggio, una colazione tipica in Bulgaria."
      },
      {
        nome: "Shopska salata",
        testo: "Insalata di pomodori, cetrioli e feta grattugiata."
      },
      {
        nome: "Rakia",
        testo: "Grappa di frutta, da bere prima dei pasti."
      }
    ],
    attenzioni: [
      "La Bulgaria usa l'euro dal 1° gennaio 2026: confrontare con i prezzi in lev dei vecchi dati.",
      "Da Sofia sono circa 160 km: usare transfer prenotati, non taxi di strada.",
      "Il comprensorio ha code in alta stagione: arrivare presto alla gondola.",
      "In auto d'inverno serve l'attrezzatura invernale (gomme da neve, catene se richieste)."
    ],
    faq: [
      {
        domanda: "Quando si scia a Bansko?",
        risposta: "La stagione 2026/27 va dal 1° dicembre 2026 all'11 aprile 2027, con innevamento artificiale su gran parte delle piste. Le date possono cambiare secondo il meteo."
      },
      {
        domanda: "Quanto costa lo skipass?",
        risposta: "Il giornaliero per adulti costava circa 33 € nella stagione 2025/26. Comprandolo online con qualche giorno di anticipo si risparmia fino al 25% rispetto alla cassa."
      },
      {
        domanda: "Come si arriva da Sofia?",
        risposta: "In auto in 2-2 ore e 30 (circa 160 km), con transfer condiviso o privato, oppure con il bus pubblico dalla stazione centrale di Sofia, più lento ed economico."
      },
      {
        domanda: "In Bulgaria si paga in euro?",
        risposta: "Sì: la Bulgaria è entrata nell'eurozona il 1° gennaio 2026 e dal 1° febbraio 2026 l'euro è l'unica valuta legale. Nelle mehane fuori dal centro conviene avere contanti."
      },
      {
        domanda: "Bansko è adatta ai principianti?",
        risposta: "Sì: a Banderishka Polyana ci sono piste blu e la zona delle scuole sci. Le due nere, tra cui quella del Todorka, sono per sciatori esperti."
      },
      {
        domanda: "Serve l'auto a Bansko?",
        risposta: "Se si dorme vicino alla gondola no: le piste si raggiungono a piedi e il centro storico è a pochi minuti. L'auto serve per Banya, il Pirin d'estate o il Monastero di Rila."
      }
    ],
    gite: [
      {
        nome: "Monastero di Rila",
        distanza: "circa 2 ore in auto",
        come: "In auto verso Sofia, con una deviazione nella valle di Rila.",
        testo: "Il più importante monastero ortodosso della Bulgaria, patrimonio UNESCO. Si incastra bene sulla strada del rientro verso Sofia."
      },
      {
        nome: "Rifugio Vihren e Parco nazionale del Pirin",
        distanza: "circa 15 km a sud",
        come: "In auto lungo la strada della valle del Banderitsa, d'estate.",
        testo: "Il punto di partenza dei sentieri verso il Vihren, la vetta più alta del Pirin (2.914 m), dentro un parco patrimonio UNESCO."
      },
      {
        nome: "Dobrinishte",
        distanza: "circa 6 km a est",
        come: "In auto o taxi.",
        testo: "Un paese con sorgenti termali e un piccolo comprensorio sciistico, più tranquillo di Bansko."
      }
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Gondola presto al mattino e sci a Banderishka Polyana e Shiligarnika",
          "Pranzo in quota o rientro in paese",
          "Après-ski alla base della gondola",
          "Cena in una mehana del centro storico"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: sci come nel programma di un giorno",
          "Giorno 2: sci al mattino fino al Todorka, pomeriggio nel centro storico tra la chiesa della Santa Trinità e Casa Velyanova, sera a Banya"
        ]
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorno 1 e 2: sci nel comprensorio",
          "Giorno 3: Monastero di Rila sulla strada del rientro verso Sofia"
        ]
      }
    ],
    zone: [
      {
        nome: "Vicino alla gondola",
        perChi: "chi scia tutti i giorni e vuole lasciare l'auto ferma",
        testo: "Hotel a 100-500 metri dalla stazione a valle, alcuni con piscina e spa. In alta stagione si riempiono presto.",
        fascia: "80-130 €"
      },
      {
        nome: "Centro storico",
        perChi: "chi vuole le mehane e la vita serale a piedi",
        testo: "Pensioni e piccoli hotel tra le case in pietra, a 10-15 minuti a piedi dalla gondola.",
        fascia: "40-90 €"
      },
      {
        nome: "Resort di lusso",
        perChi: "chi cerca spa ampie e servizi da hotel di montagna",
        testo: "Grandi strutture a cinque stelle davanti alla gondola o con navetta dedicata."
      },
      {
        nome: "Banya e Razlog",
        perChi: "chi viaggia in auto e cerca prezzi più bassi o le terme",
        testo: "Paesi a 10-15 minuti di strada, con hotel termali e pensioni; per sciare si torna ogni mattina a Bansko."
      }
    ],
    esperienzeSlugs: ['sci-bansko', 'discesa-notturna-bansko'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'Le piste innevate del comprensorio sciistico di Bansko, Bulgaria',
    immagine: '/images/bulgaria/bansko-stock.jpg',
  },
  {
    slug: 'monastero-rila',
    paeseSlug: 'bulgaria',
    ordine: 2,
    nome: 'Monastero di Rila',
    tipologia: ['religione', 'storia', 'unesco'],
    giorniConsigliati: 'mezza giornata, lungo il tragitto di rientro',
    visitataPersonalmente: true,
    introduzione: 'Il più grande e importante monastero ortodosso di Bulgaria, fondato nel X secolo dall\'eremita Ivan di Rila e Patrimonio UNESCO dal 1983.',
    percheAndarci: 'È stato il colpo di scena del viaggio. Dopo le giornate sulla neve il contrasto è totale, ed è probabilmente il ricordo più forte di tutto il tour.',
    cosaVedere: [
      'La Chiesa della Natività della Vergine, a cinque cupole, coperta di affreschi coloratissimi',
      'Le alte mura di pietra che chiudono il complesso e gli danno l\'aspetto di una fortezza',
      'Il Museo di Storia Ecclesiastica, con la Croce di Rafail, intagliata con 104 scene religiose e 650 figure in miniatura',
    ],
    cosaFare: ['Visita al complesso monastico e alla chiesa (c\'è la scheda esperienza dedicata)', 'Visita al Museo di Storia Ecclesiastica'],
    doveDormire: 'Non ci ho dormito: è stata una tappa di mezza giornata sulla strada del rientro verso Sofia.',
    doveMangiare: 'Non ho indirizzi da segnalare: la tappa era tutta per la visita.',
    comeArrivare: "Il monastero sta in fondo alla valle del fiume Rilska, a circa 2 ore di auto sia da Sofia sia da Bansko, con una deviazione dall'autostrada Struma all'altezza di Kocherinovo. Secondo il monastero il trasporto pubblico diretto non è stato ripristinato: senza auto si arriva con un'escursione organizzata da Sofia, oppure con il bus per Blagoevgrad e poi un taxi. In inverno la strada della valle può essere ghiacciata.",
    comeSpostarsi: 'A piedi, dentro il complesso monastico.',
    periodoMigliore: 'tutto l\'anno',
    costi: "Budget giornaliero a persona, indicativo: basso 30-50 €, medio 60-90 €, alto da 130 € con notte in hotel e guida privata. Ingresso al complesso e alla chiesa gratuito; nel 2026 il Museo di Storia Ecclesiastica costa 5 €, la Torre di Hrelyo e il museo dell'Economia del monastero 3 € ciascuno, il museo etnografico 4 €.",
    erroriDaEvitare: ['Entrare in chiesa con spalle e ginocchia scoperte', 'Fare foto o video dentro gli edifici religiosi senza seguire le regole del monastero'],
    miaEsperienza:
      'Dopo le giornate sulla neve, il monastero è stato il colpo di scena del viaggio. Gli affreschi coloratissimi della Chiesa della Natività della Vergine e il silenzio della montagna intorno sono il ricordo più vivido di tutto il tour.',
    luoghi: [
      {
        nome: "Complesso del Monastero di Rila",
        testo: "Il più grande e famoso monastero ortodosso della Bulgaria, patrimonio UNESCO, fondato nel X secolo secondo la tradizione da San Giovanni di Rila e ricostruito tra il 1834 e il 1862 dopo un incendio. Le alte mura di pietra, quasi da fortezza, chiudono un cortile a portici a strisce bianche e nere.",
        come: "In auto o bus da Sofia, a sud della capitale, o come deviazione sulla strada tra Bansko e Sofia.",
        quando: "Mattina presto, prima dei bus turistici.",
        tempo: "1,5-2 ore",
        costo: "ingresso libero",
        lat: 42.13331,
        lng: 23.34012,
        url: "https://rilskimanastir.org/en/",
        consiglio: "È un luogo di culto: abiti che coprano spalle e ginocchia."
      },
      {
        nome: "Chiesa della Natività della Vergine",
        testo: "La chiesa a cinque cupole con affreschi coloratissimi nel portico e all'interno, opera di vari pittori dell'Ottocento, tra cui i fratelli Zahari e Dimitar Zograf. Per le foto all'interno seguire le indicazioni del monastero.",
        come: "Dentro il cortile del monastero.",
        quando: "Mattina.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        orari: "Lunedì-giovedì 6:30-18, venerdì-domenica 6:30-18:30; dal 1° giugno al 30 settembre il venerdì-domenica fino alle 19:30.",
        lat: 42.13339,
        lng: 23.34018,
        consiglio: "Il silenzio della montagna intorno è la parte più bella."
      },
      {
        nome: "Museo di Storia Ecclesiastica e Croce di Rafail",
        testo: "Il museo del monastero conserva reliquie e la Croce di Rafail, un pezzo unico di legno di 81 x 43 cm in cui il monaco Rafail intagliò 104 scene religiose e 650 figure in miniatura. È piccolo ma ricco.",
        come: "Nel complesso, ingresso a parte.",
        quando: "Giorno.",
        tempo: "45 minuti",
        costo: "5 € adulti, 2 € studenti fino a 18 anni (2026)",
        orari: "Tutti i giorni 8:30-16:30; dal 1° giugno al 30 settembre 8:30-19:30.",
        lat: 42.13334,
        lng: 23.34072,
        url: "https://rilskimanastir.org/en/museums/tc-rkovno-istoricheski-muzei/",
        consiglio: "Il biglietto è facile da perdere: tenerlo in tasca."
      },
      {
        nome: "Torre di Hrelyo",
        testo: "La costruzione più antica del monastero, del 1335: una torre di pietra alta circa 23 metri su cinque piani, voluta dal signore feudale Stefan Hrelyo Dragovol. All'ultimo piano c'è la cappella della Trasfigurazione con affreschi del Trecento.",
        come: "Nel cortile del monastero, accanto alla chiesa.",
        quando: "Mattina.",
        tempo: "30 minuti",
        costo: "3 € adulti, 2 € studenti fino a 18 anni (2026)",
        orari: "Tutti i giorni 8:30-16:30.",
        lat: 42.1336,
        lng: 23.34021,
        url: "https://rilskimanastir.org/en/museums/khrel-ova-kula/"
      },
      {
        nome: "Galleria delle icone",
        testo: "Ottanta icone del Sette e Ottocento dalla collezione del monastero e 28 ritratti degli egumeni, dal 1860 al 2005. Una sala piccola, utile per capire la pittura religiosa bulgara.",
        come: "Nel complesso, ingresso a parte.",
        quando: "Di giorno.",
        tempo: "20-30 minuti",
        orari: "Tutti i giorni 8:30-16:30.",
        lat: 42.13312,
        lng: 23.3405,
        url: "https://rilskimanastir.org/en/museums/ikonna-galeriia/"
      },
      {
        nome: "Museo dell'Economia del monastero e antica cucina",
        testo: "La vita pratica del monastero tra Sette e Ottocento: un vecchio mulino, il forno del pane, gli attrezzi per il legname e per le api. Il pezzo forte è la magernitsa, la cucina dove si preparavano i pasti per monaci e pellegrini, costruita da mastro Alexi del villaggio di Rila.",
        come: "Nel complesso, ingresso a parte.",
        quando: "Di giorno.",
        tempo: "30 minuti",
        costo: "3 € adulti, 2 € studenti fino a 18 anni (2026)",
        orari: "Tutti i giorni 8:30-16:30.",
        url: "https://rilskimanastir.org/en/museums/muzei-manastirsko-stopanstvo/"
      },
      {
        nome: "Museo etnografico e stanze degli ospiti",
        testo: "Tappeti, costumi popolari, gioielli e una stanza domestica dell'Ottocento. Le stanze degli ospiti portano il nome delle città che le arredarono, come Koprivshtitsa, Teteven, Chirpan, Kyustendil e Gabrovo.",
        come: "Nel complesso; per alcune sale si chiede al personale del Museo di storia.",
        quando: "Di giorno.",
        tempo: "30 minuti",
        costo: "4 € adulti, 2 € studenti fino a 18 anni (2026)",
        orari: "Tutti i giorni 8:30-16:30.",
        url: "https://rilskimanastir.org/en/museums/etnografski-muzei-i-gostni-stai-arkhondaritci/"
      },
      {
        nome: "Grotta di San Giovanni di Rila",
        testo: "Il luogo dove, secondo la tradizione, visse l'eremita prima della fondazione del monastero, con una piccola chiesa. I pellegrini passano attraverso la stretta fessura della grotta.",
        come: "In auto per circa 3,5 km lungo la valle a est del monastero, poi una decina di minuti a piedi in salita nel bosco.",
        quando: "Di giorno, con scarpe adatte.",
        tempo: "1-1,5 ore",
        lat: 42.1501,
        lng: 23.36991
      },
      {
        nome: "Eremo di San Luca",
        testo: "Un piccolo eremo del 1798 nel bosco, con un cortile e la chiesa di San Luca. Una deviazione tranquilla sulla strada per Kirilova polyana.",
        come: "A piedi o in auto lungo la strada per Kirilova polyana, circa 3,7 km a nord-est del monastero, poi un breve sentiero.",
        quando: "Di giorno.",
        tempo: "45 minuti",
        lat: 42.14551,
        lng: 23.36066
      }
    ],
    sapori: [
      {
        nome: "Pasto al sacco",
        testo: "Al monastero non ci sono ristoranti d'obbligo: pranzo prima o dopo."
      }
    ],
    attenzioni: [
      "Abbigliamento modesto: spalle e ginocchia coperte, niente cappello dentro la chiesa.",
      "Dentro la chiesa rispettare le regole sulle foto e parlare a bassa voce.",
      "Strada di montagna: in inverno servono gomme da neve."
    ],
    faq: [
      {
        domanda: "Quanto costa visitare il Monastero di Rila?",
        risposta: "Il complesso e la chiesa sono gratuiti. Si pagano a parte i musei: nel 2026 il Museo di Storia Ecclesiastica 5 €, la Torre di Hrelyo 3 €, il museo etnografico 4 €."
      },
      {
        domanda: "Quanto tempo serve?",
        risposta: "Per il cortile, la chiesa e il museo bastano 2-3 ore. Con la Torre di Hrelyo e la grotta di San Giovanni conviene mettere in conto mezza giornata."
      },
      {
        domanda: "Si possono fare foto?",
        risposta: "Il cortile si fotografa liberamente; dentro la chiesa e gli edifici religiosi vanno seguite le regole del monastero, che di norma non permettono foto e video."
      },
      {
        domanda: "Come ci si veste?",
        risposta: "Spalle e ginocchia coperte, niente cappello dentro la chiesa e voce bassa: è un monastero attivo."
      },
      {
        domanda: "Si arriva con i mezzi pubblici?",
        risposta: "Il collegamento diretto non è stato ripristinato. Le alternative sono l'escursione organizzata da Sofia o il bus per Blagoevgrad più un taxi."
      },
      {
        domanda: "Si può dormire al monastero?",
        risposta: "Sì, ci sono stanze per gli ospiti: si prenotano per telefono dal lunedì al venerdì, 14:30-16 e 18-19, al +359 896 872 010."
      }
    ],
    gite: [
      {
        nome: "I Sette Laghi di Rila",
        distanza: "dall'altro versante della Rila, sopra Sapareva Banya",
        come: "In auto fino a Panichishte, poi seggiovia e sentiero fino al rifugio Rilski Ezera.",
        testo: "Sette laghi glaciali a terrazze tra 2.100 e 2.500 metri. D'estate è l'escursione più famosa della Rila."
      },
      {
        nome: "Sofia e la Chiesa di Boyana",
        distanza: "circa 2 ore in auto",
        come: "In auto lungo l'autostrada Struma.",
        testo: "La cattedrale Aleksandr Nevskij, la rotonda di San Giorgio e i resti romani di Serdica; ai piedi del Vitosha, la Chiesa di Boyana con gli affreschi del 1259, patrimonio UNESCO."
      },
      {
        nome: "Bansko",
        distanza: "circa 2 ore in auto",
        come: "In auto verso sud lungo la Struma e poi la valle fino a Razlog.",
        testo: "La stazione sciistica dei Pirin, con il centro storico di case in pietra e le mehane."
      }
    ],
    programmi: [
      {
        titolo: "Mezza giornata (lungo il tragitto)",
        tappe: [
          "Arrivo al mattino presto, prima dei bus turistici",
          "Cortile e Chiesa della Natività della Vergine",
          "Museo di Storia Ecclesiastica e Croce di Rafail",
          "Pranzo nei ristoranti fuori dalle mura e ripartenza"
        ]
      },
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: chiesa, Torre di Hrelyo e Museo di Storia Ecclesiastica",
          "Pranzo fuori dalle mura",
          "Pomeriggio: grotta di San Giovanni di Rila ed eremo di San Luca",
          "Rientro a Sofia o a Bansko"
        ]
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1: monastero e musei, notte nelle stanze del monastero o negli hotel della valle",
          "Giorno 2: funzione del mattino, grotta di San Giovanni e passeggiata verso Kirilova polyana"
        ]
      }
    ],
    zone: [
      {
        nome: "Stanze del monastero",
        perChi: "chi vuole vivere il monastero la sera e al mattino presto",
        testo: "Stanze semplici dentro le mura, prenotabili per telefono nei giorni feriali. A sera, chiusi i cancelli, il cortile è silenzioso."
      },
      {
        nome: "Hotel lungo la valle",
        perChi: "chi viaggia in auto e vuole più comfort",
        testo: "Qualche hotel e campeggio a 1-3 km dal monastero, tra cui uno con spa."
      },
      {
        nome: "Paese di Rila",
        perChi: "chi cerca pensioni semplici a prezzi bassi",
        testo: "Il paese a circa 20 km a valle, con pensioni familiari e qualche negozio."
      },
      {
        nome: "Sofia",
        perChi: "chi visita il monastero in giornata",
        testo: "La capitale, a circa 2 ore, con la scelta più ampia di hotel; da qui partono le escursioni organizzate."
      }
    ],
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'La facciata affrescata della Chiesa della Natività della Vergine al Monastero di Rila, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
