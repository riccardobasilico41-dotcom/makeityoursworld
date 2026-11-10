import type { Destinazione } from '@/lib/types'

// Prima uscita ceca dell'archivio, collegata al viaggio "Praga in un weekend
// lungo" (src/content/viaggi/54-praga-weekend.md, dati in
// src/content/viaggi-dati/praga-weekend.ts), viaggio fatto da Rick: visitataPersonalmente è
// true. Il campo miaEsperienza resta assente finché non arriva un ricordo dell'autore. Nessun nome di hotel, ristorante o operatore è stato
// inventato. Prezzi e orari cambiano spesso e vanno riverificati sui canali
// ufficiali prima di partire.

export const destinazioniRepubblicaCeca: Destinazione[] = [
  {
    slug: 'praga',
    paeseSlug: 'repubblica-ceca',
    ordine: 1,
    nome: 'Praga',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3-4 giorni per il centro storico, il Castello e Vyšehrad',
    visitataPersonalmente: true,
    introduzione:
      'La "città dalle cento torri", capitale ceca sulle due rive della Moldava, con uno dei centri storici medievali e barocchi meglio conservati d\'Europa. È uscita quasi indenne dai bombardamenti della Seconda guerra mondiale, e oggi è un insieme compatto di cinque nuclei storici, tutti percorribili a piedi in pochi giorni: Staré Město (Città Vecchia), Malá Strana (Città Piccola), Hradčany (il colle del Castello), Josefov (il quartiere ebraico) e la Nové Město (Città Nuova) ottocentesca.',
    percheAndarci:
      'In un\'area compatta concentra secoli di architettura gotica, rinascimentale e barocca quasi intatta, un castello che è tra i complessi castellani più grandi al mondo e un quartiere ebraico con una delle collezioni di sinagoghe storiche più importanti d\'Europa. E i prezzi, birra compresa, restano contenuti rispetto all\'Europa occidentale.',
    cosaVedere: [
      'La Piazza della Città Vecchia (Staroměstské náměstí), con la Torre dell\'Orologio Astronomico (Orloj) del municipio (del 1410, il terzo orologio astronomico più antico al mondo e il più antico ancora funzionante), la Chiesa di Tyn gotica e la Chiesa di San Nicola barocca',
      'Il Ponte Carlo (Karlův most), gotico, lungo 516 metri, costruito a partire dal 1357 su commissione di Carlo IV: sedici arcate e oltre settanta statue barocche (tutte copie: gli originali sono conservati al riparo), tra cui la più antica e venerata, quella di San Giovanni Nepomuceno del 1683',
      'Il colle del Castello di Praga (Pražský hrad), tra i complessi castellani chiusi più grandi al mondo, con la Cattedrale di San Vito (Katedrála svatého Víta) gotica al suo interno, il Vecchio Palazzo Reale, il Vicolo d\'Oro (Zlatá ulička) e la Basilica di San Giorgio',
      'Malá Strana, il quartiere barocco ai piedi del Castello, con la Chiesa di San Nicola (da non confondere con quella omonima in Piazza della Città Vecchia), il Muro di John Lennon e l\'Isola di Kampa sulla Moldava',
      'Josefov, l\'ex quartiere ebraico nel cuore di Staré Město, con sei siti storici tra sinagoghe e l\'Antico Cimitero Ebraico, gestiti dal Museo Ebraico di Praga',
      'Vyšehrad, la fortezza collinare a sud del centro, meno battuta del Castello ma con oltre mille anni di storia (secondo la leggenda fondativa di Praga, qui la principessa Libuše ne profetizzò la nascita) e alcuni dei panorami più ampi sulla città e sulla Moldava',
    ],
    cosaFare: [
      'Fermarsi in Piazza della Città Vecchia allo scoccare dell\'ora, tra le 8 e le 23, per la processione degli Apostoli meccanici dell\'Orloj e lo scheletro della Morte che tira la corda',
      'Attraversare il Ponte Carlo presto, prima delle 8, per evitare il grosso della folla che lo riempie di giorno',
      'Salire sulla Torre della Città Piccola (Malostranská mostecká věž), all\'estremità del Ponte Carlo lato Malá Strana, per una vista dall\'alto meno affollata di quella dalla torre della Città Vecchia',
      'Camminare lungo le mura di Vyšehrad al tramonto, per un panorama sulla città molto più tranquillo di quello dal Castello',
      'Una serata in un hospoda (pub) tradizionale fuori dal centro più turistico, per bere birra ceca ai prezzi veri della città, non a quelli gonfiati intorno alla piazza principale',
    ],
    doveDormire:
      'Staré Město (Città Vecchia) è la scelta più comoda e concentra quasi tutta l\'offerta turistica, ma è anche la zona più cara e più affollata la sera. Malá Strana, ai piedi del Castello, è più tranquilla e centrale quanto lei. Vinohrady e Žižkov, poco fuori dal nucleo storico ma ben collegati in tram, sono le alternative più vissute e più economiche.',
    doveMangiare:
      'Il piatto simbolo è il svíčková (arrosto di manzo in salsa di panna e verdure, servito con knedlíky, gli gnocchi di pane a fette), insieme al guláš e ai trdelník, il dolce da strada arrotolato e cotto sulla brace, diventato negli ultimi anni un simbolo (più turistico che tradizionale). Gli hospoda, i pub tradizionali, restano il modo più vero ed economico di mangiare piatti cechi con una birra alla spina. Da bere c\'è la birra: il paese ha il consumo pro capite più alto al mondo, e fuori dalle zone turistiche la birra costa spesso meno dell\'acqua in bottiglia.',
    comeArrivare:
      "Aeroporto Václav Havel (PRG), a circa 17 km dal centro, senza metro diretta. Il bus 59 arriva in 15-20 minuti a Nádraží Veleslavín (metro A) e il centro si raggiunge in circa 35 minuti con un solo biglietto da 90 minuti: 50 CZK alle macchinette, 46 nell'app PID Lítačka. L'Airport Express (AE) porta alla stazione centrale in circa 45 minuti per 200 CZK; di notte ci sono i bus 907 e 910, ogni mezz'ora. Un taxi o un'auto Uber o Bolt dai punti segnalati costa indicativamente 600-800 CZK (25-32 €). Dall'Italia si arriva quasi sempre in aereo; da Vienna c'è il treno diretto, circa 4 ore.",
    comeSpostarsi: 'Il centro storico tutto a piedi. Per il resto della città c\'è la rete di metro, tram e bus PID, con biglietti a tempo economici da convalidare a bordo. L\'auto non serve.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, affollata e più calda; novembre-marzo fa freddo ma si gira bene, con i mercatini di Natale a dicembre',
    costi: "Budget giornaliero a persona, volo escluso: basso 60-80 € (ostello o stanza fuori centro, pranzi in hospoda di quartiere, mezzi pubblici); medio 120-180 € (hotel tre stelle in doppia, due pasti al ristorante, un paio di ingressi); alto da 250 € in su (hotel in Staré Město o Malá Strana, ristoranti del centro, visite guidate). Mezzo litro di birra in un pub di quartiere costa 55-80 CZK, contro i 100-150 CZK della piazza principale.",
    erroriDaEvitare: [
      'Sedersi in un ristorante intorno alla Piazza della Città Vecchia o in via Karlova senza controllare prima il menù e i prezzi: è la zona con più segnalazioni di conti gonfiati, "welcome drink" non richiesti e voci aggiunte al conto',
      'Prendere il tram 22 verso il Castello con oggetti di valore in tasche o zaini aperti: è la linea più segnalata per i borseggi, soprattutto in alta stagione',
      'Dare retta a chi per strada si presenta come agente di polizia e chiede i documenti o di pagare subito una multa: un vero agente non lo fa, e nel dubbio si chiede di andare insieme a una stazione di polizia',
      'Cambiare valuta o pagare in euro contando su un cambio "automatico" vantaggioso: la Repubblica Ceca non è nell\'eurozona, e i prezzi "convertiti" esposti nei locali turistici sono quasi sempre penalizzanti',
      'Sottovalutare la coda per l\'Orologio Astronomico o per la Cattedrale di San Vito in alta stagione: conviene arrivare presto o verso sera',
    ],
    luoghi: [
      {
        nome: "Piazza della Città Vecchia e Orloj",
        testo: "La piazza centrale con la Torre dell'Orologio Astronomico (1410), uno dei più antichi orologi astronomici al mondo ancora in funzione. Allo scoccare dell'ora lo scheletro della Morte suona la campana e alle finestrelle sfilano i dodici Apostoli.",
        come: "A piedi; la fermata della metro più vicina è Staroměstská. L'Orloj si vede dalla piazza, gratis.",
        quando: "Ogni ora dalle 8 alle 23, arrivando qualche minuto prima; la torre del municipio ha un belvedere a pagamento.",
        tempo: "1 ora",
        costo: "piazza e spettacolo gratuiti; torre del Municipio Vecchio 350 CZK (circa 14 €), metà prezzo nella prima ora dopo l'apertura (2026)",
        orari: "torre del municipio tutti i giorni 9-20 da aprile a dicembre, 10-19 da gennaio a marzo",
        lat: 50.08698,
        lng: 14.42029,
        url: "https://www.prague.eu",
        consiglio: "Salire sulla torre del municipio per la vista sulla piazza.",
      },
      {
        nome: "Ponte Carlo",
        testo: "Il ponte gotico di 516 metri iniziato nel 1357 per Carlo IV, con oltre 30 statue barocche (copie). Collega la Città Vecchia a Malá Strana e al Castello.",
        come: "A piedi; sempre aperto.",
        quando: "All'alba, quando è vuoto, o a tarda sera.",
        tempo: "30-45 minuti",
        costo: "ingresso libero",
        orari: "sempre aperto",
        lat: 50.08639,
        lng: 14.41194,
        consiglio: "I borseggiatori sono attivi nelle ore di punta; tenere la borsa davanti.",
      },
      {
        nome: "Castello di Praga e Cattedrale di San Vito",
        testo: "Per il Guinness dei primati il più grande castello antico del mondo, su quasi 70.000 m² intorno a tre cortili: dentro ci sono la Cattedrale gotica di San Vito, il Palazzo Reale Vecchio, la Basilica di San Giorgio e il Vicolo d'Oro.",
        come: "Tram 22 fino alla fermata Pražský hrad, oppure a piedi in salita da Malá Strana. Il complesso è aperto tutti i giorni 6-22; per entrare negli edifici serve il biglietto (all'ingresso o online, valido 2 giorni).",
        quando: "Mattina presto, con l'apertura. Cambio della guardia ogni ora dalle 9 alle 18 alle porte; quello solenne, con fanfara, a mezzogiorno nel primo cortile.",
        tempo: "3-4 ore",
        costo: "cortili e navata della Cattedrale gratuiti; circuito principale circa 450 CZK (circa 18 €) (2026)",
        orari: "area del Castello 6-22 tutti i giorni; edifici storici 9-17 da aprile a ottobre, 9-16 da novembre a marzo; Cattedrale lun-sab dalle 9, domenica dalle 12, chiude alle 17 (16 in inverno)",
        lat: 50.09081,
        lng: 14.40052,
        url: "https://www.hrad.cz",
        consiglio: "I biglietti sono di vari tipi: confrontare sul sito ufficiale cosa include ognuno.",
      },
      {
        nome: "Malá Strana e Muro di John Lennon",
        testo: "Il quartiere barocco ai piedi del Castello, con la Chiesa di San Nicola e l'isola di Kampa. Il Muro di Lennon, coperto di graffiti dagli anni Ottanta, è sulla piazzetta Velkopřevorské náměstí, vicino all'isola di Kampa.",
        come: "A piedi dal Ponte Carlo.",
        quando: "Mattina o tardo pomeriggio.",
        tempo: "2 ore",
        costo: "ingresso libero",
        orari: "quartiere e muro sempre accessibili",
        lat: 50.08624,
        lng: 14.40695,
        consiglio: "Lasciare il muro com'è: non servono altri disegni.",
      },
      {
        nome: "Josefov e Museo Ebraico",
        testo: "L'ex quartiere ebraico nel cuore di Staré Město, con cinque sinagoghe e l'Antico Cimitero Ebraico gestiti dal Museo Ebraico, tra cui la sinagoga Spagnola e la Pinkas. Un solo biglietto copre tutti i siti del museo; la sinagoga Vecchia-Nuova, ancora in uso per il culto, si visita con un biglietto a parte o combinato.",
        come: "A piedi dalla Piazza della Città Vecchia.",
        quando: "Aperto tutti i giorni tranne il sabato e le feste ebraiche; mattina presto, prima dei gruppi.",
        tempo: "2-3 ore",
        costo: "600 CZK (circa 24 €) adulti per tutti i siti del Museo Ebraico (2026)",
        orari: "da domenica a venerdì 9-18 da aprile a metà ottobre, 9-16.30 da metà ottobre a marzo; chiuso il sabato e nelle feste ebraiche",
        lat: 50.08972,
        lng: 14.41861,
        url: "https://www.jewishmuseum.cz",
        consiglio: "La sinagoga Vecchia-Nuova ha un biglietto separato.",
      },
      {
        nome: "Vyšehrad",
        testo: "La fortezza sulla collina a sud, meno battuta del Castello, con la basilica dei Santi Pietro e Paolo e il cimitero dei grandi cechi (Dvořák, Smetana). La vista sulla Moldava è ottima.",
        come: "Metro linea C fino a Vyšehrad, oppure in tram fino a Albertov o al lungofiume Rašínovo nábřeží, poi a piedi.",
        quando: "Pomeriggio.",
        tempo: "1,5 ore",
        costo: "parco e mura liberi; basilica circa 130 CZK (circa 5 €)",
        orari: "parco e mura sempre accessibili",
        lat: 50.06417,
        lng: 14.41944,
        url: "https://www.praha-vysehrad.cz",
        consiglio: "Meglio del Castello per chi vuole camminare in silenzio.",
      },
      {
        nome: "Colle di Petřín",
        testo: "Il colle verde con la torre panoramica del 1891, spesso descritta come una piccola Torre Eiffel, il giardino delle rose e un labirinto di specchi. La funicolare, aperta nel 1891, sale da Újezd a Malá Strana: ferma dal settembre 2024 per rischio frane, ha riaperto il 22 settembre 2026 con vetture nuove.",
        come: "Funicolare da Újezd: non valgono i biglietti da 30 e 90 minuti, serve quello della funicolare o un abbonamento da 24 ore in su.",
        quando: "Giorno sereno.",
        tempo: "2 ore",
        costo: "parco libero; torre panoramica a pagamento",
        orari: "torre panoramica 10-18 da settembre a marzo, 10-19 ad aprile e maggio, 9-19 da giugno ad agosto",
        lat: 50.08354,
        lng: 14.39505,
        consiglio: "Salire in funicolare e scendere a piedi attraverso i parchi.",
      },
      {
        nome: "Piazza San Venceslao e Museo Nazionale",
        testo: "Più un viale che una piazza: 750 metri in salita nella Città Nuova, dove nel 1968 e nel 1989 si giocò la storia recente del paese. In cima ci sono la statua equestre di San Venceslao e il palazzo neorinascimentale del Museo Nazionale, riaperto nel 2018 dopo un lungo restauro.",
        come: "Metro Můstek (linee A e B) in basso, Muzeum (A e C) in cima; dalla Città Vecchia sono 5 minuti a piedi.",
        quando: "La sera per le facciate illuminate; il museo di mattina.",
        tempo: "30 minuti la piazza, 2-3 ore con il museo",
        lat: 50.08139,
        lng: 14.4275,
        url: "https://www.nm.cz",
      },
      {
        nome: "Torre delle Polveri e Casa Municipale",
        testo: "La Torre delle Polveri, porta gotica del 1475, segna l'inizio della Via Reale che portava i re all'incoronazione in Castello. Accanto c'è la Casa Municipale (Obecní dům), il palazzo Art Nouveau più ricco della città, inaugurato nel 1912, con la sala Smetana e gli interni decorati da Alfons Mucha.",
        come: "Metro Náměstí Republiky (linea B). Gli interni della Casa Municipale si vedono con le visite guidate o entrando nel caffè e nel ristorante al piano terra.",
        quando: "Pomeriggio, con un caffè sotto i lampadari del Kavárna Obecní dům.",
        tempo: "1 ora, 2 con la visita guidata",
        lat: 50.08776,
        lng: 14.42776,
        url: "https://www.obecnidum.cz",
      },
      {
        nome: "Monastero di Strahov",
        testo: "Abbazia premostratense fondata nel 1143 sulla collina sopra il Castello. Vale la visita per la biblioteca, con la Sala Teologica del Seicento e la Sala Filosofica di fine Settecento affrescata da Maulbertsch; dai giardini si vede tutta la città.",
        come: "Tram 22 o 23 fino a Pohořelec, poi 5 minuti a piedi; dal Castello sono circa 15 minuti in salita. Biglietti alla cassa nella chiesa di San Rocco o online.",
        quando: "All'apertura delle 9, prima dei gruppi.",
        tempo: "1-1,5 ore",
        orari: "biblioteca tutti i giorni 9-17, ultimo ingresso 16.30",
        lat: 50.08629,
        lng: 14.38871,
        url: "https://www.strahovskyklaster.cz",
        consiglio: "Le due sale storiche si guardano dalla soglia: non si entra, per proteggere i libri.",
      },
      {
        nome: "Loreta",
        testo: "Santuario barocco di pellegrinaggio costruito intorno a una copia della Santa Casa di Loreto. Il campanile ha un carillon di 27 campane che suona ogni ora, e il tesoro conserva un ostensorio con oltre 6.000 diamanti.",
        come: "A 5 minuti a piedi da Strahov o dalla fermata del tram Pohořelec.",
        quando: "Allo scoccare dell'ora, per sentire il carillon.",
        tempo: "45 minuti-1 ora",
        lat: 50.08944,
        lng: 14.39194,
        url: "https://www.loreta.cz",
      },
      {
        nome: "Parco di Letná",
        testo: "Il pianoro verde sulla riva nord della Moldava, con la vista più bella sui ponti in fila. Dove sorgeva la statua di Stalin, abbattuta nel 1962, oscilla un metronomo gigante; d'estate il giardino della birra sotto i castagni è pieno di praghesi.",
        come: "Tram fino a Letenské náměstí, oppure a piedi con le scale dal ponte Čechův most.",
        quando: "Al tramonto, da maggio a settembre.",
        tempo: "1-2 ore",
        costo: "ingresso libero",
        orari: "parco sempre accessibile",
        lat: 50.09374,
        lng: 14.41253,
      },
      {
        nome: "Casa Danzante",
        testo: "L'edificio di Frank Gehry e Vlado Milunić, finito nel 1996 sul lungofiume, con le due torri che sembrano una coppia che balla e per questo chiamato anche «Ginger e Fred». Dentro ci sono un hotel, una galleria e un bar panoramico in cima.",
        come: "Tram fino a Jiráskovo náměstí, oppure metro Karlovo náměstí (linea B) e 5 minuti a piedi.",
        quando: "Al tramonto, dalla terrazza del bar.",
        tempo: "30 minuti",
        lat: 50.07556,
        lng: 14.41417,
        url: "https://www.tancicidum.cz",
      },
    ],
    programmi: [
      {
        titolo: "1 giorno",
        tappe: [
          "Mattina: Castello di Praga e Cattedrale di San Vito, all'apertura delle 9",
          "Discesa a piedi per Malá Strana e il Muro di John Lennon",
          "Pranzo a Malá Strana",
          "Ponte Carlo",
          "Piazza della Città Vecchia e Orloj allo scoccare dell'ora",
          "Cena con birra ceca in un hospoda fuori dalla piazza",
        ],
      },
      {
        titolo: "2 giorni",
        tappe: [
          "Giorno 1 come sopra",
          "Giorno 2: Josefov e Museo Ebraico di mattina (non di sabato)",
          "Torre delle Polveri e Casa Municipale",
          "Piazza San Venceslao e Museo Nazionale",
          "Tramonto al Parco di Letná, poi cena a Vinohrady",
        ],
      },
      {
        titolo: "3 giorni",
        tappe: [
          "Giorni 1-2 come sopra",
          "Giorno 3: Ponte Carlo all'alba",
          "Monastero di Strahov e Loreta",
          "Discesa a piedi dal Colle di Petřín",
          "Pomeriggio a Vyšehrad, oppure Casa Danzante al tramonto",
          "In alternativa al giorno 3: gita a Kutná Hora o Karlštejn",
        ],
      },
    ],
    zone: [
      {
        nome: "Staré Město",
        perChi: "Chi vuole stare vicino alle attrazioni",
        testo: "Cuore turistico, molto affollato e caro; rumore di notte.",
        fascia: "120-250 €",
      },
      {
        nome: "Malá Strana",
        perChi: "Chi cerca un quartiere pittoresco",
        testo: "Vicino al Castello, strade silenziose; ristoranti più cari.",
        fascia: "130-280 €",
      },
      {
        nome: "Vinohrady",
        perChi: "Chi vuole un'atmosfera locale e prezzi migliori",
        testo: "Quartiere residenziale con caffè e parchi, collegamenti con il tram.",
        fascia: "80-150 €",
      },
      {
        nome: "Žižkov",
        perChi: "Chi cerca pub e vita notturna a prezzi bassi",
        testo: "Quartiere vivace e meno turistico.",
        fascia: "60-120 €",
      },
    ],
    sapori: [
      {
        nome: "Svíčková",
        testo: "Lombo di manzo in salsa di verdure e panna con canederli di pane."
      },
      {
        nome: "Guláš con canederli",
        testo: "Spezzatino di manzo con canederli, nei pub tradizionali."
      },
      {
        nome: "Pivo",
        testo: "La birra ceca: Pilsner Urquell, Budvar, Kozel, spesso servita a basso prezzo."
      },
      {
        nome: "Smažený sýr",
        testo: "Formaggio impanato e fritto, con patatine e salsa tartara."
      }
    ],
    attenzioni: [
      "Cambio valuta: evitare gli sportelli «0% commissioni» del centro; prelevare dagli ATM e rifiutare il pagamento in euro.",
      "Taxi: usare una compagnia nota o un'app invece di fermarli per strada, controllare le tariffe esposte sulla fiancata ed evitare le auto senza insegne.",
      "Borseggiatori sui tram verso il Castello, sui mezzi dall'aeroporto e nelle zone turistiche affollate. Diffidare dei falsi poliziotti in borghese che chiedono di vedere soldi e passaporto.",
      "Trdelník non è un dolce ceco ma un prodotto turistico; la panetteria locale offre di meglio.",
      "I biglietti dei mezzi vanno convalidati prima di salire (non quelli comprati alle macchinette a bordo): senza convalida si rischia una multa: 1.200 CZK se pagata subito al controllore, 1.500 entro 15 giorni, altrimenti 2.000 (2026)."
    ],
    gite: [
      {
        nome: "Kutná Hora",
        distanza: "circa 1 ora in treno",
        come: "Treno diretto da Praha hlavní nádraží a Kutná Hora hl.n.; da lì l'ossario di Sedlec è a pochi minuti a piedi e il centro storico a circa 3 km, in bus locale.",
        testo: "La città dell'argento, patrimonio UNESCO: l'ossario di Sedlec decorato con le ossa di decine di migliaia di persone, la cattedrale gotica di Santa Barbara e un centro storico tranquillo.",
      },
      {
        nome: "Castello di Karlštejn",
        distanza: "circa 40 minuti in treno",
        come: "Treno regionale da Praha hlavní nádraží o da Smíchov; dalla stazione di Karlštejn 30-40 minuti a piedi in salita attraverso il paese.",
        testo: "Il castello gotico fatto costruire da Carlo IV dal 1348 per custodire i gioielli della corona, in cima a una collina boscosa. Gli interni si vedono solo con visita guidata.",
      },
      {
        nome: "Terezín",
        distanza: "circa 1 ora in autobus",
        come: "Autobus dalla stazione Praha Nádraží Holešovice (metro C).",
        testo: "Fortezza settecentesca che i nazisti trasformarono in ghetto e campo di transito. Il Memoriale comprende la Piccola Fortezza, il museo del ghetto e il cimitero: una visita dura, da fare con calma.",
      },
      {
        nome: "Český Krumlov",
        distanza: "circa 3 ore in autobus",
        come: "Autobus diretti da Praha Na Knížecí (metro B, Anděl); in giornata è lunga, meglio con una notte.",
        testo: "Borgo UNESCO in un'ansa della Moldava, dominato da un castello con teatro barocco e torre dipinta. È il secondo luogo più visitato del paese dopo Praga.",
      },
    ],
    faq: [
      {
        domanda: "Quanti giorni servono per visitare Praga?",
        risposta: "Tre giorni bastano per il Castello, la Città Vecchia, Josefov e un quartiere fuori dal centro come Vinohrady o Letná. Con quattro giorni si aggiunge una gita a Kutná Hora o Karlštejn.",
      },
      {
        domanda: "Bisogna prenotare il Castello di Praga?",
        risposta: "No: l'area del Castello è libera dalle 6 alle 22 e il biglietto per gli edifici si compra alla cassa o online. In alta stagione la coda è soprattutto ai controlli di sicurezza, quindi conviene arrivare per le 9.",
      },
      {
        domanda: "A Praga si paga in euro?",
        risposta: "No, la valuta è la corona ceca (CZK). Le carte funzionano quasi ovunque; quando il terminale propone di pagare in euro conviene scegliere le corone, perché il cambio applicato è peggiore.",
      },
      {
        domanda: "Come si va dall'aeroporto al centro di Praga?",
        risposta: "Il modo più economico è il bus 59 fino alla metro Nádraží Veleslavín e poi la linea A: circa 35 minuti con un biglietto da 90 minuti (50 CZK). L'Airport Express va alla stazione centrale per 200 CZK, un taxi costa circa 600-800 CZK.",
      },
      {
        domanda: "Quando il Ponte Carlo è meno affollato?",
        risposta: "Prima delle 8 del mattino, e di nuovo a tarda sera. Tra metà mattina e il tramonto è pieno di gruppi, artisti di strada e borseggiatori.",
      },
      {
        domanda: "Dove conviene dormire a Praga?",
        risposta: "Staré Město e Malá Strana per avere tutto a piedi, pagando di più; Vinohrady per un quartiere vissuto a pochi minuti di tram, con prezzi più bassi.",
      },
    ],
    esperienzeSlugs: ['praga-castello-biglietto', 'praga-josefov-jewish-town', 'praga-degustazione-birra'],
    tripSlugs: ['praga-weekend'],
    imageAlt: 'Il Castello di Praga e la Cattedrale di San Vito illuminati all\'ora blu, con il Ponte Carlo e la Moldava in primo piano',
    immagine: '/images/repubblica-ceca/praga.jpg',
  },
]
