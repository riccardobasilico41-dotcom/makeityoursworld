import type { Esperienza } from '@/lib/types'

// Fanno eccezione le esperienze della Costa Azzurra, che riguardano posti
// vissuti per due anni: lì i ricordi veri esistono e le bozze vanno
// semplicemente sostituite. Nessun nome di hotel, ristorante, rifugio,
// operatore o domaine è stato inventato. Prezzi, contingentamenti e regole di
// accesso cambiano ogni stagione: vanno riverificati.

export const esperienzeFrancia: Esperienza[] = [
  {
    slug: 'sentiero-cap-antibes',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Il sentiero del litorale del Cap d\'Antibes',
    localita: 'Cap d\'Antibes, Alpi Marittime',
    cosE:
      'Un sentiero pubblico che gira la punta del Cap d\'Antibes sugli scogli, tra il mare e i muri delle proprietà private che occupano tutto il capo. È il tratto più noto della rete di sentieri costieri che in Francia, per legge, garantisce il passaggio a piedi lungo la riva; qui lo chiamano anche sentiero di Tire-Poil, per il vento che ci soffia.',
    percheFarla:
      'È gratuito, dura un\'ora e mezza, parte a venti minuti a piedi dal centro di Antibes e attraversa uno dei tratti di costa più belli e più chiusi del Mediterraneo. Dietro i muri ci sono le ville, davanti il mare aperto, e in mezzo una striscia di roccia dove si può camminare perché lo impone la legge.',
    durata: 'un\'ora e mezza-due ore per l\'anello principale, con varianti più brevi',
    periodo:
      '**tutto l\'anno**, e il momento migliore è l\'inverno: non c\'è nessuno, la luce è bassa e il mare è mosso. **Da evitare con vento forte e mare grosso**: il sentiero passa su scogli bagnati dalle onde, e con le mareggiate lo chiudono. D\'estate va fatto presto al mattino o al tramonto, perché non c\'è ombra.',
    costo: 'gratuito',
    comePrenotare: 'Nessuna prenotazione. Si arriva a piedi, in autobus o in auto; in alta stagione il problema è il parcheggio vicino alla Plage de la Garoupe.',
    cosaPortare:
      'Scarpe con una suola che tenga sulla roccia bagnata (le infradito sono l\'errore più comune), acqua, cappello d\'estate e d\'inverno una giacca a vento, perché sulla punta il vento non smette mai. E il costume: in alcuni punti si può scendere in acqua.',
    perChiEAdatta:
      'Chiunque abbia un minimo di equilibrio. Il fondo è roccioso e irregolare, con qualche gradino scavato e qualche corrimano, ma senza difficoltà tecniche. **Non adatto ai passeggini, sconsigliato con il mare mosso.**',
    miaEsperienza:
      'È il posto che ho rifatto più di ogni altro, e ogni volta per un motivo diverso. D\'estate ci andavo al tramonto, quando la roccia è ancora calda e la luce prende il mare di lato. D\'inverno con il vento, che qui soffia quasi sempre, e per un\'ora non incontravo nessuno: su una costa da dodici milioni di visitatori l\'anno continua a sembrarmi uno scherzo. Colpisce il contrasto. A sinistra muri, cancelli, telecamere e siepi altissime che nascondono alcune delle proprietà più care d\'Europa; a destra il mare aperto; in mezzo questa striscia di scogli su cui si cammina perché in Francia il passaggio lungo la riva è un diritto e non si può recintare. Passi a due metri dai giardini e nessuno può dirti niente. Sul lato esposto, con il maestrale, le onde arrivano sul sentiero e si torna bagnati, ed è il giorno in cui vale di più.',
    giudizio: 'imperdibile',
    alternative: [
      'Il sentiero del litorale del Cap Ferrat, a est di Nizza, più corto e altrettanto bello',
      'Il sentiero costiero di Saint-Tropez, da Plage des Salins, molto più lungo',
      'Il giro del faro della Garoupe, che sta sopra il capo e ha la vista dall\'alto',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Gli scogli e le pinete del Cap d\'Antibes lungo il sentiero del litorale, con il mare che si frange sulle rocce',
    immagine: '/images/francia/sentiero-cap-antibes.jpg',
  },
  {
    slug: 'mercato-provenzale-antibes',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Il Marché Provençal di Antibes',
    localita: 'Cours Masséna, città vecchia di Antibes',
    cosE:
      'Il mercato coperto sotto la tettoia in ferro del Cours Masséna, nel cuore della città vecchia: banchi di produttori, formaggi, olive, spezie, fiori, pesce e frutta, ogni mattina tranne il lunedì fuori stagione. Di pomeriggio, in certi periodi, sotto la stessa tettoia c\'è un mercato di artigianato.',
    percheFarla:
      'È uno dei pochi mercati della Costa Azzurra rimasti mercati di quartiere, non una scenografia per turisti: ci fa la spesa chi abita dentro le mura, e lo si capisce dai prezzi e da cosa si vende.',
    durata: 'un\'ora, o mezza mattinata con colazione e acquisti',
    periodo:
      '**tutto l\'anno, al mattino**. **Fuori stagione il lunedì è chiuso**, e gli orari cambiano tra estate e inverno: **conviene controllarli prima**. Il momento migliore è tra le otto e le dieci, prima che arrivino i gruppi.',
    costo: 'ingresso libero; gli acquisti costano quanto in un mercato di città, non quanto in una gastronomia del lungomare',
    comePrenotare: 'Nessuna prenotazione.',
    cosaPortare: 'Una borsa di stoffa e **contanti**: molti banchi di produttori non prendono la carta, o chiedono un minimo di spesa.',
    perChiEAdatta: 'Tutti. È anche il modo migliore per pranzare spendendo poco: si compra al mercato e si mangia sui bastioni.',
    miaEsperienza:
      'Ad Antibes il ritmo della settimana lo dà il mercato, più di qualunque monumento. Ci andavo al mattino presto: la socca, se era il giorno giusto, il formaggio da chi lo fa, le olive sfuse da chi le porta da dietro Grasse. E i prezzi non hanno niente a che vedere con quelli dei ristoranti a duecento metri. È anche il posto dove si capisce come è fatta la zona. Ai banchi si parla francese, italiano e un po\' di provenzale rimasto, e tra i clienti ci sono anziani del quartiere, famiglie ed equipaggi degli yacht del porto che fanno la spesa per i proprietari. Da non fare: andarci a mezzogiorno, perché alle undici e mezza i produttori cominciano a smontare e resta la parte meno interessante. Da fare: comprare lì il pranzo e portarselo sui bastioni. È anche il modo in cui la Costa Azzurra torna a costare poco.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Cours Saleya a Nizza, più grande e più turistico, con il mercato dei fiori',
      'Il Marché Forville a Cannes, uno dei migliori della costa',
      'I mercati dei paesi dell\'entroterra, ognuno con il suo giorno e senza turisti',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'I secchi di fiori colorati ai banchi del Marché Provençal sul Cours Masséna di Antibes',
    immagine: '/images/francia/mercato-provenzale-antibes.jpg',
  },
  {
    slug: 'museo-picasso-antibes',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Il Musée Picasso nel Château Grimaldi',
    localita: 'Château Grimaldi, Antibes',
    cosE:
      'Il castello medievale sui bastioni di Antibes, che nell\'autunno del 1946 fece da atelier a Picasso per alcuni mesi: quando se ne andò, lasciò alla città le opere fatte lì. È stato il primo museo al mondo dedicato a Picasso, ed espone quei lavori nell\'edificio in cui sono nati, con le finestre sul mare.',
    percheFarla:
      'Quello che si vede è un insieme di opere prodotte in quelle stanze, in poche settimane, subito dopo la guerra, e appese dove sono state dipinte: nessun curatore l\'ha messo insieme. La differenza si sente. E la terrazza sul Mediterraneo con le sculture è una delle viste migliori della costa.',
    durata: 'un\'ora e mezza',
    periodo: 'tutto l\'anno, con **un giorno di chiusura alla settimana** e orari diversi tra estate e inverno: **conviene controllarli prima**.',
    costo: 'biglietto contenuto, tra i più bassi per un museo di questo peso; gratuità e riduzioni secondo le regole dei musei municipali di Antibes',
    comePrenotare: 'Non serve prenotare, salvo per le grandi mostre temporanee.',
    cosaPortare: 'Niente di particolare. La terrazza è esposta al sole e al vento.',
    perChiEAdatta: 'Tutti, anche chi di Picasso sa poco: il museo è piccolo, chiaro e non stanca.',
    miaEsperienza:
      'Questo museo è diverso dagli altri musei di Picasso perché qui si vede cosa vuol dire un contesto. Le opere del 1946 fatte in queste stanze (fauni, centauri, capre, pesci, figure che ballano) sono luminose e quasi allegre, e non somigliano a quasi nient\'altro di suo. Il motivo è nella data: la guerra era appena finita, lui era venuto sul Mediterraneo, aveva alle spalle quarantacinque anni di distanza dal cubismo e il conservatore del castello gli aveva messo a disposizione uno spazio enorme e vuoto. Guardi un pannello di fibrocemento con una capra dipinta, ti affacci alla finestra accanto, e c\'è lo stesso mare di allora. Poi la terrazza: sculture in bronzo sui bastioni, il mare su tre lati e, nelle giornate limpide, le Alpi innevate in fondo. Costa pochissimo, dura un\'ora, e quasi tutti quelli che passano sulla costa lo saltano per andare a Saint-Tropez.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Musée National Picasso di Vallauris, con il grande murale della Guerra e della Pace in una cappella romanica',
      'Il Musée Matisse e il Musée Chagall a Nizza, a Cimiez',
      'Il Musée Fernand Léger di Biot',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Le mura sul mare di Antibes con il Château Grimaldi, sede del Musée Picasso, e il campanile della cattedrale',
    immagine: '/images/francia/museo-picasso-antibes.jpg',
  },
  {
    slug: 'sentiero-nietzsche-eze',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Il Sentiero Nietzsche e il villaggio di Èze',
    localita: 'Da Èze-sur-Mer a Èze village, Alpi Marittime',
    cosE:
      'Una mulattiera ripida che collega la stazione ferroviaria sul mare al villaggio arroccato di Èze, circa quattrocento metri più in alto. Porta il nome di Nietzsche perché il filosofo la percorreva quando soggiornava sulla costa, e qui avrebbe concepito parte della terza parte di *Così parlò Zarathustra*.',
    percheFarla:
      'È il modo giusto di arrivare a Èze: a piedi dal mare, invece di parcheggiare sulla strada alta. E in cima, oltre al villaggio, c\'è un giardino esotico sulle rovine del castello, con una delle viste più ampie di tutta la costa.',
    durata: 'un\'ora-un\'ora e mezza in salita, quarantacinque minuti in discesa; il villaggio e il giardino aggiungono un\'ora e mezza',
    periodo:
      'Il periodo migliore va **da ottobre ad aprile**. **D\'estate si sale molto presto al mattino**: la salita è esposta a sud, senza ombra, e diventa pesante. Da evitare nelle ore centrali di luglio e agosto.',
    costo: 'il sentiero è gratuito; il Jardin Exotique in cima ha un biglietto contenuto',
    comePrenotare:
      'Nessuna prenotazione. La soluzione migliore: **treno fino a Èze-sur-Mer, salita a piedi e ritorno in autobus** dal villaggio verso Nizza o Monaco, così non si deve riscendere al punto di partenza.',
    cosaPortare: 'Scarpe da trekking o comunque con una buona suola, **almeno un litro e mezzo d\'acqua**, cappello. Il sentiero è sassoso e in alcuni punti scivoloso.',
    perChiEAdatta:
      'Serve gamba: sono quattrocento metri di dislivello concentrati, su gradoni irregolari. **Non adatto a chi ha problemi alle ginocchia o non cammina abitualmente.** Chi non se la sente arriva al villaggio in autobus o in auto.',
    miaEsperienza:
      'È una salita seria, e inganna. Sulla mappa sono due chilometri; in realtà sono quattrocento metri di dislivello su gradoni di pietra irregolari, tra ulivi e fichi d\'India, con il mare che resta sempre più in basso. A metà si capisce perché a un filosofo malato questa salita facesse venire delle idee: non c\'è niente da guardare se non il mare che si apre alle spalle, e si cammina in silenzio. In cima si arriva sudati in un villaggio pieno di gente scesa dai pullman, e il contrasto è quasi comico. La vera ricompensa è il giardino, costruito sulle rovine del castello a quattrocento metri sul mare, con agavi e cactus tra le pietre e sculture in terracotta. Da lassù si vede la costa da Cap Ferrat fino all\'Esterel, e nelle giornate limpide, dicono, si arriva fino alla Corsica. Il consiglio pratico: treno all\'andata e autobus al ritorno, senza provare a riscendere sulle stesse gambe dopo la salita.',
    giudizio: 'la-rifarei',
    alternative: [
      'Salire a Èze in autobus e vedere solo il villaggio e il giardino',
      'Il sentiero del Cap Ferrat, pianeggiante e sul mare',
      'La salita alla Tête de Chien sopra La Turbie, con il trofeo romano di Augusto',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Una fotografia d\'epoca del villaggio arroccato di Èze sul suo sperone di roccia, con il mare e il Cap Ferrat sullo sfondo',
    immagine: '/images/francia/sentiero-nietzsche-eze.jpg',
  },
  {
    slug: 'fondation-maeght',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'La Fondation Maeght a Saint-Paul-de-Vence',
    localita: 'Saint-Paul-de-Vence, entroterra di Nizza',
    cosE:
      'Una fondazione d\'arte moderna aperta nel 1964 in una pineta sopra Saint-Paul-de-Vence, costruita da un mercante d\'arte e da sua moglie insieme agli artisti che rappresentavano: Giacometti ha progettato il cortile con le sue figure allungate, Miró un labirinto di sculture e ceramiche, Chagall e Braque hanno lavorato sull\'edificio. È una delle collezioni d\'arte moderna più importanti d\'Europa.',
    percheFarla:
      'L\'edificio è stato pensato insieme alle opere che contiene, e il bello sta nel rapporto tra architettura, pineta e sculture all\'aperto. Il cortile di Giacometti, con le figure in bronzo distribuite all\'aperto sotto i pini, è uno degli spazi espositivi più riusciti al mondo.',
    durata: 'due-tre ore',
    periodo:
      'tutto l\'anno. **La collezione permanente non è sempre esposta per intero**, perché lo spazio ospita grandi mostre temporanee: **conviene controllare prima cosa si potrà vedere nei giorni del viaggio**. Chi arriva aspettandosi tutto il cortile di Giacometti e trova una mostra in corso resta deluso.',
    costo: 'biglietto medio, più caro della media dei musei della costa; supplementi per alcune mostre',
    comePrenotare: 'Meglio prenotare durante le mostre importanti.',
    cosaPortare: 'Niente di particolare. Il percorso è in parte all\'aperto, tra i pini.',
    perChiEAdatta: 'Chi ha un interesse anche minimo per l\'arte del Novecento. Va bene anche per chi non ne sa nulla, perché molto è all\'aperto e si guarda camminando.',
    miaEsperienza:
      'La Fondation Maeght la consiglio a chiunque venga in Costa Azzurra pensando che ci siano solo spiagge e yacht. Si sale in un bosco di pini sopra un villaggio, si entra in un edificio basso di mattoni e cemento con due vele bianche sul tetto (non sono decorazioni: raccolgono l\'acqua piovana) e si esce in un cortile con le figure di Giacometti sparse nello spazio. Niente piedistalli in una sala: stanno in piedi su un pavimento all\'aperto, sotto il cielo, e ci si cammina in mezzo. L\'uomo che cammina, in bronzo, alto e sottilissimo, visto contro i pini anziché contro un muro bianco, diventa un\'altra opera. Poi c\'è il labirinto di Miró, un giardino a terrazze con sculture e ceramiche sparse tra la vegetazione, che ai bambini piace moltissimo. La combinazione giusta: la Fondation al mattino, e Saint-Paul-de-Vence nel tardo pomeriggio, quando i pullman sono ripartiti e nel villaggio si torna a camminare.',
    giudizio: 'imperdibile',
    alternative: [
      'La Chapelle du Rosaire di Matisse a Vence, a pochi chilometri, **con orari di apertura molto limitati: conviene controllarli prima**',
      'Il Musée Fernand Léger di Biot',
      'Il MAMAC di Nizza per il contemporaneo',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Il borgo fortificato di Saint-Paul-de-Vence sulla collina all\'imbrunire, a pochi minuti a piedi dalla Fondation Maeght',
    immagine: '/images/francia/fondation-maeght.jpg',
  },
  {
    slug: 'isole-lerino',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Le Isole di Lerino davanti a Cannes',
    localita: 'Sainte-Marguerite e Saint-Honorat, al largo di Cannes',
    cosE:
      'Due isole a quindici minuti di traghetto dalla Croisette. **Sainte-Marguerite** ha il Fort Royal, dove fu detenuto per anni il prigioniero passato alla storia come la Maschera di Ferro, e una pineta attraversata da sentieri. **Saint-Honorat** appartiene a una comunità monastica che vive sull\'isola da circa milleseicento anni, coltiva la vigna e fa il vino.',
    percheFarla:
      'A un quarto d\'ora dal lungomare più mondano della costa ci sono due isole senza auto, con sentieri nella pineta, calette e un monastero attivo. Su una distanza così breve, in Costa Azzurra non c\'è contrasto più forte.',
    durata: 'mezza giornata per una, una giornata intera per entrambe',
    periodo:
      '**da aprile a ottobre**; i mesi migliori sono **maggio, giugno e settembre**. **In alta stagione le corse sono più frequenti, d\'inverno meno**: conviene controllare gli orari, e soprattutto **l\'ora dell\'ultimo rientro**, perché sulle isole non si dorme (salvo nella foresteria del monastero).',
    costo: 'traghetto di andata e ritorno a costo contenuto; ingresso al forte e al museo di Sainte-Marguerite a pagamento; l\'isola monastica è a ingresso libero',
    comePrenotare: 'Biglietti del traghetto al porto o online; **le due isole sono servite da compagnie diverse**, e il biglietto per una non vale per l\'altra.',
    cosaPortare: 'Acqua e pranzo (sulle isole c\'è poco e caro), costume, scarpe da camminata, cappello. **Sull\'isola monastica serve un abbigliamento decoroso**: è un luogo di preghiera.',
    perChiEAdatta: 'Tutti. I sentieri sono in piano e facili.',
    miaEsperienza:
      'Colpisce la distanza. Dalla Croisette, con le auto, le vetrine e i palazzi, sali su un traghetto e dopo un quarto d\'ora cammini in una pineta silenziosa dove non passa nessun veicolo. Sainte-Marguerite va fatta con calma: un sentiero gira l\'isola lungo il mare, ci sono calette di ciottoli quasi vuote anche a luglio, e al centro c\'è il forte, con la cella dove per undici anni è stato tenuto un prigioniero la cui identità non è mai stata accertata, e intorno a cui è nata una delle leggende più solide di Francia. Saint-Honorat è un\'altra cosa ancora. Appartiene a una comunità monastica che vive lì da sedici secoli, i monaci coltivano la vigna, e in un\'ora si fa il giro dell\'isola passando davanti alle antiche fortificazioni del monastero affacciate sul mare. Il silenzio è vero, e chiesto espressamente. È forse il posto meno «Costa Azzurra» di tutta la Costa Azzurra, e sta davanti a Cannes.',
    giudizio: 'imperdibile',
    alternative: [
      'Le Îles d\'Hyères (Porquerolles e Port-Cros), più a ovest, più grandi e più selvagge',
      'Il massiccio dell\'Esterel tra Cannes e Saint-Raphaël, con il porfido rosso sul mare',
      'Una giornata in barca lungo la costa, per vedere le calette che da terra non si raggiungono',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'La costa nord dell\'Île Sainte-Marguerite con gli scogli, i pini e la baia di Cannes sullo sfondo, Isole di Lerino',
    immagine: '/images/francia/isole-lerino.jpg',
  },
  {
    slug: 'louvre-strategia',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'Il Louvre con una strategia',
    localita: 'Palais du Louvre, 1° arrondissement, Parigi',
    cosE:
      'Il museo più grande e più visitato del mondo: decine di migliaia di opere lungo chilometri di sale, in un palazzo che è stato fortezza medievale, residenza reale e, dalla Rivoluzione, museo. Visitarlo vuol dire fare una serie di scelte.',
    percheFarla:
      'Copre cinquemila anni di storia in un solo edificio, e nessun altro museo ha questa ampiezza. Con un piano deciso prima è una delle visite più intense che si possano fare; senza, è una camminata di quattro ore che finisce nella folla davanti a un quadro piccolo.',
    durata: 'tre-quattro ore con una strategia; una giornata intera per chi ha resistenza',
    periodo:
      'tutto l\'anno. **Chiuso il martedì**, il giorno in cui tutta la folla si riversa su Orsay. I momenti migliori sono **l\'apertura** e, nelle sere di **apertura prolungata** (ci sono in alcuni giorni della settimana, conviene controllare quali), le ultime due ore, quando i gruppi sono già usciti.',
    costo: 'biglietto singolo contenuto rispetto alle dimensioni; incluso nel Paris Museum Pass, **che però non sostituisce la prenotazione con fascia oraria**',
    comePrenotare:
      '**Prenotazione online con fascia oraria, di fatto obbligatoria**, da fare in alta stagione con giorni o settimane di anticipo. Una cosa pratica importante: **la Piramide non è l\'unico ingresso**. Ci sono accessi secondari (dalla galleria commerciale sotterranea e dal Passage Richelieu, a condizioni che cambiano) dove la coda dei controlli è molto più breve: **conviene controllare prima quali sono aperti**.',
    cosaPortare: 'Scarpe comode, una bottiglia d\'acqua e un elenco scritto di **dieci opere e due ali**, deciso prima.',
    perChiEAdatta:
      'Tutti, ma stanca. Con i bambini la strategia serve ancora di più: due ore su un percorso scelto, non di più.',
    miaEsperienza:
      'Quasi tutti entrano al Louvre senza aver deciso niente e seguono i cartelli verso la Gioconda. Il risultato è scontato. Si attraversano di corsa sale straordinarie per arrivare in una stanza enorme, in fondo alla quale, dietro un vetro e a sei metri di distanza, c\'è un dipinto di settantasette per cinquantatré centimetri, con duecento persone davanti che tengono il telefono in alto. Lo si guarda per venti secondi, si esce, e si è stanchi. Il Louvre funziona al contrario: si scelgono due ali e dieci opere, e si ignora tutto il resto senza rimpianti. Quello che resta in mente, quasi sempre, non è uno dei quadri famosi. È la **Vittoria di Samotracia** in cima allo scalone Daru, che si vede dal basso mentre si sale: una figura alata, senza testa e senza braccia, su una prua di nave, con il panneggio che sembra bagnato dal vento. È l\'allestimento più riuscito di qualunque museo al mondo, e non costa fatica: da lì si passa comunque. L\'altra scoperta sono i sotterranei, dove si vedono le **fondazioni del castello medievale** su cui è stato costruito il palazzo: un fossato e la base di un torrione, sotto il museo.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Musée d\'Orsay, più corto e per molti più soddisfacente',
      'Il Musée du Quai Branly per le arti extraeuropee',
      'Una visita guidata tematica al Louvre, che risolve il problema della strategia',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'La piramide di vetro nella Cour Napoléon del Louvre con le ali del palazzo intorno, Parigi',
    immagine: '/images/francia/louvre-strategia.jpg',
  },
  {
    slug: 'sainte-chapelle',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'La Sainte-Chapelle in una giornata di sole',
    localita: 'Île de la Cité, 1° arrondissement, Parigi',
    cosE:
      'Una cappella gotica a due piani costruita nel XIII secolo da Luigi IX per custodire le reliquie della Passione, tra cui la Corona di Spine. La cappella alta ha quindici vetrate alte circa quindici metri, con oltre mille pannelli istoriati, e i muri sono ridotti a sottili colonne: il vetro occupa quasi tutta la superficie.',
    percheFarla:
      'È forse l\'interno più bello di Parigi, ed è un capolavoro tecnico: costruita in circa sette anni, con una struttura portante ridotta al minimo per far posto al vetro. In una giornata di sole l\'effetto non ha equivalenti in Europa.',
    durata: 'quarantacinque minuti-un\'ora',
    periodo:
      'tutto l\'anno, **ma solo con il sole**. Con il cielo coperto le vetrate restano scure e la visita perde gran parte del senso: a Parigi è l\'unica visita da spostare in base al meteo. Il momento migliore è il **tardo pomeriggio**, con il sole basso.',
    costo: 'biglietto contenuto; **c\'è un biglietto cumulativo con la Conciergerie**, che sta nello stesso complesso ed è dove furono rinchiusi i prigionieri del Terrore',
    comePrenotare:
      'Meglio prenotare online. Attenzione: **la cappella è dentro il complesso del Palazzo di Giustizia e si passa da un controllo di sicurezza** che nelle ore centrali ha una coda lunga, **qualunque biglietto o pass si abbia**.',
    cosaPortare: 'Niente. Al massimo un binocolo leggero per leggere i pannelli in alto.',
    perChiEAdatta: 'Tutti. La cappella bassa è accessibile, a quella alta si sale con una scala a chiocciola stretta.',
    miaEsperienza:
      'Si entra dalla cappella bassa, schiacciata, scura, dipinta di blu e oro, e per un momento si pensa che sia tutto lì. Poi si sale una scala a chiocciola stretta, si sbuca nella cappella alta, e l\'effetto è quasi fisico: le pareti non ci sono. Ci sono quindici finestre alte quindici metri, separate da colonnine sottilissime, e la luce che entra è colorata e si muove. Il rosso e il blu del vetro del Duecento hanno una saturazione che i restauri successivi non hanno mai ottenuto. Conviene sapere prima cosa si sta guardando: le vetrate raccontano l\'intera Bibbia in oltre mille scene, e si leggono dal basso verso l\'alto e da sinistra a destra, come un fumetto. Erano un racconto per immagini per chi non sapeva leggere. E il tutto è stato costruito in circa sette anni, un tempo sconosciuto alle cattedrali gotiche, perché serviva una teca per reliquie che il re aveva pagato più di quanto costò la cappella. Regola pratica: **si va solo se c\'è il sole.** Con il cielo grigio è un\'altra cosa, e conviene rimandare.',
    giudizio: 'imperdibile',
    alternative: [
      'Notre-Dame, riaperta nel dicembre 2024, a ingresso gratuito',
      'La Conciergerie, nello stesso complesso, con il biglietto cumulativo',
      'Saint-Séverin e Saint-Eustache, due chiese gotiche molto meno visitate',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'Le altissime vetrate colorate della cappella alta della Sainte-Chapelle, Parigi',
    immagine: '/images/francia/sainte-chapelle.jpg',
  },
  {
    slug: 'montmartre-alba',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'Montmartre all\'alba',
    localita: '18° arrondissement, Parigi',
    cosE:
      'La collina più alta di Parigi, annessa alla città solo nel 1860, con il Sacré-Cœur in cima, le vie ripide, l\'ultima vigna urbana rimasta e le scalinate che scendono verso Pigalle. Fino a metà mattina è un quartiere abitato; dalle dieci in poi è una delle zone più affollate d\'Europa.',
    percheFarla:
      'Montmartre alle sette del mattino è un quartiere, a mezzogiorno un parco a tema. Per vedere il primo basta alzarsi presto.',
    durata: 'due-tre ore',
    periodo:
      'tutto l\'anno. **Conta più l\'ora della stagione**: all\'alba o nelle prime ore del mattino. D\'inverno, con la luce che arriva tardi, va bene anche alle otto.',
    costo: 'gratuito; la funicolare costa come un biglietto della metropolitana, e la salita alla cupola del Sacré-Cœur ha un biglietto contenuto',
    comePrenotare: 'Niente da prenotare.',
    cosaPortare: 'Scarpe comode: è tutto salite e discese, su pavé e scalinate.',
    perChiEAdatta: 'Tutti, sapendo che il dislivello è vero e le scalinate sono tante. Per evitare la salita principale c\'è la funicolare.',
    miaEsperienza:
      'Alle sette del mattino, sui gradini davanti al Sacré-Cœur, c\'erano tre persone e uno spazzino. Parigi stava sotto, piatta, grigio-azzurra, con la Tour Eiffel a sinistra e la torre di Montparnasse a destra, e non c\'era rumore. Tre ore dopo, sugli stessi gradini, ci sono duemila persone, i venditori di braccialetti e chi suona la chitarra. Il posto è lo stesso. Dopo, bisogna voltare le spalle alla basilica e camminare nelle vie laterali. **Place du Tertre**, con i pittori e i menù turistici, è a duecento metri e va attraversata senza fermarsi: a un isolato ci sono strade dove non c\'è nessuno. La **Rue de l\'Abreuvoir** con le case basse, la **vigna del Clos Montmartre**, ultima vigna urbana di Parigi, che fa qualche centinaio di bottiglie l\'anno, il muro dei baci, le scalinate che scendono verso nord. Fino al 1860 la collina era un comune a sé, con i mulini, le cave di gesso e il vino esente dalle tasse della città: per questo ci si veniva a bere e a divertirsi, e per questo ci sono arrivati gli artisti. Dalle dieci in poi, però, conviene scendere e andare altrove.',
    giudizio: 'la-rifarei',
    alternative: [
      'Belleville, la Montmartre di oggi: collina, vista, street art e nessun turista',
      'Il Parc des Buttes-Chaumont, il parco più bello di Parigi',
      'Il Père-Lachaise al mattino presto',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'La basilica bianca del Sacré-Cœur in cima alla collina di Montmartre, con il prato e le scalinate in primo piano',
    immagine: '/images/francia/montmartre-alba.jpg',
  },
  {
    slug: 'catacombe-parigi',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'Le Catacombe di Parigi',
    localita: '14° arrondissement, Parigi',
    cosE:
      'Un percorso di circa un chilometro e mezzo a venti metri sotto la strada, dentro antiche cave di calcare dove alla fine del Settecento furono trasferiti i resti dei cimiteri cittadini, ormai pieni. Le ossa di **diversi milioni di persone** sono accatastate lungo le gallerie, in muri composti con un criterio quasi decorativo.',
    percheFarla:
      'È la soluzione fisica a un problema urbanistico del XVIII secolo: i cimiteri parigini erano così pieni da provocare crolli e contaminazioni. E camminare per un chilometro e mezzo tra muri di ossa non somiglia a nient\'altro in città.',
    durata: 'un\'ora-un\'ora e mezza di percorso; **si scendono circa 130 gradini e se ne risalgono più di 110** all\'uscita, che è in un punto diverso dall\'ingresso',
    periodo:
      'tutto l\'anno: sottoterra ci sono **circa quattordici gradi costanti**, un sollievo d\'estate, e d\'inverno serve una giacca. **È chiuso un giorno alla settimana**: conviene controllare quale.',
    costo: 'biglietto medio; online costa più che alla cassa, ma è l\'unico modo realistico di entrare',
    comePrenotare:
      '**Prenotare online con fascia oraria è quasi indispensabile**: senza, la coda in strada può durare ore, e la capienza sotterranea è limitata per legge.',
    cosaPortare:
      'Una **giacca** (quattordici gradi), scarpe chiuse perché il fondo è umido e in alcuni punti fangoso, e nient\'altro: **gli zaini grandi non sono ammessi**. Vietato toccare le ossa.',
    perChiEAdatta:
      '**Non adatte a chi soffre di claustrofobia**, a chi ha difficoltà motorie (le scale a chiocciola sono strette e non c\'è ascensore) o a bambini piccoli che si impressionano. Non è un luogo horror ed è trattato con rispetto, ma resta un ossario.',
    miaEsperienza:
      'Si scende una scala a chiocciola stretta per venti metri, si cammina per qualche centinaio di metri in una galleria di cava vuota e umida, e si arriva a una porta con un\'iscrizione che avverte: da lì comincia l\'impero dei morti. Da quel punto, per oltre un chilometro, ci sono muri di ossa. Femori accatastati in file orizzontali, crani incastrati a formare croci e motivi geometrici, lapidi che dicono da quale cimitero è arrivato quel gruppo e in che anno. A disturbare non è la teatralità macabra, che pure c\'è: è la quantità. Si continua a camminare e le ossa continuano, per centinaia di metri, e a un certo punto si smette di guardarle come oggetti e si comincia a contare quante persone siano. Sono milioni, più di quante ne vivano oggi in città. È il monumento più onesto di Parigi: tutti quelli che hanno abitato qui prima, messi da parte quando non c\'era più posto. Una nota pratica che sembra un dettaglio e non lo è: **l\'uscita è a più di un chilometro dall\'ingresso**, in un\'altra via, e bisogna saperlo se si è lasciato qualcosa o qualcuno all\'entrata.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Père-Lachaise, in superficie e gratuito',
      'Le fognature di Parigi, visitabili con un percorso museale',
      'La cripta archeologica sotto il sagrato di Notre-Dame',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'Le pareti di ossa e teschi impilati nell\'ossario delle Catacombe di Parigi, con la targa del Cimitero degli Innocenti',
    immagine: '/images/francia/catacombe-parigi.jpg',
  },
  {
    slug: 'pere-lachaise',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'Il cimitero del Père-Lachaise',
    localita: '20° arrondissement, Parigi',
    cosE:
      'Il cimitero più grande di Parigi, aperto nel 1804 su una collina che allora era periferia. Oggi è un parco di quarantaquattro ettari con viali alberati, settantamila sepolture e una quantità straordinaria di scultura funeraria dell\'Ottocento. Ci sono sepolti Chopin, Oscar Wilde, Jim Morrison, Édith Piaf, Molière e molti altri.',
    percheFarla:
      'È gratuito, è uno dei posti più belli e tranquilli di Parigi, ed è un museo di scultura all\'aperto con due secoli di gusto funerario. È anche un pezzo di storia politica: contro il **Mur des Fédérés**, in fondo al cimitero, nel 1871 furono fucilati gli ultimi combattenti della Comune.',
    durata: 'due-tre ore per una visita con calma',
    periodo:
      'tutto l\'anno, e **il periodo migliore è l\'autunno**, quando castagni e aceri cambiano colore. Al mattino presto è quasi vuoto. **Con la pioggia i viali acciottolati diventano scivolosi.**',
    costo: 'gratuito',
    comePrenotare:
      'Niente da prenotare. **La mappa è indispensabile**: il cimitero è enorme, l\'unico riferimento sono i numeri delle divisioni, e senza una piantina si gira a vuoto. Le piantine si trovano agli ingressi e online.',
    cosaPortare: 'Scarpe comode, mappa, acqua. È un cimitero in uso: si chiedono silenzio e rispetto.',
    perChiEAdatta: 'Tutti. Il terreno è in pendenza e in molti punti acciottolato.',
    miaEsperienza:
      'Al Père-Lachaise si va per due ragioni, e la seconda è migliore della prima. La prima è la caccia alle tombe famose, piacevole e riuscita: la tomba di Wilde, con la sfinge alata, è protetta da un vetro dal 2011 perché era coperta del rossetto di migliaia di baci; quella di Morrison è transennata; quella di Chopin ha sempre fiori freschi. La seconda ragione, quella per cui ci si torna, è che è un parco. Si sale un viale acciottolato tra i castagni, passano i gatti, il traffico non si sente, e ai lati ci sono duecento anni di scultura funeraria: cappelle neogotiche, obelischi all\'egiziana, angeli liberty. In fondo, i monumenti collettivi: quelli ai deportati nei campi di sterminio e il **Mur des Fédérés**, un muro qualunque contro cui, nel maggio del 1871, furono fucilati gli ultimi difensori della Comune di Parigi, sepolti in una fossa comune lì davanti. In Italia è una storia poco conosciuta; qui la si commemora ancora. Si entra per vedere Jim Morrison e si esce dopo tre ore di cammino.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il cimitero di Montmartre e quello di Montparnasse, più piccoli e meno visitati',
      'Il Parc des Buttes-Chaumont, a poca distanza',
      'La Coulée verte René-Dumont, il parco lineare sopra il viadotto',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'Cappelle funerarie e tombe in pietra all\'ombra degli alberi nel cimitero del Père-Lachaise, Parigi',
    immagine: '/images/francia/pere-lachaise.jpg',
  },
  {
    slug: 'spiagge-sbarco',
    paeseSlug: 'francia',
    destinazioneSlug: 'normandia',
    nome: 'Le spiagge dello sbarco',
    localita: 'Costa del Calvados e della Manica, da Sainte-Mère-Église a Ouistreham',
    cosE:
      'Ottanta chilometri di costa divisi nei cinque settori dello sbarco del 6 giugno 1944 (Utah, Omaha, Gold, Juno, Sword), con i cimiteri militari, le batterie tedesche, i resti del porto artificiale di Arromanches, i musei e i villaggi che per primi furono liberati.',
    percheFarla:
      'È uno dei pochi luoghi d\'Europa dove la storia del Novecento si tocca in un paesaggio rimasto quasi identico. E resta in mente il contrasto tra quanto sono banali quelle spiagge e quello che ci è successo.',
    durata: 'una giornata piena per due o tre settori; due giornate per vederli tutti con calma',
    periodo:
      'tutto l\'anno; **da maggio a settembre** per il meteo. **Intorno al 6 giugno** ci sono le commemorazioni ufficiali: è il momento più intenso e il più difficile, con strade chiuse, alloggi esauriti con un anno di anticipo e aree ad accesso regolato.',
    costo: 'i cimiteri, la Pointe du Hoc e le batterie sono **a ingresso libero**; i musei e il Mémorial de Caen hanno biglietti contenuti',
    comePrenotare:
      'Per i siti all\'aperto non c\'è niente da prenotare. **Le visite guidate in giornata da Bayeux e Caen vanno prenotate**, e qui più che altrove ne vale la pena: il racconto è metà della visita, perché il paesaggio da solo non spiega nulla.',
    cosaPortare:
      'Una giacca a vento in qualunque mese: sulla costa normanna il vento non smette mai. Scarpe comode, perché alla Pointe du Hoc si cammina su un terreno sconvolto dai crateri.',
    perChiEAdatta:
      'Tutti, con un\'avvertenza: **è un luogo pesante dal punto di vista emotivo**, e con i bambini va preparato. I cimiteri militari sono luoghi di raccoglimento, e ci si comporta di conseguenza.',
    miaEsperienza:
      'Il consiglio più utile riguarda l\'ordine: **prima un museo, poi le spiagge**. Il Mémorial de Caen o uno dei musei di settore danno il contesto: perché lì, perché quel giorno, come funzionava il Vallo Atlantico, cosa voleva dire attraversare quel tratto di sabbia. Senza contesto, Omaha Beach è una spiaggia larghissima e ventosa con la gente che porta a spasso il cane. Ma è proprio questo che resta. Guardi quella distesa piatta, vedi in fondo la scarpata bassa dove c\'erano le postazioni, calcoli a occhio quanti metri allo scoperto ci sono in mezzo, e non serve altro. Alla **Pointe du Hoc** l\'effetto è opposto e immediato, perché il terreno è rimasto com\'era: crateri di bombe uno dentro l\'altro per ettari, bunker spaccati e ribaltati, e il ciglio della falesia da cui i ranger salirono con le scale. Il cimitero americano di Colleville, con le croci allineate sopra la spiaggia, è progettato per fare un effetto preciso, e lo fa. Ad Arromanches ci sono ancora in mare i cassoni di cemento del porto artificiale, rimorchiati dall\'Inghilterra e affondati apposta per creare un porto dove non c\'era: senza un porto, lo sbarco non si poteva rifornire. Sono lì da ottant\'anni, e con la bassa marea i bambini ci giocano intorno.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Mémorial de Caen da solo, per chi ha mezza giornata',
      'Il museo di Utah Beach e Sainte-Mère-Église per il settore americano occidentale',
      'I cimiteri tedesco e britannico, che raccontano la stessa vicenda da altri due punti di vista',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'La lunga spiaggia di Omaha Beach con la bassa marea e il muro sul lungomare, Calvados, Normandia',
    immagine: '/images/francia/spiagge-sbarco.jpg',
  },
  {
    slug: 'mont-saint-michel',
    paeseSlug: 'francia',
    destinazioneSlug: 'normandia',
    nome: 'Il Mont-Saint-Michel con la marea',
    localita: 'Baia del Mont-Saint-Michel, al confine tra Normandia e Bretagna',
    cosE:
      'Un isolotto roccioso in mezzo a una baia, con in cima un\'abbazia benedettina costruita a partire dall\'VIII secolo e un villaggio fortificato aggrappato ai fianchi. La baia ha **l\'escursione di marea più ampia dell\'Europa continentale**, e con le grandi maree l\'acqua circonda tutta la roccia.',
    percheFarla:
      'È una delle costruzioni più improbabili d\'Europa: un\'abbazia gotica issata sulla punta di uno scoglio, con la chiesa che poggia su cripte costruite apposta per reggerla. E la marea è il motivo per cui esiste.',
    durata: 'mezza giornata per l\'abbazia e il villaggio; una notte per vederlo la sera e all\'alba',
    periodo:
      'tutto l\'anno. **Più della stagione conta la marea**: il **calendario delle grandi maree esce con anni di anticipo**, e sono i pochi giorni in cui il Mont torna a essere un\'isola circondata dall\'acqua. Le ore migliori sono **prima delle 9.30 e dopo le 18**.',
    costo: 'il villaggio è ad accesso libero; **l\'abbazia ha un biglietto**, e **parcheggio sulla terraferma più navetta** sono una spesa a parte, non trascurabile',
    comePrenotare:
      'Il biglietto dell\'abbazia si prenota online, ed è meglio farlo in alta stagione. **Le visite serali con illuminazione e musica ci sono solo in alcuni periodi: le date cambiano, conviene controllarle.** Per dormire sull\'isola servono mesi di anticipo.',
    cosaPortare:
      'Scarpe comode: la Grande Rue è in salita e all\'abbazia si arriva per scalinate. Sempre una giacca a vento. Per la traversata della baia: pantaloni corti, asciugamano e **niente scarpe**, perché si cammina scalzi.',
    perChiEAdatta:
      'Tutti, sapendo che **dal parcheggio all\'abbazia si sale parecchio** e che il villaggio è fatto di scalinate. La traversata della baia vuol dire ore di cammino su sabbia e fango.',
    miaEsperienza:
      'Il Mont-Saint-Michel è vittima dei suoi orari. Alle undici del mattino la Grande Rue, l\'unica via del villaggio, che sale tra le case, è una fila compatta di persone tra negozi di souvenir e crêperie, e per mezz\'ora si procede a passo d\'uomo. Alle sette di sera la stessa via è vuota, si sentono il vento e i gabbiani, e le case chiuse sembrano quello che sono: un paese di duecento metri costruito su uno scoglio. L\'abbazia è la parte che vale, e va guardata da sotto prima che da dentro. La chiesa in cima poggia su una serie di cripte e di sale costruite apposta per sostenerla su una roccia che non era piatta: prima hanno costruito il basamento, poi la chiesa sopra. Il risultato è un edificio che sale in verticale su tre livelli, con il chiostro sospeso tra cielo e mare. A cambiare la visita, però, è la marea. Nella baia l\'escursione è tra le più alte d\'Europa, e nei giorni di grande marea l\'acqua risale per chilometri di sabbia a una velocità che sorprende. Da qui l\'altra avvertenza, che non è folklore: **la baia non si attraversa da soli**. Ci sono zone di sabbie mobili, e la marea arriva più in fretta di quanto si creda. Con una guida è una delle camminate più belle di Francia.',
    giudizio: 'imperdibile',
    alternative: [
      'La traversata della baia a piedi con una guida autorizzata, l\'arrivo dei pellegrini',
      'Guardare il Mont dalla costa bretone, dal lato di Cancale, per la vista d\'insieme',
      'L\'abbazia di Fontevraud o quella di Jumièges, se si è stufi della folla',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Il Mont-Saint-Michel con l\'abbazia in cima alla roccia, visto dalla baia con le acque basse della marea',
    immagine: '/images/francia/mont-saint-michel.jpg',
  },
  {
    slug: 'arazzo-bayeux',
    paeseSlug: 'francia',
    destinazioneSlug: 'normandia',
    nome: 'L\'Arazzo di Bayeux',
    localita: 'Bayeux, Calvados',
    cosE:
      'Un ricamo di lana su lino lungo circa settanta metri e alto cinquanta centimetri, dell\'XI secolo, che racconta in cinquantotto scene la conquista normanna dell\'Inghilterra fino alla battaglia di Hastings del 1066. Tecnicamente è un ricamo, non un arazzo, ed è iscritto nel registro UNESCO della Memoria del Mondo.',
    percheFarla:
      'È il racconto per immagini più straordinario del medioevo europeo: settanta metri di stoffa che narrano una vicenda politica complessa, con didascalie in latino, dettagli su navi, armi, abiti e agricoltura, e perfino il passaggio di una cometa. Una fonte storica, e un fumetto di novecentocinquant\'anni fa.',
    durata: 'un\'ora-un\'ora e mezza',
    periodo:
      'tutto l\'anno. **Attenzione: il museo è in un lungo cantiere di ristrutturazione**, con chiusura e trasferimento temporaneo dell\'opera: **prima di organizzare il viaggio conviene controllare date e sede.**',
    costo: 'biglietto contenuto, con cumulativi per i musei di Bayeux',
    comePrenotare: 'In alta stagione meglio prenotare. L\'audioguida è inclusa e quasi indispensabile, perché dà il ritmo lungo la vetrina.',
    cosaPortare: 'Niente. **Non si fotografa**, e la sala è in penombra per conservare l\'opera.',
    perChiEAdatta: 'Tutti, anche i bambini: è una storia raccontata per immagini, e come tale funziona benissimo.',
    miaEsperienza:
      'Ci si immagina un arazzo appeso a una parete. Invece è una striscia lunghissima dentro una vetrina curva, in una sala buia, che si percorre lentamente con l\'audioguida che va avanti da sola: si cammina alla velocità del racconto. E il racconto è sorprendentemente moderno. C\'è un antefatto, i personaggi vengono presentati uno a uno, c\'è il giuramento tradito che giustifica tutta l\'impresa, la preparazione, e poi la battaglia. Colpiscono i dettagli: gli alberi abbattuti e le navi costruite, i cavalli caricati a bordo, i cuochi che preparano il pasto prima dello sbarco, e lungo i bordi in alto e in basso una fascia di animali, scene di campagna e figure che commentano. C\'è anche una cometa, guardata con terrore dalla folla, che gli astronomi hanno identificato con il passaggio della cometa di Halley del 1066. Quello che resta è che si tratta di **propaganda**: l\'hanno commissionato i vincitori, e racconta la conquista come un atto di giustizia. Saperlo mentre lo si guarda lo rende ancora più interessante.',
    giudizio: 'imperdibile',
    alternative: [
      'La cattedrale di Bayeux, a duecento metri, per cui probabilmente l\'arazzo fu realizzato',
      'Il Mémorial de Caen, per l\'altra guerra che ha attraversato questa terra',
      'Il castello di Falaise, dove nacque Guglielmo il Conquistatore',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Un dettaglio dell\'Arazzo di Bayeux con i cavalieri normanni nella battaglia di Hastings e Guglielmo che solleva l\'elmo',
    immagine: '/images/francia/arazzo-bayeux.jpg',
  },
  {
    slug: 'giverny',
    paeseSlug: 'francia',
    destinazioneSlug: 'normandia',
    nome: 'La casa e il giardino di Monet a Giverny',
    localita: 'Giverny, Eure, tra Parigi e Rouen',
    cosE:
      'La casa dove Claude Monet ha vissuto per più di quarant\'anni e il giardino che ha progettato, scavato e piantato con le sue mani: il **Clos Normand** davanti alla casa, con le aiuole di fiori a fasce di colore, e il **giardino d\'acqua** con lo stagno delle ninfee, i salici e il ponte giapponese, creato deviando un braccio del fiume.',
    percheFarla:
      'Per Monet il giardino era il quadro stesso, più che il posto dove dipingeva. Ha comprato il terreno, deviato l\'acqua, piantato le ninfee e disposto i colori per avere il soggetto davanti a casa, e poi l\'ha dipinto per trent\'anni, fino alle grandi tele delle Ninfee. Camminarci dentro vuol dire entrare nel motivo.',
    durata: 'due ore per la casa e i giardini',
    periodo:
      '**aperto indicativamente da fine marzo a inizio novembre**, chiuso d\'inverno: **conviene controllare le date**. I periodi migliori sono **maggio-giugno** (glicini, iris, papaveri) e **luglio-agosto** per le ninfee in fiore. È molto affollato: **l\'unico momento tranquillo è l\'apertura del mattino**.',
    costo: 'biglietto medio; possibili cumulativi con il museo degli impressionismi accanto',
    comePrenotare:
      '**Prenotare online con fascia oraria è quasi indispensabile**, e in alta stagione necessario. Da Parigi si arriva in treno fino a Vernon, poi navetta o bici lungo la ciclabile.',
    cosaPortare: 'Niente di particolare. Il percorso è in piano e quasi tutto all\'aperto.',
    perChiEAdatta: 'Tutti. Al giardino d\'acqua si arriva con un sottopasso, e il percorso è accessibile.',
    miaEsperienza:
      'Giverny è una di quelle visite che la folla rischia di rovinare e che invece reggono, a una condizione: arrivare all\'apertura. Alle dieci del mattino sul ponte giapponese si fa la fila per la foto; alle nove e mezza è vuoto e si sente solo l\'acqua. A cambiare il modo di guardare i quadri è capire l\'ordine delle cose: Monet questo posto non l\'ha trovato, se l\'è costruito. Ha comprato il terreno al di là della strada, ha ottenuto il permesso di deviare un braccio del fiume per creare lo stagno, ha fatto piantare salici e ninfee e costruire il ponte sul modello delle stampe giapponesi che collezionava (e le stampe sono ancora appese nelle stanze della casa). Poi ha passato trent\'anni a dipingere quella superficie d\'acqua a ore diverse. Il giardino davanti alla casa è l\'altra metà: aiuole strettissime divise per fasce di colore, con fiori scelti per sbocciare uno dopo l\'altro, così che la tavolozza cambiasse tutto l\'anno. Si cammina, insomma, dentro una tela dipinta con le piante. Nella casa la cucina con le piastrelle blu e la sala da pranzo gialla sono rimaste com\'erano.',
    giudizio: 'la-rifarei',
    alternative: [
      'L\'Orangerie a Parigi, per vedere le grandi Ninfee nelle sale ovali',
      'Il Musée Marmottan Monet, con la più ampia raccolta al mondo dell\'artista',
      'Rouen e la sua cattedrale, dipinta decine di volte a ore diverse',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Lo stagno delle ninfee nel giardino di Claude Monet a Giverny, circondato da salici e piante acquatiche',
    immagine: '/images/francia/giverny.jpg',
  },
  {
    slug: 'gr34-sentiero-doganieri',
    paeseSlug: 'francia',
    destinazioneSlug: 'bretagna',
    nome: 'Il GR34, sentiero dei doganieri',
    localita: 'Tutta la costa bretone, oltre duemila chilometri',
    cosE:
      'Il sentiero costiero più lungo di Francia, nato nel Settecento per i pattugliamenti contro il contrabbando lungo tutta la costa bretone. La traccia segue sempre il bordo dell\'acqua (falesie, spiagge, porti, brughiere) e non prende mai la scorciatoia nell\'interno.',
    percheFarla:
      'Non serve farlo tutto: da qualunque paese della costa bretone si cammina un tratto di due o tre ore e si ha già il senso dell\'intero sentiero, con il paesaggio che cambia di continuo e il mare sempre di fianco.',
    durata: 'da due ore a settimane, secondo il tratto scelto',
    periodo:
      '**da aprile a ottobre** per un meteo più affidabile, ma il sentiero si cammina tutto l\'anno. **Il meteo va controllato appena prima di partire**: qui il tempo cambia nel giro di un\'ora, in ogni stagione.',
    costo: 'gratuito',
    comePrenotare: 'Nessuna prenotazione. La segnaletica bianca e rossa è continua, come su tutti i GR francesi.',
    cosaPortare: 'Sempre la giacca antipioggia, scarpe da trekking, vestiti a strati e gli **orari di marea**, se il tratto scelto tocca la battigia.',
    perChiEAdatta:
      'Va bene per tutti: ci sono tratti in piano facili e tratti su falesia più impegnativi. **La segnaletica delle maree va rispettata**, perché alcuni tratti si allagano.',
    miaEsperienza:
      'Del GR34 colpisce che non finisce mai, e lo si capisce subito: da qualunque paese si parta, il sentiero va avanti in entrambe le direzioni fino all\'orizzonte, e non «arriva» da nessuna parte prima di settimane. È nato per sorvegliare i contrabbandieri, e segue sempre il bordo dell\'acqua il più da vicino possibile: sul ciglio delle falesie, sulle dighe, nelle pinete lungo la costa. In un paio d\'ore si passa da una spiaggia di sabbia bianca a una scogliera di granito rosa, a un porticciolo di pescatori con le barche appoggiate sul fango perché la marea se n\'è andata. Nessuna altra cosa spiega meglio perché la Bretagna vada percorsa, più che visitata: ogni tratto ha un carattere diverso, e le sorprese non finiscono.',
    giudizio: 'imperdibile',
    alternative: [
      'Il tratto della Côte de Granit Rose, tra Perros-Guirec e Ploumanac\'h',
      'Il tratto della penisola di Crozon, più selvaggio',
      'Il sentiero costiero intorno a Belle-Île, in versione isolana',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Due escursionisti sul sentiero dei doganieri tra felci e cespugli a picco sul mare vicino a Carantec, Bretagna',
    immagine: '/images/francia/gr34-sentiero-doganieri.jpg',
  },
  {
    slug: 'carnac-megaliti',
    paeseSlug: 'francia',
    destinazioneSlug: 'bretagna',
    nome: 'Gli allineamenti di Carnac',
    localita: 'Carnac, Morbihan',
    cosE:
      'Migliaia di menhir disposti in file parallele per diversi chilometri, eretti nel Neolitico, **più antichi di Stonehenge e delle piramidi egizie**. Sulla loro funzione ci sono solo ipotesi (rituale, astronomica, funeraria), senza una risposta definitiva.',
    percheFarla:
      'È uno dei complessi megalitici più estesi al mondo, e guardarlo costringe ad ammettere un limite: non sappiamo perché sia stato costruito, da chi esattamente, né come abbiano spostato pietre così grandi senza il metallo.',
    durata: 'due-tre ore per una visita con calma',
    periodo:
      'tutto l\'anno. **L\'accesso ai campi principali è regolato per proteggere il suolo**: in alta stagione (indicativamente da giugno a settembre) tra le pietre si entra poco o solo con una visita guidata; **fuori stagione l\'accesso è più libero**. Le regole cambiano: conviene informarsi alla Maison des Mégalithes.',
    costo: 'il giro del perimetro è gratuito; le visite guidate dentro i recinti hanno un costo contenuto',
    comePrenotare: 'Le visite guidate si prenotano al centro visitatori; in alta stagione è meglio farlo.',
    cosaPortare: 'Niente di particolare. Un binocolo aiuta a cogliere l\'estensione da qualche punto panoramico.',
    perChiEAdatta: 'Tutti. Il perimetro si gira facilmente a piedi o in bici.',
    miaEsperienza:
      'Carnac va affrontato sapendo cosa si sta guardando, altrimenti sembra solo un campo di pietre. Sono migliaia di menhir in file parallele che corrono per chilometri, alzati seimila anni fa da una civiltà senza metallo: prima delle piramidi, prima di Stonehenge. Non sappiamo perché li abbiano messi lì. Le ipotesi vanno dal culto religioso all\'osservazione astronomica ai percorsi cerimoniali, e nessuna è dimostrata. È uno dei pochi posti in Europa dove alla domanda «perché?» l\'unica risposta onesta è «non lo sappiamo», e accettarlo davanti a un\'opera così enorme è un\'esperienza rara.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il cairn di Gavrinis, nel Golfo del Morbihan, con incisioni neolitiche, che si raggiunge in barca',
      'Il tumulo di Saint-Michel a Carnac stesso',
      'Locmariaquer, con il grande menhir spezzato',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'I menhir di granito allineati nella brughiera dell\'allineamento di Kerlescan a Carnac, Bretagna',
    immagine: '/images/francia/carnac-megaliti.jpg',
  },
  {
    slug: 'saint-malo-bastioni',
    paeseSlug: 'francia',
    destinazioneSlug: 'bretagna',
    nome: 'I bastioni di Saint-Malo con la marea alta',
    localita: 'Saint-Malo, Ille-et-Vilaine',
    cosE:
      'Il camminamento continuo sulle mura della città corsara, ricostruita pietra su pietra dopo la distruzione quasi totale del 1944, con vista sul mare, sul forte e sulle isolette che con la bassa marea si raggiungono a piedi.',
    percheFarla:
      'Il giro completo dei bastioni si fa in un\'ora e mostra la città come nessun\'altra visita. E con l\'alta marea le onde scavalcano il molo: uno spettacolo gratuito.',
    durata: 'un\'ora per il giro completo dei bastioni',
    periodo: 'tutto l\'anno; **con l\'alta marea e il mare mosso** le onde contro le mura fanno più spettacolo, quindi conviene guardare l\'orario della marea.',
    costo: 'gratuito',
    comePrenotare: 'Nessuna prenotazione.',
    cosaPortare: 'Una giacca a vento: sui bastioni il vento c\'è quasi sempre.',
    perChiEAdatta: 'Tutti. Il percorso è in piano, con qualche gradino.',
    miaEsperienza:
      'Saint-Malo è stata rasa al suolo quasi del tutto nell\'agosto del 1944 e ricostruita pietra su pietra negli anni successivi, rispettando il più possibile l\'aspetto originale. Il giro dei bastioni fa capire la scala dell\'impresa: si cammina sopra la città vecchia, si vedono i tetti d\'ardesia e il forte al largo, e con l\'alta marea le onde si rompono contro le mura con spruzzi che arrivano fin sul camminamento. Con la bassa marea, invece, si può arrivare a piedi ad alcune delle isolette davanti alla città: gli orari vanno sempre controllati, perché la marea risale in fretta.',
    giudizio: 'la-rifarei',
    alternative: [
      'Dinard, dall\'altra parte dell\'estuario, con le ville liberty',
      'Il Fort National, raggiungibile a piedi con la bassa marea',
      'Cancale, poco più a est, per le ostriche',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'I bastioni di Saint-Malo battuti dalle onde, con il Fort National sull\'isolotto in lontananza',
    immagine: '/images/francia/saint-malo-bastioni.jpg',
  },
  {
    slug: 'chambord',
    paeseSlug: 'francia',
    destinazioneSlug: 'castelli-loira',
    nome: 'Chambord e la scala a doppia elica',
    localita: 'Chambord, Loir-et-Cher',
    cosE:
      'Il più grande castello della Loira, voluto da Francesco I come reggia di caccia: quattrocentoquaranta stanze, un parco recintato di oltre cinquemila ettari e, al centro, una scala a doppia elica, due rampe intrecciate su cui due persone possono salire e scendere nello stesso momento senza incontrarsi mai.',
    percheFarla:
      'È l\'edificio più sproporzionato e teatrale della valle, mai abitato sul serio. E la terrazza sul tetto, una foresta di camini, torrette e lucernari scolpiti, è uno degli spazi più stravaganti dell\'architettura del Rinascimento.',
    durata: 'mezza giornata, di più se si gira anche il parco',
    periodo: 'tutto l\'anno; il periodo migliore è **aprile-giugno e settembre-ottobre**, lontano dalla folla di luglio-agosto.',
    costo: 'biglietto tra i più cari della valle, più il parcheggio a pagamento',
    comePrenotare: 'In alta stagione meglio prenotare online, anche se non sempre è obbligatorio.',
    cosaPortare: 'Scarpe comode: l\'edificio è enorme e tra piani e terrazza si cammina molto.',
    perChiEAdatta: 'Tutti. Alla terrazza si sale per le scale, e non c\'è un ascensore lungo tutto il percorso.',
    miaEsperienza:
      'Chambord si capisce salendo la scala a doppia elica e provando, come fanno tutti, a incrociare qualcuno che sale dall\'altra parte. Non succede mai, ed è proprio questo il punto: due rampe intrecciate intorno allo stesso asse, con finestre che si affacciano l\'una sull\'altra senza mai unirsi. Si discute ancora se l\'idea venga da Leonardo da Vinci, che negli ultimi anni di vita lavorava lì vicino per Francesco I. La sorpresa vera, però, è la terrazza in cima: un tetto diventato piazza all\'aperto, con decine di camini, torrette e lucernari scolpiti come un secondo palazzo sopra il primo. Da lassù la corte guardava le battute di caccia nella foresta sotto.',
    giudizio: 'imperdibile',
    alternative: ['Chenonceau, per il contrasto con un castello abitato e arredato', 'Blois, per la stratificazione di stili diversi in un solo edificio'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'La facciata rinascimentale del castello di Chambord con le torri, i camini e la lanterna della scala a doppia elica',
    immagine: '/images/francia/chambord.jpg',
  },
  {
    slug: 'chenonceau',
    paeseSlug: 'francia',
    destinazioneSlug: 'castelli-loira',
    nome: 'Chenonceau, il castello sul fiume',
    localita: 'Chenonceaux, Indre-et-Loire',
    cosE:
      'Un castello costruito proprio sopra il fiume Cher, con una galleria a ponte che attraversa l\'acqua. Durante la Seconda guerra mondiale, per un periodo, la galleria segnò la linea di demarcazione tra zona occupata e zona libera.',
    percheFarla:
      'È il castello più fotogenico della valle, arredato e vissuto. Lo hanno segnato donne influenti come Diana di Poitiers e Caterina de\' Medici, a cui si devono i due giardini uno di fronte all\'altro, e ha un dettaglio di storia del Novecento che pochi si aspettano.',
    durata: 'mezza giornata',
    periodo: 'tutto l\'anno; da visitare **all\'apertura o nell\'ultima ora**, per evitare la folla nella galleria.',
    costo: 'biglietto alto, in linea con Chambord',
    comePrenotare: 'In alta stagione meglio prenotare online.',
    cosaPortare: 'Niente di particolare.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Attraversare la galleria di Chenonceau, con l\'acqua del Cher che dalle finestre si vede scorrere sotto i piedi, è già qualcosa che nessun altro castello della Loira offre. Ma il dettaglio che cambia tutto è storico. Durante l\'occupazione tedesca il Cher segnava per un tratto il confine tra la zona occupata a nord e la zona libera di Vichy a sud, e la galleria, che attraversa proprio quel fiume, aveva l\'ingresso in zona occupata e l\'uscita in zona libera. Si racconta che alcuni siano passati di lì per fuggire. Camminarci sapendolo cambia del tutto la percezione di un edificio che altrimenti sarebbe solo elegante.',
    giudizio: 'imperdibile',
    alternative: ['Chambord, per lo sfarzo opposto', 'Azay-le-Rideau, per un altro castello sull\'acqua, più piccolo e meno affollato'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'La galleria ad arcate del castello di Chenonceau sul fiume Cher, riflessa nell\'acqua',
    immagine: '/images/francia/chenonceau.jpg',
  },
  {
    slug: 'loira-in-bicicletta',
    paeseSlug: 'francia',
    destinazioneSlug: 'castelli-loira',
    nome: 'La Loira in bicicletta',
    localita: 'Itinerario ciclabile della Loira a Vélo, circa 900 km lungo il fiume',
    cosE:
      'Un itinerario ciclabile segnalato che segue il corso della Loira, in piano, con noleggi a senso unico tra le città principali e i castelli a dieci-venti chilometri l\'uno dall\'altro.',
    percheFarla:
      'L\'UNESCO ha iscritto la valle della Loira come paesaggio, oltre che per i monumenti, e la bicicletta è il modo migliore per viverlo: gli argini, i banchi di sabbia, i paesi senza castello e senza turisti.',
    durata: 'una giornata per un tratto tra due castelli; una settimana per un tratto lungo',
    periodo: 'aprile-ottobre; per la temperatura i mesi ideali sono maggio-giugno e settembre.',
    costo: 'noleggio bici a prezzo contenuto, con un supplemento per la riconsegna a senso unico',
    comePrenotare: 'Il noleggio si prenota online nei punti lungo il percorso.',
    cosaPortare: 'Vestiti a strati, protezione solare, acqua.',
    perChiEAdatta: 'Quasi tutti: il percorso è in piano e la rete ciclabile è ben segnalata.',
    miaEsperienza:
      'Vedere la Loira in auto vuol dire visitare dei monumenti; in bici si attraversa un paesaggio. Pedalando sull\'argine si va da un castello all\'altro in due ore invece che in venti minuti, e in mezzo ci sono paesi senza castello, e quindi senza turisti, campi coltivati e la Loira stessa, uno degli ultimi grandi fiumi europei non canalizzati, con i banchi di sabbia che si spostano e le isole che cambiano di anno in anno. È così che questo paesaggio andrebbe visto, ed è anche il motivo per cui l\'UNESCO ha iscritto l\'intera valle invece dei singoli edifici.',
    giudizio: 'la-rifarei',
    alternative: ['Un classico giro in auto, se il tempo è poco', 'Una gita in barca tradizionale sul fiume, dove c\'è'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'Una bicicletta con le borse appoggiata al muretto lungo la Loira, sulla ciclovia Loire à Vélo a Saint-Dyé-sur-Loire',
    immagine: '/images/francia/loira-in-bicicletta.jpg',
  },
  {
    slug: 'cantina-troglodita-loira',
    paeseSlug: 'francia',
    destinazioneSlug: 'castelli-loira',
    nome: 'Una cantina trogloditica scavata nel tufo',
    localita: 'Zone di Vouvray, Chinon, Saumur',
    cosE:
      'Gallerie scavate nello stesso tufo bianco con cui sono stati costruiti i castelli della valle, oggi usate come cantine a una temperatura costante di circa dodici gradi, con le bottiglie in nicchie ricavate nella roccia.',
    percheFarla:
      'Racconta il legame materiale tra i castelli e il territorio: la pietra cavata per costruire ha lasciato chilometri di gallerie dove oggi matura il vino. Scendere in una di queste cantine si vive con il corpo, oltre che con il palato.',
    durata: 'un\'ora-un\'ora e mezza con degustazione',
    periodo: 'tutto l\'anno: è un ambiente sotterraneo a temperatura costante.',
    costo: 'degustazione a prezzo contenuto, spesso gratuita se si compra',
    comePrenotare: 'Meglio prendere appuntamento, soprattutto nelle proprietà più piccole.',
    cosaPortare: 'Una giacca leggera: sottoterra fa più fresco che fuori.',
    perChiEAdatta: 'Tutti, tranne chi soffre di claustrofobia negli spazi sotterranei bassi.',
    miaEsperienza:
      'In una di queste cantine si entra in una galleria a dodici gradi costanti, con le bottiglie incastrate in nicchie scavate nella parete, e il produttore racconta quasi sempre la stessa cosa sorprendente: quella pietra bianca e tenera, che si taglia con facilità, è la stessa che, cavata in blocchi, ha costruito il castello appena visto al di là del fiume. È un collegamento diretto tra il paesaggio di sopra e quello di sotto, ed è la parte della valle della Loira che le guide raccontano meno.',
    giudizio: 'bella-non-essenziale',
    alternative: ['Le grotte dove si coltivano i funghi champignon, nelle stesse gallerie', 'Una degustazione in superficie in una proprietà tradizionale'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'Botti di legno allineate in una cantina scavata nel tufo nel villaggio trogloditico di Rochemenier, nell\'Angiò',
    immagine: '/images/francia/cantina-troglodita-loira.jpg',
  },
  {
    slug: 'saint-emilion',
    paeseSlug: 'francia',
    destinazioneSlug: 'bordeaux',
    nome: 'Saint-Émilion e la chiesa monolitica',
    localita: 'Saint-Émilion, Gironda',
    cosE:
      'Un borgo medievale patrimonio UNESCO dal 1999 come primo paesaggio vitivinicolo iscritto al mondo, costruito sopra una rete di gallerie e catacombe, con al centro una chiesa scavata per intero nella roccia calcarea, la più grande d\'Europa nel suo genere.',
    percheFarla:
      'Tiene insieme vino, architettura e sottosuolo come nessun\'altra tappa della regione. E per capire la chiesa monolitica bisogna pensare ai secoli di scavo a mano che ci sono voluti.',
    durata: 'mezza giornata per il borgo e la chiesa, una giornata intera con una degustazione',
    periodo: 'tutto l\'anno; **settembre-ottobre** in vendemmia, sapendo che in quel periodo alcune proprietà riducono le visite.',
    costo: 'la visita della chiesa monolitica e delle catacombe si paga all\'ufficio del turismo; le degustazioni hanno prezzi molto diversi',
    comePrenotare:
      '**La chiesa monolitica e le catacombe si visitano solo con una visita guidata prenotata all\'ufficio del turismo**: da soli non si entra. Le degustazioni nelle proprietà si prenotano a parte.',
    cosaPortare: 'Scarpe comode: il borgo sta su un pendio, con vicoli acciottolati ripidi.',
    perChiEAdatta: 'Tutti, con attenzione ai bambini piccoli sulle scale ripide del borgo.',
    miaEsperienza:
      'Sapere come è stata fatta la chiesa monolitica di Saint-Émilion cambia il modo di guardarla: non è stata costruita, è stata **scavata**. A partire dal XII secolo, per secoli, gli artigiani hanno tolto pietra dall\'interno di una collina calcarea per ricavare un enorme spazio di culto, lasciando pilastri e volte nella roccia stessa. È la più grande chiesa scavata d\'Europa. Visitarla insieme alle catacombe sotto, con una guida che spiega la tecnica, dà un altro significato a tutto il borgo di sopra: l\'intero paese poggia su un sottosuolo bucato per secoli.',
    giudizio: 'imperdibile',
    alternative: ['Pomerol, a pochi chilometri, per un contrasto di scala nelle proprietà', 'I Graves, a sud di Bordeaux, per un paesaggio diverso'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'I tetti di Saint-Émilion visti dall\'alto del campanile della chiesa monolitica, con i vigneti all\'orizzonte',
    immagine: '/images/francia/saint-emilion.jpg',
  },
  {
    slug: 'sauternes-muffa-nobile',
    paeseSlug: 'francia',
    destinazioneSlug: 'bordeaux',
    nome: 'Sauternes e la muffa nobile',
    localita: 'Sauternes, Gironda',
    cosE:
      'La denominazione dei vini dolci di Bordeaux. Le nebbie del mattino, che nascono dove un affluente freddo incontra un fiume più caldo, creano le condizioni ideali per la Botrytis cinerea, la muffa nobile, che concentra gli zuccheri negli acini; la raccolta si fa a mano, a passaggi successivi, acino per acino.',
    percheFarla:
      'È la storia enologica più controintuitiva della regione: si guardano grappoli marci, raggrinziti e coperti di muffa grigia, sapendo che la squadra li ha aspettati tutto l\'anno.',
    durata: 'mezza giornata',
    periodo: 'la vendemmia va indicativamente **da fine settembre a novembre**, a passaggi successivi.',
    costo: 'degustazione a prezzo medio-alto in alcune delle proprietà più note; più accessibile nelle denominazioni satellite',
    comePrenotare: 'Serve l\'appuntamento, soprattutto in vendemmia, quando le proprietà sono al lavoro.',
    cosaPortare: 'Niente di particolare.',
    perChiEAdatta: 'Tutti; soprattutto chi è curioso del lavoro in vigna, oltre che del vino.',
    miaEsperienza:
      'La prima volta che si vedono i grappoli del Sauternes è uno shock: acini raggrinziti, coperti da una muffa grigiastra, che qualunque agricoltore normale butterebbe senza pensarci. Ed è proprio il risultato che si cerca. La Botrytis cinerea concentra gli zuccheri disidratando l\'acino, e le squadre ripassano nello stesso filare cinque o sei volte, in settimane diverse, raccogliendo a mano solo gli acini arrivati al punto giusto. Le rese sono bassissime: si dice che da una vite intera esca un solo bicchiere di vino. È uno dei processi più controintuitivi dell\'agricoltura europea, e capirlo sul posto vale più di qualunque degustazione.',
    giudizio: 'la-rifarei',
    alternative: ['I Graves, a nord, per rossi e bianchi secchi', 'Il Médoc, per il contrasto con i grandi rossi da invecchiamento'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'I filari spogli del vigneto di Château d\'Arche in inverno, con il villaggio di Sauternes in basso',
    immagine: '/images/francia/sauternes-muffa-nobile.jpg',
  },
  {
    slug: 'dune-du-pilat',
    paeseSlug: 'francia',
    destinazioneSlug: 'bordeaux',
    nome: 'La Dune du Pilat',
    localita: 'La Teste-de-Buch, vicino ad Arcachon',
    cosE:
      'La duna di sabbia più alta d\'Europa, che avanza di alcuni metri all\'anno verso l\'interno e a poco a poco inghiotte la pineta alle sue spalle.',
    percheFarla:
      'È un fenomeno geografico raro nell\'Europa occidentale, e la vista dalla cima, con l\'oceano da una parte e la foresta delle Landes dall\'altra, è tra le più sorprendenti della costa atlantica francese.',
    durata: 'un\'ora-un\'ora e mezza',
    periodo: 'tutto l\'anno; il momento più bello è **il tramonto**, con meno gente e una luce migliore.',
    costo: 'parcheggio a pagamento; la duna è ad accesso gratuito',
    comePrenotare: 'Nessuna prenotazione.',
    cosaPortare: '**D\'estate la sabbia scotta**: scarpe leggere o sandali robusti. Acqua, perché salire sulla sabbia che cede è faticoso.',
    perChiEAdatta: 'Tutti, con un minimo di forma fisica: la salita sulla sabbia è più faticosa di quanto sembri.',
    miaEsperienza:
      'Salire sulla Dune du Pilat è più faticoso di quanto faccia pensare l\'altezza: a ogni passo si affonda nella sabbia e metà dello sforzo va perso. In cima, però, la vista ripaga di tutto. Da una parte l\'Atlantico a perdita d\'occhio, dall\'altra la pineta delle Landes che la duna sta seppellendo piano piano, avanzando di qualche metro ogni anno. È uno dei pochi posti in Europa dove si vede un fenomeno geologico muoversi quasi in tempo reale, una generazione dopo l\'altra.',
    giudizio: 'la-rifarei',
    alternative: ['Il Bacino di Arcachon in barca', 'Il Cap Ferret, dall\'altra parte del bacino'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'Visitatori sulla cresta della Dune du Pilat con il banco di sabbia d\'Arguin e l\'oceano sotto',
    immagine: '/images/francia/dune-du-pilat.jpg',
  },
  {
    slug: 'ostriche-arcachon',
    paeseSlug: 'francia',
    destinazioneSlug: 'bordeaux',
    nome: 'Ostriche nelle cabanes di Arcachon',
    localita: 'Bacino di Arcachon, Gironda',
    cosE:
      'Le capanne dei produttori di ostriche sul Bacino di Arcachon, dove le ostriche si comprano e si mangiano sul posto, seduti su un pontile, per tradizione con piccole salsicce calde.',
    percheFarla:
      'È il modo più diretto ed economico di mangiare ostriche appena raccolte, da chi le alleva, in un ambiente informale che con un ristorante non ha niente a che vedere.',
    durata: 'un\'ora-due ore',
    periodo: 'tutto l\'anno; la stagione classica delle ostriche va da settembre ad aprile, anche se oggi si mangiano sempre.',
    costo: 'basso: in rapporto alla qualità è uno dei pasti più economici della zona',
    comePrenotare: 'Nessuna prenotazione: si arriva e si ordina alla capanna.',
    cosaPortare: 'Niente di particolare; al massimo un coltello da ostriche, se non lo danno.',
    perChiEAdatta: 'Chi ama il pesce crudo; meno chi non apprezza le ostriche.',
    miaEsperienza:
      'Mangiare ostriche in una cabane di Arcachon, seduti su un pontile di legno con i piedi che quasi toccano l\'acqua, non ha niente del ristorante. Si comprano da chi le ha appena raccolte, si aprono lì, e si accompagnano con pane, burro e le tradizionali salsicce calde alla griglia. Il sapore salino e fresco dell\'ostrica accanto alla salsiccia calda è un abbinamento locale che sorprende chi non lo conosce, ed è il modo più genuino di vivere il bacino.',
    giudizio: 'la-rifarei',
    alternative: ['Cancale, in Bretagna, per un\'altra zona storica delle ostriche', 'Un ristorante di pesce ad Arcachon, per una versione più formale'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'Un piatto di ostriche aperte con limone e le salsicce grigliate che le accompagnano nella tradizione di Arcachon',
    immagine: '/images/francia/ostriche-arcachon.jpg',
  },
  {
    slug: 'cantina-champagne',
    paeseSlug: 'francia',
    destinazioneSlug: 'vigneti-di-francia',
    nome: 'Una cantina di Champagne nelle crayères',
    localita: 'Reims o Épernay, Marna',
    cosE:
      'Le crayères sono cave di gesso di epoca gallo-romana, scavate per estrarre materiale da costruzione e oggi usate come cantine per far maturare lo Champagne: profonde decine di metri, con temperatura e umidità costanti tutto l\'anno.',
    percheFarla:
      'Si scende in gallerie scavate duemila anni fa, con milioni di bottiglie che riposano al buio: prima ancora del vino colpisce lo spazio. E si vedono da vicino il rémuage e la sboccatura.',
    durata: 'un\'ora-un\'ora e mezza con degustazione',
    periodo: 'tutto l\'anno: è un ambiente sotterraneo.',
    costo: 'da contenuto a molto alto secondo la maison; le grandi case hanno visite strutturate a prezzo fisso',
    comePrenotare: 'Meglio prenotare online; per le maison più note spesso è necessario.',
    cosaPortare: 'Una giacca: sottoterra fa più freddo che in superficie.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'In una crayère si entra in una galleria scavata dai Romani per estrarre il gesso e la si trova piena di scaffali, con milioni di bottiglie che riposano al buio e in silenzio. La parte tecnica più affascinante della visita sono due operazioni. Il rémuage, la lenta rotazione delle bottiglie per far scendere i sedimenti verso il collo, un tempo fatta a mano bottiglia per bottiglia e oggi spesso meccanizzata; e la sboccatura, quando il tappo di ghiaccio con i sedimenti viene espulso. E lo spazio stesso ha duemila anni di storia prima di essere diventato cantina: nessun\'altra regione vinicola francese offre questo in più.',
    giudizio: 'imperdibile',
    alternative: ['L\'Avenue de Champagne a Épernay, con le gallerie proprio sotto la strada', 'Una piccola maison a conduzione familiare, per un\'accoglienza più informale'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: 'Bottiglie di Champagne capovolte sulle pupitres nelle cantine scavate nel gesso di Pommery, a Reims',
    immagine: '/images/francia/cantina-champagne.jpg',
  },
  {
    slug: 'route-des-vins-alsazia',
    paeseSlug: 'francia',
    destinazioneSlug: 'vigneti-di-francia',
    nome: 'La Route des Vins d\'Alsace',
    localita: 'Circa 170 km tra Marlenheim e Thann, ai piedi dei Vosgi',
    cosE:
      'La strada dei vini più antica di Francia: collega decine di villaggi di case a graticcio tra i Vosgi e la pianura del Reno, e le cantine ricevono facilmente, spesso senza appuntamento.',
    percheFarla:
      'È la rotta del vino più accessibile e più bella di Francia: i villaggi distano pochi chilometri, la rete ciclabile è ottima, e i bianchi alsaziani (Riesling, Gewurztraminer, Pinot Gris) sono tra i più interessanti d\'Europa e costano poco.',
    durata: 'tre-cinque giorni per un tratto significativo',
    periodo: 'aprile-ottobre: maggio-giugno per il paesaggio verde, settembre-ottobre per la vendemmia.',
    costo: 'basso: molte degustazioni sono gratuite o a prezzo simbolico',
    comePrenotare: 'Molte cantine ricevono senza appuntamento; per le più note conviene comunque contattarle prima.',
    cosaPortare: 'In bicicletta: vestiti a strati e casco.',
    perChiEAdatta: 'Quasi tutti; ottima anche per le famiglie, perché i villaggi sono piccoli e si viaggia piano.',
    miaEsperienza:
      'Tra le rotte francesi, la Route des Vins d\'Alsace è la più bella da attraversare. Villaggi come Riquewihr, Eguisheim e Kaysersberg sono scenografici quasi all\'eccesso, con case a graticcio, gerani alle finestre e insegne in ferro battuto, ma sono veri e abitati, non ricostruiti per i turisti. E le cantine spesso ricevono senza appuntamento, in modo informale e a prezzi bassi: con la Borgogna non c\'è paragone. Qui si entra, si assaggia, si chiacchiera, e si spende poco. È la rotta giusta per chi non ha mai fatto un viaggio del vino e non sa da dove cominciare.',
    giudizio: 'imperdibile',
    alternative: ['Colmar e il Museo Unterlinden, per una pausa culturale', 'Il Mont Sainte-Odile, per una gita fuori dalla rotta principale'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: 'Le case a graticcio colorate e l\'insegna di una cantina di vini d\'Alsazia in una piazzetta di Eguisheim',
    immagine: '/images/francia/route-des-vins-alsazia.jpg',
  },
  {
    slug: 'climats-borgogna',
    paeseSlug: 'francia',
    destinazioneSlug: 'vigneti-di-francia',
    nome: 'Camminare tra i climats della Côte de Nuits',
    localita: 'Côte de Nuits, tra Digione e Beaune',
    cosE:
      'Un sentiero che attraversa a piedi i climats, le oltre milleduecento parcelle delimitate e con un nome, patrimonio UNESCO dal 2015, e permette di vedere da vicino i muri a secco che separano terreni di valore molto diverso.',
    percheFarla:
      'È il modo più diretto, e gratuito, di toccare con mano il terroir: due parcelle che all\'occhio sembrano identiche, separate da un muro, danno vini di prezzo incomparabile, e camminarci in mezzo insegna più di qualunque degustazione.',
    durata: 'due-tre ore',
    periodo: 'tutto l\'anno; **settembre-ottobre** per i colori della vendemmia.',
    costo: 'gratuito',
    comePrenotare: 'Nessuna prenotazione.',
    cosaPortare: 'Scarpe comode: il percorso è sterrato, tra i filari.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Camminando tra i climats della Côte de Nuits un\'idea astratta diventa concreta. In venti minuti a piedi si passa da una denominazione regionale a un grand cru che vale cento volte tanto, e l\'unico confine visibile è un muro a secco alto un metro. Il terreno sembra identico dalle due parti. Non lo è: cambiano l\'esposizione, il drenaggio, la pendenza di pochi gradi. Ma a occhio nudo la differenza non si vede, e solo il vino la registra. In altre regioni vinicole l\'idea esiste, ma nessuno l\'ha mai codificata e delimitata con questa precisione, e vederla disegnata sul terreno è la lezione più utile di un viaggio del vino.',
    giudizio: 'imperdibile',
    alternative: ['L\'Hôtel-Dieu di Beaune, per il patrimonio architettonico legato al vino', 'Una degustazione in un domaine, prenotata con settimane di anticipo'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: 'Un muro a secco in pietra che separa le parcelle di vigneto sulla Côte de Nuits, Borgogna',
    immagine: '/images/francia/climats-borgogna.jpg',
  },
  {
    slug: 'lavanda-provenza',
    paeseSlug: 'francia',
    destinazioneSlug: 'provenza',
    nome: 'La lavanda in fiore',
    localita: 'Altopiani di Valensole e di Sault',
    cosE:
      'I campi di lavanda e di lavandino della Provenza, che fioriscono in una finestra breve e diversa da un altopiano all\'altro (prima Valensole, poi Sault) e vengono tagliati subito dopo la fioritura.',
    percheFarla:
      'È uno dei paesaggi agricoli più fotografati al mondo, ma solo se si arriva nella finestra giusta: in Provenza nessun\'altra visita dipende così tanto dalla pianificazione.',
    durata: 'una giornata per vedere più campi',
    periodo:
      '**Valensole: metà giugno-metà luglio. Sault: metà luglio-inizio agosto.** Il taglio arriva subito dopo la fioritura: **conviene controllare lo stato dei campi pochi giorni prima di partire.**',
    costo: 'guardare dalla strada è gratis; alcune distillerie offrono visite a prezzo contenuto',
    comePrenotare: 'Per i campi non serve prenotare; per distillerie e abbazie con giardini conviene controllare gli orari.',
    cosaPortare: 'Cappello e acqua: spesso si cammina sotto il sole di piena estate. Repellente per le api, che nei campi sono tantissime.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Con la lavanda provenzale l\'errore più comune è arrivare nel momento sbagliato, e capita più spesso di quanto si pensi. I campi fioriscono in una finestra di poche settimane, diversa da un altopiano all\'altro, e vengono tagliati quasi subito. Valensole ha i campi larghi e regolari delle fotografie più famose, con il lavandino che fiorisce prima; Sault, più in alto, ha la lavanda vera, dal profumo più fine, che fiorisce più tardi. Chi arriva ad agosto pensando ai campi viola trova quasi sempre le stoppie. La regola pratica che conta più di tutte: controllare lo stato della fioritura pochi giorni prima di partire, perché cambia ogni anno con l\'andamento della stagione.',
    giudizio: 'la-rifarei',
    alternative: ['Il Musée de la Lavande, per capire la distillazione e la storia', 'Rinunciare alla lavanda e venire in Provenza a settembre, molto meno affollata'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'I filari di lavanda in fiore davanti all\'Abbazia di Sénanque, nella valle boscosa sopra Gordes, Provenza',
    immagine: '/images/francia/lavanda-provenza.jpg',
  },
  {
    slug: 'gole-verdon',
    paeseSlug: 'francia',
    destinazioneSlug: 'provenza',
    nome: 'Le Gole del Verdon',
    localita: 'Gorges du Verdon, Alpes-de-Haute-Provence e Var',
    cosE:
      'Il canyon più profondo d\'Europa, scavato dal fiume Verdon, con pareti di calcare che in alcuni tratti superano i settecento metri e un\'acqua verde smeraldo per le particelle di calcare in sospensione.',
    percheFarla:
      'È uno dei paesaggi più spettacolari di Francia, e lo si può vivere in tre modi: a piedi sul fondo, in kayak dal lago di Sainte-Croix o dall\'alto lungo la strada panoramica.',
    durata: 'una giornata per la strada panoramica; una giornata intera o più per il fondo del canyon',
    periodo: 'maggio-ottobre; **luglio-agosto molto affollati**, con i parcheggi dei punti panoramici pieni.',
    costo: 'gratuito per i punti panoramici; a pagamento il noleggio di kayak o canoe sul lago',
    comePrenotare: 'In alta stagione conviene prenotare in anticipo il noleggio delle barche.',
    cosaPortare: 'Scarpe da trekking per il fondo del canyon, che ha tratti impegnativi e alcuni tunnel scavati nella roccia da attraversare con la torcia.',
    perChiEAdatta: 'La strada panoramica va bene per tutti; il fondo richiede un minimo di allenamento e non è per chi soffre di vertigini nei tratti esposti.',
    miaEsperienza:
      'Il Verdon sorprende chi ha in mente solo la Provenza dei villaggi e della lavanda. Ci si trova davanti a un canyon con pareti verticali di centinaia di metri, un\'acqua di un verde quasi innaturale e sentieri che passano in tunnel scavati nella roccia, da attraversare con la torcia frontale. Camminando sul fondo, con le pareti che salgono da entrambi i lati, si ha un senso della scala che nessuna fotografia dall\'alto restituisce. Anche per questo il Verdon vale almeno quanto i villaggi più celebri del Luberon.',
    giudizio: 'imperdibile',
    alternative: ['Il lago di Sainte-Croix, per una giornata più rilassata in kayak', 'Moustiers-Sainte-Marie, il villaggio all\'ingresso delle gole'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Le alte pareti di roccia calcarea delle Gole del Verdon sopra l\'acqua verde del fiume',
    immagine: '/images/francia/gole-verdon.jpg',
  },
  {
    slug: 'calanques-marsiglia',
    paeseSlug: 'francia',
    destinazioneSlug: 'provenza',
    nome: 'Le Calanques tra Marsiglia e Cassis',
    localita: 'Parco Nazionale delle Calanques',
    cosE:
      'Un parco nazionale di falesie calcaree bianche che scendono a picco nel Mediterraneo e formano insenature strette e profonde, raggiungibili a piedi, in barca o in kayak.',
    percheFarla:
      'È un paesaggio mediterraneo estremo, a pochi minuti dal centro di una grande città, e il contrasto tra il bianco della roccia e il blu del mare è tra i più forti della costa francese.',
    durata: 'mezza giornata per una calanque; una giornata per un giro in barca tra più calanques',
    periodo:
      'aprile-ottobre; **d\'estate bisogna sempre controllare se l\'accesso è aperto**: per il rischio incendi il parco valuta la situazione giorno per giorno, **decide le chiusure il giorno prima**, e alcune calanque sono **a numero chiuso, con prenotazione gratuita obbligatoria**.',
    costo: 'via terra l\'accesso è gratuito (dove non è a numero chiuso); il giro in barca ha un costo medio',
    comePrenotare: '**D\'estate lo stato degli accessi va controllato ogni giorno** sul sito del parco; per le calanque a numero chiuso si prenota quando è richiesto.',
    cosaPortare: 'Scarpe da trekking per i sentieri, rocciosi e senza ombra; molta acqua.',
    perChiEAdatta: 'I sentieri richiedono un minimo di allenamento; alcune calanques si raggiungono solo dal mare.',
    miaEsperienza:
      'Le Calanques sorprendono chi associa Marsiglia solo al porto e al Vieux-Port. Bastano venti minuti di auto o di autobus dal centro per trovarsi tra falesie bianche verticali che scendono in un mare turchese, dentro insenature strette che sembrano fiordi mediterranei. La cosa pratica da sapere prima è che l\'accesso non è scontato. Gli incendi qui sono una minaccia reale e frequente, quindi d\'estate il parco decide ogni giorno quali sentieri restano aperti, e alcune calanque più delicate richiedono una prenotazione gratuita obbligatoria per limitare gli ingressi.',
    giudizio: 'imperdibile',
    alternative: ['Cassis, il paese all\'estremità est del parco, con un porticciolo pittoresco', 'Un giro in barca da Cassis per vedere più calanques in poche ore'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Le scogliere bianche della Calanque d\'En-Vau viste dal mare, tra Marsiglia e Cassis',
    immagine: '/images/francia/calanques-marsiglia.jpg',
  },
  {
    slug: 'pont-du-gard',
    paeseSlug: 'francia',
    destinazioneSlug: 'provenza',
    nome: 'Il Pont du Gard',
    localita: 'Vers-Pont-du-Gard, Gard',
    cosE:
      'Un acquedotto romano a tre ordini di arcate, alto quasi cinquanta metri, parte di una condotta di circa cinquanta chilometri con una pendenza media di appena venticinque centimetri al chilometro. È patrimonio UNESCO.',
    percheFarla:
      'È uno dei monumenti dell\'ingegneria romana meglio conservati al mondo, e sotto le arcate si fa il bagno nel Gardon: storia e refrigerio insieme.',
    durata: 'due-tre ore',
    periodo: 'tutto l\'anno; **d\'estate** per il bagno nel fiume.',
    costo: 'ingresso al sito e parcheggio a pagamento; il museo è incluso',
    comePrenotare: 'Non serve, salvo eventi speciali.',
    cosaPortare: 'D\'estate costume e asciugamano per il bagno nel fiume.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Il Pont du Gard colpisce più per la precisione che per le dimensioni. È un acquedotto costruito duemila anni fa, parte di una condotta lunga cinquanta chilometri con una pendenza media di appena venticinque centimetri al chilometro: un margine che oggi si otterrebbe con il laser. Lo si guarda dal basso, con le tre file di arcate una sopra l\'altra, e poi si fa il bagno nel fiume proprio sotto le arcate più basse. In Italia è raro poter stare dentro un monumento romano con la stessa naturalezza.',
    giudizio: 'imperdibile',
    alternative: ['Nîmes, con l\'arena romana meglio conservata al mondo', 'Uzès, il borgo vicino, meno affollato'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'I tre ordini di arcate in pietra dorata del Pont du Gard sopra il fiume Gardon',
    immagine: '/images/francia/pont-du-gard.jpg',
  },
  {
    slug: 'camargue-a-cavallo',
    paeseSlug: 'francia',
    destinazioneSlug: 'camargue',
    nome: 'A cavallo in Camargue',
    localita: 'Riserva della Camargue, delta del Rodano',
    cosE:
      'Una passeggiata con i cavalli camarguesi, una razza antichissima che nasce scura e diventa bianca tra i quattro e i sette anni, attraverso zone umide e praterie salmastre che non si raggiungono in altro modo.',
    percheFarla:
      'È il modo tradizionale in cui i gardians, i mandriani della Camargue, si muovono in questo territorio, e permette di avvicinarsi a fenicotteri e tori senza disturbarli come farebbe un veicolo.',
    durata: 'da un\'ora a mezza giornata secondo il percorso',
    periodo:
      'aprile-ottobre; **meglio evitare la piena estate per il caldo e le zanzare**, che al tramonto rendono la Camargue difficile.',
    costo: 'prezzo contenuto per un\'ora, più alto per un\'escursione di mezza giornata',
    comePrenotare: 'Si prenota in una manade (azienda di allevamento) o in un maneggio della zona.',
    cosaPortare: 'Repellente per insetti, maniche lunghe, cappello.',
    perChiEAdatta: 'Anche i principianti: i cavalli camarguesi sono noti per il carattere docile.',
    miaEsperienza:
      'A cavallo, in Camargue, si entra in zone che a piedi o in auto restano chiuse. Si attraversano acquitrini bassi, si passa accanto a gruppi di cavalli bianchi semibradi, e capita di avvicinarsi ai fenicotteri che filtrano il fango con il becco senza spaventarli, cosa che con un veicolo non succederebbe. È anche il modo in cui i gardians governano ancora oggi i tori e i cavalli di queste terre, e far parte di quella pratica per un\'ora, invece di guardarla da fuori, cambia il modo di vedere tutta la riserva.',
    giudizio: 'la-rifarei',
    alternative: ['Il birdwatching a piedi lungo la digue à la mer', 'Una visita a una manade, per vedere il lavoro dei gardians senza cavalcare'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Cavalli di razza Camargue al galoppo su un prato recintato vicino ai vigneti',
    immagine: '/images/francia/camargue-a-cavallo.jpg',
  },
  {
    slug: 'fenicotteri-camargue',
    paeseSlug: 'francia',
    destinazioneSlug: 'camargue',
    nome: 'I fenicotteri rosa di Pont de Gau',
    localita: 'Parc Ornithologique du Pont de Gau, Camargue',
    cosE:
      'Un parco ornitologico con passerelle da cui si osservano da vicino i fenicotteri rosa, presenti in Camargue tutto l\'anno e più numerosi in primavera ed estate, insieme a centinaia di altre specie di uccelli migratori.',
    percheFarla:
      'La Camargue è l\'unico sito di nidificazione regolare del fenicottero rosa in Francia, e questo parco permette di guardarli da vicino senza disturbarli.',
    durata: 'due ore',
    periodo: 'tutto l\'anno; primavera e inizio estate per il picco di presenze e per la migrazione.',
    costo: 'biglietto contenuto',
    comePrenotare: 'Non serve.',
    cosaPortare: 'Un binocolo, se c\'è; d\'estate repellente per insetti.',
    perChiEAdatta: 'Tutti; il percorso è su passerelle accessibili.',
    miaEsperienza:
      'Centinaia di fenicotteri rosa che filtrano il fango con il becco rovesciato all\'ingiù, una postura che a prima vista sembra innaturale, in un paesaggio piattissimo di canne e acqua bassa: è l\'immagine che riassume meglio la Camargue. A Pont de Gau ci si avvicina sulle passerelle senza disturbare gli uccelli, ed è il posto giusto per capire perché questo delta sia uno dei siti ornitologici più importanti d\'Europa.',
    giudizio: 'la-rifarei',
    alternative: ['La digue à la mer, per un birdwatching più libero e meno organizzato', 'Una gita in barca sull\'Étang de Vaccarès'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Un gruppo di fenicotteri rosa nell\'acqua bassa del Marais de Ginès, accanto al parco di Pont de Gau in Camargue',
    immagine: '/images/francia/fenicotteri-camargue.jpg',
  },
  {
    slug: 'aigues-mortes',
    paeseSlug: 'francia',
    destinazioneSlug: 'camargue',
    nome: 'Le mura di Aigues-Mortes e le saline rosa',
    localita: 'Aigues-Mortes, Gard',
    cosE:
      'Una città fortificata fatta costruire da Luigi IX nel XIII secolo come porto d\'imbarco per le crociate, con le mura medievali intatte, percorribili a piedi, affacciate su saline che in certe condizioni diventano rosa.',
    percheFarla:
      'È una delle città murate meglio conservate di Francia, legata direttamente alla storia delle crociate, e la vista dalle mura sulle saline rosa al tramonto è tra le più insolite della regione.',
    durata: 'due ore',
    periodo: 'tutto l\'anno; **d\'estate il rosa delle saline è più intenso**, per la concentrazione di sale e la presenza di microrganismi.',
    costo: 'biglietto contenuto per salire sulle mura',
    comePrenotare: 'Non serve.',
    cosaPortare: 'Niente di particolare.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Aigues-Mortes sembra uscita intatta dal Duecento. Le mura la circondano per intero e si percorrono a piedi lungo tutto il perimetro, con sotto la pianta a griglia della città medievale e oltre le mura le saline che arrivano fino all\'orizzonte. Luigi IX la fece costruire come porto per imbarcare i crociati verso la Terra Santa; oggi il mare si è ritirato di alcuni chilometri. Salire sulle mura al tramonto, quando le saline diventano rosa per la concentrazione di sale, è uno dei modi più belli di chiudere una giornata in Camargue.',
    giudizio: 'la-rifarei',
    alternative: ['Le saline di Salin-de-Giraud, più vicine al cuore della riserva', 'Nîmes, poco distante, per l\'arena romana'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Le saline di Aigues-Mortes con l\'acqua rosata dei bacini e i cumuli di sale bianco all\'orizzonte',
    immagine: '/images/francia/aigues-mortes.jpg',
  },
  {
    slug: 'castelli-catari',
    paeseSlug: 'francia',
    destinazioneSlug: 'occitania',
    nome: 'Un castello cataro',
    localita: 'Quéribus, Peyrepertuse o Montségur, Occitania',
    cosE:
      'Fortezze arroccate su creste calcaree a centinaia di metri d\'altezza, ultimi rifugi della comunità catara sterminata dalla crociata albigese nel XIII secolo. Si lascia l\'auto a un parcheggio più in basso e si sale solo a piedi.',
    percheFarla:
      'Raccontano una delle vicende più dure del medioevo europeo, una crociata bandita contro cristiani dello stesso paese, in un paesaggio che basterebbe da solo a giustificare la salita.',
    durata: 'mezza giornata per un castello, con salita e discesa a piedi',
    periodo: 'aprile-ottobre; **d\'estate meglio evitare le ore centrali**: sulle creste non c\'è ombra e il vento è quasi sempre forte.',
    costo: 'biglietto contenuto o gratuito secondo il sito',
    comePrenotare: 'Non serve.',
    cosaPortare: 'Scarpe da trekking, acqua, giacca a vento (in cima il vento non smette quasi mai).',
    perChiEAdatta: 'Serve un minimo di forma fisica: la salita è spesso ripida e su terreno sconnesso.',
    miaEsperienza:
      'Salire a Peyrepertuse o a Quéribus vuol dire camminare per mezz\'ora o un\'ora su un sentiero ripido, con un vento che non si ferma mai, fino a una fortezza costruita su una cresta calcarea larga pochi metri, a centinaia di metri d\'altezza. Da lassù si guarda una valle vuota e si pensa a cosa volesse dire rifugiarsi lì nel Duecento, quando il papato bandì una crociata contro cristiani dello stesso paese, la comunità catara, e non contro musulmani. La campagna durò vent\'anni e finì con uno sterminio. Di quella gente sono rimasti solo queste rocce e i nomi dei luoghi sui cartelli. Fuori dalla Francia è una storia poco conosciuta, e questi castelli sono il modo più diretto per incontrarla.',
    giudizio: 'imperdibile',
    alternative: ['Il museo del catarismo a Villerouge-Termenès', 'Carcassonne, per un contesto fortificato del tutto diverso'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Le rovine del castello cataro di Peyrepertuse sulla cresta rocciosa avvolta dalle nuvole, nelle Corbières',
    immagine: '/images/francia/castelli-catari.jpg',
  },
  {
    slug: 'canal-du-midi',
    paeseSlug: 'francia',
    destinazioneSlug: 'occitania',
    nome: 'Il Canal du Midi in barca o in bicicletta',
    localita: 'Da Tolosa a Sète, oltre 200 km',
    cosE:
      'Un canale del Seicento, patrimonio UNESCO, che collega l\'Atlantico al Mediterraneo con soluzioni tecniche innovative per l\'epoca, come le scale di chiuse di Fonseranes, e un\'alzaia alberata di platani che si percorre in bici per tutta la lunghezza.',
    percheFarla:
      'È un\'opera di ingegneria idraulica di oltre trecento anni fa che funziona ancora perfettamente, e percorrerla in barca a noleggio (senza patente nautica) o in bici sull\'alzaia è uno dei modi più rilassanti di attraversare l\'Occitania.',
    durata: 'una giornata per un tratto in bici; diversi giorni per una crociera in barca',
    periodo: 'aprile-ottobre.',
    costo: 'noleggio bici a prezzo contenuto; noleggio barca (a settimana o a giornata) a prezzo medio-alto',
    comePrenotare: 'In alta stagione la barca va prenotata con anticipo.',
    cosaPortare: 'Per la barca non serve la patente, ma è utile il breve briefing di sicurezza del noleggiatore.',
    perChiEAdatta: 'Tutti; su un canale si naviga piano e non serve esperienza.',
    miaEsperienza:
      'Il Canal du Midi si apprezza meglio muovendosi alla sua velocità. Pedalando o navigando piano sotto i platani secolari che fanno ombra sull\'alzaia, si passa davanti alle soluzioni pensate nel Seicento per superare ogni dislivello. Il punto più spettacolare sono le scale di chiuse di Fonseranes, una serie di bacini in fila che fanno salire o scendere le barche di diversi metri. Il canale risolve un problema, collegare due mari, con un\'eleganza che si vede ancora oggi, e percorrerlo è uno dei modi più rilassanti di attraversare questa parte di Francia.',
    giudizio: 'la-rifarei',
    alternative: ['Una gita in giornata su un tratto breve del canale', 'Il Canal de la Robine, un ramo minore verso Narbonne'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Il Canal du Midi tra canneti, alberi e cipressi visto dalla prua di una barca in partenza dal porto di Homps',
    immagine: '/images/francia/canal-du-midi.jpg',
  },
  {
    slug: 'carcassonne',
    paeseSlug: 'francia',
    destinazioneSlug: 'occitania',
    nome: 'Carcassonne di sera',
    localita: 'La Cité, Carcassonne, Aude',
    cosE:
      'La città fortificata più grande d\'Europa, con doppia cinta muraria e cinquantadue torri, restaurata nell\'Ottocento da Viollet-le-Duc con criteri molto discussi, che hanno dato l\'immagine di oggi, comprese le tipiche torrette a punta.',
    percheFarla:
      'Di giorno la cité è un flusso continuo di visitatori tra negozi per turisti; di sera, con i pullman ripartiti e le mura illuminate, è un altro posto, molto più bello.',
    durata: 'un\'ora e mezza-due ore di sera',
    periodo: 'tutto l\'anno; in qualunque stagione il momento giusto è **la sera**.',
    costo: 'l\'accesso alla cité è gratuito; il castello comitale all\'interno ha un biglietto a parte',
    comePrenotare: 'Per la visita serale della cité non serve; il castello è aperto solo di giorno.',
    cosaPortare: 'Niente di particolare; scarpe comode per i vicoli acciottolati.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Carcassonne va presa per quello che è: un restauro ottocentesco molto discusso, che secondo alcuni storici ha inventato elementi come le torrette a punta, probabilmente mai esistite nella forma attuale. Detto questo, l\'effetto resta impressionante, soprattutto la sera. Nelle ore centrali la Cité è un corridoio di negozi di souvenir e ristoranti turistici, pieno di gente scesa dai pullman. Dopo le diciotto, quando i gruppi sono ripartiti, si cammina tra le due cinte murarie senza incontrare quasi nessuno, con le torri illuminate contro il cielo scuro. È in quel momento che si capisce perché, nonostante le polemiche sul restauro, resti uno dei monumenti più fotografati di Francia.',
    giudizio: 'la-rifarei',
    alternative: ['La città bassa (Bastide Saint-Louis), più economica e meno turistica', 'Il castello comitale, per la parte più antica'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Il ponte d\'ingresso e le torri a punta del Château Comtal dentro la Cité di Carcassonne',
    immagine: '/images/francia/carcassonne.jpg',
  },
  {
    slug: 'vallee-blanche',
    paeseSlug: 'francia',
    destinazioneSlug: 'sciare-in-francia',
    nome: 'La Vallée Blanche',
    localita: 'Massiccio del Monte Bianco, da Chamonix',
    cosE:
      'Una discesa fuoripista di oltre venti chilometri su ghiacciaio, dall\'Aiguille du Midi (3.842 m) fino a Chamonix, tra crepacci, seracchi e panorami sul massiccio del Monte Bianco. È un itinerario glaciale, non una pista battuta, e serve una guida.',
    percheFarla:
      'È forse la discesa fuoripista più famosa al mondo, e in Europa nessun\'altra sciata mette insieme un dislivello e un paesaggio glaciale di questa portata.',
    durata: 'mezza giornata, compresa la salita in funivia',
    periodo:
      'da dicembre a maggio, con condizioni del ghiacciaio che cambiano molto da un anno all\'altro; **la guida alpina valuta le condizioni del giorno prima di partire**.',
    costo: 'costo elevato per la guida (in gruppo o privata), più il biglietto della funivia per l\'Aiguille du Midi',
    comePrenotare: '**È obbligatoria una guida alpina certificata**: da soli non si fa, perché ci sono crepacci non segnalati.',
    cosaPortare: 'Attrezzatura da sci fuoripista; ARVA, pala e sonda, che la guida fornisce o chiede di portare; abbigliamento tecnico per l\'alta quota.',
    perChiEAdatta:
      'Sciatori di buon livello, anche senza esperienza di fuoripista tecnico, ma sicuri su neve variabile e con la resistenza per un percorso lungo.',
    miaEsperienza:
      'La Vallée Blanche comincia con un\'uscita che da sola vale il viaggio. Dalla stazione dell\'Aiguille du Midi si esce su una cresta stretta, spesso con una corda di sicurezza, a quasi 3.850 metri, con un vuoto di centinaia di metri sotto i piedi, prima di mettere gli sci sul ghiacciaio. Da lì la discesa attraversa crepacci, seracchi e pareti di ghiaccio per oltre venti chilometri, fino a rientrare tra gli alberi sopra Chamonix. Come sciata non è durissima, ma bisogna essere sicuri sul terreno glaciale, e va fatta solo con una guida che conosce le condizioni del giorno: sotto la neve fresca i crepacci non sempre si vedono.',
    giudizio: 'imperdibile',
    alternative: ['Una discesa fuoripista più breve e meno impegnativa nella stessa zona', 'Salire all\'Aiguille du Midi senza sciare, solo per il panorama'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: 'Alpinisti in cordata sulla cresta di neve che scende dall\'Aiguille du Midi verso la Vallée Blanche',
    immagine: '/images/francia/vallee-blanche.jpg',
  },
  {
    slug: 'aiguille-du-midi',
    paeseSlug: 'francia',
    destinazioneSlug: 'sciare-in-francia',
    nome: 'L\'Aiguille du Midi',
    localita: 'Chamonix, Alta Savoia',
    cosE:
      'Una funivia che da Chamonix sale fino a 3.842 metri in circa venti minuti, con una terrazza panoramica e un ponte sospeso di vetro affacciato sul massiccio del Monte Bianco.',
    percheFarla:
      'È una delle salite in funivia più spettacolari d\'Europa, va bene anche per chi non scia, e porta dritti in alta montagna, con il Monte Bianco a due passi.',
    durata: 'due-tre ore tra salita, terrazza e discesa',
    periodo:
      'tutto l\'anno, ma **con vento forte la terrazza esterna può chiudere**: conviene controllare il giorno stesso.',
    costo: 'biglietto della funivia caro, tra i più cari d\'Europa per un impianto turistico',
    comePrenotare: 'In alta stagione è quasi indispensabile prenotare online la fascia oraria: senza, le code superano le due ore.',
    cosaPortare:
      'Una giacca pesante anche in piena estate: in cima spesso si è sotto lo zero. Occhiali da sole per la neve.',
    perChiEAdatta:
      'Tutti, ma **l\'altitudine può dare lievi malesseri** (il mal di montagna) a chi sale in fretta da quote basse: sconsigliata a chi ha problemi cardiaci o respiratori senza aver sentito un medico.',
    miaEsperienza:
      'Salendo all\'Aiguille du Midi si passa da Chamonix, a poco più di mille metri, a quasi 3.850 in venti minuti di funivia, e il cambiamento si sente nel corpo oltre che negli occhi: l\'aria è molto più fredda e rarefatta, e in cima il massiccio del Monte Bianco appare a due passi, con le sue pareti di ghiaccio e roccia. Il ponte sospeso di vetro, costruito a sbalzo sul vuoto, mette a disagio chi soffre di vertigini, ma offre una vista che sulle Alpi occidentali non ha equivalenti. Vale la pena anche per chi non scia per niente.',
    giudizio: 'imperdibile',
    alternative: ['Il trenino del Montenvers per la Mer de Glace, più accessibile', 'Il Brévent, sul lato opposto della valle, per la vista sull\'intero massiccio del Monte Bianco'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: 'La guglia dell\'Aiguille du Midi con la stazione in cima e un pilone della funivia in primo piano, vista da Chamonix',
    immagine: '/images/francia/aiguille-du-midi.jpg',
  },
  {
    slug: 'scialpinismo-francia',
    paeseSlug: 'francia',
    destinazioneSlug: 'sciare-in-francia',
    nome: 'Scialpinismo nelle valli laterali',
    localita: 'Valli laterali dei grandi comprensori alpini francesi',
    cosE:
      'Salite con le pelli di foca su percorsi non battuti, lontano dagli impianti, nelle valli laterali dei grandi comprensori, dove il paesaggio torna silenzioso e la neve non è preparata dai gatti delle nevi.',
    percheFarla:
      'È il contrario del comprensorio: niente impianti, niente code, niente rumore, solo il proprio passo e la neve fresca, spesso a pochi chilometri dalle stazioni più affollate.',
    durata: 'da mezza giornata a una giornata intera',
    periodo: 'dicembre-aprile, secondo l\'innevamento e la stabilità del manto nevoso.',
    costo: 'basso se si è autonomi con la propria attrezzatura; medio con una guida alpina',
    comePrenotare:
      'Chi non sa valutare il rischio valanghe dovrebbe andare con una guida alpina; **il bollettino valanghe locale va sempre letto prima di partire**.',
    cosaPortare: 'Sci da scialpinismo o splitboard, pelli, ARVA, pala, sonda, e la capacità di usarli.',
    perChiEAdatta:
      'Serve una buona forma fisica e, per chi va senza guida, saper fare autosoccorso in valanga e leggere il bollettino nivometeorologico.',
    miaEsperienza:
      'Tra sciare in un grande comprensorio e fare scialpinismo in una valle laterale la differenza è quasi quella tra due sport. Si sale con le pelli in silenzio, il paesaggio cambia lentamente sotto i propri passi invece che sotto una seggiovia, e si arriva a una discesa su neve che nessuno ha toccato, spesso a un\'ora di cammino da una delle stazioni più affollate delle Alpi. Richiede una preparazione tecnica seria, soprattutto per valutare il rischio valanghe, ma restituisce con la montagna un rapporto del tutto diverso da quello della pista battuta.',
    giudizio: 'la-rifarei',
    alternative: ['Le ciaspole, per un\'esperienza simile senza il rischio tecnico dello scialpinismo', 'Un corso base di sicurezza in valanga prima di iniziare'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: 'Uno scialpinista in salita con le pelli su un pendio innevato lontano dagli impianti',
  },
  {
    slug: 'tour-du-mont-blanc',
    paeseSlug: 'francia',
    destinazioneSlug: 'montagne-francesi',
    nome: 'Il Tour du Mont Blanc',
    localita: 'Circa 170 km attorno al massiccio del Monte Bianco, tra Francia, Italia e Svizzera',
    cosE:
      'Un trekking a tappe che gira tutto intorno al massiccio del Monte Bianco, attraverso tre paesi, in circa dieci giorni, con una notte ogni sera in un rifugio diverso e circa diecimila metri di dislivello complessivo.',
    percheFarla:
      'È forse il trekking a tappe più bello d\'Europa: il massiccio resta sempre in vista da angolazioni diverse, e ogni versante (francese, italiano, svizzero) ha un carattere e una cucina propri.',
    durata: '7-11 giorni per il giro completo; esistono versioni ridotte di 3-5 tappe',
    periodo:
      '**da metà giugno a metà settembre**, quando i rifugi sono aperti e i colli alti sono liberi dalla neve. **Il mese migliore è settembre**: meno gente, aria limpida, rifugi ancora aperti nella prima metà del mese.',
    costo:
      'mezza pensione in rifugio ogni notte, con tariffe nella fascia alta delle Alpi; vanno messi in conto anche i pranzi al sacco ed eventuali funivie',
    comePrenotare:
      '**I rifugi per l\'estate si prenotano da gennaio-febbraio**: è il vincolo su cui si costruisce tutto l\'itinerario, perché le tappe si incastrano tra loro e spostarne una spesso vuol dire rifare tutte le prenotazioni.',
    cosaPortare:
      'Zaino da 30-40 litri, sacco lenzuolo (obbligatorio in tutti i rifugi), scarponi rodati, strati per la notte in quota, quando si scende vicino allo zero, guscio antipioggia, torcia frontale e **contanti** per i rifugi dove la carta non funziona perché non c\'è linea.',
    perChiEAdatta:
      'Servono allenamento e l\'abitudine a camminare più giorni di fila con lo zaino, non tecnica alpinistica: non ci sono tratti attrezzati obbligatori, ma le tappe sono lunghe (spesso 800-900 metri di dislivello) e vanno prese sul serio.',
    miaEsperienza:
      'Il Tour du Mont Blanc si capisce attraversando i tre versanti uno dopo l\'altro. Quello francese è verticale e ghiacciato, con il massiccio che incombe da vicino; quello italiano si apre su prati larghissimi, con la parete che da lontano si vede intera; quello svizzero è ordinato, verde, curato quasi come un giardino. Tre modi del tutto diversi di stare sotto la stessa cima. Mi ha sorpreso soprattutto quanto sia internazionale: in rifugio si dorme con persone di dieci nazionalità che fanno lo stesso giro in senso opposto, e capita di ritrovarle su un colle tre giorni dopo. La regola che decide tutto, però, è burocratica: i rifugi finiscono già a gennaio-febbraio, e chi ci pensa a giugno, anche per settembre, spesso non trova più posto nelle tappe principali.',
    giudizio: 'imperdibile',
    alternative: [
      'Una versione ridotta di 3-5 tappe solo sul versante francese o su quello italiano',
      'Il Tour des Écrins, meno affollato e più severo',
      'Escursioni in giornata da Chamonix, per un assaggio senza l\'impegno delle tappe',
    ],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: 'Il Lac Blanc tra le rocce delle Aiguilles Rouges, tappa classica del Tour du Mont Blanc sopra Chamonix',
    immagine: '/images/francia/tour-du-mont-blanc.jpg',
  },
  {
    slug: 'gr20-corsica',
    paeseSlug: 'francia',
    destinazioneSlug: 'montagne-francesi',
    nome: 'Il GR20 in Corsica',
    localita: 'Dorsale montuosa della Corsica, da Calenzana a Conca, circa 180 km',
    cosE:
      'Un sentiero a tappe considerato il percorso segnalato più duro d\'Europa: quindici tappe tra creste di granito, laghi glaciali e boschi di pino laricio, con tratti attrezzati con catene e passaggi dove servono le mani.',
    percheFarla:
      'Attraversa un paesaggio di montagna unico nel Mediterraneo, e arrivare in fondo è un traguardo fisico e mentale che pochi trekking europei danno con la stessa intensità.',
    durata: '12-16 giorni per il percorso completo; si può fare anche solo la metà nord o la metà sud',
    periodo:
      'indicativamente **da giugno a settembre**: i mesi centrali sono molto caldi nei tratti bassi, e i rifugi sono aperti solo in quel periodo.',
    costo: 'i rifugi sono spartani e costano meno che sulle Alpi; molti si portano tenda e cibo, per risparmiare e per essere più liberi',
    comePrenotare: 'In alta stagione i rifugi principali si prenotano con settimane di anticipo; conviene informarsi anche sui posti tenda.',
    cosaPortare:
      'Attrezzatura completa da trekking tecnico, scarponi robusti, una corda leggera se richiesta per alcuni passaggi, molta acqua (non sempre se ne trova), protezione solare.',
    perChiEAdatta:
      '**Non è un trekking da cui cominciare**: servono esperienza su terreno tecnico, piede fermo sulla roccia e la resistenza per giornate di sette-nove ore con dislivelli enormi. Ogni anno molti si ritirano dopo le prime tappe.',
    miaEsperienza:
      'Il GR20 va affrontato sapendo bene cosa aspettarsi. Altro che passeggiate panoramiche: sono giornate intere su creste di granito, con passaggi dove si usano le mani, catene fisse sui tratti esposti e un caldo che nelle tappe basse può sfinire. In cambio c\'è un paesaggio che nel Mediterraneo non ha uguali: laghi glaciali chiusi tra pareti di granito, boschi secolari di pino laricio e un isolamento raro nell\'Europa occidentale. La metà nord è la più dura e la più spettacolare; la metà sud, più accessibile, è la scelta giusta per chi vuole assaggiare il percorso senza affrontarne tutta la difficoltà.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Mare e Monti, un trekking corso meno impegnativo lungo la costa nord-occidentale',
      'La sola metà sud del GR20, più accessibile',
    ],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: 'Le creste di granito della Corsica illuminate dal sole del tardo pomeriggio lungo il GR20 tra Carozzu e Asco',
    immagine: '/images/francia/gr20-corsica.jpg',
  },
  {
    slug: 'mer-de-glace',
    paeseSlug: 'francia',
    destinazioneSlug: 'montagne-francesi',
    nome: 'La Mer de Glace',
    localita: 'Montenvers, sopra Chamonix',
    cosE:
      'Il ghiacciaio più grande di Francia, che si raggiunge da Chamonix con uno storico trenino a cremagliera. C\'è una grotta di ghiaccio scavata ogni anno, e una scala per scendere lungo la quale sono segnati gli anni e il livello del ghiacciaio in quegli anni.',
    percheFarla:
      'È la testimonianza più diretta e più fisica del ritiro dei ghiacciai alpini che si possa vedere in Europa: si scende una scala, e a ogni cartello si vede quanto il ghiaccio si è ritirato in pochi decenni.',
    durata: 'mezza giornata, treno compreso',
    periodo: 'da maggio a ottobre, secondo l\'apertura stagionale del trenino: **conviene controllare le date**.',
    costo: 'biglietto del trenino a cremagliera medio-alto; supplemento per la grotta di ghiaccio',
    comePrenotare: 'In alta stagione meglio prenotare online il trenino.',
    cosaPortare: 'Una giacca pesante: nella grotta di ghiaccio si è sempre sotto lo zero.',
    perChiEAdatta: 'Tutti; per scendere alla grotta ci sono diverse centinaia di gradini, con una funivia di supporto in alcuni tratti.',
    miaEsperienza:
      'Di tutto il massiccio del Monte Bianco, la Mer de Glace è la cosa più dura da guardare, per quello che mostra più che per la sua bellezza. Si scende una scala verso la grotta di ghiaccio scavata ogni anno nel ghiacciaio, e ai lati ci sono i cartelli con gli anni e il livello che il ghiaccio raggiungeva: 1990 qui, 2000 più sotto, 2010 ancora più sotto. Si continua a scendere, e il ghiacciaio è sempre più lontano dal punto in cui un tempo arrivava, fino al trenino. Una visita turistica diventa, quasi senza volerlo, una lezione diretta sul cambiamento climatico, misurato in decenni e in metri.',
    giudizio: 'imperdibile',
    alternative: ['L\'Aiguille du Midi, per guardare lo stesso massiccio dall\'alto', 'Il Glacier Blanc negli Écrins, un altro ghiacciaio francese meno affollato'],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: 'La lingua di ghiaccio della Mer de Glace che scende nella valle tra le pareti di roccia, vista da Montenvers',
    immagine: '/images/francia/mer-de-glace.jpg',
  },
]
